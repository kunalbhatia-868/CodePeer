import React from "react";

import Adbar from "../../components/Adbar/Adbar";
import Navbar from "../../components/Navbar/Navbar";
import ProfileDetail from "./ProfileDetail";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useParams } from "react-router-dom";

function Profile() {
	const { user_id } = useParams();
	// console.log(user_id);
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main className="flex flex-row justify-center lg:mx-[5%] xl:mx-[10%] 2xl:mx-[15%]">
				<Sidebar />
				<ProfileDetail user_id={user_id} />
				<div className="hidden lg:inline w-1/4">
					<Adbar />
				</div>
			</main>
		</div>
	);
}

export default Profile;
