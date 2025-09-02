const pile1 = [
	{ 
		title: 'El guardia despierta',
		text: 'Instrucción: Todos los demás jugadores cierran los ojos. Debes dar 5 vueltas lentas alrededor de ellos. Regla: En cualquier momento, un jugador puede gritar "¡Alto!". Si el jugador que dijo "¡Alto!" te señala y tú estás justo frente a él → pagas $50. Si falló y no estabas ahí → él debe darte $50.', 
		money: 50 
	},
	{ 
		title: 'Robo de bolsillo',
		text: 'Instrucción: Uno de los jugadores coloca un objeto (moneda, carta, ficha) en su puño o bolsillo, y deberá cerrar los ojos. Regla: Tienes que sacarlo con solo dos dedos. Si la víctima descubre que lo robaste o sospecha: Si es cierto → pagas $30. Si no lo era → la "víctima" debe darte $30. Si otro jugador te acusó injustamente → ese jugador también debe pagar $15.', 
		money: 30 
	},
	{ 
		title: 'Desactivar la alarma',
		text: 'Instrucción: Los demás ladrones colocan 5 objetos en fila (monedas, fichas, etc.). Regla: Con los ojos cerrados y usando solo una mano, debes recogerlos todos en un solo intento. 4 objetos son "seguros". 1 objeto es "alarma". Si coges el de alarma → fallas la misión.', 
		money: 40 
	},
	{ 
		title: 'Rana amiga',
		text: 'Instrucción: Cada ladrón esconde su ficha de personaje en una de sus manos cerradas y extiende ambos puños hacia adelante. Regla: El ladrón en turno debe adivinar dónde está la ficha. Si acierta 3 veces → todos los demás jugadores deben regresar a la casilla normal más cercana. Si falla 3 veces → deberá pagar $25 a los demás jugadores.', 
		money: 25 
	},
	{ 
		title: 'Hoy por ti, mañana por mí',
		text: 'Instrucción: El ladrón en turno debe elegir en secreto a un cómplice. Para hacerlo, hará un gesto sutil (un guiño, una mirada, un movimiento con la mano, etc.) hacia ese jugador durante la ronda. Regla: Si el jugador elegido detecta el gesto y responde con una señal discreta → ambos logran el robo y ganan $35. Si el cómplice no se da cuenta → fallan el robo y ambos pagan $35. Si otro jugador sospecha y acusa correctamente quién fue el cómplice → los dos descubiertos deben pagar el doble $70. Si alguien acusa erróneamente → ese jugador debe pagar $35 por acusar sin pruebas.', 
		money: 35 
	},
	{ 
		title: 'Confía en el socio',
		text: 'Instrucción: El ladrón ofrece en secreto una ficha/moneda a otro jugador (poniendo la mano cerrada). Regla: El otro debe adivinar si la mano está vacía o no. Si acierta → el ladrón paga $20. Si falla → gana el ladrón $20.', 
		money: 20 
	},
	{ 
		title: 'El código secreto',
		text: 'Instrucción: El ladrón dibuja en secreto un símbolo sencillo (círculo, estrella, triángulo, cuadrado) en un papel o carta tapada. Regla: Luego los demás deberán adivinar que figura dibujó el ladrón. Los demás jugadores deben adivinar cuál figura eligió el ladrón. Cada jugador tiene solo una oportunidad para decir su respuesta. Si un jugador acierta ambos ladrones ganan $45. Si ninguno acierta, el ladrón obtiene $60.', 
		money: 45 
	},
	{ 
		title: 'El candado Yale',
		text: 'Instrucción: El ladrón en turno intenta abrir una cerradura lanzando un dado (o usando cartas del 1 al 6). Regla: Si saca 4, 5 o 6 → la cerradura se abre y roba $30 de cada jugador. Si saca 1, 2 o 3 → la cerradura se traba. En ese caso, el ladrón puede arriesgarse a tirar otra vez: Si vuelve a sacar 1, 2 o 3 → además de pagar $30 a cada jugador, pierde un turno o retrocede una casilla. Si en la segunda tirada logra abrirla (4, 5 o 6) → roba el doble de lo normal $60, porque lo hizo con esfuerzo.', 
		money: 30 
	},
];

export default pile1;
