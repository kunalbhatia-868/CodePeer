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
			<main className="flex flex-row justify-evenly">
				<Sidebar />
				<Feed />
				<Adbar />
			</main>
		</div>
	);
}

export default Homepage;
