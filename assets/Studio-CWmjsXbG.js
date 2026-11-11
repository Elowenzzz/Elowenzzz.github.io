import{A as e,C as t,E as n,F as r,I as i,M as a,O as o,P as s,R as c,S as l,T as u,_ as d,a as f,b as ee,c as p,d as m,g as h,i as g,j as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T,v as E,w as D,x as O,y as k}from"./index-B0ZoW5cu.js";import{a as A,c as j,i as M,l as N,n as P,o as F,r as I,s as L,t as R,u as te}from"./RubbingPattern-DamU3K5t.js";import{n as z,t as B}from"./patterns-DbhpwIcV.js";import{r as ne,t as re}from"./serverStatus-Y8QfzH_a.js";var V={cross:`十字网格`,diamond:`斜格`,weave:`织纹`};function H(e,t){let n=N(t.palettes,e.paletteId),r=n?j(n,1,e.seed)[0]:void 0,i=r&&n?n.colors.indexOf(r):-1,a=(i>=0?n?.colorNames?.[i]:void 0)??n?.name??`未命名色`;return`${te[e.symmetry]} · ${a} · ${e.repeatX}×${e.repeatY}`}function ie(e,t){let n=N(t.palettes,e.paletteId),r=n?.colorNames&&n.colorNames.length>0?n.colorNames.slice(0,2):[n?.name??`未命名色`],i=V[t.grid.type];return`以「${t.name}」的${i}单元为起点，采用${te[e.symmetry]}、${e.repeatX} × ${e.repeatY} 重复，配色为「${r.join(` · `)}」。这是一幅基于${t.name}纹样语法的数字再创作，非历史文物复原。`}function ae(e){let t=Array.from(e).filter(e=>{let t=e.codePointAt(0)??0;return t>=32&&t!==127}).join(``);return Array.from(t.trim()).slice(0,24).join(``)}var U=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`,W=new Map([...U].map((e,t)=>[e,t])),oe=[`p1`,`pm`,`p2`,`p4`],se=[`paper`,`ink`,`none`],ce=[0,90,180,270];function G(e){let t=``,n=0,r=0;for(let i of e){for(n=n<<8|i,r+=8;r>=6;)r-=6,t+=U[n>>>r&63];n&=(1<<r)-1}return r>0&&(t+=U[n<<6-r&63]),t}function K(e){if(!e||!/^[A-Za-z0-9_-]+$/.test(e))return null;let t=[],n=0,r=0;for(let i of e){let e=W.get(i);if(e===void 0)return null;n=n<<6|e,r+=6,r>=8&&(r-=8,t.push(n>>>r&255)),n&=(1<<r)-1}return Uint8Array.from(t)}function q(e,t,n,r){for(let i=r-1;i>=0;i--){let r=n>>>i&1;e[t>>3]|=r<<7-(t&7),t++}return t}function J(e,t,n){let r=0;for(let i=0;i<n;i++){let n=e[t>>3]>>7-(t&7)&1;r=r<<1|n,t++}return{value:r,offset:t}}function le(e,t){if(!L.safeParse(e).success)return null;let n=t.findIndex(t=>t.id===e.patternId);if(n<0||n>255)return null;let r=t[n].palettes.findIndex(t=>t.id===e.paletteId);if(r<0||r>255)return null;let i=oe.indexOf(e.symmetry),a=se.indexOf(e.background),o=ce.indexOf(e.displayRotation);if(i<0||a<0||o<0)return null;let s=new Uint8Array(8),c=0;return c=q(s,c,1,8),c=q(s,c,n,8),c=q(s,c,i,2),c=q(s,c,e.repeatX-2,3),c=q(s,c,e.repeatY-2,3),c=q(s,c,r,8),c=q(s,c,Math.round(e.scale*100),8),c=q(s,c,a,2),c=q(s,c,e.seed,16),c=q(s,c,o,2),G(s)}function ue(e,t){let n=e.trim();if(!n||n.length>1800)return null;let r=K(n);if(!r||r.length!==8)return null;let i=0,a=J(r,i,8);if(i=a.offset,a.value!==1)return null;let o=J(r,i,8);if(i=o.offset,o.value>=t.length)return null;let s=t[o.value];if(!s)return null;let c=J(r,i,2);i=c.offset;let l=J(r,i,3);i=l.offset;let u=J(r,i,3);i=u.offset;let d=J(r,i,8);i=d.offset;let f=J(r,i,8);i=f.offset;let ee=J(r,i,2);i=ee.offset;let p=J(r,i,16);i=p.offset;let m=J(r,i,2),h=oe[c.value],g=se[ee.value],_=ce[m.value],v=s.palettes[d.value];if(!h||!g||_===void 0||!v||!s.allowedSymmetries.includes(h))return null;let y={patternId:s.id,symmetry:h,repeatX:l.value+2,repeatY:u.value+2,scale:f.value/100,paletteId:v.id,background:g,seed:p.value,displayRotation:_},b=L.safeParse(y);return b.success?b.data:null}var de={"2x":2048,"4x":4096};function fe(e,t){let n=String(e.seed).padStart(8,`0`);return`wenmai-${e.patternId}-${e.symmetry}-${e.repeatX}x${e.repeatY}-${n}.${t}`}function pe(e){let t=e.trimStart();return t.startsWith(`<?xml`)?e:`<?xml version="1.0" encoding="UTF-8"?>\n${t}`}function me(e){let t=Number(e.match(/<svg[^>]*\swidth="([\d.]+)"/)?.[1]),n=Number(e.match(/<svg[^>]*\sheight="([\d.]+)"/)?.[1]);return{width:Number.isFinite(t)&&t>0?t:600,height:Number.isFinite(n)&&n>0?n:600}}function he(e){return new Promise((t,n)=>{let r=new Image;r.decoding=`async`,r.onload=()=>t(r),r.onerror=()=>n(Error(`SVG 无法光栅化`)),r.src=e})}async function ge(e,t){let n=pe(e),r=URL.createObjectURL(new Blob([n],{type:`image/svg+xml;charset=utf-8`}));try{let e=await he(r),i=me(n),a=e.naturalWidth||i.width,o=e.naturalHeight||i.height,s=t/Math.max(a,o),c=Math.max(1,Math.round(a*s)),l=Math.max(1,Math.round(o*s)),u=document.createElement(`canvas`);u.width=c,u.height=l;let d=u.getContext(`2d`);if(!d)throw Error(`浏览器不支持 Canvas 2D`);d.imageSmoothingEnabled=!0,d.imageSmoothingQuality=`high`,d.drawImage(e,0,0,c,l);let f=await new Promise(e=>{u.toBlob(e,`image/png`)});if(!f)throw Error(`PNG 生成失败`);return f}finally{URL.revokeObjectURL(r)}}function _e(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.rel=`noopener`,document.body.appendChild(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),1e3)}function ve(e,t){_e(new Blob([pe(e)],{type:`image/svg+xml;charset=utf-8`}),t)}async function ye(e,t,n){_e(await ge(e,de[n]),t)}var Y=`wenmai.creations.v1`;function be(e){if(typeof e!=`object`||!e)return!1;let t=e;if(typeof t.id!=`string`||t.id.length===0||typeof t.patternId!=`string`||t.patternId.length===0||t.title!==void 0&&typeof t.title!=`string`||!Number.isFinite(t.createdAt)||t.origin!==`local`||t.nickname!==void 0&&typeof t.nickname!=`string`||t.remoteId!==void 0&&typeof t.remoteId!=`string`)return!1;let n=L.safeParse(t.params);return n.success&&n.data.patternId===t.patternId}function xe(e,t){return e.patternId===t.patternId&&e.symmetry===t.symmetry&&e.repeatX===t.repeatX&&e.repeatY===t.repeatY&&e.scale===t.scale&&e.paletteId===t.paletteId&&e.background===t.background&&e.seed===t.seed&&e.displayRotation===t.displayRotation}function Se(e,t,n){return e.find(e=>e.origin===`local`&&e.patternId===t.patternId&&e.title===n&&xe(e.params,t))}function X(e){return Array.isArray(e)?e.filter(be).sort((e,t)=>t.createdAt-e.createdAt).slice(0,24):[]}function Ce(e){return JSON.stringify(e.slice(0,24))}function we(){try{return typeof localStorage>`u`?null:localStorage}catch{return null}}function Te(){let e=we();if(!e)return[];try{let t=e.getItem(Y);return t?X(JSON.parse(t)):[]}catch{return[]}}function Z(e){let t=we();if(!t)return!1;try{return t.setItem(Y,Ce(e)),!0}catch{return!1}}function Ee(){return typeof crypto<`u`&&typeof crypto.randomUUID==`function`?crypto.randomUUID():`c-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function De(e,t,n=Date.now()){let r={id:Ee(),patternId:e.patternId,params:{...e},title:ae(t)||`未命名作品`,createdAt:Number.isFinite(n)?n:Date.now(),origin:`local`},i=[r,...Te()].slice(0,24),a=Z(i);return{ok:a,items:a?i:Te(),creation:a?r:void 0}}function Oe(e,t){let n=Te().map(n=>n.id===e?{...n,remoteId:t}:n);return{ok:Z(n),items:n}}function ke(e){let t=Te().filter(t=>t.id!==e);return{ok:Z(t),items:t}}var Ae=``,je=8e3,Me=class extends Error{status;code;issues;constructor(e,t,n,r){super(n),this.name=`ApiError`,this.status=e,this.code=t,this.issues=r}};function Ne(e){return typeof e==`object`&&e&&!Array.isArray(e)?e:null}function Pe(e){let t=Ne(e);if(!t||typeof t.id!=`string`||t.id.length===0||typeof t.patternId!=`string`||t.patternId.length===0||typeof t.createdAt!=`number`||!Number.isFinite(t.createdAt))return null;let n=L.safeParse(t.params);if(!n.success||n.data.patternId!==t.patternId)return null;let r=typeof t.nickname==`string`&&t.nickname.length>0?t.nickname:void 0;return{id:t.id,patternId:t.patternId,params:n.data,...r?{nickname:r}:{},createdAt:t.createdAt,origin:`server`}}function Fe(e){let t=Ne(e);if(!t||!Array.isArray(t.items))throw new Me(200,`malformed`,`共创墙返回格式不正确`);return{items:t.items.map(Pe).filter(e=>e!==null),nextCursor:typeof t.nextCursor==`string`?t.nextCursor:null}}function Ie(e){return typeof AbortSignal<`u`&&`timeout`in AbortSignal?AbortSignal.timeout(e):void 0}async function Le(e,t={},n=je){let r;try{r=await fetch(`${Ae}${e}`,{...t,headers:{accept:`application/json`,...t.headers??{}},signal:t.signal??Ie(n)})}catch{throw new Me(0,`network`,`无法连接共创墙，请检查网络或稍后再试`)}let i=await r.text(),a=null;if(i)try{a=JSON.parse(i)}catch{throw new Me(r.status,`malformed`,`共创墙返回的不是 JSON`)}if(!r.ok){let e=Ne(a),t=typeof e?.error==`string`?e.error:`http_error`,n=typeof e?.message==`string`?e.message:`共创墙请求失败（HTTP ${r.status}）`,i=Array.isArray(e?.issues)?e.issues.filter(e=>typeof e==`string`):void 0;throw new Me(r.status,t,n,i)}return a}async function Re(e={}){let t=new URLSearchParams;e.patternId&&t.set(`patternId`,e.patternId),e.limit&&t.set(`limit`,String(e.limit)),e.cursor&&t.set(`cursor`,e.cursor);let n=t.toString();return Fe(await Le(`/api/creations${n?`?${n}`:``}`,{signal:e.signal}))}async function ze(e,t){let n=Pe(Ne(await Le(`/api/creations`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({patternId:e.patternId,params:e,...t?{nickname:t}:{}})}))?.item);if(!n)throw new Me(200,`malformed`,`服务器返回的作品数据不完整`);return n}function Be(e){let t=e.replace(/<[^>]*>/g,``).replace(/[\u0000-\u001F\u007F]/g,``).replace(/[\u200B-\u200F\u2028-\u202E\u2060\uFEFF]/g,``);return Array.from(t.trim()).slice(0,20).join(``).trim()}function Ve(e){return e instanceof Me?e.status===0||e.status===502||e.status===503||e.status===504||e.status>=500&&e.code===`malformed`:!1}var He=/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i,Ue=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,We=/^#[0-9a-f]{6}$/;function Ge(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function Ke(e){if(!Number.isFinite(e))return 0;let t=e%360;return t<0?t+360:t}function qe(e){if(typeof e!=`string`)return null;let t=e.trim(),n=He.exec(t);if(n)return`#${n[1]}${n[1]}${n[2]}${n[2]}${n[3]}${n[3]}`.toLowerCase();let r=Ue.exec(t);return r?`#${r[1]}${r[2]}${r[3]}`.toLowerCase():null}function Je(e){if(typeof e!=`string`)return null;let t=e.trim().toLowerCase();return We.test(t)?t:null}function Ye(e){let t=Je(e);return t?{r:Number.parseInt(t.slice(1,3),16),g:Number.parseInt(t.slice(3,5),16),b:Number.parseInt(t.slice(5,7),16)}:null}function Xe(e){return Math.min(255,Math.max(0,Math.round(Number.isFinite(e)?e:0)))}function Ze(e,t,n){return`#${[e,t,n].map(e=>Xe(e).toString(16).padStart(2,`0`)).join(``)}`}function Qe(e,t,n){let r=Xe(e)/255,i=Xe(t)/255,a=Xe(n)/255,o=Math.max(r,i,a),s=o-Math.min(r,i,a),c=0;return s>0&&(c=o===r?(i-a)/s%6:o===i?(a-r)/s+2:(r-i)/s+4,c*=60,c<0&&(c+=360)),{h:c,s:o===0?0:s/o,v:o}}function $e(e,t,n){let r=Ke(e),i=Ge(t),a=Ge(n),o=a*i,s=o*(1-Math.abs(r/60%2-1)),c=a-o,l=0,u=0,d=0;return r<60?[l,u,d]=[o,s,0]:r<120?[l,u,d]=[s,o,0]:r<180?[l,u,d]=[0,o,s]:r<240?[l,u,d]=[0,s,o]:r<300?[l,u,d]=[s,0,o]:[l,u,d]=[o,0,s],{r:(l+c)*255,g:(u+c)*255,b:(d+c)*255}}function et(e,t,n){let{r,g:i,b:a}=$e(e,t,n);return Ze(r,i,a)}function tt(e){let t=Ye(e);return t?Qe(t.r,t.g,t.b):null}function nt(e){let t=Ye(e);if(!t)return 0;let n=e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4};return .2126*n(t.r)+.7152*n(t.g)+.0722*n(t.b)}function rt(e,t=`#2b2925`,n=`#f4edde`){return nt(e)>.42?t:n}var it=8e3,at=[{id:`demo-fold`,name:`折枝（示例）`,caption:`示例底样 · 几何示意，非文物复原`,symmetry:`mirror-x`,brushWidth:.015,colors:[{id:`stone-blue`,name:`石青`,value:`#3F5F6B`},{id:`ochre`,name:`赭石`,value:`#9A6A4A`},{id:`ink`,name:`墨`,value:`#2B2925`},{id:`gamboge`,name:`藤黄`,value:`#B99A5B`}],hint:`从枝干起笔，叶子只画半边，右半边交给对称。`,strokes:[{colorId:`stone-blue`,points:[[.5,.88],[.46,.82],[.4,.75],[.34,.67],[.28,.57],[.23,.47],[.19,.37],[.16,.27],[.15,.18],[.15,.16]]},{colorId:`stone-blue`,points:[[.33,.67],[.27,.65],[.21,.6],[.16,.53],[.19,.49],[.24,.55],[.29,.61],[.33,.64]]},{colorId:`stone-blue`,points:[[.26,.5],[.2,.46],[.15,.39],[.13,.32],[.17,.33],[.21,.39],[.25,.45]]},{colorId:`ochre`,points:[[.2,.3],[.24,.32],[.25,.36],[.22,.4],[.18,.4],[.15,.36],[.15,.32],[.17,.3],[.2,.3]]},{colorId:`gamboge`,points:[[.2,.35]]},{colorId:`gamboge`,points:[[.34,.74]]},{colorId:`gamboge`,points:[[.27,.44]]},{colorId:`gamboge`,points:[[.12,.26]]}]}],ot=[`mirror-x`,`central`,`mirror-xy`],st={"mirror-x":`左右对折`,central:`中心对称`,"mirror-xy":`四方对称`};function ct(e){return e===`mirror-xy`?4:2}function lt(e){return`${st[e]} · ${ct(e)} 份`}function ut(e,t,n,r,i){n!==0&&(t===`mirror-x`?(e.translate(r,0),e.scale(-1,1)):t===`central`?(e.translate(r,i),e.scale(-1,-1)):t===`mirror-xy`&&(n===1?(e.translate(r,0),e.scale(-1,1)):n===2?(e.translate(0,i),e.scale(1,-1)):(e.translate(r,i),e.scale(-1,-1))))}function dt(e,t,n,r,i){let a=ct(t);for(let o=0;o<a;o+=1)e.save(),ut(e,t,o,n,r),i(e),e.restore()}function ft(e,t,n,r){if(t.length===0)return;let[i,a]=t[0];if(t.length===1){e.beginPath(),e.arc(i*n,a*r,Math.max(.5,e.lineWidth/2),0,Math.PI*2),e.fill();return}if(e.beginPath(),e.moveTo(i*n,a*r),t.length===2){let i=t[1];e.lineTo(i[0]*n,i[1]*r),e.stroke();return}for(let i=1;i<t.length-1;i+=1){let a=t[i],o=t[i+1],s=(a[0]+o[0])/2*n,c=(a[1]+o[1])/2*r;e.quadraticCurveTo(a[0]*n,a[1]*r,s,c)}let o=t[t.length-1];e.lineTo(o[0]*n,o[1]*r),e.stroke()}function pt(e,t,n,r,i,a={}){if(r<=0||i<=0)return;let o=Math.min(r,i);e.save(),e.lineCap=`round`,e.lineJoin=`round`,e.globalAlpha=a.alpha??1;for(let a of t)e.lineWidth=Math.max(1,a.width*o),e.strokeStyle=a.color,e.fillStyle=a.color,dt(e,n,r,i,e=>{ft(e,a.points,r,i)});e.restore()}function mt(e,t,n,r,i){if(!(n<=0||r<=0)){if(e.save(),e.strokeStyle=i,e.fillStyle=i,e.lineWidth=1,e.globalAlpha=.55,e.setLineDash([5,5]),(t===`mirror-x`||t===`mirror-xy`)&&(e.beginPath(),e.moveTo(n/2,0),e.lineTo(n/2,r),e.stroke()),t===`mirror-xy`&&(e.beginPath(),e.moveTo(0,r/2),e.lineTo(n,r/2),e.stroke()),t===`central`){e.setLineDash([]);let t=Math.max(5,Math.min(n,r)*.018);e.beginPath(),e.arc(n/2,r/2,t,0,Math.PI*2),e.stroke();let i=Math.max(8,t*1.6);e.beginPath(),e.moveTo(n/2-i,r/2),e.lineTo(n/2+i,r/2),e.moveTo(n/2,r/2-i),e.lineTo(n/2,r/2+i),e.stroke()}e.restore()}}function ht(e){let t=e.colors[0]?.value??`#2a2723`,n=e.brushWidth??.015;return e.strokes.map(r=>({color:e.colors.find(e=>e.id===r.colorId)?.value??t,width:r.width??n,points:r.points}))}function gt(e){return e.map(e=>({color:e.color,width:e.width,points:e.points}))}function _t(e,t,n,r,i,a,o,s=n.symmetry){let c=e.getContext(`2d`);if(!c)return;let{width:l,height:u,dpr:d}=t;l<=0||u<=0||(c.setTransform(d,0,0,d,0,0),c.clearRect(0,0,l,u),c.fillStyle=o.paper,c.fillRect(0,0,l,u),mt(c,s,l,u,o.lineStrong),i&&pt(c,ht(n),s,l,u,{alpha:a}),pt(c,gt(r),s,l,u))}function vt(e,t,n=t.symmetry,r={}){let i=e.getContext(`2d`);if(!i)return;let a=e.width,o=e.height;a<=0||o<=0||(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,a,o),i.fillStyle=r.paper??`#f1ead8`,i.fillRect(0,0,a,o),pt(i,ht(t),n,a,o))}function yt(e,t,n,r){let i=e.getContext(`2d`);if(!i)return;let a=e.width,o=e.height;if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,a,o),i.fillStyle=n,i.fillRect(0,0,a,o),t.width>0&&t.height>0){let e=Math.min(a/t.width,o/t.height),n=t.width*e,r=t.height*e;i.drawImage(t,(a-n)/2,(o-r)/2,n,r)}i.strokeStyle=r,i.lineWidth=1,i.strokeRect(.5,.5,a-1,o-1)}function bt(e,t,n){if(e.width!==t.width||e.height!==t.height)throw Error(`评分画布尺寸不一致`);let r=e.width,i=e.height,a=r*i;if(a===0)return{score:0,coverage:0,matchedPixels:0,targetPixels:0};let o=n.alphaThreshold??32,s=Math.max(0,Math.round(n.dilationRadius)),c=s*s,l=typeof n.colorThreshold==`number`&&Number.isFinite(n.colorThreshold),u=l?Math.max(0,n.colorThreshold):0,d=u*u,f=e.data,ee=t.data,p=new Uint8Array(a),m=0;for(let e=0;e<a;e+=1)f[e*4+3]>=o&&(p[e]=1,m+=1);if(m===0)return{score:0,coverage:0,matchedPixels:0,targetPixels:0};let h=new Uint8Array(a),g=0;for(let e=0;e<i;e+=1)for(let t=0;t<r;t+=1){let n=e*r+t;if(ee[n*4+3]<o)continue;let a=ee[n*4],u=ee[n*4+1],m=ee[n*4+2],_=Math.max(0,e-s),v=Math.min(i-1,e+s),y=Math.max(0,t-s),b=Math.min(r-1,t+s);for(let n=_;n<=v;n+=1){let i=n-e,o=n*r;for(let e=y;e<=b;e+=1){let n=e-t;if(n*n+i*i>c)continue;let r=o+e;if(p[r]!==0&&h[r]!==1){if(l){let e=r*4,t=a-f[e],n=u-f[e+1],i=m-f[e+2];if(t*t+n*n+i*i>d)continue}h[r]=1,g+=1}}}}let _=g/m;return{score:Math.round(_*1e3)/10,coverage:_,matchedPixels:g,targetPixels:m}}function xt(e,t,n){let r=e.createElement(`canvas`);return r.width=Math.max(1,Math.round(t)),r.height=Math.max(1,Math.round(n)),r}function St(e){let t=e.getContext(`2d`,{willReadFrequently:!0});if(!t)throw Error(`当前浏览器不支持 2D Canvas`);return t}function Ct(e,t,n,r){let i=xt(e,n,r),a=St(i);a.clearRect(0,0,i.width,i.height);let o=t.colors[0]?.value??`#2a2723`,s=t.brushWidth??.015;return pt(a,t.strokes.map(e=>({color:t.colors.find(t=>t.id===e.colorId)?.value??o,width:e.width??s,points:e.points})),t.symmetry,i.width,i.height),i}function wt(e,t,n,r,i){let a=xt(e,r,i),o=St(a);return o.clearRect(0,0,a.width,a.height),pt(o,t,n,a.width,a.height),a}function Tt(e){return St(e).getImageData(0,0,e.width,e.height)}function Et(e){e&&(e.width=0,e.height=0)}var Dt=String.raw`
:host {
  --sd-paper: #f4edde;
  --sd-paper-deep: #ece2cf;
  --sd-ink: #2a2723;
  --sd-muted: #6f665a;
  --sd-line: rgba(42, 39, 35, 0.16);
  --sd-line-strong: rgba(42, 39, 35, 0.34);
  --sd-accent: #9a6a4a;
  --sd-aspect: 1;
  --sd-font-sans: "Noto Sans SC", "Microsoft YaHei", "PingFang SC", "Noto Sans CJK SC", system-ui, sans-serif;
  --sd-font-serif: "Noto Serif SC", "Source Han Serif SC", "Songti SC", STSong, SimSun, serif;
  --sd-font-mono: ui-monospace, "Cascadia Mono", "SFMono-Regular", Consolas, monospace;

  display: block;
  position: relative;
  width: 100%;
  color: var(--sd-ink);
  font-family: var(--sd-font-sans);
  font-size: 14px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

[hidden] {
  display: none !important;
}

.sd {
  position: relative;
  container-type: inline-size;
  padding: clamp(16px, 3.2cqi, 28px);
  border: 1px solid var(--sd-line-strong);
  background: var(--sd-paper);
}

.sd-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--sd-line);
}

