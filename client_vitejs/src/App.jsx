import React, {useState} from 'react';
import './App.css';
import RegisterForm from './comps/RegisterForm';
import InfoPage from './comps/InfoPage';

const App = ()=>{
    
	const [ page, setPage ] = useState(<RegisterForm />)
	
	
	return (
	<div>
		<br/>
		<button onClick={()=>setPage(<InfoPage />)} className="buttons">InfoPage</button>
		<button onClick={()=>setPage(<RegisterForm />)} className="buttons">RegisterPage</button>
		<br/><hr/><br/>
		{page}	
	</div>
	
    
    )
}

export default App;