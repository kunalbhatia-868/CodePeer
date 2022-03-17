import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Avatar from "@mui/material/Avatar";

function Navbar() {
	return (
		<nav className="flex items-center justify-evenly mt-3 2xl:mx-8 mb-4">
			<a className="navbar-brand" href="/">
				<img src="./assets/logo.svg" alt="" className="h-12" />
			</a>
			<div className="font-nunito xs:text-xs sm:text-sm md:text-lg lg:text-xl text-slate-700 font-semibold">
				<a className="mx-3 " href="/">
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
				<a href="/" className="mr-5">
					<NotificationsActiveIcon />
				</a>
				<a href="/profile" className="">
					<Avatar alt="Cindy Baker" src="/./assets/avatar.jpg" />
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
