import React from 'react';
import { useHistory } from 'react-router-dom';

const RulesScreen = () => {
    const history = useHistory();

    const handleNext = () => {
        history.push('/game');
    };

    return (
        <div>
            <h1>Game Rules</h1>
            <p>
                {/* Add the game rules here */}
            </p>
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default RulesScreen;