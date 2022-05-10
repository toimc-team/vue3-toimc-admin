var x=Object.defineProperty,_=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var P=(e,a,o)=>a in e?x(e,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[a]=o,y=(e,a)=>{for(var o in a||(a={}))ae.call(a,o)&&P(e,o,a[o]);if(K)for(var o of K(a))oe.call(a,o)&&P(e,o,a[o]);return e},V=(e,a)=>_(e,ee(a));import{Y as c,br as A,aj as h,bs as D,bm as F,bt as T,f as S,a0 as se,x as b,aE as le,b8 as ne,e as R,v as w,y as B,ap as L,o as E,c as k,a as m,z as t,aN as M,bu as O,J as G,h as U,t as q,a7 as I,aO as j,R as de,bp as re,aT as ie,an as te,al as ue,X as pe,D as be,G as me,aF as fe,as as $,a2 as ve,aW as W}from"./index.53af384c.js";const J=Symbol("radioGroupKey"),X=c({size:A,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),ge=c(V(y({},X),{modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean})),Y={[h]:e=>D(e)||F(e)||T(e),change:e=>D(e)||F(e)||T(e)},H=(e,a)=>{const o=S(),s=se(J,void 0),r=b(()=>!!s),i=b({get(){return r.value?s.modelValue:e.modelValue},set(d){r.value?s.changeEvent(d):a(h,d),o.value.checked=e.modelValue===e.label}}),l=le(b(()=>s==null?void 0:s.size)),u=ne(b(()=>s==null?void 0:s.disabled)),p=S(!1),n=b(()=>u.value||r.value&&i.value!==e.label?-1:0);return{radioRef:o,isGroup:r,radioGroup:s,focus:p,size:l,disabled:u,tabIndex:n,modelValue:i}},ye=R({name:"ElRadio",props:ge,emits:Y,setup(e,{emit:a}){const o=w("radio"),{radioRef:s,isGroup:r,focus:i,size:l,disabled:u,tabIndex:p,modelValue:n}=H(e,a);function d(){L(()=>a("change",n.value))}return{ns:o,focus:i,isGroup:r,modelValue:n,tabIndex:p,size:l,disabled:u,radioRef:s,handleChange:d}}}),Ve=["value","name","disabled"];function $e(e,a,o,s,r,i){return E(),k("label",{class:t([e.ns.b(),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.is("bordered",e.border),e.ns.is("checked",e.modelValue===e.label),e.ns.m(e.size)]),onKeydown:a[5]||(a[5]=j(I(l=>e.modelValue=e.disabled?e.modelValue:e.label,["stop","prevent"]),["space"]))},[m("span",{class:t([e.ns.e("input"),e.ns.is("disabled",e.disabled),e.ns.is("checked",e.modelValue===e.label)])},[m("span",{class:t(e.ns.e("inner"))},null,2),M(m("input",{ref:"radioRef","onUpdate:modelValue":a[0]||(a[0]=l=>e.modelValue=l),class:t(e.ns.e("original")),value:e.label,type:"radio",name:e.name,disabled:e.disabled,tabindex:"tabIndex",onFocus:a[1]||(a[1]=l=>e.focus=!0),onBlur:a[2]||(a[2]=l=>e.focus=!1),onChange:a[3]||(a[3]=(...l)=>e.handleChange&&e.handleChange(...l))},null,42,Ve),[[O,e.modelValue]])],2),m("span",{class:t(e.ns.e("label")),onKeydown:a[4]||(a[4]=I(()=>{},["stop"]))},[G(e.$slots,"default",{},()=>[U(q(e.label),1)])],34)],34)}var Ie=B(ye,[["render",$e],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const ce=c(V(y({},X),{name:{type:String,default:""}})),Se=R({name:"ElRadioButton",props:ce,setup(e,{emit:a}){const o=w("radio"),{radioRef:s,isGroup:r,focus:i,size:l,disabled:u,tabIndex:p,modelValue:n,radioGroup:d}=H(e,a),f=b(()=>({backgroundColor:(d==null?void 0:d.fill)||"",borderColor:(d==null?void 0:d.fill)||"",boxShadow:d!=null&&d.fill?`-1px 0 0 0 ${d.fill}`:"",color:(d==null?void 0:d.textColor)||""}));return{ns:o,isGroup:r,size:l,disabled:u,tabIndex:p,modelValue:n,focus:i,activeStyle:f,radioRef:s}}}),he=["aria-checked","aria-disabled","tabindex"],Re=["value","name","disabled"];function we(e,a,o,s,r,i){return E(),k("label",{class:t([e.ns.b("button"),e.ns.is("active",e.modelValue===e.label),e.ns.is("disabled",e.disabled),e.ns.is("focus",e.focus),e.ns.bm("button",e.size)]),role:"radio","aria-checked":e.modelValue===e.label,"aria-disabled":e.disabled,tabindex:e.tabIndex,onKeydown:a[4]||(a[4]=j(I(l=>e.modelValue=e.disabled?e.modelValue:e.label,["stop","prevent"]),["space"]))},[M(m("input",{ref:"radioRef","onUpdate:modelValue":a[0]||(a[0]=l=>e.modelValue=l),class:t(e.ns.be("button","original-radio")),value:e.label,type:"radio",name:e.name,disabled:e.disabled,tabindex:"-1",onFocus:a[1]||(a[1]=l=>e.focus=!0),onBlur:a[2]||(a[2]=l=>e.focus=!1)},null,42,Re),[[O,e.modelValue]]),m("span",{class:t(e.ns.be("button","inner")),style:de(e.modelValue===e.label?e.activeStyle:{}),onKeydown:a[3]||(a[3]=I(()=>{},["stop"]))},[G(e.$slots,"default",{},()=>[U(q(e.label),1)])],38)],42,he)}var Q=B(Se,[["render",we],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const Be=c({id:{type:String,default:void 0},size:A,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""}}),Ee=Y,ke=R({name:"ElRadioGroup",props:Be,emits:Ee,setup(e,a){const o=w("radio"),s=S(),{formItem:r}=re(),{inputId:i,isLabeledByFormItem:l}=ie(e,{formItemContext:r}),u=n=>{a.emit(h,n),L(()=>a.emit("change",n))},p=n=>{if(!s.value)return;const d=n.target,f=d.nodeName==="INPUT"?"[type=radio]":"[role=radio]",N=s.value.querySelectorAll(f),z=N.length,g=Array.from(N).indexOf(d),C=s.value.querySelectorAll("[role=radio]");let v=null;switch(n.code){case $.left:case $.up:n.stopPropagation(),n.preventDefault(),v=g===0?z-1:g-1;break;case $.right:case $.down:n.stopPropagation(),n.preventDefault(),v=g===z-1?0:g+1;break}v!==null&&(C[v].click(),C[v].focus())};return te(()=>{const n=s.value.querySelectorAll("[type=radio]"),d=n[0];!Array.from(n).some(f=>f.checked)&&d&&(d.tabIndex=0)}),ue(J,pe(V(y({},be(e)),{changeEvent:u}))),me(()=>e.modelValue,()=>r==null?void 0:r.validate("change").catch(n=>fe())),{ns:o,radioGroupRef:s,formItem:r,groupId:i,isLabeledByFormItem:l,handleKeydown:p}}}),Ge=["id","aria-label","aria-labelledby"];function Ne(e,a,o,s,r,i){return E(),k("div",{id:e.groupId,ref:"radioGroupRef",class:t(e.ns.b("group")),role:"radiogroup","aria-label":e.isLabeledByFormItem?void 0:e.label||"radio-group","aria-labelledby":e.isLabeledByFormItem?e.formItem.labelId:void 0,onKeydown:a[0]||(a[0]=(...l)=>e.handleKeydown&&e.handleKeydown(...l))},[G(e.$slots,"default")],42,Ge)}var Z=B(ke,[["render",Ne],["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const Ke=ve(Ie,{RadioButton:Q,RadioGroup:Z}),Pe=W(Z),De=W(Q);export{Ke as E,De as a,Pe as b};
