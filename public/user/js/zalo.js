try {
    !(function (t, e) {
        "object" == typeof exports && "object" == typeof module
            ? (module.exports = e())
            : "function" == typeof define && define.amd
            ? define("ZaloSocialSDK", [], e)
            : "object" == typeof exports
            ? (exports.ZaloSocialSDK = e())
            : (t.ZaloSocialSDK = e());
    })(window, function () {
        return (function (t) {
            var e = {};
            function n(i) {
                if (e[i]) return e[i].exports;
                var r = (e[i] = { i: i, l: !1, exports: {} });
                return (
                    t[i].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
                );
            }
            return (
                (n.m = t),
                (n.c = e),
                (n.d = function (t, e, i) {
                    n.o(t, e) ||
                        Object.defineProperty(t, e, { enumerable: !0, get: i });
                }),
                (n.r = function (t) {
                    "undefined" != typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(t, Symbol.toStringTag, {
                            value: "Module",
                        }),
                        Object.defineProperty(t, "__esModule", { value: !0 });
                }),
                (n.t = function (t, e) {
                    if ((1 & e && (t = n(t)), 8 & e)) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule)
                        return t;
                    var i = Object.create(null);
                    if (
                        (n.r(i),
                        Object.defineProperty(i, "default", {
                            enumerable: !0,
                            value: t,
                        }),
                        2 & e && "string" != typeof t)
                    )
                        for (var r in t)
                            n.d(
                                i,
                                r,
                                function (e) {
                                    return t[e];
                                }.bind(null, r)
                            );
                    return i;
                }),
                (n.n = function (t) {
                    var e =
                        t && t.__esModule
                            ? function () {
                                  return t.default;
                              }
                            : function () {
                                  return t;
                              };
                    return n.d(e, "a", e), e;
                }),
                (n.o = function (t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                }),
                (n.p = "./"),
                n((n.s = 47))
            );
        })([
            function (t, e, n) {
                t.exports = { default: n(85), __esModule: !0 };
            },
            function (t, e) {
                var n = (t.exports =
                    "undefined" != typeof window && window.Math == Math
                        ? window
                        : "undefined" != typeof self && self.Math == Math
                        ? self
                        : Function("return this")());
                "number" == typeof __g && (__g = n);
            },
            function (t, e) {
                var n = (t.exports = { version: "2.5.3" });
                "number" == typeof __e && (__e = n);
            },
            function (t, e, n) {
                var i = n(32)("wks"),
                    r = n(33),
                    o = n(1).Symbol,
                    a = "function" == typeof o;
                (t.exports = function (t) {
                    return (
                        i[t] ||
                        (i[t] = (a && o[t]) || (a ? o : r)("Symbol." + t))
                    );
                }).store = i;
            },
            function (t, e, n) {
                var i = n(1),
                    r = n(2),
                    o = n(10),
                    a = n(6),
                    s = "prototype",
                    l = function (t, e, n) {
                        var u,
                            h,
                            c,
                            f = t & l.F,
                            d = t & l.G,
                            p = t & l.S,
                            m = t & l.P,
                            g = t & l.B,
                            y = t & l.W,
                            v = d ? r : r[e] || (r[e] = {}),
                            w = v[s],
                            x = d ? i : p ? i[e] : (i[e] || {})[s];
                        for (u in (d && (n = e), n))
                            ((h = !f && x && void 0 !== x[u]) && u in v) ||
                                ((c = h ? x[u] : n[u]),
                                (v[u] =
                                    d && "function" != typeof x[u]
                                        ? n[u]
                                        : g && h
                                        ? o(c, i)
                                        : y && x[u] == c
                                        ? (function (t) {
                                              var e = function (e, n, i) {
                                                  if (this instanceof t) {
                                                      switch (
                                                          arguments.length
                                                      ) {
                                                          case 0:
                                                              return new t();
                                                          case 1:
                                                              return new t(e);
                                                          case 2:
                                                              return new t(
                                                                  e,
                                                                  n
                                                              );
                                                      }
                                                      return new t(e, n, i);
                                                  }
                                                  return t.apply(
                                                      this,
                                                      arguments
                                                  );
                                              };
                                              return (e[s] = t[s]), e;
                                          })(c)
                                        : m && "function" == typeof c
                                        ? o(Function.call, c)
                                        : c),
                                m &&
                                    (((v.virtual || (v.virtual = {}))[u] = c),
                                    t & l.R && w && !w[u] && a(w, u, c)));
                    };
                (l.F = 1),
                    (l.G = 2),
                    (l.S = 4),
                    (l.P = 8),
                    (l.B = 16),
                    (l.W = 32),
                    (l.U = 64),
                    (l.R = 128),
                    (t.exports = l);
            },
            function (t, e, n) {
                var i = n(11);
                t.exports = function (t) {
                    if (!i(t)) throw TypeError(t + " is not an object!");
                    return t;
                };
            },
            function (t, e, n) {
                var i = n(7),
                    r = n(21);
                t.exports = n(8)
                    ? function (t, e, n) {
                          return i.f(t, e, r(1, n));
                      }
                    : function (t, e, n) {
                          return (t[e] = n), t;
                      };
            },
            function (t, e, n) {
                var i = n(5),
                    r = n(53),
                    o = n(54),
                    a = Object.defineProperty;
                e.f = n(8)
                    ? Object.defineProperty
                    : function (t, e, n) {
                          if ((i(t), (e = o(e, !0)), i(n), r))
                              try {
                                  return a(t, e, n);
                              } catch (t) {}
                          if ("get" in n || "set" in n)
                              throw TypeError("Accessors not supported!");
                          return "value" in n && (t[e] = n.value), t;
                      };
            },
            function (t, e, n) {
                t.exports = !n(19)(function () {
                    return (
                        7 !=
                        Object.defineProperty({}, "a", {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = a(n(0)),
                    r = a(n(89)),
                    o = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    (0, i.default)(t, r.key, r);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })();
                function a(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var s = (function () {
                    function t() {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                    }
                    return (
                        o(t, null, [
                            {
                                key: "jsonToQueryString",
                                value: function (t) {
                                    return (
                                        "?" +
                                        (0, r.default)(t)
                                            .map(function (e) {
                                                return (
                                                    encodeURIComponent(e) +
                                                    "=" +
                                                    encodeURIComponent(t[e])
                                                );
                                            })
                                            .join("&")
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })();
                e.default = s;
            },
            function (t, e, n) {
                var i = n(13);
                t.exports = function (t, e, n) {
                    if ((i(t), void 0 === e)) return t;
                    switch (n) {
                        case 1:
                            return function (n) {
                                return t.call(e, n);
                            };
                        case 2:
                            return function (n, i) {
                                return t.call(e, n, i);
                            };
                        case 3:
                            return function (n, i, r) {
                                return t.call(e, n, i, r);
                            };
                    }
                    return function () {
                        return t.apply(e, arguments);
                    };
                };
            },
            function (t, e) {
                t.exports = function (t) {
                    return "object" == typeof t
                        ? null !== t
                        : "function" == typeof t;
                };
            },
            function (t, e) {
                t.exports = {};
            },
            function (t, e) {
                t.exports = function (t) {
                    if ("function" != typeof t)
                        throw TypeError(t + " is not a function!");
                    return t;
                };
            },
            function (t, e) {
                var n = {}.hasOwnProperty;
                t.exports = function (t, e) {
                    return n.call(t, e);
                };
            },
            function (t, e) {
                var n = {}.toString;
                t.exports = function (t) {
                    return n.call(t).slice(8, -1);
                };
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i,
                    r = n(0),
                    o = (i = r) && i.__esModule ? i : { default: i },
                    a = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                (i.enumerable = i.enumerable || !1),
                                    (i.configurable = !0),
                                    "value" in i && (i.writable = !0),
                                    (0, o.default)(t, i.key, i);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })();
                var s = (function () {
                    function t() {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                    }
                    return (
                        a(t, null, [
                            {
                                key: "isAndroid",
                                value: function () {
                                    var t =
                                        navigator.userAgent ||
                                        navigator.vendor ||
                                        window.opera;
                                    return !!/android/i.test(t);
                                },
                            },
                            {
                                key: "isIOS",
                                value: function () {
                                    var t =
                                        navigator.userAgent ||
                                        navigator.vendor ||
                                        window.opera;
                                    return !(
                                        !/iPad|iPhone|iPod/.test(t) ||
                                        window.MSStream
                                    );
                                },
                            },
                            {
                                key: "isMobile",
                                value: function () {
                                    var t,
                                        e = !1;
                                    return (
                                        (t =
                                            navigator.userAgent ||
                                            navigator.vendor ||
                                            window.opera),
                                        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                                            t
                                        ) ||
                                            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                                                t.substr(0, 4)
                                            )) &&
                                            (e = !0),
                                        e
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })();
                e.default = s;
            },
            function (t, e) {
                var n = Math.ceil,
                    i = Math.floor;
                t.exports = function (t) {
                    return isNaN((t = +t)) ? 0 : (t > 0 ? i : n)(t);
                };
            },
            function (t, e) {
                t.exports = function (t) {
                    if (null == t)
                        throw TypeError("Can't call method on  " + t);
                    return t;
                };
            },
            function (t, e) {
                t.exports = function (t) {
                    try {
                        return !!t();
                    } catch (t) {
                        return !0;
                    }
                };
            },
            function (t, e, n) {
                var i = n(11),
                    r = n(1).document,
                    o = i(r) && i(r.createElement);
                t.exports = function (t) {
                    return o ? r.createElement(t) : {};
                };
            },
            function (t, e) {
                t.exports = function (t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e,
                    };
                };
            },
            function (t, e, n) {
                var i = n(60),
                    r = n(18);
                t.exports = function (t) {
                    return i(r(t));
                };
            },
            function (t, e, n) {
                var i = n(17),
                    r = Math.min;
                t.exports = function (t) {
                    return t > 0 ? r(i(t), 9007199254740991) : 0;
                };
            },
            function (t, e, n) {
                var i = n(32)("keys"),
                    r = n(33);
                t.exports = function (t) {
                    return i[t] || (i[t] = r(t));
                };
            },
            function (t, e, n) {
                var i = n(7).f,
                    r = n(14),
                    o = n(3)("toStringTag");
                t.exports = function (t, e, n) {
                    t &&
                        !r((t = n ? t : t.prototype), o) &&
                        i(t, o, { configurable: !0, value: e });
                };
            },
            function (t, e, n) {
                var i = n(18);
                t.exports = function (t) {
                    return Object(i(t));
                };
            },
            function (t, e, n) {
                "use strict";
                var i = n(13);
                t.exports.f = function (t) {
                    return new (function (t) {
                        var e, n;
                        (this.promise = new t(function (t, i) {
                            if (void 0 !== e || void 0 !== n)
                                throw TypeError("Bad Promise constructor");
                            (e = t), (n = i);
                        })),
                            (this.resolve = i(e)),
                            (this.reject = i(n));
                    })(t);
                };
            },
            function (t, e, n) {
                "use strict";
                var i = n(52)(!0);
                n(29)(
                    String,
                    "String",
                    function (t) {
                        (this._t = String(t)), (this._i = 0);
                    },
                    function () {
                        var t,
                            e = this._t,
                            n = this._i;
                        return n >= e.length
                            ? { value: void 0, done: !0 }
                            : ((t = i(e, n)),
                              (this._i += t.length),
                              { value: t, done: !1 });
                    }
                );
            },
            function (t, e, n) {
                "use strict";
                var i = n(30),
                    r = n(4),
                    o = n(55),
                    a = n(6),
                    s = n(14),
                    l = n(12),
                    u = n(56),
                    h = n(25),
                    c = n(63),
                    f = n(3)("iterator"),
                    d = !([].keys && "next" in [].keys()),
                    p = "values",
                    m = function () {
                        return this;
                    };
                t.exports = function (t, e, n, g, y, v, w) {
                    u(n, e, g);
                    var x,
                        b,
                        _,
                        B = function (t) {
                            if (!d && t in S) return S[t];
                            switch (t) {
                                case "keys":
                                case p:
                                    return function () {
                                        return new n(this, t);
                                    };
                            }
                            return function () {
                                return new n(this, t);
                            };
                        },
                        k = e + " Iterator",
                        E = y == p,
                        T = !1,
                        S = t.prototype,
                        A = S[f] || S["@@iterator"] || (y && S[y]),
                        P = (!d && A) || B(y),
                        R = y ? (E ? B("entries") : P) : void 0,
                        z = ("Array" == e && S.entries) || A;
                    if (
                        (z &&
                            (_ = c(z.call(new t()))) !== Object.prototype &&
                            _.next &&
                            (h(_, k, !0), i || s(_, f) || a(_, f, m)),
                        E &&
                            A &&
                            A.name !== p &&
                            ((T = !0),
                            (P = function () {
                                return A.call(this);
                            })),
                        (i && !w) || (!d && !T && S[f]) || a(S, f, P),
                        (l[e] = P),
                        (l[k] = m),
                        y)
                    )
                        if (
                            ((x = {
                                values: E ? P : B(p),
                                keys: v ? P : B("keys"),
                                entries: R,
                            }),
                            w)
                        )
                            for (b in x) b in S || o(S, b, x[b]);
                        else r(r.P + r.F * (d || T), e, x);
                    return x;
                };
            },
            function (t, e) {
                t.exports = !0;
            },
            function (t, e, n) {
                var i = n(59),
                    r = n(34);
                t.exports =
                    Object.keys ||
                    function (t) {
                        return i(t, r);
                    };
            },
            function (t, e, n) {
                var i = n(1),
                    r = "__core-js_shared__",
                    o = i[r] || (i[r] = {});
                t.exports = function (t) {
                    return o[t] || (o[t] = {});
                };
            },
            function (t, e) {
                var n = 0,
                    i = Math.random();
                t.exports = function (t) {
                    return "Symbol(".concat(
                        void 0 === t ? "" : t,
                        ")_",
                        (++n + i).toString(36)
                    );
                };
            },
            function (t, e) {
                t.exports =
                    "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
                        ","
                    );
            },
            function (t, e, n) {
                var i = n(1).document;
                t.exports = i && i.documentElement;
            },
            function (t, e, n) {
                var i = n(15),
                    r = n(3)("toStringTag"),
                    o =
                        "Arguments" ==
                        i(
                            (function () {
                                return arguments;
                            })()
                        );
                t.exports = function (t) {
                    var e, n, a;
                    return void 0 === t
                        ? "Undefined"
                        : null === t
                        ? "Null"
                        : "string" ==
                          typeof (n = (function (t, e) {
                              try {
                                  return t[e];
                              } catch (t) {}
                          })((e = Object(t)), r))
                        ? n
                        : o
                        ? i(e)
                        : "Object" == (a = i(e)) &&
                          "function" == typeof e.callee
                        ? "Arguments"
                        : a;
                };
            },
            function (t, e, n) {
                var i = n(5);
                t.exports = function (t, e, n, r) {
                    try {
                        return r ? e(i(n)[0], n[1]) : e(n);
                    } catch (e) {
                        var o = t.return;
                        throw (void 0 !== o && i(o.call(t)), e);
                    }
                };
            },
            function (t, e, n) {
                var i = n(12),
                    r = n(3)("iterator"),
                    o = Array.prototype;
                t.exports = function (t) {
                    return void 0 !== t && (i.Array === t || o[r] === t);
                };
            },
            function (t, e, n) {
                var i = n(36),
                    r = n(3)("iterator"),
                    o = n(12);
                t.exports = n(2).getIteratorMethod = function (t) {
                    if (null != t) return t[r] || t["@@iterator"] || o[i(t)];
                };
            },
            function (t, e, n) {
                var i = n(5),
                    r = n(13),
                    o = n(3)("species");
                t.exports = function (t, e) {
                    var n,
                        a = i(t).constructor;
                    return void 0 === a || null == (n = i(a)[o]) ? e : r(n);
                };
            },
            function (t, e, n) {
                var i,
                    r,
                    o,
                    a = n(10),
                    s = n(71),
                    l = n(35),
                    u = n(20),
                    h = n(1),
                    c = h.process,
                    f = h.setImmediate,
                    d = h.clearImmediate,
                    p = h.MessageChannel,
                    m = h.Dispatch,
                    g = 0,
                    y = {},
                    v = "onreadystatechange",
                    w = function () {
                        var t = +this;
                        if (y.hasOwnProperty(t)) {
                            var e = y[t];
                            delete y[t], e();
                        }
                    },
                    x = function (t) {
                        w.call(t.data);
                    };
                (f && d) ||
                    ((f = function (t) {
                        for (var e = [], n = 1; arguments.length > n; )
                            e.push(arguments[n++]);
                        return (
                            (y[++g] = function () {
                                s("function" == typeof t ? t : Function(t), e);
                            }),
                            i(g),
                            g
                        );
                    }),
                    (d = function (t) {
                        delete y[t];
                    }),
                    "process" == n(15)(c)
                        ? (i = function (t) {
                              c.nextTick(a(w, t, 1));
                          })
                        : m && m.now
                        ? (i = function (t) {
                              m.now(a(w, t, 1));
                          })
                        : p
                        ? ((o = (r = new p()).port2),
                          (r.port1.onmessage = x),
                          (i = a(o.postMessage, o, 1)))
                        : h.addEventListener &&
                          "function" == typeof postMessage &&
                          !h.importScripts
                        ? ((i = function (t) {
                              h.postMessage(t + "", "*");
                          }),
                          h.addEventListener("message", x, !1))
                        : (i =
                              v in u("script")
                                  ? function (t) {
                                        l.appendChild(u("script"))[v] =
                                            function () {
                                                l.removeChild(this), w.call(t);
                                            };
                                    }
                                  : function (t) {
                                        setTimeout(a(w, t, 1), 0);
                                    })),
                    (t.exports = { set: f, clear: d });
            },
            function (t, e) {
                t.exports = function (t) {
                    try {
                        return { e: !1, v: t() };
                    } catch (t) {
                        return { e: !0, v: t };
                    }
                };
            },
            function (t, e, n) {
                var i = n(5),
                    r = n(11),
                    o = n(27);
                t.exports = function (t, e) {
                    if ((i(t), r(e) && e.constructor === t)) return e;
                    var n = o.f(t);
                    return (0, n.resolve)(e), n.promise;
                };
            },
            function (t, e, n) {
                var i = n(3)("iterator"),
                    r = !1;
                try {
                    var o = [7][i]();
                    (o.return = function () {
                        r = !0;
                    }),
                        Array.from(o, function () {
                            throw 2;
                        });
                } catch (t) {}
                t.exports = function (t, e) {
                    if (!e && !r) return !1;
                    var n = !1;
                    try {
                        var o = [7],
                            a = o[i]();
                        (a.next = function () {
                            return { done: (n = !0) };
                        }),
                            (o[i] = function () {
                                return a;
                            }),
                            t(o);
                    } catch (t) {}
                    return n;
                };
            },
            function (t, e, n) {
                t.exports = { default: n(87), __esModule: !0 };
            },
            function (t, e) {
                var n;
                n = (function () {
                    return this;
                })();
                try {
                    n = n || new Function("return this")();
                } catch (t) {
                    "object" == typeof window && (n = window);
                }
                t.exports = n;
            },
            function (t, e, n) {
                t.exports = n(48);
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = s(n(49)),
                    r = s(n(77));
                (e.init = function () {
                    l.init();
                }),
                    (e.reload = function () {
                        h && clearInterval(h);
                        l.reload();
                    }),
                    (e.openChatWidget = function () {
                        l.openChatWidget();
                    }),
                    (e.closeChatWidget = function () {
                        l.closeChatWidget();
                    });
                var o = s(n(80)),
                    a = s(n(107));
                function s(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var l = new o.default();
                l.init();
                var u,
                    h = void 0;
                ((u = r.default.mark(function t() {
                    return r.default.wrap(
                        function (t) {
                            for (;;)
                                switch ((t.prev = t.next)) {
                                    case 0:
                                        (h = setInterval(function () {
                                            l.retry();
                                        }, 1e3)),
                                            setTimeout(function () {
                                                h && clearInterval(h);
                                            }, 5e3);
                                    case 2:
                                    case "end":
                                        return t.stop();
                                }
                        },
                        t,
                        this
                    );
                })),
                function () {
                    var t = u.apply(this, arguments);
                    return new i.default(function (e, n) {
                        return (function r(o, a) {
                            try {
                                var s = t[o](a),
                                    l = s.value;
                            } catch (t) {
                                return void n(t);
                            }
                            if (!s.done)
                                return i.default.resolve(l).then(
                                    function (t) {
                                        r("next", t);
                                    },
                                    function (t) {
                                        r("throw", t);
                                    }
                                );
                            e(l);
                        })("next");
                    });
                })(),
                    "news.zing.vn" != window.location.hostname &&
                        (function () {
                            try {
                                if (window.self == window.top) {
                                    var t = document.createElement("div");
                                    if (
                                        ((t.id = "app"),
                                        (t.className = "zs"),
                                        document.body.appendChild(t),
                                        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                                            navigator.userAgent
                                        ))
                                    );
                                    else {
                                        var e = window.location.hostname;
                                        ("news.zing.vn" !== e &&
                                            "mp3.zing.vn" !== e) ||
                                            setTimeout(function () {
                                                a.default.loadFile(
                                                    "https://stc.sp.zdn.vn/chatbutton/main-1.2.2.js",
                                                    "js"
                                                ),
                                                    a.default.loadFile(
                                                        "https://stc.sp.zdn.vn/chatbutton/main.142b31d74cee2e25afe3651f0591f9f4.css",
                                                        "css"
                                                    );
                                            }, 100);
                                    }
                                }
                            } catch (t) {
                                console.log("");
                            }
                        })();
            },
            function (t, e, n) {
                t.exports = { default: n(50), __esModule: !0 };
            },
            function (t, e, n) {
                n(51),
                    n(28),
                    n(64),
                    n(68),
                    n(75),
                    n(76),
                    (t.exports = n(2).Promise);
            },
            function (t, e) {},
            function (t, e, n) {
                var i = n(17),
                    r = n(18);
                t.exports = function (t) {
                    return function (e, n) {
                        var o,
                            a,
                            s = String(r(e)),
                            l = i(n),
                            u = s.length;
                        return l < 0 || l >= u
                            ? t
                                ? ""
                                : void 0
                            : (o = s.charCodeAt(l)) < 55296 ||
                              o > 56319 ||
                              l + 1 === u ||
                              (a = s.charCodeAt(l + 1)) < 56320 ||
                              a > 57343
                            ? t
                                ? s.charAt(l)
                                : o
                            : t
                            ? s.slice(l, l + 2)
                            : a - 56320 + ((o - 55296) << 10) + 65536;
                    };
                };
            },
            function (t, e, n) {
                t.exports =
                    !n(8) &&
                    !n(19)(function () {
                        return (
                            7 !=
                            Object.defineProperty(n(20)("div"), "a", {
                                get: function () {
                                    return 7;
                                },
                            }).a
                        );
                    });
            },
            function (t, e, n) {
                var i = n(11);
                t.exports = function (t, e) {
                    if (!i(t)) return t;
                    var n, r;
                    if (
                        e &&
                        "function" == typeof (n = t.toString) &&
                        !i((r = n.call(t)))
                    )
                        return r;
                    if (
                        "function" == typeof (n = t.valueOf) &&
                        !i((r = n.call(t)))
                    )
                        return r;
                    if (
                        !e &&
                        "function" == typeof (n = t.toString) &&
                        !i((r = n.call(t)))
                    )
                        return r;
                    throw TypeError("Can't convert object to primitive value");
                };
            },
            function (t, e, n) {
                t.exports = n(6);
            },
            function (t, e, n) {
                "use strict";
                var i = n(57),
                    r = n(21),
                    o = n(25),
                    a = {};
                n(6)(a, n(3)("iterator"), function () {
                    return this;
                }),
                    (t.exports = function (t, e, n) {
                        (t.prototype = i(a, { next: r(1, n) })),
                            o(t, e + " Iterator");
                    });
            },
            function (t, e, n) {
                var i = n(5),
                    r = n(58),
                    o = n(34),
                    a = n(24)("IE_PROTO"),
                    s = function () {},
                    l = "prototype",
                    u = function () {
                        var t,
                            e = n(20)("iframe"),
                            i = o.length;
                        for (
                            e.style.display = "none",
                                n(35).appendChild(e),
                                e.src = "javascript:",
                                (t = e.contentWindow.document).open(),
                                t.write("<script>document.F=Object</script>"),
                                t.close(),
                                u = t.F;
                            i--;

                        )
                            delete u[l][o[i]];
                        return u();
                    };
                t.exports =
                    Object.create ||
                    function (t, e) {
                        var n;
                        return (
                            null !== t
                                ? ((s[l] = i(t)),
                                  (n = new s()),
                                  (s[l] = null),
                                  (n[a] = t))
                                : (n = u()),
                            void 0 === e ? n : r(n, e)
                        );
                    };
            },
            function (t, e, n) {
                var i = n(7),
                    r = n(5),
                    o = n(31);
                t.exports = n(8)
                    ? Object.defineProperties
                    : function (t, e) {
                          r(t);
                          for (var n, a = o(e), s = a.length, l = 0; s > l; )
                              i.f(t, (n = a[l++]), e[n]);
                          return t;
                      };
            },
            function (t, e, n) {
                var i = n(14),
                    r = n(22),
                    o = n(61)(!1),
                    a = n(24)("IE_PROTO");
                t.exports = function (t, e) {
                    var n,
                        s = r(t),
                        l = 0,
                        u = [];
                    for (n in s) n != a && i(s, n) && u.push(n);
                    for (; e.length > l; )
                        i(s, (n = e[l++])) && (~o(u, n) || u.push(n));
                    return u;
                };
            },
            function (t, e, n) {
                var i = n(15);
                t.exports = Object("z").propertyIsEnumerable(0)
                    ? Object
                    : function (t) {
                          return "String" == i(t) ? t.split("") : Object(t);
                      };
            },
            function (t, e, n) {
                var i = n(22),
                    r = n(23),
                    o = n(62);
                t.exports = function (t) {
                    return function (e, n, a) {
                        var s,
                            l = i(e),
                            u = r(l.length),
                            h = o(a, u);
                        if (t && n != n) {
                            for (; u > h; ) if ((s = l[h++]) != s) return !0;
                        } else
                            for (; u > h; h++)
                                if ((t || h in l) && l[h] === n)
                                    return t || h || 0;
                        return !t && -1;
                    };
                };
            },
            function (t, e, n) {
                var i = n(17),
                    r = Math.max,
                    o = Math.min;
                t.exports = function (t, e) {
                    return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e);
                };
            },
            function (t, e, n) {
                var i = n(14),
                    r = n(26),
                    o = n(24)("IE_PROTO"),
                    a = Object.prototype;
                t.exports =
                    Object.getPrototypeOf ||
                    function (t) {
                        return (
                            (t = r(t)),
                            i(t, o)
                                ? t[o]
                                : "function" == typeof t.constructor &&
                                  t instanceof t.constructor
                                ? t.constructor.prototype
                                : t instanceof Object
                                ? a
                                : null
                        );
                    };
            },
            function (t, e, n) {
                n(65);
                for (
                    var i = n(1),
                        r = n(6),
                        o = n(12),
                        a = n(3)("toStringTag"),
                        s =
                            "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(
                                ","
                            ),
                        l = 0;
                    l < s.length;
                    l++
                ) {
                    var u = s[l],
                        h = i[u],
                        c = h && h.prototype;
                    c && !c[a] && r(c, a, u), (o[u] = o.Array);
                }
            },
            function (t, e, n) {
                "use strict";
                var i = n(66),
                    r = n(67),
                    o = n(12),
                    a = n(22);
                (t.exports = n(29)(
                    Array,
                    "Array",
                    function (t, e) {
                        (this._t = a(t)), (this._i = 0), (this._k = e);
                    },
                    function () {
                        var t = this._t,
                            e = this._k,
                            n = this._i++;
                        return !t || n >= t.length
                            ? ((this._t = void 0), r(1))
                            : r(
                                  0,
                                  "keys" == e
                                      ? n
                                      : "values" == e
                                      ? t[n]
                                      : [n, t[n]]
                              );
                    },
                    "values"
                )),
                    (o.Arguments = o.Array),
                    i("keys"),
                    i("values"),
                    i("entries");
            },
            function (t, e) {
                t.exports = function () {};
            },
            function (t, e) {
                t.exports = function (t, e) {
                    return { value: e, done: !!t };
                };
            },
            function (t, e, n) {
                "use strict";
                var i,
                    r,
                    o,
                    a,
                    s = n(30),
                    l = n(1),
                    u = n(10),
                    h = n(36),
                    c = n(4),
                    f = n(11),
                    d = n(13),
                    p = n(69),
                    m = n(70),
                    g = n(40),
                    y = n(41).set,
                    v = n(72)(),
                    w = n(27),
                    x = n(42),
                    b = n(43),
                    _ = "Promise",
                    B = l.TypeError,
                    k = l.process,
                    E = l[_],
                    T = "process" == h(k),
                    S = function () {},
                    A = (r = w.f),
                    P = !!(function () {
                        try {
                            var t = E.resolve(1),
                                e = ((t.constructor = {})[n(3)("species")] =
                                    function (t) {
                                        t(S, S);
                                    });
                            return (
                                (T ||
                                    "function" ==
                                        typeof PromiseRejectionEvent) &&
                                t.then(S) instanceof e
                            );
                        } catch (t) {}
                    })(),
                    R = function (t) {
                        var e;
                        return (
                            !(!f(t) || "function" != typeof (e = t.then)) && e
                        );
                    },
                    z = function (t, e) {
                        if (!t._n) {
                            t._n = !0;
                            var n = t._c;
                            v(function () {
                                for (
                                    var i = t._v,
                                        r = 1 == t._s,
                                        o = 0,
                                        a = function (e) {
                                            var n,
                                                o,
                                                a = r ? e.ok : e.fail,
                                                s = e.resolve,
                                                l = e.reject,
                                                u = e.domain;
                                            try {
                                                a
                                                    ? (r ||
                                                          (2 == t._h && M(t),
                                                          (t._h = 1)),
                                                      !0 === a
                                                          ? (n = i)
                                                          : (u && u.enter(),
                                                            (n = a(i)),
                                                            u && u.exit()),
                                                      n === e.promise
                                                          ? l(
                                                                B(
                                                                    "Promise-chain cycle"
                                                                )
                                                            )
                                                          : (o = R(n))
                                                          ? o.call(n, s, l)
                                                          : s(n))
                                                    : l(i);
                                            } catch (t) {
                                                l(t);
                                            }
                                        };
                                    n.length > o;

                                )
                                    a(n[o++]);
                                (t._c = []), (t._n = !1), e && !t._h && C(t);
                            });
                        }
                    },
                    C = function (t) {
                        y.call(l, function () {
                            var e,
                                n,
                                i,
                                r = t._v,
                                o = I(t);
                            if (
                                (o &&
                                    ((e = x(function () {
                                        T
                                            ? k.emit("unhandledRejection", r, t)
                                            : (n = l.onunhandledrejection)
                                            ? n({ promise: t, reason: r })
                                            : (i = l.console) &&
                                              i.error &&
                                              i.error(
                                                  "Unhandled promise rejection",
                                                  r
                                              );
                                    })),
                                    (t._h = T || I(t) ? 2 : 1)),
                                (t._a = void 0),
                                o && e.e)
                            )
                                throw e.v;
                        });
                    },
                    I = function (t) {
                        return 1 !== t._h && 0 === (t._a || t._c).length;
                    },
                    M = function (t) {
                        y.call(l, function () {
                            var e;
                            T
                                ? k.emit("rejectionHandled", t)
                                : (e = l.onrejectionhandled) &&
                                  e({ promise: t, reason: t._v });
                        });
                    },
                    L = function (t) {
                        var e = this;
                        e._d ||
                            ((e._d = !0),
                            ((e = e._w || e)._v = t),
                            (e._s = 2),
                            e._a || (e._a = e._c.slice()),
                            z(e, !0));
                    },
                    O = function (t) {
                        var e,
                            n = this;
                        if (!n._d) {
                            (n._d = !0), (n = n._w || n);
                            try {
                                if (n === t)
                                    throw B("Promise can't be resolved itself");
                                (e = R(t))
                                    ? v(function () {
                                          var i = { _w: n, _d: !1 };
                                          try {
                                              e.call(t, u(O, i, 1), u(L, i, 1));
                                          } catch (t) {
                                              L.call(i, t);
                                          }
                                      })
                                    : ((n._v = t), (n._s = 1), z(n, !1));
                            } catch (t) {
                                L.call({ _w: n, _d: !1 }, t);
                            }
                        }
                    };
                P ||
                    ((E = function (t) {
                        p(this, E, _, "_h"), d(t), i.call(this);
                        try {
                            t(u(O, this, 1), u(L, this, 1));
                        } catch (t) {
                            L.call(this, t);
                        }
                    }),
                    ((i = function (t) {
                        (this._c = []),
                            (this._a = void 0),
                            (this._s = 0),
                            (this._d = !1),
                            (this._v = void 0),
                            (this._h = 0),
                            (this._n = !1);
                    }).prototype = n(73)(E.prototype, {
                        then: function (t, e) {
                            var n = A(g(this, E));
                            return (
                                (n.ok = "function" != typeof t || t),
                                (n.fail = "function" == typeof e && e),
                                (n.domain = T ? k.domain : void 0),
                                this._c.push(n),
                                this._a && this._a.push(n),
                                this._s && z(this, !1),
                                n.promise
                            );
                        },
                        catch: function (t) {
                            return this.then(void 0, t);
                        },
                    })),
                    (o = function () {
                        var t = new i();
                        (this.promise = t),
                            (this.resolve = u(O, t, 1)),
                            (this.reject = u(L, t, 1));
                    }),
                    (w.f = A =
                        function (t) {
                            return t === E || t === a ? new o(t) : r(t);
                        })),
                    c(c.G + c.W + c.F * !P, { Promise: E }),
                    n(25)(E, _),
                    n(74)(_),
                    (a = n(2)[_]),
                    c(c.S + c.F * !P, _, {
                        reject: function (t) {
                            var e = A(this);
                            return (0, e.reject)(t), e.promise;
                        },
                    }),
                    c(c.S + c.F * (s || !P), _, {
                        resolve: function (t) {
                            return b(s && this === a ? E : this, t);
                        },
                    }),
                    c(
                        c.S +
                            c.F *
                                !(
                                    P &&
                                    n(44)(function (t) {
                                        E.all(t).catch(S);
                                    })
                                ),
                        _,
                        {
                            all: function (t) {
                                var e = this,
                                    n = A(e),
                                    i = n.resolve,
                                    r = n.reject,
                                    o = x(function () {
                                        var n = [],
                                            o = 0,
                                            a = 1;
                                        m(t, !1, function (t) {
                                            var s = o++,
                                                l = !1;
                                            n.push(void 0),
                                                a++,
                                                e.resolve(t).then(function (t) {
                                                    l ||
                                                        ((l = !0),
                                                        (n[s] = t),
                                                        --a || i(n));
                                                }, r);
                                        }),
                                            --a || i(n);
                                    });
                                return o.e && r(o.v), n.promise;
                            },
                            race: function (t) {
                                var e = this,
                                    n = A(e),
                                    i = n.reject,
                                    r = x(function () {
                                        m(t, !1, function (t) {
                                            e.resolve(t).then(n.resolve, i);
                                        });
                                    });
                                return r.e && i(r.v), n.promise;
                            },
                        }
                    );
            },
            function (t, e) {
                t.exports = function (t, e, n, i) {
                    if (!(t instanceof e) || (void 0 !== i && i in t))
                        throw TypeError(n + ": incorrect invocation!");
                    return t;
                };
            },
            function (t, e, n) {
                var i = n(10),
                    r = n(37),
                    o = n(38),
                    a = n(5),
                    s = n(23),
                    l = n(39),
                    u = {},
                    h = {};
                ((e = t.exports =
                    function (t, e, n, c, f) {
                        var d,
                            p,
                            m,
                            g,
                            y = f
                                ? function () {
                                      return t;
                                  }
                                : l(t),
                            v = i(n, c, e ? 2 : 1),
                            w = 0;
                        if ("function" != typeof y)
                            throw TypeError(t + " is not iterable!");
                        if (o(y)) {
                            for (d = s(t.length); d > w; w++)
                                if (
                                    (g = e
                                        ? v(a((p = t[w]))[0], p[1])
                                        : v(t[w])) === u ||
                                    g === h
                                )
                                    return g;
                        } else
                            for (m = y.call(t); !(p = m.next()).done; )
                                if ((g = r(m, v, p.value, e)) === u || g === h)
                                    return g;
                    }).BREAK = u),
                    (e.RETURN = h);
            },
            function (t, e) {
                t.exports = function (t, e, n) {
                    var i = void 0 === n;
                    switch (e.length) {
                        case 0:
                            return i ? t() : t.call(n);
                        case 1:
                            return i ? t(e[0]) : t.call(n, e[0]);
                        case 2:
                            return i ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
                        case 3:
                            return i
                                ? t(e[0], e[1], e[2])
                                : t.call(n, e[0], e[1], e[2]);
                        case 4:
                            return i
                                ? t(e[0], e[1], e[2], e[3])
                                : t.call(n, e[0], e[1], e[2], e[3]);
                    }
                    return t.apply(n, e);
                };
            },
            function (t, e, n) {
                var i = n(1),
                    r = n(41).set,
                    o = i.MutationObserver || i.WebKitMutationObserver,
                    a = i.process,
                    s = i.Promise,
                    l = "process" == n(15)(a);
                t.exports = function () {
                    var t,
                        e,
                        n,
                        u = function () {
                            var i, r;
                            for (l && (i = a.domain) && i.exit(); t; ) {
                                (r = t.fn), (t = t.next);
                                try {
                                    r();
                                } catch (i) {
                                    throw (t ? n() : (e = void 0), i);
                                }
                            }
                            (e = void 0), i && i.enter();
                        };
                    if (l)
                        n = function () {
                            a.nextTick(u);
                        };
                    else if (!o || (i.navigator && i.navigator.standalone))
                        if (s && s.resolve) {
                            var h = s.resolve();
                            n = function () {
                                h.then(u);
                            };
                        } else
                            n = function () {
                                r.call(i, u);
                            };
                    else {
                        var c = !0,
                            f = document.createTextNode("");
                        new o(u).observe(f, { characterData: !0 }),
                            (n = function () {
                                f.data = c = !c;
                            });
                    }
                    return function (i) {
                        var r = { fn: i, next: void 0 };
                        e && (e.next = r), t || ((t = r), n()), (e = r);
                    };
                };
            },
            function (t, e, n) {
                var i = n(6);
                t.exports = function (t, e, n) {
                    for (var r in e) n && t[r] ? (t[r] = e[r]) : i(t, r, e[r]);
                    return t;
                };
            },
            function (t, e, n) {
                "use strict";
                var i = n(1),
                    r = n(2),
                    o = n(7),
                    a = n(8),
                    s = n(3)("species");
                t.exports = function (t) {
                    var e = "function" == typeof r[t] ? r[t] : i[t];
                    a &&
                        e &&
                        !e[s] &&
                        o.f(e, s, {
                            configurable: !0,
                            get: function () {
                                return this;
                            },
                        });
                };
            },
            function (t, e, n) {
                "use strict";
                var i = n(4),
                    r = n(2),
                    o = n(1),
                    a = n(40),
                    s = n(43);
                i(i.P + i.R, "Promise", {
                    finally: function (t) {
                        var e = a(this, r.Promise || o.Promise),
                            n = "function" == typeof t;
                        return this.then(
                            n
                                ? function (n) {
                                      return s(e, t()).then(function () {
                                          return n;
                                      });
                                  }
                                : t,
                            n
                                ? function (n) {
                                      return s(e, t()).then(function () {
                                          throw n;
                                      });
                                  }
                                : t
                        );
                    },
                });
            },
            function (t, e, n) {
                "use strict";
                var i = n(4),
                    r = n(27),
                    o = n(42);
                i(i.S, "Promise", {
                    try: function (t) {
                        var e = r.f(this),
                            n = o(t);
                        return (n.e ? e.reject : e.resolve)(n.v), e.promise;
                    },
                });
            },
            function (t, e, n) {
                t.exports = n(78);
            },
            function (t, e, n) {
                var i =
                        (function () {
                            return this;
                        })() || Function("return this")(),
                    r =
                        i.regeneratorRuntime &&
                        Object.getOwnPropertyNames(i).indexOf(
                            "regeneratorRuntime"
                        ) >= 0,
                    o = r && i.regeneratorRuntime;
                if (((i.regeneratorRuntime = void 0), (t.exports = n(79)), r))
                    i.regeneratorRuntime = o;
                else
                    try {
                        delete i.regeneratorRuntime;
                    } catch (t) {
                        i.regeneratorRuntime = void 0;
                    }
            },
            function (t, e) {
                !(function (e) {
                    "use strict";
                    var n,
                        i = Object.prototype,
                        r = i.hasOwnProperty,
                        o = "function" == typeof Symbol ? Symbol : {},
                        a = o.iterator || "@@iterator",
                        s = o.asyncIterator || "@@asyncIterator",
                        l = o.toStringTag || "@@toStringTag",
                        u = "object" == typeof t,
                        h = e.regeneratorRuntime;
                    if (h) u && (t.exports = h);
                    else {
                        (h = e.regeneratorRuntime = u ? t.exports : {}).wrap =
                            x;
                        var c = "suspendedStart",
                            f = "suspendedYield",
                            d = "executing",
                            p = "completed",
                            m = {},
                            g = {};
                        g[a] = function () {
                            return this;
                        };
                        var y = Object.getPrototypeOf,
                            v = y && y(y(z([])));
                        v && v !== i && r.call(v, a) && (g = v);
                        var w = (k.prototype = _.prototype = Object.create(g));
                        (B.prototype = w.constructor = k),
                            (k.constructor = B),
                            (k[l] = B.displayName = "GeneratorFunction"),
                            (h.isGeneratorFunction = function (t) {
                                var e = "function" == typeof t && t.constructor;
                                return (
                                    !!e &&
                                    (e === B ||
                                        "GeneratorFunction" ===
                                            (e.displayName || e.name))
                                );
                            }),
                            (h.mark = function (t) {
                                return (
                                    Object.setPrototypeOf
                                        ? Object.setPrototypeOf(t, k)
                                        : ((t.__proto__ = k),
                                          l in t ||
                                              (t[l] = "GeneratorFunction")),
                                    (t.prototype = Object.create(w)),
                                    t
                                );
                            }),
                            (h.awrap = function (t) {
                                return { __await: t };
                            }),
                            E(T.prototype),
                            (T.prototype[s] = function () {
                                return this;
                            }),
                            (h.AsyncIterator = T),
                            (h.async = function (t, e, n, i) {
                                var r = new T(x(t, e, n, i));
                                return h.isGeneratorFunction(e)
                                    ? r
                                    : r.next().then(function (t) {
                                          return t.done ? t.value : r.next();
                                      });
                            }),
                            E(w),
                            (w[l] = "Generator"),
                            (w[a] = function () {
                                return this;
                            }),
                            (w.toString = function () {
                                return "[object Generator]";
                            }),
                            (h.keys = function (t) {
                                var e = [];
                                for (var n in t) e.push(n);
                                return (
                                    e.reverse(),
                                    function n() {
                                        for (; e.length; ) {
                                            var i = e.pop();
                                            if (i in t)
                                                return (
                                                    (n.value = i),
                                                    (n.done = !1),
                                                    n
                                                );
                                        }
                                        return (n.done = !0), n;
                                    }
                                );
                            }),
                            (h.values = z),
                            (R.prototype = {
                                constructor: R,
                                reset: function (t) {
                                    if (
                                        ((this.prev = 0),
                                        (this.next = 0),
                                        (this.sent = this._sent = n),
                                        (this.done = !1),
                                        (this.delegate = null),
                                        (this.method = "next"),
                                        (this.arg = n),
                                        this.tryEntries.forEach(P),
                                        !t)
                                    )
                                        for (var e in this)
                                            "t" === e.charAt(0) &&
                                                r.call(this, e) &&
                                                !isNaN(+e.slice(1)) &&
                                                (this[e] = n);
                                },
                                stop: function () {
                                    this.done = !0;
                                    var t = this.tryEntries[0].completion;
                                    if ("throw" === t.type) throw t.arg;
                                    return this.rval;
                                },
                                dispatchException: function (t) {
                                    if (this.done) throw t;
                                    var e = this;
                                    function i(i, r) {
                                        return (
                                            (s.type = "throw"),
                                            (s.arg = t),
                                            (e.next = i),
                                            r &&
                                                ((e.method = "next"),
                                                (e.arg = n)),
                                            !!r
                                        );
                                    }
                                    for (
                                        var o = this.tryEntries.length - 1;
                                        o >= 0;
                                        --o
                                    ) {
                                        var a = this.tryEntries[o],
                                            s = a.completion;
                                        if ("root" === a.tryLoc)
                                            return i("end");
                                        if (a.tryLoc <= this.prev) {
                                            var l = r.call(a, "catchLoc"),
                                                u = r.call(a, "finallyLoc");
                                            if (l && u) {
                                                if (this.prev < a.catchLoc)
                                                    return i(a.catchLoc, !0);
                                                if (this.prev < a.finallyLoc)
                                                    return i(a.finallyLoc);
                                            } else if (l) {
                                                if (this.prev < a.catchLoc)
                                                    return i(a.catchLoc, !0);
                                            } else {
                                                if (!u)
                                                    throw new Error(
                                                        "try statement without catch or finally"
                                                    );
                                                if (this.prev < a.finallyLoc)
                                                    return i(a.finallyLoc);
                                            }
                                        }
                                    }
                                },
                                abrupt: function (t, e) {
                                    for (
                                        var n = this.tryEntries.length - 1;
                                        n >= 0;
                                        --n
                                    ) {
                                        var i = this.tryEntries[n];
                                        if (
                                            i.tryLoc <= this.prev &&
                                            r.call(i, "finallyLoc") &&
                                            this.prev < i.finallyLoc
                                        ) {
                                            var o = i;
                                            break;
                                        }
                                    }
                                    o &&
                                        ("break" === t || "continue" === t) &&
                                        o.tryLoc <= e &&
                                        e <= o.finallyLoc &&
                                        (o = null);
                                    var a = o ? o.completion : {};
                                    return (
                                        (a.type = t),
                                        (a.arg = e),
                                        o
                                            ? ((this.method = "next"),
                                              (this.next = o.finallyLoc),
                                              m)
                                            : this.complete(a)
                                    );
                                },
                                complete: function (t, e) {
                                    if ("throw" === t.type) throw t.arg;
                                    return (
                                        "break" === t.type ||
                                        "continue" === t.type
                                            ? (this.next = t.arg)
                                            : "return" === t.type
                                            ? ((this.rval = this.arg = t.arg),
                                              (this.method = "return"),
                                              (this.next = "end"))
                                            : "normal" === t.type &&
                                              e &&
                                              (this.next = e),
                                        m
                                    );
                                },
                                finish: function (t) {
                                    for (
                                        var e = this.tryEntries.length - 1;
                                        e >= 0;
                                        --e
                                    ) {
                                        var n = this.tryEntries[e];
                                        if (n.finallyLoc === t)
                                            return (
                                                this.complete(
                                                    n.completion,
                                                    n.afterLoc
                                                ),
                                                P(n),
                                                m
                                            );
                                    }
                                },
                                catch: function (t) {
                                    for (
                                        var e = this.tryEntries.length - 1;
                                        e >= 0;
                                        --e
                                    ) {
                                        var n = this.tryEntries[e];
                                        if (n.tryLoc === t) {
                                            var i = n.completion;
                                            if ("throw" === i.type) {
                                                var r = i.arg;
                                                P(n);
                                            }
                                            return r;
                                        }
                                    }
                                    throw new Error("illegal catch attempt");
                                },
                                delegateYield: function (t, e, i) {
                                    return (
                                        (this.delegate = {
                                            iterator: z(t),
                                            resultName: e,
                                            nextLoc: i,
                                        }),
                                        "next" === this.method &&
                                            (this.arg = n),
                                        m
                                    );
                                },
                            });
                    }
                    function x(t, e, n, i) {
                        var r,
                            o,
                            a,
                            s,
                            l = e && e.prototype instanceof _ ? e : _,
                            u = Object.create(l.prototype),
                            h = new R(i || []);
                        return (
                            (u._invoke =
                                ((r = t),
                                (o = n),
                                (a = h),
                                (s = c),
                                function (t, e) {
                                    if (s === d)
                                        throw new Error(
                                            "Generator is already running"
                                        );
                                    if (s === p) {
                                        if ("throw" === t) throw e;
                                        return C();
                                    }
                                    for (a.method = t, a.arg = e; ; ) {
                                        var n = a.delegate;
                                        if (n) {
                                            var i = S(n, a);
                                            if (i) {
                                                if (i === m) continue;
                                                return i;
                                            }
                                        }
                                        if ("next" === a.method)
                                            a.sent = a._sent = a.arg;
                                        else if ("throw" === a.method) {
                                            if (s === c) throw ((s = p), a.arg);
                                            a.dispatchException(a.arg);
                                        } else
                                            "return" === a.method &&
                                                a.abrupt("return", a.arg);
                                        s = d;
                                        var l = b(r, o, a);
                                        if ("normal" === l.type) {
                                            if (
                                                ((s = a.done ? p : f),
                                                l.arg === m)
                                            )
                                                continue;
                                            return {
                                                value: l.arg,
                                                done: a.done,
                                            };
                                        }
                                        "throw" === l.type &&
                                            ((s = p),
                                            (a.method = "throw"),
                                            (a.arg = l.arg));
                                    }
                                })),
                            u
                        );
                    }
                    function b(t, e, n) {
                        try {
                            return { type: "normal", arg: t.call(e, n) };
                        } catch (t) {
                            return { type: "throw", arg: t };
                        }
                    }
                    function _() {}
                    function B() {}
                    function k() {}
                    function E(t) {
                        ["next", "throw", "return"].forEach(function (e) {
                            t[e] = function (t) {
                                return this._invoke(e, t);
                            };
                        });
                    }
                    function T(t) {
                        var e;
                        this._invoke = function (n, i) {
                            function o() {
                                return new Promise(function (e, o) {
                                    !(function e(n, i, o, a) {
                                        var s = b(t[n], t, i);
                                        if ("throw" !== s.type) {
                                            var l = s.arg,
                                                u = l.value;
                                            return u &&
                                                "object" == typeof u &&
                                                r.call(u, "__await")
                                                ? Promise.resolve(
                                                      u.__await
                                                  ).then(
                                                      function (t) {
                                                          e("next", t, o, a);
                                                      },
                                                      function (t) {
                                                          e("throw", t, o, a);
                                                      }
                                                  )
                                                : Promise.resolve(u).then(
                                                      function (t) {
                                                          (l.value = t), o(l);
                                                      },
                                                      a
                                                  );
                                        }
                                        a(s.arg);
                                    })(n, i, e, o);
                                });
                            }
                            return (e = e ? e.then(o, o) : o());
                        };
                    }
                    function S(t, e) {
                        var i = t.iterator[e.method];
                        if (i === n) {
                            if (((e.delegate = null), "throw" === e.method)) {
                                if (
                                    t.iterator.return &&
                                    ((e.method = "return"),
                                    (e.arg = n),
                                    S(t, e),
                                    "throw" === e.method)
                                )
                                    return m;
                                (e.method = "throw"),
                                    (e.arg = new TypeError(
                                        "The iterator does not provide a 'throw' method"
                                    ));
                            }
                            return m;
                        }
                        var r = b(i, t.iterator, e.arg);
                        if ("throw" === r.type)
                            return (
                                (e.method = "throw"),
                                (e.arg = r.arg),
                                (e.delegate = null),
                                m
                            );
                        var o = r.arg;
                        return o
                            ? o.done
                                ? ((e[t.resultName] = o.value),
                                  (e.next = t.nextLoc),
                                  "return" !== e.method &&
                                      ((e.method = "next"), (e.arg = n)),
                                  (e.delegate = null),
                                  m)
                                : o
                            : ((e.method = "throw"),
                              (e.arg = new TypeError(
                                  "iterator result is not an object"
                              )),
                              (e.delegate = null),
                              m);
                    }
                    function A(t) {
                        var e = { tryLoc: t[0] };
                        1 in t && (e.catchLoc = t[1]),
                            2 in t &&
                                ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                            this.tryEntries.push(e);
                    }
                    function P(t) {
                        var e = t.completion || {};
                        (e.type = "normal"), delete e.arg, (t.completion = e);
                    }
                    function R(t) {
                        (this.tryEntries = [{ tryLoc: "root" }]),
                            t.forEach(A, this),
                            this.reset(!0);
                    }
                    function z(t) {
                        if (t) {
                            var e = t[a];
                            if (e) return e.call(t);
                            if ("function" == typeof t.next) return t;
                            if (!isNaN(t.length)) {
                                var i = -1,
                                    o = function e() {
                                        for (; ++i < t.length; )
                                            if (r.call(t, i))
                                                return (
                                                    (e.value = t[i]),
                                                    (e.done = !1),
                                                    e
                                                );
                                        return (e.value = n), (e.done = !0), e;
                                    };
                                return (o.next = o);
                            }
                        }
                        return { next: C };
                    }
                    function C() {
                        return { value: n, done: !0 };
                    }
                })(
                    (function () {
                        return this;
                    })() || Function("return this")()
                );
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = m(n(81)),
                    r = m(n(0)),
                    o = m(n(45)),
                    a = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                (i.enumerable = i.enumerable || !1),
                                    (i.configurable = !0),
                                    "value" in i && (i.writable = !0),
                                    (0, r.default)(t, i.key, i);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })(),
                    s = m(n(88)),
                    l = m(n(93)),
                    u = m(n(101)),
                    h = m(n(102)),
                    c = m(n(103)),
                    f = m(n(104)),
                    d = m(n(105)),
                    p = m(n(106));
                function m(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                function g(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, n = Array(t.length); e < t.length; e++)
                            n[e] = t[e];
                        return n;
                    }
                    return (0, i.default)(t);
                }
                var y = (function () {
                    function t() {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                            (this.shareButtons = []),
                            (this.followButton = []),
                            (this.followButtonOnly = []),
                            (this.chatwidget = null),
                            (this.callButton = null),
                            (this.mapShareButton = {}),
                            (this.zShareTimer = null),
                            (this.commentIFrame = null),
                            (this.socialPlugins = {}),
                            (this.receiveMessage =
                                this.receiveMessage.bind(this)),
                            (this.reloadSocial = this.reloadSocial.bind(this)),
                            window.addEventListener(
                                "message",
                                this.receiveMessage,
                                !0
                            ),
                            window.addEventListener(
                                "focus",
                                this.reloadSocial,
                                !1
                            ),
                            "remove" in Element.prototype ||
                                (Element.prototype.remove = function () {
                                    this.parentNode &&
                                        this.parentNode.removeChild(this);
                                });
                    }
                    return (
                        a(t, [
                            {
                                key: "reloadSocial",
                                value: function () {
                                    this.shareButtons.map(function (t) {
                                        t.reload();
                                    });
                                },
                            },
                            {
                                key: "init",
                                value: function () {
                                    var t = this;
                                    if (
                                        (console.log(
                                            "Zalo Social Plugin is loaded successfully"
                                        ),
                                        (this.socialPlugins =
                                            this.findAllSocialPluginDiv()),
                                        this.socialPlugins.share &&
                                            (console.log(
                                                "socialPluginsShare: ",
                                                this.socialPlugins.share
                                            ),
                                            this.socialPlugins.share.map(
                                                function (e) {
                                                    var n = d.default.create(),
                                                        i = new l.default(
                                                            e,
                                                            n,
                                                            t
                                                        );
                                                    i.render(),
                                                        (t.mapShareButton[n] =
                                                            i),
                                                        t.shareButtons.push(i);
                                                }
                                            )),
                                        this.socialPlugins.follow &&
                                            this.socialPlugins.follow.map(
                                                function (e) {
                                                    var n = d.default.create(),
                                                        i = new u.default(e, n);
                                                    i.render(),
                                                        t.followButton.push(i);
                                                }
                                            ),
                                        this.socialPlugins.followonly &&
                                            this.socialPlugins.followonly.map(
                                                function (e) {
                                                    var n = d.default.create(),
                                                        i = new h.default(e, n);
                                                    i.render(),
                                                        t.followButtonOnly.push(
                                                            i
                                                        );
                                                }
                                            ),
                                        this.socialPlugins.comment)
                                    ) {
                                        var e = new c.default(
                                            this.socialPlugins.comment
                                        );
                                        e.render(), (this.commentIFrame = e);
                                    }
                                    if (this.socialPlugins.chatwidget) {
                                        var n = d.default.create(),
                                            i = new s.default(
                                                this.socialPlugins.chatwidget,
                                                n
                                            );
                                        i.render(), (this.chatwidget = i);
                                    }
                                    if (this.socialPlugins.call) {
                                        var r = d.default.create(),
                                            o = new f.default(
                                                this.socialPlugins.call,
                                                r
                                            );
                                        o.render(), (this.callButton = o);
                                    }
                                },
                            },
                            {
                                key: "receiveMessage",
                                value: function (t) {
                                    if (t.data) {
                                        if (
                                            t.data.url &&
                                            p.default.isMaliciousScheme(
                                                t.data.url
                                            )
                                        )
                                            return;
                                        switch (t.data.cmd) {
                                            case "zsdk_newtab":
                                                this.openInNewTab(t.data.url);
                                                break;
                                            case "zsdk_popup":
                                                this.openInPopup(
                                                    t.data.url,
                                                    t.data.title,
                                                    t.data.width,
                                                    t.data.height
                                                );
                                                break;
                                            case "zsdk_call_qr_widget":
                                                this.onOpenCallQrWidget(
                                                    t.data.url,
                                                    t.data.text
                                                );
                                                break;
                                            case "zsdk_call_qr":
                                                this.onOpenCallQr(
                                                    t.data.url,
                                                    t.data.text
                                                );
                                                break;
                                            case "zsdk_redirect":
                                                this.redirect(t.data.url);
                                                break;
                                            case "zsdk_button_click":
                                                this.mapShareButton[
                                                    t.data.id
                                                ] &&
                                                    this.mapShareButton[
                                                        t.data.id
                                                    ].onButtonClick();
                                                break;
                                            case "zsdk_update_share_data":
                                                this.mapShareButton[
                                                    t.data.id
                                                ] &&
                                                    this.mapShareButton[
                                                        t.data.id
                                                    ].setData(t.data.data);
                                                break;
                                            case "zsdk_resize_parent":
                                                this.resizeParent(
                                                    t.data.height
                                                );
                                                break;
                                            case "zsdk_get_top_body_parent":
                                                this.getTopParentBody();
                                                break;
                                            case "zsdk_excute_recaptcha":
                                                this.executeRecaptcha(t.data);
                                        }
                                    }
                                },
                            },
                            {
                                key: "reload",
                                value: function () {
                                    this.shareButtons.map(function (t) {
                                        t.destroy();
                                    }),
                                        (this.shareButtons = []),
                                        (this.followButton = []),
                                        (this.followButtonOnly = []),
                                        null != this.chatwidget &&
                                            this.chatwidget.destroy(),
                                        (this.chatwidget = null),
                                        (this.callButton = null),
                                        null != this.commentIFrame &&
                                            this.commentIFrame.destroy(),
                                        (this.commentIFrame = null),
                                        this.init();
                                },
                            },
                            {
                                key: "retry",
                                value: function () {
                                    var t = {
                                        share: [],
                                        follow: [],
                                        followonly: [],
                                    };
                                    (t.share = [].concat(
                                        g(
                                            document.getElementsByClassName(
                                                "zalo-share-button"
                                            )
                                        )
                                    )),
                                        (t.follow = [].concat(
                                            g(
                                                document.getElementsByClassName(
                                                    "zalo-follow-button"
                                                )
                                            )
                                        )),
                                        (t.followonly = [].concat(
                                            g(
                                                document.getElementsByClassName(
                                                    "zalo-follow-only-button"
                                                )
                                            )
                                        )),
                                        (t.comment =
                                            document.getElementsByClassName(
                                                "zalo-comment-plugin"
                                            )[0]),
                                        (t.chatwidget =
                                            document.getElementsByClassName(
                                                "zalo-chat-widget"
                                            )[0]),
                                        (t.call =
                                            document.getElementsByClassName(
                                                "zalo-call-button"
                                            )[0]),
                                        (0, o.default)(t) !=
                                            (0, o.default)(
                                                this.socialPlugins
                                            ) && this.reload();
                                },
                            },
                            {
                                key: "findAllSocialPluginDiv",
                                value: function () {
                                    var t = {
                                        share: [],
                                        follow: [],
                                        followonly: [],
                                    };
                                    if (
                                        ((t.share = [].concat(
                                            g(
                                                document.getElementsByClassName(
                                                    "zalo-share-button"
                                                )
                                            )
                                        )),
                                        (t.follow = [].concat(
                                            g(
                                                document.getElementsByClassName(
                                                    "zalo-follow-button"
                                                )
                                            )
                                        )),
                                        (t.followonly = [].concat(
                                            g(
                                                document.getElementsByClassName(
                                                    "zalo-follow-only-button"
                                                )
                                            )
                                        )),
                                        (t.comment =
                                            document.getElementsByClassName(
                                                "zalo-comment-plugin"
                                            )[0]),
                                        (t.chatwidget =
                                            document.getElementsByClassName(
                                                "zalo-chat-widget"
                                            )[0]),
                                        (t.call =
                                            document.getElementsByClassName(
                                                "zalo-call-button"
                                            )[0]),
                                        t.share)
                                    )
                                        return t;
                                },
                            },
                            {
                                key: "redirect",
                                value: function (t) {
                                    window.location.href = t;
                                },
                            },
                            {
                                key: "openInNewTab",
                                value: function (t) {
                                    var e = this,
                                        n = window.open(t, "_blank");
                                    n.focus(),
                                        null != this.zShareTimer &&
                                            clearInterval(this.zShareTimer),
                                        (this.zShareTimer = setInterval(
                                            function () {
                                                n.closed &&
                                                    (clearInterval(
                                                        e.zShareTimer
                                                    ),
                                                    (e.zShareTimer = null),
                                                    e.shareButtons.map(
                                                        function (t) {
                                                            t.reload();
                                                        }
                                                    ));
                                            },
                                            1e3
                                        ));
                                },
                            },
                            {
                                key: "openInPopup",
                                value: function (t, e, n, i) {
                                    var r = this,
                                        o = this.popupCenter(t, e, n, i);
                                    null != this.zShareTimer &&
                                        clearInterval(this.zShareTimer),
                                        (this.zShareTimer = setInterval(
                                            function () {
                                                o &&
                                                    o.closed &&
                                                    (clearInterval(
                                                        r.zShareTimer
                                                    ),
                                                    (r.zShareTimer = null),
                                                    r.shareButtons.map(
                                                        function (t) {
                                                            t.reload();
                                                        }
                                                    ),
                                                    r.followButton.map(
                                                        function (t) {
                                                            t.reload();
                                                        }
                                                    ),
                                                    r.followButtonOnly.map(
                                                        function (t) {
                                                            t.reload();
                                                        }
                                                    ),
                                                    r.commentIFrame &&
                                                        r.commentIFrame.reload());
                                            },
                                            1e3
                                        ));
                                },
                            },
                            {
                                key: "executeRecaptcha",
                                value: function (t) {
                                    switch (t.typeIframe) {
                                        case "chat_oa_widget":
                                            break;
                                        case "comment_iframe":
                                            GLOBAL_IFRAME =
                                                this.commentIFrame.getIframe;
                                    }
                                    grecaptcha.execute(GLOBAL_ID_RECAPTCHA);
                                },
                            },
                            {
                                key: "popupCenter",
                                value: function (t, e, n, i) {
                                    var r =
                                            null != window.screenLeft
                                                ? window.screenLeft
                                                : screen.left,
                                        o =
                                            null != window.screenTop
                                                ? window.screenTop
                                                : screen.top,
                                        a =
                                            (window.innerWidth
                                                ? window.innerWidth
                                                : document.documentElement
                                                      .clientWidth
                                                ? document.documentElement
                                                      .clientWidth
                                                : screen.width) /
                                                2 -
                                            n / 2 +
                                            r,
                                        s =
                                            (window.innerHeight
                                                ? window.innerHeight
                                                : document.documentElement
                                                      .clientHeight
                                                ? document.documentElement
                                                      .clientHeight
                                                : screen.height) /
                                                2 -
                                            i / 2 +
                                            o;
                                    return window.open(
                                        t,
                                        e,
                                        "directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,width=" +
                                            n +
                                            ", height=" +
                                            i +
                                            ", top=" +
                                            s +
                                            ", left=" +
                                            a
                                    );
                                },
                            },
                            {
                                key: "resizeParent",
                                value: function (t) {
                                    this.commentIFrame.resizeParent(t);
                                },
                            },
                            {
                                key: "getTopParentBody",
                                value: function () {
                                    this.commentIFrame.getTopParentBody();
                                },
                            },
                            {
                                key: "openChatWidget",
                                value: function () {
                                    this.chatwidget.openChatWidget();
                                },
                            },
                            {
                                key: "closeChatWidget",
                                value: function () {
                                    this.chatwidget.closeChatWidget();
                                },
                            },
                            {
                                key: "onOpenCallQrWidget",
                                value: function (t, e) {
                                    this.chatwidget.showQRModal(t, e);
                                },
                            },
                            {
                                key: "onOpenCallQr",
                                value: function (t, e) {
                                    this.callButton.showQRModal(t, e);
                                },
                            },
                        ]),
                        t
                    );
                })();
                e.default = y;
            },
            function (t, e, n) {
                t.exports = { default: n(82), __esModule: !0 };
            },
            function (t, e, n) {
                n(28), n(83), (t.exports = n(2).Array.from);
            },
            function (t, e, n) {
                "use strict";
                var i = n(10),
                    r = n(4),
                    o = n(26),
                    a = n(37),
                    s = n(38),
                    l = n(23),
                    u = n(84),
                    h = n(39);
                r(
                    r.S +
                        r.F *
                            !n(44)(function (t) {
                                Array.from(t);
                            }),
                    "Array",
                    {
                        from: function (t) {
                            var e,
                                n,
                                r,
                                c,
                                f = o(t),
                                d = "function" == typeof this ? this : Array,
                                p = arguments.length,
                                m = p > 1 ? arguments[1] : void 0,
                                g = void 0 !== m,
                                y = 0,
                                v = h(f);
                            if (
                                (g &&
                                    (m = i(
                                        m,
                                        p > 2 ? arguments[2] : void 0,
                                        2
                                    )),
                                null == v || (d == Array && s(v)))
                            )
                                for (n = new d((e = l(f.length))); e > y; y++)
                                    u(n, y, g ? m(f[y], y) : f[y]);
                            else
                                for (
                                    c = v.call(f), n = new d();
                                    !(r = c.next()).done;
                                    y++
                                )
                                    u(
                                        n,
                                        y,
                                        g ? a(c, m, [r.value, y], !0) : r.value
                                    );
                            return (n.length = y), n;
                        },
                    }
                );
            },
            function (t, e, n) {
                "use strict";
                var i = n(7),
                    r = n(21);
                t.exports = function (t, e, n) {
                    e in t ? i.f(t, e, r(0, n)) : (t[e] = n);
                };
            },
            function (t, e, n) {
                n(86);
                var i = n(2).Object;
                t.exports = function (t, e, n) {
                    return i.defineProperty(t, e, n);
                };
            },
            function (t, e, n) {
                var i = n(4);
                i(i.S + i.F * !n(8), "Object", { defineProperty: n(7).f });
            },
            function (t, e, n) {
                var i = n(2),
                    r = i.JSON || (i.JSON = { stringify: JSON.stringify });
                t.exports = function (t) {
                    return r.stringify.apply(r, arguments);
                };
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = s(n(0)),
                    r = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    (0, i.default)(t, r.key, r);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })(),
                    o = s(n(9)),
                    a = s(n(16));
                function s(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var l = (function () {
                        function t(e, n) {
                            !(function (t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t),
                                u.call(this),
                                (this.id = n),
                                (this.data = {}),
                                (this.element = e),
                                (this.data = this.getDataFromElement(e)),
                                (this.chatBoxLeft = null),
                                (this.chatBoxTop = null),
                                (this.chatBoxHeight = null),
                                (this.chatBoxWidth = null),
                                (this.selected = null),
                                (this.x_pos = 0),
                                (this.y_pos = 0),
                                (this.x_elem = 0),
                                (this.y_elem = 0),
                                (this.type = 0),
                                (this.chatBoxHeightCurrent = 0),
                                (this.chatBoxWidthCurrent = 0),
                                (this.x_elem_relative = 0),
                                (this.y_elem_relative = 0),
                                (this.hitToTop = !1),
                                (this.hitToLeft = !1),
                                (this.hitToRight = !1),
                                (this.hitToBottom = !1),
                                (this.initWindowWidth = window.innerWidth),
                                (this.initWindowHeight = window.innerHeight),
                                (this.checkResizeWindow = !1),
                                (this.isChatBoxOpened = !1),
                                (this.dragHolderDragging = !1),
                                (this.isHandleClosedBoxChatToolTip = !1),
                                (this.closedBox_top = null),
                                (this.closedBox_bottom = null),
                                (this.closedBox_left = null),
                                (this.closedBox_right = null),
                                (this.initClosedBoxWidth = null),
                                (this.data.android =
                                    a.default.isAndroid() &&
                                    a.default.isMobile()),
                                (this.data.ios =
                                    a.default.isIOS() && a.default.isMobile()),
                                (this.receiveMessage =
                                    this.receiveMessage.bind(this)),
                                window.addEventListener(
                                    "message",
                                    this.receiveMessage
                                ),
                                window.addEventListener(
                                    "resize",
                                    this.handleResizeWindow,
                                    !0
                                ),
                                (document.onmousemove = this._move_chat_box),
                                (document.onmouseup = this._destroy);
                        }
                        return (
                            r(t, [
                                {
                                    key: "getDataFromElement",
                                    value: function (t) {
                                        var e = {};
                                        (e.position =
                                            t.getAttribute("data-position")),
                                            (e.oaid =
                                                t.getAttribute("data-oaid")),
                                            (e.welcomemessage = t.getAttribute(
                                                "data-welcome-message"
                                            )),
                                            (e.autopopup =
                                                t.getAttribute(
                                                    "data-autopopup"
                                                ));
                                        var n =
                                                document.getElementsByClassName(
                                                    "zalo-chat-widget"
                                                )[0],
                                            i = window
                                                .getComputedStyle(n, null)
                                                .getPropertyValue("left");
                                        return (
                                            (e.leftside =
                                                t.getAttribute(
                                                    "data-left-side"
                                                ) || "auto" == i
                                                    ? "false"
                                                    : "true"),
                                            (e.width =
                                                t.getAttribute("data-width")),
                                            (e.height =
                                                t.getAttribute("data-height")),
                                            (e.style =
                                                t.getAttribute("data-style")),
                                            (e.width && "0" !== e.width) ||
                                                (e.width = 440),
                                            (e.height && "0" !== e.height) ||
                                                (e.height = 813),
                                            e.style
                                                ? 1 != e.style &&
                                                  2 != e.style &&
                                                  ((e.style = 2),
                                                  console.warn(
                                                      "[ZaloSocialPlugin] [ChatWidgetPlugin] | Warning: Need to set 'data-style' attribute equals to 1 or 2"
                                                  ),
                                                  console.warn(
                                                      "[ZaloSocialPlugin] [ChatWidgetPlugin] | Warning: 1 for RECTANGLE style - 2 for CIRCLE style"
                                                  ))
                                                : (e.style = 2),
                                            (e.id = this.id),
                                            (e.domain = document.domain),
                                            e
                                        );
                                    },
                                },
                                {
                                    key: "validate",
                                    value: function () {
                                        return (
                                            !!this.data.oaid ||
                                            (console.warn(
                                                "[Zalo Social Plugin]",
                                                "The chat widget button have no data-oaid attribute"
                                            ),
                                            !1)
                                        );
                                    },
                                },
                                {
                                    key: "updateDragHolderElementStyle",
                                    value: function () {
                                        if (this.isChatBoxOpened)
                                            (this.dragHolder.style.left = 0),
                                                (this.dragHolder.style.right =
                                                    ""),
                                                (this.dragHolder.style.width =
                                                    "80%");
                                        else {
                                            if (this.isRectangleVersion())
                                                return void (this.dragHolder.style.width =
                                                    "0px");
                                            window
                                                .getComputedStyle(
                                                    this.element,
                                                    null
                                                )
                                                .getPropertyValue("left")
                                                .replace("px", "") < 10
                                                ? ((this.dragHolder.style.left = 0),
                                                  (this.dragHolder.style.right =
                                                      ""))
                                                : ((this.dragHolder.style.left =
                                                      ""),
                                                  (this.dragHolder.style.right = 0)),
                                                (this.dragHolder.style.width =
                                                    this
                                                        .isHandleClosedBoxChatToolTip
                                                        ? this
                                                              .initClosedBoxWidth +
                                                          "px"
                                                        : "70px");
                                        }
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        this.validate() &&
                                            ((this.iframe =
                                                document.createElement(
                                                    "iframe"
                                                )),
                                            (this.iframe.frameBorder = 0),
                                            (this.iframe.allowFullscreen =
                                                "true"),
                                            (this.iframe.scrolling = "no"),
                                            (this.iframe.width = 260),
                                            (this.iframe.height = 46),
                                            (this.iframe.style.maxHeight =
                                                "90vh"),
                                            (this.iframe.style.position =
                                                "absolute"),
                                            (this.iframe.style.bottom = "0px"),
                                            "true" === this.data.leftside
                                                ? (this.iframe.style.left =
                                                      "0px")
                                                : (this.iframe.style.right =
                                                      "0px"),
                                            (this.element.style.zIndex =
                                                "2147483644"),
                                            (this.element.style.border =
                                                "none"),
                                            (this.element.style.visibility =
                                                "visible"),
                                            (this.element.style.bottom = "0px"),
                                            (this.element.style.left =
                                                this.element.style.left || ""),
                                            (this.element.style.right = "0px"),
                                            (this.element.style.position =
                                                "fixed"),
                                            (this.element.style.width =
                                                "300px"),
                                            (this.iframe.src =
                                                "https://page.widget.zalo.me/" +
                                                o.default.jsonToQueryString(
                                                    this.data
                                                )),
                                            this.element.appendChild(
                                                this.iframe
                                            ),
                                            (this.dragHolder =
                                                document.createElement("div")));
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        this.iframe.remove(),
                                            this.dragHolder.remove(),
                                            this.element.removeEventListener(
                                                "message",
                                                this.receiveMessage
                                            );
                                    },
                                },
                                {
                                    key: "reload",
                                    value: function () {
                                        this.iframe &&
                                            this.iframe.contentWindow &&
                                            this.iframe.contentWindow.postMessage(
                                                "zshare_reload",
                                                "https://sp.zalo.me"
                                            );
                                    },
                                },
                                {
                                    key: "openChatWidget",
                                    value: function () {
                                        this.iframe &&
                                            this.iframe.contentWindow &&
                                            this.iframe.contentWindow.postMessage(
                                                "open-chat-widget",
                                                "*"
                                            );
                                    },
                                },
                                {
                                    key: "closeChatWidget",
                                    value: function () {
                                        this.iframe &&
                                            this.iframe.contentWindow &&
                                            this.iframe.contentWindow.postMessage(
                                                "close-chat-widget",
                                                "*"
                                            );
                                    },
                                },
                                {
                                    key: "getTheElementStyleLeftPosition",
                                    value: function (t) {
                                        this.iframe &&
                                            this.iframe.contentWindow &&
                                            this.iframe.contentWindow.postMessage(
                                                "the_element_style_left_" + t,
                                                "*"
                                            );
                                    },
                                },
                                {
                                    key: "getWindowLocationHostName",
                                    value: function (t) {
                                        this.iframe &&
                                            this.iframe.contentWindow &&
                                            this.iframe.contentWindow.postMessage(
                                                "window_location_hostname_" + t,
                                                "*"
                                            );
                                    },
                                },
                                {
                                    key: "showQRModal",
                                    value: function (t, e) {
                                        (this.overlayDiv =
                                            document.createElement("div")),
                                            (this.overlayDiv.id = "zl-modal"),
                                            (this.overlayDiv.style.cssText =
                                                "position:fixed;width:100%;height:100vh;z-index:2147483645;background:rgba(0, 0, 0, 0.5);left:0;top:0;display:flex;justify-content:center"),
                                            (this.modalDiv =
                                                document.createElement("div")),
                                            (this.modalDiv.id =
                                                "zl-modal__container"),
                                            (this.modalDiv.style.cssText =
                                                "position: fixed;z-index:2147483646;width: 400px;height: 434px;background:#FFFFFF;border-radius:8px;top:80px;display:flex;flex-direction:column;align-items:center;justify-content:center;"),
                                            (this.QRImg =
                                                document.createElement("img")),
                                            (this.QRImg.id =
                                                "zl-modal__container__qr"),
                                            (this.QRImg.src = t),
                                            (this.QRImg.style.cssText =
                                                "width:300.18px;height:300.18px;object-fit: contain;"),
                                            (this.textP =
                                                document.createElement("p"));
                                        var n = document.createTextNode(e);
                                        this.textP.appendChild(n),
                                            (this.textP.style.cssText =
                                                "font-family:Roboto;font-style:normal;font-weight:normal;font-size: 14px;line-height:18px;color: #667685;margin-top:16px;"),
                                            this.modalDiv.appendChild(
                                                this.QRImg
                                            ),
                                            this.modalDiv.appendChild(
                                                this.textP
                                            ),
                                            this.overlayDiv.appendChild(
                                                this.modalDiv
                                            ),
                                            document
                                                .getElementsByTagName("body")[0]
                                                .appendChild(this.overlayDiv),
                                            window.addEventListener(
                                                "click",
                                                function (t) {
                                                    if (
                                                        !document.getElementById(
                                                            "zl-modal__container"
                                                        ) ||
                                                        !document
                                                            .getElementById(
                                                                "zl-modal__container"
                                                            )
                                                            .contains(t.target)
                                                    ) {
                                                        var e =
                                                            document.getElementById(
                                                                "zl-modal"
                                                            );
                                                        e && e.remove();
                                                    }
                                                }
                                            );
                                    },
                                },
                                {
                                    key: "receiveMessage",
                                    value: function (t) {
                                        if (t.data)
                                            switch (t.data.cmd) {
                                                case "zchat_widget_close_chat_box":
                                                    this.iframe &&
                                                        (this.isRectangleVersion() ||
                                                            (this
                                                                .initClosedBoxWidth ||
                                                                this.getWindowLocationHostName(
                                                                    window
                                                                        .location
                                                                        .hostname
                                                                ),
                                                            this
                                                                .isHandleClosedBoxChatToolTip ||
                                                                this.getTheElementStyleLeftPosition(
                                                                    window
                                                                        .getComputedStyle(
                                                                            this
                                                                                .element,
                                                                            null
                                                                        )
                                                                        .getPropertyValue(
                                                                            "left"
                                                                        )
                                                                ),
                                                            (this.initClosedBoxWidth =
                                                                t.data.width)),
                                                        (this.isChatBoxOpened =
                                                            !1),
                                                        this.updateDragHolderElementStyle(),
                                                        (this.iframe.height =
                                                            t.data.height),
                                                        (this.iframe.width =
                                                            t.data.width),
                                                        (this.element.style.height =
                                                            t.data.height +
                                                            "px"),
                                                        (this.element.style.width =
                                                            t.data.width +
                                                            "px"),
                                                        (this.element.style.top =
                                                            this
                                                                .closedBox_top ||
                                                            ""),
                                                        (this.element.style.bottom =
                                                            this
                                                                .closedBox_bottom ||
                                                            "0px"),
                                                        (this.element.style.left =
                                                            this
                                                                .closedBox_left ||
                                                            ""),
                                                        (this.element.style.right =
                                                            this
                                                                .closedBox_right ||
                                                            "0px"),
                                                        this.offResizeAndDrag());
                                                    break;
                                                case "zchat_widget_open_chat_box":
                                                    this.iframe &&
                                                        ((this.isChatBoxOpened =
                                                            !0),
                                                        null ==
                                                        this.chatBoxHeight
                                                            ? ((this.iframe.height =
                                                                  t.data.height),
                                                              (this.element.style.height =
                                                                  t.data
                                                                      .height +
                                                                  "px"))
                                                            : ((this.iframe.height =
                                                                  this.chatBoxHeight),
                                                              (this.element.style.height =
                                                                  this
                                                                      .chatBoxHeight +
                                                                  "px")),
                                                        null ==
                                                        this.chatBoxWidth
                                                            ? ((this.iframe.width =
                                                                  t.data.width),
                                                              (this.element.style.width =
                                                                  t.data.width +
                                                                  "px"))
                                                            : ((this.iframe.width =
                                                                  this.chatBoxWidth),
                                                              (this.element.style.width =
                                                                  this
                                                                      .chatBoxWidth +
                                                                  "px")),
                                                        null ==
                                                            this.chatBoxLeft &&
                                                        null == this.chatBoxTop
                                                            ? ("true" ===
                                                              this.data.leftside
                                                                  ? (this.element.style.left =
                                                                        "52px")
                                                                  : (this.element.style.right =
                                                                        "23px"),
                                                              (this.element.style.bottom =
                                                                  "100px"))
                                                            : ((this.element.style.left =
                                                                  this
                                                                      .chatBoxLeft +
                                                                  "px"),
                                                              (this.element.style.top =
                                                                  this
                                                                      .chatBoxTop +
                                                                  "px")),
                                                        this.handleResizeWindow());
                                                    break;
                                                case "zchat_widget_toggle_sticker":
                                                    if (this.iframe) {
                                                        if (
                                                            Number(
                                                                this.iframe
                                                                    .height
                                                            ) <
                                                            Number(
                                                                t.data.height
                                                            )
                                                        ) {
                                                            var e =
                                                                this.element.getAttribute(
                                                                    "style"
                                                                ) +
                                                                "z-index:2147483644!important";
                                                            this.element.setAttribute(
                                                                "style",
                                                                e
                                                            ),
                                                                (this.iframe.style.minHeight =
                                                                    "80vh"),
                                                                (this.iframe.style.minWidth =
                                                                    "400px");
                                                        } else
                                                            (this.element.style.zIndex =
                                                                "2147483644"),
                                                                (this.iframe.style.minHeight =
                                                                    ""),
                                                                (this.iframe.style.minWidth =
                                                                    "");
                                                        null ==
                                                        this.chatBoxHeight
                                                            ? ((this.iframe.height =
                                                                  t.data.height),
                                                              (this.element.style.height =
                                                                  t.data
                                                                      .height +
                                                                  "px"))
                                                            : ((this.iframe.height =
                                                                  this.chatBoxHeight),
                                                              (this.element.style.height =
                                                                  this
                                                                      .chatBoxHeight +
                                                                  "px")),
                                                            null ==
                                                            this.chatBoxWidth
                                                                ? ((this.iframe.width =
                                                                      t.data.width),
                                                                  (this.element.style.width =
                                                                      t.data
                                                                          .width +
                                                                      "px"))
                                                                : ((this.iframe.width =
                                                                      this.chatBoxWidth),
                                                                  (this.element.style.width =
                                                                      this
                                                                          .chatBoxWidth +
                                                                      "px"));
                                                    }
                                                    break;
                                                case "zchat_widget_show_light_box":
                                                    this.iframe &&
                                                        ((this.element.style.height =
                                                            "100%"),
                                                        (this.element.style.width =
                                                            "100%"),
                                                        (this.element.style.top =
                                                            "0px"),
                                                        (this.element.style.left =
                                                            "0px"),
                                                        (this.iframe.height =
                                                            "100%"),
                                                        (this.iframe.width =
                                                            "100%"),
                                                        this.offResizeAndDrag());
                                                    break;
                                                case "zchat_widget_close_light_box":
                                                    this.iframe &&
                                                        ((this.element.style.height =
                                                            null ==
                                                            this.chatBoxHeight
                                                                ? "470px"
                                                                : this
                                                                      .chatBoxHeight +
                                                                  "px"),
                                                        (this.element.style.width =
                                                            null ==
                                                            this.chatBoxWidth
                                                                ? "350px"
                                                                : this
                                                                      .chatBoxWidth +
                                                                  "px"),
                                                        (this.iframe.height =
                                                            null ==
                                                            this.chatBoxHeight
                                                                ? 470
                                                                : this
                                                                      .chatBoxHeight),
                                                        (this.iframe.width =
                                                            null ==
                                                            this.chatBoxWidth
                                                                ? 350
                                                                : this
                                                                      .chatBoxWidth),
                                                        (this.element.style.top =
                                                            null ==
                                                            this.chatBoxTop
                                                                ? ""
                                                                : this
                                                                      .chatBoxTop +
                                                                  "px"),
                                                        (this.element.style.left =
                                                            null ==
                                                            this.chatBoxLeft
                                                                ? ""
                                                                : this
                                                                      .chatBoxLeft +
                                                                  "px"),
                                                        this.onResizeAndDrag());
                                            }
                                    },
                                },
                                {
                                    key: "handleHolderDragging",
                                    value: function () {
                                        if (this.dragHolderDragging) {
                                            if (this.isChatBoxOpened)
                                                (this.chatBoxLeft =
                                                    this.element.offsetLeft),
                                                    (this.chatBoxTop =
                                                        this.element.offsetTop),
                                                    (this.chatBoxWidth =
                                                        this.element.offsetWidth),
                                                    (this.chatBoxHeight =
                                                        this.element.offsetHeight);
                                            else {
                                                if (this.isRectangleVersion())
                                                    return;
                                                this.saveClosedBoxPosition(),
                                                    this.element.offsetLeft <=
                                                    window.innerWidth / 2
                                                        ? ((this.closedBox_right =
                                                              ""),
                                                          (this.closedBox_left =
                                                              "0px"),
                                                          (this.chatBoxLeft = 0),
                                                          (this.chatBoxTop =
                                                              this.element.offsetTop))
                                                        : ((this.closedBox_right =
                                                              "0px"),
                                                          (this.closedBox_left =
                                                              ""),
                                                          (this.chatBoxLeft =
                                                              ""),
                                                          (this.chatBoxTop =
                                                              this.element.offsetTop)),
                                                    (this.element.style.left =
                                                        this.closedBox_left ||
                                                        ""),
                                                    (this.element.style.right =
                                                        this.closedBox_right ||
                                                        "");
                                            }
                                            this.dragHolderDragging = !1;
                                        }
                                    },
                                },
                                {
                                    key: "saveClosedBoxPosition",
                                    value: function () {
                                        this.isRectangleVersion() ||
                                            this.isChatBoxOpened ||
                                            ((this.closedBox_top =
                                                this.element.style.top),
                                            (this.closedBox_bottom =
                                                this.element.style.bottom),
                                            (this.closedBox_left =
                                                this.element.style.left),
                                            (this.closedBox_right =
                                                this.element.style.right));
                                    },
                                },
                                {
                                    key: "closeChatBoxClosedToolTip",
                                    value: function () {
                                        this.isRectangleVersion() ||
                                            (this.iframe &&
                                                !this.isChatBoxOpened &&
                                                ((this.isHandleClosedBoxChatToolTip =
                                                    !0),
                                                (this.iframe.width = 70),
                                                (this.element.style.width =
                                                    "70px"),
                                                this.iframe.contentWindow.postMessage(
                                                    "close-chat-box-closed-tooltip",
                                                    "*"
                                                )));
                                    },
                                },
                            ]),
                            t
                        );
                    })(),
                    u = function () {
                        var t = this;
                        (this.isRectangleVersion = function () {
                            return 1 == t.data.style;
                        }),
                            (this._drag_chat_box_init = function (e) {
                                (t.type = e),
                                    (t.selected = t.element),
                                    (t.x_elem =
                                        t.x_pos - t.selected.offsetLeft),
                                    (t.y_elem = t.y_pos - t.selected.offsetTop),
                                    (t.chatBoxHeightCurrent =
                                        t.selected.offsetHeight),
                                    (t.chatBoxWidthCurrent =
                                        t.selected.offsetWidth),
                                    (t.x_elem_relative = t.x_pos),
                                    (t.y_elem_relative = t.y_pos),
                                    (t.checkResizeWindow = !1),
                                    (document.getElementById(
                                        "overlay"
                                    ).style.display = "block");
                            }),
                            (this._move_chat_box = function (e) {
                                if (
                                    ((t.x_pos = document.all
                                        ? window.event.clientX
                                        : e.pageX),
                                    (t.y_pos = document.all
                                        ? window.event.clientY
                                        : e.pageY),
                                    null !== t.selected)
                                )
                                    switch (t.type) {
                                        case "move_chat_box":
                                            t.handleHitToTop(),
                                                t.handleHitToLeft(),
                                                t.handleHitToRight(),
                                                t.handleHitToBottom();
                                            break;
                                        case "left-resize":
                                            t.handleLeftResize();
                                            break;
                                        case "right-resize":
                                            t.handleRightResize();
                                            break;
                                        case "top-resize":
                                            t.handleTopResize();
                                            break;
                                        case "bottom-resize":
                                            t.handleBottomResize();
                                            break;
                                        case "top-left-resize":
                                            t.handleTopResize(),
                                                t.handleLeftResize();
                                            break;
                                        case "top-right-resize":
                                            t.handleTopResize(),
                                                t.handleRightResize();
                                            break;
                                        case "bottom-left-resize":
                                            t.handleBottomResize(),
                                                t.handleLeftResize();
                                            break;
                                        case "bottom-right-resize":
                                            t.handleBottomResize(),
                                                t.handleRightResize();
                                    }
                            }),
                            (this._destroy = function () {
                                t.handleHolderDragging(),
                                    (t.selected = null),
                                    (t.type = 0);
                                var e = document.getElementById("overlay");
                                e && (e.style.display = "none");
                            }),
                            (this.handleResizeWindow = function () {
                                var e = !1;
                                if (
                                    ((t.initWindowHeight > window.innerHeight ||
                                        t.element.offsetTop +
                                            t.element.offsetHeight >=
                                            window.innerHeight) &&
                                        (t.element.style.top = "auto"),
                                    t.initWindowWidth > window.innerWidth)
                                ) {
                                    var n =
                                        t.initWindowWidth - window.innerWidth;
                                    e =
                                        t.element.style.left.replace("px", "") -
                                            n <=
                                        0;
                                }
                                return t.element.style.left
                                    ? t.element.style.left.replace("px", "") >=
                                      window.innerWidth
                                        ? ((t.initWindowWidth =
                                              window.innerWidth),
                                          (t.element.style.left = ""))
                                        : e
                                        ? ((t.initWindowWidth =
                                              window.innerWidth),
                                          (t.element.style.left = "0px"))
                                        : (window.innerWidth <=
                                          t.element.offsetWidth
                                              ? ((t.element.style.left = ""),
                                                (t.checkResizeWindow = !0))
                                              : t.checkResizeWindow
                                              ? (t.element.style.left = "")
                                              : (t.element.style.left =
                                                    t.element.offsetLeft < 0
                                                        ? "0px"
                                                        : t.element.offsetLeft +
                                                          window.innerWidth -
                                                          t.initWindowWidth +
                                                          "px"),
                                          (t.initWindowWidth =
                                              window.innerWidth),
                                          void (t.chatBoxLeft =
                                              t.element.offsetLeft))
                                    : ((t.initWindowWidth = window.innerWidth),
                                      (t.element.style.left = ""));
                            }),
                            (this.handleTopResize = function () {
                                var e =
                                        t.selected.offsetTop +
                                        t.selected.offsetHeight,
                                    n =
                                        t.selected.offsetTop +
                                        t.selected.offsetHeight -
                                        (t.y_pos - t.y_elem);
                                t.y_pos - t.y_elem > 0 &&
                                    ((t.selected.style.height =
                                        n > 470 ? n + "px" : "470px"),
                                    (t.iframe.height = n > 470 ? n : 470),
                                    (t.selected.style.top =
                                        n >= 470
                                            ? t.y_pos - t.y_elem + "px"
                                            : e - 470 + "px")),
                                    (t.chatBoxHeight = t.iframe.height),
                                    (t.chatBoxTop = t.selected.offsetTop);
                            }),
                            (this.handleLeftResize = function () {
                                var e =
                                        t.selected.offsetLeft +
                                        t.selected.offsetWidth,
                                    n =
                                        t.selected.offsetLeft +
                                        t.selected.offsetWidth -
                                        (t.x_pos - t.x_elem);
                                t.x_pos - t.x_elem > 0 &&
                                    ((t.selected.style.width =
                                        n > 350 ? n + "px" : "350px"),
                                    (t.iframe.width = n > 350 ? n : 350),
                                    (t.selected.style.left =
                                        n >= 350
                                            ? t.x_pos - t.x_elem + "px"
                                            : e - 350 + "px")),
                                    (t.chatBoxWidth = t.iframe.width),
                                    (t.chatBoxLeft = t.selected.offsetLeft);
                            }),
                            (this.handleRightResize = function () {
                                var e =
                                    t.x_pos -
                                    t.x_elem_relative +
                                    t.chatBoxWidthCurrent;
                                t.x_pos < window.innerWidth - 14
                                    ? ((t.selected.style.width =
                                          e > 350 ? e + "px" : "350px"),
                                      (t.iframe.width = e > 350 ? e : 350))
                                    : ((t.selected.style.width =
                                          window.innerWidth -
                                          t.selected.offsetLeft -
                                          14 +
                                          "px"),
                                      (t.iframe.width =
                                          window.innerWidth -
                                          t.selected.offsetLeft -
                                          14)),
                                    (t.chatBoxWidth = t.iframe.width);
                            }),
                            (this.handleBottomResize = function () {
                                var e =
                                    t.y_pos -
                                    t.y_elem_relative +
                                    t.chatBoxHeightCurrent;
                                t.y_pos < window.innerHeight - 1
                                    ? ((t.selected.style.height =
                                          e > 470 ? e + "px" : "470px"),
                                      (t.iframe.height = e > 470 ? e : 470))
                                    : ((t.selected.style.height =
                                          window.innerHeight -
                                          t.selected.offsetTop +
                                          "px"),
                                      (t.iframe.height =
                                          window.innerHeight -
                                          t.selected.offsetTop)),
                                    (t.chatBoxHeight = t.iframe.height);
                            }),
                            (this.handleHitToTop = function () {
                                0 == t.selected.offsetTop &&
                                    1 == t.hitToTop &&
                                    t.y_pos - t.y_elem > 35 &&
                                    ((t.selected.style.top = "35px"),
                                    (t.hitToTop = !1)),
                                    t.selected.offsetTop < 35
                                        ? ((t.hitToTop = !0),
                                          (t.selected.style.top = "0px"),
                                          t.isRectangleVersion() &&
                                              ((t.chatBoxTop =
                                                  t.y_pos - t.y_elem),
                                              0 == t.selected.offsetTop &&
                                                  (t.chatBoxTop = 0)))
                                        : ((t.selected.style.top =
                                              t.y_pos - t.y_elem + "px"),
                                          t.isRectangleVersion() &&
                                              (t.chatBoxTop =
                                                  t.selected.offsetTop));
                            }),
                            (this.handleHitToLeft = function () {
                                0 == t.selected.offsetLeft &&
                                    1 == t.hitToLeft &&
                                    t.x_pos - t.x_elem > 35 &&
                                    ((t.selected.style.left = "35px"),
                                    (t.hitToLeft = !1)),
                                    t.selected.offsetLeft < 35
                                        ? ((t.hitToLeft = !0),
                                          (t.selected.style.left = "0px"),
                                          t.isRectangleVersion() &&
                                              ((t.chatBoxLeft =
                                                  t.x_pos - t.x_elem),
                                              0 == t.selected.offsetLeft &&
                                                  (t.chatBoxLeft = 0)))
                                        : ((t.selected.style.left =
                                              t.x_pos - t.x_elem + "px"),
                                          t.isRectangleVersion() &&
                                              (t.chatBoxLeft =
                                                  t.x_pos - t.x_elem));
                            }),
                            (this.handleHitToRight = function () {
                                var e =
                                    window.innerWidth -
                                    t.selected.offsetLeft -
                                    t.selected.offsetWidth;
                                0 == e &&
                                    1 == t.hitToRight &&
                                    t.x_elem - t.x_pos > 35 &&
                                    ((t.selected.style.left =
                                        window.innerWidth - 35 + "px"),
                                    (t.hitToRight = !1)),
                                    e < 35
                                        ? ((t.hitToLeft = !0),
                                          (t.selected.style.left =
                                              window.innerWidth -
                                              t.selected.offsetWidth -
                                              15 +
                                              "px"),
                                          t.isRectangleVersion() &&
                                              (t.chatBoxWidth =
                                                  t.selected.offsetWidth))
                                        : t.isRectangleVersion() &&
                                          (t.chatBoxWidth =
                                              t.selected.offsetWidth),
                                    t.isRectangleVersion() &&
                                        (t.chatBoxLeft = t.selected.offsetLeft);
                            }),
                            (this.handleHitToBottom = function () {
                                var e =
                                    window.innerHeight -
                                    t.selected.offsetTop -
                                    t.selected.offsetHeight;
                                0 == t.offsetBottom &&
                                    1 == t.hitToBottom &&
                                    t.y_elem - t.y_pos > 35 &&
                                    ((t.selected.style.top =
                                        window.innerHeight - 35 + "px"),
                                    (t.hitToBottom = !1)),
                                    e < 35
                                        ? ((t.hitToBottom = !0),
                                          (t.selected.style.top =
                                              window.innerHeight -
                                              t.selected.offsetHeight +
                                              "px"),
                                          t.isRectangleVersion() &&
                                              (t.chatBoxHeight =
                                                  t.selected.offsetHeight))
                                        : t.isRectangleVersion() &&
                                          (t.chatBoxHeight =
                                              t.selected.offsetHeight),
                                    t.isRectangleVersion() &&
                                        (t.chatBoxTop = t.selected.offsetTop);
                            }),
                            (this.offResizeAndDrag = function () {
                                (document.getElementById(
                                    "drag-holder"
                                ).style.display = "block"),
                                    (document.getElementById(
                                        "drag-left"
                                    ).style.display = "none"),
                                    (document.getElementById(
                                        "drag-right"
                                    ).style.display = "none"),
                                    (document.getElementById(
                                        "drag-top"
                                    ).style.display = "none"),
                                    (document.getElementById(
                                        "drag-bottom"
                                    ).style.display = "none"),
                                    (document.getElementById(
                                        "drag-top-left"
                                    ).style.display = "none"),
                                    (document.getElementById(
                                        "drag-top-right"
                                    ).style.display = "none"),
                                    (document.getElementById(
                                        "drag-bottom-left"
                                    ).style.display = "none"),
                                    (document.getElementById(
                                        "drag-bottom-right"
                                    ).style.display = "none");
                            }),
                            (this.onResizeAndDrag = function () {
                                (document.getElementById(
                                    "drag-holder"
                                ).style.display = "block"),
                                    (document.getElementById(
                                        "drag-left"
                                    ).style.display = "block"),
                                    (document.getElementById(
                                        "drag-right"
                                    ).style.display = "block"),
                                    (document.getElementById(
                                        "drag-top"
                                    ).style.display = "block"),
                                    (document.getElementById(
                                        "drag-bottom"
                                    ).style.display = "block"),
                                    (document.getElementById(
                                        "drag-top-left"
                                    ).style.display = "block"),
                                    (document.getElementById(
                                        "drag-top-right"
                                    ).style.display = "block"),
                                    (document.getElementById(
                                        "drag-bottom-left"
                                    ).style.display = "block"),
                                    (document.getElementById(
                                        "drag-bottom-right"
                                    ).style.display = "block");
                            });
                    };
                e.default = l;
            },
            function (t, e, n) {
                t.exports = { default: n(90), __esModule: !0 };
            },
            function (t, e, n) {
                n(91), (t.exports = n(2).Object.keys);
            },
            function (t, e, n) {
                var i = n(26),
                    r = n(31);
                n(92)("keys", function () {
                    return function (t) {
                        return r(i(t));
                    };
                });
            },
            function (t, e, n) {
                var i = n(4),
                    r = n(2),
                    o = n(19);
                t.exports = function (t, e) {
                    var n = (r.Object || {})[t] || Object[t],
                        a = {};
                    (a[t] = e(n)),
                        i(
                            i.S +
                                i.F *
                                    o(function () {
                                        n(1);
                                    }),
                            "Object",
                            a
                        );
                };
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = h(n(0)),
                    r = h(n(45)),
                    o = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    (0, i.default)(t, r.key, r);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })(),
                    a = h(n(9)),
                    s = h(n(16)),
                    l = h(n(94)),
                    u = n(96);
                function h(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var c = (function () {
                    function t(e, n, i) {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                            (this.sdk = i),
                            (this.id = n),
                            (this.data = {}),
                            (this.element = e),
                            (this.data = this.getDataFromElement(e)),
                            (this.data.android =
                                s.default.isAndroid() && s.default.isMobile()),
                            (this.data.ios =
                                s.default.isIOS() && s.default.isMobile()),
                            (this.data.baseUrl = "https://sp.zalo.me"),
                            (this.receiveMessage =
                                this.receiveMessage.bind(this)),
                            (this.shareOnMobile =
                                this.shareOnMobile.bind(this)),
                            (this.handleOpenShare =
                                this.handleOpenShare.bind(this));
                    }
                    return (
                        o(t, [
                            {
                                key: "getDataFromElement",
                                value: function (t) {
                                    var e = {};
                                    return (
                                        (e.dev = t.getAttribute("data-dev")),
                                        (e.color =
                                            t.getAttribute("data-color")),
                                        (e.oaid = t.getAttribute("data-oaid")),
                                        (e.href = t.getAttribute("data-href")),
                                        e.href ||
                                            (e.href = window.location.href),
                                        (e.layout =
                                            t.getAttribute("data-layout")),
                                        (e.customize =
                                            t.getAttribute("data-customize")),
                                        (e.callback =
                                            t.getAttribute("data-callback")),
                                        (e.share = parseInt(
                                            t.getAttribute("data-share-type")
                                        )),
                                        e.share || (e.share = 0),
                                        e.layout || (e.layout = "1"),
                                        e.customize
                                            ? "false" === e.customize
                                                ? (e.customize = !1)
                                                : (e.customize = !0)
                                            : (e.customize = !1),
                                        (e.id = this.id),
                                        (e.domain = document.domain),
                                        (e.width = "0px"),
                                        (e.height = "0px"),
                                        e
                                    );
                                },
                            },
                            {
                                key: "validate",
                                value: function () {
                                    return this.data.oaid
                                        ? !!this.data.href ||
                                              (console.warn(
                                                  "[Zalo Social Plugin]",
                                                  "The share button have no data-href attribute"
                                              ),
                                              !1)
                                        : (console.warn(
                                              "[Zalo Social Plugin]",
                                              "The share button have no data-oaid attribute"
                                          ),
                                          !1);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    if (
                                        (console.log("2.1.1"), this.validate())
                                    ) {
                                        if (
                                            ((this.iframe =
                                                document.createElement(
                                                    "iframe"
                                                )),
                                            (this.iframe.id = this.id),
                                            (this.iframe.name = this.id),
                                            (this.iframe.frameBorder = 0),
                                            (this.iframe.allowFullscreen =
                                                "true"),
                                            (this.iframe.scrolling = "no"),
                                            (this.iframe.style.position =
                                                "relative"),
                                            this.data.customize)
                                        )
                                            (this.iframe.style.zIndex = 999999),
                                                (this.iframe.width = "0px"),
                                                (this.iframe.height = "0px"),
                                                (this.iframe.style.position =
                                                    "absolute"),
                                                (this.iframe.style.top = "0px"),
                                                (this.iframe.style.left =
                                                    "0px"),
                                                this.listenEventClickButton();
                                        else {
                                            switch (
                                                ((this.element.style.position =
                                                    "relative"),
                                                (this.iframe.style.zIndex = 99),
                                                (this.element.style.display =
                                                    "inline-block"),
                                                (this.iframe.style.position =
                                                    "absolute"),
                                                (this.iframe.style.top = "0px"),
                                                (this.iframe.style.left =
                                                    "0px"),
                                                this.data.layout)
                                            ) {
                                                case "1":
                                                    (this.data.width = "70"),
                                                        (this.data.height =
                                                            "20");
                                                    break;
                                                case "2":
                                                    (this.data.width = "20"),
                                                        (this.data.height =
                                                            "20");
                                                    break;
                                                case "3":
                                                    (this.data.width = "30"),
                                                        (this.data.height =
                                                            "30");
                                                    break;
                                                case "4":
                                                    (this.data.width = "40"),
                                                        (this.data.height =
                                                            "40");
                                                    break;
                                                case "5":
                                                    (this.data.width = "40"),
                                                        (this.data.height =
                                                            "60");
                                            }
                                            (this.iframe.width =
                                                this.data.width + "px"),
                                                (this.element.style.width =
                                                    this.data.width + "px"),
                                                (this.iframe.height =
                                                    this.data.height + "px"),
                                                (this.element.style.height =
                                                    this.data.height + "px");
                                        }
                                        var t = { url: this.data.href },
                                            e = {
                                                id: this.id.hex,
                                                layout: this.data.layout,
                                                color: this.data.color,
                                                customize: this.data.customize,
                                                width: this.data.width,
                                                height: this.data.height,
                                                isDesktop:
                                                    (!this.data.android &&
                                                        !this.data.ios) ||
                                                    !1,
                                                url: this.data.href,
                                                d: encodeURIComponent(
                                                    u.Base64.encode(
                                                        (0, r.default)(t)
                                                    )
                                                ),
                                                shareType: this.data.share,
                                            };
                                        (this.data.hrefBtn =
                                            "https://button-share.zalo.me/share_inline" +
                                            a.default.jsonToQueryString(e)),
                                            (this.iframe.src =
                                                this.data.hrefBtn),
                                            this.data.customize
                                                ? document
                                                      .getElementsByTagName(
                                                          "body"
                                                      )[0]
                                                      .appendChild(this.iframe)
                                                : this.element.appendChild(
                                                      this.iframe
                                                  ),
                                            window.addEventListener(
                                                "message",
                                                this.receiveMessage
                                            );
                                    }
                                },
                            },
                            {
                                key: "listenEventClickButton",
                                value: function () {
                                    this.element.addEventListener(
                                        "click",
                                        this.onButtonClick.bind(this),
                                        !1
                                    );
                                },
                            },
                            {
                                key: "onButtonClick",
                                value: function () {
                                    this.iframe &&
                                        this.iframe.contentWindow &&
                                        this.iframe.contentWindow.postMessage(
                                            {
                                                type: "clickOpenShare",
                                                id: this.id.hex,
                                            },
                                            "*"
                                        );
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    this.iframe.remove(),
                                        this.element.removeEventListener(
                                            "click",
                                            this.onButtonClick
                                        ),
                                        window.removeEventListener(
                                            "message",
                                            this.receiveMessage
                                        );
                                },
                            },
                            {
                                key: "reload",
                                value: function () {
                                    this.iframe &&
                                        this.iframe.contentWindow &&
                                        this.iframe.contentWindow.postMessage(
                                            "zshare_reload",
                                            "https://sp.zalo.me"
                                        );
                                },
                            },
                            {
                                key: "setData",
                                value: function (t) {
                                    this.frameData = t;
                                },
                            },
                            {
                                key: "shareOnMobile",
                                value: function () {
                                    if (null != this.data) {
                                        var t = encodeURIComponent(
                                            this.data.href
                                        );
                                        return this.data.android
                                            ? (this.sdk.redirect(
                                                  "intent://zaloapp.com/#Intent;action=android.intent.action.SEND;type=text/plain;S.android.intent.extra.SUBJECT=;S.android.intent.extra.TEXT=" +
                                                      t +
                                                      ";B.hidePostFeed=false;B.backToSource=true;end"
                                              ),
                                              !1)
                                            : this.data.ios
                                            ? (this.sdk.redirect(
                                                  "zaloshareext://shareext?url=" +
                                                      t +
                                                      "&type=8&version=1"
                                              ),
                                              !1)
                                            : void 0;
                                    }
                                },
                            },
                            {
                                key: "handleOpenShare",
                                value: function () {
                                    l.default.clickShareButton();
                                    var t = (0, r.default)({ errorCode: 0 });
                                    l.default.trackStatClickShare(
                                        "https://sp.zalo.me/l/stats",
                                        "OAid=" +
                                            (this.data.oaid
                                                ? this.data.oaid.toString()
                                                : "0") +
                                            "&actionId=6&params=" +
                                            t,
                                        function () {}
                                    ),
                                        (this.position =
                                            this.getPositionIframe()),
                                        this.data.customize
                                            ? ((this.iframe.style.top =
                                                  this.position.top + "px"),
                                              (this.iframe.style.left =
                                                  this.position.left + "px"),
                                              (this.iframe.style.width =
                                                  "433px"),
                                              (this.iframe.style.height =
                                                  "350px"))
                                            : ((this.iframe.style.zIndex = 999999),
                                              "left" ===
                                              this.position.horizontal
                                                  ? ((this.iframe.style.right =
                                                        "0px"),
                                                    (this.iframe.style.left =
                                                        "auto"))
                                                  : ((this.iframe.style.left =
                                                        "0px"),
                                                    (this.iframe.style.right =
                                                        "auto")),
                                              "top" === this.position.vertical
                                                  ? ((this.iframe.style.bottom =
                                                        "0px"),
                                                    (this.iframe.style.top =
                                                        "auto"))
                                                  : ((this.iframe.style.top =
                                                        "0px"),
                                                    (this.iframe.style.bottom =
                                                        "auto")),
                                              (this.iframe.style.width =
                                                  "470px"),
                                              (this.iframe.style.height =
                                                  "450px")),
                                        this.iframe &&
                                            this.iframe.contentWindow &&
                                            this.iframe.contentWindow.postMessage(
                                                {
                                                    type: "changeAlignLayoutShare",
                                                    align: this.position,
                                                    id: this.id.hex,
                                                },
                                                "*"
                                            );
                                },
                            },
                            {
                                key: "getPositionIframe",
                                value: function () {
                                    var t = Math.max(
                                            document.documentElement
                                                .clientHeight,
                                            window.innerHeight || 0
                                        ),
                                        e = Math.max(
                                            document.documentElement
                                                .clientWidth,
                                            window.innerWidth || 0
                                        ),
                                        n =
                                            this.element.getBoundingClientRect();
                                    console.log("rect: ", n),
                                        console.log("h = ", t);
                                    var i = "bottom",
                                        r = "right";
                                    if (this.data.customize) {
                                        var o = this.getCoords(this.element),
                                            a =
                                                o.top +
                                                this.element.offsetHeight +
                                                5,
                                            s =
                                                o.left +
                                                this.element.offsetWidth / 2;
                                        return (
                                            t - n.bottom < 355 &&
                                                ((a = a - 360 - n.height),
                                                (i = "top")),
                                            e - n.right < 477 &&
                                                ((s -= 430), (r = "left")),
                                            {
                                                top: a,
                                                left: s,
                                                vertical: i,
                                                horizontal: r,
                                            }
                                        );
                                    }
                                    return (
                                        t - n.bottom < 355 && (i = "top"),
                                        e - n.right < 477 && (r = "left"),
                                        { vertical: i, horizontal: r }
                                    );
                                },
                            },
                            {
                                key: "getCoords",
                                value: function (t) {
                                    var e = t.getBoundingClientRect(),
                                        n = document.body,
                                        i = document.documentElement,
                                        r =
                                            window.pageYOffset ||
                                            i.scrollTop ||
                                            n.scrollTop,
                                        o =
                                            window.pageXOffset ||
                                            i.scrollLeft ||
                                            n.scrollLeft,
                                        a = i.clientTop || n.clientTop || 0,
                                        s = i.clientLeft || n.clientLeft || 0,
                                        l = e.top + r - a,
                                        u = e.left + o - s;
                                    return {
                                        top: Math.round(l),
                                        left: Math.round(u),
                                    };
                                },
                            },
                            {
                                key: "receiveMessage",
                                value: function (t) {
                                    if (t.data && t.data.id === this.id.hex)
                                        switch (t.data.cmd) {
                                            case "zsdk_share_resize":
                                                this.data.customize
                                                    ? ((this.iframe.style.height =
                                                          350 +
                                                          t.data.height +
                                                          "px"),
                                                      "top" ===
                                                          this.position
                                                              .vertical &&
                                                          (this.iframe.style.top =
                                                              this.position
                                                                  .top -
                                                              t.data.height +
                                                              "px"))
                                                    : (this.iframe.style.height =
                                                          450 +
                                                          t.data.height +
                                                          "px");
                                                break;
                                            case "zsdk_open_share":
                                                this.handleOpenShare();
                                                break;
                                            case "zsdk_share_on_mobile":
                                                this.shareOnMobile();
                                                break;
                                            case "zsdk_close_share":
                                                this.data.customize
                                                    ? ((this.iframe.style.width =
                                                          "0px"),
                                                      (this.iframe.style.height =
                                                          "0px"))
                                                    : ((this.iframe.style.zIndex = 99),
                                                      (this.iframe.style.width =
                                                          this.data.width +
                                                          "px"),
                                                      (this.iframe.style.height =
                                                          this.data.height +
                                                          "px")),
                                                    window[
                                                        this.data.callback
                                                    ] &&
                                                        window[
                                                            this.data.callback
                                                        ]({ data: 1 });
                                                break;
                                            case "zsdk_login_zalo":
                                                this.handleLoginZalo();
                                        }
                                },
                            },
                        ]),
                        t
                    );
                })();
                e.default = c;
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = a(n(0)),
                    r = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    (0, i.default)(t, r.key, r);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })(),
                    o = a(n(95));
                function a(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var s = 2,
                    l = (function () {
                        function t() {
                            !(function (t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError(
                                        "Cannot call a class as a function"
                                    );
                            })(this, t);
                        }
                        return (
                            r(t, null, [
                                {
                                    key: "trackStatClickShare",
                                    value: function (t, e, n) {
                                        o.default.postJSOBWithCredentials(
                                            t,
                                            e,
                                            n
                                        );
                                    },
                                },
                                {
                                    key: "clickShareButton",
                                    value: function () {
                                        o.default.getTextWithCredentials(
                                            "https://sp.zalo.me/l/share?action=" +
                                                s,
                                            function () {}
                                        );
                                    },
                                },
                                {
                                    key: "trackingError",
                                    value: function (t, e) {
                                        o.default.getTextWithCredentials(
                                            "https://sp.zalo.me/tracking/log?error=" +
                                                encodeURIComponent(t) +
                                                "&data=" +
                                                e,
                                            function () {}
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })();
                e.default = l;
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i,
                    r = n(0),
                    o = (i = r) && i.__esModule ? i : { default: i },
                    a = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                (i.enumerable = i.enumerable || !1),
                                    (i.configurable = !0),
                                    "value" in i && (i.writable = !0),
                                    (0, o.default)(t, i.key, i);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })();
                var s = (function () {
                    function t() {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                    }
                    return (
                        a(t, null, [
                            {
                                key: "getJSONWithCredentials",
                                value: function (t, e) {
                                    fetch(t, {
                                        credentials: "include",
                                        method: "get",
                                    })
                                        .then(function (t) {
                                            return t.json();
                                        })
                                        .then(function (t) {
                                            e(t);
                                        });
                                },
                            },
                            {
                                key: "getTextWithCredentials",
                                value: function (t, e) {
                                    fetch(t, {
                                        credentials: "include",
                                        method: "get",
                                    })
                                        .then(function (t) {
                                            return t.text();
                                        })
                                        .then(function (t) {
                                            e(t);
                                        });
                                },
                            },
                            {
                                key: "postJSOBWithCredentials",
                                value: function (t, e, n) {
                                    fetch(t, {
                                        method: "post",
                                        credentials: "include",
                                        headers: {
                                            "Content-Type":
                                                "application/x-www-form-urlencoded",
                                        },
                                        body: e,
                                    })
                                        .then(function (t) {
                                            return t.json();
                                        })
                                        .then(function (t) {
                                            n(t);
                                        });
                                },
                            },
                        ]),
                        t
                    );
                })();
                e.default = s;
            },
            function (t, e, n) {
                (function (i) {
                    var r;
                    !(function (i) {
                        "use strict";
                        var o,
                            a = i.Base64;
                        if (t.exports)
                            try {
                                o = n(97).Buffer;
                            } catch (t) {}
                        var s =
                                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                            l = (function (t) {
                                for (
                                    var e = {}, n = 0, i = t.length;
                                    n < i;
                                    n++
                                )
                                    e[t.charAt(n)] = n;
                                return e;
                            })(s),
                            u = String.fromCharCode,
                            h = function (t) {
                                if (t.length < 2)
                                    return (e = t.charCodeAt(0)) < 128
                                        ? t
                                        : e < 2048
                                        ? u(192 | (e >>> 6)) + u(128 | (63 & e))
                                        : u(224 | ((e >>> 12) & 15)) +
                                          u(128 | ((e >>> 6) & 63)) +
                                          u(128 | (63 & e));
                                var e =
                                    65536 +
                                    1024 * (t.charCodeAt(0) - 55296) +
                                    (t.charCodeAt(1) - 56320);
                                return (
                                    u(240 | ((e >>> 18) & 7)) +
                                    u(128 | ((e >>> 12) & 63)) +
                                    u(128 | ((e >>> 6) & 63)) +
                                    u(128 | (63 & e))
                                );
                            },
                            c = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                            f = function (t) {
                                return t.replace(c, h);
                            },
                            d = function (t) {
                                var e = [0, 2, 1][t.length % 3],
                                    n =
                                        (t.charCodeAt(0) << 16) |
                                        ((t.length > 1 ? t.charCodeAt(1) : 0) <<
                                            8) |
                                        (t.length > 2 ? t.charCodeAt(2) : 0);
                                return [
                                    s.charAt(n >>> 18),
                                    s.charAt((n >>> 12) & 63),
                                    e >= 2 ? "=" : s.charAt((n >>> 6) & 63),
                                    e >= 1 ? "=" : s.charAt(63 & n),
                                ].join("");
                            },
                            p = i.btoa
                                ? function (t) {
                                      return i.btoa(t);
                                  }
                                : function (t) {
                                      return t.replace(/[\s\S]{1,3}/g, d);
                                  },
                            m = o
                                ? o.from && o.from !== Uint8Array.from
                                    ? function (t) {
                                          return (
                                              t.constructor === o.constructor
                                                  ? t
                                                  : o.from(t)
                                          ).toString("base64");
                                      }
                                    : function (t) {
                                          return (
                                              t.constructor === o.constructor
                                                  ? t
                                                  : new o(t)
                                          ).toString("base64");
                                      }
                                : function (t) {
                                      return p(f(t));
                                  },
                            g = function (t, e) {
                                return e
                                    ? m(String(t))
                                          .replace(/[+\/]/g, function (t) {
                                              return "+" == t ? "-" : "_";
                                          })
                                          .replace(/=/g, "")
                                    : m(String(t));
                            },
                            y = new RegExp(
                                [
                                    "[?-?][?-?]",
                                    "[?-?][?-?]{2}",
                                    "[?-?][?-?]{3}",
                                ].join("|"),
                                "g"
                            ),
                            v = function (t) {
                                switch (t.length) {
                                    case 4:
                                        var e =
                                            (((7 & t.charCodeAt(0)) << 18) |
                                                ((63 & t.charCodeAt(1)) << 12) |
                                                ((63 & t.charCodeAt(2)) << 6) |
                                                (63 & t.charCodeAt(3))) -
                                            65536;
                                        return (
                                            u(55296 + (e >>> 10)) +
                                            u(56320 + (1023 & e))
                                        );
                                    case 3:
                                        return u(
                                            ((15 & t.charCodeAt(0)) << 12) |
                                                ((63 & t.charCodeAt(1)) << 6) |
                                                (63 & t.charCodeAt(2))
                                        );
                                    default:
                                        return u(
                                            ((31 & t.charCodeAt(0)) << 6) |
                                                (63 & t.charCodeAt(1))
                                        );
                                }
                            },
                            w = function (t) {
                                return t.replace(y, v);
                            },
                            x = function (t) {
                                var e = t.length,
                                    n = e % 4,
                                    i =
                                        (e > 0 ? l[t.charAt(0)] << 18 : 0) |
                                        (e > 1 ? l[t.charAt(1)] << 12 : 0) |
                                        (e > 2 ? l[t.charAt(2)] << 6 : 0) |
                                        (e > 3 ? l[t.charAt(3)] : 0),
                                    r = [
                                        u(i >>> 16),
                                        u((i >>> 8) & 255),
                                        u(255 & i),
                                    ];
                                return (
                                    (r.length -= [0, 0, 2, 1][n]), r.join("")
                                );
                            },
                            b = i.atob
                                ? function (t) {
                                      return i.atob(t);
                                  }
                                : function (t) {
                                      return t.replace(/[\s\S]{1,4}/g, x);
                                  },
                            _ = o
                                ? o.from && o.from !== Uint8Array.from
                                    ? function (t) {
                                          return (
                                              t.constructor === o.constructor
                                                  ? t
                                                  : o.from(t, "base64")
                                          ).toString();
                                      }
                                    : function (t) {
                                          return (
                                              t.constructor === o.constructor
                                                  ? t
                                                  : new o(t, "base64")
                                          ).toString();
                                      }
                                : function (t) {
                                      return w(b(t));
                                  },
                            B = function (t) {
                                return _(
                                    String(t)
                                        .replace(/[-_]/g, function (t) {
                                            return "-" == t ? "+" : "/";
                                        })
                                        .replace(/[^A-Za-z0-9\+\/]/g, "")
                                );
                            };
                        if (
                            ((i.Base64 = {
                                VERSION: "2.3.2",
                                atob: b,
                                btoa: p,
                                fromBase64: B,
                                toBase64: g,
                                utob: f,
                                encode: g,
                                encodeURI: function (t) {
                                    return g(t, !0);
                                },
                                btou: w,
                                decode: B,
                                noConflict: function () {
                                    var t = i.Base64;
                                    return (i.Base64 = a), t;
                                },
                            }),
                            "function" == typeof Object.defineProperty)
                        ) {
                            var k = function (t) {
                                return {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0,
                                };
                            };
                            i.Base64.extendString = function () {
                                Object.defineProperty(
                                    String.prototype,
                                    "fromBase64",
                                    k(function () {
                                        return B(this);
                                    })
                                ),
                                    Object.defineProperty(
                                        String.prototype,
                                        "toBase64",
                                        k(function (t) {
                                            return g(this, t);
                                        })
                                    ),
                                    Object.defineProperty(
                                        String.prototype,
                                        "toBase64URI",
                                        k(function () {
                                            return g(this, !0);
                                        })
                                    );
                            };
                        }
                        i.Meteor && (Base64 = i.Base64),
                            t.exports
                                ? (t.exports.Base64 = i.Base64)
                                : void 0 ===
                                      (r = function () {
                                          return i.Base64;
                                      }.apply(e, [])) || (t.exports = r);
                    })(
                        "undefined" != typeof self
                            ? self
                            : "undefined" != typeof window
                            ? window
                            : void 0 !== i
                            ? i
                            : this
                    );
                }.call(this, n(46)));
            },
            function (t, e, n) {
                "use strict";
                (function (t) {
                    /*!
                     * The buffer module from node.js, for the browser.
                     *
                     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
                     * @license  MIT
                     */
                    var i = n(98),
                        r = n(99),
                        o = n(100);
                    function a() {
                        return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
                    }
                    function s(t, e) {
                        if (a() < e)
                            throw new RangeError("Invalid typed array length");
                        return (
                            l.TYPED_ARRAY_SUPPORT
                                ? ((t = new Uint8Array(e)).__proto__ =
                                      l.prototype)
                                : (null === t && (t = new l(e)),
                                  (t.length = e)),
                            t
                        );
                    }
                    function l(t, e, n) {
                        if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l))
                            return new l(t, e, n);
                        if ("number" == typeof t) {
                            if ("string" == typeof e)
                                throw new Error(
                                    "If encoding is specified then the first argument must be a string"
                                );
                            return c(this, t);
                        }
                        return u(this, t, e, n);
                    }
                    function u(t, e, n, i) {
                        if ("number" == typeof e)
                            throw new TypeError(
                                '"value" argument must not be a number'
                            );
                        return "undefined" != typeof ArrayBuffer &&
                            e instanceof ArrayBuffer
                            ? (function (t, e, n, i) {
                                  if ((e.byteLength, n < 0 || e.byteLength < n))
                                      throw new RangeError(
                                          "'offset' is out of bounds"
                                      );
                                  if (e.byteLength < n + (i || 0))
                                      throw new RangeError(
                                          "'length' is out of bounds"
                                      );
                                  e =
                                      void 0 === n && void 0 === i
                                          ? new Uint8Array(e)
                                          : void 0 === i
                                          ? new Uint8Array(e, n)
                                          : new Uint8Array(e, n, i);
                                  l.TYPED_ARRAY_SUPPORT
                                      ? ((t = e).__proto__ = l.prototype)
                                      : (t = f(t, e));
                                  return t;
                              })(t, e, n, i)
                            : "string" == typeof e
                            ? (function (t, e, n) {
                                  ("string" == typeof n && "" !== n) ||
                                      (n = "utf8");
                                  if (!l.isEncoding(n))
                                      throw new TypeError(
                                          '"encoding" must be a valid string encoding'
                                      );
                                  var i = 0 | p(e, n),
                                      r = (t = s(t, i)).write(e, n);
                                  r !== i && (t = t.slice(0, r));
                                  return t;
                              })(t, e, n)
                            : (function (t, e) {
                                  if (l.isBuffer(e)) {
                                      var n = 0 | d(e.length);
                                      return 0 === (t = s(t, n)).length
                                          ? t
                                          : (e.copy(t, 0, 0, n), t);
                                  }
                                  if (e) {
                                      if (
                                          ("undefined" != typeof ArrayBuffer &&
                                              e.buffer instanceof
                                                  ArrayBuffer) ||
                                          "length" in e
                                      )
                                          return "number" != typeof e.length ||
                                              (i = e.length) != i
                                              ? s(t, 0)
                                              : f(t, e);
                                      if ("Buffer" === e.type && o(e.data))
                                          return f(t, e.data);
                                  }
                                  var i;
                                  throw new TypeError(
                                      "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                                  );
                              })(t, e);
                    }
                    function h(t) {
                        if ("number" != typeof t)
                            throw new TypeError(
                                '"size" argument must be a number'
                            );
                        if (t < 0)
                            throw new RangeError(
                                '"size" argument must not be negative'
                            );
                    }
                    function c(t, e) {
                        if (
                            (h(e),
                            (t = s(t, e < 0 ? 0 : 0 | d(e))),
                            !l.TYPED_ARRAY_SUPPORT)
                        )
                            for (var n = 0; n < e; ++n) t[n] = 0;
                        return t;
                    }
                    function f(t, e) {
                        var n = e.length < 0 ? 0 : 0 | d(e.length);
                        t = s(t, n);
                        for (var i = 0; i < n; i += 1) t[i] = 255 & e[i];
                        return t;
                    }
                    function d(t) {
                        if (t >= a())
                            throw new RangeError(
                                "Attempt to allocate Buffer larger than maximum size: 0x" +
                                    a().toString(16) +
                                    " bytes"
                            );
                        return 0 | t;
                    }
                    function p(t, e) {
                        if (l.isBuffer(t)) return t.length;
                        if (
                            "undefined" != typeof ArrayBuffer &&
                            "function" == typeof ArrayBuffer.isView &&
                            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
                        )
                            return t.byteLength;
                        "string" != typeof t && (t = "" + t);
                        var n = t.length;
                        if (0 === n) return 0;
                        for (var i = !1; ; )
                            switch (e) {
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return n;
                                case "utf8":
                                case "utf-8":
                                case void 0:
                                    return O(t).length;
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return 2 * n;
                                case "hex":
                                    return n >>> 1;
                                case "base64":
                                    return W(t).length;
                                default:
                                    if (i) return O(t).length;
                                    (e = ("" + e).toLowerCase()), (i = !0);
                            }
                    }
                    function m(t, e, n) {
                        var i = t[e];
                        (t[e] = t[n]), (t[n] = i);
                    }
                    function g(t, e, n, i, r) {
                        if (0 === t.length) return -1;
                        if (
                            ("string" == typeof n
                                ? ((i = n), (n = 0))
                                : n > 2147483647
                                ? (n = 2147483647)
                                : n < -2147483648 && (n = -2147483648),
                            (n = +n),
                            isNaN(n) && (n = r ? 0 : t.length - 1),
                            n < 0 && (n = t.length + n),
                            n >= t.length)
                        ) {
                            if (r) return -1;
                            n = t.length - 1;
                        } else if (n < 0) {
                            if (!r) return -1;
                            n = 0;
                        }
                        if (
                            ("string" == typeof e && (e = l.from(e, i)),
                            l.isBuffer(e))
                        )
                            return 0 === e.length ? -1 : y(t, e, n, i, r);
                        if ("number" == typeof e)
                            return (
                                (e &= 255),
                                l.TYPED_ARRAY_SUPPORT &&
                                "function" ==
                                    typeof Uint8Array.prototype.indexOf
                                    ? r
                                        ? Uint8Array.prototype.indexOf.call(
                                              t,
                                              e,
                                              n
                                          )
                                        : Uint8Array.prototype.lastIndexOf.call(
                                              t,
                                              e,
                                              n
                                          )
                                    : y(t, [e], n, i, r)
                            );
                        throw new TypeError(
                            "val must be string, number or Buffer"
                        );
                    }
                    function y(t, e, n, i, r) {
                        var o,
                            a = 1,
                            s = t.length,
                            l = e.length;
                        if (
                            void 0 !== i &&
                            ("ucs2" === (i = String(i).toLowerCase()) ||
                                "ucs-2" === i ||
                                "utf16le" === i ||
                                "utf-16le" === i)
                        ) {
                            if (t.length < 2 || e.length < 2) return -1;
                            (a = 2), (s /= 2), (l /= 2), (n /= 2);
                        }
                        function u(t, e) {
                            return 1 === a ? t[e] : t.readUInt16BE(e * a);
                        }
                        if (r) {
                            var h = -1;
                            for (o = n; o < s; o++)
                                if (u(t, o) === u(e, -1 === h ? 0 : o - h)) {
                                    if ((-1 === h && (h = o), o - h + 1 === l))
                                        return h * a;
                                } else -1 !== h && (o -= o - h), (h = -1);
                        } else
                            for (n + l > s && (n = s - l), o = n; o >= 0; o--) {
                                for (var c = !0, f = 0; f < l; f++)
                                    if (u(t, o + f) !== u(e, f)) {
                                        c = !1;
                                        break;
                                    }
                                if (c) return o;
                            }
                        return -1;
                    }
                    function v(t, e, n, i) {
                        n = Number(n) || 0;
                        var r = t.length - n;
                        i ? (i = Number(i)) > r && (i = r) : (i = r);
                        var o = e.length;
                        if (o % 2 != 0)
                            throw new TypeError("Invalid hex string");
                        i > o / 2 && (i = o / 2);
                        for (var a = 0; a < i; ++a) {
                            var s = parseInt(e.substr(2 * a, 2), 16);
                            if (isNaN(s)) return a;
                            t[n + a] = s;
                        }
                        return a;
                    }
                    function w(t, e, n, i) {
                        return U(
                            (function (t) {
                                for (var e = [], n = 0; n < t.length; ++n)
                                    e.push(255 & t.charCodeAt(n));
                                return e;
                            })(e),
                            t,
                            n,
                            i
                        );
                    }
                    function x(t, e, n) {
                        return 0 === e && n === t.length
                            ? i.fromByteArray(t)
                            : i.fromByteArray(t.slice(e, n));
                    }
                    function b(t, e, n) {
                        n = Math.min(t.length, n);
                        for (var i = [], r = e; r < n; ) {
                            var o,
                                a,
                                s,
                                l,
                                u = t[r],
                                h = null,
                                c = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                            if (r + c <= n)
                                switch (c) {
                                    case 1:
                                        u < 128 && (h = u);
                                        break;
                                    case 2:
                                        128 == (192 & (o = t[r + 1])) &&
                                            (l = ((31 & u) << 6) | (63 & o)) >
                                                127 &&
                                            (h = l);
                                        break;
                                    case 3:
                                        (o = t[r + 1]),
                                            (a = t[r + 2]),
                                            128 == (192 & o) &&
                                                128 == (192 & a) &&
                                                (l =
                                                    ((15 & u) << 12) |
                                                    ((63 & o) << 6) |
                                                    (63 & a)) > 2047 &&
                                                (l < 55296 || l > 57343) &&
                                                (h = l);
                                        break;
                                    case 4:
                                        (o = t[r + 1]),
                                            (a = t[r + 2]),
                                            (s = t[r + 3]),
                                            128 == (192 & o) &&
                                                128 == (192 & a) &&
                                                128 == (192 & s) &&
                                                (l =
                                                    ((15 & u) << 18) |
                                                    ((63 & o) << 12) |
                                                    ((63 & a) << 6) |
                                                    (63 & s)) > 65535 &&
                                                l < 1114112 &&
                                                (h = l);
                                }
                            null === h
                                ? ((h = 65533), (c = 1))
                                : h > 65535 &&
                                  ((h -= 65536),
                                  i.push(((h >>> 10) & 1023) | 55296),
                                  (h = 56320 | (1023 & h))),
                                i.push(h),
                                (r += c);
                        }
                        return (function (t) {
                            var e = t.length;
                            if (e <= _)
                                return String.fromCharCode.apply(String, t);
                            var n = "",
                                i = 0;
                            for (; i < e; )
                                n += String.fromCharCode.apply(
                                    String,
                                    t.slice(i, (i += _))
                                );
                            return n;
                        })(i);
                    }
                    (e.Buffer = l),
                        (e.SlowBuffer = function (t) {
                            +t != t && (t = 0);
                            return l.alloc(+t);
                        }),
                        (e.INSPECT_MAX_BYTES = 50),
                        (l.TYPED_ARRAY_SUPPORT =
                            void 0 !== t.TYPED_ARRAY_SUPPORT
                                ? t.TYPED_ARRAY_SUPPORT
                                : (function () {
                                      try {
                                          var t = new Uint8Array(1);
                                          return (
                                              (t.__proto__ = {
                                                  __proto__:
                                                      Uint8Array.prototype,
                                                  foo: function () {
                                                      return 42;
                                                  },
                                              }),
                                              42 === t.foo() &&
                                                  "function" ==
                                                      typeof t.subarray &&
                                                  0 ===
                                                      t.subarray(1, 1)
                                                          .byteLength
                                          );
                                      } catch (t) {
                                          return !1;
                                      }
                                  })()),
                        (e.kMaxLength = a()),
                        (l.poolSize = 8192),
                        (l._augment = function (t) {
                            return (t.__proto__ = l.prototype), t;
                        }),
                        (l.from = function (t, e, n) {
                            return u(null, t, e, n);
                        }),
                        l.TYPED_ARRAY_SUPPORT &&
                            ((l.prototype.__proto__ = Uint8Array.prototype),
                            (l.__proto__ = Uint8Array),
                            "undefined" != typeof Symbol &&
                                Symbol.species &&
                                l[Symbol.species] === l &&
                                Object.defineProperty(l, Symbol.species, {
                                    value: null,
                                    configurable: !0,
                                })),
                        (l.alloc = function (t, e, n) {
                            return (
                                (i = null),
                                (o = e),
                                (a = n),
                                h((r = t)),
                                r <= 0
                                    ? s(i, r)
                                    : void 0 !== o
                                    ? "string" == typeof a
                                        ? s(i, r).fill(o, a)
                                        : s(i, r).fill(o)
                                    : s(i, r)
                            );
                            var i, r, o, a;
                        }),
                        (l.allocUnsafe = function (t) {
                            return c(null, t);
                        }),
                        (l.allocUnsafeSlow = function (t) {
                            return c(null, t);
                        }),
                        (l.isBuffer = function (t) {
                            return !(null == t || !t._isBuffer);
                        }),
                        (l.compare = function (t, e) {
                            if (!l.isBuffer(t) || !l.isBuffer(e))
                                throw new TypeError(
                                    "Arguments must be Buffers"
                                );
                            if (t === e) return 0;
                            for (
                                var n = t.length,
                                    i = e.length,
                                    r = 0,
                                    o = Math.min(n, i);
                                r < o;
                                ++r
                            )
                                if (t[r] !== e[r]) {
                                    (n = t[r]), (i = e[r]);
                                    break;
                                }
                            return n < i ? -1 : i < n ? 1 : 0;
                        }),
                        (l.isEncoding = function (t) {
                            switch (String(t).toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "latin1":
                                case "binary":
                                case "base64":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return !0;
                                default:
                                    return !1;
                            }
                        }),
                        (l.concat = function (t, e) {
                            if (!o(t))
                                throw new TypeError(
                                    '"list" argument must be an Array of Buffers'
                                );
                            if (0 === t.length) return l.alloc(0);
                            var n;
                            if (void 0 === e)
                                for (e = 0, n = 0; n < t.length; ++n)
                                    e += t[n].length;
                            var i = l.allocUnsafe(e),
                                r = 0;
                            for (n = 0; n < t.length; ++n) {
                                var a = t[n];
                                if (!l.isBuffer(a))
                                    throw new TypeError(
                                        '"list" argument must be an Array of Buffers'
                                    );
                                a.copy(i, r), (r += a.length);
                            }
                            return i;
                        }),
                        (l.byteLength = p),
                        (l.prototype._isBuffer = !0),
                        (l.prototype.swap16 = function () {
                            var t = this.length;
                            if (t % 2 != 0)
                                throw new RangeError(
                                    "Buffer size must be a multiple of 16-bits"
                                );
                            for (var e = 0; e < t; e += 2) m(this, e, e + 1);
                            return this;
                        }),
                        (l.prototype.swap32 = function () {
                            var t = this.length;
                            if (t % 4 != 0)
                                throw new RangeError(
                                    "Buffer size must be a multiple of 32-bits"
                                );
                            for (var e = 0; e < t; e += 4)
                                m(this, e, e + 3), m(this, e + 1, e + 2);
                            return this;
                        }),
                        (l.prototype.swap64 = function () {
                            var t = this.length;
                            if (t % 8 != 0)
                                throw new RangeError(
                                    "Buffer size must be a multiple of 64-bits"
                                );
                            for (var e = 0; e < t; e += 8)
                                m(this, e, e + 7),
                                    m(this, e + 1, e + 6),
                                    m(this, e + 2, e + 5),
                                    m(this, e + 3, e + 4);
                            return this;
                        }),
                        (l.prototype.toString = function () {
                            var t = 0 | this.length;
                            return 0 === t
                                ? ""
                                : 0 === arguments.length
                                ? b(this, 0, t)
                                : function (t, e, n) {
                                      var i = !1;
                                      if (
                                          ((void 0 === e || e < 0) && (e = 0),
                                          e > this.length)
                                      )
                                          return "";
                                      if (
                                          ((void 0 === n || n > this.length) &&
                                              (n = this.length),
                                          n <= 0)
                                      )
                                          return "";
                                      if ((n >>>= 0) <= (e >>>= 0)) return "";
                                      for (t || (t = "utf8"); ; )
                                          switch (t) {
                                              case "hex":
                                                  return E(this, e, n);
                                              case "utf8":
                                              case "utf-8":
                                                  return b(this, e, n);
                                              case "ascii":
                                                  return B(this, e, n);
                                              case "latin1":
                                              case "binary":
                                                  return k(this, e, n);
                                              case "base64":
                                                  return x(this, e, n);
                                              case "ucs2":
                                              case "ucs-2":
                                              case "utf16le":
                                              case "utf-16le":
                                                  return T(this, e, n);
                                              default:
                                                  if (i)
                                                      throw new TypeError(
                                                          "Unknown encoding: " +
                                                              t
                                                      );
                                                  (t = (t + "").toLowerCase()),
                                                      (i = !0);
                                          }
                                  }.apply(this, arguments);
                        }),
                        (l.prototype.equals = function (t) {
                            if (!l.isBuffer(t))
                                throw new TypeError(
                                    "Argument must be a Buffer"
                                );
                            return this === t || 0 === l.compare(this, t);
                        }),
                        (l.prototype.inspect = function () {
                            var t = "",
                                n = e.INSPECT_MAX_BYTES;
                            return (
                                this.length > 0 &&
                                    ((t = this.toString("hex", 0, n)
                                        .match(/.{2}/g)
                                        .join(" ")),
                                    this.length > n && (t += " ... ")),
                                "<Buffer " + t + ">"
                            );
                        }),
                        (l.prototype.compare = function (t, e, n, i, r) {
                            if (!l.isBuffer(t))
                                throw new TypeError(
                                    "Argument must be a Buffer"
                                );
                            if (
                                (void 0 === e && (e = 0),
                                void 0 === n && (n = t ? t.length : 0),
                                void 0 === i && (i = 0),
                                void 0 === r && (r = this.length),
                                e < 0 ||
                                    n > t.length ||
                                    i < 0 ||
                                    r > this.length)
                            )
                                throw new RangeError("out of range index");
                            if (i >= r && e >= n) return 0;
                            if (i >= r) return -1;
                            if (e >= n) return 1;
                            if (this === t) return 0;
                            for (
                                var o = (r >>>= 0) - (i >>>= 0),
                                    a = (n >>>= 0) - (e >>>= 0),
                                    s = Math.min(o, a),
                                    u = this.slice(i, r),
                                    h = t.slice(e, n),
                                    c = 0;
                                c < s;
                                ++c
                            )
                                if (u[c] !== h[c]) {
                                    (o = u[c]), (a = h[c]);
                                    break;
                                }
                            return o < a ? -1 : a < o ? 1 : 0;
                        }),
                        (l.prototype.includes = function (t, e, n) {
                            return -1 !== this.indexOf(t, e, n);
                        }),
                        (l.prototype.indexOf = function (t, e, n) {
                            return g(this, t, e, n, !0);
                        }),
                        (l.prototype.lastIndexOf = function (t, e, n) {
                            return g(this, t, e, n, !1);
                        }),
                        (l.prototype.write = function (t, e, n, i) {
                            if (void 0 === e)
                                (i = "utf8"), (n = this.length), (e = 0);
                            else if (void 0 === n && "string" == typeof e)
                                (i = e), (n = this.length), (e = 0);
                            else {
                                if (!isFinite(e))
                                    throw new Error(
                                        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                                    );
                                (e |= 0),
                                    isFinite(n)
                                        ? ((n |= 0),
                                          void 0 === i && (i = "utf8"))
                                        : ((i = n), (n = void 0));
                            }
                            var r = this.length - e;
                            if (
                                ((void 0 === n || n > r) && (n = r),
                                (t.length > 0 && (n < 0 || e < 0)) ||
                                    e > this.length)
                            )
                                throw new RangeError(
                                    "Attempt to write outside buffer bounds"
                                );
                            i || (i = "utf8");
                            for (var o, a, s, l, u, h, c, f, d, p = !1; ; )
                                switch (i) {
                                    case "hex":
                                        return v(this, t, e, n);
                                    case "utf8":
                                    case "utf-8":
                                        return (
                                            (f = e),
                                            (d = n),
                                            U(
                                                O(t, (c = this).length - f),
                                                c,
                                                f,
                                                d
                                            )
                                        );
                                    case "ascii":
                                        return w(this, t, e, n);
                                    case "latin1":
                                    case "binary":
                                        return w(this, t, e, n);
                                    case "base64":
                                        return (
                                            (l = this),
                                            (u = e),
                                            (h = n),
                                            U(W(t), l, u, h)
                                        );
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return (
                                            (a = e),
                                            (s = n),
                                            U(
                                                (function (t, e) {
                                                    for (
                                                        var n,
                                                            i,
                                                            r,
                                                            o = [],
                                                            a = 0;
                                                        a < t.length &&
                                                        !((e -= 2) < 0);
                                                        ++a
                                                    )
                                                        (n = t.charCodeAt(a)),
                                                            (i = n >> 8),
                                                            (r = n % 256),
                                                            o.push(r),
                                                            o.push(i);
                                                    return o;
                                                })(t, (o = this).length - a),
                                                o,
                                                a,
                                                s
                                            )
                                        );
                                    default:
                                        if (p)
                                            throw new TypeError(
                                                "Unknown encoding: " + i
                                            );
                                        (i = ("" + i).toLowerCase()), (p = !0);
                                }
                        }),
                        (l.prototype.toJSON = function () {
                            return {
                                type: "Buffer",
                                data: Array.prototype.slice.call(
                                    this._arr || this,
                                    0
                                ),
                            };
                        });
                    var _ = 4096;
                    function B(t, e, n) {
                        var i = "";
                        n = Math.min(t.length, n);
                        for (var r = e; r < n; ++r)
                            i += String.fromCharCode(127 & t[r]);
                        return i;
                    }
                    function k(t, e, n) {
                        var i = "";
                        n = Math.min(t.length, n);
                        for (var r = e; r < n; ++r)
                            i += String.fromCharCode(t[r]);
                        return i;
                    }
                    function E(t, e, n) {
                        var i = t.length;
                        (!e || e < 0) && (e = 0),
                            (!n || n < 0 || n > i) && (n = i);
                        for (var r = "", o = e; o < n; ++o) r += L(t[o]);
                        return r;
                    }
                    function T(t, e, n) {
                        for (
                            var i = t.slice(e, n), r = "", o = 0;
                            o < i.length;
                            o += 2
                        )
                            r += String.fromCharCode(i[o] + 256 * i[o + 1]);
                        return r;
                    }
                    function S(t, e, n) {
                        if (t % 1 != 0 || t < 0)
                            throw new RangeError("offset is not uint");
                        if (t + e > n)
                            throw new RangeError(
                                "Trying to access beyond buffer length"
                            );
                    }
                    function A(t, e, n, i, r, o) {
                        if (!l.isBuffer(t))
                            throw new TypeError(
                                '"buffer" argument must be a Buffer instance'
                            );
                        if (e > r || e < o)
                            throw new RangeError(
                                '"value" argument is out of bounds'
                            );
                        if (n + i > t.length)
                            throw new RangeError("Index out of range");
                    }
                    function P(t, e, n, i) {
                        e < 0 && (e = 65535 + e + 1);
                        for (
                            var r = 0, o = Math.min(t.length - n, 2);
                            r < o;
                            ++r
                        )
                            t[n + r] =
                                (e & (255 << (8 * (i ? r : 1 - r)))) >>>
                                (8 * (i ? r : 1 - r));
                    }
                    function R(t, e, n, i) {
                        e < 0 && (e = 4294967295 + e + 1);
                        for (
                            var r = 0, o = Math.min(t.length - n, 4);
                            r < o;
                            ++r
                        )
                            t[n + r] = (e >>> (8 * (i ? r : 3 - r))) & 255;
                    }
                    function z(t, e, n, i, r, o) {
                        if (n + i > t.length)
                            throw new RangeError("Index out of range");
                        if (n < 0) throw new RangeError("Index out of range");
                    }
                    function C(t, e, n, i, o) {
                        return (
                            o || z(t, 0, n, 4),
                            r.write(t, e, n, i, 23, 4),
                            n + 4
                        );
                    }
                    function I(t, e, n, i, o) {
                        return (
                            o || z(t, 0, n, 8),
                            r.write(t, e, n, i, 52, 8),
                            n + 8
                        );
                    }
                    (l.prototype.slice = function (t, e) {
                        var n,
                            i = this.length;
                        if (
                            ((t = ~~t) < 0
                                ? (t += i) < 0 && (t = 0)
                                : t > i && (t = i),
                            (e = void 0 === e ? i : ~~e) < 0
                                ? (e += i) < 0 && (e = 0)
                                : e > i && (e = i),
                            e < t && (e = t),
                            l.TYPED_ARRAY_SUPPORT)
                        )
                            (n = this.subarray(t, e)).__proto__ = l.prototype;
                        else {
                            var r = e - t;
                            n = new l(r, void 0);
                            for (var o = 0; o < r; ++o) n[o] = this[o + t];
                        }
                        return n;
                    }),
                        (l.prototype.readUIntLE = function (t, e, n) {
                            (t |= 0), (e |= 0), n || S(t, e, this.length);
                            for (
                                var i = this[t], r = 1, o = 0;
                                ++o < e && (r *= 256);

                            )
                                i += this[t + o] * r;
                            return i;
                        }),
                        (l.prototype.readUIntBE = function (t, e, n) {
                            (t |= 0), (e |= 0), n || S(t, e, this.length);
                            for (
                                var i = this[t + --e], r = 1;
                                e > 0 && (r *= 256);

                            )
                                i += this[t + --e] * r;
                            return i;
                        }),
                        (l.prototype.readUInt8 = function (t, e) {
                            return e || S(t, 1, this.length), this[t];
                        }),
                        (l.prototype.readUInt16LE = function (t, e) {
                            return (
                                e || S(t, 2, this.length),
                                this[t] | (this[t + 1] << 8)
                            );
                        }),
                        (l.prototype.readUInt16BE = function (t, e) {
                            return (
                                e || S(t, 2, this.length),
                                (this[t] << 8) | this[t + 1]
                            );
                        }),
                        (l.prototype.readUInt32LE = function (t, e) {
                            return (
                                e || S(t, 4, this.length),
                                (this[t] |
                                    (this[t + 1] << 8) |
                                    (this[t + 2] << 16)) +
                                    16777216 * this[t + 3]
                            );
                        }),
                        (l.prototype.readUInt32BE = function (t, e) {
                            return (
                                e || S(t, 4, this.length),
                                16777216 * this[t] +
                                    ((this[t + 1] << 16) |
                                        (this[t + 2] << 8) |
                                        this[t + 3])
                            );
                        }),
                        (l.prototype.readIntLE = function (t, e, n) {
                            (t |= 0), (e |= 0), n || S(t, e, this.length);
                            for (
                                var i = this[t], r = 1, o = 0;
                                ++o < e && (r *= 256);

                            )
                                i += this[t + o] * r;
                            return (
                                i >= (r *= 128) && (i -= Math.pow(2, 8 * e)), i
                            );
                        }),
                        (l.prototype.readIntBE = function (t, e, n) {
                            (t |= 0), (e |= 0), n || S(t, e, this.length);
                            for (
                                var i = e, r = 1, o = this[t + --i];
                                i > 0 && (r *= 256);

                            )
                                o += this[t + --i] * r;
                            return (
                                o >= (r *= 128) && (o -= Math.pow(2, 8 * e)), o
                            );
                        }),
                        (l.prototype.readInt8 = function (t, e) {
                            return (
                                e || S(t, 1, this.length),
                                128 & this[t]
                                    ? -1 * (255 - this[t] + 1)
                                    : this[t]
                            );
                        }),
                        (l.prototype.readInt16LE = function (t, e) {
                            e || S(t, 2, this.length);
                            var n = this[t] | (this[t + 1] << 8);
                            return 32768 & n ? 4294901760 | n : n;
                        }),
                        (l.prototype.readInt16BE = function (t, e) {
                            e || S(t, 2, this.length);
                            var n = this[t + 1] | (this[t] << 8);
                            return 32768 & n ? 4294901760 | n : n;
                        }),
                        (l.prototype.readInt32LE = function (t, e) {
                            return (
                                e || S(t, 4, this.length),
                                this[t] |
                                    (this[t + 1] << 8) |
                                    (this[t + 2] << 16) |
                                    (this[t + 3] << 24)
                            );
                        }),
                        (l.prototype.readInt32BE = function (t, e) {
                            return (
                                e || S(t, 4, this.length),
                                (this[t] << 24) |
                                    (this[t + 1] << 16) |
                                    (this[t + 2] << 8) |
                                    this[t + 3]
                            );
                        }),
                        (l.prototype.readFloatLE = function (t, e) {
                            return (
                                e || S(t, 4, this.length),
                                r.read(this, t, !0, 23, 4)
                            );
                        }),
                        (l.prototype.readFloatBE = function (t, e) {
                            return (
                                e || S(t, 4, this.length),
                                r.read(this, t, !1, 23, 4)
                            );
                        }),
                        (l.prototype.readDoubleLE = function (t, e) {
                            return (
                                e || S(t, 8, this.length),
                                r.read(this, t, !0, 52, 8)
                            );
                        }),
                        (l.prototype.readDoubleBE = function (t, e) {
                            return (
                                e || S(t, 8, this.length),
                                r.read(this, t, !1, 52, 8)
                            );
                        }),
                        (l.prototype.writeUIntLE = function (t, e, n, i) {
                            ((t = +t), (e |= 0), (n |= 0), i) ||
                                A(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                            var r = 1,
                                o = 0;
                            for (this[e] = 255 & t; ++o < n && (r *= 256); )
                                this[e + o] = (t / r) & 255;
                            return e + n;
                        }),
                        (l.prototype.writeUIntBE = function (t, e, n, i) {
                            ((t = +t), (e |= 0), (n |= 0), i) ||
                                A(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                            var r = n - 1,
                                o = 1;
                            for (
                                this[e + r] = 255 & t;
                                --r >= 0 && (o *= 256);

                            )
                                this[e + r] = (t / o) & 255;
                            return e + n;
                        }),
                        (l.prototype.writeUInt8 = function (t, e, n) {
                            return (
                                (t = +t),
                                (e |= 0),
                                n || A(this, t, e, 1, 255, 0),
                                l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                                (this[e] = 255 & t),
                                e + 1
                            );
                        }),
                        (l.prototype.writeUInt16LE = function (t, e, n) {
                            return (
                                (t = +t),
                                (e |= 0),
                                n || A(this, t, e, 2, 65535, 0),
                                l.TYPED_ARRAY_SUPPORT
                                    ? ((this[e] = 255 & t),
                                      (this[e + 1] = t >>> 8))
                                    : P(this, t, e, !0),
                                e + 2
                            );
                        }),
                        (l.prototype.writeUInt16BE = function (t, e, n) {
                            return (
                                (t = +t),
                                (e |= 0),
                                n || A(this, t, e, 2, 65535, 0),
                                l.TYPED_ARRAY_SUPPORT
                                    ? ((this[e] = t >>> 8),
                                      (this[e + 1] = 255 & t))
                                    : P(this, t, e, !1),
                                e + 2
                            );
                        }),
                        (l.prototype.writeUInt32LE = function (t, e, n) {
                            return (
                                (t = +t),
                                (e |= 0),
                                n || A(this, t, e, 4, 4294967295, 0),
                                l.TYPED_ARRAY_SUPPORT
                                    ? ((this[e + 3] = t >>> 24),
                                      (this[e + 2] = t >>> 16),
                                      (this[e + 1] = t >>> 8),
                                      (this[e] = 255 & t))
                                    : R(this, t, e, !0),
                                e + 4
                            );
                        }),
                        (l.prototype.writeUInt32BE = function (t, e, n) {
                            return (
                                (t = +t),
                                (e |= 0),
                                n || A(this, t, e, 4, 4294967295, 0),
                                l.TYPED_ARRAY_SUPPORT
                                    ? ((this[e] = t >>> 24),
                                      (this[e + 1] = t >>> 16),
                                      (this[e + 2] = t >>> 8),
                                      (this[e + 3] = 255 & t))
                                    : R(this, t, e, !1),
                                e + 4
                            );
                        }),
                        (l.prototype.writeIntLE = function (t, e, n, i) {
                            if (((t = +t), (e |= 0), !i)) {
                                var r = Math.pow(2, 8 * n - 1);
                                A(this, t, e, n, r - 1, -r);
                            }
                            var o = 0,
                                a = 1,
                                s = 0;
                            for (this[e] = 255 & t; ++o < n && (a *= 256); )
                                t < 0 &&
                                    0 === s &&
                                    0 !== this[e + o - 1] &&
                                    (s = 1),
                                    (this[e + o] = (((t / a) >> 0) - s) & 255);
                            return e + n;
                        }),
                        (l.prototype.writeIntBE = function (t, e, n, i) {
                            if (((t = +t), (e |= 0), !i)) {
                                var r = Math.pow(2, 8 * n - 1);
                                A(this, t, e, n, r - 1, -r);
                            }
                            var o = n - 1,
                                a = 1,
                                s = 0;
                            for (
                                this[e + o] = 255 & t;
                                --o >= 0 && (a *= 256);

                            )
                                t < 0 &&
                                    0 === s &&
                                    0 !== this[e + o + 1] &&
                                    (s = 1),
                                    (this[e + o] = (((t / a) >> 0) - s) & 255);
                            return e + n;
                        }),
                        (l.prototype.writeInt8 = function (t, e, n) {
                            return (
                                (t = +t),
                                (e |= 0),
                                n || A(this, t, e, 1, 127, -128),
                                l.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
                                t < 0 && (t = 255 + t + 1),
                                (this[e] = 255 & t),
                                e + 1
                            );
                        }),
                        (l.prototype.writeInt16LE = function (t, e, n) {
                            return (
                                (t = +t),
                                (e |= 0),
                                n || A(this, t, e, 2, 32767, -32768),
                                l.TYPED_ARRAY_SUPPORT
                                    ? ((this[e] = 255 & t),
                                      (this[e + 1] = t >>> 8))
                                    : P(this, t, e, !0),
                                e + 2
                            );
                        }),
                        (l.prototype.writeInt16BE = function (t, e, n) {
                            return (
                                (t = +t),
                                (e |= 0),
                                n || A(this, t, e, 2, 32767, -32768),
                                l.TYPED_ARRAY_SUPPORT
                                    ? ((this[e] = t >>> 8),
                                      (this[e + 1] = 255 & t))
                                    : P(this, t, e, !1),
                                e + 2
                            );
                        }),
                        (l.prototype.writeInt32LE = function (t, e, n) {
                            return (
                                (t = +t),
                                (e |= 0),
                                n || A(this, t, e, 4, 2147483647, -2147483648),
                                l.TYPED_ARRAY_SUPPORT
                                    ? ((this[e] = 255 & t),
                                      (this[e + 1] = t >>> 8),
                                      (this[e + 2] = t >>> 16),
                                      (this[e + 3] = t >>> 24))
                                    : R(this, t, e, !0),
                                e + 4
                            );
                        }),
                        (l.prototype.writeInt32BE = function (t, e, n) {
                            return (
                                (t = +t),
                                (e |= 0),
                                n || A(this, t, e, 4, 2147483647, -2147483648),
                                t < 0 && (t = 4294967295 + t + 1),
                                l.TYPED_ARRAY_SUPPORT
                                    ? ((this[e] = t >>> 24),
                                      (this[e + 1] = t >>> 16),
                                      (this[e + 2] = t >>> 8),
                                      (this[e + 3] = 255 & t))
                                    : R(this, t, e, !1),
                                e + 4
                            );
                        }),
                        (l.prototype.writeFloatLE = function (t, e, n) {
                            return C(this, t, e, !0, n);
                        }),
                        (l.prototype.writeFloatBE = function (t, e, n) {
                            return C(this, t, e, !1, n);
                        }),
                        (l.prototype.writeDoubleLE = function (t, e, n) {
                            return I(this, t, e, !0, n);
                        }),
                        (l.prototype.writeDoubleBE = function (t, e, n) {
                            return I(this, t, e, !1, n);
                        }),
                        (l.prototype.copy = function (t, e, n, i) {
                            if (
                                (n || (n = 0),
                                i || 0 === i || (i = this.length),
                                e >= t.length && (e = t.length),
                                e || (e = 0),
                                i > 0 && i < n && (i = n),
                                i === n)
                            )
                                return 0;
                            if (0 === t.length || 0 === this.length) return 0;
                            if (e < 0)
                                throw new RangeError(
                                    "targetStart out of bounds"
                                );
                            if (n < 0 || n >= this.length)
                                throw new RangeError(
                                    "sourceStart out of bounds"
                                );
                            if (i < 0)
                                throw new RangeError("sourceEnd out of bounds");
                            i > this.length && (i = this.length),
                                t.length - e < i - n && (i = t.length - e + n);
                            var r,
                                o = i - n;
                            if (this === t && n < e && e < i)
                                for (r = o - 1; r >= 0; --r)
                                    t[r + e] = this[r + n];
                            else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                                for (r = 0; r < o; ++r) t[r + e] = this[r + n];
                            else
                                Uint8Array.prototype.set.call(
                                    t,
                                    this.subarray(n, n + o),
                                    e
                                );
                            return o;
                        }),
                        (l.prototype.fill = function (t, e, n, i) {
                            if ("string" == typeof t) {
                                if (
                                    ("string" == typeof e
                                        ? ((i = e), (e = 0), (n = this.length))
                                        : "string" == typeof n &&
                                          ((i = n), (n = this.length)),
                                    1 === t.length)
                                ) {
                                    var r = t.charCodeAt(0);
                                    r < 256 && (t = r);
                                }
                                if (void 0 !== i && "string" != typeof i)
                                    throw new TypeError(
                                        "encoding must be a string"
                                    );
                                if ("string" == typeof i && !l.isEncoding(i))
                                    throw new TypeError(
                                        "Unknown encoding: " + i
                                    );
                            } else "number" == typeof t && (t &= 255);
                            if (e < 0 || this.length < e || this.length < n)
                                throw new RangeError("Out of range index");
                            if (n <= e) return this;
                            var o;
                            if (
                                ((e >>>= 0),
                                (n = void 0 === n ? this.length : n >>> 0),
                                t || (t = 0),
                                "number" == typeof t)
                            )
                                for (o = e; o < n; ++o) this[o] = t;
                            else {
                                var a = l.isBuffer(t)
                                        ? t
                                        : O(new l(t, i).toString()),
                                    s = a.length;
                                for (o = 0; o < n - e; ++o)
                                    this[o + e] = a[o % s];
                            }
                            return this;
                        });
                    var M = /[^+\/0-9A-Za-z-_]/g;
                    function L(t) {
                        return t < 16 ? "0" + t.toString(16) : t.toString(16);
                    }
                    function O(t, e) {
                        var n;
                        e = e || 1 / 0;
                        for (
                            var i = t.length, r = null, o = [], a = 0;
                            a < i;
                            ++a
                        ) {
                            if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                                if (!r) {
                                    if (n > 56319) {
                                        (e -= 3) > -1 && o.push(239, 191, 189);
                                        continue;
                                    }
                                    if (a + 1 === i) {
                                        (e -= 3) > -1 && o.push(239, 191, 189);
                                        continue;
                                    }
                                    r = n;
                                    continue;
                                }
                                if (n < 56320) {
                                    (e -= 3) > -1 && o.push(239, 191, 189),
                                        (r = n);
                                    continue;
                                }
                                n = 65536 + (((r - 55296) << 10) | (n - 56320));
                            } else r && (e -= 3) > -1 && o.push(239, 191, 189);
                            if (((r = null), n < 128)) {
                                if ((e -= 1) < 0) break;
                                o.push(n);
                            } else if (n < 2048) {
                                if ((e -= 2) < 0) break;
                                o.push((n >> 6) | 192, (63 & n) | 128);
                            } else if (n < 65536) {
                                if ((e -= 3) < 0) break;
                                o.push(
                                    (n >> 12) | 224,
                                    ((n >> 6) & 63) | 128,
                                    (63 & n) | 128
                                );
                            } else {
                                if (!(n < 1114112))
                                    throw new Error("Invalid code point");
                                if ((e -= 4) < 0) break;
                                o.push(
                                    (n >> 18) | 240,
                                    ((n >> 12) & 63) | 128,
                                    ((n >> 6) & 63) | 128,
                                    (63 & n) | 128
                                );
                            }
                        }
                        return o;
                    }
                    function W(t) {
                        return i.toByteArray(
                            (function (t) {
                                var e;
                                if (
                                    (t = ((e = t),
                                    e.trim
                                        ? e.trim()
                                        : e.replace(/^\s+|\s+$/g, "")).replace(
                                        M,
                                        ""
                                    )).length < 2
                                )
                                    return "";
                                for (; t.length % 4 != 0; ) t += "=";
                                return t;
                            })(t)
                        );
                    }
                    function U(t, e, n, i) {
                        for (
                            var r = 0;
                            r < i && !(r + n >= e.length || r >= t.length);
                            ++r
                        )
                            e[r + n] = t[r];
                        return r;
                    }
                }.call(this, n(46)));
            },
            function (t, e, n) {
                "use strict";
                (e.byteLength = function (t) {
                    return (3 * t.length) / 4 - u(t);
                }),
                    (e.toByteArray = function (t) {
                        var e,
                            n,
                            i,
                            a,
                            s,
                            l = t.length;
                        (a = u(t)),
                            (s = new o((3 * l) / 4 - a)),
                            (n = a > 0 ? l - 4 : l);
                        var h = 0;
                        for (e = 0; e < n; e += 4)
                            (i =
                                (r[t.charCodeAt(e)] << 18) |
                                (r[t.charCodeAt(e + 1)] << 12) |
                                (r[t.charCodeAt(e + 2)] << 6) |
                                r[t.charCodeAt(e + 3)]),
                                (s[h++] = (i >> 16) & 255),
                                (s[h++] = (i >> 8) & 255),
                                (s[h++] = 255 & i);
                        2 === a
                            ? ((i =
                                  (r[t.charCodeAt(e)] << 2) |
                                  (r[t.charCodeAt(e + 1)] >> 4)),
                              (s[h++] = 255 & i))
                            : 1 === a &&
                              ((i =
                                  (r[t.charCodeAt(e)] << 10) |
                                  (r[t.charCodeAt(e + 1)] << 4) |
                                  (r[t.charCodeAt(e + 2)] >> 2)),
                              (s[h++] = (i >> 8) & 255),
                              (s[h++] = 255 & i));
                        return s;
                    }),
                    (e.fromByteArray = function (t) {
                        for (
                            var e,
                                n = t.length,
                                r = n % 3,
                                o = "",
                                a = [],
                                s = 0,
                                l = n - r;
                            s < l;
                            s += 16383
                        )
                            a.push(h(t, s, s + 16383 > l ? l : s + 16383));
                        1 === r
                            ? ((e = t[n - 1]),
                              (o += i[e >> 2]),
                              (o += i[(e << 4) & 63]),
                              (o += "=="))
                            : 2 === r &&
                              ((e = (t[n - 2] << 8) + t[n - 1]),
                              (o += i[e >> 10]),
                              (o += i[(e >> 4) & 63]),
                              (o += i[(e << 2) & 63]),
                              (o += "="));
                        return a.push(o), a.join("");
                    });
                for (
                    var i = [],
                        r = [],
                        o =
                            "undefined" != typeof Uint8Array
                                ? Uint8Array
                                : Array,
                        a =
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                        s = 0,
                        l = a.length;
                    s < l;
                    ++s
                )
                    (i[s] = a[s]), (r[a.charCodeAt(s)] = s);
                function u(t) {
                    var e = t.length;
                    if (e % 4 > 0)
                        throw new Error(
                            "Invalid string. Length must be a multiple of 4"
                        );
                    return "=" === t[e - 2] ? 2 : "=" === t[e - 1] ? 1 : 0;
                }
                function h(t, e, n) {
                    for (var r, o, a = [], s = e; s < n; s += 3)
                        (r =
                            ((t[s] << 16) & 16711680) +
                            ((t[s + 1] << 8) & 65280) +
                            (255 & t[s + 2])),
                            a.push(
                                i[((o = r) >> 18) & 63] +
                                    i[(o >> 12) & 63] +
                                    i[(o >> 6) & 63] +
                                    i[63 & o]
                            );
                    return a.join("");
                }
                (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
            },
            function (t, e) {
                (e.read = function (t, e, n, i, r) {
                    var o,
                        a,
                        s = 8 * r - i - 1,
                        l = (1 << s) - 1,
                        u = l >> 1,
                        h = -7,
                        c = n ? r - 1 : 0,
                        f = n ? -1 : 1,
                        d = t[e + c];
                    for (
                        c += f, o = d & ((1 << -h) - 1), d >>= -h, h += s;
                        h > 0;
                        o = 256 * o + t[e + c], c += f, h -= 8
                    );
                    for (
                        a = o & ((1 << -h) - 1), o >>= -h, h += i;
                        h > 0;
                        a = 256 * a + t[e + c], c += f, h -= 8
                    );
                    if (0 === o) o = 1 - u;
                    else {
                        if (o === l) return a ? NaN : (1 / 0) * (d ? -1 : 1);
                        (a += Math.pow(2, i)), (o -= u);
                    }
                    return (d ? -1 : 1) * a * Math.pow(2, o - i);
                }),
                    (e.write = function (t, e, n, i, r, o) {
                        var a,
                            s,
                            l,
                            u = 8 * o - r - 1,
                            h = (1 << u) - 1,
                            c = h >> 1,
                            f =
                                23 === r
                                    ? Math.pow(2, -24) - Math.pow(2, -77)
                                    : 0,
                            d = i ? 0 : o - 1,
                            p = i ? 1 : -1,
                            m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
                        for (
                            e = Math.abs(e),
                                isNaN(e) || e === 1 / 0
                                    ? ((s = isNaN(e) ? 1 : 0), (a = h))
                                    : ((a = Math.floor(Math.log(e) / Math.LN2)),
                                      e * (l = Math.pow(2, -a)) < 1 &&
                                          (a--, (l *= 2)),
                                      (e +=
                                          a + c >= 1
                                              ? f / l
                                              : f * Math.pow(2, 1 - c)) *
                                          l >=
                                          2 && (a++, (l /= 2)),
                                      a + c >= h
                                          ? ((s = 0), (a = h))
                                          : a + c >= 1
                                          ? ((s = (e * l - 1) * Math.pow(2, r)),
                                            (a += c))
                                          : ((s =
                                                e *
                                                Math.pow(2, c - 1) *
                                                Math.pow(2, r)),
                                            (a = 0)));
                            r >= 8;
                            t[n + d] = 255 & s, d += p, s /= 256, r -= 8
                        );
                        for (
                            a = (a << r) | s, u += r;
                            u > 0;
                            t[n + d] = 255 & a, d += p, a /= 256, u -= 8
                        );
                        t[n + d - p] |= 128 * m;
                    });
            },
            function (t, e) {
                var n = {}.toString;
                t.exports =
                    Array.isArray ||
                    function (t) {
                        return "[object Array]" == n.call(t);
                    };
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = s(n(0)),
                    r = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    (0, i.default)(t, r.key, r);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })(),
                    o = s(n(9)),
                    a = s(n(16));
                function s(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var l = (function () {
                    function t(e) {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                            (this.element = e),
                            (this.data = this.getDataFromElement(e)),
                            (this.data.android =
                                a.default.isAndroid() && a.default.isMobile()),
                            (this.data.ios =
                                a.default.isIOS() && a.default.isMobile());
                    }
                    return (
                        r(t, [
                            {
                                key: "getDataFromElement",
                                value: function (t) {
                                    var e = {};
                                    return (
                                        (e.oaid = t.getAttribute("data-oaid")),
                                        (e.cover =
                                            t.getAttribute("data-cover")),
                                        (e.width =
                                            t.getAttribute("data-width")),
                                        (e.height =
                                            t.getAttribute("data-height")),
                                        (e.article =
                                            t.getAttribute("data-article")),
                                        e.color || (e.color = "yes"),
                                        (!e.article ||
                                            e.article < 0 ||
                                            e.article > 5) &&
                                            (e.article = 3),
                                        e.width ||
                                            e.height ||
                                            ((e.width = "500px"),
                                            (e.height = "628px")),
                                        (e.width <= 200 || e.height <= 365) &&
                                            ((e.width = "195px"),
                                            (e.height = "365px")),
                                        (e.width >= 500 || e.height >= 622) &&
                                            ((e.width = "500px"),
                                            (e.height = "628px")),
                                        (e.domain = document.domain),
                                        e
                                    );
                                },
                            },
                            {
                                key: "validate",
                                value: function () {
                                    return (
                                        !!this.data.oaid ||
                                        (console.warn(
                                            "[Zalo Social Plugin]",
                                            "The follow button have no data-oaid attribute"
                                        ),
                                        !1)
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    this.validate() &&
                                        ((this.iframe =
                                            document.createElement("iframe")),
                                        (this.iframe.frameBorder = 0),
                                        (this.iframe.allowFullscreen = "true"),
                                        (this.iframe.scrolling = "yes"),
                                        (this.element.style.overflow =
                                            "hidden"),
                                        (this.element.style.display =
                                            "inline-block"),
                                        (this.iframe.width = this.data.width),
                                        (this.iframe.height = this.data.height),
                                        (this.element.innerHTML = ""),
                                        (this.iframe.src =
                                            "https://sp.zalo.me/plugins/follow" +
                                            o.default.jsonToQueryString(
                                                this.data
                                            )),
                                        this.element.appendChild(this.iframe));
                                },
                            },
                            {
                                key: "reload",
                                value: function () {
                                    this.iframe.contentWindow.postMessage(
                                        "zfollow_reload",
                                        "https://sp.zalo.me"
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })();
                e.default = l;
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = a(n(0)),
                    r = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    (0, i.default)(t, r.key, r);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })(),
                    o = a(n(9));
                function a(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var s = (function () {
                    function t(e, n) {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                            (this.element = e),
                            (this.data = this.getDataFromElement(e)),
                            (this.data.id = n),
                            (this.receiveMessage =
                                this.receiveMessage.bind(this));
                    }
                    return (
                        r(t, [
                            {
                                key: "checkInAppZalo",
                                value: function () {
                                    for (
                                        var t = location.hostname + "_znid",
                                            e = document.cookie.split(";"),
                                            n = "",
                                            i = 0;
                                        i < e.length;
                                        i++
                                    ) {
                                        var r = e[i].split("=");
                                        r[0] === t && (n = r[1]);
                                    }
                                    "" !== n &&
                                        this.iframe.contentWindow.postMessage(
                                            {
                                                cmd: "inapp_cookie",
                                                data: { key: t, data: n },
                                            },
                                            "https://sp.zalo.me"
                                        );
                                },
                            },
                            {
                                key: "getDataFromElement",
                                value: function (t) {
                                    var e = {};
                                    return (
                                        (e.oaid = t.getAttribute("data-oaid")),
                                        (e.style =
                                            t.getAttribute("data-style")),
                                        (e.customize =
                                            t.getAttribute("data-customize")),
                                        (e.callback =
                                            t.getAttribute("data-callback")),
                                        (e.cbfollowed =
                                            t.getAttribute("data-cbfollowed")),
                                        e.customize
                                            ? "false" === e.customize
                                                ? (e.customize = !1)
                                                : (e.customize = !0)
                                            : (e.customize = !1),
                                        (e.domain = window.location.href),
                                        e
                                    );
                                },
                            },
                            {
                                key: "validate",
                                value: function () {
                                    return this.data.oaid
                                        ? (this.data.style ||
                                              (this.data.style = "blue"),
                                          !0)
                                        : (console.warn(
                                              "[Zalo Social Plugin]",
                                              "The follow button have no data-oaid attribute"
                                          ),
                                          !1);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var t = this;
                                    this.validate() &&
                                        ((this.iframe =
                                            document.createElement("iframe")),
                                        (this.iframe.frameBorder = 0),
                                        (this.iframe.allowFullscreen = "true"),
                                        (this.iframe.scrolling = "no"),
                                        (this.element.style.overflow =
                                            "hidden"),
                                        (this.element.style.display =
                                            "inline-block"),
                                        (this.iframe.width = "102px"),
                                        (this.iframe.height = "35px"),
                                        this.data.customize
                                            ? ((this.element.style.position =
                                                  "relative"),
                                              (this.iframe.width =
                                                  this.element.scrollWidth),
                                              (this.iframe.height =
                                                  this.element.scrollHeight),
                                              (this.iframe.style.position =
                                                  "absolute"),
                                              (this.iframe.style.opacity =
                                                  "0.000000000000001"),
                                              (this.iframe.style.left = "0px"),
                                              (this.iframe.style.top = "0px"))
                                            : (this.element.innerHTML = ""),
                                        (this.iframe.onload = function () {
                                            t.checkInAppZalo();
                                        }),
                                        (this.iframe.src =
                                            "https://button-follow.zalo.me" +
                                            o.default.jsonToQueryString(
                                                this.data
                                            )),
                                        this.element.appendChild(this.iframe),
                                        window.addEventListener(
                                            "message",
                                            this.receiveMessage
                                        ));
                                },
                            },
                            {
                                key: "reload",
                                value: function () {
                                    this.iframe.contentWindow.postMessage(
                                        "close_zlogin_popup",
                                        "https://button-follow.zalo.me"
                                    );
                                },
                            },
                            {
                                key: "receiveMessage",
                                value: function (t) {
                                    t.data &&
                                    "follow_success" === t.data.cmd &&
                                    t.data.id === this.data.id.hex
                                        ? window[this.data.callback] &&
                                          window[this.data.callback]({
                                              data: 1,
                                              userId: t.data.uid,
                                          })
                                        : t.data &&
                                          "cb_followed" === t.data.cmd &&
                                          t.data.id === this.data.id.hex &&
                                          window[this.data.cbfollowed] &&
                                          window[this.data.cbfollowed]();
                                },
                            },
                        ]),
                        t
                    );
                })();
                e.default = s;
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = s(n(0)),
                    r = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    (0, i.default)(t, r.key, r);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })(),
                    o = s(n(16)),
                    a = s(n(9));
                function s(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var l = (function () {
                    function t(e) {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                            (this.element = e),
                            (this.data = this.getDataFromElement(e)),
                            (this.data.android =
                                o.default.isAndroid() && o.default.isMobile()),
                            (this.data.ios =
                                o.default.isIOS() && o.default.isMobile());
                    }
                    return (
                        r(t, [
                            {
                                key: "getDataFromElement",
                                value: function (t) {
                                    var e = {};
                                    return (
                                        (e.link = t.getAttribute("data-href")),
                                        e.link ||
                                            (e.link = window.location.href),
                                        (e.size = t.getAttribute("data-size")),
                                        (e.appId =
                                            t.getAttribute("data-appid")),
                                        e
                                    );
                                },
                            },
                            {
                                key: "validate",
                                value: function (t) {
                                    return t.link
                                        ? (t.size ||
                                              console.warn(
                                                  "[Zalo Social Plugin]",
                                                  "The comment frame have not data-zie attribute"
                                              ),
                                          !0)
                                        : (console.error(
                                              "[Zalo Social Plugin]",
                                              "The comment frame have no data-href attribute"
                                          ),
                                          !1);
                                },
                            },
                            {
                                key: "reload",
                                value: function () {
                                    this.iframe &&
                                        this.iframe.contentWindow &&
                                        this.iframe.contentWindow.postMessage(
                                            "zcomment_reload",
                                            "https://sp.zalo.me"
                                        );
                                },
                            },
                            {
                                key: "resizeParent",
                                value: function (t) {
                                    document.getElementsByClassName(
                                        "zalo-comment-plugin"
                                    )[0].style.height = t + "px";
                                },
                            },
                            {
                                key: "getTopParentBody",
                                value: function () {
                                    this.iframe &&
                                        this.iframe.contentWindow &&
                                        this.iframe.contentWindow.postMessage(
                                            {
                                                cmd: "open_modal_confirm_comment",
                                                top: this.element.getBoundingClientRect()
                                                    .top,
                                            },
                                            "*"
                                        );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    this.validate(this.data) &&
                                        ((this.iframe =
                                            document.createElement("iframe")),
                                        (this.iframe.frameBorder = 0),
                                        (this.iframe.allowFullscreen = "true"),
                                        (this.iframe.scrolling = "false"),
                                        (this.iframe.height = "100%"),
                                        (this.iframe.width = "100%"),
                                        (this.element.style.display = "block"),
                                        (this.element.innerHTML = ""),
                                        (this.iframe.src =
                                            "https://sp.zalo.me/plugins/comment" +
                                            a.default.jsonToQueryString(
                                                this.data
                                            )),
                                        this.element.appendChild(this.iframe));
                                },
                            },
                            {
                                key: "destroy",
                                value: function () {
                                    null != this.iframe && this.iframe.remove(),
                                        null != this.element &&
                                            this.element.removeEventListener(
                                                "zcomment_reload",
                                                this.onButtonClick
                                            );
                                },
                            },
                            {
                                key: "getIframe",
                                get: function () {
                                    return this.iframe;
                                },
                            },
                        ]),
                        t
                    );
                })();
                e.default = l;
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i = a(n(0)),
                    r = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                (r.enumerable = r.enumerable || !1),
                                    (r.configurable = !0),
                                    "value" in r && (r.writable = !0),
                                    (0, i.default)(t, r.key, r);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })(),
                    o = a(n(9));
                function a(t) {
                    return t && t.__esModule ? t : { default: t };
                }
                var s = (function () {
                    function t(e, n) {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                            (this.element = e),
                            (this.data = this.getDataFromElement(e)),
                            (this.data.id = n);
                    }
                    return (
                        r(t, [
                            {
                                key: "getDataFromElement",
                                value: function (t) {
                                    var e = {};
                                    return (
                                        (e.oaid = t.getAttribute("data-oaid")),
                                        e
                                    );
                                },
                            },
                            {
                                key: "validate",
                                value: function () {
                                    return (
                                        !!this.data.oaid ||
                                        (console.warn(
                                            "[Zalo Social Plugin]",
                                            "The follow button have no data-oaid attribute"
                                        ),
                                        !1)
                                    );
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    this.validate() &&
                                        ((this.iframe =
                                            document.createElement("iframe")),
                                        (this.iframe.frameBorder = 0),
                                        (this.iframe.allowFullscreen = "true"),
                                        (this.iframe.scrolling = "no"),
                                        (this.element.style.overflow =
                                            "hidden"),
                                        (this.element.style.display =
                                            "inline-block"),
                                        (this.iframe.width = "40px"),
                                        (this.iframe.height = "40px"),
                                        this.data.customize
                                            ? ((this.element.style.position =
                                                  "relative"),
                                              (this.iframe.width =
                                                  this.element.scrollWidth),
                                              (this.iframe.height =
                                                  this.element.scrollHeight),
                                              (this.iframe.style.position =
                                                  "absolute"),
                                              (this.iframe.style.opacity =
                                                  "0.000000000000001"),
                                              (this.iframe.style.left = "0px"),
                                              (this.iframe.style.top = "0px"))
                                            : (this.element.innerHTML = ""),
                                        (this.iframe.src =
                                            "https://button-call.zalo.me" +
                                            o.default.jsonToQueryString(
                                                this.data
                                            )),
                                        this.element.appendChild(this.iframe));
                                },
                            },
                            {
                                key: "showQRModal",
                                value: function (t, e) {
                                    (this.overlayDiv =
                                        document.createElement("div")),
                                        (this.overlayDiv.id = "zl-modal"),
                                        (this.overlayDiv.style.cssText =
                                            "position:fixed;width:100%;height:100vh;z-index:1001;background:rgba(0, 0, 0, 0.5);left:0;top:0;display:flex;justify-content:center"),
                                        (this.modalDiv =
                                            document.createElement("div")),
                                        (this.modalDiv.id =
                                            "zl-modal__container"),
                                        (this.modalDiv.style.cssText =
                                            "position: fixed; z-index: 1002;width: 400px;height: 434px;background:#FFFFFF;border-radius:8px;top:80px;display:flex;flex-direction:column;align-items:center;justify-content:center;"),
                                        (this.QRImg =
                                            document.createElement("img")),
                                        (this.QRImg.id =
                                            "zl-modal__container__qr"),
                                        (this.QRImg.src = t),
                                        (this.QRImg.style.cssText =
                                            "width:300.18px;height:300.18px;object-fit: contain;"),
                                        (this.textP =
                                            document.createElement("p"));
                                    var n = document.createTextNode(e);
                                    this.textP.appendChild(n),
                                        (this.textP.style.cssText =
                                            "font-family:Roboto;font-style:normal;font-weight:normal;font-size: 14px;line-height:18px;color: #667685;margin-top:16px;"),
                                        this.modalDiv.appendChild(this.QRImg),
                                        this.modalDiv.appendChild(this.textP),
                                        this.overlayDiv.appendChild(
                                            this.modalDiv
                                        ),
                                        document
                                            .getElementsByTagName("body")[0]
                                            .appendChild(this.overlayDiv),
                                        window.addEventListener(
                                            "click",
                                            function (t) {
                                                if (
                                                    !document.getElementById(
                                                        "zl-modal__container"
                                                    ) ||
                                                    !document
                                                        .getElementById(
                                                            "zl-modal__container"
                                                        )
                                                        .contains(t.target)
                                                ) {
                                                    var e =
                                                        document.getElementById(
                                                            "zl-modal"
                                                        );
                                                    e && e.remove();
                                                }
                                            }
                                        );
                                },
                            },
                            {
                                key: "reload",
                                value: function () {
                                    this.iframe.contentWindow.postMessage(
                                        "close_zlogin_popup",
                                        "https://button-call.zalo.me"
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })();
                e.default = s;
            },
            function (t, e) {
                function n() {}
                function i(t, e) {
                    return Math.floor(Math.random() * (e - t + 1)) + t;
                }
                (n.maxFromBits = function (t) {
                    return Math.pow(2, t);
                }),
                    (n.limitUI04 = n.maxFromBits(4)),
                    (n.limitUI06 = n.maxFromBits(6)),
                    (n.limitUI08 = n.maxFromBits(8)),
                    (n.limitUI12 = n.maxFromBits(12)),
                    (n.limitUI14 = n.maxFromBits(14)),
                    (n.limitUI16 = n.maxFromBits(16)),
                    (n.limitUI32 = n.maxFromBits(32)),
                    (n.limitUI40 = n.maxFromBits(40)),
                    (n.limitUI48 = n.maxFromBits(48)),
                    (n.randomUI04 = function () {
                        return i(0, n.limitUI04 - 1);
                    }),
                    (n.randomUI06 = function () {
                        return i(0, n.limitUI06 - 1);
                    }),
                    (n.randomUI08 = function () {
                        return i(0, n.limitUI08 - 1);
                    }),
                    (n.randomUI12 = function () {
                        return i(0, n.limitUI12 - 1);
                    }),
                    (n.randomUI14 = function () {
                        return i(0, n.limitUI14 - 1);
                    }),
                    (n.randomUI16 = function () {
                        return i(0, n.limitUI16 - 1);
                    }),
                    (n.randomUI32 = function () {
                        return i(0, n.limitUI32 - 1);
                    }),
                    (n.randomUI40 = function () {
                        return (
                            (0 | (Math.random() * (1 << 30))) +
                            (0 | (1024 * Math.random())) * (1 << 30)
                        );
                    }),
                    (n.randomUI48 = function () {
                        return (
                            (0 | (Math.random() * (1 << 30))) +
                            (0 | (Math.random() * (1 << 18))) * (1 << 30)
                        );
                    }),
                    (n.paddedString = function (t, e, n) {
                        n = n || "0";
                        for (
                            var i = e - (t = String(t)).length;
                            i > 0;
                            i >>>= 1, n += n
                        )
                            1 & i && (t = n + t);
                        return t;
                    }),
                    (n.prototype.fromParts = function (t, e, i, r, o, a) {
                        return (
                            (this.version = (i >> 12) & 15),
                            (this.hex =
                                n.paddedString(t.toString(16), 8) +
                                "-" +
                                n.paddedString(e.toString(16), 4) +
                                "-" +
                                n.paddedString(i.toString(16), 4) +
                                "-" +
                                n.paddedString(r.toString(16), 2) +
                                n.paddedString(o.toString(16), 2) +
                                "-" +
                                n.paddedString(a.toString(16), 12)),
                            this
                        );
                    }),
                    (n.prototype.toString = function () {
                        return this.hex;
                    }),
                    (n.prototype.toURN = function () {
                        return "urn:uuid:" + this.hex;
                    }),
                    (n.prototype.toBytes = function () {
                        for (
                            var t = this.hex.split("-"), e = [], n = 0, i = 0;
                            i < t.length;
                            i++
                        )
                            for (var r = 0; r < t[i].length; r += 2)
                                e[n++] = parseInt(t[i].substr(r, 2), 16);
                        return e;
                    }),
                    (n.prototype.equals = function (t) {
                        return t instanceof UUID && this.hex === t.hex;
                    }),
                    (n.getTimeFieldValues = function (t) {
                        var e = t - Date.UTC(1582, 9, 15),
                            n = ((e / 4294967296) * 1e4) & 268435455;
                        return {
                            low: (1e4 * (268435455 & e)) % 4294967296,
                            mid: 65535 & n,
                            hi: n >>> 16,
                            timestamp: e,
                        };
                    }),
                    (n._create4 = function () {
                        return new n().fromParts(
                            n.randomUI32(),
                            n.randomUI16(),
                            16384 | n.randomUI12(),
                            128 | n.randomUI06(),
                            n.randomUI08(),
                            n.randomUI48()
                        );
                    }),
                    (n._create1 = function () {
                        var t = new Date().getTime(),
                            e = n.randomUI14(),
                            i =
                                1099511627776 * (1 | n.randomUI08()) +
                                n.randomUI40(),
                            r = n.randomUI04(),
                            o = 0;
                        t != o
                            ? (t < o && e++, (o = t), (r = n.randomUI04()))
                            : Math.random() < 0.25 && r < 9984
                            ? (r += 1 + n.randomUI04())
                            : e++;
                        var a = n.getTimeFieldValues(o),
                            s = a.low + r,
                            l = (4095 & a.hi) | 4096,
                            u = ((e &= 16383) >>> 8) | 128,
                            h = 255 & e;
                        return new n().fromParts(s, a.mid, l, u, h, i);
                    }),
                    (n.create = function (t) {
                        return this["_create" + (t = t || 4)]();
                    }),
                    (n.fromTime = function (t, e) {
                        e = e || !1;
                        var i = n.getTimeFieldValues(t),
                            r = i.low,
                            o = (4095 & i.hi) | 4096;
                        return !1 === e
                            ? new n().fromParts(r, i.mid, o, 0, 0, 0)
                            : new n().fromParts(
                                  r,
                                  i.mid,
                                  o,
                                  128 | n.limitUI06,
                                  n.limitUI08 - 1,
                                  n.limitUI48 - 1
                              );
                    }),
                    (n.firstFromTime = function (t) {
                        return n.fromTime(t, !1);
                    }),
                    (n.lastFromTime = function (t) {
                        return n.fromTime(t, !0);
                    }),
                    (n.fromURN = function (t) {
                        var e;
                        return (e =
                            /^(?:urn:uuid:|\{)?([0-9a-f]{8})-([0-9a-f]{4})-([0-9a-f]{4})-([0-9a-f]{2})([0-9a-f]{2})-([0-9a-f]{12})(?:\})?$/i.exec(
                                t
                            ))
                            ? new n().fromParts(
                                  parseInt(e[1], 16),
                                  parseInt(e[2], 16),
                                  parseInt(e[3], 16),
                                  parseInt(e[4], 16),
                                  parseInt(e[5], 16),
                                  parseInt(e[6], 16)
                              )
                            : null;
                    }),
                    (n.fromBytes = function (t) {
                        if (t.length < 5) return null;
                        for (
                            var e = "", i = 0, r = [4, 2, 2, 2, 6], o = 0;
                            o < r.length;
                            o++
                        ) {
                            for (var a = 0; a < r[o]; a++) {
                                var s = t[i++].toString(16);
                                1 == s.length && (s = "0" + s), (e += s);
                            }
                            6 !== r[o] && (e += "-");
                        }
                        return n.fromURN(e);
                    }),
                    (n.fromBinary = function (t) {
                        for (var e = [], i = 0; i < t.length; i++)
                            if (
                                ((e[i] = t.charCodeAt(i)),
                                e[i] > 255 || e[i] < 0)
                            )
                                throw new Error(
                                    "Unexpected byte in binary data."
                                );
                        return n.fromBytes(e);
                    }),
                    (n.new = function () {
                        return this.create(4);
                    }),
                    (n.newTS = function () {
                        return this.create(1);
                    }),
                    (t.exports = n);
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i,
                    r = n(0),
                    o = (i = r) && i.__esModule ? i : { default: i },
                    a = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                (i.enumerable = i.enumerable || !1),
                                    (i.configurable = !0),
                                    "value" in i && (i.writable = !0),
                                    (0, o.default)(t, i.key, i);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })();
                var s = (function () {
                    function t() {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                    }
                    return (
                        a(t, null, [
                            {
                                key: "isMaliciousScheme",
                                value: function (t) {
                                    try {
                                        return (
                                            "javascript:" == new URL(t).protocol
                                        );
                                    } catch (t) {
                                        return !1;
                                    }
                                },
                            },
                        ]),
                        t
                    );
                })();
                e.default = s;
            },
            function (t, e, n) {
                "use strict";
                Object.defineProperty(e, "__esModule", { value: !0 });
                var i,
                    r = n(0),
                    o = (i = r) && i.__esModule ? i : { default: i },
                    a = (function () {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var i = e[n];
                                (i.enumerable = i.enumerable || !1),
                                    (i.configurable = !0),
                                    "value" in i && (i.writable = !0),
                                    (0, o.default)(t, i.key, i);
                            }
                        }
                        return function (e, n, i) {
                            return n && t(e.prototype, n), i && t(e, i), e;
                        };
                    })();
                var s = (function () {
                    function t() {
                        !(function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t);
                    }
                    return (
                        a(t, null, [
                            {
                                key: "loadFile",
                                value: function (t, e) {
                                    var n = null;
                                    "js" == e
                                        ? ((n =
                                              document.createElement(
                                                  "script"
                                              )).setAttribute(
                                              "type",
                                              "text/javascript"
                                          ),
                                          n.setAttribute("src", t))
                                        : "css" == e &&
                                          ((n =
                                              document.createElement(
                                                  "link"
                                              )).setAttribute(
                                              "rel",
                                              "stylesheet"
                                          ),
                                          n.setAttribute("type", "text/css"),
                                          n.setAttribute("href", t)),
                                        void 0 !== n &&
                                            document.body.appendChild(n);
                                },
                            },
                        ]),
                        t
                    );
                })();
                e.default = s;
            },
        ]);
    });
} catch (e) {
    get(
        "https://sp.zalo.me/tracking/log?error=" +
            encodeURIComponent(e) +
            "&data=InitSDK"
    );
    throw new Error(e);
}

function get(url) {
    if (window.XMLHttpRequest) {
        try {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", url, true);
            xmlHttp.send(null);
        } catch (err) {
            console.warn("XMLHttpRequest is not support");
        }
    }
}

if (typeof ZA === "undefined") {
    window["_zap"] = window["_zap"] || [];
    window["_zap"].push(["_setAccount", "ZA-43317204427353"]);
    (function (e, t, n, r, a, o, c) {
        (o = t.createElement(n)),
            (c = t.getElementsByTagName(n)[0]),
            (o.async = 1),
            (o.src = r + "?" + Math.floor(new Date().getTime() / 86400000)),
            c.parentNode.insertBefore(o, c);
    })(window, document, "script", "//za.zdn.vn/v3/za.js", "ZA");
}
