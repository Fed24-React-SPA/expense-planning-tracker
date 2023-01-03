import React from "react";
import "./App.css";
import NavbarFooter from "./components/NavbarFooter/NavbarFooter";
import Home from "./pages/Home";
import ExpensePage from "./pages/ExpensePage";
import Statistics from "./pages/Statistics";
import Profile from "./pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/expense" element={<ExpensePage />} />
				<Route path="/statistics" element={<Statistics />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
			<NavbarFooter />
		</BrowserRouter>
	);
};

export default App;