.sd-heading {
  min-width: 0;
}

.sd-eyebrow {
  margin: 0;
  font-family: var(--sd-font-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--sd-muted);
}

.sd-title {
  margin: 2px 0 0;
  font-family: var(--sd-font-serif);
  font-size: clamp(18px, 2.6cqi, 24px);
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: 0.04em;
}

.sd-mode {
  margin: 0;
  flex: none;
  font-family: var(--sd-font-mono);
  font-size: 11px;
  color: var(--sd-muted);
  text-align: right;
}

.sd-caption,
.sd-hint {
  margin: 10px 0 0;
  font-size: 12px;
  line-height: 1.7;
}

.sd-caption {
  color: var(--sd-muted);
}

.sd-hint {
  margin-top: 3px;
  color: var(--sd-ink);
  opacity: 0.78;
}

.sd-levels {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.sd-levelbar {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 6px 14px;
  margin-top: 12px;
}

.sd-levelbar .sd-levels {
  margin-top: 0;
}

.sd-level-count {
  margin: 0 0 7px auto;
  font-family: var(--sd-font-mono);
  font-size: 10px;
  letter-spacing: 0.06em;
  color: var(--sd-muted);
  white-space: nowrap;
}

.sd-level {
  display: inline-flex;
  align-items: baseline;
  gap: 8px;
  max-width: 100%;
  min-height: 40px;
  padding: 6px 12px;
  border: 1px solid var(--sd-line);
  background: transparent;
  color: var(--sd-muted);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  transition:
    color 160ms ease-out,
    border-color 160ms ease-out,
    background-color 160ms ease-out;
}

.sd-level:hover {
  color: var(--sd-ink);
  border-color: var(--sd-line-strong);
}

.sd-level[aria-pressed="true"] {
  color: var(--sd-paper);
  background: var(--sd-ink);
  border-color: var(--sd-ink);
}

.sd-level--visitor {
  border-style: dashed;
}

.sd-level-index {
  font-family: var(--sd-font-mono);
  font-size: 10px;
  opacity: 0.72;
}

.sd-level-name {
  max-width: 11em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sd-level-author {
  max-width: 9em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 11px;
  opacity: 0.78;
}

.sd-level[aria-pressed="true"] .sd-level-index,
.sd-level[aria-pressed="true"] .sd-level-author {
  opacity: 0.72;
}

.sd-stage {
  position: relative;
  width: 100%;
  aspect-ratio: var(--sd-aspect);
  margin-top: 14px;
  border: 1px solid var(--sd-line-strong);
  background: var(--sd-paper);
  overflow: hidden;
}

.sd-canvas {
  display: block;
  width: 100%;
  height: 100%;
  touch-action: none;
  cursor: crosshair;
}

.sd-canvas:focus-visible {
  outline: 2px solid var(--sd-accent);
  outline-offset: -4px;
}

.sd-result {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  padding: clamp(14px, 3cqi, 24px);
  overflow: auto;
  background: var(--sd-paper);
  animation: sd-rise 220ms ease-out;
}

.sd-result:focus-visible {
  outline: 2px solid var(--sd-accent);
  outline-offset: -4px;
}

.sd-result-inner {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: min(100%, 680px);
  margin: 0 auto auto;
  padding-top: clamp(8px, 4cqi, 48px);
}

.sd-score {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin: 0;
  font-family: var(--sd-font-serif);
}

.sd-score strong {
  color: var(--sd-accent);
  font-size: clamp(40px, 9cqi, 64px);
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.01em;
}

.sd-score span {
  color: var(--sd-muted);
  font-size: 13px;
}

.sd-sub {
  margin: 0;
  font-family: var(--sd-font-mono);
  font-size: 11px;
  color: var(--sd-muted);
}

.sd-compare {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.sd-compare figure {
  margin: 0;
  min-width: 0;
}

.sd-compare canvas {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1;
  border: 1px solid var(--sd-line);
}

.sd-compare figcaption {
  margin-top: 4px;
  font-size: 11px;
  color: var(--sd-muted);
  text-align: center;
}

.sd-comment {
  margin: 0;
  font-size: 13px;
  line-height: 1.75;
  color: var(--sd-ink);
}

.sd-result-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 2px;
}

.sd-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px 16px;
  margin-top: 14px;
}

.sd-toolbar-label {
  font-family: var(--sd-font-mono);
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--sd-muted);
}

.sd-modes {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
}

.sd-modes button {
  min-height: 32px;
  padding: 4px 10px;
  border: 1px solid var(--sd-line);
  background: transparent;
  color: var(--sd-muted);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition:
    color 160ms ease-out,
    border-color 160ms ease-out,
    background-color 160ms ease-out;
}

.sd-modes button:hover {
  color: var(--sd-ink);
  border-color: var(--sd-line-strong);
}

.sd-modes button[aria-pressed="true"] {
  background: var(--sd-ink);
  border-color: var(--sd-ink);
  color: var(--sd-paper);
}

.sd-colors {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.sd-swatches {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.sd-swatch {
  position: relative;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 1px solid var(--sd-line-strong);
  border-radius: 0;
  cursor: pointer;
}

.sd-swatch[aria-pressed="true"] {
  outline: 2px solid var(--sd-ink);
  outline-offset: 2px;
}

.sd-swatch[aria-pressed="true"]::after {
  content: "";
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(244, 237, 222, 0.72);
  pointer-events: none;
}

.sd-custom {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 34px;
  padding: 0 9px;
  border: 1px solid var(--sd-line-strong);
  background: transparent;
  color: var(--sd-ink);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  transition:
    border-color 160ms ease-out,
    background-color 160ms ease-out;
}

.sd-custom:hover {
  border-color: var(--sd-ink);
}

.sd-custom[aria-pressed="true"],
.sd-custom[aria-expanded="true"] {
  background: var(--sd-paper-deep);
  border-color: var(--sd-ink);
}

.sd-custom-dot {
  display: block;
  width: 16px;
  height: 16px;
  border: 1px solid rgba(42, 39, 35, 0.34);
}

.sd-palette {
  margin-top: 14px;
  padding: clamp(12px, 2.4cqi, 18px);
  border: 1px solid var(--sd-line-strong);
  background: var(--sd-paper-deep);
}

.sd-palette-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
}

.sd-palette-body {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(180px, 1fr);
  gap: 16px;
  align-items: start;
}

.sd-sv {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 360 / 200;
  border: 1px solid var(--sd-line-strong);
  background: var(--sd-paper);
  cursor: crosshair;
  touch-action: none;
}

.sd-palette-controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 0;
}

