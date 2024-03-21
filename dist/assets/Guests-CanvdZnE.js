import{r as n,j as e,M as R}from"./index-MFkXzy34.js";import{a as p}from"./axios-Bo0ATomq.js";import{S}from"./index-B3feB2rc.js";import{F as t,R as I,C as i}from"./index-Bj0r4h-7.js";import{I as m}from"./index-BmFh8N38.js";import{S as c}from"./index-DvYSdXp_.js";import{s as d}from"./index-CWgEG4yM.js";import"./index-B8Q89q-y.js";const F="/assets/sail_logo-removebg-preview-BQQ8o9H5.png",E="/assets/stem-Dqnpjblc.jpg",O="/assets/tech talent-BdSw9zio.png",V="/assets/datascience-Bx20E8Oo.png",k=()=>{const[h,u]=n.useState(!1),[f,g]=n.useState(!1),[j,v]=n.useState(""),[L,b]=n.useState([]),[a,w]=n.useState({firstName:"",lastName:"",phoneNumber:"",email:"",sex:"",address:"",reasonForVisit:""}),N=async()=>{const s="https://ssmp-api.onrender.com/api/v1/visit/visitRequest";console.log("Form URL:",s);try{u(!1);const r=await p.post(s);return console.log(s),r.data}catch(r){return console.error("Error fetching options:",r),[]}finally{u(!1)}};n.useEffect(()=>{N().then(s=>b(s)).catch(s=>console.error("Error setting location options:",s))},[]);const l=(s,r)=>{w(o=>({...o,[s]:r}))},y=async()=>{const s="https://ssmp-api.onrender.com/api/v1/visit/visitRequest";try{if(u(!0),!a.sex)throw new Error("Please select a gender.");console.log("Data being sent:",a);const r=await p.post(s,a);console.log("Form submitted!",r.data),d.success("Form submitted!"),console.log("Response:",r.data);const o=r.data.user.visitor._id;console.log(o);const q=await p.get("https://ssmp-api.onrender.com/api/v1/visit/getVisitorqrCode",{params:{id:o}}),{imageUrl:C}=q.data;v(C),g(!0)}catch(r){if(console.error("Error submitting form:",r),r.response){const{status:o,data:x}=r.response;o===400&&x.error==="email_exists"?d.error("Email already exists"):d.error(`Server error: ${o} - ${x.message}`)}else r.request?d.error("Network error: No response received from the server."):d.error("An unexpected error occurred. Please try again later.")}finally{u(!1)}};return e.jsxs("div",{className:" flex flex-col bg-blue-100 h-screen overflow-auto",children:[e.jsx("img",{src:F,alt:"",className:"w-[8rem] h-[5rem] mb-[3rem] ml-[2rem] mt-5"}),e.jsxs("main",{className:" flex flex-col mx-[auto] justify-center items-center",children:[e.jsxs("footer",{className:"mb-9 flex justify-center items-center gap-[.7rem] md:gap-[2rem] lg:gap-[2rem] xl:gap-[2rem] 2xl:gap-[2rem]",children:[e.jsx("img",{src:E,alt:"",className:"w-[7rem] md:w-[15rem] xl:w-[15rem] lg:w-[15rem] 2xl:w-[15rem]"}),e.jsx("img",{src:O,alt:"",className:"w-[7rem] md:w-[15rem] xl:w-[15rem] lg:w-[15rem] 2xl:w-[15rem]"}),e.jsx("img",{src:V,alt:"",className:"w-[7rem] md:w-[15rem] xl:w-[15rem] lg:w-[15rem] 2xl:w-[15rem]"})]}),e.jsx(S,{spinning:h,children:e.jsx(t,{className:"flex flex justify-center",children:e.jsxs(I,{gutter:24,className:"md:w-[70%] flex justify-center px-8",children:[e.jsx(i,{xs:24,md:12,children:e.jsx(t.Item,{label:"First Name",name:"firstName",rules:[{required:!0,message:"first name is required"}],children:e.jsx(m,{type:"text",onChange:s=>l("firstName",s.target.value),value:a.firstName,className:""})})}),e.jsx(i,{xs:24,md:12,children:e.jsx(t.Item,{label:"Last Name",name:"lastName",rules:[{required:!0,message:"last name is required"}],children:e.jsx(m,{type:"text",onChange:s=>l("lastName",s.target.value),value:a.lastName})})}),e.jsx(i,{xs:24,md:12,children:e.jsx(t.Item,{label:"Phone No.",name:"phoneNumber",rules:[{required:!0,message:"Phone number is required"},{pattern:/^[0][\d]{10}$/,message:"Invalid phone number"}],children:e.jsx(m,{type:"tel",onChange:s=>l("phoneNumber",s.target.value),value:a.phoneNumber})})}),e.jsx(i,{xs:24,md:12,children:e.jsx(t.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Email is required"},{pattern:/^[\w\.-]+@\w+\.\w+(\.\w+)?$/,message:"Invalid email format"}],children:e.jsx(m,{type:"email",onChange:s=>l("email",s.target.value),value:a.email})})}),e.jsx(i,{xs:24,md:12,children:e.jsx(t.Item,{label:"Sex",name:"sex",rules:[{required:!0,message:"Gender type is required"}],children:e.jsxs(c,{onChange:s=>l("sex",s),value:a.sex,children:[e.jsx(c.Option,{value:"male",children:"Male"}),e.jsx(c.Option,{value:"female",children:"Female"}),e.jsx(c.Option,{value:"binary",children:"Non-Binary"}),e.jsx(c.Option,{value:"others",children:"Prefer not to say"})]})})}),e.jsx(i,{xs:24,md:12,children:e.jsx(t.Item,{label:"Address",name:"homeAddress",rules:[{required:!0,message:"Residential Address is required"}],children:e.jsx(m,{className:"input",onChange:s=>l("address",s.target.value),value:a.address})})}),e.jsx(i,{xs:24,md:12,children:e.jsx(t.Item,{label:"Reason For Visit",name:"reasonForVisit",rules:[{required:!0,message:"Residential Address is required"}],children:e.jsx(m,{className:"input",onChange:s=>l("reasonForVisit",s.target.value),value:a.reasonForVisit})})})]})})})]}),e.jsx("footer",{className:"mb-[1rem] flex justify-center items-center gap-[.7rem] md:gap-[2rem] lg:gap-[2rem] xl:gap-[2rem] 2xl:gap-[2rem]",children:e.jsx("button",{onClick:y,className:"w-[8rem] rounded bg-[#48c4b4] p-2",children:"Submit"})}),e.jsx(R,{title:"QR Code",open:f,onCancel:()=>g(!1),footer:null,children:e.jsx("img",{src:j,alt:"QR Code",style:{maxWidth:"100%"}})})]})};export{k as default};