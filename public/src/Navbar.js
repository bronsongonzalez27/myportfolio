import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="Bronson Gonzalez" className="site-title">
       Bronson Gonzalez
      </Link>
      <ul>
        <CustomLink to="/Contact">Contact Me Here!</CustomLink>
        <CustomLink to="/about">About me!</CustomLink>
      </ul>
    </nav>
  )
}