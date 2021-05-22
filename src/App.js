import React from "react";
import ContentController from "./components/ContentController/index";
import ShowAll from "./components/ShowAll/index";
import "./App.css";

function App() {
  return (
    <div class="container">
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Employee Directory</span>
      </nav>
      <div class="row">
        <div class="col">
          <ContentController />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <ShowAll />
        </div>
      </div>
    </div>
  );

}

export default App;
