import React, { useEffect, useState } from "react";

function Comment({ commentData }) {
	// eslint-disable-next-line
	const { id, text, created_on, updated_on, post, user } = commentData;
	const [commentUserInfo, setCommentUserInfo] = useState({});

	useEffect(() => {
		fetch(`${process.env.REACT_APP_BACKEND}user/${user}/`)
			.then((response) => response.json())
			.then((data) => setCommentUserInfo(data));
		// eslint-disable-next-line
	}, []);

	return (
		<div className="hover:bg-gray-200 hover:rounded-lg p-2">
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<a href="/" className="">
						{commentUserInfo.image ? (
							<img
								className="rounded-full"
								src="https://media-exp1.licdn.com/dms/image/C5103AQHcmnpwX37ppg/profile-displayphoto-shrink_100_100/0/1535628659967?e=1652313600&v=beta&t=VscyWrZM8Q38npJ9PxRJzgP4Z3QXwCRSaZmqJi6B0Gc"
								alt=""
								width="35"
								height="35"
							/>
						) : (
							<img
								className="rounded-full"
								src="/./assets/Navatar.png"
								alt=""
								width="35"
								height="35"
							/>
						)}
					</a>
					<div className="ml-2 font-nunito font-semibold text-sm">
						{commentUserInfo.username}
					</div>
				</div>
				<div className="font-nunito font-medium text-xs lg:text-sm">
					• 25 mins ago
				</div>
			</div>
			<div className="font-dosis font-semibold text-sm ml-11 mt-1">{text}</div>
		</div>
	);
}

export default Comment;
