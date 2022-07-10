import React from "react"
import { Link } from "gatsby"
import { top, btn } from "../styles/nav.module.css"

export default function Navbar() {
  return (
    <nav className={top}>
      <h1>Frog Wizard Board Game</h1>
      <div className="links">
        <Link to="/rules">Rules</Link>
        <Link to="/creatures">Creatures</Link>
        <Link to="/equipment">Equipment</Link>
      </div>
    </nav>
  )
}
