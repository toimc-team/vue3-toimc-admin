import{_ as l}from"./BasicTable.44cd7a19.js";import{_ as i,e as c,g as d,a1 as u,o as m,j as g,w as b,k as w,t as f}from"./index.3688f571.js";import"./el-loading.ba102013.js";import"./el-pagination.e8623446.js";import"./d-arrow-right.d704c097.js";import"./el-table-column.c0599572.js";import"./el-checkbox.e96509e4.js";import"./el-image-viewer.dd203f65.js";import"./zoom-in.76f44113.js";/* empty css                */import"./el-progress.7db3cc46.js";import"./check.66cdb9dc.js";import"./TCard.ffd98c38.js";import"./el-card.b796da35.js";import"./TransitionList.1aac342d.js";import"./BasicTransition.ec7c52e4.js";import"./index2.a2626d56.js";const h=c({name:"BasicTableExample",setup(){const t=[{date:"2016-05-03",name:"Tom",address:"No. 189, Grove St, Los Angeles",progress:50,avatar:"ep:arrow-down-bold",rate:3.5,link:"https://www.bing.com",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{date:"2016-05-02",name:"Tom",address:"No. 189, Grove St, Los Angeles",progress:65,avatar:"ep:arrow-down-bold",rate:2.7,link:"https://www.bing.com",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{date:"2016-05-04",name:"Tom",address:"No. 189, Grove St, Los Angeles",progress:15,avatar:"ep:arrow-down-bold",rate:3.4,link:"https://www.bing.com",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"},{date:"2016-05-01",name:"Tom",address:"No. 189, Grove St, Los Angeles",progress:75,avatar:"ep:arrow-down-bold",rate:5,link:"https://www.bing.com",url:"https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"}],a=[{label:"\u7D22\u5F15",type:"index",align:"center"},{type:"selection",align:"center"},{label:"\u65E5\u671F",prop:"date",align:"center",attrs:{sortable:!0}},{label:"\u5934\u50CF",prop:"url",align:"center",type:"image"},{label:"\u8BC4\u5206",prop:"rate",align:"center",type:"rate"},{label:"\u59D3\u540D",prop:"name",align:"center",type:"tag"},{label:"\u6D88\u606F",prop:"badge",align:"center",type:"badge"},{label:"\u8FDB\u5EA6",prop:"progress",align:"center",type:"progress",width:200,attrs:{color:"green"},format:e=>`${e}%`},{label:"\u5730\u5740",prop:"address",align:"center",slot:"address",width:300},{label:"\u94FE\u63A5",prop:"link",align:"center",type:"link",width:120},{label:"\u64CD\u4F5C",align:"center",action:!0,fixed:"right",width:200,actionItems:[{type:"button",attrs:{type:"primary"},text:"\u7F16\u8F91",click:e=>{}},{type:"button",text:"\u8BE6\u60C5",click:e=>{}}]}],o={total:100},r=e=>{},n=d();return u(()=>{setInterval(()=>{},3e3)}),{tableData:t,columns:a,pagination:o,handleCurrentChange:r,table:n}}});function _(t,a,o,r,n,e){const s=l;return m(),g(s,{ref:"table",data:t.tableData,columns:t.columns,pagination:t.pagination,"default-sort":{prop:"date",order:"descending"}},{address:b(({row:p})=>[w(f(p),1)]),_:1},8,["data","columns","pagination"])}var I=i(h,[["render",_]]);export{I as default};