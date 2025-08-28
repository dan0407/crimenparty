import React, { useState } from 'react';

const AddPlayersScreen = ({ onStartGame }) => {
    const [playerName, setPlayerName] = useState('');
    const [players, setPlayers] = useState([]);

    const handleAddPlayer = () => {
        if (playerName) {
            setPlayers([...players, playerName]);
            setPlayerName('');
        }
    };

    return (
        <div>
            <h1>Bug Sweeper</h1>
            <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Add Player Name"
            />
            <button onClick={handleAddPlayer}>Add Player</button>
            <button onClick={() => onStartGame(players)}>Start Game</button>
            <h2>Players:</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
};

export default AddPlayersScreen;