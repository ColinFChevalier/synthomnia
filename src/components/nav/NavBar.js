import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"


export const NavBar = (props) => {
    return (
        <div style={{ width: props.width, paddingTop: '2em' }}>
            <ul className="navbar">
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/play">Play</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/moods">Moods</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}

{/* <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/play">Play</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/moods">Moods</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/about">About</Link>
            </li>
        </ul> */}