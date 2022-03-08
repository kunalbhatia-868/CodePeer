import "./App.css";
import Adbar from "./components/Adbar/Adbar";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<div className="app">
			<header>
				<Navbar />
			</header>
			<main className="flex flex-row justify-between">
				<Sidebar />
				<Adbar />
			</main>
		</div>
	);
}

export default App;
