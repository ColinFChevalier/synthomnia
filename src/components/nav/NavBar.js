import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/Play">Play</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/Moods">Moods</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/About">About</Link>
            </li>
        </ul>
    )
}