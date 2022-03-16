import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Avatar from "@mui/material/Avatar";

function Navbar() {
	return (
		<nav className="flex justify-around items-center h-20 border-b-2 shadow-sm">
			<div className="navbar-brand">
				<img src="./assets/logo.svg" alt="" className="h-48 mt-6" />
			</div>
			<div className="nav-links font-fredoka xs:text-xs sm:text-sm md:text-base lg:text-xl text-slate-700 font-semibold">
				<a className="nav-link p-5" href="/">
					Feed
				</a>
				<a className="nav-link p-5" href="/">
					Explore
				</a>
				<a className="nav-link p-5" href="/">
					Friends
				</a>
			</div>
			<div className="nav-add flex justify-between items-center">
				<a href="/" className="notification m-1">
					<NotificationsActiveIcon />
				</a>
				<a href="/" className="account ml-5">
					<Avatar alt="Cindy Baker" src="/./assets/avatar.jpg" />
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
