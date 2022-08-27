import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Channel from './pages/Channel';
import SingleVideo from './pages/SingleVideo';
import MainHeader from './components/MainHeader';
import LoginRegister from './pages/LoginRegister';
import LoginSite from './pages/Login';
import RegisterSite from './pages/Register';
import UploadVideo from './components/UploadVideo';
import AddVideoToJson from './components/AddVideoToJson';
import ChannelVideos from './pages/ChannelVideos';
import ChannelPlayList from './pages/ChannelPlayList';
import ChannelSubChannels from './pages/ChannelSubChannels';
import ChannelMoreInfo from './pages/ChannelMoreInfo';
import ChannelHeader from './components/ChannelHeader';
import TabCarousel from './components/TabCarousel';
import { ChannelProvider } from './channelContext';
import { SearchProvider } from './searchContext/SearchContext';

function App() {
  return (
    <div className="App">
      <ChannelProvider>
        <BrowserRouter>
          <SearchProvider>
            <MainHeader />
          </SearchProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upload" element={<UploadVideo />} />
            <Route path="/:id" element={<SingleVideo />} />
            <Route path="/api/videos/:id" element={<SingleVideo />} />
            <Route path="/login-register" element={<LoginRegister />} />
            <Route path="/login" element={<LoginSite />} />
            <Route path="/register" element={<RegisterSite />} />
            <Route path="/add-video-to-json" element={<AddVideoToJson />} />
            <Route element={(
              <>
                <ChannelHeader />
                {' '}
                <TabCarousel />
                {/*   <Outlet /> */}
              </>
            )}
            >
              <Route path="/channel/:id/featured" element={<Channel />} />
              <Route path="/channel/:id/videos" element={<ChannelVideos />} />
              <Route path="/channel/:id/playlist" element={<ChannelPlayList />} />
              <Route path="/channel/:id/channels" element={<ChannelSubChannels />} />
              <Route path="/channel/:id/about" element={<ChannelMoreInfo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ChannelProvider>
    </div>
  );
}

export default App;
