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
            pic1: {
                contentType: "image",
                type: "img",
                source: "/projects/SkyBandit-AppStore.jpg",
                ratio: 1034 / 1125,
                caption: "遊戲推出時，App Store 替我們寫了一個專題故事。",
            },
            link: {
                contentType: "link",
                links: [{
                    link: "https://play.google.com/store/apps/details?id=com.MacacaGames.SkyBandit",
                    title: "Google Play 下載",
                    icon: "/icons/google-play.svg",
                    theme: "google-play",
                },
                {
                    link: "https://apps.apple.com/app/id1499441526",
                    title: "App Store 下載",
                    icon: "/icons/apple.svg",
                    theme: "app-store",
                }]
            },            
            "dda.link": {
                contentType: "link",
                links: [{
                    link: "https://github.com/MacacaGames/DesignDataAgent",
                    title: "GitHub",
                    icon: "/icons/github.png",
                    theme: "github"
                },]
            }
        }
    },
    `
    {{cover}}
    
    Sky Bandit 天空盜賊團是一款手機平台的奇幻休閒角色扮演遊戲，操作角色閃躲與攻擊怪物，並透過蒐集的寶物來強化角色。
    這是我在玩猴遊戲 Macaca Games 任職後參與的第一個專案，在專案前期主要擔任企劃，後期擔任技術企劃及程式設計人員。



    {{link}}



    ---

    ### 能力系統
    在這個遊戲中，角色可以裝備各種寶石來獲得額外技能，例如：受擊時讓範圍內的怪物凍結1秒、攻擊時有機率讓怪物附加中毒效果。這些效果其實是各種觸發條件與效果組合起來的。
    剛開始製作這個遊戲時，就有預感未來的能力會越來越多，若是將這些能力全部寫死，往後要擴充會非常困難、也容易有難以解決的技術債，因此著手設計一個可組合與複用的能力系統。

    我將能力分成三個部分，分別實作功能：
    1. 觸發條件：受擊時、攻擊時、血量低於 50% 時...等。
    2. 結束條件：觸發後立刻結束，其餘大致與觸發條件相同。
    3. 能力效果：攻擊+10、回復 10% 血量、讓對方附加中毒效果、無敵...等。

    透過組合條件與效果，便能創造許多能力。
    舉例來說，「攻擊時回復 1% 血量」它的設定如下：
    - 觸發條件：攻擊時
    - 結束條件：觸發後立刻結束
    - 能力效果：回復 1% 血量

    隨著需求增加，也加入一些額外設定，例如可以設定能力的持續時間、是否只能觸發一次、機率觸發。
    透過這些額外設定，便可以做出像是「受到攻擊時，有 10% 機率獲得 10 秒無敵，一場戰鬥只能觸發一次」的能力。
    
    也透過 Unity EditorWindow 開發視覺化編輯的介面，在與編輯能力的企劃來回討論的過程逐步優化。
    後來連怪物也使用這個系統，做出像是攻擊時回復 10% 血量的能力，讓企劃在設計菁英及Boss怪物時有更多選擇。

    到了後期，使用這種方式製作能力的優勢愈發明顯，企劃要做新的能力時，用很少的時間便能搞定；企劃想玩玩看能力配置，只需要透過編輯介面下拉選單更換選項，馬上就能測試。

    ---
        
    ### 轉表工具
    遊戲中的設定資料是使用 Unity ScriptableObject 儲存，隨著遊戲內容越來越大，本來的遊戲設定資料漸漸無法在 Unity 中一個個編輯，因此需要有個更有效率的填寫方式。
    我們將填寫資料這件事情移動到 Google Sheet，透過表格來填寫，並開發一個工具將表格內容轉換至 Scriptable Object。
    本來的資料結構並沒有變動，因此要從表格轉換必須做點額外處理。
    我設計了一套 JSON 格式的轉換定義，在表格欄位上撰寫轉換定義，就能夠使用轉表工具來轉換。
    如果對這個工具有興趣，可以到 GitHub 上查看。
    
    {{dda.link}}

    這個轉表工具解決了一大部分繁複的資料填寫，企劃填寫完表格、執行轉表工具，還可以從容不迫的喝杯咖啡呢。

    ---

    {{pic1}}


    {{link}}

    `,

];
export default content;