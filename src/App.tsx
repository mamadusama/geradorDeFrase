import { useState } from 'react'
import logoImg from "./assets/logo.png"
import Frases from './frases/Frases';
import BemEstar from './bemstar/BemEstar';
import './App.css'

// criar um breve documentaçao e com frases para pulicar na minha rede de Linkedin?
 
const todosFrases = Frases();
const todosBemEstar = BemEstar();
function App() {
  const [textofrase, setTextoFrase] = useState("");
  const[categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  

  const allFrases: { id: number; nome: string; frases: string[] }[] = [
    {
      id: 1,
      nome: "Motivação",
      frases: todosFrases,
    },
    {
      id: 2,
      nome: "Bem estar",
      frases: todosBemEstar,
    },
  ];  

  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
   
    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)

    setTextoFrase(` " ${allFrases[categoriaSelecionada].frases[numeroAleatorio]}" `);
  }



  return (
    <>
      <div className="container">
        <img src={logoImg} alt="Logo Frases" className="logo" />

        <h2 className="title">Categorias</h2>
        <section className="category-area">
          {allFrases.map((item, index) => (
            <button
              key={item.id}
              /*  onClick={() => setCategoriaSelecionada(index)} */
              className="category-button"
              style={{
                borderWidth:
                  item.nome === allFrases[categoriaSelecionada].nome ? 3 : 0,
                  borderColor: "#1fa4db"
              }}
              onClick={() => handleSwitchCategory(index)}
            >
            {item.nome}
            </button>
          ))}
        </section>

        <button className="button-frase" onClick={gerarFrase}>Geras Frase</button>

        {textofrase !== "" && <p className="textfrase">{textofrase}</p>}
      </div>
    </>
  );
}

export default App
