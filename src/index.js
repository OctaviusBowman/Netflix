import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './global-styles';
import 'normalize.css';
import { firebase } from './lib/firebase.prod.js';
import { FirebaseContext } from './context/firebase'

ReactDOM.render(
  <React.StrictMode>
    <>
      <FirebaseContext.Provider value={{ firebase }}>
        <GlobalStyles />
        <App />
      </FirebaseContext.Provider>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);