import React, {useState, useEffect} from "react";
import PlaylistSearch from "./PlaylistSearch";
import PlaylistCard from "./PlaylistCard.js";

function PlaylistDisplay() {
    
    const[search, setSearch] = useState("");

    return (
        <div className="PlaylistDisplay">
            <PlaylistSearch search = {search} setSearch={setSearch}/>
            <PlaylistCard />
        </div>
    );
}

export default PlaylistDisplay;