import React from "react";
import FollowBlock from "../FollowBlock/FollowBlock";

function Adbar() {
	return (
		<div>
			<FollowBlock />
			<div className="text-sm text-center mx-5">
				<a href="/homepage" className="hover:underline px-1 ">
					About
				</a>
				<a href="/homepage" className="hover:underline px-1">
					Accessibility
				</a>
				<br />
				<a href="/homepage" className="hover:underline px-1">
					Help Center
				</a>
				<a href="/homepage" className="hover:underline px-1">
					Privacy
				</a>
				<br />
				<a href="/homepage" className="hover:underline px-1">
					Services
				</a>
				<a href="/homepage" className="hover:underline px-1">
					Ad Choices
				</a>
				<br />
				<a href="/homepage" className="hover:underline px-1">
					Terms
				</a>
				<a href="/homepage" className="hover:underline px-1">
					Advertising
				</a>
				<br />
				<a href="/homepage" className="hover:underline px-1">
					More
				</a>{" "}
				<br />
				<p className=" text-base font-nunito font-bold">
					CodePeer Corporation © 2022
				</p>
			</div>
		</div>
	);
}

export default Adbar;
