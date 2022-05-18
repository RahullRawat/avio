import React from "react";
import {
	RightSidebar,
	Sidebar,
	PostModal,
	PostCard,
} from "../../components/index";

export const Home = () => {
	return (
		<div className="bg-gray  min-h-screen py-3 w-full">
			<div className="max-w-[80%] mx-auto flex justify-between sm:max-w-[90%]">
				<Sidebar />
				<div className="max-w-[55%] mx-auto  xl:ml-[12rem] lg:max-w-[45%] md:ml-[6rem] md:max-w-[100%] sm:ml-[4rem]">
					<PostModal />
					<h1 className="my-4 font-bold text-2xl">Latest Posts</h1>
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
