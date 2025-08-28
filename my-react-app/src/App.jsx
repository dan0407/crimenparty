import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPlayersScreen from './components/AddPlayersScreen';
import RulesScreen from './components/RulesScreen';
import GameScreen from './components/GameScreen';

const App = () => {
	const [players, setPlayers] = useState([]);

	const addPlayer = (playerName) => {
		setPlayers([...players, playerName]);
	};

	return (
		<Router>
			<Switch>
				<Route path='/' exact>
					<AddPlayersScreen setPlayers={setPlayers} />
				</Route>
				<Route path='/rules'>
					<RulesScreen />
				</Route>
				<Route path='/game'>
					<GameScreen players={players} />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
