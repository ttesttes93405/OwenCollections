const content = [
    {
        contentType: "references",
        references: {
            cover: {
                contentType: "image",
                type: "img",
                source: "/projects/Drafty.jpg",
                link: "https://drafty-xi.vercel.app/",
                ratio: 9 / 16,
            },
            link: {
                contentType: "link",
                links: [{
                    link: "https://drafty-xi.vercel.app/",
                    title: "前往 Drafty",
                    icon: "",
                },]
            },
            code1: {
                contentType: "code",
                content:
                    `const styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        borderRadius: 4,
        fontSize: 16,
        padding: 4,
    },
}`,
            }
        }
    },
    `
    Drafty 是個簡單輕量的筆記 Web App，可以對筆記中的內容做簡單的格式化，也能新增多個不同的筆記。

    {{cover}}

    製作 Drafty 的緣由，是自己在學習 React 一段時間後，想找些 Side Project 來做，剛好找到六角學院前幾年舉辦的精神時光屋。精神時光屋有十個關卡，我挑選了第九關－筆記軟體來製作。

    ---

    ### 在開始之前
    初步整理，希望筆記有下列功能
    1. 可以新增數個筆記，填寫文章內容
    2. 可以在筆記裡，將文字變成粗體、斜體、下底線等基本樣式
    3. 可以將筆記打星號，以方便快速搜尋
    4. 在筆記列表上，有兩種以上檢視筆記方式：例如卡片檢視、摘要檢視

    ### 製作筆記
    第一步，先將目標放在筆記最主要的 Rich Text Editor 功能，一番搜尋後找到 Draft.js 這個由 Facebook 做的 React 套件。
    它在 GitHub 上有 21.4k 星星，NPM 也有每週 80 萬的下載。初步看過文件，筆記軟體所需的功能它都能做到，便決定使用 Draft.js 來製作。
    這也是取名 Drafty 的原因－基於 Draft.js 而做的 (儘管意思完全不同 🤣)。

    ### 筆記
    透過文件初步了解 Draft.js 後，選定幾個基本樣式，照著文件和範例將需要的功能做好。
    選定的基本樣式有以下：

    區塊樣式：
    - 標題1 (h1)
    - 標題2 (h2)
    - 標題3 (h3)
    - 有序清單 (ol)
    - 無序清單 (ul)
    - code 區塊 (code)

    行內樣式：
    - 粗體
    - 斜體
    - 底線
    - code

    區塊樣式是整行套用的樣式，行內樣式則可以套用在單行中的特定範圍。
    由於希望樣式外觀和整個頁面風格一致，因此對於這些樣式額外做了外觀設定。
    Draft.js 的區塊樣式可以透過 HTML Tag 來判斷，像套用標題1的區塊會以 <h1> Tag 包裹，因此以 CSS Selector 就可以設定樣式，十分直觀。
    行內樣式則是透過 customStyleMap 這個 prop 來設定，我用下列 styleMap 來設定 code 行內樣式：
    {{code1}}

    ### 筆記×N
    如果只有一則筆記，上面的 Rich Text Editor 處理完就結束了，但我們需要能夠編輯多則筆記。
    我將目前筆記的 id 記在 State 中，只要知道目前選擇的筆記 id，並讓 Rich Text Editor 顯示該 id 的筆記內容即可。
    在左方的筆記清單點擊各個筆記，會更動 State 中的當前筆記 id ，並重新渲染 Rich Text Editor 的顯示內容。
    有個需要注意的地方：切換的時候要儲存前一個筆記的內容，避免在切換時遺失前一份筆記的更動，這樣在體驗上感受較好。


    ### 儲存
    到目前為止，Drafty 都運作得不錯，但因為編輯的內容是存在記憶體，離開頁面後就消失了。
    接著便是將編輯內容儲存下來，我透過 localStorage 來儲存，剛進入頁面，會先從 localStorage 讀取資料。
    接著在筆記新增、更新、刪除時，會同步更新 localStorage 的對應資料。

    ---

    如果你想試試 Drafty 的話，就點擊下面按鈕吧！
    請注意，這個 Web App 尚未完全支援 Mobile，請使用桌面板瀏覽器瀏覽。

    {{link}}

    `,


];
export default content;