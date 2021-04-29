import React from "react";
import PropTypes from "prop-types";

import { Hijo } from "./Hijo";

export function Padre(props) {
	//properties

	return (
		<div className="green">
			Soy el Padre, Hijo del Abuelo y mi apellido es{" "}
			{props.apellidoFamiliar}
			<Hijo {...props} />
		</div>
	);
}

Padre.propTypes = {
	apellidoFamiliar: PropTypes.string
};
