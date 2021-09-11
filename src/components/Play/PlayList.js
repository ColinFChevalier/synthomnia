import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router"
import { PlayContext } from "./PlayProvider"
import "./Play.css"

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