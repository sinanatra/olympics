import{s as ot,e as v,t as U,a as N,c as m,b as k,d as G,f as _,g as j,l as Be,m as p,i as te,h as a,E as ue,j as oe,n as Ne,B as Ae,F as ft,k as Ve,G as ie,r as Ce,I as $e,q as gt}from"../chunks/scheduler.evRM0l9T.js";import{S as it,i as at,b as ct,d as ut,m as ht,t as Te,c as _t,a as Fe,e as dt,g as pt}from"../chunks/index.aiZKxZDj.js";import{b as vt}from"../chunks/paths.ykPAfG9Y.js";import{h as me,c as ye,e as Je,b as mt,d as We,w as yt,a as Ct}from"../chunks/stores.D9mTdjSf.js";import{t as bt,S as kt}from"../chunks/dsv.CRPuq5O0.js";import{e as re}from"../chunks/each.D6YF6ztN.js";import{f as Et,a as Bt}from"../chunks/constants.CA4Cg4R8.js";function Ke(t,e,l){const n=t.slice();return n[31]=e[l][0],n[32]=e[l][1],n}function Xe(t,e,l){const n=t.slice();return n[35]=e[l],n}function Ye(t,e,l){const n=t.slice();return n[32]=e[l][0],n[38]=e[l][1],n}function Ze(t,e,l){const n=t.slice();return n[35]=e[l],n}function et(t){let e,l=t[35]+"",n,c,h,d;function g(){return t[21](t[35])}return{c(){e=v("span"),n=U(l),c=N(),this.h()},l(u){e=m(u,"SPAN",{class:!0});var i=k(e);n=G(i,l),c=j(i),i.forEach(_),this.h()},h(){p(e,"class","svelte-1c6c3xn"),ie(e,"selected",t[35]===t[4].clusterBy)},m(u,i){te(u,e,i),a(e,n),a(e,c),h||(d=ue(e,"click",g),h=!0)},p(u,i){t=u,i[0]&128&&l!==(l=t[35]+"")&&oe(n,l),i[0]&144&&ie(e,"selected",t[35]===t[4].clusterBy)},d(u){u&&_(e),h=!1,d()}}}function tt(t){let e,l=t[32]+"",n,c,h,d;function g(){return t[22](t[32])}return{c(){e=v("span"),n=U(l),c=N(),this.h()},l(u){e=m(u,"SPAN",{style:!0,class:!0});var i=k(e);n=G(i,l),c=j(i),i.forEach(_),this.h()},h(){Ce(e,"font-size",t[14](t[38])+"px"),p(e,"class","svelte-1c6c3xn"),ie(e,"highlighted",t[32]==t[4].selectedClusterValue)},m(u,i){te(u,e,i),a(e,n),a(e,c),h||(d=ue(e,"click",g),h=!0)},p(u,i){t=u,i[0]&2&&l!==(l=t[32]+"")&&oe(n,l),i[0]&2&&Ce(e,"font-size",t[14](t[38])+"px"),i[0]&18&&ie(e,"highlighted",t[32]==t[4].selectedClusterValue)},d(u){u&&_(e),h=!1,d()}}}function lt(t){let e,l=t[35]+"",n,c,h,d;function g(){return t[23](t[35])}return{c(){e=v("span"),n=U(l),c=N(),this.h()},l(u){e=m(u,"SPAN",{class:!0});var i=k(e);n=G(i,l),c=j(i),i.forEach(_),this.h()},h(){p(e,"class","svelte-1c6c3xn"),ie(e,"selected",t[35]===t[4].moveBy)},m(u,i){te(u,e,i),a(e,n),a(e,c),h||(d=ue(e,"click",g),h=!0)},p(u,i){t=u,i[0]&64&&l!==(l=t[35]+"")&&oe(n,l),i[0]&80&&ie(e,"selected",t[35]===t[4].moveBy)},d(u){u&&_(e),h=!1,d()}}}function st(t){let e,l=t[31]+"",n,c,h;function d(){return t[24](t[31])}return{c(){e=v("span"),n=U(l),this.h()},l(g){e=m(g,"SPAN",{style:!0,class:!0});var u=k(e);n=G(u,l),u.forEach(_),this.h()},h(){Ce(e,"font-size",t[13](t[32])+"px"),p(e,"class","svelte-1c6c3xn"),ie(e,"highlighted",t[3].includes(t[31]))},m(g,u){te(g,e,u),a(e,n),c||(h=ue(e,"click",d),c=!0)},p(g,u){t=g,u[0]&4&&l!==(l=t[31]+"")&&oe(n,l),u[0]&4&&Ce(e,"font-size",t[13](t[32])+"px"),u[0]&12&&ie(e,"highlighted",t[3].includes(t[31]))},d(g){g&&_(e),c=!1,h()}}}function nt(t){let e,l,n=t[2].length+"",c;return{c(){e=v("p"),l=U("50 out of "),c=U(n),this.h()},l(h){e=m(h,"P",{style:!0});var d=k(e);l=G(d,"50 out of "),c=G(d,n),d.forEach(_),this.h()},h(){Ce(e,"border-top","1px solid"),Ce(e,"padding-top","10px")},m(h,d){te(h,e,d),a(e,l),a(e,c)},p(h,d){d[0]&4&&n!==(n=h[2].length+"")&&oe(c,n)},d(h){h&&_(e)}}}function Vt(t){let e,l,n,c,h,d,g,u="Reset",i,M,E="Copy Config",V,y,H,J,le="Cluster By:",C,R,ae,A,W,be,ce=t[4].clusterBy+"",se,he,de,Y,ke,K,Z,Se="Move By:",Ee,ee,o,f,b,I,P=t[4].moveBy+"",S,T,q,w,$,X,we,je,Ue,fe=re(t[7]),O=[];for(let r=0;r<fe.length;r+=1)O[r]=et(Ze(t,fe,r));let ge=re(t[1]),L=[];for(let r=0;r<ge.length;r+=1)L[r]=tt(Ye(t,ge,r));let _e=re(t[6]),z=[];for(let r=0;r<_e.length;r+=1)z[r]=lt(Xe(t,_e,r));let pe=re(t[2].slice(0,50).sort(rt)),D=[];for(let r=0;r<pe.length;r+=1)D[r]=st(Ke(t,pe,r));let F=t[2].length>50&&nt(t);return{c(){e=v("header"),l=v("div"),n=v("div"),c=U(t[5]),h=N(),d=v("div"),g=v("button"),g.textContent=u,i=N(),M=v("button"),M.textContent=E,V=N(),y=v("div"),H=v("div"),J=v("label"),J.textContent=le,C=N(),R=v("div");for(let r=0;r<O.length;r+=1)O[r].c();ae=N(),A=v("div"),W=v("label"),be=U("Filter "),se=U(ce),he=U(":"),de=N(),Y=v("div");for(let r=0;r<L.length;r+=1)L[r].c();ke=N(),K=v("div"),Z=v("label"),Z.textContent=Se,Ee=N(),ee=v("div");for(let r=0;r<z.length;r+=1)z[r].c();o=N(),f=v("div"),b=v("label"),I=U("Filter "),S=U(P),T=U(":"),q=N(),w=v("input"),$=N(),X=v("div");for(let r=0;r<D.length;r+=1)D[r].c();we=N(),F&&F.c(),this.h()},l(r){e=m(r,"HEADER",{class:!0});var B=k(e);l=m(B,"DIV",{class:!0});var s=k(l);n=m(s,"DIV",{class:!0});var Q=k(n);c=G(Q,t[5]),Q.forEach(_),h=j(s),d=m(s,"DIV",{class:!0});var Ie=k(d);g=m(Ie,"BUTTON",{class:!0,"data-svelte-h":!0}),Be(g)!=="svelte-qy1k7w"&&(g.textContent=u),i=j(Ie),M=m(Ie,"BUTTON",{class:!0,"data-svelte-h":!0}),Be(M)!=="svelte-i2notl"&&(M.textContent=E),Ie.forEach(_),s.forEach(_),V=j(B),y=m(B,"DIV",{class:!0});var ne=k(y);H=m(ne,"DIV",{class:!0});var Pe=k(H);J=m(Pe,"LABEL",{class:!0,"data-svelte-h":!0}),Be(J)!=="svelte-1ekr4iz"&&(J.textContent=le),C=j(Pe),R=m(Pe,"DIV",{class:!0});var Ge=k(R);for(let x=0;x<O.length;x+=1)O[x].l(Ge);Ge.forEach(_),Pe.forEach(_),ae=j(ne),A=m(ne,"DIV",{class:!0});var qe=k(A);W=m(qe,"LABEL",{class:!0});var Oe=k(W);be=G(Oe,"Filter "),se=G(Oe,ce),he=G(Oe,":"),Oe.forEach(_),de=j(qe),Y=m(qe,"DIV",{class:!0});var He=k(Y);for(let x=0;x<L.length;x+=1)L[x].l(He);He.forEach(_),qe.forEach(_),ke=j(ne),K=m(ne,"DIV",{class:!0});var Le=k(K);Z=m(Le,"LABEL",{class:!0,"data-svelte-h":!0}),Be(Z)!=="svelte-8r6yw"&&(Z.textContent=Se),Ee=j(Le),ee=m(Le,"DIV",{class:!0});var Re=k(ee);for(let x=0;x<z.length;x+=1)z[x].l(Re);Re.forEach(_),Le.forEach(_),o=j(ne),f=m(ne,"DIV",{class:!0});var ve=k(f);b=m(ve,"LABEL",{class:!0});var ze=k(b);I=G(ze,"Filter "),S=G(ze,P),T=G(ze,":"),ze.forEach(_),q=j(ve),w=m(ve,"INPUT",{type:!0,placeholder:!0,class:!0}),$=j(ve),X=m(ve,"DIV",{class:!0});var De=k(X);for(let x=0;x<D.length;x+=1)D[x].l(De);we=j(De),F&&F.l(De),De.forEach(_),ve.forEach(_),ne.forEach(_),B.forEach(_),this.h()},h(){p(n,"class","methodology svelte-1c6c3xn"),p(g,"class","reset svelte-1c6c3xn"),p(M,"class","copy-config svelte-1c6c3xn"),p(d,"class","header-buttons svelte-1c6c3xn"),p(l,"class","header-info svelte-1c6c3xn"),p(J,"class","svelte-1c6c3xn"),p(R,"class","options svelte-1c6c3xn"),p(H,"class","category svelte-1c6c3xn"),p(W,"class","svelte-1c6c3xn"),p(Y,"class","options tiny svelte-1c6c3xn"),p(A,"class","filtered-cluster-values svelte-1c6c3xn"),p(Z,"class","svelte-1c6c3xn"),p(ee,"class","options svelte-1c6c3xn"),p(K,"class","category svelte-1c6c3xn"),p(b,"class","svelte-1c6c3xn"),p(w,"type","text"),p(w,"placeholder","Enter your query"),w.value=t[0],p(w,"class","svelte-1c6c3xn"),p(X,"class","options tiny svelte-1c6c3xn"),p(f,"class","filtered-entities svelte-1c6c3xn"),p(y,"class","categories svelte-1c6c3xn"),p(e,"class","svelte-1c6c3xn")},m(r,B){te(r,e,B),a(e,l),a(l,n),a(n,c),a(l,h),a(l,d),a(d,g),a(d,i),a(d,M),a(e,V),a(e,y),a(y,H),a(H,J),a(H,C),a(H,R);for(let s=0;s<O.length;s+=1)O[s]&&O[s].m(R,null);a(y,ae),a(y,A),a(A,W),a(W,be),a(W,se),a(W,he),a(A,de),a(A,Y);for(let s=0;s<L.length;s+=1)L[s]&&L[s].m(Y,null);a(y,ke),a(y,K),a(K,Z),a(K,Ee),a(K,ee);for(let s=0;s<z.length;s+=1)z[s]&&z[s].m(ee,null);a(y,o),a(y,f),a(f,b),a(b,I),a(b,S),a(b,T),a(f,q),a(f,w),a(f,$),a(f,X);for(let s=0;s<D.length;s+=1)D[s]&&D[s].m(X,null);a(X,we),F&&F.m(X,null),je||(Ue=[ue(g,"click",t[11]),ue(M,"click",t[12]),ue(w,"input",t[8])],je=!0)},p(r,B){if(B[0]&32&&oe(c,r[5]),B[0]&656){fe=re(r[7]);let s;for(s=0;s<fe.length;s+=1){const Q=Ze(r,fe,s);O[s]?O[s].p(Q,B):(O[s]=et(Q),O[s].c(),O[s].m(R,null))}for(;s<O.length;s+=1)O[s].d(1);O.length=fe.length}if(B[0]&16&&ce!==(ce=r[4].clusterBy+"")&&oe(se,ce),B[0]&17426){ge=re(r[1]);let s;for(s=0;s<ge.length;s+=1){const Q=Ye(r,ge,s);L[s]?L[s].p(Q,B):(L[s]=tt(Q),L[s].c(),L[s].m(Y,null))}for(;s<L.length;s+=1)L[s].d(1);L.length=ge.length}if(B[0]&592){_e=re(r[6]);let s;for(s=0;s<_e.length;s+=1){const Q=Xe(r,_e,s);z[s]?z[s].p(Q,B):(z[s]=lt(Q),z[s].c(),z[s].m(ee,null))}for(;s<z.length;s+=1)z[s].d(1);z.length=_e.length}if(B[0]&16&&P!==(P=r[4].moveBy+"")&&oe(S,P),B[0]&1&&w.value!==r[0]&&(w.value=r[0]),B[0]&8204){pe=re(r[2].slice(0,50).sort(rt));let s;for(s=0;s<pe.length;s+=1){const Q=Ke(r,pe,s);D[s]?D[s].p(Q,B):(D[s]=st(Q),D[s].c(),D[s].m(X,we))}for(;s<D.length;s+=1)D[s].d(1);D.length=pe.length}r[2].length>50?F?F.p(r,B):(F=nt(r),F.c(),F.m(X,null)):F&&(F.d(1),F=null)},i:Ne,o:Ne,d(r){r&&_(e),Ae(O,r),Ae(L,r),Ae(z,r),Ae(D,r),F&&F.d(),je=!1,ft(Ue)}}}const Me=12,St=30,xe=12,wt=30;function It(t){return Object.values(t).reduce((e,l)=>e+l.dataPoints.length,0)}function Qe(t,e){const l={city:"cities",sport:"sports",height:"heights",noc:"NOCs",team:"teams",weight:"weights",year:"years",age:"ages",event:"events",medal:"medals",name:"names"};return t===1?e:l[e]||`${e}s`}function Pt(t){return t.clusterBy?t.clusterBy:"all clusters"}function qt(t){return t.moveBy?t.moveBy:"participants"}const rt=([t],[e])=>t.localeCompare(e);function Ot(t,e,l){let n,c,h,d,g,u,i,M,E,V,y,H,J,le,C,R,ae;Ve(t,me,o=>l(3,le=o)),Ve(t,ye,o=>l(4,C=o)),Ve(t,Je,o=>l(19,R=o)),Ve(t,mt,o=>l(20,ae=o));let A=C.queryValue||"";function W(o){o.target.value.length>3&&(l(0,A=o.target.value),ye.update(f=>({...f,queryValue:A})))}const be=[],ce=[];function se(o,f){de(),me.set([]),o==="clusterBy"?ye.update(b=>({...b,clusterBy:f})):o==="moveBy"&&ye.update(b=>({...b,moveBy:f}))}function he(o){ye.update(P=>({...P,selectedClusterValue:o}));const f=A.toLowerCase(),b=C.queryCategory||"name",I=[];Object.entries($e(Je)).forEach(([P,S])=>{const T=S.dataPoints.some(w=>{var $;return(($=w[C.clusterBy])==null?void 0:$.toString())===o.toString()}),q=S.dataPoints.some(w=>{var $;return($=w[b])==null?void 0:$.toString().toLowerCase().includes(f)});T&&q&&(I.push(P),S.currentCategoryIndex=0,S.t=0,S.trail=[])}),me.set(I)}function de(){ye.update(o=>({...o,queryValue:"",selectedClusterValue:null})),l(0,A=""),me.set([])}function Y(){const o={title:"",description:"",methodology:"",media:!0,config:{clusterBy:C.clusterBy,moveBy:C.moveBy,selectedClusterValue:C.selectedClusterValue||"",queryValue:A,queryCategory:C.queryCategory||"name",speed:C.speed||3,stroke:C.stroke||1,loops:C.loopsToComplete||1,highlightedEntities:$e(me)}},f=JSON.stringify(o,null,2);navigator.clipboard.writeText(f).then(()=>{alert("Config copied to clipboard!")}).catch(b=>{console.error("Could not copy text: ",b)})}function ke(o){return i===M?Me:Me+(o-i)*(St-Me)/(M-i)}function K(o){return y===H?xe:xe+(o-y)*(wt-xe)/(H-y)}const Z=o=>se("clusterBy",o),Se=o=>he(o),Ee=o=>se("moveBy",o),ee=o=>me.set([o]);return t.$$.update=()=>{t.$$.dirty[0]&1048576&&l(17,h=ae.map(([o])=>o)),t.$$.dirty[0]&524305&&l(15,d=Object.entries(R).filter(([o,f])=>{const b=C.selectedClusterValue?f.dataPoints.some(T=>{var q;return((q=T[C.clusterBy])==null?void 0:q.toString())===C.selectedClusterValue.toString()}):!0,I=A.toLowerCase(),P=C.queryCategory||"name",S=I.length>=3?f.dataPoints.some(T=>{var q;return(q=T[P])==null?void 0:q.toString().toLowerCase().includes(I)}):!0;return b&&S}).reduce((o,[f,b])=>(o[f]=b,o),{})),t.$$.dirty[0]&32768&&l(2,g=Object.entries(d).map(([o,f])=>[o,f.dataPoints.length])),t.$$.dirty[0]&4&&l(18,u=g.map(([o,f])=>f)),t.$$.dirty[0]&262144&&(i=u.length>0?Math.min(...u):0),t.$$.dirty[0]&262144&&(M=u.length>0?Math.max(...u):1),t.$$.dirty[0]&655368&&l(1,E=(()=>{const o=Object.values(R),f=new Set(le),b=f.size>0;let I=h;const P=[];b&&(I=h.filter(S=>{for(let T=0;T<o.length;T++){const q=o[T];if(f.has(q.moveBy)&&q.categories.includes(S))return!0}return!1}));for(let S=0;S<I.length;S++){const T=I[S];let q=0;for(let w=0;w<o.length;w++){const $=o[w];(!b||f.has($.moveBy))&&$.categories.includes(T)&&q++}P.push([T,q])}return P})()),t.$$.dirty[0]&2&&l(16,V=E.map(([o,f])=>f)),t.$$.dirty[0]&65536&&(y=V.length>0?Math.min(...V):0),t.$$.dirty[0]&65536&&(H=V.length>0?Math.max(...V):1),t.$$.dirty[0]&32792&&l(5,J=(()=>{const o=Pt(C),f=qt(C);let I=`This visualization represents ${It(d)} ${Qe(f,"participant")}, as individual ${Qe(f,f)}, who have changed  ${o}.`;if(C.selectedClusterValue&&(I+=` The data is filtered by ${o} = ${C.selectedClusterValue}, showing`),le.length>0){const P=le.length;I+=` ${P} ${Qe(P,"result")} matching the query.`}return I})())},l(7,n=Et.filter(o=>!be.includes(o))),l(6,c=Bt.filter(o=>!ce.includes(o))),[A,E,g,le,C,J,c,n,W,se,he,de,Y,ke,K,d,V,h,u,R,ae,Z,Se,Ee,ee]}class Lt extends it{constructor(e){super(),at(this,e,Ot,Vt,ot,{},null,[-1,-1])}}function zt(t){let e,l="Loading...";return{c(){e=v("p"),e.textContent=l,this.h()},l(n){e=m(n,"P",{class:!0,"data-svelte-h":!0}),Be(e)!=="svelte-qdsr2u"&&(e.textContent=l),this.h()},h(){p(e,"class","svelte-13tgnqv")},m(n,c){te(n,e,c)},i:Ne,o:Ne,d(n){n&&_(e)}}}function Dt(t){let e,l,n;return l=new kt({}),{c(){e=v("div"),ct(l.$$.fragment),this.h()},l(c){e=m(c,"DIV",{class:!0});var h=k(e);ut(l.$$.fragment,h),h.forEach(_),this.h()},h(){p(e,"class","svelte-13tgnqv")},m(c,h){te(c,e,h),ht(l,e,null),n=!0},i(c){n||(Fe(l.$$.fragment,c),n=!0)},o(c){Te(l.$$.fragment,c),n=!1},d(c){c&&_(e),dt(l)}}}function At(t){let e,l,n,c,h,d,g;const u=[Dt,zt],i=[];function M(E,V){return E[0].length>0?0:1}return l=M(t),n=i[l]=u[l](t),d=new Lt({}),{c(){e=v("main"),n.c(),c=N(),h=v("div"),ct(d.$$.fragment),this.h()},l(E){e=m(E,"MAIN",{});var V=k(e);n.l(V),c=j(V),h=m(V,"DIV",{class:!0});var y=k(h);ut(d.$$.fragment,y),y.forEach(_),V.forEach(_),this.h()},h(){p(h,"class","svelte-13tgnqv")},m(E,V){te(E,e,V),i[l].m(e,null),a(e,c),a(e,h),ht(d,h,null),g=!0},p(E,[V]){let y=l;l=M(E),l!==y&&(pt(),Te(i[y],1,1,()=>{i[y]=null}),_t(),n=i[l],n||(n=i[l]=u[l](E),n.c()),Fe(n,1),n.m(e,c))},i(E){g||(Fe(n),Fe(d.$$.fragment,E),g=!0)},o(E){Te(n),Te(d.$$.fragment,E),g=!1},d(E){E&&_(e),i[l].d(),dt(d)}}}function Tt(t,e,l){let n;return Ve(t,We,c=>l(0,n=c)),gt(async()=>{const h=(await bt(vt+"/data/update-until-2022/data.tsv")).map(d=>{const g={};for(const[u,i]of Object.entries(d))g[u]=i!=null&&i.trim()?i:"?";return g});We.set(h),yt.set(window.innerWidth),Ct.set(600)}),[n]}class Gt extends it{constructor(e){super(),at(this,e,Tt,At,ot,{})}}export{Gt as component};
