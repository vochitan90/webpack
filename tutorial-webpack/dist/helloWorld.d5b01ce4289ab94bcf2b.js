(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,n(o.key),o)}}function n(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===e(n)?n:String(n)}const r=function(){function e(){var t,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),t=this,o="hello-world-button",(r=n(r="buttonCssClass"))in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o}var r,o;return r=e,(o=[{key:"render",value:function(){var e=document.querySelector("body"),t=document.createElement("button");t.innerHTML="hello world",t.classList.add(this.buttonCssClass),t.onclick=function(){var t=document.createElement("p");t.innerHTML="hello world",t.classList.add("hello-world-text"),e.appendChild(t)},e.appendChild(t)}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),e}();function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key),"symbol"===o(i)?i:String(i)),r)}var i}(new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"render",value:function(){var e=document.createElement("h1"),t=document.querySelector("body");e.textContent="webpack is awesome",t.appendChild(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())).render(),(new r).render(),console.log("Production mode")})();