import{s as E,o as v,i as C,f as m,k as I,p as N,e as p,a as A,c as u,b as h,g as M,m as b,h as _}from"../chunks/scheduler.D7Q2dnVI.js";import{S as P,i as V,t as f,a as d,c as j,b as w,d as k,m as y,e as x,g as q}from"../chunks/index.BmfHaTgE.js";import{b as O}from"../chunks/paths.BFqNsWpV.js";import{d as D,w as R,h as W}from"../chunks/stores.CxXQ8zAK.js";import{S as z,t as B}from"../chunks/dsv.BCd7Y8Gd.js";import{C as F}from"../chunks/ControlPanel.BVFlLyyS.js";function S(l){let e,s,t,a,n,i,c;return t=new z({}),i=new F({}),{c(){e=p("main"),s=p("div"),w(t.$$.fragment),a=A(),n=p("div"),w(i.$$.fragment),this.h()},l(o){e=u(o,"MAIN",{});var r=h(e);s=u(r,"DIV",{class:!0});var $=h(s);k(t.$$.fragment,$),$.forEach(m),a=M(r),n=u(r,"DIV",{class:!0});var g=h(n);k(i.$$.fragment,g),g.forEach(m),r.forEach(m),this.h()},h(){b(s,"class","svelte-wohxbi"),b(n,"class","svelte-wohxbi")},m(o,r){C(o,e,r),_(e,s),y(t,s,null),_(e,a),_(e,n),y(i,n,null),c=!0},i(o){c||(f(t.$$.fragment,o),f(i.$$.fragment,o),c=!0)},o(o){d(t.$$.fragment,o),d(i.$$.fragment,o),c=!1},d(o){o&&m(e),x(t),x(i)}}}function G(l){let e,s,t=l[0].length>0&&S();return{c(){t&&t.c(),e=v()},l(a){t&&t.l(a),e=v()},m(a,n){t&&t.m(a,n),C(a,e,n),s=!0},p(a,[n]){a[0].length>0?t?n&1&&f(t,1):(t=S(),t.c(),f(t,1),t.m(e.parentNode,e)):t&&(q(),d(t,1,1,()=>{t=null}),j())},i(a){s||(f(t),s=!0)},o(a){d(t),s=!1},d(a){a&&m(e),t&&t.d(a)}}}function H(l,e,s){let t;return I(l,D,a=>s(0,t=a)),N(async()=>{const n=(await B(O+"/data/update-until-2022/data.tsv")).map(i=>{const c={};for(const[o,r]of Object.entries(i))c[o]=r!=null&&r.trim()?r:"NA";return c});D.set(n),R.set(window.innerWidth),W.set(650)}),[t]}class X extends P{constructor(e){super(),V(this,e,H,G,E,{})}}export{X as component};