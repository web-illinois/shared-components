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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@lit/reactive-element/css-tag.js":
/*!*******************************************************!*\
  !*** ./node_modules/@lit/reactive-element/css-tag.js ***!
  \*******************************************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return r; });
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new o("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o(n,t,s)},S=(s,n)=>{e?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)}))},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map


/***/ }),

/***/ "./node_modules/@lit/reactive-element/reactive-element.js":
/*!****************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/reactive-element.js ***!
  \****************************************************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS, ReactiveElement, defaultConverter, notEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return a; });
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/css-tag.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["adoptStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _css_tag_js__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"]; });


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s;const e=window,r=e.trustedTypes,h=r?r.emptyScript:"",o=e.reactiveElementPolyfillSupport,n={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:n,reflect:!1,hasChanged:a},d="finalized";class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty(d))return!1;this[d]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(Object(_css_tag_js__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"])(i))}else void 0!==i&&s.push(Object(_css_tag_js__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"])(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return Object(_css_tag_js__WEBPACK_IMPORTED_MODULE_0__["adoptStyles"])(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}u[d]=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==o||o({ReactiveElement:u}),(null!==(s=e.reactiveElementVersions)&&void 0!==s?s:e.reactiveElementVersions=[]).push("1.6.3");
//# sourceMappingURL=reactive-element.js.map


/***/ }),

/***/ "./node_modules/lit-element/lit-element.js":
/*!*************************************************!*\
  !*** ./node_modules/lit-element/lit-element.js ***!
  \*************************************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS, ReactiveElement, defaultConverter, notEqual, _$LH, html, noChange, nothing, render, svg, LitElement, UpdatingElement, _$LE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_$LE", function() { return h; });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/reactive-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["adoptStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["getCompatibleStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["ReactiveElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["notEqual"]; });

/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_$LH", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["_$LH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["nothing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_html__WEBPACK_IMPORTED_MODULE_1__["svg"]; });


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;const r=_lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["ReactiveElement"];class s extends _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__["ReactiveElement"]{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Object(lit_html__WEBPACK_IMPORTED_MODULE_1__["render"])(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return lit_html__WEBPACK_IMPORTED_MODULE_1__["noChange"]}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});const h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");
//# sourceMappingURL=lit-element.js.map


/***/ }),

/***/ "./node_modules/lit-html/is-server.js":
/*!********************************************!*\
  !*** ./node_modules/lit-html/is-server.js ***!
  \********************************************/
/*! exports provided: isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return o; });
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o=!1;
//# sourceMappingURL=is-server.js.map


/***/ }),

/***/ "./node_modules/lit-html/lit-html.js":
/*!*******************************************!*\
  !*** ./node_modules/lit-html/lit-html.js ***!
  \*******************************************/
/*! exports provided: _$LH, html, noChange, nothing, render, svg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_$LH", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return b; });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i=window,s=i.trustedTypes,e=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,o="$lit$",n=`lit$${(Math.random()+"").slice(9)}$`,l="?"+n,h=`<${l}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),b=w(2),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o+s.slice(v)+n+w):s+n+(-2===v?(e.push(void 0),i):w)}return[P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o)||i.startsWith(n)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o).split(n),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k})}else v.push({type:6,index:r})}for(const i of t)h.removeAttribute(i)}if(y.test(h.tagName)){const t=h.textContent.split(n),i=t.length-1;if(i>0){h.textContent=s?s.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u())}}}else if(8===h.nodeType)if(h.data===l)v.push({type:2,index:r});else{let t=-1;for(;-1!==(t=h.data.indexOf(n,t+1));)v.push({type:7,index:r}),t+=n.length-1}r++}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h]}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++)}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else{const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends k{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}}const I=s?s.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name)}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t)}}const j={O:o,P:n,A:l,C:1,M:V,L:M,R:v,D:S,I:R,V:k,H:L,N:z,U:H,F:Z},B=i.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i.litHtmlVersions)&&void 0!==t?t:i.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l};
//# sourceMappingURL=lit-html.js.map


/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/*! exports provided: CSSResult, adoptStyles, css, getCompatibleStyle, supportsAdoptingStyleSheets, unsafeCSS, ReactiveElement, defaultConverter, notEqual, _$LH, html, noChange, nothing, render, svg, LitElement, UpdatingElement, _$LE, isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/lit-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSResult", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["CSSResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "adoptStyles", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["adoptStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["css"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCompatibleStyle", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["getCompatibleStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "supportsAdoptingStyleSheets", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["supportsAdoptingStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsafeCSS", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["unsafeCSS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveElement", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["ReactiveElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultConverter", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["defaultConverter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEqual", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["notEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_$LH", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["_$LH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["html"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noChange", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["noChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nothing", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["nothing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["svg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LitElement", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["LitElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatingElement", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["UpdatingElement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_$LE", function() { return lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__["_$LE"]; });

/* harmony import */ var lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/is-server.js */ "./node_modules/lit-html/is-server.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__["isServer"]; });


//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./src/css/toolkit.scss":
/*!******************************!*\
  !*** ./src/css/toolkit.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/components/accordion-panel/accordion-panel.component.js":
/*!************************************************************************!*\
  !*** ./src/js/components/accordion-panel/accordion-panel.component.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _accordion_panel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion-panel.css */ "./src/js/components/accordion-panel/accordion-panel.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var AccordionPanel = /*#__PURE__*/function (_LitElement) {
  function AccordionPanel() {
    var _this;
    _classCallCheck(this, AccordionPanel);
    _this = _callSuper(this, AccordionPanel);
    if (typeof _this.open == 'undefined') {
      _this.open = false;
    }
    return _this;
  }
  _inherits(AccordionPanel, _LitElement);
  return _createClass(AccordionPanel, [{
    key: "collapse",
    value: function collapse() {
      this.open = false;
    }
  }, {
    key: "updateHeader",
    value: function updateHeader(e) {
      var childNode = e.target.assignedNodes({
        flatten: true
      })[0];
      if (typeof childNode !== 'undefined') {
        this.headerTagName = childNode.tagName;
        this.headerTitle = childNode.innerText;
        var id = this.headerTitle.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
        this.id = "il-accordion-id-" + id;
        this.buttonId = "il-accordion-button-" + id;
        this.panelId = "il-accordion-panel-" + id;
      }
    }
  }, {
    key: "triggerExpand",
    value: function triggerExpand(e) {
      this.open = !this.open;
      this.dispatchEvent(new Event('expand', {
        panelId: 'testid'
      }));
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this2 = this;
      this.shadowRoot.querySelector('slot[name="header"]').addEventListener('slotchange', function (e) {
        return _this2.updateHeader(e);
      });
    }
  }, {
    key: "renderChevron",
    value: function renderChevron() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\n    <path\n      d=\"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z\" />\n    </svg>"])));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.headerTagName == 'H2') {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <div class=\"accordion-panel\">\n      <div class=\"invisible\"><slot name=\"header\"></slot></div>\n      <h2><button id=\"", "\" aria-expanded=\"", "\" aria-controls=\"", "\" @click=", "><span>", "</span>", "</button></h2>\n          <div role=\"region\" class=\"panel\" id=\"", "\" aria-labelledby=\"", "\" ?hidden=", ">\n          <slot></slot>\n          </div>\n      </div>\n      "])), this.buttonId, this.open, this.panelId, this.triggerExpand, this.renderChevron(), this.headerTitle, this.panelId, this.buttonId, !this.open);
      }
      if (this.headerTagName == 'H3') {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      <div class=\"accordion-panel\">\n      <div class=\"invisible\"><slot name=\"header\"></slot></div>\n      <h3><button id=\"", "\" aria-expanded=\"", "\" aria-controls=\"", "\" @click=", "><span>", "</span>", "</button></h3>\n          <div role=\"region\" class=\"panel\" id=\"", "\" aria-labelledby=\"", "\" ?hidden=", ">\n          <slot></slot>\n          </div>\n      </div>\n      "])), this.buttonId, this.open, this.panelId, this.triggerExpand, this.renderChevron(), this.headerTitle, this.panelId, this.id, !this.open);
      }
      if (this.headerTagName == 'H4') {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      <div class=\"accordion-panel\">\n      <div class=\"invisible\"><slot name=\"header\"></slot></div>\n      <h4><button id=\"", "\" aria-expanded=\"", "\" aria-controls=\"", "\" @click=", "><span></span>", "</button></h4>\n          <div role=\"region\" class=\"panel\" id=\"", "\" aria-labelledby=\"", "\" ?hidden=", ">\n          <slot></slot>\n          </div>\n      </div>\n      "])), this.buttonId, this.open, this.panelId, this.triggerExpand, this.headerTitle, this.panelId, this.id, !this.open);
      }
      if (this.headerTagName == 'H5') {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      <div class=\"accordion-panel\">\n      <div class=\"invisible\"><slot name=\"header\"></slot></div>\n      <h5><button id=\"", "\" aria-expanded=\"", "\" aria-controls=\"", "\" @click=", "><span></span>", "</button></h5>\n          <div role=\"region\" class=\"panel\" id=\"", "\" aria-labelledby=\"", "\" ?hidden=", ">\n          <slot></slot>\n          </div>\n      </div>\n      "])), this.buttonId, this.open, this.panelId, this.triggerExpand, this.headerTitle, this.panelId, this.id, !this.open);
      }
      if (this.headerTagName == 'H6') {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      <div class=\"accordion-panel\">\n      <div class=\"invisible\"><slot name=\"header\"></slot></div>\n          <h6><button id=\"", "\" aria-expanded=\"", "\" aria-controls=\"", "\" @click=", "><span></span>", "</button></h6>\n          <div role=\"region\" class=\"panel\" id=\"", "\" aria-labelledby=\"", "\" ?hidden=", ">\n          <slot></slot>\n          </div>\n      </div>\n      "])), this.buttonId, this.open, this.panelId, this.triggerExpand, this.headerTitle, this.panelId, this.id, !this.open);
      }
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    <div class=\"accordion-panel\">\n    <div class=\"invisible\"><slot name=\"header\"></slot></div>\n    <button id=\"", "\" aria-expanded=\"", "\" aria-controls=\"", "\" @click=", "><span></span>", "</button>\n        <div role=\"region\" class=\"panel\" id=\"", "\" aria-labelledby=\"", "\" ?hidden=", ">\n        <slot></slot>\n        </div>\n    </div>\n    "])), this.buttonId, this.open, this.panelId, this.triggerExpand, this.headerTitle, this.panelId, this.id, !this.open);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        headerTitle: {
          type: String
        },
        headerTagName: {
          type: String
        },
        buttonId: {
          type: String,
          "default": ''
        },
        panelId: {
          type: String,
          "default": ''
        },
        open: {
          type: Boolean,
          "default": false,
          attribute: true,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _accordion_panel_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-accordion-panel', AccordionPanel);

/***/ }),

/***/ "./src/js/components/accordion-panel/accordion-panel.css.js":
/*!******************************************************************!*\
  !*** ./src/js/components/accordion-panel/accordion-panel.css.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: block;\n  }\n\n  .invisible { \n    display: none; \n  }\n\n  h2, h3, h4, h5, h6 {\n    margin: 0;\n  }\n\n  button {\n    font-size: 1.4rem;\n    font-weight: 500;\n    font-family: var(--il-source-sans);\n    padding: var(--il-details-padding);\n    background: var(--il-details-background);\n    color: var(--il-details-color);\n    width: 100%;\n    text-align: left;\n    border: none;\n    display: flex;\n    align-items: center;\n  }\n\n  button:focus, button:hover {\n    background: var(--il-details-background-hover);\n  }\n\n  button span {\n    width: 18px;\n    height: 18px;\n    display: inline-block;\n    margin-right: 10px;\n    transform: rotate(-90deg);\n  }\n\n  button[aria-expanded=true] span {\n    transform: rotate(0deg);\n  }\n\n  .panel {\n    margin-left: 40px;\n    padding-bottom: 20px;\n  }\n"]))));

/***/ }),

/***/ "./src/js/components/accordion/accordion.component.js":
/*!************************************************************!*\
  !*** ./src/js/components/accordion/accordion.component.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _accordion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.css */ "./src/js/components/accordion/accordion.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Accordion = /*#__PURE__*/function (_LitElement) {
  function Accordion() {
    var _this;
    _classCallCheck(this, Accordion);
    _this = _callSuper(this, Accordion);
    if (typeof _this.single == 'undefined') {
      _this.single = false;
    }
    document.addEventListener('DOMContentLoaded', _this.handleContentLoaded.bind(_this));
    return _this;
  }
  _inherits(Accordion, _LitElement);
  return _createClass(Accordion, [{
    key: "handleContentLoaded",
    value: function handleContentLoaded(evt) {
      var _this2 = this;
      this.getPanels().forEach(function (section) {
        section.addEventListener('expand', _this2.collapsePanels.bind(_this2));
      });
    }
  }, {
    key: "collapsePanels",
    value: function collapsePanels(evt) {
      if (this.single) {
        this.getPanels().forEach(function (section) {
          if (evt.target.panelId !== section.panelId) {
            section.removeAttribute('open');
          }
        });
      }
    }
  }, {
    key: "getPanels",
    value: function getPanels() {
      return this.querySelectorAll('il-accordion-panel');
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <slot></slot>\n    "])));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        single: {
          type: Boolean,
          "default": false,
          attribute: true,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _accordion_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-accordion', Accordion);

/***/ }),

/***/ "./src/js/components/accordion/accordion.css.js":
/*!******************************************************!*\
  !*** ./src/js/components/accordion/accordion.css.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n"]))));

/***/ }),

/***/ "./src/js/components/accordion/accordion.js":
/*!**************************************************!*\
  !*** ./src/js/components/accordion/accordion.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function (event) {
  document.querySelectorAll('.il-formatted .il-accordion details').forEach(function (item) {
    item.addEventListener('toggle', function (event) {
      if (event.target.open) {
        var accordionParent = event.target.parentNode;
        if (accordionParent != null && !accordionParent.classList.contains('il-accordion')) {
          accordionParent = accordionParent.parentNode;
        }
        accordionParent.querySelectorAll('details').forEach(function (detail) {
          if (detail !== event.target) {
            detail.removeAttribute('open');
          }
        });
      }
    });
  });
});
var mediaQueryList = window.matchMedia('print');
mediaQueryList.addEventListener('change', function (event) {
  document.querySelectorAll('.il-accordion').forEach(function (item) {
    item.classList.add('il-accordion-print');
    item.classList.remove('il-accordion');
  });
  document.querySelectorAll('details').forEach(function (item) {
    item.setAttribute('open', true);
  });
});

/***/ }),

/***/ "./src/js/components/back-to-top/back-to-top.component.js":
/*!****************************************************************!*\
  !*** ./src/js/components/back-to-top/back-to-top.component.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _back_to_top_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./back-to-top.css */ "./src/js/components/back-to-top/back-to-top.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var BackToTop = /*#__PURE__*/function (_LitElement) {
  function BackToTop() {
    var _this;
    _classCallCheck(this, BackToTop);
    _this = _callSuper(this, BackToTop);
    _this.alt = 'Back to top';
    _this.target = null;
    _this.expectedPositionAfterScroll = null;
    _this.continueScroll = _this.continueScroll.bind(_this);
    _this.handleScroll = _this.handleScroll.bind(_this);
    return _this;
  }
  _inherits(BackToTop, _LitElement);
  return _createClass(BackToTop, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet(BackToTop, "connectedCallback", this, 3)([]);
      window.addEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "continueScroll",
    value: function continueScroll() {
      if (!this.isTopOfPage() && this.isInExpectedPosition()) {
        this.scrollToTop();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _superPropGet(BackToTop, "disconnectedCallback", this, 3)([]);
      window.removeEventListener('scroll', this.handleScroll);
    }
  }, {
    key: "getButton",
    value: function getButton() {
      return this.shadowRoot.querySelector('button');
    }
  }, {
    key: "getFoldPosition",
    value: function getFoldPosition() {
      return window.innerHeight * .8;
    }
  }, {
    key: "getNextScrollPosition",
    value: function getNextScrollPosition() {
      return Math.max(this.getTopOfPage(), this.getScrollPosition() - 50);
    }
  }, {
    key: "getScrollPosition",
    value: function getScrollPosition() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
  }, {
    key: "getTopOfPage",
    value: function getTopOfPage() {
      if (this.target && document.getElementById(this.target)) {
        return document.getElementById(this.target).getBoundingClientRect().top + document.documentElement.scrollTop;
      }
      return 0;
    }
  }, {
    key: "handleClick",
    value: function handleClick(evt) {
      evt.preventDefault();
      this.getButton().blur();
      if (this.isBelowFold()) this.jumpToFold();
      this.startScrollToTop();
    }
  }, {
    key: "handleScroll",
    value: function handleScroll(evt) {
      this.updateButton();
    }
  }, {
    key: "isBelowFold",
    value: function isBelowFold() {
      return this.getScrollPosition() > this.getFoldPosition();
    }
  }, {
    key: "isInExpectedPosition",
    value: function isInExpectedPosition() {
      return this.getScrollPosition() === this.expectedPositionAfterScroll;
    }
  }, {
    key: "isNearTopOfPage",
    value: function isNearTopOfPage() {
      return this.getScrollPosition() < this.getTopOfPage() + 100;
    }
  }, {
    key: "isTopOfPage",
    value: function isTopOfPage() {
      return this.getScrollPosition() <= this.getTopOfPage();
    }
  }, {
    key: "jumpToFold",
    value: function jumpToFold() {
      window.scrollTo(0, this.getFoldPosition());
    }
  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      this.expectedPositionAfterScroll = this.getNextScrollPosition();
      window.scrollTo(0, this.expectedPositionAfterScroll);
      setTimeout(this.continueScroll, 10);
    }
  }, {
    key: "startScrollToTop",
    value: function startScrollToTop() {
      this.scrollToTop();
    }
  }, {
    key: "updateButton",
    value: function updateButton() {
      this.getButton().classList[this.isNearTopOfPage() ? 'add' : 'remove']('top-of-page');
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"48\" height=\"48\" viewBox=\"0 0 48 48\" role=\"presentation\">\n      <path d=\"M8 24l2.83 2.83L22 15.66V40h4V15.66l11.17 11.17L40 24 24 8 8 24z\"/>\n    </svg>"])));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<button @click=\"", "\" class=\"", "\"\n    aria-label=", ">", "</button>"])), this.handleClick, this.isTopOfPage() ? 'top-of-page' : '', this.alt, this.renderIcon());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        alt: {
          type: String,
          attribute: true
        },
        target: {
          type: String,
          attribute: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _back_to_top_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-back-to-top', BackToTop);

/***/ }),

/***/ "./src/js/components/back-to-top/back-to-top.css.js":
/*!**********************************************************!*\
  !*** ./src/js/components/back-to-top/back-to-top.css.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n:host {\n  bottom: var(--il-back-to-top-position-y);\n  position: fixed;\n  right: var(--il-back-to-top-position-x);\n  z-index: 2;\n}\nbutton {\n  box-sizing: border-box;\n  padding: 4px;\n  display: block;\n  background-color: var(--il-back-to-top-background-color);\n  border: 2px solid var(--il-back-to-top-foreground-color);\n  border-radius: 50%;\n  width: 48px;\n  height: 48px;\n  transition: transform .4s;\n  cursor: pointer;\n}\nbutton:hover, button:focus {\n  background-color: var(--il-back-to-top-foreground-color);\n  border-color: var(--il-back-to-top-background-color);\n}\nbutton.top-of-page {\n  transform: translateY(88px);\n}\nsvg {\n  height: 36px;\n  width: 36px;\n}\npath {\n  fill: var(--il-back-to-top-foreground-color);\n}\nbutton:hover path, button:focus path {\n  fill: var(--il-back-to-top-background-color);\n}\n\n"]))));

/***/ }),

/***/ "./src/js/components/breadcrumbs/breadcrumbs.component.js":
/*!****************************************************************!*\
  !*** ./src/js/components/breadcrumbs/breadcrumbs.component.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _breadcrumbs_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breadcrumbs.css */ "./src/js/components/breadcrumbs/breadcrumbs.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Breadcrumbs = /*#__PURE__*/function (_LitElement) {
  function Breadcrumbs() {
    var _this;
    _classCallCheck(this, Breadcrumbs);
    _this = _callSuper(this, Breadcrumbs);
    _this.label = "Breadcrumbs";
    return _this;
  }
  _inherits(Breadcrumbs, _LitElement);
  return _createClass(Breadcrumbs, [{
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<nav aria-label=", " class=\"breadcrumb\">\n      <ol>\n        <slot></slot>\n      </ol>\n    </nav>"])), this.label);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        label: {
          type: String,
          attribute: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _breadcrumbs_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-breadcrumbs', Breadcrumbs);

/***/ }),

/***/ "./src/js/components/breadcrumbs/breadcrumbs.css.js":
/*!**********************************************************!*\
  !*** ./src/js/components/breadcrumbs/breadcrumbs.css.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    counter-reset: breadcrumb 0;\n    color: #252525;\n  }\n  ol {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    font: 400 14px/32px var(--il-font-sans);\n  }\n"]))));

/***/ }),

/***/ "./src/js/components/breadcrumbs/page.component.js":
/*!*********************************************************!*\
  !*** ./src/js/components/breadcrumbs/page.component.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page.css */ "./src/js/components/breadcrumbs/page.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var BreadcrumbsPage = /*#__PURE__*/function (_LitElement) {
  function BreadcrumbsPage() {
    var _this;
    _classCallCheck(this, BreadcrumbsPage);
    _this = _callSuper(this, BreadcrumbsPage);
    _this.href = "";
    return _this;
  }
  _inherits(BreadcrumbsPage, _LitElement);
  return _createClass(BreadcrumbsPage, [{
    key: "hasLink",
    value: function hasLink() {
      return !!this.href;
    }
  }, {
    key: "isCurrentPage",
    value: function isCurrentPage() {
      return this.current !== undefined;
    }
  }, {
    key: "renderChevron",
    value: function renderChevron() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\">\n      <path d=\"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z\"/>\n    </svg>"])));
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<slot></slot>"])));
    }
  }, {
    key: "renderLink",
    value: function renderLink() {
      if (this.isCurrentPage()) {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<a href=", " aria-current=\"page\">", "</a>"])), this.href, this.renderLabel());
      } else {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<a href=", ">", "</a>"])), this.href, this.renderLabel());
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<li class=", ">\n      ", "\n      <span class=\"separator\" aria-hidden=\"true\">", "</span>\n    </li>"])), this.isCurrentPage() ? 'current' : '', this.hasLink() ? this.renderLink() : this.renderLabel(), this.renderChevron());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        current: {
          type: Boolean,
          attribute: true
        },
        href: {
          type: String,
          attribute: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _page_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-breadcrumbs-page', BreadcrumbsPage);

/***/ }),

/***/ "./src/js/components/breadcrumbs/page.css.js":
/*!***************************************************!*\
  !*** ./src/js/components/breadcrumbs/page.css.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    counter-increment: breadcrumb;\n  }\n  :host(*:last-of-type) .separator {\n    display: none;\n  }\n  li {\n    display: inline;\n    color: #252525;\n    vertical-align: baseline;\n  }\n  .separator {\n    position: relative;\n    display: inline-block;\n    height: 8px;\n    width: 8px;\n    padding: 0 4px;\n  }\n  .separator svg {\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n    fill: var(--il-blue);\n  }\n  a {\n    color: var(--il-link-color);\n  }\n  a:visited {\n    color: var(--il-visited-link-color);\n  }\n  a:focus, a:hover {\n    color: var(--il-link-hover-color);\n  }\n"]))));

/***/ }),

/***/ "./src/js/components/call-to-action/call-to-action.component.js":
/*!**********************************************************************!*\
  !*** ./src/js/components/call-to-action/call-to-action.component.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _call_to_action_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./call-to-action.css */ "./src/js/components/call-to-action/call-to-action.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var CallToAction = /*#__PURE__*/function (_LitElement) {
  function CallToAction() {
    _classCallCheck(this, CallToAction);
    return _callSuper(this, CallToAction);
  }
  _inherits(CallToAction, _LitElement);
  return _createClass(CallToAction, [{
    key: "clearIcon",
    value: function clearIcon(e) {
      this.shadowRoot.querySelector('.il-calltoaction-icon').classList.remove('il-calltoaction-centered-no-icon');
      this.shadowRoot.querySelector('.il-calltoaction-body').classList.remove('il-calltoaction-centered-no-icon');
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this = this;
      this.shadowRoot.querySelector('slot[name="icon"]').addEventListener('slotchange', function (e) {
        return _this.clearIcon(e);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var alignmentClass = getComputedStyle(this).getPropertyValue('text-align').trim();
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <div class=\"il-calltoaction ", "\">\n            <div class=\"il-calltoaction-padding\"></div>\n            <div class=\"il-calltoaction-icon ", " il-calltoaction-centered-no-icon\"><slot name=\"icon\"></slot></div>\n            <div class=\"il-calltoaction-body ", " il-calltoaction-centered-no-icon\"><slot></slot></div>\n            <div class=\"il-calltoaction-padding\"></div>\n        </div>\n        "])), alignmentClass, alignmentClass, alignmentClass);
    }
  }], [{
    key: "styles",
    get: function get() {
      return _call_to_action_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-call-to-action', CallToAction);

/***/ }),

/***/ "./src/js/components/call-to-action/call-to-action.css.js":
/*!****************************************************************!*\
  !*** ./src/js/components/call-to-action/call-to-action.css.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n.il-calltoaction {\n  display: flex;\n  align-items: start;\n  padding: 3.75rem 0 4.688rem 0;\n  margin: var(--il-call-to-action-margin);\n  color: var(--il-text-color);\n  background: var(--il-background-color);\n  width: var(--il-call-to-action-width);\n}\n.il-calltoaction .il-calltoaction-body {\n  padding-left: 50px;\n  flex-basis: 845px;\n  flex-grow: 0;\n  flex-shrink: 1;\n}\n.il-calltoaction .il-calltoaction-icon {\n  min-width: 96px;\n  margin-top: 1.875rem;\n}\n.il-calltoaction .il-calltoaction-icon.center.il-calltoaction-centered-no-icon {\n  display: none;\n}\n.il-calltoaction .il-calltoaction-body.center.il-calltoaction-centered-no-icon {\n  padding-left: 0;\n}\n.il-calltoaction .il-calltoaction-padding {\n  flex: 1 1 auto;\n}\n.il-calltoaction .il-calltoaction-body.center {\n  text-align: center;\n}\n@media only screen and (max-width: 792px) {\n  .il-calltoaction {\n    display: block;\n    padding: 1.875rem;\n  }\n  .il-calltoaction .il-calltoaction-body, .il-calltoaction .il-calltoaction-icon {\n    padding-left: 0;\n  }\n}\n\n"]))));

/***/ }),

/***/ "./src/js/components/card/card.component.js":
/*!**************************************************!*\
  !*** ./src/js/components/card/card.component.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.css */ "./src/js/components/card/card.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Card = /*#__PURE__*/function (_LitElement) {
  function Card() {
    var _this;
    _classCallCheck(this, Card);
    _this = _callSuper(this, Card);
    _this.link = false;
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }
  _inherits(Card, _LitElement);
  return _createClass(Card, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet(Card, "connectedCallback", this, 3)([]);
      this.addEventListener('click', this.handleClick);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _superPropGet(Card, "disconnectedCallback", this, 3)([]);
      this.removeEventListener('click', this.handleClick);
    }
  }, {
    key: "elementIsLink",
    value: function elementIsLink(elem) {
      var link = this.getLinkElement();
      return elem === link || link.contains(elem);
    }
  }, {
    key: "getLinkElement",
    value: function getLinkElement() {
      return this.querySelector('a');
    }
  }, {
    key: "hasLinkElement",
    value: function hasLinkElement() {
      return !!this.getLinkElement();
    }
  }, {
    key: "isLink",
    value: function isLink() {
      return this.link;
    }
  }, {
    key: "handleClick",
    value: function handleClick(evt) {
      if (this.isLink() && this.hasLinkElement()) {
        if (!this.elementIsLink(evt.target)) this.getLinkElement().click();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div class=\"card\">\n          <slot></slot>\n      </div>\n      "])));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        link: {
          type: Boolean,
          "default": false,
          attribute: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _card_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-card', Card);

/***/ }),

/***/ "./src/js/components/card/card.css.js":
/*!********************************************!*\
  !*** ./src/js/components/card/card.css.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: block;\n  }\n"]))));

/***/ }),

/***/ "./src/js/components/clickable-card/clickable-card.component.js":
/*!**********************************************************************!*\
  !*** ./src/js/components/clickable-card/clickable-card.component.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _clickable_card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickable-card.css */ "./src/js/components/clickable-card/clickable-card.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var ClickableCard = /*#__PURE__*/function (_LitElement) {
  function ClickableCard() {
    var _this;
    _classCallCheck(this, ClickableCard);
    _this = _callSuper(this, ClickableCard);
    _this.src = '';
    _this.href = undefined;
    _this.background = undefined;
    _this.alt = '';
    _this.width = '';
    _this.highlight = false;
    return _this;
  }
  _inherits(ClickableCard, _LitElement);
  return _createClass(ClickableCard, [{
    key: "renderHiddenParagraph",
    value: function renderHiddenParagraph() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<p class=\"header il-invisible\">", "</p>"])), this.alt == '' ? 'Clickable Card' : this.alt);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this2 = this;
      if (this.shadowRoot.querySelector('slot[name="header"]') !== null) {
        this.shadowRoot.querySelector('slot[name="header"]').addEventListener('slotchange', function (e) {
          return _this2.removeHiddenInformation(e);
        });
      }
      if (this.shadowRoot.querySelector('slot[name="image"]') !== null) {
        this.shadowRoot.querySelector('slot[name="image"]').addEventListener('slotchange', function (e) {
          return _this2.removeNoPicture(e);
        });
      }
    }
  }, {
    key: "removeHiddenInformation",
    value: function removeHiddenInformation(e) {
      e.target.querySelector('p').remove();
    }
  }, {
    key: "removeNoPicture",
    value: function removeNoPicture(e) {
      this.shadowRoot.querySelector('div.nopicture').classList.remove('nopicture');
    }
  }, {
    key: "render",
    value: function render() {
      var contentClass = this.background == 'blue' ? 'blue' : '';
      var widthStyle = this.width == '' ? '' : "width: ".concat(this.width, ";");
      var idInfo = 'card-' + ((1 + Math.random()) * 0x10000000 | 0);
      if (this.src == '') {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <article aria-labelledby=\"", "\" class=\"", "\" style=\"", "\" @click=\"", "\" @mouseover=\"", "\" @mouseout=\"", "\">\n          <slot name=\"image\"></slot>\n          <div class=\"text nopicture\"><a id=\"", "\" @focus=\"", "\" @blur=\"", "\" href=\"", "\"><slot name=\"header\">", "</slot></a><slot></slot></div>\n      </article>\n      "])), idInfo, contentClass, widthStyle, this._click, this._higlight, this._tonedown, idInfo, this._higlight, this._tonedown, this.href, this.renderHiddenParagraph());
      }
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        <article aria-labelledby=\"", "\" class=\"", "\" style=\"", "\" @click=\"", "\" @mouseover=\"", "\" @mouseout=\"", "\">\n            <img src=\"", "\" alt=\"", "\">\n            <div class=\"text\"><a id=\"", "\" @focus=\"", "\" @blur=\"", "\" href=\"", "\"><slot name=\"header\">", "</slot></a><slot></slot></div>\n        </article>\n        "])), idInfo, contentClass, widthStyle, this._click, this._higlight, this._tonedown, this.src, this.alt, idInfo, this._higlight, this._tonedown, this.href, this.renderHiddenParagraph());
    }
  }, {
    key: "_click",
    value: function _click(e) {
      if (this.href !== undefined) {
        window.location = this.href;
      }
    }
  }, {
    key: "_higlight",
    value: function _higlight(e) {
      this.highlight = true;
      this.shadowRoot.querySelector('article').classList.add('highlight');
    }
  }, {
    key: "_tonedown",
    value: function _tonedown(e) {
      this.highlight = false;
      this.shadowRoot.querySelector('article').classList.remove('highlight');
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        width: {
          type: String,
          attribute: true
        },
        src: {
          type: String,
          attribute: true
        },
        alt: {
          type: String,
          attribute: true
        },
        href: {
          type: String,
          attribute: true
        },
        background: {
          type: String,
          attribute: true
        },
        highlight: {
          type: Boolean,
          attribute: true,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _clickable_card_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-clickable-card', ClickableCard);

/***/ }),

/***/ "./src/js/components/clickable-card/clickable-card.css.js":
/*!****************************************************************!*\
  !*** ./src/js/components/clickable-card/clickable-card.css.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    article {\n        display: block;\n        border: 1px solid var(--il-gray-2);\n        border-bottom: 3px solid var(--il-orange);\n        margin: var(--il-clickable-card-margin);\n        text-decoration: none;\n        color: var(--il-text-color);\n        background: var(--il-background-color);\n        width: 100%;\n    }\n    article.blue {\n      --il-text-color: white;\n      --il-background-color: var(--il-blue);\n      --il-clickable-card-color-hover: var(--il-blue);\n      --il-clickable-card-background-hover: white;\n    }\n    article.highlight {\n      color: var(--il-clickable-card-color-hover);\n      background: var(--il-clickable-card-background-hover);\n      border-bottom: 3px solid var(--il-industrial-blue-1);\n      cursor: pointer;\n    }\n    img {\n        width: 100%;\n    }\n    article.highlight img {\n      filter: var(--il-clickable-card-image-filter);\n      transform: var(--il-clickable-card-image-transform);\n    }\n    div.text {\n      padding: 1.75rem 1.875rem 2.8rem 1.875rem;\n    }\n    div.text.nopicture {\n      padding: 2.8rem 1.875rem;\n    }\n    article a {\n      text-decoration: none;\n    }\n    article a:focus {\n      outline-style: none;\n      box-shadow: none;\n      border-color: transparent;\n    }\n    .il-invisible {\n      position: absolute !important;\n      left: -9999px !important;\n      top: auto !important;\n      display: block !important;\n      text-align: left !important;\n      text-indent: -9999em !important;\n      width: 1px !important;\n      height: 1px !important;\n      overflow: hidden !important;\n    }\n"]))));

/***/ }),

/***/ "./src/js/components/directory/card.component.js":
/*!*******************************************************!*\
  !*** ./src/js/components/directory/card.component.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.css */ "./src/js/components/directory/card.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var ProfileCard = /*#__PURE__*/function (_LitElement) {
  function ProfileCard() {
    _classCallCheck(this, ProfileCard);
    return _callSuper(this, ProfileCard, arguments);
  }
  _inherits(ProfileCard, _LitElement);
  return _createClass(ProfileCard, [{
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <article class=\"profile\">\n          <slot></slot>\n      </article>\n      "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return _card_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-profile-card', ProfileCard);

/***/ }),

/***/ "./src/js/components/directory/card.css.js":
/*!*************************************************!*\
  !*** ./src/js/components/directory/card.css.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: block;\n  }\n  article {\n  }\n"]))));

/***/ }),

/***/ "./src/js/components/directory/profile.component.js":
/*!**********************************************************!*\
  !*** ./src/js/components/directory/profile.component.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _profile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.css */ "./src/js/components/directory/profile.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Profile = /*#__PURE__*/function (_LitElement) {
  function Profile() {
    _classCallCheck(this, Profile);
    return _callSuper(this, Profile, arguments);
  }
  _inherits(Profile, _LitElement);
  return _createClass(Profile, [{
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <article class=\"profile\">\n          <div class=\"primary\">\n              <slot name=\"primary\"></slot>\n          </div>\n          <div class=\"contact\">\n              <slot name=\"contact\"></slot>\n          </div>\n          <div class=\"additional\">\n              <slot></slot>\n          </div>\n      </article>\n      "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return _profile_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-profile', Profile);

/***/ }),

/***/ "./src/js/components/directory/profile.css.js":
/*!****************************************************!*\
  !*** ./src/js/components/directory/profile.css.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: block;\n  }\n  article {\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n  }\n  .primary {\n    grid-area: primary;\n  }\n  .contact {\n    grid-area: contact;\n  }\n  .additional {\n    grid-area: additional;\n  }\n  @media (min-width: 600px) {\n    article {\n      --il-profile-page-name-font-size: 50px;\n      display: grid;\n      grid-template-columns: auto 300px;\n      grid-gap: 40px;\n      grid-template-areas: \"primary primary\" \"additional contact\";\n    }\n  }\n  @media (min-width: 960px) {\n    article {\n      max-width: 1140px;\n      grid-template-columns: auto 400px;\n      grid-gap: 40px;\n      grid-template-areas: \"primary contact\" \"additional contact\";\n    }\n  }\n"]))));

/***/ }),

/***/ "./src/js/components/gallery-detail/gallery-detail.component.js":
/*!**********************************************************************!*\
  !*** ./src/js/components/gallery-detail/gallery-detail.component.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _gallery_detail_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-detail.css */ "./src/js/components/gallery-detail/gallery-detail.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var GalleryDetailComponent = /*#__PURE__*/function (_LitElement) {
  function GalleryDetailComponent() {
    var _this;
    _classCallCheck(this, GalleryDetailComponent);
    _this = _callSuper(this, GalleryDetailComponent);
    _this.home = '';
    _this.previous = '';
    _this.next = '';
    return _this;
  }
  _inherits(GalleryDetailComponent, _LitElement);
  return _createClass(GalleryDetailComponent, [{
    key: "renderHome",
    value: function renderHome() {
      return this.home == '' ? Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral([""]))) : Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<a href=\"", "\" class=\"gallery-detail-back\">", " Back to Gallery</a>"])), this.home, this.renderChevron());
    }
  }, {
    key: "renderNavigation",
    value: function renderNavigation() {
      return this.previous == '' && this.next == '' ? Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([""]))) : this.next == '' ? Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<nav class=\"gallery-detail-navigation\" aria-label=\"Gallery Navigation\">\n            <a href=\"", "\" class=\"gallery-detail-previous\" aria-label=\"Previous Item\">", "</a></nav>"])), this.previous, this.renderChevron()) : this.previous == '' ? Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<nav class=\"gallery-detail-navigation\" aria-label=\"Gallery Navigation\">\n            <a href=\"", "\" class=\"gallery-detail-next\" aria-label=\"Next Item\">", "</a></nav>"])), this.next, this.renderChevron()) : Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<nav class=\"gallery-detail-navigation\" aria-label=\"Gallery Navigation\">\n            <a href=\"", "\" class=\"gallery-detail-previous\" aria-label=\"Previous Item\">", "</a>\n            <a href=\"", "\" class=\"gallery-detail-next\" aria-label=\"Next Item\">", "</a></nav>"])), this.previous, this.renderChevron(), this.next, this.renderChevron());
    }
  }, {
    key: "renderChevron",
    value: function renderChevron() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\n        <path\n          d=\"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z\" />\n        </svg>"])));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["<div class=\"gallery-detail\">\n        ", "\n        <div class=\"gallery-detail-text\"><slot name=\"caption\"></slot></div>\n        <div class=\"gallery-detail-image\"><slot></slot></div>\n        ", "\n        </div>"])), this.renderHome(), this.renderNavigation());
    }
  }], [{
    key: "styles",
    get: function get() {
      return _gallery_detail_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        href: {
          type: String,
          attribute: true
        },
        home: {
          type: String,
          attribute: true
        },
        previous: {
          type: String,
          attribute: true
        },
        next: {
          type: String,
          attribute: true
        }
      };
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-gallery-detail', GalleryDetailComponent);

/***/ }),

/***/ "./src/js/components/gallery-detail/gallery-detail.css.js":
/*!****************************************************************!*\
  !*** ./src/js/components/gallery-detail/gallery-detail.css.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    div.gallery-detail {\n        display: grid;\n        grid-template-columns: 160px auto 160px;\n        grid-template-rows: auto 1fr 150px;\n    }\n    div.gallery-detail .gallery-detail-image {\n        grid-column: 1 / span 3;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    div.gallery-detail .gallery-detail-navigation {\n        grid-column: 1 / span 3;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: var(--il-blue);\n        color: white;\n        margin-top: 20px;\n        border-top: solid 4px var(--il-orange);\n        fill: white;\n    }\n    div.gallery-detail .gallery-detail-text {\n        display: flex;\n        justify-content: center;\n        align-items: end;\n        padding-bottom: 5px;\n        grid-column: 2;\n    }\n    div.gallery-detail .gallery-detail-back {\n        align-items: center;\n    }\n    div.gallery-detail .gallery-detail-back svg {\n        width: 15px;\n        height: 15px;\n        transform: rotate(90deg);\n        padding-top: 6px;\n        padding-left: 10px;\n    }\n    div.gallery-detail .gallery-detail-navigation a {\n        height: 50px;\n        width: 50px;\n        padding: 0 20px;\n    }\n    div.gallery-detail .gallery-detail-navigation a:first-child {\n        transform: rotate(90deg);\n    }\n    div.gallery-detail .gallery-detail-navigation a:last-child {\n        transform: rotate(-90deg);\n    }\n    div.gallery-detail .gallery-detail-navigation a:focus, div.gallery-detail .gallery-detail-navigation a:hover {\n        fill: var(--il-orange);\n    }\n"]))));

/***/ }),

/***/ "./src/js/components/gallery-item/gallery-item.component.js":
/*!******************************************************************!*\
  !*** ./src/js/components/gallery-item/gallery-item.component.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _gallery_item_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery-item.css */ "./src/js/components/gallery-item/gallery-item.css.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../debug */ "./src/js/debug.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_debug__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var GalleryItemComponent = /*#__PURE__*/function (_LitElement) {
  function GalleryItemComponent() {
    var _this;
    _classCallCheck(this, GalleryItemComponent);
    _this = _callSuper(this, GalleryItemComponent);
    _this.href = '';
    return _this;
  }
  _inherits(GalleryItemComponent, _LitElement);
  return _createClass(GalleryItemComponent, [{
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <li class=\"gallery-item\">\n        <a href=\"", "\">\n            <div class=\"gallery-image-frame\">\n            <slot></slot>\n            </div>\n            <div class=\"gallery-image-title\">\n            <slot name=\"title\"></slot>\n            </div>\n            <div class=\"gallery-image-description\">\n            <slot name=\"caption\"></slot>\n            </div>\n        </li>"])), this.href);
    }
  }], [{
    key: "styles",
    get: function get() {
      return _gallery_item_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        href: {
          type: String,
          attribute: true
        }
      };
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-gallery-item', GalleryItemComponent);

/***/ }),

/***/ "./src/js/components/gallery-item/gallery-item.css.js":
/*!************************************************************!*\
  !*** ./src/js/components/gallery-item/gallery-item.css.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    li.gallery-item .gallery-image-frame {\n        height: var(--il-gallery-height);\n        display: flex;\n        align-items: center;\n        align-content: center;\n        justify-content: center;\n        background: var(--il-gallery-background);\n    }\n    li.gallery-item .gallery-image-title {\n        padding-top: .5rem;\n        padding-left: .5rem;\n    }\n    li.gallery-item .gallery-image-description {\n        padding-left: .5rem;\n        padding-bottom: .5rem;\n    }\n    li.gallery-item a {\n        color: var(--il-text-color);\n        text-decoration: none;\n    }\n    li.gallery-item a:hover, li.gallery-item a:focus {\n        color: var(--il-gallery-text-focus);\n        outline: none;\n    }\n    li.gallery-item a:hover .gallery-image-title, li.gallery-item a:focus .gallery-image-title, \n    li.gallery-item a:hover .gallery-image-description, li.gallery-item a:focus .gallery-image-description {\n        background: var(--il-gallery-background-focus);\n    }\n    li.gallery-item a:hover .gallery-image-frame, li.gallery-item a:focus .gallery-image-frame {\n        background: var(--il-gallery-background-focus);\n    }\n"]))));

/***/ }),

/***/ "./src/js/components/gallery/gallery.component.js":
/*!********************************************************!*\
  !*** ./src/js/components/gallery/gallery.component.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _gallery_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.css */ "./src/js/components/gallery/gallery.css.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../debug */ "./src/js/debug.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_debug__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var GalleryComponent = /*#__PURE__*/function (_LitElement) {
  function GalleryComponent() {
    _classCallCheck(this, GalleryComponent);
    return _callSuper(this, GalleryComponent, arguments);
  }
  _inherits(GalleryComponent, _LitElement);
  return _createClass(GalleryComponent, [{
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <ul class=\"gallery\">\n            <slot></slot>\n        </ul>"])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return _gallery_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-gallery', GalleryComponent);

/***/ }),

/***/ "./src/js/components/gallery/gallery.css.js":
/*!**************************************************!*\
  !*** ./src/js/components/gallery/gallery.css.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nul.gallery {\n    display: grid;\n    grid-template-columns: repeat(auto-fill,var(--il-gallery-width));\n    grid-column-gap: 60px;\n    grid-row-gap: 40px;\n    justify-content: center;\n    list-style: none;\n    padding: 0px;\n    margin: 0;\n}\n"]))));

/***/ }),

/***/ "./src/js/components/hero/alignment.js":
/*!*********************************************!*\
  !*** ./src/js/components/hero/alignment.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
module.exports = /*#__PURE__*/_createClass(function Alignment(str) {
  "use strict";

  _classCallCheck(this, Alignment);
  this.x = 'center';
  this.y = 'center';
  var words = str ? str.toLowerCase().split(/\s+/) : [];
  if (words.includes('left')) {
    this.x = 'left';
  }
  if (words.includes('right')) {
    this.x = 'right';
  }
  if (words.includes('top')) {
    this.y = 'top';
  }
  if (words.includes('bottom')) {
    this.y = 'bottom';
  }
});

/***/ }),

/***/ "./src/js/components/hero/hero.component.js":
/*!**************************************************!*\
  !*** ./src/js/components/hero/hero.component.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _alignment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alignment */ "./src/js/components/hero/alignment.js");
/* harmony import */ var _alignment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alignment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../debug */ "./src/js/debug.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_debug__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hero_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero.css */ "./src/js/components/hero/hero.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var Hero = /*#__PURE__*/function (_LitElement) {
  function Hero() {
    var _this;
    _classCallCheck(this, Hero);
    _this = _callSuper(this, Hero);
    _this.align = '';
    _this.alt = '';
    _this.background = undefined;
    _this.color = "blue";
    return _this;
  }
  _inherits(Hero, _LitElement);
  return _createClass(Hero, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet(Hero, "connectedCallback", this, 3)([]);
      if (this.hasAttribute('align')) {
        _debug__WEBPACK_IMPORTED_MODULE_2___default.a.warn("il-hero: the \"align\" attribute is deprecated. Use alignment classes instead.");
      }
      if (this.hasAttribute('alt')) {
        _debug__WEBPACK_IMPORTED_MODULE_2___default.a.warn("il-hero: the \"alt\" attribute is deprecated. Use a slotted image element with alt text instead.");
      }
      if (this.hasAttribute('background')) {
        _debug__WEBPACK_IMPORTED_MODULE_2___default.a.warn("il-hero: the \"background\" attribute is deprecated. Use a slotted image element instead.");
      }
      if (this.hasAttribute('color')) {
        _debug__WEBPACK_IMPORTED_MODULE_2___default.a.warn("il-hero: the \"color\" attribute is deprecated. Use theme classes instead.");
      }
    }
  }, {
    key: "renderBackgroundImage",
    value: function renderBackgroundImage() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <img src=\"", "\" alt=\"", "\">\n    "])), this.background, this.alt);
    }
  }, {
    key: "render",
    value: function render() {
      var alignment = new _alignment__WEBPACK_IMPORTED_MODULE_1___default.a(this.align);
      var color = this.color;
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n        <div class=\"hero\" data-color=", " data-align-x=", " data-align-y=", ">\n          <div class=\"background\">\n            <slot name=\"background\">\n              ", "\n            </slot>\n          </div>\n          \n          <div class=\"content-container--level-1 content-outer content-container--for-il-content-margin\">\n            <div class=\"content-container--level-2 content-container--for-il-content-max-width\">\n              <div class=\"content-container--level-3 content content-container--for-hero-content-max-width\">\n                <slot></slot>\n              </div>\n            </div>\n          </div>\n        </div>\n        "])), color, alignment.x, alignment.y, this.background ? this.renderBackgroundImage() : '');
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        align: {
          type: String,
          attribute: true
        },
        alt: {
          type: String,
          attribute: true
        },
        background: {
          type: String,
          attribute: true
        },
        color: {
          type: String,
          attribute: true,
          "default": "blue"
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _hero_css__WEBPACK_IMPORTED_MODULE_3__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-hero', Hero);

/***/ }),

/***/ "./src/js/components/hero/hero.css.js":
/*!********************************************!*\
  !*** ./src/js/components/hero/hero.css.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n.hero {\n  position: relative;\n  background-color: var(--il-hero-background-color);\n  color: white;\n}\n\n/* DEPRECATED: alignment attribute */\n.hero[data-align-x=\"left\"] {\n  --il-hero-margin-left: 0;\n  --il-hero-margin-right: auto;\n  --il-hero-align-items: flex-start;\n  --il-hero-text-align: left;\n}\n.hero[data-align-x=\"right\"] {\n  --il-hero-margin-left: auto;\n  --il-hero-margin-right: 0;\n  --il-hero-align-items: flex-end;\n  --il-hero-text-align: right;\n}\n.hero[data-align-y=\"top\"] {\n  --il-hero-justify-content: flex-start;\n}\n.hero[data-align-y=\"bottom\"] {\n  --il-hero-justify-content: flex-end;\n}\n\n/* DEPRECATED: color attribute */\n\n.hero[data-color=\"orange\"] {\n  --il-hero-background-color: var(--il-orange);\n}\n\n.background {\n  position: relative;\n  width: 100%;\n}\n.content-container--level-1 {\n  padding-left: var(--il-content-margin);\n  padding-right: var(--il-content-margin);\n  position: relative;\n  z-index: 100;\n}\n.content-container--level-2 {\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  max-width: var(--il-content-max-width);\n  margin: 0 auto;\n}\n.content-container--level-3 {\n  padding: 18px 0 36px;\n}\n\n\nimg {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 223px;\n  overflow: hidden;\n  object-fit: cover;\n  object-position: center;\n}\n\n@media (min-width: 576px) {\n  .background img {\n    height: 315px;\n  }\n  .content {\n    padding: 36px 0 72px;\n  }\n}\n@media (min-width: 767px) {\n  .background {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n  }\n  .background img {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 101;\n  }\n  .content-container--level-3 {\n    display: flex;\n    flex-direction: column;\n    justify-content: var(--il-hero-justify-content);\n    align-items: var(--il-hero-align-items);\n    text-align: var(--il-hero-text-align);\n    width: 66%;\n    min-height: 417px;\n    margin-left: var(--il-hero-margin-left);\n    margin-right: var(--il-hero-margin-right);\n    padding: 60px 0 80px;\n  }\n}\n\n"]))));

/***/ }),

/***/ "./src/js/components/image-feature/image-feature.component.js":
/*!********************************************************************!*\
  !*** ./src/js/components/image-feature/image-feature.component.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _image_feature_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-feature.css */ "./src/js/components/image-feature/image-feature.css.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../debug */ "./src/js/debug.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_debug__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var ImageFeatureComponent = /*#__PURE__*/function (_LitElement) {
  function ImageFeatureComponent() {
    var _this;
    _classCallCheck(this, ImageFeatureComponent);
    _this = _callSuper(this, ImageFeatureComponent);
    _this.size = '';
    _this.src = undefined;
    _this.alt = '';
    _this.background = '';
    _this.align = '';
    return _this;
  }
  _inherits(ImageFeatureComponent, _LitElement);
  return _createClass(ImageFeatureComponent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet(ImageFeatureComponent, "connectedCallback", this, 3)([]);
      if (this.hasAttribute('align')) {
        _debug__WEBPACK_IMPORTED_MODULE_2___default.a.warn("il-image-feature: the \"align\" attribute is deprecated. Use alignment classes instead.");
      }
      if (this.hasAttribute('alt')) {
        _debug__WEBPACK_IMPORTED_MODULE_2___default.a.warn("il-image-feature: the \"alt\" attribute is deprecated. Use the image slot instead.");
      }
      if (this.hasAttribute('background')) {
        _debug__WEBPACK_IMPORTED_MODULE_2___default.a.warn("il-image-feature: the \"background\" attribute is deprecated. Use a slotted image element instead.");
      }
      if (this.hasAttribute('size')) {
        _debug__WEBPACK_IMPORTED_MODULE_2___default.a.warn("il-image-feature: the \"size\" attribute is deprecated. Use size classes instead.");
      }
      if (this.hasAttribute('src')) {
        _debug__WEBPACK_IMPORTED_MODULE_2___default.a.warn("il-image-feature: the \"src\" attribute is deprecated. Use the image slot instead.");
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (this.previousElementSibling != null && this.previousElementSibling.localName == "il-image-feature" && !this.previousElementSibling.classList.contains('il-align-right') && !this.previousElementSibling.classList.contains('il-align-left') && !this.classList.contains('il-align-right') && !this.classList.contains('il-align-left')) {
        this.classList.add('il-align-right');
      }
      if (this.background !== '') {
        if (this.background == 'solid' || this.background == 'blue') {
          this.classList.add('il-theme-blue');
        } else if (this.background == 'orange') {
          this.classList.add('il-theme-orange');
        }
      }
      if (this.align !== '') {
        if (this.align == 'left') {
          this.classList.add('il-align-left');
        } else if (this.align == 'right') {
          this.classList.add('il-align-right');
        }
      }
      if (this.size !== '') {
        if (this.size == 'portrait') {
          this.classList.add('il-size-xsmall');
        } else if (this.size == 'small') {
          this.classList.add('il-size-small');
        } else if (this.size == 'large') {
          this.classList.add('il-size-large');
        }
      }
      if (this.src !== undefined) {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div class=\"imagefeature\">\n          <div class=\"background\"><img src='", "' alt='", "' style='object-fit: cover; position: absolute; width: 100%; height: 100%;'></div>\n          <div class=\"content\">\n            <div class=\"content-inner\">\n              <slot></slot>\n            </div>\n          </div>\n      </div>"])), this.src, this.alt);
      }
      if (this.classList.contains('il-overlay')) {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <div class=\"il-image-feature-with-overlay\">\n        <slot name=\"image\"></slot>\n        <div class=\"il-image-feature-with-overlay-outer\">\n          <div class=\"il-image-feature-with-overlay-inner\">\n            <div class=\"il-image-feature-with-overlay-content\">\n              <slot></slot>\n            </div>\n          </div>\n        </div>\n      </div>"])));
      }
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        <div class=\"imagefeature\">\n            <div class=\"background\"><slot name=\"image\"></slot></div>\n            <div class=\"content\">\n              <div class=\"content-inner\">\n                <slot></slot>\n              </div>\n            </div>\n        </div>"])));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        size: {
          type: String,
          attribute: true
        },
        background: {
          type: String,
          attribute: true
        },
        src: {
          type: String,
          attribute: true
        },
        alt: {
          type: String,
          attribute: true
        },
        align: {
          type: String,
          attribute: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _image_feature_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-image-feature', ImageFeatureComponent);

/***/ }),

/***/ "./src/js/components/image-feature/image-feature.css.js":
/*!**************************************************************!*\
  !*** ./src/js/components/image-feature/image-feature.css.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .imagefeature {\n        display: block;\n        margin: 0 auto;\n        max-width: var(--il-image-feature-max-width);\n    }\n    .imagefeature.right {\n        --il-image-feature-flex-direction: row-reverse;\n    }\n    .imagefeature.large {\n        --il-image-feature-flex-grow-image: 2;\n    }\n    .imagefeature.small {\n        --il-image-feature-flex-grow-content: 2;\n    }\n    .imagefeature.portrait {\n        --il-image-feature-flex-grow-content: 4;\n        --il-image-feature-min-height: 10vw;\n    }\n    .imagefeature .background {\n        padding: 0;\n        position: relative;\n        background-position: center; \n        background-repeat: no-repeat; \n        background-size: cover;\n        min-height: 310px;\n        color: transparent;\n        display: flex;\n        flex-grow: var(--il-image-feature-flex-grow-image);\n        flex-shrink: 1;\n        flex-basis: 0;\n    }\n    .imagefeature .content {\n        text-align: left;\n        color: var(--il-image-feature-color);\n        background: var(--il-image-feature-background);\n        flex-grow: var(--il-image-feature-flex-grow-content);\n        flex-shrink: 1;\n        flex-basis: 0;\n        height: 100%;\n    }\n    .imagefeature .content .content-inner {\n        padding: var(--il-image-feature-content-padding);\n    }\n    .il-image-feature-with-overlay {\n        position: relative;\n    }\n    \n    .il-image-feature-with-overlay-inner {\n        padding-top: 75px;\n        padding-bottom: 105px;\n        max-width: var(--il-content-max-width);\n        margin: auto;\n        display: flex;\n        justify-content: var(--il-image-feature-with-overlay-align);\n        color: var(--il-image-feature-color);\n    }\n    \n    .il-image-feature-with-overlay-content {\n        width: var(--il-image-feature-with-overlay-width);\n        padding: var(--il-image-feature-with-overlay-padding);\n        background: var(--il-image-feature-with-overlay-background);\n        margin: 0 70px;\n    }\n    \n    @media only screen and (max-width: 990px) {\n        .il-image-feature-with-overlay {\n            background: var(--il-image-feature-with-overlay-background-solid);\n            border: var(--il-image-feature-with-overlay-border);\n        }\n        .il-image-feature-with-overlay-outer {\n            border-top: var(--il-image-feature-with-overlay-border);\n        }\n        .il-image-feature-with-overlay-inner {\n            margin: 0;\n            padding: 0 30px;\n        }\n        .il-image-feature-with-overlay-content {\n            position: initial;\n            width: initial;\n            z-index: initial;\n            padding: 30px 0;\n            background: var(--il-image-feature-with-overlay-background-solid);\n            border: none;\n        }\n    }\n   \n    @media (min-width: 767px) {\n        .imagefeature {\n            display: flex;\n            flex-direction: var(--il-image-feature-flex-direction);\n            min-height: var(--il-image-feature-min-height);\n            background: var(--il-image-feature-background);\n        }\n        .imagefeature .background {\n            min-height: initial;\n        }\n    }\n"]))));

/***/ }),

/***/ "./src/js/components/introduction/introduction.component.js":
/*!******************************************************************!*\
  !*** ./src/js/components/introduction/introduction.component.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _introduction_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./introduction.css */ "./src/js/components/introduction/introduction.css.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../debug */ "./src/js/debug.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_debug__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var IntroductionComponent = /*#__PURE__*/function (_LitElement) {
  function IntroductionComponent() {
    _classCallCheck(this, IntroductionComponent);
    return _callSuper(this, IntroductionComponent);
  }
  _inherits(IntroductionComponent, _LitElement);
  return _createClass(IntroductionComponent, [{
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<div class=\"heading\"><slot name=\"heading\"></slot></div><div class=\"introduction\"><slot></slot></div>"])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return _introduction_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-introduction', IntroductionComponent);

/***/ }),

/***/ "./src/js/components/introduction/introduction.css.js":
/*!************************************************************!*\
  !*** ./src/js/components/introduction/introduction.css.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n.heading {\n    font-size: 2.25rem;\n    line-height: 2.625rem;\n    font-style: oblique;\n    margin-bottom: 0.9375rem;\n    max-width: var(--il-content-max-width);\n    margin: 0 auto;\n}\n\n.introduction {\n    font-size: 1.375rem;\n    line-height: 1.75rem;\n    margin-bottom: 0.9375rem;\n    max-width: var(--il-content-max-width);\n    margin: 0 auto;\n}\n"]))));

/***/ }),

/***/ "./src/js/components/layout/page.component.js":
/*!****************************************************!*\
  !*** ./src/js/components/layout/page.component.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _responsive_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsive-layout */ "./src/js/components/layout/responsive-layout.js");
/* harmony import */ var _page_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.css */ "./src/js/components/layout/page.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }



var PageComponent = /*#__PURE__*/function (_ResponsiveLayout) {
  function PageComponent() {
    _classCallCheck(this, PageComponent);
    return _callSuper(this, PageComponent);
  }
  _inherits(PageComponent, _ResponsiveLayout);
  return _createClass(PageComponent, [{
    key: "render",
    value: function render() {
      var mode = this.mode;
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n<article class=\"page page-", "\">\n  <header>\n    <slot name=\"header\"></slot>\n  </header>\n  <main>\n    <slot></slot>\n  </main>\n  <footer>\n    <slot name=\"footer\"></slot>\n  </footer>\n</article>\n    "])), mode);
    }
  }], [{
    key: "modes",
    get: function get() {
      return [{
        name: 'full',
        match: '(min-width: 992px)'
      }, {
        name: 'compact'
      }];
    }
  }, {
    key: "properties",
    get: function get() {
      return _superPropGet(PageComponent, "properties", this);
    }
  }, {
    key: "styles",
    get: function get() {
      return _page_css__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
  }]);
}(_responsive_layout__WEBPACK_IMPORTED_MODULE_1__["default"]);
customElements.define('il-page', PageComponent);

/***/ }),

/***/ "./src/js/components/layout/page.css.js":
/*!**********************************************!*\
  !*** ./src/js/components/layout/page.css.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n.page {\n  margin: 0;\n  padding: 0;\n  min-height: 100vh;\n  max-width: 100vw;\n  display: grid;\n  grid-template-areas: \"header\" \"main\" \"footer\";\n  grid-template-rows: auto 1fr auto;\n}\nheader {\n  grid-area: header;\n  z-index: 600;\n}\nmain {\n  grid-area: main;\n  overflow: auto;\n}\nfooter {\n  grid-area: footer;\n}\n\n"]))));

/***/ }),

/***/ "./src/js/components/layout/responsive-layout.js":
/*!*******************************************************!*\
  !*** ./src/js/components/layout/responsive-layout.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponsiveLayout; });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var ResponsiveLayout = /*#__PURE__*/function (_LitElement) {
  function ResponsiveLayout() {
    var _this;
    _classCallCheck(this, ResponsiveLayout);
    _this = _callSuper(this, ResponsiveLayout);
    _this._mode = undefined;
    _this.updateMode = _this.updateMode.bind(_this);
    return _this;
  }
  _inherits(ResponsiveLayout, _LitElement);
  return _createClass(ResponsiveLayout, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet(ResponsiveLayout, "connectedCallback", this, 3)([]);
      document.addEventListener('DOMContentLoaded', this.updateMode);
      window.addEventListener('resize', this.updateMode);
      this.updateMode();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _superPropGet(ResponsiveLayout, "disconnectedCallback", this, 3)([]);
      document.removeEventListener('DOMContentLoaded', this.updateMode);
      window.removeEventListener('resize', this.updateMode);
    }
  }, {
    key: "mode",
    get: function get() {
      return this._mode;
    },
    set: function set(mode) {
      if (this._mode !== mode) {
        this._mode = mode;
        this.requestUpdate('mode', mode);
        this.updateComplete.then(this.dispatchModeChange);
      }
    }
  }, {
    key: "dispatchModeChange",
    value: function dispatchModeChange() {
      this.dispatchEvent(new CustomEvent('modeChange', {
        detail: this._mode
      }));
    }
  }, {
    key: "getModes",
    value: function getModes() {
      return this.constructor.modes;
    }
  }, {
    key: "matchMode",
    value: function matchMode(mode) {
      return mode.match === undefined || mode.match === true || window.matchMedia(mode.match).matches;
    }
  }, {
    key: "updateMode",
    value: function updateMode() {
      var mode = this.getModes().find(this.matchMode);
      if (this.mode !== mode.name) {
        this._mode = mode.name;
        this.mode = mode.name;
        this.dispatchModeChange();
      }
    }
  }], [{
    key: "modes",
    get: function get() {
      return [];
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        mode: {
          type: String,
          attribute: true,
          reflect: true
        }
      };
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);


/***/ }),

/***/ "./src/js/components/layout/section-with-sidebar.component.js":
/*!********************************************************************!*\
  !*** ./src/js/components/layout/section-with-sidebar.component.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _responsive_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsive-layout */ "./src/js/components/layout/responsive-layout.js");
/* harmony import */ var _section_with_sidebar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-with-sidebar.css */ "./src/js/components/layout/section-with-sidebar.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }



var SectionWithSidebarComponent = /*#__PURE__*/function (_ResponsiveLayout) {
  function SectionWithSidebarComponent() {
    _classCallCheck(this, SectionWithSidebarComponent);
    return _callSuper(this, SectionWithSidebarComponent);
  }
  _inherits(SectionWithSidebarComponent, _ResponsiveLayout);
  return _createClass(SectionWithSidebarComponent, [{
    key: "render",
    value: function render() {
      var mode = this.mode;
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n<section class=", ">\n  <div class=\"sidebar\">\n    <slot name=\"sidebar\"></slot>\n  </div>\n  <div class=\"main\">\n    <slot></slot>\n  </div>\n</section>\n    "])), mode);
    }
  }], [{
    key: "modes",
    get: function get() {
      return [{
        name: 'full',
        match: '(min-width: 992px)'
      }, {
        name: 'compact'
      }];
    }
  }, {
    key: "properties",
    get: function get() {
      return _superPropGet(SectionWithSidebarComponent, "properties", this);
    }
  }, {
    key: "styles",
    get: function get() {
      return _section_with_sidebar_css__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
  }]);
}(_responsive_layout__WEBPACK_IMPORTED_MODULE_1__["default"]);
customElements.define('il-section-with-sidebar', SectionWithSidebarComponent);

/***/ }),

/***/ "./src/js/components/layout/section-with-sidebar.css.js":
/*!**************************************************************!*\
  !*** ./src/js/components/layout/section-with-sidebar.css.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\nsection {\n  display: grid;\n  margin: 0;\n  padding: 40px var(--il-content-margin);\n}\nsection.compact {\n  grid-gap: 20px;\n  grid-template-rows: auto auto;\n  grid-template-areas: \"sidebar\" \"main\";\n}\nsection.full {\n  grid-gap: 44px;\n  grid-template-columns: 1fr 2fr;\n  grid-template-areas: \"sidebar main\";\n}\n\n@media (min-width: 1200px) {\n  section.full {\n    margin-left: 0;\n    margin-right: 0;\n    grid-gap: 0;\n    grid-template-columns: auto 274px 44px 822px auto;\n    grid-template-areas: \". sidebar . main .\";\n  }\n}\n\n.main {\n  grid-area: main;\n  margin: 0;\n}\n\n.sidebar {\n  grid-area: sidebar;\n}\n\n"]))));

/***/ }),

/***/ "./src/js/components/layout/section.component.js":
/*!*******************************************************!*\
  !*** ./src/js/components/layout/section.component.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _section_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section.css */ "./src/js/components/layout/section.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var SectionComponent = /*#__PURE__*/function (_LitElement) {
  function SectionComponent() {
    _classCallCheck(this, SectionComponent);
    return _callSuper(this, SectionComponent);
  }
  _inherits(SectionComponent, _LitElement);
  return _createClass(SectionComponent, [{
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n<section>\n  <div class=\"content\">\n    <slot></slot>\n  </div>\n</section>\n    "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return _section_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-section', SectionComponent);

/***/ }),

/***/ "./src/js/components/layout/section.css.js":
/*!*************************************************!*\
  !*** ./src/js/components/layout/section.css.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\nsection {\n  position: relative;\n  margin: 0;\n  padding: 0;\n}\n.content {\n  max-width: var(--il-layout-max-width);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n"]))));

/***/ }),

/***/ "./src/js/components/lede/lede.component.js":
/*!**************************************************!*\
  !*** ./src/js/components/lede/lede.component.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _lede_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lede.css */ "./src/js/components/lede/lede.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Lede = /*#__PURE__*/function (_LitElement) {
  function Lede() {
    _classCallCheck(this, Lede);
    return _callSuper(this, Lede);
  }
  _inherits(Lede, _LitElement);
  return _createClass(Lede, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet(Lede, "connectedCallback", this, 3)([]);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _superPropGet(Lede, "disconnectedCallback", this, 3)([]);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<p class=\"il-lede\"><slot></slot></p>\n      "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return _lede_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-lede', Lede);

/***/ }),

/***/ "./src/js/components/lede/lede.css.js":
/*!********************************************!*\
  !*** ./src/js/components/lede/lede.css.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: block;\n  }\n"]))));

/***/ }),

/***/ "./src/js/components/link/link.js":
/*!****************************************!*\
  !*** ./src/js/components/link/link.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.addEventListener('DOMContentLoaded', function (event) {
  function updateLink(link) {
    switch (link.getAttribute('data-il')) {
      case 'accessibility':
        link.innerHTML = 'Accessibility';
        link.setAttribute('href', 'https://illinois.edu/resources/website/accessibility.html');
        break;
      case 'copyright':
        var year = new Date().getFullYear();
        link.innerHTML = "Copyright &#169; ".concat(year);
        link.setAttribute('href', 'https://illinois.edu/resources/website/copyright.html');
        break;
      case 'cookies':
        link.innerHTML = 'About Cookies';
        link.id = 'ot-sdk-btn';
        link.classList.add('ot-sdk-show-settings');
        break;
      case 'privacy':
        link.innerHTML = 'Privacy Policy';
        link.setAttribute('href', 'https://www.vpaa.uillinois.edu/resources/web_privacy');
        break;
      default:
        link.style.display = 'none';
    }
  }
  document.querySelectorAll('a[data-il], button[data-il]').forEach(updateLink);
});

/***/ }),

/***/ "./src/js/components/page-title/page-title.component.js":
/*!**************************************************************!*\
  !*** ./src/js/components/page-title/page-title.component.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../debug */ "./src/js/debug.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_title_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-title.css */ "./src/js/components/page-title/page-title.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var PageTitle = /*#__PURE__*/function (_LitElement) {
  function PageTitle() {
    _classCallCheck(this, PageTitle);
    return _callSuper(this, PageTitle);
  }
  _inherits(PageTitle, _LitElement);
  return _createClass(PageTitle, [{
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <div class=\"page-title\">\n        <div class=\"background\">\n          <slot name=\"background\"></slot>\n        </div>\n        <div class=\"inner\">\n          <div class=\"text\">\n            <slot></slot>\n          </div>\n        </div>\n      </div>\n      "])));
    }
  }], [{
    key: "styles",
    get: function get() {
      return _page_title_css__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-page-title', PageTitle);

/***/ }),

/***/ "./src/js/components/page-title/page-title.css.js":
/*!********************************************************!*\
  !*** ./src/js/components/page-title/page-title.css.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n.page-title {\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  padding: 0 var(--il-content-margin);\n}\n.background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.inner {\n  box-sizing: border-box;\n  position: relative;\n  width: 100%;\n  min-height: 12.5rem;\n  max-width: var(--il-content-max-width);\n  margin: 0 auto;\n  padding-top: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n.text {\n  box-sizing: border-box;\n  position: relative;\n  z-index: 100;\n  color: var(--il-page-title-text-color);\n  text-align: left;\n  font: 700 2.5em var(--il-font-sans);\n  padding: 16px 14px 20px;\n}\n@media (max-width: 800px) {\n  .text {\n    font-size: 2em;\n  }\n}\n@media (max-width: 600px) {\n  .text {\n    font-size: 1.5em;\n  }\n}\n.text::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  background-color: var(--il-page-title-background-color);\n  opacity: .85;\n}\n"]))));

/***/ }),

/***/ "./src/js/components/pagination/pagination.component.js":
/*!**************************************************************!*\
  !*** ./src/js/components/pagination/pagination.component.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagination */ "./src/js/components/pagination/pagination.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pagination__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pagination_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.css */ "./src/js/components/pagination/pagination.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var PaginationComponent = /*#__PURE__*/function (_LitElement) {
  function PaginationComponent() {
    var _this;
    _classCallCheck(this, PaginationComponent);
    _this = _callSuper(this, PaginationComponent);
    _this.page = 1;
    _this.pages = 1;
    _this.param = 'page';
    _this.url = location.href;
    return _this;
  }
  _inherits(PaginationComponent, _LitElement);
  return _createClass(PaginationComponent, [{
    key: "getNavItems",
    value: function getNavItems() {
      var nav = new _pagination__WEBPACK_IMPORTED_MODULE_1___default.a.Navigation(this.url, this.pages, this.param);
      nav.currentPage = this.page;
      return nav.items;
    }
  }, {
    key: "renderNavItem",
    value: function renderNavItem(item) {
      switch (item.constructor) {
        case _pagination__WEBPACK_IMPORTED_MODULE_1___default.a.FirstPageLink:
          return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<li class=\"first\"><a href=\"", "\" aria-label=\"First page\">First</a></li>"])), item.url);
        case _pagination__WEBPACK_IMPORTED_MODULE_1___default.a.PreviousPageLink:
          return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<li class=\"previous\"><a href=\"", "\" aria-label=\"Previous page\">Previous</a></li>"])), item.url);
        case _pagination__WEBPACK_IMPORTED_MODULE_1___default.a.NextPageLink:
          return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<li class=\"next\"><a href=\"", "\" aria-label=\"Next page\">Next</a></li>"])), item.url);
        case _pagination__WEBPACK_IMPORTED_MODULE_1___default.a.LastPageLink:
          return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<li class=\"last\"><a href=\"", "\" aria-label=\"Last page\">Last</a></li>"])), item.url);
        case _pagination__WEBPACK_IMPORTED_MODULE_1___default.a.CurrentPage:
          return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<li class=\"current\" aria-current=\"page\">", "</li>"])), item.pageNumber);
        case _pagination__WEBPACK_IMPORTED_MODULE_1___default.a.PageLink:
          return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<li><a href=\"", "\" aria-label=\"Page ", "\">", "</a></li>"])), item.url, item.pageNumber, item.pageNumber);
        case _pagination__WEBPACK_IMPORTED_MODULE_1___default.a.Ellipsis:
          return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["<li class=\"ellipsis\">&hellip;</li>"])));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n<nav aria-label=\"Pagination\">\n  <slot>\n    <ul>\n      ", "\n    </ul>\n  </slot>\n</nav>\n    "])), this.getNavItems().map(function (item) {
        return _this2.renderNavItem(item);
      }));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        page: {
          type: Number,
          attribute: true,
          "default": 1
        },
        pages: {
          type: Number,
          attribute: true,
          "default": 1
        },
        param: {
          type: String,
          attribute: true,
          "default": 'page'
        },
        url: {
          attribute: false
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _pagination_css__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-pagination', PaginationComponent);

/***/ }),

/***/ "./src/js/components/pagination/pagination.css.js":
/*!********************************************************!*\
  !*** ./src/js/components/pagination/pagination.css.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n:host {\n  color: var(--il-blue);\n  font: 1em/1em var(--il-font-sans);\n}\nul {\n  margin: 0 1px -6px 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-items: center;\n}\nli {\n  margin: 0 -1px 6px 0;\n  padding: 0;\n  list-style: none;\n}\nli.current, li.ellipsis, a {\n  display: block;\n  padding: .5rem .75rem;\n  border-width: 1px;\n  border-style: solid;\n}\nli.current {\n  background-color: var(--il-blue);\n  color: white;\n  border-color: var(--il-blue);\n}\nli.ellipsis {\n  color: var(--il-cloud-3);\n  border-color: transparent;\n}\na {\n  font-weight: 500;\n  text-decoration: none;\n  color: var(--il-blue);\n  border-color: var(--il-cloud-3)\n}\na:hover, a:focus {\n  background-color: #ececed;\n  text-decoration: underline;\n}\n\n"]))));

/***/ }),

/***/ "./src/js/components/pagination/pagination.js":
/*!****************************************************!*\
  !*** ./src/js/components/pagination/pagination.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var Item = /*#__PURE__*/_createClass(function Item() {
  "use strict";

  _classCallCheck(this, Item);
});
var Ellipsis = /*#__PURE__*/function (_Item) {
  "use strict";

  function Ellipsis() {
    _classCallCheck(this, Ellipsis);
    return _callSuper(this, Ellipsis, arguments);
  }
  _inherits(Ellipsis, _Item);
  return _createClass(Ellipsis);
}(Item);
var Page = /*#__PURE__*/function (_Item2) {
  "use strict";

  function Page(pageNumber) {
    var _this;
    _classCallCheck(this, Page);
    _this = _callSuper(this, Page);
    _this._pageNumber = pageNumber;
    return _this;
  }
  _inherits(Page, _Item2);
  return _createClass(Page, [{
    key: "pageNumber",
    get: function get() {
      return this._pageNumber;
    }
  }]);
}(Item);
var CurrentPage = /*#__PURE__*/function (_Page) {
  "use strict";

  function CurrentPage() {
    _classCallCheck(this, CurrentPage);
    return _callSuper(this, CurrentPage, arguments);
  }
  _inherits(CurrentPage, _Page);
  return _createClass(CurrentPage);
}(Page);
var PageLink = /*#__PURE__*/function (_Page2) {
  "use strict";

  function PageLink(nav, pageNumber) {
    var _this2;
    _classCallCheck(this, PageLink);
    _this2 = _callSuper(this, PageLink, [pageNumber]);
    _this2.nav = nav;
    return _this2;
  }
  _inherits(PageLink, _Page2);
  return _createClass(PageLink, [{
    key: "url",
    get: function get() {
      return this.nav.getPageUrl(this.pageNumber);
    }
  }]);
}(Page);
var FirstPageLink = /*#__PURE__*/function (_PageLink) {
  "use strict";

  function FirstPageLink() {
    _classCallCheck(this, FirstPageLink);
    return _callSuper(this, FirstPageLink, arguments);
  }
  _inherits(FirstPageLink, _PageLink);
  return _createClass(FirstPageLink);
}(PageLink);
var LastPageLink = /*#__PURE__*/function (_PageLink2) {
  "use strict";

  function LastPageLink() {
    _classCallCheck(this, LastPageLink);
    return _callSuper(this, LastPageLink, arguments);
  }
  _inherits(LastPageLink, _PageLink2);
  return _createClass(LastPageLink);
}(PageLink);
var NextPageLink = /*#__PURE__*/function (_PageLink3) {
  "use strict";

  function NextPageLink() {
    _classCallCheck(this, NextPageLink);
    return _callSuper(this, NextPageLink, arguments);
  }
  _inherits(NextPageLink, _PageLink3);
  return _createClass(NextPageLink);
}(PageLink);
var PreviousPageLink = /*#__PURE__*/function (_PageLink4) {
  "use strict";

  function PreviousPageLink() {
    _classCallCheck(this, PreviousPageLink);
    return _callSuper(this, PreviousPageLink, arguments);
  }
  _inherits(PreviousPageLink, _PageLink4);
  return _createClass(PreviousPageLink);
}(PageLink);
var Navigation = /*#__PURE__*/function () {
  "use strict";

  function Navigation(baseUrl, pageCount) {
    var pageParamName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'page';
    _classCallCheck(this, Navigation);
    this.pageParamName = pageParamName;
    this.pageCount = pageCount;
    this.baseUrl = baseUrl;
    this.currentPage = 1;
    if (!(typeof this.baseUrl === 'function')) {
      var url = new URL(baseUrl);
      if (url.searchParams.has(this.pageParamName)) {
        this.currentPage = url.searchParams.get(this.pageParamName);
      }
    }
  }
  return _createClass(Navigation, [{
    key: "currentPage",
    get: function get() {
      return this._currentPage;
    },
    set: function set(number) {
      this._currentPage = parseInt(number);
    }
  }, {
    key: "items",
    get: function get() {
      var items = [];
      var _this$getVisiblePageR = this.getVisiblePageRange(),
        start = _this$getVisiblePageR.start,
        end = _this$getVisiblePageR.end;
      for (var page = start; page <= end; page++) {
        if (page === this.currentPage) {
          items.push(this.currentPageItem);
        } else {
          items.push(this.getPageLink(page));
        }
      }
      if (start > 1) {
        items.unshift(new Ellipsis());
        items.unshift(this.getPageLink(1));
      }
      if (end < this.pageCount) {
        items.push(new Ellipsis());
        items.push(this.getPageLink(this.pageCount));
      }
      if (this.hasPreviousPageLink()) {
        items.unshift(this.previousPageLink);
      }
      if (this.hasNextPageLink()) {
        items.push(this.nextPageLink);
      }
      if (this.hasFirstPageLink()) {
        items.unshift(this.firstPageLink);
      }
      if (this.hasLastPageLink()) {
        items.push(this.lastPageLink);
      }
      return items;
    }
  }, {
    key: "currentPageItem",
    get: function get() {
      return new CurrentPage(this.currentPage);
    }
  }, {
    key: "firstPageLink",
    get: function get() {
      return new FirstPageLink(this, 1);
    }
  }, {
    key: "lastPageLink",
    get: function get() {
      return new LastPageLink(this, this.pageCount);
    }
  }, {
    key: "nextPageLink",
    get: function get() {
      return new NextPageLink(this, this.currentPage + 1);
    }
  }, {
    key: "pageCount",
    get: function get() {
      return this._pageCount;
    },
    set: function set(pageCount) {
      this._pageCount = parseInt(pageCount);
    }
  }, {
    key: "previousPageLink",
    get: function get() {
      return new PreviousPageLink(this, this.currentPage - 1);
    }
  }, {
    key: "getPageLink",
    value: function getPageLink(pageNumber) {
      return new PageLink(this, pageNumber);
    }
  }, {
    key: "getPageUrl",
    value: function getPageUrl(pageNumber) {
      if (typeof this.baseUrl === 'function') {
        return this.baseUrl(pageNumber);
      } else {
        var url = new URL(this.baseUrl);
        url.searchParams.set(this.pageParamName, pageNumber);
        return url.href;
      }
    }
  }, {
    key: "getVisiblePageRange",
    value: function getVisiblePageRange() {
      var radius = 3;
      var start = this.currentPage - radius;
      if (start < 3) start = 1;
      var end = start + radius * 2;
      if (end > this.pageCount - 2) {
        end = this.pageCount;
        start = Math.max(1, end - radius * 2);
        if (start < 3) start = 1;
      }
      return {
        start: start,
        end: end
      };
    }
  }, {
    key: "hasFirstPageLink",
    value: function hasFirstPageLink() {
      return this.currentPage !== 1;
    }
  }, {
    key: "hasLastPageLink",
    value: function hasLastPageLink() {
      return this.currentPage !== this.pageCount;
    }
  }, {
    key: "hasNextPageLink",
    value: function hasNextPageLink() {
      return this.currentPage !== this.pageCount;
    }
  }, {
    key: "hasPreviousPageLink",
    value: function hasPreviousPageLink() {
      return this.currentPage !== 1;
    }
  }, {
    key: "setPageParamName",
    value: function setPageParamName(paramName) {
      this.pageParamName = paramName;
      return this;
    }
  }]);
}();
module.exports = {
  CurrentPage: CurrentPage,
  Ellipsis: Ellipsis,
  FirstPageLink: FirstPageLink,
  LastPageLink: LastPageLink,
  Navigation: Navigation,
  NextPageLink: NextPageLink,
  PageLink: PageLink,
  PreviousPageLink: PreviousPageLink
};

/***/ }),

/***/ "./src/js/components/quote/quote.component.js":
/*!****************************************************!*\
  !*** ./src/js/components/quote/quote.component.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _quote_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quote.css */ "./src/js/components/quote/quote.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _superPropGet(t, e, r, o) { var p = _get(_getPrototypeOf(1 & o ? t.prototype : t), e, r); return 2 & o ? function (t) { return p.apply(r, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var Quote = /*#__PURE__*/function (_LitElement) {
  function Quote() {
    _classCallCheck(this, Quote);
    return _callSuper(this, Quote);
  }
  _inherits(Quote, _LitElement);
  return _createClass(Quote, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _superPropGet(Quote, "connectedCallback", this, 3)([]);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _superPropGet(Quote, "disconnectedCallback", this, 3)([]);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<blockquote ?aria-hidden=", ">\n      <p class=\"il-quote\"><slot></slot></p>\n      <slot name=\"attributed\"></slot>\n      <slot name=\"secondary\"></slot>\n      </blockquote>\n      "])), this.pullquote);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        pullquote: {
          type: Boolean,
          "default": false,
          attribute: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _quote_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-quote', Quote);

/***/ }),

/***/ "./src/js/components/quote/quote.css.js":
/*!**********************************************!*\
  !*** ./src/js/components/quote/quote.css.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: block;\n  }\n  p.il-quote {\n    position:relative;\n  }\n  p.il-quote::before {\n    position: absolute;\n    content: \"\u201C\";\n    color: var(--il-orange);\n    font-size: 7.813rem;\n    line-height: 0;\n    top: 55px;\n    left: -90px;\n    font-weight: 700;\n    font-style: normal;\n  }\n  \n  p.il-quote::after {\n    position: absolute;\n    content: \"\u201D\";\n    color: var(--il-orange);\n    font-size: 7.813rem;\n    line-height: 0;\n    bottom: 0;\n    right: -90px;\n    font-weight: 700;\n    font-style: normal;\n  }\n\n  @media only screen and (max-width: 792px) {\n    p.il-quote::before {\n      font-size: 6.25rem;\n      top: 45px;\n      left: -70px;\n    }\n    p.il-quote::after {\n      font-size: 6.25rem;\n      right: -70px;\n    }\n  }\n"]))));

/***/ }),

/***/ "./src/js/components/search/search.component.js":
/*!******************************************************!*\
  !*** ./src/js/components/search/search.component.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../debug */ "./src/js/debug.js");
/* harmony import */ var _debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.css */ "./src/js/components/search/search.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var Search = /*#__PURE__*/function (_LitElement) {
  function Search() {
    var _this;
    _classCallCheck(this, Search);
    _this = _callSuper(this, Search);
    _this.action = '';
    _this.inputHasFocus = false;
    _this.label = 'Search';
    _this.method = 'GET';
    _this.name = 's';
    _this.placeholder = 'Search this site';
    _this.query = '';
    _this.searchname = undefined;
    document.addEventListener('DOMContentLoaded', _this.handleContentLoaded.bind(_this));
    return _this;
  }
  _inherits(Search, _LitElement);
  return _createClass(Search, [{
    key: "getName",
    value: function getName() {
      return this.searchname || this.name;
    }
  }, {
    key: "handleButtonBlur",
    value: function handleButtonBlur(evt) {
      this.buttonHasFocus = false;
    }
  }, {
    key: "handleButtonFocus",
    value: function handleButtonFocus(evt) {
      this.buttonHasFocus = true;
    }
  }, {
    key: "handleContentLoaded",
    value: function handleContentLoaded(evt) {
      var header = this.getHeader();
      if (this.searchname) {
        _debug__WEBPACK_IMPORTED_MODULE_1___default.a.warn('Search component: The "searchname" is deprecated; use "name" instead.');
      }
      if (header) {
        header.addEventListener('viewChange', this.handleHeaderViewChange.bind(this));
      }
    }
  }, {
    key: "handleHeaderViewChange",
    value: function handleHeaderViewChange(evt) {
      //console.debug(evt.detail);
    }
  }, {
    key: "handleInputBlur",
    value: function handleInputBlur(evt) {
      this.inputHasFocus = false;
    }
  }, {
    key: "handleInputFocus",
    value: function handleInputFocus(evt) {
      this.inputHasFocus = true;
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      return this.closest('il-header');
    }
  }, {
    key: "renderSearchIcon",
    value: function renderSearchIcon() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<svg role=\"image\" aria-label=\"Submit search\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 51.26 51.26\">\n        <path d=\"M31.46 5.21a18.2 18.2 0 10-2.13 27.54L44 49.56a4.32 4.32 0 006.11-6.12L33.39 28.65a18.19 18.19 0 00-1.93-23.44zM28 27.48a13.29 13.29 0 110-18.79 13.3 13.3 0 010 18.79z\"/>\n    </svg>"])));
    }
  }, {
    key: "render",
    value: function render() {
      var classNames = [];
      if (this.inputHasFocus) {
        classNames.push('input-has-focus');
      }
      if (this.buttonHasFocus) {
        classNames.push('button-has-focus');
      }
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n<form role=\"search\" method=", " action=", " class=\"", "\">\n    <label for=\"query\">Search</label>\n    <input type=\"search\" id=\"query\" name=", " value=", " placeholder=", " @focus=", " @blur=", ">\n    <button type=\"submit\" @focus=", " @blur=", ">\n        ", "\n    </button>\n</form>\n    "])), this.method, this.action, classNames.join(' '), this.getName(), this.query, this.placeholder, this.handleInputFocus, this.handleInputBlur, this.handleButtonFocus, this.handleButtonBlur, this.renderSearchIcon());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        action: {
          type: String,
          attribute: true
        },
        buttonHasFocus: {
          type: Boolean,
          attribute: false
        },
        inputHasFocus: {
          type: Boolean,
          attribute: false
        },
        label: {
          type: String,
          attribute: true
        },
        name: {
          type: String,
          attribute: true
        },
        method: {
          type: String,
          attribute: true
        },
        placeholder: {
          type: String,
          attribute: true
        },
        query: {
          type: String,
          attribute: true
        },
        searchname: {
          type: String,
          attribute: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _search_css__WEBPACK_IMPORTED_MODULE_2__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-search', Search);

/***/ }),

/***/ "./src/js/components/search/search.css.js":
/*!************************************************!*\
  !*** ./src/js/components/search/search.css.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\nform {\n  display: grid;\n  height: 40px;\n  grid-template-columns: auto 60px;\n  grid-gap: 2px;\n  border: 2px solid var(--il-cloud-3);\n  background-color: var(--il-cloud-3);\n  margin-left: 10px;\n  border-radius: 5px;\n}\nform.input-has-focus {\n  border-color: var(--il-industrial-blue);\n}\nlabel {\n  display: none;\n}\ninput {\n  margin: 0;\n  padding: 5px;\n  border: 0;\n  font: 16px/18px var(--il-font-sans);\n  background-color: white;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  -webkit-appearance: none;\n}\ninput:focus {\n  outline: 0;\n}\nbutton {\n  position: relative;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background-color: white;\n  color: #606060;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\nbutton:focus {\n  outline: 0px solid var(--il-industrial-blue);\n  box-shadow: 0 0 0 2px var(--il-industrial-blue);\n  color: var(--il-industrial-blue);\n}\nbutton svg {\n  display: block;\n  position: absolute;\n  left: calc(50% - 10px);\n  top: calc(50% - 10px);\n  width: 20px;\n  height: 20px;\n  fill: currentcolor;\n}\n"]))));

/***/ }),

/***/ "./src/js/components/section-nav/section-nav.component.js":
/*!****************************************************************!*\
  !*** ./src/js/components/section-nav/section-nav.component.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _section_nav_css_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./section-nav.css.js */ "./src/js/components/section-nav/section-nav.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var SectionNavigation = /*#__PURE__*/function (_LitElement) {
  function SectionNavigation() {
    var _this;
    _classCallCheck(this, SectionNavigation);
    _this = _callSuper(this, SectionNavigation);
    _this.compact = false;
    _this.expanded = false;
    _this.handleToggleClick = _this.handleToggleClick.bind(_this);
    document.addEventListener('DOMContentLoaded', _this.handleDocumentLoaded.bind(_this));
    return _this;
  }
  _inherits(SectionNavigation, _LitElement);
  return _createClass(SectionNavigation, [{
    key: "getLayoutSection",
    value: function getLayoutSection() {
      return this.closest('il-section-with-sidebar');
    }
  }, {
    key: "hasLayoutSection",
    value: function hasLayoutSection() {
      return this.getLayoutSection() !== null;
    }

    // Event handlers
  }, {
    key: "handleDocumentLoaded",
    value: function handleDocumentLoaded(evt) {
      var _this2 = this;
      if (this.hasLayoutSection()) {
        var layout = this.getLayoutSection();
        this.compact = layout.mode === 'compact';
        layout.addEventListener('modeChange', function (evt) {
          _this2.compact = evt.detail === 'compact';
        });
      } else {
        // Deprecated
        window.addEventListener('resize', this.handleWindowResize.bind(this));
        this.handleWindowResize();
      }
    }
  }, {
    key: "handleToggleClick",
    value: function handleToggleClick() {
      this.expanded = !this.expanded;
    }
  }, {
    key: "handleWindowResize",
    value: function handleWindowResize() {
      this.compact = !window.matchMedia("(min-width: 992px)").matches;
    }

    // Render
  }, {
    key: "render",
    value: function render() {
      var mode = this.compact ? 'compact' : 'full';
      var expanded = this.expanded ? 'expanded' : 'collapsed';
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      <nav aria-labelledby=\"section-nav-label\" class=", ">\n        <div class=\"header\">\n          <h2 id=\"section-nav-label\">In this section</h2>\n          <button class=\"il-section-nav__toggle\" @click=", " aria-expanded=", " aria-controls=\"section-nav-menu\">\n            Toggle section navigation menu\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" aria-hidden=\"true\">\n              <path\n                d=\"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z\" />\n            </svg>\n          </button>\n        </div>\n        <div class=\"menu\" id=\"section-nav-menu\">\n          <slot></slot>\n        </div>\n      </nav>\n    "])), mode + ' ' + expanded, this.handleToggleClick, this.expanded ? "true" : "false");
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        compact: {
          type: Boolean,
          attribute: true,
          "default": false,
          reflect: true
        },
        expanded: {
          type: Boolean,
          attribute: false
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _section_nav_css_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-section-nav', SectionNavigation);

/***/ }),

/***/ "./src/js/components/section-nav/section-nav.css.js":
/*!**********************************************************!*\
  !*** ./src/js/components/section-nav/section-nav.css.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n.header {\n  margin: 0;\n  padding: 0 20px;\n  background-color: #F0F0F0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;        \n}\n.header h2 {\n  margin: 0;\n  padding: 0;\n  font: 700 22px/56px var(--il-font-sans);\n  color: var(--il-blue);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.header h2::after {\n  content: \"\\2026\";\n}\n.header button {\n  position: relative;\n  box-sizing: border-box;\n  width: 60px;\n  height: 44px;\n  overflow: hidden;\n  margin: 0 0 0 10px;\n  padding: 0;\n  background: transparent;\n  border: 2px solid var(--il-blue);\n  color: var(--il-blue);\n  border-radius: 3px;\n  text-indent: 72px;\n  white-space: nowrap;\n}\n.header button:focus, .header button:hover {\n  background-color: var(--il-orange);\n  border-color: var(--il-orange);\n  color: white;\n}\n.header button svg {\n  position: absolute;\n  left: 19px;\n  top: 11px;\n  width: 18px;\n  height: 18px;\n  fill: currentColor;\n}\nnav.full .header {\n  position: absolute !important;\n  left: -9999px !important;\n  top: auto !important;\n  display: block !important;\n  text-align: left !important;\n  text-indent: -9999em !important;\n  width: 1px !important;\n  height: 1px !important;\n  overflow: hidden !important;\n}\nnav.full .il-section-nav__toggle {\n  display: none;\n}\nnav.compact {\n  border-radius: 3px;\n  border: solid 2px #d8d8d8;\n}\nnav.compact .menu {\n  display: none;\n  background-color: white;\n}\nnav.compact.expanded .header {\n  border-bottom: solid 1px #d8d8d8;\n}\nnav.compact.expanded .header button svg {\n  transform: rotate(180deg);\n}\nnav.compact.expanded .menu {\n  display: block;\n}\n\n\n"], ["\n\n.header {\n  margin: 0;\n  padding: 0 20px;\n  background-color: #F0F0F0;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;        \n}\n.header h2 {\n  margin: 0;\n  padding: 0;\n  font: 700 22px/56px var(--il-font-sans);\n  color: var(--il-blue);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.header h2::after {\n  content: \"\\\\2026\";\n}\n.header button {\n  position: relative;\n  box-sizing: border-box;\n  width: 60px;\n  height: 44px;\n  overflow: hidden;\n  margin: 0 0 0 10px;\n  padding: 0;\n  background: transparent;\n  border: 2px solid var(--il-blue);\n  color: var(--il-blue);\n  border-radius: 3px;\n  text-indent: 72px;\n  white-space: nowrap;\n}\n.header button:focus, .header button:hover {\n  background-color: var(--il-orange);\n  border-color: var(--il-orange);\n  color: white;\n}\n.header button svg {\n  position: absolute;\n  left: 19px;\n  top: 11px;\n  width: 18px;\n  height: 18px;\n  fill: currentColor;\n}\nnav.full .header {\n  position: absolute !important;\n  left: -9999px !important;\n  top: auto !important;\n  display: block !important;\n  text-align: left !important;\n  text-indent: -9999em !important;\n  width: 1px !important;\n  height: 1px !important;\n  overflow: hidden !important;\n}\nnav.full .il-section-nav__toggle {\n  display: none;\n}\nnav.compact {\n  border-radius: 3px;\n  border: solid 2px #d8d8d8;\n}\nnav.compact .menu {\n  display: none;\n  background-color: white;\n}\nnav.compact.expanded .header {\n  border-bottom: solid 1px #d8d8d8;\n}\nnav.compact.expanded .header button svg {\n  transform: rotate(180deg);\n}\nnav.compact.expanded .menu {\n  display: block;\n}\n\n\n"]))));

/***/ }),

/***/ "./src/js/components/statistic/statistic.js":
/*!**************************************************!*\
  !*** ./src/js/components/statistic/statistic.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Statistic = /*#__PURE__*/function (_LitElement) {
  function Statistic() {
    var _this;
    _classCallCheck(this, Statistic);
    _this = _callSuper(this, Statistic);
    _this.color = '';
    _this.background = '';
    _this.height = '';
    _this.width = '';
    _this.animated = false;
    _this.idInfo = '';
    _this.start = '';
    _this.originalStat = '';
    return _this;
  }
  _inherits(Statistic, _LitElement);
  return _createClass(Statistic, [{
    key: "addOriginalStat",
    value: function addOriginalStat(e) {
      if (this.originalStat == '') {
        this.originalStat = e.target.assignedNodes({
          flatten: true
        })[0].innerHTML;
      }
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this2 = this;
      this.shadowRoot.querySelector('slot[name="stat"]').addEventListener('slotchange', function (e) {
        return _this2.addOriginalStat(e);
      });
    }
  }, {
    key: "render",
    value: function render() {
      this.idInfo = 'statistic-' + ((1 + Math.random()) * 0x10000000 | 0);
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    <p class=\"il-statistic\" id='", "'>\n        <span class=\"text intro\"><slot name=\"top\"></slot></span>\n        <span class=\"stat\"><slot name=\"stat\"></span></slot>\n        <span class=\"text\"><slot></slot></span>\n        <span class=\"text source\"><slot name=\"source\"></slot></span>\n    </p>"])), this.idInfo);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        height: {
          type: String,
          attribute: true
        },
        startAnimation: {
          type: String,
          attribute: true
        },
        animate: {
          type: Boolean,
          attribute: true
        },
        originalStat: {
          type: String,
          attribute: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    p.il-statistic {\n      text-align: center;\n      padding: var(--il-statistic-padding);\n      background: var(--il-background-color);\n      margin: var(--il-statistic-margin);\n      color: var(--il-statistic-text-color);\n      width: var(--il-statistic-width);\n    }\n    p.il-statistic span.text {\n      font-size: var(--il-statistic-font-size);\n      line-height: var(--il-statistic-line-height);\n    }\n    p.il-statistic span.text.intro {\n      padding-bottom: var(--il-statistic-intro-padding-bottom);\n      display: inline-block;\n    }\n    p.il-statistic span.stat {\n      display: block;\n      font-weight: 700;\n      margin: var(--il-statistic-heading-margin);\n      color: var(--il-statistic-heading-color);\n      padding: var(--il-statistic-stat-padding);\n      font-size: var(--il-statistic-stat-font-size);\n      line-height: var(--il-statistic-stat-line-height);\n    }\n    p.il-statistic span.stat em {\n      font-style: normal;\n    }\n    p.il-statistic span.source {\n      display: block;\n      margin: var(--il-statistic-source-margin);\n      font-size: var(--il-statistic-source-font-size);\n      line-height: var(--il-statistic-source-line-height);\n      font-style: italic;\n    }"])));
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-statistic', Statistic);

/***/ }),

/***/ "./src/js/components/unit-wordmark/unit-wordmark.component.js":
/*!********************************************************************!*\
  !*** ./src/js/components/unit-wordmark/unit-wordmark.component.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _unit_wordmark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit-wordmark.css */ "./src/js/components/unit-wordmark/unit-wordmark.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var breakpoint = 400;
var UnitWordmark = /*#__PURE__*/function (_LitElement) {
  function UnitWordmark() {
    var _this;
    _classCallCheck(this, UnitWordmark);
    _this = _callSuper(this, UnitWordmark);
    _this.compact = false;
    if (!UnitWordmark.hasContainerSupport()) {
      console.debug("Wordmark: No support for @container detected: using manual resize");
      window.addEventListener('load', _this.handleResize.bind(_this));
      window.addEventListener('resize', _this.handleResize.bind(_this));
    }
    return _this;
  }
  _inherits(UnitWordmark, _LitElement);
  return _createClass(UnitWordmark, [{
    key: "getWidth",
    value: function getWidth() {
      return this.offsetWidth;
    }
  }, {
    key: "handleResize",
    value: function handleResize(evt) {
      this.compact = this.getWidth() < breakpoint;
    }
  }, {
    key: "isCompact",
    value: function isCompact() {
      return !UnitWordmark.hasContainerSupport() && this.compact;
    }
  }, {
    key: "renderBlockI",
    value: function renderBlockI() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n<svg class=\"block-i\" mlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 55 79\">\n  <title>Block I logo</title>\n  <path class=\"block-i__outline\" d=\"M54.2 21.1V0H0v21.1h12v36.1H0v21.1h54.2V57.2h-12V21.1z\" />\n  <path class=\"block-i__fill\" d=\"M42.1 18.1h9V3H3v15h9c1.7 0 3 1.3 3 3v36.1c0 1.7-1.3 3-3 3H3v15h48.1v-15h-9c-1.7 0-3-1.3-3-3v-36c0-1.7 1.4-3 3-3z\" />\n</svg>\n        "])));
    }
  }, {
    key: "render",
    value: function render() {
      var compact = this.isCompact() ? 'compact' : '';
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n<div class=\"wordmark ", "\">\n  <div class=\"campus\">\n    <a href=\"https://illinois.edu\">", "</a>\n  </div>\n  <div class=\"unit\">\n    <slot></slot>\n  </div>\n</div>\n        "])), compact, this.renderBlockI());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        compact: {
          "default": false,
          attribute: false
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _unit_wordmark_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }, {
    key: "hasContainerSupport",
    value: function hasContainerSupport() {
      return CSS.supports('contain', 'inline-size');
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-unit-wordmark', UnitWordmark);

/***/ }),

/***/ "./src/js/components/unit-wordmark/unit-wordmark.css.js":
/*!**************************************************************!*\
  !*** ./src/js/components/unit-wordmark/unit-wordmark.css.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n:host {\n  display: block;\n  position: relative;\n}\n.wordmark {\n  --block-i-alignment: center; \n  --unit-border: 1px solid var(--il-blue);\n  --unit-padding: 20px;\n  position: relative;\n  display: grid;\n  grid-template-columns: 30px auto;\n  grid-template-areas: \"campus unit\";\n  grid-gap: 20px;\n}\n\n.campus {\n  grid-area: campus;\n  align-self: var(--block-i-alignment);\n}\n.campus a {\n  position: relative;\n  height: 43px;\n  width: 30px;\n  display: block;\n  text-decoration: none;\n}\n.campus a:focus, .campus a:hover  {\n  outline: none;\n  outline-color: none;\n}\n\n.campus a:focus .block-i__fill, .campus a:hover .block-i__fill {\n  fill: var(--il-blue);\n}\n\n.unit {\n  grid-area: unit;\n  justify-self: start;\n  align-self: center;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: center;\n  align-items: flex-start;\n  border-left: var(--unit-border);\n  padding-left: var(--unit-padding);\n}\n\n.block-i {\n  display: block;\n}\n.block-i__outline {\n  fill: var(--il-blue);\n}\n.block-i__fill {\n  fill: var(--il-orange);\n}\n\n@supports (contain: inline-size) {\n  .wordmark {\n    contain: layout inline-size;\n  }\n  @container (min-width: 400px) {\n    .wordmark {\n      --block-i-alignment: flex-start; \n      --unit-border: none;\n      --unit-padding: 0;\n    }\n  }\n}\n\n@supports not (contain: inline-size) {\n  .wordmark.compact {\n    --block-i-alignment: flex-start; \n    --unit-border: none;\n    --unit-padding: 0;\n  }\n}\n\n\n"]))));
/*

.wordmark.wide {
  min-height: 43px;
  padding-left: 50px;
  margin-bottom: 10px;
}
.wordmark.tall .block-i {
  top: 10px;
  margin-top: 0;
}
.wordmark ::slotted(*) {
  font-size: 16px;
}
.wordmark ::slotted(*:last-child) {
  font-size: 32px;
}

@media (min-width: 768px) {
.wordmark.wide, .wordmark.narrow {
  padding-left: 70px;
  min-height: 43px;
}
.wordmark.wide::after, .wordmark.narrow::after {
  background-color: var(--il-blue);
  content: "";
  height: 100%;
  left: 50px;
  position: absolute;
  top: 0;
  width: 1px;
}
*/

/***/ }),

/***/ "./src/js/components/vertical-tab-panel/vertical-tab-panel.component.js":
/*!******************************************************************************!*\
  !*** ./src/js/components/vertical-tab-panel/vertical-tab-panel.component.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _vertical_tab_panel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical-tab-panel.css */ "./src/js/components/vertical-tab-panel/vertical-tab-panel.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var VerticalTabPanel = /*#__PURE__*/function (_LitElement) {
  function VerticalTabPanel() {
    var _this;
    _classCallCheck(this, VerticalTabPanel);
    _this = _callSuper(this, VerticalTabPanel);
    if (typeof _this.open == 'undefined') {
      _this.open = false;
    }
    return _this;
  }
  _inherits(VerticalTabPanel, _LitElement);
  return _createClass(VerticalTabPanel, [{
    key: "collapse",
    value: function collapse() {
      this.open = false;
    }
  }, {
    key: "updateHeader",
    value: function updateHeader(e) {
      var childNode = e.target.assignedNodes({
        flatten: true
      })[0];
      if (typeof childNode !== 'undefined') {
        this.headerTagName = childNode.tagName;
        this.headerTitle = childNode.innerText;
        var id = this.headerTitle.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
        this.id = "il-vertical-tab-id-" + id;
        this.buttonId = "il-vertical-tab-button-" + id;
        this.panelId = "il-vertical-tab-panel-" + id;
      }
      this.dispatchEvent(new Event('changeheader', {
        detail: {
          name: this.headerTitle
        },
        bubbles: true
      }));
    }
  }, {
    key: "triggerExpand",
    value: function triggerExpand(e) {
      this.open = !this.open;
      this.dispatchEvent(new Event('expand', {
        detail: {
          panelId: this.panelId
        },
        bubbles: true
      }));
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      var _this2 = this;
      this.shadowRoot.querySelector('slot[name="header"]').addEventListener('slotchange', function (e) {
        return _this2.updateHeader(e);
      });
    }
  }, {
    key: "renderChevron",
    value: function renderChevron() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\n    <path\n      d=\"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z\" />\n    </svg>"])));
    }
  }, {
    key: "renderHeading",
    value: function renderHeading() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<button id=\"", "\" aria-expanded=\"", "\" aria-controls=\"", "\" @click=", "><div>", "</div><span>", "</span></button>"])), this.buttonId, this.open, this.panelId, this.triggerExpand, this.headerTitle, this.renderChevron());
    }
  }, {
    key: "renderBody",
    value: function renderBody() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<div role=\"region\" class=\"panel\" id=\"", "\" aria-labelledby=\"", "\" ?hidden=", ">\n    <slot name=\"header\"></slot>\n    <slot></slot>\n    </div>"])), this.panelId, this.buttonId, !this.open);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.headerTagName == 'H2') {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      <div class=\"vertical-tab-panel\">\n      <h2>", "</h2>\n      ", "\n      </div>\n      "])), this.renderHeading(), this.renderBody());
      }
      if (this.headerTagName == 'H3') {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      <div class=\"vertical-tab-panel\">\n      <h3>", "</h3>\n      ", "\n      </div>\n      "])), this.renderHeading(), this.renderBody());
      }
      if (this.headerTagName == 'H4') {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      <div class=\"vertical-tab-panel\">\n      <h4>", "</h4>\n      ", "\n      </div>\n      "])), this.renderHeading(), this.renderBody());
      }
      if (this.headerTagName == 'H5') {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      <div class=\"vertical-tab-panel\">\n      <h5>", "</h5>\n      ", "\n      </div>\n      "])), this.renderHeading(), this.renderBody());
      }
      if (this.headerTagName == 'H6') {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      <div class=\"vertical-tab-panel\">\n      <h6>", "</h6>\n      ", "\n      </div>\n      "])), this.renderHeading(), this.renderBody());
      }
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    <div class=\"vertical-tab-panel\">\n    ", "\n    ", "\n    </div>\n    "])), this.renderHeading(), this.renderBody());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        headerTitle: {
          type: String
        },
        headerTagName: {
          type: String
        },
        buttonId: {
          type: String,
          "default": ''
        },
        panelId: {
          type: String,
          "default": ''
        },
        open: {
          type: Boolean,
          "default": false,
          attribute: true,
          reflect: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _vertical_tab_panel_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-vertical-tab-panel', VerticalTabPanel);

/***/ }),

/***/ "./src/js/components/vertical-tab-panel/vertical-tab-panel.css.js":
/*!************************************************************************!*\
  !*** ./src/js/components/vertical-tab-panel/vertical-tab-panel.css.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :host {\n    display: block;\n  }\n\n  .invisible { \n    display: none; \n  }\n\n  h2, h3, h4, h5, h6 {\n    margin: 0;\n  }\n\n  button {\n    width: 100%;\n    display: flex;\n    padding: 15px 20px 15px;\n    background: var(--il-panel-background-color);\n    border: none;\n    color: var(--il-panel-foreground-color);\n    font-size: 1.1875rem;\n    font-weight: 700;\n    text-align: left;\n    border-bottom: var(--il-panel-border);\n  }\n\n  .headings ul li:first-child button {\n    border-top: var(--il-panel-border);\n  }\n\n  button div {\n    flex-grow: 1;\n  }\n\n  button[aria-expanded=\"true\"] {\n    background: var(--il-selected-panel-background-color);\n    color: var(--il-selected-panel-foreground-color);\n  } \n\n  button:focus, button:hover {\n    color: var(--il-focused-panel-foreground-color);\n    background: var(--il-focused-panel-background-color);\n  }\n\n  button[aria-expanded=\"true\"]:focus, button[aria-expanded=\"true\"]:hover {\n    background: var(--il-selected-panel-background-color);\n    color: var(--il-selected-panel-foreground-color);\n  } \n\n  button span {\n    float: right;\n    width: 18px;\n    height: 18px;\n    display: inline-block;\n    fill: var(--il-panel-foreground-color);\n    margin-top: 3px;\n  }\n\n  button[aria-expanded=true] span {\n    transform: rotate(-180deg);\n    background: var(--il-selected-panel-background-color);\n    color: var(--il-selected-panel-foreground-color);\n    fill: var(--il-selected-panel-foreground-color);\n  }\n\n  button[aria-expanded=\"true\"]:focus span, button[aria-expanded=\"true\"]:hover span {\n    fill: var(--il-selected-panel-foreground-color);\n  } \n\n  button:focus span, button:hover span {\n    fill: var(--il-focused-panel-foreground-color);\n  }\n\n  .panel {\n    padding: 0 20px 20px 20px;\n    border-bottom: var(--il-panel-border);\n  }\n\n  slot[name=\"header\"] {\n    display: none;\n  }\n\n  @media only screen and (min-width: 792px) {\n    slot[name=\"header\"] {\n      display: block;\n    }\n    button {\n      display: none;\n    }\n    .panel {\n      padding: 0 0 20px 0;\n      border-bottom: none;\n    }\n  }\n"]))));

/***/ }),

/***/ "./src/js/components/vertical-tab/vertical-tab.component.js":
/*!******************************************************************!*\
  !*** ./src/js/components/vertical-tab/vertical-tab.component.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _vertical_tab_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vertical-tab.css */ "./src/js/components/vertical-tab/vertical-tab.css.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var VerticalTab = /*#__PURE__*/function (_LitElement) {
  function VerticalTab() {
    var _this;
    _classCallCheck(this, VerticalTab);
    _this = _callSuper(this, VerticalTab);
    _this.titles = [];
    _this.ids = [];
    document.addEventListener('DOMContentLoaded', _this.handleContentLoaded.bind(_this));
    return _this;
  }
  _inherits(VerticalTab, _LitElement);
  return _createClass(VerticalTab, [{
    key: "handleContentLoaded",
    value: function handleContentLoaded(evt) {
      var _this2 = this;
      this.titles.length = 0;
      this.ids.length = 0;
      this.getPanels().forEach(function (section) {
        _this2.titles.push(section.headerTitle);
        _this2.ids.push(section.panelId);
        section.addEventListener('expand', _this2.collapsePanels.bind(_this2));
        section.addEventListener('changeheader', _this2.refreshPanels.bind(_this2));
        if (_this2.titles.length == 1) {
          section.setAttribute('open', true);
        }
      });
      this.requestUpdate();
    }
  }, {
    key: "collapsePanels",
    value: function collapsePanels(evt) {
      this.getPanels().forEach(function (section) {
        if (evt.target.panelId !== section.panelId) {
          section.removeAttribute('open');
        }
      });
    }
  }, {
    key: "refreshPanels",
    value: function refreshPanels(evt) {
      this.requestUpdate();
    }
  }, {
    key: "getPanels",
    value: function getPanels() {
      return this.querySelectorAll('il-vertical-tab-panel');
    }
  }, {
    key: "triggerExpandChild",
    value: function triggerExpandChild(evt) {
      var panelId = evt.target.getAttribute('aria-controls');
      this.getPanels().forEach(function (section) {
        if (panelId !== section.panelId) {
          section.removeAttribute('open');
        } else {
          section.setAttribute('open', true);
        }
      });
      this.renderRoot.querySelectorAll('button').forEach(function (button) {
        button.setAttribute('aria-expanded', false);
      });
      evt.target.setAttribute('aria-expanded', true);
    }
  }, {
    key: "printHeaders",
    value: function printHeaders() {
      var _this3 = this;
      this.handleContentLoaded(this);
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    <ul>\n    ", "\n  </ul>"])), this.titles.map(function (title, i) {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<li><button aria-expanded=\"", "\" aria-controls=\"", "\" @click=", ">", "</button></li>"])), i == 0 ? 'true' : 'false', _this3.ids[i], _this3.triggerExpandChild, title);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    <div class=\"full\">\n      <div class=\"title\"><slot name=\"title\"></slot></div>\n      <div class=\"headings\">", "\n      </div>\n      <div class=\"information\">\n      <slot></slot>\n      </div>\n    </div>\n    "])), this.printHeaders());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        titles: {
          type: Array,
          attribute: false
        },
        ids: {
          type: Array,
          attribute: false
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _vertical_tab_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-vertical-tab', VerticalTab);

/***/ }),

/***/ "./src/js/components/vertical-tab/vertical-tab.css.js":
/*!************************************************************!*\
  !*** ./src/js/components/vertical-tab/vertical-tab.css.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n.full {\n    display: grid;\n    grid-template-columns: 26.9% 60px 1fr;\n    color: var(--il-panel-foreground-color);\n    padding: 60px 0 75px 0;\n    margin: 0 30px;\n    max-width: 1310px;\n}\n\n.title {\n    grid-column: 1 / span 3;\n    padding-bottom: 40px;\n}\n\n.headings button {\n    width: 100%;\n    display: block;\n    padding: 15px 20px;\n    background: var(--il-panel-background-color);\n    border: none;\n    color: var(--il-panel-foreground-color);\n    font-size: 1.1875rem;\n    font-weight: 700;\n    text-align: left;\n    border-bottom: var(--il-panel-border);\n    font-family: var(--il-font-sans);\n}\n\n.headings ul li:first-child button {\n    border-top: var(--il-panel-border);\n}\n\n.headings button:focus, .headings button:hover {\n    color: var(--il-focused-panel-foreground-color);\n    background: var(--il-focused-panel-background-color);\n}\n\n.headings button[aria-expanded=\"true\"] {\n    background: var(--il-selected-panel-background-color);\n    color: var(--il-selected-panel-foreground-color);\n} \n\n.headings button[aria-expanded=\"true\"]:focus, .headings button[aria-expanded=\"true\"]:hover {\n    background: var(--il-selected-panel-background-color);\n    color: var(--il-selected-panel-foreground-color);\n} \n\n.headings ul, .headings ul li  {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.information {\n    grid-column: 3;\n}\n\n@media only screen and (max-width: 792px) {\n    .full {\n        display: block;\n        margin: 0 20px;\n    }\n    .headings {\n        display: none;\n    }\n}\n"]))));

/***/ }),

/***/ "./src/js/components/video-feature/video-feature.component.js":
/*!********************************************************************!*\
  !*** ./src/js/components/video-feature/video-feature.component.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _video_feature_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video-feature.css */ "./src/js/components/video-feature/video-feature.css.js");
/* harmony import */ var _video_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video-feature */ "./src/js/components/video-feature/video-feature.js");
/* harmony import */ var _video_feature__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_video_feature__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var VideoFeatureComponent = /*#__PURE__*/function (_LitElement) {
  function VideoFeatureComponent() {
    var _this;
    _classCallCheck(this, VideoFeatureComponent);
    _this = _callSuper(this, VideoFeatureComponent);
    _this.size = '';
    _this.src = undefined;
    _this.background = '';
    _this.align = '';
    _this.title = '';
    _this.view = '';
    return _this;
  }
  _inherits(VideoFeatureComponent, _LitElement);
  return _createClass(VideoFeatureComponent, [{
    key: "getIframe",
    value: function getIframe(url, title, view) {
      var urlHelper = new _video_feature__WEBPACK_IMPORTED_MODULE_2___default.a.UrlItem(url, view);
      if (urlHelper.videoType == "youtube") {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<iframe title='", "' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='", "' frameborder='0' allowfullscreen></iframe>"])), title, urlHelper.videoUrl);
      } else if (urlHelper.videoType == "mediaspace") {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<iframe title='", "' id='kaltura_player_", "' class='kmsembed' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='", "' style='float: left; margin: 10px 10px 10px 0;' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' frameborder='0'></iframe>"])), title, urlHelper.videoId, urlHelper.videoUrl);
      } else if (urlHelper.videoType == "vimeo") {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<iframe title='", "' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='", "' frameborder='0' allowfullscreen></iframe>"])), title, urlHelper.videoUrl);
      }
      return '';
    }
  }, {
    key: "renderVideo",
    value: function renderVideo() {
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<div style=\"width: 100%; align-self: center;\"><div class='videowrapper'>", "</div></div>"])), this.getIframe(this.src, this.title, this.view));
    }
  }, {
    key: "render",
    value: function render() {
      if (this.previousElementSibling != null && this.previousElementSibling.localName == "il-video-feature" && this.previousElementSibling.getAttribute('align') == null && this.align == '') {
        this.setAttribute('align', 'right');
      }
      var contentClass = this.background == 'solid' || this.background == 'blue' ? 'content solid' : this.background == 'white' ? 'content' : this.background == 'orange' ? 'content orange' : this.background == 'gray' ? 'content white gray' : 'content gradient';
      var backgroundClass = this.background == 'solid' || this.background == 'blue' ? 'background solid' : this.background == 'white' ? 'background' : this.background == 'orange' ? 'background orange' : this.background == 'gray' ? 'background gray' : 'background gradient';
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        <div class=\"videofeature ", " ", "\">\n            <div class=\"", "\">", "</div>\n            <div class=\"", "\">\n                <slot></slot>\n            </div>\n        </div>"])), this.align, this.size, backgroundClass, this.renderVideo(), contentClass);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        size: {
          type: String,
          attribute: true
        },
        background: {
          type: String,
          attribute: true
        },
        src: {
          type: String,
          attribute: true
        },
        align: {
          type: String,
          attribute: true
        },
        title: {
          type: String,
          attribute: true
        },
        view: {
          type: String,
          attribute: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _video_feature_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-video-feature', VideoFeatureComponent);

/***/ }),

/***/ "./src/js/components/video-feature/video-feature.css.js":
/*!**************************************************************!*\
  !*** ./src/js/components/video-feature/video-feature.css.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .videofeature {\n        display: block;\n    }\n    .videofeature.right {\n        --il-image-feature-flex-direction: row-reverse;\n    }\n    .videofeature.large {\n        --il-image-feature-flex-grow-image: 2;\n    }\n    .videofeature.small {\n        --il-image-feature-flex-grow-content: 2;\n    }\n    .videofeature .background {\n        padding: 0;\n        background: black;\n    }\n    .videofeature .content {\n        padding: 1.875rem 1.25rem;\n        text-align: left;\n        color: var(--il-image-feature-color);\n        background: var(--il-image-feature-background);\n    }\n    .videofeature .content.orange {\n        color: white;\n        background: var(--il-gradient-orange);\n    }\n    .videofeature .content.solid, .videofeature .background.solid  {\n        color: white;\n        background: var(--il-blue);\n    }\n    .videofeature .content.gray, .videofeature .background.gray  {\n        background: var(--il-gray-1);\n    }\n    .videofeature .background {\n        display: flex;\n        flex-grow: var(--il-image-feature-flex-grow-image);\n        flex-shrink: 1;\n        flex-basis: 0;\n    }\n    .videofeature .content {\n        flex-grow: var(--il-image-feature-flex-grow-content);\n        flex-shrink: 1;\n        flex-basis: 0;\n    }\n\n    .videowrapper {\n        position: relative; \n        padding-bottom: 56.25%; \n        height: 0;\n    }\n    @media (min-width: 900px) {\n        .videofeature {\n            display: flex;\n            flex-direction: var(--il-image-feature-flex-direction);\n        }\n        .videofeature .content {\n            padding: 1.875rem;\n        }\n        .videowrapper {\n            padding-bottom: 100%; \n        }\n    }\n    @media (min-width: 993px) {\n        .videofeature .content {\n            padding: 3rem 2.2vw;\n        }\n    }\n    @media (min-width: 1450px) {\n        .videofeature .content {\n            padding: 3rem 6rem;\n        }\n        .videowrapper {\n            padding-bottom: 56.25%; \n        }\n    }\n"]))));

/***/ }),

/***/ "./src/js/components/video-feature/video-feature.js":
/*!**********************************************************!*\
  !*** ./src/js/components/video-feature/video-feature.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var Item = /*#__PURE__*/_createClass(function Item() {
  "use strict";

  _classCallCheck(this, Item);
});
var UrlItem = /*#__PURE__*/function (_Item) {
  "use strict";

  function UrlItem(url, view) {
    var _this;
    _classCallCheck(this, UrlItem);
    _this = _callSuper(this, UrlItem);
    _this._videoId = url.split("/").pop();
    _this._videoCode = '26883701';
    _this._videoType = '';
    _this._videoUrl = '';
    var urlLowerCase = url.toLowerCase();
    if (urlLowerCase.includes("youtube") || urlLowerCase.includes("youtu.be")) {
      var youTubeV = url.split("v=");
      if (youTubeV.length > 1) {
        _this._videoId = youTubeV[1];
      }
      _this._videoType = "youtube";
      _this._videoUrl = "https://www.youtube.com/embed/".concat(_this._videoId);
    } else if (urlLowerCase.includes("mediaspace")) {
      if (view == "vertical") {
        _this._videoCode = '44666331';
      }
      _this._videoType = "mediaspace";
      if (urlLowerCase.includes("embed/secure")) {
        _this._videoCode = _this._videoId;
        var urlArray = url.split("/");
        _this._videoId = urlArray[urlArray.length - 3];
      }
      _this._videoUrl = "https://mediaspace.illinois.edu/embed/secure/iframe/entryId/".concat(_this._videoId, "/uiConfId/").concat(_this._videoCode);
    } else if (urlLowerCase.includes("vimeo")) {
      _this._videoType = "vimeo";
      _this._videoUrl = "https://player.vimeo.com/video/".concat(_this._videoId);
    }
    return _this;
  }
  _inherits(UrlItem, _Item);
  return _createClass(UrlItem, [{
    key: "videoType",
    get: function get() {
      return this._videoType;
    }
  }, {
    key: "videoId",
    get: function get() {
      return this._videoId;
    }
  }, {
    key: "videoCode",
    get: function get() {
      return this._videoCode;
    }
  }, {
    key: "videoUrl",
    get: function get() {
      return this._videoUrl;
    }
  }]);
}(Item);
module.exports = {
  UrlItem: UrlItem
};

/***/ }),

/***/ "./src/js/components/video/video.component.js":
/*!****************************************************!*\
  !*** ./src/js/components/video/video.component.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _video_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.css */ "./src/js/components/video/video.css.js");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./video */ "./src/js/components/video/video.js");
/* harmony import */ var _video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_video__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var VideoComponent = /*#__PURE__*/function (_LitElement) {
  function VideoComponent() {
    var _this;
    _classCallCheck(this, VideoComponent);
    _this = _callSuper(this, VideoComponent);
    _this.aspectratio = '';
    _this.src = undefined;
    _this.title = '';
    return _this;
  }
  _inherits(VideoComponent, _LitElement);
  return _createClass(VideoComponent, [{
    key: "getIframe",
    value: function getIframe(url, title, view) {
      var urlHelper = new _video__WEBPACK_IMPORTED_MODULE_2___default.a.UrlItem(url, view);
      if (urlHelper.videoType == "youtube") {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["<iframe title='", " (video)' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='", "' frameborder='0' allowfullscreen></iframe>"])), title, urlHelper.videoUrl);
      } else if (urlHelper.videoType == "mediaspace") {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<iframe title='", " (video)' id='kaltura_player_", "' class='kmsembed' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='", "' style='float: left; margin: 10px 10px 10px 0;' allowfullscreen webkitallowfullscreen mozAllowFullScreen allow='autoplay *; fullscreen *; encrypted-media *' frameborder='0'></iframe>"])), title, urlHelper.videoId, urlHelper.videoUrl);
      } else if (urlHelper.videoType == "vimeo") {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<iframe title='", " (video)' style='position: absolute; top: 0; left: 0; width: 100%; height: 100%;' src='", "' frameborder='0' allowfullscreen></iframe>"])), title, urlHelper.videoUrl);
      } else if (urlHelper.videoType == "blank") {
        return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<div style='position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: black; color: white; display: flex; justify-content: center; align-items: center; font-weight: bold;'>", "</div>"])), title);
      } else {
        return '';
      }
    }
  }, {
    key: "render",
    value: function render() {
      var getAspectRatio = getComputedStyle(this).getPropertyValue('--il-video-aspect-ratio').trim();
      var padding = '56.25%';
      if (getAspectRatio == 'vertical') {
        padding = '177.78%';
      } else if (getAspectRatio == 'tv') {
        padding = '75%';
      } else if (getAspectRatio.endsWith('%')) {
        padding = getAspectRatio;
      } else if (getAspectRatio.includes('/')) {
        var items = getAspectRatio.split('/');
        padding = parseInt(items[1].replace("'", "")) / parseInt(items[0].replace("'", "")) * 100 + '%';
      }
      return Object(lit__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      <div class=\"videowrapper-width\" style=\"\"><div class=\"videowrapper-full\"><div class='videowrapper' style='padding-bottom: ", "'>", "</div></div></div>"])), padding, this.getIframe(this.src, this.title, this.view));
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        src: {
          type: String,
          attribute: true
        },
        title: {
          type: String,
          attribute: true
        }
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return _video_css__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }]);
}(lit__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
customElements.define('il-video', VideoComponent);

/***/ }),

/***/ "./src/js/components/video/video.css.js":
/*!**********************************************!*\
  !*** ./src/js/components/video/video.css.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
var _templateObject;
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }

/* harmony default export */ __webpack_exports__["default"] = (Object(lit__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n.videowrapper-width {\n    width: var(--il-video-max-width);\n    margin: var(--il-video-margin);\n}\n.videowrapper-full {\n    width: 100%; \n    align-self: center;\n}\n.videowrapper {\n    position: relative; \n    height: 0;\n}\n"]))));

/***/ }),

/***/ "./src/js/components/video/video.js":
/*!******************************************!*\
  !*** ./src/js/components/video/video.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var Item = /*#__PURE__*/_createClass(function Item() {
  "use strict";

  _classCallCheck(this, Item);
});
var UrlItem = /*#__PURE__*/function (_Item) {
  "use strict";

  function UrlItem(url, view) {
    var _this;
    _classCallCheck(this, UrlItem);
    _this = _callSuper(this, UrlItem);
    _this._videoId = url.split("/").pop();
    _this._videoCode = '26883701';
    _this._videoType = '';
    _this._videoUrl = '';
    var urlLowerCase = url.toLowerCase();
    if (urlLowerCase == '') {
      _this._videoType = "blank";
    } else if (urlLowerCase.includes("youtube") || urlLowerCase.includes("youtu.be")) {
      var youTubeV = url.split("v=");
      if (youTubeV.length > 1) {
        _this._videoId = youTubeV[1];
      }
      _this._videoType = "youtube";
      _this._videoUrl = "https://www.youtube.com/embed/".concat(_this._videoId);
    } else if (urlLowerCase.includes("mediaspace")) {
      if (view == "vertical") {
        _this._videoCode = '44666331';
      }
      _this._videoType = "mediaspace";
      if (urlLowerCase.includes("embed/secure")) {
        _this._videoCode = _this._videoId;
        var urlArray = url.split("/");
        _this._videoId = urlArray[urlArray.length - 3];
      }
      _this._videoUrl = "https://mediaspace.illinois.edu/embed/secure/iframe/entryId/".concat(_this._videoId, "/uiConfId/").concat(_this._videoCode);
    } else if (urlLowerCase.includes("vimeo")) {
      _this._videoType = "vimeo";
      _this._videoUrl = "https://player.vimeo.com/video/".concat(_this._videoId);
    }
    return _this;
  }
  _inherits(UrlItem, _Item);
  return _createClass(UrlItem, [{
    key: "videoType",
    get: function get() {
      return this._videoType;
    }
  }, {
    key: "videoId",
    get: function get() {
      return this._videoId;
    }
  }, {
    key: "videoCode",
    get: function get() {
      return this._videoCode;
    }
  }, {
    key: "videoUrl",
    get: function get() {
      return this._videoUrl;
    }
  }]);
}(Item);
module.exports = {
  UrlItem: UrlItem
};

/***/ }),

/***/ "./src/js/debug.js":
/*!*************************!*\
  !*** ./src/js/debug.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
module.exports = /*#__PURE__*/function () {
  "use strict";

  function Debugger() {
    _classCallCheck(this, Debugger);
  }
  return _createClass(Debugger, null, [{
    key: "isActive",
    value: function isActive() {
      return document.documentElement.getAttribute('data-il-debug') === 'true';
    }
  }, {
    key: "warn",
    value: function warn(message) {
      if (Debugger.isActive()) {
        console.warn(message);
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_toolkit_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/toolkit.scss */ "./src/css/toolkit.scss");
/* harmony import */ var _css_toolkit_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_toolkit_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/accordion/accordion */ "./src/js/components/accordion/accordion.js");
/* harmony import */ var _components_accordion_accordion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_accordion_accordion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accordion/accordion.component */ "./src/js/components/accordion/accordion.component.js");
/* harmony import */ var _components_accordion_panel_accordion_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/accordion-panel/accordion-panel.component */ "./src/js/components/accordion-panel/accordion-panel.component.js");
/* harmony import */ var _components_back_to_top_back_to_top_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/back-to-top/back-to-top.component */ "./src/js/components/back-to-top/back-to-top.component.js");
/* harmony import */ var _components_breadcrumbs_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/breadcrumbs/page.component */ "./src/js/components/breadcrumbs/page.component.js");
/* harmony import */ var _components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/breadcrumbs/breadcrumbs.component */ "./src/js/components/breadcrumbs/breadcrumbs.component.js");
/* harmony import */ var _components_call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/call-to-action/call-to-action.component */ "./src/js/components/call-to-action/call-to-action.component.js");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/card/card.component */ "./src/js/components/card/card.component.js");
/* harmony import */ var _components_clickable_card_clickable_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/clickable-card/clickable-card.component */ "./src/js/components/clickable-card/clickable-card.component.js");
/* harmony import */ var _components_directory_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/directory/card.component */ "./src/js/components/directory/card.component.js");
/* harmony import */ var _components_directory_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/directory/profile.component */ "./src/js/components/directory/profile.component.js");
/* harmony import */ var _components_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/gallery/gallery.component */ "./src/js/components/gallery/gallery.component.js");
/* harmony import */ var _components_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/gallery-detail/gallery-detail.component */ "./src/js/components/gallery-detail/gallery-detail.component.js");
/* harmony import */ var _components_gallery_item_gallery_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/gallery-item/gallery-item.component */ "./src/js/components/gallery-item/gallery-item.component.js");
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/hero/hero.component */ "./src/js/components/hero/hero.component.js");
/* harmony import */ var _components_image_feature_image_feature_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/image-feature/image-feature.component */ "./src/js/components/image-feature/image-feature.component.js");
/* harmony import */ var _components_introduction_introduction_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/introduction/introduction.component */ "./src/js/components/introduction/introduction.component.js");
/* harmony import */ var _components_layout_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/layout/page.component */ "./src/js/components/layout/page.component.js");
/* harmony import */ var _components_layout_section_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/layout/section.component */ "./src/js/components/layout/section.component.js");
/* harmony import */ var _components_layout_section_with_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/layout/section-with-sidebar.component */ "./src/js/components/layout/section-with-sidebar.component.js");
/* harmony import */ var _components_lede_lede_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/lede/lede.component */ "./src/js/components/lede/lede.component.js");
/* harmony import */ var _components_link_link__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/link/link */ "./src/js/components/link/link.js");
/* harmony import */ var _components_link_link__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_components_link_link__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _components_page_title_page_title_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/page-title/page-title.component */ "./src/js/components/page-title/page-title.component.js");
/* harmony import */ var _components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/pagination/pagination.component */ "./src/js/components/pagination/pagination.component.js");
/* harmony import */ var _components_quote_quote_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/quote/quote.component */ "./src/js/components/quote/quote.component.js");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/search/search.component */ "./src/js/components/search/search.component.js");
/* harmony import */ var _components_section_nav_section_nav_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/section-nav/section-nav.component */ "./src/js/components/section-nav/section-nav.component.js");
/* harmony import */ var _components_statistic_statistic__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/statistic/statistic */ "./src/js/components/statistic/statistic.js");
/* harmony import */ var _components_unit_wordmark_unit_wordmark_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/unit-wordmark/unit-wordmark.component */ "./src/js/components/unit-wordmark/unit-wordmark.component.js");
/* harmony import */ var _components_vertical_tab_vertical_tab_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/vertical-tab/vertical-tab.component */ "./src/js/components/vertical-tab/vertical-tab.component.js");
/* harmony import */ var _components_vertical_tab_panel_vertical_tab_panel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/vertical-tab-panel/vertical-tab-panel.component */ "./src/js/components/vertical-tab-panel/vertical-tab-panel.component.js");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/video/video.component */ "./src/js/components/video/video.component.js");
/* harmony import */ var _components_video_feature_video_feature_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/video-feature/video-feature.component */ "./src/js/components/video-feature/video-feature.component.js");



































/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BsaXQvcmVhY3RpdmUtZWxlbWVudC9jc3MtdGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGl0L3JlYWN0aXZlLWVsZW1lbnQvcmVhY3RpdmUtZWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWVsZW1lbnQvbGl0LWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2lzLXNlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3Rvb2xraXQuc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWwvYWNjb3JkaW9uLXBhbmVsLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hY2NvcmRpb24tcGFuZWwvYWNjb3JkaW9uLXBhbmVsLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2JhY2stdG8tdG9wL2JhY2stdG8tdG9wLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9iYWNrLXRvLXRvcC9iYWNrLXRvLXRvcC5jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9icmVhZGNydW1icy9wYWdlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9icmVhZGNydW1icy9wYWdlLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jYWxsLXRvLWFjdGlvbi9jYWxsLXRvLWFjdGlvbi5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2FsbC10by1hY3Rpb24vY2FsbC10by1hY3Rpb24uY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9jbGlja2FibGUtY2FyZC9jbGlja2FibGUtY2FyZC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvY2xpY2thYmxlLWNhcmQvY2xpY2thYmxlLWNhcmQuY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RpcmVjdG9yeS9jYXJkLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9kaXJlY3RvcnkvY2FyZC5jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZGlyZWN0b3J5L3Byb2ZpbGUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2RpcmVjdG9yeS9wcm9maWxlLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9nYWxsZXJ5LWRldGFpbC9nYWxsZXJ5LWRldGFpbC5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2FsbGVyeS1kZXRhaWwvZ2FsbGVyeS1kZXRhaWwuY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2dhbGxlcnktaXRlbS9nYWxsZXJ5LWl0ZW0uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2dhbGxlcnktaXRlbS9nYWxsZXJ5LWl0ZW0uY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9oZXJvL2FsaWdubWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2hlcm8vaGVyby5jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaW1hZ2UtZmVhdHVyZS9pbWFnZS1mZWF0dXJlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9pbWFnZS1mZWF0dXJlL2ltYWdlLWZlYXR1cmUuY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2ludHJvZHVjdGlvbi9pbnRyb2R1Y3Rpb24uY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC9wYWdlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvcGFnZS5jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbGF5b3V0L3Jlc3BvbnNpdmUtbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC9zZWN0aW9uLXdpdGgtc2lkZWJhci5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbGF5b3V0L3NlY3Rpb24td2l0aC1zaWRlYmFyLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9sYXlvdXQvc2VjdGlvbi5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbGF5b3V0L3NlY3Rpb24uY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2xlZGUvbGVkZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvbGVkZS9sZWRlLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9saW5rL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcGFnZS10aXRsZS9wYWdlLXRpdGxlLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wYWdlLXRpdGxlL3BhZ2UtdGl0bGUuY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvcXVvdGUvcXVvdGUuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3F1b3RlL3F1b3RlLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy9zZWN0aW9uLW5hdi9zZWN0aW9uLW5hdi5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvc2VjdGlvbi1uYXYvc2VjdGlvbi1uYXYuY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3N0YXRpc3RpYy9zdGF0aXN0aWMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdW5pdC13b3JkbWFyay91bml0LXdvcmRtYXJrLmNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy91bml0LXdvcmRtYXJrL3VuaXQtd29yZG1hcmsuY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3ZlcnRpY2FsLXRhYi1wYW5lbC92ZXJ0aWNhbC10YWItcGFuZWwuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3ZlcnRpY2FsLXRhYi1wYW5lbC92ZXJ0aWNhbC10YWItcGFuZWwuY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3ZlcnRpY2FsLXRhYi92ZXJ0aWNhbC10YWIuY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3ZlcnRpY2FsLXRhYi92ZXJ0aWNhbC10YWIuY3NzLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3ZpZGVvLWZlYXR1cmUvdmlkZW8tZmVhdHVyZS5jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdmlkZW8tZmVhdHVyZS92aWRlby1mZWF0dXJlLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy92aWRlby1mZWF0dXJlL3ZpZGVvLWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvdmlkZW8vdmlkZW8uY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3ZpZGVvL3ZpZGVvLmNzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy92aWRlby92aWRlby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkFjY29yZGlvblBhbmVsIiwiX0xpdEVsZW1lbnQiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jYWxsU3VwZXIiLCJvcGVuIiwiX2luaGVyaXRzIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJjb2xsYXBzZSIsInVwZGF0ZUhlYWRlciIsImUiLCJjaGlsZE5vZGUiLCJ0YXJnZXQiLCJhc3NpZ25lZE5vZGVzIiwiZmxhdHRlbiIsImhlYWRlclRhZ05hbWUiLCJ0YWdOYW1lIiwiaGVhZGVyVGl0bGUiLCJpbm5lclRleHQiLCJpZCIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsImJ1dHRvbklkIiwicGFuZWxJZCIsInRyaWdnZXJFeHBhbmQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJmaXJzdFVwZGF0ZWQiLCJfdGhpczIiLCJzaGFkb3dSb290IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJDaGV2cm9uIiwiaHRtbCIsIl90ZW1wbGF0ZU9iamVjdCIsIl90YWdnZWRUZW1wbGF0ZUxpdGVyYWwiLCJyZW5kZXIiLCJfdGVtcGxhdGVPYmplY3QyIiwiX3RlbXBsYXRlT2JqZWN0MyIsIl90ZW1wbGF0ZU9iamVjdDQiLCJfdGVtcGxhdGVPYmplY3Q1IiwiX3RlbXBsYXRlT2JqZWN0NiIsIl90ZW1wbGF0ZU9iamVjdDciLCJnZXQiLCJ0eXBlIiwiU3RyaW5nIiwiQm9vbGVhbiIsImF0dHJpYnV0ZSIsInJlZmxlY3QiLCJzdHlsZXMiLCJMaXRFbGVtZW50IiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJjc3MiLCJBY2NvcmRpb24iLCJzaW5nbGUiLCJkb2N1bWVudCIsImhhbmRsZUNvbnRlbnRMb2FkZWQiLCJiaW5kIiwiZXZ0IiwiZ2V0UGFuZWxzIiwiZm9yRWFjaCIsInNlY3Rpb24iLCJjb2xsYXBzZVBhbmVscyIsInJlbW92ZUF0dHJpYnV0ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ3aW5kb3ciLCJldmVudCIsIml0ZW0iLCJhY2NvcmRpb25QYXJlbnQiLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJkZXRhaWwiLCJtZWRpYVF1ZXJ5TGlzdCIsIm1hdGNoTWVkaWEiLCJhZGQiLCJyZW1vdmUiLCJzZXRBdHRyaWJ1dGUiLCJCYWNrVG9Ub3AiLCJhbHQiLCJleHBlY3RlZFBvc2l0aW9uQWZ0ZXJTY3JvbGwiLCJjb250aW51ZVNjcm9sbCIsImhhbmRsZVNjcm9sbCIsImNvbm5lY3RlZENhbGxiYWNrIiwiX3N1cGVyUHJvcEdldCIsImlzVG9wT2ZQYWdlIiwiaXNJbkV4cGVjdGVkUG9zaXRpb24iLCJzY3JvbGxUb1RvcCIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldEJ1dHRvbiIsImdldEZvbGRQb3NpdGlvbiIsImlubmVySGVpZ2h0IiwiZ2V0TmV4dFNjcm9sbFBvc2l0aW9uIiwiTWF0aCIsIm1heCIsImdldFRvcE9mUGFnZSIsImdldFNjcm9sbFBvc2l0aW9uIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJnZXRFbGVtZW50QnlJZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJibHVyIiwiaXNCZWxvd0ZvbGQiLCJqdW1wVG9Gb2xkIiwic3RhcnRTY3JvbGxUb1RvcCIsInVwZGF0ZUJ1dHRvbiIsImlzTmVhclRvcE9mUGFnZSIsInNjcm9sbFRvIiwic2V0VGltZW91dCIsInJlbmRlckljb24iLCJCcmVhZGNydW1icyIsImxhYmVsIiwiQnJlYWRjcnVtYnNQYWdlIiwiaHJlZiIsImhhc0xpbmsiLCJpc0N1cnJlbnRQYWdlIiwiY3VycmVudCIsInVuZGVmaW5lZCIsInJlbmRlckxhYmVsIiwicmVuZGVyTGluayIsIkNhbGxUb0FjdGlvbiIsImNsZWFySWNvbiIsImFsaWdubWVudENsYXNzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJ0cmltIiwiQ2FyZCIsImxpbmsiLCJlbGVtZW50SXNMaW5rIiwiZWxlbSIsImdldExpbmtFbGVtZW50IiwiaGFzTGlua0VsZW1lbnQiLCJpc0xpbmsiLCJjbGljayIsIkNsaWNrYWJsZUNhcmQiLCJzcmMiLCJiYWNrZ3JvdW5kIiwid2lkdGgiLCJoaWdobGlnaHQiLCJyZW5kZXJIaWRkZW5QYXJhZ3JhcGgiLCJyZW1vdmVIaWRkZW5JbmZvcm1hdGlvbiIsInJlbW92ZU5vUGljdHVyZSIsImNvbnRlbnRDbGFzcyIsIndpZHRoU3R5bGUiLCJjb25jYXQiLCJpZEluZm8iLCJyYW5kb20iLCJfY2xpY2siLCJfaGlnbGlnaHQiLCJfdG9uZWRvd24iLCJsb2NhdGlvbiIsIlByb2ZpbGVDYXJkIiwiYXJndW1lbnRzIiwiUHJvZmlsZSIsIkdhbGxlcnlEZXRhaWxDb21wb25lbnQiLCJob21lIiwicHJldmlvdXMiLCJuZXh0IiwicmVuZGVySG9tZSIsInJlbmRlck5hdmlnYXRpb24iLCJfdGVtcGxhdGVPYmplY3Q4IiwiR2FsbGVyeUl0ZW1Db21wb25lbnQiLCJHYWxsZXJ5Q29tcG9uZW50IiwibW9kdWxlIiwiZXhwb3J0cyIsIkFsaWdubWVudCIsInN0ciIsIngiLCJ5Iiwid29yZHMiLCJzcGxpdCIsImluY2x1ZGVzIiwiSGVybyIsImFsaWduIiwiY29sb3IiLCJoYXNBdHRyaWJ1dGUiLCJEZWJ1Z2dlciIsIndhcm4iLCJyZW5kZXJCYWNrZ3JvdW5kSW1hZ2UiLCJhbGlnbm1lbnQiLCJJbWFnZUZlYXR1cmVDb21wb25lbnQiLCJzaXplIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImxvY2FsTmFtZSIsIkludHJvZHVjdGlvbkNvbXBvbmVudCIsIlBhZ2VDb21wb25lbnQiLCJfUmVzcG9uc2l2ZUxheW91dCIsIm1vZGUiLCJuYW1lIiwibWF0Y2giLCJSZXNwb25zaXZlTGF5b3V0IiwiX21vZGUiLCJ1cGRhdGVNb2RlIiwic2V0IiwicmVxdWVzdFVwZGF0ZSIsInVwZGF0ZUNvbXBsZXRlIiwidGhlbiIsImRpc3BhdGNoTW9kZUNoYW5nZSIsIkN1c3RvbUV2ZW50IiwiZ2V0TW9kZXMiLCJjb25zdHJ1Y3RvciIsIm1vZGVzIiwibWF0Y2hNb2RlIiwibWF0Y2hlcyIsImZpbmQiLCJTZWN0aW9uV2l0aFNpZGViYXJDb21wb25lbnQiLCJTZWN0aW9uQ29tcG9uZW50IiwiTGVkZSIsInVwZGF0ZUxpbmsiLCJnZXRBdHRyaWJ1dGUiLCJpbm5lckhUTUwiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic3R5bGUiLCJkaXNwbGF5IiwiUGFnZVRpdGxlIiwiUGFnaW5hdGlvbkNvbXBvbmVudCIsInBhZ2UiLCJwYWdlcyIsInBhcmFtIiwidXJsIiwiZ2V0TmF2SXRlbXMiLCJuYXYiLCJQYWdpbmF0aW9uIiwiTmF2aWdhdGlvbiIsImN1cnJlbnRQYWdlIiwiaXRlbXMiLCJyZW5kZXJOYXZJdGVtIiwiRmlyc3RQYWdlTGluayIsIlByZXZpb3VzUGFnZUxpbmsiLCJOZXh0UGFnZUxpbmsiLCJMYXN0UGFnZUxpbmsiLCJDdXJyZW50UGFnZSIsInBhZ2VOdW1iZXIiLCJQYWdlTGluayIsIkVsbGlwc2lzIiwibWFwIiwiTnVtYmVyIiwiSXRlbSIsIl9JdGVtIiwiUGFnZSIsIl9JdGVtMiIsIl9wYWdlTnVtYmVyIiwiX1BhZ2UiLCJfUGFnZTIiLCJnZXRQYWdlVXJsIiwiX1BhZ2VMaW5rIiwiX1BhZ2VMaW5rMiIsIl9QYWdlTGluazMiLCJfUGFnZUxpbms0IiwiYmFzZVVybCIsInBhZ2VDb3VudCIsInBhZ2VQYXJhbU5hbWUiLCJsZW5ndGgiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJoYXMiLCJfY3VycmVudFBhZ2UiLCJudW1iZXIiLCJwYXJzZUludCIsIl90aGlzJGdldFZpc2libGVQYWdlUiIsImdldFZpc2libGVQYWdlUmFuZ2UiLCJzdGFydCIsImVuZCIsInB1c2giLCJjdXJyZW50UGFnZUl0ZW0iLCJnZXRQYWdlTGluayIsInVuc2hpZnQiLCJoYXNQcmV2aW91c1BhZ2VMaW5rIiwicHJldmlvdXNQYWdlTGluayIsImhhc05leHRQYWdlTGluayIsIm5leHRQYWdlTGluayIsImhhc0ZpcnN0UGFnZUxpbmsiLCJmaXJzdFBhZ2VMaW5rIiwiaGFzTGFzdFBhZ2VMaW5rIiwibGFzdFBhZ2VMaW5rIiwiX3BhZ2VDb3VudCIsInJhZGl1cyIsInNldFBhZ2VQYXJhbU5hbWUiLCJwYXJhbU5hbWUiLCJRdW90ZSIsInB1bGxxdW90ZSIsIlNlYXJjaCIsImFjdGlvbiIsImlucHV0SGFzRm9jdXMiLCJtZXRob2QiLCJwbGFjZWhvbGRlciIsInF1ZXJ5Iiwic2VhcmNobmFtZSIsImdldE5hbWUiLCJoYW5kbGVCdXR0b25CbHVyIiwiYnV0dG9uSGFzRm9jdXMiLCJoYW5kbGVCdXR0b25Gb2N1cyIsImhlYWRlciIsImdldEhlYWRlciIsImhhbmRsZUhlYWRlclZpZXdDaGFuZ2UiLCJoYW5kbGVJbnB1dEJsdXIiLCJoYW5kbGVJbnB1dEZvY3VzIiwiY2xvc2VzdCIsInJlbmRlclNlYXJjaEljb24iLCJjbGFzc05hbWVzIiwiam9pbiIsIlNlY3Rpb25OYXZpZ2F0aW9uIiwiY29tcGFjdCIsImV4cGFuZGVkIiwiaGFuZGxlVG9nZ2xlQ2xpY2siLCJoYW5kbGVEb2N1bWVudExvYWRlZCIsImdldExheW91dFNlY3Rpb24iLCJoYXNMYXlvdXRTZWN0aW9uIiwibGF5b3V0IiwiaGFuZGxlV2luZG93UmVzaXplIiwiU3RhdGlzdGljIiwiaGVpZ2h0IiwiYW5pbWF0ZWQiLCJvcmlnaW5hbFN0YXQiLCJhZGRPcmlnaW5hbFN0YXQiLCJzdGFydEFuaW1hdGlvbiIsImFuaW1hdGUiLCJicmVha3BvaW50IiwiVW5pdFdvcmRtYXJrIiwiaGFzQ29udGFpbmVyU3VwcG9ydCIsImNvbnNvbGUiLCJkZWJ1ZyIsImhhbmRsZVJlc2l6ZSIsImdldFdpZHRoIiwib2Zmc2V0V2lkdGgiLCJpc0NvbXBhY3QiLCJyZW5kZXJCbG9ja0kiLCJDU1MiLCJzdXBwb3J0cyIsIlZlcnRpY2FsVGFiUGFuZWwiLCJidWJibGVzIiwicmVuZGVySGVhZGluZyIsInJlbmRlckJvZHkiLCJfdGVtcGxhdGVPYmplY3Q5IiwiVmVydGljYWxUYWIiLCJ0aXRsZXMiLCJpZHMiLCJyZWZyZXNoUGFuZWxzIiwidHJpZ2dlckV4cGFuZENoaWxkIiwicmVuZGVyUm9vdCIsImJ1dHRvbiIsInByaW50SGVhZGVycyIsIl90aGlzMyIsInRpdGxlIiwiaSIsIkFycmF5IiwiVmlkZW9GZWF0dXJlQ29tcG9uZW50IiwidmlldyIsImdldElmcmFtZSIsInVybEhlbHBlciIsIlZpZGVvRmVhdHVyZSIsIlVybEl0ZW0iLCJ2aWRlb1R5cGUiLCJ2aWRlb1VybCIsInZpZGVvSWQiLCJyZW5kZXJWaWRlbyIsImJhY2tncm91bmRDbGFzcyIsIl92aWRlb0lkIiwicG9wIiwiX3ZpZGVvQ29kZSIsIl92aWRlb1R5cGUiLCJfdmlkZW9VcmwiLCJ1cmxMb3dlckNhc2UiLCJ5b3VUdWJlViIsInVybEFycmF5IiwiVmlkZW9Db21wb25lbnQiLCJhc3BlY3RyYXRpbyIsIlZpZGVvIiwiZ2V0QXNwZWN0UmF0aW8iLCJwYWRkaW5nIiwiZW5kc1dpdGgiLCJpc0FjdGl2ZSIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FB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LE9BQU8sRUFBUEE7QUFBUSxDQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkQ1QjlMLE1BQU0sQ0FBQ0MsT0FBTztFQUFBOztFQUFBLFNBQUFZLFNBQUE7SUFBQXJMLGVBQUEsT0FBQXFMLFFBQUE7RUFBQTtFQUFBLE9BQUFqTCxZQUFBLENBQUFpTCxRQUFBO0lBQUFoTCxHQUFBO0lBQUFDLEtBQUEsRUFFWixTQUFPb1gsUUFBUUEsQ0FBQSxFQUFHO01BQ2hCLE9BQU9uVSxRQUFRLENBQUM0QyxlQUFlLENBQUNtSCxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssTUFBTTtJQUMxRTtFQUFDO0lBQUFqTixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFPZ0wsSUFBSUEsQ0FBQ3FNLE9BQU8sRUFBRTtNQUNuQixJQUFJdE0sUUFBUSxDQUFDcU0sUUFBUSxDQUFDLENBQUMsRUFBRTtRQUN2Qm5ELE9BQU8sQ0FBQ2pKLElBQUksQ0FBQ3FNLE9BQU8sQ0FBQztNQUN2QjtJQUNGO0VBQUM7QUFBQSxHQUNGLEM7Ozs7Ozs7Ozs7OztBQ1hEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkI7QUFFYTtBQUNVO0FBQ1k7QUFDUjtBQUNQO0FBQ087QUFDTTtBQUNwQjtBQUNvQjtBQUNmO0FBQ0c7QUFDRjtBQUNjO0FBQ0o7QUFDaEI7QUFDa0I7QUFDRjtBQUNkO0FBQ0c7QUFDYTtBQUNsQjtBQUNWO0FBQ3NCO0FBQ0E7QUFDVjtBQUNFO0FBQ1U7QUFDZDtBQUNrQjtBQUNGO0FBQ1k7QUFDMUIiLCJmaWxlIjoidG9vbGtpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9pbmRleC5qc1wiKTtcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgdD13aW5kb3csZT10LlNoYWRvd1Jvb3QmJih2b2lkIDA9PT10LlNoYWR5Q1NTfHx0LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykmJlwiYWRvcHRlZFN0eWxlU2hlZXRzXCJpbiBEb2N1bWVudC5wcm90b3R5cGUmJlwicmVwbGFjZVwiaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUscz1TeW1ib2woKSxuPW5ldyBXZWFrTWFwO2NsYXNzIG97Y29uc3RydWN0b3IodCxlLG4pe2lmKHRoaXMuXyRjc3NSZXN1bHQkPSEwLG4hPT1zKXRocm93IEVycm9yKFwiQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC5cIik7dGhpcy5jc3NUZXh0PXQsdGhpcy50PWV9Z2V0IHN0eWxlU2hlZXQoKXtsZXQgdD10aGlzLm87Y29uc3Qgcz10aGlzLnQ7aWYoZSYmdm9pZCAwPT09dCl7Y29uc3QgZT12b2lkIDAhPT1zJiYxPT09cy5sZW5ndGg7ZSYmKHQ9bi5nZXQocykpLHZvaWQgMD09PXQmJigodGhpcy5vPXQ9bmV3IENTU1N0eWxlU2hlZXQpLnJlcGxhY2VTeW5jKHRoaXMuY3NzVGV4dCksZSYmbi5zZXQocyx0KSl9cmV0dXJuIHR9dG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5jc3NUZXh0fX1jb25zdCByPXQ9Pm5ldyBvKFwic3RyaW5nXCI9PXR5cGVvZiB0P3Q6dCtcIlwiLHZvaWQgMCxzKSxpPSh0LC4uLmUpPT57Y29uc3Qgbj0xPT09dC5sZW5ndGg/dFswXTplLnJlZHVjZSgoKGUscyxuKT0+ZSsodD0+e2lmKCEwPT09dC5fJGNzc1Jlc3VsdCQpcmV0dXJuIHQuY3NzVGV4dDtpZihcIm51bWJlclwiPT10eXBlb2YgdClyZXR1cm4gdDt0aHJvdyBFcnJvcihcIlZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiBcIit0K1wiLiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dCB0YWtlIGNhcmUgdG8gZW5zdXJlIHBhZ2Ugc2VjdXJpdHkuXCIpfSkocykrdFtuKzFdKSx0WzBdKTtyZXR1cm4gbmV3IG8obix0LHMpfSxTPShzLG4pPT57ZT9zLmFkb3B0ZWRTdHlsZVNoZWV0cz1uLm1hcCgodD0+dCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQ/dDp0LnN0eWxlU2hlZXQpKTpuLmZvckVhY2goKGU9Pntjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPXQubGl0Tm9uY2U7dm9pZCAwIT09byYmbi5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLG8pLG4udGV4dENvbnRlbnQ9ZS5jc3NUZXh0LHMuYXBwZW5kQ2hpbGQobil9KSl9LGM9ZT90PT50OnQ9PnQgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0Pyh0PT57bGV0IGU9XCJcIjtmb3IoY29uc3QgcyBvZiB0LmNzc1J1bGVzKWUrPXMuY3NzVGV4dDtyZXR1cm4gcihlKX0pKHQpOnQ7ZXhwb3J0e28gYXMgQ1NTUmVzdWx0LFMgYXMgYWRvcHRTdHlsZXMsaSBhcyBjc3MsYyBhcyBnZXRDb21wYXRpYmxlU3R5bGUsZSBhcyBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMsciBhcyB1bnNhZmVDU1N9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLXRhZy5qcy5tYXBcbiIsImltcG9ydHtnZXRDb21wYXRpYmxlU3R5bGUgYXMgdCxhZG9wdFN0eWxlcyBhcyBpfWZyb21cIi4vY3NzLXRhZy5qc1wiO2V4cG9ydHtDU1NSZXN1bHQsYWRvcHRTdHlsZXMsY3NzLGdldENvbXBhdGlibGVTdHlsZSxzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMsdW5zYWZlQ1NTfWZyb21cIi4vY3NzLXRhZy5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovdmFyIHM7Y29uc3QgZT13aW5kb3cscj1lLnRydXN0ZWRUeXBlcyxoPXI/ci5lbXB0eVNjcmlwdDpcIlwiLG89ZS5yZWFjdGl2ZUVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQsbj17dG9BdHRyaWJ1dGUodCxpKXtzd2l0Y2goaSl7Y2FzZSBCb29sZWFuOnQ9dD9oOm51bGw7YnJlYWs7Y2FzZSBPYmplY3Q6Y2FzZSBBcnJheTp0PW51bGw9PXQ/dDpKU09OLnN0cmluZ2lmeSh0KX1yZXR1cm4gdH0sZnJvbUF0dHJpYnV0ZSh0LGkpe2xldCBzPXQ7c3dpdGNoKGkpe2Nhc2UgQm9vbGVhbjpzPW51bGwhPT10O2JyZWFrO2Nhc2UgTnVtYmVyOnM9bnVsbD09PXQ/bnVsbDpOdW1iZXIodCk7YnJlYWs7Y2FzZSBPYmplY3Q6Y2FzZSBBcnJheTp0cnl7cz1KU09OLnBhcnNlKHQpfWNhdGNoKHQpe3M9bnVsbH19cmV0dXJuIHN9fSxhPSh0LGkpPT5pIT09dCYmKGk9PWl8fHQ9PXQpLGw9e2F0dHJpYnV0ZTohMCx0eXBlOlN0cmluZyxjb252ZXJ0ZXI6bixyZWZsZWN0OiExLGhhc0NoYW5nZWQ6YX0sZD1cImZpbmFsaXplZFwiO2NsYXNzIHUgZXh0ZW5kcyBIVE1MRWxlbWVudHtjb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5fJEVpPW5ldyBNYXAsdGhpcy5pc1VwZGF0ZVBlbmRpbmc9ITEsdGhpcy5oYXNVcGRhdGVkPSExLHRoaXMuXyRFbD1udWxsLHRoaXMuXyRFdSgpfXN0YXRpYyBhZGRJbml0aWFsaXplcih0KXt2YXIgaTt0aGlzLmZpbmFsaXplKCksKG51bGwhPT0oaT10aGlzLmgpJiZ2b2lkIDAhPT1pP2k6dGhpcy5oPVtdKS5wdXNoKHQpfXN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7dGhpcy5maW5hbGl6ZSgpO2NvbnN0IHQ9W107cmV0dXJuIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgoKGkscyk9Pntjb25zdCBlPXRoaXMuXyRFcChzLGkpO3ZvaWQgMCE9PWUmJih0aGlzLl8kRXYuc2V0KGUscyksdC5wdXNoKGUpKX0pKSx0fXN0YXRpYyBjcmVhdGVQcm9wZXJ0eSh0LGk9bCl7aWYoaS5zdGF0ZSYmKGkuYXR0cmlidXRlPSExKSx0aGlzLmZpbmFsaXplKCksdGhpcy5lbGVtZW50UHJvcGVydGllcy5zZXQodCxpKSwhaS5ub0FjY2Vzc29yJiYhdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkodCkpe2NvbnN0IHM9XCJzeW1ib2xcIj09dHlwZW9mIHQ/U3ltYm9sKCk6XCJfX1wiK3QsZT10aGlzLmdldFByb3BlcnR5RGVzY3JpcHRvcih0LHMsaSk7dm9pZCAwIT09ZSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMucHJvdG90eXBlLHQsZSl9fXN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IodCxpLHMpe3JldHVybntnZXQoKXtyZXR1cm4gdGhpc1tpXX0sc2V0KGUpe2NvbnN0IHI9dGhpc1t0XTt0aGlzW2ldPWUsdGhpcy5yZXF1ZXN0VXBkYXRlKHQscixzKX0sY29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITB9fXN0YXRpYyBnZXRQcm9wZXJ0eU9wdGlvbnModCl7cmV0dXJuIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZ2V0KHQpfHxsfXN0YXRpYyBmaW5hbGl6ZSgpe2lmKHRoaXMuaGFzT3duUHJvcGVydHkoZCkpcmV0dXJuITE7dGhpc1tkXT0hMDtjb25zdCB0PU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKTtpZih0LmZpbmFsaXplKCksdm9pZCAwIT09dC5oJiYodGhpcy5oPVsuLi50LmhdKSx0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzPW5ldyBNYXAodC5lbGVtZW50UHJvcGVydGllcyksdGhpcy5fJEV2PW5ldyBNYXAsdGhpcy5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikpe2NvbnN0IHQ9dGhpcy5wcm9wZXJ0aWVzLGk9Wy4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpLC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCldO2Zvcihjb25zdCBzIG9mIGkpdGhpcy5jcmVhdGVQcm9wZXJ0eShzLHRbc10pfXJldHVybiB0aGlzLmVsZW1lbnRTdHlsZXM9dGhpcy5maW5hbGl6ZVN0eWxlcyh0aGlzLnN0eWxlcyksITB9c3RhdGljIGZpbmFsaXplU3R5bGVzKGkpe2NvbnN0IHM9W107aWYoQXJyYXkuaXNBcnJheShpKSl7Y29uc3QgZT1uZXcgU2V0KGkuZmxhdCgxLzApLnJldmVyc2UoKSk7Zm9yKGNvbnN0IGkgb2YgZSlzLnVuc2hpZnQodChpKSl9ZWxzZSB2b2lkIDAhPT1pJiZzLnB1c2godChpKSk7cmV0dXJuIHN9c3RhdGljIF8kRXAodCxpKXtjb25zdCBzPWkuYXR0cmlidXRlO3JldHVybiExPT09cz92b2lkIDA6XCJzdHJpbmdcIj09dHlwZW9mIHM/czpcInN0cmluZ1wiPT10eXBlb2YgdD90LnRvTG93ZXJDYXNlKCk6dm9pZCAwfV8kRXUoKXt2YXIgdDt0aGlzLl8kRV89bmV3IFByb21pc2UoKHQ9PnRoaXMuZW5hYmxlVXBkYXRpbmc9dCkpLHRoaXMuXyRBTD1uZXcgTWFwLHRoaXMuXyRFZygpLHRoaXMucmVxdWVzdFVwZGF0ZSgpLG51bGw9PT0odD10aGlzLmNvbnN0cnVjdG9yLmgpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9PnQodGhpcykpKX1hZGRDb250cm9sbGVyKHQpe3ZhciBpLHM7KG51bGwhPT0oaT10aGlzLl8kRVMpJiZ2b2lkIDAhPT1pP2k6dGhpcy5fJEVTPVtdKS5wdXNoKHQpLHZvaWQgMCE9PXRoaXMucmVuZGVyUm9vdCYmdGhpcy5pc0Nvbm5lY3RlZCYmKG51bGw9PT0ocz10Lmhvc3RDb25uZWN0ZWQpfHx2b2lkIDA9PT1zfHxzLmNhbGwodCkpfXJlbW92ZUNvbnRyb2xsZXIodCl7dmFyIGk7bnVsbD09PShpPXRoaXMuXyRFUyl8fHZvaWQgMD09PWl8fGkuc3BsaWNlKHRoaXMuXyRFUy5pbmRleE9mKHQpPj4+MCwxKX1fJEVnKCl7dGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCgodCxpKT0+e3RoaXMuaGFzT3duUHJvcGVydHkoaSkmJih0aGlzLl8kRWkuc2V0KGksdGhpc1tpXSksZGVsZXRlIHRoaXNbaV0pfSkpfWNyZWF0ZVJlbmRlclJvb3QoKXt2YXIgdDtjb25zdCBzPW51bGwhPT0odD10aGlzLnNoYWRvd1Jvb3QpJiZ2b2lkIDAhPT10P3Q6dGhpcy5hdHRhY2hTaGFkb3codGhpcy5jb25zdHJ1Y3Rvci5zaGFkb3dSb290T3B0aW9ucyk7cmV0dXJuIGkocyx0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRTdHlsZXMpLHN9Y29ubmVjdGVkQ2FsbGJhY2soKXt2YXIgdDt2b2lkIDA9PT10aGlzLnJlbmRlclJvb3QmJih0aGlzLnJlbmRlclJvb3Q9dGhpcy5jcmVhdGVSZW5kZXJSb290KCkpLHRoaXMuZW5hYmxlVXBkYXRpbmcoITApLG51bGw9PT0odD10aGlzLl8kRVMpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdENvbm5lY3RlZCl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKX1lbmFibGVVcGRhdGluZyh0KXt9ZGlzY29ubmVjdGVkQ2FsbGJhY2soKXt2YXIgdDtudWxsPT09KHQ9dGhpcy5fJEVTKXx8dm9pZCAwPT09dHx8dC5mb3JFYWNoKCh0PT57dmFyIGk7cmV0dXJuIG51bGw9PT0oaT10Lmhvc3REaXNjb25uZWN0ZWQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmNhbGwodCl9KSl9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHQsaSxzKXt0aGlzLl8kQUsodCxzKX1fJEVPKHQsaSxzPWwpe3ZhciBlO2NvbnN0IHI9dGhpcy5jb25zdHJ1Y3Rvci5fJEVwKHQscyk7aWYodm9pZCAwIT09ciYmITA9PT1zLnJlZmxlY3Qpe2NvbnN0IGg9KHZvaWQgMCE9PShudWxsPT09KGU9cy5jb252ZXJ0ZXIpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnRvQXR0cmlidXRlKT9zLmNvbnZlcnRlcjpuKS50b0F0dHJpYnV0ZShpLHMudHlwZSk7dGhpcy5fJEVsPXQsbnVsbD09aD90aGlzLnJlbW92ZUF0dHJpYnV0ZShyKTp0aGlzLnNldEF0dHJpYnV0ZShyLGgpLHRoaXMuXyRFbD1udWxsfX1fJEFLKHQsaSl7dmFyIHM7Y29uc3QgZT10aGlzLmNvbnN0cnVjdG9yLHI9ZS5fJEV2LmdldCh0KTtpZih2b2lkIDAhPT1yJiZ0aGlzLl8kRWwhPT1yKXtjb25zdCB0PWUuZ2V0UHJvcGVydHlPcHRpb25zKHIpLGg9XCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb252ZXJ0ZXI/e2Zyb21BdHRyaWJ1dGU6dC5jb252ZXJ0ZXJ9OnZvaWQgMCE9PShudWxsPT09KHM9dC5jb252ZXJ0ZXIpfHx2b2lkIDA9PT1zP3ZvaWQgMDpzLmZyb21BdHRyaWJ1dGUpP3QuY29udmVydGVyOm47dGhpcy5fJEVsPXIsdGhpc1tyXT1oLmZyb21BdHRyaWJ1dGUoaSx0LnR5cGUpLHRoaXMuXyRFbD1udWxsfX1yZXF1ZXN0VXBkYXRlKHQsaSxzKXtsZXQgZT0hMDt2b2lkIDAhPT10JiYoKChzPXN8fHRoaXMuY29uc3RydWN0b3IuZ2V0UHJvcGVydHlPcHRpb25zKHQpKS5oYXNDaGFuZ2VkfHxhKSh0aGlzW3RdLGkpPyh0aGlzLl8kQUwuaGFzKHQpfHx0aGlzLl8kQUwuc2V0KHQsaSksITA9PT1zLnJlZmxlY3QmJnRoaXMuXyRFbCE9PXQmJih2b2lkIDA9PT10aGlzLl8kRUMmJih0aGlzLl8kRUM9bmV3IE1hcCksdGhpcy5fJEVDLnNldCh0LHMpKSk6ZT0hMSksIXRoaXMuaXNVcGRhdGVQZW5kaW5nJiZlJiYodGhpcy5fJEVfPXRoaXMuXyRFaigpKX1hc3luYyBfJEVqKCl7dGhpcy5pc1VwZGF0ZVBlbmRpbmc9ITA7dHJ5e2F3YWl0IHRoaXMuXyRFX31jYXRjaCh0KXtQcm9taXNlLnJlamVjdCh0KX1jb25zdCB0PXRoaXMuc2NoZWR1bGVVcGRhdGUoKTtyZXR1cm4gbnVsbCE9dCYmYXdhaXQgdCwhdGhpcy5pc1VwZGF0ZVBlbmRpbmd9c2NoZWR1bGVVcGRhdGUoKXtyZXR1cm4gdGhpcy5wZXJmb3JtVXBkYXRlKCl9cGVyZm9ybVVwZGF0ZSgpe3ZhciB0O2lmKCF0aGlzLmlzVXBkYXRlUGVuZGluZylyZXR1cm47dGhpcy5oYXNVcGRhdGVkLHRoaXMuXyRFaSYmKHRoaXMuXyRFaS5mb3JFYWNoKCgodCxpKT0+dGhpc1tpXT10KSksdGhpcy5fJEVpPXZvaWQgMCk7bGV0IGk9ITE7Y29uc3Qgcz10aGlzLl8kQUw7dHJ5e2k9dGhpcy5zaG91bGRVcGRhdGUocyksaT8odGhpcy53aWxsVXBkYXRlKHMpLG51bGw9PT0odD10aGlzLl8kRVMpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdFVwZGF0ZSl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKSx0aGlzLnVwZGF0ZShzKSk6dGhpcy5fJEVrKCl9Y2F0Y2godCl7dGhyb3cgaT0hMSx0aGlzLl8kRWsoKSx0fWkmJnRoaXMuXyRBRShzKX13aWxsVXBkYXRlKHQpe31fJEFFKHQpe3ZhciBpO251bGw9PT0oaT10aGlzLl8kRVMpfHx2b2lkIDA9PT1pfHxpLmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdFVwZGF0ZWQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmNhbGwodCl9KSksdGhpcy5oYXNVcGRhdGVkfHwodGhpcy5oYXNVcGRhdGVkPSEwLHRoaXMuZmlyc3RVcGRhdGVkKHQpKSx0aGlzLnVwZGF0ZWQodCl9XyRFaygpe3RoaXMuXyRBTD1uZXcgTWFwLHRoaXMuaXNVcGRhdGVQZW5kaW5nPSExfWdldCB1cGRhdGVDb21wbGV0ZSgpe3JldHVybiB0aGlzLmdldFVwZGF0ZUNvbXBsZXRlKCl9Z2V0VXBkYXRlQ29tcGxldGUoKXtyZXR1cm4gdGhpcy5fJEVffXNob3VsZFVwZGF0ZSh0KXtyZXR1cm4hMH11cGRhdGUodCl7dm9pZCAwIT09dGhpcy5fJEVDJiYodGhpcy5fJEVDLmZvckVhY2goKCh0LGkpPT50aGlzLl8kRU8oaSx0aGlzW2ldLHQpKSksdGhpcy5fJEVDPXZvaWQgMCksdGhpcy5fJEVrKCl9dXBkYXRlZCh0KXt9Zmlyc3RVcGRhdGVkKHQpe319dVtkXT0hMCx1LmVsZW1lbnRQcm9wZXJ0aWVzPW5ldyBNYXAsdS5lbGVtZW50U3R5bGVzPVtdLHUuc2hhZG93Um9vdE9wdGlvbnM9e21vZGU6XCJvcGVuXCJ9LG51bGw9PW98fG8oe1JlYWN0aXZlRWxlbWVudDp1fSksKG51bGwhPT0ocz1lLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zKSYmdm9pZCAwIT09cz9zOmUucmVhY3RpdmVFbGVtZW50VmVyc2lvbnM9W10pLnB1c2goXCIxLjYuM1wiKTtleHBvcnR7dSBhcyBSZWFjdGl2ZUVsZW1lbnQsbiBhcyBkZWZhdWx0Q29udmVydGVyLGEgYXMgbm90RXF1YWx9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RpdmUtZWxlbWVudC5qcy5tYXBcbiIsImltcG9ydHtSZWFjdGl2ZUVsZW1lbnQgYXMgdH1mcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtleHBvcnQqZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7aW1wb3J0e3JlbmRlciBhcyBlLG5vQ2hhbmdlIGFzIGl9ZnJvbVwibGl0LWh0bWxcIjtleHBvcnQqZnJvbVwibGl0LWh0bWxcIjtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL3ZhciBsLG87Y29uc3Qgcj10O2NsYXNzIHMgZXh0ZW5kcyB0e2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLnJlbmRlck9wdGlvbnM9e2hvc3Q6dGhpc30sdGhpcy5fJERvPXZvaWQgMH1jcmVhdGVSZW5kZXJSb290KCl7dmFyIHQsZTtjb25zdCBpPXN1cGVyLmNyZWF0ZVJlbmRlclJvb3QoKTtyZXR1cm4gbnVsbCE9PSh0PShlPXRoaXMucmVuZGVyT3B0aW9ucykucmVuZGVyQmVmb3JlKSYmdm9pZCAwIT09dHx8KGUucmVuZGVyQmVmb3JlPWkuZmlyc3RDaGlsZCksaX11cGRhdGUodCl7Y29uc3QgaT10aGlzLnJlbmRlcigpO3RoaXMuaGFzVXBkYXRlZHx8KHRoaXMucmVuZGVyT3B0aW9ucy5pc0Nvbm5lY3RlZD10aGlzLmlzQ29ubmVjdGVkKSxzdXBlci51cGRhdGUodCksdGhpcy5fJERvPWUoaSx0aGlzLnJlbmRlclJvb3QsdGhpcy5yZW5kZXJPcHRpb25zKX1jb25uZWN0ZWRDYWxsYmFjaygpe3ZhciB0O3N1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCksbnVsbD09PSh0PXRoaXMuXyREbyl8fHZvaWQgMD09PXR8fHQuc2V0Q29ubmVjdGVkKCEwKX1kaXNjb25uZWN0ZWRDYWxsYmFjaygpe3ZhciB0O3N1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCksbnVsbD09PSh0PXRoaXMuXyREbyl8fHZvaWQgMD09PXR8fHQuc2V0Q29ubmVjdGVkKCExKX1yZW5kZXIoKXtyZXR1cm4gaX19cy5maW5hbGl6ZWQ9ITAscy5fJGxpdEVsZW1lbnQkPSEwLG51bGw9PT0obD1nbG9iYWxUaGlzLmxpdEVsZW1lbnRIeWRyYXRlU3VwcG9ydCl8fHZvaWQgMD09PWx8fGwuY2FsbChnbG9iYWxUaGlzLHtMaXRFbGVtZW50OnN9KTtjb25zdCBuPWdsb2JhbFRoaXMubGl0RWxlbWVudFBvbHlmaWxsU3VwcG9ydDtudWxsPT1ufHxuKHtMaXRFbGVtZW50OnN9KTtjb25zdCBoPXtfJEFLOih0LGUsaSk9Pnt0Ll8kQUsoZSxpKX0sXyRBTDp0PT50Ll8kQUx9OyhudWxsIT09KG89Z2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnMpJiZ2b2lkIDAhPT1vP286Z2xvYmFsVGhpcy5saXRFbGVtZW50VmVyc2lvbnM9W10pLnB1c2goXCIzLjMuM1wiKTtleHBvcnR7cyBhcyBMaXRFbGVtZW50LHIgYXMgVXBkYXRpbmdFbGVtZW50LGggYXMgXyRMRX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtZWxlbWVudC5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3Qgbz0hMTtleHBvcnR7byBhcyBpc1NlcnZlcn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pcy1zZXJ2ZXIuanMubWFwXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbnZhciB0O2NvbnN0IGk9d2luZG93LHM9aS50cnVzdGVkVHlwZXMsZT1zP3MuY3JlYXRlUG9saWN5KFwibGl0LWh0bWxcIix7Y3JlYXRlSFRNTDp0PT50fSk6dm9pZCAwLG89XCIkbGl0JFwiLG49YGxpdCQkeyhNYXRoLnJhbmRvbSgpK1wiXCIpLnNsaWNlKDkpfSRgLGw9XCI/XCIrbixoPWA8JHtsfT5gLHI9ZG9jdW1lbnQsdT0oKT0+ci5jcmVhdGVDb21tZW50KFwiXCIpLGQ9dD0+bnVsbD09PXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0LGM9QXJyYXkuaXNBcnJheSx2PXQ9PmModCl8fFwiZnVuY3Rpb25cIj09dHlwZW9mKG51bGw9PXQ/dm9pZCAwOnRbU3ltYm9sLml0ZXJhdG9yXSksYT1cIlsgXFx0XFxuXFxmXFxyXVwiLGY9LzwoPzooIS0tfFxcL1teYS16QS1aXSl8KFxcLz9bYS16QS1aXVtePlxcc10qKXwoXFwvPyQpKS9nLF89Ly0tPi9nLG09Lz4vZyxwPVJlZ0V4cChgPnwke2F9KD86KFteXFxcXHNcIic+PS9dKykoJHthfSo9JHthfSooPzpbXiBcXHRcXG5cXGZcXHJcIidcXGA8Pj1dfChcInwnKXwpKXwkKWAsXCJnXCIpLGc9LycvZywkPS9cIi9nLHk9L14oPzpzY3JpcHR8c3R5bGV8dGV4dGFyZWF8dGl0bGUpJC9pLHc9dD0+KGksLi4ucyk9Pih7XyRsaXRUeXBlJDp0LHN0cmluZ3M6aSx2YWx1ZXM6c30pLHg9dygxKSxiPXcoMiksVD1TeW1ib2wuZm9yKFwibGl0LW5vQ2hhbmdlXCIpLEE9U3ltYm9sLmZvcihcImxpdC1ub3RoaW5nXCIpLEU9bmV3IFdlYWtNYXAsQz1yLmNyZWF0ZVRyZWVXYWxrZXIociwxMjksbnVsbCwhMSk7ZnVuY3Rpb24gUCh0LGkpe2lmKCFBcnJheS5pc0FycmF5KHQpfHwhdC5oYXNPd25Qcm9wZXJ0eShcInJhd1wiKSl0aHJvdyBFcnJvcihcImludmFsaWQgdGVtcGxhdGUgc3RyaW5ncyBhcnJheVwiKTtyZXR1cm4gdm9pZCAwIT09ZT9lLmNyZWF0ZUhUTUwoaSk6aX1jb25zdCBWPSh0LGkpPT57Y29uc3Qgcz10Lmxlbmd0aC0xLGU9W107bGV0IGwscj0yPT09aT9cIjxzdmc+XCI6XCJcIix1PWY7Zm9yKGxldCBpPTA7aTxzO2krKyl7Y29uc3Qgcz10W2ldO2xldCBkLGMsdj0tMSxhPTA7Zm9yKDthPHMubGVuZ3RoJiYodS5sYXN0SW5kZXg9YSxjPXUuZXhlYyhzKSxudWxsIT09Yyk7KWE9dS5sYXN0SW5kZXgsdT09PWY/XCIhLS1cIj09PWNbMV0/dT1fOnZvaWQgMCE9PWNbMV0/dT1tOnZvaWQgMCE9PWNbMl0/KHkudGVzdChjWzJdKSYmKGw9UmVnRXhwKFwiPC9cIitjWzJdLFwiZ1wiKSksdT1wKTp2b2lkIDAhPT1jWzNdJiYodT1wKTp1PT09cD9cIj5cIj09PWNbMF0/KHU9bnVsbCE9bD9sOmYsdj0tMSk6dm9pZCAwPT09Y1sxXT92PS0yOih2PXUubGFzdEluZGV4LWNbMl0ubGVuZ3RoLGQ9Y1sxXSx1PXZvaWQgMD09PWNbM10/cDonXCInPT09Y1szXT8kOmcpOnU9PT0kfHx1PT09Zz91PXA6dT09PV98fHU9PT1tP3U9ZjoodT1wLGw9dm9pZCAwKTtjb25zdCB3PXU9PT1wJiZ0W2krMV0uc3RhcnRzV2l0aChcIi8+XCIpP1wiIFwiOlwiXCI7cis9dT09PWY/cytoOnY+PTA/KGUucHVzaChkKSxzLnNsaWNlKDAsdikrbytzLnNsaWNlKHYpK24rdyk6cytuKygtMj09PXY/KGUucHVzaCh2b2lkIDApLGkpOncpfXJldHVybltQKHQscisodFtzXXx8XCI8Pz5cIikrKDI9PT1pP1wiPC9zdmc+XCI6XCJcIikpLGVdfTtjbGFzcyBOe2NvbnN0cnVjdG9yKHtzdHJpbmdzOnQsXyRsaXRUeXBlJDppfSxlKXtsZXQgaDt0aGlzLnBhcnRzPVtdO2xldCByPTAsZD0wO2NvbnN0IGM9dC5sZW5ndGgtMSx2PXRoaXMucGFydHMsW2EsZl09Vih0LGkpO2lmKHRoaXMuZWw9Ti5jcmVhdGVFbGVtZW50KGEsZSksQy5jdXJyZW50Tm9kZT10aGlzLmVsLmNvbnRlbnQsMj09PWkpe2NvbnN0IHQ9dGhpcy5lbC5jb250ZW50LGk9dC5maXJzdENoaWxkO2kucmVtb3ZlKCksdC5hcHBlbmQoLi4uaS5jaGlsZE5vZGVzKX1mb3IoO251bGwhPT0oaD1DLm5leHROb2RlKCkpJiZ2Lmxlbmd0aDxjOyl7aWYoMT09PWgubm9kZVR5cGUpe2lmKGguaGFzQXR0cmlidXRlcygpKXtjb25zdCB0PVtdO2Zvcihjb25zdCBpIG9mIGguZ2V0QXR0cmlidXRlTmFtZXMoKSlpZihpLmVuZHNXaXRoKG8pfHxpLnN0YXJ0c1dpdGgobikpe2NvbnN0IHM9ZltkKytdO2lmKHQucHVzaChpKSx2b2lkIDAhPT1zKXtjb25zdCB0PWguZ2V0QXR0cmlidXRlKHMudG9Mb3dlckNhc2UoKStvKS5zcGxpdChuKSxpPS8oWy4/QF0pPyguKikvLmV4ZWMocyk7di5wdXNoKHt0eXBlOjEsaW5kZXg6cixuYW1lOmlbMl0sc3RyaW5nczp0LGN0b3I6XCIuXCI9PT1pWzFdP0g6XCI/XCI9PT1pWzFdP0w6XCJAXCI9PT1pWzFdP3o6a30pfWVsc2Ugdi5wdXNoKHt0eXBlOjYsaW5kZXg6cn0pfWZvcihjb25zdCBpIG9mIHQpaC5yZW1vdmVBdHRyaWJ1dGUoaSl9aWYoeS50ZXN0KGgudGFnTmFtZSkpe2NvbnN0IHQ9aC50ZXh0Q29udGVudC5zcGxpdChuKSxpPXQubGVuZ3RoLTE7aWYoaT4wKXtoLnRleHRDb250ZW50PXM/cy5lbXB0eVNjcmlwdDpcIlwiO2ZvcihsZXQgcz0wO3M8aTtzKyspaC5hcHBlbmQodFtzXSx1KCkpLEMubmV4dE5vZGUoKSx2LnB1c2goe3R5cGU6MixpbmRleDorK3J9KTtoLmFwcGVuZCh0W2ldLHUoKSl9fX1lbHNlIGlmKDg9PT1oLm5vZGVUeXBlKWlmKGguZGF0YT09PWwpdi5wdXNoKHt0eXBlOjIsaW5kZXg6cn0pO2Vsc2V7bGV0IHQ9LTE7Zm9yKDstMSE9PSh0PWguZGF0YS5pbmRleE9mKG4sdCsxKSk7KXYucHVzaCh7dHlwZTo3LGluZGV4OnJ9KSx0Kz1uLmxlbmd0aC0xfXIrK319c3RhdGljIGNyZWF0ZUVsZW1lbnQodCxpKXtjb25zdCBzPXIuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO3JldHVybiBzLmlubmVySFRNTD10LHN9fWZ1bmN0aW9uIFModCxpLHM9dCxlKXt2YXIgbyxuLGwsaDtpZihpPT09VClyZXR1cm4gaTtsZXQgcj12b2lkIDAhPT1lP251bGw9PT0obz1zLl8kQ28pfHx2b2lkIDA9PT1vP3ZvaWQgMDpvW2VdOnMuXyRDbDtjb25zdCB1PWQoaSk/dm9pZCAwOmkuXyRsaXREaXJlY3RpdmUkO3JldHVybihudWxsPT1yP3ZvaWQgMDpyLmNvbnN0cnVjdG9yKSE9PXUmJihudWxsPT09KG49bnVsbD09cj92b2lkIDA6ci5fJEFPKXx8dm9pZCAwPT09bnx8bi5jYWxsKHIsITEpLHZvaWQgMD09PXU/cj12b2lkIDA6KHI9bmV3IHUodCksci5fJEFUKHQscyxlKSksdm9pZCAwIT09ZT8obnVsbCE9PShsPShoPXMpLl8kQ28pJiZ2b2lkIDAhPT1sP2w6aC5fJENvPVtdKVtlXT1yOnMuXyRDbD1yKSx2b2lkIDAhPT1yJiYoaT1TKHQsci5fJEFTKHQsaS52YWx1ZXMpLHIsZSkpLGl9Y2xhc3MgTXtjb25zdHJ1Y3Rvcih0LGkpe3RoaXMuXyRBVj1bXSx0aGlzLl8kQU49dm9pZCAwLHRoaXMuXyRBRD10LHRoaXMuXyRBTT1pfWdldCBwYXJlbnROb2RlKCl7cmV0dXJuIHRoaXMuXyRBTS5wYXJlbnROb2RlfWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfXUodCl7dmFyIGk7Y29uc3R7ZWw6e2NvbnRlbnQ6c30scGFydHM6ZX09dGhpcy5fJEFELG89KG51bGwhPT0oaT1udWxsPT10P3ZvaWQgMDp0LmNyZWF0aW9uU2NvcGUpJiZ2b2lkIDAhPT1pP2k6cikuaW1wb3J0Tm9kZShzLCEwKTtDLmN1cnJlbnROb2RlPW87bGV0IG49Qy5uZXh0Tm9kZSgpLGw9MCxoPTAsdT1lWzBdO2Zvcig7dm9pZCAwIT09dTspe2lmKGw9PT11LmluZGV4KXtsZXQgaTsyPT09dS50eXBlP2k9bmV3IFIobixuLm5leHRTaWJsaW5nLHRoaXMsdCk6MT09PXUudHlwZT9pPW5ldyB1LmN0b3Iobix1Lm5hbWUsdS5zdHJpbmdzLHRoaXMsdCk6Nj09PXUudHlwZSYmKGk9bmV3IFoobix0aGlzLHQpKSx0aGlzLl8kQVYucHVzaChpKSx1PWVbKytoXX1sIT09KG51bGw9PXU/dm9pZCAwOnUuaW5kZXgpJiYobj1DLm5leHROb2RlKCksbCsrKX1yZXR1cm4gQy5jdXJyZW50Tm9kZT1yLG99dih0KXtsZXQgaT0wO2Zvcihjb25zdCBzIG9mIHRoaXMuXyRBVil2b2lkIDAhPT1zJiYodm9pZCAwIT09cy5zdHJpbmdzPyhzLl8kQUkodCxzLGkpLGkrPXMuc3RyaW5ncy5sZW5ndGgtMik6cy5fJEFJKHRbaV0pKSxpKyt9fWNsYXNzIFJ7Y29uc3RydWN0b3IodCxpLHMsZSl7dmFyIG87dGhpcy50eXBlPTIsdGhpcy5fJEFIPUEsdGhpcy5fJEFOPXZvaWQgMCx0aGlzLl8kQUE9dCx0aGlzLl8kQUI9aSx0aGlzLl8kQU09cyx0aGlzLm9wdGlvbnM9ZSx0aGlzLl8kQ3A9bnVsbD09PShvPW51bGw9PWU/dm9pZCAwOmUuaXNDb25uZWN0ZWQpfHx2b2lkIDA9PT1vfHxvfWdldCBfJEFVKCl7dmFyIHQsaTtyZXR1cm4gbnVsbCE9PShpPW51bGw9PT0odD10aGlzLl8kQU0pfHx2b2lkIDA9PT10P3ZvaWQgMDp0Ll8kQVUpJiZ2b2lkIDAhPT1pP2k6dGhpcy5fJENwfWdldCBwYXJlbnROb2RlKCl7bGV0IHQ9dGhpcy5fJEFBLnBhcmVudE5vZGU7Y29uc3QgaT10aGlzLl8kQU07cmV0dXJuIHZvaWQgMCE9PWkmJjExPT09KG51bGw9PXQ/dm9pZCAwOnQubm9kZVR5cGUpJiYodD1pLnBhcmVudE5vZGUpLHR9Z2V0IHN0YXJ0Tm9kZSgpe3JldHVybiB0aGlzLl8kQUF9Z2V0IGVuZE5vZGUoKXtyZXR1cm4gdGhpcy5fJEFCfV8kQUkodCxpPXRoaXMpe3Q9Uyh0aGlzLHQsaSksZCh0KT90PT09QXx8bnVsbD09dHx8XCJcIj09PXQ/KHRoaXMuXyRBSCE9PUEmJnRoaXMuXyRBUigpLHRoaXMuXyRBSD1BKTp0IT09dGhpcy5fJEFIJiZ0IT09VCYmdGhpcy5fKHQpOnZvaWQgMCE9PXQuXyRsaXRUeXBlJD90aGlzLmcodCk6dm9pZCAwIT09dC5ub2RlVHlwZT90aGlzLiQodCk6dih0KT90aGlzLlQodCk6dGhpcy5fKHQpfWsodCl7cmV0dXJuIHRoaXMuXyRBQS5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0LHRoaXMuXyRBQil9JCh0KXt0aGlzLl8kQUghPT10JiYodGhpcy5fJEFSKCksdGhpcy5fJEFIPXRoaXMuayh0KSl9Xyh0KXt0aGlzLl8kQUghPT1BJiZkKHRoaXMuXyRBSCk/dGhpcy5fJEFBLm5leHRTaWJsaW5nLmRhdGE9dDp0aGlzLiQoci5jcmVhdGVUZXh0Tm9kZSh0KSksdGhpcy5fJEFIPXR9Zyh0KXt2YXIgaTtjb25zdHt2YWx1ZXM6cyxfJGxpdFR5cGUkOmV9PXQsbz1cIm51bWJlclwiPT10eXBlb2YgZT90aGlzLl8kQUModCk6KHZvaWQgMD09PWUuZWwmJihlLmVsPU4uY3JlYXRlRWxlbWVudChQKGUuaCxlLmhbMF0pLHRoaXMub3B0aW9ucykpLGUpO2lmKChudWxsPT09KGk9dGhpcy5fJEFIKXx8dm9pZCAwPT09aT92b2lkIDA6aS5fJEFEKT09PW8pdGhpcy5fJEFILnYocyk7ZWxzZXtjb25zdCB0PW5ldyBNKG8sdGhpcyksaT10LnUodGhpcy5vcHRpb25zKTt0LnYocyksdGhpcy4kKGkpLHRoaXMuXyRBSD10fX1fJEFDKHQpe2xldCBpPUUuZ2V0KHQuc3RyaW5ncyk7cmV0dXJuIHZvaWQgMD09PWkmJkUuc2V0KHQuc3RyaW5ncyxpPW5ldyBOKHQpKSxpfVQodCl7Yyh0aGlzLl8kQUgpfHwodGhpcy5fJEFIPVtdLHRoaXMuXyRBUigpKTtjb25zdCBpPXRoaXMuXyRBSDtsZXQgcyxlPTA7Zm9yKGNvbnN0IG8gb2YgdCllPT09aS5sZW5ndGg/aS5wdXNoKHM9bmV3IFIodGhpcy5rKHUoKSksdGhpcy5rKHUoKSksdGhpcyx0aGlzLm9wdGlvbnMpKTpzPWlbZV0scy5fJEFJKG8pLGUrKztlPGkubGVuZ3RoJiYodGhpcy5fJEFSKHMmJnMuXyRBQi5uZXh0U2libGluZyxlKSxpLmxlbmd0aD1lKX1fJEFSKHQ9dGhpcy5fJEFBLm5leHRTaWJsaW5nLGkpe3ZhciBzO2ZvcihudWxsPT09KHM9dGhpcy5fJEFQKXx8dm9pZCAwPT09c3x8cy5jYWxsKHRoaXMsITEsITAsaSk7dCYmdCE9PXRoaXMuXyRBQjspe2NvbnN0IGk9dC5uZXh0U2libGluZzt0LnJlbW92ZSgpLHQ9aX19c2V0Q29ubmVjdGVkKHQpe3ZhciBpO3ZvaWQgMD09PXRoaXMuXyRBTSYmKHRoaXMuXyRDcD10LG51bGw9PT0oaT10aGlzLl8kQVApfHx2b2lkIDA9PT1pfHxpLmNhbGwodGhpcyx0KSl9fWNsYXNzIGt7Y29uc3RydWN0b3IodCxpLHMsZSxvKXt0aGlzLnR5cGU9MSx0aGlzLl8kQUg9QSx0aGlzLl8kQU49dm9pZCAwLHRoaXMuZWxlbWVudD10LHRoaXMubmFtZT1pLHRoaXMuXyRBTT1lLHRoaXMub3B0aW9ucz1vLHMubGVuZ3RoPjJ8fFwiXCIhPT1zWzBdfHxcIlwiIT09c1sxXT8odGhpcy5fJEFIPUFycmF5KHMubGVuZ3RoLTEpLmZpbGwobmV3IFN0cmluZyksdGhpcy5zdHJpbmdzPXMpOnRoaXMuXyRBSD1BfWdldCB0YWdOYW1lKCl7cmV0dXJuIHRoaXMuZWxlbWVudC50YWdOYW1lfWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfV8kQUkodCxpPXRoaXMscyxlKXtjb25zdCBvPXRoaXMuc3RyaW5ncztsZXQgbj0hMTtpZih2b2lkIDA9PT1vKXQ9Uyh0aGlzLHQsaSwwKSxuPSFkKHQpfHx0IT09dGhpcy5fJEFIJiZ0IT09VCxuJiYodGhpcy5fJEFIPXQpO2Vsc2V7Y29uc3QgZT10O2xldCBsLGg7Zm9yKHQ9b1swXSxsPTA7bDxvLmxlbmd0aC0xO2wrKyloPVModGhpcyxlW3MrbF0saSxsKSxoPT09VCYmKGg9dGhpcy5fJEFIW2xdKSxufHwobj0hZChoKXx8aCE9PXRoaXMuXyRBSFtsXSksaD09PUE/dD1BOnQhPT1BJiYodCs9KG51bGwhPWg/aDpcIlwiKStvW2wrMV0pLHRoaXMuXyRBSFtsXT1ofW4mJiFlJiZ0aGlzLmoodCl9aih0KXt0PT09QT90aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSk6dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsbnVsbCE9dD90OlwiXCIpfX1jbGFzcyBIIGV4dGVuZHMga3tjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy50eXBlPTN9aih0KXt0aGlzLmVsZW1lbnRbdGhpcy5uYW1lXT10PT09QT92b2lkIDA6dH19Y29uc3QgST1zP3MuZW1wdHlTY3JpcHQ6XCJcIjtjbGFzcyBMIGV4dGVuZHMga3tjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy50eXBlPTR9aih0KXt0JiZ0IT09QT90aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSxJKTp0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMubmFtZSl9fWNsYXNzIHogZXh0ZW5kcyBre2NvbnN0cnVjdG9yKHQsaSxzLGUsbyl7c3VwZXIodCxpLHMsZSxvKSx0aGlzLnR5cGU9NX1fJEFJKHQsaT10aGlzKXt2YXIgcztpZigodD1udWxsIT09KHM9Uyh0aGlzLHQsaSwwKSkmJnZvaWQgMCE9PXM/czpBKT09PVQpcmV0dXJuO2NvbnN0IGU9dGhpcy5fJEFILG89dD09PUEmJmUhPT1BfHx0LmNhcHR1cmUhPT1lLmNhcHR1cmV8fHQub25jZSE9PWUub25jZXx8dC5wYXNzaXZlIT09ZS5wYXNzaXZlLG49dCE9PUEmJihlPT09QXx8byk7byYmdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLHRoaXMsZSksbiYmdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5uYW1lLHRoaXMsdCksdGhpcy5fJEFIPXR9aGFuZGxlRXZlbnQodCl7dmFyIGkscztcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLl8kQUg/dGhpcy5fJEFILmNhbGwobnVsbCE9PShzPW51bGw9PT0oaT10aGlzLm9wdGlvbnMpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmhvc3QpJiZ2b2lkIDAhPT1zP3M6dGhpcy5lbGVtZW50LHQpOnRoaXMuXyRBSC5oYW5kbGVFdmVudCh0KX19Y2xhc3MgWntjb25zdHJ1Y3Rvcih0LGkscyl7dGhpcy5lbGVtZW50PXQsdGhpcy50eXBlPTYsdGhpcy5fJEFOPXZvaWQgMCx0aGlzLl8kQU09aSx0aGlzLm9wdGlvbnM9c31nZXQgXyRBVSgpe3JldHVybiB0aGlzLl8kQU0uXyRBVX1fJEFJKHQpe1ModGhpcyx0KX19Y29uc3Qgaj17TzpvLFA6bixBOmwsQzoxLE06VixMOk0sUjp2LEQ6UyxJOlIsVjprLEg6TCxOOnosVTpILEY6Wn0sQj1pLmxpdEh0bWxQb2x5ZmlsbFN1cHBvcnQ7bnVsbD09Qnx8QihOLFIpLChudWxsIT09KHQ9aS5saXRIdG1sVmVyc2lvbnMpJiZ2b2lkIDAhPT10P3Q6aS5saXRIdG1sVmVyc2lvbnM9W10pLnB1c2goXCIyLjguMFwiKTtjb25zdCBEPSh0LGkscyk9Pnt2YXIgZSxvO2NvbnN0IG49bnVsbCE9PShlPW51bGw9PXM/dm9pZCAwOnMucmVuZGVyQmVmb3JlKSYmdm9pZCAwIT09ZT9lOmk7bGV0IGw9bi5fJGxpdFBhcnQkO2lmKHZvaWQgMD09PWwpe2NvbnN0IHQ9bnVsbCE9PShvPW51bGw9PXM/dm9pZCAwOnMucmVuZGVyQmVmb3JlKSYmdm9pZCAwIT09bz9vOm51bGw7bi5fJGxpdFBhcnQkPWw9bmV3IFIoaS5pbnNlcnRCZWZvcmUodSgpLHQpLHQsdm9pZCAwLG51bGwhPXM/czp7fSl9cmV0dXJuIGwuXyRBSSh0KSxsfTtleHBvcnR7aiBhcyBfJExILHggYXMgaHRtbCxUIGFzIG5vQ2hhbmdlLEEgYXMgbm90aGluZyxEIGFzIHJlbmRlcixiIGFzIHN2Z307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saXQtaHRtbC5qcy5tYXBcbiIsImltcG9ydFwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7aW1wb3J0XCJsaXQtaHRtbFwiO2V4cG9ydCpmcm9tXCJsaXQtZWxlbWVudC9saXQtZWxlbWVudC5qc1wiO2V4cG9ydCpmcm9tXCJsaXQtaHRtbC9pcy1zZXJ2ZXIuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hY2NvcmRpb24tcGFuZWwuY3NzJztcclxuXHJcbmNsYXNzIEFjY29yZGlvblBhbmVsIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGhlYWRlclRpdGxlOiB7IHR5cGU6IFN0cmluZyB9LCBcclxuICAgICAgaGVhZGVyVGFnTmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgICAgYnV0dG9uSWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxyXG4gICAgICBwYW5lbElkOiB7IHR5cGU6IFN0cmluZywgZGVmYXVsdDogJycgfSxcclxuICAgICAgb3Blbjoge3R5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlLCBhdHRyaWJ1dGU6IHRydWUsIHJlZmxlY3Q6IHRydWV9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gc3R5bGVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wZW4gPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZSgpIHtcclxuICAgIHRoaXMub3BlbiA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSGVhZGVyKGUpIHtcclxuICAgIGNvbnN0IGNoaWxkTm9kZSA9IGUudGFyZ2V0LmFzc2lnbmVkTm9kZXMoe2ZsYXR0ZW46IHRydWV9KVswXTtcclxuICAgIGlmICh0eXBlb2YgY2hpbGROb2RlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmhlYWRlclRhZ05hbWUgPSBjaGlsZE5vZGUudGFnTmFtZTtcclxuICAgICAgdGhpcy5oZWFkZXJUaXRsZSA9IGNoaWxkTm9kZS5pbm5lclRleHQ7XHJcbiAgICAgIGxldCBpZCA9IHRoaXMuaGVhZGVyVGl0bGUucmVwbGFjZSgvW15BLVphLXowLTldL2csIFwiXCIpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgIHRoaXMuaWQgPSBcImlsLWFjY29yZGlvbi1pZC1cIiArIGlkO1xyXG4gICAgICB0aGlzLmJ1dHRvbklkID0gXCJpbC1hY2NvcmRpb24tYnV0dG9uLVwiICsgaWQ7XHJcbiAgICAgIHRoaXMucGFuZWxJZCA9IFwiaWwtYWNjb3JkaW9uLXBhbmVsLVwiICsgaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyRXhwYW5kKGUpIHtcclxuICAgIHRoaXMub3BlbiA9ICF0aGlzLm9wZW47XHJcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdleHBhbmQnLCB7IHBhbmVsSWQ6ICd0ZXN0aWQnIH0pKTtcclxuICB9XHJcblxyXG4gIGZpcnN0VXBkYXRlZCgpIHtcclxuICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzbG90W25hbWU9XCJoZWFkZXJcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgKGUpID0+IHRoaXMudXBkYXRlSGVhZGVyKGUpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNoZXZyb24oKSB7XHJcbiAgICByZXR1cm4gaHRtbGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIj5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMjA3LjAyOSAzODEuNDc2TDEyLjY4NiAxODcuMTMyYy05LjM3My05LjM3My05LjM3My0yNC41NjkgMC0zMy45NDFsMjIuNjY3LTIyLjY2N2M5LjM1Ny05LjM1NyAyNC41MjItOS4zNzUgMzMuOTAxLS4wNEwyMjQgMjg0LjUwNWwxNTQuNzQ1LTE1NC4wMjFjOS4zNzktOS4zMzUgMjQuNTQ0LTkuMzE3IDMzLjkwMS4wNGwyMi42NjcgMjIuNjY3YzkuMzczIDkuMzczIDkuMzczIDI0LjU2OSAwIDMzLjk0MUwyNDAuOTcxIDM4MS40NzZjLTkuMzczIDkuMzcyLTI0LjU2OSA5LjM3Mi0zMy45NDIgMHpcIiAvPlxyXG4gICAgPC9zdmc+YDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLmhlYWRlclRhZ05hbWUgPT0gJ0gyJykge1xyXG4gICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1wYW5lbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW52aXNpYmxlXCI+PHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD48L2Rpdj5cclxuICAgICAgPGgyPjxidXR0b24gaWQ9XCIke3RoaXMuYnV0dG9uSWR9XCIgYXJpYS1leHBhbmRlZD1cIiR7dGhpcy5vcGVufVwiIGFyaWEtY29udHJvbHM9XCIke3RoaXMucGFuZWxJZH1cIiBAY2xpY2s9JHt0aGlzLnRyaWdnZXJFeHBhbmR9PjxzcGFuPiR7dGhpcy5yZW5kZXJDaGV2cm9uKCl9PC9zcGFuPiR7dGhpcy5oZWFkZXJUaXRsZX08L2J1dHRvbj48L2gyPlxyXG4gICAgICAgICAgPGRpdiByb2xlPVwicmVnaW9uXCIgY2xhc3M9XCJwYW5lbFwiIGlkPVwiJHt0aGlzLnBhbmVsSWR9XCIgYXJpYS1sYWJlbGxlZGJ5PVwiJHt0aGlzLmJ1dHRvbklkfVwiID9oaWRkZW49JHshdGhpcy5vcGVufT5cclxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhlYWRlclRhZ05hbWUgPT0gJ0gzJykge1xyXG4gICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1wYW5lbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW52aXNpYmxlXCI+PHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD48L2Rpdj5cclxuICAgICAgPGgzPjxidXR0b24gaWQ9XCIke3RoaXMuYnV0dG9uSWR9XCIgYXJpYS1leHBhbmRlZD1cIiR7dGhpcy5vcGVufVwiIGFyaWEtY29udHJvbHM9XCIke3RoaXMucGFuZWxJZH1cIiBAY2xpY2s9JHt0aGlzLnRyaWdnZXJFeHBhbmR9PjxzcGFuPiR7dGhpcy5yZW5kZXJDaGV2cm9uKCl9PC9zcGFuPiR7dGhpcy5oZWFkZXJUaXRsZX08L2J1dHRvbj48L2gzPlxyXG4gICAgICAgICAgPGRpdiByb2xlPVwicmVnaW9uXCIgY2xhc3M9XCJwYW5lbFwiIGlkPVwiJHt0aGlzLnBhbmVsSWR9XCIgYXJpYS1sYWJlbGxlZGJ5PVwiJHt0aGlzLmlkfVwiID9oaWRkZW49JHshdGhpcy5vcGVufT5cclxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhlYWRlclRhZ05hbWUgPT0gJ0g0Jykge1xyXG4gICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1wYW5lbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW52aXNpYmxlXCI+PHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD48L2Rpdj5cclxuICAgICAgPGg0PjxidXR0b24gaWQ9XCIke3RoaXMuYnV0dG9uSWR9XCIgYXJpYS1leHBhbmRlZD1cIiR7dGhpcy5vcGVufVwiIGFyaWEtY29udHJvbHM9XCIke3RoaXMucGFuZWxJZH1cIiBAY2xpY2s9JHt0aGlzLnRyaWdnZXJFeHBhbmR9PjxzcGFuPjwvc3Bhbj4ke3RoaXMuaGVhZGVyVGl0bGV9PC9idXR0b24+PC9oND5cclxuICAgICAgICAgIDxkaXYgcm9sZT1cInJlZ2lvblwiIGNsYXNzPVwicGFuZWxcIiBpZD1cIiR7dGhpcy5wYW5lbElkfVwiIGFyaWEtbGFiZWxsZWRieT1cIiR7dGhpcy5pZH1cIiA/aGlkZGVuPSR7IXRoaXMub3Blbn0+XHJcbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5oZWFkZXJUYWdOYW1lID09ICdINScpIHtcclxuICAgICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tcGFuZWxcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImludmlzaWJsZVwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+PC9kaXY+XHJcbiAgICAgIDxoNT48YnV0dG9uIGlkPVwiJHt0aGlzLmJ1dHRvbklkfVwiIGFyaWEtZXhwYW5kZWQ9XCIke3RoaXMub3Blbn1cIiBhcmlhLWNvbnRyb2xzPVwiJHt0aGlzLnBhbmVsSWR9XCIgQGNsaWNrPSR7dGhpcy50cmlnZ2VyRXhwYW5kfT48c3Bhbj48L3NwYW4+JHt0aGlzLmhlYWRlclRpdGxlfTwvYnV0dG9uPjwvaDU+XHJcbiAgICAgICAgICA8ZGl2IHJvbGU9XCJyZWdpb25cIiBjbGFzcz1cInBhbmVsXCIgaWQ9XCIke3RoaXMucGFuZWxJZH1cIiBhcmlhLWxhYmVsbGVkYnk9XCIke3RoaXMuaWR9XCIgP2hpZGRlbj0keyF0aGlzLm9wZW59PlxyXG4gICAgICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaGVhZGVyVGFnTmFtZSA9PSAnSDYnKSB7XHJcbiAgICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLXBhbmVsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbnZpc2libGVcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxyXG4gICAgICAgICAgPGg2PjxidXR0b24gaWQ9XCIke3RoaXMuYnV0dG9uSWR9XCIgYXJpYS1leHBhbmRlZD1cIiR7dGhpcy5vcGVufVwiIGFyaWEtY29udHJvbHM9XCIke3RoaXMucGFuZWxJZH1cIiBAY2xpY2s9JHt0aGlzLnRyaWdnZXJFeHBhbmR9PjxzcGFuPjwvc3Bhbj4ke3RoaXMuaGVhZGVyVGl0bGV9PC9idXR0b24+PC9oNj5cclxuICAgICAgICAgIDxkaXYgcm9sZT1cInJlZ2lvblwiIGNsYXNzPVwicGFuZWxcIiBpZD1cIiR7dGhpcy5wYW5lbElkfVwiIGFyaWEtbGFiZWxsZWRieT1cIiR7dGhpcy5pZH1cIiA/aGlkZGVuPSR7IXRoaXMub3Blbn0+XHJcbiAgICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24tcGFuZWxcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbnZpc2libGVcIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+PC9zbG90PjwvZGl2PlxyXG4gICAgPGJ1dHRvbiBpZD1cIiR7dGhpcy5idXR0b25JZH1cIiBhcmlhLWV4cGFuZGVkPVwiJHt0aGlzLm9wZW59XCIgYXJpYS1jb250cm9scz1cIiR7dGhpcy5wYW5lbElkfVwiIEBjbGljaz0ke3RoaXMudHJpZ2dlckV4cGFuZH0+PHNwYW4+PC9zcGFuPiR7dGhpcy5oZWFkZXJUaXRsZX08L2J1dHRvbj5cclxuICAgICAgICA8ZGl2IHJvbGU9XCJyZWdpb25cIiBjbGFzcz1cInBhbmVsXCIgaWQ9XCIke3RoaXMucGFuZWxJZH1cIiBhcmlhLWxhYmVsbGVkYnk9XCIke3RoaXMuaWR9XCIgP2hpZGRlbj0keyF0aGlzLm9wZW59PlxyXG4gICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtYWNjb3JkaW9uLXBhbmVsJywgQWNjb3JkaW9uUGFuZWwpOyIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuaW52aXNpYmxlIHsgXHJcbiAgICBkaXNwbGF5OiBub25lOyBcclxuICB9XHJcblxyXG4gIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBidXR0b24ge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlsLXNvdXJjZS1zYW5zKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLWlsLWRldGFpbHMtcGFkZGluZyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbC1kZXRhaWxzLWJhY2tncm91bmQpO1xyXG4gICAgY29sb3I6IHZhcigtLWlsLWRldGFpbHMtY29sb3IpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBidXR0b246Zm9jdXMsIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbC1kZXRhaWxzLWJhY2tncm91bmQtaG92ZXIpO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHNwYW4ge1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uW2FyaWEtZXhwYW5kZWQ9dHJ1ZV0gc3BhbiB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcblxyXG4gIC5wYW5lbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9hY2NvcmRpb24uY3NzJztcclxuXHJcbmNsYXNzIEFjY29yZGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xyXG5cclxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzaW5nbGU6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSwgYXR0cmlidXRlOiB0cnVlLCByZWZsZWN0OiB0cnVlfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIHN0eWxlcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5zaW5nbGUgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5zaW5nbGUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLmhhbmRsZUNvbnRlbnRMb2FkZWQuYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDb250ZW50TG9hZGVkKGV2dCkge1xyXG4gICAgdGhpcy5nZXRQYW5lbHMoKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignZXhwYW5kJywgdGhpcy5jb2xsYXBzZVBhbmVscy5iaW5kKHRoaXMpKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZVBhbmVscyhldnQpIHtcclxuICAgIGlmICh0aGlzLnNpbmdsZSkge1xyXG4gICAgICAgIHRoaXMuZ2V0UGFuZWxzKCkuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2dC50YXJnZXQucGFuZWxJZCAhPT0gc2VjdGlvbi5wYW5lbElkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQYW5lbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdpbC1hY2NvcmRpb24tcGFuZWwnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpbC1hY2NvcmRpb24nLCBBY2NvcmRpb24pOyIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcblxyXG5gOyIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGV2ZW50KSA9PiB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaWwtZm9ybWF0dGVkIC5pbC1hY2NvcmRpb24gZGV0YWlscycpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQub3Blbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFjY29yZGlvblBhcmVudCA9IGV2ZW50LnRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjY29yZGlvblBhcmVudCAhPSBudWxsICYmICFhY2NvcmRpb25QYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbC1hY2NvcmRpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjY29yZGlvblBhcmVudCA9IGFjY29yZGlvblBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYWNjb3JkaW9uUGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RldGFpbHMnKS5mb3JFYWNoKChkZXRhaWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWlsICE9PSBldmVudC50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG52YXIgbWVkaWFRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYSgncHJpbnQnKTtcclxubWVkaWFRdWVyeUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7IFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmlsLWFjY29yZGlvbicpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdpbC1hY2NvcmRpb24tcHJpbnQnKTtcclxuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2lsLWFjY29yZGlvbicpO1xyXG4gICAgfSlcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RldGFpbHMnKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdvcGVuJywgdHJ1ZSk7XHJcbiAgICB9KVxyXG59KTtcclxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9iYWNrLXRvLXRvcC5jc3MnO1xyXG5cclxuY2xhc3MgQmFja1RvVG9wIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGFsdDogeyB0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZSB9LFxyXG4gICAgICB0YXJnZXQ6IHsgdHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWUgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIHN0eWxlcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuYWx0ID0gJ0JhY2sgdG8gdG9wJztcclxuICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuICAgIHRoaXMuZXhwZWN0ZWRQb3NpdGlvbkFmdGVyU2Nyb2xsID0gbnVsbDtcclxuICAgIHRoaXMuY29udGludWVTY3JvbGwgPSB0aGlzLmNvbnRpbnVlU2Nyb2xsLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhhbmRsZVNjcm9sbCA9IHRoaXMuaGFuZGxlU2Nyb2xsLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xyXG4gIH1cclxuXHJcbiAgY29udGludWVTY3JvbGwoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNUb3BPZlBhZ2UoKSAmJiB0aGlzLmlzSW5FeHBlY3RlZFBvc2l0aW9uKCkpIHtcclxuICAgICAgdGhpcy5zY3JvbGxUb1RvcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcclxuICB9XHJcblxyXG4gIGdldEJ1dHRvbigpIHtcclxuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XHJcbiAgfVxyXG5cclxuICBnZXRGb2xkUG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0ICogLjg7XHJcbiAgfVxyXG5cclxuICBnZXROZXh0U2Nyb2xsUG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgodGhpcy5nZXRUb3BPZlBhZ2UoKSwgdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpIC0gNTApO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2Nyb2xsUG9zaXRpb24oKSB7XHJcbiAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgfVxyXG5cclxuICBnZXRUb3BPZlBhZ2UoKSB7XHJcbiAgICBpZiAodGhpcy50YXJnZXQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50YXJnZXQpKSB7XHJcbiAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnRhcmdldCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIDA7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGljayhldnQpIHtcclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5nZXRCdXR0b24oKS5ibHVyKCk7XHJcbiAgICBpZiAodGhpcy5pc0JlbG93Rm9sZCgpKSB0aGlzLmp1bXBUb0ZvbGQoKTtcclxuICAgIHRoaXMuc3RhcnRTY3JvbGxUb1RvcCgpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU2Nyb2xsKGV2dCkge1xyXG4gICAgdGhpcy51cGRhdGVCdXR0b24oKTtcclxuICB9XHJcblxyXG4gIGlzQmVsb3dGb2xkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKSA+IHRoaXMuZ2V0Rm9sZFBvc2l0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBpc0luRXhwZWN0ZWRQb3NpdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmdldFNjcm9sbFBvc2l0aW9uKCkgPT09IHRoaXMuZXhwZWN0ZWRQb3NpdGlvbkFmdGVyU2Nyb2xsO1xyXG4gIH1cclxuXHJcbiAgaXNOZWFyVG9wT2ZQYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKSA8ICh0aGlzLmdldFRvcE9mUGFnZSgpICsgMTAwKTtcclxuICB9XHJcblxyXG4gIGlzVG9wT2ZQYWdlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2V0U2Nyb2xsUG9zaXRpb24oKSA8PSB0aGlzLmdldFRvcE9mUGFnZSgpO1xyXG4gIH1cclxuXHJcbiAganVtcFRvRm9sZCgpIHtcclxuICAgIHdpbmRvdy5zY3JvbGxUbygwLCB0aGlzLmdldEZvbGRQb3NpdGlvbigpKTtcclxuICB9XHJcblxyXG4gIHNjcm9sbFRvVG9wKCkge1xyXG4gICAgdGhpcy5leHBlY3RlZFBvc2l0aW9uQWZ0ZXJTY3JvbGwgPSB0aGlzLmdldE5leHRTY3JvbGxQb3NpdGlvbigpO1xyXG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHRoaXMuZXhwZWN0ZWRQb3NpdGlvbkFmdGVyU2Nyb2xsKTtcclxuICAgIHNldFRpbWVvdXQodGhpcy5jb250aW51ZVNjcm9sbCwgMTApO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRTY3JvbGxUb1RvcCgpIHtcclxuICAgIHRoaXMuc2Nyb2xsVG9Ub3AoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUJ1dHRvbigpIHtcclxuICAgIHRoaXMuZ2V0QnV0dG9uKCkuY2xhc3NMaXN0W3RoaXMuaXNOZWFyVG9wT2ZQYWdlKCkgPyAnYWRkJyA6ICdyZW1vdmUnXSgndG9wLW9mLXBhZ2UnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckljb24oKSB7XHJcbiAgICByZXR1cm4gaHRtbGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxyXG4gICAgICA8cGF0aCBkPVwiTTggMjRsMi44MyAyLjgzTDIyIDE1LjY2VjQwaDRWMTUuNjZsMTEuMTcgMTEuMTdMNDAgMjQgMjQgOCA4IDI0elwiLz5cclxuICAgIDwvc3ZnPmA7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaHRtbGA8YnV0dG9uIEBjbGljaz1cIiR7dGhpcy5oYW5kbGVDbGlja31cIiBjbGFzcz1cIiR7dGhpcy5pc1RvcE9mUGFnZSgpID8gJ3RvcC1vZi1wYWdlJyA6ICcnfVwiXHJcbiAgICBhcmlhLWxhYmVsPSR7dGhpcy5hbHR9PiR7dGhpcy5yZW5kZXJJY29uKCl9PC9idXR0b24+YDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtYmFjay10by10b3AnLCBCYWNrVG9Ub3ApO1xyXG4iLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuXHJcbjpob3N0IHtcclxuICBib3R0b206IHZhcigtLWlsLWJhY2stdG8tdG9wLXBvc2l0aW9uLXkpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogdmFyKC0taWwtYmFjay10by10b3AtcG9zaXRpb24teCk7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5idXR0b24ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlsLWJhY2stdG8tdG9wLWJhY2tncm91bmQtY29sb3IpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWlsLWJhY2stdG8tdG9wLWZvcmVncm91bmQtY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICB3aWR0aDogNDhweDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuYnV0dG9uOmhvdmVyLCBidXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlsLWJhY2stdG8tdG9wLWZvcmVncm91bmQtY29sb3IpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taWwtYmFjay10by10b3AtYmFja2dyb3VuZC1jb2xvcik7XHJcbn1cclxuYnV0dG9uLnRvcC1vZi1wYWdlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoODhweCk7XHJcbn1cclxuc3ZnIHtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbn1cclxucGF0aCB7XHJcbiAgZmlsbDogdmFyKC0taWwtYmFjay10by10b3AtZm9yZWdyb3VuZC1jb2xvcik7XHJcbn1cclxuYnV0dG9uOmhvdmVyIHBhdGgsIGJ1dHRvbjpmb2N1cyBwYXRoIHtcclxuICBmaWxsOiB2YXIoLS1pbC1iYWNrLXRvLXRvcC1iYWNrZ3JvdW5kLWNvbG9yKTtcclxufVxyXG5cclxuYCIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnJlYWRjcnVtYnMuY3NzJztcclxuXHJcbmNsYXNzIEJyZWFkY3J1bWJzIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhYmVsOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIHN0eWxlcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMubGFiZWwgPSBcIkJyZWFkY3J1bWJzXCI7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaHRtbGA8bmF2IGFyaWEtbGFiZWw9JHt0aGlzLmxhYmVsfSBjbGFzcz1cImJyZWFkY3J1bWJcIj5cclxuICAgICAgPG9sPlxyXG4gICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgPC9vbD5cclxuICAgIDwvbmF2PmA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2lsLWJyZWFkY3J1bWJzJywgQnJlYWRjcnVtYnMpO1xyXG5cclxuIiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgOmhvc3Qge1xyXG4gICAgY291bnRlci1yZXNldDogYnJlYWRjcnVtYiAwO1xyXG4gICAgY29sb3I6ICMyNTI1MjU7XHJcbiAgfVxyXG4gIG9sIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udDogNDAwIDE0cHgvMzJweCB2YXIoLS1pbC1mb250LXNhbnMpO1xyXG4gIH1cclxuYDsiLCJpbXBvcnQge0xpdEVsZW1lbnQsIGh0bWx9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLmNzcyc7XHJcblxyXG5jbGFzcyBCcmVhZGNydW1ic1BhZ2UgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY3VycmVudDoge3R5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogdHJ1ZX0sXHJcbiAgICAgIGhyZWY6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZX1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmhyZWYgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgaGFzTGluaygpIHtcclxuICAgIHJldHVybiAhIXRoaXMuaHJlZjtcclxuICB9XHJcblxyXG4gIGlzQ3VycmVudFBhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50ICE9PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICByZW5kZXJDaGV2cm9uKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAzMjAgNTEyXCI+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjg1LjQ3NiAyNzIuOTcxTDkxLjEzMiA0NjcuMzE0Yy05LjM3MyA5LjM3My0yNC41NjkgOS4zNzMtMzMuOTQxIDBsLTIyLjY2Ny0yMi42NjdjLTkuMzU3LTkuMzU3LTkuMzc1LTI0LjUyMi0uMDQtMzMuOTAxTDE4OC41MDUgMjU2IDM0LjQ4NCAxMDEuMjU1Yy05LjMzNS05LjM3OS05LjMxNy0yNC41NDQuMDQtMzMuOTAxbDIyLjY2Ny0yMi42NjdjOS4zNzMtOS4zNzMgMjQuNTY5LTkuMzczIDMzLjk0MSAwTDI4NS40NzUgMjM5LjAzYzkuMzczIDkuMzcyIDkuMzczIDI0LjU2OC4wMDEgMzMuOTQxelwiLz5cclxuICAgIDwvc3ZnPmA7XHJcbiAgfVxyXG5cclxuICByZW5kZXJMYWJlbCgpIHtcclxuICAgIHJldHVybiBodG1sYDxzbG90Pjwvc2xvdD5gO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTGluaygpIHtcclxuICAgIGlmICh0aGlzLmlzQ3VycmVudFBhZ2UoKSkge1xyXG4gICAgICByZXR1cm4gaHRtbGA8YSBocmVmPSR7dGhpcy5ocmVmfSBhcmlhLWN1cnJlbnQ9XCJwYWdlXCI+JHt0aGlzLnJlbmRlckxhYmVsKCl9PC9hPmA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgcmV0dXJuIGh0bWxgPGEgaHJlZj0ke3RoaXMuaHJlZn0+JHt0aGlzLnJlbmRlckxhYmVsKCl9PC9hPmA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaHRtbGA8bGkgY2xhc3M9JHt0aGlzLmlzQ3VycmVudFBhZ2UoKSA/ICdjdXJyZW50JzogJyd9PlxyXG4gICAgICAke3RoaXMuaGFzTGluaygpID8gdGhpcy5yZW5kZXJMaW5rKCkgOiB0aGlzLnJlbmRlckxhYmVsKCl9XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwic2VwYXJhdG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JHt0aGlzLnJlbmRlckNoZXZyb24oKX08L3NwYW4+XHJcbiAgICA8L2xpPmA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2lsLWJyZWFkY3J1bWJzLXBhZ2UnLCBCcmVhZGNydW1ic1BhZ2UpO1xyXG4iLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICA6aG9zdCB7XHJcbiAgICBjb3VudGVyLWluY3JlbWVudDogYnJlYWRjcnVtYjtcclxuICB9XHJcbiAgOmhvc3QoKjpsYXN0LW9mLXR5cGUpIC5zZXBhcmF0b3Ige1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgY29sb3I6ICMyNTI1MjU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgfVxyXG4gIC5zZXBhcmF0b3Ige1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgcGFkZGluZzogMCA0cHg7XHJcbiAgfVxyXG4gIC5zZXBhcmF0b3Igc3ZnIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmaWxsOiB2YXIoLS1pbC1ibHVlKTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogdmFyKC0taWwtbGluay1jb2xvcik7XHJcbiAgfVxyXG4gIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogdmFyKC0taWwtdmlzaXRlZC1saW5rLWNvbG9yKTtcclxuICB9XHJcbiAgYTpmb2N1cywgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taWwtbGluay1ob3Zlci1jb2xvcik7XHJcbiAgfVxyXG5gOyIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcyB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYWxsLXRvLWFjdGlvbi5jc3MnO1xyXG5cclxuY2xhc3MgQ2FsbFRvQWN0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIHN0eWxlcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGNsZWFySWNvbihlKSB7XHJcbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmlsLWNhbGx0b2FjdGlvbi1pY29uJykuY2xhc3NMaXN0LnJlbW92ZSgnaWwtY2FsbHRvYWN0aW9uLWNlbnRlcmVkLW5vLWljb24nKTtcclxuICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuaWwtY2FsbHRvYWN0aW9uLWJvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdpbC1jYWxsdG9hY3Rpb24tY2VudGVyZWQtbm8taWNvbicpO1xyXG4gIH1cclxuXHJcbiAgZmlyc3RVcGRhdGVkKCl7XHJcbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdFtuYW1lPVwiaWNvblwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCAoZSkgPT4gdGhpcy5jbGVhckljb24oZSkpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBhbGlnbm1lbnRDbGFzcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcykuZ2V0UHJvcGVydHlWYWx1ZSgndGV4dC1hbGlnbicpLnRyaW0oKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlsLWNhbGx0b2FjdGlvbiAke2FsaWdubWVudENsYXNzfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWwtY2FsbHRvYWN0aW9uLXBhZGRpbmdcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlsLWNhbGx0b2FjdGlvbi1pY29uICR7YWxpZ25tZW50Q2xhc3N9IGlsLWNhbGx0b2FjdGlvbi1jZW50ZXJlZC1uby1pY29uXCI+PHNsb3QgbmFtZT1cImljb25cIj48L3Nsb3Q+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbC1jYWxsdG9hY3Rpb24tYm9keSAke2FsaWdubWVudENsYXNzfSBpbC1jYWxsdG9hY3Rpb24tY2VudGVyZWQtbm8taWNvblwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlsLWNhbGx0b2FjdGlvbi1wYWRkaW5nXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtY2FsbC10by1hY3Rpb24nLCBDYWxsVG9BY3Rpb24pO1xyXG4iLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuXHJcbi5pbC1jYWxsdG9hY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gIHBhZGRpbmc6IDMuNzVyZW0gMCA0LjY4OHJlbSAwO1xyXG4gIG1hcmdpbjogdmFyKC0taWwtY2FsbC10by1hY3Rpb24tbWFyZ2luKTtcclxuICBjb2xvcjogdmFyKC0taWwtdGV4dC1jb2xvcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taWwtYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgd2lkdGg6IHZhcigtLWlsLWNhbGwtdG8tYWN0aW9uLXdpZHRoKTtcclxufVxyXG4uaWwtY2FsbHRvYWN0aW9uIC5pbC1jYWxsdG9hY3Rpb24tYm9keSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIGZsZXgtYmFzaXM6IDg0NXB4O1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBmbGV4LXNocmluazogMTtcclxufVxyXG4uaWwtY2FsbHRvYWN0aW9uIC5pbC1jYWxsdG9hY3Rpb24taWNvbiB7XHJcbiAgbWluLXdpZHRoOiA5NnB4O1xyXG4gIG1hcmdpbi10b3A6IDEuODc1cmVtO1xyXG59XHJcbi5pbC1jYWxsdG9hY3Rpb24gLmlsLWNhbGx0b2FjdGlvbi1pY29uLmNlbnRlci5pbC1jYWxsdG9hY3Rpb24tY2VudGVyZWQtbm8taWNvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uaWwtY2FsbHRvYWN0aW9uIC5pbC1jYWxsdG9hY3Rpb24tYm9keS5jZW50ZXIuaWwtY2FsbHRvYWN0aW9uLWNlbnRlcmVkLW5vLWljb24ge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4uaWwtY2FsbHRvYWN0aW9uIC5pbC1jYWxsdG9hY3Rpb24tcGFkZGluZyB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLmlsLWNhbGx0b2FjdGlvbiAuaWwtY2FsbHRvYWN0aW9uLWJvZHkuY2VudGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTJweCkge1xyXG4gIC5pbC1jYWxsdG9hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxLjg3NXJlbTtcclxuICB9XHJcbiAgLmlsLWNhbGx0b2FjdGlvbiAuaWwtY2FsbHRvYWN0aW9uLWJvZHksIC5pbC1jYWxsdG9hY3Rpb24gLmlsLWNhbGx0b2FjdGlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbn1cclxuXHJcbmA7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYXJkLmNzcyc7XHJcblxyXG5jbGFzcyBDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxpbms6IHt0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSwgYXR0cmlidXRlOiB0cnVlfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmxpbmsgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XHJcbiAgfVxyXG5cclxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljayk7XHJcbiAgfVxyXG5cclxuICBlbGVtZW50SXNMaW5rKGVsZW0pIHtcclxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmdldExpbmtFbGVtZW50KCk7XHJcbiAgICByZXR1cm4gZWxlbSA9PT0gbGluayB8fCBsaW5rLmNvbnRhaW5zKGVsZW0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGlua0VsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcbiAgfVxyXG5cclxuICBoYXNMaW5rRWxlbWVudCgpIHtcclxuICAgIHJldHVybiAhIXRoaXMuZ2V0TGlua0VsZW1lbnQoKTtcclxuICB9XHJcblxyXG4gIGlzTGluaygpIHtcclxuICAgIHJldHVybiB0aGlzLmxpbms7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDbGljayhldnQpIHtcclxuICAgIGlmICh0aGlzLmlzTGluaygpICYmIHRoaXMuaGFzTGlua0VsZW1lbnQoKSkge1xyXG4gICAgICBpZiAoIXRoaXMuZWxlbWVudElzTGluayhldnQudGFyZ2V0KSkgdGhpcy5nZXRMaW5rRWxlbWVudCgpLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cclxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2lsLWNhcmQnLCBDYXJkKTtcclxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2xpY2thYmxlLWNhcmQuY3NzJztcclxuXHJcbmNsYXNzIENsaWNrYWJsZUNhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiB0cnVlfSxcclxuICAgICAgICBzcmM6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZX0sXHJcbiAgICAgICAgYWx0OiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgICAgIGhyZWY6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZX0sXHJcbiAgICAgICAgYmFja2dyb3VuZDoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiB0cnVlfSxcclxuICAgICAgICBoaWdobGlnaHQ6IHt0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IHRydWUsIHJlZmxlY3Q6IHRydWV9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gc3R5bGVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zcmMgPSAnJztcclxuICAgIHRoaXMuaHJlZiA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuYmFja2dyb3VuZCA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuYWx0ID0gJyc7XHJcbiAgICB0aGlzLndpZHRoID0gJyc7XHJcbiAgICB0aGlzLmhpZ2hsaWdodCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySGlkZGVuUGFyYWdyYXBoKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgPHAgY2xhc3M9XCJoZWFkZXIgaWwtaW52aXNpYmxlXCI+JHsodGhpcy5hbHQgPT0gJycgPyAnQ2xpY2thYmxlIENhcmQnIDogdGhpcy5hbHQpfTwvcD5gO1xyXG4gIH1cclxuXHJcbiAgZmlyc3RVcGRhdGVkKCkge1xyXG4gICAgaWYgKHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzbG90W25hbWU9XCJoZWFkZXJcIl0nKSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdFtuYW1lPVwiaGVhZGVyXCJdJykuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIChlKSA9PiB0aGlzLnJlbW92ZUhpZGRlbkluZm9ybWF0aW9uKGUpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdFtuYW1lPVwiaW1hZ2VcIl0nKSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdFtuYW1lPVwiaW1hZ2VcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgKGUpID0+IHRoaXMucmVtb3ZlTm9QaWN0dXJlKGUpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbW92ZUhpZGRlbkluZm9ybWF0aW9uKGUpIHtcclxuICAgIGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ3AnKS5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZU5vUGljdHVyZShlKSB7XHJcbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignZGl2Lm5vcGljdHVyZScpLmNsYXNzTGlzdC5yZW1vdmUoJ25vcGljdHVyZScpO1xyXG4gIH1cclxuIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBjb250ZW50Q2xhc3MgPSB0aGlzLmJhY2tncm91bmQgPT0gJ2JsdWUnID8gJ2JsdWUnIDogJyc7XHJcbiAgICBsZXQgd2lkdGhTdHlsZSA9IHRoaXMud2lkdGggPT0gJycgPyAnJyA6IGB3aWR0aDogJHt0aGlzLndpZHRofTtgO1xyXG4gICAgbGV0IGlkSW5mbyA9ICdjYXJkLScgKyAoKCgxK01hdGgucmFuZG9tKCkpKjB4MTAwMDAwMDApfDApO1xyXG5cclxuICAgIGlmICh0aGlzLnNyYyA9PSAnJykge1xyXG4gICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPGFydGljbGUgYXJpYS1sYWJlbGxlZGJ5PVwiJHtpZEluZm99XCIgY2xhc3M9XCIke2NvbnRlbnRDbGFzc31cIiBzdHlsZT1cIiR7d2lkdGhTdHlsZX1cIiBAY2xpY2s9XCIke3RoaXMuX2NsaWNrfVwiIEBtb3VzZW92ZXI9XCIke3RoaXMuX2hpZ2xpZ2h0fVwiIEBtb3VzZW91dD1cIiR7dGhpcy5fdG9uZWRvd259XCI+XHJcbiAgICAgICAgICA8c2xvdCBuYW1lPVwiaW1hZ2VcIj48L3Nsb3Q+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dCBub3BpY3R1cmVcIj48YSBpZD1cIiR7aWRJbmZvfVwiIEBmb2N1cz1cIiR7dGhpcy5faGlnbGlnaHR9XCIgQGJsdXI9XCIke3RoaXMuX3RvbmVkb3dufVwiIGhyZWY9XCIke3RoaXMuaHJlZn1cIj48c2xvdCBuYW1lPVwiaGVhZGVyXCI+JHt0aGlzLnJlbmRlckhpZGRlblBhcmFncmFwaCgpfTwvc2xvdD48L2E+PHNsb3Q+PC9zbG90PjwvZGl2PlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgPGFydGljbGUgYXJpYS1sYWJlbGxlZGJ5PVwiJHtpZEluZm99XCIgY2xhc3M9XCIke2NvbnRlbnRDbGFzc31cIiBzdHlsZT1cIiR7d2lkdGhTdHlsZX1cIiBAY2xpY2s9XCIke3RoaXMuX2NsaWNrfVwiIEBtb3VzZW92ZXI9XCIke3RoaXMuX2hpZ2xpZ2h0fVwiIEBtb3VzZW91dD1cIiR7dGhpcy5fdG9uZWRvd259XCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt0aGlzLnNyY31cIiBhbHQ9XCIke3RoaXMuYWx0fVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPjxhIGlkPVwiJHtpZEluZm99XCIgQGZvY3VzPVwiJHt0aGlzLl9oaWdsaWdodH1cIiBAYmx1cj1cIiR7dGhpcy5fdG9uZWRvd259XCIgaHJlZj1cIiR7dGhpcy5ocmVmfVwiPjxzbG90IG5hbWU9XCJoZWFkZXJcIj4ke3RoaXMucmVuZGVySGlkZGVuUGFyYWdyYXBoKCl9PC9zbG90PjwvYT48c2xvdD48L3Nsb3Q+PC9kaXY+XHJcbiAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIGA7XHJcbiAgfVxyXG5cclxuICBfY2xpY2soZSkge1xyXG4gICAgaWYgKHRoaXMuaHJlZiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuaHJlZjtcclxuICAgIH0gXHJcbiAgfVxyXG5cclxuICBfaGlnbGlnaHQoZSkge1xyXG4gICAgdGhpcy5oaWdobGlnaHQgPSB0cnVlO1xyXG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUnKS5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQnKTtcclxuICB9XHJcblxyXG4gIF90b25lZG93bihlKSB7XHJcbiAgICB0aGlzLmhpZ2hsaWdodCA9IGZhbHNlO1xyXG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKTtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtY2xpY2thYmxlLWNhcmQnLCBDbGlja2FibGVDYXJkKTtcclxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICAgIGFydGljbGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlsLWdyYXktMik7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWlsLW9yYW5nZSk7XHJcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1pbC1jbGlja2FibGUtY2FyZC1tYXJnaW4pO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogdmFyKC0taWwtdGV4dC1jb2xvcik7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taWwtYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBhcnRpY2xlLmJsdWUge1xyXG4gICAgICAtLWlsLXRleHQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAtLWlsLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWlsLWJsdWUpO1xyXG4gICAgICAtLWlsLWNsaWNrYWJsZS1jYXJkLWNvbG9yLWhvdmVyOiB2YXIoLS1pbC1ibHVlKTtcclxuICAgICAgLS1pbC1jbGlja2FibGUtY2FyZC1iYWNrZ3JvdW5kLWhvdmVyOiB3aGl0ZTtcclxuICAgIH1cclxuICAgIGFydGljbGUuaGlnaGxpZ2h0IHtcclxuICAgICAgY29sb3I6IHZhcigtLWlsLWNsaWNrYWJsZS1jYXJkLWNvbG9yLWhvdmVyKTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taWwtY2xpY2thYmxlLWNhcmQtYmFja2dyb3VuZC1ob3Zlcik7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1pbC1pbmR1c3RyaWFsLWJsdWUtMSk7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBhcnRpY2xlLmhpZ2hsaWdodCBpbWcge1xyXG4gICAgICBmaWx0ZXI6IHZhcigtLWlsLWNsaWNrYWJsZS1jYXJkLWltYWdlLWZpbHRlcik7XHJcbiAgICAgIHRyYW5zZm9ybTogdmFyKC0taWwtY2xpY2thYmxlLWNhcmQtaW1hZ2UtdHJhbnNmb3JtKTtcclxuICAgIH1cclxuICAgIGRpdi50ZXh0IHtcclxuICAgICAgcGFkZGluZzogMS43NXJlbSAxLjg3NXJlbSAyLjhyZW0gMS44NzVyZW07XHJcbiAgICB9XHJcbiAgICBkaXYudGV4dC5ub3BpY3R1cmUge1xyXG4gICAgICBwYWRkaW5nOiAyLjhyZW0gMS44NzVyZW07XHJcbiAgICB9XHJcbiAgICBhcnRpY2xlIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBhcnRpY2xlIGE6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgLmlsLWludmlzaWJsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgICBsZWZ0OiAtOTk5OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRvcDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtaW5kZW50OiAtOTk5OWVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxcHggIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NhcmQuY3NzJztcclxuXHJcbmNsYXNzIFByb2ZpbGVDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIHN0eWxlcztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cInByb2ZpbGVcIj5cclxuICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpbC1wcm9maWxlLWNhcmQnLCBQcm9maWxlQ2FyZCk7XHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIGFydGljbGUge1xyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wcm9maWxlLmNzcyc7XHJcblxyXG5jbGFzcyBQcm9maWxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIHN0eWxlcztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cInByb2ZpbGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cInByaW1hcnlcIj48L3Nsb3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImNvbnRhY3RcIj48L3Nsb3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGRpdGlvbmFsXCI+XHJcbiAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtcHJvZmlsZScsIFByb2ZpbGUpO1xyXG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzYFxyXG4gIDpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBhcnRpY2xlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiA0MHB4O1xyXG4gIH1cclxuICAucHJpbWFyeSB7XHJcbiAgICBncmlkLWFyZWE6IHByaW1hcnk7XHJcbiAgfVxyXG4gIC5jb250YWN0IHtcclxuICAgIGdyaWQtYXJlYTogY29udGFjdDtcclxuICB9XHJcbiAgLmFkZGl0aW9uYWwge1xyXG4gICAgZ3JpZC1hcmVhOiBhZGRpdGlvbmFsO1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIGFydGljbGUge1xyXG4gICAgICAtLWlsLXByb2ZpbGUtcGFnZS1uYW1lLWZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDMwMHB4O1xyXG4gICAgICBncmlkLWdhcDogNDBweDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJwcmltYXJ5IHByaW1hcnlcIiBcImFkZGl0aW9uYWwgY29udGFjdFwiO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTYwcHgpIHtcclxuICAgIGFydGljbGUge1xyXG4gICAgICBtYXgtd2lkdGg6IDExNDBweDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDQwMHB4O1xyXG4gICAgICBncmlkLWdhcDogNDBweDtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJwcmltYXJ5IGNvbnRhY3RcIiBcImFkZGl0aW9uYWwgY29udGFjdFwiO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nYWxsZXJ5LWRldGFpbC5jc3MnO1xyXG5cclxuY2xhc3MgR2FsbGVyeURldGFpbENvbXBvbmVudCBleHRlbmRzIExpdEVsZW1lbnQge1xyXG5cclxuICAgIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgICAgIHJldHVybiBzdHlsZXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaHJlZjoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiB0cnVlfSxcclxuICAgICAgICAgICAgaG9tZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiB0cnVlfSxcclxuICAgICAgICAgICAgcHJldmlvdXM6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZX0sXHJcbiAgICAgICAgICAgIG5leHQ6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZX1cclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmhvbWUgPSAnJztcclxuICAgICAgICB0aGlzLnByZXZpb3VzID0gJyc7XHJcbiAgICAgICAgdGhpcy5uZXh0ID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySG9tZSgpIHsgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9tZSA9PSAnJyA/IGh0bWxgYCA6IGh0bWxgPGEgaHJlZj1cIiR7dGhpcy5ob21lfVwiIGNsYXNzPVwiZ2FsbGVyeS1kZXRhaWwtYmFja1wiPiR7dGhpcy5yZW5kZXJDaGV2cm9uKCl9IEJhY2sgdG8gR2FsbGVyeTwvYT5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlck5hdmlnYXRpb24oKSB7IFxyXG4gICAgICAgIHJldHVybiB0aGlzLnByZXZpb3VzID09ICcnICYmIHRoaXMubmV4dCA9PSAnJyA/IGh0bWxgYCA6IFxyXG4gICAgICAgIHRoaXMubmV4dCA9PSAnJyA/IGh0bWxgPG5hdiBjbGFzcz1cImdhbGxlcnktZGV0YWlsLW5hdmlnYXRpb25cIiBhcmlhLWxhYmVsPVwiR2FsbGVyeSBOYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMucHJldmlvdXN9XCIgY2xhc3M9XCJnYWxsZXJ5LWRldGFpbC1wcmV2aW91c1wiIGFyaWEtbGFiZWw9XCJQcmV2aW91cyBJdGVtXCI+JHt0aGlzLnJlbmRlckNoZXZyb24oKX08L2E+PC9uYXY+YCA6XHJcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9PSAnJyA/IGh0bWxgPG5hdiBjbGFzcz1cImdhbGxlcnktZGV0YWlsLW5hdmlnYXRpb25cIiBhcmlhLWxhYmVsPVwiR2FsbGVyeSBOYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIke3RoaXMubmV4dH1cIiBjbGFzcz1cImdhbGxlcnktZGV0YWlsLW5leHRcIiBhcmlhLWxhYmVsPVwiTmV4dCBJdGVtXCI+JHt0aGlzLnJlbmRlckNoZXZyb24oKX08L2E+PC9uYXY+YCA6XHJcbiAgICAgICAgaHRtbGA8bmF2IGNsYXNzPVwiZ2FsbGVyeS1kZXRhaWwtbmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJHYWxsZXJ5IE5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7dGhpcy5wcmV2aW91c31cIiBjbGFzcz1cImdhbGxlcnktZGV0YWlsLXByZXZpb3VzXCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzIEl0ZW1cIj4ke3RoaXMucmVuZGVyQ2hldnJvbigpfTwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiR7dGhpcy5uZXh0fVwiIGNsYXNzPVwiZ2FsbGVyeS1kZXRhaWwtbmV4dFwiIGFyaWEtbGFiZWw9XCJOZXh0IEl0ZW1cIj4ke3RoaXMucmVuZGVyQ2hldnJvbigpfTwvYT48L25hdj5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckNoZXZyb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA0NDggNTEyXCI+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMjA3LjAyOSAzODEuNDc2TDEyLjY4NiAxODcuMTMyYy05LjM3My05LjM3My05LjM3My0yNC41NjkgMC0zMy45NDFsMjIuNjY3LTIyLjY2N2M5LjM1Ny05LjM1NyAyNC41MjItOS4zNzUgMzMuOTAxLS4wNEwyMjQgMjg0LjUwNWwxNTQuNzQ1LTE1NC4wMjFjOS4zNzktOS4zMzUgMjQuNTQ0LTkuMzE3IDMzLjkwMS4wNGwyMi42NjcgMjIuNjY3YzkuMzczIDkuMzczIDkuMzczIDI0LjU2OSAwIDMzLjk0MUwyNDAuOTcxIDM4MS40NzZjLTkuMzczIDkuMzcyLTI0LjU2OSA5LjM3Mi0zMy45NDIgMHpcIiAvPlxyXG4gICAgICAgIDwvc3ZnPmA7XHJcbiAgICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxgPGRpdiBjbGFzcz1cImdhbGxlcnktZGV0YWlsXCI+XHJcbiAgICAgICAgJHt0aGlzLnJlbmRlckhvbWUoKX1cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1kZXRhaWwtdGV4dFwiPjxzbG90IG5hbWU9XCJjYXB0aW9uXCI+PC9zbG90PjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWRldGFpbC1pbWFnZVwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cclxuICAgICAgICAke3RoaXMucmVuZGVyTmF2aWdhdGlvbigpfVxyXG4gICAgICAgIDwvZGl2PmA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtZ2FsbGVyeS1kZXRhaWwnLCBHYWxsZXJ5RGV0YWlsQ29tcG9uZW50KTsiLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzYFxyXG4gICAgZGl2LmdhbGxlcnktZGV0YWlsIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTYwcHggYXV0byAxNjBweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDE1MHB4O1xyXG4gICAgfVxyXG4gICAgZGl2LmdhbGxlcnktZGV0YWlsIC5nYWxsZXJ5LWRldGFpbC1pbWFnZSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDM7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgZGl2LmdhbGxlcnktZGV0YWlsIC5nYWxsZXJ5LWRldGFpbC1uYXZpZ2F0aW9uIHtcclxuICAgICAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taWwtYmx1ZSk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgNHB4IHZhcigtLWlsLW9yYW5nZSk7XHJcbiAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBkaXYuZ2FsbGVyeS1kZXRhaWwgLmdhbGxlcnktZGV0YWlsLXRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGVuZDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgfVxyXG4gICAgZGl2LmdhbGxlcnktZGV0YWlsIC5nYWxsZXJ5LWRldGFpbC1iYWNrIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgZGl2LmdhbGxlcnktZGV0YWlsIC5nYWxsZXJ5LWRldGFpbC1iYWNrIHN2ZyB7XHJcbiAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIH1cclxuICAgIGRpdi5nYWxsZXJ5LWRldGFpbCAuZ2FsbGVyeS1kZXRhaWwtbmF2aWdhdGlvbiBhIHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgfVxyXG4gICAgZGl2LmdhbGxlcnktZGV0YWlsIC5nYWxsZXJ5LWRldGFpbC1uYXZpZ2F0aW9uIGE6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIH1cclxuICAgIGRpdi5nYWxsZXJ5LWRldGFpbCAuZ2FsbGVyeS1kZXRhaWwtbmF2aWdhdGlvbiBhOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XHJcbiAgICB9XHJcbiAgICBkaXYuZ2FsbGVyeS1kZXRhaWwgLmdhbGxlcnktZGV0YWlsLW5hdmlnYXRpb24gYTpmb2N1cywgZGl2LmdhbGxlcnktZGV0YWlsIC5nYWxsZXJ5LWRldGFpbC1uYXZpZ2F0aW9uIGE6aG92ZXIge1xyXG4gICAgICAgIGZpbGw6IHZhcigtLWlsLW9yYW5nZSk7XHJcbiAgICB9XHJcbmA7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9nYWxsZXJ5LWl0ZW0uY3NzJztcclxuaW1wb3J0IERlYnVnZ2VyIGZyb20gJy4uLy4uL2RlYnVnJztcclxuXHJcbmNsYXNzIEdhbGxlcnlJdGVtQ29tcG9uZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gICAgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcclxuICAgICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBocmVmOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaHJlZiA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgICA8bGkgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cclxuICAgICAgICA8YSBocmVmPVwiJHt0aGlzLmhyZWZ9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWltYWdlLWZyYW1lXCI+XHJcbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWltYWdlLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJ0aXRsZVwiPjwvc2xvdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWltYWdlLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjYXB0aW9uXCI+PC9zbG90PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPmA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtZ2FsbGVyeS1pdGVtJywgR2FsbGVyeUl0ZW1Db21wb25lbnQpOyIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgICBsaS5nYWxsZXJ5LWl0ZW0gLmdhbGxlcnktaW1hZ2UtZnJhbWUge1xyXG4gICAgICAgIGhlaWdodDogdmFyKC0taWwtZ2FsbGVyeS1oZWlnaHQpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taWwtZ2FsbGVyeS1iYWNrZ3JvdW5kKTtcclxuICAgIH1cclxuICAgIGxpLmdhbGxlcnktaXRlbSAuZ2FsbGVyeS1pbWFnZS10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IC41cmVtO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjVyZW07XHJcbiAgICB9XHJcbiAgICBsaS5nYWxsZXJ5LWl0ZW0gLmdhbGxlcnktaW1hZ2UtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogLjVyZW07XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xyXG4gICAgfVxyXG4gICAgbGkuZ2FsbGVyeS1pdGVtIGEge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pbC10ZXh0LWNvbG9yKTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBsaS5nYWxsZXJ5LWl0ZW0gYTpob3ZlciwgbGkuZ2FsbGVyeS1pdGVtIGE6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pbC1nYWxsZXJ5LXRleHQtZm9jdXMpO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBsaS5nYWxsZXJ5LWl0ZW0gYTpob3ZlciAuZ2FsbGVyeS1pbWFnZS10aXRsZSwgbGkuZ2FsbGVyeS1pdGVtIGE6Zm9jdXMgLmdhbGxlcnktaW1hZ2UtdGl0bGUsIFxyXG4gICAgbGkuZ2FsbGVyeS1pdGVtIGE6aG92ZXIgLmdhbGxlcnktaW1hZ2UtZGVzY3JpcHRpb24sIGxpLmdhbGxlcnktaXRlbSBhOmZvY3VzIC5nYWxsZXJ5LWltYWdlLWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbC1nYWxsZXJ5LWJhY2tncm91bmQtZm9jdXMpO1xyXG4gICAgfVxyXG4gICAgbGkuZ2FsbGVyeS1pdGVtIGE6aG92ZXIgLmdhbGxlcnktaW1hZ2UtZnJhbWUsIGxpLmdhbGxlcnktaXRlbSBhOmZvY3VzIC5nYWxsZXJ5LWltYWdlLWZyYW1lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbC1nYWxsZXJ5LWJhY2tncm91bmQtZm9jdXMpO1xyXG4gICAgfVxyXG5gOyIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ2FsbGVyeS5jc3MnO1xyXG5pbXBvcnQgRGVidWdnZXIgZnJvbSAnLi4vLi4vZGVidWcnO1xyXG5cclxuY2xhc3MgR2FsbGVyeUNvbXBvbmVudCBleHRlbmRzIExpdEVsZW1lbnQge1xyXG5cclxuICAgIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgICAgIHJldHVybiBzdHlsZXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgPHVsIGNsYXNzPVwiZ2FsbGVyeVwiPlxyXG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgICAgPC91bD5gO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpbC1nYWxsZXJ5JywgR2FsbGVyeUNvbXBvbmVudCk7IiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxudWwuZ2FsbGVyeSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLHZhcigtLWlsLWdhbGxlcnktd2lkdGgpKTtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogNjBweDtcclxuICAgIGdyaWQtcm93LWdhcDogNDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5gOyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgQWxpZ25tZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHN0cikge1xyXG4gICAgICAgIHRoaXMueCA9ICdjZW50ZXInO1xyXG4gICAgICAgIHRoaXMueSA9ICdjZW50ZXInO1xyXG4gICAgICAgIGNvbnN0IHdvcmRzID0gc3RyID8gc3RyLnRvTG93ZXJDYXNlKCkuc3BsaXQoL1xccysvKSA6IFtdO1xyXG4gICAgICAgIGlmICh3b3Jkcy5pbmNsdWRlcygnbGVmdCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9ICdsZWZ0JztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHdvcmRzLmluY2x1ZGVzKCdyaWdodCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9ICdyaWdodCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3b3Jkcy5pbmNsdWRlcygndG9wJykpIHtcclxuICAgICAgICAgICAgdGhpcy55ID0gJ3RvcCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh3b3Jkcy5pbmNsdWRlcygnYm90dG9tJykpIHtcclxuICAgICAgICAgICAgdGhpcy55ID0gJ2JvdHRvbSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCBBbGlnbm1lbnQgZnJvbSAnLi9hbGlnbm1lbnQnO1xyXG5pbXBvcnQgRGVidWdnZXIgZnJvbSAnLi4vLi4vZGVidWcnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVyby5jc3MnO1xyXG5cclxuY2xhc3MgSGVybyBleHRlbmRzIExpdEVsZW1lbnQge1xyXG5cclxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhbGlnbjogeyB0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZSB9LFxyXG4gICAgICBhbHQ6IHsgdHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWUgfSxcclxuICAgICAgYmFja2dyb3VuZDogeyB0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZSB9LFxyXG4gICAgICBjb2xvcjogeyB0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZSwgZGVmYXVsdDogXCJibHVlXCIgfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmFsaWduID0gJyc7XHJcbiAgICB0aGlzLmFsdCA9ICcnO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5jb2xvciA9IFwiYmx1ZVwiO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdhbGlnbicpKSB7XHJcbiAgICAgIERlYnVnZ2VyLndhcm4oXCJpbC1oZXJvOiB0aGUgXFxcImFsaWduXFxcIiBhdHRyaWJ1dGUgaXMgZGVwcmVjYXRlZC4gVXNlIGFsaWdubWVudCBjbGFzc2VzIGluc3RlYWQuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdhbHQnKSkge1xyXG4gICAgICBEZWJ1Z2dlci53YXJuKFwiaWwtaGVybzogdGhlIFxcXCJhbHRcXFwiIGF0dHJpYnV0ZSBpcyBkZXByZWNhdGVkLiBVc2UgYSBzbG90dGVkIGltYWdlIGVsZW1lbnQgd2l0aCBhbHQgdGV4dCBpbnN0ZWFkLlwiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnYmFja2dyb3VuZCcpKSB7XHJcbiAgICAgIERlYnVnZ2VyLndhcm4oXCJpbC1oZXJvOiB0aGUgXFxcImJhY2tncm91bmRcXFwiIGF0dHJpYnV0ZSBpcyBkZXByZWNhdGVkLiBVc2UgYSBzbG90dGVkIGltYWdlIGVsZW1lbnQgaW5zdGVhZC5cIik7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ2NvbG9yJykpIHtcclxuICAgICAgRGVidWdnZXIud2FybihcImlsLWhlcm86IHRoZSBcXFwiY29sb3JcXFwiIGF0dHJpYnV0ZSBpcyBkZXByZWNhdGVkLiBVc2UgdGhlbWUgY2xhc3NlcyBpbnN0ZWFkLlwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckJhY2tncm91bmRJbWFnZSgpIHtcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHt0aGlzLmJhY2tncm91bmR9XCIgYWx0PVwiJHt0aGlzLmFsdH1cIj5cclxuICAgIGA7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBhbGlnbm1lbnQgPSBuZXcgQWxpZ25tZW50KHRoaXMuYWxpZ24pO1xyXG4gICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImhlcm9cIiBkYXRhLWNvbG9yPSR7Y29sb3J9IGRhdGEtYWxpZ24teD0ke2FsaWdubWVudC54fSBkYXRhLWFsaWduLXk9JHthbGlnbm1lbnQueX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgICAgICR7dGhpcy5iYWNrZ3JvdW5kID8gdGhpcy5yZW5kZXJCYWNrZ3JvdW5kSW1hZ2UoKSA6ICcnfVxyXG4gICAgICAgICAgICA8L3Nsb3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyLS1sZXZlbC0xIGNvbnRlbnQtb3V0ZXIgY29udGVudC1jb250YWluZXItLWZvci1pbC1jb250ZW50LW1hcmdpblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXItLWxldmVsLTIgY29udGVudC1jb250YWluZXItLWZvci1pbC1jb250ZW50LW1heC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lci0tbGV2ZWwtMyBjb250ZW50IGNvbnRlbnQtY29udGFpbmVyLS1mb3ItaGVyby1jb250ZW50LW1heC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2lsLWhlcm8nLCBIZXJvKTtcclxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuXHJcbi5oZXJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWwtaGVyby1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIERFUFJFQ0FURUQ6IGFsaWdubWVudCBhdHRyaWJ1dGUgKi9cclxuLmhlcm9bZGF0YS1hbGlnbi14PVwibGVmdFwiXSB7XHJcbiAgLS1pbC1oZXJvLW1hcmdpbi1sZWZ0OiAwO1xyXG4gIC0taWwtaGVyby1tYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgLS1pbC1oZXJvLWFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIC0taWwtaGVyby10ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5oZXJvW2RhdGEtYWxpZ24teD1cInJpZ2h0XCJdIHtcclxuICAtLWlsLWhlcm8tbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgLS1pbC1oZXJvLW1hcmdpbi1yaWdodDogMDtcclxuICAtLWlsLWhlcm8tYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gIC0taWwtaGVyby10ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uaGVyb1tkYXRhLWFsaWduLXk9XCJ0b3BcIl0ge1xyXG4gIC0taWwtaGVyby1qdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuLmhlcm9bZGF0YS1hbGlnbi15PVwiYm90dG9tXCJdIHtcclxuICAtLWlsLWhlcm8tanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLyogREVQUkVDQVRFRDogY29sb3IgYXR0cmlidXRlICovXHJcblxyXG4uaGVyb1tkYXRhLWNvbG9yPVwib3JhbmdlXCJdIHtcclxuICAtLWlsLWhlcm8tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWwtb3JhbmdlKTtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGVudC1jb250YWluZXItLWxldmVsLTEge1xyXG4gIHBhZGRpbmctbGVmdDogdmFyKC0taWwtY29udGVudC1tYXJnaW4pO1xyXG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlsLWNvbnRlbnQtbWFyZ2luKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcbi5jb250ZW50LWNvbnRhaW5lci0tbGV2ZWwtMiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiB2YXIoLS1pbC1jb250ZW50LW1heC13aWR0aCk7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmNvbnRlbnQtY29udGFpbmVyLS1sZXZlbC0zIHtcclxuICBwYWRkaW5nOiAxOHB4IDAgMzZweDtcclxufVxyXG5cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMjIzcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XHJcbiAgLmJhY2tncm91bmQgaW1nIHtcclxuICAgIGhlaWdodDogMzE1cHg7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDM2cHggMCA3MnB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICAuYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gIH1cclxuICAuYmFja2dyb3VuZCBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAxO1xyXG4gIH1cclxuICAuY29udGVudC1jb250YWluZXItLWxldmVsLTMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHZhcigtLWlsLWhlcm8tanVzdGlmeS1jb250ZW50KTtcclxuICAgIGFsaWduLWl0ZW1zOiB2YXIoLS1pbC1oZXJvLWFsaWduLWl0ZW1zKTtcclxuICAgIHRleHQtYWxpZ246IHZhcigtLWlsLWhlcm8tdGV4dC1hbGlnbik7XHJcbiAgICB3aWR0aDogNjYlO1xyXG4gICAgbWluLWhlaWdodDogNDE3cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0taWwtaGVyby1tYXJnaW4tbGVmdCk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlsLWhlcm8tbWFyZ2luLXJpZ2h0KTtcclxuICAgIHBhZGRpbmc6IDYwcHggMCA4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuYDsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ltYWdlLWZlYXR1cmUuY3NzJztcclxuaW1wb3J0IERlYnVnZ2VyIGZyb20gJy4uLy4uL2RlYnVnJztcclxuXHJcbmNsYXNzIEltYWdlRmVhdHVyZUNvbXBvbmVudCBleHRlbmRzIExpdEVsZW1lbnQge1xyXG5cclxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNpemU6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZX0sXHJcbiAgICAgICAgYmFja2dyb3VuZDoge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiB0cnVlfSxcclxuICAgICAgICBzcmM6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZX0sXHJcbiAgICAgICAgYWx0OiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgICAgIGFsaWduOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gc3R5bGVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zaXplID0gJyc7XHJcbiAgICB0aGlzLnNyYyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuYWx0ID0gJyc7XHJcbiAgICB0aGlzLmJhY2tncm91bmQgPSAnJztcclxuICAgIHRoaXMuYWxpZ24gPSAnJztcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnYWxpZ24nKSkge1xyXG4gICAgICBEZWJ1Z2dlci53YXJuKFwiaWwtaW1hZ2UtZmVhdHVyZTogdGhlIFxcXCJhbGlnblxcXCIgYXR0cmlidXRlIGlzIGRlcHJlY2F0ZWQuIFVzZSBhbGlnbm1lbnQgY2xhc3NlcyBpbnN0ZWFkLlwiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnYWx0JykpIHtcclxuICAgICAgRGVidWdnZXIud2FybihcImlsLWltYWdlLWZlYXR1cmU6IHRoZSBcXFwiYWx0XFxcIiBhdHRyaWJ1dGUgaXMgZGVwcmVjYXRlZC4gVXNlIHRoZSBpbWFnZSBzbG90IGluc3RlYWQuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdiYWNrZ3JvdW5kJykpIHtcclxuICAgICAgRGVidWdnZXIud2FybihcImlsLWltYWdlLWZlYXR1cmU6IHRoZSBcXFwiYmFja2dyb3VuZFxcXCIgYXR0cmlidXRlIGlzIGRlcHJlY2F0ZWQuIFVzZSBhIHNsb3R0ZWQgaW1hZ2UgZWxlbWVudCBpbnN0ZWFkLlwiKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnc2l6ZScpKSB7XHJcbiAgICAgIERlYnVnZ2VyLndhcm4oXCJpbC1pbWFnZS1mZWF0dXJlOiB0aGUgXFxcInNpemVcXFwiIGF0dHJpYnV0ZSBpcyBkZXByZWNhdGVkLiBVc2Ugc2l6ZSBjbGFzc2VzIGluc3RlYWQuXCIpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdzcmMnKSkge1xyXG4gICAgICBEZWJ1Z2dlci53YXJuKFwiaWwtaW1hZ2UtZmVhdHVyZTogdGhlIFxcXCJzcmNcXFwiIGF0dHJpYnV0ZSBpcyBkZXByZWNhdGVkLiBVc2UgdGhlIGltYWdlIHNsb3QgaW5zdGVhZC5cIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBpZiAodGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nICE9IG51bGwgJiYgdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmxvY2FsTmFtZSA9PSBcImlsLWltYWdlLWZlYXR1cmVcIiAmJiAhdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnaWwtYWxpZ24tcmlnaHQnKSAmJiAhdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucygnaWwtYWxpZ24tbGVmdCcpICYmICF0aGlzLmNsYXNzTGlzdC5jb250YWlucygnaWwtYWxpZ24tcmlnaHQnKSAmJiAhdGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2lsLWFsaWduLWxlZnQnKSkge1xyXG4gICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2lsLWFsaWduLXJpZ2h0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYmFja2dyb3VuZCAhPT0gJycpIHtcclxuICAgICAgaWYgKHRoaXMuYmFja2dyb3VuZCA9PSAnc29saWQnIHx8IHRoaXMuYmFja2dyb3VuZCA9PSAnYmx1ZScpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2lsLXRoZW1lLWJsdWUnKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLmJhY2tncm91bmQgPT0gJ29yYW5nZScpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2lsLXRoZW1lLW9yYW5nZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5hbGlnbiAhPT0gJycpIHtcclxuICAgICAgaWYgKHRoaXMuYWxpZ24gPT0gJ2xlZnQnKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdpbC1hbGlnbi1sZWZ0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5hbGlnbiA9PSAncmlnaHQnKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdpbC1hbGlnbi1yaWdodCcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaXplICE9PSAnJykge1xyXG4gICAgICBpZiAodGhpcy5zaXplID09ICdwb3J0cmFpdCcpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2lsLXNpemUteHNtYWxsJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZiAodGhpcy5zaXplID09ICdzbWFsbCcpIHtcclxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2lsLXNpemUtc21hbGwnKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh0aGlzLnNpemUgPT0gJ2xhcmdlJykge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaWwtc2l6ZS1sYXJnZScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zcmMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPGRpdiBjbGFzcz1cImltYWdlZmVhdHVyZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIj48aW1nIHNyYz0nJHt0aGlzLnNyY30nIGFsdD0nJHt0aGlzLmFsdH0nIHN0eWxlPSdvYmplY3QtZml0OiBjb3ZlcjsgcG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyc+PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1pbm5lclwiPlxyXG4gICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+YDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ2lsLW92ZXJsYXknKSkge1xyXG4gICAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPGRpdiBjbGFzcz1cImlsLWltYWdlLWZlYXR1cmUtd2l0aC1vdmVybGF5XCI+XHJcbiAgICAgICAgPHNsb3QgbmFtZT1cImltYWdlXCI+PC9zbG90PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbC1pbWFnZS1mZWF0dXJlLXdpdGgtb3ZlcmxheS1vdXRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlsLWltYWdlLWZlYXR1cmUtd2l0aC1vdmVybGF5LWlubmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbC1pbWFnZS1mZWF0dXJlLXdpdGgtb3ZlcmxheS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5gO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZWZlYXR1cmVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIj48c2xvdCBuYW1lPVwiaW1hZ2VcIj48L3Nsb3Q+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtaW1hZ2UtZmVhdHVyZScsIEltYWdlRmVhdHVyZUNvbXBvbmVudCk7XHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzYFxyXG4gICAgLmltYWdlZmVhdHVyZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1pbC1pbWFnZS1mZWF0dXJlLW1heC13aWR0aCk7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2VmZWF0dXJlLnJpZ2h0IHtcclxuICAgICAgICAtLWlsLWltYWdlLWZlYXR1cmUtZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgfVxyXG4gICAgLmltYWdlZmVhdHVyZS5sYXJnZSB7XHJcbiAgICAgICAgLS1pbC1pbWFnZS1mZWF0dXJlLWZsZXgtZ3Jvdy1pbWFnZTogMjtcclxuICAgIH1cclxuICAgIC5pbWFnZWZlYXR1cmUuc21hbGwge1xyXG4gICAgICAgIC0taWwtaW1hZ2UtZmVhdHVyZS1mbGV4LWdyb3ctY29udGVudDogMjtcclxuICAgIH1cclxuICAgIC5pbWFnZWZlYXR1cmUucG9ydHJhaXQge1xyXG4gICAgICAgIC0taWwtaW1hZ2UtZmVhdHVyZS1mbGV4LWdyb3ctY29udGVudDogNDtcclxuICAgICAgICAtLWlsLWltYWdlLWZlYXR1cmUtbWluLWhlaWdodDogMTB2dztcclxuICAgIH1cclxuICAgIC5pbWFnZWZlYXR1cmUgLmJhY2tncm91bmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzMTBweDtcclxuICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWdyb3c6IHZhcigtLWlsLWltYWdlLWZlYXR1cmUtZmxleC1ncm93LWltYWdlKTtcclxuICAgICAgICBmbGV4LXNocmluazogMTtcclxuICAgICAgICBmbGV4LWJhc2lzOiAwO1xyXG4gICAgfVxyXG4gICAgLmltYWdlZmVhdHVyZSAuY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taWwtaW1hZ2UtZmVhdHVyZS1jb2xvcik7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taWwtaW1hZ2UtZmVhdHVyZS1iYWNrZ3JvdW5kKTtcclxuICAgICAgICBmbGV4LWdyb3c6IHZhcigtLWlsLWltYWdlLWZlYXR1cmUtZmxleC1ncm93LWNvbnRlbnQpO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmltYWdlZmVhdHVyZSAuY29udGVudCAuY29udGVudC1pbm5lciB7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0taWwtaW1hZ2UtZmVhdHVyZS1jb250ZW50LXBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgLmlsLWltYWdlLWZlYXR1cmUtd2l0aC1vdmVybGF5IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbC1pbWFnZS1mZWF0dXJlLXdpdGgtb3ZlcmxheS1pbm5lciB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDc1cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwNXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogdmFyKC0taWwtY29udGVudC1tYXgtd2lkdGgpO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogdmFyKC0taWwtaW1hZ2UtZmVhdHVyZS13aXRoLW92ZXJsYXktYWxpZ24pO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pbC1pbWFnZS1mZWF0dXJlLWNvbG9yKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmlsLWltYWdlLWZlYXR1cmUtd2l0aC1vdmVybGF5LWNvbnRlbnQge1xyXG4gICAgICAgIHdpZHRoOiB2YXIoLS1pbC1pbWFnZS1mZWF0dXJlLXdpdGgtb3ZlcmxheS13aWR0aCk7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0taWwtaW1hZ2UtZmVhdHVyZS13aXRoLW92ZXJsYXktcGFkZGluZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taWwtaW1hZ2UtZmVhdHVyZS13aXRoLW92ZXJsYXktYmFja2dyb3VuZCk7XHJcbiAgICAgICAgbWFyZ2luOiAwIDcwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkwcHgpIHtcclxuICAgICAgICAuaWwtaW1hZ2UtZmVhdHVyZS13aXRoLW92ZXJsYXkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbC1pbWFnZS1mZWF0dXJlLXdpdGgtb3ZlcmxheS1iYWNrZ3JvdW5kLXNvbGlkKTtcclxuICAgICAgICAgICAgYm9yZGVyOiB2YXIoLS1pbC1pbWFnZS1mZWF0dXJlLXdpdGgtb3ZlcmxheS1ib3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWwtaW1hZ2UtZmVhdHVyZS13aXRoLW92ZXJsYXktb3V0ZXIge1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiB2YXIoLS1pbC1pbWFnZS1mZWF0dXJlLXdpdGgtb3ZlcmxheS1ib3JkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaWwtaW1hZ2UtZmVhdHVyZS13aXRoLW92ZXJsYXktaW5uZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlsLWltYWdlLWZlYXR1cmUtd2l0aC1vdmVybGF5LWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taWwtaW1hZ2UtZmVhdHVyZS13aXRoLW92ZXJsYXktYmFja2dyb3VuZC1zb2xpZCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgLmltYWdlZmVhdHVyZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiB2YXIoLS1pbC1pbWFnZS1mZWF0dXJlLWZsZXgtZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDogdmFyKC0taWwtaW1hZ2UtZmVhdHVyZS1taW4taGVpZ2h0KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taWwtaW1hZ2UtZmVhdHVyZS1iYWNrZ3JvdW5kKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltYWdlZmVhdHVyZSAuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2ludHJvZHVjdGlvbi5jc3MnO1xyXG5pbXBvcnQgRGVidWdnZXIgZnJvbSAnLi4vLi4vZGVidWcnO1xyXG5cclxuY2xhc3MgSW50cm9kdWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIHN0eWxlcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaHRtbGA8ZGl2IGNsYXNzPVwiaGVhZGluZ1wiPjxzbG90IG5hbWU9XCJoZWFkaW5nXCI+PC9zbG90PjwvZGl2PjxkaXYgY2xhc3M9XCJpbnRyb2R1Y3Rpb25cIj48c2xvdD48L3Nsb3Q+PC9kaXY+YDtcclxuICAgIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpbC1pbnRyb2R1Y3Rpb24nLCBJbnRyb2R1Y3Rpb25Db21wb25lbnQpO1xyXG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzYFxyXG4uaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMi42MjVyZW07XHJcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC45Mzc1cmVtO1xyXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1pbC1jb250ZW50LW1heC13aWR0aCk7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmludHJvZHVjdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMzc1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XHJcbiAgICBtYXgtd2lkdGg6IHZhcigtLWlsLWNvbnRlbnQtbWF4LXdpZHRoKTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbmA7XHJcbiIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgUmVzcG9uc2l2ZUxheW91dCBmcm9tICcuL3Jlc3BvbnNpdmUtbGF5b3V0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UuY3NzJztcclxuXHJcbmNsYXNzIFBhZ2VDb21wb25lbnQgZXh0ZW5kcyBSZXNwb25zaXZlTGF5b3V0IHtcclxuXHJcbiAgc3RhdGljIGdldCBtb2RlcygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHsgbmFtZTogJ2Z1bGwnLCBtYXRjaDogJyhtaW4td2lkdGg6IDk5MnB4KScgfSxcclxuICAgICAgeyBuYW1lOiAnY29tcGFjdCcgfVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnByb3BlcnRpZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBtb2RlID0gdGhpcy5tb2RlO1xyXG4gICAgcmV0dXJuIGh0bWxgXHJcbjxhcnRpY2xlIGNsYXNzPVwicGFnZSBwYWdlLSR7bW9kZX1cIj5cclxuICA8aGVhZGVyPlxyXG4gICAgPHNsb3QgbmFtZT1cImhlYWRlclwiPjwvc2xvdD5cclxuICA8L2hlYWRlcj5cclxuICA8bWFpbj5cclxuICAgIDxzbG90Pjwvc2xvdD5cclxuICA8L21haW4+XHJcbiAgPGZvb3Rlcj5cclxuICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIj48L3Nsb3Q+XHJcbiAgPC9mb290ZXI+XHJcbjwvYXJ0aWNsZT5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2lsLXBhZ2UnLCBQYWdlQ29tcG9uZW50KTtcclxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuXHJcbi5wYWdlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXJcIiBcIm1haW5cIiBcImZvb3RlclwiO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcclxufVxyXG5oZWFkZXIge1xyXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xyXG4gIHotaW5kZXg6IDYwMDtcclxufVxyXG5tYWluIHtcclxuICBncmlkLWFyZWE6IG1haW47XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuZm9vdGVyIHtcclxuICBncmlkLWFyZWE6IGZvb3RlcjtcclxufVxyXG5cclxuYDsiLCJpbXBvcnQgeyBMaXRFbGVtZW50IH0gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNpdmVMYXlvdXQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgc3RhdGljIGdldCBtb2RlcygpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1vZGU6IHsgdHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWUsIHJlZmxlY3Q6IHRydWUgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX21vZGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnVwZGF0ZU1vZGUgPSB0aGlzLnVwZGF0ZU1vZGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLnVwZGF0ZU1vZGUpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlTW9kZSk7XHJcbiAgICB0aGlzLnVwZGF0ZU1vZGUoKTtcclxuICB9XHJcblxyXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xyXG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLnVwZGF0ZU1vZGUpO1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMudXBkYXRlTW9kZSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbW9kZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9tb2RlO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1vZGUobW9kZSkge1xyXG4gICAgaWYgKHRoaXMuX21vZGUgIT09IG1vZGUpIHtcclxuICAgICAgdGhpcy5fbW9kZSA9IG1vZGU7XHJcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgnbW9kZScsIG1vZGUpO1xyXG4gICAgICB0aGlzLnVwZGF0ZUNvbXBsZXRlLnRoZW4odGhpcy5kaXNwYXRjaE1vZGVDaGFuZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzcGF0Y2hNb2RlQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnbW9kZUNoYW5nZScsIHsgZGV0YWlsOiB0aGlzLl9tb2RlIH0pKTtcclxuICB9XHJcblxyXG4gIGdldE1vZGVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IubW9kZXM7XHJcbiAgfVxyXG5cclxuICBtYXRjaE1vZGUobW9kZSkge1xyXG4gICAgcmV0dXJuIG1vZGUubWF0Y2ggPT09IHVuZGVmaW5lZCB8fCBtb2RlLm1hdGNoID09PSB0cnVlIHx8IHdpbmRvdy5tYXRjaE1lZGlhKG1vZGUubWF0Y2gpLm1hdGNoZXM7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNb2RlKCkge1xyXG4gICAgY29uc3QgbW9kZSA9IHRoaXMuZ2V0TW9kZXMoKS5maW5kKHRoaXMubWF0Y2hNb2RlKTtcclxuICAgIGlmICh0aGlzLm1vZGUgIT09IG1vZGUubmFtZSkge1xyXG4gICAgICB0aGlzLl9tb2RlID0gbW9kZS5uYW1lOyBcclxuICAgICAgdGhpcy5tb2RlID0gbW9kZS5uYW1lO1xyXG4gICAgICB0aGlzLmRpc3BhdGNoTW9kZUNoYW5nZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgUmVzcG9uc2l2ZUxheW91dCBmcm9tICcuL3Jlc3BvbnNpdmUtbGF5b3V0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlY3Rpb24td2l0aC1zaWRlYmFyLmNzcyc7XHJcblxyXG5jbGFzcyBTZWN0aW9uV2l0aFNpZGViYXJDb21wb25lbnQgZXh0ZW5kcyBSZXNwb25zaXZlTGF5b3V0IHtcclxuXHJcbiAgc3RhdGljIGdldCBtb2RlcygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHsgbmFtZTogJ2Z1bGwnLCBtYXRjaDogJyhtaW4td2lkdGg6IDk5MnB4KScgfSxcclxuICAgICAgeyBuYW1lOiAnY29tcGFjdCcgfVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHN1cGVyLnByb3BlcnRpZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBtb2RlID0gdGhpcy5tb2RlO1xyXG4gICAgcmV0dXJuIGh0bWxgXHJcbjxzZWN0aW9uIGNsYXNzPSR7bW9kZX0+XHJcbiAgPGRpdiBjbGFzcz1cInNpZGViYXJcIj5cclxuICAgIDxzbG90IG5hbWU9XCJzaWRlYmFyXCI+PC9zbG90PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3M9XCJtYWluXCI+XHJcbiAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2lsLXNlY3Rpb24td2l0aC1zaWRlYmFyJywgU2VjdGlvbldpdGhTaWRlYmFyQ29tcG9uZW50KTtcclxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuXHJcbnNlY3Rpb24ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDQwcHggdmFyKC0taWwtY29udGVudC1tYXJnaW4pO1xyXG59XHJcbnNlY3Rpb24uY29tcGFjdCB7XHJcbiAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlYmFyXCIgXCJtYWluXCI7XHJcbn1cclxuc2VjdGlvbi5mdWxsIHtcclxuICBncmlkLWdhcDogNDRweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJzaWRlYmFyIG1haW5cIjtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIHNlY3Rpb24uZnVsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIGdyaWQtZ2FwOiAwO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDI3NHB4IDQ0cHggODIycHggYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiLiBzaWRlYmFyIC4gbWFpbiAuXCI7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgZ3JpZC1hcmVhOiBtYWluO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNpZGViYXIge1xyXG4gIGdyaWQtYXJlYTogc2lkZWJhcjtcclxufVxyXG5cclxuYDsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sLCBjc3MgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2VjdGlvbi5jc3MnO1xyXG5cclxuY2xhc3MgU2VjdGlvbkNvbXBvbmVudCBleHRlbmRzIExpdEVsZW1lbnQge1xyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuPHNlY3Rpb24+XHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgIDxzbG90Pjwvc2xvdD5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtc2VjdGlvbicsIFNlY3Rpb25Db21wb25lbnQpO1xyXG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzYFxyXG5cclxuc2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IHZhcigtLWlsLWxheW91dC1tYXgtd2lkdGgpO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuYDsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xlZGUuY3NzJztcclxuXHJcbmNsYXNzIExlZGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gc3R5bGVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XHJcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgPHAgY2xhc3M9XCJpbC1sZWRlXCI+PHNsb3Q+PC9zbG90PjwvcD5cclxuICAgICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtbGVkZScsIExlZGUpO1xyXG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzYFxyXG4gIDpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuYDtcclxuIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZXZlbnQpID0+IHtcclxuICBmdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmspIHtcclxuICAgIHN3aXRjaCAobGluay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWwnKSkge1xyXG5cclxuICAgICAgY2FzZSAnYWNjZXNzaWJpbGl0eSc6XHJcbiAgICAgICAgbGluay5pbm5lckhUTUwgPSAnQWNjZXNzaWJpbGl0eSc7XHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9pbGxpbm9pcy5lZHUvcmVzb3VyY2VzL3dlYnNpdGUvYWNjZXNzaWJpbGl0eS5odG1sJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdjb3B5cmlnaHQnOlxyXG4gICAgICAgIGNvbnN0IHllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgbGluay5pbm5lckhUTUwgPSBgQ29weXJpZ2h0ICYjMTY5OyAke3llYXJ9YDtcclxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2lsbGlub2lzLmVkdS9yZXNvdXJjZXMvd2Vic2l0ZS9jb3B5cmlnaHQuaHRtbCcpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnY29va2llcyc6XHJcbiAgICAgICAgbGluay5pbm5lckhUTUwgPSAnQWJvdXQgQ29va2llcyc7XHJcbiAgICAgICAgbGluay5pZCA9ICdvdC1zZGstYnRuJztcclxuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ290LXNkay1zaG93LXNldHRpbmdzJyk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdwcml2YWN5JzpcclxuICAgICAgICBsaW5rLmlubmVySFRNTCA9ICdQcml2YWN5IFBvbGljeSc7XHJcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly93d3cudnBhYS51aWxsaW5vaXMuZWR1L3Jlc291cmNlcy93ZWJfcHJpdmFjeScpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBsaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhW2RhdGEtaWxdLCBidXR0b25bZGF0YS1pbF0nKS5mb3JFYWNoKHVwZGF0ZUxpbmspO1xyXG59KTsiLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IERlYnVnZ2VyIGZyb20gJy4uLy4uL2RlYnVnJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UtdGl0bGUuY3NzJztcclxuXHJcbmNsYXNzIFBhZ2VUaXRsZSBleHRlbmRzIExpdEVsZW1lbnQge1xyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtdGl0bGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZFwiPlxyXG4gICAgICAgICAgPHNsb3QgbmFtZT1cImJhY2tncm91bmRcIj48L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2lsLXBhZ2UtdGl0bGUnLCBQYWdlVGl0bGUpO1xyXG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzYFxyXG4ucGFnZS10aXRsZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwIHZhcigtLWlsLWNvbnRlbnQtbWFyZ2luKTtcclxufVxyXG4uYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5pbm5lciB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTIuNXJlbTtcclxuICBtYXgtd2lkdGg6IHZhcigtLWlsLWNvbnRlbnQtbWF4LXdpZHRoKTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG4udGV4dCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pbC1wYWdlLXRpdGxlLXRleHQtY29sb3IpO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udDogNzAwIDIuNWVtIHZhcigtLWlsLWZvbnQtc2Fucyk7XHJcbiAgcGFkZGluZzogMTZweCAxNHB4IDIwcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgfVxyXG59XHJcbi50ZXh0OjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlsLXBhZ2UtdGl0bGUtYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgb3BhY2l0eTogLjg1O1xyXG59XHJcbmA7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3NzIH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9wYWdpbmF0aW9uJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2luYXRpb24uY3NzJztcclxuXHJcbmNsYXNzIFBhZ2luYXRpb25Db21wb25lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcGFnZTogeyB0eXBlOiBOdW1iZXIsIGF0dHJpYnV0ZTogdHJ1ZSwgZGVmYXVsdDogMSB9LFxyXG4gICAgICBwYWdlczogeyB0eXBlOiBOdW1iZXIsIGF0dHJpYnV0ZTogdHJ1ZSwgZGVmYXVsdDogMSB9LFxyXG4gICAgICBwYXJhbTogeyB0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZSwgZGVmYXVsdDogJ3BhZ2UnIH0sXHJcbiAgICAgIHVybDogeyBhdHRyaWJ1dGU6IGZhbHNlIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgdGhpcy5wYWdlcyA9IDE7XHJcbiAgICB0aGlzLnBhcmFtID0gJ3BhZ2UnO1xyXG4gICAgdGhpcy51cmwgPSBsb2NhdGlvbi5ocmVmO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmF2SXRlbXMoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBuZXcgUGFnaW5hdGlvbi5OYXZpZ2F0aW9uKHRoaXMudXJsLCB0aGlzLnBhZ2VzLCB0aGlzLnBhcmFtKTtcclxuICAgIG5hdi5jdXJyZW50UGFnZSA9IHRoaXMucGFnZTtcclxuICAgIHJldHVybiBuYXYuaXRlbXM7XHJcbiAgfVxyXG5cclxuICByZW5kZXJOYXZJdGVtKGl0ZW0pIHtcclxuICAgIHN3aXRjaCAoaXRlbS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICBjYXNlIChQYWdpbmF0aW9uLkZpcnN0UGFnZUxpbmspOlxyXG4gICAgICAgIHJldHVybiBodG1sYDxsaSBjbGFzcz1cImZpcnN0XCI+PGEgaHJlZj1cIiR7aXRlbS51cmx9XCIgYXJpYS1sYWJlbD1cIkZpcnN0IHBhZ2VcIj5GaXJzdDwvYT48L2xpPmA7XHJcbiAgICAgIGNhc2UgKFBhZ2luYXRpb24uUHJldmlvdXNQYWdlTGluayk6XHJcbiAgICAgICAgcmV0dXJuIGh0bWxgPGxpIGNsYXNzPVwicHJldmlvdXNcIj48YSBocmVmPVwiJHtpdGVtLnVybH1cIiBhcmlhLWxhYmVsPVwiUHJldmlvdXMgcGFnZVwiPlByZXZpb3VzPC9hPjwvbGk+YDtcclxuICAgICAgY2FzZSAoUGFnaW5hdGlvbi5OZXh0UGFnZUxpbmspOlxyXG4gICAgICAgIHJldHVybiBodG1sYDxsaSBjbGFzcz1cIm5leHRcIj48YSBocmVmPVwiJHtpdGVtLnVybH1cIiBhcmlhLWxhYmVsPVwiTmV4dCBwYWdlXCI+TmV4dDwvYT48L2xpPmA7XHJcbiAgICAgIGNhc2UgKFBhZ2luYXRpb24uTGFzdFBhZ2VMaW5rKTpcclxuICAgICAgICByZXR1cm4gaHRtbGA8bGkgY2xhc3M9XCJsYXN0XCI+PGEgaHJlZj1cIiR7aXRlbS51cmx9XCIgYXJpYS1sYWJlbD1cIkxhc3QgcGFnZVwiPkxhc3Q8L2E+PC9saT5gO1xyXG4gICAgICBjYXNlIChQYWdpbmF0aW9uLkN1cnJlbnRQYWdlKTpcclxuICAgICAgICByZXR1cm4gaHRtbGA8bGkgY2xhc3M9XCJjdXJyZW50XCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPiR7aXRlbS5wYWdlTnVtYmVyfTwvbGk+YDtcclxuICAgICAgY2FzZSAoUGFnaW5hdGlvbi5QYWdlTGluayk6XHJcbiAgICAgICAgcmV0dXJuIGh0bWxgPGxpPjxhIGhyZWY9XCIke2l0ZW0udXJsfVwiIGFyaWEtbGFiZWw9XCJQYWdlICR7aXRlbS5wYWdlTnVtYmVyfVwiPiR7aXRlbS5wYWdlTnVtYmVyfTwvYT48L2xpPmA7XHJcbiAgICAgIGNhc2UgKFBhZ2luYXRpb24uRWxsaXBzaXMpOlxyXG4gICAgICAgIHJldHVybiBodG1sYDxsaSBjbGFzcz1cImVsbGlwc2lzXCI+JmhlbGxpcDs8L2xpPmA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuPG5hdiBhcmlhLWxhYmVsPVwiUGFnaW5hdGlvblwiPlxyXG4gIDxzbG90PlxyXG4gICAgPHVsPlxyXG4gICAgICAke3RoaXMuZ2V0TmF2SXRlbXMoKS5tYXAoaXRlbSA9PiB0aGlzLnJlbmRlck5hdkl0ZW0oaXRlbSkpfVxyXG4gICAgPC91bD5cclxuICA8L3Nsb3Q+XHJcbjwvbmF2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtcGFnaW5hdGlvbicsIFBhZ2luYXRpb25Db21wb25lbnQpO1xyXG4iLCJpbXBvcnQgeyBjc3MgfSBmcm9tICdsaXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzYFxyXG5cclxuOmhvc3Qge1xyXG4gIGNvbG9yOiB2YXIoLS1pbC1ibHVlKTtcclxuICBmb250OiAxZW0vMWVtIHZhcigtLWlsLWZvbnQtc2Fucyk7XHJcbn1cclxudWwge1xyXG4gIG1hcmdpbjogMCAxcHggLTZweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbmxpIHtcclxuICBtYXJnaW46IDAgLTFweCA2cHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxubGkuY3VycmVudCwgbGkuZWxsaXBzaXMsIGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IC41cmVtIC43NXJlbTtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG59XHJcbmxpLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlsLWJsdWUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWlsLWJsdWUpO1xyXG59XHJcbmxpLmVsbGlwc2lzIHtcclxuICBjb2xvcjogdmFyKC0taWwtY2xvdWQtMyk7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5hIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogdmFyKC0taWwtYmx1ZSk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pbC1jbG91ZC0zKVxyXG59XHJcbmE6aG92ZXIsIGE6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmA7IiwiY2xhc3MgSXRlbSB7XHJcblxyXG59XHJcblxyXG5jbGFzcyBFbGxpcHNpcyBleHRlbmRzIEl0ZW0geyB9XHJcblxyXG5jbGFzcyBQYWdlIGV4dGVuZHMgSXRlbSB7XHJcbiAgY29uc3RydWN0b3IocGFnZU51bWJlcikge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX3BhZ2VOdW1iZXIgPSBwYWdlTnVtYmVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBhZ2VOdW1iZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZU51bWJlcjtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEN1cnJlbnRQYWdlIGV4dGVuZHMgUGFnZSB7IH1cclxuXHJcbmNsYXNzIFBhZ2VMaW5rIGV4dGVuZHMgUGFnZSB7XHJcbiAgY29uc3RydWN0b3IobmF2LCBwYWdlTnVtYmVyKSB7XHJcbiAgICBzdXBlcihwYWdlTnVtYmVyKTtcclxuICAgIHRoaXMubmF2ID0gbmF2O1xyXG4gIH1cclxuXHJcbiAgZ2V0IHVybCgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hdi5nZXRQYWdlVXJsKHRoaXMucGFnZU51bWJlcik7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBGaXJzdFBhZ2VMaW5rIGV4dGVuZHMgUGFnZUxpbmsgeyB9XHJcblxyXG5jbGFzcyBMYXN0UGFnZUxpbmsgZXh0ZW5kcyBQYWdlTGluayB7IH1cclxuXHJcbmNsYXNzIE5leHRQYWdlTGluayBleHRlbmRzIFBhZ2VMaW5rIHsgfVxyXG5cclxuY2xhc3MgUHJldmlvdXNQYWdlTGluayBleHRlbmRzIFBhZ2VMaW5rIHsgfVxyXG5cclxuY2xhc3MgTmF2aWdhdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoYmFzZVVybCwgcGFnZUNvdW50LCBwYWdlUGFyYW1OYW1lID0gJ3BhZ2UnKSB7XHJcbiAgICB0aGlzLnBhZ2VQYXJhbU5hbWUgPSBwYWdlUGFyYW1OYW1lO1xyXG4gICAgdGhpcy5wYWdlQ291bnQgPSBwYWdlQ291bnQ7XHJcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xyXG4gICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICBpZiAoISh0eXBlb2YgdGhpcy5iYXNlVXJsID09PSAnZnVuY3Rpb24nKSkge1xyXG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGJhc2VVcmwpO1xyXG4gICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5oYXModGhpcy5wYWdlUGFyYW1OYW1lKSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSB1cmwuc2VhcmNoUGFyYW1zLmdldCh0aGlzLnBhZ2VQYXJhbU5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgY3VycmVudFBhZ2UoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFBhZ2U7XHJcbiAgfVxyXG5cclxuICBzZXQgY3VycmVudFBhZ2UobnVtYmVyKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50UGFnZSA9IHBhcnNlSW50KG51bWJlcilcclxuICB9XHJcblxyXG4gIGdldCBpdGVtcygpIHtcclxuICAgIGNvbnN0IGl0ZW1zID0gW107XHJcbiAgICBjb25zdCB7IHN0YXJ0LCBlbmQgfSA9IHRoaXMuZ2V0VmlzaWJsZVBhZ2VSYW5nZSgpO1xyXG4gICAgZm9yIChsZXQgcGFnZSA9IHN0YXJ0OyBwYWdlIDw9IGVuZDsgcGFnZSsrKSB7XHJcbiAgICAgIGlmIChwYWdlID09PSB0aGlzLmN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgaXRlbXMucHVzaCh0aGlzLmN1cnJlbnRQYWdlSXRlbSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgaXRlbXMucHVzaCh0aGlzLmdldFBhZ2VMaW5rKHBhZ2UpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHN0YXJ0ID4gMSkge1xyXG4gICAgICBpdGVtcy51bnNoaWZ0KG5ldyBFbGxpcHNpcyk7XHJcbiAgICAgIGl0ZW1zLnVuc2hpZnQodGhpcy5nZXRQYWdlTGluaygxKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZW5kIDwgdGhpcy5wYWdlQ291bnQpIHtcclxuICAgICAgaXRlbXMucHVzaChuZXcgRWxsaXBzaXMpO1xyXG4gICAgICBpdGVtcy5wdXNoKHRoaXMuZ2V0UGFnZUxpbmsodGhpcy5wYWdlQ291bnQpKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhhc1ByZXZpb3VzUGFnZUxpbmsoKSkge1xyXG4gICAgICBpdGVtcy51bnNoaWZ0KHRoaXMucHJldmlvdXNQYWdlTGluayk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5oYXNOZXh0UGFnZUxpbmsoKSkge1xyXG4gICAgICBpdGVtcy5wdXNoKHRoaXMubmV4dFBhZ2VMaW5rKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmhhc0ZpcnN0UGFnZUxpbmsoKSkge1xyXG4gICAgICBpdGVtcy51bnNoaWZ0KHRoaXMuZmlyc3RQYWdlTGluayk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5oYXNMYXN0UGFnZUxpbmsoKSkge1xyXG4gICAgICBpdGVtcy5wdXNoKHRoaXMubGFzdFBhZ2VMaW5rKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtcztcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50UGFnZUl0ZW0oKSB7XHJcbiAgICByZXR1cm4gbmV3IEN1cnJlbnRQYWdlKHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZpcnN0UGFnZUxpbmsoKSB7XHJcbiAgICByZXR1cm4gbmV3IEZpcnN0UGFnZUxpbmsodGhpcywgMSk7XHJcbiAgfVxyXG5cclxuICBnZXQgbGFzdFBhZ2VMaW5rKCkge1xyXG4gICAgcmV0dXJuIG5ldyBMYXN0UGFnZUxpbmsodGhpcywgdGhpcy5wYWdlQ291bnQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IG5leHRQYWdlTGluaygpIHtcclxuICAgIHJldHVybiBuZXcgTmV4dFBhZ2VMaW5rKHRoaXMsIHRoaXMuY3VycmVudFBhZ2UgKyAxKTtcclxuICB9XHJcblxyXG4gIGdldCBwYWdlQ291bnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZUNvdW50O1xyXG4gIH1cclxuXHJcbiAgc2V0IHBhZ2VDb3VudChwYWdlQ291bnQpIHtcclxuICAgIHRoaXMuX3BhZ2VDb3VudCA9IHBhcnNlSW50KHBhZ2VDb3VudCk7XHJcbiAgfVxyXG5cclxuICBnZXQgcHJldmlvdXNQYWdlTGluaygpIHtcclxuICAgIHJldHVybiBuZXcgUHJldmlvdXNQYWdlTGluayh0aGlzLCB0aGlzLmN1cnJlbnRQYWdlIC0gMSk7XHJcbiAgfVxyXG5cclxuICBnZXRQYWdlTGluayhwYWdlTnVtYmVyKSB7XHJcbiAgICByZXR1cm4gbmV3IFBhZ2VMaW5rKHRoaXMsIHBhZ2VOdW1iZXIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFnZVVybChwYWdlTnVtYmVyKSB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuYmFzZVVybCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5iYXNlVXJsKHBhZ2VOdW1iZXIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodGhpcy5iYXNlVXJsKTtcclxuICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQodGhpcy5wYWdlUGFyYW1OYW1lLCBwYWdlTnVtYmVyKTtcclxuICAgICAgcmV0dXJuIHVybC5ocmVmO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0VmlzaWJsZVBhZ2VSYW5nZSgpIHtcclxuICAgIGNvbnN0IHJhZGl1cyA9IDM7XHJcbiAgICBsZXQgc3RhcnQgPSB0aGlzLmN1cnJlbnRQYWdlIC0gcmFkaXVzO1xyXG4gICAgaWYgKHN0YXJ0IDwgMykgc3RhcnQgPSAxO1xyXG4gICAgbGV0IGVuZCA9IHN0YXJ0ICsgcmFkaXVzICogMjtcclxuICAgIGlmIChlbmQgPiB0aGlzLnBhZ2VDb3VudCAtIDIpIHtcclxuICAgICAgZW5kID0gdGhpcy5wYWdlQ291bnQ7XHJcbiAgICAgIHN0YXJ0ID0gTWF0aC5tYXgoMSwgZW5kIC0gcmFkaXVzICogMik7XHJcbiAgICAgIGlmIChzdGFydCA8IDMpIHN0YXJ0ID0gMTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHN0YXJ0LCBlbmQgfTtcclxuICB9XHJcblxyXG4gIGhhc0ZpcnN0UGFnZUxpbmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZSAhPT0gMTtcclxuICB9XHJcblxyXG4gIGhhc0xhc3RQYWdlTGluaygpIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlICE9PSB0aGlzLnBhZ2VDb3VudDtcclxuICB9XHJcblxyXG4gIGhhc05leHRQYWdlTGluaygpIHtcclxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRQYWdlICE9PSB0aGlzLnBhZ2VDb3VudDtcclxuICB9XHJcblxyXG4gIGhhc1ByZXZpb3VzUGFnZUxpbmsoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UGFnZSAhPT0gMTtcclxuICB9XHJcblxyXG4gIHNldFBhZ2VQYXJhbU5hbWUocGFyYW1OYW1lKSB7XHJcbiAgICB0aGlzLnBhZ2VQYXJhbU5hbWUgPSBwYXJhbU5hbWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geyBDdXJyZW50UGFnZSwgRWxsaXBzaXMsIEZpcnN0UGFnZUxpbmssIExhc3RQYWdlTGluaywgTmF2aWdhdGlvbiwgTmV4dFBhZ2VMaW5rLCBQYWdlTGluaywgUHJldmlvdXNQYWdlTGluayB9OyIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwgfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcXVvdGUuY3NzJztcclxuXHJcbmNsYXNzIFF1b3RlIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHVsbHF1b3RlOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UsIGF0dHJpYnV0ZTogdHJ1ZX0sXHJcbiAgICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XHJcbiAgfVxyXG5cclxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcclxuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gaHRtbGA8YmxvY2txdW90ZSA/YXJpYS1oaWRkZW49JHt0aGlzLnB1bGxxdW90ZX0+XHJcbiAgICAgIDxwIGNsYXNzPVwiaWwtcXVvdGVcIj48c2xvdD48L3Nsb3Q+PC9wPlxyXG4gICAgICA8c2xvdCBuYW1lPVwiYXR0cmlidXRlZFwiPjwvc2xvdD5cclxuICAgICAgPHNsb3QgbmFtZT1cInNlY29uZGFyeVwiPjwvc2xvdD5cclxuICAgICAgPC9ibG9ja3F1b3RlPlxyXG4gICAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpbC1xdW90ZScsIFF1b3RlKTtcclxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgcC5pbC1xdW90ZSB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB9XHJcbiAgcC5pbC1xdW90ZTo6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwi4oCcXCI7XHJcbiAgICBjb2xvcjogdmFyKC0taWwtb3JhbmdlKTtcclxuICAgIGZvbnQtc2l6ZTogNy44MTNyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIHRvcDogNTVweDtcclxuICAgIGxlZnQ6IC05MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgcC5pbC1xdW90ZTo6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCLigJ1cIjtcclxuICAgIGNvbG9yOiB2YXIoLS1pbC1vcmFuZ2UpO1xyXG4gICAgZm9udC1zaXplOiA3LjgxM3JlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IC05MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkycHgpIHtcclxuICAgIHAuaWwtcXVvdGU6OmJlZm9yZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNi4yNXJlbTtcclxuICAgICAgdG9wOiA0NXB4O1xyXG4gICAgICBsZWZ0OiAtNzBweDtcclxuICAgIH1cclxuICAgIHAuaWwtcXVvdGU6OmFmdGVyIHtcclxuICAgICAgZm9udC1zaXplOiA2LjI1cmVtO1xyXG4gICAgICByaWdodDogLTcwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQge0xpdEVsZW1lbnQsIGh0bWwsIGNzc30gZnJvbSAnbGl0JztcclxuaW1wb3J0IERlYnVnZ2VyIGZyb20gJy4uLy4uL2RlYnVnJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlYXJjaC5jc3MnO1xyXG5cclxuY2xhc3MgU2VhcmNoIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWN0aW9uOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgICBidXR0b25IYXNGb2N1czoge3R5cGU6IEJvb2xlYW4sIGF0dHJpYnV0ZTogZmFsc2V9LFxyXG4gICAgICBpbnB1dEhhc0ZvY3VzOiB7dHlwZTogQm9vbGVhbiwgYXR0cmlidXRlOiBmYWxzZX0sXHJcbiAgICAgIGxhYmVsOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgICBuYW1lOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgICBtZXRob2Q6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZX0sXHJcbiAgICAgIHBsYWNlaG9sZGVyOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgICBxdWVyeToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiB0cnVlfSxcclxuICAgICAgc2VhcmNobmFtZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiB0cnVlfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gc3R5bGVzO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5hY3Rpb24gPSAnJztcclxuICAgIHRoaXMuaW5wdXRIYXNGb2N1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5sYWJlbCA9ICdTZWFyY2gnO1xyXG4gICAgdGhpcy5tZXRob2QgPSAnR0VUJztcclxuICAgIHRoaXMubmFtZSA9ICdzJztcclxuICAgIHRoaXMucGxhY2Vob2xkZXIgPSAnU2VhcmNoIHRoaXMgc2l0ZSc7XHJcbiAgICB0aGlzLnF1ZXJ5ID0gJyc7XHJcbiAgICB0aGlzLnNlYXJjaG5hbWUgPSB1bmRlZmluZWQ7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5oYW5kbGVDb250ZW50TG9hZGVkLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnNlYXJjaG5hbWUgfHwgdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQnV0dG9uQmx1cihldnQpIHtcclxuICAgIHRoaXMuYnV0dG9uSGFzRm9jdXMgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJ1dHRvbkZvY3VzKGV2dCkge1xyXG4gICAgdGhpcy5idXR0b25IYXNGb2N1cyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDb250ZW50TG9hZGVkKGV2dCkge1xyXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5nZXRIZWFkZXIoKTtcclxuICAgIGlmICh0aGlzLnNlYXJjaG5hbWUpIHtcclxuICAgICAgRGVidWdnZXIud2FybignU2VhcmNoIGNvbXBvbmVudDogVGhlIFwic2VhcmNobmFtZVwiIGlzIGRlcHJlY2F0ZWQ7IHVzZSBcIm5hbWVcIiBpbnN0ZWFkLicpO1xyXG4gICAgfVxyXG4gICAgaWYgKGhlYWRlcikge1xyXG4gICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcigndmlld0NoYW5nZScsIHRoaXMuaGFuZGxlSGVhZGVyVmlld0NoYW5nZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUhlYWRlclZpZXdDaGFuZ2UoZXZ0KSB7XHJcbiAgICAvL2NvbnNvbGUuZGVidWcoZXZ0LmRldGFpbCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVJbnB1dEJsdXIoZXZ0KSB7XHJcbiAgICB0aGlzLmlucHV0SGFzRm9jdXMgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUlucHV0Rm9jdXMoZXZ0KSB7XHJcbiAgICB0aGlzLmlucHV0SGFzRm9jdXMgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0SGVhZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY2xvc2VzdCgnaWwtaGVhZGVyJyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJTZWFyY2hJY29uKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgPHN2ZyByb2xlPVwiaW1hZ2VcIiBhcmlhLWxhYmVsPVwiU3VibWl0IHNlYXJjaFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDUxLjI2IDUxLjI2XCI+XHJcbiAgICAgICAgPHBhdGggZD1cIk0zMS40NiA1LjIxYTE4LjIgMTguMiAwIDEwLTIuMTMgMjcuNTRMNDQgNDkuNTZhNC4zMiA0LjMyIDAgMDA2LjExLTYuMTJMMzMuMzkgMjguNjVhMTguMTkgMTguMTkgMCAwMC0xLjkzLTIzLjQ0ek0yOCAyNy40OGExMy4yOSAxMy4yOSAwIDExMC0xOC43OSAxMy4zIDEzLjMgMCAwMTAgMTguNzl6XCIvPlxyXG4gICAgPC9zdmc+YFxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2xhc3NOYW1lcyA9IFtdO1xyXG4gICAgaWYgKHRoaXMuaW5wdXRIYXNGb2N1cykge1xyXG4gICAgICBjbGFzc05hbWVzLnB1c2goJ2lucHV0LWhhcy1mb2N1cycpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYnV0dG9uSGFzRm9jdXMpIHtcclxuICAgICAgY2xhc3NOYW1lcy5wdXNoKCdidXR0b24taGFzLWZvY3VzJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaHRtbGBcclxuPGZvcm0gcm9sZT1cInNlYXJjaFwiIG1ldGhvZD0ke3RoaXMubWV0aG9kfSBhY3Rpb249JHt0aGlzLmFjdGlvbn0gY2xhc3M9XCIke2NsYXNzTmFtZXMuam9pbignICcpfVwiPlxyXG4gICAgPGxhYmVsIGZvcj1cInF1ZXJ5XCI+U2VhcmNoPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCIgaWQ9XCJxdWVyeVwiIG5hbWU9JHt0aGlzLmdldE5hbWUoKX0gdmFsdWU9JHt0aGlzLnF1ZXJ5fSBwbGFjZWhvbGRlcj0ke3RoaXMucGxhY2Vob2xkZXJ9IEBmb2N1cz0ke3RoaXMuaGFuZGxlSW5wdXRGb2N1c30gQGJsdXI9JHt0aGlzLmhhbmRsZUlucHV0Qmx1cn0+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAZm9jdXM9JHt0aGlzLmhhbmRsZUJ1dHRvbkZvY3VzfSBAYmx1cj0ke3RoaXMuaGFuZGxlQnV0dG9uQmx1cn0+XHJcbiAgICAgICAgJHt0aGlzLnJlbmRlclNlYXJjaEljb24oKX1cclxuICAgIDwvYnV0dG9uPlxyXG48L2Zvcm0+XHJcbiAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpbC1zZWFyY2gnLCBTZWFyY2gpO1xyXG4iLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDYwcHg7XHJcbiAgZ3JpZC1nYXA6IDJweDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbC1jbG91ZC0zKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbC1jbG91ZC0zKTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuZm9ybS5pbnB1dC1oYXMtZm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taWwtaW5kdXN0cmlhbC1ibHVlKTtcclxufVxyXG5sYWJlbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5pbnB1dCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBib3JkZXI6IDA7XHJcbiAgZm9udDogMTZweC8xOHB4IHZhcigtLWlsLWZvbnQtc2Fucyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIG91dGxpbmU6IDA7XHJcbn1cclxuYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiAjNjA2MDYwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcclxufVxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IDBweCBzb2xpZCB2YXIoLS1pbC1pbmR1c3RyaWFsLWJsdWUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCB2YXIoLS1pbC1pbmR1c3RyaWFsLWJsdWUpO1xyXG4gIGNvbG9yOiB2YXIoLS1pbC1pbmR1c3RyaWFsLWJsdWUpO1xyXG59XHJcbmJ1dHRvbiBzdmcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZmlsbDogY3VycmVudGNvbG9yO1xyXG59XHJcbmA7IiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgY3NzIH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NlY3Rpb24tbmF2LmNzcy5qcyc7XHJcblxyXG5jbGFzcyBTZWN0aW9uTmF2aWdhdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xyXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbXBhY3Q6IHsgdHlwZTogQm9vbGVhbiwgYXR0cmlidXRlOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSwgcmVmbGVjdDogdHJ1ZSB9LFxyXG4gICAgICBleHBhbmRlZDogeyB0eXBlOiBCb29sZWFuLCBhdHRyaWJ1dGU6IGZhbHNlIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmNvbXBhY3QgPSBmYWxzZTtcclxuICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaGFuZGxlVG9nZ2xlQ2xpY2sgPSB0aGlzLmhhbmRsZVRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgdGhpcy5oYW5kbGVEb2N1bWVudExvYWRlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGdldExheW91dFNlY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jbG9zZXN0KCdpbC1zZWN0aW9uLXdpdGgtc2lkZWJhcicpO1xyXG4gIH1cclxuXHJcbiAgaGFzTGF5b3V0U2VjdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLmdldExheW91dFNlY3Rpb24oKSAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIEV2ZW50IGhhbmRsZXJzXHJcblxyXG4gIGhhbmRsZURvY3VtZW50TG9hZGVkKGV2dCkge1xyXG4gICAgaWYgKHRoaXMuaGFzTGF5b3V0U2VjdGlvbigpKSB7XHJcbiAgICAgIGNvbnN0IGxheW91dCA9IHRoaXMuZ2V0TGF5b3V0U2VjdGlvbigpO1xyXG4gICAgICB0aGlzLmNvbXBhY3QgPSBsYXlvdXQubW9kZSA9PT0gJ2NvbXBhY3QnO1xyXG4gICAgICBsYXlvdXQuYWRkRXZlbnRMaXN0ZW5lcignbW9kZUNoYW5nZScsIGV2dCA9PiB7XHJcbiAgICAgICAgdGhpcy5jb21wYWN0ID0gZXZ0LmRldGFpbCA9PT0gJ2NvbXBhY3QnO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAvLyBEZXByZWNhdGVkXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVdpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5oYW5kbGVXaW5kb3dSZXNpemUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZVRvZ2dsZUNsaWNrKCkge1xyXG4gICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlV2luZG93UmVzaXplKCkge1xyXG4gICAgdGhpcy5jb21wYWN0ID0gIXdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogOTkycHgpXCIpLm1hdGNoZXM7XHJcbiAgfVxyXG5cclxuICAvLyBSZW5kZXJcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgbW9kZSA9IHRoaXMuY29tcGFjdCA/ICdjb21wYWN0JyA6ICdmdWxsJztcclxuICAgIGNvbnN0IGV4cGFuZGVkID0gdGhpcy5leHBhbmRlZCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJztcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8bmF2IGFyaWEtbGFiZWxsZWRieT1cInNlY3Rpb24tbmF2LWxhYmVsXCIgY2xhc3M9JHttb2RlICsgJyAnICsgZXhwYW5kZWR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cclxuICAgICAgICAgIDxoMiBpZD1cInNlY3Rpb24tbmF2LWxhYmVsXCI+SW4gdGhpcyBzZWN0aW9uPC9oMj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbC1zZWN0aW9uLW5hdl9fdG9nZ2xlXCIgQGNsaWNrPSR7dGhpcy5oYW5kbGVUb2dnbGVDbGlja30gYXJpYS1leHBhbmRlZD0ke3RoaXMuZXhwYW5kZWQgPyBcInRydWVcIiA6IFwiZmFsc2VcIn0gYXJpYS1jb250cm9scz1cInNlY3Rpb24tbmF2LW1lbnVcIj5cclxuICAgICAgICAgICAgVG9nZ2xlIHNlY3Rpb24gbmF2aWdhdGlvbiBtZW51XHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIwNy4wMjkgMzgxLjQ3NkwxMi42ODYgMTg3LjEzMmMtOS4zNzMtOS4zNzMtOS4zNzMtMjQuNTY5IDAtMzMuOTQxbDIyLjY2Ny0yMi42NjdjOS4zNTctOS4zNTcgMjQuNTIyLTkuMzc1IDMzLjkwMS0uMDRMMjI0IDI4NC41MDVsMTU0Ljc0NS0xNTQuMDIxYzkuMzc5LTkuMzM1IDI0LjU0NC05LjMxNyAzMy45MDEuMDRsMjIuNjY3IDIyLjY2N2M5LjM3MyA5LjM3MyA5LjM3MyAyNC41NjkgMCAzMy45NDFMMjQwLjk3MSAzODEuNDc2Yy05LjM3MyA5LjM3Mi0yNC41NjkgOS4zNzItMzMuOTQyIDB6XCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVudVwiIGlkPVwic2VjdGlvbi1uYXYtbWVudVwiPlxyXG4gICAgICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2lsLXNlY3Rpb24tbmF2JywgU2VjdGlvbk5hdmlnYXRpb24pO1xyXG4iLCJpbXBvcnQge2Nzc30gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuXHJcbi5oZWFkZXIge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICAgICAgICBcclxufVxyXG4uaGVhZGVyIGgyIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250OiA3MDAgMjJweC81NnB4IHZhcigtLWlsLWZvbnQtc2Fucyk7XHJcbiAgY29sb3I6IHZhcigtLWlsLWJsdWUpO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG4uaGVhZGVyIGgyOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcXFxcMjAyNlwiO1xyXG59XHJcbi5oZWFkZXIgYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDQ0cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pbC1ibHVlKTtcclxuICBjb2xvcjogdmFyKC0taWwtYmx1ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHRleHQtaW5kZW50OiA3MnB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLmhlYWRlciBidXR0b246Zm9jdXMsIC5oZWFkZXIgYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbC1vcmFuZ2UpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taWwtb3JhbmdlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmhlYWRlciBidXR0b24gc3ZnIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTlweDtcclxuICB0b3A6IDExcHg7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcclxufVxyXG5uYXYuZnVsbCAuaGVhZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICBsZWZ0OiAtOTk5OXB4ICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1pbmRlbnQ6IC05OTk5ZW0gIWltcG9ydGFudDtcclxuICB3aWR0aDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxcHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxubmF2LmZ1bGwgLmlsLXNlY3Rpb24tbmF2X190b2dnbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxubmF2LmNvbXBhY3Qge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBib3JkZXI6IHNvbGlkIDJweCAjZDhkOGQ4O1xyXG59XHJcbm5hdi5jb21wYWN0IC5tZW51IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbm5hdi5jb21wYWN0LmV4cGFuZGVkIC5oZWFkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZDhkOGQ4O1xyXG59XHJcbm5hdi5jb21wYWN0LmV4cGFuZGVkIC5oZWFkZXIgYnV0dG9uIHN2ZyB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5uYXYuY29tcGFjdC5leHBhbmRlZCAubWVudSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG5gOyIsImltcG9ydCB7IExpdEVsZW1lbnQsIGh0bWwsIGNzcyB9IGZyb20gJ2xpdCc7XHJcblxyXG5jbGFzcyBTdGF0aXN0aWMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGVpZ2h0OiB7IHR5cGU6IFN0cmluZywgYXR0cmlidXRlOiB0cnVlIH0sXHJcbiAgICAgIHN0YXJ0QW5pbWF0aW9uOiB7IHR5cGU6IFN0cmluZywgYXR0cmlidXRlOiB0cnVlIH0sXHJcbiAgICAgIGFuaW1hdGU6IHsgdHlwZTogQm9vbGVhbiwgYXR0cmlidXRlOiB0cnVlIH0sXHJcbiAgICAgIG9yaWdpbmFsU3RhdDogeyB0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZSB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBzdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gY3NzYFxyXG4gICAgcC5pbC1zdGF0aXN0aWMge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHBhZGRpbmc6IHZhcigtLWlsLXN0YXRpc3RpYy1wYWRkaW5nKTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taWwtYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgIG1hcmdpbjogdmFyKC0taWwtc3RhdGlzdGljLW1hcmdpbik7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pbC1zdGF0aXN0aWMtdGV4dC1jb2xvcik7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS1pbC1zdGF0aXN0aWMtd2lkdGgpO1xyXG4gICAgfVxyXG4gICAgcC5pbC1zdGF0aXN0aWMgc3Bhbi50ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiB2YXIoLS1pbC1zdGF0aXN0aWMtZm9udC1zaXplKTtcclxuICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlsLXN0YXRpc3RpYy1saW5lLWhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwLmlsLXN0YXRpc3RpYyBzcGFuLnRleHQuaW50cm8ge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taWwtc3RhdGlzdGljLWludHJvLXBhZGRpbmctYm90dG9tKTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gICAgcC5pbC1zdGF0aXN0aWMgc3Bhbi5zdGF0IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIG1hcmdpbjogdmFyKC0taWwtc3RhdGlzdGljLWhlYWRpbmctbWFyZ2luKTtcclxuICAgICAgY29sb3I6IHZhcigtLWlsLXN0YXRpc3RpYy1oZWFkaW5nLWNvbG9yKTtcclxuICAgICAgcGFkZGluZzogdmFyKC0taWwtc3RhdGlzdGljLXN0YXQtcGFkZGluZyk7XHJcbiAgICAgIGZvbnQtc2l6ZTogdmFyKC0taWwtc3RhdGlzdGljLXN0YXQtZm9udC1zaXplKTtcclxuICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlsLXN0YXRpc3RpYy1zdGF0LWxpbmUtaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHAuaWwtc3RhdGlzdGljIHNwYW4uc3RhdCBlbSB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIHAuaWwtc3RhdGlzdGljIHNwYW4uc291cmNlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogdmFyKC0taWwtc3RhdGlzdGljLXNvdXJjZS1tYXJnaW4pO1xyXG4gICAgICBmb250LXNpemU6IHZhcigtLWlsLXN0YXRpc3RpYy1zb3VyY2UtZm9udC1zaXplKTtcclxuICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWlsLXN0YXRpc3RpYy1zb3VyY2UtbGluZS1oZWlnaHQpO1xyXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB9YDtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY29sb3IgPSAnJztcclxuICAgIHRoaXMuYmFja2dyb3VuZCA9ICcnO1xyXG4gICAgdGhpcy5oZWlnaHQgPSAnJztcclxuICAgIHRoaXMud2lkdGggPSAnJztcclxuICAgIHRoaXMuYW5pbWF0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuaWRJbmZvID0gJyc7XHJcbiAgICB0aGlzLnN0YXJ0ID0gJyc7XHJcbiAgICB0aGlzLm9yaWdpbmFsU3RhdCA9ICcnO1xyXG4gIH1cclxuXHJcbiAgYWRkT3JpZ2luYWxTdGF0KGUpIHtcclxuICAgIGlmICh0aGlzLm9yaWdpbmFsU3RhdCA9PSAnJykge1xyXG4gICAgICB0aGlzLm9yaWdpbmFsU3RhdCA9IGUudGFyZ2V0LmFzc2lnbmVkTm9kZXMoeyBmbGF0dGVuOiB0cnVlIH0pWzBdLmlubmVySFRNTDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpcnN0VXBkYXRlZCgpIHtcclxuICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzbG90W25hbWU9XCJzdGF0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIChlKSA9PiB0aGlzLmFkZE9yaWdpbmFsU3RhdChlKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmlkSW5mbyA9ICdzdGF0aXN0aWMtJyArICgoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDAwMDApIHwgMCk7XHJcbiAgICByZXR1cm4gaHRtbGBcclxuICAgIDxwIGNsYXNzPVwiaWwtc3RhdGlzdGljXCIgaWQ9JyR7dGhpcy5pZEluZm99Jz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQgaW50cm9cIj48c2xvdCBuYW1lPVwidG9wXCI+PC9zbG90Pjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXRcIj48c2xvdCBuYW1lPVwic3RhdFwiPjwvc3Bhbj48L3Nsb3Q+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+PHNsb3Q+PC9zbG90Pjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQgc291cmNlXCI+PHNsb3QgbmFtZT1cInNvdXJjZVwiPjwvc2xvdD48L3NwYW4+XHJcbiAgICA8L3A+YDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtc3RhdGlzdGljJywgU3RhdGlzdGljKTtcclxuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi91bml0LXdvcmRtYXJrLmNzcyc7XHJcblxyXG5jb25zdCBicmVha3BvaW50ID0gNDAwO1xyXG5cclxuY2xhc3MgVW5pdFdvcmRtYXJrIGV4dGVuZHMgTGl0RWxlbWVudCB7XHJcblxyXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvbXBhY3Q6IHsgZGVmYXVsdDogZmFsc2UsIGF0dHJpYnV0ZTogZmFsc2UgfVxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaGFzQ29udGFpbmVyU3VwcG9ydCgpIHtcclxuICAgIHJldHVybiBDU1Muc3VwcG9ydHMoJ2NvbnRhaW4nLCAnaW5saW5lLXNpemUnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY29tcGFjdCA9IGZhbHNlO1xyXG4gICAgaWYgKCFVbml0V29yZG1hcmsuaGFzQ29udGFpbmVyU3VwcG9ydCgpKSB7XHJcbiAgICAgIGNvbnNvbGUuZGVidWcoXCJXb3JkbWFyazogTm8gc3VwcG9ydCBmb3IgQGNvbnRhaW5lciBkZXRlY3RlZDogdXNpbmcgbWFudWFsIHJlc2l6ZVwiKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCB0aGlzLmhhbmRsZVJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V2lkdGgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5vZmZzZXRXaWR0aDtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlc2l6ZShldnQpIHtcclxuICAgIHRoaXMuY29tcGFjdCA9IHRoaXMuZ2V0V2lkdGgoKSA8IGJyZWFrcG9pbnQ7XHJcbiAgfVxyXG5cclxuICBpc0NvbXBhY3QoKSB7XHJcbiAgICByZXR1cm4gIVVuaXRXb3JkbWFyay5oYXNDb250YWluZXJTdXBwb3J0KCkgJiYgdGhpcy5jb21wYWN0O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQmxvY2tJKCkge1xyXG4gICAgcmV0dXJuIGh0bWxgXHJcbjxzdmcgY2xhc3M9XCJibG9jay1pXCIgbWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCA1NSA3OVwiPlxyXG4gIDx0aXRsZT5CbG9jayBJIGxvZ288L3RpdGxlPlxyXG4gIDxwYXRoIGNsYXNzPVwiYmxvY2staV9fb3V0bGluZVwiIGQ9XCJNNTQuMiAyMS4xVjBIMHYyMS4xaDEydjM2LjFIMHYyMS4xaDU0LjJWNTcuMmgtMTJWMjEuMXpcIiAvPlxyXG4gIDxwYXRoIGNsYXNzPVwiYmxvY2staV9fZmlsbFwiIGQ9XCJNNDIuMSAxOC4xaDlWM0gzdjE1aDljMS43IDAgMyAxLjMgMyAzdjM2LjFjMCAxLjctMS4zIDMtMyAzSDN2MTVoNDguMXYtMTVoLTljLTEuNyAwLTMtMS4zLTMtM3YtMzZjMC0xLjcgMS40LTMgMy0zelwiIC8+XHJcbjwvc3ZnPlxyXG4gICAgICAgIGA7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBjb21wYWN0ID0gdGhpcy5pc0NvbXBhY3QoKSA/ICdjb21wYWN0JyA6ICcnO1xyXG4gICAgcmV0dXJuIGh0bWxgXHJcbjxkaXYgY2xhc3M9XCJ3b3JkbWFyayAke2NvbXBhY3R9XCI+XHJcbiAgPGRpdiBjbGFzcz1cImNhbXB1c1wiPlxyXG4gICAgPGEgaHJlZj1cImh0dHBzOi8vaWxsaW5vaXMuZWR1XCI+JHt0aGlzLnJlbmRlckJsb2NrSSgpfTwvYT5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwidW5pdFwiPlxyXG4gICAgPHNsb3Q+PC9zbG90PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgICAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpbC11bml0LXdvcmRtYXJrJywgVW5pdFdvcmRtYXJrKTtcclxuIiwiaW1wb3J0IHtjc3N9IGZyb20gJ2xpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcblxyXG46aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi53b3JkbWFyayB7XHJcbiAgLS1ibG9jay1pLWFsaWdubWVudDogY2VudGVyOyBcclxuICAtLXVuaXQtYm9yZGVyOiAxcHggc29saWQgdmFyKC0taWwtYmx1ZSk7XHJcbiAgLS11bml0LXBhZGRpbmc6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJjYW1wdXMgdW5pdFwiO1xyXG4gIGdyaWQtZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uY2FtcHVzIHtcclxuICBncmlkLWFyZWE6IGNhbXB1cztcclxuICBhbGlnbi1zZWxmOiB2YXIoLS1ibG9jay1pLWFsaWdubWVudCk7XHJcbn1cclxuLmNhbXB1cyBhIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA0M3B4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uY2FtcHVzIGE6Zm9jdXMsIC5jYW1wdXMgYTpob3ZlciAge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3V0bGluZS1jb2xvcjogbm9uZTtcclxufVxyXG5cclxuLmNhbXB1cyBhOmZvY3VzIC5ibG9jay1pX19maWxsLCAuY2FtcHVzIGE6aG92ZXIgLmJsb2NrLWlfX2ZpbGwge1xyXG4gIGZpbGw6IHZhcigtLWlsLWJsdWUpO1xyXG59XHJcblxyXG4udW5pdCB7XHJcbiAgZ3JpZC1hcmVhOiB1bml0O1xyXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGJvcmRlci1sZWZ0OiB2YXIoLS11bml0LWJvcmRlcik7XHJcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS11bml0LXBhZGRpbmcpO1xyXG59XHJcblxyXG4uYmxvY2staSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLmJsb2NrLWlfX291dGxpbmUge1xyXG4gIGZpbGw6IHZhcigtLWlsLWJsdWUpO1xyXG59XHJcbi5ibG9jay1pX19maWxsIHtcclxuICBmaWxsOiB2YXIoLS1pbC1vcmFuZ2UpO1xyXG59XHJcblxyXG5Ac3VwcG9ydHMgKGNvbnRhaW46IGlubGluZS1zaXplKSB7XHJcbiAgLndvcmRtYXJrIHtcclxuICAgIGNvbnRhaW46IGxheW91dCBpbmxpbmUtc2l6ZTtcclxuICB9XHJcbiAgQGNvbnRhaW5lciAobWluLXdpZHRoOiA0MDBweCkge1xyXG4gICAgLndvcmRtYXJrIHtcclxuICAgICAgLS1ibG9jay1pLWFsaWdubWVudDogZmxleC1zdGFydDsgXHJcbiAgICAgIC0tdW5pdC1ib3JkZXI6IG5vbmU7XHJcbiAgICAgIC0tdW5pdC1wYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQHN1cHBvcnRzIG5vdCAoY29udGFpbjogaW5saW5lLXNpemUpIHtcclxuICAud29yZG1hcmsuY29tcGFjdCB7XHJcbiAgICAtLWJsb2NrLWktYWxpZ25tZW50OiBmbGV4LXN0YXJ0OyBcclxuICAgIC0tdW5pdC1ib3JkZXI6IG5vbmU7XHJcbiAgICAtLXVuaXQtcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5gXHJcbi8qXHJcblxyXG4ud29yZG1hcmsud2lkZSB7XHJcbiAgbWluLWhlaWdodDogNDNweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ud29yZG1hcmsudGFsbCAuYmxvY2staSB7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuLndvcmRtYXJrIDo6c2xvdHRlZCgqKSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi53b3JkbWFyayA6OnNsb3R0ZWQoKjpsYXN0LWNoaWxkKSB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuLndvcmRtYXJrLndpZGUsIC53b3JkbWFyay5uYXJyb3cge1xyXG4gIHBhZGRpbmctbGVmdDogNzBweDtcclxuICBtaW4taGVpZ2h0OiA0M3B4O1xyXG59XHJcbi53b3JkbWFyay53aWRlOjphZnRlciwgLndvcmRtYXJrLm5hcnJvdzo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlsLWJsdWUpO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMXB4O1xyXG59XHJcbiovIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCB9IGZyb20gJ2xpdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi92ZXJ0aWNhbC10YWItcGFuZWwuY3NzJztcclxuXHJcbmNsYXNzIFZlcnRpY2FsVGFiUGFuZWwgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGVhZGVyVGl0bGU6IHsgdHlwZTogU3RyaW5nIH0sIFxyXG4gICAgICBoZWFkZXJUYWdOYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgICBidXR0b25JZDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXHJcbiAgICAgIHBhbmVsSWQ6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxyXG4gICAgICBvcGVuOiB7dHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UsIGF0dHJpYnV0ZTogdHJ1ZSwgcmVmbGVjdDogdHJ1ZX1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMub3BlbiA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLm9wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbGxhcHNlKCkge1xyXG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVIZWFkZXIoZSkge1xyXG4gICAgY29uc3QgY2hpbGROb2RlID0gZS50YXJnZXQuYXNzaWduZWROb2Rlcyh7ZmxhdHRlbjogdHJ1ZX0pWzBdO1xyXG4gICAgaWYgKHR5cGVvZiBjaGlsZE5vZGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuaGVhZGVyVGFnTmFtZSA9IGNoaWxkTm9kZS50YWdOYW1lO1xyXG4gICAgICB0aGlzLmhlYWRlclRpdGxlID0gY2hpbGROb2RlLmlubmVyVGV4dDtcclxuICAgICAgbGV0IGlkID0gdGhpcy5oZWFkZXJUaXRsZS5yZXBsYWNlKC9bXkEtWmEtejAtOV0vZywgXCJcIikudG9Mb3dlckNhc2UoKTtcclxuICAgICAgdGhpcy5pZCA9IFwiaWwtdmVydGljYWwtdGFiLWlkLVwiICsgaWQ7XHJcbiAgICAgIHRoaXMuYnV0dG9uSWQgPSBcImlsLXZlcnRpY2FsLXRhYi1idXR0b24tXCIgKyBpZDtcclxuICAgICAgdGhpcy5wYW5lbElkID0gXCJpbC12ZXJ0aWNhbC10YWItcGFuZWwtXCIgKyBpZDtcclxuICAgIH1cclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZWhlYWRlcicsIHsgZGV0YWlsOiB7bmFtZTogdGhpcy5oZWFkZXJUaXRsZSB9LCBidWJibGVzOiB0cnVlIH0pKTtcclxuICB9XHJcblxyXG4gIHRyaWdnZXJFeHBhbmQoZSkge1xyXG4gICAgdGhpcy5vcGVuID0gIXRoaXMub3BlbjtcclxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2V4cGFuZCcsIHsgZGV0YWlsOiB7cGFuZWxJZDogdGhpcy5wYW5lbElkIH0sIGJ1YmJsZXM6IHRydWUgfSkpO1xyXG4gIH1cclxuXHJcbiAgZmlyc3RVcGRhdGVkKCkge1xyXG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3Nsb3RbbmFtZT1cImhlYWRlclwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCAoZSkgPT4gdGhpcy51cGRhdGVIZWFkZXIoZSkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyQ2hldnJvbigpIHtcclxuICAgIHJldHVybiBodG1sYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0yMDcuMDI5IDM4MS40NzZMMTIuNjg2IDE4Ny4xMzJjLTkuMzczLTkuMzczLTkuMzczLTI0LjU2OSAwLTMzLjk0MWwyMi42NjctMjIuNjY3YzkuMzU3LTkuMzU3IDI0LjUyMi05LjM3NSAzMy45MDEtLjA0TDIyNCAyODQuNTA1bDE1NC43NDUtMTU0LjAyMWM5LjM3OS05LjMzNSAyNC41NDQtOS4zMTcgMzMuOTAxLjA0bDIyLjY2NyAyMi42NjdjOS4zNzMgOS4zNzMgOS4zNzMgMjQuNTY5IDAgMzMuOTQxTDI0MC45NzEgMzgxLjQ3NmMtOS4zNzMgOS4zNzItMjQuNTY5IDkuMzcyLTMzLjk0MiAwelwiIC8+XHJcbiAgICA8L3N2Zz5gO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySGVhZGluZygpIHtcclxuICAgIHJldHVybiBodG1sYDxidXR0b24gaWQ9XCIke3RoaXMuYnV0dG9uSWR9XCIgYXJpYS1leHBhbmRlZD1cIiR7dGhpcy5vcGVufVwiIGFyaWEtY29udHJvbHM9XCIke3RoaXMucGFuZWxJZH1cIiBAY2xpY2s9JHt0aGlzLnRyaWdnZXJFeHBhbmR9PjxkaXY+JHt0aGlzLmhlYWRlclRpdGxlfTwvZGl2PjxzcGFuPiR7dGhpcy5yZW5kZXJDaGV2cm9uKCl9PC9zcGFuPjwvYnV0dG9uPmA7XHJcbiAgfVxyXG5cclxuICByZW5kZXJCb2R5KCkge1xyXG4gICAgcmV0dXJuIGh0bWxgPGRpdiByb2xlPVwicmVnaW9uXCIgY2xhc3M9XCJwYW5lbFwiIGlkPVwiJHt0aGlzLnBhbmVsSWR9XCIgYXJpYS1sYWJlbGxlZGJ5PVwiJHt0aGlzLmJ1dHRvbklkfVwiID9oaWRkZW49JHshdGhpcy5vcGVufT5cclxuICAgIDxzbG90IG5hbWU9XCJoZWFkZXJcIj48L3Nsb3Q+XHJcbiAgICA8c2xvdD48L3Nsb3Q+XHJcbiAgICA8L2Rpdj5gO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMuaGVhZGVyVGFnTmFtZSA9PSAnSDInKSB7XHJcbiAgICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidmVydGljYWwtdGFiLXBhbmVsXCI+XHJcbiAgICAgIDxoMj4ke3RoaXMucmVuZGVySGVhZGluZygpfTwvaDI+XHJcbiAgICAgICR7dGhpcy5yZW5kZXJCb2R5KCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaGVhZGVyVGFnTmFtZSA9PSAnSDMnKSB7XHJcbiAgICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidmVydGljYWwtdGFiLXBhbmVsXCI+XHJcbiAgICAgIDxoMz4ke3RoaXMucmVuZGVySGVhZGluZygpfTwvaDM+XHJcbiAgICAgICR7dGhpcy5yZW5kZXJCb2R5KCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaGVhZGVyVGFnTmFtZSA9PSAnSDQnKSB7XHJcbiAgICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidmVydGljYWwtdGFiLXBhbmVsXCI+XHJcbiAgICAgIDxoND4ke3RoaXMucmVuZGVySGVhZGluZygpfTwvaDQ+XHJcbiAgICAgICR7dGhpcy5yZW5kZXJCb2R5KCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaGVhZGVyVGFnTmFtZSA9PSAnSDUnKSB7XHJcbiAgICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidmVydGljYWwtdGFiLXBhbmVsXCI+XHJcbiAgICAgIDxoNT4ke3RoaXMucmVuZGVySGVhZGluZygpfTwvaDU+XHJcbiAgICAgICR7dGhpcy5yZW5kZXJCb2R5KCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuaGVhZGVyVGFnTmFtZSA9PSAnSDYnKSB7XHJcbiAgICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidmVydGljYWwtdGFiLXBhbmVsXCI+XHJcbiAgICAgIDxoNj4ke3RoaXMucmVuZGVySGVhZGluZygpfTwvaDY+XHJcbiAgICAgICR7dGhpcy5yZW5kZXJCb2R5KCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGh0bWxgXHJcbiAgICA8ZGl2IGNsYXNzPVwidmVydGljYWwtdGFiLXBhbmVsXCI+XHJcbiAgICAke3RoaXMucmVuZGVySGVhZGluZygpfVxyXG4gICAgJHt0aGlzLnJlbmRlckJvZHkoKX1cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtdmVydGljYWwtdGFiLXBhbmVsJywgVmVydGljYWxUYWJQYW5lbCk7IiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5pbnZpc2libGUgeyBcclxuICAgIGRpc3BsYXk6IG5vbmU7IFxyXG4gIH1cclxuXHJcbiAgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHggMTVweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlsLXBhbmVsLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHZhcigtLWlsLXBhbmVsLWZvcmVncm91bmQtY29sb3IpO1xyXG4gICAgZm9udC1zaXplOiAxLjE4NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWlsLXBhbmVsLWJvcmRlcik7XHJcbiAgfVxyXG5cclxuICAuaGVhZGluZ3MgdWwgbGk6Zmlyc3QtY2hpbGQgYnV0dG9uIHtcclxuICAgIGJvcmRlci10b3A6IHZhcigtLWlsLXBhbmVsLWJvcmRlcik7XHJcbiAgfVxyXG5cclxuICBidXR0b24gZGl2IHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcblxyXG4gIGJ1dHRvblthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbC1zZWxlY3RlZC1wYW5lbC1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pbC1zZWxlY3RlZC1wYW5lbC1mb3JlZ3JvdW5kLWNvbG9yKTtcclxuICB9IFxyXG5cclxuICBidXR0b246Zm9jdXMsIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taWwtZm9jdXNlZC1wYW5lbC1mb3JlZ3JvdW5kLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlsLWZvY3VzZWQtcGFuZWwtYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICBidXR0b25bYXJpYS1leHBhbmRlZD1cInRydWVcIl06Zm9jdXMsIGJ1dHRvblthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbC1zZWxlY3RlZC1wYW5lbC1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgIGNvbG9yOiB2YXIoLS1pbC1zZWxlY3RlZC1wYW5lbC1mb3JlZ3JvdW5kLWNvbG9yKTtcclxuICB9IFxyXG5cclxuICBidXR0b24gc3BhbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZpbGw6IHZhcigtLWlsLXBhbmVsLWZvcmVncm91bmQtY29sb3IpO1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uW2FyaWEtZXhwYW5kZWQ9dHJ1ZV0gc3BhbiB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlsLXNlbGVjdGVkLXBhbmVsLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLWlsLXNlbGVjdGVkLXBhbmVsLWZvcmVncm91bmQtY29sb3IpO1xyXG4gICAgZmlsbDogdmFyKC0taWwtc2VsZWN0ZWQtcGFuZWwtZm9yZWdyb3VuZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICBidXR0b25bYXJpYS1leHBhbmRlZD1cInRydWVcIl06Zm9jdXMgc3BhbiwgYnV0dG9uW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdOmhvdmVyIHNwYW4ge1xyXG4gICAgZmlsbDogdmFyKC0taWwtc2VsZWN0ZWQtcGFuZWwtZm9yZWdyb3VuZC1jb2xvcik7XHJcbiAgfSBcclxuXHJcbiAgYnV0dG9uOmZvY3VzIHNwYW4sIGJ1dHRvbjpob3ZlciBzcGFuIHtcclxuICAgIGZpbGw6IHZhcigtLWlsLWZvY3VzZWQtcGFuZWwtZm9yZWdyb3VuZC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAucGFuZWwge1xyXG4gICAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweDtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWlsLXBhbmVsLWJvcmRlcik7XHJcbiAgfVxyXG5cclxuICBzbG90W25hbWU9XCJoZWFkZXJcIl0ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzkycHgpIHtcclxuICAgIHNsb3RbbmFtZT1cImhlYWRlclwiXSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5wYW5lbCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMCAyMHB4IDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG4iLCJpbXBvcnQgeyBMaXRFbGVtZW50LCBodG1sIH0gZnJvbSAnbGl0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3ZlcnRpY2FsLXRhYi5jc3MnO1xyXG5cclxuY2xhc3MgVmVydGljYWxUYWIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGVzOiB7dHlwZTogQXJyYXksIGF0dHJpYnV0ZTogZmFsc2UgfSxcclxuICAgICAgaWRzOiB7dHlwZTogQXJyYXksIGF0dHJpYnV0ZTogZmFsc2UgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCkge1xyXG4gICAgcmV0dXJuIHN0eWxlcztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMudGl0bGVzID0gW107XHJcbiAgICB0aGlzLmlkcyA9IFtdO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMuaGFuZGxlQ29udGVudExvYWRlZC5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNvbnRlbnRMb2FkZWQoZXZ0KSB7XHJcbiAgICB0aGlzLnRpdGxlcy5sZW5ndGggPSAwO1xyXG4gICAgdGhpcy5pZHMubGVuZ3RoID0gMDtcclxuICAgIHRoaXMuZ2V0UGFuZWxzKCkuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgICAgICB0aGlzLnRpdGxlcy5wdXNoKHNlY3Rpb24uaGVhZGVyVGl0bGUpOyBcclxuICAgICAgICB0aGlzLmlkcy5wdXNoKHNlY3Rpb24ucGFuZWxJZCk7IFxyXG4gICAgICAgIHNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignZXhwYW5kJywgdGhpcy5jb2xsYXBzZVBhbmVscy5iaW5kKHRoaXMpKTtcclxuICAgICAgICBzZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZWhlYWRlcicsIHRoaXMucmVmcmVzaFBhbmVscy5iaW5kKHRoaXMpKTtcclxuICAgICAgICBpZiAodGhpcy50aXRsZXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdvcGVuJywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBjb2xsYXBzZVBhbmVscyhldnQpIHtcclxuICAgIHRoaXMuZ2V0UGFuZWxzKCkuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgICAgICBpZiAoZXZ0LnRhcmdldC5wYW5lbElkICE9PSBzZWN0aW9uLnBhbmVsSWQpIHtcclxuICAgICAgICAgICAgc2VjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlZnJlc2hQYW5lbHMoZXZ0KSB7XHJcbiAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldFBhbmVscygpIHtcclxuICAgIHJldHVybiB0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lsLXZlcnRpY2FsLXRhYi1wYW5lbCcpO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlckV4cGFuZENoaWxkKGV2dCkge1xyXG4gICAgbGV0IHBhbmVsSWQgPSBldnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpO1xyXG4gICAgdGhpcy5nZXRQYW5lbHMoKS5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgICAgIGlmIChwYW5lbElkICE9PSBzZWN0aW9uLnBhbmVsSWQpIHtcclxuICAgICAgICAgICAgc2VjdGlvbi5yZW1vdmVBdHRyaWJ1dGUoJ29wZW4nKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ29wZW4nLCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7IGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7IH0pO1xyXG4gICAgZXZ0LnRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaW50SGVhZGVycygpIHtcclxuICAgIHRoaXMuaGFuZGxlQ29udGVudExvYWRlZCh0aGlzKTtcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgPHVsPlxyXG4gICAgJHt0aGlzLnRpdGxlcy5tYXAoKHRpdGxlLCBpKSA9PlxyXG4gICAgICBodG1sYDxsaT48YnV0dG9uIGFyaWEtZXhwYW5kZWQ9XCIke2kgPT0gMCA/ICd0cnVlJyA6ICdmYWxzZSd9XCIgYXJpYS1jb250cm9scz1cIiR7dGhpcy5pZHNbaV19XCIgQGNsaWNrPSR7dGhpcy50cmlnZ2VyRXhwYW5kQ2hpbGR9PiR7dGl0bGV9PC9idXR0b24+PC9saT5gXHJcbiAgICApfVxyXG4gIDwvdWw+YDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+PHNsb3QgbmFtZT1cInRpdGxlXCI+PC9zbG90PjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGVhZGluZ3NcIj4ke3RoaXMucHJpbnRIZWFkZXJzKCl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25cIj5cclxuICAgICAgPHNsb3Q+PC9zbG90PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtdmVydGljYWwtdGFiJywgVmVydGljYWxUYWIpOyIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbi5mdWxsIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI2LjklIDYwcHggMWZyO1xyXG4gICAgY29sb3I6IHZhcigtLWlsLXBhbmVsLWZvcmVncm91bmQtY29sb3IpO1xyXG4gICAgcGFkZGluZzogNjBweCAwIDc1cHggMDtcclxuICAgIG1hcmdpbjogMCAzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMzEwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIHNwYW4gMztcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uaGVhZGluZ3MgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbC1wYW5lbC1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1pbC1wYW5lbC1mb3JlZ3JvdW5kLWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1pbC1wYW5lbC1ib3JkZXIpO1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWlsLWZvbnQtc2Fucyk7XHJcbn1cclxuXHJcbi5oZWFkaW5ncyB1bCBsaTpmaXJzdC1jaGlsZCBidXR0b24ge1xyXG4gICAgYm9yZGVyLXRvcDogdmFyKC0taWwtcGFuZWwtYm9yZGVyKTtcclxufVxyXG5cclxuLmhlYWRpbmdzIGJ1dHRvbjpmb2N1cywgLmhlYWRpbmdzIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0taWwtZm9jdXNlZC1wYW5lbC1mb3JlZ3JvdW5kLWNvbG9yKTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlsLWZvY3VzZWQtcGFuZWwtYmFja2dyb3VuZC1jb2xvcik7XHJcbn1cclxuXHJcbi5oZWFkaW5ncyBidXR0b25bYXJpYS1leHBhbmRlZD1cInRydWVcIl0ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taWwtc2VsZWN0ZWQtcGFuZWwtYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0taWwtc2VsZWN0ZWQtcGFuZWwtZm9yZWdyb3VuZC1jb2xvcik7XHJcbn0gXHJcblxyXG4uaGVhZGluZ3MgYnV0dG9uW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdOmZvY3VzLCAuaGVhZGluZ3MgYnV0dG9uW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlsLXNlbGVjdGVkLXBhbmVsLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgY29sb3I6IHZhcigtLWlsLXNlbGVjdGVkLXBhbmVsLWZvcmVncm91bmQtY29sb3IpO1xyXG59IFxyXG5cclxuLmhlYWRpbmdzIHVsLCAuaGVhZGluZ3MgdWwgbGkgIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaW5mb3JtYXRpb24ge1xyXG4gICAgZ3JpZC1jb2x1bW46IDM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkycHgpIHtcclxuICAgIC5mdWxsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgIH1cclxuICAgIC5oZWFkaW5ncyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5gOyIsImltcG9ydCB7TGl0RWxlbWVudCwgaHRtbCwgY3NzfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdmlkZW8tZmVhdHVyZS5jc3MnO1xyXG5pbXBvcnQgVmlkZW9GZWF0dXJlIGZyb20gJy4vdmlkZW8tZmVhdHVyZSc7XHJcblxyXG5jbGFzcyBWaWRlb0ZlYXR1cmVDb21wb25lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaXplOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgICAgIGJhY2tncm91bmQ6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZX0sXHJcbiAgICAgICAgc3JjOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgICAgIGFsaWduOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgICAgIHRpdGxlOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgICAgIHZpZXc6IHt0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogdHJ1ZX1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnNpemUgPSAnJztcclxuICAgIHRoaXMuc3JjID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gJyc7XHJcbiAgICB0aGlzLmFsaWduID0gJyc7XHJcbiAgICB0aGlzLnRpdGxlID0gJyc7XHJcbiAgICB0aGlzLnZpZXcgPSAnJztcclxuICB9XHJcblxyXG4gIGdldElmcmFtZSh1cmwsIHRpdGxlLCB2aWV3KSB7XHJcbiAgICAgIGxldCB1cmxIZWxwZXIgPSBuZXcgVmlkZW9GZWF0dXJlLlVybEl0ZW0odXJsLCB2aWV3KTtcclxuICAgICAgaWYgKHVybEhlbHBlci52aWRlb1R5cGUgPT0gXCJ5b3V0dWJlXCIpIHtcclxuICAgICAgICByZXR1cm4gaHRtbGA8aWZyYW1lIHRpdGxlPScke3RpdGxlfScgc3R5bGU9J3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOycgc3JjPScke3VybEhlbHBlci52aWRlb1VybH0nIGZyYW1lYm9yZGVyPScwJyBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+YDtcclxuXHJcbiAgICAgIH0gZWxzZSBpZiAodXJsSGVscGVyLnZpZGVvVHlwZSA9PSBcIm1lZGlhc3BhY2VcIikge1xyXG4gICAgICAgIHJldHVybiBodG1sYDxpZnJhbWUgdGl0bGU9JyR7dGl0bGV9JyBpZD0na2FsdHVyYV9wbGF5ZXJfJHt1cmxIZWxwZXIudmlkZW9JZH0nIGNsYXNzPSdrbXNlbWJlZCcgc3R5bGU9J3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOycgc3JjPScke3VybEhlbHBlci52aWRlb1VybH0nIHN0eWxlPSdmbG9hdDogbGVmdDsgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAwOycgYWxsb3dmdWxsc2NyZWVuIHdlYmtpdGFsbG93ZnVsbHNjcmVlbiBtb3pBbGxvd0Z1bGxTY3JlZW4gYWxsb3c9J2F1dG9wbGF5ICo7IGZ1bGxzY3JlZW4gKjsgZW5jcnlwdGVkLW1lZGlhIConIGZyYW1lYm9yZGVyPScwJz48L2lmcmFtZT5gO1xyXG5cclxuICAgICAgfSBlbHNlIGlmICh1cmxIZWxwZXIudmlkZW9UeXBlID09IFwidmltZW9cIikge1xyXG4gICAgICAgIHJldHVybiBodG1sYDxpZnJhbWUgdGl0bGU9JyR7dGl0bGV9JyBzdHlsZT0ncG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7JyBzcmM9JyR7dXJsSGVscGVyLnZpZGVvVXJsfScgZnJhbWVib3JkZXI9JzAnIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5gO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgcmVuZGVyVmlkZW8oKSB7XHJcbiAgICAgIHJldHVybiBodG1sXHJcbiAgICAgIGA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMCU7IGFsaWduLXNlbGY6IGNlbnRlcjtcIj48ZGl2IGNsYXNzPSd2aWRlb3dyYXBwZXInPiR7dGhpcy5nZXRJZnJhbWUodGhpcy5zcmMsIHRoaXMudGl0bGUsIHRoaXMudmlldyl9PC9kaXY+PC9kaXY+YFxyXG4gICAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcblxyXG4gICAgaWYgKHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZyAhPSBudWxsICYmIHRoaXMucHJldmlvdXNFbGVtZW50U2libGluZy5sb2NhbE5hbWUgPT0gXCJpbC12aWRlby1mZWF0dXJlXCIgJiYgdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmdldEF0dHJpYnV0ZSgnYWxpZ24nKSA9PSBudWxsICYmIHRoaXMuYWxpZ24gPT0gJycpIHtcclxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYWxpZ24nLCAncmlnaHQnKTtcclxuICAgIH1cclxuICAgIHZhciBjb250ZW50Q2xhc3MgPSAodGhpcy5iYWNrZ3JvdW5kID09ICdzb2xpZCcgfHwgdGhpcy5iYWNrZ3JvdW5kID09ICdibHVlJykgPyAnY29udGVudCBzb2xpZCcgOiB0aGlzLmJhY2tncm91bmQgPT0gJ3doaXRlJyA/ICdjb250ZW50JyA6IHRoaXMuYmFja2dyb3VuZCA9PSAnb3JhbmdlJyA/ICdjb250ZW50IG9yYW5nZScgOiB0aGlzLmJhY2tncm91bmQgPT0gJ2dyYXknID8gJ2NvbnRlbnQgd2hpdGUgZ3JheScgOidjb250ZW50IGdyYWRpZW50JztcclxuICAgIHZhciBiYWNrZ3JvdW5kQ2xhc3MgPSAodGhpcy5iYWNrZ3JvdW5kID09ICdzb2xpZCcgfHwgdGhpcy5iYWNrZ3JvdW5kID09ICdibHVlJykgPyAnYmFja2dyb3VuZCBzb2xpZCcgOiB0aGlzLmJhY2tncm91bmQgPT0gJ3doaXRlJyA/ICdiYWNrZ3JvdW5kJyA6IHRoaXMuYmFja2dyb3VuZCA9PSAnb3JhbmdlJyA/ICdiYWNrZ3JvdW5kIG9yYW5nZScgOiB0aGlzLmJhY2tncm91bmQgPT0gJ2dyYXknID8gJ2JhY2tncm91bmQgZ3JheScgOiAnYmFja2dyb3VuZCBncmFkaWVudCc7XHJcblxyXG4gICAgcmV0dXJuIGh0bWxgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvZmVhdHVyZSAke3RoaXMuYWxpZ259ICR7dGhpcy5zaXplfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiJHtiYWNrZ3JvdW5kQ2xhc3N9XCI+JHt0aGlzLnJlbmRlclZpZGVvKCl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCIke2NvbnRlbnRDbGFzc31cIj5cclxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICB9XHJcbn1cclxuXHJcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnaWwtdmlkZW8tZmVhdHVyZScsIFZpZGVvRmVhdHVyZUNvbXBvbmVudCk7XHJcbiIsImltcG9ydCB7IGNzcyB9IGZyb20gJ2xpdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3NgXHJcbiAgICAudmlkZW9mZWF0dXJlIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC52aWRlb2ZlYXR1cmUucmlnaHQge1xyXG4gICAgICAgIC0taWwtaW1hZ2UtZmVhdHVyZS1mbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICB9XHJcbiAgICAudmlkZW9mZWF0dXJlLmxhcmdlIHtcclxuICAgICAgICAtLWlsLWltYWdlLWZlYXR1cmUtZmxleC1ncm93LWltYWdlOiAyO1xyXG4gICAgfVxyXG4gICAgLnZpZGVvZmVhdHVyZS5zbWFsbCB7XHJcbiAgICAgICAgLS1pbC1pbWFnZS1mZWF0dXJlLWZsZXgtZ3Jvdy1jb250ZW50OiAyO1xyXG4gICAgfVxyXG4gICAgLnZpZGVvZmVhdHVyZSAuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIH1cclxuICAgIC52aWRlb2ZlYXR1cmUgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDEuODc1cmVtIDEuMjVyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taWwtaW1hZ2UtZmVhdHVyZS1jb2xvcik7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taWwtaW1hZ2UtZmVhdHVyZS1iYWNrZ3JvdW5kKTtcclxuICAgIH1cclxuICAgIC52aWRlb2ZlYXR1cmUgLmNvbnRlbnQub3JhbmdlIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taWwtZ3JhZGllbnQtb3JhbmdlKTtcclxuICAgIH1cclxuICAgIC52aWRlb2ZlYXR1cmUgLmNvbnRlbnQuc29saWQsIC52aWRlb2ZlYXR1cmUgLmJhY2tncm91bmQuc29saWQgIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taWwtYmx1ZSk7XHJcbiAgICB9XHJcbiAgICAudmlkZW9mZWF0dXJlIC5jb250ZW50LmdyYXksIC52aWRlb2ZlYXR1cmUgLmJhY2tncm91bmQuZ3JheSAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlsLWdyYXktMSk7XHJcbiAgICB9XHJcbiAgICAudmlkZW9mZWF0dXJlIC5iYWNrZ3JvdW5kIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZ3JvdzogdmFyKC0taWwtaW1hZ2UtZmVhdHVyZS1mbGV4LWdyb3ctaW1hZ2UpO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICB9XHJcbiAgICAudmlkZW9mZWF0dXJlIC5jb250ZW50IHtcclxuICAgICAgICBmbGV4LWdyb3c6IHZhcigtLWlsLWltYWdlLWZlYXR1cmUtZmxleC1ncm93LWNvbnRlbnQpO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnZpZGVvd3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlOyBcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTAwcHgpIHtcclxuICAgICAgICAudmlkZW9mZWF0dXJlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHZhcigtLWlsLWltYWdlLWZlYXR1cmUtZmxleC1kaXJlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmlkZW9mZWF0dXJlIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMS44NzVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aWRlb3dyYXBwZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5M3B4KSB7XHJcbiAgICAgICAgLnZpZGVvZmVhdHVyZSAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMi4ydnc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDE0NTBweCkge1xyXG4gICAgICAgIC52aWRlb2ZlYXR1cmUgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDZyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aWRlb3dyYXBwZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlOyBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiIsImNsYXNzIEl0ZW0geyB9XHJcblxyXG5jbGFzcyBVcmxJdGVtIGV4dGVuZHMgSXRlbSB7IFxyXG4gICBjb25zdHJ1Y3Rvcih1cmwsIHZpZXcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3ZpZGVvSWQgPSB1cmwuc3BsaXQoXCIvXCIpLnBvcCgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZGVvQ29kZSA9ICcyNjg4MzcwMSc7XHJcbiAgICAgICAgdGhpcy5fdmlkZW9UeXBlID0gJyc7XHJcbiAgICAgICAgdGhpcy5fdmlkZW9VcmwgPSAnJztcclxuXHJcbiAgICAgICAgbGV0IHVybExvd2VyQ2FzZSA9IHVybC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmICh1cmxMb3dlckNhc2UuaW5jbHVkZXMoXCJ5b3V0dWJlXCIpIHx8IHVybExvd2VyQ2FzZS5pbmNsdWRlcyhcInlvdXR1LmJlXCIpKSB7XHJcbiAgICAgICAgICBjb25zdCB5b3VUdWJlViA9IHVybC5zcGxpdChcInY9XCIpO1xyXG4gICAgICAgICAgaWYgKHlvdVR1YmVWLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmlkZW9JZCA9IHlvdVR1YmVWWzFdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5fdmlkZW9UeXBlID0gXCJ5b3V0dWJlXCI7XHJcbiAgICAgICAgICB0aGlzLl92aWRlb1VybCA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuX3ZpZGVvSWR9YDtcclxuICBcclxuICAgICAgICB9IGVsc2UgaWYgKHVybExvd2VyQ2FzZS5pbmNsdWRlcyhcIm1lZGlhc3BhY2VcIikpIHtcclxuICAgICAgICAgIGlmICh2aWV3ID09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgICAgICB0aGlzLl92aWRlb0NvZGUgPSAnNDQ2NjYzMzEnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5fdmlkZW9UeXBlID0gXCJtZWRpYXNwYWNlXCI7XHJcbiAgICAgICAgICBpZiAodXJsTG93ZXJDYXNlLmluY2x1ZGVzKFwiZW1iZWQvc2VjdXJlXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvQ29kZSA9IHRoaXMuX3ZpZGVvSWQ7XHJcbiAgICAgICAgICAgIGxldCB1cmxBcnJheSA9IHVybC5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvSWQgPSB1cmxBcnJheVt1cmxBcnJheS5sZW5ndGggLSAzXTtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICB0aGlzLl92aWRlb1VybCA9IGBodHRwczovL21lZGlhc3BhY2UuaWxsaW5vaXMuZWR1L2VtYmVkL3NlY3VyZS9pZnJhbWUvZW50cnlJZC8ke3RoaXMuX3ZpZGVvSWR9L3VpQ29uZklkLyR7dGhpcy5fdmlkZW9Db2RlfWA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1cmxMb3dlckNhc2UuaW5jbHVkZXMoXCJ2aW1lb1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl92aWRlb1R5cGUgPSBcInZpbWVvXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvVXJsID0gYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3RoaXMuX3ZpZGVvSWR9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdldCB2aWRlb1R5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvVHlwZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2V0IHZpZGVvSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvSWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdldCB2aWRlb0NvZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvQ29kZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZ2V0IHZpZGVvVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlb1VybDtcclxuICAgICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgVXJsSXRlbSB9OyIsImltcG9ydCB7TGl0RWxlbWVudCwgaHRtbCwgY3NzfSBmcm9tICdsaXQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vdmlkZW8uY3NzJztcclxuaW1wb3J0IFZpZGVvIGZyb20gJy4vdmlkZW8nO1xyXG5cclxuY2xhc3MgVmlkZW9Db21wb25lbnQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcclxuXHJcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3JjOiB7dHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IHRydWV9LFxyXG4gICAgICB0aXRsZToge3R5cGU6IFN0cmluZywgYXR0cmlidXRlOiB0cnVlfSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IHN0eWxlcygpIHtcclxuICAgIHJldHVybiBzdHlsZXM7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmFzcGVjdHJhdGlvID0gJyc7XHJcbiAgICB0aGlzLnNyYyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMudGl0bGUgPSAnJztcclxuICB9XHJcblxyXG4gIGdldElmcmFtZSh1cmwsIHRpdGxlLCB2aWV3KSB7XHJcbiAgICAgIGxldCB1cmxIZWxwZXIgPSBuZXcgVmlkZW8uVXJsSXRlbSh1cmwsIHZpZXcpO1xyXG4gICAgICBpZiAodXJsSGVscGVyLnZpZGVvVHlwZSA9PSBcInlvdXR1YmVcIikge1xyXG4gICAgICAgIHJldHVybiBodG1sYDxpZnJhbWUgdGl0bGU9JyR7dGl0bGV9ICh2aWRlbyknIHN0eWxlPSdwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsnIHNyYz0nJHt1cmxIZWxwZXIudmlkZW9Vcmx9JyBmcmFtZWJvcmRlcj0nMCcgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPmA7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsSGVscGVyLnZpZGVvVHlwZSA9PSBcIm1lZGlhc3BhY2VcIikge1xyXG4gICAgICAgIHJldHVybiBodG1sYDxpZnJhbWUgdGl0bGU9JyR7dGl0bGV9ICh2aWRlbyknIGlkPSdrYWx0dXJhX3BsYXllcl8ke3VybEhlbHBlci52aWRlb0lkfScgY2xhc3M9J2ttc2VtYmVkJyBzdHlsZT0ncG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7JyBzcmM9JyR7dXJsSGVscGVyLnZpZGVvVXJsfScgc3R5bGU9J2Zsb2F0OiBsZWZ0OyBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7JyBhbGxvd2Z1bGxzY3JlZW4gd2Via2l0YWxsb3dmdWxsc2NyZWVuIG1vekFsbG93RnVsbFNjcmVlbiBhbGxvdz0nYXV0b3BsYXkgKjsgZnVsbHNjcmVlbiAqOyBlbmNyeXB0ZWQtbWVkaWEgKicgZnJhbWVib3JkZXI9JzAnPjwvaWZyYW1lPmA7XHJcbiAgICAgIH0gZWxzZSBpZiAodXJsSGVscGVyLnZpZGVvVHlwZSA9PSBcInZpbWVvXCIpIHtcclxuICAgICAgICByZXR1cm4gaHRtbGA8aWZyYW1lIHRpdGxlPScke3RpdGxlfSAodmlkZW8pJyBzdHlsZT0ncG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7JyBzcmM9JyR7dXJsSGVscGVyLnZpZGVvVXJsfScgZnJhbWVib3JkZXI9JzAnIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5gO1xyXG4gICAgICB9IGVsc2UgaWYgKHVybEhlbHBlci52aWRlb1R5cGUgPT0gXCJibGFua1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0bWxgPGRpdiBzdHlsZT0ncG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6IGJsYWNrOyBjb2xvcjogd2hpdGU7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1pdGVtczogY2VudGVyOyBmb250LXdlaWdodDogYm9sZDsnPiR7dGl0bGV9PC9kaXY+YDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IGdldEFzcGVjdFJhdGlvID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5nZXRQcm9wZXJ0eVZhbHVlKCctLWlsLXZpZGVvLWFzcGVjdC1yYXRpbycpLnRyaW0oKTtcclxuICAgIGxldCBwYWRkaW5nID0gJzU2LjI1JSc7XHJcbiAgICBpZiAoZ2V0QXNwZWN0UmF0aW8gPT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICBwYWRkaW5nID0gJzE3Ny43OCUnO1xyXG4gICAgfSBlbHNlIGlmIChnZXRBc3BlY3RSYXRpbyA9PSAndHYnKSB7XHJcbiAgICAgIHBhZGRpbmcgPSAnNzUlJztcclxuICAgIH0gZWxzZSBpZiAoZ2V0QXNwZWN0UmF0aW8uZW5kc1dpdGgoJyUnKSkge1xyXG4gICAgICBwYWRkaW5nID0gZ2V0QXNwZWN0UmF0aW87XHJcbiAgICB9IGVsc2UgaWYgKGdldEFzcGVjdFJhdGlvLmluY2x1ZGVzKCcvJykpIHtcclxuICAgICAgbGV0IGl0ZW1zID0gZ2V0QXNwZWN0UmF0aW8uc3BsaXQoJy8nKTtcclxuICAgICAgcGFkZGluZyA9IChwYXJzZUludChpdGVtc1sxXS5yZXBsYWNlKFwiJ1wiLCBcIlwiKSkpLyhwYXJzZUludChpdGVtc1swXS5yZXBsYWNlKFwiJ1wiLCBcIlwiKSkpICogMTAwICsgJyUnO1xyXG4gICAgfSBcclxuICAgIHJldHVybiBodG1sYFxyXG4gICAgICA8ZGl2IGNsYXNzPVwidmlkZW93cmFwcGVyLXdpZHRoXCIgc3R5bGU9XCJcIj48ZGl2IGNsYXNzPVwidmlkZW93cmFwcGVyLWZ1bGxcIj48ZGl2IGNsYXNzPSd2aWRlb3dyYXBwZXInIHN0eWxlPSdwYWRkaW5nLWJvdHRvbTogJHtwYWRkaW5nfSc+JHt0aGlzLmdldElmcmFtZSh0aGlzLnNyYywgdGhpcy50aXRsZSwgdGhpcy52aWV3KX08L2Rpdj48L2Rpdj48L2Rpdj5gO1xyXG4gIH1cclxufVxyXG5cclxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdpbC12aWRlbycsIFZpZGVvQ29tcG9uZW50KTtcclxuIiwiaW1wb3J0IHsgY3NzIH0gZnJvbSAnbGl0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuLnZpZGVvd3JhcHBlci13aWR0aCB7XHJcbiAgICB3aWR0aDogdmFyKC0taWwtdmlkZW8tbWF4LXdpZHRoKTtcclxuICAgIG1hcmdpbjogdmFyKC0taWwtdmlkZW8tbWFyZ2luKTtcclxufVxyXG4udmlkZW93cmFwcGVyLWZ1bGwge1xyXG4gICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi52aWRlb3dyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcclxuICAgIGhlaWdodDogMDtcclxufVxyXG5gO1xyXG4iLCJjbGFzcyBJdGVtIHsgfVxyXG5cclxuY2xhc3MgVXJsSXRlbSBleHRlbmRzIEl0ZW0geyBcclxuICAgY29uc3RydWN0b3IodXJsLCB2aWV3KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl92aWRlb0lkID0gdXJsLnNwbGl0KFwiL1wiKS5wb3AoKTtcclxuICAgICAgICB0aGlzLl92aWRlb0NvZGUgPSAnMjY4ODM3MDEnO1xyXG4gICAgICAgIHRoaXMuX3ZpZGVvVHlwZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuX3ZpZGVvVXJsID0gJyc7XHJcblxyXG4gICAgICAgIGxldCB1cmxMb3dlckNhc2UgPSB1cmwudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAodXJsTG93ZXJDYXNlID09ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLl92aWRlb1R5cGUgPSBcImJsYW5rXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1cmxMb3dlckNhc2UuaW5jbHVkZXMoXCJ5b3V0dWJlXCIpIHx8IHVybExvd2VyQ2FzZS5pbmNsdWRlcyhcInlvdXR1LmJlXCIpKSB7XHJcbiAgICAgICAgICBjb25zdCB5b3VUdWJlViA9IHVybC5zcGxpdChcInY9XCIpO1xyXG4gICAgICAgICAgaWYgKHlvdVR1YmVWLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmlkZW9JZCA9IHlvdVR1YmVWWzFdO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5fdmlkZW9UeXBlID0gXCJ5b3V0dWJlXCI7XHJcbiAgICAgICAgICB0aGlzLl92aWRlb1VybCA9IGBodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuX3ZpZGVvSWR9YDtcclxuICBcclxuICAgICAgICB9IGVsc2UgaWYgKHVybExvd2VyQ2FzZS5pbmNsdWRlcyhcIm1lZGlhc3BhY2VcIikpIHtcclxuICAgICAgICAgIGlmICh2aWV3ID09IFwidmVydGljYWxcIikge1xyXG4gICAgICAgICAgICB0aGlzLl92aWRlb0NvZGUgPSAnNDQ2NjYzMzEnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5fdmlkZW9UeXBlID0gXCJtZWRpYXNwYWNlXCI7XHJcbiAgICAgICAgICBpZiAodXJsTG93ZXJDYXNlLmluY2x1ZGVzKFwiZW1iZWQvc2VjdXJlXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvQ29kZSA9IHRoaXMuX3ZpZGVvSWQ7XHJcbiAgICAgICAgICAgIGxldCB1cmxBcnJheSA9IHVybC5zcGxpdChcIi9cIik7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvSWQgPSB1cmxBcnJheVt1cmxBcnJheS5sZW5ndGggLSAzXTtcclxuICAgICAgICAgIH0gXHJcbiAgICAgICAgICB0aGlzLl92aWRlb1VybCA9IGBodHRwczovL21lZGlhc3BhY2UuaWxsaW5vaXMuZWR1L2VtYmVkL3NlY3VyZS9pZnJhbWUvZW50cnlJZC8ke3RoaXMuX3ZpZGVvSWR9L3VpQ29uZklkLyR7dGhpcy5fdmlkZW9Db2RlfWA7XHJcbiAgICAgICAgfSBlbHNlIGlmICh1cmxMb3dlckNhc2UuaW5jbHVkZXMoXCJ2aW1lb1wiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl92aWRlb1R5cGUgPSBcInZpbWVvXCI7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvVXJsID0gYGh0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8ke3RoaXMuX3ZpZGVvSWR9YDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdldCB2aWRlb1R5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvVHlwZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZ2V0IHZpZGVvSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvSWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdldCB2aWRlb0NvZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZGVvQ29kZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZ2V0IHZpZGVvVXJsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlb1VybDtcclxuICAgICAgfVxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHsgVXJsSXRlbSB9OyIsIm1vZHVsZS5leHBvcnRzID0gY2xhc3MgRGVidWdnZXIge1xyXG5cclxuICBzdGF0aWMgaXNBY3RpdmUoKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pbC1kZWJ1ZycpID09PSAndHJ1ZSc7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgd2FybihtZXNzYWdlKSB7XHJcbiAgICBpZiAoRGVidWdnZXIuaXNBY3RpdmUoKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0ICcuLi9jc3MvdG9vbGtpdC5zY3NzJztcclxuXHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24nO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2FjY29yZGlvbi1wYW5lbC9hY2NvcmRpb24tcGFuZWwuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYmFjay10by10b3AvYmFjay10by10b3AuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvYnJlYWRjcnVtYnMvcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jYWxsLXRvLWFjdGlvbi9jYWxsLXRvLWFjdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvY2xpY2thYmxlLWNhcmQvY2xpY2thYmxlLWNhcmQuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGlyZWN0b3J5L2NhcmQuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZGlyZWN0b3J5L3Byb2ZpbGUuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2dhbGxlcnktZGV0YWlsL2dhbGxlcnktZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2dhbGxlcnktaXRlbS9nYWxsZXJ5LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvaGVyby9oZXJvLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2ltYWdlLWZlYXR1cmUvaW1hZ2UtZmVhdHVyZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9pbnRyb2R1Y3Rpb24vaW50cm9kdWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2xheW91dC9wYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2xheW91dC9zZWN0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL2xheW91dC9zZWN0aW9uLXdpdGgtc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9sZWRlL2xlZGUuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbGluay9saW5rJztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvcGFnZS10aXRsZS9wYWdlLXRpdGxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9xdW90ZS9xdW90ZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3NlY3Rpb24tbmF2L3NlY3Rpb24tbmF2LmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3N0YXRpc3RpYy9zdGF0aXN0aWMnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy91bml0LXdvcmRtYXJrL3VuaXQtd29yZG1hcmsuY29tcG9uZW50JztcclxuaW1wb3J0ICcuL2NvbXBvbmVudHMvdmVydGljYWwtdGFiL3ZlcnRpY2FsLXRhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgJy4vY29tcG9uZW50cy92ZXJ0aWNhbC10YWItcGFuZWwvdmVydGljYWwtdGFiLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudCc7XHJcbmltcG9ydCAnLi9jb21wb25lbnRzL3ZpZGVvLWZlYXR1cmUvdmlkZW8tZmVhdHVyZS5jb21wb25lbnQnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9