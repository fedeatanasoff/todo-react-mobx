import React, { Component } from "react";
import ListData from "../ListaData";
import { observer } from "mobx-react";

class Lista extends Component {
  constructor() {
    super();
    this.enviarTarea = this.enviarTarea.bind(this);
  }

  enviarTarea(e) {
    let ENTER_KEY = 13;
    if (ENTER_KEY === e.which && e.target.value !== "") {
      ListData.agregarTarea(e.target.value);
      e.target.value = "";
    }
  }

  render() {
    let listaDiv = ListData.tareas.map((tarea, indice) => {
      return (
        <li className="list-group-item list-group-item-info" key={indice}>
          <span
            className="badge"
            onClick={function() {
              ListData.eliminarTarea(indice);
            }}
          >
            <span className="glyphicon glyphicon-remove" />
          </span>
          {tarea}
        </li>
      );
    });

    return (
      <div className="container">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="text-center">Todo-App</h2>
          <input
            type="text"
            className="form-control"
            onKeyPress={this.enviarTarea}
            placeholder="ingrese una tarea"
          />
          <br />
          <div>
            <ul className="list-group">{listaDiv}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Lista);
