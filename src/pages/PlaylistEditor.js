import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
//import '../style/Home.css';
import NavBar from "../components/NavBar";
import PlaylistForm from "../components/PlaylistForm";
import AllSongsContainer from "../components/AllSongsContainer";

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
        console.log(`Num Songs in All Playlists Before Add: ${songsInAllPlaylists.length}`)
        songObj.id = songsInAllPlaylists.length + 1
        songObj.playlistId = parseInt(playlistId)
        setSongs([...songs, songObj])
        setSongsInAllPlaylists([...songsInAllPlaylists, songObj])
    } 

    
    function handleRemove(songObj){
        console.log(`Num Songs in All Playlists Before Remove: ${songsInAllPlaylists.length}`)
        const newSongsInAll = songsInAllPlaylists.filter(((song) => song.id !== songObj.id))
        newSongsInAll.forEach(song => {
            song.id = newSongsInAll.indexOf(song) + 1
        });
        setSongsInAllPlaylists(newSongsInAll)
        const newSongArray = newSongsInAll.filter((song) => song.playlistId == songObj.playlistId)
        setSongs(newSongArray)
    }

    function onPlaylistFormSubmit(playlistObj){
        const postingLength = songsInAllPlaylists.length;
        if(playlistObj.id > playlists.length){ //new playlist
            fetch("http://localhost:3000/playlists", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(playlistObj),
            })
            .then(deleteSongs(1, startingSongs.length, postingLength))
        }
        else{ //editing an old playlist
            fetch(`http://localhost:3000/playlists/${playlistObj.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(playlistObj),
            })
            .then(deleteSongs(1, startingSongs.length, postingLength))
        }
        
    }



    function deleteSongs(count, startLength, allLength){ //i is 1, length is starting songs.length
        if (count < startLength+1){
            fetch(`http://localhost:3000/songs/${count}`, {
                    method: "DELETE"
                })
            .then(console.log(`deleted: ${count} startLength: ${startLength} allLength: ${allLength}`), count++, console.log(`count now: ${count}`), deleteSongs(count, startLength, allLength))
        }
        else{
            //console.log("all deleted, times run:" + count + "allLength: " + allLength)
            postSongs(0, allLength)
        }
    }

    function postSongs(count, length){
        if(count < length){
        fetch("http://localhost:3000/songs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(songsInAllPlaylists[count]),
            })
            .then(console.log(`posted: ${songsInAllPlaylists[count].id} length: ${length} (4 expected)`), count++, postSongs(count, length))}
        else{
            //console.log("stopped")
            window.location.href = `http://localhost:3001`
        }
    }


    // function deletePlaylist(){
    //     fetch(`http://localhost:3000/playlists/${playlistId}`, {
    //               method: "DELETE"
    //     })
    //     setSongsInAllPlaylists()
    //     window.location.href = `http://localhost:3001`
    // }

    // function logAllSongsLength(){
    //     console.log(`Num all songs: ${songsInAllPlaylists.length}`)
    //     console.log(songsInAllPlaylists)
    // }

    return(
      <div>
        <NavBar editor = {true}/>
        {/* <button onClick = {deletePlaylist}>Delete Playlist</button> */}
        {/* <button onClick = {logAllSongsLength}>Log</button> */}
        <h1>PlaylistEditor</h1>
        {playlists.length > 0 ? <PlaylistForm playlist = {playlists[playlistId-1]} onPlaylistFormSubmit = {onPlaylistFormSubmit} songs = {songs} playlistId={playlistId} handleRemove = {handleRemove}/> : <div>Loading...</div>}
        
        <h3>All Songs</h3>
        <AllSongsContainer handleAdd = {handleAdd}/>
        
      </div>
    );
}

export default PlaylistEditor;