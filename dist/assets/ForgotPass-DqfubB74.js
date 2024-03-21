import{j as e,L as p,r as a,u as b,a as k,_ as m}from"./index-MFkXzy34.js";import{S as C}from"./SailInnovationLogo-Cdy1uYFH.js";import{a as I}from"./axios-Bo0ATomq.js";import{F as u,R as L,C as x}from"./index-Bj0r4h-7.js";import{I as E}from"./index-BmFh8N38.js";import"./index-B8Q89q-y.js";const M=({isOpen:l,onRequestClose:r})=>l?e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto",children:e.jsxs("div",{className:"relative w-auto max-w-lg p-4 mx-auto my-6 bg-white rounded-lg shadow-lg",children:[e.jsx("div",{className:"absolute top-0 right-0 p-2",children:e.jsx("button",{onClick:r,className:"text-gray-400 hover:text-gray-500",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:" Password reset successful!"}),e.jsx("p",{className:"mt-2 text-sm text-gray-500",children:"You are now a verified student, proceed to login into your account"}),e.jsx("div",{className:"px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:e.jsx(p,{to:"/signin",children:e.jsx("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-6 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",children:"Ok"})})})]})]})}):null;var P={};const D=()=>{const[l,r]=a.useState(!1),[_,c]=a.useState(""),[g,h]=a.useState(!1),[o,f]=a.useState({email:"",password:""}),[d,j]=a.useState({email:""}),v=()=>{h(!1)},y=b();a.useLayoutEffect(()=>{document.title="Login | Sail Admin Portal",sessionStorage.getItem("user")&&(window.location.href="/resetpassword")},[]);const w=s=>{const{name:n,value:i}=s.target;f(t=>({...t,[n]:i}))},N=()=>{let s={};return o.email||(s.email="Email is required"),j(s),Object.keys(s).length===0},S=async s=>{var n;s.preventDefault(),r(!0);try{if(N()){const{email:i}=o,t=await I.post(P.REACT_APP_SSMP_BACKEND_API+"user/forgotPassword",{email:i});c((n=t.data.responseMessage)==null?void 0:n.toUpperCase()),t.data.responseCode==="00"?(m.success(t.data.responseMessage,{duration:4e3,position:"top-center"}),sessionStorage.getItem("token"),sessionStorage.getItem("userRole"),c("Login successful"),y("/dashboard")):(c("Invalid credentials"),m.error(t.data.responseMessage,{duration:4e3,position:"top-center"}),r(!1))}}catch(i){r(!1),console.log(i)}};return e.jsxs("div",{className:"grid-cols-2  h-[100svh]",children:[e.jsx("div",{className:"w-[10rem] mx-[2rem]",children:e.jsx("img",{src:C,alt:"SailLogo"})}),e.jsxs("div",{className:"justify-center m-auto my-[4rem] items-center bg-white w-[25rem]",children:[e.jsx("div",{className:"text-center text-2xl font-bold mt-[50%]",children:e.jsx("h1",{children:"Forgot Password"})}),e.jsx("div",{className:"block justify-center items-center flex-col h-80 mt-10 ",children:e.jsx("div",{className:"ml-[1.4rem] ",children:e.jsx(u,{layout:"vertical",onFinish:S,fields:[{name:"email",value:o==null?void 0:o.email}],children:e.jsxs(L,{children:[e.jsx(x,{span:24,children:e.jsx(u.Item,{rules:[{required:!0,message:"Please input your EmailAddress!"}],validateStatus:d.email?"error":"",help:d.email,children:e.jsx(E,{onChange:w,name:"email",type:"email",id:"email",placeholder:"Email Address",className:"py-3"})})}),e.jsx(x,{span:24,children:e.jsxs(p,{to:"/resetpassword",children:[e.jsx(k,{loading:l,type:"primary",htmlType:"submit",className:"bg-[#134c98] mt-[2rem] flex items-center justify-center py-5",block:!0,children:"Forgot Password"}),e.jsx(M,{isOpen:g,onRequestClose:v})]})})]})})})})]})]})};export{D as default};