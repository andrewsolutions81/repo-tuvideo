import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Channel from './pages/Channel';
import SingleVideo from './pages/SingleVideo';
import Header from './components/Header';
import LoginRegister from './pages/LoginRegister';
import UploadVideo from './components/UploadVideo';
import AddVideoToJson from './components/AddVideoToJson';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadVideo />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/:id" element={<SingleVideo />} />
          <Route path="/login-register" element={<LoginRegister />} />
          <Route path="/add-video-to-json" element={<AddVideoToJson />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
