import axios from "axios";

const baseUrl = "https://fullstack-grocery-app-backend.onrender.com";

export const getAllGrocery = (setGrocery) => {
	axios.get(baseUrl).then(({ data }) => {
		setGrocery(data);
	});
};

export const handleAddGrocery = (text, setText, setGrocery) => {
	axios
		.post(`${baseUrl}/save`, { text })
		.then((data) => {
			console.log("the data is", data);
			setText("");
			getAllGrocery(setGrocery);
		})
		.catch((err) => {
			console.log("Error while Adding");
		});
};

export const updateGrocery = (
	itemId,
	item,
	setItem,
	setGrocery,
	setIsUpdating,
	setItemId
) => {
	const data = { _id: itemId, text: item };
	axios
		.post(`${baseUrl}/update`, data)
		.then((data) => {
			setItem("");
			setIsUpdating(false);
			getAllGrocery(setGrocery);
			setItemId("");
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
