import React, { useEffect, useState } from "react";
import FollowPerson from "./FollowPerson";
import { useNavigate } from "react-router-dom";

function FollowBlock() {
	const navigate = useNavigate();

	const [suggestList, setSuggestList] = useState([]);

	let token = JSON.parse(localStorage.jwt);

	useEffect(() => {
		fetch(`/user/people-you-may-know/`, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setSuggestList(data);
			});
	}, []);

	return (
		<div className="my-7 pt-7 rounded-sm shadow-md bg-[#f5f4f4] ml-5">
			<div className="px-4 mb-4 font-fredoka font-extrabold text-xl">
				People To Follow
			</div>

			<div>
				{suggestList.slice(0, 3).map((person) => {
					return <FollowPerson key={person.id} personData={person} />;
				})}
			</div>
			<div className="px-4 hover:shadow-3xl hover:rounded-xl hover:bg-[#dddcdc]">
				<button
					onClick={(e) => {
						navigate("/following");
					}}
					className=" text-cyan-500 font-nunito font-bold py-4 "
				>
					Show more
				</button>
			</div>
		</div>
	);
}

export default FollowBlock;
