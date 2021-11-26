
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'


const add = `bg-success rounded-pill fs-5 py-0`
const remove = `bg-danger rounded-pill fs-5 py-0`


function Dishes(props) {
	

	const [ count, setCount ] = useState(0);

	
	
	const dish = props.dish
	
	function addItem() {
		// console.log(count)
		let newCount = count + 1
		setCount(newCount)
		props.addDish(dish, newCount)
	}
	
	
	function removeItem() {
		// console.log(count)
		let newCount = count - 1
		setCount(newCount)
		props.addDish(dish, newCount)
	}
	
	
	return (
		<div className="shadow p-3 m-1 bg-body rounded w-25 d-flex flex-column justify-content-evenly">
			<p className="text-center">Name: {dish.name}</p> 
			<p className="text-center">Price: {dish.price}</p>
			<div className="d-flex justify-content-between">
				<button className={remove} onClick={removeItem}>-</button>
				<p>{count}</p>
				<button className={add} onClick={addItem}>+</button>
			</div>
		</div>
	)
}


export default Dishes;