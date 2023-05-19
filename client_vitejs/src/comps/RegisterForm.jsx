import React, {useState} from 'react';


const RegisterForm = () => {
    
    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [password,setPassword] = useState('')


	const fetchEvent = (e) => {
		e.preventDefault();
		fetch('http://127.0.0.1:3000/api')
			.then(res=>res.json())
			.then(data=>console.log(data))
	}
	
	const postEvent = (e) => {
		e.preventDefault();
		const obj = {name,mail,password};
		fetch('http://127.0.0.1:3000/api',{
			method:"POST",
			headers:{"Content-Type":"application/json"},
			body: JSON.stringify(obj)
		})
		.then(()=>{console.log("Account created")})    	
	}

    
    return(
        <div>
            <h1>Sign up form</h1><br/>
            <form id='form' onSubmit={postEvent} >
                Username: <input type="text" name='fname' value={name} onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
                Email: <input type="text" name='mail' value={mail} onChange={(e)=>{setMail(e.target.value)}} /><br/><br/>
                Password: <input type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br/><br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default RegisterForm;