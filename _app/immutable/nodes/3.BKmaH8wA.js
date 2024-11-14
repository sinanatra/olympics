import{s as Xe,e as v,a as F,t as Y,c as g,b as V,l as _e,g as T,f as d,d as Z,m as k,i as $,h,E as ne,j as ge,n as Le,B as qe,F as lt,k as be,G as le,r as ve,I as De,q as st}from"../chunks/scheduler.evRM0l9T.js";import{S as Ye,i as Ze,b as $e,d as xe,m as et,t as Ie,c as nt,a as we,e as tt,g as ot}from"../chunks/index.aiZKxZDj.js";import{b as rt}from"../chunks/paths.BLI1n4f7.js";import{h as fe,e as Me,a as de,f as it,g as at,i as ct,d as Fe,w as ut,b as ht}from"../chunks/constants.BgQT8P0G.js";import{t as ft,S as dt}from"../chunks/dsv.CAOPbB76.js";import{e as te}from"../chunks/each.D6YF6ztN.js";function Te(t,e,l){const s=t.slice();return s[30]=e[l][0],s[31]=e[l][1],s}function je(t,e,l){const s=t.slice();return s[31]=e[l][0],s[34]=e[l][1],s}function Qe(t,e,l){const s=t.slice();return s[37]=e[l],s}function Ue(t,e,l){const s=t.slice();return s[37]=e[l],s}function He(t){let e,l=t[37]+"",s,a,u,f;function m(){return t[20](t[37])}return{c(){e=v("span"),s=Y(l),a=F(),this.h()},l(c){e=g(c,"SPAN",{class:!0});var i=V(e);s=Z(i,l),a=T(i),i.forEach(d),this.h()},h(){k(e,"class","svelte-1cvs0si"),le(e,"selected",t[37]===t[4].clusterBy)},m(c,i){$(c,e,i),h(e,s),h(e,a),u||(f=ne(e,"click",m),u=!0)},p(c,i){t=c,i[0]&64&&l!==(l=t[37]+"")&&ge(s,l),i[0]&80&&le(e,"selected",t[37]===t[4].clusterBy)},d(c){c&&d(e),u=!1,f()}}}function Re(t){let e,l=t[37]+"",s,a,u,f;function m(){return t[21](t[37])}return{c(){e=v("span"),s=Y(l),a=F(),this.h()},l(c){e=g(c,"SPAN",{class:!0});var i=V(e);s=Z(i,l),a=T(i),i.forEach(d),this.h()},h(){k(e,"class","svelte-1cvs0si"),le(e,"selected",t[37]===t[4].moveBy)},m(c,i){$(c,e,i),h(e,s),h(e,a),u||(f=ne(e,"click",m),u=!0)},p(c,i){t=c,i[0]&32&&l!==(l=t[37]+"")&&ge(s,l),i[0]&48&&le(e,"selected",t[37]===t[4].moveBy)},d(c){c&&d(e),u=!1,f()}}}function Ge(t){let e,l=t[31]+"",s,a,u,f;function m(){return t[22](t[31])}return{c(){e=v("span"),s=Y(l),a=F(),this.h()},l(c){e=g(c,"SPAN",{style:!0,class:!0});var i=V(e);s=Z(i,l),a=T(i),i.forEach(d),this.h()},h(){ve(e,"font-size",t[13](t[34])+"px"),k(e,"class","svelte-1cvs0si"),le(e,"highlighted",t[31]==t[4].selectedClusterValue)},m(c,i){$(c,e,i),h(e,s),h(e,a),u||(f=ne(e,"click",m),u=!0)},p(c,i){t=c,i[0]&2&&l!==(l=t[31]+"")&&ge(s,l),i[0]&2&&ve(e,"font-size",t[13](t[34])+"px"),i[0]&18&&le(e,"highlighted",t[31]==t[4].selectedClusterValue)},d(c){c&&d(e),u=!1,f()}}}function Je(t){let e,l=t[30]+"",s,a,u;function f(){return t[23](t[30])}return{c(){e=v("span"),s=Y(l),this.h()},l(m){e=g(m,"SPAN",{style:!0,class:!0});var c=V(e);s=Z(c,l),c.forEach(d),this.h()},h(){ve(e,"font-size",t[12](t[31])+"px"),k(e,"class","svelte-1cvs0si"),le(e,"highlighted",t[3].includes(t[30]))},m(m,c){$(m,e,c),h(e,s),a||(u=ne(e,"click",f),a=!0)},p(m,c){t=m,c[0]&4&&l!==(l=t[30]+"")&&ge(s,l),c[0]&4&&ve(e,"font-size",t[12](t[31])+"px"),c[0]&12&&le(e,"highlighted",t[3].includes(t[30]))},d(m){m&&d(e),a=!1,u()}}}function We(t){let e,l,s=t[2].length+"",a;return{c(){e=v("p"),l=Y("50 out of "),a=Y(s),this.h()},l(u){e=g(u,"P",{style:!0});var f=V(e);l=Z(f,"50 out of "),a=Z(f,s),f.forEach(d),this.h()},h(){ve(e,"border-top","1px solid"),ve(e,"padding-top","10px")},m(u,f){$(u,e,f),h(e,l),h(e,a)},p(u,f){f[0]&4&&s!==(s=u[2].length+"")&&ge(a,s)},d(u){u&&d(e)}}}function _t(t){let e,l,s,a="Reset",u,f,m="Copy Config",c,i,N,y,S="Cluster By:",D,R,se,Q,b,oe="Move By:",G,K,pe,W,J,re,x=t[4].clusterBy+"",ie,me,ye,X,Ce,H,ee,r="Filter By:",_,C,U,B,q,P,z,j=te(t[6]),p=[];for(let o=0;o<j.length;o+=1)p[o]=He(Ue(t,j,o));let ae=te(t[5]),w=[];for(let o=0;o<ae.length;o+=1)w[o]=Re(Qe(t,ae,o));let ce=te(t[1]),L=[];for(let o=0;o<ce.length;o+=1)L[o]=Ge(je(t,ce,o));let ue=te(t[2].slice(0,50).sort(Ke)),O=[];for(let o=0;o<ue.length;o+=1)O[o]=Je(Te(t,ue,o));let A=t[2].length>50&&We(t);return{c(){e=v("header"),l=v("div"),s=v("button"),s.textContent=a,u=F(),f=v("button"),f.textContent=m,c=F(),i=v("div"),N=v("div"),y=v("label"),y.textContent=S,D=F(),R=v("div");for(let o=0;o<p.length;o+=1)p[o].c();se=F(),Q=v("div"),b=v("label"),b.textContent=oe,G=F(),K=v("div");for(let o=0;o<w.length;o+=1)w[o].c();pe=F(),W=v("div"),J=v("label"),re=Y("Values for "),ie=Y(x),me=Y(":"),ye=F(),X=v("div");for(let o=0;o<L.length;o+=1)L[o].c();Ce=F(),H=v("div"),ee=v("label"),ee.textContent=r,_=F(),C=v("input"),U=F(),B=v("div");for(let o=0;o<O.length;o+=1)O[o].c();q=F(),A&&A.c(),this.h()},l(o){e=g(o,"HEADER",{class:!0});var I=V(e);l=g(I,"DIV",{class:!0});var n=V(l);s=g(n,"BUTTON",{class:!0,"data-svelte-h":!0}),_e(s)!=="svelte-qy1k7w"&&(s.textContent=a),u=T(n),f=g(n,"BUTTON",{class:!0,"data-svelte-h":!0}),_e(f)!=="svelte-18xqo2h"&&(f.textContent=m),n.forEach(d),c=T(I),i=g(I,"DIV",{class:!0});var E=V(i);N=g(E,"DIV",{class:!0});var ke=V(N);y=g(ke,"LABEL",{"data-svelte-h":!0}),_e(y)!=="svelte-1ekr4iz"&&(y.textContent=S),D=T(ke),R=g(ke,"DIV",{class:!0});var ze=V(R);for(let M=0;M<p.length;M+=1)p[M].l(ze);ze.forEach(d),ke.forEach(d),se=T(E),Q=g(E,"DIV",{class:!0});var Ee=V(Q);b=g(Ee,"LABEL",{"data-svelte-h":!0}),_e(b)!=="svelte-8r6yw"&&(b.textContent=oe),G=T(Ee),K=g(Ee,"DIV",{class:!0});var Ae=V(K);for(let M=0;M<w.length;M+=1)w[M].l(Ae);Ae.forEach(d),Ee.forEach(d),pe=T(E),W=g(E,"DIV",{class:!0});var Ve=V(W);J=g(Ve,"LABEL",{});var Be=V(J);re=Z(Be,"Values for "),ie=Z(Be,x),me=Z(Be,":"),Be.forEach(d),ye=T(Ve),X=g(Ve,"DIV",{class:!0});var Ne=V(X);for(let M=0;M<L.length;M+=1)L[M].l(Ne);Ne.forEach(d),Ve.forEach(d),Ce=T(E),H=g(E,"DIV",{class:!0});var he=V(H);ee=g(he,"LABEL",{"data-svelte-h":!0}),_e(ee)!=="svelte-24ucn1"&&(ee.textContent=r),_=T(he),C=g(he,"INPUT",{type:!0,placeholder:!0,class:!0}),U=T(he),B=g(he,"DIV",{class:!0});var Se=V(B);for(let M=0;M<O.length;M+=1)O[M].l(Se);q=T(Se),A&&A.l(Se),Se.forEach(d),he.forEach(d),E.forEach(d),I.forEach(d),this.h()},h(){k(s,"class","reset svelte-1cvs0si"),k(f,"class","copy-config svelte-1cvs0si"),k(l,"class","header-buttons svelte-1cvs0si"),k(R,"class","options svelte-1cvs0si"),k(N,"class","category svelte-1cvs0si"),k(K,"class","options svelte-1cvs0si"),k(Q,"class","category svelte-1cvs0si"),k(X,"class","options tiny svelte-1cvs0si"),k(W,"class","filtered-cluster-values svelte-1cvs0si"),k(C,"type","text"),k(C,"placeholder","Enter your query"),C.value=t[0],k(C,"class","svelte-1cvs0si"),k(B,"class","options tiny svelte-1cvs0si"),k(H,"class","filtered-entities svelte-1cvs0si"),k(i,"class","categories svelte-1cvs0si"),k(e,"class","svelte-1cvs0si")},m(o,I){$(o,e,I),h(e,l),h(l,s),h(l,u),h(l,f),h(e,c),h(e,i),h(i,N),h(N,y),h(N,D),h(N,R);for(let n=0;n<p.length;n+=1)p[n]&&p[n].m(R,null);h(i,se),h(i,Q),h(Q,b),h(Q,G),h(Q,K);for(let n=0;n<w.length;n+=1)w[n]&&w[n].m(K,null);h(i,pe),h(i,W),h(W,J),h(J,re),h(J,ie),h(J,me),h(W,ye),h(W,X);for(let n=0;n<L.length;n+=1)L[n]&&L[n].m(X,null);h(i,Ce),h(i,H),h(H,ee),h(H,_),h(H,C),h(H,U),h(H,B);for(let n=0;n<O.length;n+=1)O[n]&&O[n].m(B,null);h(B,q),A&&A.m(B,null),P||(z=[ne(s,"click",t[10]),ne(f,"click",t[11]),ne(C,"input",t[7])],P=!0)},p(o,I){if(I[0]&336){j=te(o[6]);let n;for(n=0;n<j.length;n+=1){const E=Ue(o,j,n);p[n]?p[n].p(E,I):(p[n]=He(E),p[n].c(),p[n].m(R,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=j.length}if(I[0]&304){ae=te(o[5]);let n;for(n=0;n<ae.length;n+=1){const E=Qe(o,ae,n);w[n]?w[n].p(E,I):(w[n]=Re(E),w[n].c(),w[n].m(K,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=ae.length}if(I[0]&16&&x!==(x=o[4].clusterBy+"")&&ge(ie,x),I[0]&8722){ce=te(o[1]);let n;for(n=0;n<ce.length;n+=1){const E=je(o,ce,n);L[n]?L[n].p(E,I):(L[n]=Ge(E),L[n].c(),L[n].m(X,null))}for(;n<L.length;n+=1)L[n].d(1);L.length=ce.length}if(I[0]&1&&C.value!==o[0]&&(C.value=o[0]),I[0]&4108){ue=te(o[2].slice(0,50).sort(Ke));let n;for(n=0;n<ue.length;n+=1){const E=Te(o,ue,n);O[n]?O[n].p(E,I):(O[n]=Je(E),O[n].c(),O[n].m(B,q))}for(;n<O.length;n+=1)O[n].d(1);O.length=ue.length}o[2].length>50?A?A.p(o,I):(A=We(o),A.c(),A.m(B,null)):A&&(A.d(1),A=null)},i:Le,o:Le,d(o){o&&d(e),qe(p,o),qe(w,o),qe(L,o),qe(O,o),A&&A.d(),P=!1,lt(z)}}}const Oe=12,vt=30,Pe=12,gt=30,Ke=([t],[e])=>t.localeCompare(e);function pt(t,e,l){let s,a,u,f,m,c,i,N,y,S,D,R,se,Q,b,oe;be(t,fe,r=>l(3,se=r)),be(t,Me,r=>l(18,Q=r)),be(t,de,r=>l(4,b=r)),be(t,it,r=>l(19,oe=r));let G=b.queryValue||"";function K(r){r.target.value.length>3&&(l(0,G=r.target.value),de.update(_=>({..._,queryValue:G})))}const pe=[],W=[];function J(r,_){x(),fe.set([]),r==="clusterBy"?de.update(C=>({...C,clusterBy:_})):r==="moveBy"&&de.update(C=>({...C,moveBy:_}))}function re(r){de.update(B=>({...B,selectedClusterValue:r}));const _=G.toLowerCase(),C=b.queryCategory||"name",U=[];Object.entries(De(Me)).forEach(([B,q])=>{const P=q.dataPoints.some(j=>{var p;return((p=j[b.clusterBy])==null?void 0:p.toString())===r.toString()}),z=q.dataPoints.some(j=>{var p;return(p=j[C])==null?void 0:p.toString().toLowerCase().includes(_)});P&&z&&(U.push(B),q.currentCategoryIndex=0,q.t=0,q.trail=[])}),fe.set(U)}function x(){de.update(r=>({...r,queryValue:"",selectedClusterValue:null})),l(0,G=""),fe.set([])}function ie(){const r={title:"",description:"",methodology:"",config:{clusterBy:b.clusterBy,moveBy:b.moveBy,selectedClusterValue:b.selectedClusterValue||"",queryValue:G,queryCategory:b.queryCategory||"name",speed:b.speed||3,stroke:b.stroke||1,loops:b.loopsToComplete||1,highlightedEntities:De(fe)}},_=JSON.stringify(r,null,2);navigator.clipboard.writeText(_).then(()=>{alert("Config copied to clipboard!")}).catch(C=>{console.error("Could not copy text: ",C)})}function me(r){return i===N?Oe:Oe+(r-i)*(vt-Oe)/(N-i)}function ye(r){return D===R?Pe:Pe+(r-D)*(gt-Pe)/(R-D)}const X=r=>J("clusterBy",r),Ce=r=>J("moveBy",r),H=r=>re(r),ee=r=>fe.set([r]);return t.$$.update=()=>{t.$$.dirty[0]&524288&&l(15,u=oe.map(([r])=>r)),t.$$.dirty[0]&262161&&l(17,f=Object.entries(Q).filter(([r,_])=>{const C=b.selectedClusterValue?_.dataPoints.some(P=>{var z;return((z=P[b.clusterBy])==null?void 0:z.toString())===b.selectedClusterValue.toString()}):!0,U=G.toLowerCase(),B=b.queryCategory||"name",q=U.length>=3?_.dataPoints.some(P=>{var z;return(z=P[B])==null?void 0:z.toString().toLowerCase().includes(U)}):!0;return C&&q}).reduce((r,[_,C])=>(r[_]=C,r),{})),t.$$.dirty[0]&131072&&l(2,m=Object.entries(f).map(([r,_])=>[r,_.dataPoints.length])),t.$$.dirty[0]&4&&l(16,c=m.map(([r,_])=>_)),t.$$.dirty[0]&65536&&(i=c.length>0?Math.min(...c):0),t.$$.dirty[0]&65536&&(N=c.length>0?Math.max(...c):1),t.$$.dirty[0]&294920&&l(1,y=(()=>{const r=Object.values(Q),_=new Set(se),C=_.size>0;let U=u;const B=[];C&&(U=u.filter(q=>{for(let P=0;P<r.length;P++){const z=r[P];if(_.has(z.moveBy)&&z.categories.includes(q))return!0}return!1}));for(let q=0;q<U.length;q++){const P=U[q];let z=0;for(let j=0;j<r.length;j++){const p=r[j];(!C||_.has(p.moveBy))&&p.categories.includes(P)&&z++}B.push([P,z])}return B})()),t.$$.dirty[0]&2&&l(14,S=y.map(([r,_])=>_)),t.$$.dirty[0]&16384&&(D=S.length>0?Math.min(...S):0),t.$$.dirty[0]&16384&&(R=S.length>0?Math.max(...S):1)},l(6,s=at.filter(r=>!pe.includes(r))),l(5,a=ct.filter(r=>!W.includes(r))),[G,y,m,se,b,a,s,K,J,re,x,ie,me,ye,S,u,c,f,Q,oe,X,Ce,H,ee]}class mt extends Ye{constructor(e){super(),Ze(this,e,pt,_t,Xe,{},null,[-1,-1])}}function yt(t){let e,l="Loading...";return{c(){e=v("p"),e.textContent=l,this.h()},l(s){e=g(s,"P",{class:!0,"data-svelte-h":!0}),_e(e)!=="svelte-qdsr2u"&&(e.textContent=l),this.h()},h(){k(e,"class","svelte-13tgnqv")},m(s,a){$(s,e,a)},i:Le,o:Le,d(s){s&&d(e)}}}function Ct(t){let e,l,s;return l=new dt({}),{c(){e=v("div"),$e(l.$$.fragment),this.h()},l(a){e=g(a,"DIV",{class:!0});var u=V(e);xe(l.$$.fragment,u),u.forEach(d),this.h()},h(){k(e,"class","svelte-13tgnqv")},m(a,u){$(a,e,u),et(l,e,null),s=!0},i(a){s||(we(l.$$.fragment,a),s=!0)},o(a){Ie(l.$$.fragment,a),s=!1},d(a){a&&d(e),tt(l)}}}function bt(t){let e,l,s,a,u,f,m;const c=[Ct,yt],i=[];function N(y,S){return y[0].length>0?0:1}return l=N(t),s=i[l]=c[l](t),f=new mt({}),{c(){e=v("main"),s.c(),a=F(),u=v("div"),$e(f.$$.fragment),this.h()},l(y){e=g(y,"MAIN",{});var S=V(e);s.l(S),a=T(S),u=g(S,"DIV",{class:!0});var D=V(u);xe(f.$$.fragment,D),D.forEach(d),S.forEach(d),this.h()},h(){k(u,"class","svelte-13tgnqv")},m(y,S){$(y,e,S),i[l].m(e,null),h(e,a),h(e,u),et(f,u,null),m=!0},p(y,[S]){let D=l;l=N(y),l!==D&&(ot(),Ie(i[D],1,1,()=>{i[D]=null}),nt(),s=i[l],s||(s=i[l]=c[l](y),s.c()),we(s,1),s.m(e,a))},i(y){m||(we(s),we(f.$$.fragment,y),m=!0)},o(y){Ie(s),Ie(f.$$.fragment,y),m=!1},d(y){y&&d(e),i[l].d(),tt(f)}}}function kt(t,e,l){let s;return be(t,Fe,a=>l(0,s=a)),st(async()=>{const a=await ft(rt+"/data/update-until-2022/data.tsv");Fe.set(a),ut.set(window.innerWidth),ht.set(600)}),[s]}class wt extends Ye{constructor(e){super(),Ze(this,e,kt,bt,Xe,{})}}export{wt as component};