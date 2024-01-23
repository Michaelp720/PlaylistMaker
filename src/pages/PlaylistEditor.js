import React, {useState, useEffect} from "react";
//import '../style/Home.css';
import NavBar from "../components/NavBar";
import PlaylistForm from "../components/PlaylistForm";
import SongContainer from "../components/SongContainer";

function PlaylistEditor(){

    return(
      <div>
        <NavBar />
        <h1>PlaylistEditor</h1>
      </div>
    );
}

export default PlaylistEditor;