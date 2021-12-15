import content1000Website from './contents/1000website';

export const routeData = [
    {
        title: "首頁",
        route: "/",
        icon: "/icons/home.svg",
    }, {
        title: "前端",
        route: "/type/front-end",
        icon: "/icons/code.svg",
    }, {
        title: "遊戲",
        route: "/type/game",
        icon: "/icons/box.svg",
    },
];

export const typeData = [
    {
        id:"front-end",
        title: "前端",
        icon: "/icons/code.svg",
    }, {
        id:"game",
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

export const projectData = [
    {
        id: "1000website",
        title: "1000 Cheng 作品集網站",
        type: "front-end",
        icon: "/projects/1000-cheng-icon.jpg",
        cover: {
            type: "img",
            source: "/projects/1000-cheng.jpg",
            ratio: 9 / 16,
        },
        subtitle: "2021/8",
        content: content1000Website,//"幫動態設計師 1000 Cheng 製作的作品集網站。\n以 React + Next.js 製作，透過 Next Export 來產出靜態網站。\n網站以 GitHub 代管，並且設定 GitHub Action，在 master branch push 新的 commit 時，自動 Export 新的靜態內容至 GitHub Page。",
        links: [
            {
                link: "https://1000cheng.cc/",
                title: "前往網站",
                icon: "",
            }
        ]
    },
    {
        id: "literary-dessert",
        title: "點心故事 Literary Dessert",
        type: "front-end",
        icon: "/projects/LiteraryDessert.svg",
        cover: {
            type: "img",
            source: "/projects/LiteraryDessert.png",
            ratio: 9 / 16,
        },
        subtitle: "2016/7 - 2016/8",
        content: "大學時期喜歡寫一些短篇故事，不知不覺篇數累積了不少。\n畢業後，便用業餘時間製作網站，讓人閱讀與收藏這些故事。\n使用 Vue 2 來製作，並使用 SASS 撰寫樣式。",
        links: [
            {
                link: "https://ttesttes93405.github.io/LiteraryDessert/index.html",
                title: "前往網站",
                icon: "",
            }
        ]
    },
    {
        id: "fall-a-sleep",
        title: "Fall A Sleep",
        type: "game",
        icon: "/projects/G2I.webp",
        cover: {
            type: "mp4",
            source: "https://res.cloudinary.com/dclfdbu9c/video/upload/v1626364397/OwenCollection/Fall%20A%20Sleep/Fall_A_Sleep_Video.mp4",
            ratio: 1 / 1,
        },
        subtitle: "2021/4",
        content: "於玩猴遊戲 Macaca Games 參與製作的 Hyper-casual game，約花兩週製作。",
        links: [
            {
                link: "https://play.google.com/store/apps/details?id=com.MacacaGames.G2_ProjectI",
                title: "Android 下載",
                icon: "/icons/android.svg",
            }
        ]
    },
    {
        id: "sandwich101",
        title: "Sandwich 101",
        type: "game",
        icon: "/projects/G2E.webp",
        cover: {
            type: "mp4",
            source: "https://res.cloudinary.com/dclfdbu9c/video/upload/v1626364392/OwenCollection/Sandwich%20101/Sanwich_101_Video.mp4",
            ratio: 1 / 1,
        },
        subtitle: "2021/2",
        content: "於玩猴遊戲 Macaca Games 參與製作的 Hyper-casual game，約花兩週製作。",
        links: [
            {
                link: "https://play.google.com/store/apps/details?id=com.MacacaGames.G2_ProjectE",
                title: "Android 下載",
                icon: "/icons/android.svg",
            }
        ]
    },
    {
        id: "sky-bandit",
        title: "Sky Bandit 天空盜賊團",
        type: "game",
        icon: "/projects/SkyBandit.png",
        cover: {
            type: "embed",
            source: "https://www.youtube.com/embed/Bt4rOBArpHs",
            ratio: 9 / 16,
        },
        subtitle: "2019/6 - 2020/12",
        content: "於玩猴遊戲 Macaca Games 任職後參與的第一個專案，在專案前期主要擔任企劃，後期擔任技術企劃及程式設計人員。",
        links: [
            {
                link: "https://play.google.com/store/apps/details?id=com.MacacaGames.SkyBandit",
                title: "Android 下載",
                icon: "/icons/android.svg",
            },
            {
                link: "https://apps.apple.com/app/id1499441526",
                title: "iOS 下載",
                icon: "/icons/apple.svg",
            }
        ]
    },
    {
        id: "macaca-games-tech-designer",
        title: "Macaca Games 技術企劃",
        type: "experence",
        icon: "/projects/CloudMacaca.png",
        cover: {},
        subtitle: "2019/6 -",
        content: "於玩猴遊戲 Macaca Games 任職企劃，參與「Sky Bandit 天空盜賊團」開發，同時支援寫點code，但是寫的code多到不太確定自己該叫企劃還是程式。",
        links: []
    },
    {
        id: "x-lengend-designer",
        title: "傳奇網路 企劃",
        type: "experence",
        icon: "/projects/x-legend.jpg",
        cover: {},
        subtitle: "2017/8 - 2019/5",
        content: "從2017年於傳奇任職企劃，參與以Unity開發的手遊專案(未上市)，主要負責系統與介面，規劃功能、撰寫相關文件並與程式溝通。",
        links: []
    },
    {
        id: "google-play-bulid-taiwan-dream-droom",
        title: "GooglePlay 築夢台灣專區",
        type: "experence",
        icon: "/projects/GooglePlay.jpg",
        cover: {
            type: "embed",
            source: "https://www.youtube-nocookie.com/embed/Quxd9ydNG4Q?rel=0&amp;showinfo=0",
            ratio: 9 / 16,
        },
        subtitle: "2018/1",
        content: "受GooglePlay邀請，在2018台北電玩展的GooglePlay築夢台灣專區展示「DROOM夢門」，還為此量身訂做精美的影片。",
        links: []
    },
    {
        id: "the-hole",
        title: "The Hole",
        type: "game",
        icon: "/projects/TheHole.svg",
        cover: {
            type: "embed",
            source: "https://www.youtube-nocookie.com/embed/GNgrLjJVaRU?rel=0&amp;showinfo=0",
            ratio: 1 / 1,
        },
        subtitle: "2018/4",
        content: "參加2018 Kuso Game Jam ，在不到兩天的時間內迅速做出遊戲原型，是會讓人強迫症發作的小遊戲。\n這個遊戲也在2018的10-11月，於澳洲墨爾本的 Longitude exhibition 展出。",
        links: [
            {
                link: "http://longitude-exhibition.net/",
                title: "Longitude Exhibition",
                icon: "",
            },
            {
                link: "https://sunyu.itch.io/the-hole",
                title: "玩網頁版",
                icon: "",
            }
        ]
    },
    {
        id: "droom",
        title: "DROOM 夢門",
        type: "game",
        icon: "/projects/DROOM.png",
        cover: {
            type: "embed",
            source: "https://www.youtube.com/embed/3N6houOggT4?rel=0&amp;showinfo=0",
            ratio: 9 / 16,
        },
        subtitle: "2016/5 -",
        content: "與另一伙伴一同製作的畢業製作作品，想製作出一款規則單純但能有許多變化的遊戲，也希望各個年齡層都能喜歡。\n畢業後現由自己繼續開發。",
        links: []
    },
    {
        id: "bean",
        title: "BEAN",
        type: "game",
        icon: "/projects/BEAN.png",
        cover: {
            type: "embed",
            source: "https://www.youtube-nocookie.com/embed/fKfu7L7hGbg?rel=0&amp;showinfo=0",
            ratio: 1 / 1,
        },
        subtitle: "2015/9 - 2016/1",
        content: "一人製作的手機益智遊戲，設計在等公車、蹲廁所時都能輕易的遊玩。\n設計時考量使用單手就可以操作的操作手勢，可以很輕易的用單指進行遊戲。",
        links: []
    }

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