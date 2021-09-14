import React from "react"
import { Route } from "react-router-dom"
import { PlayProvider } from "./components/Play/PlayProvider"
import { PlayList } from "./components/Play/PlayList"
// import { PlayDetail } from "./components/Play/PlayDetail"
import { MoodProvider } from "./components/Moods/MoodProvider"
import { MoodList } from "./components/Moods/MoodList"

export const ApplicationViews = () => {
    return (
        <>
            <h1 align="center">S Y N T H O M N I A</h1>
            <PlayProvider>
                <MoodProvider>
                    <Route path="/play">
                        <PlayList />
                        {/* <PlayDetail /> */}
                    </Route>

                    <Route path="/moods">
                        <MoodList />
                    </Route>
                </MoodProvider>
            </PlayProvider>
        </>
    )
}