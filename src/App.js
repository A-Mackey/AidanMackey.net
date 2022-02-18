import './App.scss';

// Components
import Space from './Components/Space'
import Header from './Components/Header'

// Pages
import Home from './Pages/Home'
import Experiences from './Pages/Experiences'
import About from './Pages/About'

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


    </div>
  );
}

export default App;
