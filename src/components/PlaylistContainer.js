import React, {useState, useEffect} from "react";
import PlaylistSearch from "./PlaylistSearch.js";
import PlaylistCard from "./PlaylistCard.js";

function PlaylistContainer() {
    
    const[search, setSearch] = useState("");

    return (
        <div className="PlaylistContainer">
            <PlaylistSearch search = {search} setSearch={setSearch}/>
            <PlaylistCard />
        </div>
    );
}

export default PlaylistContainer;