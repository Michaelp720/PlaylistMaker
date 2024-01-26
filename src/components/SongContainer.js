import React, {useState, useEffect} from "react";
//import '../style/Home.css';
import SongSearch from "./SongSearch";
import SongCard from "./SongCard";

function SongContainer({songs, location, playlistId, handleRemove}){

    const[search, setSearch] = useState("");

    const searchedSongs = songs.filter((song) => (song.title.toLowerCase().includes(search.toLowerCase())))

  
    const songCards = searchedSongs.map((song) => (
            <SongCard key = {song.id} id = {song.id} playlistId = {playlistId} artist = {song.artist} album = {song.album} title = {song.title} cover = {song.cover} location ={location} handleAddRemove = {handleRemove}/>
        ))

        

    //songs.indexOf(song)

    //if (songs.length === 0) return null //stops rendering if creating new playlist

    return (
        <div>
            <SongSearch search = {search} setSearch={setSearch}/>
            {songCards}
        </div>
    );
}

export default SongContainer;