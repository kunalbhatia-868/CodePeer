import React from "react";

function SidebarLinks({ text, Icon }) {
	return (
		<div className="home flex justify-end pr-12 pt-5">
			<Icon sx={{ fontSize: 44 }} />
			<h2 className="text-2xl font-nunito font-semibold md:mt-2 ml-3 hidden md:inline">
				{text}
			</h2>
		</div>
	);
}

export default SidebarLinks;
