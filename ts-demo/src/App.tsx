import React from 'react';
import logo from './logo.svg';
import './App.css';

import TsClassComponent from "./ts/ClassComponent";
import TsFuncComponent from "./ts/FuncComponent";
import TsHiddenComponent from "./ts/HiddenComponent";

import JsClassComponent from "./js/ClassComponent";
import JsFuncComponent from "./js/FuncComponent";
import JsHiddenComponent from "./js/HiddenComponent";

function App() {
  const a = "a string";
  const b = { name: "nested property" };
  const c = [
    {
      name: "1"
    },
    {
      name: "2"
    },
    {
      name: "3"
    }
  ]

  return (
    <div className="app-container">
      <div className="app-side">
        <h4>JavaScript</h4>
        <JsClassComponent />
        <JsFuncComponent 
          a={a}
          b={b}
          c={c}
        />
        <JsHiddenComponent />
      </div>
      <div className="app-side">
        <h4>TypeScript</h4>
        <TsClassComponent />
        <TsFuncComponent 
          a={a}
          b={b}
          c={c}
        />
        <TsHiddenComponent />
      </div>
    </div>
  );
}

export default App;
