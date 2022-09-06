import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

function NotFound() {
  return (
    <div className="not-found__container">
      <h1>Error 404 - Page Not Found</h1>
      <p>We are sorry. The page you are requested cannot be found.</p>
      <img src="media/icons/youtube-down.png" alt="youtube-down" />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotFound;
