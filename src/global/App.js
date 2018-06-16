import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "../users/UserList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Let's Reactify!</h1>
        </header>
        <UserList/>
      </div>
    );
  }
}

export default App;
