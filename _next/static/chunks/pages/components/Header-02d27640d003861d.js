(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[682],{5215:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Header",function(){return t(1450)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,u=(a=t(7294))&&a.__esModule?a:{default:a},i=t(6273),l=t(387),c=t(7190);var f={};function s(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[r+"%"+t+(o?"%"+o:"")]=!0}}var p=function(e){var r,t=!1!==e.prefetch,n=l.useRouter(),a=u.default.useMemo((function(){var r=o(i.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),p=a.href,d=a.as,v=e.children,y=e.replace,h=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=u.default.createElement("a",null,v));var g=(r=u.default.Children.only(v))&&"object"===typeof r&&r.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),E=w[0],_=w[1],I=u.default.useCallback((function(e){E(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,E]);u.default.useEffect((function(){var e=_&&t&&i.isLocalURL(p),r="undefined"!==typeof b?b:n&&n.locale,o=f[p+"%"+d+(r?"%"+r:"")];e&&!o&&s(n,p,d,{locale:r})}),[d,p,_,b,t,n]);var M={ref:I,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,u,l){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:l,scroll:u}))}(e,n,p,d,y,h,m,b)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(p)&&s(n,p,d,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var A="undefined"!==typeof b?b:n&&n.locale,C=n&&n.isLocaleDomain&&i.getDomainLocale(d,A,n&&n.locales,n&&n.domainLocales);M.href=C||i.addBasePath(i.addLocale(d,A,n&&n.defaultLocale))}return u.default.cloneElement(r,M)};r.default=p},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],u=!0,i=!1;try{for(t=t.call(e);!(u=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);u=!0);}catch(l){i=!0,o=l}finally{try{u||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!i,f=a.useRef(),s=o(a.useState(!1),2),p=s[0],d=s[1],v=o(a.useState(r?r.current:null),2),y=v[0],h=v[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||p||e&&e.tagName&&(f.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=l.get(n):(r=l.get(t),c.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return l.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,u=n.elements;return u.set(e,r),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),l.delete(o);var r=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&c.splice(r,1)}}}(e,(function(e){return e&&d(e)}),{root:y,rootMargin:t}))}),[n,y,t,p]);return a.useEffect((function(){if(!i&&!p){var e=u.requestIdleCallback((function(){return d(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){r&&h(r.current)}),[r]),[m,p]};var a=t(7294),u=t(9311),i="undefined"!==typeof IntersectionObserver;var l=new Map,c=[]},1664:function(e,r,t){e.exports=t(8418)}},function(e){e.O(0,[450,774,888,179],(function(){return r=5215,e(e.s=r);var r}));var r=e.O();_N_E=r}]);