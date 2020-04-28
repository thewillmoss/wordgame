import React from 'react';
import './App.css';
import {Board} from "./Board";
import {stringify} from "querystring";
import {WordGameUI} from "./WordGameUI";
import {WordGame} from "./WordGame";

function App() {
  return (
    <div className="App">
      <WordGame/>
    </div>
  );
}

export default App;
