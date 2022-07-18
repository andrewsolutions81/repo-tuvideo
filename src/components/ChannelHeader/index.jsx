import "./styles.css"

function Channel_Header(props){

    return (
        <div className="container-header">
            <div className="logo">
                <img className="logo-img"src="https://media-exp2.licdn.com/dms/image/C4E0BAQGVo4pGdZLlgg/company-logo_200_200/0/1519881615474?e=2147483647&v=beta&t=mgHJFcs_qe_fEKG9M9A9ortCqz3HOcO-lB2pT1VB0pQ" alt=""/>
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
