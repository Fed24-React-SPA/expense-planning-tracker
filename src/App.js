import "./App.css";
import AddButton from "./Components/AddButton/AddButton";





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


		</div>

	);
}

export default App;
