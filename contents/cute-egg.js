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
            code1:{
                contentType: "code",
                content: `const x = cos(i) * r;\nconst y = sin(i) * r`,
            },
            'img#1': {
                contentType: "image",
                type: "img",
                source: "/projects/cute-egg/1.png",
                ratio: 1 / 1,
            },
            'img#2': {
                contentType: "image",
                type: "img",
                source: "/projects/cute-egg/2.png",
                ratio: 1 / 1,
            },
            'img#3': {
                contentType: "image",
                type: "img",
                source: "/projects/cute-egg/3.png",
                ratio: 1 / 1,
            },
        }
    },
    `
    {{cover}}

    Cute Egg 是使用 p5.js 來製作的 NFT，整個作品沒有預先繪製的圖片，都是程式即時演算。
    製作好的成品放在 fxhash 平台來鑄造與交易，你可以從下方連結前往。

    {{link}}

    ---


    每個鑄造出來的蛋都擁有不同的背景顏色、獨一無二的蛋白形狀、開心或難過的表情。


    ### 蛋白
    蛋白應該是做起來最麻煩的部分，我使用 p5 的 beginShape/endShape ，繪製指定頂點的多邊形來製作蛋白。    
    {{code1}}
    

    {{img#1}}
    {{img#2}}
    {{img#3}}


    `,


];
export default content;