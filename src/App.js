import React, { useState } from "react";
import "./App.css";

import Resources from "./components/resources/hooks/Resources";
function App() {
  const [resource] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <Resources className="App-resource" resource={resource} />
      </header>
    </div>
  );
}

export default App;
