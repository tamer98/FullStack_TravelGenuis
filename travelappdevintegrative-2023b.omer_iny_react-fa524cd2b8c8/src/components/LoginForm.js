import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import airplane from '../images/airplane.png';
import { loginUser } from '../api/axiosConfig';
import Cookies from 'js-cookie';

const LoginForm = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser('2023b.TravelGenuis', email); 
      console.log('User logged in:', response);
      Cookies.remove('username');
      Cookies.remove('email');
      Cookies.remove('avatar')

      setUsername('');
      setemail('');
      console.log('Response data:', response);
      console.log('Username:', response.username);


      Cookies.set('username', response.username);
      Cookies.set('email',response.userId.email);
      Cookies.set('avatar',response.avatar);

      

      history.push('/search');
    } catch (error) {
      console.error('Error logging in user:', error);
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
            <h3 style={{ color:'var(--clr-grey-5)', marginRight: '10px' }}>
              TravelGenius
            </h3>
            <img src={airplane} height={20} width={20} alt="Example" />
          </div>

          <label htmlFor="email" style={{paddingRight:'5px',fontWeight:'bold'}}>Email address:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="username" style={{paddingRight:'29px', fontWeight:'bold'}} >User name:</label>
          <input 
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop:'10px'}}>
        <button type="submit" style={{ backgroundColor: 'blue', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}>
          Log In
        </button>

        </div>
      </form>
    </div>
  );
};

export default LoginForm;

