import React, { useEffect } from "react";

import Adbar from "../../components/Adbar/Adbar";
import Feed from "../../components/Feed/Feed";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import CreatePost from "../../components/CreatePost/CreatePost";
import { useState } from "react";
import "./Homepage.css";

function Homepage() {
	const [feedData, setFeedData] = useState([]);

	useEffect(() => {
		fetch("/posts/")
			.then((response) => response.json())
			.then((data) => {
				setFeedData(data);
			});
	}, []);

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
					<CreatePost setFeedData={setFeedData} />
					<Feed feedData={feedData} />
				</div>
				<div className="hidden lg:inline w-1/4">
					<Adbar />
				</div>
			</main>
		</div>
	);
}

export default Homepage;
