import React, {useState, useEffect} from "react";
//import '../style/Home.css';
import SongContainer from "../components/SongContainer";

function PlaylistForm({playlistId, handleRemove}){

    return(

      <div>
        <h2>PlaylistForm</h2>
        <h3>Songs in Playlist</h3>
        <SongContainer location = {"form"} playlistId= {playlistId} handleRemove = {handleRemove}/>
      </div>
        
    );
}

export default PlaylistForm;