import React from 'react'
import '../../css/Home.css'
import { Container } from 'react-bootstrap'

import MyFooter from './MyFooter'
import ShortDist from './ShortDist'
import Cards from './Cards' 
import FeedBack from './FeedBack'
function FrontPage() {
  return (
    <>
    <div className='home '>

      <Container className='mt-5'>
        <h1 className='short_title text-center'>
          Welcome to <span className='imp'>RapidNotes</span> the ultimate hub for <span className='imp'>students </span>
           to <span className='imp'>collaborate </span> and <span className='imp'>excel!</span>
        </h1>
        <div className='discription'>
        Join the community, contribute your notes, and gain access to a
        <br></br> wealth of resources from your peers.
        </div>

        <div className='button_wrapper d-flex justify-content-around'>
        <button className='ex_button'>
          Explore
        </button>
        </div>
      </Container>
    </div>
    <ShortDist/>
    <Cards/>
    <FeedBack/>
    <MyFooter/>
    </>
  )
}

export default FrontPage