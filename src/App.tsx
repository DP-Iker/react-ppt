import { Route, Routes } from "react-router-dom";
import Inicio from "./components/pantallaInicial/pantallaInicial";
import Juego from "./components/botonesPPT/Botones";
import Aa from "./components/pantallaInicial/Aa";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Inicio/>}></Route>
      <Route path="/juego" element={<Juego/>}></Route>
      <Route path="/a" element={<Aa/>}></Route>
    </Routes>
  )
}

export default App
