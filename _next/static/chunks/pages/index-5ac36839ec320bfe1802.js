(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,t){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var s=typeof i;if("string"===s||"number"===s)e.push(i);else if(Array.isArray(i)){if(i.length){var o=r.apply(null,i);o&&e.push(o)}}else if("object"===s)if(i.toString===Object.prototype.toString)for(var l in i)n.call(i,l)&&i[l]&&e.push(l);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},1432:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return d}});var n=i(181);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,r,s=[],o=!0,l=!1;try{for(i=i.call(e);!(o=(n=i.next()).done)&&(s.push(n.value),!t||s.length!==t);o=!0);}catch(a){l=!0,r=a}finally{try{o||null==i.return||i.return()}finally{if(l)throw r}}return s}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var s=i(4942),o=(i(7294),i(9008)),l=i(9052),a=i(5893);function c(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function d(e){var t=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?c(Object(i),!0).forEach((function(t){(0,s.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},{title:"Owen Sun",icon:"/favicon.png",viewport:"initial-scale=1.0, width=device-width",description:l.Av.content.join("\n"),image:"https://owensun.info/Owen01.jpg"});return Object.entries(e).forEach((function(e){var i=r(e,2),n=i[0],s=i[1];void 0!==s&&null!==s&&(t[n]=s)})),(0,a.jsxs)(o.default,{children:[(0,a.jsx)("title",{children:t.title}),(0,a.jsx)("link",{rel:"icon",href:t.icon}),(0,a.jsx)("meta",{name:"description",content:t.description}),(0,a.jsx)("meta",{property:"og:description",content:t.description}),(0,a.jsx)("meta",{property:"og:image",content:t.image})]})}},4053:function(e,t,i){"use strict";i.r(t);var n=i(5988),r=i(1664),s=i(1163),o=i(4184),l=i.n(o),a=i(4169),c=i(7294),d=i(9052),x=i(5893);function p(e){var t=e.icon,i=void 0===t?"/Owen01.jpg":t,o=e.title,p=void 0===o?"OWENSUN.INFO":o,f=e.rootPath,m=void 0===f?"/":f,u=e.isShowType,y=void 0===u||u,h=e.alwaysShowTitle,b=void 0===h||h,g=e.paths,j=void 0===g?[]:g,w=(0,c.useState)(!1),k=w[0],v=w[1],_=(0,c.useState)(!0),O=_[0],N=_[1],P=function(){N(window.scrollY<30)},Z=((0,c.useEffect)((function(){var e=window;return e.addEventListener("scroll",P),function(){e.removeEventListener("scroll",P)}}),[]),(0,s.useRouter)()),S=function(e){return Z.asPath==e};return(0,x.jsxs)("nav",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" "+(l()("header",{"on-top":O,"always-show-title":b})||""),children:[(0,x.jsxs)("div",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" container",children:[(0,x.jsxs)("div",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" title-container",children:[(0,x.jsx)(r.default,{href:m,children:(0,x.jsxs)("a",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" title-path",children:[(0,x.jsx)("img",{src:i,className:n.default.dynamic([["3828286084",[a.Z.main]]])+" icon"}),(0,x.jsx)("p",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" title",children:p})]})}),j.map((function(e){return(0,x.jsxs)("div",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" title-path",children:[(0,x.jsx)("span",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" slash",children:"/"}),(0,x.jsx)("img",{src:e.icon,className:n.default.dynamic([["3828286084",[a.Z.main]]])+" icon"}),(0,x.jsx)("p",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" title",children:e.title})]},e.title)}))]}),(0,x.jsx)("div",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" flex-space"}),k?null:(0,x.jsx)("div",{onClick:function(){return v(!k)},className:n.default.dynamic([["3828286084",[a.Z.main]]])+" route-menu-btn",children:(0,x.jsx)("img",{src:"/icons/menu.svg",className:n.default.dynamic([["3828286084",[a.Z.main]]])})}),(0,x.jsxs)("div",{onClick:function(){return v(!k)},className:n.default.dynamic([["3828286084",[a.Z.main]]])+" "+(l()("route-container",{"show-route":k})||""),children:[(0,x.jsx)(r.default,{href:m,children:(0,x.jsxs)("a",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" "+(l()("home","route",{"route-current":S("/")})||""),children:[(0,x.jsx)("img",{src:"/icons/home.svg",className:n.default.dynamic([["3828286084",[a.Z.main]]])+" route-icon"}),(0,x.jsx)("p",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" route-title",children:"\u9996\u9801"})]})},"home"),y&&d.TZ.map((function(e){var t="/type/".concat(e.id);return(0,x.jsx)(r.default,{href:t,children:(0,x.jsxs)("a",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" "+(l()("route",{"route-current":S(t)})||""),children:[(0,x.jsx)("img",{src:e.icon,className:n.default.dynamic([["3828286084",[a.Z.main]]])+" route-icon"}),(0,x.jsx)("p",{className:n.default.dynamic([["3828286084",[a.Z.main]]])+" route-title",children:e.title})]})},e.id)}))]})]}),(0,x.jsx)(n.default,{id:"3828286084",dynamic:[a.Z.main],children:[".header.__jsx-style-dynamic-selector{position:fixed;height:60px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:#fff;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;margin:0;top:0;z-index:10;box-shadow:1px 2px 18px rgba(0,0,0,10%);-webkit-transition:box-shadow 0.3s,height 0.3s,padding-top 0.3s;transition:box-shadow 0.3s,height 0.3s,padding-top 0.3s;}",".header.on-top.__jsx-style-dynamic-selector{box-shadow:1px 2px 18px rgba(0,0,0,0%);height:120px;padding-top:60px;}",".container.__jsx-style-dynamic-selector{max-width:576px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".slash.__jsx-style-dynamic-selector{margin:0 8px 0 2px;padding:0;color:#aaa;}",".title-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:350px;opacity:1;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;}",".title-path.__jsx-style-dynamic-selector{height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:230px;}",".on-top.__jsx-style-dynamic-selector .title-container.__jsx-style-dynamic-selector{opacity:0;}",".always-show-title.__jsx-style-dynamic-selector .title-container.__jsx-style-dynamic-selector{opacity:1;}",".icon.__jsx-style-dynamic-selector{width:30px;height:30px;border-radius:9999px;}",".title.__jsx-style-dynamic-selector{font-size:1.35rem;margin:0;margin-left:8px;color:rgba(0,0,0,0.65);font-weight:500;text-overflow :ellipsis;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;height:30px;line-height:30px;overflow:hidden;white-space:nowrap;}",".title-path.__jsx-style-dynamic-selector:first-child{cursor:pointer;padding:4px 8px;height:40px;}",".title-path.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector:hover{border-radius:8px;background-color:#f4f4f4be;}",".title-path.__jsx-style-dynamic-selector:first-child .title.__jsx-style-dynamic-selector{max-width:60px;}",".title-path.__jsx-style-dynamic-selector:last-child .title.__jsx-style-dynamic-selector{display:inline-block;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden;max-width:300px;}",".flex-space.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;min-width:30px;}",".route-menu-btn.__jsx-style-dynamic-selector{display:none;}",".route-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".route.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:8px 16px;margin-left:8px;background-color:#f0f0f000;-webkit-transition:background-color 0.15s;transition:background-color 0.15s;}",".route.__jsx-style-dynamic-selector:not(.route-current):hover{background-color:#f4f4f4be;}",".route-current.__jsx-style-dynamic-selector{position:relative;background-color:#f4f4f4;}",".route-icon.__jsx-style-dynamic-selector{width:18px;height:18px;margin-right:4px;}",".route-title.__jsx-style-dynamic-selector{font-size:1.35rem;margin:0;padding:0;color:#555;}",".route-current.__jsx-style-dynamic-selector .route-title.__jsx-style-dynamic-selector{color:#333;}",".home.__jsx-style-dynamic-selector{display:none;}","@media (max-width:576px){.header.__jsx-style-dynamic-selector{padding-left:16px;}.header.on-top.__jsx-style-dynamic-selector{padding-top:0;height:60px;}.route-container.__jsx-style-dynamic-selector{display:none;position:relative;}.route-container.__jsx-style-dynamic-selector::after{content:'';position:absolute;top:20px;right:20px;background-image:url(\"/icons/x.svg\");background-size:20px 20px;height:20px;width:20px;}.route-container.show-route.__jsx-style-dynamic-selector{position:fixed;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(255,255,255,0.95);}.route.__jsx-style-dynamic-selector{background-color:#ffffff;overflow:hidden;width:200px;margin-left:0;margin-bottom:16px;padding:12px 24px;border:1px #ddd solid;}.route-icon.__jsx-style-dynamic-selector{width:24px;height:24px;margin-right:16px;}.route-title.__jsx-style-dynamic-selector{font-size:1.5rem;margin:0;padding:0;color:#555;}.route-current.__jsx-style-dynamic-selector{border:2px ".concat(a.Z.main," solid;border-left-width:16px;padding-right:36px;}.route-current.__jsx-style-dynamic-selector::after{display:none;bottom:0;top:0;left:0;width:10px;height:auto;}.route-menu-btn.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60px;height:60px;padding:20px;}.title-path.__jsx-style-dynamic-selector:first-child .title.__jsx-style-dynamic-selector{display:none;}.title-path.__jsx-style-dynamic-selector:last-child .title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.home.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}")]})]})}p.defaultProps={icon:"/Owen01.jpg",title:"OWENSUN.INFO",alwaysShowTitle:!0},t.default=p},8307:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return s}});var n=i(5988),r=i(5893);function s(e){var t=e.picture,i=e.title,s=e.subtitle,o=e.content,l=e.info;return(0,r.jsxs)("div",{className:"jsx-3230439774 intro",children:[(0,r.jsx)("img",{src:t,className:"jsx-3230439774 icon"}),(0,r.jsx)("h1",{className:"jsx-3230439774 title",children:i}),(0,r.jsx)("p",{className:"jsx-3230439774 subtitle",children:s}),(0,r.jsx)("div",{className:"jsx-3230439774 info-container",children:l.map((function(e){return(0,r.jsxs)("div",{className:"jsx-3230439774 info",children:[(0,r.jsx)("img",{src:e.icon,className:"jsx-3230439774 info-icon"}),(0,r.jsx)("p",{className:"jsx-3230439774 info-content",children:e.content})]},e.content)}))}),(0,r.jsx)("div",{className:"jsx-3230439774 content-container",children:o.map((function(e,t){return(0,r.jsx)("p",{className:"jsx-3230439774 content",children:e},t)}))}),(0,r.jsx)(n.default,{id:"3230439774",children:[".intro.jsx-3230439774{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:40px 0 72px;width:100%;}",".icon.jsx-3230439774{width:80px;height:80px;border-radius:9999px;margin-left:16px;}",".title.jsx-3230439774{font-size:2.9rem;color:#000;font-weight:800;margin:16px 0 4px;margin-left:16px;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;}",".subtitle.jsx-3230439774{font-size:1.5rem;color:#000;font-weight:400;margin:0;opacity:0.7;margin-left:16px;}",".info-container.jsx-3230439774{margin:8px 0;}",".info.jsx-3230439774{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:16px;}",".info-icon.jsx-3230439774{width:20px;height:20px;margin-right:8px;opacity:0.5;}",".info-content.jsx-3230439774{font-size:1.25rem;color:#888;}",".content-container.jsx-3230439774{margin:8px 0 32px 0;padding:16px;background-color:#f4f4f4;border-radius:8px;}",".content.jsx-3230439774{font-size:1.35rem;margin:0;color:#555;min-height:14px;}","@media (max-width:576px){.intro.jsx-3230439774{padding-left:16px;padding-right:16px;}}"]})]})}s.defaultProps={picture:"",title:"",subtitle:"",content:[],info:[]}},8246:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return o}});var n=i(5988),r=(i(4169),i(1664)),s=i(5893);function o(e){e.id;var t=e.icon,i=e.title,o=e.subtitle,l=e.target;return(0,s.jsx)(r.default,{href:l,children:(0,s.jsxs)("a",{className:"jsx-2884654329 project",children:[(0,s.jsxs)("div",{className:"jsx-2884654329 row head",children:[(0,s.jsx)("img",{src:t,className:"jsx-2884654329 icon"}),(0,s.jsxs)("div",{className:"jsx-2884654329 col",children:[(0,s.jsx)("h2",{className:"jsx-2884654329 title",children:i}),(0,s.jsx)("p",{className:"jsx-2884654329 subtitle",children:o})]})]}),(0,s.jsx)(n.default,{id:"2884654329",children:[".project.jsx-2884654329{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:4px;border-radius:14px;margin:0 0 4px 0;box-sizing:border-box;cursor:pointer;overflow:hidden;}",".project.jsx-2884654329:hover{background-color:#f8f8f8;}",".icon.jsx-2884654329{width:52px;height:52px;border-radius:12px;margin:4px;margin-right:16px;box-shadow:0 0 8px #00000018;}",".title.jsx-2884654329{font-size:1.6rem;color:#000;font-weight:600;margin:0;overflow:hidden;text-overflow :ellipsis;white-space:nowrap;}",".subtitle.jsx-2884654329{font-size:1.2rem;color:#888;margin:0;overflow:hidden;text-overflow :ellipsis;white-space:nowrap;max-width:100%;}",".head.jsx-2884654329{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".head.jsx-2884654329 .col.jsx-2884654329{max-width:calc(100% - 90px);}","@media (max-width:576px){.project.jsx-2884654329{margin:0 12px;}}"]})]})})}o.defaultProps={icon:"",title:"",subtitle:"",target:""}},2083:function(e,t,i){"use strict";i.r(t);var n=i(4942),r=i(5988),s=i(7599),o=i(8246),l=i(9052),a=i(4184),c=i.n(a),d=i(5893),x=i(7294);function p(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(e){var t=e.icon,i=e.title,n=e.projectType,l=e.projectData,a=e.view,p=e.count,m=e.target,u=n?Array.isArray(n)?n:[n]:[];return(0,d.jsxs)("div",{className:"jsx-838978954 "+(c()("project-list",a)||""),children:[(0,d.jsxs)("div",{className:"jsx-838978954 row header",children:[t&&(0,d.jsx)("img",{src:t,className:"jsx-838978954 icon"}),i&&(0,d.jsx)("h2",{className:"jsx-838978954 title",children:i})]}),(0,d.jsx)("div",{className:"jsx-838978954 project-container",children:l.filter((function(e){return 0===u.length||(t=u,i=e.types,t.filter((function(e){return i.indexOf(e)>-1}))).length>0;var t,i})).slice(0,p>0?p:l.length).map((function(e){var t="".concat(m,"/").concat(e.id);switch(a){case"card":return(0,x.createElement)(s.default,f(f({},e),{},{key:e.title,target:t}));case"bar":return(0,x.createElement)(o.default,f(f({},e),{},{key:e.title,target:t}));default:return(0,d.jsx)("div",{className:"jsx-838978954",children:"ERROR! \u672a\u77e5\u7684 view type"})}}))}),(0,d.jsx)(r.default,{id:"838978954",children:[".project-list.jsx-838978954{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:16px 16px 0;padding:16px 0 0;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:24px;}",".project-list.card.jsx-838978954 .header.jsx-838978954{margin-bottom:24px;}",".row.jsx-838978954{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 8px;width:100%;}",".icon.jsx-838978954{height:32px;width:32px;margin-right:8px;}",".title.jsx-838978954{font-size:2.25rem;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}",".project-container.jsx-838978954{width:576px;display:grid;grid-template-columns:repeat(1,1fr);}","@media (max-width:576px){.project-container.jsx-838978954{width:100%;}.row.jsx-838978954{padding:0 16px;}}"]})]})}m.defaultProps={icon:"",title:"",projectType:[],projectData:l.o8,view:"card",count:-1,target:"/project"},t.default=m},6124:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return p}});var n=i(4942),r=i(9008),s=i(4053),o=i(8307),l=i(2083),a=i(1432),c=i(5893);function d(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function x(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?d(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var p=!0;t.default=function(e){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.default,{alwaysShowTitle:!1}),(0,c.jsxs)("div",{className:"home",children:[(0,c.jsx)(a.default,{}),(0,c.jsxs)(r.default,{children:[(0,c.jsx)("title",{children:"Owen Sun"}),(0,c.jsx)("meta",{property:"og:title",content:"Owen Sun"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.png"})]}),(0,c.jsx)(o.default,x({},e.introData)),(0,c.jsx)(l.default,{icon:"/icons/code.svg",title:"\u524d\u7aef",projectType:"front-end"}),(0,c.jsx)(l.default,{icon:"/icons/box.svg",title:"\u904a\u6232",projectType:"game"})]})]})}},8581:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6124)}])},9008:function(e,t,i){e.exports=i(639)},1163:function(e,t,i){e.exports=i(4651)}},function(e){e.O(0,[599,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);