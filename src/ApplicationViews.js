import React from "react"
import { Route } from "react-router-dom"
import { PlayProvider } from "./components/Play/PlayProvider"
import { PlayList } from "./components/Play/PlayList"

export const ApplicationViews = () => {
    return (
        <>
            <h1>S Y N T H O M N I A</h1>
            <PlayProvider>
                <Route path="/">
                    <PlayList />
                </Route>
            </PlayProvider>
        </>
    )
}