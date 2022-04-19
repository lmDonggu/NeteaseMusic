import {
	baseUrl
} from './config.js'

// http://localhost:3000/playlist/detail
export function topList() {
	return new Promise(function(reslove, reject) {
		uni.request({
			url: `${baseUrl}/toplist/detail`,
			method: 'GET',
			data: {},
			success: (res) => {
				let result = res.data.list
				result.length = 4
				reslove(result)
			},
			fail: () => {},
			complete: () => {}
		})
	})
}
// http://localhost:3000/playlist/detail?id=19723756
export function list(listId) {
	return uni.request({
		url: `${baseUrl}/playlist/detail?id=${listId}`,
		method: 'GET'
	});
}

// 获取歌曲详情 音乐 id /song/detail?ids=347230,/song/detail?ids=347230,347231
export function songDetail(songId) {
	return uni.request({
		url: `${baseUrl}/song/detail?ids=${songId}`,
		method: 'GET'
	});
}
// 获取相似音乐 音乐 id /simi/song?id=347230   http://localhost:3000/simi/song?id=1935613660
export function songSimi(songId) {
	return uni.request({
		url: `${baseUrl}/simi/song?id=${songId}`,
		method: 'GET'
	});
}
// 歌曲评论 音乐 id /comment/music?id=186016&limit=1		http://localhost:3000/comment/music?id=1935613660
export function songComment(songId) {
	return uni.request({
		url: `${baseUrl}/comment/music?id=${songId}`,
		method: 'GET'
	});
}
// 获取歌词 音乐 id  /lyric?id=1935613660		http://localhost:3000/lyric?id=1935613660
export function songLyric(songId) {
	return uni.request({
		url: `${baseUrl}/lyric?id=${songId}`,
		method: 'GET'
	});
}
// 获取音乐 音乐 id /song/url?id=33894312 	http://localhost:3000/song/url?id=1935613660
export function songUrl(songId) {
	return uni.request({
		url: `${baseUrl}/song/url?id=${songId}`,
		method: 'GET'
	});
}
// 热搜列表(详细)|	http://localhost:3000/search/hot/detail
export function searchHot() {
	return uni.request({
		url: `${baseUrl}/search/hot/detail`,
		method: 'GET'
	});
}
// 搜索|必选参数:keywords:关键词|	http://localhost:3000/search?keywords=海阔天空
export function searchWord(word) {
	return uni.request({
		url: `${baseUrl}/search?keywords=${word}`,
		method: 'GET'
	});
}
// 搜索建议|必选参数:keywords:关键词|可选参数:type:如果传 'mobile' 则返回移动端数据|	http://localhost:3000/search/suggest?keywords=海阔天空&type=mobile
export function searchSuggest(word) {
	return uni.request({
		url: `${baseUrl}/search/suggest?keywords=${word}&type=mobile`,
		method: 'GET'
	});
}
