import './App.css';
import {
  BrowserRouter, Routes, Route, Outlet,
} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Channel from './pages/Channel';
import SingleVideo from './pages/SingleVideo';
import MainHeader from './components/MainHeader';
import LoginRegister from './pages/LoginRegister';
import LoginSite from './pages/Login';
import RegisterSite from './pages/Register';
import AddVideoToJson from './components/AddVideoToJson';
import ChannelVideos from './pages/ChannelVideos';
import ChannelPlayList from './pages/ChannelPlayList';
import ChannelSubChannels from './pages/ChannelSubChannels';
import ChannelMoreInfo from './pages/ChannelMoreInfo';
import Checkout from './pages/Checkout';
import ChannelSubscribed from './pages/ChannelsSubscribed';
import ChannelHeader from './components/ChannelHeader';
import TabCarousel from './components/TabCarousel';
import { SearchProvider } from './searchContext/SearchContext';
import Verify from './pages/Verify';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchProvider>
          <MainHeader />
        </SearchProvider>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/api/videos/:id" element={<SingleVideo />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="/login" element={<LoginSite />} />
          <Route path="/register" element={<RegisterSite />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/verify/:token" element={<Verify />} />
          <Route path="/add-video-to-json" element={<AddVideoToJson />} />
          <Route path="/subscribes" element={<ChannelSubscribed />} />
          <Route element={(
            <>
              <ChannelHeader />
              <TabCarousel />
              <Outlet />
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
    </div>
  );
}

export default App;
