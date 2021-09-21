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
  const { moodId } = useParams()
  const history = useHistory()
  const [selectedTrack, setSelectedTrack] = useState({})

  useEffect(() => {
    setSelectedTrack(mood.tracks[0])
  }, [mood])

  useEffect(() => {
    console.log("TrackList: useEffect - getTracks")
    getTracksByMoodId(moodId)
  }, [])

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