import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ExpensePage from "../pages/ExpensePage";
import Statistics from "../pages/Statistics";
import Profile from "../pages/Profile";
import "./routescom.css";
const RoutesCom = () => {
	return (
		<>
			<BrowserRouter>
				<div className="parentnav">
					<Link className="navstyle" to={"/"}>
						{" "}
						Home{" "}
					</Link>
					<Link className="navstyle" to={"/expense"}>
						Expense
					</Link>
					<Link className="navstyle" to={"/statistics"}>
						Statistics
					</Link>
					<Link className="navstyle" to={"/profile"}>
						Profile
					</Link>
				</div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/expense" element={<ExpensePage />} />
					<Route path="/statistics" element={<Statistics />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default RoutesCom;
