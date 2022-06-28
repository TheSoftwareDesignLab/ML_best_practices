import React from "react";
import {MainPage} from "./pages/MainPage";
import data from './data/dataDef.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainPage data={data}/>
    </div>
  );
}

export default App;
