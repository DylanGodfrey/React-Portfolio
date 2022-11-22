// Import state management
import { useState } from 'react';

import './App.css'

// Import components and pages
import Nav from './components/Nav';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// Root Component
function App() {
  // State variable to determine current page
  const [page, setPage] = useState("about");

  // Render state based on page state
  function RenderPage(){
    switch(page){
      case "about":
        return <AboutMe />
      case "projects":
        return <Projects />
      case "resume":
        return <Resume />
      case "contact":
        return <Contact />
      default:
        return <AboutMe />
    }
  }
  return (
    // 
    <div className="App">
      <Nav page={page} setPage={setPage}/>
      <RenderPage />
      <Footer />
    </div>
  );
}

export default App;
