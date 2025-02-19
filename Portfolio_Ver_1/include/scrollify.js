! function(t, o) {

    "use strict";
    "function" == typeof define && define.amd ?
        define(["jquery"],

            function(e) {
                return o(e, t, t.document)
            }) : "object" == typeof module && module.
    exports ?
        module.exports = o(require("jquery"), t, t.document) : o(jQuery, t, t.document)
}

("undefined" != typeof window ? window : this,

    function(r, s, i, t) {
        "use strict";

        var u, l, h, f, d, p,
            m = [],
            g = [],
            v = [],
            y = [],
            w = 0,
            a = 0,
            S = 1,
            E = !1,
            H = r(s),
            b = H.scrollTop(),
            M = !1,
            x = !1,
            T = !1,
            D = !1,
            I = [],
            L = (new Date).getTime(),
            c = !0,
            N = !1,
            k = 0,
            O = "onwheel" in i ? "wheel" : i.onmousewheel !== t ?
            "mousewheel" : "DOMMouseScroll",
            z = {
                passive: !1
            },
            R = {
                section: ".section",
                sectionName: "section-name",
                interstitialSection: "",
                easing: "easeOutExpo",
                scrollSpeed: 1100,
                offset: 0,
                scrollbars: !0,
                target: "html,body",
                standardScrollElements: !1,
                setHeights: !0,
                overflowScroll: !0,
                updateHash: !0,
                touchScroll: !0,
                before: function() {},
                after: function() {},
                afterResize: function() {},
                afterRender: function() {}
            };

        function j() {
            return s.innerHeight + R.offset
        }

        function C(e, t, o, n) {

            if (a === e && (o = !1), !0 === D) return 1;

            if (g[e]) {

                if (M = !1, !0 === c && (c = !1, R.afterRender()),
                    o && "function" == typeof R.before && !1 === R.before(e, v)
                )
                    return 1;

                if (S = 1, k = e ? m[e] : 0,
                    !1 === c && e < a && !1 === n && y[e] && (h = j(),
                        S = parseInt(v[e].outerHeight() / h),
                        k = parseInt(m[e]) + (v[e].outerHeight() - h)),
                    R.updateHash && R.sectionName && (!0 !== c || 0 !== e))

                    if (history.pushState) try {
                        history.replaceState(null, null, g[e])
                    } catch (e) {
                        s.console && console.warn("Scrollify warning: Page must be hosted to manipulate the hash value.")
                    } else s.location.hash = g[e];

                if (a = e, t) r(R.target).stop().scrollTop(k),
                    o && R.after(e, v);

                else {
                    if (x = !0,
                        r().velocity ?
                        r(R.target).stop().velocity("scroll", {
                            duration: R.scrollSpeed,
                            easing: R.easing,
                            offset: k,
                            mobileHA: !1
                        }) : r(R.target).stop().animate({
                            scrollTop: k
                        }, R.scrollSpeed, R.easing),
                        s.location.hash.length && R.sectionName && s.console)
                        try {
                            r(s.location.hash).length && console.warn("Scrollify warning: ID matches hash value - this will cause the page to anchor.")
                        }

                    catch (e) {

                    }
                    r(R.target).promise().done(
                        function() {
                            c = x = !1, o && R.after(e, v)
                        }
                    )
                }
            }
        }

        function Y(r) {
            function e(e) {
                for (
                    var t = 0,
                        o = r.slice(Math.max(r.length - e, 1)),
                        n = 0; n < o.length; n++
                )
                    t += o[n];

                return Math.ceil(t / e)
            }

            var t = e(10);
            return e(70) <= t
        }

        function e(e) {
            function t(e) {
                r().velocity ?
                    r(R.target).stop().velocity("scroll", {
                        duration: R.scrollSpeed,
                        easing: R.easing,
                        offset: e,
                        mobileHA: !1
                    }) : r(R.target).stop().animate({
                        scrollTop: e
                    }, R.scrollSpeed, R.easing)
            }

            function o(e) {
                e && (b = H.scrollTop());

                var t = R.section;
                y = [],
                    R.interstitialSection.length && (t += "," + R.interstitialSection),
                    !1 === R.scrollbars && (R.overflowScroll = !1),
                    h = j(),
                    r(t).each(function(e) {
                        var t = r(this);
                        R.setHeights ?
                            t.is(
                                R.interstitialSection) ?
                            y[e] = !1 : t.css("height", "auto").outerHeight() < h || "hidden" === t.css("overflow") ?
                            (t.css({
                                height: h
                            }), y[e] = !1) : (t.css({
                                    height: t.outerHeight()
                                }),
                                R.overflowScroll ?
                                y[e] = !0 : y[e] = !1) : t.outerHeight() < h || !1 === R.overflowScroll ?
                            y[e] = !1 : y[e] = !0
                    }),
                    e && H.scrollTop(b)
            }

            function n(e) {
                var o = R.section;
                R.interstitialSection.length && (o += "," + R.interstitialSection),
                    m = [], g = [], v = [],
                    r(o).each(
                        function(e) {
                            var t = r(this);
                            m[e] = 0 < e ?
                                parseInt(t.offset().top) + R.
                            offset: parseInt(t.offset().top),
                                R.sectionName && t.data(R.sectionName) ?
                                g[e] = "#" + t.data(R.sectionName).toString().replace(/ /g, "-") : !1 === t.
                            is(R.interstitialSection) ?
                                g[e] = "#" + (e + 1) : (g[e] = "#", e === r(o).length - 1 && 1 < e && (m[e] = m[e - 1] + (parseInt(r(r(o)[e - 1]).outerHeight()) - parseInt(r(s).height())) + parseInt(t.outerHeight()))),
                                v[e] = t;
                            try {
                                r(g[e]).length && s.console && console.
                                warn("Scrollify warning: Section names can't match IDs - this will cause the browser to anchor.")
                            } catch (e) {}
                            s.location.hash === g[e] && (w = e, E = !0)
                        }),
                    !0 === e && C(w, !1, !1, !1)
            }

            function a() {
                return y[w] &&
                    (b = H.scrollTop()) > parseInt(m[w]) ?
                    void 0 : 1
            }

            function c() {
                return !y[w] || (b = H.scrollTop(), h = j(),
                    b < parseInt(m[w]) + (v[w].outerHeight() - h) - 28 ? void 0 : 1)
            }
            N = !0,
                r.easing.easeOutExpo = function(e, t, o, n, r) {
                    return t == r ?
                        o + n : n * (1 - Math.pow(2, -10 * t / r)) + o
                },
                d = {
                    touches: {
                        touchstart: {
                            y: -1,
                            x: -1
                        },
                        touchmove: {
                            y: -1,
                            x: -1
                        },
                        touchend: !(f = {
                            handleMousedown: function() {
                                if (!0 === D) return !0;
                                T = M = !1
                            },
                            handleMouseup: function() {
                                if (!0 === D) return !0;
                                M = !0, T && f.calculateNearest(!1, !0)
                            },
                            handleScroll: function() {
                                if (!0 === D) return !0;
                                u && clearTimeout(u),
                                    u = setTimeout(function() {
                                        return !(T = !0) !== M && (M = !1,
                                            void f.calculateNearest(!1, !0))
                                    }, 200)
                            },
                            calculateNearest: function(e, t) {
                                b = H.scrollTop();
                                for (
                                    var o,
                                        n = 1,
                                        r = m.length,
                                        s = 0, i = Math.abs(m[0] - b); n < r; n++)
                                    (o = Math.abs(m[n] - b)) < i && (i = o, s = n);
                                (c() && w < s || a()) && C(w = s, e, t, !1)
                            },
                            wheelHandler: function(e) {
                                if (!0 === D) return !0;
                                if (R.standardScrollElements && (r(e.target).is(R.standardScrollElements) || r(e.target).closest(R.standardScrollElements).length))
                                    return !0;
                                y[w] || e.preventDefault();
                                var t = (new Date).getTime(),
                                    o = (e = e || s.event).originalEvent ?
                                    e.originalEvent.wheelDelta || -e.originalEvent.deltaY || -e.originalEvent.detail : e.wheelDelta || -e.deltaY || -e.detail,
                                    n = Math.max(-1, Math.min(1, o));
                                if (149 < I.length && I.shift(), I.push(Math.abs(o)),
                                    200 < t - L && (I = []), L = t, x) return !1;
                                if (n < 0) {
                                    if (w < m.length - 1 && c()) {
                                        if (!Y(I)) return !1;
                                        e.preventDefault(),
                                            C(++w, !(x = !0), !0, !1)
                                    }
                                } else if (0 < n && 0 < w && a()) {
                                    if (!Y(I)) return !1;
                                    e.preventDefault(),
                                        C(--w, !(x = !0), !0, !1)
                                }
                            },
                            keyHandler: function(e) {
                                return !0 === D || !1 === i.activeElement.readOnly || (
                                    !(!R.standardScrollElements || !r(e.target).is(R.standardScrollElements) &&
                                        !r(e.target).closest(R.standardScrollElements).length) || !0 !== x &&
                                    void(38 == e.keyCode || 33 == e.keyCode ?
                                        0 < w && a() && (e.preventDefault(),
                                            C(--w, !1, !0, !1)) : 40 != e.keyCode && 34 != e.keyCode || w < m.length - 1 && c() && (e.preventDefault(),
                                            C(++w, !1, !0, !1))))
                            },
                            init: function() {
                                R.scrollbars ?
                                    (
                                        H.on("mousedown", f.handleMousedown),
                                        H.on("mouseup", f.handleMouseup),
                                        H.on("scroll", f.handleScroll)) : r("body").css({
                                        overflow: "hidden"
                                    }),
                                    s.addEventListener(O, f.wheelHandler, {
                                        passive: !1
                                    }),
                                    H.on("keydown", f.keyHandler)
                            }
                        }),
                        direction: "undetermined"
                    },
                    options: {
                        distance: 30,
                        timeGap: 800,
                        timeStamp: (new Date).getTime()
                    },
                    touchHandler: function(e) {
                        if (!0 === D) return !0;
                        if (R.standardScrollElements &&
                            (r(e.target).is(R.standardScrollElements) || r(e.target).closest(R.standardScrollElements).length))
                            return !0;
                        var t;
                        if (void 0 !== e && void 0 !== e.touches) switch (t = e.touches[0], e.type) {
                            case "touchstart":
                                d.touches.touchstart.y = t.pageY,
                                    d.touches.touchmove.y = -1,
                                    d.touches.touchstart.x = t.pageX,
                                    d.touches.touchmove.x = -1,
                                    d.options.timeStamp = (new Date).getTime(),
                                    d.touches.touchend = !1;
                            case "touchmove":
                                d.touches.touchmove.y = t.pageY,
                                    d.touches.touchmove.x = t.pageX,
                                    d.touches.touchstart.y !== d.touches.touchmove.y &&
                                    Math.abs(d.touches.touchstart.y - d.touches.touchmove.y) >
                                    Math.abs(d.touches.touchstart.x - d.touches.touchmove.x) &&
                                    (e.preventDefault(), d.touches.direction = "y",
                                        d.options.timeStamp + d.options.timeGap < (new Date).getTime() &&
                                        0 == d.touches.touchend && (d.touches.touchend = !0,
                                            -1 < d.touches.touchstart.y && Math.abs(d.touches.touchmove.y - d.touches.touchstart.y) > d.options.distance &&
                                            (d.touches.touchstart.y < d.touches.touchmove.y ? d.up() : d.down())));
                                break;
                            case "touchend":
                                !1 === d.touches[e.type] && (d.touches[e.type] = !0,
                                    -1 < d.touches.touchstart.y && -1 < d.touches.touchmove.y && "y" === d.touches.direction && (Math.abs(d.touches.touchmove.y - d.touches.touchstart.y) >
                                        d.options.distance && (d.touches.touchstart.y < d.touches.touchmove.y ?
                                            d.up() : d.down()),
                                        d.touches.touchstart.y = -1,
                                        d.touches.touchstart.x = -1,
                                        d.touches.direction = "undetermined"))
                        }
                    },
                    down: function() {
                        w < m.length && (c() && w < m.length - 1 ? C(++w, !1, !0, !1) : (h = j(), Math.floor(v[w].height() / h) > S ?
                            (t(parseInt(m[w]) + h * S),
                                S += 1) : t(parseInt(m[w]) + (v[w].outerHeight() - h))))
                    },
                    up: function() {
                        0 <= w && (a() && 0 < w ?
                            C(--w, !1, !0, !1) : 2 < S ?
                            (h = j(), --S, t(parseInt(m[w]) + h * S)) : (S = 1, t(parseInt(m[w]))))
                    },
                    init: function() {
                        i.addEventListener && R.touchScroll && (i.addEventListener("touchstart", d.touchHandler, z),
                            i.addEventListener("touchmove", d.touchHandler, z),
                            i.addEventListener("touchend", d.touchHandler, z))
                    }
                },
                p = {
                    refresh: function(e, t) {
                        clearTimeout(l),
                            l = setTimeout(function() {
                                o(!0), n(t), e && R.afterResize()
                            }, 400)
                    },
                    handleUpdate: function() {
                        p.refresh(!1, !1)
                    },
                    handleResize: function() {
                        p.refresh(!0, !1)
                    },
                    handleOrientation: function() {
                        p.refresh(!0, !0)
                    }
                },
                R = r.extend(R, e), o(!1), n(!1), !0 === E ?
                C(w, !1, !0, !0) : setTimeout(function() {
                    f.calculateNearest(!0, !1)
                }, 200),
                m.length && (f.init(), d.init(), H.on("resize", p.handleResize),
                    i.addEventListener && s.addEventListener("orientationchange", p.handleOrientation, !1))
        }

        function o(e, t) {
            for (var o = g.length; 0 <= o; o--) "string" == typeof e ?
                g[o] === e && C(w = o, t, !0, !0) : o === e && C(w = o, t, !0, !0)
        }
        return e.move = function(e) {
                if (e === t) return !1;
                "number" != typeof e && e.originalEvent && (e = r(this).attr("href")), o(e, !1)
            }, e.instantMove = function(e) {
                if (e === t) return !1;
                o(e, !0)
            },
            e.next = function() {
                w < g.length && C(w += 1, !1, !0, !0)
            }, e.previous = function() {
                0 < w && C(--w, !1, !0, !0)
            }, e.instantNext = function() {
                w < g.length && C(w += 1, !0, !0, !0)
            }, e.instantPrevious = function() {
                0 < w && C(--w, !0, !0, !0)
            }, e.destroy = function() {
                if (!N) return !1;
                R.setHeights && r(R.section).each(function() {
                        r(this).css("height", "auto")
                    }),
                    H.off("resize", p.handleResize),
                    R.scrollbars && (H.off("mousedown", f.handleMousedown),
                        H.off("mouseup", f.handleMouseup), H.off("scroll", f.handleScroll)),
                    s.removeEventListener(O, f.wheelHandler),
                    H.off("keydown", f.keyHandler),
                    i.addEventListener && R.touchScroll && (i.removeEventListener("touchstart", d.touchHandler, z),
                        i.removeEventListener("touchmove", d.touchHandler, z),
                        i.removeEventListener("touchend", d.touchHandler, z)),
                    m = [], g = [], v = [], y = [], N = !(c = !0)
            },
            e.update = function() {
                if (!N) return !1;
                p.handleUpdate()
            },
            e.current = function() {
                return v[w]
            },
            e.currentIndex = function() {
                return w
            },
            e.disable = function() {
                D = !0
            },
            e.enable = function() {
                D = !1,
                    N && f.calculateNearest(!1, !1)
            },
            e.isDisabled = function() {
                return D
            },
            e.setOptions = function(e) {
                if (!N) return !1;
                "object" == typeof e ? (R = r.extend(R, e),
                    p.handleUpdate()) : s.console && console.
                warn("Scrollify warning: setOptions expects an object.")
            },
            r.scrollify = e
    });