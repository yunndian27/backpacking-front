(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"3b73":function(e,t,i){"use strict";var a=i("ded3"),n=i.n(a),s=i("9523"),o=i.n(s),r=(i("a9e3"),i("cca6"),i("99af"),i("2b0e")),l=i("66e5"),c=i("4074"),d=i("0170"),p=i("0016"),u=i("dde5"),h=i("0cd3"),g=r["a"].extend({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},methods:{__begin:function(e,t,i){e.style.overflowY="hidden",void 0!==t&&(e.style.height="".concat(t,"px")),e.style.transition="height ".concat(this.duration,"ms cubic-bezier(.25, .8, .50, 1)"),this.animating=!0,this.done=i},__end:function(e,t){e.style.overflowY=null,e.style.height=null,e.style.transition=null,this.__cleanup(),t!==this.lastEvent&&this.$emit(t)},__cleanup:function(){this.done&&this.done(),this.done=null,this.animating=!1,clearTimeout(this.timer),clearTimeout(this.timerFallback),void 0!==this.el&&this.el.removeEventListener("transitionend",this.animListener),this.animListener=null}},beforeDestroy:function(){this.animating&&this.__cleanup()},render:function(e){var t=this;return e("transition",{props:{css:!1,appear:this.appear},on:Object(h["b"])(this,"tr",{enter:function(e,i){var a=0;t.el=e,!0===t.animating?(t.__cleanup(),a=e.offsetHeight===e.scrollHeight?0:void 0):t.lastEvent="hide",t.__begin(e,a,i),t.timer=setTimeout((function(){e.style.height="".concat(e.scrollHeight,"px"),t.animListener=function(i){Object(i)===i&&i.target!==e||t.__end(e,"show")},e.addEventListener("transitionend",t.animListener),t.timerFallback=setTimeout(t.animListener,1.1*t.duration)}),100)},leave:function(e,i){var a;t.el=e,!0===t.animating?t.__cleanup():(t.lastEvent="show",a=e.scrollHeight),t.__begin(e,a,i),t.timer=setTimeout((function(){e.style.height=0,t.animListener=function(i){Object(i)===i&&i.target!==e||t.__end(e,"hide")},e.addEventListener("transitionend",t.animListener),t.timerFallback=setTimeout(t.animListener,1.1*t.duration)}),100)}})},Object(u["c"])(this,"default"))}}),m=i("eb85"),f=i("8716"),b=i("7ee0"),v=i("b7fa"),_=i("d882"),x="q:expansion-item:close";t["a"]=r["a"].extend({name:"QExpansionItem",mixins:[v["a"],f["a"],b["a"]],props:{icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},data:function(){return{showing:void 0!==this.value?this.value:this.defaultOpened}},watch:{showing:function(e){!0===e&&void 0!==this.group&&this.$root.$emit(x,this)},group:function(e,t){void 0!==e&&void 0===t?this.$root.$on(x,this.__eventHandler):void 0===e&&void 0!==t&&this.$root.$off(x,this.__eventHandler)}},computed:{classes:function(){return"q-expansion-item--".concat(!0===this.showing?"expanded":"collapsed")+" q-expansion-item--".concat(!0===this.popup?"popup":"standard")},contentStyle:function(){if(void 0!==this.contentInsetLevel){var e=!0===this.$q.lang.rtl?"Right":"Left";return o()({},"padding"+e,56*this.contentInsetLevel+"px")}},isClickable:function(){return!0===this.hasRouterLink||!0!==this.expandIconToggle},expansionIcon:function(){return void 0!==this.expandedIcon&&!0===this.showing?this.expandedIcon:this.expandIcon||this.$q.iconSet.expansionItem[!0===this.denseToggle?"denseIcon":"icon"]},activeToggleIcon:function(){return!0!==this.disable&&(!0===this.hasRouterLink||!0===this.expandIconToggle)}},methods:{__onHeaderClick:function(e){!0!==this.hasRouterLink&&this.toggle(e),this.$emit("click",e)},__toggleIconKeyboard:function(e){13===e.keyCode&&this.__toggleIcon(e,!0)},__toggleIcon:function(e,t){!0!==t&&void 0!==this.$refs.blurTarget&&this.$refs.blurTarget.focus(),this.toggle(e),Object(_["l"])(e)},__eventHandler:function(e){this!==e&&this.group===e.group&&this.hide()},__getToggleIcon:function(e){var t={staticClass:"q-focusable relative-position cursor-pointer".concat(!0===this.denseToggle&&!0===this.switchToggleSide?" items-end":""),class:this.expandIconClass,props:{side:!0!==this.switchToggleSide,avatar:this.switchToggleSide}},i=[e(p["a"],{staticClass:"q-expansion-item__toggle-icon",class:void 0===this.expandedIcon&&!0===this.showing?"q-expansion-item__toggle-icon--rotated":void 0,props:{name:this.expansionIcon}})];return!0===this.activeToggleIcon&&(Object.assign(t,{attrs:{tabindex:0},on:Object(h["b"])(this,"inpExt",{click:this.__toggleIcon,keyup:this.__toggleIconKeyboard})}),i.unshift(e("div",{ref:"blurTarget",staticClass:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",attrs:{tabindex:-1}}))),e(c["a"],t,i)},__getHeader:function(e){var t;void 0!==this.$scopedSlots.header?t=[].concat(this.$scopedSlots.header()):(t=[e(c["a"],[e(d["a"],{props:{lines:this.labelLines}},[this.label||""]),this.caption?e(d["a"],{props:{lines:this.captionLines,caption:!0}},[this.caption]):null])],this.icon&&t[!0===this.switchToggleSide?"push":"unshift"](e(c["a"],{props:{side:!0===this.switchToggleSide,avatar:!0!==this.switchToggleSide}},[e(p["a"],{props:{name:this.icon}})]))),!0!==this.disable&&t[!0===this.switchToggleSide?"unshift":"push"](this.__getToggleIcon(e));var i={ref:"item",style:this.headerStyle,class:this.headerClass,props:{dark:this.isDark,disable:this.disable,dense:this.dense,insetLevel:this.headerInsetLevel}};if(!0===this.isClickable){var a=!0===this.hasRouterLink?"nativeOn":"on";i.props.clickable=!0,i[a]=n()(n()({},this.qListeners),{},{click:this.__onHeaderClick}),!0===this.hasRouterLink&&Object.assign(i.props,this.routerLinkProps)}return e(l["a"],i,t)},__getContent:function(e){var t=this,i=[this.__getHeader(e),e(g,{props:{duration:this.duration},on:Object(h["b"])(this,"slide",{show:function(){t.$emit("after-show")},hide:function(){t.$emit("after-hide")}})},[e("div",{staticClass:"q-expansion-item__content relative-position",style:this.contentStyle,directives:[{name:"show",value:this.showing}]},Object(u["c"])(this,"default"))])];return this.expandSeparator&&i.push(e(m["a"],{staticClass:"q-expansion-item__border q-expansion-item__border--top absolute-top",props:{dark:this.isDark}}),e(m["a"],{staticClass:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",props:{dark:this.isDark}})),i}},render:function(e){return e("div",{staticClass:"q-expansion-item q-item-type",class:this.classes},[e("div",{staticClass:"q-expansion-item__container relative-position"},this.__getContent(e))])},created:function(){void 0!==this.group&&this.$root.$on(x,this.__eventHandler)},beforeDestroy:function(){void 0!==this.group&&this.$root.$off(x,this.__eventHandler)}})},"7f67":function(e,t,i){"use strict";var a=i("9e62"),n=i("d728");function s(e){if(!1===e)return 0;if(!0===e||void 0===e)return 1;var t=parseInt(e,10);return isNaN(t)?0:t}function o(e){var t=e.__qclosepopup;void 0!==t&&(e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup)}t["a"]={name:"close-popup",bind:function(e,t,i){var r=t.value;void 0!==e.__qclosepopup&&(o(e),e.__qclosepopup_destroyed=!0);var l={depth:s(r),handler:function(e){0!==l.depth&&setTimeout((function(){Object(a["b"])(i.componentInstance||i.context,e,l.depth)}))},handlerKey:function(e){!0===Object(n["a"])(e,13)&&l.handler(e)}};e.__qclosepopup=l,e.addEventListener("click",l.handler),e.addEventListener("keyup",l.handlerKey)},update:function(e,t){var i=t.value,a=t.oldValue;void 0!==e.__qclosepopup&&i!==a&&(e.__qclosepopup.depth=s(i))},unbind:function(e){void 0===e.__qclosepopup_destroyed?o(e):delete e.__qclosepopup_destroyed}}},bcd1:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flex justify-center q-mt-md",attrs:{id:"adminArticles"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-2 flex justify-center items-center"},[i("div",[i("q-btn",{attrs:{outline:"",rounded:"",label:"+ 新文章",color:"primary"},on:{click:function(t){e.dialog=!0}}}),i("q-dialog",{ref:"dialog",attrs:{id:"dialog-article",persistent:"",title:e.form._id.length>0?"編輯商品":"新增商品",maximized:e.maximizedToggle,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[i("q-card",{staticClass:"bg-white text-dark"},[i("q-bar",[i("q-space"),i("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[i("q-tooltip",{attrs:{"content-class":"bg-white text-primary"}},[e._v("Close")])],1)],1),i("q-card-section",{staticClass:"q-pt-none"},[i("div",{staticClass:"arTitle q-pt-lg flex justify-center"},[i("div",{staticClass:"container"},[i("form",{staticClass:"row",attrs:{autocorrect:"off",autocapitalize:"off",autocomplete:"off",spellcheck:"false"},on:{submit:e.submitForm,reset:e.resetForm}},[i("div",{staticClass:"col-9 q-pr-md"},[i("q-input",{attrs:{label:"標題","lazy-rules":"",state:e.state.artTitle,rules:[function(e){return e&&e.length>0||"請輸入標題"}]},model:{value:e.form.artTitle,callback:function(t){e.$set(e.form,"artTitle",t)},expression:"form.artTitle"}})],1),i("div",{staticClass:"col-3 flex justify-center items-start q-pt-md"},[i("q-btn",{staticClass:"q-mr-md",attrs:{outline:"",label:"清除",type:"reset",icon:"restart_alt",color:"grey-7"}}),i("q-btn",{attrs:{label:"送出",type:"submit",icon:"send",color:"primary"}})],1),i("div",{staticClass:"arContent col-12 q-mt-lg"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-9"},[i("div",{staticClass:"q-gutter-sm q-pr-lg"},[i("q-editor",{ref:"editor_ref",attrs:{state:e.state.description,"min-height":"70vh","toolbar-color":"secondary","toolbar-bg":"grey-2",placeholder:"輸入你要分享的旅行故事吧...",definitions:{photo:{tip:"插入圖片",icon:"insert_photo"}},toolbar:[["left","center","right","justify"],["bold","italic","strike","underline",{icon:e.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},"removeFormat"],["quote","unordered","ordered"],["photo","link"],["undo","redo"]]},nativeOn:{paste:function(t){return function(t){return e.pasteCapture(t)}.apply(null,arguments)}},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)]),i("div",{staticClass:"col-12 col-md-3 bg-white"},[i("h3",{staticClass:"textTitle text-h4 text-secondary",staticStyle:{margin:"0"}},[e._v("\n                              文章設定\n                            ")]),i("div",{staticClass:"q-pt-md"},[i("q-list",{staticClass:"rounded-borders",attrs:{bordered:""}},[i("q-expansion-item",{staticClass:"text-grey-9 q-gutter-md",attrs:{"expand-separator":"",icon:"label",label:"標籤","default-opened":""}},[i("q-card",{staticClass:"q-pl-md"},[i("q-card-section",[i("q-select",{attrs:{options:e.optType,label:"主題類型"},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}}),i("q-select",{attrs:{options:e.optCat,label:"分類"},model:{value:e.form.category,callback:function(t){e.$set(e.form,"category",t)},expression:"form.category"}})],1)],1)],1),i("q-expansion-item",{staticClass:"text-grey-9",attrs:{"expand-separator":"",icon:"image",label:"封面照片","default-opened":""}},[i("div",{staticClass:"flex justify-center q-pb-md"},[i("img-inputer",{attrs:{theme:"light",size:"small",placeholder:"點擊或拖曳選擇圖片","bottom-text":"點擊或拖曳以修改"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1)]),i("q-expansion-item",{staticClass:"text-grey-9",attrs:{"expand-separator":"",icon:"public",label:"狀態","default-opened":""}},[i("q-card",{staticClass:"q-pl-md"},[i("q-card-section",[i("q-radio",{attrs:{val:!0,label:"發布"},model:{value:e.form.showing,callback:function(t){e.$set(e.form,"showing",t)},expression:"form.showing"}}),i("q-radio",{attrs:{val:!1,label:"隱藏"},model:{value:e.form.showing,callback:function(t){e.$set(e.form,"showing",t)},expression:"form.showing"}})],1)],1)],1)],1)],1)])])])])])])])],1)],1)],1)]),e._m(0),i("div",{staticClass:"col-2 flex justify-center items-center"},[i("q-btn",{attrs:{outline:"",rounded:"",color:"primary",label:"管理"}})],1)]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("div",{staticClass:"q-pt-md"},[i("q-table",{ref:"articleTable",attrs:{columns:e.columns,data:e.articles,"row-key":"name",filter:e.filter,loading:e.loading,pagination:e.initialPagination},scopedSlots:e._u([{key:"top",fn:function(){return[i("div",{staticClass:"text-h6 text-grey-7"},[e._v("所有文章")]),i("q-space"),i("q-input",{attrs:{outlined:"",dense:"",debounce:"300",color:"primary",placeholder:"查詢"},scopedSlots:e._u([{key:"append",fn:function(){return[i("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body-cell-image",fn:function(t){return[i("q-td",{attrs:{props:t}},[i("div",{key:"image",attrs:{props:t}},[t.row.image?i("img",{staticStyle:{height:"50px"},attrs:{src:t.row.image}}):e._e()])])]}},{key:"body-cell-showing",fn:function(t){return[i("q-td",{attrs:{props:t}},[i("div",{key:"showing",attrs:{props:t}},[e._v("\n                  "+e._s(t.row.showing?"V":"")+"\n                ")])])]}},{key:"body-cell-action",fn:function(t){return[i("q-td",{attrs:{props:t}},[i("div",{key:"action",attrs:{props:t}},[i("q-btn",{attrs:{flat:"",round:"",color:"grey",icon:"edit_note"},on:{click:function(i){return e.editArticle(t.rowIndex)}}})],1)])]}}])})],1)])])])])},n=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"col-8"},[i("h2",{staticClass:"text-center"},[e._v("文章管理")])])}],s=i("c973"),o=i.n(s),r=(i("96cf"),i("a4d3"),i("e01a"),i("99af"),i("d81d"),{name:"adminArticles",data:function(){return{articles:[],columns:[{name:"artTitle",label:"標題",field:function(e){return e.artTitle},align:"left"},{name:"type",label:"主題類型",field:"type",align:"center"},{name:"category",label:"分類",field:"category",align:"center"},{name:"image",label:"封面照片",field:"image",align:"center"},{name:"showing",label:"狀態",field:"showing",align:"center"},{name:"author",label:"作者",field:"author",align:"center"},{name:"date",label:"時間",field:"date",align:"center",sortable:!0},{name:"action",label:"編輯",field:"action",align:"center"}],loading:!1,filter:"",dialog:!1,maximizedToggle:!0,initialPagination:{sortBy:"desc",descending:!1,rowsPerPage:7},form:{artTitle:"",description:"",type:null,category:null,image:null,showing:!0,author:"user.account",_id:""},optType:["東北亞","東南亞","歐洲","中國港澳","台灣","美洲","紐澳","太平洋諸島","南亞及西亞","非西","非洲"],optCat:["飲食","住宿","交通","遊記","景點","金錢","氣候","其他"]}},computed:{state:function(){var e;return{artTitle:0!==this.form.artTitle.length||null,description:0===(null===(e=this.form.description)||void 0===e?void 0:e.length)?null:this.form.description>100}}},methods:{editArticle:function(e){this.form={artTitle:this.articles[e].artTitle,description:this.articles[e].description,type:this.articles[e].type,category:this.articles[e].category,image:this.articles[e].image,showing:this.articles[e].showing,_id:this.articles[e]._id,rowIndex:e},this.$refs.dialog.show("dialog-article")},pasteCapture:function(e){var t,i;"INPUT"!==e.target.nodeName&&(e.preventDefault(),e.originalEvent&&e.originalEvent.clipboardData.getData?(t=e.originalEvent.clipboardData.getData("text/plain"),this.$refs.editor_ref.runCmd("insertText",t)):e.clipboardData&&e.clipboardData.getData?(t=e.clipboardData.getData("text/plain"),this.$refs.editor_ref.runCmd("insertText",t)):window.clipboardData&&window.clipboardData.getData&&(i||(i=!0,this.$refs.editor_ref.runCmd("ms-pasteTextOnly",t)),i=!1))},resetForm:function(e){this.form={artTitle:"",description:"",type:"",category:"",image:null,showing:!0,_id:""}},submitForm:function(){var e=this;return o()(regeneratorRuntime.mark((function t(){var i,a,n,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(n in t.prev=0,a=new FormData,e.form)a.append(n,e.form[n]);if(0!==(null===(i=e.form._id)||void 0===i?void 0:i.length)){t.next=8;break}return t.next=6,e.$axios.post("/articles",a,{headers:{authorization:"Bearer "+e.$store.state.user.jwt.token}});case 6:t.next=14;break;case 8:return t.next=10,e.$axios.patch("/articles/"+e.form._id,a,{headers:{authorization:"Bearer "+e.$store.state.user.jwt.token}});case 10:s=t.sent,o=s.data,e.articles[e.form.rowIndex]={artTitle:e.form.artTitle,description:e.form.description,type:e.form.type,category:e.form.category,showing:e.form.showing,image:"".concat("https://backpacking20210824.herokuapp.com","/files/").concat(o.result.image),_id:e.form._id},e.$q.dialog({title:"完成",message:"請刷新頁面喔!",color:"red-13",ok:!0});case 14:e.$refs.dialog.hide("dialog-article"),t.next=21;break;case 17:t.prev=17,t.t0=t["catch"](0),console.log(t.t0),e.$q.dialog({title:"錯誤",message:t.t0.response.data.message,color:"red-13",ok:!0});case 21:case"end":return t.stop()}}),t,null,[[0,17]])})))()}},mounted:function(){var e=this;return o()(regeneratorRuntime.mark((function t(){var i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/articles/all",{headers:{authorization:"Bearer "+e.$store.state.user.jwt.token}});case 3:i=t.sent,a=i.data,e.articles=a.result.map((function(t){return t.image&&(t.image="".concat("https://backpacking20210824.herokuapp.com","/files/").concat(t.image)),t.date=new Date(t.date).toLocaleString(),t.author=e.$store.state.user.user.account,t})),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0),e.$q.dialog({title:"錯誤",message:"取得文章失敗",color:"red-13",ok:!0});case 12:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}),l=r,c=i("2877"),d=i("9c40"),p=i("24e8"),u=i("f09f"),h=i("d847"),g=i("2c91"),m=i("05c0"),f=i("a370"),b=i("27f9"),v=i("d66b"),_=i("1c1c"),x=i("3b73"),y=i("ddd8"),q=i("3786"),w=i("eaac"),k=i("0016"),C=i("db86"),T=i("7f67"),$=i("eebe"),I=i.n($),S=Object(c["a"])(l,a,n,!1,null,null,null);t["default"]=S.exports;I()(S,"components",{QBtn:d["a"],QDialog:p["a"],QCard:u["a"],QBar:h["a"],QSpace:g["a"],QTooltip:m["a"],QCardSection:f["a"],QInput:b["a"],QEditor:v["a"],QList:_["a"],QExpansionItem:x["a"],QSelect:y["a"],QRadio:q["a"],QTable:w["a"],QIcon:k["a"],QTd:C["a"]}),I()(S,"directives",{ClosePopup:T["a"]})},d847:function(e,t,i){"use strict";var a=i("ded3"),n=i.n(a),s=i("2b0e"),o=i("b7fa"),r=i("87e8"),l=i("dde5"),c={role:"toolbar"};t["a"]=s["a"].extend({name:"QBar",mixins:[r["a"],o["a"]],props:{dense:Boolean},computed:{classes:function(){return"q-bar--".concat(!0===this.dense?"dense":"standard"," ")+"q-bar--".concat(!0===this.isDark?"dark":"light")}},render:function(e){return e("div",{staticClass:"q-bar row no-wrap items-center",class:this.classes,attrs:c,on:n()({},this.qListeners)},Object(l["c"])(this,"default"))}})}}]);