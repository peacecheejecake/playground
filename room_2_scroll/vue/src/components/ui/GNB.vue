<template>
	<nav class="gnb">
		<NavButton
			name="홈"
			icon="ic_functional_navigation_home_24"
			:active="false"
		/>
		<NavButton
			name="지도"
			icon="ic_functional_navigation_map_24_unselected"
			:active="false"
		/>
		<NavButton
			name="우리집"
			icon="ic_functional_navigation_my_24_unselected"
			:active="true"
		/>
		<NavButton
			name="커뮤니티"
			icon="ic_functional_navigation_community_24_unselected"
			:active="false"
		/>
		<NavButton
			name="메뉴"
			icon="ic_functional_navigation_menu_24_unselected"
			:active="false"
		/>
	</nav>
</template>

<script>
import NavButton from './NavButton.vue';

export default {
	components: {
		NavButton,
	},
};
</script>

<style scoped lang="scss">
.gnb {
	z-index: 999;
	width: 72px;
	height: 100vh;
	max-width: none;
	left: 0;
	top: 0;
	border-radius: 0;
	border-right: 1px solid var(--line-line1, #f3f3f3);
	background: white;
}
</style>
