const content = [
    {
        contentType: "references",
        references: {
            cover: {
                contentType: "image",
                type: "embed",
                source: "https://www.youtube-nocookie.com/embed/GNgrLjJVaRU?rel=0&amp;showinfo=0",
                ratio: 1 / 1,
            },
            link: {
                contentType: "link",
                links: [{
                    link: "http://longitude-exhibition.net/",
                    title: "Longitude Exhibition",
                    icon: "",
                },
                {
                    link: "https://sunyu.itch.io/the-hole",
                    title: "玩網頁版",
                    icon: "",
                }]
            }
        }
    },
    `
    {{cover}}
    參加2018 Kuso Game Jam，在不到兩天的時間內迅速做出遊戲原型，是會讓人強迫症發作的小遊戲。
    這個遊戲也在2018的10-11月，於澳洲墨爾本的 Longitude exhibition 展出。

    {{link}}
    `,

];
export default content;