import React, { useState } from "react";
import "./App.css";

import ResourceList from "./components/ResourceList";
import "bootstrap/dist/css/bootstrap.min.css";

import { ImTwitter } from "react-icons/im";
import { RiFacebookCircleFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
function App() {
  const [resource] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">Recipe List </div>

        <ResourceList className="App-resource" resource={resource} />
      </header>
    </div>
  );
}

export default App;
