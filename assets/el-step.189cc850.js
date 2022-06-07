var Q=Object.defineProperty,R=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var V=(i,n,s)=>n in i?Q(i,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[n]=s,$=(i,n)=>{for(var s in n||(n={}))ee.call(n,s)&&V(i,s,n[s]);if(D)for(var s of D(n))se.call(n,s)&&V(i,s,n[s]);return i},B=(i,n)=>R(i,Z(n));import{Y as F,aB as G,b5 as j,e as H,z as L,g as E,N as I,aC as te,o,c as S,S as _,C as l,ba as e,B as M,bB as ae,aj as ne,a1 as ie,aX as re,A as p,h as le,F as g,a as k,O as T,j as w,w as x,D as oe,v as A,t as N,bg as ce,k as W,as as pe,al as ue,bc as ve}from"./index.3688f571.js";import{c as de}from"./check.66cdb9dc.js";const me=F({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,default:"finish",values:["wait","process","finish","error","success"]},processStatus:{type:String,default:"process",values:["wait","process","finish","error","success"]}}),fe={[G]:(i,n)=>j(i)&&j(n)},Se={name:"ElSteps"},ye=H(B($({},Se),{props:me,emits:fe,setup(i,{emit:n}){const s=i,c=L("steps"),m=E([]);return I(m,()=>{m.value.forEach((r,a)=>{r.setIndex(a)})}),te("ElSteps",{props:s,steps:m}),I(()=>s.active,(r,a)=>{n(G,r,a)}),(r,a)=>(o(),S("div",{class:l([e(c).b(),e(c).m(r.simple?"simple":r.direction)])},[_(r.$slots,"default")],2))}}));var he=M(ye,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/steps.vue"]]);const ge=F({title:{type:String,default:""},icon:{type:ae},description:{type:String,default:""},status:{type:String,default:"",values:["","wait","process","finish","error","success"]}}),ke={name:"ElStep"},we=H(B($({},ke),{props:ge,setup(i){const n=i,s=L("step"),c=E(-1),m=E({}),r=E(""),a=ne("ElSteps"),f=pe();ie(()=>{I([()=>a.props.active,()=>a.props.processStatus,()=>a.props.finishStatus],([t])=>{J(t)},{immediate:!0})}),re(()=>{a.steps.value=a.steps.value.filter(t=>t.uid!==(f==null?void 0:f.uid))});const v=p(()=>n.status||r.value),U=p(()=>{const t=a.steps.value[c.value-1];return t?t.currentStatus:"wait"}),b=p(()=>a.props.alignCenter),P=p(()=>a.props.direction==="vertical"),d=p(()=>a.props.simple),C=p(()=>a.steps.value.length),z=p(()=>{var t;return((t=a.steps.value[C.value-1])==null?void 0:t.uid)===(f==null?void 0:f.uid)}),y=p(()=>d.value?"":a.props.space),X=p(()=>{const t={flexBasis:typeof y.value=="number"?`${y.value}px`:y.value?y.value:`${100/(C.value-(b.value?0:1))}%`};return P.value||z.value&&(t.maxWidth=`${100/C.value}%`),t}),Y=t=>{c.value=t},q=t=>{let u=100;const h={};h.transitionDelay=`${150*c.value}ms`,t===a.props.processStatus?u=0:t==="wait"&&(u=0,h.transitionDelay=`${-150*c.value}ms`),h.borderWidth=u&&!d.value?"1px":0,h[a.props.direction==="vertical"?"height":"width"]=`${u}%`,m.value=h},J=t=>{t>c.value?r.value=a.props.finishStatus:t===c.value&&U.value!=="error"?r.value=a.props.processStatus:r.value="wait";const u=a.steps.value[C.value-1];u&&u.calcProgress(r.value)},K=le({uid:p(()=>f==null?void 0:f.uid),currentStatus:v,setIndex:Y,calcProgress:q});return a.steps.value=[...a.steps.value,K],(t,u)=>(o(),S("div",{style:T(e(X)),class:l([e(s).b(),e(s).is(e(d)?"simple":e(a).props.direction),e(s).is("flex",e(z)&&!e(y)&&!e(b)),e(s).is("center",e(b)&&!e(P)&&!e(d))])},[g(" icon & line "),k("div",{class:l([e(s).e("head"),e(s).is(e(v))])},[e(d)?g("v-if",!0):(o(),S("div",{key:0,class:l(e(s).e("line"))},[k("i",{class:l(e(s).e("line-inner")),style:T(m.value)},null,6)],2)),k("div",{class:l([e(s).e("icon"),e(s).is(t.icon?"icon":"text")])},[e(v)!=="success"&&e(v)!=="error"?_(t.$slots,"icon",{key:0},()=>[t.icon?(o(),w(e(A),{key:0,class:l(e(s).e("icon-inner"))},{default:x(()=>[(o(),w(oe(t.icon)))]),_:1},8,["class"])):g("v-if",!0),!t.icon&&!e(d)?(o(),S("div",{key:1,class:l(e(s).e("icon-inner"))},N(c.value+1),3)):g("v-if",!0)]):(o(),w(e(A),{key:1,class:l([e(s).e("icon-inner"),e(s).is("status")])},{default:x(()=>[e(v)==="success"?(o(),w(e(de),{key:0})):(o(),w(e(ce),{key:1}))]),_:1},8,["class"]))],2)],2),g(" title & description "),k("div",{class:l(e(s).e("main"))},[k("div",{class:l([e(s).e("title"),e(s).is(e(v))])},[_(t.$slots,"title",{},()=>[W(N(t.title),1)])],2),e(d)?(o(),S("div",{key:0,class:l(e(s).e("arrow"))},null,2)):(o(),S("div",{key:1,class:l([e(s).e("description"),e(s).is(e(v))])},[_(t.$slots,"description",{},()=>[W(N(t.description),1)])],2))],2)],6))}}));var O=M(we,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/item.vue"]]);const be=ue(he,{Step:O}),$e=ve(O);export{$e as E,be as a};