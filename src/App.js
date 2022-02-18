import './App.scss';

// Components
import Space from './Components/Space'
import Header from './Components/Header'
import Home from './Pages/Home'
import Experiences from './Pages/Experiences'

function App() {
  return (
    <div className="App">
      {/* Fixed position over screen */}
      <Space />
      <Header />

      {/* Pages */}
      <Home />

      <Experiences />


    </div>
  );
}

export default App;
