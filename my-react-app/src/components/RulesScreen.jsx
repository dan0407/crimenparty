import React from 'react';
import { useHistory } from 'react-router-dom';
import './RulesScreen.css';

const RulesScreen = () => {
    const history = useHistory();

    const handleNext = () => {
        history.push('/game');
    };

    return (
        <div className="rules-container">
            <div className="rules-header">
                <h1 className="rules-title">Crimen Party</h1>
                <p className="rules-subtitle">Reglas del Juego</p>
            </div>

            <div className="rules-content">
                <div className="rules-section">
                    <h3>🎯 Presentación del Juego</h3>
                    <p><strong>Jugadores:</strong> de 2 a 4 • <strong>Tiempo:</strong> 30 minutos • <strong>Edad:</strong> 12 a 99 años</p>
                    <p>
                        Cada jugador es un ladrón hábil que buscará quedarse con la mayor cantidad de dinero en esta rica ciudad.
                        No son amigos, pero a veces el destino los obligará a trabajar juntos, aunque al final, solo habrá una
                        persona aún más rica, un ladrón cuya leyenda se recordará sobre los demás.
                    </p>
                </div>

                <div className="rules-section">
                    <h3>🎲 Cómo se Juega</h3>
                    <ul className="rules-list">
                        <li>Lanza el dado y avanza tu ficha en el tablero</li>
                        <li>Resuelve la casilla donde caes según su tipo</li>
                        <li>Si es una casilla especial, saca una carta digital de la app</li>
                        <li>Completa el reto o minijuego de la carta</li>
                        <li>Gana o pierde dinero según el resultado</li>
                        <li>Al final de cada ronda ocurre un evento especial</li>
                    </ul>
                </div>

                <div className="rules-section">
                    <h3>🗺️ Tipos de Casillas</h3>
                    <div className="pile-cards">
                        <div className="pile-card">
                            <h4>🏛️ Cárcel</h4>
                            <p>Casilla de inicio y castigo</p>
                        </div>
                        <div className="pile-card">
                            <h4>📍 Normal</h4>
                            <p>Solo avanzas, sin efectos</p>
                        </div>
                        <div className="pile-card">
                            <h4>🎁 Sorpresa</h4>
                            <p>Eventos positivos inesperados</p>
                        </div>
                        <div className="pile-card">
                            <h4>⚡ Karma</h4>
                            <p>Consecuencias del destino</p>
                        </div>
                        <div className="pile-card">
                            <h4>🏪 Lugar a Robar</h4>
                            <p>Misiones de sigilo discretas</p>
                        </div>
                        <div className="pile-card">
                            <h4>🚨 Asalto</h4>
                            <p>Robos peligrosos pero rentables</p>
                        </div>
                        <div className="pile-card">
                            <h4>👮 Evento Policial</h4>
                            <p>Afecta a todos los jugadores</p>
                        </div>
                    </div>
                </div>
                <div className="warning-box">
                    <h4>⚠️ Importante</h4>
                    <p>
                        Recuerda que esto es solo un juego de diversión.
                        ¡No intentes nada de esto en la vida real!
                    </p>
                </div>
            </div>

            <button className="next-button" onClick={handleNext}>
                ¡Empezar a Jugar!
            </button>
        </div>
    );
};

export default RulesScreen;