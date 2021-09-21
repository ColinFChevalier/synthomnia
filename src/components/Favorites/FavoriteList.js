import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { FavoriteContext } from "./FavoriteProvider"
import "./Favorite.css"
import { Grid, Image } from 'semantic-ui-react'

export const FavoriteList = () => {
    const { favorites, getFavorites } = useContext(FavoriteContext)

    const history = useHistory()

    useEffect(() => {
        console.log("FavoriteList: useEffect - getFavorites")
        getFavorites()
    }, [])

    return (
        <Grid columns={3} divided>
            {
                favorites.map(favorite => {
                    return (
                        <Grid.Column key={favorite.id} className="tracks" align="center">
                            <Grid.Column className="track_object">
                                <Link to={`/play/fav_${favorite.id}`} className="favorite_link">
                                    <Image size="medium" src={favorite.imgSRC} circular />
                                    <div className="favorite_name">
                                        <h2>{favorite.name}</h2>
                                    </div>
                                </Link>
                            </Grid.Column>
                        </Grid.Column>
                    )
                })
            }
        </Grid>
    )
}