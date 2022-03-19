import React, { useState, createContext } from "react"

export const PlayContext = createContext()

// const apiURL = "http://localhost:8088"

export const PlayProvider = (props) => {
    const [tracks, setTracks] = useState([])

    const getTracks = () => {
        return fetch("http://localhost:8000/tracks", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(setTracks)
    }

    const createTrack = (newTrack) => {
        return fetch(`http://localhost:8000/tracks`, {
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
        return fetch("http://localhost:8000/moods")
            .then(res => res.json())
    }

    const getTrackByMoodId = (moodId) => {
        return fetch(`http://localhost:8000/moodtrack?moodId=${moodId}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(setTracks)
    }

    const getTrackByFavoriteId = (id) => {
        return fetch(`http://localhost:8000/moods/?_embed=favorites${id}`)
            .then(res => res.json())
    }

    // const getMoodTracks = (moodId) => {
    //     return fetch(`http://localhost:8000/moodtrack${moodId}`, {
    //         headers: {
    //             "Authorization": `Token ${localStorage.getItem("su_token")}`
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(setTracks)
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
        <PlayContext.Provider value={{
            tracks, getTracks, getMoods, getTrackByMoodId, getTrackByFavoriteId, createTrack
        }}>
            {props.children}
        </PlayContext.Provider>
    )
}