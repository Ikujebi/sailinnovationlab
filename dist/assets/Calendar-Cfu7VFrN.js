import{N as x,r as p,j as e,M as h}from"./index-C_P-k2xR.js";import{C as f}from"./index-32__iMi3.js";function j(n){return x({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"},child:[]}]})(n)}const C=({eventData:n})=>{const[s,c]=p.useState(!1),i=()=>{c(!s)},o=t=>{const a=t.format("YYYY-MM-DD"),l=n.filter(r=>r.eventDate===a);h.info({title:"Events",content:e.jsx("div",{children:l.map((r,m)=>e.jsx("p",{children:r.eventName},m))})})},d=t=>{const a=t.format("YYYY-MM-DD"),l=n.some(r=>r.eventDate===a);return e.jsx("div",{style:{background:l?"#1890ff":"inherit",borderRadius:"50%",padding:"4px",textAlign:"center"},onClick:()=>o(t),children:t.date()})};return e.jsxs("div",{children:[e.jsx("header",{className:" cursor-[pointer]",onClick:i,children:e.jsxs("h1",{className:"flex gap-2 text-green-300 text-[1.6rem]",children:[s?"close calendar":"open calendar"," ",e.jsx("span",{className:"mt-[.75rem] ",children:e.jsx(j,{})})," "]})}),s&&e.jsx("div",{className:"mx-1",children:e.jsx(f,{cellRender:d})})]})};export{C};
