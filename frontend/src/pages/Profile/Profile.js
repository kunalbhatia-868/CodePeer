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
			<main className="flex flex-row justify-center lg:mx-[5%] xl:mx-[10%] 2xl:mx-[15%]">
				<Sidebar />
				<ProfileDetail />
				<div className="hidden lg:inline w-1/4">
					<Adbar />
				</div>
			</main>
		</div>
	);
}

export default Profile;
