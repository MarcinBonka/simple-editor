!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var o=function(){var e=localStorage.getItem("MyInputText");e?(console.log("Local text under the key 'MyInputText' exists and will be loaded as textbox content "),document.getElementById("myText").value=e,console.log("Local text '".concat(e,"' loaded."))):console.log("Local text under the key 'MyInputText' doesn't exist. Will be not loaded. ")};console.log("HELLO 🚀"),o();var r=document.querySelector(".form__btnLoad--js"),l=document.querySelector(".form__btnSave--js");r.addEventListener("click",(function(e){console.log("button ".concat(r.innerHTML," clicked ")),o()})),l.addEventListener("click",(function(e){console.log("Button ".concat(l.innerHTML," clicked "));var t=document.getElementById("myText").value;localStorage.setItem("MyInputText",t),console.log("Text '".concat(t,"' saved to local storage."))}))},function(e,t,n){}]);