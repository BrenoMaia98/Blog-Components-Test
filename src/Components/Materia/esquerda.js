import React,{Component} from 'react';
import './desktop.css';
import './mobile.css';

export default class Esquerda extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titulo: "Titulo qualquer da materia",
      data: "08 de novembro de 2019",
      resumo: 'Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é Isto é um resumo Isto é um resumo ,resumo Isto é ',
      completo:  "Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto "+
      ",texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é Isto é um texto completo Isto é um completo texto ,texto completo Isto é ",
      show: false,
    }
  }
  
  
  render() {
    return ( 
        <div className = "container">
        <br/>
        <div className= "containerTituloEsquerda">
          <p className="tituloEsquerda">{this.state.titulo}</p>
          <p className="dataEsquerda">{this.state.data}</p>
        </div>
        <div>
        <div className="img"></div>
        <p id="show"  className="resumo">{this.state.show? this.state.completo : this.state.resumo}</p>
        </div>
        <p className="btnShowMore" onClick= {
            () => {
              var element = document.getElementById("show");
              if(!this.state.show){
                  element.classList.remove("resumo");
                  element.classList.add("completo");
              }else{
                  element.classList.remove("completo");
                  element.classList.add("resumo");
              }
                this.setState({show:!this.state.show
                }
          )}} >{this.state.show?"Mostrar Menos":"Mostrar Mais"}</p>
        </div>
    )
  }
}