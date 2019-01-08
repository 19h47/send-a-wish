<template>
	<div>
		<a :href="envelope" style="margin: 0 7.5px;">
			<svg>
				<use xlink:href="#envelope"></use>
			</svg>
		</a>
		<a :href="facebook" target="_blank" style="margin-left: 7.5px;">
			<svg>
				<use xlink:href="#facebook"></use>
			</svg>
		</a>
	</div>
</template>

<script>

import { mapState } from 'vuex';

export default {
	computed: {
		...mapState(['wish']),
		envelope() {
			// eslint-disable-next-line
			return `mailto:?subject=Send a wish&body=Je te souhaite : ${this.$store.getters.wish}%0D%0A%0D%0A – %0D%0A Amusez vous ! Vous aussi envoyez vos vœux -> ${window.URL}`;
		},
		facebook() {
			return `https://www.facebook.com/sharer/sharer.php?u=${window.URL}&quote=${this.$store.getters.wish}`;
		},
	},
};

</script>
