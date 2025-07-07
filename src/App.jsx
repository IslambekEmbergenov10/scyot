import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stations from './features/station/Stations';
import Journals from './features/journal/Journals';
import About from './pages/About';
import Profile from './features/auth/Profile';
import Adminom from './features/admin/Adminom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';

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
