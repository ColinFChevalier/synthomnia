import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { MoodContext } from "./MoodProvider"
import { ArtistContext } from "../Artists/ArtistProvider"
import "./Mood.css"
import { Grid, Image, Button, Icon, Label } from 'semantic-ui-react'

export const MoodList = () => {
    const { moods, getMoods, createMood, deleteMood } = useContext(MoodContext)
    const { artists, getArtists } = useContext(ArtistContext)

    const history = useHistory()

    useEffect(() => {
        console.log("MoodList: useEffect - getMoods")
        getMoods()
    }, [])

    useEffect(() => {
        getArtists()
    }, [])

    return (
        <Grid columns={3} divided>
            {
                moods.map(mood => {
                    return (
                        <Grid.Column key={mood.id} className="tracks" align="center">
                            <Grid.Column className="track_object">
                                <Link to={`/play/${mood.id}`} className="mood_link">
                                    <Image size="medium" src={mood.imgURL} circular />
                                    <div className="mood_name">
                                        <h2>{mood.name}</h2>
                                    </div>
                                </Link>
                            </Grid.Column>
                            <div>
                                <Button as='div' labelPosition='right' onClick={() => deleteMood(mood.id)}>
                                    <Button color='red'>
                                        <Icon name='delete' />
                                        Delete
                                    </Button>
                                </Button>
                                <div>
                                {
                                    artists.map(artist => {
                                        <Grid.Column key={artist.id} className="artists" align="center">
                                            <div>
                                                <h2 align="center">{artist.user}</h2>
                                            </div>
                                        </Grid.Column>
                                    })
                                }
                            </div>
                            </div>
                        </Grid.Column>
                    )
                })
            }
            <div className="addButton">
                <Button as='div' labelPosition='right' onClick={() => {
                    history.push({ pathname: "/moods/new" });
                }}>
                    <Button color='purple'>
                        <Icon name='add square' />
                        Add
                    </Button>
                </Button>
            </div>
            <div>
                {/* {
                    artists.map(artist => {
                        <Grid.Column key={artist.id} className="artists" align="center">
                            <div>
                                <h2>{artist.id}</h2>
                            </div>
                        </Grid.Column>
                    })
                } */}
            </div>
        </Grid>
    )
}