import React, { useEffect, useState, createContext, useContext } from "react"
import { useHistory, useParams } from "react-router"
import { PlayContext } from "./PlayProvider"


export const PlayDetail = (props) => {

    const { tracks, getTracks, moods, getMoods } = useContext(PlayContext)
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
            {
                tracks.map(track => {
                    return (
                        <div>
                            <div class="column">
                                <section className="Tracks">
                                    <h2 align='center'>{track.name}</h2>
                                    <div className="embed" >

                                        <iframe className="embed_player"
                                            src={track.embedPlayerSRC}
                                            seamless><a href="https://oralsax.bandcamp.com/album/type-zero-2">Type Zero by Oral Sax</a>
                                        </iframe>
                                    </div>
                                </section>
                            </div>
                            <div class="four column centered row">
                                <div class="column"></div>
                                <div class="column"></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}