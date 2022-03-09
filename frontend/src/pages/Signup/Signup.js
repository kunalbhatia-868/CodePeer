import React from "react";
import InputBox from "./components/InputBox";
import "./Signup.css";

function Signup() {
	return (
		<div>
			<h1 class="text-center font-pt-serif mt-10 text-4xl capitalize">
				Register
			</h1>
			<div class="page-title-underline"></div>
			<form action="" method="post" className=" max-w-[40%] ml-[30%]">
				<InputBox text="Username" name="username" />
				<InputBox text="First Name" name="first-name" />
				<InputBox text="Last Name" name="last-name" />
				<InputBox text="Email Address" name="email" />
				<InputBox text="Password" name="password1" />
				<InputBox text="Confirm Password" name="password2" />
				<button className="submit" type="submit">
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
