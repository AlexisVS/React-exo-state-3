import React, { Component } from 'react';

class App extends Component {
  arr = ["Pomme", 2, "Banane", 5, "bonjour"];
  state = {
    mainGauche: this.arr[0],
    jambe: this.arr[1],
    mainDroite: this.arr[2],
    doigts: this.arr[3],
    parler: this.arr[4],
    arrLength: this.arr.length
  }
  removeEl = () => {
    let stateArr = this.state;
    let stateIndex = Object.keys(stateArr)[0];
    let arrFinish = delete stateArr[stateIndex];
    this.setState({ arrFinish });
    this.setState({ arrLength: Object.keys(this.state).length });
    if (Object.keys(this.state).length == 2) {
      document.body.style.backgroundColor = "darkorange";
    }
    if (Object.keys(this.state).length == 1) {
      document.body.style.backgroundColor = "red";
    }
  }

  render () {
    return (
      <div>
        <p>{this.state.arrLength}</p>
        <button onClick={this.removeEl}>supprimer props</button>
        {console.log(this.state)}
      </div>
    );
  }
}

export default App;