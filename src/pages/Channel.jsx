import Channel_Header from '../components/Channel-Header'
import TabCarousel from '../components/Tab-Carousel'
import VideoIntroduccion from '../components/VideoIntroduccion'
function Channel (){
    return(
        <div>
            <Channel_Header/>
            <TabCarousel/>
            <VideoIntroduccion/>
        </div>
    )
}

export default Channel;