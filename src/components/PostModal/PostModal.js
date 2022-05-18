import React from "react";

export const PostModal = () => {
	return (
		<div className="bg-white p-4 text-right">
			<div className="flex ">
				<div className="w-16 h-16">
					<img
						src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
						alt="user-img"
						className="w-full h-full rounded-full"
					/>
				</div>
				<textarea
					rows="5"
					cols="30"
					placeholder="Write something interesting..."
					className="bg-gray resize-none outline-none object-cover w-full h-36 p-2 ml-3"
				/>
			</div>
			<button className="bg-primary w-24 px-4 py-2 mt-4 text-white font-medium rounded-lg">
				Post
			</button>
		</div>
	);
};
