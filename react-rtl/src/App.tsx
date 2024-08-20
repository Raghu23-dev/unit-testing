import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Application from "./components/application/application";
import Skills from "./components/skills/Skills";

//npm run test -- --coverage .

function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={["java", "python"]} />
    </div>
  );
}

export default App;
