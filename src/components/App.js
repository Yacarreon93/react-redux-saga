import React, { Component } from 'react';

import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Redux Saga</h1>
        {this.props.starWars.people.map((person, i) => (
          <h4 key={i}>{person.name}</h4>
        ))}
        <button>Load More</button>
      </div>
    );
  }
}

export default App;