import React, { useState, createContext } from "react"

export const PlayContext = createContext()

// const apiURL = "http://localhost:8088"

export const PlayProvider = (props) => {
    const [tracks, setTracks] = useState([])

    const getTracks = () => {
        return fetch("http://localhost:8088/tracks")
        .then(res => res.json())
        .then(setTracks)
    }

    // const addTracks = trackObj => {
    //     return fetch("http://localhost:8088/customers", {
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
            tracks, getTracks
        }}>
            {props.children}
        </PlayContext.Provider>
    )
}