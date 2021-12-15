const content = [
    "幫動態設計師 1000 Cheng 製作的作品集網站。",
    "以 React.js + Next.js 製作，透過 SSG (Static Side Generation) 產出靜態網站。",
    "",
    {
        contentType: "image",
        type: "img",
        source: "/projects/1000-cheng.jpg",
        ratio: 9 / 16,
    },
    "",
    "網站佈署在 GitHub Page，透過 GitHub Action，在 push commit 時自動建置並發佈。",
    "",
    "在製作這個網站時，有遇到一些有趣的問題：",
    "",
    "## 較大的圖片、影片",
    "設計師的作品圖片、影片品質很高，因此檔案很大，讀取頁面時讀取感很重，為此採取了下列處理：",
    "1. 討論後，先將圖片與影片壓縮成不至於太大、也不至於犧牲視覺呈現的品質，。",
    "2. 在圖片與影片讀取時，根據該圖片、影片的比例預先撐出空間，避免他們讀取完成後一塊一塊出現，造成不好的體驗。",
    "3. 在讀取期間顯示讀取動畫，讓使用者更有耐心等待讀取。",
    "用了上述的處理方式後，能感覺讀取得更快、也沒有明顯的讀取感。",
    "",
    {
        contentType: "link",
        link: "https://1000cheng.cc/",
        title: "前往網站",
        icon: "",
    }

];
export default content;