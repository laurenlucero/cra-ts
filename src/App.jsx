import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TemplateLiteral} from './Components/TemplateLiterals'
import {ShorthandPropNames} from './Components/ShorthandPropNames';
import {DefaultParameters} from './Components/DefaultParameters'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <a
            className="App-link"
            href="https://kentcdodds.com/blog/javascript-to-know-for-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            JavaScript to Know for React
          </a>
        </h1>
      </header>
      <TemplateLiteral />
      <ShorthandPropNames />
<DefaultParameters />
    </div>
  );
}

export default App;
