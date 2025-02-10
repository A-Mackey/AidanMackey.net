import "./App.scss";

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// General Components
import Space from "./Components/Space";
import Header from "./Components/Header";

// Main sPages
import Index from "./Pages/Index";
import Contact from "./Pages/Contact";

function App() {
	return (
		<div className="App">
			<Header />
			<Space />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Index />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
