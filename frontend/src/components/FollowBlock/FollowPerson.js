import React from "react";
import Avatar from "@mui/material/Avatar";

function FollowPerson({ name }) {
	return (
		<div className="flex flex-row flex-nowrap  justify-between items-center py-2.5 px-3 hover:shadow-3xl hover:rounded-xl  hover:bg-[#dddcdc]">
			<a href="/" className="">
				<Avatar
					alt="/"
					src="/./assets/avatar.jpg"
					sx={{ width: 40, height: 40 }}
				/>
			</a>
			<div className="font-nunito font-bold px-3">{name}</div>
			<div>
				<button className="font-nunito font-bold bg-black text-white rounded-3xl px-4 py-2">
					Follow
				</button>
			</div>
		</div>
	);
}

export default FollowPerson;
