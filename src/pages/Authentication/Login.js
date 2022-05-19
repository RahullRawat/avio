import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIN } from "../../redux/thunks/authThunk";
import { toast } from "react-toastify";

export const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [userData, setUserData] = useState({
		username: "",
		password: "",
	});

	const inputHandler = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const guestLoginHandler = (e) => {
		e.preventDefault();
		setUserData({
			...userData,
			username: "Guestuser",
			password: "GuestUser123",
		});
	};

	const logInHandler = async (e) => {
		e.preventDefault();
		if (userData.username && userData.password) {
			const response = await dispatch(logIN(userData));
			if (response.payload.status === 200) {
				localStorage.setItem(
					"user",
					JSON.stringify(response.payload.data.foundUser)
				);
				localStorage.setItem("token", response.payload.data.encodedToken);
			}
			navigate(location?.state?.from?.pathname || "/", { replace: true });
			toast.success("Successfully Logged in");
		} else {
			toast.warning("Fill both the fields");
		}
	};

	return (
		<section className="flex items-center justify-center h-[90vh]">
			<div className="shadow-lg p-8 w-[25rem]">
				<h1 className="text-center text-2xl font-bold text-primary mb-4">
					Login
				</h1>
				<form className="flex flex-col">
					<label htmlFor="email" className="font-medium">
						Email
					</label>
					<input
						id="username"
						name="username"
						type="username"
						placeholder="Enter Username"
						className="p-2 border rounded-md mb-2"
						value={userData.username}
						onChange={(e) => inputHandler(e)}
						autoComplete="off"
					/>

					<label htmlFor="password" className="font-medium">
						Password
					</label>
					<input
						id="password"
						name="password"
						type="password"
						placeholder="Enter password"
						className="p-2 border rounded-md mb-2"
						value={userData.password}
						onChange={(e) => inputHandler(e)}
						autoComplete="off"
					/>
					<Link to="#" className="forgot-password">
						Forgot Your Password ?
					</Link>
					<button
						type="submit"
						onClick={logInHandler}
						className="bg-primary px-4 py-2 mt-4 text-white font-medium rounded-lg"
					>
						Login
					</button>
					<button
						className="border-primary border px-4 py-2 mt-2 text-primary font-medium rounded-lg"
						onClick={guestLoginHandler}
					>
						Guest Login
					</button>

					<div className="text-center">
						Don't have an account ?
						<Link to="/signup">
							<span className="ml-2 underline">Sign Up</span>
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
};
