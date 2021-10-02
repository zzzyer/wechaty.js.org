(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[9385],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,y=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},82338:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return f},UUIDv4:function(){return d},default:function(){return v}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(74855),c=n(55877),l=["components"],u={title:"Wechaty Puppet Service Token",sidebar_label:"Token"},p=void 0,s={unversionedId:"specs/token",id:"specs/token",isDocsHomePage:!1,title:"Wechaty Puppet Service Token",description:"Wechaty Puppet Service Token (TOKEN), is ... (tbw)",source:"@site/docs/specs/token.md",sourceDirName:"specs",slug:"/specs/token",permalink:"/docs/specs/token",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specs/token.md",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1631075311,formattedLastUpdatedAt:"9/8/2021",frontMatter:{title:"Wechaty Puppet Service Token",sidebar_label:"Token"},sidebar:"docs",previous:{title:"Service",permalink:"/docs/specs/service"},next:{title:"Gateway",permalink:"/docs/specs/"}},f=[{value:"Format / Convensions",id:"format--convensions",children:[]},{value:"Service Discovery",id:"service-discovery",children:[]},{value:"Tools",id:"tools",children:[{value:"Online UUID Generator",id:"online-uuid-generator",children:[]},{value:"Wechaty Puppet Service Token Validator",id:"wechaty-puppet-service-token-validator",children:[]}]},{value:"How to get a token",id:"how-to-get-a-token",children:[]},{value:"Blogs",id:"blogs",children:[]}],d=function(){var e={token:(0,c.v4)()};return(0,a.kt)("div",null,(0,a.kt)(i.CopyToClipboard,{text:e.token,onCopy:function(){alert("Has copied "+e.token+" to your clipboard."),e.token=(0,c.v4)()},mdxType:"CopyToClipboard"},(0,a.kt)("button",null,"Copy ",e.token," to clipboard")))},y={toc:f,UUIDv4:d};function v(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wechaty Puppet Service Token (TOKEN), is ... (tbw)"),(0,a.kt)("h2",{id:"format--convensions"},"Format / Convensions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"puppet_wxwork_id")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"UUIDv4"))),(0,a.kt)("h2",{id:"service-discovery"},"Service Discovery"),(0,a.kt)("p",null,"In-service / Out-service check:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://api.chatie.io/v0/hosties/${TOKEN}\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"HTTP/200"),": In-service"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"HTTP/404"),": Out-service")),(0,a.kt)("h2",{id:"tools"},"Tools"),(0,a.kt)("p",null,"Here's some useful tools to deal with your token."),(0,a.kt)("h3",{id:"online-uuid-generator"},"Online UUID Generator"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy from below:",(0,a.kt)(d,{mdxType:"UUIDv4"})),(0,a.kt)("li",{parentName:"ol"},"Visit UUID Generator:\n",(0,a.kt)("a",{parentName:"li",href:"https://www.uuidgenerator.net/version4"},"https://www.uuidgenerator.net/version4"))),(0,a.kt)("h3",{id:"wechaty-puppet-service-token-validator"},"Wechaty Puppet Service Token Validator"),(0,a.kt)("h2",{id:"how-to-get-a-token"},"How to get a token"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TOKEN")," is the authorization string for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/puppet-services/overview"},"Wechaty Puppet Service"),"."),(0,a.kt)("p",null,"You can find how to get a ",(0,a.kt)("inlineCode",{parentName:"p"},"TOKEN")," for using the Wechaty Puppet Servcie from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/puppet-services/overview"},"docs link"),"."),(0,a.kt)("h2",{id:"blogs"},"Blogs"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021"))))}v.isMDXComponent=!0},20640:function(e,t,n){"use strict";var r=n(25108),o=n(11742),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,c,l,u,p,s=!1;t||(t={}),n=t.debug||!1;try{if(c=o(),l=document.createRange(),u=document.getSelection(),(p=document.createElement("span")).textContent=e,p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),void 0===o.clipboardData){n&&r.warn("unable to use e.clipboardData"),n&&r.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=a[t.format]||a.default;window.clipboardData.setData(i,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(p),l.selectNodeContents(p),u.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(f){n&&r.error("unable to copy using execCommand: ",f),n&&r.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(f){n&&r.error("unable to copy using clipboardData: ",f),n&&r.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{u&&("function"==typeof u.removeRange?u.removeRange(l):u.removeAllRanges()),p&&document.body.removeChild(p),c()}return s}},74300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n(67294)),o=a(n(20640));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?d(e):t}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n;u(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return v(d(n=s(this,(e=f(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,c=t.children,l=t.options,u=r.default.Children.only(c),p=(0,o.default)(a,l);i&&i(a,p),u&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(e)})),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}],a&&p(n.prototype,a),i&&p(n,i),t}(r.default.PureComponent);t.CopyToClipboard=m,v(m,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(e,t,n){"use strict";var r=n(74300).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},55877:function(e,t,n){var r=n(23570),o=n(71171),a=o;a.v1=r,a.v4=o,e.exports=a},45327:function(e){for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},85217:function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},23570:function(e,t,n){var r,o,a=n(85217),i=n(45327),c=0,l=0;e.exports=function(e,t,n){var u=t&&n||0,p=t||[],s=(e=e||{}).node||r,f=void 0!==e.clockseq?e.clockseq:o;if(null==s||null==f){var d=a();null==s&&(s=r=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==f&&(f=o=16383&(d[6]<<8|d[7]))}var y=void 0!==e.msecs?e.msecs:(new Date).getTime(),v=void 0!==e.nsecs?e.nsecs:l+1,m=y-c+(v-l)/1e4;if(m<0&&void 0===e.clockseq&&(f=f+1&16383),(m<0||y>c)&&void 0===e.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=y,l=v,o=f;var b=(1e4*(268435455&(y+=122192928e5))+v)%4294967296;p[u++]=b>>>24&255,p[u++]=b>>>16&255,p[u++]=b>>>8&255,p[u++]=255&b;var h=y/4294967296*1e4&268435455;p[u++]=h>>>8&255,p[u++]=255&h,p[u++]=h>>>24&15|16,p[u++]=h>>>16&255,p[u++]=f>>>8|128,p[u++]=255&f;for(var g=0;g<6;++g)p[u+g]=s[g];return t||i(p)}},71171:function(e,t,n){var r=n(85217),o=n(45327);e.exports=function(e,t,n){var a=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var c=0;c<16;++c)t[a+c]=i[c];return t||o(i)}}}]);