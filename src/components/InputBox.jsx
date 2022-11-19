import React from "react";
import { FormGroup, Input, Button } from "reactstrap";
import { handleAddGrocery, updateGrocery } from "../utils/handleApi";

const InputBox = (props) => {
	return (
		<FormGroup className="pt-2 pb-2 d-flex">
			<Input
				type="text"
				name="itemName"
				id="itemName"
				placeholder="Enter Item To Add"
				value={props.item}
				onChange={(e) => props.setItem(e.target.value)}
			/>
			<Button
				className="ms-2"
				color="success"
				onClick={() =>
					props.isUpdating
						? updateGrocery(
								props.itemId,
								props.item,
								props.setItem,
								props.setAllGroceries,
								props.setIsUpdating,
								props.setItemId
						  )
						: handleAddGrocery(props.item, props.setItem, props.setAllGroceries)
				}
			>
				{props.isUpdating ? "Update" : "Add"}
			</Button>
		</FormGroup>
	);
};

export default InputBox;
