// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuex from 'vuex'
import store from './store'
import 'mint-ui/lib/style.css'
import VueLazyLoad from 'vue-lazyload'
import 'vue2-animate/dist/vue2-animate.min.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad, {
		error: './static/error.png',
		loading: './static/bg.png'
	})
	/* eslint-disable no-new */
document.addEventListener('deviceready', function() {
	new Vue({
		el: '#app',
		router,
		store,
		template: '<App/>',
		components: {
			App
		}
	})
	window.navigator.splashscreen.hide()
}, false);


// new Vue({
// 	el: '#app',
// 	store,
// 	router,
// 	template: '<App/>',
// 	components: {
// 		App
// 	}
// })