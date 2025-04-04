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
        <img className="gif" src="/piedra-papel-tijera.gif" alt="piedra-papel-tijera" />
          <h1>PIEDRA PAPEL TIJERA</h1>
          <img className="gif" src="/piedra-papel-tijera.gif" alt="piedra-papel-tijera" />
        </div>
        <App />
      </DataProvider>
    </BrowserRouter>
  </StrictMode>
);
