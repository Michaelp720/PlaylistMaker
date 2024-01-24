import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
//import '../style/Home.css';
import SongContainer from "./SongContainer";
import PlaylistSearch from "./PlaylistSearch";

function PlaylistDisplay({playlistId}){

  return(

    <div>
      <h2>PlaylistDisplay</h2>
      <SongContainer playlistId = {playlistId}/>
    </div> 
    );
}

export default PlaylistDisplay;

