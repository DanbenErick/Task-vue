import { createStore } from 'vuex'

const dataLocalStorage = JSON.parse(window.localStorage.getItem('tareas'))
console.log("dartos: ", dataLocalStorage)
export default createStore({
  state: {
    tareas: dataLocalStorage || [],
  },
  mutations: {
    guardarTarea(state, payload) {
      state.tareas.push({
        nombre: payload.nombre,
        descripcion: payload.descripcion,
        fecha: payload.fecha,
        terminado: false,
        pendiente: true,
        removido: false,
      })
      window.localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    tareaTerminada(state, index) {
      state.tareas[index].terminado = true
      state.tareas[index].pendiente = false
      state.tareas[index].removido = false
      window.localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    tareaEliminada(state, index) {
      state.tareas[index].terminado = false
      state.tareas[index].pendiente = false
      state.tareas[index].removido = true
      window.localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
    removerTarea(state, index) {
      state.tareas.splice(index, 1)
      window.localStorage.setItem('tareas', JSON.stringify(state.tareas))
    },
  },
  actions: {
  },
  modules: {
  }
})
