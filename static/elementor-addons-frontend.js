! function(e) {
    "use strict";
    var t = function(e) {
            var t = {},
                o = e.data("model-cid");
            if (i && o) {
                var n = elementorFrontend.config.elements.data[o],
                    a = elementorFrontend.config.elements.keys[n.attributes.widgetType || n.attributes.elType];
                jQuery.each(n.getActiveControls(), function(e) {
                    -1 !== a.indexOf(e) && (t[e] = n.attributes[e])
                })
            } else t = e.data("settings") || {};
            return t
        },
        i = !1,
        o = function(t, i, o, a) {
            if (e(t).closest(".elementor-widget-wrap").addClass("e-swiper-container"), e(t).closest(".elementor-widget").addClass("e-widget-swiper"), "undefined" == typeof Swiper) new elementorFrontend.utils.swiper(t, a).then(function(e) {
                n(t, i, o, e)
            });
            else {
                var s = new Swiper(t, a);
                n(t, i, o, s)
            }
        },
        n = function(e, t, o, n) {
            "yes" === o.pause_on_hover && (e.on("mouseover", function() {
                n.autoplay.stop()
            }), e.on("mouseout", function() {
                n.autoplay.start()
            })), i && t.resize(function() {
                n.update()
            }), l(n, ".ea-swiper-slider", "swiper")
        },
        a = function(e) {
            if (e.data("ea-wrapper-link")) {
                var t = e.data("ea-wrapper-link"),
                    i = e.data("id"),
                    o = t.url,
                    n = t.is_external ? "_blank" : "_self",
                    a = t.nofollow ? "nofollow" : "",
                    s = document.createElement("a");
                e.on("click.onEAWrapperLink", function() {
                    s.id = "ea-wrapper-link-" + i, s.href = o, s.target = n, s.rel = a, s.style.display = "none", document.body.appendChild(s);
                    var e = document.getElementById(s.id);
                    e.click();
                    var t = setTimeout(function() {
                        document.body.removeChild(e), clearTimeout(t)
                    })
                })
            }
        },
        s = function(e, i) {
            var o = t(e);
            if ("yes" === o.ea_elements_tooltip_enable) {
                var n = e,
                    a = e.data("id"),
                    s = o.ea_elements_tooltip_position,
                    l = o.ea_elements_tooltip_arrow,
                    d = o.ea_elements_tooltip_target,
                    r = o.ea_elements_tooltip_selector,
                    p = o.ea_elements_tooltip_trigger,
                    c = "" !== o.ea_elements_tooltip_distance && void 0 !== o.ea_elements_tooltip_distance ? o.ea_elements_tooltip_distance.size : "",
                    f = o.ea_elements_tooltip_animation,
                    u = "" !== o.ea_elements_tooltip_width && void 0 !== o.ea_elements_tooltip_width ? o.ea_elements_tooltip_width.size : "",
                    m = o.ea_elements_tooltip_zindex;
                if ("custom" === d && "" !== r) {
                    var w = e.find(r);
                    r.length && (n = w)
                }
                e.hasClass("tooltipstered") && e.eatooltipster("destroy"), n.hasClass("tooltipstered") && i(n).eatooltipster("destroy"), i(n).eatooltipster({
                    trigger: p,
                    content: e.find("#ea-tooltip-content-" + a),
                    animation: f,
                    minWidth: 0,
                    maxWidth: u,
                    eaclass: "ea-tooltip ea-tooltip-" + a,
                    position: s,
                    arrow: "yes" === l,
                    distance: c,
                    interactive: !0,
                    positionTracker: !0,
                    zIndex: m,
                    functionInit: function(t, i) {
                        var o = e.find("#ea-tooltip-content-" + a).detach();
                        t.content(o)
                    }
                })
            }
        },
        l = function(t, i, o) {
            void 0 === o && (o = "swiper"), ["ppe-tabs-switched", "ppe-toggle-switched", "ppe-accordion-switched", "ppe-popup-opened", ].forEach(function(n) {
                void 0 !== n && e(document).on(n, function(a, s) {
                    "ppe-popup-opened" == n && (s = e(".ea-modal-popup-" + s)), s.find(i).length > 0 && setTimeout(function() {
                        "slick" === o ? t.slick("setPosition") : "swiper" === o ? t.update() : "gallery" === o && s.find(".ea-image-gallery").eq(0).isotope("layout")
                    }, 100)
                })
            })
        },
        d = function(e, o) {
            var n = e.find(".ea-testimonials").eq(0),
                a = e.find(".ea-testimonials-wrap"),
                s = n.data("layout");
            if ("carousel" === s || "slideshow" === s) {
                var d = JSON.parse(n.attr("data-slider-settings")),
                    r = e.find(".ea-testimonials-thumb-item-wrap"),
                    p = t(e);
                n.slick(d), "slideshow" === s && "yes" === p.thumbnail_nav && (r.removeClass("ea-active-slide"), r.eq(0).addClass("ea-active-slide"), n.on("beforeChange", function(e, t, i, o) {
                    i = o, r.removeClass("ea-active-slide"), r.eq(i).addClass("ea-active-slide")
                }), r.each(function(e) {
                    o(this).on("click", function(t) {
                        t.preventDefault(), n.slick("slickGoTo", e)
                    })
                })), n.slick("setPosition"), l(n, ".ea-testimonials", "slick"), i && a.resize(function() {
                    n.slick("setPosition")
                })
            }
        },
        r = function(e, i) {
            var n = t(e),
                a = e.find(".swiper-container-wrap"),
                s = e.find(".ea-swiper-slider"),
                l = void 0 !== s.attr("data-slider-settings") ? JSON.parse(s.attr("data-slider-settings")) : "";
            o(s, a, n, l)
        };
    e(window).on("elementor/frontend/init", function() {
        elementorFrontend.isEditMode() && (i = !0), e.each({
            "ea-testimonials.default": d,
            "team-members.default": r
        }, function(e, t) {
            elementorFrontend.hooks.addAction("frontend/element_ready/" + e, t)
        }), elementorFrontend.hooks.addAction("frontend/element_ready/global", a), elementorFrontend.hooks.addAction("frontend/element_ready/widget", s)
    })
}(jQuery);