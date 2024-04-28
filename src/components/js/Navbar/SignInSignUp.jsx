import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';
import GoogleButton from 'react-google-button';
import { UserAuth } from '../../../store/AuthContext.jsx';


function SignInSignUp() {
    const [show, setShow] = useState(false);
    const [signup, SetSignup] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {googleSignin} = UserAuth();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {emailPasswordSignin,registerUser} = UserAuth();
    const [displayName,setDisplayName] = useState('');
    const [error,setError] = useState({nameError:false,emailError:false,passwordError:false});
    const handleSubmit = () => {
        if(!error.nameError && !error.passwordError && !error.emailError)
            if(!signup){
            try{
                emailPasswordSignin(email,password);
            }catch(err){
                console.log(err)
            }
            }else{
            registerUser(displayName,email,password)
            }
        
    }

    useEffect(()=>{
        if(email == '')
        setError( s => ({...s,emailError:true}))
    else 
        setError(s => ({...s,emailError:false}))
    if(signup && displayName == '') 
        setError(s => ({...s,nameError:true}))
    else 
        setError(s => ({...s,nameError:false}))
    if(password.length < 6)
        setError(s => ({...s,passwordError:true}))
    else 
        setError(s => ({...s,passwordError:false}))
   
    },[email,password,displayName,signup])
    const handleSignin = async () => {
        try{
            await googleSignin();
        }catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <div className="modal-content">
                    <div className="modal-body">
                        <button type="button" onClick={() => setShow(false)} className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="myform bg-dark">
                            <h1 className="text-center"><span>{signup ? 'Registration' : 'Login'}</span></h1>
                            <form>
                                {
                                    signup && <>
                                        <div className="mb-3">
                                            <label for="exampleInputPassword1" className="form-label">Name</label>
                                            <input value={displayName} 
                                            onChange={(e) => {
                                                setDisplayName(e.target.value)
                                            }} 
                                            type="text" className="form-control" id="exampleInputPassword1"></input>
                                            {error.nameError && <span className='error-span'>This field is required</span>}
                                        </div>
                                       
                                    </>
                                }
                                <div className="mb-3 mt-4">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    {error.emailError && <span className='error-span'>This field is required</span>}
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"></input>
                                    {error.passwordError && <span className='error-span'>password must be at least 6 characters</span>}
                                </div>

                                <button onClick={handleSubmit} type="button" className="btn btn-light mt-3">{signup ? 'RESISTER' : 'LOGIN'}</button>
                                <p>{signup ? 'Already a member ? ' : 'Not a member ? '}<button type='button' onClick={()=> SetSignup(s => !s)} style={{ color: 'white' }}>{signup ? 'Signin now' : 'signup now'}</button></p>
                            </form>
                            <div className="divider-con">
                                <span className='divider'>OR</span>
                            </div>
                            <div className="google-btn">
                                <GoogleButton
                                    onClick={handleSignin}
                                    style={{ width: '80%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default SignInSignUp;