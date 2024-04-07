import React from 'react'
import '../../css/Sidebar.css'
import { MdMenu } from 'react-icons/md'
import { FaSave , FaHome} from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { MdOutlineFileUpload } from "react-icons/md";
import {Link} from 'react-router-dom'

function Sidebar({hide}) {
  return (
    <div className={hide ? 'sidebar hide' : 'sidebar'}>
        <div className="side-icons">
          <FaSave/>
          <p>save</p>
        </div>
        <div className="side-icons">
          <AiFillLike/>
          <p>like</p>
        </div>
        <div className="side-icons">
          <FaHome/>
          <p>Home</p>
        </div>
        <div className="side-icons">
          <Link to='/upload'><MdOutlineFileUpload/></Link>
          <p>upload</p>
        </div>
    </div>
  )
}

export default Sidebar