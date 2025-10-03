import { BrowserRouter, Routes, Route} from "react-router-dom";
import { RUTAS } from "./routes.js";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import User from "./pages/User.jsx";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path={RUTAS.INICIO} element={<Home />} />
        <Route path={RUTAS.ABOUT} element={<About />} />
        <Route path={RUTAS.CONTACTO} element={<Contact />} />
        <Route path={RUTAS.USUARIO} element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App