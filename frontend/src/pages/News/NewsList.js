import React, { useEffect, useState } from "react";
import SingleNews from "./SingleNews";

function NewsList() {
	const [newsData, setNewsData] = useState([]);

	useEffect(() => {
		fetch(
			"http://api.mediastack.com/v1/news?access_key=266ba54bc89e2e55d65d504462eb9313&keywords=coding&countries=in,us"
		)
			.then((response) => response.json())
			.then((data) => setNewsData(data.data));
	}, []);

	return (
		<div className="mt-7 w-2/3 md:w-1/2 block overflow-y-scroll h-screen noscroll">
			<div className="font-nunito text-center text-2xl font-bold mx-3">
				Latest Tech News ⚡
			</div>
			<div>
				{newsData.map((news) => {
					return <SingleNews news={news} key={news.published_at} />;
				})}
			</div>
		</div>
	);
}

export default NewsList;
