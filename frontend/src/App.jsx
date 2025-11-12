import { BrowserRouter, Routes, Route } from "react-router-dom";
import VisiteurHome from "./pages/home/visiteurHome";
import Layout from "./components/layout/layout";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<VisiteurHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          
        </Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
