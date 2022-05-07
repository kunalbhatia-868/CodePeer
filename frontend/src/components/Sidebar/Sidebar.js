import React, { useState, useEffect } from "react";
import SidebarLinks from "./SidebarLinks";
import PeopleIcon from "@mui/icons-material/People";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import NewspaperRoundedIcon from "@mui/icons-material/NewspaperRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

function Sidebar() {
	const [userData, setUserData] = useState({});
	let token = JSON.parse(localStorage.getItem("jwt"));

	useEffect(() => {
		if (token !== null) {
			fetch(`${process.env.REACT_APP_BACKEND}user/current/`, {
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
		}
		// eslint-disable-next-line
	}, []);
	const userProfileLink = `profile/${userData.id}`;
	return (
		<div>
			<SidebarLinks text="Feed" Icon={FeedRoundedIcon} link="" />
			<SidebarLinks text="Friends" Icon={PeopleIcon} link="following" />
			<SidebarLinks
				text="Profile"
				Icon={PersonRoundedIcon}
				link={userProfileLink}
			/>
			<SidebarLinks
				text="Notifications"
				Icon={NotificationsRoundedIcon}
				link="notification"
			/>
			<SidebarLinks text="News" Icon={NewspaperRoundedIcon} link="news" />
		</div>
	);
}

export default Sidebar;
