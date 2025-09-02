export default [
	{ 
		title: 'Corte de luz',
		text: 'Todos cierran los ojos. El jugador en turno roba $40 de la caja sin que lo descubran. Si alguien lo señala con el dedo justo al abrir los ojos → debe devolver el doble.', 
		money: 40 
	},
	{ 
		title: 'Soplón en la banda',
		text: 'Todos ponen una ficha en el centro. El jugador en turno reparte al azar las fichas con los ojos cerrados. El que reciba su propia ficha debe pagar $25 a todos.', 
		money: 25 
	},
	{ 
		title: 'El Informante',
		text: 'Cada jugador elige en secreto a alguien sospechoso (señalando con el dedo a escondidas). El que reciba más votos paga $35.', 
		money: 35 
	},
	{ 
		title: 'Explosión de dinamita',
		text: 'Todos lanzan un dado: 1–2 → pierden $20 a la caja. 3–4 → no pasa nada. 5–6 → ganan $20 de la caja.', 
		money: 20 
	},
	{ 
		title: 'Cambio de máscaras',
		text: 'Todos deben intercambiar al azar 1 ficha/moneda con el jugador de la izquierda.', 
		money: 0 
	},
	{ 
		title: 'Escape en coche',
		text: 'Todos tiran un dado. El número más bajo paga $30 a la caja.', 
		money: 30 
	},
	{ 
		title: 'El Botín se divide',
		text: 'Cada jugador da una ficha a la caja. Luego se revuelven y se reparten al azar de nuevo.', 
		money: 0 
	},
	{ 
		title: 'Calle bloqueada',
		text: 'El jugador en turno pierde su siguiente oportunidad de robar, pero gana $15 como compensación de la caja.', 
		money: 15 
	},
	{ 
		title: 'Golpe fallido',
		text: 'Todos los jugadores pierden $25 excepto el que tenga menos fichas, que gana $50.', 
		money: -25 
	},
	{ 
		title: 'Recompensa policial',
		text: 'El jugador con más fichas debe pagar $20 a todos los demás como "recompensa".', 
		money: -20 
	},
];
