import React from "react";
import { Sidebar, RightSidebar, PostCard } from "../../components";

export const Profile = () => {
	return (
		<div className="bg-gray  min-h-screen py-3 w-full">
			<div className="max-w-[80%] mx-auto flex justify-between sm:max-w-[90%]">
				<Sidebar />
				<div className="w-[55%] mx-auto xl:ml-[12rem] lg:w-[45%] md:ml-[6rem] md:w-[100%] sm:ml-[4rem]">
					<div className="flex flex-col text-center items-center">
						<img
							src="https://i.pravatar.cc/200"
							className="rounded-full"
							alt="profile"
						/>
						<h1 className="font-bold text-2xl mt-2">Rahul Rawat</h1>
						<h2 className="font-semibold text-xl opacity-60">@rahulrawat</h2>
						<button className="border border-primary text-primary px-8 py-1 mt-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4">
							Edit Profile
						</button>
						<p className="font-semibold">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
							dolorem debitis eaque animi veritatindae saepe nesciunt assumenda
							quaerat officia earum molestias.
						</p>
						<h6 className="text-primary font-semibold">www.xyz.com</h6>
					</div>
					<h1 className="my-4 font-bold text-2xl">Your Posts</h1>
					<PostCard />
					<PostCard />
					<PostCard />
				</div>
				<RightSidebar />
			</div>
		</div>
	);
};
