import React, { useEffect, useState, createContext, useContext } from "react"
import { useHistory, useParams } from "react-router"
import { PlayContext } from "./PlayProvider"
import { FavoriteContext } from "../Favorites/FavoriteProvider"
import { Button, Icon, Label } from 'semantic-ui-react'


export const PlayDetail = (props) => {

    const { tracks, getTracks, moods } = useContext(PlayContext)
    const { favoriteTrack } = useContext(FavoriteContext)
    const [track, setTrack] = useState({ track: {}, mood: {} })

    const history = useHistory()
    const { trackId } = useParams()
    useEffect(() => {
        console.log("PlayDetail: useEffect - getTracks")
        getTracks()
    }, [])

    // useEffect(() => {
    //     console.log("PlayDetail: useEffect - getMoods")
    //     getMoods()
    // }, [])

    useEffect(() => {
        if (props.track) {
            setTrack(props.track)
        } else {
            const thisTrack = tracks.find(a => a.id === parseInt(trackId)) || { mood: {}, track: {} }

            setTrack(thisTrack)
        }
    }, [trackId])

    return (
        <div class="ui two column centered grid">
            <div>
                <div className="column">
                    <section className="Tracks">
                        <h2 align='center'>{track.name}</h2>
                        <div className="embed" >
                            {track.embedPlayerSRC && <iframe className="embed_player"
                                src={track.embedPlayerSRC}
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
                    <Button as='div' labelPosition='right' onClick={()=> favoriteTrack(track.id)}>
                        <Button color='red'>
                            <Icon name='heart' />
                            Like
                        </Button>
                    </Button>
                </div>
            </div>
        </div>
    )
}
