
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";

import {CreatePosts, DisplayPosts, HomePage, LandingPage, Login, SignUp } from "./Pages"


function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route>
          <Route path="/" index element={<CreatePosts/>} />
          <Route path="/" element={<DisplayPosts/>} />
        </Route>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App