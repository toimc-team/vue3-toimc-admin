import{e as v,b1 as m,A as C,_ as g,o as r,j as s,w,c as i,S,k,t as B,O as D,F as y,H as A,C as b,D as $,U as T}from"./index.3688f571.js";var f=(e=>(e.Up="up",e.Down="down",e.Equal="equal",e))(f||{});const u=["#f43f5e","#333","#10b981"],U=v({name:"Trend",props:{wrapper:{type:String,default:"div"},cls:{type:String,default:""},type:{type:String,default:"equal"},text:{type:String,default:""},bold:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},colors:{type:Array,default:()=>[...u]},sync:{type:Boolean,default:!1},textColors:{type:Array,default:()=>[]},icon:{type:String,default:""}},setup(e){const{reverse:a,type:t,colors:n,sync:p,textColors:d}=m(e);function l(){let o;return p.value?o=a.value?[...u].reverse():n.value:o=d.value,t.value==="up"?o[0]:t.value==="down"?o[2]:o[1]}function c(){let o;return p.value?o=a.value?[...u].reverse():n.value:o=n.value,t.value==="up"?o[0]:t.value==="down"?o[2]:o[1]}return{TrendDirection:f,getTextColor:l,getIconColor:c,trendsColors:C(()=>a.value?[...u].reverse():n.value)}}});function q(e,a,t,n,p,d){const l=T;return r(),s($(e.wrapper),{class:b(["inline-flex items-center",e.cls])},{default:w(()=>[e.text?(r(),i("div",{key:0,class:"text-sm mr-1",style:D({color:e.getTextColor()||"auto"})},[S(e.$slots,"default",{},()=>[k(B(e.text),1)])],4)):y("",!0),e.icon?(r(),s(l,{key:1,type:e.icon,color:e.getIconColor()},null,8,["type","color"])):(r(),i(A,{key:2},[e.type===e.TrendDirection.Up?(r(),s(l,{key:0,type:e.bold?"ArrowUpBold":"ArrowUp",color:e.trendsColors[0]?e.trendsColors[0]:"red"},null,8,["type","color"])):e.type===e.TrendDirection.Down?(r(),s(l,{key:1,type:e.bold?"ArrowDownBold":"ArrowDown",color:e.trendsColors[2]?e.trendsColors[2]:"green"},null,8,["type","color"])):e.type===e.TrendDirection.Equal?(r(),s(l,{key:2,type:e.bold?"SemiSelect":"Minus",color:e.trendsColors[1]?e.trendsColors[1]:"gray"},null,8,["type","color"])):y("",!0)],64))]),_:3},8,["class"])}var h=g(U,[["render",q]]);export{h as _};