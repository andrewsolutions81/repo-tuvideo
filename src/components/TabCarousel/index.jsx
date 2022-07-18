import "./styles.css"

function TabCarousel(){
    return(
        <div className="carousel">
            <div className="arrow-left"></div>
                <div className="tabsContainer">
                    <a className="tab-selected">
                        PÁGINA PRINCIPAL
                    </a>
                    <a className="tab-unselected">
                        VIDEOS
                    </a>
                    <a className="tab-unselected">
                        LISTAS DE REPRODUCCIÓN
                    </a>
                    <a className="tab-unselected">
                        CANALES
                    </a>
                    <a className="tab-unselected">
                        MÁS INFORMACIÓN
                    </a>
            </div>
            <div className="arrow-rigth"></div>
        </div>
    )
}
export default TabCarousel;