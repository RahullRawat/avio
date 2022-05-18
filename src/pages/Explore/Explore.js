import React from "react";
import { Sidebar, RightSidebar, PostCard } from "../../components";

export const Explore = () => {
	return (
		<div className="bg-gray  min-h-screen py-3 w-full">
			<div className="max-w-[80%] mx-auto flex justify-between sm:max-w-[90%]">
				<Sidebar />
				<div className="w-[55%] mx-auto xl:ml-[12rem] lg:w-[45%] md:ml-[6rem] md:w-[100%] sm:ml-[4rem]">
					<h1 className="my-4 font-bold text-2xl">Explore</h1>
					<div className="flex">
						<button className="border border-primary text-primary text-sm px-4 py-1 mr-2 mt-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4 lg:px-1 sm:text-xs">
							For You
						</button>
						<button className="border border-primary text-primary text-sm px-4 py-1 mr-2 mt-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4 lg:px-1 sm:text-xs">
							Trending
						</button>
						<button className="border border-primary text-primary text-sm px-4 py-1 mr-2 mt-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4 lg:px-1 sm:text-xs">
							Sports
						</button>
						<button className="border border-primary text-primary text-sm px-4 py-1 mr-2 mt-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4 lg:px-1 sm:text-xs">
							Technology
						</button>
						<button className="border border-primary text-primary text-sm px-4 py-1 mr-2 mt-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4 lg:px-1 sm:text-xs">
							News
						</button>
					</div>
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
