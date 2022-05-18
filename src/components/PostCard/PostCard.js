import React from "react";

export const PostCard = () => {
	return (
		<div className="bg-white p-4 rounded-md mb-4">
			<div className="flex ">
				<img
					src="https://i.pravatar.cc/60"
					alt="profile"
					className="w-16 h-16 rounded-full"
				/>
				<div>
					<div className="flex">
						<div className="ml-4">
							<h1 className="font-bold mb-1">
								Rahul Singh
								<span className="font-normal ml-1">@rahulrawat . 1m</span>
							</h1>
							<p className="font-normal">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
								provident unde laborum repellat temporibus rem doloribus
								tempore, sit ipsa obcaecattenetur culpa, obcaecati saepe et
								aperiam voluptatum id itaque commodi maiores officiis!
							</p>
						</div>
						<i className="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
					</div>
					<div className="flex justify-between  p-4">
						<i className="fa-regular fa-heart cursor-pointer"></i>
						<i className="fa-regular fa-comment cursor-pointer"></i>
						<i className="fa-regular fa-bookmark cursor-pointer"></i>
					</div>
				</div>
			</div>
		</div>
	);
};
