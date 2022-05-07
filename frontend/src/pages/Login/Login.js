import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, authenticate } from "../../components/Utils/authHelper";

function Login() {
	const [values, setValues] = useState({});
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();

		signIn(values).then((data) => {
			if (data.access) {
				authenticate(data.access, () => {
					navigate("/");
				});
			} else {
				alert("Invalid Credentials");
			}
		});
	};
	const handleChange = (param) => (event) => {
		event.preventDefault();
		setValues({ ...values, [param]: event.target.value });
	};

	return (
		<div className="login-card h-screen">
			<h1 className="text-center font-pt-serif mt-10 text-4xl capitalize">
				Login
			</h1>
			<div className="page-title-underline"></div>
			<form action="" method="post" className="max-w-[30%] ml-[35%]">
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						placeholder="Email"
						className="input-box"
						onChange={handleChange("email")}
					/>
				</div>
				<div>
					<label htmlFor="password1">Password</label>
					<input
						type="password"
						id="password1"
						placeholder="Password"
						className="input-box"
						onChange={handleChange("password")}
					/>
				</div>
				<button className="submit" type="submit" on onClick={handleSubmit}>
					Login
				</button>
				<p className="underline my-3">Forgot your password?</p>
				<p>
					Don't have an account?
					<a href="/signup" className=" italic underline text-cyan-800 my-3">
						Signup
					</a>
				</p>
			</form>
		</div>
	);
}

export default Login;
