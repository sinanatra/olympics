const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./p5.min.7_hCuTSf.js","./_commonjsHelpers.Cpj98o6Y.js"])))=>i.map(i=>d[i]);
import{s as Ct,e as St,c as bt,b as Pt,f as it,m as $,i as Rt,X as kt,n as rt,Y as wt,p as _t,k as Y,v as at,w as l}from"./scheduler.3V_Ra38V.js";import{S as xt,i as vt,b as Tt,d as jt,m as Bt,t as It,a as Mt,e as At}from"./index.CryiHHAf.js";import{_ as Nt}from"./preload-helper.C1FmrZbK.js";import{b as Ot}from"./paths.IT8BA0z6.js";import{w as Lt}from"./index.BUEIwfTQ.js";import{w as z,i as ct,b as Z,r as lt,p as tt,j as ut,h as W,g as Ft,d as ft,e as V,k as Q,l as ht,a as zt,s as Ut,m as Ht,n as dt,c as Gt}from"./stores.IZb_Ax2o.js";import{c as X}from"./constants.DQ_K6H8T.js";function Dt(e){let n,r,s;return{c(){n=St("div"),this.h()},l(u){n=bt(u,"DIV",{style:!0,class:!0}),Pt(n).forEach(it),this.h()},h(){$(n,"style",e[0]),$(n,"class","m-0")},m(u,b){Rt(u,n,b),r||(s=kt(e[1].call(null,n)),r=!0)},p(u,[b]){b&1&&$(n,"style",u[0])},i:rt,o:rt,d(u){u&&it(n),r=!1,s()}}}function Jt(e,n){return n.forEach(([r,s])=>e[r]=s),e}function Wt(e,n,r){let{target:s=void 0}=n,{sketch:u=void 0}=n,{parentDivStyle:b="display: block;"}=n,{debug:k=!1}=n,L;const U=wt(),H={ref(){U("ref",s)},instance(){U("instance",L)}};function B(o){return r(2,s=o),{destroy(){r(2,s=void 0)}}}return _t(async()=>{const o=await Nt(()=>import("./p5.min.7_hCuTSf.js").then(d=>d.p),__vite__mapDeps([0,1]),import.meta.url),{default:x}=o,y=Object.entries(o).filter(([d,t])=>t instanceof Function&&d[0]!=="_"&&d!=="default");k&&console.log("available p5 native classes",y),L=new x(d=>(d=Jt(d,y),k&&console.log("p5 instance",d),window._p5Instance=d,u(d)),s),H.ref(),H.instance()}),e.$$set=o=>{"target"in o&&r(2,s=o.target),"sketch"in o&&r(3,u=o.sketch),"parentDivStyle"in o&&r(0,b=o.parentDivStyle),"debug"in o&&r(4,k=o.debug)},[b,B,s,u,k]}class Yt extends xt{constructor(n){super(),vt(this,n,Wt,Dt,Ct,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const gt=Lt(!1);function Zt(e){let n,r;return n=new Yt({props:{sketch:e[0]}}),{c(){Tt(n.$$.fragment)},l(s){jt(n.$$.fragment,s)},m(s,u){Bt(n,s,u),r=!0},p:rt,i(s){r||(It(n.$$.fragment,s),r=!0)},o(s){Mt(n.$$.fragment,s),r=!1},d(s){At(n,s)}}}function mt(e,n){const r=e.x-n.x,s=e.y-n.y;return r*r+s*s}function qt(e,n,r){let s,u,b,k,L;Y(e,gt,t=>r(6,s=t)),Y(e,z,t=>r(7,u=t)),Y(e,ct,t=>r(1,b=t)),Y(e,Z,t=>r(2,k=t)),Y(e,lt,t=>r(3,L=t));let U;const H=t=>{t.preload=()=>{U=t.loadFont(Ot+"/font/CircularStd-Book.otf",()=>{ut.set(!0)})},t.windowResized=()=>{at(z,u=t.windowWidth,u),t.resizeCanvas(t.windowWidth,l(W)),B()},t.setup=()=>{const i=t.createCanvas(l(z),l(W));Ft.set(i.canvas),t.colorMode(t.HSL),t.background(0),t.frameRate(30),l(ft).length>0&&B()},t.draw=()=>{t.background(0,.1);const i=l(V),C=l(Q),c=l(ht),f=l(ct),a=l(Z),m=a.highlightedEntities||l(zt),g=a.stroke||l(Ut),p=l(ut),v=a.speed||l(Ht),N=l(dt),_=l(lt),P=Math.max(...Object.values(N));l(tt)&&(B(),tt.set(!1)),y(t,i,N,P,c,m,a,g,v,f);const T={highlighted:[],normal:[]};if(Object.values(i).forEach(h=>{if(h.isStationary)return;m.length===0||m.includes(h.moveBy)?T.highlighted.push(h):T.normal.push(h)}),T.highlighted.length>0&&T.highlighted.forEach(h=>{x(t,h,!0,c,f,v,g,a,m)}),T.normal.length>0&&T.normal.forEach(h=>{x(t,h,!1,c,f,v,g,a,m)}),p){d(t,C,c,a,_),t.textAlign(t.CENTER,t.CENTER);let h=450;l(z)<600?(t.textSize(12),h=300):t.textSize(18),t.text(l(Z).caption||l(Gt),l(z)/2-h/2,l(W)/2,h)}}};function B(){const t=new Map,i={},C=l(Z);l(ft).forEach(c=>{const f=c[C.moveBy],a=c[C.clusterBy];!f||f==="NA"||!a||a==="NA"||(i[f]||(i[f]={categories:[],moveBy:f,dataPoints:[],currentCategoryIndex:0,position:null,t:0,isStationary:!0,trail:[],loopsCompleted:0,loopsToComplete:C.loops||1}),i[f].dataPoints.push(c),i[f].categories.push(a),a!==i[f].categories[0]&&(i[f].isStationary=!1),t.has(a)||t.set(a,[]),t.get(a).push(c))}),V.set(i),Q.set(Array.from(t.entries()).sort(([c],[f])=>!isNaN(c)&&!isNaN(f)?+c-+f:c.localeCompare(f))),o()}function o(){const i=(l(z)-100)/2,C=(l(W)-50*2)/2,c={},f=l(Q).length,a=Math.PI;l(Q).forEach(([p],v)=>{const N=a+v/f*Math.PI*2;c[p]={x:l(z)/2+i*Math.cos(N),y:l(W)/2+C*Math.sin(N)}}),ht.set(c);const m=l(V),g={};Object.values(m).forEach(p=>{const v=p.categories[0];c[v]&&(p.position={...c[v]},p.t=0,p.currentCategoryIndex=0,p.isStationary&&(g[v]||(g[v]=0),g[v]++))}),V.set(m),y.trails={},dt.set(g)}function x(t,i,C,c,f,a,m,g,p){if(i.isStationary||!i.position)return;const v=p.length===0||C,N=X[g.clusterBy]||{start:[0,0,100],end:[0,0,0]},_=i.categories,P=i.currentCategoryIndex,T=i.position;let h=i.t||0;const G=_[P%_.length],R=_[(P+1)%_.length],E=c[G],I=c[R];if(E&&I){const J=i.isGoingBack?[0,0,20]:w(t,i,N,h,i.isGoingBack);m=i.isGoingBack?m/3:m,t.stroke(v?[...J]:[0,0,20]),t.strokeWeight(v?m:.5),t.noFill(),t.strokeJoin(t.ROUND);let j={x:null,y:null};if(f){const F={x:E.x-12.5,y:E.y-12.5},st={x:I.x+25/2,y:I.y+25/2};j.x=t.bezierPoint(E.x,F.x-25,st.x-25,I.x,h),j.y=t.bezierPoint(E.y,F.y+25,st.y+25,I.y,h)}else j.x=t.lerp(E.x,I.x,h),j.y=t.lerp(E.y,I.y,h);const M=i.trail||[],K=M[M.length-1],O=1;(!K||mt(K,j)>=O*O)&&(M.length>=2&&M.shift(),M.push({x:j.x,y:j.y}));const A=.004*a;h+=A,h>1&&(h=0,i.currentCategoryIndex=(P+1)%_.length,i.currentCategoryIndex==_.length-1?(i.isGoingBack=!0,s!==!0&&!i.isStationary&&at(gt,s=!0,s)):i.isGoingBack=!1),i.t=h,T.x=j.x,T.y=j.y,t.beginShape();for(let D=0;D<M.length;D++){const F=M[D];t.vertex(F.x,F.y)}t.endShape()}}function w(t,i,C,c,f){var a;return f?C.end:C.start,f?C.start:C.end,(a=X[l(Z).clusterBy])==null?void 0:a.start}function y(t,i,C,c,f,a,m,g,p,v){const N=.004*p;y.trails||(y.trails={});const _=y.trails;Object.keys(C).forEach(P=>{const T=C[P],h=f[P],G=h;if(P&&T&&h){_[P]||(_[P]={t:null,trail:[],isGoingBack:!1});const R=_[P];R.t+=N,R.t>1&&(R.t=null);const E=25,I=R.t;let J={x:0,y:0};if(v){const O={x:h.x-E/2,y:h.y-E/2},A={x:G.x+E/2,y:G.y+E/2};J.x=t.bezierPoint(h.x,O.x-E,A.x-E,G.x,I),J.y=t.bezierPoint(h.y,O.y+E,A.y+E,G.y,I)}const j=1,M=R.trail[R.trail.length-1];if((!M||mt(M,J)>=j*j)&&(R.trail.length>=10&&R.trail.shift(),R.trail.push(J)),(a.length===0||a.some(O=>{const A=i[O];return A&&A.categories.includes(P)&&A.isStationary}))&&m.clusterBy){const O=X[m.clusterBy]||{start:[0,0,100],end:[0,0,0]},A=w(t,null,O,R.t,!1),D=t.map(T,1,c,g,g*5);t.noFill(),t.stroke(...A),t.strokeWeight(a.length>10?D:m.stroke||D),t.strokeJoin(t.ROUND),t.beginShape(),R.trail.forEach(F=>t.vertex(F.x,F.y)),t.endShape()}}})}function d(t,i,C,c,f){var a;t.fill(...((a=X[c.clusterBy])==null?void 0:a.end)||[0,0,20]),t.noStroke(),t.textFont(U),i.forEach(([m])=>{const g=C[m];if(g){if(t.push(),f)t.translate(g.x,g.y);else{let p=Math.atan2(g.y-l(W)/2,g.x-l(z)/2);p>Math.PI/2||p<-Math.PI/2?(p+=Math.PI,t.textAlign(t.RIGHT,t.BOTTOM)):t.textAlign(t.LEFT,t.TOP),t.translate(g.x,g.y),t.rotate(p)}t.textSize(14),t.text(m,0,0),t.pop()}})}return e.$$.update=()=>{e.$$.dirty&14&&(k.clusterBy||k.moveBy||L||k.speed||b)&&(B(),tt.set(!1))},[H,b,k,L]}class fe extends xt{constructor(n){super(),vt(this,n,qt,Zt,Ct,{})}}var pt={},et={},nt=34,q=10,ot=13;function Et(e){return new Function("d","return {"+e.map(function(n,r){return JSON.stringify(n)+": d["+r+'] || ""'}).join(",")+"}")}function Vt(e,n){var r=Et(e);return function(s,u){return n(r(s),u,e)}}function yt(e){var n=Object.create(null),r=[];return e.forEach(function(s){for(var u in s)u in n||r.push(n[u]=u)}),r}function S(e,n){var r=e+"",s=r.length;return s<n?new Array(n-s+1).join(0)+r:r}function Qt(e){return e<0?"-"+S(-e,6):e>9999?"+"+S(e,6):S(e,4)}function Xt(e){var n=e.getUTCHours(),r=e.getUTCMinutes(),s=e.getUTCSeconds(),u=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":Qt(e.getUTCFullYear())+"-"+S(e.getUTCMonth()+1,2)+"-"+S(e.getUTCDate(),2)+(u?"T"+S(n,2)+":"+S(r,2)+":"+S(s,2)+"."+S(u,3)+"Z":s?"T"+S(n,2)+":"+S(r,2)+":"+S(s,2)+"Z":r||n?"T"+S(n,2)+":"+S(r,2)+"Z":"")}function Kt(e){var n=new RegExp('["'+e+`
\r]`),r=e.charCodeAt(0);function s(o,x){var w,y,d=u(o,function(t,i){if(w)return w(t,i-1);y=t,w=x?Vt(t,x):Et(t)});return d.columns=y||[],d}function u(o,x){var w=[],y=o.length,d=0,t=0,i,C=y<=0,c=!1;o.charCodeAt(y-1)===q&&--y,o.charCodeAt(y-1)===ot&&--y;function f(){if(C)return et;if(c)return c=!1,pt;var m,g=d,p;if(o.charCodeAt(g)===nt){for(;d++<y&&o.charCodeAt(d)!==nt||o.charCodeAt(++d)===nt;);return(m=d)>=y?C=!0:(p=o.charCodeAt(d++))===q?c=!0:p===ot&&(c=!0,o.charCodeAt(d)===q&&++d),o.slice(g+1,m-1).replace(/""/g,'"')}for(;d<y;){if((p=o.charCodeAt(m=d++))===q)c=!0;else if(p===ot)c=!0,o.charCodeAt(d)===q&&++d;else if(p!==r)continue;return o.slice(g,m)}return C=!0,o.slice(g,y)}for(;(i=f())!==et;){for(var a=[];i!==pt&&i!==et;)a.push(i),i=f();x&&(a=x(a,t++))==null||w.push(a)}return w}function b(o,x){return o.map(function(w){return x.map(function(y){return B(w[y])}).join(e)})}function k(o,x){return x==null&&(x=yt(o)),[x.map(B).join(e)].concat(b(o,x)).join(`
`)}function L(o,x){return x==null&&(x=yt(o)),b(o,x).join(`
`)}function U(o){return o.map(H).join(`
`)}function H(o){return o.map(B).join(e)}function B(o){return o==null?"":o instanceof Date?Xt(o):n.test(o+="")?'"'+o.replace(/"/g,'""')+'"':o}return{parse:s,parseRows:u,format:k,formatBody:L,formatRows:U,formatRow:H,formatValue:B}}var $t=Kt("	"),te=$t.parse;function ee(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function ne(e,n){return fetch(e,n).then(ee)}function oe(e){return function(n,r,s){return arguments.length===2&&typeof r=="function"&&(s=r,r=void 0),ne(n,r).then(function(u){return e(u,s)})}}var he=oe(te);export{fe as S,gt as m,he as t};
