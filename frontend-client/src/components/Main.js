
import Dishes from './maincomponents/Dishes'
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';


function MainLayout () {
	
	const [ dishes, setDishes ] = useState([])

	const finalCount = useSelector(state => state.modifyingCount)

		
	const foodlist = [
    { id: 1, name: "Chicken Curry", price: 100 },
    { id: 2, name: "Mutton Curry", price: 120 },
    { id: 3, name: "Panner Curry", price: 200 },
    { id: 4, name: "Aloo Curry", price: 80 },
    { id: 5, name: "Fish Curry", price: 150 },
    { id: 6, name: "Chicken Biryani", price: 100 },
    { id: 7, name: "Mutton Biryani", price: 120 },
    { id: 8, name: "Panner Biryani", price: 200 },
    { id: 9, name: "Aloo Biryani", price: 80 },
    { id: 10, name: "Fish Biryani", price: 150 },
    { id: 11, name: "Mixed Biryani", price: 125 },
    { id: 12, name: "Dum-Biryani", price: 250 },
  ];


	function addDish(passedDish, quantity){
		const dishInfo = {
			quantity: quantity,
			dish: passedDish
		}

		// [{quantity: 2, dish}]
		let newDish = false

		if (dishes.length === 0) {
			newDish = true
		}

		const updatededDishes = dishes.map(d => {

			if (d.dish.id === passedDish.id) {
				d.quantity = quantity
				newDish = false
				return d
			}else{
				newDish = true
				return d
			}
		});

		if (newDish) {
			setDishes([...updatededDishes, dishInfo])
		}else{
			setDishes([...updatededDishes])
		}
	}


	function removeDish(removedDish, quantity) {

		const dishInfo = {
			quantity: quantity,
			dish: removedDish
		}

		let newDish = false;

		if (dishes.length !== 0) {
			newDish = true
		}

		const updatededDishes = dishes.map(d => {

			if (d.dish.id === removedDish.id) {
				d.quantity = quantity
				newDish = false
				return d
			} else {
				newDish = true
				return d
			}
		});

		if (newDish) {
			setDishes([...updatededDishes, dishInfo])
		} else {
			setDishes([...updatededDishes])
		}
	}

	// console.log(dishes.map(dish => { return dish.quantity}))
	// console.log(typeof(dishes))



	return (

		<div className="container d-flex justify-content-around">

			<div className="foodlist w-75 border border-dark me-1 shadow p-1 mb-5 bg-body rounded-start">

				<h3 className="text-center"> Dishes </h3>

				<div className="d-flex flex-wrap justify-content-evenly p-1">

					{foodlist.map(item => (
					// <Dishes name={item.name} price={item.price} increment={increment} decrement={decrement}  />
					<Dishes dish={item} addDish={addDish} removeDish={removeDish}  />
					))}

				</div>

			</div>

			<div className="bill w-25 border border-dark shadow p-1 mb-5 bg-body rounded-end">

				<h3>Items in Cart</h3>
				{ 
					dishes.map(d => {
						return (
							<div>
								<h2>{d.dish.name}</h2>
								<h2>{d.quantity}</h2>
							</div>
						)
					})
				}
				{/* <p>Total: {dishes}</p> */}
			</div>

		</div>

	)
};

export default MainLayout