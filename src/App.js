import { Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components/index";
import { Bookmark, Explore, Home, Login, Profile, Signup } from "./pages/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="box-border">
			<ToastContainer
				position="top-center"
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				theme="colored"
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
				<Route path="/explore" element={<Explore />}></Route>
				<Route path="/bookmark" element={<Bookmark />}></Route>
				<Route path="/sidebar" element={<Sidebar />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<Signup />}></Route>
			</Routes>
		</div>
	);
}

export default App;
