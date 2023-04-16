import "./Time.css";

import React from "react";
import Colaborador from "../Colaborador";

const Time = (props) => {
  const corForte = { backgroundColor: props.corSecundaria };

  return (
    //validacao se tem uma section vazia, caso tenha nao apareca
    props.colaboradores.length > 0 && (
      <section className="time" style={corForte}>
        {/* Outra forma de por o Style */}
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nomeTime}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nomes={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
