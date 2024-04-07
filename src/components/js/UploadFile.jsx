import React, { useEffect, useState } from 'react'
import '../css/UploadFile.css'
import { Form, Col, Button } from 'react-bootstrap';
import { getBranches, getSubject, uploadFile } from './api';

function UploadFile() {
  const formdata = new FormData();
  const [filename, setFilename] = useState('');
  const [branches,setBranches] = useState();
  const [subjects,setSubjects] = useState();
  const [branch, setBranch] = useState();
  const [visibility,setVisibility] = useState();
  const [sub,setSub] = useState();
  const [description,setDescription] = useState();
  const [file,setFile] = useState('');

  useEffect(() => {
    const fetchBr = async () =>{
      const br = await getBranches();
      setBranches(br)
    }
    fetchBr()
  },[])

  useEffect( ()=>{
    const fetchsub = async () => {
      const subs = await getSubject(branch);
      setSubjects(subs);
    }
    fetchsub();
      
  },[branch])

  const fileUploded = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
      setFilename(e.target.files[0].name)
    } else setFilename('');
  }

  const submitFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('userid','rohan405')
    formData.append('file',file);
    formData.append('department',branch);
    formData.append('subject',sub);
    if(visibility == 'Public'){
      formData.append('isPrivate','{"private":false}')
    }
    else formData.append('isPrivate','{"private":true}')
    formData.append('description',description);
    await uploadFile(formData);
    setDescription('');
    alert("file uploaded")
  }

  return (
    <div className='d-flex justify-content-center form_container'>
      <Form className='file_upload_form m-auto'>
        <div className="d-flex gap-4 op-container">
          <Form.Group className='mb-3'>
            <Form.Label column >
              Branch
            </Form.Label>
            <Col >
              <Form.Select value={branch} onChange={(e) => setBranch( e.target.value)}>
                {branches ? branches.map(i => <option value={i.id} key={i.id}>{i.name}</option>) : <option>Branch</option>}
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
              <Form.Select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
                <option value={'Public'}>Public</option>
                <option value={'Private'}>Private</option>
              </Form.Select>
            </Col>
        </Form.Group>
        <Form.Group as={Col} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Subject
          </Form.Label>
          <Col >
              <Form.Select value={sub} onChange={(e) => setSub(e.target.value)}>
                {subjects ? subjects.map(i => <option value={i.id}>{i.name}</option>) : <option>Subject</option>}
              </Form.Select>
            </Col>
        </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} placeholder='write your file Description' as="textarea" rows={3} />
        </Form.Group>
        <div className="upload_input mb-3">
          <div className="drag_file">
            {filename == '' ? <> <h3>Upload File</h3>
              <p>Drag and drop file hear</p></> : <h4>{filename}</h4>}
          </div>
          <input className='' type='file' accept='.pdf' onChange={(e) => fileUploded(e)} placeholder='' ></input>
        </div>
        <Button onClick={submitFile}>Submit</Button>
      </Form>
    </div>
  )
}

export default UploadFile