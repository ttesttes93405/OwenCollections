
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
    Spline 是一個輕量的 3D 設計工具，除了覺得工具本身有趣，也覺得網站風格不錯、規模不大，很適合做為練習，因此決定復刻一個一樣的網站。
    
    下圖是原板與復刻版的結果，你可以左右滑動圖中的拉桿，或是打開下方的兩個連結，比較看看兩個版本的差異。
    {{diffImage}}

    {{link}}


    ---


    ### 開始復刻
    我使用 React 來復刻這個網站，復刻第一步，先看看整個網站的結構。網站大致分成三個區塊：
    1. Header
    2. Main
    3. Footer

    Header 比較特殊的部分，是 Open App 按鈕在往下捲動一段距離後，外觀會改變成藍色。
    這部分使用 useEffect，在 Document scroll 時，檢查距離來改變按鈕的外觀。
    
    Main 底下有數個 Section，各自 Section 互不干涉，做的時候便把他們分割成不同 Component。
    其中的幾個 Section 比較特別：第一個 Section 顯示一個兔子與地板的場景，第五個 Section 顯示方塊場景及切換程式碼片段。
    該場景是 Spline 的場景，正好他們有提供 React Component 可以快速使用，那我就不客氣的用下去囉。
    其餘 Section 大多是使用 Grid 來排版，參考原網站的尺寸設定就可以做出看起來一樣的結果。

    Footer 也包含了數個 Section，和 Main 一樣，每個 Section 互不干涉。整體來說也是透過 Grid 排版🤓。


    ### RWD
    復刻時是先從 Desktop 的尺寸來復刻，告個段落後，接著要處理其他尺寸的樣式變化。
    Header 上的按鈕在小尺寸會縮進右上的選單，為了方便，我把 Header 上的按鈕與選單分成兩個 Element 製作，再透過 media query 切換要顯示的 Element。
    透過 Grid 排版的 Section，會在較小尺寸中顯示較少的列數，這部分一樣透過 media query 設定。
    

    ### SEO
    網站裡面都做得差不多，該來做做外面基本的 SEO 了。    
    內容都從官方網站拿過來，把基本的 Meta Tag 如 title、desciption、og:、twitter: 都列上去。
    比起前面需要不停在原版和復刻版來回對照，這個部分實在是輕鬆許多。


    ### 最後
    這次在復刻時，意外發現 Spline 網站使用了 modulz 的 Radix UI ，再從 Radix UI 發現 Stitches 這個 CSS-in-JS Package。
    初步閱讀文件後覺得它和我使用的 Styled Component 很相像，但又多了一些方便的功能(像是 Variants)。
    復刻網站刻到新的研究內容，也算是意外的收穫吧🤣。


    {{link}}

    `,


];
export default content;