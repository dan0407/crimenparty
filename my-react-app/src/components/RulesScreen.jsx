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
                    <h3>🎯 Objetivo del Juego</h3>
                    <p>
                        Conviértete en el criminal más exitoso acumulando dinero a través de misiones, 
                        robos y eventos especiales. ¡El jugador con más dinero al final gana!
                    </p>
                </div>

                <div className="rules-section">
                    <h3>🎲 Cómo Jugar</h3>
                    <ul className="rules-list">
                        <li>En tu turno, elige una pila de cartas</li>
                        <li>Lee la carta en voz alta para todos</li>
                        <li>Decide si completaste la misión exitosamente</li>
                        <li>Si tienes éxito, ganas el dinero de la carta</li>
                        <li>Si fallas, no ganas nada pero el juego continúa</li>
                    </ul>
                </div>

                <div className="rules-section">
                    <h3>🃏 Tipos de Cartas</h3>
                    <div className="pile-cards">
                        <div className="pile-card">
                            <h4>Misiones de Sigilo</h4>
                            <p>Trabajos discretos que requieren astucia y cuidado</p>
                        </div>
                        <div className="pile-card">
                            <h4>Karma</h4>
                            <p>Eventos de buena o mala suerte que pueden cambiar tu destino</p>
                        </div>
                        <div className="pile-card">
                            <h4>Sorpresa</h4>
                            <p>Situaciones inesperadas que pueden ser muy lucrativas</p>
                        </div>
                        <div className="pile-card">
                            <h4>Eventos Especiales</h4>
                            <p>Oportunidades únicas para grandes ganancias</p>
                        </div>
                        <div className="pile-card">
                            <h4>Robos con Asalto</h4>
                            <p>Los trabajos más peligrosos pero más rentables</p>
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