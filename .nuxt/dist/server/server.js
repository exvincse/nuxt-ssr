module.exports=function(t){var e={},n={1:0};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.e=function(e){if(0!==n[e]){var r=require("./"+{0:"bda4fde986cc980be296",2:"d95fdefb6982a2c706da",3:"b19b6d9796b8e39e0bf3",4:"5a100b7e2e3f84662fba"}[e]+".js"),o=r.modules,c=r.ids;for(var l in o)t[l]=o[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},r.p="/<repository-name>/_nuxt/",r.oe=function(t){process.nextTick((function(){throw t}))},r(r.s=19)}([function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";function r(t,e,n,r,o,c,l,d){var f,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),r&&(h.functional=!0),c&&(h._scopeId="data-v-"+c),l?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(l)},h._ssrRegister=f):o&&(f=d?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(h.functional){h._injectStyles=f;var x=h.render;h.render=function(t,e){return f.call(e),x(t,e)}}else{var m=h.beforeCreate;h.beforeCreate=m?[].concat(m,f):[f]}return{exports:t,options:h}}n.d(e,"a",(function(){return r}))},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var r=(c=n,l=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(data," */")),o=n.sources.map((function(source){return"/*# sourceURL=".concat(n.sourceRoot).concat(source," */")}));return[content].concat(o).concat([r]).join("\n")}var c,l,data;return[content].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(content,"}"):content})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var c=0;c<t.length;c++){var l=t[c];null!=l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="(".concat(l[2],") and (").concat(n,")")),e.push(l))}},e}},function(t,e,n){"use strict";function r(t,e,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return o(r._styles)}}),r._renderStyles=o);var c=r._styles||(r._styles={});e=function(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],c=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}(t,e),n?function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r],c=o.media||"default",style=t[c];style?style.ids.indexOf(o.id)<0&&(style.ids.push(o.id),style.css+="\n"+o.css):t[c]={ids:[o.id],css:o.css,media:o.media}}}(c,e):function(t,e){for(var i=0;i<e.length;i++)for(var n=e[i].parts,r=0;r<n.length;r++){var o=n[r];t[o.id]={ids:[o.id],css:o.css,media:o.media}}}(c,e)}}function o(t){var e="";for(var n in t){var style=t[n];e+='<style data-vue-ssr-id="'+style.ids.join(" ")+'"'+(style.media?' media="'+style.media+'"':"")+">"+style.css+"</style>"}return e}n.r(e),n.d(e,"default",(function(){return r}))},function(t,e,n){var content=n(21);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("22581669",content,!0,t)}},function(t,e,n){var content=n(23);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("eddb9fea",content,!0,t)}},function(t,e,n){var content=n(25);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("72daabed",content,!0,t)}},function(t,e,n){var content=n(27);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("3191d5ad",content,!0,t)}},function(t,e,n){var content=n(31);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("1922bf88",content,!0,t)}},function(t,e,n){var content=n(33);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("04067cc8",content,!0,t)}},function(t,e,n){var content=n(35);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("146d4da4",content,!0,t)}},function(t,e,n){var content=n(37);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);var r=n(3).default;t.exports.__inject__=function(t){r("5ebcc24e",content,!0,t)}},function(t,e){t.exports=require("vue-no-ssr")},function(t,e){t.exports=require("vuex")},function(t,e){t.exports=require("vue-client-only")},function(t,e){t.exports=require("vue-router")},function(t,e){t.exports=require("querystring")},function(t,e){t.exports=require("node-fetch")},function(t,e){t.exports=require("vue-meta")},function(t,e,n){t.exports=n(40)},function(t,e,n){"use strict";n.r(e);var r=n(4),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}",""])},function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".container{margin:0 auto;min-height:100vh;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])},function(t,e,n){"use strict";n.r(e);var r=n(6),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},function(t,e,n){"use strict";n.r(e);var r=n(7),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:red;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}",""])},function(t,e,n){var content=n(29);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),n(3).default("5e033aac",content,!0)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".page-enter-active,.page-leave-active{-webkit-transition:opacity .5s;transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}",""])},function(t,e,n){"use strict";n.r(e);var r=n(8),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}.blue{background:#00f}",""])},function(t,e,n){"use strict";n.r(e);var r=n(9),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".nuxt-link-exact-active[data-v-509e45db],.router-link-exact-active[data-v-509e45db]{color:#fff;background-color:#3b8070}",""])},function(t,e,n){"use strict";n.r(e);var r=n(10),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""])},function(t,e,n){"use strict";n.r(e);var r=n(11),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}.red{background:red}",""])},function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));const r=()=>({message:"Hello World"}),o={},c={SET_MESSAGE(t,e){t.message=e}},l={nuxtServerInit({commit:t}){t("SET_MESSAGE","SERVER INIT"),t("USER/SET_FIRST_NAME","Alex"),t("USER/SET_LAST_NAME","Chen")}}},function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return r})),n.d(e,"getters",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));const r=()=>({firstName:"",lastName:""}),o={fullName:t=>t.firstName&&t.lastName?t.firstName+" "+t.lastName:""},c={SET_FIRST_NAME(t,e){t.firstName=e},SET_LAST_NAME(t,e){t.lastName=e}},l={}},function(t,e,n){"use strict";n.r(e);var r=n(16),o=n(0),c=n.n(o),l=n(17),d=n.n(l);var f={};function h(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function x(t,e=!1,n="components"){return Array.prototype.concat.apply([],t.matched.map((t,r)=>Object.keys(t[n]).map(o=>(e&&e.push(r),t[n][o]))))}function m(t,e){return Promise.all(function(t,e){return Array.prototype.concat.apply([],t.matched.map((t,n)=>Object.keys(t.components).reduce((r,o)=>(t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r),[])))}(t,async(t,n,r,o)=>("function"!=typeof t||t.options||(t=await t()),r.components[o]=t=h(t),"function"==typeof e?e(t,n,r,o):t)))}async function v(t){if(t)return await m(t),{...t,meta:x(t).map((e,n)=>({...e.options.meta,...(t.matched[n]||{}).meta}))}}async function _(t,e){t.context||(t.context={isStatic:!0,isDev:!1,isHMR:!1,app:t,store:t.store,payload:e.payload,error:e.error,base:"/<repository-name>/",env:{}},e.req&&(t.context.req=e.req),e.res&&(t.context.res=e.res),e.ssrContext&&(t.context.ssrContext=e.ssrContext),t.context.redirect=(e,path,n)=>{if(!e)return;t.context._redirected=!0;let r=typeof path;"number"==typeof e||"undefined"!==r&&"object"!==r||(n=path||{},r=typeof(path=e),e=302),"object"===r&&(path=t.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?t.context.next({path:path,query:n,status:e}):(path=function(t,e){let n;const r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));let o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&([path,o]=c);l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(e=>{const n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(t=>[e,"=",t].join("")).join("&"):e+"="+n}).filter(Boolean).join("&")}(e));return l+=o?"#"+o:""}(path,n),t.context.next({path:path,status:e}))},t.context.beforeNuxtRender=t=>e.beforeRenderFns.push(t));const[n,r]=await Promise.all([v(e.route),v(e.from)]);e.route&&(t.context.route=n),e.from&&(t.context.from=r),t.context.next=e.next,t.context._redirected=!1,t.context._errored=!1,t.context.isHMR=!1,t.context.params=t.context.route.params||{},t.context.query=t.context.route.query||{}}function y(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():w(t[0],e).then(()=>y(t.slice(1),e))}function w(t,e){let n;return(n=2===t.length?new Promise(n=>{t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))}):t(e))&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function k(t,e){return function(t){const e=new Array(t.length);for(let i=0;i<t.length;i++)"object"==typeof t[i]&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){let path="";const data=n||{},o=(r||{}).pretty?C:encodeURIComponent;for(let i=0;i<t.length;i++){const n=t[i];if("string"==typeof n){path+=n;continue}const r=data[n.name||"pathMatch"];let c;if(null==r){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(r)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(r)+"`");if(0===r.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let t=0;t<r.length;t++){if(c=o(r[t]),!e[i].test(c))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(c)+"`");path+=(0===t?n.prefix:n.delimiter)+c}}else{if(c=n.asterisk?C(r,!0):o(r),!e[i].test(c))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+c+'"');path+=n.prefix+c}}return path}}(function(t,e){const n=[];let r=0,o=0,path="";const c=e&&e.delimiter||"/";let l;for(;null!=(l=j.exec(t));){const e=l[0],d=l[1],f=l.index;if(path+=t.slice(o,f),o=f+e.length,d){path+=d[1];continue}const h=t[o],x=l[2],m=l[3],v=l[4],_=l[5],y=l[6],w=l[7];path&&(n.push(path),path="");const k=null!=x&&null!=h&&h!==x,j="+"===y||"*"===y,C="?"===y||"*"===y,E=l[2]||c,pattern=v||_;n.push({name:m||r++,prefix:x||"",delimiter:E,optional:C,repeat:j,partial:k,asterisk:Boolean(w),pattern:pattern?S(pattern):w?".*":"[^"+$(E)+"]+?"})}o<t.length&&(path+=t.substr(o));path&&n.push(path);return n}(t,e))}const j=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function C(t,e){const n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,t=>"%"+t.charCodeAt(0).toString(16).toUpperCase())}function $(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function S(t){return t.replace(/([=!:$/()])/g,"\\$1")}var E=n(18),N=n.n(E),T=n(14),O=n.n(T),R=n(12),M=n.n(R),A=n(15),P=n.n(A),z=n(1);var L={components:{Logo:Object(z.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[this._ssrNode('<g fill="none" fill-rule="evenodd"><path d="M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z" fill="#00C58E"></path> <path d="M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z" fill="#108775"></path> <path d="M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z" fill="#2F495E" fill-rule="nonzero"></path></g>')])}),[],!1,(function(t){var e=n(20);e.__inject__&&e.__inject__(t)}),null,"3e04134e").exports}};var U=Object(z.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[this._ssrNode("<div>","</div>",[e("logo"),this._ssrNode(' <h1 class="title">\n      nuxt-ssr-example\n    </h1> <h2 class="subtitle">\n      My sweet Nuxt.js project\n    </h2> '),e("client-only",[e("div",{staticClass:"links"},[e("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[this._v("\n          Documentation\n        ")]),this._v(" "),e("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[this._v("\n          GitHub\n        ")])])])],2)])}),[],!1,(function(t){var e=n(22);e.__inject__&&e.__inject__(t)}),null,"c4154d92").exports;c.a.use(P.a);const I=[{path:"/",name:"home",component:U},{path:"/about",name:"about",component:()=>n.e(0).then(n.bind(null,41)).then(t=>t.default)},{path:"/users",children:[{path:"",name:"users",component:()=>n.e(3).then(n.bind(null,42)).then(t=>t.default)},{path:":uid",component:()=>n.e(4).then(n.bind(null,43)).then(t=>t.default)}],component:()=>n.e(2).then(n.bind(null,44)).then(t=>t.default)},{path:"*",redirect:"/"}];function F(t){return new P.a({mode:"history",routes:I,scrollBehavior:(t,e,n)=>n||(t.hash?{selector:t.hash}:{x:0,y:0})})}var D={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(t,{parent:e,data:data,props:n}){data.nuxtChild=!0;const r=e,o=e.$nuxt.nuxt.transitions,c=e.$nuxt.nuxt.defaultTransition;let l=0;for(;e;)e.$vnode&&e.$vnode.data.nuxtChild&&l++,e=e.$parent;data.nuxtChildDepth=l;const d=o[l]||c,f={};H.forEach(t=>{void 0!==d[t]&&(f[t]=d[t])});const h={};B.forEach(t=>{"function"==typeof d[t]&&(h[t]=d[t].bind(r))});const x=h.beforeEnter;if(h.beforeEnter=t=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),x)return x.call(r,t)},!1===d.css){const t=h.leave;(!t||t.length<2)&&(h.leave=(e,n)=>{t&&t.call(r,e),r.$nextTick(n)})}let m=t("routerView",data);return n.keepAlive&&(m=t("keep-alive",{props:n.keepAliveProps},[m])),t("transition",{props:f,on:h},[m])}};const H=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],B=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var V={name:"NuxtError",props:{error:{type:Object,default:null}},head(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode(){return this.error&&this.error.statusCode||500},message(){return this.error.message||"Error"}}};var K=Object(z.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[t._ssrNode('<div class="error">',"</div>",[t._ssrNode('<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" fill="#DBE1EC" viewBox="0 0 48 48"><path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"></path></svg> <div class="title">'+t._ssrEscape(t._s(t.message))+"</div> "),404===t.statusCode?t._ssrNode('<p class="description">',"</p>",[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._ssrNode(' <div class="logo"><a href="https://nuxtjs.org" target="_blank" rel="noopener">Nuxt.js</a></div>')],2)])}),[],!1,(function(t){var e=n(24);e.__inject__&&e.__inject__(t)}),null,"3633ddbb").exports,J={name:"Nuxt",components:{NuxtChild:D,NuxtError:K},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},errorCaptured(t){this.displayingNuxtError&&(this.errorFromNuxtError=t,this.$forceUpdate())},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||k(this.$route.matched[0].path)(this.$route.params);const[t]=this.$route.matched;if(!t)return this.$route.path;const e=t.components.default;if(e&&e.options){const{options:t}=e;if(t.key)return"function"==typeof t.key?t.key(this.$route):t.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(t){return this.nuxt.err?this.errorFromNuxtError?(this.$nextTick(()=>this.errorFromNuxtError=!1),t("div",{},[t("h2","An error occured while showing the error page"),t("p","Unfortunately an error occured and while showing the error page another error occured"),t("p",`Error details: ${this.errorFromNuxtError.toString()}`),t("nuxt-link",{props:{to:"/"}},"Go back to home")])):(this.displayingNuxtError=!0,this.$nextTick(()=>this.displayingNuxtError=!1),t(K,{props:{error:this.nuxt.err}})):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},W={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get(){return this.percent},increase(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(t){let e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}};var G=Object(z.a)(W,void 0,void 0,!1,(function(t){var e=n(26);e.__inject__&&e.__inject__(t)}),null,"21eb4fa2").exports;n(28);var X=Object(z.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"blue"},[e("nuxt")],1)}),[],!1,(function(t){var e=n(30);e.__inject__&&e.__inject__(t)}),null,"df4efcc0").exports,Q={};var Y={components:{NavHeader:Object(z.a)(Q,(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",[e("nuxt-link",{staticClass:"button--green",attrs:{to:"/"}},[this._v("Home")]),this._ssrNode(" "),e("nuxt-link",{staticClass:"button--green",attrs:{to:"/about"}},[this._v("About")]),this._ssrNode(" "),e("nuxt-link",{staticClass:"button--green",attrs:{to:"/users"}},[this._v("Users")]),this._ssrNode(" "),e("router-link",{staticClass:"button--green",attrs:{to:"/users/1"}},[this._v("User 1")])],2)}),[],!1,(function(t){var e=n(32);e.__inject__&&e.__inject__(t)}),"509e45db","bd051b06").exports}};const Z={_blue:X,_default:Object(z.a)(Y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("NavHeader"),this._ssrNode(" "),e("nuxt")],2)}),[],!1,(function(t){var e=n(34);e.__inject__&&e.__inject__(t)}),null,"72795deb").exports,_red:Object(z.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"red"},[e("nuxt")],1)}),[],!1,(function(t){var e=n(36);e.__inject__&&e.__inject__(t)}),null,"8ca19d8a").exports};var tt={head:{title:"Home",titleTemplate:"My Nuxt SSR | %s",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Hello World"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render(t,e){const n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(t){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error,this.context=this.$options.context},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},async refresh(){const t=function(t,e=!1){return x(t,e,"instances")}(this.$route);if(!t.length)return;this.$loading.start();const e=t.map(t=>{const p=[];return t.$options.fetch&&p.push(w(t.$options.fetch,this.context)),t.$options.asyncData&&p.push(w(t.$options.asyncData,this.context).then(e=>{for(const n in e)c.a.set(t.$data,n,e[n])})),Promise.all(p)});try{await Promise.all(e)}catch(t){this.$loading.fail(),function(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}(t),this.error(t)}this.$loading.finish()},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(t){return t&&Z["_"+t]||(t="default"),this.layoutName=t,this.layout=Z["_"+t],this.layout},loadLayout:t=>(t&&Z["_"+t]||(t="default"),Promise.resolve(Z["_"+t]))},components:{NuxtLoading:G}},et=n(13),nt=n.n(et);c.a.use(nt.a);const ot=["state","getters","actions","mutations"];let it={};(it=function(t,e){if((t=t.default||t).commit)throw new Error(`[nuxt] ${e} should export a method that returns a Vuex instance.`);return"function"!=typeof t&&(t=Object.assign({},t)),at(t,e)}(n(38),"store/index.js")).modules=it.modules||{},function(t,e){t=t.default||t;const n=e.replace(/\.(js|mjs)$/,"").split("/");let r=n[n.length-1];const o=`store/${e}`;if(t="state"===r?function(t,e){if("function"!=typeof t){console.warn(`${e} should export a method that returns an object`);const n=Object.assign({},t);return()=>n}return at(t,e)}(t,o):at(t,o),ot.includes(r)){const e=r;return void ut(ct(it,n,{isProperty:!0}),t,e)}"index"===r&&(n.pop(),r=n[n.length-1]);const c=ct(it,n);for(const e of ot)ut(c,t[e],e);!1===t.namespaced&&delete c.namespaced}(n(39),"USER.js");const st=it instanceof Function?it:()=>new nt.a.Store(Object.assign({strict:!1},it));function at(t,e){if(t.state&&"function"!=typeof t.state){console.warn(`'state' should be a method that returns an object in ${e}`);const n=Object.assign({},t.state);t=Object.assign({},t,{state:()=>n})}return t}function ct(t,e,{isProperty:n=!1}={}){if(!e.length||n&&1===e.length)return t;const r=e.shift();return t.modules[r]=t.modules[r]||{},t.modules[r].namespaced=!0,t.modules[r].modules=t.modules[r].modules||{},ct(t.modules[r],e,{isProperty:n})}function ut(t,e,n){e&&("state"===n?t.state=e||t.state:t[n]=Object.assign({},t[n],e))}const lt=function(t,e){for(let n in e){if(!(void 0!==t._modules.root._children[n])){const r=t.state[n];t.registerModule(n,e[n],{preserveState:r})}}},pt=function(t,e){for(let n of e){void 0!==t._modules.root._children[n]&&t.unregisterModule(n)}};var ft=(t,e)=>{e("registerModule",lt),e("unregisterModule",pt)};c.a.component(O.a.name,O.a),c.a.component(M.a.name,{...M.a,render:(t,e)=>M.a.render(t,e)}),c.a.component(D.name,D),c.a.component("NChild",D),c.a.component(J.name,J),c.a.use(N.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const ht={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function xt(t){const e=await F(),n=st(t);n.$router=e;const r=n.registerModule;n.registerModule=(path,t,e)=>r.call(n,path,t,Object.assign({preserveState:!1},e));const o={store:n,router:e,nuxt:{defaultTransition:ht,transitions:[ht],setTransitions(t){return Array.isArray(t)||(t=[t]),t=t.map(t=>t=t?"string"==typeof t?Object.assign({},ht,{name:t}):Object.assign({},ht,t):ht),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error(e){e=e||null,o.context._errored=Boolean(e),e=e?function(t){let e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e=`[${t.constructor.name}]`}return{...t,message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}(e):null;const n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=e,t&&(t.nuxt.error=e),e}},...tt};n.app=o;const l=t?t.next:t=>o.router.push(t);let d;if(t)d=e.resolve(t.url).route;else{const path=function(base,t){let path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(e.options.base);d=e.resolve(path).route}await _(o,{store:n,route:d,next:l,error:o.nuxt.error.bind(o),payload:t?t.payload:void 0,req:t?t.req:void 0,res:t?t.res:void 0,beforeRenderFns:t?t.beforeRenderFns:void 0,ssrContext:t});const f=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,n[t]=o[t];const r="__nuxt_"+t+"_installed__";c.a[r]||(c.a[r]=!0,c.a.use(()=>{c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get(){return this.$root.$options[t]}})}))};return"function"==typeof ft&&await ft(o.context,f),t&&t.url&&await new Promise((n,r)=>{e.push(t.url,n,()=>{const r=e.afterEach(async(e,c,l)=>{t.url=e.fullPath,o.context.route=await v(e),o.context.params=e.params||{},o.context.query=e.query||{},r(),n()})})}),{store:n,app:o,router:e}}var mt={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{prefetch:{type:Boolean,default:!0},noPrefetch:{type:Boolean,default:!1}}};c.a.component(mt.name,mt),c.a.component("NLink",mt),global.fetch||(global.fetch=d.a);const gt=()=>new c.a({render:t=>t("div")});const vt=t=>e=>{if(t.redirected=e,!t.res)return void(t.nuxt.serverRendered=!1);e.query=Object(r.stringify)(e.query),e.path=e.path+(e.query?"?"+e.query:"");e.path.startsWith("http")||e.path.startsWith("/<repository-name>/")||(e.path=function(){return Array.prototype.slice.call(arguments).join("/").replace(/\/+/g,"/")}("/<repository-name>/",e.path)),e.path!==t.url?(t.res.writeHead(e.status,{Location:e.path}),t.res.end()):t.redirected=!1};e.default=async t=>{t.redirected=!1,t.next=vt(t),t.beforeRenderFns=[],t.nuxt={layout:"default",data:[],error:null,state:null,serverRendered:!0};const{app:e,router:n,store:r}=await xt(t),o=new c.a(e);t.meta=o.$meta(),t.asyncData={};const l=async()=>{await Promise.all(t.beforeRenderFns.map(e=>w(e,{Components:v,nuxtState:t.nuxt}))),t.rendered=()=>{t.nuxt.state=r.state}},d=async()=>{const n="function"==typeof K.layout?K.layout(e.context):K.layout;return t.nuxt.layout=n||"default",await o.loadLayout(n),o.setLayout(n),await l(),o},m=()=>(e.context.error({statusCode:404,path:t.url,message:"This page could not be found"}),d()),v=x(n.match(t.url));if(r._actions&&r._actions.nuxtServerInit)try{await r.dispatch("nuxtServerInit",e.context)}catch(t){throw console.debug("Error occurred when calling nuxtServerInit: ",t.message),t}if(t.redirected)return gt();if(t.nuxt.error)return d();let _=[];if(_=_.map(t=>"function"==typeof t?t:("function"!=typeof f[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),f[t])),await y(_,e.context),t.redirected)return gt();if(t.nuxt.error)return d();let k=v.length?v[0].options.layout:K.layout;if("function"==typeof k&&(k=k(e.context)),await o.loadLayout(k),t.nuxt.error)return d();if(k=o.setLayout(k),t.nuxt.layout=o.layoutName,_=[],(k=h(k)).options.middleware&&(_=_.concat(k.options.middleware)),v.forEach(t=>{t.options.middleware&&(_=_.concat(t.options.middleware))}),_=_.map(t=>"function"==typeof t?t:("function"!=typeof f[t]&&e.context.error({statusCode:500,message:"Unknown middleware "+t}),f[t])),await y(_,e.context),t.redirected)return gt();if(t.nuxt.error)return d();let j=!0;try{for(const t of v)if("function"==typeof t.options.validate&&!(j=await t.options.validate(e.context)))break}catch(t){return e.context.error({statusCode:t.statusCode||"500",message:t.message}),d()}if(!j)return t._generate&&(t.nuxt.serverRendered=!1),m();if(!v.length)return m();const C=await Promise.all(v.map(n=>{const r=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const o=w(n.options.asyncData,e.context);o.then(e=>(t.asyncData[n.cid]=e,function(t,e){if(!e&&t.options.__hasNuxtData)return;const n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){const data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),{...data,...e}},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}(n),e)),r.push(o)}else r.push(null);return n.options.fetch?r.push(n.options.fetch(e.context)):r.push(null),Promise.all(r)}));return t.nuxt.data=C.map(t=>t[0]||{}),t.redirected?gt():t.nuxt.error?d():(await l(),o)}}]);