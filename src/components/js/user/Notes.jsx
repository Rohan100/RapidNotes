import React from 'react'
import '../../css/user/notes.css'
function Notes({url,name}) {
  return (
    <div className='note'>
        <img src={url} alt="" />
        <div className="">{name}</div>
    </div>
  )
}

export default Notes