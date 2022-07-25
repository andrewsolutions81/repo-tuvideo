import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Channel from './pages/Channel'
import SingleVideo from './pages/SingleVideo'
import Header from './components/Header'
<<<<<<< HEAD
<<<<<<< HEAD
import LoginRegister from './pages/LoginRegister'
=======
>>>>>>> b485bf8 (fix: add header globally from app, you no longer need to add Header component to each page, now it's global)
=======
import UploadVideo from './components/UploadVideo'
<<<<<<< HEAD
>>>>>>> d0effa2 (add upload route)

import UploadVideo from './components/UploadVideo'
=======
>>>>>>> 1669cab (feat: continue working on add to json file feature)
import AddVideoToJson from './components/AddVideoToJson'



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/upload' element={<UploadVideo />} />
          <Route path='/channel' element={<Channel />} />
          <Route path='/:id' element={<SingleVideo />} />
<<<<<<< HEAD
          <Route path='/login-register' element={<LoginRegister />} />
=======
>>>>>>> 1669cab (feat: continue working on add to json file feature)
          <Route path='/add-video-to-json' element={<AddVideoToJson />} />
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
