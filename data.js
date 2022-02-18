import content1000Website from './contents/1000website';
import contentLiteraryDessert from './contents/literary-dessert';
import contentFallASleep from './contents/fall-a-sleep';
import contentSandwich101 from './contents/sandwich101';
import contentSkyBandit from './contents/sky-bandit';
import contentTheHole from './contents/the-hole';
import contentDroom from './contents/droom';
import contentBean from './contents/bean';
import contentDrafty from './contents/drafty';

export const typeData = [
    {
        id: "front-end",
        title: "前端",
        icon: "/icons/code.svg",
    }, {
        id: "game",
        title: "遊戲",
        icon: "/icons/box.svg",
    },
];

export const introData = {
    title: "孫宇",
    subtitle: "Owen Sun",
    picture: "Owen01.jpg",
    content: [
        "前端開發者、遊戲開發者。",
        "喜歡 UI/UX 、遊戲互動、好看的畫面。",
    ],
    info: [
        {
            icon: "/icons/mail.svg",
            content: "ttesttes93405@gmail.com"
        }
    ]
};


const _25SproutData = [
    // {
    //     id: "25Sprout_1000website",
    //     title: "1000 Cheng 作品集網站",
    //     icon: "/projects/1000-cheng-icon.jpg",
    //     date: "2021/8",
    //     subtitle: "為動態設計師 1000 Cheng 製作的作品集網站。",
    //     types: ["25sprout",],
    //     cover: {
    //         type: "img",
    //         source: "/projects/1000-cheng.jpg",
    //         ratio: 9 / 16,
    //     },
    //     content: content1000Website,
    // },
    // {
    //     id: "25Sprout_sky-bandit",
    //     title: "Sky Bandit 天空盜賊團",
    //     icon: "/projects/SkyBandit.png",
    //     date: "2019/6 - 2020/12",
    //     subtitle: "於玩猴遊戲 Macaca Games 參與製作的手機遊戲。",
    //     types: ["25sprout",],
    //     cover: {
    //         type: "img",
    //         source: "https://i.ytimg.com/vi_webp/Bt4rOBArpHs/sddefault.webp",
    //         ratio: 9 / 16,
    //     },
    //     cover_old: {
    //         type: "embed",
    //         source: "https://www.youtube.com/embed/Bt4rOBArpHs",
    //         ratio: 9 / 16,
    //     },
    //     content: contentSkyBandit,
    // },
]

