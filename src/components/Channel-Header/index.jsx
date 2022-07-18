import "./styles.css"
import React,{useRef} from "react";

function Channel_Header(props){

    return (
        <div className="container-header">
            <div className="logo">
                <div className="logo-img">

                </div>
            </div>
            <div className="details">
                <div className="details-container">
                    <div className="channel-description">
                        <div className="channel-name">
                            Make it Real
                        </div>
                        <div className="channel-stadistics">
                            102 K suscriptores
                        </div>
                    </div>
                    <div className="channel-buttons">
                        <button>PERSONALIZAR CANAL</button>
                        <button>ADMINISTRAR VIDEOS</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Channel_Header;
