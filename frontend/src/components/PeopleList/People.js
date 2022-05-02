import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import MessageIcon from "@mui/icons-material/Message";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";

function People({ followStatus, friendId }) {
	const [userData, setUserData] = useState({});
	let token = JSON.parse(localStorage.jwt);

	useEffect(() => {
		fetch(`/user/${friendId}`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setUserData(data);
			});
	});

	const userUrl = `profile/${friendId}/`;
	return (
		<div className="hover:bg-gray-200 hover:rounded-lg p-2 my-4">
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<a href={userUrl} className="">
						<Avatar
							alt="Cindy Baker"
							src="/./assets/Navatar.png"
							sx={{ width: 45, height: 45 }}
						/>
					</a>
					<div className="ml-2 font-nunito font-semibold text-sm">
						{userData.username}
					</div>
				</div>
				{followStatus ? (
					<div className="flex items-center">
						<a href="/" className="mx-1">
							<MessageIcon sx={{ fontSize: 25 }} />
						</a>
						<a href="/" className="mx-1">
							<VideoCallRoundedIcon sx={{ fontSize: 37 }} />
						</a>
					</div>
				) : (
					<button className=" font-fredoka font-bold text-sm lg:text-sm bg-black text-white py-2 px-4 rounded-2xl">
						Follow
					</button>
				)}
			</div>
		</div>
	);
}

export default People;
