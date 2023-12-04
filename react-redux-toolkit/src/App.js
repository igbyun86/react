import React from 'react';
import {Counter} from './features/counter/Counter';
import './App.css';
import Profile from "./component/Profile";
import Login from "./component/Login";
import ChangeColor from "./component/ChangeColor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
        <hr/>
        <Profile/>
        <Login/>
        <ChangeColor/>
    </div>
  );
}

export default App;
