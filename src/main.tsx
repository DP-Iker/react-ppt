import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import DataProvider from "./context/DataProvider.tsx";
import logo from "./assets/logo.webp";
import "./index.css";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DataProvider>
        <div className="cosas">
        <img className="piedra-papel-tijera.gif" src={logo} alt="piedra-papel-tijera.gif" />
          <h1>PIEDRA PAPEL TIJERA</h1>
          <img className="piedra-papel-tijera.gif" src={logo} alt="piedra-papel-tijera.gif" />
        </div>
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
