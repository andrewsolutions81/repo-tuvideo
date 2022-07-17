import './styles.scss'
import Channel_Header from '../Channel-Header'
import TabCarousel from '../Tab-Carousel'
import VideoIntroduccion from '../VideoIntroduccion'
import ListVideo from '../List-Video'

function PageManager(){
    return(
        <div className="manager">
                <Channel_Header/>
                <TabCarousel/>
                <VideoIntroduccion/>
                <ListVideo/>
        </div>
    )
}
export default PageManager;
