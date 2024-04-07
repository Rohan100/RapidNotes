import React from 'react'
import { Container } from 'react-bootstrap'
import rpimg from '../../../assets/secondimg.jpg'
import '../../css/shortDist.css'
function ShortDist() {
  return (
    <div className='short-dist'>
       <img className='rpimg' src={rpimg} alt="" />
        <div className='text-str'>
        <h1 className="heading text-center">
            Why RapidNotes ?
        </h1>
        Our platform is designed exclusively for students, providing a collaborative space to share and access valuable study resources. Whether you're preparing for exams,simply eager to expand your knowledge, our platform offers a diverse collection of user-generated notes contributed by fellow students. Here, knowledge knows no boundaries as students freely exchange insights, ideas, and study materials across various subjects and disciplines. Join our vibrant community today and empower your academic journey with easy access to a wealth of educational resources!
        </div>
        
    </div>
  )
}

export default ShortDist