"use strict";(self["webpackChunkgdv_frontend"]=self["webpackChunkgdv_frontend"]||[]).push([[5872,4702],{9338:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});var s=i(64562),a=i(25372),n=i(85166),l=i(9449),o=i(89780),r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"total-info-content-wrap"},[e("div",{staticClass:"total-info-section"},[e("div",{staticClass:"total-info-content-wrap"},[e("div",{attrs:{id:"div-total-info-header"}}),e("div",{staticClass:"total-info-section"},[e("div",{staticClass:"search-wrap-main-box"},[e("form",{staticClass:"center-search-wrap"},[e("label",{attrs:{for:"전체"}}),e(n.Z,{staticClass:"center-search-select w180 mr10",attrs:{items:t.items1,"item-text":"name","item-value":"value",border:"none",height:"40",label:"전체",name:"전체",id:"전체",solo:"",loading:t.isLoading,"hide-details":""},on:{change:function(e){t.inqVal="00"===t.inqSlctn?"":t.inqVal}},model:{value:t.inqSlctn,callback:function(e){t.inqSlctn=e},expression:"inqSlctn"}}),e("label",{attrs:{for:"검색"}}),e(o.Z,{staticClass:"center-search-input",attrs:{label:"",name:"검색",id:"검색",placeholder:"검색조건 선택 후 검색어를 입력해주세요",outlined:"",dense:"",loading:t.isLoading},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchList.apply(null,arguments)}},model:{value:t.inqVal,callback:function(e){t.inqVal=e},expression:"inqVal"}}),e(s.Z,{staticClass:"vue-bt-small blue",staticStyle:{"background-color":"#0057a8 !important","margin-left":"10px !important"},attrs:{elevation:"0",height:"40",loading:t.isLoading},on:{click:t.searchList}},[t._v("검색")])],1)]),t.isLoading?t._e():e(l.Z,{staticClass:"common-research-table notice mt33",attrs:{summary:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("caption"),e("thead",[e("tr",[e("th",{staticClass:"text-center",staticStyle:{width:"30px"}},[t._v("번호")]),e("th",{staticClass:"text-center",staticStyle:{width:"400px"}},[t._v("제목")]),e("th",{staticClass:"text-center",staticStyle:{width:"50px"}},[t._v("작성자")]),e("th",{staticClass:"text-center",staticStyle:{width:"50px"}},[t._v("작성일자")]),e("th",{staticClass:"text-center",staticStyle:{width:"30px"}},[t._v("조회수")])])]),e("tbody",[e("tr",{directives:[{name:"show",rawName:"v-show",value:0===t.list.length,expression:"list.length === 0"}]},[e("td",{attrs:{colspan:6}},[t._v("검색 결과가 없습니다.")])]),t._l(t.list,(function(i,s){return e("tr",{directives:[{name:"show",rawName:"v-show",value:0!==t.list.length,expression:"list.length !== 0"}],key:s,on:{click:function(e){t.setBrdNo(i.brdNo),t.$emit("moveTabIndex",1)}}},[e("td",{staticClass:"text-right"},[t._v(t._s(i.cnt-s))]),e("td",{staticClass:"text-left"},["Y"===i.ntcYn?e("span",{staticClass:"table-title-tag register"},[t._v("고정글")]):t._e(),t._v(" "+t._s(i.ttl.length>=30?i.ttl.substr(0,30)+"...":i.ttl)+" ")]),e("td",[t._v(t._s(i.wrtrNm))]),e("td",[t._v(t._s(i.inptDt))]),e("td",{staticClass:"text-right"},[t._v(t._s(i.brdInqCnt))])])}))],2)]},proxy:!0}],null,!1,3522410218)}),e("div",{staticClass:"pagination-box text-center mt53"},[e(a.Z,{directives:[{name:"show",rawName:"v-show",value:t.page>10,expression:"page > 10"}],attrs:{"total-visible":10,length:t.tot,loading:t.isLoading},on:{input:t.getBulletinBoardList},model:{value:t.pageNo,callback:function(e){t.pageNo=e},expression:"pageNo"}})],1)],1)])])])},h=[],c=i(20629),d=i(25108),u={data(){return{items1:[{name:"전체",value:"00"},{name:"제목",value:"01"},{name:"작성자",value:"02"}],list:[],page:1,pageNo:1,inqSlctn:"00",inqVal:"",tot:1,dutyCd:"com001001",bbsClssCd:"com007001",totalCnt:1}},async created(){await this.getBulletinBoardList()},computed:{...(0,c.Se)("global",["isLoading"])},methods:{...(0,c.nv)("gdv-app",["setBrdNo"]),...(0,c.nv)("global",["showLoading","hideLoading","showSuccess","showError"]),getBulletinBoardList(){this.showLoading(),this.$apis.common.getBulletinBoardList(this.dutyCd,this.bbsClssCd,this.pageNo,this.inqSlctn,this.inqVal).then((t=>{this.list=t.data.response.list,this.totalCnt=t.data.response.tot,this.totalCnt%10>0&&(this.tot=this.totalCnt/10+1),this.totalCnt%10===0&&(this.tot=this.totalCnt/10),this.tot=Math.floor(this.tot)})).catch((t=>{d.log(t)})).finally((()=>{this.hideLoading()}))},searchList(){""===this.inqVal?(this.pageNo=1,this.getBulletinBoardList()):""===this.inqVal.replace(/\s/g,"")?this.showError({message:"검색어를 입력하세요."}):(this.pageNo=1,this.getBulletinBoardList())}}},v=u,p=i(1001),g=(0,p.Z)(v,r,h,!1,null,null,null),m=g.exports},58126:function(t,e,i){i.r(e),i.d(e,{default:function(){return u}});var s=i(64562),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"total-info-content-wrap"},[t._m(0),e("div",{staticClass:"total-info-section"},[e("div",{staticClass:"total-info-content-wrap"},[e("div",{attrs:{id:"div-total-info-header"}}),e("div",{staticClass:"total-info-section"},[e("div",[0===t.tabIndex?e("NoticeList",{on:{moveTabIndex:t.moveTabIndex}}):t._e()],1),e("div",{staticClass:"notice-dtl"}),e("div",{staticClass:"notice-register"}),e("div",{staticClass:"notice-edit"}),e("div",{staticClass:"notice-btn vue-bt-wrap align-right mo-right mt53"},[e(s.Z,{directives:[{name:"show",rawName:"v-show",value:1===t.tabIndex,expression:"tabIndex === 1"}],staticClass:"vue-bt",attrs:{elevation:"0",loading:t.isLoading},on:{click:function(e){return t.moveTabIndex(0)}}},[t._v("목록")])],1)])])])])},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"total-header-wrap"},[e("p",{staticClass:"total-header-title"},[t._v("공지사항")])])}],l=i(20629),o=i(9338),r={props:{componentList:{type:Array,required:!1,default:()=>[]}},components:{NoticeList:o["default"]},data(){return{tabIndex:0,dutyCd:"com001001",bbsClssCd:"com007001",componentItems:{1:"NoticeDtl",2:"NoticeRegister",3:"NoticeEdit"}}},created(){this.showLoading();const{type:t,brdNo:e}=this.$route.query;this.tabIndex=parseInt(t)||0,e&&this.setBrdNo(e)},computed:{...(0,l.Se)("global",["isLoading"])},methods:{...(0,l.nv)("global",["showLoading","hideLoading","showSuccess","showError"]),...(0,l.nv)("gdv-app",["setBrdNo"]),moveTabIndex(t){if(!t)return this.setTbaIndex(t),!1;const e=this.componentList.find((e=>e.injected&&e.instance.$options.name===this.componentItems[t]));e?(1===t?e.instance.getNoticeDetail():2===t?e.instance.initData():3===t&&e.instance.getNoticeDetail(),this.setTbaIndex(t)):this.showError({message:"권한이 없습니다."})},setTbaIndex(t){window.scrollTo(0,0),this.tabIndex=t,this.componentList.forEach((e=>{e.injected&&void 0!==e.instance.tabIndex&&(e.instance.tabIndex=t)}))}}},h=r,c=i(1001),d=(0,c.Z)(h,a,n,!1,null,null,null),u=d.exports},9449:function(t,e,i){i.d(e,{Z:function(){return l}});var s=i(75352),a=i(96669),n=i(67678),l=(0,n.Z)(a.Z).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:(0,s.kb)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},99223:function(t,e,i){i.d(e,{Z:function(){return a}});var s=i(96669),a=s.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},25372:function(t,e,i){i.d(e,{Z:function(){return h}});i(57658);var s=i(42240),a=i(46746),n=i(16878),l=i(17756),o=i(96669),r=i(67678),h=(0,r.Z)(n.Z,(0,l.Z)({onVisible:["init"]}),o.Z).extend({name:"v-pagination",directives:{Resize:a.Z},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(0===t||isNaN(this.length)||this.length>Number.MAX_SAFE_INTEGER)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const i=e%2===0?1:0,s=Math.floor(e/2),a=this.length-s+1+i;if(this.value>s&&this.value<a){const t=1,e=this.length,a=this.value-s+2,n=this.value+s-2-i,l=a-1===t+1?2:"...",o=n+1===e-1?n+1:"...";return[1,l,...this.range(a,n),o,this.length]}if(this.value===s){const t=this.value+s-1-i;return[...this.range(1,t),"...",this.length]}if(this.value===a){const t=this.value-s+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,s),"...",...this.range(a,this.length)]}},watch:{value(){this.init()}},beforeMount(){this.init()},methods:{init(){this.selected=null,this.onResize(),this.$nextTick(this.onResize),setTimeout((()=>this.selected=this.value),100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const i=[];t=t>0?t:1;for(let s=t;s<=e;s++)i.push(s);return i},genIcon(t,e,i,a,n){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":i},attrs:{disabled:i,type:"button","aria-label":n},on:i?{}:{click:a}},[t(s.Z,[e])])])},genItem(t,e){const i=e===this.value&&(this.color||"primary"),s=e===this.value,a=s?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(i,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":s,"aria-label":this.$vuetify.lang.t(a,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map(((e,i)=>t("li",{key:i},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)])))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}})}}]);