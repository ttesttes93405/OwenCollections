(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53],{4184:function(e,t){var i;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)){if(i.length){var a=l.apply(null,i);a&&e.push(a)}}else if("object"===r)if(i.toString===Object.prototype.toString)for(var s in i)n.call(i,s)&&i[s]&&e.push(s);else e.push(i.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(i=function(){return l}.apply(t,[]))||(e.exports=i)}()},2167:function(e,t,i){"use strict";var n=i(3038);t.default=void 0;var l,r=(l=i(7294))&&l.__esModule?l:{default:l},a=i(1063),s=i(4651),o=i(7426);var c={};function d(e,t,i,n){if(e&&a.isLocalURL(t)){e.prefetch(t,i,n).catch((function(e){0}));var l=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;c[t+"%"+i+(l?"%"+l:"")]=!0}}var f=function(e){var t,i=!1!==e.prefetch,l=s.useRouter(),f=r.default.useMemo((function(){var t=a.resolveHref(l,e.href,!0),i=n(t,2),r=i[0],s=i[1];return{href:r,as:e.as?a.resolveHref(l,e.as):s||r}}),[l,e.href,e.as]),x=f.href,p=f.as,u=e.children,m=e.replace,y=e.shallow,h=e.scroll,b=e.locale;"string"===typeof u&&(u=r.default.createElement("a",null,u));var w=(t=r.default.Children.only(u))&&"object"===typeof t&&t.ref,g=o.useIntersection({rootMargin:"200px"}),_=n(g,2),k=_[0],j=_[1],v=r.default.useCallback((function(e){k(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,k]);r.default.useEffect((function(){var e=j&&i&&a.isLocalURL(x),t="undefined"!==typeof b?b:l&&l.locale,n=c[x+"%"+p+(t?"%"+t:"")];e&&!n&&d(l,x,p,{locale:t})}),[p,x,j,b,i,l]);var N={ref:v,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,i,n,l,r,s,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(i))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[l?"replace":"push"](i,n,{shallow:r,locale:o,scroll:s}))}(e,l,x,p,m,y,h,b)},onMouseEnter:function(e){a.isLocalURL(x)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),d(l,x,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var Z="undefined"!==typeof b?b:l&&l.locale,E=l&&l.isLocaleDomain&&a.getDomainLocale(p,Z,l&&l.locales,l&&l.domainLocales);N.href=E||a.addBasePath(a.addLocale(p,Z,l&&l.defaultLocale))}return r.default.cloneElement(t,N)};t.default=f},7426:function(e,t,i){"use strict";var n=i(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,i=e.disabled||!a,o=l.useRef(),c=l.useState(!1),d=n(c,2),f=d[0],x=d[1],p=l.useCallback((function(e){o.current&&(o.current(),o.current=void 0),i||f||e&&e.tagName&&(o.current=function(e,t,i){var n=function(e){var t=e.rootMargin||"",i=s.get(t);if(i)return i;var n=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),i=e.isIntersecting||e.intersectionRatio>0;t&&i&&t(i)}))}),e);return s.set(t,i={id:t,observer:l,elements:n}),i}(i),l=n.id,r=n.observer,a=n.elements;return a.set(e,t),r.observe(e),function(){a.delete(e),r.unobserve(e),0===a.size&&(r.disconnect(),s.delete(l))}}(e,(function(e){return e&&x(e)}),{rootMargin:t}))}),[i,t,f]);return l.useEffect((function(){if(!a&&!f){var e=r.requestIdleCallback((function(){return x(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[f]),[p,f]};var l=i(7294),r=i(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},4053:function(e,t,i){"use strict";i.r(t);var n=i(5988),l=i(1664),r=i(1163),a=i(4184),s=i.n(a),o=i(4169),c=i(7294),d=i(5788),f=i(5893);function x(e){var t=e.icon,i=void 0===t?"/Owen01.jpg":t,a=e.title,x=void 0===a?"OWENSUN.INFO":a,p=e.alwaysShowTitle,u=void 0===p||p,m=e.paths,y=void 0===m?[]:m,h=(0,c.useState)(!1),b=h[0],w=h[1],g=(0,c.useState)(!0),_=g[0],k=g[1],j=function(){k(window.scrollY<30)},v=((0,c.useEffect)((function(){var e=window;return e.addEventListener("scroll",j),function(){e.removeEventListener("scroll",j)}}),[]),(0,r.useRouter)()),N=function(e){return v.asPath==e};return(0,f.jsxs)("nav",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" "+(s()("header",{"on-top":_,"always-show-title":u})||""),children:[(0,f.jsxs)("div",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" container",children:[(0,f.jsxs)("div",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" title-container",children:[(0,f.jsx)(l.default,{href:"/",children:(0,f.jsxs)("a",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" title-path",children:[(0,f.jsx)("img",{src:i,className:n.default.dynamic([["3828286084",[o.Z.main]]])+" icon"}),(0,f.jsx)("p",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" title",children:x})]})}),y.map((function(e){return(0,f.jsxs)("div",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" title-path",children:[(0,f.jsx)("span",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" slash",children:"/"}),(0,f.jsx)("img",{src:e.icon,className:n.default.dynamic([["3828286084",[o.Z.main]]])+" icon"}),(0,f.jsx)("p",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" title",children:e.title})]},e.title)}))]}),(0,f.jsx)("div",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" flex-space"}),b?null:(0,f.jsx)("div",{onClick:function(){return w(!b)},className:n.default.dynamic([["3828286084",[o.Z.main]]])+" route-menu-btn",children:(0,f.jsx)("img",{src:"/icons/menu.svg",className:n.default.dynamic([["3828286084",[o.Z.main]]])})}),(0,f.jsxs)("div",{onClick:function(){return w(!b)},className:n.default.dynamic([["3828286084",[o.Z.main]]])+" "+(s()("route-container",{"show-route":b})||""),children:[(0,f.jsx)(l.default,{href:"/",children:(0,f.jsxs)("a",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" "+(s()("home","route",{"route-current":N("/")})||""),children:[(0,f.jsx)("img",{src:"/icons/home.svg",className:n.default.dynamic([["3828286084",[o.Z.main]]])+" route-icon"}),(0,f.jsx)("p",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" route-title",children:"\u9996\u9801"})]})},"home"),d.TZ.map((function(e){var t="/type/".concat(e.id);return(0,f.jsx)(l.default,{href:t,children:(0,f.jsxs)("a",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" "+(s()("route",{"route-current":N(t)})||""),children:[(0,f.jsx)("img",{src:e.icon,className:n.default.dynamic([["3828286084",[o.Z.main]]])+" route-icon"}),(0,f.jsx)("p",{className:n.default.dynamic([["3828286084",[o.Z.main]]])+" route-title",children:e.title})]})},e.id)}))]})]}),(0,f.jsx)(n.default,{id:"3828286084",dynamic:[o.Z.main],children:[".header.__jsx-style-dynamic-selector{position:fixed;height:60px;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background-color:#fff;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0;margin:0;top:0;z-index:10;box-shadow:1px 2px 18px rgba(0,0,0,10%);-webkit-transition:box-shadow 0.3s,height 0.3s,padding-top 0.3s;transition:box-shadow 0.3s,height 0.3s,padding-top 0.3s;}",".header.on-top.__jsx-style-dynamic-selector{box-shadow:1px 2px 18px rgba(0,0,0,0%);height:120px;padding-top:60px;}",".container.__jsx-style-dynamic-selector{max-width:576px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".slash.__jsx-style-dynamic-selector{margin:0 8px 0 2px;padding:0;color:#aaa;}",".title-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:350px;opacity:1;-webkit-transition:opacity 0.3s;transition:opacity 0.3s;}",".title-path.__jsx-style-dynamic-selector{height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:230px;}",".on-top.__jsx-style-dynamic-selector .title-container.__jsx-style-dynamic-selector{opacity:0;}",".always-show-title.__jsx-style-dynamic-selector .title-container.__jsx-style-dynamic-selector{opacity:1;}",".icon.__jsx-style-dynamic-selector{width:30px;height:30px;border-radius:9999px;}",".title.__jsx-style-dynamic-selector{font-size:1.35rem;margin:0;margin-left:8px;color:rgba(0,0,0,0.65);font-weight:500;text-overflow :ellipsis;-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1;height:30px;line-height:30px;overflow:hidden;white-space:nowrap;}",".title-path.__jsx-style-dynamic-selector:first-child{cursor:pointer;padding:4px 8px;height:40px;}",".title-path.__jsx-style-dynamic-selector:first-child.__jsx-style-dynamic-selector:hover{border-radius:8px;background-color:#f4f4f4be;}",".title-path.__jsx-style-dynamic-selector:first-child .title.__jsx-style-dynamic-selector{max-width:60px;}",".title-path.__jsx-style-dynamic-selector:last-child .title.__jsx-style-dynamic-selector{display:inline-block;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;overflow:hidden;max-width:300px;}",".flex-space.__jsx-style-dynamic-selector{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;min-width:30px;}",".route-menu-btn.__jsx-style-dynamic-selector{display:none;}",".route-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".route.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;padding:8px 16px;margin-left:8px;background-color:#f0f0f000;-webkit-transition:background-color 0.15s;transition:background-color 0.15s;}",".route.__jsx-style-dynamic-selector:not(.route-current):hover{background-color:#f4f4f4be;}",".route-current.__jsx-style-dynamic-selector{position:relative;background-color:#f4f4f4;}",".route-icon.__jsx-style-dynamic-selector{width:18px;height:18px;margin-right:4px;}",".route-title.__jsx-style-dynamic-selector{font-size:1.35rem;margin:0;padding:0;color:#555;}",".route-current.__jsx-style-dynamic-selector .route-title.__jsx-style-dynamic-selector{color:#333;}",".home.__jsx-style-dynamic-selector{display:none;}","@media (max-width:576px){.header.__jsx-style-dynamic-selector{padding-left:16px;}.header.on-top.__jsx-style-dynamic-selector{padding-top:0;height:60px;}.route-container.__jsx-style-dynamic-selector{display:none;position:relative;}.route-container.__jsx-style-dynamic-selector::after{content:'';position:absolute;top:20px;right:20px;background-image:url(\"/icons/x.svg\");background-size:20px 20px;height:20px;width:20px;}.route-container.show-route.__jsx-style-dynamic-selector{position:fixed;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(255,255,255,0.95);}.route.__jsx-style-dynamic-selector{background-color:#ffffff;overflow:hidden;width:200px;margin-left:0;margin-bottom:16px;padding:12px 24px;border:1px #ddd solid;}.route-icon.__jsx-style-dynamic-selector{width:24px;height:24px;margin-right:16px;}.route-title.__jsx-style-dynamic-selector{font-size:1.5rem;margin:0;padding:0;color:#555;}.route-current.__jsx-style-dynamic-selector{border:2px ".concat(o.Z.main," solid;border-left-width:16px;padding-right:36px;}.route-current.__jsx-style-dynamic-selector::after{display:none;bottom:0;top:0;left:0;width:10px;height:auto;}.route-menu-btn.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:60px;height:60px;padding:20px;}.title-path.__jsx-style-dynamic-selector:first-child .title.__jsx-style-dynamic-selector{display:none;}.title-path.__jsx-style-dynamic-selector:last-child .title.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.home.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}")]})]})}x.defaultProps={icon:"/Owen01.jpg",title:"OWENSUN.INFO",alwaysShowTitle:!0},t.default=x},1664:function(e,t,i){e.exports=i(2167)},1163:function(e,t,i){e.exports=i(4651)}}]);