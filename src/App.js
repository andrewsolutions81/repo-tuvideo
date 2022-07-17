import './App.css';
import SingleVideo from './pages/SingleVideo';
import HeaderBar from './pages/Header';
import Landing from './components/landing';

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Landing />
      <SingleVideo />
    </div>
  );
}

export default App;
