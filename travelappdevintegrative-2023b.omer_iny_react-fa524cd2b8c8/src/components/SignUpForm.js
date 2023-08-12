import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import airplane from '../images/airplane.png';
import { createUser } from '../api/axiosConfig';
import Cookies from 'js-cookie';

const SignUpForm = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const role = 'SUPERAPP_USER';

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form');
    try {
      const userData = {
        email: email,
        role: role,
        username: username,
        avatar: avatar
      };
      Cookies.remove('username');
      Cookies.remove(email);
      console.log(userData);
      const response = await createUser(userData);
      console.log('User created:', response.data);

      setUsername('');
      setEmail('');
      setAvatar('');

      // Redirect to the search component
      history.push('/search');
    } catch (error) {
      console.error('Error creating user:', error.response);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'whitesmoke'
      }}
    >
      <form onSubmit={handleSubmit}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ color: 'var(--clr-grey-5)', marginRight: '10px' }}>TravelGenius</h3>
            <img src={airplane} height={20} width={20} alt="Example" />
          </div>

          <label htmlFor="email" style={{ paddingRight: '5px', fontWeight: 'bold' }}>
            Email address:
          </label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="username" style={{ paddingRight: '29px', fontWeight: 'bold' }}>
            User name:
          </label>
          <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label htmlFor="avatar" style={{ paddingRight: '58px', fontWeight: 'bold' }}>
            Avatar:
          </label>
          <input type="text" id="avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px' }}>
          <button
            type="submit"
            style={{
              backgroundColor: 'blue',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px'
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
