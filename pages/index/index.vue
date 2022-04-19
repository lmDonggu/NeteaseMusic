<template>
	<view>
		<!-- 主页标题-不显示button -->
		<musichead title="网易云音乐" :icon="false"></musichead>
		<view class="container">
			<scroll-view scroll-y="true">
				<!-- 搜索框 -->
				<view class="index-search" @tap="handleToSearch">
					<text class="iconfont icon-fangdajing"></text>
					<input type="text" placeholder="搜索歌曲" />
				</view>
				<!-- 骨架屏 -->
				<!-- <view v-if="isLoading">
							<m-for-skeleton :avatarSize="206" :row="3" :loading="isLoading" isarc="square" v-for="(item,key) in 4" :key="key" :titleStyle="{}" :title="false">
							</m-for-skeleton>
						</view> -->

				<view class="index-list">
					<!-- <view class="index-list" v-else> -->
					<view class="index-list-item" v-for="(item, index) in topList" :key="index"
						@tap="handleToList(item.id)">
						<view class="index-list-img">
							<image :src="item.coverImgUrl" mode=""></image>
							<text>{{item.updateFrequency}}</text>
						</view>
						<view class="index-list-test">
							<view v-for="(item, index) in item.tracks" :key="index">{{index + 1}}.{{item.first}}
								-{{item.second}}
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import '@/common/iconfont.css'
	import musichead from '../../components/musichead/musichead.vue'
	import {
		topList
	} from '../../common/api.js'
	export default {
		data() {
			return {
				topList: [],
				isLoading: true
			}
		},
		components: {
			musichead
			// mForSkeleton
		},
		onLoad() {
			topList().then((res) => {
				if (res.length) {
					setTimeout(() => {
						this.topList = res
						this.isLoading = false
					}, 1000)
				}
			})
		},
		methods: {
			handleToList(id) {
				uni.navigateTo({
					url: '/pages/list/list?id=' + id
				})
			},
			handleToSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		}

	}
</script>

<style scoped>
	.index {}

	.index-search {
		display: flex;
		align-items: center;
		height: 70rpx;
		margin: 70rpx 30rpx 30rpx 30rpx;
		background: #f7f7f7;
		border-radius: 50rpx;
	}

	.index-search text {
		font-size: 20rpx;
		margin-left: 26rpx;
		margin-right: 26rpx;
	}

	.index-search input {
		font-size: 28rpx;
		flex: 1;
	}

	.index-list {
		margin: 0 30rpx;
	}

	.index-list-item {
		display: flex;
		margin-bottom: 34rpx;
	}

	.index-list-img {
		width: 212rpx;
		height: 212rpx;
		position: relative;
		border-radius: 30rpx;
		overflow: hidden;
		margin-right: 22rpx;
		flex: 0 0 212rpx;
	}

	.index-list-img image {
		width: 100%;
		height: 100%;
	}

	.index-list-img text {
		position: absolute;
		left: 12rpx;
		bottom: 16rpx;
		color: #fff;
		font-size: 20rpx;
	}

	.index-list-test {
		flex: 1;
		width: 0;
		font-size: 24rpx;
		line-height: 66rpx;
	}

	.index-list-test view {
		width: 86%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
