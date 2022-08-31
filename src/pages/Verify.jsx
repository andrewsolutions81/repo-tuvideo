import { useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import './verify.scss';
import { verify } from '../services/auth.service';

function AccountVerfication() {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAccount = async () => {
      const { token: jwtoken, profile } = await verify(token);
      if (jwtoken) {
        localStorage.setItem('token', jwtoken);
        localStorage.setItem('profile', JSON.stringify(profile));

        setTimeout(() => {
          navigate('/');
        }, 800);
      }
    };

    verifyAccount();
  }, []);

  return (
    <div>

      { token
        ? (
          <div className="account-active">
            <h2>Your account is active!</h2>
            <div className="back-to-home-btn">
              <Link to="/login">Please Sign In</Link>
            </div>
          </div>
        )
        : (
          <div className="account-active">
            <h3>Check your email!</h3>
          </div>
        )}
    </div>
  );
}

export default AccountVerfication;
