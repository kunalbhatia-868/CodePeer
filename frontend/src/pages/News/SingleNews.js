import React from "react";

function SingleNews({ news }) {
	const { title, author, source, description, url, image } = news;
	return (
		<a href={url}>
			<div
				href={url}
				className="my-6 px-5 py-3 hover:shadow-md hover:bg-gray-100 hover:rounded-sm border-2 rounded-lg"
			>
				<div className="flex flex-col items-left mb-3">
					<div className="ml-2 text-cyan-700 font-nunito font-semibold text-sm">
						{title}
					</div>
					<div className="ml-2 mt-3 font-sans font-medium text-right text-sm italic">
						:{source}
					</div>
				</div>
				<hr className="my-5" />
				<img src={image} alt="" className="w-100" />
				<div className=" font-fredoka font-sm italic leading-snug">
					{description}
				</div>
				{author && (
					<div className="ml-2 mt-3 font-sans font-medium text-right text-sm italic">
						:{author}
					</div>
				)}
			</div>
		</a>
	);
}

export default SingleNews;
