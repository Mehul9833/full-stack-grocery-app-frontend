import React from "react";
import { Card, CardBody, Button } from "reactstrap";
import { deleteGroceryItem, updateGrocery } from "../utils/handleApi";

const GroceryItems = (props) => {
	return (
		<React.Fragment>
			<div className="grocery-app__items">
				{props.allGroceries.map((item, key) => {
					return (
						<Card className="mb-2" key={key}>
							<CardBody className="grocery-app__item">
								<p
									className={`mb-0 ${
										item.isPurchased && "grocery-app__strike"
									}`}
								>
									{item.text}
								</p>
								<div className="grocery-app__item-icons">
									<Button
										onClick={() =>
											updateGrocery(
												item._id,
												item.isPurchased,
												props.setAllGroceries
											)
										}
										className="me-2"
										color="warning"
									>
										{item.isPurchased ? "Cancel" : "Buy"}
									</Button>

									<Button
										onClick={() =>
											deleteGroceryItem(item._id, props.setAllGroceries)
										}
										color="danger"
									>
										Delete
									</Button>
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

// <BiEdit
// 	className="icon"
// 	onClick={() => updateGroceryItem(item._id, item.text)}
// />;
