import "./App.css";
import Adbar from "./components/Adbar/Adbar";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<div className="app">
			<header>
				<Navbar />
			</header>
			<main className="flex flex-row justify-evenly">
				<Sidebar />
				<Feed/>
				<Adbar />
			</main>
		</div>
	);
}

export default App;
