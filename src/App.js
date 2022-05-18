import { Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components/index";
import { Bookmark, Explore, Home, Profile } from "./pages/index";

function App() {
	return (
		<div className="box-border">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/profile" element={<Profile />}></Route>
				<Route path="/explore" element={<Explore />}></Route>
				<Route path="/bookmark" element={<Bookmark />}></Route>
				<Route path="/sidebar" element={<Sidebar />}></Route>
			</Routes>
		</div>
	);
}

export default App;
