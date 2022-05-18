import React from "react";

export const RightSidebar = () => {
	return (
		<aside className="fixed  min-w-[15%] right-[10%] md:hidden">
			<div className="bg-white p-2 px-4 flex items-center">
				<i class="fa-solid fa-magnifying-glass"></i>
				<input
					type="text"
					placeholder="Search posts"
					className="w-full outline-none ml-4"
				/>
			</div>

			<div className="mt-4 mb-1 bg-white p-2 px-4 font-semibold">
				<h3>Who to follow?</h3>
			</div>

			<div className="flex justify-between bg-white p-4 px-4">
				<div className="flex">
					<img
						src="https://i.pravatar.cc/60"
						alt="profile"
						className="w-12 h-12 rounded-full"
					/>
					<div className="ml-4">
						<h3 className="font-bold">User One</h3>
						<h6 className="text-sm">@userone</h6>
					</div>
				</div>
				<button className="text-primary font-bold cursor-pointer">
					Follow+
				</button>
			</div>
			<div className="flex justify-between bg-white p-4 px-4">
				<div className="flex">
					<img
						src="https://i.pravatar.cc/60"
						alt="profile"
						className="w-12 h-12 rounded-full"
					/>
					<div className="ml-4">
						<h3 className="font-bold">User One</h3>
						<h6 className="text-sm">@userone</h6>
					</div>
				</div>
				<button className="text-primary font-bold cursor-pointer">
					Follow+
				</button>
			</div>
			<div className="flex justify-between bg-white p-4 px-4">
				<div className="flex">
					<img
						src="https://i.pravatar.cc/60"
						alt="profile"
						className="w-12 h-12 rounded-full"
					/>
					<div className="ml-4">
						<h3 className="font-bold">User One</h3>
						<h6 className="text-sm">@userone</h6>
					</div>
				</div>
				<button className="text-primary font-bold cursor-pointer">
					Follow+
				</button>
			</div>
			<div className="flex justify-between bg-white p-4 px-4">
				<div className="flex">
					<img
						src="https://i.pravatar.cc/60"
						alt="profile"
						className="w-12 h-12 rounded-full"
					/>
					<div className="ml-4">
						<h3 className="font-bold">User One</h3>
						<h6 className="text-sm">@userone</h6>
					</div>
				</div>
				<button className="text-primary font-bold cursor-pointer">
					Follow+
				</button>
			</div>
		</aside>
	);
};
