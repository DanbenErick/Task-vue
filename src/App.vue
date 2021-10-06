<template>
  <div class="container">
    <h1 class="pb-5 pt-5 fw-bold display-5 text-center">Tareas</h1>
    <div class="row">
      <div class="col-sm-12 col-md-4">
        <Formulario />
      </div>
      <div class="col-sm-12 col-md-8">
        <Tareas />
      </div>
    </div>
  </div>
</template>

<script>
import Formulario from './components/Formulario.vue'
import Tareas from './components/Tareas.vue'

export default {
  name: 'App',
  components: {
    Formulario,
    Tareas
  }
}
</script>
