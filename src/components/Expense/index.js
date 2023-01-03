import React, { useEffect, useRef, useState } from "react";
import "./expense.css";
import moneyIcon from "../../images/money.png";
const Expense = () => {
	const name = useRef();
	const amount = useRef();
	const [datas, setDatas] = useState([]);
	const [category, setCategory] = useState("");
	const [payment, setPayment] = useState("");
	const [currency, setCurrency] = useState("");

	useEffect(() => {
		const datas = JSON.parse(localStorage.getItem("datas"));
		if (datas) {
			setDatas(datas);
		}
		console.log("local", datas);
	}, []);
	const submit = (e) => {
		e.preventDefault();
		const nameVal = name.current.value;
		const amountVal = amount.current.value;
		// store values into an object
		const expenseInfo = {
			name: nameVal,
			amount: Number(amountVal),
			currency: currency,
			category: category,
			date: new Date().toLocaleString("en-GB").replace(",", ""),
			payment: payment,
		};
		//save into localstorage
		localStorage.setItem("datas", JSON.stringify([...datas, expenseInfo]));
		//
		// store in datas array /// store new value with keeping previous value
		setDatas([...datas, expenseInfo]);
		// end of storing in datas array

		// reset all input
		setCategory("");
		setPayment("");
		setCurrency("");
		name.current.value = "";
		amount.current.value = "";
		console.log(datas);
	};
	return (
		<>
			<div className="expense-container">
				<form className="expense-form" onSubmit={submit}>
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
						defaultValue={"default"}
						onChange={(e) => {
							setCategory(e.target.value);
						}}
					>
						<option value="default" disabled hidden>
							Choose Category..
						</option>
						<option value={"Apparels"}>Apparels</option>
						<option value={"Electronics"}>Electronics</option>
						<option value={"Investments"}>Investments</option>
						<option value={"Life"}>Life</option>
						<option value={"Transportation"}>Transportation</option>
						<option value={"ChildCare"}>Child Care</option>
						<option value={"UtilityBills"}>Utility Bills</option>
						<option value={"CellPhone"}>Cell Phone</option>
						<option value={"Food-Groceries"}>Food And Groceries</option>
					</select>
					<select
						defaultValue={"default"}
						required
						onChange={(e) => {
							setCurrency(e.target.value);
						}}
					>
						<option value="default" disabled hidden>
							choose currency ....
						</option>
						<option value="SEK">SEK</option>
					</select>
					<select
						required
						defaultValue={"default"}
						onChange={(e) => {
							setPayment(e.target.value);
						}}
					>
						<option value="default" disabled hidden>
							Payement Mothod...
						</option>
						<option value="Physical-Cash">Physical Cash</option>
						<option value="Bank-Card">Bank Card</option>
					</select>
					<button>Submit</button>
				</form>
				<div className="transaction-container">
					<h3>My Transactions</h3>
					{datas.length > 0 ? (
						datas.map((data, i) => (
							<div className="inner-container" key={i}>
								<div className="left-div">
									<div className="left-div-imgcontainer">
										<img src={moneyIcon} alt="money" />
									</div>

									<div className="left-div-content">
										<p>{data.name}</p>
										<p>{data.date}</p>
									</div>
								</div>
								<div className="right-div">
									<p>
										<span>-</span>
										<span> {data.amount}</span>
										<span> {data.currency}</span>
									</p>
								</div>
							</div>
						))
					) : (
						<h1>... expense is loading</h1>
					)}
				</div>
			</div>
		</>
	);
};

export default Expense;
