import{s as ge,p as S,i as q,f as c,k as x,q as ve,e as g,a as M,J as de,c as v,b as k,g as T,K as me,o as _,h as d,r as be,t as B,d as F,n as V,v as pe,L as ee,j as ke}from"../chunks/scheduler.C4GZKIzL.js";import{S as Ee,i as je,t as K,a as $,c as we,b as qe,d as De,m as Ie,e as te,f as Ve,g as Se}from"../chunks/index.DmHFZWEd.js";import{e as W}from"../chunks/each.D6YF6ztN.js";import{b as L}from"../chunks/paths.Ds01Lpgu.js";import{f as le}from"../chunks/index.CQMUyqpL.js";import{b as ae,a as se,c as ye,w as Ae,h as Ne,d as ie}from"../chunks/stores.DNmsBm8e.js";import{S as Pe,t as He}from"../chunks/dsv.ioJWskyJ.js";import{p as Me}from"../chunks/stores.BVwlhjrS.js";const Te=async({fetch:i})=>({posts:await(await i("/api/snippets")).json()}),Ze=Object.freeze(Object.defineProperty({__proto__:null,load:Te},Symbol.toStringTag,{value:"Module"}));function ne(i,l,s){const e=i.slice();return e[9]=l[s],e}function re(i,l,s){const e=i.slice();return e[12]=l[s],e}function oe(i){var Q,U;let l,s,e,a,t,r,n,f,E,b,j,o,u,N=((Q=i[4])==null?void 0:Q.meta.title)+"",P,D,R,w,z,m=i[1]&&fe(i),p=i[0]&&ce(i);n=new Pe({});let H=i[4].meta.caption&&Oe(),y=i[4].text&&Ce(i),A=((U=i[4])==null?void 0:U.meta.media)&&Le(i);return{c(){l=g("header"),s=g("div"),m&&m.c(),e=M(),p&&p.c(),a=M(),t=g("main"),r=g("div"),qe(n.$$.fragment),f=M(),H&&H.c(),E=M(),b=g("div"),j=g("div"),o=g("h1"),u=new de(!1),P=M(),D=g("div"),y&&y.c(),R=M(),A&&A.c(),this.h()},l(h){l=v(h,"HEADER",{});var I=k(l);s=v(I,"DIV",{class:!0});var O=k(s);m&&m.l(O),e=T(O),p&&p.l(O),O.forEach(c),I.forEach(c),a=T(h),t=v(h,"MAIN",{});var C=k(t);r=v(C,"DIV",{class:!0});var X=k(r);De(n.$$.fragment,X),X.forEach(c),f=T(C),H&&H.l(C),E=T(C),b=v(C,"DIV",{class:!0});var G=k(b);j=v(G,"DIV",{class:!0});var Y=k(j);o=v(Y,"H1",{class:!0});var Z=k(o);u=me(Z,!1),Z.forEach(c),Y.forEach(c),P=T(G),D=v(G,"DIV",{class:!0});var J=k(D);y&&y.l(J),R=T(J),A&&A.l(J),J.forEach(c),G.forEach(c),C.forEach(c),this.h()},h(){_(s,"class","navigation svelte-10j8q7t"),_(r,"class","sketch svelte-10j8q7t"),u.a=null,_(o,"class","svelte-10j8q7t"),_(j,"class","title"),_(D,"class","content"),_(b,"class","info svelte-10j8q7t")},m(h,I){q(h,l,I),d(l,s),m&&m.m(s,null),d(s,e),p&&p.m(s,null),q(h,a,I),q(h,t,I),d(t,r),Ie(n,r,null),d(t,f),H&&H.m(t,null),d(t,E),d(t,b),d(b,j),d(j,o),u.m(N,o),d(b,P),d(b,D),y&&y.m(D,null),d(D,R),A&&A.m(D,null),z=!0},p(h,I){var O;h[1]?m?m.p(h,I):(m=fe(h),m.c(),m.m(s,e)):m&&(m.d(1),m=null),h[0]?p?p.p(h,I):(p=ce(h),p.c(),p.m(s,null)):p&&(p.d(1),p=null),h[4].text&&y.p(h,I),(O=h[4])!=null&&O.meta.media&&A.p(h,I)},i(h){z||(K(n.$$.fragment,h),h&&be(()=>{z&&(w||(w=te(t,le,{},!0)),w.run(1))}),z=!0)},o(h){$(n.$$.fragment,h),h&&(w||(w=te(t,le,{},!1)),w.run(0)),z=!1},d(h){h&&(c(l),c(a),c(t)),m&&m.d(),p&&p.d(),Ve(n),H&&H.d(),y&&y.d(),A&&A.d(),h&&w&&w.end()}}}function fe(i){let l,s,e;return{c(){l=g("a"),s=B("↲"),this.h()},l(a){l=v(a,"A",{class:!0,target:!0,href:!0});var t=k(l);s=F(t,"↲"),t.forEach(c),this.h()},h(){_(l,"class","prev svelte-10j8q7t"),_(l,"target","_self"),_(l,"href",e=L+"/stories/"+i[1].path.replace("/texts/",""))},m(a,t){q(a,l,t),d(l,s)},p(a,t){t&2&&e!==(e=L+"/stories/"+a[1].path.replace("/texts/",""))&&_(l,"href",e)},d(a){a&&c(l)}}}function ce(i){let l,s,e;return{c(){l=g("a"),s=B("↳"),this.h()},l(a){l=v(a,"A",{class:!0,target:!0,href:!0});var t=k(l);s=F(t,"↳"),t.forEach(c),this.h()},h(){_(l,"class","next svelte-10j8q7t"),_(l,"target","_self"),_(l,"href",e=L+"/stories/"+i[0].path.replace("/texts/",""))},m(a,t){q(a,l,t),d(l,s)},p(a,t){t&1&&e!==(e=L+"/stories/"+a[0].path.replace("/texts/",""))&&_(l,"href",e)},d(a){a&&c(l)}}}function Oe(i){return{c:V,l:V,m:V,d:V}}function Ce(i){let l,s,e=i[4].text+"";return{c(){l=g("div"),s=new de(!1),this.h()},l(a){l=v(a,"DIV",{class:!0});var t=k(l);s=me(t,!1),t.forEach(c),this.h()},h(){s.a=null,_(l,"class","description svelte-10j8q7t")},m(a,t){q(a,l,t),s.m(e,l)},p:V,d(a){a&&c(l)}}}function Le(i){let l,s=i[4].meta.config.highlightedEntities&&Re(i);return{c(){s&&s.c(),l=S()},l(e){s&&s.l(e),l=S()},m(e,a){s&&s.m(e,a),q(e,l,a)},p(e,a){e[4].meta.config.highlightedEntities&&s.p(e,a)},d(e){e&&c(l),s&&s.d(e)}}}function Re(i){var a;let l,s=W((a=i[4])==null?void 0:a.meta.config.highlightedEntities),e=[];for(let t=0;t<s.length;t+=1)e[t]=ue(ne(i,s,t));return{c(){l=g("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){l=v(t,"DIV",{class:!0});var r=k(l);for(let n=0;n<e.length;n+=1)e[n].l(r);r.forEach(c),this.h()},h(){_(l,"class","medias svelte-10j8q7t")},m(t,r){q(t,l,r);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,null)},p(t,r){var n;if(r&20){s=W((n=t[4])==null?void 0:n.meta.config.highlightedEntities);let f;for(f=0;f<s.length;f+=1){const E=ne(t,s,f);e[f]?e[f].p(E,r):(e[f]=ue(E),e[f].c(),e[f].m(l,null))}for(;f<e.length;f+=1)e[f].d(1);e.length=s.length}},d(t){t&&c(l),pe(e,t)}}}function he(i){let l;function s(...t){return i[6](i[9],...t)}let e=W(i[2].filter(s)),a=[];for(let t=0;t<e.length;t+=1)a[t]=_e(re(i,e,t));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();l=S()},l(t){for(let r=0;r<a.length;r+=1)a[r].l(t);l=S()},m(t,r){for(let n=0;n<a.length;n+=1)a[n]&&a[n].m(t,r);q(t,l,r)},p(t,r){if(i=t,r&20){e=W(i[2].filter(s));let n;for(n=0;n<e.length;n+=1){const f=re(i,e,n);a[n]?a[n].p(f,r):(a[n]=_e(f),a[n].c(),a[n].m(l.parentNode,l))}for(;n<a.length;n+=1)a[n].d(1);a.length=e.length}},d(t){t&&c(l),pe(a,t)}}}function ze(i){return{c:V,l:V,m:V,p:V,d:V}}function Ge(i){let l,s,e,a,t,r,n,f=i[12].name+"",E,b,j;return{c(){l=g("a"),s=g("div"),e=g("img"),r=M(),n=g("p"),E=B(f),b=M(),this.h()},l(o){l=v(o,"A",{href:!0,target:!0,class:!0});var u=k(l);s=v(u,"DIV",{class:!0});var N=k(s);e=v(N,"IMG",{src:!0,alt:!0,class:!0}),r=T(N),n=v(N,"P",{class:!0});var P=k(n);E=F(P,f),P.forEach(c),N.forEach(c),b=T(u),u.forEach(c),this.h()},h(){ee(e.src,a=i[12].image)||_(e,"src",a),_(e,"alt",t=i[12].name),_(e,"class","svelte-10j8q7t"),_(n,"class","svelte-10j8q7t"),_(s,"class","athlete svelte-10j8q7t"),_(l,"href",j=i[12].url),_(l,"target","_blank"),_(l,"class","svelte-10j8q7t")},m(o,u){q(o,l,u),d(l,s),d(s,e),d(s,r),d(s,n),d(n,E),d(l,b)},p(o,u){u&4&&!ee(e.src,a=o[12].image)&&_(e,"src",a),u&4&&t!==(t=o[12].name)&&_(e,"alt",t),u&4&&f!==(f=o[12].name+"")&&ke(E,f),u&4&&j!==(j=o[12].url)&&_(l,"href",j)},d(o){o&&c(l)}}}function _e(i){let l;function s(t,r){return t[12].image?Ge:ze}let e=s(i),a=e(i);return{c(){a.c(),l=S()},l(t){a.l(t),l=S()},m(t,r){a.m(t,r),q(t,l,r)},p(t,r){e===(e=s(t))&&a?a.p(t,r):(a.d(1),a=e(t),a&&(a.c(),a.m(l.parentNode,l)))},d(t){t&&c(l),a.d(t)}}}function ue(i){let l,s=i[2]&&he(i);return{c(){s&&s.c(),l=S()},l(e){s&&s.l(e),l=S()},m(e,a){s&&s.m(e,a),q(e,l,a)},p(e,a){e[2]?s?s.p(e,a):(s=he(e),s.c(),s.m(l.parentNode,l)):s&&(s.d(1),s=null)},d(e){e&&c(l),s&&s.d(e)}}}function Je(i){let l,s,e=i[4]!=null&&i[3].length>0&&i[2].length>0&&oe(i);return{c(){e&&e.c(),l=S()},l(a){e&&e.l(a),l=S()},m(a,t){e&&e.m(a,t),q(a,l,t),s=!0},p(a,[t]){a[4]!=null&&a[3].length>0&&a[2].length>0?e?(e.p(a,t),t&12&&K(e,1)):(e=oe(a),e.c(),K(e,1),e.m(l.parentNode,l)):e&&(Se(),$(e,1,1,()=>{e=null}),we())},i(a){s||(K(e),s=!0)},o(a){$(e),s=!1},d(a){a&&c(l),e&&e.d(a)}}}function Ke(i,l,s){let e,a;x(i,Me,o=>s(7,e=o)),x(i,ie,o=>s(3,a=o));let{data:t}=l,r=t,n=r.posts.find(o=>o.path.includes(e.params.slug)),f=null,E=null;if(n){const o=r.posts.findIndex(u=>u.path.includes(e.params.slug));f=r.posts[o+1]||r.posts[0],E=r.posts[o-1]||r.posts[r.posts.length-1],ae.update(u=>({...u,...n.meta.config})),se.set(n.meta.config.highlightedEntities||[])}let b=[];ve(async()=>{Ae.set(window.innerWidth),Ne.set(550);const u=(await He(L+"/data/update-until-2022/data.tsv")).map(P=>{const D={};for(const[R,w]of Object.entries(P))D[R]=w!=null&&w.trim()?w:"NA";return D});ie.set(u);const N=await fetch(L+"/data/athletes.json");s(2,b=await N.json())}),n&&(ae.update(o=>({...o,...n.meta.config})),se.set(n.meta.config.highlightedEntities||[]),ye.set(n.meta.caption||""));const j=(o,u)=>u.name.toLowerCase()==o;return i.$$set=o=>{"data"in o&&s(5,t=o.data)},[f,E,b,a,n,t,j]}class xe extends Ee{constructor(l){super(),je(this,l,Ke,Je,ge,{data:5})}}export{xe as component,Ze as universal};