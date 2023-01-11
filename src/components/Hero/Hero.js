import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./hero.css";
const Hero = () => {
	const [total, setTotal] = useState(0);
	useEffect(() => {
		let message = JSON.parse(localStorage.getItem("datas"));
		console.log("local", message);
		let message2 = JSON.parse(localStorage.getItem("income"));
		console.log("local", message2);

		let sumIncome = message2.reduce((acc, obj) => {
			return acc + obj.income;
		}, 0);
		// console.log("totalexpense", sumIncome);
		let sumExpense = message.reduce((acc, obj) => {
			return acc + obj.amount;
		}, 0);
		// console.log("totalincome", sumIncome);
		setTotal(sumIncome - sumExpense);
	}, [total]);
	return (
		<div className="balanceBar">
			<Header />
			<p className="availableName">Available Balance</p>
			<h2 className="balanceNum">SEK {total}</h2>
		</div>
	);
};

export default Hero;
