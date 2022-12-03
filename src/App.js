import './App.css';
import Navbar from './Navbar'
import Allcards from './components/Allcards';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Features from './pages/Features'
import Pricing from './pages/Pricing'


function App() {
  return (
    <div className="App">
      <Navbar/>
        <div>
          <Routes>
            <Route path="/fri-app/" element={<Home/>} />
            <Route path="/features" element={<Features/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
          </Routes>
        </div>
    </div>
  );
}

export default App;
