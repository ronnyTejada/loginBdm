import React from 'react';

import Router from './Router';
import {Provider} from 'react-redux'
import Store from './store'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <Router/>
    </div>
    </Provider>
  );
}

export default App;
