import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreatePosts, DisplayPosts, HomePage, LandingPage, Login, SignUp } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Other Pages */}
        <Route path="/CreatePosts" element={<CreatePosts />} />
        <Route path="/DisplayPosts" element={<DisplayPosts />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
