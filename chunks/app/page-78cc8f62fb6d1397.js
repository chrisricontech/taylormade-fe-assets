(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2221:function(e,t,a){Promise.resolve().then(a.bind(a,8513))},9782:function(e,t,a){"use strict";a.d(t,{Fs:function(){return o}});var s=a(994),r=a(2307),n=a(9584);let l=(0,s.ZF)({apiKey:"AIzaSyBXlb5oSgzDm-ywBdu6E1OFBrNCIGEsPJc",authDomain:"taylor-made-referral-app.firebaseapp.com",databaseURL:"https://taylor-made-referral-app-default-rtdb.firebaseio.com",projectId:"taylor-made-referral-app",storageBucket:"taylor-made-referral-app.appspot.com",messagingSenderId:"704463799241",appId:"1:704463799241:web:c60d98964a1045c4555e18",measurementId:"G-H8NYFZH8WW"}),o=(0,r.N8)(l);(0,n.cF)(l,"gs://taylor-made-referral-app.appspot.com")},8513:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return q}});var s=a(7437),r=a(2265),n=a(9782),l=a(2307),o=a(2808),i=a.n(o);function c(e){let{text:t="",href:a="",onClick:r=e=>{},target:n="_self",type:l="submit",extraClass:o=""}=e,c="bg-black transition ease-in-out delay-50 hover:bg-slate-500 text-white px-6 py-4";return"link"===l?(0,s.jsx)("a",{className:"".concat(i().className," ").concat(c," ").concat(o),href:a,target:n,children:t}):("submit"===l||"reset"===l||"button"===l)&&(0,s.jsx)("button",{className:"".concat(i().className," ").concat(c," ").concat(o),type:l,onClick:r,children:t})}var d=a(4220),u=a(3018),m=a(338),f=function(){for(var e,t,a=0,s="",r=arguments.length;a<r;a++)(e=arguments[a])&&(t=function e(t){var a,s,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t){if(Array.isArray(t)){var n=t.length;for(a=0;a<n;a++)t[a]&&(s=e(t[a]))&&(r&&(r+=" "),r+=s)}else for(s in t)t[s]&&(r&&(r+=" "),r+=s)}return r}(e))&&(s&&(s+=" "),s+=t);return s};let p=e=>"number"==typeof e&&!isNaN(e),h=e=>"string"==typeof e,x=e=>"function"==typeof e,g=e=>h(e)||x(e)?e:null,v=e=>(0,r.isValidElement)(e)||h(e)||x(e)||p(e);function y(e){let{enter:t,exit:a,appendPosition:s=!1,collapse:n=!0,collapseDuration:l=300}=e;return function(e){let{children:o,position:i,preventExitTransition:c,done:d,nodeRef:u,isIn:m,playToast:f}=e,p=s?`${t}--${i}`:t,h=s?`${a}--${i}`:a,x=(0,r.useRef)(0);return(0,r.useLayoutEffect)(()=>{let e=u.current,t=p.split(" "),a=s=>{s.target===u.current&&(f(),e.removeEventListener("animationend",a),e.removeEventListener("animationcancel",a),0===x.current&&"animationcancel"!==s.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",a),e.addEventListener("animationcancel",a)},[]),(0,r.useEffect)(()=>{let e=u.current,t=()=>{e.removeEventListener("animationend",t),n?function(e,t,a){void 0===a&&(a=300);let{scrollHeight:s,style:r}=e;requestAnimationFrame(()=>{r.minHeight="initial",r.height=s+"px",r.transition=`all ${a}ms`,requestAnimationFrame(()=>{r.height="0",r.padding="0",r.margin="0",setTimeout(t,a)})})}(e,d,l):d()};m||(c?t():(x.current=1,e.className+=` ${h}`,e.addEventListener("animationend",t)))},[m]),r.createElement(r.Fragment,null,o)}}function N(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let b=new Map,E=[],j=new Set,T=e=>j.forEach(t=>t(e)),_=()=>b.size>0;function w(e,t){var a;if(t)return!(null==(a=b.get(t))||!a.isToastActive(e));let s=!1;return b.forEach(t=>{t.isToastActive(e)&&(s=!0)}),s}function I(e,t){v(e)&&(_()||E.push({content:e,options:t}),b.forEach(a=>{a.buildToast(e,t)}))}function L(e,t){b.forEach(a=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===a.id&&a.toggle(e,null==t?void 0:t.id):a.toggle(e,null==t?void 0:t.id)})}function C(e){let{delay:t,isRunning:a,closeToast:s,type:n="default",hide:l,className:o,style:i,controlledProgress:c,progress:d,rtl:u,isIn:m,theme:p}=e,h=l||c&&0===d,g={...i,animationDuration:`${t}ms`,animationPlayState:a?"running":"paused"};c&&(g.transform=`scaleX(${d})`);let v=f("Toastify__progress-bar",c?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${p}`,`Toastify__progress-bar--${n}`,{"Toastify__progress-bar--rtl":u}),y=x(o)?o({rtl:u,type:n,defaultClassName:v}):f(v,o);return r.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":h},r.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${p} Toastify__progress-bar--${n}`}),r.createElement("div",{role:"progressbar","aria-hidden":h?"true":"false","aria-label":"notification timer",className:y,style:g,[c&&d>=1?"onTransitionEnd":"onAnimationEnd"]:c&&d<1?null:()=>{m&&s()}}))}let F=1,k=()=>""+F++;function S(e,t){return I(e,t),t.toastId}function P(e,t){return{...t,type:t&&t.type||e,toastId:t&&(h(t.toastId)||p(t.toastId))?t.toastId:k()}}function O(e){return(t,a)=>S(t,P(e,a))}function R(e,t){return S(e,P("default",t))}R.loading=(e,t)=>S(e,P("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),R.promise=function(e,t,a){let s,{pending:r,error:n,success:l}=t;r&&(s=h(r)?R.loading(r,a):R.loading(r.render,{...a,...r}));let o={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},i=(e,t,r)=>{if(null==t)return void R.dismiss(s);let n={type:e,...o,...a,data:r},l=h(t)?{render:t}:t;return s?R.update(s,{...n,...l}):R(l.render,{...n,...l}),r},c=x(e)?e():e;return c.then(e=>i("success",l,e)).catch(e=>i("error",n,e)),c},R.success=O("success"),R.info=O("info"),R.error=O("error"),R.warning=O("warning"),R.warn=R.warning,R.dark=(e,t)=>S(e,P("default",{theme:"dark",...t})),R.dismiss=function(e){var t,a;_()?null==e||h(t=e)||p(t)?b.forEach(t=>{t.removeToast(e)}):e&&("containerId"in e||"id"in e)&&((null==(a=b.get(e.containerId))?void 0:a.removeToast(e.id))||b.forEach(t=>{t.removeToast(e.id)})):E=E.filter(t=>null!=e&&t.options.toastId!==e)},R.clearWaitingQueue=function(e){void 0===e&&(e={}),b.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},R.isActive=w,R.update=function(e,t){void 0===t&&(t={});let a=((e,t)=>{var a;let{containerId:s}=t;return null==(a=b.get(s||1))?void 0:a.toasts.get(e)})(e,t);if(a){let{props:s,content:r}=a,n={delay:100,...s,...t,toastId:t.toastId||e,updateId:k()};n.toastId!==e&&(n.staleId=e);let l=n.render||r;delete n.render,S(l,n)}},R.done=e=>{R.update(e,{progress:1})},R.onChange=function(e){return j.add(e),()=>{j.delete(e)}},R.play=e=>L(!0,e),R.pause=e=>L(!1,e);let A="undefined"!=typeof window?r.useLayoutEffect:r.useEffect,$=e=>{let{theme:t,type:a,isLoading:s,...n}=e;return r.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${a})`,...n})},D={info:function(e){return r.createElement($,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement($,{...e},r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement($,{...e},r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement($,{...e},r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}},B=e=>{let{isRunning:t,preventExitTransition:a,toastRef:s,eventHandlers:n,playToast:l}=function(e){var t,a;let[s,n]=(0,r.useState)(!1),[l,o]=(0,r.useState)(!1),i=(0,r.useRef)(null),c=(0,r.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:u,closeToast:m,onClick:f,closeOnClick:p}=e;function h(){n(!0)}function x(){n(!1)}function g(t){let a=i.current;c.canDrag&&a&&(c.didMove=!0,s&&x(),c.delta="x"===e.draggableDirection?t.clientX-c.start:t.clientY-c.start,c.start!==t.clientX&&(c.canCloseOnClick=!1),a.style.transform=`translate3d(${"x"===e.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`},0)`,a.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function v(){document.removeEventListener("pointermove",g),document.removeEventListener("pointerup",v);let t=i.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return o(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(a=b.get((t={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))||a.setToggle(t.id,t.fn),(0,r.useEffect)(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||x(),window.addEventListener("focus",h),window.addEventListener("blur",x),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",x)}},[e.pauseOnFocusLoss]);let y={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",g),document.addEventListener("pointerup",v);let a=i.current;c.canCloseOnClick=!0,c.canDrag=!0,a.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=a.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=a.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){let{top:a,bottom:s,left:r,right:n}=i.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=r&&t.clientX<=n&&t.clientY>=a&&t.clientY<=s?x():h()}};return d&&u&&(y.onMouseEnter=x,e.stacked||(y.onMouseLeave=h)),p&&(y.onClick=e=>{f&&f(e),c.canCloseOnClick&&m()}),{playToast:h,pauseToast:x,isRunning:s,preventExitTransition:l,toastRef:i,eventHandlers:y}}(e),{closeButton:o,children:i,autoClose:c,onClick:d,type:u,hideProgressBar:m,closeToast:p,transition:h,position:g,className:v,style:y,bodyClassName:N,bodyStyle:E,progressClassName:j,progressStyle:T,updateId:_,role:w,progress:I,rtl:L,toastId:F,deleteToast:k,isIn:S,isLoading:P,closeOnClick:O,theme:R}=e,A=f("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":L},{"Toastify__toast--close-on-click":O}),$=x(v)?v({rtl:L,position:g,type:u,defaultClassName:A}):f(A,v),B=function(e){let{theme:t,type:a,isLoading:s,icon:n}=e,l=null,o={theme:t,type:a};return!1===n||(x(n)?l=n({...o,isLoading:s}):(0,r.isValidElement)(n)?l=(0,r.cloneElement)(n,o):s?l=D.spinner():a in D&&(l=D[a](o))),l}(e),M=!!I||!c,z={closeToast:p,type:u,theme:R},H=null;return!1===o||(H=x(o)?o(z):(0,r.isValidElement)(o)?(0,r.cloneElement)(o,z):function(e){let{closeToast:t,theme:a,ariaLabel:s="close"}=e;return r.createElement("button",{className:`Toastify__close-button Toastify__close-button--${a}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":s},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(z)),r.createElement(h,{isIn:S,done:k,position:g,preventExitTransition:a,nodeRef:s,playToast:l},r.createElement("div",{id:F,onClick:d,"data-in":S,className:$,...n,style:y,ref:s},r.createElement("div",{...S&&{role:w},className:x(N)?N({type:u}):f("Toastify__toast-body",N),style:E},null!=B&&r.createElement("div",{className:f("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!P})},B),r.createElement("div",null,i)),H,r.createElement(C,{..._&&!M?{key:`pb-${_}`}:{},rtl:L,theme:R,delay:c,isRunning:t,isIn:S,closeToast:p,hide:m,type:u,style:T,className:j,controlledProgress:M,progress:I||0})))},M=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},z=y(M("bounce",!0)),H=(y(M("slide",!0)),y(M("zoom")),y(M("flip")),{position:"top-right",transition:z,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function Z(e){let t={...H,...e},a=e.stacked,[s,n]=(0,r.useState)(!0),l=(0,r.useRef)(null),{getToastToRender:o,isToastActive:i,count:c}=function(e){let{subscribe:t,getSnapshot:a,setProps:s}=(0,r.useRef)(function(e){let t=e.containerId||1;return{subscribe(a){let s=function(e,t,a){let s=1,n=0,l=[],o=[],i=[],c=t,d=new Map,u=new Set,m=()=>{i=Array.from(d.values()),u.forEach(e=>e())},f=e=>{o=null==e?[]:o.filter(t=>t!==e),m()},y=e=>{let{toastId:t,onOpen:s,updateId:n,children:l}=e.props,i=null==n;e.staleId&&d.delete(e.staleId),d.set(t,e),o=[...o,e.props.toastId].filter(t=>t!==e.staleId),m(),a(N(e,i?"added":"updated")),i&&x(s)&&s((0,r.isValidElement)(l)&&l.props)};return{id:e,props:c,observe:e=>(u.add(e),()=>u.delete(e)),toggle:(e,t)=>{d.forEach(a=>{null!=t&&t!==a.props.toastId||x(a.toggle)&&a.toggle(e)})},removeToast:f,toasts:d,clearQueue:()=>{n-=l.length,l=[]},buildToast:(t,o)=>{var i,u;if((t=>{let{containerId:a,toastId:s,updateId:r}=t,n=d.has(s)&&null==r;return(a?a!==e:1!==e)||n})(o))return;let{toastId:b,updateId:E,data:j,staleId:T,delay:_}=o,w=()=>{f(b)},I=null==E;I&&n++;let L={...c,style:c.toastStyle,key:s++,...Object.fromEntries(Object.entries(o).filter(e=>{let[t,a]=e;return null!=a})),toastId:b,updateId:E,data:j,closeToast:w,isIn:!1,className:g(o.className||c.toastClassName),bodyClassName:g(o.bodyClassName||c.bodyClassName),progressClassName:g(o.progressClassName||c.progressClassName),autoClose:!o.isLoading&&(i=o.autoClose,u=c.autoClose,!1===i||p(i)&&i>0?i:u),deleteToast(){let e=d.get(b),{onClose:t,children:s}=e.props;x(t)&&t((0,r.isValidElement)(s)&&s.props),a(N(e,"removed")),d.delete(b),--n<0&&(n=0),l.length>0?y(l.shift()):m()}};L.closeButton=c.closeButton,!1===o.closeButton||v(o.closeButton)?L.closeButton=o.closeButton:!0===o.closeButton&&(L.closeButton=!v(c.closeButton)||c.closeButton);let C=t;(0,r.isValidElement)(t)&&!h(t.type)?C=(0,r.cloneElement)(t,{closeToast:w,toastProps:L,data:j}):x(t)&&(C=t({closeToast:w,toastProps:L,data:j}));let F={content:C,props:L,staleId:T};c.limit&&c.limit>0&&n>c.limit&&I?l.push(F):p(_)?setTimeout(()=>{y(F)},_):y(F)},setProps(e){c=e},setToggle:(e,t)=>{d.get(e).toggle=t},isToastActive:e=>o.some(t=>t===e),getSnapshot:()=>c.newestOnTop?i.reverse():i}}(t,e,T);b.set(t,s);let n=s.observe(a);return E.forEach(e=>I(e.content,e.options)),E=[],()=>{n(),b.delete(t)}},setProps(e){var a;null==(a=b.get(t))||a.setProps(e)},getSnapshot(){var e;return null==(e=b.get(t))?void 0:e.getSnapshot()}}}(e)).current;s(e);let n=(0,r.useSyncExternalStore)(t,a,a);return{getToastToRender:function(e){if(!n)return[];let t=new Map;return n.forEach(e=>{let{position:a}=e.props;t.has(a)||t.set(a,[]),t.get(a).push(e)}),Array.from(t,t=>e(t[0],t[1]))},isToastActive:w,count:null==n?void 0:n.length}}(t),{className:d,style:u,rtl:m,containerId:y}=t;function j(){a&&(n(!0),R.play())}return A(()=>{if(a){var e;let a=l.current.querySelectorAll('[data-in="true"]'),r=null==(e=t.position)?void 0:e.includes("top"),n=0,o=0;Array.from(a).reverse().forEach((e,t)=>{e.classList.add("Toastify__toast--stacked"),t>0&&(e.dataset.collapsed=`${s}`),e.dataset.pos||(e.dataset.pos=r?"top":"bot");let a=n*(s?.2:1)+(s?0:12*t);e.style.setProperty("--y",`${r?a:-1*a}px`),e.style.setProperty("--g","12"),e.style.setProperty("--s",""+(1-(s?o:0))),n+=e.offsetHeight,o+=.025})}},[s,c,a]),r.createElement("div",{ref:l,className:"Toastify",id:y,onMouseEnter:()=>{a&&(n(!1),R.pause())},onMouseLeave:j},o((e,t)=>{let s=t.length?{...u}:{...u,pointerEvents:"none"};return r.createElement("div",{className:function(e){let t=f("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":m});return x(d)?d({position:e,rtl:m,defaultClassName:t}):f(t,g(d))}(e),style:s,key:`container-${e}`},t.map(e=>{let{content:t,props:s}=e;return r.createElement(B,{...s,stacked:a,collapseAll:j,isIn:i(s.toastId,s.containerId),style:s.style,key:`toast-${s.key}`},t)}))}))}function q(){let[e,t]=(0,r.useState)(!1),[a,o]=(0,r.useState)(""),[f,p]=(0,r.useState)(),[h,x]=(0,r.useState)(!1),[g,v]=(0,r.useState)(!1),[y,N]=(0,r.useState)(!1),b=/^[a-zA-Z\s]+$/,E=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,6}$/,[j,T]=(0,r.useState)({referrerFirstName:"Test",referrerLastName:"User",referrerEmail:"test.user@mail.com",referredFirstName:"",referredLastName:"",referredEmail:""}),_=e=>{T({...j,[e.target.name]:e.target.value})},w=e=>{e.preventDefault();let{referrerFirstName:a,referrerLastName:s,referrerEmail:r,referredFirstName:i,referredLastName:c,referredEmail:d}=j;if(b.test(a)&&b.test(s)&&b.test(i)&&b.test(c)&&E.test(r)&&E.test(d)){let e=(0,l.iH)(n.Fs,"Referrals"),a=(0,l.iH)(n.Fs,"Referenced"),s=(0,l.IO)(a,(0,l.g2)("referredEmail"),(0,l.EW)(d));(0,l.U2)(s).then(s=>{if(s.exists())o("Referred user already exists, please try with a different email."),t(!1);else{let s={referredFirstName:i,referredLastName:c,referredEmail:d,dateAdded:new Date().toLocaleString()},n=(0,l.VF)(a,s);(0,l.t8)(n,s).then(()=>{let a={referrerEmail:r,referredEmail:d,status:"Submitted",referralDate:new Date().toLocaleString()},s=(0,l.VF)(e,a);(0,l.t8)(s,a).then(()=>{o("Submission in progress. Please wait"),t(!0),setTimeout(()=>{window.location.href="/success"},3e3)}).catch(e=>{o("Error submitting referral. Please try again."),t(!1)})}).catch(e=>{o("Error submitting referral. Please try again."),t(!1)})}}).catch(e=>{console.error("Error getting data:",e),o("Something went wrong. Please try again."),t(!1)})}else{o("Please enter valid names and emails."),t(!1);return}};return(0,r.useEffect)(()=>{""!==a&&(e?R.success(a):e?R.info(a):R.error(a))},[a,e]),(0,r.useEffect)(()=>{let e=(0,l.iH)(n.Fs,"FormData"),t=(0,l.IO)(e,(0,l.g2)("status"),(0,l.EW)("published"),(0,l.vh)(1));(0,l.U2)(t).then(e=>{if(e.exists()){p(e.val());let t=e.val();p(Object.keys(t).map(e=>t[e])[0])}else console.log("No data available")}).catch(e=>{console.error(e)})},[]),(0,s.jsxs)("main",{className:"".concat(i().className," flex min-h-screen flex-col items-center pb-36 p-0"),children:[(0,s.jsx)("span",{className:"hidden",children:null==f?void 0:f.banner}),(0,s.jsx)(d.Z,{title:"REFER A COWORKER",fontSize:2,image:null==f?void 0:f.banner}),(0,s.jsx)("div",{className:"max-w-2xl px-6 md:px-0",dangerouslySetInnerHTML:{__html:null==f?void 0:f.description}}),(0,s.jsxs)("form",{className:"max-w-2xl w-full px-6 md:px-0",onSubmit:w,autoComplete:"off",children:[(0,s.jsx)(m.Z,{text:"Your coworker or golf industry professional"}),(0,s.jsx)("div",{className:"max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex mt-6",children:(0,s.jsxs)("div",{className:"w-full columns-1 md:columns-3",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("label",{className:"".concat(i().className),htmlFor:"referredFirstName",children:"First Name"})})}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("input",{type:"text",className:"border border-slate-300 py-3 px-2 w-11/12",id:"referredFirstName",name:"referredFirstName",value:j.referredFirstName,onChange:e=>{T({...j,referredFirstName:e.target.value}),b.test(j.referredFirstName)?x(!1):x(!0)},maxLength:60,required:!0,autoComplete:"off"})})}),(0,s.jsx)("label",{className:"error-label text-xs text-red-600 ".concat(h&&""!=j.referredFirstName?"":"hidden"),children:"Please enter a valid name."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("label",{className:"".concat(i().className),htmlFor:"referredLastName",children:"Last Name"})})}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("input",{type:"text",className:"border border-slate-300 py-3 px-2 w-11/12",id:"referredLastName",name:"referredLastName",value:j.referredLastName,onChange:e=>{T({...j,referredLastName:e.target.value}),b.test(j.referredLastName)?v(!1):v(!0)},maxLength:60,required:!0,autoComplete:"off"})})}),(0,s.jsx)("label",{className:"error-label text-xs text-red-600 ".concat(g&&""!=j.referredLastName?"":"hidden"),children:"Please enter a valid name."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("label",{className:"".concat(i().className),htmlFor:"referredEmail",children:"Email"})})}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("input",{type:"email",className:"border border-slate-300 py-3 px-2 w-11/12",id:"referredEmail",name:"referredEmail",value:j.referredEmail,onChange:e=>{T({...j,referredEmail:e.target.value}),E.test(j.referredEmail)?N(!1):N(!0)},maxLength:140,required:!0,autoComplete:"off"})})}),(0,s.jsx)("label",{className:"error-label text-xs text-red-600 ".concat(y&&""!=j.referredEmail?"":"hidden"),children:"Please enter a valid email."})]})]})}),(0,s.jsx)(m.Z,{text:"YOUR INFORMATION"}),(0,s.jsx)("div",{className:"max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex mt-6",children:(0,s.jsxs)("div",{className:"w-full columns-1 md:columns-3",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("label",{className:"".concat(i().className),htmlFor:"referrerFirstName",children:"First Name"})})}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("input",{type:"text",className:"border border-slate-300 bg-slate-100 py-3 px-2 w-11/12",id:"referrerFirstName",name:"referrerFirstName",value:j.referrerFirstName,onChange:_,maxLength:60,readOnly:!0,required:!0,autoComplete:"off"})})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("label",{className:"".concat(i().className),htmlFor:"referrerLastName",children:"Last Name"})})}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("input",{type:"text",className:"border border-slate-300 bg-slate-100 py-3 px-2 w-11/12",id:"referrerLastName",name:"referrerLastName",value:j.referrerLastName,onChange:_,maxLength:60,readOnly:!0,required:!0,autoComplete:"off"})})})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("label",{className:"".concat(i().className),htmlFor:"referrerEmail",children:"Email"})})}),(0,s.jsx)("div",{className:"flex",children:(0,s.jsx)("div",{className:"flex-1",children:(0,s.jsx)("input",{type:"email",className:"border border-slate-300 bg-slate-100 py-3 px-2 w-11/12",id:"referrerEmail",name:"referrerEmail",value:j.referrerEmail,onChange:_,maxLength:140,readOnly:!0,required:!0,autoComplete:"off"})})})]})]})}),(0,s.jsx)("div",{className:"max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex mt-6",children:(0,s.jsx)("div",{children:(0,s.jsx)(c,{text:"SUBMIT REFERRAL",onClick:w})})})]}),(0,s.jsx)(Z,{position:"top-center"}),(0,s.jsx)(u.Z,{})]})}a(8062)},4220:function(e,t,a){"use strict";var s=a(7437),r=a(2265),n=a(6560),l=a.n(n);t.Z=e=>{let{title:t="",subtitle:a="",fontSize:n=1,layoutType:o="col",image:i=""}=e,[c,d]=(0,r.useState)("");(0,r.useEffect)(()=>{},[]);let u={col:"flex-col",row:"flex-row"};return Object.keys(u).find(e=>u[e]===o),(0,s.jsxs)("div",{style:{backgroundImage:c},className:"hero-banner overflow-hidden bg-cover bg-center flex ".concat(u[o]," w-full justify-center px-3 md:px-0 py-10 md:py-16 mb-4 md:mb-10"),children:[(0,s.jsx)("img",{src:c,alt:"hero banner",className:""}),(0,s.jsx)("h1",{className:"".concat(l().className," flex-1 text-center text-").concat(1+n,"xl sm:text-").concat(2+n,"xl md:text-").concat(3+n,"xl"),children:t}),""!==a&&(0,s.jsx)("h1",{className:"".concat(l().className," flex-1 text-center text-").concat(1+n,"xl sm:text-").concat(2+n,"xl md:text-").concat(3+n,"xl"),children:a})]})}},3018:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(7437);a(2265);var r=a(1396),n=a.n(r);function l(){return(0,s.jsx)("nav",{className:"fixed w-full bottom-0",children:(0,s.jsxs)("ul",{className:"flex justify-around bg-black text-white px-24 py-4",children:[(0,s.jsx)("li",{className:"w-20 text-center",children:(0,s.jsx)(n(),{href:"/",children:"Home"})}),(0,s.jsx)("li",{className:"w-20 text-center",children:(0,s.jsx)(n(),{href:"/dashboard",children:"Dashboard"})})]})})}},338:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(7437);a(2265);var r=a(6560),n=a.n(r);function l(e){let{text:t=""}=e;return(0,s.jsx)("div",{className:"form-header max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex mt-6 pb-3",children:(0,s.jsx)("h5",{className:"".concat(n().className),children:t})})}},8062:function(){},2808:function(e){e.exports={style:{fontFamily:"'__Roboto_a789c4', '__Roboto_Fallback_a789c4'",fontWeight:400,fontStyle:"normal"},className:"__className_a789c4"}}},function(e){e.O(0,[481,110,172,41,971,938,744],function(){return e(e.s=2221)}),_N_E=e.O()}]);