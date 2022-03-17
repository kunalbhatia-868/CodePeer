import "./App.css";
import Homepage from "./pages/HomePage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Peoples from "./pages/Peoples/Peoples";
function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Homepage />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/following" element={<Peoples />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
