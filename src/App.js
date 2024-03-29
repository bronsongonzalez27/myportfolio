// Import the necessary parts from different files
import Navbar from "./Navbar"
import ContactPage from "./pages/Contact"
import HomePage from "./pages/Home"
import AboutPage from "./pages/Home"; 
import ResumePage from "./pages/Resume"; 
import ProjectsPage from "./pages/Projects";

import { Route, Routes } from "react-router-dom"

// Create the main App component
function App() {
  return (
    // Start of the main part of the app
    <>
      {/* Display the navigation bar */}
      <Navbar />
      {/* Create a container for the page content */}
      <div className="content-container">
        {/* Define different routes */}
        <Routes>
          {/* Display the Home page when the URL is "/" */}
          <Route path="/" element={<HomePage />} />
          {/* Display the Contact page when the URL is "/contact" */}
          <Route path="/contact" element={<ContactPage />} />
          {/* Display the About page when the URL is "/about" */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </>
  )
}

// Make the App component available for other files to use
export default App
