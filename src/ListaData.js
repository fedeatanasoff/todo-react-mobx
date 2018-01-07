import { extendObservable } from "mobx";

class ListaData {
  constructor() {
    extendObservable(this, { tareas: [] });
    this.agregarTarea = this.agregarTarea.bind(this);
    this.eliminarTarea = this.eliminarTarea.bind(this);
  }

  agregarTarea(tarea) {
    console.log(tarea);
    this.tareas.push(tarea);
  }

  eliminarTarea(indice) {
    console.log(indice);
    this.tareas.splice(indice, 1);
  }
}

let ListData = new ListaData();

export default ListData;
