import React from "react"
import { Route } from "react-router-dom"
import { PlayProvider } from "./components/Play/PlayProvider"
import { PlayList } from "./components/Play/PlayList"
import { PlayForm } from "./components/Play/PlayForm"
// import { PlayDetail } from "./components/Play/PlayDetail"
import { MoodProvider } from "./components/Moods/MoodProvider"
import { MoodList } from "./components/Moods/MoodList"
import { MoodForm } from "./components/Moods/MoodForm"
import { InfoProvider } from "./components/Info/InfoProvider"
import { HomePage } from "./components/Info/Info"
import { FavoriteProvider } from "./components/Favorites/FavoriteProvider"
import { FavoriteList } from "./components/Favorites/FavoriteList"
import { PlayDetail } from "./components/Play/PlayDetail"
import { ProfileList } from "./components/Profile/ProfileList"
import { ProfileProvider } from "./components/Profile/ProfileProvider"
import { ArtistProvider } from "./components/Artists/ArtistProvider"
// import { AboutForm } from "./components/About/AboutForm"

export const ApplicationViews = () => {
    return (
        <>
            <h1 align="center">S Y N T H O M N I A</h1>
            <ProfileProvider>
                <ArtistProvider>
                    <PlayProvider>
                        <MoodProvider>
                            <InfoProvider>
                                <FavoriteProvider>
                                    <Route path="/">
                                        <HomePage />
                                    </Route>

                                    <Route path="/play/:moodId">
                                        <PlayList />
                                        <PlayDetail />
                                    </Route>

                                    <Route exact path="/play-form/new">
                                        <PlayForm />
                                    </Route>

                                    <Route exact path="/moods">
                                        <MoodList />
                                    </Route>

                                    <Route exact path="/moods/new">
                                        <MoodForm />
                                    </Route>

                                    <Route exact path="/favorites">
                                        <FavoriteList />
                                    </Route>

                                    <Route exact path="/profile">
                                        <ProfileList />
                                    </Route>

                                    {/* <Route path="/about">
                                        <AboutForm />
                                    </Route> */}
                                </FavoriteProvider>
                            </InfoProvider>
                        </MoodProvider>
                    </PlayProvider>
                </ArtistProvider>
            </ProfileProvider>
        </>
    )
}