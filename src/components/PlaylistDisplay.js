import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
//import '../style/Home.css';
import SongContainer from "./SongContainer";
import PlaylistSearch from "./PlaylistSearch";

function PlaylistDisplay({playlistId, title, image, description}){

  const[songs, setSongs] = useState([]);

    useEffect(() => {
        if(playlistId){
            fetch(`http://localhost:3000/playlists/${playlistId}`)
            .then(r => r.json())
            .then((data) => setSongs(data.songs))}
    }, [])

  return(

    <div>
      <h1>{title}</h1>
      <img src={image} alt="" width="200" height="auto"></img>
      <h6>{description}</h6>
        <SongContainer songs = {songs} location = {"display"} playlistId = {playlistId}/>

      
    </div> 
    );
}

export default PlaylistDisplay;

