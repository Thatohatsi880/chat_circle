import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePosts, DisplayPosts, HomePage, LandingPage, Login, SignUp } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Other Pages */}
        <Route path="/create-posts" element={<CreatePosts />} />
        <Route path="/display-posts" element={<DisplayPosts />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
