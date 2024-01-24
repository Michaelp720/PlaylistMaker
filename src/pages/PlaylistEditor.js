import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
//import '../style/Home.css';
import NavBar from "../components/NavBar";
import PlaylistForm from "../components/PlaylistForm";
import AllSongsContainer from "../components/AllSongsContainer";
import SongContainer from "../components/SongContainer";

function PlaylistEditor(){

    const params = useParams();
    const playlistId = params.id;


    function handleAdd(songObj){
        //add songObj to db.json of playlistId
        console.log(`adding ${songObj.title}`)
    }
    
   function handleRemove(songObj){
        //remove songObj from db.json of playlistId
        console.log(`removing ${songObj.title}`)
    }

    //changes persist here?

    return(
      <div>
        <NavBar editor = {true}/>
        <h1>PlaylistEditor</h1>
        <PlaylistForm playlistId={playlistId} handleRemove = {handleRemove}/>
        <h3>All Songs</h3>
        <AllSongsContainer handleAdd = {handleAdd}/>
      </div>
    );
}

export default PlaylistEditor;