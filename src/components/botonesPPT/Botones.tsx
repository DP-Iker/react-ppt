import { FC, ReactElement } from "react";
import "./botonesPPT.css";

const Opciones = ["💎", "🧻", "✂"] as const;
type Opcion = (typeof Opciones)[number];

    const Juego: FC = (): ReactElement => {
        const nombreJugador = "Player"

    const randomOpcionesMaquina = (): Opcion =>
    Opciones[Math.floor(Math.random() * Opciones.length)];
    const compararOpciones = (
    eleccionJugador: Opcion,
    eleccionMaquina: Opcion
    ): string => {
    if (eleccionJugador === eleccionMaquina) return "Es un Empate";

    const ganaJugador =
        (eleccionJugador === "💎" && eleccionMaquina === "✂") ||
        (eleccionJugador === "🧻" && eleccionMaquina === "💎") ||
        (eleccionJugador === "✂" && eleccionMaquina === "🧻");

    return ganaJugador ? `¡${nombreJugador || "Jugador"} Gana!` : "¡Máquina Gana!";
    };
    const manejarJugador = (eleccionJugador: Opcion) => {
    const eleccionMaquina = randomOpcionesMaquina();
    const resultado = compararOpciones (eleccionJugador,eleccionMaquina);
    console.log(`${nombreJugador || "Jugador"}: ${eleccionJugador} - Máquina: ${eleccionMaquina} → ${resultado}`);
    };

    return (
    <div className="Juego">
        <button onClick={() => manejarJugador("💎")}>Piedra</button>
        <button onClick={() => manejarJugador("🧻")}>Papel</button>
        <button onClick={() => manejarJugador("✂")}>Tijeras</button>
    </div>
    );
};

export default Juego;
