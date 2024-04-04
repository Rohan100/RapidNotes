import React, { useState } from 'react'
import './css/UploadFile.css'
import { Form, Col, Button } from 'react-bootstrap';

function UploadFile() {
  const formdata = new FormData();
  const [filename, setFilename] = useState('')
  const fileUploded = (e) => {
    if (e.target.files[0]) {
      setFilename(e.target.files[0].name)
    } else setFilename('');
  }

  return (
    <div className='d-flex align-items-center justify-content-center form_container'>
      <Form className='file_upload_form'>
        <div className="d-flex gap-4 op-container">
          <Form.Group className='mb-3 flex-grow-1'>
            <Form.Label column >
              Branch
            </Form.Label>
            <Col >
              <Form.Select>
                <option>Default select</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group className='mb-3 flex-grow-1'>
            <Form.Label column >
              Sem
            </Form.Label>
            <Col >
              <Form.Select>
                <option>Default select</option>
              </Form.Select>
            </Col>
          </Form.Group>
        </div>
        <div className="d-flex gap-4 op-container">
        <Form.Group as={Col} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Visibility
          </Form.Label>
          <Col >
              <Form.Select>
                <option>Public</option>
                <option>Private</option>
              </Form.Select>
            </Col>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Subject
          </Form.Label>
          <Col >
              <Form.Select>
                <option>Option</option>
              </Form.Select>
            </Col>
        </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control placeholder='write your file Description' as="textarea" rows={3} />
        </Form.Group>
        <div className="upload_input mb-3">
          <div className="drag_file">
            {filename == '' ? <> <h3>Upload File</h3>
              <p>Drag and drop file hear</p></> : <h4>{filename}</h4>}
          </div>
          <input className='' type='file' accept='.pdf' onChange={(e) => fileUploded(e)} placeholder='' ></input>
        </div>
        <Button >Submit</Button>
      </Form>
    </div>
  )
}

export default UploadFile