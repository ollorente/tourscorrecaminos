import{_ as i,o as s,c as t,f as o,n as c,e as l,w as d,h as _,t as r}from"./index-uoUOiOqy.js";const p={},u={class:"py-3 px-3"},f={class:"h5 fw-bold text-uppercase",style:{color:"var(--color-blue)"}};function h(a,e){return s(),t("div",u,[o("h3",f,[c(a.$slots,"default")])])}const y=i(p,[["render",h]]),v={class:""},x={key:0,class:"p-3"},g=o("div",{class:"d-flex justify-content-center"},[o("div",{class:"spinner-border text-success",role:"status"},[o("span",{class:"visually-hidden"},"Loading...")])],-1),m=[g],k={key:1,class:"p-3"},B={key:2,class:"p-3"},b={__name:"Feed",props:{error:{type:String,default:""},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!0},title:{type:String,default:""}},setup(a){const e=a;return(n,$)=>(s(),t("div",v,[l(y,{class:"py-3 px-3"},{default:d(()=>[_(r(e.title),1)]),_:1}),e.isLoading?(s(),t("div",x,m)):e.isError?(s(),t("div",k,r(e.error),1)):(s(),t("div",B,[c(n.$slots,"default")]))]))}};export{b as _};