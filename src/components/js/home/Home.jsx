import React, { useEffect, useState } from 'react'
import Nvbar from './Nvbar'
import '../../css/Home.css'
import FrontPage from './FrontPage'
import UserPage from '../user/UserPage';
function Home() {
  const [user, setUser] = useState(true);
  useEffect(() => {
    setUser(false);
  },[])
  return (
    <div className='component-container'>
      {user ?
        <>
          <Nvbar />
          <FrontPage />
        </> : <UserPage />
        }

    </div>
  )
}

export default Home