export const projectData = [
    ..._25SproutData,
    {
        id: "drafty",
        title: "Drafty 輕量筆記",
        icon: "/projects/Drafty.svg",
        date: "2022/2",
        subtitle: "Drafty 是個簡單輕量的筆記 Web App，以 React 製作，可以對筆記中的內容做簡單的格式化，也能新增多個不同的筆記。",
        types: ["front-end", "25sprout",],
        cover: {
            type: "img",
            source: "/projects/Drafty.jpg",
            ratio: 9 / 16,
        },
        content: contentDrafty,
    },
    {
        id: "1000website",
        title: "1000 Cheng 作品集網站",
        icon: "/projects/1000-cheng-icon.jpg",
        date: "2021/8",
        subtitle: "為動態設計師 1000 Cheng 製作的作品集網站，以 React + Next.js 製作。",
        types: ["front-end", "25sprout",],
        cover: {
            type: "img",
            source: "/projects/1000-cheng.jpg",
            ratio: 9 / 16,
        },
        content: content1000Website,
    },    
    {
        id: "literary-dessert",
        title: "點心故事 Literary Dessert",
        icon: "/projects/LiteraryDessert.svg",
        date: "2016/7 - 2016/8",
        subtitle: "大學時期喜歡寫一些短篇故事，不知不覺篇數累積了不少。\n畢業後，便用業餘時間製作網站，讓人閱讀與收藏這些故事。",
        types: ["front-end",],
        cover: {
            type: "img",
            source: "/projects/LiteraryDessert.jpg",
            ratio: 9 / 16,
        },
        content: contentLiteraryDessert,
    },
    {
        id: "fall-a-sleep",
        title: "Fall A Sleep",
        icon: "/projects/G2I.webp",
        date: "2021/4",
        subtitle: "於玩猴遊戲 Macaca Games 參與製作的 Hyper-casual game，約花兩週製作。",
        types: ["game",],
        cover: {
            type: "mp4",
            source: "https://res.cloudinary.com/dclfdbu9c/video/upload/v1626364397/OwenCollection/Fall%20A%20Sleep/Fall_A_Sleep_Video.mp4",
            ratio: 1 / 1,
        },
        content: contentFallASleep,
    },
    {
        id: "sandwich101",
        title: "Sandwich 101",
        icon: "/projects/G2E.webp",
        date: "2021/2",
        subtitle: "於玩猴遊戲 Macaca Games 參與製作的 Hyper-casual game，約花兩週製作。",
        types: ["game",],
        cover: {
            type: "mp4",
            source: "https://res.cloudinary.com/dclfdbu9c/video/upload/v1626364392/OwenCollection/Sandwich%20101/Sanwich_101_Video.mp4",
            ratio: 1 / 1,
        },
        content: contentSandwich101,
    },
    {
        id: "sky-bandit",
        title: "Sky Bandit 天空盜賊團",
        icon: "/projects/SkyBandit.png",
        date: "2019/6 - 2020/12",
        subtitle: "於玩猴遊戲 Macaca Games 參與製作的手機遊戲。",
        types: ["game", "25sprout",],
        cover: {
            type: "img",
            source: "https://i.ytimg.com/vi_webp/Bt4rOBArpHs/sddefault.webp",
            ratio: 9 / 16,
        },
        cover_old: {
            type: "embed",
            source: "https://www.youtube.com/embed/Bt4rOBArpHs",
            ratio: 9 / 16,
        },
        content: contentSkyBandit,
    },
    {
        id: "macaca-games-tech-designer",
        title: "Macaca Games 技術企劃",
        icon: "/projects/CloudMacaca.png",
        date: "2019/6 -",
        types: ["experence",],
        cover: {},
        content: "於玩猴遊戲 Macaca Games 任職企劃，參與「Sky Bandit 天空盜賊團」開發，同時支援寫點code，但是寫的code多到不太確定自己該叫企劃還是程式。",
        links: []
    },
    {
        id: "x-lengend-designer",
        title: "傳奇網路 企劃",
        icon: "/projects/x-legend.jpg",
        subtitle: "2017/8 - 2019/5",
        types: ["experence",],
        cover: {},
        content: "從2017年於傳奇任職企劃，參與以Unity開發的手遊專案(未上市)，主要負責系統與介面，規劃功能、撰寫相關文件並與程式溝通。",
        links: []
    },
    {
        id: "google-play-bulid-taiwan-dream-droom",
        title: "GooglePlay 築夢台灣專區",
        icon: "/projects/GooglePlay.jpg",
        date: "2018/1",
        types: ["experence",],
        cover: {
            type: "embed",
            source: "https://www.youtube-nocookie.com/embed/Quxd9ydNG4Q?rel=0&amp;showinfo=0",
            ratio: 9 / 16,
        },
        content: "受GooglePlay邀請，在2018台北電玩展的GooglePlay築夢台灣專區展示「DROOM夢門」，還為此量身訂做精美的影片。",
        links: []
    },
    {
        id: "the-hole",
        title: "The Hole",
        icon: "/projects/TheHole.svg",
        date: "2018/4",
        subtitle: "於 2018 Kuso Game Jam 製作，是會讓人強迫症發作的小遊戲。",
        types: ["game",],
        cover: {
            type: "embed",
            source: "https://www.youtube-nocookie.com/embed/GNgrLjJVaRU?rel=0&amp;showinfo=0",
            ratio: 1 / 1,
        },
        content: contentTheHole,
    },
    {
        id: "droom",
        title: "DROOM 夢門",
        date: "2016/5 -",
        subtitle: "與另一伙伴一同製作的手機遊戲，為大學畢業製作作品。",
        types: ["game",],
        icon: "/projects/DROOM.png",
        cover: {
            type: "img",
            source: "https://i.ytimg.com/vi_webp/3N6houOggT4/sddefault.webp",
            ratio: 9 / 16,
        },
        content: contentDroom,
    },
    {
        id: "bean",
        title: "BEAN",
        date: "2015/9 - 2016/1",
        types: ["game",],
        subtitle: "一人製作的手機益智遊戲，設計在等公車、蹲廁所時都能輕易的遊玩。",
        icon: "/projects/BEAN.png",
        cover: {
            type: "embed",
            source: "https://www.youtube-nocookie.com/embed/fKfu7L7hGbg?rel=0&amp;showinfo=0",
            ratio: 1 / 1,
        },
        content: contentBean,
    },

];

