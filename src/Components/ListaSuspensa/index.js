import React from "react";
import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {

  //Pegando as alterações do Select
  const aoSelecionado = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className="lista-supensa">
      <label>{props.label}</label>
      <select onChange={aoSelecionado} value={props.valor}>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
