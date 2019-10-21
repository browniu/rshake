import React from "react";
import Rshake from "./rshake/rshake.min";
import "./app.css";
function App() {
  return (
    <div className="app">
      <Rshake type="slow">
        <div className="demo">Shake me!</div>
      </Rshake>
    </div>
  );
}

export default App;
