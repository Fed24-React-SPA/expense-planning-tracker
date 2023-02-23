import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Storeprovider } from "./services/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Storeprovider>
			<App />
		</Storeprovider>
	</React.StrictMode>
);
