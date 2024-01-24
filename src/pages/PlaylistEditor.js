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

    return(
      <div>
        <NavBar />
        <h1>PlaylistEditor</h1>
        {/* <PlaylistForm /> */}
        <SongContainer playlistId= {playlistId}/>
        <AllSongsContainer/>

      </div>
    );
}

export default PlaylistEditor;