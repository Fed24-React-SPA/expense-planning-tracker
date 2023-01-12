import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./expense.css";
// import moneyIcon from "../../images/money.png";
const Expense = (props) => {
	const name = useRef();
	const amount = useRef();
	const [datas, setDatas] = useState([]);
	const [category, setCategory] = useState("");
	const [payment, setPayment] = useState("");
	const [currency, setCurrency] = useState("");
	const { state } = useLocation();
	const navigate = useNavigate();
	console.log("newState", { state });
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
		const expenseInfo = {
			id: Math.floor(Math.random() * 1000 + 1),
			name: nameVal,
			amount: Number(amountVal),
			currency: currency,
			category: category,
			date: new Date().toLocaleString("en-GB").replace(",", ""),
			payment: payment,
		};
		localStorage.setItem("datas", JSON.stringify([...datas, expenseInfo]));
		setDatas([...datas, expenseInfo]);
		props.chooseMessage([...datas, expenseInfo]);
		setCategory("");
		setPayment("");
		setCurrency("");
		name.current.value = "";
		amount.current.value = "";
		state.name = "";
		state.input = "";
		console.log(datas);
		setTimeout(() => {
			navigate("/");
		}, 1000);
	};

	return (
		<>
			<div className="expense-container">
				<form className="expense-form" onSubmit={submit}>
					<input
						required
						type={"text"}
						value={state.name}
						ref={name}
						placeholder={"Add Description"}
					/>
					<input
						required
						type={"number"}
						//
						// value={state.input !== "" ? state.input : null}
						value={state.input}
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
			</div>
		</>
	);
};

export default Expense;
