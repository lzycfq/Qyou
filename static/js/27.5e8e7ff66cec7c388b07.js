webpackJsonp([27],{fr4A:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s={name:"Destination_strategy",data:function(){return{currentPage:1,pagesize:6,morenvalue:"按人气",type_search:[{value:"01",label:"按人气"},{value:"02",label:"按首字母"}],search_params:{},Country_breadcrumb:[],CountryplcTopBar:[],plcMenuBarHolder:[],ruleForm:{countryname:""}}},created:function(){this.buildCountry_breadcrumb(),this.buildCountryplcTopBar(),this.buildplcMenuBarHolder(),this.buildplcCitylist()},methods:{buildCountry_breadcrumb:function(){var t=this;this.axios.get("/api/buildCountry_breadcrumb").then(function(i){t.Country_breadcrumb=i.data.data}).catch(function(t){console.log(t)})},buildCountryplcTopBar:function(){var t=this;this.axios.get("/api/buildCountryplcTopBar").then(function(i){t.CountryplcTopBar=i.data.data}).catch(function(t){console.log(t)})},buildplcMenuBarHolder:function(){var t=this;this.axios.get("/api/buildplcMenuBarHolder").then(function(i){t.plcMenuBarHolder=i.data.data}).catch(function(t){console.log(t)})},buildplcCitylist:function(){var t=this;this.axios.get("/api/buildplcCitylist").then(function(i){t.plcCitylist=i.data.data}).catch(function(t){console.log(t)})},handleSizeChange:function(t){this.pagesize=t,console.log(this.pagesize)},handleCurrentChange:function(t){this.currentPage=t,console.log(this.currentPage)},clickcountry:function(t){var i=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;i.axios.get("",{params:{countryname:i.$rels.countryname.value}}).then(function(t){}).catch(function(t){console.log(t)})})},layoutIndex:function(t){this.search_params.type=this.type_search[t],this.buildplcCitylist()}},components:{headers:a("Db7b").a}},e={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("el-col",{attrs:{span:24}},[a("headers"),t._v(" "),a("div",{staticStyle:{clear:"both"}}),t._v(" "),a("div",{staticClass:"qyer_head_crumb"},t._l(t.Country_breadcrumb,function(i,s){return a("el-breadcrumb",{key:s,attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[a("router-link",{attrs:{to:{path:i.link,params:{Countryid:i.Countryid}}}},[t._v(t._s(i.Countryname))])],1),t._v(" "),t._l(i.Country_list,function(i,s){return a("el-breadcrumb-item",{key:s},[a("el-dropdown",[a("span",{staticClass:"el-dropdown-link",attrs:{placement:"bottom-end"}},[t._v("\n\t\t\t\t\t\t\t"+t._s(i.Country_listname)+"\n\t\t\t\t\t\t")]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(i.Country_lists,function(i,s){return a("el-dropdown-item",{key:s},[a("router-link",{staticStyle:{color:"#777777"},attrs:{to:{path:"/Destination_list_Strategy",params:{Country_listid:i.Country_listid}}}},[t._v(t._s(i.Country_listnames))])],1)}),1)],1)],1)}),t._v(" "),a("el-breadcrumb-item",[t._v(t._s(i.Country)+"城市列表")])],2)}),1),t._v(" "),t._l(t.CountryplcTopBar,function(i,s){return a("div",{key:s,staticClass:"plcTopBar clearfix"},[a("div",{staticClass:"plcTopBarL"},[a("p",{staticClass:"plcTopBarNameEn"},[a("router-link",{attrs:{to:{path:"/Destination_Citydetail",params:{Countryid:i.Countryid}}}},[t._v("\n\t\t\t\t\t\t"+t._s(i.plcTopBarjianxie)+"\n\t\t\t\t\t")])],1),t._v(" "),a("div",{staticClass:"plcTopBarNameCns clearfix"},[a("p",{staticClass:"plcTopBarNameCn fontYaHei"},[a("router-link",{attrs:{to:{path:"/Destination_Citydetail",params:{Countryid:i.Countryid}}}},[t._v("\n\t\t\t\t\t\t\t"+t._s(i.plcTopBarcity)+"\n\t\t\t\t\t\t")])],1)])]),t._v(" "),a("div",{staticClass:"plcTopBarR"},[a("div",{staticClass:"plcTopBarWeather"}),t._v(" "),a("div",{staticClass:"plcTopBarStat fontYaHei"},[a("em",[t._v(t._s(i.CountryidBargo))]),t._v("人去过这里,\n\t\t\t\t\t"),a("em",[t._v(t._s(i.Countryidpinlun))]),t._v("条目的地点评\n\t\t\t\t")])]),t._v(" "),a("div",{staticStyle:{clear:"both"}})])}),t._v(" "),t._l(t.plcMenuBarHolder,function(i,s){return a("div",{key:s,staticClass:"plcMenuBarHolder placeNavBar"},[a("div",{staticClass:"plcMenuBars"},[a("ul",{staticClass:"placeNav"},[a("li",{staticClass:"menu"},[a("el-popover",{attrs:{placement:"bottom-start",width:"575",trigger:"hover","popper-class":"chengshi"}},[a("ul",{staticClass:"cityList"},t._l(i.hotcity,function(i,s){return a("li",{key:s,staticClass:"cityItem"},[a("router-link",{attrs:{to:{path:"/Destination_Citydetail",params:{hotcityid:i.hotcityid}}}},[a("img",{staticClass:"pic",attrs:{src:i.hotcityimg}}),t._v(" "),a("span",{staticClass:"cn"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(i.hotcityname)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),a("span",{staticClass:"en"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(i.hotcityjx)+"\n\t\t\t\t\t\t\t\t\t\t")])])],1)}),0),t._v(" "),a("span",{staticStyle:{color:"#666666"},attrs:{slot:"reference"},slot:"reference"},[t._v("热门城市 "),a("i",{staticClass:"el-icon-caret-bottom\n\t\t"})])])],1),t._v(" "),a("li",{staticClass:"menu"},[a("el-popover",{attrs:{placement:"bottom-start","popper-class":"city-zhinan",width:"550",trigger:"hover"}},[a("div",{staticClass:"subMenu-big"},[a("ul",{staticClass:"guideList"},[a("li",{staticClass:"list-item overview"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("目的地概况")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarmudi,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.mudi))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item traffic"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("城际交通")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarchengji,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.chengji))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item domestic_traffic"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("市内交通")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarshinei,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.shinei))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item season"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("旅行日历")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarrili,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.rili))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item currency"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("货币与花费")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarxiaofei,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.xiaofei))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item information"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("实用信息")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarxinxi,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.xinxi))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item notice"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("旅行须知")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbargonggao,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.gonggao))])],1)}),0)],1),t._v(" "),a("li",{staticClass:"list-item define"},[a("router-link",{staticClass:"list-item-title",attrs:{to:"/"}},[t._v("路线")]),t._v(" "),a("ul",{staticClass:"list-item-content"},t._l(i.navbarluxian,function(i,s){return a("li",{key:s},[a("router-link",{attrs:{to:{path:i.link,params:{id:i.id}}}},[t._v(t._s(i.luxian))])],1)}),0)],1)])]),t._v(" "),a("span",{staticStyle:{color:"#666666"},attrs:{slot:"reference"},slot:"reference"},[t._v("国家指南 "),a("i",{staticClass:"el-icon-caret-bottom\n\t\t"})])])],1),t._v(" "),a("li",{staticClass:"menu"},[a("el-dropdown",{attrs:{placement:"bottom-start"}},[a("span",{staticClass:"el-dropdown-link",staticStyle:{color:"#666666"}},[t._v("\n\t\t\t\t\t\t\t\t景点玩乐 "),a("i",{staticClass:"el-icon-caret-bottom\n\t\t"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(i.hotwan,function(i,s){return a("el-dropdown-item",{key:s},[a("router-link",{staticStyle:{color:"#555555"},attrs:{to:{path:"/Destination_list_Strategy",params:{hotwanid:i.hotwanid}}}},[t._v(t._s(i.hotwanname)+"("+t._s(i.hotwannumber)+")")])],1)}),1)],1)],1),t._v(" "),a("li",{staticClass:"menu"},[a("router-link",{staticStyle:{color:"#555555"},attrs:{to:""}},[t._v("美食")])],1),t._v(" "),a("li",{staticClass:"menu"},[a("el-dropdown",{attrs:{placement:"bottom-start"}},[a("span",{staticClass:"el-dropdown-link",staticStyle:{color:"#666666"}},[t._v("\n\t\t\t\t\t\t\t\t旅行商城 "),a("i",{staticClass:"el-icon-caret-bottom\n\t\t\t\t\t\t\t"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(i.lvxingwan,function(i,s){return a("el-dropdown-item",{key:s},[a("router-link",{staticStyle:{color:"#555555"},attrs:{to:{path:"/",params:{lvxingwanid:i.lvxingwanid}}}},[t._v(t._s(i.lvxingwanname)+"("+t._s(i.lvxingwannumber)+")")])],1)}),1)],1)],1),t._v(" "),a("li",{staticClass:"menu"},[a("router-link",{staticStyle:{color:"#555555"},attrs:{to:""}},[t._v("旅行攻略")])],1),t._v(" "),a("li",{staticClass:"menu"},[a("el-dropdown",{attrs:{placement:"bottom-start"}},[a("span",{staticClass:"el-dropdown-link",staticStyle:{color:"#666666"}},[t._v("\n\t\t\t\t\t\t\t\t行程路线 "),a("i",{staticClass:"el-icon-caret-bottom\n\t\t\t\t\t\t\t"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(i.xingcheng,function(i,s){return a("el-dropdown-item",{key:s},[a("router-link",{staticStyle:{color:"#555555"},attrs:{to:{path:"/",params:{xingchengid:i.xingchengid}}}},[t._v(t._s(i.xingchengname))])],1)}),1)],1)],1),t._v(" "),a("li",{staticClass:"menu"},[a("el-dropdown",{attrs:{placement:"bottom-start"}},[a("span",{staticClass:"el-dropdown-link",staticStyle:{color:"#666666"}},[t._v("\n\t\t\t\t\t\t\t\t社区 "),a("i",{staticClass:"el-icon-caret-bottom\n\t\t\t\t\t\t\t"})]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(i.shequ,function(i,s){return a("el-dropdown-item",{key:s},[a("router-link",{staticStyle:{color:"#555555"},attrs:{to:{path:"/",params:{shequid:i.shequid}}}},[t._v(t._s(i.shequname))])],1)}),1)],1)],1),t._v(" "),a("li",{staticClass:"menu"},[a("router-link",{staticStyle:{color:"#555555"},attrs:{to:""}},[t._v("地图")])],1),t._v(" "),a("li",{staticClass:"menu"},[a("router-link",{staticStyle:{color:"#555555"},attrs:{to:""}},[t._v("点评")])],1),t._v(" "),a("li",{staticClass:"menuinput"},[a("el-form",{ref:"ruleForm",refInFor:!0,staticClass:"countryform",attrs:{model:t.ruleForm,rules:t.rules}},[a("el-form-item",{attrs:{prop:"countryname"}},[a("el-input",{attrs:{placeholder:"请输入城市/景点",rel:"countryname"},model:{value:t.ruleForm.countryname,callback:function(i){t.$set(t.ruleForm,"countryname",i)},expression:"ruleForm.countryname"}}),t._v(" "),a("i",{staticClass:"el-icon-search iconinput",on:{click:t.clickcountry}})],1)],1)],1)])])])}),t._v(" "),a("div",{staticClass:"citylist citylistwrap"},[a("div",{staticClass:"citylistwrapcontent"},[a("div",{staticClass:"citylistwrapcontent_left"},[a("h2",{staticClass:"title"},[t._v("日本全部城市及区域")]),t._v(" "),a("div",{staticClass:"tools"},[a("p",{staticClass:"type"},[a("a",{staticClass:"pictext current"}),t._v(" "),a("a",{staticClass:"word"})]),t._v(" "),a("div",{staticClass:"toolselect"},[a("el-select",{attrs:{slot:"select",rel:"citytiaojian",size:"small"},slot:"select",model:{value:t.morenvalue,callback:function(i){t.morenvalue=i},expression:"morenvalue"}},t._l(t.type_search,function(i){return a("el-option",{key:i.value,attrs:{label:i.label,value:i.value},on:{click:function(i){return t.layoutIndex(t.index)}}})}),1)],1)]),t._v(" "),a("div",{staticStyle:{clear:"both"}}),t._v(" "),a("br"),t._v(" "),a("p",{staticStyle:{width:"100%",height:"1px",overflow:"hidden","background-color":"#ececec"}}),t._v(" "),a("div",{staticStyle:{clear:"both"}}),t._v(" "),a("ul",{staticClass:"plcCitylist"},t._l(t.plcCitylist.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),function(i,s){return a("li",{key:s,staticClass:"item1"},[a("p",{staticClass:"pics"},[a("router-link",{attrs:{to:{path:"/Destination_Citydetail",params:{citydetailid:i.citydetailid}}}},[a("em",{staticClass:"number"},[t._v(t._s(s+1))]),t._v(" "),a("img",{attrs:{src:i.plcCitylistimg,width:"160",height:"120",alt:""}})])],1),t._v(" "),a("h3",{staticClass:"title fontYaHei"},[a("router-link",{attrs:{to:{path:"/Destination_Citydetail",params:{citydetailid:i.citydetailid}}}},[t._v(t._s(i.plcCitylistname)+"  "),a("span",{staticClass:"en"},[t._v(t._s(i.plcCitylistjx))])])],1),t._v(" "),a("p",{staticClass:"beento"},[t._v(t._s(i.plcCitylistnumber)+"人去过")]),t._v(" "),a("p",{staticClass:"pois"},t._l(i.cityLandscape,function(i,s){return a("router-link",{key:s,staticStyle:{color:"#636363","font-size":"500"},attrs:{to:{path:"/Destination_Citydetail",params:{Landscapeid:i.Landscapeid}}}},[t._v(t._s(i.cityLandscapecontent)+"、\n\t\t\t\t\t\t\t\t")])}),1),t._v(" "),a("p",{staticClass:"plcAddToLikeList _addToLikeList"}),t._v(" "),a("p",{staticClass:"addPlanBtn"})])}),0),t._v(" "),a("div",{staticStyle:{clear:"both"}}),t._v(" "),a("el-pagination",{staticClass:"elpaination",attrs:{"current-page":t.currentPage,"prev-text":"上一页","next-text":"下一页",background:"","page-sizes":[5,8,10,12],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper,slot",total:t.plcCitylist.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("div",{staticClass:"qySide"},[a("h3",{staticClass:"subTitle "},[t._v("城市及区域地图")]),t._v(" "),a("img",{staticStyle:{position:"relative","margin-top":"20px",border:"1px solid #ececec",padding:"1px",width:"100%"},attrs:{src:"//pics.lvjs.com.cn/pics//uploads/pc/place2/2016-09-19/98282bf9-f439-42ac-a467-3b52bec1ae48_300_200.jpg",alt:"看地图"}}),t._v(" "),a("p",{staticClass:"plaBorderGap",staticStyle:{width:"100%",height:"1px",overflow:"hidden","background-color":"#ececec",margin:"30px 0"}})])])])],2)},staticRenderFns:[]};var l=a("C7Lr")(s,e,!1,function(t){a("nYEp")},null,null);i.default=l.exports},nYEp:function(t,i){}});