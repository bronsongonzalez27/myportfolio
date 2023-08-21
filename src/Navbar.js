// Import necessary tools from a library
import { Link, useMatch, useResolvedPath } from "react-router-dom"

// Create the navigation bar component for the website
export default function Navbar() {
  return (
    // Create a navigation section
    <nav className="nav">
      {/* Create a link to the portfolio with a title */}
      <Link to="Bronson Gonzalez" className="Portfolio-title">
 
      </Link>
      {/* Create a list of links */}
      <ul>
        {/* Add a link to the "Contact" page */}
        <CustomLink to="/Home">Get in Touch</CustomLink>
     
        {/* Add a link to the "About" page */}
        <CustomLink to="/about">About Me</CustomLink>
      </ul>
    </nav>
  )
}


// Import required tools for the link
function CustomLink({ to, children, ...props }) {
    // Get the path for the link
    const resolvedPath = useResolvedPath(to);
    
    // Check if the link's path matches the current page's path
    // The link should match the whole path, not just a part
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    
    // Create the link with a possible "active" style
    return (
      // If the link is active, give it a special style
      <li className={isActive ? "active" : ""}>
        {/* Show the link with its content */}
        <Link to={to} {...props}>
          {/* Show the content inside the link */}
          {children}
        </Link>
      </li>
    );
  }
  