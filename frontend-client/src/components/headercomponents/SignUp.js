
import { Link } from "react-router-dom";
import { useState } from 'react'

// import { Form, Button } from 'react-bootstrap';


function UserInputTag(props) {

	// console.log(props)

	return(

		<div className="mb-2">
			<label className="form-label">{props.name}</label>
			<input className="form-control" value={props.value} name={props.name} type={props.type} placeholder={`enter ${props.name}`} onChange={props.onChange} />
		</div>
		
		// <Form.Group className='mb-3'>
		// 	<Form.Label className="form-label">{props.name}</Form.Label>
		// 	<Form.Control type={props.type} placeholder={`Enter ${props.name}`} value= />
		// </Form.Group>
	)
}

function SignUp () {

	const [ name, setName ]					  = useState('')
	const [ mobile, setMobile ]				  = useState('')
	const [ email, setEmail ]				  = useState('')
	const [ password, setPassword ]			  = useState('')
	const [ acceptedTerms, setAcceptedTerms ] = useState(false);
	

	function handleSubmit(e) {

		e.preventDefault();
		
		console.log("handleSubmit() from SignUp() called")
		
		const data = `
		Name: ${name}
		Mobile: ${mobile}
		Email: ${email}
		Password: ${password}
		Accepted Terms: ${acceptedTerms}`;

		console.log("handleSubmit", data)

	}

	return (
			
		<form className="signUpInForm" onSubmit={handleSubmit}>

			<h1 className="SignIn">Sign UP</h1>

			<UserInputTag name={'name'} type={'string'} value={name} onChange={e=>setName(e.target.value)} />

			<UserInputTag name={'mobile'} type={'number'} value={mobile} onChange={e=>setMobile(e.target.value)} />

			<UserInputTag name={'email'} type={'email'} value={email} onChange={e=>setEmail(e.target.value)} />

			<UserInputTag name={'password'} type={'password'} value={password} onChange={e=>setPassword(e.target.value)} />

			{/* <div className="mb-3">
					<label htmlFor="Name" className="form-label">Name</label>
					<input name="name" type="String" className="form-control" id="Name" placeholder="Enter Name" value={name} onChange={e=>setName(e.target.value)} />
			</div>  */}

			<div className="mb-3 form-check">
					<input type="checkbox" className="form-check-input" name="acceptedTerms" value={acceptedTerms} onChange={e=>setAcceptedTerms(true)} />
					<label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
			</div>

			{/* <Form.Group className="mb-3 form-check">
				<Form.Check name='acceptedTerms' type="checkbox" label="Check me out" value={acceptedTerms} onChange={e=>setAcceptedTerms(e.target.value)} />
			</Form.Group> */}


			<button type="onSubmit" className="btn btn-primary">Sign UP</button>

			<div className="mt-2">
				Have an Account? <Link to="/login">Sign IN</Link>
			</div>

		</form>
	)
}

export default SignUp