import React, { useContext, useEffect } from "react"
import { useHistory, Link, useParams } from "react-router"
import { PlayContext } from "./PlayProvider"
import "./Play.css"
import { Button, Icon } from 'semantic-ui-react'
import { PlayDetail } from "./PlayDetail"
import { MoodContext } from "../Moods/MoodProvider"
import { useState } from "react/cjs/react.development"
// import { PlayDetail } from "./PlayDetail"

export const PlayList = () => {
  const { mood, getTracksByMoodId } = useContext(MoodContext)

  const { moodId } = useParams()
  const history = useHistory()
  const [selectedTrack, setSelectedTrack] = useState({})

  useEffect(() => {
    setSelectedTrack(mood.tracks[0])
  },[mood])

  useEffect(() => {
    console.log("TrackList: useEffect - getTracks")
    getTracksByMoodId(moodId)
  }, [])

  return (<>
    {mood.tracks.map(track => {
      return (
        <h2 key={track.id}>{track.name}</h2>
      )
    })}
    {selectedTrack && selectedTrack.embedPlayerSRC && <PlayDetail track={selectedTrack} />}
  </>
  )
}

{/* <div class="ui two column centered grid">
  <div class="column">
  <section className="Tracks">
      <h2>Tracks</h2>
      <button onClick={
        () => history.push("/tracks/play")
      }>
        Add Track
      </button>
      {
        tracks.map(track => {
          return (
            <div className="track" id={`track--${track.id}`}>
              <div className="track__name">
                Name: { track.name }
              </div>
              <div className="track__address">
                Play: { track.url }
              </div>
            </div>
          )
        })
      }
    </section>
  </div>
  <div class="four column centered row">
    <div class="column"></div>
    <div class="column"></div>
  </div>
</div> */}


// <Button icon onClick={
//             () => history.push("/tracks/play")
//           }>
//             <Icon name='play' />
//           </Button>