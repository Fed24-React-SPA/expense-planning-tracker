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
			</section>
		</>
	);
};
export default Income;
