(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(e,t,a){e.exports=a(203)},203:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),u=a.n(s),i=a(54),l=a(25),c=a(30),o=a(40),d=a(41),p=a(43),m=a(42),h=a(44),f=a(59),v="STORE_INIDATA",g="ADD_TAGS",y="REMOVE_TAGS";var b=a(208),E=a(206),O=a(10),j=(a(82),a(61),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={tags:[],inputVisible:!1,inputValue:""},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=a.state,t=e.inputValue,n=e.tags,r=a.props.studentId;t&&-1===n.indexOf(t)&&(a.props.dispatch(function(e){var t=e.inputValue,a=e.id;return{type:g,inputValue:t,id:a}}({inputValue:t,id:r})),a.setState({tags:[].concat(Object(f.a)(n),[t]),inputVisible:!1,inputValue:""}))},a.handleClose=function(e){var t=a.state.tags.filter(function(t){return t!==e}),n=a.props.studentId;a.setState({tags:t}),a.props.dispatch(function(e,t){return{type:y,removedTag:e,id:t}}(e,n))},a.showInput=function(){a.setState({inputVisible:!0},function(){return a.input.focus()})},a.saveInputRef=function(e){return a.input=e},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.inputVisible,n=t.inputValue,s=this.props.tags,u=this.props.studentId,i=s.map(function(t){return r.a.createElement("span",{key:t,style:{display:"inline-block"}},r.a.createElement(b.a,{closable:!0,onClose:function(a){a.preventDefault(),e.handleClose(t)}},t))});return r.a.createElement("div",{key:u},r.a.createElement("div",{style:{marginBottom:16}},i),a&&r.a.createElement(E.a,{ref:this.saveInputRef,type:"text",size:"small",style:{width:100},value:n,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!a&&r.a.createElement("div",{onClick:this.showInput,style:{background:"#fff",width:100,borderBlockEnd:"solid"}},r.a.createElement(O.a,{type:"plus"})," Add Tag"))}}]),t}(n.Component)),w=j=Object(l.b)(function(e,t){return{tags:e.students[t.studentId].tags}},null)(j),C=a(207),I=a(205),D=a(45),k=a(17),S=a(204),N=C.a.Panel;function q(e){}var V=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={expandIconPosition:"right"},a.onPositionChange=function(e){a.setState({expandIconPosition:e})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.student,t=e.id,a=e.pic,n=e.firstName,s=e.lastName,u=e.email,i=e.company,l=e.skill,c=e.grades,o=c.reduce(function(e,t){return parseInt(e,10)+parseInt(t,10)},0)/c.length;return r.a.createElement("div",{style:{background:"#ECECEC"},key:t},r.a.createElement(I.a,{bordered:!0},r.a.createElement(D.a,null,r.a.createElement(k.a,{span:4},r.a.createElement("div",{className:"student-avatar"},r.a.createElement(S.a,{size:70,src:a}))),r.a.createElement(k.a,{span:18},r.a.createElement("div",{className:"student-details"},r.a.createElement("p",{className:"student-name"},n," ",s),r.a.createElement("p",null,"Email: ",u),r.a.createElement("p",null,"Company: ",i),r.a.createElement("p",null,"Skill: ",l),r.a.createElement("p",null,"Average: ",o,"%"),r.a.createElement(C.a,{onChange:q,expandIconPosition:this.state.expandIconPosition,expandIcon:function(e){var t=e.isActive;return r.a.createElement(O.a,{type:"plus",rotate:t?90:0})}},r.a.createElement(N,null,c.map(function(e,t){return r.a.createElement("p",null,"Test",t+1,":  ",e)}),r.a.createElement(w,{studentId:t}))))))))}}]),t}(n.Component),T=V=Object(l.b)(function(e){return{initialData:e.students}},null)(V),x=a(116),A=a.n(x),L=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={FormatData:{},isLoading:!0,error:null,queryName:"",queryTag:"",queryData:[]},a.handleQuerySearch=function(e){e.preventDefault(),a.setState(Object(c.a)({},e.target.name,e.target.value));var t=e.target.value,n=a.props.initialData;"queryName"===e.target.name&&0!==t&&(console.log("event.target.value",t),n=Object.values(n).filter(function(e){return-1!==e.firstName.toLowerCase().search(t.toLowerCase())||-1!==e.lastName.toLowerCase().search(t.toLowerCase())}),a.setState({queryData:n}),console.log("queryData",a.state.queryData)),"queryTag"===e.target.name&&0!==t&&(n=Object.values(n).filter(function(e){return-1!==e.tags.join().toLowerCase().search(t.toLowerCase())}),a.setState({queryData:n}))},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;A.a.get("https://www.hatchways.io/api/assessment/students").then(function(t){var a=t.data.students.map(function(e){return Object.assign({},e,{tags:[]})}),n=e.formatData(a);return e.setState({FormatData:n,isLoading:!1}),n}).then(function(t){return e.props.dispatch({type:v,data:t})})}},{key:"formatData",value:function(e){var t={},a=!0,n=!1,r=void 0;try{for(var s,u=e[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var i=s.value;t[i.id]=i}}catch(l){n=!0,r=l}finally{try{a||null==u.return||u.return()}finally{if(n)throw r}}return t}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.queryTag,n=e.queryName,s=e.queryData,u=this.props.initialData;return t?t.message:u?r.a.createElement("div",null,r.a.createElement("div",{className:"search-student"},r.a.createElement("div",{className:"search-bar"},r.a.createElement("div",{className:"search-input-wrapper"},r.a.createElement("input",{type:"text",name:"queryName",placeholder:"Search by name",onChange:this.handleQuerySearch,value:n})),r.a.createElement("div",{className:"search-input-wrapper"},r.a.createElement("input",{type:"text",name:"queryTag",placeholder:"Search by Tag",onChange:this.handleQuerySearch,value:a})))),r.a.createElement("div",{className:"student-list"},0===n.length&&0===a.length?Object.values(u).map(function(e,t){return r.a.createElement(T,{student:e,key:t})}):Object.values(s).map(function(e,t){return r.a.createElement(T,{student:e,key:t})}))):r.a.createElement("h3",null,"Loading...")}}]),t}(n.Component),P=L=Object(l.b)(function(e){return{initialData:e.students}},null)(L),B=a(27);var R=Object(i.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(B.a)({},e,{students:t.data});case g:return Object(B.a)({},e,{students:Object(B.a)({},e.students,Object(c.a)({},t.id,Object(B.a)({},e.students[t.id],{tags:[].concat(Object(f.a)(e.students[t.id].tags),[t.inputValue])})))});case y:return Object(B.a)({},e,{students:Object(B.a)({},e.students,Object(c.a)({},t.id,Object(B.a)({},e.students[t.id],{tags:e.students[t.id].tags.filter(function(e){return e!==t.removedTag})})))});default:return e}});u.a.render(r.a.createElement(l.a,{store:R},r.a.createElement(P,null)),document.getElementById("root"))},61:function(e,t,a){}},[[120,1,2]]]);
//# sourceMappingURL=main.1b4f52b5.chunk.js.map