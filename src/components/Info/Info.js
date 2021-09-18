import { InfoContext } from "./InfoProvider";
import React, { useContext, useEffect } from "react"
import { useHistory, Link, useParams } from "react-router"
import { Grid, Image } from 'semantic-ui-react'
import "./Info.css"

export const HomePage = () => {
    return (
        <Grid divided='vertically' align="center">
            <Grid.Row columns={2}>
                <Grid.Column>
                    <h1>test1</h1>
                </Grid.Column>
                <Grid.Column>
                    <h1>test2</h1>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={3}>
                <Grid.Column>
                    <h1>test11</h1>
                </Grid.Column>
                <Grid.Column>
                    <h1>test22</h1>
                </Grid.Column>
                <Grid.Column>
                    <h1>test33</h1>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )

}