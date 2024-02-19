import React from 'react';

const userDetails = JSON.parse(localStorage.getItem('userDetails')) ?? { name: 'Marry Doe', email: 'Marry@Gmail.Com' }; // default value
const Profile = () => {

  return (
    <div className='profile'>
      <h1>Account Settings</h1>
      <div>
        <div>
          <div>
            <img src={'./profile.png'} alt='Profile' />
            <img id='camara' src='./camara.svg' alt='camara' />
          </div>
          <div>
            <h4>{userDetails.name}</h4>
            <p>{userDetails.email}</p>
          </div>
        </div>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore nam in perspiciatis reprehenderit quam impedit labore
        </div>
      </div>
    </div>
  );
}

export default Profile;