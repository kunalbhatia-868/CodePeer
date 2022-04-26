import React from "react";

function Login() {
	return (
		<div className="login-card h-screen">
			<h1 class="text-center font-pt-serif mt-10 text-4xl capitalize">Login</h1>
			<div class="page-title-underline"></div>
			<form action="" method="post" className="max-w-[30%] ml-[35%]">
				<div>
					<label htmlFor={"username"}>{"Username"}</label>
					<input
						type="text"
						name={"username"}
						placeholder={"Username"}
						className="input-box"
					/>
				</div>
				<div>
					<label htmlFor={"password1"}>{"UsernamPassword"}</label>
					<input
						type="text"
						name={"password1"}
						placeholder={"Password"}
						className="input-box"
					/>
				</div>
				<button className="submit" type="submit">
					Login
				</button>
				<p className="underline my-3">Forgot your password?</p>
				<p>
					Don't have an account? ?{" "}
					<a href="/signup" className=" italic underline text-cyan-800 my-3">
						Signup
					</a>
				</p>
			</form>
		</div>
	);
}

export default Login;
