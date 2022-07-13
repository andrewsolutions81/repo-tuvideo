import React from 'react'

class SubscribeButton extends React.Component {
  render(){
    return (
      <div className="subscribe-button">
        <button className="subscribe-button___join-button">JOIN</button>
        <button className="subscribe-button___subscribe-button">SUBSCRIBE</button>
      </div>
    )
  }
}

export default SubscribeButton
