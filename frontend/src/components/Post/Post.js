import React from "react";
import { useState } from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Comment from "./Comment";

function Post() {
	const [showComment, setShowComment] = useState(false);
	const [showCreateComment, setShowCreateComment] = useState(false);
	return (
		<div className="border-b-2 py-5 px-10 border-2 rounded-lg mx-4 my-5">
			<div className="author flex mx-3 my-3 flex-row flex-nowrap items-center cursor-pointer">
				<div className="author-image w-[40px] min-w-[40px]">
					<img
						className="rounded-full"
						src="https://media-exp1.licdn.com/dms/image/C5103AQHcmnpwX37ppg/profile-displayphoto-shrink_100_100/0/1535628659967?e=1652313600&v=beta&t=VscyWrZM8Q38npJ9PxRJzgP4Z3QXwCRSaZmqJi6B0Gc"
						alt=""
					/>
				</div>
				<div className="author-detail font-nunito flex flex-col items-start ml-3">
					<div className="author-profile flex flex-row items-center justify-around">
						<div className="font-semibold text-xs sm:text-base">Aman Gupta</div>
						<div className="text-xs sm:text-sm">• Following</div>
					</div>
					<div className="author-about text-[10px]">
						Co Founder and CMO at boAt Lifestyle(Hiring at all Levels)
					</div>
					<div className="post-date-time text-[12px]">• 2 days ago</div>
				</div>
			</div>
			<div className="content">
				<div className="text font-dosis font-semibold text-black mx-3">
					In boAt Lifestyle, we have a :- Chief Marketing Officer (CMO: Me) who
					hasn’t studied marketing and a Chief Product Officer (CPO: Sameer) who
					isn’t an engineer and a Chief Financial Officer (CFO: Ankur) who isn’t
					a Chartered Accountant. We believe in letting people follow their
					passion. We believe in doing what floats our boAt.
				</div>
				<div className="attachment mt-4 px-4">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png"
						alt=""
						className=" w-[100%]"
					/>
				</div>
			</div>
			<div className="like-comment flex justify-between mx-3 mt-5">
				<div className="flex items-center hover:text-cyan-600 cursor-pointer">
					<FavoriteBorderRoundedIcon sx={{ fontSize: 25 }} />
					<div className="font-fredoka ml-2 text-lg font-medium text-slate-800">
						Like
					</div>
				</div>
				<div className="flex">
					<div className="flex items-center hover:text-cyan-600 cursor-pointer">
						<CommentRoundedIcon sx={{ fontSize: 25 }}></CommentRoundedIcon>
						<div
							className="font-fredoka text-lg  pl-1 pr-3 font-medium text-slate-800"
							onClick={() => setShowCreateComment(!showCreateComment)}
						>
							Comment
						</div>
					</div>
					<div
						id="comments-dropdown"
						className="cursor-pointer"
						onClick={() => setShowComment(!showComment)}
					>
						<ArrowDropDownRoundedIcon sx={{ fontSize: 30 }} />
					</div>
				</div>
			</div>
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

export default Post;
