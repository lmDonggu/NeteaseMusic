<template>
	<view class="detail">
		<view class="fixbg" :style="{ 'background-image' : 'url(' + songDetail.al.picUrl +')' }"></view>
		<musichead :title="songDetail.name" :icon="true" color="white"></musichead>
		<view class="container" v-show="isLoading">
			<scroll-view scroll-y="true">
				<view class="detail-play" @tap="handleToPlay">
					<image :src="songDetail.al.picUrl" :class="{ 'detail-play-run': isPlayRotate }" mode=""></image>
					<text class="iconfont" :class="iconPlay"></text>
					<view></view>
				</view>
				<!-- 歌词 -->
				<view class="detail-lyric">
					<view class="detail-lyric-wrap" :style="{transform: 'translateY('+ -(lyricIndex-1)*82 +'rpx)'}">
						<!-- <view class="detail-lyric-item">1 测试文字</view> -->
						<view class="detail-lyric-item" :class="{ active: lyricIndex == index }"
							v-for="(item, index) in songLyric" :key="index">{{item.lyric}}</view>
					</view>
				</view>
				<!-- 喜欢这首歌的人也听 -->
				<view class="detail-like">
					<view class="detail-like-head">喜欢这首歌的人也听</view>
					<view class="detail-like-item" v-for="(item,index) in songSimi" :key="item.id"
						@tap="hanldeToSimi(item.id)">
						<view class="detail-like-img">
							<image :src="item.album.picUrl" mode=""></image>
						</view>
						<view class="detail-like-song">
							<view>{{item.name}}</view>
							<view>
								<image v-if="item.privilege.flag > 60 && item.privilege.flag < 70"
									src="../../static/dujia.png" mode=""></image>
								<image v-if="item.privilege.maxbr === 999000" src="../../static/sq.png" mode=""></image>
								{{item.album.artists[0].name}}-{{item.name}}
							</view>
						</view>
						<text class="iconfont icon-bofang"></text>
					</view>
				</view>
				<!-- 精彩评论 -->
				<view class="detail-comment">
					<view class="detail-comment-head">精彩评论</view>
					<view class="detail-comment-item" v-for="(item, index) in songComment" :key="index">
						<!-- avatar -->
						<view class="detail-comment-img">
							<image :src="item.user.avatarUrl" mode=""></image>
						</view>
						<!-- comment content -->
						<view class="detail-comment-content">
							<view class="detail-comment-title">
								<view class="detail-comment-name">
									<view>{{item.user.nickname}}</view>
									<view v-if="item.timeStr.slice(0,1) === '昨'">{{ item.timeStr }}</view>
									<view v-else>{{item.time | formatTime}}</view>
								</view>
								<view class="detail-comment-like">
									<text>{{item.likedCount | formatCount}}</text>
									<text class="iconfont icon-dianzan"></text>
								</view>
							</view>
							<view class="detail-comment-text">
								<text v-if="item.beReplied.length">回复@{{item.beReplied[0].user.nickname}}:</text>
								{{item.content}}
							</view>
							<!-- 被回复评论 -->
							<view class="detail-comment-beReplied" v-if="item.beReplied.length">
								@{{item.beReplied[0].user.nickname}}:&nbsp;&nbsp;{{item.beReplied[0].content}}</view>
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
		songDetail,
		songSimi,
		songComment,
		songLyric,
		songUrl
	} from '../../common/api.js'
	export default {
		data() {
			return {
				songDetail: {
					al: {
						picUrl: ''
					}
				},
				songSimi: [],
				songComment: [],
				songLyric: [],
				lyricIndex: 0,
				iconPlay: 'icon-zanting',
				isPlayRotate: true,
				isLoading: false
			}
		},
		components: {
			musichead
		},
		onLoad(options) {
			this.getMusic(options.songId)
		},
		onUnload() {
			this.cancleLyricIndex()
			// #ifdef H5
			this.bgAudioManager.destroy()
			// #endif
		},
		onHide() {
			this.cancleLyricIndex()
			// #ifdef H5
			this.bgAudioManager.destroy()
			// #endif
		},
		methods: {
			getMusic(songId) {
				this.$store.commit('NEXT_ID', songId)

				uni.showLoading({
					title: '加载中...',
					icon: 'loading'
				});
				this.isLoading = false

				Promise.all([songDetail(songId), songSimi(songId), songComment(songId), songLyric(songId), songUrl(
					songId)]).then((res) => {
					// console.log(res);
					if (res[0][1].data.code === 200) {
						this.songDetail = res[0][1].data.songs[0]
					}
					if (res[1][1].data.code === 200) {
						this.songSimi = res[1][1].data.songs
					}
					if (res[2][1].data.code === 200) {
						this.songComment = res[2][1].data.hotComments
					}
					if (res[3][1].data.code === 200) {
						let lyric = res[3][1].data.lrc.lyric
						// console.log(lyric);
						let re = /\[([^\]]+)\]([^\[]+)/g
						// console.log(lyric.match(re));
						var result = []
						lyric.replace(re, ($0, $1, $2) => {
							result.push({
								"time": this.formatTimeToSec($1),
								"lyric": $2
							})
						})
						// console.log(result);
						this.songLyric = result
					}
					if (res[4][1].data.code === 200) {
						// #ifdef MP-WEIXIN
						this.bgAudioManager = uni.getBackgroundAudioManager();
						this.bgAudioManager.title = this.songDetail.name;
						// #endif

						// #ifdef H5
						if (!this.bgAudioManager) {
							this.bgAudioManager = uni.createInnerAudioContext()
						}
						this.iconPlay = 'icon-bofang'
						this.isPlayRotate = false
						// #endif

						// console.log(res[4][1].data.data[0].url);
						this.bgAudioManager.src = res[4][1].data.data[0].url || '';
						this.listenLyricIndex()
						this.bgAudioManager.onPlay(() => {
							this.iconPlay = 'icon-zanting'
							this.isPlayRotate = true
							this.listenLyricIndex()
						})
						this.bgAudioManager.onPause(() => {
							this.iconPlay = 'icon-bofang'
							this.isPlayRotate = false
							this.cancleLyricIndex();
						})
						this.bgAudioManager.onEnded(() => {
							this.getMusic(this.$store.state.nextId)
						})
					}
					this.isLoading = true
					uni.hideLoading()
				})
			},
			formatTimeToSec(value) {
				let arr = value.split(':')
				return (Number(arr[0] * 60) + Number(arr[1])).toFixed(1)
			},
			handleToPlay() {
				if (this.bgAudioManager.paused) {
					this.bgAudioManager.play()
				} else {
					this.bgAudioManager.pause()
				}
			},
			listenLyricIndex() {
				clearInterval(this.timer)
				this.timer = setInterval(() => {
					for (var i = 0; i < this.songLyric.length; i++) {
						if (this.bgAudioManager.currentTime > this.songLyric[this.songLyric.length - 1].time) {
							this.lyricIndex = songLyric.length - 1
							break
						}
						if (this.bgAudioManager.currentTime > this.songLyric[i].time && this.bgAudioManager
							.currentTime < this.songLyric[i + 1].time) {
							this.lyricIndex = i
						}
					}
					// console.log(this.lyricIndex);
				}, 500)
			},
			cancleLyricIndex() {
				clearInterval(this.timer)
			},
			hanldeToSimi(songId) {
				this.getMusic(songId)
			}
		}
	}
