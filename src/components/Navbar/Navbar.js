import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {
	const user = useSelector((state) => state.auth);
	return (
		<nav className="font-roboto bg-white shadow-md py-4 sticky w-full  top-0 z-10">
			<div className="max-w-[80%] mx-auto flex justify-between items-center sm:max-w-[90%]">
				<Link to="/">
					<span className="text-3xl font-bold text-primary cursor-pointer">
						Avio
					</span>
				</Link>

				{user.token ? (
					<Link to="/profile">
						<img
							src="https://i.pravatar.cc/60"
							alt="profile"
							className="w-12 h-12 rounded-full cursor-pointer"
						/>
					</Link>
				) : (
					<Link to="/login">
						<button className="bg-primary w-24  py-1 text-white font-medium rounded-lg">
							Login
						</button>
					</Link>
				)}
			</div>
		</nav>
	);
};
