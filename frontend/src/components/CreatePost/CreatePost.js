import React, { useState } from "react";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import AttachFileIcon from "@mui/icons-material/AttachFile";

function CreatePost({ setFeedData }) {
	const [formData, setFormData] = useState({
		title: "",
		description: "",
	});

	const uploadImage = async (event) => {
		event.preventDefault();
		const files = event.target.files;
		const data = new FormData();
		data.append("file", files[0]);
		data.append("upload_preset", "geekyimages");

		const res = await fetch(
			"https://api.cloudinary.com/v1_1/kunalimagecloud/image/upload",
			{
				method: "POST",
				body: data,
			}
		);
		const file = await res.json();
		setFormData({ ...formData, image: file.secure_url });
	};

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
				setFeedData((prevFeedData) => [data, ...prevFeedData]);
				setFormData({
					title: "",
					description: "",
				});
				const file = document.getElementById("file-upload");
				file.value = file.defaultValue;
			});
	};
	return (
		<div>
			<div className="mt-4 mx-4 py-5 appearance-none border-2 border-gray-200 rounded">
				<form action="" method="post">
					<input
						className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-5 focus:outline-none focus:bg-white focus:border-purple-500 w-5/6 mx-10 mb-4"
						type="text"
						placeholder="What's happening?"
						onChange={handleChange("title")}
						value={formData.title}
					/>
					<input
						className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-10 focus:outline-none focus:bg-white focus:border-purple-500 w-5/6 mx-10"
						type="text"
						placeholder="Any Details ?"
						onChange={handleChange("description")}
						value={formData.description}
					/>
					<label class="block">
						<input
							type="file"
							class=" ml-10 mt-4 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-100 file:text-sky-800 hover:file:bg-lime-100"
							onChange={uploadImage}
							id="file-upload"
						/>
					</label>
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
		</div>
	);
}

export default CreatePost;
