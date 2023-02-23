import React, { useContext } from "react";
import "./statistics.css";
import Nav from "../../components/Nav/index";
import storeContext from "../../services/Store";

const Statistics = () => {
	const store = useContext(storeContext);
	return (
		<div
			style={{
				background: store.backgroundColor,
			}}
			className="statisticspage-container"
		>
			<Nav />
			<div className="statistics-container">
				<h2 className="statistics-container__title">Insight</h2>
			</div>

			<div className="statitics-container__options">
				<h3 className="statitics-container__options-stat">Statistics</h3>
				<h3 className="statitics-container__options-saveplan">Saving plan</h3>
			</div>

			<div className="saving-plan__container">
				<form className="saving-plan__form">
					<div className="saving-plan__new-plan">
						<h4 className="new-plan">+ New Plan</h4>
						<h5 className="text-plan">Enter the parameters of the month:</h5>
					</div>

					<input
						type="text"
						className="saving-plan__input-income"
						placeholder="Fixed income"
					/>
					<input
						type="text"
						className="saving-plan__input-costs"
						placeholder="Fixed costs"
					/>

					<button type="submit" className="btnSave">
						Save
					</button>
				</form>
			</div>
		</div>
	);
};

export default Statistics;
