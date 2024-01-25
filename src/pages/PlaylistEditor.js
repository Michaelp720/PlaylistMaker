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

    const[playlists, setPlaylists] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:3000/playlists`)
        .then(r => r.json())
        .then(setPlaylists)
    }, [])

    

    const[songs, setSongs] = useState([]);

    useEffect(() => {
        if(playlistId && playlistId !== playlists.length +1){
            fetch(`http://localhost:3000/playlists/${playlistId}`)
            .then(r => r.json())
            .then((data) => setSongs(data.songs))}
    }, [])

    if(!playlistId){
        playlistId = playlists.length + 1
    }

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
        newSongArray.forEach(song => {
            song.id = newSongArray.indexOf(song) + 1
        });
        setSongs(newSongArray)
    }

    function onPlaylistFormSubmit(playlistObj, songs){
        if(playlistObj.id > playlists.length){
            console.log(playlistObj)
            console.log(songs)
            fetch("http://localhost:3000/playlists", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(playlistObj),
              });
        }
        else{
            console.log("old")
            fetch(`http://localhost:3000/playlists/${playlistObj.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(playlistObj),
                });
        }
    }


    //changes persist here?



    return(
      <div>
        <NavBar editor = {true}/>
        <h1>PlaylistEditor</h1>
        {playlists.length > 0 ? <PlaylistForm playlist = {playlists[playlistId-1]} onPlaylistFormSubmit = {onPlaylistFormSubmit} songs = {songs} playlistId={playlistId} handleRemove = {handleRemove}/> : <div>Loading...</div>}
        <h3>All Songs</h3>
        <AllSongsContainer handleAdd = {handleAdd}/>
      </div>
    );
}

export default PlaylistEditor;