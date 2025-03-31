import { Route, Routes } from "react-router-dom";
import Inicio from "./components/pantallaInicial/pantallaInicial";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Inicio/>}></Route>
      <Route path=""></Route>
    </Routes>
  )
}

export default App
