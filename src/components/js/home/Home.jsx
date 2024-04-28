import React, { useEffect, useState } from 'react'
import Nvbar from '../Navbar/Nvbar.jsx'
import '../../css/Home.css'
import FrontPage from './FrontPage'
import UserPage from '../user/UserPage';
import { UserAuth } from '../../../store/AuthContext.jsx';
function Home() {
  const {user} = UserAuth();

  return (
    <div className='component-container'>
      {!user ?
          <>
          <Nvbar />
          <FrontPage />
          </>
          : 
          <UserPage />
        }

    </div>
  )
}

export default Home