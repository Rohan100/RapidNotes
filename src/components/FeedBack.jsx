import React from 'react'
import { Container, Form } from 'react-bootstrap'
import "./css/feedBack.css"
function FeedBack() {
  return (
    <div className='feedback-container'>
        <div className='feedback-sidebar'>
          <h2>If you want some changes please let us know</h2>
          <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti modi dolorem voluptas vel ducimus labore minima excepturi voluptatibus iste nam illo, officiis 
          </div>
        </div>
        <div className="form-wrap">
          <form className='feedback-form'>
              <input placeholder='Enter your Email' type='email' name='email'/>
              <input placeholder='Enter your feedback' aria-colspan={2}/>
              <button>Submit</button>
          </form>
        </div> 
    </div>
  )
}

export default FeedBack