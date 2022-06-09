import "./App.scss";

// Components
import Space from "./Components/Space";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import Experiences from "./Pages/Experiences";
import About from "./Pages/About";

function App() {
	return (
		<div className="App">
			{/* Fixed position over screen */}
			<Space />
			<Header />

			{/* Pages */}
			<Home />
			<About />
			<Experiences />
			<Footer />
		</div>
	);
}

export default App;
