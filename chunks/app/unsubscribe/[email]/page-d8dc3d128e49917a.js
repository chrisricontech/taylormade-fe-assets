(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[184],{6157:function(e,t,r){Promise.resolve().then(r.bind(r,9547))},9782:function(e,t,r){"use strict";r.d(t,{Fs:function(){return s},tO:function(){return n}});var a=r(994),c=r(2307),l=r(9584);let o=(0,a.ZF)({apiKey:"AIzaSyBXlb5oSgzDm-ywBdu6E1OFBrNCIGEsPJc",authDomain:"taylor-made-referral-app.firebaseapp.com",databaseURL:"https://taylor-made-referral-app-default-rtdb.firebaseio.com",projectId:"taylor-made-referral-app",storageBucket:"taylor-made-referral-app.appspot.com",messagingSenderId:"704463799241",appId:"1:704463799241:web:c60d98964a1045c4555e18",measurementId:"G-H8NYFZH8WW"}),s=(0,c.N8)(o),n=(0,l.cF)(o,"gs://taylor-made-referral-app.appspot.com")},9547:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var a=r(7437),c=r(2265),l=r(9782),o=r(2307),s=r(2808),n=r.n(s),i=r(6560),u=r.n(i),m=r(9584),f=e=>{let{title:t="",subtitle:r="",fontSize:o=1,layoutType:s="col",image:n=""}=e,[i,f]=(0,c.useState)();(0,c.useEffect)(()=>{if(""!==n){let e=(0,m.iH)(l.tO,n);(0,m.Jt)(e).then(e=>{console.log(e),f(e)}).catch(e=>{console.log(e)})}},[n]);let d={col:"flex-col",row:"flex-row"};return Object.keys(d).find(e=>d[e]===s),(0,a.jsxs)("div",{className:"relative block hero-banner overflow-hidden bg-cover bg-center ".concat(d[s]," w-full justify-center px-3 md:px-0 py-10 md:py-16 mb-4 md:mb-10"),children:[i&&(0,a.jsx)("img",{src:i,alt:"hero banner",className:"absolute w-full h-full top-0 left-0 z-0"}),(0,a.jsx)("h1",{className:"".concat(u().className," flex-1 text-center z-10 text-").concat(1+o,"xl sm:text-").concat(2+o,"xl md:text-").concat(3+o,"xl"),children:t}),""!==r&&(0,a.jsx)("h1",{className:"".concat(u().className," flex-1 text-center z-10 text-").concat(1+o,"xl sm:text-").concat(2+o,"xl md:text-").concat(3+o,"xl"),children:r})]})};function d(e){let{params:t}=e,[r,s]=(0,c.useState)(""),[i,u]=(0,c.useState)("");return(0,c.useEffect)(()=>{if(t.email){let e=t.email.replace(/%40/g,"@");u(e);let r=(0,o.iH)(l.Fs,"Referenced"),a=(0,o.IO)(r,(0,o.g2)("referredEmail"),(0,o.EW)(e),(0,o.Kk)(1));(0,o.U2)(a).then(e=>{if(e.exists()){let t=Object.keys(e.val())[0],r=(0,o.iH)(l.Fs,"Referenced/".concat(t));(0,o.Vx)(r,{optin:!0}).then(()=>{s("unsubscribed")}).catch(e=>{s("error"),console.error(e)})}else s("empty"),console.log("No data available")}).catch(e=>{s("error"),console.error(e)})}else s("error"),console.error("No email provided")},[t.email]),(0,a.jsxs)("main",{className:"".concat(n().className," flex min-h-screen flex-col items-center pb-36 p-0"),children:[(0,a.jsx)(f,{title:"Taylor Made Referral Unsubscribe Service"}),(0,a.jsx)("h1",{className:"mb-6",children:i}),(0,a.jsx)("h2",{children:"unsubscribed"!==r&&"error"!==r&&"empty"!==r?"Unsubscribing...":""}),(0,a.jsx)("h2",{children:"unsubscribed"==r?"You have been unsubscribed.":""}),(0,a.jsx)("h2",{children:"unsubscribed"==r?"Thank you for using our service.":""}),(0,a.jsx)("h2",{children:"empty"==r?"You are currently unsubscribed.":""}),(0,a.jsx)("h3",{children:"error"==r?"An error occurred":""})]})}},2808:function(e){e.exports={style:{fontFamily:"'__Roboto_792391', '__Roboto_Fallback_792391'",fontWeight:400,fontStyle:"normal"},className:"__className_792391"}},6560:function(e){e.exports={style:{fontFamily:"'__Roboto_628334', '__Roboto_Fallback_628334'",fontWeight:900,fontStyle:"normal"},className:"__className_628334"}}},function(e){e.O(0,[481,483,971,938,744],function(){return e(e.s=6157)}),_N_E=e.O()}]);