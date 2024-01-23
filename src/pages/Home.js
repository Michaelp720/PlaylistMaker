import React, {useState, useEffect} from "react";
//import '../style/Home.css';
import NavBar from "../components/NavBar";
import PlaylistContainer from "../components/PlaylistContainer";

function Home() {

  // Fetchs here

  return (
    <div className="Home">
      <NavBar />
      <PlaylistContainer />
    </div>
  );
}

export default Home;
