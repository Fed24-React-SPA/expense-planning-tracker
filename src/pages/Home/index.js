import React from "react";
import "./home.css";
import Nav from "../../components/Nav";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import AddButton from "../../components/AddButton/AddButton";

const Home = () => {
	return (
		<>
			<div className="home-Container">
				<Header />
				<Hero />
				<Nav />
				<AddButton />
			</div>
		</>
	);
};

export default Home;
