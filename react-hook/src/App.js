import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import Main from "./Main";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseRef from "./UseRef";
import UseMemo from "./UseMemo";
import UseContext from "./UseContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/useState" element={<UseState />}></Route>
          <Route path="/useEffect" element={<UseEffect />}></Route>
          <Route path="/useRef" element={<UseRef />}></Route>
          <Route path="/useMemo" element={<UseMemo />}></Route>
          <Route path="/useContext" element={<UseContext />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
