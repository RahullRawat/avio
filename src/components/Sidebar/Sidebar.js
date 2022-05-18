import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
	return (
		<aside className="fixed  min-w-[10%] md:w-fit md:border-r-2 md:border-primary/75 min-h-full">
			<ul>
				<Link to="/">
					<li className=" cursor-pointer text-xl p-2 py-3 rounded-lg font-medium hover:bg-white hover:text-primary">
						<i className="mr-4 fa-solid fa-house"></i>
						<span className="md:hidden">Home</span>
					</li>
				</Link>
				<Link to="/explore">
					<li className=" cursor-pointer text-xl p-2 py-3 rounded-lg font-medium hover:bg-white hover:text-primary">
						<i className="mr-4 fa-solid fa-rocket"></i>
						<span className="md:hidden">Explore</span>
					</li>
				</Link>
				<Link to="/bookmark">
					<li className=" cursor-pointer text-xl p-2 py-3 rounded-lg font-medium hover:bg-white hover:text-primary">
						<i className="mr-4 fa-solid fa-bookmark"></i>
						<span className="md:hidden">Bookmarks</span>
					</li>
				</Link>
				<Link to="/profile">
					<li className=" cursor-pointer text-xl p-2 py-3 rounded-lg font-medium hover:bg-white hover:text-primary">
						<i className="mr-4 fa-solid fa-user"></i>
						<span className="md:hidden">Profile</span>
					</li>
				</Link>
				<li className="hidden cursor-pointer text-xl p-2 py-3 rounded-lg font-medium hover:bg-white hover:text-primary md:block">
					<i class="fa-solid fa-circle-plus"></i>
				</li>
			</ul>
			<button className="bg-primary w-52 px-3 py-2 mt-4 text-white font-medium rounded-lg xl:w-40 md:hidden">
				Create New Post
			</button>
		</aside>
	);
};
