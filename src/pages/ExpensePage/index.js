import React from "react";
import Tab from "../../components/Tab";
import Nav from "../../components/Nav";
import "./expensepage.css";
const ExpensePage = () => {
	return (
		<>
			<div className="expensepage-container">
				<Nav />
				<Tab />
			</div>
		</>
	);
};

export default ExpensePage;
