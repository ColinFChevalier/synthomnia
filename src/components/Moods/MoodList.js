import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { MoodContext } from "./MoodProvider"
import "./Mood.css"
import { Grid, Image, Button, Icon, Label } from 'semantic-ui-react'

export const MoodList = () => {
    const { moods, getMoods, createMood } = useContext(MoodContext)

    const history = useHistory()

    useEffect(() => {
        console.log("MoodList: useEffect - getMoods")
        getMoods()
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
        </Grid>
    )
}