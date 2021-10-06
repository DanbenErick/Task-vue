<template>
  <div>
    <h4 class="text-center display-">Contenido de la Tarea</h4>
    <div class="mb-3">
      <label class="form-label">Titulo</label>
      <input
        type="text"
        class="form-control"
        v-model="tituloInput"
      >
    </div>
    <div class="mb-3">
      <label class="form-label">Descripcion</label>
      <textarea
        class="form-control"
        v-model="descripcionInput"
      ></textarea>
    </div>
    <div class="mb-3 d-grid">
      <button
        class="btn btn-primary"
        @click="guardarTarea({nombre: tituloInput, descripcion: descripcionInput, fecha: fecha})"
      >Guardar Tarea</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import dayjs from 'dayjs'
export default {
  name: 'Formulario',
  data() {
    return {
      tituloInput: '',
      descripcionInput: '',
      fecha: dayjs().format('DD/MM/YYYY')
    }
  },
  computed: {
    ...mapState(['tareas']),
  },
  methods: {
    ...mapMutations(['guardarTarea']),
  }
}
</script>
