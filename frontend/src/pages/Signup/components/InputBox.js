import React from "react";
import "../Signup.css";

function InputBox({ text, name }) {
	return (
		<div>
			<label htmlFor={name}>{text}</label>
			<input type="text" name={name} placeholder={text} className="input-box" />
		</div>
	);
}

export default InputBox;
