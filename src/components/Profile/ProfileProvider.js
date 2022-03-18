import React, { useState, createContext } from "react"

export const ProfileContext = createContext()

export const ProfileProvider = (props) => {
    const [profiles, setProfiles] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    const getProfiles = () => {
        return fetch("http://localhost:8000/synthomniauser", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("su_token")}`
            }
        })
            .then(res => res.json())
            .then(setProfiles)
    }

    const getProfileById = (id) => {
        return fetch(`http://localhost:8000/synthomniauser/${id}`, {
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

// a41dce7076b1ff7790db68a952051fd8ef9a5a44