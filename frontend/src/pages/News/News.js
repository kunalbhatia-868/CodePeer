import React from "react";

import Adbar from "../../components/Adbar/Adbar";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import NewsList from "./NewsList";

function News() {
	return (
		<div>
			<header>
				<Navbar />
			</header>
			<main className="flex flex-row justify-center lg:mx-[5%] xl:mx-[10%] 2xl:mx-[15%]">
				<div>
					<Sidebar />
				</div>
				<NewsList />
				<div className="hidden lg:inline w-1/4">
					<Adbar />
				</div>
			</main>
		</div>
	);
}

export default News;
