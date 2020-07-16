<template>
	<transition v-on:enter="enter" v-on:leave="leave" mode="out-in">
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
import gsap from 'gsap';
import SplitText from '@/vendors/SplitText';

export default {
	name: 'Wish',
	methods: {
		...mapState(['wish']),
		enter(el, done) {
			const splitText = this.split(el);

			gsap.fromTo(
				splitText.chars,
				{ y: 10, autoAlpha: 0 },
				{
					y: 0,
					autoAlpha: 1,
					stagger: 0.05,
					onComplete: done,
				},
			);
		},
		leave(el, done) {
			gsap.to(el, {
				autoAlpha: 0,
				y: -5,
				onComplete: done,
				stagger: 0.7,
			});
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
