import React from "react";
import logo from "./logo.svg";
import "./assets/css/App.css";
import SelectorWithRecoil from "./components/SeletorWithRecoil";
import SelectorWithContext from "./components/SelectorWithContext";
import SelectorWithCustomHook from "./components/SelectorWithCustomHook";

function App() {
  return (
    <div className="App">
      <SelectorWithRecoil />
      <hr />
      <SelectorWithContext />
      <hr />
      <SelectorWithCustomHook />
    </div>
  );
}

export default App;
