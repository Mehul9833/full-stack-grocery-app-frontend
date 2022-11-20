import React, { useState, useEffect } from "react";

// Components
import GroceryItems from "./components/GroceryItems";
import InputBox from "./components/InputBox";
import { getAllGrocery } from "./utils/handleApi";

function App() {
	const [allGroceries, setAllGroceries] = useState([]);
	const [item, setItem] = useState("");
	const [isUpdating, setIsUpdating] = useState(false);
	const [itemId, setItemId] = useState("");

	useEffect(() => {
		getAllGrocery(setAllGroceries);
	}, []);

	return (
		<div className="App">
			<h1 className="text-center">Grocery App</h1>

			<div className="grocery-app">
				<InputBox
					item={item}
					setItem={setItem}
					setAllGroceries={setAllGroceries}
					isUpdating={isUpdating}
					itemId={itemId}
					setItemId={setItemId}
					setIsUpdating={setIsUpdating}
				/>
				<GroceryItems
					allGroceries={allGroceries}
					setIsUpdating={setIsUpdating}
					setItemId={setItemId}
					setItem={setItem}
					isUpdating={isUpdating}
					setAllGroceries={setAllGroceries}
				/>
			</div>
		</div>
	);
}

export default App;
