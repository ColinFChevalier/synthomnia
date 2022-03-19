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

export const PlayList = (props) => {
  const { mood, getTracksByMoodId } = useContext(MoodContext)
  const { tracks, getTracks } = useContext(PlayContext)
  const { moodId } = useParams()
  const history = useHistory()
  const [setTrack, selectedTrack] = useState({})
  // const [setSelectedTrack] = useState({}) 



  useEffect(() => {
    console.log("TrackList: useEffect - getTracksByMoodId")
    getTracksByMoodId(parseInt(moodId))
    .then(setTrack)
  }, [tracks])

  // useEffect(() => {
  //   setSelectedTrack(mood.tracks[0])
  // }, [mood])

  // useEffect(() => {
  //   console.log("TrackList: useEffect - getTracksByMoodId")
  //   getTracks(moodId)
  //   .then(setTrack)
  // }, [])


  return (
    <>
      {tracks.map(track => {
        return (
          <h2 key={track.id} props={props}></h2>
        )
      })}
      {selectedTrack && selectedTrack.bandcampURL && <PlayDetail track={selectedTrack} />}
    </>
  )
}
//   return (
//     <>
//       {/* there is no mf mood.tracks wtf */}
//       {mood?.tracks?.map(track => {
//         return (
//           <h2 key={track.id}></h2>
//         )
//       })}
//       {selectedTrack && selectedTrack.bandcampURL && <PlayDetail track={selectedTrack} />}
//     </>
//   )
// }

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
//       {selectedTrack && selectedTrack.bandcampURL && <PlayDetail track={selectedTrack} />}
//     </>
//   )
// }