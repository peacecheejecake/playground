<template>
	<article ref="article">
		<header ref="header">
			<div class="top-header">Wallet</div>
			<FixedHeader
				ref="fixedHeader"
				:scrollDirection="scrollDirection"
				@click:section="(index) => onClickSection(index)"
				:activeIndex="activeSectionIndex"
				:sections="cards.map(({ title }) => title)"
			/>
		</header>
		<section ref="section">
			<HomeCard
				v-for="({ title }, index) in cards"
				:key="index"
				ref="cards"
				:title="title"
				:index="index"
			>
				{{ index }}
			</HomeCard>
		</section>
	</article>
</template>

<script>
import FixedHeader from './FixedHeader.vue';
import HomeCard from './HomeCard.vue';

export default {
	components: {
		FixedHeader,
		HomeCard,
	},
	data() {
		return {
			scrollY: 0,
			scrollDirection: '',
			cards: [
				{ title: '111', visible: false },
				{ title: '222', visible: false },
				{ title: '333', visible: false },
				{ title: '444', visible: false },
				{ title: '555', visible: false },
				{ title: '666', visible: false },
				{ title: '777', visible: false },
				{ title: '888', visible: false },
				{ title: '999', visible: false },
				{ title: '1010', visible: false },
			],
			intersectionObserver: null,
			intersected: [],
			activeSectionIndex: 0,
			clickedIndex: null,
			sectionPositions: [],
		};
	},
	mounted() {
		this.sectionPositions = this.$refs.cards.map(
			(card) =>
				card.$el.getBoundingClientRect().top -
				this.$refs.section.getBoundingClientRect().top
		);

		this.$refs.article.addEventListener('scroll', this.handleScroll);
		this.initilizeObserver();

		// for debugging
		window.$$scrollTo = (y) => this.$refs.article.scrollTo(0, y);
	},
	beforeDestroy() {
		this.$refs.article.removeEventListener('scroll', this.handleScroll);
		this.intersectionObserver?.disconnect?.();
	},
	methods: {
		headerHeight() {
			return this.scrollY === 0
				? this.$refs.header.clientHeight
				: this.$refs.fixedHeader.clientHeight();
		},
		handleScroll() {
			this.makeHeader();
			this.fineTuneVisibliity();
			this.searchActiveSectionIndex();
		},
		searchActiveSectionIndex() {
			this.activeSectionIndex = this.intersected.findIndex(
				({ isVisible }) => isVisible
			);

			if (this.clickedIndex === null) {
				if (this.scrollY === 0) this.activeSectionIndex = 0;
				if (
					this.scrollY + this.$refs.article.clientHeight ===
					this.$refs.article.scrollHeight
				)
					this.activeSectionIndex = this.$refs.cards.length - 1;
			}
		},
		fineTuneVisibliity() {
			this.intersected = this.intersected.map((item) => {
				const { target, isIntersecting } = item;
				return {
					...item,
					isVisible:
						isIntersecting &&
						target.getBoundingClientRect().top > this.headerHeight(),
				};
			});
		},
		makeHeader() {
			const { scrollTop } = this.$refs.article;

			if (scrollTop === 0) {
				this.scrollDirection = '';
			} else {
				this.scrollDirection = scrollTop > this.scrollY ? 'down' : 'up';
			}

			this.scrollY = scrollTop;
		},
		initilizeObserver() {
			this.intersected = this.$refs.cards.map(() => ({
				target: null,
				isIntersecting: false,
				isVisible: false,
			}));

			this.intersectionObserver = new IntersectionObserver((entries) => {
				entries.forEach((entry) => {
					const { target, isIntersecting } = entry;
					const { index } = target.dataset;

					this.$set(this.intersected, index, {
						isIntersecting,
						target,
					});
				});
				// this.fineTuneVisibliity();
			});

			this.$refs.cards.forEach((card) => {
				this.intersectionObserver.observe(card.$el);
			});
		},
		async onClickSection(index) {
			if (this.activeSectionIndex === index) return;

			this.clickedIndex = index;
			this.$refs.article.scrollTo(0, this.sectionPositions[index] - 178);

			setTimeout(() => {
				this.activeSectionIndex = this.clickedIndex;
				this.clickedIndex = null;
			}, 50);
		},
	},
};
</script>

<style scoped lang="scss">
article {
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow: sticky;
	height: 100vh;
	overflow: scroll;

	/* .scroll-wrapper {
		width: 100%;
		height: 100%;
	} */
}

header {
	width: 100%;

	.top-header {
		width: 100%;
		height: 44px;
	}
}

section {
	width: 100%;
	background: #eef;
	padding: 0 16px;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
}
</style>
