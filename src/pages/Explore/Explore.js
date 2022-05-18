import React from "react";
import { Sidebar, RightSidebar, PostCard } from "../../components";

export const Explore = () => {
	return (
		<div className="bg-gray  min-h-screen py-3 w-full">
			<div className="max-w-[80%] mx-auto flex justify-between sm:max-w-[90%]">
				<Sidebar />
				<div className="w-[55%] mx-auto xl:ml-[12rem] lg:w-[45%] md:ml-[6rem] md:w-[100%] sm:ml-[4rem]">
					<h1 className="my-4 font-bold text-2xl">Explore</h1>
					<div className="flex justify-between">
						<button className="border border-primary text-primary text-sm px-1 py-1 mt-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4">
							For You
						</button>
						<button className="border border-primary text-primary text-sm px-1 py-1 mt-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4">
							Trending
						</button>
						<button className="border border-primary text-primary text-sm px-1 py-1 mt-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4">
							Sports
						</button>
						<button className="border border-primary text-primary text-sm px-1 py-1 mt-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4">
							Technology
						</button>
						<button className="border border-primary text-primary text-sm px-1 py-1 mt-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4">
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
