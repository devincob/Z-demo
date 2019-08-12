import React, { Component } from 'react';
import Todo from './components/Todo/index.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Todo/>
            <img src={logo} className="App-logo" alt="logo" />
          <p>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
              hello world!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
