import{s as y,D as b,e as m,a as v,c as d,l as S,g as E,b as L,f as u,m as p,y as f,i as _,E as M,F as T,G as k,k as C}from"../chunks/scheduler.3V_Ra38V.js";import{S as H,i as $,t as j,a as A}from"../chunks/index.CryiHHAf.js";import{b as B}from"../chunks/stores.B6PDPKcG.js";import{b as h}from"../chunks/paths.ByUBIBen.js";import{c as g}from"../chunks/constants.BegGPDFy.js";const D=!0,O="always",P=Object.freeze(Object.defineProperty({__proto__:null,prerender:D,trailingSlash:O},Symbol.toStringTag,{value:"Module"}));function R(s){let l,n=`<a href="${h}/stories" class="svelte-dngnlc">Stories</a> <a href="${h}/search" class="svelte-dngnlc">Search</a>`,i,o,r;const c=s[4].default,t=b(c,s,s[3],null);return{c(){l=m("header"),l.innerHTML=n,i=v(),o=m("article"),t&&t.c(),this.h()},l(e){l=d(e,"HEADER",{"data-sveltekit-reload":!0,class:!0,"data-svelte-h":!0}),S(l)!=="svelte-vt41u2"&&(l.innerHTML=n),i=E(e),o=d(e,"ARTICLE",{style:!0});var a=L(o);t&&t.l(a),a.forEach(u),this.h()},h(){p(l,"data-sveltekit-reload",""),p(l,"class","svelte-dngnlc"),f(o,"--main-color","hsl("+s[1][0]+", "+s[1][1]+"%, "+s[1][2]+"%)"),f(o,"--second-color","hsl("+s[0][0]+", "+s[0][1]+"%, "+s[0][2]+"%)")},m(e,a){_(e,l,a),_(e,i,a),_(e,o,a),t&&t.m(o,null),r=!0},p(e,[a]){t&&t.p&&(!r||a&8)&&M(t,c,e,e[3],r?k(c,e[3],a,null):T(e[3]),null),(!r||a&2)&&f(o,"--main-color","hsl("+e[1][0]+", "+e[1][1]+"%, "+e[1][2]+"%)"),(!r||a&1)&&f(o,"--second-color","hsl("+e[0][0]+", "+e[0][1]+"%, "+e[0][2]+"%)")},i(e){r||(j(t,e),r=!0)},o(e){A(t,e),r=!1},d(e){e&&(u(l),u(i),u(o)),t&&t.d(e)}}}function q(s,l,n){let i,o,r;C(s,B,e=>n(2,r=e));let{$$slots:c={},$$scope:t}=l;return s.$$set=e=>{"$$scope"in e&&n(3,t=e.$$scope)},s.$$.update=()=>{var e,a;s.$$.dirty&4&&n(1,i=((e=g[r.clusterBy])==null?void 0:e.start)||[0,0,0]),s.$$.dirty&4&&n(0,o=((a=g[r.clusterBy])==null?void 0:a.end)||[0,0,0])},[o,i,r,t,c]}class J extends H{constructor(l){super(),$(this,l,q,R,y,{})}}export{J as component,P as universal};
