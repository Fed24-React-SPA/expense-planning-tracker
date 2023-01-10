import React, { useEffect, useState } from "react";
import Hero from "../Hero/Hero";
import moneyIcon from "../../images/money.png";
import "./transactions.css";

const Transactions = () => {
	const [datas, setDatas] = useState(
		JSON.parse(localStorage.getItem("datas")) || []
	);
	useEffect(() => {
		if (datas) {
			setDatas(datas);
		}
		console.log("local", datas);
	}, [datas]);
	const removeElement = (index) => {
		// remove from react app with filter method
		const newData = datas.filter((_ali, i) => i !== index);
		setDatas(newData);
		// props.chooseMessage(newData);

		// we can use another method to remove from localstorage,but this method also works!
		localStorage.setItem("datas", JSON.stringify(newData));
		// remove from localStorage
	};
	return (
		<div className="transaction">
			<Hero />
			{datas.length > 0 ? (
				datas.map((data, i) => (
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
				<h1>... data is loading</h1>
			)}
		</div>
	);
};

export default Transactions;
