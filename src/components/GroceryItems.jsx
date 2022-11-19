import React from "react";
import { Card, CardBody } from "reactstrap";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { deleteGroceryItem } from "../utils/handleApi";

const GroceryItems = (props) => {
	function updateGroceryItem(id, itemName) {
		props.setItem(itemName);
		props.setItemId(id);
		props.setIsUpdating(true);
	}

	return (
		<React.Fragment>
			<div className="grocery-app__items">
				{props.allGroceries.map((item, key) => {
					return (
						<Card className="mb-2" key={key}>
							<CardBody className="grocery-app__item">
								<p className="mb-0">{item.text}</p>
								<div className="grocery-app__item-icons">
									<BiEdit
										className="icon"
										onClick={() => updateGroceryItem(item._id, item.text)}
									/>
									<AiFillDelete
										className="icon"
										onClick={() =>
											deleteGroceryItem(item._id, props.setAllGroceries)
										}
									/>
								</div>
							</CardBody>
						</Card>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default GroceryItems;
