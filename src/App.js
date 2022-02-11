import './App.css';
import { useState } from "react";

// Pages
import Home from './Pages/Home'
import Experience from './Pages/Experience'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'

// Components
import NavBar from './Components/NavBar'

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const Pages = [
    {name:"Home", id: 0, page: <Home />},
    {name:"Experience", id: 1, page: <Experience />},
    {name:"Projects", id: 1, page: <Projects />},
    {name:"Contact", id: 1, page: <Contact />},
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
