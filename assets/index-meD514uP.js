import{r,o as p,c as d,f as e,l as u,h as n,a as f,e as a,w as i,m as b,n as v}from"./index-uoUOiOqy.js";import{_}from"./Feed-BNjc4Jpc.js";const h={class:"bg-light rounded p-3"},C=e("h4",{class:"h5 text-center text-uppercase fw-bold py-3"},[n('Turismo "A la Carta"'),e("br"),n("por Colombia")],-1),y=f('<div class="form-group py-1"><label for="FormControlInput1" class="text-uppercase small fw-bold mb-1">Nombre<b> *</b></label><input type="text" class="form-control" id="FormControlInput1" placeholder="Nombre"></div><div class="form-group py-1"><label for="FormControlInput2" class="text-uppercase small fw-bold mb-1">Correo Electrónico<b> *</b></label><input type="email" class="form-control" id="FormControlInput2" placeholder="name@correo.com"></div><div class="form-group py-1"><label for="FormControlInput3" class="text-uppercase small fw-bold mb-1">Cuántos Viajan?<b> *</b></label><input type="number" class="form-control" id="FormControlInput3" placeholder="0"></div><div class="form-group py-1"><label for="FormControlInput4" class="text-uppercase small fw-bold mb-1">Teléfono</label><input type="number" class="form-control" id="FormControlInput4" placeholder="Teléfono"></div><div class="form-group py-1"><label for="FormControlInput5" class="text-uppercase small fw-bold mb-1">¿Qué plan necesita?</label><input type="number" class="form-control" id="FormControlInput5" placeholder="¿Qué plan necesita?"></div><div class="form-group py-1 fecha"><div class="fecha-izq"><label for="FormControlInput6" class="text-uppercase small fw-bold mb-1">Salida</label><input type="date" class="form-control" id="FormControlInput6"></div><div class="fecha-der"><label for="FormControlInput7" class="text-uppercase small fw-bold mb-1">Llegada</label><input type="date" class="form-control" id="FormControlInput7"></div></div><div class="form-group py-1"><label for="FormControlTextarea1" class="text-uppercase small fw-bold mb-1">Arme su plan</label><textarea class="form-control" id="FormControlTextarea1" rows="3" placeholder="Coméntenos su recorrido..."></textarea></div><div class="form-group py-1 form-check"><input type="checkbox" class="form-check-input" id="Check1"><label class="form-check-label" for="Check1">Enviar una copia de este mensaje a mi correo electrónico</label></div><div class="d-grid gap-2"><button type="submit" class="btn bg-blue text-white">Enviar</button></div><div class="form-group pt-4 pb-1"><label for="FormControlInput8">Código de seguridad</label><input type="number" class="form-control" id="FormControlInput8" placeholder="No escribir nada en este campo"></div><div class="form-group py-1"><p><b>* </b> Campos obligatorios</p></div>',11),g=[y],x={__name:"index",setup(s){const o=r(),l=r(!1),t=r(!1);r({});const m=async()=>{t.value=!0;try{}catch(c){l.value=!0,o.value=c}finally{t.value=!1}};return(c,k)=>(p(),d("aside",h,[C,e("form",{onSubmit:u(m,["prevent"])},g,32)]))}},F={class:"container"},I={class:"row"},w={class:"col-12 col-md-8 col-xl-9"},E={class:"col-12 col-md-4 col-xl-3"},L={__name:"index",props:{error:{type:String,default:""},isError:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!0},title:{type:String,default:""}},setup(s){const o=s;return(l,t)=>(p(),d("main",F,[e("div",I,[e("div",w,[a(_,{error:o.error,isError:o.isError,isLoading:o.isLoading,title:o.title},{default:i(()=>[a(b,null,{default:i(()=>[v(l.$slots,"default")]),_:3})]),_:3},8,["error","isError","isLoading","title"])]),e("div",E,[a(x)])])]))}};export{L as _};
