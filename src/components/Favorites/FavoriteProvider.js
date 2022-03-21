import React, { useState, createContext } from "react"

export const FavoriteContext = createContext()

const apiURL = "http://localhost:8088"

export const FavoriteProvider = (props) => {

    const [favorites, setFavorites] = useState([])
    const [favorite, setFavorite] = useState({ moods: [] })


    const getFavorites = () => {
        return fetch("http://localhost:8000/favorites")
            .then(res => res.json())
            .then(setFavorites)
    }

    const getMoodsByFavoriteId = (id) => {
        return fetch(`http://localhost:8000/favorites/${id}?_embed=tracks`)
            .then(res => res.json())
            .then(setFavorite)
    }

    const favoriteMood = (id) => {
        const fetchFavorites = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "userId": parseInt(sessionStorage.getItem("synthomnia_user")
                ),
                "moodId": id 
            })
        }

        return fetch(`${apiURL}/favorites`, fetchFavorites)
            .then(response => response.json())
            .then(() => {

            })
    }

    const deleteFav = favId => {
        return fetch(`http://localhost:8000/favorites/${favId}`, {
            method: "DELETE"
        })
            .then(getFavorites)
    }

    return (
        <FavoriteContext.Provider value={{
            getFavorites, favorites, getMoodsByFavoriteId, favorite, favoriteMood, deleteFav
        }}>
            {props.children}
        </FavoriteContext.Provider>
    )
}
