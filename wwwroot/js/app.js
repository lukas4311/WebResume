!function(e){var t={};function r(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=React},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(0)),a=n(r(2)),c=l(r(3));class s extends o.Component{constructor(e){super(e)}render(){return o.createElement("div",{className:"flex h-full"},o.createElement("div",{className:"w-1/2 h-full"},o.createElement("div",{className:"flex h-full"},o.createElement("div",{className:"w-1/6 my-20 bg-mainGray"},o.createElement(c.default,null)),o.createElement("div",{className:"w-5/6 border-8 border-mainGray text-white text-center",id:"photoDiv"},o.createElement("h1",{className:"text-5xl mt-24"},"Lukáš SALFICKÝ"),o.createElement("h2",{className:"mt-6"},".NET developer")))),o.createElement("div",{className:"w-1/2 my-20 bg-mainGray"},o.createElement("h1",{className:"text-center text-white text-5xl"},"OBSAH")))}}a.render(o.createElement(s,null),document.getElementById("app"))},function(e,t){e.exports=ReactDOM},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const l=n(r(0));class o extends l.Component{constructor(e){super(e),this.initIcons()}initIcons(){this.icons=[{Url:"./icons/person.svg"},{Url:"./icons/smartphone.svg"},{Url:"./icons/download.svg"}]}render(){return l.createElement("div",null,this.icons.map((e,t)=>l.createElement("img",{className:"mx-auto",src:e.Url,alt:"personIcon"})))}}t.default=o}]);
//# sourceMappingURL=app.js.map