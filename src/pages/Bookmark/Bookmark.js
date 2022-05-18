import React from "react";
import { Sidebar, RightSidebar, PostCard } from "../../components";

export const Bookmark = () => {
	return (
		<div className="bg-gray  min-h-screen py-3 w-full">
			<div className="max-w-[80%] mx-auto flex justify-between sm:max-w-[90%]">
				<Sidebar />
				<div className="w-[55%] mx-auto xl:ml-[12rem] lg:w-[45%] md:ml-[6rem] md:w-[100%] sm:ml-[4rem]">
					<h1 className="my-4 font-bold text-2xl">Your Bookmarks</h1>
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
				</div>
				<RightSidebar />
			</div>
		</div>
	);
};
