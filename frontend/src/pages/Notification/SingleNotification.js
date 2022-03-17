import React from "react";
import Avatar from "@mui/material/Avatar";

function SingleNotification() {
	return (
		<div className="my-6 px-5 py-3 hover:shadow-md hover:bg-gray-100 hover:rounded-sm">
			<div className="flex items-center mb-3">
				<a href="/" className="">
					<Avatar
						alt="Cindy Baker"
						src="/./assets/avatar.jpg"
						sx={{ width: 45, height: 45 }}
					/>
				</a>
				<div className="ml-2 font-nunito font-semibold text-sm">
					Cindy Baker
				</div>
			</div>
			<div className="font-dosis font-semibold italic leading-snug">
				In case you missed Community Classroom's Tweet The March Newsletter is
				out 🙌 We've included tons of resources, blogs, videos, and more! We
				will also be having a Kubescape competition with prizes up to $1500.
				Also you can apply for @KubeCon_ scholarship Subscribe for future
				editions 👉 https://commclassroom.org https://pic.twitter.com/2bioiCzdTx
			</div>
		</div>
	);
}

export default SingleNotification;
