import { FC, ReactElement, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { handleImageChange } from "../../utils/handleImage"

const Inicio: FC = (): ReactElement => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const dataContext = useContext(DataContext);

  const handleClick = () => {
    if (dataContext) {
      dataContext.setPlayerName(nombre);
      navigate("/juego");
    }
  };

  return (
    <div className="inicio">
      <h2>Escribe tu nombre</h2>
      <input
        type="text"
        placeholder="Tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, dataContext!.setImage)} />
      <button onClick={handleClick}>Botón</button>
    </div>
  );
};

export default Inicio;
