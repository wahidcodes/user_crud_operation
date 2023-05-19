import React, {useState} from 'react';

const InfoPage = () => {
	
	const [datas, setDatas] = useState([])

	const fetchEvent = (e) => {
		fetch('http://127.0.0.1:3000/api')
			.then(res=>res.json())
			.then(data=>setDatas(data))
			.then(console.log(datas))
	}
    
	return(
        <div>
            <h1>Info Page</h1>
			<button onClick={()=>{fetchEvent()}}>Fetch</button>
			<br/><br/>
			<table border="2" padding="5">
				<thead>
					<tr>
						<td><b>Username</b></td>
						<td><b>Email</b></td>
						<td><b>Password</b></td>
					</tr>
				</thead>
				<tbody>
						{datas.map((data)=><tr><td>{data.name}</td><td>{data.email}</td><td>{data.password}</td></tr>)}			
				</tbody>	

			</table>
        </div>
    )
}

export default InfoPage;