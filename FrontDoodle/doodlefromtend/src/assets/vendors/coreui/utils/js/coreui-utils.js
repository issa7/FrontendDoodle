/* eslint-disable */
!function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Utils = t() : (e.coreui = e.coreui || {}, e.coreui.Utils = t())
}(this, (function () {
  return function (e) {
    var t = {};

    function r (n) {
      if (t[n]) return t[n].exports;
      var o = t[n] = {i: n, l: !1, exports: {}};
      return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, r.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
        return e[t]
      }.bind(null, o));
      return n
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return r.d(t, "a", t), t
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 0)
  }([function (e, t, r) {
    "use strict";
    r.r(t);
    var n = function e (t, r) {
      for (var n = 0, o = Object.keys(r); n < o.length; n++) {
        var c = o[n];
        r[c] instanceof Object && Object.assign(r[c], e(t[c], r[c]))
      }
      return Object.assign(t || {}, r), t
    }, o = function () {
      for (var e = {}, t = document.styleSheets, r = "", n = t.length - 1; n > -1; n--) {
        for (var o = t[n].cssRules, c = o.length - 1; c > -1; c--) if (".ie-custom-properties" === o[c].selectorText) {
          r = o[c].cssText;
          break
        }
        if (r) break
      }
      return (r = r.substring(r.lastIndexOf("{") + 1, r.lastIndexOf("}"))).split(";").forEach((function (t) {
        if (t) {
          var r = t.split(": ")[0], n = t.split(": ")[1];
          r && n && (e["--".concat(r.trim())] = n.trim())
        }
      })), e
    }, c = function () {
      return Boolean(document.documentMode) && document.documentMode >= 10
    }, i = function (e) {
      return e.match(/^--.*/i)
    }, a = function (e) {
      var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body;
      if (i(e) && c()) {
        var n = o();
        t = n[e]
      } else t = window.getComputedStyle(r, null).getPropertyValue(e).replace(/^\s/, "");
      return t
    }, s = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document.body, r = "--".concat(e),
        n = a(r, t);
      return n || e
    }, u = function (e) {
      if (void 0 === e) throw new TypeError("Hex color is not defined");
      var t, r, n;
      if (!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i)) throw new Error("".concat(e, " is not a valid hex color"));
      return 7 === e.length ? (t = parseInt(e.slice(1, 3), 16), r = parseInt(e.slice(3, 5), 16), n = parseInt(e.slice(5, 7), 16)) : (t = parseInt(e.slice(1, 2), 16), r = parseInt(e.slice(2, 3), 16), n = parseInt(e.slice(3, 5), 16)), "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ")")
    }, l = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
      if (void 0 === e) throw new TypeError("Hex color is not defined");
      var r, n, o, c = e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);
      if (!c) throw new Error("".concat(e, " is not a valid hex color"));
      return 7 === e.length ? (r = parseInt(e.slice(1, 3), 16), n = parseInt(e.slice(3, 5), 16), o = parseInt(e.slice(5, 7), 16)) : (r = parseInt(e.slice(1, 2), 16), n = parseInt(e.slice(2, 3), 16), o = parseInt(e.slice(3, 5), 16)), "rgba(".concat(r, ", ").concat(n, ", ").concat(o, ", ").concat(t / 100, ")")
    }, f = function () {
      return "uid-" + Math.random().toString(36).substr(2)
    }, d = function (e, t) {
      for (var r = {}, n = 0; n < t.length; n++) r[t[n]] = e[t[n]];
      return r
    }, p = function (e) {
      if (void 0 === e) throw new TypeError("Hex color is not defined");
      if ("transparent" === e) return "#00000000";
      var t = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
      if (!t) throw new Error("".concat(e, " is not a valid rgb color"));
      var r = "0".concat(parseInt(t[1], 10).toString(16)), n = "0".concat(parseInt(t[2], 10).toString(16)),
        o = "0".concat(parseInt(t[3], 10).toString(16));
      return "#".concat(r.slice(-2)).concat(n.slice(-2)).concat(o.slice(-2))
    };
    t.default = {
      deepObjectsMerge: n,
      getColor: s,
      getStyle: a,
      hexToRgb: u,
      hexToRgba: l,
      makeUid: f,
      pickByKeys: d,
      rgbToHex: p
    }
  }]).default
}))
