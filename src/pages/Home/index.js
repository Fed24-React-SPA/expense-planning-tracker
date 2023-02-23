import React, { useContext } from "react";
import "./home.css";
import Nav from "../../components/Nav";
import AddButton from "../../components/AddButton/AddButton";
import Transactions from "../../components/Transactions/Transactions";
import storeContext from "../../services/Store";
const Home = () => {
	const store = useContext(storeContext);
	const homeStyles = {
		background: store.backgroundColor,
	};
	return (
		<>
			<div style={homeStyles} className="home-Container">
				<Nav />
				<Transactions />
				<AddButton />
			</div>
		</>
	);
};

export default Home;
