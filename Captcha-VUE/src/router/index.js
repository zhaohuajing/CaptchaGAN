import Vue from 'vue'
import VueRouter from 'vue-router'
import Page0 from '../views/Page0.vue'
import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'
import Page3 from '../views/Page3.vue'
import Page4 from '../views/Page4.vue'
import Page5 from '../views/Page5.vue'
import Page6 from '../views/Page6.vue'
import Page7 from '../views/Page7.vue'


let data = [{
"correctness":[[1, 1, 1, 1, 0.97, 1, 1, 1, 1],
               [1, 1, 0.94, 1, 1, 1, 1, 0.88, 1],
               [1, 1, 1, 1, 1, 1, 0.72, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1],
               [1, 1, 1, 1, 1, 1, 1, 1, 1]]
}];

let imageAccuracyRate = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0]];

let botIdentification = [[1, 0, 0, 1, 0, 1, 1, 1, 1],
                         [0, 0, 0, 0, 1, 1, 1, 0, 1],
                         [1, 1, 1, 1, 1, 1, 1, 1, 1],
                         [1, 1, 1, 1, 1, 1, 1, 0, 1],
                         [1, 1, 1, 0, 1, 1, 1, 1, 0],
                         [0, 0, 0, 0, 0, 0, 0, 0, 0]];

let totUserNum = 0;
data.forEach(e => {
	for (let i = 0; i < 6; i++)
		for (let j =0; j < 9; j++){
			imageAccuracyRate[i][j] += e.correctness[i][j];
		}
	totUserNum += 1;
});

for (let i = 0; i < 6; i++)
	for (let j =0; j < 9; j++){
		imageAccuracyRate[i][j] /= totUserNum;
		let temp = Math.round(imageAccuracyRate[i][j]*100);
		imageAccuracyRate[i][j] = temp;
	}

Vue.use(VueRouter)

const imageNameList =[["11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg"],
                ["21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg"],
                ["38.png", "35.png", "37.png", "39.png", "32.png", "33.png", "36.png", "31.png", "34.png"],
                ["41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.jpg", "46.jpg", "47.jpg", "48.jpg", "49.jpg"],
                ["51.png", "52.png", "53.png", "54.png", "55.png", "56.png", "57.png", "58.png", "59.png"],
                ["61.png", "62.png", "63.png", "64.png", "65.png", "66.png", "67.png", "68.png", "69.png"],
                ["albino rabbit_2.jpg", "albino rabbit_2.jpg", "albino rabbit_2.jpg", "albino rabbit_2.jpg", "albino rabbit_2.jpg", "albino rabbit_2.jpg", "albino rabbit_3.jpg", "albino rabbit_4.jpg", "albino rabbit_5.jpg"]];

const correctImage = [[true, true, true, false, true, true, true, true, false],
					[true, true, true, false, false, false, false, true, false],
					[false, false, false, true, false, false, true, false, true],
					[false, false, false, true, false, false, false, false, true],
					[true, true, false, false, false, false, false, false, false],
					[true, true, false, false, false, false, true, false, false],
					[true, true, true, false, true, true, true, true, false]];

let imageFeedList = [];
for (let i = 0; i < imageNameList.length; i++){
  imageFeedList.push([]);
  for(let j = 0; j < imageNameList[i].length; j++){
    imageFeedList[i].push(require("../assets/img/" + imageNameList[i][j]));
  }
}

const routes = [
  {
    path: '/',
    name: 'Page0',
    component: Page0,
    props: {imageList: imageFeedList[0]}
  },
  {
    path: '/1',
    name: 'Page1',
    component: Page1,
    props: {imageList: imageFeedList[1]}

  },
  {
    path: '/2',
    name: 'Page2',
    component: Page2,
    props: {imageList: imageFeedList[2]}

  },
  {
    path: '/3',
    name: 'Page3',
    component: Page3,
    props: {imageList: imageFeedList[3]}

  },
  {
    path: '/4',
    name: 'Page4',
    component: Page4,
    props: {imageList: imageFeedList[4]}

  },
  {
    path: '/5',
    name: 'Page5',
    component: Page5,
    props: {imageList: imageFeedList[5]}

  },
  {
    path: '/6',
    name: 'Page6',
    component: Page6,
    props: {imageList: imageFeedList, groundTruth: correctImage, eachAccuracy: imageAccuracyRate, eachBot: botIdentification}

  },
  {
    path: '/7',
    name: 'Page7',
    component: Page7,
    props: {imageList: imageFeedList, groundTruth: correctImage, everything: data}

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
