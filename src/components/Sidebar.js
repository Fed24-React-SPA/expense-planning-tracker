import React from "react";
import { slide as Menu } from "react-burger-menu";
import expense from "../images/icons/expense.png";
const Sidebar = (props) => {
	const iconsStyles = {
		backgroundColor: "white",
		objectFit: "cover",
		width: 18,
		height: 18,
	};
	return (
		<Menu {...props}>
			<a className="menu-item" href="/">
				<img src={expense} alt="expense" style={iconsStyles} />
				<span> Get Premium</span>
			</a>

			<a className="menu-item" href="/about">
				<img src={expense} alt="expense" style={iconsStyles} />
				Records
			</a>

			<a className="menu-item" href="/services">
				<img src={expense} alt="expense" style={iconsStyles} />
				Bank Syncs
			</a>

			<a className="menu-item" href="/contact">
				<img src={expense} alt="expense" style={iconsStyles} />
				imports
			</a>
			<a className="menu-item" href="/contact">
				<img src={expense} alt="expense" style={iconsStyles} />
				Receipts
			</a>
			<a className="menu-item" href="/services">
				<img src={expense} alt="expense" style={iconsStyles} />
				Tags
			</a>

			<a className="menu-item" href="/contact">
				<img src={expense} alt="expense" style={iconsStyles} />
				Cards
			</a>
			<a className="menu-item" href="/contact">
				<img src={expense} alt="expense" style={iconsStyles} />
				Set Budget
			</a>
			<a className="menu-item" href="/contact">
				<img src={expense} alt="expense" style={iconsStyles} />
				CVV
			</a>
			<a className="menu-item" href="/contact">
				<img src={expense} alt="expense" style={iconsStyles} />
				lists
			</a>
			<a className="menu-item" href="/contact">
				<img src={expense} alt="expense" style={iconsStyles} />
				Settings
			</a>
		</Menu>
	);
};

export default Sidebar;
