import React from "react";

function SidebarLinks({ text, Icon }) {
	return (
		<div className="home flex justify-end items-center pr-10 pt-5">
			<Icon sx={{ fontSize: 36 }} />
			<h2 className="text-lg font-nunito font-semibold md:mt-2 ml-3 hidden sm:inline">
				{text}
			</h2>
		</div>
	);
}

export default SidebarLinks;
