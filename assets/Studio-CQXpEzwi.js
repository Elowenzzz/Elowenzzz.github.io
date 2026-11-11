import{A as e,C as t,E as n,F as r,I as i,M as a,O as o,P as s,R as c,S as l,T as u,_ as d,a as f,b as ee,c as p,d as m,g as h,i as g,j as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T,v as E,w as D,x as O,y as k}from"./index-C1RIl6VC.js";import{a as A,c as j,i as M,l as N,n as P,o as F,r as I,s as L,t as R,u as te}from"./RubbingPattern-B_OY7jym.js";import{n as z,t as B}from"./patterns-DbhpwIcV.js";import{r as ne,t as re}from"./serverStatus-DE-ms7ij.js";var ie={cross:`十字网格`,diamond:`斜格`,weave:`织纹`};function V(e,t){let n=N(t.palettes,e.paletteId),r=n?j(n,1,e.seed)[0]:void 0,i=r&&n?n.colors.indexOf(r):-1,a=(i>=0?n?.colorNames?.[i]:void 0)??n?.name??`未命名色`;return`${te[e.symmetry]} · ${a} · ${e.repeatX}×${e.repeatY}`}function ae(e,t){let n=N(t.palettes,e.paletteId),r=n?.colorNames&&n.colorNames.length>0?n.colorNames.slice(0,2):[n?.name??`未命名色`],i=ie[t.grid.type];return`以「${t.name}」的${i}单元为起点，采用${te[e.symmetry]}、${e.repeatX} × ${e.repeatY} 重复，配色为「${r.join(` · `)}」。这是一幅基于${t.name}纹样语法的数字再创作，非历史文物复原。`}function oe(e){let t=Array.from(e).filter(e=>{let t=e.codePointAt(0)??0;return t>=32&&t!==127}).join(``);return Array.from(t.trim()).slice(0,24).join(``)}var H=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`,U=new Map([...H].map((e,t)=>[e,t])),se=[`p1`,`pm`,`p2`,`p4`],ce=[`paper`,`ink`,`none`],le=[0,90,180,270];function W(e){let t=``,n=0,r=0;for(let i of e){for(n=n<<8|i,r+=8;r>=6;)r-=6,t+=H[n>>>r&63];n&=(1<<r)-1}return r>0&&(t+=H[n<<6-r&63]),t}function G(e){if(!e||!/^[A-Za-z0-9_-]+$/.test(e))return null;let t=[],n=0,r=0;for(let i of e){let e=U.get(i);if(e===void 0)return null;n=n<<6|e,r+=6,r>=8&&(r-=8,t.push(n>>>r&255)),n&=(1<<r)-1}return Uint8Array.from(t)}function K(e,t,n,r){for(let i=r-1;i>=0;i--){let r=n>>>i&1;e[t>>3]|=r<<7-(t&7),t++}return t}function q(e,t,n){let r=0;for(let i=0;i<n;i++){let n=e[t>>3]>>7-(t&7)&1;r=r<<1|n,t++}return{value:r,offset:t}}function ue(e,t){if(!L.safeParse(e).success)return null;let n=t.findIndex(t=>t.id===e.patternId);if(n<0||n>255)return null;let r=t[n].palettes.findIndex(t=>t.id===e.paletteId);if(r<0||r>255)return null;let i=se.indexOf(e.symmetry),a=ce.indexOf(e.background),o=le.indexOf(e.displayRotation);if(i<0||a<0||o<0)return null;let s=new Uint8Array(8),c=0;return c=K(s,c,1,8),c=K(s,c,n,8),c=K(s,c,i,2),c=K(s,c,e.repeatX-2,3),c=K(s,c,e.repeatY-2,3),c=K(s,c,r,8),c=K(s,c,Math.round(e.scale*100),8),c=K(s,c,a,2),c=K(s,c,e.seed,16),c=K(s,c,o,2),W(s)}function de(e,t){let n=e.trim();if(!n||n.length>1800)return null;let r=G(n);if(!r||r.length!==8)return null;let i=0,a=q(r,i,8);if(i=a.offset,a.value!==1)return null;let o=q(r,i,8);if(i=o.offset,o.value>=t.length)return null;let s=t[o.value];if(!s)return null;let c=q(r,i,2);i=c.offset;let l=q(r,i,3);i=l.offset;let u=q(r,i,3);i=u.offset;let d=q(r,i,8);i=d.offset;let f=q(r,i,8);i=f.offset;let ee=q(r,i,2);i=ee.offset;let p=q(r,i,16);i=p.offset;let m=q(r,i,2),h=se[c.value],g=ce[ee.value],_=le[m.value],v=s.palettes[d.value];if(!h||!g||_===void 0||!v||!s.allowedSymmetries.includes(h))return null;let y={patternId:s.id,symmetry:h,repeatX:l.value+2,repeatY:u.value+2,scale:f.value/100,paletteId:v.id,background:g,seed:p.value,displayRotation:_},b=L.safeParse(y);return b.success?b.data:null}var fe={"2x":2048,"4x":4096};function pe(e,t){let n=String(e.seed).padStart(8,`0`);return`wenmai-${e.patternId}-${e.symmetry}-${e.repeatX}x${e.repeatY}-${n}.${t}`}function me(e){let t=e.trimStart();return t.startsWith(`<?xml`)?e:`<?xml version="1.0" encoding="UTF-8"?>\n${t}`}function he(e){let t=Number(e.match(/<svg[^>]*\swidth="([\d.]+)"/)?.[1]),n=Number(e.match(/<svg[^>]*\sheight="([\d.]+)"/)?.[1]);return{width:Number.isFinite(t)&&t>0?t:600,height:Number.isFinite(n)&&n>0?n:600}}function ge(e){return new Promise((t,n)=>{let r=new Image;r.decoding=`async`,r.onload=()=>t(r),r.onerror=()=>n(Error(`SVG 无法光栅化`)),r.src=e})}async function _e(e,t){let n=me(e),r=URL.createObjectURL(new Blob([n],{type:`image/svg+xml;charset=utf-8`}));try{let e=await ge(r),i=he(n),a=e.naturalWidth||i.width,o=e.naturalHeight||i.height,s=t/Math.max(a,o),c=Math.max(1,Math.round(a*s)),l=Math.max(1,Math.round(o*s)),u=document.createElement(`canvas`);u.width=c,u.height=l;let d=u.getContext(`2d`);if(!d)throw Error(`浏览器不支持 Canvas 2D`);d.imageSmoothingEnabled=!0,d.imageSmoothingQuality=`high`,d.drawImage(e,0,0,c,l);let f=await new Promise(e=>{u.toBlob(e,`image/png`)});if(!f)throw Error(`PNG 生成失败`);return f}finally{URL.revokeObjectURL(r)}}function ve(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.rel=`noopener`,document.body.appendChild(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),1e3)}function ye(e,t){ve(new Blob([me(e)],{type:`image/svg+xml;charset=utf-8`}),t)}async function be(e,t,n){ve(await _e(e,fe[n]),t)}var J=`wenmai.creations.v1`;function xe(e){if(typeof e!=`object`||!e)return!1;let t=e;if(typeof t.id!=`string`||t.id.length===0||typeof t.patternId!=`string`||t.patternId.length===0||t.title!==void 0&&typeof t.title!=`string`||!Number.isFinite(t.createdAt)||t.origin!==`local`||t.nickname!==void 0&&typeof t.nickname!=`string`||t.remoteId!==void 0&&typeof t.remoteId!=`string`)return!1;let n=L.safeParse(t.params);return n.success&&n.data.patternId===t.patternId}function Se(e,t){return e.patternId===t.patternId&&e.symmetry===t.symmetry&&e.repeatX===t.repeatX&&e.repeatY===t.repeatY&&e.scale===t.scale&&e.paletteId===t.paletteId&&e.background===t.background&&e.seed===t.seed&&e.displayRotation===t.displayRotation}function Ce(e,t,n){return e.find(e=>e.origin===`local`&&e.patternId===t.patternId&&e.title===n&&Se(e.params,t))}function Y(e){return Array.isArray(e)?e.filter(xe).sort((e,t)=>t.createdAt-e.createdAt).slice(0,24):[]}function we(e){return JSON.stringify(e.slice(0,24))}function X(){try{return typeof localStorage>`u`?null:localStorage}catch{return null}}function Te(){let e=X();if(!e)return[];try{let t=e.getItem(J);return t?Y(JSON.parse(t)):[]}catch{return[]}}function Z(e){let t=X();if(!t)return!1;try{return t.setItem(J,we(e)),!0}catch{return!1}}function Ee(){return typeof crypto<`u`&&typeof crypto.randomUUID==`function`?crypto.randomUUID():`c-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function De(e,t,n=Date.now()){let r={id:Ee(),patternId:e.patternId,params:{...e},title:oe(t)||`未命名作品`,createdAt:Number.isFinite(n)?n:Date.now(),origin:`local`},i=[r,...Te()].slice(0,24),a=Z(i);return{ok:a,items:a?i:Te(),creation:a?r:void 0}}function Oe(e,t){let n=Te().map(n=>n.id===e?{...n,remoteId:t}:n);return{ok:Z(n),items:n}}function ke(e){let t=Te().filter(t=>t.id!==e);return{ok:Z(t),items:t}}var Ae=``,je=8e3,Me=class extends Error{status;code;issues;constructor(e,t,n,r){super(n),this.name=`ApiError`,this.status=e,this.code=t,this.issues=r}};function Ne(e){return typeof e==`object`&&e&&!Array.isArray(e)?e:null}function Pe(e){let t=Ne(e);if(!t||typeof t.id!=`string`||t.id.length===0||typeof t.patternId!=`string`||t.patternId.length===0||typeof t.createdAt!=`number`||!Number.isFinite(t.createdAt))return null;let n=L.safeParse(t.params);if(!n.success||n.data.patternId!==t.patternId)return null;let r=typeof t.nickname==`string`&&t.nickname.length>0?t.nickname:void 0;return{id:t.id,patternId:t.patternId,params:n.data,...r?{nickname:r}:{},createdAt:t.createdAt,origin:`server`}}function Fe(e){let t=Ne(e);if(!t||!Array.isArray(t.items))throw new Me(200,`malformed`,`共创墙返回格式不正确`);return{items:t.items.map(Pe).filter(e=>e!==null),nextCursor:typeof t.nextCursor==`string`?t.nextCursor:null}}function Ie(e){return typeof AbortSignal<`u`&&`timeout`in AbortSignal?AbortSignal.timeout(e):void 0}async function Le(e,t={},n=je){let r;try{r=await fetch(`${Ae}${e}`,{...t,headers:{accept:`application/json`,...t.headers??{}},signal:t.signal??Ie(n)})}catch{throw new Me(0,`network`,`无法连接共创墙，请检查网络或稍后再试`)}let i=await r.text(),a=null;if(i)try{a=JSON.parse(i)}catch{throw new Me(r.status,`malformed`,`共创墙返回的不是 JSON`)}if(!r.ok){let e=Ne(a),t=typeof e?.error==`string`?e.error:`http_error`,n=typeof e?.message==`string`?e.message:`共创墙请求失败（HTTP ${r.status}）`,i=Array.isArray(e?.issues)?e.issues.filter(e=>typeof e==`string`):void 0;throw new Me(r.status,t,n,i)}return a}async function Re(e={}){let t=new URLSearchParams;e.patternId&&t.set(`patternId`,e.patternId),e.limit&&t.set(`limit`,String(e.limit)),e.cursor&&t.set(`cursor`,e.cursor);let n=t.toString();return Fe(await Le(`/api/creations${n?`?${n}`:``}`,{signal:e.signal}))}async function ze(e,t){let n=Pe(Ne(await Le(`/api/creations`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({patternId:e.patternId,params:e,...t?{nickname:t}:{}})}))?.item);if(!n)throw new Me(200,`malformed`,`服务器返回的作品数据不完整`);return n}function Be(e){let t=e.replace(/<[^>]*>/g,``).replace(/[\u0000-\u001F\u007F]/g,``).replace(/[\u200B-\u200F\u2028-\u202E\u2060\uFEFF]/g,``);return Array.from(t.trim()).slice(0,20).join(``).trim()}function Ve(e){return e instanceof Me?e.status===0||e.status===502||e.status===503||e.status===504||e.status>=500&&e.code===`malformed`:!1}var He=/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i,Ue=/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,We=/^#[0-9a-f]{6}$/;function Ge(e){return Number.isFinite(e)?Math.min(1,Math.max(0,e)):0}function Ke(e){if(!Number.isFinite(e))return 0;let t=e%360;return t<0?t+360:t}function qe(e){if(typeof e!=`string`)return null;let t=e.trim(),n=He.exec(t);if(n)return`#${n[1]}${n[1]}${n[2]}${n[2]}${n[3]}${n[3]}`.toLowerCase();let r=Ue.exec(t);return r?`#${r[1]}${r[2]}${r[3]}`.toLowerCase():null}function Je(e){if(typeof e!=`string`)return null;let t=e.trim().toLowerCase();return We.test(t)?t:null}function Ye(e){let t=Je(e);return t?{r:Number.parseInt(t.slice(1,3),16),g:Number.parseInt(t.slice(3,5),16),b:Number.parseInt(t.slice(5,7),16)}:null}function Xe(e){return Math.min(255,Math.max(0,Math.round(Number.isFinite(e)?e:0)))}function Ze(e,t,n){return`#${[e,t,n].map(e=>Xe(e).toString(16).padStart(2,`0`)).join(``)}`}function Qe(e,t,n){let r=Xe(e)/255,i=Xe(t)/255,a=Xe(n)/255,o=Math.max(r,i,a),s=o-Math.min(r,i,a),c=0;return s>0&&(c=o===r?(i-a)/s%6:o===i?(a-r)/s+2:(r-i)/s+4,c*=60,c<0&&(c+=360)),{h:c,s:o===0?0:s/o,v:o}}function $e(e,t,n){let r=Ke(e),i=Ge(t),a=Ge(n),o=a*i,s=o*(1-Math.abs(r/60%2-1)),c=a-o,l=0,u=0,d=0;return r<60?[l,u,d]=[o,s,0]:r<120?[l,u,d]=[s,o,0]:r<180?[l,u,d]=[0,o,s]:r<240?[l,u,d]=[0,s,o]:r<300?[l,u,d]=[s,0,o]:[l,u,d]=[o,0,s],{r:(l+c)*255,g:(u+c)*255,b:(d+c)*255}}function et(e,t,n){let{r,g:i,b:a}=$e(e,t,n);return Ze(r,i,a)}function tt(e){let t=Ye(e);return t?Qe(t.r,t.g,t.b):null}function nt(e){let t=Ye(e);if(!t)return 0;let n=e=>{let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4};return .2126*n(t.r)+.7152*n(t.g)+.0722*n(t.b)}function rt(e,t=`#2b2925`,n=`#f4edde`){return nt(e)>.42?t:n}var it=8e3,at=[{id:`demo-fold`,name:`折枝（示例）`,caption:`示例底样 · 几何示意，非文物复原`,symmetry:`mirror-x`,brushWidth:.015,colors:[{id:`stone-blue`,name:`石青`,value:`#3F5F6B`},{id:`ochre`,name:`赭石`,value:`#9A6A4A`},{id:`ink`,name:`墨`,value:`#2B2925`},{id:`gamboge`,name:`藤黄`,value:`#B99A5B`}],hint:`从枝干起笔，叶子只画半边，右半边交给对称。`,strokes:[{colorId:`stone-blue`,points:[[.5,.88],[.46,.82],[.4,.75],[.34,.67],[.28,.57],[.23,.47],[.19,.37],[.16,.27],[.15,.18],[.15,.16]]},{colorId:`stone-blue`,points:[[.33,.67],[.27,.65],[.21,.6],[.16,.53],[.19,.49],[.24,.55],[.29,.61],[.33,.64]]},{colorId:`stone-blue`,points:[[.26,.5],[.2,.46],[.15,.39],[.13,.32],[.17,.33],[.21,.39],[.25,.45]]},{colorId:`ochre`,points:[[.2,.3],[.24,.32],[.25,.36],[.22,.4],[.18,.4],[.15,.36],[.15,.32],[.17,.3],[.2,.3]]},{colorId:`gamboge`,points:[[.2,.35]]},{colorId:`gamboge`,points:[[.34,.74]]},{colorId:`gamboge`,points:[[.27,.44]]},{colorId:`gamboge`,points:[[.12,.26]]}]}],ot=[`mirror-x`,`central`,`mirror-xy`],st={"mirror-x":`左右对折`,central:`中心对称`,"mirror-xy":`四方对称`};function ct(e){return e===`mirror-xy`?4:2}function lt(e){return`${st[e]} · ${ct(e)} 份`}function ut(e,t,n,r,i){n!==0&&(t===`mirror-x`?(e.translate(r,0),e.scale(-1,1)):t===`central`?(e.translate(r,i),e.scale(-1,-1)):t===`mirror-xy`&&(n===1?(e.translate(r,0),e.scale(-1,1)):n===2?(e.translate(0,i),e.scale(1,-1)):(e.translate(r,i),e.scale(-1,-1))))}function dt(e,t,n,r,i){let a=ct(t);for(let o=0;o<a;o+=1)e.save(),ut(e,t,o,n,r),i(e),e.restore()}function ft(e,t,n,r){if(t.length===0)return;let[i,a]=t[0];if(t.length===1){e.beginPath(),e.arc(i*n,a*r,Math.max(.5,e.lineWidth/2),0,Math.PI*2),e.fill();return}if(e.beginPath(),e.moveTo(i*n,a*r),t.length===2){let i=t[1];e.lineTo(i[0]*n,i[1]*r),e.stroke();return}for(let i=1;i<t.length-1;i+=1){let a=t[i],o=t[i+1],s=(a[0]+o[0])/2*n,c=(a[1]+o[1])/2*r;e.quadraticCurveTo(a[0]*n,a[1]*r,s,c)}let o=t[t.length-1];e.lineTo(o[0]*n,o[1]*r),e.stroke()}function Q(e,t,n,r,i,a={}){if(r<=0||i<=0)return;let o=Math.min(r,i);e.save(),e.lineCap=`round`,e.lineJoin=`round`,e.globalAlpha=a.alpha??1;for(let a of t)e.lineWidth=Math.max(1,a.width*o),e.strokeStyle=a.color,e.fillStyle=a.color,dt(e,n,r,i,e=>{ft(e,a.points,r,i)});e.restore()}function pt(e,t,n,r,i){if(!(n<=0||r<=0)){if(e.save(),e.strokeStyle=i,e.fillStyle=i,e.lineWidth=1,e.globalAlpha=.55,e.setLineDash([5,5]),(t===`mirror-x`||t===`mirror-xy`)&&(e.beginPath(),e.moveTo(n/2,0),e.lineTo(n/2,r),e.stroke()),t===`mirror-xy`&&(e.beginPath(),e.moveTo(0,r/2),e.lineTo(n,r/2),e.stroke()),t===`central`){e.setLineDash([]);let t=Math.max(5,Math.min(n,r)*.018);e.beginPath(),e.arc(n/2,r/2,t,0,Math.PI*2),e.stroke();let i=Math.max(8,t*1.6);e.beginPath(),e.moveTo(n/2-i,r/2),e.lineTo(n/2+i,r/2),e.moveTo(n/2,r/2-i),e.lineTo(n/2,r/2+i),e.stroke()}e.restore()}}function mt(e){let t=e.colors[0]?.value??`#2a2723`,n=e.brushWidth??.015;return e.strokes.map(r=>({color:e.colors.find(e=>e.id===r.colorId)?.value??t,width:r.width??n,points:r.points}))}function ht(e){return e.map(e=>({color:e.color,width:e.width,points:e.points}))}function gt(e,t,n,r,i,a,o,s=n.symmetry){let c=e.getContext(`2d`);if(!c)return;let{width:l,height:u,dpr:d}=t;l<=0||u<=0||(c.setTransform(d,0,0,d,0,0),c.clearRect(0,0,l,u),c.fillStyle=o.paper,c.fillRect(0,0,l,u),pt(c,s,l,u,o.lineStrong),i&&Q(c,mt(n),s,l,u,{alpha:a}),Q(c,ht(r),s,l,u))}function _t(e,t,n=t.symmetry,r={}){let i=e.getContext(`2d`);if(!i)return;let a=e.width,o=e.height;a<=0||o<=0||(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,a,o),i.fillStyle=r.paper??`#f1ead8`,i.fillRect(0,0,a,o),Q(i,mt(t),n,a,o))}function vt(e,t,n,r){let i=e.getContext(`2d`);if(!i)return;let a=e.width,o=e.height;if(i.setTransform(1,0,0,1,0,0),i.clearRect(0,0,a,o),i.fillStyle=n,i.fillRect(0,0,a,o),t.width>0&&t.height>0){let e=Math.min(a/t.width,o/t.height),n=t.width*e,r=t.height*e;i.drawImage(t,(a-n)/2,(o-r)/2,n,r)}i.strokeStyle=r,i.lineWidth=1,i.strokeRect(.5,.5,a-1,o-1)}function yt(e,t,n){if(e.width!==t.width||e.height!==t.height)throw Error(`评分画布尺寸不一致`);let r=e.width,i=e.height,a=r*i;if(a===0)return{score:0,coverage:0,matchedPixels:0,targetPixels:0};let o=n.alphaThreshold??32,s=Math.max(0,Math.round(n.dilationRadius)),c=s*s,l=typeof n.colorThreshold==`number`&&Number.isFinite(n.colorThreshold),u=l?Math.max(0,n.colorThreshold):0,d=u*u,f=e.data,ee=t.data,p=new Uint8Array(a),m=0;for(let e=0;e<a;e+=1)f[e*4+3]>=o&&(p[e]=1,m+=1);if(m===0)return{score:0,coverage:0,matchedPixels:0,targetPixels:0};let h=new Uint8Array(a),g=0;for(let e=0;e<i;e+=1)for(let t=0;t<r;t+=1){let n=e*r+t;if(ee[n*4+3]<o)continue;let a=ee[n*4],u=ee[n*4+1],m=ee[n*4+2],_=Math.max(0,e-s),v=Math.min(i-1,e+s),y=Math.max(0,t-s),b=Math.min(r-1,t+s);for(let n=_;n<=v;n+=1){let i=n-e,o=n*r;for(let e=y;e<=b;e+=1){let n=e-t;if(n*n+i*i>c)continue;let r=o+e;if(p[r]!==0&&h[r]!==1){if(l){let e=r*4,t=a-f[e],n=u-f[e+1],i=m-f[e+2];if(t*t+n*n+i*i>d)continue}h[r]=1,g+=1}}}}let _=g/m;return{score:Math.round(_*1e3)/10,coverage:_,matchedPixels:g,targetPixels:m}}function bt(e,t,n){let r=e.createElement(`canvas`);return r.width=Math.max(1,Math.round(t)),r.height=Math.max(1,Math.round(n)),r}function xt(e){let t=e.getContext(`2d`,{willReadFrequently:!0});if(!t)throw Error(`当前浏览器不支持 2D Canvas`);return t}function St(e,t,n,r){let i=bt(e,n,r),a=xt(i);a.clearRect(0,0,i.width,i.height);let o=t.colors[0]?.value??`#2a2723`,s=t.brushWidth??.015;return Q(a,t.strokes.map(e=>({color:t.colors.find(t=>t.id===e.colorId)?.value??o,width:e.width??s,points:e.points})),t.symmetry,i.width,i.height),i}function Ct(e,t,n,r,i){let a=bt(e,r,i),o=xt(a);return o.clearRect(0,0,a.width,a.height),Q(o,t,n,a.width,a.height),a}function wt(e){return xt(e).getImageData(0,0,e.width,e.height)}function Tt(e){e&&(e.width=0,e.height=0)}var Et=String.raw`
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
`,Dt=`
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
`;function Ot(e,t){let n=e.querySelector(t);if(!n)throw Error(`[symmetry-draw] 缺少内部元素：${t}`);return n}function $(e,t){return Ot(e,`[data-role="${t}"]`)}function kt(e,t){let n=t.createElement(`style`);n.textContent=Et,e.appendChild(n);let r=t.createElement(`div`);return r.innerHTML=Dt,e.appendChild(r),{doc:t,root:Ot(r,`.sd`),stage:$(r,`stage`),canvas:$(r,`canvas`),levels:$(r,`levels`),levelCount:$(r,`level-count`),swatches:$(r,`swatches`),custom:Ot(r,`[data-action="custom-color"]`),customDot:$(r,`custom-dot`),palette:$(r,`palette`),sv:$(r,`sv`),hue:$(r,`hue`),hex:$(r,`hex`),recent:$(r,`recent`),guide:$(r,`guide`),undo:Ot(r,`[data-action="undo"]`),clear:Ot(r,`[data-action="clear"]`),submit:Ot(r,`[data-action="submit"]`),next:Ot(r,`[data-action="next"]`),status:$(r,`status`),mode:$(r,`mode`),caption:$(r,`caption`),hint:$(r,`hint`),result:$(r,`result`),score:$(r,`score`),sub:$(r,`sub`),comment:$(r,`comment`),thumbExample:$(r,`thumb-example`),thumbUser:$(r,`thumb-user`)}}var At={paper:`#f4edde`,paperDeep:`#ece2cf`,ink:`#2a2723`,muted:`#6f665a`,line:`rgba(42, 39, 35, 0.16)`,lineStrong:`rgba(42, 39, 35, 0.34)`,accent:`#9a6a4a`};function jt(e,t={}){let n=e.ownerDocument.defaultView?.getComputedStyle(e),r=e=>n?.getPropertyValue(e).trim()??``;return{paper:t.paper??(r(`--paper`)||At.paper),paperDeep:t.paperDeep??At.paperDeep,ink:t.ink??(r(`--ink`)||At.ink),muted:t.muted??(r(`--muted`)||At.muted),line:t.line??At.line,lineStrong:t.lineStrong??At.lineStrong,accent:t.accent??At.accent}}function Mt(e,t,n){let r=e.style;r.setProperty(`--sd-paper`,t.paper),r.setProperty(`--sd-paper-deep`,t.paperDeep),r.setProperty(`--sd-ink`,t.ink),r.setProperty(`--sd-muted`,t.muted),r.setProperty(`--sd-line`,t.line),r.setProperty(`--sd-line-strong`,t.lineStrong),r.setProperty(`--sd-accent`,t.accent),r.setProperty(`--sd-aspect`,String(n))}function Nt(e,t,n){let r=e.doc.createDocumentFragment(),i=0;t.forEach((t,a)=>{let o=t.source===`visitor`;o&&(i+=1);let s=e.doc.createElement(`button`);s.type=`button`,s.className=o?`sd-level sd-level--visitor`:`sd-level`,s.dataset.level=String(a),o&&(s.dataset.source=`visitor`),s.setAttribute(`aria-pressed`,String(a===n)),s.setAttribute(`aria-label`,`底样 ${a+1}：${t.name}，${lt(t.symmetry)}`+(o&&t.author?`，由 ${t.author} 留下`:``));let c=e.doc.createElement(`span`);c.className=`sd-level-index`,c.textContent=String(a+1).padStart(2,`0`);let l=e.doc.createElement(`span`);if(l.className=`sd-level-name`,l.textContent=t.name,s.append(c,l),o){let n=e.doc.createElement(`span`);n.className=`sd-level-author`,n.textContent=t.author?`· ${t.author}`:`· 游客`,s.append(n)}r.append(s)}),e.levels.replaceChildren(r),e.levelCount.textContent=`${t.length} 张底样 · ${i} 张来自游客`}function Pt(e,t){for(let n of e.levels.querySelectorAll(`[data-level]`))n.setAttribute(`aria-pressed`,String(Number(n.dataset.level)===t))}function Ft(e,t,n){let r=e.doc.createDocumentFragment();t.forEach(t=>{let i=e.doc.createElement(`button`);i.type=`button`,i.className=`sd-swatch`,i.dataset.color=t.id,i.style.backgroundColor=t.value,i.title=t.name,i.setAttribute(`aria-label`,`使用${t.name}`),i.setAttribute(`aria-pressed`,String(t.id===n)),r.append(i)}),e.swatches.replaceChildren(r)}function It(e,t,n,r){for(let n of e.swatches.querySelectorAll(`[data-color]`))n.setAttribute(`aria-pressed`,String(!r&&n.dataset.color===t));e.custom.setAttribute(`aria-pressed`,String(r)),e.customDot.style.backgroundColor=n,e.customDot.style.borderColor=rt(n)}function Lt(e,t){for(let n of e.root.querySelectorAll(`[data-symmetry]`))n.setAttribute(`aria-pressed`,String(n.dataset.symmetry===t))}function Rt(e,t,n){e.mode.textContent=`${lt(n)}`,e.caption.textContent=t.caption??``,e.caption.hidden=!t.caption,e.hint.textContent=t.hint??``,e.hint.hidden=!t.hint,e.canvas.setAttribute(`aria-label`,`对称绘制画布：${t.name}，${lt(n)}。按住拖动绘制，笔迹会自动对称复制。`)}function zt(e,t){e.undo.disabled=!t.canUndo,e.clear.disabled=!t.canUndo,e.submit.disabled=!t.canSubmit;for(let n of e.root.querySelectorAll(`[data-action="keep"]`))n.disabled=!t.canKeep}function Bt(e,t){e.status.textContent=t}function Vt(e){return e>=95?`几乎与底样重合，线条稳得住。`:e>=85?`大形已经对上，转折处再贴一点。`:e>=70?`骨架没错，笔迹再靠近底样一些。`:e>=50?`看出了走向，位置和笔触还差一层。`:`先沿淡线慢描，对称会替你补齐另一半。`}function Ht(e,t){for(let n of Array.from(e.root.children))n!==e.result&&(t?n.setAttribute(`inert`,``):n.removeAttribute(`inert`))}function Ut(e,t,n,r,i,a){e.score.textContent=t.score.toFixed(1),e.sub.textContent=`覆盖率 ${(t.coverage*100).toFixed(1)}%（${a}px 容差）`,e.comment.textContent=Vt(t.score),vt(e.thumbExample,n,i.paper,i.lineStrong),vt(e.thumbUser,r,i.paper,i.lineStrong),e.result.hidden=!1,Ht(e,!0),e.result.focus({preventScroll:!0})}function Wt(e){e.result.hidden=!0,Ht(e,!1)}function Gt(e,t){e.palette.hidden=!t,e.custom.setAttribute(`aria-expanded`,String(t))}function Kt(e,t,n,r){let{sv:i}=e,a=i.getContext(`2d`);if(!a)return;let o=i.width,s=i.height,c=et(t,1,1);a.setTransform(1,0,0,1,0,0),a.fillStyle=c,a.fillRect(0,0,o,s);let l=a.createLinearGradient(0,0,o,0);l.addColorStop(0,`rgba(255, 255, 255, 1)`),l.addColorStop(1,`rgba(255, 255, 255, 0)`),a.fillStyle=l,a.fillRect(0,0,o,s);let u=a.createLinearGradient(0,0,0,s);u.addColorStop(0,`rgba(0, 0, 0, 0)`),u.addColorStop(1,`rgba(0, 0, 0, 1)`),a.fillStyle=u,a.fillRect(0,0,o,s);let d=Math.min(o,Math.max(0,n*o)),f=Math.min(s,Math.max(0,(1-r)*s));a.lineWidth=2,a.strokeStyle=rt(et(t,n,r)),a.beginPath(),a.arc(d,f,7,0,Math.PI*2),a.stroke(),a.strokeStyle=`rgba(255, 255, 255, 0.55)`,a.lineWidth=1,a.beginPath(),a.arc(d,f,9,0,Math.PI*2),a.stroke()}function qt(e,t){e.hue.value=String(Math.round(t)%360)}function Jt(e,t){e.doc.activeElement!==e.hex&&(e.hex.value=t)}function Yt(e,t){let n=e.doc.createDocumentFragment();t.forEach(t=>{let r=qe(t);if(!r)return;let i=e.doc.createElement(`button`);i.type=`button`,i.className=`sd-recent-chip`,i.dataset.recent=r,i.style.backgroundColor=r,i.title=r,i.setAttribute(`aria-label`,`使用最近颜色 ${r}`),n.append(i)}),e.recent.replaceChildren(n)}var Xt=1,Zt=3,Qt=.22,$t=2.2,en=8;function tn(e,t,n,r){return typeof e!=`number`||!Number.isFinite(e)?t:Math.min(r,Math.max(n,e))}function nn(e){return!!(e&&typeof e.id==`string`&&e.id.length>0&&Array.isArray(e.colors)&&e.colors.length>0&&Array.isArray(e.strokes)&&e.strokes.length>0&&ot.includes(e.symmetry))}function rn(e){return Number(e.toFixed(4))}function an({host:e,shadow:t,options:n}){let r=e.ownerDocument,i=r.defaultView;if(!i)throw Error(`[symmetry-draw] 找不到 window 环境`);let a=i,o=tn(n.aspectRatio,Xt,.5,3),s=tn(n.maxDpr,Zt,1,4),c=Math.round(tn(n.scoreSize,512,256,1024)),l=Math.round(tn(n.dilationRadius,2,0,8)),u=tn(n.guideOpacity,Qt,.04,.6),d=typeof n.colorThreshold==`number`&&Number.isFinite(n.colorThreshold)?tn(n.colorThreshold,0,0,255):void 0,f=jt(e,n.theme),ee=(n.levels??[]).filter(nn),p=ee.length>0?ee:at,m=p.findIndex(e=>e.id===n.initialLevelId),h=m>=0?m:0,g=n.guideVisible!==!1,_=null,v=kt(t,r);Mt(e,f,o);let y=``,b=`#2a2723`,x=!1,S=0,C=0,w=0,T=[],E=!1,D=null,O=[],k=null,A=null,j=0,M=null,N=0,P=0,F=!1,I=new AbortController;function L(){let e=p[h];if(!e)throw Error(`[symmetry-draw] 关卡索引越界`);return e}function R(){return _??L().symmetry}function te(){if(x)return{id:null,value:b,name:b};let e=L(),t=e.colors.find(e=>e.id===y)??e.colors[0];return{id:t?.id??null,value:t?.value??`#2a2723`,name:t?.name??`墨`}}function z(){zt(v,{canUndo:O.length>0,canSubmit:O.length>0,canKeep:O.length>0})}function B(){It(v,y,te().value,x),Yt(v,T)}function ne(e){let t=qe(e)??`#2a2723`,n=tt(t)??{h:0,s:0,v:0};S=n.h,C=n.s,w=n.v,b=t,Kt(v,S,C,w),qt(v,S),Jt(v,t)}function re(e){let t=qe(e);t&&(T=[t,...T.filter(e=>e!==t)].slice(0,en),Yt(v,T))}function ie(e){let t=qe(e);if(!t)return;let n=tt(t);n&&(S=n.h,C=n.s,w=n.v,b=t,x=!0,B(),Kt(v,S,C,w),qt(v,S),Jt(v,t))}function V(e,t,n){S=Ke(e),C=Ge(t),w=Ge(n),b=et(S,C,w),x=!0,B(),Kt(v,S,C,w),qt(v,S),Jt(v,b)}function ae(e){let t=qe(e);return t?(ie(t),v.hex.value=t,re(t),!0):(W(`HEX 颜色应为 #RRGGBB 或 #RGB。`),!1)}function oe(e){let t=e.colors[0];y=t?.id??``,x=!1,ne(t?.value??`#2a2723`),Ft(v,e.colors,y),B()}function H(){E=!1,Gt(v,!1)}function U(){F||N!==0||(N=a.requestAnimationFrame(()=>{N=0,F||se()}))}function se(){!F&&M&&gt(v.canvas,M,L(),O,g,u,f,R())}function ce(){if(F)return;let e=v.stage.getBoundingClientRect(),t=Math.max(1,e.width),n=Math.max(1,e.height),r=Math.min(Math.max(1,a.devicePixelRatio||1),s),i=Math.max(1,Math.round(t*r)),o=Math.max(1,Math.round(n*r)),c=M===null||M.width!==t||M.height!==n||M.dpr!==r||v.canvas.width!==i||v.canvas.height!==o;M={width:t,height:n,dpr:r},v.canvas.width!==i&&(v.canvas.width=i),v.canvas.height!==o&&(v.canvas.height=o),c&&U()}function le(){P!==0&&(a.clearTimeout(P),P=0),Bt(v,``)}function W(e){le(),Bt(v,e),P=a.setTimeout(()=>{P=0,F||Bt(v,``)},2800)}function G(e){let t=v.canvas.getBoundingClientRect();return t.width<=0||t.height<=0?null:[Ge((e.clientX-t.left)/t.width),Ge((e.clientY-t.top)/t.height)]}function K(e){if(F||A!==null||!e.isPrimary||e.pointerType===`mouse`&&e.button!==0||!v.result.hidden)return;if(O.length>=600){W(`最多 600 笔，可先撤销或清空。`);return}if(j>=8e3){W(`笔迹已到 ${it} 点上限，可先留作底样。`);return}let t=G(e);if(!t)return;e.preventDefault(),A=e.pointerId;let n=L();k={color:te().value,width:n.brushWidth??.015,points:[t]},O.push(k),j+=1;try{v.canvas.setPointerCapture(e.pointerId)}catch{}le(),z(),U()}function q(e){if(e.pointerId!==A||!k)return;let t=G(e);if(!t||(e.cancelable&&e.preventDefault(),j>=8e3)||k.points.length>=8e3)return;let n=k.points,r=n[n.length-1],i=Math.min(M?.width??1,M?.height??1),a=i>0?$t/i:0;Math.hypot(t[0]-r[0],t[1]-r[1])<a||(n.push(t),j+=1,U())}function ue(e){if(A===null||e!==void 0&&e!==A)return;let t=A;A=null,k=null;try{v.canvas.hasPointerCapture(t)&&v.canvas.releasePointerCapture(t)}catch{}z(),U()}function de(e){ue(e.pointerId)}function fe(e){ue(e.pointerId)}function pe(e){e.preventDefault()}function me(e,t){let n=t.getBoundingClientRect();if(n.width<=0||n.height<=0)return;let r=Ge((e.clientX-n.left)/n.width),i=Ge((e.clientY-n.top)/n.height);V(S,r,1-i)}function he(e){let t=e.target;if(!t||typeof t.closest!=`function`)return;let n=t.closest(`[data-role="sv"]`);if(n&&D===null&&e.isPrimary){e.preventDefault(),D=e.pointerId;try{n.setPointerCapture(e.pointerId)}catch{}me(e,n)}}function ge(e){if(D===null||e.pointerId!==D)return;let n=t.querySelector(`[data-role="sv"]`);n&&(e.cancelable&&e.preventDefault(),me(e,n))}function _e(e){if(D===null||e.pointerId!==D)return;let n=D;D=null;let r=t.querySelector(`[data-role="sv"]`);try{r?.hasPointerCapture(n)&&r.releasePointerCapture(n)}catch{}re(b)}function ve(e){if(F||e!==null&&!ot.includes(e))return;let t=L();_=e===null||e===t.symmetry?null:e,Wt(v),Lt(v,R()),Rt(v,t,R()),U()}function ye(e){if(F||!Number.isInteger(e)||e<0||e>=p.length||e===h)return;A!==null&&ue();let t=!v.result.hidden;h=e;let r=L();_=null,O=[],k=null,j=0,Wt(v),H(),le(),Pt(v,h),oe(r),Lt(v,R()),Rt(v,r,R()),v.guide.checked=g,z(),U(),t&&v.canvas.focus({preventScroll:!0});try{n.onLevelChange?.(r,h)}catch{}}function be(e){let t=p.findIndex(t=>t.id===e);t>=0&&ye(t)}function J(e){let t=e.filter(nn);if(t.length===0)return;let n=L().id;p=t;let r=t.findIndex(e=>e.id===n);if(h=r>=0?r:0,Nt(v,p,h),v.next.hidden=p.length<2,r<0){let e=L();O=[],k=null,j=0,_=null,oe(e),z(),U()}else Lt(v,R());Rt(v,L(),R())}function xe(e,t={}){if(F||!nn(e))return;let n=p.findIndex(t=>t.id===e.id);n>=0?t.select!==!1&&ye(n):(J([...p,e]),t.select!==!1&&ye(p.length-1))}function Se(e){let t=L().colors.find(t=>t.id===e);t&&(x=!1,y=e,ne(t.value),B())}function Ce(e){let t=qe(e);t&&(ie(t),re(t))}function Y(){if(F||O.length===0)return;let e=O.pop();j=Math.max(0,j-(e?.points.length??0)),k=null,Wt(v),le(),z(),U()}function we(){F||(A!==null&&ue(),O=[],k=null,j=0,Wt(v),le(),z(),U())}function X(){we(),v.canvas.focus({preventScroll:!0}),W(`已清空，重新落笔。`)}function Te(){Wt(v),v.submit.focus({preventScroll:!0})}function Z(){if(F)return;A!==null&&ue();let e=L();if(O.length===0){W(`先画几笔，再提交评分。`),v.canvas.focus({preventScroll:!0});return}let t=c,i=Math.max(1,Math.round(t/o)),a=R(),s=null,u=null;try{s=St(r,{...e,symmetry:a},t,i),u=Ct(r,O,a,t,i);let o=yt(wt(s),wt(u),{...d===void 0?{}:{colorThreshold:d},dilationRadius:l}),c={levelId:e.id,...o};Ut(v,c,s,u,f,l),le(),z();try{n.onScore?.(c)}catch{}}catch{W(`评分失败，请重试或换一张底样。`)}finally{Tt(s),Tt(u)}}function Ee(){return O.length===0?null:{symmetry:R(),strokes:O.map(e=>({color:e.color,width:Number(e.width.toFixed(4)),points:e.points.map(e=>[rn(e[0]),rn(e[1])])}))}}function De(){if(F)return;if(A!==null&&ue(),O.length===0){W(`先画几笔，再留作底样。`),v.canvas.focus({preventScroll:!0});return}let e=Ee();if(e){if(!n.onKeep)W(`当前页面未开启“留作底样”。`);else try{n.onKeep(e),W(`已把这一笔交给下一位，填写名字即可完成。`)}catch{W(`留作底样失败，请重试。`)}}}function Oe(e){switch(e){case`undo`:Y();break;case`clear`:we();break;case`submit`:Z();break;case`keep`:De();break;case`retry`:X();break;case`next`:ye((h+1)%p.length);break;case`close`:Te();break;case`custom-color`:E=!E,E?(ne(te().value),Gt(v,!0)):Gt(v,!1);break;case`palette-close`:H(),v.custom.focus({preventScroll:!0});break;case`apply-hex`:ae(v.hex.value)}}function ke(e){let t=e.target;if(!t||typeof t.closest!=`function`)return;let n=t.closest(`[data-action]`);if(n){Oe(n.dataset.action??``);return}let r=t.closest(`[data-symmetry]`);if(r){ve(r.dataset.symmetry??null);return}let i=t.closest(`[data-level]`);if(i){ye(Number(i.dataset.level));return}let a=t.closest(`[data-color]`);if(a){let e=a.dataset.color;e&&Se(e);return}let o=t.closest(`[data-recent]`);if(o){let e=o.dataset.recent;e&&Ce(e)}}function Ae(e){let t=e.target;t&&typeof t.matches==`function`&&t.matches(`[data-role="hue"]`)&&V(Number(t.value),C,w)}function je(e){let t=e.target;t&&typeof t.matches==`function`&&(t.matches(`[data-role="guide"]`)?(g=t.checked,U()):t.matches(`[data-role="hex"]`)?ae(t.value):t.matches(`[data-role="hue"]`)&&re(b))}function Me(e){let t=e,n=e.target;t.key===`Enter`&&n?.matches?.(`[data-role="hex"]`)?(t.preventDefault(),ae(n.value)):t.key===`Escape`&&(v.result.hidden?E&&(t.preventDefault(),H(),v.custom.focus({preventScroll:!0})):(t.preventDefault(),Te()))}function Ne(){if(!F){if(F=!0,I.abort(),Pe.disconnect(),N!==0&&(a.cancelAnimationFrame(N),N=0),P!==0&&(a.clearTimeout(P),P=0),A!==null){let e=A;A=null;try{v.canvas.hasPointerCapture(e)&&v.canvas.releasePointerCapture(e)}catch{}}if(D!==null){let e=D;D=null;try{v.sv.hasPointerCapture(e)&&v.sv.releasePointerCapture(e)}catch{}}k=null,O=[],j=0,T=[],Wt(v),M=null,v.canvas.width=0,v.canvas.height=0,e.remove()}}v.canvas.addEventListener(`pointerdown`,K,{signal:I.signal}),v.canvas.addEventListener(`pointermove`,q,{signal:I.signal}),v.canvas.addEventListener(`pointerup`,de,{signal:I.signal}),v.canvas.addEventListener(`pointercancel`,de,{signal:I.signal}),v.canvas.addEventListener(`lostpointercapture`,fe,{signal:I.signal}),v.canvas.addEventListener(`contextmenu`,pe,{signal:I.signal}),t.addEventListener(`click`,ke,{signal:I.signal}),t.addEventListener(`input`,Ae,{signal:I.signal}),t.addEventListener(`change`,je,{signal:I.signal}),t.addEventListener(`keydown`,Me,{signal:I.signal}),t.addEventListener(`pointerdown`,e=>he(e),{signal:I.signal}),t.addEventListener(`pointermove`,e=>ge(e),{signal:I.signal}),t.addEventListener(`pointerup`,e=>_e(e),{signal:I.signal}),t.addEventListener(`pointercancel`,e=>_e(e),{signal:I.signal});let Pe=new ResizeObserver(()=>ce());Pe.observe(v.stage);let Fe=L();return Nt(v,p,h),oe(Fe),Lt(v,R()),Rt(v,Fe,R()),v.next.hidden=p.length<2,v.guide.checked=g,z(),ce(),{destroy:Ne,setLevel:be,reset:we,submit:Z,getDraft:Ee,setLevels:J,addLevel:xe,setSymmetry:ve}}var on=new WeakMap;function sn(e,t={}){let n=e?.ownerDocument,r=n?.defaultView;if(!e||!n||!r||!(e instanceof r.HTMLElement))throw TypeError(`[symmetry-draw] mount(container, options) 需要一个 HTMLElement 容器`);on.get(e)?.destroy();let i=n.createElement(`div`);i.className=`sd-host`,i.setAttribute(`data-symmetry-draw-host`,``);let a=i.attachShadow({mode:`open`});e.appendChild(i);let o;try{o=an({host:i,shadow:a,options:t})}catch(e){throw i.remove(),e}let s={destroy(){on.delete(e),o.destroy()},setLevel(e){o.setLevel(e)},reset(){o.reset()},submit(){o.submit()},getDraft(){return o.getDraft()},setLevels(e){o.setLevels(e)},addLevel(e,t){o.addLevel(e,t)},setSymmetry(e){o.setSymmetry(e)}};return on.set(e,s),s}var cn=[{id:`stone-blue`,name:`石青`,value:`#3F5F6B`},{id:`ochre`,name:`赭石`,value:`#9A6A4A`},{id:`ink`,name:`墨`,value:`#2B2925`},{id:`gamboge`,name:`藤黄`,value:`#B99A5B`}],ln=`示例底样 · 几何示意，非文物复原`;function un(e,t,n,r=28){let i=[];for(let a=0;a<=r;a+=1){let o=a/r*Math.PI*2;i.push([e+Math.cos(o)*n,t+Math.sin(o)*n])}return i}var dn=[{id:`branch-fold`,name:`折枝`,caption:ln,symmetry:`mirror-x`,brushWidth:.015,hint:`从枝干起笔，叶子只画半边，右半边交给对称。`,colors:cn,strokes:[{colorId:`stone-blue`,points:[[.5,.88],[.46,.82],[.4,.75],[.34,.67],[.28,.57],[.23,.47],[.19,.37],[.16,.27],[.15,.18],[.15,.16]]},{colorId:`stone-blue`,points:[[.33,.67],[.27,.65],[.21,.6],[.16,.53],[.19,.49],[.24,.55],[.29,.61],[.33,.64]]},{colorId:`stone-blue`,points:[[.26,.5],[.2,.46],[.15,.39],[.13,.32],[.17,.33],[.21,.39],[.25,.45]]},{colorId:`stone-blue`,points:[[.15,.22],[.12,.18],[.13,.13],[.16,.12],[.17,.16],[.16,.2]]},{colorId:`ochre`,points:[[.2,.3],[.24,.32],[.25,.36],[.22,.4],[.18,.4],[.15,.36],[.15,.32],[.17,.3],[.2,.3]]},{colorId:`gamboge`,points:[[.2,.35]]},{colorId:`gamboge`,points:[[.34,.74]]},{colorId:`gamboge`,points:[[.27,.44]]},{colorId:`gamboge`,points:[[.12,.26]]}]},{id:`round-flower`,name:`团花`,caption:ln,symmetry:`central`,brushWidth:.014,hint:`围绕中心点画一片花瓣，对角的一半会自动出现。`,colors:cn,strokes:[{colorId:`stone-blue`,points:[[.5,.5],[.455,.44],[.43,.36],[.43,.27],[.46,.19],[.5,.14],[.54,.19],[.57,.27],[.57,.36],[.545,.44],[.5,.5]]},{colorId:`stone-blue`,points:[[.5,.5],[.56,.455],[.64,.43],[.73,.43],[.81,.46],[.86,.5],[.81,.54],[.73,.57],[.64,.57],[.56,.545],[.5,.5]]},{colorId:`ochre`,points:[[.5,.5],[.475,.45],[.465,.39],[.475,.33],[.5,.3],[.525,.33],[.535,.39],[.525,.45],[.5,.5]]},{colorId:`ochre`,points:[[.5,.5],[.55,.475],[.61,.465],[.67,.475],[.7,.5],[.67,.525],[.61,.535],[.55,.525],[.5,.5]]},{colorId:`ochre`,points:un(.5,.5,.06)},{colorId:`gamboge`,points:[[.5,.5]]},{colorId:`gamboge`,points:[[.5,.16]]},{colorId:`gamboge`,points:[[.84,.5]]}]},{id:`square-medallion`,name:`方胜`,caption:ln,symmetry:`mirror-xy`,brushWidth:.014,hint:`只画左上角，横竖两轴会把四方补齐。`,colors:cn,strokes:[{colorId:`stone-blue`,points:[[.5,.09],[.43,.11],[.35,.16],[.28,.23],[.22,.31],[.17,.4],[.14,.5]]},{colorId:`ochre`,points:[[.5,.21],[.44,.23],[.38,.28],[.33,.34],[.28,.41],[.25,.5]]},{colorId:`stone-blue`,points:[[.12,.12],[.18,.08],[.24,.12],[.18,.16],[.12,.12]]},{colorId:`ochre`,points:[[.3,.3],[.35,.25],[.4,.22],[.45,.18]]},{colorId:`gamboge`,points:[[.18,.18]]},{colorId:`gamboge`,points:[[.36,.12]]},{colorId:`gamboge`,points:[[.12,.36]]}]}],fn=`wenmai.drawings.v1`,pn=12,mn=[`mirror-x`,`central`,`mirror-xy`];function hn(e){return typeof e==`string`&&mn.includes(e)}function gn(e){return typeof e==`object`&&e&&!Array.isArray(e)?e:null}function _n(e,t=4){let n=10**t;return Math.round(e*n)/n}function vn(e){if(typeof e!=`string`||e.length===0)return`未名底样`;let t=e.replace(/<[^>]*>/g,``).replace(/[\u0000-\u001F\u007F]/g,``).replace(/[\u200B-\u200F\u2028-\u202E\u2060\uFEFF]/g,``).trim();return Array.from(t).slice(0,20).join(``).trim()||`未名底样`}function yn(e){if(!Array.isArray(e)||e.length<1||e.length>8e3)return null;let t=[];for(let n of e){if(!Array.isArray(n)||n.length!==2)return null;let[e,r]=n;if(typeof e!=`number`||!Number.isFinite(e)||e<0||e>1||typeof r!=`number`||!Number.isFinite(r)||r<0||r>1)return null;t.push([_n(e),_n(r)])}return t}function bn(e){let t=gn(e);if(!t)return null;let n=Je(t.color);if(!n)return null;let r=t.width;if(typeof r!=`number`||!Number.isFinite(r)||r<.002||r>.08)return null;let i=yn(t.points);return i?{color:n,width:_n(r),points:i}:null}function xn(e){return e.reduce((e,t)=>e+t.points.length,0)}function Sn(e){if(!Array.isArray(e)||e.length<1||e.length>600)return null;let t=[];for(let n of e){let e=bn(n);if(!e)return null;t.push(e)}return xn(t)>8e3?null:t}function Cn(e){let t=gn(e);if(!t||typeof t.id!=`string`||t.id.length===0||typeof t.name!=`string`||!hn(t.symmetry)||typeof t.createdAt!=`number`||!Number.isFinite(t.createdAt))return null;let n=Sn(t.strokes);if(!n)return null;let r=typeof t.nickname==`string`&&t.nickname.length>0?Be(t.nickname):void 0;return{id:t.id,name:vn(t.name),symmetry:t.symmetry,strokes:n,...r?{nickname:r}:{},createdAt:t.createdAt,origin:t.origin===`local`?`local`:`server`}}function wn(e){let t=gn(e);if(!t||!Array.isArray(t.items))throw new Me(200,`malformed`,`底样库返回格式不正确`);return{items:t.items.map(Cn).filter(e=>e!==null),nextCursor:typeof t.nextCursor==`string`?t.nextCursor:null}}async function Tn(e={}){let t=new URLSearchParams;e.limit&&t.set(`limit`,String(e.limit)),e.cursor&&t.set(`cursor`,e.cursor);let n=t.toString();return wn(await Le(`/api/drawings${n?`?${n}`:``}`,{signal:e.signal}))}async function En(e){let t=Cn(gn(await Le(`/api/drawings`,{method:`POST`,headers:{"content-type":`application/json`},body:JSON.stringify({name:e.name,symmetry:e.symmetry,strokes:e.strokes,...e.nickname?{nickname:e.nickname}:{}})}))?.item);if(!t)throw new Me(200,`malformed`,`服务器返回的底样数据不完整`);return t}function Dn(){try{return typeof localStorage>`u`?null:localStorage}catch{return null}}function On(){return typeof crypto<`u`&&typeof crypto.randomUUID==`function`?`local-${crypto.randomUUID()}`:`local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function kn(e){return Array.isArray(e)?e.map(Cn).filter(e=>e!==null&&e.origin===`local`).sort((e,t)=>t.createdAt-e.createdAt).slice(0,12):[]}function An(){let e=Dn();if(!e)return[];try{let t=e.getItem(fn);return t?kn(JSON.parse(t)):[]}catch{return[]}}function jn(e){let t=Dn();if(!t)return!1;try{return t.setItem(fn,JSON.stringify(e.slice(0,12))),!0}catch{return!1}}function Mn(e,t=Date.now()){let n=Sn(e.strokes);if(!n||!hn(e.symmetry))return{ok:!1,items:An()};let r=e.nickname?Be(e.nickname):``,i={id:On(),name:vn(e.name),symmetry:e.symmetry,strokes:n,...r?{nickname:r}:{},createdAt:Number.isFinite(t)?t:Date.now(),origin:`local`},a=[i,...An()].slice(0,12),o=jn(a);return{ok:o,items:o?a:An(),drawing:o?i:void 0}}function Nn(e){let t=An().filter(t=>t.id!==e);return{ok:jn(t),items:t}}function Pn(e,t){let n=Ye(e);if(!n||t.length===0)return t[0]??`#2a2723`;let r=t[0],i=1/0;for(let e of t){let t=Ye(e);if(!t)continue;let a=(n.r-t.r)**2+(n.g-t.g)**2+(n.b-t.b)**2;a<i&&(i=a,r=e)}return r}function Fn(e){let t=[];for(let n of e)t.includes(n.color)||t.push(n.color);let n=t.slice(0,pn),r=n.map((e,t)=>({id:`c${t}`,name:e,value:e})),i=new Map;return t.forEach(e=>{let t=n.includes(e)?e:Pn(e,n),a=n.indexOf(t);i.set(e,r[a]?.id??r[0]?.id??`c0`)}),{colors:r,colorIdOf:i}}function In(e){let{colors:t,colorIdOf:n}=Fn(e.strokes),r=t.length>0?t:[{id:`c0`,name:`#2a2723`,value:`#2a2723`}],i=e.strokes.map(e=>({colorId:n.get(e.color)??r[0].id,width:e.width,points:e.points.map(([e,t])=>[e,t])}));return{id:`visitor-${e.id}`,name:e.name,caption:e.nickname?`游客底样 · 由 ${e.nickname} 留下`:`游客底样 · 匿名留下`,symmetry:e.symmetry,colors:r,strokes:i,source:`visitor`,author:e.nickname||`匿名`,createdAt:e.createdAt,hint:`沿淡线描画；对称会替你补齐另一份。`}}function Ln(e,t,n){let r=Sn(e.strokes.map(e=>({color:e.color,width:e.width,points:e.points.map(([e,t])=>[e,t])})));if(!r||!hn(e.symmetry))return null;let i=n?Be(n):``;return{name:vn(t),symmetry:e.symmetry,strokes:r,...i?{nickname:i}:{}}}var Rn=[`aria-label`],zn=w(O({__name:`DrawLevelPreview`,props:{level:{},label:{}},setup(e){let t=e,n=s(null);function r(){n.value&&_t(n.value,t.level,t.level.symmetry,{paper:`#efe6cf`})}return D(r),o(()=>t.level,r),(t,r)=>(u(),d(`canvas`,{ref_key:`canvas`,ref:n,class:`draw-preview`,width:`320`,height:`320`,role:`img`,"aria-label":e.label||`${e.level.name} 底样预览`},null,8,Rn))}}),[[`__scopeId`,`data-v-d1c38338`]]),Bn={id:`symmetry-draw`,class:`symmetry-draw`,"aria-labelledby":`symmetry-draw-title`},Vn={class:`section-head`},Hn={class:`section-stats`,"aria-live":`polite`},Un={key:0},Wn=[`disabled`],Gn={key:0,class:`section-status`,role:`status`},Kn={class:`keep-head`},qn={class:`hint`},Jn={class:`keep-fields`},Yn={class:`keep-field`},Xn={class:`keep-field`},Zn={class:`keep-summary mono`},Qn={class:`keep-actions`},$n=[`disabled`],er={key:0,class:`keep-error`,role:`alert`},tr={key:2,class:`section-status`,role:`status`},nr={key:3,class:`section-status`,role:`status`},rr={class:`gallery`,"aria-labelledby":`gallery-title`},ir={class:`gallery-head`},ar={class:`gallery-actions`},or=[`disabled`],sr={key:0,class:`gallery-empty`},cr=[`disabled`],lr={key:1,class:`gallery-empty gallery-empty--warn`},ur={key:2,class:`gallery-empty`},dr={key:3,class:`gallery-empty`},fr={key:4,class:`gallery-grid`},pr={class:`gallery-body`},mr={class:`gallery-name`},hr={class:`gallery-meta`},gr={key:0,class:`badge badge--local`},_r={class:`gallery-points mono`},vr={class:`gallery-card-actions`},yr=[`onClick`],br=[`onClick`],xr=`wenmai.nickname`,Sr=w(O({__name:`SymmetryDrawSection`,emits:[`score`,`keep`],setup(e,{emit:a}){let f=a,p={"mirror-x":`左右对折`,central:`中心对称`,"mirror-xy":`四方对称`},{online:g,offline:y,checking:b,check:S}=ne(),w=s(null),E=null,O=s([]),A=s([]),j=s(!1),M=s(!1),N=s(``),P=s(null),F=s(``),I=s(!1),L=s(null),R=s(``),te=s(``),z=s(!1),B=s(``),ie=s(``),V=s(!1),ae=s(!1),oe=s(``),H=s(``),U=x(()=>[...O.value,...A.value].map(e=>({drawing:e,level:In(e),symmetry:p[e.symmetry],points:e.strokes.reduce((e,t)=>e+t.points.length,0)}))),se=x(()=>U.value.length),ce=x(()=>L.value?.strokes.length??0),le=x(()=>L.value?.strokes.reduce((e,t)=>e+t.points.length,0)??0),W=x(()=>L.value?p[L.value.symmetry]:``);function G(){try{return Be(localStorage.getItem(xr)??``)}catch{return``}}function K(e){try{localStorage.setItem(xr,Be(e))}catch{}}function q(){return[...dn,...U.value.map(e=>e.level)]}function ue(){E?.setLevels(q())}function de(){w.value?.scrollIntoView({behavior:`smooth`,block:`center`})}function fe(){if(!E||!ae.value)return;let e=q();if(e.length<2)return;let t=e.filter(e=>e.id!==oe.value),n=t[Math.floor(Math.random()*t.length)]??e[0];E.reset(),E.setLevel(n.id),H.value=`随机换成了「${n.name}」底样，直接落笔即可。`}async function pe(){if(g.value&&!M.value){M.value=!0,N.value=``;try{let e=await Tn({limit:12});O.value=e.items,j.value=!0,ue()}catch(e){Ve(e)&&re(),N.value=e.message}finally{M.value=!1}}}async function me(){await S(!0)&&!j.value&&await pe()}async function he(){g.value?await pe():await me()}function ge(e){let t=new Date,n=`${String(t.getMonth()+1).padStart(2,`0`)}${String(t.getDate()).padStart(2,`0`)}`;return`${p[e.symmetry]} · ${n}`}function _e(e){L.value=e,I.value=!0,B.value=``,ie.value=``,V.value=!1,R.value=ge(e),te.value=G(),l(()=>{document.getElementById(`keep-form`)?.scrollIntoView({behavior:`smooth`,block:`center`}),document.getElementById(`keep-name`)?.focus({preventScroll:!0})})}function ve(){I.value=!1,L.value=null,B.value=``,V.value=!1}function ye(e,t){ie.value=t,I.value=!1,L.value=null,B.value=``,V.value=!1,ue();let n=`visitor-${e.id}`;l(()=>{E?.reset(),E?.setLevel(n),de()})}function be(e){if(Ve(e))return`共创墙未连接`;if(e instanceof Me){if(e.status===404)return`底样接口暂不可用（后端可能未更新）`;if(e.status>=500)return`底样库暂时出错`}return null}async function J(e=!1){if(!L.value||z.value)return;let t=Ln(L.value,R.value,te.value);if(!t)B.value=`笔迹数据不完整，请重新画一遍。`,V.value=!1;else{K(te.value),z.value=!0,B.value=``,V.value=!1;try{if(g.value&&!e)try{let e=await En(t);O.value=[e,...O.value],j.value=!0,ye(e,`已留下「${e.name}」。它会出现在下一位玩家的底样里。`);return}catch(e){let n=be(e);if(!n){B.value=`发布失败：${e.message}`,V.value=!0;return}Ve(e)&&re();let r=Mn(t);if(r.ok&&r.drawing){A.value=r.items,ye(r.drawing,`${n}，已改存本机底样「${r.drawing.name}」，仅本机可见。`);return}B.value=`${n}，本机保存也不可用，请稍后重试。`,V.value=!0;return}let n=Mn(t);if(!n.ok||!n.drawing){B.value=`本机存储不可用或已满，未能保存。`;return}A.value=n.items,ye(n.drawing,g.value?`已改存本机底样「${n.drawing.name}」，仅本机可见。`:`共创墙未连接，已留作本机底样「${n.drawing.name}」，仅本机可见。`)}catch(e){B.value=`保存失败：${e.message}`,V.value=g.value}finally{z.value=!1}}}function xe(e){E?.addLevel(e.level,{select:!0}),E?.reset(),F.value=`已换成「${e.drawing.name}」，直接落笔即可。`,de()}function Se(e){let t=Nn(e.id);A.value=t.items,ue(),F.value=t.ok?`已从本机删除该底样。`:`已从当前列表移除，但本机存储写入失败，刷新后可能重新出现。`,ie.value&&ie.value.includes(e.name)&&(ie.value=``)}return o(g,e=>{e&&!j.value&&pe()}),D(()=>{A.value=An(),w.value&&(E=sn(w.value,{levels:q(),onLevelChange:e=>{oe.value=e.id},onScore:e=>{P.value=e,f(`score`,e)},onKeep:e=>{f(`keep`,e),_e(e)}}),ae.value=!0,oe.value||=q()[0]?.id??``,g.value&&pe())}),t(()=>{E?.destroy(),E=null,ae.value=!1}),(e,t)=>(u(),d(`section`,Bn,[v(`header`,Vn,[t[5]||=v(`div`,{class:`section-copy`},[v(`p`,{class:`eyebrow`},`对折成纹 · 游客共创`),v(`h2`,{id:`symmetry-draw-title`},`让对称替你落笔，也替下一位留一张底样`),v(`p`,{class:`lede`},` 选一张底样，沿着淡线描画；另一半不必动手，镜像会补齐。 画完点「留作底样」，你的线条会进入底样库，下一位玩家可以接着描。 颜色不限传统色板，点「全色盘」可取任意颜色；评分只看线条与底样的几何覆盖。 `)],-1),v(`p`,Hn,[v(`span`,null,c(r(dn).length)+` 张示例`,1),v(`span`,null,c(se.value)+` 张游客`,1),P.value?(u(),d(`span`,Un,`上次 `+c(P.value.score.toFixed(1))+` 分`,1)):h(``,!0),v(`button`,{type:`button`,class:`mini`,disabled:!ae.value,title:`随机换一张示例或游客底样`,onClick:fe},` 随机选图 `,8,Wn)])]),H.value?(u(),d(`p`,Gn,c(H.value),1)):h(``,!0),v(`div`,{ref_key:`host`,ref:w,class:`mount`},null,512),I.value&&L.value?(u(),d(`form`,{key:1,id:`keep-form`,class:`keep`,onSubmit:t[4]||=T(e=>J(),[`prevent`])},[v(`div`,Kn,[t[7]||=v(`p`,{class:`eyebrow`},`游客创作 · 留下底样`,-1),t[8]||=v(`h3`,null,`把这一笔留给下一位`,-1),v(`p`,qn,[t[6]||=k(` 保存后，这张底样会出现在下方底样库和游戏底样条里，任何人都能按同一条对称规则试画。 `,-1),r(y)?(u(),d(m,{key:0},[k(`共创墙未连接，本次只保存在本机。`)],64)):h(``,!0)])]),v(`div`,Jn,[v(`label`,Yn,[t[9]||=v(`span`,null,`底样名`,-1),_(v(`input`,{id:`keep-name`,"onUpdate:modelValue":t[0]||=e=>R.value=e,type:`text`,maxlength:`20`,autocomplete:`off`,placeholder:`未名底样`},null,512),[[C,R.value]])]),v(`label`,Xn,[t[10]||=v(`span`,null,`署名（选填）`,-1),_(v(`input`,{"onUpdate:modelValue":t[1]||=e=>te.value=e,type:`text`,maxlength:`20`,autocomplete:`nickname`,placeholder:`匿名`},null,512),[[C,te.value]])]),v(`p`,Zn,c(W.value)+` · `+c(ce.value)+` 条笔迹 · `+c(le.value)+` 个点 `,1)]),v(`div`,Qn,[v(`button`,{type:`submit`,class:`action action--primary`,disabled:z.value,onClick:t[2]||=T(e=>J(),[`prevent`])},c(z.value?`保存中…`:r(g)?`发布到底样库`:`留作本机底样`),9,$n),V.value&&!z.value?(u(),d(`button`,{key:0,type:`button`,class:`action`,onClick:t[3]||=e=>J(!0)},` 改存本机 `)):h(``,!0),v(`button`,{type:`button`,class:`mini`,onClick:ve},`先不发布`)]),B.value?(u(),d(`p`,er,c(B.value),1)):h(``,!0)],32)):h(``,!0),ie.value?(u(),d(`p`,tr,c(ie.value),1)):h(``,!0),F.value?(u(),d(`p`,nr,c(F.value),1)):h(``,!0),v(`section`,rr,[v(`div`,ir,[t[11]||=v(`div`,null,[v(`p`,{class:`eyebrow`},`游客底样库`),v(`h3`,{id:`gallery-title`},`下一位玩家，从你这里起笔`),v(`p`,{class:`gallery-lede`},` 这里的每一张都是游客留下的笔迹，不是文物复原，也不代表任何纹样的历史定论。 `)],-1),v(`div`,ar,[v(`span`,{class:i([`badge`,{"badge--warn":r(y)}])},c(r(g)?`共创墙已连接`:r(y)?`共创墙未连接`:`正在检查连接`),3),v(`button`,{type:`button`,class:`mini`,disabled:M.value||r(b),onClick:he},c(M.value?`刷新中…`:r(g)?`刷新底样`:`重试连接`),9,or)])]),r(y)?(u(),d(`p`,sr,[t[12]||=k(` 共创墙未连接，线上底样暂不可见；本机底样仍可试画。 `,-1),v(`button`,{type:`button`,class:`text-button`,disabled:r(b),onClick:me},c(r(b)?`重试中…`:`重试连接`),9,cr)])):N.value?(u(),d(`p`,lr,c(N.value),1)):h(``,!0),M.value&&!j.value?(u(),d(`p`,ur,`正在读取游客底样…`)):h(``,!0),!M.value&&U.value.length===0&&!N.value?(u(),d(`p`,dr,c(r(y)?`本机还没有底样。画一笔并「留作底样」，它只保存在本机。`:`还没有游客底样。画一笔并「留作底样」，成为第一张。`),1)):h(``,!0),U.value.length>0?(u(),d(`ul`,fr,[(u(!0),d(m,null,n(U.value,e=>(u(),d(`li`,{key:e.drawing.id,class:`gallery-card`},[ee(zn,{level:e.level,label:`${e.drawing.name} 底样预览`},null,8,[`level`,`label`]),v(`div`,pr,[v(`p`,mr,c(e.drawing.name),1),v(`p`,hr,[v(`span`,null,c(e.symmetry),1),v(`span`,null,c(e.drawing.nickname||`匿名`),1),e.drawing.origin===`local`?(u(),d(`span`,gr,`仅本机`)):h(``,!0)]),v(`p`,_r,c(e.points)+` 点`,1)]),v(`div`,vr,[v(`button`,{type:`button`,class:`mini`,onClick:t=>xe(e)},`用它作底样`,8,yr),e.drawing.origin===`local`?(u(),d(`button`,{key:0,type:`button`,class:`mini mini--danger`,onClick:t=>Se(e.drawing)},` 删除 `,8,br)):h(``,!0)])]))),128))])):h(``,!0)])]))}}),[[`__scopeId`,`data-v-a953d61a`]]),Cr={class:`studio container`},wr={class:`studio-head`},Tr=[`data-level`,`title`],Er={class:`cost-label`},Dr={key:0,class:`notice`},Or={key:1,class:`notice notice--warn`},kr={key:2,class:`notice notice--warn`},Ar={key:3,class:`notice notice--warn`},jr={class:`studio-grid`},Mr={class:`stage`},Nr={class:`origin-strip`,"aria-labelledby":`origin-title`},Pr={class:`origin-id`},Fr={id:`origin-title`,class:`origin-name`},Ir={class:`meta`},Lr={class:`select-row origin-select`,for:`pattern-select`},Rr=[`value`],zr=[`value`],Br=[`innerHTML`],Vr={class:`origin-side`},Hr={class:`hint`},Ur=[`innerHTML`],Wr={class:`construction-bar`},Gr={class:`toggles`},Kr={key:1,class:`feedback`},qr={class:`share-box`},Jr={class:`share-row`},Yr={class:`mono share-code`},Xr=[`disabled`],Zr={class:`zone zone--rules`,"aria-labelledby":`rules-title`},Qr={key:0,class:`param-tabs`,role:`tablist`,"aria-label":`参数分组`},$r=[`aria-selected`],ei=[`aria-selected`],ti=[`aria-selected`],ni={class:`segmented`,role:`group`,"aria-label":`对称方式`},ri=[`aria-pressed`,`onClick`],ii={class:`mono`},ai={class:`range-row`,for:`repeat-x`},oi=[`aria-valuetext`],si={class:`range-row`,for:`repeat-y`},ci=[`aria-valuetext`],li={class:`hint`},ui=[`open`],di={class:`range-row`,for:`scale`},fi=[`aria-valuetext`],pi={class:`select-row`,for:`palette`},mi=[`value`],hi={class:`segmented segmented--tight`,role:`group`,"aria-label":`背景`},gi=[`aria-pressed`,`onClick`],_i=[`open`],vi={class:`select-row`,for:`seed`},yi={class:`seed-row`},bi={class:`segmented segmented--tight`,role:`group`,"aria-label":`显示旋转`},xi=[`aria-pressed`,`onClick`],Si={class:`panel panel--fold panel--dev`},Ci=[`aria-pressed`],wi={class:`workbench`,"aria-labelledby":`workbench-title`},Ti={class:`workbench-copy`},Ei={class:`title-row`,for:`work-title`},Di={class:`title-input`},Oi=[`placeholder`],ki={class:`creation-note`},Ai={class:`workbench-actions`},ji={id:`export`,class:`panel panel--export`},Mi={class:`export-row`},Ni={class:`segmented segmented--tight`,role:`group`,"aria-label":`导出背景`},Pi=[`aria-pressed`,`onClick`],Fi={class:`export-row`},Ii={class:`segmented segmented--tight`,role:`group`,"aria-label":`PNG 尺寸`},Li=[`aria-pressed`,`onClick`],Ri={class:`hint export-hint`},zi={key:0,class:`hint hint--warn`},Bi={class:`export-buttons`},Vi=[`disabled`],Hi=[`disabled`],Ui={class:`publish-box`},Wi={class:`nickname-row`,for:`nickname`},Gi={class:`save-row`},Ki=[`disabled`],qi={key:4,class:`saved`,"aria-labelledby":`saved-title`},Ji={key:0,class:`hint`},Yi={key:1,class:`saved-list`},Xi={class:`saved-thumb`},Zi={class:`saved-body`},Qi={class:`saved-name`},$i={class:`hint mono`},ea={class:`saved-actions`},ta=[`onClick`],na={key:0,type:`button`,class:`mini`,disabled:``},ra=[`disabled`,`onClick`],ia=[`onClick`],aa={class:`wall`,"aria-labelledby":`wall-title`},oa={class:`wall-head`},sa={class:`wall-actions`},ca={key:0,class:`badge badge--todo`},la=[`disabled`],ua={class:`wall-filters`,role:`group`,"aria-label":`按纹样筛选`},da=[`aria-pressed`,`onClick`],fa={key:0,class:`wall-empty`},pa=[`disabled`],ma={key:1,class:`wall-empty wall-empty--warn`},ha={key:2,class:`wall-empty`},ga={key:3,class:`wall-empty`},_a={key:4,class:`wall-grid`},va=[`onClick`],ya=[`innerHTML`],ba={class:`wall-body`},xa={class:`wall-title`},Sa={class:`wall-meta`},Ca={key:5,class:`wall-more`},wa=[`disabled`],Ta={class:`dock`,role:`region`,"aria-label":`快捷操作`},Ea=[`disabled`],Da=`wenmai.nickname`,Oa=w(O({__name:`Studio`,setup(w){let T=S(),O=g(),j=a({grid:!1,symmetryAxes:!1,unitBounds:!1,layers:!1}),N=s(!1),L=s(!1),ie=s(!1),H=!1,U=s(``),se=s(!1),ce;async function le(){let e=Ze.value;if(e)try{await navigator.clipboard.writeText(e),se.value=!0,window.clearTimeout(ce),ce=window.setTimeout(()=>se.value=!1,1600)}catch{U.value=`复制失败，请手动选中链接`,W.value=!0}}let W=s(!1),G=s(``),K=s(z[0]),q=s(A(z[0])),fe=x(()=>M(q.value,K.value)),me=x(()=>`${typeof T.query.c==`string`?T.query.c:``}|${typeof T.query.pattern==`string`?T.query.pattern:``}`),he=``;function ge(){let e=typeof T.query.c==`string`?T.query.c:``,t=H;if(H=!1,N.value=!1,L.value=!1,ie.value=!1,G.value=``,e){let n=de(e,z);if(n){let e=B(n.patternId)??z[0];K.value=e,q.value=n,N.value=!t;return}L.value=!0}let n=typeof T.query.pattern==`string`?T.query.pattern:``;n&&!B(n)&&(ie.value=!0);let r=B(n)??z[0];K.value=r,q.value=A(r)}o(me,e=>{e!==he&&(he=e,ge())},{immediate:!0});function _e(e){e!==K.value.id&&O.replace({query:{pattern:e}})}let ve=x(()=>T.query.debug===`seam`),J=x(()=>P({pattern:K.value,params:{...fe.value},construction:{...Se.value},seamDebug:ve.value,idPrefix:`studio-${K.value.id}`})),xe=s(``),Se=x(()=>({...j,grid:j.grid||xe.value===`grid`,symmetryAxes:j.symmetryAxes||xe.value===`symmetryAxes`})),Y=x(()=>J.value.params);function we(e){return z.find(t=>t.id===e)??z[0]}let X=s(!1),Z=s(`sym`),Ee=null;function Ae(e){X.value=e.matches}typeof window<`u`&&(Ee=window.matchMedia(`(max-width: 900px)`),X.value=Ee.matches,Ee.addEventListener(`change`,Ae)),t(()=>{Ee?.removeEventListener(`change`,Ae),Ee=null});let je=x(()=>I({pattern:K.value,paletteId:fe.value.paletteId,seed:fe.value.seed,idPrefix:`studio-unit-${K.value.id}`})),Me=x(()=>fe.value.scale.toFixed(2)),Ne=x(()=>{switch(J.value.cost.level){case`ok`:return`正常`;case`warn`:return`高负载`;case`degraded`:return`已降级`}}),Pe=x(()=>{switch(K.value.grid.type){case`cross`:return`十字网格`;case`diamond`:return`斜格`;case`weave`:return`织纹`}}),Fe=x(()=>j.grid&&j.symmetryAxes&&j.unitBounds&&j.layers);function Ie(){let e=!Fe.value;j.grid=e,j.symmetryAxes=e,j.unitBounds=e,j.layers=e}function Le(e){q.value.symmetry=e}function He(e){q.value.background=e}function Ue(e){q.value.displayRotation=e}function We(){q.value=M(q.value,K.value)}function Ge(){q.value.seed=Math.floor(Math.random()*65536)}function Ke(){let e=K.value.allowedSymmetries;q.value.symmetry=e[Math.floor(Math.random()*e.length)],q.value.paletteId=K.value.palettes[Math.floor(Math.random()*K.value.palettes.length)].id,q.value.scale=Number((.6+Math.floor(Math.random()*17)*.05).toFixed(2)),q.value.background=[`paper`,`ink`,`none`][Math.floor(Math.random()*3)],q.value.displayRotation=[0,90,180,270][Math.floor(Math.random()*4)],q.value.seed=Math.floor(Math.random()*65536);let t=2+Math.floor(Math.random()*7),n=2+Math.floor(Math.random()*7);for(;t*n>64;)t>=n?--t:--n;q.value.repeatX=t,q.value.repeatY=n,W.value=!1,U.value=`已随机一套参数`}function qe(){q.value=A(K.value),W.value=!1,U.value=`已恢复默认参数`}async function Je(){let e={...T.query};ve.value?delete e.debug:e.debug=`seam`,await O.replace({query:e})}async function Ye(){if(!Ze.value)W.value=!0,U.value=`当前参数无法编码`;else try{await navigator.clipboard.writeText(Ze.value),W.value=!1,U.value=`分享链接已复制`}catch{W.value=!0,U.value=`复制失败，请手动选择下方链接`}}let Xe=x(()=>ue(Y.value,z)),Ze=x(()=>{if(!Xe.value)return``;let e=O.resolve({name:`studio`,query:{c:Xe.value}}).href;return new URL(e,window.location.origin).toString()}),Qe=x(()=>V(Y.value,K.value)),$e=x(()=>G.value||Qe.value),et=x(()=>ae(Y.value,K.value));function tt(){G.value=oe(G.value)}let nt=s([]),rt=s(!1);function it(){let e=De(Y.value,$e.value);e.ok?(nt.value=e.items,W.value=!1,U.value=`已保存到本机（仅本机可见）`):(W.value=!0,U.value=`本机存储不可用或已满，未能保存`)}async function at(e){let t=B(e.patternId);if(!t){W.value=!0,U.value=`该纹样尚未开放`;return}let n=ue(e.params,z);H=!0,n?await O.replace({query:{c:n}}):await O.replace({query:{pattern:t.id}}),await l(),H=!1,N.value=!1,n||(K.value=t,q.value=F(e.params,t).params),G.value=e.title??``,W.value=!1,U.value=`已打开「${e.title??V(e.params,t)}」`}function ot(e){let t=ke(e);nt.value=t.items,W.value=!t.ok,U.value=t.ok?`已从本机删除`:`已从当前列表移除，但本机存储写入失败，刷新后可能重新出现`}let{online:st,offline:ct,checking:lt,check:ut}=ne();function dt(){try{return Be(localStorage.getItem(Da)??``)}catch{return``}}let ft=s(dt()),Q=s(!1),pt=s([]),mt=s(null),ht=s(!1),gt=s(!1),_t=s(``),vt=s(``),yt=[{id:``,name:`全部`},...z.map(e=>({id:e.id,name:e.name}))],bt=0;function xt(){ft.value=Be(ft.value);try{localStorage.setItem(Da,ft.value)}catch{}}function St(e){let t=B(e.patternId);if(!t)return null;let n=F(e.params,t).params,r=P({pattern:t,params:n,idPrefix:`wall-${e.id}`}).svg;return{item:e,pattern:t,title:V(n,t),svg:r}}function Ct(e,t){pt.value=t?e:[...pt.value,...e]}function wt(e){pt.value=[...e,...pt.value]}function Tt(e){vt.value!==e&&(vt.value=e,mt.value=null,pt.value=[],gt.value=!1,_t.value=``,st.value&&Dt(!0))}function Et(e){if(vt.value&&vt.value!==e.patternId)return;let t=St(e);t&&wt([t]),gt.value=!0}async function Dt(e=!1){if(!st.value)return;let t=++bt;ht.value=!0,_t.value=``;try{let n=await Re({...vt.value?{patternId:vt.value}:{},limit:12,cursor:e?null:mt.value});if(t!==bt)return;Ct(n.items.map(St).filter(e=>e!==null),e),mt.value=n.nextCursor,gt.value=!0}catch(e){if(t!==bt)return;Ve(e)&&re(),_t.value=e.message}finally{t===bt&&(ht.value=!1)}}async function Ot(){if(!st.value){W.value=!0,U.value=`共创墙未连接，作品已只保存在本机`;return}if(Q.value)return;let e=Y.value,t=oe($e.value)||`未命名作品`,n=Ce(nt.value,e,t);if(n?.remoteId){W.value=!1,U.value=`这幅作品已发布过，无需重复发布`;return}Q.value=!0;let r,i=!1,a=!0;try{if(n)r=n;else{let n=De(e,t);n.ok&&(nt.value=n.items,r=n.creation,i=!0)}let o=await ze(e,ft.value?Be(ft.value):void 0);if(r){let e=Oe(r.id,o.id);a=e.ok,nt.value=e.items}Et(o),W.value=!a,U.value=r?a?i?`已发布到公共共创墙（同时保存到本机）`:`已发布到公共共创墙`:`已发布到公共共创墙，但本机记录未更新（存储已满），刷新后可能显示为未上墙`:`已发布到公共共创墙（本机保存失败，仅线上可见）`}catch(e){Ve(e)&&re(),W.value=!0,U.value=`发布失败：${e.message}。`+(r?`作品已保存在本机，可稍后重试上传。`:`本机保存也失败，可稍后重试。`)}finally{Q.value=!1}}async function $(e){if(!st.value)W.value=!0,U.value=`共创墙未连接，稍后可在本机作品里重试上传`;else if(!Q.value){Q.value=!0;try{let t=await ze(e.params,ft.value?Be(ft.value):void 0),n=Oe(e.id,t.id);nt.value=n.items,Et(t),W.value=!n.ok,U.value=n.ok?`已发布到公共共创墙`:`已发布到公共共创墙，但本机记录未更新（存储已满），刷新后可能显示为未上墙`}catch(e){Ve(e)&&re(),W.value=!0,U.value=`上传失败：${e.message}`}finally{Q.value=!1}}}async function kt(e){let t=ue(e.item.params,z);t?(await O.replace({query:{c:t}}),await l(),H=!1,N.value=!1,G.value=``,W.value=!1,U.value=`已载入「${e.title}」`,document.querySelector(`.stage`)?.scrollIntoView({behavior:`smooth`,block:`start`})):(W.value=!0,U.value=`这幅作品的参数无法编码，暂不能打开`)}o(st,e=>{e&&!gt.value&&Dt(!0)}),D(()=>{nt.value=Te(),st.value&&Dt(!0)});let At=s(`paper`),jt=s(`2x`),Mt=x(()=>jt.value===`2x`?`约 1–2 MB`:`约 5–7 MB`),Nt=s(!1),Pt=x(()=>ve.value),Ft=x(()=>ve.value?`接缝检查模式不参与导出，请先退出。`:J.value.cost.level===`degraded`?`当前参数已降级为 ${Y.value.repeatX}×${Y.value.repeatY}，导出将使用降级后的结果。`:J.value.cost.level===`warn`?`高负载参数可用，但导出会关闭阴影与滤镜（本版本本就没有）。`:``);function It(){return{...Y.value,background:At.value}}function Lt(){if(Pt.value)W.value=!0,U.value=Ft.value;else try{let e=P({pattern:K.value,params:It(),idPrefix:`export-${K.value.id}`});ye(e.svg,pe(e.params,`svg`)),W.value=!1,U.value=`SVG 已导出`}catch(e){W.value=!0,U.value=`SVG 导出失败：${e.message}，可重试或改用 PNG`}}async function Rt(){if(Pt.value)W.value=!0,U.value=Ft.value;else if(!Nt.value){Nt.value=!0;try{let e=P({pattern:K.value,params:It(),idPrefix:`export-${K.value.id}`});await be(e.svg,pe(e.params,`png`),jt.value),W.value=!1,U.value=`PNG（${jt.value===`2x`?`2048`:`4096`}px）已导出`}catch(e){W.value=!0,U.value=`PNG 导出失败：${e.message}，可重试或改用 SVG`}finally{Nt.value=!1}}}return(t,a)=>(u(),d(`section`,Cr,[v(`header`,wr,[a[27]||=E(`<div data-v-c02b16e9><p class="eyebrow" data-v-c02b16e9>纹样工坊</p><h1 data-v-c02b16e9>把规则拿在手里</h1><p class="lede" data-v-c02b16e9> 改动的是纹样的语法，而不是一张图。预览实时由 <span class="mono" data-v-c02b16e9>单元 → 对称 → 平铺</span> 管线生成，导出与分享共用同一组参数。 </p><p class="head-link" data-v-c02b16e9><a href="#symmetry-draw" data-v-c02b16e9>想自己落笔？去「对折成纹」· 游客共创 →</a></p></div>`,1),v(`div`,{class:`cost`,"data-level":J.value.cost.level,role:`status`,title:`E = `+Y.value.repeatX+`×`+Y.value.repeatY+` × `+J.value.cost.copiesPerTile+` × `+K.value.unit.paths},[v(`span`,Er,`性能 · `+c(Ne.value),1)],8,Tr)]),N.value?(u(),d(`p`,Dr,`已从分享链接恢复参数。`)):h(``,!0),L.value?(u(),d(`p`,Or,`分享链接无效，已使用默认参数。`)):h(``,!0),ie.value?(u(),d(`p`,kr,` 纹样参数无效，已打开默认纹样。 `)):h(``,!0),J.value.recovered?(u(),d(`p`,Ar,` 参数不合法，已回退默认值：`+c(J.value.issues[0]),1)):h(``,!0),v(`div`,jr,[v(`div`,Mr,[v(`div`,Nr,[v(`div`,Pr,[a[28]||=v(`p`,{class:`eyebrow`},`起源`,-1),v(`h2`,Fr,c(K.value.name),1),v(`p`,Ir,c(K.value.region)+` · `+c(K.value.craft),1)]),v(`label`,Lr,[a[29]||=v(`span`,null,`选择纹样`,-1),v(`select`,{id:`pattern-select`,value:K.value.id,onChange:a[0]||=e=>_e(e.target.value)},[(u(!0),d(m,null,n(r(z),e=>(u(),d(`option`,{key:e.id,value:e.id},c(e.name)+` · `+c(e.level===`deep`?`深案例`:`轻案例`),9,zr))),128))],40,Rr)]),v(`div`,{class:`unit-thumb origin-thumb`,innerHTML:je.value},null,8,Br),v(`div`,Vr,[v(`p`,Hr,` 单元 `+c(K.value.unit.paths)+` 条子路径 · `+c(Pe.value)+` · `+c(K.value.allowedSymmetries.join(` / `)),1),a[31]||=v(`p`,{class:`placeholder`},[v(`span`,{class:`badge badge--todo`},`内容核实中`),k(` 单元几何为样稿；故事与来源已补，母题 / 工艺未核实处见详情页。 `)],-1),ee(r(y),{class:`text-link`,to:`/atlas/${K.value.id}`},{default:e(()=>[...a[30]||=[k(`查看解构 →`,-1)]]),_:1},8,[`to`])])]),v(`div`,{class:i([`preview-frame`,{"is-transparent":Y.value.background===`none`}])},[v(`div`,{class:`pattern-render`,innerHTML:J.value.svg},null,8,Ur)],2),v(`div`,Wr,[a[36]||=v(`span`,{class:`eyebrow`},`构造模式`,-1),v(`div`,Gr,[v(`label`,null,[_(v(`input`,{"onUpdate:modelValue":a[1]||=e=>j.grid=e,type:`checkbox`},null,512),[[f,j.grid]]),a[32]||=k(` 网格`,-1)]),v(`label`,null,[_(v(`input`,{"onUpdate:modelValue":a[2]||=e=>j.symmetryAxes=e,type:`checkbox`},null,512),[[f,j.symmetryAxes]]),a[33]||=k(` 对称轴`,-1)]),v(`label`,null,[_(v(`input`,{"onUpdate:modelValue":a[3]||=e=>j.unitBounds=e,type:`checkbox`},null,512),[[f,j.unitBounds]]),a[34]||=k(` 单元边界`,-1)]),v(`label`,null,[_(v(`input`,{"onUpdate:modelValue":a[4]||=e=>j.layers=e,type:`checkbox`},null,512),[[f,j.layers]]),a[35]||=k(` 色层分解`,-1)])]),v(`button`,{type:`button`,class:`mini`,onClick:Ie},c(Fe.value?`全部关闭`:`全部开启`),1)]),a[37]||=v(`p`,{class:`hint`},`构造模式只用于观察，不进入导出结果。`,-1),v(`div`,{class:`stage-meta`},[v(`div`,{class:`actions`},[v(`button`,{type:`button`,class:`action`,onClick:Ke},`随机一套`),v(`button`,{type:`button`,class:`action`,onClick:qe},`恢复默认`),v(`button`,{type:`button`,class:`action`,onClick:Ye},` 复制分享链接 `)])]),U.value?(u(),d(`p`,{key:0,class:i([`feedback`,{"feedback--warn":W.value}]),role:`status`},c(U.value),3)):h(``,!0),J.value.cost.note?(u(),d(`p`,Kr,c(J.value.cost.note),1)):h(``,!0),v(`details`,qr,[v(`summary`,null,`分享编码（`+c(Xe.value?.length??0)+` 字符）`,1),v(`div`,Jr,[v(`p`,Yr,c(Ze.value||`当前参数无法编码`),1),v(`button`,{type:`button`,class:`mini`,disabled:!Ze.value,onClick:le},c(se.value?`已复制`:`复制`),9,Xr)])])]),v(`aside`,Zr,[a[53]||=v(`p`,{class:`eyebrow`,id:`rules-title`},`规则`,-1),X.value?(u(),d(`div`,Qr,[v(`button`,{type:`button`,role:`tab`,"aria-selected":Z.value===`sym`,class:i({active:Z.value===`sym`}),onClick:a[5]||=e=>Z.value=`sym`},` 对称 `,10,$r),v(`button`,{type:`button`,role:`tab`,"aria-selected":Z.value===`repeat`,class:i({active:Z.value===`repeat`}),onClick:a[6]||=e=>Z.value=`repeat`},` 重复 `,10,ei),v(`button`,{type:`button`,role:`tab`,"aria-selected":Z.value===`more`,class:i({active:Z.value===`more`}),onClick:a[7]||=e=>Z.value=`more`},` 色板与细节 `,10,ti)])):h(``,!0),_(v(`fieldset`,{class:`panel`,onMouseenter:a[8]||=e=>xe.value=`symmetryAxes`,onMouseleave:a[9]||=e=>xe.value=``},[a[38]||=v(`legend`,{class:`eyebrow`},`对称`,-1),v(`div`,ni,[(u(!0),d(m,null,n(K.value.allowedSymmetries,e=>(u(),d(`button`,{key:e,type:`button`,"aria-pressed":q.value.symmetry===e,class:i({active:q.value.symmetry===e}),onClick:t=>Le(e)},[v(`span`,ii,c(e),1),k(` `+c(r(te)[e]),1)],10,ri))),128))]),a[39]||=v(`p`,{class:`hint`},`挑花常以中心对折起稿，镜像决定左右是否成双。`,-1)],544),[[p,!X.value||Z.value===`sym`]]),_(v(`fieldset`,{class:`panel`,onMouseenter:a[14]||=e=>xe.value=`grid`,onMouseleave:a[15]||=e=>xe.value=``},[a[42]||=v(`legend`,{class:`eyebrow`},`重复`,-1),v(`label`,ai,[v(`span`,null,[a[40]||=k(`横向 `,-1),_(v(`input`,{class:`range-num`,"onUpdate:modelValue":a[10]||=e=>q.value.repeatX=e,type:`number`,min:`2`,max:`8`,step:`1`,"aria-label":`横向重复次数`,onChange:We},null,544),[[C,q.value.repeatX,void 0,{number:!0}]])]),_(v(`input`,{id:`repeat-x`,"onUpdate:modelValue":a[11]||=e=>q.value.repeatX=e,type:`range`,min:`2`,max:`8`,step:`1`,"aria-valuetext":`${q.value.repeatX} 次`},null,8,oi),[[C,q.value.repeatX,void 0,{number:!0}]])]),v(`label`,si,[v(`span`,null,[a[41]||=k(`纵向 `,-1),_(v(`input`,{class:`range-num`,"onUpdate:modelValue":a[12]||=e=>q.value.repeatY=e,type:`number`,min:`2`,max:`8`,step:`1`,"aria-label":`纵向重复次数`,onChange:We},null,544),[[C,q.value.repeatY,void 0,{number:!0}]])]),_(v(`input`,{id:`repeat-y`,"onUpdate:modelValue":a[13]||=e=>q.value.repeatY=e,type:`range`,min:`2`,max:`8`,step:`1`,"aria-valuetext":`${q.value.repeatY} 次`},null,8,ci),[[C,q.value.repeatY,void 0,{number:!0}]])]),v(`p`,li,`当前 `+c(fe.value.repeatX)+` × `+c(fe.value.repeatY)+`。重复数越少，单元越清楚；乘积上限 64。`,1)],544),[[p,!X.value||Z.value===`repeat`]]),_(v(`details`,{class:`panel panel--fold`,open:X.value&&Z.value===`more`},[a[45]||=v(`summary`,{class:`eyebrow`},`尺度与色板`,-1),v(`label`,di,[v(`span`,null,[a[43]||=k(`单元尺度 `,-1),_(v(`input`,{class:`range-num`,"onUpdate:modelValue":a[16]||=e=>q.value.scale=e,type:`number`,min:`0.6`,max:`1.4`,step:`0.05`,"aria-label":`单元尺度`,onChange:We},null,544),[[C,q.value.scale,void 0,{number:!0}]])]),_(v(`input`,{id:`scale`,"onUpdate:modelValue":a[17]||=e=>q.value.scale=e,type:`range`,min:`0.6`,max:`1.4`,step:`0.05`,"aria-valuetext":`${Me.value} 倍`},null,8,fi),[[C,q.value.scale,void 0,{number:!0}]])]),v(`label`,pi,[a[44]||=v(`span`,null,`色板`,-1),_(v(`select`,{id:`palette`,"onUpdate:modelValue":a[18]||=e=>q.value.paletteId=e},[(u(!0),d(m,null,n(K.value.palettes,e=>(u(),d(`option`,{key:e.id,value:e.id},c(e.name)+c(e.kind===`traditional`?`（传统参考）`:`（现代创作）`),9,mi))),128))],512),[[b,q.value.paletteId]])]),a[46]||=v(`p`,{class:`hint`},`传统参考色见于馆藏实物；现代创作色为本次再创作。`,-1),v(`div`,hi,[(u(),d(m,null,n([`paper`,`ink`,`none`],e=>v(`button`,{key:e,type:`button`,"aria-pressed":q.value.background===e,class:i({active:q.value.background===e}),onClick:t=>He(e)},c(e===`paper`?`纸`:e===`ink`?`墨`:`透明`),11,gi)),64))])],8,ui),[[p,!X.value||Z.value===`more`]]),_(v(`details`,{class:`panel panel--fold`,open:X.value&&Z.value===`more`},[a[48]||=v(`summary`,{class:`eyebrow`},`细节`,-1),v(`label`,vi,[a[47]||=v(`span`,null,`种子`,-1),v(`span`,yi,[_(v(`input`,{id:`seed`,"onUpdate:modelValue":a[19]||=e=>q.value.seed=e,type:`number`,min:`0`,max:`65535`,step:`1`,inputmode:`numeric`,onChange:We},null,544),[[C,q.value.seed,void 0,{number:!0}]]),v(`button`,{type:`button`,class:`mini`,onClick:Ge},`换种子`)])]),a[49]||=v(`p`,{class:`label-text`},`显示旋转`,-1),v(`div`,bi,[(u(),d(m,null,n([0,90,180,270],e=>v(`button`,{key:e,type:`button`,"aria-pressed":q.value.displayRotation===e,class:i({active:q.value.displayRotation===e}),onClick:t=>Ue(e)},c(e)+`° `,11,xi)),64))]),a[50]||=v(`p`,{class:`hint`},`换一个种子，只改变细节节奏，不改变对称结构。`,-1)],8,_i),[[p,!X.value||Z.value===`more`]]),_(v(`details`,Si,[a[51]||=v(`summary`,{class:`eyebrow`},`开发`,-1),v(`button`,{type:`button`,class:`mini`,"aria-pressed":ve.value,onClick:Je},c(ve.value?`退出接缝检查`:`接缝检查 ?debug=seam`),9,Ci),a[52]||=v(`p`,{class:`hint`},`接缝检查强制 2×2、关闭旋转与缩放，并画出瓦片边界；该模式不导出。`,-1)],512),[[p,!X.value||Z.value===`more`]])])]),v(`section`,wi,[v(`div`,Ti,[a[55]||=v(`p`,{class:`eyebrow`},`新作`,-1),a[56]||=v(`h2`,{id:`workbench-title`,class:`workbench-title`},`把这一次的参数带走`,-1),v(`label`,Ei,[a[54]||=v(`span`,null,`作品名`,-1),v(`span`,Di,[_(v(`input`,{id:`work-title`,"onUpdate:modelValue":a[20]||=e=>G.value=e,type:`text`,placeholder:Qe.value,maxlength:24,autocomplete:`off`,onBlur:tt},null,40,Oi),[[C,G.value]]),v(`button`,{type:`button`,class:`mini`,onClick:a[21]||=e=>G.value=``},`用自动名`)])]),v(`p`,ki,c(et.value),1),a[57]||=v(`p`,{class:`fineprint`},`作品默认只保存在本机，不会上传到任何服务器。`,-1)]),v(`div`,Ai,[v(`fieldset`,ji,[a[60]||=v(`legend`,{class:`eyebrow`},`导出`,-1),v(`div`,Mi,[a[58]||=v(`span`,{class:`label-text`},`背景`,-1),v(`div`,Ni,[(u(),d(m,null,n([`paper`,`ink`,`none`],e=>v(`button`,{key:e,type:`button`,"aria-pressed":At.value===e,class:i({active:At.value===e}),onClick:t=>At.value=e},c(e===`paper`?`纸`:e===`ink`?`墨`:`透明`),11,Pi)),64))])]),v(`div`,Fi,[a[59]||=v(`span`,{class:`label-text`},`PNG 尺寸`,-1),v(`div`,Ii,[(u(),d(m,null,n([`2x`,`4x`],e=>v(`button`,{key:e,type:`button`,"aria-pressed":jt.value===e,class:i({active:jt.value===e}),onClick:t=>jt.value=e},c(e===`2x`?`2× · 2048px`:`4× · 4096px`),11,Li)),64))])]),v(`p`,Ri,` PNG `+c(jt.value===`2x`?`2048`:`4096`)+`px · `+c(Mt.value)+` · 背景`+c(At.value===`paper`?`纸`:At.value===`ink`?`墨`:`透明`),1),Ft.value?(u(),d(`p`,zi,c(Ft.value),1)):h(``,!0),v(`div`,Bi,[v(`button`,{type:`button`,class:`action`,disabled:Pt.value,onClick:Lt},` 导出 SVG `,8,Vi),v(`button`,{type:`button`,class:`action action--primary`,disabled:Pt.value||Nt.value,onClick:Rt},c(Nt.value?`正在生成…`:`导出 PNG`),9,Hi)])]),v(`div`,Ui,[v(`label`,Wi,[a[61]||=v(`span`,null,`昵称（选填，≤ 20 字）`,-1),_(v(`input`,{id:`nickname`,"onUpdate:modelValue":a[22]||=e=>ft.value=e,type:`text`,maxlength:`20`,autocomplete:`nickname`,onBlur:xt},null,544),[[C,ft.value]])]),v(`div`,Gi,[v(`button`,{type:`button`,class:`action`,onClick:it},`保存到本机`),v(`button`,{type:`button`,class:`action`,disabled:!r(st)||Q.value,onClick:Ot},c(Q.value?`发布中…`:`发布到共创墙`),9,Ki),v(`button`,{type:`button`,class:`mini`,onClick:a[23]||=e=>rt.value=!rt.value},` 本机作品（`+c(nt.value.length)+`） `,1)]),v(`p`,{class:i([`hint`,{"hint--warn":r(ct)}])},c(r(ct)?`共创墙未连接：当前只能保存到本机。`:`公共作品任何人可见、可复现；本机作品仅自己可见。`),3)])])]),rt.value?(u(),d(`section`,qi,[a[62]||=v(`div`,{class:`saved-head`},[v(`h2`,{id:`saved-title`,class:`panel-title`},`本机作品`),v(`p`,{class:`eyebrow`},`仅本机可见`)],-1),nt.value.length===0?(u(),d(`p`,Ji,`还没有保存任何作品。`)):(u(),d(`ul`,Yi,[(u(!0),d(m,null,n(nt.value,e=>(u(),d(`li`,{key:e.id},[v(`div`,Xi,[ee(R,{pattern:we(e.params.patternId),params:e.params},null,8,[`pattern`,`params`])]),v(`div`,Zi,[v(`p`,Qi,c(e.title||e.params.patternId),1),v(`p`,$i,c(e.params.symmetry)+` · `+c(e.params.repeatX)+`×`+c(e.params.repeatY)+` · `+c(new Date(e.createdAt).toLocaleString()),1)]),v(`div`,ea,[v(`button`,{type:`button`,class:`mini`,onClick:t=>at(e)},`打开`,8,ta),e.remoteId?(u(),d(`button`,na,`已上墙`)):(u(),d(`button`,{key:1,type:`button`,class:`mini`,disabled:!r(st)||Q.value,onClick:t=>$(e)},` 发布 `,8,ra)),v(`button`,{type:`button`,class:`mini mini--danger`,onClick:t=>ot(e.id)},` 删除 `,8,ia)])]))),128))]))])):h(``,!0),v(`section`,aa,[v(`div`,oa,[a[63]||=v(`div`,null,[v(`p`,{class:`eyebrow`},`公共共创墙`),v(`h2`,{id:`wall-title`,class:`workbench-title`},`别人都在怎么用这套语法`),v(`p`,{class:`hint`},` 服务器作品，任何人可见、可复现；本机作品只在上面“本机作品”里，不会自动上墙。 `)],-1),v(`div`,sa,[r(ct)?(u(),d(`span`,ca,`未连接`)):(u(),d(`button`,{key:1,type:`button`,class:`mini`,disabled:ht.value,onClick:a[24]||=e=>Dt(!0)},c(ht.value?`加载中…`:`刷新`),9,la))])]),v(`div`,ua,[(u(),d(m,null,n(yt,e=>v(`button`,{key:e.id||`all`,type:`button`,class:i([`wall-filter`,{"wall-filter--active":vt.value===e.id}]),"aria-pressed":vt.value===e.id,onClick:t=>Tt(e.id)},c(e.name),11,da)),64))]),r(ct)?(u(),d(`p`,fa,[a[64]||=k(` 共创墙未连接。 `,-1),v(`button`,{type:`button`,class:`text-button`,disabled:r(lt),onClick:a[25]||=e=>r(ut)(!0)},c(r(lt)?`重试中…`:`重试连接`),9,pa),a[65]||=k(` 生成、导出与分享不受影响。 `,-1)])):_t.value?(u(),d(`p`,ma,c(_t.value),1)):!gt.value&&ht.value?(u(),d(`p`,ha,`正在加载共创墙…`)):pt.value.length===0?(u(),d(`p`,ga,c(vt.value?`这个纹样还没有人发布。换个筛选，或用它成为第一幅。`:`还没有人发布。在上方填写昵称并“发布到共创墙”，成为第一幅。`),1)):(u(),d(`div`,_a,[(u(!0),d(m,null,n(pt.value,e=>(u(),d(`button`,{key:e.item.id,type:`button`,class:`wall-card`,onClick:t=>kt(e)},[v(`div`,{class:`wall-art`,innerHTML:e.svg},null,8,ya),v(`div`,ba,[v(`p`,xa,c(e.title),1),v(`p`,Sa,[v(`span`,null,c(e.pattern.name),1),v(`span`,null,c(e.item.nickname||`匿名`),1)])])],8,va))),128))])),mt.value&&r(st)?(u(),d(`div`,Ca,[v(`button`,{type:`button`,class:`action`,disabled:ht.value,onClick:a[26]||=e=>Dt(!1)},c(ht.value?`加载中…`:`加载更多`),9,wa)])):h(``,!0)]),ee(Sr),v(`div`,Ta,[v(`button`,{type:`button`,class:`dock-btn`,onClick:Ke},`随机`),v(`button`,{type:`button`,class:`dock-btn`,onClick:qe},`恢复`),v(`button`,{type:`button`,class:`dock-btn`,onClick:Ye},`分享`),v(`button`,{type:`button`,class:`dock-btn dock-btn--primary`,disabled:Pt.value||Nt.value,onClick:Rt},c(Nt.value?`导出中…`:`导出 PNG`),9,Ea)])]))}}),[[`__scopeId`,`data-v-c02b16e9`]]);export{Oa as default};