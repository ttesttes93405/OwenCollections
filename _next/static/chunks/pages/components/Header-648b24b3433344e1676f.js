(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{4184:function(e,t){var i;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var l=typeof i;if("string"===l||"number"===l)e.push(i);else if(Array.isArray(i)){if(i.length){var o=r.apply(null,i);o&&e.push(o)}}else if("object"===l)if(i.toString===Object.prototype.toString)for(var a in i)n.call(i,a)&&i[a]&&e.push(a);else e.push(i.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(i=function(){return r}.apply(t,[]))||(e.exports=i)}()},2167:function(e,t,i){"use strict";var n=i(3038);t.default=void 0;var r,l=(r=i(7294))&&r.__esModule?r:{default:r},o=i(1063),a=i(4651),s=i(7426);var c={};function d(e,t,i,n){if(e&&o.isLocalURL(t)){e.prefetch(t,i,n).catch((function(e){0}));var r=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+i+(r?"%"+r:"")]=!0}}var f=function(e){var t,i=!1!==e.prefetch,r=a.useRouter(),f=l.default.useMemo((function(){var t=o.resolveHref(r,e.href,!0),i=n(t,2),l=i[0],a=i[1];return{href:l,as:e.as?o.resolveHref(r,e.as):a||l}}),[r,e.href,e.as]),x=f.href,p=f.as,u=e.children,m=e.replace,y=e.shallow,h=e.scroll,b=e.locale;"string"===typeof u&&(u=l.default.createElement("a",null,u));var w=(t=l.default.Children.only(u))&&"object"===typeof t&&t.ref,g=s.useIntersection({rootMargin:"200px"}),_=n(g,2),k=_[0],j=_[1],v=l.default.useCallback((function(e){k(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,k]);l.default.useEffect((function(){var e=j&&i&&o.isLocalURL(x),t="undefined"!==typeof b?b:r&&r.locale,n=c[x+"%"+p+(t?"%"+t:"")];e&&!n&&d(r,x,p,{locale:t})}),[p,x,j,b,i,r]);var N={ref:v,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,i,n,r,l,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(i))&&(e.preventDefault(),null==a&&n.indexOf("#")>=0&&(a=!1),t[r?"replace":"push"](i,n,{shallow:l,locale:s,scroll:a}))}(e,r,x,p,m,y,h,b)},onMouseEnter:function(e){o.isLocalURL(x)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(r,x,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var Z="undefined"!==typeof b?b:r&&r.locale,E=r&&r.isLocaleDomain&&o.getDomainLocale(p,Z,r&&r.locales,r&&r.domainLocales);N.href=E||o.addBasePath(o.addLocale(p,Z,r&&r.defaultLocale))}return l.default.cloneElement(t,N)};t.default=f},7426:function(e,t,i){"use strict";var n=i(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!o,s=r.useRef(),c=r.useState(!1),d=n(c,2),f=d[0],x=d[1],p=r.useCallback((function(e){s.current&&(s.current(),s.current=void 0),i||f||e&&e.tagName&&(s.current=function(e,t,i){var n=function(e){var t=e.rootMargin||"",i=a.get(t);if(i)return i;var n=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return a.set(t,i={id:t,observer:r,elements:n}),i}(i),r=n.id,l=n.observer,o=n.elements;return o.set(e,t),l.observe(e),function(){o.delete(e),l.unobserve(e),0===o.size&&(l.disconnect(),a.delete(r))}}(e,(function(e){return e&&x(e)}),{rootMargin:t}))}),[i,t,f]);return r.useEffect((function(){if(!o&&!f){var e=l.requestIdleCallback((function(){return x(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[f]),[p,f]};var r=i(7294),l=i(3447),o="undefined"!==typeof IntersectionObserver;var a=new Map},4053:function(e,t,i){"use strict";i.r(t);var n=i(5988),r=i(1664),l=i(1163),o=i(4184),a=i.n(o),s=i(4169),c=i(7294),d=i(9052),f=i(5893);function x(e){var t=e.icon,i=void 0===t?"/Owen01.jpg":t,o=e.title,x=void 0===o?"OWENSUN.INFO":o,p=e.rootPath,u=void 0===p?"/":p,m=e.isShowType,y=void 0===m||m,h=e.alwaysShowTitle,b=void 0===h||h,w=e.paths,g=void 0===w?[]:w,_=(0,c.useState)(!1),k=_[0],j=_[1],v=(0,c.useState)(!0),N=v[0],Z=v[1],E=function(){Z(window.scrollY<30)},L=((0,c.useEffect)((function(){var e=window;return e.addEventListener("scroll",E),function(){e.removeEventListener("scroll",E)}}),[]),(0,l.useRouter)()),O=function(e){return L.asPath==e};return(0,f.jsxs)("nav",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" "+(a()("header",{"on-top":N,"always-show-title":b})||""),children:[(0,f.jsxs)("div",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" container",children:[(0,f.jsxs)("div",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" title-container",children:[(0,f.jsx)(r.default,{href:u,children:(0,f.jsxs)("a",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" title-path",children:[(0,f.jsx)("img",{src:i,className:n.default.dynamic([["3828286084",[s.Z.main]]])+" icon"}),(0,f.jsx)("p",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" title",children:x})]})}),g.map((function(e){return(0,f.jsxs)("div",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" title-path",children:[(0,f.jsx)("span",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" slash",children:"/"}),(0,f.jsx)("img",{src:e.icon,className:n.default.dynamic([["3828286084",[s.Z.main]]])+" icon"}),(0,f.jsx)("p",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" title",children:e.title})]},e.title)}))]}),(0,f.jsx)("div",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" flex-space"}),k?null:(0,f.jsx)("div",{onClick:function(){return j(!k)},className:n.default.dynamic([["3828286084",[s.Z.main]]])+" route-menu-btn",children:(0,f.jsx)("img",{src:"/icons/menu.svg",className:n.default.dynamic([["3828286084",[s.Z.main]]])})}),(0,f.jsxs)("div",{onClick:function(){return j(!k)},className:n.default.dynamic([["3828286084",[s.Z.main]]])+" "+(a()("route-container",{"show-route":k})||""),children:[(0,f.jsx)(r.default,{href:u,children:(0,f.jsxs)("a",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" "+(a()("home","route",{"route-current":O("/")})||""),children:[(0,f.jsx)("img",{src:"/icons/home.svg",className:n.default.dynamic([["3828286084",[s.Z.main]]])+" route-icon"}),(0,f.jsx)("p",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" route-title",children:"\u9996\u9801"})]})},"home"),y&&d.TZ.map((function(e){var t="/type/".concat(e.id);return(0,f.jsx)(r.default,{href:t,children:(0,f.jsxs)("a",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" "+(a()("route",{"route-current":O(t)})||""),children:[(0,f.jsx)("img",{src:e.icon,className:n.default.dynamic([["3828286084",[s.Z.main]]])+" route-icon"}),(0,f.jsx)("p",{className:n.default.dynamic([["3828286084",[s.Z.main]]])+" route-title",children:e.title})]})},e.id)}))]})]}),(0,f.jsx)(n.default,{id:"3828286084",dynamic:[s.Z.main],children:[".header.__jsx-style-dynamic-selector{position:fixed;height:60px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:#fff;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;margin:0;top:0;z-index:10;box-shadow:1px 2px 18px rgba(0,0,0,10%);-webkit-transition:box-shadow 0.3s,height 0.3s,padding-top 0.3s;transition:box-shadow 0.3s,height 0.3s,padding-top 0.3s;}",".header.on-top.__jsx-style-dynamic-selector{box-shadow:1px 2px 18px rgba(0,0,0,0%);height:120px;padding-top:60px;}",".container.__jsx-style-dynamic-selector{max-width:576px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".slash.__jsx-style-dynamic-selector{margin:0 8px 0 2px;padding:0;color:#aaa;}",".title-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:350px;opacity:1;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;}",".title-path.__jsx-style-dynamic-selector{height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:230px;}",".on-top.__jsx-style-dynamic-selector .title-container.__jsx-style-dynamic-selector{opacity:0;}",".always-show-title.__jsx-style-dynamic-selector .title-container.__jsx-style-dynamic-selector{opacity:1;}",".icon.__jsx-style-dynamic-selector{width:30px;height:30px;border-radius:9999px;}",".title.__jsx-style-dynamic-selector{font-size:1.35rem;margin:0;margin-left:8px;color:rgba(0,0,0,0.65);font-weight:500;text-overflow :ellipsis;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;height:30px;line-height:30px;overflow:hidden;white-space:nowrap;}",".title-path.__jsx-style-dynamic-selector:first-child{cursor:pointer;padding:4px 8px;height:40px;}",".title-path.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector:hover{border-radius:8px;background-color:#f4f4f4be;}",".title-path.__jsx-style-dynamic-selector:first-child .title.__jsx-style-dynamic-selector{max-width:60px;}",".title-path.__jsx-style-dynamic-selector:last-child .title.__jsx-style-dynamic-selector{display:inline-block;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden;max-width:300px;}",".flex-space.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;min-width:30px;}",".route-menu-btn.__jsx-style-dynamic-selector{display:none;}",".route-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".route.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:8px 16px;margin-left:8px;background-color:#f0f0f000;-webkit-transition:background-color 0.15s;transition:background-color 0.15s;}",".route.__jsx-style-dynamic-selector:not(.route-current):hover{background-color:#f4f4f4be;}",".route-current.__jsx-style-dynamic-selector{position:relative;background-color:#f4f4f4;}",".route-icon.__jsx-style-dynamic-selector{width:18px;height:18px;margin-right:4px;}",".route-title.__jsx-style-dynamic-selector{font-size:1.35rem;margin:0;padding:0;color:#555;}",".route-current.__jsx-style-dynamic-selector .route-title.__jsx-style-dynamic-selector{color:#333;}",".home.__jsx-style-dynamic-selector{display:none;}","@media (max-width:576px){.header.__jsx-style-dynamic-selector{padding-left:16px;}.header.on-top.__jsx-style-dynamic-selector{padding-top:0;height:60px;}.route-container.__jsx-style-dynamic-selector{display:none;position:relative;}.route-container.__jsx-style-dynamic-selector::after{content:'';position:absolute;top:20px;right:20px;background-image:url(\"/icons/x.svg\");background-size:20px 20px;height:20px;width:20px;}.route-container.show-route.__jsx-style-dynamic-selector{position:fixed;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(255,255,255,0.95);}.route.__jsx-style-dynamic-selector{background-color:#ffffff;overflow:hidden;width:200px;margin-left:0;margin-bottom:16px;padding:12px 24px;border:1px #ddd solid;}.route-icon.__jsx-style-dynamic-selector{width:24px;height:24px;margin-right:16px;}.route-title.__jsx-style-dynamic-selector{font-size:1.5rem;margin:0;padding:0;color:#555;}.route-current.__jsx-style-dynamic-selector{border:2px ".concat(s.Z.main," solid;border-left-width:16px;padding-right:36px;}.route-current.__jsx-style-dynamic-selector::after{display:none;bottom:0;top:0;left:0;width:10px;height:auto;}.route-menu-btn.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60px;height:60px;padding:20px;}.title-path.__jsx-style-dynamic-selector:first-child .title.__jsx-style-dynamic-selector{display:none;}.title-path.__jsx-style-dynamic-selector:last-child .title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.home.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}")]})]})}x.defaultProps={icon:"/Owen01.jpg",title:"OWENSUN.INFO",alwaysShowTitle:!0},t.default=x},5215:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Header",function(){return i(4053)}])},1664:function(e,t,i){e.exports=i(2167)},1163:function(e,t,i){e.exports=i(4651)}},function(e){e.O(0,[774,888,179],(function(){return t=5215,e(e.s=t);var t}));var t=e.O();_N_E=t}]);