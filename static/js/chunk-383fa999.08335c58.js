(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-383fa999"],{"0337":function(e,t,r){},"16b1":function(e,t,r){"use strict";var a=r("0337"),n=r.n(a);n.a},"3a06":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"5e6e":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"body"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("表格自定义校验")])]),e._v(" "),r("div",{staticClass:"btnBox"},[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.addList}},[e._v("新增")]),e._v(" "),r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.save}},[e._v("保存")])],1),e._v(" "),r("el-form",{ref:"tableForm",attrs:{model:e.formData}},[r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.formData.list,border:""},on:{"row-click":e.getRowData}},[r("el-table-column",{attrs:{label:"项目类别",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{attrs:{prop:"list."+t.$index+".projectType",rules:[{required:!0,message:"请选择",trigger:"change"}]}},[r("el-select",{attrs:{placeholder:"请选择项目类别",size:"small"},model:{value:t.row.projectType,callback:function(r){e.$set(t.row,"projectType",r)},expression:"scope.row.projectType"}},e._l(e.projectList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"projectName",label:"项目名称",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{attrs:{prop:"list."+t.$index+".projectName",rules:[{required:!0,message:"请输入",trigger:"blur"}]}},[r("el-input",{attrs:{size:"mini"},model:{value:t.row.projectName,callback:function(r){e.$set(t.row,"projectName",r)},expression:"scope.row.projectName"}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"项目位置",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{attrs:{prop:"list."+t.$index+".projectLocaltion",rules:[{required:!0,message:"请输入",trigger:"blur"}]}},[r("el-input",{attrs:{size:"mini"},model:{value:t.row.projectLocaltion,callback:function(r){e.$set(t.row,"projectLocaltion",r)},expression:"scope.row.projectLocaltion"}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"汇水面积（平方米）",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{attrs:{prop:"list."+t.$index+".catchmentArea",rules:[{validator:function(t,r,a){e.getParseFloat(t,r,a)},trigger:["blur"]}]}},[r("el-input",{attrs:{size:"mini"},model:{value:t.row.catchmentArea,callback:function(r){e.$set(t.row,"catchmentArea",r)},expression:"scope.row.catchmentArea"}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"总投资（万）",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{attrs:{prop:"list."+t.$index+".totalInvestment",rules:[{validator:function(t,r,a){e.getParseFloat(t,r,a)},trigger:["blur"]}]}},[r("el-input",{attrs:{size:"mini"},model:{value:t.row.totalInvestment,callback:function(r){e.$set(t.row,"totalInvestment",r)},expression:"scope.row.totalInvestment"}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"finishedInvestment",label:"完成投资（万）",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{attrs:{prop:"list."+t.$index+".finishedInvestment",rules:[{validator:function(r,a,n){e.getParseFloatFinishedInvestment(r,a,n,t.$index)},trigger:["blur"]}]}},[r("el-input",{attrs:{size:"mini"},model:{value:t.row.finishedInvestment,callback:function(r){e.$set(t.row,"finishedInvestment",r)},expression:"scope.row.finishedInvestment"}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"projectState",label:"形象进度",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{attrs:{prop:"list."+t.$index+".projectState",rules:[{required:!0,message:"请选择",trigger:"change"}]}},[r("el-select",{attrs:{placeholder:"请选择",size:"small"},model:{value:t.row.projectState,callback:function(r){e.$set(t.row,"projectState",r)},expression:"scope.row.projectState"}},e._l(e.stateList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"建设方",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{attrs:{prop:"list."+t.$index+".buildComp",rules:[{required:!0,message:"请输入",trigger:"blur"}]}},[r("el-input",{attrs:{size:"mini"},model:{value:t.row.buildComp,callback:function(r){e.$set(t.row,"buildComp",r)},expression:"scope.row.buildComp"}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"联系人",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{attrs:{prop:"list."+t.$index+".contacts",rules:[{required:!0,message:"请输入",trigger:"blur"}]}},[r("el-input",{attrs:{size:"mini"},model:{value:t.row.contacts,callback:function(r){e.$set(t.row,"contacts",r)},expression:"scope.row.contacts"}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"teleNum",label:"电话",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{attrs:{prop:"list."+t.$index+".teleNum",rules:[{validator:function(t,r,a){e.getTel(t,r,a)},trigger:["blur"]}]}},[r("el-input",{attrs:{size:"mini"},model:{value:t.row.teleNum,callback:function(r){e.$set(t.row,"teleNum",r)},expression:"scope.row.teleNum"}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"begainDate",label:"开工时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{attrs:{prop:"list."+t.$index+".begainDate",rules:[{required:!0,message:"请输入",trigger:"change"}]}},[r("el-date-picker",{attrs:{type:"date",size:"mini",placeholder:"选择日期"},model:{value:t.row.begainDate,callback:function(r){e.$set(t.row,"begainDate",r)},expression:"scope.row.begainDate"}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"endDate",label:"完工时间",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form-item",{attrs:{prop:"list."+t.$index+".endDate",rules:[{required:!0,message:"请输入",trigger:"change"}]}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",size:"mini"},model:{value:t.row.endDate,callback:function(r){e.$set(t.row,"endDate",r)},expression:"scope.row.endDate"}})],1)]}}])}),e._v(" "),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.deleteItem(t.$index)}}},[e._v("删除")])]}}])})],1)],1)],1),e._v(" "),e._m(0)],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ol",[e._v("\n    需求:\n    "),r("li",[e._v("电话只能为正整数")]),e._v(" "),r("li",[e._v("汇水面积，总投资，完成投资必须为数字且保留两位小数，不能为负数")]),e._v(" "),r("li",[e._v("总投资额大于完成投资额")]),e._v(" "),r("li",[e._v("所有表单都为必输")])])}],o=(r("8f42"),r("dfb8")),i={name:"CustomCheckTable",data:function(){return{formData:{list:[]},rowData:{},projectList:[],stateList:[]}},created:function(){this.initData(),this.initprojectType(),this.initProjectState()},methods:{initData:function(){var e=this,t={id:"001"};Object(o["b"])(t).then((function(t){2e4===t.code&&(e.formData.list=t.data.RetList)}))},initprojectType:function(){var e=this,t={dicName:"project"};Object(o["d"])(t).then((function(t){2e4===t.code&&(e.projectList=t.data.ResPonseBody.content)}))},initProjectState:function(){var e=this,t={dicName:"state"};Object(o["e"])(t).then((function(t){2e4===t.code&&(e.stateList=t.data.ResPonseBody.content)}))},getRowData:function(e,t,r){this.rowData=e},addList:function(){var e={};e.id=Math.random(),e.catchmentArea="0",e.totalInvestment="0",e.finishedInvestment="0",this.formData.list.push(e)},deleteItem:function(e){var t=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then((function(){t.formData.list.splice(e,1)}))},getTel:function(e,t,r){var a=/^[1-9]\d*$/;t||r("请输入"),a.test(t)||r("输入内容不合法"),r()},getParseFloat:function(e,t,r){var a=/^([1-9]\d*|0)(\.\d*[1-9])?$/;t||r("请输入"),a.test(t)||r("输入内容不合法"),r()},getParseFloatFinishedInvestment:function(e,t,r,a){var n=/^([1-9]\d*|0)(\.\d*[1-9])?$/;n.test(t)?Number(this.formData.list[a].totalInvestment)<Number(t)&&r("完成投资不能大于总投资"):r("输入内容不合法"),r()},save:function(){var e=this;this.$refs["tableForm"].validate((function(t){if(!t)return e.$message({type:"error",message:"保存失败"}),!1;e.$message({type:"success",message:"保存成功"})}))}}},l=i,s=(r("16b1"),r("4e82")),c=Object(s["a"])(l,a,n,!1,null,"0fedae11",null);t["default"]=c.exports},7130:function(e,t,r){var a=r("2498"),n=r("3038"),o=r("0cc1"),i=r("3a06"),l="["+i+"]",s="​",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),p=function(e,t,r){var n={},l=o((function(){return!!i[e]()||s[e]()!=s})),c=n[e]=l?t(d):i[e];r&&(n[r]=c),a(a.P+a.F*l,"String",n)},d=p.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=p},"8f42":function(e,t,r){"use strict";var a=r("3f8b"),n=r("549d"),o=r("6077"),i=r("1e01"),l=r("2ab1"),s=r("0cc1"),c=r("cb2e").f,u=r("e493").f,p=r("d3d8").f,d=r("7130").trim,f="Number",m=a[f],v=m,b=m.prototype,h=o(r("65c3")(b))==f,g="trim"in String.prototype,w=function(e){var t=l(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():d(t,3);var r,a,n,o=t.charCodeAt(0);if(43===o||45===o){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+t}for(var i,s=t.slice(2),c=0,u=s.length;c<u;c++)if(i=s.charCodeAt(c),i<48||i>n)return NaN;return parseInt(s,a)}}return+t};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof m&&(h?s((function(){b.valueOf.call(r)})):o(r)!=f)?i(new v(w(t)),r,m):w(t)};for(var _,k=r("f9a5")?c(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;k.length>y;y++)n(v,_=k[y])&&!n(m,_)&&p(m,_,u(v,_));m.prototype=b,b.constructor=m,r("a6d5")(a,f,m)}}}]);