(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"2ad5":function(n,e,t){"use strict";var o=t("6ba0"),a=t.n(o);a.a},"398d":function(n,e,t){"use strict";(function(n){t("996a");o(t("66fd"));var e=o(t("acab"));function o(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=t,n(e.default)}).call(this,t("543d")["createPage"])},"479a":function(n,e,t){"use strict";t.r(e);var o=t("a202"),a=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=a.a},"6ba0":function(n,e,t){},"9b95":function(n,e,t){"use strict";t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var o={musichead:function(){return t.e("components/musichead/musichead").then(t.bind(null,"9a02"))},mForSkeleton:function(){return t.e("components/m-for-skeleton/m-for-skeleton").then(t.bind(null,"be9e"))}},a=function(){var n=this,e=n.$createElement,t=(n._self._c,n.isLoading?n.__map(4,(function(e,t){var o=n.__get_orig(e),a={};return{$orig:o,a0:a}})):null);n.$mp.data=Object.assign({},{$root:{l0:t}})},u=[]},a202:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,t("9699");var o=t("c618"),a=function(){t.e("components/musichead/musichead").then(function(){return resolve(t("9a02"))}.bind(null,t)).catch(t.oe)},u=function(){t.e("components/m-for-skeleton/m-for-skeleton").then(function(){return resolve(t("be9e"))}.bind(null,t)).catch(t.oe)},i={data:function(){return{topList:[],isLoading:!0}},components:{musichead:a,mForSkeleton:u},onLoad:function(){var n=this;(0,o.topList)().then((function(e){e.length&&setTimeout((function(){n.topList=e,n.isLoading=!1}),1e3)}))},methods:{handleToList:function(e){n.navigateTo({url:"/pages/list/list?id="+e})},handleToSearch:function(){n.navigateTo({url:"/pages/search/search"})}}};e.default=i}).call(this,t("543d")["default"])},acab:function(n,e,t){"use strict";t.r(e);var o=t("9b95"),a=t("479a");for(var u in a)"default"!==u&&function(n){t.d(e,n,(function(){return a[n]}))}(u);t("2ad5");var i,c=t("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"b911e588",null,!1,o["a"],i);e["default"]=r.exports}},[["398d","common/runtime","common/vendor"]]]);