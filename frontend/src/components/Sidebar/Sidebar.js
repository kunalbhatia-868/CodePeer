import React from "react";
import SidebarLinks from "./SidebarLinks";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

function Sidebar() {
	return (
		<div className="flex flex-col items:end sm:items-baseline sm:pl-[4%] md:pl-[5%] xl:pl-[12%] border-r-2 border-b-2 h-screen shadow-sm w-1/3 md:w-1/4 pt-10 rounded-xl">
			<SidebarLinks text="Home" Icon={HomeRoundedIcon} />
			<SidebarLinks text="Feed" Icon={FeedRoundedIcon} />
			<SidebarLinks text="Profile" Icon={PersonRoundedIcon} />
			<SidebarLinks text="Messages" Icon={MessageRoundedIcon} />
			<SidebarLinks text="Notifications" Icon={NotificationsRoundedIcon} />
		</div>
	);
}

export default Sidebar;
