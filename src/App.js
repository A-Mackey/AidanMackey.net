import "./App.scss";

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Space from "./Components/Space";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Chat from "./Components/Chat";

// Pages
import Home from "./Pages/Home";
import Experiences from "./Pages/Experiences";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";

function App() {
	return (
		<div className="App">
			<Header />
			<Space />
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<div>
								<Home />
								<About />
								<Experiences />
								<Projects />
								<Chat />
								<Footer />
							</div>
						}
					/>

					<Route path="/contact" element={<Contact />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
