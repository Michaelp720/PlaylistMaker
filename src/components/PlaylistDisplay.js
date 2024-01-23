import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
//import '../style/Home.css';
import SongContainer from "./SongContainer";
import PlaylistSearch from "./PlaylistSearch";

function PlaylistDisplay(){

  const [playlist, setPlaylist] = useState({});
  const params = useParams();
  const playlistId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:3000/playlists/${playlistId}`)
    .then(r => r.json())
    .then(data => setPlaylist(data))
  }, [playlistId]);
    return(

      <div>
        <h2>PlaylistDisplay</h2>
        <SongContainer playlistId = {playlist.id}/>
      </div>
        
    );
}

export default PlaylistDisplay;



// fetch(`http://localhost:3000/playlist/${id}`)
//         .then((resp) => resp.json())
//         .then((data) => renderReviews(data.reviews));