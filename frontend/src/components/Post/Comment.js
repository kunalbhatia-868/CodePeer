import React from "react";
import Avatar from "@mui/material/Avatar";

function Comment() {
	return (
		<div className="hover:bg-gray-200 hover:rounded-lg p-2">
			<div className="flex justify-between items-center">
				<div className="flex items-center">
					<a href="/" className="">
						<Avatar
							alt="Cindy Baker"
							src="/./assets/avatar.jpg"
							sx={{ width: 35, height: 35 }}
						/>
					</a>
					<div className="ml-2 font-nunito font-semibold text-xs">
						Cindy Baker
					</div>
				</div>
				<div className="font-nunito font-medium text-xs lg:text-sm">
					• 25 mins ago
				</div>
			</div>
			<div className="font-dosis font-semibold text-xs lg:text-sm">
				I’ve been playing Threes on iOS for years as a vaguely meditative, low
				effort time waster game; but I’m looking for something new.
			</div>
		</div>
	);
}

export default Comment;
