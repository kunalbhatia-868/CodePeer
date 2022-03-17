import React from "react";
import SidebarLinks from "./SidebarLinks";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

function Sidebar() {
	return (
		<div>
			<SidebarLinks text="Home" Icon={HomeRoundedIcon} link="homepage" />
			<SidebarLinks text="Feed" Icon={FeedRoundedIcon} link="homepage" />
			<SidebarLinks text="Profile" Icon={PersonRoundedIcon} link="profile" />
			<SidebarLinks text="Messages" Icon={MessageRoundedIcon} link="homepage" />
			<SidebarLinks
				text="Notifications"
				Icon={NotificationsRoundedIcon}
				link="homepage"
			/>
		</div>
	);
}

export default Sidebar;
