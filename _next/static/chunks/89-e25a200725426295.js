(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){s=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},s=r(6273),u=r(387),c=r(7190);var l={};function f(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=u.useRouter(),a=i.default.useMemo((function(){var t=o(s.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?s.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,v=e.children,h=e.replace,m=e.shallow,g=e.scroll,y=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var b=(t=i.default.Children.only(v))&&"object"===typeof t&&t.ref,w=o(c.useIntersection({rootMargin:"200px"}),2),E=w[0],x=w[1],S=i.default.useCallback((function(e){E(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,E]);i.default.useEffect((function(){var e=x&&r&&s.isLocalURL(d),t="undefined"!==typeof y?y:n&&n.locale,o=l[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,x,y,r,n]);var C={ref:S,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:i}))}(e,n,d,p,h,m,g,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof y?y:n&&n.locale,R=n&&n.isLocaleDomain&&s.getDomainLocale(p,L,n&&n.locales,n&&n.domainLocales);C.href=R||s.addBasePath(s.addLocale(p,L,n&&n.defaultLocale))}return i.default.cloneElement(t,C)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(u){s=!0,o=u}finally{try{i||null==r.return||r.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!s,l=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],v=o(a.useState(t?t.current:null),2),h=v[0],m=v[1],g=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),u.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:r}))}),[n,h,r,d]);return a.useEffect((function(){if(!s&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&m(t.current)}),[t]),[g,d]};var a=r(7294),i=r(9311),s="undefined"!==typeof IntersectionObserver;var u=new Map,c=[]},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)},7610:function(e,t,r){"use strict";r.d(t,{vx:function(){return d}});var n=r(7294);const o=(0,n.forwardRef)(((e,t)=>n.createElement("div",Object.assign({},e,{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",willChange:"clip",userSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none"},"data-rcs":"clip-item",ref:t}))));o.displayName="ContainerClip";const a=(0,n.forwardRef)((({children:e,portrait:t},r)=>{const o={position:"absolute",width:t?"100%":void 0,height:t?void 0:"100%",transform:t?"translateY(-50%)":"translateX(-50%)",pointerEvents:"all"};return n.createElement("div",{style:{position:"absolute",top:0,width:"100%",height:"100%",pointerEvents:"none"},"data-rcs":"handle-container",ref:r},n.createElement("div",{style:o},e))}));a.displayName="ThisHandleContainer";const i=({flip:e})=>{const t={width:0,height:0,borderTop:"8px solid transparent",borderRight:"10px solid",borderBottom:"8px solid transparent",transform:e?"rotate(180deg)":void 0};return n.createElement("div",{style:t})},s=({portrait:e,buttonStyle:t,linesStyle:r,style:o,...a})=>{const s={display:"flex",flexDirection:e?"row":"column",placeItems:"center",height:"100%",cursor:e?"ns-resize":"ew-resize",pointerEvents:"none",color:"#fff",...o},u={flexGrow:1,height:e?2:"100%",width:e?"100%":2,backgroundColor:"currentColor",pointerEvents:"auto",boxShadow:"0 0 7px rgba(0,0,0,.35)",...r},c={display:"grid",gridAutoFlow:"column",gap:8,placeContent:"center",flexShrink:0,width:56,height:56,borderRadius:"50%",borderStyle:"solid",borderWidth:2,pointerEvents:"auto",backdropFilter:"blur(7px)",WebkitBackdropFilter:"blur(7px)",boxShadow:"0 0 7px rgba(0,0,0,.35)",transform:e?"rotate(90deg)":void 0,...t};return n.createElement("div",Object.assign({className:"__rcs-handle-root"},a,{style:s}),n.createElement("div",{className:"__rcs-handle-line",style:u}),n.createElement("div",{className:"__rcs-handle-button",style:c},n.createElement(i,null),n.createElement(i,{flip:!0})),n.createElement("div",{className:"__rcs-handle-line",style:u}))},u=(e,t,r,o)=>{const a=(0,n.useRef)();(0,n.useEffect)((()=>{a.current=t}),[t]),(0,n.useEffect)((()=>{if(!r||!r.addEventListener)return;const t=e=>a.current&&a.current(e);return r.addEventListener(e,t,o),()=>{r.removeEventListener(e,t,o)}}),[e,r,o])},c="undefined"!==typeof window&&window.document&&window.document.createElement?n.useLayoutEffect:n.useEffect,l={passive:!0},f={capture:!0,passive:!1},d=({handle:e,itemOne:t,itemTwo:r,onlyHandleDraggable:i=!1,onPositionChange:d,portrait:p=!1,position:v=50,boundsPadding:h=0,changePositionOnHover:m=!1,style:g,...y})=>{const b=(0,n.useRef)(null),w=(0,n.useRef)(null),E=(0,n.useRef)(null),x=(0,n.useRef)(v),S=(e=>{const t=(0,n.useRef)(e);return(0,n.useEffect)((()=>{t.current=e})),t.current})(v),[C,L]=(0,n.useState)(!1),R=(0,n.useRef)(!1),[k,M]=(0,n.useState)(),[O,_]=(0,n.useState)(!1);(0,n.useEffect)((()=>{M(i?E.current:b.current)}),[i]);const A=(0,n.useCallback)((function({x:e,y:t,isOffset:r,portrait:n,boundsPadding:o}){const{top:a,left:i,width:s,height:u}=b.current.getBoundingClientRect();if(0===s||0===u)return;const c=Math.min(Math.max(n?r?t-a-window.pageYOffset:t:r?e-i-window.pageXOffset:e,0),n?u:s),l=n?u/(b.current.offsetHeight||1):s/(b.current.offsetWidth||1),f=c/l,p=s/l,v=u/l,h=f/(n?v:p)*100,m=n?0===f||f===v:0===f||f===p,g=h===x.current&&(0===x.current||100===x.current);if(O&&g&&m)return;_(!0),x.current=h;const y=Math.min(Math.max(f,0+o),(n?v:p)-o);w.current.style.clip=n?`rect(auto,auto,${y}px,auto)`:`rect(auto,${y}px,auto,auto)`,E.current.style.transform=n?`translate3d(0,${y}px,0)`:`translate3d(${y}px,0,0)`,d&&d(x.current)}),[O,d]);(0,n.useEffect)((()=>{const{width:e,height:t}=b.current.getBoundingClientRect(),r=v===S?x.current:v;A({portrait:p,boundsPadding:h,x:e/100*r,y:t/100*r})}),[p,v,S,h,A]);const j=(0,n.useCallback)((e=>{e.preventDefault(),A({portrait:p,boundsPadding:h,isOffset:!0,x:e instanceof MouseEvent?e.pageX:e.touches[0].pageX,y:e instanceof MouseEvent?e.pageY:e.touches[0].pageY}),L(!0)}),[p,h,A]),I=(0,n.useCallback)((function(e){A({portrait:p,boundsPadding:h,isOffset:!0,x:e instanceof MouseEvent?e.pageX:e.touches[0].pageX,y:e instanceof MouseEvent?e.pageY:e.touches[0].pageY})}),[p,h,A]),U=(0,n.useCallback)((()=>{L(!1)}),[]),P=(0,n.useCallback)((({width:e,height:t})=>{const{width:r,height:n}=b.current.getBoundingClientRect();A({portrait:p,boundsPadding:h,x:e/100*x.current*r/e,y:t/100*x.current*n/t})}),[p,h,A]);(0,n.useEffect)((()=>(C&&!R.current&&(window.addEventListener("mousemove",I,l),window.addEventListener("mouseup",U,l),window.addEventListener("touchmove",I,l),window.addEventListener("touchend",U,l),R.current=!0),()=>{R.current&&(window.removeEventListener("mousemove",I),window.removeEventListener("mouseup",U),window.removeEventListener("touchmove",I),window.removeEventListener("touchend",U),R.current=!1)})),[I,U,C]),((e,t)=>{const r=(0,n.useRef)(),o=(0,n.useCallback)((()=>{e.current&&r.current&&r.current.observe(e.current)}),[e]);c((()=>(r.current=new ResizeObserver((([e])=>t(e.contentRect))),o(),()=>{r.current&&r.current.disconnect()})),[t,o])})(b,P),(0,n.useEffect)((()=>{const e=b.current,t=()=>{C||U()};return m&&(e.addEventListener("mousemove",I,l),e.addEventListener("mouseleave",t,l)),()=>{e.removeEventListener("mousemove",I),e.removeEventListener("mouseleave",t)}}),[m,I,U,C]),u("mousedown",j,k,f),u("touchstart",j,k,f);const N=e||n.createElement(s,{portrait:p}),z={position:"relative",overflow:"hidden",cursor:C?p?"ns-resize":"ew-resize":void 0,userSelect:"none",KhtmlUserSelect:"none",msUserSelect:"none",MozUserSelect:"none",WebkitUserSelect:"none",...g};return n.createElement("div",Object.assign({},y,{ref:b,style:z,"data-rcs":"root"}),r,n.createElement(o,{ref:w},t),n.createElement(a,{portrait:p,ref:E},N))}}}]);