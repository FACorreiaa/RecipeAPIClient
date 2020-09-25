import React, { useState } from "react";
import "./App.css";

import ResourceList from "./components/ResourceList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [resource, setResource] = useState();
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("/sw.js").then(
        function (registration) {
          // Registration was successful
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
        },
        function (err) {
          // registration failed :(
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    });
  }
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
