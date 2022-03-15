import React, { useState, createContext } from "react"

export const MoodContext = createContext()

// const apiURL = "http://localhost:8088"

export const MoodProvider = (props) => {
    const [moods, setMoods] = useState([])
    const [mood, setMood] = useState({ tracks: [] })


    const getMoods = () => {
        return fetch("http://localhost:8000/moods", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(setMoods)
    }

    const getTracksByMoodId = (id) => {
        return fetch(`http://localhost:8000/moods/${id}?_embed=tracks`)
            .then(res => res.json())
            .then(setMood)
    }

    // const getTracskByMoodId = (id) => {
    //     return fetch("http://localhost:8088/moods/?_embed=tracks")
    //     .then(res => res.json())
    // }


    // const addTracks = trackObj => {
    //     return fetch("http://localhost:8088/tracks", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(trackObj)
    //     })
    //     .then(getTracks)
    // }


    return (
        <MoodContext.Provider value={{
            getMoods, moods, getTracksByMoodId, mood
        }}>
            {props.children}
        </MoodContext.Provider>
    )
}