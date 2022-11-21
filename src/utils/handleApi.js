import axios from "axios";

// const baseUrl = "https://fullstack-grocery-app-backend.onrender.com/";
const baseUrl = "http://localhost:5000";

export const getAllGrocery = (setGrocery) => {
	axios.get(baseUrl).then(({ data }) => {
		setGrocery(data);
	});
};

export const handleAddGrocery = (text, setText, setGrocery) => {
	axios
		.post(`${baseUrl}/save`, { text, isPurchased: false })
		.then((data) => {
			console.log("the data is", data);
			setText("");
			getAllGrocery(setGrocery);
		})
		.catch((err) => {
			console.log("Error while Adding");
		});
};

export const updateGrocery = (itemId, isPurchased, setGrocery) => {
	console.log("heere", isPurchased);
	const data = { _id: itemId, isPurchased: !isPurchased };
	axios
		.post(`${baseUrl}/update`, data)
		.then((data) => {
			getAllGrocery(setGrocery);
		})
		.catch((err) => {
			console.log("Error while Updating");
		});
};

export const deleteGroceryItem = (itemId, setGrocery) => {
	const data = { _id: itemId };
	axios
		.post(`${baseUrl}/delete`, data)
		.then((data) => {
			getAllGrocery(setGrocery);
		})
		.catch((err) => {
			console.log("Error while Updating");
		});
};
