<?php
    require_once dirname(dirname(__FILE__)).'/vendor/autoload.php';
    use GuzzleHttp\Psr7;
    use GuzzleHttp\Exception\RequestException;
    use Firebase\JWT\JWT;

    
        function speedyman_shipping_method()
        {
            if (!class_exists('Speedyman')) {
                class Speedyman extends WC_Shipping_Method
                {

                    const PROD_URL    = 'https://app.speedyman.cl/api/';
                    const TESTING_URL = 'https://sandbox.speedyman.cl/api/';


                    public function __construct()
                    {
                        $this->id = 'speedyman';
                        $this->method_title = __('Speedyman Shipping', 'speedyman');
                        $this->method_description = __('Envio de pedidos usando Speedyman', 'speedyman');
                        
                        $this->init();
                        $this->enabled = isset($this->settings['enabled']) ? $this->settings['enabled'] : 'yes';
                        $this->description = isset($this->settings['title']) ? $this->settings['title'] : __('Envio de pedidos usando Speedyman', 'speedyman');
                        $this->title = isset($this->settings['title']) ? $this->settings['title'] : __('Speedyman', 'speedyman');
                        $this->api_key = $this->settings['apikey'];
                        $this->testmode = 'yes' == $this->settings['testmode'];
                        $this->url = self::TESTING_URL; //self::PROD_URL;
                        $this->email = $this->settings['email'];
                        $this->secret = $this->settings['secret'];
                        $this->pickup = 'Direccion';
                        $this->days = $this->settings['days'];
                        $this->pay_shipping = $this->settings['pay_shipping'] != '' ? $this->settings['pay_shipping'] : 'Customer';
                        $this->free_shipping = $this->settings['free_shipping'] != 0 ? $this->settings['free_shipping'] : 0;
                    }   

                    /**
                    * Load the settings API
                    */
                    function init()
                    {
                        $this->init_form_fields();
                        $this->init_settings();
                        add_action('woocommerce_update_options_shipping_' . $this->id, array($this, 'process_admin_options'));
                    }

                    function init_form_fields()
                    {
                        $this->form_fields = array(
                            'enabled' => array(
                                'title' => 'Activo',
                                'type' => 'checkbox',
                                'description' => 'Activar método de despacho.',
                                'default' => 'yes'
                            ),
                            'email' => array(
                                'title' => __('Correo Electrónico', 'speedyman'),
                                'type' => 'email',
                                'description' => 'Indica tu correo electrónico registrado en speedyman',
                                'default' => ''
                            ),
                            'apikey' => array(
                                'title' => __('Api Key', 'speedyman'),
                                'type' => 'text',
                                'description' => 'Api Key provista por Speedy Man, si no la tienes, regístrate <a href="https://app.speedyman.cl/sign-up" target="_blank">Aquí</a>',
                                'default' => ''
                            ),
                            'secret' => array(
                                'title' => __('Api Secret', 'speedyman'),
                                'type' => 'text',
                                'description' => 'Secreto compartido para asegurar la comunicación con la API de Speedy Man',
                                'default' => ''
                            ),
                            'pay_shipping' => array(
                                'title' => __('Quien paga el envío?', 'speedyman'),
                                'type' => 'select',
                                'description' => 'Indica quien debe pagar el envío del producto',
                                'options' => array(
                                    'Me'        => __( 'La tienda (costo cero para el cliente)', 'speedyman' ),
                                    'Both'      => __( 'Ambos (la tienda paga la mitad, el cliente se le agrega la otra mitad en el pedido)', 'speedyman' ),
                                    'Customer'  => __( 'El cliente', 'speedyman' )
                                ),
                                'default' => 'Customer'
                            ),
                            'free_shipping' => array(
                                'title' => __('Envio gratis desde', 'speedyman'),
                                'type' => 'number',
                                'description' => 'Indica el monto mínimo para despacho costo cero',
                                'default' => 0
                            ),
                            'days' => array(
                                'title' => __('Dias necesarios para enviar el pedido', 'speedyman'),
                                'type' => 'select',
                                'description' => 'Indica la cantidad de dias que necesitas para enviar el pedido una vez recibido el pago conforme',
                                'options' => array(
                                    '1'        => __( 'Un día', 'speedyman' ),
                                    '2'        => __( 'Dos días', 'speedyman' ),
                                    '3'        => __( 'Tres días', 'speedyman' ),
                                    '4'        => __( 'Cuatro días', 'speedyman' ),
                                    '5'        => __( 'Cinco días', 'speedyman' ),
                                ),
                                'default' => '1'
                            ),
                        
                        );
                    }

                    public function add_shipping_method( $methods ) {
                        $methods['speedyman_shipping'] = 'Speedyman';
                    
                        return $methods;
                    }

                    public function setConfigLink($links) { 
                        $settings_link = '<a href="admin.php?page=wc-settings&tab=shipping&section=speedyman">Configuración</a>'; 
                        array_unshift($links, $settings_link );
                        
                        return $links; 
                    }

                    public function add_link_to_register( $links, $file ) {    
                        if ( plugin_basename( __FILE__ ) == $file ) {
                            $row_meta = array(
                            'register'    => '<a href="https://app.speedyman.cl/sign-up" target="_BLANK">Regístrate en Speedyman</a>'
                            );
                
                            return array_merge( $links, $row_meta );
                        }
                        return (array) $links;
                    }
                      
                    //Generate requests to speedyman api
                    private function sendRequest(string $url, array $obj = [], bool $array=false, string $method = 'GET'){
                        $ret = '';
                        $sign = JWT::encode($obj, $this->secret);
                        $obj['signature'] = $sign;
                        $client = new \GuzzleHttp\Client();
                        $arg = strtoupper($method) == 'GET' ? 'query' : 'body';
                        $r = $client->request(strtoupper($method), $url, [$arg => $obj]);
                        if($r->getStatusCode()==200){
                            $ret = json_decode($r->getBody()->getContents(), $array);
                        }
                        return $ret;
                    }



                    public function address(string $add, bool $array = false){
                        $obj = [
                            'apiKey' => $this->api_key,
                            'address' => $add,
                        ];
                        return $this->sendRequest($this->url.'address/check', $obj, $array);
                    }

                    private function getShopInfo(bool $array = false){
                        $obj = [
                            'apiKey' => $this->api_key,
                            'email' => $this->email,
                        ];
                        return $this->sendRequest($this->url.'user/details',$obj, $array );
                    }
                    

                    public function schedule(bool $array = false){
                        $obj = [
                            'apiKey' => $this->api_key,
                            'days' => intval($this->days),
                        ];
                        return $this->sendRequest($this->url.'schedule/delayed', $obj, $array);
                    }

                    private function get_stations(bool $array=false){
                        $obj = [
                            'apiKey' => $this->api_key,
                            'city' => 'Santiago',
                            'country' => 'Chile',
                        ];
                        return $this->sendRequest($this->url.'network', $obj, $array);

                    }


                    private function create_delivery(array $obj, bool $array=false){
                        return $this->sendRequest($this->url.'order/create', $obj, $array, 'POST');
                    }

                    public function station_options(){
                        $stations = $this->get_stations();
                        $ret = ['' => __( 'Seleccione Estación' )];
                        foreach($stations->stations as $station){
                            $ret[$station->name] = $station->name;
                        }
                        return $ret;
                    }


                    public function calculate_shipping( $package = array() ) {
                        global $woocommerce;
                        $peso = 0;
                        $alto = 0;
                        $ancho = 0;
                        $largo = 0;

                        foreach ($package['contents'] as $i => $v) {
                            $p = $v['data'];

                            if ($p->has_dimensions()) {
                                if($p->get_width() > $ancho){
                                $ancho = $p->get_width();
                                }
                                if($p->get_length() > $largo){
                                $largo = $p->get_length();
                                }
                                $peso = $peso + ($p->get_weight() * $v['quantity']);
                                $alto = $alto + ($p->get_height() * $v['quantity']);
                            }
                        }

                        $deliveryType = [
                                'metro' => [
                                    'name' => 'SpeedyMan: Entrega en estación de metro',
                                    'value' => [
                                        'apiKey' => $this->api_key,
                                        'deliveryType' => 'Metro',
                                        'height' => $alto,
                                        'long' => $largo,
                                        'pickupType' => $this->pickup,
                                        'weight' => $peso,
                                        'width' => $ancho
                                    ]
                                ],
                                'domicilio' => [
                                    'name' => 'Speedyman: Despacho a domicilio',
                                    'value' => [
                                        'apiKey' => $this->api_key,
                                        'deliveryType' => 'Direccion',
                                        'height' => $alto,
                                        'long' => $largo,
                                        'pickupType' => $this->pickup,
                                        'weight' => $peso,
                                        'width' => $ancho
                                    ]
                                ],
                                
                            
                        ];

                        foreach($deliveryType as $k => $d){
                            $obj = $d['value'];
                            $resJson = $this->sendRequest($this->url.'prices/get', $obj, false);
                            $amount = $resJson->precio;
                            if($this->pay_shipping == 'Both'){
                                $amount = ($amount / 2);
                            }
                            if($this->pay_shipping == 'Me'){
                                $amount = 0;
                            }

                            if(($this->free_shipping != 0) && ($woocommerce->cart->subtotal > $this->free_shipping)){
                                $amount = 0;
                            }
                            $this->add_rate( [
                                'id'       => $this->id."-".$k,
                                'label'    => $d['name'],
                                'cost'     => $amount,
                                'calc_tax' => 'per_item'
                            ] );
                        }
                        
                    }

                }
            }
        }
        

    