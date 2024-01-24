import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
//import '../style/Home.css';
import NavBar from "../components/NavBar";
import PlaylistForm from "../components/PlaylistForm";
import AllSongsContainer from "../components/AllSongsContainer";
//import SongContainer from "../components/SongContainer";

function PlaylistEditor(){

    const params = useParams();
    let playlistId = params.id;

    const[songs, setSongs] = useState([]);

    useEffect(() => {
        if(playlistId){
            fetch(`http://localhost:3000/playlists/${playlistId}`)
            .then(r => r.json())
            .then((data) => setSongs(data.songs))
            .then(console.log("fetched!"))}
    }, [])
   

    ///////New Playlist////////

    const[playlists, setPlaylists] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/playlists`)
        .then(r => r.json())
        .then(setPlaylists)
    }, [])

    if(!playlistId){
        playlistId = playlists.length + 1
    }

    //////////////////////////




    function handleAdd(songObj){
        songObj.id = songs.length + 1
        songObj.playlistId = playlistId
        // console.log(`id: ${songObj.id}`)
        //console.log(`playlist: ${songObj.playlistId}`)
        setSongs([...songs, songObj])
    } 

    
    function handleRemove(songObj){
        // console.log(`id: ${songObj.id}`)
        // console.log(`playlist: ${songObj.playlistId}`)

        const newSongArray = songs.filter((song) => song.id !== songObj.id);
        setSongs(newSongArray)
    }

    //changes persist here?

    return(
      <div>
        <NavBar editor = {true}/>
        <h1>PlaylistEditor</h1>
        <PlaylistForm songs = {songs} playlistId={playlistId} handleRemove = {handleRemove}/>
        <h3>All Songs</h3>
        <AllSongsContainer handleAdd = {handleAdd}/>
      </div>
    );
}

export default PlaylistEditor;