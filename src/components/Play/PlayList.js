import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router"
import { PlayContext } from "./PlayProvider"
import "./Play.css"
import { Button, Icon } from 'semantic-ui-react'

export const PlayList = () => {
  const { tracks, getTracks } = useContext(PlayContext)

  const history = useHistory()

  useEffect(() => {
    console.log("TrackList: useEffect - getTracks")
    getTracks()
  }, [])

  return (
    <div class="ui two column centered grid">
      <div class="column">
        <section className="Tracks">
          <h2 align='center'>Tracks</h2>
          <div className="embed" >
            <iframe className="embed_player"
              src="https://bandcamp.com/EmbeddedPlayer/album=3426299746/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/track=3125070522/transparent=true/"
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