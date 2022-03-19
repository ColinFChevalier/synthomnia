import React, { useContext, useEffect, useState } from "react"
import { useHistory, Link } from "react-router"
import { MoodContext } from "./MoodProvider"
import "./Mood.css"
import { PlayList } from "../Play/PlayList"

export const MoodForm = () => {
    const { moods, getMoods, createMood } = useContext(MoodContext)
    const history = useHistory()
    const [newMood, setMood] = useState({
        name: "",
        imgURL: ""
    })

    useEffect(() => {
        console.log("MoodList: useEffect - getMoods")
        getMoods()
    }, [])

    const changeMoodNameState = (event) => {
        const newMoodState = { ...newMood };
        newMoodState.name = event.target.value;
        setMood(newMoodState);
      };
    
      const changeMoodImageState = (event) => {
        const newMoodState = { ...newMood };
        newMoodState.imgURL = event.target.value;
        setMood(newMoodState);
      };

    //   const editInputChange = (event) => {
    //     const newMoodState = { ...newMood };
    //     newMoodState[event.target.id] = event.target.value
    //     setMood(newMoodState)
    // }

    
    return (
        <>
           <form className="moodForm">
            <h2 className="moodForm__title">Make a Mood</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="moodId">Name: </label>
                    <input
                        type="text"
                        name="text"
                        required
                        autoFocus
                        className="form-control"
                        value={newMood.name}
                        onChange={changeMoodNameState}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="moodId">Image: </label>
                    <input
                        type="text"
                        name="text"
                        required
                        autoFocus
                        className="form-control"
                        value={newMood.imgURL}
                        onChange={changeMoodImageState}
                    />
                </div>
            </fieldset>

            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault();

                    const mood = {
                        mood: parseInt(newMood.mood),
                        name: newMood.name,
                        imgURL: newMood.imgURL

                    }
                    createMood(mood).then(() => history.push("/moods"));
                }}
                className="btn btn-primary"
            >
                Create Mood
            </button>
        </form> 
        </>
    )
}