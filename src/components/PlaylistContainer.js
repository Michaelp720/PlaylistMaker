import React, {useState, useEffect} from "react";
import PlaylistSearch from "./PlaylistSearch.js";
import PlaylistCard from "./PlaylistCard.js";

function PlaylistContainer() {
    
    const[search, setSearch] = useState("");
    const[playlists, setPlaylists] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/playlists")
        .then(r => r.json())
        .then(setPlaylists)
    }, [])

    const searchedPlaylists = playlists.filter((playlist) => (playlist.title.toLowerCase().includes(search.toLowerCase())))

    const playlistCards = searchedPlaylists.map((playlist) => (
        <PlaylistCard key = {playlist.id} id = {playlist.id} title = {playlist.title} image = {playlist.image} description = {playlist.description} followPlaylist = {followPlaylist}/>
      ))
    function followPlaylist(playlistId){
        console.log(playlistId)
        //go to `http://localhost:3000/playlists/${playlistId}`
    }

    

    return (
        <div className="PlaylistContainer">
            <PlaylistSearch search = {search} setSearch={setSearch}/>
            {playlistCards}
        </div>
    );
}

export default PlaylistContainer;