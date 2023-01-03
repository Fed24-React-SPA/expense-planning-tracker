import "./App.css";





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
      	<Expense />

		</div>

	);
}

export default App;
