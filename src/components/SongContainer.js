import React, {useState, useEffect} from "react";
//import '../style/Home.css';
import SongSearch from "./SongSearch";
import SongCard from "./SongCard";

function SongContainer({editor, playlistId}){

    const[search, setSearch] = useState("");
    const[songs, setSongs] = useState([]);

    useEffect(() => {
        if(playlistId){
            fetch(`http://localhost:3000/playlists/${playlistId}`)
            .then(r => r.json())
            .then((data) => setSongs(data.songs))}
    }, [])
    
    const searchedSongs = songs.filter((song) => (song.title.toLowerCase().includes(search.toLowerCase())))

  
    const songCards = searchedSongs.map((song) => (
            <SongCard key = {song.id} id = {song.id} playlistId = {playlistId} title = {song.title} cover = {song.cover} editor ={editor} allsongs = {false}/>
        ))

    //if (songs.length === 0) return null //stops rendering if creating new playlist

    return (
        <div className={`SongContainer`}>
            <SongSearch search = {search} setSearch={setSearch}/>
            {songCards}
        </div>
    );
}

export default SongContainer;