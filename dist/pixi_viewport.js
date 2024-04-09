var S = Object.defineProperty;
var M = (c, r, t) => r in c ? S(c, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[r] = t;
var o = (c, r, t) => (M(c, typeof r != "symbol" ? r + "" : r, t), t);
import { Point as u, Rectangle as v, Ticker as O } from "@pixi/core";
import { Container as P } from "@pixi/display";
class f {
  constructor(r) {
    o(this, "parent");
    o(this, "paused");
    this.parent = r, this.paused = !1;
  }
  destroy() {
  }
  down(r) {
    return !1;
  }
  move(r) {
    return !1;
  }
  up(r) {
    return !1;
  }
  wheel(r) {
    return !1;
  }
  update(r) {
  }
  resize() {
  }
  reset() {
  }
  pause() {
    this.paused = !0;
  }
  resume() {
    this.paused = !1;
  }
}
var C = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, H = { exports: {} };
(function(c, r) {
  (function() {
    var t, i;
    i = function(e) {
      return c.exports = e;
    }, t = {
      linear: function(e, n, s, h) {
        return s * e / h + n;
      },
      easeInQuad: function(e, n, s, h) {
        return s * (e /= h) * e + n;
      },
      easeOutQuad: function(e, n, s, h) {
        return -s * (e /= h) * (e - 2) + n;
      },
      easeInOutQuad: function(e, n, s, h) {
        return (e /= h / 2) < 1 ? s / 2 * e * e + n : -s / 2 * (--e * (e - 2) - 1) + n;
      },
      easeInCubic: function(e, n, s, h) {
        return s * (e /= h) * e * e + n;
      },
      easeOutCubic: function(e, n, s, h) {
        return s * ((e = e / h - 1) * e * e + 1) + n;
      },
      easeInOutCubic: function(e, n, s, h) {
        return (e /= h / 2) < 1 ? s / 2 * e * e * e + n : s / 2 * ((e -= 2) * e * e + 2) + n;
      },
      easeInQuart: function(e, n, s, h) {
        return s * (e /= h) * e * e * e + n;
      },
      easeOutQuart: function(e, n, s, h) {
        return -s * ((e = e / h - 1) * e * e * e - 1) + n;
      },
      easeInOutQuart: function(e, n, s, h) {
        return (e /= h / 2) < 1 ? s / 2 * e * e * e * e + n : -s / 2 * ((e -= 2) * e * e * e - 2) + n;
      },
      easeInQuint: function(e, n, s, h) {
        return s * (e /= h) * e * e * e * e + n;
      },
      easeOutQuint: function(e, n, s, h) {
        return s * ((e = e / h - 1) * e * e * e * e + 1) + n;
      },
      easeInOutQuint: function(e, n, s, h) {
        return (e /= h / 2) < 1 ? s / 2 * e * e * e * e * e + n : s / 2 * ((e -= 2) * e * e * e * e + 2) + n;
      },
      easeInSine: function(e, n, s, h) {
        return -s * Math.cos(e / h * (Math.PI / 2)) + s + n;
      },
      easeOutSine: function(e, n, s, h) {
        return s * Math.sin(e / h * (Math.PI / 2)) + n;
      },
      easeInOutSine: function(e, n, s, h) {
        return -s / 2 * (Math.cos(Math.PI * e / h) - 1) + n;
      },
      easeInExpo: function(e, n, s, h) {
        return e === 0 ? n : s * Math.pow(2, 10 * (e / h - 1)) + n;
      },
      easeOutExpo: function(e, n, s, h) {
        return e === h ? n + s : s * (-Math.pow(2, -10 * e / h) + 1) + n;
      },
      easeInOutExpo: function(e, n, s, h) {
        return (e /= h / 2) < 1 ? s / 2 * Math.pow(2, 10 * (e - 1)) + n : s / 2 * (-Math.pow(2, -10 * --e) + 2) + n;
      },
      easeInCirc: function(e, n, s, h) {
        return -s * (Math.sqrt(1 - (e /= h) * e) - 1) + n;
      },
      easeOutCirc: function(e, n, s, h) {
        return s * Math.sqrt(1 - (e = e / h - 1) * e) + n;
      },
      easeInOutCirc: function(e, n, s, h) {
        return (e /= h / 2) < 1 ? -s / 2 * (Math.sqrt(1 - e * e) - 1) + n : s / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + n;
      },
      easeInElastic: function(e, n, s, h) {
        var a, p, l;
        return l = 1.70158, p = 0, a = s, e === 0 || (e /= h), p || (p = h * 0.3), a < Math.abs(s) ? (a = s, l = p / 4) : l = p / (2 * Math.PI) * Math.asin(s / a), -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * h - l) * (2 * Math.PI) / p)) + n;
      },
      easeOutElastic: function(e, n, s, h) {
        var a, p, l;
        return l = 1.70158, p = 0, a = s, e === 0 || (e /= h), p || (p = h * 0.3), a < Math.abs(s) ? (a = s, l = p / 4) : l = p / (2 * Math.PI) * Math.asin(s / a), a * Math.pow(2, -10 * e) * Math.sin((e * h - l) * (2 * Math.PI) / p) + s + n;
      },
      easeInOutElastic: function(e, n, s, h) {
        var a, p, l;
        return l = 1.70158, p = 0, a = s, e === 0 || (e /= h / 2), p || (p = h * (0.3 * 1.5)), a < Math.abs(s) ? (a = s, l = p / 4) : l = p / (2 * Math.PI) * Math.asin(s / a), e < 1 ? -0.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * h - l) * (2 * Math.PI) / p)) + n : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * h - l) * (2 * Math.PI) / p) * 0.5 + s + n;
      },
      easeInBack: function(e, n, s, h, a) {
        return a === void 0 && (a = 1.70158), s * (e /= h) * e * ((a + 1) * e - a) + n;
      },
      easeOutBack: function(e, n, s, h, a) {
        return a === void 0 && (a = 1.70158), s * ((e = e / h - 1) * e * ((a + 1) * e + a) + 1) + n;
      },
      easeInOutBack: function(e, n, s, h, a) {
        return a === void 0 && (a = 1.70158), (e /= h / 2) < 1 ? s / 2 * (e * e * (((a *= 1.525) + 1) * e - a)) + n : s / 2 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + n;
      },
      easeInBounce: function(e, n, s, h) {
        var a;
        return a = t.easeOutBounce(h - e, 0, s, h), s - a + n;
      },
      easeOutBounce: function(e, n, s, h) {
        return (e /= h) < 1 / 2.75 ? s * (7.5625 * e * e) + n : e < 2 / 2.75 ? s * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + n : e < 2.5 / 2.75 ? s * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + n : s * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + n;
      },
      easeInOutBounce: function(e, n, s, h) {
        var a;
        return e < h / 2 ? (a = t.easeInBounce(e * 2, 0, s, h), a * 0.5 + n) : (a = t.easeOutBounce(e * 2 - h, 0, s, h), a * 0.5 + s * 0.5 + n);
      }
    }, i(t);
  }).call(C);
})(H);
const b = H.exports;
function W(c, r) {
  if (c) {
    if (typeof c == "function")
      return c;
    if (typeof c == "string")
      return b[c];
  } else
    return b[r];
}
const I = {
  removeOnInterrupt: !1,
  ease: "linear",
  time: 1e3
};
class k extends f {
  constructor(t, i = {}) {
    super(t);
    o(this, "options");
    o(this, "startX");
    o(this, "startY");
    o(this, "deltaX");
    o(this, "deltaY");
    o(this, "keepCenter");
    o(this, "startWidth", null);
    o(this, "startHeight", null);
    o(this, "deltaWidth", null);
    o(this, "deltaHeight", null);
    o(this, "width", null);
    o(this, "height", null);
    o(this, "time", 0);
    this.options = Object.assign({}, I, i), this.options.ease = W(this.options.ease), this.setupPosition(), this.setupZoom(), this.time = 0;
  }
  setupPosition() {
    typeof this.options.position < "u" ? (this.startX = this.parent.center.x, this.startY = this.parent.center.y, this.deltaX = this.options.position.x - this.parent.center.x, this.deltaY = this.options.position.y - this.parent.center.y, this.keepCenter = !1) : this.keepCenter = !0;
  }
  setupZoom() {
    this.width = null, this.height = null, typeof this.options.scale < "u" ? this.width = this.parent.screenWidth / this.options.scale : typeof this.options.scaleX < "u" || typeof this.options.scaleY < "u" ? (typeof this.options.scaleX < "u" && (this.width = this.parent.screenWidth / this.options.scaleX), typeof this.options.scaleY < "u" && (this.height = this.parent.screenHeight / this.options.scaleY)) : (typeof this.options.width < "u" && (this.width = this.options.width), typeof this.options.height < "u" && (this.height = this.options.height)), this.width !== null && (this.startWidth = this.parent.screenWidthInWorldPixels, this.deltaWidth = this.width - this.startWidth), this.height !== null && (this.startHeight = this.parent.screenHeightInWorldPixels, this.deltaHeight = this.height - this.startHeight);
  }
  down() {
    return this.options.removeOnInterrupt && this.parent.plugins.remove("animate"), !1;
  }
  complete() {
    this.parent.plugins.remove("animate"), this.width !== null && this.parent.fitWidth(this.width, this.keepCenter, this.height === null), this.height !== null && this.parent.fitHeight(this.height, this.keepCenter, this.width === null), !this.keepCenter && this.options.position && this.parent.moveCenter(this.options.position), this.parent.emit("animate-end", this.parent), this.options.callbackOnComplete && this.options.callbackOnComplete(this.parent);
  }
  update(t) {
    if (this.paused)
      return;
    this.time += t;
    const i = new u(this.parent.scale.x, this.parent.scale.y);
    if (this.time >= this.options.time) {
      const e = this.parent.width, n = this.parent.height;
      this.complete(), (e !== this.parent.width || n !== this.parent.height) && this.parent.emit("zoomed", { viewport: this.parent, original: i, type: "animate" });
    } else {
      const e = this.options.ease(this.time, 0, 1, this.options.time);
      if (this.width !== null) {
        const n = this.startWidth, s = this.deltaWidth;
        this.parent.fitWidth(
          n + s * e,
          this.keepCenter,
          this.height === null
        );
      }
      if (this.height !== null) {
        const n = this.startHeight, s = this.deltaHeight;
        this.parent.fitHeight(
          n + s * e,
          this.keepCenter,
          this.width === null
        );
      }
      if (this.width === null ? this.parent.scale.x = this.parent.scale.y : this.height === null && (this.parent.scale.y = this.parent.scale.x), !this.keepCenter) {
        const n = this.startX, s = this.startY, h = this.deltaX, a = this.deltaY, p = new u(this.parent.x, this.parent.y);
        this.parent.moveCenter(n + h * e, s + a * e), this.parent.emit("moved", { viewport: this.parent, original: p, type: "animate" });
      }
      (this.width || this.height) && this.parent.emit("zoomed", { viewport: this.parent, original: i, type: "animate" });
    }
  }
}
const Y = {
  sides: "all",
  friction: 0.5,
  time: 150,
  ease: "easeInOutSine",
  underflow: "center",
  bounceBox: null
};
class X extends f {
  constructor(t, i = {}) {
    super(t);
    o(this, "options");
    o(this, "left");
    o(this, "top");
    o(this, "right");
    o(this, "bottom");
    o(this, "underflowX");
    o(this, "underflowY");
    o(this, "ease");
    o(this, "toX");
    o(this, "toY");
    this.options = Object.assign({}, Y, i), this.ease = W(this.options.ease, "easeInOutSine"), this.options.sides ? this.options.sides === "all" ? this.top = this.bottom = this.left = this.right = !0 : this.options.sides === "horizontal" ? (this.right = this.left = !0, this.top = this.bottom = !1) : this.options.sides === "vertical" ? (this.left = this.right = !1, this.top = this.bottom = !0) : (this.top = this.options.sides.indexOf("top") !== -1, this.bottom = this.options.sides.indexOf("bottom") !== -1, this.left = this.options.sides.indexOf("left") !== -1, this.right = this.options.sides.indexOf("right") !== -1) : this.left = this.top = this.right = this.bottom = !1;
    const e = this.options.underflow.toLowerCase();
    e === "center" ? (this.underflowX = 0, this.underflowY = 0) : (this.underflowX = e.indexOf("left") !== -1 ? -1 : e.indexOf("right") !== -1 ? 1 : 0, this.underflowY = e.indexOf("top") !== -1 ? -1 : e.indexOf("bottom") !== -1 ? 1 : 0), this.reset();
  }
  isActive() {
    return this.toX !== null || this.toY !== null;
  }
  down() {
    return this.toX = this.toY = null, !1;
  }
  up() {
    return this.bounce(), !1;
  }
  update(t) {
    if (!this.paused) {
      if (this.bounce(), this.toX) {
        const i = this.toX;
        i.time += t, this.parent.emit("moved", { viewport: this.parent, type: "bounce-x" }), i.time >= this.options.time ? (this.parent.x = i.end, this.toX = null, this.parent.emit("bounce-x-end", this.parent)) : this.parent.x = this.ease(i.time, i.start, i.delta, this.options.time);
      }
      if (this.toY) {
        const i = this.toY;
        i.time += t, this.parent.emit("moved", { viewport: this.parent, type: "bounce-y" }), i.time >= this.options.time ? (this.parent.y = i.end, this.toY = null, this.parent.emit("bounce-y-end", this.parent)) : this.parent.y = this.ease(i.time, i.start, i.delta, this.options.time);
      }
    }
  }
  calcUnderflowX() {
    let t;
    switch (this.underflowX) {
      case -1:
        t = 0;
        break;
      case 1:
        t = this.parent.screenWidth - this.parent.screenWorldWidth;
        break;
      default:
        t = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
    }
    return t;
  }
  calcUnderflowY() {
    let t;
    switch (this.underflowY) {
      case -1:
        t = 0;
        break;
      case 1:
        t = this.parent.screenHeight - this.parent.screenWorldHeight;
        break;
      default:
        t = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
    }
    return t;
  }
  oob() {
    const t = this.options.bounceBox;
    if (t) {
      const i = typeof t.x > "u" ? 0 : t.x, e = typeof t.y > "u" ? 0 : t.y, n = typeof t.width > "u" ? this.parent.worldWidth : t.width, s = typeof t.height > "u" ? this.parent.worldHeight : t.height;
      return {
        left: this.parent.left < i,
        right: this.parent.right > n,
        top: this.parent.top < e,
        bottom: this.parent.bottom > s,
        topLeft: new u(
          i * this.parent.scale.x,
          e * this.parent.scale.y
        ),
        bottomRight: new u(
          n * this.parent.scale.x - this.parent.screenWidth,
          s * this.parent.scale.y - this.parent.screenHeight
        )
      };
    }
    return {
      left: this.parent.left < 0,
      right: this.parent.right > this.parent.worldWidth,
      top: this.parent.top < 0,
      bottom: this.parent.bottom > this.parent.worldHeight,
      topLeft: new u(0, 0),
      bottomRight: new u(
        this.parent.worldWidth * this.parent.scale.x - this.parent.screenWidth,
        this.parent.worldHeight * this.parent.scale.y - this.parent.screenHeight
      )
    };
  }
  bounce() {
    var s, h;
    if (this.paused)
      return;
    let t, i = this.parent.plugins.get("decelerate", !0);
    i && (i.x || i.y) && (i.x && i.percentChangeX === ((s = i.options) == null ? void 0 : s.friction) || i.y && i.percentChangeY === ((h = i.options) == null ? void 0 : h.friction)) && (t = this.oob(), (t.left && this.left || t.right && this.right) && (i.percentChangeX = this.options.friction), (t.top && this.top || t.bottom && this.bottom) && (i.percentChangeY = this.options.friction));
    const e = this.parent.plugins.get("drag", !0) || {}, n = this.parent.plugins.get("pinch", !0) || {};
    if (i = i || {}, !(e != null && e.active) && !(n != null && n.active) && (!this.toX || !this.toY) && (!i.x || !i.y)) {
      t = t || this.oob();
      const a = t.topLeft, p = t.bottomRight;
      if (!this.toX && !i.x) {
        let l = null;
        t.left && this.left ? l = this.parent.screenWorldWidth < this.parent.screenWidth ? this.calcUnderflowX() : -a.x : t.right && this.right && (l = this.parent.screenWorldWidth < this.parent.screenWidth ? this.calcUnderflowX() : -p.x), l !== null && this.parent.x !== l && (this.toX = { time: 0, start: this.parent.x, delta: l - this.parent.x, end: l }, this.parent.emit("bounce-x-start", this.parent));
      }
      if (!this.toY && !i.y) {
        let l = null;
        t.top && this.top ? l = this.parent.screenWorldHeight < this.parent.screenHeight ? this.calcUnderflowY() : -a.y : t.bottom && this.bottom && (l = this.parent.screenWorldHeight < this.parent.screenHeight ? this.calcUnderflowY() : -p.y), l !== null && this.parent.y !== l && (this.toY = { time: 0, start: this.parent.y, delta: l - this.parent.y, end: l }, this.parent.emit("bounce-y-start", this.parent));
      }
    }
  }
  reset() {
    this.toX = this.toY = null, this.bounce();
  }
}
const z = {
  left: !1,
  right: !1,
  top: !1,
  bottom: !1,
  direction: null,
  underflow: "center"
};
class A extends f {
  constructor(t, i = {}) {
    super(t);
    o(this, "options");
    o(this, "last");
    o(this, "noUnderflow");
    o(this, "underflowX");
    o(this, "underflowY");
    this.options = Object.assign({}, z, i), this.options.direction && (this.options.left = this.options.direction === "x" || this.options.direction === "all" ? !0 : null, this.options.right = this.options.direction === "x" || this.options.direction === "all" ? !0 : null, this.options.top = this.options.direction === "y" || this.options.direction === "all" ? !0 : null, this.options.bottom = this.options.direction === "y" || this.options.direction === "all" ? !0 : null), this.parseUnderflow(), this.last = { x: null, y: null, scaleX: null, scaleY: null }, this.update();
  }
  parseUnderflow() {
    const t = this.options.underflow.toLowerCase();
    t === "none" ? this.noUnderflow = !0 : t === "center" ? (this.underflowX = this.underflowY = 0, this.noUnderflow = !1) : (this.underflowX = t.indexOf("left") !== -1 ? -1 : t.indexOf("right") !== -1 ? 1 : 0, this.underflowY = t.indexOf("top") !== -1 ? -1 : t.indexOf("bottom") !== -1 ? 1 : 0, this.noUnderflow = !1);
  }
  move() {
    return this.update(), !1;
  }
  update() {
    if (this.paused || this.parent.x === this.last.x && this.parent.y === this.last.y && this.parent.scale.x === this.last.scaleX && this.parent.scale.y === this.last.scaleY)
      return;
    const t = new u(this.parent.x, this.parent.y), i = this.parent.plugins.decelerate || {};
    if (this.options.left !== null || this.options.right !== null) {
      let e = !1;
      if (!this.noUnderflow && this.parent.screenWorldWidth < this.parent.screenWidth)
        switch (this.underflowX) {
          case -1:
            this.parent.x !== 0 && (this.parent.x = 0, e = !0);
            break;
          case 1:
            this.parent.x !== this.parent.screenWidth - this.parent.screenWorldWidth && (this.parent.x = this.parent.screenWidth - this.parent.screenWorldWidth, e = !0);
            break;
          default:
            this.parent.x !== (this.parent.screenWidth - this.parent.screenWorldWidth) / 2 && (this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2, e = !0);
        }
      else
        this.options.left !== null && this.parent.left < (this.options.left === !0 ? 0 : this.options.left) && (this.parent.x = -(this.options.left === !0 ? 0 : this.options.left) * this.parent.scale.x, i.x = 0, e = !0), this.options.right !== null && this.parent.right > (this.options.right === !0 ? this.parent.worldWidth : this.options.right) && (this.parent.x = -(this.options.right === !0 ? this.parent.worldWidth : this.options.right) * this.parent.scale.x + this.parent.screenWidth, i.x = 0, e = !0);
      e && this.parent.emit("moved", { viewport: this.parent, original: t, type: "clamp-x" });
    }
    if (this.options.top !== null || this.options.bottom !== null) {
      let e = !1;
      if (!this.noUnderflow && this.parent.screenWorldHeight < this.parent.screenHeight)
        switch (this.underflowY) {
          case -1:
            this.parent.y !== 0 && (this.parent.y = 0, e = !0);
            break;
          case 1:
            this.parent.y !== this.parent.screenHeight - this.parent.screenWorldHeight && (this.parent.y = this.parent.screenHeight - this.parent.screenWorldHeight, e = !0);
            break;
          default:
            this.parent.y !== (this.parent.screenHeight - this.parent.screenWorldHeight) / 2 && (this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2, e = !0);
        }
      else
        this.options.top !== null && this.parent.top < (this.options.top === !0 ? 0 : this.options.top) && (this.parent.y = -(this.options.top === !0 ? 0 : this.options.top) * this.parent.scale.y, i.y = 0, e = !0), this.options.bottom !== null && this.parent.bottom > (this.options.bottom === !0 ? this.parent.worldHeight : this.options.bottom) && (this.parent.y = -(this.options.bottom === !0 ? this.parent.worldHeight : this.options.bottom) * this.parent.scale.y + this.parent.screenHeight, i.y = 0, e = !0);
      e && this.parent.emit("moved", { viewport: this.parent, original: t, type: "clamp-y" });
    }
    this.last.x = this.parent.x, this.last.y = this.parent.y, this.last.scaleX = this.parent.scale.x, this.last.scaleY = this.parent.scale.y;
  }
  reset() {
    this.update();
  }
}
const _ = {
  minWidth: null,
  minHeight: null,
  maxWidth: null,
  maxHeight: null,
  minScale: null,
  maxScale: null
};
class T extends f {
  constructor(t, i = {}) {
    super(t);
    o(this, "options");
    this.options = Object.assign({}, _, i), this.clamp();
  }
  resize() {
    this.clamp();
  }
  clamp() {
    if (!this.paused) {
      if (this.options.minWidth || this.options.minHeight || this.options.maxWidth || this.options.maxHeight) {
        let t = this.parent.worldScreenWidth, i = this.parent.worldScreenHeight;
        if (this.options.minWidth !== null && t < this.options.minWidth) {
          const e = this.parent.scale.x;
          this.parent.fitWidth(this.options.minWidth, !1, !1, !0), this.parent.scale.y *= this.parent.scale.x / e, t = this.parent.worldScreenWidth, i = this.parent.worldScreenHeight, this.parent.emit("zoomed", { viewport: this.parent, type: "clamp-zoom" });
        }
        if (this.options.maxWidth !== null && t > this.options.maxWidth) {
          const e = this.parent.scale.x;
          this.parent.fitWidth(this.options.maxWidth, !1, !1, !0), this.parent.scale.y *= this.parent.scale.x / e, t = this.parent.worldScreenWidth, i = this.parent.worldScreenHeight, this.parent.emit("zoomed", { viewport: this.parent, type: "clamp-zoom" });
        }
        if (this.options.minHeight !== null && i < this.options.minHeight) {
          const e = this.parent.scale.y;
          this.parent.fitHeight(this.options.minHeight, !1, !1, !0), this.parent.scale.x *= this.parent.scale.y / e, t = this.parent.worldScreenWidth, i = this.parent.worldScreenHeight, this.parent.emit("zoomed", { viewport: this.parent, type: "clamp-zoom" });
        }
        if (this.options.maxHeight !== null && i > this.options.maxHeight) {
          const e = this.parent.scale.y;
          this.parent.fitHeight(this.options.maxHeight, !1, !1, !0), this.parent.scale.x *= this.parent.scale.y / e, this.parent.emit("zoomed", { viewport: this.parent, type: "clamp-zoom" });
        }
      } else if (this.options.minScale || this.options.maxScale) {
        const t = { x: null, y: null }, i = { x: null, y: null };
        if (typeof this.options.minScale == "number")
          t.x = this.options.minScale, t.y = this.options.minScale;
        else if (this.options.minScale !== null) {
          const s = this.options.minScale;
          t.x = typeof s.x > "u" ? null : s.x, t.y = typeof s.y > "u" ? null : s.y;
        }
        if (typeof this.options.maxScale == "number")
          i.x = this.options.maxScale, i.y = this.options.maxScale;
        else if (this.options.maxScale !== null) {
          const s = this.options.maxScale;
          i.x = typeof s.x > "u" ? null : s.x, i.y = typeof s.y > "u" ? null : s.y;
        }
        let e = this.parent.scale.x, n = this.parent.scale.y;
        t.x !== null && e < t.x && (e = t.x), i.x !== null && e > i.x && (e = i.x), t.y !== null && n < t.y && (n = t.y), i.y !== null && n > i.y && (n = i.y), (e !== this.parent.scale.x || n !== this.parent.scale.y) && (this.parent.scale.set(e, n), this.parent.emit("zoomed", { viewport: this.parent, type: "clamp-zoom" }));
      }
    }
  }
  reset() {
    this.clamp();
  }
}
const E = {
  friction: 0.98,
  bounce: 0.8,
  minSpeed: 0.01
}, m = 16;
class D extends f {
  constructor(t, i = {}) {
    super(t);
    o(this, "options");
    o(this, "x");
    o(this, "y");
    o(this, "percentChangeX");
    o(this, "percentChangeY");
    o(this, "saved");
    o(this, "timeSinceRelease");
    this.options = Object.assign({}, E, i), this.saved = [], this.timeSinceRelease = 0, this.reset(), this.parent.on("moved", (e) => this.handleMoved(e));
  }
  down() {
    return this.saved = [], this.x = this.y = null, !1;
  }
  isActive() {
    return !!(this.x || this.y);
  }
  move() {
    if (this.paused)
      return !1;
    const t = this.parent.input.count();
    return (t === 1 || t > 1 && !this.parent.plugins.get("pinch", !0)) && (this.saved.push({ x: this.parent.x, y: this.parent.y, time: performance.now() }), this.saved.length > 60 && this.saved.splice(0, 30)), !1;
  }
  handleMoved(t) {
    if (this.saved.length) {
      const i = this.saved[this.saved.length - 1];
      t.type === "clamp-x" && t.original ? i.x === t.original.x && (i.x = this.parent.x) : t.type === "clamp-y" && t.original && i.y === t.original.y && (i.y = this.parent.y);
    }
  }
  up() {
    if (this.parent.input.count() === 0 && this.saved.length) {
      const t = performance.now();
      for (const i of this.saved)
        if (i.time >= t - 100) {
          const e = t - i.time;
          this.x = (this.parent.x - i.x) / e, this.y = (this.parent.y - i.y) / e, this.percentChangeX = this.percentChangeY = this.options.friction, this.timeSinceRelease = 0;
          break;
        }
    }
    return !1;
  }
  activate(t) {
    t = t || {}, typeof t.x < "u" && (this.x = t.x, this.percentChangeX = this.options.friction), typeof t.y < "u" && (this.y = t.y, this.percentChangeY = this.options.friction);
  }
  update(t) {
    if (this.paused)
      return;
    const i = this.x || this.y, e = this.timeSinceRelease, n = this.timeSinceRelease + t;
    if (this.x) {
      const s = this.percentChangeX, h = Math.log(s);
      this.parent.x += this.x * m / h * (Math.pow(s, n / m) - Math.pow(s, e / m)), this.x *= Math.pow(this.percentChangeX, t / m);
    }
    if (this.y) {
      const s = this.percentChangeY, h = Math.log(s);
      this.parent.y += this.y * m / h * (Math.pow(s, n / m) - Math.pow(s, e / m)), this.y *= Math.pow(this.percentChangeY, t / m);
    }
    this.timeSinceRelease += t, this.x && this.y ? Math.abs(this.x) < this.options.minSpeed && Math.abs(this.y) < this.options.minSpeed && (this.x = 0, this.y = 0) : (Math.abs(this.x || 0) < this.options.minSpeed && (this.x = 0), Math.abs(this.y || 0) < this.options.minSpeed && (this.y = 0)), i && this.parent.emit("moved", { viewport: this.parent, type: "decelerate" });
  }
  reset() {
    this.x = this.y = null;
  }
}
const L = {
  direction: "all",
  pressDrag: !0,
  wheel: !0,
  wheelScroll: 1,
  reverse: !1,
  clampWheel: !1,
  underflow: "center",
  factor: 1,
  mouseButtons: "all",
  keyToPress: null,
  ignoreKeyToPressOnTouch: !1,
  lineHeight: 20,
  wheelSwapAxes: !1
};
class U extends f {
  constructor(t, i = {}) {
    super(t);
    o(this, "options");
    o(this, "moved");
    o(this, "reverse");
    o(this, "xDirection");
    o(this, "yDirection");
    o(this, "keyIsPressed");
    o(this, "mouse");
    o(this, "underflowX");
    o(this, "underflowY");
    o(this, "last");
    o(this, "current");
    o(this, "windowEventHandlers", []);
    this.options = Object.assign({}, L, i), this.moved = !1, this.reverse = this.options.reverse ? 1 : -1, this.xDirection = !this.options.direction || this.options.direction === "all" || this.options.direction === "x", this.yDirection = !this.options.direction || this.options.direction === "all" || this.options.direction === "y", this.keyIsPressed = !1, this.parseUnderflow(), this.mouseButtons(this.options.mouseButtons), this.options.keyToPress && this.handleKeyPresses(this.options.keyToPress);
  }
  handleKeyPresses(t) {
    const i = (n) => {
      t.includes(n.code) && (this.keyIsPressed = !0);
    }, e = (n) => {
      t.includes(n.code) && (this.keyIsPressed = !1);
    };
    this.addWindowEventHandler("keyup", e), this.addWindowEventHandler("keydown", i);
  }
  addWindowEventHandler(t, i) {
    window.addEventListener(t, i), this.windowEventHandlers.push({ event: t, handler: i });
  }
  destroy() {
    this.windowEventHandlers.forEach(({ event: t, handler: i }) => {
      window.removeEventListener(t, i);
    });
  }
  mouseButtons(t) {
    !t || t === "all" ? this.mouse = [!0, !0, !0] : this.mouse = [
      t.indexOf("left") !== -1,
      t.indexOf("middle") !== -1,
      t.indexOf("right") !== -1
    ];
  }
  parseUnderflow() {
    const t = this.options.underflow.toLowerCase();
    t === "center" ? (this.underflowX = 0, this.underflowY = 0) : (t.includes("left") ? this.underflowX = -1 : t.includes("right") ? this.underflowX = 1 : this.underflowX = 0, t.includes("top") ? this.underflowY = -1 : t.includes("bottom") ? this.underflowY = 1 : this.underflowY = 0);
  }
  checkButtons(t) {
    const i = t.pointerType === "mouse", e = this.parent.input.count();
    return !!((e === 1 || e > 1 && !this.parent.plugins.get("pinch", !0)) && (!i || this.mouse[t.button]));
  }
  checkKeyPress(t) {
    return !this.options.keyToPress || this.keyIsPressed || this.options.ignoreKeyToPressOnTouch && t.data.pointerType === "touch";
  }
  down(t) {
    return this.paused || !this.options.pressDrag ? !1 : this.checkButtons(t) && this.checkKeyPress(t) ? (this.last = { x: t.global.x, y: t.global.y }, this.current = t.pointerId, !0) : (this.last = null, !1);
  }
  get active() {
    return this.moved;
  }
  move(t) {
    if (this.paused || !this.options.pressDrag)
      return !1;
    if (this.last && this.current === t.data.pointerId) {
      const i = t.global.x, e = t.global.y, n = this.parent.input.count();
      if (n === 1 || n > 1 && !this.parent.plugins.get("pinch", !0)) {
        const s = i - this.last.x, h = e - this.last.y;
        if (this.moved || this.xDirection && this.parent.input.checkThreshold(s) || this.yDirection && this.parent.input.checkThreshold(h)) {
          const a = { x: i, y: e };
          return this.xDirection && (this.parent.x += (a.x - this.last.x) * this.options.factor), this.yDirection && (this.parent.y += (a.y - this.last.y) * this.options.factor), this.last = a, this.moved || this.parent.emit("drag-start", {
            event: t,
            screen: new u(this.last.x, this.last.y),
            world: this.parent.toWorld(new u(this.last.x, this.last.y)),
            viewport: this.parent
          }), this.moved = !0, this.parent.emit("moved", { viewport: this.parent, type: "drag" }), !0;
        }
      } else
        this.moved = !1;
    }
    return !1;
  }
  up(t) {
    if (this.paused)
      return !1;
    const i = this.parent.input.touches;
    if (i.length === 1) {
      const e = i[0];
      return e.last && (this.last = { x: e.last.x, y: e.last.y }, this.current = e.id), this.moved = !1, !0;
    } else if (this.last && this.moved) {
      const e = new u(this.last.x, this.last.y);
      return this.parent.emit("drag-end", {
        event: t,
        screen: e,
        world: this.parent.toWorld(e),
        viewport: this.parent
      }), this.last = null, this.moved = !1, !0;
    }
    return !1;
  }
  wheel(t) {
    if (this.paused)
      return !1;
    if (this.options.wheel) {
      const i = this.parent.plugins.get("wheel", !0);
      if (!i || !i.options.wheelZoom && !t.ctrlKey) {
        const e = t.deltaMode ? this.options.lineHeight : 1, n = [t.deltaX, t.deltaY], [s, h] = this.options.wheelSwapAxes ? n.reverse() : n;
        return this.xDirection && (this.parent.x += s * e * this.options.wheelScroll * this.reverse), this.yDirection && (this.parent.y += h * e * this.options.wheelScroll * this.reverse), this.options.clampWheel && this.clamp(), this.parent.emit("wheel-scroll", this.parent), this.parent.emit("moved", { viewport: this.parent, type: "wheel" }), this.parent.options.passiveWheel || t.preventDefault(), this.parent.options.stopPropagation && t.stopPropagation(), !0;
      }
    }
    return !1;
  }
  resume() {
    this.last = null, this.paused = !1;
  }
  clamp() {
    const t = this.parent.plugins.get("decelerate", !0) || {};
    if (this.options.clampWheel !== "y")
      if (this.parent.screenWorldWidth < this.parent.screenWidth)
        switch (this.underflowX) {
          case -1:
            this.parent.x = 0;
            break;
          case 1:
            this.parent.x = this.parent.screenWidth - this.parent.screenWorldWidth;
            break;
          default:
            this.parent.x = (this.parent.screenWidth - this.parent.screenWorldWidth) / 2;
        }
      else
        this.parent.left < 0 ? (this.parent.x = 0, t.x = 0) : this.parent.right > this.parent.worldWidth && (this.parent.x = -this.parent.worldWidth * this.parent.scale.x + this.parent.screenWidth, t.x = 0);
    if (this.options.clampWheel !== "x")
      if (this.parent.screenWorldHeight < this.parent.screenHeight)
        switch (this.underflowY) {
          case -1:
            this.parent.y = 0;
            break;
          case 1:
            this.parent.y = this.parent.screenHeight - this.parent.screenWorldHeight;
            break;
          default:
            this.parent.y = (this.parent.screenHeight - this.parent.screenWorldHeight) / 2;
        }
      else
        this.parent.top < 0 && (this.parent.y = 0, t.y = 0), this.parent.bottom > this.parent.worldHeight && (this.parent.y = -this.parent.worldHeight * this.parent.scale.y + this.parent.screenHeight, t.y = 0);
  }
}
const V = {
  speed: 0,
  acceleration: null,
  radius: null
};
class F extends f {
  constructor(t, i, e = {}) {
    super(t);
    o(this, "options");
    o(this, "target");
    o(this, "velocity");
    this.target = i, this.options = Object.assign({}, V, e), this.velocity = { x: 0, y: 0 };
  }
  update(t) {
    if (this.paused)
      return;
    const i = this.parent.center;
    let e = this.target.x, n = this.target.y;
    if (this.options.radius)
      if (Math.sqrt(Math.pow(this.target.y - i.y, 2) + Math.pow(this.target.x - i.x, 2)) > this.options.radius) {
        const p = Math.atan2(this.target.y - i.y, this.target.x - i.x);
        e = this.target.x - Math.cos(p) * this.options.radius, n = this.target.y - Math.sin(p) * this.options.radius;
      } else
        return;
    const s = e - i.x, h = n - i.y;
    if (s || h)
      if (this.options.speed)
        if (this.options.acceleration) {
          const a = Math.atan2(n - i.y, e - i.x), p = Math.sqrt(Math.pow(s, 2) + Math.pow(h, 2));
          if (p) {
            const l = (Math.pow(this.velocity.x, 2) + Math.pow(this.velocity.y, 2)) / (2 * this.options.acceleration);
            p > l ? this.velocity = {
              x: Math.min(this.velocity.x + (this.options.acceleration * t, this.options.speed)),
              y: Math.min(this.velocity.y + (this.options.acceleration * t, this.options.speed))
            } : this.velocity = {
              x: Math.max(this.velocity.x - this.options.acceleration * this.options.speed, 0),
              y: Math.max(this.velocity.y - this.options.acceleration * this.options.speed, 0)
            };
            const d = Math.cos(a) * this.velocity.x, g = Math.sin(a) * this.velocity.y, y = Math.abs(d) > Math.abs(s) ? e : i.x + d, x = Math.abs(g) > Math.abs(h) ? n : i.y + g;
            this.parent.moveCenter(y, x), this.parent.emit("moved", { viewport: this.parent, type: "follow" });
          }
        } else {
          const a = Math.atan2(n - i.y, e - i.x), p = Math.cos(a) * this.options.speed, l = Math.sin(a) * this.options.speed, d = Math.abs(p) > Math.abs(s) ? e : i.x + p, g = Math.abs(l) > Math.abs(h) ? n : i.y + l;
          this.parent.moveCenter(d, g), this.parent.emit("moved", { viewport: this.parent, type: "follow" });
        }
      else
        this.parent.moveCenter(e, n), this.parent.emit("moved", { viewport: this.parent, type: "follow" });
  }
}
const B = {
  radius: null,
  distance: null,
  top: null,
  bottom: null,
  left: null,
  right: null,
  speed: 8,
  reverse: !1,
  noDecelerate: !1,
  linear: !1,
  allowButtons: !1
};
class N extends f {
  constructor(t, i = {}) {
    super(t);
    o(this, "options");
    o(this, "reverse");
    o(this, "radiusSquared");
    o(this, "left");
    o(this, "top");
    o(this, "right");
    o(this, "bottom");
    o(this, "horizontal");
    o(this, "vertical");
    this.options = Object.assign({}, B, i), this.reverse = this.options.reverse ? 1 : -1, this.radiusSquared = typeof this.options.radius == "number" ? Math.pow(this.options.radius, 2) : null, this.resize();
  }
  resize() {
    const t = this.options.distance;
    t !== null ? (this.left = t, this.top = t, this.right = this.parent.screenWidth - t, this.bottom = this.parent.screenHeight - t) : this.options.radius || (this.left = this.options.left, this.top = this.options.top, this.right = this.options.right === null ? null : this.parent.screenWidth - this.options.right, this.bottom = this.options.bottom === null ? null : this.parent.screenHeight - this.options.bottom);
  }
  down() {
    return this.paused || this.options.allowButtons || (this.horizontal = this.vertical = null), !1;
  }
  move(t) {
    if (this.paused || t.pointerType !== "mouse" && t.pointerId !== 1 || !this.options.allowButtons && t.buttons !== 0)
      return !1;
    const i = t.global.x, e = t.global.y;
    if (this.radiusSquared) {
      const n = this.parent.toScreen(this.parent.center);
      if (Math.pow(n.x - i, 2) + Math.pow(n.y - e, 2) >= this.radiusSquared) {
        const h = Math.atan2(n.y - e, n.x - i);
        this.options.linear ? (this.horizontal = Math.round(Math.cos(h)) * this.options.speed * this.reverse * (60 / 1e3), this.vertical = Math.round(Math.sin(h)) * this.options.speed * this.reverse * (60 / 1e3)) : (this.horizontal = Math.cos(h) * this.options.speed * this.reverse * (60 / 1e3), this.vertical = Math.sin(h) * this.options.speed * this.reverse * (60 / 1e3));
      } else
        this.horizontal && this.decelerateHorizontal(), this.vertical && this.decelerateVertical(), this.horizontal = this.vertical = 0;
    } else
      this.left !== null && i < this.left ? this.horizontal = Number(this.reverse) * this.options.speed * (60 / 1e3) : this.right !== null && i > this.right ? this.horizontal = -1 * this.reverse * this.options.speed * (60 / 1e3) : (this.decelerateHorizontal(), this.horizontal = 0), this.top !== null && e < this.top ? this.vertical = Number(this.reverse) * this.options.speed * (60 / 1e3) : this.bottom !== null && e > this.bottom ? this.vertical = -1 * this.reverse * this.options.speed * (60 / 1e3) : (this.decelerateVertical(), this.vertical = 0);
    return !1;
  }
  decelerateHorizontal() {
    const t = this.parent.plugins.get("decelerate", !0);
    this.horizontal && t && !this.options.noDecelerate && t.activate({ x: this.horizontal * this.options.speed * this.reverse / (1e3 / 60) });
  }
  decelerateVertical() {
    const t = this.parent.plugins.get("decelerate", !0);
    this.vertical && t && !this.options.noDecelerate && t.activate({ y: this.vertical * this.options.speed * this.reverse / (1e3 / 60) });
  }
  up() {
    return this.paused || (this.horizontal && this.decelerateHorizontal(), this.vertical && this.decelerateVertical(), this.horizontal = this.vertical = null), !1;
  }
  update() {
    if (!this.paused && (this.horizontal || this.vertical)) {
      const t = this.parent.center;
      this.horizontal && (t.x += this.horizontal * this.options.speed), this.vertical && (t.y += this.vertical * this.options.speed), this.parent.moveCenter(t), this.parent.emit("moved", { viewport: this.parent, type: "mouse-edges" });
    }
  }
}
const Z = {
  noDrag: !1,
  percent: 1,
  center: null,
  factor: 1,
  axis: "all"
};
class R extends f {
  constructor(t, i = {}) {
    super(t);
    o(this, "options");
    o(this, "active", !1);
    o(this, "pinching", !1);
    o(this, "moved", !1);
    o(this, "lastCenter");
    this.options = Object.assign({}, Z, i);
  }
  down() {
    return this.parent.input.count() >= 2 ? (this.active = !0, !0) : !1;
  }
  isAxisX() {
    return ["all", "x"].includes(this.options.axis);
  }
  isAxisY() {
    return ["all", "y"].includes(this.options.axis);
  }
  move(t) {
    if (this.paused || !this.active)
      return !1;
    const i = t.global.x, e = t.global.y, n = this.parent.input.touches;
    if (n.length >= 2) {
      const s = n[0], h = n[1], a = s.last && h.last ? Math.sqrt(Math.pow(h.last.x - s.last.x, 2) + Math.pow(h.last.y - s.last.y, 2)) : null;
      if (s.id === t.pointerId ? s.last = { x: i, y: e, data: t } : h.id === t.pointerId && (h.last = { x: i, y: e, data: t }), a) {
        let p;
        const l = new u(
          s.last.x + (h.last.x - s.last.x) / 2,
          s.last.y + (h.last.y - s.last.y) / 2
        );
        this.options.center || (p = this.parent.toLocal(l));
        let d = Math.sqrt(Math.pow(
          h.last.x - s.last.x,
          2
        ) + Math.pow(h.last.y - s.last.y, 2));
        d = d === 0 ? d = 1e-10 : d;
        const g = (1 - a / d) * this.options.percent * (this.isAxisX() ? this.parent.scale.x : this.parent.scale.y);
        this.isAxisX() && (this.parent.scale.x += g), this.isAxisY() && (this.parent.scale.y += g), this.parent.emit("zoomed", { viewport: this.parent, type: "pinch", center: l });
        const y = this.parent.plugins.get("clamp-zoom", !0);
        if (y && y.clamp(), this.options.center)
          this.parent.moveCenter(this.options.center);
        else {
          const x = this.parent.toGlobal(p);
          this.parent.x += (l.x - x.x) * this.options.factor, this.parent.y += (l.y - x.y) * this.options.factor, this.parent.emit("moved", { viewport: this.parent, type: "pinch" });
        }
        !this.options.noDrag && this.lastCenter && (this.parent.x += (l.x - this.lastCenter.x) * this.options.factor, this.parent.y += (l.y - this.lastCenter.y) * this.options.factor, this.parent.emit("moved", { viewport: this.parent, type: "pinch" })), this.lastCenter = l, this.moved = !0;
      } else
        this.pinching || (this.parent.emit("pinch-start", this.parent), this.pinching = !0);
      return !0;
    }
    return !1;
  }
  up() {
    return this.pinching && this.parent.input.touches.length <= 1 ? (this.active = !1, this.lastCenter = null, this.pinching = !1, this.moved = !1, this.parent.emit("pinch-end", this.parent), !0) : !1;
  }
}
const j = {
  topLeft: !1,
  friction: 0.8,
  time: 1e3,
  ease: "easeInOutSine",
  interrupt: !0,
  removeOnComplete: !1,
  removeOnInterrupt: !1,
  forceStart: !1
};
class q extends f {
  constructor(t, i, e, n = {}) {
    super(t);
    o(this, "options");
    o(this, "ease");
    o(this, "x");
    o(this, "y");
    o(this, "percent");
    o(this, "snapping");
    o(this, "deltaX");
    o(this, "deltaY");
    o(this, "startX");
    o(this, "startY");
    this.options = Object.assign({}, j, n), this.ease = W(n.ease, "easeInOutSine"), this.x = i, this.y = e, this.options.forceStart && this.snapStart();
  }
  snapStart() {
    this.percent = 0, this.snapping = { time: 0 };
    const t = this.options.topLeft ? this.parent.corner : this.parent.center;
    this.deltaX = this.x - t.x, this.deltaY = this.y - t.y, this.startX = t.x, this.startY = t.y, this.parent.emit("snap-start", this.parent);
  }
  wheel() {
    return this.options.removeOnInterrupt && this.parent.plugins.remove("snap"), !1;
  }
  down() {
    return this.options.removeOnInterrupt ? this.parent.plugins.remove("snap") : this.options.interrupt && (this.snapping = null), !1;
  }
  up() {
    if (this.parent.input.count() === 0) {
      const t = this.parent.plugins.get("decelerate", !0);
      t && (t.x || t.y) && (t.percentChangeX = t.percentChangeY = this.options.friction);
    }
    return !1;
  }
  update(t) {
    if (!this.paused && !(this.options.interrupt && this.parent.input.count() !== 0))
      if (this.snapping) {
        const i = this.snapping;
        i.time += t;
        let e, n, s;
        const h = this.startX, a = this.startY, p = this.deltaX, l = this.deltaY;
        if (i.time > this.options.time)
          e = !0, n = h + p, s = a + l;
        else {
          const d = this.ease(i.time, 0, 1, this.options.time);
          n = h + p * d, s = a + l * d;
        }
        this.options.topLeft ? this.parent.moveCorner(n, s) : this.parent.moveCenter(n, s), this.parent.emit("moved", { viewport: this.parent, type: "snap" }), e && (this.options.removeOnComplete && this.parent.plugins.remove("snap"), this.parent.emit("snap-end", this.parent), this.snapping = null);
      } else {
        const i = this.options.topLeft ? this.parent.corner : this.parent.center;
        (i.x !== this.x || i.y !== this.y) && this.snapStart();
      }
  }
}
const K = {
  width: 0,
  height: 0,
  time: 1e3,
  ease: "easeInOutSine",
  center: null,
  interrupt: !0,
  removeOnComplete: !1,
  removeOnInterrupt: !1,
  forceStart: !1,
  noMove: !1
};
class G extends f {
  constructor(t, i = {}) {
    super(t);
    o(this, "options");
    o(this, "ease");
    o(this, "xScale");
    o(this, "yScale");
    o(this, "xIndependent");
    o(this, "yIndependent");
    o(this, "snapping");
    this.options = Object.assign({}, K, i), this.ease = W(this.options.ease), this.xIndependent = !1, this.yIndependent = !1, this.xScale = 0, this.yScale = 0, this.options.width > 0 && (this.xScale = t.screenWidth / this.options.width, this.xIndependent = !0), this.options.height > 0 && (this.yScale = t.screenHeight / this.options.height, this.yIndependent = !0), this.xScale = this.xIndependent ? this.xScale : this.yScale, this.yScale = this.yIndependent ? this.yScale : this.xScale, this.options.time === 0 ? (t.container.scale.x = this.xScale, t.container.scale.y = this.yScale, this.options.removeOnComplete && this.parent.plugins.remove("snap-zoom")) : i.forceStart && this.createSnapping();
  }
  createSnapping() {
    const t = this.parent.worldScreenWidth, i = this.parent.worldScreenHeight, e = this.parent.screenWidth / this.xScale, n = this.parent.screenHeight / this.yScale;
    this.snapping = {
      time: 0,
      startX: t,
      startY: i,
      deltaX: e - t,
      deltaY: n - i
    }, this.parent.emit("snap-zoom-start", this.parent);
  }
  resize() {
    this.snapping = null, this.options.width > 0 && (this.xScale = this.parent.screenWidth / this.options.width), this.options.height > 0 && (this.yScale = this.parent.screenHeight / this.options.height), this.xScale = this.xIndependent ? this.xScale : this.yScale, this.yScale = this.yIndependent ? this.yScale : this.xScale;
  }
  wheel() {
    return this.options.removeOnInterrupt && this.parent.plugins.remove("snap-zoom"), !1;
  }
  down() {
    return this.options.removeOnInterrupt ? this.parent.plugins.remove("snap-zoom") : this.options.interrupt && (this.snapping = null), !1;
  }
  update(t) {
    if (this.paused || this.options.interrupt && this.parent.input.count() !== 0)
      return;
    let i;
    if (!this.options.center && !this.options.noMove && (i = this.parent.center), !this.snapping)
      (this.parent.scale.x !== this.xScale || this.parent.scale.y !== this.yScale) && this.createSnapping();
    else if (this.snapping) {
      const e = this.snapping;
      if (e.time += t, e.time >= this.options.time)
        this.parent.scale.set(this.xScale, this.yScale), this.options.removeOnComplete && this.parent.plugins.remove("snap-zoom"), this.parent.emit("snap-zoom-end", this.parent), this.snapping = null;
      else {
        const s = this.snapping, h = this.ease(s.time, s.startX, s.deltaX, this.options.time), a = this.ease(s.time, s.startY, s.deltaY, this.options.time);
        this.parent.scale.x = this.parent.screenWidth / h, this.parent.scale.y = this.parent.screenHeight / a;
      }
      const n = this.parent.plugins.get("clamp-zoom", !0);
      n && n.clamp(), this.options.noMove || (this.options.center ? this.parent.moveCenter(this.options.center) : this.parent.moveCenter(i));
    }
  }
  resume() {
    this.snapping = null, super.resume();
  }
}
const Q = {
  percent: 0.1,
  smooth: !1,
  interrupt: !0,
  reverse: !1,
  center: null,
  lineHeight: 20,
  axis: "all",
  keyToPress: null,
  trackpadPinch: !1,
  wheelZoom: !0
};
class J extends f {
  constructor(t, i = {}) {
    super(t);
    o(this, "options");
    o(this, "smoothing");
    o(this, "smoothingCenter");
    o(this, "smoothingCount");
    o(this, "keyIsPressed");
    this.options = Object.assign({}, Q, i), this.keyIsPressed = !1, this.options.keyToPress && this.handleKeyPresses(this.options.keyToPress);
  }
  handleKeyPresses(t) {
    window.addEventListener("keydown", (i) => {
      t.includes(i.code) && (this.keyIsPressed = !0);
    }), window.addEventListener("keyup", (i) => {
      t.includes(i.code) && (this.keyIsPressed = !1);
    });
  }
  checkKeyPress() {
    return !this.options.keyToPress || this.keyIsPressed;
  }
  down() {
    return this.options.interrupt && (this.smoothing = null), !1;
  }
  isAxisX() {
    return ["all", "x"].includes(this.options.axis);
  }
  isAxisY() {
    return ["all", "y"].includes(this.options.axis);
  }
  update() {
    if (this.smoothing) {
      const t = this.smoothingCenter, i = this.smoothing;
      let e;
      this.options.center || (e = this.parent.toLocal(t)), this.isAxisX() && (this.parent.scale.x += i.x), this.isAxisY() && (this.parent.scale.y += i.y), this.parent.emit("zoomed", { viewport: this.parent, type: "wheel" });
      const n = this.parent.plugins.get("clamp-zoom", !0);
      if (n && n.clamp(), this.options.center)
        this.parent.moveCenter(this.options.center);
      else {
        const s = this.parent.toGlobal(e);
        this.parent.x += t.x - s.x, this.parent.y += t.y - s.y;
      }
      this.parent.emit("moved", { viewport: this.parent, type: "wheel" }), this.smoothingCount++, this.smoothingCount >= this.options.smooth && (this.smoothing = null);
    }
  }
  pinch(t) {
    if (this.paused)
      return;
    const i = this.parent.input.getPointerPosition(t), e = -t.deltaY * (t.deltaMode ? this.options.lineHeight : 1) / 200, n = Math.pow(2, (1 + this.options.percent) * e);
    let s;
    this.options.center || (s = this.parent.toLocal(i)), this.isAxisX() && (this.parent.scale.x *= n), this.isAxisY() && (this.parent.scale.y *= n), this.parent.emit("zoomed", { viewport: this.parent, type: "wheel" });
    const h = this.parent.plugins.get("clamp-zoom", !0);
    if (h && h.clamp(), this.options.center)
      this.parent.moveCenter(this.options.center);
    else {
      const a = this.parent.toGlobal(s);
      this.parent.x += i.x - a.x, this.parent.y += i.y - a.y;
    }
    this.parent.emit("moved", { viewport: this.parent, type: "wheel" }), this.parent.emit(
      "wheel-start",
      { event: t, viewport: this.parent }
    );
  }
  wheel(t) {
    if (this.paused || !this.checkKeyPress())
      return !1;
    if (t.ctrlKey && this.options.trackpadPinch)
      this.pinch(t);
    else if (this.options.wheelZoom) {
      const i = this.parent.input.getPointerPosition(t), n = (this.options.reverse ? -1 : 1) * -t.deltaY * (t.deltaMode ? this.options.lineHeight : 1) / 500, s = Math.pow(2, (1 + this.options.percent) * n);
      if (this.options.smooth) {
        const h = {
          x: this.smoothing ? this.smoothing.x * (this.options.smooth - this.smoothingCount) : 0,
          y: this.smoothing ? this.smoothing.y * (this.options.smooth - this.smoothingCount) : 0
        };
        this.smoothing = {
          x: ((this.parent.scale.x + h.x) * s - this.parent.scale.x) / this.options.smooth,
          y: ((this.parent.scale.y + h.y) * s - this.parent.scale.y) / this.options.smooth
        }, this.smoothingCount = 0, this.smoothingCenter = i;
      } else {
        let h;
        this.options.center || (h = this.parent.toLocal(i)), this.isAxisX() && (this.parent.scale.x *= s), this.isAxisY() && (this.parent.scale.y *= s), this.parent.emit("zoomed", { viewport: this.parent, type: "wheel" });
        const a = this.parent.plugins.get("clamp-zoom", !0);
        if (a && a.clamp(), this.options.center)
          this.parent.moveCenter(this.options.center);
        else {
          const p = this.parent.toGlobal(h);
          this.parent.x += i.x - p.x, this.parent.y += i.y - p.y;
        }
      }
      this.parent.emit("moved", { viewport: this.parent, type: "wheel" }), this.parent.emit(
        "wheel-start",
        { event: t, viewport: this.parent }
      );
    }
    return !this.parent.options.passiveWheel;
  }
}
class $ {
  constructor(r) {
    o(this, "viewport");
    o(this, "clickedAvailable");
    o(this, "isMouseDown");
    o(this, "last");
    o(this, "wheelFunction");
    o(this, "touches");
    this.viewport = r, this.touches = [], this.addListeners();
  }
  addListeners() {
    this.viewport.interactive = !0, this.viewport.forceHitArea || (this.viewport.hitArea = new v(0, 0, this.viewport.worldWidth, this.viewport.worldHeight)), this.viewport.on("pointerdown", this.down, this), this.viewport.on("pointermove", this.move, this), this.viewport.on("pointerup", this.up, this), this.viewport.on("pointerupoutside", this.up, this), this.viewport.on("pointercancel", this.up, this), this.viewport.on("pointerout", this.up, this), this.wheelFunction = (r) => this.handleWheel(r), this.viewport.options.events.domElement.addEventListener(
      "wheel",
      this.wheelFunction,
      { passive: this.viewport.options.passiveWheel }
    ), this.isMouseDown = !1;
  }
  destroy() {
    this.viewport.options.events.domElement.removeEventListener("wheel", this.wheelFunction);
  }
  down(r) {
    if (this.viewport.pause || !this.viewport.worldVisible)
      return;
    if (r.pointerType === "mouse" ? this.isMouseDown = !0 : this.get(r.pointerId) || this.touches.push({ id: r.pointerId, last: null }), this.count() === 1) {
      this.last = r.global.clone();
      const i = this.viewport.plugins.get("decelerate", !0), e = this.viewport.plugins.get("bounce", !0);
      (!i || !i.isActive()) && (!e || !e.isActive()) ? this.clickedAvailable = !0 : this.clickedAvailable = !1;
    } else
      this.clickedAvailable = !1;
    this.viewport.plugins.down(r) && this.viewport.options.stopPropagation && r.stopPropagation();
  }
  clear() {
    this.isMouseDown = !1, this.touches = [], this.last = null;
  }
  checkThreshold(r) {
    return Math.abs(r) >= this.viewport.threshold;
  }
  move(r) {
    if (this.viewport.pause || !this.viewport.worldVisible)
      return;
    const t = this.viewport.plugins.move(r);
    if (this.clickedAvailable && this.last) {
      const i = r.global.x - this.last.x, e = r.global.y - this.last.y;
      (this.checkThreshold(i) || this.checkThreshold(e)) && (this.clickedAvailable = !1);
    }
    t && this.viewport.options.stopPropagation && r.stopPropagation();
  }
  up(r) {
    if (this.viewport.pause || !this.viewport.worldVisible)
      return;
    r.pointerType === "mouse" && (this.isMouseDown = !1), r.pointerType !== "mouse" && this.remove(r.pointerId);
    const t = this.viewport.plugins.up(r);
    this.clickedAvailable && this.count() === 0 && this.last && (this.viewport.emit("clicked", {
      event: r,
      screen: this.last,
      world: this.viewport.toWorld(this.last),
      viewport: this.viewport
    }), this.clickedAvailable = !1), t && this.viewport.options.stopPropagation && r.stopPropagation();
  }
  getPointerPosition(r) {
    const t = new u();
    return this.viewport.options.events.mapPositionToPoint(t, r.clientX, r.clientY), t;
  }
  handleWheel(r) {
    if (this.viewport.pause || !this.viewport.worldVisible)
      return;
    const t = this.viewport.toLocal(this.getPointerPosition(r));
    this.viewport.left <= t.x && t.x <= this.viewport.right && this.viewport.top <= t.y && t.y <= this.viewport.bottom && this.viewport.plugins.wheel(r) && !this.viewport.options.passiveWheel && r.preventDefault();
  }
  pause() {
    this.touches = [], this.isMouseDown = !1;
  }
  get(r) {
    for (const t of this.touches)
      if (t.id === r)
        return t;
    return null;
  }
  remove(r) {
    for (let t = 0; t < this.touches.length; t++)
      if (this.touches[t].id === r) {
        this.touches.splice(t, 1);
        return;
      }
  }
  count() {
    return (this.isMouseDown ? 1 : 0) + this.touches.length;
  }
}
const w = [
  "drag",
  "pinch",
  "wheel",
  "follow",
  "mouse-edges",
  "decelerate",
  "animate",
  "bounce",
  "snap-zoom",
  "clamp-zoom",
  "snap",
  "clamp"
];
class tt {
  constructor(r) {
    o(this, "plugins");
    o(this, "list");
    o(this, "viewport");
    this.viewport = r, this.list = [], this.plugins = {};
  }
  add(r, t, i = w.length) {
    const e = this.plugins[r];
    e && e.destroy(), this.plugins[r] = t;
    const n = w.indexOf(r);
    n !== -1 && w.splice(n, 1), w.splice(i, 0, r), this.sort();
  }
  get(r, t) {
    var i;
    return t && (i = this.plugins[r]) != null && i.paused ? null : this.plugins[r];
  }
  update(r) {
    for (const t of this.list)
      t.update(r);
  }
  resize() {
    for (const r of this.list)
      r.resize();
  }
  reset() {
    for (const r of this.list)
      r.reset();
  }
  removeAll() {
    this.list.forEach((r) => {
      r.destroy();
    }), this.plugins = {}, this.sort();
  }
  remove(r) {
    var t;
    this.plugins[r] && ((t = this.plugins[r]) == null || t.destroy(), delete this.plugins[r], this.viewport.emit("plugin-remove", r), this.sort());
  }
  pause(r) {
    var t;
    (t = this.plugins[r]) == null || t.pause();
  }
  resume(r) {
    var t;
    (t = this.plugins[r]) == null || t.resume();
  }
  sort() {
    this.list = [];
    for (const r of w)
      this.plugins[r] && this.list.push(this.plugins[r]);
  }
  down(r) {
    let t = !1;
    for (const i of this.list)
      i.down(r) && (t = !0);
    return t;
  }
  move(r) {
    let t = !1;
    for (const i of this.viewport.plugins.list)
      i.move(r) && (t = !0);
    return t;
  }
  up(r) {
    let t = !1;
    for (const i of this.list)
      i.up(r) && (t = !0);
    return t;
  }
  wheel(r) {
    let t = !1;
    for (const i of this.list)
      i.wheel(r) && (t = !0);
    return t;
  }
}
const et = {
  screenWidth: window.innerWidth,
  screenHeight: window.innerHeight,
  worldWidth: null,
  worldHeight: null,
  threshold: 5,
  passiveWheel: !0,
  stopPropagation: !1,
  forceHitArea: null,
  noTicker: !1,
  disableOnContextMenu: !1,
  ticker: O.shared
};
class ht extends P {
  constructor(t) {
    super();
    o(this, "moving");
    o(this, "screenWidth");
    o(this, "screenHeight");
    o(this, "threshold");
    o(this, "input");
    o(this, "plugins");
    o(this, "zooming");
    o(this, "lastViewport");
    o(this, "options");
    o(this, "_dirty");
    o(this, "_forceHitArea");
    o(this, "_hitAreaDefault");
    o(this, "_pause");
    o(this, "tickerFunction");
    o(this, "_worldWidth");
    o(this, "_worldHeight");
    o(this, "_disableOnContextMenu", (t) => t.preventDefault());
    this.options = {
      ...et,
      ...t
    }, this.screenWidth = this.options.screenWidth, this.screenHeight = this.options.screenHeight, this._worldWidth = this.options.worldWidth, this._worldHeight = this.options.worldHeight, this.forceHitArea = this.options.forceHitArea, this.threshold = this.options.threshold, this.options.disableOnContextMenu && this.options.events.domElement.addEventListener("contextmenu", this._disableOnContextMenu), this.options.noTicker || (this.tickerFunction = () => this.update(this.options.ticker.elapsedMS), this.options.ticker.add(this.tickerFunction)), this.input = new $(this), this.plugins = new tt(this);
  }
  destroy(t) {
    !this.options.noTicker && this.tickerFunction && this.options.ticker.remove(this.tickerFunction), this.options.disableOnContextMenu && this.options.events.domElement.removeEventListener("contextmenu", this._disableOnContextMenu), this.input.destroy(), super.destroy(t);
  }
  update(t) {
    this.pause || (this.plugins.update(t), this.lastViewport && (this.lastViewport.x !== this.x || this.lastViewport.y !== this.y ? this.moving = !0 : this.moving && (this.emit("moved-end", this), this.moving = !1), this.lastViewport.scaleX !== this.scale.x || this.lastViewport.scaleY !== this.scale.y ? this.zooming = !0 : this.zooming && (this.emit("zoomed-end", this), this.zooming = !1)), this.forceHitArea || (this._hitAreaDefault = new v(this.left, this.top, this.worldScreenWidth, this.worldScreenHeight), this.hitArea = this._hitAreaDefault), this._dirty = this._dirty || !this.lastViewport || this.lastViewport.x !== this.x || this.lastViewport.y !== this.y || this.lastViewport.scaleX !== this.scale.x || this.lastViewport.scaleY !== this.scale.y, this.lastViewport = {
      x: this.x,
      y: this.y,
      scaleX: this.scale.x,
      scaleY: this.scale.y
    }, this.emit("frame-end", this));
  }
  resize(t = window.innerWidth, i = window.innerHeight, e, n) {
    this.screenWidth = t, this.screenHeight = i, typeof e < "u" && (this._worldWidth = e), typeof n < "u" && (this._worldHeight = n), this.plugins.resize(), this.dirty = !0;
  }
  get worldWidth() {
    return this._worldWidth ? this._worldWidth : this.width / this.scale.x;
  }
  set worldWidth(t) {
    this._worldWidth = t, this.plugins.resize();
  }
  get worldHeight() {
    return this._worldHeight ? this._worldHeight : this.height / this.scale.y;
  }
  set worldHeight(t) {
    this._worldHeight = t, this.plugins.resize();
  }
  getVisibleBounds() {
    return new v(this.left, this.top, this.worldScreenWidth, this.worldScreenHeight);
  }
  toWorld(t, i) {
    return arguments.length === 2 ? this.toLocal(new u(t, i)) : this.toLocal(t);
  }
  toScreen(t, i) {
    return arguments.length === 2 ? this.toGlobal(new u(t, i)) : this.toGlobal(t);
  }
  get worldScreenWidth() {
    return this.screenWidth / this.scale.x;
  }
  get worldScreenHeight() {
    return this.screenHeight / this.scale.y;
  }
  get screenWorldWidth() {
    return this.worldWidth * this.scale.x;
  }
  get screenWorldHeight() {
    return this.worldHeight * this.scale.y;
  }
  get center() {
    return new u(
      this.worldScreenWidth / 2 - this.x / this.scale.x,
      this.worldScreenHeight / 2 - this.y / this.scale.y
    );
  }
  set center(t) {
    this.moveCenter(t);
  }
  moveCenter(...t) {
    let i, e;
    typeof t[0] == "number" ? (i = t[0], e = t[1]) : (i = t[0].x, e = t[0].y);
    const n = (this.worldScreenWidth / 2 - i) * this.scale.x, s = (this.worldScreenHeight / 2 - e) * this.scale.y;
    return (this.x !== n || this.y !== s) && (this.position.set(n, s), this.plugins.reset(), this.dirty = !0), this;
  }
  get corner() {
    return new u(-this.x / this.scale.x, -this.y / this.scale.y);
  }
  set corner(t) {
    this.moveCorner(t);
  }
  moveCorner(...t) {
    let i, e;
    return t.length === 1 ? (i = -t[0].x * this.scale.x, e = -t[0].y * this.scale.y) : (i = -t[0] * this.scale.x, e = -t[1] * this.scale.y), (i !== this.x || e !== this.y) && (this.position.set(i, e), this.plugins.reset(), this.dirty = !0), this;
  }
  get screenWidthInWorldPixels() {
    return this.screenWidth / this.scale.x;
  }
  get screenHeightInWorldPixels() {
    return this.screenHeight / this.scale.y;
  }
  findFitWidth(t) {
    return this.screenWidth / t;
  }
  findFitHeight(t) {
    return this.screenHeight / t;
  }
  findFit(t, i) {
    const e = this.screenWidth / t, n = this.screenHeight / i;
    return Math.min(e, n);
  }
  findCover(t, i) {
    const e = this.screenWidth / t, n = this.screenHeight / i;
    return Math.max(e, n);
  }
  fitWidth(t = this.worldWidth, i, e = !0, n) {
    let s;
    i && (s = this.center), this.scale.x = this.screenWidth / t, e && (this.scale.y = this.scale.x);
    const h = this.plugins.get("clamp-zoom", !0);
    return !n && h && h.clamp(), i && s && this.moveCenter(s), this;
  }
  fitHeight(t = this.worldHeight, i, e = !0, n) {
    let s;
    i && (s = this.center), this.scale.y = this.screenHeight / t, e && (this.scale.x = this.scale.y);
    const h = this.plugins.get("clamp-zoom", !0);
    return !n && h && h.clamp(), i && s && this.moveCenter(s), this;
  }
  fitWorld(t) {
    let i;
    t && (i = this.center), this.scale.x = this.screenWidth / this.worldWidth, this.scale.y = this.screenHeight / this.worldHeight, this.scale.x < this.scale.y ? this.scale.y = this.scale.x : this.scale.x = this.scale.y;
    const e = this.plugins.get("clamp-zoom", !0);
    return e && e.clamp(), t && i && this.moveCenter(i), this;
  }
  fit(t, i = this.worldWidth, e = this.worldHeight) {
    let n;
    t && (n = this.center), this.scale.x = this.screenWidth / i, this.scale.y = this.screenHeight / e, this.scale.x < this.scale.y ? this.scale.y = this.scale.x : this.scale.x = this.scale.y;
    const s = this.plugins.get("clamp-zoom", !0);
    return s && s.clamp(), t && n && this.moveCenter(n), this;
  }
  setZoom(t, i) {
    let e;
    i && (e = this.center), this.scale.set(t);
    const n = this.plugins.get("clamp-zoom", !0);
    return n && n.clamp(), i && e && this.moveCenter(e), this;
  }
  zoomPercent(t, i) {
    return this.setZoom(this.scale.x + this.scale.x * t, i);
  }
  zoom(t, i) {
    return this.fitWidth(t + this.worldScreenWidth, i), this;
  }
  get scaled() {
    return this.scale.x;
  }
  set scaled(t) {
    this.setZoom(t, !0);
  }
  snapZoom(t) {
    return this.plugins.add("snap-zoom", new G(this, t)), this;
  }
  OOB() {
    return {
      left: this.left < 0,
      right: this.right > this.worldWidth,
      top: this.top < 0,
      bottom: this.bottom > this.worldHeight,
      cornerPoint: new u(
        this.worldWidth * this.scale.x - this.screenWidth,
        this.worldHeight * this.scale.y - this.screenHeight
      )
    };
  }
  get right() {
    return -this.x / this.scale.x + this.worldScreenWidth;
  }
  set right(t) {
    this.x = -t * this.scale.x + this.screenWidth, this.plugins.reset();
  }
  get left() {
    return -this.x / this.scale.x;
  }
  set left(t) {
    this.x = -t * this.scale.x, this.plugins.reset();
  }
  get top() {
    return -this.y / this.scale.y;
  }
  set top(t) {
    this.y = -t * this.scale.y, this.plugins.reset();
  }
  get bottom() {
    return -this.y / this.scale.y + this.worldScreenHeight;
  }
  set bottom(t) {
    this.y = -t * this.scale.y + this.screenHeight, this.plugins.reset();
  }
  get dirty() {
    return !!this._dirty;
  }
  set dirty(t) {
    this._dirty = t;
  }
  get forceHitArea() {
    return this._forceHitArea;
  }
  set forceHitArea(t) {
    t ? (this._forceHitArea = t, this.hitArea = t) : (this._forceHitArea = null, this.hitArea = new v(0, 0, this.worldWidth, this.worldHeight));
  }
  drag(t) {
    return this.plugins.add("drag", new U(this, t)), this;
  }
  clamp(t) {
    return this.plugins.add("clamp", new A(this, t)), this;
  }
  decelerate(t) {
    return this.plugins.add("decelerate", new D(this, t)), this;
  }
  bounce(t) {
    return this.plugins.add("bounce", new X(this, t)), this;
  }
  pinch(t) {
    return this.plugins.add("pinch", new R(this, t)), this;
  }
  snap(t, i, e) {
    return this.plugins.add("snap", new q(this, t, i, e)), this;
  }
  follow(t, i) {
    return this.plugins.add("follow", new F(this, t, i)), this;
  }
  wheel(t) {
    return this.plugins.add("wheel", new J(this, t)), this;
  }
  animate(t) {
    return this.plugins.add("animate", new k(this, t)), this;
  }
  clampZoom(t) {
    return this.plugins.add("clamp-zoom", new T(this, t)), this;
  }
  mouseEdges(t) {
    return this.plugins.add("mouse-edges", new N(this, t)), this;
  }
  get pause() {
    return !!this._pause;
  }
  set pause(t) {
    this._pause = t, this.lastViewport = null, this.moving = !1, this.zooming = !1, t && this.input.pause();
  }
  ensureVisible(t, i, e, n, s) {
    s && (e > this.worldScreenWidth || n > this.worldScreenHeight) && (this.fit(!0, e, n), this.emit("zoomed", { viewport: this, type: "ensureVisible" }));
    let h = !1;
    t < this.left ? (this.left = t, h = !0) : t + e > this.right && (this.right = t + e, h = !0), i < this.top ? (this.top = i, h = !0) : i + n > this.bottom && (this.bottom = i + n, h = !0), h && this.emit("moved", { viewport: this, type: "ensureVisible" });
  }
}
export {
  k as Animate,
  X as Bounce,
  A as Clamp,
  T as ClampZoom,
  D as Decelerate,
  U as Drag,
  F as Follow,
  $ as InputManager,
  N as MouseEdges,
  R as Pinch,
  f as Plugin,
  tt as PluginManager,
  q as Snap,
  G as SnapZoom,
  ht as Viewport,
  J as Wheel
};
