import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { FavoriteContext } from "./FavoriteProvider"
// import { MoodContext } from "../Moods/MoodProvider"
import "./Favorite.css"
import { Grid, Image, Header, Button, Icon } from 'semantic-ui-react'


export const FavoriteList = () => {
    const { favorites, getFavorites, deleteFav } = useContext(FavoriteContext)
    // const [track, setTrack] = useState({ track: {}, mood: {} })
    const currentUser = parseInt(sessionStorage.getItem("synthomnia_user"))
    const history = useHistory()

    useEffect(() => {
        console.log("FavoriteList: useEffect - getFavorites")
        getFavorites()
    }, [])

    // const playFavMood = (e) => {

    // }

    return (
        <Grid columns={3} divided>
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
                                        <Button as='div' labelPosition='right' onClick={() => deleteFav()}>
                                            <Button color='red'>
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