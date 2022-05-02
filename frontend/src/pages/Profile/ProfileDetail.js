import React, { useEffect, useState } from "react";
import Feed from "../../components/Feed/Feed";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageIcon from "@mui/icons-material/Message";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import "../HomePage/Homepage.css";

function ProfileDetail({ user_id }) {
	const [feedData, setFeedData] = useState([]);
	const [userData, setUserData] = useState({});
	const [isFriend, setIsFriend] = useState();
	let token = JSON.parse(localStorage.jwt);

	const handleFollow = (event) => {
		event.preventDefault();

		fetch(`/user/connections/`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				reciever: user_id,
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				document.getElementById(`follow-button`).innerHTML = "✔ Following";
			});
	};

	useEffect(() => {
		fetch(`/user/connections/check/${user_id}`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setIsFriend(data);
			});

		fetch(`/user/${user_id}`, {
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

		fetch(`/posts/${user_id}`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setFeedData(data);
			});
	}, []);

	const github_link = "https://github.com/" + userData.github_id;
	return (
		<div className="mt-7 w-2/3 md:w-1/2 block overflow-y-scroll h-screen noscroll">
			<div className="profile flex flex-row items-baseline justify-between mx-2">
				<a href="/" className="ml-1">
					<Avatar
						alt="/"
						src="/./assets/Navatar.png"
						sx={{ width: 120, height: 120 }}
					/>
				</a>

				<div className="flex items-center">
					<a href="/" className="mx-1">
						<MoreVertIcon sx={{ fontSize: 25 }} />
					</a>
					<a href="/" className="mx-1">
						<MessageIcon sx={{ fontSize: 25 }} />
					</a>
					<a href="/" className="mx-1">
						<VideoCallRoundedIcon sx={{ fontSize: 33 }} />
					</a>
					{isFriend !== undefined && isFriend.response === false ? (
						<button
							type="button"
							id="follow-button"
							className=" mx-1 text-white font-fredoka font-bold text-lg px-5 py-2 rounded-3xl bg-gradient-to-r from-sky-400 to-blue-500"
							onClick={handleFollow}
						>
							Follow
						</button>
					) : (
						<button
							type="button"
							className=" mx-1 text-white font-fredoka font-bold text-md px-5 py-2 rounded-3xl bg-gradient-to-r from-sky-400 to-blue-500"
						>
							✔ Following
						</button>
					)}
				</div>
			</div>
			<div className="details ml-5">
				<div className="text-lg font-nunito font-semibold capitalize">
					{userData.first_name} {userData.last_name} 🚀
				</div>
				<div className="text-base italic my-2">@{userData.username}</div>
				<div className="text-base text-teal-800 font-semibold italic my-2">
					{userData.bio}
				</div>
				<div className="text-base text-teal-800 font-semibold italic my-2">
					Github -
					<a className=" text-cyan-600" href={github_link}>
						@{userData.github_id}
					</a>
				</div>
			</div>
			<div>
				<div className="text-center font-fredoka text-3xl my-14 font-bold">
					Latest Posts
				</div>
				<Feed feedData={feedData} />
			</div>
		</div>
	);
}

export default ProfileDetail;
