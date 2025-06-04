// Sections
import Home from "./Sections/Home";
import Experiences from "./Sections/Experiences";
import About from "./Sections/About";
import Projects from "./Sections/Projects";

// Components
import Footer from "../Components/Footer";
import Chat from "../Components/Chat";

function Index() {
	return (
		<div>
			<Home />
			<About />
			<Experiences />
			<Projects />
			<Chat />
			<Footer />
		</div>
	);
}

export default Index;
