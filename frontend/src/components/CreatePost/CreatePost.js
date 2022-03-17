import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import AddPhotoAlternateRoundedIcon from "@mui/icons-material/AddPhotoAlternateRounded";
import GifBoxIcon from "@mui/icons-material/GifBox";
import AttachFileIcon from "@mui/icons-material/AttachFile";
function CreatePost() {
	return (
		<div className="mt-4 mx-4 ">
			<form action="" method="post">
				<input
					className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-10 focus:outline-none focus:bg-white focus:border-purple-500 w-5/6 mx-10"
					type="text"
					placeholder="What's happening?"
				/>
				<div className="flex flex-row justify-around">
					<div className="attachments flex flex-row items-center">
						<AddPhotoAlternateRoundedIcon color="primary" />
						<LinkIcon color="primary" />
						<GifBoxIcon color="primary" />
						<AttachFileIcon color="primary" />
					</div>
					<button
						type="button"
						className="mt-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
					>
						Create Post
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreatePost;
