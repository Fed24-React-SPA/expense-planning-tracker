import React from "react";
import AddCard from "../../components/AddCard/AddCard";
import CardTop from "../../components/CardTop/CardTop";
import "./Card.css";

const Card = () => {
	return (
		<div className="cardpage-container">
			<CardTop />
			<AddCard />
		</div>
	);
};

export default Card;
