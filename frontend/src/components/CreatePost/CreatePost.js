import React, { useState } from "react";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import AttachFileIcon from "@mui/icons-material/AttachFile";
function CreatePost({ feedData, setFeedData }) {
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
				console.log(data);
				console.log(feedData);
				const newData = [...feedData];
				newData.push(data);
				console.log(newData);
				this.setFeedData(newData);

				console.log(feedData);
				this.setFeedData({});
			});
	};
	return (
		<div className="mt-4 mx-4 py-5 appearance-none border-2 border-gray-200 rounded">
			<form action="" method="post">
				<input
					className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-5 focus:outline-none focus:bg-white focus:border-purple-500 w-3/6 mx-10 mb-4"
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
				<div className="flex flex-row justify-around">
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
	);
}

export default CreatePost;
