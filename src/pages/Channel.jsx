import Channel_Header from '../components/Channel-Header'
import TabCarousel from '../components/Tab-Carousel'
import VideoIntroduccion from '../components/VideoIntroduccion'
import ListVideo from '../components/List-Video'

function Channel (){
    return(
        <div>
            <Channel_Header/>
            <TabCarousel/>
            <VideoIntroduccion/>
            <ListVideo/>
        </div>
    )
}

export default Channel;