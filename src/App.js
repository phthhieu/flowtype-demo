// @flow
import React, {Component} from 'react';
import FlowDemo from './FlowDemo';
import logo from './logo.svg';
import './App.css';

class App extends Component<{}> {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FlowDemo step1="1" step2="2" step3="3" />
      </div>
    );
  }
}

export default App;
