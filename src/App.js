import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Channel from './pages/Channel'
import SingleVideo from './pages/SingleVideo'
import LoginRegister from './pages/LoginRegister'



function App() {
  return (
    <div className="App">
      <LoginRegister/>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/channel' element={<Channel />} />
          <Route path='/:id' element={<SingleVideo />} />
        </Routes>
  </BrowserRouter> */}
    </div>
  );
}

export default App;
