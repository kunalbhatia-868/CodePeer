import React from "react";

function Post() {
	return (
		<div className="border-b-2 py-5 px-10 border-2 rounded-lg mx-4 my-5">
			<div className="author flex my-3 flex-row flex-nowrap items-center">
				<div className="author-image w-[40px] min-w-[40px]">
					<img
						className="rounded-full"
						src="https://media-exp1.licdn.com/dms/image/C5103AQHcmnpwX37ppg/profile-displayphoto-shrink_100_100/0/1535628659967?e=1652313600&v=beta&t=VscyWrZM8Q38npJ9PxRJzgP4Z3QXwCRSaZmqJi6B0Gc"
						alt=""
					/>
				</div>
				<div className="author-detail font-nunito flex flex-col items-start ml-3">
					<div className="author-profile flex flex-row items-center justify-around">
						<div className="font-semibold text-xs sm:text-base">Aman Gupta</div>
						<div className="text-xs sm:text-sm">• Following</div>
					</div>
					<div className="author-about text-[10px]">
						Co Founder and CMO at boAt Lifestyle(Hiring at all Levels)
					</div>
					<div className="post-date-time text-[12px]">• 2 days ago</div>
				</div>
			</div>
			<div className="content">
				<div className="text font-dosis font-semibold text-black">
					In boAt Lifestyle, we have a :- Chief Marketing Officer (CMO: Me) who
					hasn’t studied marketing and a Chief Product Officer (CPO: Sameer) who
					isn’t an engineer and a Chief Financial Officer (CFO: Ankur) who isn’t
					a Chartered Accountant. We believe in letting people follow their
					passion. We believe in doing what floats our boAt.
				</div>
				<div className="attachment mt-4 px-4">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png"
						alt=""
					/>
				</div>
			</div>
			<div className="like-comment"></div>
		</div>
	);
}

export default Post;
