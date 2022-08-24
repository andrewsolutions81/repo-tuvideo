/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.scss';
import { useChannel } from '../../channelContext';

function About() {
  const { channel } = useChannel();
  const date = new Date(channel?.createdAt);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return (
    <div className="about-container">
      <div>
        <div>
          <p className="about-subtitle">Descripción</p>
          <p className="about-description">{channel?.description}</p>
        </div>
        <div className="about-links">
          <p>Vínculos</p>
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
        <p className="about-subtitle">Estadisticas</p>
        <p>{`Se unió el ${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}</p>
      </div>
    </div>
  );
}

export default About;
