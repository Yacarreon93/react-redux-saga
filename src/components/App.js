import React, { Component } from 'react';

import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  state = { 
    open: false, 
    count: 0,
  };

  // handleFetchClick = () => {
  //   this.props.fetchStarWarsRequest();
  //   this.setState({ open: true });
  // };

  handleQueue = () => {
    this.props.queueChannelRequest();
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }

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
        <h3>Num. of button click {this.state.count}</h3>
        <h3>Num. of saga effects {this.props.starWars.people}</h3>
        {/* <div>
          {this.props.starWars.people.map((person, i) => (
            <h4 key={i}>{person.name}</h4>
          ))}
        </div> */}
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
        <button onClick={this.handleQueue}>Handle Queue</button>
      </div>
    );
  }
}

export default App;
