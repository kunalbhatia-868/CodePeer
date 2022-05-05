import React, { useEffect } from "react";
import { useState } from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import CommentList from "./CommentList";

function Post({ postData }) {
	const [showComment, setShowComment] = useState(false);
	const [showCreateComment, setShowCreateComment] = useState(false);

	// const [postUserInfo, setpostUserInfo] = useState({});
	const {
		user,
		post_id,
		title,
		description,
		created_on,
		updated_on,
		image,
		file,
	} = postData;

	const [commentDataSet, setCommentDataSet] = useState({});

	const [islikedPost, setIsLikedPost] = useState(false);

	let token = JSON.parse(localStorage.getItem("jwt"));
	let postUserInfo = {};
	if (user !== undefined) {
		postUserInfo = postData.user;
	}
	useEffect(() => {
		if (post_id !== undefined && token !== null) {
			fetch(`/posts/${post_id}/comments/`)
				.then((response) => response.json())
				.then((data) => setCommentDataSet(data));

			fetch(`/posts/${post_id}/is_liked/`, {
				headers: {
					Authorization: `Bearer ${token}`,
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((data) => {
					setIsLikedPost(data.message);
				});
		}
	}, []);

	const handleLike = (event) => {
		event.preventDefault();
		let token = JSON.parse(localStorage.jwt);
		fetch(`/posts/${post_id}/like/`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Credentials": true,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				if (islikedPost === true) {
					setIsLikedPost(false);
				} else {
					setIsLikedPost(true);
				}
			});
	};

	const postUserUrl = `/profile/${user.id}`;
	const postDetailUrl = `/feed/${post_id}`;
	return (
		<div className="border-b-2 py-5 px-10 border-2 rounded-lg mx-4 my-5">
			<a
				href={postUserUrl}
				className="author flex mx-3 my-3 flex-row flex-nowrap items-center cursor-pointer"
			>
				<div className="author-image w-[40px] min-w-[40px]">
					{postUserInfo.image ? (
						<img
							className="rounded-full"
							src="https://media-exp1.licdn.com/dms/image/C5103AQHcmnpwX37ppg/profile-displayphoto-shrink_100_100/0/1535628659967?e=1652313600&v=beta&t=VscyWrZM8Q38npJ9PxRJzgP4Z3QXwCRSaZmqJi6B0Gc"
							alt=""
						/>
					) : (
						<img className="rounded-full" src="/./assets/Navatar.png" alt="" />
					)}
				</div>
				<div className="author-detail font-nunito flex flex-col items-start ml-3">
					<div className="author-profile flex flex-row items-center justify-around">
						<div className="font-semibold text-xs sm:text-base capitalize">
							{postUserInfo.username}
						</div>
						<div className="text-xs sm:text-sm ml-4">• Following</div>
					</div>
					<div className="author-about text-[10px]">{postUserInfo.bio}</div>
					<div className="post-date-time text-[12px]">• 2 days ago</div>
				</div>
			</a>
			<a href={postDetailUrl} className="content">
				<div className="font-semibold text-black mx-3 text-xl">{title}</div>
				<br />
				<div className=" font-pt-serif font-normal text-black mx-3">
					{description}
				</div>

				{image && (
					<div className="attachment mt-4 px-4">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png"
							alt=""
							className=" w-[100%]"
						/>
					</div>
				)}
			</a>
			<div className="like-comment flex justify-between mx-3 mt-5">
				{islikedPost ? (
					<div className="flex items-center text-cyan-600 cursor-pointer">
						<FavoriteBorderRoundedIcon
							sx={{ fontSize: 25 }}
							onClick={handleLike}
						/>
						<div className="font-fredoka ml-2 text-lg font-medium text-cyan-600">
							Like
						</div>
					</div>
				) : (
					<div className="flex items-center hover:text-cyan-600 cursor-pointer">
						<FavoriteBorderRoundedIcon
							sx={{ fontSize: 25 }}
							onClick={handleLike}
						/>
						<div className="font-fredoka ml-2 text-lg font-medium text-slate-800">
							Like
						</div>
					</div>
				)}
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
			<CommentList
				showComment={showComment}
				showCreateComment={showCreateComment}
				commentDataSet={commentDataSet}
				setCommentDataSet={setCommentDataSet}
				post_id={post_id}
			/>
		</div>
	);
}

export default Post;
