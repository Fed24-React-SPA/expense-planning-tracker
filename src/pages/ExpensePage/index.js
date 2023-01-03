import React from "react";
import Expense from "../../components/Expense";
import Nav from "../../components/Nav";
import "./expensepage.css";
const ExpensePage = () => {
	return (
		<>
			<div className="expensepage-container">
				<Nav />
				<Expense />
			</div>
		</>
	);
};

export default ExpensePage;
