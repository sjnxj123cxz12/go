window.__require = function t(e, o, r) {
function n(s, p) {
if (!o[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var u = "function" == typeof __require && __require;
if (!p && u) return u(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var a = o[s] = {
exports: {}
};
e[s][0].call(a.exports, function(t) {
return n(e[s][1][t] || t);
}, a, a.exports, t, e, o, r);
}
return o[s].exports;
}
for (var i = "function" == typeof __require && __require, s = 0; s < r.length; s++) n(r[s]);
return n;
}({
"BMW.Lobby": [ function(t, e, o) {
"use strict";
cc._RF.push(e, "500e7oWTeJIkpR1M/m5iAdd", "BMW.Lobby");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, r); else for (var p = t.length - 1; p >= 0; p--) (n = t[p]) && (s = (i < 3 ? n(s) : i > 3 ? n(e, o, s) : n(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var s = cc._decorator, p = s.ccclass, c = s.property, u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.progress1 = null;
e.progress2 = null;
e.progresslabel = null;
e.count = 0;
e.isFull = !1;
e.speed = .4;
return e;
}
e.prototype.onLoad = function() {};
e.prototype.update = function(t) {
if (this.progress1.node.parent.active) {
if (this.progress1.progress >= 1) {
if (!this.isFull) {
this.isFull = !0;
this.onJoinRoom();
}
return;
}
this.progress1.progress += t * this.speed;
this.progress2.progress += t * this.speed;
this.progresslabel.string = Math.round(100 * this.progress1.progress) + "%";
}
};
e.prototype.onEnable = function() {
fzgui.EventDispatch.instance.add(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
e.prototype.onDisable = function() {
fzgui.EventDispatch.instance.remove(fzgui.EVENT_GAMECORE.UPDATE_TOTAL_GOLD, this.onUpdateGold, this);
};
e.prototype.onUpdateGold = function(t) {
fzgui.UserManager.instance.mainUserInfo.Money = t;
};
e.prototype.show = function(t) {
this.node.active = t;
return this.node.active;
};
e.prototype.actBack = function() {
fzgui.GameCoreManager.instance.onBackToLobby();
};
e.prototype.actHonors = function() {};
e.prototype.actHistory = function() {};
e.prototype.onJoinRoom = function() {
setTimeout(function() {
fzgui.UIScreenManager.instance.popToRootScreen();
fzgui.UIPopupManager.instance.showPopup("Phòng đầy!");
}, 2e3);
};
i([ c(cc.ProgressBar) ], e.prototype, "progress1", void 0);
i([ c(cc.ProgressBar) ], e.prototype, "progress2", void 0);
i([ c(cc.Label) ], e.prototype, "progresslabel", void 0);
return i([ p ], e);
}(cc.Component);
o.default = u;
cc._RF.pop();
}, {} ]
}, {}, [ "BMW.Lobby" ]);