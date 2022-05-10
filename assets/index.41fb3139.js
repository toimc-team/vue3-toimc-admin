var xt=Object.defineProperty;var Mt=Object.getOwnPropertySymbols;var jt=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable;var Ct=(v,m,b)=>m in v?xt(v,m,{enumerable:!0,configurable:!0,writable:!0,value:b}):v[m]=b,ct=(v,m)=>{for(var b in m||(m={}))jt.call(m,b)&&Ct(v,b,m[b]);if(Mt)for(var b of Mt(m))Ht.call(m,b)&&Ct(v,b,m[b]);return v};import{e as ht,f as x,cB as Ot,x as Qt,aZ as Dt,bL as Wt,G as Yt,an as Lt,cC as te,cD as Rt,_ as yt,o as dt,c as gt,t as nt,R as ee,D as re,aK as ne,cE as Ft,cF as ie,J as kt,a as it,z as oe,K as ue,X as Pt,cG as ae,E as se,b as Z,w as $,h as j,ap as Tt,p as le,d as pe,V as fe}from"./index.04914df2.js";import{E as ve}from"./el-card.f848c2b6.js";import{_ as ce}from"./BasicForm.39a56b60.js";import"./el-col.18799ae9.js";import"./el-cascader-panel.aed3d723.js";import"./el-checkbox.01538d2a.js";import"./index.2343825d.js";import"./index.943a6e40.js";import"./date-utils.81fa3601.js";import"./index.c30cfce0.js";/* empty css                 */import"./el-upload.cd6031d4.js";import"./el-progress.9049dddc.js";import"./index.08f28103.js";import"./index.3908351c.js";import"./index.3989cc98.js";import"./index.4b52c9aa.js";const he={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(v){return v>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},ye=ht({name:"CountTo",props:he,emits:["onStarted","onFinished"],setup(v,{emit:m}){const b=x(v.startVal),h=x(!1);let I=Ot(b);const B=Qt(()=>c(Dt(I)));Wt(()=>{b.value=v.startVal}),Yt([()=>v.startVal,()=>v.endVal],()=>{v.autoplay&&A()}),Lt(()=>{v.autoplay&&A()});function A(){k(),b.value=v.endVal}function q(){b.value=v.startVal,k()}function k(){I=Ot(b,ct({disabled:h,duration:v.duration,onFinished:()=>m("onFinished"),onStarted:()=>m("onStarted")},v.useEasing?{transition:te[v.transition]}:{}))}function c(u){if(!u&&u!==0)return"";const{decimals:l,decimal:f,separator:M,suffix:w,prefix:C}=v;u=Number(u).toFixed(l),u+="";const T=u.split(".");let V=T[0];const z=T.length>1?f+T[1]:"",H=/(\d+)(\d{3})/;if(M&&!Rt(M))for(;H.test(V);)V=V.replace(H,"$1"+M+"$2");return C+V+z+w}return{value:B,start:A,reset:q}}});function de(v,m,b,h,I,B){return dt(),gt("span",{style:ee({color:v.color})},nt(v.value),5)}var ge=yt(ye,[["render",de]]),Zt={exports:{}};(function(v){var m=function(b){var h=1e7,I=7,B=9007199254740992,A=w(B),q="0123456789abcdefghijklmnopqrstuvwxyz",k=typeof BigInt=="function";function c(t,e,r,n){return typeof t=="undefined"?c[0]:typeof e!="undefined"?+e==10&&!r?y(t):Kt(t,e,r,n):y(t)}function u(t,e){this.value=t,this.sign=e,this.isSmall=!1}u.prototype=Object.create(c.prototype);function l(t){this.value=t,this.sign=t<0,this.isSmall=!0}l.prototype=Object.create(c.prototype);function f(t){this.value=t}f.prototype=Object.create(c.prototype);function M(t){return-B<t&&t<B}function w(t){return t<1e7?[t]:t<1e14?[t%1e7,Math.floor(t/1e7)]:[t%1e7,Math.floor(t/1e7)%1e7,Math.floor(t/1e14)]}function C(t){T(t);var e=t.length;if(e<4&&W(t,A)<0)switch(e){case 0:return 0;case 1:return t[0];case 2:return t[0]+t[1]*h;default:return t[0]+(t[1]+t[2]*h)*h}return t}function T(t){for(var e=t.length;t[--e]===0;);t.length=e+1}function V(t){for(var e=new Array(t),r=-1;++r<t;)e[r]=0;return e}function z(t){return t>0?Math.floor(t):Math.ceil(t)}function H(t,e){var r=t.length,n=e.length,o=new Array(r),i=0,a=h,s,p;for(p=0;p<n;p++)s=t[p]+e[p]+i,i=s>=a?1:0,o[p]=s-i*a;for(;p<r;)s=t[p]+i,i=s===a?1:0,o[p++]=s-i*a;return i>0&&o.push(i),o}function P(t,e){return t.length>=e.length?H(t,e):H(e,t)}function E(t,e){var r=t.length,n=new Array(r),o=h,i,a;for(a=0;a<r;a++)i=t[a]-o+e,e=Math.floor(i/o),n[a]=i-e*o,e+=1;for(;e>0;)n[a++]=e%o,e=Math.floor(e/o);return n}u.prototype.add=function(t){var e=y(t);if(this.sign!==e.sign)return this.subtract(e.negate());var r=this.value,n=e.value;return e.isSmall?new u(E(r,Math.abs(n)),this.sign):new u(P(r,n),this.sign)},u.prototype.plus=u.prototype.add,l.prototype.add=function(t){var e=y(t),r=this.value;if(r<0!==e.sign)return this.subtract(e.negate());var n=e.value;if(e.isSmall){if(M(r+n))return new l(r+n);n=w(Math.abs(n))}return new u(E(n,Math.abs(r)),r<0)},l.prototype.plus=l.prototype.add,f.prototype.add=function(t){return new f(this.value+y(t).value)},f.prototype.plus=f.prototype.add;function _(t,e){var r=t.length,n=e.length,o=new Array(r),i=0,a=h,s,p;for(s=0;s<n;s++)p=t[s]-i-e[s],p<0?(p+=a,i=1):i=0,o[s]=p;for(s=n;s<r;s++){if(p=t[s]-i,p<0)p+=a;else{o[s++]=p;break}o[s]=p}for(;s<r;s++)o[s]=t[s];return T(o),o}function O(t,e,r){var n;return W(t,e)>=0?n=_(t,e):(n=_(e,t),r=!r),n=C(n),typeof n=="number"?(r&&(n=-n),new l(n)):new u(n,r)}function J(t,e,r){var n=t.length,o=new Array(n),i=-e,a=h,s,p;for(s=0;s<n;s++)p=t[s]+i,i=Math.floor(p/a),p%=a,o[s]=p<0?p+a:p;return o=C(o),typeof o=="number"?(r&&(o=-o),new l(o)):new u(o,r)}u.prototype.subtract=function(t){var e=y(t);if(this.sign!==e.sign)return this.add(e.negate());var r=this.value,n=e.value;return e.isSmall?J(r,Math.abs(n),this.sign):O(r,n,this.sign)},u.prototype.minus=u.prototype.subtract,l.prototype.subtract=function(t){var e=y(t),r=this.value;if(r<0!==e.sign)return this.add(e.negate());var n=e.value;return e.isSmall?new l(r-n):J(n,Math.abs(r),r>=0)},l.prototype.minus=l.prototype.subtract,f.prototype.subtract=function(t){return new f(this.value-y(t).value)},f.prototype.minus=f.prototype.subtract,u.prototype.negate=function(){return new u(this.value,!this.sign)},l.prototype.negate=function(){var t=this.sign,e=new l(-this.value);return e.sign=!t,e},f.prototype.negate=function(){return new f(-this.value)},u.prototype.abs=function(){return new u(this.value,!1)},l.prototype.abs=function(){return new l(Math.abs(this.value))},f.prototype.abs=function(){return new f(this.value>=0?this.value:-this.value)};function U(t,e){var r=t.length,n=e.length,o=r+n,i=V(o),a=h,s,p,d,S,g;for(d=0;d<r;++d){S=t[d];for(var N=0;N<n;++N)g=e[N],s=S*g+i[d+N],p=Math.floor(s/a),i[d+N]=s-p*a,i[d+N+1]+=p}return T(i),i}function F(t,e){var r=t.length,n=new Array(r),o=h,i=0,a,s;for(s=0;s<r;s++)a=t[s]*e+i,i=Math.floor(a/o),n[s]=a-i*o;for(;i>0;)n[s++]=i%o,i=Math.floor(i/o);return n}function X(t,e){for(var r=[];e-- >0;)r.push(0);return r.concat(t)}function K(t,e){var r=Math.max(t.length,e.length);if(r<=30)return U(t,e);r=Math.ceil(r/2);var n=t.slice(r),o=t.slice(0,r),i=e.slice(r),a=e.slice(0,r),s=K(o,a),p=K(n,i),d=K(P(o,n),P(a,i)),S=P(P(s,X(_(_(d,s),p),r)),X(p,2*r));return T(S),S}function ot(t,e){return-.012*t-.012*e+15e-6*t*e>0}u.prototype.multiply=function(t){var e=y(t),r=this.value,n=e.value,o=this.sign!==e.sign,i;if(e.isSmall){if(n===0)return c[0];if(n===1)return this;if(n===-1)return this.negate();if(i=Math.abs(n),i<h)return new u(F(r,i),o);n=w(i)}return ot(r.length,n.length)?new u(K(r,n),o):new u(U(r,n),o)},u.prototype.times=u.prototype.multiply;function mt(t,e,r){return t<h?new u(F(e,t),r):new u(U(e,w(t)),r)}l.prototype._multiplyBySmall=function(t){return M(t.value*this.value)?new l(t.value*this.value):mt(Math.abs(t.value),w(Math.abs(this.value)),this.sign!==t.sign)},u.prototype._multiplyBySmall=function(t){return t.value===0?c[0]:t.value===1?this:t.value===-1?this.negate():mt(Math.abs(t.value),this.value,this.sign!==t.sign)},l.prototype.multiply=function(t){return y(t)._multiplyBySmall(this)},l.prototype.times=l.prototype.multiply,f.prototype.multiply=function(t){return new f(this.value*y(t).value)},f.prototype.times=f.prototype.multiply;function wt(t){var e=t.length,r=V(e+e),n=h,o,i,a,s,p;for(a=0;a<e;a++){s=t[a],i=0-s*s;for(var d=a;d<e;d++)p=t[d],o=2*(s*p)+r[a+d]+i,i=Math.floor(o/n),r[a+d]=o-i*n;r[a+e]=i}return T(r),r}u.prototype.square=function(){return new u(wt(this.value),!1)},l.prototype.square=function(){var t=this.value*this.value;return M(t)?new l(t):new u(wt(w(Math.abs(this.value))),!1)},f.prototype.square=function(t){return new f(this.value*this.value)};function $t(t,e){var r=t.length,n=e.length,o=h,i=V(e.length),a=e[n-1],s=Math.ceil(o/(2*a)),p=F(t,s),d=F(e,s),S,g,N,R,D,ft,vt;for(p.length<=r&&p.push(0),d.push(0),a=d[n-1],g=r-n;g>=0;g--){for(S=o-1,p[g+n]!==a&&(S=Math.floor((p[g+n]*o+p[g+n-1])/a)),N=0,R=0,ft=d.length,D=0;D<ft;D++)N+=S*d[D],vt=Math.floor(N/o),R+=p[g+D]-(N-vt*o),N=vt,R<0?(p[g+D]=R+o,R=-1):(p[g+D]=R,R=0);for(;R!==0;){for(S-=1,N=0,D=0;D<ft;D++)N+=p[g+D]-o+d[D],N<0?(p[g+D]=N+o,N=0):(p[g+D]=N,N=1);R+=N}i[g]=S}return p=bt(p,s)[0],[C(i),C(p)]}function Vt(t,e){for(var r=t.length,n=e.length,o=[],i=[],a=h,s,p,d,S,g;r;){if(i.unshift(t[--r]),T(i),W(i,e)<0){o.push(0);continue}p=i.length,d=i[p-1]*a+i[p-2],S=e[n-1]*a+e[n-2],p>n&&(d=(d+1)*a),s=Math.ceil(d/S);do{if(g=F(e,s),W(g,i)<=0)break;s--}while(s);o.push(s),i=_(i,g)}return o.reverse(),[C(o),C(i)]}function bt(t,e){var r=t.length,n=V(r),o=h,i,a,s,p;for(s=0,i=r-1;i>=0;--i)p=s*o+t[i],a=z(p/e),s=p-a*e,n[i]=a|0;return[n,s|0]}function Q(t,e){var r,n=y(e);if(k)return[new f(t.value/n.value),new f(t.value%n.value)];var o=t.value,i=n.value,a;if(i===0)throw new Error("Cannot divide by zero");if(t.isSmall)return n.isSmall?[new l(z(o/i)),new l(o%i)]:[c[0],t];if(n.isSmall){if(i===1)return[t,c[0]];if(i==-1)return[t.negate(),c[0]];var s=Math.abs(i);if(s<h){r=bt(o,s),a=C(r[0]);var p=r[1];return t.sign&&(p=-p),typeof a=="number"?(t.sign!==n.sign&&(a=-a),[new l(a),new l(p)]):[new u(a,t.sign!==n.sign),new l(p)]}i=w(s)}var d=W(o,i);if(d===-1)return[c[0],t];if(d===0)return[c[t.sign===n.sign?1:-1],c[0]];o.length+i.length<=200?r=$t(o,i):r=Vt(o,i),a=r[0];var S=t.sign!==n.sign,g=r[1],N=t.sign;return typeof a=="number"?(S&&(a=-a),a=new l(a)):a=new u(a,S),typeof g=="number"?(N&&(g=-g),g=new l(g)):g=new u(g,N),[a,g]}u.prototype.divmod=function(t){var e=Q(this,t);return{quotient:e[0],remainder:e[1]}},f.prototype.divmod=l.prototype.divmod=u.prototype.divmod,u.prototype.divide=function(t){return Q(this,t)[0]},f.prototype.over=f.prototype.divide=function(t){return new f(this.value/y(t).value)},l.prototype.over=l.prototype.divide=u.prototype.over=u.prototype.divide,u.prototype.mod=function(t){return Q(this,t)[1]},f.prototype.mod=f.prototype.remainder=function(t){return new f(this.value%y(t).value)},l.prototype.remainder=l.prototype.mod=u.prototype.remainder=u.prototype.mod,u.prototype.pow=function(t){var e=y(t),r=this.value,n=e.value,o,i,a;if(n===0)return c[1];if(r===0)return c[0];if(r===1)return c[1];if(r===-1)return e.isEven()?c[1]:c[-1];if(e.sign)return c[0];if(!e.isSmall)throw new Error("The exponent "+e.toString()+" is too large.");if(this.isSmall&&M(o=Math.pow(r,n)))return new l(z(o));for(i=this,a=c[1];n&!0&&(a=a.times(i),--n),n!==0;)n/=2,i=i.square();return a},l.prototype.pow=u.prototype.pow,f.prototype.pow=function(t){var e=y(t),r=this.value,n=e.value,o=BigInt(0),i=BigInt(1),a=BigInt(2);if(n===o)return c[1];if(r===o)return c[0];if(r===i)return c[1];if(r===BigInt(-1))return e.isEven()?c[1]:c[-1];if(e.isNegative())return new f(o);for(var s=this,p=c[1];(n&i)===i&&(p=p.times(s),--n),n!==o;)n/=a,s=s.square();return p},u.prototype.modPow=function(t,e){if(t=y(t),e=y(e),e.isZero())throw new Error("Cannot take modPow with modulus 0");var r=c[1],n=this.mod(e);for(t.isNegative()&&(t=t.multiply(c[-1]),n=n.modInv(e));t.isPositive();){if(n.isZero())return c[0];t.isOdd()&&(r=r.multiply(n).mod(e)),t=t.divide(2),n=n.square().mod(e)}return r},f.prototype.modPow=l.prototype.modPow=u.prototype.modPow;function W(t,e){if(t.length!==e.length)return t.length>e.length?1:-1;for(var r=t.length-1;r>=0;r--)if(t[r]!==e[r])return t[r]>e[r]?1:-1;return 0}u.prototype.compareAbs=function(t){var e=y(t),r=this.value,n=e.value;return e.isSmall?1:W(r,n)},l.prototype.compareAbs=function(t){var e=y(t),r=Math.abs(this.value),n=e.value;return e.isSmall?(n=Math.abs(n),r===n?0:r>n?1:-1):-1},f.prototype.compareAbs=function(t){var e=this.value,r=y(t).value;return e=e>=0?e:-e,r=r>=0?r:-r,e===r?0:e>r?1:-1},u.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=y(t),r=this.value,n=e.value;return this.sign!==e.sign?e.sign?1:-1:e.isSmall?this.sign?-1:1:W(r,n)*(this.sign?-1:1)},u.prototype.compareTo=u.prototype.compare,l.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=y(t),r=this.value,n=e.value;return e.isSmall?r==n?0:r>n?1:-1:r<0!==e.sign?r<0?-1:1:r<0?1:-1},l.prototype.compareTo=l.prototype.compare,f.prototype.compare=function(t){if(t===1/0)return-1;if(t===-1/0)return 1;var e=this.value,r=y(t).value;return e===r?0:e>r?1:-1},f.prototype.compareTo=f.prototype.compare,u.prototype.equals=function(t){return this.compare(t)===0},f.prototype.eq=f.prototype.equals=l.prototype.eq=l.prototype.equals=u.prototype.eq=u.prototype.equals,u.prototype.notEquals=function(t){return this.compare(t)!==0},f.prototype.neq=f.prototype.notEquals=l.prototype.neq=l.prototype.notEquals=u.prototype.neq=u.prototype.notEquals,u.prototype.greater=function(t){return this.compare(t)>0},f.prototype.gt=f.prototype.greater=l.prototype.gt=l.prototype.greater=u.prototype.gt=u.prototype.greater,u.prototype.lesser=function(t){return this.compare(t)<0},f.prototype.lt=f.prototype.lesser=l.prototype.lt=l.prototype.lesser=u.prototype.lt=u.prototype.lesser,u.prototype.greaterOrEquals=function(t){return this.compare(t)>=0},f.prototype.geq=f.prototype.greaterOrEquals=l.prototype.geq=l.prototype.greaterOrEquals=u.prototype.geq=u.prototype.greaterOrEquals,u.prototype.lesserOrEquals=function(t){return this.compare(t)<=0},f.prototype.leq=f.prototype.lesserOrEquals=l.prototype.leq=l.prototype.lesserOrEquals=u.prototype.leq=u.prototype.lesserOrEquals,u.prototype.isEven=function(){return(this.value[0]&1)===0},l.prototype.isEven=function(){return(this.value&1)===0},f.prototype.isEven=function(){return(this.value&BigInt(1))===BigInt(0)},u.prototype.isOdd=function(){return(this.value[0]&1)===1},l.prototype.isOdd=function(){return(this.value&1)===1},f.prototype.isOdd=function(){return(this.value&BigInt(1))===BigInt(1)},u.prototype.isPositive=function(){return!this.sign},l.prototype.isPositive=function(){return this.value>0},f.prototype.isPositive=l.prototype.isPositive,u.prototype.isNegative=function(){return this.sign},l.prototype.isNegative=function(){return this.value<0},f.prototype.isNegative=l.prototype.isNegative,u.prototype.isUnit=function(){return!1},l.prototype.isUnit=function(){return Math.abs(this.value)===1},f.prototype.isUnit=function(){return this.abs().value===BigInt(1)},u.prototype.isZero=function(){return!1},l.prototype.isZero=function(){return this.value===0},f.prototype.isZero=function(){return this.value===BigInt(0)},u.prototype.isDivisibleBy=function(t){var e=y(t);return e.isZero()?!1:e.isUnit()?!0:e.compareAbs(2)===0?this.isEven():this.mod(e).isZero()},f.prototype.isDivisibleBy=l.prototype.isDivisibleBy=u.prototype.isDivisibleBy;function St(t){var e=t.abs();if(e.isUnit())return!1;if(e.equals(2)||e.equals(3)||e.equals(5))return!0;if(e.isEven()||e.isDivisibleBy(3)||e.isDivisibleBy(5))return!1;if(e.lesser(49))return!0}function at(t,e){for(var r=t.prev(),n=r,o=0,i,a,s;n.isEven();)n=n.divide(2),o++;t:for(a=0;a<e.length;a++)if(!t.lesser(e[a])&&(s=m(e[a]).modPow(n,t),!(s.isUnit()||s.equals(r)))){for(i=o-1;i!=0;i--){if(s=s.square().mod(t),s.isUnit())return!1;if(s.equals(r))continue t}return!1}return!0}u.prototype.isPrime=function(t){var e=St(this);if(e!==b)return e;var r=this.abs(),n=r.bitLength();if(n<=64)return at(r,[2,3,5,7,11,13,17,19,23,29,31,37]);for(var o=Math.log(2)*n.toJSNumber(),i=Math.ceil(t===!0?2*Math.pow(o,2):o),a=[],s=0;s<i;s++)a.push(m(s+2));return at(r,a)},f.prototype.isPrime=l.prototype.isPrime=u.prototype.isPrime,u.prototype.isProbablePrime=function(t,e){var r=St(this);if(r!==b)return r;for(var n=this.abs(),o=t===b?5:t,i=[],a=0;a<o;a++)i.push(m.randBetween(2,n.minus(2),e));return at(n,i)},f.prototype.isProbablePrime=l.prototype.isProbablePrime=u.prototype.isProbablePrime,u.prototype.modInv=function(t){for(var e=m.zero,r=m.one,n=y(t),o=this.abs(),i,a,s;!o.isZero();)i=n.divide(o),a=e,s=n,e=r,n=o,r=a.subtract(i.multiply(r)),o=s.subtract(i.multiply(o));if(!n.isUnit())throw new Error(this.toString()+" and "+t.toString()+" are not co-prime");return e.compare(0)===-1&&(e=e.add(t)),this.isNegative()?e.negate():e},f.prototype.modInv=l.prototype.modInv=u.prototype.modInv,u.prototype.next=function(){var t=this.value;return this.sign?J(t,1,this.sign):new u(E(t,1),this.sign)},l.prototype.next=function(){var t=this.value;return t+1<B?new l(t+1):new u(A,!1)},f.prototype.next=function(){return new f(this.value+BigInt(1))},u.prototype.prev=function(){var t=this.value;return this.sign?new u(E(t,1),!0):J(t,1,this.sign)},l.prototype.prev=function(){var t=this.value;return t-1>-B?new l(t-1):new u(A,!0)},f.prototype.prev=function(){return new f(this.value-BigInt(1))};for(var G=[1];2*G[G.length-1]<=h;)G.push(2*G[G.length-1]);var et=G.length,Y=G[et-1];function _t(t){return Math.abs(t)<=h}u.prototype.shiftLeft=function(t){var e=y(t).toJSNumber();if(!_t(e))throw new Error(String(e)+" is too large for shifting.");if(e<0)return this.shiftRight(-e);var r=this;if(r.isZero())return r;for(;e>=et;)r=r.multiply(Y),e-=et-1;return r.multiply(G[e])},f.prototype.shiftLeft=l.prototype.shiftLeft=u.prototype.shiftLeft,u.prototype.shiftRight=function(t){var e,r=y(t).toJSNumber();if(!_t(r))throw new Error(String(r)+" is too large for shifting.");if(r<0)return this.shiftLeft(-r);for(var n=this;r>=et;){if(n.isZero()||n.isNegative()&&n.isUnit())return n;e=Q(n,Y),n=e[1].isNegative()?e[0].prev():e[0],r-=et-1}return e=Q(n,G[r]),e[1].isNegative()?e[0].prev():e[0]},f.prototype.shiftRight=l.prototype.shiftRight=u.prototype.shiftRight;function st(t,e,r){e=y(e);for(var n=t.isNegative(),o=e.isNegative(),i=n?t.not():t,a=o?e.not():e,s=0,p=0,d=null,S=null,g=[];!i.isZero()||!a.isZero();)d=Q(i,Y),s=d[1].toJSNumber(),n&&(s=Y-1-s),S=Q(a,Y),p=S[1].toJSNumber(),o&&(p=Y-1-p),i=d[0],a=S[0],g.push(r(s,p));for(var N=r(n?1:0,o?1:0)!==0?m(-1):m(0),R=g.length-1;R>=0;R-=1)N=N.multiply(Y).add(m(g[R]));return N}u.prototype.not=function(){return this.negate().prev()},f.prototype.not=l.prototype.not=u.prototype.not,u.prototype.and=function(t){return st(this,t,function(e,r){return e&r})},f.prototype.and=l.prototype.and=u.prototype.and,u.prototype.or=function(t){return st(this,t,function(e,r){return e|r})},f.prototype.or=l.prototype.or=u.prototype.or,u.prototype.xor=function(t){return st(this,t,function(e,r){return e^r})},f.prototype.xor=l.prototype.xor=u.prototype.xor;var lt=1<<30,zt=(h&-h)*(h&-h)|lt;function ut(t){var e=t.value,r=typeof e=="number"?e|lt:typeof e=="bigint"?e|BigInt(lt):e[0]+e[1]*h|zt;return r&-r}function Nt(t,e){if(e.compareTo(t)<=0){var r=Nt(t,e.square(e)),n=r.p,o=r.e,i=n.multiply(e);return i.compareTo(t)<=0?{p:i,e:o*2+1}:{p:n,e:o*2}}return{p:m(1),e:0}}u.prototype.bitLength=function(){var t=this;return t.compareTo(m(0))<0&&(t=t.negate().subtract(m(1))),t.compareTo(m(0))===0?m(0):m(Nt(t,m(2)).e).add(m(1))},f.prototype.bitLength=l.prototype.bitLength=u.prototype.bitLength;function Et(t,e){return t=y(t),e=y(e),t.greater(e)?t:e}function pt(t,e){return t=y(t),e=y(e),t.lesser(e)?t:e}function Bt(t,e){if(t=y(t).abs(),e=y(e).abs(),t.equals(e))return t;if(t.isZero())return e;if(e.isZero())return t;for(var r=c[1],n,o;t.isEven()&&e.isEven();)n=pt(ut(t),ut(e)),t=t.divide(n),e=e.divide(n),r=r.multiply(n);for(;t.isEven();)t=t.divide(ut(t));do{for(;e.isEven();)e=e.divide(ut(e));t.greater(e)&&(o=e,e=t,t=o),e=e.subtract(t)}while(!e.isZero());return r.isUnit()?t:t.multiply(r)}function Jt(t,e){return t=y(t).abs(),e=y(e).abs(),t.divide(Bt(t,e)).multiply(e)}function Ut(t,e,r){t=y(t),e=y(e);var n=r||Math.random,o=pt(t,e),i=Et(t,e),a=i.subtract(o).add(1);if(a.isSmall)return o.add(Math.floor(n()*a));for(var s=rt(a,h).value,p=[],d=!0,S=0;S<s.length;S++){var g=d?s[S]+(S+1<s.length?s[S+1]/h:0):h,N=z(n()*g);p.push(N),N<s[S]&&(d=!1)}return o.add(c.fromArray(p,h,!1))}var Kt=function(t,e,r,n){r=r||q,t=String(t),n||(t=t.toLowerCase(),r=r.toLowerCase());var o=t.length,i,a=Math.abs(e),s={};for(i=0;i<r.length;i++)s[r[i]]=i;for(i=0;i<o;i++){var p=t[i];if(p!=="-"&&p in s&&s[p]>=a){if(p==="1"&&a===1)continue;throw new Error(p+" is not a valid digit in base "+e+".")}}e=y(e);var d=[],S=t[0]==="-";for(i=S?1:0;i<t.length;i++){var p=t[i];if(p in s)d.push(y(s[p]));else if(p==="<"){var g=i;do i++;while(t[i]!==">"&&i<t.length);d.push(y(t.slice(g+1,i)))}else throw new Error(p+" is not a valid character")}return At(d,e,S)};function At(t,e,r){var n=c[0],o=c[1],i;for(i=t.length-1;i>=0;i--)n=n.add(t[i].times(o)),o=o.times(e);return r?n.negate():n}function Gt(t,e){return e=e||q,t<e.length?e[t]:"<"+t+">"}function rt(t,e){if(e=m(e),e.isZero()){if(t.isZero())return{value:[0],isNegative:!1};throw new Error("Cannot convert nonzero numbers to base 0.")}if(e.equals(-1)){if(t.isZero())return{value:[0],isNegative:!1};if(t.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-t.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:!1};var r=Array.apply(null,Array(t.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);return r.unshift([1]),{value:[].concat.apply([],r),isNegative:!1}}var n=!1;if(t.isNegative()&&e.isPositive()&&(n=!0,t=t.abs()),e.isUnit())return t.isZero()?{value:[0],isNegative:!1}:{value:Array.apply(null,Array(t.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:n};for(var o=[],i=t,a;i.isNegative()||i.compareAbs(e)>=0;){a=i.divmod(e),i=a.quotient;var s=a.remainder;s.isNegative()&&(s=e.minus(s).abs(),i=i.next()),o.push(s.toJSNumber())}return o.push(i.toJSNumber()),{value:o.reverse(),isNegative:n}}function It(t,e,r){var n=rt(t,e);return(n.isNegative?"-":"")+n.value.map(function(o){return Gt(o,r)}).join("")}u.prototype.toArray=function(t){return rt(this,t)},l.prototype.toArray=function(t){return rt(this,t)},f.prototype.toArray=function(t){return rt(this,t)},u.prototype.toString=function(t,e){if(t===b&&(t=10),t!==10)return It(this,t,e);for(var r=this.value,n=r.length,o=String(r[--n]),i="0000000",a;--n>=0;)a=String(r[n]),o+=i.slice(a.length)+a;var s=this.sign?"-":"";return s+o},l.prototype.toString=function(t,e){return t===b&&(t=10),t!=10?It(this,t,e):String(this.value)},f.prototype.toString=l.prototype.toString,f.prototype.toJSON=u.prototype.toJSON=l.prototype.toJSON=function(){return this.toString()},u.prototype.valueOf=function(){return parseInt(this.toString(),10)},u.prototype.toJSNumber=u.prototype.valueOf,l.prototype.valueOf=function(){return this.value},l.prototype.toJSNumber=l.prototype.valueOf,f.prototype.valueOf=f.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};function qt(t){if(M(+t)){var e=+t;if(e===z(e))return k?new f(BigInt(e)):new l(e);throw new Error("Invalid integer: "+t)}var r=t[0]==="-";r&&(t=t.slice(1));var n=t.split(/e/i);if(n.length>2)throw new Error("Invalid integer: "+n.join("e"));if(n.length===2){var o=n[1];if(o[0]==="+"&&(o=o.slice(1)),o=+o,o!==z(o)||!M(o))throw new Error("Invalid integer: "+o+" is not a valid exponent.");var i=n[0],a=i.indexOf(".");if(a>=0&&(o-=i.length-a-1,i=i.slice(0,a)+i.slice(a+1)),o<0)throw new Error("Cannot include negative exponent part for integers");i+=new Array(o+1).join("0"),t=i}var s=/^([0-9][0-9]*)$/.test(t);if(!s)throw new Error("Invalid integer: "+t);if(k)return new f(BigInt(r?"-"+t:t));for(var p=[],d=t.length,S=I,g=d-S;d>0;)p.push(+t.slice(g,d)),g-=S,g<0&&(g=0),d-=S;return T(p),new u(p,r)}function Xt(t){if(k)return new f(BigInt(t));if(M(t)){if(t!==z(t))throw new Error(t+" is not an integer.");return new l(t)}return qt(t.toString())}function y(t){return typeof t=="number"?Xt(t):typeof t=="string"?qt(t):typeof t=="bigint"?new f(t):t}for(var tt=0;tt<1e3;tt++)c[tt]=y(tt),tt>0&&(c[-tt]=y(-tt));return c.one=c[1],c.zero=c[0],c.minusOne=c[-1],c.max=Et,c.min=pt,c.gcd=Bt,c.lcm=Jt,c.isInstance=function(t){return t instanceof u||t instanceof l||t instanceof f},c.randBetween=Ut,c.fromArray=function(t,e,r){return At(t.map(y),y(e||10),r)},c}();v.hasOwnProperty("exports")&&(v.exports=m)})(Zt);var L=Zt.exports;const me=ht({props:{begin:{type:[Number,String],default:0},end:{type:[Number,String],default:0,required:!0},duration:{type:Number,default:3e3},setupDuration:{type:Number,default:10},dot:{type:Number,default:0},classes:{type:String,default:"d-numbers"},auto:{type:Boolean,default:!0},breakAll:{type:Boolean,default:!1},size:{type:[Number,String],default:"16px"},style:{type:Object,default:()=>({})},split:{type:String,default:""},format:{type:Function,default:null}},setup(v,{expose:m}){const{setupDuration:b}=Dt(v),{begin:h,end:I,dot:B,duration:A}=re(v),q=x(!1),k=x(!1),c=x("");let u;function l(P,E){const _=P.toString();return _.indexOf(".")!==-1?L(_.split(".")[0]).multiply(E).add(L(_.split(".")[1]).multiply(E).divide(L(10).pow(_.split(".")[1].length))):L(P.toString()).multiply(E)}function f(P,E){const _=P.split(".");let O=_[0];const J=_.length>1?"."+_[1]:"",U=/(\d+)(\d{3})/;if(E&&!Rt(E))for(;U.test(O);)O=O.replace(U,"$1"+E+"$2");return O+J}function M(P,E){if(Ft(v.format))return f(v.format(P),v.split);const _=P.toString();let O;return E>0?_.indexOf(".")===-1?O=(_+".").padEnd(E+_.length+1,"0"):_.split(".")[1].length>E?O=_.split(".")[0]+"."+_.split(".")[1].substr(0,E):O=_.split(".")[0]+"."+_.split(".")[1].padEnd(E,"0"):O=_.substr(0,_.length-E),f(O,v.split)}function w(){clearInterval(u),q.value=!0;let P=0,E,_,O;if(I.value.toString().indexOf(".")!==-1){const F=I.value.toString().split(".")[1];B.value>(F==null?void 0:F.length)?E=L(10).pow(B.value):E=L(10).pow(F.length)}else E=L(10).pow(B.value);_=l(h.value,E),O=l(I.value,E);let J=L(A.value).divide(b),U=J.compareAbs(L.zero)!==0?O.minus(_).divide(J):O;u=setInterval(()=>{if(k.value)return;P+=b;let F=U;if(U.compareAbs(L.zero)===1){const ot=U.toString().length;Math.random()>.5&&ot>3&&(F=L(F).add(L(ie(ot-3)))),F=L(F).multiply(Math.floor(Math.random()*11)+95).divide(100)}else F=L(1);_=_.add(F);let X=_.divmod(E),K=X.quotient.toString()+(B.value>0?".":"")+(X.remainder.toString()!=="0"?X.remainder.toString().length<B.value?X.remainder.toString().padEnd(B.value,"0"):X.remainder.toString():"");K=Ft(v.format)?v.format(K):K,c.value=f(K,v.split),(_.compareAbs(O)===1||P>=A.value)&&(c.value=M(I.value,B.value),q.value=!1,clearInterval(u))},b)}Lt(()=>{v.auto?w():c.value=M(h.value,B.value)}),ne(()=>{clearInterval(u),q.value=!1,u=null});function C(){w()}function T(){q.value=!1,k.value=!1,clearInterval(u)}async function V(){T(),c.value=M(h.value,B.value)}function z(){k.value=!0}function H(){k.value=!1}return m({status:q,start:C,terminate:T,reset:V,pause:z,resume:H}),{result:c}}});function we(v,m,b,h,I,B){return dt(),gt("div",ue({class:["flex items-center",v.classes],style:ct({"font-size":typeof v.size=="string"?v.size:v.size+"px"},v.style)},v.$attrs),[kt(v.$slots,"prefix",{},void 0,!0),it("div",{class:oe([{"break-all":v.breakAll}])},nt(v.result),3),kt(v.$slots,"suffix",{},void 0,!0)],16)}var be=yt(me,[["render",we],["__scopeId","data-v-5ed17a15"]]);const Se=ht({setup(){const v=x(),m=x(),b=x(0);let h=Pt({begin:1.12312,end:100,duration:1e4,dot:5,auto:!1,breakAll:!0,prefix:"",suffix:""});const{pause:I,resume:B}=ae(()=>{b.value+=1,b.value>=h.duration/1e3&&I()},1e3,{immediate:!1}),A=Pt([{component:"input-number",value:h.begin,label:"\u5F00\u59CB\u503C",prop:"begin"},{component:"input-number",value:h.end,label:"\u505C\u6B62\u503C",prop:"end"},{component:"input-number",value:h.duration,label:"\u6301\u7EED\u65F6\u95F4",prop:"duration",attrs:{step:1e3}},{component:"input-number",value:h.dot,label:"\u5C0F\u4F4D\u6570",prop:"dot"},{component:"input",value:h.prefix,label:"\u524D\u7F00",prop:"prefix"},{component:"input",value:h.suffix,label:"\u540E\u7F00",prop:"suffix"},{component:"switch",value:h.breakAll,label:"\u662F\u5426\u6362\u884C",prop:"breakAll"},{component:"switch",value:h.auto,label:"\u81EA\u52A8\u6267\u884C",prop:"auto"}]);function q(){var w,C;b.value=0,B(),(w=v.value)==null||w.start(),(C=m.value)==null||C.start()}function k(){var w;I(),(w=v.value)==null||w.pause()}function c(){var w;B(),(w=v.value)==null||w.resume()}function u(){var w,C;b.value=0,I(),(w=v.value)==null||w.reset(),(C=m.value)==null||C.reset()}function l(){var w;I(),b.value=0,(w=v.value)==null||w.terminate()}async function f(w){w==null||w.resetFields(),await Tt(),u()}async function M(w){h.dot=w.dot,h.prefix=w.prefix,h.suffix=w.suffix,h.duration=w.duration,h.begin=w.begin,h.end=w.end,h.auto=w.auto,h.breakAll=w.breakAll,u(),await Tt(),h.auto&&q()}return{ctrl:v,ctrl1:m,formSchema:A,form:h,handleStart:q,handlePause:k,handleResume:c,handleReset:u,handleTerminate:l,handleChange:M,handleFormReset:f,counter:b}}}),_e=v=>(le("data-v-0badd371"),v=v(),pe(),v),Ne={class:"p-4"},Ee=j("\u91CD\u7F6E\u8868\u683C"),Be={class:"text-center py-6 break-words"},Ae=_e(()=>it("p",{class:"pt-3"},"\u4F7F\u7528useTransition\u7684\u6848\u4F8B\uFF1A",-1)),Ie={class:"text-left py-6 text-4xl"},qe=j("\u5F00\u59CB"),Me=j("\u6682\u505C"),Ce=j("\u6062\u590D"),Oe=j("\u91CD\u7F6E"),Fe=j("\u7EC8\u6B62");function ke(v,m,b,h,I,B){const A=se,q=fe,k=ce,c=be,u=ge,l=ve;return dt(),gt("div",Ne,[Z(l,{header:"\u52A8\u6001\u6570\u5B57\u589E\u957F"},{default:$(()=>[Z(q,null,{default:$(()=>[Z(k,{schemas:v.formSchema,inline:"","label-width":"80px",onChange:v.handleChange},{action:$(({form:f})=>[Z(q,null,{default:$(()=>[Z(A,{type:"primary",onClick:()=>v.handleFormReset(f)},{default:$(()=>[Ee]),_:2},1032,["onClick"])]),_:2},1024)]),_:1},8,["schemas","onChange"]),it("div",null,"\u8BA1\u65F6\uFF1A"+nt(v.counter)+"s",1)]),_:1}),it("div",Be,[Z(c,{ref:"ctrl",end:v.form.end,begin:v.form.begin,dot:v.form.dot,duration:v.form.duration,auto:v.form.auto,size:48,"break-all":v.form.breakAll,classes:"d-text",split:","},{prefix:$(()=>[j(nt(v.form.prefix),1)]),suffix:$(()=>[j(nt(v.form.suffix),1)]),_:1},8,["end","begin","dot","duration","auto","break-all"])]),Ae,it("div",Ie,[Z(u,{ref:"ctrl1","end-val":v.form.end,"start-val":v.form.begin,decimals:v.form.dot,duration:v.form.duration,autoplay:v.form.auto,classes:"d-text",separator:",",prefix:v.form.prefix,suffix:v.form.suffix},null,8,["end-val","start-val","decimals","duration","autoplay","prefix","suffix"])]),Z(q,null,{default:$(()=>[Z(A,{type:"primary",onClick:v.handleStart},{default:$(()=>[qe]),_:1},8,["onClick"]),Z(A,{onClick:v.handlePause},{default:$(()=>[Me]),_:1},8,["onClick"]),Z(A,{type:"info",onClick:v.handleResume},{default:$(()=>[Ce]),_:1},8,["onClick"]),Z(A,{type:"danger",onClick:v.handleReset},{default:$(()=>[Oe]),_:1},8,["onClick"]),Z(A,{type:"warning",onClick:v.handleTerminate},{default:$(()=>[Fe]),_:1},8,["onClick"])]),_:1})]),_:1})])}var We=yt(Se,[["render",ke],["__scopeId","data-v-0badd371"]]);export{We as default};
