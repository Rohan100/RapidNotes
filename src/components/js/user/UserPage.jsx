import React, { useContext, useEffect, useState } from 'react'
import Nvbar from '../Navbar/Nvbar'
import { Form } from 'react-bootstrap'

import "../../css/user/UserPage.css"
import Notes from './Notes'

import { Link, useNavigate } from 'react-router-dom'
import { ViewPdf } from '../ViewPdf'
import { UserFileContext } from '../../../store/FileContext'


function UserPage() {
  const {files} = UserFileContext();
  const navigate = useNavigate();

  console.log(files)
  const handleSelectFile = (i) => {
    selectFileToView(i)
    navigate('/view')
  }
  return (
    <div className='userpage-container' >
      <Nvbar />
     <div className="user-container mb-3">
      <Form className='filter'>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Branch</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select size='sm' aria-label="Default select example">
            <option>Subject</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form>
        </div>
        <div className="file-container">
          {files.map(i => 
           <Link to={'/view/'+i.id} key={i.id}  >
            <Notes url={i.thumbnail} name={i.file_name}  ></Notes>
           </Link> 
          )}
          
        </div>
    </div>
  )
}

export default UserPage