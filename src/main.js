window.URL =
	process.env.NODE_ENV === 'production'
		? 'https://truth-or-dare.lebitclub.fr/'
		: 'http://localhost:8081/';

require.context('./assets/img/png/', true);

import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

import VueSvgSprite from 'vue-svg-sprite';
Vue.use(VueSvgSprite, {
	url: require('@/assets/sprite.svg'),
});

new Vue({
	store,
	render: h => h(App),
}).$mount('#app');
