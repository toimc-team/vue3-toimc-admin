import{an as W,bJ as B,aJ as J,bH as g}from"./index.53af384c.js";const $=(t,e,p)=>{let c={offsetX:0,offsetY:0};const a=u=>{const L=u.clientX,M=u.clientY,{offsetX:o,offsetY:s}=c,n=t.value.getBoundingClientRect(),i=n.left,l=n.top,w=n.width,X=n.height,Y=document.documentElement.clientWidth,b=document.documentElement.clientHeight,x=-i+o,H=-l+s,D=Y-i-w+o,T=b-l-X+s,d=f=>{const r=Math.min(Math.max(o+f.clientX-L,x),D),h=Math.min(Math.max(s+f.clientY-M,H),T);c={offsetX:r,offsetY:h},t.value.style.transform=`translate(${g(r)}, ${g(h)})`},v=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",v)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",v)},E=()=>{e.value&&t.value&&e.value.addEventListener("mousedown",a)},m=()=>{e.value&&t.value&&e.value.removeEventListener("mousedown",a)};W(()=>{B(()=>{p.value?E():m()})}),J(()=>{m()})};export{$ as u};
