(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5788:function(e,t,n){"use strict";n.d(t,{Av:function(){return r},o8:function(){return o},TZ:function(){return i}});var i=[{id:"front-end",title:"\u524d\u7aef",icon:"/icons/code.svg"},{id:"game",title:"\u904a\u6232",icon:"/icons/box.svg"}],r={title:"\u5b6b\u5b87",subtitle:"Owen Sun",picture:"Owen01.jpg",content:["\u524d\u7aef\u958b\u767c\u8005\u3001\u904a\u6232\u958b\u767c\u8005\u3002","\u559c\u6b61 UI/UX \u3001\u904a\u6232\u4e92\u52d5\u3001\u597d\u770b\u7684\u756b\u9762\u3002"],info:[{icon:"/icons/mail.svg",content:"ttesttes93405@gmail.com"}]},o=[{id:"1000website",title:"1000 Cheng \u4f5c\u54c1\u96c6\u7db2\u7ad9",icon:"/projects/1000-cheng-icon.jpg",date:"2021/8",subtitle:"\u70ba\u52d5\u614b\u8a2d\u8a08\u5e2b 1000 Cheng \u88fd\u4f5c\u7684\u4f5c\u54c1\u96c6\u7db2\u7ad9\u3002",type:"front-end",cover:{type:"img",source:"/projects/1000-cheng.jpg",ratio:9/16},content:[{contentType:"references",references:{cover:{contentType:"image",type:"img",link:"https://1000cheng.cc/",source:"/projects/1000-cheng.jpg",ratio:9/16},link:{contentType:"link",links:[{link:"https://github.com/10x10x10/website1000",title:"GitHub",icon:"/icons/github.png",theme:"github"},{link:"https://1000cheng.cc/",title:"\u524d\u5f80\u7db2\u7ad9",icon:""}]}}},"\n    \u70ba\u52d5\u614b\u8a2d\u8a08\u5e2b 1000 Cheng \u88fd\u4f5c\u7684\u4f5c\u54c1\u96c6\u7db2\u7ad9\u3002    \n    {{cover}}\n    \u4ee5 React.js + Next.js \u88fd\u4f5c\uff0c\u4ee5 SSG (Static Side Generation) \u7522\u51fa\u975c\u614b\u7db2\u7ad9\u3002\u7db2\u7ad9\u4f48\u7f72\u5728 GitHub Page\uff0c\u900f\u904e GitHub Action\uff0c\u5728 push commit \u6642\u81ea\u52d5\u5316\u5efa\u7f6e\u8207\u767c\u4f48\u3002\n\n    ---\n\n    ### \u70ba\u4ec0\u9ebc\u9078\u64c7 SSG\uff1f  \n    \u9078\u64c7 SSG (Static Side Generation) \uff0c\u662f\u8003\u91cf\u4e0b\u5217\u5e7e\u9ede\uff1a\n    - \u7531\u65bc\u662f\u4f5c\u54c1\u96c6\uff0c\u9700\u8981\u6709\u57fa\u672c\u7684 SEO\uff0c\u4f7f\u7528 SSG \u80fd\u65b9\u4fbf\u7684\u8655\u7406\u9019\u90e8\u5206\u3002\n    - \u4f5c\u54c1\u7684\u5167\u5bb9\u4e0d\u6703\u7d93\u5e38\u66f4\u52d5\uff0cGeneration \u7684\u6210\u672c\u4e0d\u6703\u592a\u9ad8\u3002\n    - \u5982\u679c\u4e0d\u7528 Server\uff0c\u6258\u7ba1\u6210\u672c\u8f03\u4f4e\u3002\n    \n\n    ### \u88fd\u4f5c\u904e\u7a0b\u6709\u9047\u5230\u4ec0\u9ebc\u554f\u984c\u55ce\uff1f    \n    \u6709\u7684\uff0c\u5728\u88fd\u4f5c\u9019\u500b\u7db2\u7ad9\u6642\uff0c\u8a2d\u8a08\u5e2b\u7684\u4f5c\u54c1\u5716\u7247\u3001\u5f71\u7247\u54c1\u8cea\u5f88\u9ad8\uff0c\u56e0\u6b64\u6a94\u6848\u5f88\u5927\uff0c\u9032\u5165\u9801\u9762\u6642\u6703\u660e\u986f\u611f\u5230\u5361\u9813\uff0c\u800c\u4e14\u5716\u7247\u6703\u8f09\u5165\u5f88\u4e45\u3002\n\n    \u900f\u904e\u63a1\u53d6\u4e00\u4e9b\u8655\u7406\uff0c\u8b93\u901f\u5ea6\u548c\u9ad4\u9a57\u80fd\u6539\u5584\uff1a\n    1. \u5148\u5c07\u5716\u7247\u8207\u5f71\u7247\u58d3\u7e2e\u6210\u4e0d\u81f3\u65bc\u592a\u5927\u3001\u4e5f\u4e0d\u81f3\u65bc\u72a7\u7272\u8996\u89ba\u5448\u73fe\u7684\u54c1\u8cea\u3002\n    2. \u5728\u5716\u7247\u8207\u5f71\u7247\u8b80\u53d6\u6642\uff0c\u6839\u64da\u8a72\u5716\u7247\u3001\u5f71\u7247\u5c3a\u5bf8\u9810\u5148\u6490\u51fa\u7a7a\u9593\uff0c\u907f\u514d\u4ed6\u5011\u8b80\u53d6\u5b8c\u6210\u5f8c\u4e00\u584a\u4e00\u584a\u51fa\u73fe\uff0c\u9020\u6210\u4e0d\u597d\u7684\u9ad4\u9a57\u3002\n    3. \u5728\u8b80\u53d6\u671f\u9593\u986f\u793a\u8b80\u53d6\u52d5\u756b\uff0c\u8b93\u4f7f\u7528\u8005\u66f4\u6709\u8010\u5fc3\u7b49\u5f85\u8b80\u53d6\u3002\n\n    \u7528\u4e86\u4e0a\u8ff0\u7684\u8655\u7406\u65b9\u5f0f\u5f8c\uff0c\u8b80\u53d6\u5f97\u66f4\u5feb\u3001\u4e5f\u4e0d\u6703\u611f\u5230\u5361\u9813\u4e86\u3002\n\n\n    {{link}}\n    "]},{id:"literary-dessert",title:"\u9ede\u5fc3\u6545\u4e8b Literary Dessert",icon:"/projects/LiteraryDessert.svg",date:"2016/7 - 2016/8",subtitle:"\u5927\u5b78\u6642\u671f\u559c\u6b61\u5beb\u4e00\u4e9b\u77ed\u7bc7\u6545\u4e8b\uff0c\u4e0d\u77e5\u4e0d\u89ba\u7bc7\u6578\u7d2f\u7a4d\u4e86\u4e0d\u5c11\u3002\n\u7562\u696d\u5f8c\uff0c\u4fbf\u7528\u696d\u9918\u6642\u9593\u88fd\u4f5c\u7db2\u7ad9\uff0c\u8b93\u4eba\u95b1\u8b80\u8207\u6536\u85cf\u9019\u4e9b\u6545\u4e8b\u3002",type:"front-end",cover:{type:"img",source:"/projects/LiteraryDessert.png",ratio:9/16},content:[{contentType:"references",references:{cover:{contentType:"image",type:"img",source:"/projects/LiteraryDessert.png",link:"https://ttesttes93405.github.io/LiteraryDessert/index.html",ratio:9/16},link:{contentType:"link",link:"https://ttesttes93405.github.io/LiteraryDessert/index.html",title:"\u524d\u5f80\u7db2\u7ad9",icon:""}}},"\n    {{cover}}\n    \u5927\u5b78\u6642\u671f\u559c\u6b61\u5beb\u4e00\u4e9b\u77ed\u7bc7\u6545\u4e8b\uff0c\u4e0d\u77e5\u4e0d\u89ba\u7bc7\u6578\u7d2f\u7a4d\u4e86\u4e0d\u5c11\u3002\n    \u7562\u696d\u5f8c\uff0c\u4fbf\u7528\u696d\u9918\u6642\u9593\u88fd\u4f5c\u7db2\u7ad9\uff0c\u8b93\u4eba\u95b1\u8b80\u8207\u6536\u85cf\u9019\u4e9b\u6545\u4e8b\u3002\n    \n    \u4f7f\u7528 Vue 2 \u4f86\u88fd\u4f5c\uff0c\u4e26\u4f7f\u7528 SASS \u64b0\u5beb\u6a23\u5f0f\u3002\n    \n\n    {{link}}\n    "]},{id:"fall-a-sleep",title:"Fall A Sleep",icon:"/projects/G2I.webp",date:"2021/4",subtitle:"\u65bc\u73a9\u7334\u904a\u6232 Macaca Games \u53c3\u8207\u88fd\u4f5c\u7684 Hyper-casual game\uff0c\u7d04\u82b1\u5169\u9031\u88fd\u4f5c\u3002",type:"game",cover:{type:"mp4",source:"https://res.cloudinary.com/dclfdbu9c/video/upload/v1626364397/OwenCollection/Fall%20A%20Sleep/Fall_A_Sleep_Video.mp4",ratio:1},content:[{contentType:"references",references:{cover:{contentType:"image",type:"mp4",source:"https://res.cloudinary.com/dclfdbu9c/video/upload/v1626364397/OwenCollection/Fall%20A%20Sleep/Fall_A_Sleep_Video.mp4",ratio:1},link:{contentType:"link",link:"https://play.google.com/store/apps/details?id=com.MacacaGames.G2_ProjectI",title:"Android \u4e0b\u8f09",icon:"/icons/android.svg"}}},"\n    {{cover}}\n    \u65bc\u73a9\u7334\u904a\u6232 Macaca Games \u53c3\u8207\u88fd\u4f5c\u7684 Hyper-casual game\uff0c\u7d04\u82b1\u5169\u9031\u88fd\u4f5c\u3002\n    \n\n    {{link}}\n    "]},{id:"sandwich101",title:"Sandwich 101",icon:"/projects/G2E.webp",date:"2021/2",subtitle:"\u65bc\u73a9\u7334\u904a\u6232 Macaca Games \u53c3\u8207\u88fd\u4f5c\u7684 Hyper-casual game\uff0c\u7d04\u82b1\u5169\u9031\u88fd\u4f5c\u3002",type:"game",cover:{type:"mp4",source:"https://res.cloudinary.com/dclfdbu9c/video/upload/v1626364392/OwenCollection/Sandwich%20101/Sanwich_101_Video.mp4",ratio:1},content:[{contentType:"references",references:{cover:{contentType:"image",type:"mp4",source:"https://res.cloudinary.com/dclfdbu9c/video/upload/v1626364392/OwenCollection/Sandwich%20101/Sanwich_101_Video.mp4",ratio:1},link:{contentType:"link",link:"https://play.google.com/store/apps/details?id=com.MacacaGames.G2_ProjectE",title:"Android \u4e0b\u8f09",icon:"/icons/android.svg"}}},"\n    {{cover}}\n    \u65bc\u73a9\u7334\u904a\u6232 Macaca Games \u53c3\u8207\u88fd\u4f5c\u7684 Hyper-casual game\uff0c\u7d04\u82b1\u5169\u9031\u88fd\u4f5c\u3002    \n\n    {{link}}\n    "]},{id:"sky-bandit",title:"Sky Bandit \u5929\u7a7a\u76dc\u8cca\u5718",icon:"/projects/SkyBandit.png",date:"2019/6 - 2020/12",subtitle:"\u65bc\u73a9\u7334\u904a\u6232 Macaca Games \u53c3\u8207\u88fd\u4f5c\u7684\u624b\u6a5f\u904a\u6232\u3002",type:"game",cover:{type:"img",source:"https://i.ytimg.com/vi_webp/Bt4rOBArpHs/sddefault.webp",ratio:9/16},cover_old:{type:"embed",source:"https://www.youtube.com/embed/Bt4rOBArpHs",ratio:9/16},content:[{contentType:"references",references:{cover:{contentType:"image",type:"embed",source:"https://www.youtube.com/embed/Bt4rOBArpHs",ratio:9/16},link:{contentType:"link",links:[{link:"https://play.google.com/store/apps/details?id=com.MacacaGames.SkyBandit",title:"Android \u4e0b\u8f09",icon:"/icons/android.svg"},{link:"https://apps.apple.com/app/id1499441526",title:"iOS \u4e0b\u8f09",icon:"/icons/apple.svg"}]}}},"\n    {{cover}}\n    \u65bc\u73a9\u7334\u904a\u6232 Macaca Games \u4efb\u8077\u5f8c\u53c3\u8207\u7684\u7b2c\u4e00\u500b\u5c08\u6848\uff0c\u5728\u5c08\u6848\u524d\u671f\u4e3b\u8981\u64d4\u4efb\u4f01\u5283\u3002\n    \u5f8c\u671f\u64d4\u4efb\u6280\u8853\u4f01\u5283\u53ca\u7a0b\u5f0f\u8a2d\u8a08\u4eba\u54e1\u3002\n\n    {{link}}\n    "]},{id:"macaca-games-tech-designer",title:"Macaca Games \u6280\u8853\u4f01\u5283",icon:"/projects/CloudMacaca.png",date:"2019/6 -",type:"experence",cover:{},content:"\u65bc\u73a9\u7334\u904a\u6232 Macaca Games \u4efb\u8077\u4f01\u5283\uff0c\u53c3\u8207\u300cSky Bandit \u5929\u7a7a\u76dc\u8cca\u5718\u300d\u958b\u767c\uff0c\u540c\u6642\u652f\u63f4\u5beb\u9edecode\uff0c\u4f46\u662f\u5beb\u7684code\u591a\u5230\u4e0d\u592a\u78ba\u5b9a\u81ea\u5df1\u8a72\u53eb\u4f01\u5283\u9084\u662f\u7a0b\u5f0f\u3002",links:[]},{id:"x-lengend-designer",title:"\u50b3\u5947\u7db2\u8def \u4f01\u5283",icon:"/projects/x-legend.jpg",subtitle:"2017/8 - 2019/5",type:"experence",cover:{},content:"\u5f9e2017\u5e74\u65bc\u50b3\u5947\u4efb\u8077\u4f01\u5283\uff0c\u53c3\u8207\u4ee5Unity\u958b\u767c\u7684\u624b\u904a\u5c08\u6848(\u672a\u4e0a\u5e02)\uff0c\u4e3b\u8981\u8ca0\u8cac\u7cfb\u7d71\u8207\u4ecb\u9762\uff0c\u898f\u5283\u529f\u80fd\u3001\u64b0\u5beb\u76f8\u95dc\u6587\u4ef6\u4e26\u8207\u7a0b\u5f0f\u6e9d\u901a\u3002",links:[]},{id:"google-play-bulid-taiwan-dream-droom",title:"GooglePlay \u7bc9\u5922\u53f0\u7063\u5c08\u5340",icon:"/projects/GooglePlay.jpg",date:"2018/1",type:"experence",cover:{type:"embed",source:"https://www.youtube-nocookie.com/embed/Quxd9ydNG4Q?rel=0&amp;showinfo=0",ratio:9/16},content:"\u53d7GooglePlay\u9080\u8acb\uff0c\u57282018\u53f0\u5317\u96fb\u73a9\u5c55\u7684GooglePlay\u7bc9\u5922\u53f0\u7063\u5c08\u5340\u5c55\u793a\u300cDROOM\u5922\u9580\u300d\uff0c\u9084\u70ba\u6b64\u91cf\u8eab\u8a02\u505a\u7cbe\u7f8e\u7684\u5f71\u7247\u3002",links:[]},{id:"the-hole",title:"The Hole",icon:"/projects/TheHole.svg",date:"2018/4",subtitle:"\u65bc 2018 Kuso Game Jam \u88fd\u4f5c\uff0c\u662f\u6703\u8b93\u4eba\u5f37\u8feb\u75c7\u767c\u4f5c\u7684\u5c0f\u904a\u6232\u3002",type:"game",cover:{type:"embed",source:"https://www.youtube-nocookie.com/embed/GNgrLjJVaRU?rel=0&amp;showinfo=0",ratio:1},content:[{contentType:"references",references:{cover:{contentType:"image",type:"embed",source:"https://www.youtube-nocookie.com/embed/GNgrLjJVaRU?rel=0&amp;showinfo=0",ratio:1},link:{contentType:"link",links:[{link:"http://longitude-exhibition.net/",title:"Longitude Exhibition",icon:""},{link:"https://sunyu.itch.io/the-hole",title:"\u73a9\u7db2\u9801\u7248",icon:""}]}}},"\n    {{cover}}\n    \u53c3\u52a02018 Kuso Game Jam\uff0c\u5728\u4e0d\u5230\u5169\u5929\u7684\u6642\u9593\u5167\u8fc5\u901f\u505a\u51fa\u904a\u6232\u539f\u578b\uff0c\u662f\u6703\u8b93\u4eba\u5f37\u8feb\u75c7\u767c\u4f5c\u7684\u5c0f\u904a\u6232\u3002\n    \u9019\u500b\u904a\u6232\u4e5f\u57282018\u768410-11\u6708\uff0c\u65bc\u6fb3\u6d32\u58a8\u723e\u672c\u7684 Longitude exhibition \u5c55\u51fa\u3002\n\n    {{link}}\n    "]},{id:"droom",title:"DROOM \u5922\u9580",date:"2016/5 -",subtitle:"\u8207\u53e6\u4e00\u4f19\u4f34\u4e00\u540c\u88fd\u4f5c\u7684\u624b\u6a5f\u904a\u6232\uff0c\u70ba\u5927\u5b78\u7562\u696d\u88fd\u4f5c\u4f5c\u54c1\u3002",type:"game",icon:"/projects/DROOM.png",cover:{type:"img",source:"https://i.ytimg.com/vi_webp/3N6houOggT4/sddefault.webp",ratio:9/16},content:[{contentType:"references",references:{cover:{contentType:"image",type:"embed",source:"https://www.youtube.com/embed/3N6houOggT4?rel=0&amp;showinfo=0",ratio:9/16}}},"\n    {{cover}}\n    \u8207\u53e6\u4e00\u4f19\u4f34\u4e00\u540c\u88fd\u4f5c\u7684\u7562\u696d\u88fd\u4f5c\u4f5c\u54c1\uff0c\u60f3\u88fd\u4f5c\u51fa\u4e00\u6b3e\u898f\u5247\u55ae\u7d14\u4f46\u80fd\u6709\u8a31\u591a\u8b8a\u5316\u7684\u904a\u6232\uff0c\u4e5f\u5e0c\u671b\u5404\u500b\u5e74\u9f61\u5c64\u90fd\u80fd\u559c\u6b61\u3002\n\n    "]},{id:"bean",title:"BEAN",date:"2015/9 - 2016/1",type:"game",subtitle:"\u4e00\u4eba\u88fd\u4f5c\u7684\u624b\u6a5f\u76ca\u667a\u904a\u6232\uff0c\u8a2d\u8a08\u5728\u7b49\u516c\u8eca\u3001\u8e72\u5ec1\u6240\u6642\u90fd\u80fd\u8f15\u6613\u7684\u904a\u73a9\u3002",icon:"/projects/BEAN.png",cover:{type:"embed",source:"https://www.youtube-nocookie.com/embed/fKfu7L7hGbg?rel=0&amp;showinfo=0",ratio:1},content:[{contentType:"references",references:{cover:{contentType:"image",type:"embed",source:"https://www.youtube-nocookie.com/embed/fKfu7L7hGbg?rel=0&amp;showinfo=0",ratio:1}}},"\n    {{cover}}\n    \u4e00\u4eba\u88fd\u4f5c\u7684\u624b\u6a5f\u76ca\u667a\u904a\u6232\uff0c\u8a2d\u8a08\u5728\u7b49\u516c\u8eca\u3001\u8e72\u5ec1\u6240\u6642\u90fd\u80fd\u8f15\u6613\u7684\u904a\u73a9\u3002\n    \u8a2d\u8a08\u6642\u8003\u91cf\u4f7f\u7528\u55ae\u624b\u5c31\u53ef\u4ee5\u64cd\u4f5c\u7684\u64cd\u4f5c\u624b\u52e2\uff0c\u53ef\u4ee5\u5f88\u8f15\u6613\u7684\u7528\u55ae\u6307\u9032\u884c\u904a\u6232\u3002\n    "]}]},7672:function(e,t,n){"use strict";n.r(t);var i=n(4942),r=n(5988),o=(n(6825),n(4169)),s=n(2374),c=n(9686),a=n(5893);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return(0,a.jsxs)("div",{className:"jsx-3190226956 "+r.default.dynamic([["2348617774",[o.Z.main,o.Z.main]]])+" app",children:[(0,a.jsx)(s.default,{}),(0,a.jsx)(c.default,{}),(0,a.jsx)("div",{className:"jsx-3190226956 "+r.default.dynamic([["2348617774",[o.Z.main,o.Z.main]]])+" app-container",children:(0,a.jsx)(t,u(u({},n),{},{className:"jsx-3190226956 "+r.default.dynamic([["2348617774",[o.Z.main,o.Z.main]]])+" "+(n&&null!=n.className&&n.className||"")}))}),(0,a.jsx)(r.default,{id:"2348617774",dynamic:[o.Z.main,o.Z.main],children:["@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Poppins:wght@300;500;700&display=swap');",":root{font-size:12px;}","html,body{padding:0;margin:0;font-family: 'Poppins', 'Noto Sans TC', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif';}","body::-webkit-scrollbar{background-color:rgb(238,238,238);width:16px;}","body::-webkit-scrollbar-thumb{background-color:rgb(207,207,207);border-radius:4px;width:10px;}","body::-webkit-scrollbar-track{margin:0 10px;}","::selection{color:#fff;background:".concat(o.Z.main,";}"),"a{color:inherit;-webkit-text-decoration:none;text-decoration:none;}","*{box-sizing:border-box;}",".row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}",".col{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}","@media (max-width:576px){.m-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.m-col{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}",".svg-stroke-main{stroke:".concat(o.Z.main,";}")]}),(0,a.jsx)(r.default,{id:"3190226956",children:[".app.jsx-3190226956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:hidden;}",".app-container.jsx-3190226956{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:600px;width:100%;padding:120px 0 0;}","@media (max-width:576px){.app-container.jsx-3190226956{padding:60px 0 0;}}"]})]})}},9686:function(e,t,n){"use strict";n.r(t);var i=n(5785),r=n(5988),o=n(5788),s=n(5893);t.default=function(){var e,t=o.o8.filter((function(e){return"game"===e.type||"front-end"===e.type})),n=t.length,c=(0,i.Z)(Array(n).keys()),a=(e=25,function(){var t=e+=1831565813;return t=Math.imul(t^t>>>15,1|t),(((t^=t+Math.imul(t^t>>>7,61|t))^t>>>14)>>>0)/4294967296});return(0,s.jsxs)("div",{className:"jsx-380379893 background",children:[c.map((function(e){var n=a(),i=40*(1-n)+60,r=.3*n+.7,o=t[e],c=(800*a()+350)*(a()>.5?1:-1),l=400*a();return(0,s.jsx)("img",{src:o.icon,style:{position:"absolute",height:i,width:i,borderRadius:24,backgroundColor:"#fff",opacity:r,transform:"translate(".concat(c,"px, ").concat(l,"px)  perspective(5000px) rotate3d(").concat(.5*a(),",").concat(.5*a(),",").concat(.5*a(),",").concat(100*a()-50,"deg) "),boxShadow:"0 0 10px #0003",filter:"blur(".concat(5*(1-n)+4,"px)")},className:"jsx-380379893 icon"},e)})),(0,s.jsx)("div",{className:"jsx-380379893 blur"}),(0,s.jsx)(r.default,{id:"380379893",children:[".background.jsx-380379893{position:fixed;top:0;bottom:0;right:0;left:0;background-color:#fff;z-index:-10;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".blur.jsx-380379893{position:fixed;top:0;bottom:0;right:0;left:0;background-color:rgba(255,255,255,0.9);z-index:0;}","@media (max-width:576px){.icon.jsx-380379893{display:none;}.blur.jsx-380379893{display:none;}}"]})]})}},2374:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});n(7294);var i=n(4298),r=n(5893);function o(e){var t="G-C7HBW8VNTZ";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{strategy:"beforeInteractive",async:!0,src:"https://www.googletagmanager.com/gtag/js?id=".concat(t)}),(0,r.jsx)(i.default,{id:"headGoogleAnalytics",children:'\n        // Google Analytics - in HeadGoogleAnalytics.js\n        window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag("js", new Date());\n\n        gtag("config", "'.concat(t,'");\n        ')})]})}},4169:function(e,t){"use strict";t.Z={main:"#ff7800e0",mainHover:"#ff7800ff",textInMain:"#ffffff"}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7672)}])},6825:function(){},4298:function(e,t,n){e.exports=n(7926)},4155:function(e){var t,n,i=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:r}catch(e){t=r}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,a=[],l=!1,u=-1;function d(){l&&c&&(l=!1,c.length?a=c.concat(a):u=-1,a.length&&p())}function p(){if(!l){var e=s(d);l=!0;for(var t=a.length;t;){for(c=a,a=[];++u<t;)c&&c[u].run();u=-1,t=a.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new f(e,t)),1!==a.length||l||s(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},9887:function(e){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},4287:function(e,t,n){"use strict";var i=n(4155);function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t.__esModule=!0,t.default=void 0;var o="undefined"!==typeof i&&i.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},c=function(){function e(e){var t=void 0===e?{}:e,n=t.name,i=void 0===n?"stylesheet":n,r=t.optimizeForSpeed,c=void 0===r?o:r,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;a(s(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",a("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,n,i,c=e.prototype;return c.setOptimizeForSpeed=function(e){a("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),a(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(a(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(o||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(a(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(r){return o||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){o||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];a(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];a(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&a(s(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-"+e,""),t&&i.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return n?r.insertBefore(i,n):r.appendChild(i),i},t=e,(n=[{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,n),i&&r(t,i),e}();function a(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=c},7884:function(e,t,n){"use strict";t.default=s;var i,r=n(7294);var o=new(((i=n(8122))&&i.__esModule?i:{default:i}).default);function s(e){return"undefined"===typeof window?(o.add(e),null):((0,r.useLayoutEffect)((function(){return o.add(e),function(){o.remove(e)}}),[e.id,String(e.dynamic)]),null)}s.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return o.computeId(t,n)})).join(" ")}},8122:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var i=o(n(9887)),r=o(n(4287));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,i=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,c=t.isBrowser,a=void 0===c?"undefined"!==typeof window:c;this._sheet=i||new r.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),i&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),i=n.styleId,r=n.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var o=r.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[i]=o,this._instancesCounts[i]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),o=t+r;return e[o]||(e[o]="jsx-"+(0,i.default)(t+"-"+r)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var r=n+i;return t[r]||(t[r]=i.replace(e,n)),t[r]}},t.getIdAndRules=function(e){var t=this,n=e.children,i=e.dynamic,r=e.id;if(i){var o=this.computeId(r,i);return{styleId:o,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,n)]}}return{styleId:this.computeId(r),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},5988:function(e,t,n){e.exports=n(7884)},4942:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return i}})},5785:function(e,t,n){"use strict";function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return r}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);