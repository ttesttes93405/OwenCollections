var vm = new Vue({
	el: '#app',
	data: {
		author: {
			title: "孫宇",
			subtitle: "Owen Sun",
			picture: ["pic/Owen.jpg","pic/Owen2.jpg"],
			content: "腦袋很小，簡單就好。",
			info: [
				{
					picture: "pic/Mail.svg",
					content: "ttesttes93405@gmail.com"
				}
			]
		},
		collections: [
			{
				title: "BEAN",
				picture: "",
				video: "https://www.youtube-nocookie.com/embed/fKfu7L7hGbg?rel=0&amp;showinfo=0",
				subtitle: "2015/9 - 2016/1",
				type: "Project",
				content: "一人製作的手機益智遊戲，設計在等公車、蹲廁所時都能輕易的遊玩。\n設計時考量使用單手就可以操作的操作手勢，可以很輕易的用單指進行遊戲。",
				links: []
			},{
				title: "DROOM 夢門",
				picture: "",
				video: "https://www.youtube.com/embed/3N6houOggT4?rel=0&amp;showinfo=0",
				subtitle: "2016/5 -",
				type: "Project",
				content: "與另一伙伴一同製作的畢業製作作品，想製作出一款規則單純但能有許多變化的遊戲，也希望各個年齡層都能喜歡。\n畢業後現由自己繼續開發。",
				links: [
					{
						link: "https://play.google.com/store/apps/details?id=com.YY.Droom",
						title: "前往下載"
					}
				]
			},{
				title: "點心故事 Literary Dessert",
				picture: "pic/LiteraryDessert.svg",
				video: "",
				subtitle: "2016/7 - 2016/8",
				type: "Project",
				content: "閒暇時所寫的極短故事，並為這些故事做了瀏覽的網站。\n你可以在這裡搜尋故事、隨機抽選故事，以及將喜歡的故事加入收藏。",
				links: [
					{
						link: "https://ttesttes93405.github.io/LiteraryDessert/index.html",
						title: "前往網站"
					}
				]
			},{
				title: "The Hole",
				picture: "",
				video: "https://www.youtube-nocookie.com/embed/GNgrLjJVaRU?rel=0&amp;showinfo=0",
				subtitle: "2018/4",
				type: "Project",
				content: "參加2018 Kuso Game Jam ，在不到兩天的時間內迅速做出遊戲原型，是會讓人強迫症發作的小遊戲。",
				links: [
					{
						link: "https://sunyu.itch.io/the-hole",
						title: "玩網頁版"
					}
				]
			},{
				title: "受邀參加 2018台北電玩展 GooglePlay 築夢台灣專區",
				picture: "",
				video: "https://www.youtube-nocookie.com/embed/Quxd9ydNG4Q?rel=0&amp;showinfo=0",
				subtitle: "2018/1",
				type: "Event",
				content: "受GooglePlay邀請，在2018台北電玩展展示「DROOM夢門」，還為此量身訂做精美的影片。\n同樣受邀參展的作品還有：Walkr、OPUS-靈魂之橋、知識王LIVE，及Lanota。",
				links: []
			},{
				title: "任職企劃(傳奇網路遊戲)",
				picture: "pic/x-legend.png",
				video: "",
				subtitle: "2017/8 - ",
				type: "Event",
				content: "從2017年8月開始，於傳奇任職企劃。\n主要負責系統與介面，規劃功能、撰寫相關文件。",
				links: []
			}
		],
		timeEvents: [
			{
				title: "出生",
				year: "1994",
				month: "10",
				content: "對我來說意義重大的時刻。",
				marginBottom:"200px"
			},{
				title: "BEAN",
				year: "2015",
				month: "9",
				content: "一人製作的手機益智遊戲，第一次學習Unity3D所製作的遊戲。",
				marginBottom:"80px"
			},{
				title: "DROOM 夢門",
				year: "2016",
				month: "5",
				content: "與另一伙伴一同製作的畢業製作作品，畢業後現由自己繼續開發。",
				marginBottom:"20px"
			},{
				title: "點心故事 Literary Dessert",
				year: "2016",
				month: "7",
				content: "閒暇時所寫的極短故事，初學網頁後為這些故事做了瀏覽的網站。",
				marginBottom:"100px"
			},{
				title: "夢門DROOM獲「放視大賞-行動遊戲創作組-銀賞」",
				year: "2017",
				month: "5",
				content: "於「放視大賞」獲得「遊戲類-行動遊戲創作組-銀賞」、「獨立遊戲精神獎」、「廠商特別獎-艾鳴遊戲-最佳遊戲獎」、「廠商特別獎-唯晶數位-遊戲創意獎」。",
				marginBottom:"30px"
			},{
				title: "開始企劃一職(傳奇網路遊戲)",
				year: "2017",
				month: "8",
				content: "從2017年8月開始，於傳奇任職企劃。",
				marginBottom:"50px"
			},{
				title: "參加 2018台北電玩展 GooglePlay 築夢台灣專區",
				year: "2018",
				month: "1",
				content: "受GooglePlay邀請，在2018台北電玩展GooglePlay 築夢台灣專區展示「DROOM夢門」。",
				marginBottom:"30px"
			},{
				title: "參加 2018 Kuso Game Jam",
				year: "2018",
				month: "4",
				content: "參加 2018 Kuso Game Jam ，於兩天的時間內做出「The Hole」網頁版。",
				marginBottom:"200px"
			}

		],
		text:[
			"總覽",
			"時間表"
		],
		toggle:[
			false	//頭貼切換
		],
		nowPage: 0
		
	},
	mounted: function () {},
	methods:{
		calcTimeEventMargin: function(inx){			
			var value = 10;
			//return (value * 10) + "px";
			var timeEvs = vm.timeEvents;
			console.log(inx);

			if (inx == (timeEvs.length-1)){ 
				value = 0;
			}
			else{
				var yearD = timeEvs[inx+1].year - timeEvs[inx].year;
				var monthD = timeEvs[inx+1].month - timeEvs[inx].month;
				value = yearD * 12 + monthD;
			}

			if (value > 200) value = 200;

			console.log((value * 10) + "px");
			return (value * 10) + "px";
		}
	}
})