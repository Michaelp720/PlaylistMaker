import React, {useState, useEffect} from "react";
//import '../style/Home.css';
import NavBar from "../components/NavBar";
import PlaylistDisplay from "../components/PlaylistDisplay";
import { NavLink, useParams } from "react-router-dom";

function PlaylistView(){

    const params = useParams();
    const playlistId = params.id;

    return(

      <div>
        <NavBar />
        <NavLink
            to={`../editor/${playlistId}`}
            className="nav-link"
            >
            Edit
        </NavLink>
        <h1>PlaylistView</h1>
        <PlaylistDisplay />
      </div>
        
    );
}

export default PlaylistView;