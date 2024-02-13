(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{4184:function(e,i){var t;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],i=0;i<arguments.length;i++){var t=arguments[i];if(t){var n=typeof t;if("string"===n||"number"===n)e.push(t);else if(Array.isArray(t)){if(t.length){var s=o.apply(null,t);s&&e.push(s)}}else if("object"===n){if(t.toString===Object.prototype.toString)for(var a in t)r.call(t,a)&&t[a]&&e.push(a);else e.push(t.toString())}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0!==(t=(function(){return o}).apply(i,[]))&&(e.exports=t)}()},394:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return t(5702)}])},5702:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return d}});var r=t(5893),o=t(9554),n=t.n(o),s=t(9008),a=t.n(s),l=t(8506),c=t(5684);function d(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{className:"jsx-176c42dae8b8b86f",children:"Owen Sun"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.png",className:"jsx-176c42dae8b8b86f"})]}),(0,r.jsx)(l.default,{}),(0,r.jsxs)("div",{className:"jsx-176c42dae8b8b86f",children:[(0,r.jsxs)("div",{className:"jsx-176c42dae8b8b86f messagebox",children:[(0,r.jsx)("h1",{className:"jsx-176c42dae8b8b86f",children:"404"}),(0,r.jsx)("p",{className:"jsx-176c42dae8b8b86f",children:"找不到這個頁面"})]}),(0,r.jsx)(c.default,{icon:"/icons/notebook.svg",title:"其他專案",projectType:["front-end","game"],view:"bar",target:"/project"})]}),(0,r.jsx)(n(),{id:"176c42dae8b8b86f",children:".messagebox.jsx-176c42dae8b8b86f{text-align:center;padding:50px 0 80px;margin:50px 0 150px;background-color:#f8f8f8;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}.messagebox.jsx-176c42dae8b8b86f h1.jsx-176c42dae8b8b86f{font-size:5rem;margin:20px 0;padding:0}.messagebox.jsx-176c42dae8b8b86f p.jsx-176c42dae8b8b86f{font-size:1.5rem;margin:0;padding:0;color:#666}@media(min-width:576px){.project-container.jsx-176c42dae8b8b86f{width:100%}}"})]})}},8506:function(e,i,t){"use strict";t.r(i);var r=t(5893),o=t(9554),n=t.n(o),s=t(1664),a=t.n(s),l=t(1163),c=t(4184),d=t.n(c),x=t(1615),m=t(7294),p=t(218),f=t(7333);let b=(0,f.zo)("nav",{position:"fixed",width:"100%",display:"flex",flexDirection:"row",backgroundColor:"#ffffff",alignItems:"center",justifyContent:"center",padding:0,margin:0,top:0,zIndex:10,transition:"box-shadow 0.3s, height 0.3s, padding-top 0.3s",boxShadow:"1px 2px 18px rgba(0, 0, 0, 10%)",height:60,variants:{isOnTop:{true:{boxShadow:"1px 2px 18px rgba(0, 0, 0, 0%)","@s":{},"@l":{height:120,paddingTop:60}},false:{}}},"@s":{paddingLeft:4}}),u=(0,f.zo)("div",{maxWidth:576,display:"flex",flexDirection:"row",flexGrow:1,height:"100%",alignItems:"center"}),h=(0,f.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center",maxWidth:350,opacity:1,variants:{isHide:{true:{opacity:0},false:{}}}}),g=(0,f.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center",height:60,maxWidth:230,borderRadius:8,"& .slash":{margins:[0,8,0,2],padding:0,color:"#a0a0a0"},"& .icon":{size:30,borderRadius:9999},"& .title":{fontSize:"1.35rem",margin:0,marginLeft:8,color:"rgba(0, 0, 0, 0.65)",fontWeight:500,textOverflow:"ellipsis",height:30,lineHeight:"30px",overflow:"hidden",whiteSpace:"nowrap",display:"inline-block",flexShrink:1},"&:first-child":{maxWidth:120,cursor:"pointer",paddings:[4,8],height:40,"&:hover":{backgroundColor:"#f4f4f4be"}},"&:last-child":{maxWidth:300},"@s":{"&:first-child .title":{display:"none"},"&:last-child .title":{display:"flex"}}}),y=(0,f.zo)("span",{flexGrow:1,minWidth:30});function j(e){let{icon:i="/Owen01.jpg",title:t="OWENSUN.INFO",rootPath:o="/",isShowType:s=!0,hideTitleWhenTop:c=!1,paths:f=[]}=e,[j,w]=(0,m.useState)(!1),[v,k]=(0,m.useState)(!0),_=()=>{k(window.scrollY<30)};(0,m.useEffect)(()=>{let e=window;return e.addEventListener("scroll",_),()=>{e.removeEventListener("scroll",_)}},[]);let z=(0,l.useRouter)(),N=e=>z.asPath==e;return(0,r.jsxs)(b,{isOnTop:v,children:[(0,r.jsxs)(u,{children:[(0,r.jsxs)(h,{isHide:c&&v,children:[(0,r.jsx)(a(),{href:o,children:(0,r.jsxs)(g,{children:[(0,r.jsx)("img",{src:i,className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" icon"}),(0,r.jsx)("p",{className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" title",children:t})]})}),f.map(e=>(0,r.jsxs)(g,{children:[(0,r.jsx)("span",{className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" slash",children:"/"}),(0,r.jsx)("img",{src:e.icon,className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" icon"}),(0,r.jsx)("p",{className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" title",children:e.title})]},e.title))]}),(0,r.jsx)(y,{}),j?null:(0,r.jsx)("div",{onClick:()=>w(!j),className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" route-menu-btn",children:(0,r.jsx)("img",{src:"/icons/menu.svg",className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])})}),(0,r.jsxs)("div",{onClick:()=>w(!j),className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" "+(d()("route-container",{"show-route":j})||""),children:[(0,r.jsx)(a(),{href:o,children:(0,r.jsxs)("div",{className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" "+(d()("home","route",{"route-current":N("/")})||""),children:[(0,r.jsx)("img",{src:"/icons/home.svg",className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" route-icon"}),(0,r.jsx)("p",{className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" route-title",children:"首頁"})]})},"home"),s&&p.TZ.map(e=>{let i="/type/".concat(e.id);return(0,r.jsx)(a(),{href:i,children:(0,r.jsxs)("div",{className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" "+(d()("route",{"route-current":N(i)})||""),children:[(0,r.jsx)("img",{src:e.icon,className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" route-icon"}),(0,r.jsx)("p",{className:n().dynamic([["17e558881a9740bf",[x.Z.main]]])+" route-title",children:e.title})]})},e.id)})]})]}),(0,r.jsx)(n(),{id:"17e558881a9740bf",dynamic:[x.Z.main],children:'.route-menu-btn.__jsx-style-dynamic-selector{display:none}.route-container.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.route.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;padding:8px 16px;margin-left:8px;background-color:#f0f0f000;-webkit-transition:background-color.15s;-moz-transition:background-color.15s;-o-transition:background-color.15s;transition:background-color.15s}.route.__jsx-style-dynamic-selector:not(.route-current):hover{background-color:#f4f4f4be}.route-current.__jsx-style-dynamic-selector{position:relative;background-color:#f4f4f4}.route-icon.__jsx-style-dynamic-selector{width:18px;height:18px;margin-right:4px}.route-title.__jsx-style-dynamic-selector{font-size:1.35rem;margin:0;padding:0;color:#555}.route-current.__jsx-style-dynamic-selector .route-title.__jsx-style-dynamic-selector{color:#333}.home.__jsx-style-dynamic-selector{display:none}@media(max-width:576px){.header.__jsx-style-dynamic-selector{padding-left:16px}.header.on-top.__jsx-style-dynamic-selector{padding-top:0;height:60px}.route-container.__jsx-style-dynamic-selector{display:none;position:relative}.route-container.__jsx-style-dynamic-selector::after{content:"";position:absolute;top:20px;right:20px;background-image:url("/icons/x.svg");-webkit-background-size:20px 20px;-moz-background-size:20px 20px;-o-background-size:20px 20px;background-size:20px 20px;height:20px;width:20px}.route-container.show-route.__jsx-style-dynamic-selector{position:fixed;left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(255,255,255,.95)}.route.__jsx-style-dynamic-selector{background-color:#fff;overflow:hidden;width:200px;margin-left:0;margin-bottom:16px;padding:12px 24px;border:1px#ddd solid}.route-icon.__jsx-style-dynamic-selector{width:24px;height:24px;margin-right:16px}.route-title.__jsx-style-dynamic-selector{font-size:1.5rem;margin:0;padding:0;color:#555}.route-current.__jsx-style-dynamic-selector{border:2px '.concat(x.Z.main," solid;border-left-width:16px;padding-right:36px}.route-current.__jsx-style-dynamic-selector::after{display:none;bottom:0;top:0;left:0;width:10px;height:auto}.route-menu-btn.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:60px;height:60px;padding:20px}.home.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}}")})]})}j.defaultProps={icon:"/Owen01.jpg",title:"OWENSUN.INFO",rootPath:"/",isShowType:!0,paths:[]},i.default=j},7811:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return p}});var r=t(5893),o=t(5375);t(1615);var n=t(1664),s=t.n(n),a=t(7333);let l=(0,a.zo)("div",{position:"relative",display:"flex",flexDirection:"column",width:576,maxWidth:"100vw",marginBottom:70,backgroundColor:"#fafafa",boxShadow:"0 0 0 5px #fafafa",display:"flex",flexDirection:"column","@s":{borderRadius:0,paddings:[12,12,32]},"@l":{borderRadius:12,padding:16,transition:"background-color 0.2s, box-shadow 0.3s","&:hover":{boxShadow:"0 0 0 10px #fafafa, 0 0 0 11px #00000008"}}}),c=(0,a.zo)("div",{}),d=(0,a.zo)("div",{display:"flex",flexDirection:"row",alignItems:"start",marginTop:32}),x=(0,a.zo)("img",{size:64,borderRadius:16,marginRight:16,boxShadow:"0 0 8px #00000018",userSelect:"none"}),m=(0,a.zo)("div",{display:"flex",flexDirection:"column",flexGrow:0,"& .title":{fontSize:"1.9rem",color:"#000000",fontWeight:700,margin:0},"& .subtitle":{fontSize:"1.3rem",color:"#606060",margins:[2,0],fontWeight:300}});function p(e){let{id:i,icon:t,title:n,subtitle:a,cover:p,target:f}=e,b={...p,link:f,linkTarget:"_self"};return(0,r.jsxs)(l,{className:"project",children:[(0,r.jsx)(c,{children:(0,r.jsx)(o.default,{cover:b})}),(0,r.jsx)(s(),{href:f,children:(0,r.jsxs)(d,{children:[(0,r.jsx)(x,{src:t}),(0,r.jsxs)(m,{children:[(0,r.jsx)("h2",{className:"title",children:n}),a?(0,r.jsx)("p",{className:"subtitle",children:a}):null]})]})})]})}p.defaultProps={icon:"",title:"",subtitle:"",cover:"",content:"",links:[],target:""}},4703:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return x}});var r=t(5893);t(1615);var o=t(1664),n=t.n(o),s=t(7333);let a=(0,s.zo)("div",{position:"relative",display:"flex",flexDirection:"column",padding:4,borderRadius:14,margins:[0,0,4,0],boxSizing:"border-box",cursor:"pointer",overflow:"hidden","&:hover":{backgroundColor:"#f8f8f8"},"@s":{margins:[0,12]},"@l":{}}),l=(0,s.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center"}),c=(0,s.zo)("img",{size:52,borderRadius:12,margin:4,marginRight:16,boxShadow:"0 0 8px #00000018"}),d=(0,s.zo)("div",{maxWidth:"calc(100% - 90px)","& .title":{fontSize:"1.6rem",color:"#000000",fontWeight:600,margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},"& .subtitle":{fontSize:"1.2rem",color:"#888888",margin:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"100%"}});function x(e){let{id:i,icon:t,title:o,subtitle:s,target:x}=e;return(0,r.jsx)(n(),{href:x,children:(0,r.jsx)(a,{children:(0,r.jsxs)(l,{children:[(0,r.jsx)(c,{src:t}),(0,r.jsxs)(d,{children:[(0,r.jsx)("h2",{className:"title",children:o}),(0,r.jsx)("p",{className:"subtitle",children:s})]})]})})})}x.defaultProps={icon:"",title:"",subtitle:"",target:""}},5375:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return x}});var r=t(5893),o=t(9554),n=t.n(o);let s=(e,i)=>{let{source:t,ratio:o}=e;return(0,r.jsxs)("div",{style:i,className:n().dynamic([["15ce27334ab1fd96",[100*o]]])+" project-video",children:[(0,r.jsx)("video",{src:t,type:"video/mp4",autoPlay:!0,muted:!0,loop:!0,playsInline:!0,className:n().dynamic([["15ce27334ab1fd96",[100*o]]])+" cover"}),(0,r.jsx)(n(),{id:"15ce27334ab1fd96",dynamic:[100*o],children:".project-video.__jsx-style-dynamic-selector{width:100%;position:relative;padding-top:".concat(100*o,"%;background-color:rgba(0,0,0,.05);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.cover.__jsx-style-dynamic-selector{width:100%;height:100%;position:absolute;left:0;right:0;top:0;bottom:0}")})]})},a=(e,i)=>{let{source:t,ratio:o}=e;return(0,r.jsxs)("div",{style:i,className:n().dynamic([["87f36e9271df445a",[100*o]]])+" project-video",children:[(0,r.jsx)("iframe",{src:t,scrolling:"no",className:n().dynamic([["87f36e9271df445a",[100*o]]])+" cover"}),(0,r.jsx)(n(),{id:"87f36e9271df445a",dynamic:[100*o],children:".project-video.__jsx-style-dynamic-selector{width:100%;overflow:hidden;position:relative;padding-top:".concat(100*o,"%;background-color:rgba(0,0,0,.05);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.cover.__jsx-style-dynamic-selector{border-style:none;width:100%;height:100%;position:absolute;left:0;right:0;top:0;bottom:0}")})]})},l=(e,i)=>{let{source:t,ratio:o}=e;return(0,r.jsxs)("div",{style:i,className:n().dynamic([["e96512b2530e5200",[100*o,t]]])+" project-img",children:[(0,r.jsx)("div",{className:n().dynamic([["e96512b2530e5200",[100*o,t]]])+" cover"}),(0,r.jsx)(n(),{id:"e96512b2530e5200",dynamic:[100*o,t],children:".project-img.__jsx-style-dynamic-selector{width:100%;position:relative;padding-top:".concat(100*o,"%;background-color:rgba(0,0,0,.05);-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.cover.__jsx-style-dynamic-selector{width:100%;height:100%;position:absolute;background-image:url(").concat(t,");background-position:center;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;left:0;right:0;top:0;border:1px#eee solid;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}")})]})},c=(e,i)=>{let{link:t,linkTarget:o="_blank"}=e;return(0,r.jsx)("a",{href:t,rel:"noreferrer",target:o,style:i,children:l(e)})},d=(e,i)=>{let{link:t,linkTarget:o="_blank"}=e;return(0,r.jsx)("a",{href:t,rel:"noreferrer",target:o,style:i,children:s(e)})};function x(e){let{cover:i,style:t}=e;if(!i||!i.source)return null;let{type:r,link:o}=i;switch(r){case"mp4":return o?d(i,t):s(i,t);case"img":return o?c(i,t):l(i,t);case"embed":return a(i,t);default:return null}}},5684:function(e,i,t){"use strict";t.r(i);var r=t(5893),o=t(7294),n=t(7811),s=t(4703),a=t(218);t(4184);var l=t(7333);let c=(0,l.zo)("div",{position:"relative",display:"flex",flexDirection:"column",paddings:[16,0,24,0],flexGrow:1,width:"100%",alignItems:"center"}),d=(0,l.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center",width:"100%","& .icon":{size:28,marginRight:12},"& .title":{fontSize:"2.25rem",flexGrow:1,fontWeight:600},"@s":{paddings:[0,16]},"@l":{paddings:[0,8]}}),x=(0,l.zo)("div",{display:"grid",gridTemplateColumns:"repeat(1, 1fr)","@s":{width:"100%"},"@l":{width:576}}),m=(e,i)=>e.filter(e=>i.indexOf(e)>-1);function p(e){let{icon:i,title:t,projectType:a,projectData:l,view:p,count:f,target:b}=e,u=a?Array.isArray(a)?a:[a]:[];return(0,r.jsxs)(c,{children:[(0,r.jsxs)(d,{children:[i&&(0,r.jsx)("img",{className:"icon",src:i}),t&&(0,r.jsx)("h2",{className:"title",children:t})]}),(0,r.jsx)(x,{children:l.filter(e=>0===u.length||m(u,e.types).length>0).slice(0,f>0?f:l.length).map(e=>{let i="".concat(b,"/").concat(e.id);switch(p){case"card":return(0,o.createElement)(n.default,{...e,key:e.title,target:i});case"bar":return(0,o.createElement)(s.default,{...e,key:e.title,target:i});default:throw{name:"Unhandle project list view type",message:"未知的 view type: ".concat(p)}}})})]})}p.defaultProps={icon:"",title:"",projectType:[],projectData:a.o8,view:"card",count:-1,target:"/project"},i.default=p},1163:function(e,i,t){e.exports=t(3035)}},function(e){e.O(0,[664,888,774,179],function(){return e(e.s=394)}),_N_E=e.O()}]);