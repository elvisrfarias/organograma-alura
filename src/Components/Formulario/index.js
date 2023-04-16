import React from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  
  const aoSalvar = (evento) => {
    //previnir o carregamento altomatico
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time,
    });
    // Deixar o input vazio dps de clicar no botao
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  // variaveis elevadas para o state
  const [nome, setNome] = React.useState("");
  const [cargo, setCargo] = React.useState("");
  const [imagem, setImagem] = React.useState("");
  const [time, setTime] = React.useState("");

  return (
    <section className="formluario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          label={"Nome"}
          type={"text"}
          placeholder={"Digite o seu texto"}
          obrigatorio={true}
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          label={"Cargo"}
          type={"text"}
          placeholder={"Digite o seu cargo"}
          obrigatorio={true}
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label={"Imagem"}
          type={"text"}
          placeholder={"Digite o endereço da sua imagem"}
          obrigatorio={true}
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label={"Times"}
          itens={props.times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
