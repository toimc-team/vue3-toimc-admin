import{_ as p}from"./BasicTable.9dbe3afb.js";import{_ as i,e as c,g as d,a2 as u,o as g,j as m,w as b,k as w,t as f}from"./index.3fe8d540.js";import"./el-loading.bf0e3f1d.js";import"./el-pagination.ca3de778.js";import"./el-table-column.9fe03727.js";import"./el-checkbox.e815cc2f.js";import"./el-image-viewer.71746ba5.js";/* empty css                */import"./el-progress.27e4aaaf.js";import"./TCard.c75331d1.js";import"./el-card.f1dcbc48.js";import"./TransitionList.567a7150.js";import"./BasicTransition.137fc5c2.js";import"./index2.5c90600d.js";const h=c({name:"BasicTableExample",setup(){const t=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",progress:50,avatar:"ep:arrow-down-bold",rate:3.5,link:"https://www.bing.com",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",progress:65,avatar:"ep:arrow-down-bold",rate:2.7,link:"https://www.bing.com",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",progress:15,avatar:"ep:arrow-down-bold",rate:3.4,link:"https://www.bing.com",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",progress:75,avatar:"ep:arrow-down-bold",rate:5,link:"https://www.bing.com",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}],a=[{label:"\u7D22\u5F15",type:"index",align:"center"},{type:"selection",align:"center"},{label:"\u65E5\u671F",prop:"date",align:"center",attrs:{sortable:!0}},{label:"\u5934\u50CF",prop:"url",align:"center",type:"image"},{label:"\u8BC4\u5206",prop:"rate",align:"center",type:"rate"},{label:"\u59D3\u540D",prop:"name",align:"center",type:"tag"},{label:"\u6D88\u606F",prop:"badge",align:"center",type:"badge"},{label:"\u8FDB\u5EA6",prop:"progress",align:"center",type:"progress",width:200,attrs:{color:"green"},format:e=>`${e}%`},{label:"\u5730\u5740",prop:"address",align:"center",slot:"address",width:300},{label:"\u94FE\u63A5",prop:"link",align:"center",type:"link",width:120},{label:"\u64CD\u4F5C",align:"center",action:!0,fixed:"right",width:200,actionItems:[{type:"button",attrs:{type:"primary"},text:"\u7F16\u8F91",click:e=>{}},{type:"button",text:"\u8BE6\u60C5",click:e=>{}}]}],o={total:100},r=e=>{},n=d();return u(()=>{setInterval(()=>{},3e3)}),{tableData:t,columns:a,pagination:o,handleCurrentChange:r,table:n}}});function _(t,a,o,r,n,e){const s=p;return g(),m(s,{ref:"table",data:t.tableData,columns:t.columns,pagination:t.pagination,"default-sort":{prop:"date",order:"descending"}},{address:b(({row:l})=>[w(f(l),1)]),_:1},8,["data","columns","pagination"])}var $=i(h,[["render",_]]);export{$ as default};