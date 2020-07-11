var vm = new Vue({
	el: '#app',
	data: {
		author: {
			title: "孫宇",
			subtitle: "Owen Sun",
			picture: ["pic/Owen01.jpg","pic/Owen02.jpg"],
			info: [
				/*{
					picture: "pic/icons.svg#sentence",
					content: "腦袋很小，簡單就好。"
				},*/
				{
					picture: "pic/icons.svg#mail",
					content: "ttesttes93405@gmail.com"
				}
			]
		},
		collections: [
			{
				title: "Cloud Macaca 企劃",
				picture: "pic/CloudMacaca.png",
				video: "",
				subtitle: "2019/6 - NOW",
				content: "於玩猴遊戲 Cloud Macaca 任職企劃，參與以Unity開發的手遊專案。",
				links: []
			},
			{
				title: "傳奇網路 企劃",
				picture: "pic/x-legend.jpg",
				video: "",
				subtitle: "2017/8 - 2019/5",
				content: "從2017年於傳奇任職企劃，參與以Unity開發的手遊專案(未上市)，主要負責系統與介面，規劃功能、撰寫相關文件並與程式溝通。",
				links: []
			},
			{
				title: "GooglePlay 築夢台灣專區",
				picture: "pic/GooglePlay.jpg",
				video: "https://www.youtube-nocookie.com/embed/Quxd9ydNG4Q?rel=0&amp;showinfo=0",
				subtitle: "2018/1",
				content: "受GooglePlay邀請，在2018台北電玩展的GooglePlay築夢台灣專區展示「DROOM夢門」，還為此量身訂做精美的影片。",
				links: []
			},
			{
				title: "The Hole",
				picture: "pic/TheHole.svg",
				video: "https://www.youtube-nocookie.com/embed/GNgrLjJVaRU?rel=0&amp;showinfo=0",
				subtitle: "2018/4",
				content: "參加2018 Kuso Game Jam ，在不到兩天的時間內迅速做出遊戲原型，是會讓人強迫症發作的小遊戲。\n這個遊戲也在2018的10-11月，於澳洲墨爾本的 Longitude exhibition 展出。",
				links: [
                    {
                        link: "http://longitude-exhibition.net/",
                        title:"Longitude Exhibition"
                    },
					{
						link: "https://sunyu.itch.io/the-hole",
						title: "玩網頁版"
					}
				]
			},
			{
				title: "點心故事 Literary Dessert",
				picture: "pic/LiteraryDessert.svg",
				video: "",
				subtitle: "2016/7 - 2016/8",
				content: "閒暇時所寫的極短故事，並為這些故事做了瀏覽的網站。\n你可以在這裡搜尋故事、隨機抽選故事，以及將喜歡的故事加入收藏。",
				links: [
					{
						link: "https://ttesttes93405.github.io/LiteraryDessert/index.html",
						title: "前往網站"
					}
				]
			},
			{
				title: "DROOM 夢門",
				picture: "pic/DROOM.png",
				video: "https://www.youtube.com/embed/3N6houOggT4?rel=0&amp;showinfo=0",
				subtitle: "2016/5 -",
				content: "與另一伙伴一同製作的畢業製作作品，想製作出一款規則單純但能有許多變化的遊戲，也希望各個年齡層都能喜歡。\n畢業後現由自己繼續開發。",
				links: []
			},			
			{
				title: "BEAN",
				picture: "pic/BEAN.png",
				video: "https://www.youtube-nocookie.com/embed/fKfu7L7hGbg?rel=0&amp;showinfo=0",
				subtitle: "2015/9 - 2016/1",
				content: "一人製作的手機益智遊戲，設計在等公車、蹲廁所時都能輕易的遊玩。\n設計時考量使用單手就可以操作的操作手勢，可以很輕易的用單指進行遊戲。",
				links: []
			}
			
		],
		timeEvents: [
			{
				year:"1994",
				data:[{
					title: "出生",
					month: "10月",
					content: "對我來說意義重大的時刻。",
					marginSpace:"200px"
				}]
			},
			{
				year: "2015",
				data:[{
					title: "BEAN",
					month: "9月",
					content: "一人製作的手機益智遊戲，第一次學習Unity3D所製作的遊戲。",
					marginSpace:"80px"
				}]
			},
			{
				year: "2016",
				data:[{
					title: "DROOM 夢門",
					month: "5月",
					content: "與另一伙伴一同製作的畢業製作作品，畢業後現由自己繼續開發。",
					marginSpace:"20px"
				},{
					title: "點心故事 Literary Dessert",
					month: "7月",
					content: "閒暇時所寫的極短故事，初學網頁後為這些故事做了瀏覽的網站。",
					marginSpace:"100px"
				}]
			},
			{
				year: "2017",
				data:[{
					title: "夢門DROOM獲「放視大賞-行動遊戲創作組-銀賞」",
					month: "5月",
					content: "於「放視大賞」獲得「遊戲類-行動遊戲創作組-銀賞」、「獨立遊戲精神獎」、「廠商特別獎-艾鳴遊戲-最佳遊戲獎」、「廠商特別獎-唯晶數位-遊戲創意獎」。",
					marginSpace:"30px"
				},{
					title: "開始傳奇網路遊戲遊戲企劃一職",
					month: "8月",
					content: "從2017年8月開始，於傳奇任職企劃。",
					marginSpace:"50px"
				}]
			},
			{
				year: "2018",
				data:[{
					title: "參加 2018台北電玩展 GooglePlay 築夢台灣專區",
					month: "1月",
					content: "受GooglePlay邀請，在2018台北電玩展GooglePlay 築夢台灣專區展示「DROOM夢門」。",
					marginSpace:"30px"
				},{
					title: "參加 2018 Kuso Game Jam",
					month: "4月",
					content: "參加 2018 Kuso Game Jam ，於兩天的時間內做出「The Hole」網頁版。",
					marginSpace:"60px"
				},{
					title: "The Hole 於 Longitude Exhibition 展出",
					month: "10月",
					content: "於 2018 Kuso Game Jam 做出的遊戲「The Hole」，在澳洲墨爾本的 Longitude Exhibition 展出，展期為：10/17 - 11/25。",
					marginSpace:"200px"
				}]
			},
			{
				year: "2019",
				data:[{
					title: "開始玩猴遊戲 Cloud Macaca 遊戲企劃一職",
					month: "6月",
					content: "從2019年6月開始，於玩猴遊戲 Cloud Macaca 任職企劃。",
					marginSpace:"200px"
				}]
			}

		],
		toggle:[
			false	//頭貼切換
		],
		nowPage: 0,
        currentCollection: 0,
        isShowCollectionWindow: false

	},
	mounted: function () {
		
		if (location.hash != "#loading"){
			document.getElementById("loading").setAttribute("style", "display: none");
			document.getElementById("app").setAttribute("style", "display: flex");
		}

		this.shuffle(this.collections);
		
	},
	methods:{
		calcTimeEventMargin: function(inx){			
			var value = 10;
			var timeEvs = vm.timeEvents;

			if (inx == (timeEvs.length-1)){ 
				value = 0;
			}
			else{
				var yearD = timeEvs[inx+1].year - timeEvs[inx].year;
				var monthD = timeEvs[inx+1].month - timeEvs[inx].month;
				value = yearD * 12 + monthD;
			}

			if (value > 200) value = 200;

			return (value * 10) + "px";
		},
		shuffle: function(array) {
			array.sort(() => Math.random() - 0.5);
		},
		goTop: function(){
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		}
		  
	}
})