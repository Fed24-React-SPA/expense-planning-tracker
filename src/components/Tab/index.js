import React, { useEffect, useState } from "react";
import "./tab.css";
import Expense from "../Expense";
import Income from "../Income";

const Tab = () => {
	console.log();
	const [currentTab, setCurrentTab] = useState("expense");
	const [message, setMessage] = useState([]);
	const [message2, setMessage2] = useState([]);
	const [total, setTotal] = useState(0);
	console.log("total", total);
	useEffect(() => {
		const message = JSON.parse(localStorage.getItem("datas"));
		if (message) {
			setMessage(message);
		}
		console.log("local", message);

		const message2 = JSON.parse(localStorage.getItem("income"));
		if (message2) {
			setMessage2(message2);
		}
		console.log("local", message2);
	}, []);
	// calculation for substract income - expense
	useEffect(() => {
		const expenseValue = [...message];
		const incomeValue = [...message2];
		let sumIncome = incomeValue.reduce((acc, obj) => {
			return acc + obj.income;
		}, 0);
		console.log("totalexpense", sumIncome);
		let sumExpense = expenseValue.reduce((acc, obj) => {
			return acc + obj.amount;
		}, 0);
		console.log("totalincome", sumIncome);
		setTotal(sumIncome - sumExpense);
	}, [message, message2]);
	// end calculation for substract income - expense

	const chooseMessage = (message) => {
		setMessage(message);
	};
	const chooseMessage2 = (message2) => {
		setMessage2(message2);
	};

	const tabList = [
		{
			name: "income",
			label: "INCOME",
			content: <Income chooseMessage2={chooseMessage2} />,
		},
		{
			name: "expense",
			label: "EXPENSE",
			content: <Expense chooseMessage={chooseMessage} />,
		},
	];

	return (
		<div className="simple-tabs">
			<h6>Tab component(children : expense,income)</h6>
			{/* data comes from child into parent */}
			{console.log("expense", message)}
			{console.log("income", message2)}
			<h2>
				Income :
				{message2.reduce((acc, obj) => {
					return acc + obj.income;
				}, 0)}
			</h2>
			<h4>
				Expense :
				{message.reduce((acc, obj) => {
					return acc + obj.amount;
				}, 0)}
			</h4>
			{/* end - data comes from child into parent */}
			<h5>
				Avaibalble Money <span>{total}</span>
			</h5>

			<div className="tabs">
				{tabList.map((tab, i) => (
					<button
						key={i}
						onClick={() => setCurrentTab(tab.name)}
						className={tab.name === currentTab ? "btnclass active" : "btnclass"}
					>
						{tab.label}
					</button>
				))}
			</div>
			{tabList.map((tab, i) => {
				if (tab.name === currentTab) {
					return <div key={i}>{tab.content}</div>;
				} else {
					return null;
				}
			})}
		</div>
	);
};
export default Tab;
