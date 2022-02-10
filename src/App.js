import './App.css';
import { useState } from "react";

// Pages
import Home from './Pages/Home'
import About from './Pages/About'

// Components
import NavBar from './Components/NavBar'

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const Pages = [
    {name:"Home", id: 0, page: <Home />},
    {name:"About", id: 1, page: <About />},
  ]

  return (
    <div>
      <div className='navbar'>
        <NavBar pages={ Pages } currentPage={ currentPage } setCurrentPage={setCurrentPage} /> 
      </div>
      
      <div className='currentPage'>
        <div> { Pages[currentPage].page } </div>
      </div>

    </div>
  );
}

export default App;
