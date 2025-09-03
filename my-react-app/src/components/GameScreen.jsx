import React, { useState } from 'react';
import pile1 from '../data/pile1';
import pile2 from '../data/pile2';
import pile3 from '../data/pile3';
import pile4 from '../data/pile4';
import pile5 from '../data/pile5';
import './GameScreen.css';

const piles = [pile1, pile2, pile3, pile4, pile5];

function getRandomCard(pile) {
	const idx = Math.floor(Math.random() * pile.length);
	return pile[idx];
}

function GameScreen({ players }) {
	const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
	const [currentCard, setCurrentCard] = useState(null);
	const [currentPileIndex, setCurrentPileIndex] = useState(null);
	const [scores, setScores] = useState(Array(players.length).fill(0));
	const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0);
	const [customAmount, setCustomAmount] = useState('');
	const [useCustomAmount, setUseCustomAmount] = useState(false);
	const [playerAmounts, setPlayerAmounts] = useState([]);

	const handlePick = (pileIdx) => {
		const card = getRandomCard(piles[pileIdx]);
		setCurrentCard(card);
		setCurrentPileIndex(pileIdx);
		setSelectedPlayerIndex(currentPlayerIndex);
		setCustomAmount('');
		setUseCustomAmount(false);
		
		// Inicializar cantidades para eventos policiales
		if (pileIdx === 3) {
			setPlayerAmounts(players.map(() => card.money.toString()));
		} else {
			setPlayerAmounts([]);
		}
	};

	const handleResult = (success) => {
		if (success && currentCard) {
			const newScores = [...scores];

			// Si es un Evento Policial (pila 3, índice 3), usar cantidades individuales
			if (currentPileIndex === 3) {
				for (let i = 0; i < newScores.length; i++) {
					const amount = playerAmounts[i] ? parseInt(playerAmounts[i]) : 0;
					newScores[i] += amount;
				}
			} else {
				// Para otros eventos, solo afecta al jugador seleccionado
				const amountToAdd = useCustomAmount && customAmount ?
					parseInt(customAmount) : currentCard.money;
				newScores[selectedPlayerIndex] += amountToAdd;
			}
			
			setScores(newScores);
		}
		setCurrentCard(null);
		setCurrentPileIndex(null);
		setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
	};

	const toggleCustomAmount = () => {
		setUseCustomAmount(!useCustomAmount);
		if (!useCustomAmount) {
			setCustomAmount(currentCard?.money?.toString() || '');
		}
	};

	const updatePlayerAmount = (playerIndex, amount) => {
		const newAmounts = [...playerAmounts];
		newAmounts[playerIndex] = amount;
		setPlayerAmounts(newAmounts);
	};

	return (
		<div className="game-container">
			<div className="main-content">
				<h2>Turno de: {players[currentPlayerIndex]}</h2>
				{!currentCard ? (
					<div className="pile-selection">
						<p>Elige una pila de cartas:</p>
						<button onClick={() => handlePick(0)}>MISIONES DE SIGILO</button>
						<button onClick={() => handlePick(1)}>KARMA</button>
						<button onClick={() => handlePick(2)}>SORPRESA</button>
						<button onClick={() => handlePick(3)}>EVENTOS POLICIAL</button>
						<button onClick={() => handlePick(4)}>ROBOS CON ASALTO</button>
					</div>
				) : (
					<div className="card-display">
						<h3>{currentCard.title}</h3>
						<p>{currentCard.text}</p>
						<p>Dinero: ${currentCard.money}</p>

						<div className="card-controls">
							{currentPileIndex === 3 ? (
								<div className="police-event-section">
									<div className="police-event-warning">
										<h4>👮 EVENTO POLICIAL</h4>
										<p>Personalizar cantidad para cada jugador</p>
									</div>
									<div className="players-amounts-grid">
										{players.map((player, index) => (
											<div key={index} className="player-amount-control">
												<label className="player-label">{player}:</label>
												<input
													type="number"
													className="player-amount-input"
													value={playerAmounts[index] || ''}
													onChange={(e) => updatePlayerAmount(index, e.target.value)}
													placeholder="0"
												/>
											</div>
										))}
									</div>
								</div>
							) : (
								<div className="player-selector">
									<label>Jugador que recibe:</label>
									<select
										value={selectedPlayerIndex}
										onChange={(e) => setSelectedPlayerIndex(parseInt(e.target.value))}
									>
										{players.map((player, index) => (
											<option key={index} value={index}>
												{player}
											</option>
										))}
									</select>
								</div>
							)}

							{currentPileIndex !== 3 && (
								<div className="amount-controls">
									<button
										className={`custom-amount-btn ${useCustomAmount ? 'active' : ''}`}
										onClick={toggleCustomAmount}
									>
										Cantidad
									</button>

									{useCustomAmount && (
										<div className="custom-amount-input">
											<input
												type="number"
												value={customAmount}
												onChange={(e) => setCustomAmount(e.target.value)}
												placeholder="Cantidad personalizada"
											/>
										</div>
									)}
								</div>
							)}

							<div className="result-buttons">
								<button className="success-btn" onClick={() => handleResult(true)}>✅ Éxito</button>
								<button className="fail-btn" onClick={() => handleResult(false)}>❌ Fracaso</button>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="players-sidebar">
				<h4>Jugadores:</h4>
				<ul>
					{players.map((p, i) => (
						<li key={i} className={i === currentPlayerIndex ? 'current-player' : ''}>
							{p} - {scores[i]} $$
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default GameScreen;