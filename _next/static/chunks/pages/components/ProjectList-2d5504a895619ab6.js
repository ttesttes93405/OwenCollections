(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[835],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)n.call(r,c)&&r[c]&&e.push(c);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},3820:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/ProjectList",function(){return r(6706)}])},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},c=r(6273),l=r(387),s=r(7190);var u={};function f(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=l.useRouter(),i=a.default.useMemo((function(){var t=o(c.resolveHref(n,e.href,!0),2),r=t[0],i=t[1];return{href:r,as:e.as?c.resolveHref(n,e.as):i||r}}),[n,e.href,e.as]),d=i.href,p=i.as,h=e.children,v=e.replace,g=e.shallow,m=e.scroll,y=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=(t=a.default.Children.only(h))&&"object"===typeof t&&t.ref,x=o(s.useIntersection({rootMargin:"200px"}),2),j=x[0],w=x[1],k=a.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);a.default.useEffect((function(){var e=w&&r&&c.isLocalURL(d),t="undefined"!==typeof y?y:n&&n.locale,o=u[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,w,y,r,n]);var S={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:i,locale:l,scroll:a}))}(e,n,d,p,v,g,m,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),c.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var _="undefined"!==typeof y?y:n&&n.locale,O=n&&n.isLocaleDomain&&c.getDomainLocale(p,_,n&&n.locales,n&&n.domainLocales);S.href=O||c.addBasePath(c.addLocale(p,_,n&&n.defaultLocale))}return a.default.cloneElement(t,S)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!c,u=i.useRef(),f=o(i.useState(!1),2),d=f[0],p=f[1],h=o(i.useState(t?t.current:null),2),v=h[0],g=h[1],m=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||d||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=s.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=l.get(n):(t=l.get(r),s.push(r));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(r,t={id:r,observer:i,elements:o}),t}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){if(a.delete(e),i.unobserve(e),0===a.size){i.disconnect(),l.delete(o);var t=s.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&s.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:r}))}),[n,v,r,d]);return i.useEffect((function(){if(!c&&!d){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&g(t.current)}),[t]),[m,d]};var i=r(7294),a=r(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[]},8627:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n,o=r(5893),i=r(7506),a=(r(2381),r(1664)),c=r(2708);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=(0,c.zo)("a",(l(n={position:"relative",display:"flex",flexDirection:"column",width:576,maxWidth:"100vw",marginBottom:70,backgroundColor:"#fafafa",boxShadow:"0 0 0 5px #fafafa"},"display","flex"),l(n,"flexDirection","column"),l(n,"@s",{borderRadius:0,paddings:[12,12,32]}),l(n,"@l",{borderRadius:12,padding:16,transition:"background-color 0.2s, box-shadow 0.3s","&:hover":{boxShadow:"0 0 0 10px #fafafa, 0 0 0 11px #00000008"}}),n)),u=(0,c.zo)("div",{}),f=(0,c.zo)("div",{display:"flex",flexDirection:"row",alignItems:"start",marginTop:32}),d=(0,c.zo)("img",{size:64,borderRadius:16,marginRight:16,boxShadow:"0 0 8px #00000018",userSelect:"none"}),p=(0,c.zo)("div",{display:"flex",flexDirection:"column",flexGrow:0,"& .title":{fontSize:"1.9rem",color:"#000000",fontWeight:700,margin:0},"& .subtitle":{fontSize:"1.3rem",color:"#606060",margins:[2,0],fontWeight:300}});function h(e){e.id;var t=e.icon,r=e.title,n=e.subtitle,c=e.cover,h=e.target,v=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){l(e,t,r[t])}))}return e}({},c,{link:h,linkTarget:"_self"});return(0,o.jsx)(a.default,{href:h,children:(0,o.jsxs)(s,{className:"project",children:[(0,o.jsx)(u,{children:(0,o.jsx)(i.default,{cover:v})}),(0,o.jsxs)(f,{children:[(0,o.jsx)(d,{src:t}),(0,o.jsxs)(p,{children:[(0,o.jsx)("h2",{className:"title",children:r}),n?(0,o.jsx)("p",{className:"subtitle",children:n}):null]})]})]})})}h.defaultProps={icon:"",title:"",subtitle:"",cover:"",content:"",links:[],target:""}},5840:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(5893),o=(r(2381),r(1664)),i=r(2708),a=(0,i.zo)("a",{position:"relative",display:"flex",flexDirection:"column",padding:4,borderRadius:14,margins:[0,0,4,0],boxSizing:"border-box",cursor:"pointer",overflow:"hidden","&:hover":{backgroundColor:"#f8f8f8"},"@s":{margins:[0,12]},"@l":{}}),c=(0,i.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center"}),l=(0,i.zo)("img",{size:52,borderRadius:12,margin:4,marginRight:16,boxShadow:"0 0 8px #00000018"}),s=(0,i.zo)("div",{maxWidth:"calc(100% - 90px)","& .title":{fontSize:"1.6rem",color:"#000000",fontWeight:600,margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},"& .subtitle":{fontSize:"1.2rem",color:"#888888",margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"100%"}});function u(e){e.id;var t=e.icon,r=e.title,i=e.subtitle,u=e.target;return(0,n.jsx)(o.default,{href:u,children:(0,n.jsx)(a,{children:(0,n.jsxs)(c,{children:[(0,n.jsx)(l,{src:t}),(0,n.jsxs)(s,{children:[(0,n.jsx)("h2",{className:"title",children:r}),(0,n.jsx)("p",{className:"subtitle",children:i})]})]})})})}u.defaultProps={icon:"",title:"",subtitle:"",target:""}},7506:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(5893),o=r(5988),i=r.n(o),a=function(e,t){var r=e.source,o=e.ratio;return(0,n.jsxs)("div",{style:t,className:i().dynamic([["c3b3c301c5decf29",[100*o]]])+" project-video",children:[(0,n.jsx)("video",{src:r,type:"video/mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:i().dynamic([["c3b3c301c5decf29",[100*o]]])+" cover"}),(0,n.jsx)(i(),{id:"c3b3c301c5decf29",dynamic:[100*o],children:".project-video.__jsx-style-dynamic-selector{width:100%;\nposition:relative;\npadding-top: ".concat(100*o,"% ;\nbackground-color:rgba(0, 0, 0, 0.05);\nborder-radius:8px}\n.cover.__jsx-style-dynamic-selector{width:100%;\nheight:100%;\nposition:absolute;\nleft:0;\nright:0;\ntop:0;\nbottom:0}")})]})},c=function(e,t){var r=e.source,o=e.ratio;return(0,n.jsxs)("div",{style:t,className:i().dynamic([["56ac00fa6cff99a2",[100*o,r]]])+" project-img",children:[(0,n.jsx)("div",{className:i().dynamic([["56ac00fa6cff99a2",[100*o,r]]])+" cover"}),(0,n.jsx)(i(),{id:"56ac00fa6cff99a2",dynamic:[100*o,r],children:".project-img.__jsx-style-dynamic-selector{width:100%;\nposition:relative;\npadding-top: ".concat(100*o,"% ;\nbackground-color:rgba(0, 0, 0, 0.05);\nborder-radius:8px}\n.cover.__jsx-style-dynamic-selector{width:100%;\nheight:100%;\nposition:absolute;\nbackground-image:url(").concat(r,");\nbackground-position:center;\nbackground-size:cover;\nleft:0;\nright:0;\ntop:0;\nborder:1px #eee solid;\nborder-radius:8px}")})]})};function l(e){var t=e.cover,r=e.style;if(!t||!t.source)return null;var o=t.type,l=t.link;switch(o){case"mp4":return l?function(e,t){var r=e.link,o=e.linkTarget,i=void 0===o?"_blank":o;return(0,n.jsx)("a",{href:r,rel:"noreferrer",target:i,style:t,children:a(e)})}(t,r):a(t,r);case"img":return l?function(e,t){var r=e.link,o=e.linkTarget,i=void 0===o?"_blank":o;return(0,n.jsx)("a",{href:r,rel:"noreferrer",target:i,style:t,children:c(e)})}(t,r):c(t,r);case"embed":return function(e,t){var r=e.source,o=e.ratio;return(0,n.jsxs)("div",{style:t,className:i().dynamic([["46c1da47078ef138",[100*o]]])+" project-video",children:[(0,n.jsx)("iframe",{src:r,scrolling:"no",className:i().dynamic([["46c1da47078ef138",[100*o]]])+" cover"}),(0,n.jsx)(i(),{id:"46c1da47078ef138",dynamic:[100*o],children:".project-video.__jsx-style-dynamic-selector{width:100%;\noverflow:hidden;\nposition:relative;\npadding-top: ".concat(100*o,"%;\nbackground-color:rgba(0, 0, 0, 0.05);\nborder-radius:8px}\n.cover.__jsx-style-dynamic-selector{border-style:none;\nwidth:100%;\nheight:100%;\nposition:absolute;\nleft:0;\nright:0;\ntop:0;\nbottom:0}")})]})}(t,r);default:return null}}},6706:function(e,t,r){"use strict";r.r(t);var n=r(5893),o=r(7294),i=r(8627),a=r(5840),c=r(534),l=(r(4184),r(2708));function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}var f=(0,l.zo)("div",{position:"relative",display:"flex",flexDirection:"column",paddings:[16,0,24,0],flexGrow:1,width:"100%",alignItems:"center"}),d=(0,l.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center",width:"100%","& .icon":{size:28,marginRight:12},"& .title":{fontSize:"2.25rem",flexGrow:1,fontWeight:600},"@s":{paddings:[0,16]},"@l":{paddings:[0,8]}}),p=(0,l.zo)("div",{display:"grid",gridTemplateColumns:"repeat(1, 1fr)","@s":{width:"100%"},"@l":{width:576}});function h(e){var t=e.icon,r=e.title,c=e.projectType,l=e.projectData,s=e.view,h=e.count,v=e.target,g=c?Array.isArray(c)?c:[c]:[];return(0,n.jsxs)(f,{children:[(0,n.jsxs)(d,{children:[t&&(0,n.jsx)("img",{className:"icon",src:t}),r&&(0,n.jsx)("h2",{className:"title",children:r})]}),(0,n.jsx)(p,{children:l.filter((function(e){return 0===g.length||(t=g,r=e.types,t.filter((function(e){return r.indexOf(e)>-1}))).length>0;var t,r})).slice(0,h>0?h:l.length).map((function(e){var t="".concat(v,"/").concat(e.id);switch(s){case"card":return(0,o.createElement)(i.default,u({},e,{key:e.title,target:t}));case"bar":return(0,o.createElement)(a.default,u({},e,{key:e.title,target:t}));default:throw{name:"Unhandle project list view type",message:"\u672a\u77e5\u7684 view type: ".concat(s)}}}))})]})}h.defaultProps={icon:"",title:"",projectType:[],projectData:c.o8,view:"card",count:-1,target:"/project"},t.default=h},1664:function(e,t,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=3820,e(e.s=t);var t}));var t=e.O();_N_E=t}]);