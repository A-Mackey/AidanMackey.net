import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
	return (
		<div className="App">
			<Navbar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<div>Page2</div>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
