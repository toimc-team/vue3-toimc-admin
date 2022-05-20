var Ie=Object.defineProperty,Le=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var ze=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var ue=(r,i,s)=>i in r?Ie(r,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[i]=s,M=(r,i)=>{for(var s in i||(i={}))ze.call(i,s)&&ue(r,s,i[s]);if(ce)for(var s of ce(i))Ee.call(i,s)&&ue(r,s,i[s]);return r},q=(r,i)=>Le(r,Ce(i));import{aa as F,Z as fe,$ as ne,aj as ve,e as me,cu as de,cv as Oe,cw as Se,ar as pe,A as ge,ac as xe,g as v,cx as Te,B as y,bA as we,O as le,aG as ye,a2 as he,o as h,j as oe,b as c,w,a as m,D as u,bb as t,a8 as _e,G as S,v as O,be as Ne,c as _,b4 as Ae,ap as $e,I as re,cy as Be,bf as De,F as Ve,cz as Me,cA as Fe,H as Re,a6 as Ye,a7 as Pe,P as ie,T as K,a9 as He,c9 as Xe,C as be,cB as se,a5 as $,a3 as B,am as ke,cC as je,cD as Ge,t as We,Q as Ze,ad as qe,ae as Ke,cE as Qe,cF as Je,cG as Ue}from"./index.cb5efe47.js";const et=()=>F&&/firefox/i.test(window.navigator.userAgent),tt=fe({urlList:{type:ne(Array),default:()=>ve([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),at={close:()=>!0,switch:r=>typeof r=="number"},st=["src"],nt={name:"ElImageViewer"},lt=me(q(M({},nt),{props:tt,emits:at,setup(r,{emit:i}){const s=r,C={CONTAIN:{name:"contain",icon:de(Oe)},ORIGINAL:{name:"original",icon:de(Se)}},Q=et()?"DOMMouseScroll":"mousewheel",{t:x}=pe(),o=ge("image-viewer"),{nextZIndex:J}=xe(),b=v(),z=v([]),R=Te(),E=v(!0),d=v(s.initialIndex),k=v(C.CONTAIN),l=v({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),Y=y(()=>{const{urlList:e}=s;return e.length<=1}),N=y(()=>d.value===0),P=y(()=>d.value===s.urlList.length-1),U=y(()=>s.urlList[d.value]),D=y(()=>{const{scale:e,deg:a,offsetX:n,offsetY:f,enableTransition:I}=l.value;let p=n/e,L=f/e;switch(a%360){case 90:case-270:[p,L]=[L,-p];break;case 180:case-180:[p,L]=[-p,-L];break;case 270:case-90:[p,L]=[-L,p];break}const A={transform:`scale(${e}) rotate(${a}deg) translate(${p}px, ${L}px)`,transition:I?"transform .3s":""};return k.value.name===C.CONTAIN.name&&(A.maxWidth=A.maxHeight="100%"),A}),ee=y(()=>we(s.zIndex)?s.zIndex:J());function T(){ae(),i("close")}function te(){const e=se(n=>{switch(n.code){case $.esc:s.closeOnPressEscape&&T();break;case $.space:G();break;case $.left:W();break;case $.up:g("zoomIn");break;case $.right:Z();break;case $.down:g("zoomOut");break}}),a=se(n=>{(n.wheelDelta?n.wheelDelta:-n.detail)>0?g("zoomIn",{zoomRate:1.2,enableTransition:!1}):g("zoomOut",{zoomRate:1.2,enableTransition:!1})});R.run(()=>{B(document,"keydown",e),B(document,Q,a)})}function ae(){R.stop()}function H(){E.value=!1}function X(e){E.value=!1,e.target.alt=x("el.image.error")}function j(e){if(E.value||e.button!==0||!b.value)return;l.value.enableTransition=!1;const{offsetX:a,offsetY:n}=l.value,f=e.pageX,I=e.pageY,p=se(A=>{l.value=q(M({},l.value),{offsetX:a+A.pageX-f,offsetY:n+A.pageY-I})}),L=B(document,"mousemove",p);B(document,"mouseup",()=>{L()}),e.preventDefault()}function V(){l.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function G(){if(E.value)return;const e=Object.keys(C),a=Object.values(C),n=k.value.name,I=(a.findIndex(p=>p.name===n)+1)%e.length;k.value=C[e[I]],V()}function W(){if(N.value&&!s.infinite)return;const e=s.urlList.length;d.value=(d.value-1+e)%e}function Z(){if(P.value&&!s.infinite)return;const e=s.urlList.length;d.value=(d.value+1)%e}function g(e,a={}){if(E.value)return;const{zoomRate:n,rotateDeg:f,enableTransition:I}=M({zoomRate:1.4,rotateDeg:90,enableTransition:!0},a);switch(e){case"zoomOut":l.value.scale>.2&&(l.value.scale=Number.parseFloat((l.value.scale/n).toFixed(3)));break;case"zoomIn":l.value.scale<7&&(l.value.scale=Number.parseFloat((l.value.scale*n).toFixed(3)));break;case"clockwise":l.value.deg+=f;break;case"anticlockwise":l.value.deg-=f;break}l.value.enableTransition=I}return le(U,()=>{ye(()=>{const e=z.value[0];e!=null&&e.complete||(E.value=!0)})}),le(d,e=>{V(),i("switch",e)}),he(()=>{var e,a;te(),(a=(e=b.value)==null?void 0:e.focus)==null||a.call(e)}),(e,a)=>(h(),oe(Xe,{to:"body",disabled:!e.teleported},[c(He,{name:"viewer-fade",appear:""},{default:w(()=>[m("div",{ref_key:"wrapper",ref:b,tabindex:-1,class:u(t(o).e("wrapper")),style:ie({zIndex:t(ee)})},[m("div",{class:u(t(o).e("mask")),onClick:a[0]||(a[0]=_e(n=>e.hideOnClickModal&&T(),["self"]))},null,2),S(" CLOSE "),m("span",{class:u([t(o).e("btn"),t(o).e("close")]),onClick:T},[c(t(O),null,{default:w(()=>[c(t(Ne))]),_:1})],2),S(" ARROW "),t(Y)?S("v-if",!0):(h(),_(re,{key:0},[m("span",{class:u([t(o).e("btn"),t(o).e("prev"),t(o).is("disabled",!e.infinite&&t(N))]),onClick:W},[c(t(O),null,{default:w(()=>[c(t(Ae))]),_:1})],2),m("span",{class:u([t(o).e("btn"),t(o).e("next"),t(o).is("disabled",!e.infinite&&t(P))]),onClick:Z},[c(t(O),null,{default:w(()=>[c(t($e))]),_:1})],2)],64)),S(" ACTIONS "),m("div",{class:u([t(o).e("btn"),t(o).e("actions")])},[m("div",{class:u(t(o).e("actions__inner"))},[c(t(O),{onClick:a[1]||(a[1]=n=>g("zoomOut"))},{default:w(()=>[c(t(Be))]),_:1}),c(t(O),{onClick:a[2]||(a[2]=n=>g("zoomIn"))},{default:w(()=>[c(t(De))]),_:1}),m("i",{class:u(t(o).e("actions__divider"))},null,2),c(t(O),{onClick:G},{default:w(()=>[(h(),oe(Ve(k.value.icon)))]),_:1}),m("i",{class:u(t(o).e("actions__divider"))},null,2),c(t(O),{onClick:a[3]||(a[3]=n=>g("anticlockwise"))},{default:w(()=>[c(t(Me))]),_:1}),c(t(O),{onClick:a[4]||(a[4]=n=>g("clockwise"))},{default:w(()=>[c(t(Fe))]),_:1})],2)],2),S(" CANVAS "),m("div",{class:u(t(o).e("canvas"))},[(h(!0),_(re,null,Re(e.urlList,(n,f)=>Ye((h(),_("img",{ref_for:!0,ref:I=>z.value[f]=I,key:n,src:n,style:ie(t(D)),class:u(t(o).e("img")),onLoad:H,onError:X,onMousedown:j},null,46,st)),[[Pe,f===d.value]])),128))],2),K(e.$slots,"default")],6)]),_:3})],8,["disabled"]))}}));var ot=be(lt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const rt=ke(ot),it=fe({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},lazy:{type:Boolean,default:!1},scrollContainer:{type:ne([String,Object])},previewSrcList:{type:ne(Array),default:()=>ve([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0}}),ct={error:r=>r instanceof Event,switch:r=>we(r),close:()=>!0},ut=["src"],dt={key:0},ft={name:"ElImage",inheritAttrs:!1},vt=me(q(M({},ft),{props:it,emits:ct,setup(r,{emit:i}){const s=r;let C="";const{t:Q}=pe(),x=ge("image"),o=je(),J=Ge(),b=v(!1),z=v(!0),R=v(0),E=v(0),d=v(!1),k=v(),l=v();let Y,N;const P=y(()=>o.style),U=y(()=>{const{fit:e}=s;return F&&e?{objectFit:e}:{}}),D=y(()=>{const{previewSrcList:e}=s;return Array.isArray(e)&&e.length>0}),ee=y(()=>{const{previewSrcList:e,initialIndex:a}=s;let n=a;return a>e.length-1&&(n=0),n}),T=()=>{if(!F)return;z.value=!0,b.value=!1;const e=new Image,a=s.src;e.addEventListener("load",n=>{a===s.src&&te(n,e)}),e.addEventListener("error",n=>{a===s.src&&ae(n)}),Object.entries(o).forEach(([n,f])=>{n.toLowerCase()!=="onload"&&e.setAttribute(n,f)}),e.src=a};function te(e,a){R.value=a.width,E.value=a.height,z.value=!1,b.value=!1}function ae(e){z.value=!1,b.value=!0,i("error",e)}function H(){Je(k.value,l.value)&&(T(),V())}const X=Ue(H,200);async function j(){var e;if(!F)return;await ye();const{scrollContainer:a}=s;qe(a)?l.value=a:Ke(a)&&a!==""?l.value=(e=document.querySelector(a))!=null?e:void 0:k.value&&(l.value=Qe(k.value)),l.value&&(Y=B(l,"scroll",X),setTimeout(()=>H(),100))}function V(){!F||!l.value||!X||(Y(),l.value=void 0)}function G(e){if(!!e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function W(){!D.value||(N=B("wheel",G,{passive:!1}),C=document.body.style.overflow,document.body.style.overflow="hidden",d.value=!0)}function Z(){N==null||N(),document.body.style.overflow=C,d.value=!1,i("close")}function g(e){i("switch",e)}return le(()=>s.src,()=>{s.lazy?(z.value=!0,b.value=!1,V(),j()):T()}),he(()=>{s.lazy?j():T()}),(e,a)=>(h(),_("div",{ref_key:"container",ref:k,class:u([t(x).b(),e.$attrs.class]),style:ie(t(P))},[z.value?K(e.$slots,"placeholder",{key:0},()=>[m("div",{class:u(t(x).e("placeholder"))},null,2)]):b.value?K(e.$slots,"error",{key:1},()=>[m("div",{class:u(t(x).e("error"))},We(t(Q)("el.image.error")),3)]):(h(),_("img",Ze({key:2},t(J),{src:e.src,style:t(U),class:[t(x).e("inner"),t(D)?t(x).e("preview"):""],onClick:W}),null,16,ut)),t(D)?(h(),_(re,{key:3},[d.value?(h(),oe(t(rt),{key:0,"z-index":e.zIndex,"initial-index":t(ee),infinite:e.infinite,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:Z,onSwitch:g},{default:w(()=>[e.$slots.viewer?(h(),_("div",dt,[K(e.$slots,"viewer")])):S("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):S("v-if",!0)],2112)):S("v-if",!0)],6))}}));var mt=be(vt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const wt=ke(mt);export{wt as E};