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
    以 React + Next.js 製作，以 SSG (Static Side Generation) 產出靜態網站。網站佈署在 GitHub Page，透過 GitHub Action，在 push commit 時自動化建置與發佈。

    ---

    ### 製作中遇到的問題？    
    在製作這個網站時，設計師的作品圖片、影片品質很高，因此檔案很大，進入頁面時會明顯感到卡頓，而且圖片會載入很久。

    透過採取一些處理，讓速度和體驗能改善：
    1. 先將圖片與影片壓縮成不至於太大、也不至於犧牲視覺呈現的品質。
    2. 在圖片與影片讀取時，根據該圖片、影片尺寸預先撐出空間，避免他們讀取完成後一塊一塊出現，造成不好的體驗。
    3. 在讀取期間顯示讀取動畫，讓使用者更有耐心等待讀取。

    用了上述的處理方式後，讀取得更快、也不會感到卡頓了。


    ### 製作流程的問題？    
    另一個問題是上傳資源遇到的流程體驗問題。
    網站上的圖片與影片是放在 Cloudinary 上，設計師反映它的介面一次只能上傳一份檔案，且會在上傳的檔案名稱後加上 Hashcode，又無法批次改名，於是每次上傳會需要做以下步驟：
    1. 整理好需要上傳的檔案
    2. 在 Cloudinary 上傳介面上傳第 1 份檔案
    3. 選擇上傳的第 1 份檔案，查看詳細資料
    4. 在詳細資料的名稱上雙擊、重新命名
    5. 將名稱後的 Hashcode 刪除
    6. (回到步驟2，重複 N 次)
    一般來說一次會上傳約 20 個檔案，幾乎有 8 個步驟，非常惱人。

    研究後發現 Cloudinary 有提供一些基礎操作的 API，於是我寫了一個簡單的 Node.js App，能上傳本地指定資料夾的資源到 Cloudinary 上，透過這個工具操作的新步驟如下：
    1. 整理好需要上傳的檔案
    2. 放到本地指定資料夾
    3. 設定要上傳到 Cloudinary 的哪個資料夾 (填入路徑)
    4. 等待上傳完成
    
    本來的 80 個步驟被縮減成 4 個步驟，大幅減少重複且沒有意義的流程，真是可喜可賀。



    {{link}}
    `,


];
export default content;