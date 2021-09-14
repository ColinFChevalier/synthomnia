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
        <Grid columns={3} divided>
            <Grid.Row>
                <Grid.Column>
                    <Image src="https://f4.bcbits.com/img/a1896888627_16.jpg" />
                </Grid.Column>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
                <Grid.Column>
                    <Image src='/images/wireframe/media-paragraph.png' />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}