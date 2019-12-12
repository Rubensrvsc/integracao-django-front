import React from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {

  state = {
    numeros: []
  }

  componentDidMount(){
    fetch('http://localhost:8000/soma/').then(res => res.json())
    .then(res => {
      this.setState({
        numeros: res
      })
    })
  }

  render(){
  return (
    <div>
      <h1>Lista de Numeros</h1>

      <ul>
      {this.state.numeros.map(item => (
        
       <li>
        <p>Numero 2: {item.num2}</p>
        <p>Numero 2: {item.num2}</p>
        </li>
      ))}

      </ul>

    </div>
  );
  }
}

export default App;
