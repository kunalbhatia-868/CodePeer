import React, { useEffect } from "react";

import Adbar from "../../components/Adbar/Adbar";
import Feed from "../../components/Feed/Feed";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import AttachFileIcon from "@mui/icons-material/AttachFile";
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

	const [formData, setFormData] = useState({});

	const handleChange = (param) => (event) => {
		event.preventDefault();
		setFormData({ ...formData, [param]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		let token = JSON.parse(localStorage.jwt);
		fetch(`posts/`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				const newData = [...feedData];
				newData.push(data);
				setFeedData(newData);
				setFormData({});
				document
					.querySelectorAll("input")
					.forEach((input) => (input.value = ""));
			});
	};
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
					<div className="mt-4 mx-4 py-5 appearance-none border-2 border-gray-200 rounded">
						<form action="" method="post">
							<input
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-5 focus:outline-none focus:bg-white focus:border-purple-500 w-5/6 mx-10 mb-4"
								type="text"
								placeholder="What's happening?"
								onChange={handleChange("title")}
							/>
							<input
								className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-10 focus:outline-none focus:bg-white focus:border-purple-500 w-5/6 mx-10"
								type="text"
								placeholder="Any Details ?"
								onChange={handleChange("description")}
							/>
							<div className="flex flex-row justify-between mx-16">
								<div className="attachments flex flex-row items-center">
									<AddPhotoAlternateRoundedIcon color="primary" />
									<AttachFileIcon color="primary" />
								</div>
								<button
									type="button"
									className="mt-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
									onClick={handleSubmit}
								>
									Create Post
								</button>
							</div>
						</form>
					</div>
					<Feed feedData={feedData} setFeedData={setFeedData} />
				</div>
				<div className="hidden lg:inline w-1/4">
					<Adbar />
				</div>
			</main>
		</div>
	);
}

export default Homepage;
