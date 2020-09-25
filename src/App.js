import React, { useState, lazy, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "react-loader-spinner";

const ResourceComponent = lazy(() => import("./components/ResourceList"));
const NavBar = lazy(() => '"./components/navbar/CustomNav"');
const renderLoader = () => (
  <Loader type="MutatingDots" color="#2BAD60" height="100" width="100" />
);
function App() {
  const [resource] = useState();

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-title">
          <NavBar />
        </div>
        <Suspense fallback={renderLoader()}>
          <ResourceComponent className="App-resource" resource={resource} />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
