import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Main from "./Main";
import UseState from "./UseState";
import UseEffect from "./UseEffect";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/useState" element={<UseState />}></Route>
          <Route path="/useEffect" element={<UseEffect />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
