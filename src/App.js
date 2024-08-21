import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopBar from "./pages/Components/TopBar";
import Navigationbar from "./pages/Components/Navigationbar";
import Home from "./pages/Home";
import Footer from "./pages/Components/Footer";
import About from "./pages/About";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Navigationbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
