(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0f33":function(e,t,n){},"1be0":function(e,t,n){"use strict";(function(e){n("718a");r(n("66fd"));var t=r(n("d981"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"49cf":function(e,t,n){"use strict";var r=n("0f33"),u=n.n(r);u.a},"768f":function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}));var u=function(){var e=this,t=e.$createElement;e._self._c},a=[]},8169:function(e,t,n){"use strict";n.r(t);var r=n("d75e"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},d75e:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,u,a,i){try{var o=e[a](i),s=o.value}catch(c){return void n(c)}o.done?t(s):Promise.resolve(s).then(r,u)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var i=e.apply(t,n);function o(e){a(i,r,u,o,s,"next",e)}function s(e){a(i,r,u,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var t=this;return i(r.default.mark((function n(){var u;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:[],u=e.getStorageSync("loginTable"),t.tableName=u,"yonghu"==t.tableName&&(t.yonghuxingbieOptions="男,女".split(","),t.ruleForm.xingbie=t.yonghuxingbieOptions[0]),t.styleChange();case 5:case"end":return n.stop()}}),n)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.zhanghao||"yonghu"!=e.tableName){t.next=3;break}return e.$utils.msg("账号不能为空"),t.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){t.next=6;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if("yonghu"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){t.next=9;break}return e.$utils.msg("手机应输入手机格式"),t.abrupt("return");case 9:if("yonghu"!=e.tableName||!e.ruleForm.money||e.$validate.isNumber(e.ruleForm.money)){t.next=12;break}return e.$utils.msg("余额应输入数字"),t.abrupt("return");case 12:if(e.ruleForm.shangjiazhanghao||"shangjia"!=e.tableName){t.next=15;break}return e.$utils.msg("商家账号不能为空"),t.abrupt("return");case 15:if(e.ruleForm.mima||"shangjia"!=e.tableName){t.next=18;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 18:if("shangjia"!=e.tableName||!e.ruleForm.money||e.$validate.isNumber(e.ruleForm.money)){t.next=21;break}return e.$utils.msg("余额应输入数字"),t.abrupt("return");case 21:return t.next=23,e.$api.register("".concat(e.tableName),e.ruleForm);case 23:e.$utils.msgBack("注册成功");case 25:case"end":return t.stop()}}),t)})))()}}};t.default=o}).call(this,n("543d")["default"])},d981:function(e,t,n){"use strict";n.r(t);var r=n("768f"),u=n("8169");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("49cf");var i,o=n("f0c5"),s=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"aa9e1de4",null,!1,r["a"],i);t["default"]=s.exports}},[["1be0","common/runtime","common/vendor"]]]);