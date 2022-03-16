import React from "react";
import FollowPerson from "./FollowPerson";

function FollowBlock() {
	return (
		<div className="my-7 pt-7 rounded-sm shadow-md bg-[#f5f4f4] ml-5">
			<div className="px-4 mb-4 font-fredoka font-extrabold text-xl">
				People To Follow
			</div>

			<div>
				<FollowPerson name="Sarah Jane" />
				<FollowPerson name="Allsion Ray" />
				<FollowPerson name="Kamala Harris" />
			</div>
			<div className="px-4 hover:shadow-3xl hover:rounded-xl hover:bg-[#dddcdc]">
				<button className=" text-cyan-500 font-nunito font-bold py-4 ">
					Show more
				</button>
			</div>
		</div>
	);
}

export default FollowBlock;
