import React from "react";
import Post from "../Post/Post";

function Feed({ feedData }) {
	return (
		<div>
			{feedData.map((postData) => {
				return <Post key={postData.post_id} postData={postData} />;
			})}
		</div>
	);
}

export default Feed;
