import{_ as d}from"./index-X0ldCEWp.js";import{H as p}from"./fakeDB-DdwREQKB.js";import{e as a,f as v,o as m,b as f,g as y,w as _,F as T,h,c as w,k,R as x,i as E,t as G}from"./index-CeV3Dzls.js";import"./Feed-CFVtbg2J.js";const L=e=>({id:e.term_id,name:e.name,slug:e.slug,group:e.term_group}),C=e=>({id:e.term_id,name:e.name,slug:e.slug}),A=()=>({GetAllTerms:async s=>{const{limit:n=10,page:t=0}=s;return await p().then(async o=>o.terms.sort(function(r,l){return r.slug>l.slug?1:r.slug<l.slug?-1:0}).splice(t,n).map(r=>C(r)))},GetOneTerm:async s=>await p().then(async t=>{const i=await t.terms.find(o=>o.id===s);return L(i)})}),B={class:"mb-4 slice-top"},V={__name:"Categories",setup(e){const{GetAllTerms:g}=A(),s=a(),n=a(!1),t=a(!0),i=a(10),o=a(0),r=a(),l=async()=>{t.value=!0;try{const u=await g({limit:i.value,page:o.value});r.value=u}catch(u){n.value=!0,s.value=u}finally{t.value=!1}};return v(()=>l()),(u,R)=>(m(),f("div",B,[y(d,{error:s.value,isError:n.value,isLoading:t.value,title:"Categorías",class:"main-height"},{default:_(()=>[(m(!0),f(T,null,h(r.value,c=>(m(),w(k(x),{key:c.id,to:{name:"Category",params:{id:c.slug}},type:"button",class:"btn bg-blue text-white position-relative m-2"},{default:_(()=>[E(G(c.name),1)]),_:2},1032,["to"]))),128))]),_:1},8,["error","isError","isLoading"])]))}};export{V as default};