import React from 'react'
import  "../SubscribeButton/styles.css"

function SubscribeButton () {
  return (
    <div className="subscribe-buttons">
      <button className="subscribe-buttons__join-button">JOIN</button>
      <button className="subscribe-buttons__subscribe-button">SUBSCRIBE</button>
      <button className="subscribe-buttons__subscribed-button">SUBSCRIBED</button>
    </div>
  )
}


export default SubscribeButton
