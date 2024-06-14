import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, CreatePosts, Drafts, LandingPage, Login, SignUp, Bookmarks } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/CreatePosts" element={<CreatePosts />} />
        <Route path="/Drafts" element={<Drafts />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Bookmarks" element={<Bookmarks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
