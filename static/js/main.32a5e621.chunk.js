(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(17),i=n.n(a),o=(n(25),n(18)),l=n(2),r=(n(26),n(27),n(1)),u=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){window.location.href="/userProfile"},className:"style-user-name",children:"".concat(e.firstName," ").concat(e.secoundName)})})},d=function(e){return Object(r.jsx)("div",{className:"style-container",children:e.list.map((function(e){return Object(r.jsx)(u,{firstName:e.firstName,secoundName:e.secoundName})}))})},j=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(d,{list:[{firstName:"\u041c\u0430\u043a\u0441\u0438\u043c",secoundName:"\u041a\u0430\u043b\u0438\u043d",data:{}},{firstName:"TEST1",secoundName:"TEST1-",data:{}},{firstName:"TEST2",secoundName:"TEST2-",data:{}},{firstName:"TEST3",secoundName:"TEST3-",data:{}},{firstName:"TEST4",secoundName:"TEST4-",data:{}},{firstName:"TEST5",secoundName:"TEST5-",data:{}}]})})},f=n(20),b=n(11),m=(n(29),function(e){var t=Object(c.useState)((null===e||void 0===e?void 0:e.fieldName)||""),n=Object(b.a)(t,2),s=n[0],a=n[1],i=Object(c.useState)((null===e||void 0===e?void 0:e.fieldName)||""),o=Object(b.a)(i,2),l=o[0],u=o[1],d=Object(c.useState)(!1),j=Object(b.a)(d,2),f=j[0],m=j[1],N=function(){m(!1)},O=function(){m(!f)};return Object(r.jsxs)("div",{className:"style-container",children:[Object(r.jsx)("input",{style:{display:f?"block":"none"},onBlur:O,className:"style-setFieldName",type:"text",value:s,onChange:function(e){a(e.currentTarget.value)}}),Object(r.jsxs)("div",{className:"style-field-container",children:[Object(r.jsx)("div",{className:"style-containerName",onClick:O,children:s}),Object(r.jsx)("input",{className:"style-fieldContent",type:"text",value:l,onChange:function(e){u(e.currentTarget.value)},onClick:N}),Object(r.jsx)("button",{className:"style-clearBtn",onClick:function(){e.deleteInput(e.id),u(""),N()},children:"X"})]})]})}),N=(n(30),function(e){return Object(r.jsx)("div",{className:"style-container",children:[].concat(Object(f.a)(e.exercisesListObj.map((function(e){return Object(r.jsx)(m,{fieldName:e.fieldName,fieldContent:e.fieldContent,id:0,deleteInput:function(){}})}))),[Object(r.jsx)("button",{className:"style-control-btn",children:"\u0414\u041e\u0411\u0410\u0412\u0418\u0422\u042c \u041f\u041e\u041b\u0415"}),Object(r.jsx)("button",{className:"style-control-btn",children:"\u0421\u041e\u0425\u0420\u0410\u041d\u0418\u0422\u042c"})])})}),O=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(N,{exercisesListObj:[{fieldName:"1",fieldContent:"1"},{fieldName:"2",fieldContent:"2"},{fieldName:"3",fieldContent:"3"},{fieldName:"4",fieldContent:"4"}]})})},x=(n(31),function(){return Object(r.jsxs)("div",{onClick:function(){window.location.href="/usersList"},className:"style-auth-page-container",children:[Object(r.jsx)("span",{children:"\u0410\u0412\u0422\u041e\u0420\u0418\u0417\u0423\u0419\u0422\u0415\u0421\u042c \u0427\u0415\u0420\u0415\u0417 \u0412\u041a: "}),Object(r.jsx)("button",{className:"style-icon-vk"})]})}),h=(n(32),function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"style-user-name-text",children:"".concat(e.firstName," ").concat(e.secoundName)}),Object(r.jsx)("button",{className:"style-btn-back"}),Object(r.jsx)("button",{className:"style-btn-exit"})]})});var p=function(){return Object(r.jsxs)(o.a,{children:[Object(r.jsx)(h,{firstName:"\u041c\u0430\u043a\u0441\u0438\u043c",secoundName:"\u041a\u0430\u043b\u0438\u043d"}),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l.a,{path:"/auth",component:x}),Object(r.jsx)(l.a,{path:"/usersList",component:j}),Object(r.jsx)(l.a,{path:"/userProfile",component:O})]})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),v()}},[[38,1,2]]]);
//# sourceMappingURL=main.32a5e621.chunk.js.map