import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Title from "./Title";
import Experience from "./Experience";

function App() {
	return (
		<div className="App">
			<Title />
			<Experience />
		</div>
	);
}

export default App;
