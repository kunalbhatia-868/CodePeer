import React from "react";

function SidebarLinks({ text, Icon }) {
	return (
		<div className="home flex justify-end items-center px-4 py-3 hover:shadow-3xl hover:bg-gray-200 hover:rounded-3xl">
			<Icon sx={{ fontSize: 36 }} />
			<h2 className="text-lg font-nunito font-semibold md:mt-2 ml-3 hidden sm:inline">
				{text}
			</h2>
		</div>
	);
}

export default SidebarLinks;
