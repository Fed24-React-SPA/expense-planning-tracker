import React, { useEffect, useRef, useState } from "react";
import "./income.css";
const Income = (props) => {
	const income = useRef();
	const [incomeData, setIncomeData] = useState([]);
	const [incomeCurrency, setIncomeCurrency] = useState("");
	useEffect(() => {
		const incomeData = JSON.parse(localStorage.getItem("income"));
		if (incomeData) {
			setIncomeData(incomeData);
		}
		console.log("income array", incomeData);
	}, []);
	useEffect(() => {
		console.log(incomeData);
	}, [incomeData]);
	const handleClick = () => {
		setIncomeData([
			...incomeData,
			{ income: Number(income.current.value), currency: incomeCurrency },
		]);
		localStorage.setItem(
			"income",
			JSON.stringify([
				...incomeData,
				{ income: Number(income.current.value), currency: incomeCurrency },
			])
		);
		props.chooseMessage2([
			...incomeData,
			{ income: Number(income.current.value), currency: incomeCurrency },
		]);
		income.current.value = "";
		setIncomeCurrency("");
	};
	return (
		<>
			<section className="parent-income-container">
				<h1>income component</h1>
				<div className="income-container">
					<input type="number" placeholder="Amount of income" ref={income} />
					<select
						defaultValue={"default"}
						onChange={(e) => setIncomeCurrency(e.target.value)}
					>
						<option value="default" disabled>
							currency...
						</option>
						<option value="SEK">SEK</option>
					</select>
					<button onClick={handleClick}>Insert Template</button>
				</div>
				{/* {incomeData.length > 0 ? (
					incomeData.map((data, i) => (
						<div key={i}>
							<h3>{data.income}</h3>
						</div>
					))
				) : (
					<h4>...income is loading</h4>
				)} */}
				{/* {incomeData.length > 0 ? (
					<h5>
						Total Income :
						{incomeData.reduce((acc, obj) => {
							return acc + obj.income;
						}, 0)}
					</h5>
				) : (
					<h4>...income is loading</h4>
				)} */}
			</section>
		</>
	);
};
export default Income;
