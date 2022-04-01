import React, { useContext, useEffect, useState } from "react"
import { useHistory, Link, useParams } from "react-router-dom"
import { FavoriteContext } from "./FavoriteProvider"
// import { MoodContext } from "../Moods/MoodProvider"
import "./Favorite.css"
import { Grid, Image, Header, Button, Icon } from 'semantic-ui-react'


export const FavoriteList = (props) => {
    const { favorites, getFavorites, deleteFav } = useContext(FavoriteContext)
    const currentUser = parseInt(sessionStorage.getItem("synthomnia_user"))
    const history = useHistory()
    const [favorite] = useState({ favorites: {} })


    useEffect(() => {
        console.log("FavoriteList: useEffect - getFavorites")
        getFavorites()
    }, [])

        const handleDelete = () => {
            deleteFav()
                .then(() => {
                    history.push("/favorites")
                })
        }

    return (
        <Grid columns={3} divided align="center">
            {
                favorites.map(favorite => {
                    if (
                        favorite.userId === currentUser
                    ) {
                        return (
                            <Grid.Column key={favorite.id} className="tracks" align="center">
                                <Grid.Column className="track_object">
                                    <Link to={`/play/${favorite.moodId}`} className="favorite_link">
                                        <Image size="medium" src={favorite.favImgSRC} circular />
                                        <div className="favorite_name">
                                            <h2>{favorite.name}</h2>
                                        </div>
                                        <Button as='div' labelPosition='right'>
                                            <Button color='red' onClick={handleDelete}>
                                                <Icon name='delete' />
                                                Delete Fav
                                            </Button>
                                        </Button>
                                    </Link>
                                </Grid.Column>
                            </Grid.Column>
                        )

                    }
                })
            }
        </Grid>
    )
}