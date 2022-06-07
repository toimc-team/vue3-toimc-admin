import{e as $,_ as y,o as v,c as T,a as n,S as P,O as m,A as k,j as V,w as l,t as g,g as a,b as t,I as w,V as h,J as D,X as A,a1 as M,bP as O,r as S,W as Y}from"./index.3688f571.js";import{E as H}from"./el-col.675af692.js";import{E as B}from"./el-card.b796da35.js";import{d as p}from"./dayjs.min.f818e39c.js";/* empty css                        *//* empty css                       */import{E as I}from"./index2.2faa82fa.js";import{E as U}from"./index2.e30e9ce0.js";import{E as W}from"./index2.e00a66ae.js";import"./date-utils2.dee6c4aa.js";import"./index2.92a28728.js";import"./d-arrow-right.d704c097.js";const J=$({name:"CountDownWrapper",props:{fontSize:{type:[Number,String],default:18}},setup(){return{}}}),R={class:"wrapper"};function X(e,o,u,d,i,_){return v(),T("div",R,[n("div",{class:"content",style:m({"font-size":e.fontSize+"px"})},[P(e.$slots,"default",{},void 0,!0)],4)])}var j=y(J,[["render",X],["__scopeId","data-v-08c136c8"]]);const q=e=>p(e).format("YYYY-MM-DD"),N=e=>p(e).diff(p(),"day"),G=e=>{if(e<=0||e>31)return"\u65E0\u6548";const o=p().date(),u=p().month(),d=p().year();if(e>=o)return e-o;{const i=p().set("month",u+1).set("year",d).set("date",e);return N(i)}},K=(e,o)=>{const u=p(e).hour(),d=p(e).minute(),i=p(e).second();if(p().hour()<u){const r=p().set("hour",u).set("minute",d).set("second",i).valueOf()-p().valueOf();return p(r-8*60*60*1e3).format("HH:mm:ss")}else return o||"\u5230\u70B9\u5566"},L=$({props:{fontSize:{type:[String,Number],default:18},backgroundColor:{type:String,default:"#EEE1DA"},fontColor:{type:String,default:"#9e726f"},title:{type:String,required:!0},date:{type:[String,Date],required:!0}},setup(e){const o=k(()=>q(e.date)),u=k(()=>N(e.date));return{finalDate:o,diff:u}}}),Q={class:"w-full h-full flex flex-col justify-between items-start",style:{padding:"0.9em"}},Z={style:{"font-weight":"600"}},x=n("i",{style:{"font-size":"12px","font-style":"normal"}},"\u5929",-1);function ee(e,o,u,d,i,_){const f=j;return v(),V(f,{"font-size":e.fontSize},{default:l(()=>[n("div",{class:"w-full h-full",style:m({backgroundColor:e.backgroundColor})},[n("div",Q,[n("div",{class:"truncate",style:m([{"font-size":"0.6em"},{color:e.fontColor}])},g(e.title),5),n("p",{class:"inline-block",style:m([{"font-size":"2em"},{color:e.fontColor}])},[n("span",Z,g(e.diff),1),x],4),n("p",{class:"mt5",style:m([{"font-size":"0.6em"},{color:e.fontColor}])},g(e.finalDate),5)])],4)]),_:1},8,["font-size"])}var oe=y(L,[["render",ee]]);const te=$({setup(){const e=a(20),o=a("#EEE1DA"),u=a("#9e726f"),d=a("\u6E05\u660E\u8282"),i=a("2022-05-28");return{fontSize:e,backgroundColor:o,fontColor:u,title:d,date:i}}}),ne={class:"flex w-full h-full"},le={class:"form"},ue={class:"flex-1 flex justify-center items-center"},re={class:"box"};function se(e,o,u,d,i,_){const f=w,r=h,C=I,b=U,F=D,E=A,z=oe,c=B;return v(),V(c,{class:"mb-4"},{default:l(()=>[n("div",ne,[n("div",le,[t(E,{"label-width":"120px"},{default:l(()=>[t(r,{label:"\u4E8B\u4EF6\u540D\u79F0\uFF1A"},{default:l(()=>[t(f,{modelValue:e.title,"onUpdate:modelValue":o[0]||(o[0]=s=>e.title=s)},null,8,["modelValue"])]),_:1}),t(r,{label:"\u4E8B\u4EF6\u65F6\u95F4\uFF1A"},{default:l(()=>[t(C,{modelValue:e.date,"onUpdate:modelValue":o[1]||(o[1]=s=>e.date=s),type:"date",placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u65E5\u671F"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5B57\u4F53\u5927\u5C0F\uFF1A"},{default:l(()=>[t(b,{modelValue:e.fontSize,"onUpdate:modelValue":o[2]||(o[2]=s=>e.fontSize=s),min:1},null,8,["modelValue"])]),_:1}),t(r,{label:"\u80CC\u666F\u989C\u8272\uFF1A"},{default:l(()=>[t(F,{modelValue:e.backgroundColor,"onUpdate:modelValue":o[3]||(o[3]=s=>e.backgroundColor=s)},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5B57\u4F53\u989C\u8272\uFF1A"},{default:l(()=>[t(F,{modelValue:e.fontColor,"onUpdate:modelValue":o[4]||(o[4]=s=>e.fontColor=s)},null,8,["modelValue"])]),_:1})]),_:1})]),n("div",ue,[n("div",re,[t(z,{"font-size":e.fontSize,"background-color":e.backgroundColor,"font-color":e.fontColor,title:e.title,date:e.date},null,8,["font-size","background-color","font-color","title","date"])])])])]),_:1})}var ae=y(te,[["render",se],["__scopeId","data-v-39d4667a"]]);const de=$({props:{fontSize:{type:[String,Number],default:18},title:{type:String,required:!0},backgroundColor:{type:String,default:"#0092FA"},fontColor:{type:String,default:"#FFF"},date:{type:Number,required:!0}},setup(e){return{diff:k(()=>G(e.date))}}}),ie={class:"w-full h-full"},fe={class:"h-full relative"};function ce(e,o,u,d,i,_){const f=j;return v(),V(f,{"font-size":e.fontSize},{default:l(()=>[n("div",ie,[n("div",fe,[n("h2",{class:"truncate flex flex-wrap justify-center items-center",style:m([{height:"30%","font-size":"0.7em"},{backgroundColor:e.backgroundColor,color:e.fontColor}])},g(e.title),5),n("div",{class:"flex flex-wrap items-center justify-center",style:m([{height:"70%","font-size":"3em","font-weight":"700"},{color:e.backgroundColor,backgroundColor:e.fontColor}])},g(e.diff),5)])])]),_:1},8,["font-size"])}var pe=y(de,[["render",ce]]);const me=$({setup(){const e=a(20),o=a("#0092fa"),u=a("#FFF"),d=a("\u53D1\u5DE5\u8D44\u8FD8\u6709"),i=a(1);return{fontSize:e,backgroundColor:o,fontColor:u,title:d,date:i}}}),_e={class:"flex w-full h-full"},Fe={class:"form"},Ce={class:"flex-1 flex justify-center items-center"},be={class:"box"};function ge(e,o,u,d,i,_){const f=w,r=h,C=U,b=D,F=A,E=pe,z=B;return v(),V(z,{class:"mb-4"},{default:l(()=>[n("div",_e,[n("div",Fe,[t(F,{"label-width":"120px"},{default:l(()=>[t(r,{label:"\u4E8B\u4EF6\u540D\u79F0\uFF1A"},{default:l(()=>[t(f,{modelValue:e.title,"onUpdate:modelValue":o[0]||(o[0]=c=>e.title=c)},null,8,["modelValue"])]),_:1}),t(r,{label:"\u6BCF\u6708\u51E0\u53F7\uFF1A"},{default:l(()=>[t(C,{modelValue:e.date,"onUpdate:modelValue":o[1]||(o[1]=c=>e.date=c),min:1},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5B57\u4F53\u5927\u5C0F\uFF1A"},{default:l(()=>[t(C,{modelValue:e.fontSize,"onUpdate:modelValue":o[2]||(o[2]=c=>e.fontSize=c),min:1},null,8,["modelValue"])]),_:1}),t(r,{label:"\u80CC\u666F\u989C\u8272\uFF1A"},{default:l(()=>[t(b,{modelValue:e.backgroundColor,"onUpdate:modelValue":o[3]||(o[3]=c=>e.backgroundColor=c)},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5B57\u4F53\u989C\u8272\uFF1A"},{default:l(()=>[t(b,{modelValue:e.fontColor,"onUpdate:modelValue":o[4]||(o[4]=c=>e.fontColor=c)},null,8,["modelValue"])]),_:1})]),_:1})]),n("div",Ce,[n("div",be,[t(E,{"font-size":e.fontSize,"background-color":e.backgroundColor,"font-color":e.fontColor,title:e.title,date:e.date},null,8,["font-size","background-color","font-color","title","date"])])])])]),_:1})}var $e=y(me,[["render",ge],["__scopeId","data-v-9df8eb0e"]]);const ye=$({props:{fontSize:{type:[String,Number],default:18},backgroundColor:{type:String,default:"#FFF"},fontColor:{type:String,default:"#9e726f"},title:{type:String,default:"\u548C\u5979\u2764\uFE0F\u604B\u7231\u5DF2\u7ECF",required:!0},date:{type:[String,Date,Number],required:!0}},setup(e){const o=k(()=>q(e.date)),u=k(()=>-N(e.date));return{finalDate:o,diff:u}}}),ve={class:"w-full h-full"},Ee={class:"flex flex-col justify-between items-center h-full w-full",style:{padding:"0.9em"}},Ve={style:{"font-weight":"700"}},ze=n("i",{style:{"font-size":"12px","font-style":"normal"}}," \u5929 ",-1);function ke(e,o,u,d,i,_){const f=j;return v(),V(f,{"font-size":e.fontSize},{default:l(()=>[n("div",{class:"w-full h-full relative text-center",style:m({backgroundColor:e.backgroundColor})},[n("div",ve,[n("div",Ee,[n("div",{class:"truncate",style:m([{"font-size":"0.6em"},{color:e.fontColor}])},g(e.title),5),n("p",{class:"inline",style:m([{"font-size":"1.7em"},{color:e.fontColor}])},[n("span",Ve,g(e.diff),1),ze],4),n("p",{class:"mt-1",style:m([{"font-size":"0.6em"},{color:e.fontColor}])},g(e.finalDate),5)])])],4)]),_:1},8,["font-size"])}var Se=y(ye,[["render",ke]]);const we=$({setup(){const e=a(20),o=a("#FFF"),u=a("#EA8197"),d=a("\u548C\u5979\u2764\uFE0F\u604B\u7231\u5DF2\u7ECF"),i=a("2022-02-28");return{fontSize:e,backgroundColor:o,fontColor:u,title:d,date:i}}}),he={class:"flex w-full h-full"},De={class:"form"},Ae={class:"flex-1 flex justify-center items-center"},Be={class:"box"};function Ue(e,o,u,d,i,_){const f=w,r=h,C=I,b=U,F=D,E=A,z=Se,c=B;return v(),V(c,{class:"mb-4"},{default:l(()=>[n("div",he,[n("div",De,[t(E,{"label-width":"120px"},{default:l(()=>[t(r,{label:"\u4E8B\u4EF6\u540D\u79F0\uFF1A"},{default:l(()=>[t(f,{modelValue:e.title,"onUpdate:modelValue":o[0]||(o[0]=s=>e.title=s)},null,8,["modelValue"])]),_:1}),t(r,{label:"\u4E8B\u4EF6\u65E5\u671F\uFF1A"},{default:l(()=>[t(C,{modelValue:e.date,"onUpdate:modelValue":o[1]||(o[1]=s=>e.date=s),type:"date",placeholder:"\u8BF7\u9009\u62E9\u4E00\u4E2A\u65E5\u671F"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5B57\u4F53\u5927\u5C0F\uFF1A"},{default:l(()=>[t(b,{modelValue:e.fontSize,"onUpdate:modelValue":o[2]||(o[2]=s=>e.fontSize=s),min:1},null,8,["modelValue"])]),_:1}),t(r,{label:"\u80CC\u666F\u989C\u8272\uFF1A"},{default:l(()=>[t(F,{modelValue:e.backgroundColor,"onUpdate:modelValue":o[3]||(o[3]=s=>e.backgroundColor=s)},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5B57\u4F53\u989C\u8272\uFF1A"},{default:l(()=>[t(F,{modelValue:e.fontColor,"onUpdate:modelValue":o[4]||(o[4]=s=>e.fontColor=s)},null,8,["modelValue"])]),_:1})]),_:1})]),n("div",Ae,[n("div",Be,[t(z,{"font-size":e.fontSize,"background-color":e.backgroundColor,"font-color":e.fontColor,title:e.title,date:e.date},null,8,["font-size","background-color","font-color","title","date"])])])])]),_:1})}var je=y(we,[["render",Ue],["__scopeId","data-v-77b68e05"]]);const Ne=$({name:"CountDownBase",props:{fontSize:{type:[String,Number],default:18},backgroundColor:{type:String,default:"#64A099"},fontColor:{type:String,default:"#FFF"},title:{type:String,required:!0},endText:{type:String,default:""},date:{type:[String,Date],required:!0}},setup(e){const o=a("");let u;function d(){o.value=K(e.date,e.endText),clearTimeout(u),u=setTimeout(()=>{d()},1e3)}return M(()=>{d()}),O(()=>{clearTimeout(u)}),{result:o}}});function Te(e,o,u,d,i,_){const f=j;return v(),V(f,{"font-size":e.fontSize},{default:l(()=>[n("div",{class:"h-full",style:m({backgroundColor:e.backgroundColor})},[n("h2",{class:"truncate flex flex-wrap justify-center items-center",style:m([{height:"40%","font-size":"0.8em"},{color:e.fontColor}])},g(e.title),5),n("div",{class:"flex justify-center",style:m([{height:"40%","font-size":"1.6em","font-weight":"700"},{color:e.fontColor}])},g(e.result),5)],4)]),_:1},8,["font-size"])}var Ie=y(Ne,[["render",Te]]);const qe=$({setup(){const e=a(20),o=a("#64A099"),u=a("#FFF"),d=a("\u8DDD\u79BB\u4E0B\u73ED\u8FD8\u6709"),i=a("\u4E0B\u73ED\u5566"),_=a(new Date(2e3,1,1,10,0));return{fontSize:e,backgroundColor:o,fontColor:u,title:d,date:_,endText:i}}}),Pe={class:"flex w-full h-full"},Me={class:"form"},Oe={class:"flex-1 flex justify-center items-center"},Ye={class:"box"};function He(e,o,u,d,i,_){const f=w,r=h,C=W,b=U,F=D,E=A,z=Ie,c=B;return v(),V(c,{class:"mb-4"},{default:l(()=>[n("div",Pe,[n("div",Me,[t(E,{"label-width":"120px"},{default:l(()=>[t(r,{label:"\u4E8B\u4EF6\u540D\u79F0\uFF1A"},{default:l(()=>[t(f,{modelValue:e.title,"onUpdate:modelValue":o[0]||(o[0]=s=>e.title=s)},null,8,["modelValue"])]),_:1}),t(r,{label:"\u4E8B\u4EF6\u65F6\u95F4\uFF1A"},{default:l(()=>[t(C,{modelValue:e.date,"onUpdate:modelValue":o[1]||(o[1]=s=>e.date=s),placeholder:"Arbitrary time"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u7ED3\u675F\u63D0\u9192\uFF1A"},{default:l(()=>[t(f,{modelValue:e.endText,"onUpdate:modelValue":o[2]||(o[2]=s=>e.endText=s)},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5B57\u4F53\u5927\u5C0F\uFF1A"},{default:l(()=>[t(b,{modelValue:e.fontSize,"onUpdate:modelValue":o[3]||(o[3]=s=>e.fontSize=s),min:1},null,8,["modelValue"])]),_:1}),t(r,{label:"\u80CC\u666F\u989C\u8272\uFF1A"},{default:l(()=>[t(F,{modelValue:e.backgroundColor,"onUpdate:modelValue":o[4]||(o[4]=s=>e.backgroundColor=s)},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5B57\u4F53\u989C\u8272\uFF1A"},{default:l(()=>[t(F,{modelValue:e.fontColor,"onUpdate:modelValue":o[5]||(o[5]=s=>e.fontColor=s)},null,8,["modelValue"])]),_:1})]),_:1})]),n("div",Oe,[n("div",Ye,[t(z,{"font-size":e.fontSize,"background-color":e.backgroundColor,"font-color":e.fontColor,title:e.title,date:e.date,"end-text":e.endText},null,8,["font-size","background-color","font-color","title","date","end-text"])])])])]),_:1})}var We=y(qe,[["render",He],["__scopeId","data-v-02e47bb6"]]);const Je=$({name:"CountDownPage",components:{ExampleOnce:ae,ExampleMouth:$e,ExampleCount:je,ExampleHour:We},setup(){const e=a(20),o=a("#EEE1DA"),u=a("#9e726f"),d=a("\u6E05\u660E\u8282"),i=a("2022-05-28");return{fontSize:e,backgroundColor:o,fontColor:u,title:d,date:i}}}),Re={class:"p-4"};function Xe(e,o,u,d,i,_){const f=S("example-once"),r=H,C=S("example-mouth"),b=S("example-count"),F=S("example-hour"),E=Y;return v(),T("div",Re,[t(E,{gutter:20},{default:l(()=>[t(r,{span:12},{default:l(()=>[t(f)]),_:1}),t(r,{span:12},{default:l(()=>[t(C)]),_:1}),t(r,{span:12},{default:l(()=>[t(b)]),_:1}),t(r,{span:12},{default:l(()=>[t(F)]),_:1})]),_:1})])}var ro=y(Je,[["render",Xe],["__scopeId","data-v-81fedab2"]]);export{ro as default};