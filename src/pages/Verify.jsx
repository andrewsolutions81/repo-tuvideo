/* eslint-disable */
// import './styles.scss';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { verify } from '../services/auth.service';

const AccountVerfication = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect (() =>{
    const verifyAccount = async () => {
      const { token: jwtoken, profile } = await verify(token);
      console.log(jwtoken);
      if (jwtoken) {
        localStorage.setItem('token', jwtoken);
        localStorage.setItem('profile', JSON.stringify(profile));

        setTimeout(() => {
          navigate('/');
        }, 800);
      }
    };

    verifyAccount();
  }, [])

  return (
    <div>
      
        {
          token
            ? <h3>Your account is active!</h3>
            : <h3>Check your email!</h3>
        }
      </div>
  );
};

export default AccountVerfication;
