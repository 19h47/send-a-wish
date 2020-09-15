<template>
	<transition v-on:enter="enter" v-on:leave="leave" mode="out-in">
		<div
			v-if="wish"
			class="h3"
			style="font-weight: 500; line-height: 30px"
			v-html="wish()"
			:key="wish()"
		/>
	</transition>
</template>

<script>
import { mapGetters } from 'vuex';
import gsap from 'gsap';
import SplitText from '@/vendors/SplitText';

const split = text => {
	return new SplitText(text, {
		type: 'chars,words,lines',
		charsClass: 'character',
		wordsClass: 'word',
		linesClass: 'line',
	});
};

const enter = (el, done) => {
	const splitText = split(el);

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
};

const leave = (el, done) => {
	gsap.to(el, {
		autoAlpha: 0,
		y: -5,
		onComplete: done,
		stagger: 0.7,
	});
};

export default {
	name: 'Wish',
	methods: {
		...mapGetters(['wish']),
		enter,
		leave,
	},
};
</script>
