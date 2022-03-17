import React from "react";
import People from "./People";

function PeopleList({ followStatus }) {
	return (
		<div>
			<div>
				<People followStatus={followStatus} />
				<People followStatus={followStatus} />
				<People followStatus={followStatus} />
				<People followStatus={followStatus} />
				<People followStatus={followStatus} />
				<People followStatus={followStatus} />
				<People followStatus={followStatus} />
				<People followStatus={followStatus} />
				<People followStatus={followStatus} />
			</div>
		</div>
	);
}

export default PeopleList;
