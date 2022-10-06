import { BrowserRouter, Route, Routes } from "react-router-dom"
import Netflex from "./pages/Netflex";
import Login from "./pages/Login";
import Signup from "./pages/Signup";



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/' element={<Netflex />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
