"use strict";(self.webpackChunkshopee_app=self.webpackChunkshopee_app||[]).push([[923],{1411:(e,n,i)=>{i.d(n,{A:()=>f});var t,o,l,r=i(5043),s=i(1338),a=i(7528),d=i(4512);const c=d.Ay.div(t||(t=(0,a.A)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    padding: 20px;\n    border-radius: 20px;\n    border: 1px solid #dcdcdc;\n"]))),p=d.Ay.h1(o||(o=(0,a.A)(["\n   margin: 20px 0;\n"]))),u=d.Ay.div(l||(l=(0,a.A)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 300px;\n    font-size: 15px;\n    margin: 10px 0;\n    .green{\n        color: #49b149;\n    }\n    &.final{\n        border-top: 1px solid #dcdcdc;\n        padding-top: 20px;\n    }\n"])));var m=i(1906),x=i(3003),h=i(579);function v(e){const{billDetails:n={},paymentStage:i=!1,paymentFunc:t}=e,{totalPriceWithoutDiscount:o,totalPrice:l,totalDiscount:r}=n,a=o-l;let d="Continue",x=e.goToNextStage;return i&&(d="Make Payment",x=t),(0,h.jsxs)(c,{children:[(0,h.jsx)(p,{children:"Price Details"}),(0,h.jsxs)("div",{children:[(0,h.jsxs)(u,{children:[(0,h.jsx)("div",{children:"Total MRP"}),(0,h.jsxs)("div",{children:[" ",(0,s.nO)(o),"  "]})]}),(0,h.jsxs)(u,{children:[(0,h.jsx)("div",{children:"Discount on MRP:"}),(0,h.jsxs)("div",{className:"green",children:[" -",(0,s.nO)(a),"  "]})]}),(0,h.jsxs)(u,{children:[(0,h.jsx)("div",{children:"Discount Got "}),(0,h.jsxs)("div",{children:[" ",r,"%"]})]}),(0,h.jsxs)(u,{className:"final",children:[(0,h.jsx)("div",{children:"Total Amount"}),(0,h.jsxs)("div",{children:[" ",(0,s.nO)(l)," "]})]})]}),(0,h.jsx)(m.A,{onClick:()=>x(),sx:{width:"100%"},size:"large",variant:"contained",children:d})]})}const f=(0,x.Ng)(null,(e=>({goToNextStage:()=>e({type:"INCREMENT_USR_STAGE"})})))(r.memo(v))},8638:(e,n,i)=>{i.r(n),i.d(n,{default:()=>F});var t=i(5043),o=i(1411),l=i(6607),r=i(8093),s=i(675),a=i(1338);const d=(e,n)=>({type:"PAYMENT_API_RESP",payload:{status:e,data:n}});var c,p,u,m,x=i(3003),h=i(7528),v=i(4512);const f=v.Ay.div(c||(c=(0,h.A)(["\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #dcdcdc;\n    padding: 20px;\n    border-radius: 20px;\n    margin-top: 50px;\n    .r1{\n        padding: 20px 0;\n    }\n"]))),y=v.Ay.div(p||(p=(0,h.A)(["\n    display: flex;\n    flex-direction: column;\n    font-size: 15px;\n    .icon{\n        color: #6bb96b;\n        font-size: 50px;\n        box-shadow: 4px 7px 10px #00800054;\n        border-radius: 50%;\n        width: 50px;\n        height: 50px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: transparent;\n        margin: 10px auto;\n    }\n    .m1{\n        font-weight: bold;\n        margin: 5px;\n    }\n"]))),g=v.Ay.div(u||(u=(0,h.A)(["\n    display: flex;\n    flex-direction: column;\n    border-top: 1px solid #dcdcdc;\n"]))),j=v.Ay.div(m||(m=(0,h.A)(["\n    display: flex;\n    justify-content: space-between;\n    width: 300px;\n    font-size: 13px;\n    margin: 5px;\n    color: gray;\n"])));var A=i(579);function b(e){var n,i,t;const{paymentDetails:o}=e,{data:l={}}=o,{name:r="",payload:s={}}=l;return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(f,{children:[(0,A.jsxs)(y,{className:"r1",children:[(0,A.jsx)("div",{className:"icon",children:(0,A.jsx)("i",{className:"fa-solid fa-circle-check"})}),(0,A.jsx)("div",{className:"m1",children:"Payment Success"}),(0,A.jsxs)("div",{className:"m1",children:["INR ",s.paymentAmount||0]})]}),(0,A.jsxs)(g,{className:"r1",children:[(0,A.jsxs)(j,{children:[(0,A.jsx)("div",{children:"Reference ID"}),(0,A.jsx)("div",{children:r})]}),(0,A.jsxs)(j,{children:[(0,A.jsx)("div",{children:"Payment Method"}),(0,A.jsx)("div",{children:s.paymentMode})]})]}),(0,A.jsxs)(g,{className:"r1",children:[(0,A.jsxs)(j,{children:[(0,A.jsx)("div",{children:"Payee Name"}),(0,A.jsx)("div",{children:null===s||void 0===s||null===(n=s.userDetails)||void 0===n?void 0:n.name})]}),(0,A.jsxs)(j,{children:[(0,A.jsx)("div",{children:"Payee EmailId"}),(0,A.jsx)("div",{children:null===s||void 0===s||null===(i=s.userDetails)||void 0===i?void 0:i.emailId})]}),(0,A.jsxs)(j,{children:[(0,A.jsx)("div",{children:"Payee Phone Number"}),(0,A.jsx)("div",{children:null===s||void 0===s||null===(t=s.userDetails)||void 0===t?void 0:t.phoneNumber})]})]})]})})}const S=(0,x.Ng)((e=>({paymentDetails:e.paymentModel.paymentDetails})),(e=>({goToListingpage:()=>e({type:"RESET_STEP"})})))(t.memo(b));var w,N,P,T,D,z,C=i(1412);const E=v.Ay.div(w||(w=(0,h.A)(["\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-wrap: wrap;\n    @media only screen and (max-width: 1024px){\n        margin-top: 50px;\n    }\n"]))),M=v.Ay.div(N||(N=(0,h.A)(["\n    display: flex;\n    align-items: center;\n    padding: 20px;\n    border-radius: 20px;\n    border: 1px solid #dcdcdc;\n    .payment-selection{\n        .MuiTypography-root{\n        background: #f7eff7cc;\n        padding: 0 10px;\n        border-radius: 20px;\n        width: 200px;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        }\n    }\n"]))),R=v.Ay.div(P||(P=(0,h.A)(['\n  display: flex;\n  align-items: center;\n  font-size: 15px;\n  .txt{\n    color: darkslategray;\n    font-family: "Poppins", sans-serif;\n    margin: 0 20px;\n  }\n  .icon{\n    color: cadetblue;\n    font-size: 20px;\n  }\n']))),I=v.Ay.div(T||(T=(0,h.A)(["\n    height: 100vh;\n    border-left: 1px dashed #dcdcdc;\n    margin: 0 50px;\n    @media only screen and (max-width: 1024px){\n        height: 20px;\n    }\n"]))),k=v.Ay.div(D||(D=(0,h.A)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    .main-title{\n        font-weight: bold;\n        font-size: 13px;\n        margin: 10px 0;\n    }\n"]))),_=v.Ay.div(z||(z=(0,h.A)(["\n    border: 1px dashed #ae4c4b;\n    background: #f2dedf;\n    border-radius: 20px;\n    padding: 20px;\n    margin-bottom: 10px;\n    color: #ae4c4b;\n    font-size: 13px;\n    font-weight: bold;\n"]))),B=e=>{const{productsCartItems:n,userProfileDetails:i,paymentDetails:d,deliveryAddress:c}=e,{billDetails:p}=n,{data:u}=i;let m=u?u[null===u||void 0===u?void 0:u.uid]:{};const{status:x="",data:h}=d,[v,f]=(0,t.useState)("1001_111_cod");let y="Back",g=e.goToPrevpage;"success"===x&&(y="Do More Shopping",g=e.goToListingpage);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(C.k8,{txt:y,func:g}),"error"===x&&(0,A.jsx)(_,{children:h}),"success"===x?(0,A.jsx)(S,{}):(0,A.jsxs)(E,{"data-testid":"payment-view",children:[(0,A.jsx)(M,{children:(0,A.jsx)(r.A,{className:"payment-selection","aria-labelledby":"demo-radio-buttons-group-label",defaultValue:"1001_111_cod",name:"radio-buttons-group",children:Object.entries(a.nv||{}).map((e=>{let[n,i]=e;const t=i.options;return(0,A.jsxs)(k,{children:[(0,A.jsx)("div",{className:"main-title",children:i.title}),(0,A.jsx)(A.Fragment,{children:t.map((e=>{return(0,A.jsx)(s.A,{onClick:()=>f(e.id),labelPlacement:"start",value:e.id,control:(0,A.jsx)(l.A,{}),label:(0,A.jsx)(A.Fragment,{children:(n=e,(0,A.jsxs)(R,{children:[(0,A.jsx)("div",{className:"icon",children:(0,A.jsx)("i",{className:n.iconCls})}),(0,A.jsx)("div",{className:"txt",children:n.title})]},n.id))})},e.id);var n}))})]},i.id)}))})}),(0,A.jsx)(I,{}),(0,A.jsx)(o.A,{billDetails:p,paymentStage:!0,paymentFunc:()=>{let n={paymentMode:v,paymentAmount:(null===p||void 0===p?void 0:p.totalPrice)||0,userDetails:{emailId:null===m||void 0===m?void 0:m.emailId,phoneNumber:(null===m||void 0===m?void 0:m.phoneNumber)||c.mobile,name:(null===m||void 0===m?void 0:m.displayName)||c.name,deliveryAddress:c}};e.doPayment(n)}})]})]})},F=(0,x.Ng)((e=>({productsCartItems:e.billingModel.productsCartItems,userProfileDetails:e.userProfileModel.userProfileDetails,paymentDetails:e.paymentModel.paymentDetails,deliveryAddress:e.checkoutModel.deliveryAddress})),(e=>({doPayment:n=>e(function(e){return n=>{n(d("loading"));let i={method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify(e)};fetch("https://anjiee-default-rtdb.firebaseio.com/payment_list.json",i).then((e=>e.json())).then((i=>{i.payload=e,n(d("success",i)),n({type:"RESET_CART_ITEMS",payload:{}})})).catch((e=>{let i=(null===e||void 0===e?void 0:e.message)||"Something went wrong! Please try again.";n(d("error",i))}))}}(n)),goToListingpage:()=>e({type:"RESET_STEP"}),goToPrevpage:()=>e({type:"DECREMENT_USR_STAGE"})})))(t.memo(B))},1053:(e,n,i)=>{i.d(n,{A:()=>t});const t=i(5043).createContext(void 0)},4827:(e,n,i)=>{function t(e){let{props:n,states:i,muiFormControl:t}=e;return i.reduce(((e,i)=>(e[i]=n[i],t&&"undefined"===typeof n[i]&&(e[i]=t[i]),e)),{})}i.d(n,{A:()=>t})},5213:(e,n,i)=>{i.d(n,{A:()=>l});var t=i(5043),o=i(1053);function l(){return t.useContext(o.A)}},9662:(e,n,i)=>{i.d(n,{A:()=>g});var t=i(8168),o=i(5043),l=i(8587),r=i(8387),s=i(8606),a=i(6803),d=i(2876),c=i(4535),p=i(7056),u=i(4579);function m(e){return(0,u.Ay)("MuiSvgIcon",e)}(0,p.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var x=i(579);const h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=(0,c.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:i}=e;return[n.root,"inherit"!==i.color&&n["color".concat((0,a.A)(i.color))],n["fontSize".concat((0,a.A)(i.fontSize))]]}})((e=>{let{theme:n,ownerState:i}=e;var t,o,l,r,s,a,d,c,p,u,m,x,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:i.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(t=n.transitions)||null==(o=t.create)?void 0:o.call(t,"fill",{duration:null==(l=n.transitions)||null==(l=l.duration)?void 0:l.shorter}),fontSize:{inherit:"inherit",small:(null==(r=n.typography)||null==(s=r.pxToRem)?void 0:s.call(r,20))||"1.25rem",medium:(null==(a=n.typography)||null==(d=a.pxToRem)?void 0:d.call(a,24))||"1.5rem",large:(null==(c=n.typography)||null==(p=c.pxToRem)?void 0:p.call(c,35))||"2.1875rem"}[i.fontSize],color:null!=(u=null==(m=(n.vars||n).palette)||null==(m=m[i.color])?void 0:m.main)?u:{action:null==(x=(n.vars||n).palette)||null==(x=x.action)?void 0:x.active,disabled:null==(h=(n.vars||n).palette)||null==(h=h.action)?void 0:h.disabled,inherit:void 0}[i.color]}})),f=o.forwardRef((function(e,n){const i=(0,d.A)({props:e,name:"MuiSvgIcon"}),{children:c,className:p,color:u="inherit",component:f="svg",fontSize:y="medium",htmlColor:g,inheritViewBox:j=!1,titleAccess:A,viewBox:b="0 0 24 24"}=i,S=(0,l.A)(i,h),w=o.isValidElement(c)&&"svg"===c.type,N=(0,t.A)({},i,{color:u,component:f,fontSize:y,instanceFontSize:e.fontSize,inheritViewBox:j,viewBox:b,hasSvgAsChild:w}),P={};j||(P.viewBox=b);const T=(e=>{const{color:n,fontSize:i,classes:t}=e,o={root:["root","inherit"!==n&&"color".concat((0,a.A)(n)),"fontSize".concat((0,a.A)(i))]};return(0,s.A)(o,m,t)})(N);return(0,x.jsxs)(v,(0,t.A)({as:f,className:(0,r.A)(T.root,p),focusable:"false",color:g,"aria-hidden":!A||void 0,role:A?"img":void 0,ref:n},P,S,w&&c.props,{ownerState:N,children:[w?c.props.children:c,A?(0,x.jsx)("title",{children:A}):null]}))}));f.muiName="SvgIcon";const y=f;function g(e,n){function i(i,o){return(0,x.jsx)(y,(0,t.A)({"data-testid":"".concat(n,"Icon"),ref:o},i,{children:e}))}return i.muiName=y.muiName,o.memo(o.forwardRef(i))}},4516:(e,n,i)=>{i.d(n,{A:()=>t});const t=i(1944).A},1944:(e,n,i)=>{i.d(n,{A:()=>o});var t=i(5043);function o(e){let{controlled:n,default:i,name:o,state:l="value"}=e;const{current:r}=t.useRef(void 0!==n),[s,a]=t.useState(i);return[r?n:s,t.useCallback((e=>{r||a(e)}),[])]}},992:(e,n,i)=>{var t;i.d(n,{A:()=>s});var o=i(5043);let l=0;const r=(t||(t=i.t(o,2)))["useId".toString()];function s(e){if(void 0!==r){const n=r();return null!=e?e:n}return function(e){const[n,i]=o.useState(e),t=e||n;return o.useEffect((()=>{null==n&&(l+=1,i("mui-".concat(l)))}),[n]),t}(e)}}}]);
//# sourceMappingURL=PaymentDetails.42b51334.chunk.js.map