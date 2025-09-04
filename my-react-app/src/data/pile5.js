const pile5 = [
	{
		title: 'Bloqueo de salida',
		text: '🔹 Instrucción: Cada jugador lanza un dado. 🔹 Regla: Si el total entre todos es 12 o más → logran escapar y siguen normal. Si no → todos retroceden 2 casillas y todos pierden algo de dinero ($30).',
		money: -30
	},
	{
		title: 'Helicóptero en el aire',
		text: '🔹 Instrucción: Los jugadores votan un líder. Ese jugador lanza un dado. 🔹 Regla: Si saca 4, 5 o 6 → todos avanzan 1 casilla gratis. Si saca 1, 2 o 3 → el líder debe pagar a todos ($40).',
		money: -40
	},
	{
		title: 'Persecución policial',
		text: '🔹 Instrucción: Cada jugador elige en secreto entre "correr", "esconderse" o "despistar" (se apunta en papel o se dice al tiempo). 🔹 Regla: Si dos o más jugadores eligen lo mismo → la policía los anticipa y cada uno pierde dinero ($25) y un turno. Si hay división → solo se salvan los de la opción distinta.',
		money: -25
	},
	{
		title: 'Redada sorpresa',
		text: '🔹 Instrucción: Todos deben decidir en secreto cuánto dinero digital ofrecen para saldar la deuda de ($100). 🔹 Regla: Si entre todos alcanzan la cuota mínima → todos se salvan y recuperan su dinero. Si no llegan → todos pierden el doble de lo que ofrecieron.',
		money: -100
	},
	{
		title: 'Retén policial',
		text: '🔹 Instrucción: Cada jugador lanza un dado. 🔹 Regla: Si tu número es par → pierdes dinero ($35). Si es impar → te salvas. Si alguien saca 6 → se salvan y puede salvar a otro jugador.',
		money: -35
	},
	{
		title: 'Interrogatorio',
		text: '🔹 Instrucción: Cada jugador lanza un dado. 🔹 Regla: Si alguien saca 6 → logra despistar a la poli y todos se salvan. Si nadie saca 6 → cada jugador paga una suma ($20).',
		money: -20
	}
];

export default pile5;
