"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[233],{7337:function(e,t,n){n.d(t,{f8:function(){return o},nv:function(){return r},u1:function(){return s}});var a=n(6727),o=a.Ry().shape({name:a.Z_().required("Name is required").matches(/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,"Invalid name format! Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),number:a.Z_().required("Number is required").matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,"Invalid phone number format! Phone number must be digits and can contain spaces, dashes, parentheses and can start with +")}),r=a.Ry({email:a.Z_("Enter your email").email("Enter a valid email").required("Email is required"),password:a.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")}),s=a.Ry({name:a.Z_("Enter your name").required("Name is required"),email:a.Z_("Enter your email").email("Enter a valid email").required("Email is required"),password:a.Z_("Enter your password").min(8,"Password should be of minimum 8 characters length").required("Password is required")})},6922:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var a=n(6737),o="section-title_title__qQns3",r="section-title_background__TKb6L",s="section-title_iconBook__taVVc",i=n.p+"static/media/png-transparent-application-phonebook-contact-ios-custom-application-icon.0cab981b06ea15d6e3b6.jpg",c=n(3329),u=function(e){var t=e.title,n=e.children;return(0,c.jsxs)("div",{className:r,children:[(0,c.jsxs)("h2",{className:o,children:[(0,c.jsx)("img",{src:i,alt:"icon",width:"38",height:"35",className:s}),t]}),n]})},l=n(9439),d=n(2791),f=n(4942),m=n(1413),p=n(4925),v=n(3433);function h(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=h(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var g=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=h(e))&&(a&&(a+=" "),a+=t);return a},y=["theme","type"],_=["delay","staleId"],E=function(e){return"number"==typeof e&&!isNaN(e)},T=function(e){return"string"==typeof e},b=function(e){return"function"==typeof e},C=function(e){return T(e)||b(e)?e:null},Z=function(e){return(0,d.isValidElement)(e)||T(e)||b(e)||E(e)};function N(e){var t=e.enter,n=e.exit,a=e.appendPosition,o=void 0!==a&&a,r=e.collapse,s=void 0===r||r,i=e.collapseDuration,c=void 0===i?300:i;return function(e){var a=e.children,r=e.position,i=e.preventExitTransition,u=e.done,l=e.nodeRef,f=e.isIn,m=o?"".concat(t,"--").concat(r):t,p=o?"".concat(n,"--").concat(r):n,h=(0,d.useRef)(0);return(0,d.useLayoutEffect)((function(){var e,t=l.current,n=m.split(" "),a=function e(a){var o;a.target===l.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==a.type&&(o=t.classList).remove.apply(o,(0,v.Z)(n)))};(e=t.classList).add.apply(e,(0,v.Z)(n)),t.addEventListener("animationend",a),t.addEventListener("animationcancel",a)}),[]),(0,d.useEffect)((function(){var e=l.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var a=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=a+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()};f||(i?t():(h.current=1,e.className+=" ".concat(p),e.addEventListener("animationend",t)))}),[f]),d.createElement(d.Fragment,null,a)}}function x(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}var I={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(a){var o=setTimeout((function(){a.apply(void 0,(0,v.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},w=function(e){var t=e.theme,n=e.type,a=(0,p.Z)(e,y);return d.createElement("svg",(0,m.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},a))},L={info:function(e){return d.createElement(w,(0,m.Z)({},e),d.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return d.createElement(w,(0,m.Z)({},e),d.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return d.createElement(w,(0,m.Z)({},e),d.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return d.createElement(w,(0,m.Z)({},e),d.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return d.createElement("div",{className:"Toastify__spinner"})}};function O(e){var t=(0,d.useReducer)((function(e){return e+1}),0),n=(0,l.Z)(t,2)[1],a=(0,d.useState)([]),o=(0,l.Z)(a,2),r=o[0],s=o[1],i=(0,d.useRef)(null),c=(0,d.useRef)(new Map).current,u=function(e){return-1!==r.indexOf(e)},f=(0,d.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:u,getToast:function(e){return c.get(e)}}).current;function h(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function g(e){s((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function y(){var e=f.queue.shift();w(e.toastContent,e.toastProps,e.staleId)}function N(e,t){var a=t.delay,o=t.staleId,r=(0,p.Z)(t,_);if(Z(e)&&!function(e){return!i.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||c.has(e.toastId)&&null==e.updateId}(r)){var s=r.toastId,u=r.updateId,v=r.data,h=f.props,N=function(){return g(s)},O=null==u;O&&f.count++;var R,k,j=(0,m.Z)((0,m.Z)((0,m.Z)({},h),{},{style:h.toastStyle,key:f.toastKey++},Object.fromEntries(Object.entries(r).filter((function(e){var t=(0,l.Z)(e,2);t[0];return null!=t[1]})))),{},{toastId:s,updateId:u,data:v,closeToast:N,isIn:!1,className:C(r.className||h.toastClassName),bodyClassName:C(r.bodyClassName||h.bodyClassName),progressClassName:C(r.progressClassName||h.progressClassName),autoClose:!r.isLoading&&(R=r.autoClose,k=h.autoClose,!1===R||E(R)&&R>0?R:k),deleteToast:function(){var e=x(c.get(s),"removed");c.delete(s),I.emit(4,e);var t=f.queue.length;if(f.count=null==s?f.count-f.displayedToast:f.count-1,f.count<0&&(f.count=0),t>0){var a=null==s?f.props.limit:1;if(1===t||1===a)f.displayedToast++,y();else{var o=a>t?t:a;f.displayedToast=o;for(var r=0;r<o;r++)y()}}else n()}});j.iconOut=function(e){var t=e.theme,n=e.type,a=e.isLoading,o=e.icon,r=null,s={theme:t,type:n};return!1===o||(b(o)?r=o(s):(0,d.isValidElement)(o)?r=(0,d.cloneElement)(o,s):T(o)||E(o)?r=o:a?r=L.spinner():function(e){return e in L}(n)&&(r=L[n](s))),r}(j),b(r.onOpen)&&(j.onOpen=r.onOpen),b(r.onClose)&&(j.onClose=r.onClose),j.closeButton=h.closeButton,!1===r.closeButton||Z(r.closeButton)?j.closeButton=r.closeButton:!0===r.closeButton&&(j.closeButton=!Z(h.closeButton)||h.closeButton);var A=e;(0,d.isValidElement)(e)&&!T(e.type)?A=(0,d.cloneElement)(e,{closeToast:N,toastProps:j,data:v}):b(e)&&(A=e({closeToast:N,toastProps:j,data:v})),h.limit&&h.limit>0&&f.count>h.limit&&O?f.queue.push({toastContent:A,toastProps:j,staleId:o}):E(a)?setTimeout((function(){w(A,j,o)}),a):w(A,j,o)}}function w(e,t,n){var a=t.toastId;n&&c.delete(n);var o={content:e,props:t};c.set(a,o),s((function(e){return[].concat((0,v.Z)(e),[a]).filter((function(e){return e!==n}))})),I.emit(4,x(o,null==o.props.updateId?"added":"updated"))}return(0,d.useEffect)((function(){return f.containerId=e.containerId,I.cancelEmit(3).on(0,N).on(1,(function(e){return i.current&&g(e)})).on(5,h).emit(2,f),function(){c.clear(),I.emit(3,f)}}),[]),(0,d.useEffect)((function(){f.props=e,f.isToastActive=u,f.displayedToast=r.length})),{getToastToRender:function(t){var n=new Map,a=Array.from(c.values());return e.newestOnTop&&a.reverse(),a.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:i,isToastActive:u}}function R(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function k(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function j(e){var t=(0,d.useState)(!1),n=(0,l.Z)(t,2),a=n[0],o=n[1],r=(0,d.useState)(!1),s=(0,l.Z)(r,2),i=s[0],c=s[1],u=(0,d.useRef)(null),f=(0,d.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,d.useRef)(e),p=e.autoClose,v=e.pauseOnHover,h=e.closeToast,g=e.onClick,y=e.closeOnClick;function _(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",Z),document.addEventListener("mouseup",N),document.addEventListener("touchmove",Z),document.addEventListener("touchend",N);var n=u.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=R(t.nativeEvent),f.y=k(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(t){if(f.boundingRect){var n=f.boundingRect,a=n.top,o=n.bottom,r=n.left,s=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=r&&f.x<=s&&f.y>=a&&f.y<=o?C():T()}}function T(){o(!0)}function C(){o(!1)}function Z(t){var n=u.current;f.canDrag&&n&&(f.didMove=!0,a&&C(),f.x=R(t),f.y=k(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function N(){document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",N),document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",N);var t=u.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return c(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,d.useEffect)((function(){m.current=e})),(0,d.useEffect)((function(){return u.current&&u.current.addEventListener("d",T,{once:!0}),b(e.onOpen)&&e.onOpen((0,d.isValidElement)(e.children)&&e.children.props),function(){var e=m.current;b(e.onClose)&&e.onClose((0,d.isValidElement)(e.children)&&e.children.props)}}),[]),(0,d.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",T),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var x={onMouseDown:_,onTouchStart:_,onMouseUp:E,onTouchEnd:E};return p&&v&&(x.onMouseEnter=C,x.onMouseLeave=T),y&&(x.onClick=function(e){g&&g(e),f.canCloseOnClick&&h()}),{playToast:T,pauseToast:C,isRunning:a,preventExitTransition:i,toastRef:u,eventHandlers:x}}function A(e){var t=e.closeToast,n=e.theme,a=e.ariaLabel,o=void 0===a?"close":a;return d.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},d.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},d.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function M(e){var t=e.delay,n=e.isRunning,a=e.closeToast,o=e.type,r=void 0===o?"default":o,s=e.hide,i=e.className,c=e.style,u=e.controlledProgress,l=e.progress,p=e.rtl,v=e.isIn,h=e.theme,y=s||u&&0===l,_=(0,m.Z)((0,m.Z)({},c),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});u&&(_.transform="scaleX(".concat(l,")"));var E=g("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(r),{"Toastify__progress-bar--rtl":p}),T=b(i)?i({rtl:p,type:r,defaultClassName:E}):g(E,i);return d.createElement("div",(0,f.Z)({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:T,style:_},u&&l>=1?"onTransitionEnd":"onAnimationEnd",u&&l<1?null:function(){v&&a()}))}var B=function(e){var t=j(e),n=t.isRunning,a=t.preventExitTransition,o=t.toastRef,r=t.eventHandlers,s=e.closeButton,i=e.children,c=e.autoClose,u=e.onClick,l=e.type,f=e.hideProgressBar,p=e.closeToast,v=e.transition,h=e.position,y=e.className,_=e.style,E=e.bodyClassName,T=e.bodyStyle,C=e.progressClassName,Z=e.progressStyle,N=e.updateId,x=e.role,I=e.progress,w=e.rtl,L=e.toastId,O=e.deleteToast,R=e.isIn,k=e.isLoading,B=e.iconOut,P=e.closeOnClick,q=e.theme,z=g("Toastify__toast","Toastify__toast-theme--".concat(q),"Toastify__toast--".concat(l),{"Toastify__toast--rtl":w},{"Toastify__toast--close-on-click":P}),D=b(y)?y({rtl:w,position:h,type:l,defaultClassName:z}):g(z,y),F=!!I||!c,S={closeToast:p,type:l,theme:q},H=null;return!1===s||(H=b(s)?s(S):(0,d.isValidElement)(s)?(0,d.cloneElement)(s,S):A(S)),d.createElement(v,{isIn:R,done:O,position:h,preventExitTransition:a,nodeRef:o},d.createElement("div",(0,m.Z)((0,m.Z)({id:L,onClick:u,className:D},r),{},{style:_,ref:o}),d.createElement("div",(0,m.Z)((0,m.Z)({},R&&{role:x}),{},{className:b(E)?E({type:l}):g("Toastify__toast-body",E),style:T}),null!=B&&d.createElement("div",{className:g("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!k})},B),d.createElement("div",null,i)),H,d.createElement(M,(0,m.Z)((0,m.Z)({},N&&!F?{key:"pb-".concat(N)}:{}),{},{rtl:w,theme:q,delay:c,isRunning:n,isIn:R,closeToast:p,hide:f,type:l,style:Z,className:C,controlledProgress:F,progress:I||0}))))},P=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},q=N(P("bounce",!0)),z=(N(P("slide",!0)),N(P("zoom")),N(P("flip")),(0,d.forwardRef)((function(e,t){var n=O(e),a=n.getToastToRender,o=n.containerRef,r=n.isToastActive,s=e.className,i=e.style,c=e.rtl,u=e.containerId;function l(e){var t=g("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":c});return b(s)?s({position:e,rtl:c,defaultClassName:t}):g(t,C(s))}return(0,d.useEffect)((function(){t&&(t.current=o.current)}),[]),d.createElement("div",{ref:o,className:"Toastify",id:u},a((function(e,t){var n=t.length?(0,m.Z)({},i):(0,m.Z)((0,m.Z)({},i),{},{pointerEvents:"none"});return d.createElement("div",{className:l(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var a=e.content,o=e.props;return d.createElement(B,(0,m.Z)((0,m.Z)({},o),{},{isIn:r(o.toastId),style:(0,m.Z)((0,m.Z)({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),a)})))})))})));z.displayName="ToastContainer",z.defaultProps={position:"top-right",transition:q,autoClose:5e3,closeButton:A,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var D,F=new Map,S=[],H=1;function Q(){return""+H++}function V(e){return e&&(T(e.toastId)||E(e.toastId))?e.toastId:Q()}function G(e,t){return F.size>0?I.emit(0,e,t):S.push({content:e,options:t}),t.toastId}function K(e,t){return(0,m.Z)((0,m.Z)({},t),{},{type:t&&t.type||e,toastId:V(t)})}function U(e){return function(t,n){return G(t,K(e,n))}}function W(e,t){return G(e,K("default",t))}W.loading=function(e,t){return G(e,K("default",(0,m.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},W.promise=function(e,t,n){var a,o=t.pending,r=t.error,s=t.success;o&&(a=T(o)?W.loading(o,n):W.loading(o.render,(0,m.Z)((0,m.Z)({},n),o)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(e,t,o){if(null!=t){var r=(0,m.Z)((0,m.Z)((0,m.Z)({type:e},i),n),{},{data:o}),s=T(t)?{render:t}:t;return a?W.update(a,(0,m.Z)((0,m.Z)({},r),s)):W(s.render,(0,m.Z)((0,m.Z)({},r),s)),o}W.dismiss(a)},u=b(e)?e():e;return u.then((function(e){return c("success",s,e)})).catch((function(e){return c("error",r,e)})),u},W.success=U("success"),W.info=U("info"),W.error=U("error"),W.warning=U("warning"),W.warn=W.warning,W.dark=function(e,t){return G(e,K("default",(0,m.Z)({theme:"dark"},t)))},W.dismiss=function(e){F.size>0?I.emit(1,e):S=S.filter((function(t){return null!=e&&t.options.toastId!==e}))},W.clearWaitingQueue=function(e){return void 0===e&&(e={}),I.emit(5,e)},W.isActive=function(e){var t=!1;return F.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},W.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,a=F.get(n||D);return a&&a.getToast(e)}(e,t);if(n){var a=n.props,o=n.content,r=(0,m.Z)((0,m.Z)((0,m.Z)({delay:100},a),t),{},{toastId:t.toastId||e,updateId:Q()});r.toastId!==e&&(r.staleId=e);var s=r.render||o;delete r.render,G(s,r)}}),0)},W.done=function(e){W.update(e,{progress:1})},W.onChange=function(e){return I.on(4,e),function(){I.off(4,e)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},I.on(2,(function(e){D=e.containerId||e,F.set(D,e),S.forEach((function(e){I.emit(0,e.content,e.options)})),S=[]})).on(3,(function(e){F.delete(e.containerId||e),0===F.size&&I.off(0).off(1).off(5)}));var Y=function(){var e=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,t="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var a=63&n[e];t+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return t}();return e},J="add-contact_form__ofClA",X="add-contact_label__ZEyk2",$="add-contact_input__V056x",ee="add-contact_button__Q5eJu",te=n(9434),ne=n(6351),ae=n(208),oe=n(7337),re=Y(),se=Y(),ie=function(){var e=(0,d.useState)(""),t=(0,l.Z)(e,2),n=t[0],a=t[1],o=(0,d.useState)(""),r=(0,l.Z)(o,2),s=r[0],i=r[1],u=(0,te.v9)(ne.Af),f=(0,te.I0)(),m=function(e){var t=e.target,n=t.name,o=t.value;"name"===n&&a(o),"number"===n&&i(o)};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("form",{className:J,onSubmit:function(e){e.preventDefault();var t={name:n,number:s};try{oe.f8.validateSync(t),u.find((function(e){return e.name===t.name}))?W.warn("".concat(n," is already in contacts")):f((0,ae.uK)(t)),a(""),i("")}catch(o){W.error(o.message)}},children:[(0,c.jsx)("label",{className:X,htmlFor:re,children:"Name"}),(0,c.jsx)("input",{className:$,type:"text",name:"name",value:n,onChange:m,required:!0}),(0,c.jsx)("label",{className:X,htmlFor:se,children:"Number"}),(0,c.jsx)("input",{className:$,type:"tel",name:"number",value:s,onChange:m,required:!0}),(0,c.jsx)("button",{type:"submit",className:ee,children:"Add contact"})]})})},ce="searchContact_wrapper__d2GaV",ue="searchContact_title__fWQw-",le="searchContact_input__Wav7L",de=n(9034),fe=function(e){var t=e.searchTitle,n=(0,te.I0)(),a=(0,te.v9)(ne.Af);return(0,c.jsx)(c.Fragment,{children:a.length>0&&(0,c.jsxs)("div",{className:ce,children:[(0,c.jsx)("h3",{className:ue,children:t}),(0,c.jsx)("input",{className:le,type:"text",onInput:function(e){n((0,de.a)(e.target.value.trim()))}})]})})},me=n(5861),pe=n(7757),ve=n.n(pe),he=n(9983);function ge(e){return(0,he.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 62.4c34.3 0 62.4 28.1 62.4 62.4s-28.1 62.4-62.4 62.4-62.4-28.1-62.4-62.4 28.1-62.4 62.4-62.4zm0 300.4c-52 0-97.8-27-124.8-66.6 1-41.6 83.2-64.5 124.8-64.5s123.8 22.9 124.8 64.5c-27 39.5-72.8 66.6-124.8 66.6z"}}]})(e)}var ye="savedContact_item__YHJ8c",_e="savedContact_icon__nIQGS",Ee="savedContact_itemText__LbYcm",Te="savedContact_btn__u2-Ka",be=function(e){var t=e.id,n=e.name,a=e.number;return(0,c.jsxs)("li",{className:ye,children:[(0,c.jsxs)("p",{className:Ee,children:[(0,c.jsx)(ge,{className:_e}),n,": ",a]}),(0,c.jsx)("button",{className:Te,type:"button","data-id":t,children:"Delete"})]},n)},Ce="contacts_list__XMBj2",Ze=function(){var e=(0,te.v9)(ne.Af),t=(0,te.v9)(ne.AD),n=(0,te.I0)(),a=function(){var e=(0,me.Z)(ve().mark((function e(t){var a;return ve().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"!==t.target.tagName){e.next=5;break}return a=t.target.getAttribute("data-id"),e.next=4,n((0,ae.GK)(a));case 4:n((0,ae.yF)());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,c.jsx)(c.Fragment,{children:e.length>0?(0,c.jsx)("ul",{onClick:a,className:Ce,children:(""!==t?e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):""===t?e:void 0).map((function(e){var t=e.id,n=e.name,a=e.number;return(0,c.jsx)(be,{id:t,name:n,number:a},t)}))}):(0,c.jsx)("p",{className:"text-message",children:"'The contact list is empty.'"})})},Ne=function(){var e=(0,te.I0)(),t=(0,te.v9)(ne.ry),n=(0,te.v9)(ne.BJ);return(0,d.useEffect)((function(){e((0,ae.yF)())}),[e]),(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(z,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),(0,c.jsx)(ie,{}),(0,c.jsxs)(u,{title:"Contacts",children:[n&&!t&&(0,c.jsx)(a.Z,{}),(0,c.jsx)(fe,{searchTitle:"Find contacts by name"}),(0,c.jsx)(Ze,{})]})]})}}}]);
//# sourceMappingURL=233.164f5c14.chunk.js.map