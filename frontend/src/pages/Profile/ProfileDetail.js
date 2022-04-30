import React from "react";
import Feed from "../../components/Feed/Feed";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MessageIcon from "@mui/icons-material/Message";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import "../HomePage/Homepage.css";

function ProfileDetail() {
	return (
		<div className="mt-7 w-2/3 md:w-1/2 block overflow-y-scroll h-screen noscroll">
			<div className="profile flex flex-row items-baseline justify-between mx-2">
				<a href="/" className="">
					<Avatar
						alt="/"
						src="https://pbs.twimg.com/profile_images/1401131298865876999/ppXhpWOo_400x400.jpg"
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
					<button
						type="button"
						className=" mx-1 text-white font-fredoka font-bold text-lg px-5 py-2 rounded-3xl bg-gradient-to-r from-sky-400 to-blue-500"
					>
						Follow
					</button>
				</div>
			</div>
			<div className="details">
				<div className="text-lg font-nunito font-semibold">
					The Product Folks 🚀
				</div>
				<div className="text-sm italic my-2">@TheProductfolks</div>
				<div className="text-base italic my-2">
					Volunteer-driven community of global product leaders & enthusiasts
					passionate about making an impact. Come for the content, stay for the
					community🍕🔥➡️ @0xTPH
				</div>
			</div>
			<div>
				<div className="text-center font-fredoka text-3xl my-14 font-bold">
					Latest Posts
				</div>
				<Feed />
			</div>
		</div>
	);
}

export default ProfileDetail;