export const timeEvents = [
    {
        year: "1994",
        data: [{
            title: "出生",
            month: "10月",
            content: "對我來說意義重大的時刻。",
            marginSpace: "200px"
        }]
    },
    {
        year: "2015",
        data: [{
            title: "BEAN",
            month: "9月",
            content: "一人製作的手機益智遊戲，第一次學習Unity3D所製作的遊戲。",
            marginSpace: "80px"
        }]
    },
    {
        year: "2016",
        data: [{
            title: "DROOM 夢門",
            month: "5月",
            content: "與另一伙伴一同製作的畢業製作作品，畢業後現由自己繼續開發。",
            marginSpace: "20px"
        }, {
            title: "點心故事 Literary Dessert",
            month: "7月",
            content: "閒暇時所寫的極短故事，初學網頁後為這些故事做了瀏覽的網站。",
            marginSpace: "100px"
        }]
    },
    {
        year: "2017",
        data: [{
            title: "夢門DROOM獲「放視大賞-行動遊戲創作組-銀賞」",
            month: "5月",
            content: "於「放視大賞」獲得「遊戲類-行動遊戲創作組-銀賞」、「獨立遊戲精神獎」、「廠商特別獎-艾鳴遊戲-最佳遊戲獎」、「廠商特別獎-唯晶數位-遊戲創意獎」。",
            marginSpace: "30px"
        }, {
            title: "開始傳奇網路遊戲遊戲企劃一職",
            month: "8月",
            content: "從2017年8月開始，於傳奇任職企劃。",
            marginSpace: "50px"
        }]
    },
    {
        year: "2018",
        data: [{
            title: "參加 2018台北電玩展 GooglePlay 築夢台灣專區",
            month: "1月",
            content: "受GooglePlay邀請，在2018台北電玩展GooglePlay 築夢台灣專區展示「DROOM夢門」。",
            marginSpace: "30px"
        }, {
            title: "參加 2018 Kuso Game Jam",
            month: "4月",
            content: "參加 2018 Kuso Game Jam ，於兩天的時間內做出「The Hole」網頁版。",
            marginSpace: "60px"
        }, {
            title: "The Hole 於 Longitude Exhibition 展出",
            month: "10月",
            content: "於 2018 Kuso Game Jam 做出的遊戲「The Hole」，在澳洲墨爾本的 Longitude Exhibition 展出，展期為：10/17 - 11/25。",
            marginSpace: "200px"
        }]
    },
    {
        year: "2019",
        data: [{
            title: "開始玩猴遊戲 Macaca Games 遊戲技術企劃一職",
            month: "6月",
            content: "從2019年6月開始，於玩猴遊戲 Macaca Games 任職技術企劃。",
            marginSpace: "200px"
        }]
    },
    {
        year: "2020",
        data: [{
            title: "Sky Bandit 天空盜賊團手機雙平台上架",
            month: "9月",
            content: "玩猴遊戲 Macaca Games 任職參與的第一個專案，於 iOS、Android 雙平台上架。",
            marginSpace: "200px"
        }]
    },
    {
        year: "NOW",
        data: []
    },

];