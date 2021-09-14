import React from "react"
import { Route } from "react-router-dom"
import { PlayProvider } from "./components/Play/PlayProvider"
import { PlayList } from "./components/Play/PlayList"
// import { PlayDetail } from "./components/Play/PlayDetail"

export const ApplicationViews = () => {
    return (
        <>
            <h1 align="center">S Y N T H O M N I A</h1>
            <PlayProvider>
                <Route path="/">
                    <PlayList />
                    {/* <PlayDetail /> */}
                </Route>
            </PlayProvider>
        </>
    )
}