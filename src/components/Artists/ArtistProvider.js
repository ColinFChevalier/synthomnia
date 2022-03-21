import React, { useState, createContext } from "react"

export const ArtistContext = createContext()

// const apiURL = "http://localhost:8088"

export const ArtistProvider = (props) => {
    const [artists, setArtists] = useState([])
    const [artist, setArtist] = useState({ artists: [] })


    const getArtists = () => {
        return fetch("http://localhost:8000/artist", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(setArtists)
    }

    const deleteArtist = (id) => {
        return fetch(`http://localhost:8000/artist/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(getArtists)
    }

    const getTracksByArtistId = (id) => {
        return fetch(`http://localhost:8000/artist/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(setArtist)
    }

    const createArtist = (newArtist) => {
        return fetch(`http://localhost:8000/artist`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            },
            body: JSON.stringify(newArtist)
        })
            .then(res => res.json())
            .then(getArtists)
    }

    return (
        <ArtistContext.Provider value={{
            getArtists, artists, getTracksByArtistId, artist, createArtist, deleteArtist
        }}>
            {props.children}
        </ArtistContext.Provider>
    )
}