import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, CreatePosts, Drafts, LandingPage, Login, SignUp, Bookmarks, Groups, CreateGroup, ComingSoon, ForgotPassword, NewPassword, PostDetails, Profile } from './pages';

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
        <Route path="/Groups" element={<Groups />} />
        <Route path="/CreateGroup" element={<CreateGroup/>} />
        <Route path="/ComingSoon" element={<ComingSoon/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="NewPassword" element={<NewPassword/>} />
        <Route path="PostDetails" element={<PostDetails/>} />
        <Route path="Profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
