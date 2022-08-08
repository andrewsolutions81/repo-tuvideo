import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Channel from './pages/Channel';
import SingleVideo from './pages/SingleVideo';
import Header from './components/Header';
import LoginRegister from './pages/LoginRegister';
import UploadVideo from './components/UploadVideo';
import AddVideoToJson from './components/AddVideoToJson';
import ChannelVideos from './pages/ChannelVideos';
import ChannelPlayList from './pages/ChannelPlayList';
import ChannelSubChannels from './pages/ChannelSubChannels';
import ChannelMoreInfo from './pages/ChannelMoreInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/channel/videos" element={<ChannelVideos />} />
          <Route path="/channel/playlist" element={<ChannelPlayList />} />
          <Route path="/channel/channels" element={<ChannelSubChannels />} />
          <Route path="/channel/about" element={<ChannelMoreInfo />} />
          <Route path="/:id" element={<SingleVideo />} />
          <Route path="/api/videos/:id" element={<SingleVideo />} />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="/add-video-to-json" element={<AddVideoToJson />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
