import React from "react"
import { Route } from "react-router-dom"

export const ApplicationViews = () => {
    return (
        <>
            <Play>
                <Route exact path="/play">
                    <PlayList />
                </Route>
            </Play>
        </>
    )
}