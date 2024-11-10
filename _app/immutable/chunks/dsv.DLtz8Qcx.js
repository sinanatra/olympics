import{s as gt,e as xt,c as vt,b as Et,f as it,m as G,i as St,T as bt,n as ot,U as Tt,q as _t,k as Q,S as f}from"./scheduler.B5e5MwHY.js";import{S as mt,i as pt,b as Rt,d as Pt,m as kt,a as Mt,t as wt,e as Lt}from"./index.yVqgE-ux.js";import{_ as It}from"./preload-helper.C1FmrZbK.js";import{b as jt}from"./paths.R8FKUeGe.js";import{w as Bt}from"./index.Bat8PTjN.js";import{j as at,a as X,r as K,p as $,k as ct,w as F,i as U,g as lt,e as W,b as q,l as J,h as Ot,s as At,m as Nt,n as ut,c as D}from"./constants.DYV4Q084.js";function Ft(e){let n,s,i;return{c(){n=xt("div"),this.h()},l(c){n=vt(c,"DIV",{style:!0,class:!0}),Et(n).forEach(it),this.h()},h(){G(n,"style",e[0]),G(n,"class","m-0")},m(c,E){St(c,n,E),s||(i=bt(e[1].call(null,n)),s=!0)},p(c,[E]){E&1&&G(n,"style",c[0])},i:ot,o:ot,d(c){c&&it(n),s=!1,i()}}}function Ut(e,n){return n.forEach(([s,i])=>e[s]=i),e}function Dt(e,n,s){let{target:i=void 0}=n,{sketch:c=void 0}=n,{parentDivStyle:E="display: block;"}=n,{debug:k=!1}=n,A;const O=Tt(),M={ref(){O("ref",i)},instance(){O("instance",A)}};function w(o){return s(2,i=o),{destroy(){s(2,i=void 0)}}}return _t(async()=>{const o=await It(()=>import("./p5.min.D8xqWc_1.js").then(a=>a.p),[],import.meta.url),{default:p}=o,r=Object.entries(o).filter(([a,l])=>l instanceof Function&&a[0]!=="_"&&a!=="default");k&&console.log("available p5 native classes",r),A=new p(a=>(a=Ut(a,r),k&&console.log("p5 instance",a),window._p5Instance=a,c(a)),i),M.ref(),M.instance()}),e.$$set=o=>{"target"in o&&s(2,i=o.target),"sketch"in o&&s(3,c=o.sketch),"parentDivStyle"in o&&s(0,E=o.parentDivStyle),"debug"in o&&s(4,k=o.debug)},[E,w,i,c,k]}class zt extends mt{constructor(n){super(),pt(this,n,Dt,Ft,gt,{target:2,sketch:3,parentDivStyle:0,debug:4})}}const yt=Bt({entityCompletedLoop:!1,completedEntity:null});function Ht(e){yt.set({entityCompletedLoop:!0,completedEntity:e})}function ie(){yt.set({entityCompletedLoop:!1,completedEntity:null})}function Vt(e){let n,s;return n=new zt({props:{sketch:e[0]}}),{c(){Rt(n.$$.fragment)},l(i){Pt(n.$$.fragment,i)},m(i,c){kt(n,i,c),s=!0},p:ot,i(i){s||(Mt(n.$$.fragment,i),s=!0)},o(i){wt(n.$$.fragment,i),s=!1},d(i){Lt(n,i)}}}function ft(e,n){const s=e.x-n.x,i=e.y-n.y;return s*s+i*i}function Wt(e,n,s){let i,c,E;Q(e,at,t=>s(1,i=t)),Q(e,X,t=>s(2,c=t)),Q(e,K,t=>s(3,E=t));let k;const A=t=>{t.preload=()=>{k=t.loadFont(jt+"/font/CircularStd-Book.otf",()=>{ct.set(!0)})},t.setup=()=>{t.createCanvas(f(F),f(U)),t.colorMode(t.HSL),t.background(0),t.frameRate(60),f(lt).length>0&&(O(),M())},t.draw=()=>{t.background(0,.1);const r=f(W),a=f(q),l=f(J),u=f(at),h=f(X),d=h.highlightedEntities||f(Ot),g=h.stroke||f(At),y=f(ct),C=h.speed||f(Nt),b=f(ut),m=f(K);f($)&&(O(),M(),$.set(!1)),o(t,r,b,l,d,h,g,C);const T={highlighted:[],normal:[]};Object.values(r).forEach(x=>{if(x.isStationary)return;d.length===0||d.includes(x.moveBy)?T.highlighted.push(x):T.normal.push(x)}),T.highlighted.length>0&&T.highlighted.forEach(x=>{w(t,x,!0,l,u,C,g,h,d)}),T.normal.length>0&&T.normal.forEach(x=>{w(t,x,!1,l,u,C,g,h,d)}),y&&p(t,a,l,h,m)}};function O(){const t=new Map,r={},a=f(X);f(lt).forEach(l=>{const u=l[a.moveBy],h=l[a.clusterBy];r[u]||(r[u]={categories:[],moveBy:u,dataPoints:[],currentCategoryIndex:0,position:{x:0,y:0},t:0,isStationary:!0,trail:[],loopsCompleted:0,loopsToComplete:a.loops||1}),r[u].dataPoints.push(l),r[u].categories.push(h),h!==r[u].categories[0]&&(r[u].isStationary=!1),t.has(h)||t.set(h,[]),t.get(h).push(l)}),W.set(r),q.set(Array.from(t.entries()).sort(([l],[u])=>!isNaN(l)&&!isNaN(u)?+l-+u:l.localeCompare(u)))}function M(){const r=(f(F)-100)/2,a=(f(U)-50*2)/2,l={};f(q).forEach(([d],g)=>{const y=g/f(q).length*Math.PI*2,C=f(K)?{x:50+Math.random()*(f(F)-2*50),y:50+Math.random()*(f(U)-2*50)}:{x:f(F)/2+r*Math.cos(y),y:f(U)/2+a*Math.sin(y)};l[d]={x:C.x+(Math.random()-.5),y:C.y+(Math.random()-.5)}}),J.set(l);const u=f(W),h={};Object.values(u).forEach(d=>{const g=d.categories[0];f(J)[g]&&(d.position={...f(J)[g]},d.t=0,d.currentCategoryIndex=0,d.isStationary&&(h[g]||(h[g]=0),h[g]++))}),W.set(u),ut.set(h)}function w(t,r,a,l,u,h,d,g,y){var S;if(r.isStationary)return;const C=y.length===0||a,b=C&&D[g.clusterBy]?(S=D[g.clusterBy])==null?void 0:S.start:[0,0,20];t.stroke(...b),t.strokeWeight(C?d:1),t.noFill(),t.strokeJoin(t.ROUND);const m=r.categories,T=r.currentCategoryIndex,x=r.position;let _=r.t||0;const Z=1,rt=4;if(r.trail||(r.trail=[]),m.length>0){const H=m[T%m.length],V=m[(T+1)%m.length],L=l[H],I=l[V];if(L&&I){let R={x:0,y:0};if(u){const B={x:L.x-25,y:L.y-25},st={x:I.x+50/2,y:I.y+50/2};R.x=t.bezierPoint(L.x,B.x-50,st.x-50,I.x,_),R.y=t.bezierPoint(L.y,B.y+50,st.y+50,I.y,_)}else R.x=t.lerp(L.x,I.x,_),R.y=t.lerp(L.y,I.y,_);const P=r.trail,N=P[P.length-1];(!N||ft(N,R)>=Z*Z)&&(P.length>=rt&&P.shift(),P.push({x:R.x,y:R.y}));const Y=.004*h;_+=Y,_>1&&(_=0,r.currentCategoryIndex=(T+1)%m.length,r.currentCategoryIndex===0&&(r.loopsCompleted+=1,r.loopsCompleted>=r.loopsToComplete&&a&&Ht(r.moveBy))),r.t=_,x.x=R.x,x.y=R.y,t.beginShape();for(let j=0;j<P.length;j++){const B=P[j];t.vertex(B.x,B.y)}t.endShape()}}}function o(t,r,a,l,u,h,d,g){const y=a,C=.004*g;o.trails||(o.trails={});const b=o.trails;Object.keys(y).forEach(m=>{var _;const T=y[m],x=l[m];if(x){b[m]||(b[m]={t:Math.random(),trail:[]});const S=b[m];S.t+=C,S.t>1&&(S.t=0);const H=S.t*t.TWO_PI,V=2+Math.sqrt(T),L=x.x+V*t.cos(H),I=x.y+V*t.sin(H),R={x:L,y:I},P=S.trail[S.trail.length-1];(!P||ft(P,R)>=2*2)&&(S.trail.length>=4&&S.trail.shift(),S.trail.push(R));const N=u.length===0||u.some(j=>{const B=r[j];return B&&B.categories.includes(m)&&B.isStationary}),Y=N&&D[h.clusterBy]?(_=D[h.clusterBy])==null?void 0:_.start:[0,0,40];t.noFill(),t.stroke(...Y),t.strokeWeight(N?d:1),t.strokeJoin(t.ROUND),t.beginShape(),S.trail.forEach(j=>t.vertex(j.x,j.y)),t.endShape()}})}function p(t,r,a,l,u){var h;t.fill(...((h=D[l.clusterBy])==null?void 0:h.start)||[0,0,40]),t.noStroke(),t.textFont(k),r.forEach(([d])=>{const g=a[d];if(g){if(t.push(),u)t.translate(g.x,g.y);else{let y=Math.atan2(g.y-f(U)/2,g.x-f(F)/2);y>Math.PI/2||y<-Math.PI/2?(y+=Math.PI,t.textAlign(t.RIGHT,t.BOTTOM)):t.textAlign(t.LEFT,t.TOP),t.translate(g.x,g.y),t.rotate(y)}t.textSize(14),t.text(d,0,0),t.pop()}})}return e.$$.update=()=>{e.$$.dirty&14&&(c.clusterBy||c.moveBy||E||c.speed||i)&&(O(),M(),$.set(!1))},[A,i,c,E]}class ae extends mt{constructor(n){super(),pt(this,n,Wt,Vt,gt,{})}}var ht={},tt={},et=34,z=10,nt=13;function Ct(e){return new Function("d","return {"+e.map(function(n,s){return JSON.stringify(n)+": d["+s+'] || ""'}).join(",")+"}")}function qt(e,n){var s=Ct(e);return function(i,c){return n(s(i),c,e)}}function dt(e){var n=Object.create(null),s=[];return e.forEach(function(i){for(var c in i)c in n||s.push(n[c]=c)}),s}function v(e,n){var s=e+"",i=s.length;return i<n?new Array(n-i+1).join(0)+s:s}function Jt(e){return e<0?"-"+v(-e,6):e>9999?"+"+v(e,6):v(e,4)}function Zt(e){var n=e.getUTCHours(),s=e.getUTCMinutes(),i=e.getUTCSeconds(),c=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":Jt(e.getUTCFullYear())+"-"+v(e.getUTCMonth()+1,2)+"-"+v(e.getUTCDate(),2)+(c?"T"+v(n,2)+":"+v(s,2)+":"+v(i,2)+"."+v(c,3)+"Z":i?"T"+v(n,2)+":"+v(s,2)+":"+v(i,2)+"Z":s||n?"T"+v(n,2)+":"+v(s,2)+"Z":"")}function Yt(e){var n=new RegExp('["'+e+`
\r]`),s=e.charCodeAt(0);function i(o,p){var t,r,a=c(o,function(l,u){if(t)return t(l,u-1);r=l,t=p?qt(l,p):Ct(l)});return a.columns=r||[],a}function c(o,p){var t=[],r=o.length,a=0,l=0,u,h=r<=0,d=!1;o.charCodeAt(r-1)===z&&--r,o.charCodeAt(r-1)===nt&&--r;function g(){if(h)return tt;if(d)return d=!1,ht;var C,b=a,m;if(o.charCodeAt(b)===et){for(;a++<r&&o.charCodeAt(a)!==et||o.charCodeAt(++a)===et;);return(C=a)>=r?h=!0:(m=o.charCodeAt(a++))===z?d=!0:m===nt&&(d=!0,o.charCodeAt(a)===z&&++a),o.slice(b+1,C-1).replace(/""/g,'"')}for(;a<r;){if((m=o.charCodeAt(C=a++))===z)d=!0;else if(m===nt)d=!0,o.charCodeAt(a)===z&&++a;else if(m!==s)continue;return o.slice(b,C)}return h=!0,o.slice(b,r)}for(;(u=g())!==tt;){for(var y=[];u!==ht&&u!==tt;)y.push(u),u=g();p&&(y=p(y,l++))==null||t.push(y)}return t}function E(o,p){return o.map(function(t){return p.map(function(r){return w(t[r])}).join(e)})}function k(o,p){return p==null&&(p=dt(o)),[p.map(w).join(e)].concat(E(o,p)).join(`
`)}function A(o,p){return p==null&&(p=dt(o)),E(o,p).join(`
`)}function O(o){return o.map(M).join(`
`)}function M(o){return o.map(w).join(e)}function w(o){return o==null?"":o instanceof Date?Zt(o):n.test(o+="")?'"'+o.replace(/"/g,'""')+'"':o}return{parse:i,parseRows:c,format:k,formatBody:A,formatRows:O,formatRow:M,formatValue:w}}var Gt=Yt("	"),Qt=Gt.parse;function Xt(e){if(!e.ok)throw new Error(e.status+" "+e.statusText);return e.text()}function Kt(e,n){return fetch(e,n).then(Xt)}function $t(e){return function(n,s,i){return arguments.length===2&&typeof s=="function"&&(i=s,s=void 0),Kt(n,s).then(function(c){return e(c,i)})}}var ce=$t(Qt);export{ae as S,yt as l,Ht as m,ie as r,ce as t};