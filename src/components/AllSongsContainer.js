import React, {useState, useEffect} from "react";
//import '../style/Home.css';
import SongSearch from "./SongSearch";
import SongCard from "./SongCard";

function AllSongsContainer(){

    const playlistId = '';
    const[search, setSearch] = useState("");
    const[songs, setSongs] = useState([]);

        useEffect(() => {
            fetch("http://localhost:3000/allsongs")
            .then(r => r.json())
            .then(setSongs)
        }, [])
    
    const searchedSongs = songs.filter((song) => (song.title.toLowerCase().includes(search.toLowerCase())))

    const songCards = searchedSongs.map((song) => (
        <SongCard key = {song.id} id = {song.id} playlistId = {playlistId} title = {song.title} cover = {song.cover} editor = {false} allsongs = {true}/>
      ))


    return (
        <div className={`AllSongsContainer`}>
            <SongSearch search = {search} setSearch={setSearch}/>
            {songCards}
        </div>
    );
}

export default AllSongsContainer;