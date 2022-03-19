import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router"
import { MoodContext } from "./MoodProvider"
import "./Mood.css"
import { PlayList } from "../Play/PlayList"

export const MoodForm = () => {
    const { moods, getMoods, createMood, mood } = useContext(MoodContext)
    const history = useHistory()
    // const [mood, setMood] = useState({
    //     name: "",
    //     imgURL: ""
    // });


    useEffect(() => {
        console.log("MoodList: useEffect - getMoods")
        getMoods()
    }, [])

    useEffect(() => {
        console.log("MoodList: useEffect - getMoods")
        createMood()
    }, [])
    
    return (
        <>
           <form className="moodForm">
            <h2 className="moodForm__title">Make a Mood</h2>
            <fieldset>
                {/* <div className="form-group">
                    <label htmlFor="moodId">Mood: </label>
                    <select
                        name="moodId"
                        className="form-control"
                        value={mood.moodId}
                        onChange={changeEventGameState}
                    >
                        <option value="0">Select a mood...</option>
                        {moods.map((mood) => (
                            <option
                                key={mood.id}
                                value={mood.id}
                            >
                                {mood.title}
                            </option>
                        ))}
                    </select>
                </div> */}

                <div className="form-group">
                    <label htmlFor="moodId">Name: </label>
                    <input
                        type="text"
                        name="text"
                        required
                        autoFocus
                        className="form-control"
                        value={mood.name}
                        // onChange={changeMoodNameState}
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
                        value={mood.imgURL}
                        // onChange={changeMoodImageState}
                    />
                </div>
            </fieldset>

            <button
                type="submit"
                onClick={(evt) => {
                    evt.preventDefault();

                    const mood = {
                        mood: parseInt(mood.mood),
                        name: mood.name,
                        imgURL: mood.imgURL

                    }
                    createMood(mood).then(() => history.push("/moods/new"));
                }}
                className="btn btn-primary"
            >
                Create Mood
            </button>
        </form> 
        </>
    )
}