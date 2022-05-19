import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../redux/thunks/authThunk";
import { toast } from "react-toastify";

export const Signup = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const [userData, setUserData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		username: "",
		password: "",
	});

	const inputChangeHandler = (e) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const signUpHandler = async (e) => {
		e.preventDefault();
		if (
			userData.username &&
			userData.firstname &&
			userData.lastname &&
			userData.email &&
			userData.password
		) {
			const response = await dispatch(signUp(userData));
			console.log("signup", response);
			if (response.payload.status === 201) {
				localStorage.setItem(
					"user",
					JSON.stringify(response.payload.data.createdUser)
				);
				localStorage.setItem("token", response.payload.data.encodedToken);
			}
			navigate(location?.state?.from?.pathname || "/", { replace: true });
			toast.success("Signed Up Successfully");
		} else {
			toast.warning("Please fill all the fields");
		}
	};
	return (
		<section className="flex items-center justify-center h-[90vh]">
			<div className="shadow-lg p-8 w-[25rem]">
				<h1 className="text-center text-2xl font-bold text-primary mb-4">
					Signup
				</h1>
				<form className="flex flex-col" onSubmit={signUpHandler}>
					<label htmlFor="firstname" className="font-medium">
						First Name
					</label>
					<input
						id="firstname"
						type="text"
						placeholder="Enter First Name"
						name="firstname"
						className="p-2 border rounded-md mb-2"
						value={userData.firstname}
						onChange={(e) => inputChangeHandler(e)}
						autoComplete="off"
					/>

					<label htmlFor="lastname" className="font-medium">
						Last Name
					</label>
					<input
						id="lastname"
						type="text"
						placeholder="Enter Last Name"
						name="lastname"
						className="p-2 border rounded-md mb-2"
						value={userData.lastName}
						onChange={(e) => inputChangeHandler(e)}
						autoComplete="off"
					/>

					<label htmlFor="email" className="font-medium">
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Enter Email"
						name="email"
						className="p-2 border rounded-md mb-2"
						value={userData.email}
						onChange={(e) => inputChangeHandler(e)}
						autoComplete="off"
					/>

					<label htmlFor="username" className="font-medium">
						Username
					</label>
					<input
						id="username"
						type="text"
						placeholder="Enter Username"
						name="username"
						className="p-2 border rounded-md mb-2"
						value={userData.username}
						onChange={(e) => inputChangeHandler(e)}
						autoComplete="off"
					/>

					<label htmlFor="password" className="font-medium">
						Password
					</label>
					<input
						id="password"
						type="password"
						placeholder="Enter password"
						name="password"
						className="p-2 border rounded-md mb-2"
						value={userData.password}
						onChange={(e) => inputChangeHandler(e)}
						autoComplete="off"
					/>

					<div className="term-condition">
						<input id="term-condition" type="checkbox" />
						<label htmlFor="term-condition" className="ml-2">
							I accept all terms & conditions
						</label>
					</div>

					<button
						type="submit"
						className="bg-primary px-4 py-2 mt-4 text-white font-medium rounded-lg"
					>
						Signup
					</button>

					<div className="text-center">
						Already have an account ?{" "}
						<Link to="/login">
							<span className="ml-2 underline">Login</span>
						</Link>
					</div>
				</form>
			</div>
		</section>
	);
};