.sd-hue-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--sd-ink);
}

.sd-hue-row input[type="range"] {
  flex: 1;
  min-width: 0;
  height: 22px;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
  background: linear-gradient(
    90deg,
    #ff0000 0%,
    #ffff00 17%,
    #00ff00 33%,
    #00ffff 50%,
    #0000ff 67%,
    #ff00ff 83%,
    #ff0000 100%
  );
  border: 1px solid var(--sd-line-strong);
  cursor: pointer;
}

.sd-hue-row input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 12px;
  height: 26px;
  background: var(--sd-paper);
  border: 1px solid var(--sd-ink);
  cursor: grab;
}

.sd-hue-row input[type="range"]::-moz-range-thumb {
  width: 12px;
  height: 26px;
  background: var(--sd-paper);
  border: 1px solid var(--sd-ink);
  border-radius: 0;
  cursor: grab;
}

.sd-hex-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
}

.sd-hex-row label {
  display: flex;
  flex-direction: column;
  gap: 3px;
  font-size: 11px;
  color: var(--sd-muted);
}

.sd-hex-row input {
  width: 96px;
  min-height: 32px;
  padding: 4px 8px;
  border: 1px solid var(--sd-line-strong);
  background: var(--sd-paper);
  color: var(--sd-ink);
  font-family: var(--sd-font-mono);
  font-size: 12px;
}

.sd-recent-row {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 24px;
}

.sd-recent {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.sd-recent-chip {
  width: 22px;
  height: 22px;
  padding: 0;
  border: 1px solid var(--sd-line-strong);
  cursor: pointer;
}

.sd-recent-chip:hover {
  outline: 2px solid var(--sd-ink);
  outline-offset: 1px;
}

.sd-palette-hint {
  margin: 0;
  font-size: 11px;
  line-height: 1.7;
  color: var(--sd-muted);
}

.sd-guide {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--sd-muted);
  cursor: pointer;
}

.sd-guide input {
  margin: 0;
  accent-color: var(--sd-accent);
}

.sd-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: auto;
}

.sd-btn {
  min-height: 40px;
  padding: 6px 14px;
  border: 1px solid var(--sd-line-strong);
  background: transparent;
  color: var(--sd-ink);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  transition:
    background-color 160ms ease-out,
    border-color 160ms ease-out,
    color 160ms ease-out;
}

.sd-btn:hover:not(:disabled) {
  border-color: var(--sd-ink);
}

.sd-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.sd-btn--primary {
  background: var(--sd-accent);
  border-color: var(--sd-accent);
  color: var(--sd-paper);
}

.sd-btn--primary:hover:not(:disabled) {
  border-color: color-mix(in srgb, var(--sd-accent) 76%, var(--sd-ink));
  background: color-mix(in srgb, var(--sd-accent) 76%, var(--sd-ink));
}

.sd-btn--ghost {
  border-color: transparent;
  color: var(--sd-muted);
}

.sd-btn--ghost:hover:not(:disabled) {
  color: var(--sd-ink);
  border-color: var(--sd-line-strong);
}

.sd-btn:focus-visible,
.sd-level:focus-visible,
.sd-swatch:focus-visible,
.sd-custom:focus-visible,
.sd-modes button:focus-visible,
.sd-recent-chip:focus-visible,
.sd-hue-row input:focus-visible,
.sd-hex-row input:focus-visible,
.sd-guide input:focus-visible {
  outline: 2px solid var(--sd-accent);
  outline-offset: 2px;
}

.sd-status {
  min-height: 18px;
  margin: 8px 0 0;
  font-size: 11px;
  color: var(--sd-muted);
}

