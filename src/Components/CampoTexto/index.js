import React from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {

  //Pengando cada alteracao do input
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };
  return (
    <div className="campo-texto">
      <label>{props.label}</label>

      <input
        onChange={aoDigitado}
        value={props.valor}
        type={props.type}
        placeholder={props.placeholder}
        required={props.obrigatorio}
      ></input>
    </div>
  );
};

export default CampoTexto;
