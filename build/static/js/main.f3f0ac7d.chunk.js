(this.webpackJsonpuser_manage=this.webpackJsonpuser_manage||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),r=n.n(s),i=n(9),a=n.n(i),c=(n(14),n(2)),o=n(3),l=n(5),u=n(4),d=(n(15),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"jumbotron jumbotron-fluid",children:Object(d.jsxs)("div",{className:"container text-center",children:[Object(d.jsx)("h1",{className:"display-3",children:"Project qu\u1ea3n l\xfd th\xe0nh vi\xean b\u1eb1ng React js"}),Object(d.jsx)("p",{className:"lead",children:"V\u1edbi d\u1eef li\u1ec7u Jason"}),Object(d.jsx)("hr",{className:"my-2"})]})})}}]),n}(s.Component),j=n(6),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).isChange=function(e){var t=e.target.name,n=e.target.value;s.setState(Object(j.a)({},t,n))},s.saveButton=function(){s.props.changeEditUserStatus();var e={};e.id=s.state.id,e.name=s.state.name,e.tel=s.state.tel,e.permission=s.state.permission,s.props.getUserEditInfo(e)},s.state={id:s.props.userEditObject.id,name:s.props.userEditObject.name,tel:s.props.userEditObject.tel,permission:s.props.userEditObject.permission},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"col-12",children:Object(d.jsx)("form",{children:Object(d.jsxs)("div",{className:"card text-white bg-secondary border-primary mb-3 mt-2",children:[Object(d.jsx)("div",{className:"card-header text-center",children:"S\u1eeda Th\xf4ng Tin User"}),Object(d.jsxs)("div",{className:"card-body text-primary",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"T\xean User"}),Object(d.jsx)("input",{onChange:function(t){return e.isChange(t)},defaultValue:this.props.userEditObject.name,name:"name",type:"text",className:"form-control","aria-describedby":"helpId",placeholder:"T\xean User"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"\u0110i\u1ec7n Tho\u1ea1i"}),Object(d.jsx)("input",{onChange:function(t){return e.isChange(t)},defaultValue:this.props.userEditObject.tel,name:"tel",type:"text",className:"form-control","aria-describedby":"helpId",placeholder:"\u0110i\u1ec7n Tho\u1ea1i"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Ph\xe2n Quy\u1ec1n"}),Object(d.jsxs)("select",{onChange:function(t){return e.isChange(t)},defaultValue:this.props.userEditObject.permission,name:"permission",className:"custom-select",children:[Object(d.jsx)("option",{children:"Ch\u1ecdn Quy\u1ec1n"}),Object(d.jsx)("option",{value:1,children:"Admin"}),Object(d.jsx)("option",{value:2,children:"Moderator"}),Object(d.jsx)("option",{value:3,children:"Normal"})]})]}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{onClick:function(){return e.saveButton()},type:"button",className:"btn btn-block btn-danger",value:"L\u01b0u Th\xf4ng Tin"})})]})]})})})}}]),n}(s.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).isChange=function(e){console.log(e.target.value),s.setState({tempValue:e.target.value}),s.props.checkConnect(s.state.tempValue)},s.hienThiNut=function(){return!0===s.props.hienThiForm?Object(d.jsx)("button",{onClick:s.props.ketnoi,className:"btn btn-block btn-outline-secondary",children:"\u0110\xf3ng L\u1ea1i"}):Object(d.jsx)("button",{onClick:s.props.ketnoi,className:"btn btn-block btn-outline-info",children:"Th\xeam M\u1edbi"})},s.isShowEditForm=function(){if(!0===s.props.editUserStatus)return Object(d.jsx)(m,{getUserEditInfo:function(e){return s.getUserEditInfo(e)},userEditObject:s.props.userEditObject,changeEditUserStatus:function(){return s.props.changeEditUserStatus()}})},s.getUserEditInfo=function(e){s.props.getUserEditInfoForApp(e)},s.state={tempValue:""},s}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"col-12",children:[Object(d.jsx)("div",{className:"row",children:this.isShowEditForm()}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsx)("input",{onChange:function(t){return e.isChange(t)},type:"text",className:"form-control otimkiem",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a"}),Object(d.jsx)("button",{onClick:function(t){return e.props.checkConnect(e.state.tempValue)},className:"btn-info timkiem",children:"T\xecm Ki\u1ebfm"})]}),this.hienThiNut()]})]})}}]),n}(s.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).permissionShow=function(){return 1===e.props.permission?"Admin":2===e.props.permission?"Moderator":"Normal User"},e.editClick=function(){e.props.editFunClick(),e.props.changeEditUserStatus()},e.deleteButtonClick=function(t){e.props.deleteButtonClick(t)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:this.props.stt+1}),Object(d.jsx)("td",{children:this.props.username}),Object(d.jsx)("td",{children:this.props.tel}),Object(d.jsx)("td",{children:this.permissionShow()}),Object(d.jsx)("td",{children:Object(d.jsxs)("div",{className:"btn-group",children:[Object(d.jsxs)("button",{onClick:function(){e.editClick()},className:"btn-warning sua",children:[" ",Object(d.jsx)("i",{className:"fa fa-edit"})," S\u1eeda"]}),Object(d.jsxs)("button",{onClick:function(t){return e.deleteButtonClick(e.props.id)},className:"btn-danger xoa",children:[Object(d.jsx)("i",{className:"fa fa-edit"}),"X\xf3a"]})]})})]})}}]),n}(s.Component),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).deleteButtonClick=function(t){e.props.deleteUser(t)},e.mappingDataUser=function(){return e.props.dataUser.map((function(t,n){return Object(d.jsx)(p,{deleteButtonClick:function(t){return e.deleteButtonClick(t)},changeEditUserStatus:function(){return e.props.changeEditUserStatus()},editFunClick:function(n){return e.props.editFun(t)},id:t.id,stt:n,username:t.name,tel:t.tel,permission:t.permission},n)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"col",children:Object(d.jsxs)("table",{className:"table  table-inverse table-hover",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"STT"}),Object(d.jsx)("th",{children:"T\xean"}),Object(d.jsx)("th",{children:"S\u1ed1 \u0110i\u1ec7n Tho\u1ea1i"}),Object(d.jsx)("th",{children:"Quy\u1ec1n"}),Object(d.jsx)("th",{children:"H\xe0nh \u0110\u1ed9ng"})]})}),Object(d.jsx)("tbody",{children:this.mappingDataUser()})]})})}}]),n}(s.Component),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).isChange=function(e){var t=e.target.name,n=e.target.value;s.setState(Object(j.a)({},t,n));var r={};r.id=s.state.id,r.name=s.state.name,r.tel=s.state.tel,r.permission=s.state.permission},s.kiemTraTrangThai=function(){if(!0===s.props.hienThiForm)return Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("form",{children:Object(d.jsxs)("div",{className:"card border-primary mb-3 mt-2",children:[Object(d.jsx)("div",{className:"card-header",children:"Th\xeam M\u1edbi User v\xe0o h\u1ec7 th\u1ed1ng"}),Object(d.jsxs)("div",{className:"card-body text-primary",children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"T\xean User"}),Object(d.jsx)("input",{onChange:function(e){return s.isChange(e)},name:"name",type:"text",className:"form-control","aria-describedby":"helpId",placeholder:"T\xean User"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"\u0110i\u1ec7n Tho\u1ea1i"}),Object(d.jsx)("input",{onChange:function(e){return s.isChange(e)},name:"tel",type:"text",className:"form-control","aria-describedby":"helpId",placeholder:"\u0110i\u1ec7n Tho\u1ea1i"})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{children:"Ph\xe2n Quy\u1ec1n"}),Object(d.jsxs)("select",{onChange:function(e){return s.isChange(e)},name:"permission",className:"custom-select",children:[Object(d.jsx)("option",{children:"Ch\u1ecdn Quy\u1ec1n"}),Object(d.jsx)("option",{value:1,children:"Admin"}),Object(d.jsx)("option",{value:2,children:"Moderator"}),Object(d.jsx)("option",{value:3,children:"Normal"})]})]}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{type:"reset",onClick:function(e,t,n){return s.props.add(s.state.name,s.state.tel,s.state.permission)},className:"btn btn-block btn-primary",value:"Th\xeam M\u1edbi"})})]})]})})})},s.state={id:"",name:"",tel:"",permission:""},s}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"card text-left",children:this.kiemTraTrangThai()})}}]),n}(s.Component),x=n(8),g=n(19),v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(c.a)(this,n),(s=t.call(this,e)).getNewUserData=function(e,t,n){var r={};r.id=Object(g.a)(),r.name=e,r.tel=t,r.permission=parseInt(n);var i=s.state.data;i.push(r),s.setState({data:i}),localStorage.setItem("userData",JSON.stringify(i))},s.editUser=function(e){console.log("da ket noi"),s.setState({userEditObject:e})},s.doiTrangThai=function(){s.setState({hienThiForm:!s.state.hienThiForm})},s.getTextSearch=function(e){s.setState({searchText:e})},s.changeEditUserStatus=function(){s.setState({editUserStatus:!s.state.editUserStatus})},s.getUserEditInfoForApp=function(e){s.state.data.forEach((function(t,n){t.id===e.id&&(t.name=e.name,t.tel=e.tel,t.permission=parseInt(e.permission))})),localStorage.setItem("userData",JSON.stringify(s.state.data))},s.deleteUser=function(e){var t=s.state.data.filter((function(t){return t.id!==e}));s.setState({data:t}),localStorage.setItem("userData",JSON.stringify(t))},s.state={hienThiForm:!1,data:x,searchText:"",editUserStatus:!1,userEditObject:{}},s}return Object(o.a)(n,[{key:"componentWillMount",value:function(){if(null===localStorage.getItem("userData"))localStorage.setItem("userData",JSON.stringify(x));else{var e;e=JSON.parse(localStorage.getItem("userData")),this.setState({data:e})}}},{key:"render",value:function(){var e=this,t=[];return this.state.data.forEach((function(n){-1!==n.name.indexOf(e.state.searchText)&&t.push(n)})),Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{}),Object(d.jsx)("div",{className:"searchForm",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)(b,{getUserEditInfoForApp:function(t){return e.getUserEditInfoForApp(t)},ketnoi:function(){return e.doiTrangThai()},hienThiForm:this.state.hienThiForm,checkConnect:function(t){return e.getTextSearch(t)},editUserStatus:this.state.editUserStatus,changeEditUserStatus:function(){return e.changeEditUserStatus()},userEditObject:this.state.userEditObject}),Object(d.jsx)(O,{dataUser:t,editFun:function(t){return e.editUser(t)},changeEditUserStatus:function(){return e.changeEditUserStatus()},deleteUser:function(t){return e.deleteUser(t)}}),Object(d.jsx)(f,{add:function(t,n,s){return e.getNewUserData(t,n,s)},hienThiForm:this.state.hienThiForm})]})})})]})}}]),n}(s.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),r(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),N()},8:function(e){e.exports=JSON.parse('[{"id":1,"name":"Pacific Rim","tel":"0909763733","permission":1},{"id":2,"name":"Ho\xe0ng Th\u1ecb B\xedch Tuy\u1ec1n","tel":"0906832403","permission":2},{"id":3,"name":"Ho\xe0ng Th\u1ecb B\xedch Quy","tel":"0938211311","permission":3},{"id":4,"name":"B\xf9i Th\u1ecb Mai","tel":"0909109036","permission":1},{"id":5,"name":"V\xf5 H\u1ed3ng H\xe0","tel":"0919261523","permission":1},{"id":6,"name":"Mai Thi\xean Quang","tel":"0909763733","permission":1}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.f3f0ac7d.chunk.js.map