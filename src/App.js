import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
