import React, {useState, useEffect} from "react";
//import '../style/Home.css';
import SongContainer from "../components/SongContainer";

function PlaylistForm({playlist, onPlaylistFormSubmit, songs, playlistId, handleRemove}){



    const [playlistTitle, setPlaylistTitle] = useState(playlist ? playlist.title : "");
    const [playlistImage, setPlaylistImage] = useState(playlist ? playlist.image : "");
    const [playlistDescription, setPlaylistDescription] = useState(playlist ? playlist.description : "");

    function handleTitleChange(event) {
        setPlaylistTitle(event.target.value);
      }
    
    function handleImageChange(event) {
        setPlaylistImage(event.target.value);
      }

    function handleDescriptionChange(event) {
        setPlaylistDescription(event.target.value);
      }


    function handleSubmit(e){
        e.preventDefault()
        const editedPlaylist = {id: playlistId, title: playlistTitle, image: playlistImage, description: playlistDescription}
        onPlaylistFormSubmit(editedPlaylist, songs)
    }

  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input type="text" onChange={handleTitleChange} value={playlistTitle} />
            <input type="text" onChange={handleImageChange} value={playlistImage} />
            <input type="text" onChange={handleDescriptionChange} value={playlistDescription} />
            <button type="submit">Save Playlist</button>
        </form>
        <SongContainer songs = {songs} location = {"form"} playlistId= {playlistId} handleRemove = {handleRemove}/>
    </div>
  );
}

export default PlaylistForm;