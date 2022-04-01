import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    const [profiles, setProfiles] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    const getProfiles = () => {
        return fetch("https://quiet-bayou-08478.herokuapp.com/synthomniauser", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(setProfiles)
    }

    const getProfileById = (id) => {
        console.log(id)
        return fetch(`https://quiet-bayou-08478.herokuapp.com/synthomniauser/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(setCurrentUser)
    }

    return (
        <ProfileContext.Provider value={{
            profiles, getProfiles, getProfileById, currentUser
        }}>
            {props.children}
        </ProfileContext.Provider>
    )
}