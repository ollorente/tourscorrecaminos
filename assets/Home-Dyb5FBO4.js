import{_}from"./index-BYilHQFR.js";import{_ as T,o as r,c as l,a as S,r as u,b as $,d as N,e as t,f as o,w as c,F as p,g as b,h as g,t as f}from"./index-uoUOiOqy.js";import{_ as y}from"./Feed-BNjc4Jpc.js";import{u as B}from"./usePost-BkuW10Dg.js";import"./fakeDB-DdwREQKB.js";const V="/tourscorrecaminos/img/kitchen_adventurer_caramel.jpg",P="/tourscorrecaminos/img/kitchen_adventurer_cheesecake_brownie.jpg",O="/tourscorrecaminos/img/kitchen_adventurer_donut.jpg",R="/tourscorrecaminos/img/kitchen_adventurer_lemon.jpg",A={},D={id:"carouselIndicators",class:"carousel slide slice-top-home"},G=S('<div class="carousel-indicators"><button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button><button type="button" data-bs-target="#carouselIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button></div><div class="carousel-inner" style="height:400px;"><div class="carousel-item active"><img src="'+V+'" class="d-block w-100 aspect-video object-fit-cover" alt="Foto 1"></div><div class="carousel-item"><img src="'+P+'" class="d-block w-100 aspect-video object-fit-cover" alt="Foto 2"></div><div class="carousel-item"><img src="'+O+'" class="d-block w-100 aspect-video object-fit-cover" alt="Foto 3"></div><div class="carousel-item"><img src="'+R+'" class="d-block w-100 aspect-video object-fit-cover" alt="Foto 4"></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',4),H=[G];function U(L,d){return r(),l("div",D,H)}const q=T(A,[["render",U]]),z={class:""},J={class:"my-4"},K={class:"container"},Q={class:"row"},W={class:"row"},X={class:"row"},Y={class:"row"},Z={class:"row"},le={__name:"Home",setup(L){const{GetAllPosts:d}=B(),i=u(),n=u(!1),a=u(!0),v=u(0),h=u(),w=u(),k=u(),x=u(),E=u(),I=async()=>{a.value=!0;try{const e=await d({limit:8,page:v.value});h.value=e}catch(e){n.value=!0,i.value=e}finally{a.value=!1}},j=async()=>{a.value=!0;try{const e=await d({limit:6,page:v.value});w.value=e}catch(e){n.value=!0,i.value=e}finally{a.value=!1}},C=async()=>{a.value=!0;try{const e=await d({limit:4,page:v.value});k.value=e}catch(e){n.value=!0,i.value=e}finally{a.value=!1}},F=async()=>{a.value=!0;try{const e=await d({limit:3,page:v.value});x.value=e}catch(e){n.value=!0,i.value=e}finally{a.value=!1}},M=async()=>{a.value=!0;try{const e=await d({limit:2,page:v.value});E.value=e}catch(e){n.value=!0,i.value=e}finally{a.value=!1}};return $(()=>{I(),j(),C(),F(),M()}),(e,ee)=>{const m=N("RouterLink");return r(),l("div",z,[t(q),o("div",J,[o("div",K,[t(y,{error:i.value,isError:n.value,isLoading:a.value,title:"Tour por la Sabana de Bogotá y Cundinamarca"},{default:c(()=>[o("div",Q,[(r(!0),l(p,null,b(h.value,s=>(r(),l("div",{key:s.id,class:"col-12 col-md-3"},[t(_,{item:s},null,8,["item"])]))),128))]),t(m,{to:{name:"Category",params:{id:"por-la-sabana"}},class:"text-blue fw-bold text-decoration-none"},{default:c(()=>[g("Mostrar más >")]),_:1}),o("pre",null,f(e.items),1)]),_:1},8,["error","isError","isLoading"]),t(y,{error:i.value,isError:n.value,isLoading:a.value,title:"Tour por Colombia"},{default:c(()=>[o("div",W,[(r(!0),l(p,null,b(w.value,s=>(r(),l("div",{key:s.id,class:"col-12 col-md-4"},[t(_,{item:s},null,8,["item"])]))),128))]),t(m,{to:{name:"Category",params:{id:"tour-por-colombia"}},class:"text-blue fw-bold text-decoration-none"},{default:c(()=>[g("Mostrar más >")]),_:1}),o("pre",null,f(e.items),1)]),_:1},8,["error","isError","isLoading"]),t(y,{error:i.value,isError:n.value,isLoading:a.value,title:"Tour a la carta"},{default:c(()=>[o("div",X,[(r(!0),l(p,null,b(k.value,s=>(r(),l("div",{key:s.id,class:"col-12 col-md-3"},[t(_,{item:s},null,8,["item"])]))),128))]),t(m,{to:{name:"Category",params:{id:"tour-a-la-carta"}},class:"text-blue fw-bold text-decoration-none"},{default:c(()=>[g("Mostrar más >")]),_:1}),o("pre",null,f(e.items),1)]),_:1},8,["error","isError","isLoading"]),t(y,{error:i.value,isError:n.value,isLoading:a.value,title:"Expresos"},{default:c(()=>[o("div",Y,[(r(!0),l(p,null,b(x.value,s=>(r(),l("div",{key:s.id,class:"col-12 col-md-4"},[t(_,{item:s},null,8,["item"])]))),128))]),t(m,{to:{name:"Category",params:{id:"expresos"}},class:"text-blue fw-bold text-decoration-none"},{default:c(()=>[g("Mostrar más >")]),_:1}),o("pre",null,f(e.items),1)]),_:1},8,["error","isError","isLoading"]),t(y,{error:i.value,isError:n.value,isLoading:a.value,title:"Mensajería"},{default:c(()=>[o("div",Z,[(r(!0),l(p,null,b(E.value,s=>(r(),l("div",{key:s.id,class:"col-12 col-md-6"},[t(_,{item:s},null,8,["item"])]))),128))]),t(m,{to:{name:"Category",params:{id:"mensajeria"}},class:"text-blue fw-bold text-decoration-none"},{default:c(()=>[g("Mostrar más >")]),_:1}),o("pre",null,f(e.items),1)]),_:1},8,["error","isError","isLoading"])])])])}}};export{le as default};