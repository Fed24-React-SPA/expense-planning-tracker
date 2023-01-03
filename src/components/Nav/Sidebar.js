import React from "react";
import { slide as Menu } from "react-burger-menu";
import shipping from "../../images/icons/shipping-box.png";
import circle from "../../images/icons/circle.png";
import balance from "../../images/icons/balance.png";
import cvv from "../../images/icons/cvv.png";
import invoicepaper from "../../images/icons/invoice-paper.png";
import pricetag from "../../images/icons/price-tag-rotate.png";
import todo from "../../images/icons/todo.png";
import upload from "../../images/icons/upload-bracket.png";
import vector1 from "../../images/icons/Vector-1.png";
import vector2 from "../../images/icons/Vector-2.png";
import vector from "../../images/icons/Vector.png";

const Sidebar = (props) => {
	const iconsStyles = {
		width: 16,
		height: 16,
		backgroundColor: "var(--dark-blue-bgcolor)",
	};
	return (
		<Menu {...props}>
			<a className="menu-item" href="/">
				<img src={shipping} alt="expense" style={iconsStyles} />
				<span> Get Premium</span>
			</a>

			<a className="menu-item" href="/">
				<img src={vector} alt="expense" style={iconsStyles} />
				<span>Records</span>
			</a>

			<a className="menu-item" href="/">
				<img src={vector2} alt="Bank" style={iconsStyles} />
				<span>Bank Syncs</span>
			</a>

			<a className="menu-item" href="/">
				<img src={upload} alt="imports" style={iconsStyles} />
				<span>imports</span>
			</a>
			<a className="menu-item" href="/">
				<img src={invoicepaper} alt="Receipts" style={iconsStyles} />
				<span>Receipts</span>
			</a>
			<a className="menu-item" href="/">
				<img src={pricetag} alt="tags" style={iconsStyles} />
				<span>Tags</span>
			</a>

			<a className="menu-item" href="/">
				<img src={balance} alt="balance" style={iconsStyles} />
				<span>Cards</span>
			</a>
			<a className="menu-item" href="/">
				<img src={circle} alt="budget" style={iconsStyles} />
				<span>Set Budget</span>
			</a>
			<a className="menu-item" href="/">
				<img src={cvv} alt="cvv" style={iconsStyles} />
				<span>CVV</span>
			</a>
			<a className="menu-item" href="/">
				<img src={todo} alt="lists" style={iconsStyles} />
				<span>lists</span>
			</a>
			<a className="menu-item" href="/">
				<img src={vector1} alt="Settings" style={iconsStyles} />
				<span>Settings</span>
			</a>
		</Menu>
	);
};

export default Sidebar;
