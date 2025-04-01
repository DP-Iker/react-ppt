import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Aa = () => {
  const dataContext = useContext(DataContext);

  return (
    <>
      <p>{dataContext?.playerName || "No se ha guardado"}</p>
      {dataContext?.image && <img src={dataContext.image} alt="Foto" />}
    </>
  );
};

export default Aa;
