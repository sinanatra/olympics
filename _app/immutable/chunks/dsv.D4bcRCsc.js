import{s as gt,e as xt,c as Ct,b as vt,f as st,m as Q,i as Et,W as Pt,n as ot,X as St,q as bt,k as X,I as f}from"./scheduler.evRM0l9T.js";import{S as mt,i as pt,b as kt,d as Rt,m as _t,a as Tt,t as It,e as Mt}from"./index.aiZKxZDj.js";import{_ as jt}from"./preload-helper.C1FmrZbK.js";import{b as wt}from"./paths.BPgZR0i-.js";import{f as it,c as G,r as K,p as $,g as at,w as D,a as H,d as ct,e as q,b as J,i as ut,h as Bt,s as Ot,j as At,k as lt}from"./stores.D9mTdjSf.js";import{c as Z}from"./constants.CA4Cg4R8.js";function Nt(e){let o,s,i;return{c(){o=xt("div"),this.h()},l(c){o=Ct(c,"DIV",{style:!0,class:!0}),vt(o).forEach(st),this.h()},h(){Q(o,"style",e[0]),Q(o,"class","m-0")},m(c,S){Et(c,o,S),s||(i=Pt(e[1].call(null,o)),s=!0)},p(c,[S]){S&1&&Q(o,"style",c[0])},i:ot,o:ot,d(c){c&&st(o),s=!1,i()}}}function Ft(e,o){return o.forEach(([s,i])=>e[s]=i),e}function Lt(e,o,s){let{target:i=void 0}=o,{sketch:c=void 0}=o,{parentDivStyle:S="display: block;"}=o,{debug:M=!1}=o,N;const B=St(),j={ref(){B("ref",i)},instance(){B("instance",N)}};function w(r){return s(2,i=r),{destroy(){s(2,i=void 0)}}}return bt(async()=>{const r=await jt(()=>import("./p5.min.D8xqWc_1.js").then(n=>n.p),[],import.meta.url),{default:g}=r,t=Object.entries(r).filter(([n,h])=>h instanceof Function&&n[0]!=="_"&&n!=="default");M&&console.log("available p5 native classes",t),N=new g(n=>(n=Ft(n,t),M&&console.log("p5 instance",n),window._p5Instance=n,c(n)),i),j.ref(),j.instance()}),e.$$set=r=>{"target"in r&&s(2,i=r.target),"sketch"in r&&s(3,c=r.sketch),"parentDivStyle"in r&&s(0,S=r.parentDivStyle),"debug"in r&&s(4,M=r.debug)},[S,w,i,c,M]}class Ut extends mt{constructor(o){super(),pt(this,o,Lt,Nt,gt,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function zt(e){let o,s;return o=new Ut({props:{sketch:e[0]}}),{c(){kt(o.$$.fragment)},l(i){Rt(o.$$.fragment,i)},m(i,c){_t(o,i,c),s=!0},p:ot,i(i){s||(Tt(o.$$.fragment,i),s=!0)},o(i){It(o.$$.fragment,i),s=!1},d(i){Mt(o,i)}}}function ft(e,o){const s=e.x-o.x,i=e.y-o.y;return s*s+i*i}function Dt(e,o,s){let i,c,S;X(e,it,t=>s(1,i=t)),X(e,G,t=>s(2,c=t)),X(e,K,t=>s(3,S=t));let M;const N=t=>{t.preload=()=>{M=t.loadFont(wt+"/font/CircularStd-Book.otf",()=>{at.set(!0)})},t.setup=()=>{t.createCanvas(f(D),f(H)),t.colorMode(t.HSL),t.background(0),t.frameRate(60),f(ct).length>0&&(B(),j())},t.draw=()=>{t.background(0,.1);const n=f(q),h=f(J),a=f(ut),l=f(it),u=f(G),C=u.highlightedEntities||f(Bt),d=u.stroke||f(Ot),m=f(at),p=u.speed||f(At),v=f(lt),b=f(K);f($)&&(B(),j(),$.set(!1)),g(t,n,v,a,C,u,d,p);const E={highlighted:[],normal:[]};Object.values(n).forEach(y=>{if(y.isStationary)return;C.length===0||C.includes(y.moveBy)?E.highlighted.push(y):E.normal.push(y)}),E.highlighted.length>0&&E.highlighted.forEach(y=>{w(t,y,!0,a,l,p,d,u,C)}),E.normal.length>0&&E.normal.forEach(y=>{w(t,y,!1,a,l,p,d,u,C)}),m&&R(t,h,a,u,b)}};function B(){const t=new Map,n={},h=f(G);f(ct).forEach(a=>{const l=a[h.moveBy],u=a[h.clusterBy];n[l]||(n[l]={categories:[],moveBy:l,dataPoints:[],currentCategoryIndex:0,position:{x:0,y:0},t:0,isStationary:!0,trail:[],loopsCompleted:0,loopsToComplete:h.loops||1}),n[l].dataPoints.push(a),n[l].categories.push(u),u!==n[l].categories[0]&&(n[l].isStationary=!1),t.has(u)||t.set(u,[]),t.get(u).push(a)}),q.set(n),J.set(Array.from(t.entries()).sort(([a],[l])=>!isNaN(a)&&!isNaN(l)?+a-+l:a.localeCompare(l)))}function j(){const n=(f(D)-100)/2,h=(f(H)-50*2)/2,a={},l=f(J).length,u=Math.PI;f(J).forEach(([m],p)=>{const v=u+p/l*Math.PI*2,b=f(K)?{x:50+Math.random()*(f(D)-2*50),y:50+Math.random()*(f(H)-2*50)}:{x:f(D)/2+n*Math.cos(v),y:f(H)/2+h*Math.sin(v)};a[m]={x:b.x,y:b.y}}),ut.set(a);const C=f(q),d={};Object.values(C).forEach(m=>{const p=m.categories[0];a[p]&&(m.position={...a[p]},m.t=0,m.currentCategoryIndex=0,m.isStationary&&(d[p]||(d[p]=0),d[p]++))}),q.set(C),lt.set(d)}function w(t,n,h,a,l,u,C,d,m){if(n.isStationary)return;const p=m.length===0||h,v=Z[d.clusterBy]||{start:[0,0,100],end:[0,0,0]},b=n.categories,E=n.currentCategoryIndex,y=n.position;let x=n.t||0;const F=b[E%b.length],W=b[(E+1)%b.length],_=a[F],T=a[W];if(_&&T){const L=r(t,n,v,x,n.isGoingBack);t.stroke(p?[...L]:[0,0,20]),t.strokeWeight(p?C:.5),t.noFill(),t.strokeJoin(t.ROUND);let k={x:0,y:0};if(l){const O={x:_.x-12.5,y:_.y-12.5},rt={x:T.x+25/2,y:T.y+25/2};k.x=t.bezierPoint(_.x,O.x-25,rt.x-25,T.x,x),k.y=t.bezierPoint(_.y,O.y+25,rt.y+25,T.y,x)}else k.x=t.lerp(_.x,T.x,x),k.y=t.lerp(_.y,T.y,x);const I=n.trail||[],Y=I[I.length-1],U=1;(!Y||ft(Y,k)>=U*U)&&(I.length>=4&&I.shift(),I.push({x:k.x,y:k.y}));const A=.004*u;x+=A,x>1&&(x=0,n.currentCategoryIndex=(E+1)%b.length,n.currentCategoryIndex===0?(n.loopsCompleted+=1,n.isGoingBack=!0):n.isGoingBack=!1),n.t=x,y.x=k.x,y.y=k.y,t.beginShape();for(let z=0;z<I.length;z++){const O=I[z];t.vertex(O.x,O.y)}t.endShape()}}function r(t,n,h,a,l){var u;return l?h.end:h.start,l?h.start:h.end,(u=Z[f(G).clusterBy])==null?void 0:u.start}function g(t,n,h,a,l,u,C,d){const m=.004*d;g.trails||(g.trails={});const p=g.trails;Object.keys(h).forEach(v=>{const b=h[v],E=a[v];if(E){p[v]||(p[v]={t:0,trail:[],isGoingBack:!1});const y=p[v];y.t+=m,y.t>1&&(y.t=0);const x=25;E.x-x,E.y-x;const F=E,W=y.t,_={x:E.x-x/2,y:E.y-x/2},T={x:F.x+x/2,y:F.y+x/2};let L={x:0,y:0};L.x=t.bezierPoint(E.x,_.x-x,T.x-x,F.x,W),L.y=t.bezierPoint(E.y,_.y+x,T.y+x,F.y,W);const k=1,I=y.trail[y.trail.length-1];if((!I||ft(I,L)>=k*k)&&(y.trail.length>=10&&y.trail.shift(),y.trail.push(L)),(l.length===0||l.some(U=>{const A=n[U];return A&&A.categories.includes(v)&&A.isStationary}))&&u.clusterBy){const U=Z[u.clusterBy]||{start:[0,0,100],end:[0,0,0]},A=r(t,null,U,y.t,!1),z=t.map(b,1,Math.max(...Object.values(h)),C,C*5);t.noFill(),t.stroke(...A),t.strokeWeight(z),t.strokeJoin(t.ROUND),t.beginShape(),y.trail.forEach(O=>t.vertex(O.x,O.y)),t.endShape()}}})}function R(t,n,h,a,l){var u;t.fill(...((u=Z[a.clusterBy])==null?void 0:u.start)||[0,0,40]),t.noStroke(),t.textFont(M),n.forEach(([C])=>{const d=h[C];if(d){if(t.push(),l)t.translate(d.x,d.y);else{let m=Math.atan2(d.y-f(H)/2,d.x-f(D)/2);m>Math.PI/2||m<-Math.PI/2?(m+=Math.PI,t.textAlign(t.RIGHT,t.BOTTOM)):t.textAlign(t.LEFT,t.TOP),t.translate(d.x,d.y),t.rotate(m)}t.textSize(14),t.text(C,0,0),t.pop()}})}return e.$$.update=()=>{e.$$.dirty&14&&(c.clusterBy||c.moveBy||S||c.speed||i)&&(B(),j(),$.set(!1))},[N,i,c,S]}class oe extends mt{constructor(o){super(),pt(this,o,Dt,zt,gt,{})}}var ht={},tt={},et=34,V=10,nt=13;function yt(e){return new Function("d","return {"+e.map(function(o,s){return JSON.stringify(o)+": d["+s+'] || ""'}).join(",")+"}")}function Ht(e,o){var s=yt(e);return function(i,c){return o(s(i),c,e)}}function dt(e){var o=Object.create(null),s=[];return e.forEach(function(i){for(var c in i)c in o||s.push(o[c]=c)}),s}function P(e,o){var s=e+"",i=s.length;return i<o?new Array(o-i+1).join(0)+s:s}function Vt(e){return e<0?"-"+P(-e,6):e>9999?"+"+P(e,6):P(e,4)}function Wt(e){var o=e.getUTCHours(),s=e.getUTCMinutes(),i=e.getUTCSeconds(),c=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":Vt(e.getUTCFullYear())+"-"+P(e.getUTCMonth()+1,2)+"-"+P(e.getUTCDate(),2)+(c?"T"+P(o,2)+":"+P(s,2)+":"+P(i,2)+"."+P(c,3)+"Z":i?"T"+P(o,2)+":"+P(s,2)+":"+P(i,2)+"Z":s||o?"T"+P(o,2)+":"+P(s,2)+"Z":"")}function Gt(e){var o=new RegExp('["'+e+`
\r]`),s=e.charCodeAt(0);function i(r,g){var R,t,n=c(r,function(h,a){if(R)return R(h,a-1);t=h,R=g?Ht(h,g):yt(h)});return n.columns=t||[],n}function c(r,g){var R=[],t=r.length,n=0,h=0,a,l=t<=0,u=!1;r.charCodeAt(t-1)===V&&--t,r.charCodeAt(t-1)===nt&&--t;function C(){if(l)return tt;if(u)return u=!1,ht;var m,p=n,v;if(r.charCodeAt(p)===et){for(;n++<t&&r.charCodeAt(n)!==et||r.charCodeAt(++n)===et;);return(m=n)>=t?l=!0:(v=r.charCodeAt(n++))===V?u=!0:v===nt&&(u=!0,r.charCodeAt(n)===V&&++n),r.slice(p+1,m-1).replace(/""/g,'"')}for(;n<t;){if((v=r.charCodeAt(m=n++))===V)u=!0;else if(v===nt)u=!0,r.charCodeAt(n)===V&&++n;else if(v!==s)continue;return r.slice(p,m)}return l=!0,r.slice(p,t)}for(;(a=C())!==tt;){for(var d=[];a!==ht&&a!==tt;)d.push(a),a=C();g&&(d=g(d,h++))==null||R.push(d)}return R}function S(r,g){return r.map(function(R){return g.map(function(t){return w(R[t])}).join(e)})}function M(r,g){return g==null&&(g=dt(r)),[g.map(w).join(e)].concat(S(r,g)).join(`
`)}function N(r,g){return g==null&&(g=dt(r)),S(r,g).join(`
`)}function B(r){return r.map(j).join(`
`)}function j(r){return r.map(w).join(e)}function w(r){return r==null?"":r instanceof Date?Wt(r):o.test(r+="")?'"'+r.replace(/"/g,'""')+'"':r}return{parse:i,parseRows:c,format:M,formatBody:N,formatRows:B,formatRow:j,formatValue:w}}var qt=Gt("	"),Jt=qt.parse;function Zt(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function Yt(e,o){return fetch(e,o).then(Zt)}function Qt(e){return function(o,s,i){return arguments.length===2&&typeof s=="function"&&(i=s,s=void 0),Yt(o,s).then(function(c){return e(c,i)})}}var re=Qt(Jt);export{oe as S,re as t};
