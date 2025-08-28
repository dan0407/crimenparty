import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const AddPlayersScreen = ({ setPlayers }) => {
	const [playerName, setPlayerName] = useState('');
	const [players, setPlayersList] = useState([]);
	const history = useHistory();

	const handleAddPlayer = () => {
		if (playerName) {
			setPlayersList([...players, playerName]);
			setPlayerName('');
		}
	};

	const onStart = () => {
		if (players.length >= 2) {
			setPlayers(players);
			history.push('/rules');
		}
	};

	return (
		<div>
			<h1>Bug Sweeper</h1>
			<input
				type='text'
				value={playerName}
				onChange={(e) => setPlayerName(e.target.value)}
				placeholder='Add Player Name'
			/>
			<button onClick={handleAddPlayer}>Add Player</button>
			<button onClick={onStart} disabled={players.length < 2}>
				Empezar
			</button>
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
