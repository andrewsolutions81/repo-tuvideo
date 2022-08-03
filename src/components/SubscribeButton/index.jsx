import React from 'react';
import './styles.css';

function SubscribeButton() {
  return (
    <div className="subscribe-buttons">
      <button type="button" className="subscribe-buttons__join-button">JOIN</button>
      <button type="button" className="subscribe-buttons__subscribe-button">SUBSCRIBE</button>
      <button type="button" className="subscribe-buttons__subscribed-button">SUBSCRIBED</button>
    </div>
  );
}

export default SubscribeButton;
