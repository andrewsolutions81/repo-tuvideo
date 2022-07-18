import './styles.scss'
import Channel_Header from '../ChannelHeader'
import TabCarousel from '../TabCarousel'
import VideoIntroduccion from '../VideoIntroduccion'
import ListVideo from '../ListVideo'
import Header from '../Header'

function PageManager(){
    return(
        <div className="manager">
                <Header/>
                <Channel_Header/>
                <TabCarousel/>
                <VideoIntroduccion/>
                <ListVideo/>
        </div>
    )
}
export default PageManager;
