import { 
	author, 
	collections,
	timeEvents,
	} from "../data/data.js";


Vue.component('time-events', {
	props: {
		timeEvents: {
			type: Object,
			required: true,
		}
	},
	template: `
	<div class="time-events">
		<div class="time-event-year" v-for="yearItem in timeEvents">

			<div class="time-event-year-date">
				<h2>{{yearItem.year}}</h2>
			</div>

			<div class="time-event" v-for="item in yearItem.data"  v-bind:style="{'padding-top':item.marginSpace}">

				<div class="time-event-dot">
					<div class="time-event-dot-img"></div>
				</div>

				<div class="time-event-date">
					<h3>{{item.month}}</h3>
				</div>
				<div class="time-event-info">

					<h1 class="time-event-info-title">{{item.title}}</h1>
					<p class="time-event-info-text">{{item.content}}</p>

				</div>


			</div>
		</div>
	</div>
	`,
});

Vue.component('card', {
	props: {
		item: {
			type: Object,
			required: true,
		},
	},
	template: `
	<div class="card">                  
		<div class="card-body">

			<div class="card-head">
				<img class="card-img-top" v-bind:src="item.picture" />
				<div class="card-head-text">
					<h1 class="card-title font-color-g-light1">{{item.title}}</h1>
					<h2 class="card-subtitle font-color-g-light3">{{item.subtitle}}</h2>
				</div>
			</div>

			<div class="card-video embed-responsive" v-if="item.video!=''" v-bind:style="{'padding-top': item.videoRatio*100 + '%'}">
				<video v-if="item.video.substring(item.video.length-4)==='.mp4'" 
				v-bind:src="item.video" 
				type="video/mp4" 
				autoplay muted loop controls ></video>
				<iframe v-else class="embed-responsive-item" v-bind:src="item.video" scrolling="no"></iframe>
			</div>
			
			<div class="card-text font-color-g-light2">
				<p>{{item.content}}</p>
			</div>

			<div class="card-link-container">
				<a v-bind:href="itemLink.link" target="_blank"
					v-on:click.stop="" 
					v-for="itemLink in item.links"
					class="card-btn hoverable-btn">
					<img v-if="itemLink.icon!==''" v-bind:src="itemLink.icon" />
					<p>{{itemLink.title}}</p>
				</a>
			</div>
		</div>
	</div>
	`,
});




const vm = new Vue({
	el: '#app',
	data: {
		author,
		collections,
		timeEvents,
		toggle:[
			false	//頭貼切換
		],
		nowPage: 0,
		showTop: false,
	},
	mounted: function () {
		
		if (location.hash !== "#loading"){
			document.querySelector("#loading").style = "display: none";
		}

		this.sortBySortingOrder(this.collections);

		window.addEventListener('scroll', (e) => {
			this.onScroll(window.scrollY);
		});
		
	},
	methods: {
		sortBySortingOrder: function(array) {
			array.sort((a,b) => {
				if(a.sortingOrder>b.sortingOrder)	return 1;
				if(a.sortingOrder<b.sortingOrder)	return -1;
				if(a.sortingOrder===b.sortingOrder)	return Math.random() - 0.5;	//相等的情況隨機排序
			});
		},
		goTop: function(){
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		},
		onScroll: function(y){
			this.showTop = y > (window.innerHeight * 0.5);
		},
		getRandomPictures: function(){

			let result = [];
			for(let i=0; i<this.collections.length; i++){
				result.push(this.collections[i].picture);
			}

			let shuffleArray = function(array) {
				for (var i = array.length - 1; i > 0; i--) {
					var j = Math.floor(Math.random() * (i + 1));
					var temp = array[i];
					array[i] = array[j];
					array[j] = temp;
				}
			}

			shuffleArray(result);

			return result;

		}
	}
})