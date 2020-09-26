import React, { useState } from "react";
import "./App.css";

import ResourceList from "./components/ResourceList";
function App() {
  const [resource] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <ResourceList className="App-resource" resource={resource} />
      </header>
    </div>
  );
}

export default App;
