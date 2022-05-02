import React, { useEffect, useState } from "react";

import Adbar from "../../components/Adbar/Adbar";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Post from "../../components/Post/Post";
import "../HomePage/Homepage.css";
import { useParams } from "react-router";

function PostDetail() {
	let { post_id } = useParams();
	const [postData, setPostData] = useState({});
	useEffect(() => {
		fetch(`/posts/${post_id}`)
			.then((response) => response.json())
			.then((data) => {
				setPostData(data);
			});
	}, []);
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
					{postData.post_id !== undefined && <Post postData={postData} />}
				</div>
				<div className="hidden lg:inline w-1/4">
					<Adbar />
				</div>
			</main>
		</div>
	);
}

export default PostDetail;
