const content = [
    {
        contentType: "references",
        references: {
            cover: {
                contentType: "image",
                type: "embed",
                source: "https://www.youtube.com/embed/Bt4rOBArpHs",
                ratio: 9 / 16,
            },
            link: {
                contentType: "link",
                links: [{
                    link: "https://play.google.com/store/apps/details?id=com.MacacaGames.SkyBandit",
                    title: "Android 下載",
                    icon: "/icons/android.svg",
                },
                {
                    link: "https://apps.apple.com/app/id1499441526",
                    title: "iOS 下載",
                    icon: "/icons/apple.svg",
                }]
            }
        }
    },
    `
    {{cover}}
    於玩猴遊戲 Macaca Games 任職後參與的第一個專案，在專案前期主要擔任企劃。
    後期擔任技術企劃及程式設計人員。

    {{link}}
    `,

];
export default content;