import React from "react";
import Comment from "./Comment";

function CommentList({ showComment, showCreateComment }) {
	return (
		<div>
			{showCreateComment && (
				<div>
					<form
						action=""
						method="post"
						className="flex flex-row h-10 my-3 justify-center"
					>
						<input
							className="bg-gray-200 appearance-none border-2 border-gray-200 rounded py-2 px-4 text-gray-700 leading-6 focus:outline-none focus:bg-white focus:border-cyan-500 w-4/6 "
							type="text"
							placeholder="What's on you mind ?"
						/>
						<button
							type="button"
							className="ml-4 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
						>
							Post
						</button>
					</form>
				</div>
			)}
			{showComment && (
				<div id="comments-dropdown-list">
					<hr className="mt-5" />
					<div className="font-nunito  text-xl  font-bold my-3">
						Latest Comments
					</div>
					<Comment />
					<Comment />
					<Comment />
					<button className="font-nunito font-semibold text-blue-600">
						More Comments
					</button>
				</div>
			)}
		</div>
	);
}

export default CommentList;
