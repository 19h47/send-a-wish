import wishes from '@/wishes';

import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

// console.log(wishes);

export default new Vuex.Store({
	state: {
		index: 0,
		value: wishes[0].value,
		wish: wishes[0].content,
	},
	actions: {
		updateAction(context) {
			context.commit('updateMutation');
		},
	},
	mutations: {
		updateMutation(state) {
			const random = Math.floor(Math.random() * wishes.length);

			state.wish = wishes[random].content;
			state.value = wishes[random].value;
			state.index = random;
		},
	},
	getters: {
		index: state => state.index,
		value: state => state.value,
		wish: state => state.wish,
	},
});
