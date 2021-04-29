import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Hijo(props) {
	const [animo, setAnimo] = useState("Feliz");
	/* useEffect(() => {
		console.log("Yo me ejecuto cuando me monto en la UI o cuando el componente haga update de props o de state");
    }); */

	/* useEffect(() => {
		console.log("Yo solo me ejecuto cuando me monto en la UI");
    }, []); */

	useEffect(() => {
		console.log(
			"Yo solo me ejecuto cuando me monto en la UI o cuando el prop apellidoFamiliar cambie o el animo cambie"
		);
	}, [props.apellidoFamiliar, animo]);

	const cambiarAnimo = () => {
		setAnimo("Enojado");
	};

	return (
		<div className="blue">
			Soy el Hijo, Hijo del Padre y mi apellido es:{" "}
			{props.apellidoFamiliar} y estoy {animo}
			<button onClick={cambiarAnimo}>CambiarAnimo</button>
		</div>
	);
}

Hijo.propTypes = {
	apellidoFamiliar: PropTypes.string
};
