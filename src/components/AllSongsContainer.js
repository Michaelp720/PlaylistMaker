import React, {useState, useEffect} from "react";
//import '../style/Home.css';
import SongSearch from "./SongSearch";
import SongCard from "./SongCard";

function AllSongsContainer({handleAdd}){

    // const playlistId = '';
    const[search, setSearch] = useState("");
    const[songs, setSongs] = useState([]);

        useEffect(() => {
            fetch("http://localhost:3000/allsongs")
            .then(r => r.json())
            .then(setSongs)
        }, [])

    // function handleAddRemove(songObj) {
    //     handleAdd(songObj)
    // }
    
    const searchedSongs = songs.filter((song) => (song.title.toLowerCase().includes(search.toLowerCase())))

    const songCards = searchedSongs.map((song) => (
        <SongCard key = {song.id} id = {song.id} artist = {song.artist} album = {song.album} title = {song.title} cover = {song.cover} location = {"all"} handleAddRemove = {handleAdd}/>
      ))

    

    return (
        <div className={`AllSongsContainer`}>
            <SongSearch search = {search} setSearch={setSearch}/>
            {songCards}
        </div>
    );
}

export default AllSongsContainer;