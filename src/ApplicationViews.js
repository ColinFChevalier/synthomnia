import React from "react"
import { Route } from "react-router-dom"
import { PlayProvider } from "./components/Play/PlayProvider"
import { PlayList } from "./components/Play/PlayList"
// import { PlayDetail } from "./components/Play/PlayDetail"
import { MoodProvider } from "./components/Moods/MoodProvider"
import { MoodList } from "./components/Moods/MoodList"
import { InfoProvider } from "./components/Info/InfoProvider"
import { InfoPage } from "./components/Info/Info"

export const ApplicationViews = () => {
    return (
        <>
            <h1 align="center">S Y N T H O M N I A</h1>
            <PlayProvider>
                <MoodProvider>
                    <InfoProvider>
                        <Route path="/welcome">
                            <InfoPage />

                        </Route>

                        <Route path="/play/:moodId">
                            <PlayList />

                        </Route>

                        <Route path="/moods">
                            <MoodList />
                        </Route>
                    </InfoProvider>
                </MoodProvider>
            </PlayProvider>
        </>
    )
}