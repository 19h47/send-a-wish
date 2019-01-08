import Vue from 'vue';
import App from 'js/App.vue';
import store from 'Store';

/* eslint-disable no-new */
new Vue({
	el: '#app',
	store,
	components: { App },
	template: '<App/>',
});
