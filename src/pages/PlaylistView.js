import React, {useState, useEffect} from "react";
//import '../style/Home.css';
import NavBar from "../components/NavBar";
import PlaylistDisplay from "../components/PlaylistDisplay";
import { NavLink, useParams } from "react-router-dom";

function PlaylistView(){

    const params = useParams();
    const playlistId = params.id;

    const [playlist, setPlaylist] = useState({});
    // const params = useParams();
    // const playlistId = params.id;
  
    useEffect(() => {
        fetch(`http://localhost:3000/playlists/${playlistId}`)
        .then(r => r.json())
        .then(setPlaylist)
        }, []);

    // function deletePlaylist(){
    //   fetch(`http://localhost:3000/playlists/${playlistId}`, {
    //             method: "DELETE"
    //   })
    //   window.location.href = `http://localhost:3001`
    // }
    
    
    return(

      <div>
        <NavBar />
        <NavLink
            to={`../editor/${playlistId}`}
            className="nav-link"
            >
            Edit
        </NavLink>
        {/* <button onClick = {deletePlaylist}>Delete Playlist</button> */}
        <PlaylistDisplay playlistId = {playlistId} title = {playlist.title} image = {playlist.image} description = {playlist.description} />
      </div>
        
    );
}

export default PlaylistView;