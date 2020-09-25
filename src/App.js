import React, { useState } from "react";
import "./App.css";

import ResourceList from "./components/ResourceList";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNav from "./components/navbar/Navbar";

function App() {
  const [resource] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <CustomNav />
        </div>
        <ResourceList className="App-resource" resource={resource} />
      </header>
    </div>
  );
}

export default App;
