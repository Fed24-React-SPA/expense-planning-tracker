import React, { useContext } from "react";
import "./NavbarFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faCreditCard,
	faChartSimple,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import storeContext from "../../services/Store";

const NavbarFooter = () => {
	const store = useContext(storeContext);
	const handleBackgroundColor = (e) => {
		store.setbackgroundColor(e.target.value);
	};
	return (
		<footer className="navbar-footer__icons">
			<Link to={"/"}>
				<FontAwesomeIcon icon={faHouse} className="faHouse" />
			</Link>
			<Link to={"/card"}>
				<FontAwesomeIcon icon={faCreditCard} className="faCreditCard" />
			</Link>
			<Link to={"/statistics"}>
				<FontAwesomeIcon icon={faChartSimple} className="faChartSimple" />
			</Link>
			<Link to={"/profile"}>
				<FontAwesomeIcon icon={faUser} className="faUser" />
			</Link>
			<input
				value={store.backgroundColor}
				type={"color"}
				onChange={handleBackgroundColor}
			/>
		</footer>
	);
};

export default NavbarFooter;
