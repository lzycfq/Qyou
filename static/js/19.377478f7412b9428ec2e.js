webpackJsonp([19],{RKXb:function(t,s){},baIq:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABt0lEQVQ4T81Sv2tTURT+TsIzGsVJHPUv0KVQCoIuThEX91KHYuCe4wOhg04KblIz3Xsf2kAEl5JNF8GliA6i+AtxLDiVaiIkIjwkeffILS8hOpRAF+904H7n4/txCAd8dMB9/IcE3W73UL/fb6jqGQBVAH1V/U5EP4ui2ErT9Pes7amFTqdzOM/zGyGEb0TUZeZfs0Dv/QVVvQrgBTM/mvxNCZxzbSJqG2Ne7xestfY8gIaI3Iy4PQJr7XKlUvlqjHk5TyvOuSsAjkclEwIvIiYuZ1m2OBqNfqRpum2tPZ0kyaDZbA5n54hzzj1m5mVyzh0DcIeZ17IsOxkzUNVPeZ6fq9frQ1V9kyTJxfF4PFDV9yKyVKq+T0S3qdVqHanVaveY+XrJ3AbwlpkfxFxU9Z2IZNbaDSL6wMy+xD1k5mt7FiKQmVfn8R8xseper7fBzCuTDBoAEhF5Mg+J9/5WCOGpiHyZrXE95rAfQWk3hv2ZmZ9Paywl3QXwCsBlADsAhgA+hhC0Wq0eDSEsEdGJoijWY0N/HZL3/pKqrhDRM2NMx3u/EEI4RURn462o6oCINpl591+FfwBAHdnc8HPSvAAAAABJRU5ErkJggg=="},tley:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e,i=a("a3Yh"),o=a.n(i),n=a("5yyx"),r=a("QxwX"),l=(a("Drwf"),{name:"Thread_Photography",data:function(){return{currentPage:1,pagesize:12,Phobanner:[],ison:!0,biaoqian:["精华","游记","攻略","讨论"],taglist:["全部问题","0回答"],type_indexbiaoqian:-1,type_indexbiaoqians:-1,restaurants:[],Phoquestion:[],Phoquestions:[],bbsbox:[],state:"",timeout:null,search_params:{},ratevalue:3.5,ruleForm:{searchinfo:""},rules:{searchinfo:[{required:!0,message:"请输入搜索内容",trigger:"blur"}]},sort:[{value:"1",label:"按时间回复排序"},{value:"2",label:"按发帖时间排序"}],sbvalue:"按时间回复排序",btnFlag:!1}},mounted:function(){var t=new r.a(".gallery-thumbs",{observer:!0,observeParents:!0,spaceBetween:10,slidesPerView:"auto",autoplay:!0,noSwiping:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0,direction:"vertical"});new r.a(".gallery-top",{direction:"vertical",observer:!0,observeParents:!0,autoplay:!0,effect:"fade",slidesPerView:"auto",noSwiping:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},thumbs:{swiper:t}});this.restaurants=this.questionsearchs(),window.addEventListener("scroll",this.scrollToTop)},destroyed:function(){window.removeEventListener("scroll",this.scrollToTop)},created:function(){this.buildPhobanner(),this.buildPhoquestion(),this.buildPhoquestions(),this.buildbbsbox()},methods:(e={buildPhobanner:function(){var t=this;this.axios.get("/api/buildPhobanner").then(function(s){t.Phobanner=s.data.data}).catch(function(t){console.log(t)})},questionsearchs:function(){var t=this;this.axios.get("/api/buildrestaurants").then(function(s){t.restaurants=s.data.data}).catch(function(t){console.log(t)})},searchBtn:function(){var t=this;this.axios.get("",{params:{statevalue:this.state}}).then(function(s){t.$router.push({name:""})}).catch(function(t){console.log(t)})}},o()(e,"searchBtn",function(t){var s=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;s.axios.get("",{params:{searchinfo:s.ruleForm.searchinfo}}).then(function(t){}).catch(function(t){console.log(t)})})}),o()(e,"buildPhoquestion",function(){var t=this;this.axios.get("/api/buildPhoquestion").then(function(s){t.Phoquestion=s.data.data}).catch(function(t){console.log(t)})}),o()(e,"buildPhoquestions",function(){var t=this;this.axios.get("/api/buildPhoquestions").then(function(s){t.Phoquestions=s.data.data}).catch(function(t){console.log(t)})}),o()(e,"buildbbsbox",function(){var t=this;this.axios.get("/api/buildbbsbox").then(function(s){t.bbsbox=s.data.data}).catch(function(t){console.log(t)})}),o()(e,"_huxingtab",function(){1==this.ison?this.ison=!1:this.ison=!0}),o()(e,"handleSizeChange",function(t){this.pagesize=t,console.log(this.pagesize)}),o()(e,"handleCurrentChange",function(t){this.currentPage=t,console.log(this.currentPage)}),o()(e,"clicksort",function(t){this.buildPhoquestion()}),o()(e,"typeIndexbiaoqian",function(t){this.type_indexbiaoqian=t,this.search_params.type=this.biaoqian[t],this.buildPhoquestion()}),o()(e,"typeIndexbiaoqians",function(t){this.type_indexbiaoqians=t,this.search_params.type=this.taglist[t],this.buildPhoquestions()}),o()(e,"querySearch",function(t,s){var a=this.restaurants;s(t?a.filter(this.createFilter(t)):a)}),o()(e,"createFilter",function(t){return function(s){return 0===s.value.toLowerCase().indexOf(t.toLowerCase())}}),o()(e,"scrollToTop",function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.scrollTop=t,this.scrollTop>320?this.btnFlag=!0:this.btnFlag=!1}),e),components:{headers:n.a}}),c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("el-col",{attrs:{span:24}},[e("headers"),t._v(" "),e("div",{staticStyle:{clear:"both"}}),t._v(" "),e("div",{staticClass:"bbs_ind_title",staticStyle:{"padding-bottom":"20px"}},t._l(t.bbsbox,function(s,a){return e("div",{key:a,staticClass:"bbs_box_auto"},[e("strong",{staticClass:"titles fontYaHei"},[t._v(t._s(s.bbsboxtitle))]),t._v(" "),e("div",{staticClass:"admins"},[e("dl",[e("dt",{staticClass:"fontYaHei"},[t._v("版主")]),t._v(" "),t._l(s.bbsboxbanzhu,function(s,a){return e("dd",{key:a},[e("router-link",{attrs:{to:""}},[e("img",{attrs:{src:s.bbsboximg,width:"32",height:"32",alt:"item.bbsboxname"}}),e("span",{staticClass:"xbannername"},[t._v(t._s(s.bbsboxname))]),t._v(" "),e("span",{staticClass:"xlistAuthWrap"})])],1)})],2)]),t._v(" "),e("div",{staticStyle:{clear:"both"}}),t._v(" "),e("div",{staticClass:"clearfix divPt30 x-tdn"},[e("div",{staticClass:"texts"},[t._v(t._s(s.bbsboxdsc)),e("a",{attrs:{href:"http://www.qyer.com/htmlpages/bbsguide.html",target:"_blank","data-bn-ipg":"bbs-board-guide"}},[e("font",{attrs:{color:"darkgreen"}},[t._v(t._s(s.bbsboxzhina))])],1)]),t._v(" "),e("div",{staticClass:"buttons"},[e("div",{staticClass:"ui_btn_bigA"},[e("el-dropdown",{attrs:{placement:"bottom"}},[e("span",{staticClass:"ui_btn_bigA"},[t._v("\n\t\t\t\t\t\t\t\t发新帖 "),e("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[e("router-Link",{staticStyle:{color:"#636363"},attrs:{to:""}},[t._v("游记")])],1),t._v(" "),e("el-dropdown-item",[e("router-Link",{staticStyle:{color:"#636363"},attrs:{to:""}},[t._v("攻略")])],1),t._v(" "),e("el-dropdown-item",[e("router-Link",{staticStyle:{color:"#636363"},attrs:{to:""}},[t._v("讨论")])],1)],1)],1)],1),t._v(" "),e("router-link",{staticClass:"ui_btn_big js-open-ask-layer",attrs:{to:""}},[t._v("提问题")])],1)])])}),0),t._v(" "),e("div",{staticClass:"Pho_bannerbg"},[e("div",{staticClass:"Pho_banner"},[e("div",{staticClass:"swiper-container gallery-top "},[e("div",{staticClass:"swiper-wrapper"},t._l(t.Phobanner,function(t,s){return e("div",{key:s,staticClass:"swiper-slide Pho_Visaimg"},[e("router-link",{attrs:{to:{path:"/Thread_PhotographyDetail",params:{Photographyid:t.Photography}}}},[e("img",{attrs:{src:t.Phobannerimg,alt:"item.Phobannertxt",width:"680px",height:"400px"}})])],1)}),0)]),t._v(" "),e("div",{staticClass:"swiper-container gallery-thumbs Pho_gallery-thumbs"},[e("div",{staticClass:"swiper-wrapper"},t._l(t.Phobanner,function(s,a){return e("div",{key:a,staticClass:"swiper-slide Pho_gallery-thumbsslide"},[e("router-link",{attrs:{to:{path:"/Thread_PhotographyDetail",params:{Photographyid:s.Photography}}}},[e("img",{staticClass:"v-avter",attrs:{src:s.Phobanneravter,alt:"item.Phobannertxt"}}),t._v(" "),e("img",{staticClass:"xauthimg24",attrs:{src:"//common1.qyerstatic.com/bbs/old/images/authentication_u.png","data-title":"穷游资深精华作者"}}),t._v(" "),e("div",{staticClass:"gallery-thumbsslidetxt"},[e("p",{staticClass:"vbdl-t"},[e("a",[t._v(t._s(s.Phobannertxt))])])])])],1)}),0)])])]),t._v(" "),e("div",{staticClass:"Pho_question"},[e("div",{staticClass:"Pho_question_title"},[e("ul",{staticClass:"bankuai_question"},[e("li",{staticClass:"bankuai_questionli",class:{active:t.ison},on:{click:function(s){return t._huxingtab()}}},[t._v("主版块")]),t._v(" "),e("li",{staticClass:"bankuai_questionli",class:{active:!t.ison},on:{click:function(s){return t._huxingtab()}}},[t._v("提问")])]),t._v(" "),e("div",{staticClass:"Pho_question_searchs"},[e("el-autocomplete",{attrs:{rel:"statevalue","fetch-suggestions":t.querySearch,placeholder:"请输入内容"},on:{select:t.handleSelect},model:{value:t.state,callback:function(s){t.state=s},expression:"state"}}),t._v(" "),e("i",{staticClass:"el-icon-search Pho_el-icon-search",on:{click:function(s){return t.searchBtn()}}})],1)]),t._v(" "),e("div",{staticStyle:{clear:"both"}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.ison,expression:"ison"}]},[e("div",{staticClass:"Pho_rec"},[e("div",{staticClass:"rec clearfix"},t._l(t.biaoqian,function(s,a){return e("span",{key:a,staticClass:"recspan",class:t.type_indexbiaoqian===a?"active":"",on:{click:function(s){return t.typeIndexbiaoqian(a)}}},[t._v(t._s(s))])}),0),t._v(" "),e("div",{staticClass:"x-searchtag-wrap"},[e("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,size:"mini"}},[e("el-form-item",{attrs:{prop:"searchinfo"}},[e("el-input",{staticClass:"Com_input",attrs:{rel:"searchinfo",placeholder:"请输入筛选内容"},model:{value:t.ruleForm.searchinfo,callback:function(s){t.$set(t.ruleForm,"searchinfo",s)},expression:"ruleForm.searchinfo"}}),t._v(" "),e("i",{staticClass:"el-icon-search iconss",on:{click:function(s){return t.searchBtn("ruleForm")}}})],1)],1)],1),t._v(" "),e("div",{staticClass:"Pho_recsort"},[e("el-select",{attrs:{placeholder:"请选择"},on:{change:function(s){return t.clicksort(t.index)}},model:{value:t.sbvalue,callback:function(s){t.sbvalue=s},expression:"sbvalue"}},t._l(t.sort,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1)]),t._v(" "),e("div",{staticClass:"Pho_question_list"},[t._l(t.Phoquestion.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),function(s,i){return e("li",{key:i,staticClass:"Pho_question_listli"},[e("a",{staticClass:"question_listliavter"},[e("img",{attrs:{src:s.Phoquestionlistavter,alt:"item.Phoquestionlisttitle"}})]),t._v(" "),e("div",{staticClass:"cntquest"},[e("dl",{staticClass:"cntdl"},[e("router-link",{staticClass:"question_listliimg",attrs:{to:{path:"/Thread_PhotographyDetail",params:{PhotographyDetailid:s.PhotographyDetailid}}}},[e("img",{attrs:{src:s.Phoquestionlistimg}})]),t._v(" "),e("dt",{staticClass:"Pho_title"},[e("router-link",{staticClass:"type",staticStyle:{position:"relative"},attrs:{to:{path:"/Thread_PhotographyDetail",params:{PhotographyDetailid:s.PhotographyDetailid}}}},[t._v(t._s(s.typetitle))]),t._v(" "),e("router-link",{staticClass:"txt",staticStyle:{position:"relative"},attrs:{to:{path:"/Thread_PhotographyDetail",params:{PhotographyDetailid:s.PhotographyDetailid}},target:"_blank"}},[t._v(t._s(s.Phoquestionlisttitle))]),t._v(" "),1===s.type?e("span",{staticClass:"rtop",attrs:{title:"必读"}},[t._v("必读")]):t._e(),2===s.type?e("span",{staticClass:"plan"},[t._v("行程单")]):t._e(),3===s.type?e("span",{staticClass:"titlerate"},[e("el-rate",{attrs:{"void-icon-class":"weixuanzhong","score-template":"{value}"},model:{value:s.ratevalue,callback:function(a){t.$set(s,"ratevalue",a)},expression:"item.ratevalue"}}),t._v("精华\n\t\t\t\t\t\t\t\t")],1):t._e()],1),t._v(" "),e("dt",{staticClass:"Pho_data"},[e("router-link",{attrs:{to:{path:"/Thread_PhotographyDetail",params:{PhotographyDetailid:s.PhotographyDetailid}}}},[t._v(t._s(s.Phoquestionlistzuozhe))]),t._v(" "),e("span",[e("i",{staticClass:"el-icon-date Pho_icon"}),t._v(t._s(s.Phoquestionlistchufa))]),t._v(" "),e("span",[e("i",{staticClass:"el-icon-view Pho_icon"}),t._v(t._s(s.Phoquestionlistchakan))]),t._v(" "),e("span",[e("img",{staticClass:"Pho_icon",attrs:{src:a("baIq")}}),t._v(t._s(s.Phoquestionlistdianzan))]),t._v(" "),e("span",[e("img",{staticClass:"Pho_icon",staticStyle:{"vertical-align":"-2px"},attrs:{src:a("SOMM")}}),t._v(t._s(s.Phoquestionlisthuifu))]),t._v(" "),e("span",[t._v("最后回复"+t._s(s.PhoquestionlastTime))])],1),t._v(" "),e("dd",{staticClass:"text"},[t._v(t._s(s.Phoquestionlisttxt))])],1)])])}),t._v(" "),e("el-pagination",{staticClass:"Visa_elpaination",attrs:{"current-page":t.currentPage,"prev-text":"上一页","next-text":"下一页","page-sizes":[5,8,10,12],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper,slot",background:"",total:t.Phoquestion.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],2)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.ison,expression:"!ison"}]},[e("div",{staticClass:"Pho_recs"},[e("br"),t._v(" "),e("div",{staticClass:"tag-list"},t._l(t.taglist,function(s,a){return e("a",{key:a,staticClass:"likes",class:t.type_indexbiaoqians===a?"active":"",on:{click:function(s){return t.typeIndexbiaoqians(a)}}},[t._v(t._s(s))])}),0),t._v(" "),e("div",{staticClass:"x-searchtag-wrap"},[e("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,size:"mini"}},[e("el-form-item",{attrs:{prop:"searchinfo"}},[e("el-input",{staticClass:"Com_input",attrs:{rel:"searchinfo",placeholder:"请输入筛选内容"},model:{value:t.ruleForm.searchinfo,callback:function(s){t.$set(t.ruleForm,"searchinfo",s)},expression:"ruleForm.searchinfo"}}),t._v(" "),e("i",{staticClass:"el-icon-search iconss",on:{click:function(s){return t.searchBtn("ruleForm")}}})],1)],1)],1),t._v(" "),e("div",{staticClass:"Pho_question_list"},[t._l(t.Phoquestions.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),function(s,a){return e("li",{key:a,staticClass:"Pho_question_listli"},[e("a",{staticClass:"question_listliavter"},[e("img",{attrs:{src:s.Phoquestionlistavters,alt:"item.Phoquestionlisttitles"}})]),t._v(" "),e("div",{staticClass:"cntquest"},[e("dl",{staticClass:"cntdl"},[e("a",{staticClass:"question_listlihuida"},[t._v("2个答案 "),e("span",[t._v("回答")])]),t._v(" "),e("dt",{staticClass:"Pho_title"},[e("router-link",{staticClass:"txt",staticStyle:{position:"relative"},attrs:{to:{path:"/Thread_PhotographyDetail",params:{PhotographyDetailsid:s.PhotographyDetailsid}},target:"_blank"}},[t._v(t._s(s.Phoquestionlisttitles))])],1),t._v(" "),e("dt",{staticClass:"Pho_data"},[e("router-link",{attrs:{to:{path:"/Thread_PhotographyDetail",params:{PhotographyDetailid:s.PhotographyDetailsid}}}},[t._v(t._s(s.Phoquestionlistzuozhes))]),t._v(" "),e("span",{staticStyle:{"margin-left":"15px"}},[t._v("发表于"+t._s(s.PhoquestionlastTimes))])],1),t._v(" "),e("dd",{staticClass:"text"},[t._v(t._s(s.Phoquestionlisttxts))])])])])}),t._v(" "),e("el-pagination",{staticClass:"Visa_elpaination",attrs:{"current-page":t.currentPage,"prev-text":"上一页","next-text":"下一页","page-sizes":[5,8,10,12],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper,slot",background:"",total:t.Phoquestions.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],2)])])]),t._v(" "),e("transition",{attrs:{name:"el-fade-in-linear"}},[t.btnFlag?e("div",{staticClass:"Pho_FixedNav"},[e("div",{staticClass:"Pho_FixedNav_a"},[e("router-link",{staticClass:"Pho_FixedNav_acontent active",attrs:{to:""}},[t._v("主版块")]),t._v(" "),e("router-link",{staticClass:"Pho_FixedNav_acontent",attrs:{to:""}},[t._v("提问")])],1),t._v(" "),e("div",{staticClass:"Pho_FixedNavbutton"},[e("el-dropdown",{attrs:{placement:"bottom"}},[e("span",{staticClass:"xintie"},[t._v("\n\t\t\t\t\t发新贴"),e("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",[e("router-Link",{staticStyle:{color:"#636363"},attrs:{to:""}},[t._v("游记")])],1),t._v(" "),e("el-dropdown-item",[e("router-Link",{staticStyle:{color:"#636363"},attrs:{to:""}},[t._v("攻略")])],1),t._v(" "),e("el-dropdown-item",[e("router-Link",{staticStyle:{color:"#636363"},attrs:{to:""}},[t._v("讨论")])],1)],1)],1),t._v(" "),e("router-link",{staticClass:"wenti",attrs:{to:""}},[t._v("提问题")])],1),t._v(" "),e("div",{staticClass:"Pho_FixedNav_from"},[e("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,rules:t.rules,size:"medium"}},[e("el-form-item",{attrs:{prop:"searchinfo"}},[e("el-input",{staticClass:"Com_input",attrs:{rel:"searchinfo",placeholder:"请输入搜索内容"},model:{value:t.ruleForm.searchinfo,callback:function(s){t.$set(t.ruleForm,"searchinfo",s)},expression:"ruleForm.searchinfo"}}),t._v(" "),e("i",{staticClass:"el-icon-search iconss",on:{click:function(s){return t.searchBtn("ruleForm")}}})],1)],1)],1)]):t._e()])],1)},staticRenderFns:[]};var u=a("C7Lr")(l,c,!1,function(t){a("RKXb")},null,null);s.default=u.exports}});