import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SetLoginPage from './pages/SetLoginPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen flex items-center justify-center bg-gray-100">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/set-login" element={<SetLoginPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
