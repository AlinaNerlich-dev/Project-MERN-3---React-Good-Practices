import { Outlet } from "react-router-dom";
import Navbar from "./components/Universal/Navbar";
import Footer from "./components/Universal/Footer";
import './index.css'

function App() {


  return (
    <>
    <Navbar />
    <main>
        <Outlet />
    </main>
    <Footer />
    
    </>
  )
}

export default App
