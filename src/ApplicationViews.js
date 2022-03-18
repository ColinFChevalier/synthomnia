import React from "react"
import { Route } from "react-router-dom"
import { PlayProvider } from "./components/Play/PlayProvider"
import { PlayList } from "./components/Play/PlayList"
// import { PlayDetail } from "./components/Play/PlayDetail"
import { MoodProvider } from "./components/Moods/MoodProvider"
import { MoodList } from "./components/Moods/MoodList"
import { InfoProvider } from "./components/Info/InfoProvider"
import { HomePage } from "./components/Info/Info"
import { FavoriteProvider } from "./components/Favorites/FavoriteProvider"
import { FavoriteList } from "./components/Favorites/FavoriteList"
import { PlayDetail } from "./components/Play/PlayDetail"
import { ProfileList } from "./components/Profile/ProfileList"
import { ProfileProvider } from "./components/Profile/ProfileProvider"
// import { AboutForm } from "./components/About/AboutForm"

export const ApplicationViews = () => {
    return (
        <>
            <h1 align="center">S Y N T H O M N I A</h1>
            <ProfileProvider>
                <PlayProvider>
                    <MoodProvider>
                        <InfoProvider>
                            <FavoriteProvider>
                                <Route path="/">
                                    <HomePage />
                                </Route>

                                <Route path="/play/:moodId">
                                    <PlayList />
                                    {/* <PlayDetail /> */}
                                </Route>

                                <Route path="/moods">
                                    <MoodList />
                                </Route>

                                <Route path="/favorites">
                                    <FavoriteList />
                                </Route>

                                <Route path="/profile">
                                    <ProfileList />
                                </Route>

                                {/* <Route path="/about">
                                <AboutForm />
                            </Route> */}
                            </FavoriteProvider>
                        </InfoProvider>
                    </MoodProvider>
                </PlayProvider>
            </ProfileProvider>
        </>
    )
}