(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/search","components/musichead/musichead"],{"2b6b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("9699");a(n("9a02"));var r=n("c618");function a(t){return t&&t.__esModule?t:{default:t}}function o(t){return s(t)||u(t)||i(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}function u(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function s(t){if(Array.isArray(t))return d(t)}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var f={data:function(){return{searchHot:[],searchWord:"",searchHistory:[],searchType:1,searchList:[],searchSuggest:[]}},onLoad:function(){var e=this;(0,r.searchHot)().then((function(t){200==t[1].data.code&&(e.searchHot=t[1].data.data)})),t.getStorage({key:"searchHistory",success:function(t){e.searchHistory=t.data}})},methods:{handleToWord:function(t){this.searchWord=t,this.handleToSearch(t)},handleToSearch:function(e){this.searchHistory.unshift(e),this.searchHistory=o(new Set(this.searchHistory)),this.searchHistory.length>10&&(this.searchHistory.length=10),t.setStorage({key:"searchHistory",data:this.searchHistory}),this.getSearchList(e)},handleToClear:function(){var e=this;t.removeStorage({key:"searchHistory",success:function(t){e.searchHistory=[]}})},getSearchList:function(t){var e=this;(0,r.searchWord)(t).then((function(t){200==t[1].data.code&&(e.searchList=t[1].data.result.songs,e.searchType=2)}))},handleToClose:function(){this.searchWord="",this.searchType=1},handleToDetail:function(e){t.navigateTo({url:"/pages/detail/detail?songId="+e})},handleToSuggest:function(t){var e=this,n=t.detail.value;n?(0,r.searchSuggest)(n).then((function(t){200==t[1].data.code&&(e.searchSuggest=t[1].data.result.allMatch,e.searchType=3)})):this.searchType=1}}};e.default=f}).call(this,n("543d")["default"])},4308:function(t,e,n){"use strict";(function(t){n("996a");r(n("66fd"));var e=r(n("d692"));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},5241:function(t,e,n){"use strict";var r=n("afd3"),a=n.n(r);a.a},"724b":function(t,e,n){},"8d96":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"musichead",data:function(){return{}},props:["title","icon","color","iconblack"],methods:{handleToBack:function(){t.navigateBack()},handleToHome:function(){t.navigateTo({url:"/pages/index/index"})}}};e.default=n}).call(this,n("543d")["default"])},"942f":function(t,e,n){"use strict";n.r(e);var r=n("8d96"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"9a02":function(t,e,n){"use strict";n.r(e);var r=n("d7aa"),a=n("942f");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("b2d5");var c,i=n("f0c5"),u=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,"475cb893",null,!1,r["a"],c);e["default"]=u.exports},afd3:function(t,e,n){},b2d5:function(t,e,n){"use strict";var r=n("724b"),a=n.n(r);a.a},c644:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var r={musichead:function(){return Promise.resolve().then(n.bind(null,"9a02"))}},a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},d692:function(t,e,n){"use strict";n.r(e);var r=n("c644"),a=n("d91b");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("5241");var c,i=n("f0c5"),u=Object(i["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],c);e["default"]=u.exports},d7aa:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},d91b:function(t,e,n){"use strict";n.r(e);var r=n("2b6b"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a}},[["4308","common/runtime","common/vendor"]]]);