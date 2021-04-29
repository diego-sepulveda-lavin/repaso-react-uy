import React, { useState } from "react";
import { Padre } from "./Padre";

export function Abuelo() {
	const [apellido, setApellido] = useState("Perez");
	const [edad, setEdad] = useState(80);

	const cambiarApellido = () => {
		setApellido("Sepulveda");
	};

	const envejecer = () => {
		setEdad(prevState => {
			return prevState + 1;
		});
	};

	return (
		<div className="red">
			Soy el Abuelo y mi apellido es {apellido} y mi edad es {edad}
			<button onClick={cambiarApellido}>Cambiar Apellido</button>
			<button onClick={envejecer}>Envejecer</button>
			<Padre apellidoFamiliar={apellido} />
		</div>
	);
}