</script>

<style scoped>
	.detail-play {
		width: 580rpx;
		height: 580rpx;
		background-image: url(~@/static/disc.png);
		background-size: cover;
		margin: 214rpx auto 0 auto;
		position: relative;
	}

	.detail-play image {
		width: 370rpx;
		height: 370rpx;
		border-radius: 50%;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		animation: 10s linear move infinite;
		animation-play-state: paused;
	}

	.detail-play .detail-play-run {
		animation-play-state: running;
	}

	@keyframes move {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}

	.detail-play text {
		width: 100rpx;
		height: 100rpx;
		font-size: 100rpx;
		color: #fff;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		margin: auto;
	}

	.detail-play view {
		width: 230rpx;
		height: 360rpx;
		background-image: url(~@/static/needle.png);
		background-size: cover;
		position: absolute;
		left: 100rpx;
		top: -200rpx;
		right: 0;
		margin: auto;
	}

	.detail-lyric {
		font-size: 32rpx;
		line-height: 82rpx;
		height: 246rpx;
		text-align: center;
		overflow: hidden;
		color: rgba(110, 110, 110, 0.8);
	}

	.detail-lyric-wrap {
		transition: .5s;
	}

	.detail-lyric-item {
		height: 82rpx;
	}

	.detail-lyric-item.active {
		color: #fff;
	}

	.detail-like {
		margin: 0 30rpx;
	}

	.detail-like-head {
		font-size: 36rpx;
		color: #fff;
		margin: 50rpx 0;
	}

	.detail-like-item {
		display: flex;
		align-items: center;
		margin-bottom: 28rpx;
	}

	.detail-like-img {
		width: 82rpx;
		height: 82rpx;
		border-radius: 20rpx;
		overflow: hidden;
		margin-right: 20rpx;
	}

	.detail-like-img image {
		width: 100%;
		height: 100%;
	}

	.detail-like-song {
		flex: 1;
		color: rgba(200, 200, 200, 0.8);
	}

	.detail-like-song view:nth-child(1) {
		font-size: 28rpx;
		color: #fff;
		margin-bottom: 12rpx;
	}

	.detail-like-song view:nth-child(2) {
		font-size: 22rpx;
	}

	.detail-like-song image {
		width: 26rpx;
		height: 20rpx;
		margin-right: 10rpx;
	}

	.detail-like-item text {
		font-size: 50rpx;
		color: rgba(80, 80, 80, 0.8);
	}

	.detail-comment {
		margin: 0 30rpx;
	}

	.detail-comment-head {
		font-size: 36rpx;
		color: #fff;
		margin: 50rpx 0;
	}

	.detail-comment-item {
		margin-bottom: 28rpx;
		display: flex;
	}

	.detail-comment-img {
		width: 64rpx;
		height: 64rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-right: 18rpx;
	}

	.detail-comment-img image {
		width: 100%;
		height: 100%;
	}

	.detail-comment-content {
		flex: 1;
		padding-bottom: 40rpx;
		border-bottom: 2rpx solid #2a2a2a;
	}

	.detail-comment-title {
		display: flex;
		justify-content: space-between;
		color: rgba(200, 200, 200, 0.8);
		margin-bottom: 24rpx;
	}

	.detail-comment-name {}

	.detail-comment-name view:nth-child(1) {
		font-size: 28rpx;
		margin-bottom: 12rpx;
	}

	.detail-comment-name view:nth-child(2) {
		font-size: 20rpx;
		color: rgba(80, 80, 80, 0.8);
	}

	.detail-comment-like {
		font-size: 28rpx;
	}

	.detail-comment-like text:nth-child(1) {
		margin-right: 14rpx;
	}

	.detail-comment-like text:nth-child(2) {
		font-size: 32rpx;
	}

	.detail-comment-text {
		font-size: 28rpx;
		line-height: 40rpx;
		color: #fff;
	}

	.detail-comment-text text {
		padding-right: 28rpx;
	}

	.detail-comment-beReplied {
		background-color: rgba(120, 120, 120, 0.1);
		border: 1rpx solid rgba(150, 150, 150, 0.4);
		font-size: 26rpx;
		line-height: 40rpx;
		margin-top: 14rpx;
		padding: 12rpx 10rpx;
		border-radius: 8rpx;
		color: rgba(200, 200, 200, 0.8);
	}
</style>
