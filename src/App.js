import './App.css';
import SingleVideo from './pages/SingleVideo';
import HeaderBar from './pages/Header';
import Landing from './components/landing';
import Channel from "./pages/Channel"

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Landing />
      <SingleVideo />
      <Channel/>
    </div>
  );
}

export default App;
