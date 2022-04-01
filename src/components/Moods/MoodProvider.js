import React, { useState, createContext } from "react"

export const MoodContext = createContext()

// const apiURL = "http://localhost:8088"

export const MoodProvider = (props) => {
    const [moods, setMoods] = useState([])
    const [mood, setMood] = useState({ tracks: [] })


    const getMoods = () => {
        return fetch("https://quiet-bayou-08478.herokuapp.com/moods", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(setMoods)
    }

    const deleteMood = (id) => {
        return fetch(`https://quiet-bayou-08478.herokuapp.com/moods/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(getMoods)
    }

    const getTracksByMoodId = (id) => {
        return fetch(`https://quiet-bayou-08478.herokuapp.com/moods/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(setMood)
    }

    const createMood = (newMood) => {
        return fetch(`https://quiet-bayou-08478.herokuapp.com/moods`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            },
            body: JSON.stringify(newMood)
        })
            .then(res => res.json())
            .then(getMoods)
    }

    return (
        <MoodContext.Provider value={{
            getMoods, moods, getTracksByMoodId, mood, createMood, deleteMood
        }}>
            {props.children}
        </MoodContext.Provider>
    )
}
