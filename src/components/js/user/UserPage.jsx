import React, { useContext, useEffect, useState } from 'react'
import Nvbar from '../home/Nvbar'
import { Form } from 'react-bootstrap'

import "../../css/user/UserPage.css"
import Notes from './Notes'
import { getFiles } from '../api'
import { Link } from 'react-router-dom'


function UserPage() {
  const [files,setFiles] = useState([]);

  const fetchFiles = async () => {
      const data = await getFiles();
      setFiles(data);
  } 

  useEffect(()=>{
    fetchFiles();
  },[])


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
           <Link to={`/view/${i.id}`}>
            <Notes onClick={viewPdf} url={i.thumbnail} name={i.file_name} key={i.id}  ></Notes>
           </Link> 
          )}
        </div>
    </div>
  )
}

export default UserPage