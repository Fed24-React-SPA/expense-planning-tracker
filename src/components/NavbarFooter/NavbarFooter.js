import React from "react";
import "./NavbarFooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHouse,
	faCreditCard,
	faChartSimple,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const NavbarFooter = () => {
	return (
		<footer className="navbar-footer__icons">
			<Link to={"/"}>
				<FontAwesomeIcon icon={faHouse} className="faHouse" />
			</Link>
			{/* <Link to={"/expense"}>
				<FontAwesomeIcon icon={faCreditCard} className="faCreditCard" />
			</Link> */}
			<Link to={"/card"}>
				<FontAwesomeIcon icon={faCreditCard} className="faCreditCard" />
			</Link>
			<Link to={"/statistics"}>
				<FontAwesomeIcon icon={faChartSimple} className="faChartSimple" />
			</Link>
			<Link to={"/profile"}>
				<FontAwesomeIcon icon={faUser} className="faUser" />
			</Link>
		</footer>
	);
};

export default NavbarFooter;
