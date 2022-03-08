import React from "react";
import SidebarLinks from "./SidebarLinks";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

function Sidebar() {
	return (
		<div className="h-screen border-r-2 shadow-sm w-1/3 pt-10">
			<SidebarLinks text="Home" Icon={HomeRoundedIcon} />
			<SidebarLinks text="Feed" Icon={FeedRoundedIcon} />
			<SidebarLinks text="Profile" Icon={PersonRoundedIcon} />
			<SidebarLinks text="Messages" Icon={MessageRoundedIcon} />
			<SidebarLinks text="Notification" Icon={NotificationsRoundedIcon} />
		</div>
	);
}

export default Sidebar;
