import { ADD_DISH, REMOVE_DISH, TOTAL_BILL, GET_USERS_FROM_API } from "../actions"
import { combineReducers } from 'redux'



const dishName = []

const modifyingList = (state = dishName, action) => {

    // console.log(action.payload)

    switch (action.type) {

        case ADD_DISH:
            return {
                ...state,
                dishName: action.payload
            }


        case REMOVE_DISH:
            return {
                ...state,
                dishName: action.payload
            }


        default:
            return state
    }
}


const incCount = 0

const modifyingCount = (state = incCount, action) => {
    // console.log({
    //     'state': state, 
    //     'action': action}
    // )

    switch (action.type) {

        case TOTAL_BILL:
            return incCount = action.payload


        default:
            return state
   
        }
 
}


const initialState = {
    users: []
}

const changeUser = (state = initialState, action) => {

    switch (action.type) {
        case GET_USERS_FROM_API:
            return {
                ...state,
                users: action.payload
            }
    }
}

const allReducers = combineReducers(
    {
        modifyingList, modifyingCount, changeUser
    }
)


export default allReducers;