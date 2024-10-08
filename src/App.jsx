
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/blog/Home"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import AddBlog from "./pages/blog/AddBlog"
import EditBlog from "./pages/blog/components/EditBlog"
import SinglePage from "./pages/blog/SinglePage"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/addBlog" element={<AddBlog />}/>
      <Route path="/blog/edit" element={<EditBlog />}/>
      <Route path="/blog/id" element={<SinglePage/>}/>

    </Routes>
    </BrowserRouter> 
  )
}

export default App
