const pile1 = [
	{
		title: 'El guardia despierta',
		text: '🔹 Instrucción: Todos los demás jugadores cierran los ojos. Debes dar 5 vueltas lentas alrededor de ellos. 🔹 Regla: En cualquier momento, un jugador puede gritar "¡Alto!". Si el jugador que dijo "¡Alto!" te señala y estás justo frente a él → pagas $50. Si falló → él debe darte $50. 👉 Con 2 jugadores: funciona igual.',
		money: 50
	},
	{
		title: 'Robo de bolsillo',
		text: '🔹 Instrucción: Un jugador coloca un objeto en su bolsillo y cierra los ojos. 🔹 Regla: los demas jugadores tienen que sacarlo con solo dos dedos. Si la "víctima" descubre el robo y acierta → pagas $30. Si se equivoca → la víctima debe darte $30.. 👉 Con 2 jugadores: se ignora la regla del "tercero acusador".',
		money: 30
	},
	{
		title: 'Desactivar la alarma',
		text: '🔹 Instrucción: Los demás colocan 5 objetos dispersos en el tablero de juego. 🔹 Regla: Con los ojos cerrados y usando una mano, debes recogerlos todos en un intento. 4 y 5 son "seguros", 1, 2 y 3 son "alarma". 👉 Con 2 jugadores: el contrincante es quien organiza los objetos.',
		money: 40
	},
	{
		title: 'Rana amiga',
		text: '🔹 Instrucción: Cada jugador esconde su ficha en una de sus manos cerradas y extiende ambas. 🔹 Regla: El jugador en turno debe adivinar dónde está la ficha. Si acierta 3 veces → todos los demás retroceden una casilla. Si falla 3 veces → debe pagar $25 a los demás. 👉 Con 2 jugadores: simplemente se turnan como escondedor y adivinador.',
		money: 25
	},
	{
		title: 'Hoy por ti, mañana por mí',
		text: '🔹 Instrucción: El ladrón en turno debe elegir en secreto a un cómplice haciendo un gesto discreto. 🔹 Regla: Si el cómplice lo detecta → ambos ganan $35. Si no lo detecta → ambos pagan $35. Si otro jugador acusa y acierta → los dos le pagan $70. Si acusa y falla → ese jugador paga a los dos $35.',
		money: 35
	},
	{
		title: 'Confía en el socio',
		text: '🔹 Instrucción: El ladrón ofrece en secreto su ficha al jugador que escoja (poniendo la mano cerrada). 🔹 Regla: El otro debe adivinar si la mano está vacía o no. Si acierta → el ladrón paga $20. Si falla → gana el ladrón $20.',
		money: 20
	},
	{
		title: 'El código secreto',
		text: '🔹 Instrucción: El ladrón dibuja en secreto un símbolo sencillo (círculo, estrella, triángulo, cuadrado). 🔹 Regla: Cada jugador tiene una oportunidad para adivinar. Si alguien acierta → el ladrón comparte el 50% de la recompensa con el que adivinó. Si nadie acierta → el ladrón se queda con todo. 👉 Con 2 jugadores: el otro simplemente adivina; si acierta gana el otro jugador, si falla gana el ladrón.',
		money: 45
	},
	{
		title: 'El candado Yale',
		text: '🔹 Instrucción: El ladrón en turno intenta abrir una cerradura lanzando un dado (o usando cartas del 1 al 6). 🔹 Regla: Si saca 4, 5 o 6 → la cerradura se abre y roba $30 de cada jugador. Si saca 1, 2 o 3 → la cerradura se traba. En ese caso, el ladrón puede arriesgarse a tirar otra vez: Si vuelve a sacar 1, 2 o 3 → además de pagar $30 a cada jugador, pierde un turno o retrocede una casilla. Si en la segunda tirada logra abrirla (4, 5 o 6) → roba el doble de lo normal, porque lo hizo con esfuerzo.',
		money: 30
	}
];

export default pile1;
