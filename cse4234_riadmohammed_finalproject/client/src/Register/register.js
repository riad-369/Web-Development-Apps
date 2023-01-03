import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";

import "./register.css"

export default function Register () {
	const navigate = useNavigate();
	
	const [user, setUser] = useState({
		ft_name: String,
		lt_name: String,
		email: String,
		password: String,
	});
	
	// Handles the changes in the text field
	const HandleChange = (e) => {
		setUser({...user, [e.target.name]:[e.target.value]});
	}
	
	// Handle the user submission for registration
	const HandleSubmit = async (e) => {
		e.preventDefault();
		const result = await axios.post("http://localhost:3000/register/sign-up", user);
		alert(result.data.message);
		navigate("/");
	}

	return (
		<div className={"form-page"} >
			<div className={"main-wrapper"}>
				<h2 id={"form-title"}>Register</h2>
				<div className={"inner-wrapper"}>
					<form className={"form-wrapper"}>
						<div className={"input-wrapper"}>
							<label>First Name</label>
							<input
								type={"text"}
								className={"form-input"}
								name={"ft_name"}
								value={user.ft_name}
								onChange={HandleChange}
							/>
						</div>
						<br />
						<div className={"input-wrapper"}>
							<label>Last Name</label>
							<input
								type={"text"}
								className={"form-input"}
								name={"lt_name"}
								value={user.lt_name}
								onChange={HandleChange}
							/>
						</div>
						<br />
						<div className={"input-wrapper"}>
							<label>Email</label>
							<input
								type={"text"}
								className={"form-input"}
								name={"email"}
								value={user.email}
								onChange={HandleChange}
							/>
						</div>
						<br />
						<div className={"input-wrapper"}>
						<label>Password</label>
							<input
								type={"password"}
								className={"form-input"}
								name={"password"}
								value={user.password}
								onChange={HandleChange}
							/>
						</div>
					</form>
				</div>
				<span id={"registerB-wrapper"}>
					<button type={"submit"} className={"register-button"} onClick={(e) => HandleSubmit(e)}>Submit</button>
				</span>
			</div>
			
		</div>
	)
}