(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"0951":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"musichead",data:function(){return{}},props:["title","icon","color","iconblack"],methods:{handleToBack:function(){uni.navigateBack()},handleToHome:function(){uni.navigateTo({url:"/pages/index/index"})}}};e.default=a},"3a7c":function(t,e,n){var a=n("b39d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("4bd88563",a,!0,{sourceMap:!1,shadowMode:!1})},"3d68":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.baseUrl=void 0;var a="https://autumnfish.cn";e.baseUrl=a},"51f0":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".music-head[data-v-46dd7b8f]{position:relative;width:100%;height:75px;font-size:16px;line-height:80px;text-align:center;color:#000}.music-head-icon[data-v-46dd7b8f]{position:absolute;left:8px;top:26px;width:90px;height:30px;background:rgba(0,0,0,.4);color:#fff;line-height:30px;border-radius:15px;display:flex;justify-content:space-evenly}.music-head-icon uni-text[data-v-46dd7b8f]:nth-child(2){font-size:14px;font-weight:100}.music-head-iconblank[data-v-46dd7b8f]{color:#000;border:1px #eaeaea solid;background-color:#fff}",""]),t.exports=e},"5e04":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@font-face{font-family:iconfont;\r\n\t/* Project id 3283931 */src:url(//at.alicdn.com/t/font_3283931_c27tar177b8.eot?t=1650355354309);\r\n\t/* IE9 */src:url(//at.alicdn.com/t/font_3283931_c27tar177b8.eot?t=1650355354309#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/font_3283931_c27tar177b8.woff2?t=1650355354309) format("woff2"),url(//at.alicdn.com/t/font_3283931_c27tar177b8.woff?t=1650355354309) format("woff"),url(//at.alicdn.com/t/font_3283931_c27tar177b8.ttf?t=1650355354309) format("truetype"),url(//at.alicdn.com/t/font_3283931_c27tar177b8.svg?t=1650355354309#iconfont) format("svg")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-bofang2:before{content:"\\e624"}.icon-bofang3:before{content:"\\e62b"}.icon-zuojiantou:before{content:"\\e6e1"}.icon-fangdajing:before{content:"\\e6e4"}.icon-icon:before{content:"\\e6a0"}.icon-yousanjiao:before{content:"\\e629"}.icon-guanbi:before{content:"\\e6cc"}.icon-zanting:before{content:"\\e62a"}.icon-bofang:before{content:"\\e710"}.icon-shouye:before{content:"\\e619"}.icon-bofang1:before{content:"\\e60e"}.icon-fenxiang:before{content:"\\e618"}.icon-dianzan:before{content:"\\e61a"}',""]),t.exports=e},6062:function(t,e,n){"use strict";var a=n("6d61"),i=n("6566");t.exports=a("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6566:function(t,e,n){"use strict";var a=n("9bf2").f,i=n("7c73"),o=n("e2cc"),r=n("0366"),s=n("19aa"),c=n("2266"),u=n("7dd0"),d=n("2626"),l=n("83ab"),f=n("f183").fastKey,h=n("69f3"),v=h.set,g=h.getterFor;t.exports={getConstructor:function(t,e,n,u){var d=t((function(t,a){s(t,d,e),v(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=a&&c(a,t[u],t,n)})),h=g(e),p=function(t,e,n){var a,i,o=h(t),r=m(t,e);return r?r.value=n:(o.last=r={index:i=f(e,!0),key:e,value:n,previous:a=o.last,next:void 0,removed:!1},o.first||(o.first=r),a&&(a.next=r),l?o.size++:t.size++,"F"!==i&&(o.index[i]=r)),t},m=function(t,e){var n,a=h(t),i=f(e);if("F"!==i)return a.index[i];for(n=a.first;n;n=n.next)if(n.key==e)return n};return o(d.prototype,{clear:function(){var t=this,e=h(t),n=e.index,a=e.first;while(a)a.removed=!0,a.previous&&(a.previous=a.previous.next=void 0),delete n[a.index],a=a.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,n=h(e),a=m(e,t);if(a){var i=a.next,o=a.previous;delete n.index[a.index],a.removed=!0,o&&(o.next=i),i&&(i.previous=o),n.first==a&&(n.first=i),n.last==a&&(n.last=o),l?n.size--:e.size--}return!!a},forEach:function(t){var e,n=h(this),a=r(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){a(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),o(d.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return p(this,0===t?0:t,e)}}:{add:function(t){return p(this,t=0===t?0:t,t)}}),l&&a(d.prototype,"size",{get:function(){return h(this).size}}),d},setStrong:function(t,e,n){var a=e+" Iterator",i=g(e),o=g(a);u(t,e,(function(t,e){v(this,{type:a,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),d(e)}}},"87f6":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={musichead:n("9a02").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"search"},[n("musichead",{attrs:{title:"搜索",icon:!0,iconblack:!0}}),n("v-uni-view",{staticClass:"container"},[n("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[n("v-uni-view",{staticClass:"search-search"},[n("v-uni-text",{staticClass:"iconfont icon-fangdajing"}),n("v-uni-input",{attrs:{type:"text",placeholder:"搜索歌曲"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.handleToSearch(t.searchWord)},input:function(e){arguments[0]=e=t.$handleEvent(e),t.handleToSuggest.apply(void 0,arguments)}},model:{value:t.searchWord,callback:function(e){t.searchWord=e},expression:"searchWord"}}),n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:1!=t.searchType,expression:"searchType != 1"}],staticClass:"iconfont icon-guanbi",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleToClose.apply(void 0,arguments)}}})],1),1==t.searchType?[n("v-uni-view",{staticClass:"search-history"},[n("v-uni-view",{staticClass:"search-history-head"},[n("v-uni-text",[t._v("历史记录")]),n("v-uni-text",{staticClass:"iconfont icon-icon",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleToClear.apply(void 0,arguments)}}})],1),n("v-uni-view",{staticClass:"search-history-list"},[t._l(t.searchHistory,(function(e,a){return n("v-uni-view",{key:a,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleToWord(e)}}},[t._v(t._s(e))])})),n("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:0==t.searchHistory.length,expression:"searchHistory.length == 0"}]},[t._v("无历史记录")])],2)],1),n("v-uni-view",{staticClass:"search-hot"},[n("v-uni-view",{staticClass:"search-hot-head"},[t._v("热搜榜")]),t._l(t.searchHot,(function(e,a){return n("v-uni-view",{key:a,staticClass:"search-hot-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleToWord(e.searchWord)}}},[n("v-uni-view",{staticClass:"search-hot-top"},[t._v(t._s(a+1))]),n("v-uni-view",{staticClass:"search-hot-word"},[n("v-uni-view",[t._v(t._s(e.searchWord)),n("v-uni-image",{attrs:{src:e.iconUrl,mode:"aspectFit"}})],1),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!(""===e.content),expression:"!(item.content === '')"}]},[t._v(t._s(e.content))])],1),n("v-uni-text",{staticClass:"search-hot-count"},[t._v(t._s(e.score))])],1)}))],2)]:2==t.searchType?[n("v-uni-view",{staticClass:"search-result"},t._l(t.searchList,(function(e,a){return n("v-uni-view",{key:a,staticClass:"search-result-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleToDetail(e.id)}}},[n("v-uni-view",{staticClass:"search-result-word"},[n("v-uni-view",[t._v(t._s(e.name))]),n("v-uni-view",[t._v(t._s(e.artists[0].name)+" - "+t._s(e.album.name))])],1),n("v-uni-text",{staticClass:"iconfont icon-bofang1"})],1)})),1)]:3==t.searchType?[n("v-uni-view",{staticClass:"search-suggest"},[n("v-uni-view",{staticClass:"search-suggest-head"},[t._v("搜索“"+t._s(t.searchWord)+"”")]),t._l(t.searchSuggest,(function(e,a){return n("v-uni-view",{key:a,staticClass:"search-suggest-item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.handleToWord(e.keyword)}}},[n("v-uni-text",{staticClass:"iconfont icon-fangdajing"}),t._v(t._s(e.keyword))],1)}))],2)]:t._e()],2)],1)],1)},o=[]},9009:function(t,e,n){"use strict";var a=n("3a7c"),i=n.n(a);i.a},"942f":function(t,e,n){"use strict";n.r(e);var a=n("0951"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},9699:function(t,e,n){var a=n("5e04");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("59c7f2f0",a,!0,{sourceMap:!1,shadowMode:!1})},"9a02":function(t,e,n){"use strict";n.r(e);var a=n("e14e"),i=n("942f");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("eb8b");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"46dd7b8f",null,!1,a["a"],r);e["default"]=c.exports},b39d:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".search-search[data-v-2fc691a6]{display:flex;align-items:center;height:%?70?%;margin:%?10?% %?30?% %?30?% %?30?%;background:#f7f7f7;border-radius:%?50?%}.search-search uni-text[data-v-2fc691a6]{margin:0 %?26?%}.search-search uni-input[data-v-2fc691a6]{flex:1;font-size:%?26?%}.search-history[data-v-2fc691a6]{margin:0 %?30?% %?50?%}.search-history-head[data-v-2fc691a6]{display:flex;justify-content:space-between;margin-bottom:%?36?%}.search-history-list[data-v-2fc691a6]{display:flex;flex-wrap:wrap;font-size:%?22?%}.search-history-list uni-view[data-v-2fc691a6]{padding:%?16?% %?28?%;border-radius:%?40?%;margin-right:%?30?%;margin-bottom:%?30?%;background:#f7f7f7}.search-history-list uni-text[data-v-2fc691a6]{padding:%?16?% %?28?%;margin-bottom:%?30?%;color:#ccc}.search-hot[data-v-2fc691a6]{margin:0 %?30?%;overflow:hidden}.search-hot-head[data-v-2fc691a6]{margin-bottom:%?36?%}.search-hot-item[data-v-2fc691a6]{display:flex;align-items:center;margin-bottom:%?58?%}.search-hot-top[data-v-2fc691a6]{color:#fb2222;width:%?60?%;margin-left:%?8?%}.search-hot-word[data-v-2fc691a6]{flex:1;width:0}.search-hot-word uni-view[data-v-2fc691a6]:nth-child(1){font-size:%?30?%;color:#000}.search-hot-word uni-view[data-v-2fc691a6]:nth-child(2){font-size:%?22?%;color:#878787;margin-top:%?8?%;width:92%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.search-hot-word uni-image[data-v-2fc691a6]{width:%?48?%;height:%?22?%;margin-left:%?8?%}.search-hot-count[data-v-2fc691a6]{color:#878787;font-size:%?22?%}.search-result[data-v-2fc691a6]{border-top:%?2?% solid #e4e4e4;padding:%?30?%}.search-result-item[data-v-2fc691a6]{display:flex;justify-content:space-between;align-items:center;padding-bottom:%?30?%;margin-bottom:%?30?%;border-bottom:%?2?% solid #e4e4e4}.search-result-word uni-view[data-v-2fc691a6]:nth-child(1){font-size:%?28?%;color:#235790;margin-bottom:%?12?%}.search-result-word uni-view[data-v-2fc691a6]:nth-child(2){font-size:%?22?%;color:#898989}.search-result-word uni-text[data-v-2fc691a6]{font-size:%?50?%}.search-suggest[data-v-2fc691a6]{border-top:%?2?% #e4e4e4 solid;padding:%?30?%;font-size:%?26?%}.search-suggest-head[data-v-2fc691a6]{color:#4574a4;margin-bottom:%?74?%;font-size:%?26?%}.search-suggest-item[data-v-2fc691a6]{color:#5d5d5d;margin-bottom:%?74?%}.search-suggest-item uni-text[data-v-2fc691a6]{color:#bdbdbd;margin-right:%?28?%;position:relative;top:%?2?%}",""]),t.exports=e},c618:function(t,e,n){"use strict";n("99af"),n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.topList=i,e.list=o,e.songDetail=r,e.songSimi=s,e.songComment=c,e.songLyric=u,e.songUrl=d,e.searchHot=l,e.searchWord=f,e.searchSuggest=h;var a=n("3d68");function i(){return new Promise((function(t,e){uni.request({url:"".concat(a.baseUrl,"/toplist/detail"),method:"GET",data:{},success:function(e){var n=e.data.list;n.length=4,t(n)},fail:function(){},complete:function(){}})}))}function o(t){return uni.request({url:"".concat(a.baseUrl,"/playlist/detail?id=").concat(t),method:"GET"})}function r(t){return uni.request({url:"".concat(a.baseUrl,"/song/detail?ids=").concat(t),method:"GET"})}function s(t){return uni.request({url:"".concat(a.baseUrl,"/simi/song?id=").concat(t),method:"GET"})}function c(t){return uni.request({url:"".concat(a.baseUrl,"/comment/music?id=").concat(t),method:"GET"})}function u(t){return uni.request({url:"".concat(a.baseUrl,"/lyric?id=").concat(t),method:"GET"})}function d(t){return uni.request({url:"".concat(a.baseUrl,"/song/url?id=").concat(t),method:"GET"})}function l(){return uni.request({url:"".concat(a.baseUrl,"/search/hot/detail"),method:"GET"})}function f(t){return uni.request({url:"".concat(a.baseUrl,"/search?keywords=").concat(t),method:"GET"})}function h(t){return uni.request({url:"".concat(a.baseUrl,"/search/suggest?keywords=").concat(t,"&type=mobile"),method:"GET"})}},d692:function(t,e,n){"use strict";n.r(e);var a=n("87f6"),i=n("d91b");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("9009");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"2fc691a6",null,!1,a["a"],r);e["default"]=c.exports},d91b:function(t,e,n){"use strict";n.r(e);var a=n("dd27"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},dd27:function(t,e,n){"use strict";var a=n("4ea4");n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2909"));n("9699");a(n("9a02"));var o=n("c618"),r={data:function(){return{searchHot:[],searchWord:"",searchHistory:[],searchType:1,searchList:[],searchSuggest:[]}},onLoad:function(){var t=this;(0,o.searchHot)().then((function(e){200==e[1].data.code&&(t.searchHot=e[1].data.data)})),uni.getStorage({key:"searchHistory",success:function(e){t.searchHistory=e.data}})},methods:{handleToWord:function(t){this.searchWord=t,this.handleToSearch(t)},handleToSearch:function(t){this.searchHistory.unshift(t),this.searchHistory=(0,i.default)(new Set(this.searchHistory)),this.searchHistory.length>10&&(this.searchHistory.length=10),uni.setStorage({key:"searchHistory",data:this.searchHistory}),this.getSearchList(t)},handleToClear:function(){var t=this;uni.removeStorage({key:"searchHistory",success:function(e){t.searchHistory=[]}})},getSearchList:function(t){var e=this;(0,o.searchWord)(t).then((function(t){200==t[1].data.code&&(e.searchList=t[1].data.result.songs,e.searchType=2)}))},handleToClose:function(){this.searchWord="",this.searchType=1},handleToDetail:function(t){uni.navigateTo({url:"/pages/detail/detail?songId="+t})},handleToSuggest:function(t){var e=this,n=t.detail.value;n?(0,o.searchSuggest)(n).then((function(t){200==t[1].data.code&&(e.searchSuggest=t[1].data.result.allMatch,e.searchType=3)})):this.searchType=1}}};e.default=r},e14e:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"music-head",style:{color:t.color}},[t.icon?n("v-uni-view",{staticClass:"music-head-icon",class:{"music-head-iconblank":t.iconblack}},[n("v-uni-text",{staticClass:"iconfont icon-zuojiantou",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleToBack.apply(void 0,arguments)}}}),n("v-uni-text",[t._v("|")]),n("v-uni-text",{staticClass:"iconfont icon-shouye",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleToHome.apply(void 0,arguments)}}})],1):t._e(),t._v(t._s(t.title))],1)},o=[]},e212:function(t,e,n){var a=n("51f0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("e710020e",a,!0,{sourceMap:!1,shadowMode:!1})},eb8b:function(t,e,n){"use strict";var a=n("e212"),i=n.n(a);i.a}}]);