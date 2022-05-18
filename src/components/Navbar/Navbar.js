import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="font-roboto bg-white shadow-md py-4 sticky w-full  top-0 z-10">
			<div className="max-w-[80%] mx-auto flex justify-between items-center sm:max-w-[90%]">
				<Link to="/">
					<span className="text-3xl font-bold text-primary cursor-pointer">
						Avio
					</span>
				</Link>
				<img
					src="https://i.pravatar.cc/60"
					alt="profile"
					className="w-12 h-12 rounded-full cursor-pointer"
				/>
			</div>
		</nav>
	);
};
