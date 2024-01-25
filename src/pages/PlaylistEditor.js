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
    const[songsInAllPlaylists, setSongsInAllPlaylists] = useState([]);
    const[startingSongs, setStartingSongs] = useState([]);


    

    useEffect(() => {
        fetch(`http://localhost:3000/playlists`)
        .then(r => r.json())
        .then(setPlaylists)
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/songs`)
        .then(r => r.json())
        .then(setSongsInAllPlaylists)
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3000/songs`)
        .then(r => r.json())
        .then(setStartingSongs)
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
        songObj.id = songsInAllPlaylists.length + 1
        songObj.playlistId = parseInt(playlistId)
        setSongs([...songs, songObj])
        setSongsInAllPlaylists([...songsInAllPlaylists, songObj])
    } 

    
    function handleRemove(songObj){
        const newSongsInAll = songsInAllPlaylists.filter(((song) => song.id !== songObj.id))
        newSongsInAll.forEach(song => {
            song.id = newSongsInAll.indexOf(song) + 1
        });
        setSongsInAllPlaylists(newSongsInAll)
        const newSongArray = newSongsInAll.filter((song) => song.playlistId == songObj.playlistId)
        setSongs(newSongArray)
    }

    function onPlaylistFormSubmit(playlistObj){
        if(playlistObj.id > playlists.length){
            fetch("http://localhost:3000/playlists", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(playlistObj),
            });
            for(let i = 1; i < startingSongs.length+1; i++){
                fetch(`http://localhost:3000/songs/${i}`, {
                    method: "DELETE"
                })}
                setStartingSongs(songsInAllPlaylists)
    
            for(let i = 0; i < songsInAllPlaylists.length; i++){
                fetch("http://localhost:3000/songs", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(songsInAllPlaylists[i]),
                });}
        }
        else{
            fetch(`http://localhost:3000/playlists/${playlistObj.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(playlistObj),
            });
            for(let i = 1; i < startingSongs.length+1; i++){
            fetch(`http://localhost:3000/songs/${i}`, {
                method: "DELETE"
            })}
            setStartingSongs(songsInAllPlaylists)

            for(let i = 0; i < songsInAllPlaylists.length; i++){
            fetch("http://localhost:3000/songs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(songsInAllPlaylists[i]),
            });}
        }
    }


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