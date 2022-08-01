import './styles.scss'
import ChannelHeader from '../ChannelHeader'
import TabCarousel from '../TabCarousel'
import VideoIntroduccion from '../VideoIntroduccion'
import ListVideo from '../ListVideo'
import Banner from '../Banner'
import { useEffect, useState } from 'react'
import { getChannel } from '../../services/channels'
import { getVideo } from '../../services/videos'

const PageManager = () => {
    const [channel,setChannel] = useState(null);
    const [video,setVideo] = useState(null);

    useEffect(()=>{
        const result = getChannel(1);
        setChannel(result);
    },[])
    useEffect(() =>{
        const result = getVideo(1);
        setVideo(result);
    })
    
    return(
        <div className="manager">
                {
                    channel? <Banner channel={channel}/> : <p>Error</p>
                }  
                {
                    channel? <ChannelHeader channel={channel}/> : <p>Error</p>
                }
                <TabCarousel/>
                {
                    video? <VideoIntroduccion video = {video}/>: <p>Error</p>
                }
                <ListVideo/>
                <ListVideo/>
                <ListVideo/>
                <ListVideo/>
        </div>
    )
}
export default PageManager;
