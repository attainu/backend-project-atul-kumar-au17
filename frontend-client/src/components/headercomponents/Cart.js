
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import { getUsers } from '../../redux/actions'

function Cart() {

    const [ users, setUsers ] = useState([])
    const allUsers = useSelector(state => state.users)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getUsers())

    },[])

    // const getUsers = async () => {

    //     const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    //     console.log(response.data)
    //     setUsers(response.data)

    // }


    return (
        <>

            <table className=''>
                <tr>
                    <th className='w-25'>Name</th>
                    <th className='w-25'>Cost</th>
                    <th className='w-25'>Quantity</th>
                    <th className='w-25'>Price</th>
                </tr>
                <tr>
                    <td>Chicken Curry</td>
                    <td>120</td>
                    <td>2</td>
                    <td>240</td>
                </tr>
            </table>


            <h3>Total Price: </h3>
            
            <button>Check Out</button>
            <p>
                {allUsers.map(u=><h1>{u.name}</h1>)}
            </p>
        </>
    )
}


export default Cart