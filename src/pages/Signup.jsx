import React, { useState } from 'react'
import Button from '../components/Button';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [agency, setAgency] = useState('');


    return (
        <div className='signup'>
            <h1 style={{ marginBottom: '10px' }}>Create your RIT account</h1>
            <div>
                <div className='form-group'>
                    <label htmlFor='full_name'>Full Name<span>*</span></label>
                    <input required type='text' placeholder='Enter name' value={name} name='name' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='phone_number'>Phone number<span>*</span></label>
                    <input required type='tel' placeholder='Enter Phone number' value={phone} name='phone' onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address<span>*</span></label>
                    <input required type='email' placeholder='Enter email address' value={email} name='email' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password<span>*</span></label>
                    <input required type='password' placeholder='Enter password' value={password} name='password' onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className='form-group'>
                    <label htmlFor='company_name'>Company name</label>
                    <input type='text' placeholder='Enter company name' value={companyName} name='company name' onChange={(e) => setCompanyName(e.target.value)} />
                </div>
                <div className='agency'>
                    <label htmlFor='agency'>Are you an Agency?<span>*</span></label>
                    <div>
                        <div>
                            <input required type='radio' value={'agency'} name='agency' onChange={(e) => setAgency(e.target.value)} />
                            <label htmlFor='yes'>Yes</label>
                        </div>
                        <div>
                            <input required type='radio' value={'agency'} name='agency' onChange={(e) => setAgency(e.target.value)} />
                            <label htmlFor='no'>No</label>
                        </div>
                    </div>
                </div>
                <Button name={name} email={email} label={'Create Account'} bgColor={(email && password && name && phone && agency) ? '#6C25FF' : '#CBCBCB'} color={'#ECECEC'} isDisabled={(email && password && name && phone && agency) ? false : true} redirectPath='/profile' />
            </div>
        </div>
    );
}

export default Signup;