import React, { useEffect, useState, createContext, useContext } from "react"
import { useHistory, useParams } from "react-router"
import { PlayContext } from "./PlayProvider"
import { FavoriteContext } from "../Favorites/FavoriteProvider"
import { Button, Icon, Label, Grid } from 'semantic-ui-react'


export const PlayDetail = (props) => {

    const { tracks, getTrackByMoodId, moods, deleteMood } = useContext(PlayContext)
    const { favoriteMood } = useContext(FavoriteContext)
    const { createTrack } = useContext(PlayContext)
    // const [track, setTrack] = useState({ track: {}, mood: {} })
    const { moodId } = useParams()

    const history = useHistory()

    useEffect(() => {
        console.log("PlayDetail: useEffect - getTracks")
        getTrackByMoodId(moodId)
    }, [])

    // useEffect(() => {
    //     console.log("PlayDetail: useEffect - getMoods")
    //     getMoods()
    // }, [])

    // useEffect(() => {
    //     if (props.track) {
    //         setTrack(props.track)
    //     } else {
    //         const thisTrack = tracks.find(a => a.id === parseInt(trackId)) || { mood: {}, track: {} }

    //         setTrack(thisTrack)
    //     }
    // }, [trackId])
    console.log(props)

    return (<>
        <div className="add_track-button">
            <Button as='div' labelPosition='right' onClick={() => {
                history.push({ pathname: "/play-form/new" });
            }}>
                <Button color='green'>
                    <Icon name='plus' />
                    Add
                </Button>
            </Button>
        </div>
        <Grid columns={3} divided>
            {tracks.map(track =>
                <div class="ui two column centered grid">
                    <div>
                        <div className="column">
                            <section className="Tracks">
                                <h2 align='center'>{track.name}</h2>
                                <div className="embed" >
                                    {track.bandcampURL && <iframe className="embed_player"
                                        src={track.bandcampURL}
                                        seamless><a href="https://oralsax.bandcamp.com/album/type-zero-2">Type Zero by Oral Sax</a>
                                    </iframe>}
                                </div>
                            </section>
                        </div>
                        <div className="four column centered row">
                            <div className="column"></div>
                            <div className="column"></div>
                        </div>
                        <div>
                            <Button as='div' labelPosition='right' onClick={() => favoriteMood(track.id)}>
                                <Button color='red'>
                                    <Icon name='heart' />
                                    Like
                                </Button>
                            </Button>
                        </div>
                    </div>
                </div>)}
        </Grid>
    </>
    )
}