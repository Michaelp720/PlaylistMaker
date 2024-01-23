import React, {useState, useEffect} from "react";
import '../style/App.css';
import Header from "./Header";
import PlaylistDisplay from "./PlaylistDisplay";

function App() {

  // Fetchs here

  return (
    <div className="App">
      <Header />
      <PlaylistDisplay />
    </div>
  );
}

export default App;
