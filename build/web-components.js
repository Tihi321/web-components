parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"X6M9":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObservedAttributes=exports.Attributes=exports.Tags=exports.Events=exports.ObservedAttributesEnum=void 0,function(e){e[e.PROPERTIES=0]="PROPERTIES",e[e.KEYS=1]="KEYS",e[e.RERENDER=2]="RERENDER",e[e.HIDE=3]="HIDE"}(e=exports.ObservedAttributesEnum||(exports.ObservedAttributesEnum={})),exports.Events={RENDER:"render"},exports.Tags={COMPONENT:"for-each",TEMPLATE_SOURCE:"template",TEMPLATE_RENDER:"render",TEMPLATE_RENDER_CLASS:"render"},exports.Attributes={INDEX:"index",PROPERTY:"prop",PROPERTIES:"props",KEYS:"keys",RERENDER:"rerender",HIDE:"hide"},exports.ObservedAttributes=new Map,exports.ObservedAttributes.set(exports.Attributes.PROPERTIES,e.PROPERTIES),exports.ObservedAttributes.set(exports.Attributes.KEYS,e.KEYS),exports.ObservedAttributes.set(exports.Attributes.RERENDER,e.RERENDER),exports.ObservedAttributes.set(exports.Attributes.HIDE,e.HIDE);
},{}],"oCr0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.updatedTemplateWithObject=exports.updatedTemplateWithString=void 0;var t=require("./constants");function e(e,c,r){return e.replaceAll("{{ ".concat(t.Attributes.PROPERTY," }}"),"".concat(c)).replaceAll("{{ ".concat(t.Attributes.INDEX," }}"),"".concat(r))}function c(e,c,r,a){var n=e.replaceAll("{{ ".concat(t.Attributes.INDEX," }}"),"".concat(r));return a.forEach(function(e){return n=n.replaceAll("{{ ".concat(t.Attributes.PROPERTY,"[").concat(e,"] }}"),"".concat(c[e]))}),n}exports.updatedTemplateWithString=e,exports.updatedTemplateWithObject=c;
},{"./constants":"X6M9"}],"lo49":[function(require,module,exports) {
"use strict";function e(e){return o(e)||n(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function n(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,t,r){return t&&c(e.prototype,t),r&&c(e,r),e}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function l(e){var t=h();return function(){var r,n=m(e);if(t){var o=m(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){var t="function"==typeof Map?new Map:void 0;return(d=function(e){if(null===e||!E(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return y(e,arguments,m(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),v(r,e)})(e)}function y(e,t,r){return(y=h()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&v(o,r.prototype),o}).apply(null,arguments)}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function E(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0});var A=require("./constants"),O=require("./templates"),R=function(t){f(n,d(HTMLElement));var r=l(n);function n(){var e;return s(this,n),(e=r.call(this))._props=[],e._keys=[],e._hide=!1,e}return a(n,[{key:"props",set:function(e){this._props=JSON.parse(e)}},{key:"keys",set:function(e){this._keys=JSON.parse(e)}},{key:"hide",set:function(e){this._hide="true"===e}},{key:"propsIsObjectArray",get:function(){return this._props.filter(function(e){return"object"===u(e)}).length>0}},{key:"documentSourceTemplate",get:function(){var e=this.querySelector(A.Tags.TEMPLATE_SOURCE);return e?e.innerHTML.trim():""}},{key:"documentRenderElement",get:function(){var e=this.querySelector(A.Tags.TEMPLATE_RENDER);return e?e.innerHTML.trim():""},set:function(e){var t=this.querySelector(A.Tags.TEMPLATE_RENDER);t&&(t.innerHTML=e)}},{key:"connectedCallback",value:function(){this.appendRenderElement(),this.hide=this.getAttribute(n.observedAttributes[A.ObservedAttributesEnum.HIDE])||"false",this.props=this.getAttribute(n.observedAttributes[A.ObservedAttributesEnum.PROPERTIES])||"[]",this.keys=this.getAttribute(n.observedAttributes[A.ObservedAttributesEnum.KEYS])||"[]",this.render()}},{key:"attributeChangedCallback",value:function(e,t,r){switch(e){case n.observedAttributes[A.ObservedAttributesEnum.PROPERTIES]:this.props=r;break;case n.observedAttributes[A.ObservedAttributesEnum.KEYS]:this.keys=r;break;case n.observedAttributes[A.ObservedAttributesEnum.HIDE]:this.hide=r;break;case n.observedAttributes[A.ObservedAttributesEnum.RERENDER]:"true"===r&&this.setAttribute(n.observedAttributes[A.ObservedAttributesEnum.RERENDER],"false")}n.observedAttributes.includes(e)&&"false"!==r&&this.render()}},{key:"appendRenderElement",value:function(){var e=document.createElement(A.Tags.TEMPLATE_RENDER);e.classList.add(A.Tags.TEMPLATE_RENDER_CLASS),this.appendChild(e.cloneNode(!0))}},{key:"sendRenderEvent",value:function(){this.dispatchEvent(new Event(A.Events.RENDER))}},{key:"render",value:function(){var e=this,t=this._props.map(function(t,r){return e._keys.length>0&&e.propsIsObjectArray?O.updatedTemplateWithObject(e.documentSourceTemplate,t,r+1,e._keys):e.propsIsObjectArray?"":O.updatedTemplateWithString(e.documentSourceTemplate,t,r+1)});this._hide?""!==this.documentRenderElement&&(this.documentRenderElement=""):t.length>0&&(this.documentRenderElement=t.join(""),this.sendRenderEvent())}}],[{key:"observedAttributes",get:function(){return e(A.ObservedAttributes.keys())}},{key:"register",value:function(){customElements.define(A.Tags.COMPONENT,n)}}]),n}();exports.default=R;
},{"./constants":"X6M9","./templates":"oCr0"}],"ZvyH":[function(require,module,exports) {
"use strict";function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}function n(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}function r(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}function i(e){var n=s();return function(){var t,o=d(e);if(n){var r=d(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return c(this,t)}}function c(n,t){return!t||"object"!==e(t)&&"function"!=typeof t?a(n):t}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){var n="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||!f(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return u(e,arguments,d(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),p(t,e)})(e)}function u(e,n,t){return(u=s()?Reflect.construct:function(e,n,t){var o=[null];o.push.apply(o,n);var r=new(Function.bind.apply(e,o));return t&&p(r,t.prototype),r}).apply(null,arguments)}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function f(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0});var y=document.createElement("template");y.innerHTML='\n<style>\n  .quote-card {\n    display: flex;\n    flex-direction: row-reverse;\n    justify-content: space-between;\n    width: 400px;\n    margin: 10px;\n    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);\n  }\n\n  .header {\n    width: 200px;\n    hwight: 200px;\n  }\n\n  .image {\n    display: block;\n  }\n\n  .description {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 16px;\n  }\n\n  .person {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .name {\n    display: block;\n    font-size: 18px;\n    font-weight: 600;\n    line-height: 1.334;\n  }\n\n  .title {\n    color: rgba(0, 0, 0, 0.54);\n    display: block;\n    font-size: 12px;\n    line-height: 1.75;\n    letter-spacing: 0.1px;\n  }\n\n  .quote {\n    color: rgba(0, 0, 0, 0.54);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 2;\n    text-align: center;\n    font-size: 20px;\n    line-height: 1.43;\n    letter-spacing: 0.2px;\n  }\n</style>\n\n<article class="quote-card">\n  <header class="header">\n    <img class="image" src="" />\n  </header>\n  <div class="description">\n    <div class="person">\n      <slot class="name" name="name"></slot>\n      <slot class="title" name="title"></slot>\n    </div>\n    <div class="quote">"<slot name="quote"></slot>"</div>\n  </div>\n</article>\n';var h={COMPONENT:"quote-card",IMAGE_CLASS_SELECTOR:".image",IMAGE_TEXT_ATTRIBUTE:"image-text"},x=function(e){r(c,l(HTMLElement));var t=i(c);function c(){var e;return n(this,c),(e=t.call(this)).imageText="",e.attachShadow({mode:"open"}),e.shadowRoot&&e.shadowRoot.appendChild(y.content.cloneNode(!0)),e.imageText=e.getAttribute(h.IMAGE_TEXT_ATTRIBUTE)||"",e}return o(c,[{key:"connectedCallback",value:function(){var e=this.shadowRoot&&this.shadowRoot.querySelector(h.IMAGE_CLASS_SELECTOR);e&&e.setAttribute("src","https://via.placeholder.com/200?text=".concat(this.imageText))}}],[{key:"register",value:function(){customElements.define(h.COMPONENT,c)}}]),c}();exports.default=x;
},{}],"Psjn":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObservedAttributes=exports.Attributes=exports.Tags=exports.Effects=exports.Classes=exports.Events=exports.ObservedAttributesEnum=void 0,function(e){e[e.SOURCE=0]="SOURCE",e[e.EFFECT=1]="EFFECT"}(e=exports.ObservedAttributesEnum||(exports.ObservedAttributesEnum={})),exports.Events={LOAD:"load"},exports.Classes={IMAGE_ELEMENT_CLASS:"stylized-image",IMAGE_SHOW_CLASS:"show"},exports.Effects={CHEWIE:"chewie",EMPIRE:"empire",INGRID:"ingrid",NIGHTWIG:"nightwing",SEPIA:"sepia",NOIRE:"noire",FRAME:"frame",VIGNETTE:"vignette"},exports.Tags={COMPONENT:"stylized-image",TEMPLATE_SOURCE:"template"},exports.Attributes={SOURCE:"src",EFFECT:"effect"},exports.ObservedAttributes=new Map,exports.ObservedAttributes.set(exports.Attributes.SOURCE,e.SOURCE),exports.ObservedAttributes.set(exports.Attributes.EFFECT,e.EFFECT);
},{}],"nRGp":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.chewieEffect=exports.empireEffect=exports.ingridEffect=exports.nightwigEffect=void 0;var e=require("../constants");function n(){return"\n  .".concat(e.Effects.NIGHTWIG," {\n    background-color: rgb(62, 170, 254);\n    background-blend-mode: luminosity;\n  }")}function r(){return"\n  .".concat(e.Effects.INGRID," {\n    background-color: rgb(252, 188, 255);\n    background-blend-mode: hard-light;\n  }")}function o(){return"\n  .".concat(e.Effects.EMPIRE," {\n    background-color: rgb(83, 89, 140);\n    background-blend-mode: color-dodge;\n  }")}function c(){return"\n  .".concat(e.Effects.CHEWIE," {\n    background-color: rgb(167, 128, 20);\n    background-blend-mode: screen;\n  }")}exports.nightwigEffect=n,exports.ingridEffect=r,exports.empireEffect=o,exports.chewieEffect=c;
},{"../constants":"Psjn"}],"qcGz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.noireEffect=exports.sepiaEffect=void 0;var e=require("../constants");function t(){return"\n  .".concat(e.Effects.SEPIA," {\n    filter: sepia(60%);\n  }")}function r(){return"\n  .".concat(e.Effects.NOIRE," {\n    filter: grayscale(50%);\n  }")}exports.sepiaEffect=t,exports.noireEffect=r;
},{"../constants":"Psjn"}],"afoa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.vignetteEffect=exports.imageFrameEffect=void 0;var e=require("../constants");function t(){return"\n  .".concat(e.Effects.FRAME," {\n    border: 15px solid steelblue;\n    filter: drop-shadow(10px 10px 5px #000000);\n  }")}function r(){return"\n  .".concat(e.Effects.VIGNETTE," {\n    box-shadow: 0 0 110px 40px rgba(0, 0, 0, 0.7) inset;\n  }")}exports.imageFrameEffect=t,exports.vignetteEffect=r;
},{"../constants":"Psjn"}],"mZv5":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.stylizedTemplate=void 0;var e=require("./constants"),n=require("./effects/background"),t=require("./effects/filters"),c=require("./effects/common"),i=document.createElement(e.Tags.TEMPLATE_SOURCE);exports.stylizedTemplate=i,i.innerHTML="\n<style>\n  .".concat(e.Classes.IMAGE_ELEMENT_CLASS," {\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n    width: 0;\n    height: 0;\n    max-width: 500px;\n    max-height: 500px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    transition: opacity 0.5s ease;\n  }\n\n  .title {\n    color: #FFFFFF;\n    font-size: 20px;\n    font-weight: 800;\n    font-family: sans-serif;\n    letter-spacing: 1.2px;\n  }\n\n  .").concat(e.Classes.IMAGE_SHOW_CLASS," {\n    opacity: 1;\n  }\n\n  ").concat(n.chewieEffect(),"\n  ").concat(n.empireEffect(),"\n  ").concat(n.ingridEffect(),"\n  ").concat(n.nightwigEffect(),"\n  ").concat(t.sepiaEffect(),"\n  ").concat(t.noireEffect(),"\n  ").concat(c.imageFrameEffect(),"\n  ").concat(c.vignetteEffect(),'\n</style>\n\n<div class="').concat(e.Classes.IMAGE_ELEMENT_CLASS,'">\n  <slot class="title" name="title"></slot>\n</div>\n');
},{"./constants":"Psjn","./effects/background":"nRGp","./effects/filters":"qcGz","./effects/common":"afoa"}],"Mf4r":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return i(t)||o(t)||r(t)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function i(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}function f(t){var e=d();return function(){var n,r=v(t);if(e){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?h(e):n}function h(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t){var e="function"==typeof Map?new Map:void 0;return(p=function(t){if(null===t||!b(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return m(t,arguments,v(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g(n,t)})(t)}function m(t,e,n){return(m=d()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var o=new(Function.bind.apply(t,r));return n&&g(o,n.prototype),o}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function b(t){return-1!==Function.toString.call(t).indexOf("[native code]")}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(exports,"__esModule",{value:!0});var E=require("./template"),S=require("./constants"),C=function(t){l(r,p(HTMLElement));var n=f(r);function r(){var t;return c(this,r),(t=n.call(this)).src="",t.effect="",t.stylizedImageContainer=null,t.attachShadow({mode:"open"}),t.shadowRoot&&(t.shadowRoot.appendChild(E.stylizedTemplate.content.cloneNode(!0)),t.stylizedImageContainer=t.shadowRoot.querySelector(".".concat(S.Classes.IMAGE_ELEMENT_CLASS))),t.imgElement=new Image,t.setImageSizeCallback=t.setImageSizeCallback.bind(h(t)),t}return u(r,[{key:"updateImageSize",value:function(){this.src&&(this.imgElement.src=this.src,this.imgElement.addEventListener(S.Events.LOAD,this.setImageSizeCallback))}},{key:"setImageWithNewSize",set:function(t){this.stylizedImageContainer&&this.stylizedImageContainer.setAttribute("style","width: ".concat(t.width,"px; height: ").concat(t.height,"px; background-image: url(").concat(this.src,");")),this.showElement()}},{key:"setImageSizeCallback",value:function(t){var e,n;this.setImageWithNewSize={width:null===(e=t.target)||void 0===e?void 0:e.width,height:null===(n=t.target)||void 0===n?void 0:n.height},this.imgElement.removeEventListener(S.Events.LOAD,this.setImageSizeCallback)}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case S.Attributes.SOURCE:this.hideElement(),this.src=n,this.updateImageSize();break;case S.Attributes.EFFECT:this.effect=n,this.removeEffect(e),this.setEffect(n)}}},{key:"setEffect",value:function(t){t&&this.stylizedImageContainer&&this.stylizedImageContainer.classList.add(t)}},{key:"removeEffect",value:function(t){t&&this.stylizedImageContainer&&this.stylizedImageContainer.classList.remove(t)}},{key:"hideElement",value:function(){this.stylizedImageContainer&&this.stylizedImageContainer.classList.remove(S.Classes.IMAGE_SHOW_CLASS)}},{key:"showElement",value:function(){this.stylizedImageContainer&&this.stylizedImageContainer.classList.add(S.Classes.IMAGE_SHOW_CLASS)}},{key:"connectedCallback",value:function(){this.setEffect(this.effect)}}],[{key:"observedAttributes",get:function(){return e(S.ObservedAttributes.keys())}},{key:"register",value:function(){customElements.define(S.Tags.COMPONENT,r)}}]),r}();exports.default=C;
},{"./template":"mZv5","./constants":"Psjn"}],"bLj9":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.ObservedAttributes=exports.Attributes=exports.Tags=exports.Classes=exports.IntersectionObserverOptions=exports.Events=exports.ObservedAttributesEnum=void 0,function(e){e[e.SOURCE=0]="SOURCE"}(e=exports.ObservedAttributesEnum||(exports.ObservedAttributesEnum={})),exports.Events={LOAD:"load"},exports.IntersectionObserverOptions={root:null,rootMargin:"100px 0px 100px 0px",threshold:0},exports.Classes={IMAGE_ELEMENT_CLASS:"lazy-image",IMAGE_SHOW_CLASS:"show"},exports.Tags={COMPONENT:"lazy-image",TEMPLATE_SOURCE:"template"},exports.Attributes={SOURCE:"src"},exports.ObservedAttributes=new Map,exports.ObservedAttributes.set(exports.Attributes.SOURCE,e.SOURCE);
},{}],"hXRk":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.stylizedTemplate=void 0;var e=require("./constants"),n=document.createElement(e.Tags.TEMPLATE_SOURCE);exports.stylizedTemplate=n,n.innerHTML="\n<style>\n  .".concat(e.Classes.IMAGE_ELEMENT_CLASS," {\n    opacity: 0;\n    width: 0;\n    height: 0;\n    max-width: 500px;\n    max-height: 500px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    transition: opacity 0.5s ease;\n    filter: blur(20px);\n  }\n  .").concat(e.Classes.IMAGE_SHOW_CLASS,' {\n    opacity: 1;\n    filter: blur(0);\n  }\n</style>\n\n<div class="').concat(e.Classes.IMAGE_ELEMENT_CLASS,'"></div>\n');
},{"./constants":"bLj9"}],"EVT1":[function(require,module,exports) {
"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e){return a(e)||o(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&l(e.prototype,t),n&&l(e,n),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}function f(e){var t=d();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(t,n){return!n||"object"!==e(n)&&"function"!=typeof n?y(t):n}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){var t="function"==typeof Map?new Map:void 0;return(b=function(e){if(null===e||!p(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return m(e,arguments,v(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),g(n,e)})(e)}function m(e,t,n){return(m=d()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&g(o,n.prototype),o}).apply(null,arguments)}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function p(e){return-1!==Function.toString.call(e).indexOf("[native code]")}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(exports,"__esModule",{value:!0});var C=require("./template"),k=require("./constants"),S=function(e){s(r,b(HTMLElement));var n=f(r);function r(){var e;return c(this,r),(e=n.call(this)).lazyImageContainer=null,e.addedCallback=!1,e.canShowImage=!1,e.attachShadow({mode:"open"}),e.shadowRoot&&(e.shadowRoot.appendChild(C.stylizedTemplate.content.cloneNode(!0)),e.lazyImageContainer=e.shadowRoot.querySelector(".".concat(k.Classes.IMAGE_ELEMENT_CLASS))),e.imgElement=new Image,e.setImageSizeCallback=e.setImageSizeCallback.bind(y(e)),e.intersectionCallback=e.intersectionCallback.bind(y(e)),e.observer=new IntersectionObserver(e.intersectionCallback,k.IntersectionObserverOptions),e.src=e.getAttribute(k.Attributes.SOURCE)||"",e}return u(r,[{key:"updateImageSizeAndAddCallback",value:function(){this.imgElement.src=this.src,this.addImageCallback(),this.addedCallback=!0}},{key:"setImageWithNewSize",set:function(e){this.lazyImageContainer&&this.lazyImageContainer.setAttribute("style","width: ".concat(e.width,"px; height: ").concat(e.height,"px; background-image: url(").concat(this.src,");")),this.showElement()}},{key:"setImageSizeCallback",value:function(e){var t,n;this.setImageWithNewSize={width:null===(t=e.target)||void 0===t?void 0:t.width,height:null===(n=e.target)||void 0===n?void 0:n.height},this.canShowImage=!0}},{key:"attributeChangedCallback",value:function(e,t,n){switch(e){case k.Attributes.SOURCE:this.hideElement(),this.src=n,this.removeImageCallback(),this.addedCallback=!1}}},{key:"hideElement",value:function(){this.lazyImageContainer&&this.lazyImageContainer.classList.remove(k.Classes.IMAGE_SHOW_CLASS)}},{key:"showElement",value:function(){this.lazyImageContainer&&(this.lazyImageContainer.classList.add(k.Classes.IMAGE_SHOW_CLASS),this.canShowImage=!1)}},{key:"removeImageCallback",value:function(){this.imgElement.removeEventListener(k.Events.LOAD,this.setImageSizeCallback)}},{key:"addImageCallback",value:function(){this.imgElement.addEventListener(k.Events.LOAD,this.setImageSizeCallback)}},{key:"intersectionCallback",value:function(e,t){var n=this;e.forEach(function(e){e.isIntersecting&&(!n.addedCallback&&n.src&&n.updateImageSizeAndAddCallback(),n.canShowImage&&n.showElement())})}},{key:"connectedCallback",value:function(){this.lazyImageContainer&&this.observer.observe(this.lazyImageContainer)}},{key:"disconnectedCallback",value:function(){this.imgElement.removeEventListener(k.Events.LOAD,this.setImageSizeCallback)}}],[{key:"observedAttributes",get:function(){return t(k.ObservedAttributes.keys())}},{key:"register",value:function(){customElements.define(k.Tags.COMPONENT,r)}}]),r}();exports.default=S;
},{"./template":"hXRk","./constants":"bLj9"}],"NBic":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("./ForEachComponent/index")),t=e(require("./QuoteCardComponent/index")),i=e(require("./StylizedImageComponent/index")),u=e(require("./LazyImageComponent/index"));r.default.register(),t.default.register(),i.default.register(),u.default.register();
},{"./ForEachComponent/index":"lo49","./QuoteCardComponent/index":"ZvyH","./StylizedImageComponent/index":"Mf4r","./LazyImageComponent/index":"EVT1"}]},{},["NBic"], null)
//# sourceMappingURL=/web-components.js.map