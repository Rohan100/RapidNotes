import React from 'react'
import '../../css/user/notes.css'
import { UserAuth } from '../../../store/AuthContext'
function Notes({ url, name }) {
  const {user} = UserAuth();
  return (
    <div className='note'>
      <img className='note-img' src={url} alt="" />
      <div className="note-info">
        <img className='note-owner' src={user.photoURL} alt="" />
        <div className="note-title">{name.length > 20 ? name.slice(0,20) + '...' : name}</div>
      </div>
    </div>
  )
}

export default Notes