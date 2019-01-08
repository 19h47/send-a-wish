<template>
	<transition name="fade" mode="out-in" appear>
		<img v-if="$store.getters['value']" src="@/img/png/thumb-up.png"/>
		<img v-else src="@/img/png/thumb-down.png"/>
	</transition>
</template>

<script>

import { mapState } from 'vuex';

export default {
	name: 'Value',
	data() {
		return {};
	},
	computed: {
		...mapState(['value']),
	},
	watch: {
		value(val) {
			const link = document.querySelector("link[rel*='icon']");

			if (val) {
				link.href = 'favicons/thumb-up.png';
			} else {
				link.href = 'favicons/thumb-down.png';
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
	.fade-enter-active, .fade-leave-active {
		transition: opacity 0.5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>
