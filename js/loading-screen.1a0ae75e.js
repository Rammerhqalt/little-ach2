!function(e){function t(t){for(var o,a,u=t[0],s=t[1],c=t[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(d&&d(t);f.length;)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={"loading-screen":0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window.webpackJsonp=window.webpackJsonp||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=s;i.push(["e69b","chunk-vendors"]),n()}({"06c5":function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"f",(function(){return s}));const o=27,r=32,i=13,a=8,u=65,s=90},"152b":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return u}));var o=n("06c5");const r=["EMAIL","TEXT","PASSWORD","FILE"],i=e=>{if(e.keyCode!==o.b)return;const t=e.srcElement||e.target;if(!t||!t.tagName)return;const n=t.tagName.toUpperCase(),i=(t.type||"").toUpperCase();let a=!0;("INPUT"===n&&r.includes(i)||"TEXTAREA"===n)&&(a=t.readOnly||t.disabled),a&&e.preventDefault()},a=e=>{const t=document.createEvent("Event");t.initEvent(e,!0,!0),document.dispatchEvent(t)},u=(e=document.body,t=!0)=>((e=document.body,t,n=!0)=>{const o=document.createEvent("MouseEvents");o.initMouseEvent(t,!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,0,null),o.simulated=n,e.dispatchEvent(o)})(e,"mouseup",t)},"2ae7":function(e,t,n){"use strict";function o(){const e=document.createElement("fakeelement"),t={animation:"a",WebkitAnimation:"webkitA"};return t[Object.keys(t).find((t=>void 0!==e.style[t]))||"animation"]}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));const r="transitionend",i=`${o()}nimationend`;o()},"571d":function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u}));const o=window.PointerEvent?["pointerdown"]:["mousedown","touchstart"],r=(window.PointerEvent,window.PointerEvent?["pointerup"]:["mouseup","touchend"]),i="GAME_READY",a="PLAY",u="PLAY_NOT_READY"},"6e95":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("2b0e");new o.a;const r=o.a},7897:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));const o=e=>{if(!e)return null;try{const t=localStorage.getItem(e);if(!t)return null;return JSON.parse(t)}catch(e){return null}},r=(e,t)=>{if(e)try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(e)}}},8233:function(e,t,n){"use strict";n("8f17")},"8f17":function(e,t,n){},d257:function(e,t,n){"use strict";n("e6cf");var o=n("2ae7");const r=(e,t="animationend")=>new Promise((n=>{const o=()=>{e.removeEventListener(t,o),n()};e.addEventListener(t,o)})),i=e=>{const{className:t}=e;e.className="",e.offsetWidth,e.className=t},a=(e,t)=>(e.addEventListener(o.a,t,!1),()=>e.removeEventListener(o.a,t)),u=(e,t)=>a(e,(({animationName:e})=>t(e))),s=(e,t)=>(e.addEventListener(o.b,t,!1),()=>e.removeEventListener(o.b,t)),c=e=>new Promise((t=>window.setTimeout(t,e))),d=e=>window.setTimeout(e,0),l=window.requestAnimationFrame?()=>new Promise((e=>requestAnimationFrame((()=>e())))):()=>c(0);n("e25e");const f=["Webkit","Moz","ms","Ms","O"],m=document.documentElement.style,p=window.getComputedStyle?e=>getComputedStyle(e,null):e=>e.currentStyle,y=e=>{if("string"==typeof m[e])return e;const t=`${e.charAt(0).toUpperCase()}${e.slice(1)}`;let n;for(let e=0,o=f.length;e<o;e++)if(n=f[e]+t,"string"==typeof m[n])return n;return e},h=e=>{const t=getComputedStyle(e);return e.offsetHeight+parseInt(t.marginTop||"0",10)+parseInt(t.marginBottom||"0",10)};n("2532");var w=n("0347");const g=Object(w.a)().any,v=navigator.userAgent,b=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,E=()=>/Edge/.test(navigator.userAgent),k=()=>(v.includes("Chrome")||v.includes("Chromium"))&&!E(),P=()=>v.includes("Safari")&&!k()&&!E(),O=()=>b()&&k(),C=(e,t)=>{let n=t.parentNode;for(;null!==n;){if(n===e)return!0;n=n.parentNode}return!1},A=e=>{e.parentNode&&e.parentNode.appendChild(e)},S=e=>new Promise(((t,n)=>{const o=new XMLHttpRequest;o.open("get",e,!0),o.responseType="json",o.onload=()=>{200===o.status?t(o.response):n(o.status)},o.send()}));n("e260"),n("ddb0");const M=(e,...t)=>{},j=(e,t,n)=>{},_=(e,t)=>{e.scrollTop=t},T=(e,t,n=250)=>{if(0===n||(e=>"getComputedStyle"in window&&"smooth"===window.getComputedStyle(e)["scroll-behavior"])(e))return void _(e,t);const o=(e=>e.scrollY||e.scrollTop)(e),r=Math.max(0,t)-o,i=(new Date).getTime(),a=n||Math.min(Math.abs(r),n);!function t(){setTimeout((()=>{const n=Math.min(1,((new Date).getTime()-i)/a),u=n<.5?2*n*n:n*(4-2*n)-1,s=Math.max(0,Math.floor(o+r*u));_(e,s),n<1&&t()}),9)}()},N=e=>`${e.charAt(0).toUpperCase()}${e.slice(1)}`,L=3600,R=24*L,$=e=>{const{days:t,hours:n,minutes:o}=(e=>{const t=Date.now(),n=Math.round((t-e)/1e3),o=Math.floor(n/R),r=Math.floor((n-o*R)/L);return{days:o,hours:r,minutes:Math.floor((n-o*R-r*L)/60)}})(e);return 0===t&&0===n&&o<2?"just now":0===t&&0===n?`${o} minutes ago`:0===t&&1===n?`${n} hour ${o} minutes ago`:0===t&&n<3?`${n} hours ${o} minutes ago`:0===t?`${n} hours ago`:1===t?`${t} day ago`:`${t} days ago`},x=(e,t)=>{const n=new XMLHttpRequest;return n.open("POST",e,!0),n.setRequestHeader("Content-type","application/json"),n.send(JSON.stringify(t)),new Promise(((e,t)=>{n.onload=()=>e(n.response),n.onerror=t}))},q=e=>{const t=new XMLHttpRequest;return t.open("GET",e,!0),t.send(),new Promise(((e,n)=>{t.onload=()=>e(t.response),t.onerror=n}))};n.d(t,"t",(function(){return r})),n.d(t,"y",(function(){return i})),n.d(t,"s",(function(){return a})),n.d(t,"u",(function(){return u})),n.d(t,"v",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"r",(function(){return l})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return y})),n.d(t,"e",(function(){return h})),n.d(t,"o",(function(){return g})),n.d(t,"n",(function(){return b})),n.d(t,"l",(function(){return E})),n.d(t,"j",(function(){return k})),n.d(t,"p",(function(){return P})),n.d(t,"k",(function(){return O})),n.d(t,"m",(function(){return C})),n.d(t,"x",(function(){return A})),n.d(t,"d",(function(){return S})),n.d(t,"q",(function(){return M})),n.d(t,"A",(function(){return j})),n.d(t,"z",(function(){return T})),n.d(t,"a",(function(){return N})),n.d(t,"i",(function(){return $})),n.d(t,"w",(function(){return x})),n.d(t,"f",(function(){return q}))},e69b:function(e,t,n){"use strict";n.r(t),n("37e1");var o=n("2b0e"),r=(n("e6cf"),n("6e95")),i=n("571d"),a=n("152b");var u=n("d257"),s=n("7897");var c=r.a.extend({name:"loading-screen",data:()=>({visible:!0,clicked:!1,ready:!1}),computed:{classes(){return{"js-ready":this.ready}}},mounted(){this.$refs.logo.src="/static/img/logo.svg",this.onGameReady=this.onGameReady.bind(this),document.addEventListener(i.a,this.onGameReady,!1);const e=document.querySelector("#loading-screen .btn");e&&(e.removeEventListener("mousedown",window.playClickNotReady,!1),e.removeEventListener("touchstart",window.playClickNotReady,!1),window.playClickNotReady=null)},methods:{onClick(){this.clicked=!0,this.checkPlay()},async onGameReady(){document.removeEventListener(i.a,this.onGameReady,!1);const e=this.getAutohideVariant();"hide"===e?(await Object(u.c)(30),this.play()):"hideAfterDelay"===e?(await Object(u.c)(1100),this.play()):(this.ready=!0,this.checkPlay())},checkPlay(){this.ready&&this.clicked?this.play():this.ready||Object(a.a)(i.c)},play(){Object(a.a)(i.b),this.visible=!1,this.$nextTick((()=>this.$destroy()))},getAutohideVariant(){const e="experiment-auto-hide";let t=Object(s.a)(e);return null!==t||(t=((e,t)=>{if(!window.google_optimize)return"original";const n=window.google_optimize.get(e);return 0!==n&&t[n]?t[n]:"original"})("O_ZkAo4qS_yyPKq34rk6FA",{1:"hide",2:"hideAfterDelay"}),Object(s.b)(e,t)),t}}}),d=(n("8233"),n("2877")),l=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visible?n("main",{staticClass:"loading-screen",attrs:{id:"loading-screen"},on:{click:function(t){return t.stopPropagation(),e.onClick(t)}}},[n("div",{staticClass:"loading-screen-container"},[n("div",{staticClass:"btn",class:e.classes,on:{click:function(t){return t.stopPropagation(),e.onClick(t)}}},[n("span",{staticClass:"label"},[e._v("play")]),e._m(0)]),n("img",{ref:"logo",attrs:{alt:"logo"}})])]):e._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loading-screen-button-animation"},[t("div"),t("div"),t("div"),t("div")])}],!1,null,null,null).exports;o.a.config.productionTip=!1,o.a.config.devtools=!1,o.a.config.silent=!0,window.playClickNotReady=()=>{if(!window.ga)return;const e=window.performance&&window.performance.now?window.performance.now():(new Date).getTime();window.ga("send","event","metrics","not_ready_play_click","timing",e,{nonInteraction:!0})};const f=document.querySelector("#loading-screen .btn");f&&(f.addEventListener("mousedown",window.playClickNotReady,!1),f.addEventListener("touchstart",window.playClickNotReady,!1));(new(o.a.extend(l))).$mount("#loading-screen",!0)}});