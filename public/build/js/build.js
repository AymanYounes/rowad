/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./public/js/bootstrap.min.js":
/*!************************************!*\
  !*** ./public/js/bootstrap.min.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
  "use strict";

  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery), +function (a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
        b = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "oTransitionEnd otransitionend",
      transition: "transitionend"
    };

    for (var c in b) {
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    }

    return !1;
  }

  a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
        d = this;
    a(this).one("bsTransitionEnd", function () {
      c = !0;
    });

    var e = function e() {
      c || a(d).trigger(a.support.transition.end);
    };

    return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function handle(b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0;
      }
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
    });
  }

  var c = '[data-dismiss="alert"]',
      d = function d(b) {
    a(b).on("click", c, this.close);
  };

  d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove();
    }

    var e = a(this),
        f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a(f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this;
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.button"),
          f = "object" == _typeof(b) && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
    });
  }

  var c = function c(b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
  };

  c.VERSION = "3.3.6", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function (b) {
    var c = "disabled",
        d = this.$element,
        e = d.is("input") ? "val" : "html",
        f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c));
    }, this), 0);
  }, c.prototype.toggle = function () {
    var a = !0,
        b = this.$element.closest('[data-toggle="buttons"]');

    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this;
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target);
    d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault();
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.carousel"),
          f = a.extend({}, c.DEFAULTS, d.data(), "object" == _typeof(b) && b),
          g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }

  var c = function c(b, _c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
  };

  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {
        case 37:
          this.prev();
          break;

        case 39:
          this.next();
          break;

        default:
          return;
      }

      a.preventDefault();
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
        d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
    if (d && !this.options.wrap) return b;
    var e = "prev" == a ? -1 : 1,
        f = (c + e) % this.$items.length;
    return this.$items.eq(f);
  }, c.prototype.to = function (a) {
    var b = this,
        c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a);
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, c.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next");
  }, c.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev");
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
        f = d || this.getItemForDirection(b, e),
        g = this.interval,
        h = "next" == b ? "left" : "right",
        i = this;
    if (f.hasClass("active")) return this.sliding = !1;
    var j = f[0],
        k = a.Event("slide.bs.carousel", {
      relatedTarget: j,
      direction: h
    });

    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active");
      }

      var m = a.Event("slid.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m);
        }, 0);
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this;
  };

  var e = function e(c) {
    var d,
        e = a(this),
        f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));

    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
          h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
    }
  };

  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);
      b.call(c, c.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    var c,
        d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d);
  }

  function c(b) {
    return this.each(function () {
      var c = a(this),
          e = c.data("bs.collapse"),
          f = a.extend({}, d.DEFAULTS, c.data(), "object" == _typeof(b) && b);
      !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
    });
  }

  var d = function d(b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
  };

  d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
    toggle: !0
  }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height";
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b,
          e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");

      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");

        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;

          var h = function h() {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
          };

          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");

      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;

        var e = function e() {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };

        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]();
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);
      this.addAriaAndCollapsedClass(b(e), e);
    }, this)).end();
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this;
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e),
        g = f.data("bs.collapse"),
        h = g ? "toggle" : e.data();
    c.call(f, h);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent();
  }

  function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
          e = b(d),
          f = {
        relatedTarget: this
      };
      e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
    }));
  }

  function d(b) {
    return this.each(function () {
      var c = a(this),
          d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
    });
  }

  var e = ".dropdown-backdrop",
      f = '[data-toggle="dropdown"]',
      g = function g(b) {
    a(b).on("click.bs.dropdown", this.toggle);
  };

  g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
    var e = a(this);

    if (!e.is(".disabled, :disabled")) {
      var f = b(e),
          g = f.hasClass("open");

      if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
      }

      return !1;
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);

      if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
            g = e.hasClass("open");
        if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.disabled):visible a",
            i = e.find(".dropdown-menu" + h);

        if (i.length) {
          var j = i.index(c.target);
          38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this;
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation();
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
  "use strict";

  function b(b, d) {
    return this.each(function () {
      var e = a(this),
          f = e.data("bs.modal"),
          g = a.extend({}, c.DEFAULTS, e.data(), "object" == _typeof(b) && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
    });
  }

  var c = function c(b, _c2) {
    this.options = _c2, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal");
    }, this));
  };

  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a);
  }, c.prototype.show = function (b) {
    var d = this,
        e = a.Event("show.bs.modal", {
      relatedTarget: b
    });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
      });
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f);
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
    }));
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
    }, this));
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
  }, c.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
    });
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, c.prototype.backdrop = function (b) {
    var d = this,
        e = this.$element.hasClass("fade") ? "fade" : "";

    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
        return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
      }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");

      var g = function g() {
        d.removeBackdrop(), b && b();
      };

      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
    } else b && b();
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog();
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    });
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    });
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;

    if (!a) {
      var b = document.documentElement.getBoundingClientRect();
      a = b.right - Math.abs(b.left);
    }

    this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad);
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b;
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this;
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
        e = d.attr("href"),
        f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
        g = f.data("bs.modal") ? "toggle" : a.extend({
      remote: !/#/.test(e) && e
    }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus");
      });
    }), b.call(f, g, this);
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tooltip"),
          f = "object" == _typeof(b) && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }

  var c = function c(a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
  };

  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
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
  }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
      click: !1,
      hover: !1,
      focus: !1
    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");

    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
            i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }

    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle();
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b;
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
        c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show();
    }, c.options.delay.show)) : c.show());
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState) {
      if (this.inState[a]) return !0;
    }

    return !1;
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide();
    }, c.options.delay.hide)) : c.hide());
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d) return;
      var e = this,
          f = this.tip(),
          g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
          i = /\s?auto?\s?/i,
          j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(),
          l = f[0].offsetWidth,
          m = f[0].offsetHeight;

      if (j) {
        var n = h,
            o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
      }

      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);

      var q = function q() {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
      };

      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
        e = d[0].offsetWidth,
        f = d[0].offsetHeight,
        g = parseInt(d.css("margin-top"), 10),
        h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
      using: function using(a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        });
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
        j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c),
        m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
        n = l ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l);
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
    }

    var e = this,
        f = a(this.$tip),
        g = a.Event("hide.bs." + this.type);
    return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this);
  }, c.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
  }, c.prototype.hasContent = function () {
    return this.getTitle();
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;
    var c = b[0],
        d = "BODY" == c.tagName,
        e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {
      width: e.right - e.left,
      height: e.bottom - e.top
    }));
    var f = d ? {
      top: 0,
      left: 0
    } : b.offset(),
        g = {
      scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
    },
        h = d ? {
      width: a(window).width(),
      height: a(window).height()
    } : null;
    return a.extend({}, e, g, h, f);
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    };
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
        g = this.getPosition(this.$viewport);

    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
          i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
    } else {
      var j = b.left - f,
          k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
    }

    return e;
  }, c.prototype.getTitle = function () {
    var a,
        b = this.$element,
        c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
  }, c.prototype.getUID = function (a) {
    do {
      a += ~~(1e6 * Math.random());
    } while (document.getElementById(a));

    return a;
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip;
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
  }, c.prototype.enable = function () {
    this.enabled = !0;
  }, c.prototype.disable = function () {
    this.enabled = !1;
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, c.prototype.toggle = function (b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
  }, c.prototype.destroy = function () {
    var a = this;
    clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null;
    });
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.popover"),
          f = "object" == _typeof(b) && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
    });
  }

  var c = function c(a, b) {
    this.init("popover", a, b);
  };

  if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
  c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS;
  }, c.prototype.setContent = function () {
    var a = this.tip(),
        b = this.getTitle(),
        c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, c.prototype.getContent = function () {
    var a = this.$element,
        b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow");
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this;
  };
}(jQuery), +function (a) {
  "use strict";

  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
  }

  function c(c) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.scrollspy"),
          f = "object" == _typeof(c) && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
    });
  }

  b.VERSION = "3.3.6", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
  }, b.prototype.refresh = function () {
    var b = this,
        c = "offset",
        d = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
          e = b.data("target") || b.attr("href"),
          f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a,
        b = this.$scrollElement.scrollTop() + this.options.offset,
        c = this.getScrollHeight(),
        d = this.options.offset + c - this.$scrollElement.height(),
        e = this.offsets,
        f = this.targets,
        g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b < e[0]) return this.activeTarget = null, this.clear();

    for (a = e.length; a--;) {
      g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
    }
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
        d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this;
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      c.call(b, b.data());
    });
  });
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
    });
  }

  var c = function c(b) {
    this.element = a(b);
  };

  c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
        c = b.closest("ul:not(.dropdown-menu)"),
        d = b.data("target");

    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
          f = a.Event("hide.bs.tab", {
        relatedTarget: b[0]
      }),
          g = a.Event("show.bs.tab", {
        relatedTarget: e[0]
      });

      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({
            type: "hidden.bs.tab",
            relatedTarget: b[0]
          }), b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e[0]
          });
        });
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
    }

    var g = d.find("> .active"),
        h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this;
  };

  var e = function e(c) {
    c.preventDefault(), b.call(a(this), "show");
  };

  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
          e = d.data("bs.affix"),
          f = "object" == _typeof(b) && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
    });
  }

  var c = function c(b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
  };

  c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
        f = this.$element.offset(),
        g = this.$target.height();
    if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
    if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
    var h = null == this.affixed,
        i = h ? e : f.top,
        j = h ? g : b;
    return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1;
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
        b = this.$element.offset();
    return this.pinnedOffset = b.top - a;
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
          d = this.options.offset,
          e = d.top,
          f = d.bottom,
          g = Math.max(a(document).height(), a(document.body).height());
      "object" != _typeof(d) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);

      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""),
            j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
      }

      "bottom" == h && this.$element.offset({
        top: g - b - f
      });
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this;
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
          d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
    });
  });
}(jQuery);

/***/ }),

/***/ "./public/js/jquery-2.2.0.min.js":
/*!***************************************!*\
  !*** ./public/js/jquery-2.2.0.min.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v2.2.0 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "2.2.0",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };

  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return e.call(this);
    },
    get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    },
    pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function each(a) {
      return n.each(this, a);
    },
    map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;

    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == _typeof(g) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }

    return g;
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(a) {
      throw new Error(a);
    },
    noop: function noop() {},
    isFunction: function isFunction(a) {
      return "function" === n.type(a);
    },
    isArray: Array.isArray,
    isWindow: function isWindow(a) {
      return null != a && a === a.window;
    },
    isNumeric: function isNumeric(a) {
      var b = a && a.toString();
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    },
    isPlainObject: function isPlainObject(a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !k.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;

      for (b in a) {
        return !1;
      }

      return !0;
    },
    type: function type(a) {
      return null == a ? a + "" : "object" == _typeof(a) || "function" == typeof a ? i[j.call(a)] || "object" : _typeof(a);
    },
    globalEval: function globalEval(a) {
      var b,
          c = eval;
      a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    },
    camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    },
    nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function each(a, b) {
      var c,
          d = 0;

      if (s(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }

      return a;
    },
    trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    },
    makeArray: function makeArray(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    },
    inArray: function inArray(a, b, c) {
      return null == b ? -1 : h.call(b, a, c);
    },
    merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }

      return a.length = e, a;
    },
    grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }

      return e;
    },
    map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];
      if (s(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }
      return f.apply([], h);
    },
    guid: 1,
    proxy: function proxy(a, b) {
      var c, d, f;
      return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function f() {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    },
    now: Date.now,
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });

  function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }

  var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }

      return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      TAG: new RegExp("^(" + M + "|[*])"),
      ATTR: new RegExp("^" + N),
      PSEUDO: new RegExp("^" + O),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + K + ")$", "i"),
      needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
    },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };

    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;

          while (a[c++] = b[d++]) {
            ;
          }

          a.length = c - 1;
        }
      };
    }

    function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;

      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;
            if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
          if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }

        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";

            while (h--) {
              r[h] = l + " " + qa(r[h]);
            }

            s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }

      return i(a.replace(Q, "$1"), b, d, e);
    }

    function ga() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }

      return b;
    }

    function ha(a) {
      return a[u] = !0, a;
    }

    function ia(a) {
      var b = n.createElement("div");

      try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }

    function ja(a, b) {
      var c = a.split("|"),
          e = c.length;

      while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }

    function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }
      return a ? 1 : -1;
    }

    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a;
      };
    }

    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }

    function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;

          while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }

    function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }

    c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);

        if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }

          return d;
        }

        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }
        return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ka(a, b);
        c = a;

        while (c = c.parentNode) {
          g.unshift(c);
        }

        c = b;

        while (c = c.parentNode) {
          h.unshift(c);
        }

        while (g[d] === h[d]) {
          d++;
        }

        return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}
      return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;

      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }

        while (e--) {
          a.splice(d[e], 1);
        }
      }

      return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;

      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;

          for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }

      return c;
    }, d = fa.selectors = {
      cacheLength: 50,
      createPseudo: ha,
      match: W,
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
        ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        },
        CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        },
        PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function CLASS(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);
            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        },
        CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;

            if (q) {
              if (f) {
                while (p) {
                  m = b;

                  while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }

                  o = p = "only" === a && !o && "nextSibling";
                }

                return !0;
              }

              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];

                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];
                    break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }

              return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;

            while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));
          return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;

            while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }),
        has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }),
        contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;

            do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);

            return !1;
          };
        }),
        target: function target(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function root(a) {
          return a === o;
        },
        focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function enabled(a) {
          return a.disabled === !1;
        },
        disabled: function disabled(a) {
          return a.disabled === !0;
        },
        checked: function checked(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        },
        empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(a) {
          return !d.pseudos.empty(a);
        },
        header: function header(a) {
          return Y.test(a.nodeName);
        },
        input: function input(a) {
          return X.test(a.nodeName);
        },
        button: function button(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function text(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        },
        first: na(function () {
          return [0];
        }),
        last: na(function (a, b) {
          return [b - 1];
        }),
        eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }),
        even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }

          return a;
        }),
        odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }

          return a;
        }),
        lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }

          return a;
        }),
        gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }

          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;

    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      d.pseudos[b] = la(b);
    }

    for (b in {
      submit: !0,
      reset: !0
    }) {
      d.pseudos[b] = ma(b);
    }

    function pa() {}

    pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;

      while (h) {
        (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(Q, " ")
        }), h = h.slice(c.length));

        for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length));
        }

        if (!c) break;
      }

      return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };

    function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }

      return d;
    }

    function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];

        if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
            if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }

    function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;

        while (e--) {
          if (!a[e](b, c, d)) return !1;
        }

        return !0;
      } : a[0];
    }

    function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fa(a, b[d], c);
      }

      return c;
    }

    function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }

      return g;
    }

    function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;

        if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;

          while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }

        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;

              while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }

              e(null, r = [], j, i);
            }

            k = r.length;

            while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }

    function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
        return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }

            return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
          }

          m.push(c);
        }
      }

      return sa(m);
    }

    function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;

        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);

            while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);
                break;
              }
            }

            k && (w = y);
          }

          c && ((l = !q && l) && r--, _f && t.push(l));
        }

        if (r += s, c && s !== r) {
          o = 0;

          while (q = b[o++]) {
            q(t, u, g, h);
          }

          if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }
            u = ua(u);
          }

          H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }

        return k && (w = y, j = v), t;
      };

      return c ? ha(f) : f;
    }

    return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];

      if (!f) {
        b || (b = g(a)), c = b.length;

        while (c--) {
          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        }

        f = A(a, xa(e, d)), f.selector = a;
      }

      return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);

      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }

        i = W.needsContext.test(a) ? 0 : j.length;

        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;

          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
            break;
          }
        }
      }

      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);

  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;

  var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;

    while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;
        d.push(a);
      }
    }

    return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }

    return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });

    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }

    return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }

  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({
    find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (n.contains(e[b], this)) return !0;
        }
      }));

      for (b = 0; c > b; b++) {
        n.find(a, e[b], d);
      }

      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    },
    filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    },
    not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    },
    is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    }
  });

  var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;
    if (!a) return this;

    if (c = c || A, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);

      if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }
        return this;
      }

      return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
    }

    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };

  C.prototype = n.fn, A = n(d);
  var D = /^(?:parents|prev(?:Until|All))/,
      E = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  n.fn.extend({
    has: function has(a) {
      var b = n(a, this),
          c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++) {
          if (n.contains(this, b[a])) return !0;
        }
      });
    },
    closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
        }
      }

      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function index(a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {
      ;
    }

    return a;
  }

  n.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function parents(a) {
      return u(a, "parentNode");
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    },
    next: function next(a) {
      return F(a, "nextSibling");
    },
    prev: function prev(a) {
      return F(a, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    },
    nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    },
    siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return v(a.firstChild);
    },
    contents: function contents(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
    };
  });
  var G = /\S+/g;

  function H(a) {
    var b = {};
    return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }

  n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);

    var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();

        while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }

      a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = {
      add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      },
      remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;

          while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      },
      has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      },
      empty: function empty() {
        return f && (f = []), this;
      },
      disable: function disable() {
        return e = g = [], f = c = "", this;
      },
      disabled: function disabled() {
        return !f;
      },
      lock: function lock() {
        return e = g = [], c || (f = c = ""), this;
      },
      locked: function locked() {
        return !!e;
      },
      fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      },
      fire: function fire() {
        return j.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!d;
      }
    };

    return j;
  }, n.extend({
    Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = {
        state: function state() {
          return c;
        },
        always: function always() {
          return e.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var a = arguments;
          return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        },
        promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        }
      },
          e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;

      if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var I;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    }
  });

  function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
  }

  n.ready.promise = function (b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
  }, n.ready.promise();

  var K = function K(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;

    if ("object" === n.type(c)) {
      e = !0;

      for (h in c) {
        K(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }

    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      L = function L(a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };

  function M() {
    this.expando = n.expando + M.uid++;
  }

  M.uid = 1, M.prototype = {
    register: function register(a, b) {
      var c = b || {};
      return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
        value: c,
        writable: !0,
        configurable: !0
      }), a[this.expando];
    },
    cache: function cache(a) {
      if (!L(a)) return {};
      var b = a[this.expando];
      return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
        value: b,
        configurable: !0
      }))), b;
    },
    set: function set(a, b, c) {
      var d,
          e = this.cache(a);
      if ("string" == typeof b) e[b] = c;else for (d in b) {
        e[d] = b[d];
      }
      return e;
    },
    get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
    },
    access: function access(a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    },
    remove: function remove(a, b) {
      var c,
          d,
          e,
          f = a[this.expando];

      if (void 0 !== f) {
        if (void 0 === b) this.register(a);else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;

          while (c--) {
            delete f[d[c]];
          }
        }
        (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    },
    hasData: function hasData(a) {
      var b = a[this.expando];
      return void 0 !== b && !n.isEmptyObject(b);
    }
  };
  var N = new M(),
      O = new M(),
      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;

  function R(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}

      O.set(a, b, c);
    } else c = void 0;
    return c;
  }

  n.extend({
    hasData: function hasData(a) {
      return O.hasData(a) || N.hasData(a);
    },
    data: function data(a, b, c) {
      return O.access(a, b, c);
    },
    removeData: function removeData(a, b) {
      O.remove(a, b);
    },
    _data: function _data(a, b, c) {
      return N.access(a, b, c);
    },
    _removeData: function _removeData(a, b) {
      N.remove(a, b);
    }
  }), n.fn.extend({
    data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;

      if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;

          while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
          }

          N.set(f, "hasDataAttrs", !0);
        }

        return e;
      }

      return "object" == _typeof(a) ? this.each(function () {
        O.set(this, a);
      }) : K(this, function (b) {
        var c, d;

        if (f && void 0 === b) {
          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
          if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
          if (c = R(f, d, void 0), void 0 !== c) return c;
        } else d = n.camelCase(a), this.each(function () {
          var c = O.get(this, d);
          O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    },
    removeData: function removeData(a) {
      return this.each(function () {
        O.remove(this, a);
      });
    }
  }), n.extend({
    queue: function queue(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function dequeue(a, b) {
      b = b || "fx";

      var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };

      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";
      return N.get(a, c) || N.access(a, c, {
        empty: n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c]);
        })
      });
    }
  }), n.fn.extend({
    queue: function queue(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };

      "string" != typeof a && (b = a, a = void 0), a = a || "fx";

      while (g--) {
        c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }

      return h(), e.promise(b);
    }
  });

  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function V(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };

  function W(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));

    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;

      do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }

    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }

  var X = /^(?:checkbox|radio)$/i,
      Y = /<([\w:-]+)/,
      Z = /^$|\/(?:java|ecma)script/i,
      $ = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;

  function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }

  function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
    }
  }

  var ba = /<|&#?\w+;/;

  function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) {
      if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];

        while (k--) {
          g = g.lastChild;
        }

        n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }

    l.textContent = "", o = 0;

    while (f = m[o++]) {
      if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
        k = 0;

        while (f = g[k++]) {
          Z.test(f.type || "") && c.push(f);
        }
      }
    }

    return l;
  }

  !function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();
  var da = /^key/,
      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fa = /^([^.]*)(?:\.(.+)|)/;

  function ga() {
    return !0;
  }

  function ha() {
    return !1;
  }

  function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }

  function ja(a, b, c, d, e, f) {
    var g, h;

    if ("object" == _typeof(b)) {
      "string" != typeof c && (d = d || c, c = void 0);

      for (h in b) {
        ja(a, h, c, d, b[h], f);
      }

      return a;
    }

    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;else if (!e) return this;
    return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }

  n.event = {
    global: {},
    add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.get(a);

      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(G) || [""], j = b.length;

        while (j--) {
          h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && n.expr.match.needsContext.test(e),
            namespace: p.join(".")
          }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      }
    },
    remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.hasData(a) && N.get(a);

      if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;

        while (j--) {
          if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;

            while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }

            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else for (o in i) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }

        n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    },
    dispatch: function dispatch(a) {
      a = n.event.fix(a);
      var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (N.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};

      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;

        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;

          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            (!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }

        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }

          d.length && g.push({
            elem: i,
            handlers: d
          });
        }
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      }
    },
    fix: function fix(a) {
      if (a[n.expando]) return a;
      var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];
      h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;

      while (b--) {
        c = e[b], a[c] = g[c];
      }

      return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function _default(a) {
          return n.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    }
  }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: ha,
    isPropagationStopped: ha,
    isImmediatePropagationStopped: ha,
    preventDefault: function preventDefault() {
      var a = this.originalEvent;
      this.isDefaultPrevented = ga, a && a.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var a = this.originalEvent;
      this.isPropagationStopped = ga, a && a.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), n.fn.extend({
    on: function on(a, b, c, d) {
      return ja(this, a, b, c, d);
    },
    one: function one(a, b, c, d) {
      return ja(this, a, b, c, d, 1);
    },
    off: function off(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;

      if ("object" == _typeof(a)) {
        for (e in a) {
          this.off(e, b, a[e]);
        }

        return this;
      }

      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    }
  });
  var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      la = /<script|<style|<link/i,
      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
      na = /^true\/(.*)/,
      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

  function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
  }

  function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }

  function ra(a) {
    var b = na.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }

  function sa(a, b) {
    var c, d, e, f, g, h, i, j;

    if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};

        for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            n.event.add(b, e, j[e][c]);
          }
        }
      }

      O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
    }
  }

  function ta(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && X.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  }

  function ua(a, b, c, d) {
    b = f.apply([], b);
    var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = a.eq(e);
      r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
    });

    if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) {
        j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
      }

      if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) {
        j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
      }
    }

    return a;
  }

  function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
    }

    return a;
  }

  n.extend({
    htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ka, "<$1></$2>");
    },
    clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);
      if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) {
        ta(f[d], g[d]);
      }
      if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) {
        sa(f[d], g[d]);
      } else sa(a, h);
      return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
    },
    cleanData: function cleanData(a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (L(c)) {
          if (b = c[N.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            }
            c[N.expando] = void 0;
          }

          c[O.expando] && (c[O.expando] = void 0);
        }
      }
    }
  }), n.fn.extend({
    domManip: ua,
    detach: function detach(a) {
      return va(this, a, !0);
    },
    remove: function remove(a) {
      return va(this, a);
    },
    text: function text(a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    },
    append: function append() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function prepend() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function before() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function after() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
      }

      return this;
    },
    clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function html(a) {
      return K(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;

        if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);

          try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
            }

            b = 0;
          } catch (e) {}
        }

        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith() {
      var a = [];
      return ua(this, arguments, function (b) {
        var c = this.parentNode;
        n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
      }, a);
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) {
        c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
      }

      return this.pushStack(d);
    };
  });
  var wa,
      xa = {
    HTML: "block",
    BODY: "block"
  };

  function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");
    return c.detach(), d;
  }

  function za(a) {
    var b = d,
        c = xa[a];
    return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
  }

  var Aa = /^margin/,
      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ca = function Ca(b) {
    var c = b.ownerDocument.defaultView;
    return c.opener || (c = a), c.getComputedStyle(b);
  },
      Da = function Da(a, b, c, d) {
    var e,
        f,
        g = {};

    for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }

    e = c.apply(a, d || []);

    for (f in b) {
      a.style[f] = g[f];
    }

    return e;
  },
      Ea = d.documentElement;

  !function () {
    var b,
        c,
        e,
        f,
        g = d.createElement("div"),
        h = d.createElement("div");

    if (h.style) {
      var _i = function _i() {
        h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);
        var d = a.getComputedStyle(h);
        b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
      };

      h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);
      n.extend(l, {
        pixelPosition: function pixelPosition() {
          return _i(), b;
        },
        boxSizingReliable: function boxSizingReliable() {
          return null == c && _i(), c;
        },
        pixelMarginRight: function pixelMarginRight() {
          return null == c && _i(), e;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return null == c && _i(), f;
        },
        reliableMarginRight: function reliableMarginRight() {
          var b,
              c = h.appendChild(d.createElement("div"));
          return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
        }
      });
    }
  }();

  function Fa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Ca(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
  }

  function Ga(a, b) {
    return {
      get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }

  var Ha = /^(none|table(?!-c[ea]).+)/,
      Ia = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Ja = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      Ka = ["Webkit", "O", "Moz", "ms"],
      La = d.createElement("div").style;

  function Ma(a) {
    if (a in La) return a;
    var b = a[0].toUpperCase() + a.slice(1),
        c = Ka.length;

    while (c--) {
      if (a = Ka[c] + b, a in La) return a;
    }
  }

  function Na(a, b, c) {
    var d = T.exec(b);
    return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }

  function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    }

    return g;
  }

  function Pa(b, c, e) {
    var f = !0,
        g = "width" === c ? b.offsetWidth : b.offsetHeight,
        h = Ca(b),
        i = "border-box" === n.css(b, "boxSizing", !1, h);

    if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
      if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;
      f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0;
    }

    return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px";
  }

  function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    }

    for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }

    return a;
  }

  n.extend({
    cssHooks: {
      opacity: {
        get: function get(a, b) {
          if (b) {
            var c = Fa(a, "opacity");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
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
      "float": "cssFloat"
    },
    style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;
        return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = _typeof(c), "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    },
    css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function get(a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d);
        }) : Pa(a, b, d) : void 0;
      },
      set: function set(a, c, d) {
        var e,
            f = d && Ca(a),
            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
        return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
      }
    };
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
      marginLeft: 0
    }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, {
      display: "inline-block"
    }, Fa, [a, "marginRight"]) : void 0;
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
        }

        return e;
      }
    }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
  }), n.fn.extend({
    css: function css(a, b) {
      return K(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;

        if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }

          return f;
        }

        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function show() {
      return Qa(this, !0);
    },
    hide: function hide() {
      return Qa(this);
    },
    toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    }
  });

  function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }

  n.Tween = Ra, Ra.prototype = {
    constructor: Ra,
    init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    },
    cur: function cur() {
      var a = Ra.propHooks[this.prop];
      return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
    },
    run: function run(a) {
      var b,
          c = Ra.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
    }
  }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
    _default: {
      get: function get(a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      },
      set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      }
    }
  }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
    set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, n.easing = {
    linear: function linear(a) {
      return a;
    },
    swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    },
    _default: "swing"
  }, n.fx = Ra.prototype.init, n.fx.step = {};
  var Sa,
      Ta,
      Ua = /^(?:toggle|show|hide)$/,
      Va = /queueHooks$/;

  function Wa() {
    return a.setTimeout(function () {
      Sa = void 0;
    }), Sa = n.now();
  }

  function Xa(a, b) {
    var c,
        d = 0,
        e = {
      height: a
    };

    for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
      c = U[d], e["margin" + c] = e["padding" + c] = a;
    }

    return b && (e.opacity = e.width = a), e;
  }

  function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }

  function Za(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && V(a),
        q = N.get(a, "fxshow");
    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));

    for (d in b) {
      if (e = b[d], Ua.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;
          p = !0;
        }

        m[d] = q && q[d] || n.style(a, d);
      } else j = void 0;
    }

    if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;
        N.remove(a, "fxshow");

        for (b in m) {
          n.style(a, b, m[b]);
        }
      });

      for (d in m) {
        g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }

  function $a(a, b) {
    var c, d, e, f, g;

    for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];

        for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }

  function _a(a, b, c) {
    var d,
        e,
        f = 0,
        g = _a.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;

      for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }

      return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({
      elem: a,
      props: n.extend({}, b),
      opts: n.extend(!0, {
        specialEasing: {},
        easing: n.easing._default
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: Sa || Wa(),
      duration: c.duration,
      tweens: [],
      createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d;
      },
      stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;
        if (e) return this;

        for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }

        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      }
    }),
        k = j.props;

    for ($a(k, j.opts.specialEasing); g > f; f++) {
      if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }

    return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }

  n.Animation = n.extend(_a, {
    tweeners: {
      "*": [function (a, b) {
        var c = this.createTween(a, b);
        return W(c.elem, a, T.exec(b), c), c;
      }]
    },
    tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);

      for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
      }
    },
    prefilters: [Za],
    prefilter: function prefilter(a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    }
  }), n.speed = function (a, b, c) {
    var d = a && "object" == _typeof(a) ? n.extend({}, a) : {
      complete: c || !c && b || n.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !n.isFunction(b) && b
    };
    return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({
    fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = _a(this, n.extend({}, a), f);

        (e || N.get(this, "finish")) && b.stop(!0);
      };

      return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;
        delete a.stop, b(c);
      };

      return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);
        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && Va.test(e) && d(g[e]);
        }

        for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }

        (b || !c) && n.dequeue(this, a);
      });
    },
    finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;

        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }

        for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }

        delete c.finish;
      });
    }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];

    n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
    };
  }), n.each({
    slideDown: Xa("show"),
    slideUp: Xa("hide"),
    slideToggle: Xa("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;

    for (Sa = n.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }

    c.length || n.fx.stop(), Sa = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(Ta), Ta = null;
  }, n.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);

      d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));
    a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  }();
  var ab,
      bb = n.expr.attrHandle;
  n.fn.extend({
    attr: function attr(a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }
      }
    },
    removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);
      if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      }
    }
  }), ab = {
    set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = bb[b] || n.find.attr;

    bb[b] = function (a, b, d) {
      var e, f;
      return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
    };
  });
  var cb = /^(?:input|select|textarea|button)$/i,
      db = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function prop(a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    }
  }), n.extend({
    prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.optSelected || (n.propHooks.selected = {
    get: function get(a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null;
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });
  var eb = /[\t\r\n\f]/g;

  function fb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }

  n.fn.extend({
    addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, fb(this)));
      });

      if ("string" == typeof a && a) {
        b = a.match(G) || [];

        while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;

            while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }

            h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, fb(this)));
      });
      if (!arguments.length) return this.attr("class", "");

      if ("string" == typeof a && a) {
        b = a.match(G) || [];

        while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;

            while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }

            h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = _typeof(a);

      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;

        if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];

          while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (void 0 === a || "boolean" === c) && (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;
      b = " " + a + " ";

      while (c = this[d++]) {
        if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
      }

      return !1;
    }
  });
  var gb = /\r/g;
  n.fn.extend({
    val: function val(a) {
      var b,
          c,
          d,
          e = this[0];
      {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function get(a) {
          return n.trim(a.value);
        }
      },
      select: {
        get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b);
            }
          }

          return g;
        },
        set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;

          while (g--) {
            d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
          }

          return c || (a.selectedIndex = -1), f;
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      }
    }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });
  var hb = /^(?:focusinfocus|focusoutblur)$/;
  n.extend(n.event, {
    trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];

      if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !hb.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == _typeof(b) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, hb.test(j + q) || (h = h.parentNode); h; h = h.parentNode) {
            p.push(h), i = h;
          }

          i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }

        g = 0;

        while ((h = p[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }

        return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
      }
    },
    simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0
      });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    }
  }), n.fn.extend({
    trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0;
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  }), l.focusin = "onfocusin" in a, l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };

    n.event.special[b] = {
      setup: function setup() {
        var d = this.ownerDocument || this,
            e = N.access(d, b);
        e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
      },
      teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = N.access(d, b) - 1;
        e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
      }
    };
  });
  var ib = a.location,
      jb = n.now(),
      kb = /\?/;
  n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (b) {
    var c;
    if (!b || "string" != typeof b) return null;

    try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }

    return (!c || c.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + b), c;
  };
  var lb = /#.*$/,
      mb = /([?&])_=[^&]*/,
      nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      pb = /^(?:GET|HEAD)$/,
      qb = /^\/\//,
      rb = {},
      sb = {},
      tb = "*/".concat("*"),
      ub = d.createElement("a");
  ub.href = ib.href;

  function vb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];
      if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }

  function wb(a, b, c, d) {
    var e = {},
        f = a === sb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }

  function xb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};

    for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }

    return d && n.extend(!0, a, d), a;
  }

  function yb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;

    while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }

    if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);
        break;
      }
    }
    if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }

        g || (g = e);
      }

      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }

  function zb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }
    f = k.shift();

    while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break;
          }
        }
        if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          };
        }
      }
    }

    return {
      state: "success",
      data: b
    };
  }

  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ib.href,
      type: "GET",
      isLocal: ob.test(ib.protocol),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": tb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? xb(xb(a, n.ajaxSettings), b) : xb(n.ajaxSettings, a);
    },
    ajaxPrefilter: vb(rb),
    ajaxTransport: vb(sb),
    ajax: function ajax(b, c) {
      "object" == _typeof(b) && (c = b, b = void 0), c = c || {};
      var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = n.ajaxSetup({}, c),
          o = m.context || m,
          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
          q = n.Deferred(),
          r = n.Callbacks("once memory"),
          s = m.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(a) {
          var b;

          if (2 === v) {
            if (!h) {
              h = {};

              while (b = nb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }

            b = h[a.toLowerCase()];
          }

          return null == b ? null : b;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === v ? g : null;
        },
        setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();
          return v || (a = u[c] = u[c] || a, t[a] = b), this;
        },
        overrideMimeType: function overrideMimeType(a) {
          return v || (m.mimeType = a), this;
        },
        statusCode: function statusCode(a) {
          var b;
          if (a) if (2 > v) for (b in a) {
            s[b] = [s[b], a[b]];
          } else x.always(a[x.status]);
          return this;
        },
        abort: function abort(a) {
          var b = a || w;
          return e && e.abort(b), z(0, b), this;
        }
      };

      if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || ib.href) + "").replace(lb, "").replace(qb, ib.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");

        try {
          j.href = m.url, j.href = j.href, m.crossDomain = ub.protocol + "//" + ub.host != j.protocol + "//" + j.host;
        } catch (y) {
          m.crossDomain = !0;
        }
      }

      if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), wb(rb, m, c, x), 2 === v) return x;
      k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !pb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (kb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = mb.test(f) ? f.replace(mb, "$1_=" + jb++) : f + (kb.test(f) ? "&" : "?") + "_=" + jb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);

      for (l in m.headers) {
        x.setRequestHeader(l, m.headers[l]);
      }

      if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
      w = "abort";

      for (l in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        x[l](m[l]);
      }

      if (e = wb(sb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;
        m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          x.abort("timeout");
        }, m.timeout));

        try {
          v = 1, e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;
          z(-1, y);
        }
      } else z(-1, "No Transport");

      function z(b, c, d, h) {
        var j,
            l,
            t,
            u,
            w,
            y = c;
        2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = yb(m, x, d)), u = zb(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
      }

      return x;
    },
    getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    });
  }, n.fn.extend({
    wrapAll: function wrapAll(a) {
      var b;
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;

        while (a.firstElementChild) {
          a = a.firstElementChild;
        }

        return a;
      }).append(this)), this);
    },
    wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function wrap(a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    }
  }), n.expr.filters.hidden = function (a) {
    return !n.expr.filters.visible(a);
  }, n.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
  };
  var Ab = /%20/g,
      Bb = /\[\]$/,
      Cb = /\r?\n/g,
      Db = /^(?:submit|button|image|reset|file)$/i,
      Eb = /^(?:input|select|textarea|keygen)/i;

  function Fb(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || Bb.test(a) ? d(a, e) : Fb(a + "[" + ("object" == _typeof(e) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      Fb(a + "[" + e + "]", b[e], c, d);
    }
  }

  n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };

    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Fb(c, a[c], b, e);
    }
    return d.join("&").replace(Ab, "+");
  }, n.fn.extend({
    serialize: function serialize() {
      return n.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && Eb.test(this.nodeName) && !Db.test(a) && (this.checked || !X.test(a));
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(Cb, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(Cb, "\r\n")
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };
  var Gb = {
    0: 200,
    1223: 204
  },
      Hb = n.ajaxSettings.xhr();
  l.cors = !!Hb && "withCredentials" in Hb, l.ajax = Hb = !!Hb, n.ajaxTransport(function (b) {
    var _c, d;

    return l.cors || Hb && !b.crossDomain ? {
      send: function send(e, f) {
        var g,
            h = b.xhr();
        if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }
        b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");

        for (g in e) {
          h.setRequestHeader(g, e[g]);
        }

        _c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Gb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
              binary: h.response
            } : {
              text: h.responseText
            }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");

        try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      },
      abort: function abort() {
        _c && _c();
      }
    } : void 0;
  }), n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(a) {
        return n.globalEval(a), a;
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;

      return {
        send: function send(e, f) {
          b = n("<script>").prop({
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        },
        abort: function abort() {
          _c2 && _c2();
        }
      };
    }
  });
  var Ib = [],
      Jb = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var a = Ib.pop() || n.expando + "_" + jb++;
      return this[a] = !0, a;
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Jb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Jb.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Jb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Ib.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), l.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;
    return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);
    var e = x.exec(a),
        f = !c && [];
    return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };
  var Kb = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Kb) return Kb.apply(this, arguments);
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
    return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == _typeof(b) && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(g, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };

  function Lb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }

  n.offset = {
    setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, n.fn.extend({
    offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });
      var b,
          c,
          d = this[0],
          e = {
        top: 0,
        left: 0
      },
          f = d && d.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Lb(f), {
        top: e.top + c.pageYOffset - b.clientTop,
        left: e.left + c.pageXOffset - b.clientLeft
      }) : e;
    },
    position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = {
          top: 0,
          left: 0
        };
        return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0) - a.scrollTop(), d.left += n.css(a[0], "borderLeftWidth", !0) - a.scrollLeft()), {
          top: b.top - d.top - n.css(c, "marginTop", !0),
          left: b.left - d.left - n.css(c, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;

        while (a && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }

        return a || Ea;
      });
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = "pageYOffset" === b;

    n.fn[a] = function (d) {
      return K(this, function (a, d, e) {
        var f = Lb(a);
        return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");
        return K(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    },
    size: function size() {
      return this.length;
    }
  }), n.fn.andSelf = n.fn.addBack,  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return n;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var Mb = a.jQuery,
      Nb = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Nb), b && a.jQuery === n && (a.jQuery = Mb), n;
  }, b || (a.jQuery = a.$ = n), n;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./public/js/jquery-plugin-collection.js":
/*!***********************************************!*\
  !*** ./public/js/jquery-plugin-collection.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: E:\\xampp\\htdocs\\rowad\\public\\js\\jquery-plugin-collection.js: Deleting local variable in strict mode (331:20755)\n\n  329 | \tVersion: 3.1.6\n  330 | ------------------------------------------------------------------------- */\n> 331 | !function(e){function t(){var e=location.href;return hashtag=-1!==e.indexOf(\"#prettyPhoto\")?decodeURI(e.substring(e.indexOf(\"#prettyPhoto\")+1,e.length)):!1,hashtag&&(hashtag=hashtag.replace(/<|>/g,\"\")),hashtag}function i(){\"undefined\"!=typeof theRel&&(location.hash=theRel+\"/\"+rel_index+\"/\")}function p(){-1!==location.href.indexOf(\"#prettyPhoto\")&&(location.hash=\"prettyPhoto\")}function o(e,t){e=e.replace(/[\\[]/,\"\\\\[\").replace(/[\\]]/,\"\\\\]\");var i=\"[\\\\?&]\"+e+\"=([^&#]*)\",p=new RegExp(i),o=p.exec(t);return null==o?\"\":o[1]}e.prettyPhoto={version:\"3.1.6\"},e.fn.prettyPhoto=function(a){function s(){e(\".pp_loaderIcon\").hide(),projectedTop=scroll_pos.scrollTop+(I/2-f.containerHeight/2),projectedTop<0&&(projectedTop=0),$ppt.fadeTo(settings.animation_speed,1),$pp_pic_holder.find(\".pp_content\").animate({height:f.contentHeight,width:f.contentWidth},settings.animation_speed),$pp_pic_holder.animate({top:projectedTop,left:j/2-f.containerWidth/2<0?0:j/2-f.containerWidth/2,width:f.containerWidth},settings.animation_speed,function(){$pp_pic_holder.find(\".pp_hoverContainer,#fullResImage\").height(f.height).width(f.width),$pp_pic_holder.find(\".pp_fade\").fadeIn(settings.animation_speed),isSet&&\"image\"==h(pp_images[set_position])?$pp_pic_holder.find(\".pp_hoverContainer\").show():$pp_pic_holder.find(\".pp_hoverContainer\").hide(),settings.allow_expand&&(f.resized?e(\"a.pp_expand,a.pp_contract\").show():e(\"a.pp_expand\").hide()),!settings.autoplay_slideshow||P||v||e.prettyPhoto.startSlideshow(),settings.changepicturecallback(),v=!0}),m(),a.ajaxcallback()}function n(t){$pp_pic_holder.find(\"#pp_full_res object,#pp_full_res embed\").css(\"visibility\",\"hidden\"),$pp_pic_holder.find(\".pp_fade\").fadeOut(settings.animation_speed,function(){e(\".pp_loaderIcon\").show(),t()})}function r(t){t>1?e(\".pp_nav\").show():e(\".pp_nav\").hide()}function l(e,t){if(resized=!1,d(e,t),imageWidth=e,imageHeight=t,(k>j||b>I)&&doresize&&settings.allow_resize&&!$){for(resized=!0,fitting=!1;!fitting;)k>j?(imageWidth=j-200,imageHeight=t/e*imageWidth):b>I?(imageHeight=I-200,imageWidth=e/t*imageHeight):fitting=!0,b=imageHeight,k=imageWidth;(k>j||b>I)&&l(k,b),d(imageWidth,imageHeight)}return{width:Math.floor(imageWidth),height:Math.floor(imageHeight),containerHeight:Math.floor(b),containerWidth:Math.floor(k)+2*settings.horizontal_padding,contentHeight:Math.floor(y),contentWidth:Math.floor(w),resized:resized}}function d(t,i){t=parseFloat(t),i=parseFloat(i),$pp_details=$pp_pic_holder.find(\".pp_details\"),$pp_details.width(t),detailsHeight=parseFloat($pp_details.css(\"marginTop\"))+parseFloat($pp_details.css(\"marginBottom\")),$pp_details=$pp_details.clone().addClass(settings.theme).width(t).appendTo(e(\"body\")).css({position:\"absolute\",top:-1e4}),detailsHeight+=$pp_details.height(),detailsHeight=detailsHeight<=34?36:detailsHeight,$pp_details.remove(),$pp_title=$pp_pic_holder.find(\".ppt\"),$pp_title.width(t),titleHeight=parseFloat($pp_title.css(\"marginTop\"))+parseFloat($pp_title.css(\"marginBottom\")),$pp_title=$pp_title.clone().appendTo(e(\"body\")).css({position:\"absolute\",top:-1e4}),titleHeight+=$pp_title.height(),$pp_title.remove(),y=i+detailsHeight,w=t,b=y+titleHeight+$pp_pic_holder.find(\".pp_top\").height()+$pp_pic_holder.find(\".pp_bottom\").height(),k=t}function h(e){return e.match(/youtube\\.com\\/watch/i)||e.match(/youtu\\.be/i)?\"youtube\":e.match(/vimeo\\.com/i)?\"vimeo\":e.match(/\\b.mov\\b/i)?\"quicktime\":e.match(/\\b.swf\\b/i)?\"flash\":e.match(/\\biframe=true\\b/i)?\"iframe\":e.match(/\\bajax=true\\b/i)?\"ajax\":e.match(/\\bcustom=true\\b/i)?\"custom\":\"#\"==e.substr(0,1)?\"inline\":\"image\"}function c(){if(doresize&&\"undefined\"!=typeof $pp_pic_holder){if(scroll_pos=_(),contentHeight=$pp_pic_holder.height(),contentwidth=$pp_pic_holder.width(),projectedTop=I/2+scroll_pos.scrollTop-contentHeight/2,projectedTop<0&&(projectedTop=0),contentHeight>I)return;$pp_pic_holder.css({top:projectedTop,left:j/2+scroll_pos.scrollLeft-contentwidth/2})}}function _(){return self.pageYOffset?{scrollTop:self.pageYOffset,scrollLeft:self.pageXOffset}:document.documentElement&&document.documentElement.scrollTop?{scrollTop:document.documentElement.scrollTop,scrollLeft:document.documentElement.scrollLeft}:document.body?{scrollTop:document.body.scrollTop,scrollLeft:document.body.scrollLeft}:void 0}function g(){I=e(window).height(),j=e(window).width(),\"undefined\"!=typeof $pp_overlay&&$pp_overlay.height(e(document).height()).width(j)}function m(){isSet&&settings.overlay_gallery&&\"image\"==h(pp_images[set_position])?(itemWidth=57,navWidth=\"facebook\"==settings.theme||\"pp_default\"==settings.theme?50:30,itemsPerPage=Math.floor((f.containerWidth-100-navWidth)/itemWidth),itemsPerPage=itemsPerPage<pp_images.length?itemsPerPage:pp_images.length,totalPage=Math.ceil(pp_images.length/itemsPerPage)-1,0==totalPage?(navWidth=0,$pp_gallery.find(\".pp_arrow_next,.pp_arrow_previous\").hide()):$pp_gallery.find(\".pp_arrow_next,.pp_arrow_previous\").show(),galleryWidth=itemsPerPage*itemWidth,fullGalleryWidth=pp_images.length*itemWidth,$pp_gallery.css(\"margin-left\",-(galleryWidth/2+navWidth/2)).find(\"div:first\").width(galleryWidth+5).find(\"ul\").width(fullGalleryWidth).find(\"li.selected\").removeClass(\"selected\"),goToPage=Math.floor(set_position/itemsPerPage)<totalPage?Math.floor(set_position/itemsPerPage):totalPage,e.prettyPhoto.changeGalleryPage(goToPage),$pp_gallery_li.filter(\":eq(\"+set_position+\")\").addClass(\"selected\")):$pp_pic_holder.find(\".pp_content\").unbind(\"mouseenter mouseleave\")}function u(){if(settings.social_tools&&(facebook_like_link=settings.social_tools.replace(\"{location_href}\",encodeURIComponent(location.href))),settings.markup=settings.markup.replace(\"{pp_social}\",\"\"),e(\"body\").append(settings.markup),$pp_pic_holder=e(\".pp_pic_holder\"),$ppt=e(\".ppt\"),$pp_overlay=e(\"div.pp_overlay\"),isSet&&settings.overlay_gallery){currentGalleryPage=0,toInject=\"\";for(var t=0;t<pp_images.length;t++)pp_images[t].match(/\\b(jpg|jpeg|png|gif)\\b/gi)?(classname=\"\",img_src=pp_images[t]):(classname=\"default\",img_src=\"\"),toInject+=\"<li class='\"+classname+\"'><a href='#'><img src='\"+img_src+\"' width='50' alt='' /></a></li>\";toInject=settings.gallery_markup.replace(/{gallery}/g,toInject),$pp_pic_holder.find(\"#pp_full_res\").after(toInject),$pp_gallery=e(\".pp_pic_holder .pp_gallery\"),$pp_gallery_li=$pp_gallery.find(\"li\"),$pp_gallery.find(\".pp_arrow_next\").click(function(){return e.prettyPhoto.changeGalleryPage(\"next\"),e.prettyPhoto.stopSlideshow(),!1}),$pp_gallery.find(\".pp_arrow_previous\").click(function(){return e.prettyPhoto.changeGalleryPage(\"previous\"),e.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(\".pp_content\").hover(function(){$pp_pic_holder.find(\".pp_gallery:not(.disabled)\").fadeIn()},function(){$pp_pic_holder.find(\".pp_gallery:not(.disabled)\").fadeOut()}),itemWidth=57,$pp_gallery_li.each(function(t){e(this).find(\"a\").click(function(){return e.prettyPhoto.changePage(t),e.prettyPhoto.stopSlideshow(),!1})})}settings.slideshow&&($pp_pic_holder.find(\".pp_nav\").prepend('<a href=\"#\" class=\"pp_play\">Play</a>'),$pp_pic_holder.find(\".pp_nav .pp_play\").click(function(){return e.prettyPhoto.startSlideshow(),!1})),$pp_pic_holder.attr(\"class\",\"pp_pic_holder \"+settings.theme),$pp_overlay.css({opacity:0,height:e(document).height(),width:e(window).width()}).bind(\"click\",function(){settings.modal||e.prettyPhoto.close()}),e(\"a.pp_close\").bind(\"click\",function(){return e.prettyPhoto.close(),!1}),settings.allow_expand&&e(\"a.pp_expand\").bind(\"click\",function(){return e(this).hasClass(\"pp_expand\")?(e(this).removeClass(\"pp_expand\").addClass(\"pp_contract\"),doresize=!1):(e(this).removeClass(\"pp_contract\").addClass(\"pp_expand\"),doresize=!0),n(function(){e.prettyPhoto.open()}),!1}),$pp_pic_holder.find(\".pp_previous, .pp_nav .pp_arrow_previous\").bind(\"click\",function(){return e.prettyPhoto.changePage(\"previous\"),e.prettyPhoto.stopSlideshow(),!1}),$pp_pic_holder.find(\".pp_next, .pp_nav .pp_arrow_next\").bind(\"click\",function(){return e.prettyPhoto.changePage(\"next\"),e.prettyPhoto.stopSlideshow(),!1}),c()}a=jQuery.extend({hook:\"rel\",animation_speed:\"fast\",ajaxcallback:function(){},slideshow:5e3,autoplay_slideshow:!1,opacity:.8,show_title:!0,allow_resize:!0,allow_expand:!0,default_width:500,default_height:344,counter_separator_label:\"/\",theme:\"pp_default\",horizontal_padding:20,hideflash:!1,wmode:\"opaque\",autoplay:!0,modal:!1,deeplinking:!0,overlay_gallery:!0,overlay_gallery_max:30,keyboard_shortcuts:!0,changepicturecallback:function(){},callback:function(){},ie6_fallback:!0,markup:'<div class=\"pp_pic_holder\"> \t\t\t\t\t\t<div class=\"ppt\">&nbsp;</div> \t\t\t\t\t\t<div class=\"pp_top\"> \t\t\t\t\t\t\t<div class=\"pp_left\"></div> \t\t\t\t\t\t\t<div class=\"pp_middle\"></div> \t\t\t\t\t\t\t<div class=\"pp_right\"></div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class=\"pp_content_container\"> \t\t\t\t\t\t\t<div class=\"pp_left\"> \t\t\t\t\t\t\t<div class=\"pp_right\"> \t\t\t\t\t\t\t\t<div class=\"pp_content\"> \t\t\t\t\t\t\t\t\t<div class=\"pp_loaderIcon\"></div> \t\t\t\t\t\t\t\t\t<div class=\"pp_fade\"> \t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"pp_expand\" title=\"Expand the image\">Expand</a> \t\t\t\t\t\t\t\t\t\t<div class=\"pp_hoverContainer\"> \t\t\t\t\t\t\t\t\t\t\t<a class=\"pp_next\" href=\"#\">next</a> \t\t\t\t\t\t\t\t\t\t\t<a class=\"pp_previous\" href=\"#\">previous</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t<div id=\"pp_full_res\"></div> \t\t\t\t\t\t\t\t\t\t<div class=\"pp_details\"> \t\t\t\t\t\t\t\t\t\t\t<div class=\"pp_nav\"> \t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"pp_arrow_previous\">Previous</a> \t\t\t\t\t\t\t\t\t\t\t\t<p class=\"currentTextHolder\">0/0</p> \t\t\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"pp_arrow_next\">Next</a> \t\t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t\t\t<p class=\"pp_description\"></p> \t\t\t\t\t\t\t\t\t\t\t<div class=\"pp_social\">{pp_social}</div> \t\t\t\t\t\t\t\t\t\t\t<a class=\"pp_close\" href=\"#\">Close</a> \t\t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t</div> \t\t\t\t\t\t</div> \t\t\t\t\t\t<div class=\"pp_bottom\"> \t\t\t\t\t\t\t<div class=\"pp_left\"></div> \t\t\t\t\t\t\t<div class=\"pp_middle\"></div> \t\t\t\t\t\t\t<div class=\"pp_right\"></div> \t\t\t\t\t\t</div> \t\t\t\t\t</div> \t\t\t\t\t<div class=\"pp_overlay\"></div>',gallery_markup:'<div class=\"pp_gallery\"> \t\t\t\t\t\t\t\t<a href=\"#\" class=\"pp_arrow_previous\">Previous</a> \t\t\t\t\t\t\t\t<div> \t\t\t\t\t\t\t\t\t<ul> \t\t\t\t\t\t\t\t\t\t{gallery} \t\t\t\t\t\t\t\t\t</ul> \t\t\t\t\t\t\t\t</div> \t\t\t\t\t\t\t\t<a href=\"#\" class=\"pp_arrow_next\">Next</a> \t\t\t\t\t\t\t</div>',image_markup:'<img id=\"fullResImage\" src=\"{path}\" />',flash_markup:'<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\"{width}\" height=\"{height}\"><param name=\"wmode\" value=\"{wmode}\" /><param name=\"allowfullscreen\" value=\"true\" /><param name=\"allowscriptaccess\" value=\"always\" /><param name=\"movie\" value=\"{path}\" /><embed src=\"{path}\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" allowscriptaccess=\"always\" width=\"{width}\" height=\"{height}\" wmode=\"{wmode}\"></embed></object>',quicktime_markup:'<object classid=\"clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B\" codebase=\"http://www.apple.com/qtactivex/qtplugin.cab\" height=\"{height}\" width=\"{width}\"><param name=\"src\" value=\"{path}\"><param name=\"autoplay\" value=\"{autoplay}\"><param name=\"type\" value=\"video/quicktime\"><embed src=\"{path}\" height=\"{height}\" width=\"{width}\" autoplay=\"{autoplay}\" type=\"video/quicktime\" pluginspage=\"http://www.apple.com/quicktime/download/\"></embed></object>',iframe_markup:'<iframe src =\"{path}\" width=\"{width}\" height=\"{height}\" frameborder=\"no\"></iframe>',inline_markup:'<div class=\"pp_inline\">{content}</div>',custom_markup:\"\",social_tools:'<div class=\"twitter\"><a href=\"http://twitter.com/share\" class=\"twitter-share-button\" data-count=\"none\">Tweet</a><script type=\"text/javascript\" src=\"http://platform.twitter.com/widgets.js\"></script></div><div class=\"facebook\"><iframe src=\"//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23\" scrolling=\"no\" style=\"border:none; overflow:hidden; width:500px; height:23px;\" allowTransparency=\"true\"></iframe></div>'},a);var f,v,y,w,b,k,P,x=this,$=!1,I=e(window).height(),j=e(window).width();return doresize=!0,scroll_pos=_(),e(window).unbind(\"resize.prettyphoto\").bind(\"resize.prettyphoto\",function(){c(),g()}),a.keyboard_shortcuts&&e(document).unbind(\"keydown.prettyphoto\").bind(\"keydown.prettyphoto\",function(t){if(\"undefined\"!=typeof $pp_pic_holder&&$pp_pic_holder.is(\":visible\"))switch(t.keyCode){case 37:e.prettyPhoto.changePage(\"previous\"),t.preventDefault();break;case 39:e.prettyPhoto.changePage(\"next\"),t.preventDefault();break;case 27:settings.modal||e.prettyPhoto.close(),t.preventDefault()}}),e.prettyPhoto.initialize=function(){return settings=a,\"pp_default\"==settings.theme&&(settings.horizontal_padding=16),theRel=e(this).attr(settings.hook),galleryRegExp=/\\[(?:.*)\\]/,isSet=galleryRegExp.exec(theRel)?!0:!1,pp_images=isSet?jQuery.map(x,function(t){return-1!=e(t).attr(settings.hook).indexOf(theRel)?e(t).attr(\"href\"):void 0}):e.makeArray(e(this).attr(\"href\")),pp_titles=isSet?jQuery.map(x,function(t){return-1!=e(t).attr(settings.hook).indexOf(theRel)?e(t).find(\"img\").attr(\"alt\")?e(t).find(\"img\").attr(\"alt\"):\"\":void 0}):e.makeArray(e(this).find(\"img\").attr(\"alt\")),pp_descriptions=isSet?jQuery.map(x,function(t){return-1!=e(t).attr(settings.hook).indexOf(theRel)?e(t).attr(\"title\")?e(t).attr(\"title\"):\"\":void 0}):e.makeArray(e(this).attr(\"title\")),pp_images.length>settings.overlay_gallery_max&&(settings.overlay_gallery=!1),set_position=jQuery.inArray(e(this).attr(\"href\"),pp_images),rel_index=isSet?set_position:e(\"a[\"+settings.hook+\"^='\"+theRel+\"']\").index(e(this)),u(this),settings.allow_resize&&e(window).bind(\"scroll.prettyphoto\",function(){c()}),e.prettyPhoto.open(),!1},e.prettyPhoto.open=function(t){return\"undefined\"==typeof settings&&(settings=a,pp_images=e.makeArray(arguments[0]),pp_titles=e.makeArray(arguments[1]?arguments[1]:\"\"),pp_descriptions=e.makeArray(arguments[2]?arguments[2]:\"\"),isSet=pp_images.length>1?!0:!1,set_position=arguments[3]?arguments[3]:0,u(t.target)),settings.hideflash&&e(\"object,embed,iframe[src*=youtube],iframe[src*=vimeo]\").css(\"visibility\",\"hidden\"),r(e(pp_images).size()),e(\".pp_loaderIcon\").show(),settings.deeplinking&&i(),settings.social_tools&&(facebook_like_link=settings.social_tools.replace(\"{location_href}\",encodeURIComponent(location.href)),$pp_pic_holder.find(\".pp_social\").html(facebook_like_link)),$ppt.is(\":hidden\")&&$ppt.css(\"opacity\",0).show(),$pp_overlay.show().fadeTo(settings.animation_speed,settings.opacity),$pp_pic_holder.find(\".currentTextHolder\").text(set_position+1+settings.counter_separator_label+e(pp_images).size()),\"undefined\"!=typeof pp_descriptions[set_position]&&\"\"!=pp_descriptions[set_position]?$pp_pic_holder.find(\".pp_description\").show().html(unescape(pp_descriptions[set_position])):$pp_pic_holder.find(\".pp_description\").hide(),movie_width=parseFloat(o(\"width\",pp_images[set_position]))?o(\"width\",pp_images[set_position]):settings.default_width.toString(),movie_height=parseFloat(o(\"height\",pp_images[set_position]))?o(\"height\",pp_images[set_position]):settings.default_height.toString(),$=!1,-1!=movie_height.indexOf(\"%\")&&(movie_height=parseFloat(e(window).height()*parseFloat(movie_height)/100-150),$=!0),-1!=movie_width.indexOf(\"%\")&&(movie_width=parseFloat(e(window).width()*parseFloat(movie_width)/100-150),$=!0),$pp_pic_holder.fadeIn(function(){switch($ppt.html(settings.show_title&&\"\"!=pp_titles[set_position]&&\"undefined\"!=typeof pp_titles[set_position]?unescape(pp_titles[set_position]):\"&nbsp;\"),imgPreloader=\"\",skipInjection=!1,h(pp_images[set_position])){case\"image\":imgPreloader=new Image,nextImage=new Image,isSet&&set_position<e(pp_images).size()-1&&(nextImage.src=pp_images[set_position+1]),prevImage=new Image,isSet&&pp_images[set_position-1]&&(prevImage.src=pp_images[set_position-1]),$pp_pic_holder.find(\"#pp_full_res\")[0].innerHTML=settings.image_markup.replace(/{path}/g,pp_images[set_position]),imgPreloader.onload=function(){f=l(imgPreloader.width,imgPreloader.height),s()},imgPreloader.onerror=function(){alert(\"Image cannot be loaded. Make sure the path is correct and image exist.\"),e.prettyPhoto.close()},imgPreloader.src=pp_images[set_position];break;case\"youtube\":f=l(movie_width,movie_height),movie_id=o(\"v\",pp_images[set_position]),\"\"==movie_id&&(movie_id=pp_images[set_position].split(\"youtu.be/\"),movie_id=movie_id[1],movie_id.indexOf(\"?\")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf(\"?\"))),movie_id.indexOf(\"&\")>0&&(movie_id=movie_id.substr(0,movie_id.indexOf(\"&\")))),movie=\"http://www.youtube.com/embed/\"+movie_id,movie+=o(\"rel\",pp_images[set_position])?\"?rel=\"+o(\"rel\",pp_images[set_position]):\"?rel=1\",settings.autoplay&&(movie+=\"&autoplay=1\"),toInject=settings.iframe_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,movie);break;case\"vimeo\":f=l(movie_width,movie_height),movie_id=pp_images[set_position];var t=/http(s?):\\/\\/(www\\.)?vimeo.com\\/(\\d+)/,i=movie_id.match(t);movie=\"http://player.vimeo.com/video/\"+i[3]+\"?title=0&byline=0&portrait=0\",settings.autoplay&&(movie+=\"&autoplay=1;\"),vimeo_width=f.width+\"/embed/?moog_width=\"+f.width,toInject=settings.iframe_markup.replace(/{width}/g,vimeo_width).replace(/{height}/g,f.height).replace(/{path}/g,movie);break;case\"quicktime\":f=l(movie_width,movie_height),f.height+=15,f.contentHeight+=15,f.containerHeight+=15,toInject=settings.quicktime_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,pp_images[set_position]).replace(/{autoplay}/g,settings.autoplay);break;case\"flash\":f=l(movie_width,movie_height),flash_vars=pp_images[set_position],flash_vars=flash_vars.substring(pp_images[set_position].indexOf(\"flashvars\")+10,pp_images[set_position].length),filename=pp_images[set_position],filename=filename.substring(0,filename.indexOf(\"?\")),toInject=settings.flash_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{wmode}/g,settings.wmode).replace(/{path}/g,filename+\"?\"+flash_vars);break;case\"iframe\":f=l(movie_width,movie_height),frame_url=pp_images[set_position],frame_url=frame_url.substr(0,frame_url.indexOf(\"iframe\")-1),toInject=settings.iframe_markup.replace(/{width}/g,f.width).replace(/{height}/g,f.height).replace(/{path}/g,frame_url);break;case\"ajax\":doresize=!1,f=l(movie_width,movie_height),doresize=!0,skipInjection=!0,e.get(pp_images[set_position],function(e){toInject=settings.inline_markup.replace(/{content}/g,e),$pp_pic_holder.find(\"#pp_full_res\")[0].innerHTML=toInject,s()});break;case\"custom\":f=l(movie_width,movie_height),toInject=settings.custom_markup;break;case\"inline\":myClone=e(pp_images[set_position]).clone().append('<br clear=\"all\" />').css({width:settings.default_width}).wrapInner('<div id=\"pp_full_res\"><div class=\"pp_inline\"></div></div>').appendTo(e(\"body\")).show(),doresize=!1,f=l(e(myClone).width(),e(myClone).height()),doresize=!0,e(myClone).remove(),toInject=settings.inline_markup.replace(/{content}/g,e(pp_images[set_position]).html())}imgPreloader||skipInjection||($pp_pic_holder.find(\"#pp_full_res\")[0].innerHTML=toInject,s())}),!1},e.prettyPhoto.changePage=function(t){currentGalleryPage=0,\"previous\"==t?(set_position--,set_position<0&&(set_position=e(pp_images).size()-1)):\"next\"==t?(set_position++,set_position>e(pp_images).size()-1&&(set_position=0)):set_position=t,rel_index=set_position,doresize||(doresize=!0),settings.allow_expand&&e(\".pp_contract\").removeClass(\"pp_contract\").addClass(\"pp_expand\"),n(function(){e.prettyPhoto.open()})},e.prettyPhoto.changeGalleryPage=function(e){\"next\"==e?(currentGalleryPage++,currentGalleryPage>totalPage&&(currentGalleryPage=0)):\"previous\"==e?(currentGalleryPage--,currentGalleryPage<0&&(currentGalleryPage=totalPage)):currentGalleryPage=e,slide_speed=\"next\"==e||\"previous\"==e?settings.animation_speed:0,slide_to=currentGalleryPage*itemsPerPage*itemWidth,$pp_gallery.find(\"ul\").animate({left:-slide_to},slide_speed)},e.prettyPhoto.startSlideshow=function(){\"undefined\"==typeof P?($pp_pic_holder.find(\".pp_play\").unbind(\"click\").removeClass(\"pp_play\").addClass(\"pp_pause\").click(function(){return e.prettyPhoto.stopSlideshow(),!1}),P=setInterval(e.prettyPhoto.startSlideshow,settings.slideshow)):e.prettyPhoto.changePage(\"next\")},e.prettyPhoto.stopSlideshow=function(){$pp_pic_holder.find(\".pp_pause\").unbind(\"click\").removeClass(\"pp_pause\").addClass(\"pp_play\").click(function(){return e.prettyPhoto.startSlideshow(),!1}),clearInterval(P),P=void 0},e.prettyPhoto.close=function(){$pp_overlay.is(\":animated\")||(e.prettyPhoto.stopSlideshow(),$pp_pic_holder.stop().find(\"object,embed\").css(\"visibility\",\"hidden\"),e(\"div.pp_pic_holder,div.ppt,.pp_fade\").fadeOut(settings.animation_speed,function(){e(this).remove()}),$pp_overlay.fadeOut(settings.animation_speed,function(){settings.hideflash&&e(\"object,embed,iframe[src*=youtube],iframe[src*=vimeo]\").css(\"visibility\",\"visible\"),e(this).remove(),e(window).unbind(\"scroll.prettyphoto\"),p(),settings.callback(),doresize=!0,v=!1,delete settings}))},!pp_alreadyInitialized&&t()&&(pp_alreadyInitialized=!0,hashIndex=t(),hashRel=hashIndex,hashIndex=hashIndex.substring(hashIndex.indexOf(\"/\")+1,hashIndex.length-1),hashRel=hashRel.substring(0,hashRel.indexOf(\"/\")),setTimeout(function(){e(\"a[\"+a.hook+\"^='\"+hashRel+\"']:eq(\"+hashIndex+\")\").trigger(\"click\")},50)),this.unbind(\"click.prettyphoto\").bind(\"click.prettyphoto\",e.prettyPhoto.initialize)}}(jQuery);var pp_alreadyInitialized=!1;\n      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      \t\t\t\t\t\t                              \t\t\t\t\t\t                     \t\t\t\t\t\t\t                            \t\t\t\t\t\t\t                              \t\t\t\t\t\t\t                             \t\t\t\t\t\t       \t\t\t\t\t\t                                   \t\t\t\t\t\t\t                      \t\t\t\t\t\t\t                       \t\t\t\t\t\t\t\t                         \t\t\t\t\t\t\t\t\t                                  \t\t\t\t\t\t\t\t\t                      \t\t\t\t\t\t\t\t\t\t                                                                  \t\t\t\t\t\t\t\t\t\t                                \t\t\t\t\t\t\t\t\t\t\t                                     \t\t\t\t\t\t\t\t\t\t\t                                             \t\t\t\t\t\t\t\t\t\t       \t\t\t\t\t\t\t\t\t\t                             \t\t\t\t\t\t\t\t\t\t                         \t\t\t\t\t\t\t\t\t\t\t                     \t\t\t\t\t\t\t\t\t\t\t\t                                                   \t\t\t\t\t\t\t\t\t\t\t\t                                     \t\t\t\t\t\t\t\t\t\t\t\t                                           \t\t\t\t\t\t\t\t\t\t\t       \t\t\t\t\t\t\t\t\t\t\t                               \t\t\t\t\t\t\t\t\t\t\t                                         \t\t\t\t\t\t\t\t\t\t\t                                       \t\t\t\t\t\t\t\t\t\t       \t\t\t\t\t\t\t\t\t       \t\t\t\t\t\t\t\t       \t\t\t\t\t\t\t       \t\t\t\t\t\t\t       \t\t\t\t\t\t       \t\t\t\t\t\t                        \t\t\t\t\t\t\t                            \t\t\t\t\t\t\t                              \t\t\t\t\t\t\t                             \t\t\t\t\t\t       \t\t\t\t\t       \t\t\t\t\t                                                                         \t\t\t\t\t\t\t\t                                                   \t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t\t     \t\t\t\t\t\t\t\t\t\t          \t\t\t\t\t\t\t\t\t      \t\t\t\t\t\t\t\t       \t\t\t\t\t\t\t\t                                           \t\t\t\t\t\t\t                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ^\n  332 | \n  333 | /*\n  334 |  *  equalHeights\n    at Parser.raise (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:6420:17)\n    at Parser.parseMaybeUnary (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8525:16)\n    at Parser.parseExprOps (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8402:23)\n    at Parser.parseMaybeConditional (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8375:23)\n    at Parser.parseMaybeAssign (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8325:21)\n    at Parser.parseExpression (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8282:36)\n    at Parser.parseStatementContent (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:10138:23)\n    at Parser.parseStatement (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:10009:17)\n    at Parser.parseBlockOrModuleBlockBody (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:10585:25)\n    at Parser.parseBlockBody (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:10572:10)\n    at Parser.parseBlock (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:10556:10)\n    at Parser.parseFunctionBody (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:9584:24)\n    at Parser.parseFunctionBodyAndFinish (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:9554:10)\n    at withTopicForbiddingContext (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:10717:12)\n    at Parser.withTopicForbiddingContext (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:9884:14)\n    at Parser.parseFunction (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:10716:10)\n    at Parser.parseFunctionExpression (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:9032:17)\n    at Parser.parseExprAtom (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8945:21)\n    at Parser.parseExprSubscripts (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8556:23)\n    at Parser.parseMaybeUnary (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8536:21)\n    at Parser.parseExprOps (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8402:23)\n    at Parser.parseMaybeConditional (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8375:23)\n    at Parser.parseMaybeAssign (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8325:21)\n    at Parser.parseExprListItem (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:9659:18)\n    at Parser.parseCallExpressionArguments (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8774:22)\n    at Parser.parseSubscript (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8661:29)\n    at Parser.parseSubscripts (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8577:19)\n    at Parser.parseExprSubscripts (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8566:17)\n    at Parser.parseMaybeUnary (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8536:21)\n    at Parser.parseExprOps (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8402:23)\n    at Parser.parseMaybeConditional (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8375:23)\n    at Parser.parseMaybeAssign (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8325:21)\n    at Parser.parseParenAndDistinguishExpression (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:9133:28)\n    at Parser.parseExprAtom (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8917:21)\n    at Parser.parseExprSubscripts (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8556:23)\n    at Parser.parseMaybeUnary (E:\\xampp\\htdocs\\rowad\\node_modules\\@babel\\parser\\lib\\index.js:8536:21)");

/***/ }),

/***/ "./public/js/jquery-ui.min.js":
/*!************************************!*\
  !*** ./public/js/jquery-ui.min.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery UI - v1.11.4 - 2015-12-06
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, menu.js, progressbar.js, selectmenu.js, slider.js, spinner.js, tabs.js, tooltip.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (e) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (e) {
  function t(t, s) {
    var n,
        a,
        o,
        r = t.nodeName.toLowerCase();
    return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t);
  }

  function i(t) {
    return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
      return "hidden" === e.css(this, "visibility");
    }).length;
  }

  function s(e) {
    for (var t, i; e.length && e[0] !== document;) {
      if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
      e = e.parent();
    }

    return 0;
  }

  function n() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
  }

  function a(t) {
    var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return t.delegate(i, "mouseout", function () {
      e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover");
    }).delegate(i, "mouseover", o);
  }

  function o() {
    e.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"));
  }

  function r(t, i) {
    e.extend(t, i);

    for (var s in i) {
      null == i[s] && (t[s] = i[s]);
    }

    return t;
  }

  function h(e) {
    return function () {
      var t = this.element.val();
      e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change");
    };
  }

  e.ui = e.ui || {}, e.extend(e.ui, {
    version: "1.11.4",
    keyCode: {
      BACKSPACE: 8,
      COMMA: 188,
      DELETE: 46,
      DOWN: 40,
      END: 35,
      ENTER: 13,
      ESCAPE: 27,
      HOME: 36,
      LEFT: 37,
      PAGE_DOWN: 34,
      PAGE_UP: 33,
      PERIOD: 190,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38
    }
  }), e.fn.extend({
    scrollParent: function scrollParent(t) {
      var i = this.css("position"),
          s = "absolute" === i,
          n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          a = this.parents().filter(function () {
        var t = e(this);
        return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
      }).eq(0);
      return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document);
    },
    uniqueId: function () {
      var e = 0;
      return function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++e);
        });
      };
    }(),
    removeUniqueId: function removeUniqueId() {
      return this.each(function () {
        /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
      });
    }
  }), e.extend(e.expr[":"], {
    data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
      return function (i) {
        return !!e.data(i, t);
      };
    }) : function (t, i, s) {
      return !!e.data(t, s[3]);
    },
    focusable: function focusable(i) {
      return t(i, !isNaN(e.attr(i, "tabindex")));
    },
    tabbable: function tabbable(i) {
      var s = e.attr(i, "tabindex"),
          n = isNaN(s);
      return (n || s >= 0) && t(i, !n);
    }
  }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
    function s(t, i, s, a) {
      return e.each(n, function () {
        i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0);
      }), i;
    }

    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        a = i.toLowerCase(),
        o = {
      innerWidth: e.fn.innerWidth,
      innerHeight: e.fn.innerHeight,
      outerWidth: e.fn.outerWidth,
      outerHeight: e.fn.outerHeight
    };
    e.fn["inner" + i] = function (t) {
      return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
        e(this).css(a, s(this, t) + "px");
      });
    }, e.fn["outer" + i] = function (t, n) {
      return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
        e(this).css(a, s(this, t, !0, n) + "px");
      });
    };
  }), e.fn.addBack || (e.fn.addBack = function (e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
  }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
    return function (i) {
      return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this);
    };
  }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
    focus: function (t) {
      return function (i, s) {
        return "number" == typeof i ? this.each(function () {
          var t = this;
          setTimeout(function () {
            e(t).focus(), s && s.call(t);
          }, i);
        }) : t.apply(this, arguments);
      };
    }(e.fn.focus),
    disableSelection: function () {
      var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
      return function () {
        return this.bind(e + ".ui-disableSelection", function (e) {
          e.preventDefault();
        });
      };
    }(),
    enableSelection: function enableSelection() {
      return this.unbind(".ui-disableSelection");
    },
    zIndex: function zIndex(t) {
      if (void 0 !== t) return this.css("zIndex", t);
      if (this.length) for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
        if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
        n = n.parent();
      }
      return 0;
    }
  }), e.ui.plugin = {
    add: function add(t, i, s) {
      var n,
          a = e.ui[t].prototype;

      for (n in s) {
        a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]]);
      }
    },
    call: function call(e, t, i, s) {
      var n,
          a = e.plugins[t];
      if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (n = 0; a.length > n; n++) {
        e.options[a[n][0]] && a[n][1].apply(e.element, i);
      }
    }
  };
  var l = 0,
      u = Array.prototype.slice;
  e.cleanData = function (t) {
    return function (i) {
      var s, n, a;

      for (a = 0; null != (n = i[a]); a++) {
        try {
          s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove");
        } catch (o) {}
      }

      t(i);
    };
  }(e.cleanData), e.widget = function (t, i, s) {
    var n,
        a,
        o,
        r,
        h = {},
        l = t.split(".")[0];
    return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
      return !!e.data(t, n);
    }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
      return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t);
    }, e.extend(o, a, {
      version: s.version,
      _proto: e.extend({}, s),
      _childConstructors: []
    }), r = new i(), r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
      return e.isFunction(s) ? (h[t] = function () {
        var e = function e() {
          return i.prototype[t].apply(this, arguments);
        },
            n = function n(e) {
          return i.prototype[t].apply(this, e);
        };

        return function () {
          var t,
              i = this._super,
              a = this._superApply;
          return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t;
        };
      }(), void 0) : (h[t] = s, void 0);
    }), o.prototype = e.widget.extend(r, {
      widgetEventPrefix: a ? r.widgetEventPrefix || t : t
    }, h, {
      constructor: o,
      namespace: l,
      widgetName: t,
      widgetFullName: n
    }), a ? (e.each(a._childConstructors, function (t, i) {
      var s = i.prototype;
      e.widget(s.namespace + "." + s.widgetName, o, i._proto);
    }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o;
  }, e.widget.extend = function (t) {
    for (var i, s, n = u.call(arguments, 1), a = 0, o = n.length; o > a; a++) {
      for (i in n[a]) {
        s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
      }
    }

    return t;
  }, e.widget.bridge = function (t, i) {
    var s = i.prototype.widgetFullName || t;

    e.fn[t] = function (n) {
      var a = "string" == typeof n,
          o = u.call(arguments, 1),
          r = this;
      return a ? this.each(function () {
        var i,
            a = e.data(this, s);
        return "instance" === n ? (r = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o), i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'");
      }) : (o.length && (n = e.widget.extend.apply(null, [n].concat(o))), this.each(function () {
        var t = e.data(this, s);
        t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this));
      })), r;
    };
  }, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
      disabled: !1,
      create: null
    },
    _createWidget: function _createWidget(t, i) {
      i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
        remove: function remove(e) {
          e.target === i && this.destroy();
        }
      }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init();
    },
    _getCreateOptions: e.noop,
    _getCreateEventData: e.noop,
    _create: e.noop,
    _init: e.noop,
    destroy: function destroy() {
      this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
    },
    _destroy: e.noop,
    widget: function widget() {
      return this.element;
    },
    option: function option(t, i) {
      var s,
          n,
          a,
          o = t;
      if (0 === arguments.length) return e.widget.extend({}, this.options);
      if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) {
        for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) {
          n[s[a]] = n[s[a]] || {}, n = n[s[a]];
        }

        if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
        n[t] = i;
      } else {
        if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
        o[t] = i;
      }
      return this._setOptions(o), this;
    },
    _setOptions: function _setOptions(e) {
      var t;

      for (t in e) {
        this._setOption(t, e[t]);
      }

      return this;
    },
    _setOption: function _setOption(e, t) {
      return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
    },
    enable: function enable() {
      return this._setOptions({
        disabled: !1
      });
    },
    disable: function disable() {
      return this._setOptions({
        disabled: !0
      });
    },
    _on: function _on(t, i, s) {
      var n,
          a = this;
      "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
        function r() {
          return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0;
        }

        "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
        var h = s.match(/^([\w:-]*)\s*(.*)$/),
            l = h[1] + a.eventNamespace,
            u = h[2];
        u ? n.delegate(u, l, r) : i.bind(l, r);
      });
    },
    _off: function _off(t, i) {
      i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get());
    },
    _delay: function _delay(e, t) {
      function i() {
        return ("string" == typeof e ? s[e] : e).apply(s, arguments);
      }

      var s = this;
      return setTimeout(i, t || 0);
    },
    _hoverable: function _hoverable(t) {
      this.hoverable = this.hoverable.add(t), this._on(t, {
        mouseenter: function mouseenter(t) {
          e(t.currentTarget).addClass("ui-state-hover");
        },
        mouseleave: function mouseleave(t) {
          e(t.currentTarget).removeClass("ui-state-hover");
        }
      });
    },
    _focusable: function _focusable(t) {
      this.focusable = this.focusable.add(t), this._on(t, {
        focusin: function focusin(t) {
          e(t.currentTarget).addClass("ui-state-focus");
        },
        focusout: function focusout(t) {
          e(t.currentTarget).removeClass("ui-state-focus");
        }
      });
    },
    _trigger: function _trigger(t, i, s) {
      var n,
          a,
          o = this.options[t];
      if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) {
        n in i || (i[n] = a[n]);
      }
      return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
    }
  }, e.each({
    show: "fadeIn",
    hide: "fadeOut"
  }, function (t, i) {
    e.Widget.prototype["_" + t] = function (s, n, a) {
      "string" == typeof n && (n = {
        effect: n
      });
      var o,
          r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
      n = n || {}, "number" == typeof n && (n = {
        duration: n
      }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
        e(this)[t](), a && a.call(s[0]), i();
      });
    };
  }), e.widget;
  var d = !1;
  e(document).mouseup(function () {
    d = !1;
  }), e.widget("ui.mouse", {
    version: "1.11.4",
    options: {
      cancel: "input,textarea,button,select,option",
      distance: 1,
      delay: 0
    },
    _mouseInit: function _mouseInit() {
      var t = this;
      this.element.bind("mousedown." + this.widgetName, function (e) {
        return t._mouseDown(e);
      }).bind("click." + this.widgetName, function (i) {
        return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
      }), this.started = !1;
    },
    _mouseDestroy: function _mouseDestroy() {
      this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
    },
    _mouseDown: function _mouseDown(t) {
      if (!d) {
        this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
        var i = this,
            s = 1 === t.which,
            n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
        return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
          i.mouseDelayMet = !0;
        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
          return i._mouseMove(e);
        }, this._mouseUpDelegate = function (e) {
          return i._mouseUp(e);
        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), d = !0, !0)) : !0;
      }
    },
    _mouseMove: function _mouseMove(t) {
      if (this._mouseMoved) {
        if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
        if (!t.which) return this._mouseUp(t);
      }

      return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
    },
    _mouseUp: function _mouseUp(t) {
      return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), d = !1, !1;
    },
    _mouseDistanceMet: function _mouseDistanceMet(e) {
      return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
    },
    _mouseDelayMet: function _mouseDelayMet() {
      return this.mouseDelayMet;
    },
    _mouseStart: function _mouseStart() {},
    _mouseDrag: function _mouseDrag() {},
    _mouseStop: function _mouseStop() {},
    _mouseCapture: function _mouseCapture() {
      return !0;
    }
  }), function () {
    function t(e, t, i) {
      return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)];
    }

    function i(t, i) {
      return parseInt(e.css(t, i), 10) || 0;
    }

    function s(t) {
      var i = t[0];
      return 9 === i.nodeType ? {
        width: t.width(),
        height: t.height(),
        offset: {
          top: 0,
          left: 0
        }
      } : e.isWindow(i) ? {
        width: t.width(),
        height: t.height(),
        offset: {
          top: t.scrollTop(),
          left: t.scrollLeft()
        }
      } : i.preventDefault ? {
        width: 0,
        height: 0,
        offset: {
          top: i.pageY,
          left: i.pageX
        }
      } : {
        width: t.outerWidth(),
        height: t.outerHeight(),
        offset: t.offset()
      };
    }

    e.ui = e.ui || {};
    var n,
        a,
        o = Math.max,
        r = Math.abs,
        h = Math.round,
        l = /left|center|right/,
        u = /top|center|bottom/,
        d = /[\+\-]\d+(\.[\d]+)?%?/,
        c = /^\w+/,
        p = /%$/,
        f = e.fn.position;
    e.position = {
      scrollbarWidth: function scrollbarWidth() {
        if (void 0 !== n) return n;
        var t,
            i,
            s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
            a = s.children()[0];
        return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i;
      },
      getScrollInfo: function getScrollInfo(t) {
        var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
            s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
            n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
            a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
        return {
          width: a ? e.position.scrollbarWidth() : 0,
          height: n ? e.position.scrollbarWidth() : 0
        };
      },
      getWithinInfo: function getWithinInfo(t) {
        var i = e(t || window),
            s = e.isWindow(i[0]),
            n = !!i[0] && 9 === i[0].nodeType;
        return {
          element: i,
          isWindow: s,
          isDocument: n,
          offset: i.offset() || {
            left: 0,
            top: 0
          },
          scrollLeft: i.scrollLeft(),
          scrollTop: i.scrollTop(),
          width: s || n ? i.width() : i.outerWidth(),
          height: s || n ? i.height() : i.outerHeight()
        };
      }
    }, e.fn.position = function (n) {
      if (!n || !n.of) return f.apply(this, arguments);
      n = e.extend({}, n);

      var p,
          m,
          g,
          v,
          y,
          b,
          _ = e(n.of),
          x = e.position.getWithinInfo(n.within),
          k = e.position.getScrollInfo(x),
          w = (n.collision || "flip").split(" "),
          T = {};

      return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function () {
        var e,
            t,
            i = (n[this] || "").split(" ");
        1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]];
      }), 1 === w.length && (w[1] = w[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function () {
        var s,
            l,
            u = e(this),
            d = u.outerWidth(),
            c = u.outerHeight(),
            f = i(this, "marginLeft"),
            b = i(this, "marginTop"),
            D = d + f + i(this, "marginRight") + k.width,
            S = c + b + i(this, "marginBottom") + k.height,
            M = e.extend({}, y),
            N = t(T.my, u.outerWidth(), u.outerHeight());
        "right" === n.my[0] ? M.left -= d : "center" === n.my[0] && (M.left -= d / 2), "bottom" === n.my[1] ? M.top -= c : "center" === n.my[1] && (M.top -= c / 2), M.left += N[0], M.top += N[1], a || (M.left = h(M.left), M.top = h(M.top)), s = {
          marginLeft: f,
          marginTop: b
        }, e.each(["left", "top"], function (t, i) {
          e.ui.position[w[t]] && e.ui.position[w[t]][i](M, {
            targetWidth: m,
            targetHeight: g,
            elemWidth: d,
            elemHeight: c,
            collisionPosition: s,
            collisionWidth: D,
            collisionHeight: S,
            offset: [p[0] + N[0], p[1] + N[1]],
            my: n.my,
            at: n.at,
            within: x,
            elem: u
          });
        }), n.using && (l = function l(e) {
          var t = v.left - M.left,
              i = t + m - d,
              s = v.top - M.top,
              a = s + g - c,
              h = {
            target: {
              element: _,
              left: v.left,
              top: v.top,
              width: m,
              height: g
            },
            element: {
              element: u,
              left: M.left,
              top: M.top,
              width: d,
              height: c
            },
            horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
            vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
          };
          d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h);
        }), u.offset(e.extend(M, {
          using: l
        }));
      });
    }, e.ui.position = {
      fit: {
        left: function left(e, t) {
          var i,
              s = t.within,
              n = s.isWindow ? s.scrollLeft : s.offset.left,
              a = s.width,
              r = e.left - t.collisionPosition.marginLeft,
              h = n - r,
              l = r + t.collisionWidth - a - n;
          t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left);
        },
        top: function top(e, t) {
          var i,
              s = t.within,
              n = s.isWindow ? s.scrollTop : s.offset.top,
              a = t.within.height,
              r = e.top - t.collisionPosition.marginTop,
              h = n - r,
              l = r + t.collisionHeight - a - n;
          t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top);
        }
      },
      flip: {
        left: function left(e, t) {
          var i,
              s,
              n = t.within,
              a = n.offset.left + n.scrollLeft,
              o = n.width,
              h = n.isWindow ? n.scrollLeft : n.offset.left,
              l = e.left - t.collisionPosition.marginLeft,
              u = l - h,
              d = l + t.collisionWidth - o - h,
              c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
              p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
              f = -2 * t.offset[0];
          0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f));
        },
        top: function top(e, t) {
          var i,
              s,
              n = t.within,
              a = n.offset.top + n.scrollTop,
              o = n.height,
              h = n.isWindow ? n.scrollTop : n.offset.top,
              l = e.top - t.collisionPosition.marginTop,
              u = l - h,
              d = l + t.collisionHeight - o - h,
              c = "top" === t.my[1],
              p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
              f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
              m = -2 * t.offset[1];
          0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, (i > 0 || d > r(i)) && (e.top += p + f + m));
        }
      },
      flipfit: {
        left: function left() {
          e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments);
        },
        top: function top() {
          e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments);
        }
      }
    }, function () {
      var t,
          i,
          s,
          n,
          o,
          r = document.getElementsByTagName("body")[0],
          h = document.createElement("div");
      t = document.createElement(r ? "div" : "body"), s = {
        visibility: "hidden",
        width: 0,
        height: 0,
        border: 0,
        margin: 0,
        background: "none"
      }, r && e.extend(s, {
        position: "absolute",
        left: "-1000px",
        top: "-1000px"
      });

      for (o in s) {
        t.style[o] = s[o];
      }

      t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t);
    }();
  }(), e.ui.position, e.widget("ui.draggable", e.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "drag",
    options: {
      addClasses: !0,
      appendTo: "parent",
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: "default",
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: "both",
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function _create() {
      "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit();
    },
    _setOption: function _setOption(e, t) {
      this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName());
    },
    _destroy: function _destroy() {
      return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0);
    },
    _mouseCapture: function _mouseCapture(t) {
      var i = this.options;
      return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1);
    },
    _blockFrames: function _blockFrames(t) {
      this.iframeBlocks = this.document.find(t).map(function () {
        var t = e(this);
        return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0];
      });
    },
    _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _blurActiveElement: function _blurActiveElement(t) {
      var i = this.document[0];
      if (this.handleElement.is(t.target)) try {
        i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur();
      } catch (s) {}
    },
    _mouseStart: function _mouseStart(t) {
      var i = this.options;
      return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
        return "fixed" === e(this).css("position");
      }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0);
    },
    _refreshOffsets: function _refreshOffsets(e) {
      this.offset = {
        top: this.positionAbs.top - this.margins.top,
        left: this.positionAbs.left - this.margins.left,
        scroll: !1,
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }, this.offset.click = {
        left: e.pageX - this.offset.left,
        top: e.pageY - this.offset.top
      };
    },
    _mouseDrag: function _mouseDrag(t, i) {
      if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
        var s = this._uiHash();

        if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
        this.position = s.position;
      }

      return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1;
    },
    _mouseStop: function _mouseStop(t) {
      var i = this,
          s = !1;
      return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
        i._trigger("stop", t) !== !1 && i._clear();
      }) : this._trigger("stop", t) !== !1 && this._clear(), !1;
    },
    _mouseUp: function _mouseUp(t) {
      return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t);
    },
    cancel: function cancel() {
      return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this;
    },
    _getHandle: function _getHandle(t) {
      return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0;
    },
    _setHandleClassName: function _setHandleClassName() {
      this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle");
    },
    _removeHandleClassName: function _removeHandleClassName() {
      this.handleElement.removeClass("ui-draggable-handle");
    },
    _createHelper: function _createHelper(t) {
      var i = this.options,
          s = e.isFunction(i.helper),
          n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
      return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n;
    },
    _setPositionRelative: function _setPositionRelative() {
      /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative");
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    },
    _isRootNode: function _isRootNode(e) {
      return /(html|body)/i.test(e.tagName) || e === this.document[0];
    },
    _getParentOffset: function _getParentOffset() {
      var t = this.offsetParent.offset(),
          i = this.document[0];
      return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
        top: 0,
        left: 0
      }), {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" !== this.cssPosition) return {
        top: 0,
        left: 0
      };

      var e = this.element.position(),
          t = this._isRootNode(this.scrollParent[0]);

      return {
        top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
        left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.element.css("marginLeft"), 10) || 0,
        top: parseInt(this.element.css("marginTop"), 10) || 0,
        right: parseInt(this.element.css("marginRight"), 10) || 0,
        bottom: parseInt(this.element.css("marginBottom"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var t,
          i,
          s,
          n = this.options,
          a = this.document[0];
      return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0);
    },
    _convertPositionTo: function _convertPositionTo(e, t) {
      t || (t = this.position);

      var i = "absolute" === e ? 1 : -1,
          s = this._isRootNode(this.scrollParent[0]);

      return {
        top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
        left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
      };
    },
    _generatePosition: function _generatePosition(e, t) {
      var i,
          s,
          n,
          a,
          o = this.options,
          r = this._isRootNode(this.scrollParent[0]),
          h = e.pageX,
          l = e.pageY;

      return r && this.offset.scroll || (this.offset.scroll = {
        top: this.scrollParent.scrollTop(),
        left: this.scrollParent.scrollLeft()
      }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), {
        top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
        left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
      };
    },
    _clear: function _clear() {
      this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy();
    },
    _normalizeRightBottom: function _normalizeRightBottom() {
      "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"));
    },
    _trigger: function _trigger(t, i, s) {
      return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s);
    },
    plugins: {},
    _uiHash: function _uiHash() {
      return {
        helper: this.helper,
        position: this.position,
        originalPosition: this.originalPosition,
        offset: this.positionAbs
      };
    }
  }), e.ui.plugin.add("draggable", "connectToSortable", {
    start: function start(t, i, s) {
      var n = e.extend({}, i, {
        item: s.element
      });
      s.sortables = [], e(s.options.connectToSortable).each(function () {
        var i = e(this).sortable("instance");
        i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n));
      });
    },
    stop: function stop(t, i, s) {
      var n = e.extend({}, i, {
        item: s.element
      });
      s.cancelHelperRemoval = !1, e.each(s.sortables, function () {
        var e = this;
        e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
          position: e.placeholder.css("position"),
          top: e.placeholder.css("top"),
          left: e.placeholder.css("left")
        }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n));
      });
    },
    drag: function drag(t, i, s) {
      e.each(s.sortables, function () {
        var n = !1,
            a = this;
        a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function () {
          return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n;
        })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function () {
          return i.helper[0];
        }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function () {
          this.refreshPositions();
        }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function () {
          this.refreshPositions();
        }));
      });
    }
  }), e.ui.plugin.add("draggable", "cursor", {
    start: function start(t, i, s) {
      var n = e("body"),
          a = s.options;
      n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor);
    },
    stop: function stop(t, i, s) {
      var n = s.options;
      n._cursor && e("body").css("cursor", n._cursor);
    }
  }), e.ui.plugin.add("draggable", "opacity", {
    start: function start(t, i, s) {
      var n = e(i.helper),
          a = s.options;
      n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity);
    },
    stop: function stop(t, i, s) {
      var n = s.options;
      n._opacity && e(i.helper).css("opacity", n._opacity);
    }
  }), e.ui.plugin.add("draggable", "scroll", {
    start: function start(e, t, i) {
      i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
    },
    drag: function drag(t, i, s) {
      var n = s.options,
          a = !1,
          o = s.scrollParentNotHidden[0],
          r = s.document[0];
      o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t);
    }
  }), e.ui.plugin.add("draggable", "snap", {
    start: function start(t, i, s) {
      var n = s.options;
      s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
        var t = e(this),
            i = t.offset();
        this !== s.element[0] && s.snapElements.push({
          item: this,
          width: t.outerWidth(),
          height: t.outerHeight(),
          top: i.top,
          left: i.left
        });
      });
    },
    drag: function drag(t, i, s) {
      var n,
          a,
          o,
          r,
          h,
          l,
          u,
          d,
          c,
          p,
          f = s.options,
          m = f.snapTolerance,
          g = i.offset.left,
          v = g + s.helperProportions.width,
          y = i.offset.top,
          b = y + s.helperProportions.height;

      for (c = s.snapElements.length - 1; c >= 0; c--) {
        h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {
          snapItem: s.snapElements[c].item
        })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
          top: u - s.helperProportions.height,
          left: 0
        }).top), a && (i.position.top = s._convertPositionTo("relative", {
          top: d,
          left: 0
        }).top), o && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: h - s.helperProportions.width
        }).left), r && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: l
        }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
          top: u,
          left: 0
        }).top), a && (i.position.top = s._convertPositionTo("relative", {
          top: d - s.helperProportions.height,
          left: 0
        }).top), o && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: h
        }).left), r && (i.position.left = s._convertPositionTo("relative", {
          top: 0,
          left: l - s.helperProportions.width
        }).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), {
          snapItem: s.snapElements[c].item
        })), s.snapElements[c].snapping = n || a || o || r || p);
      }
    }
  }), e.ui.plugin.add("draggable", "stack", {
    start: function start(t, i, s) {
      var n,
          a = s.options,
          o = e.makeArray(e(a.stack)).sort(function (t, i) {
        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0);
      });
      o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function (t) {
        e(this).css("zIndex", n + t);
      }), this.css("zIndex", n + o.length));
    }
  }), e.ui.plugin.add("draggable", "zIndex", {
    start: function start(t, i, s) {
      var n = e(i.helper),
          a = s.options;
      n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex);
    },
    stop: function stop(t, i, s) {
      var n = s.options;
      n._zIndex && e(i.helper).css("zIndex", n._zIndex);
    }
  }), e.ui.draggable, e.widget("ui.droppable", {
    version: "1.11.4",
    widgetEventPrefix: "drop",
    options: {
      accept: "*",
      activeClass: !1,
      addClasses: !0,
      greedy: !1,
      hoverClass: !1,
      scope: "default",
      tolerance: "intersect",
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function _create() {
      var t,
          i = this.options,
          s = i.accept;
      this.isover = !1, this.isout = !0, this.accept = e.isFunction(s) ? s : function (e) {
        return e.is(s);
      }, this.proportions = function () {
        return arguments.length ? (t = arguments[0], void 0) : t ? t : t = {
          width: this.element[0].offsetWidth,
          height: this.element[0].offsetHeight
        };
      }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable");
    },
    _addToManager: function _addToManager(t) {
      e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this);
    },
    _splice: function _splice(e) {
      for (var t = 0; e.length > t; t++) {
        e[t] === this && e.splice(t, 1);
      }
    },
    _destroy: function _destroy() {
      var t = e.ui.ddmanager.droppables[this.options.scope];
      this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled");
    },
    _setOption: function _setOption(t, i) {
      if ("accept" === t) this.accept = e.isFunction(i) ? i : function (e) {
        return e.is(i);
      };else if ("scope" === t) {
        var s = e.ui.ddmanager.droppables[this.options.scope];
        this._splice(s), this._addToManager(i);
      }

      this._super(t, i);
    },
    _activate: function _activate(t) {
      var i = e.ui.ddmanager.current;
      this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i));
    },
    _deactivate: function _deactivate(t) {
      var i = e.ui.ddmanager.current;
      this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i));
    },
    _over: function _over(t) {
      var i = e.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)));
    },
    _out: function _out(t) {
      var i = e.ui.ddmanager.current;
      i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)));
    },
    _drop: function _drop(t, i) {
      var s = i || e.ui.ddmanager.current,
          n = !1;
      return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
        var i = e(this).droppable("instance");
        return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(i, {
          offset: i.element.offset()
        }), i.options.tolerance, t) ? (n = !0, !1) : void 0;
      }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1;
    },
    ui: function ui(e) {
      return {
        draggable: e.currentItem || e.element,
        helper: e.helper,
        position: e.position,
        offset: e.positionAbs
      };
    }
  }), e.ui.intersect = function () {
    function e(e, t, i) {
      return e >= t && t + i > e;
    }

    return function (t, i, s, n) {
      if (!i.offset) return !1;
      var a = (t.positionAbs || t.position.absolute).left + t.margins.left,
          o = (t.positionAbs || t.position.absolute).top + t.margins.top,
          r = a + t.helperProportions.width,
          h = o + t.helperProportions.height,
          l = i.offset.left,
          u = i.offset.top,
          d = l + i.proportions().width,
          c = u + i.proportions().height;

      switch (s) {
        case "fit":
          return a >= l && d >= r && o >= u && c >= h;

        case "intersect":
          return a + t.helperProportions.width / 2 > l && d > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > u && c > h - t.helperProportions.height / 2;

        case "pointer":
          return e(n.pageY, u, i.proportions().height) && e(n.pageX, l, i.proportions().width);

        case "touch":
          return (o >= u && c >= o || h >= u && c >= h || u > o && h > c) && (a >= l && d >= a || r >= l && d >= r || l > a && r > d);

        default:
          return !1;
      }
    };
  }(), e.ui.ddmanager = {
    current: null,
    droppables: {
      "default": []
    },
    prepareOffsets: function prepareOffsets(t, i) {
      var s,
          n,
          a = e.ui.ddmanager.droppables[t.options.scope] || [],
          o = i ? i.type : null,
          r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();

      e: for (s = 0; a.length > s; s++) {
        if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
          for (n = 0; r.length > n; n++) {
            if (r[n] === a[s].element[0]) {
              a[s].proportions().height = 0;
              continue e;
            }
          }

          a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({
            width: a[s].element[0].offsetWidth,
            height: a[s].element[0].offsetHeight
          }));
        }
      }
    },
    drop: function drop(t, i) {
      var s = !1;
      return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
        this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)));
      }), s;
    },
    dragStart: function dragStart(t, i) {
      t.element.parentsUntil("body").bind("scroll.droppable", function () {
        t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i);
      });
    },
    drag: function drag(t, i) {
      t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
        if (!this.options.disabled && !this.greedyChild && this.visible) {
          var s,
              n,
              a,
              o = e.ui.intersect(t, this, this.options.tolerance, i),
              r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
          r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
            return e(this).droppable("instance").options.scope === n;
          }), a.length && (s = e(a[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)));
        }
      });
    },
    dragStop: function dragStop(t, i) {
      t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i);
    }
  }, e.ui.droppable, e.widget("ui.resizable", e.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "resize",
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: "slow",
      animateEasing: "swing",
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: "e,s,se",
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _num: function _num(e) {
      return parseInt(e, 10) || 0;
    },
    _isNumber: function _isNumber(e) {
      return !isNaN(parseInt(e, 10));
    },
    _hasScroll: function _hasScroll(t, i) {
      if ("hidden" === e(t).css("overflow")) return !1;
      var s = i && "left" === i ? "scrollLeft" : "scrollTop",
          n = !1;
      return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n);
    },
    _create: function _create() {
      var t,
          i,
          s,
          n,
          a,
          o = this,
          r = this.options;
      if (this.element.addClass("ui-resizable"), e.extend(this, {
        _aspectRatio: !!r.aspectRatio,
        aspectRatio: r.aspectRatio,
        originalElement: this.element,
        _proportionallyResizeElements: [],
        _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
      }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
        position: this.element.css("position"),
        width: this.element.outerWidth(),
        height: this.element.outerHeight(),
        top: this.element.css("top"),
        left: this.element.css("left")
      })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
        marginLeft: this.originalElement.css("marginLeft"),
        marginTop: this.originalElement.css("marginTop"),
        marginRight: this.originalElement.css("marginRight"),
        marginBottom: this.originalElement.css("marginBottom")
      }), this.originalElement.css({
        marginLeft: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0
      }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
        position: "static",
        zoom: 1,
        display: "block"
      })), this.originalElement.css({
        margin: this.originalElement.css("margin")
      }), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
        n: ".ui-resizable-n",
        e: ".ui-resizable-e",
        s: ".ui-resizable-s",
        w: ".ui-resizable-w",
        se: ".ui-resizable-se",
        sw: ".ui-resizable-sw",
        ne: ".ui-resizable-ne",
        nw: ".ui-resizable-nw"
      } : "e,s,se"), this._handles = e(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) {
        s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
          zIndex: r.zIndex
        }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
      }
      this._renderAxis = function (t) {
        var i, s, n, a;
        t = t || this.element;

        for (i in this.handles) {
          this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], {
            mousedown: o._mouseDown
          })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i]);
        }
      }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function () {
        o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se");
      }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
        r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show());
      }).mouseleave(function () {
        r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide());
      })), this._mouseInit();
    },
    _destroy: function _destroy() {
      this._mouseDestroy();

      var t,
          i = function i(t) {
        e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove();
      };

      return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
        position: t.css("position"),
        width: t.outerWidth(),
        height: t.outerHeight(),
        top: t.css("top"),
        left: t.css("left")
      }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this;
    },
    _mouseCapture: function _mouseCapture(t) {
      var i,
          s,
          n = !1;

      for (i in this.handles) {
        s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
      }

      return !this.options.disabled && n;
    },
    _mouseStart: function _mouseStart(t) {
      var i,
          s,
          n,
          a = this.options,
          o = this.element;
      return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
        left: i,
        top: s
      }, this.size = this._helper ? {
        width: this.helper.width(),
        height: this.helper.height()
      } : {
        width: o.width(),
        height: o.height()
      }, this.originalSize = this._helper ? {
        width: o.outerWidth(),
        height: o.outerHeight()
      } : {
        width: o.width(),
        height: o.height()
      }, this.sizeDiff = {
        width: o.outerWidth() - o.width(),
        height: o.outerHeight() - o.height()
      }, this.originalPosition = {
        left: i,
        top: s
      }, this.originalMousePosition = {
        left: t.pageX,
        top: t.pageY
      }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0;
    },
    _mouseDrag: function _mouseDrag(t) {
      var i,
          s,
          n = this.originalMousePosition,
          a = this.axis,
          o = t.pageX - n.left || 0,
          r = t.pageY - n.top || 0,
          h = this._change[a];
      return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1;
    },
    _mouseStop: function _mouseStop(t) {
      this.resizing = !1;
      var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l = this.options,
          u = this;
      return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
        width: u.helper.width() - a,
        height: u.helper.height() - n
      }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
        top: h,
        left: r
      })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1;
    },
    _updatePrevProperties: function _updatePrevProperties() {
      this.prevPosition = {
        top: this.position.top,
        left: this.position.left
      }, this.prevSize = {
        width: this.size.width,
        height: this.size.height
      };
    },
    _applyChanges: function _applyChanges() {
      var e = {};
      return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e;
    },
    _updateVirtualBoundaries: function _updateVirtualBoundaries(e) {
      var t,
          i,
          s,
          n,
          a,
          o = this.options;
      a = {
        minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
        maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
        minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
        maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
      }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a;
    },
    _updateCache: function _updateCache(e) {
      this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width);
    },
    _updateRatio: function _updateRatio(e) {
      var t = this.position,
          i = this.size,
          s = this.axis;
      return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e;
    },
    _respectSize: function _respectSize(e) {
      var t = this._vBoundaries,
          i = this.axis,
          s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
          n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
          a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
          o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
          r = this.originalPosition.left + this.originalSize.width,
          h = this.position.top + this.size.height,
          l = /sw|nw|w/.test(i),
          u = /nw|ne|n/.test(i);
      return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e;
    },
    _getPaddingPlusBorderDimensions: function _getPaddingPlusBorderDimensions(e) {
      for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) {
        i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0;
      }

      return {
        height: i[0] + i[2],
        width: i[1] + i[3]
      };
    },
    _proportionallyResize: function _proportionallyResize() {
      if (this._proportionallyResizeElements.length) for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) {
        e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
          height: i.height() - this.outerDimensions.height || 0,
          width: i.width() - this.outerDimensions.width || 0
        });
      }
    },
    _renderProxy: function _renderProxy() {
      var t = this.element,
          i = this.options;
      this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
        width: this.element.outerWidth() - 1,
        height: this.element.outerHeight() - 1,
        position: "absolute",
        left: this.elementOffset.left + "px",
        top: this.elementOffset.top + "px",
        zIndex: ++i.zIndex
      }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element;
    },
    _change: {
      e: function e(_e, t) {
        return {
          width: this.originalSize.width + t
        };
      },
      w: function w(e, t) {
        var i = this.originalSize,
            s = this.originalPosition;
        return {
          left: s.left + t,
          width: i.width - t
        };
      },
      n: function n(e, t, i) {
        var s = this.originalSize,
            n = this.originalPosition;
        return {
          top: n.top + i,
          height: s.height - i
        };
      },
      s: function s(e, t, i) {
        return {
          height: this.originalSize.height + i
        };
      },
      se: function se(t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]));
      },
      sw: function sw(t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]));
      },
      ne: function ne(t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]));
      },
      nw: function nw(t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]));
      }
    },
    _propagate: function _propagate(t, i) {
      e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui());
    },
    plugins: {},
    ui: function ui() {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      };
    }
  }), e.ui.plugin.add("resizable", "animate", {
    stop: function stop(t) {
      var i = e(this).resizable("instance"),
          s = i.options,
          n = i._proportionallyResizeElements,
          a = n.length && /textarea/i.test(n[0].nodeName),
          o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
          r = a ? 0 : i.sizeDiff.width,
          h = {
        width: i.size.width - r,
        height: i.size.height - o
      },
          l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
          u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
      i.element.animate(e.extend(h, u && l ? {
        top: u,
        left: l
      } : {}), {
        duration: s.animateDuration,
        easing: s.animateEasing,
        step: function step() {
          var s = {
            width: parseInt(i.element.css("width"), 10),
            height: parseInt(i.element.css("height"), 10),
            top: parseInt(i.element.css("top"), 10),
            left: parseInt(i.element.css("left"), 10)
          };
          n && n.length && e(n[0]).css({
            width: s.width,
            height: s.height
          }), i._updateCache(s), i._propagate("resize", t);
        }
      });
    }
  }), e.ui.plugin.add("resizable", "containment", {
    start: function start() {
      var t,
          i,
          s,
          n,
          a,
          o,
          r,
          h = e(this).resizable("instance"),
          l = h.options,
          u = h.element,
          d = l.containment,
          c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
      c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = {
        left: 0,
        top: 0
      }, h.containerPosition = {
        left: 0,
        top: 0
      }, h.parentData = {
        element: e(document),
        left: 0,
        top: 0,
        width: e(document).width(),
        height: e(document).height() || document.body.parentNode.scrollHeight
      }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, s) {
        i[e] = h._num(t.css("padding" + s));
      }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = {
        height: t.innerHeight() - i[3],
        width: t.innerWidth() - i[1]
      }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = {
        element: c,
        left: s.left,
        top: s.top,
        width: o,
        height: r
      }));
    },
    resize: function resize(t) {
      var i,
          s,
          n,
          a,
          o = e(this).resizable("instance"),
          r = o.options,
          h = o.containerOffset,
          l = o.position,
          u = o._aspectRatio || t.shiftKey,
          d = {
        top: 0,
        left: 0
      },
          c = o.containerElement,
          p = !0;
      c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height);
    },
    stop: function stop() {
      var t = e(this).resizable("instance"),
          i = t.options,
          s = t.containerOffset,
          n = t.containerPosition,
          a = t.containerElement,
          o = e(t.helper),
          r = o.offset(),
          h = o.outerWidth() - t.sizeDiff.width,
          l = o.outerHeight() - t.sizeDiff.height;
      t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
        left: r.left - n.left - s.left,
        width: h,
        height: l
      });
    }
  }), e.ui.plugin.add("resizable", "alsoResize", {
    start: function start() {
      var t = e(this).resizable("instance"),
          i = t.options;
      e(i.alsoResize).each(function () {
        var t = e(this);
        t.data("ui-resizable-alsoresize", {
          width: parseInt(t.width(), 10),
          height: parseInt(t.height(), 10),
          left: parseInt(t.css("left"), 10),
          top: parseInt(t.css("top"), 10)
        });
      });
    },
    resize: function resize(t, i) {
      var s = e(this).resizable("instance"),
          n = s.options,
          a = s.originalSize,
          o = s.originalPosition,
          r = {
        height: s.size.height - a.height || 0,
        width: s.size.width - a.width || 0,
        top: s.position.top - o.top || 0,
        left: s.position.left - o.left || 0
      };
      e(n.alsoResize).each(function () {
        var t = e(this),
            s = e(this).data("ui-resizable-alsoresize"),
            n = {},
            a = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
        e.each(a, function (e, t) {
          var i = (s[t] || 0) + (r[t] || 0);
          i && i >= 0 && (n[t] = i || null);
        }), t.css(n);
      });
    },
    stop: function stop() {
      e(this).removeData("resizable-alsoresize");
    }
  }), e.ui.plugin.add("resizable", "ghost", {
    start: function start() {
      var t = e(this).resizable("instance"),
          i = t.options,
          s = t.size;
      t.ghost = t.originalElement.clone(), t.ghost.css({
        opacity: .25,
        display: "block",
        position: "relative",
        height: s.height,
        width: s.width,
        margin: 0,
        left: 0,
        top: 0
      }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper);
    },
    resize: function resize() {
      var t = e(this).resizable("instance");
      t.ghost && t.ghost.css({
        position: "relative",
        height: t.size.height,
        width: t.size.width
      });
    },
    stop: function stop() {
      var t = e(this).resizable("instance");
      t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
    }
  }), e.ui.plugin.add("resizable", "grid", {
    resize: function resize() {
      var t,
          i = e(this).resizable("instance"),
          s = i.options,
          n = i.size,
          a = i.originalSize,
          o = i.originalPosition,
          r = i.axis,
          h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
          l = h[0] || 1,
          u = h[1] || 1,
          d = Math.round((n.width - a.width) / l) * l,
          c = Math.round((n.height - a.height) / u) * u,
          p = a.width + d,
          f = a.height + c,
          m = s.maxWidth && p > s.maxWidth,
          g = s.maxHeight && f > s.maxHeight,
          v = s.minWidth && s.minWidth > p,
          y = s.minHeight && s.minHeight > f;
      s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = l - t.width, i.size.width = p, i.position.left = o.left + a.width - p));
    }
  }), e.ui.resizable, e.widget("ui.selectable", e.ui.mouse, {
    version: "1.11.4",
    options: {
      appendTo: "body",
      autoRefresh: !0,
      distance: 0,
      filter: "*",
      tolerance: "touch",
      selected: null,
      selecting: null,
      start: null,
      stop: null,
      unselected: null,
      unselecting: null
    },
    _create: function _create() {
      var t,
          i = this;
      this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
        t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function () {
          var t = e(this),
              i = t.offset();
          e.data(this, "selectable-item", {
            element: this,
            $element: t,
            left: i.left,
            top: i.top,
            right: i.left + t.outerWidth(),
            bottom: i.top + t.outerHeight(),
            startselected: !1,
            selected: t.hasClass("ui-selected"),
            selecting: t.hasClass("ui-selecting"),
            unselecting: t.hasClass("ui-unselecting")
          });
        });
      }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>");
    },
    _destroy: function _destroy() {
      this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy();
    },
    _mouseStart: function _mouseStart(t) {
      var i = this,
          s = this.options;
      this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
        left: t.pageX,
        top: t.pageY,
        width: 0,
        height: 0
      }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
        var s = e.data(this, "selectable-item");
        s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {
          unselecting: s.element
        }));
      }), e(t.target).parents().addBack().each(function () {
        var s,
            n = e.data(this, "selectable-item");
        return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {
          selecting: n.element
        }) : i._trigger("unselecting", t, {
          unselecting: n.element
        }), !1) : void 0;
      }));
    },
    _mouseDrag: function _mouseDrag(t) {
      if (this.dragged = !0, !this.options.disabled) {
        var i,
            s = this,
            n = this.options,
            a = this.opos[0],
            o = this.opos[1],
            r = t.pageX,
            h = t.pageY;
        return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({
          left: a,
          top: o,
          width: r - a,
          height: h - o
        }), this.selectees.each(function () {
          var i = e.data(this, "selectable-item"),
              l = !1;
          i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {
            selecting: i.element
          }))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, {
            unselecting: i.element
          }))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {
            unselecting: i.element
          })))));
        }), !1;
      }
    },
    _mouseStop: function _mouseStop(t) {
      var i = this;
      return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
        var s = e.data(this, "selectable-item");
        s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {
          unselected: s.element
        });
      }), e(".ui-selecting", this.element[0]).each(function () {
        var s = e.data(this, "selectable-item");
        s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, {
          selected: s.element
        });
      }), this._trigger("stop", t), this.helper.remove(), !1;
    }
  }), e.widget("ui.sortable", e.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
      appendTo: "parent",
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: "auto",
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: "original",
      items: "> *",
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: "default",
      tolerance: "intersect",
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _isOverAxis: function _isOverAxis(e, t, i) {
      return e >= t && t + i > e;
    },
    _isFloating: function _isFloating(e) {
      return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"));
    },
    _create: function _create() {
      this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0;
    },
    _setOption: function _setOption(e, t) {
      this._super(e, t), "handle" === e && this._setHandleClassName();
    },
    _setHandleClassName: function _setHandleClassName() {
      this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function () {
        (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
      });
    },
    _destroy: function _destroy() {
      this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();

      for (var e = this.items.length - 1; e >= 0; e--) {
        this.items[e].item.removeData(this.widgetName + "-item");
      }

      return this;
    },
    _mouseCapture: function _mouseCapture(t, i) {
      var s = null,
          n = !1,
          a = this;
      return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
        return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0;
      }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () {
        this === t.target && (n = !0);
      }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1);
    },
    _mouseStart: function _mouseStart(t, i, s) {
      var n,
          a,
          o = this.options;
      if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
        top: this.offset.top - this.margins.top,
        left: this.offset.left - this.margins.left
      }, e.extend(this.offset, {
        click: {
          left: t.pageX - this.offset.left,
          top: t.pageY - this.offset.top
        },
        parent: this._getParentOffset(),
        relative: this._getRelativeOffset()
      }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
        prev: this.currentItem.prev()[0],
        parent: this.currentItem.parent()[0]
      }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) {
        this.containers[n]._trigger("activate", t, this._uiHash(this));
      }
      return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0;
    },
    _mouseDrag: function _mouseDrag(t) {
      var i,
          s,
          n,
          a,
          o = this.options,
          r = !1;

      for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) {
        if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
          if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
          this._rearrange(t, s), this._trigger("change", t, this._uiHash());
          break;
        }
      }

      return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1;
    },
    _mouseStop: function _mouseStop(t, i) {
      if (t) {
        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
          var s = this,
              n = this.placeholder.offset(),
              a = this.options.axis,
              o = {};
          a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
            s._clear(t);
          });
        } else this._clear(t, i);

        return !1;
      }
    },
    cancel: function cancel() {
      if (this.dragging) {
        this._mouseUp({
          target: null
        }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();

        for (var t = this.containers.length - 1; t >= 0; t--) {
          this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0);
        }
      }

      return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
        helper: null,
        dragging: !1,
        reverting: !1,
        _noFinalSort: null
      }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this;
    },
    serialize: function serialize(t) {
      var i = this._getItemsAsjQuery(t && t.connected),
          s = [];

      return t = t || {}, e(i).each(function () {
        var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
        i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]));
      }), !s.length && t.key && s.push(t.key + "="), s.join("&");
    },
    toArray: function toArray(t) {
      var i = this._getItemsAsjQuery(t && t.connected),
          s = [];

      return t = t || {}, i.each(function () {
        s.push(e(t.item || this).attr(t.attribute || "id") || "");
      }), s;
    },
    _intersectsWith: function _intersectsWith(e) {
      var t = this.positionAbs.left,
          i = t + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          a = e.left,
          o = a + e.width,
          r = e.top,
          h = r + e.height,
          l = this.offset.click.top,
          u = this.offset.click.left,
          d = "x" === this.options.axis || s + l > r && h > s + l,
          c = "y" === this.options.axis || t + u > a && o > t + u,
          p = d && c;
      return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2;
    },
    _intersectsWithPointer: function _intersectsWithPointer(e) {
      var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
          i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
          s = t && i,
          n = this._getDragVerticalDirection(),
          a = this._getDragHorizontalDirection();

      return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1;
    },
    _intersectsWithSides: function _intersectsWithSides(e) {
      var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
          i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
          s = this._getDragVerticalDirection(),
          n = this._getDragHorizontalDirection();

      return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t);
    },
    _getDragVerticalDirection: function _getDragVerticalDirection() {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== e && (e > 0 ? "down" : "up");
    },
    _getDragHorizontalDirection: function _getDragHorizontalDirection() {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== e && (e > 0 ? "right" : "left");
    },
    refresh: function refresh(e) {
      return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this;
    },
    _connectWith: function _connectWith() {
      var e = this.options;
      return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith;
    },
    _getItemsAsjQuery: function _getItemsAsjQuery(t) {
      function i() {
        r.push(this);
      }

      var s,
          n,
          a,
          o,
          r = [],
          h = [],
          l = this._connectWith();

      if (l && t) for (s = l.length - 1; s >= 0; s--) {
        for (a = e(l[s], this.document[0]), n = a.length - 1; n >= 0; n--) {
          o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
        }
      }

      for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
        options: this.options,
        item: this.currentItem
      }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) {
        h[s][0].each(i);
      }

      return e(r);
    },
    _removeCurrentsFromItems: function _removeCurrentsFromItems() {
      var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
      this.items = e.grep(this.items, function (e) {
        for (var i = 0; t.length > i; i++) {
          if (t[i] === e.item[0]) return !1;
        }

        return !0;
      });
    },
    _refreshItems: function _refreshItems(t) {
      this.items = [], this.containers = [this];

      var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l,
          u = this.items,
          d = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
        item: this.currentItem
      }) : e(this.options.items, this.element), this]],
          c = this._connectWith();

      if (c && this.ready) for (i = c.length - 1; i >= 0; i--) {
        for (n = e(c[i], this.document[0]), s = n.length - 1; s >= 0; s--) {
          a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {
            item: this.currentItem
          }) : e(a.options.items, a.element), a]), this.containers.push(a));
        }
      }

      for (i = d.length - 1; i >= 0; i--) {
        for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++) {
          h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({
            item: h,
            instance: o,
            width: 0,
            height: 0,
            left: 0,
            top: 0
          });
        }
      }
    },
    refreshPositions: function refreshPositions(t) {
      this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, s, n, a;

      for (i = this.items.length - 1; i >= 0; i--) {
        s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
      }

      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);else for (i = this.containers.length - 1; i >= 0; i--) {
        a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
      }
      return this;
    },
    _createPlaceholder: function _createPlaceholder(t) {
      t = t || this;
      var i,
          s = t.options;
      s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
        element: function element() {
          var s = t.currentItem[0].nodeName.toLowerCase(),
              n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
          return "tbody" === s ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(n)) : "tr" === s ? t._createTrPlaceholder(t.currentItem, n) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n;
        },
        update: function update(e, n) {
          (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)));
        }
      }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder);
    },
    _createTrPlaceholder: function _createTrPlaceholder(t, i) {
      var s = this;
      t.children().each(function () {
        e("<td>&#160;</td>", s.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i);
      });
    },
    _contactContainers: function _contactContainers(t) {
      var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l,
          u,
          d,
          c = null,
          p = null;

      for (i = this.containers.length - 1; i >= 0; i--) {
        if (!e.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
          if (c && e.contains(this.containers[i].element[0], c.element[0])) continue;
          c = this.containers[i], p = i;
        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
      }

      if (c) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1);else {
        for (n = 1e4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) {
          e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down"));
        }

        if (!a && !this.options.dropOnEmpty) return;
        if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
        a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1;
      }
    },
    _createHelper: function _createHelper(t) {
      var i = this.options,
          s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
      return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
        width: this.currentItem[0].style.width,
        height: this.currentItem[0].style.height,
        position: this.currentItem.css("position"),
        top: this.currentItem.css("top"),
        left: this.currentItem.css("left")
      }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s;
    },
    _adjustOffsetFromHelper: function _adjustOffsetFromHelper(t) {
      "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
        left: +t[0],
        top: +t[1] || 0
      }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset: function _getParentOffset() {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
        top: 0,
        left: 0
      }), {
        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
      };
    },
    _getRelativeOffset: function _getRelativeOffset() {
      if ("relative" === this.cssPosition) {
        var e = this.currentItem.position();
        return {
          top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }

      return {
        top: 0,
        left: 0
      };
    },
    _cacheMargins: function _cacheMargins() {
      this.margins = {
        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
      };
    },
    _cacheHelperProportions: function _cacheHelperProportions() {
      this.helperProportions = {
        width: this.helper.outerWidth(),
        height: this.helper.outerHeight()
      };
    },
    _setContainment: function _setContainment() {
      var t,
          i,
          s,
          n = this.options;
      "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]);
    },
    _convertPositionTo: function _convertPositionTo(t, i) {
      i || (i = this.position);
      var s = "absolute" === t ? 1 : -1,
          n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          a = /(html|body)/i.test(n[0].tagName);
      return {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
      };
    },
    _generatePosition: function _generatePosition(t) {
      var i,
          s,
          n = this.options,
          a = t.pageX,
          o = t.pageY,
          r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
          h = /(html|body)/i.test(r[0].tagName);
      return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
        top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
        left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
      };
    },
    _rearrange: function _rearrange(e, t, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
      var n = this.counter;

      this._delay(function () {
        n === this.counter && this.refreshPositions(!s);
      });
    },
    _clear: function _clear(e, t) {
      function i(e, t, i) {
        return function (s) {
          i._trigger(e, s, t._uiHash(t));
        };
      }

      this.reverting = !1;
      var s,
          n = [];

      if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
        for (s in this._storedCSS) {
          ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
        }

        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
      } else this.currentItem.show();

      for (this.fromOutside && !t && n.push(function (e) {
        this._trigger("receive", e, this._uiHash(this.fromOutside));
      }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function (e) {
        this._trigger("update", e, this._uiHash());
      }), this !== this.currentContainer && (t || (n.push(function (e) {
        this._trigger("remove", e, this._uiHash());
      }), n.push(function (e) {
        return function (t) {
          e._trigger("receive", t, this._uiHash(this));
        };
      }.call(this, this.currentContainer)), n.push(function (e) {
        return function (t) {
          e._trigger("update", t, this._uiHash(this));
        };
      }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) {
        t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
      }

      if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
        for (s = 0; n.length > s; s++) {
          n[s].call(this, e);
        }

        this._trigger("stop", e, this._uiHash());
      }

      return this.fromOutside = !1, !this.cancelHelperRemoval;
    },
    _trigger: function _trigger() {
      e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
    },
    _uiHash: function _uiHash(t) {
      var i = t || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || e([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: t ? t.element : null
      };
    }
  }), e.widget("ui.accordion", {
    version: "1.11.4",
    options: {
      active: 0,
      animate: {},
      collapsible: !1,
      event: "click",
      header: "> li > :first-child,> :not(li):even",
      heightStyle: "auto",
      icons: {
        activeHeader: "ui-icon-triangle-1-s",
        header: "ui-icon-triangle-1-e"
      },
      activate: null,
      beforeActivate: null
    },
    hideProps: {
      borderTopWidth: "hide",
      borderBottomWidth: "hide",
      paddingTop: "hide",
      paddingBottom: "hide",
      height: "hide"
    },
    showProps: {
      borderTopWidth: "show",
      borderBottomWidth: "show",
      paddingTop: "show",
      paddingBottom: "show",
      height: "show"
    },
    _create: function _create() {
      var t = this.options;
      this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh();
    },
    _getCreateEventData: function _getCreateEventData() {
      return {
        header: this.active,
        panel: this.active.length ? this.active.next() : e()
      };
    },
    _createIcons: function _createIcons() {
      var t = this.options.icons;
      t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"));
    },
    _destroyIcons: function _destroyIcons() {
      this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove();
    },
    _destroy: function _destroy() {
      var e;
      this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "");
    },
    _setOption: function _setOption(e, t) {
      return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0);
    },
    _keydown: function _keydown(t) {
      if (!t.altKey && !t.ctrlKey) {
        var i = e.ui.keyCode,
            s = this.headers.length,
            n = this.headers.index(t.target),
            a = !1;

        switch (t.keyCode) {
          case i.RIGHT:
          case i.DOWN:
            a = this.headers[(n + 1) % s];
            break;

          case i.LEFT:
          case i.UP:
            a = this.headers[(n - 1 + s) % s];
            break;

          case i.SPACE:
          case i.ENTER:
            this._eventHandler(t);

            break;

          case i.HOME:
            a = this.headers[0];
            break;

          case i.END:
            a = this.headers[s - 1];
        }

        a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault());
      }
    },
    _panelKeyDown: function _panelKeyDown(t) {
      t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus();
    },
    refresh: function refresh() {
      var t = this.options;
      this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh();
    },
    _processPanels: function _processPanels() {
      var e = this.headers,
          t = this.panels;
      this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)));
    },
    _refresh: function _refresh() {
      var t,
          i = this.options,
          s = i.heightStyle,
          n = this.element.parent();
      this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function () {
        var t = e(this),
            i = t.uniqueId().attr("id"),
            s = t.next(),
            n = s.uniqueId().attr("id");
        t.attr("aria-controls", n), s.attr("aria-labelledby", i);
      }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }).next().attr({
        "aria-hidden": "true"
      }).hide(), this.active.length ? this.active.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }).next().attr({
        "aria-hidden": "false"
      }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (t = n.height(), this.element.siblings(":visible").each(function () {
        var i = e(this),
            s = i.css("position");
        "absolute" !== s && "fixed" !== s && (t -= i.outerHeight(!0));
      }), this.headers.each(function () {
        t -= e(this).outerHeight(!0);
      }), this.headers.next().each(function () {
        e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()));
      }).css("overflow", "auto")) : "auto" === s && (t = 0, this.headers.next().each(function () {
        t = Math.max(t, e(this).css("height", "").height());
      }).height(t));
    },
    _activate: function _activate(t) {
      var i = this._findActive(t)[0];

      i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: e.noop
      }));
    },
    _findActive: function _findActive(t) {
      return "number" == typeof t ? this.headers.eq(t) : e();
    },
    _setupEvents: function _setupEvents(t) {
      var i = {
        keydown: "_keydown"
      };
      t && e.each(t.split(" "), function (e, t) {
        i[t] = "_eventHandler";
      }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
        keydown: "_panelKeyDown"
      }), this._hoverable(this.headers), this._focusable(this.headers);
    },
    _eventHandler: function _eventHandler(t) {
      var i = this.options,
          s = this.active,
          n = e(t.currentTarget),
          a = n[0] === s[0],
          o = a && i.collapsible,
          r = o ? e() : n.next(),
          h = s.next(),
          l = {
        oldHeader: s,
        oldPanel: h,
        newHeader: o ? e() : n,
        newPanel: r
      };
      t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? e() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")));
    },
    _toggle: function _toggle(t) {
      var i = t.newPanel,
          s = this.prevShow.length ? this.prevShow : t.oldPanel;
      this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({
        "aria-hidden": "true"
      }), s.prev().attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), i.length && s.length ? s.prev().attr({
        tabIndex: -1,
        "aria-expanded": "false"
      }) : i.length && this.headers.filter(function () {
        return 0 === parseInt(e(this).attr("tabIndex"), 10);
      }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      });
    },
    _animate: function _animate(e, t, i) {
      var s,
          n,
          a,
          o = this,
          r = 0,
          h = e.css("box-sizing"),
          l = e.length && (!t.length || e.index() < t.index()),
          u = this.options.animate || {},
          d = l && u.down || u,
          c = function c() {
        o._toggleComplete(i);
      };

      return "number" == typeof d && (a = d), "string" == typeof d && (n = d), n = n || d.easing || u.easing, a = a || d.duration || u.duration, t.length ? e.length ? (s = e.show().outerHeight(), t.animate(this.hideProps, {
        duration: a,
        easing: n,
        step: function step(e, t) {
          t.now = Math.round(e);
        }
      }), e.hide().animate(this.showProps, {
        duration: a,
        easing: n,
        complete: c,
        step: function step(e, i) {
          i.now = Math.round(e), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== o.options.heightStyle && (i.now = Math.round(s - t.outerHeight() - r), r = 0);
        }
      }), void 0) : t.animate(this.hideProps, a, n, c) : e.animate(this.showProps, a, n, c);
    },
    _toggleComplete: function _toggleComplete(e) {
      var t = e.oldPanel;
      t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e);
    }
  }), e.widget("ui.menu", {
    version: "1.11.4",
    defaultElement: "<ul>",
    delay: 300,
    options: {
      icons: {
        submenu: "ui-icon-carat-1-e"
      },
      items: "> *",
      menus: "ul",
      position: {
        my: "left-1 top",
        at: "right top"
      },
      role: "menu",
      blur: null,
      focus: null,
      select: null
    },
    _create: function _create() {
      this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
        role: this.options.role,
        tabIndex: 0
      }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
        "mousedown .ui-menu-item": function mousedownUiMenuItem(e) {
          e.preventDefault();
        },
        "click .ui-menu-item": function clickUiMenuItem(t) {
          var i = e(t.target);
          !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)));
        },
        "mouseenter .ui-menu-item": function mouseenterUiMenuItem(t) {
          if (!this.previousFilter) {
            var i = e(t.currentTarget);
            i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i);
          }
        },
        mouseleave: "collapseAll",
        "mouseleave .ui-menu": "collapseAll",
        focus: function focus(e, t) {
          var i = this.active || this.element.find(this.options.items).eq(0);
          t || this.focus(e, i);
        },
        blur: function blur(t) {
          this._delay(function () {
            e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t);
          });
        },
        keydown: "_keydown"
      }), this.refresh(), this._on(this.document, {
        click: function click(e) {
          this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1;
        }
      });
    },
    _destroy: function _destroy() {
      this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
        var t = e(this);
        t.data("ui-menu-submenu-carat") && t.remove();
      }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content");
    },
    _keydown: function _keydown(t) {
      var i,
          s,
          n,
          a,
          o = !0;

      switch (t.keyCode) {
        case e.ui.keyCode.PAGE_UP:
          this.previousPage(t);
          break;

        case e.ui.keyCode.PAGE_DOWN:
          this.nextPage(t);
          break;

        case e.ui.keyCode.HOME:
          this._move("first", "first", t);

          break;

        case e.ui.keyCode.END:
          this._move("last", "last", t);

          break;

        case e.ui.keyCode.UP:
          this.previous(t);
          break;

        case e.ui.keyCode.DOWN:
          this.next(t);
          break;

        case e.ui.keyCode.LEFT:
          this.collapse(t);
          break;

        case e.ui.keyCode.RIGHT:
          this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
          break;

        case e.ui.keyCode.ENTER:
        case e.ui.keyCode.SPACE:
          this._activate(t);

          break;

        case e.ui.keyCode.ESCAPE:
          this.collapse(t);
          break;

        default:
          o = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
            delete this.previousFilter;
          }, 1e3)) : delete this.previousFilter;
      }

      o && t.preventDefault();
    },
    _activate: function _activate(e) {
      this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e));
    },
    refresh: function refresh() {
      var t,
          i,
          s = this,
          n = this.options.icons.submenu,
          a = this.element.find(this.options.menus);
      this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
        role: this.options.role,
        "aria-hidden": "true",
        "aria-expanded": "false"
      }).each(function () {
        var t = e(this),
            i = t.parent(),
            s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
        i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"));
      }), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function () {
        var t = e(this);
        s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider");
      }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
        tabIndex: -1,
        role: this._itemRole()
      }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur();
    },
    _itemRole: function _itemRole() {
      return {
        menu: "menuitem",
        listbox: "option"
      }[this.options.role];
    },
    _setOption: function _setOption(e, t) {
      "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t);
    },
    focus: function focus(e, t) {
      var i, s;
      this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
        this._close();
      }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
        item: t
      });
    },
    _scrollIntoView: function _scrollIntoView(t) {
      var i, s, n, a, o, r;
      this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r));
    },
    blur: function blur(e, t) {
      t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
        item: this.active
      }));
    },
    _startOpening: function _startOpening(e) {
      clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
        this._close(), this._open(e);
      }, this.delay));
    },
    _open: function _open(t) {
      var i = e.extend({
        of: this.active
      }, this.options.position);
      clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i);
    },
    collapseAll: function collapseAll(t, i) {
      clearTimeout(this.timer), this.timer = this._delay(function () {
        var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
        s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s;
      }, this.delay);
    },
    _close: function _close(e) {
      e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active");
    },
    _closeOnDocumentClick: function _closeOnDocumentClick(t) {
      return !e(t.target).closest(".ui-menu").length;
    },
    _isDivider: function _isDivider(e) {
      return !/[^\-\u2014\u2013\s]/.test(e.text());
    },
    collapse: function collapse(e) {
      var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
      t && t.length && (this._close(), this.focus(e, t));
    },
    expand: function expand(e) {
      var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
      t && t.length && (this._open(t.parent()), this._delay(function () {
        this.focus(e, t);
      }));
    },
    next: function next(e) {
      this._move("next", "first", e);
    },
    previous: function previous(e) {
      this._move("prev", "last", e);
    },
    isFirstItem: function isFirstItem() {
      return this.active && !this.active.prevAll(".ui-menu-item").length;
    },
    isLastItem: function isLastItem() {
      return this.active && !this.active.nextAll(".ui-menu-item").length;
    },
    _move: function _move(e, t, i) {
      var s;
      this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s);
    },
    nextPage: function nextPage(t) {
      var i, s, n;
      return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
        return i = e(this), 0 > i.offset().top - s - n;
      }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0);
    },
    previousPage: function previousPage(t) {
      var i, s, n;
      return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
        return i = e(this), i.offset().top - s + n > 0;
      }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0);
    },
    _hasScroll: function _hasScroll() {
      return this.element.outerHeight() < this.element.prop("scrollHeight");
    },
    select: function select(t) {
      this.active = this.active || e(t.target).closest(".ui-menu-item");
      var i = {
        item: this.active
      };
      this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i);
    },
    _filterMenuItems: function _filterMenuItems(t) {
      var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
          s = RegExp("^" + i, "i");
      return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
        return s.test(e.trim(e(this).text()));
      });
    }
  }), e.widget("ui.autocomplete", {
    version: "1.11.4",
    defaultElement: "<input>",
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function _create() {
      var t,
          i,
          s,
          n = this.element[0].nodeName.toLowerCase(),
          a = "textarea" === n,
          o = "input" === n;
      this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
        keydown: function keydown(n) {
          if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, void 0;
          t = !1, s = !1, i = !1;
          var a = e.ui.keyCode;

          switch (n.keyCode) {
            case a.PAGE_UP:
              t = !0, this._move("previousPage", n);
              break;

            case a.PAGE_DOWN:
              t = !0, this._move("nextPage", n);
              break;

            case a.UP:
              t = !0, this._keyEvent("previous", n);
              break;

            case a.DOWN:
              t = !0, this._keyEvent("next", n);
              break;

            case a.ENTER:
              this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
              break;

            case a.TAB:
              this.menu.active && this.menu.select(n);
              break;

            case a.ESCAPE:
              this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
              break;

            default:
              i = !0, this._searchTimeout(n);
          }
        },
        keypress: function keypress(s) {
          if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;

          if (!i) {
            var n = e.ui.keyCode;

            switch (s.keyCode) {
              case n.PAGE_UP:
                this._move("previousPage", s);

                break;

              case n.PAGE_DOWN:
                this._move("nextPage", s);

                break;

              case n.UP:
                this._keyEvent("previous", s);

                break;

              case n.DOWN:
                this._keyEvent("next", s);

            }
          }
        },
        input: function input(e) {
          return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0);
        },
        focus: function focus() {
          this.selectedItem = null, this.previous = this._value();
        },
        blur: function blur(e) {
          return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0);
        }
      }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
        role: null
      }).hide().menu("instance"), this._on(this.menu.element, {
        mousedown: function mousedown(t) {
          t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
            delete this.cancelBlur;
          });
          var i = this.menu.element[0];
          e(t.target).closest(".ui-menu-item").length || this._delay(function () {
            var t = this;
            this.document.one("mousedown", function (s) {
              s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close();
            });
          });
        },
        menufocus: function menufocus(t, i) {
          var s, n;
          return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
            e(t.target).trigger(t.originalEvent);
          }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {
            item: n
          }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0);
        },
        menuselect: function menuselect(e, t) {
          var i = t.item.data("ui-autocomplete-item"),
              s = this.previous;
          this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
            this.previous = s, this.selectedItem = i;
          })), !1 !== this._trigger("select", e, {
            item: i
          }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i;
        }
      }), this.liveRegion = e("<span>", {
        role: "status",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
        beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _destroy: function _destroy() {
      clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function _setOption(e, t) {
      this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort();
    },
    _appendTo: function _appendTo() {
      var t = this.options.appendTo;
      return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t;
    },
    _initSource: function _initSource() {
      var t,
          i,
          s = this;
      e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
        s(e.ui.autocomplete.filter(t, i.term));
      }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
        s.xhr && s.xhr.abort(), s.xhr = e.ajax({
          url: i,
          data: t,
          dataType: "json",
          success: function success(e) {
            n(e);
          },
          error: function error() {
            n([]);
          }
        });
      }) : this.source = this.options.source;
    },
    _searchTimeout: function _searchTimeout(e) {
      clearTimeout(this.searching), this.searching = this._delay(function () {
        var t = this.term === this._value(),
            i = this.menu.element.is(":visible"),
            s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;

        (!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e));
      }, this.options.delay);
    },
    search: function search(e, t) {
      return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0;
    },
    _search: function _search(e) {
      this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
        term: e
      }, this._response());
    },
    _response: function _response() {
      var t = ++this.requestIndex;
      return e.proxy(function (e) {
        t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading");
      }, this);
    },
    __response: function __response(e) {
      e && (e = this._normalize(e)), this._trigger("response", null, {
        content: e
      }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close();
    },
    close: function close(e) {
      this.cancelSearch = !0, this._close(e);
    },
    _close: function _close(e) {
      this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e));
    },
    _change: function _change(e) {
      this.previous !== this._value() && this._trigger("change", e, {
        item: this.selectedItem
      });
    },
    _normalize: function _normalize(t) {
      return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
        return "string" == typeof t ? {
          label: t,
          value: t
        } : e.extend({}, t, {
          label: t.label || t.value,
          value: t.value || t.label
        });
      });
    },
    _suggest: function _suggest(t) {
      var i = this.menu.element.empty();
      this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({
        of: this.element
      }, this.options.position)), this.options.autoFocus && this.menu.next();
    },
    _resizeMenu: function _resizeMenu() {
      var e = this.menu.element;
      e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function _renderMenu(t, i) {
      var s = this;
      e.each(i, function (e, i) {
        s._renderItemData(t, i);
      });
    },
    _renderItemData: function _renderItemData(e, t) {
      return this._renderItem(e, t).data("ui-autocomplete-item", t);
    },
    _renderItem: function _renderItem(t, i) {
      return e("<li>").text(i.label).appendTo(t);
    },
    _move: function _move(e, t) {
      return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0);
    },
    widget: function widget() {
      return this.menu.element;
    },
    _value: function _value() {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function _keyEvent(e, t) {
      (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault());
    }
  }), e.extend(e.ui.autocomplete, {
    escapeRegex: function escapeRegex(e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
    },
    filter: function filter(t, i) {
      var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
      return e.grep(t, function (e) {
        return s.test(e.label || e.value || e);
      });
    }
  }), e.widget("ui.autocomplete", e.ui.autocomplete, {
    options: {
      messages: {
        noResults: "No search results.",
        results: function results(e) {
          return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate.";
        }
      }
    },
    __response: function __response(t) {
      var i;
      this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion));
    }
  }), e.ui.autocomplete;

  var c,
      p = "ui-button ui-widget ui-state-default ui-corner-all",
      f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      m = function m() {
    var t = e(this);
    setTimeout(function () {
      t.find(":ui-button").button("refresh");
    }, 1);
  },
      g = function g(t) {
    var i = t.name,
        s = t.form,
        n = e([]);
    return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "'][type=radio]") : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () {
      return !this.form;
    })), n;
  };

  e.widget("ui.button", {
    version: "1.11.4",
    defaultElement: "<button>",
    options: {
      disabled: null,
      text: !0,
      label: null,
      icons: {
        primary: null,
        secondary: null
      }
    },
    _create: function _create() {
      this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, m), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
      var t = this,
          i = this.options,
          s = "checkbox" === this.type || "radio" === this.type,
          n = s ? "" : "ui-state-active";
      null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
        i.disabled || this === c && e(this).addClass("ui-state-active");
      }).bind("mouseleave" + this.eventNamespace, function () {
        i.disabled || e(this).removeClass(n);
      }).bind("click" + this.eventNamespace, function (e) {
        i.disabled && (e.preventDefault(), e.stopImmediatePropagation());
      }), this._on({
        focus: function focus() {
          this.buttonElement.addClass("ui-state-focus");
        },
        blur: function blur() {
          this.buttonElement.removeClass("ui-state-focus");
        }
      }), s && this.element.bind("change" + this.eventNamespace, function () {
        t.refresh();
      }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
        return i.disabled ? !1 : void 0;
      }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
        if (i.disabled) return !1;
        e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
        var s = t.element[0];
        g(s).not(s).map(function () {
          return e(this).button("widget")[0];
        }).removeClass("ui-state-active").attr("aria-pressed", "false");
      }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
        return i.disabled ? !1 : (e(this).addClass("ui-state-active"), c = this, t.document.one("mouseup", function () {
          c = null;
        }), void 0);
      }).bind("mouseup" + this.eventNamespace, function () {
        return i.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0);
      }).bind("keydown" + this.eventNamespace, function (t) {
        return i.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0);
      }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
        e(this).removeClass("ui-state-active");
      }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
        t.keyCode === e.ui.keyCode.SPACE && e(this).click();
      })), this._setOption("disabled", i.disabled), this._resetButton();
    },
    _determineButtonType: function _determineButtonType() {
      var e, t, i;
      this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element;
    },
    widget: function widget() {
      return this.buttonElement;
    },
    _destroy: function _destroy() {
      this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title");
    },
    _setOption: function _setOption(e, t) {
      return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0);
    },
    refresh: function refresh() {
      var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
      t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? g(this.element[0]).each(function () {
        e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false");
      }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"));
    },
    _resetButton: function _resetButton() {
      if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
      var t = this.buttonElement.removeClass(f),
          i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
          s = this.options.icons,
          n = s.primary && s.secondary,
          a = [];
      s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "));
    }
  }), e.widget("ui.buttonset", {
    version: "1.11.4",
    options: {
      items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
    },
    _create: function _create() {
      this.element.addClass("ui-buttonset");
    },
    _init: function _init() {
      this.refresh();
    },
    _setOption: function _setOption(e, t) {
      "disabled" === e && this.buttons.button("option", e, t), this._super(e, t);
    },
    refresh: function refresh() {
      var t = "rtl" === this.element.css("direction"),
          i = this.element.find(this.options.items),
          s = i.filter(":ui-button");
      i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function () {
        return e(this).button("widget")[0];
      }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end();
    },
    _destroy: function _destroy() {
      this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
        return e(this).button("widget")[0];
      }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
    }
  }), e.ui.button, e.extend(e.ui, {
    datepicker: {
      version: "1.11.4"
    }
  });
  var v;
  e.extend(n.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function _widgetDatepicker() {
      return this.dpDiv;
    },
    setDefaults: function setDefaults(e) {
      return r(this._defaults, e || {}), this;
    },
    _attachDatepicker: function _attachDatepicker(t, i) {
      var s, n, a;
      s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a);
    },
    _newInst: function _newInst(t, i) {
      var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: s,
        input: t,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      };
    },
    _connectDatepicker: function _connectDatepicker(t, i) {
      var s = e(t);
      i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t));
    },
    _attachments: function _attachments(t, i) {
      var s,
          n,
          a,
          o = this._get(i, "appendText"),
          r = this._get(i, "isRTL");

      i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
        src: a,
        alt: n,
        title: n
      }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
        src: a,
        alt: n,
        title: n
      }) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function () {
        return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1;
      }));
    },
    _autoSize: function _autoSize(e) {
      if (this._get(e, "autoSize") && !e.inline) {
        var t,
            i,
            s,
            n,
            a = new Date(2009, 11, 20),
            o = this._get(e, "dateFormat");

        o.match(/[DM]/) && (t = function t(e) {
          for (i = 0, s = 0, n = 0; e.length > n; n++) {
            e[n].length > i && (i = e[n].length, s = n);
          }

          return s;
        }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length);
      }
    },
    _inlineDatepicker: function _inlineDatepicker(t, i) {
      var s = e(t);
      s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"));
    },
    _dialogDatepicker: function _dialogDatepicker(t, i, s, n, a) {
      var o,
          h,
          l,
          u,
          d,
          c = this._dialogInst;
      return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), r(c.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this;
    },
    _destroyDatepicker: function _destroyDatepicker(t) {
      var i,
          s = e(t),
          n = e.data(t, "datepicker");
      s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), v === n && (v = null));
    },
    _enableDatepicker: function _enableDatepicker(t) {
      var i,
          s,
          n = e(t),
          a = e.data(t, "datepicker");
      n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function () {
        this.disabled = !1;
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      }));
    },
    _disableDatepicker: function _disableDatepicker(t) {
      var i,
          s,
          n = e(t),
          a = e.data(t, "datepicker");
      n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function () {
        this.disabled = !0;
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
        return e === t ? null : e;
      }), this._disabledInputs[this._disabledInputs.length] = t);
    },
    _isDisabledDatepicker: function _isDisabledDatepicker(e) {
      if (!e) return !1;

      for (var t = 0; this._disabledInputs.length > t; t++) {
        if (this._disabledInputs[t] === e) return !0;
      }

      return !1;
    },
    _getInst: function _getInst(t) {
      try {
        return e.data(t, "datepicker");
      } catch (i) {
        throw "Missing instance data for this datepicker";
      }
    },
    _optionDatepicker: function _optionDatepicker(t, i, s) {
      var n,
          a,
          o,
          h,
          l = this._getInst(t);

      return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, a), this._updateAlternate(l), this._updateDatepicker(l)), void 0);
    },
    _changeDatepicker: function _changeDatepicker(e, t, i) {
      this._optionDatepicker(e, t, i);
    },
    _refreshDatepicker: function _refreshDatepicker(e) {
      var t = this._getInst(e);

      t && this._updateDatepicker(t);
    },
    _setDateDatepicker: function _setDateDatepicker(e, t) {
      var i = this._getInst(e);

      i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i));
    },
    _getDateDatepicker: function _getDateDatepicker(e, t) {
      var i = this._getInst(e);

      return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null;
    },
    _doKeyDown: function _doKeyDown(t) {
      var i,
          s,
          n,
          a = e.datepicker._getInst(t.target),
          o = !0,
          r = a.dpDiv.is(".ui-datepicker-rtl");

      if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
        case 9:
          e.datepicker._hideDatepicker(), o = !1;
          break;

        case 13:
          return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1;

        case 27:
          e.datepicker._hideDatepicker();

          break;

        case 33:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");

          break;

        case 34:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");

          break;

        case 35:
          (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
          break;

        case 36:
          (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
          break;

        case 37:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
          break;

        case 38:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
          break;

        case 39:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
          break;

        case 40:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
          break;

        default:
          o = !1;
      } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
      o && (t.preventDefault(), t.stopPropagation());
    },
    _doKeyPress: function _doKeyPress(t) {
      var i,
          s,
          n = e.datepicker._getInst(t.target);

      return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0;
    },
    _doKeyUp: function _doKeyUp(t) {
      var i,
          s = e.datepicker._getInst(t.target);

      if (s.input.val() !== s.lastVal) try {
        i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s));
      } catch (n) {}
      return !0;
    },
    _showDatepicker: function _showDatepicker(t) {
      if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
        var i, n, a, o, h, l, u;
        i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(i, "beforeShow"), a = n ? n.apply(t, [t, i]) : {}, a !== !1 && (r(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function () {
          return o |= "fixed" === e(this).css("position"), !o;
        }), h = {
          left: e.datepicker._pos[0],
          top: e.datepicker._pos[1]
        }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, o), i.dpDiv.css({
          position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
          display: "none",
          left: h.left + "px",
          top: h.top + "px"
        }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i));
      }
    },
    _updateDatepicker: function _updateDatepicker(t) {
      this.maxRows = 4, v = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);

      var i,
          s = this._getNumberOfMonths(t),
          n = s[1],
          a = 17,
          r = t.dpDiv.find("." + this._dayOverClass + " a");

      r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
        i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null;
      }, 0));
    },
    _shouldFocusInput: function _shouldFocusInput(e) {
      return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus");
    },
    _checkOffset: function _checkOffset(t, i, s) {
      var n = t.dpDiv.outerWidth(),
          a = t.dpDiv.outerHeight(),
          o = t.input ? t.input.outerWidth() : 0,
          r = t.input ? t.input.outerHeight() : 0,
          h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()),
          l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
      return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i;
    },
    _findPos: function _findPos(t) {
      for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) {
        t = t[n ? "previousSibling" : "nextSibling"];
      }

      return i = e(t).offset(), [i.left, i.top];
    },
    _hideDatepicker: function _hideDatepicker(t) {
      var i,
          s,
          n,
          a,
          o = this._curInst;
      !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function n() {
        e.datepicker._tidyDialog(o);
      }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1);
    },
    _tidyDialog: function _tidyDialog(e) {
      e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar");
    },
    _checkExternalClick: function _checkExternalClick(t) {
      if (e.datepicker._curInst) {
        var i = e(t.target),
            s = e.datepicker._getInst(i[0]);

        (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function _adjustDate(t, i, s) {
      var n = e(t),
          a = this._getInst(n[0]);

      this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a));
    },
    _gotoToday: function _gotoToday(t) {
      var i,
          s = e(t),
          n = this._getInst(s[0]);

      this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date(), n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s);
    },
    _selectMonthYear: function _selectMonthYear(t, i, s) {
      var n = e(t),
          a = this._getInst(n[0]);

      a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n);
    },
    _selectDay: function _selectDay(t, i, s, n) {
      var a,
          o = e(t);
      e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)));
    },
    _clearDate: function _clearDate(t) {
      var i = e(t);

      this._selectDate(i, "");
    },
    _selectDate: function _selectDate(t, i) {
      var s,
          n = e(t),
          a = this._getInst(n[0]);

      i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != _typeof(a.input[0]) && a.input.focus(), this._lastInput = null);
    },
    _updateAlternate: function _updateAlternate(t) {
      var i,
          s,
          n,
          a = this._get(t, "altField");

      a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function () {
        e(this).val(n);
      }));
    },
    noWeekends: function noWeekends(e) {
      var t = e.getDay();
      return [t > 0 && 6 > t, ""];
    },
    iso8601Week: function iso8601Week(e) {
      var t,
          i = new Date(e.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1;
    },
    parseDate: function parseDate(t, i, s) {
      if (null == t || null == i) throw "Invalid arguments";
      if (i = "object" == _typeof(i) ? "" + i : i + "", "" === i) return null;

      var n,
          a,
          o,
          r,
          h = 0,
          l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          u = "string" != typeof l ? l : new Date().getFullYear() % 100 + parseInt(l, 10),
          d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
          c = (s ? s.dayNames : null) || this._defaults.dayNames,
          p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
          f = (s ? s.monthNames : null) || this._defaults.monthNames,
          m = -1,
          g = -1,
          v = -1,
          y = -1,
          b = !1,
          _ = function _(e) {
        var i = t.length > n + 1 && t.charAt(n + 1) === e;
        return i && n++, i;
      },
          x = function x(e) {
        var t = _(e),
            s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
            n = "y" === e ? s : 1,
            a = RegExp("^\\d{" + n + "," + s + "}"),
            o = i.substring(h).match(a);

        if (!o) throw "Missing number at position " + h;
        return h += o[0].length, parseInt(o[0], 10);
      },
          k = function k(t, s, n) {
        var a = -1,
            o = e.map(_(t) ? n : s, function (e, t) {
          return [[t, e]];
        }).sort(function (e, t) {
          return -(e[1].length - t[1].length);
        });
        if (e.each(o, function (e, t) {
          var s = t[1];
          return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = t[0], h += s.length, !1) : void 0;
        }), -1 !== a) return a + 1;
        throw "Unknown name at position " + h;
      },
          w = function w() {
        if (i.charAt(h) !== t.charAt(n)) throw "Unexpected literal at position " + h;
        h++;
      };

      for (n = 0; t.length > n; n++) {
        if (b) "'" !== t.charAt(n) || _("'") ? w() : b = !1;else switch (t.charAt(n)) {
          case "d":
            v = x("d");
            break;

          case "D":
            k("D", d, c);
            break;

          case "o":
            y = x("o");
            break;

          case "m":
            g = x("m");
            break;

          case "M":
            g = k("M", p, f);
            break;

          case "y":
            m = x("y");
            break;

          case "@":
            r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
            break;

          case "!":
            r = new Date((x("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
            break;

          case "'":
            _("'") ? w() : b = !0;
            break;

          default:
            w();
        }
      }

      if (i.length > h && (o = i.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
      if (-1 === m ? m = new Date().getFullYear() : 100 > m && (m += new Date().getFullYear() - new Date().getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1) for (g = 1, v = y;;) {
        if (a = this._getDaysInMonth(m, g - 1), a >= v) break;
        g++, v -= a;
      }
      if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
      return r;
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function formatDate(e, t, i) {
      if (!t) return "";

      var s,
          n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          a = (i ? i.dayNames : null) || this._defaults.dayNames,
          o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          r = (i ? i.monthNames : null) || this._defaults.monthNames,
          h = function h(t) {
        var i = e.length > s + 1 && e.charAt(s + 1) === t;
        return i && s++, i;
      },
          l = function l(e, t, i) {
        var s = "" + t;
        if (h(e)) for (; i > s.length;) {
          s = "0" + s;
        }
        return s;
      },
          u = function u(e, t, i, s) {
        return h(e) ? s[t] : i[t];
      },
          d = "",
          c = !1;

      if (t) for (s = 0; e.length > s; s++) {
        if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1;else switch (e.charAt(s)) {
          case "d":
            d += l("d", t.getDate(), 2);
            break;

          case "D":
            d += u("D", t.getDay(), n, a);
            break;

          case "o":
            d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
            break;

          case "m":
            d += l("m", t.getMonth() + 1, 2);
            break;

          case "M":
            d += u("M", t.getMonth(), o, r);
            break;

          case "y":
            d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
            break;

          case "@":
            d += t.getTime();
            break;

          case "!":
            d += 1e4 * t.getTime() + this._ticksTo1970;
            break;

          case "'":
            h("'") ? d += "'" : c = !0;
            break;

          default:
            d += e.charAt(s);
        }
      }
      return d;
    },
    _possibleChars: function _possibleChars(e) {
      var t,
          i = "",
          s = !1,
          n = function n(i) {
        var s = e.length > t + 1 && e.charAt(t + 1) === i;
        return s && t++, s;
      };

      for (t = 0; e.length > t; t++) {
        if (s) "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1;else switch (e.charAt(t)) {
          case "d":
          case "m":
          case "y":
          case "@":
            i += "0123456789";
            break;

          case "D":
          case "M":
            return null;

          case "'":
            n("'") ? i += "'" : s = !0;
            break;

          default:
            i += e.charAt(t);
        }
      }

      return i;
    },
    _get: function _get(e, t) {
      return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t];
    },
    _setDateFromField: function _setDateFromField(e, t) {
      if (e.input.val() !== e.lastVal) {
        var i = this._get(e, "dateFormat"),
            s = e.lastVal = e.input ? e.input.val() : null,
            n = this._getDefaultDate(e),
            a = n,
            o = this._getFormatConfig(e);

        try {
          a = this.parseDate(i, s, o) || n;
        } catch (r) {
          s = t ? "" : s;
        }

        e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e);
      }
    },
    _getDefaultDate: function _getDefaultDate(e) {
      return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date()));
    },
    _determineDate: function _determineDate(t, i, s) {
      var n = function n(e) {
        var t = new Date();
        return t.setDate(t.getDate() + e), t;
      },
          a = function a(i) {
        try {
          return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t));
        } catch (s) {}

        for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date(), a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
          switch (l[2] || "d") {
            case "d":
            case "D":
              r += parseInt(l[1], 10);
              break;

            case "w":
            case "W":
              r += 7 * parseInt(l[1], 10);
              break;

            case "m":
            case "M":
              o += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o));
              break;

            case "y":
            case "Y":
              a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o));
          }

          l = h.exec(i);
        }

        return new Date(a, o, r);
      },
          o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());

      return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o);
    },
    _daylightSavingAdjust: function _daylightSavingAdjust(e) {
      return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null;
    },
    _setDate: function _setDate(e, t, i) {
      var s = !t,
          n = e.selectedMonth,
          a = e.selectedYear,
          o = this._restrictMinMax(e, this._determineDate(e, t, new Date()));

      e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e));
    },
    _getDate: function _getDate(e) {
      var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return t;
    },
    _attachHandlers: function _attachHandlers(t) {
      var i = this._get(t, "stepMonths"),
          s = "#" + t.id.replace(/\\\\/g, "\\");

      t.dpDiv.find("[data-handler]").map(function () {
        var t = {
          prev: function prev() {
            e.datepicker._adjustDate(s, -i, "M");
          },
          next: function next() {
            e.datepicker._adjustDate(s, +i, "M");
          },
          hide: function hide() {
            e.datepicker._hideDatepicker();
          },
          today: function today() {
            e.datepicker._gotoToday(s);
          },
          selectDay: function selectDay() {
            return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
          },
          selectMonth: function selectMonth() {
            return e.datepicker._selectMonthYear(s, this, "M"), !1;
          },
          selectYear: function selectYear() {
            return e.datepicker._selectMonthYear(s, this, "Y"), !1;
          }
        };
        e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")]);
      });
    },
    _generateHTML: function _generateHTML(e) {
      var t,
          i,
          s,
          n,
          a,
          o,
          r,
          h,
          l,
          u,
          d,
          c,
          p,
          f,
          m,
          g,
          v,
          y,
          b,
          _,
          x,
          k,
          w,
          T,
          D,
          S,
          M,
          N,
          C,
          A,
          P,
          I,
          H,
          z,
          F,
          j,
          E,
          O,
          W,
          L = new Date(),
          R = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
          Y = this._get(e, "isRTL"),
          J = this._get(e, "showButtonPanel"),
          B = this._get(e, "hideIfNoPrevNext"),
          Q = this._get(e, "navigationAsDateFormat"),
          K = this._getNumberOfMonths(e),
          V = this._get(e, "showCurrentAtPos"),
          q = this._get(e, "stepMonths"),
          U = 1 !== K[0] || 1 !== K[1],
          G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
          X = this._getMinMaxDate(e, "min"),
          $ = this._getMinMaxDate(e, "max"),
          Z = e.drawMonth - V,
          et = e.drawYear;

      if (0 > Z && (Z += 12, et--), $) for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) {
        Z--, 0 > Z && (Z = 11, et--);
      }

      for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = Q ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - q, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = Q ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + q, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? G : R, o = Q ? this.formatDate(o, r, this._getFormatConfig(e)) : o, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = J ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", k = 0; K[0] > k; k++) {
        for (w = "", this.maxRows = 4, T = 0; K[1] > T; T++) {
          if (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", M = "", U) {
            if (M += "<div class='ui-datepicker-group", K[1] > 1) switch (T) {
              case 0:
                M += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");
                break;

              case K[1] - 1:
                M += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");
                break;

              default:
                M += " ui-datepicker-group-middle", S = "";
            }
            M += "'>";
          }

          for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === k ? Y ? a : s : "") + (/all|right/.test(S) && 0 === k ? Y ? s : a : "") + this._generateMonthYearHeader(e, Z, et, X, $, k > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", N = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) {
            C = (x + u) % 7, N += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[C] + "'>" + p[C] + "</span></th>";
          }

          for (M += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((P + A) / 7), H = U ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = H, z = this._daylightSavingAdjust(new Date(et, Z, 1 - P)), F = 0; H > F; F++) {
            for (M += "<tr>", j = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(z) + "</td>" : "", x = 0; 7 > x; x++) {
              E = g ? g.apply(e.input ? e.input[0] : null, [z]) : [!0, ""], O = z.getMonth() !== Z, W = O && !y || !E[0] || X && X > z || $ && z > $, j += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (O ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (O && !v ? "" : " " + E[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (O && !v || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (O && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === R.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (O ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
            }

            M += j + "</tr>";
          }

          Z++, Z > 11 && (Z = 0, et++), M += "</tbody></table>" + (U ? "</div>" + (K[0] > 0 && T === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += M;
        }

        _ += w;
      }

      return _ += l, e._keyEvent = !1, _;
    },
    _generateMonthYearHeader: function _generateMonthYearHeader(e, t, i, s, n, a, o, r) {
      var h,
          l,
          u,
          d,
          c,
          p,
          f,
          m,
          g = this._get(e, "changeMonth"),
          v = this._get(e, "changeYear"),
          y = this._get(e, "showMonthAfterYear"),
          b = "<div class='ui-datepicker-title'>",
          _ = "";

      if (a || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>";else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++) {
          (!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
        }

        _ += "</select>";
      }
      if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml) if (e.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";else {
        for (d = this._get(e, "yearRange").split(":"), c = new Date().getFullYear(), p = function p(e) {
          var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
          return isNaN(t) ? c : t;
        }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) {
          e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
        }

        e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null;
      }
      return b += this._get(e, "yearSuffix"), y && (b += (!a && g && v ? "" : "&#xa0;") + _), b += "</div>";
    },
    _adjustInstDate: function _adjustInstDate(e, t, i) {
      var s = e.drawYear + ("Y" === i ? t : 0),
          n = e.drawMonth + ("M" === i ? t : 0),
          a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0),
          o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a)));

      e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e);
    },
    _restrictMinMax: function _restrictMinMax(e, t) {
      var i = this._getMinMaxDate(e, "min"),
          s = this._getMinMaxDate(e, "max"),
          n = i && i > t ? i : t;

      return s && n > s ? s : n;
    },
    _notifyChange: function _notifyChange(e) {
      var t = this._get(e, "onChangeMonthYear");

      t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e]);
    },
    _getNumberOfMonths: function _getNumberOfMonths(e) {
      var t = this._get(e, "numberOfMonths");

      return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t;
    },
    _getMinMaxDate: function _getMinMaxDate(e, t) {
      return this._determineDate(e, this._get(e, t + "Date"), null);
    },
    _getDaysInMonth: function _getDaysInMonth(e, t) {
      return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate();
    },
    _getFirstDayOfMonth: function _getFirstDayOfMonth(e, t) {
      return new Date(e, t, 1).getDay();
    },
    _canAdjustMonth: function _canAdjustMonth(e, t, i, s) {
      var n = this._getNumberOfMonths(e),
          a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1));

      return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a);
    },
    _isInRange: function _isInRange(e, t) {
      var i,
          s,
          n = this._getMinMaxDate(e, "min"),
          a = this._getMinMaxDate(e, "max"),
          o = null,
          r = null,
          h = this._get(e, "yearRange");

      return h && (i = h.split(":"), s = new Date().getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear());
    },
    _getFormatConfig: function _getFormatConfig(e) {
      var t = this._get(e, "shortYearCutoff");

      return t = "string" != typeof t ? t : new Date().getFullYear() % 100 + parseInt(t, 10), {
        shortYearCutoff: t,
        dayNamesShort: this._get(e, "dayNamesShort"),
        dayNames: this._get(e, "dayNames"),
        monthNamesShort: this._get(e, "monthNamesShort"),
        monthNames: this._get(e, "monthNames")
      };
    },
    _formatDate: function _formatDate(e, t, i, s) {
      t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
      var n = t ? "object" == _typeof(t) ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
      return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e));
    }
  }), e.fn.datepicker = function (t) {
    if (!this.length) return this;
    e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
      "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t);
    }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i));
  }, e.datepicker = new n(), e.datepicker.initialized = !1, e.datepicker.uuid = new Date().getTime(), e.datepicker.version = "1.11.4", e.datepicker, e.widget("ui.dialog", {
    version: "1.11.4",
    options: {
      appendTo: "body",
      autoOpen: !0,
      buttons: [],
      closeOnEscape: !0,
      closeText: "Close",
      dialogClass: "",
      draggable: !0,
      hide: null,
      height: "auto",
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: "center",
        at: "center",
        of: window,
        collision: "fit",
        using: function using(t) {
          var i = e(this).css(t).offset().top;
          0 > i && e(this).css("top", t.top - i);
        }
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null
    },
    sizeRelatedOptions: {
      buttons: !0,
      height: !0,
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0,
      width: !0
    },
    resizableRelatedOptions: {
      maxHeight: !0,
      maxWidth: !0,
      minHeight: !0,
      minWidth: !0
    },
    _create: function _create() {
      this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height
      }, this.originalPosition = {
        parent: this.element.parent(),
        index: this.element.parent().children().index(this.element)
      }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus();
    },
    _init: function _init() {
      this.options.autoOpen && this.open();
    },
    _appendTo: function _appendTo() {
      var t = this.options.appendTo;
      return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0);
    },
    _destroy: function _destroy() {
      var e,
          t = this.originalPosition;
      this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element);
    },
    widget: function widget() {
      return this.uiDialog;
    },
    disable: e.noop,
    enable: e.noop,
    close: function close(t) {
      var i,
          s = this;

      if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
        if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
          i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur();
        } catch (n) {}

        this._hide(this.uiDialog, this.options.hide, function () {
          s._trigger("close", t);
        });
      }
    },
    isOpen: function isOpen() {
      return this._isOpen;
    },
    moveToTop: function moveToTop() {
      this._moveToTop();
    },
    _moveToTop: function _moveToTop(t, i) {
      var s = !1,
          n = this.uiDialog.siblings(".ui-front:visible").map(function () {
        return +e(this).css("z-index");
      }).get(),
          a = Math.max.apply(null, n);
      return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), s = !0), s && !i && this._trigger("focus", t), s;
    },
    open: function open() {
      var t = this;
      return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
        t._focusTabbable(), t._trigger("focus");
      }), this._makeFocusTarget(), this._trigger("open"), void 0);
    },
    _focusTabbable: function _focusTabbable() {
      var e = this._focusedElement;
      e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus();
    },
    _keepFocus: function _keepFocus(t) {
      function i() {
        var t = this.document[0].activeElement,
            i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
        i || this._focusTabbable();
      }

      t.preventDefault(), i.call(this), this._delay(i);
    },
    _createWrapper: function _createWrapper() {
      this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
        tabIndex: -1,
        role: "dialog"
      }).appendTo(this._appendTo()), this._on(this.uiDialog, {
        keydown: function keydown(t) {
          if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;

          if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
            var i = this.uiDialog.find(":tabbable"),
                s = i.filter(":first"),
                n = i.filter(":last");
            t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== s[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
              n.focus();
            }), t.preventDefault()) : (this._delay(function () {
              s.focus();
            }), t.preventDefault());
          }
        },
        mousedown: function mousedown(e) {
          this._moveToTop(e) && this._focusTabbable();
        }
      }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
        "aria-describedby": this.element.uniqueId().attr("id")
      });
    },
    _createTitlebar: function _createTitlebar() {
      var t;
      this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
        mousedown: function mousedown(t) {
          e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus();
        }
      }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
        label: this.options.closeText,
        icons: {
          primary: "ui-icon-closethick"
        },
        text: !1
      }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
        click: function click(e) {
          e.preventDefault(), this.close(e);
        }
      }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
        "aria-labelledby": t.attr("id")
      });
    },
    _title: function _title(e) {
      this.options.title || e.html("&#160;"), e.text(this.options.title);
    },
    _createButtonPane: function _createButtonPane() {
      this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons();
    },
    _createButtons: function _createButtons() {
      var t = this,
          i = this.options.buttons;
      return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (e.each(i, function (i, s) {
        var n, a;
        s = e.isFunction(s) ? {
          click: s,
          text: i
        } : s, s = e.extend({
          type: "button"
        }, s), n = s.click, s.click = function () {
          n.apply(t.element[0], arguments);
        }, a = {
          icons: s.icons,
          text: s.showText
        }, delete s.icons, delete s.showText, e("<button></button>", s).button(a).appendTo(t.uiButtonSet);
      }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0);
    },
    _makeDraggable: function _makeDraggable() {
      function t(e) {
        return {
          position: e.position,
          offset: e.offset
        };
      }

      var i = this,
          s = this.options;
      this.uiDialog.draggable({
        cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
        handle: ".ui-dialog-titlebar",
        containment: "document",
        start: function start(s, n) {
          e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, t(n));
        },
        drag: function drag(e, s) {
          i._trigger("drag", e, t(s));
        },
        stop: function stop(n, a) {
          var o = a.offset.left - i.document.scrollLeft(),
              r = a.offset.top - i.document.scrollTop();
          s.position = {
            my: "left top",
            at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (r >= 0 ? "+" : "") + r,
            of: i.window
          }, e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, t(a));
        }
      });
    },
    _makeResizable: function _makeResizable() {
      function t(e) {
        return {
          originalPosition: e.originalPosition,
          originalSize: e.originalSize,
          position: e.position,
          size: e.size
        };
      }

      var i = this,
          s = this.options,
          n = s.resizable,
          a = this.uiDialog.css("position"),
          o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
      this.uiDialog.resizable({
        cancel: ".ui-dialog-content",
        containment: "document",
        alsoResize: this.element,
        maxWidth: s.maxWidth,
        maxHeight: s.maxHeight,
        minWidth: s.minWidth,
        minHeight: this._minHeight(),
        handles: o,
        start: function start(s, n) {
          e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, t(n));
        },
        resize: function resize(e, s) {
          i._trigger("resize", e, t(s));
        },
        stop: function stop(n, a) {
          var o = i.uiDialog.offset(),
              r = o.left - i.document.scrollLeft(),
              h = o.top - i.document.scrollTop();
          s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
            my: "left top",
            at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
            of: i.window
          }, e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, t(a));
        }
      }).css("position", a);
    },
    _trackFocus: function _trackFocus() {
      this._on(this.widget(), {
        focusin: function focusin(t) {
          this._makeFocusTarget(), this._focusedElement = e(t.target);
        }
      });
    },
    _makeFocusTarget: function _makeFocusTarget() {
      this._untrackInstance(), this._trackingInstances().unshift(this);
    },
    _untrackInstance: function _untrackInstance() {
      var t = this._trackingInstances(),
          i = e.inArray(this, t);

      -1 !== i && t.splice(i, 1);
    },
    _trackingInstances: function _trackingInstances() {
      var e = this.document.data("ui-dialog-instances");
      return e || (e = [], this.document.data("ui-dialog-instances", e)), e;
    },
    _minHeight: function _minHeight() {
      var e = this.options;
      return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height);
    },
    _position: function _position() {
      var e = this.uiDialog.is(":visible");
      e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide();
    },
    _setOptions: function _setOptions(t) {
      var i = this,
          s = !1,
          n = {};
      e.each(t, function (e, t) {
        i._setOption(e, t), e in i.sizeRelatedOptions && (s = !0), e in i.resizableRelatedOptions && (n[e] = t);
      }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n);
    },
    _setOption: function _setOption(e, t) {
      var i,
          s,
          n = this.uiDialog;
      "dialogClass" === e && n.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
        label: "" + t
      }), "draggable" === e && (i = n.is(":data(ui-draggable)"), i && !t && n.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = n.is(":data(ui-resizable)"), s && !t && n.resizable("destroy"), s && "string" == typeof t && n.resizable("option", "handles", t), s || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
    },
    _size: function _size() {
      var e,
          t,
          i,
          s = this.options;
      this.element.show().css({
        width: "auto",
        minHeight: 0,
        maxHeight: "none",
        height: 0
      }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({
        height: "auto",
        width: s.width
      }).outerHeight(), t = Math.max(0, s.minHeight - e), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : "none", "auto" === s.height ? this.element.css({
        minHeight: t,
        maxHeight: i,
        height: "auto"
      }) : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight());
    },
    _blockFrames: function _blockFrames() {
      this.iframeBlocks = this.document.find("iframe").map(function () {
        var t = e(this);
        return e("<div>").css({
          position: "absolute",
          width: t.outerWidth(),
          height: t.outerHeight()
        }).appendTo(t.parent()).offset(t.offset())[0];
      });
    },
    _unblockFrames: function _unblockFrames() {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _allowInteraction: function _allowInteraction(t) {
      return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length;
    },
    _createOverlay: function _createOverlay() {
      if (this.options.modal) {
        var t = !0;
        this._delay(function () {
          t = !1;
        }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
          focusin: function focusin(e) {
            t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable());
          }
        }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
          mousedown: "_keepFocus"
        }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1);
      }
    },
    _destroyOverlay: function _destroyOverlay() {
      if (this.options.modal && this.overlay) {
        var e = this.document.data("ui-dialog-overlays") - 1;
        e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null;
      }
    }
  }), e.widget("ui.progressbar", {
    version: "1.11.4",
    options: {
      max: 100,
      value: 0,
      change: null,
      complete: null
    },
    min: 0,
    _create: function _create() {
      this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
        role: "progressbar",
        "aria-valuemin": this.min
      }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue();
    },
    _destroy: function _destroy() {
      this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove();
    },
    value: function value(e) {
      return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0);
    },
    _constrainedValue: function _constrainedValue(e) {
      return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e));
    },
    _setOptions: function _setOptions(e) {
      var t = e.value;
      delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue();
    },
    _setOption: function _setOption(e, t) {
      "max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t);
    },
    _percentage: function _percentage() {
      return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min);
    },
    _refreshValue: function _refreshValue() {
      var t = this.options.value,
          i = this._percentage();

      this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
        "aria-valuemax": this.options.max,
        "aria-valuenow": t
      }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete");
    }
  }), e.widget("ui.selectmenu", {
    version: "1.11.4",
    defaultElement: "<select>",
    options: {
      appendTo: null,
      disabled: null,
      icons: {
        button: "ui-icon-triangle-1-s"
      },
      position: {
        my: "left top",
        at: "left bottom",
        collision: "none"
      },
      width: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      select: null
    },
    _create: function _create() {
      var e = this.element.uniqueId().attr("id");
      this.ids = {
        element: e,
        button: e + "-button",
        menu: e + "-menu"
      }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable();
    },
    _drawButton: function _drawButton() {
      var t = this;
      this.label = e("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
        click: function click(e) {
          this.button.focus(), e.preventDefault();
        }
      }), this.element.hide(), this.button = e("<span>", {
        "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
        tabindex: this.options.disabled ? -1 : 0,
        id: this.ids.button,
        role: "combobox",
        "aria-expanded": "false",
        "aria-autocomplete": "list",
        "aria-owns": this.ids.menu,
        "aria-haspopup": "true"
      }).insertAfter(this.element), e("<span>", {
        "class": "ui-icon " + this.options.icons.button
      }).prependTo(this.button), this.buttonText = e("<span>", {
        "class": "ui-selectmenu-text"
      }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
        t.menuItems || t._refreshMenu();
      }), this._hoverable(this.button), this._focusable(this.button);
    },
    _drawMenu: function _drawMenu() {
      var t = this;
      this.menu = e("<ul>", {
        "aria-hidden": "true",
        "aria-labelledby": this.ids.button,
        id: this.ids.menu
      }), this.menuWrap = e("<div>", {
        "class": "ui-selectmenu-menu ui-front"
      }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
        role: "listbox",
        select: function select(e, i) {
          e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e);
        },
        focus: function focus(e, i) {
          var s = i.item.data("ui-selectmenu-item");
          null != t.focusIndex && s.index !== t.focusIndex && (t._trigger("focus", e, {
            item: s
          }), t.isOpen || t._select(s, e)), t.focusIndex = s.index, t.button.attr("aria-activedescendant", t.menuItems.eq(s.index).attr("id"));
        }
      }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
        return !1;
      }, this.menuInstance._isDivider = function () {
        return !1;
      };
    },
    refresh: function refresh() {
      this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton();
    },
    _refreshMenu: function _refreshMenu() {
      this.menu.empty();
      var e,
          t = this.element.find("option");
      t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")));
    },
    open: function open(e) {
      this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e));
    },
    _position: function _position() {
      this.menuWrap.position(e.extend({
        of: this.button
      }, this.options.position));
    },
    close: function close(e) {
      this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e));
    },
    widget: function widget() {
      return this.button;
    },
    menuWidget: function menuWidget() {
      return this.menu;
    },
    _renderMenu: function _renderMenu(t, i) {
      var s = this,
          n = "";
      e.each(i, function (i, a) {
        a.optgroup !== n && (e("<li>", {
          "class": "ui-selectmenu-optgroup ui-menu-divider" + (a.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
          text: a.optgroup
        }).appendTo(t), n = a.optgroup), s._renderItemData(t, a);
      });
    },
    _renderItemData: function _renderItemData(e, t) {
      return this._renderItem(e, t).data("ui-selectmenu-item", t);
    },
    _renderItem: function _renderItem(t, i) {
      var s = e("<li>");
      return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(t);
    },
    _setText: function _setText(e, t) {
      t ? e.text(t) : e.html("&#160;");
    },
    _move: function _move(e, t) {
      var i,
          s,
          n = ".ui-menu-item";
      this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), s = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](n).eq(-1) : i[e + "All"](n).eq(0), s.length && this.menuInstance.focus(t, s);
    },
    _getSelectedItem: function _getSelectedItem() {
      return this.menuItems.eq(this.element[0].selectedIndex);
    },
    _toggle: function _toggle(e) {
      this[this.isOpen ? "close" : "open"](e);
    },
    _setSelection: function _setSelection() {
      var e;
      this.range && (window.getSelection ? (e = window.getSelection(), e.removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.focus());
    },
    _documentClick: {
      mousedown: function mousedown(t) {
        this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t));
      }
    },
    _buttonEvents: {
      mousedown: function mousedown() {
        var e;
        window.getSelection ? (e = window.getSelection(), e.rangeCount && (this.range = e.getRangeAt(0))) : this.range = document.selection.createRange();
      },
      click: function click(e) {
        this._setSelection(), this._toggle(e);
      },
      keydown: function keydown(t) {
        var i = !0;

        switch (t.keyCode) {
          case e.ui.keyCode.TAB:
          case e.ui.keyCode.ESCAPE:
            this.close(t), i = !1;
            break;

          case e.ui.keyCode.ENTER:
            this.isOpen && this._selectFocusedItem(t);
            break;

          case e.ui.keyCode.UP:
            t.altKey ? this._toggle(t) : this._move("prev", t);
            break;

          case e.ui.keyCode.DOWN:
            t.altKey ? this._toggle(t) : this._move("next", t);
            break;

          case e.ui.keyCode.SPACE:
            this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
            break;

          case e.ui.keyCode.LEFT:
            this._move("prev", t);

            break;

          case e.ui.keyCode.RIGHT:
            this._move("next", t);

            break;

          case e.ui.keyCode.HOME:
          case e.ui.keyCode.PAGE_UP:
            this._move("first", t);

            break;

          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_DOWN:
            this._move("last", t);

            break;

          default:
            this.menu.trigger(t), i = !1;
        }

        i && t.preventDefault();
      }
    },
    _selectFocusedItem: function _selectFocusedItem(e) {
      var t = this.menuItems.eq(this.focusIndex);
      t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e);
    },
    _select: function _select(e, t) {
      var i = this.element[0].selectedIndex;
      this.element[0].selectedIndex = e.index, this._setText(this.buttonText, e.label), this._setAria(e), this._trigger("select", t, {
        item: e
      }), e.index !== i && this._trigger("change", t, {
        item: e
      }), this.close(t);
    },
    _setAria: function _setAria(e) {
      var t = this.menuItems.eq(e.index).attr("id");
      this.button.attr({
        "aria-labelledby": t,
        "aria-activedescendant": t
      }), this.menu.attr("aria-activedescendant", t);
    },
    _setOption: function _setOption(e, t) {
      "icons" === e && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "disabled" === e && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === e && this._resizeButton();
    },
    _appendTo: function _appendTo() {
      var t = this.options.appendTo;
      return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t;
    },
    _toggleAttr: function _toggleAttr() {
      this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen);
    },
    _resizeButton: function _resizeButton() {
      var e = this.options.width;
      e || (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e);
    },
    _resizeMenu: function _resizeMenu() {
      this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1));
    },
    _getCreateOptions: function _getCreateOptions() {
      return {
        disabled: this.element.prop("disabled")
      };
    },
    _parseOptions: function _parseOptions(t) {
      var i = [];
      t.each(function (t, s) {
        var n = e(s),
            a = n.parent("optgroup");
        i.push({
          element: n,
          index: t,
          value: n.val(),
          label: n.text(),
          optgroup: a.attr("label") || "",
          disabled: a.prop("disabled") || n.prop("disabled")
        });
      }), this.items = i;
    },
    _destroy: function _destroy() {
      this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element);
    }
  }), e.widget("ui.slider", e.ui.mouse, {
    version: "1.11.4",
    widgetEventPrefix: "slide",
    options: {
      animate: !1,
      distance: 0,
      max: 100,
      min: 0,
      orientation: "horizontal",
      range: !1,
      step: 1,
      value: 0,
      values: null,
      change: null,
      slide: null,
      start: null,
      stop: null
    },
    numPages: 5,
    _create: function _create() {
      this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
    },
    _refresh: function _refresh() {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    },
    _createHandles: function _createHandles() {
      var t,
          i,
          s = this.options,
          n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
          a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
          o = [];

      for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) {
        o.push(a);
      }

      this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
        e(this).data("ui-slider-handle-index", t);
      });
    },
    _createRange: function _createRange() {
      var t = this.options,
          i = "";
      t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
        left: "",
        bottom: ""
      }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null);
    },
    _setupEvents: function _setupEvents() {
      this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
    },
    _destroy: function _destroy() {
      this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy();
    },
    _mouseCapture: function _mouseCapture(t) {
      var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l,
          u = this,
          d = this.options;
      return d.disabled ? !1 : (this.elementSize = {
        width: this.element.outerWidth(),
        height: this.element.outerHeight()
      }, this.elementOffset = this.element.offset(), i = {
        x: t.pageX,
        y: t.pageY
      }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
        var i = Math.abs(s - u.values(t));
        (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t);
      }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
        left: 0,
        top: 0
      } : {
        left: t.pageX - h.left - a.width() / 2,
        top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
      }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0));
    },
    _mouseStart: function _mouseStart() {
      return !0;
    },
    _mouseDrag: function _mouseDrag(e) {
      var t = {
        x: e.pageX,
        y: e.pageY
      },
          i = this._normValueFromMouse(t);

      return this._slide(e, this._handleIndex, i), !1;
    },
    _mouseStop: function _mouseStop(e) {
      return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
    },
    _detectOrientation: function _detectOrientation() {
      this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
    },
    _normValueFromMouse: function _normValueFromMouse(e) {
      var t, i, s, n, a;
      return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a);
    },
    _start: function _start(e, t) {
      var i = {
        handle: this.handles[t],
        value: this.value()
      };
      return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i);
    },
    _slide: function _slide(e, t, i) {
      var s, n, a;
      this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
        handle: this.handles[t],
        value: i,
        values: n
      }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
        handle: this.handles[t],
        value: i
      }), a !== !1 && this.value(i));
    },
    _stop: function _stop(e, t) {
      var i = {
        handle: this.handles[t],
        value: this.value()
      };
      this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i);
    },
    _change: function _change(e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var i = {
          handle: this.handles[t],
          value: this.value()
        };
        this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i);
      }
    },
    value: function value(e) {
      return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value();
    },
    values: function values(t, i) {
      var s, n, a;
      if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
      if (!arguments.length) return this._values();
      if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();

      for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) {
        s[a] = this._trimAlignValue(n[a]), this._change(null, a);
      }

      this._refreshValue();
    },
    _setOption: function _setOption(t, i) {
      var s,
          n = 0;

      switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
        case "orientation":
          this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
          break;

        case "value":
          this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
          break;

        case "values":
          for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) {
            this._change(null, s);
          }

          this._animateOff = !1;
          break;

        case "step":
        case "min":
        case "max":
          this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
          break;

        case "range":
          this._animateOff = !0, this._refresh(), this._animateOff = !1;
      }
    },
    _value: function _value() {
      var e = this.options.value;
      return e = this._trimAlignValue(e);
    },
    _values: function _values(e) {
      var t, i, s;
      if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);

      if (this.options.values && this.options.values.length) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) {
          i[s] = this._trimAlignValue(i[s]);
        }

        return i;
      }

      return [];
    },
    _trimAlignValue: function _trimAlignValue(e) {
      if (this._valueMin() >= e) return this._valueMin();
      if (e >= this._valueMax()) return this._valueMax();
      var t = this.options.step > 0 ? this.options.step : 1,
          i = (e - this._valueMin()) % t,
          s = e - i;
      return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5));
    },
    _calculateNewMax: function _calculateNewMax() {
      var e = this.options.max,
          t = this._valueMin(),
          i = this.options.step,
          s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;

      e = s + t, this.max = parseFloat(e.toFixed(this._precision()));
    },
    _precision: function _precision() {
      var e = this._precisionOf(this.options.step);

      return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e;
    },
    _precisionOf: function _precisionOf(e) {
      var t = "" + e,
          i = t.indexOf(".");
      return -1 === i ? 0 : t.length - i - 1;
    },
    _valueMin: function _valueMin() {
      return this.options.min;
    },
    _valueMax: function _valueMax() {
      return this.max;
    },
    _refreshValue: function _refreshValue() {
      var t,
          i,
          s,
          n,
          a,
          o = this.options.range,
          r = this.options,
          h = this,
          l = this._animateOff ? !1 : r.animate,
          u = {};
      this.options.values && this.options.values.length ? this.handles.each(function (s) {
        i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          left: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          width: i - t + "%"
        }, {
          queue: !1,
          duration: r.animate
        })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
          bottom: i + "%"
        }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
          height: i - t + "%"
        }, {
          queue: !1,
          duration: r.animate
        }))), t = i;
      }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        width: i + "%"
      }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
        width: 100 - i + "%"
      }, {
        queue: !1,
        duration: r.animate
      }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
        height: i + "%"
      }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
        height: 100 - i + "%"
      }, {
        queue: !1,
        duration: r.animate
      }));
    },
    _handleEvents: {
      keydown: function keydown(t) {
        var i,
            s,
            n,
            a,
            o = e(t.target).data("ui-slider-handle-index");

        switch (t.keyCode) {
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_UP:
          case e.ui.keyCode.PAGE_DOWN:
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return;
        }

        switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
          case e.ui.keyCode.HOME:
            n = this._valueMin();
            break;

          case e.ui.keyCode.END:
            n = this._valueMax();
            break;

          case e.ui.keyCode.PAGE_UP:
            n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case e.ui.keyCode.PAGE_DOWN:
            n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
            break;

          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
            if (s === this._valueMax()) return;
            n = this._trimAlignValue(s + a);
            break;

          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (s === this._valueMin()) return;
            n = this._trimAlignValue(s - a);
        }

        this._slide(t, o, n);
      },
      keyup: function keyup(t) {
        var i = e(t.target).data("ui-slider-handle-index");
        this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"));
      }
    }
  }), e.widget("ui.spinner", {
    version: "1.11.4",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
      culture: null,
      icons: {
        down: "ui-icon-triangle-1-s",
        up: "ui-icon-triangle-1-n"
      },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null
    },
    _create: function _create() {
      this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
        beforeunload: function beforeunload() {
          this.element.removeAttr("autocomplete");
        }
      });
    },
    _getCreateOptions: function _getCreateOptions() {
      var t = {},
          i = this.element;
      return e.each(["min", "max", "step"], function (e, s) {
        var n = i.attr(s);
        void 0 !== n && n.length && (t[s] = n);
      }), t;
    },
    _events: {
      keydown: function keydown(e) {
        this._start(e) && this._keydown(e) && e.preventDefault();
      },
      keyup: "_stop",
      focus: function focus() {
        this.previous = this.element.val();
      },
      blur: function blur(e) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0);
      },
      mousewheel: function mousewheel(e, t) {
        if (t) {
          if (!this.spinning && !this._start(e)) return !1;
          this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
            this.spinning && this._stop(e);
          }, 100), e.preventDefault();
        }
      },
      "mousedown .ui-spinner-button": function mousedownUiSpinnerButton(t) {
        function i() {
          var e = this.element[0] === this.document[0].activeElement;
          e || (this.element.focus(), this.previous = s, this._delay(function () {
            this.previous = s;
          }));
        }

        var s;
        s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
          delete this.cancelBlur, i.call(this);
        }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t);
      },
      "mouseup .ui-spinner-button": "_stop",
      "mouseenter .ui-spinner-button": function mouseenterUiSpinnerButton(t) {
        return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0;
      },
      "mouseleave .ui-spinner-button": "_stop"
    },
    _draw: function _draw() {
      var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
      this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable();
    },
    _keydown: function _keydown(t) {
      var i = this.options,
          s = e.ui.keyCode;

      switch (t.keyCode) {
        case s.UP:
          return this._repeat(null, 1, t), !0;

        case s.DOWN:
          return this._repeat(null, -1, t), !0;

        case s.PAGE_UP:
          return this._repeat(null, i.page, t), !0;

        case s.PAGE_DOWN:
          return this._repeat(null, -i.page, t), !0;
      }

      return !1;
    },
    _uiSpinnerHtml: function _uiSpinnerHtml() {
      return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
    },
    _buttonHtml: function _buttonHtml() {
      return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>";
    },
    _start: function _start(e) {
      return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1;
    },
    _repeat: function _repeat(e, t, i) {
      e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
        this._repeat(40, t, i);
      }, e), this._spin(t * this.options.step, i);
    },
    _spin: function _spin(e, t) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {
        value: i
      }) === !1 || (this._value(i), this.counter++);
    },
    _increment: function _increment(t) {
      var i = this.options.incremental;
      return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1;
    },
    _precision: function _precision() {
      var e = this._precisionOf(this.options.step);

      return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e;
    },
    _precisionOf: function _precisionOf(e) {
      var t = "" + e,
          i = t.indexOf(".");
      return -1 === i ? 0 : t.length - i - 1;
    },
    _adjustValue: function _adjustValue(e) {
      var t,
          i,
          s = this.options;
      return t = null !== s.min ? s.min : 0, i = e - t, i = Math.round(i / s.step) * s.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e;
    },
    _stop: function _stop(e) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e));
    },
    _setOption: function _setOption(e, t) {
      if ("culture" === e || "numberFormat" === e) {
        var i = this._parse(this.element.val());

        return this.options[e] = t, this.element.val(this._format(i)), void 0;
      }

      ("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"));
    },
    _setOptions: h(function (e) {
      this._super(e);
    }),
    _parse: function _parse(e) {
      return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e;
    },
    _format: function _format(e) {
      return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e;
    },
    _refresh: function _refresh() {
      this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val())
      });
    },
    isValid: function isValid() {
      var e = this.value();
      return null === e ? !1 : e === this._adjustValue(e);
    },
    _value: function _value(e, t) {
      var i;
      "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh();
    },
    _destroy: function _destroy() {
      this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element);
    },
    stepUp: h(function (e) {
      this._stepUp(e);
    }),
    _stepUp: function _stepUp(e) {
      this._start() && (this._spin((e || 1) * this.options.step), this._stop());
    },
    stepDown: h(function (e) {
      this._stepDown(e);
    }),
    _stepDown: function _stepDown(e) {
      this._start() && (this._spin((e || 1) * -this.options.step), this._stop());
    },
    pageUp: h(function (e) {
      this._stepUp((e || 1) * this.options.page);
    }),
    pageDown: h(function (e) {
      this._stepDown((e || 1) * this.options.page);
    }),
    value: function value(e) {
      return arguments.length ? (h(this._value).call(this, e), void 0) : this._parse(this.element.val());
    },
    widget: function widget() {
      return this.uiSpinner;
    }
  }), e.widget("ui.tabs", {
    version: "1.11.4",
    delay: 300,
    options: {
      active: null,
      collapsible: !1,
      event: "click",
      heightStyle: "content",
      hide: null,
      show: null,
      activate: null,
      beforeActivate: null,
      beforeLoad: null,
      load: null
    },
    _isLocal: function () {
      var e = /#.*$/;
      return function (t) {
        var i, s;
        t = t.cloneNode(!1), i = t.href.replace(e, ""), s = location.href.replace(e, "");

        try {
          i = decodeURIComponent(i);
        } catch (n) {}

        try {
          s = decodeURIComponent(s);
        } catch (n) {}

        return t.hash.length > 1 && i === s;
      };
    }(),
    _create: function _create() {
      var t = this,
          i = this.options;
      this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
        return t.tabs.index(e);
      }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active);
    },
    _initialActive: function _initialActive() {
      var t = this.options.active,
          i = this.options.collapsible,
          s = location.hash.substring(1);
      return null === t && (s && this.tabs.each(function (i, n) {
        return e(n).attr("aria-controls") === s ? (t = i, !1) : void 0;
      }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t;
    },
    _getCreateEventData: function _getCreateEventData() {
      return {
        tab: this.active,
        panel: this.active.length ? this._getPanelForTab(this.active) : e()
      };
    },
    _tabKeydown: function _tabKeydown(t) {
      var i = e(this.document[0].activeElement).closest("li"),
          s = this.tabs.index(i),
          n = !0;

      if (!this._handlePageNav(t)) {
        switch (t.keyCode) {
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
            s++;
            break;

          case e.ui.keyCode.UP:
          case e.ui.keyCode.LEFT:
            n = !1, s--;
            break;

          case e.ui.keyCode.END:
            s = this.anchors.length - 1;
            break;

          case e.ui.keyCode.HOME:
            s = 0;
            break;

          case e.ui.keyCode.SPACE:
            return t.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;

          case e.ui.keyCode.ENTER:
            return t.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;

          default:
            return;
        }

        t.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
          this.option("active", s);
        }, this.delay));
      }
    },
    _panelKeydown: function _panelKeydown(t) {
      this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus());
    },
    _handlePageNav: function _handlePageNav(t) {
      return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
    },
    _findNextTab: function _findNextTab(t, i) {
      function s() {
        return t > n && (t = 0), 0 > t && (t = n), t;
      }

      for (var n = this.tabs.length - 1; -1 !== e.inArray(s(), this.options.disabled);) {
        t = i ? t + 1 : t - 1;
      }

      return t;
    },
    _focusNextTab: function _focusNextTab(e, t) {
      return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e;
    },
    _setOption: function _setOption(e, t) {
      return "active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0);
    },
    _sanitizeSelector: function _sanitizeSelector(e) {
      return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
    },
    refresh: function refresh() {
      var t = this.options,
          i = this.tablist.children(":has(a[href])");
      t.disabled = e.map(i.filter(".ui-state-disabled"), function (e) {
        return i.index(e);
      }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh();
    },
    _refresh: function _refresh() {
      this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
        "aria-selected": "false",
        "aria-expanded": "false",
        tabIndex: -1
      }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
        "aria-hidden": "true"
      }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      }), this._getPanelForTab(this.active).show().attr({
        "aria-hidden": "false"
      })) : this.tabs.eq(0).attr("tabIndex", 0);
    },
    _processTabs: function _processTabs() {
      var t = this,
          i = this.tabs,
          s = this.anchors,
          n = this.panels;
      this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (t) {
        e(this).is(".ui-state-disabled") && t.preventDefault();
      }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
        e(this).closest("li").is(".ui-state-disabled") && this.blur();
      }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
        role: "tab",
        tabIndex: -1
      }), this.anchors = this.tabs.map(function () {
        return e("a", this)[0];
      }).addClass("ui-tabs-anchor").attr({
        role: "presentation",
        tabIndex: -1
      }), this.panels = e(), this.anchors.each(function (i, s) {
        var n,
            a,
            o,
            r = e(s).uniqueId().attr("id"),
            h = e(s).closest("li"),
            l = h.attr("aria-controls");
        t._isLocal(s) ? (n = s.hash, o = n.substring(1), a = t.element.find(t._sanitizeSelector(n))) : (o = h.attr("aria-controls") || e({}).uniqueId()[0].id, n = "#" + o, a = t.element.find(n), a.length || (a = t._createPanel(o), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live", "polite")), a.length && (t.panels = t.panels.add(a)), l && h.data("ui-tabs-aria-controls", l), h.attr({
          "aria-controls": o,
          "aria-labelledby": r
        }), a.attr("aria-labelledby", r);
      }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)));
    },
    _getList: function _getList() {
      return this.tablist || this.element.find("ol,ul").eq(0);
    },
    _createPanel: function _createPanel(t) {
      return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0);
    },
    _setupDisabled: function _setupDisabled(t) {
      e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);

      for (var i, s = 0; i = this.tabs[s]; s++) {
        t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
      }

      this.options.disabled = t;
    },
    _setupEvents: function _setupEvents(t) {
      var i = {};
      t && e.each(t.split(" "), function (e, t) {
        i[t] = "_eventHandler";
      }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
        click: function click(e) {
          e.preventDefault();
        }
      }), this._on(this.anchors, i), this._on(this.tabs, {
        keydown: "_tabKeydown"
      }), this._on(this.panels, {
        keydown: "_panelKeydown"
      }), this._focusable(this.tabs), this._hoverable(this.tabs);
    },
    _setupHeightStyle: function _setupHeightStyle(t) {
      var i,
          s = this.element.parent();
      "fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
        var t = e(this),
            s = t.css("position");
        "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0));
      }), this.element.children().not(this.panels).each(function () {
        i -= e(this).outerHeight(!0);
      }), this.panels.each(function () {
        e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()));
      }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
        i = Math.max(i, e(this).height("").height());
      }).height(i));
    },
    _eventHandler: function _eventHandler(t) {
      var i = this.options,
          s = this.active,
          n = e(t.currentTarget),
          a = n.closest("li"),
          o = a[0] === s[0],
          r = o && i.collapsible,
          h = r ? e() : this._getPanelForTab(a),
          l = s.length ? this._getPanelForTab(s) : e(),
          u = {
        oldTab: s,
        oldPanel: l,
        newTab: r ? e() : a,
        newPanel: h
      };
      t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? e() : a, this.xhr && this.xhr.abort(), l.length || h.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), t), this._toggle(t, u));
    },
    _toggle: function _toggle(t, i) {
      function s() {
        a.running = !1, a._trigger("activate", t, i);
      }

      function n() {
        i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s());
      }

      var a = this,
          o = i.newPanel,
          r = i.oldPanel;
      this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
        i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n();
      }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
        "aria-selected": "false",
        "aria-expanded": "false"
      }), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
        return 0 === e(this).attr("tabIndex");
      }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({
        "aria-selected": "true",
        "aria-expanded": "true",
        tabIndex: 0
      });
    },
    _activate: function _activate(t) {
      var i,
          s = this._findActive(t);

      s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
        target: i,
        currentTarget: i,
        preventDefault: e.noop
      }));
    },
    _findActive: function _findActive(t) {
      return t === !1 ? e() : this.tabs.eq(t);
    },
    _getIndex: function _getIndex(e) {
      return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e;
    },
    _destroy: function _destroy() {
      this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function () {
        e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role");
      }), this.tabs.each(function () {
        var t = e(this),
            i = t.data("ui-tabs-aria-controls");
        i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls");
      }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
    },
    enable: function enable(t) {
      var i = this.options.disabled;
      i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function (e) {
        return e !== t ? e : null;
      }) : e.map(this.tabs, function (e, i) {
        return i !== t ? i : null;
      })), this._setupDisabled(i));
    },
    disable: function disable(t) {
      var i = this.options.disabled;

      if (i !== !0) {
        if (void 0 === t) i = !0;else {
          if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return;
          i = e.isArray(i) ? e.merge([t], i).sort() : [t];
        }

        this._setupDisabled(i);
      }
    },
    load: function load(t, i) {
      t = this._getIndex(t);

      var s = this,
          n = this.tabs.eq(t),
          a = n.find(".ui-tabs-anchor"),
          o = this._getPanelForTab(n),
          r = {
        tab: n,
        panel: o
      },
          h = function h(e, t) {
        "abort" === t && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === s.xhr && delete s.xhr;
      };

      this._isLocal(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function (e, t, n) {
        setTimeout(function () {
          o.html(e), s._trigger("load", i, r), h(n, t);
        }, 1);
      }).fail(function (e, t) {
        setTimeout(function () {
          h(e, t);
        }, 1);
      })));
    },
    _ajaxSettings: function _ajaxSettings(t, i, s) {
      var n = this;
      return {
        url: t.attr("href"),
        beforeSend: function beforeSend(t, a) {
          return n._trigger("beforeLoad", i, e.extend({
            jqXHR: t,
            ajaxSettings: a
          }, s));
        }
      };
    },
    _getPanelForTab: function _getPanelForTab(t) {
      var i = e(t).attr("aria-controls");
      return this.element.find(this._sanitizeSelector("#" + i));
    }
  }), e.widget("ui.tooltip", {
    version: "1.11.4",
    options: {
      content: function content() {
        var t = e(this).attr("title") || "";
        return e("<a>").text(t).html();
      },
      hide: !0,
      items: "[title]:not([disabled])",
      position: {
        my: "left top+15",
        at: "left bottom",
        collision: "flipfit flip"
      },
      show: !0,
      tooltipClass: null,
      track: !1,
      close: null,
      open: null
    },
    _addDescribedBy: function _addDescribedBy(t, i) {
      var s = (t.attr("aria-describedby") || "").split(/\s+/);
      s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" ")));
    },
    _removeDescribedBy: function _removeDescribedBy(t) {
      var i = t.data("ui-tooltip-id"),
          s = (t.attr("aria-describedby") || "").split(/\s+/),
          n = e.inArray(i, s);
      -1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"), s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby");
    },
    _create: function _create() {
      this._on({
        mouseover: "open",
        focusin: "open"
      }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({
        role: "log",
        "aria-live": "assertive",
        "aria-relevant": "additions"
      }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
    },
    _setOption: function _setOption(t, i) {
      var s = this;
      return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && e.each(this.tooltips, function (e, t) {
        s._updateContent(t.element);
      }), void 0);
    },
    _disable: function _disable() {
      var t = this;
      e.each(this.tooltips, function (i, s) {
        var n = e.Event("blur");
        n.target = n.currentTarget = s.element[0], t.close(n, !0);
      }), this.element.find(this.options.items).addBack().each(function () {
        var t = e(this);
        t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title");
      });
    },
    _enable: function _enable() {
      this.element.find(this.options.items).addBack().each(function () {
        var t = e(this);
        t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"));
      });
    },
    open: function open(t) {
      var i = this,
          s = e(t ? t.target : this.element).closest(this.options.items);
      s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function () {
        var t,
            s = e(this);
        s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
          element: this,
          title: s.attr("title")
        }, s.attr("title", ""));
      }), this._registerCloseHandlers(t, s), this._updateContent(s, t));
    },
    _updateContent: function _updateContent(e, t) {
      var i,
          s = this.options.content,
          n = this,
          a = t ? t.type : null;
      return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function (i) {
        n._delay(function () {
          e.data("ui-tooltip-open") && (t && (t.type = a), this._open(t, e, i));
        });
      }), i && this._open(t, e, i), void 0);
    },
    _open: function _open(t, i, s) {
      function n(e) {
        l.of = e, o.is(":hidden") || o.position(l);
      }

      var a,
          o,
          r,
          h,
          l = e.extend({}, this.options.position);

      if (s) {
        if (a = this._find(i)) return a.tooltip.find(".ui-tooltip-content").html(s), void 0;
        i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), o = a.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (h = s.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = s, e("<div>").html(h).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
          mousemove: n
        }), n(t)) : o.position(e.extend({
          of: i
        }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
          o.is(":visible") && (n(l.of), clearInterval(r));
        }, e.fx.interval)), this._trigger("open", t, {
          tooltip: o
        });
      }
    },
    _registerCloseHandlers: function _registerCloseHandlers(t, i) {
      var s = {
        keyup: function keyup(t) {
          if (t.keyCode === e.ui.keyCode.ESCAPE) {
            var s = e.Event(t);
            s.currentTarget = i[0], this.close(s, !0);
          }
        }
      };
      i[0] !== this.element[0] && (s.remove = function () {
        this._removeTooltip(this._find(i).tooltip);
      }), t && "mouseover" !== t.type || (s.mouseleave = "close"), t && "focusin" !== t.type || (s.focusout = "close"), this._on(!0, i, s);
    },
    close: function close(t) {
      var i,
          s = this,
          n = e(t ? t.currentTarget : this.element),
          a = this._find(n);

      return a ? (i = a.tooltip, a.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), a.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
        s._removeTooltip(e(this));
      }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function (t, i) {
        e(i.element).attr("title", i.title), delete s.parents[t];
      }), a.closing = !0, this._trigger("close", t, {
        tooltip: i
      }), a.hiding || (a.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0);
    },
    _tooltip: function _tooltip(t) {
      var i = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
          s = i.uniqueId().attr("id");
      return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = {
        element: t,
        tooltip: i
      };
    },
    _find: function _find(e) {
      var t = e.data("ui-tooltip-id");
      return t ? this.tooltips[t] : null;
    },
    _removeTooltip: function _removeTooltip(e) {
      e.remove(), delete this.tooltips[e.attr("id")];
    },
    _destroy: function _destroy() {
      var t = this;
      e.each(this.tooltips, function (i, s) {
        var n = e.Event("blur"),
            a = s.element;
        n.target = n.currentTarget = a[0], t.close(n, !0), e("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title"));
      }), this.liveRegion.remove();
    }
  });
  var y = "ui-effects-",
      b = e;
  e.effects = {
    effect: {}
  }, function (e, t) {
    function i(e, t, i) {
      var s = d[t.type] || {};
      return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e);
    }

    function s(i) {
      var s = l(),
          n = s._rgba = [];
      return i = i.toLowerCase(), f(h, function (e, a) {
        var o,
            r = a.re.exec(i),
            h = r && a.parse(r),
            l = a.space || "rgba";
        return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t;
      }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i];
    }

    function n(e, t, i) {
      return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e;
    }

    var a,
        o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        h = [{
      re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      parse: function parse(e) {
        return [e[1], e[2], e[3], e[4]];
      }
    }, {
      re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      parse: function parse(e) {
        return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]];
      }
    }, {
      re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
      parse: function parse(e) {
        return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)];
      }
    }, {
      re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
      parse: function parse(e) {
        return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)];
      }
    }, {
      re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
      space: "hsla",
      parse: function parse(e) {
        return [e[1], e[2] / 100, e[3] / 100, e[4]];
      }
    }],
        l = e.Color = function (t, i, s, n) {
      return new e.Color.fn.parse(t, i, s, n);
    },
        u = {
      rgba: {
        props: {
          red: {
            idx: 0,
            type: "byte"
          },
          green: {
            idx: 1,
            type: "byte"
          },
          blue: {
            idx: 2,
            type: "byte"
          }
        }
      },
      hsla: {
        props: {
          hue: {
            idx: 0,
            type: "degrees"
          },
          saturation: {
            idx: 1,
            type: "percent"
          },
          lightness: {
            idx: 2,
            type: "percent"
          }
        }
      }
    },
        d = {
      "byte": {
        floor: !0,
        max: 255
      },
      percent: {
        max: 1
      },
      degrees: {
        mod: 360,
        floor: !0
      }
    },
        c = l.support = {},
        p = e("<p>")[0],
        f = e.each;

    p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (e, t) {
      t.cache = "_" + e, t.props.alpha = {
        idx: 3,
        type: "percent",
        def: 1
      };
    }), l.fn = e.extend(l.prototype, {
      parse: function parse(n, o, r, h) {
        if (n === t) return this._rgba = [null, null, null, null], this;
        (n.jquery || n.nodeType) && (n = e(n).css(o), o = t);
        var d = this,
            c = e.type(n),
            p = this._rgba = [];
        return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function (e, t) {
          p[t.idx] = i(n[t.idx], t);
        }), this) : "object" === c ? (n instanceof l ? f(u, function (e, t) {
          n[t.cache] && (d[t.cache] = n[t.cache].slice());
        }) : f(u, function (t, s) {
          var a = s.cache;
          f(s.props, function (e, t) {
            if (!d[a] && s.to) {
              if ("alpha" === e || null == n[e]) return;
              d[a] = s.to(d._rgba);
            }

            d[a][t.idx] = i(n[e], t, !0);
          }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a])));
        }), this) : t;
      },
      is: function is(e) {
        var i = l(e),
            s = !0,
            n = this;
        return f(u, function (e, a) {
          var o,
              r = i[a.cache];
          return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (e, i) {
            return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t;
          })), s;
        }), s;
      },
      _space: function _space() {
        var e = [],
            t = this;
        return f(u, function (i, s) {
          t[s.cache] && e.push(i);
        }), e.pop();
      },
      transition: function transition(e, t) {
        var s = l(e),
            n = s._space(),
            a = u[n],
            o = 0 === this.alpha() ? l("transparent") : this,
            r = o[a.cache] || a.to(o._rgba),
            h = r.slice();

        return s = s[a.cache], f(a.props, function (e, n) {
          var a = n.idx,
              o = r[a],
              l = s[a],
              u = d[n.type] || {};
          null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n)));
        }), this[n](h);
      },
      blend: function blend(t) {
        if (1 === this._rgba[3]) return this;

        var i = this._rgba.slice(),
            s = i.pop(),
            n = l(t)._rgba;

        return l(e.map(i, function (e, t) {
          return (1 - s) * n[t] + s * e;
        }));
      },
      toRgbaString: function toRgbaString() {
        var t = "rgba(",
            i = e.map(this._rgba, function (e, t) {
          return null == e ? t > 2 ? 1 : 0 : e;
        });
        return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")";
      },
      toHslaString: function toHslaString() {
        var t = "hsla(",
            i = e.map(this.hsla(), function (e, t) {
          return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e;
        });
        return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")";
      },
      toHexString: function toHexString(t) {
        var i = this._rgba.slice(),
            s = i.pop();

        return t && i.push(~~(255 * s)), "#" + e.map(i, function (e) {
          return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e;
        }).join("");
      },
      toString: function toString() {
        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
      }
    }), l.fn.parse.prototype = l.fn, u.hsla.to = function (e) {
      if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
      var t,
          i,
          s = e[0] / 255,
          n = e[1] / 255,
          a = e[2] / 255,
          o = e[3],
          r = Math.max(s, n, a),
          h = Math.min(s, n, a),
          l = r - h,
          u = r + h,
          d = .5 * u;
      return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o];
    }, u.hsla.from = function (e) {
      if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
      var t = e[0] / 360,
          i = e[1],
          s = e[2],
          a = e[3],
          o = .5 >= s ? s * (1 + i) : s + i - s * i,
          r = 2 * s - o;
      return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a];
    }, f(u, function (s, n) {
      var a = n.props,
          o = n.cache,
          h = n.to,
          u = n.from;
      l.fn[s] = function (s) {
        if (h && !this[o] && (this[o] = h(this._rgba)), s === t) return this[o].slice();
        var n,
            r = e.type(s),
            d = "array" === r || "object" === r ? s : arguments,
            c = this[o].slice();
        return f(a, function (e, t) {
          var s = d["object" === r ? e : t.idx];
          null == s && (s = c[t.idx]), c[t.idx] = i(s, t);
        }), u ? (n = l(u(c)), n[o] = c, n) : l(c);
      }, f(a, function (t, i) {
        l.fn[t] || (l.fn[t] = function (n) {
          var a,
              o = e.type(n),
              h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s,
              l = this[h](),
              u = l[i.idx];
          return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)));
        });
      });
    }), l.hook = function (t) {
      var i = t.split(" ");
      f(i, function (t, i) {
        e.cssHooks[i] = {
          set: function set(t, n) {
            var a,
                o,
                r = "";

            if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
              if (n = l(a || n), !c.rgba && 1 !== n._rgba[3]) {
                for (o = "backgroundColor" === i ? t.parentNode : t; ("" === r || "transparent" === r) && o && o.style;) {
                  try {
                    r = e.css(o, "backgroundColor"), o = o.parentNode;
                  } catch (h) {}
                }

                n = n.blend(r && "transparent" !== r ? r : "_default");
              }

              n = n.toRgbaString();
            }

            try {
              t.style[i] = n;
            } catch (h) {}
          }
        }, e.fx.step[i] = function (t) {
          t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos));
        };
      });
    }, l.hook(o), e.cssHooks.borderColor = {
      expand: function expand(e) {
        var t = {};
        return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
          t["border" + s + "Color"] = e;
        }), t;
      }
    }, a = e.Color.names = {
      aqua: "#00ffff",
      black: "#000000",
      blue: "#0000ff",
      fuchsia: "#ff00ff",
      gray: "#808080",
      green: "#008000",
      lime: "#00ff00",
      maroon: "#800000",
      navy: "#000080",
      olive: "#808000",
      purple: "#800080",
      red: "#ff0000",
      silver: "#c0c0c0",
      teal: "#008080",
      white: "#ffffff",
      yellow: "#ffff00",
      transparent: [null, null, null, 0],
      _default: "#ffffff"
    };
  }(b), function () {
    function t(t) {
      var i,
          s,
          n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
          a = {};
      if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;) {
        i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]);
      } else for (i in n) {
        "string" == typeof n[i] && (a[i] = n[i]);
      }
      return a;
    }

    function i(t, i) {
      var s,
          a,
          o = {};

      for (s in i) {
        a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a));
      }

      return o;
    }

    var s = ["add", "remove", "toggle"],
        n = {
      border: 1,
      borderBottom: 1,
      borderColor: 1,
      borderLeft: 1,
      borderRight: 1,
      borderTop: 1,
      borderWidth: 1,
      margin: 1,
      padding: 1
    };
    e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
      e.fx.step[i] = function (e) {
        ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (b.style(e.elem, i, e.end), e.setAttr = !0);
      };
    }), e.fn.addBack || (e.fn.addBack = function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }), e.effects.animateClass = function (n, a, o, r) {
      var h = e.speed(a, o, r);
      return this.queue(function () {
        var a,
            o = e(this),
            r = o.attr("class") || "",
            l = h.children ? o.find("*").addBack() : o;
        l = l.map(function () {
          var i = e(this);
          return {
            el: i,
            start: t(this)
          };
        }), a = function a() {
          e.each(s, function (e, t) {
            n[t] && o[t + "Class"](n[t]);
          });
        }, a(), l = l.map(function () {
          return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this;
        }), o.attr("class", r), l = l.map(function () {
          var t = this,
              i = e.Deferred(),
              s = e.extend({}, h, {
            queue: !1,
            complete: function complete() {
              i.resolve(t);
            }
          });
          return this.el.animate(this.diff, s), i.promise();
        }), e.when.apply(e, l.get()).done(function () {
          a(), e.each(arguments, function () {
            var t = this.el;
            e.each(this.diff, function (e) {
              t.css(e, "");
            });
          }), h.complete.call(o[0]);
        });
      });
    }, e.fn.extend({
      addClass: function (t) {
        return function (i, s, n, a) {
          return s ? e.effects.animateClass.call(this, {
            add: i
          }, s, n, a) : t.apply(this, arguments);
        };
      }(e.fn.addClass),
      removeClass: function (t) {
        return function (i, s, n, a) {
          return arguments.length > 1 ? e.effects.animateClass.call(this, {
            remove: i
          }, s, n, a) : t.apply(this, arguments);
        };
      }(e.fn.removeClass),
      toggleClass: function (t) {
        return function (i, s, n, a, o) {
          return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? {
            add: i
          } : {
            remove: i
          }, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
            toggle: i
          }, s, n, a);
        };
      }(e.fn.toggleClass),
      switchClass: function switchClass(t, i, s, n, a) {
        return e.effects.animateClass.call(this, {
          add: i,
          remove: t
        }, s, n, a);
      }
    });
  }(), function () {
    function t(t, i, s, n) {
      return e.isPlainObject(t) && (i = t, t = t.effect), t = {
        effect: t
      }, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t;
    }

    function i(t) {
      return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != _typeof(t) || t.effect ? !1 : !0 : !0;
    }

    e.extend(e.effects, {
      version: "1.11.4",
      save: function save(e, t) {
        for (var i = 0; t.length > i; i++) {
          null !== t[i] && e.data(y + t[i], e[0].style[t[i]]);
        }
      },
      restore: function restore(e, t) {
        var i, s;

        for (s = 0; t.length > s; s++) {
          null !== t[s] && (i = e.data(y + t[s]), void 0 === i && (i = ""), e.css(t[s], i));
        }
      },
      setMode: function setMode(e, t) {
        return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t;
      },
      getBaseline: function getBaseline(e, t) {
        var i, s;

        switch (e[0]) {
          case "top":
            i = 0;
            break;

          case "middle":
            i = .5;
            break;

          case "bottom":
            i = 1;
            break;

          default:
            i = e[0] / t.height;
        }

        switch (e[1]) {
          case "left":
            s = 0;
            break;

          case "center":
            s = .5;
            break;

          case "right":
            s = 1;
            break;

          default:
            s = e[1] / t.width;
        }

        return {
          x: s,
          y: i
        };
      },
      createWrapper: function createWrapper(t) {
        if (t.parent().is(".ui-effects-wrapper")) return t.parent();
        var i = {
          width: t.outerWidth(!0),
          height: t.outerHeight(!0),
          "float": t.css("float")
        },
            s = e("<div></div>").addClass("ui-effects-wrapper").css({
          fontSize: "100%",
          background: "transparent",
          border: "none",
          margin: 0,
          padding: 0
        }),
            n = {
          width: t.width(),
          height: t.height()
        },
            a = document.activeElement;

        try {
          a.id;
        } catch (o) {
          a = document.body;
        }

        return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({
          position: "relative"
        }), t.css({
          position: "relative"
        })) : (e.extend(i, {
          position: t.css("position"),
          zIndex: t.css("z-index")
        }), e.each(["top", "left", "bottom", "right"], function (e, s) {
          i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
        }), t.css({
          position: "relative",
          top: 0,
          left: 0,
          right: "auto",
          bottom: "auto"
        })), t.css(n), s.css(i).show();
      },
      removeWrapper: function removeWrapper(t) {
        var i = document.activeElement;
        return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t;
      },
      setTransition: function setTransition(t, i, s, n) {
        return n = n || {}, e.each(i, function (e, i) {
          var a = t.cssUnit(i);
          a[0] > 0 && (n[i] = a[0] * s + a[1]);
        }), n;
      }
    }), e.fn.extend({
      effect: function effect() {
        function i(t) {
          function i() {
            e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t();
          }

          var n = e(this),
              a = s.complete,
              r = s.mode;
          (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i);
        }

        var s = t.apply(this, arguments),
            n = s.mode,
            a = s.queue,
            o = e.effects.effect[s.effect];
        return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function () {
          s.complete && s.complete.call(this);
        }) : a === !1 ? this.each(i) : this.queue(a || "fx", i);
      },
      show: function (e) {
        return function (s) {
          if (i(s)) return e.apply(this, arguments);
          var n = t.apply(this, arguments);
          return n.mode = "show", this.effect.call(this, n);
        };
      }(e.fn.show),
      hide: function (e) {
        return function (s) {
          if (i(s)) return e.apply(this, arguments);
          var n = t.apply(this, arguments);
          return n.mode = "hide", this.effect.call(this, n);
        };
      }(e.fn.hide),
      toggle: function (e) {
        return function (s) {
          if (i(s) || "boolean" == typeof s) return e.apply(this, arguments);
          var n = t.apply(this, arguments);
          return n.mode = "toggle", this.effect.call(this, n);
        };
      }(e.fn.toggle),
      cssUnit: function cssUnit(t) {
        var i = this.css(t),
            s = [];
        return e.each(["em", "px", "%", "pt"], function (e, t) {
          i.indexOf(t) > 0 && (s = [parseFloat(i), t]);
        }), s;
      }
    });
  }(), function () {
    var t = {};
    e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
      t[i] = function (t) {
        return Math.pow(t, e + 2);
      };
    }), e.extend(t, {
      Sine: function Sine(e) {
        return 1 - Math.cos(e * Math.PI / 2);
      },
      Circ: function Circ(e) {
        return 1 - Math.sqrt(1 - e * e);
      },
      Elastic: function Elastic(e) {
        return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15);
      },
      Back: function Back(e) {
        return e * e * (3 * e - 2);
      },
      Bounce: function Bounce(e) {
        for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e;) {
          ;
        }

        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2);
      }
    }), e.each(t, function (t, i) {
      e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
        return 1 - i(1 - e);
      }, e.easing["easeInOut" + t] = function (e) {
        return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2;
      };
    });
  }(), e.effects, e.effects.effect.blind = function (t, i) {
    var s,
        n,
        a,
        o = e(this),
        r = /up|down|vertical/,
        h = /up|left|vertical|horizontal/,
        l = ["position", "top", "bottom", "left", "right", "height", "width"],
        u = e.effects.setMode(o, t.mode || "hide"),
        d = t.direction || "up",
        c = r.test(d),
        p = c ? "height" : "width",
        f = c ? "top" : "left",
        m = h.test(d),
        g = {},
        v = "show" === u;
    o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), l) : e.effects.save(o, l), o.show(), s = e.effects.createWrapper(o).css({
      overflow: "hidden"
    }), n = s[p](), a = parseFloat(s.css(f)) || 0, g[p] = v ? n : 0, m || (o.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({
      position: "absolute"
    }), g[f] = v ? a : n + a), v && (s.css(p, 0), m || s.css(f, a + n)), s.animate(g, {
      duration: t.duration,
      easing: t.easing,
      queue: !1,
      complete: function complete() {
        "hide" === u && o.hide(), e.effects.restore(o, l), e.effects.removeWrapper(o), i();
      }
    });
  }, e.effects.effect.bounce = function (t, i) {
    var s,
        n,
        a,
        o = e(this),
        r = ["position", "top", "bottom", "left", "right", "height", "width"],
        h = e.effects.setMode(o, t.mode || "effect"),
        l = "hide" === h,
        u = "show" === h,
        d = t.direction || "up",
        c = t.distance,
        p = t.times || 5,
        f = 2 * p + (u || l ? 1 : 0),
        m = t.duration / f,
        g = t.easing,
        v = "up" === d || "down" === d ? "top" : "left",
        y = "up" === d || "left" === d,
        b = o.queue(),
        _ = b.length;

    for ((u || l) && r.push("opacity"), e.effects.save(o, r), o.show(), e.effects.createWrapper(o), c || (c = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (a = {
      opacity: 1
    }, a[v] = 0, o.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(a, m, g)), l && (c /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) {
      n = {}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g).animate(a, m, g), c = l ? 2 * c : c / 2;
    }

    l && (n = {
      opacity: 0
    }, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g)), o.queue(function () {
      l && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i();
    }), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))), o.dequeue();
  }, e.effects.effect.clip = function (t, i) {
    var s,
        n,
        a,
        o = e(this),
        r = ["position", "top", "bottom", "left", "right", "height", "width"],
        h = e.effects.setMode(o, t.mode || "hide"),
        l = "show" === h,
        u = t.direction || "vertical",
        d = "vertical" === u,
        c = d ? "height" : "width",
        p = d ? "top" : "left",
        f = {};
    e.effects.save(o, r), o.show(), s = e.effects.createWrapper(o).css({
      overflow: "hidden"
    }), n = "IMG" === o[0].tagName ? s : o, a = n[c](), l && (n.css(c, 0), n.css(p, a / 2)), f[c] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: function complete() {
        l || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i();
      }
    });
  }, e.effects.effect.drop = function (t, i) {
    var s,
        n = e(this),
        a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
        o = e.effects.setMode(n, t.mode || "hide"),
        r = "show" === o,
        h = t.direction || "left",
        l = "up" === h || "down" === h ? "top" : "left",
        u = "up" === h || "left" === h ? "pos" : "neg",
        d = {
      opacity: r ? 1 : 0
    };
    e.effects.save(n, a), n.show(), e.effects.createWrapper(n), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === u ? -s : s), d[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, n.animate(d, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: function complete() {
        "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i();
      }
    });
  }, e.effects.effect.explode = function (t, i) {
    function s() {
      b.push(this), b.length === d * c && n();
    }

    function n() {
      p.css({
        visibility: "visible"
      }), e(b).remove(), m || p.hide(), i();
    }

    var a,
        o,
        r,
        h,
        l,
        u,
        d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
        c = d,
        p = e(this),
        f = e.effects.setMode(p, t.mode || "hide"),
        m = "show" === f,
        g = p.show().css("visibility", "hidden").offset(),
        v = Math.ceil(p.outerWidth() / c),
        y = Math.ceil(p.outerHeight() / d),
        b = [];

    for (a = 0; d > a; a++) {
      for (h = g.top + a * y, u = a - (d - 1) / 2, o = 0; c > o; o++) {
        r = g.left + o * v, l = o - (c - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
          position: "absolute",
          visibility: "visible",
          left: -o * v,
          top: -a * y
        }).parent().addClass("ui-effects-explode").css({
          position: "absolute",
          overflow: "hidden",
          width: v,
          height: y,
          left: r + (m ? l * v : 0),
          top: h + (m ? u * y : 0),
          opacity: m ? 0 : 1
        }).animate({
          left: r + (m ? 0 : l * v),
          top: h + (m ? 0 : u * y),
          opacity: m ? 1 : 0
        }, t.duration || 500, t.easing, s);
      }
    }
  }, e.effects.effect.fade = function (t, i) {
    var s = e(this),
        n = e.effects.setMode(s, t.mode || "toggle");
    s.animate({
      opacity: n
    }, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: i
    });
  }, e.effects.effect.fold = function (t, i) {
    var s,
        n,
        a = e(this),
        o = ["position", "top", "bottom", "left", "right", "height", "width"],
        r = e.effects.setMode(a, t.mode || "hide"),
        h = "show" === r,
        l = "hide" === r,
        u = t.size || 15,
        d = /([0-9]+)%/.exec(u),
        c = !!t.horizFirst,
        p = h !== c,
        f = p ? ["width", "height"] : ["height", "width"],
        m = t.duration / 2,
        g = {},
        v = {};
    e.effects.save(a, o), a.show(), s = e.effects.createWrapper(a).css({
      overflow: "hidden"
    }), n = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (u = parseInt(d[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(c ? {
      height: 0,
      width: u
    } : {
      height: u,
      width: 0
    }), g[f[0]] = h ? n[0] : u, v[f[1]] = h ? n[1] : 0, s.animate(g, m, t.easing).animate(v, m, t.easing, function () {
      l && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i();
    });
  }, e.effects.effect.highlight = function (t, i) {
    var s = e(this),
        n = ["backgroundImage", "backgroundColor", "opacity"],
        a = e.effects.setMode(s, t.mode || "show"),
        o = {
      backgroundColor: s.css("backgroundColor")
    };
    "hide" === a && (o.opacity = 0), e.effects.save(s, n), s.show().css({
      backgroundImage: "none",
      backgroundColor: t.color || "#ffff99"
    }).animate(o, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: function complete() {
        "hide" === a && s.hide(), e.effects.restore(s, n), i();
      }
    });
  }, e.effects.effect.size = function (t, i) {
    var s,
        n,
        a,
        o = e(this),
        r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
        h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
        l = ["width", "height", "overflow"],
        u = ["fontSize"],
        d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
        c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
        p = e.effects.setMode(o, t.mode || "effect"),
        f = t.restore || "effect" !== p,
        m = t.scale || "both",
        g = t.origin || ["middle", "center"],
        v = o.css("position"),
        y = f ? r : h,
        b = {
      height: 0,
      width: 0,
      outerHeight: 0,
      outerWidth: 0
    };
    "show" === p && o.show(), s = {
      height: o.height(),
      width: o.width(),
      outerHeight: o.outerHeight(),
      outerWidth: o.outerWidth()
    }, "toggle" === t.mode && "show" === p ? (o.from = t.to || b, o.to = t.from || s) : (o.from = t.from || ("show" === p ? b : s), o.to = t.to || ("hide" === p ? b : s)), a = {
      from: {
        y: o.from.height / s.height,
        x: o.from.width / s.width
      },
      to: {
        y: o.to.height / s.height,
        x: o.to.width / s.width
      }
    }, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (y = y.concat(d), o.from = e.effects.setTransition(o, d, a.from.y, o.from), o.to = e.effects.setTransition(o, d, a.to.y, o.to)), a.from.x !== a.to.x && (y = y.concat(c), o.from = e.effects.setTransition(o, c, a.from.x, o.from), o.to = e.effects.setTransition(o, c, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (y = y.concat(u).concat(l), o.from = e.effects.setTransition(o, u, a.from.y, o.from), o.to = e.effects.setTransition(o, u, a.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = e.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(u), c = c.concat(["marginLeft", "marginRight"]), l = r.concat(d).concat(c), o.find("*[width]").each(function () {
      var i = e(this),
          s = {
        height: i.height(),
        width: i.width(),
        outerHeight: i.outerHeight(),
        outerWidth: i.outerWidth()
      };
      f && e.effects.save(i, l), i.from = {
        height: s.height * a.from.y,
        width: s.width * a.from.x,
        outerHeight: s.outerHeight * a.from.y,
        outerWidth: s.outerWidth * a.from.x
      }, i.to = {
        height: s.height * a.to.y,
        width: s.width * a.to.x,
        outerHeight: s.height * a.to.y,
        outerWidth: s.width * a.to.x
      }, a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, d, a.from.y, i.from), i.to = e.effects.setTransition(i, d, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, c, a.from.x, i.from), i.to = e.effects.setTransition(i, c, a.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function () {
        f && e.effects.restore(i, l);
      });
    })), o.animate(o.to, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: function complete() {
        0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, y), f || ("static" === v ? o.css({
          position: "relative",
          top: o.to.top,
          left: o.to.left
        }) : e.each(["top", "left"], function (e, t) {
          o.css(t, function (t, i) {
            var s = parseInt(i, 10),
                n = e ? o.to.left : o.to.top;
            return "auto" === i ? n + "px" : s + n + "px";
          });
        })), e.effects.removeWrapper(o), i();
      }
    });
  }, e.effects.effect.scale = function (t, i) {
    var s = e(this),
        n = e.extend(!0, {}, t),
        a = e.effects.setMode(s, t.mode || "effect"),
        o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100),
        r = t.direction || "both",
        h = t.origin,
        l = {
      height: s.height(),
      width: s.width(),
      outerHeight: s.outerHeight(),
      outerWidth: s.outerWidth()
    },
        u = {
      y: "horizontal" !== r ? o / 100 : 1,
      x: "vertical" !== r ? o / 100 : 1
    };
    n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === a ? {
      height: 0,
      width: 0,
      outerHeight: 0,
      outerWidth: 0
    } : l), n.to = {
      height: l.height * u.y,
      width: l.width * u.x,
      outerHeight: l.outerHeight * u.y,
      outerWidth: l.outerWidth * u.x
    }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n);
  }, e.effects.effect.puff = function (t, i) {
    var s = e(this),
        n = e.effects.setMode(s, t.mode || "hide"),
        a = "hide" === n,
        o = parseInt(t.percent, 10) || 150,
        r = o / 100,
        h = {
      height: s.height(),
      width: s.width(),
      outerHeight: s.outerHeight(),
      outerWidth: s.outerWidth()
    };
    e.extend(t, {
      effect: "scale",
      queue: !1,
      fade: !0,
      mode: n,
      complete: i,
      percent: a ? o : 100,
      from: a ? h : {
        height: h.height * r,
        width: h.width * r,
        outerHeight: h.outerHeight * r,
        outerWidth: h.outerWidth * r
      }
    }), s.effect(t);
  }, e.effects.effect.pulsate = function (t, i) {
    var s,
        n = e(this),
        a = e.effects.setMode(n, t.mode || "show"),
        o = "show" === a,
        r = "hide" === a,
        h = o || "hide" === a,
        l = 2 * (t.times || 5) + (h ? 1 : 0),
        u = t.duration / l,
        d = 0,
        c = n.queue(),
        p = c.length;

    for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), d = 1), s = 1; l > s; s++) {
      n.animate({
        opacity: d
      }, u, t.easing), d = 1 - d;
    }

    n.animate({
      opacity: d
    }, u, t.easing), n.queue(function () {
      r && n.hide(), i();
    }), p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))), n.dequeue();
  }, e.effects.effect.shake = function (t, i) {
    var s,
        n = e(this),
        a = ["position", "top", "bottom", "left", "right", "height", "width"],
        o = e.effects.setMode(n, t.mode || "effect"),
        r = t.direction || "left",
        h = t.distance || 20,
        l = t.times || 3,
        u = 2 * l + 1,
        d = Math.round(t.duration / u),
        c = "up" === r || "down" === r ? "top" : "left",
        p = "up" === r || "left" === r,
        f = {},
        m = {},
        g = {},
        v = n.queue(),
        y = v.length;

    for (e.effects.save(n, a), n.show(), e.effects.createWrapper(n), f[c] = (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, n.animate(f, d, t.easing), s = 1; l > s; s++) {
      n.animate(m, d, t.easing).animate(g, d, t.easing);
    }

    n.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function () {
      "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i();
    }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), n.dequeue();
  }, e.effects.effect.slide = function (t, i) {
    var s,
        n = e(this),
        a = ["position", "top", "bottom", "left", "right", "width", "height"],
        o = e.effects.setMode(n, t.mode || "show"),
        r = "show" === o,
        h = t.direction || "left",
        l = "up" === h || "down" === h ? "top" : "left",
        u = "up" === h || "left" === h,
        d = {};
    e.effects.save(n, a), n.show(), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(n).css({
      overflow: "hidden"
    }), r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s), d[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s, n.animate(d, {
      queue: !1,
      duration: t.duration,
      easing: t.easing,
      complete: function complete() {
        "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i();
      }
    });
  }, e.effects.effect.transfer = function (t, i) {
    var s = e(this),
        n = e(t.to),
        a = "fixed" === n.css("position"),
        o = e("body"),
        r = a ? o.scrollTop() : 0,
        h = a ? o.scrollLeft() : 0,
        l = n.offset(),
        u = {
      top: l.top - r,
      left: l.left - h,
      height: n.innerHeight(),
      width: n.innerWidth()
    },
        d = s.offset(),
        c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
      top: d.top - r,
      left: d.left - h,
      height: s.innerHeight(),
      width: s.innerWidth(),
      position: a ? "fixed" : "absolute"
    }).animate(u, t.duration, t.easing, function () {
      c.remove(), i();
    });
  };
});

/***/ }),

/***/ "./public/js/revolution-slider/js/jquery.themepunch.revolution.min.js":
/*!****************************************************************************!*\
  !*** ./public/js/revolution-slider/js/jquery.themepunch.revolution.min.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**************************************************************************
 * jquery.themepunch.revolution.js - jQuery Plugin for Revolution Slider
 * @version: 5.2.4 (25.03.2016)
 * @requires jQuery v1.7 or later (tested on 1.9)
 * @author ThemePunch
**************************************************************************/
!function (jQuery, undefined) {
  "use strict";

  jQuery.fn.extend({
    revolution: function revolution(e) {
      var t = {
        delay: 9e3,
        responsiveLevels: 4064,
        visibilityLevels: [2048, 1024, 778, 480],
        gridwidth: 960,
        gridheight: 500,
        minHeight: 0,
        autoHeight: "off",
        sliderType: "standard",
        sliderLayout: "auto",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "0",
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLimit: 0,
        hideSliderAtLimit: 0,
        disableProgressBar: "off",
        stopAtSlide: -1,
        stopAfterLoops: -1,
        shadow: 0,
        dottedOverlay: "none",
        startDelay: 0,
        lazyType: "smart",
        spinner: "spinner0",
        shuffle: "off",
        viewPort: {
          enable: !1,
          outof: "wait",
          visible_area: "60%"
        },
        fallbacks: {
          isJoomla: !1,
          panZoomDisableOnMobile: "off",
          simplifyAll: "on",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: !0
        },
        parallax: {
          type: "off",
          levels: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
          origo: "enterpoint",
          speed: 400,
          bgparallax: "off",
          opacity: "on",
          disable_onmobile: "off",
          ddd_shadow: "on",
          ddd_bgfreeze: "off",
          ddd_overflow: "visible",
          ddd_layer_overflow: "visible",
          ddd_z_correction: 65,
          ddd_path: "mouse"
        },
        carousel: {
          horizontal_align: "center",
          vertical_align: "center",
          infinity: "on",
          space: 0,
          maxVisibleItems: 3,
          stretch: "off",
          fadeout: "on",
          maxRotation: 0,
          minScale: 0,
          vary_fade: "off",
          vary_rotation: "on",
          vary_scale: "off",
          border_radius: "0px",
          padding_top: 0,
          padding_bottom: 0
        },
        navigation: {
          keyboardNavigation: "on",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          onHoverStop: "on",
          touch: {
            touchenabled: "off",
            swipe_treshold: 75,
            swipe_min_touches: 1,
            drag_block_vertical: !1,
            swipe_direction: "horizontal"
          },
          arrows: {
            style: "",
            enable: !1,
            hide_onmobile: !1,
            hide_onleave: !0,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            tmp: "",
            rtl: !1,
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 20,
              v_offset: 0,
              container: "slider"
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 20,
              v_offset: 0,
              container: "slider"
            }
          },
          bullets: {
            container: "slider",
            rtl: !1,
            style: "",
            enable: !1,
            hide_onmobile: !1,
            hide_onleave: !0,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            direction: "horizontal",
            h_align: "left",
            v_align: "center",
            space: 0,
            h_offset: 20,
            v_offset: 0,
            tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
          },
          thumbnails: {
            container: "slider",
            rtl: !1,
            style: "",
            enable: !1,
            width: 100,
            height: 50,
            min_width: 100,
            wrapper_padding: 2,
            wrapper_color: "#f5f5f5",
            wrapper_opacity: 1,
            tmp: '<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',
            visibleAmount: 5,
            hide_onmobile: !1,
            hide_onleave: !0,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            direction: "horizontal",
            span: !1,
            position: "inner",
            space: 2,
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0
          },
          tabs: {
            container: "slider",
            rtl: !1,
            style: "",
            enable: !1,
            width: 100,
            min_width: 100,
            height: 50,
            wrapper_padding: 10,
            wrapper_color: "#f5f5f5",
            wrapper_opacity: 1,
            tmp: '<span class="tp-tab-image"></span>',
            visibleAmount: 5,
            hide_onmobile: !1,
            hide_onleave: !0,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            hide_under: 0,
            hide_over: 9999,
            direction: "horizontal",
            span: !1,
            space: 0,
            position: "inner",
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0
          }
        },
        extensions: "extensions/",
        extensions_suffix: ".min.js",
        debugMode: !1
      };
      return e = jQuery.extend(!0, {}, t, e), this.each(function () {
        var t = jQuery(this);
        "hero" == e.sliderType && t.find(">ul>li").each(function (e) {
          e > 0 && jQuery(this).remove();
        }), e.jsFileLocation = e.jsFileLocation || getScriptLocation("themepunch.revolution.min.js"), e.jsFileLocation = e.jsFileLocation + e.extensions, e.scriptsneeded = getNeededScripts(e, t), e.curWinRange = 0, e.rtl = !0, e.navigation != undefined && e.navigation.touch != undefined && (e.navigation.touch.swipe_min_touches = e.navigation.touch.swipe_min_touches > 5 ? 1 : e.navigation.touch.swipe_min_touches), jQuery(this).on("scriptsloaded", function () {
          return e.modulesfailing ? (t.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.' + e.errorm + "</div>").show(), !1) : (_R.migration != undefined && (e = _R.migration(t, e)), punchgs.force3D = !0, "on" !== e.simplifyAll && punchgs.TweenLite.lagSmoothing(1e3, 16), prepareOptions(t, e), void initSlider(t, e));
        }), t.data("opt", e), waitForScripts(t, e);
      });
    },
    revremoveslide: function revremoveslide(e) {
      return this.each(function () {
        var t = jQuery(this);

        if (t != undefined && t.length > 0 && jQuery("body").find("#" + t.attr("id")).length > 0) {
          var i = t.parent().find(".tp-bannertimer"),
              n = i.data("opt");

          if (n && n.li.length > 0 && (e > 0 || e <= n.li.length)) {
            var a = jQuery(n.li[e]),
                r = a.data("index"),
                o = !1;
            n.slideamount = n.slideamount - 1, removeNavWithLiref(".tp-bullet", r, n), removeNavWithLiref(".tp-tab", r, n), removeNavWithLiref(".tp-thumb", r, n), a.hasClass("active-revslide") && (o = !0), a.remove(), n.li = removeArray(n.li, e), n.carousel && n.carousel.slides && (n.carousel.slides = removeArray(n.carousel.slides, e)), n.thumbs = removeArray(n.thumbs, e), _R.updateNavIndexes && _R.updateNavIndexes(n), o && t.revnext();
          }
        }
      });
    },
    revaddcallback: function revaddcallback(e) {
      return this.each(function () {
        var t = jQuery(this);

        if (t != undefined && t.length > 0 && jQuery("body").find("#" + t.attr("id")).length > 0) {
          var i = t.parent().find(".tp-bannertimer"),
              n = i.data("opt");
          n.callBackArray === undefined && (n.callBackArray = new Array()), n.callBackArray.push(e);
        }
      });
    },
    revgetparallaxproc: function revgetparallaxproc() {
      var e = jQuery(this);

      if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
        var t = e.parent().find(".tp-bannertimer"),
            i = t.data("opt");
        return i.scrollproc;
      }
    },
    revdebugmode: function revdebugmode() {
      return this.each(function () {
        var e = jQuery(this);

        if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
          var t = e.parent().find(".tp-bannertimer"),
              i = t.data("opt");
          i.debugMode = !0, containerResized(e, i);
        }
      });
    },
    revscroll: function revscroll(e) {
      return this.each(function () {
        var t = jQuery(this);
        t != undefined && t.length > 0 && jQuery("body").find("#" + t.attr("id")).length > 0 && jQuery("body,html").animate({
          scrollTop: t.offset().top + t.height() - e + "px"
        }, {
          duration: 400
        });
      });
    },
    revredraw: function revredraw(e) {
      return this.each(function () {
        var e = jQuery(this);

        if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
          var t = e.parent().find(".tp-bannertimer"),
              i = t.data("opt");
          containerResized(e, i);
        }
      });
    },
    revkill: function revkill(e) {
      var t = this,
          i = jQuery(this);

      if (punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements), _R.endMoveCaption && a.endtimeouts && a.endtimeouts.length > 0 && jQuery.each(a.endtimeouts, function (e, t) {
        clearTimeout(t);
      }), i != undefined && i.length > 0 && jQuery("body").find("#" + i.attr("id")).length > 0) {
        i.data("conthover", 1), i.data("conthover-changed", 1), i.trigger("revolution.slide.onpause");
        var n = i.parent().find(".tp-bannertimer"),
            a = n.data("opt");
        a.tonpause = !0, i.trigger("stoptimer"), punchgs.TweenLite.killTweensOf(i.find("*"), !1), punchgs.TweenLite.killTweensOf(i, !1), i.unbind("hover, mouseover, mouseenter,mouseleave, resize");
        var r = "resize.revslider-" + i.attr("id");
        jQuery(window).off(r), i.find("*").each(function () {
          var e = jQuery(this);
          e.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"), e.off("on, hover, mouseenter,mouseleave,mouseover, resize"), e.data("mySplitText", null), e.data("ctl", null), e.data("tween") != undefined && e.data("tween").kill(), e.data("kenburn") != undefined && e.data("kenburn").kill(), e.data("timeline_out") != undefined && e.data("timeline_out").kill(), e.data("timeline") != undefined && e.data("timeline").kill(), e.remove(), e.empty(), e = null;
        }), punchgs.TweenLite.killTweensOf(i.find("*"), !1), punchgs.TweenLite.killTweensOf(i, !1), n.remove();

        try {
          i.closest(".forcefullwidth_wrapper_tp_banner").remove();
        } catch (o) {}

        try {
          i.closest(".rev_slider_wrapper").remove();
        } catch (o) {}

        try {
          i.remove();
        } catch (o) {}

        return i.empty(), i.html(), i = null, a = null, delete t.c, delete t.opt, !0;
      }

      return !1;
    },
    revpause: function revpause() {
      return this.each(function () {
        var e = jQuery(this);

        if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
          e.data("conthover", 1), e.data("conthover-changed", 1), e.trigger("revolution.slide.onpause");
          var t = e.parent().find(".tp-bannertimer"),
              i = t.data("opt");
          i.tonpause = !0, e.trigger("stoptimer");
        }
      });
    },
    revresume: function revresume() {
      return this.each(function () {
        var e = jQuery(this);

        if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
          e.data("conthover", 0), e.data("conthover-changed", 1), e.trigger("revolution.slide.onresume");
          var t = e.parent().find(".tp-bannertimer"),
              i = t.data("opt");
          i.tonpause = !1, e.trigger("starttimer");
        }
      });
    },
    revstart: function revstart() {
      var e = jQuery(this);
      return e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0 && e.data("opt") ? e.data("opt").sliderisrunning ? (console.log("Slider Is Running Already"), !1) : (runSlider(e, e.data("opt")), !0) : void 0;
    },
    revnext: function revnext() {
      return this.each(function () {
        var e = jQuery(this);

        if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
          var t = e.parent().find(".tp-bannertimer"),
              i = t.data("opt");

          _R.callingNewSlide(i, e, 1);
        }
      });
    },
    revprev: function revprev() {
      return this.each(function () {
        var e = jQuery(this);

        if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
          var t = e.parent().find(".tp-bannertimer"),
              i = t.data("opt");

          _R.callingNewSlide(i, e, -1);
        }
      });
    },
    revmaxslide: function revmaxslide() {
      return jQuery(this).find(".tp-revslider-mainul >li").length;
    },
    revcurrentslide: function revcurrentslide() {
      var e = jQuery(this);

      if (e != undefined && e.length > 0 && jQuery("body").find("#" + e.attr("id")).length > 0) {
        var t = e.parent().find(".tp-bannertimer"),
            i = t.data("opt");
        return parseInt(i.act, 0) + 1;
      }
    },
    revlastslide: function revlastslide() {
      return jQuery(this).find(".tp-revslider-mainul >li").length;
    },
    revshowslide: function revshowslide(e) {
      return this.each(function () {
        var t = jQuery(this);

        if (t != undefined && t.length > 0 && jQuery("body").find("#" + t.attr("id")).length > 0) {
          var i = t.parent().find(".tp-bannertimer"),
              n = i.data("opt");

          _R.callingNewSlide(n, t, "to" + (e - 1));
        }
      });
    },
    revcallslidewithid: function revcallslidewithid(e) {
      return this.each(function () {
        var t = jQuery(this);

        if (t != undefined && t.length > 0 && jQuery("body").find("#" + t.attr("id")).length > 0) {
          var i = t.parent().find(".tp-bannertimer"),
              n = i.data("opt");

          _R.callingNewSlide(n, t, e);
        }
      });
    }
  });
  var _R = jQuery.fn.revolution;
  jQuery.extend(!0, _R, {
    simp: function simp(e, t, i) {
      var n = Math.abs(e) - Math.floor(Math.abs(e / t)) * t;
      return i ? n : 0 > e ? -1 * n : n;
    },
    iOSVersion: function iOSVersion() {
      var e = !1;
      return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) ? navigator.userAgent.match(/OS 4_\d like Mac OS X/i) && (e = !0) : e = !1, e;
    },
    isIE: function isIE(e, t) {
      var i = jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));
      i.html("<!--[if " + (t || "") + " IE " + (e || "") + "]><a>&nbsp;</a><![endif]-->");
      var n = i.find("a").length;
      return i.remove(), n;
    },
    is_mobile: function is_mobile() {
      var e = ["android", "webos", "iphone", "ipad", "blackberry", "Android", "webos",, "iPod", "iPhone", "iPad", "Blackberry", "BlackBerry"],
          t = !1;

      for (var i in e) {
        navigator.userAgent.split(e[i]).length > 1 && (t = !0);
      }

      return t;
    },
    callBackHandling: function callBackHandling(e, t, i) {
      try {
        e.callBackArray && jQuery.each(e.callBackArray, function (e, n) {
          n && n.inmodule && n.inmodule === t && n.atposition && n.atposition === i && n.callback && n.callback.call();
        });
      } catch (n) {
        console.log("Call Back Failed");
      }
    },
    get_browser: function get_browser() {
      var e,
          t = navigator.appName,
          i = navigator.userAgent,
          n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      return n && null != (e = i.match(/version\/([\.\d]+)/i)) && (n[2] = e[1]), n = n ? [n[1], n[2]] : [t, navigator.appVersion, "-?"], n[0];
    },
    get_browser_version: function get_browser_version() {
      var e,
          t = navigator.appName,
          i = navigator.userAgent,
          n = i.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      return n && null != (e = i.match(/version\/([\.\d]+)/i)) && (n[2] = e[1]), n = n ? [n[1], n[2]] : [t, navigator.appVersion, "-?"], n[1];
    },
    getHorizontalOffset: function getHorizontalOffset(e, t) {
      var i = gWiderOut(e, ".outer-left"),
          n = gWiderOut(e, ".outer-right");

      switch (t) {
        case "left":
          return i;

        case "right":
          return n;

        case "both":
          return i + n;
      }
    },
    callingNewSlide: function callingNewSlide(e, t, i) {
      var n = t.find(".next-revslide").length > 0 ? t.find(".next-revslide").index() : t.find(".processing-revslide").length > 0 ? t.find(".processing-revslide").index() : t.find(".active-revslide").index(),
          a = 0;
      t.find(".next-revslide").removeClass("next-revslide"), t.find(".active-revslide").hasClass("tp-invisible-slide") && (n = e.last_shown_slide), i && jQuery.isNumeric(i) || i.match(/to/g) ? (1 === i || -1 === i ? (a = n + i, a = 0 > a ? e.slideamount - 1 : a >= e.slideamount ? 0 : a) : (i = jQuery.isNumeric(i) ? i : parseInt(i.split("to")[1], 0), a = 0 > i ? 0 : i > e.slideamount - 1 ? e.slideamount - 1 : i), t.find(".tp-revslider-slidesli:eq(" + a + ")").addClass("next-revslide")) : i && t.find(".tp-revslider-slidesli").each(function () {
        var e = jQuery(this);
        e.data("index") === i && e.addClass("next-revslide");
      }), a = t.find(".next-revslide").index(), t.trigger("revolution.nextslide.waiting"), a !== n && -1 != a ? swapSlide(t, e) : t.find(".next-revslide").removeClass("next-revslide");
    },
    slotSize: function slotSize(e, t) {
      t.slotw = Math.ceil(t.width / t.slots), "fullscreen" == t.sliderLayout ? t.sloth = Math.ceil(jQuery(window).height() / t.slots) : t.sloth = Math.ceil(t.height / t.slots), "on" == t.autoHeight && e !== undefined && "" !== e && (t.sloth = Math.ceil(e.height() / t.slots));
    },
    setSize: function setSize(e) {
      var t = (e.top_outer || 0) + (e.bottom_outer || 0),
          i = parseInt(e.carousel.padding_top || 0, 0),
          n = parseInt(e.carousel.padding_bottom || 0, 0),
          a = e.gridheight[e.curWinRange];

      if (e.paddings = e.paddings === undefined ? {
        top: parseInt(e.c.parent().css("paddingTop"), 0) || 0,
        bottom: parseInt(e.c.parent().css("paddingBottom"), 0) || 0
      } : e.paddings, a = a < e.minHeight ? e.minHeight : a, "fullwidth" == e.sliderLayout && "off" == e.autoHeight && punchgs.TweenLite.set(e.c, {
        maxHeight: a + "px"
      }), e.c.css({
        marginTop: i,
        marginBottom: n
      }), e.width = e.ul.width(), e.height = e.ul.height(), setScale(e), e.height = Math.round(e.gridheight[e.curWinRange] * (e.width / e.gridwidth[e.curWinRange])), e.height > e.gridheight[e.curWinRange] && "on" != e.autoHeight && (e.height = e.gridheight[e.curWinRange]), "fullscreen" == e.sliderLayout || e.infullscreenmode) {
        e.height = e.bw * e.gridheight[e.curWinRange];
        var r = (e.c.parent().width(), jQuery(window).height());

        if (e.fullScreenOffsetContainer != undefined) {
          try {
            var o = e.fullScreenOffsetContainer.split(",");
            o && jQuery.each(o, function (e, t) {
              r = jQuery(t).length > 0 ? r - jQuery(t).outerHeight(!0) : r;
            });
          } catch (s) {}

          try {
            e.fullScreenOffset.split("%").length > 1 && e.fullScreenOffset != undefined && e.fullScreenOffset.length > 0 ? r -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : e.fullScreenOffset != undefined && e.fullScreenOffset.length > 0 && (r -= parseInt(e.fullScreenOffset, 0));
          } catch (s) {}
        }

        r = r < e.minHeight ? e.minHeight : r, r -= t, e.c.parent().height(r), e.c.closest(".rev_slider_wrapper").height(r), e.c.css({
          height: "100%"
        }), e.height = r, e.minHeight != undefined && e.height < e.minHeight && (e.height = e.minHeight);
      } else e.minHeight != undefined && e.height < e.minHeight && (e.height = e.minHeight), e.c.height(e.height);

      var d = {
        height: i + n + t + e.height + e.paddings.top + e.paddings.bottom
      };
      e.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(d), e.c.closest(".rev_slider_wrapper").css(d), setScale(e);
    },
    enterInViewPort: function enterInViewPort(e) {
      e.waitForCountDown && (countDown(e.c, e), e.waitForCountDown = !1), e.waitForFirstSlide && (swapSlide(e.c, e), e.waitForFirstSlide = !1), ("playing" == e.sliderlaststatus || e.sliderlaststatus == undefined) && e.c.trigger("starttimer"), e.lastplayedvideos != undefined && e.lastplayedvideos.length > 0 && jQuery.each(e.lastplayedvideos, function (t, i) {
        _R.playVideo(i, e);
      });
    },
    leaveViewPort: function leaveViewPort(e) {
      e.sliderlaststatus = e.sliderstatus, e.c.trigger("stoptimer"), e.playingvideos != undefined && e.playingvideos.length > 0 && (e.lastplayedvideos = jQuery.extend(!0, [], e.playingvideos), e.playingvideos && jQuery.each(e.playingvideos, function (t, i) {
        _R.stopVideo && _R.stopVideo(i, e);
      }));
    },
    unToggleState: function unToggleState(e) {
      e != undefined && e.length > 0 && jQuery.each(e, function (e, t) {
        t.removeClass("rs-toggle-content-active");
      });
    },
    toggleState: function toggleState(e) {
      e != undefined && e.length > 0 && jQuery.each(e, function (e, t) {
        t.addClass("rs-toggle-content-active");
      });
    },
    lastToggleState: function lastToggleState(e) {
      var t = 0;
      return e != undefined && e.length > 0 && jQuery.each(e, function (e, i) {
        t = i.hasClass("rs-toggle-content-active");
      }), t;
    }
  });

  var _ISM = _R.is_mobile(),
      removeArray = function removeArray(e, t) {
    var i = [];
    return jQuery.each(e, function (e, n) {
      e != t && i.push(n);
    }), i;
  },
      removeNavWithLiref = function removeNavWithLiref(e, t, i) {
    i.c.find(e).each(function () {
      var e = jQuery(this);
      e.data("liref") === t && e.remove();
    });
  },
      lAjax = function lAjax(e, t) {
    return jQuery("body").data(e) ? !1 : t.filesystem ? (t.errorm === undefined && (t.errorm = "<br>Local Filesystem Detected !<br>Put this to your header:"), console.warn("Local Filesystem detected !"), t.errorm = t.errorm + '<br>&lt;script type="text/javascript" src="' + t.jsFileLocation + e + t.extensions_suffix + '"&gt;&lt;/script&gt;', console.warn(t.jsFileLocation + e + t.extensions_suffix + " could not be loaded !"), console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."), console.log(" "), t.modulesfailing = !0, !1) : (jQuery.ajax({
      url: t.jsFileLocation + e + t.extensions_suffix,
      dataType: "script",
      cache: !0,
      error: function error(i) {
        console.warn("Slider Revolution 5.0 Error !"), console.error("Failure at Loading:" + e + t.extensions_suffix + " on Path:" + t.jsFileLocation), console.info(i);
      }
    }), void jQuery("body").data(e, !0));
  },
      getNeededScripts = function getNeededScripts(e, t) {
    var i = new Object(),
        n = e.navigation;
    return i.kenburns = !1, i.parallax = !1, i.carousel = !1, i.navigation = !1, i.videos = !1, i.actions = !1, i.layeranim = !1, i.migration = !1, t.data("version") && t.data("version").toString().match(/5./gi) ? (t.find("img").each(function () {
      "on" == jQuery(this).data("kenburns") && (i.kenburns = !0);
    }), ("carousel" == e.sliderType || "on" == n.keyboardNavigation || "on" == n.mouseScrollNavigation || "on" == n.touch.touchenabled || n.arrows.enable || n.bullets.enable || n.thumbnails.enable || n.tabs.enable) && (i.navigation = !0), t.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function () {
      var e = jQuery(this);
      (e.data("ytid") != undefined || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("youtube") > 0) && (i.videos = !0), (e.data("vimeoid") != undefined || e.find("iframe").length > 0 && e.find("iframe").attr("src").toLowerCase().indexOf("vimeo") > 0) && (i.videos = !0), e.data("actions") !== undefined && (i.actions = !0), i.layeranim = !0;
    }), t.find("li").each(function () {
      jQuery(this).data("link") && jQuery(this).data("link") != undefined && (i.layeranim = !0, i.actions = !0);
    }), !i.videos && (t.find(".rs-background-video-layer").length > 0 || t.find(".tp-videolayer").length > 0 || t.find(".tp-audiolayer") || t.find("iframe").length > 0 || t.find("video").length > 0) && (i.videos = !0), "carousel" == e.sliderType && (i.carousel = !0), ("off" !== e.parallax.type || e.viewPort.enable || "true" == e.viewPort.enable) && (i.parallax = !0)) : (i.kenburns = !0, i.parallax = !0, i.carousel = !1, i.navigation = !0, i.videos = !0, i.actions = !0, i.layeranim = !0, i.migration = !0), "hero" == e.sliderType && (i.carousel = !1, i.navigation = !1), window.location.href.match(/file:/gi) && (i.filesystem = !0, e.filesystem = !0), i.videos && "undefined" == typeof _R.isVideoPlaying && lAjax("revolution.extension.video", e), i.carousel && "undefined" == typeof _R.prepareCarousel && lAjax("revolution.extension.carousel", e), i.carousel || "undefined" != typeof _R.animateSlide || lAjax("revolution.extension.slideanims", e), i.actions && "undefined" == typeof _R.checkActions && lAjax("revolution.extension.actions", e), i.layeranim && "undefined" == typeof _R.handleStaticLayers && lAjax("revolution.extension.layeranimation", e), i.kenburns && "undefined" == typeof _R.stopKenBurn && lAjax("revolution.extension.kenburn", e), i.navigation && "undefined" == typeof _R.createNavigation && lAjax("revolution.extension.navigation", e), i.migration && "undefined" == typeof _R.migration && lAjax("revolution.extension.migration", e), i.parallax && "undefined" == typeof _R.checkForParallax && lAjax("revolution.extension.parallax", e), e.addons != undefined && e.addons.length > 0 && jQuery.each(e.addons, function (t, i) {
      "object" == _typeof(i) && i.fileprefix != undefined && lAjax(i.fileprefix, e);
    }), i;
  },
      waitForScripts = function waitForScripts(e, t) {
    var i = !0,
        n = t.scriptsneeded;
    t.addons != undefined && t.addons.length > 0 && jQuery.each(t.addons, function (e, t) {
      "object" == _typeof(t) && t.init != undefined && _R[t.init] === undefined && (i = !1);
    }), n.filesystem || "undefined" != typeof punchgs && i && (!n.kenburns || n.kenburns && "undefined" != typeof _R.stopKenBurn) && (!n.navigation || n.navigation && "undefined" != typeof _R.createNavigation) && (!n.carousel || n.carousel && "undefined" != typeof _R.prepareCarousel) && (!n.videos || n.videos && "undefined" != typeof _R.resetVideo) && (!n.actions || n.actions && "undefined" != typeof _R.checkActions) && (!n.layeranim || n.layeranim && "undefined" != typeof _R.handleStaticLayers) && (!n.migration || n.migration && "undefined" != typeof _R.migration) && (!n.parallax || n.parallax && "undefined" != typeof _R.checkForParallax) && (n.carousel || !n.carousel && "undefined" != typeof _R.animateSlide) ? e.trigger("scriptsloaded") : setTimeout(function () {
      waitForScripts(e, t);
    }, 50);
  },
      getScriptLocation = function getScriptLocation(e) {
    var t = new RegExp("themepunch.revolution.min.js", "gi"),
        i = "";
    return jQuery("script").each(function () {
      var e = jQuery(this).attr("src");
      e && e.match(t) && (i = e);
    }), i = i.replace("jquery.themepunch.revolution.min.js", ""), i = i.replace("jquery.themepunch.revolution.js", ""), i = i.split("?")[0];
  },
      setCurWinRange = function setCurWinRange(e, t) {
    var i = 9999,
        n = 0,
        a = 0,
        r = 0,
        o = jQuery(window).width(),
        s = t && 9999 == e.responsiveLevels ? e.visibilityLevels : e.responsiveLevels;
    s && s.length && jQuery.each(s, function (e, t) {
      t > o && (0 == n || n > t) && (i = t, r = e, n = t), o > t && t > n && (n = t, a = e);
    }), i > n && (r = a), t ? e.forcedWinRange = r : e.curWinRange = r;
  },
      prepareOptions = function prepareOptions(e, t) {
    t.carousel.maxVisibleItems = t.carousel.maxVisibleItems < 1 ? 999 : t.carousel.maxVisibleItems, t.carousel.vertical_align = "top" === t.carousel.vertical_align ? "0%" : "bottom" === t.carousel.vertical_align ? "100%" : "50%";
  },
      gWiderOut = function gWiderOut(e, t) {
    var i = 0;
    return e.find(t).each(function () {
      var e = jQuery(this);
      !e.hasClass("tp-forcenotvisible") && i < e.outerWidth() && (i = e.outerWidth());
    }), i;
  },
      initSlider = function initSlider(container, opt) {
    return container == undefined ? !1 : (container.data("aimg") != undefined && ("enabled" == container.data("aie8") && _R.isIE(8) || "enabled" == container.data("amobile") && _ISM) && container.html('<img class="tp-slider-alternative-image" src="' + container.data("aimg") + '">'), container.find(">ul").addClass("tp-revslider-mainul"), opt.c = container, opt.ul = container.find(".tp-revslider-mainul"), opt.ul.find(">li").each(function (e) {
      var t = jQuery(this);
      "on" == t.data("hideslideonmobile") && _ISM && t.remove(), (t.data("invisible") || t.data("invisible") === !0) && (t.addClass("tp-invisible-slide"), t.appendTo(opt.ul));
    }), opt.addons != undefined && opt.addons.length > 0 && jQuery.each(opt.addons, function (i, obj) {
      "object" == _typeof(obj) && obj.init != undefined && _R[obj.init](eval(obj.params));
    }), opt.cid = container.attr("id"), opt.ul.css({
      visibility: "visible"
    }), opt.slideamount = opt.ul.find(">li").not(".tp-invisible-slide").length, opt.slayers = container.find(".tp-static-layers"), void (1 != opt.waitForInit && (container.data("opt", opt), runSlider(container, opt))));
  },
      runSlider = function runSlider(e, t) {
    if (t.sliderisrunning = !0, t.ul.find(">li").each(function (e) {
      jQuery(this).data("originalindex", e);
    }), "on" == t.shuffle) {
      var i = new Object(),
          n = t.ul.find(">li:first-child");
      i.fstransition = n.data("fstransition"), i.fsmasterspeed = n.data("fsmasterspeed"), i.fsslotamount = n.data("fsslotamount");

      for (var a = 0; a < t.slideamount; a++) {
        var r = Math.round(Math.random() * t.slideamount);
        t.ul.find(">li:eq(" + r + ")").prependTo(t.ul);
      }

      var o = t.ul.find(">li:first-child");
      o.data("fstransition", i.fstransition), o.data("fsmasterspeed", i.fsmasterspeed), o.data("fsslotamount", i.fsslotamount), t.li = t.ul.find(">li").not(".tp-invisible-slide");
    }

    if (t.allli = t.ul.find(">li"), t.li = t.ul.find(">li").not(".tp-invisible-slide"), t.inli = t.ul.find(">li.tp-invisible-slide"), t.thumbs = new Array(), t.slots = 4, t.act = -1, t.firststart = 1, t.loadqueue = new Array(), t.syncload = 0, t.conw = e.width(), t.conh = e.height(), t.responsiveLevels.length > 1 ? t.responsiveLevels[0] = 9999 : t.responsiveLevels = 9999, jQuery.each(t.allli, function (e, i) {
      var i = jQuery(i),
          n = i.find(".rev-slidebg") || i.find("img").first(),
          a = 0;
      i.addClass("tp-revslider-slidesli"), i.data("index") === undefined && i.data("index", "rs-" + Math.round(999999 * Math.random()));
      var r = new Object();
      r.params = new Array(), r.id = i.data("index"), r.src = i.data("thumb") !== undefined ? i.data("thumb") : n.data("lazyload") !== undefined ? n.data("lazyload") : n.attr("src"), i.data("title") !== undefined && r.params.push({
        from: RegExp("\\{\\{title\\}\\}", "g"),
        to: i.data("title")
      }), i.data("description") !== undefined && r.params.push({
        from: RegExp("\\{\\{description\\}\\}", "g"),
        to: i.data("description")
      });

      for (var a = 1; 10 >= a; a++) {
        i.data("param" + a) !== undefined && r.params.push({
          from: RegExp("\\{\\{param" + a + "\\}\\}", "g"),
          to: i.data("param" + a)
        });
      }

      if (t.thumbs.push(r), i.data("origindex", i.index()), i.data("link") != undefined) {
        var o = i.data("link"),
            s = i.data("target") || "_self",
            d = "back" === i.data("slideindex") ? 0 : 60,
            l = i.data("linktoslide"),
            u = l;
        l != undefined && "next" != l && "prev" != l && t.allli.each(function () {
          var e = jQuery(this);
          e.data("origindex") + 1 == u && (l = e.data("index"));
        }), "slide" != o && (l = "no");
        var c = '<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:' + d + ';" data-x="center" data-y="center" data-basealign="slide" ',
            p = "scroll_under" === l ? '[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]' : "prev" === l ? '[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]' : "next" === l ? '[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]' : '[{"event":"click","action":"jumptoslide","slide":"' + l + '","delay":"0.2"}]';
        c = "no" == l ? c + ' data-start="0">' : c + "data-actions='" + p + '\' data-start="0">', c += '<a style="width:100%;height:100%;display:block"', c = "slide" != o ? c + ' target="' + s + '" href="' + o + '"' : c, c += '><span style="width:100%;height:100%;display:block"></span></a></div>', i.append(c);
      }
    }), t.rle = t.responsiveLevels.length || 1, t.gridwidth = cArray(t.gridwidth, t.rle), t.gridheight = cArray(t.gridheight, t.rle), "on" == t.simplifyAll && (_R.isIE(8) || _R.iOSVersion()) && (e.find(".tp-caption").each(function () {
      var e = jQuery(this);
      e.removeClass("customin customout").addClass("fadein fadeout"), e.data("splitin", ""), e.data("speed", 400);
    }), t.allli.each(function () {
      var e = jQuery(this);
      e.data("transition", "fade"), e.data("masterspeed", 500), e.data("slotamount", 1);
      var t = e.find(".rev-slidebg") || e.find(">img").first();
      t.data("kenburns", "off");
    })), t.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), t.autoHeight = "fullscreen" == t.sliderLayout ? "on" : t.autoHeight, "fullwidth" == t.sliderLayout && "off" == t.autoHeight && e.css({
      maxHeight: t.gridheight[t.curWinRange] + "px"
    }), "auto" != t.sliderLayout && 0 == e.closest(".forcefullwidth_wrapper_tp_banner").length && ("fullscreen" !== t.sliderLayout || "on" != t.fullScreenAutoWidth)) {
      var s = e.parent(),
          d = s.css("marginBottom"),
          l = s.css("marginTop");
      d = d === undefined ? 0 : d, l = l === undefined ? 0 : l, s.wrap('<div class="forcefullwidth_wrapper_tp_banner" style="position:relative;width:100%;height:auto;margin-top:' + l + ";margin-bottom:" + d + '"></div>'), e.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:' + e.height() + 'px"></div>'), e.parent().css({
        marginTop: "0px",
        marginBottom: "0px"
      }), e.parent().css({
        position: "absolute"
      });
    }

    if (t.shadow !== undefined && t.shadow > 0 && (e.parent().addClass("tp-shadow" + t.shadow), e.parent().append('<div class="tp-shadowcover"></div>'), e.parent().find(".tp-shadowcover").css({
      backgroundColor: e.parent().css("backgroundColor"),
      backgroundImage: e.parent().css("backgroundImage")
    })), setCurWinRange(t), setCurWinRange(t, !0), !e.hasClass("revslider-initialised")) {
      e.addClass("revslider-initialised"), e.addClass("tp-simpleresponsive"), e.attr("id") == undefined && e.attr("id", "revslider-" + Math.round(1e3 * Math.random() + 5)), t.firefox13 = !1, t.ie = !jQuery.support.opacity, t.ie9 = 9 == document.documentMode, t.origcd = t.delay;
      var u = jQuery.fn.jquery.split("."),
          c = parseFloat(u[0]),
          p = parseFloat(u[1]);
      parseFloat(u[2] || "0");
      1 == c && 7 > p && e.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:' + u + " <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"), c > 1 && (t.ie = !1);
      var f = new Object();
      f.addedyt = 0, f.addedvim = 0, f.addedvid = 0, e.find(".tp-caption, .rs-background-video-layer").each(function (e) {
        var i = jQuery(this),
            n = i.data("autoplayonlyfirsttime"),
            a = i.data("autoplay"),
            r = i.hasClass("tp-audiolayer"),
            o = i.data("videoloop");
        i.hasClass("tp-static-layer") && _R.handleStaticLayers && _R.handleStaticLayers(i, t);
        var s = i.data("noposteronmobile") || i.data("noPosterOnMobile") || i.data("posteronmobile") || i.data("posterOnMobile") || i.data("posterOnMObile");
        i.data("noposteronmobile", s);
        var d = 0;

        if (i.find("iframe").each(function () {
          punchgs.TweenLite.set(jQuery(this), {
            autoAlpha: 0
          }), d++;
        }), d > 0 && i.data("iframes", !0), i.hasClass("tp-caption")) {
          var l = i.hasClass("slidelink") ? "width:100% !important;height:100% !important;" : "";
          i.wrap('<div class="tp-parallax-wrap" style="' + l + 'position:absolute;visibility:hidden"><div class="tp-loop-wrap" style="' + l + 'position:absolute;"><div class="tp-mask-wrap" style="' + l + 'position:absolute" ></div></div></div>');
          var u = ["pendulum", "rotate", "slideloop", "pulse", "wave"],
              c = i.closest(".tp-loop-wrap");
          jQuery.each(u, function (e, t) {
            var n = i.find(".rs-" + t),
                a = n.data() || "";
            "" != a && (c.data(a), c.addClass("rs-" + t), n.children(0).unwrap(), i.data("loopanimation", "on"));
          }), punchgs.TweenLite.set(i, {
            visibility: "hidden"
          });
        }

        var p = i.data("actions");
        p !== undefined && _R.checkActions(i, t, p), checkHoverDependencies(i, t), _R.checkVideoApis && (f = _R.checkVideoApis(i, t, f)), _ISM && ((1 == n || "true" == n) && (i.data("autoplayonlyfirsttime", "false"), n = !1), (1 == a || "true" == a || "on" == a || "1sttime" == a) && (i.data("autoplay", "off"), a = "off")), i.data("videoloop", o), r || 1 != n && "true" != n && "1sttime" != a || "loopandnoslidestop" == o || i.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"), r || 1 != a && "true" != a && "on" != a && "no1sttime" != a || "loopandnoslidestop" == o || i.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always");
      }), e.hover(function () {
        e.trigger("tp-mouseenter"), t.overcontainer = !0;
      }, function () {
        e.trigger("tp-mouseleft"), t.overcontainer = !1;
      }), e.on("mouseover", function () {
        e.trigger("tp-mouseover"), t.overcontainer = !0;
      }), e.find(".tp-caption video").each(function (e) {
        var t = jQuery(this);
        t.removeClass("video-js vjs-default-skin"), t.attr("preload", ""), t.css({
          display: "none"
        });
      }), "standard" !== t.sliderType && (t.lazyType = "all"), loadImages(e.find(".tp-static-layers"), t, 0, !0), waitForCurrentImages(e.find(".tp-static-layers"), t, function () {
        e.find(".tp-static-layers img").each(function () {
          var e = jQuery(this),
              i = e.data("lazyload") != undefined ? e.data("lazyload") : e.attr("src"),
              n = getLoadObj(t, i);
          e.attr("src", n.src);
        });
      }), t.allli.each(function (e) {
        var i = jQuery(this);
        ("all" == t.lazyType || "smart" == t.lazyType && (0 == e || 1 == e || e == t.slideamount || e == t.slideamount - 1)) && (loadImages(i, t, e), waitForCurrentImages(i, t, function () {
          "carousel" == t.sliderType && punchgs.TweenLite.to(i, 1, {
            autoAlpha: 1,
            ease: punchgs.Power3.easeInOut
          });
        }));
      });
      var h = getUrlVars("#")[0];

      if (h.length < 9 && h.split("slide").length > 1) {
        var g = parseInt(h.split("slide")[1], 0);
        1 > g && (g = 1), g > t.slideamount && (g = t.slideamount), t.startWithSlide = g - 1;
      }

      e.append('<div class="tp-loader ' + t.spinner + '"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'), 0 === e.find(".tp-bannertimer").length && e.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'), e.find(".tp-bannertimer").css({
        width: "0%"
      }), e.find(".tp-bannertimer").data("opt", t), t.ul.css({
        display: "block"
      }), prepareSlides(e, t), "off" !== t.parallax.type && _R.checkForParallax(e, t), _R.setSize(t), "hero" !== t.sliderType && _R.createNavigation(e, t), _R.resizeThumbsTabs && _R.resizeThumbsTabs(t), contWidthManager(t);
      var v = t.viewPort;
      t.inviewport = !1, v != undefined && v.enable && (jQuery.isNumeric(v.visible_area) || -1 !== v.visible_area.indexOf("%") && (v.visible_area = parseInt(v.visible_area) / 100), _R.scrollTicker && _R.scrollTicker(t, e)), setTimeout(function () {
        "carousel" == t.sliderType && _R.prepareCarousel(t), !v.enable || v.enable && t.inviewport || v.enable && !t.inviewport && "wait" == !v.outof ? swapSlide(e, t) : t.waitForFirstSlide = !0, _R.manageNavigation && _R.manageNavigation(t), t.slideamount > 1 && (!v.enable || v.enable && t.inviewport ? countDown(e, t) : t.waitForCountDown = !0), setTimeout(function () {
          e.trigger("revolution.slide.onloaded");
        }, 100);
      }, t.startDelay), t.startDelay = 0, jQuery("body").data("rs-fullScreenMode", !1), jQuery(window).on("mozfullscreenchange webkitfullscreenchange fullscreenchange", function () {
        jQuery("body").data("rs-fullScreenMode", !jQuery("body").data("rs-fullScreenMode")), jQuery("body").data("rs-fullScreenMode") && setTimeout(function () {
          jQuery(window).trigger("resize");
        }, 200);
      });
      var m = "resize.revslider-" + e.attr("id");
      jQuery(window).on(m, function () {
        return e == undefined ? !1 : (0 != jQuery("body").find(e) && contWidthManager(t), void ((e.outerWidth(!0) != t.width || e.is(":hidden") || "fullscreen" == t.sliderLayout && jQuery(window).height() != t.lastwindowheight) && (t.lastwindowheight = jQuery(window).height(), containerResized(e, t))));
      }), hideSliderUnder(e, t), contWidthManager(t), t.fallbacks.disableFocusListener || "true" == t.fallbacks.disableFocusListener || t.fallbacks.disableFocusListener === !0 || tabBlurringCheck(e, t);
    }
  },
      cArray = function cArray(e, t) {
    if (!jQuery.isArray(e)) {
      var i = e;
      e = new Array(), e.push(i);
    }

    if (e.length < t) for (var i = e[e.length - 1], n = 0; n < t - e.length + 2; n++) {
      e.push(i);
    }
    return e;
  },
      checkHoverDependencies = function checkHoverDependencies(e, t) {
    "sliderenter" === e.data("start") && (t.layersonhover === undefined && (t.c.on("tp-mouseenter", function () {
      t.layersonhover && jQuery.each(t.layersonhover, function (e, i) {
        i.data("animdirection", "in");
        var n = i.data("timeline_out"),
            a = "carousel" === t.sliderType ? 0 : t.width / 2 - t.gridwidth[t.curWinRange] * t.bw / 2,
            r = 0,
            o = i.closest(".tp-revslider-slidesli"),
            s = i.closest(".tp-static-layers");

        if (o.length > 0 && o.hasClass("active-revslide") || o.hasClass("processing-revslide") || s.length > 0) {
          n != undefined && (n.pause(0), n.kill()), _R.animateSingleCaption(i, t, a, r, 0, !1, !0);
          var d = i.data("timeline");
          i.data("triggerstate", "on"), d.play(0);
        }
      });
    }), t.c.on("tp-mouseleft", function () {
      t.layersonhover && jQuery.each(t.layersonhover, function (e, i) {
        i.data("animdirection", "out"), i.data("triggered", !0), i.data("triggerstate", "off"), _R.stopVideo && _R.stopVideo(i, t), _R.endMoveCaption && _R.endMoveCaption(i, null, null, t);
      });
    }), t.layersonhover = new Array()), t.layersonhover.push(e));
  },
      contWidthManager = function contWidthManager(e) {
    var t = _R.getHorizontalOffset(e.c, "left");

    if ("auto" == e.sliderLayout || "fullscreen" === e.sliderLayout && "on" == e.fullScreenAutoWidth) "fullscreen" == e.sliderLayout && "on" == e.fullScreenAutoWidth ? punchgs.TweenLite.set(e.ul, {
      left: 0,
      width: e.c.width()
    }) : punchgs.TweenLite.set(e.ul, {
      left: t,
      width: e.c.width() - _R.getHorizontalOffset(e.c, "both")
    });else {
      var i = Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left - t);
      punchgs.TweenLite.set(e.c.parent(), {
        left: 0 - i + "px",
        width: jQuery(window).width() - _R.getHorizontalOffset(e.c, "both")
      });
    }
    e.slayers && "fullwidth" != e.sliderLayout && "fullscreen" != e.sliderLayout && punchgs.TweenLite.set(e.slayers, {
      left: t
    });
  },
      cv = function cv(e, t) {
    return e === undefined ? t : e;
  },
      hideSliderUnder = function hideSliderUnder(e, t, i) {
    var n = e.parent();
    jQuery(window).width() < t.hideSliderAtLimit ? (e.trigger("stoptimer"), "none" != n.css("display") && n.data("olddisplay", n.css("display")), n.css({
      display: "none"
    })) : e.is(":hidden") && i && (n.data("olddisplay") != undefined && "undefined" != n.data("olddisplay") && "none" != n.data("olddisplay") ? n.css({
      display: n.data("olddisplay")
    }) : n.css({
      display: "block"
    }), e.trigger("restarttimer"), setTimeout(function () {
      containerResized(e, t);
    }, 150)), _R.hideUnHideNav && _R.hideUnHideNav(t);
  },
      containerResized = function containerResized(e, t) {
    if (1 == t.infullscreenmode && (t.minHeight = jQuery(window).height()), setCurWinRange(t), setCurWinRange(t, !0), !_R.resizeThumbsTabs || _R.resizeThumbsTabs(t) === !0) {
      if (hideSliderUnder(e, t, !0), contWidthManager(t), "carousel" == t.sliderType && _R.prepareCarousel(t, !0), e === undefined) return !1;
      _R.setSize(t), t.conw = t.c.width(), t.conh = t.infullscreenmode ? t.minHeight : t.c.height();
      var i = e.find(".active-revslide .slotholder"),
          n = e.find(".processing-revslide .slotholder");
      removeSlots(e, t, e, 2), "standard" === t.sliderType && (punchgs.TweenLite.set(n.find(".defaultimg"), {
        opacity: 0
      }), i.find(".defaultimg").css({
        opacity: 1
      })), "carousel" == t.sliderType && t.lastconw != t.conw && (clearTimeout(t.pcartimer), t.pcartimer = setTimeout(function () {
        _R.prepareCarousel(t, !0);
      }, 100), t.lastconw = t.conw), _R.manageNavigation && _R.manageNavigation(t), _R.animateTheCaptions && _R.animateTheCaptions(e.find(".active-revslide"), t, !0), "on" == n.data("kenburns") && _R.startKenBurn(n, t, n.data("kbtl").progress()), "on" == i.data("kenburns") && _R.startKenBurn(i, t, i.data("kbtl").progress()), _R.animateTheCaptions && _R.animateTheCaptions(n.closest("li"), t, !0), _R.manageNavigation && _R.manageNavigation(t);
    }
  },
      setScale = function setScale(e) {
    e.bw = e.width / e.gridwidth[e.curWinRange], e.bh = e.height / e.gridheight[e.curWinRange], e.bh > e.bw ? e.bh = e.bw : e.bw = e.bh, (e.bh > 1 || e.bw > 1) && (e.bw = 1, e.bh = 1);
  },
      prepareSlides = function prepareSlides(e, t) {
    if (e.find(".tp-caption").each(function () {
      var e = jQuery(this);
      e.data("transition") !== undefined && e.addClass(e.data("transition"));
    }), t.ul.css({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      maxHeight: e.parent().css("maxHeight")
    }), "on" == t.autoHeight && (t.ul.css({
      overflow: "hidden",
      width: "100%",
      height: "100%",
      maxHeight: "none"
    }), e.css({
      maxHeight: "none"
    }), e.parent().css({
      maxHeight: "none"
    })), t.allli.each(function (e) {
      var i = jQuery(this),
          n = i.data("originalindex");
      (t.startWithSlide != undefined && n == t.startWithSlide || t.startWithSlide === undefined && 0 == e) && i.addClass("next-revslide"), i.css({
        width: "100%",
        height: "100%",
        overflow: "hidden"
      });
    }), "carousel" === t.sliderType) {
      t.ul.css({
        overflow: "visible"
      }).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');
      var i = '<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';
      t.c.parent().prepend(i), t.c.parent().append(i), _R.prepareCarousel(t);
    }

    e.parent().css({
      overflow: "visible"
    }), t.allli.find(">img").each(function (e) {
      var i = jQuery(this),
          n = i.closest("li").find(".rs-background-video-layer");
      n.addClass("defaultvid").css({
        zIndex: 30
      }), i.addClass("defaultimg"), "on" == t.fallbacks.panZoomDisableOnMobile && _ISM && (i.data("kenburns", "off"), i.data("bgfit", "cover")), i.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'), n.appendTo(i.closest("li").find(".slotholder"));
      var a = i.data();
      i.closest(".slotholder").data(a), n.length > 0 && a.bgparallax != undefined && n.data("bgparallax", a.bgparallax), "none" != t.dottedOverlay && t.dottedOverlay != undefined && i.closest(".slotholder").append('<div class="tp-dottedoverlay ' + t.dottedOverlay + '"></div>');
      var r = i.attr("src");
      a.src = r, a.bgfit = a.bgfit || "cover", a.bgrepeat = a.bgrepeat || "no-repeat", a.bgposition = a.bgposition || "center center";
      var o = i.closest(".slotholder");
      i.parent().append('<div class="tp-bgimg defaultimg" style="background-color:' + i.css("backgroundColor") + ";background-repeat:" + a.bgrepeat + ";background-image:url(" + r + ");background-size:" + a.bgfit + ";background-position:" + a.bgposition + ';width:100%;height:100%;"></div>');
      var s = document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - " + i.get(0).outerHTML);
      i.replaceWith(s), i = o.find(".tp-bgimg"), i.data(a), i.attr("src", r), ("standard" === t.sliderType || "undefined" === t.sliderType) && i.css({
        opacity: 0
      });
    });
  },
      removeSlots = function removeSlots(e, t, i, n) {
    t.removePrepare = t.removePrepare + n, i.find(".slot, .slot-circle-wrapper").each(function () {
      jQuery(this).remove();
    }), t.transition = 0, t.removePrepare = 0;
  },
      cutParams = function cutParams(e) {
    var t = e;
    return e != undefined && e.length > 0 && (t = e.split("?")[0]), t;
  },
      relativeRedir = function relativeRedir(e) {
    return location.pathname.replace(/(.*)\/[^\/]*/, "$1/" + e);
  },
      abstorel = function abstorel(e, t) {
    var i = e.split("/"),
        n = t.split("/");
    i.pop();

    for (var a = 0; a < n.length; a++) {
      "." != n[a] && (".." == n[a] ? i.pop() : i.push(n[a]));
    }

    return i.join("/");
  },
      imgLoaded = function imgLoaded(e, t, i) {
    t.syncload--, t.loadqueue && jQuery.each(t.loadqueue, function (t, n) {
      var a = n.src.replace(/\.\.\/\.\.\//gi, ""),
          r = self.location.href,
          o = document.location.origin,
          s = r.substring(0, r.length - 1) + "/" + a,
          d = o + "/" + a,
          l = abstorel(self.location.href, n.src);
      r = r.substring(0, r.length - 1) + a, o += a, (cutParams(o) === cutParams(decodeURIComponent(e.src)) || cutParams(r) === cutParams(decodeURIComponent(e.src)) || cutParams(l) === cutParams(decodeURIComponent(e.src)) || cutParams(d) === cutParams(decodeURIComponent(e.src)) || cutParams(s) === cutParams(decodeURIComponent(e.src)) || cutParams(n.src) === cutParams(decodeURIComponent(e.src)) || cutParams(n.src).replace(/^.*\/\/[^\/]+/, "") === cutParams(decodeURIComponent(e.src)).replace(/^.*\/\/[^\/]+/, "") || "file://" === window.location.origin && cutParams(e.src).match(new RegExp(a))) && (n.progress = i, n.width = e.width, n.height = e.height);
    }), progressImageLoad(t);
  },
      progressImageLoad = function progressImageLoad(e) {
    3 != e.syncload && e.loadqueue && jQuery.each(e.loadqueue, function (t, i) {
      if (i.progress.match(/prepared/g) && e.syncload <= 3) {
        if (e.syncload++, "img" == i.type) {
          var n = new Image();
          n.onload = function () {
            imgLoaded(this, e, "loaded");
          }, n.onerror = function () {
            imgLoaded(this, e, "failed");
          }, n.src = i.src;
        } else jQuery.get(i.src, function (t) {
          i.innerHTML = new XMLSerializer().serializeToString(t.documentElement), i.progress = "loaded", e.syncload--, progressImageLoad(e);
        }).fail(function () {
          i.progress = "failed", e.syncload--, progressImageLoad(e);
        });

        i.progress = "inload";
      }
    });
  },
      addToLoadQueue = function addToLoadQueue(e, t, i, n, a) {
    var r = !1;

    if (t.loadqueue && jQuery.each(t.loadqueue, function (t, i) {
      i.src === e && (r = !0);
    }), !r) {
      var o = new Object();
      o.src = e, o.type = n || "img", o.prio = i, o.progress = "prepared", o["static"] = a, t.loadqueue.push(o);
    }
  },
      loadImages = function loadImages(e, t, i, n) {
    e.find("img,.defaultimg, .tp-svg-layer").each(function () {
      var e = jQuery(this),
          a = e.data("lazyload") !== undefined && "undefined" !== e.data("lazyload") ? e.data("lazyload") : e.data("svg_src") != undefined ? e.data("svg_src") : e.attr("src"),
          r = e.data("svg_src") != undefined ? "svg" : "img";
      e.data("start-to-load", jQuery.now()), addToLoadQueue(a, t, i, r, n);
    }), progressImageLoad(t);
  },
      getLoadObj = function getLoadObj(e, t) {
    var i = new Object();
    return e.loadqueue && jQuery.each(e.loadqueue, function (e, n) {
      n.src == t && (i = n);
    }), i;
  },
      waitForCurrentImages = function waitForCurrentImages(e, t, i) {
    var n = !1;
    e.find("img,.defaultimg, .tp-svg-layer").each(function () {
      var i = jQuery(this),
          a = i.data("lazyload") != undefined ? i.data("lazyload") : i.data("svg_src") != undefined ? i.data("svg_src") : i.attr("src"),
          r = getLoadObj(t, a);

      if (i.data("loaded") === undefined && r !== undefined && r.progress && r.progress.match(/loaded/g)) {
        if (i.attr("src", r.src), "img" == r.type) {
          if (i.hasClass("defaultimg")) _R.isIE(8) ? defimg.attr("src", r.src) : i.css({
            backgroundImage: 'url("' + r.src + '")'
          }), e.data("owidth", r.width), e.data("oheight", r.height), e.find(".slotholder").data("owidth", r.width), e.find(".slotholder").data("oheight", r.height);else {
            var o = i.data("ww"),
                s = i.data("hh");
            i.data("owidth", r.width), i.data("oheight", r.height), o = o == undefined || "auto" == o || "" == o ? r.width : o, s = s == undefined || "auto" == s || "" == s ? r.height : s, i.data("ww", o), i.data("hh", s);
          }
        } else "svg" == r.type && "loaded" == r.progress && (i.append('<div class="tp-svg-innercontainer"></div>'), i.find(".tp-svg-innercontainer").append(r.innerHTML));
        i.data("loaded", !0);
      }

      if (r && r.progress && r.progress.match(/inprogress|inload|prepared/g) && (jQuery.now() - i.data("start-to-load") < 5e3 ? n = !0 : (r.progress = "failed", console.error(a + "  Could not be loaded !"))), 1 == t.youtubeapineeded && (!window.YT || YT.Player == undefined) && (n = !0, jQuery.now() - t.youtubestarttime > 5e3 && 1 != t.youtubewarning)) {
        t.youtubewarning = !0;
        var d = "YouTube Api Could not be loaded !";
        "https:" === location.protocol && (d += " Please Check and Renew SSL Certificate !"), console.error(d), t.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + d + "</strong></div>");
      }

      if (1 == t.vimeoapineeded && !window.Froogaloop && (n = !0, jQuery.now() - t.vimeostarttime > 5e3 && 1 != t.vimeowarning)) {
        t.vimeowarning = !0;
        var d = "Vimeo Froogaloop Api Could not be loaded !";
        "https:" === location.protocol && (d += " Please Check and Renew SSL Certificate !"), console.error(d), t.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>' + d + "</strong></div>");
      }
    }), !_ISM && t.audioqueue && t.audioqueue.length > 0 && jQuery.each(t.audioqueue, function (e, t) {
      t.status && "prepared" === t.status && jQuery.now() - t.start < t.waittime && (n = !0);
    }), jQuery.each(t.loadqueue, function (e, t) {
      t["static"] !== !0 || "loaded" == t.progress && "failed" !== t.progress || (n = !0);
    }), n ? setTimeout(function () {
      waitForCurrentImages(e, t, i);
    }, 19) : setTimeout(i, 19);
  },
      swapSlide = function swapSlide(e, t) {
    if (clearTimeout(t.waitWithSwapSlide), e.find(".processing-revslide").length > 0) return t.waitWithSwapSlide = setTimeout(function () {
      swapSlide(e, t);
    }, 150), !1;
    var i = e.find(".active-revslide"),
        n = e.find(".next-revslide"),
        a = n.find(".defaultimg");
    return n.index() === i.index() ? (n.removeClass("next-revslide"), !1) : (n.removeClass("next-revslide").addClass("processing-revslide"), n.data("slide_on_focus_amount", n.data("slide_on_focus_amount") + 1 || 1), "on" == t.stopLoop && n.index() == t.lastslidetoshow - 1 && (e.find(".tp-bannertimer").css({
      visibility: "hidden"
    }), e.trigger("revolution.slide.onstop"), t.noloopanymore = 1), n.index() === t.slideamount - 1 && (t.looptogo = t.looptogo - 1, t.looptogo <= 0 && (t.stopLoop = "on")), t.tonpause = !0, e.trigger("stoptimer"), t.cd = 0, "off" === t.spinner ? e.find(".tp-loader").css({
      display: "none"
    }) : e.find(".tp-loader").css({
      display: "block"
    }), loadImages(n, t, 1), _R.preLoadAudio && _R.preLoadAudio(n, t, 1), void waitForCurrentImages(n, t, function () {
      n.find(".rs-background-video-layer").each(function () {
        var e = jQuery(this);
        e.hasClass("HasListener") || (e.data("bgvideo", 1), _R.manageVideoLayer && _R.manageVideoLayer(e, t)), 0 == e.find(".rs-fullvideo-cover").length && e.append('<div class="rs-fullvideo-cover"></div>');
      }), swapSlideProgress(t, a, e);
    }));
  },
      swapSlideProgress = function swapSlideProgress(e, t, i) {
    var n = i.find(".active-revslide"),
        a = i.find(".processing-revslide"),
        r = n.find(".slotholder"),
        o = a.find(".slotholder");
    e.tonpause = !1, e.cd = 0, i.find(".tp-loader").css({
      display: "none"
    }), _R.setSize(e), _R.slotSize(t, e), _R.manageNavigation && _R.manageNavigation(e);
    var s = {};
    s.nextslide = a, s.currentslide = n, i.trigger("revolution.slide.onbeforeswap", s), e.transition = 1, e.videoplaying = !1, a.data("delay") != undefined ? (e.cd = 0, e.delay = a.data("delay")) : e.delay = e.origcd, "true" == a.data("ssop") || a.data("ssop") === !0 ? e.ssop = !0 : e.ssop = !1, i.trigger("nulltimer");
    var d = n.index(),
        l = a.index();
    e.sdir = d > l ? 1 : 0, "arrow" == e.sc_indicator && (0 == d && l == e.slideamount - 1 && (e.sdir = 1), d == e.slideamount - 1 && 0 == l && (e.sdir = 0)), e.lsdir = e.lsdir === undefined ? e.sdir : e.lsdir, e.dirc = e.lsdir != e.sdir, e.lsdir = e.sdir, n.index() != a.index() && 1 != e.firststart && _R.removeTheCaptions && _R.removeTheCaptions(n, e), a.hasClass("rs-pause-timer-once") || a.hasClass("rs-pause-timer-always") ? e.videoplaying = !0 : i.trigger("restarttimer"), a.removeClass("rs-pause-timer-once");
    var u, c;
    if ("carousel" == e.sliderType) c = new punchgs.TimelineLite(), _R.prepareCarousel(e, c), letItFree(i, e, o, r, a, n, c), e.transition = 0, e.firststart = 0;else {
      c = new punchgs.TimelineLite({
        onComplete: function onComplete() {
          letItFree(i, e, o, r, a, n, c);
        }
      }), c.add(punchgs.TweenLite.set(o.find(".defaultimg"), {
        opacity: 0
      })), c.pause(), 1 == e.firststart && (punchgs.TweenLite.set(n, {
        autoAlpha: 0
      }), e.firststart = 0), punchgs.TweenLite.set(n, {
        zIndex: 18
      }), punchgs.TweenLite.set(a, {
        autoAlpha: 0,
        zIndex: 20
      }), "prepared" == a.data("differentissplayed") && (a.data("differentissplayed", "done"), a.data("transition", a.data("savedtransition")), a.data("slotamount", a.data("savedslotamount")), a.data("masterspeed", a.data("savedmasterspeed"))), a.data("fstransition") != undefined && "done" != a.data("differentissplayed") && (a.data("savedtransition", a.data("transition")), a.data("savedslotamount", a.data("slotamount")), a.data("savedmasterspeed", a.data("masterspeed")), a.data("transition", a.data("fstransition")), a.data("slotamount", a.data("fsslotamount")), a.data("masterspeed", a.data("fsmasterspeed")), a.data("differentissplayed", "prepared")), a.data("transition") == undefined && a.data("transition", "random"), u = 0;
      var p = a.data("transition") !== undefined ? a.data("transition").split(",") : "fade",
          f = a.data("nexttransid") == undefined ? -1 : a.data("nexttransid");
      "on" == a.data("randomtransition") ? f = Math.round(Math.random() * p.length) : f += 1, f == p.length && (f = 0), a.data("nexttransid", f);
      var h = p[f];
      e.ie && ("boxfade" == h && (h = "boxslide"), "slotfade-vertical" == h && (h = "slotzoom-vertical"), "slotfade-horizontal" == h && (h = "slotzoom-horizontal")), _R.isIE(8) && (h = 11), c = _R.animateSlide(u, h, i, e, a, n, o, r, c), "on" == o.data("kenburns") && (_R.startKenBurn(o, e), c.add(punchgs.TweenLite.set(o, {
        autoAlpha: 0
      }))), c.pause();
    }
    _R.scrollHandling && (_R.scrollHandling(e, !0), c.eventCallback("onUpdate", function () {
      _R.scrollHandling(e, !0);
    })), "off" != e.parallax.type && e.parallax.firstgo == undefined && _R.scrollHandling && (e.parallax.firstgo = !0, e.lastscrolltop = -999, _R.scrollHandling(e, !0), setTimeout(function () {
      e.lastscrolltop = -999, _R.scrollHandling(e, !0);
    }, 210), setTimeout(function () {
      e.lastscrolltop = -999, _R.scrollHandling(e, !0);
    }, 420)), _R.animateTheCaptions ? _R.animateTheCaptions(a, e, null, c) : c != undefined && setTimeout(function () {
      c.resume();
    }, 30), punchgs.TweenLite.to(a, .001, {
      autoAlpha: 1
    });
  },
      letItFree = function letItFree(e, t, i, n, a, r, o) {
    "carousel" === t.sliderType || (t.removePrepare = 0, punchgs.TweenLite.to(i.find(".defaultimg"), .001, {
      zIndex: 20,
      autoAlpha: 1,
      onComplete: function onComplete() {
        removeSlots(e, t, a, 1);
      }
    }), a.index() != r.index() && punchgs.TweenLite.to(r, .2, {
      zIndex: 18,
      autoAlpha: 0,
      onComplete: function onComplete() {
        removeSlots(e, t, r, 1);
      }
    })), e.find(".active-revslide").removeClass("active-revslide"), e.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"), t.act = a.index(), t.c.attr("data-slideactive", e.find(".active-revslide").data("index")), ("scroll" == t.parallax.type || "scroll+mouse" == t.parallax.type || "mouse+scroll" == t.parallax.type) && (t.lastscrolltop = -999, _R.scrollHandling(t)), o.clear(), n.data("kbtl") != undefined && (n.data("kbtl").reverse(), n.data("kbtl").timeScale(25)), "on" == i.data("kenburns") && (i.data("kbtl") != undefined ? (i.data("kbtl").timeScale(1), i.data("kbtl").play()) : _R.startKenBurn(i, t)), a.find(".rs-background-video-layer").each(function (e) {
      if (_ISM) return !1;
      var i = jQuery(this);
      _R.resetVideo(i, t), punchgs.TweenLite.fromTo(i, 1, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        ease: punchgs.Power3.easeInOut,
        delay: .2,
        onComplete: function onComplete() {
          _R.animcompleted && _R.animcompleted(i, t);
        }
      });
    }), r.find(".rs-background-video-layer").each(function (e) {
      if (_ISM) return !1;
      var i = jQuery(this);
      _R.stopVideo && (_R.resetVideo(i, t), _R.stopVideo(i, t)), punchgs.TweenLite.to(i, 1, {
        autoAlpha: 0,
        ease: punchgs.Power3.easeInOut,
        delay: .2
      });
    });
    var s = {};
    s.slideIndex = a.index() + 1, s.slideLIIndex = a.index(), s.slide = a, s.currentslide = a, s.prevslide = r, t.last_shown_slide = r.index(), e.trigger("revolution.slide.onchange", s), e.trigger("revolution.slide.onafterswap", s), t.duringslidechange = !1;
    var d = r.data("slide_on_focus_amount"),
        l = r.data("hideafterloop");
    0 != l && d >= l && t.c.revremoveslide(r.index());
  },
      removeAllListeners = function removeAllListeners(e, t) {
    e.children().each(function () {
      try {
        jQuery(this).die("click");
      } catch (e) {}

      try {
        jQuery(this).die("mouseenter");
      } catch (e) {}

      try {
        jQuery(this).die("mouseleave");
      } catch (e) {}

      try {
        jQuery(this).unbind("hover");
      } catch (e) {}
    });

    try {
      e.die("click", "mouseenter", "mouseleave");
    } catch (i) {}

    clearInterval(t.cdint), e = null;
  },
      countDown = function countDown(e, t) {
    t.cd = 0, t.loop = 0, t.stopAfterLoops != undefined && t.stopAfterLoops > -1 ? t.looptogo = t.stopAfterLoops : t.looptogo = 9999999, t.stopAtSlide != undefined && t.stopAtSlide > -1 ? t.lastslidetoshow = t.stopAtSlide : t.lastslidetoshow = 999, t.stopLoop = "off", 0 == t.looptogo && (t.stopLoop = "on");
    var i = e.find(".tp-bannertimer");
    e.on("stoptimer", function () {
      var e = jQuery(this).find(".tp-bannertimer");
      e.data("tween").pause(), "on" == t.disableProgressBar && e.css({
        visibility: "hidden"
      }), t.sliderstatus = "paused", _R.unToggleState(t.slidertoggledby);
    }), e.on("starttimer", function () {
      t.forcepause_viatoggle || (1 != t.conthover && 1 != t.videoplaying && t.width > t.hideSliderAtLimit && 1 != t.tonpause && 1 != t.overnav && 1 != t.ssop && (1 === t.noloopanymore || t.viewPort.enable && !t.inviewport || (i.css({
        visibility: "visible"
      }), i.data("tween").resume(), t.sliderstatus = "playing")), "on" == t.disableProgressBar && i.css({
        visibility: "hidden"
      }), _R.toggleState(t.slidertoggledby));
    }), e.on("restarttimer", function () {
      if (!t.forcepause_viatoggle) {
        var e = jQuery(this).find(".tp-bannertimer");
        if (t.mouseoncontainer && "on" == t.navigation.onHoverStop && !_ISM) return !1;
        1 === t.noloopanymore || t.viewPort.enable && !t.inviewport || 1 == t.ssop || (e.css({
          visibility: "visible"
        }), e.data("tween").kill(), e.data("tween", punchgs.TweenLite.fromTo(e, t.delay / 1e3, {
          width: "0%"
        }, {
          force3D: "auto",
          width: "100%",
          ease: punchgs.Linear.easeNone,
          onComplete: n,
          delay: 1
        })), t.sliderstatus = "playing"), "on" == t.disableProgressBar && e.css({
          visibility: "hidden"
        }), _R.toggleState(t.slidertoggledby);
      }
    }), e.on("nulltimer", function () {
      i.data("tween").kill(), i.data("tween", punchgs.TweenLite.fromTo(i, t.delay / 1e3, {
        width: "0%"
      }, {
        force3D: "auto",
        width: "100%",
        ease: punchgs.Linear.easeNone,
        onComplete: n,
        delay: 1
      })), i.data("tween").pause(0), "on" == t.disableProgressBar && i.css({
        visibility: "hidden"
      }), t.sliderstatus = "paused";
    });

    var n = function n() {
      0 == jQuery("body").find(e).length && (removeAllListeners(e, t), clearInterval(t.cdint)), e.trigger("revolution.slide.slideatend"), 1 == e.data("conthover-changed") && (t.conthover = e.data("conthover"), e.data("conthover-changed", 0)), _R.callingNewSlide(t, e, 1);
    };

    i.data("tween", punchgs.TweenLite.fromTo(i, t.delay / 1e3, {
      width: "0%"
    }, {
      force3D: "auto",
      width: "100%",
      ease: punchgs.Linear.easeNone,
      onComplete: n,
      delay: 1
    })), i.data("opt", t), t.slideamount > 1 && (0 != t.stopAfterLoops || 1 != t.stopAtSlide) ? e.trigger("starttimer") : (t.noloopanymore = 1, e.trigger("nulltimer")), e.on("tp-mouseenter", function () {
      t.mouseoncontainer = !0, "on" != t.navigation.onHoverStop || _ISM || (e.trigger("stoptimer"), e.trigger("revolution.slide.onpause"));
    }), e.on("tp-mouseleft", function () {
      t.mouseoncontainer = !1, 1 != e.data("conthover") && "on" == t.navigation.onHoverStop && (1 == t.viewPort.enable && t.inviewport || 0 == t.viewPort.enable) && (e.trigger("revolution.slide.onresume"), e.trigger("starttimer"));
    });
  },
      vis = function () {
    var e,
        t,
        i = {
      hidden: "visibilitychange",
      webkitHidden: "webkitvisibilitychange",
      mozHidden: "mozvisibilitychange",
      msHidden: "msvisibilitychange"
    };

    for (e in i) {
      if (e in document) {
        t = i[e];
        break;
      }
    }

    return function (i) {
      return i && document.addEventListener(t, i), !document[e];
    };
  }(),
      restartOnFocus = function restartOnFocus(e) {
    return e == undefined || e.c == undefined ? !1 : void (1 != e.windowfocused && (e.windowfocused = !0, punchgs.TweenLite.delayedCall(.3, function () {
      "on" == e.fallbacks.nextSlideOnWindowFocus && e.c.revnext(), e.c.revredraw(), "playing" == e.lastsliderstatus && e.c.revresume();
    })));
  },
      lastStatBlur = function lastStatBlur(e) {
    e.windowfocused = !1, e.lastsliderstatus = e.sliderstatus, e.c.revpause();
    var t = e.c.find(".active-revslide .slotholder"),
        i = e.c.find(".processing-revslide .slotholder");
    "on" == i.data("kenburns") && _R.stopKenBurn(i, e), "on" == t.data("kenburns") && _R.stopKenBurn(t, e);
  },
      tabBlurringCheck = function tabBlurringCheck(e, t) {
    var i = document.documentMode === undefined,
        n = window.chrome;
    i && !n ? jQuery(window).on("focusin", function () {
      restartOnFocus(t);
    }).on("focusout", function () {
      lastStatBlur(t);
    }) : window.addEventListener ? (window.addEventListener("focus", function (e) {
      restartOnFocus(t);
    }, !1), window.addEventListener("blur", function (e) {
      lastStatBlur(t);
    }, !1)) : (window.attachEvent("focus", function (e) {
      restartOnFocus(t);
    }), window.attachEvent("blur", function (e) {
      lastStatBlur(t);
    }));
  },
      getUrlVars = function getUrlVars(e) {
    for (var t, i = [], n = window.location.href.slice(window.location.href.indexOf(e) + 1).split("_"), a = 0; a < n.length; a++) {
      n[a] = n[a].replace("%3D", "="), t = n[a].split("="), i.push(t[0]), i[t[0]] = t[1];
    }

    return i;
  };
}(jQuery);

/***/ }),

/***/ "./public/js/revolution-slider/js/jquery.themepunch.tools.min.js":
/*!***********************************************************************!*\
  !*** ./public/js/revolution-slider/js/jquery.themepunch.tools.min.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 27.02.2015
*********************************************/

/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.9
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/
(function (a) {
  if ( true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").jQuery) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    a(jQuery);
  }
})(function (f) {
  var y = "1.6.9",
      p = "left",
      o = "right",
      e = "up",
      x = "down",
      c = "in",
      A = "out",
      m = "none",
      s = "auto",
      l = "swipe",
      t = "pinch",
      B = "tap",
      j = "doubletap",
      b = "longtap",
      z = "hold",
      E = "horizontal",
      u = "vertical",
      i = "all",
      r = 10,
      g = "start",
      k = "move",
      h = "end",
      q = "cancel",
      a = "ontouchstart" in window,
      v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
      d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      C = "TouchSwipe";
  var n = {
    fingers: 1,
    threshold: 75,
    cancelThreshold: null,
    pinchThreshold: 20,
    maxTimeThreshold: null,
    fingerReleaseThreshold: 250,
    longTapThreshold: 500,
    doubleTapThreshold: 200,
    swipe: null,
    swipeLeft: null,
    swipeRight: null,
    swipeUp: null,
    swipeDown: null,
    swipeStatus: null,
    pinchIn: null,
    pinchOut: null,
    pinchStatus: null,
    click: null,
    tap: null,
    doubleTap: null,
    longTap: null,
    hold: null,
    triggerOnTouchEnd: true,
    triggerOnTouchLeave: false,
    allowPageScroll: "auto",
    fallbackToMouseEvents: true,
    excludedElements: "label, button, input, select, textarea, a, .noSwipe",
    preventDefaultEvents: true
  };

  f.fn.swipetp = function (H) {
    var G = f(this),
        F = G.data(C);

    if (F && typeof H === "string") {
      if (F[H]) {
        return F[H].apply(this, Array.prototype.slice.call(arguments, 1));
      } else {
        f.error("Method " + H + " does not exist on jQuery.swipetp");
      }
    } else {
      if (!F && (_typeof(H) === "object" || !H)) {
        return w.apply(this, arguments);
      }
    }

    return G;
  };

  f.fn.swipetp.version = y;
  f.fn.swipetp.defaults = n;
  f.fn.swipetp.phases = {
    PHASE_START: g,
    PHASE_MOVE: k,
    PHASE_END: h,
    PHASE_CANCEL: q
  };
  f.fn.swipetp.directions = {
    LEFT: p,
    RIGHT: o,
    UP: e,
    DOWN: x,
    IN: c,
    OUT: A
  };
  f.fn.swipetp.pageScroll = {
    NONE: m,
    HORIZONTAL: E,
    VERTICAL: u,
    AUTO: s
  };
  f.fn.swipetp.fingers = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    ALL: i
  };

  function w(F) {
    if (F && F.allowPageScroll === undefined && (F.swipe !== undefined || F.swipeStatus !== undefined)) {
      F.allowPageScroll = m;
    }

    if (F.click !== undefined && F.tap === undefined) {
      F.tap = F.click;
    }

    if (!F) {
      F = {};
    }

    F = f.extend({}, f.fn.swipetp.defaults, F);
    return this.each(function () {
      var H = f(this);
      var G = H.data(C);

      if (!G) {
        G = new D(this, F);
        H.data(C, G);
      }
    });
  }

  function D(a5, aw) {
    var aA = a || d || !aw.fallbackToMouseEvents,
        K = aA ? d ? v ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
        az = aA ? d ? v ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
        V = aA ? d ? v ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
        T = aA ? null : "mouseleave",
        aE = d ? v ? "MSPointerCancel" : "pointercancel" : "touchcancel";
    var ah = 0,
        aQ = null,
        ac = 0,
        a2 = 0,
        a0 = 0,
        H = 1,
        ar = 0,
        aK = 0,
        N = null;
    var aS = f(a5);
    var aa = "start";
    var X = 0;
    var aR = null;
    var U = 0,
        a3 = 0,
        a6 = 0,
        ae = 0,
        O = 0;
    var aX = null,
        ag = null;

    try {
      aS.bind(K, aO);
      aS.bind(aE, ba);
    } catch (al) {
      f.error("events not supported " + K + "," + aE + " on jQuery.swipetp");
    }

    this.enable = function () {
      aS.bind(K, aO);
      aS.bind(aE, ba);
      return aS;
    };

    this.disable = function () {
      aL();
      return aS;
    };

    this.destroy = function () {
      aL();
      aS.data(C, null);
      aS = null;
    };

    this.option = function (bd, bc) {
      if (aw[bd] !== undefined) {
        if (bc === undefined) {
          return aw[bd];
        } else {
          aw[bd] = bc;
        }
      } else {
        f.error("Option " + bd + " does not exist on jQuery.swipetp.options");
      }

      return null;
    };

    function aO(be) {
      if (aC()) {
        return;
      }

      if (f(be.target).closest(aw.excludedElements, aS).length > 0) {
        return;
      }

      var bf = be.originalEvent ? be.originalEvent : be;
      var bd,
          bg = bf.touches,
          bc = bg ? bg[0] : bf;
      aa = g;

      if (bg) {
        X = bg.length;
      } else {
        be.preventDefault();
      }

      ah = 0;
      aQ = null;
      aK = null;
      ac = 0;
      a2 = 0;
      a0 = 0;
      H = 1;
      ar = 0;
      aR = ak();
      N = ab();
      S();

      if (!bg || X === aw.fingers || aw.fingers === i || aY()) {
        aj(0, bc);
        U = au();

        if (X == 2) {
          aj(1, bg[1]);
          a2 = a0 = av(aR[0].start, aR[1].start);
        }

        if (aw.swipeStatus || aw.pinchStatus) {
          bd = P(bf, aa);
        }
      } else {
        bd = false;
      }

      if (bd === false) {
        aa = q;
        P(bf, aa);
        return bd;
      } else {
        if (aw.hold) {
          ag = setTimeout(f.proxy(function () {
            aS.trigger("hold", [bf.target]);

            if (aw.hold) {
              bd = aw.hold.call(aS, bf, bf.target);
            }
          }, this), aw.longTapThreshold);
        }

        ap(true);
      }

      return null;
    }

    function a4(bf) {
      var bi = bf.originalEvent ? bf.originalEvent : bf;

      if (aa === h || aa === q || an()) {
        return;
      }

      var be,
          bj = bi.touches,
          bd = bj ? bj[0] : bi;
      var bg = aI(bd);
      a3 = au();

      if (bj) {
        X = bj.length;
      }

      if (aw.hold) {
        clearTimeout(ag);
      }

      aa = k;

      if (X == 2) {
        if (a2 == 0) {
          aj(1, bj[1]);
          a2 = a0 = av(aR[0].start, aR[1].start);
        } else {
          aI(bj[1]);
          a0 = av(aR[0].end, aR[1].end);
          aK = at(aR[0].end, aR[1].end);
        }

        H = a8(a2, a0);
        ar = Math.abs(a2 - a0);
      }

      if (X === aw.fingers || aw.fingers === i || !bj || aY()) {
        aQ = aM(bg.start, bg.end);
        am(bf, aQ);
        ah = aT(bg.start, bg.end);
        ac = aN();
        aJ(aQ, ah);

        if (aw.swipeStatus || aw.pinchStatus) {
          be = P(bi, aa);
        }

        if (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) {
          var bc = true;

          if (aw.triggerOnTouchLeave) {
            var bh = aZ(this);
            bc = F(bg.end, bh);
          }

          if (!aw.triggerOnTouchEnd && bc) {
            aa = aD(k);
          } else {
            if (aw.triggerOnTouchLeave && !bc) {
              aa = aD(h);
            }
          }

          if (aa == q || aa == h) {
            P(bi, aa);
          }
        }
      } else {
        aa = q;
        P(bi, aa);
      }

      if (be === false) {
        aa = q;
        P(bi, aa);
      }
    }

    function M(bc) {
      var bd = bc.originalEvent ? bc.originalEvent : bc,
          be = bd.touches;

      if (be) {
        if (be.length) {
          G();
          return true;
        }
      }

      if (an()) {
        X = ae;
      }

      a3 = au();
      ac = aN();

      if (bb() || !ao()) {
        aa = q;
        P(bd, aa);
      } else {
        if (aw.triggerOnTouchEnd || aw.triggerOnTouchEnd == false && aa === k) {
          bc.preventDefault();
          aa = h;
          P(bd, aa);
        } else {
          if (!aw.triggerOnTouchEnd && a7()) {
            aa = h;
            aG(bd, aa, B);
          } else {
            if (aa === k) {
              aa = q;
              P(bd, aa);
            }
          }
        }
      }

      ap(false);
      return null;
    }

    function ba() {
      X = 0;
      a3 = 0;
      U = 0;
      a2 = 0;
      a0 = 0;
      H = 1;
      S();
      ap(false);
    }

    function L(bc) {
      var bd = bc.originalEvent ? bc.originalEvent : bc;

      if (aw.triggerOnTouchLeave) {
        aa = aD(h);
        P(bd, aa);
      }
    }

    function aL() {
      aS.unbind(K, aO);
      aS.unbind(aE, ba);
      aS.unbind(az, a4);
      aS.unbind(V, M);

      if (T) {
        aS.unbind(T, L);
      }

      ap(false);
    }

    function aD(bg) {
      var bf = bg;
      var be = aB();
      var bd = ao();
      var bc = bb();

      if (!be || bc) {
        bf = q;
      } else {
        if (bd && bg == k && (!aw.triggerOnTouchEnd || aw.triggerOnTouchLeave)) {
          bf = h;
        } else {
          if (!bd && bg == h && aw.triggerOnTouchLeave) {
            bf = q;
          }
        }
      }

      return bf;
    }

    function P(be, bc) {
      var bd,
          bf = be.touches;

      if (J() || W() || Q() || aY()) {
        if (J() || W()) {
          bd = aG(be, bc, l);
        }

        if ((Q() || aY()) && bd !== false) {
          bd = aG(be, bc, t);
        }
      } else {
        if (aH() && bd !== false) {
          bd = aG(be, bc, j);
        } else {
          if (aq() && bd !== false) {
            bd = aG(be, bc, b);
          } else {
            if (ai() && bd !== false) {
              bd = aG(be, bc, B);
            }
          }
        }
      }

      if (bc === q) {
        ba(be);
      }

      if (bc === h) {
        if (bf) {
          if (!bf.length) {
            ba(be);
          }
        } else {
          ba(be);
        }
      }

      return bd;
    }

    function aG(bf, bc, be) {
      var bd;

      if (be == l) {
        aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]);

        if (aw.swipeStatus) {
          bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR);

          if (bd === false) {
            return false;
          }
        }

        if (bc == h && aW()) {
          aS.trigger("swipe", [aQ, ah, ac, X, aR]);

          if (aw.swipe) {
            bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR);

            if (bd === false) {
              return false;
            }
          }

          switch (aQ) {
            case p:
              aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]);

              if (aw.swipeLeft) {
                bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR);
              }

              break;

            case o:
              aS.trigger("swipeRight", [aQ, ah, ac, X, aR]);

              if (aw.swipeRight) {
                bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR);
              }

              break;

            case e:
              aS.trigger("swipeUp", [aQ, ah, ac, X, aR]);

              if (aw.swipeUp) {
                bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR);
              }

              break;

            case x:
              aS.trigger("swipeDown", [aQ, ah, ac, X, aR]);

              if (aw.swipeDown) {
                bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR);
              }

              break;
          }
        }
      }

      if (be == t) {
        aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]);

        if (aw.pinchStatus) {
          bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR);

          if (bd === false) {
            return false;
          }
        }

        if (bc == h && a9()) {
          switch (aK) {
            case c:
              aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]);

              if (aw.pinchIn) {
                bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR);
              }

              break;

            case A:
              aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]);

              if (aw.pinchOut) {
                bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR);
              }

              break;
          }
        }
      }

      if (be == B) {
        if (bc === q || bc === h) {
          clearTimeout(aX);
          clearTimeout(ag);

          if (Z() && !I()) {
            O = au();
            aX = setTimeout(f.proxy(function () {
              O = null;
              aS.trigger("tap", [bf.target]);

              if (aw.tap) {
                bd = aw.tap.call(aS, bf, bf.target);
              }
            }, this), aw.doubleTapThreshold);
          } else {
            O = null;
            aS.trigger("tap", [bf.target]);

            if (aw.tap) {
              bd = aw.tap.call(aS, bf, bf.target);
            }
          }
        }
      } else {
        if (be == j) {
          if (bc === q || bc === h) {
            clearTimeout(aX);
            O = null;
            aS.trigger("doubletap", [bf.target]);

            if (aw.doubleTap) {
              bd = aw.doubleTap.call(aS, bf, bf.target);
            }
          }
        } else {
          if (be == b) {
            if (bc === q || bc === h) {
              clearTimeout(aX);
              O = null;
              aS.trigger("longtap", [bf.target]);

              if (aw.longTap) {
                bd = aw.longTap.call(aS, bf, bf.target);
              }
            }
          }
        }
      }

      return bd;
    }

    function ao() {
      var bc = true;

      if (aw.threshold !== null) {
        bc = ah >= aw.threshold;
      }

      return bc;
    }

    function bb() {
      var bc = false;

      if (aw.cancelThreshold !== null && aQ !== null) {
        bc = aU(aQ) - ah >= aw.cancelThreshold;
      }

      return bc;
    }

    function af() {
      if (aw.pinchThreshold !== null) {
        return ar >= aw.pinchThreshold;
      }

      return true;
    }

    function aB() {
      var bc;

      if (aw.maxTimeThreshold) {
        if (ac >= aw.maxTimeThreshold) {
          bc = false;
        } else {
          bc = true;
        }
      } else {
        bc = true;
      }

      return bc;
    }

    function am(bc, bd) {
      if (aw.preventDefaultEvents === false) {
        return;
      }

      if (aw.allowPageScroll === m) {
        bc.preventDefault();
      } else {
        var be = aw.allowPageScroll === s;

        switch (bd) {
          case p:
            if (aw.swipeLeft && be || !be && aw.allowPageScroll != E) {
              bc.preventDefault();
            }

            break;

          case o:
            if (aw.swipeRight && be || !be && aw.allowPageScroll != E) {
              bc.preventDefault();
            }

            break;

          case e:
            if (aw.swipeUp && be || !be && aw.allowPageScroll != u) {
              bc.preventDefault();
            }

            break;

          case x:
            if (aw.swipeDown && be || !be && aw.allowPageScroll != u) {
              bc.preventDefault();
            }

            break;
        }
      }
    }

    function a9() {
      var bd = aP();
      var bc = Y();
      var be = af();
      return bd && bc && be;
    }

    function aY() {
      return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut);
    }

    function Q() {
      return !!(a9() && aY());
    }

    function aW() {
      var bf = aB();
      var bh = ao();
      var be = aP();
      var bc = Y();
      var bd = bb();
      var bg = !bd && bc && be && bh && bf;
      return bg;
    }

    function W() {
      return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown);
    }

    function J() {
      return !!(aW() && W());
    }

    function aP() {
      return X === aw.fingers || aw.fingers === i || !a;
    }

    function Y() {
      return aR[0].end.x !== 0;
    }

    function a7() {
      return !!aw.tap;
    }

    function Z() {
      return !!aw.doubleTap;
    }

    function aV() {
      return !!aw.longTap;
    }

    function R() {
      if (O == null) {
        return false;
      }

      var bc = au();
      return Z() && bc - O <= aw.doubleTapThreshold;
    }

    function I() {
      return R();
    }

    function ay() {
      return (X === 1 || !a) && (isNaN(ah) || ah < aw.threshold);
    }

    function a1() {
      return ac > aw.longTapThreshold && ah < r;
    }

    function ai() {
      return !!(ay() && a7());
    }

    function aH() {
      return !!(R() && Z());
    }

    function aq() {
      return !!(a1() && aV());
    }

    function G() {
      a6 = au();
      ae = event.touches.length + 1;
    }

    function S() {
      a6 = 0;
      ae = 0;
    }

    function an() {
      var bc = false;

      if (a6) {
        var bd = au() - a6;

        if (bd <= aw.fingerReleaseThreshold) {
          bc = true;
        }
      }

      return bc;
    }

    function aC() {
      return !!(aS.data(C + "_intouch") === true);
    }

    function ap(bc) {
      if (bc === true) {
        aS.bind(az, a4);
        aS.bind(V, M);

        if (T) {
          aS.bind(T, L);
        }
      } else {
        aS.unbind(az, a4, false);
        aS.unbind(V, M, false);

        if (T) {
          aS.unbind(T, L, false);
        }
      }

      aS.data(C + "_intouch", bc === true);
    }

    function aj(bd, bc) {
      var be = bc.identifier !== undefined ? bc.identifier : 0;
      aR[bd].identifier = be;
      aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX;
      aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY;
      return aR[bd];
    }

    function aI(bc) {
      var be = bc.identifier !== undefined ? bc.identifier : 0;
      var bd = ad(be);
      bd.end.x = bc.pageX || bc.clientX;
      bd.end.y = bc.pageY || bc.clientY;
      return bd;
    }

    function ad(bd) {
      for (var bc = 0; bc < aR.length; bc++) {
        if (aR[bc].identifier == bd) {
          return aR[bc];
        }
      }
    }

    function ak() {
      var bc = [];

      for (var bd = 0; bd <= 5; bd++) {
        bc.push({
          start: {
            x: 0,
            y: 0
          },
          end: {
            x: 0,
            y: 0
          },
          identifier: 0
        });
      }

      return bc;
    }

    function aJ(bc, bd) {
      bd = Math.max(bd, aU(bc));
      N[bc].distance = bd;
    }

    function aU(bc) {
      if (N[bc]) {
        return N[bc].distance;
      }

      return undefined;
    }

    function ab() {
      var bc = {};
      bc[p] = ax(p);
      bc[o] = ax(o);
      bc[e] = ax(e);
      bc[x] = ax(x);
      return bc;
    }

    function ax(bc) {
      return {
        direction: bc,
        distance: 0
      };
    }

    function aN() {
      return a3 - U;
    }

    function av(bf, be) {
      var bd = Math.abs(bf.x - be.x);
      var bc = Math.abs(bf.y - be.y);
      return Math.round(Math.sqrt(bd * bd + bc * bc));
    }

    function a8(bc, bd) {
      var be = bd / bc * 1;
      return be.toFixed(2);
    }

    function at() {
      if (H < 1) {
        return A;
      } else {
        return c;
      }
    }

    function aT(bd, bc) {
      return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)));
    }

    function aF(bf, bd) {
      var bc = bf.x - bd.x;
      var bh = bd.y - bf.y;
      var be = Math.atan2(bh, bc);
      var bg = Math.round(be * 180 / Math.PI);

      if (bg < 0) {
        bg = 360 - Math.abs(bg);
      }

      return bg;
    }

    function aM(bd, bc) {
      var be = aF(bd, bc);

      if (be <= 45 && be >= 0) {
        return p;
      } else {
        if (be <= 360 && be >= 315) {
          return p;
        } else {
          if (be >= 135 && be <= 225) {
            return o;
          } else {
            if (be > 45 && be < 135) {
              return x;
            } else {
              return e;
            }
          }
        }
      }
    }

    function au() {
      var bc = new Date();
      return bc.getTime();
    }

    function aZ(bc) {
      bc = f(bc);
      var be = bc.offset();
      var bd = {
        left: be.left,
        right: be.left + bc.outerWidth(),
        top: be.top,
        bottom: be.top + bc.outerHeight()
      };
      return bd;
    }

    function F(bc, bd) {
      return bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom;
    }
  }
});

if (typeof console === 'undefined') {
  var console = {};

  console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function () {};
}

if (window.tplogs == true) try {
  console.groupCollapsed("ThemePunch GreenSocks Logs");
} catch (e) {}
var oldgs = window.GreenSockGlobals;
oldgs_queue = window._gsQueue;
var punchgs = window.GreenSockGlobals = {};
if (window.tplogs == true) try {
  console.info("Build GreenSock SandBox for ThemePunch Plugins");
  console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
} catch (e) {}
/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-03
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

(function (t, e) {
  "use strict";

  var i = t.GreenSockGlobals = t.GreenSockGlobals || t;

  if (!i.TweenLite) {
    var s,
        r,
        n,
        a,
        o,
        l = function l(t) {
      var e,
          s = t.split("."),
          r = i;

      for (e = 0; s.length > e; e++) {
        r[s[e]] = r = r[s[e]] || {};
      }

      return r;
    },
        h = l("com.greensock"),
        _ = 1e-10,
        u = function u(t) {
      var e,
          i = [],
          s = t.length;

      for (e = 0; e !== s; i.push(t[e++])) {
        ;
      }

      return i;
    },
        f = function f() {},
        c = function () {
      var t = Object.prototype.toString,
          e = t.call([]);
      return function (i) {
        return null != i && (i instanceof Array || "object" == _typeof(i) && !!i.push && t.call(i) === e);
      };
    }(),
        m = {},
        p = function p(s, r, n, a) {
      this.sc = m[s] ? m[s].sc : [], m[s] = this, this.gsClass = null, this.func = n;
      var o = [];
      this.check = function (h) {
        for (var _, u, f, c, d, v = r.length, g = v; --v > -1;) {
          (_ = m[r[v]] || new p(r[v], [])).gsClass ? (o[v] = _.gsClass, g--) : h && _.sc.push(this);
        }

        if (0 === g && n) for (u = ("com.greensock." + s).split("."), f = u.pop(), c = l(u.join("."))[f] = this.gsClass = n.apply(n, o), a && (i[f] = c, d =  true && module.exports, !d && "function" == "function" && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
          return c;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : s === e && d && (module.exports = c)), v = 0; this.sc.length > v; v++) {
          this.sc[v].check();
        }
      }, this.check(!0);
    },
        d = t._gsDefine = function (t, e, i, s) {
      return new p(t, e, i, s);
    },
        v = h._class = function (t, e, i) {
      return e = e || function () {}, d(t, [], function () {
        return e;
      }, i), e;
    };

    d.globals = i;

    var g = [0, 0, 1, 1],
        T = [],
        y = v("easing.Ease", function (t, e, i, s) {
      this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? g.concat(e) : g;
    }, !0),
        w = y.map = {},
        P = y.register = function (t, e, i, s) {
      for (var r, n, a, o, l = e.split(","), _ = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;) {
        for (n = l[_], r = s ? v("easing." + n, null, !0) : h.easing[n] || {}, a = u.length; --a > -1;) {
          o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t();
        }
      }
    };

    for (n = y.prototype, n._calcEnd = !1, n.getRatio = function (t) {
      if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
      var e = this._type,
          i = this._power,
          s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
      return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2;
    }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) {
      n = s[r] + ",Power" + r, P(new y(null, null, 1, r), n, "easeOut", !0), P(new y(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), P(new y(null, null, 3, r), n, "easeInOut");
    }

    w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
    var b = v("events.EventDispatcher", function (t) {
      this._listeners = {}, this._eventTarget = t || this;
    });
    n = b.prototype, n.addEventListener = function (t, e, i, s, r) {
      r = r || 0;
      var n,
          l,
          h = this._listeners[t],
          _ = 0;

      for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) {
        n = h[l], n.c === e && n.s === i ? h.splice(l, 1) : 0 === _ && r > n.pr && (_ = l + 1);
      }

      h.splice(_, 0, {
        c: e,
        s: i,
        up: s,
        pr: r
      }), this !== a || o || a.wake();
    }, n.removeEventListener = function (t, e) {
      var i,
          s = this._listeners[t];
      if (s) for (i = s.length; --i > -1;) {
        if (s[i].c === e) return s.splice(i, 1), void 0;
      }
    }, n.dispatchEvent = function (t) {
      var e,
          i,
          s,
          r = this._listeners[t];
      if (r) for (e = r.length, i = this._eventTarget; --e > -1;) {
        s = r[e], s && (s.up ? s.c.call(s.s || i, {
          type: t,
          target: i
        }) : s.c.call(s.s || i));
      }
    };

    var k = t.requestAnimationFrame,
        A = t.cancelAnimationFrame,
        S = Date.now || function () {
      return new Date().getTime();
    },
        x = S();

    for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !k;) {
      k = t[s[r] + "RequestAnimationFrame"], A = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
    }

    v("Ticker", function (t, e) {
      var i,
          s,
          r,
          n,
          l,
          h = this,
          u = S(),
          c = e !== !1 && k,
          m = 500,
          p = 33,
          d = "tick",
          v = function v(t) {
        var e,
            a,
            o = S() - x;
        o > m && (u += o - p), x += o, h.time = (x - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(v)), a && h.dispatchEvent(d);
      };

      b.call(h), h.time = h.frame = 0, h.tick = function () {
        v(!0);
      }, h.lagSmoothing = function (t, e) {
        m = t || 1 / _, p = Math.min(e, m, 0);
      }, h.sleep = function () {
        null != r && (c && A ? A(r) : clearTimeout(r), s = f, r = null, h === a && (o = !1));
      }, h.wake = function () {
        null !== r ? h.sleep() : h.frame > 10 && (x = S() - m + 5), s = 0 === i ? f : c && k ? k : function (t) {
          return setTimeout(t, 0 | 1e3 * (l - h.time) + 1);
        }, h === a && (o = !0), v(2);
      }, h.fps = function (t) {
        return arguments.length ? (i = t, n = 1 / (i || 60), l = this.time + n, h.wake(), void 0) : i;
      }, h.useRAF = function (t) {
        return arguments.length ? (h.sleep(), c = t, h.fps(i), void 0) : c;
      }, h.fps(t), setTimeout(function () {
        c && 5 > h.frame && h.useRAF(!1);
      }, 1500);
    }), n = h.Ticker.prototype = new h.events.EventDispatcher(), n.constructor = h.Ticker;
    var R = v("core.Animation", function (t, e) {
      if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, H) {
        o || a.wake();
        var i = this.vars.useFrames ? K : H;
        i.add(this, i._time), this.vars.paused && this.paused(!0);
      }
    });
    a = R.ticker = new h.Ticker(), n = R.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;

    var C = function C() {
      o && S() - x > 2e3 && a.wake(), setTimeout(C, 2e3);
    };

    C(), n.play = function (t, e) {
      return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
    }, n.pause = function (t, e) {
      return null != t && this.seek(t, e), this.paused(!0);
    }, n.resume = function (t, e) {
      return null != t && this.seek(t, e), this.paused(!1);
    }, n.seek = function (t, e) {
      return this.totalTime(Number(t), e !== !1);
    }, n.restart = function (t, e) {
      return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0);
    }, n.reverse = function (t, e) {
      return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
    }, n.render = function () {}, n.invalidate = function () {
      return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this;
    }, n.isActive = function () {
      var t,
          e = this._timeline,
          i = this._startTime;
      return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t;
    }, n._enabled = function (t, e) {
      return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1;
    }, n._kill = function () {
      return this._enabled(!1, !1);
    }, n.kill = function (t, e) {
      return this._kill(t, e), this;
    }, n._uncache = function (t) {
      for (var e = t ? this : this.timeline; e;) {
        e._dirty = !0, e = e.timeline;
      }

      return this;
    }, n._swapSelfInParams = function (t) {
      for (var e = t.length, i = t.concat(); --e > -1;) {
        "{self}" === t[e] && (i[e] = this);
      }

      return i;
    }, n._callback = function (t) {
      var e = this.vars;
      e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || T);
    }, n.eventCallback = function (t, e, i, s) {
      if ("on" === (t || "").substr(0, 2)) {
        var r = this.vars;
        if (1 === arguments.length) return r[t];
        null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e);
      }

      return this;
    }, n.delay = function (t) {
      return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay;
    }, n.duration = function (t) {
      return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration);
    }, n.totalDuration = function (t) {
      return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration;
    }, n.time = function (t, e) {
      return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time;
    }, n.totalTime = function (t, e, i) {
      if (o || a.wake(), !arguments.length) return this._totalTime;

      if (this._timeline) {
        if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
          this._dirty && this.totalDuration();
          var s = this._totalDuration,
              r = this._timeline;
          if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;) {
            r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline;
          }
        }

        this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (z.length && V(), this.render(t, e, !1), z.length && V());
      }

      return this;
    }, n.progress = n.totalProgress = function (t, e) {
      var i = this.duration();
      return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio;
    }, n.startTime = function (t) {
      return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime;
    }, n.endTime = function (t) {
      return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale;
    }, n.timeScale = function (t) {
      if (!arguments.length) return this._timeScale;

      if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
        var e = this._pauseTime,
            i = e || 0 === e ? e : this._timeline.totalTime();
        this._startTime = i - (i - this._startTime) * this._timeScale / t;
      }

      return this._timeScale = t, this._uncache(!1);
    }, n.reversed = function (t) {
      return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed;
    }, n.paused = function (t) {
      if (!arguments.length) return this._paused;
      var e,
          i,
          s = this._timeline;
      return t != this._paused && s && (o || t || a.wake(), e = s.rawTime(), i = e - this._pauseTime, !t && s.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = s.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this;
    };
    var D = v("core.SimpleTimeline", function (t) {
      R.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0;
    });
    n = D.prototype = new R(), n.constructor = D, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function (t, e) {
      var i, s;
      if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren) for (s = t._startTime; i && i._startTime > s;) {
        i = i._prev;
      }
      return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this;
    }, n._remove = function (t, e) {
      return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this;
    }, n.render = function (t, e, i) {
      var s,
          r = this._first;

      for (this._totalTime = this._time = this._rawPrevTime = t; r;) {
        s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s;
      }
    }, n.rawTime = function () {
      return o || a.wake(), this._totalTime;
    };

    var I = v("TweenLite", function (e, i, s) {
      if (R.call(this, i, s), this.render = I.prototype.render, null == e) throw "Cannot tween a null target.";
      this.target = e = "string" != typeof e ? e : I.selector(e) || e;
      var r,
          n,
          a,
          o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
          l = this.vars.overwrite;
      if (this._overwrite = l = null == l ? $[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : $[l], (o || e instanceof Array || e.push && c(e)) && "number" != typeof e[0]) for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) {
        n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = W(n, this, !1), 1 === l && this._siblings[r].length > 1 && Y(n, this, null, 1, this._siblings[r])) : (n = a[r--] = I.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
      } else this._propLookup = {}, this._siblings = W(e, this, !1), 1 === l && this._siblings.length > 1 && Y(e, this, null, 1, this._siblings);
      (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay));
    }, !0),
        E = function E(e) {
      return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType);
    },
        O = function O(t, e) {
      var i,
          s = {};

      for (i in t) {
        M[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!Q[i] || Q[i] && Q[i]._autoCSS) || (s[i] = t[i], delete t[i]);
      }

      t.css = s;
    };

    n = I.prototype = new R(), n.constructor = I, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, I.version = "1.18.0", I.defaultEase = n._ease = new y(null, null, 1, 1), I.defaultOverwrite = "auto", I.ticker = a, I.autoSleep = 120, I.lagSmoothing = function (t, e) {
      a.lagSmoothing(t, e);
    }, I.selector = t.$ || t.jQuery || function (e) {
      var i = t.$ || t.jQuery;
      return i ? (I.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
    };

    var z = [],
        F = {},
        L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        N = function N(t) {
      for (var e, i = this._firstPT, s = 1e-6; i;) {
        e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next;
      }
    },
        U = function U(t, e, i, s) {
      var r,
          n,
          a,
          o,
          l,
          h,
          _,
          u = [t, e],
          f = 0,
          c = "",
          m = 0;

      for (u.start = t, i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(L) || [], n = e.match(L) || [], s && (s._next = null, s.blob = 1, u._firstPT = s), l = n.length, o = 0; l > o; o++) {
        _ = n[o], h = e.substr(f, e.indexOf(_, f) - f), c += h || !o ? h : ",", f += h.length, m ? m = (m + 1) % 5 : "rgba(" === h.substr(-5) && (m = 1), _ === r[o] || o >= r.length ? c += _ : (c && (u.push(c), c = ""), a = parseFloat(r[o]), u.push(a), u._firstPT = {
          _next: u._firstPT,
          t: u,
          p: u.length - 1,
          s: a,
          c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
          f: 0,
          r: m && 4 > m
        }), f += _.length;
      }

      return c += e.substr(f), c && u.push(c), u.setRatio = N, u;
    },
        j = function j(t, e, i, s, r, n, a, o) {
      var l,
          h,
          _ = "get" === i ? t[e] : i,
          u = _typeof(t[e]),
          f = "string" == typeof s && "=" === s.charAt(1),
          c = {
        t: t,
        p: e,
        s: _,
        f: "function" === u,
        pg: 0,
        n: r || e,
        r: n,
        pr: 0,
        c: f ? parseInt(s.charAt(0) + "1", 10) * parseFloat(s.substr(2)) : parseFloat(s) - _ || 0
      };

      return "number" !== u && ("function" === u && "get" === i && (h = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), c.s = _ = a ? t[h](a) : t[h]()), "string" == typeof _ && (a || isNaN(_)) ? (c.fp = a, l = U(_, s, o || I.defaultStringFilter, c), c = {
        t: l,
        p: "setRatio",
        s: 0,
        c: 1,
        f: 2,
        pg: 0,
        n: r || e,
        pr: 0
      }) : f || (c.c = parseFloat(s) - parseFloat(_) || 0)), c.c ? ((c._next = this._firstPT) && (c._next._prev = c), this._firstPT = c, c) : void 0;
    },
        G = I._internals = {
      isArray: c,
      isSelector: E,
      lazyTweens: z,
      blobDif: U
    },
        Q = I._plugins = {},
        q = G.tweenLookup = {},
        B = 0,
        M = G.reservedProps = {
      ease: 1,
      delay: 1,
      overwrite: 1,
      onComplete: 1,
      onCompleteParams: 1,
      onCompleteScope: 1,
      useFrames: 1,
      runBackwards: 1,
      startAt: 1,
      onUpdate: 1,
      onUpdateParams: 1,
      onUpdateScope: 1,
      onStart: 1,
      onStartParams: 1,
      onStartScope: 1,
      onReverseComplete: 1,
      onReverseCompleteParams: 1,
      onReverseCompleteScope: 1,
      onRepeat: 1,
      onRepeatParams: 1,
      onRepeatScope: 1,
      easeParams: 1,
      yoyo: 1,
      immediateRender: 1,
      repeat: 1,
      repeatDelay: 1,
      data: 1,
      paused: 1,
      reversed: 1,
      autoCSS: 1,
      lazy: 1,
      onOverwrite: 1,
      callbackScope: 1,
      stringFilter: 1
    },
        $ = {
      none: 0,
      all: 1,
      auto: 2,
      concurrent: 3,
      allOnStart: 4,
      preexisting: 5,
      "true": 1,
      "false": 0
    },
        K = R._rootFramesTimeline = new D(),
        H = R._rootTimeline = new D(),
        J = 30,
        V = G.lazyRender = function () {
      var t,
          e = z.length;

      for (F = {}; --e > -1;) {
        t = z[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
      }

      z.length = 0;
    };

    H._startTime = a.time, K._startTime = a.frame, H._active = K._active = !0, setTimeout(V, 1), R._updateRoot = I.render = function () {
      var t, e, i;

      if (z.length && V(), H.render((a.time - H._startTime) * H._timeScale, !1, !1), K.render((a.frame - K._startTime) * K._timeScale, !1, !1), z.length && V(), a.frame >= J) {
        J = a.frame + (parseInt(I.autoSleep, 10) || 120);

        for (i in q) {
          for (e = q[i].tweens, t = e.length; --t > -1;) {
            e[t]._gc && e.splice(t, 1);
          }

          0 === e.length && delete q[i];
        }

        if (i = H._first, (!i || i._paused) && I.autoSleep && !K._first && 1 === a._listeners.tick.length) {
          for (; i && i._paused;) {
            i = i._next;
          }

          i || a.sleep();
        }
      }
    }, a.addEventListener("tick", R._updateRoot);

    var W = function W(t, e, i) {
      var s,
          r,
          n = t._gsTweenID;
      if (q[n || (t._gsTweenID = n = "t" + B++)] || (q[n] = {
        target: t,
        tweens: []
      }), e && (s = q[n].tweens, s[r = s.length] = e, i)) for (; --r > -1;) {
        s[r] === e && s.splice(r, 1);
      }
      return q[n].tweens;
    },
        X = function X(t, e, i, s) {
      var r,
          n,
          a = t.vars.onOverwrite;
      return a && (r = a(t, e, i, s)), a = I.onOverwrite, a && (n = a(t, e, i, s)), r !== !1 && n !== !1;
    },
        Y = function Y(t, e, i, s, r) {
      var n, a, o, l;

      if (1 === s || s >= 4) {
        for (l = r.length, n = 0; l > n; n++) {
          if ((o = r[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);else if (5 === s) break;
        }

        return a;
      }

      var h,
          u = e._startTime + _,
          f = [],
          c = 0,
          m = 0 === e._duration;

      for (n = r.length; --n > -1;) {
        (o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || Z(e, 0, m), 0 === Z(o, h, m) && (f[c++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((m || !o._initted) && 2e-10 >= u - o._startTime || (f[c++] = o)));
      }

      for (n = c; --n > -1;) {
        if (o = f[n], 2 === s && o._kill(i, t, e) && (a = !0), 2 !== s || !o._firstPT && o._initted) {
          if (2 !== s && !X(o, e)) continue;
          o._enabled(!1, !1) && (a = !0);
        }
      }

      return a;
    },
        Z = function Z(t, e, i) {
      for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
        s = s._timeline;
      }

      return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _;
    };

    n._init = function () {
      var t,
          e,
          i,
          s,
          r,
          n = this.vars,
          a = this._overwrittenProps,
          o = this._duration,
          l = !!n.immediateRender,
          h = n.ease;

      if (n.startAt) {
        this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};

        for (s in n.startAt) {
          r[s] = n.startAt[s];
        }

        if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = I.to(this.target, 0, r), l) if (this._time > 0) this._startAt = null;else if (0 !== o) return;
      } else if (n.runBackwards && 0 !== o) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;else {
        0 !== this._time && (l = !1), i = {};

        for (s in n) {
          M[s] && "autoCSS" !== s || (i[s] = n[s]);
        }

        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && n.lazy !== !1, i.immediateRender = l, this._startAt = I.to(this.target, 0, i), l) {
          if (0 === this._time) return;
        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null);
      }

      if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, n.easeParams) : w[h] || I.defaultEase : I.defaultEase, n.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (t = this._targets.length; --t > -1;) {
        this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
      } else e = this._initProps(this.target, this._propLookup, this._siblings, a);
      if (e && I._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards) for (i = this._firstPT; i;) {
        i.s += i.c, i.c = -i.c, i = i._next;
      }
      this._onUpdate = n.onUpdate, this._initted = !0;
    }, n._initProps = function (e, i, s, r) {
      var n, a, o, l, h, _;

      if (null == e) return !1;
      F[e._gsTweenID] && V(), this.vars.css || e.style && e !== t && e.nodeType && Q.css && this.vars.autoCSS !== !1 && O(this.vars, e);

      for (n in this.vars) {
        if (_ = this.vars[n], M[n]) _ && (_ instanceof Array || _.push && c(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));else if (Q[n] && (l = new Q[n]())._onInitTween(e, this.vars[n], this)) {
          for (this._firstPT = h = {
            _next: this._firstPT,
            t: l,
            p: "setRatio",
            s: 0,
            c: 1,
            f: 1,
            n: n,
            pg: 1,
            pr: l._priority
          }, a = l._overwriteProps.length; --a > -1;) {
            i[l._overwriteProps[a]] = this._firstPT;
          }

          (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h);
        } else i[n] = j.call(this, e, n, "get", _, n, 0, null, this.vars.stringFilter);
      }

      return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && Y(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (F[e._gsTweenID] = !0), o);
    }, n.render = function (t, e, i) {
      var s,
          r,
          n,
          a,
          o = this._time,
          l = this._duration,
          h = this._rawPrevTime;
      if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === _ && "isPause" !== this.data) && h !== t && (i = !0, h > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : _);else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (r = "onReverseComplete", s = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== _ || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : _)), this._initted || (i = !0);else if (this._totalTime = this._time = t, this._easeType) {
        var u = t / l,
            f = this._easeType,
            c = this._easePower;
        (1 === f || 3 === f && u >= .5) && (u = 1 - u), 3 === f && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === f ? 1 - u : 2 === f ? u : .5 > t / l ? u / 2 : 1 - u / 2;
      } else this.ratio = this._ease.getRatio(t / l);

      if (this._time !== o || i) {
        if (!this._initted) {
          if (this._init(), !this._initted || this._gc) return;
          if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, z.push(this), this._lazy = [t, e], void 0;
          this._time && !s ? this.ratio = this._ease.getRatio(this._time / l) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
        }

        for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), n = this._firstPT; n;) {
          n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
        }

        this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0));
      }
    }, n._kill = function (t, e, i) {
      if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
      e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;

      var s,
          r,
          n,
          a,
          o,
          l,
          h,
          _,
          u,
          f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;

      if ((c(e) || E(e)) && "number" != typeof e[0]) for (s = e.length; --s > -1;) {
        this._kill(t, e[s], i) && (l = !0);
      } else {
        if (this._targets) {
          for (s = this._targets.length; --s > -1;) {
            if (e === this._targets[s]) {
              o = this._propLookup[s] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[s] = t ? this._overwrittenProps[s] || {} : "all";
              break;
            }
          }
        } else {
          if (e !== this.target) return !1;
          o = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all";
        }

        if (o) {
          if (h = t || o, _ = t !== r && "all" !== r && t !== o && ("object" != _typeof(t) || !t._tempKill), i && (I.onOverwrite || this.vars.onOverwrite)) {
            for (n in h) {
              o[n] && (u || (u = []), u.push(n));
            }

            if ((u || !t) && !X(this, i, e, u)) return !1;
          }

          for (n in h) {
            (a = o[n]) && (f && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), _ && (r[n] = 1);
          }

          !this._firstPT && this._initted && this._enabled(!1, !1);
        }
      }
      return l;
    }, n.invalidate = function () {
      return this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], R.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -_, this.render(-this._delay)), this;
    }, n._enabled = function (t, e) {
      if (o || a.wake(), t && this._gc) {
        var i,
            s = this._targets;
        if (s) for (i = s.length; --i > -1;) {
          this._siblings[i] = W(s[i], this, !0);
        } else this._siblings = W(this.target, this, !0);
      }

      return R.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? I._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1;
    }, I.to = function (t, e, i) {
      return new I(t, e, i);
    }, I.from = function (t, e, i) {
      return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new I(t, e, i);
    }, I.fromTo = function (t, e, i, s) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new I(t, e, s);
    }, I.delayedCall = function (t, e, i, s, r) {
      return new I(e, 0, {
        delay: t,
        onComplete: e,
        onCompleteParams: i,
        callbackScope: s,
        onReverseComplete: e,
        onReverseCompleteParams: i,
        immediateRender: !1,
        lazy: !1,
        useFrames: r,
        overwrite: 0
      });
    }, I.set = function (t, e) {
      return new I(t, 0, e);
    }, I.getTweensOf = function (t, e) {
      if (null == t) return [];
      t = "string" != typeof t ? t : I.selector(t) || t;
      var i, s, r, n;

      if ((c(t) || E(t)) && "number" != typeof t[0]) {
        for (i = t.length, s = []; --i > -1;) {
          s = s.concat(I.getTweensOf(t[i], e));
        }

        for (i = s.length; --i > -1;) {
          for (n = s[i], r = i; --r > -1;) {
            n === s[r] && s.splice(i, 1);
          }
        }
      } else for (s = W(t).concat(), i = s.length; --i > -1;) {
        (s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
      }

      return s;
    }, I.killTweensOf = I.killDelayedCallsTo = function (t, e, i) {
      "object" == _typeof(e) && (i = e, e = !1);

      for (var s = I.getTweensOf(t, e), r = s.length; --r > -1;) {
        s[r]._kill(i, t);
      }
    };
    var te = v("plugins.TweenPlugin", function (t, e) {
      this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = te.prototype;
    }, !0);

    if (n = te.prototype, te.version = "1.18.0", te.API = 2, n._firstPT = null, n._addTween = j, n.setRatio = N, n._kill = function (t) {
      var e,
          i = this._overwriteProps,
          s = this._firstPT;
      if (null != t[this._propName]) this._overwriteProps = [];else for (e = i.length; --e > -1;) {
        null != t[i[e]] && i.splice(e, 1);
      }

      for (; s;) {
        null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
      }

      return !1;
    }, n._roundProps = function (t, e) {
      for (var i = this._firstPT; i;) {
        (t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next;
      }
    }, I._onPluginEvent = function (t, e) {
      var i,
          s,
          r,
          n,
          a,
          o = e._firstPT;

      if ("_onInitAllProps" === t) {
        for (; o;) {
          for (a = o._next, s = r; s && s.pr > o.pr;) {
            s = s._next;
          }

          (o._prev = s ? s._prev : n) ? o._prev._next = o : r = o, (o._next = s) ? s._prev = o : n = o, o = a;
        }

        o = e._firstPT = r;
      }

      for (; o;) {
        o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
      }

      return i;
    }, te.activate = function (t) {
      for (var e = t.length; --e > -1;) {
        t[e].API === te.API && (Q[new t[e]()._propName] = t[e]);
      }

      return !0;
    }, d.plugin = function (t) {
      if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
      var e,
          i = t.propName,
          s = t.priority || 0,
          r = t.overwriteProps,
          n = {
        init: "_onInitTween",
        set: "setRatio",
        kill: "_kill",
        round: "_roundProps",
        initAll: "_onInitAllProps"
      },
          a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
        te.call(this, i, s), this._overwriteProps = r || [];
      }, t.global === !0),
          o = a.prototype = new te(i);
      o.constructor = a, a.API = t.API;

      for (e in n) {
        "function" == typeof t[e] && (o[n[e]] = t[e]);
      }

      return a.version = t.version, te.activate([a]), a;
    }, s = t._gsQueue) {
      for (r = 0; s.length > r; r++) {
        s[r]();
      }

      for (n in m) {
        m[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n);
      }
    }

    o = !1;
  }
})( true && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite");
/*!
 * VERSION: 1.18.0
 * DATE: 2015-08-29
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */


var _gsScope =  true && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
    var s = function s(t) {
      e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
      var i,
          s,
          r = this.vars;

      for (s in r) {
        i = r[s], l(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
      }

      l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
    },
        r = 1e-10,
        n = i._internals,
        a = s._internals = {},
        o = n.isSelector,
        l = n.isArray,
        h = n.lazyTweens,
        _ = n.lazyRender,
        u = _gsScope._gsDefine.globals,
        f = function f(t) {
      var e,
          i = {};

      for (e in t) {
        i[e] = t[e];
      }

      return i;
    },
        c = function c(t, e, i) {
      var s,
          r,
          n = t.cycle;

      for (s in n) {
        r = n[s], t[s] = "function" == typeof r ? r.call(e[i], i) : r[i % r.length];
      }

      delete t.cycle;
    },
        p = a.pauseCallback = function () {},
        m = function m(t) {
      var e,
          i = [],
          s = t.length;

      for (e = 0; e !== s; i.push(t[e++])) {
        ;
      }

      return i;
    },
        d = s.prototype = new e();

    return s.version = "1.18.0", d.constructor = s, d.kill()._gc = d._forcingPlayhead = d._hasPause = !1, d.to = function (t, e, s, r) {
      var n = s.repeat && u.TweenMax || i;
      return e ? this.add(new n(t, e, s), r) : this.set(t, s, r);
    }, d.from = function (t, e, s, r) {
      return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r);
    }, d.fromTo = function (t, e, s, r, n) {
      var a = r.repeat && u.TweenMax || i;
      return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n);
    }, d.staggerTo = function (t, e, r, n, a, l, h, _) {
      var u,
          p,
          d = new s({
        onComplete: l,
        onCompleteParams: h,
        callbackScope: _,
        smoothChildTiming: this.smoothChildTiming
      }),
          g = r.cycle;

      for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, 0 > n && (t = m(t), t.reverse(), n *= -1), p = 0; t.length > p; p++) {
        u = f(r), u.startAt && (u.startAt = f(u.startAt), u.startAt.cycle && c(u.startAt, t, p)), g && c(u, t, p), d.to(t[p], e, u, p * n);
      }

      return this.add(d, a);
    }, d.staggerFrom = function (t, e, i, s, r, n, a, o) {
      return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o);
    }, d.staggerFromTo = function (t, e, i, s, r, n, a, o, l) {
      return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, l);
    }, d.call = function (t, e, s, r) {
      return this.add(i.delayedCall(0, t, e, s), r);
    }, d.set = function (t, e, s) {
      return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s);
    }, s.exportRoot = function (t, e) {
      t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
      var r,
          n,
          a = new s(t),
          o = a._timeline;

      for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) {
        n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
      }

      return o.add(a, 0), a;
    }, d.add = function (r, n, a, o) {
      var h, _, u, f, c, p;

      if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
        if (r instanceof Array || r && r.push && l(r)) {
          for (a = a || "normal", o = o || 0, h = n, _ = r.length, u = 0; _ > u; u++) {
            l(f = r[u]) && (f = new s({
              tweens: f
            })), this.add(f, h), "string" != typeof f && "function" != typeof f && ("sequence" === a ? h = f._startTime + f.totalDuration() / f._timeScale : "start" === a && (f._startTime -= f.delay())), h += o;
          }

          return this._uncache(!0);
        }

        if ("string" == typeof r) return this.addLabel(r, n);
        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
        r = i.delayedCall(0, r);
      }

      if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (c = this, p = c.rawTime() > r._startTime; c._timeline;) {
        p && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
      }
      return this;
    }, d.remove = function (e) {
      if (e instanceof t) {
        this._remove(e, !1);

        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this;
      }

      if (e instanceof Array || e && e.push && l(e)) {
        for (var s = e.length; --s > -1;) {
          this.remove(e[s]);
        }

        return this;
      }

      return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e);
    }, d._remove = function (t, i) {
      e.prototype._remove.call(this, t, i);

      var s = this._last;
      return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this;
    }, d.append = function (t, e) {
      return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
    }, d.insert = d.insertMultiple = function (t, e, i, s) {
      return this.add(t, e || 0, i, s);
    }, d.appendMultiple = function (t, e, i, s) {
      return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s);
    }, d.addLabel = function (t, e) {
      return this._labels[t] = this._parseTimeOrLabel(e), this;
    }, d.addPause = function (t, e, s, r) {
      var n = i.delayedCall(0, p, s, r || this);
      return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t);
    }, d.removeLabel = function (t) {
      return delete this._labels[t], this;
    }, d.getLabelTime = function (t) {
      return null != this._labels[t] ? this._labels[t] : -1;
    }, d._parseTimeOrLabel = function (e, i, s, r) {
      var n;
      if (r instanceof t && r.timeline === this) this.remove(r);else if (r && (r instanceof Array || r.push && l(r))) for (n = r.length; --n > -1;) {
        r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
      }
      if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
      if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());else {
        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration();
      }
      return Number(e) + i;
    }, d.seek = function (t, e) {
      return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1);
    }, d.stop = function () {
      return this.paused(!0);
    }, d.gotoAndPlay = function (t, e) {
      return this.play(t, e);
    }, d.gotoAndStop = function (t, e) {
      return this.pause(t, e);
    }, d.render = function (t, e, i) {
      this._gc && this._enabled(!0, !1);
      var s,
          n,
          a,
          o,
          l,
          u,
          f = this._dirty ? this.totalDuration() : this._totalDuration,
          c = this._time,
          p = this._startTime,
          m = this._timeScale,
          d = this._paused;
      if (t >= f) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = f + 1e-4;else if (1e-7 > t) {
        if (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = n = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;else {
          if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && n) for (s = this._first; s && 0 === s._startTime;) {
            s._duration || (n = !1), s = s._next;
          }
          t = 0, this._initted || (l = !0);
        }
      } else {
        if (this._hasPause && !this._forcingPlayhead && !e) {
          if (t >= c) for (s = this._first; s && t >= s._startTime && !u;) {
            s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s), s = s._next;
          } else for (s = this._last; s && s._startTime >= t && !u;) {
            s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s), s = s._prev;
          }
          u && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay));
        }

        this._totalTime = this._time = this._rawPrevTime = t;
      }

      if (this._time !== c && this._first || i || l || u) {
        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= c) for (s = this._first; s && (a = s._next, !this._paused || d);) {
          (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (u === s && this.pause(), s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
        } else for (s = this._last; s && (a = s._prev, !this._paused || d);) {
          if (s._active || c >= s._startTime && !s._paused && !s._gc) {
            if (u === s) {
              for (u = s._prev; u && u.endTime() > this._time;) {
                u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
              }

              u = null, this.pause();
            }

            s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i);
          }

          s = a;
        }
        this._onUpdate && (e || (h.length && _(), this._callback("onUpdate"))), o && (this._gc || (p === this._startTime || m !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (n && (h.length && _(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)));
      }
    }, d._hasPausedChild = function () {
      for (var t = this._first; t;) {
        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
        t = t._next;
      }

      return !1;
    }, d.getChildren = function (t, e, s, r) {
      r = r || -9999999999;

      for (var n = [], a = this._first, o = 0; a;) {
        r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
      }

      return n;
    }, d.getTweensOf = function (t, e) {
      var s,
          r,
          n = this._gc,
          a = [],
          o = 0;

      for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;) {
        (s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
      }

      return n && this._enabled(!1, !0), a;
    }, d.recent = function () {
      return this._recent;
    }, d._contains = function (t) {
      for (var e = t.timeline; e;) {
        if (e === this) return !0;
        e = e.timeline;
      }

      return !1;
    }, d.shiftChildren = function (t, e, i) {
      i = i || 0;

      for (var s, r = this._first, n = this._labels; r;) {
        r._startTime >= i && (r._startTime += t), r = r._next;
      }

      if (e) for (s in n) {
        n[s] >= i && (n[s] += t);
      }
      return this._uncache(!0);
    }, d._kill = function (t, e) {
      if (!t && !e) return this._enabled(!1, !1);

      for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) {
        i[s]._kill(t, e) && (r = !0);
      }

      return r;
    }, d.clear = function (t) {
      var e = this.getChildren(!1, !0, !0),
          i = e.length;

      for (this._time = this._totalTime = 0; --i > -1;) {
        e[i]._enabled(!1, !1);
      }

      return t !== !1 && (this._labels = {}), this._uncache(!0);
    }, d.invalidate = function () {
      for (var e = this._first; e;) {
        e.invalidate(), e = e._next;
      }

      return t.prototype.invalidate.call(this);
    }, d._enabled = function (t, i) {
      if (t === this._gc) for (var s = this._first; s;) {
        s._enabled(t, !0), s = s._next;
      }
      return e.prototype._enabled.call(this, t, i);
    }, d.totalTime = function () {
      this._forcingPlayhead = !0;
      var e = t.prototype.totalTime.apply(this, arguments);
      return this._forcingPlayhead = !1, e;
    }, d.duration = function (t) {
      return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration);
    }, d.totalDuration = function (t) {
      if (!arguments.length) {
        if (this._dirty) {
          for (var e, i, s = 0, r = this._last, n = 999999999999; r;) {
            e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
          }

          this._duration = this._totalDuration = s, this._dirty = !1;
        }

        return this._totalDuration;
      }

      return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this;
    }, d.paused = function (e) {
      if (!e) for (var i = this._first, s = this._time; i;) {
        i._startTime === s && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
      }
      return t.prototype.paused.apply(this, arguments);
    }, d.usesFrames = function () {
      for (var e = this._timeline; e._timeline;) {
        e = e._timeline;
      }

      return e === t._rootFramesTimeline;
    }, d.rawTime = function () {
      return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale;
    }, s;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t) {
  "use strict";

  var e = function e() {
    return (_gsScope.GreenSockGlobals || _gsScope)[t];
  };

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'TweenLite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("TimelineLite");
/*!
 * VERSION: beta 1.15.2
 * DATE: 2015-01-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

var _gsScope =  true && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (t) {
    var e,
        i,
        s,
        r = _gsScope.GreenSockGlobals || _gsScope,
        n = r.com.greensock,
        a = 2 * Math.PI,
        o = Math.PI / 2,
        h = n._class,
        l = function l(e, i) {
      var s = h("easing." + e, function () {}, !0),
          r = s.prototype = new t();
      return r.constructor = s, r.getRatio = i, s;
    },
        _ = t.register || function () {},
        u = function u(t, e, i, s) {
      var r = h("easing." + t, {
        easeOut: new e(),
        easeIn: new i(),
        easeInOut: new s()
      }, !0);
      return _(r, t), r;
    },
        c = function c(t, e, i) {
      this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t);
    },
        f = function f(e, i) {
      var s = h("easing." + e, function (t) {
        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1;
      }, !0),
          r = s.prototype = new t();
      return r.constructor = s, r.getRatio = i, r.config = function (t) {
        return new s(t);
      }, s;
    },
        p = u("Back", f("BackOut", function (t) {
      return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
    }), f("BackIn", function (t) {
      return t * t * ((this._p1 + 1) * t - this._p1);
    }), f("BackInOut", function (t) {
      return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
    })),
        m = h("easing.SlowMo", function (t, e, i) {
      e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0;
    }, !0),
        d = m.prototype = new t();

    return d.constructor = m, d.getRatio = function (t) {
      var e = t + (.5 - t) * this._p;
      return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e;
    }, m.ease = new m(.7, .7), d.config = m.config = function (t, e, i) {
      return new m(t, e, i);
    }, e = h("easing.SteppedEase", function (t) {
      t = t || 1, this._p1 = 1 / t, this._p2 = t + 1;
    }, !0), d = e.prototype = new t(), d.constructor = e, d.getRatio = function (t) {
      return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1;
    }, d.config = e.config = function (t) {
      return new e(t);
    }, i = h("easing.RoughEase", function (e) {
      e = e || {};

      for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), f = u, p = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) {
        i = p ? Math.random() : 1 / u * f, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), p ? s += Math.random() * r - .5 * r : f % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
          x: i,
          y: s
        };
      }

      for (l.sort(function (t, e) {
        return t.x - e.x;
      }), o = new c(1, 1, null), f = u; --f > -1;) {
        a = l[f], o = new c(a.x, a.y, o);
      }

      this._prev = new c(0, 0, 0 !== o.t ? o : o.next);
    }, !0), d = i.prototype = new t(), d.constructor = i, d.getRatio = function (t) {
      var e = this._prev;

      if (t > e.t) {
        for (; e.next && t >= e.t;) {
          e = e.next;
        }

        e = e.prev;
      } else for (; e.prev && e.t >= t;) {
        e = e.prev;
      }

      return this._prev = e, e.v + (t - e.t) / e.gap * e.c;
    }, d.config = function (t) {
      return new i(t);
    }, i.ease = new i(), u("Bounce", l("BounceOut", function (t) {
      return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
    }), l("BounceIn", function (t) {
      return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375);
    }), l("BounceInOut", function (t) {
      var e = .5 > t;
      return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5;
    })), u("Circ", l("CircOut", function (t) {
      return Math.sqrt(1 - (t -= 1) * t);
    }), l("CircIn", function (t) {
      return -(Math.sqrt(1 - t * t) - 1);
    }), l("CircInOut", function (t) {
      return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    })), s = function s(e, i, _s) {
      var r = h("easing." + e, function (t, e) {
        this._p1 = t >= 1 ? t : 1, this._p2 = (e || _s) / (1 > t ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2;
      }, !0),
          n = r.prototype = new t();
      return n.constructor = r, n.getRatio = i, n.config = function (t, e) {
        return new r(t, e);
      }, r;
    }, u("Elastic", s("ElasticOut", function (t) {
      return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1;
    }, .3), s("ElasticIn", function (t) {
      return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2));
    }, .3), s("ElasticInOut", function (t) {
      return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1;
    }, .45)), u("Expo", l("ExpoOut", function (t) {
      return 1 - Math.pow(2, -10 * t);
    }), l("ExpoIn", function (t) {
      return Math.pow(2, 10 * (t - 1)) - .001;
    }), l("ExpoInOut", function (t) {
      return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
    })), u("Sine", l("SineOut", function (t) {
      return Math.sin(t * o);
    }), l("SineIn", function (t) {
      return -Math.cos(t * o) + 1;
    }), l("SineInOut", function (t) {
      return -.5 * (Math.cos(Math.PI * t) - 1);
    })), h("easing.EaseLookup", {
      find: function find(e) {
        return t.map[e];
      }
    }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), p;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope =  true && module.exports && "undefined" != typeof global ? global : this || window;

(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";

  _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
    var i,
        r,
        s,
        n,
        a = function a() {
      t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio;
    },
        o = _gsScope._gsDefine.globals,
        l = {},
        h = a.prototype = new t("css");

    h.constructor = a, a.version = "1.18.0", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, h = "px", a.suffixMap = {
      top: h,
      right: h,
      bottom: h,
      left: h,
      width: h,
      height: h,
      fontSize: h,
      padding: h,
      margin: h,
      perspective: h,
      lineHeight: ""
    };

    var u,
        f,
        c,
        _,
        p,
        d,
        m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
        g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        x = /(?:\d|\-|\+|=|#|\.)*/g,
        T = /opacity *= *([^)]*)/i,
        w = /opacity:([^;]*)/i,
        b = /alpha\(opacity *=.+?\)/i,
        P = /^(rgb|hsl)/,
        S = /([A-Z])/g,
        O = /-([a-z])/gi,
        C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        k = function k(t, e) {
      return e.toUpperCase();
    },
        R = /(?:Left|Right|Width)/i,
        A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        D = /,(?=[^\)]*(?:\(|$))/gi,
        L = Math.PI / 180,
        N = 180 / Math.PI,
        F = {},
        X = document,
        z = function z(t) {
      return X.createElementNS ? X.createElementNS("http://www.w3.org/1999/xhtml", t) : X.createElement(t);
    },
        B = z("div"),
        I = z("img"),
        E = a._internals = {
      _specialProps: l
    },
        Y = navigator.userAgent,
        W = function () {
      var t = Y.indexOf("Android"),
          e = z("a");
      return c = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3), p = c && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)), _ = -1 !== Y.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (d = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1;
    }(),
        V = function V(t) {
      return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1;
    },
        j = function j(t) {
      window.console && console.log(t);
    },
        G = "",
        U = "",
        q = function q(t, e) {
      e = e || B;
      var i,
          r,
          s = e.style;
      if (void 0 !== s[t]) return t;

      for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + t];) {
        ;
      }

      return r >= 0 ? (U = 3 === r ? "ms" : i[r], G = "-" + U.toLowerCase() + "-", U + t) : null;
    },
        H = X.defaultView ? X.defaultView.getComputedStyle : function () {},
        Q = a.getStyle = function (t, e, i, r, s) {
      var n;
      return W || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || H(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : V(t);
    },
        Z = E.convertToPixels = function (t, i, r, s, n) {
      if ("px" === s || !s) return r;
      if ("auto" === s || !r) return 0;

      var o,
          l,
          h,
          u = R.test(i),
          f = t,
          c = B.style,
          _ = 0 > r;

      if (_ && (r = -r), "%" === s && -1 !== i.indexOf("border")) o = r / 100 * (u ? t.clientWidth : t.clientHeight);else {
        if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;", "%" !== s && f.appendChild && "v" !== s.charAt(0) && "rem" !== s) c[u ? "borderLeftWidth" : "borderTopWidth"] = r + s;else {
          if (f = t.parentNode || X.body, l = f._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * r / 100;
          c[u ? "width" : "height"] = r + s;
        }
        f.appendChild(B), o = parseFloat(B[u ? "offsetWidth" : "offsetHeight"]), f.removeChild(B), u && "%" === s && a.cacheWidths !== !1 && (l = f._gsCache = f._gsCache || {}, l.time = h, l.width = 100 * (o / r)), 0 !== o || n || (o = Z(t, i, r, s, !0));
      }
      return _ ? -o : o;
    },
        $ = E.calculateOffset = function (t, e, i) {
      if ("absolute" !== Q(t, "position", i)) return 0;
      var r = "left" === e ? "Left" : "Top",
          s = Q(t, "margin" + r, i);
      return t["offset" + r] - (Z(t, e, parseFloat(s), s.replace(x, "")) || 0);
    },
        K = function K(t, e) {
      var i,
          r,
          s,
          n = {};
      if (e = e || H(t, null)) {
        if (i = e.length) for (; --i > -1;) {
          s = e[i], (-1 === s.indexOf("-transform") || Se === s) && (n[s.replace(O, k)] = e.getPropertyValue(s));
        } else for (i in e) {
          (-1 === i.indexOf("Transform") || Pe === i) && (n[i] = e[i]);
        }
      } else if (e = t.currentStyle || t.style) for (i in e) {
        "string" == typeof i && void 0 === n[i] && (n[i.replace(O, k)] = e[i]);
      }
      return W || (n.opacity = V(t)), r = ze(t, e, !1), n.rotation = r.rotation, n.skewX = r.skewX, n.scaleX = r.scaleX, n.scaleY = r.scaleY, n.x = r.x, n.y = r.y, Ce && (n.z = r.z, n.rotationX = r.rotationX, n.rotationY = r.rotationY, n.scaleZ = r.scaleZ), n.filters && delete n.filters, n;
    },
        J = function J(t, e, i, r, s) {
      var n,
          a,
          o,
          l = {},
          h = t.style;

      for (a in i) {
        "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : $(t, a), void 0 !== h[a] && (o = new pe(h, a, h[a], o)));
      }

      if (r) for (a in r) {
        "className" !== a && (l[a] = r[a]);
      }
      return {
        difs: l,
        firstMPT: o
      };
    },
        te = {
      width: ["Left", "Right"],
      height: ["Top", "Bottom"]
    },
        ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        ie = function ie(t, e, i) {
      var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
          s = te[e],
          n = s.length;

      for (i = i || H(t, null); --n > -1;) {
        r -= parseFloat(Q(t, "padding" + s[n], i, !0)) || 0, r -= parseFloat(Q(t, "border" + s[n] + "Width", i, !0)) || 0;
      }

      return r;
    },
        re = function re(t, e) {
      if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
      (null == t || "" === t) && (t = "0 0");
      var i = t.split(" "),
          r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
          s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
      return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(y, "")), e.oy = parseFloat(s.replace(y, "")), e.v = t), e || t;
    },
        se = function se(t, e) {
      return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e);
    },
        ne = function ne(t, e) {
      return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t);
    },
        ae = function ae(t, e, i, r) {
      var s,
          n,
          a,
          o,
          l,
          h = 1e-6;
      return null == t ? o = e : "number" == typeof t ? o = t : (s = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e), n.length && (r && (r[i] = e + a), -1 !== t.indexOf("short") && (a %= s, a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)), o = e + a), h > o && o > -h && (o = 0), o;
    },
        oe = {
      aqua: [0, 255, 255],
      lime: [0, 255, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, 255],
      navy: [0, 0, 128],
      white: [255, 255, 255],
      fuchsia: [255, 0, 255],
      olive: [128, 128, 0],
      yellow: [255, 255, 0],
      orange: [255, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [255, 0, 0],
      pink: [255, 192, 203],
      cyan: [0, 255, 255],
      transparent: [255, 255, 255, 0]
    },
        le = function le(t, e, i) {
      return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5;
    },
        he = a.parseColor = function (t, e) {
      var i, r, s, n, a, o, l, h, u, f, c;
      if (t) {
        if ("number" == typeof t) i = [t >> 16, 255 & t >> 8, 255 & t];else {
          if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), oe[t]) i = oe[t];else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), s = t.charAt(2), n = t.charAt(3), t = "#" + r + r + s + s + n + n), t = parseInt(t.substr(1), 16), i = [t >> 16, 255 & t >> 8, 255 & t];else if ("hsl" === t.substr(0, 3)) {
            if (i = c = t.match(m), e) {
              if (-1 !== t.indexOf("=")) return t.match(g);
            } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, s = .5 >= l ? l * (o + 1) : l + o - l * o, r = 2 * l - s, i.length > 3 && (i[3] = Number(t[3])), i[0] = le(a + 1 / 3, r, s), i[1] = le(a, r, s), i[2] = le(a - 1 / 3, r, s);
          } else i = t.match(m) || oe.transparent;
          i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]));
        }
      } else i = oe.black;
      return e && !c && (r = i[0] / 255, s = i[1] / 255, n = i[2] / 255, h = Math.max(r, s, n), u = Math.min(r, s, n), l = (h + u) / 2, h === u ? a = o = 0 : (f = h - u, o = l > .5 ? f / (2 - h - u) : f / (h + u), a = h === r ? (s - n) / f + (n > s ? 6 : 0) : h === s ? (n - r) / f + 2 : (r - s) / f + 4, a *= 60), i[0] = 0 | a + .5, i[1] = 0 | 100 * o + .5, i[2] = 0 | 100 * l + .5), i;
    },
        ue = function ue(t, e) {
      var i,
          r,
          s,
          n = t.match(fe) || [],
          a = 0,
          o = n.length ? "" : t;

      for (i = 0; n.length > i; i++) {
        r = n[i], s = t.substr(a, t.indexOf(r, a) - a), a += s.length + r.length, r = he(r, e), 3 === r.length && r.push(1), o += s + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
      }

      return o;
    },
        fe = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";

    for (h in oe) {
      fe += "|" + h + "\\b";
    }

    fe = RegExp(fe + ")", "gi"), a.colorStringFilter = function (t) {
      var e,
          i = t[0] + t[1];
      fe.lastIndex = 0, fe.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = ue(t[0], e), t[1] = ue(t[1], e));
    }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);

    var ce = function ce(t, e, i, r) {
      if (null == t) return function (t) {
        return t;
      };
      var s,
          n = e ? (t.match(fe) || [""])[0] : "",
          a = t.split(n).join("").match(v) || [],
          o = t.substr(0, t.indexOf(a[0])),
          l = ")" === t.charAt(t.length - 1) ? ")" : "",
          h = -1 !== t.indexOf(" ") ? " " : ",",
          u = a.length,
          f = u > 0 ? a[0].replace(m, "") : "";
      return u ? s = e ? function (t) {
        var e, c, _, p;

        if ("number" == typeof t) t += f;else if (r && D.test(t)) {
          for (p = t.replace(D, "|").split("|"), _ = 0; p.length > _; _++) {
            p[_] = s(p[_]);
          }

          return p.join(",");
        }
        if (e = (t.match(fe) || [n])[0], c = t.split(e).join("").match(v) || [], _ = c.length, u > _--) for (; u > ++_;) {
          c[_] = i ? c[0 | (_ - 1) / 2] : a[_];
        }
        return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "");
      } : function (t) {
        var e, n, c;
        if ("number" == typeof t) t += f;else if (r && D.test(t)) {
          for (n = t.replace(D, "|").split("|"), c = 0; n.length > c; c++) {
            n[c] = s(n[c]);
          }

          return n.join(",");
        }
        if (e = t.match(v) || [], c = e.length, u > c--) for (; u > ++c;) {
          e[c] = i ? e[0 | (c - 1) / 2] : a[c];
        }
        return o + e.join(h) + l;
      } : function (t) {
        return t;
      };
    },
        _e = function _e(t) {
      return t = t.split(","), function (e, i, r, s, n, a, o) {
        var l,
            h = (i + "").split(" ");

        for (o = {}, l = 0; 4 > l; l++) {
          o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
        }

        return s.parse(e, o, n, a);
      };
    },
        pe = (E._setPluginRatio = function (t) {
      this.plugin.setRatio(t);

      for (var e, i, r, s, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o;) {
        e = a[o.v], o.r ? e = Math.round(e) : l > e && e > -l && (e = 0), o.t[o.p] = e, o = o._next;
      }

      if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t) for (o = n.firstMPT; o;) {
        if (i = o.t, i.type) {
          if (1 === i.type) {
            for (s = i.xs0 + i.s + i.xs1, r = 1; i.l > r; r++) {
              s += i["xn" + r] + i["xs" + (r + 1)];
            }

            i.e = s;
          }
        } else i.e = i.s + i.xs0;

        o = o._next;
      }
    }, function (t, e, i, r, s) {
      this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r);
    }),
        de = (E._parseToProxy = function (t, e, i, r, s, n) {
      var a,
          o,
          l,
          h,
          u,
          f = r,
          c = {},
          _ = {},
          p = i._transform,
          d = F;

      for (i._transform = null, F = e, r = u = i.parse(t, e, r, s), F = d, n && (i._transform = p, f && (f._prev = null, f._prev && (f._prev._next = null))); r && r !== f;) {
        if (1 >= r.type && (o = r.p, _[o] = r.s + r.c, c[o] = r.s, n || (h = new pe(r, "s", o, h, r.r), r.c = 0), 1 === r.type)) for (a = r.l; --a > 0;) {
          l = "xn" + a, o = r.p + "_" + l, _[o] = r.data[l], c[o] = r[l], n || (h = new pe(r, l, o, h, r.rxp[l]));
        }
        r = r._next;
      }

      return {
        proxy: c,
        end: _,
        firstMPT: h,
        pt: u
      };
    }, E.CSSPropTween = function (t, e, r, s, a, o, l, h, u, f, c) {
      this.t = t, this.p = e, this.s = r, this.c = s, this.n = l || e, t instanceof de || n.push(this.n), this.r = h, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === f ? r : f, this.e = void 0 === c ? r + s : c, a && (this._next = a, a._prev = this);
    }),
        me = function me(t, e, i, r, s, n) {
      var a = new de(t, e, i, r - i, s, -1, n);
      return a.b = i, a.e = a.xs0 = r, a;
    },
        ge = a.parseComplex = function (t, e, i, r, s, n, a, o, l, h) {
      i = i || n || "", a = new de(t, e, 0, 0, a, h ? 2 : 1, null, !1, o, i, r), r += "";

      var f,
          c,
          _,
          p,
          d,
          v,
          y,
          x,
          T,
          w,
          b,
          P,
          S,
          O = i.split(", ").join(",").split(" "),
          C = r.split(", ").join(",").split(" "),
          k = O.length,
          R = u !== !1;

      for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (O = O.join(" ").replace(D, ", ").split(" "), C = C.join(" ").replace(D, ", ").split(" "), k = O.length), k !== C.length && (O = (n || "").split(" "), k = O.length), a.plugin = l, a.setRatio = h, fe.lastIndex = 0, f = 0; k > f; f++) {
        if (p = O[f], d = C[f], x = parseFloat(p), x || 0 === x) a.appendXtra("", x, se(d, x), d.replace(g, ""), R && -1 !== d.indexOf("px"), !0);else if (s && fe.test(p)) P = "," === d.charAt(d.length - 1) ? ")," : ")", S = -1 !== d.indexOf("hsl") && W, p = he(p, S), d = he(d, S), T = p.length + d.length > 6, T && !W && 0 === d[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(C[f]).join("transparent")) : (W || (T = !1), S ? a.appendXtra(T ? "hsla(" : "hsl(", p[0], se(d[0], p[0]), ",", !1, !0).appendXtra("", p[1], se(d[1], p[1]), "%,", !1).appendXtra("", p[2], se(d[2], p[2]), T ? "%," : "%" + P, !1) : a.appendXtra(T ? "rgba(" : "rgb(", p[0], d[0] - p[0], ",", !0, !0).appendXtra("", p[1], d[1] - p[1], ",", !0).appendXtra("", p[2], d[2] - p[2], T ? "," : P, !0), T && (p = 4 > p.length ? 1 : p[3], a.appendXtra("", p, (4 > d.length ? 1 : d[3]) - p, P, !1))), fe.lastIndex = 0;else if (v = p.match(m)) {
          if (y = d.match(g), !y || y.length !== v.length) return a;

          for (_ = 0, c = 0; v.length > c; c++) {
            b = v[c], w = p.indexOf(b, _), a.appendXtra(p.substr(_, w - _), Number(b), se(y[c], b), "", R && "px" === p.substr(w + b.length, 2), 0 === c), _ = w + b.length;
          }

          a["xs" + a.l] += p.substr(_);
        } else a["xs" + a.l] += a.l ? " " + p : p;
      }

      if (-1 !== r.indexOf("=") && a.data) {
        for (P = a.xs0 + a.data.s, f = 1; a.l > f; f++) {
          P += a["xs" + f] + a.data["xn" + f];
        }

        a.e = P + a["xs" + f];
      }

      return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a;
    },
        ve = 9;

    for (h = de.prototype, h.l = h.pr = 0; --ve > 0;) {
      h["xn" + ve] = 0, h["xs" + ve] = "";
    }

    h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function (t, e, i, r, s, n) {
      var a = this,
          o = a.l;
      return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new de(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
        s: e + i
      }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (r || ""), a);
    };

    var ye = function ye(t, e) {
      e = e || {}, this.p = e.prefix ? q(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || ce(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0;
    },
        xe = E._registerComplexSpecialProp = function (t, e, i) {
      "object" != _typeof(e) && (e = {
        parser: i
      });
      var r,
          s,
          n = t.split(","),
          a = e.defaultValue;

      for (i = i || [a], r = 0; n.length > r; r++) {
        e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || a, s = new ye(n[r], e);
      }
    },
        Te = function Te(t) {
      if (!l[t]) {
        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
        xe(t, {
          parser: function parser(t, i, r, s, n, a, h) {
            var u = o.com.greensock.plugins[e];
            return u ? (u._cssRegister(), l[r].parse(t, i, r, s, n, a, h)) : (j("Error: " + e + " js file not loaded."), n);
          }
        });
      }
    };

    h = ye.prototype, h.parseComplex = function (t, e, i, r, s, n) {
      var a,
          o,
          l,
          h,
          u,
          f,
          c = this.keyword;

      if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : c && (o = [e], l = [i])), l) {
        for (h = l.length > o.length ? l.length : o.length, a = 0; h > a; a++) {
          e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, c && (u = e.indexOf(c), f = i.indexOf(c), u !== f && (-1 === f ? o[a] = o[a].split(c).join("") : -1 === u && (o[a] += " " + c)));
        }

        e = o.join(", "), i = l.join(", ");
      }

      return ge(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n);
    }, h.parse = function (t, e, i, r, n, a) {
      return this.parseComplex(t.style, this.format(Q(t, this.p, s, !1, this.dflt)), this.format(e), n, a);
    }, a.registerSpecialProp = function (t, e, i) {
      xe(t, {
        parser: function parser(t, r, s, n, a, o) {
          var l = new de(t, s, 0, 0, a, 2, s, !1, i);
          return l.plugin = o, l.setRatio = e(t, r, n._tween, s), l;
        },
        priority: i
      });
    }, a.useSVGTransformAttr = c || _;

    var we,
        be = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
        Pe = q("transform"),
        Se = G + "transform",
        Oe = q("transformOrigin"),
        Ce = null !== q("perspective"),
        ke = E.Transform = function () {
      this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = a.defaultForce3D !== !1 && Ce ? a.defaultForce3D || "auto" : !1;
    },
        Re = window.SVGElement,
        Ae = function Ae(t, e, i) {
      var r,
          s = X.createElementNS("http://www.w3.org/2000/svg", t),
          n = /([a-z])([A-Z])/g;

      for (r in i) {
        s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
      }

      return e.appendChild(s), s;
    },
        Me = X.documentElement,
        De = function () {
      var t,
          e,
          i,
          r = d || /Android/i.test(Y) && !window.chrome;
      return X.createElementNS && !r && (t = Ae("svg", Me), e = Ae("rect", t, {
        width: 100,
        height: 50,
        x: 100
      }), i = e.getBoundingClientRect().width, e.style[Oe] = "50% 50%", e.style[Pe] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(_ && Ce), Me.removeChild(t)), r;
    }(),
        Le = function Le(t, e, i, r, s) {
      var n,
          o,
          l,
          h,
          u,
          f,
          c,
          _,
          p,
          d,
          m,
          g,
          v,
          y,
          x = t._gsTransform,
          T = Xe(t, !0);

      x && (v = x.xOrigin, y = x.yOrigin), (!r || 2 > (n = r.split(" ")).length) && (c = t.getBBox(), e = re(e).split(" "), n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = h = parseFloat(n[0]), i.yOrigin = u = parseFloat(n[1]), r && T !== Fe && (f = T[0], c = T[1], _ = T[2], p = T[3], d = T[4], m = T[5], g = f * p - c * _, o = h * (p / g) + u * (-_ / g) + (_ * m - p * d) / g, l = h * (-c / g) + u * (f / g) - (f * m - c * d) / g, h = i.xOrigin = n[0] = o, u = i.yOrigin = n[1] = l), x && (s || s !== !1 && a.defaultSmoothOrigin !== !1 ? (o = h - v, l = u - y, x.xOffset += o * T[0] + l * T[2] - o, x.yOffset += o * T[1] + l * T[3] - l) : x.xOffset = x.yOffset = 0), t.setAttribute("data-svg-origin", n.join(" "));
    },
        Ne = function Ne(t) {
      return !!(Re && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM));
    },
        Fe = [1, 0, 0, 1, 0, 0],
        Xe = function Xe(t, e) {
      var i,
          r,
          s,
          n,
          a,
          o = t._gsTransform || new ke(),
          l = 1e5;
      if (Pe ? r = Q(t, Se, null, !0) : t.currentStyle && (r = t.currentStyle.filter.match(A), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), o.x || 0, o.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, (o.svg || t.getBBox && Ne(t)) && (i && -1 !== (t.style[Pe] + "").indexOf("matrix") && (r = t.style[Pe], i = 0), s = t.getAttribute("transform"), i && s && (-1 !== s.indexOf("matrix") ? (r = s, i = 0) : -1 !== s.indexOf("translate") && (r = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Fe;

      for (s = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], ve = s.length; --ve > -1;) {
        n = Number(s[ve]), s[ve] = (a = n - (n |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + n : n;
      }

      return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s;
    },
        ze = E.getTransform = function (t, i, r, n) {
      if (t._gsTransform && r && !n) return t._gsTransform;

      var o,
          l,
          h,
          u,
          f,
          c,
          _ = r ? t._gsTransform || new ke() : new ke(),
          p = 0 > _.scaleX,
          d = 2e-5,
          m = 1e5,
          g = Ce ? parseFloat(Q(t, Oe, i, !1, "0 0 0").split(" ")[2]) || _.zOrigin || 0 : 0,
          v = parseFloat(a.defaultTransformPerspective) || 0;

      if (_.svg = !(!t.getBBox || !Ne(t)), _.svg && (Le(t, Q(t, Oe, s, !1, "50% 50%") + "", _, t.getAttribute("data-svg-origin")), we = a.useSVGTransformAttr || De), o = Xe(t), o !== Fe) {
        if (16 === o.length) {
          var y,
              x,
              T,
              w,
              b,
              P = o[0],
              S = o[1],
              O = o[2],
              C = o[3],
              k = o[4],
              R = o[5],
              A = o[6],
              M = o[7],
              D = o[8],
              L = o[9],
              F = o[10],
              X = o[12],
              z = o[13],
              B = o[14],
              I = o[11],
              E = Math.atan2(A, F);
          _.zOrigin && (B = -_.zOrigin, X = D * B - o[12], z = L * B - o[13], B = F * B + _.zOrigin - o[14]), _.rotationX = E * N, E && (w = Math.cos(-E), b = Math.sin(-E), y = k * w + D * b, x = R * w + L * b, T = A * w + F * b, D = k * -b + D * w, L = R * -b + L * w, F = A * -b + F * w, I = M * -b + I * w, k = y, R = x, A = T), E = Math.atan2(D, F), _.rotationY = E * N, E && (w = Math.cos(-E), b = Math.sin(-E), y = P * w - D * b, x = S * w - L * b, T = O * w - F * b, L = S * b + L * w, F = O * b + F * w, I = C * b + I * w, P = y, S = x, O = T), E = Math.atan2(S, P), _.rotation = E * N, E && (w = Math.cos(-E), b = Math.sin(-E), P = P * w + k * b, x = S * w + R * b, R = S * -b + R * w, A = O * -b + A * w, S = x), _.rotationX && Math.abs(_.rotationX) + Math.abs(_.rotation) > 359.9 && (_.rotationX = _.rotation = 0, _.rotationY += 180), _.scaleX = (0 | Math.sqrt(P * P + S * S) * m + .5) / m, _.scaleY = (0 | Math.sqrt(R * R + L * L) * m + .5) / m, _.scaleZ = (0 | Math.sqrt(A * A + F * F) * m + .5) / m, _.skewX = 0, _.perspective = I ? 1 / (0 > I ? -I : I) : 0, _.x = X, _.y = z, _.z = B, _.svg && (_.x -= _.xOrigin - (_.xOrigin * P - _.yOrigin * k), _.y -= _.yOrigin - (_.yOrigin * S - _.xOrigin * R));
        } else if (!(Ce && !n && o.length && _.x === o[4] && _.y === o[5] && (_.rotationX || _.rotationY) || void 0 !== _.x && "none" === Q(t, "display", i))) {
          var Y = o.length >= 6,
              W = Y ? o[0] : 1,
              V = o[1] || 0,
              j = o[2] || 0,
              G = Y ? o[3] : 1;
          _.x = o[4] || 0, _.y = o[5] || 0, h = Math.sqrt(W * W + V * V), u = Math.sqrt(G * G + j * j), f = W || V ? Math.atan2(V, W) * N : _.rotation || 0, c = j || G ? Math.atan2(j, G) * N + f : _.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (p ? (h *= -1, c += 0 >= f ? 180 : -180, f += 0 >= f ? 180 : -180) : (u *= -1, c += 0 >= c ? 180 : -180)), _.scaleX = h, _.scaleY = u, _.rotation = f, _.skewX = c, Ce && (_.rotationX = _.rotationY = _.z = 0, _.perspective = v, _.scaleZ = 1), _.svg && (_.x -= _.xOrigin - (_.xOrigin * W + _.yOrigin * j), _.y -= _.yOrigin - (_.xOrigin * V + _.yOrigin * G));
        }

        _.zOrigin = g;

        for (l in _) {
          d > _[l] && _[l] > -d && (_[l] = 0);
        }
      }

      return r && (t._gsTransform = _, _.svg && (we && t.style[Pe] ? e.delayedCall(.001, function () {
        Ye(t.style, Pe);
      }) : !we && t.getAttribute("transform") && e.delayedCall(.001, function () {
        t.removeAttribute("transform");
      }))), _;
    },
        Be = function Be(t) {
      var e,
          i,
          r = this.data,
          s = -r.rotation * L,
          n = s + r.skewX * L,
          a = 1e5,
          o = (0 | Math.cos(s) * r.scaleX * a) / a,
          l = (0 | Math.sin(s) * r.scaleX * a) / a,
          h = (0 | Math.sin(n) * -r.scaleY * a) / a,
          u = (0 | Math.cos(n) * r.scaleY * a) / a,
          f = this.t.style,
          c = this.t.currentStyle;

      if (c) {
        i = l, l = -h, h = -i, e = c.filter, f.filter = "";

        var _,
            p,
            m = this.t.offsetWidth,
            g = this.t.offsetHeight,
            v = "absolute" !== c.position,
            y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u,
            w = r.x + m * r.xPercent / 100,
            b = r.y + g * r.yPercent / 100;

        if (null != r.ox && (_ = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2, p = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2, w += _ - (_ * o + p * l), b += p - (_ * h + p * u)), v ? (_ = m / 2, p = g / 2, y += ", Dx=" + (_ - (_ * o + p * l) + w) + ", Dy=" + (p - (_ * h + p * u) + b) + ")") : y += ", sizingMethod='auto expand')", f.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(M, y) : y + " " + e, (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf( true && e.indexOf("Alpha")) && f.removeAttribute("filter")), !v) {
          var P,
              S,
              O,
              C = 8 > d ? 1 : -1;

          for (_ = r.ieOffsetX || 0, p = r.ieOffsetY || 0, r.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w), r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + b), ve = 0; 4 > ve; ve++) {
            S = ee[ve], P = c[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : Z(this.t, S, parseFloat(P), P.replace(x, "")) || 0, O = i !== r[S] ? 2 > ve ? -r.ieOffsetX : -r.ieOffsetY : 2 > ve ? _ - r.ieOffsetX : p - r.ieOffsetY, f[S] = (r[S] = Math.round(i - O * (0 === ve || 2 === ve ? 1 : C))) + "px";
          }
        }
      }
    },
        Ie = E.set3DTransformRatio = E.setTransformRatio = function (t) {
      var e,
          i,
          r,
          s,
          n,
          a,
          o,
          l,
          h,
          u,
          f,
          c,
          p,
          d,
          m,
          g,
          v,
          y,
          x,
          T,
          w,
          b,
          P,
          S = this.data,
          O = this.t.style,
          C = S.rotation,
          k = S.rotationX,
          R = S.rotationY,
          A = S.scaleX,
          M = S.scaleY,
          D = S.scaleZ,
          N = S.x,
          F = S.y,
          X = S.z,
          z = S.svg,
          B = S.perspective,
          I = S.force3D;
      if (!(((1 !== t && 0 !== t || "auto" !== I || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && I || X || B || R || k) && (!we || !z) && Ce)) return C || S.skewX || z ? (C *= L, b = S.skewX * L, P = 1e5, e = Math.cos(C) * A, s = Math.sin(C) * A, i = Math.sin(C - b) * -M, n = Math.cos(C - b) * M, b && "simple" === S.skewType && (v = Math.tan(b), v = Math.sqrt(1 + v * v), i *= v, n *= v, S.skewY && (e *= v, s *= v)), z && (N += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, F += S.yOrigin - (S.xOrigin * s + S.yOrigin * n) + S.yOffset, we && (S.xPercent || S.yPercent) && (d = this.t.getBBox(), N += .01 * S.xPercent * d.width, F += .01 * S.yPercent * d.height), d = 1e-6, d > N && N > -d && (N = 0), d > F && F > -d && (F = 0)), x = (0 | e * P) / P + "," + (0 | s * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + N + "," + F + ")", z && we ? this.t.setAttribute("transform", "matrix(" + x) : O[Pe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : O[Pe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + M + "," + N + "," + F + ")", void 0;
      if (_ && (d = 1e-4, d > A && A > -d && (A = D = 2e-5), d > M && M > -d && (M = D = 2e-5), !B || S.z || S.rotationX || S.rotationY || (B = 0)), C || S.skewX) C *= L, m = e = Math.cos(C), g = s = Math.sin(C), S.skewX && (C -= S.skewX * L, m = Math.cos(C), g = Math.sin(C), "simple" === S.skewType && (v = Math.tan(S.skewX * L), v = Math.sqrt(1 + v * v), m *= v, g *= v, S.skewY && (e *= v, s *= v))), i = -g, n = m;else {
        if (!(R || k || 1 !== D || B || z)) return O[Pe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + N + "px," + F + "px," + X + "px)" + (1 !== A || 1 !== M ? " scale(" + A + "," + M + ")" : ""), void 0;
        e = n = 1, i = s = 0;
      }
      h = 1, r = a = o = l = u = f = 0, c = B ? -1 / B : 0, p = S.zOrigin, d = 1e-6, T = ",", w = "0", C = R * L, C && (m = Math.cos(C), g = Math.sin(C), o = -g, u = c * -g, r = e * g, a = s * g, h = m, c *= m, e *= m, s *= m), C = k * L, C && (m = Math.cos(C), g = Math.sin(C), v = i * m + r * g, y = n * m + a * g, l = h * g, f = c * g, r = i * -g + r * m, a = n * -g + a * m, h *= m, c *= m, i = v, n = y), 1 !== D && (r *= D, a *= D, h *= D, c *= D), 1 !== M && (i *= M, n *= M, l *= M, f *= M), 1 !== A && (e *= A, s *= A, o *= A, u *= A), (p || z) && (p && (N += r * -p, F += a * -p, X += h * -p + p), z && (N += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset, F += S.yOrigin - (S.xOrigin * s + S.yOrigin * n) + S.yOffset), d > N && N > -d && (N = w), d > F && F > -d && (F = w), d > X && X > -d && (X = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (d > e && e > -d ? w : e) + T + (d > s && s > -d ? w : s) + T + (d > o && o > -d ? w : o), x += T + (d > u && u > -d ? w : u) + T + (d > i && i > -d ? w : i) + T + (d > n && n > -d ? w : n), k || R ? (x += T + (d > l && l > -d ? w : l) + T + (d > f && f > -d ? w : f) + T + (d > r && r > -d ? w : r), x += T + (d > a && a > -d ? w : a) + T + (d > h && h > -d ? w : h) + T + (d > c && c > -d ? w : c) + T) : x += ",0,0,0,0,1,0,", x += N + T + F + T + X + T + (B ? 1 + -X / B : 1) + ")", O[Pe] = x;
    };

    h = ke.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, xe("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
      parser: function parser(t, e, i, r, n, o, l) {
        if (r._lastParsedTransform === l) return n;
        r._lastParsedTransform = l;

        var h,
            u,
            f,
            c,
            _,
            p,
            d,
            m,
            g,
            v,
            y = t._gsTransform,
            x = t.style,
            T = 1e-6,
            w = be.length,
            b = l,
            P = {},
            S = "transformOrigin";

        if (l.display ? (c = Q(t, "display"), x.display = "block", h = ze(t, s, !0, l.parseTransform), x.display = c) : h = ze(t, s, !0, l.parseTransform), r._transform = h, "string" == typeof b.transform && Pe) c = B.style, c[Pe] = b.transform, c.display = "block", c.position = "absolute", X.body.appendChild(B), u = ze(B, null, !1), X.body.removeChild(B), u.perspective || (u.perspective = h.perspective), null != b.xPercent && (u.xPercent = ne(b.xPercent, h.xPercent)), null != b.yPercent && (u.yPercent = ne(b.yPercent, h.yPercent));else if ("object" == _typeof(b)) {
          if (u = {
            scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, h.scaleX),
            scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, h.scaleY),
            scaleZ: ne(b.scaleZ, h.scaleZ),
            x: ne(b.x, h.x),
            y: ne(b.y, h.y),
            z: ne(b.z, h.z),
            xPercent: ne(b.xPercent, h.xPercent),
            yPercent: ne(b.yPercent, h.yPercent),
            perspective: ne(b.transformPerspective, h.perspective)
          }, m = b.directionalRotation, null != m) if ("object" == _typeof(m)) for (c in m) {
            b[c] = m[c];
          } else b.rotation = m;
          "string" == typeof b.x && -1 !== b.x.indexOf("%") && (u.x = 0, u.xPercent = ne(b.x, h.xPercent)), "string" == typeof b.y && -1 !== b.y.indexOf("%") && (u.y = 0, u.yPercent = ne(b.y, h.yPercent)), u.rotation = ae("rotation" in b ? b.rotation : "shortRotation" in b ? b.shortRotation + "_short" : "rotationZ" in b ? b.rotationZ : h.rotation, h.rotation, "rotation", P), Ce && (u.rotationX = ae("rotationX" in b ? b.rotationX : "shortRotationX" in b ? b.shortRotationX + "_short" : h.rotationX || 0, h.rotationX, "rotationX", P), u.rotationY = ae("rotationY" in b ? b.rotationY : "shortRotationY" in b ? b.shortRotationY + "_short" : h.rotationY || 0, h.rotationY, "rotationY", P)), u.skewX = null == b.skewX ? h.skewX : ae(b.skewX, h.skewX), u.skewY = null == b.skewY ? h.skewY : ae(b.skewY, h.skewY), (f = u.skewY - h.skewY) && (u.skewX += f, u.rotation += f);
        }

        for (Ce && null != b.force3D && (h.force3D = b.force3D, d = !0), h.skewType = b.skewType || h.skewType || a.defaultSkewType, p = h.force3D || h.z || h.rotationX || h.rotationY || u.z || u.rotationX || u.rotationY || u.perspective, p || null == b.scale || (u.scaleZ = 1); --w > -1;) {
          i = be[w], _ = u[i] - h[i], (_ > T || -T > _ || null != b[i] || null != F[i]) && (d = !0, n = new de(h, i, h[i], _, n), i in P && (n.e = P[i]), n.xs0 = 0, n.plugin = o, r._overwriteProps.push(n.n));
        }

        return _ = b.transformOrigin, h.svg && (_ || b.svgOrigin) && (g = h.xOffset, v = h.yOffset, Le(t, re(_), u, b.svgOrigin, b.smoothOrigin), n = me(h, "xOrigin", (y ? h : u).xOrigin, u.xOrigin, n, S), n = me(h, "yOrigin", (y ? h : u).yOrigin, u.yOrigin, n, S), (g !== h.xOffset || v !== h.yOffset) && (n = me(h, "xOffset", y ? g : h.xOffset, h.xOffset, n, S), n = me(h, "yOffset", y ? v : h.yOffset, h.yOffset, n, S)), _ = we ? null : "0px 0px"), (_ || Ce && p && h.zOrigin) && (Pe ? (d = !0, i = Oe, _ = (_ || Q(t, i, s, !1, "50% 50%")) + "", n = new de(x, i, 0, 0, n, -1, S), n.b = x[i], n.plugin = o, Ce ? (c = h.zOrigin, _ = _.split(" "), h.zOrigin = (_.length > 2 && (0 === c || "0px" !== _[2]) ? parseFloat(_[2]) : c) || 0, n.xs0 = n.e = _[0] + " " + (_[1] || "50%") + " 0px", n = new de(h, "zOrigin", 0, 0, n, -1, n.n), n.b = c, n.xs0 = n.e = h.zOrigin) : n.xs0 = n.e = _) : re(_ + "", h)), d && (r._transformType = h.svg && we || !p && 3 !== this._transformType ? 2 : 3), n;
      },
      prefix: !0
    }), xe("boxShadow", {
      defaultValue: "0px 0px 0px 0px #999",
      prefix: !0,
      color: !0,
      multi: !0,
      keyword: "inset"
    }), xe("borderRadius", {
      defaultValue: "0px",
      parser: function parser(t, e, i, n, a) {
        e = this.format(e);

        var o,
            l,
            h,
            u,
            f,
            c,
            _,
            p,
            d,
            m,
            g,
            v,
            y,
            x,
            T,
            w,
            b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
            P = t.style;

        for (d = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), o = e.split(" "), l = 0; b.length > l; l++) {
          this.p.indexOf("border") && (b[l] = q(b[l])), f = u = Q(t, b[l], s, !1, "0px"), -1 !== f.indexOf(" ") && (u = f.split(" "), f = u[0], u = u[1]), c = h = o[l], _ = parseFloat(f), v = f.substr((_ + "").length), y = "=" === c.charAt(1), y ? (p = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), p *= parseFloat(c), g = c.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(c), g = c.substr((p + "").length)), "" === g && (g = r[i] || v), g !== v && (x = Z(t, "borderLeft", _, v), T = Z(t, "borderTop", _, v), "%" === g ? (f = 100 * (x / d) + "%", u = 100 * (T / m) + "%") : "em" === g ? (w = Z(t, "borderLeft", 1, "em"), f = x / w + "em", u = T / w + "em") : (f = x + "px", u = T + "px"), y && (c = parseFloat(f) + p + g, h = parseFloat(u) + p + g)), a = ge(P, b[l], f + " " + u, c + " " + h, !1, "0px", a);
        }

        return a;
      },
      prefix: !0,
      formatter: ce("0px 0px 0px 0px", !1, !0)
    }), xe("backgroundPosition", {
      defaultValue: "0 0",
      parser: function parser(t, e, i, r, n, a) {
        var o,
            l,
            h,
            u,
            f,
            c,
            _ = "background-position",
            p = s || H(t, null),
            m = this.format((p ? d ? p.getPropertyValue(_ + "-x") + " " + p.getPropertyValue(_ + "-y") : p.getPropertyValue(_) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
            g = this.format(e);

        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(C, ""), c && "none" !== c)) {
          for (o = m.split(" "), l = g.split(" "), I.setAttribute("src", c), h = 2; --h > -1;) {
            m = o[h], u = -1 !== m.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (f = 0 === h ? t.offsetWidth - I.width : t.offsetHeight - I.height, o[h] = u ? parseFloat(m) / 100 * f + "px" : 100 * (parseFloat(m) / f) + "%");
          }

          m = o.join(" ");
        }

        return this.parseComplex(t.style, m, g, n, a);
      },
      formatter: re
    }), xe("backgroundSize", {
      defaultValue: "0 0",
      formatter: re
    }), xe("perspective", {
      defaultValue: "0px",
      prefix: !0
    }), xe("perspectiveOrigin", {
      defaultValue: "50% 50%",
      prefix: !0
    }), xe("transformStyle", {
      prefix: !0
    }), xe("backfaceVisibility", {
      prefix: !0
    }), xe("userSelect", {
      prefix: !0
    }), xe("margin", {
      parser: _e("marginTop,marginRight,marginBottom,marginLeft")
    }), xe("padding", {
      parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
    }), xe("clip", {
      defaultValue: "rect(0px,0px,0px,0px)",
      parser: function parser(t, e, i, r, n, a) {
        var o, l, h;
        return 9 > d ? (l = t.currentStyle, h = 8 > d ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a);
      }
    }), xe("textShadow", {
      defaultValue: "0px 0px 0px #999",
      color: !0,
      multi: !0
    }), xe("autoRound,strictUnits", {
      parser: function parser(t, e, i, r, s) {
        return s;
      }
    }), xe("border", {
      defaultValue: "0px solid #000",
      parser: function parser(t, e, i, r, n, a) {
        return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", s, !1, "0px") + " " + Q(t, "borderTopStyle", s, !1, "solid") + " " + Q(t, "borderTopColor", s, !1, "#000")), this.format(e), n, a);
      },
      color: !0,
      formatter: function formatter(t) {
        var e = t.split(" ");
        return e[0] + " " + (e[1] || "solid") + " " + (t.match(fe) || ["#000"])[0];
      }
    }), xe("borderWidth", {
      parser: _e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
    }), xe("float,cssFloat,styleFloat", {
      parser: function parser(t, e, i, r, s) {
        var n = t.style,
            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
        return new de(n, a, 0, 0, s, -1, i, !1, 0, n[a], e);
      }
    });

    var Ee = function Ee(t) {
      var e,
          i = this.t,
          r = i.filter || Q(this.data, "filter") || "",
          s = 0 | this.s + this.c * t;
      100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !Q(this.data, "filter")) : (i.filter = r.replace(b, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(T, "opacity=" + s));
    };

    xe("opacity,alpha,autoAlpha", {
      defaultValue: "1",
      parser: function parser(t, e, i, r, n, a) {
        var o = parseFloat(Q(t, "opacity", s, !1, "1")),
            l = t.style,
            h = "autoAlpha" === i;
        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === Q(t, "visibility", s) && 0 !== e && (o = 0), W ? n = new de(l, "opacity", o, e - o, n) : (n = new de(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ee), h && (n = new de(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n;
      }
    });

    var Ye = function Ye(t, e) {
      e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e));
    },
        We = function We(t) {
      if (this.t._gsClassPT = this, 1 === t || 0 === t) {
        this.t.setAttribute("class", 0 === t ? this.b : this.e);

        for (var e = this.data, i = this.t.style; e;) {
          e.v ? i[e.p] = e.v : Ye(i, e.p), e = e._next;
        }

        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null);
      } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e);
    };

    xe("className", {
      parser: function parser(t, e, r, n, a, o, l) {
        var h,
            u,
            f,
            c,
            _,
            p = t.getAttribute("class") || "",
            d = t.style.cssText;

        if (a = n._classNamePT = new de(t, r, 0, 0, a, 2), a.setRatio = We, a.pr = -11, i = !0, a.b = p, u = K(t, s), f = t._gsClassPT) {
          for (c = {}, _ = f.data; _;) {
            c[_.p] = 1, _ = _._next;
          }

          f.setRatio(1);
        }

        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = J(t, u, K(t), l, c), t.setAttribute("class", p), a.data = h.firstMPT, t.style.cssText = d, a = a.xfirst = n.parse(t, h.difs, a, o);
      }
    });

    var Ve = function Ve(t) {
      if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
        var e,
            i,
            r,
            s,
            n,
            a = this.t.style,
            o = l.transform.parse;
        if ("all" === this.e) a.cssText = "", s = !0;else for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;) {
          i = e[r], l[i] && (l[i].parse === o ? s = !0 : i = "transformOrigin" === i ? Oe : l[i].p), Ye(a, i);
        }
        s && (Ye(a, Pe), n = this.t._gsTransform, n && (n.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform));
      }
    };

    for (xe("clearProps", {
      parser: function parser(t, e, r, s, n) {
        return n = new de(t, r, 0, 0, n, 2), n.setRatio = Ve, n.e = e, n.pr = -10, n.data = s._tween, i = !0, n;
      }
    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), ve = h.length; ve--;) {
      Te(h[ve]);
    }

    h = a.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function (t, e, o) {
      if (!t.nodeType) return !1;
      this._target = t, this._tween = o, this._vars = e, u = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, s = H(t, ""), n = this._overwriteProps;

      var h,
          _,
          d,
          m,
          g,
          v,
          y,
          x,
          T,
          b = t.style;

      if (f && "" === b.zIndex && (h = Q(t, "zIndex", s), ("auto" === h || "" === h) && this._addLazySet(b, "zIndex", 0)), "string" == typeof e && (m = b.cssText, h = K(t, s), b.cssText = m + ";" + e, h = J(t, h, K(t)).difs, !W && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, b.cssText = m), this._firstPT = _ = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
        for (T = 3 === this._transformType, Pe ? c && (f = !0, "" === b.zIndex && (y = Q(t, "zIndex", s), ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)), p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : b.zoom = 1, d = _; d && d._next;) {
          d = d._next;
        }

        x = new de(t, "transform", 0, 0, null, 2), this._linkCSSP(x, null, d), x.setRatio = Pe ? Ie : Be, x.data = this._transform || ze(t, s, !0), x.tween = o, x.pr = -1, n.pop();
      }

      if (i) {
        for (; _;) {
          for (v = _._next, d = m; d && d.pr > _.pr;) {
            d = d._next;
          }

          (_._prev = d ? d._prev : g) ? _._prev._next = _ : m = _, (_._next = d) ? d._prev = _ : g = _, _ = v;
        }

        this._firstPT = m;
      }

      return !0;
    }, h.parse = function (t, e, i, n) {
      var a,
          o,
          h,
          f,
          c,
          _,
          p,
          d,
          m,
          g,
          v = t.style;

      for (a in e) {
        _ = e[a], o = l[a], o ? i = o.parse(t, _, a, this, i, n, e) : (c = Q(t, a, s) + "", m = "string" == typeof _, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && P.test(_) ? (m || (_ = he(_), _ = (_.length > 3 ? "rgba(" : "rgb(") + _.join(",") + ")"), i = ge(v, a, c, _, !0, "transparent", i, 0, n)) : !m || -1 === _.indexOf(" ") && -1 === _.indexOf(",") ? (h = parseFloat(c), p = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === a || "height" === a ? (h = ie(t, a, s), p = "px") : "left" === a || "top" === a ? (h = $(t, a, s), p = "px") : (h = "opacity" !== a ? 0 : 1, p = "")), g = m && "=" === _.charAt(1), g ? (f = parseInt(_.charAt(0) + "1", 10), _ = _.substr(2), f *= parseFloat(_), d = _.replace(x, "")) : (f = parseFloat(_), d = m ? _.replace(x, "") : ""), "" === d && (d = a in r ? r[a] : p), _ = f || 0 === f ? (g ? f + h : f) + d : e[a], p !== d && "" !== d && (f || 0 === f) && h && (h = Z(t, a, h, p), "%" === d ? (h /= Z(t, a, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === d || "rem" === d ? h /= Z(t, a, 1, d) : "px" !== d && (f = Z(t, a, f, d), d = "px"), g && (f || 0 === f) && (_ = f + h + d)), g && (f += h), !h && 0 !== h || !f && 0 !== f ? void 0 !== v[a] && (_ || "NaN" != _ + "" && null != _) ? (i = new de(v, a, f || h || 0, 0, i, -1, a, !1, 0, c, _), i.xs0 = "none" !== _ || "display" !== a && -1 === a.indexOf("Style") ? _ : c) : j("invalid " + a + " tween value: " + e[a]) : (i = new de(v, a, h, f - h, i, 0, a, u !== !1 && ("px" === d || "zIndex" === a), 0, c, _), i.xs0 = d)) : i = ge(v, a, c, _, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
      }

      return i;
    }, h.setRatio = function (t) {
      var e,
          i,
          r,
          s = this._firstPT,
          n = 1e-6;
      if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) {
        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6) for (; s;) {
          if (e = s.c * t + s.s, s.r ? e = Math.round(e) : n > e && e > -n && (e = 0), s.type) {
            if (1 === s.type) {
              if (r = s.l, 2 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;else if (3 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;else if (4 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;else if (5 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;else {
                for (i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++) {
                  i += s["xn" + r] + s["xs" + (r + 1)];
                }

                s.t[s.p] = i;
              }
            } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
          } else s.t[s.p] = e + s.xs0;
          s = s._next;
        } else for (; s;) {
          2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
        }
      } else for (; s;) {
        if (2 !== s.type) {
          if (s.r && -1 !== s.type) {
            if (e = Math.round(s.s + s.c), s.type) {
              if (1 === s.type) {
                for (r = s.l, i = s.xs0 + e + s.xs1, r = 1; s.l > r; r++) {
                  i += s["xn" + r] + s["xs" + (r + 1)];
                }

                s.t[s.p] = i;
              }
            } else s.t[s.p] = e + s.xs0;
          } else s.t[s.p] = s.e;
        } else s.setRatio(t);
        s = s._next;
      }
    }, h._enableTransforms = function (t) {
      this._transform = this._transform || ze(this._target, s, !0), this._transformType = this._transform.svg && we || !t && 3 !== this._transformType ? 2 : 3;
    };

    var je = function je() {
      this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0);
    };

    h._addLazySet = function (t, e, i) {
      var r = this._firstPT = new de(t, e, 0, 0, this._firstPT, 2);
      r.e = i, r.setRatio = je, r.data = this;
    }, h._linkCSSP = function (t, e, i, r) {
      return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t;
    }, h._kill = function (e) {
      var i,
          r,
          s,
          n = e;

      if (e.autoAlpha || e.alpha) {
        n = {};

        for (r in e) {
          n[r] = e[r];
        }

        n.opacity = 1, n.autoAlpha && (n.visibility = 1);
      }

      return e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), t.prototype._kill.call(this, n);
    };

    var Ge = function Ge(t, e, i) {
      var r, s, n, a;
      if (t.slice) for (s = t.length; --s > -1;) {
        Ge(t[s], e, i);
      } else for (r = t.childNodes, s = r.length; --s > -1;) {
        n = r[s], a = n.type, n.style && (e.push(K(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ge(n, e, i);
      }
    };

    return a.cascadeTo = function (t, i, r) {
      var s,
          n,
          a,
          o,
          l = e.to(t, i, r),
          h = [l],
          u = [],
          f = [],
          c = [],
          _ = e._internals.reservedProps;

      for (t = l._targets || l.target, Ge(t, u, c), l.render(i, !0, !0), Ge(t, f), l.render(0, !0, !0), l._enabled(!0), s = c.length; --s > -1;) {
        if (n = J(c[s], u[s], f[s]), n.firstMPT) {
          n = n.difs;

          for (a in r) {
            _[a] && (n[a] = r[a]);
          }

          o = {};

          for (a in n) {
            o[a] = u[s][a];
          }

          h.push(e.fromTo(c[s], i, o, n));
        }
      }

      return h;
    }, t.activate([a]), a;
  }, !0);
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(), function (t) {
  "use strict";

  var e = function e() {
    return (_gsScope.GreenSockGlobals || _gsScope)[t];
  };

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'TweenLite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("CSSPlugin");
/*!
 * VERSION: beta 0.3.4
 * DATE: 2015-08-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://www.greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */

var _gsScope =  true && module.exports && "undefined" != typeof global ? global : this || window;

(function (t) {
  "use strict";

  var e = t.GreenSockGlobals || t,
      i = function i(t) {
    var i,
        s = t.split("."),
        r = e;

    for (i = 0; s.length > i; i++) {
      r[s[i]] = r = r[s[i]] || {};
    }

    return r;
  },
      s = i("com.greensock.utils"),
      r = function r(t) {
    var e = t.nodeType,
        i = "";

    if (1 === e || 9 === e || 11 === e) {
      if ("string" == typeof t.textContent) return t.textContent;

      for (t = t.firstChild; t; t = t.nextSibling) {
        i += r(t);
      }
    } else if (3 === e || 4 === e) return t.nodeValue;

    return i;
  },
      n = document,
      a = n.defaultView ? n.defaultView.getComputedStyle : function () {},
      o = /([A-Z])/g,
      l = function l(t, e, i, s) {
    var r;
    return (i = i || a(t, null)) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()), r = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle, r = i[e]), s ? r : parseInt(r, 10) || 0;
  },
      h = function h(t) {
    return t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]) ? !0 : !1;
  },
      _ = function _(t) {
    var e,
        i,
        s,
        r = [],
        n = t.length;

    for (e = 0; n > e; e++) {
      if (i = t[e], h(i)) for (s = i.length, s = 0; i.length > s; s++) {
        r.push(i[s]);
      } else r.push(i);
    }

    return r;
  },
      u = ")eefec303079ad17405c",
      c = /(?:<br>|<br\/>|<br \/>)/gi,
      f = n.all && !n.addEventListener,
      p = "<div style='position:relative;display:inline-block;" + (f ? "*display:inline;*zoom:1;'" : "'"),
      m = function m(t) {
    t = t || "";
    var e = -1 !== t.indexOf("++"),
        i = 1;
    return e && (t = t.split("++").join("")), function () {
      return p + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">");
    };
  },
      d = s.SplitText = e.SplitText = function (t, e) {
    if ("string" == typeof t && (t = d.selector(t)), !t) throw "cannot split a null element.";
    this.elements = h(t) ? _(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e);
  },
      g = function g(t, e, i) {
    var s = t.nodeType;
    if (1 === s || 9 === s || 11 === s) for (t = t.firstChild; t; t = t.nextSibling) {
      g(t, e, i);
    } else (3 === s || 4 === s) && (t.nodeValue = t.nodeValue.split(e).join(i));
  },
      v = function v(t, e) {
    for (var i = e.length; --i > -1;) {
      t.push(e[i]);
    }
  },
      y = function y(t, e, i, s, o) {
    c.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(c, u));

    var h,
        _,
        f,
        p,
        d,
        y,
        T,
        w,
        b,
        x,
        P,
        S,
        k,
        C,
        R = r(t),
        O = e.type || e.split || "chars,words,lines",
        A = -1 !== O.indexOf("lines") ? [] : null,
        D = -1 !== O.indexOf("words"),
        M = -1 !== O.indexOf("chars"),
        L = "absolute" === e.position || e.absolute === !0,
        F = L ? "&#173; " : " ",
        z = -999,
        I = a(t),
        E = l(t, "paddingLeft", I),
        N = l(t, "borderBottomWidth", I) + l(t, "borderTopWidth", I),
        X = l(t, "borderLeftWidth", I) + l(t, "borderRightWidth", I),
        B = l(t, "paddingTop", I) + l(t, "paddingBottom", I),
        j = l(t, "paddingLeft", I) + l(t, "paddingRight", I),
        U = l(t, "textAlign", I, !0),
        Y = t.clientHeight,
        q = t.clientWidth,
        V = "</div>",
        G = m(e.wordsClass),
        Q = m(e.charsClass),
        W = -1 !== (e.linesClass || "").indexOf("++"),
        Z = e.linesClass,
        H = -1 !== R.indexOf("<"),
        $ = !0,
        K = [],
        J = [],
        te = [];

    for (W && (Z = Z.split("++").join("")), H && (R = R.split("<").join("{{LT}}")), h = R.length, p = G(), d = 0; h > d; d++) {
      if (T = R.charAt(d), ")" === T && R.substr(d, 20) === u) p += ($ ? V : "") + "<BR/>", $ = !1, d !== h - 20 && R.substr(d + 20, 20) !== u && (p += " " + G(), $ = !0), d += 19;else if (" " === T && " " !== R.charAt(d - 1) && d !== h - 1 && R.substr(d - 20, 20) !== u) {
        for (p += $ ? V : "", $ = !1; " " === R.charAt(d + 1);) {
          p += F, d++;
        }

        (")" !== R.charAt(d + 1) || R.substr(d + 1, 20) !== u) && (p += F + G(), $ = !0);
      } else "{" === T && "{{LT}}" === R.substr(d, 6) ? (p += M ? Q() + "{{LT}}" + "</div>" : "{{LT}}", d += 5) : p += M && " " !== T ? Q() + T + "</div>" : T;
    }

    for (t.innerHTML = p + ($ ? V : ""), H && g(t, "{{LT}}", "<"), y = t.getElementsByTagName("*"), h = y.length, w = [], d = 0; h > d; d++) {
      w[d] = y[d];
    }

    if (A || L) for (d = 0; h > d; d++) {
      b = w[d], f = b.parentNode === t, (f || L || M && !D) && (x = b.offsetTop, A && f && x !== z && "BR" !== b.nodeName && (_ = [], A.push(_), z = x), L && (b._x = b.offsetLeft, b._y = x, b._w = b.offsetWidth, b._h = b.offsetHeight), A && (D !== f && M || (_.push(b), b._x -= E), f && d && (w[d - 1]._wordEnd = !0), "BR" === b.nodeName && b.nextSibling && "BR" === b.nextSibling.nodeName && A.push([])));
    }

    for (d = 0; h > d; d++) {
      b = w[d], f = b.parentNode === t, "BR" !== b.nodeName ? (L && (S = b.style, D || f || (b._x += b.parentNode._x, b._y += b.parentNode._y), S.left = b._x + "px", S.top = b._y + "px", S.position = "absolute", S.display = "block", S.width = b._w + 1 + "px", S.height = b._h + "px"), D ? f && "" !== b.innerHTML ? J.push(b) : M && K.push(b) : f ? (t.removeChild(b), w.splice(d--, 1), h--) : !f && M && (x = !A && !L && b.nextSibling, t.appendChild(b), x || t.appendChild(n.createTextNode(" ")), K.push(b))) : A || L ? (t.removeChild(b), w.splice(d--, 1), h--) : D || t.appendChild(b);
    }

    if (A) {
      for (L && (P = n.createElement("div"), t.appendChild(P), k = P.offsetWidth + "px", x = P.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(P)), S = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) {
        t.removeChild(t.firstChild);
      }

      for (C = !L || !D && !M, d = 0; A.length > d; d++) {
        for (_ = A[d], P = n.createElement("div"), P.style.cssText = "display:block;text-align:" + U + ";position:" + (L ? "absolute;" : "relative;"), Z && (P.className = Z + (W ? d + 1 : "")), te.push(P), h = _.length, y = 0; h > y; y++) {
          "BR" !== _[y].nodeName && (b = _[y], P.appendChild(b), C && (b._wordEnd || D) && P.appendChild(n.createTextNode(" ")), L && (0 === y && (P.style.top = b._y + "px", P.style.left = E + x + "px"), b.style.top = "0px", x && (b.style.left = b._x - x + "px")));
        }

        0 === h && (P.innerHTML = "&nbsp;"), D || M || (P.innerHTML = r(P).split(String.fromCharCode(160)).join(" ")), L && (P.style.width = k, P.style.height = b._h + "px"), t.appendChild(P);
      }

      t.style.cssText = S;
    }

    L && (Y > t.clientHeight && (t.style.height = Y - B + "px", Y > t.clientHeight && (t.style.height = Y + N + "px")), q > t.clientWidth && (t.style.width = q - j + "px", q > t.clientWidth && (t.style.width = q + X + "px"))), v(i, K), v(s, J), v(o, te);
  },
      T = d.prototype;

  T.split = function (t) {
    this.isSplit && this.revert(), this.vars = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;

    for (var e = this.elements.length; --e > -1;) {
      this._originals[e] = this.elements[e].innerHTML, y(this.elements[e], this.vars, this.chars, this.words, this.lines);
    }

    return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this;
  }, T.revert = function () {
    if (!this._originals) throw "revert() call wasn't scoped properly.";

    for (var t = this._originals.length; --t > -1;) {
      this.elements[t].innerHTML = this._originals[t];
    }

    return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this;
  }, d.selector = t.$ || t.jQuery || function (e) {
    var i = t.$ || t.jQuery;
    return i ? (d.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
  }, d.version = "0.3.4";
})(_gsScope), function (t) {
  "use strict";

  var e = function e() {
    return (_gsScope.GreenSockGlobals || _gsScope)[t];
  };

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module 'TweenLite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}("SplitText");

try {
  window.GreenSockGlobals = null;
  window._gsQueue = null;
  window._gsDefine = null;
  delete window.GreenSockGlobals;
  delete window._gsQueue;
  delete window._gsDefine;
} catch (e) {}

try {
  window.GreenSockGlobals = oldgs;
  window._gsQueue = oldgs_queue;
} catch (e) {}

if (window.tplogs == true) try {
  console.groupEnd();
} catch (e) {}

(function (e, t) {
  e.waitForImages = {
    hasImageProperties: ["backgroundImage", "listStyleImage", "borderImage", "borderCornerImage"]
  };

  e.expr[":"].uncached = function (t) {
    var n = document.createElement("img");
    n.src = t.src;
    return e(t).is('img[src!=""]') && !n.complete;
  };

  e.fn.waitForImages = function (t, n, r) {
    if (e.isPlainObject(arguments[0])) {
      n = t.each;
      r = t.waitForAll;
      t = t.finished;
    }

    t = t || e.noop;
    n = n || e.noop;
    r = !!r;

    if (!e.isFunction(t) || !e.isFunction(n)) {
      throw new TypeError("An invalid callback was supplied.");
    }

    return this.each(function () {
      var i = e(this),
          s = [];

      if (r) {
        var o = e.waitForImages.hasImageProperties || [],
            u = /url\((['"]?)(.*?)\1\)/g;
        i.find("*").each(function () {
          var t = e(this);

          if (t.is("img:uncached")) {
            s.push({
              src: t.attr("src"),
              element: t[0]
            });
          }

          e.each(o, function (e, n) {
            var r = t.css(n);

            if (!r) {
              return true;
            }

            var i;

            while (i = u.exec(r)) {
              s.push({
                src: i[2],
                element: t[0]
              });
            }
          });
        });
      } else {
        i.find("img:uncached").each(function () {
          s.push({
            src: this.src,
            element: this
          });
        });
      }

      var f = s.length,
          l = 0;

      if (f == 0) {
        t.call(i[0]);
      }

      e.each(s, function (r, s) {
        var o = new Image();
        e(o).bind("load error", function (e) {
          l++;
          n.call(s.element, l, f, e.type == "load");

          if (l == f) {
            t.call(i[0]);
            return false;
          }
        });
        o.src = s.src;
      });
    });
  };
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./public/js/jquery-2.2.0.min.js ./public/js/jquery-ui.min.js ./public/js/bootstrap.min.js ./public/js/jquery-plugin-collection.js ./public/js/revolution-slider/js/jquery.themepunch.tools.min.js ./public/js/revolution-slider/js/jquery.themepunch.revolution.min.js ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\xampp\htdocs\rowad\public\js\jquery-2.2.0.min.js */"./public/js/jquery-2.2.0.min.js");
__webpack_require__(/*! E:\xampp\htdocs\rowad\public\js\jquery-ui.min.js */"./public/js/jquery-ui.min.js");
__webpack_require__(/*! E:\xampp\htdocs\rowad\public\js\bootstrap.min.js */"./public/js/bootstrap.min.js");
__webpack_require__(/*! E:\xampp\htdocs\rowad\public\js\jquery-plugin-collection.js */"./public/js/jquery-plugin-collection.js");
__webpack_require__(/*! E:\xampp\htdocs\rowad\public\js\revolution-slider\js\jquery.themepunch.tools.min.js */"./public/js/revolution-slider/js/jquery.themepunch.tools.min.js");
module.exports = __webpack_require__(/*! E:\xampp\htdocs\rowad\public\js\revolution-slider\js\jquery.themepunch.revolution.min.js */"./public/js/revolution-slider/js/jquery.themepunch.revolution.min.js");


/***/ })

/******/ });