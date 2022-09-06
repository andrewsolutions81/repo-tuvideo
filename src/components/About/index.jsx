/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.scss';
import { useChannel } from '../../channelContext';

function About() {
  const { user } = useChannel();
  const date = new Date(user?.createdAt);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return (
    <div className="about-container">
      <div>
        <div>
          <p className="about-subtitle">Description</p>
          <p className="about-description">{user?.description}</p>
        </div>
        <div className="about-links">
          <p>Links</p>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitch</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="about-statistics">
        <p className="about-subtitle">Stats</p>
        <p>{`Joined on ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}</p>
      </div>
    </div>
  );
}

export default About;
