import{s as He,e as y,t as U,a as A,c as b,b as B,d as J,f as _,g as $,l as we,m,i as X,h as f,E as se,j as ne,n as qe,B as Ve,F as et,k as Fe,G as tt,I as ce,r as ue,J as lt,q as st}from"../chunks/scheduler.B6iofcAQ.js";import{S as Ke,i as We,b as Xe,d as Ye,m as Ze,t as Ie,c as nt,a as Pe,e as xe,g as rt}from"../chunks/index.DcOQwsS0.js";import{b as at}from"../chunks/paths.BidAjZW0.js";import{h as me,c as le,e as it,d as Ne,w as ot,a as ct}from"../chunks/stores.HNDzHde5.js";import{t as ut,S as ht}from"../chunks/dsv.KtMXnDQj.js";import{e as x}from"../chunks/each.D6YF6ztN.js";import{f as ft}from"../chunks/constants.lH_TAHWR.js";function Le(t,e,l){const n=t.slice();return n[31]=e[l][0],n[32]=e[l][1],n}function Ae(t,e,l){const n=t.slice();return n[32]=e[l][0],n[35]=e[l][1],n}function $e(t,e,l){const n=t.slice();return n[38]=e[l],n}function Te(t,e,l){const n=t.slice();return n[41]=e[l],n}function Me(t){let e,l=t[41].label+"",n;return{c(){e=y("span"),n=U(l),this.h()},l(i){e=b(i,"SPAN",{class:!0});var o=B(e);n=J(o,l),o.forEach(_),this.h()},h(){m(e,"class","filter svelte-1ahhu9d")},m(i,o){X(i,e,o),f(e,n)},p(i,o){o[0]&1&&l!==(l=i[41].label+"")&&ne(n,l)},d(i){i&&_(e)}}}function Qe(t){let e,l=t[38]+"",n,i,o,d;function p(){return t[20](t[38])}return{c(){e=y("span"),n=U(l),i=A(),this.h()},l(h){e=b(h,"SPAN",{class:!0});var u=B(e);n=J(u,l),i=$(u),u.forEach(_),this.h()},h(){m(e,"class","svelte-1ahhu9d"),ce(e,"selected",t[38]===t[4].clusterBy)},m(h,u){X(h,e,u),f(e,n),f(e,i),o||(d=se(e,"click",p),o=!0)},p(h,u){t=h,u[0]&128&&l!==(l=t[38]+"")&&ne(n,l),u[0]&144&&ce(e,"selected",t[38]===t[4].clusterBy)},d(h){h&&_(e),o=!1,d()}}}function Re(t){let e,l=t[32]+"",n,i,o,d;function p(){return t[21](t[32])}return{c(){e=y("span"),n=U(l),i=A(),this.h()},l(h){e=b(h,"SPAN",{style:!0,class:!0});var u=B(e);n=J(u,l),i=$(u),u.forEach(_),this.h()},h(){var h;ue(e,"font-size",t[14](t[35])+"px"),m(e,"class","svelte-1ahhu9d"),ce(e,"selected",((h=t[4].filters[t[4].clusterBy])==null?void 0:h[0])===t[32])},m(h,u){X(h,e,u),f(e,n),f(e,i),o||(d=se(e,"click",p),o=!0)},p(h,u){var T;t=h,u[0]&2&&l!==(l=t[32]+"")&&ne(n,l),u[0]&2&&ue(e,"font-size",t[14](t[35])+"px"),u[0]&18&&ce(e,"selected",((T=t[4].filters[t[4].clusterBy])==null?void 0:T[0])===t[32])},d(h){h&&_(e),o=!1,d()}}}function Ue(t){let e,l=t[31]+"",n,i,o;function d(){return t[22](t[31])}return{c(){e=y("span"),n=U(l),this.h()},l(p){e=b(p,"SPAN",{style:!0,class:!0});var h=B(e);n=J(h,l),h.forEach(_),this.h()},h(){ue(e,"font-size",t[13](t[32])+"px"),m(e,"class","svelte-1ahhu9d"),ce(e,"highlighted",t[3].includes(t[31]))},m(p,h){X(p,e,h),f(e,n),i||(o=se(e,"click",d),i=!0)},p(p,h){t=p,h[0]&4&&l!==(l=t[31]+"")&&ne(n,l),h[0]&4&&ue(e,"font-size",t[13](t[32])+"px"),h[0]&12&&ce(e,"highlighted",t[3].includes(t[31]))},d(p){p&&_(e),i=!1,o()}}}function Je(t){let e,l,n=t[2].length+"",i;return{c(){e=y("p"),l=U("50 out of "),i=U(n),this.h()},l(o){e=b(o,"P",{style:!0});var d=B(e);l=J(d,"50 out of "),i=J(d,n),d.forEach(_),this.h()},h(){ue(e,"border-top","1px solid"),ue(e,"padding-top","10px")},m(o,d){X(o,e,d),f(e,l),f(e,i)},p(o,d){d[0]&4&&n!==(n=o[2].length+"")&&ne(i,n)},d(o){o&&_(e)}}}function dt(t){let e,l,n,i,o,d,p,h,u,T="Reset",E,C,z="Copy Config",ee,L,S,v,Y="Cluster By:",G,H,he,M,Q,fe,te=t[4].clusterBy+"",re,de,pe,K,_e,r,c,g,k,I,D,Z,ge,R=x(t[0]),w=[];for(let a=0;a<R.length;a+=1)w[a]=Me(Te(t,R,a));let W=x(t[7]),F=[];for(let a=0;a<W.length;a+=1)F[a]=Qe($e(t,W,a));let ae=x(t[1]),P=[];for(let a=0;a<ae.length;a+=1)P[a]=Re(Ae(t,ae,a));let ie=x(t[2].slice(0,50).sort(Ge)),q=[];for(let a=0;a<ie.length;a+=1)q[a]=Ue(Le(t,ie,a));let O=t[2].length>50&&Je(t);return{c(){e=y("header"),l=y("div"),n=y("div"),i=U(t[6]),o=A(),d=y("div"),p=y("div");for(let a=0;a<w.length;a+=1)w[a].c();h=A(),u=y("button"),u.textContent=T,E=A(),C=y("button"),C.textContent=z,ee=A(),L=y("div"),S=y("div"),v=y("label"),v.textContent=Y,G=A(),H=y("div");for(let a=0;a<F.length;a+=1)F[a].c();he=A(),M=y("div"),Q=y("label"),fe=U("Filter "),re=U(te),de=U(":"),pe=A(),K=y("div");for(let a=0;a<P.length;a+=1)P[a].c();_e=A(),r=y("div"),c=y("input"),k=A(),I=y("div");for(let a=0;a<q.length;a+=1)q[a].c();D=A(),O&&O.c(),this.h()},l(a){e=b(a,"HEADER",{class:!0});var V=B(e);l=b(V,"DIV",{class:!0});var s=B(l);n=b(s,"DIV",{class:!0});var N=B(n);i=J(N,t[6]),N.forEach(_),o=$(s),d=b(s,"DIV",{class:!0});var ve=B(d);p=b(ve,"DIV",{class:!0});var ye=B(p);for(let j=0;j<w.length;j+=1)w[j].l(ye);h=$(ye),u=b(ye,"BUTTON",{class:!0,"data-svelte-h":!0}),we(u)!=="svelte-qy1k7w"&&(u.textContent=T),ye.forEach(_),E=$(ve),C=b(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),we(C)!=="svelte-i2notl"&&(C.textContent=z),ve.forEach(_),s.forEach(_),ee=$(V),L=b(V,"DIV",{class:!0});var oe=B(L);S=b(oe,"DIV",{class:!0});var be=B(S);v=b(be,"LABEL",{class:!0,"data-svelte-h":!0}),we(v)!=="svelte-1ekr4iz"&&(v.textContent=Y),G=$(be),H=b(be,"DIV",{class:!0});var je=B(H);for(let j=0;j<F.length;j+=1)F[j].l(je);je.forEach(_),be.forEach(_),he=$(oe),M=b(oe,"DIV",{class:!0});var Ce=B(M);Q=b(Ce,"LABEL",{class:!0});var ke=B(Q);fe=J(ke,"Filter "),re=J(ke,te),de=J(ke,":"),ke.forEach(_),pe=$(Ce),K=b(Ce,"DIV",{class:!0});var ze=B(K);for(let j=0;j<P.length;j+=1)P[j].l(ze);ze.forEach(_),Ce.forEach(_),_e=$(oe),r=b(oe,"DIV",{class:!0});var Ee=B(r);c=b(Ee,"INPUT",{type:!0,placeholder:!0,class:!0}),k=$(Ee),I=b(Ee,"DIV",{class:!0});var Be=B(I);for(let j=0;j<q.length;j+=1)q[j].l(Be);D=$(Be),O&&O.l(Be),Be.forEach(_),Ee.forEach(_),oe.forEach(_),V.forEach(_),this.h()},h(){m(n,"class","methodology svelte-1ahhu9d"),m(u,"class","reset svelte-1ahhu9d"),m(p,"class","active-filters svelte-1ahhu9d"),m(C,"class","copy-config svelte-1ahhu9d"),m(d,"class","header-buttons svelte-1ahhu9d"),m(l,"class","header-info svelte-1ahhu9d"),m(v,"class","svelte-1ahhu9d"),m(H,"class","options svelte-1ahhu9d"),m(S,"class","category svelte-1ahhu9d"),m(Q,"class","svelte-1ahhu9d"),m(K,"class","options tiny svelte-1ahhu9d"),m(M,"class","filtered-cluster-values svelte-1ahhu9d"),m(c,"type","text"),m(c,"placeholder",g="Filter "+t[4].moveBy+"..."),c.value=t[5],m(c,"class","svelte-1ahhu9d"),m(I,"class","options tiny svelte-1ahhu9d"),m(r,"class","filtered-entities svelte-1ahhu9d"),m(L,"class","categories svelte-1ahhu9d"),m(e,"class","svelte-1ahhu9d")},m(a,V){X(a,e,V),f(e,l),f(l,n),f(n,i),f(l,o),f(l,d),f(d,p);for(let s=0;s<w.length;s+=1)w[s]&&w[s].m(p,null);f(p,h),f(p,u),f(d,E),f(d,C),f(e,ee),f(e,L),f(L,S),f(S,v),f(S,G),f(S,H);for(let s=0;s<F.length;s+=1)F[s]&&F[s].m(H,null);f(L,he),f(L,M),f(M,Q),f(Q,fe),f(Q,re),f(Q,de),f(M,pe),f(M,K);for(let s=0;s<P.length;s+=1)P[s]&&P[s].m(K,null);f(L,_e),f(L,r),f(r,c),f(r,k),f(r,I);for(let s=0;s<q.length;s+=1)q[s]&&q[s].m(I,null);f(I,D),O&&O.m(I,null),Z||(ge=[se(u,"click",t[11]),se(p,"click",t[11]),se(C,"click",t[12]),se(c,"input",t[8])],Z=!0)},p(a,V){if(V[0]&64&&ne(i,a[6]),V[0]&1){R=x(a[0]);let s;for(s=0;s<R.length;s+=1){const N=Te(a,R,s);w[s]?w[s].p(N,V):(w[s]=Me(N),w[s].c(),w[s].m(p,h))}for(;s<w.length;s+=1)w[s].d(1);w.length=R.length}if(V[0]&656){W=x(a[7]);let s;for(s=0;s<W.length;s+=1){const N=$e(a,W,s);F[s]?F[s].p(N,V):(F[s]=Qe(N),F[s].c(),F[s].m(H,null))}for(;s<F.length;s+=1)F[s].d(1);F.length=W.length}if(V[0]&16&&te!==(te=a[4].clusterBy+"")&&ne(re,te),V[0]&17426){ae=x(a[1]);let s;for(s=0;s<ae.length;s+=1){const N=Ae(a,ae,s);P[s]?P[s].p(N,V):(P[s]=Re(N),P[s].c(),P[s].m(K,null))}for(;s<P.length;s+=1)P[s].d(1);P.length=ae.length}if(V[0]&16&&g!==(g="Filter "+a[4].moveBy+"...")&&m(c,"placeholder",g),V[0]&32&&c.value!==a[5]&&(c.value=a[5]),V[0]&8204){ie=x(a[2].slice(0,50).sort(Ge));let s;for(s=0;s<ie.length;s+=1){const N=Le(a,ie,s);q[s]?q[s].p(N,V):(q[s]=Ue(N),q[s].c(),q[s].m(I,D))}for(;s<q.length;s+=1)q[s].d(1);q.length=ie.length}a[2].length>50?O?O.p(a,V):(O=Je(a),O.c(),O.m(I,null)):O&&(O.d(1),O=null)},i:qe,o:qe,d(a){a&&_(e),Ve(w,a),Ve(F,a),Ve(P,a),Ve(q,a),O&&O.d(),Z=!1,et(ge)}}}const De=12,pt=30,Oe=12,_t=30;function Se(t,e){const l={city:"cities",sport:"sports",height:"heights",noc:"NOCs",team:"teams",weight:"weights",year:"years",age:"ages",event:"events",medal:"medals",name:"names",is:"are"};return t===1?e:l[e]||`${e}s`}function gt(t){return t.clusterBy?t.clusterBy:"all clusters"}const Ge=([t],[e])=>t.localeCompare(e);function mt(t,e,l){let n,i,o,d,p,h,u,T,E,C,z,ee,L,S,v,Y;Fe(t,me,r=>l(3,S=r)),Fe(t,le,r=>l(4,v=r)),Fe(t,it,r=>l(19,Y=r));let G=v.queryValue||"";le.update(r=>({...r,filters:r.filters||{}}));function H(r){l(5,G=r.target.value),le.update(c=>({...c,queryValue:G}))}function he(r){var I;const c=v.filters||{},g=r.dataPoints;for(const[D,Z]of Object.entries(c)){if(!Z||Z.length===0)continue;if(!g.some(R=>{var W;const w=(W=R[D])==null?void 0:W.toString().toLowerCase();return Z.some(F=>w===F.toLowerCase())}))return!1}const k=((I=v.queryValue)==null?void 0:I.toLowerCase())||"";if(k.length>=3){const D=v.queryCategory||"name";if(!g.some(ge=>{var R;return(R=ge[D])==null?void 0:R.toString().toLowerCase().includes(k)}))return!1}return S.length>0?S.includes(r.moveBy):!0}function M(r,c){r==="clusterBy"?le.update(g=>({...g,clusterBy:c})):r==="moveBy"&&le.update(g=>({...g,moveBy:c}))}function Q(r){const c=v.clusterBy;le.update(g=>{var D;const k={...g.filters};return((D=k[c])==null?void 0:D[0])===r?delete k[c]:k[c]=[r],{...g,filters:k}})}function fe(){le.update(r=>({...r,queryValue:"",filters:{}})),l(5,G=""),me.set([])}function te(){const r={title:"",description:"",methodology:"",media:!0,config:{clusterBy:v.clusterBy,moveBy:v.moveBy,filters:v.filters,queryValue:G,queryCategory:v.queryCategory||"name",speed:v.speed||3,stroke:v.stroke||1,loops:v.loopsToComplete||1,highlightedEntities:lt(me)}},c=JSON.stringify(r,null,2);navigator.clipboard.writeText(c).then(()=>{alert("Config copied to clipboard!")}).catch(g=>{console.error("Could not copy text: ",g)})}function re(r){return u===T?De:De+(r-u)*(pt-De)/(T-u)}function de(r){return z===ee?Oe:Oe+(r-z)*(_t-Oe)/(ee-z)}const pe=r=>M("clusterBy",r),K=r=>Q(r),_e=r=>me.set([r]);return t.$$.update=()=>{if(t.$$.dirty[0]&524304&&(()=>{const r=new Set;return Object.values(Y).forEach(c=>{c.dataPoints.forEach(g=>{const k=g[v.clusterBy];k&&r.add(k)})}),Array.from(r)})(),t.$$.dirty[0]&524288&&l(17,i=Object.entries(Y).filter(([r,c])=>he(c)).reduce((r,[c,g])=>(r[c]=g,r),{})),t.$$.dirty[0]&131072&&l(2,d=Object.entries(i||{}).map(([r,c])=>[r,c.dataPoints.length])),t.$$.dirty[0]&4&&l(15,p=d.map(([r,c])=>r)),t.$$.dirty[0]&557056&&Object.entries(Y).length!=p.length&&tt(me,S=p,S),t.$$.dirty[0]&25){l(0,o=[]);const r=v.filters||{};for(const[c,g]of Object.entries(r))for(const k of g)o.push({label:k,type:c});S.length===1&&o.push({label:S[0],type:"name"})}t.$$.dirty[0]&4&&l(18,h=d.map(([r,c])=>c)),t.$$.dirty[0]&262144&&(u=h.length>0?Math.min(...h):0),t.$$.dirty[0]&262144&&(T=h.length>0?Math.max(...h):1),t.$$.dirty[0]&131088&&l(1,E=(()=>{const r={};return Object.values(i).forEach(c=>{c.dataPoints.forEach(g=>{const k=g[v.clusterBy];k&&(r[k]=(r[k]||0)+1)})}),Object.entries(r)})()),t.$$.dirty[0]&2&&l(16,C=E.map(([r,c])=>c)),t.$$.dirty[0]&65536&&(z=C.length>0?Math.min(...C):0),t.$$.dirty[0]&65536&&(ee=C.length>0?Math.max(...C):1),t.$$.dirty[0]&32793&&l(6,L=(()=>{const r=gt(v),c=S.length>0?S.length:p.length;let g="";if(o.length>0){const k=o.find(I=>I.type==="name");if(k&&o.length===1)g=`${k.label} is shown moving across ${r}`;else{const I=o.map(D=>D.type==="name"?D.label:`${D.type}:${D.label}`).join(", ");g=`${c} ${Se(c,"participant")}s [${I}]  ${Se(c,"is")} seen moving across ${r}`}}else g=`${c}  ${Se(c,"participant")}  ${Se(c,"is")} grouped by ${r}`;return g})())},l(7,n=ft),l(0,o=[]),[o,E,d,S,v,G,L,n,H,M,Q,fe,te,re,de,p,C,i,h,Y,pe,K,_e]}class vt extends Ke{constructor(e){super(),We(this,e,mt,dt,He,{},null,[-1,-1])}}function yt(t){let e,l="Loading...";return{c(){e=y("p"),e.textContent=l,this.h()},l(n){e=b(n,"P",{class:!0,"data-svelte-h":!0}),we(e)!=="svelte-qdsr2u"&&(e.textContent=l),this.h()},h(){m(e,"class","svelte-13tgnqv")},m(n,i){X(n,e,i)},i:qe,o:qe,d(n){n&&_(e)}}}function bt(t){let e,l,n;return l=new ht({}),{c(){e=y("div"),Xe(l.$$.fragment),this.h()},l(i){e=b(i,"DIV",{class:!0});var o=B(e);Ye(l.$$.fragment,o),o.forEach(_),this.h()},h(){m(e,"class","svelte-13tgnqv")},m(i,o){X(i,e,o),Ze(l,e,null),n=!0},i(i){n||(Pe(l.$$.fragment,i),n=!0)},o(i){Ie(l.$$.fragment,i),n=!1},d(i){i&&_(e),xe(l)}}}function Ct(t){let e,l,n,i,o,d,p;const h=[bt,yt],u=[];function T(E,C){return E[0].length>0?0:1}return l=T(t),n=u[l]=h[l](t),d=new vt({}),{c(){e=y("main"),n.c(),i=A(),o=y("div"),Xe(d.$$.fragment),this.h()},l(E){e=b(E,"MAIN",{});var C=B(e);n.l(C),i=$(C),o=b(C,"DIV",{class:!0});var z=B(o);Ye(d.$$.fragment,z),z.forEach(_),C.forEach(_),this.h()},h(){m(o,"class","svelte-13tgnqv")},m(E,C){X(E,e,C),u[l].m(e,null),f(e,i),f(e,o),Ze(d,o,null),p=!0},p(E,[C]){let z=l;l=T(E),l!==z&&(rt(),Ie(u[z],1,1,()=>{u[z]=null}),nt(),n=u[l],n||(n=u[l]=h[l](E),n.c()),Pe(n,1),n.m(e,i))},i(E){p||(Pe(n),Pe(d.$$.fragment,E),p=!0)},o(E){Ie(n),Ie(d.$$.fragment,E),p=!1},d(E){E&&_(e),u[l].d(),xe(d)}}}function kt(t,e,l){let n;return Fe(t,Ne,i=>l(0,n=i)),st(async()=>{const o=(await ut(at+"/data/update-until-2022/data.tsv")).map(d=>{const p={};for(const[h,u]of Object.entries(d))p[h]=u!=null&&u.trim()?u:"NA";return p});Ne.set(o),ot.set(window.innerWidth),ct.set(600)}),[n]}class Pt extends Ke{constructor(e){super(),We(this,e,kt,Ct,He,{})}}export{Pt as component};