@container (max-width: 520px) {
  .sd-mode {
    display: none;
  }

  .sd-actions {
    width: 100%;
    margin-left: 0;
  }

  .sd-actions .sd-btn {
    flex: 1 1 calc(50% - 4px);
    white-space: nowrap;
  }

  .sd-palette-body {
    grid-template-columns: 1fr;
  }

  .sd-level-count {
    width: 100%;
    margin-left: 0;
  }

  .sd-result {
    padding: 12px;
  }

  .sd-result-inner {
    gap: 8px;
  }

  .sd-compare {
    gap: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .sd-result {
    animation: none;
  }

  .sd-level,
  .sd-modes button,
  .sd-custom,
  .sd-btn {
    transition: none;
  }
}

@keyframes sd-rise {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`,Ot=`
<div class="sd">
  <header class="sd-head">
    <div class="sd-heading">
      <p class="sd-eyebrow">对称绘制 · 游客共创</p>
      <h3 class="sd-title">对折成纹</h3>
    </div>
    <p class="sd-mode" data-role="mode"></p>
  </header>

  <p class="sd-caption" data-role="caption"></p>
  <p class="sd-hint" data-role="hint"></p>

  <div class="sd-levelbar">
    <div class="sd-levels" role="group" aria-label="选择底样" data-role="levels"></div>
    <p class="sd-level-count" data-role="level-count"></p>
  </div>

  <div class="sd-stage" data-role="stage">
    <canvas
      class="sd-canvas"
      data-role="canvas"
      tabindex="-1"
      aria-label="对称绘制画布"
    ></canvas>
  </div>

  <div class="sd-toolbar">
    <div class="sd-modes" role="group" aria-label="对称方式">
      <span class="sd-toolbar-label">对称</span>
      <button type="button" data-symmetry="mirror-x">对折</button>
      <button type="button" data-symmetry="central">中心</button>
      <button type="button" data-symmetry="mirror-xy">四方</button>
    </div>

    <div class="sd-colors" role="group" aria-label="选择颜色">
      <div class="sd-swatches" data-role="swatches"></div>
      <button
        type="button"
        class="sd-custom"
        data-action="custom-color"
        aria-label="打开全色盘，自定义颜色"
        aria-expanded="false"
      >
        <span class="sd-custom-dot" data-role="custom-dot" aria-hidden="true"></span>
        <span>全色盘</span>
      </button>
    </div>

    <label class="sd-guide">
      <input type="checkbox" data-role="guide" />
      <span>显示底样</span>
    </label>

    <div class="sd-actions">
      <button type="button" class="sd-btn" data-action="undo">撤销</button>
      <button type="button" class="sd-btn" data-action="clear">清空</button>
      <button type="button" class="sd-btn" data-action="keep">留作底样</button>
      <button type="button" class="sd-btn sd-btn--primary" data-action="submit">提交评分</button>
    </div>
  </div>

  <section class="sd-palette" data-role="palette" aria-label="全色盘" hidden>
    <div class="sd-palette-head">
      <p class="sd-eyebrow">全色盘 · 任意取色</p>
      <button type="button" class="sd-btn sd-btn--ghost" data-action="palette-close">收起</button>
    </div>

    <div class="sd-palette-body">
      <canvas
        class="sd-sv"
        data-role="sv"
        width="360"
        height="200"
        aria-label="饱和度与明度取色区，可拖动"
      ></canvas>

      <div class="sd-palette-controls">
        <label class="sd-hue-row">
          <span>色相</span>
          <input type="range" data-role="hue" min="0" max="359" step="1" aria-label="色相" />
        </label>

        <div class="sd-hex-row">
          <label>
            <span>HEX</span>
            <input
              type="text"
              data-role="hex"
              maxlength="7"
              spellcheck="false"
              autocomplete="off"
              aria-label="十六进制颜色"
            />
          </label>
          <button type="button" class="sd-btn" data-action="apply-hex">应用</button>
        </div>

        <div class="sd-recent-row">
          <span class="sd-toolbar-label">最近</span>
          <div class="sd-recent" data-role="recent" aria-label="最近使用过的颜色"></div>
        </div>

        <p class="sd-palette-hint">颜色只影响你的笔迹，不影响评分；评分看的是线条与底样的几何覆盖。</p>
      </div>
    </div>
  </section>

  <p class="sd-status" role="status" data-role="status"></p>

  <section class="sd-result" data-role="result" tabindex="-1" aria-labelledby="sd-result-title" hidden>
    <div class="sd-result-inner">
      <p class="sd-eyebrow" id="sd-result-title">本次评分</p>
      <p class="sd-score"><strong data-role="score">0.0</strong><span>分</span></p>
      <p class="sd-sub" data-role="sub"></p>

      <div class="sd-compare">
        <figure>
          <canvas data-role="thumb-example" width="512" height="512"></canvas>
          <figcaption>底样</figcaption>
        </figure>
        <figure>
          <canvas data-role="thumb-user" width="512" height="512"></canvas>
          <figcaption>你的笔迹</figcaption>
        </figure>
      </div>

      <p class="sd-comment" data-role="comment"></p>

      <div class="sd-result-actions">
        <button type="button" class="sd-btn sd-btn--primary" data-action="keep">留作底样</button>
        <button type="button" class="sd-btn" data-action="retry">再画一次</button>
        <button type="button" class="sd-btn" data-action="next">换张底样</button>
        <button type="button" class="sd-btn sd-btn--ghost" data-action="close">关闭</button>
      </div>
    </div>
  </section>
</div>
`;function kt(e,t){let n=e.querySelector(t);if(!n)throw Error(`[symmetry-draw] 缺少内部元素：${t}`);return n}function Q(e,t){return kt(e,`[data-role="${t}"]`)}function At(e,t){let n=t.createElement(`style`);n.textContent=Dt,e.appendChild(n);let r=t.createElement(`div`);return r.innerHTML=Ot,e.appendChild(r),{doc:t,root:kt(r,`.sd`),stage:Q(r,`stage`),canvas:Q(r,`canvas`),levels:Q(r,`levels`),levelCount:Q(r,`level-count`),swatches:Q(r,`swatches`),custom:kt(r,`[data-action="custom-color"]`),customDot:Q(r,`custom-dot`),palette:Q(r,`palette`),sv:Q(r,`sv`),hue:Q(r,`hue`),hex:Q(r,`hex`),recent:Q(r,`recent`),guide:Q(r,`guide`),undo:kt(r,`[data-action="undo"]`),clear:kt(r,`[data-action="clear"]`),submit:kt(r,`[data-action="submit"]`),next:kt(r,`[data-action="next"]`),status:Q(r,`status`),mode:Q(r,`mode`),caption:Q(r,`caption`),hint:Q(r,`hint`),result:Q(r,`result`),score:Q(r,`score`),sub:Q(r,`sub`),comment:Q(r,`comment`),thumbExample:Q(r,`thumb-example`),thumbUser:Q(r,`thumb-user`)}}var $={paper:`#f4edde`,paperDeep:`#ece2cf`,ink:`#2a2723`,muted:`#6f665a`,line:`rgba(42, 39, 35, 0.16)`,lineStrong:`rgba(42, 39, 35, 0.34)`,accent:`#9a6a4a`};function jt(e,t={}){let n=e.ownerDocument.defaultView?.getComputedStyle(e),r=e=>n?.getPropertyValue(e).trim()??``;return{paper:t.paper??(r(`--paper`)||$.paper),paperDeep:t.paperDeep??$.paperDeep,ink:t.ink??(r(`--ink`)||$.ink),muted:t.muted??(r(`--muted`)||$.muted),line:t.line??$.line,lineStrong:t.lineStrong??$.lineStrong,accent:t.accent??$.accent}}function Mt(e,t,n){let r=e.style;r.setProperty(`--sd-paper`,t.paper),r.setProperty(`--sd-paper-deep`,t.paperDeep),r.setProperty(`--sd-ink`,t.ink),r.setProperty(`--sd-muted`,t.muted),r.setProperty(`--sd-line`,t.line),r.setProperty(`--sd-line-strong`,t.lineStrong),r.setProperty(`--sd-accent`,t.accent),r.setProperty(`--sd-aspect`,String(n))}function Nt(e,t,n){let r=e.doc.createDocumentFragment(),i=0;t.forEach((t,a)=>{let o=t.source===`visitor`;o&&(i+=1);let s=e.doc.createElement(`button`);s.type=`button`,s.className=o?`sd-level sd-level--visitor`:`sd-level`,s.dataset.level=String(a),o&&(s.dataset.source=`visitor`),s.setAttribute(`aria-pressed`,String(a===n)),s.setAttribute(`aria-label`,`底样 ${a+1}：${t.name}，${lt(t.symmetry)}`+(o&&t.author?`，由 ${t.author} 留下`:``));let c=e.doc.createElement(`span`);c.className=`sd-level-index`,c.textContent=String(a+1).padStart(2,`0`);let l=e.doc.createElement(`span`);if(l.className=`sd-level-name`,l.textContent=t.name,s.append(c,l),o){let n=e.doc.createElement(`span`);n.className=`sd-level-author`,n.textContent=t.author?`· ${t.author}`:`· 游客`,s.append(n)}r.append(s)}),e.levels.replaceChildren(r),e.levelCount.textContent=`${t.length} 张底样 · ${i} 张来自游客`}function Pt(e,t){for(let n of e.levels.querySelectorAll(`[data-level]`))n.setAttribute(`aria-pressed`,String(Number(n.dataset.level)===t))}function Ft(e,t,n){let r=e.doc.createDocumentFragment();t.forEach(t=>{let i=e.doc.createElement(`button`);i.type=`button`,i.className=`sd-swatch`,i.dataset.color=t.id,i.style.backgroundColor=t.value,i.title=t.name,i.setAttribute(`aria-label`,`使用${t.name}`),i.setAttribute(`aria-pressed`,String(t.id===n)),r.append(i)}),e.swatches.replaceChildren(r)}function It(e,t,n,r){for(let n of e.swatches.querySelectorAll(`[data-color]`))n.setAttribute(`aria-pressed`,String(!r&&n.dataset.color===t));e.custom.setAttribute(`aria-pressed`,String(r)),e.customDot.style.backgroundColor=n,e.customDot.style.borderColor=rt(n)}function Lt(e,t){for(let n of e.root.querySelectorAll(`[data-symmetry]`))n.setAttribute(`aria-pressed`,String(n.dataset.symmetry===t))}function Rt(e,t,n){e.mode.textContent=`${lt(n)}`,e.caption.textContent=t.caption??``,e.caption.hidden=!t.caption,e.hint.textContent=t.hint??``,e.hint.hidden=!t.hint,e.canvas.setAttribute(`aria-label`,`对称绘制画布：${t.name}，${lt(n)}。按住拖动绘制，笔迹会自动对称复制。`)}function zt(e,t){e.undo.disabled=!t.canUndo,e.clear.disabled=!t.canUndo,e.submit.disabled=!t.canSubmit;for(let n of e.root.querySelectorAll(`[data-action="keep"]`))n.disabled=!t.canKeep}function Bt(e,t){e.status.textContent=t}function Vt(e){return e>=95?`几乎与底样重合，线条稳得住。`:e>=85?`大形已经对上，转折处再贴一点。`:e>=70?`骨架没错，笔迹再靠近底样一些。`:e>=50?`看出了走向，位置和笔触还差一层。`:`先沿淡线慢描，对称会替你补齐另一半。`}function Ht(e,t){for(let n of Array.from(e.root.children))n!==e.result&&(t?n.setAttribute(`inert`,``):n.removeAttribute(`inert`))}function Ut(e,t,n,r,i,a){e.score.textContent=t.score.toFixed(1),e.sub.textContent=`覆盖率 ${(t.coverage*100).toFixed(1)}%（${a}px 容差）`,e.comment.textContent=Vt(t.score),yt(e.thumbExample,n,i.paper,i.lineStrong),yt(e.thumbUser,r,i.paper,i.lineStrong),e.result.hidden=!1,Ht(e,!0),e.result.focus({preventScroll:!0})}function Wt(e){e.result.hidden=!0,Ht(e,!1)}function Gt(e,t){e.palette.hidden=!t,e.custom.setAttribute(`aria-expanded`,String(t))}function Kt(e,t,n,r){let{sv:i}=e,a=i.getContext(`2d`);if(!a)return;let o=i.width,s=i.height,c=et(t,1,1);a.setTransform(1,0,0,1,0,0),a.fillStyle=c,a.fillRect(0,0,o,s);let l=a.createLinearGradient(0,0,o,0);l.addColorStop(0,`rgba(255, 255, 255, 1)`),l.addColorStop(1,`rgba(255, 255, 255, 0)`),a.fillStyle=l,a.fillRect(0,0,o,s);let u=a.createLinearGradient(0,0,0,s);u.addColorStop(0,`rgba(0, 0, 0, 0)`),u.addColorStop(1,`rgba(0, 0, 0, 1)`),a.fillStyle=u,a.fillRect(0,0,o,s);let d=Math.min(o,Math.max(0,n*o)),f=Math.min(s,Math.max(0,(1-r)*s));a.lineWidth=2,a.strokeStyle=rt(et(t,n,r)),a.beginPath(),a.arc(d,f,7,0,Math.PI*2),a.stroke(),a.strokeStyle=`rgba(255, 255, 255, 0.55)`,a.lineWidth=1,a.beginPath(),a.arc(d,f,9,0,Math.PI*2),a.stroke()}function qt(e,t){e.hue.value=String(Math.round(t)%360)}function Jt(e,t){e.doc.activeElement!==e.hex&&(e.hex.value=t)}function Yt(e,t){let n=e.doc.createDocumentFragment();t.forEach(t=>{let r=qe(t);if(!r)return;let i=e.doc.createElement(`button`);i.type=`button`,i.className=`sd-recent-chip`,i.dataset.recent=r,i.style.backgroundColor=r,i.title=r,i.setAttribute(`aria-label`,`使用最近颜色 ${r}`),n.append(i)}),e.recent.replaceChildren(n)}var Xt=1,Zt=3,Qt=.22,$t=2.2,en=8;function tn(e,t,n,r){return typeof e!=`number`||!Number.isFinite(e)?t:Math.min(r,Math.max(n,e))}function nn(e){return!!(e&&typeof e.id==`string`&&e.id.length>0&&Array.isArray(e.colors)&&e.colors.length>0&&Array.isArray(e.strokes)&&e.strokes.length>0&&ot.includes(e.symmetry))}function rn(e){return Number(e.toFixed(4))}function an({host:e,shadow:t,options:n}){let r=e.ownerDocument,i=r.defaultView;if(!i)throw Error(`[symmetry-draw] 找不到 window 环境`);let a=i,o=tn(n.aspectRatio,Xt,.5,3),s=tn(n.maxDpr,Zt,1,4),c=Math.round(tn(n.scoreSize,512,256,1024)),l=Math.round(tn(n.dilationRadius,2,0,8)),u=tn(n.guideOpacity,Qt,.04,.6),d=typeof n.colorThreshold==`number`&&Number.isFinite(n.colorThreshold)?tn(n.colorThreshold,0,0,255):void 0,f=jt(e,n.theme),ee=(n.levels??[]).filter(nn),p=ee.length>0?ee:at,m=p.findIndex(e=>e.id===n.initialLevelId),h=m>=0?m:0,g=n.guideVisible!==!1,_=null,v=At(t,r);Mt(e,f,o);let y=``,b=`#2a2723`,x=!1,S=0,C=0,w=0,T=[],E=!1,D=null,O=[],k=null,A=null,j=0,M=null,N=0,P=0,F=!1,I=new AbortController;function L(){let e=p[h];if(!e)throw Error(`[symmetry-draw] 关卡索引越界`);return e}function R(){return _??L().symmetry}function te(){if(x)return{id:null,value:b,name:b};let e=L(),t=e.colors.find(e=>e.id===y)??e.colors[0];return{id:t?.id??null,value:t?.value??`#2a2723`,name:t?.name??`墨`}}function z(){zt(v,{canUndo:O.length>0,canSubmit:O.length>0,canKeep:O.length>0})}function B(){It(v,y,te().value,x),Yt(v,T)}function ne(e){let t=qe(e)??`#2a2723`,n=tt(t)??{h:0,s:0,v:0};S=n.h,C=n.s,w=n.v,b=t,Kt(v,S,C,w),qt(v,S),Jt(v,t)}function re(e){let t=qe(e);t&&(T=[t,...T.filter(e=>e!==t)].slice(0,en),Yt(v,T))}function V(e){let t=qe(e);if(!t)return;let n=tt(t);n&&(S=n.h,C=n.s,w=n.v,b=t,x=!0,B(),Kt(v,S,C,w),qt(v,S),Jt(v,t))}function H(e,t,n){S=Ke(e),C=Ge(t),w=Ge(n),b=et(S,C,w),x=!0,B(),Kt(v,S,C,w),qt(v,S),Jt(v,b)}function ie(e){let t=qe(e);return t?(V(t),v.hex.value=t,re(t),!0):(G(`HEX 颜色应为 #RRGGBB 或 #RGB。`),!1)}function ae(e){let t=e.colors[0];y=t?.id??``,x=!1,ne(t?.value??`#2a2723`),Ft(v,e.colors,y),B()}function U(){E=!1,Gt(v,!1)}function W(){F||N!==0||(N=a.requestAnimationFrame(()=>{N=0,F||oe()}))}function oe(){!F&&M&&_t(v.canvas,M,L(),O,g,u,f,R())}function se(){if(F)return;let e=v.stage.getBoundingClientRect(),t=Math.max(1,e.width),n=Math.max(1,e.height),r=Math.min(Math.max(1,a.devicePixelRatio||1),s),i=Math.max(1,Math.round(t*r)),o=Math.max(1,Math.round(n*r)),c=M===null||M.width!==t||M.height!==n||M.dpr!==r||v.canvas.width!==i||v.canvas.height!==o;M={width:t,height:n,dpr:r},v.canvas.width!==i&&(v.canvas.width=i),v.canvas.height!==o&&(v.canvas.height=o),c&&W()}function ce(){P!==0&&(a.clearTimeout(P),P=0),Bt(v,``)}function G(e){ce(),Bt(v,e),P=a.setTimeout(()=>{P=0,F||Bt(v,``)},2800)}function K(e){let t=v.canvas.getBoundingClientRect();return t.width<=0||t.height<=0?null:[Ge((e.clientX-t.left)/t.width),Ge((e.clientY-t.top)/t.height)]}function q(e){if(F||A!==null||!e.isPrimary||e.pointerType===`mouse`&&e.button!==0||!v.result.hidden)return;if(O.length>=600){G(`最多 600 笔，可先撤销或清空。`);return}if(j>=8e3){G(`笔迹已到 ${it} 点上限，可先留作底样。`);return}let t=K(e);if(!t)return;e.preventDefault(),A=e.pointerId;let n=L();k={color:te().value,width:n.brushWidth??.015,points:[t]},O.push(k),j+=1;try{v.canvas.setPointerCapture(e.pointerId)}catch{}ce(),z(),W()}function J(e){if(e.pointerId!==A||!k)return;let t=K(e);if(!t||(e.cancelable&&e.preventDefault(),j>=8e3)||k.points.length>=8e3)return;let n=k.points,r=n[n.length-1],i=Math.min(M?.width??1,M?.height??1),a=i>0?$t/i:0;Math.hypot(t[0]-r[0],t[1]-r[1])<a||(n.push(t),j+=1,W())}function le(e){if(A===null||e!==void 0&&e!==A)return;let t=A;A=null,k=null;try{v.canvas.hasPointerCapture(t)&&v.canvas.releasePointerCapture(t)}catch{}z(),W()}function ue(e){le(e.pointerId)}function de(e){le(e.pointerId)}function fe(e){e.preventDefault()}function pe(e,t){let n=t.getBoundingClientRect();if(n.width<=0||n.height<=0)return;let r=Ge((e.clientX-n.left)/n.width),i=Ge((e.clientY-n.top)/n.height);H(S,r,1-i)}function me(e){let t=e.target;if(!t||typeof t.closest!=`function`)return;let n=t.closest(`[data-role="sv"]`);if(n&&D===null&&e.isPrimary){e.preventDefault(),D=e.pointerId;try{n.setPointerCapture(e.pointerId)}catch{}pe(e,n)}}function he(e){if(D===null||e.pointerId!==D)return;let n=t.querySelector(`[data-role="sv"]`);n&&(e.cancelable&&e.preventDefault(),pe(e,n))}function ge(e){if(D===null||e.pointerId!==D)return;let n=D;D=null;let r=t.querySelector(`[data-role="sv"]`);try{r?.hasPointerCapture(n)&&r.releasePointerCapture(n)}catch{}re(b)}function _e(e){if(F||e!==null&&!ot.includes(e))return;let t=L();_=e===null||e===t.symmetry?null:e,Wt(v),Lt(v,R()),Rt(v,t,R()),W()}function ve(e){if(F||!Number.isInteger(e)||e<0||e>=p.length||e===h)return;A!==null&&le();let t=!v.result.hidden;h=e;let r=L();_=null,O=[],k=null,j=0,Wt(v),U(),ce(),Pt(v,h),ae(r),Lt(v,R()),Rt(v,r,R()),v.guide.checked=g,z(),W(),t&&v.canvas.focus({preventScroll:!0});try{n.onLevelChange?.(r,h)}catch{}}function ye(e){let t=p.findIndex(t=>t.id===e);t>=0&&ve(t)}function Y(e){let t=e.filter(nn);if(t.length===0)return;let n=L().id;p=t;let r=t.findIndex(e=>e.id===n);if(h=r>=0?r:0,Nt(v,p,h),v.next.hidden=p.length<2,r<0){let e=L();O=[],k=null,j=0,_=null,ae(e),z(),W()}else Lt(v,R());Rt(v,L(),R())}function be(e,t={}){if(F||!nn(e))return;let n=p.findIndex(t=>t.id===e.id);n>=0?t.select!==!1&&ve(n):(Y([...p,e]),t.select!==!1&&ve(p.length-1))}function xe(e){let t=L().colors.find(t=>t.id===e);t&&(x=!1,y=e,ne(t.value),B())}function Se(e){let t=qe(e);t&&(V(t),re(t))}function X(){if(F||O.length===0)return;let e=O.pop();j=Math.max(0,j-(e?.points.length??0)),k=null,Wt(v),ce(),z(),W()}function Ce(){F||(A!==null&&le(),O=[],k=null,j=0,Wt(v),ce(),z(),W())}function we(){Ce(),v.canvas.focus({preventScroll:!0}),G(`已清空，重新落笔。`)}function Te(){Wt(v),v.submit.focus({preventScroll:!0})}function Z(){if(F)return;A!==null&&le();let e=L();if(O.length===0){G(`先画几笔，再提交评分。`),v.canvas.focus({preventScroll:!0});return}let t=c,i=Math.max(1,Math.round(t/o)),a=R(),s=null,u=null;try{s=Ct(r,{...e,symmetry:a},t,i),u=wt(r,O,a,t,i);let o=bt(Tt(s),Tt(u),{...d===void 0?{}:{colorThreshold:d},dilationRadius:l}),c={levelId:e.id,...o};Ut(v,c,s,u,f,l),ce(),z();try{n.onScore?.(c)}catch{}}catch{G(`评分失败，请重试或换一张底样。`)}finally{Et(s),Et(u)}}function Ee(){return O.length===0?null:{symmetry:R(),strokes:O.map(e=>({color:e.color,width:Number(e.width.toFixed(4)),points:e.points.map(e=>[rn(e[0]),rn(e[1])])}))}}function De(){if(F)return;if(A!==null&&le(),O.length===0){G(`先画几笔，再留作底样。`),v.canvas.focus({preventScroll:!0});return}let e=Ee();if(e){if(!n.onKeep)G(`当前页面未开启“留作底样”。`);else try{n.onKeep(e),G(`已把这一笔交给下一位，填写名字即可完成。`)}catch{G(`留作底样失败，请重试。`)}}}function Oe(e){switch(e){case`undo`:X();break;case`clear`:Ce();break;case`submit`:Z();break;case`keep`:De();break;case`retry`:we();break;case`next`:ve((h+1)%p.length);break;case`close`:Te();break;case`custom-color`:E=!E,E?(ne(te().value),Gt(v,!0)):Gt(v,!1);break;case`palette-close`:U(),v.custom.focus({preventScroll:!0});break;case`apply-hex`:ie(v.hex.value)}}function ke(e){let t=e.target;if(!t||typeof t.closest!=`function`)return;let n=t.closest(`[data-action]`);if(n){Oe(n.dataset.action??``);return}let r=t.closest(`[data-symmetry]`);if(r){_e(r.dataset.symmetry??null);return}let i=t.closest(`[data-level]`);if(i){ve(Number(i.dataset.level));return}let a=t.closest(`[data-color]`);if(a){let e=a.dataset.color;e&&xe(e);return}let o=t.closest(`[data-recent]`);if(o){let e=o.dataset.recent;e&&Se(e)}}function Ae(e){let t=e.target;t&&typeof t.matches==`function`&&t.matches(`[data-role="hue"]`)&&H(Number(t.value),C,w)}function je(e){let t=e.target;t&&typeof t.matches==`function`&&(t.matches(`[data-role="guide"]`)?(g=t.checked,W()):t.matches(`[data-role="hex"]`)?ie(t.value):t.matches(`[data-role="hue"]`)&&re(b))}function Me(e){let t=e,n=e.target;t.key===`Enter`&&n?.matches?.(`[data-role="hex"]`)?(t.preventDefault(),ie(n.value)):t.key===`Escape`&&(v.result.hidden?E&&(t.preventDefault(),U(),v.custom.focus({preventScroll:!0})):(t.preventDefault(),Te()))}function Ne(){if(!F){if(F=!0,I.abort(),Pe.disconnect(),N!==0&&(a.cancelAnimationFrame(N),N=0),P!==0&&(a.clearTimeout(P),P=0),A!==null){let e=A;A=null;try{v.canvas.hasPointerCapture(e)&&v.canvas.releasePointerCapture(e)}catch{}}if(D!==null){let e=D;D=null;try{v.sv.hasPointerCapture(e)&&v.sv.releasePointerCapture(e)}catch{}}k=null,O=[],j=0,T=[],Wt(v),M=null,v.canvas.width=0,v.canvas.height=0,e.remove()}}v.canvas.addEventListener(`pointerdown`,q,{signal:I.signal}),v.canvas.addEventListener(`pointermove`,J,{signal:I.signal}),v.canvas.addEventListener(`pointerup`,ue,{signal:I.signal}),v.canvas.addEventListener(`pointercancel`,ue,{signal:I.signal}),v.canvas.addEventListener(`lostpointercapture`,de,{signal:I.signal}),v.canvas.addEventListener(`contextmenu`,fe,{signal:I.signal}),t.addEventListener(`click`,ke,{signal:I.signal}),t.addEventListener(`input`,Ae,{signal:I.signal}),t.addEventListener(`change`,je,{signal:I.signal}),t.addEventListener(`keydown`,Me,{signal:I.signal}),t.addEventListener(`pointerdown`,e=>me(e),{signal:I.signal}),t.addEventListener(`pointermove`,e=>he(e),{signal:I.signal}),t.addEventListener(`pointerup`,e=>ge(e),{signal:I.signal}),t.addEventListener(`pointercancel`,e=>ge(e),{signal:I.signal});let Pe=new ResizeObserver(()=>se());Pe.observe(v.stage);let Fe=L();return Nt(v,p,h),ae(Fe),Lt(v,R()),Rt(v,Fe,R()),v.next.hidden=p.length<2,v.guide.checked=g,z(),se(),{destroy:Ne,setLevel:ye,reset:Ce,submit:Z,getDraft:Ee,setLevels:Y,addLevel:be,setSymmetry:_e}}var on=new WeakMap;function sn(e,t={}){let n=e?.ownerDocument,r=n?.defaultView;if(!e||!n||!r||!(e instanceof r.HTMLElement))throw TypeError(`[symmetry-draw] mount(container, options) 需要一个 HTMLElement 容器`);on.get(e)?.destroy();let i=n.createElement(`div`);i.className=`sd-host`,i.setAttribute(`data-symmetry-draw-host`,``);let a=i.attachShadow({mode:`open`});e.appendChild(i);let o;try{o=an({host:i,shadow:a,options:t})}catch(e){throw i.remove(),e}let s={destroy(){on.delete(e),o.destroy()},setLevel(e){o.setLevel(e)},reset(){o.reset()},submit(){o.submit()},getDraft(){return o.getDraft()},setLevels(e){o.setLevels(e)},addLevel(e,t){o.addLevel(e,t)},setSymmetry(e){o.setSymmetry(e)}};return on.set(e,s),s}var cn=[{id:`stone-blue`,name:`石青`,value:`#3F5F6B`},{id:`ochre`,name:`赭石`,value:`#9A6A4A`},{id:`ink`,name:`墨`,value:`#2B2925`},{id:`gamboge`,name:`藤黄`,value:`#B99A5B`}],ln=`示例底样 · 几何示意，非文物复原`;function un(e,t,n,r=28){let i=[];for(let a=0;a<=r;a+=1){let o=a/r*Math.PI*2;i.push([e+Math.cos(o)*n,t+Math.sin(o)*n])}return i}var dn=[{id:`branch-fold`,name:`折枝`,caption:ln,symmetry:`mirror-x`,brushWidth:.015,hint:`从枝干起笔，叶子只画半边，右半边交给对称。`,colors:cn,strokes:[{colorId:`stone-blue`,points:[[.5,.88],[.46,.82],[.4,.75],[.34,.67],[.28,.57],[.23,.47],[.19,.37],[.16,.27],[.15,.18],[.15,.16]]},{colorId:`stone-blue`,points:[[.33,.67],[.27,.65],[.21,.6],[.16,.53],[.19,.49],[.24,.55],[.29,.61],[.33,.64]]},{colorId:`stone-blue`,points:[[.26,.5],[.2,.46],[.15,.39],[.13,.32],[.17,.33],[.21,.39],[.25,.45]]},{colorId:`stone-blue`,points:[[.15,.22],[.12,.18],[.13,.13],[.16,.12],[.17,.16],[.16,.2]]},{colorId:`ochre`,points:[[.2,.3],[.24,.32],[.25,.36],[.22,.4],[.18,.4],[.15,.36],[.15,.32],[.17,.3],[.2,.3]]},{colorId:`gamboge`,points:[[.2,.35]]},{colorId:`gamboge`,points:[[.34,.74]]},{colorId:`gamboge`,points:[[.27,.44]]},{colorId:`gamboge`,points:[[.12,.26]]}]},{id:`round-flower`,name:`团花`,caption:ln,symmetry:`central`,brushWidth:.014,hint:`围绕中心点画一片花瓣，对角的一半会自动出现。`,colors:cn,strokes:[{colorId:`stone-blue`,points:[[.5,.5],[.455,.44],[.43,.36],[.43,.27],[.46,.19],[.5,.14],[.54,.19],[.57,.27],[.57,.36],[.545,.44],[.5,.5]]},{colorId:`stone-blue`,points:[[.5,.5],[.56,.455],[.64,.43],[.73,.43],[.81,.46],[.86,.5],[.81,.54],[.73,.57],[.64,.57],[.56,.545],[.5,.5]]},{colorId:`ochre`,points:[[.5,.5],[.475,.45],[.465,.39],[.475,.33],[.5,.3],[.525,.33],[.535,.39],[.525,.45],[.5,.5]]},{colorId:`ochre`,points:[[.5,.5],[.55,.475],[.61,.465],[.67,.475],[.7,.5],[.67,.525],[.61,.535],[.55,.525],[.5,.5]]},{colorId:`ochre`,points:un(.5,.5,.06)},{colorId:`gamboge`,points:[[.5,.5]]},{colorId:`gamboge`,points:[[.5,.16]]},{colorId:`gamboge`,points:[[.84,.5]]}]},{id:`square-medallion`,name:`方胜`,caption:ln,symmetry:`mirror-xy`,brushWidth:.014,hint:`只画左上角，横竖两轴会把四方补齐。`,colors:cn,strokes:[{colorId:`stone-blue`,points:[[.5,.09],[.43,.11],[.35,.16],[.28,.23],[.22,.31],[.17,.4],[.14,.5]]},{colorId:`ochre`,points:[[.5,.21],[.44,.23],[.38,.28],[.33,.34],[.28,.41],[.25,.5]]},{colorId:`stone-blue`,points:[[.12,.12],[.18,.08],[.24,.12],[.18,.16],[.12,.12]]},{colorId:`ochre`,points:[[.3,.3],[.35,.25],[.4,.22],[.45,.18]]},{colorId:`gamboge`,points:[[.18,.18]]},{colorId:`gamboge`,points:[[.36,.12]]},{colorId:`gamboge`,points:[[.12,.36]]}]}],fn=`wenmai.drawings.v1`,pn=12,mn=[`mirror-x`,`central`,`mirror-xy`];function hn(e){return typeof e==`string`&&mn.includes(e)}function gn(e){return typeof e==`object`&&e&&!Array.isArray(e)?e:null}function _n(e,t=4){let n=10**t;return Math.round(e*n)/n}function vn(e){if(typeof e!=`string`||e.length===0)return`未名底样`;let t=e.replace(/<[^>]*>/g,``).replace(/[\u0000-\u001F\u007F]/g,``).replace(/[\u200B-\u200F\u2028-\u202E\u2060\uFEFF]/g,``).trim();return Array.from(t).slice(0,20).join(``).trim()||`未名底样`}function yn(e){if(!Array.isArray(e)||e.length<1||e.length>8e3)return null;let t=[];for(let n of e){if(!Array.isArray(n)||n.length!==2)return null;let[e,r]=n;if(typeof e!=`number`||!Number.isFinite(e)||e<0||e>1||typeof r!=`number`||!Number.isFinite(r)||r<0||r>1)return null;t.push([_n(e),_n(r)])}return t}function bn(e){let t=gn(e);if(!t)return null;let n=Je(t.color);if(!n)return null;let r=t.width;if(typeof r!=`number`||!Number.isFinite(r)||r<.002||r>.08)return null;let i=yn(t.points);return i?{color:n,width:_n(r),points:i}:null}function xn(e){return e.reduce((e,t)=>e+t.points.length,0)}function Sn(e){if(!Array.isArray(e)||e.length<1||e.length>600)return null;let t=[];for(let n of e){let e=bn(n);if(!e)return null;t.push(e)}return xn(t)>8e3?null:t}function Cn(e){let t=gn(e);if(!t||typeof t.id!=`string`||t.id.length===0||typeof t.name!=`string`||!hn(t.symmetry)||typeof t.createdAt!=`number`||!Number.isFinite(t.createdAt))return null;let n=Sn(t.strokes);if(!n)return null;let r=typeof t.nickname==`string`&&t.nickname.length>0?Be(t.nickname):void 0;return{id:t.id,name:vn(t.name),symmetry:t.symmetry,strokes:n,...r?{nickname:r}:{},createdAt:t.createdAt,origin:t.origin===`local`?`local`:`server`}}function wn(e){let t=gn(e);if(!t||!Array.isArray(t.items))throw new Me(200,`malformed`,`底样库返回格式不正确`);return{items:t.items.map(Cn).filter(e=>e!==null),nextCursor:typeof t.nextCursor==`string`?t.nextCursor:null}}async function Tn(e={}){let t=new URLSearchParams;e.limit&&t.set(`limit`,String(e.limit)),e.cursor&&t.set(`cursor`,e.cursor);let n=t.toString();return wn(await Le(`/api/drawings${n?`?${n}`:``}`,{signal:e.signal}))}async function En(e){let t=Cn(gn(await Le(`/api/drawings`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({name:e.name,symmetry:e.symmetry,strokes:e.strokes,...e.nickname?{nickname:e.nickname}:{}})}))?.item);if(!t)throw new Me(200,`malformed`,`服务器返回的底样数据不完整`);return t}function Dn(){try{return typeof localStorage>`u`?null:localStorage}catch{return null}}function On(){return typeof crypto<`u`&&typeof crypto.randomUUID==`function`?`local-${crypto.randomUUID()}`:`local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function kn(e){return Array.isArray(e)?e.map(Cn).filter(e=>e!==null&&e.origin===`local`).sort((e,t)=>t.createdAt-e.createdAt).slice(0,12):[]}function An(){let e=Dn();if(!e)return[];try{let t=e.getItem(fn);return t?kn(JSON.parse(t)):[]}catch{return[]}}function jn(e){let t=Dn();if(!t)return!1;try{return t.setItem(fn,JSON.stringify(e.slice(0,12))),!0}catch{return!1}}function Mn(e,t=Date.now()){let n=Sn(e.strokes);if(!n||!hn(e.symmetry))return{ok:!1,items:An()};let r=e.nickname?Be(e.nickname):``,i={id:On(),name:vn(e.name),symmetry:e.symmetry,strokes:n,...r?{nickname:r}:{},createdAt:Number.isFinite(t)?t:Date.now(),origin:`local`},a=[i,...An()].slice(0,12),o=jn(a);return{ok:o,items:o?a:An(),drawing:o?i:void 0}}function Nn(e){let t=An().filter(t=>t.id!==e);return{ok:jn(t),items:t}}function Pn(e,t){let n=Ye(e);if(!n||t.length===0)return t[0]??`#2a2723`;let r=t[0],i=1/0;for(let e of t){let t=Ye(e);if(!t)continue;let a=(n.r-t.r)**2+(n.g-t.g)**2+(n.b-t.b)**2;a<i&&(i=a,r=e)}return r}function Fn(e){let t=[];for(let n of e)t.includes(n.color)||t.push(n.color);let n=t.slice(0,pn),r=n.map((e,t)=>({id:`c${t}`,name:e,value:e})),i=new Map;return t.forEach(e=>{let t=n.includes(e)?e:Pn(e,n),a=n.indexOf(t);i.set(e,r[a]?.id??r[0]?.id??`c0`)}),{colors:r,colorIdOf:i}}function In(e){let{colors:t,colorIdOf:n}=Fn(e.strokes),r=t.length>0?t:[{id:`c0`,name:`#2a2723`,value:`#2a2723`}],i=e.strokes.map(e=>({colorId:n.get(e.color)??r[0].id,width:e.width,points:e.points.map(([e,t])=>[e,t])}));return{id:`visitor-${e.id}`,name:e.name,caption:e.nickname?`游客底样 · 由 ${e.nickname} 留下`:`游客底样 · 匿名留下`,symmetry:e.symmetry,colors:r,strokes:i,source:`visitor`,author:e.nickname||`匿名`,createdAt:e.createdAt,hint:`沿淡线描画；对称会替你补齐另一份。`}}function Ln(e,t,n){let r=Sn(e.strokes.map(e=>({color:e.color,width:e.width,points:e.points.map(([e,t])=>[e,t])})));if(!r||!hn(e.symmetry))return null;let i=n?Be(n):``;return{name:vn(t),symmetry:e.symmetry,strokes:r,...i?{nickname:i}:{}}}var Rn=[`aria-label`],zn=w(O({__name:`DrawLevelPreview`,props:{level:{},label:{}},setup(e){let t=e,n=s(null);function r(){n.value&&vt(n.value,t.level,t.level.symmetry,{paper:`#efe6cf`})}return D(r),o(()=>t.level,r),(t,r)=>(u(),d(`canvas`,{ref_key:`canvas`,ref:n,class:`draw-preview`,width:`320`,height:`320`,role:`img`,"aria-label":e.label||`${e.level.name} 底样预览`},null,8,Rn))}}),[[`__scopeId`,`data-v-d1c38338`]]),Bn={id:`symmetry-draw`,class:`symmetry-draw`,"aria-labelledby":`symmetry-draw-title`},Vn={class:`section-head`},Hn={class:`section-stats`,"aria-live":`polite`},Un={key:0},Wn=[`disabled`],Gn={key:0,class:`section-status`,role:`status`},Kn={class:`keep-head`},qn={class:`hint`},Jn={class:`keep-fields`},Yn={class:`keep-field`},Xn={class:`keep-field`},Zn={class:`keep-summary mono`},Qn={class:`keep-actions`},$n=[`disabled`],er={key:0,class:`keep-error`,role:`alert`},tr={key:2,class:`section-status`,role:`status`},nr={key:3,class:`section-status`,role:`status`},rr={class:`gallery`,"aria-labelledby":`gallery-title`},ir={class:`gallery-head`},ar={key:0,class:`gallery-actions`},or=[`disabled`],sr={key:0,class:`gallery-empty`},cr=[`disabled`],lr={key:1,class:`gallery-empty gallery-empty--warn`},ur={key:2,class:`gallery-empty`},dr={key:3,class:`gallery-empty`},fr={key:4,class:`gallery-grid`},pr={class:`gallery-body`},mr={class:`gallery-name`},hr={class:`gallery-meta`},gr={key:0,class:`badge badge--local`},_r={class:`gallery-points mono`},vr={class:`gallery-card-actions`},yr=[`onClick`],br=[`onClick`],xr=`wenmai.nickname`,Sr=w(O({__name:`SymmetryDrawSection`,emits:[`score`,`keep`],setup(e,{emit:a}){let f=a,p={"mirror-x":`左右对折`,central:`中心对称`,"mirror-xy":`四方对称`},{online:g,offline:y,checking:b,check:S}=ne(),w=s(null),E=null,O=s([]),A=s([]),j=s(!1),M=s(!1),N=s(``),P=s(null),F=s(``),I=s(!1),L=s(null),R=s(``),te=s(``),z=s(!1),B=s(``),V=s(``),H=s(!1),ie=s(!1),ae=s(``),U=s(``),W=x(()=>[...O.value,...A.value].map(e=>({drawing:e,level:In(e),symmetry:p[e.symmetry],points:e.strokes.reduce((e,t)=>e+t.points.length,0)}))),oe=x(()=>W.value.length),se=x(()=>L.value?.strokes.length??0),ce=x(()=>L.value?.strokes.reduce((e,t)=>e+t.points.length,0)??0),G=x(()=>L.value?p[L.value.symmetry]:``);function K(){try{return Be(localStorage.getItem(xr)??``)}catch{return``}}function q(e){try{localStorage.setItem(xr,Be(e))}catch{}}function J(){return[...dn,...W.value.map(e=>e.level)]}function le(){E?.setLevels(J())}function ue(){w.value?.scrollIntoView({behavior:`smooth`,block:`center`})}function de(){if(!E||!ie.value)return;let e=J();if(e.length<2)return;let t=e.filter(e=>e.id!==ae.value),n=t[Math.floor(Math.random()*t.length)]??e[0];E.reset(),E.setLevel(n.id),U.value=`随机换成了「${n.name}」底样，直接落笔即可。`}async function fe(){if(g.value&&!M.value){M.value=!0,N.value=``;try{let e=await Tn({limit:12});O.value=e.items,j.value=!0,le()}catch(e){Ve(e)&&re(),N.value=e.message}finally{M.value=!1}}}async function pe(){await S(!0)&&!j.value&&await fe()}async function me(){g.value?await fe():await pe()}function he(e){let t=new Date,n=`${String(t.getMonth()+1).padStart(2,`0`)}${String(t.getDate()).padStart(2,`0`)}`;return`${p[e.symmetry]} · ${n}`}function ge(e){L.value=e,I.value=!0,B.value=``,V.value=``,H.value=!1,R.value=he(e),te.value=K(),l(()=>{document.getElementById(`keep-form`)?.scrollIntoView({behavior:`smooth`,block:`center`}),document.getElementById(`keep-name`)?.focus({preventScroll:!0})})}function _e(){I.value=!1,L.value=null,B.value=``,H.value=!1}function ve(e,t){V.value=t,I.value=!1,L.value=null,B.value=``,H.value=!1,le();let n=`visitor-${e.id}`;l(()=>{E?.reset(),E?.setLevel(n),ue()})}function ye(e){if(Ve(e))return`共创墙未连接`;if(e instanceof Me){if(e.status===404)return`底样接口暂不可用（后端可能未更新）`;if(e.status>=500)return`底样库暂时出错`}return null}async function Y(e=!1){if(!L.value||z.value)return;let t=Ln(L.value,R.value,te.value);if(!t)B.value=`笔迹数据不完整，请重新画一遍。`,H.value=!1;else{q(te.value),z.value=!0,B.value=``,H.value=!1;try{if(g.value&&!e)try{let e=await En(t);O.value=[e,...O.value],j.value=!0,ve(e,`已留下「${e.name}」。它会出现在下一位玩家的底样里。`);return}catch(e){let n=ye(e);if(!n){B.value=`发布失败：${e.message}`,H.value=!0;return}Ve(e)&&re();let r=Mn(t);if(r.ok&&r.drawing){A.value=r.items,ve(r.drawing,`${n}，已改存本机底样「${r.drawing.name}」，仅本机可见。`);return}B.value=`${n}，本机保存也不可用，请稍后重试。`,H.value=!0;return}let n=Mn(t);if(!n.ok||!n.drawing){B.value=`本机存储不可用或已满，未能保存。`;return}A.value=n.items,ve(n.drawing,g.value?`已改存本机底样「${n.drawing.name}」，仅本机可见。`:`共创墙未连接，已留作本机底样「${n.drawing.name}」，仅本机可见。`)}catch(e){B.value=`保存失败：${e.message}`,H.value=g.value}finally{z.value=!1}}}function be(e){E?.addLevel(e.level,{select:!0}),E?.reset(),F.value=`已换成「${e.drawing.name}」，直接落笔即可。`,ue()}function xe(e){let t=Nn(e.id);A.value=t.items,le(),F.value=t.ok?`已从本机删除该底样。`:`已从当前列表移除，但本机存储写入失败，刷新后可能重新出现。`,V.value&&V.value.includes(e.name)&&(V.value=``)}return o(g,e=>{e&&!j.value&&fe()}),D(()=>{A.value=An(),w.value&&(E=sn(w.value,{levels:J(),onLevelChange:e=>{ae.value=e.id},onScore:e=>{P.value=e,f(`score`,e)},onKeep:e=>{f(`keep`,e),ge(e)}}),ie.value=!0,ae.value||=J()[0]?.id??``,g.value&&fe())}),t(()=>{E?.destroy(),E=null,ie.value=!1}),(e,t)=>(u(),d(`section`,Bn,[v(`header`,Vn,[t[5]||=v(`div`,{class:`section-copy`},[v(`p`,{class:`eyebrow`},`对折成纹 · 游客共创`),v(`h2`,{id:`symmetry-draw-title`},`让对称替你落笔，也替下一位留一张底样`),v(`p`,{class:`lede`},` 选一张底样，沿着淡线描画；另一半不必动手，镜像会补齐。 画完点「留作底样」，你的线条会进入底样库，下一位玩家可以接着描。 颜色不限传统色板，点「全色盘」可取任意颜色；评分只看线条与底样的几何覆盖。 `)],-1),v(`p`,Hn,[v(`span`,null,c(r(dn).length)+` 张示例`,1),v(`span`,null,c(oe.value)+` 张游客`,1),P.value?(u(),d(`span`,Un,`上次 `+c(P.value.score.toFixed(1))+` 分`,1)):h(``,!0),v(`button`,{type:`button`,class:`mini`,disabled:!ie.value,title:`随机换一张示例或游客底样`,onClick:de},` 随机选图 `,8,Wn)])]),U.value?(u(),d(`p`,Gn,c(U.value),1)):h(``,!0),v(`div`,{ref_key:`host`,ref:w,class:`mount`},null,512),I.value&&L.value?(u(),d(`form`,{key:1,id:`keep-form`,class:`keep`,onSubmit:t[4]||=T(e=>Y(),[`prevent`])},[v(`div`,Kn,[t[7]||=v(`p`,{class:`eyebrow`},`游客创作 · 留下底样`,-1),t[8]||=v(`h3`,null,`把这一笔留给下一位`,-1),v(`p`,qn,[t[6]||=k(` 保存后，这张底样会出现在下方底样库和游戏底样条里，任何人都能按同一条对称规则试画。 `,-1),r(y)?(u(),d(m,{key:0},[k(`共创墙未连接，本次只保存在本机。`)],64)):h(``,!0)])]),v(`div`,Jn,[v(`label`,Yn,[t[9]||=v(`span`,null,`底样名`,-1),_(v(`input`,{id:`keep-name`,"onUpdate:modelValue":t[0]||=e=>R.value=e,type:`text`,maxlength:`20`,autocomplete:`off`,placeholder:`未名底样`},null,512),[[C,R.value]])]),v(`label`,Xn,[t[10]||=v(`span`,null,`署名（选填）`,-1),_(v(`input`,{"onUpdate:modelValue":t[1]||=e=>te.value=e,type:`text`,maxlength:`20`,autocomplete:`nickname`,placeholder:`匿名`},null,512),[[C,te.value]])]),v(`p`,Zn,c(G.value)+` · `+c(se.value)+` 条笔迹 · `+c(ce.value)+` 个点 `,1)]),v(`div`,Qn,[v(`button`,{type:`submit`,class:`action action--primary`,disabled:z.value,onClick:t[2]||=T(e=>Y(),[`prevent`])},c(z.value?`保存中…`:r(g)?`发布到底样库`:`留作本机底样`),9,$n),H.value&&!z.value?(u(),d(`button`,{key:0,type:`button`,class:`action`,onClick:t[3]||=e=>Y(!0)},` 改存本机 `)):h(``,!0),v(`button`,{type:`button`,class:`mini`,onClick:_e},`先不发布`)]),B.value?(u(),d(`p`,er,c(B.value),1)):h(``,!0)],32)):h(``,!0),V.value?(u(),d(`p`,tr,c(V.value),1)):h(``,!0),F.value?(u(),d(`p`,nr,c(F.value),1)):h(``,!0),v(`section`,rr,[v(`div`,ir,[t[11]||=v(`div`,null,[v(`p`,{class:`eyebrow`},`游客底样库`),v(`h3`,{id:`gallery-title`},`下一位玩家，从你这里起笔`),v(`p`,{class:`gallery-lede`},` 这里的每一张都是游客留下的笔迹，不是文物复原，也不代表任何纹样的历史定论。 `)],-1),r(!0)?h(``,!0):(u(),d(`div`,ar,[v(`span`,{class:i([`badge`,{"badge--warn":r(y)}])},c(r(g)?`共创墙已连接`:r(y)?`共创墙未连接`:`正在检查连接`),3),v(`button`,{type:`button`,class:`mini`,disabled:M.value||r(b),onClick:me},c(M.value?`刷新中…`:r(g)?`刷新底样`:`重试连接`),9,or)]))]),r(y)&&!r(!0)?(u(),d(`p`,sr,[t[12]||=k(` 共创墙未连接，线上底样暂不可见；本机底样仍可试画。 `,-1),v(`button`,{type:`button`,class:`text-button`,disabled:r(b),onClick:pe},c(r(b)?`重试中…`:`重试连接`),9,cr)])):N.value?(u(),d(`p`,lr,c(N.value),1)):h(``,!0),M.value&&!j.value?(u(),d(`p`,ur,`正在读取游客底样…`)):h(``,!0),!M.value&&W.value.length===0&&!N.value?(u(),d(`p`,dr,c(r(y)?`本机还没有底样。画一笔并「留作底样」，它只保存在本机。`:`还没有游客底样。画一笔并「留作底样」，成为第一张。`),1)):h(``,!0),W.value.length>0?(u(),d(`ul`,fr,[(u(!0),d(m,null,n(W.value,e=>(u(),d(`li`,{key:e.drawing.id,class:`gallery-card`},[ee(zn,{level:e.level,label:`${e.drawing.name} 底样预览`},null,8,[`level`,`label`]),v(`div`,pr,[v(`p`,mr,c(e.drawing.name),1),v(`p`,hr,[v(`span`,null,c(e.symmetry),1),v(`span`,null,c(e.drawing.nickname||`匿名`),1),e.drawing.origin===`local`?(u(),d(`span`,gr,`仅本机`)):h(``,!0)]),v(`p`,_r,c(e.points)+` 点`,1)]),v(`div`,vr,[v(`button`,{type:`button`,class:`mini`,onClick:t=>be(e)},`用它作底样`,8,yr),e.drawing.origin===`local`?(u(),d(`button`,{key:0,type:`button`,class:`mini mini--danger`,onClick:t=>xe(e.drawing)},` 删除 `,8,br)):h(``,!0)])]))),128))])):h(``,!0)])]))}}),[[`__scopeId`,`data-v-31c40332`]]),Cr={class:`studio container`},wr={class:`studio-head`},Tr=[`data-level`,`title`],Er={class:`cost-label`},Dr={key:0,class:`notice`},Or={key:1,class:`notice notice--warn`},kr={key:2,class:`notice notice--warn`},Ar={key:3,class:`notice notice--warn`},jr={class:`studio-grid`},Mr={class:`stage`},Nr={class:`origin-strip`,"aria-labelledby":`origin-title`},Pr={class:`origin-id`},Fr={id:`origin-title`,class:`origin-name`},Ir={class:`meta`},Lr={class:`select-row origin-select`,for:`pattern-select`},Rr=[`value`],zr=[`value`],Br=[`innerHTML`],Vr={class:`origin-side`},Hr={class:`hint`},Ur=[`innerHTML`],Wr={class:`construction-bar`},Gr={class:`toggles`},Kr={key:1,class:`feedback`},qr={class:`share-box`},Jr={class:`share-row`},Yr={class:`mono share-code`},Xr=[`disabled`],Zr={class:`zone zone--rules`,"aria-labelledby":`rules-title`},Qr={key:0,class:`param-tabs`,role:`tablist`,"aria-label":`参数分组`},$r=[`aria-selected`],ei=[`aria-selected`],ti=[`aria-selected`],ni={class:`segmented`,role:`group`,"aria-label":`对称方式`},ri=[`aria-pressed`,`onClick`],ii={class:`mono`},ai={class:`range-row`,for:`repeat-x`},oi=[`aria-valuetext`],si={class:`range-row`,for:`repeat-y`},ci=[`aria-valuetext`],li={class:`hint`},ui=[`open`],di={class:`range-row`,for:`scale`},fi=[`aria-valuetext`],pi={class:`select-row`,for:`palette`},mi=[`value`],hi={class:`segmented segmented--tight`,role:`group`,"aria-label":`背景`},gi=[`aria-pressed`,`onClick`],_i=[`open`],vi={class:`select-row`,for:`seed`},yi={class:`seed-row`},bi={class:`segmented segmented--tight`,role:`group`,"aria-label":`显示旋转`},xi=[`aria-pressed`,`onClick`],Si={class:`workbench`,"aria-labelledby":`workbench-title`},Ci={class:`workbench-copy`},wi={class:`title-row`,for:`work-title`},Ti={class:`title-input`},Ei=[`placeholder`],Di={class:`creation-note`},Oi={class:`workbench-actions`},ki={id:`export`,class:`panel panel--export`},Ai={class:`export-row`},ji={class:`segmented segmented--tight`,role:`group`,"aria-label":`导出背景`},Mi=[`aria-pressed`,`onClick`],Ni={class:`export-row`},Pi={class:`segmented segmented--tight`,role:`group`,"aria-label":`PNG 尺寸`},Fi=[`aria-pressed`,`onClick`],Ii={class:`hint export-hint`},Li={key:0,class:`hint hint--warn`},Ri={class:`export-buttons`},zi=[`disabled`],Bi=[`disabled`],Vi={class:`publish-box`},Hi={class:`nickname-row`,for:`nickname`},Ui={class:`save-row`},Wi=[`disabled`],Gi={key:4,class:`saved`,"aria-labelledby":`saved-title`},Ki={key:0,class:`hint`},qi={key:1,class:`saved-list`},Ji={class:`saved-thumb`},Yi={class:`saved-body`},Xi={class:`saved-name`},Zi={class:`hint mono`},Qi={class:`saved-actions`},$i=[`onClick`],ea={key:0,type:`button`,class:`mini`,disabled:``},ta=[`disabled`,`onClick`],na=[`onClick`],ra={key:5,class:`wall`,"aria-labelledby":`wall-title`},ia={class:`wall-head`},aa={class:`wall-actions`},oa={key:0,class:`badge badge--todo`},sa=[`disabled`],ca={class:`wall-filters`,role:`group`,"aria-label":`按纹样筛选`},la=[`aria-pressed`,`onClick`],ua={key:0,class:`wall-empty`},da=[`disabled`],fa={key:1,class:`wall-empty wall-empty--warn`},pa={key:2,class:`wall-empty`},ma={key:3,class:`wall-empty`},ha={key:4,class:`wall-grid`},ga=[`onClick`],_a=[`innerHTML`],va={class:`wall-body`},ya={class:`wall-title`},ba={class:`wall-meta`},xa={key:5,class:`wall-more`},Sa=[`disabled`],Ca={class:`dock`,role:`region`,"aria-label":`快捷操作`},wa=[`disabled`],Ta=`wenmai.nickname`,Ea=w(O({__name:`Studio`,setup(w){let T=S(),O=g(),j=a({grid:!1,symmetryAxes:!1,unitBounds:!1,layers:!1}),N=s(!1),L=s(!1),V=s(!1),U=!1,W=s(``),oe=s(!1),se;async function ce(){let e=Xe.value;if(e)try{await navigator.clipboard.writeText(e),oe.value=!0,window.clearTimeout(se),se=window.setTimeout(()=>oe.value=!1,1600)}catch{W.value=`复制失败，请手动选中链接`,G.value=!0}}let G=s(!1),K=s(``),q=s(z[0]),J=s(A(z[0])),de=x(()=>M(J.value,q.value)),pe=x(()=>`${typeof T.query.c==`string`?T.query.c:``}|${typeof T.query.pattern==`string`?T.query.pattern:``}`),me=``;function he(){let e=typeof T.query.c==`string`?T.query.c:``,t=U;if(U=!1,N.value=!1,L.value=!1,V.value=!1,K.value=``,e){let n=ue(e,z);if(n){let e=B(n.patternId)??z[0];q.value=e,J.value=n,N.value=!t;return}L.value=!0}let n=typeof T.query.pattern==`string`?T.query.pattern:``;n&&!B(n)&&(V.value=!0);let r=B(n)??z[0];q.value=r,J.value=A(r)}o(pe,e=>{e!==me&&(me=e,he())},{immediate:!0});function ge(e){e!==q.value.id&&O.replace({query:{pattern:e}})}let _e=x(()=>T.query.debug===`seam`),Y=x(()=>P({pattern:q.value,params:{...de.value},construction:{...xe.value},seamDebug:_e.value,idPrefix:`studio-${q.value.id}`})),be=s(``),xe=x(()=>({...j,grid:j.grid||be.value===`grid`,symmetryAxes:j.symmetryAxes||be.value===`symmetryAxes`})),X=x(()=>Y.value.params);function Ce(e){return z.find(t=>t.id===e)??z[0]}let we=s(!1),Z=s(`sym`),Ee=null;function Ae(e){we.value=e.matches}typeof window<`u`&&(Ee=window.matchMedia(`(max-width: 900px)`),we.value=Ee.matches,Ee.addEventListener(`change`,Ae)),t(()=>{Ee?.removeEventListener(`change`,Ae),Ee=null});let je=x(()=>I({pattern:q.value,paletteId:de.value.paletteId,seed:de.value.seed,idPrefix:`studio-unit-${q.value.id}`})),Me=x(()=>de.value.scale.toFixed(2)),Ne=x(()=>{switch(Y.value.cost.level){case`ok`:return`正常`;case`warn`:return`高负载`;case`degraded`:return`已降级`}}),Pe=x(()=>{switch(q.value.grid.type){case`cross`:return`十字网格`;case`diamond`:return`斜格`;case`weave`:return`织纹`}}),Fe=x(()=>j.grid&&j.symmetryAxes&&j.unitBounds&&j.layers);function Ie(){let e=!Fe.value;j.grid=e,j.symmetryAxes=e,j.unitBounds=e,j.layers=e}function Le(e){J.value.symmetry=e}function He(e){J.value.background=e}function Ue(e){J.value.displayRotation=e}function We(){J.value=M(J.value,q.value)}function Ge(){J.value.seed=Math.floor(Math.random()*65536)}function Ke(){let e=q.value.allowedSymmetries;J.value.symmetry=e[Math.floor(Math.random()*e.length)],J.value.paletteId=q.value.palettes[Math.floor(Math.random()*q.value.palettes.length)].id,J.value.scale=Number((.6+Math.floor(Math.random()*17)*.05).toFixed(2)),J.value.background=[`paper`,`ink`,`none`][Math.floor(Math.random()*3)],J.value.displayRotation=[0,90,180,270][Math.floor(Math.random()*4)],J.value.seed=Math.floor(Math.random()*65536);let t=2+Math.floor(Math.random()*7),n=2+Math.floor(Math.random()*7);for(;t*n>64;)t>=n?--t:--n;J.value.repeatX=t,J.value.repeatY=n,G.value=!1,W.value=`已随机一套参数`}function qe(){J.value=A(q.value),G.value=!1,W.value=`已恢复默认参数`}async function Je(){if(!Xe.value)G.value=!0,W.value=`当前参数无法编码`;else try{await navigator.clipboard.writeText(Xe.value),G.value=!1,W.value=`分享链接已复制`}catch{G.value=!0,W.value=`复制失败，请手动选择下方链接`}}let Ye=x(()=>le(X.value,z)),Xe=x(()=>{if(!Ye.value)return``;let e=O.resolve({name:`studio`,query:{c:Ye.value}}).href;return new URL(e,window.location.origin).toString()}),Ze=x(()=>H(X.value,q.value)),Qe=x(()=>K.value||Ze.value),$e=x(()=>ie(X.value,q.value));function et(){K.value=ae(K.value)}let tt=s([]),nt=s(!1);function rt(){let e=De(X.value,Qe.value);e.ok?(tt.value=e.items,G.value=!1,W.value=`已保存到本机（仅本机可见）`):(G.value=!0,W.value=`本机存储不可用或已满，未能保存`)}async function it(e){let t=B(e.patternId);if(!t){G.value=!0,W.value=`该纹样尚未开放`;return}let n=le(e.params,z);U=!0,n?await O.replace({query:{c:n}}):await O.replace({query:{pattern:t.id}}),await l(),U=!1,N.value=!1,n||(q.value=t,J.value=F(e.params,t).params),K.value=e.title??``,G.value=!1,W.value=`已打开「${e.title??H(e.params,t)}」`}function at(e){let t=ke(e);tt.value=t.items,G.value=!t.ok,W.value=t.ok?`已从本机删除`:`已从当前列表移除，但本机存储写入失败，刷新后可能重新出现`}let{online:ot,offline:st,checking:ct,check:lt}=ne();function ut(){try{return Be(localStorage.getItem(Ta)??``)}catch{return``}}let dt=s(ut()),ft=s(!1),pt=s([]),mt=s(null),ht=s(!1),gt=s(!1),_t=s(``),vt=s(``),yt=[{id:``,name:`全部`},...z.map(e=>({id:e.id,name:e.name}))],bt=0;function xt(){dt.value=Be(dt.value);try{localStorage.setItem(Ta,dt.value)}catch{}}function St(e){let t=B(e.patternId);if(!t)return null;let n=F(e.params,t).params,r=P({pattern:t,params:n,idPrefix:`wall-${e.id}`}).svg;return{item:e,pattern:t,title:H(n,t),svg:r}}function Ct(e,t){pt.value=t?e:[...pt.value,...e]}function wt(e){pt.value=[...e,...pt.value]}function Tt(e){vt.value!==e&&(vt.value=e,mt.value=null,pt.value=[],gt.value=!1,_t.value=``,ot.value&&Dt(!0))}function Et(e){if(vt.value&&vt.value!==e.patternId)return;let t=St(e);t&&wt([t]),gt.value=!0}async function Dt(e=!1){if(!ot.value)return;let t=++bt;ht.value=!0,_t.value=``;try{let n=await Re({...vt.value?{patternId:vt.value}:{},limit:12,cursor:e?null:mt.value});if(t!==bt)return;Ct(n.items.map(St).filter(e=>e!==null),e),mt.value=n.nextCursor,gt.value=!0}catch(e){if(t!==bt)return;Ve(e)&&re(),_t.value=e.message}finally{t===bt&&(ht.value=!1)}}async function Ot(){if(!ot.value){G.value=!0,W.value=`共创墙未连接，作品已只保存在本机`;return}if(ft.value)return;let e=X.value,t=ae(Qe.value)||`未命名作品`,n=Se(tt.value,e,t);if(n?.remoteId){G.value=!1,W.value=`这幅作品已发布过，无需重复发布`;return}ft.value=!0;let r,i=!1,a=!0;try{if(n)r=n;else{let n=De(e,t);n.ok&&(tt.value=n.items,r=n.creation,i=!0)}let o=await ze(e,dt.value?Be(dt.value):void 0);if(r){let e=Oe(r.id,o.id);a=e.ok,tt.value=e.items}Et(o),G.value=!a,W.value=r?a?i?`已发布到公共共创墙（同时保存到本机）`:`已发布到公共共创墙`:`已发布到公共共创墙，但本机记录未更新（存储已满），刷新后可能显示为未上墙`:`已发布到公共共创墙（本机保存失败，仅线上可见）`}catch(e){Ve(e)&&re(),G.value=!0,W.value=`发布失败：${e.message}。`+(r?`作品已保存在本机，可稍后重试上传。`:`本机保存也失败，可稍后重试。`)}finally{ft.value=!1}}async function kt(e){if(!ot.value)G.value=!0,W.value=`共创墙未连接，稍后可在本机作品里重试上传`;else if(!ft.value){ft.value=!0;try{let t=await ze(e.params,dt.value?Be(dt.value):void 0),n=Oe(e.id,t.id);tt.value=n.items,Et(t),G.value=!n.ok,W.value=n.ok?`已发布到公共共创墙`:`已发布到公共共创墙，但本机记录未更新（存储已满），刷新后可能显示为未上墙`}catch(e){Ve(e)&&re(),G.value=!0,W.value=`上传失败：${e.message}`}finally{ft.value=!1}}}async function Q(e){let t=le(e.item.params,z);t?(await O.replace({query:{c:t}}),await l(),U=!1,N.value=!1,K.value=``,G.value=!1,W.value=`已载入「${e.title}」`,document.querySelector(`.stage`)?.scrollIntoView({behavior:`smooth`,block:`start`})):(G.value=!0,W.value=`这幅作品的参数无法编码，暂不能打开`)}o(ot,e=>{e&&!gt.value&&Dt(!0)}),D(()=>{tt.value=Te(),ot.value&&Dt(!0)});let At=s(`paper`),$=s(`2x`),jt=x(()=>$.value===`2x`?`约 1–2 MB`:`约 5–7 MB`),Mt=s(!1),Nt=x(()=>_e.value),Pt=x(()=>_e.value?`接缝检查模式不参与导出；去掉 URL 里的 ?debug=seam 即可退出。`:Y.value.cost.level===`degraded`?`当前参数已降级为 ${X.value.repeatX}×${X.value.repeatY}，导出将使用降级后的结果。`:Y.value.cost.level===`warn`?`高负载参数可用，但导出会关闭阴影与滤镜（本版本本就没有）。`:``);function Ft(){return{...X.value,background:At.value}}function It(){if(Nt.value)G.value=!0,W.value=Pt.value;else try{let e=P({pattern:q.value,params:Ft(),idPrefix:`export-${q.value.id}`});ve(e.svg,fe(e.params,`svg`)),G.value=!1,W.value=`SVG 已导出`}catch(e){G.value=!0,W.value=`SVG 导出失败：${e.message}，可重试或改用 PNG`}}async function Lt(){if(Nt.value)G.value=!0,W.value=Pt.value;else if(!Mt.value){Mt.value=!0;try{let e=P({pattern:q.value,params:Ft(),idPrefix:`export-${q.value.id}`});await ye(e.svg,fe(e.params,`png`),$.value),G.value=!1,W.value=`PNG（${$.value===`2x`?`2048`:`4096`}px）已导出`}catch(e){G.value=!0,W.value=`PNG 导出失败：${e.message}，可重试或改用 SVG`}finally{Mt.value=!1}}}return(t,a)=>(u(),d(`section`,Cr,[v(`header`,wr,[a[27]||=E(`<div data-v-ba9a8045><p class="eyebrow" data-v-ba9a8045>纹样工坊</p><h1 data-v-ba9a8045>把规则拿在手里</h1><p class="lede" data-v-ba9a8045> 改动的是纹样的语法，而不是一张图。预览实时由 <span class="mono" data-v-ba9a8045>单元 → 对称 → 平铺</span> 管线生成，导出与分享共用同一组参数。 </p><p class="head-link" data-v-ba9a8045><a href="#symmetry-draw" data-v-ba9a8045>想自己落笔？去「对折成纹」· 游客共创 →</a></p></div>`,1),v(`div`,{class:`cost`,"data-level":Y.value.cost.level,role:`status`,title:`E = `+X.value.repeatX+`×`+X.value.repeatY+` × `+Y.value.cost.copiesPerTile+` × `+q.value.unit.paths},[v(`span`,Er,`性能 · `+c(Ne.value),1)],8,Tr)]),N.value?(u(),d(`p`,Dr,`已从分享链接恢复参数。`)):h(``,!0),L.value?(u(),d(`p`,Or,`分享链接无效，已使用默认参数。`)):h(``,!0),V.value?(u(),d(`p`,kr,` 纹样参数无效，已打开默认纹样。 `)):h(``,!0),Y.value.recovered?(u(),d(`p`,Ar,` 参数不合法，已回退默认值：`+c(Y.value.issues[0]),1)):h(``,!0),v(`div`,jr,[v(`div`,Mr,[v(`div`,Nr,[v(`div`,Pr,[a[28]||=v(`p`,{class:`eyebrow`},`起源`,-1),v(`h2`,Fr,c(q.value.name),1),v(`p`,Ir,c(q.value.region)+` · `+c(q.value.craft),1)]),v(`label`,Lr,[a[29]||=v(`span`,null,`选择纹样`,-1),v(`select`,{id:`pattern-select`,value:q.value.id,onChange:a[0]||=e=>ge(e.target.value)},[(u(!0),d(m,null,n(r(z),e=>(u(),d(`option`,{key:e.id,value:e.id},c(e.name)+` · `+c(e.level===`deep`?`深案例`:`轻案例`),9,zr))),128))],40,Rr)]),v(`div`,{class:`unit-thumb origin-thumb`,innerHTML:je.value},null,8,Br),v(`div`,Vr,[v(`p`,Hr,` 单元 `+c(q.value.unit.paths)+` 条子路径 · `+c(Pe.value)+` · `+c(q.value.allowedSymmetries.join(` / `)),1),a[31]||=v(`p`,{class:`placeholder`},[v(`span`,{class:`badge badge--todo`},`内容核实中`),k(` 单元几何为样稿；故事与来源已补，母题 / 工艺未核实处见详情页。 `)],-1),ee(r(y),{class:`text-link`,to:`/atlas/${q.value.id}`},{default:e(()=>[...a[30]||=[k(`查看解构 →`,-1)]]),_:1},8,[`to`])])]),v(`div`,{class:i([`preview-frame`,{"is-transparent":X.value.background===`none`}])},[v(`div`,{class:`pattern-render`,innerHTML:Y.value.svg},null,8,Ur)],2),v(`div`,Wr,[a[36]||=v(`span`,{class:`eyebrow`},`构造模式`,-1),v(`div`,Gr,[v(`label`,null,[_(v(`input`,{"onUpdate:modelValue":a[1]||=e=>j.grid=e,type:`checkbox`},null,512),[[f,j.grid]]),a[32]||=k(` 网格`,-1)]),v(`label`,null,[_(v(`input`,{"onUpdate:modelValue":a[2]||=e=>j.symmetryAxes=e,type:`checkbox`},null,512),[[f,j.symmetryAxes]]),a[33]||=k(` 对称轴`,-1)]),v(`label`,null,[_(v(`input`,{"onUpdate:modelValue":a[3]||=e=>j.unitBounds=e,type:`checkbox`},null,512),[[f,j.unitBounds]]),a[34]||=k(` 单元边界`,-1)]),v(`label`,null,[_(v(`input`,{"onUpdate:modelValue":a[4]||=e=>j.layers=e,type:`checkbox`},null,512),[[f,j.layers]]),a[35]||=k(` 色层分解`,-1)])]),v(`button`,{type:`button`,class:`mini`,onClick:Ie},c(Fe.value?`全部关闭`:`全部开启`),1)]),a[37]||=v(`p`,{class:`hint`},`构造模式只用于观察，不进入导出结果。`,-1),v(`div`,{class:`stage-meta`},[v(`div`,{class:`actions`},[v(`button`,{type:`button`,class:`action`,onClick:Ke},`随机一套`),v(`button`,{type:`button`,class:`action`,onClick:qe},`恢复默认`),v(`button`,{type:`button`,class:`action`,onClick:Je},` 复制分享链接 `)])]),W.value?(u(),d(`p`,{key:0,class:i([`feedback`,{"feedback--warn":G.value}]),role:`status`},c(W.value),3)):h(``,!0),Y.value.cost.note?(u(),d(`p`,Kr,c(Y.value.cost.note),1)):h(``,!0),v(`details`,qr,[v(`summary`,null,`分享编码（`+c(Ye.value?.length??0)+` 字符）`,1),v(`div`,Jr,[v(`p`,Yr,c(Xe.value||`当前参数无法编码`),1),v(`button`,{type:`button`,class:`mini`,disabled:!Xe.value,onClick:ce},c(oe.value?`已复制`:`复制`),9,Xr)])])]),v(`aside`,Zr,[a[51]||=v(`p`,{class:`eyebrow`,id:`rules-title`},`规则`,-1),we.value?(u(),d(`div`,Qr,[v(`button`,{type:`button`,role:`tab`,"aria-selected":Z.value===`sym`,class:i({active:Z.value===`sym`}),onClick:a[5]||=e=>Z.value=`sym`},` 对称 `,10,$r),v(`button`,{type:`button`,role:`tab`,"aria-selected":Z.value===`repeat`,class:i({active:Z.value===`repeat`}),onClick:a[6]||=e=>Z.value=`repeat`},` 重复 `,10,ei),v(`button`,{type:`button`,role:`tab`,"aria-selected":Z.value===`more`,class:i({active:Z.value===`more`}),onClick:a[7]||=e=>Z.value=`more`},` 色板与细节 `,10,ti)])):h(``,!0),_(v(`fieldset`,{class:`panel`,onMouseenter:a[8]||=e=>be.value=`symmetryAxes`,onMouseleave:a[9]||=e=>be.value=``},[a[38]||=v(`legend`,{class:`eyebrow`},`对称`,-1),v(`div`,ni,[(u(!0),d(m,null,n(q.value.allowedSymmetries,e=>(u(),d(`button`,{key:e,type:`button`,"aria-pressed":J.value.symmetry===e,class:i({active:J.value.symmetry===e}),onClick:t=>Le(e)},[v(`span`,ii,c(e),1),k(` `+c(r(te)[e]),1)],10,ri))),128))]),a[39]||=v(`p`,{class:`hint`},`挑花常以中心对折起稿，镜像决定左右是否成双。`,-1)],544),[[p,!we.value||Z.value===`sym`]]),_(v(`fieldset`,{class:`panel`,onMouseenter:a[14]||=e=>be.value=`grid`,onMouseleave:a[15]||=e=>be.value=``},[a[42]||=v(`legend`,{class:`eyebrow`},`重复`,-1),v(`label`,ai,[v(`span`,null,[a[40]||=k(`横向 `,-1),_(v(`input`,{class:`range-num`,"onUpdate:modelValue":a[10]||=e=>J.value.repeatX=e,type:`number`,min:`2`,max:`8`,step:`1`,"aria-label":`横向重复次数`,onChange:We},null,544),[[C,J.value.repeatX,void 0,{number:!0}]])]),_(v(`input`,{id:`repeat-x`,"onUpdate:modelValue":a[11]||=e=>J.value.repeatX=e,type:`range`,min:`2`,max:`8`,step:`1`,"aria-valuetext":`${J.value.repeatX} 次`},null,8,oi),[[C,J.value.repeatX,void 0,{number:!0}]])]),v(`label`,si,[v(`span`,null,[a[41]||=k(`纵向 `,-1),_(v(`input`,{class:`range-num`,"onUpdate:modelValue":a[12]||=e=>J.value.repeatY=e,type:`number`,min:`2`,max:`8`,step:`1`,"aria-label":`纵向重复次数`,onChange:We},null,544),[[C,J.value.repeatY,void 0,{number:!0}]])]),_(v(`input`,{id:`repeat-y`,"onUpdate:modelValue":a[13]||=e=>J.value.repeatY=e,type:`range`,min:`2`,max:`8`,step:`1`,"aria-valuetext":`${J.value.repeatY} 次`},null,8,ci),[[C,J.value.repeatY,void 0,{number:!0}]])]),v(`p`,li,`当前 `+c(de.value.repeatX)+` × `+c(de.value.repeatY)+`。重复数越少，单元越清楚；乘积上限 64。`,1)],544),[[p,!we.value||Z.value===`repeat`]]),_(v(`details`,{class:`panel panel--fold`,open:we.value&&Z.value===`more`},[a[45]||=v(`summary`,{class:`eyebrow`},`尺度与色板`,-1),v(`label`,di,[v(`span`,null,[a[43]||=k(`单元尺度 `,-1),_(v(`input`,{class:`range-num`,"onUpdate:modelValue":a[16]||=e=>J.value.scale=e,type:`number`,min:`0.6`,max:`1.4`,step:`0.05`,"aria-label":`单元尺度`,onChange:We},null,544),[[C,J.value.scale,void 0,{number:!0}]])]),_(v(`input`,{id:`scale`,"onUpdate:modelValue":a[17]||=e=>J.value.scale=e,type:`range`,min:`0.6`,max:`1.4`,step:`0.05`,"aria-valuetext":`${Me.value} 倍`},null,8,fi),[[C,J.value.scale,void 0,{number:!0}]])]),v(`label`,pi,[a[44]||=v(`span`,null,`色板`,-1),_(v(`select`,{id:`palette`,"onUpdate:modelValue":a[18]||=e=>J.value.paletteId=e},[(u(!0),d(m,null,n(q.value.palettes,e=>(u(),d(`option`,{key:e.id,value:e.id},c(e.name)+c(e.kind===`traditional`?`（传统参考）`:`（现代创作）`),9,mi))),128))],512),[[b,J.value.paletteId]])]),a[46]||=v(`p`,{class:`hint`},`传统参考色见于馆藏实物；现代创作色为本次再创作。`,-1),v(`div`,hi,[(u(),d(m,null,n([`paper`,`ink`,`none`],e=>v(`button`,{key:e,type:`button`,"aria-pressed":J.value.background===e,class:i({active:J.value.background===e}),onClick:t=>He(e)},c(e===`paper`?`纸`:e===`ink`?`墨`:`透明`),11,gi)),64))])],8,ui),[[p,!we.value||Z.value===`more`]]),_(v(`details`,{class:`panel panel--fold`,open:we.value&&Z.value===`more`},[a[48]||=v(`summary`,{class:`eyebrow`},`细节`,-1),v(`label`,vi,[a[47]||=v(`span`,null,`种子`,-1),v(`span`,yi,[_(v(`input`,{id:`seed`,"onUpdate:modelValue":a[19]||=e=>J.value.seed=e,type:`number`,min:`0`,max:`65535`,step:`1`,inputmode:`numeric`,onChange:We},null,544),[[C,J.value.seed,void 0,{number:!0}]]),v(`button`,{type:`button`,class:`mini`,onClick:Ge},`换种子`)])]),a[49]||=v(`p`,{class:`label-text`},`显示旋转`,-1),v(`div`,bi,[(u(),d(m,null,n([0,90,180,270],e=>v(`button`,{key:e,type:`button`,"aria-pressed":J.value.displayRotation===e,class:i({active:J.value.displayRotation===e}),onClick:t=>Ue(e)},c(e)+`° `,11,xi)),64))]),a[50]||=v(`p`,{class:`hint`},`换一个种子，只改变细节节奏，不改变对称结构。`,-1)],8,_i),[[p,!we.value||Z.value===`more`]])])]),v(`section`,Si,[v(`div`,Ci,[a[53]||=v(`p`,{class:`eyebrow`},`新作`,-1),a[54]||=v(`h2`,{id:`workbench-title`,class:`workbench-title`},`把这一次的参数带走`,-1),v(`label`,wi,[a[52]||=v(`span`,null,`作品名`,-1),v(`span`,Ti,[_(v(`input`,{id:`work-title`,"onUpdate:modelValue":a[20]||=e=>K.value=e,type:`text`,placeholder:Ze.value,maxlength:24,autocomplete:`off`,onBlur:et},null,40,Ei),[[C,K.value]]),v(`button`,{type:`button`,class:`mini`,onClick:a[21]||=e=>K.value=``},`用自动名`)])]),v(`p`,Di,c($e.value),1),a[55]||=v(`p`,{class:`fineprint`},`作品默认只保存在本机，不会上传到任何服务器。`,-1)]),v(`div`,Oi,[v(`fieldset`,ki,[a[58]||=v(`legend`,{class:`eyebrow`},`导出`,-1),v(`div`,Ai,[a[56]||=v(`span`,{class:`label-text`},`背景`,-1),v(`div`,ji,[(u(),d(m,null,n([`paper`,`ink`,`none`],e=>v(`button`,{key:e,type:`button`,"aria-pressed":At.value===e,class:i({active:At.value===e}),onClick:t=>At.value=e},c(e===`paper`?`纸`:e===`ink`?`墨`:`透明`),11,Mi)),64))])]),v(`div`,Ni,[a[57]||=v(`span`,{class:`label-text`},`PNG 尺寸`,-1),v(`div`,Pi,[(u(),d(m,null,n([`2x`,`4x`],e=>v(`button`,{key:e,type:`button`,"aria-pressed":$.value===e,class:i({active:$.value===e}),onClick:t=>$.value=e},c(e===`2x`?`2× · 2048px`:`4× · 4096px`),11,Fi)),64))])]),v(`p`,Ii,` PNG `+c($.value===`2x`?`2048`:`4096`)+`px · `+c(jt.value)+` · 背景`+c(At.value===`paper`?`纸`:At.value===`ink`?`墨`:`透明`),1),Pt.value?(u(),d(`p`,Li,c(Pt.value),1)):h(``,!0),v(`div`,Ri,[v(`button`,{type:`button`,class:`action`,disabled:Nt.value,onClick:It},` 导出 SVG `,8,zi),v(`button`,{type:`button`,class:`action action--primary`,disabled:Nt.value||Mt.value,onClick:Lt},c(Mt.value?`正在生成…`:`导出 PNG`),9,Bi)])]),v(`div`,Vi,[v(`label`,Hi,[a[59]||=v(`span`,null,`昵称（选填，≤ 20 字）`,-1),_(v(`input`,{id:`nickname`,"onUpdate:modelValue":a[22]||=e=>dt.value=e,type:`text`,maxlength:`20`,autocomplete:`nickname`,onBlur:xt},null,544),[[C,dt.value]])]),v(`div`,Ui,[v(`button`,{type:`button`,class:`action`,onClick:rt},`保存到本机`),v(`button`,{type:`button`,class:`action`,disabled:!r(ot)||ft.value,onClick:Ot},c(ft.value?`发布中…`:`发布到共创墙`),9,Wi),v(`button`,{type:`button`,class:`mini`,onClick:a[23]||=e=>nt.value=!nt.value},` 本机作品（`+c(tt.value.length)+`） `,1)]),v(`p`,{class:i([`hint`,{"hint--warn":r(st)}])},c(r(!0)?`这是静态展示版：作品只保存在本机，现场演示版可发布到共创墙。`:r(st)?`共创墙未连接：当前只能保存到本机。`:`公共作品任何人可见、可复现；本机作品仅自己可见。`),3)])])]),nt.value?(u(),d(`section`,Gi,[a[60]||=v(`div`,{class:`saved-head`},[v(`h2`,{id:`saved-title`,class:`panel-title`},`本机作品`),v(`p`,{class:`eyebrow`},`仅本机可见`)],-1),tt.value.length===0?(u(),d(`p`,Ki,`还没有保存任何作品。`)):(u(),d(`ul`,qi,[(u(!0),d(m,null,n(tt.value,e=>(u(),d(`li`,{key:e.id},[v(`div`,Ji,[ee(R,{pattern:Ce(e.params.patternId),params:e.params},null,8,[`pattern`,`params`])]),v(`div`,Yi,[v(`p`,Xi,c(e.title||e.params.patternId),1),v(`p`,Zi,c(e.params.symmetry)+` · `+c(e.params.repeatX)+`×`+c(e.params.repeatY)+` · `+c(new Date(e.createdAt).toLocaleString()),1)]),v(`div`,Qi,[v(`button`,{type:`button`,class:`mini`,onClick:t=>it(e)},`打开`,8,$i),e.remoteId?(u(),d(`button`,ea,`已上墙`)):(u(),d(`button`,{key:1,type:`button`,class:`mini`,disabled:!r(ot)||ft.value,onClick:t=>kt(e)},` 发布 `,8,ta)),v(`button`,{type:`button`,class:`mini mini--danger`,onClick:t=>at(e.id)},` 删除 `,8,na)])]))),128))]))])):h(``,!0),r(!0)?h(``,!0):(u(),d(`section`,ra,[v(`div`,ia,[a[61]||=v(`div`,null,[v(`p`,{class:`eyebrow`},`公共共创墙`),v(`h2`,{id:`wall-title`,class:`workbench-title`},`别人都在怎么用这套语法`),v(`p`,{class:`hint`},` 服务器作品，任何人可见、可复现；本机作品只在上面“本机作品”里，不会自动上墙。 `)],-1),v(`div`,aa,[r(st)?(u(),d(`span`,oa,`未连接`)):(u(),d(`button`,{key:1,type:`button`,class:`mini`,disabled:ht.value,onClick:a[24]||=e=>Dt(!0)},c(ht.value?`加载中…`:`刷新`),9,sa))])]),v(`div`,ca,[(u(),d(m,null,n(yt,e=>v(`button`,{key:e.id||`all`,type:`button`,class:i([`wall-filter`,{"wall-filter--active":vt.value===e.id}]),"aria-pressed":vt.value===e.id,onClick:t=>Tt(e.id)},c(e.name),11,la)),64))]),r(st)?(u(),d(`p`,ua,[a[62]||=k(` 共创墙未连接。 `,-1),v(`button`,{type:`button`,class:`text-button`,disabled:r(ct),onClick:a[25]||=e=>r(lt)(!0)},c(r(ct)?`重试中…`:`重试连接`),9,da),a[63]||=k(` 生成、导出与分享不受影响。 `,-1)])):_t.value?(u(),d(`p`,fa,c(_t.value),1)):!gt.value&&ht.value?(u(),d(`p`,pa,`正在加载共创墙…`)):pt.value.length===0?(u(),d(`p`,ma,c(vt.value?`这个纹样还没有人发布。换个筛选，或用它成为第一幅。`:`还没有人发布。在上方填写昵称并“发布到共创墙”，成为第一幅。`),1)):(u(),d(`div`,ha,[(u(!0),d(m,null,n(pt.value,e=>(u(),d(`button`,{key:e.item.id,type:`button`,class:`wall-card`,onClick:t=>Q(e)},[v(`div`,{class:`wall-art`,innerHTML:e.svg},null,8,_a),v(`div`,va,[v(`p`,ya,c(e.title),1),v(`p`,ba,[v(`span`,null,c(e.pattern.name),1),v(`span`,null,c(e.item.nickname||`匿名`),1)])])],8,ga))),128))])),mt.value&&r(ot)?(u(),d(`div`,xa,[v(`button`,{type:`button`,class:`action`,disabled:ht.value,onClick:a[26]||=e=>Dt(!1)},c(ht.value?`加载中…`:`加载更多`),9,Sa)])):h(``,!0)])),ee(Sr),v(`div`,Ca,[v(`button`,{type:`button`,class:`dock-btn`,onClick:Ke},`随机`),v(`button`,{type:`button`,class:`dock-btn`,onClick:qe},`恢复`),v(`button`,{type:`button`,class:`dock-btn`,onClick:Je},`分享`),v(`button`,{type:`button`,class:`dock-btn dock-btn--primary`,disabled:Nt.value||Mt.value,onClick:Lt},c(Mt.value?`导出中…`:`导出 PNG`),9,wa)])]))}}),[[`__scopeId`,`data-v-ba9a8045`]]);export{Ea as default};