<template>
	<div class="card" :style="`height:${height}px;`" :data-index="index">
		<h2 class="title">{{ title }}</h2>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: '',
		},
		index: {
			type: Number,
		},
	},
	data() {
		return {
			height: 50 * Math.round(Math.random() * 10),
		};
	},
};
</script>

<style scoped lang="scss">
.card {
	box-sizing: border-box;
	width: 100%;
	background: white;
	padding: 20px 16px 16px;
	margin: 8px 0;
	border-radius: 16px;
	min-height: 200px;

	.title {
		font-size: 20px;
		line-height: 28px;
		height: 28px;
		margin-bottom: 24px;
	}
}
</style>
