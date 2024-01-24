import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
//import '../style/Home.css';
import SongContainer from "./SongContainer";
import PlaylistSearch from "./PlaylistSearch";

function PlaylistDisplay({playlistId, title, image, description}){

  return(

    <div>
      <h2>PlaylistDisplay</h2>
      <h3>{title}</h3>
      <SongContainer location = {"display"} playlistId = {playlistId}/>
    </div> 
    );
}

export default PlaylistDisplay;

