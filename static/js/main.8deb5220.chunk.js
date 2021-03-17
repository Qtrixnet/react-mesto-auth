/*! For license information please see main.8deb5220.chunk.js.LICENSE.txt */
(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(20),o=n.n(i),r=(n(31),n(24)),l=n(5),u=n(2),p=n.p+"static/media/Logo-white.1f1e9591.svg",j=n(3),d=n(9);var b=function(e){var t=e.email,n=e.onSignOut,s=e.loggedIn,i=Object(c.useState)(!1),o=Object(u.a)(i,2),r=o[0],l=o[1],b=Object(c.useState)(0),m=Object(u.a)(b,2),h=m[0],_=m[1],O=function(){_(window.innerWidth),h>=767&&l(!0)};function f(){l(!r)}return Object(c.useEffect)((function(){return O(),window.addEventListener("resize",O),function(){return window.removeEventListener("resize",O)}}),[O]),Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",src:p}),Object(a.jsx)(j.b,{path:"/sign-in",children:Object(a.jsx)(d.b,{to:"sign-up",className:"".concat(s?"header__link":"header__link header__link_login"),children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(a.jsx)(j.b,{path:"/sign-up",children:Object(a.jsx)(d.b,{to:"sign-in",className:"".concat(s?"header__link":"header__link header__link_login"),children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(a.jsxs)(j.b,{exact:!0,path:"/",children:[Object(a.jsx)("div",{className:"header__burger-menu",children:Object(a.jsx)("button",{type:"button",className:"".concat(r?"header__button header__button_close":"header__button header__button_burger"),onClick:f,children:Object(a.jsx)("span",{})})}),Object(a.jsxs)("div",{className:"".concat(r?"header__user-menu":"not-active"),children:[Object(a.jsx)("p",{className:"header__email",children:t}),Object(a.jsx)("button",{onClick:function(){n(),f()},className:"header__link header__link_button",children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]})},m=s.a.createContext();var h=function(e){var t=e.card,n=e.likeCounter,s=e.onCardClick,i=e.onCardDelete,o=e.onCardLike,r=Object(c.useContext)(m),l=t.owner._id===r._id,u="elements__delete-button ".concat(l?"elements__delete-button_visible":"elements__delete-button_hidden"),p=t.likes.some((function(e){return e._id===r._id})),j="elements__like-button ".concat(p?"elements__like-button_active heartbeat":"");return Object(a.jsxs)("li",{className:"elements__list-item",children:[Object(a.jsx)("img",{src:t.link,className:"elements__picture",title:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",alt:t.name,onClick:function(){s(t)},loading:"lazy"}),Object(a.jsxs)("div",{className:"elements__container",children:[Object(a.jsx)("h2",{className:"elements__text",children:t.name}),Object(a.jsx)("button",{type:"button",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:u,onClick:function(){i(t)}}),Object(a.jsxs)("div",{className:"elements__like-container",children:[Object(a.jsx)("button",{type:"button",className:j,onClick:function(){o(t)}}),Object(a.jsx)("span",{className:"elements__like-counter",children:n})]})]})]})},_=(n(37),function(){return Object(a.jsx)("div",{className:"loadingio-spinner-double-ring-av4fvvi9jcd",children:Object(a.jsxs)("div",{className:"ldio-0fi3zkedlx1c",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{})}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{})})]})})});var O=function(e){var t=e.onEditAvatar,n=e.onEditProfile,s=e.onAddPlace,i=e.onCardClick,o=e.onCardDelete,r=e.onCardLike,l=e.cards,u=e.loading,p=Object(c.useContext)(m),j=p.name,d=p.about,b=p.avatar;return Object(a.jsx)("main",{className:"content",children:u?Object(a.jsx)(_,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar-edit",children:[Object(a.jsx)("img",{className:"profile__avatar",title:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",src:b,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("button",{title:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar-edit-button",onClick:t})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{id:"profile__name",className:"profile__name",children:j}),Object(a.jsx)("p",{id:"profile__job",className:"profile__job",children:d}),Object(a.jsx)("button",{type:"button",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",className:"profile__edit-button",onClick:n})]}),Object(a.jsx)("button",{type:"button",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",className:"profile__add-button",onClick:s})]}),Object(a.jsx)("section",{className:"elements",children:Object(a.jsx)("ul",{className:"elements__list",children:l.map((function(e){return Object(a.jsx)(h,{card:e,onCardClick:i,onCardDelete:o,likeCounter:e.likes.length,onCardLike:r},e._id)}))})})]})})};var f=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__author",children:["\xa9 ",(new Date).getFullYear()," Kirill Shashichev \ud83e\udd0d \u042f\u043d\u0434\u0435\u043a\u0441 \u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"]})})};var x=function(e){var t=e.card,n=e.onClose;return Object(a.jsxs)("div",{className:"popup ".concat(t.isOpen&&"popup_opened"),children:[Object(a.jsx)("div",{className:"popup__fullScreen",children:Object(a.jsxs)("div",{className:"popup__image-desription",children:[Object(a.jsx)("img",{className:"popup__image",src:"".concat(t.element.link||""),alt:t.element.name}),Object(a.jsx)("p",{className:"popup__image-subtitle",children:t.element.name}),Object(a.jsx)("button",{type:"button",onClick:n,className:"popup__close-button"})]})}),Object(a.jsx)("div",{onClick:n,className:"popup__overlay"})]})},v=n(22),g=n(23),N=new(function(){function e(t){Object(v.a)(this,e),this._baseUrl=t.serverUrl,this._token=t.token}return Object(g.a)(e,[{key:"_requestResult",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: \u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status," - ").concat(e.statusText))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return t._requestResult(e)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._requestResult(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._requestResult(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._requestResult(e)}))}},{key:"changeCardLike",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then((function(e){return n._requestResult(e)}))}}]),e}())({serverUrl:"https://mesto.nomoreparties.co/v1/cohort-19",token:"4fc24223-fbb6-4e5b-bedd-d51fcb2b9911"});var C=function(e){var t=e.id,n=e.isOpen,c=e.name,s=e.children,i=e.title,o=e.onClose,r=e.onSubmit,l=e.submitText;return Object(a.jsxs)("div",{id:t,className:"popup ".concat(n&&"popup_opened"),children:[Object(a.jsxs)("form",{name:c,className:"popup__form",onSubmit:r,noValidate:!0,children:[Object(a.jsxs)("fieldset",{className:"popup__set",children:[Object(a.jsx)("p",{className:"popup__title",children:i}),s,Object(a.jsx)("button",{type:"submit",className:"popup__button",children:l})]}),Object(a.jsx)("button",{type:"button",onClick:o,className:"popup__close-button"})]}),Object(a.jsx)("div",{onClick:o,className:"popup__overlay"})]})};var k=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateUser,i=e.isDataLoad,o=Object(c.useState)(""),r=Object(u.a)(o,2),l=r[0],p=r[1],j=Object(c.useState)(""),d=Object(u.a)(j,2),b=d[0],h=d[1],_=Object(c.useContext)(m),O=_.name,f=_.about;return Object(c.useEffect)((function(){p(O),h(f)}),[_]),Object(a.jsxs)(C,{name:"profile",id:"editProfile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:l,about:b})},submitText:i?"\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:[Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{value:l||"",onChange:function(e){p(e.target.value)},name:"name",placeholder:"\u0418\u043c\u044f",required:!0,maxLength:"40",className:"popup__input",id:"popup__name-input",type:"text"}),Object(a.jsx)("span",{id:"popup__name-input-error",className:"popup__input-error"})]}),Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{value:b||"",onChange:function(e){h(e.target.value)},name:"job",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",required:!0,maxLength:"200",className:"popup__input",id:"popup__job-input",type:"text"}),Object(a.jsx)("span",{id:"popup__job-input-error",className:"popup__input-error"})]})]})};var y=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateAvatar,i=e.isDataLoad,o=Object(c.useRef)();return Object(a.jsx)(C,{name:"updateAvatar",id:"update",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s(o.current.value)},submitText:i?"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c...":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",children:Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{ref:o,name:"avatar",className:"popup__input",id:"popup__avatarLink-input",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",type:"url"}),Object(a.jsx)("span",{id:"popup__avatarLink-input-error",className:"popup__input-error"})]})})};var S=function(e){var t=e.isOpen,n=e.onClose,i=e.onAddCard,o=e.isDataLoad,r=Object(c.useState)(""),l=Object(u.a)(r,2),p=l[0],j=l[1],d=Object(c.useState)(""),b=Object(u.a)(d,2),m=b[0],h=b[1];return s.a.useEffect((function(){j(""),h("")}),[t]),Object(a.jsxs)(C,{isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i({name:p,link:m})},name:"newCard",id:"addCard",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitText:o?"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c...":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",children:[Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{value:p,onChange:function(e){j(e.target.value)},name:"placeName",className:"popup__input",id:"popup__placeName-input",required:!0,minLength:"1",maxLength:"30",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",type:"text"}),Object(a.jsx)("span",{id:"popup__placeName-input-error",className:"popup__input-error"})]}),Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{value:m,onChange:function(e){h(e.target.value)},name:"placeLink",className:"popup__input",id:"popup__placeLink-input",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url"}),Object(a.jsx)("span",{id:"popup__placeLink-input-error",className:"popup__input-error"})]})]})};var L=function(e){var t=e.isOpen,n=e.onClose,c=e.isDataLoad,s=e.card,i=e.onDeleteCard;return Object(a.jsx)(C,{name:"confirmDeleteCard",id:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:t,onClose:n,submitText:c?"\u0423\u0434\u0430\u043b\u044f\u0435\u043c...":"\u0414\u0430",onSubmit:function(e){e.preventDefault(),i(s)}})},w=n(11);function D(e){var t=e.onLogin,n=Object(c.useState)({email:"",password:""}),s=Object(u.a)(n,2),i=s[0],o=s[1],r=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(w.a)({},n,a))}))};return Object(a.jsxs)("form",{className:"login",onSubmit:function(e){e.preventDefault(),i.password&&i.email&&t(i)},children:[Object(a.jsx)("h1",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsx)("input",{autoComplete:"on",className:"login__email-input",placeholder:"Email",id:"email",name:"email",type:"email",value:i.email,onChange:r,minLength:"2",maxLength:"40",required:!0}),Object(a.jsx)("input",{autoComplete:"on",className:"login__password-input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",name:"password",type:"password",value:i.password,onChange:r,minLength:"2",maxLength:"40",required:!0}),Object(a.jsx)("button",{className:"login__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})}function T(e){var t=e.onRegister,n=Object(c.useState)({email:"",password:""}),s=Object(u.a)(n,2),i=s[0],o=s[1],r=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(w.a)({},n,a))}))};return Object(a.jsxs)("form",{className:"register",onSubmit:function(e){e.preventDefault(),t(i)},children:[Object(a.jsx)("h1",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsx)("input",{autoComplete:"on",className:"register__email-input",placeholder:"Email",id:"email",name:"email",type:"email",value:i.email,onChange:r,minLength:"2",maxLength:"40",required:!0}),Object(a.jsx)("input",{autoComplete:"on",className:"register__password-input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",name:"password",type:"password",value:i.password,onChange:r,minLength:"2",maxLength:"40",required:!0}),Object(a.jsx)("button",{type:"submit",className:"register__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsx)(d.b,{to:"/sign-in",className:"register__link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})}function E(e){var t=e.onClose,n=e.status,c=n.isOpen,s=n.successful;return Object(a.jsxs)("div",{className:"popup ".concat(c&&"popup_opened"),children:[Object(a.jsxs)("div",{className:"popup__info",children:[Object(a.jsx)("div",{className:"popup__status ".concat(s?"popup__status_success":"popup__status_fail")}),Object(a.jsx)("h2",{className:"popup__title popup__title_center",children:s?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."}),Object(a.jsx)("button",{type:"button",onClick:t,className:"popup__close-button popup__close-button_info"})]}),Object(a.jsx)("div",{onClick:t,className:"popup__overlay"})]})}var P=n(25);function U(e){var t=e.component,n=Object(P.a)(e,["component"]);return Object(a.jsx)(j.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(l.a)({},n)):Object(a.jsx)(j.a,{to:"./sign-in"})}})}var A="https://auth.nomoreparties.co";var q=function(){var e=Object(j.g)(),t=Object(c.useState)(!1),n=Object(u.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(!1),p=Object(u.a)(o,2),d=p[0],h=p[1],_=Object(c.useState)(!1),v=Object(u.a)(_,2),g=v[0],C=v[1],w=Object(c.useState)(!1),P=Object(u.a)(w,2),q=P[0],I=P[1],z=Object(c.useState)({isOpen:!1,successful:!1}),R=Object(u.a)(z,2),F=R[0],J=R[1],B=Object(c.useState)([]),H=Object(u.a)(B,2),G=H[0],K=H[1],V=Object(c.useState)(!1),W=Object(u.a)(V,2),Y=W[0],M=W[1],Q=Object(c.useState)(""),X=Object(u.a)(Q,2),Z=X[0],$=X[1],ee=Object(c.useState)(!1),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],ce=Object(c.useState)(!0),se=Object(u.a)(ce,2),ie=se[0],oe=se[1],re=Object(c.useState)({}),le=Object(u.a)(re,2),ue=le[0],pe=le[1],je=Object(c.useState)({isOpen:!1,element:{}}),de=Object(u.a)(je,2),be=de[0],me=de[1],he=Object(c.useState)({element:{}}),_e=Object(u.a)(he,2),Oe=_e[0],fe=_e[1];function xe(e){J(Object(l.a)(Object(l.a)({},F),{},{isOpen:!0,successful:e}))}function ve(){C(!1),i(!1),h(!1),I(!1),me(Object(l.a)(Object(l.a)({},be),{},{isOpen:!1})),fe({}),ae(!1),J({isOpen:!1,successful:!1})}return Object(c.useEffect)((function(){var t,n=localStorage.getItem("jwt");n&&(t=n,fetch("".concat(A,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))).then((function(t){t&&($(t.data.email),M(!0),e.push("/"))})).catch((function(e){console.log(e)}))}),[e]),Object(c.useEffect)((function(){oe(!0),N.getUserInfo().then((function(e){pe(e)})).catch((function(e){console.log(e)})).finally((function(){oe(!1)}))}),[]),Object(c.useEffect)((function(){oe(!0),N.getInitialCards().then((function(e){K(e)})).catch((function(e){console.log(e)})).finally((function(){oe(!1)}))}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{className:"page",children:Object(a.jsx)("div",{className:"page__container",children:Object(a.jsxs)(m.Provider,{value:ue,children:[Object(a.jsx)(b,{loggedIn:Y,email:Z,onSignOut:function(){localStorage.removeItem("jwt"),$(""),M(!1),e.push("/sign-in")}}),Object(a.jsxs)(j.d,{children:[Object(a.jsx)(U,{exact:!0,path:"/",loggedIn:Y,component:O,onEditProfile:function(){i(!s)},onAddPlace:function(){h(!d)},onEditAvatar:function(){C(!g)},onCardClick:function(e){me(Object(l.a)(Object(l.a)({},be),{},{isOpen:!0,element:e}))},onCardDelete:function(e){I(!q),fe(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ue._id}));N.changeCardLike(e._id,t).then((function(t){K((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},cards:G,loading:ie}),Object(a.jsx)(j.b,{path:"/sign-up",children:Object(a.jsx)(T,{onRegister:function(t){(function(e,t){return fetch("".concat(A,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))})(t.email,t.password).then((function(t){t&&(xe(!0),e.push("/sign-in"))})).catch((function(e){xe(!1),console.log(e)}))}})}),Object(a.jsx)(j.b,{path:"/sign-in",children:Object(a.jsx)(D,{onLogin:function(t){var n=t.email,a=t.password;(function(e,t){return fetch("".concat(A,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))})(n,a).then((function(t){t.token&&($(n),M(!0),localStorage.setItem("jwt",t.token),e.push("/"))})).catch((function(e){xe(!1),console.log(e)}))}})}),Object(a.jsx)(j.b,{children:Y?Object(a.jsx)(j.a,{to:"/"}):Object(a.jsx)(j.a,{to:"/sign-in"})})]}),Object(a.jsx)(f,{}),Object(a.jsx)(E,{onClose:ve,status:F}),Object(a.jsx)(k,{isDataLoad:ne,onUpdateUser:function(e){ae(!0),N.editProfile(e).then((function(e){pe(e),ve()})).catch((function(e){console.log(e)})).finally((function(){ae(!1)}))},isOpen:s,onClose:ve}),Object(a.jsx)(S,{isDataLoad:ne,onAddCard:function(e){ae(!0),N.addNewCard(e).then((function(e){K([e].concat(Object(r.a)(G))),ve()})).catch((function(e){console.log(e)})).finally((function(){ae(!1)}))},isOpen:d,onClose:ve}),Object(a.jsx)(y,{isDataLoad:ne,onUpdateAvatar:function(e){ae(!0),N.editAvatar(e).then((function(e){pe(e),ve()})).catch((function(e){console.log(e)})).finally((function(){ae(!1)}))},isOpen:g,onClose:ve}),Object(a.jsx)(L,{card:Oe,isDataLoad:ne,onDeleteCard:function(e){ae(!0),N.deleteCard(e._id).then((function(){var t=G.filter((function(t){return t._id!==e._id}));K(t),ve()})).catch((function(e){console.log(e)})).finally((function(){ae(!1)}))},isOpen:q,onClose:ve}),Object(a.jsx)(x,{card:be,onClose:ve})]})})})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(d.a,{children:Object(a.jsx)(q,{})})}),document.getElementById("root")),I()}},[[38,1,2]]]);
//# sourceMappingURL=main.8deb5220.chunk.js.map