import React, { useEffect, useState } from "react";
import People from "./People";

function PeopleList({ followStatus }) {
	const [friendsList, setFriendsList] = useState([]);

	let token = JSON.parse(localStorage.jwt);

	useEffect(() => {
		let friendUrl = `user/friends`;

		fetch(friendUrl, {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setFriendsList(data.data);
				const currUserId = data.id;
				const tempData = [...data.data];
				const newData = [];
				tempData.map((friend) => {
					if (friend.reciever.id !== currUserId) {
						newData.push(friend.reciever);
					} else {
						newData.push(friend.sender);
					}
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
								key={friend.id}
								followStatus={followStatus}
								friendData={friend}
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
