import React, { useState, createContext } from "react"

export const PlayContext = createContext()

// const apiURL = "http://localhost:8088"

export const PlayProvider = (props) => {
    const [tracks, setTracks] = useState([])

    const getTracks = () => {
        return fetch("https://quiet-bayou-08478.herokuapp.com/tracks", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(setTracks)
    }

    const createTrack = (newTrack) => {
        return fetch(`https://quiet-bayou-08478.herokuapp.com/tracks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            },
            body: JSON.stringify(newTrack)
        })
            .then(res => res.json())
            .then(getTracks)
    }

    const getMoods = () => {
        return fetch("https://quiet-bayou-08478.herokuapp.com/moods")
            .then(res => res.json())
    }

    const getTrackByMoodId = (moodId) => {
        return fetch(`https://quiet-bayou-08478.herokuapp.com/moodtrack?moodId=${moodId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(setTracks)
    }

    const getTrackByFavoriteId = (id) => {
        return fetch(`https://quiet-bayou-08478.herokuapp.com/moods/?_embed=favorites${id}`)
            .then(res => res.json())
    }

    return (
        <PlayContext.Provider value={{
            tracks, getTracks, getMoods, getTrackByMoodId, getTrackByFavoriteId, createTrack
        }}>
            {props.children}
        </PlayContext.Provider>
    )
}