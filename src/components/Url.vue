<template>
	<div>
		<a :href="envelope" style="margin: 0 7.5px;">
			<svg v-svg symbol="envelope" role="presentation"></svg>
		</a>
		<a :href="facebook" target="_blank" style="margin-left: 7.5px;">
			<svg v-svg symbol="facebook" role="presentation"></svg>
		</a>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		...mapGetters(['wish']),
		envelope() {
			// eslint-disable-next-line
			return `mailto:?subject=Send a wish&body=Je te souhaite : ${this.wish}%0D%0A%0D%0A – %0D%0A Amusez vous ! Vous aussi envoyez vos vœux -> ${window.URL}`;
		},
		facebook() {
			return `https://www.facebook.com/sharer/sharer.php?u=${window.URL}&quote=${this.wish}`;
		},
	},
};
</script>
