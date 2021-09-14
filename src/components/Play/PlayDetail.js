import React, { useState, createContext } from "react"

export const embedPlayer () => { 
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


// embedded bandcamp link
{/* <iframe style="border: 0; width: 350px; height: 470px;" src="https://bandcamp.com/EmbeddedPlayer/album=3426299746/size=large/bgcol=333333/linkcol=4ec5ec/tracklist=false/track=3125070522/transparent=true/" seamless><a href="https://oralsax.bandcamp.com/album/type-zero-2">Type Zero by Oral Sax</a></iframe> */}