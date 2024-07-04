<script setup></script>

<template>
  <aside class="bg-light rounded p-3">
    <h4 class="h5 text-center text-uppercase fw-bold py-3">Turismo<br>"A la Carta"<br>por Colombia</h4>
    <form>
      <div class="form-group py-1">
        <label for="FormControlInput1" class="text-uppercase small fw-bold mb-1">Nombre<b> *</b></label>
        <input type="text" class="form-control" id="FormControlInput1" placeholder="Nombre">
      </div>
      <div class="form-group py-1">
        <label for="FormControlInput2" class="text-uppercase small fw-bold mb-1">Correo Electrónico<b> *</b></label>
        <input type="email" class="form-control" id="FormControlInput2" placeholder="name@correo.com">
      </div>
      <div class="form-group py-1">
        <label for="FormControlInput3" class="text-uppercase small fw-bold mb-1">Cuántos Viajan?<b> *</b></label>
        <input type="number" class="form-control" id="FormControlInput3" placeholder="0">
      </div>
      <div class="form-group py-1">
        <label for="FormControlInput4" class="text-uppercase small fw-bold mb-1">Teléfono</label>
        <input type="number" class="form-control" id="FormControlInput4" placeholder="Teléfono">
      </div>
      <div class="form-group py-1">
        <label for="FormControlInput5" class="text-uppercase small fw-bold mb-1">¿Qué plan necesita?</label>
        <input type="number" class="form-control" id="FormControlInput5" placeholder="¿Qué plan necesita?">
      </div>
      <div class="form-group py-1 fecha">
        <div class="fecha-izq">
          <label for="FormControlInput6" class="text-uppercase small fw-bold mb-1">Salida</label>
          <input type="date" class="form-control" id="FormControlInput6">
        </div>
        <div class="fecha-der">
          <label for="FormControlInput7" class="text-uppercase small fw-bold mb-1">Llegada</label>
          <input type="date" class="form-control" id="FormControlInput7">
        </div>
      </div>
      <div class="form-group py-1">
        <label for="FormControlTextarea1" class="text-uppercase small fw-bold mb-1">Arme su plan</label>
        <textarea class="form-control" id="FormControlTextarea1" rows="3"
          placeholder="Coméntenos su recorrido..."></textarea>
      </div>
      <div class="form-group py-1 form-check">
        <input type="checkbox" class="form-check-input" id="Check1">
        <label class="form-check-label" for="Check1">Enviar una copia de este mensaje a mi correo electrónico</label>
      </div>
      <div class="d-grid gap-2">
        <button type="submit" class="btn bg-blue text-white">Enviar</button>
      </div>
      <div class="form-group pt-4 pb-1">
        <label for="FormControlInput8">Código de seguridad</label>
        <input type="number" class="form-control" id="FormControlInput8" placeholder="No escribir nada en este campo">
      </div>
      <div class="form-group py-1">
        <p><b>* </b> Campos obligatorios</p>
      </div>
    </form>
  </aside>
</template>