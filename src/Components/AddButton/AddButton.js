import React from "react";
import "./AddButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const AddButton = () => {
	return (
		<div className="AddBtn">
			<Link to={"/expense"}>
				<FontAwesomeIcon icon={faPlus} className="AddBtn-icon" />
			</Link>
		</div>
	);
};

export default AddButton;
