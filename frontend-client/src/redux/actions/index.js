
import axios from 'axios';


export const ADD_DISH = "ADD_DISH"
export const REMOVE_DISH = 'REMOVE_DISH'
export const TOTAL_BILL = 'TOTAL_BILL'
export const GET_USERS_FROM_API = 'GET_USERS_FROM_API'


export const addDish = (dish) => {
    // console.log(dish)
    return {
        type: ADD_DISH,
        payload: dish
    }
}

export const removeDish = (dish) => {
    return {
        type: REMOVE_DISH,
        payload: dish
    }
}


export const totalCount = (count) => {
    return {
        type: TOTAL_BILL,
        payload: count
    }
}



export const getUsers = () => {

    return async (dispatch, getState) => {
    
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const allUsers = response.data

        dispatch({
            type: GET_USERS_FROM_API,
            payload: allUsers
        })

    }
}

