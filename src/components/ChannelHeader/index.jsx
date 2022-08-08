import { useState } from 'react';
import './styles.scss';

function ChannelHeader(props) {
  const { channel } = props;
  const [modEdit, setModEdit] = useState(false);
  const [style, setStyle] = useState({});
  const handleEditChannel = () => {
    const banner = document.querySelector('.banner-visible-area');
    const styleString = 'border: 3px solid #14ad73';

    setModEdit((prevModEdit) => !prevModEdit);
    setModEdit((prevModEdit) => {
      if (prevModEdit) {
        setStyle({ border: '3px solid #14ad73' });
        banner.style.cssText += styleString;
      } else {
        setStyle({});
        banner.style.cssText = banner.style.cssText.replace('border: 3px solid rgb(20, 173, 115);', '');
      }
      return prevModEdit;
    });
  };
  return (
    <div id="container" className="container-header">
      <div className="logo">
        <img className="logo-img" src={channel.snippet.logo} alt="" style={style} />
      </div>
      <div className="details">
        <div className="details-container">
          <div className="channel-description">
            <div className="channel-title">
              {
                modEdit ? <input className="input-edit" type="text" placeholder={channel.snippet.title} /> : channel.snippet.title
              }
            </div>
            <div className="channel-stadistics">
              {`${channel.statistics.subscriberCount} suscriptores`}
            </div>
          </div>
          <div className="channel-buttons">
            {
              modEdit ? (
                <div className="buttons-edit">
                  <button className="button-green" type="button" onClick={handleEditChannel}>GUARDAR CAMBIOS</button>
                  <button className="button-red" type="button" onClick={handleEditChannel}>CANCELAR CAMBIOS</button>
                </div>

              )
                : (
                  <button className="button-blue" type="button" onClick={handleEditChannel}>PERSONALIZAR CANAL</button>
                )
            }
          </div>
          {
            modEdit ? <div /> : <button className="button-blue" type="button">ADMINISTRAR VIDEOS</button>
          }
        </div>
      </div>
    </div>
  );
}

export default ChannelHeader;
