import { BrowserRouter ,Route ,Routes } from "react-router-dom"
import Signin from "./pages/Signin"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Signup from "./pages/Signup"
import Contact from "./pages/Contact"
export default function App() {
  return (
   <BrowserRouter>
     
     <Routes>
      <Route path="/" element = {<Home/>} />
      <Route path="/about" element = {<About/>} />
      <Route path="/contact" element = {<Contact/>} />
      <Route path="/signin" element = {<Signin/>} />
      <Route path="/signup" element = {<Signup/>} />
      <Route path="/profile" element = {<Profile/>} />





     </Routes>

   </BrowserRouter>
  )
}