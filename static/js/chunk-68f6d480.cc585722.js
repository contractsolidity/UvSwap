(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68f6d480"],{"49da":function(e,t,n){"use strict";n.r(t);n("a9e3");var a=n("7a23"),r=n("e024"),c=n.n(r),i=Object(a["U"])("data-v-7b582fbb");Object(a["D"])("data-v-7b582fbb");var s={class:"container"},o={class:"join"},d=Object(a["k"])("img",{class:"img",src:c.a,alt:""},null,-1),u={class:"des"},b={class:"btn-wrap"};Object(a["B"])();var l=i((function(e,t,n,r,c,l){var p=Object(a["I"])("HeadTop"),v=Object(a["I"])("van-button");return Object(a["A"])(),Object(a["h"])("div",s,[Object(a["k"])(p,{title:e.$t("index.啟動礦工"),isSubHeader:!0},null,8,["title"]),Object(a["k"])("div",o,[d,Object(a["k"])("div",u,Object(a["M"])(e.$t("index.會員激活需要立刻支付key，支付成功後，可立即獲得power算力開啟質押挖礦",{key:e.registerFee+"USDT",power:e.power})),1),Object(a["k"])("div",b,[e.isActive?(Object(a["A"])(),Object(a["h"])(v,{key:0,class:"btn",disabled:""},{default:i((function(){return[Object(a["j"])(Object(a["M"])(e.$t("index.已啟動")),1)]})),_:1})):Number(e.usdtAllowance)>0?(Object(a["A"])(),Object(a["h"])(v,{key:1,class:"btn",loading:e.btnLoading,size:"large","loading-text":e.$t("index.一鍵激活")+"...",onClick:e.active},{default:i((function(){return[Object(a["j"])(Object(a["M"])(e.$t("index.一鍵激活")),1)]})),_:1},8,["loading","loading-text","onClick"])):(Object(a["A"])(),Object(a["h"])(v,{key:2,loading:e.btnLoading,size:"large","loading-text":e.$t("index.授權")+"...",class:"btn",onClick:e.approveUsdt},{default:i((function(){return[Object(a["j"])(Object(a["M"])(e.$t("index.授權")),1)]})),_:1},8,["loading","loading-text","onClick"]))])])])})),p=n("5530"),v=n("1da1"),f=(n("96cf"),n("b680"),n("1a2e")),g=n("47e2"),w=n("5502"),j=n("01ea"),O=n("722f"),h=n("79d6"),x=n("d399"),k=n("9d56"),m=n("901e"),C=n.n(m),U={components:{HeadTop:f["a"]},setup:function(){var e=Object(w["b"])(),t=Object(g["b"])(),n=t.t,r=Object(a["E"])({$t:n,address:Object(a["f"])((function(){return e.state.accounts[0]})),web3:Object(a["f"])((function(){return e.state.provider})),balance:0,imgSrc:"",name:"",token:"",desc:"",isPreview:!1,showDialog:!1,UvStakeContract:null,UsdtContract:null,usdtAllowance:0,registerFee:"0",btnLoading:!1,power:0,isActive:!1,initContract:function(){r.UvStakeContract=new r.web3.eth.Contract(h,j["a"].uvStakeAddress),r.UsdtContract=new r.web3.eth.Contract(O,j["a"].usdtAddress),r.initData()},initData:function(){r.getUsdtAllowance(),r.getActiveFee()},getActiveFee:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t,n,a,c,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.UsdtContract.methods.decimals().call();case 2:return t=e.sent,e.next=5,r.UvStakeContract.methods.getUserInfo(r.address).call();case 5:return n=e.sent,e.next=8,r.UsdtContract.methods.balanceOf(r.address).call();case 8:return a=e.sent,e.next=11,r.UvStakeContract.methods.registerBasePower().call();case 11:return c=e.sent,e.next=14,r.UvStakeContract.methods.addUserTime().call();case 14:return i=e.sent,e.next=17,r.UvStakeContract.methods.getIncrease(c,i).call();case 17:return s=e.sent,r.power=0==i?new C.a(c).dividedBy(Math.pow(10,18)).toFixed(3):new C.a(s).dividedBy(Math.pow(10,18)).toFixed(3),r.isActive=n.isExist,e.next=22,r.UvStakeContract.methods.registerFee().call();case 22:o=e.sent,r.registerFee=new C.a(o).dividedBy(Math.pow(10,t)).toFixed(4),r.balance=new C.a(a).dividedBy(Math.pow(10,t)).toFixed(4);case 25:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),getUsdtAllowance:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.UsdtContract.methods.allowance(r.address,j["a"].uvStakeAddress).call();case 2:t=e.sent,r.usdtAllowance=t;case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),approveUsdt:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r.btnLoading=!0,e.prev=1,e.next=4,r.UsdtContract.methods.approve(j["a"].uvStakeAddress,k["a"]).send({from:r.address});case 4:r.getUsdtAllowance(),r.btnLoading=!1,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),r.btnLoading=!1;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(){return e.apply(this,arguments)}return t}(),active:function(){var e=Object(v["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(Number(r.balance)<Number(r.registerFee))){e.next=3;break}return Object(x["a"])(r.$t("index.餘額不足")),e.abrupt("return");case 3:return r.btnLoading=!0,e.prev=4,e.next=7,r.UvStakeContract.methods.register().send({from:r.address});case 7:r.initData(),Object(x["a"])(r.$t("index.激活成功")),r.btnLoading=!1,e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](4),r.btnLoading=!1;case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));function t(){return e.apply(this,arguments)}return t}()});r.address&&r.initContract(),Object(a["Q"])((function(){return r.address}),(function(e){e&&r.initContract()}));var c=Object(a["N"])(r);return Object(p["a"])({},c)}};n("eda5");U.render=l,U.__scopeId="data-v-7b582fbb";t["default"]=U},b752:function(e,t,n){},e024:function(e,t,n){e.exports=n.p+"static/img/join@2x.0b48c69a.png"},eda5:function(e,t,n){"use strict";n("b752")}}]);
//# sourceMappingURL=chunk-68f6d480.cc585722.js.map