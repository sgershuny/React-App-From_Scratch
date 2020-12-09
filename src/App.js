import logo from './logo.svg';
import React from 'react';
import './App.css';

const Avenger = props => {
  return(
    <div>
      <h1>{props.avenger}</h1>
    </div>
  )
}

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      Avenger: ["Iron Man","Spider-Man","Hulk","Steve Bannon"]
    }
  }
  

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {this.state.Avenger.map(hero => {
            console.log(hero)
            return <Avenger avenger = {hero}/>
          })}
        </header>
      </div>
    );
  }
}

export default App;
