import React, { useState, createContext } from "react"

export const InfoContext = createContext()

// const apiURL = "http://localhost:8088"

export const InfoProvider = (props) => {
    const [infos, setInfos] = useState([])

    const getInfo = () => {
        return fetch("http://localhost:8088/infos")
        .then(res => res.json())
        .then(setInfos)
    }

    // const getMoods = () => {
    //     return fetch("http://localhost:8088/moods")
    //     .then(res => res.json())
    // }


    // const getInfoByMoodId = (id) => {
    //     return fetch(`http://localhost:8088/moods/?_embed=infos${id}`)
    //     .then(res => res.json())
    // }


    return (
        <InfoContext.Provider value={{
            infos, getInfo
        }}>
            {props.children}
        </InfoContext.Provider>
    )
}