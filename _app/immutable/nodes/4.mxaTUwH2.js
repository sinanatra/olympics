import{s as q,p as v,i as N,f as m,k as A,q as M,e as p,a as P,c as _,b as h,g as V,o as w,h as $,r as j}from"../chunks/scheduler.C4GZKIzL.js";import{S as O,i as R,t as d,a as u,c as W,b as k,d as y,m as x,e as D,f as S,g as z}from"../chunks/index.DmHFZWEd.js";import{b as B}from"../chunks/paths.DQlv5gAv.js";import{f as C}from"../chunks/index.CQMUyqpL.js";import{d as E,w as F,h as G}from"../chunks/stores.DNmsBm8e.js";import{S as H,t as J}from"../chunks/dsv.DaHN306V.js";import{C as K}from"../chunks/ControlPanel.Cgq067fT.js";function I(l){let e,s,t,n,r,i,o,c;return t=new H({}),i=new K({}),{c(){e=p("main"),s=p("div"),k(t.$$.fragment),n=P(),r=p("div"),k(i.$$.fragment),this.h()},l(a){e=_(a,"MAIN",{});var f=h(e);s=_(f,"DIV",{class:!0});var b=h(s);y(t.$$.fragment,b),b.forEach(m),n=V(f),r=_(f,"DIV",{class:!0});var g=h(r);y(i.$$.fragment,g),g.forEach(m),f.forEach(m),this.h()},h(){w(s,"class","svelte-wohxbi"),w(r,"class","svelte-wohxbi")},m(a,f){N(a,e,f),$(e,s),x(t,s,null),$(e,n),$(e,r),x(i,r,null),c=!0},i(a){c||(d(t.$$.fragment,a),d(i.$$.fragment,a),a&&j(()=>{c&&(o||(o=D(e,C,{},!0)),o.run(1))}),c=!0)},o(a){u(t.$$.fragment,a),u(i.$$.fragment,a),a&&(o||(o=D(e,C,{},!1)),o.run(0)),c=!1},d(a){a&&m(e),S(t),S(i),a&&o&&o.end()}}}function L(l){let e,s,t=l[0].length>0&&I();return{c(){t&&t.c(),e=v()},l(n){t&&t.l(n),e=v()},m(n,r){t&&t.m(n,r),N(n,e,r),s=!0},p(n,[r]){n[0].length>0?t?r&1&&d(t,1):(t=I(),t.c(),d(t,1),t.m(e.parentNode,e)):t&&(z(),u(t,1,1,()=>{t=null}),W())},i(n){s||(d(t),s=!0)},o(n){u(t),s=!1},d(n){n&&m(e),t&&t.d(n)}}}function Q(l,e,s){let t;return A(l,E,n=>s(0,t=n)),M(async()=>{const r=(await J(B+"/data/update-until-2022/data.tsv")).map(i=>{const o={};for(const[c,a]of Object.entries(i))o[c]=a!=null&&a.trim()?a:"NA";return o});E.set(r),F.set(window.innerWidth),G.set(650)}),[t]}class at extends O{constructor(e){super(),R(this,e,Q,L,q,{})}}export{at as component};