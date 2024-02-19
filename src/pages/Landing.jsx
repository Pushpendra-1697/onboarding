import React from 'react'
import Button from '../components/Button';

const Landing = () => {
  return (
    <div className='landing'>
      <h1 className='landing-title'>Welcome to Excent RIT</h1>
      <p className='landing-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div>
        <Button label="Create Account" bgColor='#6C25FF' color='#D2BBFF' redirectPath='/signup' />
        <Button label="Already Registered? Login" bgColor='#CEBAFB' redirectPath='/login' />
      </div>
    </div>
  );
}

export default Landing;