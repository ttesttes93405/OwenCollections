const content = [
    {
        contentType: "references",
        references: {
            cover: {
                contentType: "image",
                type: "img",
                link: "https://1000cheng.cc/",
                source: "/projects/1000-cheng.jpg",
                ratio: 9 / 16,
            },
            link: {
                contentType: "link",
                links: [{
                    link: "https://github.com/10x10x10/website1000",
                    title: "GitHub",
                    icon: "/icons/github.png",
                    theme: "github",
                }, {
                    link: "https://1000cheng.cc/",
                    title: "前往網站",
                    icon: "",
                },]
            },
        }
    },
    `
    為動態設計師 1000 Cheng 製作的作品集網站。    
    {{cover}}
    以 React.js + Next.js 製作，以 SSG (Static Side Generation) 產出靜態網站。網站佈署在 GitHub Page，透過 GitHub Action，在 push commit 時自動化建置與發佈。

    ---

    ### 為什麼選擇 SSG？  
    選擇 SSG (Static Side Generation) ，是考量下列幾點：
    - 由於是作品集，需要有基本的 SEO，使用 SSG 能方便的處理這部分。
    - 作品的內容不會經常更動，Generation 的成本不會太高。
    - 如果不用 Server，托管成本較低。
    

    ### 製作過程有遇到什麼問題嗎？    
    有的，在製作這個網站時，設計師的作品圖片、影片品質很高，因此檔案很大，進入頁面時會明顯感到卡頓，而且圖片會載入很久。

    透過採取一些處理，讓速度和體驗能改善：
    1. 先將圖片與影片壓縮成不至於太大、也不至於犧牲視覺呈現的品質。
    2. 在圖片與影片讀取時，根據該圖片、影片尺寸預先撐出空間，避免他們讀取完成後一塊一塊出現，造成不好的體驗。
    3. 在讀取期間顯示讀取動畫，讓使用者更有耐心等待讀取。

    用了上述的處理方式後，讀取得更快、也不會感到卡頓了。


    {{link}}
    `,


];
export default content;