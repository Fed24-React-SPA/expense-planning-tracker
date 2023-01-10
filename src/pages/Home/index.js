import React from "react";
import "./home.css";
import Nav from "../../components/Nav";
import AddButton from "../../components/AddButton/AddButton";
import Transactions from "../../components/Transactions/Transactions";

const Home = () => {
	return (
		<>
			<div className="home-Container">
				<Nav />
				<Transactions />
				<AddButton />
			</div>
		</>
	);
};

export default Home;
