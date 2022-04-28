import React from "react";
import Post from "../Post/Post";

function Feed({ feedData }) {
	console.log(feedData);
	for (let i = 0; i < feedData.length; i++) {
		console.log(feedData[i].user);
	}
	return (
		<div>
			{feedData.map((postData) => {
				return <Post key={postData.post_id} postData={postData} />;
			})}
		</div>
	);
}

export default Feed;
