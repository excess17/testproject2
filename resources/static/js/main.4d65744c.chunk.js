(window["webpackJsonpconference-form-widget"]=window["webpackJsonpconference-form-widget"]||[]).push([[0],{137:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"Conference successfully saved","dataDeleted":"Conference successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"conference":{"deleteDialog":{"title":"Delete conference","description":"Are you sure?"},"notFound":"Conference not found","deleted":"Conference deleted","id":"entities.conference.id","field1":"entities.conference.field1"}}}')},138:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Errore durante la connessione al server"},"common":{"save":"Salva","dataSaved":"Conference salvato/a con successo","dataDeleted":"Conference eliminato/a con successo","notAuthenticated":"L\'utente non \xe8 autenticato.","selectFile":"Carica nuovo file","selectImageFile":"Carica nuova immagine","download":"Scarica","cancel":"Annulla","delete":"Elimina","yes":"Si","no":"No"},"validation":{"required":"{{field}} \xe8 obbligatorio"},"entities":{"conference":{"deleteDialog":{"title":"Elimina conference","description":"Sei sicuro/a?"},"notFound":"Conference non trovato/a","deleted":"Conference eliminato/a","id":"entit\xe0.conference.id","field1":"entit\xe0.conference.field1"}}}')},161:function(e,t,n){e.exports=n(282)},282:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(8),i=n(12),o=n(6),c=n(11),s=n(79),l=n(40),u=n(0),d=n.n(u),f=n(13),p=n.n(f),h=n(127),b=n.n(h),m=n(331),v=n(335),O=n(329),y=n(149),g=n(18),k=d.a.createContext(null),E=n(51),j=n(92),w=n(39),C={en:n(137),it:n(138)};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var D=Object.keys(C).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",C[t])))}),{}),P=j.a.t,x=function(e){!function(e,t){j.a.use(w.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:D,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.conference.".concat(n))})}}};E.c(t)}(P)},U=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},F={tableAdd:"conference.table.add",tableSelect:"conference.table.select"},N={create:"conference.form.create",update:"conference.form.update",errorCreate:"conference.form.errorCreate",errorUpdate:"conference.form.errorUpdate"},A=n(15),R=n.n(A),T=n(26),M=n(20),z=n(3),L=n.n(z),I=(L.a.shape({initialized:L.a.bool,authenticated:L.a.bool}),n(150));L.a.oneOfType([L.a.func,L.a.shape({current:L.a.elementType}),L.a.shape(null)]);function H(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(r=Object(i.a)(this,(t=Object(o.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,i=Object(I.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},i,{ref:a,keycloak:t}))},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(k.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},J=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},q=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},K=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G="api/conferences",Y=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G,"/").concat(n),r=V({},q(),{method:"GET"}),e.abrupt("return",K(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G),r=V({},q(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",K(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(T.a)(R.a.mark((function e(t,n,a){var r,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t,"/").concat(G,"/").concat(n),i=V({},q(),{method:"PUT",body:a?JSON.stringify(a):null}),e.abrupt("return",K(r,i));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Z=function(){var e=Object(T.a)(R.a.mark((function e(t,n){var a,r;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G,"/").concat(n),r=V({},q(),{method:"DELETE"}),e.abrupt("return",K(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=n(4),_=n(334),ee=n(321),te=n(317),ne=n(5),ae=n(322),re=n(140),ie=n.n(re),oe=n(141),ce=n.n(oe),se=n(139),le=n.n(se),ue=n(142),de=n.n(ue),fe={success:le.a,error:ie.a,info:ce.a},pe={success:3e3,error:null,info:5e3},he=function e(t){var n=t.className,a=t.classes,r=t.status,i=t.message,o=t.onClose,c=!!i,s=r||e.INFO,l=fe[s],u=pe[s],f=d.a.createElement("span",{className:a.message},d.a.createElement(l,{className:Object($.a)(a.icon,a.iconStatus)}),i);return d.a.createElement(_.a,{open:c,onClose:o,autoHideDuration:u},d.a.createElement(ee.a,{className:Object($.a)(a[s],n),message:f,action:[d.a.createElement(ae.a,{key:"close","aria-label":"close",color:"inherit",onClick:o},d.a.createElement(de.a,{className:a.icon}))]}))};he.SUCCESS="success",he.ERROR="error",he.defaultProps={message:null,className:"",status:he.INFO="info",onClose:function(){}};var be=Object(ne.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:te.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(he),me=(L.a.shape({id:L.a.number,field1:L.a.string}),L.a.shape({id:L.a.oneOfType([L.a.string,L.a.number]),field1:L.a.string}),L.a.shape({id:L.a.oneOfType([L.a.bool,L.a.shape()]),field1:L.a.oneOfType([L.a.bool,L.a.shape()])}),L.a.shape({id:L.a.oneOfType([L.a.string,L.a.shape()]),field1:L.a.oneOfType([L.a.string,L.a.shape()])}),n(148)),ve=n(151),Oe=n(327),ye=n(328),ge=n(330),ke=n(333),Ee=n(326),je=n(324),we=n(325),Ce=n(323),Se=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(M.a)(n)),n.discard=n.discard.bind(Object(M.a)(n)),n.confirm=n.confirm.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,r=n.description,i=n.confirmLabel,o=n.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(ke.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(Ce.a,{id:"confirmation-dialog-title"},a),d.a.createElement(je.a,null,d.a.createElement(we.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(Ee.a,null,d.a.createElement(Oe.a,{onClick:this.discard,autoFocus:!0},o),d.a.createElement(Oe.a,{onClick:this.confirm,color:"primary"},i))))}}]),t}(u.PureComponent);Se.CONFIRM="CONFIRM",Se.DISCARD="DISCARD";var De=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Se.CONFIRM:n(a)}}},{key:"render",value:function(){var e,t=this.props,n=t.classes,a=t.values,r=t.touched,i=t.errors,o=t.handleChange,c=t.handleBlur,s=t.handleSubmit,l=t.onDelete,u=t.onCancelEditing,f=t.isSubmitting,p=t.t;return d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),s(e)},className:n.root,"data-testid":"conference-form"},d.a.createElement(ye.a,{container:!0,spacing:2},d.a.createElement("input",{type:"hidden",id:"conference-id","data-testid":"conference-id",value:a.id}),d.a.createElement(ye.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"conference-field1",error:i.field1&&r.field1,helperText:(e="field1",i[e]&&r[e]?i[e]:""),className:n.textField,onChange:o,onBlur:c,value:a.field1,name:"field1",label:p("entities.conference.field1")})),l&&d.a.createElement(Se,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:p("entities.conference.deleteDialog.title"),description:p("entities.conference.deleteDialog.description"),confirmLabel:p("common.yes"),discardLabel:p("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(Oe.a,{onClick:t,disabled:f},p("common.delete"))}}),d.a.createElement(Oe.a,{onClick:u,disabled:f,"data-testid":"cancel-btn"},p("common.cancel")),d.a.createElement(Oe.a,{type:"submit",color:"primary",disabled:f,"data-testid":"submit-btn"},p("common.save"))))}}]),t}(u.PureComponent);De.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var Pe={id:"",field1:""},xe={mapPropsToValues:function(e){return e.conference||Pe},enableReinitialize:!0,validationSchema:E.b().shape({id:E.a(),field1:E.d()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"ConferenceForm"},Ue=Object(ve.a)(Object(ne.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(w.b)(),Object(me.a)(xe))(De),Fe=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleDelete=n.handleDelete.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,i=e.keycloak.authenticated!==r,o=a&&a!==e.id;r&&(o||i)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(T.a)(R.a.mark((function e(){var t,n,a,r,i;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,Y(r,a);case 6:i=e.sent,this.setState((function(){return{conference:i}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(T.a)(R.a.mark((function e(t){var n,a,r,i,o,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onUpdate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,X(o,t.id,t);case 6:c=e.sent,r(c),this.setState({conference:c,notificationMessage:a("common.dataSaved"),notificationStatus:be.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(T.a)(R.a.mark((function e(t){var n,a,r,i,o;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onDelete,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=13;break}return e.prev=3,e.next=6,Z(o,t.id);case 6:r(t),this.setState({conference:null,notificationMessage:a("common.dataDeleted"),notificationStatus:be.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:be.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,r=t.t,i=this.state,o=i.notificationMessage,c=i.notificationStatus,s=i.conference;return e="undefined"===typeof s?r("entities.conference.notFound"):null===s?r("entities.conference.deleted"):d.a.createElement(Ue,{conference:s,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{keycloak:n},r("common.notAuthenticated")),d.a.createElement(W,{keycloak:n},e),d.a.createElement(be,{status:c,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Fe.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Ne=H(Object(w.b)()(Fe)),Ae=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(M.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(M.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(T.a)(R.a.mark((function e(t){var n,a,r,i,o,c;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onCreate,i=n.keycloak,o=n.serviceUrl,!(i.initialized&&i.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(o,t);case 6:c=e.sent,r(c),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:be.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:be.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,r=this.state,i=r.notificationMessage,o=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(J,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(W,{keycloak:t},d.a.createElement(Ue,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(be,{status:o,message:i,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ae.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var Re=H(Object(w.b)()(Ae));function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ze=function(){return window&&window.entando&&window.entando.keycloak&&Me({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},Le={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},Ie=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).keycloak=ze(),n.onCreate=U(N.create),n.onCancelEditing=U(N.cancelEditing),n.onDelete=U(N.delete),n.onUpdate=U(N.update),n.onErrorCreate=U(N.errorCreate),n.onErrorUpdate=U(N.errorUpdate),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(Le).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===Le.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(g.b)(Me({},Object(m.a)(),{insertionPoint:this.container})),this.muiTheme=Object(y.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=Me({},ze(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Me({},ze(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),b()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=F.tableAdd,a=F.cancelEditing,r=F.create,i=F.edit,o=F.delete,c=F.tableSelect,s=F.update,l=Le.id;switch(t.type){case n:e.setAttribute(l,"");break;case i:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case r:case a:case s:e.hidden=!0;break;case o:e.hidden=!0,e.setAttribute(l,"");break;case c:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(Le.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(F),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(Le.serviceUrl)||"";if("true"===this.getAttribute(Le.hidden))p.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(Le.locale);x(t);var n=this.getAttribute(Le.id),a=n?d.a.createElement(Ne,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(Re,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);p.a.render(d.a.createElement(k.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(O.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(Le)}}]),t}(Object(s.a)(HTMLElement));customElements.define("conference-form",Ie)}},[[161,1,2]]]);
//# sourceMappingURL=main.4d65744c.chunk.js.map