import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./input.css";
const Input = () => {
	const [input, setInput] = useState([]);
	const [name, setName] = useState("");
	const [dataArray, setDataArray] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		console.log(dataArray);
	}, [dataArray]);
	const submit = (e) => {
		e.preventDefault();
		setDataArray({
			name: name,
			input: input,
		});
		console.log("dataarray", dataArray);
		setTimeout(() => {
			navigate("/expense", {
				state: { name: name, input: input },
			});
		}, 500);

		setInput("");
		setName("");
	};

	return (
		<>
			<section className="parent-input">
				<form onSubmit={submit} className="input-form">
					<div className="textaria-container">
						<textarea name="description" cols="5" rows="2" disabled></textarea>
						<span className="textarea-firstspan">-</span>
						<p className="textarea-ptag">
							SEK
							{input}
						</p>
					</div>
					<input
						type="number"
						required
						onChange={(e) => setInput(e.target.value)}
						placeholder="Amount"
					/>
					<input
						type="text"
						onChange={(e) => setName(e.target.value)}
						value={name}
						required
						placeholder="Add Description"
					/>
					<button>Insert Template</button>
				</form>
				<div className="input-container">
					<button disabled>1</button>
					<button disabled>2</button>
					<button disabled>3</button>
					<button disabled>4</button>
					<button disabled>5</button>
					<button disabled>6</button>
					<button disabled>7</button>
					<button disabled>8</button>
					<button disabled>9</button>
					<button disabled>.</button>
					<button disabled>0</button>
					<button>&#8592;|</button>
				</div>
			</section>
		</>
	);
};

export default Input;
