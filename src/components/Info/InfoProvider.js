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

    return (
        <InfoContext.Provider value={{
            infos, getInfo
        }}>
            {props.children}
        </InfoContext.Provider>
    )
}