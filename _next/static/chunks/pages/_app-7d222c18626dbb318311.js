(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9328:function(e,n,t){"use strict";t.d(n,{L:function(){return pe},UF:function(){return Ee},Kq:function(){return J},AK:function(){return Oe},eh:function(){return te},Hf:function(){return be},xf:function(){return le},LK:function(){return fe},zK:function(){return Q},nR:function(){return se}});var r=t(4184),a=t.n(r),o=t(7294),i=t.t(o,2),u=t(3935);const c={prefix:Math.round(1e10*Math.random()),current:0},l=o.createContext(c);function d(e){let n=(0,o.useContext)(l),t=(0,o.useMemo)((()=>({prefix:n===c?0:++n.prefix,current:0})),[n]);return o.createElement(l.Provider,{value:t},e.children)}Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);"undefined"!==typeof window&&o.useLayoutEffect;new Map;new Set(["id"]),new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]);let f=new Map,p=new Set;function s(){if("undefined"===typeof window)return;let e=n=>{let t=f.get(n.target);if(t&&(t.delete(n.propertyName),0===t.size&&(n.target.removeEventListener("transitioncancel",e),f.delete(n.target)),0===f.size)){for(let e of p)e();p.clear()}};document.body.addEventListener("transitionrun",(n=>{let t=f.get(n.target);t||(t=new Set,f.set(n.target,t),n.target.addEventListener("transitioncancel",e)),t.add(n.propertyName)})),document.body.addEventListener("transitionend",e)}"undefined"!==typeof document&&("loading"!==document.readyState?s():document.addEventListener("DOMContentLoaded",s));"undefined"!==typeof window&&window.visualViewport;new Map;function v(e){return"undefined"!==typeof window&&null!=window.navigator&&e.test(window.navigator.platform)}function y(){return v(/^Mac/)}function m(e){return!(0!==e.mozInputSource||!e.isTrusted)||0===e.detail&&!e.pointerType}const h=o.createContext(null);h.displayName="PressResponderContext";let w=null,b=new Set,g=!1,E=!1,O=!1;function j(e,n){for(let t of b)t(e,n)}function A(e){E=!0,function(e){return!(e.metaKey||!y()&&e.altKey||e.ctrlKey||"keyup"===e.type&&("Control"===e.key||"Shift"===e.key))}(e)&&(w="keyboard",j("keyboard",e))}function _(e){w="pointer","mousedown"!==e.type&&"pointerdown"!==e.type||(E=!0,j("pointer",e))}function S(e){m(e)&&(E=!0,w="virtual")}function L(e){e.target!==window&&e.target!==document&&(E||O||(w="virtual",j("virtual",e)),E=!1,O=!1)}function x(){E=!1,O=!0}function k(){if("undefined"===typeof window||g)return;let e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){E=!0,e.apply(this,arguments)},document.addEventListener("keydown",A,!0),document.addEventListener("keyup",A,!0),document.addEventListener("click",S,!0),window.addEventListener("focus",L,!0),window.addEventListener("blur",x,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",_,!0),document.addEventListener("pointermove",_,!0),document.addEventListener("pointerup",_,!0)):(document.addEventListener("mousedown",_,!0),document.addEventListener("mousemove",_,!0),document.addEventListener("mouseup",_,!0)),g=!0}"undefined"!==typeof document&&("loading"!==document.readyState?k():document.addEventListener("DOMContentLoaded",k));new Set;const C=["input:not([disabled]):not([type=hidden])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","summary","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]"];C.join(":not([hidden]),");C.push('[tabindex]:not([tabindex="-1"]):not([disabled])');C.join(':not([hidden]):not([tabindex="-1"]),');function N(){return(N=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function P(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}function M(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function D(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return M(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?M(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function R(e){return null!=e}function T(e){for(var n={},t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];for(var o=0,i=r;o<i.length;o++){var u=i[o];u in e&&(n[u]=e[u])}return n}function I(e){for(var n={},t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];for(var o=0,i=Object.keys(e);o<i.length;o++){var u=i[o];r.includes(u)||(n[u]=e[u])}return n}function K(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];if(0!==n.length)return function(e){for(var t,r=e,a=D(n);!(t=a()).done;){r=(0,t.value)(r)}return r}}var z="undefined"!==typeof window,F=Symbol("NONE"),U=z?o.useLayoutEffect:o.useEffect;function V(e,n,t){return Array.isArray(t)?o.createElement.apply(o,[e,n].concat(t)):t||"children"in n?o.createElement(e,n,t):o.createElement(e,n)}function G(e){for(var n=N({},e),t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];for(var o=0,i=r;o<i.length;o++)for(var u=i[o],c=0,l=Object.keys(u);c<l.length;c++){var d=l[c];n[d]=X(d,n[d],u[d])}return n}function H(e,n){e&&("function"===typeof e?e(n):Object.isFrozen(e)||(e.current=n))}function W(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return function(e){for(var t,r=D(n);!(t=r()).done;){H(t.value,e)}}}function X(e,n,t){return n===F||t===F?null:null==n?t:null==t?n:"className"===e?a()(n,t):"style"===e?N({},n,t):"ref"===e?W(n,t):typeof n!==typeof t?t:e.startsWith("on")&&"function"===typeof n?function(){var e;return"function"===typeof n&&(e=n.apply(void 0,arguments)),"function"===typeof t&&(e=t.apply(void 0,arguments)),e}:t}function Z(e,n,t,r){var a=n.children,o=P(n,["children"]),i=Y(a,null!=t&&t);return V(e,N({ref:r},o),i)}function q(e,n){var t=e.as,r=e.hasGap;return Z(null!=t?t:"div",P(e,["as","hasGap"]),r,n)}var B=(0,o.forwardRef)(q),$=function(e){return(0,o.forwardRef)((function(n,t){var r=n.hasGap,a=P(n,["hasGap"]);return Z(e,a,r,t)}))},J=Object.assign(B,{div:$("div"),a:$("a"),button:$("button"),h1:$("h1"),h2:$("h2"),h3:$("h3"),h4:$("h4"),h5:$("h5"),h6:$("h6"),label:$("label"),form:$("form"),section:$("section"),head:$("head"),main:$("main"),nav:$("nav")});function Q(e,n,t){if(null==e)return!1;var r=e[n];return null!=r&&(!0===r?t===n:!1!==r&&(Array.isArray(r)?r.includes(t):"string"===typeof r?r===t:void 0!==r[t]&&!1!==r[t]))}function Y(e,n){var t=n?"__wab_flex-container":"__wab_passthrough";return e?Array.isArray(e)?o.createElement.apply(i,["div",{className:t}].concat(e)):(0,o.createElement)("div",{className:t},e):null}function ee(e,n,t,r){var a=ie(e),i=oe(t,a.props);if("render"===a.type)return a.render(i,n);var u=n;"as"===a.type&&a.as&&(n===J?i.as=a.as:u=a.as);var c=i.children;a.wrapChildren&&(c=a.wrapChildren(function(e){return Array.isArray(e)?1===e.length?e[0]:o.createElement.apply(o,[o.Fragment,{}].concat(e)):e}(c))),r&&(c=Y(c,!0));var l=V(u,i,c);return a.wrap&&(l=a.wrap(l)),l}var ne=new Map;function te(e,n){null==n&&(n={});var t=n["data-plasmic-name"],r=n["data-plasmic-root"],a=n["data-plasmic-for-node"];delete n["data-plasmic-name"],delete n["data-plasmic-root"],delete n["data-plasmic-for-node"];for(var o=arguments.length,i=new Array(o>2?o-2:0),u=2;u<o;u++)i[u-2]=arguments[u];var c=re.apply(void 0,[e,n].concat(i));if(t&&ne.set(t,c),r){var l,d=a?null!=(l=ne.get(a))?l:null:c;return ne.clear(),d}return c}function re(e,n){var t,r=n["data-plasmic-override"],a=n["data-plasmic-wrap-flex-child"],o=null!=(t=n["data-plasmic-trigger-props"])?t:[];delete n["data-plasmic-override"],delete n["data-plasmic-wrap-flex-child"],delete n["data-plasmic-trigger-props"];for(var i=arguments.length,u=new Array(i>2?i-2:0),c=2;c<i;c++)u[c-2]=arguments[c];return ee(r,e,G.apply(void 0,[n,0===u.length?{}:{children:1===u.length?u[0]:u}].concat(o)),a)}var ae=Symbol("UNSET");function oe(e,n){if(!n)return e;for(var t=N({},e),r=0,a=Object.keys(n);r<a.length;r++){var o=a[r],i=e[o],u=n[o];u===ae?delete t[o]:(null!=u||"className"===o||"style"===o||o.startsWith("on")&&"function"===typeof i||(u=F),t[o]=X(o,i,u))}return t}function ie(e){if(!e)return{type:"default",props:{}};if(function(e){return"string"===typeof e||"number"===typeof e||o.isValidElement(e)}(e))return{type:"default",props:{children:e}};if("object"===typeof e)return"as"in e?N({},e,{props:e.props||{},type:"as"}):"render"in e?N({},e,{type:"render"}):"props"in e?N({},e,{props:e.props||{},type:"default"}):(n=Object.keys(e),t=["wrap","wrapChildren"],n.every((function(e){return t.includes(e)}))?N({},e,{props:{},type:"default"}):{type:"default",props:e});if("function"===typeof e)return{type:"render",render:e};var n,t;throw new Error("Unexpected override: "+e)}function ue(e,n){for(var t={},r=0,a=Array.from(new Set([].concat(Object.keys(e),Object.keys(n))));r<a.length;r++){var o=a[r];t[o]=ce(e[o],n[o])}return t}function ce(e,n){var t,r;if(!e)return n;if(!n)return e;var a=ie(e),o=ie(n),i=K.apply(void 0,[a.wrap,o.wrap].filter(R)),u=K.apply(void 0,[a.wrapChildren,o.wrapChildren].filter(R)),c=oe(null!=(t=a.props)?t:{},o.props);if("render"===o.type)return{render:o.render,props:c,wrap:i,wrapChildren:u};if("render"===a.type)return{render:a.render,props:c,wrap:i,wrapChildren:u};var l=null!=(r="as"===o.type?o.as:void 0)?r:"as"===a.type?a.as:void 0;return N({props:c,wrap:i,wrapChildren:u},l?{as:l}:{})}function le(e,n){var t,r,a,o,i,u,c,l,d=n.name,f=n.descendantNames,p=n.internalVariantPropNames,s=n.internalArgPropNames,v=["variants","args","overrides"],y=(o=I.apply(void 0,[T.apply(void 0,[e].concat(p))].concat(v)),i=null!=(t=e.variants)?t:{},N({},o,i)),m=(u=I.apply(void 0,[T.apply(void 0,[e].concat(s))].concat(v)),c=null!=(r=e.args)?r:{},N({},u,c)),h=ue(I.apply(void 0,[T.apply(void 0,[e].concat(f))].concat(s,p,v)),null!=(a=e.overrides)?a:{}),w=I.apply(void 0,[e,"variants","args","overrides"].concat(f,p,s));Object.keys(w).length>0&&(h=ue(h,((l={})[d]={props:w},l)));return{variants:y,args:m,overrides:h}}var de={};function fe(e){return Object.entries(e).filter((function(e){var n=e[1];return"PLEASE_RENDER_INSIDE_PROVIDER"===n})).forEach((function(n){var t=n[0];e[t]=void 0,de[t]})),e}function pe(e){if("nextjs"===e.platform&&e.href){var n=["href","replace","scroll","shallow","passHref","prefetch","locale"];return o.createElement(e.component,T.apply(void 0,[e].concat(n)),o.createElement("a",Object.assign({},I.apply(void 0,[e,"component","platform"].concat(n)))))}return"gatsby"===e.platform&&(t=e.href,/^\/(?!\/)/.test(t))?o.createElement(e.component,N({},I(e,"component","platform","href"),{to:e.href})):o.createElement("a",Object.assign({},I(e,"component","platform")));var t}function se(e){var n=e.as,t=e.defaultContents,r=e.value,a=P(e,["as","defaultContents","value"]),i=void 0===r?t:r;if(!i||Array.isArray(i)&&0===i.length)return null;var u=ve(i);return u&&(i=(0,o.createElement)("div",{className:"__wab_slot-string-wrapper"},u)),0===Object.keys(a).filter((function(e){return!!a[e]})).length?(0,o.createElement)(o.Fragment,null,i):(0,o.createElement)(n||"div",G({className:"__wab_slot"},a),i)}function ve(e){return(0,o.isValidElement)(e)&&e.type===o.Fragment?ve(e.props.children):"string"===typeof e?e:Array.isArray(e)&&1===e.length&&"string"===typeof e[0]?e[0]:void 0}var ye=[],me={};function he(){return z?Object.entries(me).filter((function(e){var n=e[1];return window.matchMedia(n).matches})).map((function(e){return e[0]})):[]}var we=void 0;function be(e,n){return Object.assign(me,n),we=void 0,function(){var n=(0,o.useState)()[1],t=(0,o.useRef)(we||[]);return U((function(){var e=function(){we&&t.current.join("")!==we.join("")&&(t.current=we,n({}))};return ye.push(e),void 0===we&&(we=he()),e(),function(){ye.splice(ye.indexOf(e),1)}}),[]),e?we||[]:we?we[we.length-1]:void 0}}z&&window.addEventListener("resize",(function(){var e=he();we&&e.join("")===we.join("")||(we=e,u.unstable_batchedUpdates((function(){return ye.forEach((function(e){return e()}))})))}));var ge=(0,o.createContext)(void 0);function Ee(e){var n=e.platform,t=e.children,r=(0,o.useMemo)((function(){return{platform:n}}),[n]);return(0,o.createElement)(ge.Provider,{value:r},(0,o.createElement)(d,null,t))}var Oe=a()},4184:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var i=a.apply(null,t);i&&e.push(i)}}else if("object"===o)if(t.toString===Object.prototype.toString)for(var u in t)r.call(t,u)&&t[u]&&e.push(u);else e.push(t.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()},7672:function(e,n,t){"use strict";t.r(n);var r=t(6265),a=t(5893),o=(t(2702),t(9328));function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.default=function(e){var n=e.Component,t=e.pageProps;return(0,a.jsx)(o.UF,{children:(0,a.jsx)(n,u({},t))})}},1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(7672)}])},2702:function(){},6265:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,{Z:function(){return r}})}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(4651)}));var t=e.O();_N_E=t}]);