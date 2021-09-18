import React, { useState, createContext } from "react"

export const FavoriteContext = createContext()

const apiURL = "http://localhost:8088"

export const FavoriteProvider = (props) => {

    const [favorites, setFavorites] = useState([])
    const [favorite, setFavorite] = useState({ tracks: [] })


    const getFavorites = () => {
        return fetch("http://localhost:8088/favorites")
            .then(res => res.json())
            .then(setFavorites)
    }

    const getTracksByFavoriteId = (id) => {
        return fetch(`http://localhost:8088/favorites/${id}?_embed=tracks`)
            .then(res => res.json())
            .then(setFavorite)
    }

    const favoriteTrack = (id) => {
        const fetchFavorites = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "userId": parseInt(sessionStorage.getItem("synthomnia_user")
                ),
                "trackId": id
            })
        }

        return fetch(`${apiURL}/favorites`, fetchFavorites)
            .then(response => response.json())
            .then(() => {

            })
    }

    return (
        <FavoriteContext.Provider value={{
            getFavorites, favorites, getTracksByFavoriteId, favorite, favoriteTrack
        }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}
