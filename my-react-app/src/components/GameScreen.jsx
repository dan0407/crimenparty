import React, { useState } from 'react';
import pile1 from '../data/pile1';
import pile2 from '../data/pile2';
import pile3 from '../data/pile3';
import pile4 from '../data/pile4';
import pile5 from '../data/pile5';

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

	const handlePick = (pileIdx) => {
		setCurrentCard(getRandomCard(piles[pileIdx]));
		setCurrentPileIndex(pileIdx);
	};

	const handleResult = (success) => {
		if (success && currentCard) {
			const newScores = [...scores];
			// Para pile 2 (karma), siempre aplicar el efecto cuando se hace check
			if (currentPileIndex === 1) {
				newScores[currentPlayerIndex] += currentCard.money;
			} else {
				// Para otras pilas, solo sumar si es positivo
				newScores[currentPlayerIndex] += currentCard.money;
			}
			setScores(newScores);
		}
		setCurrentCard(null);
		setCurrentPileIndex(null);
		setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
	};

	return (
		<div>
			<h2>Turno de: {players[currentPlayerIndex]}</h2>
			{!currentCard ? (
				<div>
					<p>Elige una pila de cartas:</p>
					<button onClick={() => handlePick(0)}>MISIONES DE SIGILO</button>
					<button onClick={() => handlePick(1)}>KARMA</button>
					<button onClick={() => handlePick(2)}>SORPRESA</button>
					<button onClick={() => handlePick(3)}>EVENTOS ESPECIALES</button>
					<button onClick={() => handlePick(4)}>ROBOS CON ASALTO</button>
				</div>
			) : (
				<div>
					<h3>{currentCard.title}</h3>
					<p>{currentCard.text}</p>
					<p>Dinero: ${currentCard.money}</p>
					<button onClick={() => handleResult(true)}>✅</button>
					<button onClick={() => handleResult(false)}>❌</button>
				</div>
			)}
			<div>
				<h4>Jugadores:</h4>
				<ul>
					{players.map((p, i) => (
						<li key={i} style={{ fontWeight: i === currentPlayerIndex ? 'bold' : 'normal' }}>
							{p} - {scores[i]} $$
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default GameScreen;