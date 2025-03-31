import { ChangeEvent, FC, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";

const Inicio: FC = (): ReactElement => {
const navigate = useNavigate();

        const [nombre, setNombre] = useState("");
        const [foto, setFoto] = useState<string | null>(null);

        const escogerNombre = (e: ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value);
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
value= {nombre}
onChange={escogerNombre}
/>



<h3>Sube tu foto:</h3>
<input type="file" accept="image/*" onChange={escogerFoto} /><br />

{foto && (
<div>
<p>¡Hola {nombre}!</p>
<img src={foto} alt="Foto de perfil" width={150} />
</div>
)}

<button onClick={() => navigate("/juego")}>Ir al juego</button>
</div>

    };

    
export default Inicio;