import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { MoodContext } from "./MoodProvider"
import "./Mood.css"
import { Grid, Image } from 'semantic-ui-react'

export const MoodList = () => {
    const { moods, getMoods } = useContext(MoodContext)

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
                                    <Image size="medium" src={mood.imgSRC} circular />
                                    <div className="mood_name">
                                        <h2>{mood.name}</h2>
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