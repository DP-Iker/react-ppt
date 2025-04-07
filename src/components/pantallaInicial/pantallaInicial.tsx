import { FC, ReactElement, useState, useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
// import { handleImageChange } from "../../utils/handleImage";
import styles from "./PantallaInicial.module.css";
import Webcam from "react-webcam";

const Inicio: FC = (): ReactElement => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const dataContext = useContext(DataContext);
  const webcamRef = useRef<Webcam>(null);
  const [screenshot, setScreenshot] = useState<string | null>(null);


  // Hace una captua de la webcam y la guarda en el hook de state
  const capturePhoto = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    setScreenshot(imageSrc || null);
  };


  // Guarda los datos en el contexto y reenvia al juego
  const enviarDatos = () => {
    if (dataContext) {
      dataContext.setPlayerName(nombre);
      dataContext.setImage(screenshot);
      navigate("/juego");
    }
  };

  return (
    <div className={styles.divMain}>
    <h2 className={styles.divh1}>Escribe tu nombre</h2>
    
    <input
      type="text"
      placeholder="Tu nombre"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
    />
  
    <div className={styles.camContainer}>
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        width={300}
        height={220}
        className={styles.webcam}
      />
      {screenshot && (
        <div className={styles.preview}>
          <img src={screenshot} alt="Screenshot" />
        </div>
      )}
    </div>
  
    <button onClick={capturePhoto}>Tomar Foto</button>
    <button onClick={enviarDatos}>Botón</button>
  </div>
  );
};
export default Inicio;
