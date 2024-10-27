<template>
	<div class="global-wrapper">
		<GNB />
		<main class="contents-layer">
			<RouterView />
		</main>
	</div>
</template>

<script>
import { GNB } from './components/ui';

export default {
	components: {
		GNB,
	},
};
</script>

<style lang="scss">
.global-wrapper {
	width: 100vw;
	height: 100vh;
	display: flex;
}

main.contents-layer {
	width: 424px;
	height: 100%;
	box-shadow: 0 -6px 16px rgb(0 0 0 / 19%);
	overflow: hidden;
}
</style>
