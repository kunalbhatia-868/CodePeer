import React from "react";
import SingleNotification from "./SingleNotification";

function NotificationList() {
	return (
		<div className="mt-7 w-2/3 md:w-1/2 block overflow-y-scroll h-screen noscroll">
			<div className="font-nunito text-center text-2xl font-bold mx-3">
				Notifications
			</div>
			<div>
				<SingleNotification />
			</div>
		</div>
	);
}

export default NotificationList;
