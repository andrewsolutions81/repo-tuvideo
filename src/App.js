import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Channel from './pages/Channel'
import SingleVideo from './pages/SingleVideo'
import Header from './components/Header'
import LoginRegister from './pages/LoginRegister'




function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/channel' element={<Channel />} />
          <Route path='/:id' element={<SingleVideo />} />
          <Route path='/login-register' element={<LoginRegister />} />
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
