import './styles.scss';

function VideoItem(){
    return(
        <div>
            <div className="items-container">
                <div className="video-thumbnail">
                </div>
                <div className="info-container">
                    <div className="details">
                        <div className="title">
                            Solucionando ejercicios de Algoritmia #88
                        </div>
                        <div className="statistics">
                            15 K vistas - hace 18 horas
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default VideoItem;
