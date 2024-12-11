const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./p5.min.7_hCuTSf.js","./_commonjsHelpers.Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{s as mt,e as xt,c as vt,b as Et,f as rt,m as Q,i as St,X as Pt,n as nt,Y as bt,o as kt,k as X,x as h}from"./scheduler.Xi5sktIg.js";import{S as pt,i as yt,c as Rt,a as _t,m as Tt,d as jt,t as Bt,e as It}from"./index.DXItMEGr.js";import{_ as wt}from"./preload-helper.C1FmrZbK.js";import{b as Mt}from"./paths.Bbq2ss_B.js";import{f as st,c as G,r as it,p as K,g as at,w as V,h as J,b as Ot,d as ct,e as W,i as Y,j as lt,a as At,s as ut,k as Nt,l as ft}from"./stores.Dx22L7Cb.js";import{c as Z}from"./constants.BfKEPlZp.js";function Ft(n){let o,s,i;return{c(){o=xt("div"),this.h()},l(c){o=vt(c,"DIV",{style:!0,class:!0}),Et(o).forEach(rt),this.h()},h(){Q(o,"style",n[0]),Q(o,"class","m-0")},m(c,S){St(c,o,S),s||(i=Pt(n[1].call(null,o)),s=!0)},p(c,[S]){S&1&&Q(o,"style",c[0])},i:nt,o:nt,d(c){c&&rt(o),s=!1,i()}}}function Lt(n,o){return o.forEach(([s,i])=>n[s]=i),n}function Ut(n,o,s){let{target:i=void 0}=o,{sketch:c=void 0}=o,{parentDivStyle:S="display: block;"}=o,{debug:w=!1}=o,U;const A=bt(),F={ref(){A("ref",i)},instance(){A("instance",U)}};function M(r){return s(2,i=r),{destroy(){s(2,i=void 0)}}}return kt(async()=>{const r=await wt(()=>import("./p5.min.7_hCuTSf.js").then(e=>e.p),__vite__mapDeps([0,1]),import.meta.url),{default:m}=r,t=Object.entries(r).filter(([e,f])=>f instanceof Function&&e[0]!=="_"&&e!=="default");w&&console.log("available p5 native classes",t),U=new m(e=>(e=Lt(e,t),w&&console.log("p5 instance",e),window._p5Instance=e,c(e)),i),F.ref(),F.instance()}),n.$$set=r=>{"target"in r&&s(2,i=r.target),"sketch"in r&&s(3,c=r.sketch),"parentDivStyle"in r&&s(0,S=r.parentDivStyle),"debug"in r&&s(4,w=r.debug)},[S,M,i,c,w]}class zt extends pt{constructor(o){super(),yt(this,o,Ut,Ft,mt,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function Dt(n){let o,s;return o=new zt({props:{sketch:n[0]}}),{c(){Rt(o.$$.fragment)},l(i){_t(o.$$.fragment,i)},m(i,c){Tt(o,i,c),s=!0},p:nt,i(i){s||(jt(o.$$.fragment,i),s=!0)},o(i){Bt(o.$$.fragment,i),s=!1},d(i){It(o,i)}}}function ht(n,o){const s=n.x-o.x,i=n.y-o.y;return s*s+i*i}function Ht(n,o,s){let i,c,S;X(n,st,t=>s(1,i=t)),X(n,G,t=>s(2,c=t)),X(n,it,t=>s(3,S=t));let w;const U=t=>{t.preload=()=>{w=t.loadFont(Mt+"/font/CircularStd-Book.otf",()=>{at.set(!0)})},t.setup=()=>{const e=t.createCanvas(h(V),h(J));Ot.set(e.canvas),t.colorMode(t.HSL),t.background(0),t.frameRate(30),h(ct).length>0&&A()},t.draw=()=>{t.background(0,.1);const e=h(W),f=h(Y),a=h(lt),u=h(st),l=h(G),C=l.highlightedEntities||h(At),d=l.stroke||h(ut),p=h(at),y=l.speed||h(Nt),v=h(ft),k=h(it),P=Math.max(...Object.values(v));h(K)&&(A(),K.set(!1)),m(t,e,v,P,a,C,l,d,y,u);const R={highlighted:[],normal:[]};Object.values(e).forEach(g=>{if(g.isStationary)return;C.length===0||C.includes(g.moveBy)?R.highlighted.push(g):R.normal.push(g)}),R.highlighted.length>0&&R.highlighted.forEach(g=>{M(t,g,!0,a,u,y,d,l,C)}),R.normal.length>0&&R.normal.forEach(g=>{M(t,g,!1,a,u,y,d,l,C)}),p&&T(t,f,a,l,k)}};function A(){const t=new Map,e={},f=h(G);h(ct).forEach(a=>{const u=a[f.moveBy],l=a[f.clusterBy];e[u]||(e[u]={categories:[],moveBy:u,dataPoints:[],currentCategoryIndex:0,position:null,t:0,isStationary:!0,trail:[],loopsCompleted:0,loopsToComplete:f.loops||1}),e[u].dataPoints.push(a),e[u].categories.push(l),l!==e[u].categories[0]&&(e[u].isStationary=!1),t.has(l)||t.set(l,[]),t.get(l).push(a)}),W.set(e),Y.set(Array.from(t.entries()).sort(([a],[u])=>!isNaN(a)&&!isNaN(u)?+a-+u:a.localeCompare(u))),F()}function F(){const e=(h(V)-100)/2,f=(h(J)-50*2)/2,a={},u=h(Y).length,l=Math.PI;h(Y).forEach(([p],y)=>{const v=l+y/u*Math.PI*2;a[p]={x:h(V)/2+e*Math.cos(v),y:h(J)/2+f*Math.sin(v)}}),lt.set(a);const C=h(W),d={};Object.values(C).forEach(p=>{const y=p.categories[0];a[y]&&(p.position={...a[y]},p.t=0,p.currentCategoryIndex=0,p.isStationary&&(d[y]||(d[y]=0),d[y]++))}),W.set(C),m.trails={},ft.set(d)}function M(t,e,f,a,u,l,C,d,p){if(e.isStationary||!e.position)return;const y=p.length===0||f,v=Z[d.clusterBy]||{start:[0,0,100],end:[0,0,0]},k=e.categories,P=e.currentCategoryIndex,R=e.position;let g=e.t||0;const L=k[P%k.length],b=k[(P+1)%k.length],x=a[L],j=a[b];if(x&&j){const z=e.isGoingBack?[0,0,40]:r(t,e,v,g,e.isGoingBack);C=e.isGoingBack?.5:h(ut),t.stroke(y?[...z]:[0,0,40]),t.strokeWeight(y?C:.5),t.noFill(),t.strokeJoin(t.ROUND);let _={x:null,y:null};if(u){const N={x:x.x-12.5,y:x.y-12.5},ot={x:j.x+25/2,y:j.y+25/2};_.x=t.bezierPoint(x.x,N.x-25,ot.x-25,j.x,g),_.y=t.bezierPoint(x.y,N.y+25,ot.y+25,j.y,g)}else _.x=t.lerp(x.x,j.x,g),_.y=t.lerp(x.y,j.y,g);const B=e.trail||[],q=B[B.length-1],O=1;(!q||ht(q,_)>=O*O)&&(B.length>=2&&B.shift(),B.push({x:_.x,y:_.y}));const I=.004*l;g+=I,g>1&&(g=0,e.currentCategoryIndex=(P+1)%k.length,e.currentCategoryIndex==k.length-1?e.isGoingBack=!0:e.isGoingBack=!1),e.t=g,R.x=_.x,R.y=_.y,t.beginShape();for(let D=0;D<B.length;D++){const N=B[D];t.vertex(N.x,N.y)}t.endShape()}}function r(t,e,f,a,u){var l;return u?f.end:f.start,u?f.start:f.end,(l=Z[h(G).clusterBy])==null?void 0:l.start}function m(t,e,f,a,u,l,C,d,p,y){const v=.004*p;m.trails||(m.trails={});const k=m.trails;Object.keys(f).forEach(P=>{const R=f[P],g=u[P],L=g;if(P&&R&&g){k[P]||(k[P]={t:null,trail:[],isGoingBack:!1});const b=k[P];b.t+=v,b.t>1&&(b.t=null);const x=25,j=b.t;let z={x:0,y:0};if(y){const O={x:g.x-x/2,y:g.y-x/2},I={x:L.x+x/2,y:L.y+x/2};z.x=t.bezierPoint(g.x,O.x-x,I.x-x,L.x,j),z.y=t.bezierPoint(g.y,O.y+x,I.y+x,L.y,j)}const _=1,B=b.trail[b.trail.length-1];if((!B||ht(B,z)>=_*_)&&(b.trail.length>=10&&b.trail.shift(),b.trail.push(z)),(l.length===0||l.some(O=>{const I=e[O];return I&&I.categories.includes(P)&&I.isStationary}))&&C.clusterBy){const O=Z[C.clusterBy]||{start:[0,0,100],end:[0,0,0]},I=r(t,null,O,b.t,!1),D=t.map(R,1,a,d,d*5);t.noFill(),t.stroke(...I),t.strokeWeight(D),t.strokeJoin(t.ROUND),t.beginShape(),b.trail.forEach(N=>t.vertex(N.x,N.y)),t.endShape()}}})}function T(t,e,f,a,u){var l;t.fill(...((l=Z[a.clusterBy])==null?void 0:l.end)||[0,0,40]),t.noStroke(),t.textFont(w),e.forEach(([C])=>{const d=f[C];if(d){if(t.push(),u)t.translate(d.x,d.y);else{let p=Math.atan2(d.y-h(J)/2,d.x-h(V)/2);p>Math.PI/2||p<-Math.PI/2?(p+=Math.PI,t.textAlign(t.RIGHT,t.BOTTOM)):t.textAlign(t.LEFT,t.TOP),t.translate(d.x,d.y),t.rotate(p)}t.textSize(14),t.text(C,0,0),t.pop()}})}return n.$$.update=()=>{n.$$.dirty&14&&(c.clusterBy||c.moveBy||S||c.speed||i)&&(A(),K.set(!1))},[U,i,c,S]}class re extends pt{constructor(o){super(),yt(this,o,Ht,Dt,mt,{})}}var dt={},$={},tt=34,H=10,et=13;function Ct(n){return new Function("d","return {"+n.map(function(o,s){return JSON.stringify(o)+": d["+s+'] || ""'}).join(",")+"}")}function Gt(n,o){var s=Ct(n);return function(i,c){return o(s(i),c,n)}}function gt(n){var o=Object.create(null),s=[];return n.forEach(function(i){for(var c in i)c in o||s.push(o[c]=c)}),s}function E(n,o){var s=n+"",i=s.length;return i<o?new Array(o-i+1).join(0)+s:s}function Vt(n){return n<0?"-"+E(-n,6):n>9999?"+"+E(n,6):E(n,4)}function Jt(n){var o=n.getUTCHours(),s=n.getUTCMinutes(),i=n.getUTCSeconds(),c=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":Vt(n.getUTCFullYear())+"-"+E(n.getUTCMonth()+1,2)+"-"+E(n.getUTCDate(),2)+(c?"T"+E(o,2)+":"+E(s,2)+":"+E(i,2)+"."+E(c,3)+"Z":i?"T"+E(o,2)+":"+E(s,2)+":"+E(i,2)+"Z":s||o?"T"+E(o,2)+":"+E(s,2)+"Z":"")}function Wt(n){var o=new RegExp('["'+n+`
\r]`),s=n.charCodeAt(0);function i(r,m){var T,t,e=c(r,function(f,a){if(T)return T(f,a-1);t=f,T=m?Gt(f,m):Ct(f)});return e.columns=t||[],e}function c(r,m){var T=[],t=r.length,e=0,f=0,a,u=t<=0,l=!1;r.charCodeAt(t-1)===H&&--t,r.charCodeAt(t-1)===et&&--t;function C(){if(u)return $;if(l)return l=!1,dt;var p,y=e,v;if(r.charCodeAt(y)===tt){for(;e++<t&&r.charCodeAt(e)!==tt||r.charCodeAt(++e)===tt;);return(p=e)>=t?u=!0:(v=r.charCodeAt(e++))===H?l=!0:v===et&&(l=!0,r.charCodeAt(e)===H&&++e),r.slice(y+1,p-1).replace(/""/g,'"')}for(;e<t;){if((v=r.charCodeAt(p=e++))===H)l=!0;else if(v===et)l=!0,r.charCodeAt(e)===H&&++e;else if(v!==s)continue;return r.slice(y,p)}return u=!0,r.slice(y,t)}for(;(a=C())!==$;){for(var d=[];a!==dt&&a!==$;)d.push(a),a=C();m&&(d=m(d,f++))==null||T.push(d)}return T}function S(r,m){return r.map(function(T){return m.map(function(t){return M(T[t])}).join(n)})}function w(r,m){return m==null&&(m=gt(r)),[m.map(M).join(n)].concat(S(r,m)).join(`
`)}function U(r,m){return m==null&&(m=gt(r)),S(r,m).join(`
`)}function A(r){return r.map(F).join(`
`)}function F(r){return r.map(M).join(n)}function M(r){return r==null?"":r instanceof Date?Jt(r):o.test(r+="")?'"'+r.replace(/"/g,'""')+'"':r}return{parse:i,parseRows:c,format:w,formatBody:U,formatRows:A,formatRow:F,formatValue:M}}var Yt=Wt("	"),Zt=Yt.parse;function qt(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);return n.text()}function Qt(n,o){return fetch(n,o).then(qt)}function Xt(n){return function(o,s,i){return arguments.length===2&&typeof s=="function"&&(i=s,s=void 0),Qt(o,s).then(function(c){return n(c,i)})}}var se=Xt(Zt);export{re as S,se as t};
