import React, { useState } from 'react';
import pile1 from '../data/pile1';
import pile2 from '../data/pile2';
import pile3 from '../data/pile3';

const GameScreen = ({ players, currentPlayerIndex, setCurrentPlayerIndex }) => {
    const [selectedPile, setSelectedPile] = useState(null);
    const [challenge, setChallenge] = useState('');

    const handleSelectPile = (pile) => {
        const challenges = pile === 1 ? pile1 : pile === 2 ? pile2 : pile3;
        const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
        setChallenge(randomChallenge);
        setSelectedPile(pile);
    };

    const handleNextTurn = () => {
        setCurrentPlayerIndex((currentPlayerIndex + 1) % players.length);
        setChallenge('');
        setSelectedPile(null);
    };

    return (
        <div>
            <h1>Game Screen</h1>
            <h2>Current Player: {players[currentPlayerIndex]}</h2>
            <div>
                <h3>Select a pile:</h3>
                <button onClick={() => handleSelectPile(1)}>Pile 1</button>
                <button onClick={() => handleSelectPile(2)}>Pile 2</button>
                <button onClick={() => handleSelectPile(3)}>Pile 3</button>
            </div>
            {selectedPile && (
                <div>
                    <h3>Challenge:</h3>
                    <p>{challenge}</p>
                </div>
            )}
            <button onClick={handleNextTurn}>Next Turn</button>
        </div>
    );
};

export default GameScreen;