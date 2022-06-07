var T=Object.defineProperty,j=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var $=(e,a,u)=>a in e?T(e,a,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[a]=u,E=(e,a)=>{for(var u in a||(a={}))L.call(a,u)&&$(e,u,a[u]);if(S)for(var u of S(a))O.call(a,u)&&$(e,u,a[u]);return e},v=(e,a)=>j(e,z(a));import{e as F,dM as b,_ as C,o as n,j as i,w as s,a as y,t as h,b as t,F as d,c as _,C as A,U as I,a1 as M,g as R,k as V,m as x,q as X,r as B,W as P}from"./index.3688f571.js";import{E as G}from"./el-col.675af692.js";import{_ as k}from"./TCard.ffd98c38.js";import{_ as U}from"./index.141bc3d9.js";import{_ as W}from"./CountTo.2caf1d90.js";import{i as w,a2 as D}from"./index.ee585ef6.js";import{E as q,a as H}from"./el-table-column.c0599572.js";import"./el-checkbox.e96509e4.js";import"./el-card.b796da35.js";import"./TransitionList.1aac342d.js";import"./BasicTransition.ec7c52e4.js";const J=F({name:"DashboardCard",props:{options:{type:Object,default:()=>({title:"\u6807\u9898",begin:0,end:b.mock("@float(100, 50000, 2, 2)"),duration:5e3,dot:0,auto:!0,breakAll:!0,prefix:"",suffix:"",mainIcon:"RMBc",dataFrom:"",dataStatus:"rise",dataNum:""})},haveBorder:{type:Boolean,default:!0},hoverShadow:{type:Boolean,default:!0},bodyStyle:{type:Object,default:()=>({})}},setup(){return{}}}),K={class:"dashboard-title"},Q={class:"dashboard-content"},Y={class:"icon-back"},Z={class:"dashboard-footer"},ee={class:"mx-2 flex items-center"},te={key:0,style:{color:"#fff"}},oe={key:1,style:{color:"#13ce66"}},ae={key:2,style:{color:"#ff4d4f"}};function ne(e,a,u,m,l,c){const o=W,r=I,p=U,f=k;return n(),i(f,{class:A({"dashboard-card":!0,"no-border":!e.haveBorder,"hover-shadow":e.hoverShadow}),"body-style":v(E({},e.bodyStyle),{height:"100%"}),shadow:"never"},{default:s(()=>[y("span",K,h(e.options.title),1),y("div",Q,[t(o,{"end-val":e.options.end,"start-val":e.options.begin,decimals:e.options.dot,duration:e.options.duration,autoplay:e.options.auto,prefix:e.options.prefix,suffix:e.options.suffix},null,8,["end-val","start-val","decimals","duration","autoplay","prefix","suffix"]),y("div",Y,[e.options.mainIcon==="RMBc"?(n(),i(r,{key:0,icon:"ant-design:bar-chart-outlined",size:"40px"})):d("",!0),e.options.mainIcon==="RMBs"?(n(),i(r,{key:1,icon:"ant-design:account-book-outlined",size:"40px"})):d("",!0),e.options.mainIcon==="user"?(n(),i(r,{key:2,icon:"ant-design:user-outlined",size:"40px"})):d("",!0),e.options.mainIcon==="order"?(n(),i(r,{key:3,icon:"ant-design:shopping-cart-outlined",size:"40px"})):d("",!0)])]),y("div",Z,[y("span",null,h(e.options.dataFrom),1),y("i",ee,[e.options.dataStatus==="rise"?(n(),i(p,{key:0,cls:"rounded-1/2 w-4 h-4 bg-white flex items-center justify-center",icon:"Top",type:"up",colors:["#67a6f8","",""]})):d("",!0),e.options.dataStatus==="fall"?(n(),i(p,{key:1,cls:"rounded-1/2 w-4 h-4 bg-white flex items-center justify-center",icon:"Bottom",type:"down",colors:["","","#67a6f8"]})):d("",!0),e.options.dataStatus==="riseC"?(n(),i(p,{key:2,cls:"rounded-1/2 w-4 h-4 bg-[#60cb70] flex items-center justify-center",icon:"Top",type:"up",colors:["#fff","",""]})):d("",!0),e.options.dataStatus==="fallC"?(n(),i(p,{key:3,cls:"rounded-1/2 w-4 h-4 bg-[#ec5b56] flex items-center justify-center",icon:"Bottom",type:"down",colors:["","","#fff"]})):d("",!0)]),e.options.dataStatus==="rise"||e.options.dataStatus==="fall"?(n(),_("span",te,h(e.options.dataNum),1)):d("",!0),e.options.dataStatus==="riseC"?(n(),_("span",oe,h(e.options.dataNum),1)):d("",!0),e.options.dataStatus==="fallC"?(n(),_("span",ae,h(e.options.dataNum),1)):d("",!0)])]),_:1},8,["class","body-style"])}var se=C(J,[["render",ne],["__scopeId","data-v-292981b0"]]);const ue=F({name:"EchartsBoard",props:{title:{type:String,default:""},type:{type:String,default:"line"},data:{type:Object,default:()=>({})},haveBorder:{type:Boolean,default:!0},hoverShadow:{type:Boolean,default:!0},bodyStyle:{type:Object,default:()=>({})}},setup(e){const a=()=>{const l=document.getElementById("line-main"),c=w(l),o={color:["#80FFA5","#00DDFF"],tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{left:"1%",right:"3%",bottom:"1%",top:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"]}],yAxis:[{type:"value"}],series:[{name:"\u7B7E\u5355",type:"line",smooth:!0,lineStyle:{width:3},showSymbol:!1,areaStyle:{opacity:.6,color:new D(0,0,0,1,[{offset:0,color:"rgb(128, 255, 165)"},{offset:1,color:"rgb(1, 191, 236)"}])},emphasis:{focus:"series"},data:e.data.line1},{name:"\u56DE\u6B3E",type:"line",smooth:!0,lineStyle:{width:3},showSymbol:!1,areaStyle:{opacity:.6,color:new D(0,0,0,1,[{offset:0,color:"rgb(0, 221, 255)"},{offset:1,color:"rgb(77, 119, 255)"}])},emphasis:{focus:"series"},data:e.data.line2}]};o&&c.setOption(o)},u=()=>{const l=document.getElementById("pie-main"),c=w(l),o={tooltip:{trigger:"item"},series:[{name:"\u8BBF\u95EE\u6765\u6E90",type:"pie",radius:["35%","55%"],avoidLabelOverlap:!0,itemStyle:{borderRadius:10,borderColor:"#fff",borderWidth:2},labelLine:{show:!0,length:8},data:e.data.pie}]};o&&c.setOption(o)},m=()=>{const l=document.getElementById("bar-main"),c=w(l),o={color:"#4e53df",tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},dataset:[{dimensions:["name","score"],source:e.data.bar},{transform:{type:"sort",config:{dimension:"score",order:"desc"}}}],grid:{left:"1%",right:"5%",bottom:"1%",top:"1%",containLabel:!0},xAxis:{axisLine:{show:!1},axisTick:{show:!1}},yAxis:{axisLine:{show:!1},axisTick:{show:!1},type:"category",inverse:!0,axisLabel:{interval:0,rotate:0}},series:{type:"bar",encode:{x:"score",y:"name"},datasetIndex:1,itemStyle:{borderRadius:30}}};o&&c.setOption(o)};return M(()=>{const{type:l}=e;l==="line"&&a(),l==="pie"&&u(),l==="bar"&&m()}),{}}}),re={key:0,id:"pie-main"},de={key:1,id:"line-main"},ie={key:2,id:"bar-main"};function le(e,a,u,m,l,c){const o=I,r=k;return n(),i(r,{header:e.title,tips:"true",class:A({"dashboard-card":!0,"no-border":!e.haveBorder,"hover-shadow":e.hoverShadow}),"body-style":v(E({},e.bodyStyle),{height:"100%"}),shadow:"never"},{tips:s(()=>[e.type==="pie"?(n(),i(o,{key:0,icon:"ep:data-line"})):d("",!0),e.type==="line"?(n(),i(o,{key:1,icon:"ep:pie-chart"})):d("",!0),e.type==="bar"?(n(),i(o,{key:2,icon:"ep:histogram"})):d("",!0)]),default:s(()=>[e.type==="pie"?(n(),_("div",re)):d("",!0),e.type==="line"?(n(),_("div",de)):d("",!0),e.type==="bar"?(n(),_("div",ie)):d("",!0)]),_:1},8,["header","class","body-style"])}var pe=C(ue,[["render",le],["__scopeId","data-v-df14372c"]]);const ce=F({name:"BoardTable",props:{haveBorder:{type:Boolean,default:!0},hoverShadow:{type:Boolean,default:!0},bodyStyle:{type:Object,default:()=>({})}},setup(){const e=b.mock({list:[{date:"2022-05-03",name:"@cname",state:"\u5317\u4EAC",city:"\u5317\u4EAC\u5E02",address:"\u5317\u4EAC\uFF0C\u5317\u4EAC\u5E02\uFF0CXX\u8DEF101\u53F7",zip:"100000"},{date:"2022-05-02",name:"@cname",state:"\u5317\u4EAC",city:"\u5317\u4EAC\u5E02",address:"\u5317\u4EAC\uFF0C\u5317\u4EAC\u5E02\uFF0CXX\u8DEF102\u53F7",zip:"100000"},{date:"2022-05-04",name:"@cname",state:"\u5317\u4EAC",city:"\u5317\u4EAC\u5E02",address:"\u5317\u4EAC\uFF0C\u5317\u4EAC\u5E02\uFF0CXX\u8DEF103\u53F7",zip:"100000"}]}).list,a=R("first");return{tableData:e,activeName:a}}}),me=V("\u656C\u8BF7\u671F\u5F85");function fe(e,a,u,m,l,c){const o=q,r=H,p=x,f=X,g=k;return n(),i(g,{class:A({"dashboard-card":!0,"no-border":!e.haveBorder,"hover-shadow":e.hoverShadow}),"body-style":v(E({},e.bodyStyle),{height:"100%"}),shadow:"never"},{default:s(()=>[t(f,{modelValue:e.activeName,"onUpdate:modelValue":a[0]||(a[0]=N=>e.activeName=N),class:"demo-tabs"},{default:s(()=>[t(p,{label:"\u6D3E\u4EF6\u7BA1\u7406",name:"first"},{default:s(()=>[t(r,{data:e.tableData,border:"",style:{width:"100%"},"table-layout":"auto"},{default:s(()=>[t(o,{prop:"date",label:"\u65E5\u671F",width:"120"}),t(o,{label:"\u6D3E\u9001\u4FE1\u606F"},{default:s(()=>[t(o,{prop:"name",label:"\u59D3\u540D",width:"120"}),t(o,{prop:"state",label:"\u7701\u4EFD",width:"120"}),t(o,{prop:"city",label:"\u5E02\u533A",width:"120"}),t(o,{prop:"address",label:"\u5730\u5740"}),t(o,{prop:"zip",label:"\u90AE\u7F16",width:"120"})]),_:1})]),_:1},8,["data"])]),_:1}),t(p,{label:"\u533A\u57DF\u7BA1\u7406",name:"second"},{default:s(()=>[me]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["class","body-style"])}var _e=C(ce,[["render",fe],["__scopeId","data-v-a628a252"]]);const ye=F({name:"DashBoard",components:{DashboardCard:se,EchartsBoard:pe,BoardTable:_e},setup(){const e=b.mock("@float(100, 50000, 2, 2)"),a=b.mock("@float(600, 3000)"),u=b.mock("@float(5000, 60000)"),m=b.mock("@float(800, 6000)");return{end1:e,end2:a,end3:u,end4:m}}}),be={class:"dashboard-body"};function he(e,a,u,m,l,c){const o=B("dashboard-card"),r=G,p=P,f=B("echarts-board"),g=B("board-table");return n(),_("div",be,[t(p,null,{default:s(()=>[t(r,{span:6},{default:s(()=>[t(o,{options:{title:"\u603B\u9500\u91CF",end:e.end1,dot:2,prefix:"\uFFE5",mainIcon:"RMBc",dataFrom:"\u81EA\u4E0A\u5468\u4EE5\u6765",dataStatus:"rise",dataNum:"12%"},"have-border":!1,"hover-shadow":!1,"body-style":{backgroundColor:"#ff654c",backgroundImage:"linear-gradient(to right, #74bcff , #1890ff)",color:"#fff"}},null,8,["options","body-style"])]),_:1}),t(r,{span:6},{default:s(()=>[t(o,{options:{title:"\u603B\u6210\u4EA4",end:e.end2,mainIcon:"RMBs",dataFrom:"\u81EA\u4E0A\u5468\u4EE5\u6765",dataStatus:"riseC",dataNum:"36%"}},null,8,["options"])]),_:1}),t(r,{span:6},{default:s(()=>[t(o,{options:{title:"\u6D3B\u8DC3\u7528\u6237",end:e.end3,mainIcon:"user",dataFrom:"\u81EA\u4E0A\u5468\u4EE5\u6765",dataStatus:"fallC",dataNum:"5%"}},null,8,["options"])]),_:1}),t(r,{span:6},{default:s(()=>[t(o,{options:{title:"\u8BA2\u5355",end:e.end4,mainIcon:"order",dataFrom:"\u81EA\u4E0A\u5468\u4EE5\u6765",dataStatus:"riseC",dataNum:"8%"}},null,8,["options"])]),_:1})]),_:1}),t(p,null,{default:s(()=>[t(r,{span:12},{default:s(()=>[t(f,{title:"\u8D8B\u52BF",type:"line",data:{line1:[1401,2322,1015,2143,1304,3401,2505,3015,2922,2811,3233,4361],line2:[1201,2822,1113,2345,2204,2806,3107,3002,3510,2155,3881,3511]}})]),_:1}),t(r,{span:6},{default:s(()=>[t(f,{title:"\u5206\u5E03",type:"pie",data:{pie:[{value:1048,name:"\u641C\u7D22\u5F15\u64CE"},{value:735,name:"\u76F4\u63A5\u8BBF\u95EE"},{value:580,name:"\u90AE\u4EF6\u8425\u9500"},{value:484,name:"\u8054\u76DF\u5E7F\u544A"},{value:300,name:"\u89C6\u9891\u5E7F\u544A"}]}})]),_:1}),t(r,{span:6},{default:s(()=>[t(f,{title:"\u6D88\u8D39\u6392\u884C",type:"bar",data:{bar:[["\u5C0F\u660E",314],["\u5C0F\u7EA2",351],["\u5C0F\u674E",287],["\u5C0F\u738B",219],["\u5C0F\u521A",253],["\u5C0F\u5F3A",165],["\u5C0F\u51EF",318],["\u5C0F\u6797",366]]}})]),_:1})]),_:1}),t(p,null,{default:s(()=>[t(r,{span:24},{default:s(()=>[t(g)]),_:1})]),_:1})])}var Ie=C(ye,[["render",he],["__scopeId","data-v-33e9e052"]]);export{Ie as default};