import "./styles.css"

function Channel_Header(){
    return (
        <div className="container">
            <div className="channelDescription__perfil">
                <div className="perfil__logo">
                    <img src="media/images/ch-avatar.jpeg" alt=""/>
                </div>
                <div className="perfil__datos">
                    <p className="perfil__nombre">
                        Make It Real
                    </p>
                    <p className="perfil__totalSubs">
                        13.1 K suscriptores
                    </p>
                </div>
            </div>
            <div className="opciones">
                <button className="opciones__button">PERSONALIZAR CANAL</button>
                <button className="opciones__button">ADMINISTRAR VIDEOS</button>
            </div>
        </div>
    )
}
export default Channel_Header;