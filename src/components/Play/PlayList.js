import React, { useContext, useEffect } from "react"
import { useHistory, Link, useParams } from "react-router"
import { PlayContext } from "./PlayProvider"
import "./Play.css"
import { Button, Icon } from 'semantic-ui-react'
import { PlayDetail } from "./PlayDetail"
import { MoodContext } from "../Moods/MoodProvider"
import { useState } from "react/cjs/react.development"
import { FavoriteContext } from "../Favorites/FavoriteProvider"
// import { PlayDetail } from "./PlayDetail"

export const PlayList = () => {
  const { mood, getTracksByMoodId } = useContext(MoodContext)
  const { moodParam } = useParams()
  const [ trackStyle, trackId ] = moodParam.split("_")
  // debugger
  const history = useHistory()
  const [selectedTrack, setSelectedTrack] = useState({})
  const { favorite, getTracksByFavoriteId } = useContext(FavoriteContext)
  
  useEffect(() => {
    if (trackStyle === "mood") {
      setSelectedTrack(favorite.tracks[0])
        getTracksByMoodId(trackId)
    } else {
      setSelectedTrack(mood.tracks[0])
        getTracksByFavoriteId(trackId)
    }
  }, [favorite, mood])

  // useEffect(() => {
  //   console.log("TrackList: useEffect - getTracks")
  //   getTracksByFavoriteId(favoriteId)
  // }, [])

  // useEffect(() => {
  //   setSelectedTrack(mood.tracks[0])
  // }, [mood])

  // useEffect(() => {
  //   console.log("TrackList: useEffect - getTracks")
  //   getTracksByMoodId(moodId)
  // }, [])

  if (trackStyle === "mood") {

    return (
      <>
        {mood.tracks.map(track => {
          return (
            <h2 key={track.id}></h2>
          )
        })}
        {selectedTrack && selectedTrack.embedPlayerSRC && <PlayDetail track={selectedTrack} />}
      </>
    )
  } else {
    return (
      <>
        {favorite.tracks.map(track => {
          return (
            <h2 key={track.id}></h2>
          )
        })}
        {selectedTrack && selectedTrack.embedPlayerSRC && <PlayDetail track={selectedTrack} />}
      </>
    )
  }
}


// const FavoritePlayer = () => {
//   const { favorite, getTracksByFavoriteId } = useContext(FavoriteContext)
//   const { favoriteId } = useParams()

//   useEffect(() => {
//     setSelectedTrack(favorite.tracks[0])
//   }, [favorite])

//   useEffect(() => {
//     console.log("TrackList: useEffect - getTracks")
//     getTracksByFavoriteId(favoriteId)
//   }, [])

//   return (
//     <>
//       {favorite.tracks.map(track => {
//         return (
//           <h2 key={track.id}></h2>
//         )
//       })}
//       {selectedTrack && selectedTrack.embedPlayerSRC && <PlayDetail track={selectedTrack} />}
//     </>
//   )
// }