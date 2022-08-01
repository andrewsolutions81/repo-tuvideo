import './styles.scss';

function ChannelHeader(props) {
  const { channel } = props;

  return (
    <div id="container" className="container-header">
      <div className="logo">
        <img className="logo-img" src={channel.snippet.logo} alt="" />
      </div>
      <div className="details">
        <div className="details-container">
          <div className="channel-description">
            <div className="channel-name">
              {channel.snippet.title}
            </div>
            <div className="channel-stadistics">
              {`${channel.statistics.subscriberCount} suscriptores`}
            </div>
          </div>
          <div className="channel-buttons">
            <button type="button">PERSONALIZAR CANAL</button>
            <button type="button">ADMINISTRAR VIDEOS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChannelHeader;
