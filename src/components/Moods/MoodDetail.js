import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router"
import { MoodContext } from "./MoodProvider"
import "./Mood.css"
import { PlayList } from "../Play/PlayList"

export const MoodList = () => {
    const { moods, getMoods, getTracksByMoodId } = useContext(MoodContext)

    const history = useHistory()

    useEffect(() => {
        console.log("MoodList: useEffect - getMoods")
        getMoods()
    }, [])

    useEffect(() => {
        console.log("MoodList: useEffect - getMoods")
        getTracksByMoodId()
    }, [])

    return (
        <PlayList />
    )
}