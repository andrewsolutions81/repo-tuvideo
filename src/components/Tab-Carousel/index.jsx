import "./styles.css"

function TabCarousel(){
    return(
        <div className="carousel">
            <div className="arrow-left"></div>
            <div className="arrow-rigth"></div>

            <div className="tabsContainer">
                <div className="tab-selected">
                    PÁGINA PRINCIPAL
                </div>
                <div className="tab-unselected">
                    VIDEOS
                </div>
                <div className="tab-unselected">
                    LISTAS DE REPRODUCCIÓN
                </div>
                <div className="tab-unselected">
                    CANALES
                </div>
                <div className="tab-unselected">
                    MÁS INFORMACIÓN
                </div>
            </div>
        </div>
    )
}
export default TabCarousel;