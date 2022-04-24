<template>
	<view>
		<!-- 状态栏 -->
		<view :style="{height:statusBarHeight + 'px'}"></view>

		<!-- 导航栏内容 -->
		<view class="music-head" :style="{color:color, height:navBarHeight + 'px', lineHeight:lineHeight + 'px'}">

			<!-- 按钮 -->
			<view class="music-head-icon" v-if="icon" :class="{ 'music-head-iconblank' : iconblack }"
				:style="{height:buttonHeight + 'px', top:buttonTop + 'px'}">
				<text class="iconfont icon-zuojiantou" @tap="handleToBack"></text>
				<text>|</text>
				<text class="iconfont icon-shouye" @tap="handleToHome"></text>
			</view>

			<!-- 标题 -->
			<view class="music-head-title">{{title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "musichead",
		data() {
			return {
				// 状态栏高度
				statusBarHeight: 20,
				// 导航栏高度
				navBarHeight: 40,
				lineHeight: 40,
				// 按钮高度
				buttonHeight: 32,
				// 按钮顶部高度
				buttonTop: 4
			}
		},
		props: ['title', 'icon', 'color', 'iconblack'],
		created() {
			// 获取手机系统信息
			const info = uni.getSystemInfoSync()
			// 设置状态栏高度
			this.statusBarHeight = info.statusBarHeight
			// // h5 app mp-alipay
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// 获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			// 导航栏高度 = (胶囊底部高度 - 状态栏的高度) + (胶囊顶部高度 - 状态栏的高度)
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info
				.statusBarHeight)
			this.lineHeight = this.navBarHeight
			// 胶囊高度
			this.buttonHeight = menuButtonInfo.bottom - menuButtonInfo.top
			// 胶囊顶部高度
			this.buttonTop = menuButtonInfo.top - info.statusBarHeight
			// #endif
		},
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
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		text-align: center;
		color: #000;
	}

	.music-head-icon {
		position: absolute;
		left: 8px;
		top: 4px;
		width: 90px;
		height: 32px;
		line-height: 32px;
		background: rgba(0, 0, 0, .4);
		color: white;
		border-radius: 16px;
		display: flex;
		justify-content: space-evenly;
	}

	/* 竖线 */
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
