import React, { useContext, useEffect, useState } from "react"
import { useHistory, Link } from "react-router"
import { PlayContext } from "./PlayProvider"
import "./Play.css"
import { PlayList } from "../Play/PlayList"

export const PlayForm = () => {
    const { tracks, getTracks, createTrack } = useContext(PlayContext)
    const history = useHistory()
    const [newTrack, setTrack] = useState({
        title: "",
        bandcampURL: "",
        mood: 0,
        artist: 0
    })

    useEffect(() => {
        console.log("TrackList: useEffect - getTracks")
        getTracks()
    }, [])

    const changeTrackTitleState = (event) => {
        const newTrackState = { ...newTrack };
        newTrackState.title = event.target.value;
        setTrack(newTrackState);
      };
    
      const changeTrackURLState = (event) => {
        const newTrackState = { ...newTrack };
        newTrackState.bandcampURL = event.target.value;
        setTrack(newTrackState);
      };

      const changeTrackMoodState = (event) => {
        const newTrackState = { ...newTrack };
        newTrackState.mood = event.target.value;
        setTrack(newTrackState);
      };

      const changeTrackArtistState = (event) => {
        const newTrackState = { ...newTrack };
        newTrackState.artist = event.target.value;
        setTrack(newTrackState);
      };

    //   const editInputChange = (event) => {
    //     const newTrack = {...newTrack}
    //     newTrack[event.target.id] = event.target.value
    //     setTrack(newTrack)
    // }

    
    return (
        <>
           <form className="trackForm">
            <h2 className="trackForm__title">Make a Track</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="trackId">Name: </label>
                    <input
                        type="text"
                        name="text"
                        required
                        autoFocus
                        className="form-control"
                        value={newTrack.name}
                        onChange={changeTrackTitleState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="trackId">Image: </label>
                    <input
                        type="text"
                        name="text"
                        required
                        autoFocus
                        className="form-control"
                        value={newTrack.imgURL}
                        onChange={changeTrackURLState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="trackId">Image: </label>
                    <input
                        type="text"
                        name="text"
                        required
                        autoFocus
                        className="form-control"
                        value={newTrack.mood}
                        onChange={changeTrackMoodState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="trackId">Image: </label>
                    <input
                        type="text"
                        name="text"
                        required
                        autoFocus
                        className="form-control"
                        value={newTrack.artist}
                        onChange={changeTrackArtistState}
                    />
                </div>
            </fieldset>

            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault();

                    const track = {
                        track: parseInt(newTrack.track),
                        title: newTrack.title,
                        bandcampURL: newTrack.bandcampURL,
                        mood: newTrack.mood,
                        artist: newTrack.artist
                    }
                    createTrack(track).then(() => history.push("/play"));
                }}
                className="btn btn-primary"
            >
                Create Track
            </button>
        </form> 
        </>
    )
}