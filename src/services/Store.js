import { createContext, useState } from "react";

const store = {
	backgroundColor: "#ccc",
	setbackgroundColor: () => {},
};
const storeContext = createContext(store);

export default storeContext;

export function Storeprovider(props) {
	const [backgroundColor, setBackgroundColor] = useState("#1E1E1E");

	const storevalue = {
		backgroundColor: backgroundColor,
		setbackgroundColor: setBackgroundColor,
	};

	return (
		<storeContext.Provider value={storevalue}>
			{props.children}
		</storeContext.Provider>
	);
}
