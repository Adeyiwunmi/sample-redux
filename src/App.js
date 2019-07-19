import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from "./components/item-lis";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Edit <code>src/App.js</code> and save to reload.
      <ItemList></ItemList>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
