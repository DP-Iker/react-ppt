import { Route, Routes } from "react-router-dom";
import Inicio from "./components/pantallaInicial/pantallaInicial";
import Juego from "./components/botonesPPT/Botones";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Inicio/>}></Route>
      <Route path="/juego" element={<Juego/>}></Route>
    </Routes>
  )
}

export default App
