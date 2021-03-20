/*! For license information please see main.2bdde113.chunk.js.LICENSE.txt */
(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{31:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(20),o=n.n(i),r=(n(31),n(24)),l=n(3),u=n(2),p=n.p+"static/media/Logo-white.9acae848.svg",d=n(4),j=n(10);var b=function(e){var t=e.email,n=e.onSignOut,s=e.loggedIn,i=Object(c.useState)(!1),o=Object(u.a)(i,2),r=o[0],l=o[1],b=Object(c.useState)(0),m=Object(u.a)(b,2),_=m[0],h=m[1],f=Object(c.useCallback)((function(){h(window.innerWidth),_>=767&&l(!0)}),[_]);function O(){l(!r)}return Object(c.useEffect)((function(){return f(),window.addEventListener("resize",f),function(){return window.removeEventListener("resize",f)}}),[f]),Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("img",{className:"header__logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f",src:p}),Object(a.jsx)(d.b,{path:"/sign-in",children:Object(a.jsx)(j.b,{to:"sign-up",className:"".concat(s?"header__link":"header__link header__link_login"),children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(a.jsx)(d.b,{path:"/sign-up",children:Object(a.jsx)(j.b,{to:"sign-in",className:"".concat(s?"header__link":"header__link header__link_login"),children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(a.jsxs)(d.b,{exact:!0,path:"/",children:[Object(a.jsx)("div",{className:"header__burger-menu",children:Object(a.jsx)("button",{type:"button",className:"".concat(r?"header__button header__button_close":"header__button header__button_burger"),onClick:O,children:Object(a.jsx)("span",{})})}),Object(a.jsxs)("div",{className:"".concat(r?"header__user-menu":"not-active"),children:[Object(a.jsx)("p",{className:"header__email",children:t}),Object(a.jsx)("button",{onClick:function(){n(),O()},className:"header__link header__link_button",children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]})},m=s.a.createContext();var _=function(e){var t=e.card,n=e.likeCounter,s=e.onCardClick,i=e.onCardDelete,o=e.onCardLike,r=Object(c.useContext)(m),l=t.owner._id===r._id,u="elements__delete-button ".concat(l?"elements__delete-button_visible":"elements__delete-button_hidden"),p=t.likes.some((function(e){return e._id===r._id})),d="elements__like-button ".concat(p?"elements__like-button_active heartbeat":"");return Object(a.jsxs)("li",{className:"elements__list-item",children:[Object(a.jsx)("img",{src:t.link,className:"elements__picture",title:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",alt:t.name,onClick:function(){s(t)},loading:"lazy"}),Object(a.jsxs)("div",{className:"elements__container",children:[Object(a.jsx)("h2",{className:"elements__text",children:t.name}),Object(a.jsx)("button",{type:"button",title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:u,onClick:function(){i(t)}}),Object(a.jsxs)("div",{className:"elements__like-container",children:[Object(a.jsx)("button",{type:"button",className:d,onClick:function(){o(t)}}),Object(a.jsx)("span",{className:"elements__like-counter",children:n})]})]})]})},h=(n(37),function(){return Object(a.jsxs)("div",{className:"loadingio-spinner-double-ring-av4fvvi9jcd",children:[Object(a.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),Object(a.jsxs)("div",{className:"ldio-0fi3zkedlx1c",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{})}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{})})]})]})});var f=function(e){var t=e.onEditAvatar,n=e.onEditProfile,s=e.onAddPlace,i=e.onCardClick,o=e.onCardDelete,r=e.onCardLike,l=e.cards,u=e.loading,p=Object(c.useContext)(m),d=p.name,j=p.about,b=p.avatar;return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__avatar-edit",children:[Object(a.jsx)("img",{className:"profile__avatar",title:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",src:b,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(a.jsx)("button",{title:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar-edit-button",onClick:t})]}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{id:"profile__name",className:"profile__name",children:d}),Object(a.jsx)("p",{id:"profile__job",className:"profile__job",children:j}),Object(a.jsx)("button",{type:"button",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",className:"profile__edit-button",onClick:n})]}),Object(a.jsx)("button",{type:"button",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e",className:"profile__add-button",onClick:s})]}),Object(a.jsx)("section",{className:"elements",children:u?Object(a.jsx)(h,{}):Object(a.jsx)("ul",{className:"elements__list",children:l.map((function(e){return Object(a.jsx)(_,{card:e,onCardClick:i,onCardDelete:o,likeCounter:e.likes.length,onCardLike:r},e._id)}))})})]})};var O=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__author",children:["\xa9 ",(new Date).getFullYear()," Kirill Shashichev \ud83e\udd0d \u042f\u043d\u0434\u0435\u043a\u0441 \u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c"]})})};var v=function(e){var t=e.card,n=e.onClose,s=!!t;return Object(c.useEffect)((function(){if(s){var e=function(e){"Escape"===e.key&&n()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}}),[s,n]),Object(a.jsxs)("div",{className:"popup ".concat(t.isOpen&&"popup_opened"),children:[Object(a.jsx)("div",{className:"popup__fullScreen",children:Object(a.jsxs)("div",{className:"popup__image-desription",children:[Object(a.jsx)("img",{className:"popup__image",src:"".concat(t.element.link||""),alt:t.element.name}),Object(a.jsx)("p",{className:"popup__image-subtitle",children:t.element.name}),Object(a.jsx)("button",{type:"button",onClick:n,className:"popup__close-button"})]})}),Object(a.jsx)("div",{onClick:n,className:"popup__overlay"})]})},x=n(22),g=n(23),C=new(function(){function e(t){Object(x.a)(this,e),this._baseUrl=t.serverUrl,this._token=t.token}return Object(g.a)(e,[{key:"_requestResult",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: \u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status," - ").concat(e.statusText))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._requestResult(t)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._requestResult(e)}))}},{key:"editProfile",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._requestResult(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._requestResult(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._requestResult(e)}))}},{key:"changeCardLike",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then((function(e){return n._requestResult(e)}))}}]),e}())({serverUrl:"https://mesto.nomoreparties.co/v1/cohort-19",token:"4fc24223-fbb6-4e5b-bedd-d51fcb2b9911"});var k=function(e){var t=e.id,n=e.isOpen,s=e.name,i=e.children,o=e.title,r=e.onClose,l=e.onSubmit,u=e.submitText,p=e.isDisabled;return Object(c.useEffect)((function(){if(n){var e=function(e){"Escape"===e.key&&r()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}}),[n,r]),Object(a.jsxs)("div",{id:t,className:"popup ".concat(n&&"popup_opened"),children:[Object(a.jsxs)("form",{name:s,className:"popup__form",onSubmit:l,noValidate:!0,children:[Object(a.jsxs)("fieldset",{className:"popup__set",children:[Object(a.jsx)("p",{className:"popup__title",children:o}),i,Object(a.jsx)("button",{type:"submit",className:"popup__button ".concat(p&&"popup__button_disabled"),disabled:p,children:u})]}),Object(a.jsx)("button",{type:"button",onClick:r,className:"popup__close-button"})]}),Object(a.jsx)("div",{onClick:r,className:"popup__overlay"})]})},N=n(9);function y(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)({}),i=Object(u.a)(s,2),o=i[0],r=i[1],p=Object(c.useState)(!1),d=Object(u.a)(p,2),j=d[0],b=d[1],m=Object(c.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];a(e),r(t),b(n)}),[a,r,b]);return{values:n,errors:o,isValid:j,handleChange:function(e){var t=e.target,c=t.name,s=t.value;a(Object(l.a)(Object(l.a)({},n),{},Object(N.a)({},c,s))),r(Object(l.a)(Object(l.a)({},o),{},Object(N.a)({},c,t.validationMessage))),b(t.closest("form").checkValidity())},resetForm:m,setValues:a}}var L=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateUser,i=e.isDataLoad,o=y(),r=o.values,l=o.errors,u=o.isValid,p=o.handleChange,d=o.setValues,j=o.resetForm,b=Object(c.useContext)(m);return Object(c.useEffect)((function(){b&&(j(),d({name:b.name,about:b.about}))}),[t,j,b,d]),Object(a.jsxs)(k,{name:"profile",id:"editProfile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s(r)},submitText:i?"\u0421\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isDisabled:!u,children:[Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{value:r.name||"",onChange:p,name:"name",placeholder:"\u0418\u043c\u044f",required:!0,maxLength:"40",className:"popup__input",id:"popup__name-input",type:"text"}),Object(a.jsx)("span",{id:"popup__name-input-error",className:"".concat(l.name?"popup__input-error popup__input-error_visible":"popup__input-error"),children:l.name})]}),Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{value:r.about||"",onChange:p,name:"about",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",required:!0,maxLength:"200",className:"popup__input",id:"popup__job-input",type:"text"}),Object(a.jsx)("span",{id:"popup__job-input-error",className:"".concat(l.about?"popup__input-error popup__input-error_visible":"popup__input-error"),children:l.about})]})]})};var S=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateAvatar,i=e.isDataLoad,o=y(),r=o.values,l=o.errors,u=o.isValid,p=o.handleChange,d=o.resetForm,j=Object(c.useRef)();return Object(c.useEffect)((function(){d()}),[t,d]),Object(a.jsx)(k,{name:"updateAvatar",id:"update",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s(r)},submitText:i?"\u041e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u043c...":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",isDisabled:!u,children:Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{value:r.avatar||"",onChange:p,ref:j,name:"avatar",className:"popup__input",id:"popup__avatarLink-input",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",type:"url"}),Object(a.jsx)("span",{id:"popup__avatarLink-input-error",className:"".concat(l.avatar?"popup__input-error popup__input-error_visible":"popup__input-error"),children:l.avatar})]})})};var w=function(e){var t=e.isOpen,n=e.onClose,s=e.onAddCard,i=e.isDataLoad,o=y(),r=o.values,l=o.errors,u=o.isValid,p=o.handleChange,d=o.resetForm;return Object(c.useEffect)((function(){d()}),[t,d]),Object(a.jsxs)(k,{isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s(r)},name:"newCard",id:"addCard",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitText:i?"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c...":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",isDisabled:!u,children:[Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{value:r.name||"",onChange:p,name:"name",className:"popup__input",id:"popup__placeName-input",required:!0,minLength:"1",maxLength:"30",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",type:"text"}),Object(a.jsx)("span",{id:"popup__placeName-input-error",className:"".concat(l.name?"popup__input-error popup__input-error_visible":"popup__input-error"),children:l.name})]}),Object(a.jsxs)("label",{className:"popup__form-field",children:[Object(a.jsx)("input",{value:r.link||"",onChange:p,name:"link",className:"popup__input",id:"popup__placeLink-input",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url"}),Object(a.jsx)("span",{id:"popup__placeLink-input-error",className:"".concat(l.link?"popup__input-error popup__input-error_visible":"popup__input-error"),children:l.link})]})]})};var E=function(e){var t=e.isOpen,n=e.onClose,c=e.isDataLoad,s=e.card,i=e.onDeleteCard;return Object(a.jsx)(k,{name:"confirmDeleteCard",id:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:t,onClose:n,submitText:c?"\u0423\u0434\u0430\u043b\u044f\u0435\u043c...":"\u0414\u0430",onSubmit:function(e){e.preventDefault(),i(s)}})};function D(e){var t=e.onLogin,n=Object(c.useState)({email:"",password:""}),s=Object(u.a)(n,2),i=s[0],o=s[1],r=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(N.a)({},n,a))}))};return Object(a.jsxs)("form",{className:"login",onSubmit:function(e){e.preventDefault(),i.password&&i.email&&t(i)},children:[Object(a.jsx)("h1",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsx)("input",{autoComplete:"on",className:"login__email-input",placeholder:"Email",id:"email",name:"email",type:"email",value:i.email,onChange:r,minLength:"2",maxLength:"40",required:!0}),Object(a.jsx)("input",{autoComplete:"on",className:"login__password-input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",name:"password",type:"password",value:i.password,onChange:r,minLength:"2",maxLength:"40",required:!0}),Object(a.jsx)("button",{className:"login__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})}function T(e){var t=e.onRegister,n=Object(c.useState)({email:"",password:""}),s=Object(u.a)(n,2),i=s[0],o=s[1],r=function(e){var t=e.target,n=t.name,a=t.value;o((function(e){return Object(l.a)(Object(l.a)({},e),{},Object(N.a)({},n,a))}))};return Object(a.jsxs)("form",{className:"register",onSubmit:function(e){e.preventDefault(),t(i)},children:[Object(a.jsx)("h1",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsx)("input",{autoComplete:"on",className:"register__email-input",placeholder:"Email",id:"email",name:"email",type:"email",value:i.email,onChange:r,minLength:"2",maxLength:"40",required:!0}),Object(a.jsx)("input",{autoComplete:"on",className:"register__password-input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",id:"password",name:"password",type:"password",value:i.password,onChange:r,minLength:"2",maxLength:"40",required:!0}),Object(a.jsx)("button",{type:"submit",className:"register__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsx)(j.b,{to:"/sign-in",className:"register__link",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? \u0412\u043e\u0439\u0442\u0438"})]})}function P(e){var t=e.onClose,n=e.status,s=n.isOpen,i=n.successful;return Object(c.useEffect)((function(){if(s){var e=function(e){"Escape"===e.key&&t()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}}),[s,t]),Object(a.jsxs)("div",{className:"popup ".concat(s&&"popup_opened"),children:[Object(a.jsxs)("div",{className:"popup__info",children:[Object(a.jsx)("div",{className:"popup__status ".concat(i?"popup__status_success":"popup__status_fail")}),Object(a.jsx)("h2",{className:"popup__title popup__title_center",children:i?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."}),Object(a.jsx)("button",{type:"button",onClick:t,className:"popup__close-button popup__close-button_info"})]}),Object(a.jsx)("div",{onClick:t,className:"popup__overlay"})]})}var U=n(25);function A(e){var t=e.component,n=Object(U.a)(e,["component"]);return Object(a.jsx)(d.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(l.a)({},n)):Object(a.jsx)(d.a,{to:"./sign-in"})}})}var q="https://auth.nomoreparties.co";var I=function(){var e=Object(d.g)(),t=Object(c.useState)(!1),n=Object(u.a)(t,2),s=n[0],i=n[1],o=Object(c.useState)(!1),p=Object(u.a)(o,2),j=p[0],_=p[1],h=Object(c.useState)(!1),x=Object(u.a)(h,2),g=x[0],k=x[1],N=Object(c.useState)(!1),y=Object(u.a)(N,2),U=y[0],I=y[1],z=Object(c.useState)({isOpen:!1,successful:!1}),R=Object(u.a)(z,2),F=R[0],V=R[1],J=Object(c.useState)([]),B=Object(u.a)(J,2),H=B[0],G=B[1],K=Object(c.useState)(!1),M=Object(u.a)(K,2),W=M[0],Y=M[1],Q=Object(c.useState)(""),X=Object(u.a)(Q,2),Z=X[0],$=X[1],ee=Object(c.useState)(!1),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],ce=Object(c.useState)(!0),se=Object(u.a)(ce,2),ie=se[0],oe=se[1],re=Object(c.useState)({}),le=Object(u.a)(re,2),ue=le[0],pe=le[1],de=Object(c.useState)({isOpen:!1,element:{}}),je=Object(u.a)(de,2),be=je[0],me=je[1],_e=Object(c.useState)({element:{}}),he=Object(u.a)(_e,2),fe=he[0],Oe=he[1];function ve(e){V(Object(l.a)(Object(l.a)({},F),{},{isOpen:!0,successful:e}))}function xe(){k(!1),i(!1),_(!1),I(!1),me(Object(l.a)(Object(l.a)({},be),{},{isOpen:!1})),Oe({}),ae(!1),V({isOpen:!1,successful:!1})}return Object(c.useEffect)((function(){var t,n=localStorage.getItem("jwt");n&&(t=n,fetch("".concat(q,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))).then((function(t){t&&($(t.data.email),Y(!0),e.push("/"))})).catch((function(e){console.log(e)}))}),[e]),Object(c.useEffect)((function(){oe(!0),C.getUserInfo().then((function(e){pe(e)})).catch((function(e){console.log(e)})).finally((function(){oe(!1)}))}),[]),Object(c.useEffect)((function(){oe(!0),C.getInitialCards().then((function(e){G(e)})).catch((function(e){return console.log(e)})).finally((function(){oe(!1)}))}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("div",{className:"page",children:Object(a.jsx)("div",{className:"page__container",children:Object(a.jsxs)(m.Provider,{value:ue,children:[Object(a.jsx)(b,{loggedIn:W,email:Z,onSignOut:function(){localStorage.removeItem("jwt"),$(""),Y(!1),e.push("/sign-in")}}),Object(a.jsxs)(d.d,{children:[Object(a.jsx)(A,{exact:!0,path:"/",loggedIn:W,component:f,onEditProfile:function(){i(!s)},onAddPlace:function(){_(!j)},onEditAvatar:function(){k(!g)},onCardClick:function(e){me(Object(l.a)(Object(l.a)({},be),{},{isOpen:!0,element:e}))},onCardDelete:function(e){I(!U),Oe(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ue._id}));C.changeCardLike(e._id,t).then((function(t){G((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},cards:H,loading:ie}),Object(a.jsx)(d.b,{path:"/sign-up",children:Object(a.jsx)(T,{onRegister:function(t){(function(e,t){return fetch("".concat(q,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))})(t.email,t.password).then((function(t){t&&(ve(!0),e.push("/sign-in"))})).catch((function(e){ve(!1),console.log(e)}))}})}),Object(a.jsx)(d.b,{path:"/sign-in",children:Object(a.jsx)(D,{onLogin:function(t){var n=t.email,a=t.password;(function(e,t){return fetch("".concat(q,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))})(n,a).then((function(t){t.token&&($(n),Y(!0),localStorage.setItem("jwt",t.token),e.push("/"))})).catch((function(e){ve(!1),console.log(e)}))}})}),Object(a.jsx)(d.b,{children:W?Object(a.jsx)(d.a,{to:"/"}):Object(a.jsx)(d.a,{to:"/sign-in"})})]}),Object(a.jsx)(O,{}),Object(a.jsx)(P,{onClose:xe,status:F}),Object(a.jsx)(L,{isDataLoad:ne,onUpdateUser:function(e){ae(!0),C.editProfile(e).then((function(e){pe(e),xe()})).catch((function(e){console.log(e)})).finally((function(){ae(!1)}))},isOpen:s,onClose:xe}),Object(a.jsx)(w,{isDataLoad:ne,onAddCard:function(e){ae(!0),C.addNewCard(e).then((function(e){G([e].concat(Object(r.a)(H))),xe()})).catch((function(e){console.log(e)})).finally((function(){ae(!1)}))},isOpen:j,onClose:xe}),Object(a.jsx)(S,{isDataLoad:ne,onUpdateAvatar:function(e){ae(!0),C.editAvatar(e).then((function(e){pe(e),xe()})).catch((function(e){console.log(e)})).finally((function(){ae(!1)}))},isOpen:g,onClose:xe}),Object(a.jsx)(E,{card:fe,isDataLoad:ne,onDeleteCard:function(e){ae(!0),C.deleteCard(e._id).then((function(){var t=H.filter((function(t){return t._id!==e._id}));G(t),xe()})).catch((function(e){console.log(e)})).finally((function(){ae(!1)}))},isOpen:U,onClose:xe}),Object(a.jsx)(v,{card:be,onClose:xe})]})})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(j.a,{children:Object(a.jsx)(I,{})})}),document.getElementById("root")),z()}},[[38,1,2]]]);
//# sourceMappingURL=main.2bdde113.chunk.js.map