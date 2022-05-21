var x=Object.defineProperty,_=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var K=(e,a,o)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,y=(e,a)=>{for(var o in a||(a={}))ae.call(a,o)&&K(e,o,a[o]);if(D)for(var o of D(a))oe.call(a,o)&&K(e,o,a[o]);return e},V=(e,a)=>_(e,ee(a));import{Z as c,bF as T,aB as S,ae as P,bA as A,bG as F,g as B,ak as se,B as p,aT as le,bm as ne,e as h,A as k,C as w,aG as L,o as R,c as E,a as m,D as t,a6 as U,bH as M,T as G,k as O,t as q,a8 as I,b0 as j,P as de,bD as re,b5 as ie,a2 as te,aD as ue,h as be,b2 as pe,O as me,aU as fe,a5 as $,am as ve,b8 as H}from"./index.3fe8d540.js";const W=Symbol("radioGroupKey"),Z=c({size:T,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),ge=c(V(y({},Z),{modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean})),J={[S]:e=>P(e)||A(e)||F(e),change:e=>P(e)||A(e)||F(e)},Q=(e,a)=>{const o=B(),s=se(W,void 0),r=p(()=>!!s),i=p({get(){return r.value?s.modelValue:e.modelValue},set(d){r.value?s.changeEvent(d):a(S,d),o.value.checked=e.modelValue===e.label}}),l=le(p(()=>s==null?void 0:s.size)),u=ne(p(()=>s==null?void 0:s.disabled)),b=B(!1),n=p(()=>u.value||r.value&&i.value!==e.label?-1:0);return{radioRef:o,isGroup:r,radioGroup:s,focus:b,size:l,disabled:u,tabIndex:n,modelValue:i}},ye=h({name:"ElRadio",props:ge,emits:J,setup(e,{emit:a}){const o=k("radio"),{radioRef:s,isGroup:r,focus:i,size:l,disabled:u,tabIndex:b,modelValue:n}=Q(e,a);function d(){L(()=>a("change",n.value))}return{ns:o,focus:i,isGroup:r,modelValue:n,tabIndex:b,size:l,disabled:u,radioRef:s,handleChange:d}}}),Ve=["value","name","disabled"];function $e(e,a,o,s,r,i){return R(),E("label",{class:t([e.ns.b(),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.is("bordered",e.border),e.ns.is("checked",e.modelValue===e.label),e.ns.m(e.size)]),onKeydown:a[5]||(a[5]=j(I(l=>e.modelValue=e.disabled?e.modelValue:e.label,["stop","prevent"]),["space"]))},[m("span",{class:t([e.ns.e("input"),e.ns.is("disabled",e.disabled),e.ns.is("checked",e.modelValue===e.label)])},[m("span",{class:t(e.ns.e("inner"))},null,2),U(m("input",{ref:"radioRef","onUpdate:modelValue":a[0]||(a[0]=l=>e.modelValue=l),class:t(e.ns.e("original")),value:e.label,type:"radio",name:e.name,disabled:e.disabled,tabindex:"tabIndex",onFocus:a[1]||(a[1]=l=>e.focus=!0),onBlur:a[2]||(a[2]=l=>e.focus=!1),onChange:a[3]||(a[3]=(...l)=>e.handleChange&&e.handleChange(...l))},null,42,Ve),[[M,e.modelValue]])],2),m("span",{class:t(e.ns.e("label")),onKeydown:a[4]||(a[4]=I(()=>{},["stop"]))},[G(e.$slots,"default",{},()=>[O(q(e.label),1)])],34)],34)}var Ie=w(ye,[["render",$e],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const ce=c(V(y({},Z),{name:{type:String,default:""}})),Be=h({name:"ElRadioButton",props:ce,setup(e,{emit:a}){const o=k("radio"),{radioRef:s,isGroup:r,focus:i,size:l,disabled:u,tabIndex:b,modelValue:n,radioGroup:d}=Q(e,a),f=p(()=>({backgroundColor:(d==null?void 0:d.fill)||"",borderColor:(d==null?void 0:d.fill)||"",boxShadow:d!=null&&d.fill?`-1px 0 0 0 ${d.fill}`:"",color:(d==null?void 0:d.textColor)||""}));return{ns:o,isGroup:r,size:l,disabled:u,tabIndex:b,modelValue:n,focus:i,activeStyle:f,radioRef:s}}}),Se=["aria-checked","aria-disabled","tabindex"],he=["value","name","disabled"];function ke(e,a,o,s,r,i){return R(),E("label",{class:t([e.ns.b("button"),e.ns.is("active",e.modelValue===e.label),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.bm("button",e.size)]),role:"radio","aria-checked":e.modelValue===e.label,"aria-disabled":e.disabled,tabindex:e.tabIndex,onKeydown:a[4]||(a[4]=j(I(l=>e.modelValue=e.disabled?e.modelValue:e.label,["stop","prevent"]),["space"]))},[U(m("input",{ref:"radioRef","onUpdate:modelValue":a[0]||(a[0]=l=>e.modelValue=l),class:t(e.ns.be("button","original-radio")),value:e.label,type:"radio",name:e.name,disabled:e.disabled,tabindex:"-1",onFocus:a[1]||(a[1]=l=>e.focus=!0),onBlur:a[2]||(a[2]=l=>e.focus=!1)},null,42,he),[[M,e.modelValue]]),m("span",{class:t(e.ns.be("button","inner")),style:de(e.modelValue===e.label?e.activeStyle:{}),onKeydown:a[3]||(a[3]=I(()=>{},["stop"]))},[G(e.$slots,"default",{},()=>[O(q(e.label),1)])],38)],42,Se)}var X=w(Be,[["render",ke],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const we=c({id:{type:String,default:void 0},size:T,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""}}),Re=J,Ee=h({name:"ElRadioGroup",props:we,emits:Re,setup(e,a){const o=k("radio"),s=B(),{formItem:r}=re(),{inputId:i,isLabeledByFormItem:l}=ie(e,{formItemContext:r}),u=n=>{a.emit(S,n),L(()=>a.emit("change",n))},b=n=>{if(!s.value)return;const d=n.target,f=d.nodeName==="INPUT"?"[type=radio]":"[role=radio]",C=s.value.querySelectorAll(f),N=C.length,g=Array.from(C).indexOf(d),z=s.value.querySelectorAll("[role=radio]");let v=null;switch(n.code){case $.left:case $.up:n.stopPropagation(),n.preventDefault(),v=g===0?N-1:g-1;break;case $.right:case $.down:n.stopPropagation(),n.preventDefault(),v=g===N-1?0:g+1;break}v!==null&&(z[v].click(),z[v].focus())};return te(()=>{const n=s.value.querySelectorAll("[type=radio]"),d=n[0];!Array.from(n).some(f=>f.checked)&&d&&(d.tabIndex=0)}),ue(W,be(V(y({},pe(e)),{changeEvent:u}))),me(()=>e.modelValue,()=>r==null?void 0:r.validate("change").catch(n=>fe())),{ns:o,radioGroupRef:s,formItem:r,groupId:i,isLabeledByFormItem:l,handleKeydown:b}}}),Ge=["id","aria-label","aria-labelledby"];function Ce(e,a,o,s,r,i){return R(),E("div",{id:e.groupId,ref:"radioGroupRef",class:t(e.ns.b("group")),role:"radiogroup","aria-label":e.isLabeledByFormItem?void 0:e.label||"radio-group","aria-labelledby":e.isLabeledByFormItem?e.formItem.labelId:void 0,onKeydown:a[0]||(a[0]=(...l)=>e.handleKeydown&&e.handleKeydown(...l))},[G(e.$slots,"default")],42,Ge)}var Y=w(Ee,[["render",Ce],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const De=ve(Ie,{RadioButton:X,RadioGroup:Y}),Ke=H(Y),Pe=H(X);export{De as E,Pe as a,Ke as b};