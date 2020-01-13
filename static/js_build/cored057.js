(function() {
    /*! modernizr 3.3.1 (Custom Build) | MIT *
     * http://modernizr.com/download/?-csscalc-cssgradients-csstransforms3d-es5-flexbox-localstorage-picture-sessionstorage-sizes-srcset-svg-svgasimg-setclasses !*/
    ! function(window, document, undefined) {
        function is(e, t) { return typeof e === t }

        function testRunner() {
            var e, t, r, n, o, i, s;
            for (var d in tests)
                if (tests.hasOwnProperty(d)) {
                    if (e = [], t = tests[d], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                        for (r = 0; r < t.options.aliases.length; r++) e.push(t.options.aliases[r].toLowerCase());
                    for (n = is(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) i = e[o], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = n : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = n), classes.push((n ? "" : "no-") + s.join("-"))
                }
        }

        function setClasses(e) {
            var t = docElement.className,
                r = Modernizr._config.classPrefix || "";
            if (isSVG && (t = t.baseVal), Modernizr._config.enableJSClass) {
                var n = new RegExp("(^|\\s)" + r + "no-js(\\s|$)");
                t = t.replace(n, "$1" + r + "js$2")
            }
            Modernizr._config.enableClasses && (t += " " + r + e.join(" " + r), isSVG ? docElement.className.baseVal = t : docElement.className = t)
        }

        function createElement() { return "function" != typeof document.createElement ? document.createElement(arguments[0]) : isSVG ? document.createElementNS.call(document, "http://www.w3.org/2000/svg", arguments[0]) : document.createElement.apply(document, arguments) }

        function addTest(e, t) {
            if ("object" == typeof e)
                for (var r in e) hasOwnProp(e, r) && addTest(r, e[r]);
            else {
                e = e.toLowerCase();
                var n = e.split("."),
                    o = Modernizr[n[0]];
                if (2 == n.length && (o = o[n[1]]), "undefined" != typeof o) return Modernizr;
                t = "function" == typeof t ? t() : t, 1 == n.length ? Modernizr[n[0]] = t : (!Modernizr[n[0]] || Modernizr[n[0]] instanceof Boolean || (Modernizr[n[0]] = new Boolean(Modernizr[n[0]])), Modernizr[n[0]][n[1]] = t), setClasses([(t && 0 != t ? "" : "no-") + n.join("-")]), Modernizr._trigger(e, t)
            }
            return Modernizr
        }

        function getBody() { var e = document.body; return e || (e = createElement(isSVG ? "svg" : "body"), e.fake = !0), e }

        function injectElementWithStyles(e, t, r, n) {
            var o, i, s, d, a = "modernizr",
                l = createElement("div"),
                c = getBody();
            if (parseInt(r, 10))
                for (; r--;) s = createElement("div"), s.id = n ? n[r] : a + (r + 1), l.appendChild(s);
            return o = createElement("style"), o.type = "text/css", o.id = "s" + a, (c.fake ? c : l).appendChild(o), c.appendChild(l), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e)), l.id = a, c.fake && (c.style.background = "", c.style.overflow = "hidden", d = docElement.style.overflow, docElement.style.overflow = "hidden", docElement.appendChild(c)), i = t(l, e), c.fake ? (c.parentNode.removeChild(c), docElement.style.overflow = d, docElement.offsetHeight) : l.parentNode.removeChild(l), !!i
        }

        function contains(e, t) { return !!~("" + e).indexOf(t) }

        function cssToDOM(e) { return e.replace(/([a-z])-([a-z])/g, function(e, t, r) { return t + r.toUpperCase() }).replace(/^-/, "") }

        function fnBind(e, t) { return function() { return e.apply(t, arguments) } }

        function testDOMProps(e, t, r) {
            var n;
            for (var o in e)
                if (e[o] in t) return r === !1 ? e[o] : (n = t[e[o]], is(n, "function") ? fnBind(n, r || t) : n);
            return !1
        }

        function domToCSS(e) { return e.replace(/([A-Z])/g, function(e, t) { return "-" + t.toLowerCase() }).replace(/^ms-/, "-ms-") }

        function nativeTestProps(e, t) {
            var r = e.length;
            if ("CSS" in window && "supports" in window.CSS) {
                for (; r--;)
                    if (window.CSS.supports(domToCSS(e[r]), t)) return !0;
                return !1
            }
            if ("CSSSupportsRule" in window) { for (var n = []; r--;) n.push("(" + domToCSS(e[r]) + ":" + t + ")"); return n = n.join(" or "), injectElementWithStyles("@supports (" + n + ") { #modernizr { position: absolute; } }", function(e) { return "absolute" == getComputedStyle(e, null).position }) }
            return undefined
        }

        function testProps(e, t, r, n) {
            function o() { s && (delete mStyle.style, delete mStyle.modElem) }
            if (n = is(n, "undefined") ? !1 : n, !is(r, "undefined")) { var i = nativeTestProps(e, r); if (!is(i, "undefined")) return i }
            for (var s, d, a, l, c, f = ["modernizr", "tspan"]; !mStyle.style;) s = !0, mStyle.modElem = createElement(f.shift()), mStyle.style = mStyle.modElem.style;
            for (a = e.length, d = 0; a > d; d++)
                if (l = e[d], c = mStyle.style[l], contains(l, "-") && (l = cssToDOM(l)), mStyle.style[l] !== undefined) { if (n || is(r, "undefined")) return o(), "pfx" == t ? l : !0; try { mStyle.style[l] = r } catch (u) {} if (mStyle.style[l] != c) return o(), "pfx" == t ? l : !0 }
            return o(), !1
        }

        function testPropsAll(e, t, r, n, o) {
            var i = e.charAt(0).toUpperCase() + e.slice(1),
                s = (e + " " + cssomPrefixes.join(i + " ") + i).split(" ");
            return is(t, "string") || is(t, "undefined") ? testProps(s, t, n, o) : (s = (e + " " + domPrefixes.join(i + " ") + i).split(" "), testDOMProps(s, t, r))
        }

        function testAllProps(e, t, r) { return testPropsAll(e, undefined, undefined, t, r) }
        var classes = [],
            tests = [],
            ModernizrProto = {
                _version: "3.3.1",
                _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
                _q: [],
                on: function(e, t) {
                    var r = this;
                    setTimeout(function() { t(r[e]) }, 0)
                },
                addTest: function(e, t, r) { tests.push({ name: e, fn: t, options: r }) },
                addAsyncTest: function(e) { tests.push({ name: null, fn: e }) }
            },
            Modernizr = function() {};
        Modernizr.prototype = ModernizrProto, Modernizr = new Modernizr, Modernizr.addTest("svg", !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), Modernizr.addTest("picture", "HTMLPictureElement" in window), Modernizr.addTest("localstorage", function() { var e = "modernizr"; try { return localStorage.setItem(e, e), localStorage.removeItem(e), !0 } catch (t) { return !1 } }), Modernizr.addTest("sessionstorage", function() { var e = "modernizr"; try { return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0 } catch (t) { return !1 } });
        var docElement = document.documentElement,
            isSVG = "svg" === docElement.nodeName.toLowerCase();
        Modernizr.addTest("srcset", "srcset" in createElement("img"));
        var prefixes = ModernizrProto._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        ModernizrProto._prefixes = prefixes, Modernizr.addTest("csscalc", function() {
            var e = "width:",
                t = "calc(10px);",
                r = createElement("a");
            return r.style.cssText = e + prefixes.join(t + e), !!r.style.length
        }), Modernizr.addTest("cssgradients", function() {
            for (var e, t = "background-image:", r = "gradient(linear,left top,right bottom,from(#9f9),to(white));", n = "", o = 0, i = prefixes.length - 1; i > o; o++) e = 0 === o ? "to " : "", n += t + prefixes[o] + "linear-gradient(" + e + "left top, #9f9, white);";
            Modernizr._config.usePrefixes && (n += t + "-webkit-" + r);
            var s = createElement("a"),
                d = s.style;
            return d.cssText = n, ("" + d.backgroundImage).indexOf("gradient") > -1
        });
        var newSyntax = "CSS" in window && "supports" in window.CSS,
            oldSyntax = "supportsCSS" in window;
        Modernizr.addTest("supports", newSyntax || oldSyntax), Modernizr.addTest("es5array", function() { return !!(Array.prototype && Array.prototype.every && Array.prototype.filter && Array.prototype.forEach && Array.prototype.indexOf && Array.prototype.lastIndexOf && Array.prototype.map && Array.prototype.some && Array.prototype.reduce && Array.prototype.reduceRight && Array.isArray) }), Modernizr.addTest("es5date", function() {
            var e = "2013-04-12T06:06:37.307Z",
                t = !1;
            try { t = !!Date.parse(e) } catch (r) {}
            return !!(Date.now && Date.prototype && Date.prototype.toISOString && Date.prototype.toJSON && t)
        }), Modernizr.addTest("es5function", function() { return !(!Function.prototype || !Function.prototype.bind) }), Modernizr.addTest("es5object", function() { return !!(Object.keys && Object.create && Object.getPrototypeOf && Object.getOwnPropertyNames && Object.isSealed && Object.isFrozen && Object.isExtensible && Object.getOwnPropertyDescriptor && Object.defineProperty && Object.defineProperties && Object.seal && Object.freeze && Object.preventExtensions) }), Modernizr.addTest("strictmode", function() { "use strict"; return !this }()), Modernizr.addTest("es5string", function() { return !(!String.prototype || !String.prototype.trim) }), Modernizr.addTest("json", "JSON" in window && "parse" in JSON && "stringify" in JSON), Modernizr.addTest("es5syntax", function() { var value, obj, stringAccess, getter, setter, reservedWords, zeroWidthChars; try { return stringAccess = eval('"foobar"[3] === "b"'), getter = eval("({ get x(){ return 1 } }).x === 1"), eval("({ set x(v){ value = v; } }).x = 1"), setter = 1 === value, eval("obj = ({ if: 1 })"), reservedWords = 1 === obj["if"], zeroWidthChars = eval("_‌‍ = true"), stringAccess && getter && setter && reservedWords && zeroWidthChars } catch (ignore) { return !1 } }), Modernizr.addTest("es5undefined", function() { var e, t; try { t = window.undefined, window.undefined = 12345, e = "undefined" == typeof window.undefined, window.undefined = t } catch (r) { return !1 } return e }), Modernizr.addTest("es5", function() { return !!(Modernizr.es5array && Modernizr.es5date && Modernizr.es5function && Modernizr.es5object && Modernizr.strictmode && Modernizr.es5string && Modernizr.json && Modernizr.es5syntax && Modernizr.es5undefined) });
        var hasOwnProp;
        ! function() {
            var e = {}.hasOwnProperty;
            hasOwnProp = is(e, "undefined") || is(e.call, "undefined") ? function(e, t) { return t in e && is(e.constructor.prototype[t], "undefined") } : function(t, r) { return e.call(t, r) }
        }(), ModernizrProto._l = {}, ModernizrProto.on = function(e, t) { this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() { Modernizr._trigger(e, Modernizr[e]) }, 0) }, ModernizrProto._trigger = function(e, t) {
            if (this._l[e]) {
                var r = this._l[e];
                setTimeout(function() { var e, n; for (e = 0; e < r.length; e++)(n = r[e])(t) }, 0), delete this._l[e]
            }
        }, Modernizr._q.push(function() { ModernizrProto.addTest = addTest }), Modernizr.addAsyncTest(function() {
            var e, t, r, n = createElement("img"),
                o = "sizes" in n;
            !o && "srcset" in n ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", r = function() { addTest("sizes", 2 == n.width) }, n.onload = r, n.onerror = r, n.setAttribute("sizes", "9px"), n.srcset = e + " 1w," + t + " 8w", n.src = e) : addTest("sizes", o)
        }), Modernizr.addTest("svgasimg", document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"));
        var testStyles = ModernizrProto.testStyles = injectElementWithStyles,
            omPrefixes = "Moz O ms Webkit",
            cssomPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.split(" ") : [];
        ModernizrProto._cssomPrefixes = cssomPrefixes;
        var domPrefixes = ModernizrProto._config.usePrefixes ? omPrefixes.toLowerCase().split(" ") : [];
        ModernizrProto._domPrefixes = domPrefixes;
        var modElem = { elem: createElement("modernizr") };
        Modernizr._q.push(function() { delete modElem.elem });
        var mStyle = { style: modElem.elem.style };
        Modernizr._q.unshift(function() { delete mStyle.style }), ModernizrProto.testAllProps = testPropsAll, ModernizrProto.testAllProps = testAllProps, Modernizr.addTest("flexbox", testAllProps("flexBasis", "1px", !0)), Modernizr.addTest("csstransforms3d", function() {
            var e = !!testAllProps("perspective", "1px", !0),
                t = Modernizr._config.usePrefixes;
            if (e && (!t || "webkitPerspective" in docElement.style)) {
                var r, n = "#modernizr{width:0;height:0}";
                Modernizr.supports ? r = "@supports (perspective: 1px)" : (r = "@media (transform-3d)", t && (r += ",(-webkit-transform-3d)")), r += "{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}", testStyles(n + r, function(t) { e = 7 === t.offsetWidth && 18 === t.offsetHeight })
            }
            return e
        }), testRunner(), setClasses(classes), delete ModernizrProto.addTest, delete ModernizrProto.addAsyncTest;
        for (var i = 0; i < Modernizr._q.length; i++) Modernizr._q[i]();
        window.Modernizr = Modernizr
    }(window, document);;
    /*!
     * jQuery JavaScript Library v2.2.4
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-05-20T17:23Z
     */
    (function(global, factory) {
        if (typeof module === "object" && typeof module.exports === "object") {
            module.exports = global.document ? factory(global, true) : function(w) {
                if (!w.document) { throw new Error("jQuery requires a window with a document"); }
                return factory(w);
            };
        } else { factory(global); }
    }(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
        var arr = [];
        var document = window.document;
        var slice = arr.slice;
        var concat = arr.concat;
        var push = arr.push;
        var indexOf = arr.indexOf;
        var class2type = {};
        var toString = class2type.toString;
        var hasOwn = class2type.hasOwnProperty;
        var support = {};
        var
            version = "2.2.4",
            jQuery = function(selector, context) { return new jQuery.fn.init(selector, context); },
            rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            rmsPrefix = /^-ms-/,
            rdashAlpha = /-([\da-z])/gi,
            fcamelCase = function(all, letter) { return letter.toUpperCase(); };
        jQuery.fn = jQuery.prototype = {
            jquery: version,
            constructor: jQuery,
            selector: "",
            length: 0,
            toArray: function() { return slice.call(this); },
            get: function(num) { return num != null ? (num < 0 ? this[num + this.length] : this[num]) : slice.call(this); },
            pushStack: function(elems) {
                var ret = jQuery.merge(this.constructor(), elems);
                ret.prevObject = this;
                ret.context = this.context;
                return ret;
            },
            each: function(callback) { return jQuery.each(this, callback); },
            map: function(callback) { return this.pushStack(jQuery.map(this, function(elem, i) { return callback.call(elem, i, elem); })); },
            slice: function() { return this.pushStack(slice.apply(this, arguments)); },
            first: function() { return this.eq(0); },
            last: function() { return this.eq(-1); },
            eq: function(i) {
                var len = this.length,
                    j = +i + (i < 0 ? len : 0);
                return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
            },
            end: function() { return this.prevObject || this.constructor(); },
            push: push,
            sort: arr.sort,
            splice: arr.splice
        };
        jQuery.extend = jQuery.fn.extend = function() {
            var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = false;
            if (typeof target === "boolean") {
                deep = target;
                target = arguments[i] || {};
                i++;
            }
            if (typeof target !== "object" && !jQuery.isFunction(target)) { target = {}; }
            if (i === length) {
                target = this;
                i--;
            }
            for (; i < length; i++) {
                if ((options = arguments[i]) != null) {
                    for (name in options) {
                        src = target[name];
                        copy = options[name];
                        if (target === copy) { continue; }
                        if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
                            if (copyIsArray) {
                                copyIsArray = false;
                                clone = src && jQuery.isArray(src) ? src : [];
                            } else { clone = src && jQuery.isPlainObject(src) ? src : {}; }
                            target[name] = jQuery.extend(deep, clone, copy);
                        } else if (copy !== undefined) { target[name] = copy; }
                    }
                }
            }
            return target;
        };
        jQuery.extend({
            expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
            isReady: true,
            error: function(msg) { throw new Error(msg); },
            noop: function() {},
            isFunction: function(obj) { return jQuery.type(obj) === "function"; },
            isArray: Array.isArray,
            isWindow: function(obj) { return obj != null && obj === obj.window; },
            isNumeric: function(obj) { var realStringObj = obj && obj.toString(); return !jQuery.isArray(obj) && (realStringObj - parseFloat(realStringObj) + 1) >= 0; },
            isPlainObject: function(obj) {
                var key;
                if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) { return false; }
                if (obj.constructor && !hasOwn.call(obj, "constructor") && !hasOwn.call(obj.constructor.prototype || {}, "isPrototypeOf")) { return false; }
                for (key in obj) {}
                return key === undefined || hasOwn.call(obj, key);
            },
            isEmptyObject: function(obj) {
                var name;
                for (name in obj) { return false; }
                return true;
            },
            type: function(obj) {
                if (obj == null) { return obj + ""; }
                return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
            },
            globalEval: function(code) {
                var script, indirect = eval;
                code = jQuery.trim(code);
                if (code) {
                    if (code.indexOf("use strict") === 1) {
                        script = document.createElement("script");
                        script.text = code;
                        document.head.appendChild(script).parentNode.removeChild(script);
                    } else { indirect(code); }
                }
            },
            camelCase: function(string) { return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase); },
            nodeName: function(elem, name) { return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase(); },
            each: function(obj, callback) {
                var length, i = 0;
                if (isArrayLike(obj)) { length = obj.length; for (; i < length; i++) { if (callback.call(obj[i], i, obj[i]) === false) { break; } } } else { for (i in obj) { if (callback.call(obj[i], i, obj[i]) === false) { break; } } }
                return obj;
            },
            trim: function(text) { return text == null ? "" : (text + "").replace(rtrim, ""); },
            makeArray: function(arr, results) {
                var ret = results || [];
                if (arr != null) { if (isArrayLike(Object(arr))) { jQuery.merge(ret, typeof arr === "string" ? [arr] : arr); } else { push.call(ret, arr); } }
                return ret;
            },
            inArray: function(elem, arr, i) { return arr == null ? -1 : indexOf.call(arr, elem, i); },
            merge: function(first, second) {
                var len = +second.length,
                    j = 0,
                    i = first.length;
                for (; j < len; j++) { first[i++] = second[j]; }
                first.length = i;
                return first;
            },
            grep: function(elems, callback, invert) {
                var callbackInverse, matches = [],
                    i = 0,
                    length = elems.length,
                    callbackExpect = !invert;
                for (; i < length; i++) { callbackInverse = !callback(elems[i], i); if (callbackInverse !== callbackExpect) { matches.push(elems[i]); } }
                return matches;
            },
            map: function(elems, callback, arg) {
                var length, value, i = 0,
                    ret = [];
                if (isArrayLike(elems)) {
                    length = elems.length;
                    for (; i < length; i++) { value = callback(elems[i], i, arg); if (value != null) { ret.push(value); } }
                } else { for (i in elems) { value = callback(elems[i], i, arg); if (value != null) { ret.push(value); } } }
                return concat.apply([], ret);
            },
            guid: 1,
            proxy: function(fn, context) {
                var tmp, args, proxy;
                if (typeof context === "string") {
                    tmp = fn[context];
                    context = fn;
                    fn = tmp;
                }
                if (!jQuery.isFunction(fn)) { return undefined; }
                args = slice.call(arguments, 2);
                proxy = function() { return fn.apply(context || this, args.concat(slice.call(arguments))); };
                proxy.guid = fn.guid = fn.guid || jQuery.guid++;
                return proxy;
            },
            now: Date.now,
            support: support
        });
        if (typeof Symbol === "function") { jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]; }
        jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(i, name) { class2type["[object " + name + "]"] = name.toLowerCase(); });

        function isArrayLike(obj) {
            var length = !!obj && "length" in obj && obj.length,
                type = jQuery.type(obj);
            if (type === "function" || jQuery.isWindow(obj)) { return false; }
            return type === "array" || length === 0 || typeof length === "number" && length > 0 && (length - 1) in obj;
        }
        var Sizzle =
            /*!
             * Sizzle CSS Selector Engine v2.2.1
             * http://sizzlejs.com/
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             *
             * Date: 2015-10-17
             */
            (function(window) {
                var i, support, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, setDocument, document, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, expando = "sizzle" + 1 * new Date(),
                    preferredDoc = window.document,
                    dirruns = 0,
                    done = 0,
                    classCache = createCache(),
                    tokenCache = createCache(),
                    compilerCache = createCache(),
                    sortOrder = function(a, b) {
                        if (a === b) { hasDuplicate = true; }
                        return 0;
                    },
                    MAX_NEGATIVE = 1 << 31,
                    hasOwn = ({}).hasOwnProperty,
                    arr = [],
                    pop = arr.pop,
                    push_native = arr.push,
                    push = arr.push,
                    slice = arr.slice,
                    indexOf = function(list, elem) {
                        var i = 0,
                            len = list.length;
                        for (; i < len; i++) { if (list[i] === elem) { return i; } }
                        return -1;
                    },
                    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    whitespace = "[\\x20\\t\\r\\n\\f]",
                    identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
                    "*([*^$|!~]?=)" + whitespace +
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
                    "*\\]",
                    pseudos = ":(" + identifier + ")(?:\\((" +
                    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
                    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
                    ".*" +
                    ")\\)|)",
                    rwhitespace = new RegExp(whitespace + "+", "g"),
                    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
                    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
                    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
                    rpseudo = new RegExp(pseudos),
                    ridentifier = new RegExp("^" + identifier + "$"),
                    matchExpr = {
                        "ID": new RegExp("^#(" + identifier + ")"),
                        "CLASS": new RegExp("^\\.(" + identifier + ")"),
                        "TAG": new RegExp("^(" + identifier + "|[*])"),
                        "ATTR": new RegExp("^" + attributes),
                        "PSEUDO": new RegExp("^" + pseudos),
                        "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                            "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                            "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                        "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                        "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                            whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                    },
                    rinputs = /^(?:input|select|textarea|button)$/i,
                    rheader = /^h\d$/i,
                    rnative = /^[^{]+\{\s*\[native \w/,
                    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    rsibling = /[+~]/,
                    rescape = /'|\\/g,
                    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                    funescape = function(_, escaped, escapedWhitespace) { var high = "0x" + escaped - 0x10000; return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00); },
                    unloadHandler = function() { setDocument(); };
                try {
                    push.apply((arr = slice.call(preferredDoc.childNodes)), preferredDoc.childNodes);
                    arr[preferredDoc.childNodes.length].nodeType;
                } catch (e) {
                    push = {
                        apply: arr.length ? function(target, els) { push_native.apply(target, slice.call(els)); } : function(target, els) {
                            var j = target.length,
                                i = 0;
                            while ((target[j++] = els[i++])) {}
                            target.length = j - 1;
                        }
                    };
                }

                function Sizzle(selector, context, results, seed) {
                    var m, i, elem, nid, nidselect, match, groups, newSelector, newContext = context && context.ownerDocument,
                        nodeType = context ? context.nodeType : 9;
                    results = results || [];
                    if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) { return results; }
                    if (!seed) {
                        if ((context ? context.ownerDocument || context : preferredDoc) !== document) { setDocument(context); }
                        context = context || document;
                        if (documentIsHTML) {
                            if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                                if ((m = match[1])) {
                                    if (nodeType === 9) {
                                        if ((elem = context.getElementById(m))) { if (elem.id === m) { results.push(elem); return results; } } else { return results; }
                                    } else { if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) { results.push(elem); return results; } }
                                } else if (match[2]) { push.apply(results, context.getElementsByTagName(selector)); return results; } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) { push.apply(results, context.getElementsByClassName(m)); return results; }
                            }
                            if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
                                if (nodeType !== 1) {
                                    newContext = context;
                                    newSelector = selector;
                                } else if (context.nodeName.toLowerCase() !== "object") {
                                    if ((nid = context.getAttribute("id"))) { nid = nid.replace(rescape, "\\$&"); } else { context.setAttribute("id", (nid = expando)); }
                                    groups = tokenize(selector);
                                    i = groups.length;
                                    nidselect = ridentifier.test(nid) ? "#" + nid : "[id='" + nid + "']";
                                    while (i--) { groups[i] = nidselect + " " + toSelector(groups[i]); }
                                    newSelector = groups.join(",");
                                    newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                                }
                                if (newSelector) { try { push.apply(results, newContext.querySelectorAll(newSelector)); return results; } catch (qsaError) {} finally { if (nid === expando) { context.removeAttribute("id"); } } }
                            }
                        }
                    }
                    return select(selector.replace(rtrim, "$1"), context, results, seed);
                }

                function createCache() {
                    var keys = [];

                    function cache(key, value) {
                        if (keys.push(key + " ") > Expr.cacheLength) { delete cache[keys.shift()]; }
                        return (cache[key + " "] = value);
                    }
                    return cache;
                }

                function markFunction(fn) { fn[expando] = true; return fn; }

                function assert(fn) {
                    var div = document.createElement("div");
                    try { return !!fn(div); } catch (e) { return false; } finally {
                        if (div.parentNode) { div.parentNode.removeChild(div); }
                        div = null;
                    }
                }

                function addHandle(attrs, handler) {
                    var arr = attrs.split("|"),
                        i = arr.length;
                    while (i--) { Expr.attrHandle[arr[i]] = handler; }
                }

                function siblingCheck(a, b) {
                    var cur = b && a,
                        diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) -
                        (~a.sourceIndex || MAX_NEGATIVE);
                    if (diff) { return diff; }
                    if (cur) { while ((cur = cur.nextSibling)) { if (cur === b) { return -1; } } }
                    return a ? 1 : -1;
                }

                function createInputPseudo(type) { return function(elem) { var name = elem.nodeName.toLowerCase(); return name === "input" && elem.type === type; }; }

                function createButtonPseudo(type) { return function(elem) { var name = elem.nodeName.toLowerCase(); return (name === "input" || name === "button") && elem.type === type; }; }

                function createPositionalPseudo(fn) {
                    return markFunction(function(argument) {
                        argument = +argument;
                        return markFunction(function(seed, matches) {
                            var j, matchIndexes = fn([], seed.length, argument),
                                i = matchIndexes.length;
                            while (i--) { if (seed[(j = matchIndexes[i])]) { seed[j] = !(matches[j] = seed[j]); } }
                        });
                    });
                }

                function testContext(context) { return context && typeof context.getElementsByTagName !== "undefined" && context; }
                support = Sizzle.support = {};
                isXML = Sizzle.isXML = function(elem) { var documentElement = elem && (elem.ownerDocument || elem).documentElement; return documentElement ? documentElement.nodeName !== "HTML" : false; };
                setDocument = Sizzle.setDocument = function(node) {
                    var hasCompare, parent, doc = node ? node.ownerDocument || node : preferredDoc;
                    if (doc === document || doc.nodeType !== 9 || !doc.documentElement) { return document; }
                    document = doc;
                    docElem = document.documentElement;
                    documentIsHTML = !isXML(document);
                    if ((parent = document.defaultView) && parent.top !== parent) { if (parent.addEventListener) { parent.addEventListener("unload", unloadHandler, false); } else if (parent.attachEvent) { parent.attachEvent("onunload", unloadHandler); } }
                    support.attributes = assert(function(div) { div.className = "i"; return !div.getAttribute("className"); });
                    support.getElementsByTagName = assert(function(div) { div.appendChild(document.createComment("")); return !div.getElementsByTagName("*").length; });
                    support.getElementsByClassName = rnative.test(document.getElementsByClassName);
                    support.getById = assert(function(div) { docElem.appendChild(div).id = expando; return !document.getElementsByName || !document.getElementsByName(expando).length; });
                    if (support.getById) {
                        Expr.find["ID"] = function(id, context) { if (typeof context.getElementById !== "undefined" && documentIsHTML) { var m = context.getElementById(id); return m ? [m] : []; } };
                        Expr.filter["ID"] = function(id) { var attrId = id.replace(runescape, funescape); return function(elem) { return elem.getAttribute("id") === attrId; }; };
                    } else {
                        delete Expr.find["ID"];
                        Expr.filter["ID"] = function(id) { var attrId = id.replace(runescape, funescape); return function(elem) { var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id"); return node && node.value === attrId; }; };
                    }
                    Expr.find["TAG"] = support.getElementsByTagName ? function(tag, context) { if (typeof context.getElementsByTagName !== "undefined") { return context.getElementsByTagName(tag); } else if (support.qsa) { return context.querySelectorAll(tag); } } : function(tag, context) {
                        var elem, tmp = [],
                            i = 0,
                            results = context.getElementsByTagName(tag);
                        if (tag === "*") {
                            while ((elem = results[i++])) { if (elem.nodeType === 1) { tmp.push(elem); } }
                            return tmp;
                        }
                        return results;
                    };
                    Expr.find["CLASS"] = support.getElementsByClassName && function(className, context) { if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) { return context.getElementsByClassName(className); } };
                    rbuggyMatches = [];
                    rbuggyQSA = [];
                    if ((support.qsa = rnative.test(document.querySelectorAll))) {
                        assert(function(div) {
                            docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" +
                                "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                                "<option selected=''></option></select>";
                            if (div.querySelectorAll("[msallowcapture^='']").length) { rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")"); }
                            if (!div.querySelectorAll("[selected]").length) { rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")"); }
                            if (!div.querySelectorAll("[id~=" + expando + "-]").length) { rbuggyQSA.push("~="); }
                            if (!div.querySelectorAll(":checked").length) { rbuggyQSA.push(":checked"); }
                            if (!div.querySelectorAll("a#" + expando + "+*").length) { rbuggyQSA.push(".#.+[+~]"); }
                        });
                        assert(function(div) {
                            var input = document.createElement("input");
                            input.setAttribute("type", "hidden");
                            div.appendChild(input).setAttribute("name", "D");
                            if (div.querySelectorAll("[name=d]").length) { rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="); }
                            if (!div.querySelectorAll(":enabled").length) { rbuggyQSA.push(":enabled", ":disabled"); }
                            div.querySelectorAll("*,:x");
                            rbuggyQSA.push(",.*:");
                        });
                    }
                    if ((support.matchesSelector = rnative.test((matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)))) {
                        assert(function(div) {
                            support.disconnectedMatch = matches.call(div, "div");
                            matches.call(div, "[s!='']:x");
                            rbuggyMatches.push("!=", pseudos);
                        });
                    }
                    rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                    rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
                    hasCompare = rnative.test(docElem.compareDocumentPosition);
                    contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                        var adown = a.nodeType === 9 ? a.documentElement : a,
                            bup = b && b.parentNode;
                        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
                    } : function(a, b) {
                        if (b) { while ((b = b.parentNode)) { if (b === a) { return true; } } }
                        return false;
                    };
                    sortOrder = hasCompare ? function(a, b) {
                        if (a === b) { hasDuplicate = true; return 0; }
                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        if (compare) { return compare; }
                        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;
                        if (compare & 1 || (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {
                            if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) { return -1; }
                            if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) { return 1; }
                            return sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0;
                        }
                        return compare & 4 ? -1 : 1;
                    } : function(a, b) {
                        if (a === b) { hasDuplicate = true; return 0; }
                        var cur, i = 0,
                            aup = a.parentNode,
                            bup = b.parentNode,
                            ap = [a],
                            bp = [b];
                        if (!aup || !bup) { return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? (indexOf(sortInput, a) - indexOf(sortInput, b)) : 0; } else if (aup === bup) { return siblingCheck(a, b); }
                        cur = a;
                        while ((cur = cur.parentNode)) { ap.unshift(cur); }
                        cur = b;
                        while ((cur = cur.parentNode)) { bp.unshift(cur); }
                        while (ap[i] === bp[i]) { i++; }
                        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
                    };
                    return document;
                };
                Sizzle.matches = function(expr, elements) { return Sizzle(expr, null, null, elements); };
                Sizzle.matchesSelector = function(elem, expr) {
                    if ((elem.ownerDocument || elem) !== document) { setDocument(elem); }
                    expr = expr.replace(rattributeQuotes, "='$1']");
                    if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) { try { var ret = matches.call(elem, expr); if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) { return ret; } } catch (e) {} }
                    return Sizzle(expr, document, null, [elem]).length > 0;
                };
                Sizzle.contains = function(context, elem) {
                    if ((context.ownerDocument || context) !== document) { setDocument(context); }
                    return contains(context, elem);
                };
                Sizzle.attr = function(elem, name) {
                    if ((elem.ownerDocument || elem) !== document) { setDocument(elem); }
                    var fn = Expr.attrHandle[name.toLowerCase()],
                        val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
                    return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
                };
                Sizzle.error = function(msg) { throw new Error("Syntax error, unrecognized expression: " + msg); };
                Sizzle.uniqueSort = function(results) {
                    var elem, duplicates = [],
                        j = 0,
                        i = 0;
                    hasDuplicate = !support.detectDuplicates;
                    sortInput = !support.sortStable && results.slice(0);
                    results.sort(sortOrder);
                    if (hasDuplicate) {
                        while ((elem = results[i++])) { if (elem === results[i]) { j = duplicates.push(i); } }
                        while (j--) { results.splice(duplicates[j], 1); }
                    }
                    sortInput = null;
                    return results;
                };
                getText = Sizzle.getText = function(elem) {
                    var node, ret = "",
                        i = 0,
                        nodeType = elem.nodeType;
                    if (!nodeType) { while ((node = elem[i++])) { ret += getText(node); } } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) { if (typeof elem.textContent === "string") { return elem.textContent; } else { for (elem = elem.firstChild; elem; elem = elem.nextSibling) { ret += getText(elem); } } } else if (nodeType === 3 || nodeType === 4) { return elem.nodeValue; }
                    return ret;
                };
                Expr = Sizzle.selectors = {
                    cacheLength: 50,
                    createPseudo: markFunction,
                    match: matchExpr,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        "ATTR": function(match) {
                            match[1] = match[1].replace(runescape, funescape);
                            match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                            if (match[2] === "~=") { match[3] = " " + match[3] + " "; }
                            return match.slice(0, 4);
                        },
                        "CHILD": function(match) {
                            match[1] = match[1].toLowerCase();
                            if (match[1].slice(0, 3) === "nth") {
                                if (!match[3]) { Sizzle.error(match[0]); }
                                match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                                match[5] = +((match[7] + match[8]) || match[3] === "odd");
                            } else if (match[3]) { Sizzle.error(match[0]); }
                            return match;
                        },
                        "PSEUDO": function(match) {
                            var excess, unquoted = !match[6] && match[2];
                            if (matchExpr["CHILD"].test(match[0])) { return null; }
                            if (match[3]) { match[2] = match[4] || match[5] || ""; } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                                match[0] = match[0].slice(0, excess);
                                match[2] = unquoted.slice(0, excess);
                            }
                            return match.slice(0, 3);
                        }
                    },
                    filter: {
                        "TAG": function(nodeNameSelector) { var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase(); return nodeNameSelector === "*" ? function() { return true; } : function(elem) { return elem.nodeName && elem.nodeName.toLowerCase() === nodeName; }; },
                        "CLASS": function(className) { var pattern = classCache[className + " "]; return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function(elem) { return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""); }); },
                        "ATTR": function(name, operator, check) {
                            return function(elem) {
                                var result = Sizzle.attr(elem, name);
                                if (result == null) { return operator === "!="; }
                                if (!operator) { return true; }
                                result += "";
                                return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                            };
                        },
                        "CHILD": function(type, what, argument, first, last) {
                            var simple = type.slice(0, 3) !== "nth",
                                forward = type.slice(-4) !== "last",
                                ofType = what === "of-type";
                            return first === 1 && last === 0 ? function(elem) { return !!elem.parentNode; } : function(elem, context, xml) {
                                var cache, uniqueCache, outerCache, node, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType,
                                    diff = false;
                                if (parent) {
                                    if (simple) {
                                        while (dir) {
                                            node = elem;
                                            while ((node = node[dir])) { if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) { return false; } }
                                            start = dir = type === "only" && !start && "nextSibling";
                                        }
                                        return true;
                                    }
                                    start = [forward ? parent.firstChild : parent.lastChild];
                                    if (forward && useCache) {
                                        node = parent;
                                        outerCache = node[expando] || (node[expando] = {});
                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex && cache[2];
                                        node = nodeIndex && parent.childNodes[nodeIndex];
                                        while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) { if (node.nodeType === 1 && ++diff && node === elem) { uniqueCache[type] = [dirruns, nodeIndex, diff]; break; } }
                                    } else {
                                        if (useCache) {
                                            node = elem;
                                            outerCache = node[expando] || (node[expando] = {});
                                            uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                            cache = uniqueCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex;
                                        }
                                        if (diff === false) {
                                            while ((node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop())) {
                                                if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                                                    if (useCache) {
                                                        outerCache = node[expando] || (node[expando] = {});
                                                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                                                        uniqueCache[type] = [dirruns, diff];
                                                    }
                                                    if (node === elem) { break; }
                                                }
                                            }
                                        }
                                    }
                                    diff -= last;
                                    return diff === first || (diff % first === 0 && diff / first >= 0);
                                }
                            };
                        },
                        "PSEUDO": function(pseudo, argument) {
                            var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);
                            if (fn[expando]) { return fn(argument); }
                            if (fn.length > 1) {
                                args = [pseudo, pseudo, "", argument];
                                return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches) {
                                    var idx, matched = fn(seed, argument),
                                        i = matched.length;
                                    while (i--) {
                                        idx = indexOf(seed, matched[i]);
                                        seed[idx] = !(matches[idx] = matched[i]);
                                    }
                                }) : function(elem) { return fn(elem, 0, args); };
                            }
                            return fn;
                        }
                    },
                    pseudos: {
                        "not": markFunction(function(selector) {
                            var input = [],
                                results = [],
                                matcher = compile(selector.replace(rtrim, "$1"));
                            return matcher[expando] ? markFunction(function(seed, matches, context, xml) {
                                var elem, unmatched = matcher(seed, null, xml, []),
                                    i = seed.length;
                                while (i--) { if ((elem = unmatched[i])) { seed[i] = !(matches[i] = elem); } }
                            }) : function(elem, context, xml) {
                                input[0] = elem;
                                matcher(input, null, xml, results);
                                input[0] = null;
                                return !results.pop();
                            };
                        }),
                        "has": markFunction(function(selector) { return function(elem) { return Sizzle(selector, elem).length > 0; }; }),
                        "contains": markFunction(function(text) { text = text.replace(runescape, funescape); return function(elem) { return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1; }; }),
                        "lang": markFunction(function(lang) {
                            if (!ridentifier.test(lang || "")) { Sizzle.error("unsupported lang: " + lang); }
                            lang = lang.replace(runescape, funescape).toLowerCase();
                            return function(elem) {
                                var elemLang;
                                do { if ((elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) { elemLang = elemLang.toLowerCase(); return elemLang === lang || elemLang.indexOf(lang + "-") === 0; } } while ((elem = elem.parentNode) && elem.nodeType === 1);
                                return false;
                            };
                        }),
                        "target": function(elem) { var hash = window.location && window.location.hash; return hash && hash.slice(1) === elem.id; },
                        "root": function(elem) { return elem === docElem; },
                        "focus": function(elem) { return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex); },
                        "enabled": function(elem) { return elem.disabled === false; },
                        "disabled": function(elem) { return elem.disabled === true; },
                        "checked": function(elem) { var nodeName = elem.nodeName.toLowerCase(); return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected); },
                        "selected": function(elem) {
                            if (elem.parentNode) { elem.parentNode.selectedIndex; }
                            return elem.selected === true;
                        },
                        "empty": function(elem) {
                            for (elem = elem.firstChild; elem; elem = elem.nextSibling) { if (elem.nodeType < 6) { return false; } }
                            return true;
                        },
                        "parent": function(elem) { return !Expr.pseudos["empty"](elem); },
                        "header": function(elem) { return rheader.test(elem.nodeName); },
                        "input": function(elem) { return rinputs.test(elem.nodeName); },
                        "button": function(elem) { var name = elem.nodeName.toLowerCase(); return name === "input" && elem.type === "button" || name === "button"; },
                        "text": function(elem) { var attr; return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text"); },
                        "first": createPositionalPseudo(function() { return [0]; }),
                        "last": createPositionalPseudo(function(matchIndexes, length) { return [length - 1]; }),
                        "eq": createPositionalPseudo(function(matchIndexes, length, argument) { return [argument < 0 ? argument + length : argument]; }),
                        "even": createPositionalPseudo(function(matchIndexes, length) {
                            var i = 0;
                            for (; i < length; i += 2) { matchIndexes.push(i); }
                            return matchIndexes;
                        }),
                        "odd": createPositionalPseudo(function(matchIndexes, length) {
                            var i = 1;
                            for (; i < length; i += 2) { matchIndexes.push(i); }
                            return matchIndexes;
                        }),
                        "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                            var i = argument < 0 ? argument + length : argument;
                            for (; --i >= 0;) { matchIndexes.push(i); }
                            return matchIndexes;
                        }),
                        "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                            var i = argument < 0 ? argument + length : argument;
                            for (; ++i < length;) { matchIndexes.push(i); }
                            return matchIndexes;
                        })
                    }
                };
                Expr.pseudos["nth"] = Expr.pseudos["eq"];
                for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) { Expr.pseudos[i] = createInputPseudo(i); }
                for (i in { submit: true, reset: true }) { Expr.pseudos[i] = createButtonPseudo(i); }

                function setFilters() {}
                setFilters.prototype = Expr.filters = Expr.pseudos;
                Expr.setFilters = new setFilters();
                tokenize = Sizzle.tokenize = function(selector, parseOnly) {
                    var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
                    if (cached) { return parseOnly ? 0 : cached.slice(0); }
                    soFar = selector;
                    groups = [];
                    preFilters = Expr.preFilter;
                    while (soFar) {
                        if (!matched || (match = rcomma.exec(soFar))) {
                            if (match) { soFar = soFar.slice(match[0].length) || soFar; }
                            groups.push((tokens = []));
                        }
                        matched = false;
                        if ((match = rcombinators.exec(soFar))) {
                            matched = match.shift();
                            tokens.push({ value: matched, type: match[0].replace(rtrim, " ") });
                            soFar = soFar.slice(matched.length);
                        }
                        for (type in Expr.filter) {
                            if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                                matched = match.shift();
                                tokens.push({ value: matched, type: type, matches: match });
                                soFar = soFar.slice(matched.length);
                            }
                        }
                        if (!matched) { break; }
                    }
                    return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
                };

                function toSelector(tokens) {
                    var i = 0,
                        len = tokens.length,
                        selector = "";
                    for (; i < len; i++) { selector += tokens[i].value; }
                    return selector;
                }

                function addCombinator(matcher, combinator, base) {
                    var dir = combinator.dir,
                        checkNonElements = base && dir === "parentNode",
                        doneName = done++;
                    return combinator.first ? function(elem, context, xml) { while ((elem = elem[dir])) { if (elem.nodeType === 1 || checkNonElements) { return matcher(elem, context, xml); } } } : function(elem, context, xml) {
                        var oldCache, uniqueCache, outerCache, newCache = [dirruns, doneName];
                        if (xml) { while ((elem = elem[dir])) { if (elem.nodeType === 1 || checkNonElements) { if (matcher(elem, context, xml)) { return true; } } } } else {
                            while ((elem = elem[dir])) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    outerCache = elem[expando] || (elem[expando] = {});
                                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});
                                    if ((oldCache = uniqueCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) { return (newCache[2] = oldCache[2]); } else { uniqueCache[dir] = newCache; if ((newCache[2] = matcher(elem, context, xml))) { return true; } }
                                }
                            }
                        }
                    };
                }

                function elementMatcher(matchers) {
                    return matchers.length > 1 ? function(elem, context, xml) {
                        var i = matchers.length;
                        while (i--) { if (!matchers[i](elem, context, xml)) { return false; } }
                        return true;
                    } : matchers[0];
                }

                function multipleContexts(selector, contexts, results) {
                    var i = 0,
                        len = contexts.length;
                    for (; i < len; i++) { Sizzle(selector, contexts[i], results); }
                    return results;
                }

                function condense(unmatched, map, filter, context, xml) {
                    var elem, newUnmatched = [],
                        i = 0,
                        len = unmatched.length,
                        mapped = map != null;
                    for (; i < len; i++) { if ((elem = unmatched[i])) { if (!filter || filter(elem, context, xml)) { newUnmatched.push(elem); if (mapped) { map.push(i); } } } }
                    return newUnmatched;
                }

                function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                    if (postFilter && !postFilter[expando]) { postFilter = setMatcher(postFilter); }
                    if (postFinder && !postFinder[expando]) { postFinder = setMatcher(postFinder, postSelector); }
                    return markFunction(function(seed, results, context, xml) {
                        var temp, i, elem, preMap = [],
                            postMap = [],
                            preexisting = results.length,
                            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
                            matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
                            matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
                        if (matcher) { matcher(matcherIn, matcherOut, context, xml); }
                        if (postFilter) {
                            temp = condense(matcherOut, postMap);
                            postFilter(temp, [], context, xml);
                            i = temp.length;
                            while (i--) { if ((elem = temp[i])) { matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem); } }
                        }
                        if (seed) {
                            if (postFinder || preFilter) {
                                if (postFinder) {
                                    temp = [];
                                    i = matcherOut.length;
                                    while (i--) { if ((elem = matcherOut[i])) { temp.push((matcherIn[i] = elem)); } }
                                    postFinder(null, (matcherOut = []), temp, xml);
                                }
                                i = matcherOut.length;
                                while (i--) { if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) { seed[temp] = !(results[temp] = elem); } }
                            }
                        } else { matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut); if (postFinder) { postFinder(null, results, matcherOut, xml); } else { push.apply(results, matcherOut); } }
                    });
                }

                function matcherFromTokens(tokens) {
                    var checkContext, matcher, j, len = tokens.length,
                        leadingRelative = Expr.relative[tokens[0].type],
                        implicitRelative = leadingRelative || Expr.relative[" "],
                        i = leadingRelative ? 1 : 0,
                        matchContext = addCombinator(function(elem) { return elem === checkContext; }, implicitRelative, true),
                        matchAnyContext = addCombinator(function(elem) { return indexOf(checkContext, elem) > -1; }, implicitRelative, true),
                        matchers = [function(elem, context, xml) {
                            var ret = (!leadingRelative && (xml || context !== outermostContext)) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                            checkContext = null;
                            return ret;
                        }];
                    for (; i < len; i++) {
                        if ((matcher = Expr.relative[tokens[i].type])) { matchers = [addCombinator(elementMatcher(matchers), matcher)]; } else {
                            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
                            if (matcher[expando]) {
                                j = ++i;
                                for (; j < len; j++) { if (Expr.relative[tokens[j].type]) { break; } }
                                return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens((tokens = tokens.slice(j))), j < len && toSelector(tokens));
                            }
                            matchers.push(matcher);
                        }
                    }
                    return elementMatcher(matchers);
                }

                function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                    var bySet = setMatchers.length > 0,
                        byElement = elementMatchers.length > 0,
                        superMatcher = function(seed, context, xml, results, outermost) {
                            var elem, j, matcher, matchedCount = 0,
                                i = "0",
                                unmatched = seed && [],
                                setMatched = [],
                                contextBackup = outermostContext,
                                elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                                dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                                len = elems.length;
                            if (outermost) { outermostContext = context === document || context || outermost; }
                            for (; i !== len && (elem = elems[i]) != null; i++) {
                                if (byElement && elem) {
                                    j = 0;
                                    if (!context && elem.ownerDocument !== document) {
                                        setDocument(elem);
                                        xml = !documentIsHTML;
                                    }
                                    while ((matcher = elementMatchers[j++])) { if (matcher(elem, context || document, xml)) { results.push(elem); break; } }
                                    if (outermost) { dirruns = dirrunsUnique; }
                                }
                                if (bySet) {
                                    if ((elem = !matcher && elem)) { matchedCount--; }
                                    if (seed) { unmatched.push(elem); }
                                }
                            }
                            matchedCount += i;
                            if (bySet && i !== matchedCount) {
                                j = 0;
                                while ((matcher = setMatchers[j++])) { matcher(unmatched, setMatched, context, xml); }
                                if (seed) {
                                    if (matchedCount > 0) { while (i--) { if (!(unmatched[i] || setMatched[i])) { setMatched[i] = pop.call(results); } } }
                                    setMatched = condense(setMatched);
                                }
                                push.apply(results, setMatched);
                                if (outermost && !seed && setMatched.length > 0 && (matchedCount + setMatchers.length) > 1) { Sizzle.uniqueSort(results); }
                            }
                            if (outermost) {
                                dirruns = dirrunsUnique;
                                outermostContext = contextBackup;
                            }
                            return unmatched;
                        };
                    return bySet ? markFunction(superMatcher) : superMatcher;
                }
                compile = Sizzle.compile = function(selector, match) {
                    var i, setMatchers = [],
                        elementMatchers = [],
                        cached = compilerCache[selector + " "];
                    if (!cached) {
                        if (!match) { match = tokenize(selector); }
                        i = match.length;
                        while (i--) { cached = matcherFromTokens(match[i]); if (cached[expando]) { setMatchers.push(cached); } else { elementMatchers.push(cached); } }
                        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                        cached.selector = selector;
                    }
                    return cached;
                };
                select = Sizzle.select = function(selector, context, results, seed) {
                    var i, tokens, token, type, find, compiled = typeof selector === "function" && selector,
                        match = !seed && tokenize((selector = compiled.selector || selector));
                    results = results || [];
                    if (match.length === 1) {
                        tokens = match[0] = match[0].slice(0);
                        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                            context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                            if (!context) { return results; } else if (compiled) { context = context.parentNode; }
                            selector = selector.slice(tokens.shift().value.length);
                        }
                        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                        while (i--) {
                            token = tokens[i];
                            if (Expr.relative[(type = token.type)]) { break; }
                            if ((find = Expr.find[type])) {
                                if ((seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context))) {
                                    tokens.splice(i, 1);
                                    selector = seed.length && toSelector(tokens);
                                    if (!selector) { push.apply(results, seed); return results; }
                                    break;
                                }
                            }
                        }
                    }
                    (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
                    return results;
                };
                support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
                support.detectDuplicates = !!hasDuplicate;
                setDocument();
                support.sortDetached = assert(function(div1) { return div1.compareDocumentPosition(document.createElement("div")) & 1; });
                if (!assert(function(div) { div.innerHTML = "<a href='#'></a>"; return div.firstChild.getAttribute("href") === "#"; })) { addHandle("type|href|height|width", function(elem, name, isXML) { if (!isXML) { return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2); } }); }
                if (!support.attributes || !assert(function(div) {
                        div.innerHTML = "<input/>";
                        div.firstChild.setAttribute("value", "");
                        return div.firstChild.getAttribute("value") === "";
                    })) { addHandle("value", function(elem, name, isXML) { if (!isXML && elem.nodeName.toLowerCase() === "input") { return elem.defaultValue; } }); }
                if (!assert(function(div) { return div.getAttribute("disabled") == null; })) { addHandle(booleans, function(elem, name, isXML) { var val; if (!isXML) { return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null; } }); }
                return Sizzle;
            })(window);
        jQuery.find = Sizzle;
        jQuery.expr = Sizzle.selectors;
        jQuery.expr[":"] = jQuery.expr.pseudos;
        jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
        jQuery.text = Sizzle.getText;
        jQuery.isXMLDoc = Sizzle.isXML;
        jQuery.contains = Sizzle.contains;
        var dir = function(elem, dir, until) {
            var matched = [],
                truncate = until !== undefined;
            while ((elem = elem[dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                    if (truncate && jQuery(elem).is(until)) { break; }
                    matched.push(elem);
                }
            }
            return matched;
        };
        var siblings = function(n, elem) {
            var matched = [];
            for (; n; n = n.nextSibling) { if (n.nodeType === 1 && n !== elem) { matched.push(n); } }
            return matched;
        };
        var rneedsContext = jQuery.expr.match.needsContext;
        var rsingleTag = (/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
        var risSimple = /^.[^:#\[\.,]*$/;

        function winnow(elements, qualifier, not) {
            if (jQuery.isFunction(qualifier)) { return jQuery.grep(elements, function(elem, i) { return !!qualifier.call(elem, i, elem) !== not; }); }
            if (qualifier.nodeType) { return jQuery.grep(elements, function(elem) { return (elem === qualifier) !== not; }); }
            if (typeof qualifier === "string") {
                if (risSimple.test(qualifier)) { return jQuery.filter(qualifier, elements, not); }
                qualifier = jQuery.filter(qualifier, elements);
            }
            return jQuery.grep(elements, function(elem) { return (indexOf.call(qualifier, elem) > -1) !== not; });
        }
        jQuery.filter = function(expr, elems, not) {
            var elem = elems[0];
            if (not) { expr = ":not(" + expr + ")"; }
            return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function(elem) { return elem.nodeType === 1; }));
        };
        jQuery.fn.extend({
            find: function(selector) {
                var i, len = this.length,
                    ret = [],
                    self = this;
                if (typeof selector !== "string") { return this.pushStack(jQuery(selector).filter(function() { for (i = 0; i < len; i++) { if (jQuery.contains(self[i], this)) { return true; } } })); }
                for (i = 0; i < len; i++) { jQuery.find(selector, self[i], ret); }
                ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
                ret.selector = this.selector ? this.selector + " " + selector : selector;
                return ret;
            },
            filter: function(selector) { return this.pushStack(winnow(this, selector || [], false)); },
            not: function(selector) { return this.pushStack(winnow(this, selector || [], true)); },
            is: function(selector) { return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length; }
        });
        var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            init = jQuery.fn.init = function(selector, context, root) {
                var match, elem;
                if (!selector) { return this; }
                root = root || rootjQuery;
                if (typeof selector === "string") {
                    if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) { match = [null, selector, null]; } else { match = rquickExpr.exec(selector); }
                    if (match && (match[1] || !context)) {
                        if (match[1]) {
                            context = context instanceof jQuery ? context[0] : context;
                            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) { for (match in context) { if (jQuery.isFunction(this[match])) { this[match](context[match]); } else { this.attr(match, context[match]); } } }
                            return this;
                        } else {
                            elem = document.getElementById(match[2]);
                            if (elem && elem.parentNode) {
                                this.length = 1;
                                this[0] = elem;
                            }
                            this.context = document;
                            this.selector = selector;
                            return this;
                        }
                    } else if (!context || context.jquery) { return (context || root).find(selector); } else { return this.constructor(context).find(selector); }
                } else if (selector.nodeType) {
                    this.context = this[0] = selector;
                    this.length = 1;
                    return this;
                } else if (jQuery.isFunction(selector)) { return root.ready !== undefined ? root.ready(selector) : selector(jQuery); }
                if (selector.selector !== undefined) {
                    this.selector = selector.selector;
                    this.context = selector.context;
                }
                return jQuery.makeArray(selector, this);
            };
        init.prototype = jQuery.fn;
        rootjQuery = jQuery(document);
        var rparentsprev = /^(?:parents|prev(?:Until|All))/,
            guaranteedUnique = { children: true, contents: true, next: true, prev: true };
        jQuery.fn.extend({
            has: function(target) {
                var targets = jQuery(target, this),
                    l = targets.length;
                return this.filter(function() { var i = 0; for (; i < l; i++) { if (jQuery.contains(this, targets[i])) { return true; } } });
            },
            closest: function(selectors, context) {
                var cur, i = 0,
                    l = this.length,
                    matched = [],
                    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;
                for (; i < l; i++) { for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) { if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) { matched.push(cur); break; } } }
                return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
            },
            index: function(elem) {
                if (!elem) { return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1; }
                if (typeof elem === "string") { return indexOf.call(jQuery(elem), this[0]); }
                return indexOf.call(this, elem.jquery ? elem[0] : elem);
            },
            add: function(selector, context) { return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context)))); },
            addBack: function(selector) { return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector)); }
        });

        function sibling(cur, dir) {
            while ((cur = cur[dir]) && cur.nodeType !== 1) {}
            return cur;
        }
        jQuery.each({ parent: function(elem) { var parent = elem.parentNode; return parent && parent.nodeType !== 11 ? parent : null; }, parents: function(elem) { return dir(elem, "parentNode"); }, parentsUntil: function(elem, i, until) { return dir(elem, "parentNode", until); }, next: function(elem) { return sibling(elem, "nextSibling"); }, prev: function(elem) { return sibling(elem, "previousSibling"); }, nextAll: function(elem) { return dir(elem, "nextSibling"); }, prevAll: function(elem) { return dir(elem, "previousSibling"); }, nextUntil: function(elem, i, until) { return dir(elem, "nextSibling", until); }, prevUntil: function(elem, i, until) { return dir(elem, "previousSibling", until); }, siblings: function(elem) { return siblings((elem.parentNode || {}).firstChild, elem); }, children: function(elem) { return siblings(elem.firstChild); }, contents: function(elem) { return elem.contentDocument || jQuery.merge([], elem.childNodes); } }, function(name, fn) {
            jQuery.fn[name] = function(until, selector) {
                var matched = jQuery.map(this, fn, until);
                if (name.slice(-5) !== "Until") { selector = until; }
                if (selector && typeof selector === "string") { matched = jQuery.filter(selector, matched); }
                if (this.length > 1) {
                    if (!guaranteedUnique[name]) { jQuery.uniqueSort(matched); }
                    if (rparentsprev.test(name)) { matched.reverse(); }
                }
                return this.pushStack(matched);
            };
        });
        var rnotwhite = (/\S+/g);

        function createOptions(options) {
            var object = {};
            jQuery.each(options.match(rnotwhite) || [], function(_, flag) { object[flag] = true; });
            return object;
        }
        jQuery.Callbacks = function(options) {
            options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
            var
                firing, memory, fired, locked, list = [],
                queue = [],
                firingIndex = -1,
                fire = function() {
                    locked = options.once;
                    fired = firing = true;
                    for (; queue.length; firingIndex = -1) {
                        memory = queue.shift();
                        while (++firingIndex < list.length) {
                            if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                                firingIndex = list.length;
                                memory = false;
                            }
                        }
                    }
                    if (!options.memory) { memory = false; }
                    firing = false;
                    if (locked) { if (memory) { list = []; } else { list = ""; } }
                },
                self = {
                    add: function() {
                        if (list) {
                            if (memory && !firing) {
                                firingIndex = list.length - 1;
                                queue.push(memory);
                            }
                            (function add(args) { jQuery.each(args, function(_, arg) { if (jQuery.isFunction(arg)) { if (!options.unique || !self.has(arg)) { list.push(arg); } } else if (arg && arg.length && jQuery.type(arg) !== "string") { add(arg); } }); })(arguments);
                            if (memory && !firing) { fire(); }
                        }
                        return this;
                    },
                    remove: function() { jQuery.each(arguments, function(_, arg) { var index; while ((index = jQuery.inArray(arg, list, index)) > -1) { list.splice(index, 1); if (index <= firingIndex) { firingIndex--; } } }); return this; },
                    has: function(fn) { return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0; },
                    empty: function() {
                        if (list) { list = []; }
                        return this;
                    },
                    disable: function() {
                        locked = queue = [];
                        list = memory = "";
                        return this;
                    },
                    disabled: function() { return !list; },
                    lock: function() {
                        locked = queue = [];
                        if (!memory) { list = memory = ""; }
                        return this;
                    },
                    locked: function() { return !!locked; },
                    fireWith: function(context, args) {
                        if (!locked) {
                            args = args || [];
                            args = [context, args.slice ? args.slice() : args];
                            queue.push(args);
                            if (!firing) { fire(); }
                        }
                        return this;
                    },
                    fire: function() { self.fireWith(this, arguments); return this; },
                    fired: function() { return !!fired; }
                };
            return self;
        };
        jQuery.extend({
            Deferred: function(func) {
                var tuples = [
                        ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", jQuery.Callbacks("memory")]
                    ],
                    state = "pending",
                    promise = {
                        state: function() { return state; },
                        always: function() { deferred.done(arguments).fail(arguments); return this; },
                        then: function() {
                            var fns = arguments;
                            return jQuery.Deferred(function(newDefer) {
                                jQuery.each(tuples, function(i, tuple) {
                                    var fn = jQuery.isFunction(fns[i]) && fns[i];
                                    deferred[tuple[1]](function() { var returned = fn && fn.apply(this, arguments); if (returned && jQuery.isFunction(returned.promise)) { returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject); } else { newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments); } });
                                });
                                fns = null;
                            }).promise();
                        },
                        promise: function(obj) { return obj != null ? jQuery.extend(obj, promise) : promise; }
                    },
                    deferred = {};
                promise.pipe = promise.then;
                jQuery.each(tuples, function(i, tuple) {
                    var list = tuple[2],
                        stateString = tuple[3];
                    promise[tuple[1]] = list.add;
                    if (stateString) { list.add(function() { state = stateString; }, tuples[i ^ 1][2].disable, tuples[2][2].lock); }
                    deferred[tuple[0]] = function() { deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments); return this; };
                    deferred[tuple[0] + "With"] = list.fireWith;
                });
                promise.promise(deferred);
                if (func) { func.call(deferred, deferred); }
                return deferred;
            },
            when: function(subordinate) {
                var i = 0,
                    resolveValues = slice.call(arguments),
                    length = resolveValues.length,
                    remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,
                    deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
                    updateFunc = function(i, contexts, values) {
                        return function(value) {
                            contexts[i] = this;
                            values[i] = arguments.length > 1 ? slice.call(arguments) : value;
                            if (values === progressValues) { deferred.notifyWith(contexts, values); } else if (!(--remaining)) { deferred.resolveWith(contexts, values); }
                        };
                    },
                    progressValues, progressContexts, resolveContexts;
                if (length > 1) {
                    progressValues = new Array(length);
                    progressContexts = new Array(length);
                    resolveContexts = new Array(length);
                    for (; i < length; i++) { if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) { resolveValues[i].promise().progress(updateFunc(i, progressContexts, progressValues)).done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject); } else {--remaining; } }
                }
                if (!remaining) { deferred.resolveWith(resolveContexts, resolveValues); }
                return deferred.promise();
            }
        });
        var readyList;
        jQuery.fn.ready = function(fn) { jQuery.ready.promise().done(fn); return this; };
        jQuery.extend({
            isReady: false,
            readyWait: 1,
            holdReady: function(hold) { if (hold) { jQuery.readyWait++; } else { jQuery.ready(true); } },
            ready: function(wait) {
                if (wait === true ? --jQuery.readyWait : jQuery.isReady) { return; }
                jQuery.isReady = true;
                if (wait !== true && --jQuery.readyWait > 0) { return; }
                readyList.resolveWith(document, [jQuery]);
                if (jQuery.fn.triggerHandler) {
                    jQuery(document).triggerHandler("ready");
                    jQuery(document).off("ready");
                }
            }
        });

        function completed() {
            document.removeEventListener("DOMContentLoaded", completed);
            window.removeEventListener("load", completed);
            jQuery.ready();
        }
        jQuery.ready.promise = function(obj) {
            if (!readyList) {
                readyList = jQuery.Deferred();
                if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) { window.setTimeout(jQuery.ready); } else {
                    document.addEventListener("DOMContentLoaded", completed);
                    window.addEventListener("load", completed);
                }
            }
            return readyList.promise(obj);
        };
        jQuery.ready.promise();
        var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
            var i = 0,
                len = elems.length,
                bulk = key == null;
            if (jQuery.type(key) === "object") {
                chainable = true;
                for (i in key) { access(elems, fn, i, key[i], true, emptyGet, raw); }
            } else if (value !== undefined) {
                chainable = true;
                if (!jQuery.isFunction(value)) { raw = true; }
                if (bulk) {
                    if (raw) {
                        fn.call(elems, value);
                        fn = null;
                    } else {
                        bulk = fn;
                        fn = function(elem, key, value) { return bulk.call(jQuery(elem), value); };
                    }
                }
                if (fn) { for (; i < len; i++) { fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key))); } }
            }
            return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
        };
        var acceptData = function(owner) { return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType); };

        function Data() { this.expando = jQuery.expando + Data.uid++; }
        Data.uid = 1;
        Data.prototype = {
            register: function(owner, initial) {
                var value = initial || {};
                if (owner.nodeType) { owner[this.expando] = value; } else { Object.defineProperty(owner, this.expando, { value: value, writable: true, configurable: true }); }
                return owner[this.expando];
            },
            cache: function(owner) {
                if (!acceptData(owner)) { return {}; }
                var value = owner[this.expando];
                if (!value) { value = {}; if (acceptData(owner)) { if (owner.nodeType) { owner[this.expando] = value; } else { Object.defineProperty(owner, this.expando, { value: value, configurable: true }); } } }
                return value;
            },
            set: function(owner, data, value) {
                var prop, cache = this.cache(owner);
                if (typeof data === "string") { cache[data] = value; } else { for (prop in data) { cache[prop] = data[prop]; } }
                return cache;
            },
            get: function(owner, key) { return key === undefined ? this.cache(owner) : owner[this.expando] && owner[this.expando][key]; },
            access: function(owner, key, value) {
                var stored;
                if (key === undefined || ((key && typeof key === "string") && value === undefined)) { stored = this.get(owner, key); return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key)); }
                this.set(owner, key, value);
                return value !== undefined ? value : key;
            },
            remove: function(owner, key) {
                var i, name, camel, cache = owner[this.expando];
                if (cache === undefined) { return; }
                if (key === undefined) { this.register(owner); } else {
                    if (jQuery.isArray(key)) { name = key.concat(key.map(jQuery.camelCase)); } else {
                        camel = jQuery.camelCase(key);
                        if (key in cache) { name = [key, camel]; } else {
                            name = camel;
                            name = name in cache ? [name] : (name.match(rnotwhite) || []);
                        }
                    }
                    i = name.length;
                    while (i--) { delete cache[name[i]]; }
                }
                if (key === undefined || jQuery.isEmptyObject(cache)) { if (owner.nodeType) { owner[this.expando] = undefined; } else { delete owner[this.expando]; } }
            },
            hasData: function(owner) { var cache = owner[this.expando]; return cache !== undefined && !jQuery.isEmptyObject(cache); }
        };
        var dataPriv = new Data();
        var dataUser = new Data();
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            rmultiDash = /[A-Z]/g;

        function dataAttr(elem, key, data) {
            var name;
            if (data === undefined && elem.nodeType === 1) {
                name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
                data = elem.getAttribute(name);
                if (typeof data === "string") {
                    try { data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data; } catch (e) {}
                    dataUser.set(elem, key, data);
                } else { data = undefined; }
            }
            return data;
        }
        jQuery.extend({ hasData: function(elem) { return dataUser.hasData(elem) || dataPriv.hasData(elem); }, data: function(elem, name, data) { return dataUser.access(elem, name, data); }, removeData: function(elem, name) { dataUser.remove(elem, name); }, _data: function(elem, name, data) { return dataPriv.access(elem, name, data); }, _removeData: function(elem, name) { dataPriv.remove(elem, name); } });
        jQuery.fn.extend({
            data: function(key, value) {
                var i, name, data, elem = this[0],
                    attrs = elem && elem.attributes;
                if (key === undefined) {
                    if (this.length) {
                        data = dataUser.get(elem);
                        if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                            i = attrs.length;
                            while (i--) {
                                if (attrs[i]) {
                                    name = attrs[i].name;
                                    if (name.indexOf("data-") === 0) {
                                        name = jQuery.camelCase(name.slice(5));
                                        dataAttr(elem, name, data[name]);
                                    }
                                }
                            }
                            dataPriv.set(elem, "hasDataAttrs", true);
                        }
                    }
                    return data;
                }
                if (typeof key === "object") { return this.each(function() { dataUser.set(this, key); }); }
                return access(this, function(value) {
                    var data, camelKey;
                    if (elem && value === undefined) {
                        data = dataUser.get(elem, key) || dataUser.get(elem, key.replace(rmultiDash, "-$&").toLowerCase());
                        if (data !== undefined) { return data; }
                        camelKey = jQuery.camelCase(key);
                        data = dataUser.get(elem, camelKey);
                        if (data !== undefined) { return data; }
                        data = dataAttr(elem, camelKey, undefined);
                        if (data !== undefined) { return data; }
                        return;
                    }
                    camelKey = jQuery.camelCase(key);
                    this.each(function() {
                        var data = dataUser.get(this, camelKey);
                        dataUser.set(this, camelKey, value);
                        if (key.indexOf("-") > -1 && data !== undefined) { dataUser.set(this, key, value); }
                    });
                }, null, value, arguments.length > 1, null, true);
            },
            removeData: function(key) { return this.each(function() { dataUser.remove(this, key); }); }
        });
        jQuery.extend({
            queue: function(elem, type, data) {
                var queue;
                if (elem) {
                    type = (type || "fx") + "queue";
                    queue = dataPriv.get(elem, type);
                    if (data) { if (!queue || jQuery.isArray(data)) { queue = dataPriv.access(elem, type, jQuery.makeArray(data)); } else { queue.push(data); } }
                    return queue || [];
                }
            },
            dequeue: function(elem, type) {
                type = type || "fx";
                var queue = jQuery.queue(elem, type),
                    startLength = queue.length,
                    fn = queue.shift(),
                    hooks = jQuery._queueHooks(elem, type),
                    next = function() { jQuery.dequeue(elem, type); };
                if (fn === "inprogress") {
                    fn = queue.shift();
                    startLength--;
                }
                if (fn) {
                    if (type === "fx") { queue.unshift("inprogress"); }
                    delete hooks.stop;
                    fn.call(elem, next, hooks);
                }
                if (!startLength && hooks) { hooks.empty.fire(); }
            },
            _queueHooks: function(elem, type) { var key = type + "queueHooks"; return dataPriv.get(elem, key) || dataPriv.access(elem, key, { empty: jQuery.Callbacks("once memory").add(function() { dataPriv.remove(elem, [type + "queue", key]); }) }); }
        });
        jQuery.fn.extend({
            queue: function(type, data) {
                var setter = 2;
                if (typeof type !== "string") {
                    data = type;
                    type = "fx";
                    setter--;
                }
                if (arguments.length < setter) { return jQuery.queue(this[0], type); }
                return data === undefined ? this : this.each(function() {
                    var queue = jQuery.queue(this, type, data);
                    jQuery._queueHooks(this, type);
                    if (type === "fx" && queue[0] !== "inprogress") { jQuery.dequeue(this, type); }
                });
            },
            dequeue: function(type) { return this.each(function() { jQuery.dequeue(this, type); }); },
            clearQueue: function(type) { return this.queue(type || "fx", []); },
            promise: function(type, obj) {
                var tmp, count = 1,
                    defer = jQuery.Deferred(),
                    elements = this,
                    i = this.length,
                    resolve = function() { if (!(--count)) { defer.resolveWith(elements, [elements]); } };
                if (typeof type !== "string") {
                    obj = type;
                    type = undefined;
                }
                type = type || "fx";
                while (i--) {
                    tmp = dataPriv.get(elements[i], type + "queueHooks");
                    if (tmp && tmp.empty) {
                        count++;
                        tmp.empty.add(resolve);
                    }
                }
                resolve();
                return defer.promise(obj);
            }
        });
        var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
        var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
        var cssExpand = ["Top", "Right", "Bottom", "Left"];
        var isHidden = function(elem, el) { elem = el || elem; return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem); };

        function adjustCSS(elem, prop, valueParts, tween) {
            var adjusted, scale = 1,
                maxIterations = 20,
                currentValue = tween ? function() { return tween.cur(); } : function() { return jQuery.css(elem, prop, ""); },
                initial = currentValue(),
                unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
                initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
            if (initialInUnit && initialInUnit[3] !== unit) {
                unit = unit || initialInUnit[3];
                valueParts = valueParts || [];
                initialInUnit = +initial || 1;
                do {
                    scale = scale || ".5";
                    initialInUnit = initialInUnit / scale;
                    jQuery.style(elem, prop, initialInUnit + unit);
                } while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
            }
            if (valueParts) {
                initialInUnit = +initialInUnit || +initial || 0;
                adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
                if (tween) {
                    tween.unit = unit;
                    tween.start = initialInUnit;
                    tween.end = adjusted;
                }
            }
            return adjusted;
        }
        var rcheckableType = (/^(?:checkbox|radio)$/i);
        var rtagName = (/<([\w:-]+)/);
        var rscriptType = (/^$|\/(?:java|ecma)script/i);
        var wrapMap = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
        wrapMap.optgroup = wrapMap.option;
        wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
        wrapMap.th = wrapMap.td;

        function getAll(context, tag) { var ret = typeof context.getElementsByTagName !== "undefined" ? context.getElementsByTagName(tag || "*") : typeof context.querySelectorAll !== "undefined" ? context.querySelectorAll(tag || "*") : []; return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret; }

        function setGlobalEval(elems, refElements) {
            var i = 0,
                l = elems.length;
            for (; i < l; i++) { dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval")); }
        }
        var rhtml = /<|&#?\w+;/;

        function buildFragment(elems, context, scripts, selection, ignored) {
            var elem, tmp, tag, wrap, contains, j, fragment = context.createDocumentFragment(),
                nodes = [],
                i = 0,
                l = elems.length;
            for (; i < l; i++) {
                elem = elems[i];
                if (elem || elem === 0) {
                    if (jQuery.type(elem) === "object") { jQuery.merge(nodes, elem.nodeType ? [elem] : elem); } else if (!rhtml.test(elem)) { nodes.push(context.createTextNode(elem)); } else {
                        tmp = tmp || fragment.appendChild(context.createElement("div"));
                        tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                        wrap = wrapMap[tag] || wrapMap._default;
                        tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                        j = wrap[0];
                        while (j--) { tmp = tmp.lastChild; }
                        jQuery.merge(nodes, tmp.childNodes);
                        tmp = fragment.firstChild;
                        tmp.textContent = "";
                    }
                }
            }
            fragment.textContent = "";
            i = 0;
            while ((elem = nodes[i++])) {
                if (selection && jQuery.inArray(elem, selection) > -1) {
                    if (ignored) { ignored.push(elem); }
                    continue;
                }
                contains = jQuery.contains(elem.ownerDocument, elem);
                tmp = getAll(fragment.appendChild(elem), "script");
                if (contains) { setGlobalEval(tmp); }
                if (scripts) { j = 0; while ((elem = tmp[j++])) { if (rscriptType.test(elem.type || "")) { scripts.push(elem); } } }
            }
            return fragment;
        }
        (function() {
            var fragment = document.createDocumentFragment(),
                div = fragment.appendChild(document.createElement("div")),
                input = document.createElement("input");
            input.setAttribute("type", "radio");
            input.setAttribute("checked", "checked");
            input.setAttribute("name", "t");
            div.appendChild(input);
            support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
            div.innerHTML = "<textarea>x</textarea>";
            support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        })();
        var
            rkeyEvent = /^key/,
            rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

        function returnTrue() { return true; }

        function returnFalse() { return false; }

        function safeActiveElement() { try { return document.activeElement; } catch (err) {} }

        function on(elem, types, selector, data, fn, one) {
            var origFn, type;
            if (typeof types === "object") {
                if (typeof selector !== "string") {
                    data = data || selector;
                    selector = undefined;
                }
                for (type in types) { on(elem, type, selector, data, types[type], one); }
                return elem;
            }
            if (data == null && fn == null) {
                fn = selector;
                data = selector = undefined;
            } else if (fn == null) {
                if (typeof selector === "string") {
                    fn = data;
                    data = undefined;
                } else {
                    fn = data;
                    data = selector;
                    selector = undefined;
                }
            }
            if (fn === false) { fn = returnFalse; } else if (!fn) { return elem; }
            if (one === 1) {
                origFn = fn;
                fn = function(event) { jQuery().off(event); return origFn.apply(this, arguments); };
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
            }
            return elem.each(function() { jQuery.event.add(this, types, fn, data, selector); });
        }
        jQuery.event = {
            global: {},
            add: function(elem, types, handler, data, selector) {
                var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
                if (!elemData) { return; }
                if (handler.handler) {
                    handleObjIn = handler;
                    handler = handleObjIn.handler;
                    selector = handleObjIn.selector;
                }
                if (!handler.guid) { handler.guid = jQuery.guid++; }
                if (!(events = elemData.events)) { events = elemData.events = {}; }
                if (!(eventHandle = elemData.handle)) { eventHandle = elemData.handle = function(e) { return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined; }; }
                types = (types || "").match(rnotwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) { continue; }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    special = jQuery.event.special[type] || {};
                    handleObj = jQuery.extend({ type: type, origType: origType, data: data, handler: handler, guid: handler.guid, selector: selector, needsContext: selector && jQuery.expr.match.needsContext.test(selector), namespace: namespaces.join(".") }, handleObjIn);
                    if (!(handlers = events[type])) {
                        handlers = events[type] = [];
                        handlers.delegateCount = 0;
                        if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) { if (elem.addEventListener) { elem.addEventListener(type, eventHandle); } }
                    }
                    if (special.add) { special.add.call(elem, handleObj); if (!handleObj.handler.guid) { handleObj.handler.guid = handler.guid; } }
                    if (selector) { handlers.splice(handlers.delegateCount++, 0, handleObj); } else { handlers.push(handleObj); }
                    jQuery.event.global[type] = true;
                }
            },
            remove: function(elem, types, handler, selector, mappedTypes) {
                var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
                if (!elemData || !(events = elemData.events)) { return; }
                types = (types || "").match(rnotwhite) || [""];
                t = types.length;
                while (t--) {
                    tmp = rtypenamespace.exec(types[t]) || [];
                    type = origType = tmp[1];
                    namespaces = (tmp[2] || "").split(".").sort();
                    if (!type) {
                        for (type in events) { jQuery.event.remove(elem, type + types[t], handler, selector, true); }
                        continue;
                    }
                    special = jQuery.event.special[type] || {};
                    type = (selector ? special.delegateType : special.bindType) || type;
                    handlers = events[type] || [];
                    tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                    origCount = j = handlers.length;
                    while (j--) {
                        handleObj = handlers[j];
                        if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                            handlers.splice(j, 1);
                            if (handleObj.selector) { handlers.delegateCount--; }
                            if (special.remove) { special.remove.call(elem, handleObj); }
                        }
                    }
                    if (origCount && !handlers.length) {
                        if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) { jQuery.removeEvent(elem, type, elemData.handle); }
                        delete events[type];
                    }
                }
                if (jQuery.isEmptyObject(events)) { dataPriv.remove(elem, "handle events"); }
            },
            dispatch: function(event) {
                event = jQuery.event.fix(event);
                var i, j, ret, matched, handleObj, handlerQueue = [],
                    args = slice.call(arguments),
                    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
                    special = jQuery.event.special[event.type] || {};
                args[0] = event;
                event.delegateTarget = this;
                if (special.preDispatch && special.preDispatch.call(this, event) === false) { return; }
                handlerQueue = jQuery.event.handlers.call(this, event, handlers);
                i = 0;
                while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                    event.currentTarget = matched.elem;
                    j = 0;
                    while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
                        if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {
                            event.handleObj = handleObj;
                            event.data = handleObj.data;
                            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
                            if (ret !== undefined) {
                                if ((event.result = ret) === false) {
                                    event.preventDefault();
                                    event.stopPropagation();
                                }
                            }
                        }
                    }
                }
                if (special.postDispatch) { special.postDispatch.call(this, event); }
                return event.result;
            },
            handlers: function(event, handlers) {
                var i, matches, sel, handleObj, handlerQueue = [],
                    delegateCount = handlers.delegateCount,
                    cur = event.target;
                if (delegateCount && cur.nodeType && (event.type !== "click" || isNaN(event.button) || event.button < 1)) {
                    for (; cur !== this; cur = cur.parentNode || this) {
                        if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                            matches = [];
                            for (i = 0; i < delegateCount; i++) {
                                handleObj = handlers[i];
                                sel = handleObj.selector + " ";
                                if (matches[sel] === undefined) { matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length; }
                                if (matches[sel]) { matches.push(handleObj); }
                            }
                            if (matches.length) { handlerQueue.push({ elem: cur, handlers: matches }); }
                        }
                    }
                }
                if (delegateCount < handlers.length) { handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) }); }
                return handlerQueue;
            },
            props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
                "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(event, original) {
                    if (event.which == null) { event.which = original.charCode != null ? original.charCode : original.keyCode; }
                    return event;
                }
            },
            mouseHooks: {
                props: ("button buttons clientX clientY offsetX offsetY pageX pageY " +
                    "screenX screenY toElement").split(" "),
                filter: function(event, original) {
                    var eventDoc, doc, body, button = original.button;
                    if (event.pageX == null && original.clientX != null) {
                        eventDoc = event.target.ownerDocument || document;
                        doc = eventDoc.documentElement;
                        body = eventDoc.body;
                        event.pageX = original.clientX +
                            (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                            (doc && doc.clientLeft || body && body.clientLeft || 0);
                        event.pageY = original.clientY +
                            (doc && doc.scrollTop || body && body.scrollTop || 0) -
                            (doc && doc.clientTop || body && body.clientTop || 0);
                    }
                    if (!event.which && button !== undefined) { event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0))); }
                    return event;
                }
            },
            fix: function(event) {
                if (event[jQuery.expando]) { return event; }
                var i, prop, copy, type = event.type,
                    originalEvent = event,
                    fixHook = this.fixHooks[type];
                if (!fixHook) { this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {}; }
                copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
                event = new jQuery.Event(originalEvent);
                i = copy.length;
                while (i--) {
                    prop = copy[i];
                    event[prop] = originalEvent[prop];
                }
                if (!event.target) { event.target = document; }
                if (event.target.nodeType === 3) { event.target = event.target.parentNode; }
                return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
            },
            special: { load: { noBubble: true }, focus: { trigger: function() { if (this !== safeActiveElement() && this.focus) { this.focus(); return false; } }, delegateType: "focusin" }, blur: { trigger: function() { if (this === safeActiveElement() && this.blur) { this.blur(); return false; } }, delegateType: "focusout" }, click: { trigger: function() { if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) { this.click(); return false; } }, _default: function(event) { return jQuery.nodeName(event.target, "a"); } }, beforeunload: { postDispatch: function(event) { if (event.result !== undefined && event.originalEvent) { event.originalEvent.returnValue = event.result; } } } }
        };
        jQuery.removeEvent = function(elem, type, handle) { if (elem.removeEventListener) { elem.removeEventListener(type, handle); } };
        jQuery.Event = function(src, props) {
            if (!(this instanceof jQuery.Event)) { return new jQuery.Event(src, props); }
            if (src && src.type) {
                this.originalEvent = src;
                this.type = src.type;
                this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
            } else { this.type = src; }
            if (props) { jQuery.extend(this, props); }
            this.timeStamp = src && src.timeStamp || jQuery.now();
            this[jQuery.expando] = true;
        };
        jQuery.Event.prototype = {
            constructor: jQuery.Event,
            isDefaultPrevented: returnFalse,
            isPropagationStopped: returnFalse,
            isImmediatePropagationStopped: returnFalse,
            isSimulated: false,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = returnTrue;
                if (e && !this.isSimulated) { e.preventDefault(); }
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = returnTrue;
                if (e && !this.isSimulated) { e.stopPropagation(); }
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = returnTrue;
                if (e && !this.isSimulated) { e.stopImmediatePropagation(); }
                this.stopPropagation();
            }
        };
        jQuery.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(orig, fix) {
            jQuery.event.special[orig] = {
                delegateType: fix,
                bindType: fix,
                handle: function(event) {
                    var ret, target = this,
                        related = event.relatedTarget,
                        handleObj = event.handleObj;
                    if (!related || (related !== target && !jQuery.contains(target, related))) {
                        event.type = handleObj.origType;
                        ret = handleObj.handler.apply(this, arguments);
                        event.type = fix;
                    }
                    return ret;
                }
            };
        });
        jQuery.fn.extend({
            on: function(types, selector, data, fn) { return on(this, types, selector, data, fn); },
            one: function(types, selector, data, fn) { return on(this, types, selector, data, fn, 1); },
            off: function(types, selector, fn) {
                var handleObj, type;
                if (types && types.preventDefault && types.handleObj) {
                    handleObj = types.handleObj;
                    jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                    return this;
                }
                if (typeof types === "object") {
                    for (type in types) { this.off(type, selector, types[type]); }
                    return this;
                }
                if (selector === false || typeof selector === "function") {
                    fn = selector;
                    selector = undefined;
                }
                if (fn === false) { fn = returnFalse; }
                return this.each(function() { jQuery.event.remove(this, types, fn, selector); });
            }
        });
        var
            rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            rnoInnerhtml = /<script|<style|<link/i,
            rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
            rscriptTypeMasked = /^true\/(.*)/,
            rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function manipulationTarget(elem, content) { return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem; }

        function disableScript(elem) { elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type; return elem; }

        function restoreScript(elem) {
            var match = rscriptTypeMasked.exec(elem.type);
            if (match) { elem.type = match[1]; } else { elem.removeAttribute("type"); }
            return elem;
        }

        function cloneCopyEvent(src, dest) {
            var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
            if (dest.nodeType !== 1) { return; }
            if (dataPriv.hasData(src)) {
                pdataOld = dataPriv.access(src);
                pdataCur = dataPriv.set(dest, pdataOld);
                events = pdataOld.events;
                if (events) {
                    delete pdataCur.handle;
                    pdataCur.events = {};
                    for (type in events) { for (i = 0, l = events[type].length; i < l; i++) { jQuery.event.add(dest, type, events[type][i]); } }
                }
            }
            if (dataUser.hasData(src)) {
                udataOld = dataUser.access(src);
                udataCur = jQuery.extend({}, udataOld);
                dataUser.set(dest, udataCur);
            }
        }

        function fixInput(src, dest) { var nodeName = dest.nodeName.toLowerCase(); if (nodeName === "input" && rcheckableType.test(src.type)) { dest.checked = src.checked; } else if (nodeName === "input" || nodeName === "textarea") { dest.defaultValue = src.defaultValue; } }

        function domManip(collection, args, callback, ignored) {
            args = concat.apply([], args);
            var fragment, first, scripts, hasScripts, node, doc, i = 0,
                l = collection.length,
                iNoClone = l - 1,
                value = args[0],
                isFunction = jQuery.isFunction(value);
            if (isFunction || (l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value))) {
                return collection.each(function(index) {
                    var self = collection.eq(index);
                    if (isFunction) { args[0] = value.call(this, index, self.html()); }
                    domManip(self, args, callback, ignored);
                });
            }
            if (l) {
                fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
                first = fragment.firstChild;
                if (fragment.childNodes.length === 1) { fragment = first; }
                if (first || ignored) {
                    scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                    hasScripts = scripts.length;
                    for (; i < l; i++) {
                        node = fragment;
                        if (i !== iNoClone) { node = jQuery.clone(node, true, true); if (hasScripts) { jQuery.merge(scripts, getAll(node, "script")); } }
                        callback.call(collection[i], node, i);
                    }
                    if (hasScripts) {
                        doc = scripts[scripts.length - 1].ownerDocument;
                        jQuery.map(scripts, restoreScript);
                        for (i = 0; i < hasScripts; i++) { node = scripts[i]; if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) { if (node.src) { if (jQuery._evalUrl) { jQuery._evalUrl(node.src); } } else { jQuery.globalEval(node.textContent.replace(rcleanScript, "")); } } }
                    }
                }
            }
            return collection;
        }

        function remove(elem, selector, keepData) {
            var node, nodes = selector ? jQuery.filter(selector, elem) : elem,
                i = 0;
            for (;
                (node = nodes[i]) != null; i++) {
                if (!keepData && node.nodeType === 1) { jQuery.cleanData(getAll(node)); }
                if (node.parentNode) {
                    if (keepData && jQuery.contains(node.ownerDocument, node)) { setGlobalEval(getAll(node, "script")); }
                    node.parentNode.removeChild(node);
                }
            }
            return elem;
        }
        jQuery.extend({
            htmlPrefilter: function(html) { return html.replace(rxhtmlTag, "<$1></$2>"); },
            clone: function(elem, dataAndEvents, deepDataAndEvents) {
                var i, l, srcElements, destElements, clone = elem.cloneNode(true),
                    inPage = jQuery.contains(elem.ownerDocument, elem);
                if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                    destElements = getAll(clone);
                    srcElements = getAll(elem);
                    for (i = 0, l = srcElements.length; i < l; i++) { fixInput(srcElements[i], destElements[i]); }
                }
                if (dataAndEvents) {
                    if (deepDataAndEvents) {
                        srcElements = srcElements || getAll(elem);
                        destElements = destElements || getAll(clone);
                        for (i = 0, l = srcElements.length; i < l; i++) { cloneCopyEvent(srcElements[i], destElements[i]); }
                    } else { cloneCopyEvent(elem, clone); }
                }
                destElements = getAll(clone, "script");
                if (destElements.length > 0) { setGlobalEval(destElements, !inPage && getAll(elem, "script")); }
                return clone;
            },
            cleanData: function(elems) {
                var data, elem, type, special = jQuery.event.special,
                    i = 0;
                for (;
                    (elem = elems[i]) !== undefined; i++) {
                    if (acceptData(elem)) {
                        if ((data = elem[dataPriv.expando])) {
                            if (data.events) { for (type in data.events) { if (special[type]) { jQuery.event.remove(elem, type); } else { jQuery.removeEvent(elem, type, data.handle); } } }
                            elem[dataPriv.expando] = undefined;
                        }
                        if (elem[dataUser.expando]) { elem[dataUser.expando] = undefined; }
                    }
                }
            }
        });
        jQuery.fn.extend({
            domManip: domManip,
            detach: function(selector) { return remove(this, selector, true); },
            remove: function(selector) { return remove(this, selector); },
            text: function(value) { return access(this, function(value) { return value === undefined ? jQuery.text(this) : this.empty().each(function() { if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) { this.textContent = value; } }); }, null, value, arguments.length); },
            append: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.appendChild(elem);
                    }
                });
            },
            prepend: function() {
                return domManip(this, arguments, function(elem) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var target = manipulationTarget(this, elem);
                        target.insertBefore(elem, target.firstChild);
                    }
                });
            },
            before: function() { return domManip(this, arguments, function(elem) { if (this.parentNode) { this.parentNode.insertBefore(elem, this); } }); },
            after: function() { return domManip(this, arguments, function(elem) { if (this.parentNode) { this.parentNode.insertBefore(elem, this.nextSibling); } }); },
            empty: function() {
                var elem, i = 0;
                for (;
                    (elem = this[i]) != null; i++) {
                    if (elem.nodeType === 1) {
                        jQuery.cleanData(getAll(elem, false));
                        elem.textContent = "";
                    }
                }
                return this;
            },
            clone: function(dataAndEvents, deepDataAndEvents) {
                dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
                deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
                return this.map(function() { return jQuery.clone(this, dataAndEvents, deepDataAndEvents); });
            },
            html: function(value) {
                return access(this, function(value) {
                    var elem = this[0] || {},
                        i = 0,
                        l = this.length;
                    if (value === undefined && elem.nodeType === 1) { return elem.innerHTML; }
                    if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
                        value = jQuery.htmlPrefilter(value);
                        try {
                            for (; i < l; i++) {
                                elem = this[i] || {};
                                if (elem.nodeType === 1) {
                                    jQuery.cleanData(getAll(elem, false));
                                    elem.innerHTML = value;
                                }
                            }
                            elem = 0;
                        } catch (e) {}
                    }
                    if (elem) { this.empty().append(value); }
                }, null, value, arguments.length);
            },
            replaceWith: function() {
                var ignored = [];
                return domManip(this, arguments, function(elem) {
                    var parent = this.parentNode;
                    if (jQuery.inArray(this, ignored) < 0) { jQuery.cleanData(getAll(this)); if (parent) { parent.replaceChild(elem, this); } }
                }, ignored);
            }
        });
        jQuery.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(name, original) {
            jQuery.fn[name] = function(selector) {
                var elems, ret = [],
                    insert = jQuery(selector),
                    last = insert.length - 1,
                    i = 0;
                for (; i <= last; i++) {
                    elems = i === last ? this : this.clone(true);
                    jQuery(insert[i])[original](elems);
                    push.apply(ret, elems.get());
                }
                return this.pushStack(ret);
            };
        });
        var iframe, elemdisplay = { HTML: "block", BODY: "block" };

        function actualDisplay(name, doc) {
            var elem = jQuery(doc.createElement(name)).appendTo(doc.body),
                display = jQuery.css(elem[0], "display");
            elem.detach();
            return display;
        }

        function defaultDisplay(nodeName) {
            var doc = document,
                display = elemdisplay[nodeName];
            if (!display) {
                display = actualDisplay(nodeName, doc);
                if (display === "none" || !display) {
                    iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);
                    doc = iframe[0].contentDocument;
                    doc.write();
                    doc.close();
                    display = actualDisplay(nodeName, doc);
                    iframe.detach();
                }
                elemdisplay[nodeName] = display;
            }
            return display;
        }
        var rmargin = (/^margin/);
        var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
        var getStyles = function(elem) {
            var view = elem.ownerDocument.defaultView;
            if (!view || !view.opener) { view = window; }
            return view.getComputedStyle(elem);
        };
        var swap = function(elem, options, callback, args) {
            var ret, name, old = {};
            for (name in options) {
                old[name] = elem.style[name];
                elem.style[name] = options[name];
            }
            ret = callback.apply(elem, args || []);
            for (name in options) { elem.style[name] = old[name]; }
            return ret;
        };
        var documentElement = document.documentElement;
        (function() {
            var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal, container = document.createElement("div"),
                div = document.createElement("div");
            if (!div.style) { return; }
            div.style.backgroundClip = "content-box";
            div.cloneNode(true).style.backgroundClip = "";
            support.clearCloneStyle = div.style.backgroundClip === "content-box";
            container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
                "padding:0;margin-top:1px;position:absolute";
            container.appendChild(div);

            function computeStyleTests() {
                div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
                    "position:relative;display:block;" +
                    "margin:auto;border:1px;padding:1px;" +
                    "top:1%;width:50%";
                div.innerHTML = "";
                documentElement.appendChild(container);
                var divStyle = window.getComputedStyle(div);
                pixelPositionVal = divStyle.top !== "1%";
                reliableMarginLeftVal = divStyle.marginLeft === "2px";
                boxSizingReliableVal = divStyle.width === "4px";
                div.style.marginRight = "50%";
                pixelMarginRightVal = divStyle.marginRight === "4px";
                documentElement.removeChild(container);
            }
            jQuery.extend(support, {
                pixelPosition: function() { computeStyleTests(); return pixelPositionVal; },
                boxSizingReliable: function() {
                    if (boxSizingReliableVal == null) { computeStyleTests(); }
                    return boxSizingReliableVal;
                },
                pixelMarginRight: function() {
                    if (boxSizingReliableVal == null) { computeStyleTests(); }
                    return pixelMarginRightVal;
                },
                reliableMarginLeft: function() {
                    if (boxSizingReliableVal == null) { computeStyleTests(); }
                    return reliableMarginLeftVal;
                },
                reliableMarginRight: function() {
                    var ret, marginDiv = div.appendChild(document.createElement("div"));
                    marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;" +
                        "display:block;margin:0;border:0;padding:0";
                    marginDiv.style.marginRight = marginDiv.style.width = "0";
                    div.style.width = "1px";
                    documentElement.appendChild(container);
                    ret = !parseFloat(window.getComputedStyle(marginDiv).marginRight);
                    documentElement.removeChild(container);
                    div.removeChild(marginDiv);
                    return ret;
                }
            });
        })();

        function curCSS(elem, name, computed) {
            var width, minWidth, maxWidth, ret, style = elem.style;
            computed = computed || getStyles(elem);
            ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;
            if ((ret === "" || ret === undefined) && !jQuery.contains(elem.ownerDocument, elem)) { ret = jQuery.style(elem, name); }
            if (computed) {
                if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {
                    width = style.width;
                    minWidth = style.minWidth;
                    maxWidth = style.maxWidth;
                    style.minWidth = style.maxWidth = style.width = ret;
                    ret = computed.width;
                    style.width = width;
                    style.minWidth = minWidth;
                    style.maxWidth = maxWidth;
                }
            }
            return ret !== undefined ? ret + "" : ret;
        }

        function addGetHookIf(conditionFn, hookFn) {
            return {
                get: function() {
                    if (conditionFn()) { delete this.get; return; }
                    return (this.get = hookFn).apply(this, arguments);
                }
            };
        }
        var
            rdisplayswap = /^(none|table(?!-c[ea]).+)/,
            cssShow = { position: "absolute", visibility: "hidden", display: "block" },
            cssNormalTransform = { letterSpacing: "0", fontWeight: "400" },
            cssPrefixes = ["Webkit", "O", "Moz", "ms"],
            emptyStyle = document.createElement("div").style;

        function vendorPropName(name) {
            if (name in emptyStyle) { return name; }
            var capName = name[0].toUpperCase() + name.slice(1),
                i = cssPrefixes.length;
            while (i--) { name = cssPrefixes[i] + capName; if (name in emptyStyle) { return name; } }
        }

        function setPositiveNumber(elem, value, subtract) { var matches = rcssNum.exec(value); return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value; }

        function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
            var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
                val = 0;
            for (; i < 4; i += 2) {
                if (extra === "margin") { val += jQuery.css(elem, extra + cssExpand[i], true, styles); }
                if (isBorderBox) {
                    if (extra === "content") { val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles); }
                    if (extra !== "margin") { val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); }
                } else { val += jQuery.css(elem, "padding" + cssExpand[i], true, styles); if (extra !== "padding") { val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); } }
            }
            return val;
        }

        function getWidthOrHeight(elem, name, extra) {
            var valueIsBorderBox = true,
                val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
                styles = getStyles(elem),
                isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            if (val <= 0 || val == null) {
                val = curCSS(elem, name, styles);
                if (val < 0 || val == null) { val = elem.style[name]; }
                if (rnumnonpx.test(val)) { return val; }
                valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);
                val = parseFloat(val) || 0;
            }
            return (val +
                augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles)) + "px";
        }

        function showHide(elements, show) {
            var display, elem, hidden, values = [],
                index = 0,
                length = elements.length;
            for (; index < length; index++) {
                elem = elements[index];
                if (!elem.style) { continue; }
                values[index] = dataPriv.get(elem, "olddisplay");
                display = elem.style.display;
                if (show) {
                    if (!values[index] && display === "none") { elem.style.display = ""; }
                    if (elem.style.display === "" && isHidden(elem)) { values[index] = dataPriv.access(elem, "olddisplay", defaultDisplay(elem.nodeName)); }
                } else { hidden = isHidden(elem); if (display !== "none" || !hidden) { dataPriv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display")); } }
            }
            for (index = 0; index < length; index++) {
                elem = elements[index];
                if (!elem.style) { continue; }
                if (!show || elem.style.display === "none" || elem.style.display === "") { elem.style.display = show ? values[index] || "" : "none"; }
            }
            return elements;
        }
        jQuery.extend({
            cssHooks: { opacity: { get: function(elem, computed) { if (computed) { var ret = curCSS(elem, "opacity"); return ret === "" ? "1" : ret; } } } },
            cssNumber: { "animationIterationCount": true, "columnCount": true, "fillOpacity": true, "flexGrow": true, "flexShrink": true, "fontWeight": true, "lineHeight": true, "opacity": true, "order": true, "orphans": true, "widows": true, "zIndex": true, "zoom": true },
            cssProps: { "float": "cssFloat" },
            style: function(elem, name, value, extra) {
                if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) { return; }
                var ret, type, hooks, origName = jQuery.camelCase(name),
                    style = elem.style;
                name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (value !== undefined) {
                    type = typeof value;
                    if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                        value = adjustCSS(elem, name, ret);
                        type = "number";
                    }
                    if (value == null || value !== value) { return; }
                    if (type === "number") { value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px"); }
                    if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) { style[name] = "inherit"; }
                    if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) { style[name] = value; }
                } else {
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) { return ret; }
                    return style[name];
                }
            },
            css: function(elem, name, extra, styles) {
                var val, num, hooks, origName = jQuery.camelCase(name);
                name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(origName) || origName);
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
                if (hooks && "get" in hooks) { val = hooks.get(elem, true, extra); }
                if (val === undefined) { val = curCSS(elem, name, styles); }
                if (val === "normal" && name in cssNormalTransform) { val = cssNormalTransform[name]; }
                if (extra === "" || extra) { num = parseFloat(val); return extra === true || isFinite(num) ? num || 0 : val; }
                return val;
            }
        });
        jQuery.each(["height", "width"], function(i, name) {
            jQuery.cssHooks[name] = {
                get: function(elem, computed, extra) { if (computed) { return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? swap(elem, cssShow, function() { return getWidthOrHeight(elem, name, extra); }) : getWidthOrHeight(elem, name, extra); } },
                set: function(elem, value, extra) {
                    var matches, styles = extra && getStyles(elem),
                        subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);
                    if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                        elem.style[name] = value;
                        value = jQuery.css(elem, name);
                    }
                    return setPositiveNumber(elem, value, subtract);
                }
            };
        });
        jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
            if (computed) {
                return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left -
                    swap(elem, { marginLeft: 0 }, function() { return elem.getBoundingClientRect().left; })) + "px";
            }
        });
        jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function(elem, computed) { if (computed) { return swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]); } });
        jQuery.each({ margin: "", padding: "", border: "Width" }, function(prefix, suffix) {
            jQuery.cssHooks[prefix + suffix] = {
                expand: function(value) {
                    var i = 0,
                        expanded = {},
                        parts = typeof value === "string" ? value.split(" ") : [value];
                    for (; i < 4; i++) { expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0]; }
                    return expanded;
                }
            };
            if (!rmargin.test(prefix)) { jQuery.cssHooks[prefix + suffix].set = setPositiveNumber; }
        });
        jQuery.fn.extend({
            css: function(name, value) {
                return access(this, function(elem, name, value) {
                    var styles, len, map = {},
                        i = 0;
                    if (jQuery.isArray(name)) {
                        styles = getStyles(elem);
                        len = name.length;
                        for (; i < len; i++) { map[name[i]] = jQuery.css(elem, name[i], false, styles); }
                        return map;
                    }
                    return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
                }, name, value, arguments.length > 1);
            },
            show: function() { return showHide(this, true); },
            hide: function() { return showHide(this); },
            toggle: function(state) {
                if (typeof state === "boolean") { return state ? this.show() : this.hide(); }
                return this.each(function() { if (isHidden(this)) { jQuery(this).show(); } else { jQuery(this).hide(); } });
            }
        });

        function Tween(elem, options, prop, end, easing) { return new Tween.prototype.init(elem, options, prop, end, easing); }
        jQuery.Tween = Tween;
        Tween.prototype = {
            constructor: Tween,
            init: function(elem, options, prop, end, easing, unit) {
                this.elem = elem;
                this.prop = prop;
                this.easing = easing || jQuery.easing._default;
                this.options = options;
                this.start = this.now = this.cur();
                this.end = end;
                this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
            },
            cur: function() { var hooks = Tween.propHooks[this.prop]; return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this); },
            run: function(percent) {
                var eased, hooks = Tween.propHooks[this.prop];
                if (this.options.duration) { this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration); } else { this.pos = eased = percent; }
                this.now = (this.end - this.start) * eased + this.start;
                if (this.options.step) { this.options.step.call(this.elem, this.now, this); }
                if (hooks && hooks.set) { hooks.set(this); } else { Tween.propHooks._default.set(this); }
                return this;
            }
        };
        Tween.prototype.init.prototype = Tween.prototype;
        Tween.propHooks = {
            _default: {
                get: function(tween) {
                    var result;
                    if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) { return tween.elem[tween.prop]; }
                    result = jQuery.css(tween.elem, tween.prop, "");
                    return !result || result === "auto" ? 0 : result;
                },
                set: function(tween) { if (jQuery.fx.step[tween.prop]) { jQuery.fx.step[tween.prop](tween); } else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) { jQuery.style(tween.elem, tween.prop, tween.now + tween.unit); } else { tween.elem[tween.prop] = tween.now; } }
            }
        };
        Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = { set: function(tween) { if (tween.elem.nodeType && tween.elem.parentNode) { tween.elem[tween.prop] = tween.now; } } };
        jQuery.easing = { linear: function(p) { return p; }, swing: function(p) { return 0.5 - Math.cos(p * Math.PI) / 2; }, _default: "swing" };
        jQuery.fx = Tween.prototype.init;
        jQuery.fx.step = {};
        var
            fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/,
            rrun = /queueHooks$/;

        function createFxNow() { window.setTimeout(function() { fxNow = undefined; }); return (fxNow = jQuery.now()); }

        function genFx(type, includeWidth) {
            var which, i = 0,
                attrs = { height: type };
            includeWidth = includeWidth ? 1 : 0;
            for (; i < 4; i += 2 - includeWidth) {
                which = cssExpand[i];
                attrs["margin" + which] = attrs["padding" + which] = type;
            }
            if (includeWidth) { attrs.opacity = attrs.width = type; }
            return attrs;
        }

        function createTween(value, prop, animation) {
            var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
                index = 0,
                length = collection.length;
            for (; index < length; index++) { if ((tween = collection[index].call(animation, prop, value))) { return tween; } }
        }

        function defaultPrefilter(elem, props, opts) {
            var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay, anim = this,
                orig = {},
                style = elem.style,
                hidden = elem.nodeType && isHidden(elem),
                dataShow = dataPriv.get(elem, "fxshow");
            if (!opts.queue) {
                hooks = jQuery._queueHooks(elem, "fx");
                if (hooks.unqueued == null) {
                    hooks.unqueued = 0;
                    oldfire = hooks.empty.fire;
                    hooks.empty.fire = function() { if (!hooks.unqueued) { oldfire(); } };
                }
                hooks.unqueued++;
                anim.always(function() { anim.always(function() { hooks.unqueued--; if (!jQuery.queue(elem, "fx").length) { hooks.empty.fire(); } }); });
            }
            if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
                opts.overflow = [style.overflow, style.overflowX, style.overflowY];
                display = jQuery.css(elem, "display");
                checkDisplay = display === "none" ? dataPriv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;
                if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") { style.display = "inline-block"; }
            }
            if (opts.overflow) {
                style.overflow = "hidden";
                anim.always(function() {
                    style.overflow = opts.overflow[0];
                    style.overflowX = opts.overflow[1];
                    style.overflowY = opts.overflow[2];
                });
            }
            for (prop in props) {
                value = props[prop];
                if (rfxtypes.exec(value)) {
                    delete props[prop];
                    toggle = toggle || value === "toggle";
                    if (value === (hidden ? "hide" : "show")) { if (value === "show" && dataShow && dataShow[prop] !== undefined) { hidden = true; } else { continue; } }
                    orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
                } else { display = undefined; }
            }
            if (!jQuery.isEmptyObject(orig)) {
                if (dataShow) { if ("hidden" in dataShow) { hidden = dataShow.hidden; } } else { dataShow = dataPriv.access(elem, "fxshow", {}); }
                if (toggle) { dataShow.hidden = !hidden; }
                if (hidden) { jQuery(elem).show(); } else { anim.done(function() { jQuery(elem).hide(); }); }
                anim.done(function() {
                    var prop;
                    dataPriv.remove(elem, "fxshow");
                    for (prop in orig) { jQuery.style(elem, prop, orig[prop]); }
                });
                for (prop in orig) {
                    tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
                    if (!(prop in dataShow)) {
                        dataShow[prop] = tween.start;
                        if (hidden) {
                            tween.end = tween.start;
                            tween.start = prop === "width" || prop === "height" ? 1 : 0;
                        }
                    }
                }
            } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") { style.display = display; }
        }

        function propFilter(props, specialEasing) {
            var index, name, easing, value, hooks;
            for (index in props) {
                name = jQuery.camelCase(index);
                easing = specialEasing[name];
                value = props[index];
                if (jQuery.isArray(value)) {
                    easing = value[1];
                    value = props[index] = value[0];
                }
                if (index !== name) {
                    props[name] = value;
                    delete props[index];
                }
                hooks = jQuery.cssHooks[name];
                if (hooks && "expand" in hooks) {
                    value = hooks.expand(value);
                    delete props[name];
                    for (index in value) {
                        if (!(index in props)) {
                            props[index] = value[index];
                            specialEasing[index] = easing;
                        }
                    }
                } else { specialEasing[name] = easing; }
            }
        }

        function Animation(elem, properties, options) {
            var result, stopped, index = 0,
                length = Animation.prefilters.length,
                deferred = jQuery.Deferred().always(function() { delete tick.elem; }),
                tick = function() {
                    if (stopped) { return false; }
                    var currentTime = fxNow || createFxNow(),
                        remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
                        temp = remaining / animation.duration || 0,
                        percent = 1 - temp,
                        index = 0,
                        length = animation.tweens.length;
                    for (; index < length; index++) { animation.tweens[index].run(percent); }
                    deferred.notifyWith(elem, [animation, percent, remaining]);
                    if (percent < 1 && length) { return remaining; } else { deferred.resolveWith(elem, [animation]); return false; }
                },
                animation = deferred.promise({
                    elem: elem,
                    props: jQuery.extend({}, properties),
                    opts: jQuery.extend(true, { specialEasing: {}, easing: jQuery.easing._default }, options),
                    originalProperties: properties,
                    originalOptions: options,
                    startTime: fxNow || createFxNow(),
                    duration: options.duration,
                    tweens: [],
                    createTween: function(prop, end) {
                        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                        animation.tweens.push(tween);
                        return tween;
                    },
                    stop: function(gotoEnd) {
                        var index = 0,
                            length = gotoEnd ? animation.tweens.length : 0;
                        if (stopped) { return this; }
                        stopped = true;
                        for (; index < length; index++) { animation.tweens[index].run(1); }
                        if (gotoEnd) {
                            deferred.notifyWith(elem, [animation, 1, 0]);
                            deferred.resolveWith(elem, [animation, gotoEnd]);
                        } else { deferred.rejectWith(elem, [animation, gotoEnd]); }
                        return this;
                    }
                }),
                props = animation.props;
            propFilter(props, animation.opts.specialEasing);
            for (; index < length; index++) {
                result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
                if (result) {
                    if (jQuery.isFunction(result.stop)) { jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result); }
                    return result;
                }
            }
            jQuery.map(props, createTween, animation);
            if (jQuery.isFunction(animation.opts.start)) { animation.opts.start.call(elem, animation); }
            jQuery.fx.timer(jQuery.extend(tick, { elem: elem, anim: animation, queue: animation.opts.queue }));
            return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        }
        jQuery.Animation = jQuery.extend(Animation, {
            tweeners: {
                "*": [function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                }]
            },
            tweener: function(props, callback) {
                if (jQuery.isFunction(props)) {
                    callback = props;
                    props = ["*"];
                } else { props = props.match(rnotwhite); }
                var prop, index = 0,
                    length = props.length;
                for (; index < length; index++) {
                    prop = props[index];
                    Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                    Animation.tweeners[prop].unshift(callback);
                }
            },
            prefilters: [defaultPrefilter],
            prefilter: function(callback, prepend) { if (prepend) { Animation.prefilters.unshift(callback); } else { Animation.prefilters.push(callback); } }
        });
        jQuery.speed = function(speed, easing, fn) {
            var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : { complete: fn || !fn && easing || jQuery.isFunction(speed) && speed, duration: speed, easing: fn && easing || easing && !jQuery.isFunction(easing) && easing };
            opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
            if (opt.queue == null || opt.queue === true) { opt.queue = "fx"; }
            opt.old = opt.complete;
            opt.complete = function() {
                if (jQuery.isFunction(opt.old)) { opt.old.call(this); }
                if (opt.queue) { jQuery.dequeue(this, opt.queue); }
            };
            return opt;
        };
        jQuery.fn.extend({
            fadeTo: function(speed, to, easing, callback) {
                return this.filter(isHidden).css("opacity", 0).show()
                    .end().animate({ opacity: to }, speed, easing, callback);
            },
            animate: function(prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop),
                    optall = jQuery.speed(speed, easing, callback),
                    doAnimation = function() { var anim = Animation(this, jQuery.extend({}, prop), optall); if (empty || dataPriv.get(this, "finish")) { anim.stop(true); } };
                doAnimation.finish = doAnimation;
                return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
            },
            stop: function(type, clearQueue, gotoEnd) {
                var stopQueue = function(hooks) {
                    var stop = hooks.stop;
                    delete hooks.stop;
                    stop(gotoEnd);
                };
                if (typeof type !== "string") {
                    gotoEnd = clearQueue;
                    clearQueue = type;
                    type = undefined;
                }
                if (clearQueue && type !== false) { this.queue(type || "fx", []); }
                return this.each(function() {
                    var dequeue = true,
                        index = type != null && type + "queueHooks",
                        timers = jQuery.timers,
                        data = dataPriv.get(this);
                    if (index) { if (data[index] && data[index].stop) { stopQueue(data[index]); } } else { for (index in data) { if (data[index] && data[index].stop && rrun.test(index)) { stopQueue(data[index]); } } }
                    for (index = timers.length; index--;) {
                        if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                            timers[index].anim.stop(gotoEnd);
                            dequeue = false;
                            timers.splice(index, 1);
                        }
                    }
                    if (dequeue || !gotoEnd) { jQuery.dequeue(this, type); }
                });
            },
            finish: function(type) {
                if (type !== false) { type = type || "fx"; }
                return this.each(function() {
                    var index, data = dataPriv.get(this),
                        queue = data[type + "queue"],
                        hooks = data[type + "queueHooks"],
                        timers = jQuery.timers,
                        length = queue ? queue.length : 0;
                    data.finish = true;
                    jQuery.queue(this, type, []);
                    if (hooks && hooks.stop) { hooks.stop.call(this, true); }
                    for (index = timers.length; index--;) {
                        if (timers[index].elem === this && timers[index].queue === type) {
                            timers[index].anim.stop(true);
                            timers.splice(index, 1);
                        }
                    }
                    for (index = 0; index < length; index++) { if (queue[index] && queue[index].finish) { queue[index].finish.call(this); } }
                    delete data.finish;
                });
            }
        });
        jQuery.each(["toggle", "show", "hide"], function(i, name) {
            var cssFn = jQuery.fn[name];
            jQuery.fn[name] = function(speed, easing, callback) { return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback); };
        });
        jQuery.each({ slideDown: genFx("show"), slideUp: genFx("hide"), slideToggle: genFx("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(name, props) { jQuery.fn[name] = function(speed, easing, callback) { return this.animate(props, speed, easing, callback); }; });
        jQuery.timers = [];
        jQuery.fx.tick = function() {
            var timer, i = 0,
                timers = jQuery.timers;
            fxNow = jQuery.now();
            for (; i < timers.length; i++) { timer = timers[i]; if (!timer() && timers[i] === timer) { timers.splice(i--, 1); } }
            if (!timers.length) { jQuery.fx.stop(); }
            fxNow = undefined;
        };
        jQuery.fx.timer = function(timer) { jQuery.timers.push(timer); if (timer()) { jQuery.fx.start(); } else { jQuery.timers.pop(); } };
        jQuery.fx.interval = 13;
        jQuery.fx.start = function() { if (!timerId) { timerId = window.setInterval(jQuery.fx.tick, jQuery.fx.interval); } };
        jQuery.fx.stop = function() {
            window.clearInterval(timerId);
            timerId = null;
        };
        jQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 };
        jQuery.fn.delay = function(time, type) {
            time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
            type = type || "fx";
            return this.queue(type, function(next, hooks) {
                var timeout = window.setTimeout(next, time);
                hooks.stop = function() { window.clearTimeout(timeout); };
            });
        };
        (function() {
            var input = document.createElement("input"),
                select = document.createElement("select"),
                opt = select.appendChild(document.createElement("option"));
            input.type = "checkbox";
            support.checkOn = input.value !== "";
            support.optSelected = opt.selected;
            select.disabled = true;
            support.optDisabled = !opt.disabled;
            input = document.createElement("input");
            input.value = "t";
            input.type = "radio";
            support.radioValue = input.value === "t";
        })();
        var boolHook, attrHandle = jQuery.expr.attrHandle;
        jQuery.fn.extend({ attr: function(name, value) { return access(this, jQuery.attr, name, value, arguments.length > 1); }, removeAttr: function(name) { return this.each(function() { jQuery.removeAttr(this, name); }); } });
        jQuery.extend({
            attr: function(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (nType === 3 || nType === 8 || nType === 2) { return; }
                if (typeof elem.getAttribute === "undefined") { return jQuery.prop(elem, name, value); }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    name = name.toLowerCase();
                    hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
                }
                if (value !== undefined) {
                    if (value === null) { jQuery.removeAttr(elem, name); return; }
                    if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) { return ret; }
                    elem.setAttribute(name, value + "");
                    return value;
                }
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) { return ret; }
                ret = jQuery.find.attr(elem, name);
                return ret == null ? undefined : ret;
            },
            attrHooks: {
                type: {
                    set: function(elem, value) {
                        if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
                            var val = elem.value;
                            elem.setAttribute("type", value);
                            if (val) { elem.value = val; }
                            return value;
                        }
                    }
                }
            },
            removeAttr: function(elem, value) {
                var name, propName, i = 0,
                    attrNames = value && value.match(rnotwhite);
                if (attrNames && elem.nodeType === 1) {
                    while ((name = attrNames[i++])) {
                        propName = jQuery.propFix[name] || name;
                        if (jQuery.expr.match.bool.test(name)) { elem[propName] = false; }
                        elem.removeAttribute(name);
                    }
                }
            }
        });
        boolHook = {
            set: function(elem, value, name) {
                if (value === false) { jQuery.removeAttr(elem, name); } else { elem.setAttribute(name, name); }
                return name;
            }
        };
        jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(i, name) {
            var getter = attrHandle[name] || jQuery.find.attr;
            attrHandle[name] = function(elem, name, isXML) {
                var ret, handle;
                if (!isXML) {
                    handle = attrHandle[name];
                    attrHandle[name] = ret;
                    ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
                    attrHandle[name] = handle;
                }
                return ret;
            };
        });
        var rfocusable = /^(?:input|select|textarea|button)$/i,
            rclickable = /^(?:a|area)$/i;
        jQuery.fn.extend({ prop: function(name, value) { return access(this, jQuery.prop, name, value, arguments.length > 1); }, removeProp: function(name) { return this.each(function() { delete this[jQuery.propFix[name] || name]; }); } });
        jQuery.extend({
            prop: function(elem, name, value) {
                var ret, hooks, nType = elem.nodeType;
                if (nType === 3 || nType === 8 || nType === 2) { return; }
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                    name = jQuery.propFix[name] || name;
                    hooks = jQuery.propHooks[name];
                }
                if (value !== undefined) {
                    if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) { return ret; }
                    return (elem[name] = value);
                }
                if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) { return ret; }
                return elem[name];
            },
            propHooks: { tabIndex: { get: function(elem) { var tabindex = jQuery.find.attr(elem, "tabindex"); return tabindex ? parseInt(tabindex, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : -1; } } },
            propFix: { "for": "htmlFor", "class": "className" }
        });
        if (!support.optSelected) {
            jQuery.propHooks.selected = {
                get: function(elem) {
                    var parent = elem.parentNode;
                    if (parent && parent.parentNode) { parent.parentNode.selectedIndex; }
                    return null;
                },
                set: function(elem) { var parent = elem.parentNode; if (parent) { parent.selectedIndex; if (parent.parentNode) { parent.parentNode.selectedIndex; } } }
            };
        }
        jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { jQuery.propFix[this.toLowerCase()] = this; });
        var rclass = /[\t\r\n\f]/g;

        function getClass(elem) { return elem.getAttribute && elem.getAttribute("class") || ""; }
        jQuery.fn.extend({
            addClass: function(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (jQuery.isFunction(value)) { return this.each(function(j) { jQuery(this).addClass(value.call(this, j, getClass(this))); }); }
                if (typeof value === "string" && value) {
                    classes = value.match(rnotwhite) || [];
                    while ((elem = this[i++])) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                        if (cur) {
                            j = 0;
                            while ((clazz = classes[j++])) { if (cur.indexOf(" " + clazz + " ") < 0) { cur += clazz + " "; } }
                            finalValue = jQuery.trim(cur);
                            if (curValue !== finalValue) { elem.setAttribute("class", finalValue); }
                        }
                    }
                }
                return this;
            },
            removeClass: function(value) {
                var classes, elem, cur, curValue, clazz, j, finalValue, i = 0;
                if (jQuery.isFunction(value)) { return this.each(function(j) { jQuery(this).removeClass(value.call(this, j, getClass(this))); }); }
                if (!arguments.length) { return this.attr("class", ""); }
                if (typeof value === "string" && value) {
                    classes = value.match(rnotwhite) || [];
                    while ((elem = this[i++])) {
                        curValue = getClass(elem);
                        cur = elem.nodeType === 1 && (" " + curValue + " ").replace(rclass, " ");
                        if (cur) {
                            j = 0;
                            while ((clazz = classes[j++])) { while (cur.indexOf(" " + clazz + " ") > -1) { cur = cur.replace(" " + clazz + " ", " "); } }
                            finalValue = jQuery.trim(cur);
                            if (curValue !== finalValue) { elem.setAttribute("class", finalValue); }
                        }
                    }
                }
                return this;
            },
            toggleClass: function(value, stateVal) {
                var type = typeof value;
                if (typeof stateVal === "boolean" && type === "string") { return stateVal ? this.addClass(value) : this.removeClass(value); }
                if (jQuery.isFunction(value)) { return this.each(function(i) { jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal); }); }
                return this.each(function() {
                    var className, i, self, classNames;
                    if (type === "string") {
                        i = 0;
                        self = jQuery(this);
                        classNames = value.match(rnotwhite) || [];
                        while ((className = classNames[i++])) { if (self.hasClass(className)) { self.removeClass(className); } else { self.addClass(className); } }
                    } else if (value === undefined || type === "boolean") {
                        className = getClass(this);
                        if (className) { dataPriv.set(this, "__className__", className); }
                        if (this.setAttribute) { this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || ""); }
                    }
                });
            },
            hasClass: function(selector) {
                var className, elem, i = 0;
                className = " " + selector + " ";
                while ((elem = this[i++])) { if (elem.nodeType === 1 && (" " + getClass(elem) + " ").replace(rclass, " ").indexOf(className) > -1) { return true; } }
                return false;
            }
        });
        var rreturn = /\r/g,
            rspaces = /[\x20\t\r\n\f]+/g;
        jQuery.fn.extend({
            val: function(value) {
                var hooks, ret, isFunction, elem = this[0];
                if (!arguments.length) {
                    if (elem) {
                        hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                        if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) { return ret; }
                        ret = elem.value;
                        return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
                    }
                    return;
                }
                isFunction = jQuery.isFunction(value);
                return this.each(function(i) {
                    var val;
                    if (this.nodeType !== 1) { return; }
                    if (isFunction) { val = value.call(this, i, jQuery(this).val()); } else { val = value; }
                    if (val == null) { val = ""; } else if (typeof val === "number") { val += ""; } else if (jQuery.isArray(val)) { val = jQuery.map(val, function(value) { return value == null ? "" : value + ""; }); }
                    hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                    if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) { this.value = val; }
                });
            }
        });
        jQuery.extend({
            valHooks: {
                option: { get: function(elem) { var val = jQuery.find.attr(elem, "value"); return val != null ? val : jQuery.trim(jQuery.text(elem)).replace(rspaces, " "); } },
                select: {
                    get: function(elem) {
                        var value, option, options = elem.options,
                            index = elem.selectedIndex,
                            one = elem.type === "select-one" || index < 0,
                            values = one ? null : [],
                            max = one ? index + 1 : options.length,
                            i = index < 0 ? max : one ? index : 0;
                        for (; i < max; i++) {
                            option = options[i];
                            if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
                                value = jQuery(option).val();
                                if (one) { return value; }
                                values.push(value);
                            }
                        }
                        return values;
                    },
                    set: function(elem, value) {
                        var optionSet, option, options = elem.options,
                            values = jQuery.makeArray(value),
                            i = options.length;
                        while (i--) { option = options[i]; if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) { optionSet = true; } }
                        if (!optionSet) { elem.selectedIndex = -1; }
                        return values;
                    }
                }
            }
        });
        jQuery.each(["radio", "checkbox"], function() { jQuery.valHooks[this] = { set: function(elem, value) { if (jQuery.isArray(value)) { return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1); } } }; if (!support.checkOn) { jQuery.valHooks[this].get = function(elem) { return elem.getAttribute("value") === null ? "on" : elem.value; }; } });
        var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
        jQuery.extend(jQuery.event, {
            trigger: function(event, data, elem, onlyHandlers) {
                var i, cur, tmp, bubbleType, ontype, handle, special, eventPath = [elem || document],
                    type = hasOwn.call(event, "type") ? event.type : event,
                    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
                cur = tmp = elem = elem || document;
                if (elem.nodeType === 3 || elem.nodeType === 8) { return; }
                if (rfocusMorph.test(type + jQuery.event.triggered)) { return; }
                if (type.indexOf(".") > -1) {
                    namespaces = type.split(".");
                    type = namespaces.shift();
                    namespaces.sort();
                }
                ontype = type.indexOf(":") < 0 && "on" + type;
                event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
                event.isTrigger = onlyHandlers ? 2 : 3;
                event.namespace = namespaces.join(".");
                event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                event.result = undefined;
                if (!event.target) { event.target = elem; }
                data = data == null ? [event] : jQuery.makeArray(data, [event]);
                special = jQuery.event.special[type] || {};
                if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) { return; }
                if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
                    bubbleType = special.delegateType || type;
                    if (!rfocusMorph.test(bubbleType + type)) { cur = cur.parentNode; }
                    for (; cur; cur = cur.parentNode) {
                        eventPath.push(cur);
                        tmp = cur;
                    }
                    if (tmp === (elem.ownerDocument || document)) { eventPath.push(tmp.defaultView || tmp.parentWindow || window); }
                }
                i = 0;
                while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                    event.type = i > 1 ? bubbleType : special.bindType || type;
                    handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
                    if (handle) { handle.apply(cur, data); }
                    handle = ontype && cur[ontype];
                    if (handle && handle.apply && acceptData(cur)) { event.result = handle.apply(cur, data); if (event.result === false) { event.preventDefault(); } }
                }
                event.type = type;
                if (!onlyHandlers && !event.isDefaultPrevented()) {
                    if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
                        if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
                            tmp = elem[ontype];
                            if (tmp) { elem[ontype] = null; }
                            jQuery.event.triggered = type;
                            elem[type]();
                            jQuery.event.triggered = undefined;
                            if (tmp) { elem[ontype] = tmp; }
                        }
                    }
                }
                return event.result;
            },
            simulate: function(type, elem, event) {
                var e = jQuery.extend(new jQuery.Event(), event, { type: type, isSimulated: true });
                jQuery.event.trigger(e, null, elem);
            }
        });
        jQuery.fn.extend({ trigger: function(type, data) { return this.each(function() { jQuery.event.trigger(type, data, this); }); }, triggerHandler: function(type, data) { var elem = this[0]; if (elem) { return jQuery.event.trigger(type, data, elem, true); } } });
        jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " +
            "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
            "change select submit keydown keypress keyup error contextmenu").split(" "), function(i, name) { jQuery.fn[name] = function(data, fn) { return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name); }; });
        jQuery.fn.extend({ hover: function(fnOver, fnOut) { return this.mouseenter(fnOver).mouseleave(fnOut || fnOver); } });
        support.focusin = "onfocusin" in window;
        if (!support.focusin) {
            jQuery.each({ focus: "focusin", blur: "focusout" }, function(orig, fix) {
                var handler = function(event) { jQuery.event.simulate(fix, event.target, jQuery.event.fix(event)); };
                jQuery.event.special[fix] = {
                    setup: function() {
                        var doc = this.ownerDocument || this,
                            attaches = dataPriv.access(doc, fix);
                        if (!attaches) { doc.addEventListener(orig, handler, true); }
                        dataPriv.access(doc, fix, (attaches || 0) + 1);
                    },
                    teardown: function() {
                        var doc = this.ownerDocument || this,
                            attaches = dataPriv.access(doc, fix) - 1;
                        if (!attaches) {
                            doc.removeEventListener(orig, handler, true);
                            dataPriv.remove(doc, fix);
                        } else { dataPriv.access(doc, fix, attaches); }
                    }
                };
            });
        }
        var location = window.location;
        var nonce = jQuery.now();
        var rquery = (/\?/);
        jQuery.parseJSON = function(data) { return JSON.parse(data + ""); };
        jQuery.parseXML = function(data) {
            var xml;
            if (!data || typeof data !== "string") { return null; }
            try { xml = (new window.DOMParser()).parseFromString(data, "text/xml"); } catch (e) { xml = undefined; }
            if (!xml || xml.getElementsByTagName("parsererror").length) { jQuery.error("Invalid XML: " + data); }
            return xml;
        };
        var
            rhash = /#.*$/,
            rts = /([?&])_=[^&]*/,
            rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            rnoContent = /^(?:GET|HEAD)$/,
            rprotocol = /^\/\//,
            prefilters = {},
            transports = {},
            allTypes = "*/".concat("*"),
            originAnchor = document.createElement("a");
        originAnchor.href = location.href;

        function addToPrefiltersOrTransports(structure) {
            return function(dataTypeExpression, func) {
                if (typeof dataTypeExpression !== "string") {
                    func = dataTypeExpression;
                    dataTypeExpression = "*";
                }
                var dataType, i = 0,
                    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
                if (jQuery.isFunction(func)) {
                    while ((dataType = dataTypes[i++])) {
                        if (dataType[0] === "+") {
                            dataType = dataType.slice(1) || "*";
                            (structure[dataType] = structure[dataType] || []).unshift(func);
                        } else {
                            (structure[dataType] = structure[dataType] || []).push(func);
                        }
                    }
                }
            };
        }

        function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
            var inspected = {},
                seekingTransport = (structure === transports);

            function inspect(dataType) {
                var selected;
                inspected[dataType] = true;
                jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                    if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                        options.dataTypes.unshift(dataTypeOrTransport);
                        inspect(dataTypeOrTransport);
                        return false;
                    } else if (seekingTransport) { return !(selected = dataTypeOrTransport); }
                });
                return selected;
            }
            return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
        }

        function ajaxExtend(target, src) {
            var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
            for (key in src) {
                if (src[key] !== undefined) {
                    (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
                }
            }
            if (deep) { jQuery.extend(true, target, deep); }
            return target;
        }

        function ajaxHandleResponses(s, jqXHR, responses) {
            var ct, type, finalDataType, firstDataType, contents = s.contents,
                dataTypes = s.dataTypes;
            while (dataTypes[0] === "*") { dataTypes.shift(); if (ct === undefined) { ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"); } }
            if (ct) { for (type in contents) { if (contents[type] && contents[type].test(ct)) { dataTypes.unshift(type); break; } } }
            if (dataTypes[0] in responses) { finalDataType = dataTypes[0]; } else {
                for (type in responses) {
                    if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) { finalDataType = type; break; }
                    if (!firstDataType) { firstDataType = type; }
                }
                finalDataType = finalDataType || firstDataType;
            }
            if (finalDataType) {
                if (finalDataType !== dataTypes[0]) { dataTypes.unshift(finalDataType); }
                return responses[finalDataType];
            }
        }

        function ajaxConvert(s, response, jqXHR, isSuccess) {
            var conv2, current, conv, tmp, prev, converters = {},
                dataTypes = s.dataTypes.slice();
            if (dataTypes[1]) { for (conv in s.converters) { converters[conv.toLowerCase()] = s.converters[conv]; } }
            current = dataTypes.shift();
            while (current) {
                if (s.responseFields[current]) { jqXHR[s.responseFields[current]] = response; }
                if (!prev && isSuccess && s.dataFilter) { response = s.dataFilter(response, s.dataType); }
                prev = current;
                current = dataTypes.shift();
                if (current) {
                    if (current === "*") { current = prev; } else if (prev !== "*" && prev !== current) {
                        conv = converters[prev + " " + current] || converters["* " + current];
                        if (!conv) {
                            for (conv2 in converters) {
                                tmp = conv2.split(" ");
                                if (tmp[1] === current) {
                                    conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                                    if (conv) {
                                        if (conv === true) { conv = converters[conv2]; } else if (converters[conv2] !== true) {
                                            current = tmp[0];
                                            dataTypes.unshift(tmp[1]);
                                        }
                                        break;
                                    }
                                }
                            }
                        }
                        if (conv !== true) { if (conv && s.throws) { response = conv(response); } else { try { response = conv(response); } catch (e) { return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current }; } } }
                    }
                }
            }
            return { state: "success", data: response };
        }
        jQuery.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: location.href, type: "GET", isLocal: rlocalProtocol.test(location.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": allTypes, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": jQuery.parseJSON, "text xml": jQuery.parseXML }, flatOptions: { url: true, context: true } },
            ajaxSetup: function(target, settings) { return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target); },
            ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
            ajaxTransport: addToPrefiltersOrTransports(transports),
            ajax: function(url, options) {
                if (typeof url === "object") {
                    options = url;
                    url = undefined;
                }
                options = options || {};
                var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, fireGlobals, i, s = jQuery.ajaxSetup({}, options),
                    callbackContext = s.context || s,
                    globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
                    deferred = jQuery.Deferred(),
                    completeDeferred = jQuery.Callbacks("once memory"),
                    statusCode = s.statusCode || {},
                    requestHeaders = {},
                    requestHeadersNames = {},
                    state = 0,
                    strAbort = "canceled",
                    jqXHR = {
                        readyState: 0,
                        getResponseHeader: function(key) {
                            var match;
                            if (state === 2) {
                                if (!responseHeaders) { responseHeaders = {}; while ((match = rheaders.exec(responseHeadersString))) { responseHeaders[match[1].toLowerCase()] = match[2]; } }
                                match = responseHeaders[key.toLowerCase()];
                            }
                            return match == null ? null : match;
                        },
                        getAllResponseHeaders: function() { return state === 2 ? responseHeadersString : null; },
                        setRequestHeader: function(name, value) {
                            var lname = name.toLowerCase();
                            if (!state) {
                                name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                                requestHeaders[name] = value;
                            }
                            return this;
                        },
                        overrideMimeType: function(type) {
                            if (!state) { s.mimeType = type; }
                            return this;
                        },
                        statusCode: function(map) {
                            var code;
                            if (map) { if (state < 2) { for (code in map) { statusCode[code] = [statusCode[code], map[code]]; } } else { jqXHR.always(map[jqXHR.status]); } }
                            return this;
                        },
                        abort: function(statusText) {
                            var finalText = statusText || strAbort;
                            if (transport) { transport.abort(finalText); }
                            done(0, finalText);
                            return this;
                        }
                    };
                deferred.promise(jqXHR).complete = completeDeferred.add;
                jqXHR.success = jqXHR.done;
                jqXHR.error = jqXHR.fail;
                s.url = ((url || s.url || location.href) + "").replace(rhash, "").replace(rprotocol, location.protocol + "//");
                s.type = options.method || options.type || s.method || s.type;
                s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];
                if (s.crossDomain == null) {
                    urlAnchor = document.createElement("a");
                    try {
                        urlAnchor.href = s.url;
                        urlAnchor.href = urlAnchor.href;
                        s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                    } catch (e) { s.crossDomain = true; }
                }
                if (s.data && s.processData && typeof s.data !== "string") { s.data = jQuery.param(s.data, s.traditional); }
                inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
                if (state === 2) { return jqXHR; }
                fireGlobals = jQuery.event && s.global;
                if (fireGlobals && jQuery.active++ === 0) { jQuery.event.trigger("ajaxStart"); }
                s.type = s.type.toUpperCase();
                s.hasContent = !rnoContent.test(s.type);
                cacheURL = s.url;
                if (!s.hasContent) {
                    if (s.data) {
                        cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);
                        delete s.data;
                    }
                    if (s.cache === false) { s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++; }
                }
                if (s.ifModified) {
                    if (jQuery.lastModified[cacheURL]) { jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]); }
                    if (jQuery.etag[cacheURL]) { jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]); }
                }
                if (s.data && s.hasContent && s.contentType !== false || options.contentType) { jqXHR.setRequestHeader("Content-Type", s.contentType); }
                jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] +
                    (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
                for (i in s.headers) { jqXHR.setRequestHeader(i, s.headers[i]); }
                if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) { return jqXHR.abort(); }
                strAbort = "abort";
                for (i in { success: 1, error: 1, complete: 1 }) { jqXHR[i](s[i]); }
                transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
                if (!transport) { done(-1, "No Transport"); } else {
                    jqXHR.readyState = 1;
                    if (fireGlobals) { globalEventContext.trigger("ajaxSend", [jqXHR, s]); }
                    if (state === 2) { return jqXHR; }
                    if (s.async && s.timeout > 0) { timeoutTimer = window.setTimeout(function() { jqXHR.abort("timeout"); }, s.timeout); }
                    try {
                        state = 1;
                        transport.send(requestHeaders, done);
                    } catch (e) { if (state < 2) { done(-1, e); } else { throw e; } }
                }

                function done(status, nativeStatusText, responses, headers) {
                    var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                    if (state === 2) { return; }
                    state = 2;
                    if (timeoutTimer) { window.clearTimeout(timeoutTimer); }
                    transport = undefined;
                    responseHeadersString = headers || "";
                    jqXHR.readyState = status > 0 ? 4 : 0;
                    isSuccess = status >= 200 && status < 300 || status === 304;
                    if (responses) { response = ajaxHandleResponses(s, jqXHR, responses); }
                    response = ajaxConvert(s, response, jqXHR, isSuccess);
                    if (isSuccess) {
                        if (s.ifModified) {
                            modified = jqXHR.getResponseHeader("Last-Modified");
                            if (modified) { jQuery.lastModified[cacheURL] = modified; }
                            modified = jqXHR.getResponseHeader("etag");
                            if (modified) { jQuery.etag[cacheURL] = modified; }
                        }
                        if (status === 204 || s.type === "HEAD") { statusText = "nocontent"; } else if (status === 304) { statusText = "notmodified"; } else {
                            statusText = response.state;
                            success = response.data;
                            error = response.error;
                            isSuccess = !error;
                        }
                    } else { error = statusText; if (status || !statusText) { statusText = "error"; if (status < 0) { status = 0; } } }
                    jqXHR.status = status;
                    jqXHR.statusText = (nativeStatusText || statusText) + "";
                    if (isSuccess) { deferred.resolveWith(callbackContext, [success, statusText, jqXHR]); } else { deferred.rejectWith(callbackContext, [jqXHR, statusText, error]); }
                    jqXHR.statusCode(statusCode);
                    statusCode = undefined;
                    if (fireGlobals) { globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]); }
                    completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
                    if (fireGlobals) { globalEventContext.trigger("ajaxComplete", [jqXHR, s]); if (!(--jQuery.active)) { jQuery.event.trigger("ajaxStop"); } }
                }
                return jqXHR;
            },
            getJSON: function(url, data, callback) { return jQuery.get(url, data, callback, "json"); },
            getScript: function(url, callback) { return jQuery.get(url, undefined, callback, "script"); }
        });
        jQuery.each(["get", "post"], function(i, method) {
            jQuery[method] = function(url, data, callback, type) {
                if (jQuery.isFunction(data)) {
                    type = type || callback;
                    callback = data;
                    data = undefined;
                }
                return jQuery.ajax(jQuery.extend({ url: url, type: method, dataType: type, data: data, success: callback }, jQuery.isPlainObject(url) && url));
            };
        });
        jQuery._evalUrl = function(url) { return jQuery.ajax({ url: url, type: "GET", dataType: "script", async: false, global: false, "throws": true }); };
        jQuery.fn.extend({
            wrapAll: function(html) {
                var wrap;
                if (jQuery.isFunction(html)) { return this.each(function(i) { jQuery(this).wrapAll(html.call(this, i)); }); }
                if (this[0]) {
                    wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                    if (this[0].parentNode) { wrap.insertBefore(this[0]); }
                    wrap.map(function() {
                        var elem = this;
                        while (elem.firstElementChild) { elem = elem.firstElementChild; }
                        return elem;
                    }).append(this);
                }
                return this;
            },
            wrapInner: function(html) {
                if (jQuery.isFunction(html)) { return this.each(function(i) { jQuery(this).wrapInner(html.call(this, i)); }); }
                return this.each(function() {
                    var self = jQuery(this),
                        contents = self.contents();
                    if (contents.length) { contents.wrapAll(html); } else { self.append(html); }
                });
            },
            wrap: function(html) { var isFunction = jQuery.isFunction(html); return this.each(function(i) { jQuery(this).wrapAll(isFunction ? html.call(this, i) : html); }); },
            unwrap: function() { return this.parent().each(function() { if (!jQuery.nodeName(this, "body")) { jQuery(this).replaceWith(this.childNodes); } }).end(); }
        });
        jQuery.expr.filters.hidden = function(elem) { return !jQuery.expr.filters.visible(elem); };
        jQuery.expr.filters.visible = function(elem) { return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0; };
        var r20 = /%20/g,
            rbracket = /\[\]$/,
            rCRLF = /\r?\n/g,
            rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
            rsubmittable = /^(?:input|select|textarea|keygen)/i;

        function buildParams(prefix, obj, traditional, add) { var name; if (jQuery.isArray(obj)) { jQuery.each(obj, function(i, v) { if (traditional || rbracket.test(prefix)) { add(prefix, v); } else { buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add); } }); } else if (!traditional && jQuery.type(obj) === "object") { for (name in obj) { buildParams(prefix + "[" + name + "]", obj[name], traditional, add); } } else { add(prefix, obj); } }
        jQuery.param = function(a, traditional) {
            var prefix, s = [],
                add = function(key, value) {
                    value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
                    s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
                };
            if (traditional === undefined) { traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional; }
            if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) { jQuery.each(a, function() { add(this.name, this.value); }); } else { for (prefix in a) { buildParams(prefix, a[prefix], traditional, add); } }
            return s.join("&").replace(r20, "+");
        };
        jQuery.fn.extend({ serialize: function() { return jQuery.param(this.serializeArray()); }, serializeArray: function() { return this.map(function() { var elements = jQuery.prop(this, "elements"); return elements ? jQuery.makeArray(elements) : this; }).filter(function() { var type = this.type; return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type)); }).map(function(i, elem) { var val = jQuery(this).val(); return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function(val) { return { name: elem.name, value: val.replace(rCRLF, "\r\n") }; }) : { name: elem.name, value: val.replace(rCRLF, "\r\n") }; }).get(); } });
        jQuery.ajaxSettings.xhr = function() { try { return new window.XMLHttpRequest(); } catch (e) {} };
        var xhrSuccessStatus = { 0: 200, 1223: 204 },
            xhrSupported = jQuery.ajaxSettings.xhr();
        support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
        support.ajax = xhrSupported = !!xhrSupported;
        jQuery.ajaxTransport(function(options) {
            var callback, errorCallback;
            if (support.cors || xhrSupported && !options.crossDomain) {
                return {
                    send: function(headers, complete) {
                        var i, xhr = options.xhr();
                        xhr.open(options.type, options.url, options.async, options.username, options.password);
                        if (options.xhrFields) { for (i in options.xhrFields) { xhr[i] = options.xhrFields[i]; } }
                        if (options.mimeType && xhr.overrideMimeType) { xhr.overrideMimeType(options.mimeType); }
                        if (!options.crossDomain && !headers["X-Requested-With"]) { headers["X-Requested-With"] = "XMLHttpRequest"; }
                        for (i in headers) { xhr.setRequestHeader(i, headers[i]); }
                        callback = function(type) { return function() { if (callback) { callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null; if (type === "abort") { xhr.abort(); } else if (type === "error") { if (typeof xhr.status !== "number") { complete(0, "error"); } else { complete(xhr.status, xhr.statusText); } } else { complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders()); } } }; };
                        xhr.onload = callback();
                        errorCallback = xhr.onerror = callback("error");
                        if (xhr.onabort !== undefined) { xhr.onabort = errorCallback; } else { xhr.onreadystatechange = function() { if (xhr.readyState === 4) { window.setTimeout(function() { if (callback) { errorCallback(); } }); } }; }
                        callback = callback("abort");
                        try {
                            xhr.send(options.hasContent && options.data || null);
                        } catch (e) {
                            if (callback) {
                                throw e;
                            }
                        }
                    },
                    abort: function() { if (callback) { callback(); } }
                };
            }
        });
        jQuery.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, " +
                    "application/ecmascript, application/x-ecmascript"
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: { "text script": function(text) { jQuery.globalEval(text); return text; } }
        });
        jQuery.ajaxPrefilter("script", function(s) {
            if (s.cache === undefined) { s.cache = false; }
            if (s.crossDomain) { s.type = "GET"; }
        });
        jQuery.ajaxTransport("script", function(s) {
            if (s.crossDomain) {
                var script, callback;
                return {
                    send: function(_, complete) {
                        script = jQuery("<script>").prop({ charset: s.scriptCharset, src: s.url }).on("load error", callback = function(evt) {
                            script.remove();
                            callback = null;
                            if (evt) { complete(evt.type === "error" ? 404 : 200, evt.type); }
                        });
                        document.head.appendChild(script[0]);
                    },
                    abort: function() { if (callback) { callback(); } }
                };
            }
        });
        var oldCallbacks = [],
            rjsonp = /(=)\?(?=&|$)|\?\?/;
        jQuery.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
                this[callback] = true;
                return callback;
            }
        });
        jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
            var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
            if (jsonProp || s.dataTypes[0] === "jsonp") {
                callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
                if (jsonProp) { s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName); } else if (s.jsonp !== false) { s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName; }
                s.converters["script json"] = function() {
                    if (!responseContainer) { jQuery.error(callbackName + " was not called"); }
                    return responseContainer[0];
                };
                s.dataTypes[0] = "json";
                overwritten = window[callbackName];
                window[callbackName] = function() { responseContainer = arguments; };
                jqXHR.always(function() {
                    if (overwritten === undefined) { jQuery(window).removeProp(callbackName); } else { window[callbackName] = overwritten; }
                    if (s[callbackName]) {
                        s.jsonpCallback = originalSettings.jsonpCallback;
                        oldCallbacks.push(callbackName);
                    }
                    if (responseContainer && jQuery.isFunction(overwritten)) { overwritten(responseContainer[0]); }
                    responseContainer = overwritten = undefined;
                });
                return "script";
            }
        });
        jQuery.parseHTML = function(data, context, keepScripts) {
            if (!data || typeof data !== "string") { return null; }
            if (typeof context === "boolean") {
                keepScripts = context;
                context = false;
            }
            context = context || document;
            var parsed = rsingleTag.exec(data),
                scripts = !keepScripts && [];
            if (parsed) { return [context.createElement(parsed[1])]; }
            parsed = buildFragment([data], context, scripts);
            if (scripts && scripts.length) { jQuery(scripts).remove(); }
            return jQuery.merge([], parsed.childNodes);
        };
        var _load = jQuery.fn.load;
        jQuery.fn.load = function(url, params, callback) {
            if (typeof url !== "string" && _load) { return _load.apply(this, arguments); }
            var selector, type, response, self = this,
                off = url.indexOf(" ");
            if (off > -1) {
                selector = jQuery.trim(url.slice(off));
                url = url.slice(0, off);
            }
            if (jQuery.isFunction(params)) {
                callback = params;
                params = undefined;
            } else if (params && typeof params === "object") { type = "POST"; }
            if (self.length > 0) {
                jQuery.ajax({ url: url, type: type || "GET", dataType: "html", data: params }).done(function(responseText) {
                    response = arguments;
                    self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
                }).always(callback && function(jqXHR, status) { self.each(function() { callback.apply(this, response || [jqXHR.responseText, status, jqXHR]); }); });
            }
            return this;
        };
        jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(i, type) { jQuery.fn[type] = function(fn) { return this.on(type, fn); }; });
        jQuery.expr.filters.animated = function(elem) { return jQuery.grep(jQuery.timers, function(fn) { return elem === fn.elem; }).length; };

        function getWindow(elem) { return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView; }
        jQuery.offset = {
            setOffset: function(elem, options, i) {
                var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"),
                    curElem = jQuery(elem),
                    props = {};
                if (position === "static") { elem.style.position = "relative"; }
                curOffset = curElem.offset();
                curCSSTop = jQuery.css(elem, "top");
                curCSSLeft = jQuery.css(elem, "left");
                calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
                if (calculatePosition) {
                    curPosition = curElem.position();
                    curTop = curPosition.top;
                    curLeft = curPosition.left;
                } else {
                    curTop = parseFloat(curCSSTop) || 0;
                    curLeft = parseFloat(curCSSLeft) || 0;
                }
                if (jQuery.isFunction(options)) { options = options.call(elem, i, jQuery.extend({}, curOffset)); }
                if (options.top != null) { props.top = (options.top - curOffset.top) + curTop; }
                if (options.left != null) { props.left = (options.left - curOffset.left) + curLeft; }
                if ("using" in options) { options.using.call(elem, props); } else { curElem.css(props); }
            }
        };
        jQuery.fn.extend({
            offset: function(options) {
                if (arguments.length) { return options === undefined ? this : this.each(function(i) { jQuery.offset.setOffset(this, options, i); }); }
                var docElem, win, elem = this[0],
                    box = { top: 0, left: 0 },
                    doc = elem && elem.ownerDocument;
                if (!doc) { return; }
                docElem = doc.documentElement;
                if (!jQuery.contains(docElem, elem)) { return box; }
                box = elem.getBoundingClientRect();
                win = getWindow(doc);
                return { top: box.top + win.pageYOffset - docElem.clientTop, left: box.left + win.pageXOffset - docElem.clientLeft };
            },
            position: function() {
                if (!this[0]) { return; }
                var offsetParent, offset, elem = this[0],
                    parentOffset = { top: 0, left: 0 };
                if (jQuery.css(elem, "position") === "fixed") { offset = elem.getBoundingClientRect(); } else {
                    offsetParent = this.offsetParent();
                    offset = this.offset();
                    if (!jQuery.nodeName(offsetParent[0], "html")) { parentOffset = offsetParent.offset(); }
                    parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
                }
                return { top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true), left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true) };
            },
            offsetParent: function() {
                return this.map(function() {
                    var offsetParent = this.offsetParent;
                    while (offsetParent && jQuery.css(offsetParent, "position") === "static") { offsetParent = offsetParent.offsetParent; }
                    return offsetParent || documentElement;
                });
            }
        });
        jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
            var top = "pageYOffset" === prop;
            jQuery.fn[method] = function(val) {
                return access(this, function(elem, method, val) {
                    var win = getWindow(elem);
                    if (val === undefined) { return win ? win[prop] : elem[method]; }
                    if (win) { win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset); } else { elem[method] = val; }
                }, method, val, arguments.length);
            };
        });
        jQuery.each(["top", "left"], function(i, prop) { jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) { if (computed) { computed = curCSS(elem, prop); return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed; } }); });
        jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
            jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function(defaultExtra, funcName) {
                jQuery.fn[funcName] = function(margin, value) {
                    var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                        extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                    return access(this, function(elem, type, value) {
                        var doc;
                        if (jQuery.isWindow(elem)) { return elem.document.documentElement["client" + name]; }
                        if (elem.nodeType === 9) { doc = elem.documentElement; return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]); }
                        return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
                    }, type, chainable ? margin : undefined, chainable, null);
                };
            });
        });
        jQuery.fn.extend({ bind: function(types, data, fn) { return this.on(types, null, data, fn); }, unbind: function(types, fn) { return this.off(types, null, fn); }, delegate: function(selector, types, data, fn) { return this.on(types, selector, data, fn); }, undelegate: function(selector, types, fn) { return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn); }, size: function() { return this.length; } });
        jQuery.fn.andSelf = jQuery.fn.addBack;
        if (typeof define === "function" && define.amd) { define("jquery", [], function() { return jQuery; }); }
        var
            _jQuery = window.jQuery,
            _$ = window.$;
        jQuery.noConflict = function(deep) {
            if (window.$ === jQuery) { window.$ = _$; }
            if (deep && window.jQuery === jQuery) { window.jQuery = _jQuery; }
            return jQuery;
        };
        if (!noGlobal) { window.jQuery = window.$ = jQuery; }
        return jQuery;
    }));;
    /*! jQuery UI - v1.12.1 - 2017-06-30
     * http://jqueryui.com
     * Includes: widget.js, effect.js
     * Copyright jQuery Foundation and other contributors; Licensed MIT */
    (function(factory) { if (typeof define === "function" && define.amd) { define(["jquery"], factory); } else { factory(jQuery); } }(function($) {
        $.ui = $.ui || {};
        var version = $.ui.version = "1.12.1";
        /*!
         * jQuery UI Widget 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        var widgetUuid = 0;
        var widgetSlice = Array.prototype.slice;
        $.cleanData = (function(orig) {
            return function(elems) {
                var events, elem, i;
                for (i = 0;
                    (elem = elems[i]) != null; i++) {
                    try {
                        events = $._data(elem, "events");
                        if (events && events.remove) { $(elem).triggerHandler("remove"); }
                    } catch (e) {}
                }
                orig(elems);
            };
        })($.cleanData);
        $.widget = function(name, base, prototype) {
            var existingConstructor, constructor, basePrototype;
            var proxiedPrototype = {};
            var namespace = name.split(".")[0];
            name = name.split(".")[1];
            var fullName = namespace + "-" + name;
            if (!prototype) {
                prototype = base;
                base = $.Widget;
            }
            if ($.isArray(prototype)) { prototype = $.extend.apply(null, [{}].concat(prototype)); }
            $.expr[":"][fullName.toLowerCase()] = function(elem) { return !!$.data(elem, fullName); };
            $[namespace] = $[namespace] || {};
            existingConstructor = $[namespace][name];
            constructor = $[namespace][name] = function(options, element) {
                if (!this._createWidget) { return new constructor(options, element); }
                if (arguments.length) { this._createWidget(options, element); }
            };
            $.extend(constructor, existingConstructor, { version: prototype.version, _proto: $.extend({}, prototype), _childConstructors: [] });
            basePrototype = new base();
            basePrototype.options = $.widget.extend({}, basePrototype.options);
            $.each(prototype, function(prop, value) {
                if (!$.isFunction(value)) { proxiedPrototype[prop] = value; return; }
                proxiedPrototype[prop] = (function() {
                    function _super() { return base.prototype[prop].apply(this, arguments); }

                    function _superApply(args) { return base.prototype[prop].apply(this, args); }
                    return function() {
                        var __super = this._super;
                        var __superApply = this._superApply;
                        var returnValue;
                        this._super = _super;
                        this._superApply = _superApply;
                        returnValue = value.apply(this, arguments);
                        this._super = __super;
                        this._superApply = __superApply;
                        return returnValue;
                    };
                })();
            });
            constructor.prototype = $.widget.extend(basePrototype, { widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name }, proxiedPrototype, { constructor: constructor, namespace: namespace, widgetName: name, widgetFullName: fullName });
            if (existingConstructor) {
                $.each(existingConstructor._childConstructors, function(i, child) {
                    var childPrototype = child.prototype;
                    $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor, child._proto);
                });
                delete existingConstructor._childConstructors;
            } else { base._childConstructors.push(constructor); }
            $.widget.bridge(name, constructor);
            return constructor;
        };
        $.widget.extend = function(target) {
            var input = widgetSlice.call(arguments, 1);
            var inputIndex = 0;
            var inputLength = input.length;
            var key;
            var value;
            for (; inputIndex < inputLength; inputIndex++) { for (key in input[inputIndex]) { value = input[inputIndex][key]; if (input[inputIndex].hasOwnProperty(key) && value !== undefined) { if ($.isPlainObject(value)) { target[key] = $.isPlainObject(target[key]) ? $.widget.extend({}, target[key], value) : $.widget.extend({}, value); } else { target[key] = value; } } } }
            return target;
        };
        $.widget.bridge = function(name, object) {
            var fullName = object.prototype.widgetFullName || name;
            $.fn[name] = function(options) {
                var isMethodCall = typeof options === "string";
                var args = widgetSlice.call(arguments, 1);
                var returnValue = this;
                if (isMethodCall) {
                    if (!this.length && options === "instance") { returnValue = undefined; } else {
                        this.each(function() {
                            var methodValue;
                            var instance = $.data(this, fullName);
                            if (options === "instance") { returnValue = instance; return false; }
                            if (!instance) {
                                return $.error("cannot call methods on " + name +
                                    " prior to initialization; " +
                                    "attempted to call method '" + options + "'");
                            }
                            if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                                return $.error("no such method '" + options + "' for " + name +
                                    " widget instance");
                            }
                            methodValue = instance[options].apply(instance, args);
                            if (methodValue !== instance && methodValue !== undefined) { returnValue = methodValue && methodValue.jquery ? returnValue.pushStack(methodValue.get()) : methodValue; return false; }
                        });
                    }
                } else {
                    if (args.length) { options = $.widget.extend.apply(null, [options].concat(args)); }
                    this.each(function() { var instance = $.data(this, fullName); if (instance) { instance.option(options || {}); if (instance._init) { instance._init(); } } else { $.data(this, fullName, new object(options, this)); } });
                }
                return returnValue;
            };
        };
        $.Widget = function() {};
        $.Widget._childConstructors = [];
        $.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { classes: {}, disabled: false, create: null },
            _createWidget: function(options, element) {
                element = $(element || this.defaultElement || this)[0];
                this.element = $(element);
                this.uuid = widgetUuid++;
                this.eventNamespace = "." + this.widgetName + this.uuid;
                this.bindings = $();
                this.hoverable = $();
                this.focusable = $();
                this.classesElementLookup = {};
                if (element !== this) {
                    $.data(element, this.widgetFullName, this);
                    this._on(true, this.element, { remove: function(event) { if (event.target === element) { this.destroy(); } } });
                    this.document = $(element.style ? element.ownerDocument : element.document || element);
                    this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
                }
                this.options = $.widget.extend({}, this.options, this._getCreateOptions(), options);
                this._create();
                if (this.options.disabled) { this._setOptionDisabled(this.options.disabled); }
                this._trigger("create", null, this._getCreateEventData());
                this._init();
            },
            _getCreateOptions: function() { return {}; },
            _getCreateEventData: $.noop,
            _create: $.noop,
            _init: $.noop,
            destroy: function() {
                var that = this;
                this._destroy();
                $.each(this.classesElementLookup, function(key, value) { that._removeClass(value, key); });
                this.element.off(this.eventNamespace).removeData(this.widgetFullName);
                this.widget().off(this.eventNamespace).removeAttr("aria-disabled");
                this.bindings.off(this.eventNamespace);
            },
            _destroy: $.noop,
            widget: function() { return this.element; },
            option: function(key, value) {
                var options = key;
                var parts;
                var curOption;
                var i;
                if (arguments.length === 0) { return $.widget.extend({}, this.options); }
                if (typeof key === "string") {
                    options = {};
                    parts = key.split(".");
                    key = parts.shift();
                    if (parts.length) {
                        curOption = options[key] = $.widget.extend({}, this.options[key]);
                        for (i = 0; i < parts.length - 1; i++) {
                            curOption[parts[i]] = curOption[parts[i]] || {};
                            curOption = curOption[parts[i]];
                        }
                        key = parts.pop();
                        if (arguments.length === 1) { return curOption[key] === undefined ? null : curOption[key]; }
                        curOption[key] = value;
                    } else {
                        if (arguments.length === 1) { return this.options[key] === undefined ? null : this.options[key]; }
                        options[key] = value;
                    }
                }
                this._setOptions(options);
                return this;
            },
            _setOptions: function(options) {
                var key;
                for (key in options) { this._setOption(key, options[key]); }
                return this;
            },
            _setOption: function(key, value) {
                if (key === "classes") { this._setOptionClasses(value); }
                this.options[key] = value;
                if (key === "disabled") { this._setOptionDisabled(value); }
                return this;
            },
            _setOptionClasses: function(value) {
                var classKey, elements, currentElements;
                for (classKey in value) {
                    currentElements = this.classesElementLookup[classKey];
                    if (value[classKey] === this.options.classes[classKey] || !currentElements || !currentElements.length) { continue; }
                    elements = $(currentElements.get());
                    this._removeClass(currentElements, classKey);
                    elements.addClass(this._classes({ element: elements, keys: classKey, classes: value, add: true }));
                }
            },
            _setOptionDisabled: function(value) {
                this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value);
                if (value) {
                    this._removeClass(this.hoverable, null, "ui-state-hover");
                    this._removeClass(this.focusable, null, "ui-state-focus");
                }
            },
            enable: function() { return this._setOptions({ disabled: false }); },
            disable: function() { return this._setOptions({ disabled: true }); },
            _classes: function(options) {
                var full = [];
                var that = this;
                options = $.extend({ element: this.element, classes: this.options.classes || {} }, options);

                function processClassString(classes, checkOption) {
                    var current, i;
                    for (i = 0; i < classes.length; i++) {
                        current = that.classesElementLookup[classes[i]] || $();
                        if (options.add) { current = $($.unique(current.get().concat(options.element.get()))); } else { current = $(current.not(options.element).get()); }
                        that.classesElementLookup[classes[i]] = current;
                        full.push(classes[i]);
                        if (checkOption && options.classes[classes[i]]) { full.push(options.classes[classes[i]]); }
                    }
                }
                this._on(options.element, { "remove": "_untrackClassesElement" });
                if (options.keys) { processClassString(options.keys.match(/\S+/g) || [], true); }
                if (options.extra) { processClassString(options.extra.match(/\S+/g) || []); }
                return full.join(" ");
            },
            _untrackClassesElement: function(event) {
                var that = this;
                $.each(that.classesElementLookup, function(key, value) { if ($.inArray(event.target, value) !== -1) { that.classesElementLookup[key] = $(value.not(event.target).get()); } });
            },
            _removeClass: function(element, keys, extra) { return this._toggleClass(element, keys, extra, false); },
            _addClass: function(element, keys, extra) { return this._toggleClass(element, keys, extra, true); },
            _toggleClass: function(element, keys, extra, add) {
                add = (typeof add === "boolean") ? add : extra;
                var shift = (typeof element === "string" || element === null),
                    options = { extra: shift ? keys : extra, keys: shift ? element : keys, element: shift ? this.element : element, add: add };
                options.element.toggleClass(this._classes(options), add);
                return this;
            },
            _on: function(suppressDisabledCheck, element, handlers) {
                var delegateElement;
                var instance = this;
                if (typeof suppressDisabledCheck !== "boolean") {
                    handlers = element;
                    element = suppressDisabledCheck;
                    suppressDisabledCheck = false;
                }
                if (!handlers) {
                    handlers = element;
                    element = this.element;
                    delegateElement = this.widget();
                } else {
                    element = delegateElement = $(element);
                    this.bindings = this.bindings.add(element);
                }
                $.each(handlers, function(event, handler) {
                    function handlerProxy() {
                        if (!suppressDisabledCheck && (instance.options.disabled === true || $(this).hasClass("ui-state-disabled"))) { return; }
                        return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments);
                    }
                    if (typeof handler !== "string") { handlerProxy.guid = handler.guid = handler.guid || handlerProxy.guid || $.guid++; }
                    var match = event.match(/^([\w:-]*)\s*(.*)$/);
                    var eventName = match[1] + instance.eventNamespace;
                    var selector = match[2];
                    if (selector) { delegateElement.on(eventName, selector, handlerProxy); } else { element.on(eventName, handlerProxy); }
                });
            },
            _off: function(element, eventName) {
                eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") +
                    this.eventNamespace;
                element.off(eventName).off(eventName);
                this.bindings = $(this.bindings.not(element).get());
                this.focusable = $(this.focusable.not(element).get());
                this.hoverable = $(this.hoverable.not(element).get());
            },
            _delay: function(handler, delay) {
                function handlerProxy() { return (typeof handler === "string" ? instance[handler] : handler).apply(instance, arguments); }
                var instance = this;
                return setTimeout(handlerProxy, delay || 0);
            },
            _hoverable: function(element) {
                this.hoverable = this.hoverable.add(element);
                this._on(element, { mouseenter: function(event) { this._addClass($(event.currentTarget), null, "ui-state-hover"); }, mouseleave: function(event) { this._removeClass($(event.currentTarget), null, "ui-state-hover"); } });
            },
            _focusable: function(element) {
                this.focusable = this.focusable.add(element);
                this._on(element, { focusin: function(event) { this._addClass($(event.currentTarget), null, "ui-state-focus"); }, focusout: function(event) { this._removeClass($(event.currentTarget), null, "ui-state-focus"); } });
            },
            _trigger: function(type, event, data) {
                var prop, orig;
                var callback = this.options[type];
                data = data || {};
                event = $.Event(event);
                event.type = (type === this.widgetEventPrefix ? type : this.widgetEventPrefix + type).toLowerCase();
                event.target = this.element[0];
                orig = event.originalEvent;
                if (orig) { for (prop in orig) { if (!(prop in event)) { event[prop] = orig[prop]; } } }
                this.element.trigger(event, data);
                return !($.isFunction(callback) && callback.apply(this.element[0], [event].concat(data)) === false || event.isDefaultPrevented());
            }
        };
        $.each({ show: "fadeIn", hide: "fadeOut" }, function(method, defaultEffect) {
            $.Widget.prototype["_" + method] = function(element, options, callback) {
                if (typeof options === "string") { options = { effect: options }; }
                var hasOptions;
                var effectName = !options ? method : options === true || typeof options === "number" ? defaultEffect : options.effect || defaultEffect;
                options = options || {};
                if (typeof options === "number") { options = { duration: options }; }
                hasOptions = !$.isEmptyObject(options);
                options.complete = callback;
                if (options.delay) { element.delay(options.delay); }
                if (hasOptions && $.effects && $.effects.effect[effectName]) { element[method](options); } else if (effectName !== method && element[effectName]) { element[effectName](options.duration, options.easing, callback); } else {
                    element.queue(function(next) {
                        $(this)[method]();
                        if (callback) { callback.call(element[0]); }
                        next();
                    });
                }
            };
        });
        var widget = $.widget;
        /*!
         * jQuery UI Effects 1.12.1
         * http://jqueryui.com
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         */
        var dataSpace = "ui-effects-",
            dataSpaceStyle = "ui-effects-style",
            dataSpaceAnimated = "ui-effects-animated",
            jQuery = $;
        $.effects = { effect: {} };
        /*!
         * jQuery Color Animations v2.1.2
         * https://github.com/jquery/jquery-color
         *
         * Copyright 2014 jQuery Foundation and other contributors
         * Released under the MIT license.
         * http://jquery.org/license
         *
         * Date: Wed Jan 16 08:47:09 2013 -0600
         */
        (function(jQuery, undefined) {
            var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor " +
                "borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
                stringParsers = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(execResult) { return [execResult[1], execResult[2], execResult[3], execResult[4]]; } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(execResult) { return [execResult[1] * 2.55, execResult[2] * 2.55, execResult[3] * 2.55, execResult[4]]; } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(execResult) { return [parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16)]; } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(execResult) { return [parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16)]; } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(execResult) { return [execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4]]; } }],
                color = jQuery.Color = function(color, green, blue, alpha) { return new jQuery.Color.fn.parse(color, green, blue, alpha); },
                spaces = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                propTypes = { "byte": { floor: true, max: 255 }, "percent": { max: 1 }, "degrees": { mod: 360, floor: true } },
                support = color.support = {},
                supportElem = jQuery("<p>")[0],
                colors, each = jQuery.each;
            supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
            support.rgba = supportElem.style.backgroundColor.indexOf("rgba") > -1;
            each(spaces, function(spaceName, space) {
                space.cache = "_" + spaceName;
                space.props.alpha = { idx: 3, type: "percent", def: 1 };
            });

            function clamp(value, prop, allowEmpty) {
                var type = propTypes[prop.type] || {};
                if (value == null) { return (allowEmpty || !prop.def) ? null : prop.def; }
                value = type.floor ? ~~value : parseFloat(value);
                if (isNaN(value)) { return prop.def; }
                if (type.mod) { return (value + type.mod) % type.mod; }
                return 0 > value ? 0 : type.max < value ? type.max : value;
            }

            function stringParse(string) {
                var inst = color(),
                    rgba = inst._rgba = [];
                string = string.toLowerCase();
                each(stringParsers, function(i, parser) {
                    var parsed, match = parser.re.exec(string),
                        values = match && parser.parse(match),
                        spaceName = parser.space || "rgba";
                    if (values) {
                        parsed = inst[spaceName](values);
                        inst[spaces[spaceName].cache] = parsed[spaces[spaceName].cache];
                        rgba = inst._rgba = parsed._rgba;
                        return false;
                    }
                });
                if (rgba.length) {
                    if (rgba.join() === "0,0,0,0") { jQuery.extend(rgba, colors.transparent); }
                    return inst;
                }
                return colors[string];
            }
            color.fn = jQuery.extend(color.prototype, {
                parse: function(red, green, blue, alpha) {
                    if (red === undefined) { this._rgba = [null, null, null, null]; return this; }
                    if (red.jquery || red.nodeType) {
                        red = jQuery(red).css(green);
                        green = undefined;
                    }
                    var inst = this,
                        type = jQuery.type(red),
                        rgba = this._rgba = [];
                    if (green !== undefined) {
                        red = [red, green, blue, alpha];
                        type = "array";
                    }
                    if (type === "string") { return this.parse(stringParse(red) || colors._default); }
                    if (type === "array") { each(spaces.rgba.props, function(key, prop) { rgba[prop.idx] = clamp(red[prop.idx], prop); }); return this; }
                    if (type === "object") {
                        if (red instanceof color) { each(spaces, function(spaceName, space) { if (red[space.cache]) { inst[space.cache] = red[space.cache].slice(); } }); } else {
                            each(spaces, function(spaceName, space) {
                                var cache = space.cache;
                                each(space.props, function(key, prop) {
                                    if (!inst[cache] && space.to) {
                                        if (key === "alpha" || red[key] == null) { return; }
                                        inst[cache] = space.to(inst._rgba);
                                    }
                                    inst[cache][prop.idx] = clamp(red[key], prop, true);
                                });
                                if (inst[cache] && jQuery.inArray(null, inst[cache].slice(0, 3)) < 0) { inst[cache][3] = 1; if (space.from) { inst._rgba = space.from(inst[cache]); } }
                            });
                        }
                        return this;
                    }
                },
                is: function(compare) {
                    var is = color(compare),
                        same = true,
                        inst = this;
                    each(spaces, function(_, space) {
                        var localCache, isCache = is[space.cache];
                        if (isCache) {
                            localCache = inst[space.cache] || space.to && space.to(inst._rgba) || [];
                            each(space.props, function(_, prop) { if (isCache[prop.idx] != null) { same = (isCache[prop.idx] === localCache[prop.idx]); return same; } });
                        }
                        return same;
                    });
                    return same;
                },
                _space: function() {
                    var used = [],
                        inst = this;
                    each(spaces, function(spaceName, space) { if (inst[space.cache]) { used.push(spaceName); } });
                    return used.pop();
                },
                transition: function(other, distance) {
                    var end = color(other),
                        spaceName = end._space(),
                        space = spaces[spaceName],
                        startColor = this.alpha() === 0 ? color("transparent") : this,
                        start = startColor[space.cache] || space.to(startColor._rgba),
                        result = start.slice();
                    end = end[space.cache];
                    each(space.props, function(key, prop) {
                        var index = prop.idx,
                            startValue = start[index],
                            endValue = end[index],
                            type = propTypes[prop.type] || {};
                        if (endValue === null) { return; }
                        if (startValue === null) { result[index] = endValue; } else {
                            if (type.mod) { if (endValue - startValue > type.mod / 2) { startValue += type.mod; } else if (startValue - endValue > type.mod / 2) { startValue -= type.mod; } }
                            result[index] = clamp((endValue - startValue) * distance + startValue, prop);
                        }
                    });
                    return this[spaceName](result);
                },
                blend: function(opaque) {
                    if (this._rgba[3] === 1) { return this; }
                    var rgb = this._rgba.slice(),
                        a = rgb.pop(),
                        blend = color(opaque)._rgba;
                    return color(jQuery.map(rgb, function(v, i) { return (1 - a) * blend[i] + a * v; }));
                },
                toRgbaString: function() {
                    var prefix = "rgba(",
                        rgba = jQuery.map(this._rgba, function(v, i) { return v == null ? (i > 2 ? 1 : 0) : v; });
                    if (rgba[3] === 1) {
                        rgba.pop();
                        prefix = "rgb(";
                    }
                    return prefix + rgba.join() + ")";
                },
                toHslaString: function() {
                    var prefix = "hsla(",
                        hsla = jQuery.map(this.hsla(), function(v, i) {
                            if (v == null) { v = i > 2 ? 1 : 0; }
                            if (i && i < 3) { v = Math.round(v * 100) + "%"; }
                            return v;
                        });
                    if (hsla[3] === 1) {
                        hsla.pop();
                        prefix = "hsl(";
                    }
                    return prefix + hsla.join() + ")";
                },
                toHexString: function(includeAlpha) {
                    var rgba = this._rgba.slice(),
                        alpha = rgba.pop();
                    if (includeAlpha) { rgba.push(~~(alpha * 255)); }
                    return "#" + jQuery.map(rgba, function(v) { v = (v || 0).toString(16); return v.length === 1 ? "0" + v : v; }).join("");
                },
                toString: function() { return this._rgba[3] === 0 ? "transparent" : this.toRgbaString(); }
            });
            color.fn.parse.prototype = color.fn;

            function hue2rgb(p, q, h) {
                h = (h + 1) % 1;
                if (h * 6 < 1) { return p + (q - p) * h * 6; }
                if (h * 2 < 1) { return q; }
                if (h * 3 < 2) { return p + (q - p) * ((2 / 3) - h) * 6; }
                return p;
            }
            spaces.hsla.to = function(rgba) {
                if (rgba[0] == null || rgba[1] == null || rgba[2] == null) { return [null, null, null, rgba[3]]; }
                var r = rgba[0] / 255,
                    g = rgba[1] / 255,
                    b = rgba[2] / 255,
                    a = rgba[3],
                    max = Math.max(r, g, b),
                    min = Math.min(r, g, b),
                    diff = max - min,
                    add = max + min,
                    l = add * 0.5,
                    h, s;
                if (min === max) { h = 0; } else if (r === max) { h = (60 * (g - b) / diff) + 360; } else if (g === max) { h = (60 * (b - r) / diff) + 120; } else { h = (60 * (r - g) / diff) + 240; }
                if (diff === 0) { s = 0; } else if (l <= 0.5) { s = diff / add; } else { s = diff / (2 - add); }
                return [Math.round(h) % 360, s, l, a == null ? 1 : a];
            };
            spaces.hsla.from = function(hsla) {
                if (hsla[0] == null || hsla[1] == null || hsla[2] == null) { return [null, null, null, hsla[3]]; }
                var h = hsla[0] / 360,
                    s = hsla[1],
                    l = hsla[2],
                    a = hsla[3],
                    q = l <= 0.5 ? l * (1 + s) : l + s - l * s,
                    p = 2 * l - q;
                return [Math.round(hue2rgb(p, q, h + (1 / 3)) * 255), Math.round(hue2rgb(p, q, h) * 255), Math.round(hue2rgb(p, q, h - (1 / 3)) * 255), a];
            };
            each(spaces, function(spaceName, space) {
                var props = space.props,
                    cache = space.cache,
                    to = space.to,
                    from = space.from;
                color.fn[spaceName] = function(value) {
                    if (to && !this[cache]) { this[cache] = to(this._rgba); }
                    if (value === undefined) { return this[cache].slice(); }
                    var ret, type = jQuery.type(value),
                        arr = (type === "array" || type === "object") ? value : arguments,
                        local = this[cache].slice();
                    each(props, function(key, prop) {
                        var val = arr[type === "object" ? key : prop.idx];
                        if (val == null) { val = local[prop.idx]; }
                        local[prop.idx] = clamp(val, prop);
                    });
                    if (from) {
                        ret = color(from(local));
                        ret[cache] = local;
                        return ret;
                    } else { return color(local); }
                };
                each(props, function(key, prop) {
                    if (color.fn[key]) { return; }
                    color.fn[key] = function(value) {
                        var vtype = jQuery.type(value),
                            fn = (key === "alpha" ? (this._hsla ? "hsla" : "rgba") : spaceName),
                            local = this[fn](),
                            cur = local[prop.idx],
                            match;
                        if (vtype === "undefined") { return cur; }
                        if (vtype === "function") {
                            value = value.call(this, cur);
                            vtype = jQuery.type(value);
                        }
                        if (value == null && prop.empty) { return this; }
                        if (vtype === "string") { match = rplusequals.exec(value); if (match) { value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1); } }
                        local[prop.idx] = value;
                        return this[fn](local);
                    };
                });
            });
            color.hook = function(hook) {
                var hooks = hook.split(" ");
                each(hooks, function(i, hook) {
                    jQuery.cssHooks[hook] = {
                        set: function(elem, value) {
                            var parsed, curElem, backgroundColor = "";
                            if (value !== "transparent" && (jQuery.type(value) !== "string" || (parsed = stringParse(value)))) {
                                value = color(parsed || value);
                                if (!support.rgba && value._rgba[3] !== 1) {
                                    curElem = hook === "backgroundColor" ? elem.parentNode : elem;
                                    while ((backgroundColor === "" || backgroundColor === "transparent") && curElem && curElem.style) {
                                        try {
                                            backgroundColor = jQuery.css(curElem, "backgroundColor");
                                            curElem = curElem.parentNode;
                                        } catch (e) {}
                                    }
                                    value = value.blend(backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default");
                                }
                                value = value.toRgbaString();
                            }
                            try { elem.style[hook] = value; } catch (e) {}
                        }
                    };
                    jQuery.fx.step[hook] = function(fx) {
                        if (!fx.colorInit) {
                            fx.start = color(fx.elem, hook);
                            fx.end = color(fx.end);
                            fx.colorInit = true;
                        }
                        jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos));
                    };
                });
            };
            color.hook(stepHooks);
            jQuery.cssHooks.borderColor = {
                expand: function(value) {
                    var expanded = {};
                    each(["Top", "Right", "Bottom", "Left"], function(i, part) { expanded["border" + part + "Color"] = value; });
                    return expanded;
                }
            };
            colors = jQuery.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" };
        })(jQuery);
        (function() {
            var classAnimationActions = ["add", "remove", "toggle"],
                shorthandStyles = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
            $.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(_, prop) {
                $.fx.step[prop] = function(fx) {
                    if (fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr) {
                        jQuery.style(fx.elem, prop, fx.end);
                        fx.setAttr = true;
                    }
                };
            });

            function getElementStyles(elem) {
                var key, len, style = elem.ownerDocument.defaultView ? elem.ownerDocument.defaultView.getComputedStyle(elem, null) : elem.currentStyle,
                    styles = {};
                if (style && style.length && style[0] && style[style[0]]) {
                    len = style.length;
                    while (len--) { key = style[len]; if (typeof style[key] === "string") { styles[$.camelCase(key)] = style[key]; } }
                } else { for (key in style) { if (typeof style[key] === "string") { styles[key] = style[key]; } } }
                return styles;
            }

            function styleDifference(oldStyle, newStyle) {
                var diff = {},
                    name, value;
                for (name in newStyle) { value = newStyle[name]; if (oldStyle[name] !== value) { if (!shorthandStyles[name]) { if ($.fx.step[name] || !isNaN(parseFloat(value))) { diff[name] = value; } } } }
                return diff;
            }
            if (!$.fn.addBack) { $.fn.addBack = function(selector) { return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector)); }; }
            $.effects.animateClass = function(value, duration, easing, callback) {
                var o = $.speed(duration, easing, callback);
                return this.queue(function() {
                    var animated = $(this),
                        baseClass = animated.attr("class") || "",
                        applyClassChange, allAnimations = o.children ? animated.find("*").addBack() : animated;
                    allAnimations = allAnimations.map(function() { var el = $(this); return { el: el, start: getElementStyles(this) }; });
                    applyClassChange = function() { $.each(classAnimationActions, function(i, action) { if (value[action]) { animated[action + "Class"](value[action]); } }); };
                    applyClassChange();
                    allAnimations = allAnimations.map(function() {
                        this.end = getElementStyles(this.el[0]);
                        this.diff = styleDifference(this.start, this.end);
                        return this;
                    });
                    animated.attr("class", baseClass);
                    allAnimations = allAnimations.map(function() {
                        var styleInfo = this,
                            dfd = $.Deferred(),
                            opts = $.extend({}, o, { queue: false, complete: function() { dfd.resolve(styleInfo); } });
                        this.el.animate(this.diff, opts);
                        return dfd.promise();
                    });
                    $.when.apply($, allAnimations.get()).done(function() {
                        applyClassChange();
                        $.each(arguments, function() {
                            var el = this.el;
                            $.each(this.diff, function(key) { el.css(key, ""); });
                        });
                        o.complete.call(animated[0]);
                    });
                });
            };
            $.fn.extend({ addClass: (function(orig) { return function(classNames, speed, easing, callback) { return speed ? $.effects.animateClass.call(this, { add: classNames }, speed, easing, callback) : orig.apply(this, arguments); }; })($.fn.addClass), removeClass: (function(orig) { return function(classNames, speed, easing, callback) { return arguments.length > 1 ? $.effects.animateClass.call(this, { remove: classNames }, speed, easing, callback) : orig.apply(this, arguments); }; })($.fn.removeClass), toggleClass: (function(orig) { return function(classNames, force, speed, easing, callback) { if (typeof force === "boolean" || force === undefined) { if (!speed) { return orig.apply(this, arguments); } else { return $.effects.animateClass.call(this, (force ? { add: classNames } : { remove: classNames }), speed, easing, callback); } } else { return $.effects.animateClass.call(this, { toggle: classNames }, force, speed, easing); } }; })($.fn.toggleClass), switchClass: function(remove, add, speed, easing, callback) { return $.effects.animateClass.call(this, { add: add, remove: remove }, speed, easing, callback); } });
        })();
        (function() {
            if ($.expr && $.expr.filters && $.expr.filters.animated) { $.expr.filters.animated = (function(orig) { return function(elem) { return !!$(elem).data(dataSpaceAnimated) || orig(elem); }; })($.expr.filters.animated); }
            if ($.uiBackCompat !== false) {
                $.extend($.effects, {
                    save: function(element, set) {
                        var i = 0,
                            length = set.length;
                        for (; i < length; i++) { if (set[i] !== null) { element.data(dataSpace + set[i], element[0].style[set[i]]); } }
                    },
                    restore: function(element, set) {
                        var val, i = 0,
                            length = set.length;
                        for (; i < length; i++) {
                            if (set[i] !== null) {
                                val = element.data(dataSpace + set[i]);
                                element.css(set[i], val);
                            }
                        }
                    },
                    setMode: function(el, mode) {
                        if (mode === "toggle") { mode = el.is(":hidden") ? "show" : "hide"; }
                        return mode;
                    },
                    createWrapper: function(element) {
                        if (element.parent().is(".ui-effects-wrapper")) { return element.parent(); }
                        var props = { width: element.outerWidth(true), height: element.outerHeight(true), "float": element.css("float") },
                            wrapper = $("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                            size = { width: element.width(), height: element.height() },
                            active = document.activeElement;
                        try { active.id; } catch (e) { active = document.body; }
                        element.wrap(wrapper);
                        if (element[0] === active || $.contains(element[0], active)) { $(active).trigger("focus"); }
                        wrapper = element.parent();
                        if (element.css("position") === "static") {
                            wrapper.css({ position: "relative" });
                            element.css({ position: "relative" });
                        } else {
                            $.extend(props, { position: element.css("position"), zIndex: element.css("z-index") });
                            $.each(["top", "left", "bottom", "right"], function(i, pos) { props[pos] = element.css(pos); if (isNaN(parseInt(props[pos], 10))) { props[pos] = "auto"; } });
                            element.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" });
                        }
                        element.css(size);
                        return wrapper.css(props).show();
                    },
                    removeWrapper: function(element) {
                        var active = document.activeElement;
                        if (element.parent().is(".ui-effects-wrapper")) { element.parent().replaceWith(element); if (element[0] === active || $.contains(element[0], active)) { $(active).trigger("focus"); } }
                        return element;
                    }
                });
            }
            $.extend($.effects, {
                version: "1.12.1",
                define: function(name, mode, effect) {
                    if (!effect) {
                        effect = mode;
                        mode = "effect";
                    }
                    $.effects.effect[name] = effect;
                    $.effects.effect[name].mode = mode;
                    return effect;
                },
                scaledDimensions: function(element, percent, direction) {
                    if (percent === 0) { return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }; }
                    var x = direction !== "horizontal" ? ((percent || 100) / 100) : 1,
                        y = direction !== "vertical" ? ((percent || 100) / 100) : 1;
                    return { height: element.height() * y, width: element.width() * x, outerHeight: element.outerHeight() * y, outerWidth: element.outerWidth() * x };
                },
                clipToBox: function(animation) { return { width: animation.clip.right - animation.clip.left, height: animation.clip.bottom - animation.clip.top, left: animation.clip.left, top: animation.clip.top }; },
                unshift: function(element, queueLength, count) {
                    var queue = element.queue();
                    if (queueLength > 1) { queue.splice.apply(queue, [1, 0].concat(queue.splice(queueLength, count))); }
                    element.dequeue();
                },
                saveStyle: function(element) { element.data(dataSpaceStyle, element[0].style.cssText); },
                restoreStyle: function(element) {
                    element[0].style.cssText = element.data(dataSpaceStyle) || "";
                    element.removeData(dataSpaceStyle);
                },
                mode: function(element, mode) {
                    var hidden = element.is(":hidden");
                    if (mode === "toggle") { mode = hidden ? "show" : "hide"; }
                    if (hidden ? mode === "hide" : mode === "show") { mode = "none"; }
                    return mode;
                },
                getBaseline: function(origin, original) {
                    var y, x;
                    switch (origin[0]) {
                        case "top":
                            y = 0;
                            break;
                        case "middle":
                            y = 0.5;
                            break;
                        case "bottom":
                            y = 1;
                            break;
                        default:
                            y = origin[0] / original.height;
                    }
                    switch (origin[1]) {
                        case "left":
                            x = 0;
                            break;
                        case "center":
                            x = 0.5;
                            break;
                        case "right":
                            x = 1;
                            break;
                        default:
                            x = origin[1] / original.width;
                    }
                    return { x: x, y: y };
                },
                createPlaceholder: function(element) {
                    var placeholder, cssPosition = element.css("position"),
                        position = element.position();
                    element.css({ marginTop: element.css("marginTop"), marginBottom: element.css("marginBottom"), marginLeft: element.css("marginLeft"), marginRight: element.css("marginRight") }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight());
                    if (/^(static|relative)/.test(cssPosition)) {
                        cssPosition = "absolute";
                        placeholder = $("<" + element[0].nodeName + ">").insertAfter(element).css({ display: /^(inline|ruby)/.test(element.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: element.css("marginTop"), marginBottom: element.css("marginBottom"), marginLeft: element.css("marginLeft"), marginRight: element.css("marginRight"), "float": element.css("float") }).outerWidth(element.outerWidth()).outerHeight(element.outerHeight()).addClass("ui-effects-placeholder");
                        element.data(dataSpace + "placeholder", placeholder);
                    }
                    element.css({ position: cssPosition, left: position.left, top: position.top });
                    return placeholder;
                },
                removePlaceholder: function(element) {
                    var dataKey = dataSpace + "placeholder",
                        placeholder = element.data(dataKey);
                    if (placeholder) {
                        placeholder.remove();
                        element.removeData(dataKey);
                    }
                },
                cleanUp: function(element) {
                    $.effects.restoreStyle(element);
                    $.effects.removePlaceholder(element);
                },
                setTransition: function(element, list, factor, value) {
                    value = value || {};
                    $.each(list, function(i, x) { var unit = element.cssUnit(x); if (unit[0] > 0) { value[x] = unit[0] * factor + unit[1]; } });
                    return value;
                }
            });

            function _normalizeArguments(effect, options, speed, callback) {
                if ($.isPlainObject(effect)) {
                    options = effect;
                    effect = effect.effect;
                }
                effect = { effect: effect };
                if (options == null) { options = {}; }
                if ($.isFunction(options)) {
                    callback = options;
                    speed = null;
                    options = {};
                }
                if (typeof options === "number" || $.fx.speeds[options]) {
                    callback = speed;
                    speed = options;
                    options = {};
                }
                if ($.isFunction(speed)) {
                    callback = speed;
                    speed = null;
                }
                if (options) { $.extend(effect, options); }
                speed = speed || options.duration;
                effect.duration = $.fx.off ? 0 : typeof speed === "number" ? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;
                effect.complete = callback || options.complete;
                return effect;
            }

            function standardAnimationOption(option) {
                if (!option || typeof option === "number" || $.fx.speeds[option]) { return true; }
                if (typeof option === "string" && !$.effects.effect[option]) { return true; }
                if ($.isFunction(option)) { return true; }
                if (typeof option === "object" && !option.effect) { return true; }
                return false;
            }
            $.fn.extend({
                effect: function() {
                    var args = _normalizeArguments.apply(this, arguments),
                        effectMethod = $.effects.effect[args.effect],
                        defaultMode = effectMethod.mode,
                        queue = args.queue,
                        queueName = queue || "fx",
                        complete = args.complete,
                        mode = args.mode,
                        modes = [],
                        prefilter = function(next) {
                            var el = $(this),
                                normalizedMode = $.effects.mode(el, mode) || defaultMode;
                            el.data(dataSpaceAnimated, true);
                            modes.push(normalizedMode);
                            if (defaultMode && (normalizedMode === "show" || (normalizedMode === defaultMode && normalizedMode === "hide"))) { el.show(); }
                            if (!defaultMode || normalizedMode !== "none") { $.effects.saveStyle(el); }
                            if ($.isFunction(next)) { next(); }
                        };
                    if ($.fx.off || !effectMethod) { if (mode) { return this[mode](args.duration, complete); } else { return this.each(function() { if (complete) { complete.call(this); } }); } }

                    function run(next) {
                        var elem = $(this);

                        function cleanup() {
                            elem.removeData(dataSpaceAnimated);
                            $.effects.cleanUp(elem);
                            if (args.mode === "hide") { elem.hide(); }
                            done();
                        }

                        function done() {
                            if ($.isFunction(complete)) { complete.call(elem[0]); }
                            if ($.isFunction(next)) { next(); }
                        }
                        args.mode = modes.shift();
                        if ($.uiBackCompat !== false && !defaultMode) {
                            if (elem.is(":hidden") ? mode === "hide" : mode === "show") {
                                elem[mode]();
                                done();
                            } else { effectMethod.call(elem[0], args, done); }
                        } else {
                            if (args.mode === "none") {
                                elem[mode]();
                                done();
                            } else { effectMethod.call(elem[0], args, cleanup); }
                        }
                    }
                    return queue === false ? this.each(prefilter).each(run) : this.queue(queueName, prefilter).queue(queueName, run);
                },
                show: (function(orig) {
                    return function(option) {
                        if (standardAnimationOption(option)) { return orig.apply(this, arguments); } else {
                            var args = _normalizeArguments.apply(this, arguments);
                            args.mode = "show";
                            return this.effect.call(this, args);
                        }
                    };
                })($.fn.show),
                hide: (function(orig) {
                    return function(option) {
                        if (standardAnimationOption(option)) { return orig.apply(this, arguments); } else {
                            var args = _normalizeArguments.apply(this, arguments);
                            args.mode = "hide";
                            return this.effect.call(this, args);
                        }
                    };
                })($.fn.hide),
                toggle: (function(orig) {
                    return function(option) {
                        if (standardAnimationOption(option) || typeof option === "boolean") { return orig.apply(this, arguments); } else {
                            var args = _normalizeArguments.apply(this, arguments);
                            args.mode = "toggle";
                            return this.effect.call(this, args);
                        }
                    };
                })($.fn.toggle),
                cssUnit: function(key) {
                    var style = this.css(key),
                        val = [];
                    $.each(["em", "px", "%", "pt"], function(i, unit) { if (style.indexOf(unit) > 0) { val = [parseFloat(style), unit]; } });
                    return val;
                },
                cssClip: function(clipObj) {
                    if (clipObj) {
                        return this.css("clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " +
                            clipObj.bottom + "px " + clipObj.left + "px)");
                    }
                    return parseClip(this.css("clip"), this);
                },
                transfer: function(options, done) {
                    var element = $(this),
                        target = $(options.to),
                        targetFixed = target.css("position") === "fixed",
                        body = $("body"),
                        fixTop = targetFixed ? body.scrollTop() : 0,
                        fixLeft = targetFixed ? body.scrollLeft() : 0,
                        endPosition = target.offset(),
                        animation = { top: endPosition.top - fixTop, left: endPosition.left - fixLeft, height: target.innerHeight(), width: target.innerWidth() },
                        startPosition = element.offset(),
                        transfer = $("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(options.className).css({ top: startPosition.top - fixTop, left: startPosition.left - fixLeft, height: element.innerHeight(), width: element.innerWidth(), position: targetFixed ? "fixed" : "absolute" }).animate(animation, options.duration, options.easing, function() { transfer.remove(); if ($.isFunction(done)) { done(); } });
                }
            });

            function parseClip(str, element) {
                var outerWidth = element.outerWidth(),
                    outerHeight = element.outerHeight(),
                    clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                    values = clipRegex.exec(str) || ["", 0, outerWidth, outerHeight, 0];
                return { top: parseFloat(values[1]) || 0, right: values[2] === "auto" ? outerWidth : parseFloat(values[2]), bottom: values[3] === "auto" ? outerHeight : parseFloat(values[3]), left: parseFloat(values[4]) || 0 };
            }
            $.fx.step.clip = function(fx) {
                if (!fx.clipInit) {
                    fx.start = $(fx.elem).cssClip();
                    if (typeof fx.end === "string") { fx.end = parseClip(fx.end, fx.elem); }
                    fx.clipInit = true;
                }
                $(fx.elem).cssClip({ top: fx.pos * (fx.end.top - fx.start.top) + fx.start.top, right: fx.pos * (fx.end.right - fx.start.right) + fx.start.right, bottom: fx.pos * (fx.end.bottom - fx.start.bottom) + fx.start.bottom, left: fx.pos * (fx.end.left - fx.start.left) + fx.start.left });
            };
        })();
        (function() {
            var baseEasings = {};
            $.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(i, name) { baseEasings[name] = function(p) { return Math.pow(p, i + 2); }; });
            $.extend(baseEasings, {
                Sine: function(p) { return 1 - Math.cos(p * Math.PI / 2); },
                Circ: function(p) { return 1 - Math.sqrt(1 - p * p); },
                Elastic: function(p) { return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15); },
                Back: function(p) { return p * p * (3 * p - 2); },
                Bounce: function(p) {
                    var pow2, bounce = 4;
                    while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
                    return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);
                }
            });
            $.each(baseEasings, function(name, easeIn) {
                $.easing["easeIn" + name] = easeIn;
                $.easing["easeOut" + name] = function(p) { return 1 - easeIn(1 - p); };
                $.easing["easeInOut" + name] = function(p) { return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2; };
            });
        })();
        var effect = $.effects;
    }));;
    /*!
     * jquery.requestanimationframe - 0.2.2
     * https://github.com/gnarf37/jquery-requestAnimationFrame
     * Requires jQuery 1.8+
     *
     * Copyright (c) 2016 Corey Frang
     * Licensed under the MIT license.
     */
    (function(factory) { if (typeof define === "function" && define.amd) { define(["jquery"], factory); } else { factory(jQuery); } })(function(jQuery) {
        if (Number(jQuery.fn.jquery.split(".")[0]) >= 3) {
            if (window.console && window.console.warn) {
                window.console.warn("The jquery.requestanimationframe plugin is not needed " +
                    "in jQuery 3.0 or newer as they handle it natively.");
            }
            return;
        }
        var animating;

        function raf() {
            if (animating) {
                window.requestAnimationFrame(raf);
                jQuery.fx.tick();
            }
        }
        if (window.requestAnimationFrame) {
            jQuery.fx.timer = function(timer) {
                if (timer() && jQuery.timers.push(timer) && !animating) {
                    animating = true;
                    raf();
                }
            };
            jQuery.fx.stop = function() { animating = false; };
        }
    });;
    /*!
     * jQuery Cookie Plugin v1.4.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2006, 2014 Klaus Hartl
     * Released under the MIT license
     */
    (function(factory) { if (typeof define === 'function' && define.amd) { define(['jquery'], factory); } else if (typeof exports === 'object') { factory(require('jquery')); } else { factory(jQuery); } }(function($) {
        var pluses = /\+/g;

        function encode(s) { return config.raw ? s : encodeURIComponent(s); }

        function decode(s) { return config.raw ? s : decodeURIComponent(s); }

        function stringifyCookieValue(value) { return encode(config.json ? JSON.stringify(value) : String(value)); }

        function parseCookieValue(s) {
            if (s.indexOf('"') === 0) { s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\'); }
            try { s = decodeURIComponent(s.replace(pluses, ' ')); return config.json ? JSON.parse(s) : s; } catch (e) {}
        }

        function read(s, converter) { var value = config.raw ? s : parseCookieValue(s); return $.isFunction(converter) ? converter(value) : value; }
        var config = $.cookie = function(key, value, options) {
            if (arguments.length > 1 && !$.isFunction(value)) {
                options = $.extend({}, config.defaults, options);
                if (typeof options.expires === 'number') {
                    var days = options.expires,
                        t = options.expires = new Date();
                    t.setTime(+t + days * 864e+5);
                }
                return (document.cookie = [encode(key), '=', stringifyCookieValue(value), options.expires ? '; expires=' + options.expires.toUTCString() : '', options.path ? '; path=' + options.path : '', options.domain ? '; domain=' + options.domain : '', options.secure ? '; secure' : ''].join(''));
            }
            var result = key ? undefined : {};
            var cookies = document.cookie ? document.cookie.split('; ') : [];
            for (var i = 0, l = cookies.length; i < l; i++) {
                var parts = cookies[i].split('=');
                var name = decode(parts.shift());
                var cookie = parts.join('=');
                if (key && key === name) { result = read(cookie, value); break; }
                if (!key && (cookie = read(cookie)) !== undefined) { result[name] = cookie; }
            }
            return result;
        };
        config.defaults = {};
        $.removeCookie = function(key, options) {
            if ($.cookie(key) === undefined) { return false; }
            $.cookie(key, '', $.extend({}, options, { expires: -1 }));
            return !$.cookie(key);
        };
    }));;
    (function($) {
        $.winWidth = function() { return Math.max(window.innerWidth || 0, document.documentElement.clientWidth); };
        $.winHeight = function() { return Math.max(window.innerHeight || 0, document.documentElement.clientHeight); };
        window.DEFAULT_AJAX_ERROR = gettext('Connection error');
        $.parseError = function(callback) {
            var final_callback = callback || function(response, status) { if (response && response.message) { alert(response.message); } else { alert(window.DEFAULT_AJAX_ERROR); } };
            return function(xhr, status) {
                if (xhr.statusText === 'abort') { return }
                if (xhr.responseText) {
                    try {
                        var response = JSON.parse(xhr.responseText + "");
                        final_callback.call(xhr, response, status);
                    } catch (err) { final_callback.call(xhr, '', status); }
                } else { final_callback.call(xhr, xhr.responseText, status); }
            };
        };
        var emptyHandler = $.noop;
        if (document.addEventListener) { if ('onwheel' in document) { document.addEventListener("wheel", emptyHandler); } else if ('onmousewheel' in document) { document.addEventListener("mousewheel", emptyHandler); } else { document.addEventListener("MozMousePixelScroll", emptyHandler); } } else { document.attachEvent("onmousewheel", emptyHandler); }
        window.Class = function(parent, class_constructor) {
            if (typeof class_constructor !== 'function') { throw Error('class-constructor function required'); }
            var name = class_constructor.name;
            if (name === undefined) { var match = /function ([^(]+)\(/ig.exec(class_constructor.toString()); if (match) { name = match[1]; } }
            if (!name) { throw Error('class-constructor should be a named function'); }
            var ClassObj = function() { return ClassObj.create.apply(null, arguments); };
            ClassObj.prototype = Object.create(parent && parent.prototype);
            ClassObj.prototype.constructor = ClassObj;
            ClassObj.superclass = parent;
            ClassObj.prototype.__name__ = class_constructor.name;
            ClassObj.create = function() {
                var obj = Object.create(ClassObj.prototype);
                obj.constructor = ClassObj;
                try { obj.init.apply(obj, arguments); return obj; } catch (err) { if (err instanceof ClassError) { obj.error(err.message); } else { throw err; } }
            };
            ClassObj.prototype.raise = function(message) { throw new ClassError(message); };
            ClassObj.prototype.error = function() {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(this.__name__ + ':');
                console.error.apply(console, args);
            };
            ClassObj.prototype.warn = function(message) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(this.__name__ + ':');
                console.warn.apply(console, args);
            };
            class_constructor(ClassObj.prototype, parent && parent.prototype);
            return ClassObj;
        };
        window.ClassError = function ClassError(message) { this.message = message; };
        window.ClassError.prototype = new Error();
        window.EventedObject = Class(Object, function EventedObject(cls, superclass) {
            cls.init = function() { this._events = {}; };
            cls.destroy = function() { this._events = {}; };
            cls._formatEventName = function(name) {
                name = $.trim(name).toLowerCase();
                if (name.indexOf(' ') >= 0) { this.raise('multiple events not allowed'); }
                var name_arr = name.split('.');
                return { name: name_arr.shift(), namespaces: name_arr };
            };
            cls._addEventHandler = function(name, handler, options) {
                var evt_info = this._formatEventName(name);
                if (!evt_info.name) { this.error('event name not found: ' + name); return this; }
                if (!handler) { this.error('event handler required'); return this; } else if (!$.isFunction(handler)) { this.error('event handler should be a function'); return this; }
                var evtRecord = $.extend(options, { type: evt_info.name, handler: handler, namespaces: evt_info.namespaces });
                if (evt_info.name in this._events) { this._events[evt_info.name].push(evtRecord); } else { this._events[evt_info.name] = [evtRecord]; }
                return this;
            };
            cls._isEveryNamespaces = function(record, namespaces) { if (!namespaces.length) return true; return namespaces.every(function(ns) { return record.namespaces.indexOf(ns) >= 0; }) };
            cls._isSomeNamespaces = function(record, namespaces) { if (!namespaces.length) return true; return namespaces.some(function(ns) { return record.namespaces.indexOf(ns) >= 0; }) };
            cls._removeEvents = function(evt_name, evt_list, evt_namespaces) {
                if (!evt_list || !evt_list.length) { return }
                if (!evt_namespaces.length) { this._events[evt_name] = []; } else {
                    var that = this;
                    this._events[evt_name] = evt_list.filter(function(record) { return !that._isSomeNamespaces(record, evt_namespaces); });
                }
            };
            cls.on = function(name, handler) { return this._addEventHandler(name, handler, { once: false }); };
            cls.one = function(name, handler) { return this._addEventHandler(name, handler, { once: true }); };
            cls.trigger = function() {
                var args = Array.prototype.slice.call(arguments);
                var name = args.shift();
                var evt_info = this._formatEventName(name);
                if (!evt_info.name) { this.error('event name not found: ' + name); return; }
                var evt_list = this._events[evt_info.name];
                if (!evt_list) { return; }
                var i = 0;
                var record;
                var result;
                while (record = evt_list[i++]) {
                    if (this._isEveryNamespaces(record, evt_info.namespaces)) {
                        var ret = record.handler.apply(this, args);
                        if (ret === false) { result = false; }
                        if (record.once) {
                            i--;
                            evt_list.splice(i, 1);
                        }
                    }
                }
                return result;
            };
            cls.off = function(name) {
                name = $.trim(name);
                if (!name || (name === '*')) { this._events = {}; return this; }
                var evt_info = this._formatEventName(name);
                if (evt_info.name) { var evt_list = this._events[evt_info.name]; if (evt_list) { this._removeEvents(evt_info.name, evt_list, evt_info.namespaces); } } else { for (var key in this._events) { if (this._events.hasOwnProperty(key)) { evt_list = this._events[key]; if (evt_list) { this._removeEvents(key, evt_list, evt_info.namespaces); } } } }
                return this;
            };
        });
        var handler = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60); };
        $.animation_frame = function(callback, element) { return $.proxy(handler, window, callback, element) };
        $.rared = function(callback, time) {
            var sleeping, sleeping_call, that, args;
            return function() {
                if (sleeping) {
                    sleeping_call = true;
                    that = this;
                    args = arguments;
                    return;
                }
                callback.apply(this, arguments);
                sleeping = setTimeout(function() {
                    if (sleeping_call) {
                        callback.apply(that, args);
                        sleeping_call = false;
                    }
                    sleeping = null;
                }, time);
            }
        };
        $.fn.onLoaded = function() {
            var permanent, callback;
            if (typeof arguments[0] === 'boolean') {
                permanent = arguments[0];
                callback = arguments[1];
            } else {
                permanent = false;
                callback = arguments[0];
            }
            if (!$.isFunction(callback)) { console.warn('$.onLoaded: callback required'); return }
            return this.each(function(i, image) {
                if (image.tagName !== 'IMG') { console.warn('$.onLoaded: not an image'); return }
                var $image = $(image);
                if (permanent) { $image.on('load', callback); }
                if (($image.prop('src') && $image.prop('complete')) || ($image.prop('naturalWidth') > 0)) { callback.call(image); } else if (!permanent) { $image.one('load', callback); }
            });
        };
        $.swapElements = function(elm1, elm2) {
            var parent1, next1, parent2, next2;
            parent1 = elm1.parentNode;
            next1 = elm1.nextSibling;
            parent2 = elm2.parentNode;
            next2 = elm2.nextSibling;
            parent1.insertBefore(elm2, next1);
            parent2.insertBefore(elm1, next2);
        };
        $.fn.getMaxHeight = function() {
            var max_height = 0;
            this.each(function(i, element) { var height = $(element).height(); if (height > max_height) { max_height = height; } });
            return max_height;
        };
        $.getSrc = function($image) { if (!$image.length) return; return $image.prop('currentSrc') || $image.prop('src'); };
        window.Size = Class(Object, function Size(cls, superclass) {
            cls.init = function(width, height) {
                this.width = this.source_width = parseInt(width) || 0;
                if (width <= 0) { return this.raise('width should be positive'); }
                this.height = this.source_height = parseInt(height) || 0;
                if (height <= 0) { return this.raise('height should be positive'); }
                this.aspect = this.width / this.height;
            };
            cls._heightByWidth = function(width) { return Math.floor(width / this.aspect); };
            cls._widthByHeight = function(height) { return Math.floor(height * this.aspect); };
            cls.setWidth = function(value) {
                value = parseInt(value) || 0;
                if (value <= 0) { return this.raise('width should be positive'); }
                this.width = value;
                this.height = this._heightByWidth(value);
            };
            cls.setHeight = function(value) {
                value = parseInt(value) || 0;
                if (value <= 0) { return this.raise('height should be positive'); }
                this.height = value;
                this.width = this._widthByHeight(value);
            };
            cls.maxWidth = function(value) { if (this.width > value) { this.setWidth(value); } };
            cls.maxHeight = function(value) { if (this.height > value) { this.setHeight(value); } };
        });
        window.canvasSize = function(img_width, img_height, max_width, max_height) {
            var size = Size(img_width, img_height);
            if (max_width) { size.maxWidth(max_width); }
            if (max_height) { size.maxHeight(max_height); }
            size.maxWidth(4096);
            size.maxHeight(4096);
            if ((size.width * size.height) > 5000000) { size.maxWidth(Math.floor(Math.sqrt(5000000 * size.aspect))); }
            return { width: size.width, height: size.height };
        };
        var base64Uint8Array = function(bytes) {
            var base64 = '';
            var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var byteLength = bytes.byteLength;
            var byteRemainder = byteLength % 3;
            var mainLength = byteLength - byteRemainder;
            var a, b, c, d;
            var chunk;
            for (var i = 0; i < mainLength; i = i + 3) {
                chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
                a = (chunk & 16515072) >> 18;
                b = (chunk & 258048) >> 12;
                c = (chunk & 4032) >> 6;
                d = chunk & 63;
                base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
            }
            if (byteRemainder === 1) {
                chunk = bytes[mainLength];
                a = (chunk & 252) >> 2;
                b = (chunk & 3) << 4;
                base64 += encodings[a] + encodings[b] + '=='
            } else if (byteRemainder === 2) {
                chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
                a = (chunk & 64512) >> 10;
                b = (chunk & 1008) >> 4;
                c = (chunk & 15) << 2;
                base64 += encodings[a] + encodings[b] + encodings[c] + '=';
            }
            return base64;
        };
        $.fileReaderDeferred = function(file) {
            var df = $.Deferred();
            if (!window.FileReader) { return df.reject('FileReader not supported'); }
            if (file instanceof Blob === false) { return df.reject('Not a file'); }
            var reader = new FileReader();
            var fileSize = file.size;
            var fileType = file.type;
            var chunkSize = 32 * 1024;
            var result = new Uint8Array(fileSize);
            var offset = 0;
            var readBlock = function() {
                var slice = file.slice(offset, offset + chunkSize);
                reader.readAsArrayBuffer(slice);
            };
            reader.onload = function(event) {
                if (offset >= fileSize) {
                    var data = base64Uint8Array(result);
                    result = null;
                    df.resolve('data:' + fileType + '; base64,' + data);
                    return;
                }
                var chunk = new Uint8Array(event.target.result);
                result.set(chunk, offset);
                offset += chunk.byteLength;
                setTimeout(readBlock, 0);
            };
            reader.onerror = function() { df.reject('can not read'); };
            readBlock();
            return df;
        };
        $.urlReaderDeferred = function(url) {
            var df = $.Deferred();
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            if (xhr.overrideMimeType) { xhr.overrideMimeType('text/plain; charset=x-user-defined'); }
            xhr.onreadystatechange = function() { if (this.readyState === 4 && this.status === 200) { df.resolve(this.responseText); } };
            xhr.onerror = function() { df.reject('can not read'); };
            xhr.send();
            return df;
        };
        $.loadImageDeferred = function(src) {
            var df = $.Deferred();
            var img = new Image();
            img.onload = function() { df.resolve(this); };
            img.onerror = function() { df.reject('Not image'); };
            img.src = src;
            return df;
        };
        $.imageToCanvas = function(source, max_width, max_height) {
            var canvas = document.createElement("canvas");
            $.extend(canvas, canvasSize(source.width, source.height, max_width, max_height));
            var context = canvas.getContext && canvas.getContext('2d');
            if (!context) { console.error('Canvas not supported'); return }
            context.drawImage(source, 0, 0, canvas.width, canvas.height);
            return canvas;
        };
        $.imageToCanvasDeferred = function(source, max_width, max_height) {
            var df = $.Deferred();
            var canvas = $.imageToCanvas(source);
            var source_size = { width: canvas.width, height: canvas.height };
            var context = canvas.getContext('2d');
            var target_size = canvasSize(canvas.width, canvas.height, max_width, max_height);
            var step_func = function(dim) { return Math.round(dim * 0.5); };
            var run;
            (run = function() {
                if (source_size.width <= target_size.width) { return df.resolve(canvas); }
                setTimeout(function() {
                    if (step_func(source_size.width) <= target_size.width) {
                        var temp_canvas = document.createElement("canvas");
                        temp_canvas.width = target_size.width;
                        temp_canvas.height = target_size.height;
                        temp_canvas.getContext('2d').drawImage(canvas, 0, 0, source_size.width, source_size.height, 0, 0, temp_canvas.width, temp_canvas.height);
                        canvas.src = 'about:blank';
                        canvas.width = 1;
                        canvas.height = 1;
                        canvas = temp_canvas;
                        source_size = target_size;
                    } else {
                        context.drawImage(canvas, 0, 0, source_size.width, source_size.height, 0, 0, step_func(source_size.width), step_func(source_size.height));
                        source_size.width = step_func(source_size.width);
                        source_size.height = step_func(source_size.height);
                    }
                    run();
                }, 0);
            })();
            return df;
        };
        $.previewCanvas = function(options) {
            var settings = $.extend({ source: null, width: 100, height: 100, crop: true, stretch: false, max_width: 0, max_height: 0, coords: null, offset: [0.5, 0.5], background: [255, 255, 255, 0] }, options);
            if (!settings.coords) { settings.coords = [0, 0, settings.source.width, settings.source.height]; }
            var coords_ratio = settings.coords[2] / settings.coords[3];
            if (!settings.offset) { settings.offset = [0.5, 0.5]; }
            if (!settings.background) { settings.background = [255, 255, 255, 0]; }
            settings.background[3] = (settings.background[3] / 256).toFixed(2);
            var target_size = [settings.width, settings.height];
            var final_w, final_h, final_l = 0,
                final_t = 0;
            var canvas = document.createElement("canvas");
            var context = canvas.getContext && canvas.getContext('2d');
            if (!context) { console.error('Canvas not supported'); return }
            if (settings.crop) {
                if (target_size[0] === 0) { target_size[0] = settings.coords[2]; }
                if (target_size[1] === 0) { target_size[1] = settings.coords[3]; }
                if (settings.stretch) {} else {
                    target_size[0] = Math.min(target_size[0], settings.coords[2]);
                    target_size[1] = Math.min(target_size[1], settings.coords[3]);
                }
                $.extend(canvas, canvasSize(target_size[0], target_size[1]));
                if ((target_size[0] === settings.coords[2]) && (target_size[1] === settings.coords[3])) {
                    final_w = target_size[0];
                    final_h = target_size[1];
                } else {
                    var target_ratio = target_size[0] / target_size[1];
                    if (coords_ratio >= target_ratio) {
                        final_h = target_size[1];
                        final_w = final_h * coords_ratio;
                        final_l = (target_size[0] - final_w) / 2;
                        final_w = Math.round(final_w);
                        final_l = Math.round(final_l);
                    } else {
                        final_w = target_size[0];
                        final_h = final_w / coords_ratio;
                        final_t = (target_size[1] - final_h) / 2;
                        final_h = Math.round(final_h);
                        final_t = Math.round(final_t);
                    }
                }
            } else {
                var image_size = Size(settings.coords[2], settings.coords[3]);
                var max_width = settings.max_width;
                var max_height = settings.max_height;
                max_width = Math.min(max_width || target_size[0], target_size[0] || max_width);
                max_height = Math.min(max_height || target_size[1], target_size[1] || max_height);
                if (settings.stretch) { if (max_width) { if (max_height) { var max_aspect = max_width / max_height; if (image_size.aspect > max_aspect) { image_size.setWidth(max_width) } else { image_size.setHeight(max_height); } } else { image_size.setWidth(max_width); } } else if (max_height) { image_size.setHeight(max_height); } } else {
                    if (max_width) { image_size.maxWidth(max_width); }
                    if (max_height) { image_size.maxHeight(max_height); }
                }
                if (target_size[0] === 0) { target_size[0] = image_size.width; }
                if (target_size[1] === 0) { target_size[1] = image_size.height; }
                $.extend(canvas, canvasSize(target_size[0], target_size[1]));
                context.fillStyle = 'rgba(' + settings.background.join(',') + ')';
                context.fillRect(0, 0, canvas.width, canvas.height);
                final_w = image_size.width;
                final_h = image_size.height;
                if (settings.center && (settings.center.length === 2)) {
                    final_l = Math.max(0, target_size[0] * settings.center[0] - final_w / 2);
                    final_t = Math.max(0, target_size[1] * settings.center[1] - final_h / 2);
                } else {
                    final_l = (target_size[0] - final_w) * settings.offset[0];
                    final_t = (target_size[1] - final_h) * settings.offset[1];
                }
            }
            context.drawImage(settings.source, settings.coords[0], settings.coords[1], settings.coords[2], settings.coords[3], final_l, final_t, final_w, final_h);
            return canvas;
        };
    })(jQuery);;
    (function($) {
        $(document).ajaxSend(function(event, xhr, settings) {
            if (!/^https?:\/\//i.test(settings.url)) {
                var csrf = $('input[name=csrfmiddlewaretoken]:eq(0)').val();
                if (!csrf) { csrf = $.cookie('csrftoken') }
                xhr.setRequestHeader("X-CSRFToken", csrf);
            }
        });
    })(jQuery);;
    (function($) {
        'use strict';
        var scrollWidth = (function() {
            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.overflowY = 'scroll';
            div.style.width = '20px';
            div.style.visibility = 'hidden';
            div.style.padding = '0';
            div.style.fontSize = '0';
            div.style.borderWidth = '0';
            document.body.appendChild(div);
            var result = div.offsetWidth - div.clientWidth;
            document.body.removeChild(div);
            return result;
        })();
        var $body = $(document.body);
        var currentPopup = null;
        var isIPhone = navigator.userAgent.match(/(iPhone|iPod|iPad)/i);
        window.getCurrentPopup = function() { return currentPopup; };
        window.Popup = Class(EventedObject, function Popup(cls, superclass) {
            cls.defaults = { classes: '', body_classes: '', content: '', speed: 200, easingShow: 'linear', easingHide: 'linear' };
            cls.CONTAINER_ID = 'popup-container';
            cls.WRAPPER_CLASS = 'popup-wrapper';
            cls.WINDOW_CLASS = 'popup-window';
            cls.CONTENT_CLASS = 'popup-content';
            cls.CLOSE_BUTTON_CLASS = 'close-popup';
            cls.BODY_OPENED_CLASS = 'popup-opened';
            cls.init = function(options) {
                superclass.init.call(this);
                this.opts = $.extend(true, {}, this.defaults, options);
                this._opened = false;
                this._visible = false;
            };
            cls.destroy = function() {
                this._beforeHide();
                this._showScrollbar();
                this._afterHide();
                superclass.destroy.call(this);
            };
            cls._createDOM = function() {
                this.$container = $('<div>').attr('id', this.CONTAINER_ID).hide();
                this.$windowWrapper = $('<div>').addClass(this.WRAPPER_CLASS);
                this.$window = $('<div>').addClass(this.WINDOW_CLASS);
                this.$content = $('<div>').addClass(this.CONTENT_CLASS);
                this.$window.append(this.$content);
                this.$windowWrapper.append(this.$window);
                this.$container.append(this.$windowWrapper);
                $body.append(this.$container);
                this.$container.addClass('popup ' + this.opts.classes);
                this.resetContent();
                this.extraDOM();
                this.trigger('ready');
            };
            cls._removeDOM = function() { $('#' + this.CONTAINER_ID).remove(); };
            cls.resetContent = function() {
                var content;
                if ($.isFunction(this.opts.content)) { content = this.opts.content.call(this); } else { content = this.opts.content; }
                if (content) {
                    this.$content.empty();
                    this.$content.html(content);
                }
            };
            cls.extraDOM = function() {};
            cls._hasScrollBar = function() { return document.body.scrollHeight > document.body.clientHeight; };
            cls._hideScrollbar = function() {
                var body_data = $body.data();
                var body_padding = parseInt($body.css('paddingRight')) || 0;
                body_data._popup_padding = body_padding;
                if (isIPhone) {
                    body_data._popup_scroll = $body.scrollTop();
                    $('#wrapper').css({ position: 'fixed', transform: 'translateY(' + (-body_data._popup_scroll) + 'px)' })
                }
                $body.addClass(this.BODY_OPENED_CLASS);
                if (this._hasScrollBar()) { $body.css({ paddingRight: body_padding + scrollWidth }); }
            };
            cls._showScrollbar = function() {
                var body_data = $body.data();
                if (body_data._popup_padding !== undefined) {
                    var body_padding = parseInt(body_data._popup_padding) || 0;
                    $body.css({ paddingRight: body_padding });
                }
                $body.removeClass(this.BODY_OPENED_CLASS);
                if (isIPhone) {
                    $('#wrapper').css({ position: '', transform: '' });
                    $body.scrollTop(body_data._popup_scroll || 0);
                }
                $body.removeData('_popup_padding _popup_scroll');
            };
            cls.is_opened = function() { return this._opened; };
            cls.is_visible = function() { return this._visible; };
            cls.show = function() {
                if (this.is_opened()) { return this; }
                if (this.trigger('before_show') === false) { return this; }
                var current = getCurrentPopup();
                if (current) {
                    current._beforeHide();
                    current._hideInstant();
                    try { this._createDOM(); } catch (err) {
                        this._showScrollbar();
                        this._removeDOM();
                        if (err instanceof ClassError) { this.error(err.message); } else { throw err; }
                        return this;
                    }
                    this._beforeShow();
                    this._showInstant();
                } else {
                    this._hideScrollbar();
                    try { this._createDOM(); } catch (err) {
                        this._showScrollbar();
                        this._removeDOM();
                        if (err instanceof ClassError) { this.error(err.message); } else { throw err; }
                        return this;
                    }
                    this._beforeShow();
                    this._showAnimation();
                }
                return this;
            };
            cls._beforeShow = function() {
                currentPopup = this;
                this._opened = true;
                if (this.opts.body_classes) { $body.addClass(this.opts.body_classes); }
            };
            cls._showAnimation = function() {
                var that = this;
                this.$container.stop(false, false).fadeIn({ duration: this.opts.speed, easing: this.opts.easingShow, complete: function() { that._afterShow(); } });
            };
            cls._showInstant = function() {
                this.$container.stop(false, false).show();
                this._afterShow();
            };
            cls._afterShow = function() {
                this._visible = true;
                var that = this;
                $(document).off('.popup.close').on('click.popup.close', '.' + this.CLOSE_BUTTON_CLASS, function() { that.hide(); });
                this.trigger('after_show');
            };
            cls.hide = function() {
                if (!this.is_opened()) { return this; }
                if (this.trigger('before_hide') === false) { return this; }
                this._beforeHide();
                this._hideAnimation();
                return this;
            };
            cls._beforeHide = function() {
                this._visible = false;
                $(document).off('.popup');
            };
            cls._hideAnimation = function() {
                var that = this;
                this.$container.stop(false, false).fadeOut({
                    duration: this.opts.speed,
                    easing: this.opts.easingHide,
                    complete: function() {
                        that._showScrollbar();
                        that._afterHide();
                    }
                });
            };
            cls._hideInstant = function() {
                this.$container.stop(false, false).hide();
                this._afterHide();
            };
            cls._afterHide = function() {
                this._opened = false;
                currentPopup = null;
                if (this.opts.body_classes) { $body.removeClass(this.opts.body_classes); }
                this.trigger('after_hide');
                this._removeDOM();
            };
        });
        window.OverlayedPopup = Class(Popup, function OverlayedPopup(cls, superclass) {
            cls.defaults = $.extend({}, superclass.defaults, { closeButton: true, hideOnClick: true });
            cls.OVERLAY_ID = 'popup-overlay';
            cls.extraDOM = function() {
                superclass.extraDOM.call(this);
                this.$overlay = $('<div>').attr('id', this.OVERLAY_ID).hide();
                this.$overlay.addClass(this.opts.classes);
                this.$container.before(this.$overlay);
                if (this.opts.closeButton) {
                    this.$closeBtn = $('<div>').addClass(this.CLOSE_BUTTON_CLASS).addClass('popup-close-button');
                    this.addCloseButton(this.$closeBtn);
                }
                if (this.opts.closeButton || this.opts.hideOnClick) {
                    var that = this;
                    $(document).on('keyup.popup', function(event) { if (event.which === 27 && that.opts.hideOnClick) { that.hide(); } });
                }
            };
            cls._removeDOM = function() {
                $('#' + this.OVERLAY_ID).remove();
                superclass._removeDOM.call(this);
            };
            cls.addCloseButton = function($button) { this.$window.prepend($button); };
            cls.isOutClick = function($target) { return $target.closest('body').length && !$target.closest(this.$window).length; };
            cls._afterShow = function() { superclass._afterShow.call(this); var that = this; if (this.opts.hideOnClick) { $(document).on('click.popup', function(evt) { if (that.isOutClick($(evt.target)) && that.opts.hideOnClick) { that.hide(); } }); } };
            cls._showAnimation = function() {
                var that = this;
                this.$overlay.stop(false, false).fadeIn({ duration: this.opts.speed, easing: this.opts.easingShow });
                this.$container.stop(false, false).fadeIn({ duration: this.opts.speed, easing: this.opts.easingShow, complete: function() { that._afterShow(); } });
            };
            cls._showInstant = function() {
                this.$overlay.stop(false, false).show();
                superclass._showInstant.call(this);
            };
            cls._hideAnimation = function() {
                var that = this;
                this.$overlay.stop(false, false).fadeOut({ duration: this.opts.speed, easing: this.opts.easingHide });
                this.$container.stop(false, false).fadeOut({
                    duration: this.opts.speed,
                    easing: this.opts.easingHide,
                    complete: function() {
                        that._showScrollbar();
                        that._afterHide();
                    }
                });
            };
            cls._hideInstant = function() {
                this.$overlay.stop(false, false).hide();
                superclass._hideInstant.call(this);
            };
        });
        $.popup = function(options) { if (options === undefined) { return getCurrentPopup(); } else { return OverlayedPopup(options); } };
    })(jQuery);;
    (function() {
        var addPreloader = function($container) {
            var $preloader = $('<div>').addClass('preloader');
            $container.append($preloader);
        };
        $.preloader = function(options) { var opts = $.extend(true, { classes: 'popup-preloader', content: function() { addPreloader(this.$content); }, closeButton: false, hideOnClick: false }, options); var popup = OverlayedPopup(opts); return popup && popup.show(); };
        $.popup.showPreloader = function() {
            var popup = $.popup();
            if (!popup) { return }
            var $preloaderHolder = popup.$window.find('.preloader-overlay');
            if (!$preloaderHolder.length) {
                $preloaderHolder = $('<div>').addClass('preloader-overlay').appendTo(popup.$window);
                addPreloader($preloaderHolder);
            }
            if (typeof popup._origHideOnClick === "undefined") {
                popup._origHideOnClick = popup.opts.hideOnClick;
                popup.opts.hideOnClick = false;
            }
            popup.$container.find('.' + popup.CLOSE_BUTTON_CLASS).hide();
            popup.$container.addClass('popup-preloader-overlay');
        };
        $.popup.hidePreloader = function() {
            var popup = $.popup();
            if (!popup) { return }
            if (typeof popup._origHideOnClick !== "undefined") {
                popup.opts.hideOnClick = popup._origHideOnClick;
                delete popup._origHideOnClick;
            }
            popup.$container.find('.' + popup.CLOSE_BUTTON_CLASS).show();
            popup.$container.removeClass('popup-preloader-overlay');
        }
    })(jQuery);;
    (function($) {
        'use strict';
        var Inspector = function() {};
        Inspector.prototype.defaults = { checkOnInit: true, beforeCheck: $.noop, afterCheck: $.noop };
        Inspector.prototype.INSPECT_CLASS = '';
        Inspector.prototype.STATE_DATA_KEY = 'inspector_state';
        Inspector.prototype.OPTS_DATA_KEY = 'inspector_opts';
        Inspector.prototype.getOpts = function($element) { return $element.first().data(this.OPTS_DATA_KEY) || this.defaults; };
        Inspector.prototype._setOpts = function($element, opts) { $element.first().data(this.OPTS_DATA_KEY, opts).addClass(this.INSPECT_CLASS); };
        Inspector.prototype.getState = function($element) { return $element.first().data(this.STATE_DATA_KEY); };
        Inspector.prototype._setState = function($element, state) { $element.first().data(this.STATE_DATA_KEY, state); };
        Inspector.prototype._beforeCheck = function($element, opts) { opts.beforeCheck.call(this, $element, opts); };
        Inspector.prototype._check = function($element, opts) { throw Error('not implemented'); };
        Inspector.prototype._afterCheck = function($element, opts, state) {
            opts.afterCheck.call(this, $element, opts, state);
            this._setState($element, state);
        };
        Inspector.prototype.check = function(elements, options) {
            var that = this;
            var $elements = $(elements);
            $elements.each(function(i, elem) {
                var $elem = $(elem);
                var opts = $.extend({}, that.getOpts($elem), options);
                that._beforeCheck($elem, opts);
                var state = that._check($elem, opts);
                that._afterCheck($elem, opts, state);
            });
        };
        Inspector.prototype.inspect = function(selector, options) {
            var that = this;
            var $elements = $(selector);
            var opts = $.extend({}, this.defaults, options);
            this.ignore(selector);
            $elements.each(function(i, elem) {
                var $elem = $(elem);
                that._setOpts($elem, opts);
                that._setState($elem, null);
                if (opts.checkOnInit) { that.check($elem); }
            });
            return $elements;
        };
        Inspector.prototype.ignore = function(selector) {
            var that = this;
            $(selector).removeClass(this.INSPECT_CLASS).each(function(i, elem) {
                var $elem = $(elem);
                $elem.removeData(that.OPTS_DATA_KEY + ' ' + that.STATE_DATA_KEY);
            });
        };
        Inspector.prototype.checkAll = function() { this.check('.' + this.INSPECT_CLASS); };
        var MediaInspector = function() {};
        MediaInspector.prototype = Object.create(Inspector.prototype);
        MediaInspector.prototype.constructor = MediaInspector;
        MediaInspector.prototype.defaults = $.extend({}, Inspector.prototype.defaults, { point: 0 });
        MediaInspector.prototype.INSPECT_CLASS = 'media-inspect';
        MediaInspector.prototype.STATE_DATA_KEY = 'media_inspector_state';
        MediaInspector.prototype.OPTS_DATA_KEY = 'media_inspector_opts';
        MediaInspector.prototype._check = function($element, opts) { return $.winWidth() >= opts.point; };
        $.mediaInspector = new MediaInspector();
        var BackgroundInspector = function() {};
        BackgroundInspector.prototype = Object.create(Inspector.prototype);
        BackgroundInspector.prototype.constructor = BackgroundInspector;
        BackgroundInspector.prototype.defaults = $.extend({}, Inspector.prototype.defaults, { getContainer: function($element) { return $element.parent(); }, afterCheck: function($elem, opts, state) { if (state) { $elem.css({ width: 'auto', height: '100.6%' }); } else { $elem.css({ width: '100.6%', height: 'auto' }); } } });
        BackgroundInspector.prototype.INSPECT_CLASS = 'bg-inspect';
        BackgroundInspector.prototype.STATE_DATA_KEY = 'bg_inspector_state';
        BackgroundInspector.prototype.OPTS_DATA_KEY = 'bg_inspector_opts';
        BackgroundInspector.prototype._beforeCheck = function($element, opts) {
            Inspector.prototype._beforeCheck.call(this, $element, opts);
            $element.data('bginspector_inlines', $element.get(0).style.cssText);
            $element.css({ width: '', height: '' });
        };
        BackgroundInspector.prototype._check = function($element, opts) {
            if (($element.prop('tagName') === 'IMG') && !$element.prop('naturalWidth')) {
                var that = this;
                $element.onLoaded(function() { if ($element.prop('naturalWidth')) { that.check(this); } });
            }
            var $parent = opts.getContainer.call(this, $element);
            var elem_asp = $element.outerWidth() / $element.outerHeight();
            var parent_asp = $parent.outerWidth() / $parent.outerHeight();
            $element.data('bginspector_aspect', elem_asp);
            $parent.data('bginspector_aspect', parent_asp);
            return elem_asp >= parent_asp;
        };
        BackgroundInspector.prototype._afterCheck = function($element, opts, state) {
            $element.get(0).style.cssText = $element.data('bginspector_inlines') || '';
            Inspector.prototype._afterCheck.call(this, $element, opts, state);
        };
        $.bgInspector = new BackgroundInspector();
        var VisibilityInspector = function() {};
        VisibilityInspector.prototype = Object.create(Inspector.prototype);
        VisibilityInspector.prototype.constructor = VisibilityInspector;
        VisibilityInspector.prototype.defaults = $.extend({}, Inspector.prototype.defaults, { top: 1, right: 1, bottom: 1, left: 1 });
        VisibilityInspector.prototype.INSPECT_CLASS = 'visbility-inspect';
        VisibilityInspector.prototype.STATE_DATA_KEY = 'visibility_inspector_state';
        VisibilityInspector.prototype.OPTS_DATA_KEY = 'visibility_inspector_opts';
        VisibilityInspector.prototype._check = function($element, opts) { var vpWidth = $.winWidth(); var vpHeight = $.winHeight(); var rect = $element.get(0).getBoundingClientRect(); var invisible_by_top = (rect.top > (vpHeight - opts.top)); var invisible_by_bottom = (rect.bottom < opts.bottom); var invisible_by_left = (rect.left > (vpWidth - opts.left)); var invisible_by_right = (rect.right < opts.right); return !invisible_by_top && !invisible_by_bottom && !invisible_by_left && !invisible_by_right; };
        VisibilityInspector.prototype._afterCheck = function($element, opts, state) {
            var old_state = this.getState($element);
            if (old_state !== state) { if (state) { $element.trigger('appear'); } else { $element.trigger('disappear'); } }
            Inspector.prototype._afterCheck.call(this, $element, opts, state);
        };
        $.visibilityInspector = new VisibilityInspector();
        $(window).on('scroll.visibility_inspector', $.rared(function() { $.visibilityInspector.checkAll(); }, 100)).on('resize.inspector', $.rared(function() {
            $.mediaInspector.checkAll();
            $.visibilityInspector.checkAll();
            $.bgInspector.checkAll();
        }, 60)).on('load.inspector', function() {
            $.mediaInspector.checkAll();
            $.visibilityInspector.checkAll();
            $.bgInspector.checkAll();
        });
    })(jQuery);;
    /*!
     * jQuery.scrollTo
     * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
     * Licensed under MIT
     * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
     * @projectDescription Easy element scrolling using jQuery.
     * @author Ariel Flesler
     * @version 1.5.2-beta
     */
    (function($) {
        var $scrollTo = $.scrollTo = function(target, duration, settings) { return $(window).scrollTo(target, duration, settings); };
        $scrollTo.defaults = { axis: 'xy', duration: 0, limit: true };
        $.fn.scrollTo = function(target, duration, settings) {
            if (typeof duration === 'object') {
                settings = duration;
                duration = 0;
            }
            if (typeof settings === 'function') { settings = { onAfter: settings }; }
            if (target === 'max') { target = 9e9; }
            settings = $.extend({}, $scrollTo.defaults, settings);
            duration = duration || settings.duration;
            settings.queue = settings.queue && settings.axis.length > 1;
            if (settings.queue) { duration /= 2; }
            settings.offset = both(settings.offset);
            settings.over = both(settings.over);
            return this._scrollable().each(function() {
                if (target === null) return;
                var elem = this,
                    $elem = $(elem),
                    targ = target,
                    toff, attr = {},
                    win = $elem.is('html,body');
                switch (typeof targ) {
                    case 'number':
                    case 'string':
                        if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) { targ = both(targ); break; }
                        targ = win ? $(targ) : $(targ, this);
                        if (!targ.length) return;
                    case 'object':
                        if (targ.is || targ.style) { toff = (targ = $(targ)).offset(); }
                }
                var offset = $.isFunction(settings.offset) && settings.offset(elem, targ) || settings.offset;
                $.each(settings.axis.split(''), function(i, axis) {
                    var Pos = axis === 'x' ? 'Left' : 'Top',
                        pos = Pos.toLowerCase(),
                        key = 'scroll' + Pos,
                        old = elem[key],
                        max = $scrollTo.max(elem, axis);
                    if (toff) {
                        attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
                        if (settings.margin) {
                            attr[key] -= parseInt(targ.css('margin' + Pos), 10) || 0;
                            attr[key] -= parseInt(targ.css('border' + Pos + 'Width'), 10) || 0;
                        }
                        attr[key] += offset[pos] || 0;
                        if (settings.over[pos]) { attr[key] += targ[axis === 'x' ? 'width' : 'height']() * settings.over[pos]; }
                    } else {
                        var val = targ[pos];
                        attr[key] = val.slice && val.slice(-1) === '%' ? parseFloat(val) / 100 * max : val;
                    }
                    if (settings.limit && /^\d+$/.test(attr[key])) { attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max); }
                    if (!i && settings.queue) {
                        if (old !== attr[key]) { animate(settings.onAfterFirst); }
                        delete attr[key];
                    }
                });
                animate(settings.onAfter);

                function animate(callback) { $elem.animate(attr, duration, settings.easing, callback && function() { callback.call(this, targ, settings); }); }
            }).end();
        };
        $scrollTo.max = function(elem, axis) {
            var Dim = axis === 'x' ? 'Width' : 'Height',
                scroll = 'scroll' + Dim;
            if (!$(elem).is('html,body'))
                return elem[scroll] - $(elem)[Dim.toLowerCase()]();
            var size = 'client' + Dim,
                html = elem.ownerDocument.documentElement,
                body = elem.ownerDocument.body;
            return Math.max(html[scroll], body[scroll]) - Math.min(html[size], body[size]);
        };
        $.fn._scrollable = function() {
            return this.map(function() {
                var elem = this,
                    isWin = !elem.nodeName || $.inArray(elem.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) !== -1;
                if (!isWin) return elem;
                var doc = (elem.contentWindow || elem).document || elem.ownerDocument || elem;
                if (/iemobile/i.test(navigator.userAgent)) { return doc.documentElement; }
                if (/chrome|applewebkit/i.test(navigator.userAgent)) { return scrolls(doc.body) || doc.documentElement; }
                return doc.compatMode === 'BackCompat' ? doc.body : doc.documentElement;
            });
        };

        function scrolls(elem) {
            if (elem.scrollTop) return elem;
            if ($.data(elem, '_scrolls')) return elem;
            elem.scrollTop++;
            if (elem.scrollTop === 1) {
                $.data(elem, '_scrolls', true);
                elem.scrollTop = 0;
                return elem;
            }
            return null;
        }

        function both(val) { return $.isFunction(val) || $.isPlainObject(val) ? val : { top: val, left: val }; }
        return $scrollTo;
    })(jQuery);;
    /*!
     * FitVids 1.1
     *
     * Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
     * Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
     * Released under the WTFPL license - http://sam.zoy.org/wtfpl/
     *
     */
    ;
    (function($) {
        'use strict';
        $.fn.fitVids = function(options) {
            var settings = { customSelector: null, ignore: null };
            if (!document.getElementById('fit-vids-style')) {
                var head = document.head || document.getElementsByTagName('head')[0];
                var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
                var div = document.createElement("div");
                div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
                head.appendChild(div.childNodes[1]);
            }
            if (options) { $.extend(settings, options); }
            return this.each(function() {
                var selectors = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', 'object', 'embed'];
                if (settings.customSelector) { selectors.push(settings.customSelector); }
                var ignoreList = '.fitvidsignore';
                if (settings.ignore) { ignoreList = ignoreList + ', ' + settings.ignore; }
                var $allVideos = $(this).find(selectors.join(','));
                $allVideos = $allVideos.not('object object');
                $allVideos = $allVideos.not(ignoreList);
                $allVideos.each(function(count) {
                    var $this = $(this);
                    if ($this.parents(ignoreList).length > 0) { return; }
                    if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
                    if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width')))) {
                        $this.attr('height', 9);
                        $this.attr('width', 16);
                    }
                    var height = (this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10)))) ? parseInt($this.attr('height'), 10) : $this.height(),
                        width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
                        aspectRatio = height / width;
                    if (!$this.attr('id')) {
                        var videoID = 'fitvid' + count;
                        $this.attr('id', videoID);
                    }
                    $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + '%');
                    $this.removeAttr('height').removeAttr('width');
                });
            });
        };
    })(window.jQuery || window.Zepto);;
    (function($) {
        'use strict';
        var cut_description = function(element) {
            var i = 0;
            var child;
            var description = '';
            var childs = element.childNodes;
            while (child = childs[i]) {
                if (child.nodeType === 3) {
                    description += child.data;
                    element.removeChild(child);
                } else if (child.tagName === 'BR') {
                    if (description) { description += child.outerHTML; }
                    element.removeChild(child);
                } else if (child.tagName === 'SPAN') {
                    var text = cut_description(child);
                    if (text) { description += text; }
                    element.removeChild(child);
                } else { i++ }
            }
            return $.trim(description).replace(/[\n\r]+/g, '<br>');
        };
        var decode_description = function($element) {
            var description = $element.data('description') || '';
            if (!description) { return ''; }
            description = decodeURIComponent(atob(description));
            return $.trim(description).replace(/[\n\r]+/g, '<br>');
        };
        window.prepareTextBlocks = function($blocks) {
            $blocks.each(function() {
                var $text_block = $(this);
                $text_block.find('table').each(function() { $(this).wrap($('<div>').addClass('page-table')) });
                $text_block.find('.simple-photo').each(function() {
                    var $image = $(this);
                    var $block = $image.parent();
                    var description = cut_description($block.get(0)) || decode_description($image);
                    if (!description) return;
                    $block.append($('<span>').addClass('object-description').html(description));
                });
                $text_block.find('.single-image').each(function() {
                    var $block = $(this);
                    var $image = $block.find('img').first();
                    var description = cut_description($block.get(0)) || decode_description($image);
                    if (!description) return;
                    $block.replaceWith($('<figure>').addClass($block.attr('class')).append($image, $('<figcaption>').addClass('object-description').html(description)));
                });
                $text_block.find('.page-video').each(function() {
                    var description = cut_description(this);
                    if (!description) return;
                    $(this).append($('<span>').addClass('object-description').html(description))
                }).fitVids();
                $text_block.find('.page-images.multi-image').each(function() {
                    var description = cut_description(this);
                    $(this).find('img').wrap('<div class="slider-item">').each(function() { var $image = $(this); var description = decode_description($image); if (description) { $image.after($('<div>').addClass('item-description').html(description)); } });
                    var slider = Slider(this, { sliderHeight: Slider.prototype.HEIGHT_CURRENT }).attachPlugins([SliderSideAnimation({}), SliderSideShortestAnimation({}), SliderDragPlugin({}), SliderControlsPlugin({ animationName: 'side-shortest' }), SliderNavigationPlugin({ animationName: 'side' })]);
                    slider.$root.on('click', '.slider-item', function() { slider.slideNext('side-shortest', true); });
                    if (description) { slider.$root.append($('<div>').addClass('object-description').html(description)) }
                });
            });
        };
        $(document).ready(function() { prepareTextBlocks($('.text-styles')); });
    })(jQuery);;
    (function(global, factory) { typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.Swiper = factory()); }(this, (function() {
        'use strict';
        var doc = (typeof document === 'undefined') ? { body: {}, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, activeElement: { blur: function blur() {}, nodeName: '', }, querySelector: function querySelector() { return null; }, querySelectorAll: function querySelectorAll() { return []; }, getElementById: function getElementById() { return null; }, createEvent: function createEvent() { return { initEvent: function initEvent() {}, }; }, createElement: function createElement() { return { children: [], childNodes: [], style: {}, setAttribute: function setAttribute() {}, getElementsByTagName: function getElementsByTagName() { return []; }, }; }, location: { hash: '' }, } : document;
        var win = (typeof window === 'undefined') ? { document: doc, navigator: { userAgent: '', }, location: {}, history: {}, CustomEvent: function CustomEvent() { return this; }, addEventListener: function addEventListener() {}, removeEventListener: function removeEventListener() {}, getComputedStyle: function getComputedStyle() { return { getPropertyValue: function getPropertyValue() { return ''; }, }; }, Image: function Image() {}, Date: function Date() {}, screen: {}, setTimeout: function setTimeout() {}, clearTimeout: function clearTimeout() {}, } : window;
        var Dom7 = function Dom7(arr) {
            var self = this;
            for (var i = 0; i < arr.length; i += 1) { self[i] = arr[i]; }
            self.length = arr.length;
            return this;
        };

        function $(selector, context) {
            var arr = [];
            var i = 0;
            if (selector && !context) { if (selector instanceof Dom7) { return selector; } }
            if (selector) {
                if (typeof selector === 'string') {
                    var els;
                    var tempParent;
                    var html = selector.trim();
                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                        var toCreate = 'div';
                        if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
                        if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
                        if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
                        if (html.indexOf('<option') === 0) { toCreate = 'select'; }
                        tempParent = doc.createElement(toCreate);
                        tempParent.innerHTML = html;
                        for (i = 0; i < tempParent.childNodes.length; i += 1) { arr.push(tempParent.childNodes[i]); }
                    } else {
                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) { els = [doc.getElementById(selector.trim().split('#')[1])]; } else { els = (context || doc).querySelectorAll(selector.trim()); }
                        for (i = 0; i < els.length; i += 1) { if (els[i]) { arr.push(els[i]); } }
                    }
                } else if (selector.nodeType || selector === win || selector === doc) { arr.push(selector); } else if (selector.length > 0 && selector[0].nodeType) { for (i = 0; i < selector.length; i += 1) { arr.push(selector[i]); } }
            }
            return new Dom7(arr);
        }
        $.fn = Dom7.prototype;
        $.Class = Dom7;
        $.Dom7 = Dom7;

        function unique(arr) {
            var uniqueArray = [];
            for (var i = 0; i < arr.length; i += 1) { if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); } }
            return uniqueArray;
        }

        function addClass(className) {
            var this$1 = this;
            if (typeof className === 'undefined') { return this; }
            var classes = className.split(' ');
            for (var i = 0; i < classes.length; i += 1) { for (var j = 0; j < this.length; j += 1) { if (typeof this$1[j] !== 'undefined' && typeof this$1[j].classList !== 'undefined') { this$1[j].classList.add(classes[i]); } } }
            return this;
        }

        function removeClass(className) {
            var this$1 = this;
            var classes = className.split(' ');
            for (var i = 0; i < classes.length; i += 1) { for (var j = 0; j < this.length; j += 1) { if (typeof this$1[j] !== 'undefined' && typeof this$1[j].classList !== 'undefined') { this$1[j].classList.remove(classes[i]); } } }
            return this;
        }

        function hasClass(className) {
            if (!this[0]) { return false; }
            return this[0].classList.contains(className);
        }

        function toggleClass(className) {
            var this$1 = this;
            var classes = className.split(' ');
            for (var i = 0; i < classes.length; i += 1) { for (var j = 0; j < this.length; j += 1) { if (typeof this$1[j] !== 'undefined' && typeof this$1[j].classList !== 'undefined') { this$1[j].classList.toggle(classes[i]); } } }
            return this;
        }

        function attr(attrs, value) {
            var arguments$1 = arguments;
            var this$1 = this;
            if (arguments.length === 1 && typeof attrs === 'string') {
                if (this[0]) { return this[0].getAttribute(attrs); }
                return undefined;
            }
            for (var i = 0; i < this.length; i += 1) {
                if (arguments$1.length === 2) { this$1[i].setAttribute(attrs, value); } else {
                    for (var attrName in attrs) {
                        this$1[i][attrName] = attrs[attrName];
                        this$1[i].setAttribute(attrName, attrs[attrName]);
                    }
                }
            }
            return this;
        }

        function removeAttr(attr) {
            var this$1 = this;
            for (var i = 0; i < this.length; i += 1) { this$1[i].removeAttribute(attr); }
            return this;
        }

        function data(key, value) {
            var this$1 = this;
            var el;
            if (typeof value === 'undefined') {
                el = this[0];
                if (el) {
                    if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) { return el.dom7ElementDataStorage[key]; }
                    var dataKey = el.getAttribute(("data-" + key));
                    if (dataKey) { return dataKey; }
                    return undefined;
                }
                return undefined;
            }
            for (var i = 0; i < this.length; i += 1) {
                el = this$1[i];
                if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
                el.dom7ElementDataStorage[key] = value;
            }
            return this;
        }

        function transform(transform) {
            var this$1 = this;
            for (var i = 0; i < this.length; i += 1) {
                var elStyle = this$1[i].style;
                elStyle.webkitTransform = transform;
                elStyle.transform = transform;
            }
            return this;
        }

        function transition(duration) {
            var this$1 = this;
            if (typeof duration !== 'string') { duration = duration + "ms"; }
            for (var i = 0; i < this.length; i += 1) {
                var elStyle = this$1[i].style;
                elStyle.webkitTransitionDuration = duration;
                elStyle.transitionDuration = duration;
            }
            return this;
        }

        function on() {
            var this$1 = this;
            var assign;
            var args = [],
                len = arguments.length;
            while (len--) args[len] = arguments[len];
            var eventType = args[0];
            var targetSelector = args[1];
            var listener = args[2];
            var capture = args[3];
            if (typeof args[1] === 'function') {
                (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
                targetSelector = undefined;
            }
            if (!capture) { capture = false; }

            function handleLiveEvent(e) {
                var target = e.target;
                if (!target) { return; }
                var eventData = e.target.dom7EventData || [];
                if (eventData.indexOf(e) < 0) { eventData.unshift(e); }
                if ($(target).is(targetSelector)) { listener.apply(target, eventData); } else { var parents = $(target).parents(); for (var k = 0; k < parents.length; k += 1) { if ($(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); } } }
            }

            function handleEvent(e) {
                var eventData = e && e.target ? e.target.dom7EventData || [] : [];
                if (eventData.indexOf(e) < 0) { eventData.unshift(e); }
                listener.apply(this, eventData);
            }
            var events = eventType.split(' ');
            var j;
            for (var i = 0; i < this.length; i += 1) {
                var el = this$1[i];
                if (!targetSelector) {
                    for (j = 0; j < events.length; j += 1) {
                        var event = events[j];
                        if (!el.dom7Listeners) { el.dom7Listeners = {}; }
                        if (!el.dom7Listeners[event]) { el.dom7Listeners[event] = []; }
                        el.dom7Listeners[event].push({ listener: listener, proxyListener: handleEvent, });
                        el.addEventListener(event, handleEvent, capture);
                    }
                } else {
                    for (j = 0; j < events.length; j += 1) {
                        var event$1 = events[j];
                        if (!el.dom7LiveListeners) { el.dom7LiveListeners = {}; }
                        if (!el.dom7LiveListeners[event$1]) { el.dom7LiveListeners[event$1] = []; }
                        el.dom7LiveListeners[event$1].push({ listener: listener, proxyListener: handleLiveEvent, });
                        el.addEventListener(event$1, handleLiveEvent, capture);
                    }
                }
            }
            return this;
        }

        function off() {
            var this$1 = this;
            var assign;
            var args = [],
                len = arguments.length;
            while (len--) args[len] = arguments[len];
            var eventType = args[0];
            var targetSelector = args[1];
            var listener = args[2];
            var capture = args[3];
            if (typeof args[1] === 'function') {
                (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
                targetSelector = undefined;
            }
            if (!capture) { capture = false; }
            var events = eventType.split(' ');
            for (var i = 0; i < events.length; i += 1) {
                var event = events[i];
                for (var j = 0; j < this.length; j += 1) {
                    var el = this$1[j];
                    var handlers = (void 0);
                    if (!targetSelector && el.dom7Listeners) { handlers = el.dom7Listeners[event]; } else if (targetSelector && el.dom7LiveListeners) { handlers = el.dom7LiveListeners[event]; }
                    if (handlers && handlers.length) {
                        for (var k = handlers.length - 1; k >= 0; k -= 1) {
                            var handler = handlers[k];
                            if (listener && handler.listener === listener) {
                                el.removeEventListener(event, handler.proxyListener, capture);
                                handlers.splice(k, 1);
                            } else if (!listener) {
                                el.removeEventListener(event, handler.proxyListener, capture);
                                handlers.splice(k, 1);
                            }
                        }
                    }
                }
            }
            return this;
        }

        function trigger() {
            var this$1 = this;
            var args = [],
                len = arguments.length;
            while (len--) args[len] = arguments[len];
            var events = args[0].split(' ');
            var eventData = args[1];
            for (var i = 0; i < events.length; i += 1) {
                var event = events[i];
                for (var j = 0; j < this.length; j += 1) {
                    var el = this$1[j];
                    var evt = (void 0);
                    try { evt = new win.CustomEvent(event, { detail: eventData, bubbles: true, cancelable: true, }); } catch (e) {
                        evt = doc.createEvent('Event');
                        evt.initEvent(event, true, true);
                        evt.detail = eventData;
                    }
                    el.dom7EventData = args.filter(function(data, dataIndex) { return dataIndex > 0; });
                    el.dispatchEvent(evt);
                    el.dom7EventData = [];
                    delete el.dom7EventData;
                }
            }
            return this;
        }

        function transitionEnd(callback) {
            var events = ['webkitTransitionEnd', 'transitionend'];
            var dom = this;
            var i;

            function fireCallBack(e) {
                if (e.target !== this) { return; }
                callback.call(this, e);
                for (i = 0; i < events.length; i += 1) { dom.off(events[i], fireCallBack); }
            }
            if (callback) { for (i = 0; i < events.length; i += 1) { dom.on(events[i], fireCallBack); } }
            return this;
        }

        function outerWidth(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) { var styles = this.styles(); return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left')); }
                return this[0].offsetWidth;
            }
            return null;
        }

        function outerHeight(includeMargins) {
            if (this.length > 0) {
                if (includeMargins) { var styles = this.styles(); return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom')); }
                return this[0].offsetHeight;
            }
            return null;
        }

        function offset() {
            if (this.length > 0) { var el = this[0]; var box = el.getBoundingClientRect(); var body = doc.body; var clientTop = el.clientTop || body.clientTop || 0; var clientLeft = el.clientLeft || body.clientLeft || 0; var scrollTop = el === win ? win.scrollY : el.scrollTop; var scrollLeft = el === win ? win.scrollX : el.scrollLeft; return { top: (box.top + scrollTop) - clientTop, left: (box.left + scrollLeft) - clientLeft, }; }
            return null;
        }

        function styles() {
            if (this[0]) { return win.getComputedStyle(this[0], null); }
            return {};
        }

        function css(props, value) {
            var this$1 = this;
            var i;
            if (arguments.length === 1) {
                if (typeof props === 'string') { if (this[0]) { return win.getComputedStyle(this[0], null).getPropertyValue(props); } } else {
                    for (i = 0; i < this.length; i += 1) { for (var prop in props) { this$1[i].style[prop] = props[prop]; } }
                    return this;
                }
            }
            if (arguments.length === 2 && typeof props === 'string') {
                for (i = 0; i < this.length; i += 1) { this$1[i].style[props] = value; }
                return this;
            }
            return this;
        }

        function each(callback) {
            var this$1 = this;
            if (!callback) { return this; }
            for (var i = 0; i < this.length; i += 1) { if (callback.call(this$1[i], i, this$1[i]) === false) { return this$1; } }
            return this;
        }

        function html(html) {
            var this$1 = this;
            if (typeof html === 'undefined') { return this[0] ? this[0].innerHTML : undefined; }
            for (var i = 0; i < this.length; i += 1) { this$1[i].innerHTML = html; }
            return this;
        }

        function text(text) {
            var this$1 = this;
            if (typeof text === 'undefined') {
                if (this[0]) { return this[0].textContent.trim(); }
                return null;
            }
            for (var i = 0; i < this.length; i += 1) { this$1[i].textContent = text; }
            return this;
        }

        function is(selector) {
            var el = this[0];
            var compareWith;
            var i;
            if (!el || typeof selector === 'undefined') { return false; }
            if (typeof selector === 'string') {
                if (el.matches) { return el.matches(selector); } else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); } else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }
                compareWith = $(selector);
                for (i = 0; i < compareWith.length; i += 1) { if (compareWith[i] === el) { return true; } }
                return false;
            } else if (selector === doc) { return el === doc; } else if (selector === win) { return el === win; }
            if (selector.nodeType || selector instanceof Dom7) {
                compareWith = selector.nodeType ? [selector] : selector;
                for (i = 0; i < compareWith.length; i += 1) { if (compareWith[i] === el) { return true; } }
                return false;
            }
            return false;
        }

        function index() {
            var child = this[0];
            var i;
            if (child) {
                i = 0;
                while ((child = child.previousSibling) !== null) { if (child.nodeType === 1) { i += 1; } }
                return i;
            }
            return undefined;
        }

        function eq(index) {
            if (typeof index === 'undefined') { return this; }
            var length = this.length;
            var returnIndex;
            if (index > length - 1) { return new Dom7([]); }
            if (index < 0) {
                returnIndex = length + index;
                if (returnIndex < 0) { return new Dom7([]); }
                return new Dom7([this[returnIndex]]);
            }
            return new Dom7([this[index]]);
        }

        function append() {
            var this$1 = this;
            var args = [],
                len = arguments.length;
            while (len--) args[len] = arguments[len];
            var newChild;
            for (var k = 0; k < args.length; k += 1) {
                newChild = args[k];
                for (var i = 0; i < this.length; i += 1) {
                    if (typeof newChild === 'string') {
                        var tempDiv = doc.createElement('div');
                        tempDiv.innerHTML = newChild;
                        while (tempDiv.firstChild) { this$1[i].appendChild(tempDiv.firstChild); }
                    } else if (newChild instanceof Dom7) { for (var j = 0; j < newChild.length; j += 1) { this$1[i].appendChild(newChild[j]); } } else { this$1[i].appendChild(newChild); }
                }
            }
            return this;
        }

        function prepend(newChild) {
            var this$1 = this;
            var i;
            var j;
            for (i = 0; i < this.length; i += 1) {
                if (typeof newChild === 'string') {
                    var tempDiv = doc.createElement('div');
                    tempDiv.innerHTML = newChild;
                    for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) { this$1[i].insertBefore(tempDiv.childNodes[j], this$1[i].childNodes[0]); }
                } else if (newChild instanceof Dom7) { for (j = 0; j < newChild.length; j += 1) { this$1[i].insertBefore(newChild[j], this$1[i].childNodes[0]); } } else { this$1[i].insertBefore(newChild, this$1[i].childNodes[0]); }
            }
            return this;
        }

        function next(selector) {
            if (this.length > 0) {
                if (selector) {
                    if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) { return new Dom7([this[0].nextElementSibling]); }
                    return new Dom7([]);
                }
                if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
                return new Dom7([]);
            }
            return new Dom7([]);
        }

        function nextAll(selector) {
            var nextEls = [];
            var el = this[0];
            if (!el) { return new Dom7([]); }
            while (el.nextElementSibling) {
                var next = el.nextElementSibling;
                if (selector) { if ($(next).is(selector)) { nextEls.push(next); } } else { nextEls.push(next); }
                el = next;
            }
            return new Dom7(nextEls);
        }

        function prev(selector) {
            if (this.length > 0) {
                var el = this[0];
                if (selector) {
                    if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) { return new Dom7([el.previousElementSibling]); }
                    return new Dom7([]);
                }
                if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
                return new Dom7([]);
            }
            return new Dom7([]);
        }

        function prevAll(selector) {
            var prevEls = [];
            var el = this[0];
            if (!el) { return new Dom7([]); }
            while (el.previousElementSibling) {
                var prev = el.previousElementSibling;
                if (selector) { if ($(prev).is(selector)) { prevEls.push(prev); } } else { prevEls.push(prev); }
                el = prev;
            }
            return new Dom7(prevEls);
        }

        function parent(selector) {
            var this$1 = this;
            var parents = [];
            for (var i = 0; i < this.length; i += 1) { if (this$1[i].parentNode !== null) { if (selector) { if ($(this$1[i].parentNode).is(selector)) { parents.push(this$1[i].parentNode); } } else { parents.push(this$1[i].parentNode); } } }
            return $(unique(parents));
        }

        function parents(selector) {
            var this$1 = this;
            var parents = [];
            for (var i = 0; i < this.length; i += 1) {
                var parent = this$1[i].parentNode;
                while (parent) {
                    if (selector) { if ($(parent).is(selector)) { parents.push(parent); } } else { parents.push(parent); }
                    parent = parent.parentNode;
                }
            }
            return $(unique(parents));
        }

        function closest(selector) {
            var closest = this;
            if (typeof selector === 'undefined') { return new Dom7([]); }
            if (!closest.is(selector)) { closest = closest.parents(selector).eq(0); }
            return closest;
        }

        function find(selector) {
            var this$1 = this;
            var foundElements = [];
            for (var i = 0; i < this.length; i += 1) { var found = this$1[i].querySelectorAll(selector); for (var j = 0; j < found.length; j += 1) { foundElements.push(found[j]); } }
            return new Dom7(foundElements);
        }

        function children(selector) {
            var this$1 = this;
            var children = [];
            for (var i = 0; i < this.length; i += 1) { var childNodes = this$1[i].childNodes; for (var j = 0; j < childNodes.length; j += 1) { if (!selector) { if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); } } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) { children.push(childNodes[j]); } } }
            return new Dom7(unique(children));
        }

        function remove() {
            var this$1 = this;
            for (var i = 0; i < this.length; i += 1) { if (this$1[i].parentNode) { this$1[i].parentNode.removeChild(this$1[i]); } }
            return this;
        }

        function add() {
            var args = [],
                len = arguments.length;
            while (len--) args[len] = arguments[len];
            var dom = this;
            var i;
            var j;
            for (i = 0; i < args.length; i += 1) {
                var toAdd = $(args[i]);
                for (j = 0; j < toAdd.length; j += 1) {
                    dom[dom.length] = toAdd[j];
                    dom.length += 1;
                }
            }
            return dom;
        }
        var Methods = { addClass: addClass, removeClass: removeClass, hasClass: hasClass, toggleClass: toggleClass, attr: attr, removeAttr: removeAttr, data: data, transform: transform, transition: transition, on: on, off: off, trigger: trigger, transitionEnd: transitionEnd, outerWidth: outerWidth, outerHeight: outerHeight, offset: offset, css: css, each: each, html: html, text: text, is: is, index: index, eq: eq, append: append, prepend: prepend, next: next, nextAll: nextAll, prev: prev, prevAll: prevAll, parent: parent, parents: parents, closest: closest, find: find, children: children, remove: remove, add: add, styles: styles, };
        Object.keys(Methods).forEach(function(methodName) { $.fn[methodName] = Methods[methodName]; });
        var Utils = {
            deleteProps: function deleteProps(obj) {
                var object = obj;
                Object.keys(object).forEach(function(key) {
                    try { object[key] = null; } catch (e) {}
                    try { delete object[key]; } catch (e) {}
                });
            },
            nextTick: function nextTick(callback, delay) { if (delay === void 0) delay = 0; return setTimeout(callback, delay); },
            now: function now() { return Date.now(); },
            getTranslate: function getTranslate(el, axis) {
                if (axis === void 0) axis = 'x';
                var matrix;
                var curTransform;
                var transformMatrix;
                var curStyle = win.getComputedStyle(el, null);
                if (win.WebKitCSSMatrix) {
                    curTransform = curStyle.transform || curStyle.webkitTransform;
                    if (curTransform.split(',').length > 6) { curTransform = curTransform.split(', ').map(function(a) { return a.replace(',', '.'); }).join(', '); }
                    transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
                } else {
                    transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                    matrix = transformMatrix.toString().split(',');
                }
                if (axis === 'x') {
                    if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; } else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); } else { curTransform = parseFloat(matrix[4]); }
                }
                if (axis === 'y') {
                    if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; } else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); } else { curTransform = parseFloat(matrix[5]); }
                }
                return curTransform || 0;
            },
            parseUrlQuery: function parseUrlQuery(url) {
                var query = {};
                var urlToParse = url || win.location.href;
                var i;
                var params;
                var param;
                var length;
                if (typeof urlToParse === 'string' && urlToParse.length) {
                    urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
                    params = urlToParse.split('&').filter(function(paramsPart) { return paramsPart !== ''; });
                    length = params.length;
                    for (i = 0; i < length; i += 1) {
                        param = params[i].replace(/#\S+/g, '').split('=');
                        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
                    }
                }
                return query;
            },
            isObject: function isObject(o) { return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object; },
            extend: function extend() {
                var args = [],
                    len$1 = arguments.length;
                while (len$1--) args[len$1] = arguments[len$1];
                var to = Object(args[0]);
                for (var i = 1; i < args.length; i += 1) {
                    var nextSource = args[i];
                    if (nextSource !== undefined && nextSource !== null) {
                        var keysArray = Object.keys(Object(nextSource));
                        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                            var nextKey = keysArray[nextIndex];
                            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                            if (desc !== undefined && desc.enumerable) {
                                if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) { Utils.extend(to[nextKey], nextSource[nextKey]); } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                                    to[nextKey] = {};
                                    Utils.extend(to[nextKey], nextSource[nextKey]);
                                } else { to[nextKey] = nextSource[nextKey]; }
                            }
                        }
                    }
                }
                return to;
            },
        };
        var Support = (function Support() {
            var testDiv = doc.createElement('div');
            return {
                touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() { return !!(('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch)); }()),
                pointerEvents: !!(win.navigator.pointerEnabled || win.PointerEvent),
                prefixedPointerEvents: !!win.navigator.msPointerEnabled,
                transition: (function checkTransition() { var style = testDiv.style; return ('transition' in style || 'webkitTransition' in style || 'MozTransition' in style); }()),
                transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() { var style = testDiv.style; return ('webkitPerspective' in style || 'MozPerspective' in style || 'OPerspective' in style || 'MsPerspective' in style || 'perspective' in style); }()),
                flexbox: (function checkFlexbox() {
                    var style = testDiv.style;
                    var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
                    for (var i = 0; i < styles.length; i += 1) { if (styles[i] in style) { return true; } }
                    return false;
                }()),
                observer: (function checkObserver() { return ('MutationObserver' in win || 'WebkitMutationObserver' in win); }()),
                passiveListener: (function checkPassiveListener() {
                    var supportsPassive = false;
                    try {
                        var opts = Object.defineProperty({}, 'passive', { get: function get() { supportsPassive = true; }, });
                        win.addEventListener('testPassiveListener', null, opts);
                    } catch (e) {}
                    return supportsPassive;
                }()),
                gestures: (function checkGestures() { return 'ongesturestart' in win; }()),
            };
        }());
        var SwiperClass = function SwiperClass(params) {
            if (params === void 0) params = {};
            var self = this;
            self.params = params;
            self.eventsListeners = {};
            if (self.params && self.params.on) { Object.keys(self.params.on).forEach(function(eventName) { self.on(eventName, self.params.on[eventName]); }); }
        };
        var staticAccessors = { components: { configurable: true } };
        SwiperClass.prototype.on = function on(events, handler, priority) {
            var self = this;
            if (typeof handler !== 'function') { return self; }
            var method = priority ? 'unshift' : 'push';
            events.split(' ').forEach(function(event) {
                if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
                self.eventsListeners[event][method](handler);
            });
            return self;
        };
        SwiperClass.prototype.once = function once(events, handler, priority) {
            var self = this;
            if (typeof handler !== 'function') { return self; }

            function onceHandler() {
                var args = [],
                    len = arguments.length;
                while (len--) args[len] = arguments[len];
                handler.apply(self, args);
                self.off(events, onceHandler);
            }
            return self.on(events, onceHandler, priority);
        };
        SwiperClass.prototype.off = function off(events, handler) {
            var self = this;
            if (!self.eventsListeners) { return self; }
            events.split(' ').forEach(function(event) { if (typeof handler === 'undefined') { self.eventsListeners[event] = []; } else { self.eventsListeners[event].forEach(function(eventHandler, index) { if (eventHandler === handler) { self.eventsListeners[event].splice(index, 1); } }); } });
            return self;
        };
        SwiperClass.prototype.emit = function emit() {
            var args = [],
                len = arguments.length;
            while (len--) args[len] = arguments[len];
            var self = this;
            if (!self.eventsListeners) { return self; }
            var events;
            var data;
            var context;
            if (typeof args[0] === 'string' || Array.isArray(args[0])) {
                events = args[0];
                data = args.slice(1, args.length);
                context = self;
            } else {
                events = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
            }
            var eventsArray = Array.isArray(events) ? events : events.split(' ');
            eventsArray.forEach(function(event) {
                if (self.eventsListeners && self.eventsListeners[event]) {
                    var handlers = [];
                    self.eventsListeners[event].forEach(function(eventHandler) { handlers.push(eventHandler); });
                    handlers.forEach(function(eventHandler) { eventHandler.apply(context, data); });
                }
            });
            return self;
        };
        SwiperClass.prototype.useModulesParams = function useModulesParams(instanceParams) {
            var instance = this;
            if (!instance.modules) { return; }
            Object.keys(instance.modules).forEach(function(moduleName) { var module = instance.modules[moduleName]; if (module.params) { Utils.extend(instanceParams, module.params); } });
        };
        SwiperClass.prototype.useModules = function useModules(modulesParams) {
            if (modulesParams === void 0) modulesParams = {};
            var instance = this;
            if (!instance.modules) { return; }
            Object.keys(instance.modules).forEach(function(moduleName) {
                var module = instance.modules[moduleName];
                var moduleParams = modulesParams[moduleName] || {};
                if (module.instance) { Object.keys(module.instance).forEach(function(modulePropName) { var moduleProp = module.instance[modulePropName]; if (typeof moduleProp === 'function') { instance[modulePropName] = moduleProp.bind(instance); } else { instance[modulePropName] = moduleProp; } }); }
                if (module.on && instance.on) { Object.keys(module.on).forEach(function(moduleEventName) { instance.on(moduleEventName, module.on[moduleEventName]); }); }
                if (module.create) { module.create.bind(instance)(moduleParams); }
            });
        };
        staticAccessors.components.set = function(components) {
            var Class = this;
            if (!Class.use) { return; }
            Class.use(components);
        };
        SwiperClass.installModule = function installModule(module) {
            var params = [],
                len = arguments.length - 1;
            while (len-- > 0) params[len] = arguments[len + 1];
            var Class = this;
            if (!Class.prototype.modules) { Class.prototype.modules = {}; }
            var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
            Class.prototype.modules[name] = module;
            if (module.proto) { Object.keys(module.proto).forEach(function(key) { Class.prototype[key] = module.proto[key]; }); }
            if (module.static) { Object.keys(module.static).forEach(function(key) { Class[key] = module.static[key]; }); }
            if (module.install) { module.install.apply(Class, params); }
            return Class;
        };
        SwiperClass.use = function use(module) {
            var params = [],
                len = arguments.length - 1;
            while (len-- > 0) params[len] = arguments[len + 1];
            var Class = this;
            if (Array.isArray(module)) { module.forEach(function(m) { return Class.installModule(m); }); return Class; }
            return Class.installModule.apply(Class, [module].concat(params));
        };
        Object.defineProperties(SwiperClass, staticAccessors);

        function updateSize() {
            var swiper = this;
            var width;
            var height;
            var $el = swiper.$el;
            if (typeof swiper.params.width !== 'undefined') { width = swiper.params.width; } else { width = $el[0].clientWidth; }
            if (typeof swiper.params.height !== 'undefined') { height = swiper.params.height; } else { height = $el[0].clientHeight; }
            if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) { return; }
            width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
            height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
            Utils.extend(swiper, { width: width, height: height, size: swiper.isHorizontal() ? width : height, });
        }

        function updateSlides() {
            var swiper = this;
            var params = swiper.params;
            var $wrapperEl = swiper.$wrapperEl;
            var swiperSize = swiper.size;
            var rtl = swiper.rtlTranslate;
            var wrongRTL = swiper.wrongRTL;
            var isVirtual = swiper.virtual && params.virtual.enabled;
            var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
            var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
            var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
            var snapGrid = [];
            var slidesGrid = [];
            var slidesSizesGrid = [];
            var offsetBefore = params.slidesOffsetBefore;
            if (typeof offsetBefore === 'function') { offsetBefore = params.slidesOffsetBefore.call(swiper); }
            var offsetAfter = params.slidesOffsetAfter;
            if (typeof offsetAfter === 'function') { offsetAfter = params.slidesOffsetAfter.call(swiper); }
            var previousSnapGridLength = swiper.snapGrid.length;
            var previousSlidesGridLength = swiper.snapGrid.length;
            var spaceBetween = params.spaceBetween;
            var slidePosition = -offsetBefore;
            var prevSlideSize = 0;
            var index = 0;
            if (typeof swiperSize === 'undefined') { return; }
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) { spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize; }
            swiper.virtualSize = -spaceBetween;
            if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); } else { slides.css({ marginRight: '', marginBottom: '' }); }
            var slidesNumberEvenToRows;
            if (params.slidesPerColumn > 1) {
                if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) { slidesNumberEvenToRows = slidesLength; } else { slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn; }
                if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') { slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn); }
            }
            var slideSize;
            var slidesPerColumn = params.slidesPerColumn;
            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
            var numFullColumns = slidesPerRow - ((params.slidesPerColumn * slidesPerRow) - slidesLength);
            for (var i = 0; i < slidesLength; i += 1) {
                slideSize = 0;
                var slide = slides.eq(i);
                if (params.slidesPerColumn > 1) {
                    var newSlideOrderIndex = (void 0);
                    var column = (void 0);
                    var row = (void 0);
                    if (params.slidesPerColumnFill === 'column') {
                        column = Math.floor(i / slidesPerColumn);
                        row = i - (column * slidesPerColumn);
                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
                            row += 1;
                            if (row >= slidesPerColumn) {
                                row = 0;
                                column += 1;
                            }
                        }
                        newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
                        slide.css({ '-webkit-box-ordinal-group': newSlideOrderIndex, '-moz-box-ordinal-group': newSlideOrderIndex, '-ms-flex-order': newSlideOrderIndex, '-webkit-order': newSlideOrderIndex, order: newSlideOrderIndex, });
                    } else {
                        row = Math.floor(i / slidesPerRow);
                        column = i - (row * slidesPerRow);
                    }
                    slide.css(("margin-" + (swiper.isHorizontal() ? 'top' : 'left')), (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))).attr('data-swiper-column', column).attr('data-swiper-row', row);
                }
                if (slide.css('display') === 'none') { continue; }
                if (params.slidesPerView === 'auto') {
                    var slideStyles = win.getComputedStyle(slide[0], null);
                    var currentTransform = slide[0].style.transform;
                    var currentWebKitTransform = slide[0].style.webkitTransform;
                    if (currentTransform) { slide[0].style.transform = 'none'; }
                    if (currentWebKitTransform) { slide[0].style.webkitTransform = 'none'; }
                    if (swiper.isHorizontal()) {
                        slideSize = slide[0].getBoundingClientRect().width +
                            parseFloat(slideStyles.getPropertyValue('margin-left')) +
                            parseFloat(slideStyles.getPropertyValue('margin-right'));
                    } else {
                        slideSize = slide[0].getBoundingClientRect().height +
                            parseFloat(slideStyles.getPropertyValue('margin-top')) +
                            parseFloat(slideStyles.getPropertyValue('margin-bottom'));
                    }
                    if (currentTransform) { slide[0].style.transform = currentTransform; }
                    if (currentWebKitTransform) { slide[0].style.webkitTransform = currentWebKitTransform; }
                    if (params.roundLengths) { slideSize = Math.floor(slideSize); }
                } else {
                    slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
                    if (params.roundLengths) { slideSize = Math.floor(slideSize); }
                    if (slides[i]) { if (swiper.isHorizontal()) { slides[i].style.width = slideSize + "px"; } else { slides[i].style.height = slideSize + "px"; } }
                }
                if (slides[i]) { slides[i].swiperSlideSize = slideSize; }
                slidesSizesGrid.push(slideSize);
                if (params.centeredSlides) {
                    slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
                    if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
                    if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
                    if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
                    if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
                    if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
                    slidesGrid.push(slidePosition);
                } else {
                    if (params.roundLengths) { slidePosition = Math.floor(slidePosition); }
                    if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
                    slidesGrid.push(slidePosition);
                    slidePosition = slidePosition + slideSize + spaceBetween;
                }
                swiper.virtualSize += slideSize + spaceBetween;
                prevSlideSize = slideSize;
                index += 1;
            }
            swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
            var newSlidesGrid;
            if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
            if (!Support.flexbox || params.setWrapperSize) {
                if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); } else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
            }
            if (params.slidesPerColumn > 1) {
                swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
                swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
                if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); } else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
                if (params.centeredSlides) {
                    newSlidesGrid = [];
                    for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
                        var slidesGridItem = snapGrid[i$1];
                        if (params.roundLengths) { slidesGridItem = Math.floor(slidesGridItem); }
                        if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(slidesGridItem); }
                    }
                    snapGrid = newSlidesGrid;
                }
            }
            if (!params.centeredSlides) {
                newSlidesGrid = [];
                for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
                    var slidesGridItem$1 = snapGrid[i$2];
                    if (params.roundLengths) { slidesGridItem$1 = Math.floor(slidesGridItem$1); }
                    if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) { newSlidesGrid.push(slidesGridItem$1); }
                }
                snapGrid = newSlidesGrid;
                if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) { snapGrid.push(swiper.virtualSize - swiperSize); }
            }
            if (snapGrid.length === 0) { snapGrid = [0]; }
            if (params.spaceBetween !== 0) {
                if (swiper.isHorizontal()) {
                    if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); } else { slides.css({ marginRight: (spaceBetween + "px") }); }
                } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
            }
            Utils.extend(swiper, { slides: slides, snapGrid: snapGrid, slidesGrid: slidesGrid, slidesSizesGrid: slidesSizesGrid, });
            if (slidesLength !== previousSlidesLength) { swiper.emit('slidesLengthChange'); }
            if (snapGrid.length !== previousSnapGridLength) {
                if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
                swiper.emit('snapGridLengthChange');
            }
            if (slidesGrid.length !== previousSlidesGridLength) { swiper.emit('slidesGridLengthChange'); }
            if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesOffset(); }
        }

        function updateAutoHeight(speed) {
            var swiper = this;
            var activeSlides = [];
            var newHeight = 0;
            var i;
            if (typeof speed === 'number') { swiper.setTransition(speed); } else if (speed === true) { swiper.setTransition(swiper.params.speed); }
            if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
                for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                    var index = swiper.activeIndex + i;
                    if (index > swiper.slides.length) { break; }
                    activeSlides.push(swiper.slides.eq(index)[0]);
                }
            } else { activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]); }
            for (i = 0; i < activeSlides.length; i += 1) {
                if (typeof activeSlides[i] !== 'undefined') {
                    var height = activeSlides[i].offsetHeight;
                    newHeight = height > newHeight ? height : newHeight;
                }
            }
            if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
        }

        function updateSlidesOffset() { var swiper = this; var slides = swiper.slides; for (var i = 0; i < slides.length; i += 1) { slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop; } }

        function updateSlidesProgress(translate) {
            if (translate === void 0) translate = (this && this.translate) || 0;
            var swiper = this;
            var params = swiper.params;
            var slides = swiper.slides;
            var rtl = swiper.rtlTranslate;
            if (slides.length === 0) { return; }
            if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }
            var offsetCenter = -translate;
            if (rtl) { offsetCenter = translate; }
            slides.removeClass(params.slideVisibleClass);
            for (var i = 0; i < slides.length; i += 1) {
                var slide = slides[i];
                var slideProgress = ((offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
                if (params.watchSlidesVisibility) { var slideBefore = -(offsetCenter - slide.swiperSlideOffset); var slideAfter = slideBefore + swiper.slidesSizesGrid[i]; var isVisible = (slideBefore >= 0 && slideBefore < swiper.size) || (slideAfter > 0 && slideAfter <= swiper.size) || (slideBefore <= 0 && slideAfter >= swiper.size); if (isVisible) { slides.eq(i).addClass(params.slideVisibleClass); } }
                slide.progress = rtl ? -slideProgress : slideProgress;
            }
        }

        function updateProgress(translate) {
            if (translate === void 0) translate = (this && this.translate) || 0;
            var swiper = this;
            var params = swiper.params;
            var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            var progress = swiper.progress;
            var isBeginning = swiper.isBeginning;
            var isEnd = swiper.isEnd;
            var wasBeginning = isBeginning;
            var wasEnd = isEnd;
            if (translatesDiff === 0) {
                progress = 0;
                isBeginning = true;
                isEnd = true;
            } else {
                progress = (translate - swiper.minTranslate()) / (translatesDiff);
                isBeginning = progress <= 0;
                isEnd = progress >= 1;
            }
            Utils.extend(swiper, { progress: progress, isBeginning: isBeginning, isEnd: isEnd, });
            if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }
            if (isBeginning && !wasBeginning) { swiper.emit('reachBeginning toEdge'); }
            if (isEnd && !wasEnd) { swiper.emit('reachEnd toEdge'); }
            if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) { swiper.emit('fromEdge'); }
            swiper.emit('progress', progress);
        }

        function updateSlidesClasses() {
            var swiper = this;
            var slides = swiper.slides;
            var params = swiper.params;
            var $wrapperEl = swiper.$wrapperEl;
            var activeIndex = swiper.activeIndex;
            var realIndex = swiper.realIndex;
            var isVirtual = swiper.virtual && params.virtual.enabled;
            slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));
            var activeSlide;
            if (isVirtual) { activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]")); } else { activeSlide = slides.eq(activeIndex); }
            activeSlide.addClass(params.slideActiveClass);
            if (params.loop) { if (activeSlide.hasClass(params.slideDuplicateClass)) { $wrapperEl.children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]")).addClass(params.slideDuplicateActiveClass); } else { $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]")).addClass(params.slideDuplicateActiveClass); } }
            var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
            if (params.loop && nextSlide.length === 0) {
                nextSlide = slides.eq(0);
                nextSlide.addClass(params.slideNextClass);
            }
            var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
            if (params.loop && prevSlide.length === 0) {
                prevSlide = slides.eq(-1);
                prevSlide.addClass(params.slidePrevClass);
            }
            if (params.loop) {
                if (nextSlide.hasClass(params.slideDuplicateClass)) { $wrapperEl.children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]")).addClass(params.slideDuplicateNextClass); } else { $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]")).addClass(params.slideDuplicateNextClass); }
                if (prevSlide.hasClass(params.slideDuplicateClass)) { $wrapperEl.children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]")).addClass(params.slideDuplicatePrevClass); } else { $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]")).addClass(params.slideDuplicatePrevClass); }
            }
        }

        function updateActiveIndex(newActiveIndex) {
            var swiper = this;
            var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
            var slidesGrid = swiper.slidesGrid;
            var snapGrid = swiper.snapGrid;
            var params = swiper.params;
            var previousIndex = swiper.activeIndex;
            var previousRealIndex = swiper.realIndex;
            var previousSnapIndex = swiper.snapIndex;
            var activeIndex = newActiveIndex;
            var snapIndex;
            if (typeof activeIndex === 'undefined') {
                for (var i = 0; i < slidesGrid.length; i += 1) { if (typeof slidesGrid[i + 1] !== 'undefined') { if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) { activeIndex = i; } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) { activeIndex = i + 1; } } else if (translate >= slidesGrid[i]) { activeIndex = i; } }
                if (params.normalizeSlideIndex) { if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; } }
            }
            if (snapGrid.indexOf(translate) >= 0) { snapIndex = snapGrid.indexOf(translate); } else { snapIndex = Math.floor(activeIndex / params.slidesPerGroup); }
            if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
            if (activeIndex === previousIndex) {
                if (snapIndex !== previousSnapIndex) {
                    swiper.snapIndex = snapIndex;
                    swiper.emit('snapIndexChange');
                }
                return;
            }
            var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
            Utils.extend(swiper, { snapIndex: snapIndex, realIndex: realIndex, previousIndex: previousIndex, activeIndex: activeIndex, });
            swiper.emit('activeIndexChange');
            swiper.emit('snapIndexChange');
            if (previousRealIndex !== realIndex) { swiper.emit('realIndexChange'); }
            swiper.emit('slideChange');
        }

        function updateClickedSlide(e) {
            var swiper = this;
            var params = swiper.params;
            var slide = $(e.target).closest(("." + (params.slideClass)))[0];
            var slideFound = false;
            if (slide) { for (var i = 0; i < swiper.slides.length; i += 1) { if (swiper.slides[i] === slide) { slideFound = true; } } }
            if (slide && slideFound) { swiper.clickedSlide = slide; if (swiper.virtual && swiper.params.virtual.enabled) { swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10); } else { swiper.clickedIndex = $(slide).index(); } } else {
                swiper.clickedSlide = undefined;
                swiper.clickedIndex = undefined;
                return;
            }
            if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) { swiper.slideToClickedSlide(); }
        }
        var update = { updateSize: updateSize, updateSlides: updateSlides, updateAutoHeight: updateAutoHeight, updateSlidesOffset: updateSlidesOffset, updateSlidesProgress: updateSlidesProgress, updateProgress: updateProgress, updateSlidesClasses: updateSlidesClasses, updateActiveIndex: updateActiveIndex, updateClickedSlide: updateClickedSlide, };

        function getTranslate(axis) {
            if (axis === void 0) axis = this.isHorizontal() ? 'x' : 'y';
            var swiper = this;
            var params = swiper.params;
            var rtl = swiper.rtlTranslate;
            var translate = swiper.translate;
            var $wrapperEl = swiper.$wrapperEl;
            if (params.virtualTranslate) { return rtl ? -translate : translate; }
            var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
            if (rtl) { currentTranslate = -currentTranslate; }
            return currentTranslate || 0;
        }

        function setTranslate(translate, byController) {
            var swiper = this;
            var rtl = swiper.rtlTranslate;
            var params = swiper.params;
            var $wrapperEl = swiper.$wrapperEl;
            var progress = swiper.progress;
            var x = 0;
            var y = 0;
            var z = 0;
            if (swiper.isHorizontal()) { x = rtl ? -translate : translate; } else { y = translate; }
            if (params.roundLengths) {
                x = Math.floor(x);
                y = Math.floor(y);
            }
            if (!params.virtualTranslate) {
                if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); } else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
            }
            swiper.previousTranslate = swiper.translate;
            swiper.translate = swiper.isHorizontal() ? x : y;
            var newProgress;
            var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
            if (translatesDiff === 0) { newProgress = 0; } else { newProgress = (translate - swiper.minTranslate()) / (translatesDiff); }
            if (newProgress !== progress) { swiper.updateProgress(translate); }
            swiper.emit('setTranslate', swiper.translate, byController);
        }

        function minTranslate() { return (-this.snapGrid[0]); }

        function maxTranslate() { return (-this.snapGrid[this.snapGrid.length - 1]); }
        var translate = { getTranslate: getTranslate, setTranslate: setTranslate, minTranslate: minTranslate, maxTranslate: maxTranslate, };

        function setTransition(duration, byController) {
            var swiper = this;
            swiper.$wrapperEl.transition(duration);
            swiper.emit('setTransition', duration, byController);
        }

        function transitionStart(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            var swiper = this;
            var activeIndex = swiper.activeIndex;
            var params = swiper.params;
            var previousIndex = swiper.previousIndex;
            if (params.autoHeight) { swiper.updateAutoHeight(); }
            var dir = direction;
            if (!dir) {
                if (activeIndex > previousIndex) { dir = 'next'; } else if (activeIndex < previousIndex) { dir = 'prev'; } else { dir = 'reset'; }
            }
            swiper.emit('transitionStart');
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === 'reset') { swiper.emit('slideResetTransitionStart'); return; }
                swiper.emit('slideChangeTransitionStart');
                if (dir === 'next') { swiper.emit('slideNextTransitionStart'); } else { swiper.emit('slidePrevTransitionStart'); }
            }
        }

        function transitionEnd$1(runCallbacks, direction) {
            if (runCallbacks === void 0) runCallbacks = true;
            var swiper = this;
            var activeIndex = swiper.activeIndex;
            var previousIndex = swiper.previousIndex;
            swiper.animating = false;
            swiper.setTransition(0);
            var dir = direction;
            if (!dir) {
                if (activeIndex > previousIndex) { dir = 'next'; } else if (activeIndex < previousIndex) { dir = 'prev'; } else { dir = 'reset'; }
            }
            swiper.emit('transitionEnd');
            if (runCallbacks && activeIndex !== previousIndex) {
                if (dir === 'reset') { swiper.emit('slideResetTransitionEnd'); return; }
                swiper.emit('slideChangeTransitionEnd');
                if (dir === 'next') { swiper.emit('slideNextTransitionEnd'); } else { swiper.emit('slidePrevTransitionEnd'); }
            }
        }
        var transition$1 = { setTransition: setTransition, transitionStart: transitionStart, transitionEnd: transitionEnd$1, };

        function slideTo(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            var swiper = this;
            var slideIndex = index;
            if (slideIndex < 0) { slideIndex = 0; }
            var params = swiper.params;
            var snapGrid = swiper.snapGrid;
            var slidesGrid = swiper.slidesGrid;
            var previousIndex = swiper.previousIndex;
            var activeIndex = swiper.activeIndex;
            var rtl = swiper.rtlTranslate;
            if (swiper.animating && params.preventInteractionOnTransition) { return false; }
            var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
            if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
            if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) { swiper.emit('beforeSlideChangeStart'); }
            var translate = -snapGrid[snapIndex];
            swiper.updateProgress(translate);
            if (params.normalizeSlideIndex) { for (var i = 0; i < slidesGrid.length; i += 1) { if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) { slideIndex = i; } } }
            if (swiper.initialized && slideIndex !== activeIndex) {
                if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) { return false; }
                if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) { if ((activeIndex || 0) !== slideIndex) { return false; } }
            }
            var direction;
            if (slideIndex > activeIndex) { direction = 'next'; } else if (slideIndex < activeIndex) { direction = 'prev'; } else { direction = 'reset'; }
            if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
                swiper.updateActiveIndex(slideIndex);
                if (params.autoHeight) { swiper.updateAutoHeight(); }
                swiper.updateSlidesClasses();
                if (params.effect !== 'slide') { swiper.setTranslate(translate); }
                if (direction !== 'reset') {
                    swiper.transitionStart(runCallbacks, direction);
                    swiper.transitionEnd(runCallbacks, direction);
                }
                return false;
            }
            if (speed === 0 || !Support.transition) {
                swiper.setTransition(0);
                swiper.setTranslate(translate);
                swiper.updateActiveIndex(slideIndex);
                swiper.updateSlidesClasses();
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            } else {
                swiper.setTransition(speed);
                swiper.setTranslate(translate);
                swiper.updateActiveIndex(slideIndex);
                swiper.updateSlidesClasses();
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.transitionStart(runCallbacks, direction);
                if (!swiper.animating) {
                    swiper.animating = true;
                    if (!swiper.onSlideToWrapperTransitionEnd) {
                        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                            if (!swiper || swiper.destroyed) { return; }
                            if (e.target !== this) { return; }
                            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                            swiper.onSlideToWrapperTransitionEnd = null;
                            delete swiper.onSlideToWrapperTransitionEnd;
                            swiper.transitionEnd(runCallbacks, direction);
                        };
                    }
                    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
                }
            }
            return true;
        }

        function slideToLoop(index, speed, runCallbacks, internal) {
            if (index === void 0) index = 0;
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            var swiper = this;
            var newIndex = index;
            if (swiper.params.loop) { newIndex += swiper.loopedSlides; }
            return swiper.slideTo(newIndex, speed, runCallbacks, internal);
        }

        function slideNext(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            var swiper = this;
            var params = swiper.params;
            var animating = swiper.animating;
            if (params.loop) {
                if (animating) { return false; }
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
                return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
            }
            return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
        }

        function slidePrev(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            var swiper = this;
            var params = swiper.params;
            var animating = swiper.animating;
            var snapGrid = swiper.snapGrid;
            var slidesGrid = swiper.slidesGrid;
            var rtlTranslate = swiper.rtlTranslate;
            if (params.loop) {
                if (animating) { return false; }
                swiper.loopFix();
                swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            }
            var translate = rtlTranslate ? swiper.translate : -swiper.translate;

            function normalize(val) {
                if (val < 0) { return -Math.floor(Math.abs(val)); }
                return Math.floor(val);
            }
            var normalizedTranslate = normalize(translate);
            var normalizedSnapGrid = snapGrid.map(function(val) { return normalize(val); });
            var normalizedSlidesGrid = slidesGrid.map(function(val) { return normalize(val); });
            var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
            var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
            var prevIndex;
            if (typeof prevSnap !== 'undefined') { prevIndex = slidesGrid.indexOf(prevSnap); if (prevIndex < 0) { prevIndex = swiper.activeIndex - 1; } }
            return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
        }

        function slideReset(speed, runCallbacks, internal) { if (speed === void 0) speed = this.params.speed; if (runCallbacks === void 0) runCallbacks = true; var swiper = this; return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal); }

        function slideToClosest(speed, runCallbacks, internal) {
            if (speed === void 0) speed = this.params.speed;
            if (runCallbacks === void 0) runCallbacks = true;
            var swiper = this;
            var index = swiper.activeIndex;
            var snapIndex = Math.floor(index / swiper.params.slidesPerGroup);
            if (snapIndex < swiper.snapGrid.length - 1) { var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate; var currentSnap = swiper.snapGrid[snapIndex]; var nextSnap = swiper.snapGrid[snapIndex + 1]; if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) { index = swiper.params.slidesPerGroup; } }
            return swiper.slideTo(index, speed, runCallbacks, internal);
        }

        function slideToClickedSlide() {
            var swiper = this;
            var params = swiper.params;
            var $wrapperEl = swiper.$wrapperEl;
            var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
            var slideToIndex = swiper.clickedIndex;
            var realIndex;
            if (params.loop) {
                if (swiper.animating) { return; }
                realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
                if (params.centeredSlides) {
                    if ((slideToIndex < swiper.loopedSlides - (slidesPerView / 2)) || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))) {
                        swiper.loopFix();
                        slideToIndex = $wrapperEl.children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")")).eq(0).index();
                        Utils.nextTick(function() { swiper.slideTo(slideToIndex); });
                    } else { swiper.slideTo(slideToIndex); }
                } else if (slideToIndex > swiper.slides.length - slidesPerView) {
                    swiper.loopFix();
                    slideToIndex = $wrapperEl.children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")")).eq(0).index();
                    Utils.nextTick(function() { swiper.slideTo(slideToIndex); });
                } else { swiper.slideTo(slideToIndex); }
            } else { swiper.slideTo(slideToIndex); }
        }
        var slide = { slideTo: slideTo, slideToLoop: slideToLoop, slideNext: slideNext, slidePrev: slidePrev, slideReset: slideReset, slideToClosest: slideToClosest, slideToClickedSlide: slideToClickedSlide, };

        function loopCreate() {
            var swiper = this;
            var params = swiper.params;
            var $wrapperEl = swiper.$wrapperEl;
            $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();
            var slides = $wrapperEl.children(("." + (params.slideClass)));
            if (params.loopFillGroupWithBlank) {
                var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
                if (blankSlidesNum !== params.slidesPerGroup) {
                    for (var i = 0; i < blankSlidesNum; i += 1) {
                        var blankNode = $(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
                        $wrapperEl.append(blankNode);
                    }
                    slides = $wrapperEl.children(("." + (params.slideClass)));
                }
            }
            if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }
            swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
            swiper.loopedSlides += params.loopAdditionalSlides;
            if (swiper.loopedSlides > slides.length) { swiper.loopedSlides = slides.length; }
            var prependSlides = [];
            var appendSlides = [];
            slides.each(function(index, el) {
                var slide = $(el);
                if (index < swiper.loopedSlides) { appendSlides.push(el); }
                if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
                slide.attr('data-swiper-slide-index', index);
            });
            for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) { $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass)); }
            for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) { $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass)); }
        }

        function loopFix() {
            var swiper = this;
            var params = swiper.params;
            var activeIndex = swiper.activeIndex;
            var slides = swiper.slides;
            var loopedSlides = swiper.loopedSlides;
            var allowSlidePrev = swiper.allowSlidePrev;
            var allowSlideNext = swiper.allowSlideNext;
            var snapGrid = swiper.snapGrid;
            var rtl = swiper.rtlTranslate;
            var newIndex;
            swiper.allowSlidePrev = true;
            swiper.allowSlideNext = true;
            var snapTranslate = -snapGrid[activeIndex];
            var diff = snapTranslate - swiper.getTranslate();
            if (activeIndex < loopedSlides) {
                newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
                newIndex += loopedSlides;
                var slideChanged = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged && diff !== 0) { swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff); }
            } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
                newIndex = -slides.length + activeIndex + loopedSlides;
                newIndex += loopedSlides;
                var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);
                if (slideChanged$1 && diff !== 0) { swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff); }
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
        }

        function loopDestroy() {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl;
            var params = swiper.params;
            var slides = swiper.slides;
            $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();
            slides.removeAttr('data-swiper-slide-index');
        }
        var loop = { loopCreate: loopCreate, loopFix: loopFix, loopDestroy: loopDestroy, };

        function setGrabCursor(moving) {
            var swiper = this;
            if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
            var el = swiper.el;
            el.style.cursor = 'move';
            el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
            el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
            el.style.cursor = moving ? 'grabbing' : 'grab';
        }

        function unsetGrabCursor() {
            var swiper = this;
            if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked)) { return; }
            swiper.el.style.cursor = '';
        }
        var grabCursor = { setGrabCursor: setGrabCursor, unsetGrabCursor: unsetGrabCursor, };

        function appendSlide(slides) {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl;
            var params = swiper.params;
            if (params.loop) { swiper.loopDestroy(); }
            if (typeof slides === 'object' && 'length' in slides) { for (var i = 0; i < slides.length; i += 1) { if (slides[i]) { $wrapperEl.append(slides[i]); } } } else { $wrapperEl.append(slides); }
            if (params.loop) { swiper.loopCreate(); }
            if (!(params.observer && Support.observer)) { swiper.update(); }
        }

        function prependSlide(slides) {
            var swiper = this;
            var params = swiper.params;
            var $wrapperEl = swiper.$wrapperEl;
            var activeIndex = swiper.activeIndex;
            if (params.loop) { swiper.loopDestroy(); }
            var newActiveIndex = activeIndex + 1;
            if (typeof slides === 'object' && 'length' in slides) {
                for (var i = 0; i < slides.length; i += 1) { if (slides[i]) { $wrapperEl.prepend(slides[i]); } }
                newActiveIndex = activeIndex + slides.length;
            } else { $wrapperEl.prepend(slides); }
            if (params.loop) { swiper.loopCreate(); }
            if (!(params.observer && Support.observer)) { swiper.update(); }
            swiper.slideTo(newActiveIndex, 0, false);
        }

        function addSlide(index, slides) {
            var swiper = this;
            var $wrapperEl = swiper.$wrapperEl;
            var params = swiper.params;
            var activeIndex = swiper.activeIndex;
            var activeIndexBuffer = activeIndex;
            if (params.loop) {
                activeIndexBuffer -= swiper.loopedSlides;
                swiper.loopDestroy();
                swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
            }
            var baseLength = swiper.slides.length;
            if (index <= 0) { swiper.prependSlide(slides); return; }
            if (index >= baseLength) { swiper.appendSlide(slides); return; }
            var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
            var slidesBuffer = [];
            for (var i = baseLength - 1; i >= index; i -= 1) {
                var currentSlide = swiper.slides.eq(i);
                currentSlide.remove();
                slidesBuffer.unshift(currentSlide);
            }
            if (typeof slides === 'object' && 'length' in slides) {
                for (var i$1 = 0; i$1 < slides.length; i$1 += 1) { if (slides[i$1]) { $wrapperEl.append(slides[i$1]); } }
                newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
            } else { $wrapperEl.append(slides); }
            for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) { $wrapperEl.append(slidesBuffer[i$2]); }
            if (params.loop) { swiper.loopCreate(); }
            if (!(params.observer && Support.observer)) { swiper.update(); }
            if (params.loop) { swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false); } else { swiper.slideTo(newActiveIndex, 0, false); }
        }

        function removeSlide(slidesIndexes) {
            var swiper = this;
            var params = swiper.params;
            var $wrapperEl = swiper.$wrapperEl;
            var activeIndex = swiper.activeIndex;
            var activeIndexBuffer = activeIndex;
            if (params.loop) {
                activeIndexBuffer -= swiper.loopedSlides;
                swiper.loopDestroy();
                swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
            }
            var newActiveIndex = activeIndexBuffer;
            var indexToRemove;
            if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
                for (var i = 0; i < slidesIndexes.length; i += 1) {
                    indexToRemove = slidesIndexes[i];
                    if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
                    if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
                }
                newActiveIndex = Math.max(newActiveIndex, 0);
            } else {
                indexToRemove = slidesIndexes;
                if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
                if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
                newActiveIndex = Math.max(newActiveIndex, 0);
            }
            if (params.loop) { swiper.loopCreate(); }
            if (!(params.observer && Support.observer)) { swiper.update(); }
            if (params.loop) { swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false); } else { swiper.slideTo(newActiveIndex, 0, false); }
        }

        function removeAllSlides() {
            var swiper = this;
            var slidesIndexes = [];
            for (var i = 0; i < swiper.slides.length; i += 1) { slidesIndexes.push(i); }
            swiper.removeSlide(slidesIndexes);
        }
        var manipulation = { appendSlide: appendSlide, prependSlide: prependSlide, addSlide: addSlide, removeSlide: removeSlide, removeAllSlides: removeAllSlides, };
        var Device = (function Device() {
            var ua = win.navigator.userAgent;
            var device = { ios: false, android: false, androidChrome: false, desktop: false, windows: false, iphone: false, ipod: false, ipad: false, cordova: win.cordova || win.phonegap, phonegap: win.cordova || win.phonegap, };
            var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/);
            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
            var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (windows) {
                device.os = 'windows';
                device.osVersion = windows[2];
                device.windows = true;
            }
            if (android && !windows) {
                device.os = 'android';
                device.osVersion = android[2];
                device.android = true;
                device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
            }
            if (ipad || iphone || ipod) {
                device.os = 'ios';
                device.ios = true;
            }
            if (iphone && !ipod) {
                device.osVersion = iphone[2].replace(/_/g, '.');
                device.iphone = true;
            }
            if (ipad) {
                device.osVersion = ipad[2].replace(/_/g, '.');
                device.ipad = true;
            }
            if (ipod) {
                device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
                device.iphone = true;
            }
            if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) { if (device.osVersion.split('.')[0] === '10') { device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0]; } }
            device.desktop = !(device.os || device.android || device.webView);
            device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);
            if (device.os && device.os === 'ios') {
                var osVersionArr = device.osVersion.split('.');
                var metaViewport = doc.querySelector('meta[name="viewport"]');
                device.minimalUi = !device.webView && (ipod || iphone) && (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) && metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
            }
            device.pixelRatio = win.devicePixelRatio || 1;
            return device;
        }());

        function onTouchStart(event) {
            var swiper = this;
            var data = swiper.touchEventsData;
            var params = swiper.params;
            var touches = swiper.touches;
            if (swiper.animating && params.preventInteractionOnTransition) { return; }
            var e = event;
            if (e.originalEvent) { e = e.originalEvent; }
            data.isTouchEvent = e.type === 'touchstart';
            if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
            if (data.isTouched && data.isMoved) { return; }
            if (params.noSwiping && $(e.target).closest(params.noSwipingSelector ? params.noSwipingSelector : ("." + (params.noSwipingClass)))[0]) { swiper.allowClick = true; return; }
            if (params.swipeHandler) { if (!$(e).closest(params.swipeHandler)[0]) { return; } }
            touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
            touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            var startX = touches.currentX;
            var startY = touches.currentY;
            var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
            var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
            if (edgeSwipeDetection && ((startX <= edgeSwipeThreshold) || (startX >= win.screen.width - edgeSwipeThreshold))) { return; }
            Utils.extend(data, { isTouched: true, isMoved: false, allowTouchCallbacks: true, isScrolling: undefined, startMoving: undefined, });
            touches.startX = startX;
            touches.startY = startY;
            data.touchStartTime = Utils.now();
            swiper.allowClick = true;
            swiper.updateSize();
            swiper.swipeDirection = undefined;
            if (params.threshold > 0) { data.allowThresholdMove = false; }
            if (e.type !== 'touchstart') {
                var preventDefault = true;
                if ($(e.target).is(data.formElements)) { preventDefault = false; }
                if (doc.activeElement && $(doc.activeElement).is(data.formElements) && doc.activeElement !== e.target) { doc.activeElement.blur(); }
                if (preventDefault && swiper.allowTouchMove) { e.preventDefault(); }
            }
            swiper.emit('touchStart', e);
        }

        function onTouchMove(event) {
            var swiper = this;
            var data = swiper.touchEventsData;
            var params = swiper.params;
            var touches = swiper.touches;
            var rtl = swiper.rtlTranslate;
            var e = event;
            if (e.originalEvent) { e = e.originalEvent; }
            if (!data.isTouched) {
                if (data.startMoving && data.isScrolling) { swiper.emit('touchMoveOpposite', e); }
                return;
            }
            if (data.isTouchEvent && e.type === 'mousemove') { return; }
            var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
            var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
            if (e.preventedByNestedSwiper) {
                touches.startX = pageX;
                touches.startY = pageY;
                return;
            }
            if (!swiper.allowTouchMove) {
                swiper.allowClick = false;
                if (data.isTouched) {
                    Utils.extend(touches, { startX: pageX, startY: pageY, currentX: pageX, currentY: pageY, });
                    data.touchStartTime = Utils.now();
                }
                return;
            }
            if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
                if (swiper.isVertical()) {
                    if ((pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())) {
                        data.isTouched = false;
                        data.isMoved = false;
                        return;
                    }
                } else if ((pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())) { return; }
            }
            if (data.isTouchEvent && doc.activeElement) {
                if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
                    data.isMoved = true;
                    swiper.allowClick = false;
                    return;
                }
            }
            if (data.allowTouchCallbacks) { swiper.emit('touchMove', e); }
            if (e.targetTouches && e.targetTouches.length > 1) { return; }
            touches.currentX = pageX;
            touches.currentY = pageY;
            var diffX = touches.currentX - touches.startX;
            var diffY = touches.currentY - touches.startY;
            if (swiper.params.threshold && Math.sqrt((Math.pow(diffX, 2)) + (Math.pow(diffY, 2))) < swiper.params.threshold) { return; }
            if (typeof data.isScrolling === 'undefined') {
                var touchAngle;
                if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) { data.isScrolling = false; } else {
                    if ((diffX * diffX) + (diffY * diffY) >= 25) {
                        touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
                        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
                    }
                }
            }
            if (data.isScrolling) { swiper.emit('touchMoveOpposite', e); }
            if (typeof data.startMoving === 'undefined') { if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) { data.startMoving = true; } }
            if (data.isScrolling) { data.isTouched = false; return; }
            if (!data.startMoving) { return; }
            swiper.allowClick = false;
            e.preventDefault();
            if (params.touchMoveStopPropagation && !params.nested) { e.stopPropagation(); }
            if (!data.isMoved) {
                if (params.loop) { swiper.loopFix(); }
                data.startTranslate = swiper.getTranslate();
                swiper.setTransition(0);
                if (swiper.animating) { swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend'); }
                data.allowMomentumBounce = false;
                if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) { swiper.setGrabCursor(true); }
                swiper.emit('sliderFirstMove', e);
            }
            swiper.emit('sliderMove', e);
            data.isMoved = true;
            var diff = swiper.isHorizontal() ? diffX : diffY;
            touches.diff = diff;
            diff *= params.touchRatio;
            if (rtl) { diff = -diff; }
            swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
            data.currentTranslate = diff + data.startTranslate;
            var disableParentSwiper = true;
            var resistanceRatio = params.resistanceRatio;
            if (params.touchReleaseOnEdges) { resistanceRatio = 0; }
            if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) { disableParentSwiper = false; if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow((-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio)); } } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) { disableParentSwiper = false; if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow((swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio)); } }
            if (disableParentSwiper) { e.preventedByNestedSwiper = true; }
            if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) { data.currentTranslate = data.startTranslate; }
            if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) { data.currentTranslate = data.startTranslate; }
            if (params.threshold > 0) {
                if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                    if (!data.allowThresholdMove) {
                        data.allowThresholdMove = true;
                        touches.startX = touches.currentX;
                        touches.startY = touches.currentY;
                        data.currentTranslate = data.startTranslate;
                        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                        return;
                    }
                } else { data.currentTranslate = data.startTranslate; return; }
            }
            if (!params.followFinger) { return; }
            if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            if (params.freeMode) {
                if (data.velocities.length === 0) { data.velocities.push({ position: touches[swiper.isHorizontal() ? 'startX' : 'startY'], time: data.touchStartTime, }); }
                data.velocities.push({ position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'], time: Utils.now(), });
            }
            swiper.updateProgress(data.currentTranslate);
            swiper.setTranslate(data.currentTranslate);
        }

        function onTouchEnd(event) {
            var swiper = this;
            var data = swiper.touchEventsData;
            var params = swiper.params;
            var touches = swiper.touches;
            var rtl = swiper.rtlTranslate;
            var $wrapperEl = swiper.$wrapperEl;
            var slidesGrid = swiper.slidesGrid;
            var snapGrid = swiper.snapGrid;
            var e = event;
            if (e.originalEvent) { e = e.originalEvent; }
            if (data.allowTouchCallbacks) { swiper.emit('touchEnd', e); }
            data.allowTouchCallbacks = false;
            if (!data.isTouched) {
                if (data.isMoved && params.grabCursor) { swiper.setGrabCursor(false); }
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) { swiper.setGrabCursor(false); }
            var touchEndTime = Utils.now();
            var timeDiff = touchEndTime - data.touchStartTime;
            if (swiper.allowClick) {
                swiper.updateClickedSlide(e);
                swiper.emit('tap', e);
                if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
                    if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
                    data.clickTimeout = Utils.nextTick(function() {
                        if (!swiper || swiper.destroyed) { return; }
                        swiper.emit('click', e);
                    }, 300);
                }
                if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
                    if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
                    swiper.emit('doubleTap', e);
                }
            }
            data.lastClickTime = Utils.now();
            Utils.nextTick(function() { if (!swiper.destroyed) { swiper.allowClick = true; } });
            if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
                data.isTouched = false;
                data.isMoved = false;
                data.startMoving = false;
                return;
            }
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            var currentPos;
            if (params.followFinger) { currentPos = rtl ? swiper.translate : -swiper.translate; } else { currentPos = -data.currentTranslate; }
            if (params.freeMode) {
                if (currentPos < -swiper.minTranslate()) { swiper.slideTo(swiper.activeIndex); return; }
                if (currentPos > -swiper.maxTranslate()) {
                    if (swiper.slides.length < snapGrid.length) { swiper.slideTo(snapGrid.length - 1); } else { swiper.slideTo(swiper.slides.length - 1); }
                    return;
                }
                if (params.freeModeMomentum) {
                    if (data.velocities.length > 1) {
                        var lastMoveEvent = data.velocities.pop();
                        var velocityEvent = data.velocities.pop();
                        var distance = lastMoveEvent.position - velocityEvent.position;
                        var time = lastMoveEvent.time - velocityEvent.time;
                        swiper.velocity = distance / time;
                        swiper.velocity /= 2;
                        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) { swiper.velocity = 0; }
                        if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) { swiper.velocity = 0; }
                    } else { swiper.velocity = 0; }
                    swiper.velocity *= params.freeModeMomentumVelocityRatio;
                    data.velocities.length = 0;
                    var momentumDuration = 1000 * params.freeModeMomentumRatio;
                    var momentumDistance = swiper.velocity * momentumDuration;
                    var newPosition = swiper.translate + momentumDistance;
                    if (rtl) { newPosition = -newPosition; }
                    var doBounce = false;
                    var afterBouncePosition;
                    var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
                    var needsLoopFix;
                    if (newPosition < swiper.maxTranslate()) {
                        if (params.freeModeMomentumBounce) {
                            if (newPosition + swiper.maxTranslate() < -bounceAmount) { newPosition = swiper.maxTranslate() - bounceAmount; }
                            afterBouncePosition = swiper.maxTranslate();
                            doBounce = true;
                            data.allowMomentumBounce = true;
                        } else { newPosition = swiper.maxTranslate(); }
                        if (params.loop && params.centeredSlides) { needsLoopFix = true; }
                    } else if (newPosition > swiper.minTranslate()) {
                        if (params.freeModeMomentumBounce) {
                            if (newPosition - swiper.minTranslate() > bounceAmount) { newPosition = swiper.minTranslate() + bounceAmount; }
                            afterBouncePosition = swiper.minTranslate();
                            doBounce = true;
                            data.allowMomentumBounce = true;
                        } else { newPosition = swiper.minTranslate(); }
                        if (params.loop && params.centeredSlides) { needsLoopFix = true; }
                    } else if (params.freeModeSticky) {
                        var nextSlide;
                        for (var j = 0; j < snapGrid.length; j += 1) { if (snapGrid[j] > -newPosition) { nextSlide = j; break; } }
                        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') { newPosition = snapGrid[nextSlide]; } else { newPosition = snapGrid[nextSlide - 1]; }
                        newPosition = -newPosition;
                    }
                    if (needsLoopFix) { swiper.once('transitionEnd', function() { swiper.loopFix(); }); }
                    if (swiper.velocity !== 0) { if (rtl) { momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity); } else { momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity); } } else if (params.freeModeSticky) { swiper.slideToClosest(); return; }
                    if (params.freeModeMomentumBounce && doBounce) {
                        swiper.updateProgress(afterBouncePosition);
                        swiper.setTransition(momentumDuration);
                        swiper.setTranslate(newPosition);
                        swiper.transitionStart(true, swiper.swipeDirection);
                        swiper.animating = true;
                        $wrapperEl.transitionEnd(function() {
                            if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
                            swiper.emit('momentumBounce');
                            swiper.setTransition(params.speed);
                            swiper.setTranslate(afterBouncePosition);
                            $wrapperEl.transitionEnd(function() {
                                if (!swiper || swiper.destroyed) { return; }
                                swiper.transitionEnd();
                            });
                        });
                    } else if (swiper.velocity) {
                        swiper.updateProgress(newPosition);
                        swiper.setTransition(momentumDuration);
                        swiper.setTranslate(newPosition);
                        swiper.transitionStart(true, swiper.swipeDirection);
                        if (!swiper.animating) {
                            swiper.animating = true;
                            $wrapperEl.transitionEnd(function() {
                                if (!swiper || swiper.destroyed) { return; }
                                swiper.transitionEnd();
                            });
                        }
                    } else { swiper.updateProgress(newPosition); }
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                } else if (params.freeModeSticky) { swiper.slideToClosest(); return; }
                if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                return;
            }
            var stopIndex = 0;
            var groupSize = swiper.slidesSizesGrid[0];
            for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
                if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
                    if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
                        stopIndex = i;
                        groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
                    }
                } else if (currentPos >= slidesGrid[i]) {
                    stopIndex = i;
                    groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
                }
            }
            var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
            if (timeDiff > params.longSwipesMs) {
                if (!params.longSwipes) { swiper.slideTo(swiper.activeIndex); return; }
                if (swiper.swipeDirection === 'next') {
                    if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); } else { swiper.slideTo(stopIndex); }
                }
                if (swiper.swipeDirection === 'prev') {
                    if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); } else { swiper.slideTo(stopIndex); }
                }
            } else {
                if (!params.shortSwipes) { swiper.slideTo(swiper.activeIndex); return; }
                if (swiper.swipeDirection === 'next') { swiper.slideTo(stopIndex + params.slidesPerGroup); }
                if (swiper.swipeDirection === 'prev') { swiper.slideTo(stopIndex); }
            }
        }

        function onResize() {
            var swiper = this;
            var params = swiper.params;
            var el = swiper.el;
            if (el && el.offsetWidth === 0) { return; }
            if (params.breakpoints) { swiper.setBreakpoint(); }
            var allowSlideNext = swiper.allowSlideNext;
            var allowSlidePrev = swiper.allowSlidePrev;
            var snapGrid = swiper.snapGrid;
            swiper.allowSlideNext = true;
            swiper.allowSlidePrev = true;
            swiper.updateSize();
            swiper.updateSlides();
            if (params.freeMode) {
                var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
                if (params.autoHeight) { swiper.updateAutoHeight(); }
            } else { swiper.updateSlidesClasses(); if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) { swiper.slideTo(swiper.slides.length - 1, 0, false, true); } else { swiper.slideTo(swiper.activeIndex, 0, false, true); } }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) { swiper.checkOverflow(); }
        }

        function onClick(e) {
            var swiper = this;
            if (!swiper.allowClick) {
                if (swiper.params.preventClicks) { e.preventDefault(); }
                if (swiper.params.preventClicksPropagation && swiper.animating) {
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                }
            }
        }

        function attachEvents() {
            var swiper = this;
            var params = swiper.params;
            var touchEvents = swiper.touchEvents;
            var el = swiper.el;
            var wrapperEl = swiper.wrapperEl; {
                swiper.onTouchStart = onTouchStart.bind(swiper);
                swiper.onTouchMove = onTouchMove.bind(swiper);
                swiper.onTouchEnd = onTouchEnd.bind(swiper);
            }
            swiper.onClick = onClick.bind(swiper);
            var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
            var capture = !!params.nested; {
                if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                    target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
                    doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
                    doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
                } else {
                    if (Support.touch) {
                        var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
                        target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                        target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
                        target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                    }
                    if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                        target.addEventListener('mousedown', swiper.onTouchStart, false);
                        doc.addEventListener('mousemove', swiper.onTouchMove, capture);
                        doc.addEventListener('mouseup', swiper.onTouchEnd, false);
                    }
                }
                if (params.preventClicks || params.preventClicksPropagation) { target.addEventListener('click', swiper.onClick, true); }
            }
            swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
        }

        function detachEvents() {
            var swiper = this;
            var params = swiper.params;
            var touchEvents = swiper.touchEvents;
            var el = swiper.el;
            var wrapperEl = swiper.wrapperEl;
            var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
            var capture = !!params.nested; {
                if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                    target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
                    doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                    doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
                } else {
                    if (Support.touch) {
                        var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
                        target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
                        target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
                        target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
                    }
                    if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                        target.removeEventListener('mousedown', swiper.onTouchStart, false);
                        doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
                        doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
                    }
                }
                if (params.preventClicks || params.preventClicksPropagation) { target.removeEventListener('click', swiper.onClick, true); }
            }
            swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
        }
        var events = { attachEvents: attachEvents, detachEvents: detachEvents, };

        function setBreakpoint() {
            var swiper = this;
            var activeIndex = swiper.activeIndex;
            var initialized = swiper.initialized;
            var loopedSlides = swiper.loopedSlides;
            if (loopedSlides === void 0) loopedSlides = 0;
            var params = swiper.params;
            var breakpoints = params.breakpoints;
            if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }
            var breakpoint = swiper.getBreakpoint(breakpoints);
            if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
                var breakPointsParams = breakpoint in breakpoints ? breakpoints[breakpoint] : swiper.originalParams;
                var needsReLoop = params.loop && (breakPointsParams.slidesPerView !== params.slidesPerView);
                Utils.extend(swiper.params, breakPointsParams);
                Utils.extend(swiper, { allowTouchMove: swiper.params.allowTouchMove, allowSlideNext: swiper.params.allowSlideNext, allowSlidePrev: swiper.params.allowSlidePrev, });
                swiper.currentBreakpoint = breakpoint;
                if (needsReLoop && initialized) {
                    swiper.loopDestroy();
                    swiper.loopCreate();
                    swiper.updateSlides();
                    swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
                }
                swiper.emit('breakpoint', breakPointsParams);
            }
        }

        function getBreakpoint(breakpoints) {
            if (!breakpoints) { return undefined; }
            var breakpoint = false;
            var points = [];
            Object.keys(breakpoints).forEach(function(point) { points.push(point); });
            points.sort(function(a, b) { return parseInt(a, 10) - parseInt(b, 10); });
            for (var i = 0; i < points.length; i += 1) { var point = points[i]; if (point >= win.innerWidth && !breakpoint) { breakpoint = point; } }
            return breakpoint || 'max';
        }
        var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };
        var Browser = (function Browser() {
            function isSafari() { var ua = win.navigator.userAgent.toLowerCase(); return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0); }
            return { isIE: !!win.navigator.userAgent.match(/Trident/g) || !!win.navigator.userAgent.match(/MSIE/g), isSafari: isSafari(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent), };
        }());

        function addClasses() {
            var swiper = this;
            var classNames = swiper.classNames;
            var params = swiper.params;
            var rtl = swiper.rtl;
            var $el = swiper.$el;
            var suffixes = [];
            suffixes.push(params.direction);
            if (params.freeMode) { suffixes.push('free-mode'); }
            if (!Support.flexbox) { suffixes.push('no-flexbox'); }
            if (params.autoHeight) { suffixes.push('autoheight'); }
            if (rtl) { suffixes.push('rtl'); }
            if (params.slidesPerColumn > 1) { suffixes.push('multirow'); }
            if (Device.android) { suffixes.push('android'); }
            if (Device.ios) { suffixes.push('ios'); }
            if (Browser.isIE && (Support.pointerEvents || Support.prefixedPointerEvents)) { suffixes.push(("wp8-" + (params.direction))); }
            suffixes.forEach(function(suffix) { classNames.push(params.containerModifierClass + suffix); });
            $el.addClass(classNames.join(' '));
        }

        function removeClasses() {
            var swiper = this;
            var $el = swiper.$el;
            var classNames = swiper.classNames;
            $el.removeClass(classNames.join(' '));
        }
        var classes = { addClasses: addClasses, removeClasses: removeClasses };

        function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
            var image;

            function onReady() { if (callback) { callback(); } }
            if (!imageEl.complete || !checkForComplete) {
                if (src) {
                    image = new win.Image();
                    image.onload = onReady;
                    image.onerror = onReady;
                    if (sizes) { image.sizes = sizes; }
                    if (srcset) { image.srcset = srcset; }
                    if (src) { image.src = src; }
                } else { onReady(); }
            } else { onReady(); }
        }

        function preloadImages() {
            var swiper = this;
            swiper.imagesToLoad = swiper.$el.find('img');

            function onReady() {
                if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
                if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
                if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
                    if (swiper.params.updateOnImagesReady) { swiper.update(); }
                    swiper.emit('imagesReady');
                }
            }
            for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
                var imageEl = swiper.imagesToLoad[i];
                swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
            }
        }
        var images = { loadImage: loadImage, preloadImages: preloadImages, };

        function checkOverflow() {
            var swiper = this;
            var wasLocked = swiper.isLocked;
            swiper.isLocked = swiper.snapGrid.length === 1;
            swiper.allowSlideNext = !swiper.isLocked;
            swiper.allowSlidePrev = !swiper.isLocked;
            if (wasLocked !== swiper.isLocked) { swiper.emit(swiper.isLocked ? 'lock' : 'unlock'); }
            if (wasLocked && wasLocked !== swiper.isLocked) {
                swiper.isEnd = false;
                swiper.navigation.update();
            }
        }
        var checkOverflow$1 = { checkOverflow: checkOverflow };
        var defaults = { init: true, direction: 'horizontal', touchEventsTarget: 'container', initialSlide: 0, speed: 300, preventInteractionOnTransition: false, edgeSwipeDetection: false, edgeSwipeThreshold: 20, freeMode: false, freeModeMomentum: true, freeModeMomentumRatio: 1, freeModeMomentumBounce: true, freeModeMomentumBounceRatio: 1, freeModeMomentumVelocityRatio: 1, freeModeSticky: false, freeModeMinimumVelocity: 0.02, autoHeight: false, setWrapperSize: false, virtualTranslate: false, effect: 'slide', breakpoints: undefined, spaceBetween: 0, slidesPerView: 1, slidesPerColumn: 1, slidesPerColumnFill: 'column', slidesPerGroup: 1, centeredSlides: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: true, watchOverflow: false, roundLengths: false, touchRatio: 1, touchAngle: 45, simulateTouch: true, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, allowTouchMove: true, threshold: 0, touchMoveStopPropagation: true, touchReleaseOnEdges: false, uniqueNavElements: true, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, watchSlidesVisibility: false, grabCursor: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, preloadImages: true, updateOnImagesReady: true, loop: false, loopAdditionalSlides: 0, loopedSlides: null, loopFillGroupWithBlank: false, allowSlidePrev: true, allowSlideNext: true, swipeHandler: null, noSwiping: true, noSwipingClass: 'swiper-no-swiping', noSwipingSelector: null, passiveListeners: true, containerModifierClass: 'swiper-container-', slideClass: 'swiper-slide', slideBlankClass: 'swiper-slide-invisible-blank', slideActiveClass: 'swiper-slide-active', slideDuplicateActiveClass: 'swiper-slide-duplicate-active', slideVisibleClass: 'swiper-slide-visible', slideDuplicateClass: 'swiper-slide-duplicate', slideNextClass: 'swiper-slide-next', slideDuplicateNextClass: 'swiper-slide-duplicate-next', slidePrevClass: 'swiper-slide-prev', slideDuplicatePrevClass: 'swiper-slide-duplicate-prev', wrapperClass: 'swiper-wrapper', runCallbacksOnInit: true, };
        var prototypes = { update: update, translate: translate, transition: transition$1, slide: slide, loop: loop, grabCursor: grabCursor, manipulation: manipulation, events: events, breakpoints: breakpoints, checkOverflow: checkOverflow$1, classes: classes, images: images, };
        var extendedDefaults = {};
        var Swiper = (function(SwiperClass$$1) {
            function Swiper() {
                var assign;
                var args = [],
                    len = arguments.length;
                while (len--) args[len] = arguments[len];
                var el;
                var params;
                if (args.length === 1 && args[0].constructor && args[0].constructor === Object) { params = args[0]; } else {
                    (assign = args, el = assign[0], params = assign[1]);
                }
                if (!params) { params = {}; }
                params = Utils.extend({}, params);
                if (el && !params.el) { params.el = el; }
                SwiperClass$$1.call(this, params);
                Object.keys(prototypes).forEach(function(prototypeGroup) { Object.keys(prototypes[prototypeGroup]).forEach(function(protoMethod) { if (!Swiper.prototype[protoMethod]) { Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod]; } }); });
                var swiper = this;
                if (typeof swiper.modules === 'undefined') { swiper.modules = {}; }
                Object.keys(swiper.modules).forEach(function(moduleName) {
                    var module = swiper.modules[moduleName];
                    if (module.params) {
                        var moduleParamName = Object.keys(module.params)[0];
                        var moduleParams = module.params[moduleParamName];
                        if (typeof moduleParams !== 'object') { return; }
                        if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
                        if (params[moduleParamName] === true) { params[moduleParamName] = { enabled: true }; }
                        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) { params[moduleParamName].enabled = true; }
                        if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
                    }
                });
                var swiperParams = Utils.extend({}, defaults);
                swiper.useModulesParams(swiperParams);
                swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
                swiper.originalParams = Utils.extend({}, swiper.params);
                swiper.passedParams = Utils.extend({}, params);
                swiper.$ = $;
                var $el = $(swiper.params.el);
                el = $el[0];
                if (!el) { return undefined; }
                if ($el.length > 1) {
                    var swipers = [];
                    $el.each(function(index, containerEl) {
                        var newParams = Utils.extend({}, params, { el: containerEl });
                        swipers.push(new Swiper(newParams));
                    });
                    return swipers;
                }
                el.swiper = swiper;
                $el.data('swiper', swiper);
                var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));
                Utils.extend(swiper, {
                    $el: $el,
                    el: el,
                    $wrapperEl: $wrapperEl,
                    wrapperEl: $wrapperEl[0],
                    classNames: [],
                    slides: $(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function isHorizontal() { return swiper.params.direction === 'horizontal'; },
                    isVertical: function isVertical() { return swiper.params.direction === 'vertical'; },
                    rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                    rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
                    wrongRTL: $wrapperEl.css('display') === '-webkit-box',
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: true,
                    isEnd: false,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: false,
                    allowSlideNext: swiper.params.allowSlideNext,
                    allowSlidePrev: swiper.params.allowSlidePrev,
                    touchEvents: (function touchEvents() {
                        var touch = ['touchstart', 'touchmove', 'touchend'];
                        var desktop = ['mousedown', 'mousemove', 'mouseup'];
                        if (Support.pointerEvents) { desktop = ['pointerdown', 'pointermove', 'pointerup']; } else if (Support.prefixedPointerEvents) { desktop = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp']; }
                        swiper.touchEventsTouch = { start: touch[0], move: touch[1], end: touch[2], };
                        swiper.touchEventsDesktop = { start: desktop[0], move: desktop[1], end: desktop[2], };
                        return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
                    }()),
                    touchEventsData: { isTouched: undefined, isMoved: undefined, allowTouchCallbacks: undefined, touchStartTime: undefined, isScrolling: undefined, currentTranslate: undefined, startTranslate: undefined, allowThresholdMove: undefined, formElements: 'input, select, option, textarea, button, video', lastClickTime: Utils.now(), clickTimeout: undefined, velocities: [], allowMomentumBounce: undefined, isTouchEvent: undefined, startMoving: undefined, },
                    allowClick: true,
                    allowTouchMove: swiper.params.allowTouchMove,
                    touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0, },
                    imagesToLoad: [],
                    imagesLoaded: 0,
                });
                swiper.useModules();
                if (swiper.params.init) { swiper.init(); }
                return swiper;
            }
            if (SwiperClass$$1) Swiper.__proto__ = SwiperClass$$1;
            Swiper.prototype = Object.create(SwiperClass$$1 && SwiperClass$$1.prototype);
            Swiper.prototype.constructor = Swiper;
            var staticAccessors = { extendedDefaults: { configurable: true }, defaults: { configurable: true }, Class: { configurable: true }, $: { configurable: true } };
            Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic() {
                var swiper = this;
                var params = swiper.params;
                var slides = swiper.slides;
                var slidesGrid = swiper.slidesGrid;
                var swiperSize = swiper.size;
                var activeIndex = swiper.activeIndex;
                var spv = 1;
                if (params.centeredSlides) {
                    var slideSize = slides[activeIndex].swiperSlideSize;
                    var breakLoop;
                    for (var i = activeIndex + 1; i < slides.length; i += 1) {
                        if (slides[i] && !breakLoop) {
                            slideSize += slides[i].swiperSlideSize;
                            spv += 1;
                            if (slideSize > swiperSize) { breakLoop = true; }
                        }
                    }
                    for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
                        if (slides[i$1] && !breakLoop) {
                            slideSize += slides[i$1].swiperSlideSize;
                            spv += 1;
                            if (slideSize > swiperSize) { breakLoop = true; }
                        }
                    }
                } else { for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) { if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) { spv += 1; } } }
                return spv;
            };
            Swiper.prototype.update = function update$$1() {
                var swiper = this;
                if (!swiper || swiper.destroyed) { return; }
                var snapGrid = swiper.snapGrid;
                var params = swiper.params;
                if (params.breakpoints) { swiper.setBreakpoint(); }
                swiper.updateSize();
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();

                function setTranslate() {
                    var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                    var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                    swiper.setTranslate(newTranslate);
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                }
                var translated;
                if (swiper.params.freeMode) { setTranslate(); if (swiper.params.autoHeight) { swiper.updateAutoHeight(); } } else {
                    if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) { translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true); } else { translated = swiper.slideTo(swiper.activeIndex, 0, false, true); }
                    if (!translated) { setTranslate(); }
                }
                if (params.watchOverflow && snapGrid !== swiper.snapGrid) { swiper.checkOverflow(); }
                swiper.emit('update');
            };
            Swiper.prototype.init = function init() {
                var swiper = this;
                if (swiper.initialized) { return; }
                swiper.emit('beforeInit');
                if (swiper.params.breakpoints) { swiper.setBreakpoint(); }
                swiper.addClasses();
                if (swiper.params.loop) { swiper.loopCreate(); }
                swiper.updateSize();
                swiper.updateSlides();
                if (swiper.params.watchOverflow) { swiper.checkOverflow(); }
                if (swiper.params.grabCursor) { swiper.setGrabCursor(); }
                if (swiper.params.preloadImages) { swiper.preloadImages(); }
                if (swiper.params.loop) { swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit); } else { swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit); }
                swiper.attachEvents();
                swiper.initialized = true;
                swiper.emit('init');
            };
            Swiper.prototype.destroy = function destroy(deleteInstance, cleanStyles) {
                if (deleteInstance === void 0) deleteInstance = true;
                if (cleanStyles === void 0) cleanStyles = true;
                var swiper = this;
                var params = swiper.params;
                var $el = swiper.$el;
                var $wrapperEl = swiper.$wrapperEl;
                var slides = swiper.slides;
                if (typeof swiper.params === 'undefined' || swiper.destroyed) { return null; }
                swiper.emit('beforeDestroy');
                swiper.initialized = false;
                swiper.detachEvents();
                if (params.loop) { swiper.loopDestroy(); }
                if (cleanStyles) {
                    swiper.removeClasses();
                    $el.removeAttr('style');
                    $wrapperEl.removeAttr('style');
                    if (slides && slides.length) { slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index').removeAttr('data-swiper-column').removeAttr('data-swiper-row'); }
                }
                swiper.emit('destroy');
                Object.keys(swiper.eventsListeners).forEach(function(eventName) { swiper.off(eventName); });
                if (deleteInstance !== false) {
                    swiper.$el[0].swiper = null;
                    swiper.$el.data('swiper', null);
                    Utils.deleteProps(swiper);
                }
                swiper.destroyed = true;
                return null;
            };
            Swiper.extendDefaults = function extendDefaults(newDefaults) { Utils.extend(extendedDefaults, newDefaults); };
            staticAccessors.extendedDefaults.get = function() { return extendedDefaults; };
            staticAccessors.defaults.get = function() { return defaults; };
            staticAccessors.Class.get = function() { return SwiperClass$$1; };
            staticAccessors.$.get = function() { return $; };
            Object.defineProperties(Swiper, staticAccessors);
            return Swiper;
        }(SwiperClass));
        var Device$1 = { name: 'device', proto: { device: Device, }, static: { device: Device, }, };
        var Support$1 = { name: 'support', proto: { support: Support, }, static: { support: Support, }, };
        var Browser$1 = { name: 'browser', proto: { browser: Browser, }, static: { browser: Browser, }, };
        var Resize = {
            name: 'resize',
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, {
                    resize: {
                        resizeHandler: function resizeHandler() {
                            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
                            swiper.emit('beforeResize');
                            swiper.emit('resize');
                        },
                        orientationChangeHandler: function orientationChangeHandler() {
                            if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
                            swiper.emit('orientationchange');
                        },
                    },
                });
            },
            on: {
                init: function init() {
                    var swiper = this;
                    win.addEventListener('resize', swiper.resize.resizeHandler);
                    win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
                },
                destroy: function destroy() {
                    var swiper = this;
                    win.removeEventListener('resize', swiper.resize.resizeHandler);
                    win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
                },
            },
        };
        var Observer = {
            func: win.MutationObserver || win.WebkitMutationObserver,
            attach: function attach(target, options) {
                if (options === void 0) options = {};
                var swiper = this;
                var ObserverFunc = Observer.func;
                var observer = new ObserverFunc(function(mutations) {
                    if (mutations.length === 1) { swiper.emit('observerUpdate', mutations[0]); return; }
                    var observerUpdate = function observerUpdate() { swiper.emit('observerUpdate', mutations[0]); };
                    if (win.requestAnimationFrame) { win.requestAnimationFrame(observerUpdate); } else { win.setTimeout(observerUpdate, 0); }
                });
                observer.observe(target, { attributes: typeof options.attributes === 'undefined' ? true : options.attributes, childList: typeof options.childList === 'undefined' ? true : options.childList, characterData: typeof options.characterData === 'undefined' ? true : options.characterData, });
                swiper.observer.observers.push(observer);
            },
            init: function init() {
                var swiper = this;
                if (!Support.observer || !swiper.params.observer) { return; }
                if (swiper.params.observeParents) { var containerParents = swiper.$el.parents(); for (var i = 0; i < containerParents.length; i += 1) { swiper.observer.attach(containerParents[i]); } }
                swiper.observer.attach(swiper.$el[0], { childList: false });
                swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.observer.observers.forEach(function(observer) { observer.disconnect(); });
                swiper.observer.observers = [];
            },
        };
        var Observer$1 = {
            name: 'observer',
            params: { observer: false, observeParents: false, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { observer: { init: Observer.init.bind(swiper), attach: Observer.attach.bind(swiper), destroy: Observer.destroy.bind(swiper), observers: [], }, });
            },
            on: {
                init: function init() {
                    var swiper = this;
                    swiper.observer.init();
                },
                destroy: function destroy() {
                    var swiper = this;
                    swiper.observer.destroy();
                },
            },
        };
        var Virtual = {
            update: function update(force) {
                var swiper = this;
                var ref = swiper.params;
                var slidesPerView = ref.slidesPerView;
                var slidesPerGroup = ref.slidesPerGroup;
                var centeredSlides = ref.centeredSlides;
                var ref$1 = swiper.virtual;
                var previousFrom = ref$1.from;
                var previousTo = ref$1.to;
                var slides = ref$1.slides;
                var previousSlidesGrid = ref$1.slidesGrid;
                var renderSlide = ref$1.renderSlide;
                var previousOffset = ref$1.offset;
                swiper.updateActiveIndex();
                var activeIndex = swiper.activeIndex || 0;
                var offsetProp;
                if (swiper.rtlTranslate) { offsetProp = 'right'; } else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }
                var slidesAfter;
                var slidesBefore;
                if (centeredSlides) {
                    slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup;
                    slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup;
                } else {
                    slidesAfter = slidesPerView + (slidesPerGroup - 1);
                    slidesBefore = slidesPerGroup;
                }
                var from = Math.max((activeIndex || 0) - slidesBefore, 0);
                var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
                var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
                Utils.extend(swiper.virtual, { from: from, to: to, offset: offset, slidesGrid: swiper.slidesGrid, });

                function onRendered() {
                    swiper.updateSlides();
                    swiper.updateProgress();
                    swiper.updateSlidesClasses();
                    if (swiper.lazy && swiper.params.lazy.enabled) { swiper.lazy.load(); }
                }
                if (previousFrom === from && previousTo === to && !force) {
                    if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) { swiper.slides.css(offsetProp, (offset + "px")); }
                    swiper.updateProgress();
                    return;
                }
                if (swiper.params.virtual.renderExternal) {
                    swiper.params.virtual.renderExternal.call(swiper, {
                        offset: offset,
                        from: from,
                        to: to,
                        slides: (function getSlides() {
                            var slidesToRender = [];
                            for (var i = from; i <= to; i += 1) { slidesToRender.push(slides[i]); }
                            return slidesToRender;
                        }()),
                    });
                    onRendered();
                    return;
                }
                var prependIndexes = [];
                var appendIndexes = [];
                if (force) { swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove(); } else { for (var i = previousFrom; i <= previousTo; i += 1) { if (i < from || i > to) { swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove(); } } }
                for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
                    if (i$1 >= from && i$1 <= to) {
                        if (typeof previousTo === 'undefined' || force) { appendIndexes.push(i$1); } else {
                            if (i$1 > previousTo) { appendIndexes.push(i$1); }
                            if (i$1 < previousFrom) { prependIndexes.push(i$1); }
                        }
                    }
                }
                appendIndexes.forEach(function(index) { swiper.$wrapperEl.append(renderSlide(slides[index], index)); });
                prependIndexes.sort(function(a, b) { return a < b; }).forEach(function(index) { swiper.$wrapperEl.prepend(renderSlide(slides[index], index)); });
                swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
                onRendered();
            },
            renderSlide: function renderSlide(slide, index) {
                var swiper = this;
                var params = swiper.params.virtual;
                if (params.cache && swiper.virtual.cache[index]) { return swiper.virtual.cache[index]; }
                var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
                if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
                if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
                return $slideEl;
            },
            appendSlide: function appendSlide(slide) {
                var swiper = this;
                swiper.virtual.slides.push(slide);
                swiper.virtual.update(true);
            },
            prependSlide: function prependSlide(slide) {
                var swiper = this;
                swiper.virtual.slides.unshift(slide);
                if (swiper.params.virtual.cache) {
                    var cache = swiper.virtual.cache;
                    var newCache = {};
                    Object.keys(cache).forEach(function(cachedIndex) { newCache[cachedIndex + 1] = cache[cachedIndex]; });
                    swiper.virtual.cache = newCache;
                }
                swiper.virtual.update(true);
                swiper.slideNext(0);
            },
        };
        var Virtual$1 = {
            name: 'virtual',
            params: { virtual: { enabled: false, slides: [], cache: true, renderSlide: null, renderExternal: null, }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { virtual: { update: Virtual.update.bind(swiper), appendSlide: Virtual.appendSlide.bind(swiper), prependSlide: Virtual.prependSlide.bind(swiper), renderSlide: Virtual.renderSlide.bind(swiper), slides: swiper.params.virtual.slides, cache: {}, }, });
            },
            on: {
                beforeInit: function beforeInit() {
                    var swiper = this;
                    if (!swiper.params.virtual.enabled) { return; }
                    swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
                    var overwriteParams = { watchSlidesProgress: true, };
                    Utils.extend(swiper.params, overwriteParams);
                    Utils.extend(swiper.originalParams, overwriteParams);
                    swiper.virtual.update();
                },
                setTranslate: function setTranslate() {
                    var swiper = this;
                    if (!swiper.params.virtual.enabled) { return; }
                    swiper.virtual.update();
                },
            },
        };
        var Keyboard = {
            handle: function handle(event) {
                var swiper = this;
                var rtl = swiper.rtlTranslate;
                var e = event;
                if (e.originalEvent) { e = e.originalEvent; }
                var kc = e.keyCode || e.charCode;
                if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) { return false; }
                if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) { return false; }
                if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) { return undefined; }
                if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) { return undefined; }
                if (swiper.params.keyboard.onlyInViewport && (kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
                    var inView = false;
                    if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) { return undefined; }
                    var windowWidth = win.innerWidth;
                    var windowHeight = win.innerHeight;
                    var swiperOffset = swiper.$el.offset();
                    if (rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
                    var swiperCoord = [
                        [swiperOffset.left, swiperOffset.top],
                        [swiperOffset.left + swiper.width, swiperOffset.top],
                        [swiperOffset.left, swiperOffset.top + swiper.height],
                        [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]
                    ];
                    for (var i = 0; i < swiperCoord.length; i += 1) { var point = swiperCoord[i]; if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) { inView = true; } }
                    if (!inView) { return undefined; }
                }
                if (swiper.isHorizontal()) {
                    if (kc === 37 || kc === 39) {
                        if (e.preventDefault) { e.preventDefault(); } else { e.returnValue = false; }
                    }
                    if ((kc === 39 && !rtl) || (kc === 37 && rtl)) { swiper.slideNext(); }
                    if ((kc === 37 && !rtl) || (kc === 39 && rtl)) { swiper.slidePrev(); }
                } else {
                    if (kc === 38 || kc === 40) {
                        if (e.preventDefault) { e.preventDefault(); } else { e.returnValue = false; }
                    }
                    if (kc === 40) { swiper.slideNext(); }
                    if (kc === 38) { swiper.slidePrev(); }
                }
                swiper.emit('keyPress', kc);
                return undefined;
            },
            enable: function enable() {
                var swiper = this;
                if (swiper.keyboard.enabled) { return; }
                $(doc).on('keydown', swiper.keyboard.handle);
                swiper.keyboard.enabled = true;
            },
            disable: function disable() {
                var swiper = this;
                if (!swiper.keyboard.enabled) { return; }
                $(doc).off('keydown', swiper.keyboard.handle);
                swiper.keyboard.enabled = false;
            },
        };
        var Keyboard$1 = {
            name: 'keyboard',
            params: { keyboard: { enabled: false, onlyInViewport: true, }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { keyboard: { enabled: false, enable: Keyboard.enable.bind(swiper), disable: Keyboard.disable.bind(swiper), handle: Keyboard.handle.bind(swiper), }, });
            },
            on: { init: function init() { var swiper = this; if (swiper.params.keyboard.enabled) { swiper.keyboard.enable(); } }, destroy: function destroy() { var swiper = this; if (swiper.keyboard.enabled) { swiper.keyboard.disable(); } }, },
        };

        function isEventSupported() {
            var eventName = 'onwheel';
            var isSupported = eventName in doc;
            if (!isSupported) {
                var element = doc.createElement('div');
                element.setAttribute(eventName, 'return;');
                isSupported = typeof element[eventName] === 'function';
            }
            if (!isSupported && doc.implementation && doc.implementation.hasFeature &&
                doc.implementation.hasFeature('', '') !== true) { isSupported = doc.implementation.hasFeature('Events.wheel', '3.0'); }
            return isSupported;
        }
        var Mousewheel = {
            lastScrollTime: Utils.now(),
            event: (function getEvent() {
                if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
                return isEventSupported() ? 'wheel' : 'mousewheel';
            }()),
            normalize: function normalize(e) {
                var PIXEL_STEP = 10;
                var LINE_HEIGHT = 40;
                var PAGE_HEIGHT = 800;
                var sX = 0;
                var sY = 0;
                var pX = 0;
                var pY = 0;
                if ('detail' in e) { sY = e.detail; }
                if ('wheelDelta' in e) { sY = -e.wheelDelta / 120; }
                if ('wheelDeltaY' in e) { sY = -e.wheelDeltaY / 120; }
                if ('wheelDeltaX' in e) { sX = -e.wheelDeltaX / 120; }
                if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                    sX = sY;
                    sY = 0;
                }
                pX = sX * PIXEL_STEP;
                pY = sY * PIXEL_STEP;
                if ('deltaY' in e) { pY = e.deltaY; }
                if ('deltaX' in e) { pX = e.deltaX; }
                if ((pX || pY) && e.deltaMode) {
                    if (e.deltaMode === 1) {
                        pX *= LINE_HEIGHT;
                        pY *= LINE_HEIGHT;
                    } else {
                        pX *= PAGE_HEIGHT;
                        pY *= PAGE_HEIGHT;
                    }
                }
                if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
                if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }
                return { spinX: sX, spinY: sY, pixelX: pX, pixelY: pY, };
            },
            handleMouseEnter: function handleMouseEnter() {
                var swiper = this;
                swiper.mouseEntered = true;
            },
            handleMouseLeave: function handleMouseLeave() {
                var swiper = this;
                swiper.mouseEntered = false;
            },
            handle: function handle(event) {
                var e = event;
                var swiper = this;
                var params = swiper.params.mousewheel;
                if (!swiper.mouseEntered && !params.releaseOnEdges) { return true; }
                if (e.originalEvent) { e = e.originalEvent; }
                var delta = 0;
                var rtlFactor = swiper.rtlTranslate ? -1 : 1;
                var data = Mousewheel.normalize(e);
                if (params.forceToAxis) {
                    if (swiper.isHorizontal()) {
                        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; } else { return true; }
                    } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; } else { return true; }
                } else { delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY; }
                if (delta === 0) { return true; }
                if (params.invert) { delta = -delta; }
                if (!swiper.params.freeMode) {
                    if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
                        if (delta < 0) {
                            if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                                swiper.slideNext();
                                swiper.emit('scroll', e);
                            } else if (params.releaseOnEdges) { return true; }
                        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                            swiper.slidePrev();
                            swiper.emit('scroll', e);
                        } else if (params.releaseOnEdges) { return true; }
                    }
                    swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
                } else {
                    if (swiper.params.loop) { swiper.loopFix(); }
                    var position = swiper.getTranslate() + (delta * params.sensitivity);
                    var wasBeginning = swiper.isBeginning;
                    var wasEnd = swiper.isEnd;
                    if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
                    if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }
                    swiper.setTransition(0);
                    swiper.setTranslate(position);
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                    if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) { swiper.updateSlidesClasses(); }
                    if (swiper.params.freeModeSticky) {
                        clearTimeout(swiper.mousewheel.timeout);
                        swiper.mousewheel.timeout = Utils.nextTick(function() { swiper.slideToClosest(); }, 300);
                    }
                    swiper.emit('scroll', e);
                    if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.autoplay.stop(); }
                    if (position === swiper.minTranslate() || position === swiper.maxTranslate()) { return true; }
                }
                if (e.preventDefault) { e.preventDefault(); } else { e.returnValue = false; }
                return false;
            },
            enable: function enable() {
                var swiper = this;
                if (!Mousewheel.event) { return false; }
                if (swiper.mousewheel.enabled) { return false; }
                var target = swiper.$el;
                if (swiper.params.mousewheel.eventsTarged !== 'container') { target = $(swiper.params.mousewheel.eventsTarged); }
                target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
                target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
                target.on(Mousewheel.event, swiper.mousewheel.handle);
                swiper.mousewheel.enabled = true;
                return true;
            },
            disable: function disable() {
                var swiper = this;
                if (!Mousewheel.event) { return false; }
                if (!swiper.mousewheel.enabled) { return false; }
                var target = swiper.$el;
                if (swiper.params.mousewheel.eventsTarged !== 'container') { target = $(swiper.params.mousewheel.eventsTarged); }
                target.off(Mousewheel.event, swiper.mousewheel.handle);
                swiper.mousewheel.enabled = false;
                return true;
            },
        };
        var Mousewheel$1 = {
            name: 'mousewheel',
            params: { mousewheel: { enabled: false, releaseOnEdges: false, invert: false, forceToAxis: false, sensitivity: 1, eventsTarged: 'container', }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { mousewheel: { enabled: false, enable: Mousewheel.enable.bind(swiper), disable: Mousewheel.disable.bind(swiper), handle: Mousewheel.handle.bind(swiper), handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper), handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper), lastScrollTime: Utils.now(), }, });
            },
            on: { init: function init() { var swiper = this; if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); } }, destroy: function destroy() { var swiper = this; if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); } }, },
        };
        var Navigation = {
            update: function update() {
                var swiper = this;
                var params = swiper.params.navigation;
                if (swiper.params.loop) { return; }
                var ref = swiper.navigation;
                var $nextEl = ref.$nextEl;
                var $prevEl = ref.$prevEl;
                if ($prevEl && $prevEl.length > 0) {
                    if (swiper.isBeginning) { $prevEl.addClass(params.disabledClass); } else { $prevEl.removeClass(params.disabledClass); }
                    $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
                }
                if ($nextEl && $nextEl.length > 0) {
                    if (swiper.isEnd) { $nextEl.addClass(params.disabledClass); } else { $nextEl.removeClass(params.disabledClass); }
                    $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
                }
            },
            init: function init() {
                var swiper = this;
                var params = swiper.params.navigation;
                if (!(params.nextEl || params.prevEl)) { return; }
                var $nextEl;
                var $prevEl;
                if (params.nextEl) { $nextEl = $(params.nextEl); if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) { $nextEl = swiper.$el.find(params.nextEl); } }
                if (params.prevEl) { $prevEl = $(params.prevEl); if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) { $prevEl = swiper.$el.find(params.prevEl); } }
                if ($nextEl && $nextEl.length > 0) {
                    $nextEl.on('click', function(e) {
                        e.preventDefault();
                        if (swiper.isEnd && !swiper.params.loop) { return; }
                        swiper.slideNext();
                    });
                }
                if ($prevEl && $prevEl.length > 0) {
                    $prevEl.on('click', function(e) {
                        e.preventDefault();
                        if (swiper.isBeginning && !swiper.params.loop) { return; }
                        swiper.slidePrev();
                    });
                }
                Utils.extend(swiper.navigation, { $nextEl: $nextEl, nextEl: $nextEl && $nextEl[0], $prevEl: $prevEl, prevEl: $prevEl && $prevEl[0], });
            },
            destroy: function destroy() {
                var swiper = this;
                var ref = swiper.navigation;
                var $nextEl = ref.$nextEl;
                var $prevEl = ref.$prevEl;
                if ($nextEl && $nextEl.length) {
                    $nextEl.off('click');
                    $nextEl.removeClass(swiper.params.navigation.disabledClass);
                }
                if ($prevEl && $prevEl.length) {
                    $prevEl.off('click');
                    $prevEl.removeClass(swiper.params.navigation.disabledClass);
                }
            },
        };
        var Navigation$1 = {
            name: 'navigation',
            params: { navigation: { nextEl: null, prevEl: null, hideOnClick: false, disabledClass: 'swiper-button-disabled', hiddenClass: 'swiper-button-hidden', lockClass: 'swiper-button-lock', }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { navigation: { init: Navigation.init.bind(swiper), update: Navigation.update.bind(swiper), destroy: Navigation.destroy.bind(swiper), }, });
            },
            on: {
                init: function init() {
                    var swiper = this;
                    swiper.navigation.init();
                    swiper.navigation.update();
                },
                toEdge: function toEdge() {
                    var swiper = this;
                    swiper.navigation.update();
                },
                fromEdge: function fromEdge() {
                    var swiper = this;
                    swiper.navigation.update();
                },
                destroy: function destroy() {
                    var swiper = this;
                    swiper.navigation.destroy();
                },
                click: function click(e) {
                    var swiper = this;
                    var ref = swiper.navigation;
                    var $nextEl = ref.$nextEl;
                    var $prevEl = ref.$prevEl;
                    if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
                        if ($nextEl) { $nextEl.toggleClass(swiper.params.navigation.hiddenClass); }
                        if ($prevEl) { $prevEl.toggleClass(swiper.params.navigation.hiddenClass); }
                    }
                },
            },
        };
        var Pagination = {
            update: function update() {
                var swiper = this;
                var rtl = swiper.rtl;
                var params = swiper.params.pagination;
                if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
                var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                var $el = swiper.pagination.$el;
                var current;
                var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.loop) {
                    current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
                    if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) { current -= (slidesLength - (swiper.loopedSlides * 2)); }
                    if (current > total - 1) { current -= total; }
                    if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
                } else if (typeof swiper.snapIndex !== 'undefined') { current = swiper.snapIndex; } else { current = swiper.activeIndex || 0; }
                if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                    var bullets = swiper.pagination.bullets;
                    var firstIndex;
                    var lastIndex;
                    var midIndex;
                    if (params.dynamicBullets) {
                        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
                        $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)) + "px"));
                        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) { swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex); if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) { swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1; } else if (swiper.pagination.dynamicBulletIndex < 0) { swiper.pagination.dynamicBulletIndex = 0; } }
                        firstIndex = current - swiper.pagination.dynamicBulletIndex;
                        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                        midIndex = (lastIndex + firstIndex) / 2;
                    }
                    bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev " + (params.bulletActiveClass) + "-main"));
                    if ($el.length > 1) {
                        bullets.each(function(index, bullet) {
                            var $bullet = $(bullet);
                            var bulletIndex = $bullet.index();
                            if (bulletIndex === current) { $bullet.addClass(params.bulletActiveClass); }
                            if (params.dynamicBullets) {
                                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) { $bullet.addClass(((params.bulletActiveClass) + "-main")); }
                                if (bulletIndex === firstIndex) { $bullet.prev().addClass(((params.bulletActiveClass) + "-prev")).prev().addClass(((params.bulletActiveClass) + "-prev-prev")); }
                                if (bulletIndex === lastIndex) { $bullet.next().addClass(((params.bulletActiveClass) + "-next")).next().addClass(((params.bulletActiveClass) + "-next-next")); }
                            }
                        });
                    } else {
                        var $bullet = bullets.eq(current);
                        $bullet.addClass(params.bulletActiveClass);
                        if (params.dynamicBullets) {
                            var $firstDisplayedBullet = bullets.eq(firstIndex);
                            var $lastDisplayedBullet = bullets.eq(lastIndex);
                            for (var i = firstIndex; i <= lastIndex; i += 1) { bullets.eq(i).addClass(((params.bulletActiveClass) + "-main")); }
                            $firstDisplayedBullet.prev().addClass(((params.bulletActiveClass) + "-prev")).prev().addClass(((params.bulletActiveClass) + "-prev-prev"));
                            $lastDisplayedBullet.next().addClass(((params.bulletActiveClass) + "-next")).next().addClass(((params.bulletActiveClass) + "-next-next"));
                        }
                    }
                    if (params.dynamicBullets) {
                        var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                        var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
                        var offsetProp = rtl ? 'right' : 'left';
                        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
                    }
                }
                if (params.type === 'fraction') {
                    $el.find(("." + (params.currentClass))).text(params.formatFractionCurrent(current + 1));
                    $el.find(("." + (params.totalClass))).text(params.formatFractionTotal(total));
                }
                if (params.type === 'progressbar') {
                    var progressbarDirection;
                    if (params.progressbarOpposite) { progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal'; } else { progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical'; }
                    var scale = (current + 1) / total;
                    var scaleX = 1;
                    var scaleY = 1;
                    if (progressbarDirection === 'horizontal') { scaleX = scale; } else { scaleY = scale; }
                    $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
                }
                if (params.type === 'custom' && params.renderCustom) {
                    $el.html(params.renderCustom(swiper, current + 1, total));
                    swiper.emit('paginationRender', swiper, $el[0]);
                } else { swiper.emit('paginationUpdate', swiper, $el[0]); }
                $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
            },
            render: function render() {
                var swiper = this;
                var params = swiper.params.pagination;
                if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
                var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
                var $el = swiper.pagination.$el;
                var paginationHTML = '';
                if (params.type === 'bullets') {
                    var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                    for (var i = 0; i < numberOfBullets; i += 1) { if (params.renderBullet) { paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass); } else { paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">"; } }
                    $el.html(paginationHTML);
                    swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
                }
                if (params.type === 'fraction') {
                    if (params.renderFraction) { paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass); } else {
                        paginationHTML = "<span class=\"" + (params.currentClass) + "\"></span>" +
                            ' / ' +
                            "<span class=\"" + (params.totalClass) + "\"></span>";
                    }
                    $el.html(paginationHTML);
                }
                if (params.type === 'progressbar') {
                    if (params.renderProgressbar) { paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass); } else { paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>"; }
                    $el.html(paginationHTML);
                }
                if (params.type !== 'custom') { swiper.emit('paginationRender', swiper.pagination.$el[0]); }
            },
            init: function init() {
                var swiper = this;
                var params = swiper.params.pagination;
                if (!params.el) { return; }
                var $el = $(params.el);
                if ($el.length === 0) { return; }
                if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && swiper.$el.find(params.el).length === 1) { $el = swiper.$el.find(params.el); }
                if (params.type === 'bullets' && params.clickable) { $el.addClass(params.clickableClass); }
                $el.addClass(params.modifierClass + params.type);
                if (params.type === 'bullets' && params.dynamicBullets) {
                    $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
                    swiper.pagination.dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) { params.dynamicMainBullets = 1; }
                }
                if (params.type === 'progressbar' && params.progressbarOpposite) { $el.addClass(params.progressbarOppositeClass); }
                if (params.clickable) {
                    $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
                        e.preventDefault();
                        var index = $(this).index() * swiper.params.slidesPerGroup;
                        if (swiper.params.loop) { index += swiper.loopedSlides; }
                        swiper.slideTo(index);
                    });
                }
                Utils.extend(swiper.pagination, { $el: $el, el: $el[0], });
            },
            destroy: function destroy() {
                var swiper = this;
                var params = swiper.params.pagination;
                if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
                var $el = swiper.pagination.$el;
                $el.removeClass(params.hiddenClass);
                $el.removeClass(params.modifierClass + params.type);
                if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
                if (params.clickable) { $el.off('click', ("." + (params.bulletClass))); }
            },
        };
        var Pagination$1 = {
            name: 'pagination',
            params: { pagination: { el: null, bulletElement: 'span', clickable: false, hideOnClick: false, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: false, type: 'bullets', dynamicBullets: false, dynamicMainBullets: 1, formatFractionCurrent: function(number) { return number; }, formatFractionTotal: function(number) { return number; }, bulletClass: 'swiper-pagination-bullet', bulletActiveClass: 'swiper-pagination-bullet-active', modifierClass: 'swiper-pagination-', currentClass: 'swiper-pagination-current', totalClass: 'swiper-pagination-total', hiddenClass: 'swiper-pagination-hidden', progressbarFillClass: 'swiper-pagination-progressbar-fill', progressbarOppositeClass: 'swiper-pagination-progressbar-opposite', clickableClass: 'swiper-pagination-clickable', lockClass: 'swiper-pagination-lock', }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { pagination: { init: Pagination.init.bind(swiper), render: Pagination.render.bind(swiper), update: Pagination.update.bind(swiper), destroy: Pagination.destroy.bind(swiper), dynamicBulletIndex: 0, }, });
            },
            on: {
                init: function init() {
                    var swiper = this;
                    swiper.pagination.init();
                    swiper.pagination.render();
                    swiper.pagination.update();
                },
                activeIndexChange: function activeIndexChange() { var swiper = this; if (swiper.params.loop) { swiper.pagination.update(); } else if (typeof swiper.snapIndex === 'undefined') { swiper.pagination.update(); } },
                snapIndexChange: function snapIndexChange() { var swiper = this; if (!swiper.params.loop) { swiper.pagination.update(); } },
                slidesLengthChange: function slidesLengthChange() {
                    var swiper = this;
                    if (swiper.params.loop) {
                        swiper.pagination.render();
                        swiper.pagination.update();
                    }
                },
                snapGridLengthChange: function snapGridLengthChange() {
                    var swiper = this;
                    if (!swiper.params.loop) {
                        swiper.pagination.render();
                        swiper.pagination.update();
                    }
                },
                destroy: function destroy() {
                    var swiper = this;
                    swiper.pagination.destroy();
                },
                click: function click(e) { var swiper = this; if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) { swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass); } },
            },
        };
        var Scrollbar = {
            setTranslate: function setTranslate() {
                var swiper = this;
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
                var scrollbar = swiper.scrollbar;
                var rtl = swiper.rtlTranslate;
                var progress = swiper.progress;
                var dragSize = scrollbar.dragSize;
                var trackSize = scrollbar.trackSize;
                var $dragEl = scrollbar.$dragEl;
                var $el = scrollbar.$el;
                var params = swiper.params.scrollbar;
                var newSize = dragSize;
                var newPos = (trackSize - dragSize) * progress;
                if (rtl) {
                    newPos = -newPos;
                    if (newPos > 0) {
                        newSize = dragSize - newPos;
                        newPos = 0;
                    } else if (-newPos + dragSize > trackSize) { newSize = trackSize + newPos; }
                } else if (newPos < 0) {
                    newSize = dragSize + newPos;
                    newPos = 0;
                } else if (newPos + dragSize > trackSize) { newSize = trackSize - newPos; }
                if (swiper.isHorizontal()) {
                    if (Support.transforms3d) { $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)")); } else { $dragEl.transform(("translateX(" + newPos + "px)")); }
                    $dragEl[0].style.width = newSize + "px";
                } else {
                    if (Support.transforms3d) { $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)")); } else { $dragEl.transform(("translateY(" + newPos + "px)")); }
                    $dragEl[0].style.height = newSize + "px";
                }
                if (params.hide) {
                    clearTimeout(swiper.scrollbar.timeout);
                    $el[0].style.opacity = 1;
                    swiper.scrollbar.timeout = setTimeout(function() {
                        $el[0].style.opacity = 0;
                        $el.transition(400);
                    }, 1000);
                }
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
                swiper.scrollbar.$dragEl.transition(duration);
            },
            updateSize: function updateSize() {
                var swiper = this;
                if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
                var scrollbar = swiper.scrollbar;
                var $dragEl = scrollbar.$dragEl;
                var $el = scrollbar.$el;
                $dragEl[0].style.width = '';
                $dragEl[0].style.height = '';
                var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
                var divider = swiper.size / swiper.virtualSize;
                var moveDivider = divider * (trackSize / swiper.size);
                var dragSize;
                if (swiper.params.scrollbar.dragSize === 'auto') { dragSize = trackSize * divider; } else { dragSize = parseInt(swiper.params.scrollbar.dragSize, 10); }
                if (swiper.isHorizontal()) { $dragEl[0].style.width = dragSize + "px"; } else { $dragEl[0].style.height = dragSize + "px"; }
                if (divider >= 1) { $el[0].style.display = 'none'; } else { $el[0].style.display = ''; }
                if (swiper.params.scrollbarHide) { $el[0].style.opacity = 0; }
                Utils.extend(scrollbar, { trackSize: trackSize, divider: divider, moveDivider: moveDivider, dragSize: dragSize, });
                scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
            },
            setDragPosition: function setDragPosition(e) {
                var swiper = this;
                var scrollbar = swiper.scrollbar;
                var rtl = swiper.rtlTranslate;
                var $el = scrollbar.$el;
                var dragSize = scrollbar.dragSize;
                var trackSize = scrollbar.trackSize;
                var pointerPosition;
                if (swiper.isHorizontal()) { pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX); } else { pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY); }
                var positionRatio;
                positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
                positionRatio = Math.max(Math.min(positionRatio, 1), 0);
                if (rtl) { positionRatio = 1 - positionRatio; }
                var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);
                swiper.updateProgress(position);
                swiper.setTranslate(position);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            },
            onDragStart: function onDragStart(e) {
                var swiper = this;
                var params = swiper.params.scrollbar;
                var scrollbar = swiper.scrollbar;
                var $wrapperEl = swiper.$wrapperEl;
                var $el = scrollbar.$el;
                var $dragEl = scrollbar.$dragEl;
                swiper.scrollbar.isTouched = true;
                e.preventDefault();
                e.stopPropagation();
                $wrapperEl.transition(100);
                $dragEl.transition(100);
                scrollbar.setDragPosition(e);
                clearTimeout(swiper.scrollbar.dragTimeout);
                $el.transition(0);
                if (params.hide) { $el.css('opacity', 1); }
                swiper.emit('scrollbarDragStart', e);
            },
            onDragMove: function onDragMove(e) {
                var swiper = this;
                var scrollbar = swiper.scrollbar;
                var $wrapperEl = swiper.$wrapperEl;
                var $el = scrollbar.$el;
                var $dragEl = scrollbar.$dragEl;
                if (!swiper.scrollbar.isTouched) { return; }
                if (e.preventDefault) { e.preventDefault(); } else { e.returnValue = false; }
                scrollbar.setDragPosition(e);
                $wrapperEl.transition(0);
                $el.transition(0);
                $dragEl.transition(0);
                swiper.emit('scrollbarDragMove', e);
            },
            onDragEnd: function onDragEnd(e) {
                var swiper = this;
                var params = swiper.params.scrollbar;
                var scrollbar = swiper.scrollbar;
                var $el = scrollbar.$el;
                if (!swiper.scrollbar.isTouched) { return; }
                swiper.scrollbar.isTouched = false;
                if (params.hide) {
                    clearTimeout(swiper.scrollbar.dragTimeout);
                    swiper.scrollbar.dragTimeout = Utils.nextTick(function() {
                        $el.css('opacity', 0);
                        $el.transition(400);
                    }, 1000);
                }
                swiper.emit('scrollbarDragEnd', e);
                if (params.snapOnRelease) { swiper.slideToClosest(); }
            },
            enableDraggable: function enableDraggable() {
                var swiper = this;
                if (!swiper.params.scrollbar.el) { return; }
                var scrollbar = swiper.scrollbar;
                var touchEvents = swiper.touchEvents;
                var touchEventsDesktop = swiper.touchEventsDesktop;
                var params = swiper.params;
                var $el = scrollbar.$el;
                var target = $el[0];
                var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
                var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
                if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                    target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                    doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                    doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
                } else {
                    if (Support.touch) {
                        target.addEventListener(touchEvents.start, swiper.scrollbar.onDragStart, activeListener);
                        target.addEventListener(touchEvents.move, swiper.scrollbar.onDragMove, activeListener);
                        target.addEventListener(touchEvents.end, swiper.scrollbar.onDragEnd, passiveListener);
                    }
                    if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                        target.addEventListener('mousedown', swiper.scrollbar.onDragStart, activeListener);
                        doc.addEventListener('mousemove', swiper.scrollbar.onDragMove, activeListener);
                        doc.addEventListener('mouseup', swiper.scrollbar.onDragEnd, passiveListener);
                    }
                }
            },
            disableDraggable: function disableDraggable() {
                var swiper = this;
                if (!swiper.params.scrollbar.el) { return; }
                var scrollbar = swiper.scrollbar;
                var touchEvents = swiper.touchEvents;
                var touchEventsDesktop = swiper.touchEventsDesktop;
                var params = swiper.params;
                var $el = scrollbar.$el;
                var target = $el[0];
                var activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
                var passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
                if (!Support.touch && (Support.pointerEvents || Support.prefixedPointerEvents)) {
                    target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
                    doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
                    doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
                } else {
                    if (Support.touch) {
                        target.removeEventListener(touchEvents.start, swiper.scrollbar.onDragStart, activeListener);
                        target.removeEventListener(touchEvents.move, swiper.scrollbar.onDragMove, activeListener);
                        target.removeEventListener(touchEvents.end, swiper.scrollbar.onDragEnd, passiveListener);
                    }
                    if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
                        target.removeEventListener('mousedown', swiper.scrollbar.onDragStart, activeListener);
                        doc.removeEventListener('mousemove', swiper.scrollbar.onDragMove, activeListener);
                        doc.removeEventListener('mouseup', swiper.scrollbar.onDragEnd, passiveListener);
                    }
                }
            },
            init: function init() {
                var swiper = this;
                if (!swiper.params.scrollbar.el) { return; }
                var scrollbar = swiper.scrollbar;
                var $swiperEl = swiper.$el;
                var params = swiper.params.scrollbar;
                var $el = $(params.el);
                if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) { $el = $swiperEl.find(params.el); }
                var $dragEl = $el.find(("." + (swiper.params.scrollbar.dragClass)));
                if ($dragEl.length === 0) {
                    $dragEl = $(("<div class=\"" + (swiper.params.scrollbar.dragClass) + "\"></div>"));
                    $el.append($dragEl);
                }
                Utils.extend(scrollbar, { $el: $el, el: $el[0], $dragEl: $dragEl, dragEl: $dragEl[0], });
                if (params.draggable) { scrollbar.enableDraggable(); }
            },
            destroy: function destroy() {
                var swiper = this;
                swiper.scrollbar.disableDraggable();
            },
        };
        var Scrollbar$1 = {
            name: 'scrollbar',
            params: { scrollbar: { el: null, dragSize: 'auto', hide: false, draggable: false, snapOnRelease: true, lockClass: 'swiper-scrollbar-lock', dragClass: 'swiper-scrollbar-drag', }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { scrollbar: { init: Scrollbar.init.bind(swiper), destroy: Scrollbar.destroy.bind(swiper), updateSize: Scrollbar.updateSize.bind(swiper), setTranslate: Scrollbar.setTranslate.bind(swiper), setTransition: Scrollbar.setTransition.bind(swiper), enableDraggable: Scrollbar.enableDraggable.bind(swiper), disableDraggable: Scrollbar.disableDraggable.bind(swiper), setDragPosition: Scrollbar.setDragPosition.bind(swiper), onDragStart: Scrollbar.onDragStart.bind(swiper), onDragMove: Scrollbar.onDragMove.bind(swiper), onDragEnd: Scrollbar.onDragEnd.bind(swiper), isTouched: false, timeout: null, dragTimeout: null, }, });
            },
            on: {
                init: function init() {
                    var swiper = this;
                    swiper.scrollbar.init();
                    swiper.scrollbar.updateSize();
                    swiper.scrollbar.setTranslate();
                },
                update: function update() {
                    var swiper = this;
                    swiper.scrollbar.updateSize();
                },
                resize: function resize() {
                    var swiper = this;
                    swiper.scrollbar.updateSize();
                },
                observerUpdate: function observerUpdate() {
                    var swiper = this;
                    swiper.scrollbar.updateSize();
                },
                setTranslate: function setTranslate() {
                    var swiper = this;
                    swiper.scrollbar.setTranslate();
                },
                setTransition: function setTransition(duration) {
                    var swiper = this;
                    swiper.scrollbar.setTransition(duration);
                },
                destroy: function destroy() {
                    var swiper = this;
                    swiper.scrollbar.destroy();
                },
            },
        };
        var Parallax = {
            setTransform: function setTransform(el, progress) {
                var swiper = this;
                var rtl = swiper.rtl;
                var $el = $(el);
                var rtlFactor = rtl ? -1 : 1;
                var p = $el.attr('data-swiper-parallax') || '0';
                var x = $el.attr('data-swiper-parallax-x');
                var y = $el.attr('data-swiper-parallax-y');
                var scale = $el.attr('data-swiper-parallax-scale');
                var opacity = $el.attr('data-swiper-parallax-opacity');
                if (x || y) {
                    x = x || '0';
                    y = y || '0';
                } else if (swiper.isHorizontal()) {
                    x = p;
                    y = '0';
                } else {
                    y = p;
                    x = '0';
                }
                if ((x).indexOf('%') >= 0) { x = (parseInt(x, 10) * progress * rtlFactor) + "%"; } else { x = (x * progress * rtlFactor) + "px"; }
                if ((y).indexOf('%') >= 0) { y = (parseInt(y, 10) * progress) + "%"; } else { y = (y * progress) + "px"; }
                if (typeof opacity !== 'undefined' && opacity !== null) {
                    var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
                    $el[0].style.opacity = currentOpacity;
                }
                if (typeof scale === 'undefined' || scale === null) { $el.transform(("translate3d(" + x + ", " + y + ", 0px)")); } else {
                    var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
                    $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
                }
            },
            setTranslate: function setTranslate() {
                var swiper = this;
                var $el = swiper.$el;
                var slides = swiper.slides;
                var progress = swiper.progress;
                var snapGrid = swiper.snapGrid;
                $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(index, el) { swiper.parallax.setTransform(el, progress); });
                slides.each(function(slideIndex, slideEl) {
                    var slideProgress = slideEl.progress;
                    if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') { slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1)); }
                    slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                    $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(index, el) { swiper.parallax.setTransform(el, slideProgress); });
                });
            },
            setTransition: function setTransition(duration) {
                if (duration === void 0) duration = this.params.speed;
                var swiper = this;
                var $el = swiper.$el;
                $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(index, parallaxEl) {
                    var $parallaxEl = $(parallaxEl);
                    var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
                    if (duration === 0) { parallaxDuration = 0; }
                    $parallaxEl.transition(parallaxDuration);
                });
            },
        };
        var Parallax$1 = {
            name: 'parallax',
            params: { parallax: { enabled: false, }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { parallax: { setTransform: Parallax.setTransform.bind(swiper), setTranslate: Parallax.setTranslate.bind(swiper), setTransition: Parallax.setTransition.bind(swiper), }, });
            },
            on: {
                beforeInit: function beforeInit() {
                    var swiper = this;
                    if (!swiper.params.parallax.enabled) { return; }
                    swiper.params.watchSlidesProgress = true;
                },
                init: function init() {
                    var swiper = this;
                    if (!swiper.params.parallax) { return; }
                    swiper.parallax.setTranslate();
                },
                setTranslate: function setTranslate() {
                    var swiper = this;
                    if (!swiper.params.parallax) { return; }
                    swiper.parallax.setTranslate();
                },
                setTransition: function setTransition(duration) {
                    var swiper = this;
                    if (!swiper.params.parallax) { return; }
                    swiper.parallax.setTransition(duration);
                },
            },
        };
        var Zoom = {
            getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
                if (e.targetTouches.length < 2) { return 1; }
                var x1 = e.targetTouches[0].pageX;
                var y1 = e.targetTouches[0].pageY;
                var x2 = e.targetTouches[1].pageX;
                var y2 = e.targetTouches[1].pageY;
                var distance = Math.sqrt((Math.pow((x2 - x1), 2)) + (Math.pow((y2 - y1), 2)));
                return distance;
            },
            onGestureStart: function onGestureStart(e) {
                var swiper = this;
                var params = swiper.params.zoom;
                var zoom = swiper.zoom;
                var gesture = zoom.gesture;
                zoom.fakeGestureTouched = false;
                zoom.fakeGestureMoved = false;
                if (!Support.gestures) {
                    if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) { return; }
                    zoom.fakeGestureTouched = true;
                    gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
                }
                if (!gesture.$slideEl || !gesture.$slideEl.length) {
                    gesture.$slideEl = $(e.target).closest('.swiper-slide');
                    if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
                    gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                    gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
                    gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                    if (gesture.$imageWrapEl.length === 0) { gesture.$imageEl = undefined; return; }
                }
                gesture.$imageEl.transition(0);
                swiper.zoom.isScaling = true;
            },
            onGestureChange: function onGestureChange(e) {
                var swiper = this;
                var params = swiper.params.zoom;
                var zoom = swiper.zoom;
                var gesture = zoom.gesture;
                if (!Support.gestures) {
                    if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) { return; }
                    zoom.fakeGestureMoved = true;
                    gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
                }
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
                if (Support.gestures) { swiper.zoom.scale = e.scale * zoom.currentScale; } else { zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale; }
                if (zoom.scale > gesture.maxRatio) { zoom.scale = (gesture.maxRatio - 1) + (Math.pow(((zoom.scale - gesture.maxRatio) + 1), 0.5)); }
                if (zoom.scale < params.minRatio) { zoom.scale = (params.minRatio + 1) - (Math.pow(((params.minRatio - zoom.scale) + 1), 0.5)); }
                gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
            },
            onGestureEnd: function onGestureEnd(e) {
                var swiper = this;
                var params = swiper.params.zoom;
                var zoom = swiper.zoom;
                var gesture = zoom.gesture;
                if (!Support.gestures) {
                    if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) { return; }
                    if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) { return; }
                    zoom.fakeGestureTouched = false;
                    zoom.fakeGestureMoved = false;
                }
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
                zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
                gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
                zoom.currentScale = zoom.scale;
                zoom.isScaling = false;
                if (zoom.scale === 1) { gesture.$slideEl = undefined; }
            },
            onTouchStart: function onTouchStart(e) {
                var swiper = this;
                var zoom = swiper.zoom;
                var gesture = zoom.gesture;
                var image = zoom.image;
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
                if (image.isTouched) { return; }
                if (Device.android) { e.preventDefault(); }
                image.isTouched = true;
                image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
                image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
            },
            onTouchMove: function onTouchMove(e) {
                var swiper = this;
                var zoom = swiper.zoom;
                var gesture = zoom.gesture;
                var image = zoom.image;
                var velocity = zoom.velocity;
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
                swiper.allowClick = false;
                if (!image.isTouched || !gesture.$slideEl) { return; }
                if (!image.isMoved) {
                    image.width = gesture.$imageEl[0].offsetWidth;
                    image.height = gesture.$imageEl[0].offsetHeight;
                    image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
                    image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
                    gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
                    gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
                    gesture.$imageWrapEl.transition(0);
                    if (swiper.rtl) {
                        image.startX = -image.startX;
                        image.startY = -image.startY;
                    }
                }
                var scaledWidth = image.width * zoom.scale;
                var scaledHeight = image.height * zoom.scale;
                if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }
                image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
                image.maxX = -image.minX;
                image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
                image.maxY = -image.minY;
                image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
                image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
                if (!image.isMoved && !zoom.isScaling) { if (swiper.isHorizontal() && ((Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x) || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x))) { image.isTouched = false; return; } if (!swiper.isHorizontal() && ((Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y) || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y))) { image.isTouched = false; return; } }
                e.preventDefault();
                e.stopPropagation();
                image.isMoved = true;
                image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
                image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;
                if (image.currentX < image.minX) { image.currentX = (image.minX + 1) - (Math.pow(((image.minX - image.currentX) + 1), 0.8)); }
                if (image.currentX > image.maxX) { image.currentX = (image.maxX - 1) + (Math.pow(((image.currentX - image.maxX) + 1), 0.8)); }
                if (image.currentY < image.minY) { image.currentY = (image.minY + 1) - (Math.pow(((image.minY - image.currentY) + 1), 0.8)); }
                if (image.currentY > image.maxY) { image.currentY = (image.maxY - 1) + (Math.pow(((image.currentY - image.maxY) + 1), 0.8)); }
                if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
                if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
                if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
                velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
                velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
                if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
                if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
                velocity.prevPositionX = image.touchesCurrent.x;
                velocity.prevPositionY = image.touchesCurrent.y;
                velocity.prevTime = Date.now();
                gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
            },
            onTouchEnd: function onTouchEnd() {
                var swiper = this;
                var zoom = swiper.zoom;
                var gesture = zoom.gesture;
                var image = zoom.image;
                var velocity = zoom.velocity;
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
                if (!image.isTouched || !image.isMoved) {
                    image.isTouched = false;
                    image.isMoved = false;
                    return;
                }
                image.isTouched = false;
                image.isMoved = false;
                var momentumDurationX = 300;
                var momentumDurationY = 300;
                var momentumDistanceX = velocity.x * momentumDurationX;
                var newPositionX = image.currentX + momentumDistanceX;
                var momentumDistanceY = velocity.y * momentumDurationY;
                var newPositionY = image.currentY + momentumDistanceY;
                if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
                if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
                var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
                image.currentX = newPositionX;
                image.currentY = newPositionY;
                var scaledWidth = image.width * zoom.scale;
                var scaledHeight = image.height * zoom.scale;
                image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
                image.maxX = -image.minX;
                image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
                image.maxY = -image.minY;
                image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
                image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
                gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
            },
            onTransitionEnd: function onTransitionEnd() {
                var swiper = this;
                var zoom = swiper.zoom;
                var gesture = zoom.gesture;
                if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
                    gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
                    gesture.$imageWrapEl.transform('translate3d(0,0,0)');
                    gesture.$slideEl = undefined;
                    gesture.$imageEl = undefined;
                    gesture.$imageWrapEl = undefined;
                    zoom.scale = 1;
                    zoom.currentScale = 1;
                }
            },
            toggle: function toggle(e) { var swiper = this; var zoom = swiper.zoom; if (zoom.scale && zoom.scale !== 1) { zoom.out(); } else { zoom.in(e); } },
            in: function in$1(e) {
                var swiper = this;
                var zoom = swiper.zoom;
                var params = swiper.params.zoom;
                var gesture = zoom.gesture;
                var image = zoom.image;
                if (!gesture.$slideEl) {
                    gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
                    gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                    gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
                }
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
                gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));
                var touchX;
                var touchY;
                var offsetX;
                var offsetY;
                var diffX;
                var diffY;
                var translateX;
                var translateY;
                var imageWidth;
                var imageHeight;
                var scaledWidth;
                var scaledHeight;
                var translateMinX;
                var translateMinY;
                var translateMaxX;
                var translateMaxY;
                var slideWidth;
                var slideHeight;
                if (typeof image.touchesStart.x === 'undefined' && e) {
                    touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
                    touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
                } else {
                    touchX = image.touchesStart.x;
                    touchY = image.touchesStart.y;
                }
                zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
                if (e) {
                    slideWidth = gesture.$slideEl[0].offsetWidth;
                    slideHeight = gesture.$slideEl[0].offsetHeight;
                    offsetX = gesture.$slideEl.offset().left;
                    offsetY = gesture.$slideEl.offset().top;
                    diffX = (offsetX + (slideWidth / 2)) - touchX;
                    diffY = (offsetY + (slideHeight / 2)) - touchY;
                    imageWidth = gesture.$imageEl[0].offsetWidth;
                    imageHeight = gesture.$imageEl[0].offsetHeight;
                    scaledWidth = imageWidth * zoom.scale;
                    scaledHeight = imageHeight * zoom.scale;
                    translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
                    translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
                    translateMaxX = -translateMinX;
                    translateMaxY = -translateMinY;
                    translateX = diffX * zoom.scale;
                    translateY = diffY * zoom.scale;
                    if (translateX < translateMinX) { translateX = translateMinX; }
                    if (translateX > translateMaxX) { translateX = translateMaxX; }
                    if (translateY < translateMinY) { translateY = translateMinY; }
                    if (translateY > translateMaxY) { translateY = translateMaxY; }
                } else {
                    translateX = 0;
                    translateY = 0;
                }
                gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
                gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
            },
            out: function out() {
                var swiper = this;
                var zoom = swiper.zoom;
                var params = swiper.params.zoom;
                var gesture = zoom.gesture;
                if (!gesture.$slideEl) {
                    gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
                    gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
                    gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
                }
                if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
                zoom.scale = 1;
                zoom.currentScale = 1;
                gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
                gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
                gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
                gesture.$slideEl = undefined;
            },
            enable: function enable() {
                var swiper = this;
                var zoom = swiper.zoom;
                if (zoom.enabled) { return; }
                zoom.enabled = true;
                var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
                if (Support.gestures) {
                    swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
                    swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
                    swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
                } else if (swiper.touchEvents.start === 'touchstart') {
                    swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
                    swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
                    swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
                }
                swiper.$wrapperEl.on(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
            },
            disable: function disable() {
                var swiper = this;
                var zoom = swiper.zoom;
                if (!zoom.enabled) { return; }
                swiper.zoom.enabled = false;
                var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
                if (Support.gestures) {
                    swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
                    swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
                    swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
                } else if (swiper.touchEvents.start === 'touchstart') {
                    swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
                    swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
                    swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
                }
                swiper.$wrapperEl.off(swiper.touchEvents.move, ("." + (swiper.params.zoom.containerClass)), zoom.onTouchMove);
            },
        };
        var Zoom$1 = {
            name: 'zoom',
            params: { zoom: { enabled: false, maxRatio: 3, minRatio: 1, toggle: true, containerClass: 'swiper-zoom-container', zoomedSlideClass: 'swiper-slide-zoomed', }, },
            create: function create() {
                var swiper = this;
                var zoom = { enabled: false, scale: 1, currentScale: 1, isScaling: false, gesture: { $slideEl: undefined, slideWidth: undefined, slideHeight: undefined, $imageEl: undefined, $imageWrapEl: undefined, maxRatio: 3, }, image: { isTouched: undefined, isMoved: undefined, currentX: undefined, currentY: undefined, minX: undefined, minY: undefined, maxX: undefined, maxY: undefined, width: undefined, height: undefined, startX: undefined, startY: undefined, touchesStart: {}, touchesCurrent: {}, }, velocity: { x: undefined, y: undefined, prevPositionX: undefined, prevPositionY: undefined, prevTime: undefined, }, };
                ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function(methodName) { zoom[methodName] = Zoom[methodName].bind(swiper); });
                Utils.extend(swiper, { zoom: zoom, });
            },
            on: {
                init: function init() { var swiper = this; if (swiper.params.zoom.enabled) { swiper.zoom.enable(); } },
                destroy: function destroy() {
                    var swiper = this;
                    swiper.zoom.disable();
                },
                touchStart: function touchStart(e) {
                    var swiper = this;
                    if (!swiper.zoom.enabled) { return; }
                    swiper.zoom.onTouchStart(e);
                },
                touchEnd: function touchEnd(e) {
                    var swiper = this;
                    if (!swiper.zoom.enabled) { return; }
                    swiper.zoom.onTouchEnd(e);
                },
                doubleTap: function doubleTap(e) { var swiper = this; if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) { swiper.zoom.toggle(e); } },
                transitionEnd: function transitionEnd() { var swiper = this; if (swiper.zoom.enabled && swiper.params.zoom.enabled) { swiper.zoom.onTransitionEnd(); } },
            },
        };
        var Lazy = {
            loadInSlide: function loadInSlide(index, loadInDuplicate) {
                if (loadInDuplicate === void 0) loadInDuplicate = true;
                var swiper = this;
                var params = swiper.params.lazy;
                if (typeof index === 'undefined') { return; }
                if (swiper.slides.length === 0) { return; }
                var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                var $slideEl = isVirtual ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")) : swiper.slides.eq(index);
                var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
                if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) { $images = $images.add($slideEl[0]); }
                if ($images.length === 0) { return; }
                $images.each(function(imageIndex, imageEl) {
                    var $imageEl = $(imageEl);
                    $imageEl.addClass(params.loadingClass);
                    var background = $imageEl.attr('data-background');
                    var src = $imageEl.attr('data-src');
                    var srcset = $imageEl.attr('data-srcset');
                    var sizes = $imageEl.attr('data-sizes');
                    swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function() {
                        if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
                        if (background) {
                            $imageEl.css('background-image', ("url(\"" + background + "\")"));
                            $imageEl.removeAttr('data-background');
                        } else {
                            if (srcset) {
                                $imageEl.attr('srcset', srcset);
                                $imageEl.removeAttr('data-srcset');
                            }
                            if (sizes) {
                                $imageEl.attr('sizes', sizes);
                                $imageEl.removeAttr('data-sizes');
                            }
                            if (src) {
                                $imageEl.attr('src', src);
                                $imageEl.removeAttr('data-src');
                            }
                        }
                        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
                        $slideEl.find(("." + (params.preloaderClass))).remove();
                        if (swiper.params.loop && loadInDuplicate) {
                            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
                            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                                var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
                                swiper.lazy.loadInSlide(originalSlide.index(), false);
                            } else {
                                var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
                                swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
                            }
                        }
                        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
                    });
                    swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
                });
            },
            load: function load() {
                var swiper = this;
                var $wrapperEl = swiper.$wrapperEl;
                var swiperParams = swiper.params;
                var slides = swiper.slides;
                var activeIndex = swiper.activeIndex;
                var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
                var params = swiperParams.lazy;
                var slidesPerView = swiperParams.slidesPerView;
                if (slidesPerView === 'auto') { slidesPerView = 0; }

                function slideExist(index) {
                    if (isVirtual) { if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) { return true; } } else if (slides[index]) { return true; }
                    return false;
                }

                function slideIndex(slideEl) {
                    if (isVirtual) { return $(slideEl).attr('data-swiper-slide-index'); }
                    return $(slideEl).index();
                }
                if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
                if (swiper.params.watchSlidesVisibility) {
                    $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function(elIndex, slideEl) {
                        var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
                        swiper.lazy.loadInSlide(index);
                    });
                } else if (slidesPerView > 1) { for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) { if (slideExist(i)) { swiper.lazy.loadInSlide(i); } } } else { swiper.lazy.loadInSlide(activeIndex); }
                if (params.loadPrevNext) {
                    if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
                        var amount = params.loadPrevNextAmount;
                        var spv = slidesPerView;
                        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
                        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
                        for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) { if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); } }
                        for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) { if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); } }
                    } else {
                        var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
                        if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }
                        var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
                        if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
                    }
                }
            },
        };
        var Lazy$1 = {
            name: 'lazy',
            params: { lazy: { enabled: false, loadPrevNext: false, loadPrevNextAmount: 1, loadOnTransitionStart: false, elementClass: 'swiper-lazy', loadingClass: 'swiper-lazy-loading', loadedClass: 'swiper-lazy-loaded', preloaderClass: 'swiper-lazy-preloader', }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { lazy: { initialImageLoaded: false, load: Lazy.load.bind(swiper), loadInSlide: Lazy.loadInSlide.bind(swiper), }, });
            },
            on: { beforeInit: function beforeInit() { var swiper = this; if (swiper.params.lazy.enabled && swiper.params.preloadImages) { swiper.params.preloadImages = false; } }, init: function init() { var swiper = this; if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) { swiper.lazy.load(); } }, scroll: function scroll() { var swiper = this; if (swiper.params.freeMode && !swiper.params.freeModeSticky) { swiper.lazy.load(); } }, resize: function resize() { var swiper = this; if (swiper.params.lazy.enabled) { swiper.lazy.load(); } }, scrollbarDragMove: function scrollbarDragMove() { var swiper = this; if (swiper.params.lazy.enabled) { swiper.lazy.load(); } }, transitionStart: function transitionStart() { var swiper = this; if (swiper.params.lazy.enabled) { if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) { swiper.lazy.load(); } } }, transitionEnd: function transitionEnd() { var swiper = this; if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) { swiper.lazy.load(); } }, },
        };
        var Controller = {
            LinearSpline: function LinearSpline(x, y) {
                var binarySearch = (function search() {
                    var maxIndex;
                    var minIndex;
                    var guess;
                    return function(array, val) {
                        minIndex = -1;
                        maxIndex = array.length;
                        while (maxIndex - minIndex > 1) { guess = maxIndex + minIndex >> 1; if (array[guess] <= val) { minIndex = guess; } else { maxIndex = guess; } }
                        return maxIndex;
                    };
                }());
                this.x = x;
                this.y = y;
                this.lastIndex = x.length - 1;
                var i1;
                var i3;
                this.interpolate = function interpolate(x2) {
                    if (!x2) { return 0; }
                    i3 = binarySearch(this.x, x2);
                    i1 = i3 - 1;
                    return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
                };
                return this;
            },
            getInterpolateFunction: function getInterpolateFunction(c) { var swiper = this; if (!swiper.controller.spline) { swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid); } },
            setTranslate: function setTranslate(setTranslate$1, byController) {
                var swiper = this;
                var controlled = swiper.controller.control;
                var multiplier;
                var controlledTranslate;

                function setControlledTranslate(c) {
                    var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                    if (swiper.params.controller.by === 'slide') {
                        swiper.controller.getInterpolateFunction(c);
                        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                    }
                    if (!controlledTranslate || swiper.params.controller.by === 'container') {
                        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                        controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
                    }
                    if (swiper.params.controller.inverse) { controlledTranslate = c.maxTranslate() - controlledTranslate; }
                    c.updateProgress(controlledTranslate);
                    c.setTranslate(controlledTranslate, swiper);
                    c.updateActiveIndex();
                    c.updateSlidesClasses();
                }
                if (Array.isArray(controlled)) { for (var i = 0; i < controlled.length; i += 1) { if (controlled[i] !== byController && controlled[i] instanceof Swiper) { setControlledTranslate(controlled[i]); } } } else if (controlled instanceof Swiper && byController !== controlled) { setControlledTranslate(controlled); }
            },
            setTransition: function setTransition(duration, byController) {
                var swiper = this;
                var controlled = swiper.controller.control;
                var i;

                function setControlledTransition(c) {
                    c.setTransition(duration, swiper);
                    if (duration !== 0) {
                        c.transitionStart();
                        if (c.params.autoHeight) { Utils.nextTick(function() { c.updateAutoHeight(); }); }
                        c.$wrapperEl.transitionEnd(function() {
                            if (!controlled) { return; }
                            if (c.params.loop && swiper.params.controller.by === 'slide') { c.loopFix(); }
                            c.transitionEnd();
                        });
                    }
                }
                if (Array.isArray(controlled)) { for (i = 0; i < controlled.length; i += 1) { if (controlled[i] !== byController && controlled[i] instanceof Swiper) { setControlledTransition(controlled[i]); } } } else if (controlled instanceof Swiper && byController !== controlled) { setControlledTransition(controlled); }
            },
        };
        var Controller$1 = {
            name: 'controller',
            params: { controller: { control: undefined, inverse: false, by: 'slide', }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { controller: { control: swiper.params.controller.control, getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper), setTranslate: Controller.setTranslate.bind(swiper), setTransition: Controller.setTransition.bind(swiper), }, });
            },
            on: {
                update: function update() {
                    var swiper = this;
                    if (!swiper.controller.control) { return; }
                    if (swiper.controller.spline) {
                        swiper.controller.spline = undefined;
                        delete swiper.controller.spline;
                    }
                },
                resize: function resize() {
                    var swiper = this;
                    if (!swiper.controller.control) { return; }
                    if (swiper.controller.spline) {
                        swiper.controller.spline = undefined;
                        delete swiper.controller.spline;
                    }
                },
                observerUpdate: function observerUpdate() {
                    var swiper = this;
                    if (!swiper.controller.control) { return; }
                    if (swiper.controller.spline) {
                        swiper.controller.spline = undefined;
                        delete swiper.controller.spline;
                    }
                },
                setTranslate: function setTranslate(translate, byController) {
                    var swiper = this;
                    if (!swiper.controller.control) { return; }
                    swiper.controller.setTranslate(translate, byController);
                },
                setTransition: function setTransition(duration, byController) {
                    var swiper = this;
                    if (!swiper.controller.control) { return; }
                    swiper.controller.setTransition(duration, byController);
                },
            },
        };
        var a11y = {
            makeElFocusable: function makeElFocusable($el) { $el.attr('tabIndex', '0'); return $el; },
            addElRole: function addElRole($el, role) { $el.attr('role', role); return $el; },
            addElLabel: function addElLabel($el, label) { $el.attr('aria-label', label); return $el; },
            disableEl: function disableEl($el) { $el.attr('aria-disabled', true); return $el; },
            enableEl: function enableEl($el) { $el.attr('aria-disabled', false); return $el; },
            onEnterKey: function onEnterKey(e) {
                var swiper = this;
                var params = swiper.params.a11y;
                if (e.keyCode !== 13) { return; }
                var $targetEl = $(e.target);
                if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
                    if (!(swiper.isEnd && !swiper.params.loop)) { swiper.slideNext(); }
                    if (swiper.isEnd) { swiper.a11y.notify(params.lastSlideMessage); } else { swiper.a11y.notify(params.nextSlideMessage); }
                }
                if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
                    if (!(swiper.isBeginning && !swiper.params.loop)) { swiper.slidePrev(); }
                    if (swiper.isBeginning) { swiper.a11y.notify(params.firstSlideMessage); } else { swiper.a11y.notify(params.prevSlideMessage); }
                }
                if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) { $targetEl[0].click(); }
            },
            notify: function notify(message) {
                var swiper = this;
                var notification = swiper.a11y.liveRegion;
                if (notification.length === 0) { return; }
                notification.html('');
                notification.html(message);
            },
            updateNavigation: function updateNavigation() {
                var swiper = this;
                if (swiper.params.loop) { return; }
                var ref = swiper.navigation;
                var $nextEl = ref.$nextEl;
                var $prevEl = ref.$prevEl;
                if ($prevEl && $prevEl.length > 0) { if (swiper.isBeginning) { swiper.a11y.disableEl($prevEl); } else { swiper.a11y.enableEl($prevEl); } }
                if ($nextEl && $nextEl.length > 0) { if (swiper.isEnd) { swiper.a11y.disableEl($nextEl); } else { swiper.a11y.enableEl($nextEl); } }
            },
            updatePagination: function updatePagination() {
                var swiper = this;
                var params = swiper.params.a11y;
                if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
                    swiper.pagination.bullets.each(function(bulletIndex, bulletEl) {
                        var $bulletEl = $(bulletEl);
                        swiper.a11y.makeElFocusable($bulletEl);
                        swiper.a11y.addElRole($bulletEl, 'button');
                        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
                    });
                }
            },
            init: function init() {
                var swiper = this;
                swiper.$el.append(swiper.a11y.liveRegion);
                var params = swiper.params.a11y;
                var $nextEl;
                var $prevEl;
                if (swiper.navigation && swiper.navigation.$nextEl) { $nextEl = swiper.navigation.$nextEl; }
                if (swiper.navigation && swiper.navigation.$prevEl) { $prevEl = swiper.navigation.$prevEl; }
                if ($nextEl) {
                    swiper.a11y.makeElFocusable($nextEl);
                    swiper.a11y.addElRole($nextEl, 'button');
                    swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
                    $nextEl.on('keydown', swiper.a11y.onEnterKey);
                }
                if ($prevEl) {
                    swiper.a11y.makeElFocusable($prevEl);
                    swiper.a11y.addElRole($prevEl, 'button');
                    swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
                    $prevEl.on('keydown', swiper.a11y.onEnterKey);
                }
                if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) { swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey); }
            },
            destroy: function destroy() {
                var swiper = this;
                if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }
                var $nextEl;
                var $prevEl;
                if (swiper.navigation && swiper.navigation.$nextEl) { $nextEl = swiper.navigation.$nextEl; }
                if (swiper.navigation && swiper.navigation.$prevEl) { $prevEl = swiper.navigation.$prevEl; }
                if ($nextEl) { $nextEl.off('keydown', swiper.a11y.onEnterKey); }
                if ($prevEl) { $prevEl.off('keydown', swiper.a11y.onEnterKey); }
                if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) { swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey); }
            },
        };
        var A11y = {
            name: 'a11y',
            params: { a11y: { enabled: true, notificationClass: 'swiper-notification', prevSlideMessage: 'Previous slide', nextSlideMessage: 'Next slide', firstSlideMessage: 'This is the first slide', lastSlideMessage: 'This is the last slide', paginationBulletMessage: 'Go to slide {{index}}', }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { a11y: { liveRegion: $(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")), }, });
                Object.keys(a11y).forEach(function(methodName) { swiper.a11y[methodName] = a11y[methodName].bind(swiper); });
            },
            on: {
                init: function init() {
                    var swiper = this;
                    if (!swiper.params.a11y.enabled) { return; }
                    swiper.a11y.init();
                    swiper.a11y.updateNavigation();
                },
                toEdge: function toEdge() {
                    var swiper = this;
                    if (!swiper.params.a11y.enabled) { return; }
                    swiper.a11y.updateNavigation();
                },
                fromEdge: function fromEdge() {
                    var swiper = this;
                    if (!swiper.params.a11y.enabled) { return; }
                    swiper.a11y.updateNavigation();
                },
                paginationUpdate: function paginationUpdate() {
                    var swiper = this;
                    if (!swiper.params.a11y.enabled) { return; }
                    swiper.a11y.updatePagination();
                },
                destroy: function destroy() {
                    var swiper = this;
                    if (!swiper.params.a11y.enabled) { return; }
                    swiper.a11y.destroy();
                },
            },
        };
        var History = {
            init: function init() {
                var swiper = this;
                if (!swiper.params.history) { return; }
                if (!win.history || !win.history.pushState) {
                    swiper.params.history.enabled = false;
                    swiper.params.hashNavigation.enabled = true;
                    return;
                }
                var history = swiper.history;
                history.initialized = true;
                history.paths = History.getPathValues();
                if (!history.paths.key && !history.paths.value) { return; }
                history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
                if (!swiper.params.history.replaceState) { win.addEventListener('popstate', swiper.history.setHistoryPopState); }
            },
            destroy: function destroy() { var swiper = this; if (!swiper.params.history.replaceState) { win.removeEventListener('popstate', swiper.history.setHistoryPopState); } },
            setHistoryPopState: function setHistoryPopState() {
                var swiper = this;
                swiper.history.paths = History.getPathValues();
                swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
            },
            getPathValues: function getPathValues() { var pathArray = win.location.pathname.slice(1).split('/').filter(function(part) { return part !== ''; }); var total = pathArray.length; var key = pathArray[total - 2]; var value = pathArray[total - 1]; return { key: key, value: value }; },
            setHistory: function setHistory(key, index) {
                var swiper = this;
                if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
                var slide = swiper.slides.eq(index);
                var value = History.slugify(slide.attr('data-history'));
                if (!win.location.pathname.includes(key)) { value = key + "/" + value; }
                var currentState = win.history.state;
                if (currentState && currentState.value === value) { return; }
                if (swiper.params.history.replaceState) { win.history.replaceState({ value: value }, null, value); } else { win.history.pushState({ value: value }, null, value); }
            },
            slugify: function slugify(text) { return text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, ''); },
            scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
                var swiper = this;
                if (value) {
                    for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                        var slide = swiper.slides.eq(i);
                        var slideHistory = History.slugify(slide.attr('data-history'));
                        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                            var index = slide.index();
                            swiper.slideTo(index, speed, runCallbacks);
                        }
                    }
                } else { swiper.slideTo(0, speed, runCallbacks); }
            },
        };
        var History$1 = {
            name: 'history',
            params: { history: { enabled: false, replaceState: false, key: 'slides', }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { history: { init: History.init.bind(swiper), setHistory: History.setHistory.bind(swiper), setHistoryPopState: History.setHistoryPopState.bind(swiper), scrollToSlide: History.scrollToSlide.bind(swiper), destroy: History.destroy.bind(swiper), }, });
            },
            on: { init: function init() { var swiper = this; if (swiper.params.history.enabled) { swiper.history.init(); } }, destroy: function destroy() { var swiper = this; if (swiper.params.history.enabled) { swiper.history.destroy(); } }, transitionEnd: function transitionEnd() { var swiper = this; if (swiper.history.initialized) { swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex); } }, },
        };
        var HashNavigation = {
            onHashCange: function onHashCange() { var swiper = this; var newHash = doc.location.hash.replace('#', ''); var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash'); if (newHash !== activeSlideHash) { swiper.slideTo(swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index()); } },
            setHash: function setHash() {
                var swiper = this;
                if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
                if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) { win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || '')); } else {
                    var slide = swiper.slides.eq(swiper.activeIndex);
                    var hash = slide.attr('data-hash') || slide.attr('data-history');
                    doc.location.hash = hash || '';
                }
            },
            init: function init() {
                var swiper = this;
                if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
                swiper.hashNavigation.initialized = true;
                var hash = doc.location.hash.replace('#', '');
                if (hash) {
                    var speed = 0;
                    for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
                        var slide = swiper.slides.eq(i);
                        var slideHash = slide.attr('data-hash') || slide.attr('data-history');
                        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
                            var index = slide.index();
                            swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
                        }
                    }
                }
                if (swiper.params.hashNavigation.watchState) { $(win).on('hashchange', swiper.hashNavigation.onHashCange); }
            },
            destroy: function destroy() { var swiper = this; if (swiper.params.hashNavigation.watchState) { $(win).off('hashchange', swiper.hashNavigation.onHashCange); } },
        };
        var HashNavigation$1 = {
            name: 'hash-navigation',
            params: { hashNavigation: { enabled: false, replaceState: false, watchState: false, }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { hashNavigation: { initialized: false, init: HashNavigation.init.bind(swiper), destroy: HashNavigation.destroy.bind(swiper), setHash: HashNavigation.setHash.bind(swiper), onHashCange: HashNavigation.onHashCange.bind(swiper), }, });
            },
            on: { init: function init() { var swiper = this; if (swiper.params.hashNavigation.enabled) { swiper.hashNavigation.init(); } }, destroy: function destroy() { var swiper = this; if (swiper.params.hashNavigation.enabled) { swiper.hashNavigation.destroy(); } }, transitionEnd: function transitionEnd() { var swiper = this; if (swiper.hashNavigation.initialized) { swiper.hashNavigation.setHash(); } }, },
        };
        var Autoplay = {
            run: function run() {
                var swiper = this;
                var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
                var delay = swiper.params.autoplay.delay;
                if ($activeSlideEl.attr('data-swiper-autoplay')) { delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay; }
                swiper.autoplay.timeout = Utils.nextTick(function() {
                    if (swiper.params.autoplay.reverseDirection) {
                        if (swiper.params.loop) {
                            swiper.loopFix();
                            swiper.slidePrev(swiper.params.speed, true, true);
                            swiper.emit('autoplay');
                        } else if (!swiper.isBeginning) {
                            swiper.slidePrev(swiper.params.speed, true, true);
                            swiper.emit('autoplay');
                        } else if (!swiper.params.autoplay.stopOnLastSlide) {
                            swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
                            swiper.emit('autoplay');
                        } else { swiper.autoplay.stop(); }
                    } else if (swiper.params.loop) {
                        swiper.loopFix();
                        swiper.slideNext(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.isEnd) {
                        swiper.slideNext(swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, swiper.params.speed, true, true);
                        swiper.emit('autoplay');
                    } else { swiper.autoplay.stop(); }
                }, delay);
            },
            start: function start() {
                var swiper = this;
                if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
                if (swiper.autoplay.running) { return false; }
                swiper.autoplay.running = true;
                swiper.emit('autoplayStart');
                swiper.autoplay.run();
                return true;
            },
            stop: function stop() {
                var swiper = this;
                if (!swiper.autoplay.running) { return false; }
                if (typeof swiper.autoplay.timeout === 'undefined') { return false; }
                if (swiper.autoplay.timeout) {
                    clearTimeout(swiper.autoplay.timeout);
                    swiper.autoplay.timeout = undefined;
                }
                swiper.autoplay.running = false;
                swiper.emit('autoplayStop');
                return true;
            },
            pause: function pause(speed) {
                var swiper = this;
                if (!swiper.autoplay.running) { return; }
                if (swiper.autoplay.paused) { return; }
                if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
                swiper.autoplay.paused = true;
                if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
                    swiper.autoplay.paused = false;
                    swiper.autoplay.run();
                } else {
                    swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                    swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
                }
            },
        };
        var Autoplay$1 = {
            name: 'autoplay',
            params: { autoplay: { enabled: false, delay: 3000, waitForTransition: true, disableOnInteraction: true, stopOnLastSlide: false, reverseDirection: false, }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, {
                    autoplay: {
                        running: false,
                        paused: false,
                        run: Autoplay.run.bind(swiper),
                        start: Autoplay.start.bind(swiper),
                        stop: Autoplay.stop.bind(swiper),
                        pause: Autoplay.pause.bind(swiper),
                        onTransitionEnd: function onTransitionEnd(e) {
                            if (!swiper || swiper.destroyed || !swiper.$wrapperEl) { return; }
                            if (e.target !== this) { return; }
                            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
                            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
                            swiper.autoplay.paused = false;
                            if (!swiper.autoplay.running) { swiper.autoplay.stop(); } else { swiper.autoplay.run(); }
                        },
                    },
                });
            },
            on: { init: function init() { var swiper = this; if (swiper.params.autoplay.enabled) { swiper.autoplay.start(); } }, beforeTransitionStart: function beforeTransitionStart(speed, internal) { var swiper = this; if (swiper.autoplay.running) { if (internal || !swiper.params.autoplay.disableOnInteraction) { swiper.autoplay.pause(speed); } else { swiper.autoplay.stop(); } } }, sliderFirstMove: function sliderFirstMove() { var swiper = this; if (swiper.autoplay.running) { if (swiper.params.autoplay.disableOnInteraction) { swiper.autoplay.stop(); } else { swiper.autoplay.pause(); } } }, destroy: function destroy() { var swiper = this; if (swiper.autoplay.running) { swiper.autoplay.stop(); } }, },
        };
        var Fade = {
            setTranslate: function setTranslate() {
                var swiper = this;
                var slides = swiper.slides;
                for (var i = 0; i < slides.length; i += 1) {
                    var $slideEl = swiper.slides.eq(i);
                    var offset = $slideEl[0].swiperSlideOffset;
                    var tx = -offset;
                    if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
                    var ty = 0;
                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                    }
                    var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                    $slideEl.css({ opacity: slideOpacity, }).transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
                }
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                var slides = swiper.slides;
                var $wrapperEl = swiper.$wrapperEl;
                slides.transition(duration);
                if (swiper.params.virtualTranslate && duration !== 0) {
                    var eventTriggered = false;
                    slides.transitionEnd(function() {
                        if (eventTriggered) { return; }
                        if (!swiper || swiper.destroyed) { return; }
                        eventTriggered = true;
                        swiper.animating = false;
                        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                        for (var i = 0; i < triggerEvents.length; i += 1) { $wrapperEl.trigger(triggerEvents[i]); }
                    });
                }
            },
        };
        var EffectFade = {
            name: 'effect-fade',
            params: { fadeEffect: { crossFade: false, }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { fadeEffect: { setTranslate: Fade.setTranslate.bind(swiper), setTransition: Fade.setTransition.bind(swiper), }, });
            },
            on: {
                beforeInit: function beforeInit() {
                    var swiper = this;
                    if (swiper.params.effect !== 'fade') { return; }
                    swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
                    var overwriteParams = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: true, };
                    Utils.extend(swiper.params, overwriteParams);
                    Utils.extend(swiper.originalParams, overwriteParams);
                },
                setTranslate: function setTranslate() {
                    var swiper = this;
                    if (swiper.params.effect !== 'fade') { return; }
                    swiper.fadeEffect.setTranslate();
                },
                setTransition: function setTransition(duration) {
                    var swiper = this;
                    if (swiper.params.effect !== 'fade') { return; }
                    swiper.fadeEffect.setTransition(duration);
                },
            },
        };
        var Cube = {
            setTranslate: function setTranslate() {
                var swiper = this;
                var $el = swiper.$el;
                var $wrapperEl = swiper.$wrapperEl;
                var slides = swiper.slides;
                var swiperWidth = swiper.width;
                var swiperHeight = swiper.height;
                var rtl = swiper.rtlTranslate;
                var swiperSize = swiper.size;
                var params = swiper.params.cubeEffect;
                var isHorizontal = swiper.isHorizontal();
                var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
                var wrapperRotate = 0;
                var $cubeShadowEl;
                if (params.shadow) {
                    if (isHorizontal) {
                        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
                        if ($cubeShadowEl.length === 0) {
                            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                            $wrapperEl.append($cubeShadowEl);
                        }
                        $cubeShadowEl.css({ height: (swiperWidth + "px") });
                    } else {
                        $cubeShadowEl = $el.find('.swiper-cube-shadow');
                        if ($cubeShadowEl.length === 0) {
                            $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
                            $el.append($cubeShadowEl);
                        }
                    }
                }
                for (var i = 0; i < slides.length; i += 1) {
                    var $slideEl = slides.eq(i);
                    var slideIndex = i;
                    if (isVirtual) { slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10); }
                    var slideAngle = slideIndex * 90;
                    var round = Math.floor(slideAngle / 360);
                    if (rtl) {
                        slideAngle = -slideAngle;
                        round = Math.floor(-slideAngle / 360);
                    }
                    var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
                    var tx = 0;
                    var ty = 0;
                    var tz = 0;
                    if (slideIndex % 4 === 0) {
                        tx = -round * 4 * swiperSize;
                        tz = 0;
                    } else if ((slideIndex - 1) % 4 === 0) {
                        tx = 0;
                        tz = -round * 4 * swiperSize;
                    } else if ((slideIndex - 2) % 4 === 0) {
                        tx = swiperSize + (round * 4 * swiperSize);
                        tz = swiperSize;
                    } else if ((slideIndex - 3) % 4 === 0) {
                        tx = -swiperSize;
                        tz = (3 * swiperSize) + (swiperSize * 4 * round);
                    }
                    if (rtl) { tx = -tx; }
                    if (!isHorizontal) {
                        ty = tx;
                        tx = 0;
                    }
                    var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
                    if (progress <= 1 && progress > -1) { wrapperRotate = (slideIndex * 90) + (progress * 90); if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); } }
                    $slideEl.transform(transform);
                    if (params.slideShadows) {
                        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                        if (shadowBefore.length === 0) {
                            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
                            $slideEl.append(shadowBefore);
                        }
                        if (shadowAfter.length === 0) {
                            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
                            $slideEl.append(shadowAfter);
                        }
                        if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
                        if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
                    }
                }
                $wrapperEl.css({ '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"), '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"), '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"), 'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"), });
                if (params.shadow) {
                    if (isHorizontal) { $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")")); } else {
                        var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
                        var multiplier = 1.5 - ((Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2) +
                            (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2));
                        var scale1 = params.shadowScale;
                        var scale2 = params.shadowScale / multiplier;
                        var offset = params.shadowOffset;
                        $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
                    }
                }
                var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
                $wrapperEl.transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                var $el = swiper.$el;
                var slides = swiper.slides;
                slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) { $el.find('.swiper-cube-shadow').transition(duration); }
            },
        };
        var EffectCube = {
            name: 'effect-cube',
            params: { cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94, }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { cubeEffect: { setTranslate: Cube.setTranslate.bind(swiper), setTransition: Cube.setTransition.bind(swiper), }, });
            },
            on: {
                beforeInit: function beforeInit() {
                    var swiper = this;
                    if (swiper.params.effect !== 'cube') { return; }
                    swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
                    swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                    var overwriteParams = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: true, resistanceRatio: 0, spaceBetween: 0, centeredSlides: false, virtualTranslate: true, };
                    Utils.extend(swiper.params, overwriteParams);
                    Utils.extend(swiper.originalParams, overwriteParams);
                },
                setTranslate: function setTranslate() {
                    var swiper = this;
                    if (swiper.params.effect !== 'cube') { return; }
                    swiper.cubeEffect.setTranslate();
                },
                setTransition: function setTransition(duration) {
                    var swiper = this;
                    if (swiper.params.effect !== 'cube') { return; }
                    swiper.cubeEffect.setTransition(duration);
                },
            },
        };
        var Flip = {
            setTranslate: function setTranslate() {
                var swiper = this;
                var slides = swiper.slides;
                var rtl = swiper.rtlTranslate;
                for (var i = 0; i < slides.length; i += 1) {
                    var $slideEl = slides.eq(i);
                    var progress = $slideEl[0].progress;
                    if (swiper.params.flipEffect.limitRotation) { progress = Math.max(Math.min($slideEl[0].progress, 1), -1); }
                    var offset = $slideEl[0].swiperSlideOffset;
                    var rotate = -180 * progress;
                    var rotateY = rotate;
                    var rotateX = 0;
                    var tx = -offset;
                    var ty = 0;
                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                        rotateX = -rotateY;
                        rotateY = 0;
                    } else if (rtl) { rotateY = -rotateY; }
                    $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                    if (swiper.params.flipEffect.slideShadows) {
                        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                        if (shadowBefore.length === 0) {
                            shadowBefore = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
                            $slideEl.append(shadowBefore);
                        }
                        if (shadowAfter.length === 0) {
                            shadowAfter = $(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
                            $slideEl.append(shadowAfter);
                        }
                        if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
                        if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
                    }
                    $slideEl.transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
                }
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                var slides = swiper.slides;
                var activeIndex = swiper.activeIndex;
                var $wrapperEl = swiper.$wrapperEl;
                slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
                if (swiper.params.virtualTranslate && duration !== 0) {
                    var eventTriggered = false;
                    slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
                        if (eventTriggered) { return; }
                        if (!swiper || swiper.destroyed) { return; }
                        eventTriggered = true;
                        swiper.animating = false;
                        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                        for (var i = 0; i < triggerEvents.length; i += 1) { $wrapperEl.trigger(triggerEvents[i]); }
                    });
                }
            },
        };
        var EffectFlip = {
            name: 'effect-flip',
            params: { flipEffect: { slideShadows: true, limitRotation: true, }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { flipEffect: { setTranslate: Flip.setTranslate.bind(swiper), setTransition: Flip.setTransition.bind(swiper), }, });
            },
            on: {
                beforeInit: function beforeInit() {
                    var swiper = this;
                    if (swiper.params.effect !== 'flip') { return; }
                    swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
                    swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                    var overwriteParams = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: true, };
                    Utils.extend(swiper.params, overwriteParams);
                    Utils.extend(swiper.originalParams, overwriteParams);
                },
                setTranslate: function setTranslate() {
                    var swiper = this;
                    if (swiper.params.effect !== 'flip') { return; }
                    swiper.flipEffect.setTranslate();
                },
                setTransition: function setTransition(duration) {
                    var swiper = this;
                    if (swiper.params.effect !== 'flip') { return; }
                    swiper.flipEffect.setTransition(duration);
                },
            },
        };
        var Coverflow = {
            setTranslate: function setTranslate() {
                var swiper = this;
                var swiperWidth = swiper.width;
                var swiperHeight = swiper.height;
                var slides = swiper.slides;
                var $wrapperEl = swiper.$wrapperEl;
                var slidesSizesGrid = swiper.slidesSizesGrid;
                var params = swiper.params.coverflowEffect;
                var isHorizontal = swiper.isHorizontal();
                var transform = swiper.translate;
                var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
                var rotate = isHorizontal ? params.rotate : -params.rotate;
                var translate = params.depth;
                for (var i = 0, length = slides.length; i < length; i += 1) {
                    var $slideEl = slides.eq(i);
                    var slideSize = slidesSizesGrid[i];
                    var slideOffset = $slideEl[0].swiperSlideOffset;
                    var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;
                    var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                    var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                    var translateZ = -translate * Math.abs(offsetMultiplier);
                    var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
                    var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;
                    if (Math.abs(translateX) < 0.001) { translateX = 0; }
                    if (Math.abs(translateY) < 0.001) { translateY = 0; }
                    if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
                    if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
                    if (Math.abs(rotateX) < 0.001) { rotateX = 0; }
                    var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
                    $slideEl.transform(slideTransform);
                    $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                    if (params.slideShadows) {
                        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
                        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
                        if ($shadowBeforeEl.length === 0) {
                            $shadowBeforeEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
                            $slideEl.append($shadowBeforeEl);
                        }
                        if ($shadowAfterEl.length === 0) {
                            $shadowAfterEl = $(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
                            $slideEl.append($shadowAfterEl);
                        }
                        if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
                        if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
                    }
                }
                if (Support.pointerEvents || Support.prefixedPointerEvents) {
                    var ws = $wrapperEl[0].style;
                    ws.perspectiveOrigin = center + "px 50%";
                }
            },
            setTransition: function setTransition(duration) {
                var swiper = this;
                swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
            },
        };
        var EffectCoverflow = {
            name: 'effect-coverflow',
            params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true, }, },
            create: function create() {
                var swiper = this;
                Utils.extend(swiper, { coverflowEffect: { setTranslate: Coverflow.setTranslate.bind(swiper), setTransition: Coverflow.setTransition.bind(swiper), }, });
            },
            on: {
                beforeInit: function beforeInit() {
                    var swiper = this;
                    if (swiper.params.effect !== 'coverflow') { return; }
                    swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
                    swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
                    swiper.params.watchSlidesProgress = true;
                    swiper.originalParams.watchSlidesProgress = true;
                },
                setTranslate: function setTranslate() {
                    var swiper = this;
                    if (swiper.params.effect !== 'coverflow') { return; }
                    swiper.coverflowEffect.setTranslate();
                },
                setTransition: function setTransition(duration) {
                    var swiper = this;
                    if (swiper.params.effect !== 'coverflow') { return; }
                    swiper.coverflowEffect.setTransition(duration);
                },
            },
        };
        var components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow];
        if (typeof Swiper.use === 'undefined') {
            Swiper.use = Swiper.Class.use;
            Swiper.installModule = Swiper.Class.installModule;
        }
        Swiper.use(components);
        return Swiper;
    })));;
    (function($) { $(document).ready(function() { $(window).on('load', function() { $('#page-preloader').fadeOut(2500); }); }); })(jQuery);;
    (function($) { $(document).ready(function() { var $block = $('.partners-block'); if ($block.length) { var swiper = new Swiper($block.find('.swiper-container'), { autoHeight: true, slidesPerView: 8, spaceBetween: 40, freeMode: true, threshold: 20, breakpoints: { 479: { slidesPerView: 3, spaceBetween: 30 }, 599: { slidesPerView: 4, spaceBetween: 30 }, 799: { slidesPerView: 5, spaceBetween: 30 }, 1023: { slidesPerView: 6, spaceBetween: 30 } }, scrollbar: { el: '.swiper-scrollbar' } }); } }); })(jQuery);;
    (function($) {
        function ChangeEstimateBlock() {
            var wrGrid = $('.widthBlock'),
                mgBlock = wrGrid.offset().left,
                wBlock = wrGrid.outerWidth();
            if ($("div").is("#icons")) {
                var backgrBlock = $('.background-block'),
                    hBlockIcons = $('#icons'),
                    wIcons = wBlock + mgBlock - 10,
                    hWrIcons = hBlockIcons.outerHeight();
                backgrBlock.css({ 'height': hWrIcons, 'width': wIcons });
            }
            if ($("div").is("#estimate")) {
                var shadowBlock = $('.shadow-block'),
                    hBlockEstimate = $('#estimate'),
                    wEstimate = wBlock + mgBlock - 10,
                    hWrEstimate = hBlockEstimate.outerHeight();
                shadowBlock.css({ 'height': hWrEstimate, 'width': wEstimate });
            }
        }
        $(document).ready(function() { ChangeEstimateBlock(); });
        $(window).resize(function() { ChangeEstimateBlock(); });
    })(jQuery);;
    (function($) {
        $('.video-file').on('click', function() {
            var video = $(this).find('video').get(0),
                videoPreview = $(this).find('.video-preview');
            if (video.paused) {
                video.play();
                videoPreview.hide();
            } else {
                video.pause();
                videoPreview.show();
            }
        });
    })(jQuery);;
    (function($) {
        function ChangeSlider() {
            if ($(window).width() > 768) {
                $(".container").removeClass('swiper-container');
                $(".container-wrapper").removeClass('swiper-wrapper');
                $(".container-slide").removeClass('swiper-slide');
            } else if ($(window).width() <= 768) {
                $(".container").addClass('swiper-container');
                $(".container-wrapper").addClass('swiper-wrapper');
                $(".container-slide").addClass('swiper-slide');
            }
        }
        ChangeSlider();
        var mySwiper = undefined;

        function initSwiper() {
            var screenWidth = $(window).width();
            var $block = $('.news-block');
            if ((screenWidth <= (768)) && (mySwiper == undefined)) {
                if ($block.length) { mySwiper = new Swiper($block.find('.swiper-container'), { freeMode: false, autoHeight: true, threshold: 10, slidesPerView: 2, breakpoints: { 479: { slidesPerView: 1, spaceBetween: 20 }, 769: { slidesPerView: 2, spaceBetween: 20 } }, scrollbar: { el: '.swiper-scrollbar' } }); }
            } else if ((screenWidth > 768) && (mySwiper != undefined)) {
                mySwiper.destroy();
                mySwiper = undefined;
            }
        }
        initSwiper();
        $(window).resize(function() {
            ChangeSlider();
            initSwiper();
        });
    })(jQuery);;
    (function($) { $(document).ready(function() { $('.example-wr').magnificPopup({ delegate: 'a', type: 'image', tLoading: 'Loading image #%curr%...', mainClass: 'mfp-img-mobile', gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] }, image: { tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function(item) { return item.el.attr('title'); } } }); }); })(jQuery);;
    (function($) {
        $(document).ready(function() {
            var wrap = $('.wrap-testimonial');
            if (wrap.find('.testimonial').length) {
                var rat = wrap.find('.contain-star');
                for (var i = 0; i < rat.length; i++) {
                    var num = rat.eq(i).attr('data-star');
                    var rest = 5 - num;
                    for (var j = 0; j < num; j++) { rat.eq(i).append('<div class="star-active"></div>'); }
                    for (var k = 0; k < rest; k++) { rat.eq(i).append('<div class="star-off"></div>'); }
                }
            }
        });
    })(jQuery);;
    (function($) {
        'use strict';
        var keyMap = {};
        var UNDEFINED_KEY = 'undefined';
        var registerBlocksPlaceholder = function() {
            var data = $(this).data();
            var block_id = parseInt(data.id);
            if (!block_id) return;
            var map_id;
            var cid = parseInt(data.cid);
            var oid = parseInt(data.oid);
            if (!isNaN(cid) && !isNaN(oid)) { map_id = cid + '_' + oid; } else { map_id = UNDEFINED_KEY; }
            if (map_id in keyMap) { keyMap[map_id].push(block_id); } else { keyMap[map_id] = [block_id]; }
        };
        var requestBlocks = function(cid, oid, block_ids) {
            return $.ajax({
                url: window.js_storage.ajax_attached_block,
                type: 'GET',
                data: { cid: cid, oid: oid, block_ids: block_ids.join(',') },
                dataType: 'json',
                success: function(response) {
                    if ((cid !== undefined) && (oid !== undefined)) { var $blocks = $('.async-block[data-cid="' + cid + '"][data-oid="' + oid + '"]'); } else { $blocks = $('.async-block[data-cid=""][data-oid=""]'); }
                    for (var block_id in response) { if (response.hasOwnProperty(block_id)) { $blocks.filter('[data-id="' + block_id + '"]').replaceWith(response[block_id]); } }
                }
            });
        };
        $(document).ready(function() {
            var $blocks = $('.async-block');
            $blocks.each(registerBlocksPlaceholder);
            if ($.isEmptyObject(keyMap)) { $(document).trigger('loaded.ajax_blocks'); return; }
            var requests = [];
            for (var map_id in keyMap) {
                if (keyMap.hasOwnProperty(map_id)) {
                    var cid, oid;
                    if (map_id === UNDEFINED_KEY) { cid = oid = undefined; } else {
                        var cid_oid = map_id.split('_');
                        cid = cid_oid[0];
                        oid = cid_oid[1];
                    }
                    requests.push(requestBlocks(cid, oid, keyMap[map_id]));
                }
            }
            var requestCount = requests.length;
            var requestsDone = 0;
            var resolveOrReject = function() { requestsDone++; if (requestsDone === requestCount) { $(document).trigger('loaded.ajax_blocks'); } };
            for (var i = 0, l = requestCount; i < l; i++) {
                var request = requests[i];
                request.always(resolveOrReject);
            }
        });
    })(jQuery);;
    (function($) {
        'use strict';
        var fetchPlaceholderParts = function(name, parts) {
            var query_data = [];
            for (var i = 0, l = parts.length; i < l; i++) { query_data.push(parts[i].params); }
            $.ajax({
                url: window.js_storage.placeholder_url + name + '/',
                type: 'POST',
                data: { name: name, arr: query_data },
                dataType: 'json',
                success: function(response) {
                    if (response.parts) {
                        if (parts.length !== response.parts.length) { console.warn('Length error! Queried: ' + parts.length + '; rendered ' + response.parts.length); }
                        for (i = 0, l = Math.min(parts.length, response.parts.length); i < l; i++) {
                            var $placeholder = $(parts[i].element);
                            $placeholder.replaceWith(response.parts[i]);
                        }
                    }
                    $(document).trigger('loaded.placeholder', name);
                }
            });
        };
        $(document).ready(function() {
            var placeholders = {};
            $('.placeholder').each(function() {
                var $placeholder = $(this);
                var data = $placeholder.data();
                var name = data.name;
                if (!name) {
                    console.warn('not found name in placeholder');
                    $placeholder.remove();
                    return;
                }
                var params = { _: 1 };
                for (var key in data) { if (data.hasOwnProperty(key) && (key !== 'name')) { params[key] = data[key]; } }
                var placeholder = { element: this, name: name, params: params };
                if (name in placeholders) { placeholders[name].push(placeholder); } else { placeholders[name] = [placeholder]; }
            });
            for (var name in placeholders) { if (placeholders.hasOwnProperty(name)) { fetchPlaceholderParts(name, placeholders[name]); } }
        });
    })(jQuery);;
    (function($) {
        window.contactPopup = function() {
            $.preloader();
            return $.ajax({
                url: window.js_storage.ajax_contact,
                type: 'GET',
                dataType: 'json',
                success: function(response) {
                    if (response.form) {
                        var popup = $.popup({ classes: 'contact-popup contact-form-popup', content: response.form }).show();
                        window.initPopRecaptcha();
                    }
                },
                error: $.parseError(function() {
                    alert(window.DEFAULT_AJAX_ERROR);
                    $.popup().hide();
                })
            });
        };
        $(document).on('click', '.open-contact-popup', function() { contactPopup(); return false; });
        $(document).on('click', '#ajax-contact-submit', function(e) { e.preventDefault(); var token = window.grecaptcha.getResponse(popup_recaptchaId); if (!token) { window.grecaptcha.execute(popup_recaptchaId); return; } });
        window.popupSend = function(token) {
            var $form = $('#ajax-popup-contact-form');
            if ($form.hasClass('sending')) { return false; }
            var data = $form.serializeArray();
            data.push({ name: 'referer', value: location.href });
            data.push({ name: 'g-recaptcha-response', value: token });
            $.ajax({
                url: window.js_storage.ajax_contact,
                type: 'post',
                data: data,
                dataType: 'json',
                beforeSend: function() {
                    $form.addClass('sending');
                    $form.find('.invalid').removeClass('invalid');
                },
                success: function(response) {
                    $.popup({ classes: 'contact-popup contact-success-popup', content: response.success_message }).show();
                    $.popup.hidePreloader();
                    $form.get(0).reset()
                },
                error: $.parseError(function(response) { if (response && (response.errors || response.recaptcha_is_valid == 'false')) { response.errors.forEach(function(record) { var $field = $form.find('.' + record.fullname); if ($field.length) { $field.addClass(record.class); } }); if (response.recaptcha_is_valid == false) { $form.find('.g-recaptcha').addClass('invalid'); } else { window.grecaptcha.reset(popup_recaptchaId); } } else { alert(window.DEFAULT_AJAX_ERROR); } }),
                complete: function() { $form.removeClass('sending'); }
            });
            return false;
        };
        window.EstimatePopup = function() {
            $.preloader();
            return $.ajax({
                url: window.js_storage.ajax_free_estimate,
                type: 'GET',
                dataType: 'json',
                success: function(response) {
                    if (response.form) {
                        var popup = $.popup({ classes: 'contact-popup contact-form-popup', content: response.form }).show();
                        window.initPopRecaptcha();
                    }
                },
                error: $.parseError(function() {
                    alert(window.DEFAULT_AJAX_ERROR);
                    $.popup().hide();
                })
            });
        };
        $(document).on('click', '.open-free-estimate-popup', function() { EstimatePopup(); return false; });
        $(document).on('click', '#ajax-estimate-submit', function(e) { e.preventDefault(); var token = window.grecaptcha.getResponse(popup_recaptchaId); if (!token) { window.grecaptcha.execute(popup_recaptchaId); return; } });
        window.popupSendEstimate = function(token) {
            var $form = $('#ajax-free-estimate-form');
            if ($form.hasClass('sending')) { return false; }
            var data = $form.serializeArray();
            data.push({ name: 'referer', value: location.href });
            data.push({ name: 'g-recaptcha-response', value: token });
            $.ajax({
                url: window.js_storage.ajax_free_estimate,
                type: 'post',
                data: data,
                dataType: 'json',
                beforeSend: function() {
                    $form.addClass('sending');
                    $form.find('.invalid').removeClass('invalid');
                },
                success: function(response) {
                    $.popup({ classes: 'contact-popup contact-success-popup', content: response.success_message }).show();
                    $.popup.hidePreloader();
                    $form.get(0).reset()
                },
                error: $.parseError(function(response) { if (response && (response.errors || response.recaptcha_is_valid == 'false')) { response.errors.forEach(function(record) { var $field = $form.find('.' + record.fullname); if ($field.length) { $field.addClass(record.class); } }); if (response.recaptcha_is_valid == false) { $form.find('.g-recaptcha').addClass('invalid'); } else { window.grecaptcha.reset(popup_recaptchaId); } } else { alert(window.DEFAULT_AJAX_ERROR); } }),
                complete: function() { $form.removeClass('sending'); }
            });
            return false;
        };
        var popup_recaptchaId;
        window.initPopRecaptcha = function() {
            var recaptchaElement = document.querySelector('#popup_recaptcha');
            var recaptchaElementEstimate = document.querySelector('#popup_recaptcha_estimate');
            var captchaOptions = { sitekey: $(recaptchaElement).data('sitekey'), size: 'invisible', callback: window.popupSend };
            var captchaOptionsEstimate = { sitekey: $(recaptchaElementEstimate).data('sitekey'), size: 'invisible', callback: window.popupSendEstimate };
            var inheritFromDataAttr = true;
            if ($('#popup_recaptcha').length) { popup_recaptchaId = window.grecaptcha.render(recaptchaElement, captchaOptions, inheritFromDataAttr); }
            if ($('#popup_recaptcha_estimate').length) { popup_recaptchaId = window.grecaptcha.render(recaptchaElementEstimate, captchaOptionsEstimate, inheritFromDataAttr); }
        };
    })(jQuery);;
    (function($) {
        'use strict';
        var MainMenu = Class(EventedObject, function MainMenu(cls, superclass) {
            cls.init = function(options) {
                superclass.init.call(this);
                this.opts = $.extend({ menuSelector: '.mobile-menu', buttonSelector: '#mobile-menu-button', openedClass: 'main-menu-opened', fullHeight: false }, options);
                var that = this;
                $(document).off('.menu').on('click.menu', this.opts.buttonSelector, function() { if (that.isOpened()) { return that.close(); } else { return that.open(); } });
            };
            cls.getMenu = function() { return $(this.opts.menuSelector).first(); };
            cls.isOpened = function() { return $('body').hasClass(this.opts.openedClass); };
            cls._open = function() { return $('body').addClass(this.opts.openedClass); };
            cls._close = function() { return $('body').removeClass(this.opts.openedClass); };
            cls.update = function() {
                var $menu = this.getMenu();
                if (!$menu.length) { return false; }
                if (this.opts.fullHeight) {
                    $menu.height('auto');
                    var default_height = $menu.outerHeight();
                    $menu.outerHeight(Math.max(default_height, $.winHeight()));
                }
            };
            cls.open = function() {
                var $menu = this.getMenu();
                if (!$menu.length) { return false; }
                if (this.trigger('before_open') === false) { return false; }
                this.update();
                this._open();
            };
            cls.close = function() {
                var $menu = this.getMenu();
                if (!$menu.length) { return false; }
                if (this.trigger('before_close') === false) { return false; }
                this._close();
            };
        });
        $(document).ready(function() { window.main_menu = MainMenu({ fullHeight: false }).on('resize', function(winWidth) { if (winWidth >= 768) { this.close(); } }).on('before_open', function() { $.scrollTo(0, 400); }); });
        $(window).on('resize.menu', $.rared(function() {
            if (!window.main_menu) { return }
            window.main_menu.update();
            window.main_menu.trigger('resize', $.winWidth());
        }, 100));
    })(jQuery);;
    /*! Magnific Popup - v1.1.0 - 2016-02-20
     * http://dimsemenov.com/plugins/magnific-popup/
     * Copyright (c) 2016 Dmitry Semenov; */
    ;
    (function(factory) { if (typeof define === 'function' && define.amd) { define(['jquery'], factory); } else if (typeof exports === 'object') { factory(require('jquery')); } else { factory(window.jQuery || window.Zepto); } }(function($) {
        var CLOSE_EVENT = 'Close',
            BEFORE_CLOSE_EVENT = 'BeforeClose',
            AFTER_CLOSE_EVENT = 'AfterClose',
            BEFORE_APPEND_EVENT = 'BeforeAppend',
            MARKUP_PARSE_EVENT = 'MarkupParse',
            OPEN_EVENT = 'Open',
            CHANGE_EVENT = 'Change',
            NS = 'mfp',
            EVENT_NS = '.' + NS,
            READY_CLASS = 'mfp-ready',
            REMOVING_CLASS = 'mfp-removing',
            PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
        var mfp, MagnificPopup = function() {},
            _isJQ = !!(window.jQuery),
            _prevStatus, _window = $(window),
            _document, _prevContentType, _wrapClasses, _currPopupType;
        var _mfpOn = function(name, f) { mfp.ev.on(NS + name + EVENT_NS, f); },
            _getEl = function(className, appendTo, html, raw) {
                var el = document.createElement('div');
                el.className = 'mfp-' + className;
                if (html) { el.innerHTML = html; }
                if (!raw) { el = $(el); if (appendTo) { el.appendTo(appendTo); } } else if (appendTo) { appendTo.appendChild(el); }
                return el;
            },
            _mfpTrigger = function(e, data) { mfp.ev.triggerHandler(NS + e, data); if (mfp.st.callbacks) { e = e.charAt(0).toLowerCase() + e.slice(1); if (mfp.st.callbacks[e]) { mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]); } } },
            _getCloseBtn = function(type) {
                if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
                    mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
                    _currPopupType = type;
                }
                return mfp.currTemplate.closeBtn;
            },
            _checkInstance = function() {
                if (!$.magnificPopup.instance) {
                    mfp = new MagnificPopup();
                    mfp.init();
                    $.magnificPopup.instance = mfp;
                }
            },
            supportsTransitions = function() {
                var s = document.createElement('p').style,
                    v = ['ms', 'O', 'Moz', 'Webkit'];
                if (s['transition'] !== undefined) { return true; }
                while (v.length) { if (v.pop() + 'Transition' in s) { return true; } }
                return false;
            };
        MagnificPopup.prototype = {
            constructor: MagnificPopup,
            init: function() {
                var appVersion = navigator.appVersion;
                mfp.isLowIE = mfp.isIE8 = document.all && !document.addEventListener;
                mfp.isAndroid = (/android/gi).test(appVersion);
                mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
                mfp.supportsTransition = supportsTransitions();
                mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
                _document = $(document);
                mfp.popupsCache = {};
            },
            open: function(data) {
                var i;
                if (data.isObj === false) {
                    mfp.items = data.items.toArray();
                    mfp.index = 0;
                    var items = data.items,
                        item;
                    for (i = 0; i < items.length; i++) {
                        item = items[i];
                        if (item.parsed) { item = item.el[0]; }
                        if (item === data.el[0]) { mfp.index = i; break; }
                    }
                } else {
                    mfp.items = $.isArray(data.items) ? data.items : [data.items];
                    mfp.index = data.index || 0;
                }
                if (mfp.isOpen) { mfp.updateItemHTML(); return; }
                mfp.types = [];
                _wrapClasses = '';
                if (data.mainEl && data.mainEl.length) { mfp.ev = data.mainEl.eq(0); } else { mfp.ev = _document; }
                if (data.key) {
                    if (!mfp.popupsCache[data.key]) { mfp.popupsCache[data.key] = {}; }
                    mfp.currTemplate = mfp.popupsCache[data.key];
                } else { mfp.currTemplate = {}; }
                mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
                mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
                if (mfp.st.modal) {
                    mfp.st.closeOnContentClick = false;
                    mfp.st.closeOnBgClick = false;
                    mfp.st.showCloseBtn = false;
                    mfp.st.enableEscapeKey = false;
                }
                if (!mfp.bgOverlay) {
                    mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function() { mfp.close(); });
                    mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function(e) { if (mfp._checkIfClose(e.target)) { mfp.close(); } });
                    mfp.container = _getEl('container', mfp.wrap);
                }
                mfp.contentContainer = _getEl('content');
                if (mfp.st.preloader) { mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading); }
                var modules = $.magnificPopup.modules;
                for (i = 0; i < modules.length; i++) {
                    var n = modules[i];
                    n = n.charAt(0).toUpperCase() + n.slice(1);
                    mfp['init' + n].call(mfp);
                }
                _mfpTrigger('BeforeOpen');
                if (mfp.st.showCloseBtn) {
                    if (!mfp.st.closeBtnInside) { mfp.wrap.append(_getCloseBtn()); } else {
                        _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) { values.close_replaceWith = _getCloseBtn(item.type); });
                        _wrapClasses += ' mfp-close-btn-in';
                    }
                }
                if (mfp.st.alignTop) { _wrapClasses += ' mfp-align-top'; }
                if (mfp.fixedContentPos) { mfp.wrap.css({ overflow: mfp.st.overflowY, overflowX: 'hidden', overflowY: mfp.st.overflowY }); } else { mfp.wrap.css({ top: _window.scrollTop(), position: 'absolute' }); }
                if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) { mfp.bgOverlay.css({ height: _document.height(), position: 'absolute' }); }
                if (mfp.st.enableEscapeKey) { _document.on('keyup' + EVENT_NS, function(e) { if (e.keyCode === 27) { mfp.close(); } }); }
                _window.on('resize' + EVENT_NS, function() { mfp.updateSize(); });
                if (!mfp.st.closeOnContentClick) { _wrapClasses += ' mfp-auto-cursor'; }
                if (_wrapClasses)
                    mfp.wrap.addClass(_wrapClasses);
                var windowHeight = mfp.wH = _window.height();
                var windowStyles = {};
                if (mfp.fixedContentPos) { if (mfp._hasScrollBar(windowHeight)) { var s = mfp._getScrollbarSize(); if (s) { windowStyles.marginRight = s; } } }
                if (mfp.fixedContentPos) { if (!mfp.isIE7) { windowStyles.overflow = 'hidden'; } else { $('body, html').css('overflow', 'hidden'); } }
                var classesToadd = mfp.st.mainClass;
                if (mfp.isIE7) { classesToadd += ' mfp-ie7'; }
                if (classesToadd) { mfp._addClassToMFP(classesToadd); }
                mfp.updateItemHTML();
                _mfpTrigger('BuildControls');
                $('html').css(windowStyles);
                mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || $(document.body));
                mfp._lastFocusedEl = document.activeElement;
                setTimeout(function() {
                    if (mfp.content) {
                        mfp._addClassToMFP(READY_CLASS);
                        mfp._setFocus();
                    } else { mfp.bgOverlay.addClass(READY_CLASS); }
                    _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
                }, 16);
                mfp.isOpen = true;
                mfp.updateSize(windowHeight);
                _mfpTrigger(OPEN_EVENT);
                return data;
            },
            close: function() {
                if (!mfp.isOpen) return;
                _mfpTrigger(BEFORE_CLOSE_EVENT);
                mfp.isOpen = false;
                if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
                    mfp._addClassToMFP(REMOVING_CLASS);
                    setTimeout(function() { mfp._close(); }, mfp.st.removalDelay);
                } else { mfp._close(); }
            },
            _close: function() {
                _mfpTrigger(CLOSE_EVENT);
                var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
                mfp.bgOverlay.detach();
                mfp.wrap.detach();
                mfp.container.empty();
                if (mfp.st.mainClass) { classesToRemove += mfp.st.mainClass + ' '; }
                mfp._removeClassFromMFP(classesToRemove);
                if (mfp.fixedContentPos) {
                    var windowStyles = { marginRight: '' };
                    if (mfp.isIE7) { $('body, html').css('overflow', ''); } else { windowStyles.overflow = ''; }
                    $('html').css(windowStyles);
                }
                _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
                mfp.ev.off(EVENT_NS);
                mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
                mfp.bgOverlay.attr('class', 'mfp-bg');
                mfp.container.attr('class', 'mfp-container');
                if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                    if (mfp.currTemplate.closeBtn)
                        mfp.currTemplate.closeBtn.detach();
                }
                if (mfp.st.autoFocusLast && mfp._lastFocusedEl) { $(mfp._lastFocusedEl).focus(); }
                mfp.currItem = null;
                mfp.content = null;
                mfp.currTemplate = null;
                mfp.prevHeight = 0;
                _mfpTrigger(AFTER_CLOSE_EVENT);
            },
            updateSize: function(winHeight) {
                if (mfp.isIOS) {
                    var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                    var height = window.innerHeight * zoomLevel;
                    mfp.wrap.css('height', height);
                    mfp.wH = height;
                } else { mfp.wH = winHeight || _window.height(); }
                if (!mfp.fixedContentPos) { mfp.wrap.css('height', mfp.wH); }
                _mfpTrigger('Resize');
            },
            updateItemHTML: function() {
                var item = mfp.items[mfp.index];
                mfp.contentContainer.detach();
                if (mfp.content)
                    mfp.content.detach();
                if (!item.parsed) { item = mfp.parseEl(mfp.index); }
                var type = item.type;
                _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
                mfp.currItem = item;
                if (!mfp.currTemplate[type]) {
                    var markup = mfp.st[type] ? mfp.st[type].markup : false;
                    _mfpTrigger('FirstMarkupParse', markup);
                    if (markup) { mfp.currTemplate[type] = $(markup); } else { mfp.currTemplate[type] = true; }
                }
                if (_prevContentType && _prevContentType !== item.type) { mfp.container.removeClass('mfp-' + _prevContentType + '-holder'); }
                var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
                mfp.appendContent(newContent, type);
                item.preloaded = true;
                _mfpTrigger(CHANGE_EVENT, item);
                _prevContentType = item.type;
                mfp.container.prepend(mfp.contentContainer);
                _mfpTrigger('AfterChange');
            },
            appendContent: function(newContent, type) {
                mfp.content = newContent;
                if (newContent) { if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) { if (!mfp.container.find('.mfp-close').length) { mfp.container.append(_getCloseBtn()); } } else { mfp.content = newContent; } } else { mfp.content = ''; }
                _mfpTrigger(BEFORE_APPEND_EVENT);
                mfp.container.addClass('mfp-' + type + '-holder');
                mfp.contentContainer.append(mfp.content);
            },
            parseEl: function(index) {
                var item = mfp.items[index],
                    type;
                if (item.tagName) { item = { el: $(item) }; } else {
                    type = item.type;
                    item = { data: item, src: item.src };
                }
                if (item.el) {
                    var types = mfp.types;
                    for (var i = 0; i < types.length; i++) { if (item.el.hasClass('mfp-' + types[i])) { type = types[i]; break; } }
                    item.src = item.el.attr('data-mfp-src');
                    if (!item.src) { item.src = item.el.attr('href'); }
                }
                item.type = type || mfp.st.type || 'inline';
                item.index = index;
                item.parsed = true;
                mfp.items[index] = item;
                _mfpTrigger('ElementParse', item);
                return mfp.items[index];
            },
            addGroup: function(el, options) {
                var eHandler = function(e) {
                    e.mfpEl = this;
                    mfp._openClick(e, el, options);
                };
                if (!options) { options = {}; }
                var eName = 'click.magnificPopup';
                options.mainEl = el;
                if (options.items) {
                    options.isObj = true;
                    el.off(eName).on(eName, eHandler);
                } else {
                    options.isObj = false;
                    if (options.delegate) { el.off(eName).on(eName, options.delegate, eHandler); } else {
                        options.items = el;
                        el.off(eName).on(eName, eHandler);
                    }
                }
            },
            _openClick: function(e, el, options) {
                var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
                if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey || e.altKey || e.shiftKey)) { return; }
                var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
                if (disableOn) { if ($.isFunction(disableOn)) { if (!disableOn.call(mfp)) { return true; } } else { if (_window.width() < disableOn) { return true; } } }
                if (e.type) { e.preventDefault(); if (mfp.isOpen) { e.stopPropagation(); } }
                options.el = $(e.mfpEl);
                if (options.delegate) { options.items = el.find(options.delegate); }
                mfp.open(options);
            },
            updateStatus: function(status, text) {
                if (mfp.preloader) {
                    if (_prevStatus !== status) { mfp.container.removeClass('mfp-s-' + _prevStatus); }
                    if (!text && status === 'loading') { text = mfp.st.tLoading; }
                    var data = { status: status, text: text };
                    _mfpTrigger('UpdateStatus', data);
                    status = data.status;
                    text = data.text;
                    mfp.preloader.html(text);
                    mfp.preloader.find('a').on('click', function(e) { e.stopImmediatePropagation(); });
                    mfp.container.addClass('mfp-s-' + status);
                    _prevStatus = status;
                }
            },
            _checkIfClose: function(target) {
                if ($(target).hasClass(PREVENT_CLOSE_CLASS)) { return; }
                var closeOnContent = mfp.st.closeOnContentClick;
                var closeOnBg = mfp.st.closeOnBgClick;
                if (closeOnContent && closeOnBg) { return true; } else {
                    if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) { return true; }
                    if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) { if (closeOnBg) { if ($.contains(document, target)) { return true; } } } else if (closeOnContent) { return true; }
                }
                return false;
            },
            _addClassToMFP: function(cName) {
                mfp.bgOverlay.addClass(cName);
                mfp.wrap.addClass(cName);
            },
            _removeClassFromMFP: function(cName) {
                this.bgOverlay.removeClass(cName);
                mfp.wrap.removeClass(cName);
            },
            _hasScrollBar: function(winHeight) { return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height())); },
            _setFocus: function() {
                (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
            },
            _onFocusIn: function(e) { if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) { mfp._setFocus(); return false; } },
            _parseMarkup: function(template, values, item) {
                var arr;
                if (item.data) { values = $.extend(item.data, values); }
                _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
                $.each(values, function(key, value) {
                    if (value === undefined || value === false) { return true; }
                    arr = key.split('_');
                    if (arr.length > 1) { var el = template.find(EVENT_NS + '-' + arr[0]); if (el.length > 0) { var attr = arr[1]; if (attr === 'replaceWith') { if (el[0] !== value[0]) { el.replaceWith(value); } } else if (attr === 'img') { if (el.is('img')) { el.attr('src', value); } else { el.replaceWith($('<img>').attr('src', value).attr('class', el.attr('class'))); } } else { el.attr(arr[1], value); } } } else { template.find(EVENT_NS + '-' + key).html(value); }
                });
            },
            _getScrollbarSize: function() {
                if (mfp.scrollbarSize === undefined) {
                    var scrollDiv = document.createElement("div");
                    scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                    document.body.appendChild(scrollDiv);
                    mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                    document.body.removeChild(scrollDiv);
                }
                return mfp.scrollbarSize;
            }
        };
        $.magnificPopup = {
            instance: null,
            proto: MagnificPopup.prototype,
            modules: [],
            open: function(options, index) {
                _checkInstance();
                if (!options) { options = {}; } else { options = $.extend(true, {}, options); }
                options.isObj = true;
                options.index = index || 0;
                return this.instance.open(options);
            },
            close: function() { return $.magnificPopup.instance && $.magnificPopup.instance.close(); },
            registerModule: function(name, module) {
                if (module.options) { $.magnificPopup.defaults[name] = module.options; }
                $.extend(this.proto, module.proto);
                this.modules.push(name);
            },
            defaults: { disableOn: 0, key: null, midClick: false, mainClass: '', preloader: true, focus: '', closeOnContentClick: false, closeOnBgClick: true, closeBtnInside: true, showCloseBtn: true, enableEscapeKey: true, modal: false, alignTop: false, removalDelay: 0, prependTo: null, fixedContentPos: 'auto', fixedBgPos: 'auto', overflowY: 'auto', closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: 'Close (Esc)', tLoading: 'Loading...', autoFocusLast: true }
        };
        $.fn.magnificPopup = function(options) {
            _checkInstance();
            var jqEl = $(this);
            if (typeof options === "string") {
                if (options === 'open') {
                    var items, itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
                        index = parseInt(arguments[1], 10) || 0;
                    if (itemOpts.items) { items = itemOpts.items[index]; } else {
                        items = jqEl;
                        if (itemOpts.delegate) { items = items.find(itemOpts.delegate); }
                        items = items.eq(index);
                    }
                    mfp._openClick({ mfpEl: items }, jqEl, itemOpts);
                } else {
                    if (mfp.isOpen)
                        mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
                }
            } else {
                options = $.extend(true, {}, options);
                if (_isJQ) { jqEl.data('magnificPopup', options); } else { jqEl[0].magnificPopup = options; }
                mfp.addGroup(jqEl, options);
            }
            return jqEl;
        };
        var INLINE_NS = 'inline',
            _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function() {
                if (_lastInlineElement) {
                    _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
                    _lastInlineElement = null;
                }
            };
        $.magnificPopup.registerModule(INLINE_NS, {
            options: { hiddenClass: 'hide', markup: '', tNotFound: 'Content not found' },
            proto: {
                initInline: function() {
                    mfp.types.push(INLINE_NS);
                    _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function() { _putInlineElementsBack(); });
                },
                getInline: function(item, template) {
                    _putInlineElementsBack();
                    if (item.src) {
                        var inlineSt = mfp.st.inline,
                            el = $(item.src);
                        if (el.length) {
                            var parent = el[0].parentNode;
                            if (parent && parent.tagName) {
                                if (!_inlinePlaceholder) {
                                    _hiddenClass = inlineSt.hiddenClass;
                                    _inlinePlaceholder = _getEl(_hiddenClass);
                                    _hiddenClass = 'mfp-' + _hiddenClass;
                                }
                                _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                            }
                            mfp.updateStatus('ready');
                        } else {
                            mfp.updateStatus('error', inlineSt.tNotFound);
                            el = $('<div>');
                        }
                        item.inlineElement = el;
                        return el;
                    }
                    mfp.updateStatus('ready');
                    mfp._parseMarkup(template, {}, item);
                    return template;
                }
            }
        });
        var AJAX_NS = 'ajax',
            _ajaxCur, _removeAjaxCursor = function() { if (_ajaxCur) { $(document.body).removeClass(_ajaxCur); } },
            _destroyAjaxRequest = function() { _removeAjaxCursor(); if (mfp.req) { mfp.req.abort(); } };
        $.magnificPopup.registerModule(AJAX_NS, {
            options: { settings: null, cursor: 'mfp-ajax-cur', tError: '<a href="%url%">The content</a> could not be loaded.' },
            proto: {
                initAjax: function() {
                    mfp.types.push(AJAX_NS);
                    _ajaxCur = mfp.st.ajax.cursor;
                    _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
                    _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
                },
                getAjax: function(item) {
                    if (_ajaxCur) { $(document.body).addClass(_ajaxCur); }
                    mfp.updateStatus('loading');
                    var opts = $.extend({
                        url: item.src,
                        success: function(data, textStatus, jqXHR) {
                            var temp = { data: data, xhr: jqXHR };
                            _mfpTrigger('ParseAjax', temp);
                            mfp.appendContent($(temp.data), AJAX_NS);
                            item.finished = true;
                            _removeAjaxCursor();
                            mfp._setFocus();
                            setTimeout(function() { mfp.wrap.addClass(READY_CLASS); }, 16);
                            mfp.updateStatus('ready');
                            _mfpTrigger('AjaxContentAdded');
                        },
                        error: function() {
                            _removeAjaxCursor();
                            item.finished = item.loadError = true;
                            mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
                        }
                    }, mfp.st.ajax.settings);
                    mfp.req = $.ajax(opts);
                    return '';
                }
            }
        });
        var _imgInterval, _getTitle = function(item) {
            if (item.data && item.data.title !== undefined)
                return item.data.title;
            var src = mfp.st.image.titleSrc;
            if (src) { if ($.isFunction(src)) { return src.call(mfp, item); } else if (item.el) { return item.el.attr(src) || ''; } }
            return '';
        };
        $.magnificPopup.registerModule('image', {
            options: {
                markup: '<div class="mfp-figure">' +
                    '<div class="mfp-close"></div>' +
                    '<figure>' +
                    '<div class="mfp-img"></div>' +
                    '<figcaption>' +
                    '<div class="mfp-bottom-bar">' +
                    '<div class="mfp-title"></div>' +
                    '<div class="mfp-counter"></div>' +
                    '</div>' +
                    '</figcaption>' +
                    '</figure>' +
                    '</div>',
                cursor: 'mfp-zoom-out-cur',
                titleSrc: 'title',
                verticalFit: true,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var imgSt = mfp.st.image,
                        ns = '.image';
                    mfp.types.push('image');
                    _mfpOn(OPEN_EVENT + ns, function() { if (mfp.currItem.type === 'image' && imgSt.cursor) { $(document.body).addClass(imgSt.cursor); } });
                    _mfpOn(CLOSE_EVENT + ns, function() {
                        if (imgSt.cursor) { $(document.body).removeClass(imgSt.cursor); }
                        _window.off('resize' + EVENT_NS);
                    });
                    _mfpOn('Resize' + ns, mfp.resizeImage);
                    if (mfp.isLowIE) { _mfpOn('AfterChange', mfp.resizeImage); }
                },
                resizeImage: function() {
                    var item = mfp.currItem;
                    if (!item || !item.img) return;
                    if (mfp.st.image.verticalFit) {
                        var decr = 0;
                        if (mfp.isLowIE) { decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10); }
                        item.img.css('max-height', mfp.wH - decr);
                    }
                },
                _onImageHasSize: function(item) {
                    if (item.img) {
                        item.hasSize = true;
                        if (_imgInterval) { clearInterval(_imgInterval); }
                        item.isCheckingImgSize = false;
                        _mfpTrigger('ImageHasSize', item);
                        if (item.imgHidden) {
                            if (mfp.content)
                                mfp.content.removeClass('mfp-loading');
                            item.imgHidden = false;
                        }
                    }
                },
                findImageSize: function(item) {
                    var counter = 0,
                        img = item.img[0],
                        mfpSetInterval = function(delay) {
                            if (_imgInterval) { clearInterval(_imgInterval); }
                            _imgInterval = setInterval(function() {
                                if (img.naturalWidth > 0) { mfp._onImageHasSize(item); return; }
                                if (counter > 200) { clearInterval(_imgInterval); }
                                counter++;
                                if (counter === 3) { mfpSetInterval(10); } else if (counter === 40) { mfpSetInterval(50); } else if (counter === 100) { mfpSetInterval(500); }
                            }, delay);
                        };
                    mfpSetInterval(1);
                },
                getImage: function(item, template) {
                    var guard = 0,
                        onLoadComplete = function() {
                            if (item) {
                                if (item.img[0].complete) {
                                    item.img.off('.mfploader');
                                    if (item === mfp.currItem) {
                                        mfp._onImageHasSize(item);
                                        mfp.updateStatus('ready');
                                    }
                                    item.hasSize = true;
                                    item.loaded = true;
                                    _mfpTrigger('ImageLoadComplete');
                                } else { guard++; if (guard < 200) { setTimeout(onLoadComplete, 100); } else { onLoadError(); } }
                            }
                        },
                        onLoadError = function() {
                            if (item) {
                                item.img.off('.mfploader');
                                if (item === mfp.currItem) {
                                    mfp._onImageHasSize(item);
                                    mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                                }
                                item.hasSize = true;
                                item.loaded = true;
                                item.loadError = true;
                            }
                        },
                        imgSt = mfp.st.image;
                    var el = template.find('.mfp-img');
                    if (el.length) {
                        var img = document.createElement('img');
                        img.className = 'mfp-img';
                        if (item.el && item.el.find('img').length) { img.alt = item.el.find('img').attr('alt'); }
                        item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
                        img.src = item.src;
                        if (el.is('img')) { item.img = item.img.clone(); }
                        img = item.img[0];
                        if (img.naturalWidth > 0) { item.hasSize = true; } else if (!img.width) { item.hasSize = false; }
                    }
                    mfp._parseMarkup(template, { title: _getTitle(item), img_replaceWith: item.img }, item);
                    mfp.resizeImage();
                    if (item.hasSize) {
                        if (_imgInterval) clearInterval(_imgInterval);
                        if (item.loadError) {
                            template.addClass('mfp-loading');
                            mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                        } else {
                            template.removeClass('mfp-loading');
                            mfp.updateStatus('ready');
                        }
                        return template;
                    }
                    mfp.updateStatus('loading');
                    item.loading = true;
                    if (!item.hasSize) {
                        item.imgHidden = true;
                        template.addClass('mfp-loading');
                        mfp.findImageSize(item);
                    }
                    return template;
                }
            }
        });
        var hasMozTransform, getHasMozTransform = function() {
            if (hasMozTransform === undefined) { hasMozTransform = document.createElement('p').style.MozTransform !== undefined; }
            return hasMozTransform;
        };
        $.magnificPopup.registerModule('zoom', {
            options: { enabled: false, easing: 'ease-in-out', duration: 300, opener: function(element) { return element.is('img') ? element : element.find('img'); } },
            proto: {
                initZoom: function() {
                    var zoomSt = mfp.st.zoom,
                        ns = '.zoom',
                        image;
                    if (!zoomSt.enabled || !mfp.supportsTransition) { return; }
                    var duration = zoomSt.duration,
                        getElToAnimate = function(image) {
                            var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                                transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing,
                                cssObj = { position: 'fixed', zIndex: 9999, left: 0, top: 0, '-webkit-backface-visibility': 'hidden' },
                                t = 'transition';
                            cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;
                            newImg.css(cssObj);
                            return newImg;
                        },
                        showMainContent = function() { mfp.content.css('visibility', 'visible'); },
                        openTimeout, animatedImg;
                    _mfpOn('BuildControls' + ns, function() {
                        if (mfp._allowZoom()) {
                            clearTimeout(openTimeout);
                            mfp.content.css('visibility', 'hidden');
                            image = mfp._getItemToZoom();
                            if (!image) { showMainContent(); return; }
                            animatedImg = getElToAnimate(image);
                            animatedImg.css(mfp._getOffset());
                            mfp.wrap.append(animatedImg);
                            openTimeout = setTimeout(function() {
                                animatedImg.css(mfp._getOffset(true));
                                openTimeout = setTimeout(function() {
                                    showMainContent();
                                    setTimeout(function() {
                                        animatedImg.remove();
                                        image = animatedImg = null;
                                        _mfpTrigger('ZoomAnimationEnded');
                                    }, 16);
                                }, duration);
                            }, 16);
                        }
                    });
                    _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
                        if (mfp._allowZoom()) {
                            clearTimeout(openTimeout);
                            mfp.st.removalDelay = duration;
                            if (!image) {
                                image = mfp._getItemToZoom();
                                if (!image) { return; }
                                animatedImg = getElToAnimate(image);
                            }
                            animatedImg.css(mfp._getOffset(true));
                            mfp.wrap.append(animatedImg);
                            mfp.content.css('visibility', 'hidden');
                            setTimeout(function() { animatedImg.css(mfp._getOffset()); }, 16);
                        }
                    });
                    _mfpOn(CLOSE_EVENT + ns, function() {
                        if (mfp._allowZoom()) {
                            showMainContent();
                            if (animatedImg) { animatedImg.remove(); }
                            image = null;
                        }
                    });
                },
                _allowZoom: function() { return mfp.currItem.type === 'image'; },
                _getItemToZoom: function() { if (mfp.currItem.hasSize) { return mfp.currItem.img; } else { return false; } },
                _getOffset: function(isLarge) {
                    var el;
                    if (isLarge) { el = mfp.currItem.img; } else { el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem); }
                    var offset = el.offset();
                    var paddingTop = parseInt(el.css('padding-top'), 10);
                    var paddingBottom = parseInt(el.css('padding-bottom'), 10);
                    offset.top -= ($(window).scrollTop() - paddingTop);
                    var obj = { width: el.width(), height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop };
                    if (getHasMozTransform()) { obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)'; } else {
                        obj.left = offset.left;
                        obj.top = offset.top;
                    }
                    return obj;
                }
            }
        });
        var IFRAME_NS = 'iframe',
            _emptyPage = '//about:blank',
            _fixIframeBugs = function(isShowing) {
                if (mfp.currTemplate[IFRAME_NS]) {
                    var el = mfp.currTemplate[IFRAME_NS].find('iframe');
                    if (el.length) {
                        if (!isShowing) { el[0].src = _emptyPage; }
                        if (mfp.isIE8) { el.css('display', isShowing ? 'block' : 'none'); }
                    }
                }
            };
        $.magnificPopup.registerModule(IFRAME_NS, {
            options: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',
                srcAction: 'iframe_src',
                patterns: { youtube: { index: 'youtube.com', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1' }, vimeo: { index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1' }, gmaps: { index: '//maps.google.', src: '%id%&output=embed' } }
            },
            proto: {
                initIframe: function() {
                    mfp.types.push(IFRAME_NS);
                    _mfpOn('BeforeChange', function(e, prevType, newType) {
                        if (prevType !== newType) { if (prevType === IFRAME_NS) { _fixIframeBugs(); } else if (newType === IFRAME_NS) { _fixIframeBugs(true); } }
                    });
                    _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() { _fixIframeBugs(); });
                },
                getIframe: function(item, template) {
                    var embedSrc = item.src;
                    var iframeSt = mfp.st.iframe;
                    $.each(iframeSt.patterns, function() {
                        if (embedSrc.indexOf(this.index) > -1) {
                            if (this.id) { if (typeof this.id === 'string') { embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length); } else { embedSrc = this.id.call(this, embedSrc); } }
                            embedSrc = this.src.replace('%id%', embedSrc);
                            return false;
                        }
                    });
                    var dataObj = {};
                    if (iframeSt.srcAction) { dataObj[iframeSt.srcAction] = embedSrc; }
                    mfp._parseMarkup(template, dataObj, item);
                    mfp.updateStatus('ready');
                    return template;
                }
            }
        });
        var _getLoopedId = function(index) {
                var numSlides = mfp.items.length;
                if (index > numSlides - 1) { return index - numSlides; } else if (index < 0) { return numSlides + index; }
                return index;
            },
            _replaceCurrTotal = function(text, curr, total) { return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total); };
        $.magnificPopup.registerModule('gallery', {
            options: { enabled: false, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: true, arrows: true, tPrev: 'Previous (Left arrow key)', tNext: 'Next (Right arrow key)', tCounter: '%curr% of %total%' },
            proto: {
                initGallery: function() {
                    var gSt = mfp.st.gallery,
                        ns = '.mfp-gallery';
                    mfp.direction = true;
                    if (!gSt || !gSt.enabled) return false;
                    _wrapClasses += ' mfp-gallery';
                    _mfpOn(OPEN_EVENT + ns, function() {
                        if (gSt.navigateByImgClick) { mfp.wrap.on('click' + ns, '.mfp-img', function() { if (mfp.items.length > 1) { mfp.next(); return false; } }); }
                        _document.on('keydown' + ns, function(e) { if (e.keyCode === 37) { mfp.prev(); } else if (e.keyCode === 39) { mfp.next(); } });
                    });
                    _mfpOn('UpdateStatus' + ns, function(e, data) { if (data.text) { data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length); } });
                    _mfpOn(MARKUP_PARSE_EVENT + ns, function(e, element, values, item) {
                        var l = mfp.items.length;
                        values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
                    });
                    _mfpOn('BuildControls' + ns, function() {
                        if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                            var markup = gSt.arrowMarkup,
                                arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
                                arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);
                            arrowLeft.click(function() { mfp.prev(); });
                            arrowRight.click(function() { mfp.next(); });
                            mfp.content.append(arrowLeft.add(arrowRight));
                        }
                    });
                    _mfpOn(CHANGE_EVENT + ns, function() {
                        if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);
                        mfp._preloadTimeout = setTimeout(function() {
                            mfp.preloadNearbyImages();
                            mfp._preloadTimeout = null;
                        }, 16);
                    });
                    _mfpOn(CLOSE_EVENT + ns, function() {
                        _document.off(ns);
                        mfp.wrap.off('click' + ns);
                        mfp.arrowRight = mfp.arrowLeft = null;
                    });
                },
                next: function() {
                    mfp.direction = true;
                    mfp.index = _getLoopedId(mfp.index + 1);
                    mfp.updateItemHTML();
                },
                prev: function() {
                    mfp.direction = false;
                    mfp.index = _getLoopedId(mfp.index - 1);
                    mfp.updateItemHTML();
                },
                goTo: function(newIndex) {
                    mfp.direction = (newIndex >= mfp.index);
                    mfp.index = newIndex;
                    mfp.updateItemHTML();
                },
                preloadNearbyImages: function() {
                    var p = mfp.st.gallery.preload,
                        preloadBefore = Math.min(p[0], mfp.items.length),
                        preloadAfter = Math.min(p[1], mfp.items.length),
                        i;
                    for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) { mfp._preloadItem(mfp.index + i); }
                    for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) { mfp._preloadItem(mfp.index - i); }
                },
                _preloadItem: function(index) {
                    index = _getLoopedId(index);
                    if (mfp.items[index].preloaded) { return; }
                    var item = mfp.items[index];
                    if (!item.parsed) { item = mfp.parseEl(index); }
                    _mfpTrigger('LazyLoad', item);
                    if (item.type === 'image') {
                        item.img = $('<img class="mfp-img" />').on('load.mfploader', function() { item.hasSize = true; }).on('error.mfploader', function() {
                            item.hasSize = true;
                            item.loadError = true;
                            _mfpTrigger('LazyLoadError', item);
                        }).attr('src', item.src);
                    }
                    item.preloaded = true;
                }
            }
        });
        var RETINA_NS = 'retina';
        $.magnificPopup.registerModule(RETINA_NS, {
            options: { replaceSrc: function(item) { return item.src.replace(/\.\w+$/, function(m) { return '@2x' + m; }); }, ratio: 1 },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var st = mfp.st.retina,
                            ratio = st.ratio;
                        ratio = !isNaN(ratio) ? ratio : ratio();
                        if (ratio > 1) {
                            _mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) { item.img.css({ 'max-width': item.img[0].naturalWidth / ratio, 'width': '100%' }); });
                            _mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) { item.src = st.replaceSrc(item, ratio); });
                        }
                    }
                }
            }
        });
        _checkInstance();
    }));;
    (function($) {
        var query;
        $(document).on('click', '.rating li', function() {
            var $star = $(this);
            var $list = $star.closest('.stars');
            if ($list.hasClass('voted')) { return false; }
            var rating = parseInt($star.data('vote')) || 5;
            if ((rating < 1) || (rating > 5)) { return false; }
            if (query) query.abort();
            query = $.ajax({ url: window.js_storage.ajax_vote, type: 'POST', data: { rating: rating }, dataType: 'json', success: function(response) { $list.attr('class', 'stars').addClass('voted voted-' + response.rating); } });
        }).ready(function() { var rating = $.cookie('voted'); if (rating) { $('.rating').find('.stars').addClass('voted voted-' + rating); } });
    })(jQuery);
}).call(this);