import { ChangeEvent, FC, ReactElement, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";

const Inicio: FC = (): ReactElement => {
const navigate = useNavigate();
const dataContext = useContext(DataContext);


        const [foto, setFoto] = useState<string | null>(null);

        const escogerNombre = (e: ChangeEvent<HTMLInputElement>) => {
        dataContext?.setPlayerName(e.target.value);
        };

        const escogerFoto = (e: ChangeEvent<HTMLInputElement>) => {
            
            const archivo = e.target.files?.[0];
            if (archivo) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFoto(reader.result as string);
};

              reader.readAsDataURL(archivo); // Convierte a base64 para mostrar imagen
            }
            
};


	
return <div>
<h2>Escribe tu nombre</h2>
<input type="text" placeholder="Tu nombre"
value= {dataContext?.playerName}
onChange={escogerNombre}
/>



<h3>Sube tu foto:</h3>
<input type="file" accept="image/*" onChange={escogerFoto} /><br />

{foto && (
<div>
<p>¡Hola {dataContext?.playerName}!</p>
<img src={foto} alt="Foto de perfil" width={150} />
</div>
)}

<button onClick={() => navigate("/juego")}>Ir al juego</button>
</div>

    };

    
export default Inicio;