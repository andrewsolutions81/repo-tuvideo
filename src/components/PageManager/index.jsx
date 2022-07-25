import './styles.scss'
import Channel_Header from '../ChannelHeader'
import TabCarousel from '../TabCarousel'
import VideoIntroduccion from '../VideoIntroduccion'
import ListVideo from '../ListVideo'
import Header from '../header/index'
import Banner from '../Banner'

function PageManager(){
    return(
        <div className="manager">
                <Banner/>
                <Channel_Header/>
                <TabCarousel/>
                <VideoIntroduccion/>
                <ListVideo/>
                <ListVideo/>
                <ListVideo/>
                <ListVideo/>
        </div>
    )
}
export default PageManager;
