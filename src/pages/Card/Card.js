import React, { useContext } from "react";
import AddCard from "../../components/AddCard/AddCard";
import CardTop from "../../components/CardTop/CardTop";
import storeContext from "../../services/Store";
import "./Card.css";

const Card = () => {
	const store = useContext(storeContext);
	return (
		<div
			style={{
				background: store.backgroundColor,
			}}
			className="cardpage-container"
		>
			<CardTop />
			<AddCard />
		</div>
	);
};

export default Card;
