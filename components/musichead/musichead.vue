<template>
	<view class="music-head" :style="{color:color}">
		<view class="music-head-icon" v-if="icon" :class="{ 'music-head-iconblank' : iconblack }">
			<text class="iconfont icon-zuojiantou" @tap="handleToBack"></text>
			<text>|</text>
			<text class="iconfont icon-shouye" @tap="handleToHome"></text>
		</view>
		{{title}}
	</view>
</template>

<script>
	export default {
		name: "musichead",
		data() {
			return {};
		},
		props: ['title', 'icon', 'color', 'iconblack'],
		methods: {
			handleToBack() {
				uni.navigateBack();
			},
			handleToHome() {
				uni.navigateTo({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style scoped>
	.music-head {
		position: relative;
		width: 100%;
		height: 75px;
		font-size: 16px;
		line-height: 80px;
		text-align: center;
		color: #000;
	}

	.music-head-icon {
		position: absolute;
		left: 8px;
		top: 26px;
		width: 90px;
		height: 30px;
		background: rgba(0, 0, 0, .4);
		color: white;
		line-height: 30px;
		border-radius: 15px;
		display: flex;
		justify-content: space-evenly;
	}

	.music-head-icon text:nth-child(2) {
		font-size: 14px;
		font-weight: 100;
	}

	.music-head-iconblank {
		color: #000;
		border: 1px #eaeaea solid;
		background-color: #fff;
	}
</style>
