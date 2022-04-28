import React, { useEffect, useState } from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Avatar from "@mui/material/Avatar";
import { isAuthenticated, signOut } from "../Utils/authHelper";
import { useNavigate } from "react-router-dom";

function Navbar() {
	const [isUserAutheticated, setUserAuthenticated] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuthenticated() === false) {
			setUserAuthenticated(false);
		} else {
			setUserAuthenticated(true);
		}
	}, []);

	const handleLogout = (event) => {
		event.preventDefault();
		signOut();
		setUserAuthenticated(false);
		console.log("User has been signed out");
		navigate("/login");
	};
	return (
		<nav className="flex items-center justify-evenly mt-3 2xl:mx-8 mb-4">
			<a className="navbar-brand" href="/feed">
				<img src="./assets/logo.svg" alt="" className="h-12" />
			</a>
			<div className="font-nunito xs:text-xs sm:text-sm md:text-lg lg:text-xl text-slate-700 font-semibold">
				<a className="mx-3 " href="/feed">
					Feed
				</a>
				<a className="mx-3 " href="/">
					Explore
				</a>
				<a className="mx-3 " href="/following">
					Friends
				</a>
			</div>
			<div className="flex items-center">
				<a href="/notification" className="mr-5">
					<NotificationsActiveIcon />
				</a>
				{isUserAutheticated ? (
					<div className="flex items-center">
						<a href="/profile" className="px-2">
							<Avatar alt="Cindy Baker" src="/./assets/Navatar.png" />
						</a>
						<a
							href="/login"
							className="px-2 font-nunito font-semibold text-teal-800"
							onClick={handleLogout}
						>
							Logout
						</a>
					</div>
				) : (
					<div className="flex items-center">
						<a
							href="/login"
							className="px-2 font-nunito font-semibold text-teal-800"
						>
							Login
						</a>
						<a
							href="/signup"
							className="px-2 font-nunito font-semibold text-teal-800"
						>
							Signup
						</a>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
