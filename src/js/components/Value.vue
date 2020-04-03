<template>
	<transition name="fade" mode="out-in" appear>
		<img v-if="$store.getters['value']" :src="thumbUp" />
		<img v-else :src="thumbDown" />
	</transition>
</template>

<script>
import { mapState } from 'vuex';

import thumbUp from '@/img/png/thumb-up.png';
import thumbDown from '@/img/png/thumb-down.png';

export default {
	name: 'Value',
	data() {
		return {
			thumbUp,
			thumbDown,
		};
	},
	computed: {
		...mapState(['value']),
	},
	watch: {
		value(val = false) {
			const link = document.querySelector("link[rel*='icon']");

			link.href = 'favicons/thumb-down.png';

			if (val) {
				link.href = 'favicons/thumb-up.png';
			}
		},
	},
};
</script>

<style lang="scss" scoped>
img {
	width: 30px;
	height: 30px;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>
