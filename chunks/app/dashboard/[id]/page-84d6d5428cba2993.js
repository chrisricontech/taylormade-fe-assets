(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[467],{7318:function(e,t,l){Promise.resolve().then(l.bind(l,2375))},9782:function(e,t,l){"use strict";l.d(t,{Fs:function(){return c},tO:function(){return i}});var s=l(994),a=l(2307),r=l(9584);let n=(0,s.ZF)({apiKey:"AIzaSyBXlb5oSgzDm-ywBdu6E1OFBrNCIGEsPJc",authDomain:"taylor-made-referral-app.firebaseapp.com",databaseURL:"https://taylor-made-referral-app-default-rtdb.firebaseio.com",projectId:"taylor-made-referral-app",storageBucket:"taylor-made-referral-app.appspot.com",messagingSenderId:"704463799241",appId:"1:704463799241:web:c60d98964a1045c4555e18",measurementId:"G-H8NYFZH8WW"}),c=(0,a.N8)(n),i=(0,r.cF)(n,"gs://taylor-made-referral-app.appspot.com")},2375:function(e,t,l){"use strict";l.r(t);var s=l(9309);t.default=s.default},9309:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var s=l(7437),a=l(2265),r=l(9782),n=l(2307),c=l(4220),i=l(338);function o(e){let{selector:t=""}=e;return(0,s.jsx)("div",{className:"".concat(t," absolute top-0 left-0 z-50 max-w-full w-full min-h-screen h-screen bg-opacity-50 bg-black"),children:(0,s.jsx)("div",{className:"flex justify-center items-center min-h-full pt-4",children:(0,s.jsx)("div",{className:"h-8 w-8 animate-spin rounded-full border-4 border-solid border-slate-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:(0,s.jsx)("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})})})}function m(e){let{params:t}=e,[l,m]=(0,a.useState)({}),[d,f]=(0,a.useState)(0),[x,u]=(0,a.useState)(0),[h,p]=(0,a.useState)([]),[N,b]=(0,a.useState)(!1),[j,w]=(0,a.useState)(""),[v,g]=(0,a.useState)(""),[y,S]=(0,a.useState)({email:"",userName:"",firstName:"",lastName:"",earnedPoints:0,redeemedPoints:0,referredUsers:[]});return(0,a.useEffect)(()=>{if(""!==v){b(!0);let e=(0,n.IO)((0,n.iH)(r.Fs,"Referrals"),(0,n.g2)("referrerEmail"),(0,n.EW)(v));(0,n.U2)(e).then(e=>{e.exists()?(m(e.val()),document.querySelector(".spin-referrals-list")):console.log("No data available"),b(!1)}).catch(e=>{console.error(e),b(!1)})}},[v]),(0,a.useEffect)(()=>{f(d)},[d]),(0,a.useEffect)(()=>{t.id&&(w(t.id),fetch("/api/tm/user/".concat(t.id),{method:"GET"}).then(e=>e.text()).then(e=>{let t=JSON.parse(e).user;g(t.email);let l=(0,n.iH)(r.Fs,"Referencers"),s=(0,n.IO)(l,(0,n.g2)("email"),(0,n.EW)(t.email));(0,n.U2)(s).then(e=>{if(e.exists()){let l=e.val(),s=Object.keys(l);S({...y,userName:t.first_name+" "+t.last_name,firstName:t.first_name,lastName:t.last_name,email:t.email,earnedPoints:l[s.toString()].earnedPoints,redeemedPoints:l[s.toString()].redeemedPoints})}else console.log("No data available")}).catch(e=>{console.error(e)})}).catch(e=>console.log("error",e)))},[t.id]),(0,s.jsxs)("div",{className:"flex min-h-screen flex-col items-center pb-36 p-0",children:[(0,s.jsx)(c.Z,{title:"TaylorMade Golf",subtitle:"Referral Program"}),(0,s.jsxs)("div",{className:"max-w-2xl w-full px-6 md:px-0",children:[(0,s.jsx)(i.Z,{text:"Referral Dashboard"}),(0,s.jsx)("div",{className:"max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex mt-6",children:(0,s.jsxs)("div",{className:"flex w-full",children:[(0,s.jsx)("div",{className:"flex-auto w-70",children:"User Name"}),(0,s.jsxs)("div",{className:"flex-auto w-30 font-bold font-mono text-right",children:[y.firstName," ",y.lastName]})]})}),(0,s.jsx)("div",{className:"max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex mt-6",children:(0,s.jsxs)("div",{className:"flex w-full",children:[(0,s.jsx)("div",{className:"flex-auto w-70",children:"Total Referral Points Earned"}),(0,s.jsx)("div",{className:"flex-auto w-30 font-bold font-mono text-right",children:y.earnedPoints})]})}),(0,s.jsx)("div",{className:"max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex mt-6",children:(0,s.jsxs)("div",{className:"flex w-full",children:[(0,s.jsx)("div",{className:"flex-auto w-70",children:"Total Referral Points Redeemed"}),(0,s.jsx)("div",{className:"flex-auto w-30 font-bold font-mono text-right",children:y.redeemedPoints})]})})]}),(0,s.jsxs)("div",{className:"relative max-w-2xl w-full pb-16 px-6 md:px-0",children:[(0,s.jsx)(i.Z,{text:"Referred Users"}),(0,s.jsxs)("ul",{className:"referrals-list min-w-100 min-h-20 block",children:[N?(0,s.jsx)(o,{}):null,Object.keys(l).map(e=>{let t=l[e];return t&&"referredEmail"in t&&"status"in t?(0,s.jsxs)("li",{className:"flex align-items-center text-left w-full mt-6",children:[(0,s.jsx)("div",{className:"flex-auto w-70",children:String(t.referredEmail)}),(0,s.jsx)("div",{className:"flex-auto w-30 font-bold font-mono text-right",children:String(t.status)})]},e):null})]}),0!==Object.keys(l).length||N?null:(0,s.jsx)("p",{className:"text-center mt-6",children:"No referred users found"})]})]})}},4220:function(e,t,l){"use strict";var s=l(7437),a=l(2265),r=l(6560),n=l.n(r),c=l(9584),i=l(9782);t.Z=e=>{let{title:t="",subtitle:l="",fontSize:r=1,layoutType:o="col",image:m=""}=e,[d,f]=(0,a.useState)();(0,a.useEffect)(()=>{if(""!==m){let e=(0,c.iH)(i.tO,m);(0,c.Jt)(e).then(e=>{console.log(e),f(e)}).catch(e=>{console.log(e)})}},[m]);let x={col:"flex-col",row:"flex-row"};return Object.keys(x).find(e=>x[e]===o),(0,s.jsxs)("div",{className:"relative block hero-banner overflow-hidden bg-cover bg-center ".concat(x[o]," w-full justify-center px-3 md:px-0 py-10 md:py-16 mb-4 md:mb-10"),children:[d&&(0,s.jsx)("img",{src:d,alt:"hero banner",className:"absolute w-full h-full top-0 left-0 z-0"}),(0,s.jsx)("h1",{className:"".concat(n().className," flex-1 text-center z-10 text-").concat(1+r,"xl sm:text-").concat(2+r,"xl md:text-").concat(3+r,"xl"),children:t}),""!==l&&(0,s.jsx)("h1",{className:"".concat(n().className," flex-1 text-center z-10 text-").concat(1+r,"xl sm:text-").concat(2+r,"xl md:text-").concat(3+r,"xl"),children:l})]})}},338:function(e,t,l){"use strict";l.d(t,{Z:function(){return n}});var s=l(7437);l(2265);var a=l(6560),r=l.n(a);function n(e){let{text:t=""}=e;return(0,s.jsx)("div",{className:"form-header max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex mt-6 pb-3",children:(0,s.jsx)("h5",{className:"".concat(r().className),children:t})})}}},function(e){e.O(0,[481,535,971,938,744],function(){return e(e.s=7318)}),_N_E=e.O()}]);