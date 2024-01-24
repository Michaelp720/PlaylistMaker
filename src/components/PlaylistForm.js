import React, {useState, useEffect} from "react";
//import '../style/Home.css';
import SongContainer from "../components/SongContainer";

function PlaylistForm({playlist, onPlaylistFormSubmit, songs, playlistId, handleRemove}){

    function handleClick(){
        onPlaylistFormSubmit(playlist, songs)
    }
    


    return(

      <div>
        <h2>{playlist.title}</h2>
        <button onClick = {handleClick}>Save Playlist</button>
        <h3>Songs in Playlist</h3>
        <SongContainer songs = {songs} location = {"form"} playlistId= {playlistId} handleRemove = {handleRemove}/>
      </div>
        
    );
}

export default PlaylistForm;