(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"068f":function(t,e,r){"use strict";var a=r("ded3"),n=r.n(a),i=(r("cca6"),r("2b0e")),s=r("0d59"),o=(r("a9e3"),{props:{ratio:[String,Number]},computed:{ratioStyle:function(){var t=this.ratio||this.naturalRatio;if(void 0!==t)return{paddingBottom:"".concat(100/t,"%")}}}}),c=r("87e8"),l=r("dde5");e["a"]=i["a"].extend({name:"QImg",mixins:[c["a"],o],props:{src:String,srcset:String,sizes:String,alt:String,width:String,height:String,placeholderSrc:String,basic:Boolean,contain:Boolean,position:{type:String,default:"50% 50%"},transition:{type:String,default:"fade"},imgClass:[Array,String,Object],imgStyle:Object,nativeContextMenu:Boolean,noDefaultSpinner:Boolean,spinnerColor:String,spinnerSize:String},data:function(){return{currentSrc:"",image:null,isLoading:!!this.src,hasError:!1,naturalRatio:void 0}},watch:{src:function(){this.__load()},srcset:function(t){this.__updateWatcher(t)}},computed:{url:function(){return this.currentSrc||this.placeholderSrc||void 0},attrs:function(){var t={role:"img"};return void 0!==this.alt&&(t["aria-label"]=this.alt),t},imgContainerStyle:function(){return Object.assign({backgroundSize:!0===this.contain?"contain":"cover",backgroundPosition:this.position},this.imgStyle,{backgroundImage:'url("'.concat(this.url,'")')})},style:function(){return{width:this.width,height:this.height}},classes:function(){return"q-img overflow-hidden"+(!0===this.nativeContextMenu?" q-img--menu":"")}},methods:{__onLoad:function(t){this.isLoading=!1,this.hasError=!1,this.__computeRatio(t),this.__updateSrc(),this.__updateWatcher(this.srcset),this.$emit("load",this.currentSrc)},__onError:function(t){clearTimeout(this.ratioTimer),this.isLoading=!1,this.hasError=!0,this.currentSrc="",this.$emit("error",t)},__updateSrc:function(){if(void 0!==this.image&&!1===this.isLoading){var t=this.image.currentSrc||this.image.src;this.currentSrc!==t&&(this.currentSrc=t)}},__updateWatcher:function(t){t?void 0===this.unwatch&&(this.unwatch=this.$watch("$q.screen.width",this.__updateSrc)):void 0!==this.unwatch&&(this.unwatch(),this.unwatch=void 0)},__load:function(){var t=this;if(clearTimeout(this.ratioTimer),this.hasError=!1,!this.src)return this.isLoading=!1,this.image=void 0,void(this.currentSrc="");this.isLoading=!0;var e=new Image;this.image=e,e.onerror=function(r){t.image===e&&!0!==t.destroyed&&t.__onError(r)},e.onload=function(){!0!==t.destroyed&&t.image===e&&(void 0!==e.decode?e.decode().catch((function(r){t.image===e&&!0!==t.destroyed&&t.__onError(r)})).then((function(){t.image===e&&!0!==t.destroyed&&t.__onLoad(e)})):t.__onLoad(e))},e.src=this.src,this.srcset&&(e.srcset=this.srcset),void 0!==this.sizes?e.sizes=this.sizes:Object.assign(e,{height:this.height,width:this.width})},__computeRatio:function(t){var e=this,r=t.naturalHeight,a=t.naturalWidth;r||a?this.naturalRatio=0===r?1:a/r:this.ratioTimer=setTimeout((function(){e.image===t&&!0!==e.destroyed&&e.__computeRatio(t)}),100)},__getImage:function(t){var e=!0===this.nativeContextMenu?[t("img",{staticClass:"absolute-full fit",attrs:{src:this.url,"aria-hidden":"true"}})]:void 0,r=void 0!==this.url?t("div",{key:this.url,staticClass:"q-img__image absolute-full",class:this.imgClass,style:this.imgContainerStyle},e):null;return!0===this.basic?r:t("transition",{props:{name:"q-transition--"+this.transition}},[r])},__getContent:function(t){var e=Object(l["c"])(this,!0===this.hasError?"error":"default");if(!0===this.basic)return t("div",{key:"content",staticClass:"q-img__content absolute-full"},e);var r=!0===this.isLoading?t("div",{key:"placeholder",staticClass:"q-img__loading absolute-full flex flex-center"},void 0!==this.$scopedSlots.loading?this.$scopedSlots.loading():!1===this.noDefaultSpinner?[t(s["a"],{props:{color:this.spinnerColor,size:this.spinnerSize}})]:void 0):t("div",{key:"content",staticClass:"q-img__content absolute-full"},e);return t("transition",{props:{name:"q-transition--fade"}},[r])}},render:function(t){return t("div",{class:this.classes,style:this.style,attrs:this.attrs,on:n()({},this.qListeners)},[t("div",{style:this.ratioStyle}),this.__getImage(t),this.__getContent(t)])},beforeMount:function(){if(void 0!==this.placeholderSrc&&void 0===this.ratio){var t=new Image;t.src=this.placeholderSrc,this.__computeRatio(t)}!0===this.isLoading&&this.__load()},beforeDestroy:function(){this.destroyed=!0,clearTimeout(this.ratioTimer),void 0!==this.unwatch&&this.unwatch()}})},"39db":function(t,e,r){"use strict";r("70cb")},"70cb":function(t,e,r){},d37d:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-center",attrs:{id:"travelForum"}},[t._m(0),r("div",{staticClass:"container"},[r("div",{staticClass:"row flex justify-center q-mb-lg"},[r("div",{staticClass:"col-12 col-md-8 q-mb-sm",attrs:{"max-width":"400px"}},[r("q-input",{staticClass:"inputBg",attrs:{outlined:"","bottom-slots":"",label:"搜尋"},scopedSlots:t._u([{key:"append",fn:function(){return[""!==t.search.text?r("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){t.text=""}}}):t._e(),r("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.search.text,callback:function(e){t.$set(t.search,"text",e)},expression:"search.text"}})],1),r("div",{staticClass:"col-12 q-mb-md-sm"},[r("div",{staticClass:"fourmType flex justify-center q-gutter-md"},[r("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"東北亞"},on:{click:t.type01}}),r("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"東南亞"},on:{click:t.type02}}),r("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"歐洲"},on:{click:t.type03}}),r("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"中國港澳"},on:{click:t.type04}}),r("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"台灣"},on:{click:t.type05}}),r("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"美洲"},on:{click:t.type06}}),r("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"紐澳"},on:{click:t.type07}}),r("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"太平洋諸島"},on:{click:t.type08}}),r("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"南亞及西亞"},on:{click:t.type09}}),r("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"非西"},on:{click:t.type10}}),r("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"非洲"},on:{click:t.type11}}),r("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"全部"},on:{click:t.getArticle}})],1)])]),r("div",{staticClass:"row"},t._l(t.articles,(function(t){return r("div",{key:t._id,staticClass:"col-12 col-md-6 col-xl-3 q-pa-md"},[r("router-link",{attrs:{to:"/article/"+t._id}},[r("ArticleCard",{attrs:{article:t}})],1)],1)})),0)])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"forumBanner q-mb-lg"},[r("div",{staticClass:"forumTitle"},[t._v("旅遊論壇")])])}],i=r("c973"),s=r.n(i),o=(r("96cf"),r("d81d"),r("99af"),r("d4bc")),c={name:"PageIndex",data:function(){return{articles:[],search:{text:""}}},components:{ArticleCard:o["a"]},methods:{type01:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles/stype01");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"沒成功",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},type02:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles/stype02");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"沒成功",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},type03:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles/stype03");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"沒成功",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},type04:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles/stype04");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"沒成功",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},type05:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles/stype05");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"沒成功",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},type06:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles/stype06");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"沒成功",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},type07:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles/stype07");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"沒成功",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},type08:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles/stype08");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"沒成功",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},type09:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles/stype09");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"沒成功",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},type10:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles/stype10");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"沒成功",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},type11:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles/stype11");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"沒成功",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getArticle:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"沒成功",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){var t=this;return s()(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/articles");case 3:r=e.sent,a=r.data,t.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t})),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),t.$q.dialog({title:"錯誤",message:"取得文章失敗",color:"red-13",ok:!0});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},l=c,u=r("2877"),p=r("27f9"),d=r("0016"),h=r("9c40"),m=r("eebe"),g=r.n(m),f=Object(u["a"])(l,a,n,!1,null,null,null);e["default"]=f.exports;g()(f,"components",{QInput:p["a"],QIcon:d["a"],QBtn:h["a"]})},d4bc:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-card",{staticClass:"my-card q-pb-md"},[r("q-img",{attrs:{ratio:1,src:t.article.image}}),r("q-card-section",[r("div",{staticClass:"text-h6 ellipsisTitle"},[t._v(t._s(t.article.artTitle))]),r("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.article.type)+" | "+t._s(t.article.category))])]),r("q-card-section",{staticClass:"ellipsisContent q-pt-none q-pb-none"},[r("div",{staticClass:"ellipsis",domProps:{innerHTML:t._s(t.article.description)}})])],1)},n=[],i={name:"ArticleCard",props:{article:{type:Object,required:!0}}},s=i,o=(r("39db"),r("2877")),c=r("f09f"),l=r("068f"),u=r("a370"),p=r("eebe"),d=r.n(p),h=Object(o["a"])(s,a,n,!1,null,"9eb59bae",null);e["a"]=h.exports;d()(h,"components",{QCard:c["a"],QImg:l["a"],QCardSection:u["a"]})},eebe:function(t,e){t.exports=function(t,e,r){var a;if("function"===typeof t.exports?(a=t.exports.extendOptions,a[e]=t.exports.options[e]):a=t.options,void 0===a[e])a[e]=r;else{var n=a[e];for(var i in r)void 0===n[i]&&(n[i]=r[i])}}}}]);