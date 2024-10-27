<template>
	<button type="button" @click="$emit('click')" :class="{ active }">
		<img :src="iconSrc" :alt="`nav-icon-${name}`" />
		<span>{{ name }}</span>
	</button>
</template>
<script>
export default {
	props: {
		icon: {
			type: String,
		},
		name: {
			type: String,
		},
		active: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		iconSrc() {
			const base = 'https://kbland.kr/images/land';
			const extension = '.png';
			const icon = this.active
				? `${this.icon.replace('_unselected', '')}_selected`
				: this.icon;
			return `${base}/${icon}${extension}`;
		},
	},
};
</script>

<style scoped lang="scss">
button {
	width: 100%;
	height: 68px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: none;
	cursor: pointer;
	position: relative;
	font-size: 12px;
	transition: all 0.2s;
	background: white;

	span {
		color: var(--font-icon-grey2, #80838d);
	}

	&.active span {
		font-weight: 700;
		color: var(--font-icon-grey5, #222);
	}

	img {
		width: 24px;
		min-width: 24px;
		height: 24px;
	}
}
</style>
