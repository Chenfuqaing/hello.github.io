! function (t) {
  function e(r) {
    if (i[r]) return i[r].exports;
    var n = i[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports
  }
  var i = {};
  e.m = t, e.c = i, e.d = function (t, i, r) {
    e.o(t, i) || Object.defineProperty(t, i, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, e.n = function (t) {
    var i = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return e.d(i, "a", i), i
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, e.p = "", e(e.s = 6)
}([function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = {
    random: function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return t + (arguments[1] - t) * Math.random()
    },
    extend: function (t) {
      for (var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) i[r - 1] = arguments[r];
      return i.forEach(function (e) {
        for (var i in e) t[i] = e[i]
      }), t
    },
    transTime: function (t, e) {
      return +t / 1e3 * 60 | 0 || e
    }
  };
  e.default = r
}, function (t, e, i) {
  "use strict";

  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = i(7),
    s = r(n),
    o = i(0),
    a = r(o),
    l = function () {
      return {
        width: 360,
        height: 600,
        canvases: ["fall", "bg", "firework", "dialogue"],
        snowInterval: 60,
        heartInterval: 15,
        snow: {
          x: void 0,
          y: void 0,
          minSize: 5,
          maxSize: 10,
          size: void 0,
          speed: .5,
          opacity: .8
        },
        heart: {
          x: void 0,
          y: void 0,
          minSize: 15,
          maxSize: 20,
          size: void 0,
          speed: 1
        },
        fallType: "snow",
        dialogueOpt: {
          interval: 2e3,
          speed: 100,
          color1: "#ff00ff",
          font1: "14px Arial",
          color2: "#f97afb",
          color3: "red",
          color4: "#ffff00",
          color5: "#00ff00",
          color6: "#00ffff",
          color7: "#fff"
        },
        dialogue: [{
          type: 2,
          name: "土豆",
          txt: "地瓜地瓜，我是土豆！"
        }, {
          type: 6,
          name: "地瓜",
          txt: "土豆土豆，我是地瓜，怎么啦"
        }, {
          type: 2,
          name: "土豆",
          txt: "跟你说个事啊，希望你能理解"
        }, {
          type: 6,
          name: "地瓜",
          txt: "咋啦，怎么感觉你说话怪怪的呢？"
        }, {
          type: 2,
          name: "土豆",
          txt: "土豆现在只能在土里，不能保护好地瓜"
        }, {
          type: 6,
          name: "地瓜",
          txt: "你在说什么呢？我怎么听不懂？？"
        }, {
          type: 2,
          name: "土豆",
          txt: "就是希望你能更好的，但是土豆现在没有能力"
        }, {
          type: 6,
          name: "地瓜",
          txt: "我很好啊，你在就是最好的保护了"
        }, {
          type: 2,
          name: "土豆",
          txt: "对不起，土豆不想让你跟我吃苦。"
        }, {
          type: 6,
          name: "地瓜",
          txt: "你在说什么呢？"
        }, {
          type: 2,
          name: "土豆",
          txt: "................"
        }, {
          type: 6,
          name: "地瓜",
          txt: "你说话啊，土豆"
        }, {
          type: 6,
          name: "地瓜",
          txt: "遇到事你只会逃避吗？你的自信去哪了？"
        },{
          type: 6,
          name: "地瓜",
          txt: "土豆，你根本不知道我想要什么"
        }, {
          type: 6,
          name: "地瓜",
          txt: "你太自私了，你说话啊"
        }, {
          type: 2,
          name: "土豆",
          txt: "对不起"
        }, {
          type: 6,
          name: "地瓜",
          txt: "你难道忘记我们这四年在土里的日子吗"
        }, {
          type: 2,
          name: "土豆",
          txt: "我怎么会忘呢"
        }, {
          type: 2,
          name: "土豆",
          txt: "认识你是我最幸运的事。"
        }, {
          type: 6,
          name: "地瓜",
          txt: "你根本不懂我"
        }, {
          type: 2,
          name: "土豆",
          txt: "对不起，地瓜，是土豆没用"
        }, {
          type: 6,
          name: "地瓜",
          txt: "你别说了，我知道了"
        }, {
          type: 2,
          name: "土豆",
          txt: "最后给你看个东西吧"
        }, {
          type: 6,
          name: "地瓜",
          txt: "什么？不想看"
        }, {
          type: 2,
          name: "土豆",
          txt: "这些烟花代表我们曾经快乐的日子。"
        }, {
          type: 6,
          name: "地瓜",
          txt: "土豆，我恨你"
        }, {
          type: 2,
          name: "土豆",
          txt: "把我们的爱定格在烟花中吧"
        }, {
          type: 6,
          name: "地瓜",
          txt: "这时，地瓜已经走了。。。。。。。"
        }  ],
        sunset: 1e3,
        fireworkInterval: [60, 240],
        fireworks: {
          x: void 0,
          y: 600,
          xEnd: void 0,
          yEnd: void 0,
          size: 2,
          radius: 2,
          velocity: 3,
          opacity: .8,
          count: 300,
          wait: void 0,
          color: void 0
        },
        fireWords: "后来|土豆|终于明白|有些瓜|一旦错过|就不在",
        skyColor: "hsla({hue}, 60%, {lightness}%, 0.2)",
        fireOpt: {
          wordInterval: 3e3
        },
        titleWords: "地瓜|不负遇见|程漂亮|对不起",
        titleOpt: {
          gap: 4,
          size: 70,
          pSize: 8,
          delay: 4e3,
          distance: 120,
          e: 5e3
        },
        shape: {
          mini: 1,
          gap: 2
        },
        word: {
          size: 70,
          y: 120
        }
      }
    }();
  l.dialogueOpt.interval = a.default.transTime(l.dialogueOpt.interval, 120), l.dialogueOpt.speed = a.default.transTime(l.dialogueOpt.speed, 18), l.sunset = a.default.transTime(l.sunset, 600), l.fireOpt.wordInterval = a.default.transTime(l.fireOpt.wordInterval, 180), l.fireOpt.denseTime = a.default.transTime(l.fireOpt.denseTime, 600), l.titleOpt.delay = a.default.transTime(l.titleOpt.delay, 240), l.titleOpt.e = a.default.transTime(l.titleOpt.e, 240), (0, s.default)(l.width, l.height, l.canvases), e.default = l
}, function (t, e, i) {
  "use strict";

  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function s(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function o(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var a = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e
      }
    }(),
    l = i(1),
    u = (r(l), i(0)),
    h = r(u),
    f = i(3),
    c = r(f),
    d = function (t) {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = t.x,
          r = t.y,
          o = t.minSize,
          a = void 0 === o ? 5 : o,
          l = t.maxSize,
          u = void 0 === l ? 7.5 : l,
          f = t.size,
          c = t.speed,
          d = void 0 === c ? .5 : c,
          p = t.opacity,
          y = void 0 === p ? .8 : p;
        n(this, e);
        var v = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
          x: i,
          y: r,
          minSize: a,
          maxSize: u,
          size: f
        }));
        return v.opacity = h.default.random(y, 1), v.speed = d * (1 + Math.random()), v.direction = Math.random() > .5 ? .5 : -.5, v
      }
      return o(e, t), a(e, [{
        key: "fall",
        value: function () {
          this.x += Math.random() * this.direction, this.y += this.speed
        }
      }, {
        key: "render",
        value: function (t) {
          return this.fall(), !this.outOfBounds() && (this.g = t.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size), this.g.addColorStop(0, "hsla(255,255%,255%," + this.opacity + ")"), this.g.addColorStop(1, "hsla(255,255%,255%,0)"), t.beginPath(), t.fillStyle = this.g, t.arc(this.x, this.y, this.size, 0, 2 * Math.PI, !1), t.fill(), !0)
        }
      }]), e
    }(c.default);
  e.default = d
}, function (t, e, i) {
  "use strict";

  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e
      }
    }(),
    o = i(1),
    a = r(o),
    l = i(0),
    u = r(l),
    h = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = e.x,
          r = e.y,
          s = e.minSize,
          o = void 0 === s ? 5 : s,
          l = e.maxSize,
          h = void 0 === l ? 7.5 : l,
          f = e.size,
          c = e.opacity,
          d = void 0 === c ? 1 : c;
        n(this, t), this.size = f || u.default.random(o, h), this.x = i || u.default.random(0, a.default.width - this.size), this.y = r || -this.size, this.opacity = d
      }
      return s(t, [{
        key: "outOfBounds",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.default.height,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default.width;
          return !(this.x >= -this.size && this.x <= e && this.y <= t && this.y >= -this.size)
        }
      }]), t
    }();
  e.default = h
}, function (t, e, i) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function n(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e
      }
    }(),
    a = i(2),
    l = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(a),
    u = Math.random,
    h = function (t) {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = t.x,
          s = void 0 === i ? 0 : i,
          o = t.y,
          a = void 0 === o ? 0 : o,
          l = t.minSize,
          h = void 0 === l ? 15 : l,
          f = t.maxSize,
          c = void 0 === f ? 20 : f,
          d = t.size,
          p = t.speed,
          y = void 0 === p ? 1 : p;
        r(this, e);
        var v = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
          minSize: h,
          maxSize: c,
          x: s,
          y: a,
          size: d,
          speed: y
        }));
        return v.color = "hsla(" + 360 * u() + ", 90%, 65%, 1)", v
      }
      return s(e, t), o(e, [{
        key: "render",
        value: function (t) {
          return this.fall(), !this.outOfBounds() && (t.save(), t.beginPath(), t.fillStyle = this.color, t.moveTo(this.x + .5 * this.size, this.y + .3 * this.size), t.bezierCurveTo(this.x + .1 * this.size, this.y, this.x, this.y + .6 * this.size, this.x + .5 * this.size, this.y + .9 * this.size), t.bezierCurveTo(this.x + 1 * this.size, this.y + .6 * this.size, this.x + .9 * this.size, this.y, this.x + .5 * this.size, this.y + .3 * this.size), t.closePath(), t.fill(), t.restore(), !0)
        }
      }]), e
    }(l.default);
  e.default = h
}, function (t, e, i) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function n(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e
      }
    }(),
    a = i(3),
    l = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(a),
    u = function (t) {
      function e(t) {
        var i = t.x,
          s = t.y,
          o = t.size,
          a = void 0 === o ? 1.5 : o,
          l = t.radius;
        r(this, e);
        var u = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
          x: i,
          y: s,
          size: a
        }));
        return u.rate = Math.random(), u.angle = 2 * Math.PI * Math.random(), u.vx = l * Math.cos(u.angle) * u.rate, u.vy = l * Math.sin(u.angle) * u.rate, u
      }
      return s(e, t), o(e, [{
        key: "go",
        value: function () {
          this.x += this.vx, this.y += this.vy, this.vy += .02, this.vx *= .98, this.vy *= .98
        }
      }, {
        key: "render",
        value: function (t) {
          this.go(), t.beginPath(), t.arc(this.x, this.y, this.size, 0, 2 * Math.PI, !1), t.fill()
        }
      }]), e
    }(l.default);
  e.default = u
}, function (t, e, i) {
  "use strict";

  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function n(t) {
    if (Array.isArray(t)) {
      for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
      return i
    }
    return Array.from(t)
  }

  function s(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var o = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e
      }
    }(),
    a = i(1),
    l = r(a),
    u = i(0),
    h = r(u),
    f = i(8),
    c = r(f),
    d = i(12),
    p = r(d),
    y = i(2),
    v = r(y),
    g = i(4),
    w = r(g),
    b = i(13),
    m = r(b),
    x = i(15),
    O = r(x),
    k = i(16),
    _ = r(k);
  ! function () {
    new(function () {
      function t() {
        var e = this;
        s(this, t), this.initProperty(), this.initAudio(), p.default.load(c.default).then(function (t) {
          document.querySelector("#loading").style.display = "none", e.imgs = e.dealImgs(t), e.init()
        }).catch(function (t) {
          console.log(t)
        })
      }
      return o(t, [{
        key: "initAudio",
        value: function () {
          var t = new Audio;
          t.src = i(17), t.loop = !0, t.play(), t.volume = .5;
          var e = document.querySelector("#music");
          document.addEventListener("WeixinJSBridgeReady", function () {
            t.play()
          }, !1), e.onclick = function () {
            "on" == this.getAttribute("class") ? (this.setAttribute("class", "off"), t.pause()) : (this.setAttribute("class", "on"), t.play())
          }
        }
      }, {
        key: "initProperty",
        value: function () {
          var t = this;
          this.height = l.default.height, this.width = l.default.width, l.default.canvases.forEach(function (e) {
            t[e + "Ctx"] = document.querySelector("#" + e).getContext("2d")
          }), this.fallDots = [], this.fallType = l.default.fallType, this.time = 0, this.status = 1, this.dialogueOpt = h.default.extend({}, l.default.dialogueOpt), this.dialogue = l.default.dialogue.shift(), this.sunsetTime = l.default.sunset, this.skyColor = {
            hue: 210,
            lightness: 0
          }, this.fireworks = [], this.fireworkTime = 0 | h.default.random.apply(h.default, n(l.default.fireworkInterval)), this.fireWords = l.default.fireWords.split("|"), this.fireOpt = h.default.extend({
            end: !1,
            time: 600,
            showWords: !1
          }, l.default.fireOpt), this.titleOpt = {
            current: -1,
            start: !1,
            ctx: [],
            end: !1
          }, this.titleWords = l.default.titleWords.split("|"), this.titleDots = []
        }
      }, {
        key: "go",
        value: function (t) {
          switch (t) {
            case 1:
              this.dialogueOpt = null, this.dialogue = null, this.dialogueCtx.clearRect(0, 0, l.default.width, l.default.height), ++this.status;
              break;
            case 2:
              this.sunsetTime = null, ++this.status;
              break;
            case 3:
              l.default.word.y -= l.default.titleOpt.distance, this.fireOpt = null, this.fireWords = null, ++this.status;
              break;
            case 4:
              this.titleOpt = null, this.titleWords = null, this.titleDots = null, ++this.status
          }
        }
      }, {
        key: "init",
        value: function () {
          this.drawBg(this.bgCtx, this.imgs.bg), this.shapeMaker = new O.default(this.width, this.height), this.test(), this.loop()
        }
      }, {
        key: "test",
        value: function () {}
      }, {
        key: "testLoop",
        value: function () {}
      }, {
        key: "loop",
        value: function () {
          switch (requestAnimationFrame(this.loop.bind(this)), ++this.time >= 6e4 || this.time, this.renderFall(), this.status) {
            case 1:
              this.renderDialogue();
              break;
            case 2:
              this.sunset();
              break;
            case 3:
              this.controlFire(), this.renderFireworks();
              break;
            case 4:
              this.renderTitle(), this.renderFireworks();
              break;
            case 5:
              this.end(), this.renderFireworks()
          }
          this.testLoop()
        }
      }, {
        key: "renderFall",
        value: function () {
          switch (this.fallCtx.clearRect(0, 0, this.width, this.height), this.fallType) {
            case "snow":
              this.time % l.default.snowInterval == 0 && this.fallDots.push(new v.default(l.default.snow));
              break;
            case "heart":
              this.time % l.default.heartInterval == 0 && this.fallDots.push(new w.default(l.default.heart));
              break;
            case "mix":
              this.time % l.default.snowInterval == 0 && this.fallDots.push(new v.default(l.default.snow)), this.time % l.default.heartInterval == 0 && this.fallDots.push(new w.default(l.default.heart))
          }
          for (var t = this.fallDots.length - 1; t >= 0; --t) !this.fallDots[t].render(this.fallCtx) && this.fallDots.splice(t, 1)
        }
      }, {
        key: "renderDialogue",
        value: function () {
          var t = this.dialogueCtx;
          if (t.clearRect(0, 0, l.default.width, l.default.height), t.fillStyle = this.dialogueOpt["color" + this.dialogue.type] || this.dialogueOpt.color1, t.font = this.dialogueOpt["font" + this.dialogue.type] || this.dialogueOpt.font1, this.dialogue.current = this.dialogue.current || 0, --this.dialogueOpt.speed <= 0 && (this.dialogueOpt.speed = l.default.dialogueOpt.speed, ++this.dialogue.current), t.fillText(this.dialogue.name + "：" + this.dialogue.txt.slice(0, this.dialogue.current), 20, 50), this.dialogue.current >= this.dialogue.txt.length && --this.dialogueOpt.interval <= 0) {
            if (0 == l.default.dialogue.length) return this.go(1);
            this.dialogue = l.default.dialogue.shift(), this.dialogueOpt.interval = l.default.dialogueOpt.interval
          }
        }
      }, {
        key: "sunset",
        value: function () {
          if (--this.sunsetTime <= 0) return this.go(2);
          this.fireworkCtx.fillStyle = "hsla(210, 60%, 5%, " + .01 * (20 - this.sunsetTime / l.default.sunset * 20) + ")", this.fireworkCtx.fillRect(0, 0, l.default.width, l.default.height)
        }
      }, {
        key: "controlFire",
        value: function () {
          --this.fireOpt.time, 0 == this.fireOpt.time && this.createDenseFire(), this.fireOpt.time <= -180 && !this.fireOpt.end && this.showFireworkWords(), -60 == this.fireOpt.time && this.fireOpt.end && this.fireworks.push(new m.default({
            x: l.default.width / 2,
            yEnd: l.default.height / 8,
            count: 600,
            radius: 5
          })), -360 == this.fireOpt.time && this.fireOpt.end && this.go(3)
        }
      }, {
        key: "showFireworkWords",
        value: function () {
          if (0 == this.fireWords.length) return this.fireOpt.end = !0, void(this.fireOpt.time = 180);
          --this.fireOpt.wordInterval <= 0 && (this.getDotsPostion(this.fireWords.shift(), !0), this.fireOpt.wordInterval = l.default.fireOpt.wordInterval)
        }
      }, {
        key: "createDenseFire",
        value: function () {
          for (var t = this, e = 0; e < 10; e++) setTimeout(function () {
            t.fireworks.push(new m.default(l.default.fireworks))
          }, 100 * e)
        }
      }, {
        key: "renderFireworks",
        value: function () {
          this.fireworkCtx.fillStyle = l.default.skyColor.replace("{lightness}", 5 + 15 * this.skyColor.lightness).replace("{hue}", this.skyColor.hue), this.fireworkCtx.fillRect(0, 0, this.width, this.height), this.createFireworks(), this.skyColor = {
            lightness: 0,
            hue: 210
          };
          for (var t = this.fireworks.length - 1; t >= 0; --t) this.skyColor = this.skyColor.lightness >= this.fireworks[t].getSkyColor().lightness ? this.skyColor : this.fireworks[t].getSkyColor(), !this.fireworks[t].render(this.fireworkCtx) && this.fireworks.splice(t, 1)
        }
      }, {
        key: "createFireworks",
        value: function () {
          --this.fireworkTime <= 0 && (this.fireworks.push(new m.default(l.default.fireworks)), this.fireworkTime = 0 | h.default.random.apply(h.default, n(l.default.fireworkInterval)))
        }
      }, {
        key: "renderTitle",
        value: function () {
          if (this.createCanvas(), this.createTitleDots(), this.titleOpt) {
            var t = this.titleOpt.ctx[this.titleOpt.current];
            t.clearRect(0, 0, this.width, this.height);
            for (var e in this.titleDots) this.titleDots[e].render(t);
            --this.titleOpt.time <= 0 && (this.titleOpt.start = !1)
          }
        }
      }, {
        key: "createCanvas",
        value: function () {
          if (!this.titleOpt.start) {
            ++this.titleOpt.current;
            var t = document.createElement("canvas");
            t.setAttribute("class", "title"), t.id = this.titleOpt.current, t.setAttribute("width", l.default.width), t.setAttribute("height", l.default.height), document.body.appendChild(t), this.titleOpt.ctx.push(t.getContext("2d"))
          }
        }
      }, {
        key: "createTitleDots",
        value: function () {
          var t = this;
          if (!this.titleOpt.start) {
            if (0 == this.titleWords.length) return this.go(4);
            this.titleDots = [], this.titleOpt.start = !0, this.titleOpt.time = l.default.titleOpt.e + l.default.titleOpt.delay, l.default.shape.gap = l.default.titleOpt.gap, l.default.word.size = l.default.titleOpt.size, l.default.word.y += l.default.titleOpt.distance;
            this.getDotsPostion(this.titleWords.shift()).forEach(function (e) {
              var i = {
                x: e.x,
                y: e.y,
                xStart: h.default.random(0, l.default.width),
                yStart: h.default.random(-100, 0),
                size: l.default.titleOpt.pSize,
                e: l.default.titleOpt.e
              };
              t.titleDots.push(new _.default(i))
            }), this.fallType = "mix"
          }
        }
      }, {
        key: "end",
        value: function () {
          this.fallType = "mix", this.time % 600 == 0 && this.createDenseFire()
        }
      }, {
        key: "getDotsPostion",
        value: function (t, e) {
          var i = this,
            r = "string" == typeof t ? t.split("") : t.shift().split(""),
            s = r.length,
            o = l.default.word.size,
            a = l.default.word.y,
            u = [];
          return r.forEach(function (t, r) {
            var h = void 0;
            h = s % 2 == 0 ? l.default.width / 2 + (r - s / 2) * o + .5 * o : l.default.width / 2 + (r - Math.floor(s / 2)) * o, i.shapeMaker.write({
              txt: t,
              x: h,
              y: a,
              size: o
            });
            var f = i.shapeMaker.getDots(l.default.shape);
            u.push.apply(u, n(f));
            var c = {};
            e && i.fireworks.push(new m.default({
              wait: 30,
              radius: 2,
              x: h,
              yEnd: a,
              dots: f,
              prtOption: c
            }))
          }), u
        }
      }, {
        key: "drawBg",
        value: function (t, e) {
          t.drawImage(e, 0, 0, this.width, this.height)
        }
      }, {
        key: "dealImgs",
        value: function (t) {
          var e = {};
          return t.forEach(function (t) {
            e[t.key] = t.img
          }), e
        }
      }]), t
    }())
  }()
}, function (t, e, i) {
  "use strict";

  function r(t, e, i) {
    if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      var r = document.querySelectorAll("body")[0];
      r.style.width = t + "px", r.style.height = e + "px"
    }
    i.forEach(function (i) {
      var r = document.querySelector("#" + i);
      r.setAttribute("width", t), r.setAttribute("height", e)
    })
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = r
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = {
    bg: i(9),
    musicon: i(10),
    musicoff: i(11)
  };
  e.default = r
}, function (t, e, i) {
  t.exports = i.p + "img/bg2.jpg"
}, function (t, e, i) {
  t.exports = i.p + "img/musicon.png"
}, function (t, e, i) {
  t.exports = i.p + "img/musicoff.png"
}, function (t, e, i) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e
      }
    }(),
    s = function () {
      function t() {
        r(this, t)
      }
      return n(t, null, [{
        key: "loadImg",
        value: function (t, e) {
          return new Promise(function (i, r) {
            var n = new Image;
            n.onload = function () {
              i({
                key: e,
                img: n
              })
            }, n.onerror = r, n.src = t
          })
        }
      }, {
        key: "load",
        value: function (t) {
          var e = [];
          for (var i in t) e.push(this.loadImg(t[i], i));
          return Promise.all(e)
        }
      }]), t
    }();
  e.default = s
}, function (t, e, i) {
  "use strict";

  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }

  function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var s = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e
      }
    }(),
    o = i(1),
    a = r(o),
    l = i(0),
    u = r(l),
    h = i(5),
    f = r(h),
    c = i(14),
    d = r(c),
    p = .002,
    y = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          i = e.x,
          r = e.y,
          s = void 0 === r ? a.default.height : r,
          o = e.xEnd,
          l = e.yEnd,
          h = e.size,
          f = void 0 === h ? 2 : h,
          c = e.radius,
          y = void 0 === c ? 1.2 : c,
          v = e.velocity,
          g = void 0 === v ? 3 : v,
          w = e.opacity,
          b = void 0 === w ? .8 : w,
          m = e.count,
          x = void 0 === m ? 200 : m,
          O = e.wait,
          k = e.color,
          _ = e.dots,
          z = e.prtOption,
          P = void 0 === z ? {} : z;
        if (n(this, t), this.x = i || u.default.random(a.default.width / 8, 7 * a.default.width / 8), this.y = s, this.xEnd = o || this.x, this.yEnd = l || u.default.random(a.default.height / 8, 3 * a.default.height / 8), this.size = f, this.opacity = b, this.velocity = -Math.abs(g), this.wait = O || u.default.random(30, 60), this.radius = y, this.GRAVITY = p, this.hue = 360 * Math.random() | 0, this.color = k || "hsla(" + this.hue + ",80%,60%,1)", this.status = 1, _) {
          this.type = "words";
          var S = {
            xStart: this.xEnd,
            yStart: this.yEnd
          };
          this.particles = _.map(function (t) {
            return new d.default(u.default.extend({}, t, S, P))
          })
        } else this.count = x, this.particles = [], this.createParticles(), this.type = "normal"
      }
      return s(t, [{
        key: "createParticles",
        value: function () {
          for (var t = 0; t < this.count; ++t) this.particles.push(new f.default({
            x: this.xEnd,
            y: this.yEnd,
            radius: this.radius
          }))
        }
      }, {
        key: "getSkyColor",
        value: function () {
          return {
            lightness: 3 == this.status ? this.opacity : 0,
            hue: this.hue
          }
        }
      }, {
        key: "render",
        value: function (t) {
          switch (this.status) {
            case 1:
              return t.save(), t.beginPath(), t.globalCompositeOperation = "lighter", t.globalAlpha = this.opacity, t.translate(this.x, this.y), t.scale(.8, 2.3), t.translate(-this.x, -this.y), t.fillStyle = this.color, t.arc(this.x + Math.sin(2 * Math.PI * Math.random()) / 1.2, this.y, this.size, 0, 2 * Math.PI, !1), t.fill(), t.restore(), this.rise(), !0;
            case 2:
              return --this.wait <= 0 && (this.opacity = 1, this.status = 3), !0;
            case 3:
              t.save(), t.globalCompositeOperation = "lighter", t.globalAlpha = this.opacity, t.fillStyle = this.color;
              for (var e = 0; e < this.particles.length; ++e) this.particles[e].render(t);
              return t.restore(), this.opacity -= .01, this.opacity > 0
          }
        }
      }, {
        key: "rise",
        value: function () {
          this.y += 1 * this.velocity, this.velocity += this.GRAVITY, this.y - this.yEnd <= 50 && (this.opacity = (this.y - this.yEnd) / 50), this.y <= this.yEnd && (this.status = 2)
        }
      }]), t
    }();
  e.default = y
}, function (t, e, i) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function n(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e
      }
    }(),
    a = i(5),
    l = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(a),
    u = function (t) {
      function e(t) {
        var i = t.x,
          s = t.y,
          o = t.size,
          a = void 0 === o ? 1 : o,
          l = t.circle,
          u = void 0 === l ? 1 : l,
          h = t.xStart,
          f = t.yStart;
        r(this, e);
        var c = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
          x: i,
          y: s,
          size: a,
          circle: u
        }));
        return c.dx = (i - h) / 80, c.dy = (s - f) / 80, c.xStart = h, c.yStart = f, c
      }
      return s(e, t), o(e, [{
        key: "go",
        value: function () {
          this.xStart += this.dx, this.yStart += this.dy
        }
      }, {
        key: "render",
        value: function (t) {
          this.go(), t.beginPath(), t.arc(this.xStart, this.yStart, this.size, 0, 2 * Math.PI, !1), t.fill()
        }
      }]), e
    }(l.default);
  e.default = u
}, function (t, e, i) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var n = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e
      }
    }(),
    s = function () {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 375,
          i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 667;
        r(this, t), this.canvas = document.createElement("canvas"), this.canvas.width = e, this.canvas.height = i, this.ctx = this.canvas.getContext("2d"), this.ctx.fillStyle = "red", this.ctx.textBaseline = "middle", this.ctx.textAlign = "center"
      }
      return n(t, [{
        key: "write",
        value: function () {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.txt,
            i = t.size,
            r = void 0 === i ? 50 : i,
            n = t.fontFamily,
            s = void 0 === n ? "Arial" : n,
            o = t.x,
            a = void 0 === o ? this.canvas.width / 2 : o,
            l = t.y,
            u = void 0 === l ? 100 : l;
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.font = "bold " + r + "px " + s, this.ctx.fillText(e, a, u), this.x = a, this.y = u, this.size = r
        }
      }, {
        key: "getPosition",
        value: function () {
          return {
            x: this.x,
            y: this.y
          }
        }
      }, {
        key: "getDots",
        value: function () {
          for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = t.mini, i = void 0 === e ? 1 : e, r = t.gap, n = void 0 === r ? 5 : r, s = this.ctx.getImageData(0, this.y - this.size / 2, this.canvas.width, this.size).data, o = [], a = 0, l = this.y - this.size / 2, u = 0, h = 0, f = s.length; h <= f; h += 4 * n) s[h + 3] > 0 && ++u % i == 0 && o.push({
            x: a,
            y: l
          }), (a += n) >= this.canvas.width && (a = 0, l += n, h += 4 * (n - 1) * this.canvas.width);
          return o
        }
      }]), t
    }();
  e.default = s
}, function (t, e, i) {
  "use strict";

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }

  function n(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e
  }

  function s(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
  }
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var o = function () {
      function t(t, e) {
        for (var i = 0; i < e.length; i++) {
          var r = e[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
        }
      }
      return function (e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e
      }
    }(),
    a = i(4),
    l = function (t) {
      return t && t.__esModule ? t : {
        default: t
      }
    }(a),
    u = function (t) {
      function e(t) {
        var i = t.xStart,
          s = t.yStart,
          o = t.x,
          a = t.y,
          l = t.minSize,
          u = t.maxSize,
          h = t.size,
          f = t.e,
          c = void 0 === f ? 240 : f;
        r(this, e);
        var d = n(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, {
          x: i,
          y: s,
          minSize: l,
          maxSize: u,
          size: h
        }));
        return d.yEnd = a, d.xEnd = o, d.e = c, d.dx = (d.xEnd - d.x) / d.e, d.dy = (d.yEnd - d.y) / d.e, d.status = 1, d
      }
      return s(e, t), o(e, [{
        key: "go",
        value: function () {
          return --this.e < 0 ? (this.x = this.xEnd, this.y = this.yEnd, !0) : (this.x += this.dx, this.y += this.dy, !1)
        }
      }, {
        key: "render",
        value: function (t) {
          return this.go(), t.save(), t.beginPath(), t.fillStyle = this.color, t.moveTo(this.x + .5 * this.size, this.y + .3 * this.size), t.bezierCurveTo(this.x + .1 * this.size, this.y, this.x, this.y + .6 * this.size, this.x + .5 * this.size, this.y + .9 * this.size), t.bezierCurveTo(this.x + 1 * this.size, this.y + .6 * this.size, this.x + .9 * this.size, this.y, this.x + .5 * this.size, this.y + .3 * this.size), t.closePath(), t.fill(), t.restore(), !0
        }
      }]), e
    }(l.default);
  e.default = u
}, function (t, e, i) {
  t.exports = i.p + "about-you.mp3"
}]);
