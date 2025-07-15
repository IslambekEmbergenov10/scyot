import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Stations from './features/station/Stations';
import Journals from './features/journal/Journals';
import About from './pages/About';
import Profile from './features/auth/Profile';
import Adminom from './features/admin/Adminom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import ForgotPassword from './features/auth/ForgotPassword';
import Contact from './components/Contacts';

// PrivateRoute komponenti
function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Private routes */}
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/stations" element={<PrivateRoute><Stations /></PrivateRoute>} />
        <Route path="/journals" element={<PrivateRoute><Journals /></PrivateRoute>} />
        <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
        <Route path="/adminom" element={<PrivateRoute><Adminom /></PrivateRoute>} />
        <Route path="/contacts" element={<PrivateRoute><Contact /></PrivateRoute>} />
        {/* Default: agar route topilmasa, login page */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
