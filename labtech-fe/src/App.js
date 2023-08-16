import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import WelcomePage from './components/WelcomePage';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="/welcome" element={<ProtectedRoute component={WelcomePage} />} /> */}
            <Route path="/welcome" element={<WelcomePage />} />

          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
