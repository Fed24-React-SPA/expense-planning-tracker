import React, { useEffect, useState } from "react";
import moneyIcon from "../../images/money.png";
import Header from "../Header/Header";
import "./transactions.css";

const Transactions = () => {
	const [total, setTotal] = useState(0);
	const [expense, setExpense] = useState(
		JSON.parse(localStorage.getItem("datas")) || []
	);
	const [income, setIncome] = useState(
		JSON.parse(localStorage.getItem("income")) || []
	);
	useEffect(() => {
		if (expense) {
			setExpense(expense);
		}
		if (income) setIncome(income);
		let sumIncome = income.reduce((acc, obj) => {
			return acc + obj.income;
		}, 0);
		// console.log("totalexpense", sumIncome);
		let sumExpense = expense.reduce((acc, obj) => {
			return acc + obj.amount;
		}, 0);
		// console.log("totalincome", sumIncome);
		setTotal(sumIncome - sumExpense);
		console.log("local", expense);
	}, [expense, income]);
	const removeElement = (index) => {
		// remove from react app with filter method
		const newData = expense.filter((_ali, i) => i !== index);
		setExpense(newData);
		// props.chooseMessage(newData);

		// we can use another method to remove from localstorage,but this method also works!
		localStorage.setItem("datas", JSON.stringify(newData));
		// remove from localStorage
	};
	return (
		<>
			<div className="transaction">
				<Header />
				<div className="balanceBar">
					<p className="availableName">Available Balance</p>
					<h2 className="balanceNum">SEK {total}</h2>
				</div>
				{/* <Hero /> */}
				{expense.length > 0 ? (
					expense.map((data, i) => (
						<div className="inner" key={i}>
							<div className="left">
								<div className="left-imgcontainer">
									<img src={moneyIcon} alt="money" />
								</div>

								<div className="div-content">
									<p>{data.name}</p>
									<p>{data.date}</p>
								</div>
							</div>
							<div className="right">
								<p>
									<span>-</span>
									<span> {data.amount}</span>
									<span> {data.currency}</span>
									<button
										onClick={() => removeElement(i)}
										style={{
											color: "red",
											backgroundColor: "black",
											padding: "4px 8px",
											marginLeft: 5,
										}}
									>
										X
									</button>
								</p>
							</div>
						</div>
					))
				) : (
					<h3>... data is loading</h3>
				)}
			</div>
		</>
	);
};

export default Transactions;
