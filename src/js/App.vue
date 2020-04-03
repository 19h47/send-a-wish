<template>
	<div id="app">
		<header v-if="showWish">
			<value></value>
		</header>
		<div class="container" ref="canvas">
			<transition name="fade" mode="out-in" appear>
				<div v-if="!showWish" key="button">
					<h1 style="line-height: 30px;">
						365 wishes<br />
						<span style="font-size: 18px; font-weight: 300;"
							>by <strong>ines a</strong> & <strong>19h47</strong></span
						>
					</h1>
					<button
						type="button"
						class="button"
						@click="
							showWish = !showWish;
							$store.dispatch('updateAction');
						"
					>
						Send a wish
					</button>
				</div>
				<div v-if="showWish" key="wish">
					<wish></wish>
				</div>
			</transition>
		</div>

		<transition name="fade">
			<footer v-if="showWish">
				<div class="Footer__column Footer__column--left">
					<button
						class="button"
						@click="$store.dispatch('updateAction')"
						type="button"
						style="margin-right: 7.5px;"
					>
						Reload
					</button>
					<button
						class="button"
						@click="share($refs.canvas)"
						type="button"
						style="margin: 0 15px 0 7.5px;"
					>
						Save
					</button>

					<url></url>
				</div>

				<div class="Footer__column Footer__column--right" style="color: white;">
					<small
						>By <a href="http://inesa.fr" target="_blank"><strong>ines a</strong></a> &
						<a href="http://19h47.fr" target="_blank"><strong>19h47</strong></a></small
					>
				</div>
			</footer>
		</transition>
	</div>
</template>

<script>
import wish from 'Components/Wish.vue';
import value from 'Components/Value.vue';
import url from 'Components/Url.vue';

import html2canvas from 'html2canvas';

export default {
	name: 'App',
	components: { wish, value, url },
	data() {
		return {
			showWish: false,
			canvas: null,
		};
	},
	methods: {
		share(element) {
			html2canvas(element).then(canvas => {
				const link = document.createElement('a');
				this.canvas = canvas.toDataURL('image/png');

				// const tab = window.open();

				// tab.document.body.style.margin = '0px';
				// tab.document.body.style.padding = '0px';

				// tab.document.body.innerHTML = `
				// 	<img
				// 		src="${this.canvas}"
				// 		width="${window.innerWidth}"
				// 		height="${window.innerHeight}">
				// `;

				link.download = 'send-a-wish.png';
				link.href = this.canvas;
				link.click();
			});
		},
	},
};
</script>

<style lang="scss">
html {
	height: 100%;
	width: 100%;
}
body {
	overflow: hidden;
	margin: 0;

	height: 100%;
	width: 100%;

	position: relative;
	font: {
		family: 'Work Sans', sans-serif;
		weight: 300;
		size: 18px;
	}
	line-height: 22px;
}

a {
	color: white;
}

#app {
	height: 100%;
	width: 100%;
}

h1,
.h1 {
	font: {
		size: 43px;
		weight: 500;
	}
	line-height: 44px;
}

h2,
.h2 {
	font-size: 32px;
	line-height: 44px;
}

h3,
.h3 {
	font-size: 24px;
	line-height: 44px;
}

.container {
	height: 100%;

	padding: {
		right: 15px;
		left: 15px;
	}

	@media (min-width: 768px) {
		padding: {
			right: 30px;
			left: 30px;
		}
	}

	background: black;
	color: white;

	display: flex;
	align-items: center;
	justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

.button {
	display: inline-block;
	height: 45px;
	border: {
		radius: 30px;
		color: white;
		style: solid;
		width: 1px;
	}
	padding: {
		right: 15px;
		left: 15px;
	}
	color: white;
	background: transparent;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	cursor: pointer;
	outline: none;
	font: {
		weight: 500;
	}

	transition: 0.15s ease-in-out;

	&:hover {
		background: white;
		color: black;
	}
}

header {
	position: absolute;
	top: 0;
	right: 0;
	left: 0;

	margin: {
		top: 30px;
		right: 30px;
		left: 30px;
	}

	display: flex;
	align-items: center;
}

footer {
	position: absolute;
	bottom: 0;
	right: 0;
	left: 0;

	margin: {
		bottom: 30px;
		right: 30px;
		left: 30px;
	}

	@media (min-width: 768px) {
		display: flex;
		align-items: center;
	}

	svg {
		height: 15px;
		width: 15px;

		fill: white;
	}
}

.Footer {
	&__column {
		width: 100%;

		@media (min-width: 768px) {
			width: 50%;
		}

		&--right {
			margin-top: 15px;
			margin-left: 15px;

			@media (min-width: 768px) {
				margin-top: 0;
				margin-left: 0;
				text-align: right;
			}
		}

		&--left {
			display: flex;
			align-items: center;
			@media (min-width: 768px) {
			}
		}
	}
}
</style>
