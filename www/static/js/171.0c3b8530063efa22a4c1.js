webpackJsonp([171],{V5cX:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"startFocusVisible",function(){return r});var o="ion-focused",s="ion-focusable",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"];function r(n){var t=[],e=!0;function r(n){t.forEach(function(n){return n.classList.remove(o)}),n.forEach(function(n){return n.classList.add(o)}),t=n}n.addEventListener("keydown",function(n){(e=c.includes(n.key))||r([])});var i=function(){e=!1,r([])};n.addEventListener("focusin",function(n){e&&n.composedPath&&r(n.composedPath().filter(function(n){return!!n.classList&&n.classList.contains(s)}))}),n.addEventListener("focusout",function(){n.activeElement===n.body&&r([])}),n.addEventListener("touchstart",i),n.addEventListener("mousedown",i)}}});
//# sourceMappingURL=171.0c3b8530063efa22a4c1.js.map