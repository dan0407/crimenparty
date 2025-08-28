# My React App

## Overview
This project is a simple React application for a game called BugSweeper. The game allows players to add their names, learn the rules, and participate in challenges based on randomly selected cards.

## Project Structure
```
my-react-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── AddPlayersScreen.jsx
│   │   ├── RulesScreen.jsx
│   │   └── GameScreen.jsx
│   ├── data
│   │   ├── pile1.js
│   │   ├── pile2.js
│   │   └── pile3.js
│   ├── App.jsx
│   └── index.js
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd my-react-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application
To start the application, run:
```
npm start
```
This will launch the app in your default web browser.

## Components
- **AddPlayersScreen.jsx**: This component allows players to enter their names and start the game.
- **RulesScreen.jsx**: This component displays the game rules and allows navigation to the game screen.
- **GameScreen.jsx**: This component manages the gameplay, including player turns and card challenges.

## Data Files
- **pile1.js**, **pile2.js**, **pile3.js**: These files contain arrays of challenges for the game.

## Contributing
Feel free to submit issues or pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.