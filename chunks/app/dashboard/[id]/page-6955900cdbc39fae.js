(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[467],{7318:function(e,t,a){Promise.resolve().then(a.bind(a,2375))},9782:function(e,t,a){"use strict";a.d(t,{Fs:function(){return i},tO:function(){return o}});var s=a(994),l=a(2307),r=a(9584);let n=(0,s.ZF)({apiKey:"AIzaSyBXlb5oSgzDm-ywBdu6E1OFBrNCIGEsPJc",authDomain:"taylor-made-referral-app.firebaseapp.com",databaseURL:"https://taylor-made-referral-app-default-rtdb.firebaseio.com",projectId:"taylor-made-referral-app",storageBucket:"taylor-made-referral-app.appspot.com",messagingSenderId:"704463799241",appId:"1:704463799241:web:c60d98964a1045c4555e18",measurementId:"G-H8NYFZH8WW"}),i=(0,l.N8)(n),o=(0,r.cF)(n,"gs://taylor-made-referral-app.appspot.com")},2375:function(e,t,a){"use strict";a.r(t);var s=a(9309);t.default=s.default},9309:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var s=a(7437),l=a(2265),r=a(9782),n=a(2307),i=a(338);function o(e){let{selector:t=""}=e;return(0,s.jsx)("div",{className:"".concat(t," absolute top-0 left-0 z-50 max-w-full w-full min-h-screen h-screen bg-opacity-50 bg-black"),children:(0,s.jsx)("div",{className:"flex justify-center items-center min-h-full pt-4",children:(0,s.jsx)("div",{className:"h-8 w-8 animate-spin rounded-full border-4 border-solid border-slate-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:(0,s.jsx)("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})})})}function m(e){let{params:t}=e,[a,m]=(0,l.useState)({}),[c,d]=(0,l.useState)([]),[f,u]=(0,l.useState)(0),[x,h]=(0,l.useState)(0),[N,p]=(0,l.useState)([]),[b,w]=(0,l.useState)(!1),[j,v]=(0,l.useState)(""),[g,P]=(0,l.useState)(""),[S,y]=(0,l.useState)(""),[E,_]=(0,l.useState)({email:"",userName:"",firstName:"",lastName:"",earnedPoints:0,redeemedPoints:0,referredUsers:[]});return(0,l.useEffect)(()=>{if(""!==g&&null!=g){w(!0);let e=(0,n.iH)(r.Fs,"Referencers"),t=(0,n.IO)(e,(0,n.g2)("email"),(0,n.EW)(g),(0,n.Kk)(1)),a=(0,n.iH)(r.Fs,"Referrals"),s=(0,n.IO)(a,(0,n.g2)("referrerEmail"),(0,n.EW)(g)),l=(0,n.iH)(r.Fs,"TmUsers"),i=(0,n.IO)(l,(0,n.g2)("email"),(0,n.EW)(g),(0,n.Kk)(1));Promise.all([(0,n.U2)(t),(0,n.U2)(s),(0,n.U2)(i)]).then(e=>{let[t,a,s]=e,l={email:"",userName:"",firstName:"",lastName:"",earnedPoints:0,redeemedPoints:0,referredUsers:[]};if(t.exists()){let e=t.val(),a=Object.keys(e);l.earnedPoints=e[a.toString()].earnedPoints,l.redeemedPoints=e[a.toString()].redeemedPoints}else console.log("No data available");if(a.exists()){let e=a.val(),t=[];for(let a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]={email:e[a].referredEmail,status:e[a].status});m(t)}else console.log("No referral data available");if(s.exists()){let e=s.val(),t=Object.keys(e)[0],a=e[t];l.email=a.email,l.userName=a.first_name+" "+a.last_name,l.firstName=a.first_name,l.lastName=a.last_name,_(l)}else console.log("No user data available");w(!1)}).catch(e=>{console.error(e),w(!1)})}},[g]),(0,l.useEffect)(()=>{d(Object.values(a))},[a]),(0,l.useEffect)(()=>{u(f)},[f]),(0,l.useEffect)(()=>{h(x)},[E]),(0,l.useEffect)(()=>{t.id&&(v(t.id),fetch("/api/tm/user/".concat(t.id),{method:"GET"}).then(e=>e.text()).then(e=>{let t=JSON.parse(e).user;P(t.email);let a=(0,n.iH)(r.Fs,"Referencers"),s=(0,n.IO)(a,(0,n.g2)("email"),(0,n.EW)(t.email));(0,n.U2)(s).then(e=>{if(e.exists()){let a=e.val(),s=Object.keys(a);_({...E,userName:t.first_name+" "+t.last_name,firstName:t.first_name,lastName:t.last_name,email:t.email,earnedPoints:a[s.toString()].earnedPoints,redeemedPoints:a[s.toString()].redeemedPoints})}else console.log("No data available")}).catch(e=>{console.error(e)})}).catch(e=>console.log("error",e)))},[t.id]),(0,l.useEffect)(()=>{var e;console.log("myParam",S),y(null!==(e=new URLSearchParams(window.location.search).get("userId"))&&void 0!==e?e:"")}),(0,l.useEffect)(()=>{S&&""!==S&&(v(S),fetch("/api/tm/user/".concat(S),{method:"GET"}).then(e=>e.text()).then(e=>{let t=JSON.parse(e).user;P(t.email);let a=(0,n.iH)(r.Fs,"Referencers"),s=(0,n.IO)(a,(0,n.g2)("email"),(0,n.EW)(t.email));(0,n.U2)(s).then(e=>{if(e.exists()){let a=e.val(),s=Object.keys(a);_({...E,userName:t.first_name+" "+t.last_name,firstName:t.first_name,lastName:t.last_name,email:t.email,earnedPoints:a[s.toString()].earnedPoints,redeemedPoints:a[s.toString()].redeemedPoints})}else console.log("No data available")}).catch(e=>{console.error(e)})}).catch(e=>console.log("error",e)))},[S]),(0,s.jsxs)("div",{className:"flex min-h-screen flex-col items-center pb-36 p-0",children:[(0,s.jsxs)("div",{className:"max-w-2xl w-full px-6 md:px-0",children:[(0,s.jsx)(i.Z,{text:"Referral Dashboard"}),(0,s.jsx)("div",{className:"max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex mt-6",children:(0,s.jsxs)("div",{className:"flex w-full",children:[(0,s.jsx)("div",{className:"flex-auto w-70",children:"User Name"}),(0,s.jsxs)("div",{className:"flex-auto w-30 font-bold font-mono text-right",children:[E.firstName," ",E.lastName]})]})}),(0,s.jsx)("div",{className:"max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex mt-6",children:(0,s.jsxs)("div",{className:"flex w-full",children:[(0,s.jsx)("div",{className:"flex-auto w-70",children:"Total Referral Points Earned"}),(0,s.jsx)("div",{className:"flex-auto w-30 font-bold font-mono text-right",children:E.earnedPoints})]})}),(0,s.jsx)("div",{className:"max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex mt-6",children:(0,s.jsxs)("div",{className:"flex w-full",children:[(0,s.jsx)("div",{className:"flex-auto w-70",children:"Total Referral Points Redeemed"}),(0,s.jsx)("div",{className:"flex-auto w-30 font-bold font-mono text-right",children:E.redeemedPoints})]})})]}),(0,s.jsxs)("div",{className:"relative max-w-2xl w-full pb-16 px-6 md:px-0",children:[(0,s.jsx)(i.Z,{text:"Referred Users"}),(0,s.jsxs)("ul",{className:"referrals-list min-w-100 min-h-20 block",children:[b?(0,s.jsx)(o,{}):null,c.map((e,t)=>(0,s.jsxs)("li",{className:"flex align-items-center text-left w-full mt-6",children:[(0,s.jsx)("div",{className:"flex-auto w-70",children:String(e.email)}),(0,s.jsx)("div",{className:"flex-auto w-30 font-bold font-mono text-right",children:String(e.status)})]},t))]}),0!==Object.keys(a).length||b?null:(0,s.jsx)("p",{className:"text-center mt-6",children:"No referred users found"})]})]})}},338:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var s=a(7437);a(2265);var l=a(6560),r=a.n(l);function n(e){let{text:t=""}=e;return(0,s.jsx)("div",{className:"form-header max-w-2xl w-full items-center justify-between font-mono text-sm lg:flex mt-6 pb-3",children:(0,s.jsx)("h5",{className:"".concat(r().className),children:t})})}}},function(e){e.O(0,[481,535,971,938,744],function(){return e(e.s=7318)}),_N_E=e.O()}]);