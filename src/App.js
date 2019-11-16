import React from "react";
import "./App.css";
import Picker from "./Components/Picker/picker";
import Divisao from "./Components/Divisao/divisao";
import Direita from "./Components/Materia/direita";
import Esquerda from "./Components/Materia/esquerda";
import SemFoto from "./Components/Materia/semFoto";

const Categorias = [
  {
    id: 0,
    categoria: "Projetos"
  },
  {
    id: 1,
    categoria: "Eventos"
  },
  {
    id: 2,
    categoria: "Dicas"
  },
  {
    id: 3,
    categoria: "Gestão de Pessoas"
  },
  {
    id: 4,
    categoria: "MEJ"
  },
  {
    id: 5,
    categoria: "Psicologia Organizacional"
  },
  {
    id: 6,
    categoria: "Pesquisa de Clima Organizacional"
  },
  {
    id: 7,
    categoria: "Recrutamento e Seleção"
  },
  {
    id: 8,
    categoria: "Treinamento"
  },
  {
    id: 9,
    categoria: "Análise e descrição de cargos"
  },
  {
    id: 10,
    categoria: "Orientação Profissional"
  },
  {
    id: 11,
    categoria: "Diagnóstico Organizacional"
  }
];
function App() {
  return (
    <div>
      <div className="App">
        <Picker data={Categorias}></Picker>
      </div>
      <Divisao></Divisao>
      <Direita></Direita>
      <Divisao></Divisao>
      <Esquerda></Esquerda>
      <Divisao></Divisao>
      <SemFoto></SemFoto>
      <Divisao></Divisao>
    </div>
  );
}

export default App;
