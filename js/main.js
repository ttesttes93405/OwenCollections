var app = new Vue({
	el: '#app',
	data: {
		author: {
			title: "孫宇",
			subtitle: "Owen Sun",
			picture: "pic/Owen.jpg",
			content: "腦袋很小，簡單就好。",
			info: [{
				picture: "pic/Mail.svg",
				content: "ttesttes93405@gmail.com"
			}]
		},
		collections: [{
			title: "DROOM 夢門",
			picture: "",
			video: "https://www.youtube.com/embed/3N6houOggT4?rel=0&amp;showinfo=0",
			subtitle: "2016/5 -",
			content: "與另一伙伴一同製作的畢業製作作品，想製作出一款規則單純但能有許多變化的遊戲，也希望各個年齡層都能喜歡。\n畢業後現由自己繼續開發。",
			links: [{
				link: "https://play.google.com/store/apps/details?id=com.YY.Droom",
				title: "前往下載"}
			]
		},{
			title: "BEAN",
			picture: "",
			video: "https://www.youtube-nocookie.com/embed/fKfu7L7hGbg?rel=0&amp;showinfo=0",
			subtitle: "2015/9 - 2016/1",
			content: "一人製作的手機益智遊戲，設計在等公車、蹲廁所時都能輕易的遊玩。\n設計時考量使用單手就可以操作的操作手勢，可以很輕易的用單指進行遊戲。",
			links: [{
				link: "",
				title: "尚未開放"
			}]
		},{
			title: "點心故事 Literary Dessert",
			picture: "pic/LiteraryDessert.png",
			video: "",
			subtitle: "2016/7 - 2016/8",
			content: "閒暇時所寫的極短故事，並為這些故事做了瀏覽的網站。\n你可以在這裡搜尋故事、隨機抽選故事，以及將喜歡的故事加入收藏。",
			links: [{
				link: "https://ttesttes93405.github.io/LiteraryDessert/index.html",
				title: "前往網站"
			}]
		}]
	}
})