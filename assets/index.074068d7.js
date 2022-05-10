import{_ as Q}from"./BasicTable.11d57688.js";import{e as U,f as m,G as z,_ as S,bN as w,dJ as M,o as k,g as B,w as t,a as E,b as o,h as _,E as A,X as P,B as L,aR as K,dG as q,r as T,c as G,t as Y,aN as Z,F as x,M as H,U as J,W,x as ee,b2 as oe,m as te,dM as ne,dN as ae,dO as le}from"./index.53af384c.js";import{E as X}from"./el-pagination.904c5c28.js";import{a as se,b as ue,s as re,c as de,A as ie,e as ce,g as me,h as pe,i as fe,j as _e}from"./AddOrEditUser.3df769a9.js";import{E as ge}from"./el-tree.3d23c208.js";import"./el-checkbox.da74eb71.js";import{E as he}from"./el-dialog.787bf24d.js";import{_ as De}from"./BasicForm.a31750ec.js";import{v as Ce}from"./el-loading.7a30e6f2.js";import{E as ve,a as ye}from"./el-table-column.40a87e9b.js";import{E as Fe}from"./el-popconfirm.9f9303df.js";/* empty css                   */import{E as O}from"./index2.38edfe0b.js";import"./el-card.31bb5b17.js";import"./el-image-viewer.cd3cb519.js";/* empty css                */import"./el-progress.a296839d.js";import"./index2.a498e374.js";/* empty css                       *//* empty css                 */import"./el-upload.446aedd6.js";import"./index.cf99b79d.js";import"./depart.0f10d426.js";import"./index2.97baf247.js";import"./index2.fee3980f.js";import"./el-col.f85eae11.js";import"./el-cascader-panel.7bab26db.js";import"./index2.a9955ed4.js";import"./date-utils2.4071b631.js";import"./index2.100075ee.js";import"./index2.18d86acc.js";import"./index2.e569d408.js";import"./index2.fb0db8a2.js";let j=[];const Ee=U({props:{showDrawer:{type:Boolean,default:!1},defaultKeys:{type:Array,default:()=>[]},roleId:{type:String,default:""}},emits:["onConfirm","close"],setup(e,n){let f=m([]);const l={children:"children",label:"name",value:"id"},g=m(!1);function v(){e.showDrawer&&n.emit("close")}function i(){n.emit("close")}const u=m([]),r=(c,F)=>{u.value=F.checkedKeys};(()=>{se().then(c=>{f.value=c==null?void 0:c.data})})();const D=()=>{e.roleId,ue(e.roleId).then(c=>{a(c.data)})},a=c=>{j=[...c],u.value=c},p=c=>{let F={roleId:e.roleId,lastPermissionIds:j.join(","),permissionIds:u.value.join(",")};g.value=!0,re(F).then(y=>{g.value=!1,y.code===0||w({message:`${y.message}`,type:"error"}),c&&v()})};return z(()=>e.roleId,()=>{e.showDrawer&&D()}),{defaultProps:l,checkedKeys:u,treeData:f,btnLoading:g,cancelClick:i,onClose:v,onCheck:r,saveInfo:p}}}),be=E("h4",{class:"divide-y divide-gray-500/50"},"\u89D2\u8272\u6743\u9650\u914D\u7F6E",-1),we={style:{"min-height":"360px"}},ke={style:{flex:"auto"}},$e=_("\u53D6\u6D88"),Ie=_("\u4EC5\u4FDD\u5B58"),Be=_("\u4FDD\u5B58\u5E76\u5173\u95ED");function Re(e,n,f,l,g,v){const i=ge,u=A,r=M;return k(),B(r,{"model-value":e.showDrawer,direction:"rtl",onClose:e.onClose},{title:t(()=>[be]),footer:t(()=>[E("div",ke,[o(u,{onClick:e.cancelClick},{default:t(()=>[$e]),_:1},8,["onClick"]),o(u,{type:"primary",loading:e.btnLoading,onClick:n[0]||(n[0]=d=>e.saveInfo(!1))},{default:t(()=>[Ie]),_:1},8,["loading"]),o(u,{type:"primary",loading:e.btnLoading,onClick:n[1]||(n[1]=d=>e.saveInfo(!0))},{default:t(()=>[Be]),_:1},8,["loading"])])]),default:t(()=>[E("div",we,[o(i,{data:e.treeData,props:e.defaultProps,"node-key":"id","default-checked-keys":e.checkedKeys,"show-checkbox":"","default-expand-all":"",onCheck:e.onCheck},null,8,["data","props","default-checked-keys","onCheck"])])]),_:1},8,["model-value","onClose"])}var Ne=S(Ee,[["render",Re]]);const Te=U({props:{showDialog:{type:Boolean,default:!1},role:{type:Object,default:()=>null},isEdit:{type:Boolean,default:!1}},emits:["success","close"],setup(e,{emit:n}){const f=m(!1),l=P({id:"",roleCode:"",roleName:"",createTime:"",description:"",createBy:"",updateBy:"",updateTime:""}),g=m(!1);let v=m([]);const i=()=>{g.value=!1;let a=[{component:"input",value:l.roleCode,label:"\u89D2\u8272\u7F16\u7801",prop:"roleCode",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u7801",trigger:"blur"}],attrs:{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u7F16\u7801",disabled:!!e.isEdit}},{component:"input",value:l.roleName,label:"\u89D2\u8272\u540D\u79F0",prop:"roleName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0",trigger:"blur"}],attrs:{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"}},{component:"input",label:"\u63CF\u8FF0",prop:"description",value:l.description,attrs:{type:"textarea",placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u63CF\u8FF0"}}];v.value=[...a],setTimeout(()=>{g.value=!0},50)};i();const u=()=>{n("close")},r=()=>{},d=(a,p)=>{!a||a.validate(c=>{if(c)l.roleName=p.roleName,l.description=p.description,l.roleCode=p.roleCode,D();else return!1})},D=()=>{f.value=!0;const a={roleCode:l.roleCode,roleName:l.roleName,description:l.description};e.isEdit&&(a.id=l.id||"",a.createTime=l.createTime||"",a.createBy=l.createBy||""),de(a,e.isEdit).then(p=>{f.value=!1,p.code==200?(w({message:`${p.message}`,type:"success"}),n("success")):(u(),w({message:`${p.message}`,type:"error"}))}).catch(()=>{f.value=!1,u(),w({message:"\u64CD\u4F5C\u5931\u8D25",type:"error"})})};return z(()=>e.role,a=>{e.showDialog&&(l.roleCode=a.roleCode||"",l.roleName=a.roleName||"",l.description=a.description||"",l.id=a.id||"",l.createTime=a.createTime||"",l.createBy=a.createBy||"",l.updateBy=a.updateBy||"",l.updateTime=a.updateTime||"",i())},{immediate:!0}),{formBasicSchema:v,loading:f,isLoadedForm:g,submitForm:d,opened:r,close:u}}}),Ue={class:"dialog-footer flex justify-end"},Se=_("\u53D6\u6D88"),Ae=_("\u786E\u8BA4");function Ve(e,n,f,l,g,v){const i=A,u=De,r=he;return k(),B(r,{"model-value":e.showDialog,title:e.isEdit?"\u7F16\u8F91":"\u65B0\u589E",center:"",onClose:e.close,onOpened:e.opened},{default:t(()=>[e.isLoadedForm?(k(),B(u,{key:0,schemas:e.formBasicSchema},{action:t(({form:d,model:D})=>[E("span",Ue,[o(i,{onClick:e.close},{default:t(()=>[Se]),_:1},8,["onClick"]),o(i,{type:"primary",loading:e.loading,onClick:a=>e.submitForm(d,D)},{default:t(()=>[Ae]),_:2},1032,["loading","onClick"])])]),_:1},8,["schemas"])):L("",!0)]),_:1},8,["model-value","title","onClose","onOpened"])}var Pe=S(Te,[["render",Ve]]);const Oe=U({components:{AddOrEditUser:ie},props:{show:{type:Boolean,default:!1},roleId:{type:String,default:""}},emits:["close"],setup(e,n){const f=P({username:"",realname:"",departName:""}),l=m({}),g=m(!1),v=m(!1),i=m([]),u=m([]),r=m(0),d=P({pageNo:1,pageSize:10,roleId:e.roleId,realname:"",departName:"",username:""}),D=()=>{O.confirm("\u662F\u5426\u53D6\u6D88\u5173\u8054\u9009\u4E2D\u6570\u636E?","\u786E\u8BA4\u53D6\u6D88\u5173\u8054",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{let s=i.value.map(h=>h.id);const b={roleId:e.roleId,userIds:s.join(",")};p(b)})},a=s=>{const b={roleId:e.roleId,userIds:s.id};p(b)},p=s=>{ce(s).then(b=>{b.code===0?(w({type:"success",message:"\u53D6\u6D88\u6210\u529F"}),c()):w({type:"error",message:b.message})})},c=()=>{d.pageNo=1,d.pageSize=10,F()},F=()=>{d.roleId=e.roleId,d.username=f.username,d.departName="*"+f.departName+"*",d.realname="*"+f.realname+"*",g.value=!0,me(d).then(s=>{u.value=s.data.records,g.value=!1,r.value=s.data.total})},y=s=>{d.pageNo=s,F()},$=()=>{f.username=""},C=s=>{i.value=s},I=s=>{s?l.value=s:l.value={},v.value=!0},R=()=>{n.emit("close")};return z(()=>e.roleId,()=>{c()},{immediate:!0}),{Search:K,Refresh:q,userInfo:l,loading:g,formInline:f,tableData:u,tableTotal:r,formData:d,multipleSelection:i,showAddEditRoleUser:v,onAddOrEditUser:I,handleSelectionChange:C,handleCurrentChange:y,confirmDelEvent:a,onSubmit:c,onDelUser:D,onRestForm:$,onClose:R}}}),ze={class:"divide-y divide-gray-500/50"},Le={class:"overflow-auto",style:{"max-height":"700px",width:"100%"}},je=_("\u67E5\u8BE2"),Me=_("\u91CD\u7F6E"),Ke=_("\u65B0\u589E\u7528\u6237"),qe=_("\u53D6\u6D88\u5173\u8054"),Ge=_("\u7F16\u8F91"),He=_("\u53D6\u6D88\u5173\u8054"),Je={class:"mt-4 flex justify-end"};function We(e,n,f,l,g,v){const i=H,u=J,r=A,d=W,D=ve,a=Fe,p=ye,c=X,F=M,y=T("add-or-edit-user"),$=Ce;return k(),G(x,null,[o(F,{"model-value":e.show,direction:"rtl",size:"930px",onClose:e.onClose},{title:t(()=>[E("h4",ze,"\u89D2\u8272\u7528\u6237\u3010"+Y(e.roleId)+"\u3011",1)]),default:t(()=>[E("div",Le,[o(d,{inline:!0,model:e.formInline,class:"demo-form-inline"},{default:t(()=>[o(u,{label:"\u7528\u6237\u8D26\u53F7"},{default:t(()=>[o(i,{modelValue:e.formInline.username,"onUpdate:modelValue":n[0]||(n[0]=C=>e.formInline.username=C),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u8D26\u53F7"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u7528\u6237\u59D3\u540D"},{default:t(()=>[o(i,{modelValue:e.formInline.realname,"onUpdate:modelValue":n[1]||(n[1]=C=>e.formInline.realname=C),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u8D26\u53F7"},null,8,["modelValue"])]),_:1}),o(u,{label:"\u6240\u5C5E\u90E8\u95E8"},{default:t(()=>[o(i,{modelValue:e.formInline.departName,"onUpdate:modelValue":n[2]||(n[2]=C=>e.formInline.departName=C),placeholder:"\u8BF7\u8F93\u5165\u6240\u5C5E\u90E8\u95E8"},null,8,["modelValue"])]),_:1}),o(u,null,{default:t(()=>[o(r,{type:"primary",icon:e.Search,onClick:e.onSubmit},{default:t(()=>[je]),_:1},8,["icon","onClick"]),o(r,{icon:e.Refresh,onClick:e.onRestForm},{default:t(()=>[Me]),_:1},8,["icon","onClick"]),o(r,{type:"primary",onClick:n[3]||(n[3]=C=>e.onAddOrEditUser(null))},{default:t(()=>[Ke]),_:1}),e.multipleSelection.length>0?(k(),B(r,{key:0,onClick:e.onDelUser},{default:t(()=>[qe]),_:1},8,["onClick"])):L("",!0)]),_:1})]),_:1},8,["model"]),Z((k(),B(p,{ref:"multipleTableRef",data:e.tableData,style:{width:"100%"},border:"",align:"center",onSelectionChange:e.handleSelectionChange},{default:t(()=>[o(D,{type:"selection",width:"55"}),o(D,{property:"username",label:"\u7528\u6237\u8D26\u53F7",align:"center"}),o(D,{property:"realname",label:"\u7528\u6237\u59D3\u540D",align:"center"}),o(D,{property:"departIds_dictText",label:"\u90E8\u95E8",align:"center"}),o(D,{property:"status_dictText",label:"\u72B6\u6001",width:"80",align:"center"}),o(D,{label:"\u64CD\u4F5C",width:"120",align:"center"},{default:t(C=>[o(r,{type:"text",size:"small",onClick:I=>e.onAddOrEditUser(C.row)},{default:t(()=>[Ge]),_:2},1032,["onClick"]),o(a,{title:"\u662F\u5426\u786E\u8BA4\u53D6\u6D88\u5173\u8054?","confirm-button-text":"\u786E\u8BA4","cancel-button-text":"\u53D6\u6D88",onConfirm:I=>e.confirmDelEvent(C.row)},{reference:t(()=>[o(r,{type:"text",size:"small"},{default:t(()=>[He]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data","onSelectionChange"])),[[$,e.loading]]),E("div",Je,[o(c,{currentPage:e.formData.pageNo,"onUpdate:currentPage":n[4]||(n[4]=C=>e.formData.pageNo=C),background:"","page-size":e.formData.pageSize,layout:"prev, pager, next",total:e.tableTotal,onCurrentChange:e.handleCurrentChange},null,8,["currentPage","page-size","total","onCurrentChange"])])])]),_:1},8,["model-value","onClose"]),o(y,{ref:"addOrEditUserRef",show:e.showAddEditRoleUser,user:e.userInfo,"role-id":e.roleId,onClose:n[5]||(n[5]=C=>e.showAddEditRoleUser=!1)},null,8,["show","user","role-id"])],64)}var Xe=S(Oe,[["render",We],["__scopeId","data-v-64da9b92"]]);const Qe=U({components:{HasRole:Ne,AddRole:Pe,RoleUser:Xe},setup(){const e=m(),n=m(0),f=m([]),l=m(""),g=m(!0),v=m(!1),i=m(!1),u=m(!1),r=m(!1),d=m({id:""}),D=[{type:"selection",align:"center"},{label:"\u89D2\u8272\u7F16\u7801",prop:"roleCode",align:"center"},{label:"\u89D2\u8272\u540D\u79F0",prop:"roleName",align:"center"},{label:"\u521B\u5EFA\u65F6\u95F4",prop:"createTime",align:"center",attrs:{sortable:!0}},{label:"\u64CD\u4F5C",slot:"action",align:"center"}],a=m({pageNo:1,pageSize:10,roleName:"",column:"createTime",order:"desc"}),p=h=>{a.value.pageNo=h,y()},c=()=>{a.value.pageNo=1,y()},F=()=>{a.value.pageNo=1,a.value.roleName=""},y=()=>{g.value=!0,pe(a.value).then(h=>{g.value=!1,h.code===0?(f.value=h.data.records,n.value=h.data.total):w.error(h.message)})};y();const $=()=>{d.value={id:""},r.value=!1,i.value=!0},C=()=>{y()},I=h=>{l.value=h.id,u.value=!0},R=h=>{switch(h.index){case 0:h.row,v.value=!0;break;case 1:d.value=h.row,r.value=!0,i.value=!0,h.row;break;case 2:h.row,O.confirm("\u786E\u5B9A\u5220\u9664\u5417\uFF1F","\u6E29\u99A8\u63D0\u793A").then(()=>{fe({id:h.row.id}).then(V=>{w({message:`${V.message}`,type:"error"})})}).catch(()=>{});break}},s=()=>{O.confirm("\u662F\u5426\u5220\u9664\u9009\u4E2D\u6570\u636E?","\u786E\u8BA4\u5220\u9664",{confirmButtonText:"\u786E\u8BA4",cancelButtonText:"\u53D6\u6D88",type:"warning"}).then(()=>{const V={roleIds:b.value.map(N=>N.id).join(",")};_e(V).then(N=>{N.code===0?(w({message:`${N.message}`,type:"success"}),y()):w({message:`${N.message}`,type:"error"})})})},b=ee(()=>e.value?e.value.getSelectionRows()||[]:[]);return{Search:K,Refresh:q,Delete:oe,checkedKeys:b,loading:g,tableRef:e,formData:a,tableTotal:n,columns:D,tableData:f,roleId:l,showDrawer:v,showRoleUser:u,showDialog:i,isEdit:r,editRoleInfo:d,handleCurrentChange:p,addRole:$,onDelRole:s,addOrUpdateRoleSuccess:C,getTableList:y,findUser:I,handleMoreCommand:R,onGetTableData:c,onRestForm:F}}}),Ye={class:"p-4"},Ze={class:"mb-2"},xe=_("\u67E5\u8BE2"),eo=_("\u91CD\u7F6E"),oo=_("\u6279\u91CF\u5220\u9664"),to={class:"flex mb-2"},no=_(" \u65B0\u589E\u89D2\u8272"),ao=_("\u7528\u6237"),lo={class:"el-dropdown-link ml-2"},so=_("\u66F4\u591A"),uo=_("\u6388\u6743"),ro=_("\u7F16\u8F91"),io=_("\u5220\u9664"),co={class:"mt-4 flex justify-end"};function mo(e,n,f,l,g,v){const i=H,u=J,r=A,d=W,D=T("arrow-down"),a=te,p=ne,c=ae,F=le,y=X,$=Q,C=T("has-role"),I=T("add-role"),R=T("role-user");return k(),G("div",Ye,[o($,{ref:"tableRef",border:!0,data:e.tableData,columns:e.columns,loading:e.loading,"default-sort":{prop:"date"}},{header:t(()=>[E("div",Ze,[o(d,{inline:!0,model:e.formData,class:"demo-form-inline"},{default:t(()=>[o(u,{label:"\u89D2\u8272\u540D\u79F0"},{default:t(()=>[o(i,{modelValue:e.formData.roleName,"onUpdate:modelValue":n[0]||(n[0]=s=>e.formData.roleName=s),placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D\u79F0"},null,8,["modelValue"])]),_:1}),o(u,null,{default:t(()=>[o(r,{type:"primary",icon:e.Search,onClick:e.onGetTableData},{default:t(()=>[xe]),_:1},8,["icon","onClick"]),o(r,{icon:e.Refresh,onClick:e.onRestForm},{default:t(()=>[eo]),_:1},8,["icon","onClick"]),e.checkedKeys.length>0?(k(),B(r,{key:0,icon:e.Delete,type:"danger",onClick:e.onDelRole},{default:t(()=>[oo]),_:1},8,["icon","onClick"])):L("",!0)]),_:1})]),_:1},8,["model"])]),E("div",to,[o(r,{type:"primary",icon:"Plus",onClick:e.addRole},{default:t(()=>[no]),_:1},8,["onClick"])])]),action:t(({row:s})=>[o(r,{type:"text",onClick:b=>e.findUser(s)},{default:t(()=>[ao]),_:2},1032,["onClick"]),o(F,{onCommand:e.handleMoreCommand},{dropdown:t(()=>[o(c,null,{default:t(()=>[o(p,{command:{index:0,row:s}},{default:t(()=>[uo]),_:2},1032,["command"]),o(p,{command:{index:1,row:s}},{default:t(()=>[ro]),_:2},1032,["command"]),o(p,{command:{index:2,row:s}},{default:t(()=>[io]),_:2},1032,["command"])]),_:2},1024)]),default:t(()=>[E("span",lo,[o(r,{type:"text"},{default:t(()=>[so,o(a,{class:"el-icon--right"},{default:t(()=>[o(D)]),_:1})]),_:1})])]),_:2},1032,["onCommand"])]),"footer-with-pagination":t(()=>[E("div",co,[o(y,{currentPage:e.formData.pageNo,"onUpdate:currentPage":n[1]||(n[1]=s=>e.formData.pageNo=s),background:"","page-size":e.formData.pageSize,layout:"prev, pager, next",total:e.tableTotal,onCurrentChange:e.handleCurrentChange},null,8,["currentPage","page-size","total","onCurrentChange"])])]),_:1},8,["data","columns","loading"]),o(C,{"show-drawer":e.showDrawer,"role-id":e.roleId,onClose:n[2]||(n[2]=s=>e.showDrawer=!1)},null,8,["show-drawer","role-id"]),o(I,{"show-dialog":e.showDialog,"is-edit":e.isEdit,role:e.editRoleInfo,onClose:n[3]||(n[3]=s=>e.showDialog=!1),onSuccess:e.addOrUpdateRoleSuccess},null,8,["show-dialog","is-edit","role","onSuccess"]),o(R,{show:e.showRoleUser,"role-id":e.roleId,onClose:n[4]||(n[4]=s=>e.showRoleUser=!1)},null,8,["show","role-id"])])}var Ho=S(Qe,[["render",mo],["__scopeId","data-v-1ca180d0"]]);export{Ho as default};
