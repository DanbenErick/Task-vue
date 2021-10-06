<template>
  <div>
    <h4 class="text-center">Listas de Tareas Guardadas</h4>
    <ol
      class="list-group"
    >
      <li
        class="list-group-item d-flex justify-content-between align-items-start"
        :class="[
          {
            'border-primary': tarea.terminado,
            'border-warning': tarea.pendiente,
            'border-danger': tarea.removido,
          }
        ]"
        v-for="(tarea, index) of tareas"
        :key="index"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ tarea.nombre }} - {{ tarea.fecha }}</div>
          {{ tarea.descripcion }}
          <div>
            <span
              class="badge bg-primary rounded-pill"
              v-show="tarea.terminado"
            >Terminada</span>
            <span
              class="badge bg-warning rounded-pill"
              v-show="tarea.pendiente"
            >Pendiente</span>
            <span
              class="badge bg-danger rounded-pill"
              v-show="tarea.removido"
            >Removido</span>
          </div>
        </div>
        <div class="botones-accion py-4">
          <span
            @click="tareaTerminada(index)"
            class="badge bg-primary rounded-pill "
          >-</span>
          <span
            @click="tareaEliminada(index)"
            class="badge bg-danger rounded-pill"
          >x</span>
        </div>
        <button class="btn-close" @click="removerTarea(index)"></button>
      </li>
    </ol>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Tareas',
  data() {
    return {
      borderColors: {
        dark: true,
        darger: true,
        primary: true,
      }
    }
  },
  computed: {
    ...mapState(['tareas'])
  },
  methods: {
    ...mapMutations(['tareaTerminada', 'tareaEliminada', 'removerTarea'])
  }
}
</script>