// import ProjectCover from "../pages/components/ProjectCover";


const content = [
    {
        contentType: "references",
        references: {
            cover: {
                contentType: "image",
                type: "img",
                source: "/projects/cute-egg-cover.jpg",
                ratio: 9 / 16,
            },
            link: {
                contentType: "link",
                links: [{
                    link: "https://www.fxhash.xyz/generative/8087",
                    title: "fxhash",
                    rightIcon: "/icons/external-link.svg",
                },]
            },
            view: {
                contentType: "iframe",
                link: "https://ipfs.io/ipfs/QmNr27izJqXNJ66D93CpTHBFTAMxCFxPsBhSZCUvEp4MpP/?fxhash=ooUm8tNtoga254EGtPkEg2BNxbztq1fi8zL6PVozHbqFa6hJKKH",
                width: 300,
                height: 300,
            }
        }
    },
    `
    {{cover}}

    Cute Egg 是使用 p5.js 來製作的 NFT，整個作品沒有預先繪製的圖片，都是程式即時演算。
    製作好的成品放在 fxhash 平台來鑄造與交易，你可以從下方連結前往。

    {{link}}

    ---


    每個鑄造出來的蛋都擁有不同的背景顏色、獨一無二的蛋白形狀。




    `,


];
export default content;