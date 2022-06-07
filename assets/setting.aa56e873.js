import{_ as C}from"./TCard.b4e57689.js";import{e as v,dO as $,h as U,_ as A,E as h,r as g,o as i,c as _,b as o,w as l,j as E,a as r,H as F,p as L,d as x,k as w,I,V as S,c9 as k,v as j,X as N,l as O,G as M,t as D,L as H,g as P,m as T,q}from"./index.3bdb0ef7.js";import{E as G}from"./el-upload.3c3a3de0.js";import"./el-progress.267f6b45.js";import"./el-card.d11e6379.js";import"./TransitionList.32b72e30.js";import"./BasicTransition.a1298097.js";import"./check.6e7b1c3a.js";import"./zoom-in.310f460e.js";const z=v({name:"SettingUserInfoForm",components:{Plus:$},setup(){const e=U({name:"",imageUrl:"",region:"",type:""});return{formLabelAlign:e,handleAvatarSuccess:(s,p)=>{e.imageUrl=URL.createObjectURL(p.raw)},beforeAvatarUpload:s=>s.type!=="image/jpeg"&&s.type!=="image/png"?(h.error("Avatar picture must be JPG format!"),!1):s.size/1024/1024>2?(h.error("Avatar picture size can not exceed 2MB!"),!1):!0}}}),J=e=>(L("data-v-5d38f2d9"),e=e(),x(),e),R=J(()=>r("h2",{class:"border-b border-gray-200 mb-4 pb-2"},"\u57FA\u672C\u4FE1\u606F",-1)),W={class:"mt-4 py-4 px-4 flex justify-end sm:px-6"},X=w("\u4FDD\u5B58");function Q(e,t,c,s,p,y){const n=I,a=S,m=k,d=g("Plus"),f=j,b=G,V=N,B=O;return i(),_(F,null,[R,o(V,{"label-position":"right","label-width":"100px",model:e.formLabelAlign},{default:l(()=>[o(a,{label:"\u59D3\u540D"},{default:l(()=>[o(n,{modelValue:e.formLabelAlign.name,"onUpdate:modelValue":t[0]||(t[0]=u=>e.formLabelAlign.name=u)},null,8,["modelValue"])]),_:1}),o(a,{label:"\u4ECB\u7ECD"},{default:l(()=>[o(n,{modelValue:e.formLabelAlign.name,"onUpdate:modelValue":t[1]||(t[1]=u=>e.formLabelAlign.name=u)},null,8,["modelValue"])]),_:1}),o(a,{label:"\u5934\u50CF"},{default:l(()=>[o(b,{class:"avatar-uploader",action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload},{default:l(()=>[e.formLabelAlign.imageUrl?(i(),E(m,{key:0,shape:"square",size:80,src:e.formLabelAlign.imageUrl},null,8,["src"])):(i(),E(f,{key:1,class:"avatar-uploader-icon"},{default:l(()=>[o(d)]),_:1}))]),_:1},8,["on-success","before-upload"])]),_:1}),o(a,{label:"\u7535\u8BDD"},{default:l(()=>[o(n,{modelValue:e.formLabelAlign.region,"onUpdate:modelValue":t[2]||(t[2]=u=>e.formLabelAlign.region=u)},null,8,["modelValue"])]),_:1}),o(a,{label:"\u90AE\u7BB1"},{default:l(()=>[o(n,{modelValue:e.formLabelAlign.type,"onUpdate:modelValue":t[3]||(t[3]=u=>e.formLabelAlign.type=u)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),r("div",W,[o(B,{type:"primary"},{default:l(()=>[X]),_:1})])],64)}var Y=A(z,[["render",Q],["__scopeId","data-v-5d38f2d9"]]);const K=v({name:"SettingUserNotify",components:{},setup(){return{list:U([{name:"\u8D26\u6237\u5BC6\u7801",desc:"\u5176\u4ED6\u7528\u6237\u7684\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",isOpen:!1},{name:"\u7CFB\u7EDF\u6D88\u606F",desc:"\u7CFB\u7EDF\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",isOpen:!1},{name:"\u5F85\u529E\u4EFB\u52A1",desc:"\u5F85\u529E\u4EFB\u52A1\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",isOpen:!1}])}}}),Z=r("h2",{class:"border-b border-gray-200 mb-4 pb-2"},"\u6D88\u606F\u901A\u77E5",-1),ee={role:"list",class:"mt-2 divide-y divide-gray-200 px-4"},oe={class:"flex flex-col"},te={class:"text-sm font-medium text-gray-900"},ae={class:"text-sm text-gray-500"};function le(e,t,c,s,p,y){const n=H;return i(),_(F,null,[Z,r("ul",ee,[(i(!0),_(F,null,M(e.list,(a,m)=>(i(),_("li",{key:m,class:"py-4 flex items-center justify-between"},[r("div",oe,[r("p",te,D(a.name),1),r("p",ae,D(a.desc),1)]),o(n,{modelValue:a.isOpen,"onUpdate:modelValue":d=>a.isOpen=d,"inline-prompt":"","active-text":"\u5F00","inactive-text":"\u5173"},null,8,["modelValue","onUpdate:modelValue"])]))),128))])],64)}var se=A(K,[["render",le]]);const ne=v({components:{SettingUserInfoForm:Y,SettingUserNotify:se},setup(){const e={name:"\u5F20\u4E09",imageUrl:"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",coverImageUrl:"https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"},t=P("info");return{profile:e,activeName:t,handleClick:(s,p)=>{}}}});function ue(e,t,c,s,p,y){const n=g("setting-user-info-form"),a=T,m=g("setting-user-notify"),d=q,f=C;return i(),E(f,{class:"p-4"},{default:l(()=>[o(d,{modelValue:e.activeName,"onUpdate:modelValue":t[0]||(t[0]=b=>e.activeName=b),class:"mt-2","tab-position":"left",style:{height:"600px"},onTabClick:e.handleClick},{default:l(()=>[o(a,{label:"\u57FA\u672C\u4FE1\u606F",name:"info"},{default:l(()=>[o(n)]),_:1}),o(a,{label:"\u6D88\u606F\u901A\u77E5",name:"article"},{default:l(()=>[o(m)]),_:1})]),_:1},8,["modelValue","onTabClick"])]),_:1})}var ge=A(ne,[["render",ue],["__scopeId","data-v-c81c4702"]]);export{ge as default};
