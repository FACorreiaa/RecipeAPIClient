import React, { useState } from "react";
import "./App.css";

import ResourceList from "./components/ResourceList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [resource, setResource] = useState("posts");

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">Recipe List</div>
        <ResourceList className="App-resource" resource={resource} />
      </header>
    </div>
  );
}

export default App;
