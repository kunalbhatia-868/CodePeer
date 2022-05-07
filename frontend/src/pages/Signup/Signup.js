import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
	const [values, setValues] = useState({
		username: "",
		first_name: "",
		last_name: "",
		email: "",
		password: "",
		password2: "",
		bio: "",
		github_id: "",
	});

	const navigate = useNavigate();

	const handleChange = (name) => (event) => {
		event.preventDefault();
		setValues({ ...values, [name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch(`${process.env.REACT_APP_BACKEND}user/signup/`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		}).then((data) => {
			if (data.status === 201) {
				navigate("/login");
			} else {
				setValues({
					...values,
					username: "",
					first_name: "",
					last_name: "",
					email: "",
					password: "",
					password2: "",
					bio: "",
					github_id: "",
				});
				alert("Please Fill you Form Carefully .");
			}
		});
	};

	return (
		<div>
			<h1 className="text-center font-pt-serif mt-10 text-4xl capitalize">
				Register
			</h1>
			<div className="page-title-underline"></div>
			<form action="" method="post" className=" max-w-[40%] ml-[30%]">
				<div>
					<label htmlFor={"username"}>{"Username"}</label>
					<input
						type="text"
						name={"username"}
						placeholder={"Username"}
						className="input-box"
						onChange={handleChange("username")}
					/>
				</div>
				<div>
					<label htmlFor={"first-name"}>{"First Name"}</label>
					<input
						type="text"
						name={"first-name"}
						placeholder={"First Name"}
						className="input-box"
						onChange={handleChange("first_name")}
					/>
				</div>
				<div>
					<label htmlFor={"last-name"}>{"Last Name"}</label>
					<input
						type="text"
						name={"last-name"}
						placeholder={"Last Name"}
						className="input-box"
						onChange={handleChange("last_name")}
					/>
				</div>
				<div>
					<label htmlFor={"email"}>{"Email Address"}</label>
					<input
						type="text"
						name={"email"}
						placeholder={"Email Address"}
						className="input-box"
						onChange={handleChange("email")}
					/>
				</div>
				<div>
					<label htmlFor={"password1"}>{"Password"}</label>
					<input
						type="password"
						name={"password1"}
						placeholder={"Password"}
						className="input-box"
						onChange={handleChange("password")}
					/>
				</div>
				<div>
					<label htmlFor={"password2"}>{"Confirm Password"}</label>
					<input
						type="password"
						name={"password2"}
						placeholder={"Confirm Password"}
						className="input-box"
						onChange={handleChange("password2")}
					/>
				</div>
				<div>
					<label htmlFor={"bio"}>{"Bio"}</label>
					<input
						type="text"
						name={"bio"}
						placeholder={"Bio"}
						className="input-box"
						onChange={handleChange("bio")}
					/>
				</div>
				<div>
					<label htmlFor={"github-id"}>{"Github Id"}</label>
					<input
						type="text"
						name={"github-id"}
						placeholder={"Github Id"}
						className="input-box"
						onChange={handleChange("github_id")}
					/>
				</div>
				<button className="submit" type="submit" onClick={handleSubmit}>
					Signup
				</button>
				<p>
					Already have an account ?{" "}
					<a href="/login" className=" italic underline text-cyan-800">
						Login
					</a>
				</p>
			</form>
		</div>
	);
}

export default Signup;
