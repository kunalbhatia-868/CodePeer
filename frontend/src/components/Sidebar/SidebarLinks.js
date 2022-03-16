import React from "react";

function SidebarLinks({ text, Icon, link }) {
	link = "/" + link;
	return (
		<div className="flex items-center px-4 py-3 hover:shadow-3xl hover:bg-gray-200 hover:rounded-3xl">
			<Icon sx={{ fontSize: 36 }} />
			<h2 className="text-lg font-nunito font-semibold md:mt-2 ml-3 hidden sm:inline">
				<a href={link}>{text}</a>
			</h2>
		</div>
	);
}

export default SidebarLinks;
