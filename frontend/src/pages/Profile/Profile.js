import React from "react";

import Adbar from "../../components/Adbar/Adbar";
import Navbar from "../../components/Navbar/Navbar";
import ProfileDetail from "./ProfileDetail";
import Sidebar from "../../components/Sidebar/Sidebar";

function Profile() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main className="flex flex-row justify-evenly">
				<Sidebar />
				<ProfileDetail />
				<Adbar />
			</main>
		</div>
	);
}

export default Profile;
