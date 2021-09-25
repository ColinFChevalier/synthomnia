import React, { useContext, useEffect } from "react"
import { Segment, Image } from 'semantic-ui-react'
import "./Info.css"

export const HomePage = () => {
    return (
        <Segment>
    <Image src={"https://f4.bcbits.com/img/0016721366_100.png"} size='huge' centered />
    <h2 align="center">
      Welcome to SYNTHOMNIA, a place to replace your insomnia with SYNTHOMNIA
    </h2>
    <h3 align="center">
      Navigate to any mood you desire, and hit play to hear some synth music. All music is original, created by me, Colin Chevalier. 
      <br>
      </br>
      Select a mood based on what kind of Sci Fi you are fits you best for the moment, and enjoy a 
      <br>
      </br>
      then listen and enjoy! Favorite a mood to easily get back to it on your next visit. 
      <br>
      </br>
      Like what you hear? Click on any of the buttons at the bottom of your page to find my discography, social links, and github to follow my dev adventures!
    </h3>
  </Segment>
    )

}