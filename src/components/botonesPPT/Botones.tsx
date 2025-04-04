import { FC, ReactElement, useContext } from "react";
import "./botonesPPT.css";
import { DataContext } from "../../context/DataContext";

const Opciones = ["💎", "🧻", "✂"] as const;
type Opcion = (typeof Opciones)[number];

const Juego: FC = (): ReactElement => {
    const dataContext = useContext(DataContext);
    const nombreJugador = dataContext?.playerName;

    const randomOpcionesMaquina = (): Opcion =>
        Opciones[Math.floor(Math.random() * Opciones.length)];

    const compararOpciones = (eleccionJugador: Opcion, eleccionMaquina: Opcion): string => {
        if (eleccionJugador === eleccionMaquina) return "Es un Empate";

        const ganaJugador =
            (eleccionJugador === "💎" && eleccionMaquina === "✂") ||
            (eleccionJugador === "🧻" && eleccionMaquina === "💎") ||
            (eleccionJugador === "✂" && eleccionMaquina === "🧻");

        return ganaJugador ? `¡${nombreJugador} Gana!` : "¡Máquina Gana!";
    };

    const manejarJugador = (eleccionJugador: Opcion) => {
        const eleccionMaquina = randomOpcionesMaquina();
        const resultado = compararOpciones(eleccionJugador, eleccionMaquina);
        console.log(`${nombreJugador}: ${eleccionJugador} - Máquina: ${eleccionMaquina} → ${resultado}`);
    };

    return (
        <div className="Juego">
                {dataContext?.image && <img src={dataContext.image} alt="Foto" />}
            <h2>{nombreJugador} vs Máquina</h2>
            <button onClick={() => manejarJugador("💎")}>Piedra</button>
            <button onClick={() => manejarJugador("🧻")}>Papel</button>
            <button onClick={() => manejarJugador("✂")}>Tijeras</button>
        </div>
    );
};

export default Juego;
