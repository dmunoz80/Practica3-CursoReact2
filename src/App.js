import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import PokeSelector from "./views/PokeSelector"
import PokeCard from "./views/PokeCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/pokemones" element={<PokeSelector />}/>
          <Route path="/pokemones/:select" element={<PokeCard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
