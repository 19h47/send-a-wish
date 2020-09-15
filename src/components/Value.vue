<template>
	<transition name="fade" mode="out-in" appear>
		<img v-if="value" :src="thumbUp" />
		<img v-else :src="thumbDown" />
	</transition>
</template>

<script>
import { mapState } from 'vuex';

import thumbUp from '@/assets/img/png/thumb-up.png';
import thumbDown from '@/assets/img/png/thumb-down.png';

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
		value(value = false) {
			const link = document.querySelector("link[rel*='icon']");

			link.href = value ? '/thumb-up.png' : '/thumb-down.png';
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
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
