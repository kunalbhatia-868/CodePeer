import React from "react";

import Adbar from "../../components/Adbar/Adbar";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import "../HomePage/Homepage.css";
import PeopleList from "../../components/PeopleList/PeopleList";

function Peoples() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main className="flex flex-row justify-center lg:mx-[5%] xl:mx-[10%] 2xl:mx-[15%]">
				<div className="flex flex-col mt-6  lg:w-1/6 mr-6">
					<Sidebar />
				</div>
				<div className="w-2/3 md:w-1/2 block overflow-y-scroll h-screen noscroll">
					<div className="font-nunito text-2xl font-bold my-10 mx-3">
						People You are Following
					</div>
					<PeopleList followStatus={true} />
				</div>
				<div className="hidden lg:inline w-1/4">
					<Adbar />
				</div>
			</main>
		</div>
	);
}

export default Peoples;
