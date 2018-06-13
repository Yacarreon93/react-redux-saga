import React, { Component } from 'react';

import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  state = { open: false };

  // handleFetchClick = () => {
  //   this.props.fetchStarWarsRequest();
  //   this.setState({ open: true });
  // };

  handleConfirmClick = () => {
    this.props.confirmFetchRequest();
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>Redux Saga</h1>
        <div>
          {this.props.starWars.people.map((person, i) => (
            <h4 key={i}>{person.name}</h4>
          ))}
        </div>
        <div>
          {this.props.starWars.planets.map((planet, i) => (
            <h4 key={i}>{planet.name}</h4>
          ))}
        </div>
        <div
          className="modal"
          style={!this.state.open ? { display: 'none' } : {}}>
          <button onClick={this.handleConfirmClick}>Confirm</button>
        </div>
        <button onClick={this.props.fetchStarWarsRequest}>Load More People</button>
        <button onClick={this.props.fetchStarWarsPlanetsRequest}>Load More Planets</button>
      </div>
    );
  }
}

export default App;
