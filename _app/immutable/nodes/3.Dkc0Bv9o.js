import{s as xe,e as g,a as F,t as J,c as p,b as E,l as Ce,g as M,f as d,d as W,m as k,i as x,h as u,E as re,j as oe,n as ze,B as Le,F as ot,k as ke,G as le,r as pe,I as je,q as it}from"../chunks/scheduler.evRM0l9T.js";import{S as et,i as tt,b as lt,d as st,m as nt,t as Oe,c as at,a as Pe,e as rt,g as ct}from"../chunks/index.aiZKxZDj.js";import{b as ut}from"../chunks/paths.DPi2-1kn.js";import{h as _e,e as Qe,c as ge,b as ht,d as Ue,w as ft,a as dt}from"../chunks/stores.0UUoU4mb.js";import{t as _t,S as gt}from"../chunks/dsv.C8EXQMUt.js";import{e as te}from"../chunks/each.D6YF6ztN.js";import{f as pt,a as vt}from"../chunks/constants.Bz_rcXlb.js";function He(t,e,l){const s=t.slice();return s[30]=e[l][0],s[31]=e[l][1],s}function Re(t,e,l){const s=t.slice();return s[34]=e[l],s}function Ge(t,e,l){const s=t.slice();return s[31]=e[l][0],s[37]=e[l][1],s}function Je(t,e,l){const s=t.slice();return s[34]=e[l],s}function We(t){let e,l=t[34]+"",s,a,h,f;function v(){return t[20](t[34])}return{c(){e=g("span"),s=J(l),a=F(),this.h()},l(c){e=p(c,"SPAN",{class:!0});var i=E(e);s=W(i,l),a=M(i),i.forEach(d),this.h()},h(){k(e,"class","svelte-a70ib4"),le(e,"selected",t[34]===t[4].clusterBy)},m(c,i){x(c,e,i),u(e,s),u(e,a),h||(f=re(e,"click",v),h=!0)},p(c,i){t=c,i[0]&64&&l!==(l=t[34]+"")&&oe(s,l),i[0]&80&&le(e,"selected",t[34]===t[4].clusterBy)},d(c){c&&d(e),h=!1,f()}}}function Ke(t){let e,l=t[31]+"",s,a,h,f;function v(){return t[21](t[31])}return{c(){e=g("span"),s=J(l),a=F(),this.h()},l(c){e=p(c,"SPAN",{style:!0,class:!0});var i=E(e);s=W(i,l),a=M(i),i.forEach(d),this.h()},h(){pe(e,"font-size",t[13](t[37])+"px"),k(e,"class","svelte-a70ib4"),le(e,"highlighted",t[31]==t[4].selectedClusterValue)},m(c,i){x(c,e,i),u(e,s),u(e,a),h||(f=re(e,"click",v),h=!0)},p(c,i){t=c,i[0]&2&&l!==(l=t[31]+"")&&oe(s,l),i[0]&2&&pe(e,"font-size",t[13](t[37])+"px"),i[0]&18&&le(e,"highlighted",t[31]==t[4].selectedClusterValue)},d(c){c&&d(e),h=!1,f()}}}function Xe(t){let e,l=t[34]+"",s,a,h,f;function v(){return t[22](t[34])}return{c(){e=g("span"),s=J(l),a=F(),this.h()},l(c){e=p(c,"SPAN",{class:!0});var i=E(e);s=W(i,l),a=M(i),i.forEach(d),this.h()},h(){k(e,"class","svelte-a70ib4"),le(e,"selected",t[34]===t[4].moveBy)},m(c,i){x(c,e,i),u(e,s),u(e,a),h||(f=re(e,"click",v),h=!0)},p(c,i){t=c,i[0]&32&&l!==(l=t[34]+"")&&oe(s,l),i[0]&48&&le(e,"selected",t[34]===t[4].moveBy)},d(c){c&&d(e),h=!1,f()}}}function Ye(t){let e,l=t[30]+"",s,a,h;function f(){return t[23](t[30])}return{c(){e=g("span"),s=J(l),this.h()},l(v){e=p(v,"SPAN",{style:!0,class:!0});var c=E(e);s=W(c,l),c.forEach(d),this.h()},h(){pe(e,"font-size",t[12](t[31])+"px"),k(e,"class","svelte-a70ib4"),le(e,"highlighted",t[3].includes(t[30]))},m(v,c){x(v,e,c),u(e,s),a||(h=re(e,"click",f),a=!0)},p(v,c){t=v,c[0]&4&&l!==(l=t[30]+"")&&oe(s,l),c[0]&4&&pe(e,"font-size",t[12](t[31])+"px"),c[0]&12&&le(e,"highlighted",t[3].includes(t[30]))},d(v){v&&d(e),a=!1,h()}}}function Ze(t){let e,l,s=t[2].length+"",a;return{c(){e=g("p"),l=J("50 out of "),a=J(s),this.h()},l(h){e=p(h,"P",{style:!0});var f=E(e);l=W(f,"50 out of "),a=W(f,s),f.forEach(d),this.h()},h(){pe(e,"border-top","1px solid"),pe(e,"padding-top","10px")},m(h,f){x(h,e,f),u(e,l),u(e,a)},p(h,f){f[0]&4&&s!==(s=h[2].length+"")&&oe(a,s)},d(h){h&&d(e)}}}function mt(t){let e,l,s,a="Reset",h,f,v="Copy Config",c,i,A,m,q="Cluster By:",N,K,se,T,y,ne,j=t[4].clusterBy+"",ie,ve,me,X,ae,Y,ee,Ee="Move By:",ye,Z,be,U,$,o,_=t[4].moveBy+"",V,Q,H,b,P,C,R,G,De,ce=te(t[6]),I=[];for(let r=0;r<ce.length;r+=1)I[r]=We(Je(t,ce,r));let ue=te(t[1]),w=[];for(let r=0;r<ue.length;r+=1)w[r]=Ke(Ge(t,ue,r));let he=te(t[5]),L=[];for(let r=0;r<he.length;r+=1)L[r]=Xe(Re(t,he,r));let fe=te(t[2].slice(0,50).sort($e)),O=[];for(let r=0;r<fe.length;r+=1)O[r]=Ye(He(t,fe,r));let z=t[2].length>50&&Ze(t);return{c(){e=g("header"),l=g("div"),s=g("button"),s.textContent=a,h=F(),f=g("button"),f.textContent=v,c=F(),i=g("div"),A=g("div"),m=g("label"),m.textContent=q,N=F(),K=g("div");for(let r=0;r<I.length;r+=1)I[r].c();se=F(),T=g("div"),y=g("label"),ne=J("Values for "),ie=J(j),ve=J(":"),me=F(),X=g("div");for(let r=0;r<w.length;r+=1)w[r].c();ae=F(),Y=g("div"),ee=g("label"),ee.textContent=Ee,ye=F(),Z=g("div");for(let r=0;r<L.length;r+=1)L[r].c();be=F(),U=g("div"),$=g("label"),o=J("Filter "),V=J(_),Q=J(" By:"),H=F(),b=g("input"),P=F(),C=g("div");for(let r=0;r<O.length;r+=1)O[r].c();R=F(),z&&z.c(),this.h()},l(r){e=p(r,"HEADER",{class:!0});var S=E(e);l=p(S,"DIV",{class:!0});var n=E(l);s=p(n,"BUTTON",{class:!0,"data-svelte-h":!0}),Ce(s)!=="svelte-qy1k7w"&&(s.textContent=a),h=M(n),f=p(n,"BUTTON",{class:!0,"data-svelte-h":!0}),Ce(f)!=="svelte-18xqo2h"&&(f.textContent=v),n.forEach(d),c=M(S),i=p(S,"DIV",{class:!0});var B=E(i);A=p(B,"DIV",{class:!0});var Be=E(A);m=p(Be,"LABEL",{"data-svelte-h":!0}),Ce(m)!=="svelte-1ekr4iz"&&(m.textContent=q),N=M(Be),K=p(Be,"DIV",{class:!0});var Fe=E(K);for(let D=0;D<I.length;D+=1)I[D].l(Fe);Fe.forEach(d),Be.forEach(d),se=M(B),T=p(B,"DIV",{class:!0});var Ve=E(T);y=p(Ve,"LABEL",{});var Se=E(y);ne=W(Se,"Values for "),ie=W(Se,j),ve=W(Se,":"),Se.forEach(d),me=M(Ve),X=p(Ve,"DIV",{class:!0});var Me=E(X);for(let D=0;D<w.length;D+=1)w[D].l(Me);Me.forEach(d),Ve.forEach(d),ae=M(B),Y=p(B,"DIV",{class:!0});var qe=E(Y);ee=p(qe,"LABEL",{"data-svelte-h":!0}),Ce(ee)!=="svelte-8r6yw"&&(ee.textContent=Ee),ye=M(qe),Z=p(qe,"DIV",{class:!0});var Te=E(Z);for(let D=0;D<L.length;D+=1)L[D].l(Te);Te.forEach(d),qe.forEach(d),be=M(B),U=p(B,"DIV",{class:!0});var de=E(U);$=p(de,"LABEL",{});var Ie=E($);o=W(Ie,"Filter "),V=W(Ie,_),Q=W(Ie," By:"),Ie.forEach(d),H=M(de),b=p(de,"INPUT",{type:!0,placeholder:!0,class:!0}),P=M(de),C=p(de,"DIV",{class:!0});var we=E(C);for(let D=0;D<O.length;D+=1)O[D].l(we);R=M(we),z&&z.l(we),we.forEach(d),de.forEach(d),B.forEach(d),S.forEach(d),this.h()},h(){k(s,"class","reset svelte-a70ib4"),k(f,"class","copy-config svelte-a70ib4"),k(l,"class","header-buttons svelte-a70ib4"),k(K,"class","options svelte-a70ib4"),k(A,"class","category svelte-a70ib4"),k(X,"class","options tiny svelte-a70ib4"),k(T,"class","filtered-cluster-values svelte-a70ib4"),k(Z,"class","options svelte-a70ib4"),k(Y,"class","category svelte-a70ib4"),k(b,"type","text"),k(b,"placeholder","Enter your query"),b.value=t[0],k(b,"class","svelte-a70ib4"),k(C,"class","options tiny svelte-a70ib4"),k(U,"class","filtered-entities svelte-a70ib4"),k(i,"class","categories svelte-a70ib4"),k(e,"class","svelte-a70ib4")},m(r,S){x(r,e,S),u(e,l),u(l,s),u(l,h),u(l,f),u(e,c),u(e,i),u(i,A),u(A,m),u(A,N),u(A,K);for(let n=0;n<I.length;n+=1)I[n]&&I[n].m(K,null);u(i,se),u(i,T),u(T,y),u(y,ne),u(y,ie),u(y,ve),u(T,me),u(T,X);for(let n=0;n<w.length;n+=1)w[n]&&w[n].m(X,null);u(i,ae),u(i,Y),u(Y,ee),u(Y,ye),u(Y,Z);for(let n=0;n<L.length;n+=1)L[n]&&L[n].m(Z,null);u(i,be),u(i,U),u(U,$),u($,o),u($,V),u($,Q),u(U,H),u(U,b),u(U,P),u(U,C);for(let n=0;n<O.length;n+=1)O[n]&&O[n].m(C,null);u(C,R),z&&z.m(C,null),G||(De=[re(s,"click",t[10]),re(f,"click",t[11]),re(b,"input",t[7])],G=!0)},p(r,S){if(S[0]&336){ce=te(r[6]);let n;for(n=0;n<ce.length;n+=1){const B=Je(r,ce,n);I[n]?I[n].p(B,S):(I[n]=We(B),I[n].c(),I[n].m(K,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=ce.length}if(S[0]&16&&j!==(j=r[4].clusterBy+"")&&oe(ie,j),S[0]&8722){ue=te(r[1]);let n;for(n=0;n<ue.length;n+=1){const B=Ge(r,ue,n);w[n]?w[n].p(B,S):(w[n]=Ke(B),w[n].c(),w[n].m(X,null))}for(;n<w.length;n+=1)w[n].d(1);w.length=ue.length}if(S[0]&304){he=te(r[5]);let n;for(n=0;n<he.length;n+=1){const B=Re(r,he,n);L[n]?L[n].p(B,S):(L[n]=Xe(B),L[n].c(),L[n].m(Z,null))}for(;n<L.length;n+=1)L[n].d(1);L.length=he.length}if(S[0]&16&&_!==(_=r[4].moveBy+"")&&oe(V,_),S[0]&1&&b.value!==r[0]&&(b.value=r[0]),S[0]&4108){fe=te(r[2].slice(0,50).sort($e));let n;for(n=0;n<fe.length;n+=1){const B=He(r,fe,n);O[n]?O[n].p(B,S):(O[n]=Ye(B),O[n].c(),O[n].m(C,R))}for(;n<O.length;n+=1)O[n].d(1);O.length=fe.length}r[2].length>50?z?z.p(r,S):(z=Ze(r),z.c(),z.m(C,null)):z&&(z.d(1),z=null)},i:ze,o:ze,d(r){r&&d(e),Le(I,r),Le(w,r),Le(L,r),Le(O,r),z&&z.d(),G=!1,ot(De)}}}const Ae=12,yt=30,Ne=12,bt=30,$e=([t],[e])=>t.localeCompare(e);function Ct(t,e,l){let s,a,h,f,v,c,i,A,m,q,N,K,se,T,y,ne;ke(t,_e,o=>l(3,se=o)),ke(t,Qe,o=>l(18,T=o)),ke(t,ge,o=>l(4,y=o)),ke(t,ht,o=>l(19,ne=o));let j=y.queryValue||"";function ie(o){o.target.value.length>3&&(l(0,j=o.target.value),ge.update(_=>({..._,queryValue:j})))}const ve=[],me=[];function X(o,_){Y(),_e.set([]),o==="clusterBy"?ge.update(V=>({...V,clusterBy:_})):o==="moveBy"&&ge.update(V=>({...V,moveBy:_}))}function ae(o){ge.update(H=>({...H,selectedClusterValue:o}));const _=j.toLowerCase(),V=y.queryCategory||"name",Q=[];Object.entries(je(Qe)).forEach(([H,b])=>{const P=b.dataPoints.some(R=>{var G;return((G=R[y.clusterBy])==null?void 0:G.toString())===o.toString()}),C=b.dataPoints.some(R=>{var G;return(G=R[V])==null?void 0:G.toString().toLowerCase().includes(_)});P&&C&&(Q.push(H),b.currentCategoryIndex=0,b.t=0,b.trail=[])}),_e.set(Q)}function Y(){ge.update(o=>({...o,queryValue:"",selectedClusterValue:null})),l(0,j=""),_e.set([])}function ee(){const o={title:"",description:"",methodology:"",media:!0,config:{clusterBy:y.clusterBy,moveBy:y.moveBy,selectedClusterValue:y.selectedClusterValue||"",queryValue:j,queryCategory:y.queryCategory||"name",speed:y.speed||3,stroke:y.stroke||1,loops:y.loopsToComplete||1,highlightedEntities:je(_e)}},_=JSON.stringify(o,null,2);navigator.clipboard.writeText(_).then(()=>{alert("Config copied to clipboard!")}).catch(V=>{console.error("Could not copy text: ",V)})}function Ee(o){return i===A?Ae:Ae+(o-i)*(yt-Ae)/(A-i)}function ye(o){return N===K?Ne:Ne+(o-N)*(bt-Ne)/(K-N)}const Z=o=>X("clusterBy",o),be=o=>ae(o),U=o=>X("moveBy",o),$=o=>_e.set([o]);return t.$$.update=()=>{t.$$.dirty[0]&524288&&l(15,h=ne.map(([o])=>o)),t.$$.dirty[0]&262161&&l(17,f=Object.entries(T).filter(([o,_])=>{const V=y.selectedClusterValue?_.dataPoints.some(P=>{var C;return((C=P[y.clusterBy])==null?void 0:C.toString())===y.selectedClusterValue.toString()}):!0,Q=j.toLowerCase(),H=y.queryCategory||"name",b=Q.length>=3?_.dataPoints.some(P=>{var C;return(C=P[H])==null?void 0:C.toString().toLowerCase().includes(Q)}):!0;return V&&b}).reduce((o,[_,V])=>(o[_]=V,o),{})),t.$$.dirty[0]&131072&&l(2,v=Object.entries(f).map(([o,_])=>[o,_.dataPoints.length])),t.$$.dirty[0]&4&&l(16,c=v.map(([o,_])=>_)),t.$$.dirty[0]&65536&&(i=c.length>0?Math.min(...c):0),t.$$.dirty[0]&65536&&(A=c.length>0?Math.max(...c):1),t.$$.dirty[0]&294920&&l(1,m=(()=>{const o=Object.values(T),_=new Set(se),V=_.size>0;let Q=h;const H=[];V&&(Q=h.filter(b=>{for(let P=0;P<o.length;P++){const C=o[P];if(_.has(C.moveBy)&&C.categories.includes(b))return!0}return!1}));for(let b=0;b<Q.length;b++){const P=Q[b];let C=0;for(let R=0;R<o.length;R++){const G=o[R];(!V||_.has(G.moveBy))&&G.categories.includes(P)&&C++}H.push([P,C])}return H})()),t.$$.dirty[0]&2&&l(14,q=m.map(([o,_])=>_)),t.$$.dirty[0]&16384&&(N=q.length>0?Math.min(...q):0),t.$$.dirty[0]&16384&&(K=q.length>0?Math.max(...q):1)},l(6,s=pt.filter(o=>!ve.includes(o))),l(5,a=vt.filter(o=>!me.includes(o))),[j,m,v,se,y,a,s,ie,X,ae,Y,ee,Ee,ye,q,h,c,f,T,ne,Z,be,U,$]}class kt extends et{constructor(e){super(),tt(this,e,Ct,mt,xe,{},null,[-1,-1])}}function Et(t){let e,l="Loading...";return{c(){e=g("p"),e.textContent=l,this.h()},l(s){e=p(s,"P",{class:!0,"data-svelte-h":!0}),Ce(e)!=="svelte-qdsr2u"&&(e.textContent=l),this.h()},h(){k(e,"class","svelte-13tgnqv")},m(s,a){x(s,e,a)},i:ze,o:ze,d(s){s&&d(e)}}}function Bt(t){let e,l,s;return l=new gt({}),{c(){e=g("div"),lt(l.$$.fragment),this.h()},l(a){e=p(a,"DIV",{class:!0});var h=E(e);st(l.$$.fragment,h),h.forEach(d),this.h()},h(){k(e,"class","svelte-13tgnqv")},m(a,h){x(a,e,h),nt(l,e,null),s=!0},i(a){s||(Pe(l.$$.fragment,a),s=!0)},o(a){Oe(l.$$.fragment,a),s=!1},d(a){a&&d(e),rt(l)}}}function Vt(t){let e,l,s,a,h,f,v;const c=[Bt,Et],i=[];function A(m,q){return m[0].length>0?0:1}return l=A(t),s=i[l]=c[l](t),f=new kt({}),{c(){e=g("main"),s.c(),a=F(),h=g("div"),lt(f.$$.fragment),this.h()},l(m){e=p(m,"MAIN",{});var q=E(e);s.l(q),a=M(q),h=p(q,"DIV",{class:!0});var N=E(h);st(f.$$.fragment,N),N.forEach(d),q.forEach(d),this.h()},h(){k(h,"class","svelte-13tgnqv")},m(m,q){x(m,e,q),i[l].m(e,null),u(e,a),u(e,h),nt(f,h,null),v=!0},p(m,[q]){let N=l;l=A(m),l!==N&&(ct(),Oe(i[N],1,1,()=>{i[N]=null}),at(),s=i[l],s||(s=i[l]=c[l](m),s.c()),Pe(s,1),s.m(e,a))},i(m){v||(Pe(s),Pe(f.$$.fragment,m),v=!0)},o(m){Oe(s),Oe(f.$$.fragment,m),v=!1},d(m){m&&d(e),i[l].d(),rt(f)}}}function St(t,e,l){let s;return ke(t,Ue,a=>l(0,s=a)),it(async()=>{const a=await _t(ut+"/data/update-until-2022/data.tsv");Ue.set(a),ft.set(window.innerWidth),dt.set(600)}),[s]}class At extends et{constructor(e){super(),tt(this,e,St,Vt,xe,{})}}export{At as component};
