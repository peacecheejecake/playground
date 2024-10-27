<template>
	<div ref="wrapper" :class="['wrapper', scrollDirection]">
		<div class="tabs">
			<button type="button" class="tab">우리집</button>
			<button type="button" class="tab">살고싶은집</button>
			<button type="button" class="tab">임대준집</button>
		</div>
		<div class="home-select">선택 영역</div>
		<div class="sections">
			<button
				v-for="(section, index) in sections"
				:key="index"
				type="button"
				:class="['section', { active: activeIndex === index }]"
				@click="onClickSection(index)"
			>
				{{ section }}
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		scrollDirection: {
			type: String,
			default: '',
		},
		activeIndex: {
			type: Number,
			default: 0,
		},
		sections: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			// sectionIndex: 0,
			// sections: ['111', '222', '333', '444', '555'],
		};
	},
	computed: {
		// clientHeight() {
		// 	return this.$refs.wrapper.getBoundingClientRect().height;
		// },
	},
	methods: {
		clientHeight() {
			return this.$refs.wrapper.getBoundingClientRect().height;
		},
		onClickSection(index) {
			// this.sectionIndex = index;
			// console.log('&&&& sectionIndex', this.sectionIndex);
			this.$emit('click:section', index);
		},
	},
};
</script>

<style scoped lang="scss">
.wrapper {
	width: 100%;
	position: sticky;
	background: white;
	max-width: 424px;
	position: relative;

	.tabs {
		width: 100%;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #e0e0e0;
		margin-top: 12px;

		.tab {
			width: 100%;
			line-height: 40px;
			height: 40px;
			text-align: center;
			font-size: 15px;
		}
	}

	&.down,
	&.up {
		position: fixed;
		top: 0;
		width: 100%;
	}

	&.down .tabs {
		display: none;
	}

	.home-select {
		height: 54px;
		border-bottom: 1px solid #e0e0e0;
		padding: 14px 16px;
		box-sizing: border-box;
	}

	&.down .home-select {
		display: none;
	}

	.sections {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom: 1px solid #e0e0e0;
		padding: 0 16px;
		min-height: 56px;
		max-height: 112px;
		flex-wrap: wrap;

		.section {
			min-width: 56px;
			height: 40px;
			line-height: 40px;
			text-align: center;
			font-size: 14px;
			font-weight: 300;
			color: var(--font-icon-grey5);
			cursor: pointer;
			border-radius: 20px;
		}

		.section.active {
			background: blueviolet;
			color: white;
			font-weight: 500;
		}
	}
}
</style>
