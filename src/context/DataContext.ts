import { createContext } from "react";

// Definir el tipo de datos del contexto
interface DataContext {
  playerName: string;
  setPlayerName: (name: string) => void;
  image: string | null;
  setImage: (img: string | null) => void;
}

// Crear el contexto con valores iniciales
export const DataContext = createContext<DataContext | undefined>(undefined);