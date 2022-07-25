import './styles.scss'
import ChannelHeader from '../ChannelHeader'
import TabCarousel from '../TabCarousel'
import VideoIntroduccion from '../VideoIntroduccion'
import ListVideo from '../ListVideo'
import Banner from '../Banner'
import { useEffect, useState } from 'react'
import { getChannel } from '../../services/channels'

const PageManager = () => {
    const [channel,setChannel] = useState(null);
    useEffect(()=>{
        const result = getChannel(1);
        setChannel(result);
        console.log(channel)
    },[])
    
    return(
        <div className="manager">
                {
                    channel? <Banner channel={channel}/> : <p>Error</p>
                }  
                {
                    channel? <ChannelHeader channel={channel}/> : <p>Error</p>
                }                
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
