<template>
	<transition
		v-on:enter="enter"
		v-on:leave="leave"
		mode="out-in"
	>
		<div
			v-if="wish()"
			class="h3"
			style="font-weight: 500; line-height: 30px;"
			v-html="wish()"
			:key="wish()"
		></div>
	</transition>
</template>

<script>

import { mapState } from 'vuex';
import { TweenMax } from 'gsap';
import SplitText from 'Vendors/SplitText';

export default {
	name: 'Wish',
	methods: {
		...mapState(['wish']),
		enter(el, done) {
			const splitText = this.split(el);

			TweenMax.staggerFromTo(
				splitText.chars,
				1,
				{ y: 10, autoAlpha: 0 },
				{ y: 0, autoAlpha: 1 },
				0.05,
				() => done(),
			);
		},
		leave(el, done) {
			TweenMax.to(
				el,
				0.7,
				{
					autoAlpha: 0,
					y: -5,
					onComplete: done,
				},
			);
		},
		split(text) {
			return new SplitText(text, {
				type: 'chars,words,lines',
				charsClass: 'character',
				wordsClass: 'word',
				linesClass: 'line',
			});
		},
	},
};

</script>
