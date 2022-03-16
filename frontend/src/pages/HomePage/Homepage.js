import React from "react";

import Adbar from "../../components/Adbar/Adbar";
import Feed from "../../components/Feed/Feed";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

function Homepage() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main className="flex flex-row justify-center lg:mx-[5%] xl:mx-[10%] 2xl:mx-[15%]">
				<Sidebar />
				<Feed />
				<Adbar />
			</main>
		</div>
	);
}

export default Homepage;
