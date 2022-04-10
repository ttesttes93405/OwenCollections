// import ProjectCover from "../pages/components/ProjectCover";


const content = [
    {
        contentType: "references",
        references: {
            cover: {
                contentType: "image",
                type: "img",
                source: "/projects/spline-cover.jpg",
                link: "https://spline-page-remake.vercel.app/",
                ratio: 9 / 16,
                caption: "復刻網站的截圖。",
            },
            link: {
                contentType: "link",
                links: [{
                    link: "https://spline.design/",
                    title: "官方網站",
                    rightIcon: "/icons/external-link.svg",
                }, {
                    link: "https://spline-page-remake.vercel.app/",
                    title: "復刻網站",
                    rightIcon: "/icons/external-link.svg",
                },]
            },
            diffImage: {
                contentType: "diffImage",
                cover1: {
                    type: "img",
                    source: "/projects/spline-cover.jpg",
                    ratio: 9 / 16,
                },
                cover2: {
                    type: "img",
                    source: "/projects/spline-offical.jpg",
                    ratio: 9 / 16,
                },
                caption: "官方網站與復刻網站的差異比較。",
            }
        }
    },
    `
    {{cover}}

    ### 為什麼想復刻？
    Spline 是一個輕量的 3D 設計工具，一開始是從朋友那聽到這個工具。
    在看了它的網站後，除了覺得工具本身有趣，也覺得網站風格不錯、規模不大，很適合做為練習，因此決定復刻一個一樣的網站。
    你可以透過下方的差異圖和下方的兩個連結，比較看看原版和復刻版的差異。
    
    {{diffImage}}

    {{link}}


    ---


    ### 開始復刻
    我使用 React 來復刻這個網站，復刻第一步，先看看整個網站的結構。整個網站大致分成三個區塊：
    1. Header
    2. Main
    3. Footer

    Header 部分比較特殊的部分，是 Open App 按鈕在往下捲動一段距離後，會改變外觀變成藍色。
    這部分使用 useEffect，在 Document scroll 時，檢查並改變按鈕的狀態。
    
    Main 底下有數個 Section，各自 Section 互不干涉，做的時候便把他們分割成不同 Component。
    其中的幾個 Section 比較特別，如第一個 Section 顯示一個兔子與地板的場景，及第五個 Section 顯示方塊場景及切換程式碼片段。
    該場景是 Spline 的場景，正好他們有提供 React Component 可以快速使用，那我就不客氣的用下去囉。
    其餘 Section 大多是使用 Grid 來排版，參考原網站的尺寸設定就完成了。

    Footer 也包含了數個 Section，和 Main 一樣，每個 Section 互不干涉。整體來說也是透過 Grid 排版🤓。


    ### RWD
    復刻時是先從 Desktop 的尺寸來復刻，告個段落後，接著要處理其他尺寸的樣式變化。
    Header 上的按鈕在小尺寸會縮進右上的選單，為了方便，我把 Header 上的按鈕與選單分成兩個 Element 製作，再透過 media query 切換要顯示的 Element。
    其他透過 Grid 排版的 Section，會在較小尺寸中顯示較少的列數，一樣透過 media query 設定。
    

    ### SEO
    都做到 RWD 了，當然也沒忘了 SEO。
    內容都從官方網站拿過來，把基本的 title、desciption、og:、twitter: 都列上去。


    ### 最後
    這次在復刻時，意外發現 Spline 網站使用了 modulz 的 Radix UI ，再從 Radix UI 發現 Stitches 這個 CSS-in-JS Package。
    初步閱讀文件後覺得它和我使用的 Styled Component 很相像，但又多了一些額外功能(像是 Variants)。
    復刻網站刻到新的研究內容，也算是意外的收穫吧🤣。


    {{link}}

    `,


];
export default content;