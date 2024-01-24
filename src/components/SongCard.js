import React, {useState, useEffect} from "react";
//import '../style/Home.css';

function SongCard({id, playlistId, title, cover, editor, allsongs}){

    if (editor){
    return(
        <div class="card">
            {/* <img class="card-img-top" src={cover} alt="album cover"></img> */}
            <div class="card-body">
                {`${title}-editor`}
            </div>
            <button/>
        </div>

    );
}
    else if(allsongs){
        return(
            <div class="card">
             {/* <img class="card-img-top" src={cover} alt="album cover"></img> */}
                <div class="card-body">
                    {`${title}-allsongs`}
                </div>
            <button/>
            </div>
    );
}

return(
    <div class="card">
     {/* <img class="card-img-top" src={cover} alt="album cover"></img> */}
        <div class="card-body">
            {`${title}-display`}
        </div>
    <button/>
    </div>
)
}

export default SongCard;

{/* <div>
        <h4>{title}</h4>
        <img src={cover} alt="album cover" width="50" />
      </div> */}