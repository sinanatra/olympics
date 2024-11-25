import{s as tt,e as C,t as G,a as D,c as k,b as E,d as H,f as _,g as N,l as Se,m as y,i as Z,h as u,E as ce,j as se,n as Le,B as ze,F as at,k as Be,G as me,r as ye,I as Ue,q as ct}from"../chunks/scheduler.evRM0l9T.js";import{S as lt,i as st,b as nt,d as rt,m as ot,t as Te,c as ut,a as Fe,e as it,g as ht}from"../chunks/index.aiZKxZDj.js";import{b as ft}from"../chunks/paths.CpYNa4W7.js";import{h as ve,c as te,e as Qe,b as dt,d as Ge,w as gt,a as pt}from"../chunks/stores.D9mTdjSf.js";import{t as _t,S as vt}from"../chunks/dsv.hIfSZg2Q.js";import{e as le}from"../chunks/each.D6YF6ztN.js";import{f as mt,a as yt}from"../chunks/constants.CA4Cg4R8.js";function He(t,e,l){const n=t.slice();return n[33]=e[l][0],n[34]=e[l][1],n}function Re(t,e,l){const n=t.slice();return n[34]=e[l][0],n[37]=e[l][1],n}function $e(t,e,l){const n=t.slice();return n[40]=e[l],n}function Je(t,e,l){const n=t.slice();return n[43]=e[l],n}function We(t){let e,l=t[43].label+"",n,i,a,h="x",d,f,c;function $(){return t[22](t[43])}return{c(){e=C("span"),n=G(l),i=D(),a=C("button"),a.textContent=h,d=D(),this.h()},l(v){e=k(v,"SPAN",{class:!0});var p=E(e);n=H(p,l),i=N(p),a=k(p,"BUTTON",{class:!0,"data-svelte-h":!0}),Se(a)!=="svelte-1drtrua"&&(a.textContent=h),d=N(p),p.forEach(_),this.h()},h(){y(a,"class","svelte-hkg2yx"),y(e,"class","filter svelte-hkg2yx")},m(v,p){Z(v,e,p),u(e,n),u(e,i),u(e,a),u(e,d),f||(c=ce(e,"click",$),f=!0)},p(v,p){t=v,p[0]&8&&l!==(l=t[43].label+"")&&se(n,l)},d(v){v&&_(e),f=!1,c()}}}function Ke(t){let e,l=t[40]+"",n,i,a,h;function d(){return t[23](t[40])}return{c(){e=C("span"),n=G(l),i=D(),this.h()},l(f){e=k(f,"SPAN",{class:!0});var c=E(e);n=H(c,l),i=N(c),c.forEach(_),this.h()},h(){y(e,"class","svelte-hkg2yx"),me(e,"selected",t[40]===t[5].clusterBy)},m(f,c){Z(f,e,c),u(e,n),u(e,i),a||(h=ce(e,"click",d),a=!0)},p(f,c){t=f,c[0]&128&&l!==(l=t[40]+"")&&se(n,l),c[0]&160&&me(e,"selected",t[40]===t[5].clusterBy)},d(f){f&&_(e),a=!1,h()}}}function Xe(t){let e,l=t[34]+"",n,i,a,h;function d(){return t[24](t[34])}return{c(){e=C("span"),n=G(l),i=D(),this.h()},l(f){e=k(f,"SPAN",{style:!0,class:!0});var c=E(e);n=H(c,l),i=N(c),c.forEach(_),this.h()},h(){ye(e,"font-size",t[15](t[37])+"px"),y(e,"class","svelte-hkg2yx"),me(e,"highlighted",t[34]==t[5].selectedClusterValue)},m(f,c){Z(f,e,c),u(e,n),u(e,i),a||(h=ce(e,"click",d),a=!0)},p(f,c){t=f,c[0]&2&&l!==(l=t[34]+"")&&se(n,l),c[0]&2&&ye(e,"font-size",t[15](t[37])+"px"),c[0]&34&&me(e,"highlighted",t[34]==t[5].selectedClusterValue)},d(f){f&&_(e),a=!1,h()}}}function Ye(t){let e,l=t[33]+"",n,i,a;function h(){return t[25](t[33])}return{c(){e=C("span"),n=G(l),this.h()},l(d){e=k(d,"SPAN",{style:!0,class:!0});var f=E(e);n=H(f,l),f.forEach(_),this.h()},h(){ye(e,"font-size",t[14](t[34])+"px"),y(e,"class","svelte-hkg2yx"),me(e,"highlighted",t[4].includes(t[33]))},m(d,f){Z(d,e,f),u(e,n),i||(a=ce(e,"click",h),i=!0)},p(d,f){t=d,f[0]&4&&l!==(l=t[33]+"")&&se(n,l),f[0]&4&&ye(e,"font-size",t[14](t[34])+"px"),f[0]&20&&me(e,"highlighted",t[4].includes(t[33]))},d(d){d&&_(e),i=!1,a()}}}function Ze(t){let e,l,n=t[2].length+"",i;return{c(){e=C("p"),l=G("50 out of "),i=G(n),this.h()},l(a){e=k(a,"P",{style:!0});var h=E(e);l=H(h,"50 out of "),i=H(h,n),h.forEach(_),this.h()},h(){ye(e,"border-top","1px solid"),ye(e,"padding-top","10px")},m(a,h){Z(a,e,h),u(e,l),u(e,i)},p(a,h){h[0]&4&&n!==(n=a[2].length+"")&&se(i,n)},d(a){a&&_(e)}}}function Ct(t){let e,l,n,i,a,h,d,f,c,$="Reset",v,p,M="Copy Config",ne,Q,F,m,re="Cluster By:",oe,q,Ce,J,W,ue,ee=t[5].clusterBy+"",ie,ke,be,Y,Ve,R,K,Ee,ae=t[5].moveBy+"",r,g,S,b,A,V,P,w,X,x=le(t[3]),I=[];for(let o=0;o<x.length;o+=1)I[o]=We(Je(t,x,o));let he=le(t[7]),O=[];for(let o=0;o<he.length;o+=1)O[o]=Ke($e(t,he,o));let fe=le(t[1]),z=[];for(let o=0;o<fe.length;o+=1)z[o]=Xe(Re(t,fe,o));let de=le(t[2].slice(0,50).sort(et)),T=[];for(let o=0;o<de.length;o+=1)T[o]=Ye(He(t,de,o));let L=t[2].length>50&&Ze(t);return{c(){e=C("header"),l=C("div"),n=C("div"),i=G(t[6]),a=D(),h=C("div"),d=C("div");for(let o=0;o<I.length;o+=1)I[o].c();f=D(),c=C("button"),c.textContent=$,v=D(),p=C("button"),p.textContent=M,ne=D(),Q=C("div"),F=C("div"),m=C("label"),m.textContent=re,oe=D(),q=C("div");for(let o=0;o<O.length;o+=1)O[o].c();Ce=D(),J=C("div"),W=C("label"),ue=G("Filter "),ie=G(ee),ke=G(":"),be=D(),Y=C("div");for(let o=0;o<z.length;o+=1)z[o].c();Ve=D(),R=C("div"),K=C("label"),Ee=G("Filter "),r=G(ae),g=G(":"),S=D(),b=C("input"),A=D(),V=C("div");for(let o=0;o<T.length;o+=1)T[o].c();P=D(),L&&L.c(),this.h()},l(o){e=k(o,"HEADER",{class:!0});var B=E(e);l=k(B,"DIV",{class:!0});var s=E(l);n=k(s,"DIV",{class:!0});var U=E(n);i=H(U,t[6]),U.forEach(_),a=N(s),h=k(s,"DIV",{class:!0});var ge=E(h);d=k(ge,"DIV",{class:!0});var xe=E(d);for(let j=0;j<I.length;j+=1)I[j].l(xe);xe.forEach(_),f=N(ge),c=k(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Se(c)!=="svelte-qy1k7w"&&(c.textContent=$),v=N(ge),p=k(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Se(p)!=="svelte-i2notl"&&(p.textContent=M),ge.forEach(_),s.forEach(_),ne=N(B),Q=k(B,"DIV",{class:!0});var pe=E(Q);F=k(pe,"DIV",{class:!0});var qe=E(F);m=k(qe,"LABEL",{class:!0,"data-svelte-h":!0}),Se(m)!=="svelte-1ekr4iz"&&(m.textContent=re),oe=N(qe),q=k(qe,"DIV",{class:!0});var je=E(q);for(let j=0;j<O.length;j+=1)O[j].l(je);je.forEach(_),qe.forEach(_),Ce=N(pe),J=k(pe,"DIV",{class:!0});var Pe=E(J);W=k(Pe,"LABEL",{class:!0});var we=E(W);ue=H(we,"Filter "),ie=H(we,ee),ke=H(we,":"),we.forEach(_),be=N(Pe),Y=k(Pe,"DIV",{class:!0});var Me=E(Y);for(let j=0;j<z.length;j+=1)z[j].l(Me);Me.forEach(_),Pe.forEach(_),Ve=N(pe),R=k(pe,"DIV",{class:!0});var _e=E(R);K=k(_e,"LABEL",{class:!0});var Ie=E(K);Ee=H(Ie,"Filter "),r=H(Ie,ae),g=H(Ie,":"),Ie.forEach(_),S=N(_e),b=k(_e,"INPUT",{type:!0,placeholder:!0,class:!0}),A=N(_e),V=k(_e,"DIV",{class:!0});var Oe=E(V);for(let j=0;j<T.length;j+=1)T[j].l(Oe);P=N(Oe),L&&L.l(Oe),Oe.forEach(_),_e.forEach(_),pe.forEach(_),B.forEach(_),this.h()},h(){y(n,"class","methodology svelte-hkg2yx"),y(d,"class","active-filters svelte-hkg2yx"),y(c,"class","reset svelte-hkg2yx"),y(p,"class","copy-config svelte-hkg2yx"),y(h,"class","header-buttons svelte-hkg2yx"),y(l,"class","header-info svelte-hkg2yx"),y(m,"class","svelte-hkg2yx"),y(q,"class","options svelte-hkg2yx"),y(F,"class","category svelte-hkg2yx"),y(W,"class","svelte-hkg2yx"),y(Y,"class","options tiny svelte-hkg2yx"),y(J,"class","filtered-cluster-values svelte-hkg2yx"),y(K,"class","svelte-hkg2yx"),y(b,"type","text"),y(b,"placeholder","Enter your query"),b.value=t[0],y(b,"class","svelte-hkg2yx"),y(V,"class","options tiny svelte-hkg2yx"),y(R,"class","filtered-entities svelte-hkg2yx"),y(Q,"class","categories svelte-hkg2yx"),y(e,"class","svelte-hkg2yx")},m(o,B){Z(o,e,B),u(e,l),u(l,n),u(n,i),u(l,a),u(l,h),u(h,d);for(let s=0;s<I.length;s+=1)I[s]&&I[s].m(d,null);u(h,f),u(h,c),u(h,v),u(h,p),u(e,ne),u(e,Q),u(Q,F),u(F,m),u(F,oe),u(F,q);for(let s=0;s<O.length;s+=1)O[s]&&O[s].m(q,null);u(Q,Ce),u(Q,J),u(J,W),u(W,ue),u(W,ie),u(W,ke),u(J,be),u(J,Y);for(let s=0;s<z.length;s+=1)z[s]&&z[s].m(Y,null);u(Q,Ve),u(Q,R),u(R,K),u(K,Ee),u(K,r),u(K,g),u(R,S),u(R,b),u(R,A),u(R,V);for(let s=0;s<T.length;s+=1)T[s]&&T[s].m(V,null);u(V,P),L&&L.m(V,null),w||(X=[ce(c,"click",t[12]),ce(p,"click",t[13]),ce(b,"input",t[8])],w=!0)},p(o,B){if(B[0]&64&&se(i,o[6]),B[0]&1032){x=le(o[3]);let s;for(s=0;s<x.length;s+=1){const U=Je(o,x,s);I[s]?I[s].p(U,B):(I[s]=We(U),I[s].c(),I[s].m(d,null))}for(;s<I.length;s+=1)I[s].d(1);I.length=x.length}if(B[0]&672){he=le(o[7]);let s;for(s=0;s<he.length;s+=1){const U=$e(o,he,s);O[s]?O[s].p(U,B):(O[s]=Ke(U),O[s].c(),O[s].m(q,null))}for(;s<O.length;s+=1)O[s].d(1);O.length=he.length}if(B[0]&32&&ee!==(ee=o[5].clusterBy+"")&&se(ie,ee),B[0]&34850){fe=le(o[1]);let s;for(s=0;s<fe.length;s+=1){const U=Re(o,fe,s);z[s]?z[s].p(U,B):(z[s]=Xe(U),z[s].c(),z[s].m(Y,null))}for(;s<z.length;s+=1)z[s].d(1);z.length=fe.length}if(B[0]&32&&ae!==(ae=o[5].moveBy+"")&&se(r,ae),B[0]&1&&b.value!==o[0]&&(b.value=o[0]),B[0]&16404){de=le(o[2].slice(0,50).sort(et));let s;for(s=0;s<de.length;s+=1){const U=He(o,de,s);T[s]?T[s].p(U,B):(T[s]=Ye(U),T[s].c(),T[s].m(V,P))}for(;s<T.length;s+=1)T[s].d(1);T.length=de.length}o[2].length>50?L?L.p(o,B):(L=Ze(o),L.c(),L.m(V,null)):L&&(L.d(1),L=null)},i:Le,o:Le,d(o){o&&_(e),ze(I,o),ze(O,o),ze(z,o),ze(T,o),L&&L.d(),w=!1,at(X)}}}const De=12,kt=30,Ne=12,bt=30;function Vt(t){return Object.values(t).reduce((e,l)=>e+l.dataPoints.length,0)}function Ae(t,e){const l={city:"cities",sport:"sports",height:"heights",noc:"NOCs",team:"teams",weight:"weights",year:"years",age:"ages",event:"events",medal:"medals",name:"names"};return t===1?e:l[e]||`${e}s`}function Et(t){return t.clusterBy?t.clusterBy:"all clusters"}function Bt(t){return t.moveBy?t.moveBy:"participants"}const et=([t],[e])=>t.localeCompare(e);function St(t,e,l){let n,i,a,h,d,f,c,$,v,p,M,ne,Q,F,m,re,oe;Be(t,ve,r=>l(4,F=r)),Be(t,te,r=>l(5,m=r)),Be(t,Qe,r=>l(20,re=r)),Be(t,dt,r=>l(21,oe=r));let q=m.queryValue||"";function Ce(r){r.target.value.length>3&&(l(0,q=r.target.value),te.update(g=>({...g,queryValue:q})))}const J=[],W=[];function ue(r,g){r==="clusterBy"?te.update(S=>({...S,clusterBy:g})):r==="moveBy"&&te.update(S=>({...S,moveBy:g}))}function ee(r){r.type==="clusterValue"?te.update(g=>({...g,selectedClusterValue:null})):r.type==="query"?(l(0,q=""),te.update(g=>({...g,queryValue:""}))):r.type==="name"&&ve.set([])}function ie(r){te.update(A=>({...A,selectedClusterValue:r}));const g=q.toLowerCase(),S=m.queryCategory||"name",b=[];Object.entries(Ue(Qe)).forEach(([A,V])=>{const P=V.dataPoints.some(X=>{var x;return((x=X[m.clusterBy])==null?void 0:x.toString())===r.toString()}),w=V.dataPoints.some(X=>{var x;return(x=X[S])==null?void 0:x.toString().toLowerCase().includes(g)});P&&w&&(b.push(A),V.currentCategoryIndex=0,V.t=0,V.trail=[])}),ve.set(b)}function ke(){te.update(r=>({...r,queryValue:"",selectedClusterValue:null})),l(0,q=""),ve.set([])}function be(){const r={title:"",description:"",methodology:"",media:!0,config:{clusterBy:m.clusterBy,moveBy:m.moveBy,selectedClusterValue:m.selectedClusterValue||"",queryValue:q,queryCategory:m.queryCategory||"name",speed:m.speed||3,stroke:m.stroke||1,loops:m.loopsToComplete||1,highlightedEntities:Ue(ve)}},g=JSON.stringify(r,null,2);navigator.clipboard.writeText(g).then(()=>{alert("Config copied to clipboard!")}).catch(S=>{console.error("Could not copy text: ",S)})}function Y(r){return c===$?De:De+(r-c)*(kt-De)/($-c)}function Ve(r){return M===ne?Ne:Ne+(r-M)*(bt-Ne)/(ne-M)}const R=r=>ee(r),K=r=>ue("clusterBy",r),Ee=r=>ie(r),ae=r=>ve.set([r]);return t.$$.update=()=>{t.$$.dirty[0]&2097152&&l(18,i=oe.map(([r])=>r)),t.$$.dirty[0]&1048609&&l(16,a=Object.entries(re).filter(([r,g])=>{const S=m.selectedClusterValue?g.dataPoints.some(P=>{var w;return((w=P[m.clusterBy])==null?void 0:w.toString())===m.selectedClusterValue.toString()}):!0,b=q.toLowerCase(),A=m.queryCategory||"name",V=b.length>=3?g.dataPoints.some(P=>{var w;return(w=P[A])==null?void 0:w.toString().toLowerCase().includes(b)}):!0;return S&&V}).reduce((r,[g,S])=>(r[g]=S,r),{})),t.$$.dirty[0]&57&&(l(3,h=[]),m.selectedClusterValue&&h.push({label:`${m.selectedClusterValue}`,type:"clusterValue"}),q&&h.push({label:`${q}`,type:"query"}),F.length===1&&h.push({label:`${F[0]}`,type:"name"})),t.$$.dirty[0]&65536&&l(2,d=Object.entries(a).map(([r,g])=>[r,g.dataPoints.length])),t.$$.dirty[0]&4&&l(19,f=d.map(([r,g])=>g)),t.$$.dirty[0]&524288&&(c=f.length>0?Math.min(...f):0),t.$$.dirty[0]&524288&&($=f.length>0?Math.max(...f):1),t.$$.dirty[0]&1310736&&l(1,v=(()=>{const r=Object.values(re),g=new Set(F),S=g.size>0;let b=i;const A=[];S&&(b=i.filter(V=>{for(let P=0;P<r.length;P++){const w=r[P];if(g.has(w.moveBy)&&w.categories.includes(V))return!0}return!1}));for(let V=0;V<b.length;V++){const P=b[V];let w=0;for(let X=0;X<r.length;X++){const x=r[X];(!S||g.has(x.moveBy))&&x.categories.includes(P)&&w++}A.push([P,w])}return A})()),t.$$.dirty[0]&2&&l(17,p=v.map(([r,g])=>g)),t.$$.dirty[0]&131072&&(M=p.length>0?Math.min(...p):0),t.$$.dirty[0]&131072&&(ne=p.length>0?Math.max(...p):1),t.$$.dirty[0]&65584&&l(6,Q=(()=>{const r=Et(m),g=Bt(m);let b=`This visualization represents ${Vt(a)} ${Ae(g,"participant")}, as individual ${Ae(g,g)}, who have changed  ${r}.`;if(m.selectedClusterValue&&(b+=` The data is filtered by ${r} = ${m.selectedClusterValue}, showing`),F.length>0){const A=F.length;b+=` ${A} ${Ae(A,"result")} matching the query.`}return b})())},l(7,n=mt.filter(r=>!J.includes(r))),yt.filter(r=>!W.includes(r)),l(3,h=[]),[q,v,d,h,F,m,Q,n,Ce,ue,ee,ie,ke,be,Y,Ve,a,p,i,f,re,oe,R,K,Ee,ae]}class qt extends lt{constructor(e){super(),st(this,e,St,Ct,tt,{},null,[-1,-1])}}function Pt(t){let e,l="Loading...";return{c(){e=C("p"),e.textContent=l,this.h()},l(n){e=k(n,"P",{class:!0,"data-svelte-h":!0}),Se(e)!=="svelte-qdsr2u"&&(e.textContent=l),this.h()},h(){y(e,"class","svelte-13tgnqv")},m(n,i){Z(n,e,i)},i:Le,o:Le,d(n){n&&_(e)}}}function wt(t){let e,l,n;return l=new vt({}),{c(){e=C("div"),nt(l.$$.fragment),this.h()},l(i){e=k(i,"DIV",{class:!0});var a=E(e);rt(l.$$.fragment,a),a.forEach(_),this.h()},h(){y(e,"class","svelte-13tgnqv")},m(i,a){Z(i,e,a),ot(l,e,null),n=!0},i(i){n||(Fe(l.$$.fragment,i),n=!0)},o(i){Te(l.$$.fragment,i),n=!1},d(i){i&&_(e),it(l)}}}function It(t){let e,l,n,i,a,h,d;const f=[wt,Pt],c=[];function $(v,p){return v[0].length>0?0:1}return l=$(t),n=c[l]=f[l](t),h=new qt({}),{c(){e=C("main"),n.c(),i=D(),a=C("div"),nt(h.$$.fragment),this.h()},l(v){e=k(v,"MAIN",{});var p=E(e);n.l(p),i=N(p),a=k(p,"DIV",{class:!0});var M=E(a);rt(h.$$.fragment,M),M.forEach(_),p.forEach(_),this.h()},h(){y(a,"class","svelte-13tgnqv")},m(v,p){Z(v,e,p),c[l].m(e,null),u(e,i),u(e,a),ot(h,a,null),d=!0},p(v,[p]){let M=l;l=$(v),l!==M&&(ht(),Te(c[M],1,1,()=>{c[M]=null}),ut(),n=c[l],n||(n=c[l]=f[l](v),n.c()),Fe(n,1),n.m(e,i))},i(v){d||(Fe(n),Fe(h.$$.fragment,v),d=!0)},o(v){Te(n),Te(h.$$.fragment,v),d=!1},d(v){v&&_(e),c[l].d(),it(h)}}}function Ot(t,e,l){let n;return Be(t,Ge,i=>l(0,n=i)),ct(async()=>{const a=(await _t(ft+"/data/update-until-2022/data.tsv")).map(h=>{const d={};for(const[f,c]of Object.entries(h))d[f]=c!=null&&c.trim()?c:"?";return d});Ge.set(a),gt.set(window.innerWidth),pt.set(600)}),[n]}class xt extends lt{constructor(e){super(),st(this,e,Ot,It,tt,{})}}export{xt as component};
