import{s as O,e as _,c as m,b as d,f,m as h,i as M,n as y,r as T,H as E,a as H,I as S,g as j,h as u}from"../chunks/scheduler.D7Q2dnVI.js";import{e as I}from"../chunks/each.D6YF6ztN.js";import{S as x,i as z}from"../chunks/index.BmfHaTgE.js";import"../chunks/constants.UMJNy51y.js";const C=async({fetch:n})=>({posts:await(await n("/api/snippets")).json()}),J=Object.freeze(Object.defineProperty({__proto__:null,load:C},Symbol.toStringTag,{value:"Module"}));function P(n,t,l){const e=n.slice();return e[1]=t[l],e}function A(n){let t,l,e,a,r=n[1].meta.title+"",s,o,p,v=n[1].meta.caption+"",q,g;return{c(){t=_("a"),l=_("div"),e=_("h1"),a=new E(!1),s=H(),o=_("p"),p=new E(!1),q=H(),this.h()},l(i){t=m(i,"A",{href:!0,"data-sveltekit-reload":!0,class:!0});var c=d(t);l=m(c,"DIV",{class:!0});var b=d(l);e=m(b,"H1",{class:!0});var w=d(e);a=S(w,!1),w.forEach(f),s=j(b),o=m(b,"P",{class:!0});var k=d(o);p=S(k,!1),k.forEach(f),b.forEach(f),q=j(c),c.forEach(f),this.h()},h(){a.a=null,h(e,"class","svelte-1qu77a6"),p.a=null,h(o,"class","svelte-1qu77a6"),h(l,"class","grid-container svelte-1qu77a6"),h(t,"href",g=n[1].path.replace("/texts/","")),h(t,"data-sveltekit-reload",""),h(t,"class","svelte-1qu77a6")},m(i,c){M(i,t,c),u(t,l),u(l,e),a.m(r,e),u(l,s),u(l,o),p.m(v,o),u(t,q)},p(i,c){c&1&&r!==(r=i[1].meta.title+"")&&a.p(r),c&1&&v!==(v=i[1].meta.caption+"")&&p.p(v),c&1&&g!==(g=i[1].path.replace("/texts/",""))&&h(t,"href",g)},d(i){i&&f(t)}}}function D(n){let t,l=I(n[0].posts),e=[];for(let a=0;a<l.length;a+=1)e[a]=A(P(n,l,a));return{c(){t=_("main");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=m(a,"MAIN",{class:!0});var r=d(t);for(let s=0;s<e.length;s+=1)e[s].l(r);r.forEach(f),this.h()},h(){h(t,"class","svelte-1qu77a6")},m(a,r){M(a,t,r);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null)},p(a,[r]){if(r&1){l=I(a[0].posts);let s;for(s=0;s<l.length;s+=1){const o=P(a,l,s);e[s]?e[s].p(o,r):(e[s]=A(o),e[s].c(),e[s].m(t,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=l.length}},i:y,o:y,d(a){a&&f(t),T(e,a)}}}function N(n,t,l){let{data:e}=t;return n.$$set=a=>{"data"in a&&l(0,e=a.data)},[e]}class K extends x{constructor(t){super(),z(this,t,N,D,O,{data:0})}}export{K as component,J as universal};