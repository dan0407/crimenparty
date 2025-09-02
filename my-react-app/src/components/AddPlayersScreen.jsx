import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './AddPLayersScreen.css';

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

	const handleRemovePlayer = (indexToRemove) => {
		const updatedPlayers = players.filter((_, index) => index !== indexToRemove);
		setPlayersList(updatedPlayers);
	};

	return (
		<div className="add-players-container">
			<div className="add-players-header">
				<h1 className="add-players-title">Crimen Party</h1>
				<p className="add-players-subtitle">Agregar Jugadores</p>
			</div>
			
			<div className="player-form-container">
				<form className="player-form" onSubmit={(e) => e.preventDefault()}>
					<div className="form-group">
						<label className="form-label">Nombre del Jugador</label>
						<input
							className="form-input"
							type='text'
							value={playerName}
							onChange={(e) => setPlayerName(e.target.value)}
							placeholder='Ingresa el nombre del jugador'
						/>
					</div>
					<button className="add-player-btn" onClick={handleAddPlayer}>
						Agregar Jugador
					</button>
				</form>
			</div>

			{players.length > 0 && (
				<div className="players-list">
					<h2 className="players-list-title">Jugadores ({players.length})</h2>
					<div className="players-grid">
						{players.map((player, index) => (
							<div key={index} className="player-card">
								<div className="player-name">{player}</div>
								<div className="player-info">Jugador #{index + 1}</div>
								<button 
									className="remove-player-btn" 
									onClick={() => handleRemovePlayer(index)}
								>
									Eliminar
								</button>
							</div>
						))}
					</div>
				</div>
			)}

			<button 
				className="start-game-btn" 
				onClick={onStart} 
				disabled={players.length < 2}
			>
				{players.length < 2 ? 'Mínimo 2 Jugadores' : 'Empezar Juego'}
			</button>
		</div>
	);
};

export default AddPlayersScreen;
