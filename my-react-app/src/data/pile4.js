const pile4 = [
	{
		title: 'El golpe en caliente',
		text: '🔹 Instrucción: El ladrón en turno lanza 2 dados al mismo tiempo. 🔹 Regla: Si la suma es 8 o más → el asalto es exitoso, roba ($40) de cada jugador. Si la suma es entre 5 y 7 → el guardia se resiste, roba ($30) a un jugador elegido, pero debe pagar ($30) a otro jugador que él mismo escoja. Si la suma es 4 o menos → el asalto fracasa, paga ($40) a cada jugador y retrocede una casilla. 👉 Con 2 jugadores: Si es exitoso (8+), roba el doble al otro. Si fracasa (4-), paga el doble y pierde un turno.',
		money: 40
	},
	{
		title: 'Balacera en la entrada',
		text: '🔹 Instrucción: Todos los jugadores lanzan un dado al mismo tiempo. 🔹 Regla: Si el ladrón obtiene el número más alto  → gana el tiroteo y roba ($50) de todos. Si queda en empate → roba ($30) de un jugador y paga ($30) a otro. Si obtiene el número más bajo que los jugadores presentes  → paga ($50) a todos y retrocede una casilla. 👉 Con 2 jugadores: El que saque más alto roba ($50) del otro.',
		money: 50
	},
	{
		title: 'Puerta reventada',
		text: '🔹 Instrucción: El ladrón en turno lanza un dado. 🔹 Regla: Si saca 5 o 6 → rompe la puerta y roba ($45) de todos. Si saca 3 o 4 → logra entrar a medias, roba ($35) de un jugador. Si saca 1 o 2 → la explosión falla, paga ($45) a todos. 👉 Con 2 jugadores: Si saca 5 o 6 roba el doble, si saca 1 o 2 paga el doble.',
		money: 45
	},
	{
		title: 'Saqueo exprés',
		text: '🔹 Instrucción: El ladrón elige a un jugador y ambos lanzan un dado. 🔹 Regla: Si el ladrón saca más → roba ($35) de ese jugador. Si empatan → ninguno gana ni pierde. Si el otro gana → el ladrón paga ($35) a ese jugador. 👉 Con 2 jugadores: Funciona igual.',
		money: 35
	},
	{
		title: 'Asalto perfecto',
		text: '🔹 Instrucción: El ladrón piensa en secreto un número del 1 al 10 y los demás tienen 2 oportunidades por persona de atinar (si hay mas de 4 jugadores sera una oportunidad por persona). 🔹 Regla: Si nadie acierta → el asalto sale perfecto y roba ($55) de todos. Si alguien acierta → paga ($55) a ese jugador. 👉 Con 2 jugadores: Si el rival acierta → gana él. Si falla → gana el ladrón.',
		money: 55
	},
	{
		title: 'Explosión fallida',
		text: '🔹 Instrucción: El ladrón lanza 2 dados. 🔹 Regla: Si ambos son pares → la explosión es limpia, roba ($60) de todos. Si uno es par y otro impar → roba ($40) de un jugador al azar. Si ambos son impares → falla, paga ($60) a todos y pierde un turno. 👉 Con 2 jugadores: Si ambos son impares → además de pagar, retrocede una casilla.',
		money: 60
	},
	{
		title: 'Carga al límite',
		text: '🔹 Instrucción: El ladrón lanza un dado. 🔹 Regla: Si saca 6 → el asalto es brutal, roba ($80) de todos. Si saca 3, 4 o 5 → asalto normal, roba ($40) de un jugador. Si saca 1 o 2 → la policía llega, retrocede 2 casillas. 👉 Con 2 jugadores: Si saca 6 roba el doble del otro.',
		money: 80
	},
	{
		title: 'Corriendo con el botín',
		text: '🔹 Instrucción: El ladrón lanza un dado. 🔹 Regla: Si saca 4, 5 o 6 → logra escapar, avanza 2 casillas y roba ($30) de un jugador. Si saca 1, 2 o 3 → tropieza, paga ($30) al jugador de la derecha. 👉 Con 2 jugadores: Si tropieza paga el doble.',
		money: 30
	}
];

export default pile4;
