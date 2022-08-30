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
import CreditCard from './pages/CreditCard';
import ChannelHeader from './components/ChannelHeader';
import TabCarousel from './components/TabCarousel';
import Banner from './components/Banner';
import { SearchProvider } from './searchContext/SearchContext';
import Verify from './pages/Verify';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchProvider>
          <MainHeader />
        </SearchProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SingleVideo />} />
          <Route path="/api/videos/:id" element={<SingleVideo />} />
          <Route path="/creditcard" element={<CreditCard />} />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="/login" element={<LoginSite />} />
          <Route path="/register" element={<RegisterSite />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/verify/:token" element={<Verify />} />
          <Route path="/add-video-to-json" element={<AddVideoToJson />} />
          <Route element={(
            <>
              <Banner />
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
