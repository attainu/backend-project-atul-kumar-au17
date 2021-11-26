
import { Link } from "react-router-dom";
import { useState } from 'react'

// import { useSelector, useDispatch } from 'react-redux';

function UserInputTag(props) {

    return(
        <div className="mb-2">
            <label className="form-label">{props.name}</label>
            <input className="form-control" name={props.name} type={props.type} placeholder={`enter ${props.name}`} value={props.value} onChange={props.onChange} />
        </div>
    )
}

function Login () {

    // const userStore = useSelector(state => state.user)
    // const dispatch = useDispatch()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ acceptedTerms, setAcceptedTerms ] = useState(false);

    // if (userStore.isLoggedIn === true) {
    //     return "user is logged in"
    // }

    


    function handleSubmit(e) {
        e.preventDefault();

        console.log("handleSubmit() from Login() is called")

        const data = `
        Email: ${email}
        Password: ${password}`

        console.log("handleSubmit", data)
        alert('You have submitted the form.')
    }


    return (
        <form className="signUpInForm" onSubmit={handleSubmit}>

            <h1 className="SignIn">Sign-IN</h1>

            <UserInputTag name={'email'} type={'email'} value={email} onChange={e=>setEmail(e.target.value)} />

            <UserInputTag name={'password'} type={'password'} value={password} onChange={e=>setPassword(e.target.value)} />

            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" name="acceptedTerms" value={acceptedTerms} onChange={e=>setAcceptedTerms(e.target.value)} />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>

            <button type="submit" className="btn btn-primary">Sign IN</button> <br />

            <div className="mt-2">
                Dont have an Account? <Link to="/signup">Sign UP</Link>
            </div>

        </form>
    )
}

export default Login