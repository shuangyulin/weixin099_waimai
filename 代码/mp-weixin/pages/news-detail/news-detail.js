(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{"165b":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(e("a34a"));function r(t){return t&&t.__esModule?t:{default:t}}function u(t,n,e,a,r,u,i){try{var o=t[u](i),c=o.value}catch(f){return void e(f)}o.done?n(c):Promise.resolve(c).then(a,r)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(a,r){var i=t.apply(n,e);function o(t){u(i,a,r,o,c,"next",t)}function c(t){u(i,a,r,o,c,"throw",t)}o(void 0)}))}}var o={data:function(){return{detail:{},id:""}},onLoad:function(){var t=i(a.default.mark((function t(n){var e;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.id=n.id,t.next=3,this.$api.info("news",n.id);case 3:e=t.sent,this.detail=e.data,this.detail.content=this.detail.content.replace(/<img/g,'<img style="width: 100%;"');case 6:case"end":return t.stop()}}),t,this)})));function n(n){return t.apply(this,arguments)}return n}()};n.default=o},"25ad":function(t,n,e){"use strict";e.r(n);var a=e("7be8"),r=e("a7f2");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("a5d6");var i,o=e("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"05ef264b",null,!1,a["a"],i);n["default"]=c.exports},"260a":function(t,n,e){},"7be8":function(t,n,e){"use strict";var a,r=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}))},a5d6:function(t,n,e){"use strict";var a=e("260a"),r=e.n(a);r.a},a7f2:function(t,n,e){"use strict";e.r(n);var a=e("165b"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=r.a},ff52:function(t,n,e){"use strict";(function(t){e("3103"),e("921b");a(e("66fd"));var n=a(e("25ad"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])}},[["ff52","common/runtime","common/vendor"]]]);