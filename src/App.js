import './App.scss';

// Components
import Space from './Components/Space'
import Header from './Components/Header'
import Home from './Pages/Home'
import Experiences from './Pages/Experiences'

function App() {
  return (
    <div className="App">
      <Space />

      <Header />

      <Home />

      <Experiences />


    </div>
  );
}

export default App;
