import React, { useEffect, useState } from "react";
import People from "./People";

function PeopleList({ followStatus }) {
	const [friendsList, setFriendsList] = useState([]);

	let token = JSON.parse(localStorage.getItem("jwt"));

	useEffect(() => {
		fetch("/user/connections/", {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				const currUserId = data.id;
				const tempData = data.data;
				const newData = [];
				tempData.map((friend) => {
					if (friend.reciever.id !== currUserId) {
						newData.push(friend.reciever);
					} else {
						newData.push(friend.sender);
					}
					return friend;
				});
				setFriendsList(newData);
			});
	}, []);

	return (
		<div>
			{friendsList.length > 0 ? (
				<div>
					{friendsList.map((friend) => {
						return (
							<People
								key={friend}
								followStatus={followStatus}
								friendId={friend}
							/>
						);
					})}
				</div>
			) : (
				<div className=" font-fredoka ml-3">
					You are not following anyone currently.
				</div>
			)}
		</div>
	);
}

export default PeopleList;
