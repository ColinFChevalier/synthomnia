import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router"
import { MoodContext } from "./MoodProvider"
import "./Mood.css"
import { Button, Icon } from 'semantic-ui-react'
import { Grid, Image } from 'semantic-ui-react'

export const MoodList = () => {
    const { moods, getMoods } = useContext(MoodContext)

    const history = useHistory()

    useEffect(() => {
        console.log("MoodList: useEffect - getMoods")
        getMoods()
    }, [])

    return (
        <Grid columns={2} divided>
            {
                moods.map(mood => {
                    return (
                        <Grid.Row className="tracks" align="center">
                            <Grid.Column className="track_object">
                                <Image size="medium" src="https://f4.bcbits.com/img/a1896888627_16.jpg" circular />
                                <div className="mood_name">
                                <h2>{ mood.name }</h2>
                                </div>
                            </Grid.Column>
                            <Grid.Column className="track_object">
                                <Image size="medium" src="https://f4.bcbits.com/img/a1120825498_16.jpg" circular />
                                <div className="mood_name">
                                <h2>{ mood.name }</h2>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    )
                })
            }
        </Grid>
    )
}