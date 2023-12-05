import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./app/api";
import {Provider} from "react-redux";
import {store} from "./app/store";


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  // <React.StrictMode>
    /* redux 안쓰는경우
      <ApiProvider api={api}>
            <App />
      </ApiProvider>
    */
    <Provider store={store}>
      <App />
    </Provider>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
