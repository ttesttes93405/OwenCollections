(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var a=i.apply(null,t);a&&e.push(a)}}else if("object"===o)if(t.toString===Object.prototype.toString)for(var c in t)r.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(n,[]))||(e.exports=t)}()},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3678)}])},8418:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var o,a=(o=t(7294))&&o.__esModule?o:{default:o},c=t(6273),l=t(387),s=t(7190);var f={};function d(e,n,t,r){if(e&&c.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(i?"%"+i:"")]=!0}}var u=function(e){var n,t=!1!==e.prefetch,r=l.useRouter(),o=a.default.useMemo((function(){var n=i(c.resolveHref(r,e.href,!0),2),t=n[0],o=n[1];return{href:t,as:e.as?c.resolveHref(r,e.as):o||t}}),[r,e.href,e.as]),u=o.href,p=o.as,m=e.children,h=e.replace,x=e.shallow,y=e.scroll,g=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var b=(n=a.default.Children.only(m))&&"object"===typeof n&&n.ref,v=i(s.useIntersection({rootMargin:"200px"}),2),j=v[0],w=v[1],_=a.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);a.default.useEffect((function(){var e=w&&t&&c.isLocalURL(u),n="undefined"!==typeof g?g:r&&r.locale,i=f[u+"%"+p+(n?"%"+n:"")];e&&!i&&d(r,u,p,{locale:n})}),[p,u,w,g,t,r]);var k={ref:_,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,o,a,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(t))&&(e.preventDefault(),n[i?"replace":"push"](t,r,{shallow:o,locale:l,scroll:a}))}(e,r,u,p,h,x,y,g)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c.isLocalURL(u)&&d(r,u,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var O="undefined"!==typeof g?g:r&&r.locale,S=r&&r.isLocaleDomain&&c.getDomainLocale(p,O,r&&r.locales,r&&r.domainLocales);k.href=S||c.addBasePath(c.addLocale(p,O,r&&r.defaultLocale))}return a.default.cloneElement(n,k)};n.default=u},7190:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,t=e.rootMargin,r=e.disabled||!c,f=o.useRef(),d=i(o.useState(!1),2),u=d[0],p=d[1],m=i(o.useState(n?n.current:null),2),h=m[0],x=m[1],y=o.useCallback((function(e){f.current&&(f.current(),f.current=void 0),r||u||e&&e.tagName&&(f.current=function(e,n,t){var r=function(e){var n,t={root:e.root||null,margin:e.rootMargin||""},r=s.find((function(e){return e.root===t.root&&e.margin===t.margin}));r?n=l.get(r):(n=l.get(t),s.push(t));if(n)return n;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=i.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return l.set(t,n={id:t,observer:o,elements:i}),n}(t),i=r.id,o=r.observer,a=r.elements;return a.set(e,n),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),l.delete(i);var n=s.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));n>-1&&s.splice(n,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:t}))}),[r,h,t,u]);return o.useEffect((function(){if(!c&&!u){var e=a.requestIdleCallback((function(){return p(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[u]),o.useEffect((function(){n&&x(n.current)}),[n]),[y,u]};var o=t(7294),a=t(9311),c="undefined"!==typeof IntersectionObserver;var l=new Map,s=[]},4163:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(5893),i=(t(7294),t(9008)),o=t(534);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e){var n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){c(e,n,t[n])}))}return e}({},{title:"Owen Sun",icon:"/favicon.png",viewport:"initial-scale=1.0, width=device-width",description:o.Av.content.join("\n"),image:"https://owensun.info/Owen01.jpg"});return Object.entries(e).forEach((function(e){var t=l(e,2),r=t[0],i=t[1];void 0!==i&&null!==i&&(n[r]=i)})),(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:n.title}),(0,r.jsx)("link",{rel:"icon",href:n.icon}),(0,r.jsx)("meta",{name:"description",content:n.description}),(0,r.jsx)("meta",{property:"og:description",content:n.description}),(0,r.jsx)("meta",{property:"og:image",content:n.image})]})}},1450:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(5988),o=t.n(i),a=t(1664),c=t(1163),l=t(4184),s=t.n(l),f=t(2381),d=t(7294),u=t(534),p=t(2708),m=(0,p.zo)("nav",{position:"fixed",width:"100%",display:"flex",flexDirection:"row",backgroundColor:"#ffffff",alignItems:"center",justifyContent:"center",padding:0,margin:0,top:0,zIndex:10,transition:"box-shadow 0.3s, height 0.3s, padding-top 0.3s",boxShadow:"1px 2px 18px rgba(0, 0, 0, 10%)",height:60,variants:{isOnTop:{true:{boxShadow:"1px 2px 18px rgba(0, 0, 0, 0%)","@s":{},"@l":{height:120,paddingTop:60}},false:{}}},"@s":{paddingLeft:4}}),h=(0,p.zo)("div",{maxWidth:576,display:"flex",flexDirection:"row",flexGrow:1,height:"100%",alignItems:"center"}),x=(0,p.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center",maxWidth:350,opacity:1,variants:{isHide:{true:{opacity:0},false:{}}}}),y=(0,p.zo)("a",{display:"flex",flexDirection:"row",alignItems:"center",height:60,maxWidth:230,borderRadius:8,"& .slash":{margins:[0,8,0,2],padding:0,color:"#a0a0a0"},"& .icon":{size:30,borderRadius:9999},"& .title":{fontSize:"1.35rem",margin:0,marginLeft:8,color:"rgba(0, 0, 0, 0.65)",fontWeight:500,textOverflow:"ellipsis",height:30,lineHeight:"30px",overflow:"hidden",whiteSpace:"nowrap",display:"inline-block",flexShrink:1},"&:first-child":{maxWidth:120,cursor:"pointer",paddings:[4,8],height:40,"&:hover":{backgroundColor:"#f4f4f4be"}},"&:last-child":{maxWidth:300},"@s":{"&:first-child .title":{display:"none"},"&:last-child .title":{display:"flex"}}}),g=(0,p.zo)("span",{flexGrow:1,minWidth:30});function b(e){var n=e.icon,t=void 0===n?"/Owen01.jpg":n,i=e.title,l=void 0===i?"OWENSUN.INFO":i,p=e.rootPath,b=void 0===p?"/":p,v=e.isShowType,j=void 0===v||v,w=e.hideTitleWhenTop,_=void 0!==w&&w,k=e.paths,O=void 0===k?[]:k,S=(0,d.useState)(!1),z=S[0],N=S[1],E=(0,d.useState)(!0),P=E[0],I=E[1],T=function(){I(window.scrollY<30)};(0,d.useEffect)((function(){var e=window;return e.addEventListener("scroll",T),function(){e.removeEventListener("scroll",T)}}),[]);var A=(0,c.useRouter)(),D=function(e){return A.asPath==e};return(0,r.jsxs)(m,{isOnTop:P,children:[(0,r.jsxs)(h,{children:[(0,r.jsxs)(x,{isHide:_&&P,children:[(0,r.jsx)(a.default,{href:b,children:(0,r.jsxs)(y,{children:[(0,r.jsx)("img",{src:t,className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" icon"}),(0,r.jsx)("p",{className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" title",children:l})]})}),O.map((function(e){return(0,r.jsxs)(y,{children:[(0,r.jsx)("span",{className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" slash",children:"/"}),(0,r.jsx)("img",{src:e.icon,className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" icon"}),(0,r.jsx)("p",{className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" title",children:e.title})]},e.title)}))]}),(0,r.jsx)(g,{}),z?null:(0,r.jsx)("div",{onClick:function(){return N(!z)},className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" route-menu-btn",children:(0,r.jsx)("img",{src:"/icons/menu.svg",className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])})}),(0,r.jsxs)("div",{onClick:function(){return N(!z)},className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" "+(s()("route-container",{"show-route":z})||""),children:[(0,r.jsx)(a.default,{href:b,children:(0,r.jsxs)("a",{className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" "+(s()("home","route",{"route-current":D("/")})||""),children:[(0,r.jsx)("img",{src:"/icons/home.svg",className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" route-icon"}),(0,r.jsx)("p",{className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" route-title",children:"\u9996\u9801"})]})},"home"),j&&u.TZ.map((function(e){var n="/type/".concat(e.id);return(0,r.jsx)(a.default,{href:n,children:(0,r.jsxs)("a",{className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" "+(s()("route",{"route-current":D(n)})||""),children:[(0,r.jsx)("img",{src:e.icon,className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" route-icon"}),(0,r.jsx)("p",{className:o().dynamic([["8bf9bf7fd105f6c3",[f.Z.main]]])+" route-title",children:e.title})]})},e.id)}))]})]}),(0,r.jsx)(o(),{id:"8bf9bf7fd105f6c3",dynamic:[f.Z.main],children:".route-menu-btn.__jsx-style-dynamic-selector{display:none}\n.route-container.__jsx-style-dynamic-selector{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\n.route.__jsx-style-dynamic-selector{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-justify-content:center;\njustify-content:center;\nborder-radius:8px;\npadding:8px 16px;\nmargin-left:8px;\nbackground-color:#f0f0f000;\n-webkit-transition:background-color 0.15s;\ntransition:background-color 0.15s}\n.route.__jsx-style-dynamic-selector:not(.route-current):hover{background-color:#f4f4f4be}\n.route-current.__jsx-style-dynamic-selector{position:relative;\nbackground-color:#f4f4f4}\n.route-icon.__jsx-style-dynamic-selector{width:18px;\nheight:18px;\nmargin-right:4px}\n.route-title.__jsx-style-dynamic-selector{font-size:1.35rem;\nmargin:0;\npadding:0;\ncolor:#555}\n.route-current.__jsx-style-dynamic-selector .route-title.__jsx-style-dynamic-selector{color:#333}\n.home.__jsx-style-dynamic-selector{display:none}\n@media (max-width:576px) {.header.__jsx-style-dynamic-selector{padding-left:16px}\n.header.on-top.__jsx-style-dynamic-selector{padding-top:0;\nheight:60px}\n.route-container.__jsx-style-dynamic-selector{display:none;\nposition:relative}\n.route-container.__jsx-style-dynamic-selector::after{content:'';\nposition:absolute;\ntop:20px;\nright:20px;\nbackground-image:url(\"/icons/x.svg\");\nbackground-size:20px 20px;\nheight:20px;\nwidth:20px}\n.route-container.show-route.__jsx-style-dynamic-selector{position:fixed;\nleft:0;\nright:0;\ntop:0;\nbottom:0;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\n-webkit-justify-content:center;\njustify-content:center;\nbackground-color:rgba(255, 255, 255, 0.95)}\n.route.__jsx-style-dynamic-selector{background-color:#ffffff;\noverflow:hidden;\nwidth:200px;\nmargin-left:0;\nmargin-bottom:16px;\npadding:12px 24px;\nborder:1px #ddd solid}\n.route-icon.__jsx-style-dynamic-selector{width:24px;\nheight:24px;\nmargin-right:16px}\n.route-title.__jsx-style-dynamic-selector{font-size:1.5rem;\nmargin:0;\npadding:0;\ncolor:#555}\n.route-current.__jsx-style-dynamic-selector{border:2px ".concat(f.Z.main," solid;\nborder-left-width:16px;\npadding-right:36px}\n.route-current.__jsx-style-dynamic-selector::after{display:none;\nbottom:0;\ntop:0;\nleft:0;\nwidth:10px;\nheight:auto}\n.route-menu-btn.__jsx-style-dynamic-selector{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\nwidth:60px;\nheight:60px;\npadding:20px}\n.home.__jsx-style-dynamic-selector{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex}}")})]})}b.defaultProps={icon:"/Owen01.jpg",title:"OWENSUN.INFO",rootPath:"/",isShowType:!0,paths:[]},n.default=b},7187:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(5893),i=t(2708),o=(0,i.zo)("div",{display:"flex",flexDirection:"column",paddings:[40,16,72],width:"100%","@s":{},"@l":{paddingLeft:12,paddingRight:12}}),a=(0,i.zo)("img",{size:80,borderRadius:9999,marginLeft:4}),c=(0,i.zo)("h1",{fontSize:"2.9rem",color:"#000000",fontWeight:800,margins:[16,0,4,0],letterSpacing:4}),l=(0,i.zo)("p",{fontSize:"1.5rem",color:"#000000",fontWeight:400,margin:0,opacity:.7}),s=(0,i.zo)("div",{margins:[8,0]}),f=(0,i.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center"}),d=(0,i.zo)("img",{size:20,marginRight:8,opacity:.5}),u=(0,i.zo)("p",{fontSize:"1.25rem",color:"#808080"}),p=(0,i.zo)("div",{margins:[8,0,32],paddings:[20,0],borderRadius:8,"& p":{fontSize:"1.35rem",margin:0,color:"#505050",minHeight:14,lineHeight:"2.25rem"}});function m(e){var n=e.picture,t=e.title,i=e.subtitle,m=e.content,h=e.info;return(0,r.jsxs)(o,{children:[(0,r.jsx)(a,{src:n}),(0,r.jsx)(c,{children:t}),(0,r.jsx)(l,{children:i}),(0,r.jsx)(s,{children:h.map((function(e){return(0,r.jsxs)(f,{children:[(0,r.jsx)(d,{src:e.icon}),(0,r.jsx)(u,{children:e.content})]},e.content)}))}),(0,r.jsx)(p,{children:m.map((function(e,n){return(0,r.jsx)("p",{children:e},n)}))})]})}m.defaultProps={picture:"",title:"",subtitle:"",content:[],info:[]}},8627:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r,i=t(5893),o=t(7506),a=(t(2381),t(1664)),c=t(2708);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=(0,c.zo)("a",(l(r={position:"relative",display:"flex",flexDirection:"column",width:576,maxWidth:"100vw",marginBottom:70,backgroundColor:"#fafafa",boxShadow:"0 0 0 5px #fafafa"},"display","flex"),l(r,"flexDirection","column"),l(r,"@s",{borderRadius:0,paddings:[12,12,32]}),l(r,"@l",{borderRadius:12,padding:16,transition:"background-color 0.2s, box-shadow 0.3s","&:hover":{boxShadow:"0 0 0 10px #fafafa, 0 0 0 11px #00000008"}}),r)),f=(0,c.zo)("div",{}),d=(0,c.zo)("div",{display:"flex",flexDirection:"row",alignItems:"start",marginTop:32}),u=(0,c.zo)("img",{size:64,borderRadius:16,marginRight:16,boxShadow:"0 0 8px #00000018",userSelect:"none"}),p=(0,c.zo)("div",{display:"flex",flexDirection:"column",flexGrow:0,"& .title":{fontSize:"1.9rem",color:"#000000",fontWeight:700,margin:0},"& .subtitle":{fontSize:"1.3rem",color:"#606060",margins:[2,0],fontWeight:300}});function m(e){e.id;var n=e.icon,t=e.title,r=e.subtitle,c=e.cover,m=e.target,h=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){l(e,n,t[n])}))}return e}({},c,{link:m,linkTarget:"_self"});return(0,i.jsx)(a.default,{href:m,children:(0,i.jsxs)(s,{className:"project",children:[(0,i.jsx)(f,{children:(0,i.jsx)(o.default,{cover:h})}),(0,i.jsxs)(d,{children:[(0,i.jsx)(u,{src:n}),(0,i.jsxs)(p,{children:[(0,i.jsx)("h2",{className:"title",children:t}),r?(0,i.jsx)("p",{className:"subtitle",children:r}):null]})]})]})})}m.defaultProps={icon:"",title:"",subtitle:"",cover:"",content:"",links:[],target:""}},5840:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var r=t(5893),i=(t(2381),t(1664)),o=t(2708),a=(0,o.zo)("a",{position:"relative",display:"flex",flexDirection:"column",padding:4,borderRadius:14,margins:[0,0,4,0],boxSizing:"border-box",cursor:"pointer",overflow:"hidden","&:hover":{backgroundColor:"#f8f8f8"},"@s":{margins:[0,12]},"@l":{}}),c=(0,o.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center"}),l=(0,o.zo)("img",{size:52,borderRadius:12,margin:4,marginRight:16,boxShadow:"0 0 8px #00000018"}),s=(0,o.zo)("div",{maxWidth:"calc(100% - 90px)","& .title":{fontSize:"1.6rem",color:"#000000",fontWeight:600,margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},"& .subtitle":{fontSize:"1.2rem",color:"#888888",margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"100%"}});function f(e){e.id;var n=e.icon,t=e.title,o=e.subtitle,f=e.target;return(0,r.jsx)(i.default,{href:f,children:(0,r.jsx)(a,{children:(0,r.jsxs)(c,{children:[(0,r.jsx)(l,{src:n}),(0,r.jsxs)(s,{children:[(0,r.jsx)("h2",{className:"title",children:t}),(0,r.jsx)("p",{className:"subtitle",children:o})]})]})})})}f.defaultProps={icon:"",title:"",subtitle:"",target:""}},7506:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(5893),i=t(5988),o=t.n(i),a=function(e,n){var t=e.source,i=e.ratio;return(0,r.jsxs)("div",{style:n,className:o().dynamic([["c3b3c301c5decf29",[100*i]]])+" project-video",children:[(0,r.jsx)("video",{src:t,type:"video/mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:o().dynamic([["c3b3c301c5decf29",[100*i]]])+" cover"}),(0,r.jsx)(o(),{id:"c3b3c301c5decf29",dynamic:[100*i],children:".project-video.__jsx-style-dynamic-selector{width:100%;\nposition:relative;\npadding-top: ".concat(100*i,"% ;\nbackground-color:rgba(0, 0, 0, 0.05);\nborder-radius:8px}\n.cover.__jsx-style-dynamic-selector{width:100%;\nheight:100%;\nposition:absolute;\nleft:0;\nright:0;\ntop:0;\nbottom:0}")})]})},c=function(e,n){var t=e.source,i=e.ratio;return(0,r.jsxs)("div",{style:n,className:o().dynamic([["56ac00fa6cff99a2",[100*i,t]]])+" project-img",children:[(0,r.jsx)("div",{className:o().dynamic([["56ac00fa6cff99a2",[100*i,t]]])+" cover"}),(0,r.jsx)(o(),{id:"56ac00fa6cff99a2",dynamic:[100*i,t],children:".project-img.__jsx-style-dynamic-selector{width:100%;\nposition:relative;\npadding-top: ".concat(100*i,"% ;\nbackground-color:rgba(0, 0, 0, 0.05);\nborder-radius:8px}\n.cover.__jsx-style-dynamic-selector{width:100%;\nheight:100%;\nposition:absolute;\nbackground-image:url(").concat(t,");\nbackground-position:center;\nbackground-size:cover;\nleft:0;\nright:0;\ntop:0;\nborder:1px #eee solid;\nborder-radius:8px}")})]})};function l(e){var n=e.cover,t=e.style;if(!n||!n.source)return null;var i=n.type,l=n.link;switch(i){case"mp4":return l?function(e,n){var t=e.link,i=e.linkTarget,o=void 0===i?"_blank":i;return(0,r.jsx)("a",{href:t,rel:"noreferrer",target:o,style:n,children:a(e)})}(n,t):a(n,t);case"img":return l?function(e,n){var t=e.link,i=e.linkTarget,o=void 0===i?"_blank":i;return(0,r.jsx)("a",{href:t,rel:"noreferrer",target:o,style:n,children:c(e)})}(n,t):c(n,t);case"embed":return function(e,n){var t=e.source,i=e.ratio;return(0,r.jsxs)("div",{style:n,className:o().dynamic([["46c1da47078ef138",[100*i]]])+" project-video",children:[(0,r.jsx)("iframe",{src:t,scrolling:"no",className:o().dynamic([["46c1da47078ef138",[100*i]]])+" cover"}),(0,r.jsx)(o(),{id:"46c1da47078ef138",dynamic:[100*i],children:".project-video.__jsx-style-dynamic-selector{width:100%;\noverflow:hidden;\nposition:relative;\npadding-top: ".concat(100*i,"%;\nbackground-color:rgba(0, 0, 0, 0.05);\nborder-radius:8px}\n.cover.__jsx-style-dynamic-selector{border-style:none;\nwidth:100%;\nheight:100%;\nposition:absolute;\nleft:0;\nright:0;\ntop:0;\nbottom:0}")})]})}(n,t);default:return null}}},6706:function(e,n,t){"use strict";t.r(n);var r=t(5893),i=t(7294),o=t(8627),a=t(5840),c=t(534),l=(t(4184),t(2708));function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}var d=(0,l.zo)("div",{position:"relative",display:"flex",flexDirection:"column",paddings:[16,0,24,0],flexGrow:1,width:"100%",alignItems:"center"}),u=(0,l.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center",width:"100%","& .icon":{size:28,marginRight:12},"& .title":{fontSize:"2.25rem",flexGrow:1,fontWeight:600},"@s":{paddings:[0,16]},"@l":{paddings:[0,8]}}),p=(0,l.zo)("div",{display:"grid",gridTemplateColumns:"repeat(1, 1fr)","@s":{width:"100%"},"@l":{width:576}});function m(e){var n=e.icon,t=e.title,c=e.projectType,l=e.projectData,s=e.view,m=e.count,h=e.target,x=c?Array.isArray(c)?c:[c]:[];return(0,r.jsxs)(d,{children:[(0,r.jsxs)(u,{children:[n&&(0,r.jsx)("img",{className:"icon",src:n}),t&&(0,r.jsx)("h2",{className:"title",children:t})]}),(0,r.jsx)(p,{children:l.filter((function(e){return 0===x.length||(n=x,t=e.types,n.filter((function(e){return t.indexOf(e)>-1}))).length>0;var n,t})).slice(0,m>0?m:l.length).map((function(e){var n="".concat(h,"/").concat(e.id);switch(s){case"card":return(0,i.createElement)(o.default,f({},e,{key:e.title,target:n}));case"bar":return(0,i.createElement)(a.default,f({},e,{key:e.title,target:n}));default:throw{name:"Unhandle project list view type",message:"\u672a\u77e5\u7684 view type: ".concat(s)}}}))})]})}m.defaultProps={icon:"",title:"",projectType:[],projectData:c.o8,view:"card",count:-1,target:"/project"},n.default=m},3678:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return d}});var r=t(5893),i=t(9008),o=t(1450),a=t(7187),c=t(6706),l=t(4163);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}var d=!0;n.default=function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.default,{hideTitleWhenTop:!0}),(0,r.jsxs)("div",{className:"home",children:[(0,r.jsx)(l.default,{}),(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Owen Sun"}),(0,r.jsx)("meta",{property:"og:title",content:"Owen Sun"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,r.jsx)(a.default,f({},e.introData)),(0,r.jsx)(c.default,{icon:"/icons/code.svg",title:"\u524d\u7aef",projectType:"front-end"}),(0,r.jsx)(c.default,{icon:"/icons/box.svg",title:"\u904a\u6232",projectType:"game"})]})]})}},1664:function(e,n,t){e.exports=t(8418)},1163:function(e,n,t){e.exports=t(387)}},function(e){e.O(0,[774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);