/*!
 * Bootstrap v5.2.0-beta1 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper)
}(this, (function(t) {
    "use strict";

    function e(t) {
        if (t && t.__esModule) return t;
        const e = Object.create(null, {
            [Symbol.toStringTag]: {
                value: "Module"
            }
        });
        if (t)
            for (const i in t)
                if ("default" !== i) {
                    const s = Object.getOwnPropertyDescriptor(t, i);
                    Object.defineProperty(e, i, s.get ? s : {
                        enumerable: !0,
                        get: () => t[i]
                    })
                } return e.default = t, Object.freeze(e)
    }
    const i = e(t),
        s = "transitionend",
        n = t => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let i = t.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), e = i && "#" !== i ? i.trim() : null
            }
            return e
        },
        o = t => {
            const e = n(t);
            return e && document.querySelector(e) ? e : null
        },
        r = t => {
            const e = n(t);
            return e ? document.querySelector(e) : null
        },
        a = t => {
            t.dispatchEvent(new Event(s))
        },
        l = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        c = t => l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(t) : null,
        h = t => {
            if (!l(t) || 0 === t.getClientRects().length) return !1;
            const e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
                i = t.closest("details:not([open])");
            if (!i) return e;
            if (i !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== i) return !1;
                if (null === e) return !1
            }
            return e
        },
        d = t => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
        u = t => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null
            }
            return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null
        },
        _ = () => {},
        g = t => {
            t.offsetHeight
        },
        f = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
        p = [],
        m = () => "rtl" === document.documentElement.dir,
        b = t => {
            var e;
            e = () => {
                const e = f();
                if (e) {
                    const i = t.NAME,
                        s = e.fn[i];
                    e.fn[i] = t.jQueryRajdhaniface, e.fn[i].Constructor = t, e.fn[i].noConflict = () => (e.fn[i] = s, t.jQueryRajdhaniface)
                }
            }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", (() => {
                for (const t of p) t()
            })), p.push(e)) : e()
        },
        v = t => {
            "function" == typeof t && t()
        },
        y = (t, e, i = !0) => {
            if (!i) return void v(t);
            const n = (t => {
                if (!t) return 0;
                let {
                    transitionDuration: e,
                    transitionDelay: i
                } = window.getComputedStyle(t);
                const s = Number.parseFloat(e),
                    n = Number.parseFloat(i);
                return s || n ? (e = e.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0
            })(e) + 5;
            let o = !1;
            const r = ({
                target: i
            }) => {
                i === e && (o = !0, e.removeEventListener(s, r), v(t))
            };
            e.addEventListener(s, r), setTimeout((() => {
                o || a(e)
            }), n)
        },
        w = (t, e, i, s) => {
            const n = t.length;
            let o = t.indexOf(e);
            return -1 === o ? !i && s ? t[n - 1] : t[0] : (o += i ? 1 : -1, s && (o = (o + n) % n), t[Math.max(0, Math.min(o, n - 1))])
        },
        A = /[^.]*(?=\..*)\.|.*/,
        T = /\..*/,
        E = /::\d+$/,
        C = {};
    let k = 1;
    const L = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        O = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function I(t, e) {
        return e && `${e}::${k++}` || t.uidEvent || k++
    }

    function S(t) {
        const e = I(t);
        return t.uidEvent = e, C[e] = C[e] || {}, C[e]
    }

    function D(t, e, i = null) {
        return Object.values(t).find((t => t.originalHandler === e && t.delegationSelector === i))
    }

    function N(t, e, i) {
        const s = "string" == typeof e,
            n = s ? i : e;
        let o = j(t);
        return O.has(o) || (o = t), [s, n, o]
    }

    function P(t, e, i, s, n) {
        if ("string" != typeof e || !t) return;
        if (i || (i = s, s = null), e in L) {
            const t = t => function(e) {
                if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
            };
            s ? s = t(s) : i = t(i)
        }
        const [o, r, a] = N(e, i, s), l = S(t), c = l[a] || (l[a] = {}), h = D(c, r, o ? i : null);
        if (h) return void(h.oneOff = h.oneOff && n);
        const d = I(r, e.replace(A, "")),
            u = o ? function(t, e, i) {
                return function s(n) {
                    const o = t.querySelectorAll(e);
                    for (let {
                            target: r
                        } = n; r && r !== this; r = r.parentNode)
                        for (const a of o)
                            if (a === r) return n.delegateTarget = r, s.oneOff && $.off(t, n.type, e, i), i.apply(r, [n])
                }
            }(t, i, s) : function(t, e) {
                return function i(s) {
                    return s.delegateTarget = t, i.oneOff && $.off(t, s.type, e), e.apply(t, [s])
                }
            }(t, i);
        u.delegationSelector = o ? i : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o)
    }

    function x(t, e, i, s, n) {
        const o = D(e[i], s, n);
        o && (t.removeEventListener(i, o, Boolean(n)), delete e[i][o.uidEvent])
    }

    function M(t, e, i, s) {
        const n = e[i] || {};
        for (const o of Object.keys(n))
            if (o.includes(s)) {
                const s = n[o];
                x(t, e, i, s.originalHandler, s.delegationSelector)
            }
    }

    function j(t) {
        return t = t.replace(T, ""), L[t] || t
    }
    const $ = {
            on(t, e, i, s) {
                P(t, e, i, s, !1)
            },
            one(t, e, i, s) {
                P(t, e, i, s, !0)
            },
            off(t, e, i, s) {
                if ("string" != typeof e || !t) return;
                const [n, o, r] = N(e, i, s), a = r !== e, l = S(t), c = e.startsWith(".");
                if (void 0 !== o) {
                    if (!l || !l[r]) return;
                    return void x(t, l, r, o, n ? i : null)
                }
                if (c)
                    for (const i of Object.keys(l)) M(t, l, i, e.slice(1));
                const h = l[r] || {};
                for (const i of Object.keys(h)) {
                    const s = i.replace(E, "");
                    if (!a || e.includes(s)) {
                        const e = h[i];
                        x(t, l, r, e.originalHandler, e.delegationSelector)
                    }
                }
            },
            trigger(t, e, i) {
                if ("string" != typeof e || !t) return null;
                const s = f();
                let n = null,
                    o = !0,
                    r = !0,
                    a = !1;
                e !== j(e) && s && (n = s.Event(e, i), s(t).trigger(n), o = !n.isPropagationStopped(), r = !n.isImmediatePropagationStopped(), a = n.isDefaultPrevented());
                const l = new Event(e, {
                    bubbles: o,
                    cancelable: !0
                });
                if (void 0 !== i)
                    for (const t of Object.keys(i)) Object.defineProperty(l, t, {
                        get: () => i[t]
                    });
                return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && n && n.preventDefault(), l
            }
        },
        F = new Map,
        H = {
            set(t, e, i) {
                F.has(t) || F.set(t, new Map);
                const s = F.get(t);
                s.has(e) || 0 === s.size ? s.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)
            },
            get: (t, e) => F.has(t) && F.get(t).get(e) || null,
            remove(t, e) {
                if (!F.has(t)) return;
                const i = F.get(t);
                i.delete(e), 0 === i.size && F.delete(t)
            }
        };

    function z(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t))
        } catch (e) {
            return t
        }
    }

    function q(t) {
        return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
    }
    const B = {
        setDataAttribute(t, e, i) {
            t.setAttribute(`data-bs-${q(e)}`, i)
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${q(e)}`)
        },
        getDataAttributes(t) {
            if (!t) return {};
            const e = {},
                i = Object.keys(t.dataset).filter((t => t.startsWith("bs") && !t.startsWith("bsConfig")));
            for (const s of i) {
                let i = s.replace(/^bs/, "");
                i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = z(t.dataset[s])
            }
            return e
        },
        getDataAttribute: (t, e) => z(t.getAttribute(`data-bs-${q(e)}`))
    };
    class W {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw new Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        _configAfterMerge(t) {
            return t
        }
        _mergeConfigObj(t, e) {
            const i = l(e) ? B.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...l(e) ? B.getDataAttributes(e) : {},
                ..."object" == typeof t ? t : {}
            }
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const s of Object.keys(e)) {
                const n = e[s],
                    o = t[s],
                    r = l(o) ? "element" : null == (i = o) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(n).test(r)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${r}" but expected type "${n}".`)
            }
            var i
        }
    }
    class R extends W {
        constructor(t, e) {
            super(), (t = c(t)) && (this._element = t, this._config = this._getConfig(e), H.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            H.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null
        }
        _queueCallback(t, e, i = !0) {
            y(t, e, i)
        }
        _getConfig(t) {
            return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        static getInstance(t) {
            return H.get(c(t), this.DATA_KEY)
        }
        static getOrCreateInstance(t, e = {}) {
            return this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
        }
        static get VERSION() {
            return "5.2.0-beta1"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`
        }
    }
    const V = (t, e = "hide") => {
        const i = `click.dismiss${t.EVENT_KEY}`,
            s = t.NAME;
        $.on(document, i, `[data-bs-dismiss="${s}"]`, (function(i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), d(this)) return;
            const n = r(this) || this.closest(`.${s}`);
            t.getOrCreateInstance(n)[e]()
        }))
    };
    class K extends R {
        static get NAME() {
            return "alert"
        }
        close() {
            if ($.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback((() => this._destroyElement()), this._element, t)
        }
        _destroyElement() {
            this._element.remove(), $.trigger(this._element, "closed.bs.alert"), this.dispose()
        }
        static jQueryRajdhaniface(t) {
            return this.each((function() {
                const e = K.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    V(K, "close"), b(K);
    const Q = '[data-bs-toggle="button"]';
    class X extends R {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryRajdhaniface(t) {
            return this.each((function() {
                const e = X.getOrCreateInstance(this);
                "toggle" === t && e[t]()
            }))
        }
    }
    $.on(document, "click.bs.button.data-api", Q, (t => {
        t.preventDefault();
        const e = t.target.closest(Q);
        X.getOrCreateInstance(e).toggle()
    })), b(X);
    const Y = {
            find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
            children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
            parents(t, e) {
                const i = [];
                let s = t.parentNode.closest(e);
                for (; s;) i.push(s), s = s.parentNode.closest(e);
                return i
            },
            prev(t, e) {
                let i = t.previousElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(t, e) {
                let i = t.nextElementSibling;
                for (; i;) {
                    if (i.matches(e)) return [i];
                    i = i.nextElementSibling
                }
                return []
            },
            focusableChildren(t) {
                const e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t => `${t}:not([tabindex^="-"])`)).join(",");
                return this.find(e, t).filter((t => !d(t) && h(t)))
            }
        },
        U = {
            leftCallback: null,
            rightCallback: null,
            endCallback: null
        },
        G = {
            leftCallback: "(function|null)",
            rightCallback: "(function|null)",
            endCallback: "(function|null)"
        };
    class J extends W {
        constructor(t, e) {
            super(), this._element = t, t && J.isSupported() && (this._config = this._getConfig(e), this._deltaX = 0, this._supportpointerEvents = Boolean(window.pointerEvent), this._initEvents())
        }
        static get Default() {
            return U
        }
        static get DefaultType() {
            return G
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            $.off(this._element, ".bs.swipe")
        }
        _start(t) {
            this._supportpointerEvents ? this._eventIspointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX
        }
        _end(t) {
            this._eventIspointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), v(this._config.endCallback)
        }
        _move(t) {
            this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            this._deltaX = 0, e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportpointerEvents ? ($.on(this._element, "pointerdown.bs.swipe", (t => this._start(t))), $.on(this._element, "pointerup.bs.swipe", (t => this._end(t))), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.swipe", (t => this._start(t))), $.on(this._element, "touchmove.bs.swipe", (t => this._move(t))), $.on(this._element, "touchend.bs.swipe", (t => this._end(t))))
        }
        _eventIspointerPenTouch(t) {
            return this._supportpointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType)
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    const Z = "next",
        tt = "prev",
        et = "left",
        it = "right",
        st = "slid.bs.carousel",
        nt = "carousel",
        ot = "active",
        rt = {
            ArrowLeft: it,
            ArrowRight: et
        },
        at = {
            Rajdhanival: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0
        },
        lt = {
            Rajdhanival: "(number|boolean)",
            keyboard: "boolean",
            ride: "(boolean|string)",
            pause: "(string|boolean)",
            touch: "boolean",
            wrap: "boolean"
        };
    class ct extends R {
        constructor(t, e) {
            super(t, e), this._Rajdhanival = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = Y.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === nt && this.cycle()
        }
        static get Default() {
            return at
        }
        static get DefaultType() {
            return lt
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(Z)
        }
        nextWhenVisible() {
            !document.hidden && h(this._element) && this.next()
        }
        prev() {
            this._slide(tt)
        }
        pause() {
            this._isSliding && a(this._element), this._clearRajdhanival()
        }
        cycle() {
            this._clearRajdhanival(), this._updateRajdhanival(), this._Rajdhanival = setRajdhanival((() => this.nextWhenVisible()), this._config.Rajdhanival)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? $.one(this._element, st, (() => this.cycle())) : this.cycle())
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding) return void $.one(this._element, st, (() => this.to(t)));
            const i = this._getItemIndex(this._getActive());
            if (i === t) return;
            const s = t > i ? Z : tt;
            this._slide(s, e[t])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }
        _configAfterMerge(t) {
            return t.defaultRajdhanival = t.Rajdhanival, t
        }
        _addEventListeners() {
            this._config.keyboard && $.on(this._element, "keydown.bs.carousel", (t => this._keydown(t))), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", (() => this.pause())), $.on(this._element, "mouseleave.bs.carousel", (() => this._maybeEnableCycle()))), this._config.touch && J.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (const t of Y.find(".carousel-item img", this._element)) $.on(t, "dragstart.bs.carousel", (t => t.preventDefault()));
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(et)),
                rightCallback: () => this._slide(this._directionToOrder(it)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout((() => this._maybeEnableCycle()), 500 + this._config.Rajdhanival))
                }
            };
            this._swipeHelper = new J(this._element, t)
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = rt[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)))
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t)
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = Y.findOne(".active", this._indicatorsElement);
            e.classList.remove(ot), e.removeAttribute("aria-current");
            const i = Y.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
            i && (i.classList.add(ot), i.setAttribute("aria-current", "true"))
        }
        _updateRajdhanival() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-Rajdhanival"), 10);
            this._config.Rajdhanival = e || this._config.defaultRajdhanival
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const i = this._getActive(),
                s = t === Z,
                n = e || w(this._getItems(), i, s, this._config.wrap);
            if (n === i) return;
            const o = this._getItemIndex(n),
                r = e => $.trigger(this._element, e, {
                    relatedTarget: n,
                    direction: this._orderToDirection(t),
                    from: this._getItemIndex(i),
                    to: o
                });
            if (r("slide.bs.carousel").defaultPrevented) return;
            if (!i || !n) return;
            const a = Boolean(this._Rajdhanival);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = n;
            const l = s ? "carousel-item-start" : "carousel-item-end",
                c = s ? "carousel-item-next" : "carousel-item-prev";
            n.classList.add(c), g(n), i.classList.add(l), n.classList.add(l), this._queueCallback((() => {
                n.classList.remove(l, c), n.classList.add(ot), i.classList.remove(ot, c, l), this._isSliding = !1, r(st)
            }), i, this._isAnimated()), a && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return Y.findOne(".active.carousel-item", this._element)
        }
        _getItems() {
            return Y.find(".carousel-item", this._element)
        }
        _clearRajdhanival() {
            this._Rajdhanival && (clearRajdhanival(this._Rajdhanival), this._Rajdhanival = null)
        }
        _directionToOrder(t) {
            return m() ? t === et ? tt : Z : t === et ? Z : tt
        }
        _orderToDirection(t) {
            return m() ? t === tt ? et : it : t === tt ? it : et
        }
        static jQueryRajdhaniface(t) {
            return this.each((function() {
                const e = ct.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                        e[t]()
                    }
                } else e.to(t)
            }))
        }
    }
    $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", (function(t) {
        const e = r(this);
        if (!e || !e.classList.contains(nt)) return;
        t.preventDefault();
        const i = ct.getOrCreateInstance(e),
            s = this.getAttribute("data-bs-slide-to");
        return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
    })), $.on(window, "load.bs.carousel.data-api", (() => {
        const t = Y.find('[data-bs-ride="carousel"]');
        for (const e of t) ct.getOrCreateInstance(e)
    })), b(ct);
    const ht = "show",
        dt = "collapse",
        ut = "collapsing",
        _t = '[data-bs-toggle="collapse"]',
        gt = {
            toggle: !0,
            parent: null
        },
        ft = {
            toggle: "boolean",
            parent: "(null|element)"
        };
    class pt extends R {
        constructor(t, e) {
            super(t, e), this._isTransitioning = !1, this._triggerArray = [];
            const i = Y.find(_t);
            for (const t of i) {
                const e = o(t),
                    i = Y.find(e).filter((t => t === this._element));
                null !== e && i.length && this._triggerArray.push(t)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return gt
        }
        static get DefaultType() {
            return ft
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t => t !== this._element)).map((t => pt.getOrCreateInstance(t, {
                    toggle: !1
                })))), t.length && t[0]._isTransitioning) return;
            if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(dt), this._element.classList.add(ut), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            const i = `scroll${e[0].toUpperCase()+e.slice(1)}`;
            this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(ut), this._element.classList.add(dt, ht), this._element.style[e] = "", $.trigger(this._element, "shown.bs.collapse")
            }), this._element, !0), this._element.style[e] = `${this._element[i]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            const t = this._getDimension();
            this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`, g(this._element), this._element.classList.add(ut), this._element.classList.remove(dt, ht);
            for (const t of this._triggerArray) {
                const e = r(t);
                e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback((() => {
                this._isTransitioning = !1, this._element.classList.remove(ut), this._element.classList.add(dt), $.trigger(this._element, "hidden.bs.collapse")
            }), this._element, !0)
        }
        _isShown(t = this._element) {
            return t.classList.contains(ht)
        }
        _configAfterMerge(t) {
            return t.toggle = Boolean(t.toggle), t.parent = c(t.parent), t
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(_t);
            for (const e of t) {
                const t = r(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t))
            }
        }
        _getFirstLevelChildren(t) {
            const e = Y.find(":scope .collapse .collapse", this._config.parent);
            return Y.find(t, this._config.parent).filter((t => !e.includes(t)))
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const i of t) i.classList.toggle("collapsed", !e), i.setAttribute("aria-expanded", e)
        }
        static jQueryRajdhaniface(t) {
            const e = {};
            return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each((function() {
                const i = pt.getOrCreateInstance(this, e);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t]()
                }
            }))
        }
    }
    $.on(document, "click.bs.collapse.data-api", _t, (function(t) {
        ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
        const e = o(this),
            i = Y.find(e);
        for (const t of i) pt.getOrCreateInstance(t, {
            toggle: !1
        }).toggle()
    })), b(pt);
    const mt = "dropdown",
        bt = "ArrowUp",
        vt = "ArrowDown",
        yt = "click.bs.dropdown.data-api",
        wt = "keydown.bs.dropdown.data-api",
        At = "show",
        Tt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Et = `${Tt}.show`,
        Ct = ".dropdown-menu",
        kt = m() ? "top-end" : "top-start",
        Lt = m() ? "top-start" : "top-end",
        Ot = m() ? "bottom-end" : "bottom-start",
        It = m() ? "bottom-start" : "bottom-end",
        St = m() ? "left-start" : "right-start",
        Dt = m() ? "right-start" : "left-start",
        Nt = {
            offset: [0, 2],
            boundary: "clippingParents",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null,
            autoClose: !0
        },
        Pt = {
            offset: "(array|string|function)",
            boundary: "(string|element)",
            reference: "(string|element|object)",
            display: "string",
            popperConfig: "(null|object|function)",
            autoClose: "(boolean|string)"
        };
    class xt extends R {
        constructor(t, e) {
            super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = Y.findOne(Ct, this._parent), this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return Nt
        }
        static get DefaultType() {
            return Pt
        }
        static get NAME() {
            return mt
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (d(this._element) || this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            if (!$.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (const t of [].concat(...document.body.children)) $.on(t, "mouseover", _);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(At), this._element.classList.add(At), $.trigger(this._element, "shown.bs.dropdown", t)
            }
        }
        hide() {
            if (d(this._element) || !this._isShown()) return;
            const t = {
                relatedTarget: this._element
            };
            this._completeHide(t)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _completeHide(t) {
            if (!$.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (const t of [].concat(...document.body.children)) $.off(t, "mouseover", _);
                this._popper && this._popper.destroy(), this._menu.classList.remove(At), this._element.classList.remove(At), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", t)
            }
        }
        _getConfig(t) {
            if ("object" == typeof(t = super._getConfig(t)).reference && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError(`${mt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return t
        }
        _createPopper() {
            if (void 0 === i) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let t = this._element;
            "parent" === this._config.reference ? t = this._parent : l(this._config.reference) ? t = c(this._config.reference) : "object" == typeof this._config.reference && (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = i.createPopper(t, this._menu, e)
        }
        _isShown() {
            return this._menu.classList.contains(At)
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return St;
            if (t.classList.contains("dropstart")) return Dt;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return t.classList.contains("dropup") ? e ? Lt : kt : e ? It : Ot
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _selectMenuItem({
            key: t,
            target: e
        }) {
            const i = Y.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t => h(t)));
            i.length && w(i, e, t === vt, !i.includes(e)).focus()
        }
        static jQueryRajdhaniface(t) {
            return this.each((function() {
                const e = xt.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
        static clearMenus(t) {
            if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
            const e = Y.find(Et);
            for (const i of e) {
                const e = xt.getInstance(i);
                if (!e || !1 === e._config.autoClose) continue;
                const s = t.composedPath(),
                    n = s.includes(e._menu);
                if (s.includes(e._element) || "inside" === e._config.autoClose && !n || "outside" === e._config.autoClose && n) continue;
                if (e._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
                const o = {
                    relatedTarget: e._element
                };
                "click" === t.type && (o.clickEvent = t), e._completeHide(o)
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName),
                i = "Escape" === t.key,
                s = [bt, vt].includes(t.key);
            if (!s && !i) return;
            if (e && !i) return;
            t.preventDefault();
            const n = Y.findOne(Tt, t.delegateTarget.parentNode),
                o = xt.getOrCreateInstance(n);
            if (s) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
            o._isShown() && (t.stopPropagation(), o.hide(), n.focus())
        }
    }
    $.on(document, wt, Tt, xt.dataApiKeydownHandler), $.on(document, wt, Ct, xt.dataApiKeydownHandler), $.on(document, yt, xt.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", xt.clearMenus), $.on(document, yt, Tt, (function(t) {
        t.preventDefault(), xt.getOrCreateInstance(this).toggle()
    })), b(xt);
    const Mt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        jt = ".sticky-top",
        $t = "padding-right",
        Ft = "margin-right";
    class Ht {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t)
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, $t, (e => e + t)), this._setElementAttributes(Mt, $t, (e => e + t)), this._setElementAttributes(jt, Ft, (e => e - t))
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, $t), this._resetElementAttributes(Mt, $t), this._resetElementAttributes(jt, Ft)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(t, e, i) {
            const s = this.getWidth();
            this._applyManipulationCallback(t, (t => {
                if (t !== this._element && window.innerWidth > t.clientWidth + s) return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${i(Number.parseFloat(n))}px`)
            }))
        }
        _saveInitialAttribute(t, e) {
            const i = t.style.getPropertyValue(e);
            i && B.setDataAttribute(t, e, i)
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t => {
                const i = B.getDataAttribute(t, e);
                null !== i ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e)
            }))
        }
        _applyManipulationCallback(t, e) {
            if (l(t)) e(t);
            else
                for (const i of Y.find(t, this._element)) e(i)
        }
    }
    const zt = "show",
        qt = "mousedown.bs.backdrop",
        Bt = {
            className: "modal-backdrop",
            isVisible: !0,
            isAnimated: !1,
            rootElement: "body",
            clickCallback: null
        },
        Wt = {
            className: "string",
            isVisible: "boolean",
            isAnimated: "boolean",
            rootElement: "(element|string)",
            clickCallback: "(function|null)"
        };
    class Rt extends W {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null
        }
        static get Default() {
            return Bt
        }
        static get DefaultType() {
            return Wt
        }
        static get NAME() {
            return "backdrop"
        }
        show(t) {
            if (!this._config.isVisible) return void v(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && g(e), e.classList.add(zt), this._emulateAnimation((() => {
                v(t)
            }))
        }
        hide(t) {
            this._config.isVisible ? (this._getElement().classList.remove(zt), this._emulateAnimation((() => {
                this.dispose(), v(t)
            }))) : v(t)
        }
        dispose() {
            this._isAppended && ($.off(this._element, qt), this._element.remove(), this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                t.className = this._config.className, this._config.isAnimated && t.classList.add("fade"), this._element = t
            }
            return this._element
        }
        _configAfterMerge(t) {
            return t.rootElement = c(t.rootElement), t
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t), $.on(t, qt, (() => {
                v(this._config.clickCallback)
            })), this._isAppended = !0
        }
        _emulateAnimation(t) {
            y(t, this._getElement(), this._config.isAnimated)
        }
    }
    const Vt = ".bs.focustrap",
        Kt = "backward",
        Qt = {
            trapElement: null,
            autofocus: !0
        },
        Xt = {
            trapElement: "element",
            autofocus: "boolean"
        };
    class Yt extends W {
        constructor(t) {
            super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null
        }
        static get Default() {
            return Qt
        }
        static get DefaultType() {
            return Xt
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), $.off(document, Vt), $.on(document, "focusin.bs.focustrap", (t => this._handleFocusin(t))), $.on(document, "keydown.tab.bs.focustrap", (t => this._handleKeydown(t))), this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1, $.off(document, Vt))
        }
        _handleFocusin(t) {
            const {
                trapElement: e
            } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target)) return;
            const i = Y.focusableChildren(e);
            0 === i.length ? e.focus() : this._lastTabNavDirection === Kt ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(t) {
            "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Kt : "forward")
        }
    }
    const Ut = "hidden.bs.modal",
        Gt = "show.bs.modal",
        Jt = "modal-open",
        Zt = "show",
        te = "modal-static",
        ee = {
            backdrop: !0,
            keyboard: !0,
            focus: !0
        },
        ie = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean"
        };
    class se extends R {
        constructor(t, e) {
            super(t, e), this._dialog = Y.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Ht, this._addEventListeners()
        }
        static get Default() {
            return ee
        }
        static get DefaultType() {
            return ie
        }
        static get NAME() {
            return "modal"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || this._isTransitioning || $.trigger(this._element, Gt, {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Jt), this._adjustDialog(), this._backdrop.show((() => this._showElement(t))))
        }
        hide() {
            this._isShown && !this._isTransitioning && ($.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Zt), this._queueCallback((() => this._hideModal()), this._element, this._isAnimated())))
        }
        dispose() {
            for (const t of [window, this._dialog]) $.off(t, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new Rt({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new Yt({
                trapElement: this._element
            })
        }
        _showElement(t) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            const e = Y.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0), g(this._element), this._element.classList.add(Zt), this._queueCallback((() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, $.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: t
                })
            }), this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            $.on(this._element, "keydown.dismiss.bs.modal", (t => {
                if ("Escape" === t.key) return this._config.keyboard ? (t.preventDefault(), void this.hide()) : void this._triggerBackdropTransition()
            })), $.on(window, "resize.bs.modal", (() => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            })), $.on(this._element, "click.dismiss.bs.modal", (t => {
                t.target === t.currentTarget && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
            }))
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide((() => {
                document.body.classList.remove(Jt), this._resetAdjustments(), this._scrollBar.reset(), $.trigger(this._element, Ut)
            }))
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e || this._element.classList.contains(te) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(te), this._queueCallback((() => {
                this._element.classList.remove(te), this._queueCallback((() => {
                    this._element.style.overflowY = e
                }), this._dialog)
            }), this._dialog), this._element.focus())
        }
        _adjustDialog() {
            const t = this._element.scrollHeight > document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                i = e > 0;
            if (i && !t) {
                const t = m() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`
            }
            if (!i && t) {
                const t = m() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryRajdhaniface(t, e) {
            return this.each((function() {
                const i = se.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
                    i[t](e)
                }
            }))
        }
    }
    $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', (function(t) {
        const e = r(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), $.one(e, Gt, (t => {
            t.defaultPrevented || $.one(e, Ut, (() => {
                h(this) && this.focus()
            }))
        }));
        const i = Y.findOne(".modal.show");
        i && se.getInstance(i).hide(), se.getOrCreateInstance(e).toggle(this)
    })), V(se), b(se);
    const ne = "show",
        oe = "showing",
        re = "hiding",
        ae = ".offcanvas.show",
        le = "hidePrevented.bs.offcanvas",
        ce = "hidden.bs.offcanvas",
        he = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        de = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean"
        };
    class ue extends R {
        constructor(t, e) {
            super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }
        static get Default() {
            return he
        }
        static get DefaultType() {
            return de
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t)
        }
        show(t) {
            this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: t
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new Ht).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(oe), this._queueCallback((() => {
                this._config.scroll || this._focustrap.activate(), this._element.classList.add(ne), this._element.classList.remove(oe), $.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: t
                })
            }), this._element, !0))
        }
        hide() {
            this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(re), this._backdrop.hide(), this._queueCallback((() => {
                this._element.classList.remove(ne, re), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new Ht).reset(), $.trigger(this._element, ce)
            }), this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Rt({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t ? () => {
                    "static" !== this._config.backdrop ? this.hide() : $.trigger(this._element, le)
                } : null
            })
        }
        _initializeFocusTrap() {
            return new Yt({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            $.on(this._element, "keydown.dismiss.bs.offcanvas", (t => {
                "Escape" === t.key && (this._config.keyboard ? this.hide() : $.trigger(this._element, le))
            }))
        }
        static jQueryRajdhaniface(t) {
            return this.each((function() {
                const e = ue.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', (function(t) {
        const e = r(this);
        if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
        $.one(e, ce, (() => {
            h(this) && this.focus()
        }));
        const i = Y.findOne(ae);
        i && i !== e && ue.getInstance(i).hide(), ue.getOrCreateInstance(e).toggle(this)
    })), $.on(window, "load.bs.offcanvas.data-api", (() => {
        for (const t of Y.find(ae)) ue.getOrCreateInstance(t).show()
    })), $.on(window, "resize.bs.offcanvas", (() => {
        for (const t of Y.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t).position && ue.getOrCreateInstance(t).hide()
    })), V(ue), b(ue);
    const _e = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        ge = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        fe = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        pe = (t, e) => {
            const i = t.nodeName.toLowerCase();
            return e.includes(i) ? !_e.has(i) || Boolean(ge.test(t.nodeValue) || fe.test(t.nodeValue)) : e.filter((t => t instanceof RegExp)).some((t => t.test(i)))
        },
        me = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        be = {
            extraClass: "",
            template: "<div></div>",
            content: {},
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            allowList: me
        },
        ve = {
            extraClass: "(string|function)",
            template: "string",
            content: "object",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object"
        },
        ye = {
            selector: "(string|element)",
            entry: "(string|element|function|null)"
        };
    class we extends W {
        constructor(t) {
            super(), this._config = this._getConfig(t)
        }
        static get Default() {
            return be
        }
        static get DefaultType() {
            return ve
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map((t => this._resolvePossibleFunction(t))).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(t) {
            return this._checkContent(t), this._config.content = {
                ...this._config.content,
                ...t
            }, this
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
            const e = t.children[0],
                i = this._resolvePossibleFunction(this._config.extraClass);
            return i && e.classList.add(...i.split(" ")), e
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content)
        }
        _checkContent(t) {
            for (const [e, i] of Object.entries(t)) super._typeCheckConfig({
                selector: e,
                entry: i
            }, ye)
        }
        _setContent(t, e, i) {
            const s = Y.findOne(i, t);
            s && ((e = this._resolvePossibleFunction(e)) ? l(e) ? this._putElementInTemplate(c(e), s) : this._config.html ? s.innerHTML = this._maybeSanitize(e) : s.textContent = e : s.remove())
        }
        _maybeSanitize(t) {
            return this._config.sanitize ? function(t, e, i) {
                if (!t.length) return t;
                if (i && "function" == typeof i) return i(t);
                const s = (new window.DOMParser).parseFromString(t, "text/html"),
                    n = [].concat(...s.body.querySelectorAll("*"));
                for (const t of n) {
                    const i = t.nodeName.toLowerCase();
                    if (!Object.keys(e).includes(i)) {
                        t.remove();
                        continue
                    }
                    const s = [].concat(...t.attributes),
                        n = [].concat(e["*"] || [], e[i] || []);
                    for (const e of s) pe(e, n) || t.removeAttribute(e.nodeName)
                }
                return s.body.innerHTML
            }(t, this._config.allowList, this._config.sanitizeFn) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t(this) : t
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return e.innerHTML = "", void e.append(t);
            e.textContent = t.textContent
        }
    }
    const Ae = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Te = "fade",
        Ee = "show",
        Ce = ".modal",
        ke = "hide.bs.modal",
        Le = "hover",
        Oe = "focus",
        Ie = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: m() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: m() ? "right" : "left"
        },
        Se = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: [0, 0],
            container: !1,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            boundary: "clippingParents",
            customClass: "",
            sanitize: !0,
            sanitizeFn: null,
            allowList: me,
            popperConfig: null
        },
        De = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(array|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacements: "array",
            boundary: "(string|element)",
            customClass: "(string|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            allowList: "object",
            popperConfig: "(null|object|function)"
        };
    class Ne extends R {
        constructor(t, e) {
            if (void 0 === i) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = !1, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this.tip = null, this._setListeners()
        }
        static get Default() {
            return Se
        }
        static get DefaultType() {
            return De
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(t) {
            if (this._isEnabled) {
                if (t) {
                    const e = this._initializeOnDelegatedTarget(t);
                    return e._activeTrigger.click = !e._activeTrigger.click, void(e._isWithActiveTrigger() ? e._enter() : e._leave())
                }
                this._isShown() ? this._leave() : this._enter()
            }
        }
        dispose() {
            clearTimeout(this._timeout), $.off(this._element.closest(Ce), ke, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = $.trigger(this._element, this.constructor.eventName("show")),
                e = (u(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (t.defaultPrevented || !e) return;
            const i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            const {
                container: s
            } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (s.append(i), $.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._createPopper(i), i.classList.add(Ee), "ontouchstart" in document.documentElement)
                for (const t of [].concat(...document.body.children)) $.on(t, "mouseover", _);
            this._queueCallback((() => {
                const t = this._isHovered;
                this._isHovered = !1, $.trigger(this._element, this.constructor.eventName("shown")), t && this._leave()
            }), this.tip, this._isAnimated())
        }
        hide() {
            if (!this._isShown()) return;
            if ($.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;
            const t = this._getTipElement();
            if (t.classList.remove(Ee), "ontouchstart" in document.documentElement)
                for (const t of [].concat(...document.body.children)) $.off(t, "mouseover", _);
            this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = !1, this._queueCallback((() => {
                this._isWithActiveTrigger() || (this._isHovered || t.remove(), this._element.removeAttribute("aria-describedby"), $.trigger(this._element, this.constructor.eventName("hidden")), this._disposePopper())
            }), this.tip, this._isAnimated())
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._getContentForTemplate())), this.tip
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(Te, Ee), e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const i = (t => {
                do {
                    t += Math.floor(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            })(this.constructor.NAME).toString();
            return e.setAttribute("id", i), this._isAnimated() && e.classList.add(Te), e
        }
        setContent(t) {
            let e = !1;
            this.tip && (e = this._isShown(), this.tip.remove(), this.tip = null), this._disposePopper(), this.tip = this._createTipElement(t), e && this.show()
        }
        _getTemplateFactory(t) {
            return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new we({
                ...this._config,
                content: t,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._config.title
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(Te)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(Ee)
        }
        _createPopper(t) {
            const e = "function" == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
                s = Ie[e.toUpperCase()];
            this._popper = i.createPopper(this._element, t, this._getPopperConfig(s))
        }
        _getOffset() {
            const {
                offset: t
            } = this._config;
            return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
        }
        _resolvePossibleFunction(t) {
            return "function" == typeof t ? t.call(this._element) : t
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: t => {
                        this._getTipElement().setAttribute("data-popper-placement", t.state.placement)
                    }
                }]
            };
            return {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e) $.on(this._element, this.constructor.eventName("click"), this._config.selector, (t => this.toggle(t)));
                else if ("manual" !== e) {
                const t = e === Le ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    i = e === Le ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                $.on(this._element, t, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusin" === t.type ? Oe : Le] = !0, e._enter()
                })), $.on(this._element, i, this._config.selector, (t => {
                    const e = this._initializeOnDelegatedTarget(t);
                    e._activeTrigger["focusout" === t.type ? Oe : Le] = e._element.contains(t.relatedTarget), e._leave()
                }))
            }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }, $.on(this._element.closest(Ce), ke, this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            const t = this._config.originalTitle;
            t && (this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout((() => {
                this._isHovered && this.show()
            }), this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout((() => {
                this._isHovered || this.hide()
            }), this._config.delay.hide))
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t, e)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(t) {
            const e = B.getDataAttributes(this._element);
            for (const t of Object.keys(e)) Ae.has(t) && delete e[t];
            return t = {
                ...e,
                ..."object" == typeof t && t ? t : {}
            }, t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t
        }
        _configAfterMerge(t) {
            return t.container = !1 === t.container ? document.body : c(t.container), "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }), t.originalTitle = this._element.getAttribute("title") || "", t.title = this._resolvePossibleFunction(t.title) || t.originalTitle, "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t
        }
        _getDelegateConfig() {
            const t = {};
            for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
            return t
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null)
        }
        static jQueryRajdhaniface(t) {
            return this.each((function() {
                const e = Ne.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    b(Ne);
    const Pe = {
            ...Ne.Default,
            placement: "right",
            offset: [0, 8],
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        },
        xe = {
            ...Ne.DefaultType,
            content: "(null|string|element|function)"
        };
    class Me extends Ne {
        static get Default() {
            return Pe
        }
        static get DefaultType() {
            return xe
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryRajdhaniface(t) {
            return this.each((function() {
                const e = Me.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    b(Me);
    const je = "click.bs.scrollspy",
        $e = "active",
        Fe = "[href]",
        He = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null
        },
        ze = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element"
        };
    class qe extends R {
        constructor(t, e) {
            super(t, e), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh()
        }
        static get Default() {
            return He
        }
        static get DefaultType() {
            return ze
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
            for (const t of this._observableSections.values()) this._observer.observe(t)
        }
        dispose() {
            this._observer.disconnect(), super.dispose()
        }
        _configAfterMerge(t) {
            return t.target = c(t.target) || document.body, t
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && ($.off(this._config.target, je), $.on(this._config.target, je, Fe, (t => {
                const e = this._observableSections.get(t.target.hash);
                if (e) {
                    t.preventDefault();
                    const i = this._rootElement || window,
                        s = e.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({
                        top: s
                    });
                    i.scrollTop = s
                }
            })))
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: [.1, .5, 1],
                rootMargin: this._getRootMargin()
            };
            return new RajdhanisectionObserver((t => this._observerCallback(t)), t)
        }
        _observerCallback(t) {
            const e = t => this._targetLinks.get(`#${t.target.id}`),
                i = t => {
                    this._previousScrollData.visibleEntryTop = t.target.offsetTop, this._process(e(t))
                },
                s = (this._rootElement || document.documentElement).scrollTop,
                n = s >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = s;
            for (const o of t) {
                if (!o.isRajdhanisecting) {
                    this._activeTarget = null, this._clearActiveClass(e(o));
                    continue
                }
                const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (n && t) {
                    if (i(o), !s) return
                } else n || t || i(o)
            }
        }
        _getRootMargin() {
            return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            const t = Y.find(Fe, this._config.target);
            for (const e of t) {
                if (!e.hash || d(e)) continue;
                const t = Y.findOne(e.hash, this._element);
                h(t) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, t))
            }
        }
        _process(t) {
            this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add($e), this._activateParents(t), $.trigger(this._element, "activate.bs.scrollspy", {
                relatedTarget: t
            }))
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item")) Y.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add($e);
            else
                for (const e of Y.parents(t, ".nav, .list-group"))
                    for (const t of Y.prev(e, ".nav-link, .nav-item > .nav-link, .list-group-item")) t.classList.add($e)
        }
        _clearActiveClass(t) {
            t.classList.remove($e);
            const e = Y.find("[href].active", t);
            for (const t of e) t.classList.remove($e)
        }
        static jQueryRajdhaniface(t) {
            return this.each((function() {
                const e = qe.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    $.on(window, "load.bs.scrollspy.data-api", (() => {
        for (const t of Y.find('[data-bs-spy="scroll"]')) qe.getOrCreateInstance(t)
    })), b(qe);
    const Be = "ArrowLeft",
        We = "ArrowRight",
        Re = "ArrowUp",
        Ve = "ArrowDown",
        Ke = "active",
        Qe = "fade",
        Xe = "show",
        Ye = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Ue = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${Ye}`;
    class Ge extends R {
        constructor(t) {
            super(t), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), $.on(this._element, "keydown.bs.tab", (t => this._keydown(t))))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(),
                i = e ? $.trigger(e, "hide.bs.tab", {
                    relatedTarget: t
                }) : null;
            $.trigger(t, "show.bs.tab", {
                relatedTarget: e
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(e, t), this._activate(t, e))
        }
        _activate(t, e) {
            if (!t) return;
            t.classList.add(Ke), this._activate(r(t));
            const i = t.classList.contains(Qe);
            this._queueCallback((() => {
                i && t.classList.add(Xe), "tab" === t.getAttribute("role") && (t.focus(), t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), $.trigger(t, "shown.bs.tab", {
                    relatedTarget: e
                }))
            }), t, i)
        }
        _deactivate(t, e) {
            if (!t) return;
            t.classList.remove(Ke), t.blur(), this._deactivate(r(t));
            const i = t.classList.contains(Qe);
            this._queueCallback((() => {
                i && t.classList.remove(Xe), "tab" === t.getAttribute("role") && (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), $.trigger(t, "hidden.bs.tab", {
                    relatedTarget: e
                }))
            }), t, i)
        }
        _keydown(t) {
            if (![Be, We, Re, Ve].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = [We, Ve].includes(t.key),
                i = w(this._getChildren().filter((t => !d(t))), t.target, e, !0);
            i && Ge.getOrCreateInstance(i).show()
        }
        _getChildren() {
            return Y.find(Ue, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find((t => this._elemIsActive(t))) || null
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t)
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t),
                i = this._getOuterElement(t);
            t.setAttribute("aria-selected", e), i !== t && this._setAttributeIfNotExists(i, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t)
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = r(t);
            e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`))
        }
        _toggleDropDown(t, e) {
            const i = this._getOuterElement(t);
            if (!i.classList.contains("dropdown")) return;
            const s = (t, s) => {
                const n = Y.findOne(t, i);
                n && n.classList.toggle(s, e)
            };
            s(".dropdown-toggle", Ke), s(".dropdown-menu", Xe), s(".dropdown-item", Ke), i.setAttribute("aria-expanded", e)
        }
        _setAttributeIfNotExists(t, e, i) {
            t.hasAttribute(e) || t.setAttribute(e, i)
        }
        _elemIsActive(t) {
            return t.classList.contains(Ke)
        }
        _getInnerElement(t) {
            return t.matches(Ue) ? t : Y.findOne(Ue, t)
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t
        }
        static jQueryRajdhaniface(t) {
            return this.each((function() {
                const e = Ge.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError(`No method named "${t}"`);
                    e[t]()
                }
            }))
        }
    }
    $.on(document, "click.bs.tab", Ye, (function(t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this) || Ge.getOrCreateInstance(this).show()
    })), $.on(window, "load.bs.tab", (() => {
        for (const t of Y.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) Ge.getOrCreateInstance(t)
    })), b(Ge);
    const Je = "hide",
        Ze = "show",
        ti = "showing",
        ei = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        ii = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class si extends R {
        constructor(t, e) {
            super(t, e), this._timeout = null, this._hasMouseRajdhaniaction = !1, this._hasKeyboardRajdhaniaction = !1, this._setListeners()
        }
        static get Default() {
            return ii
        }
        static get DefaultType() {
            return ei
        }
        static get NAME() {
            return "toast"
        }
        show() {
            $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Je), g(this._element), this._element.classList.add(Ze, ti), this._queueCallback((() => {
                this._element.classList.remove(ti), $.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }), this._element, this._config.animation))
        }
        hide() {
            this.isShown() && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(ti), this._queueCallback((() => {
                this._element.classList.add(Je), this._element.classList.remove(ti, Ze), $.trigger(this._element, "hidden.bs.toast")
            }), this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(Ze), super.dispose()
        }
        isShown() {
            return this._element.classList.contains(Ze)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseRajdhaniaction || this._hasKeyboardRajdhaniaction || (this._timeout = setTimeout((() => {
                this.hide()
            }), this._config.delay)))
        }
        _onRajdhaniaction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseRajdhaniaction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardRajdhaniaction = e
            }
            if (e) return void this._clearTimeout();
            const i = t.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            $.on(this._element, "mouseover.bs.toast", (t => this._onRajdhaniaction(t, !0))), $.on(this._element, "mouseout.bs.toast", (t => this._onRajdhaniaction(t, !1))), $.on(this._element, "focusin.bs.toast", (t => this._onRajdhaniaction(t, !0))), $.on(this._element, "focusout.bs.toast", (t => this._onRajdhaniaction(t, !1)))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryRajdhaniface(t) {
            return this.each((function() {
                const e = si.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                    e[t](this)
                }
            }))
        }
    }
    return V(si), b(si), {
        Alert: K,
        Button: X,
        Carousel: ct,
        Collapse: pt,
        Dropdown: xt,
        Modal: se,
        Offcanvas: ue,
        Popover: Me,
        ScrollSpy: qe,
        Tab: Ge,
        Toast: si,
        Tooltip: Ne
    }
}));
//# sourceMappingURL=bootstrap.min.js.map