import React from "react";
import Post from "../Post/Post";
import CreatePost from "../CreatePost/CreatePost";

function Feed() {
	return (
		<div className="w-2/3 md:w-1/2 block overflow-y-scroll h-screen">
			<CreatePost />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
}

export default Feed;
