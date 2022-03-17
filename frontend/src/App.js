import "./App.css";
import Homepage from "./pages/HomePage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Peoples from "./pages/Peoples/Peoples";
import PostDetail from "./pages/PostDetail/PostDetail";
import Notification from "./pages/Notification/Notification";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route exact path="/feed" element={<Homepage />} />
					<Route exact path="/feed/:id" element={<PostDetail />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/following" element={<Peoples />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<Signup />} />
					<Route exact path="/notification" element={<Notification />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
