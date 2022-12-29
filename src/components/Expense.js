import React, { useEffect, useRef, useState } from "react";

const Expense = () => {
	const name = useRef();
	const amount = useRef();
	const [datas, setDatas] = useState([]);
	const [category, setCategory] = useState("");
	const [payment, setPayment] = useState("");
	const [currency, setCurrency] = useState("");
	// const [income, setIncome] = useState(2000);
	useEffect(() => {
		const datas = JSON.parse(localStorage.getItem("datas"));
		if (datas) {
			setDatas(datas);
		}
		console.log("local", datas);
	}, []);
	useEffect(() => {
		console.log(datas);
	}, [datas]);

	const submit = (e) => {
		e.preventDefault();
		const nameVal = name.current.value;
		const amountVal = amount.current.value;

		// Do i need to add async await for localsorage?
		localStorage.setItem(
			"datas",
			JSON.stringify([
				...datas,
				{
					_id: Math.floor(Math.random() * 1000 + 1),
					name: nameVal,
					amount: Number(amountVal),
					currency: currency,
					category: category,
					date: new Date().toLocaleString("en-GB").replace(",", ""),
					payment: payment,
				},
			])
		);
		setDatas([
			...datas,
			{
				_id: Math.floor(Math.random() * 1000 + 1),
				name: nameVal,
				amount: Number(amountVal),
				currency: currency,
				category: category,
				date: new Date().toLocaleString("en-GB").replace(",", ""),
				payment: payment,
			},
		]);
		setCategory("");
		setPayment("");
		setCurrency("");
		name.current.value = "";
		amount.current.value = "";
		console.log(datas);
	};
	return (
		<>
			<div>
				<p>
					Total Expense :
					{datas.reduce((acc, obj) => {
						return acc + obj.amount;
					}, 0)}
				</p>
				<h1>Expense Component</h1>
			</div>
			<form onSubmit={submit}>
				<input
					required
					type={"text"}
					ref={name}
					placeholder={"Add Description"}
				/>
				<input
					required
					type={"number"}
					ref={amount}
					placeholder={"Expense Amount"}
				/>
				<select
					required
					value={category}
					onChange={(e) => {
						setCategory(e.target.value);
					}}
				>
					<option value={"Apparels"}>Apparels</option>
					<option value={"Electronics"}>Electronics</option>
					<option value={"Geroceries"}>Geroceries</option>
					<option value={"Investments"}>Investments</option>
					<option value={"Life"}>Life</option>
					<option value={"Transportation"}>Transportation</option>
					<option value={"ChildCare"}>child Care</option>
					<option value={"UtilityBills"}>Utility Bills</option>
					<option value={"CellPhone"}>Cell Phone</option>
					<option value={"Food-Groceries"}>Food and Groceries</option>
				</select>
				<select
					value={currency}
					required
					onChange={(e) => {
						setCurrency(e.target.value);
					}}
				>
					<option value="USD">USD</option>
					<option value="IRRIAL">IR-RIAL</option>
					<option value="EUR">EUR</option>
					<option value="SEK">SEK</option>
					<option value="GBP">GBP</option>
					<option value="JPY">JPY</option>
					<option value="INR">INR</option>
				</select>
				<select
					value={payment}
					required
					onChange={(e) => {
						setPayment(e.target.value);
					}}
				>
					<option value="Physical-Cash">Physical Cash</option>
					<option value="Bank-Card">Bank Card</option>
				</select>
				<button>submit</button>
			</form>
			<div>
				{datas.length > 0 ? (
					datas.map((data, i) => (
						<div key={i}>
							<p>
								{data.name} : ghjv{data.category}
							</p>
							<p>amount{data.amount}</p>
							<p>currency {data.currency}</p>

							{/* <p>remaining : {income}</p> */}
						</div>
					))
				) : (
					<h1>... data is loading</h1>
				)}
			</div>
		</>
	);
};

export default Expense;
