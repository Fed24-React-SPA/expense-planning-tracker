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

	const handleClick = (e) => {
		console.log(e.target.value);
		setInput((prev) => [...prev, e.target.value]);
	};
	const submit = (e) => {
		e.preventDefault();
		setDataArray({
			name: name,
			input: input.join(""),
		});
		console.log("dataarray", dataArray);
		setTimeout(() => {
			navigate("/expense", {
				state: { name: name, input: input, id: 1100 },
			});
		}, 500);

		setInput("");
		setName("");
	};
	const removeItem = () => {
		// setInput(input.slice(0, -1)); or the next line
		setInput((previousArr) => previousArr.slice(0, -1));
		console.log(input);
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
					<input type="number" onChange={console.log("hi")} />
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
					<button value={1} onClick={(e) => handleClick(e, 1)}>
						1
					</button>
					<button value={2} onClick={(e) => handleClick(e, 2)}>
						2
					</button>
					<button value={3} onClick={(e) => handleClick(e, 3)}>
						3
					</button>
					<button value={4} onClick={(e) => handleClick(e, 4)}>
						4
					</button>
					<button value={5} onClick={(e) => handleClick(e, 5)}>
						5
					</button>
					<button value={6} onClick={(e) => handleClick(e, 6)}>
						6
					</button>
					<button value={7} onClick={(e) => handleClick(e, 7)}>
						7
					</button>
					<button value={8} onClick={(e) => handleClick(e, 8)}>
						8
					</button>
					<button value={9} onClick={(e) => handleClick(e, 9)}>
						9
					</button>
					<button value={"."} onClick={(e) => handleClick(e, ",")}>
						.
					</button>
					<button value={0} onClick={(e) => handleClick(e, 0)}>
						0
					</button>
					<button onClick={removeItem}>&#8592;|</button>
				</div>
			</section>
		</>
	);
};

export default Input;
