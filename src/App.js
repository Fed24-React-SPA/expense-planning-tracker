import "./App.css";
import AddButton from "./components/AddButton/AddButton";
import NavbarFooter from "./components/NavbarFooter/NavbarFooter";

import Nav from "./components/Nav";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Expense from "./components/Expense";

function App() {
	return (
		<div className="App">
			<Nav />

			<Header />

			<Hero />
			<AddButton />
			<Expense />
			<NavbarFooter />
		</div>
	);
}

export default App;
