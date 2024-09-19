import React from "react";
//import Home from "./components/home/Home.jsx";
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import RegisterPage from "./pages/registerPage/RegisterPage.jsx";
import HomePage from './pages/homePage/HomePage.jsx'


function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/register" element={<RegisterPage />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
