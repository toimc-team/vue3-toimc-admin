import{a2 as W,bY as B,aY as U,bX as g}from"./index.cb5efe47.js";const y=(t,e,p)=>{let c={offsetX:0,offsetY:0};const a=u=>{const L=u.clientX,Y=u.clientY,{offsetX:n,offsetY:s}=c,o=t.value.getBoundingClientRect(),i=o.left,l=o.top,M=o.width,X=o.height,w=document.documentElement.clientWidth,b=document.documentElement.clientHeight,x=-i+n,D=-l+s,H=w-i-M+n,T=b-l-X+s,d=f=>{const r=Math.min(Math.max(n+f.clientX-L,x),H),h=Math.min(Math.max(s+f.clientY-Y,D),T);c={offsetX:r,offsetY:h},t.value.style.transform=`translate(${g(r)}, ${g(h)})`},v=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",v)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",v)},E=()=>{e.value&&t.value&&e.value.addEventListener("mousedown",a)},m=()=>{e.value&&t.value&&e.value.removeEventListener("mousedown",a)};W(()=>{B(()=>{p.value?E():m()})}),U(()=>{m()})};export{y as u};