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

                <div className="rules-section">
                    <h3>🎪 Misiones de Sigilo</h3>
                    <ul className="rules-list">
                        <li><strong>El guardia despierta:</strong> Da 5 vueltas alrededor de los demás con ojos cerrados</li>
                        <li><strong>Robo de bolsillo:</strong> Saca un objeto del bolsillo de otro jugador con dos dedos</li>
                        <li><strong>Desactivar alarma:</strong> Recoge 5 objetos con ojos cerrados, 1 es trampa</li>
                        <li><strong>Rana amiga:</strong> Adivina dónde esconden su ficha los demás</li>
                        <li><strong>Hoy por ti, mañana por mí:</strong> Elige un cómplice con gestos discretos</li>
                        <li><strong>El código secreto:</strong> Dibuja un símbolo para que otros adivinen</li>
                        <li><strong>El candado Yale:</strong> Lanza dados para abrir la cerradura</li>
                    </ul>
                </div>

                <div className="rules-section">
                    <h3>⚡ Karma (Eventos Negativos)</h3>
                    <ul className="rules-list">
                        <li><strong>Te sapearon:</strong> Pierdes dinero</li>
                        <li><strong>Te pilló el Tombo:</strong> Pierdes tu próximo turno</li>
                        <li><strong>Resbalaste:</strong> Retrocedes 1 casilla</li>
                        <li><strong>Barrio equivocado:</strong> Retrocedes 2 casillas</li>
                        <li><strong>El parcero se volteó:</strong> Das dinero al jugador de tu derecha</li>
                        <li><strong>Vino el gota a gota:</strong> Pagas una cantidad fija</li>
                    </ul>
                </div>

                <div className="rules-section">
                    <h3>🎁 Sorpresa (Eventos Positivos)</h3>
                    <ul className="rules-list">
                        <li><strong>Trabajito extra:</strong> Ganas dinero adicional</li>
                        <li><strong>El guarda se distrajo:</strong> Avanzas 1 casilla</li>
                        <li><strong>La vuelta salió limpia:</strong> Avanzas 2 casillas</li>
                        <li><strong>Te salió la lotería:</strong> Ganas bastante dinero</li>
                        <li><strong>Un socio te salvó:</strong> Evitas el próximo castigo</li>
                        <li><strong>Ladrón experto:</strong> Doblas la próxima recompensa de sigilo</li>
                    </ul>
                </div>

                <div className="rules-section">
                    <h3>🚨 Robos con Asalto</h3>
                    <ul className="rules-list">
                        <li><strong>El golpe en caliente:</strong> Lanza 2 dados, suma 8+ para el éxito</li>
                        <li><strong>Balacera en la entrada:</strong> Todos lanzan dados, el más alto gana</li>
                        <li><strong>Puerta reventada:</strong> Saca 5-6 para romper la puerta</li>
                        <li><strong>Saqueo exprés:</strong> Desafía a otro jugador con dados</li>
                        <li><strong>Explosión fallida:</strong> Necesitas dados pares para el éxito</li>
                        <li><strong>Corriendo con el botín:</strong> Escapa con 4-6 en el dado</li>
                    </ul>
                </div>

                <div className="rules-section">
                    <h3>👮 Eventos Policiales</h3>
                    <ul className="rules-list">
                        <li><strong>Bloqueo de salida:</strong> Todos cooperan para escapar</li>
                        <li><strong>Helicóptero en el aire:</strong> Elijan un líder para decidir el destino</li>
                        <li><strong>Persecución:</strong> Todos eligen estrategia en secreto</li>
                        <li><strong>Redada sorpresa:</strong> Paguen en conjunto para salvarse</li>
                        <li><strong>Retén policial:</strong> Los números pares pierden dinero</li>
                        <li><strong>Interrogatorio:</strong> Solo un 6 puede salvar a todos</li>
                    </ul>
                </div>

                <div className="rules-section">
                    <h3>🏆 Condiciones de Victoria</h3>
                    <p>
                        <strong>¡El jugador con más dinero al final de las rondas establecidas gana!</strong>
                    </p>
                    <div className="pile-cards">
                        <div className="pile-card">
                            <h4>⚡ Rápida</h4>
                            <p>4 rondas • 20 minutos</p>
                        </div>
                        <div className="pile-card">
                            <h4>🎯 Media</h4>
                            <p>5-15 rondas • 30-60 minutos</p>
                        </div>
                        <div className="pile-card">
                            <h4>🏆 Larga</h4>
                            <p>20 rondas • 1 hora 20 minutos</p>
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