module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";t.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1));var i=Promise.resolve(),o=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return r.uiConfig=n.uiConfig,r.firebaseAuth=n.firebaseAuth,r.className=n.className,r.uiCallback=n.uiCallback,r.unregisterAuthObserver=function(){},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this,t="undefined"!=typeof window?window.firebaseui:null;if(t)return i.then(function(){e.firebaseUiWidget=t.auth.AuthUI.getInstance()||new t.auth.AuthUI(e.firebaseAuth),"popup"===e.uiConfig.signInFlow&&e.firebaseUiWidget.reset(),e.userSignedIn=!1,e.unregisterAuthObserver=e.firebaseAuth.onAuthStateChanged(function(t){!t&&e.userSignedIn&&e.firebaseUiWidget.reset(),e.userSignedIn=!!t}),e.uiCallback&&e.uiCallback(e.firebaseUiWidget),e.firebaseUiWidget.start("#firebaseui_container",e.uiConfig)})},t.prototype.componentWillUnmount=function(){var e=this;return i=i.then(function(){return e.unregisterAuthObserver(),e.firebaseUiWidget.delete()})},t.prototype.render=function(){return r.default.createElement("div",{className:this.className,id:"firebaseui_container"})},t}(r.default.Component);t.default=o},function(e,t){e.exports=require("react")}]);
//# sourceMappingURL=StyledFirebaseAuth.js.map