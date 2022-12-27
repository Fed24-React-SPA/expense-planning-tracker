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

			<a className="menu-item" href="/">
				<img src={expense} alt="expense" style={iconsStyles} />
				<span>Records</span>
			</a>

			<a className="menu-item" href="/">
				<img src={expense} alt="expense" style={iconsStyles} />
				<span>Bank Syncs</span>
			</a>

			<a className="menu-item" href="/">
				<img src={expense} alt="expense" style={iconsStyles} />
				<span>imports</span>
			</a>
			<a className="menu-item" href="/">
				<img src={expense} alt="expense" style={iconsStyles} />
				<span>Receipts</span>
			</a>
			<a className="menu-item" href="/">
				<img src={expense} alt="expense" style={iconsStyles} />
				<span>Tags</span>
			</a>

			<a className="menu-item" href="/">
				<img src={expense} alt="expense" style={iconsStyles} />
				<span>Cards</span>
			</a>
			<a className="menu-item" href="/">
				<img src={expense} alt="expense" style={iconsStyles} />
				<span>Set Budget</span>
			</a>
			<a className="menu-item" href="/">
				<img src={expense} alt="expense" style={iconsStyles} />
				<span>CVV</span>
			</a>
			<a className="menu-item" href="/">
				<img src={expense} alt="expense" style={iconsStyles} />
				<span>lists</span>
			</a>
			<a className="menu-item" href="/">
				<img src={expense} alt="expense" style={iconsStyles} />
				<span>Settings</span>
			</a>
		</Menu>
	);
};

export default Sidebar;
