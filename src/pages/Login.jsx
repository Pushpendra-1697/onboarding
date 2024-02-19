import React, { useState } from 'react'
import Button from '../components/Button';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login'>
            <h1>Signin to your RIT account</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' placeholder='Enter email address' value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Enter password' value={password} name='password' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button label={'Login'} bgColor={(email && password) ? '#6C25FF' : '#CBCBCB'} color={'#ECECEC'} isDisabled={(email && password) ? false : true} redirectPath='/profile' email={email} />
            </div>
        </div>
    );
}

export default Login;