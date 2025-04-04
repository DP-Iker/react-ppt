import React, { useState, useEffect } from "react";
import styles from "./botones.module.css"; // asegúrate de tener las clases en este CSS

const opciones = {
    piedra: "💎 Piedra",
    papel: "🧻 Papel",
    tijera: "✂ Tijera",
} as const;

type Opcion = keyof typeof opciones;

const BotonesJuego: React.FC = () => {
    const [resultadoJugador, setResultadoJugador] = useState(0);
    const [resultadoPC, setResultadoPC] = useState(0);
    const [round, setRound] = useState(0);
    const [isBestOfThree, setIsBestOfThree] = useState(true);
    const [tiradas, setTiradas] = useState<string[]>([]);
    const [finalizado, setFinalizado] = useState(false);
    const [resultadoFinal, setResultadoFinal] = useState("");

    const play = (opcionJugador: Opcion) => {
        if (isGameOver()) return;

        const opcionesInternas: Opcion[] = ["piedra", "papel", "tijera"];
        const opcionPC = opcionesInternas[Math.floor(Math.random() * opcionesInternas.length)];

        let resultText = "";
        // let resultadoExtra = "";

        let newJugador = resultadoJugador;
        let newPC = resultadoPC;
        const nuevaRonda = round + 1;

        if (opcionJugador === opcionPC) {
            resultText = `¡<span class="player-empate">Empate</span>! Ambos eligieron ${opciones[opcionJugador]}`;
        } else if (
            (opcionJugador === "piedra" && opcionPC === "tijera") ||
            (opcionJugador === "papel" && opcionPC === "piedra") ||
            (opcionJugador === "tijera" && opcionPC === "papel")
        ) {
            resultText = `¡<span class="player-text">Ganaste</span>! ${opciones[opcionJugador]} vence a ${opciones[opcionPC]}`;
            newJugador++;
        } else {
            resultText = `¡<span class="player-text2">Perdiste</span>! ${opciones[opcionPC]} vence a ${opciones[opcionJugador]}`;
            newPC++;
        }

        const tiradaHTML = `
            <hr style="border: 1px solid blue; margin: 10px 0;">
            <div class="roundResult">
                <p><span class="player-text">Jugador</span>: ${opciones[opcionJugador]} 🤼‍♂️ 
                <span class="player-text2">Ordenador</span>: ${opciones[opcionPC]}</p>
                <p>${resultText}</p>
            </div>`;

        setTiradas((prev) => [...prev, tiradaHTML]);
        setResultadoJugador(newJugador);
        setResultadoPC(newPC);
        setRound(nuevaRonda);

        if (isBestOfThree && nuevaRonda === 3) {
            finishGame(newJugador, newPC);
        }
    };

    const toggleMode = () => setIsBestOfThree(!isBestOfThree);

    const finishGame = (jugador: number, pc: number) => {
        setFinalizado(true);
        if (jugador > pc) setResultadoFinal("🏆 ¡Felicidades! Has ganado el juego.");
        else if (jugador < pc) setResultadoFinal("💻 El ordenador ha ganado el juego.");
        else setResultadoFinal("⚔ ¡Empate final! ⚔");
    };

    const reiniciarJuego = () => {
        setResultadoJugador(0);
        setResultadoPC(0);
        setRound(0);
        setTiradas([]);
        setFinalizado(false);
        setResultadoFinal("");
    };

    const isGameOver = () => isBestOfThree && round === 3;

    // Auto scroll y highlight
    useEffect(() => {
        const contenedor = document.getElementById("tiradasContainer");
        if (contenedor) contenedor.scrollTop = contenedor.scrollHeight;
    }, [tiradas]);

    return (
        <div>
            <h1 className={!finalizado ? "" : styles.oculto}>¡Juego Piedra, Papel o Tijera!</h1>

            {!finalizado && (
                <div className={styles.botonesContenedor}>
                    <button onClick={() => play("piedra")}>💎 Piedra</button>
                    <button onClick={() => play("papel")}>🧻 Papel</button>
                    <button onClick={() => play("tijera")}>✂ Tijera</button>
                    <button onClick={toggleMode}>
                        Modo: {isBestOfThree ? "Mejor de 3" : "Ilimitado"}
                    </button>
                    <button onClick={() => finishGame(resultadoJugador, resultadoPC)}>Finalizar partida</button>
                </div>
            )}

            <button
                onClick={reiniciarJuego}
                className={`${styles.reiniciarBtn} ${!finalizado ? styles.oculto : ""} ${
                    !isBestOfThree ? styles["reiniciar-izquierda"] : ""
                }`}
            >
                Reiniciar Juego
            </button>

            <div id="tiradasContainer">
                <div
                    id="resultadoTirada"
                    dangerouslySetInnerHTML={{ __html: tiradas.join("") }}
                ></div>
            </div>

            <div id="puntuacion">
                Puntuación: <br />
                <span className="player-text">Jugador</span>: {resultadoJugador} |
                <span className="player-text2"> Ordenador</span>: {resultadoPC}
            </div>

            <div id="resultadoFinalContenedor">
                <div id="resultadoFinal">{resultadoFinal}</div>
            </div>
        </div>
    );
};

export default BotonesJuego;
