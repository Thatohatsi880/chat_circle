import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, CreatePosts, DisplayPosts, LandingPage, Login, SignUp } from './Pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CreatePosts" element={<CreatePosts />} />
        <Route path="/DisplayPosts" element={<DisplayPosts />} />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
