import React from "react";
import { HashRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';

function App() {

  return (
    <HashRouter>
      <div>
        <Main />
      </div>
    </HashRouter>
  );
}

export default App;
