"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[233],{6922:function(t,e,n){n.r(e),n.d(e,{default:function(){return xt}});var a=n(6737),o="section-title_title__qQns3",r="section-title_background__TKb6L",s="section-title_iconBook__taVVc",i=n.p+"static/media/png-transparent-application-phonebook-contact-ios-custom-application-icon.0cab981b06ea15d6e3b6.jpg",c=n(3329),u=function(t){var e=t.title,n=t.children;return(0,c.jsxs)("div",{className:r,children:[(0,c.jsxs)("h2",{className:o,children:[(0,c.jsx)("img",{src:i,alt:"icon",width:"38",height:"35",className:s}),e]}),n]})},l=n(9439),d=n(2791),f=n(4942),m=n(1413),p=n(4925),v=n(3433);function h(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=h(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}var g=function(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=h(t))&&(a&&(a+=" "),a+=e);return a},y=["theme","type"],T=["delay","staleId"],_=function(t){return"number"==typeof t&&!isNaN(t)},E=function(t){return"string"==typeof t},b=function(t){return"function"==typeof t},C=function(t){return E(t)||b(t)?t:null},x=function(t){return(0,d.isValidElement)(t)||E(t)||b(t)||_(t)};function N(t){var e=t.enter,n=t.exit,a=t.appendPosition,o=void 0!==a&&a,r=t.collapse,s=void 0===r||r,i=t.collapseDuration,c=void 0===i?300:i;return function(t){var a=t.children,r=t.position,i=t.preventExitTransition,u=t.done,l=t.nodeRef,f=t.isIn,m=o?"".concat(e,"--").concat(r):e,p=o?"".concat(n,"--").concat(r):n,h=(0,d.useRef)(0);return(0,d.useLayoutEffect)((function(){var t,e=l.current,n=m.split(" "),a=function t(a){var o;a.target===l.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===h.current&&"animationcancel"!==a.type&&(o=e.classList).remove.apply(o,(0,v.Z)(n)))};(t=e.classList).add.apply(t,(0,v.Z)(n)),e.addEventListener("animationend",a),e.addEventListener("animationcancel",a)}),[]),(0,d.useEffect)((function(){var t=l.current,e=function e(){t.removeEventListener("animationend",e),s?function(t,e,n){void 0===n&&(n=300);var a=t.scrollHeight,o=t.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=a+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(e,n)}))}))}(t,u,c):u()};f||(i?e():(h.current=1,t.className+=" ".concat(p),t.addEventListener("animationend",e)))}),[f]),d.createElement(d.Fragment,null,a)}}function I(t,e){return null!=t?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}var Z={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(a){var o=setTimeout((function(){a.apply(void 0,(0,v.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(o)}))}},L=function(t){var e=t.theme,n=t.type,a=(0,p.Z)(t,y);return d.createElement("svg",(0,m.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},a))},O={info:function(t){return d.createElement(L,(0,m.Z)({},t),d.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return d.createElement(L,(0,m.Z)({},t),d.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return d.createElement(L,(0,m.Z)({},t),d.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return d.createElement(L,(0,m.Z)({},t),d.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return d.createElement("div",{className:"Toastify__spinner"})}};function w(t){var e=(0,d.useReducer)((function(t){return t+1}),0),n=(0,l.Z)(e,2)[1],a=(0,d.useState)([]),o=(0,l.Z)(a,2),r=o[0],s=o[1],i=(0,d.useRef)(null),c=(0,d.useRef)(new Map).current,u=function(t){return-1!==r.indexOf(t)},f=(0,d.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:u,getToast:function(t){return c.get(t)}}).current;function h(t){var e=t.containerId;!f.props.limit||e&&f.containerId!==e||(f.count-=f.queue.length,f.queue=[])}function g(t){s((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function y(){var t=f.queue.shift();L(t.toastContent,t.toastProps,t.staleId)}function N(t,e){var a=e.delay,o=e.staleId,r=(0,p.Z)(e,T);if(x(t)&&!function(t){return!i.current||f.props.enableMultiContainer&&t.containerId!==f.props.containerId||c.has(t.toastId)&&null==t.updateId}(r)){var s=r.toastId,u=r.updateId,v=r.data,h=f.props,N=function(){return g(s)},w=null==u;w&&f.count++;var k,R,A=(0,m.Z)((0,m.Z)((0,m.Z)({},h),{},{style:h.toastStyle,key:f.toastKey++},Object.fromEntries(Object.entries(r).filter((function(t){var e=(0,l.Z)(t,2);e[0];return null!=e[1]})))),{},{toastId:s,updateId:u,data:v,closeToast:N,isIn:!1,className:C(r.className||h.toastClassName),bodyClassName:C(r.bodyClassName||h.bodyClassName),progressClassName:C(r.progressClassName||h.progressClassName),autoClose:!r.isLoading&&(k=r.autoClose,R=h.autoClose,!1===k||_(k)&&k>0?k:R),deleteToast:function(){var t=I(c.get(s),"removed");c.delete(s),Z.emit(4,t);var e=f.queue.length;if(f.count=null==s?f.count-f.displayedToast:f.count-1,f.count<0&&(f.count=0),e>0){var a=null==s?f.props.limit:1;if(1===e||1===a)f.displayedToast++,y();else{var o=a>e?e:a;f.displayedToast=o;for(var r=0;r<o;r++)y()}}else n()}});A.iconOut=function(t){var e=t.theme,n=t.type,a=t.isLoading,o=t.icon,r=null,s={theme:e,type:n};return!1===o||(b(o)?r=o(s):(0,d.isValidElement)(o)?r=(0,d.cloneElement)(o,s):E(o)||_(o)?r=o:a?r=O.spinner():function(t){return t in O}(n)&&(r=O[n](s))),r}(A),b(r.onOpen)&&(A.onOpen=r.onOpen),b(r.onClose)&&(A.onClose=r.onClose),A.closeButton=h.closeButton,!1===r.closeButton||x(r.closeButton)?A.closeButton=r.closeButton:!0===r.closeButton&&(A.closeButton=!x(h.closeButton)||h.closeButton);var j=t;(0,d.isValidElement)(t)&&!E(t.type)?j=(0,d.cloneElement)(t,{closeToast:N,toastProps:A,data:v}):b(t)&&(j=t({closeToast:N,toastProps:A,data:v})),h.limit&&h.limit>0&&f.count>h.limit&&w?f.queue.push({toastContent:j,toastProps:A,staleId:o}):_(a)?setTimeout((function(){L(j,A,o)}),a):L(j,A,o)}}function L(t,e,n){var a=e.toastId;n&&c.delete(n);var o={content:t,props:e};c.set(a,o),s((function(t){return[].concat((0,v.Z)(t),[a]).filter((function(t){return t!==n}))})),Z.emit(4,I(o,null==o.props.updateId?"added":"updated"))}return(0,d.useEffect)((function(){return f.containerId=t.containerId,Z.cancelEmit(3).on(0,N).on(1,(function(t){return i.current&&g(t)})).on(5,h).emit(2,f),function(){c.clear(),Z.emit(3,f)}}),[]),(0,d.useEffect)((function(){f.props=t,f.isToastActive=u,f.displayedToast=r.length})),{getToastToRender:function(e){var n=new Map,a=Array.from(c.values());return t.newestOnTop&&a.reverse(),a.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:i,isToastActive:u}}function k(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function R(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function A(t){var e=(0,d.useState)(!1),n=(0,l.Z)(e,2),a=n[0],o=n[1],r=(0,d.useState)(!1),s=(0,l.Z)(r,2),i=s[0],c=s[1],u=(0,d.useRef)(null),f=(0,d.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,d.useRef)(t),p=t.autoClose,v=t.pauseOnHover,h=t.closeToast,g=t.onClick,y=t.closeOnClick;function T(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",N),document.addEventListener("touchmove",x),document.addEventListener("touchend",N);var n=u.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=k(e.nativeEvent),f.y=R(e.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function _(e){if(f.boundingRect){var n=f.boundingRect,a=n.top,o=n.bottom,r=n.left,s=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&f.x>=r&&f.x<=s&&f.y>=a&&f.y<=o?C():E()}}function E(){o(!0)}function C(){o(!1)}function x(e){var n=u.current;f.canDrag&&n&&(f.didMove=!0,a&&C(),f.x=k(e),f.y=R(e),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function N(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",N),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",N);var e=u.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return c(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,d.useEffect)((function(){m.current=t})),(0,d.useEffect)((function(){return u.current&&u.current.addEventListener("d",E,{once:!0}),b(t.onOpen)&&t.onOpen((0,d.isValidElement)(t.children)&&t.children.props),function(){var t=m.current;b(t.onClose)&&t.onClose((0,d.isValidElement)(t.children)&&t.children.props)}}),[]),(0,d.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",E),window.addEventListener("blur",C)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",E),window.removeEventListener("blur",C))}}),[t.pauseOnFocusLoss]);var I={onMouseDown:T,onTouchStart:T,onMouseUp:_,onTouchEnd:_};return p&&v&&(I.onMouseEnter=C,I.onMouseLeave=E),y&&(I.onClick=function(t){g&&g(t),f.canCloseOnClick&&h()}),{playToast:E,pauseToast:C,isRunning:a,preventExitTransition:i,toastRef:u,eventHandlers:I}}function j(t){var e=t.closeToast,n=t.theme,a=t.ariaLabel,o=void 0===a?"close":a;return d.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":o},d.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},d.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function M(t){var e=t.delay,n=t.isRunning,a=t.closeToast,o=t.type,r=void 0===o?"default":o,s=t.hide,i=t.className,c=t.style,u=t.controlledProgress,l=t.progress,p=t.rtl,v=t.isIn,h=t.theme,y=s||u&&0===l,T=(0,m.Z)((0,m.Z)({},c),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});u&&(T.transform="scaleX(".concat(l,")"));var _=g("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(r),{"Toastify__progress-bar--rtl":p}),E=b(i)?i({rtl:p,type:r,defaultClassName:_}):g(_,i);return d.createElement("div",(0,f.Z)({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:E,style:T},u&&l>=1?"onTransitionEnd":"onAnimationEnd",u&&l<1?null:function(){v&&a()}))}var B=function(t){var e=A(t),n=e.isRunning,a=e.preventExitTransition,o=e.toastRef,r=e.eventHandlers,s=t.closeButton,i=t.children,c=t.autoClose,u=t.onClick,l=t.type,f=t.hideProgressBar,p=t.closeToast,v=t.transition,h=t.position,y=t.className,T=t.style,_=t.bodyClassName,E=t.bodyStyle,C=t.progressClassName,x=t.progressStyle,N=t.updateId,I=t.role,Z=t.progress,L=t.rtl,O=t.toastId,w=t.deleteToast,k=t.isIn,R=t.isLoading,B=t.iconOut,z=t.closeOnClick,P=t.theme,D=g("Toastify__toast","Toastify__toast-theme--".concat(P),"Toastify__toast--".concat(l),{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":z}),F=b(y)?y({rtl:L,position:h,type:l,defaultClassName:D}):g(D,y),S=!!Z||!c,H={closeToast:p,type:l,theme:P},q=null;return!1===s||(q=b(s)?s(H):(0,d.isValidElement)(s)?(0,d.cloneElement)(s,H):j(H)),d.createElement(v,{isIn:k,done:w,position:h,preventExitTransition:a,nodeRef:o},d.createElement("div",(0,m.Z)((0,m.Z)({id:O,onClick:u,className:F},r),{},{style:T,ref:o}),d.createElement("div",(0,m.Z)((0,m.Z)({},k&&{role:I}),{},{className:b(_)?_({type:l}):g("Toastify__toast-body",_),style:E}),null!=B&&d.createElement("div",{className:g("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},B),d.createElement("div",null,i)),q,d.createElement(M,(0,m.Z)((0,m.Z)({},N&&!S?{key:"pb-".concat(N)}:{}),{},{rtl:L,theme:P,delay:c,isRunning:n,isIn:k,closeToast:p,hide:f,type:l,style:x,className:C,controlledProgress:S,progress:Z||0}))))},z=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},P=N(z("bounce",!0)),D=(N(z("slide",!0)),N(z("zoom")),N(z("flip")),(0,d.forwardRef)((function(t,e){var n=w(t),a=n.getToastToRender,o=n.containerRef,r=n.isToastActive,s=t.className,i=t.style,c=t.rtl,u=t.containerId;function l(t){var e=g("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":c});return b(s)?s({position:t,rtl:c,defaultClassName:e}):g(e,C(s))}return(0,d.useEffect)((function(){e&&(e.current=o.current)}),[]),d.createElement("div",{ref:o,className:"Toastify",id:u},a((function(t,e){var n=e.length?(0,m.Z)({},i):(0,m.Z)((0,m.Z)({},i),{},{pointerEvents:"none"});return d.createElement("div",{className:l(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var a=t.content,o=t.props;return d.createElement(B,(0,m.Z)((0,m.Z)({},o),{},{isIn:r(o.toastId),style:(0,m.Z)((0,m.Z)({},o.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(o.key)}),a)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:"top-right",transition:P,autoClose:5e3,closeButton:j,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var F,S=new Map,H=[],q=1;function Q(){return""+q++}function V(t){return t&&(E(t.toastId)||_(t.toastId))?t.toastId:Q()}function G(t,e){return S.size>0?Z.emit(0,t,e):H.push({content:t,options:e}),e.toastId}function K(t,e){return(0,m.Z)((0,m.Z)({},e),{},{type:e&&e.type||t,toastId:V(e)})}function U(t){return function(e,n){return G(e,K(t,n))}}function W(t,e){return G(t,K("default",e))}W.loading=function(t,e){return G(t,K("default",(0,m.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},W.promise=function(t,e,n){var a,o=e.pending,r=e.error,s=e.success;o&&(a=E(o)?W.loading(o,n):W.loading(o.render,(0,m.Z)((0,m.Z)({},n),o)));var i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},c=function(t,e,o){if(null!=e){var r=(0,m.Z)((0,m.Z)((0,m.Z)({type:t},i),n),{},{data:o}),s=E(e)?{render:e}:e;return a?W.update(a,(0,m.Z)((0,m.Z)({},r),s)):W(s.render,(0,m.Z)((0,m.Z)({},r),s)),o}W.dismiss(a)},u=b(t)?t():t;return u.then((function(t){return c("success",s,t)})).catch((function(t){return c("error",r,t)})),u},W.success=U("success"),W.info=U("info"),W.error=U("error"),W.warning=U("warning"),W.warn=W.warning,W.dark=function(t,e){return G(t,K("default",(0,m.Z)({theme:"dark"},e)))},W.dismiss=function(t){S.size>0?Z.emit(1,t):H=H.filter((function(e){return null!=t&&e.options.toastId!==t}))},W.clearWaitingQueue=function(t){return void 0===t&&(t={}),Z.emit(5,t)},W.isActive=function(t){var e=!1;return S.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},W.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,a=S.get(n||F);return a&&a.getToast(t)}(t,e);if(n){var a=n.props,o=n.content,r=(0,m.Z)((0,m.Z)((0,m.Z)({delay:100},a),e),{},{toastId:e.toastId||t,updateId:Q()});r.toastId!==t&&(r.staleId=t);var s=r.render||o;delete r.render,G(s,r)}}),0)},W.done=function(t){W.update(t,{progress:1})},W.onChange=function(t){return Z.on(4,t),function(){Z.off(4,t)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Z.on(2,(function(t){F=t.containerId||t,S.set(F,t),H.forEach((function(t){Z.emit(0,t.content,t.options)})),H=[]})).on(3,(function(t){S.delete(t.containerId||t),0===S.size&&Z.off(0).off(1).off(5)}));var Y=function(){var t=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var a=63&n[t];e+=a<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a<63?"_":"-"}return e}();return t},J="add-contact_form__ofClA",X="add-contact_label__ZEyk2",$="add-contact_input__V056x",tt="add-contact_button__Q5eJu",et=n(9434),nt=n(6351),at=n(208),ot=Y(),rt=Y(),st=function(){var t=(0,d.useState)(""),e=(0,l.Z)(t,2),n=e[0],a=e[1],o=(0,d.useState)(""),r=(0,l.Z)(o,2),s=r[0],i=r[1],u=(0,et.v9)(nt.Af),f=(0,et.I0)(),m=function(t){var e=t.target,n=e.name,o=e.value;"name"===n&&a(o),"number"===n&&i(o)};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("form",{className:J,onSubmit:function(t){t.preventDefault();var e={name:n,number:s};u.find((function(t){return t.name===e.name}))?W.warn("".concat(n," is already in contacts")):f((0,at.uK)(e)),a(""),i("")},children:[(0,c.jsx)("label",{className:X,htmlFor:ot,children:"Name"}),(0,c.jsx)("input",{className:$,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:n,onChange:m,required:!0}),(0,c.jsx)("label",{className:X,htmlFor:rt,children:"Number"}),(0,c.jsx)("input",{className:$,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:s,onChange:m,required:!0}),(0,c.jsx)("button",{type:"submit",className:tt,children:"Add contact"})]})})},it="searchContact_wrapper__d2GaV",ct="searchContact_title__fWQw-",ut="searchContact_input__Wav7L",lt=n(9034),dt=function(t){var e=t.searchTitle,n=(0,et.I0)();return(0,et.v9)(nt.Af).length>0&&(0,c.jsxs)("div",{className:it,children:[(0,c.jsx)("h3",{className:ct,children:e}),(0,c.jsx)("input",{className:ut,type:"text",onInput:function(t){n((0,lt.a)(t.target.value.trim()))}})]})},ft=n(5861),mt=n(7757),pt=n.n(mt),vt=n(9983);function ht(t){return(0,vt.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.6 48 48 141.6 48 256s93.6 208 208 208 208-93.6 208-208S370.4 48 256 48zm0 62.4c34.3 0 62.4 28.1 62.4 62.4s-28.1 62.4-62.4 62.4-62.4-28.1-62.4-62.4 28.1-62.4 62.4-62.4zm0 300.4c-52 0-97.8-27-124.8-66.6 1-41.6 83.2-64.5 124.8-64.5s123.8 22.9 124.8 64.5c-27 39.5-72.8 66.6-124.8 66.6z"}}]})(t)}var gt="savedContact_item__YHJ8c",yt="savedContact_icon__nIQGS",Tt="savedContact_itemText__LbYcm",_t="savedContact_btn__u2-Ka",Et=function(t){var e=t.id,n=t.name,a=t.number;return(0,c.jsxs)("li",{className:gt,children:[(0,c.jsxs)("p",{className:Tt,children:[(0,c.jsx)(ht,{className:yt}),n,": ",a]}),(0,c.jsx)("button",{className:_t,type:"button","data-id":e,children:"Delete"})]},n)},bt="contacts_list__XMBj2",Ct=function(){var t=(0,et.v9)(nt.Af),e=(0,et.v9)(nt.AD),n=(0,et.I0)(),a=function(){var t=(0,ft.Z)(pt().mark((function t(e){var a;return pt().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("BUTTON"!==e.target.tagName){t.next=5;break}return a=e.target.getAttribute("data-id"),t.next=4,n((0,at.GK)(a));case 4:n((0,at.yF)());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return t.length>0?(0,c.jsx)("ul",{onClick:a,className:bt,children:(""!==e?t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):""===e?t:void 0).map((function(t){var e=t.id,n=t.name,a=t.number;return(0,c.jsx)(Et,{id:e,name:n,number:a},e)}))}):(0,c.jsx)("p",{className:"text-message",children:"The contact list is empty."})},xt=function(){var t=(0,et.I0)(),e=(0,et.v9)(nt.ry),n=(0,et.v9)(nt.BJ);return(0,d.useEffect)((function(){t((0,at.yF)())}),[t]),(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)(D,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),(0,c.jsx)(st,{}),(0,c.jsxs)(u,{title:"Contacts",children:[n&&!e&&(0,c.jsx)(a.Z,{}),(0,c.jsx)(dt,{searchTitle:"Find contacts by name"}),(0,c.jsx)(Ct,{})]})]})}}}]);
//# sourceMappingURL=233.ec4c5546.chunk.js.map