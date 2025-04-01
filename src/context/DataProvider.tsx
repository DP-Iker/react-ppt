import { useState } from "react";
import { DataContext } from "./DataContext";

const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [playerName, setPlayerName] = useState("Player");
  const [image, setImage] = useState<string | null>(null);

  return (
    <DataContext.Provider value={{ playerName, setPlayerName, image, setImage }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;