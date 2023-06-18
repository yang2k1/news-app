import React from "react"
// import Discover from "../../discover/Discover"
// import Side from "../../sideContent/side/Side"
// import Life from "../life/Life"
// import Music from "../musics/Music"
// import Popular from "../popular/Popular"
// import Ppost from "../Ppost/Ppost"
import "./style.css"
import Post from "../Post/Post";

const Homes = () => {
  return (
    <>
      <main>
        <div className='container'>
          <section className='mainContent'>
            {/*<Popular />*/}
            <Post />
            {/*<Life />*/}
            {/*<Music />*/}
          </section>
          <section className='sideContent'>
            {/*<Side />*/}
          </section>
        </div>
      </main>
    </>
  )
}

export default Homes