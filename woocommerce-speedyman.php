<?php

/**
 * Plugin Name: Envíos a través de Speedyman para WooCommerce
 * Description: Permite el uso de envios mediante plataforma Speedyman
 * Author: Speedyman
 * Author URI: https://speedyman.cl/
 * Version: 1.0
 */

if (!defined('WPINC')) {
    die();
}
$plugin = plugin_basename(__FILE__); 

if (in_array('woocommerce/woocommerce.php', apply_filters('active_plugins', get_option('active_plugins')))) {
    
    require dirname(__FILE__).'/inc/speedyman.class.php';
    add_action('init', 'speedyman_shipping_method');
    add_filter('woocommerce_shipping_methods', array('Speedyman', 'add_shipping_method'));
    add_filter("plugin_action_links_$plugin", array('Speedyman', 'setConfigLink') );
    add_filter( 'plugin_row_meta', array('Speedyman', 'add_link_to_register'), 10, 2 );



   

    add_filter('woocommerce_checkout_fields', 'speedyman_shipping_fields');
    function speedyman_shipping_fields($fields) {
        global $woocommerce;

        $fields['billing']['billing_address_1']['required'] = false;
        $fields['billing']['billing_state']['required'] = false;
        $fields['billing']['billing_city']['required'] = false;


        $fields['billing']['billing_company']['class'] = array('no-speedyman');
        $fields['billing']['billing_address_1']['class'] = array('no-speedyman');
        $fields['billing']['billing_address_2']['class'] = array('no-speedyman');
        $fields['billing']['billing_city']['class'] = array('no-speedyman');
        $fields['billing']['billing_postcode']['class'] = array('no-speedyman', 'postcode');
        $fields['billing']['billing_country']['class'] = array('no-speedyman');
        $fields['billing']['billing_state']['class'] = array('no-speedyman', 'state');
        
        $speedyman = new Speedyman();
        $stations = $speedyman->station_options();
        $schedule = $speedyman->schedule();

        $fields['billing']['billing_estacion'] = array(
                'type' => 'select',
                'options' => $stations,
                'required'      => true,
                'label' => __( 'Estación' ),
                'priority' => 120,
                'class' => array('speedyman', 'speedyman-stations')
                );
        $fields['billing']['billing_delivery_date'] = array(
            'type' => 'text',
            'required'      => true,
            'label' => __( 'Fecha Entrega' ),
            'priority' => 130,
            'class' => array('speedyman')    
        );
        $fields['billing']['billing_delivery_time'] = array(
            'type' => 'time',
            'required'      => true,
            'label' => __( 'Rango Horario para entrega' ),
            'priority' => 140,
            'class' => array('speedyman')   
        );
        
        add_filter( 'woocommerce_cart_needs_shipping_address', '__return_false');
        add_action( 'wp_footer', function() use ($schedule){
            ?>
                
                <script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>
                <script type="text/javascript" src="https://cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
                <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.min.js"></script>
                <script type="text/javascript" src="<?php echo plugin_dir_url   (__FILE__) ?>/js/calendar.js"></script>
                <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css" />

                <link rel="stylesheet" type="text/css" href="<?php echo plugin_dir_url(__FILE__) ?>/css/calendar.css" />

                <script>
                    jQuery(($) => {
                        let schedule = <?php echo json_encode($schedule) ?>;
                        console.log(schedule);
                        let address_valid = false;
                        //rango fechas delivery
                        startDate = moment(schedule.filter(x => (x.fromR != "" && x.toR != "")).shift().dateD, "MM/DD/YYYY");
                        endDate = moment(schedule.filter(x => (x.fromR != "" && x.toR != "")).pop().dateD, "MM/DD/YYYY");
                        //dias no disponibles para envío
                        no_work = schedule.filter(x => (x.fromR == "" && x.toR == "")).map(x => ({'start':moment(x.dateR,"MM/DD/YYYY"), 'end':moment(x.dateR,"MM/DD/YYYY")}));
                        
                        //locale calendario desde el user language del navegador
                        var userLanguage = navigator.language || navigator.userLanguage;
                        
                        //Calendario
                        $('input[name="billing_delivery_date"]').calendario({
                            inline: true, 
                            disabledRanges:no_work,
                            singleDate: true,
                            locale: userLanguage,
                            minDate: startDate,
                            maxDate: endDate,
                            showTimePickers: false, 
                            format: "x",
                            startOnMonday: true

                        });  

                        //TimePicker
                        var timepicker = $('input[name="billing_delivery_time"]').calendario({
                            inline: true,
                            showCalendars: false,
                            format: "hh:mm",
                            minuteSteps:15,
                            hourFormat:24,
                            reverseTimepickerArrows: true
                        });  
                        
                        

                        $('#billing_country, #billing_address_1, #billing_city, #billing_state').on('change', () => {
                            address_valid = false;
                            $( 'body' ).trigger( 'update_checkout' );
                        })

                        $( 'body' ).on( 'updated_checkout', () => {

                            if($("input[name='shipping_method[0]']:checked").val()=='speedyman-metro'){
                                $('.no-speedyman').hide();
                                $('.no-speedyman').removeClass('validate-required');
                                $('.state').removeClass('validate-state');
                                $('.postcode').removeClass('validate-postcode');
                                $('.speedyman-stations').show();
                            }
                            else{

                                $('.no-speedyman').show();
                                $('.no-speedyman').addClass('validate-required');
                                $('.state').addClass('validate-state');
                                $('.postcode').addClass('validate-postcode');
                                $('.speedyman-stations').hide();

                                debugger;

                                if(!address_valid && $('#billing_country').val() != '' && $('#billing_address_1').val() != '' && $('#billing_city').val() != '' && $('#billing_state').val() != ''){
                                    address = $('#billing_address_1').val()+', '+$('#billing_address_2').val()+', '+$('#billing_city').val()+', '+$('#billing_state').val();
                                    var data = {
                                        'address' : address
                                    }
                                    fetch("<?php echo get_bloginfo('url') ?>/wp-json/speedyman/address", {
                                        method: 'POST',
                                        body: JSON.stringify(data),
                                        headers:{
                                            'Content-Type': 'application/json'
                                        }
                                    })
                                    .then(r => r.json())
                                    .then(json => {
                                        console.log(json)
                                        if(typeof json.address !== 'undefined'){
                                            address_valid = true;
                                        }
                                        else {
                                            alert('La dirección indicada no puede usarse para delivery. Intente con otra dirección, ó intente recibir en estación de metro');
                                            $('#billing_country, #billing_address_1, #billing_city, #billing_state').val('');
                                            address_valid = false;
                                        }
                                        
                                    })
                                }
                            }
                        });


                    });

                    
                    </script>
            <?php
        } );

        return $fields;

    }   
    
    
    add_action( 'rest_api_init', 'get_address' );
    function get_address() {
    register_rest_route( 'speedyman', '/address', array(
            'methods' => 'POST',
            'callback' => 'address_callback',
        ));
    }
    function address_callback( $request_data ) {
        $parameters = $request_data->get_params();
        $address = $parameters['address'];
        $speedyman = new Speedyman();

        return $speedyman->address($address);
    }

    add_action('woocommerce_checkout_process', 'process_shipping');
    function process_shipping(){

    }

    add_action( 'woocommerce_new_order', 'is_speedyman_delivery',  1, 1  );

    function is_speedyman_delivery( $order_id ){
        $shipping_method_id = '';
        $shipping_method_instance_id = '';

        $order = new WC_Order( $order_id );
        print_r($order->checkout->checkout_fields);

    }
}
