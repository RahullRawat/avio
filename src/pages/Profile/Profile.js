import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Sidebar, RightSidebar, PostCard } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { toast } from "react-toastify";

export const Profile = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const user = useSelector((state) => state.auth);

	console.log(user);

	const logoutHandler = () => {
		dispatch(logout());
		toast.error("Logged out successfully");
		navigate("/");
	};
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
						<h1 className="font-bold text-2xl mt-2">{`${user.user.firstName} ${user.user.lastName}`}</h1>
						<h2 className="font-semibold text-xl opacity-60">
							@{user.user.username}
						</h2>
						<div>
							<button className="border border-primary text-primary px-8 py-1 mt-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4">
								Edit Profile
							</button>
							{user.token ? (
								<button
									className="border border-primary text-primary px-8 py-1 mt-4 ml-4 font-medium hover:bg-primary hover:text-white rounded-md mb-4"
									onClick={logoutHandler}
								>
									Logout
								</button>
							) : null}
						</div>
						<p className="font-semibold">{user.user.bio}</p>
						<Link to={user.user.website} className="text-primary font-semibold">
							{user.user.website}
						</Link>
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
