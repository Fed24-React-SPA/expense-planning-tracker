import React, { useContext } from "react";
import Tab from "../../components/Tab";
import Nav from "../../components/Nav";
import "./expensepage.css";
import storeContext from "../../services/Store";
const ExpensePage = () => {
	const store = useContext(storeContext);
	return (
		<>
			<div
				style={{
					background: store.backgroundColor,
				}}
				className="expensepage-container"
			>
				<Nav />
				<Tab />
			</div>
		</>
	);
};

export default ExpensePage;
