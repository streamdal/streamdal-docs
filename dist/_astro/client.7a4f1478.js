import{h as u,P as v}from"./preact.module.9adf8a76.js";const S="modulepreload",y=function(t){return"/"+t},h={},p=function(i,s,f){if(!s||s.length===0)return i();const d=document.getElementsByTagName("link");return Promise.all(s.map(r=>{if(r=y(r),r in h)return;h[r]=!0;const l=r.endsWith(".css"),a=l?'[rel="stylesheet"]':"";if(!!f)for(let n=d.length-1;n>=0;n--){const c=d[n];if(c.href===r&&(!l||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const e=document.createElement("link");if(e.rel=l?"stylesheet":S,l||(e.as="script",e.crossOrigin=""),e.href=r,document.head.appendChild(e),l)return new Promise((n,c)=>{e.addEventListener("load",n),e.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>i())},_=({value:t,name:i})=>t?u("astro-slot",{name:i,dangerouslySetInnerHTML:{__html:t}}):null;_.shouldComponentUpdate=()=>!1;var g=_;const m=new Map;var k=t=>async(i,s,{default:f,...d})=>{if(!t.hasAttribute("ssr"))return;for(const[a,o]of Object.entries(d))s[a]=u(g,{value:o,name:a});if(t.dataset.preactSignals){const{signal:a}=await p(()=>import("./signals.module.967fe86b.js"),["_astro/signals.module.967fe86b.js","_astro/preact.module.9adf8a76.js","_astro/hooks.module.b9808d06.js"]);let o=JSON.parse(t.dataset.preactSignals);for(const[e,n]of Object.entries(o)){if(!m.has(n)){const c=a(s[e]);m.set(n,c)}s[e]=m.get(n)}}function l({children:a}){let o=Object.fromEntries(Array.from(t.attributes).map(e=>[e.name,e.value]));return u(t.localName,o,a)}v(u(l,null,u(i,s,f!=null?u(g,{value:f}):f)),t.parentNode,t)};export{k as default};
