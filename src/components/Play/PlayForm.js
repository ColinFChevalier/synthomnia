import React, { useContext, useEffect, useState } from "react"
import { useHistory, Link } from "react-router"
import { PlayContext } from "./PlayProvider"
import { MoodContext } from "../Moods/MoodProvider"
import "./Play.css"
import { PlayList } from "../Play/PlayList"

export const PlayForm = () => {
    const { tracks, getTracks, createTrack } = useContext(PlayContext)
    const { moods, getMoods } = useContext(MoodContext)
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

    useEffect(() => {
        getMoods()
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

    // const changeTrackArtistState = (event) => {
    //     const newTrackState = { ...newTrack };
    //     newTrackState.artist = event.target.value;
    //     setTrack(newTrackState);
    // };

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
                        <label htmlFor="trackId">URL: </label>
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
                        <label htmlFor="trackId">Mood: </label>
                        <select
                            type="select"
                            name="number"
                            required
                            autoFocus
                            className="form-control"
                            value={newTrack.mood}
                            onChange={changeTrackMoodState}
                        >
                            <option value="0">Select a Mood</option>
                            {moods.map((mood) => (
                                <option
                                    key={mood.id}
                                    value={mood.id}
                                >
                                    {mood.name}
                                </option>
                            ))}
                        </select>
                        {/* <select
                            type="select"
                            name="number"
                            required
                            autoFocus
                            className="form-control"
                            value={newTrack.mood}
                            onChange={changeTrackMoodState}
                        
                        /> */}
                    </div>

                    {/* <div className="form-group">
                        <label htmlFor="trackId">Artist: </label>
                        <input
                            type="number"
                            name="nymber"
                            required
                            autoFocus
                            className="form-control"
                            value={newTrack.artist}
                            onChange={changeTrackArtistState}
                        />
                    </div> */}
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
                        createTrack(track).then(() => history.push("/moods"));
                    }}
                    className="btn btn-primary"
                >
                    Create Track
                </button>
            </form>
        </>
    )
}