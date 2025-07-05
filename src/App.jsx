import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stations from './components/Stations';
import Journals from './components/Journals';
import About from './components/About';
import Profile from './components/Profile';
import Adminom from './components/Adminom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="/journals" element={<Journals />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/adminom" element={<Adminom />} /> 
      </Routes>
    </Router>
  );
}

export default App;
