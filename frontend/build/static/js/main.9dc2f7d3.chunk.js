(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),s=n(17),c=n.n(s),i=(n(29),n(22)),r=n(2),l=n(3),u=n(18),p=n(19),d=new(function(){function e(t){var n=t.address,a=t.headers;Object(u.a)(this,e),this._url=n,this._headers=a}return Object(p.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(e){return console.log("getUserInfo \u0432 utils/api: "+e),fetch("".concat(this._url,"/users/me"),{method:"GET",headers:this._headers}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{method:"GET",headers:this._headers}).then(this._getResponseData)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._getResponseData)}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._getResponseData)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._getResponseData)}},{key:"setLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"unLike",value:function(e){return fetch("".concat(this._url,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.setLike(e):this.unLike(e)}}]),e}())({address:"http://localhost:3000",headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),j="http://localhost:3000";function m(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}var h=n.p+"static/media/logo.03b78ada.svg",_=n(8),b=n(0);var f=function(e){return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("img",{src:h,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",className:"header__logo"}),Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/signin",children:Object(b.jsx)(_.b,{className:"header__email header__hover",to:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(b.jsx)(l.b,{path:"/signup",children:Object(b.jsx)(_.b,{className:"header__email header__hover",to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(b.jsx)(l.b,{exact:!0,path:"/",children:Object(b.jsxs)("div",{className:"header__container",children:[Object(b.jsx)("p",{className:"header__email",children:e.userEmail}),Object(b.jsx)(_.b,{className:"header__signout",to:"/signin",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})})]})]})},O=o.a.createContext();var g=function(e){var t=o.a.useContext(O),n=e.card.owner._id===t._id,a="grid-item__delete ".concat(n?"grid-item__delete_active":"grid-item__delete"),s=e.card.likes.some((function(e){return e._id===t._id})),c="grid-item__like ".concat(s?"grid-item__like_active":"grid-item__like");return Object(b.jsxs)("li",{className:"grid-item",children:[Object(b.jsx)("img",{src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)},className:"grid-item__photo"}),Object(b.jsxs)("div",{className:"grid-item__description",children:[Object(b.jsx)("h2",{className:"grid-item__name",children:e.card.name}),Object(b.jsxs)("div",{className:"grid-item_group",children:[Object(b.jsx)("button",{type:"button",onClick:function(){e.onCardLike(e.card)},className:c}),Object(b.jsx)("span",{className:"grid-item__like-info",children:e.card.likes.length})]})]}),Object(b.jsx)("button",{type:"button",className:a,onClick:function(){e.onCardDelete(e.card)}})]})};var v=function(e){var t=o.a.useContext(O);return Object(b.jsxs)("main",{className:"content",children:[Object(b.jsxs)("section",{className:"profile",children:[Object(b.jsxs)("div",{className:"profile__info-block",children:[Object(b.jsx)("img",{className:"profile__avatar",onClick:e.onEditAvatar,src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(b.jsx)("div",{className:"profile__edit-button-avatar",onClick:e.onEditAvatar})]}),Object(b.jsxs)("div",{className:"profile__info",children:[Object(b.jsxs)("div",{className:"profile__description",children:[Object(b.jsx)("h1",{className:"profile__name",children:t.name}),Object(b.jsx)("button",{type:"button",className:"profile__edit-button",onClick:e.onEditProfile})]}),Object(b.jsx)("p",{className:"profile__job",children:t.about})]}),Object(b.jsx)("button",{type:"button",className:"profile__add-button",onClick:e.onAddPlace})]}),Object(b.jsx)("section",{className:"photos",children:Object(b.jsx)("ul",{className:"elements",children:e.cards.map((function(t){return Object(b.jsx)(g,{onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,card:t},t._id)}))})})]})};var x=function(){return Object(b.jsx)("footer",{className:"footer",children:Object(b.jsxs)("p",{className:"footer__content",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var C=function(e){return Object(b.jsxs)("div",{className:"popup popup_type_image ".concat(e.card?"popup_opened":""),children:[Object(b.jsx)("div",{className:"popup__overlay popup__overlay_image",onClick:e.onClose}),Object(b.jsxs)("div",{className:"popup__card",children:[Object(b.jsx)("img",{className:"popup__image",src:e.card.link,alt:e.card.name}),Object(b.jsx)("p",{className:"popup__title-card",children:e.card.name}),Object(b.jsx)("button",{className:"popup__button-close",type:"button",onClick:e.onClose})]})]})};var N=function(e){return Object(b.jsxs)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:[Object(b.jsx)("div",{className:"popup__overlay popup__overlay_profile",onClick:e.onClose}),Object(b.jsxs)("div",{className:"popup__container",children:[Object(b.jsx)("h3",{className:"popup__title",children:e.title}),Object(b.jsxs)("form",{name:e.name,onSubmit:e.onSubmit,className:"popup__form popup__form_".concat(e.name),children:[e.children,Object(b.jsx)("button",{type:"submit",className:"popup__button-save",children:e.buttonText})]}),Object(b.jsx)("button",{type:"button",className:"popup__button-close",onClick:e.onClose})]})]})};var k=function(e){var t=o.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],c=o.a.useState(""),i=Object(r.a)(c,2),l=i[0],u=i[1],p=o.a.useContext(O);return o.a.useEffect((function(){s(p.name),u(p.about)}),[p,e.isOpen]),Object(b.jsxs)(N,{isOpen:e.isOpen,onClose:e.onClose,name:"profile-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:l})},children:[Object(b.jsx)("input",{type:"text",className:"popup__profile popup__profile_name_name popup__form-input",name:"name",value:a||"",id:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",onChange:function(e){s(e.target.value)},required:!0}),Object(b.jsx)("span",{className:"popup__input-error name-error"}),Object(b.jsx)("input",{type:"text",className:"popup__profile popup__profile_name_job popup__form-input",name:"job",value:l||"",placeholder:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",id:"job",minLength:"2",maxLength:"400",onChange:function(e){u(e.target.value)},required:!0}),Object(b.jsx)("span",{className:"popup__input-error job-error"})]})};var S=function(e){var t=o.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],c=o.a.useState(""),i=Object(r.a)(c,2),l=i[0],u=i[1];return o.a.useEffect((function(){s(""),u("")}),[e.isOpen]),Object(b.jsxs)(N,{isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:l})},name:"card-add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",children:[Object(b.jsx)("input",{type:"text",className:"popup__profile popup__profile_name_title popup__form-input",value:a,name:"title",id:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0,onChange:function(e){s(e.target.value)}}),Object(b.jsx)("span",{className:"popup__input-error title-error",id:"title-input-error"}),Object(b.jsx)("input",{type:"url",className:"popup__profile popup__profile_name_photo popup__form-input",name:"link",value:l,id:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e",required:!0,onChange:function(e){u(e.target.value)}}),Object(b.jsx)("span",{className:"popup__input-error link-error",id:"link-input-error"})]})};var y=function(e){var t=o.a.useRef("");return o.a.useEffect((function(){t.current.value=""}),[e.isOpen]),Object(b.jsxs)(N,{isOpen:e.isOpen,onClose:e.onClose,name:"avatar-edit",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(b.jsx)("input",{type:"url",className:"popup__profile popup__form-input",name:"link",id:"avatar",minLength:"2",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",ref:t,required:!0}),Object(b.jsx)("span",{className:"popup__input-error avatar-error",id:"avatar-error"})]})};var E=function(e){return Object(b.jsx)(N,{isOpen:e.isOpen,onClose:e.onClose,name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",onSubmit:function(t){t.preventDefault(),e.onCardDelete()}})},D=n(23),L=n(24),T=["component"],I=function(e){var t=e.component,n=Object(L.a)(e,T);return Object(b.jsx)(l.b,{children:function(){return n.loggedIn?Object(b.jsx)(t,Object(D.a)({},n)):Object(b.jsx)(l.a,{to:"/signin"})}})};var w=function(e){var t=o.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],c=o.a.useState(""),i=Object(r.a)(c,2),l=i[0],u=i[1];return Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),e.onLogin(a,l)},children:[Object(b.jsx)("h1",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(b.jsx)("input",{className:"login__input",type:"email",autoComplete:"username",name:"email",value:a,onChange:function(e){s(e.target.value)},placeholder:"Email",required:!0}),Object(b.jsx)("input",{className:"login__input",type:"password",autoComplete:"new-password",name:"password",value:l,onChange:function(e){u(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(b.jsx)("button",{className:"login__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})})};var P=function(e){var t=o.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],c=o.a.useState(""),i=Object(r.a)(c,2),l=i[0],u=i[1];return Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault(),e.onRegister(a,l)},children:[Object(b.jsx)("h1",{className:"login__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(b.jsx)("input",{className:"login__input",type:"email",autoComplete:"username",name:"email",value:a,onChange:function(e){s(e.target.value)},placeholder:"Email",required:!0}),Object(b.jsx)("input",{className:"login__input",type:"password",autoComplete:"new-password",name:"password",value:l,onChange:function(e){u(e.target.value)},placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0}),Object(b.jsx)("button",{className:"login__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(b.jsx)(_.b,{className:"login__question",to:"/signin",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\u0412\u043e\u0439\u0442\u0438"})]})})},A=n.p+"static/media/mistake.df8eddf6.svg",R=n.p+"static/media/success.1b6082f8.svg";var U=function(e){return Object(b.jsx)("div",{className:"popup ".concat(e.isOpen?"popup_opened":""),children:Object(b.jsx)("div",{name:e.name,className:"popup__container",children:Object(b.jsxs)("div",{className:"popup__form",children:[Object(b.jsx)("button",{type:"button",className:"popup__button-close",onClick:e.onClose}),Object(b.jsx)("img",{className:"popup__image-registration",src:e.isSuccess?R:A,alt:e.isSuccess?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043e\u0442\u043a\u043b\u043e\u043d\u0435\u043d\u0430"}),Object(b.jsx)("h2",{className:"popup__title popup__title_type_registration",children:e.isSuccess?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})]})})})};var q=function(){var e=Object(l.g)(),t=o.a.useState({}),n=Object(r.a)(t,2),a=n[0],s=n[1],c=o.a.useState({}),u=Object(r.a)(c,2),p=u[0],h=u[1],_=o.a.useState(null),g=Object(r.a)(_,2),N=g[0],D=g[1],L=o.a.useState(!1),T=Object(r.a)(L,2),A=T[0],R=T[1],q=o.a.useState(!1),J=Object(r.a)(q,2),F=J[0],B=J[1],G=o.a.useState(!1),z=Object(r.a)(G,2),H=z[0],M=z[1],Y=o.a.useState(!1),K=Object(r.a)(Y,2),Q=K[0],V=K[1],W=o.a.useState([]),X=Object(r.a)(W,2),Z=X[0],$=X[1],ee=o.a.useState(!1),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],oe=o.a.useState(!1),se=Object(r.a)(oe,2),ce=se[0],ie=se[1],re=o.a.useState(""),le=Object(r.a)(re,2),ue=le[0],pe=le[1],de=o.a.useState(!1),je=Object(r.a)(de,2),me=je[0],he=je[1];function _e(){D(null),R(!1),B(!1),M(!1),V(!1),he(!1)}return o.a.useEffect((function(){var t=localStorage.getItem("token");console.log(t),t&&function(e){return console.log("getToken \u0432 utils/auth: "+e),fetch("".concat(j,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){return m(e)}))}(t).then((function(t){t&&pe(t.data.email),ae(!0),e.push("/")})).catch((function(e){400===e.status?console.log("400 \u2014 \u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"):401===e.status&&console.log("401 \u2014 \u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")}))}),[e]),o.a.useEffect((function(){ne&&Promise.all([d.getUserInfo(),d.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];s(n.userInfo),$(a.data.reverse())})).catch((function(e){return console.log("\u0414\u0430\u043d\u043d\u044b\u0435 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u044b. \u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}),[ne]),o.a.useEffect((function(){var e=function(e){"Escape"===e.key&&_e()};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[]),Object(b.jsx)(O.Provider,{value:a,children:Object(b.jsx)("div",{className:"root",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(f,{loggedIn:ne,userEmail:ue,onSignOut:function(){localStorage.removeItem("token"),ae(!1),pe(""),e.push("/signin")}}),Object(b.jsxs)(l.d,{children:[Object(b.jsx)(I,{exact:!0,path:"/",component:v,loggedIn:ne,onEditAvatar:function(){R(!0)},onEditProfile:function(){B(!0)},onAddPlace:function(){M(!0)},onCardClick:function(e){D(e)},cards:Z,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===a._id}));d.changeLikeCardStatus(e._id,!t,localStorage.token).then((function(t){$((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){h(e),V(!0)}}),Object(b.jsx)(l.b,{path:"/signin",children:Object(b.jsx)(w,{onLogin:function(t,n){return function(e,t){return fetch("".concat(j,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return m(e)}))}(t,n).then((function(n){ae(!0),pe(t),localStorage.setItem("token",n.token),e.push("/")})).catch((function(e){400===e.status?console.log("400 - \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"):401===e.status&&console.log("401 - \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"),ie(!1)}))}})}),Object(b.jsx)(l.b,{path:"/signup",children:Object(b.jsx)(P,{onRegister:function(t,n){return function(e,t){return fetch("".concat(j,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return m(e)}))}(t,n).then((function(t){localStorage.setItem("token",t.token),ie(!0),e.push("/signin")})).catch((function(e){400===e.status&&console.log("400 - \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"),ie(!1)})).finally((function(){he(!me)}))}})})]}),Object(b.jsx)(x,{}),Object(b.jsx)(C,{card:null!==N&&N,onClose:_e}),Object(b.jsx)(y,{isOpen:A,onClose:_e,onUpdateAvatar:function(e){d.updateAvatar(e,localStorage.token).then((function(e){s(e),_e()})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(k,{isOpen:F,onClose:_e,onUpdateUser:function(e){d.editUserInfo(e,localStorage.token).then((function(e){s(e),_e()})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(S,{isOpen:H,onClose:_e,onAddPlace:function(e){d.addCard(e,localStorage.token).then((function(e){$([e].concat(Object(i.a)(Z))),_e()})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(E,{isOpen:Q,onClose:_e,onCardDelete:function(){var e=p.owner._id===a._id;d.deleteCard(p._id,e).then((function(){var e=Z.filter((function(e){return e._id!==p._id}));$(e),_e()})).catch((function(e){console.log(e)}))}}),Object(b.jsx)(U,{isOpen:me,onClose:_e,isSuccess:ce})]})})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),o(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(_.a,{children:Object(b.jsx)(q,{})})}),document.getElementById("root")),J()}},[[36,1,2]]]);
//# sourceMappingURL=main.9dc2f7d3.chunk.js.map