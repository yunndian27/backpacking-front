(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"0170":function(t,e,i){"use strict";var s=i("ded3"),a=i.n(s),r=(i("a9e3"),i("2b0e")),n=i("87e8"),o=i("dde5");e["a"]=r["a"].extend({name:"QItemLabel",mixins:[n["a"]],props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},computed:{classes:function(){return{"q-item__label--overline text-overline":this.overline,"q-item__label--caption text-caption":this.caption,"q-item__label--header":this.header,ellipsis:1===parseInt(this.lines,10)}},style:function(){if(void 0!==this.lines&&parseInt(this.lines,10)>1)return{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":this.lines}}},render:function(t){return t("div",{staticClass:"q-item__label",style:this.style,class:this.classes,on:a()({},this.qListeners)},Object(o["c"])(this,"default"))}})},"0278":function(t,e,i){t.exports=i.p+"img/backpacker-logo-app.55603393.png"},"713b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-layout",{attrs:{view:"lHh Lpr lFf"}},[s("q-header",{staticClass:"bg-white text-secondary flex ",attrs:{id:"navbar",elevated:""}},[s("q-toolbar",{staticClass:"flex"},[s("div",{staticClass:"nav-pc"},[s("div",{staticClass:"flex justify-center items-center"},[s("q-avatar",[s("img",{attrs:{src:i("0278")}})]),s("q-toolbar-title",[t._v("背包客棧自助旅行論壇")])],1),s("div",{staticClass:"text-grey-8"},[s("q-btn",{staticClass:"q-mr-md",attrs:{flat:"",to:"/"}},[t._v("首頁")]),s("q-btn",{staticClass:"q-mr-md",attrs:{flat:"",to:"/travelForum"}},[t._v("旅遊論壇")]),s("q-btn",{staticClass:"q-mr-md",attrs:{flat:"",to:"/discount"}},[t._v("優惠折扣")])],1),s("div",{staticClass:"text-grey-8"},[t.user.isLogin?t._e():s("q-btn",{staticClass:"q-mr-md",attrs:{flat:"",to:"/login"}},[t._v(" 登入")]),t.user.isLogin?t._e():s("q-btn",{attrs:{outline:"",to:"/register"}},[t._v("註冊")]),t.user.isAdmin&&t.user.isLogin?s("q-btn",{staticClass:"q-mr-md",attrs:{flat:"",to:"/admin"}},[t._v("後臺管理")]):t._e(),t.user.isLogin?s("q-btn",{attrs:{flat:"",round:"",to:"/myPage"}},[s("q-avatar",[s("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar2.jpg"}})])],1):t._e(),t.user.isLogin?s("q-btn-dropdown",{attrs:{flat:"",round:"",color:"secondary",icon:"settings"}},[s("q-list",[t.user.isLogin?s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/postArticle"}},[s("q-item-section",[s("q-item-label",[t._v("撰寫文章")])],1)],1):t._e(),t.user.isLogin?s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/myArticleFile"}},[s("q-item-section",[s("q-item-label",[t._v("所有文章")])],1)],1):t._e(),t.user.isLogin?s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:"",to:"/setting"}},[s("q-item-section",[s("q-item-label",[t._v("設定")])],1)],1):t._e(),t.user.isLogin?s("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:t.logout}},[s("q-item-section",[s("q-item-label",[t._v("登出")])],1)],1):t._e()],1)],1):t._e()],1)]),s("div",{staticClass:"nav-m flex justify-between"},[s("div",{staticClass:"flex justify-center items-center"},[s("q-avatar",[s("img",{attrs:{src:i("0278")}})]),s("q-toolbar-title",[t._v("背包客棧自助旅行論壇")])],1),s("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(e){t.right=!t.right}}})],1),s("q-drawer",{staticClass:"nav-m-drawer",attrs:{"show-if-above":"",side:"right",overlay:"",bordered:"",behavior:"mobile"},model:{value:t.right,callback:function(e){t.right=e},expression:"right"}},[s("q-scroll-area",{staticClass:"fit"},[s("div",[s("q-list",[t.user.isAdmin&&t.user.isLogin?s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",[s("img",{attrs:{src:"https://cdn.quasar.dev/img/avatar2.jpg"}})])],1),s("q-item-section",[t._v("name")])],1):t._e(),t.user.isAdmin||t.user.isLogin?t._e():s("q-item",[s("q-item-section",{attrs:{avatar:""}},[s("q-avatar",[s("img",{attrs:{src:i("0278")}})])],1),s("q-item-section",[t._v("背包客棧 自助旅行論壇")])],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","exact-active-class":"nav-m-link",to:"/"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"home"}})],1),s("q-item-section",[t._v("首頁")])],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","exact-active-class":"nav-m-link",to:"/travelForum"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"article"}})],1),s("q-item-section",[t._v("旅遊論壇")])],1),s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","exact-active-class":"nav-m-link",to:"/discount"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"sell"}})],1),s("q-item-section",[t._v("優惠折扣")])],1),t.user.isAdmin&&t.user.isLogin?s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","exact-active-class":"nav-m-link",to:"/myPage"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"auto_stories"}})],1),s("q-item-section",[t._v("我的頁面")])],1):t._e(),t.user.isAdmin&&t.user.isLogin?s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","exact-active-class":"nav-m-link",to:"/postArticle"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"create"}})],1),s("q-item-section",[t._v("撰寫文章")])],1):t._e(),t.user.isAdmin&&t.user.isLogin?s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","exact-active-class":"nav-m-link",to:"/myArticleFile"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"folder"}})],1),s("q-item-section",[t._v("所有文章")])],1):t._e(),t.user.isAdmin&&t.user.isLogin?s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","exact-active-class":"nav-m-link",to:"/setting"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"settings"}})],1),s("q-item-section",[t._v("設定")])],1):t._e(),t.user.isAdmin&&t.user.isLogin?s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","exact-active-class":"nav-m-link",t:"",to:"/admin"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"dashboard"}})],1),s("q-item-section",[t._v("後臺管理")])],1):t._e(),t.user.isLogin?t._e():s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","exact-active-class":"nav-m-link",to:"/login"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"login"}})],1),s("q-item-section",[t._v("登入")])],1),t.user.isAdmin&&t.user.isLogin?s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","exact-active-class":"nav-m-link"},on:{click:t.logout}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"logout"}})],1),s("q-item-section",[t._v("登出")])],1):t._e(),t.user.isLogin?t._e():s("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",exact:"","exact-active-class":"nav-m-link",to:"/register"}},[s("q-item-section",{attrs:{avatar:""}},[s("q-icon",{attrs:{name:"account_circle"}})],1),s("q-item-section",[t._v("註冊")])],1)],1)],1)])],1)],1)],1),s("q-page-container",[s("vue-page-transition",{attrs:{name:"fade-in-down"}},[s("router-view")],1)],1),s("footer",{attrs:{id:"footer"}},[s("div",[t._v("© 2021 泰山職訓局專題製作 by Wang Yunn Dian   |   網站內的圖片來源自 Unsplash ")])])],1)},a=[],r=i("c973"),n=i.n(r),o=(i("96cf"),{name:"MainLayout",data:function(){return{articles:[],right:!1}},methods:{onItemClick:function(){},logout:function(){var t=this;return n()(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.delete("/users/logout",{headers:{authorization:"Bearer "+t.$store.state.user.jwt.token}});case 3:t.$store.commit("user/logout"),"/"!==t.$route.path&&t.$router.push("/"),e.next=12;break;case 7:e.prev=7,e.t0=e["catch"](0),console.log(t.$store.state),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"發生錯誤",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}}),c=o,l=i("2877"),u=i("4d5a"),h=i("e359"),m=i("65c6"),d=i("cb32"),p=i("6ac5"),v=i("9c40"),b=i("f20b"),f=i("1c1c"),_=i("66e5"),q=i("4074"),g=i("0170"),S=i("9404"),x=i("9523"),w=i.n(x),y=(i("a9e3"),i("cca6"),i("2b0e")),z=i("7937"),k=i("0831"),L=i("dde5"),P=i("0cd3"),C=i("1c16"),j=i("3980"),A=i("ed5e"),N=i("75c3"),O=i("b7fa"),Q=i("f376"),T=y["a"].extend({name:"QScrollArea",mixins:[O["a"]],directives:{TouchPan:N["a"]},props:{barStyle:[Array,String,Object],thumbStyle:Object,contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},horizontal:Boolean,tabindex:[String,Number]},data:function(){return{tempShowing:!1,panning:!1,hover:!1,containerWidth:0,containerHeight:0,scrollPosition:0,scrollSize:0}},computed:{classes:function(){return"q-scrollarea"+(!0===this.isDark?" q-scrollarea--dark":"")},thumbHidden:function(){return!0!==(null===this.visible?this.hover:this.visible)&&!1===this.tempShowing&&!1===this.panning||this.scrollSize<=this.containerSize},thumbSize:function(){return Math.round(Object(z["a"])(this.containerSize*this.containerSize/this.scrollSize,50,this.containerSize))},style:function(){var t=this.scrollPercentage*(this.containerSize-this.thumbSize);return Object.assign({},this.thumbStyle,!0===this.horizontal?{left:"".concat(t,"px"),width:"".concat(this.thumbSize,"px")}:{top:"".concat(t,"px"),height:"".concat(this.thumbSize,"px")})},mainStyle:function(){return!0===this.thumbHidden?this.contentStyle:this.contentActiveStyle},scrollPercentage:function(){var t=Object(z["a"])(this.scrollPosition/(this.scrollSize-this.containerSize),0,1);return Math.round(1e4*t)/1e4},containerSize:function(){return this["container".concat(this.dirProps.suffix)]},dirProps:function(){return!0===this.horizontal?{prefix:"horizontal",suffix:"Width",scroll:"scrollLeft",classSuffix:"h absolute-bottom",dir:"right",dist:"x"}:{prefix:"vertical",suffix:"Height",scroll:"scrollTop",classSuffix:"v absolute-right",dir:"down",dist:"y"}},thumbClass:function(){return"q-scrollarea__thumb--".concat(this.dirProps.classSuffix)+(!0===this.thumbHidden?" q-scrollarea__thumb--invisible":"")},barClass:function(){return"q-scrollarea__bar--".concat(this.dirProps.classSuffix)+(!0===this.thumbHidden?" q-scrollarea__bar--invisible":"")},thumbDirectives:function(){var t;return[{name:"touch-pan",modifiers:(t={},w()(t,!0===this.horizontal?"horizontal":"vertical",!0),w()(t,"prevent",!0),w()(t,"mouse",!0),w()(t,"mouseAllDir",!0),t),value:this.__panThumb}]},scrollAttrs:function(){if(void 0!==this.tabindex)return{tabindex:this.tabindex}}},methods:{getScrollTarget:function(){return this.$refs.target},getScrollPosition:function(){return this.scrollPosition},setScrollPosition:function(t,e){var i=!0===this.horizontal?k["f"]:k["g"];i(this.$refs.target,t,e)},setScrollPercentage:function(t,e){this.setScrollPosition(t*(this.scrollSize-this.containerSize),e)},__updateContainer:function(t){var e=t.height,i=t.width,s=!1;this.containerWidth!==i&&(this.containerWidth=i,s=!0),this.containerHeight!==e&&(this.containerHeight=e,s=!0),!0===s&&this.__startTimer()},__updateScroll:function(t){this.scrollPosition!==t.position&&(this.scrollPosition=t.position,this.__startTimer())},__updateScrollSize:function(t){var e=t.height,i=t.width;!0===this.horizontal?this.scrollSize!==i&&(this.scrollSize=i,this.__startTimer()):this.scrollSize!==e&&(this.scrollSize=e,this.__startTimer())},__panThumb:function(t){if(!0===t.isFirst){if(!0===this.thumbHidden)return;this.refPos=this.scrollPosition,this.panning=!0}else if(!0!==this.panning)return;!0===t.isFinal&&(this.panning=!1);var e=(this.scrollSize-this.containerSize)/(this.containerSize-this.thumbSize),i=t.distance[this.dirProps.dist],s=this.refPos+(t.direction===this.dirProps.dir?1:-1)*i*e;this.__setScroll(s)},__mouseDown:function(t){if(!0!==this.thumbHidden){var e=t["offset".concat(!0===this.horizontal?"X":"Y")]-this.thumbSize/2;this.__setScroll(e/this.containerSize*this.scrollSize),void 0!==this.$refs.thumb&&this.$refs.thumb.dispatchEvent(new MouseEvent(t.type,t))}},__startTimer:function(){var t=this;!0===this.tempShowing?clearTimeout(this.timer):this.tempShowing=!0,this.timer=setTimeout((function(){t.tempShowing=!1}),this.delay),this.__emitScroll()},__setScroll:function(t){this.$refs.target[this.dirProps.scroll]=t}},render:function(t){var e=this;return t("div",{class:this.classes,on:Object(P["b"])(this,"desk",{mouseenter:function(){e.hover=!0},mouseleave:function(){e.hover=!1}})},[t("div",{ref:"target",staticClass:"scroll relative-position fit hide-scrollbar",attrs:this.scrollAttrs},[t("div",{staticClass:"absolute",style:this.mainStyle,class:"full-".concat(!0===this.horizontal?"height":"width")},Object(L["a"])([t(j["a"],{on:Object(P["b"])(this,"resizeIn",{resize:this.__updateScrollSize})})],this,"default")),t(A["a"],{props:{horizontal:this.horizontal},on:Object(P["b"])(this,"scroll",{scroll:this.__updateScroll})})]),t(j["a"],{on:Object(P["b"])(this,"resizeOut",{resize:this.__updateContainer})}),t("div",{staticClass:"q-scrollarea__bar",style:this.barStyle,class:this.barClass,attrs:Q["a"],on:Object(P["b"])(this,"bar",{mousedown:this.__mouseDown})}),t("div",{ref:"thumb",staticClass:"q-scrollarea__thumb",style:this.style,class:this.thumbClass,attrs:Q["a"],directives:this.thumbDirectives})])},created:function(){var t=this;this.__emitScroll=Object(C["a"])((function(){if(void 0!==t.$listeners.scroll){var e={ref:t},i=t.dirProps.prefix;e[i+"Position"]=t.scrollPosition,e[i+"Percentage"]=t.scrollPercentage,e[i+"Size"]=t.scrollSize,e[i+"ContainerSize"]=t.containerSize,t.$emit("scroll",e)}}),0)}}),$=i("0016"),H=i("09e3"),I=i("7f67"),D=i("714f"),B=i("eebe"),E=i.n(B),F=Object(l["a"])(c,s,a,!1,null,null,null);e["default"]=F.exports;E()(F,"components",{QLayout:u["a"],QHeader:h["a"],QToolbar:m["a"],QAvatar:d["a"],QToolbarTitle:p["a"],QBtn:v["a"],QBtnDropdown:b["a"],QList:f["a"],QItem:_["a"],QItemSection:q["a"],QItemLabel:g["a"],QDrawer:S["a"],QScrollArea:T,QIcon:$["a"],QPageContainer:H["a"]}),E()(F,"directives",{ClosePopup:I["a"],Ripple:D["a"]})},"7f67":function(t,e,i){"use strict";var s=i("9e62"),a=i("d728");function r(t){if(!1===t)return 0;if(!0===t||void 0===t)return 1;var e=parseInt(t,10);return isNaN(e)?0:e}function n(t){var e=t.__qclosepopup;void 0!==e&&(t.removeEventListener("click",e.handler),t.removeEventListener("keyup",e.handlerKey),delete t.__qclosepopup)}e["a"]={name:"close-popup",bind:function(t,e,i){var o=e.value;void 0!==t.__qclosepopup&&(n(t),t.__qclosepopup_destroyed=!0);var c={depth:r(o),handler:function(t){0!==c.depth&&setTimeout((function(){Object(s["b"])(i.componentInstance||i.context,t,c.depth)}))},handlerKey:function(t){!0===Object(a["a"])(t,13)&&c.handler(t)}};t.__qclosepopup=c,t.addEventListener("click",c.handler),t.addEventListener("keyup",c.handlerKey)},update:function(t,e){var i=e.value,s=e.oldValue;void 0!==t.__qclosepopup&&i!==s&&(t.__qclosepopup.depth=r(i))},unbind:function(t){void 0===t.__qclosepopup_destroyed?n(t):delete t.__qclosepopup_destroyed}}}}]);