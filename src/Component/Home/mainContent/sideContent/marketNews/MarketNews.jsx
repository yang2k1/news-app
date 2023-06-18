import React from "react"

import "./marketNews.css"
import Heading from "../../../../common/heading/Heading";
import {tpost} from "../../../../../dummyData";

const MarketNews = () => {
  return (
    <>
      <section className='tpost'>
        <Heading title='Tin tức thị trường' />
        {tpost.map((val) => {
          return (
            <div className='box flexSB'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>{val.title.slice(0, 35)}...</h1>
                {/*<span>a year ago</span>*/}
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default MarketNews
