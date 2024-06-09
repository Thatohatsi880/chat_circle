
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";

import { createPosts, displayPosts, homePage, landingPage, Login, signUp } from "./Pages"


function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<homePage/>} />
        <Route>
          <Route path="/" index element={<createPosts/>} />
          <Route path="/" element={<displayPosts/>} />
        </Route>
        <Route path="/" element={<landingPage/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/" element={<signUp/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App