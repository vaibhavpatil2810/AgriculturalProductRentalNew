import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import login from './Image/login.jpg'; // gives image path
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate=useNavigate();
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const user={
            email:Email,
            password:Password
        }

        axios.post('http://localhost:8080/user/validate',user)
            .then(response => {
                console.log(response.data)
                if(response.data!=null){
                    if(response.data.role==="Admin")
                    {
                        navigate("/Dashboard");
                    }
                    if(response.data.role==="Owner")
                    {
                        navigate("/addequipment");
                    }
                    if(response.data.role==="Customer")
                    {
                        navigate("/productlist");
                    }
                }
            })
            .catch(error => {
                // Handle login error
            });
    }

    return (
        <div
            style={{
                backgroundImage: `url(${login})`,
                backgroundSize: 'cover',
                height: '92vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <table align='center'>
                <div className='login'>
                    <form className='needs-validation' onSubmit={handleSubmit}>
                        <h2 className='mb-3' align='center'>Login</h2>
                        <div className='form-group was-validated mb-2'>
                            <label htmlfor='email' className='form-label'>Email</label><br />
                            <input type='email' className='form-control' placeholder="Enter your email"
                                onChange={e => setEmail(e.target.value)} required />
                        </div>
                        <div className='form-group was-validated mb-2'>
                            <label htmlfor='password' className='form-label'>Password</label><br />
                            <input type='password' className='form-control' placeholder="Enter your password"
                                onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <div className='form-group form check mb-2'>
                            <input type='checkbox' className='form-check-input' />
                            <label htmlfor='check' className='form-check-label'>Remember me</label>
                        </div>
                        <button type='submit' className='btn btn-success w-100 mt-2'>Sign In</button><br /><br />
                        {/* <p className="forgot-password text-right">
                            <a className="small text-muted" href="/forgot">Forgot password?</a>
                        </p> */}

                        <p className="forgot-password text-right">
                            <a href="/signup">Create new account?</a>
                        </p>
                        {/* <div className='d-flex flex-row justify-content-start'>
                            <a href="#!" className="small text-muted me-1">Terms of use.</a><br/>
                            <a href="#!" className="small text-muted">Privacy policy</a>
                        </div> */}
                    </form>
                </div>
            </table>
        </div>
    );
}

export default Login;
