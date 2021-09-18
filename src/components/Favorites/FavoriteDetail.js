import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router"
import { FavoriteContext } from "./FavoriteProvider"
import "./Favorite.css"
import { Grid, Image } from 'semantic-ui-react'
import { PlayList } from "../Play/PlayList"

export const FavoriteList = () => {
    const { favorites, getFavorites, getTracksByFavoriteId } = useContext(FavoriteContext)

    const history = useHistory()

    useEffect(() => {
        console.log("FavoriteList: useEffect - getFavorites")
        getFavorites()
    }, [])

    useEffect(() => {
        console.log("FavoriteList: useEffect - getFavorites")
        getTracksByFavoriteId()
    }, [])

    return (
        <FavoriteList />
    )
}