import{i as U,l as D,W as B,m as X,X as G,r as s,o as N,c as z,Y as H,Z as Q,t as Y,$ as Z,F as J}from"./index-C_P-k2xR.js";import{g as K,i as ee,a as oe}from"./index-CC0-QH3K.js";const re=e=>{const{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:o,componentCls:r,calc:a}=e,l=a(o).sub(n).equal(),d=a(t).sub(n).equal();return{[r]:Object.assign(Object.assign({},D(e)),{display:"inline-block",height:"auto",paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${B(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${r}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${r}-close-icon`]:{marginInlineStart:d,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${r}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${r}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${r}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},T=e=>{const{lineWidth:t,fontSizeIcon:n,calc:o}=e,r=e.fontSizeSM;return X(e,{tagFontSize:r,tagLineHeight:B(o(e.lineHeightSM).mul(r).equal()),tagIconSize:o(n).sub(o(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg})},x=e=>({defaultBg:new G(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText}),k=U("Tag",e=>{const t=T(e);return re(t)},x);var te=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const ne=s.forwardRef((e,t)=>{const{prefixCls:n,style:o,className:r,checked:a,onChange:l,onClick:d}=e,u=te(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:f,tag:g}=s.useContext(N),h=v=>{l==null||l(!a),d==null||d(v)},C=f("tag",n),[p,y,S]=k(C),c=z(C,`${C}-checkable`,{[`${C}-checkable-checked`]:a},g==null?void 0:g.className,r,y,S);return p(s.createElement("span",Object.assign({},u,{ref:t,style:Object.assign(Object.assign({},o),g==null?void 0:g.style),className:c,onClick:h})))}),se=ne,le=e=>K(e,(t,n)=>{let{textColor:o,lightBorderColor:r,lightColor:a,darkColor:l}=n;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:o,background:a,borderColor:r,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}}),ae=H(["Tag","preset"],e=>{const t=T(e);return le(t)},x);function ce(e){return typeof e!="string"?e:e.charAt(0).toUpperCase()+e.slice(1)}const m=(e,t,n)=>{const o=ce(n);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${o}Bg`],borderColor:e[`color${o}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}},ie=H(["Tag","status"],e=>{const t=T(e);return[m(t,"success","Success"),m(t,"processing","Info"),m(t,"error","Error"),m(t,"warning","Warning")]},x);var de=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]]);return n};const ge=(e,t)=>{const{prefixCls:n,className:o,rootClassName:r,style:a,children:l,icon:d,color:u,onClose:f,closeIcon:g,closable:h,bordered:C=!0}=e,p=de(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","closeIcon","closable","bordered"]),{getPrefixCls:y,direction:S,tag:c}=s.useContext(N),[v,O]=s.useState(!0);s.useEffect(()=>{"visible"in p&&O(p.visible)},[p.visible]);const I=ee(u),P=oe(u),$=I||P,W=Object.assign(Object.assign({backgroundColor:u&&!$?u:void 0},c==null?void 0:c.style),a),i=y("tag",n),[_,q,A]=k(i),F=z(i,c==null?void 0:c.className,{[`${i}-${u}`]:$,[`${i}-has-color`]:u&&!$,[`${i}-hidden`]:!v,[`${i}-rtl`]:S==="rtl",[`${i}-borderless`]:!C},o,r,q,A),j=b=>{b.stopPropagation(),f==null||f(b),!b.defaultPrevented&&O(!1)},[,M]=Q({closable:h,closeIcon:g??(c==null?void 0:c.closeIcon),customCloseIconRender:b=>b===null?s.createElement(Y,{className:`${i}-close-icon`,onClick:j}):s.createElement("span",{className:`${i}-close-icon`,onClick:j},b),defaultCloseIcon:null,defaultClosable:!1}),R=typeof p.onClick=="function"||l&&l.type==="a",E=d||null,V=E?s.createElement(s.Fragment,null,E,l&&s.createElement("span",null,l)):l,w=s.createElement("span",Object.assign({},p,{ref:t,className:F,style:W}),V,M,I&&s.createElement(ae,{key:"preset",prefixCls:i}),P&&s.createElement(ie,{key:"status",prefixCls:i}));return _(R?s.createElement(Z,{component:"Tag"},w):w)},L=s.forwardRef(ge);L.CheckableTag=se;const Ce=L,be=()=>{const[e,t]=s.useState([]),[n,o]=s.useState(!1),r=sessionStorage.getItem("token"),a=s.useCallback(async()=>{o(!0);try{const d=await(await fetch(`${J}getAllParticipants`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}})).json();console.log("roboboo",d.data),o(!1),t(d.data)}catch(l){o(!1),console.log(l)}},[r]);return s.useEffect(()=>{a()},[a]),{participantsInfo:e,loading:n}};export{Ce as T,be as u};