(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),o=n(4),s=n.n(o),l=(n(9),n(2)),r=n(0),d=function(t){var e=Object(i.useState)(""),n=Object(l.a)(e,2),c=n[0],o=n[1],s=Object(i.useState)(""),d=Object(l.a)(s,2),u=d[0],a=d[1],f=Object(i.useState)(""),h=Object(l.a)(f,2),j=h[0],b=(h[1],Object(i.useState)("")),p=Object(l.a)(b,2),O=(p[0],p[1],Object(i.useState)("")),x=Object(l.a)(O,2),g=x[0];x[1];return Object(r.jsxs)("div",{children:["Todo description",Object(r.jsx)("input",{type:"text",value:c,onChange:function(t){o(t.target.value),console.log("description",c)},style:{fontSize:"20px",margin:"20px"}}),Object(r.jsx)("br",{}),"deadline",Object(r.jsx)("input",{type:"date",value:u,onChange:function(t){a(t.target.value),console.log("deadline",u)},style:{fontSize:"20px",margin:"80px"}}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){var e=JSON.stringify(new Date);t.setShifts((function(t){return t.concat({description:c,deadline:u,completed:j,id:e,editMode:g})}))},style:{margin:"8px",padding:"10px",fontSize:"20px"},children:"Add todo"})]})},u=function(t){return Object(r.jsxs)("li",{className:"myList",children:[Object(r.jsxs)("label",{style:{textDecoration:t.shift.completed?"line-through":null,display:t.shift.editMode?"none":"inline-block"},children:[t.shift.description," \xa0 | \xa0",t.shift.deadline,"\xa0"]}),Object(r.jsx)("input",{type:"text",style:{display:t.shift.editMode?"inline-block":"none"},value:t.shift.description,onChange:function(e){return n=e.target.value,console.log("editTodo"),console.log(n),t.shift.description=n,void t.setShifts((function(t){return t.filter((function(t){return t}))}));var n}}),Object(r.jsx)("input",{type:"checkbox",onClick:function(e){console.log("selectCheckBox"),console.log(t.shift.completed),t.shift.completed=!t.shift.completed,t.setShifts((function(t){return t.filter((function(t){return t}))}))}}),Object(r.jsx)("button",{onClick:function(){t.setShifts((function(e){return e.filter((function(e){return e.id!==t.shift.id}))}))},children:"Delete"}),Object(r.jsx)("button",{style:{display:t.shift.editMode?"none":"inline-block"},onClick:function(){console.log("onEdit"),console.log(t.shift.editMode),t.shift.editMode=!0,t.setShifts((function(t){return t.filter((function(t){return t}))}))},children:"Edit"}),Object(r.jsx)("button",{style:{display:t.shift.editMode?"inline-block":"none"},onClick:function(){console.log("onUpdate"),console.log(t.shift.editMode),t.shift.editMode=!1,t.setShifts((function(t){return t.filter((function(t){return t}))}))},children:"Update"})]})},a=function(t){var e=t.children;return Object(r.jsx)("div",{className:"blackBorder",children:e})},f=function(t){var e=Object(i.useCallback)((function(){fetch("https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw").then((function(t){return t.json()})).then((function(e){console.log(e),e.map((function(e){console.log(e),t.setShifts((function(t){return t.concat({description:e.description,deadline:e.deadline,completed:!1,id:e.id,editMode:!1})}))}))}))}),[]);return Object(i.useEffect)((function(){e()}),[e]),Object(r.jsx)(r.Fragment,{})};n(11);var h=function(){var t=Object(i.useState)([]),e=Object(l.a)(t,2),n=e[0],c=e[1];return console.log(n),Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)("h1",{children:"Todolist"}),Object(r.jsx)(d,{setShifts:c,shifts:n}),Object(r.jsx)(f,{setShifts:c,shifts:n}),n.map((function(t){return Object(r.jsx)("div",{children:Object(r.jsx)(a,{children:Object(r.jsx)(u,{setShifts:c,shift:t})})})}))]})})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),i(t),c(t),o(t),s(t)}))};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),j()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.8bd4bcce.chunk.js.map